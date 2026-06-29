// app/api/stripe/portal/route.js
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
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
      return NextResponse.json({ error: 'Nisi prijavljen.' }, { status: 401 })
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('stripe_customer_id')
      .eq('id', user.id)
      .single()

    if (!profile?.stripe_customer_id) {
      return NextResponse.json({ error: 'Nema aktivne pretplate.' }, { status: 400 })
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

    const portalSession = await getStripe().billingPortal.sessions.create({
      customer:   profile.stripe_customer_id,
      return_url: `${appUrl}/plan-ucenja`,
    })

    return NextResponse.json({ url: portalSession.url })

  } catch (error) {
    console.error('Portal error:', error)
    return NextResponse.json(
      { error: error.message || 'Greška pri otvaranju portala.' },
      { status: 500 }
    )
  }
}