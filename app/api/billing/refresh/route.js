import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { getStripe } from '@/lib/stripe'
import { syncSubscriptionToSupabase, getUserEntitlements } from '@/lib/billing/subscriptions'
import { createAdminClient } from '@/lib/supabase/admin'
import { trackPaywallEventServer, PAYWALL_EVENTS } from '@/lib/analytics/paywallEvents'

// POST /api/billing/refresh
// ─────────────────────────────────────────────────────────────────────────────
// Called from the /uspjeh success page immediately after redirect from Stripe.
// Pulls fresh subscription state directly from the Stripe API and syncs to
// Supabase — bypassing the webhook delay.
//
// Frontend pattern:
//   1. Stripe redirects to /uspjeh?session_id=cs_xxx
//   2. Page calls POST /api/billing/refresh with the session_id
//   3. We verify the session belongs to the authed user, then sync from Stripe
//   4. Return { tier, status, entitlements } — frontend updates UI optimistically
//
// Idempotent — safe to call multiple times (upsert logic inside syncSubscription)

export async function POST(req) {
  // ── Auth ────────────────────────────────────────────────────────────────────
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
    return NextResponse.json({ error: 'Nisi prijavljen.' }, { status: 401 })
  }

  // ── Resolve the Stripe subscription ─────────────────────────────────────────
  const stripe = getStripe()
  const db = createAdminClient()

  let subscriptionId = null

  // Option A: session_id provided (fresh checkout redirect)
  const { session_id } = await req.json().catch(() => ({}))
  if (session_id) {
    try {
      const session = await stripe.checkout.sessions.retrieve(session_id)

      // Security: session must belong to the authenticated user
      if (session.metadata?.user_id !== user.id) {
        return NextResponse.json({ error: 'Session does not belong to this user.' }, { status: 403 })
      }

      subscriptionId = typeof session.subscription === 'string'
        ? session.subscription
        : session.subscription?.id
    } catch {
      return NextResponse.json({ error: 'Session nenađena.' }, { status: 404 })
    }
  }

  // Option B: no session_id — look up their existing subscription in DB
  if (!subscriptionId) {
    const { data: sub } = await db
      .from('subscriptions')
      .select('stripe_subscription_id')
      .eq('user_id', user.id)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle()

    subscriptionId = sub?.stripe_subscription_id ?? null
  }

  if (!subscriptionId) {
    // No subscription found — user is on the free tier. Return free entitlements.
    return NextResponse.json({
      tier:         'free',
      status:       'none',
      entitlements: await getUserEntitlements(user.id),
    })
  }

  // ── Pull from Stripe + sync to Supabase ─────────────────────────────────────
  try {
    const stripeSub = await stripe.subscriptions.retrieve(subscriptionId, {
      expand: ['items.data.price'],
    })
    const result = await syncSubscriptionToSupabase(user.id, stripeSub, db)

    // Track
    if (session_id) {
      trackPaywallEventServer(user.id, PAYWALL_EVENTS.CHECKOUT_COMPLETED, {
        tier: result.plan,
        source: 'refresh_endpoint',
      }).catch(() => {})
    }

    // Return fresh entitlements — frontend reads this to update UI without page reload
    const entitlements = await getUserEntitlements(user.id)
    return NextResponse.json({
      tier:         result.plan,
      status:       result.status,
      periodEnd:    result.periodEnd,
      entitlements,
    })

  } catch (err) {
    console.error('[billing/refresh] error:', err.message)
    return NextResponse.json({ error: 'Sinkronizacija nije uspjela.' }, { status: 500 })
  }
}
