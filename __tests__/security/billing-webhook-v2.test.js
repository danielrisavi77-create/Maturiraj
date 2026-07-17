import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

const mocks = vi.hoisted(() => {
  const isFeatureEnabled = vi.fn()
  const rpc = vi.fn()
  const from = vi.fn()
  const admin = { rpc, from }
  const stripe = {
    webhooks: { constructEvent: vi.fn() },
    subscriptions: {
      retrieve: vi.fn(),
      update: vi.fn(),
    },
    customers: { retrieve: vi.fn() },
  }

  return {
    isFeatureEnabled,
    rpc,
    from,
    admin,
    stripe,
    getStripe: vi.fn(),
    createAdminClient: vi.fn(),
    trackPaywallEventServer: vi.fn(() => Promise.resolve()),
  }
})

vi.mock('@/lib/config/featureFlags', () => ({
  FEATURE_FLAGS: { BILLING_V2: 'BILLING_V2_ENABLED' },
  isFeatureEnabled: mocks.isFeatureEnabled,
}))

vi.mock('@/lib/stripe', () => ({ getStripe: mocks.getStripe }))
vi.mock('@/lib/supabase/admin', () => ({ createAdminClient: mocks.createAdminClient }))
vi.mock('@/lib/analytics/paywallEvents', () => ({
  PAYWALL_EVENTS: { CHECKOUT_COMPLETED: 'checkout_completed' },
  trackPaywallEventServer: mocks.trackPaywallEventServer,
}))

import { POST as canonicalWebhook } from '@/app/api/webhook/route'
import { POST as legacyWebhook } from '@/app/api/stripe/webhook/route'

const originalEnv = {
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  STARTER: process.env.NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID,
  PRO: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
  PRO_YEARLY: process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
}

const CLAIM_TOKEN = '11111111-1111-4111-8111-111111111111'

function makeRequest({ signature = 'valid-signature', body = '{}' } = {}) {
  return {
    headers: {
      get: vi.fn((name) => name === 'stripe-signature' ? signature : null),
    },
    text: vi.fn().mockResolvedValue(body),
  }
}

function event(type = 'customer.source.updated', object = {}) {
  return {
    id: 'evt_phase0_123',
    type,
    data: { object },
  }
}

function subscriptionEvent({ priceId, plan = 'pro' } = {}) {
  return event('customer.subscription.updated', {
    id: 'sub_phase0_123',
    customer: 'cus_phase0_123',
    status: 'active',
    metadata: { user_id: 'user_phase0_123', ...(plan ? { plan } : {}) },
    items: { data: [{ price: priceId === undefined ? {} : { id: priceId } }] },
  })
}

function configureRpc(claim) {
  mocks.rpc.mockImplementation(async (name) => {
    if (name === 'claim_stripe_webhook_event') {
      return { data: claim, error: null }
    }
    if (name === 'complete_stripe_webhook_event') {
      return { data: true, error: null }
    }
    if (name === 'fail_stripe_webhook_event') {
      return { data: true, error: null }
    }
    throw new Error(`Unexpected RPC ${name}`)
  })
}

beforeEach(() => {
  vi.clearAllMocks()
  process.env.STRIPE_WEBHOOK_SECRET = 'test-webhook-secret'
  process.env.NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID = 'price_starter_known'
  process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID = 'price_pro_known'
  process.env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID = 'price_pro_yearly_known'

  mocks.isFeatureEnabled.mockReturnValue(true)
  mocks.getStripe.mockReturnValue(mocks.stripe)
  mocks.createAdminClient.mockReturnValue(mocks.admin)
  mocks.from.mockImplementation(() => {
    throw new Error('Unexpected entitlement/database write')
  })
})

afterAll(() => {
  const restore = (key, value) => {
    if (value === undefined) delete process.env[key]
    else process.env[key] = value
  }
  restore('STRIPE_WEBHOOK_SECRET', originalEnv.STRIPE_WEBHOOK_SECRET)
  restore('NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID', originalEnv.STARTER)
  restore('NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID', originalEnv.PRO)
  restore('NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID', originalEnv.PRO_YEARLY)
})

describe('BIL-P0-01 canonical Stripe webhook', () => {
  it('keeps the legacy webhook as an unconditional 410 without Stripe/admin imports', async () => {
    const source = await readFile(
      path.join(process.cwd(), 'app/api/stripe/webhook/route.js'),
      'utf8'
    )

    expect(source).not.toMatch(/from\s+['"]stripe['"]/)
    expect(source).not.toContain('createAdminClient')
    expect(source).not.toContain('getStripe')

    const response = await legacyWebhook()
    expect(response.status).toBe(410)
    expect(response.headers.get('cache-control')).toBe('no-store')
    await expect(response.json()).resolves.toMatchObject({
      code: 'LEGACY_WEBHOOK_DISABLED',
    })
  })

  it('checks BILLING_V2 before reading body, Stripe access, or admin work', async () => {
    mocks.isFeatureEnabled.mockReturnValue(false)
    const request = makeRequest()

    const response = await canonicalWebhook(request)

    expect(response.status).toBe(503)
    expect(request.headers.get).not.toHaveBeenCalled()
    expect(request.text).not.toHaveBeenCalled()
    expect(mocks.getStripe).not.toHaveBeenCalled()
    expect(mocks.createAdminClient).not.toHaveBeenCalled()
    await expect(response.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
  })

  it('verifies the signature before creating the admin client', async () => {
    const request = makeRequest({ signature: null })

    const response = await canonicalWebhook(request)

    expect(response.status).toBe(400)
    expect(request.text).not.toHaveBeenCalled()
    expect(mocks.getStripe).not.toHaveBeenCalled()
    expect(mocks.createAdminClient).not.toHaveBeenCalled()
  })

  it('returns a retryable response when the admin store is not configured', async () => {
    mocks.stripe.webhooks.constructEvent.mockReturnValue(event())
    mocks.createAdminClient.mockImplementation(() => {
      throw new Error('admin config missing')
    })

    const response = await canonicalWebhook(makeRequest())

    expect(response.status).toBe(503)
    expect(response.headers.get('retry-after')).toBe('5')
    await expect(response.json()).resolves.toMatchObject({
      code: 'BILLING_STORAGE_NOT_CONFIGURED',
    })
    expect(mocks.rpc).not.toHaveBeenCalled()
  })

  it('acknowledges an already processed duplicate without repeating work', async () => {
    mocks.stripe.webhooks.constructEvent.mockReturnValue(
      subscriptionEvent({ priceId: 'price_unknown' })
    )
    configureRpc({ status: 'processed', claim_token: null, attempt_count: 1 })

    const response = await canonicalWebhook(makeRequest())

    expect(response.status).toBe(200)
    await expect(response.json()).resolves.toEqual({ received: true, duplicate: true })
    expect(mocks.rpc).toHaveBeenCalledTimes(1)
    expect(mocks.from).not.toHaveBeenCalled()
  })

  it('returns a retryable response for an active concurrent claim', async () => {
    mocks.stripe.webhooks.constructEvent.mockReturnValue(event())
    configureRpc({ status: 'in_progress', claim_token: null, attempt_count: 1 })

    const response = await canonicalWebhook(makeRequest())

    expect(response.status).toBe(503)
    expect(response.headers.get('retry-after')).toBe('5')
    await expect(response.json()).resolves.toMatchObject({
      code: 'WEBHOOK_EVENT_IN_PROGRESS',
    })
    expect(mocks.rpc).toHaveBeenCalledTimes(1)
    expect(mocks.from).not.toHaveBeenCalled()
  })

  it('processes a claimed failed/stale retry and marks it processed', async () => {
    mocks.stripe.webhooks.constructEvent.mockReturnValue(event())
    configureRpc({ status: 'claimed', claim_token: CLAIM_TOKEN, attempt_count: 2 })

    const response = await canonicalWebhook(makeRequest())

    expect(response.status).toBe(200)
    expect(mocks.rpc).toHaveBeenNthCalledWith(1, 'claim_stripe_webhook_event', {
      p_event_id: 'evt_phase0_123',
      p_event_type: 'customer.source.updated',
    })
    expect(mocks.rpc).toHaveBeenNthCalledWith(2, 'complete_stripe_webhook_event', {
      p_event_id: 'evt_phase0_123',
      p_claim_token: CLAIM_TOKEN,
    })
    expect(mocks.from).not.toHaveBeenCalled()
  })

  it.each([
    ['unknown price', { priceId: 'price_unknown', plan: 'pro' }],
    ['missing price', { priceId: undefined, plan: 'pro' }],
    ['metadata/price mismatch', { priceId: 'price_starter_known', plan: 'pro' }],
  ])('fails %s before any entitlement write and records a retryable failure', async (_, input) => {
    mocks.stripe.webhooks.constructEvent.mockReturnValue(subscriptionEvent(input))
    configureRpc({ status: 'claimed', claim_token: CLAIM_TOKEN, attempt_count: 1 })

    const response = await canonicalWebhook(makeRequest())

    expect(response.status).toBe(503)
    expect(response.headers.get('retry-after')).toBe('5')
    await expect(response.json()).resolves.toMatchObject({
      code: 'BILLING_MAPPING_REJECTED',
    })
    expect(mocks.from).not.toHaveBeenCalled()
    expect(mocks.rpc).toHaveBeenLastCalledWith('fail_stripe_webhook_event', {
      p_event_id: 'evt_phase0_123',
      p_claim_token: CLAIM_TOKEN,
      p_error_code: 'BILLING_MAPPING_REJECTED',
    })
  })

  it('rejects checkout/subscription user metadata disagreement before entitlement writes', async () => {
    mocks.stripe.webhooks.constructEvent.mockReturnValue(event(
      'checkout.session.completed',
      {
        mode: 'subscription',
        subscription: 'sub_phase0_123',
        metadata: { user_id: 'user_from_checkout', plan: 'pro' },
      }
    ))
    mocks.stripe.subscriptions.retrieve.mockResolvedValue({
      id: 'sub_phase0_123',
      customer: 'cus_phase0_123',
      status: 'active',
      metadata: { user_id: 'different_user', plan: 'pro' },
      items: { data: [{ price: { id: 'price_pro_known' } }] },
    })
    configureRpc({ status: 'claimed', claim_token: CLAIM_TOKEN, attempt_count: 1 })

    const response = await canonicalWebhook(makeRequest())

    expect(response.status).toBe(503)
    await expect(response.json()).resolves.toMatchObject({
      code: 'STRIPE_USER_METADATA_MISMATCH',
    })
    expect(mocks.from).not.toHaveBeenCalled()
    expect(mocks.stripe.subscriptions.update).not.toHaveBeenCalled()
    expect(mocks.rpc).toHaveBeenLastCalledWith('fail_stripe_webhook_event', {
      p_event_id: 'evt_phase0_123',
      p_claim_token: CLAIM_TOKEN,
      p_error_code: 'STRIPE_USER_METADATA_MISMATCH',
    })
  })

  it('defines an atomic, service-role-only, payload-free claim/status contract', async () => {
    const sql = await readFile(
      path.join(
        process.cwd(),
        'supabase/migrations/20260715030000_stripe_webhook_events.sql'
      ),
      'utf8'
    )

    expect(sql).toMatch(/create table if not exists public\.stripe_webhook_events/i)
    expect(sql).toMatch(/alter table public\.stripe_webhook_events enable row level security/i)
    expect(sql).toMatch(/for update/i)
    expect(sql).toMatch(/on conflict \(event_id\) do nothing/i)
    expect(sql).toMatch(/status = 'failed'/i)
    expect(sql).toMatch(/lease_expires_at <= now\(\)/i)
    expect(sql).toContain('claim_stripe_webhook_event')
    expect(sql).toContain('complete_stripe_webhook_event')
    expect(sql).toContain('fail_stripe_webhook_event')
    expect(sql.match(/set search_path = pg_catalog/gi)).toHaveLength(3)
    expect(sql).not.toMatch(/set search_path\s*=\s*(public|pg_temp)/i)
    expect(sql.match(/claim_token = null/gi)).toHaveLength(2)
    expect(sql).toMatch(/revoke all on table public\.stripe_webhook_events from authenticated/i)
    expect(sql).toMatch(/grant execute on function public\.claim_stripe_webhook_event\(text, text\) to service_role/i)
    expect(sql).not.toMatch(/\b(payload|raw_body|signature)\s+(jsonb|text|bytea)\b/i)
  })
})
