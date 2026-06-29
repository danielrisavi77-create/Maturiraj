import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import {
  syncSubscriptionToSupabase,
  deactivateSubscription,
  userIdFromCustomer,
} from '@/lib/billing/subscriptions'
import { trackPaywallEventServer, PAYWALL_EVENTS } from '@/lib/analytics/paywallEvents'

// ─── Resolve user_id from a Stripe subscription or checkout session ───────────
// Priority: 1) subscription.metadata.user_id  2) customer lookup in DB  3) customer.metadata.user_id

async function resolveUserId(subscription, supabase) {
  // 1. Metadata set at checkout time — most reliable
  if (subscription.metadata?.user_id) return subscription.metadata.user_id

  const customerId = typeof subscription.customer === 'string'
    ? subscription.customer
    : subscription.customer?.id

  if (!customerId) return null

  // 2. DB lookup
  const userId = await userIdFromCustomer(customerId, supabase)
  if (userId) return userId

  // 3. Stripe customer metadata fallback
  try {
    const stripe = getStripe()
    const customer = await stripe.customers.retrieve(customerId)
    if (!customer.deleted && customer.metadata?.user_id) return customer.metadata.user_id
  } catch {
    // ignore
  }

  return null
}

// ─── checkout.session.completed ──────────────────────────────────────────────

async function handleCheckoutCompleted(session, supabase) {
  if (session.mode !== 'subscription') return

  const subscriptionId = typeof session.subscription === 'string'
    ? session.subscription
    : session.subscription?.id

  if (!subscriptionId) throw new Error('Checkout session nema subscription ID.')

  const stripe = getStripe()
  const sub = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['items.data.price'],
  })

  // Ensure user_id propagates from checkout metadata → subscription metadata
  if (!sub.metadata?.user_id && session.metadata?.user_id) {
    await stripe.subscriptions.update(subscriptionId, {
      metadata: { ...sub.metadata, user_id: session.metadata.user_id, plan: session.metadata.plan ?? sub.metadata.plan },
    })
    sub.metadata.user_id = session.metadata.user_id
    sub.metadata.plan    = session.metadata.plan ?? sub.metadata.plan
  }

  const userId = await resolveUserId(sub, supabase)
  if (!userId) throw new Error(`Cannot resolve user for subscription ${subscriptionId}`)

  await syncSubscriptionToSupabase(userId, sub, supabase)

  // Analytics
  trackPaywallEventServer(userId, PAYWALL_EVENTS.CHECKOUT_COMPLETED, {
    tier: sub.metadata?.plan ?? 'unknown',
    source: 'stripe_checkout',
  }).catch(() => {})
}

// ─── customer.subscription.created / updated ─────────────────────────────────

async function handleSubscriptionUpsert(subscription, supabase) {
  const userId = await resolveUserId(subscription, supabase)
  if (!userId) {
    throw new Error(
      `Cannot resolve user for subscription ${subscription.id}. ` +
      `Ensure metadata.user_id is set at checkout.`
    )
  }
  await syncSubscriptionToSupabase(userId, subscription, supabase)
}

// ─── customer.subscription.deleted ───────────────────────────────────────────

async function handleSubscriptionDeleted(subscription, supabase) {
  await deactivateSubscription(subscription.id, supabase)
}

// ─── Webhook route handler ────────────────────────────────────────────────────

export async function POST(req) {
  const body         = await req.text()
  const headersList  = await headers()
  const signature    = headersList.get('stripe-signature')

  if (!signature) {
    return NextResponse.json({ error: 'Nedostaje stripe-signature header.' }, { status: 400 })
  }

  const stripe = getStripe()
  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    return NextResponse.json({ error: 'Invalid webhook signature.' }, { status: 400 })
  }

  // Shared admin client for the whole event — one connection per webhook call
  const supabase = createAdminClient()

  try {
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutCompleted(event.data.object, supabase)
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await handleSubscriptionUpsert(event.data.object, supabase)
        break

      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object, supabase)
        break

      // Log invoice.payment_failed so support can act
      case 'invoice.payment_failed': {
        const customerId = typeof event.data.object.customer === 'string'
          ? event.data.object.customer
          : event.data.object.customer?.id
        const userId = customerId ? await userIdFromCustomer(customerId, supabase) : null
        console.warn('[webhook] invoice.payment_failed', { customerId, userId, invoiceId: event.data.object.id })
        break
      }

      default:
        break
    }

    return NextResponse.json({ received: true })

  } catch (err) {
    console.error('[webhook] processing error:', err.message, { eventType: event.type, eventId: event.id })
    return NextResponse.json({ error: 'Webhook processing failed.' }, { status: 500 })
  }
}

