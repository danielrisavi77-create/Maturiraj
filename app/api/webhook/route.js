import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import {
  syncSubscriptionToSupabase,
  deactivateSubscription,
  userIdFromCustomer,
} from '@/lib/billing/subscriptions'
import { trackPaywallEventServer, PAYWALL_EVENTS } from '@/lib/analytics/paywallEvents'
import { FEATURE_FLAGS, isFeatureEnabled } from '@/lib/config/featureFlags'

const CLAIM_RPC = 'claim_stripe_webhook_event'
const COMPLETE_RPC = 'complete_stripe_webhook_event'
const FAIL_RPC = 'fail_stripe_webhook_event'

class WebhookContractError extends Error {
  constructor(code, message) {
    super(message)
    this.name = 'WebhookContractError'
    this.code = code
  }
}

function featureDisabled() {
  return NextResponse.json(
    { error: 'Naplata je privremeno nedostupna.', code: 'FEATURE_DISABLED' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  )
}

function retryableError(code = 'WEBHOOK_PROCESSING_FAILED') {
  return NextResponse.json(
    { error: 'Webhook obrada privremeno nije uspjela.', code },
    {
      status: 503,
      headers: { 'Cache-Control': 'no-store', 'Retry-After': '5' },
    }
  )
}

function errorCodeFor(error) {
  if (error instanceof WebhookContractError) return error.code

  const message = error instanceof Error ? error.message : String(error)
  if (/unrecognised stripe price|metadata\/price tier mismatch|metadata plan/i.test(message)) {
    return 'BILLING_MAPPING_REJECTED'
  }
  if (/cannot resolve user/i.test(message)) return 'USER_RESOLUTION_FAILED'
  return 'WEBHOOK_PROCESSING_FAILED'
}

function claimResult(data) {
  return Array.isArray(data) ? data[0] : data
}

async function claimEvent(supabase, event) {
  const { data, error } = await supabase.rpc(CLAIM_RPC, {
    p_event_id: event.id,
    p_event_type: event.type,
  })

  if (error) {
    throw new WebhookContractError('WEBHOOK_CLAIM_FAILED', 'Webhook claim RPC failed')
  }

  const claim = claimResult(data)
  if (!claim?.status) {
    throw new WebhookContractError('WEBHOOK_CLAIM_FAILED', 'Webhook claim RPC returned no status')
  }
  return claim
}

async function completeEvent(supabase, eventId, claimToken) {
  const { data, error } = await supabase.rpc(COMPLETE_RPC, {
    p_event_id: eventId,
    p_claim_token: claimToken,
  })

  if (error || data !== true) {
    throw new WebhookContractError('WEBHOOK_COMPLETE_FAILED', 'Webhook completion RPC failed')
  }
}

async function failEvent(supabase, eventId, claimToken, errorCode) {
  const { data, error } = await supabase.rpc(FAIL_RPC, {
    p_event_id: eventId,
    p_claim_token: claimToken,
    p_error_code: errorCode,
  })
  return !error && data === true
}

function assertMetadataAgreement(session, subscription) {
  const sessionUserId = session.metadata?.user_id
  const subscriptionUserId = subscription.metadata?.user_id
  if (sessionUserId && subscriptionUserId && sessionUserId !== subscriptionUserId) {
    throw new WebhookContractError(
      'STRIPE_USER_METADATA_MISMATCH',
      'Checkout and subscription user metadata disagree'
    )
  }

  const sessionPlan = session.metadata?.plan
  const subscriptionPlan = subscription.metadata?.plan
  if (sessionPlan && subscriptionPlan && sessionPlan !== subscriptionPlan) {
    throw new WebhookContractError(
      'STRIPE_PLAN_METADATA_MISMATCH',
      'Checkout and subscription plan metadata disagree'
    )
  }
}

// Priority: subscription metadata, DB customer mapping, Stripe customer metadata.
async function resolveUserId(subscription, supabase, stripe) {
  if (subscription.metadata?.user_id) return subscription.metadata.user_id

  const customerId = typeof subscription.customer === 'string'
    ? subscription.customer
    : subscription.customer?.id

  if (!customerId) return null

  const userId = await userIdFromCustomer(customerId, supabase)
  if (userId) return userId

  try {
    const customer = await stripe.customers.retrieve(customerId)
    if (!customer.deleted && customer.metadata?.user_id) return customer.metadata.user_id
  } catch {
    // Resolution failure is handled by the caller without exposing provider data.
  }

  return null
}

async function handleCheckoutCompleted(session, supabase, stripe) {
  if (session.mode !== 'subscription') return

  const subscriptionId = typeof session.subscription === 'string'
    ? session.subscription
    : session.subscription?.id

  if (!subscriptionId) {
    throw new WebhookContractError(
      'STRIPE_SUBSCRIPTION_ID_MISSING',
      'Checkout session has no subscription ID'
    )
  }

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['items.data.price'],
  })

  assertMetadataAgreement(session, subscription)

  const metadataPatch = {}
  if (!subscription.metadata?.user_id && session.metadata?.user_id) {
    metadataPatch.user_id = session.metadata.user_id
  }
  if (!subscription.metadata?.plan && session.metadata?.plan) {
    metadataPatch.plan = session.metadata.plan
  }
  if (Object.keys(metadataPatch).length > 0) {
    subscription.metadata = { ...subscription.metadata, ...metadataPatch }
  }

  const userId = await resolveUserId(subscription, supabase, stripe)
  if (!userId) {
    throw new WebhookContractError(
      'USER_RESOLUTION_FAILED',
      `Cannot resolve user for subscription ${subscriptionId}`
    )
  }

  // derivePlanFromStripe runs before the helper's first DB write. Unknown prices
  // and plan/price metadata mismatches therefore fail closed.
  await syncSubscriptionToSupabase(userId, subscription, supabase)

  if (Object.keys(metadataPatch).length > 0) {
    await stripe.subscriptions.update(subscriptionId, {
      metadata: { ...subscription.metadata },
    })
  }

  trackPaywallEventServer(userId, PAYWALL_EVENTS.CHECKOUT_COMPLETED, {
    tier: subscription.metadata?.plan ?? 'unknown',
    source: 'stripe_checkout',
  }).catch(() => {})
}

async function handleSubscriptionUpsert(subscription, supabase, stripe) {
  const userId = await resolveUserId(subscription, supabase, stripe)
  if (!userId) {
    throw new WebhookContractError(
      'USER_RESOLUTION_FAILED',
      `Cannot resolve user for subscription ${subscription.id}`
    )
  }
  await syncSubscriptionToSupabase(userId, subscription, supabase)
}

async function processEvent(event, supabase, stripe) {
  switch (event.type) {
    case 'checkout.session.completed':
      await handleCheckoutCompleted(event.data.object, supabase, stripe)
      break

    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      await handleSubscriptionUpsert(event.data.object, supabase, stripe)
      break

    case 'customer.subscription.deleted':
      await deactivateSubscription(event.data.object.id, supabase)
      break

    case 'invoice.payment_failed': {
      const customerId = typeof event.data.object.customer === 'string'
        ? event.data.object.customer
        : event.data.object.customer?.id
      const userId = customerId ? await userIdFromCustomer(customerId, supabase) : null
      console.warn('[webhook] invoice.payment_failed', {
        customerId,
        userId,
        invoiceId: event.data.object.id,
      })
      break
    }

    default:
      break
  }
}

export async function POST(req) {
  // This must precede body reads, Stripe provider access and admin client work.
  if (!isFeatureEnabled(FEATURE_FLAGS.BILLING_V2)) return featureDisabled()

  const signature = req.headers.get('stripe-signature')
  if (!signature) {
    return NextResponse.json(
      { error: 'Nedostaje stripe-signature header.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  if (!webhookSecret) return retryableError('WEBHOOK_NOT_CONFIGURED')

  let body
  try {
    body = await req.text()
  } catch {
    return retryableError('WEBHOOK_BODY_READ_FAILED')
  }

  let stripe
  try {
    stripe = getStripe()
  } catch {
    return retryableError('BILLING_PROVIDER_NOT_CONFIGURED')
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch {
    return NextResponse.json(
      { error: 'Invalid webhook signature.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  if (!event?.id || !event?.type || !event?.data?.object) {
    return NextResponse.json(
      { error: 'Invalid Stripe event.' },
      { status: 400, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  let supabase
  try {
    supabase = createAdminClient()
  } catch {
    return retryableError('BILLING_STORAGE_NOT_CONFIGURED')
  }
  let claim
  try {
    claim = await claimEvent(supabase, event)
  } catch (error) {
    console.error('[webhook] claim failed', { eventId: event.id, eventType: event.type })
    return retryableError(errorCodeFor(error))
  }

  if (claim.status === 'processed') {
    return NextResponse.json({ received: true, duplicate: true })
  }
  if (claim.status === 'in_progress') {
    return retryableError('WEBHOOK_EVENT_IN_PROGRESS')
  }
  if (claim.status !== 'claimed' || !claim.claim_token) {
    return retryableError('WEBHOOK_CLAIM_INVALID')
  }

  try {
    await processEvent(event, supabase, stripe)
    await completeEvent(supabase, event.id, claim.claim_token)
    return NextResponse.json({ received: true })
  } catch (error) {
    const errorCode = errorCodeFor(error)
    const failed = await failEvent(
      supabase,
      event.id,
      claim.claim_token,
      errorCode
    ).catch(() => false)

    console.error('[webhook] processing failed', {
      eventId: event.id,
      eventType: event.type,
      errorCode,
      failureRecorded: failed,
    })
    return retryableError(errorCode)
  }
}
