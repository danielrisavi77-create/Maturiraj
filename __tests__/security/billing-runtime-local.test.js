import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { POST as canonicalWebhook } from '@/app/api/webhook/route'
import { POST as legacyWebhook } from '@/app/api/stripe/webhook/route'

const enabled = process.env.P0_BILLING_RUNTIME === '1'
const runtimeDescribe = enabled ? describe : describe.skip

const url = process.env.P0_SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceKey =
  process.env.P0_SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

function subscriptionObject({
  id,
  userId,
  priceId,
  plan,
  status = 'active',
  customer = 'cus_p0_local',
}) {
  const periodEnd = Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60
  return {
    id,
    object: 'subscription',
    customer,
    status,
    metadata: { user_id: userId, ...(plan ? { plan } : {}) },
    current_period_end: periodEnd,
    items: {
      object: 'list',
      data: [
        {
          id: 'si_' + id,
          object: 'subscription_item',
          current_period_end: periodEnd,
          price: { id: priceId, object: 'price' },
        },
      ],
    },
  }
}

function event({ id, type, object }) {
  return {
    id,
    object: 'event',
    api_version: '2025-02-24.acacia',
    created: Math.floor(Date.now() / 1000),
    data: { object },
    livemode: false,
    pending_webhooks: 1,
    request: { id: null, idempotency_key: null },
    type,
  }
}

function signedRequest(stripe, evt) {
  const payload = JSON.stringify(evt)
  const signature = stripe.webhooks.generateTestHeaderString({
    payload,
    secret: webhookSecret,
  })
  return new Request('http://localhost/api/webhook', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'stripe-signature': signature,
    },
    body: payload,
  })
}

runtimeDescribe('BIL-P0-01 local signed webhook integration', () => {
  let admin
  let stripe
  let user
  const suffix = String(Date.now()) + Math.random().toString(16).slice(2, 8)
  const subscriptionId = 'sub_p0_' + suffix.replace(/[^a-z0-9]/gi, '')
  const customerId = 'cus_p0_' + suffix.replace(/[^a-z0-9]/gi, '')

  beforeAll(async () => {
    expect(process.env.P0_ACCEPTANCE_TARGET).toBe('local')
    expect(process.env.BILLING_V2_ENABLED).toBe('true')
    expect(url).toMatch(/^http:\/\/(127\.0\.0\.1|localhost):/)
    expect(serviceKey).toBeTruthy()
    expect(webhookSecret).toBeTruthy()

    admin = createClient(url, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const email = 'p0-billing-' + suffix + '@example.com'
    const { data, error } = await admin.auth.admin.createUser({
      email,
      password: 'P0-Billing-' + suffix + '-Aa9!',
      email_confirm: true,
      user_metadata: { full_name: 'P0 Billing' },
    })
    expect(error).toBeNull()
    user = data.user
    expect(user?.id).toBeTruthy()
  })

  afterAll(async () => {
    if (user?.id) {
      await admin.from('subscriptions').delete().eq('user_id', user.id)
      await admin.auth.admin.deleteUser(user.id)
    }
  })

  it('keeps the legacy webhook permanently disabled', async () => {
    const response = await legacyWebhook()
    expect(response.status).toBe(410)
    await expect(response.json()).resolves.toMatchObject({
      code: 'LEGACY_WEBHOOK_DISABLED',
    })
  })

  it('accepts each allowlisted price family and writes the expected entitlement', async () => {
    const cases = [
      ['starter', process.env.NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID, 'starter'],
      ['pro', process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID, 'pro'],
      ['pro_god', process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID, 'pro'],
    ]

    for (let index = 0; index < cases.length; index += 1) {
      const [metadataPlan, priceId, expectedPlan] = cases[index]
      const evt = event({
        id: 'evt_p0_allow_' + index + '_' + suffix,
        type: 'customer.subscription.updated',
        object: subscriptionObject({
          id: subscriptionId,
          userId: user.id,
          priceId,
          plan: metadataPlan,
          customer: customerId,
        }),
      })

      const response = await canonicalWebhook(signedRequest(stripe, evt))
      expect(response.status).toBe(200)
      await expect(response.json()).resolves.toEqual({ received: true })

      const { data: profile, error: profileError } = await admin
        .from('profiles')
        .select('plan_type')
        .eq('id', user.id)
        .single()
      expect(profileError).toBeNull()
      expect(profile.plan_type).toBe(expectedPlan)

      const { data: subscription, error: subscriptionError } = await admin
        .from('subscriptions')
        .select('plan,status,stripe_subscription_id,stripe_customer_id')
        .eq('stripe_subscription_id', subscriptionId)
        .single()
      expect(subscriptionError).toBeNull()
      expect(subscription).toMatchObject({
        plan: expectedPlan,
        status: 'active',
        stripe_subscription_id: subscriptionId,
        stripe_customer_id: customerId,
      })
    }
  })

  it('treats an already processed event as an idempotent duplicate', async () => {
    const evt = event({
      id: 'evt_p0_duplicate_' + suffix,
      type: 'customer.subscription.updated',
      object: subscriptionObject({
        id: subscriptionId,
        userId: user.id,
        priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        plan: 'pro',
        customer: customerId,
      }),
    })

    const first = await canonicalWebhook(signedRequest(stripe, evt))
    expect(first.status).toBe(200)

    const second = await canonicalWebhook(signedRequest(stripe, evt))
    expect(second.status).toBe(200)
    await expect(second.json()).resolves.toEqual({
      received: true,
      duplicate: true,
    })

    const { data: rows, error } = await admin
      .from('subscriptions')
      .select('id')
      .eq('stripe_subscription_id', subscriptionId)
    expect(error).toBeNull()
    expect(rows).toHaveLength(1)

    const { data: ledger, error: ledgerError } = await admin
      .from('stripe_webhook_events')
      .select('status,attempt_count')
      .eq('event_id', evt.id)
      .single()
    expect(ledgerError).toBeNull()
    expect(ledger).toMatchObject({ status: 'processed', attempt_count: 1 })
  })

  it.each([
    ['unknown price', 'price_p0_unknown', 'pro'],
    ['metadata/price mismatch', process.env.NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID, 'pro'],
  ])('fails closed for %s without provisioning the rejected subscription', async (_label, priceId, plan) => {
    const rejectedSubId = 'sub_rejected_' + Math.random().toString(16).slice(2, 10)
    const evt = event({
      id: 'evt_rejected_' + Math.random().toString(16).slice(2, 10),
      type: 'customer.subscription.updated',
      object: subscriptionObject({
        id: rejectedSubId,
        userId: user.id,
        priceId,
        plan,
        customer: customerId,
      }),
    })

    const response = await canonicalWebhook(signedRequest(stripe, evt))
    expect(response.status).toBe(503)
    await expect(response.json()).resolves.toMatchObject({
      code: 'BILLING_MAPPING_REJECTED',
    })

    const { data: rejectedRows, error: rejectedError } = await admin
      .from('subscriptions')
      .select('id')
      .eq('stripe_subscription_id', rejectedSubId)
    expect(rejectedError).toBeNull()
    expect(rejectedRows).toHaveLength(0)

    const { data: ledger, error: ledgerError } = await admin
      .from('stripe_webhook_events')
      .select('status,last_error_code')
      .eq('event_id', evt.id)
      .single()
    expect(ledgerError).toBeNull()
    expect(ledger).toMatchObject({
      status: 'failed',
      last_error_code: 'BILLING_MAPPING_REJECTED',
    })
  })

  it('deactivates a subscription and clears the cached profile entitlement', async () => {
    const evt = event({
      id: 'evt_p0_delete_' + suffix,
      type: 'customer.subscription.deleted',
      object: {
        id: subscriptionId,
        object: 'subscription',
        customer: customerId,
        status: 'canceled',
        metadata: { user_id: user.id, plan: 'pro' },
        items: { object: 'list', data: [] },
      },
    })

    const response = await canonicalWebhook(signedRequest(stripe, evt))
    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ received: true })

    const { data: subscription, error: subError } = await admin
      .from('subscriptions')
      .select('status')
      .eq('stripe_subscription_id', subscriptionId)
      .single()
    expect(subError).toBeNull()
    expect(subscription.status).toBe('inactive')

    const { data: profile, error: profileError } = await admin
      .from('profiles')
      .select('plan_type,pro_expires_at')
      .eq('id', user.id)
      .single()
    expect(profileError).toBeNull()
    expect(profile.plan_type).toBeNull()
    expect(profile.pro_expires_at).toBeNull()
  })
})
