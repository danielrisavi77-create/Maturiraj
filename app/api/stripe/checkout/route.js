// app/api/stripe/checkout/route.js
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@/lib/supabase/server'

let _stripe = null
function getStripe() {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
    _stripe = new Stripe(key, { apiVersion: '2024-06-20' })
  }
  return _stripe
}

export async function POST(request) {
  try {
    const { priceId, planName } = await request.json()

    if (!priceId) {
      return NextResponse.json({ error: 'priceId je obavezan.' }, { status: 400 })
    }

    // Dohvati prijavljenog korisnika
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Nisi prijavljen.' }, { status: 401 })
    }

    // Dohvati profil — provjeri ima li već Stripe customer ID
    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id, email, full_name')
      .eq('id', user.id)
      .single()

    let customerId = profile?.stripe_customer_id

    // Ako nema customer ID, kreiraj Stripe customer
    if (!customerId) {
      const customer = await getStripe().customers.create({
        email: profile?.email || user.email,
        name:  profile?.full_name || undefined,
        metadata: { supabase_user_id: user.id },
      })
      customerId = customer.id

      // Spremi customer ID u profil
      await supabase
        .from('profiles')
        .update({ stripe_customer_id: customerId })
        .eq('id', user.id)
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    // Kreiraj Checkout Session
    const session = await getStripe().checkout.sessions.create({
      customer:    customerId,
      mode:        'subscription',
      line_items:  [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/pro/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:  `${appUrl}/pro?canceled=1`,
      metadata: {
        supabase_user_id: user.id,
        plan_name:        planName || 'pro',
      },
      subscription_data: {
        metadata: {
          supabase_user_id: user.id,
          plan_name:        planName || 'pro',
        },
      },
      // Automatski popuni email
      customer_email: customerId ? undefined : user.email,
      // Lokalizacija
      locale: 'hr',
      // Dozvoli promocijske kodove
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })

  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Greška pri kreiranju checkout sessione.' },
      { status: 500 }
    )
  }
}