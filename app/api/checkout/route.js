import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import { getOrCreateStripeCustomer } from '@/lib/billing/subscriptions'
import { getStripe } from '@/lib/stripe'
import { trackPaywallEventServer } from '@/lib/analytics/paywallEvents'
import { PAYWALL_EVENTS } from '@/lib/analytics/paywallEvents'
import { isBillingCheckoutEnabled } from '@/lib/config/featureFlags'
import { isValidFromKey } from '@/lib/billing/fromMap'

const PLANOVI = {
  starter: process.env.NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID,
  pro:     process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
  pro_god: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
}

export async function POST(request) {
  if (!isBillingCheckoutEnabled()) {
    return NextResponse.json(
      { error: 'Naplata je privremeno nedostupna.', code: 'FEATURE_DISABLED' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  try {
    const { plan, from } = await request.json()

    // ── Validate plan ───────────────────────────────────────────────────────
    const priceId = PLANOVI[plan]
    if (!priceId) {
      return NextResponse.json({ error: 'Nepoznati plan' }, { status: 400 })
    }

    // ── Auth ────────────────────────────────────────────────────────────────
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() { return cookieStore.getAll() },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          },
        },
      }
    )

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Nisi prijavljen' }, { status: 401 })
    }

    // ── Spriječi dvostruku pretplatu ─────────────────────────────────────────
    // Ako korisnik već ima aktivnu/trialing pretplatu, ne otvaraj novi checkout
    // (inače nastaje paralelna druga naplata) — vodi ga na upravljanje/portal.
    const { data: existingSub } = await supabase
      .from('subscriptions')
      .select('status')
      .eq('user_id', user.id)
      .in('status', ['active', 'trialing'])
      .maybeSingle()
    if (existingSub) {
      return NextResponse.json(
        { error: 'Već imaš aktivnu pretplatu. Upravljaj njome kroz portal.', code: 'ALREADY_SUBSCRIBED' },
        { status: 409 }
      )
    }

    // ── Reuse Stripe customer — prevents duplicate customers ─────────────────
    // getOrCreateStripeCustomer looks up the subscriptions table first so
    // returning customers reuse the same customer object on Stripe.
    const customerId = await getOrCreateStripeCustomer({
      userId: user.id,
      email:  user.email,
    })

    const stripe = getStripe()

    // Sanitiziraj "from" (whitelist) prije ugrađivanja u Stripe URL-ove — tako se
    // odredište prenosi kroz checkout i /pro obećanje "vraćamo te natrag" postaje istinito.
    const safeFrom = isValidFromKey(from) ? from : ''
    const fromQS = safeFrom ? `&from=${safeFrom}` : ''

    // ── Create checkout session ──────────────────────────────────────────────
    // user_id in both metadata AND subscription_data.metadata so
    // it's available on both checkout.session.completed and
    // customer.subscription.* events.
    const session = await stripe.checkout.sessions.create({
      mode:                 'subscription',
      payment_method_types: ['card'],
      customer:             customerId,
      line_items:           [{ price: priceId, quantity: 1 }],
      metadata:             { user_id: user.id, plan },
      subscription_data: {
        metadata: { user_id: user.id, plan },
      },
      success_url: `${process.env.NEXT_PUBLIC_URL}/uspjeh?session_id={CHECKOUT_SESSION_ID}${fromQS}`,
      // Odustajanje vodi na /pro s canceled bannerom (koji je prije bio mrtav kod jer je
      // cancel išao na /#cijene) uz očuvani "from" za povratni gumb.
      cancel_url:  `${process.env.NEXT_PUBLIC_URL}/pro?canceled=1${fromQS}`,
      // Allow promo codes
      allow_promotion_codes: true,
    })

    // Track
    trackPaywallEventServer(user.id, PAYWALL_EVENTS.CHECKOUT_STARTED, {
      tier:   plan,
      source: from ?? 'unknown',
    }).catch(() => {})

    return NextResponse.json({ url: session.url })

  } catch (error) {
    console.error('[checkout] Stripe greška:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
