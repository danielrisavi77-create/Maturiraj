import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  derivePlanFromStripe,
  syncSubscriptionToSupabase,
} from '@/lib/billing/subscriptions'
import { POST as refreshBilling } from '@/app/api/billing/refresh/route'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
const readSource = relativePath => readFileSync(resolve(root, relativePath), 'utf8')

function subscription({ plan, price = 'price_test', status = 'active' } = {}) {
  return {
    id: 'sub_test',
    customer: 'cus_test',
    status,
    metadata: plan ? { plan } : {},
    items: {
      data: [{
        price: { id: price },
        current_period_end: 2_000_000_000,
      }],
    },
  }
}

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('billing plan derivation fails closed', () => {
  it.each([
    ['starter', 'starter', 'NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID', 'price_starter_canonical'],
    ['pro', 'pro', 'NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID', 'price_pro_canonical'],
    ['pro_god', 'pro', 'NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID', 'price_pro_yearly_metadata'],
  ])('maps canonical metadata slug %s to %s only with its allowlisted price', (plan, expectedTier, envName, price) => {
    vi.stubEnv(envName, price)
    expect(derivePlanFromStripe(subscription({ plan, price }))).toBe(expectedTier)
  })

  it('recognises the canonical yearly Pro price environment variable', () => {
    vi.stubEnv('NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID', 'price_pro_yearly_canonical')

    expect(derivePlanFromStripe(subscription({ price: 'price_pro_yearly_canonical' }))).toBe('pro')
  })

  it('keeps the legacy yearly Pro server alias compatible', () => {
    vi.stubEnv('STRIPE_PRICE_PRO_GOD', 'price_pro_yearly_alias')

    expect(derivePlanFromStripe(subscription({ price: 'price_pro_yearly_alias' }))).toBe('pro')
  })

  it('throws for an unknown metadata slug and price', () => {
    expect(() => derivePlanFromStripe(
      subscription({ plan: 'mystery_plan', price: 'price_unknown_phase0' })
    )).toThrow(/Unrecognised Stripe price/)
  })

  it('rejects known paid metadata when the Stripe price is not allowlisted', () => {
    vi.stubEnv('NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID', 'price_known_pro')

    expect(() => derivePlanFromStripe(
      subscription({ plan: 'pro', price: 'price_unknown_with_pro_metadata' })
    )).toThrow(/Unrecognised Stripe price/)
  })

  it('rejects a metadata tier that disagrees with the allowlisted price tier', () => {
    vi.stubEnv('NEXT_PUBLIC_STRIPE_STARTER_MONTHLY_PRICE_ID', 'price_known_starter')

    expect(() => derivePlanFromStripe(
      subscription({ plan: 'pro', price: 'price_known_starter' })
    )).toThrow(/metadata\/price tier mismatch/)
  })

  it('performs no database write when plan derivation is unknown', async () => {
    const db = { from: vi.fn() }

    await expect(syncSubscriptionToSupabase(
      'user_test',
      subscription({ plan: 'mystery_plan', price: 'price_unknown_phase0' }),
      db
    )).rejects.toThrow(/Unrecognised Stripe price/)
    expect(db.from).not.toHaveBeenCalled()
  })

  it('derives the plan before creating the default admin client', () => {
    const source = readSource('lib/billing/subscriptions.js')
    const helper = source.slice(source.indexOf('export async function syncSubscriptionToSupabase'))

    expect(helper.indexOf('derivePlanFromStripe(stripeSub)')).toBeGreaterThan(-1)
    expect(helper.indexOf('derivePlanFromStripe(stripeSub)')).toBeLessThan(
      helper.indexOf('supabase ?? createAdminClient()')
    )
  })
})

describe('billing refresh containment', () => {
  it('returns FEATURE_DISABLED while either billing gate is closed', async () => {
    vi.stubEnv('BILLING_CHECKOUT_ENABLED', 'true')
    vi.stubEnv('BILLING_V2_ENABLED', 'false')

    const response = await refreshBilling(new Request('http://localhost/api/billing/refresh', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: 'cs_test' }),
    }))

    expect(response.status).toBe(503)
    await expect(response.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
  })

  it('checks the billing gate before auth, Stripe, or admin-client work', () => {
    const source = readSource('app/api/billing/refresh/route.js')
    const gate = source.indexOf('if (!isBillingCheckoutEnabled())')

    expect(gate).toBeGreaterThan(-1)
    expect(gate).toBeLessThan(source.indexOf('const cookieStore = await cookies()'))
    expect(gate).toBeLessThan(source.indexOf('const stripe = getStripe()'))
    expect(gate).toBeLessThan(source.indexOf('const db = createAdminClient()'))
  })

  it('keeps auth profile query and schema failures on the free side', () => {
    const source = readSource('lib/hooks/useAuth.js')

    expect(source).not.toContain("setPlanType('pro')")
    expect(source).toContain('setPlanError(true)')
    expect(source).toContain('setPlanType(null)')
    expect(source).toContain('defaulting to free')
  })
})
