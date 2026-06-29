// app/api/stripe/webhook/route.js
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createAdminClient } from '@/lib/supabase/server'

let _stripe = null
function getStripe() {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
    _stripe = new Stripe(key, { apiVersion: '2024-06-20' })
  }
  return _stripe
}

// Mapiranje Stripe price ID → plan type
// Popuni s tvojim pravim price ID-evima iz .env
function getPlanType(priceId) {
  const starterPrices = (process.env.STRIPE_STARTER_PRICE_IDS || '').split(',').filter(Boolean)
  const proPrices     = (process.env.STRIPE_PRO_PRICE_IDS     || '').split(',').filter(Boolean)

  if (proPrices.includes(priceId))     return 'pro'
  if (starterPrices.includes(priceId)) return 'starter'
  return 'pro' // fallback
}

async function updateUserPlan(supabase, { userId, planType, stripeSubscriptionId, stripePriceId, status, periodEnd, cancelAtPeriodEnd }) {
  const isPro     = (planType === 'pro' || planType === 'starter') && status === 'active'
  const expiresAt = periodEnd ? new Date(periodEnd * 1000).toISOString() : null

  // Ažuriraj profil
  await supabase
    .from('profiles')
    .update({
      plan_type:      isPro ? planType : 'free',
      pro_expires_at: isPro ? expiresAt : null,
    })
    .eq('id', userId)

  // Upiši/ažuriraj subscriptions tablicu
  const { data: existing } = await supabase
    .from('subscriptions')
    .select('id')
    .eq('stripe_subscription_id', stripeSubscriptionId)
    .single()

  const subData = {
    user_id:                userId,
    stripe_subscription_id: stripeSubscriptionId,
    stripe_price_id:        stripePriceId,
    status,
    current_period_end:     expiresAt,
    cancel_at_period_end:   cancelAtPeriodEnd || false,
    updated_at:             new Date().toISOString(),
  }

  if (existing) {
    await supabase
      .from('subscriptions')
      .update(subData)
      .eq('stripe_subscription_id', stripeSubscriptionId)
  } else {
    await supabase
      .from('subscriptions')
      .insert({ ...subData, current_period_start: new Date().toISOString() })
  }
}

export async function POST(request) {
  const body      = await request.text()
  const signature = request.headers.get('stripe-signature')

  let event

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 400 })
  }

  const supabase = createAdminClient()

  try {
    switch (event.type) {

      // ── Checkout završen ────────────────────────────────────────
      case 'checkout.session.completed': {
        const session = event.data.object
        if (session.mode !== 'subscription') break

        const userId   = session.metadata?.supabase_user_id
        const planName = session.metadata?.plan_name || 'pro'
        if (!userId) break

        // Dohvati subscription detalje
        const subscription = await getStripe().subscriptions.retrieve(session.subscription)
        const priceId      = subscription.items.data[0]?.price?.id

        await updateUserPlan(supabase, {
          userId,
          planType:             getPlanType(priceId) || planName,
          stripeSubscriptionId: subscription.id,
          stripePriceId:        priceId,
          status:               subscription.status,
          periodEnd:            subscription.current_period_end,
          cancelAtPeriodEnd:    subscription.cancel_at_period_end,
        })
        break
      }

      // ── Subscription ažurirana ──────────────────────────────────
      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const customerId   = subscription.customer

        // Pronađi korisnika po customer ID
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (!profile) break

        const priceId = subscription.items.data[0]?.price?.id

        await updateUserPlan(supabase, {
          userId:               profile.id,
          planType:             getPlanType(priceId),
          stripeSubscriptionId: subscription.id,
          stripePriceId:        priceId,
          status:               subscription.status,
          periodEnd:            subscription.current_period_end,
          cancelAtPeriodEnd:    subscription.cancel_at_period_end,
        })
        break
      }

      // ── Subscription otkazana ili istekla ───────────────────────
      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const customerId   = subscription.customer

        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (!profile) break

        // Vrati na free
        await supabase
          .from('profiles')
          .update({ plan_type: 'free', pro_expires_at: null })
          .eq('id', profile.id)

        await supabase
          .from('subscriptions')
          .update({ status: 'canceled', updated_at: new Date().toISOString() })
          .eq('stripe_subscription_id', subscription.id)
        break
      }

      // ── Plaćanje uspješno ───────────────────────────────────────
      case 'invoice.payment_succeeded': {
        const invoice      = event.data.object
        const subscription = await getStripe().subscriptions.retrieve(invoice.subscription)
        const customerId   = invoice.customer

        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (!profile) break

        const priceId = subscription.items.data[0]?.price?.id

        // Obnovi period
        await updateUserPlan(supabase, {
          userId:               profile.id,
          planType:             getPlanType(priceId),
          stripeSubscriptionId: subscription.id,
          stripePriceId:        priceId,
          status:               'active',
          periodEnd:            subscription.current_period_end,
          cancelAtPeriodEnd:    subscription.cancel_at_period_end,
        })
        break
      }

      // ── Plaćanje neuspješno ─────────────────────────────────────
      case 'invoice.payment_failed': {
        const invoice    = event.data.object
        const customerId = invoice.customer

        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('stripe_customer_id', customerId)
          .single()

        if (!profile) break

        await supabase
          .from('subscriptions')
          .update({ status: 'past_due', updated_at: new Date().toISOString() })
          .eq('user_id', profile.id)
        break
      }

      default:
        // Ignoriraj ostale evente
        break
    }
  } catch (error) {
    console.error(`Webhook handler error for ${event.type}:`, error)
    return NextResponse.json({ error: 'Webhook handler failed.' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}