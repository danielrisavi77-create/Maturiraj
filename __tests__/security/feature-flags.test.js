import { beforeEach, describe, expect, it, vi } from 'vitest'
import { POST as legacyStripeCheckout } from '@/app/api/stripe/checkout/route'
import {
  FEATURE_FLAGS,
  areFeaturesEnabled,
  isAgentApiEnabled,
  isAiEndpointsEnabled,
  isBillingCheckoutEnabled,
  isFeatureEnabled,
  isParentLinkingV2Enabled,
  isParentPortalEnabled,
} from '@/lib/config/featureFlags'

const securityMocks = vi.hoisted(() => ({
  anthropicConstructor: vi.fn(),
  providerCreate: vi.fn(),
  createClient: vi.fn(),
  createAdminClient: vi.fn(),
  requirePro: vi.fn(),
}))

vi.mock('@anthropic-ai/sdk', () => ({
  default: class AnthropicMock {
    constructor() {
      securityMocks.anthropicConstructor()
      this.messages = { create: securityMocks.providerCreate }
    }
  },
}))

vi.mock('@/lib/supabase/server', () => ({
  createClient: securityMocks.createClient,
}))

vi.mock('@/lib/supabase/admin', () => ({
  createAdminClient: securityMocks.createAdminClient,
}))

vi.mock('@/lib/billing/requirePro', () => ({
  requirePro: securityMocks.requirePro,
}))

beforeEach(() => {
  vi.clearAllMocks()
})

describe('feature flags', () => {
  it('declares the expected environment variable names', () => {
    expect(FEATURE_FLAGS).toEqual({
      BILLING_CHECKOUT: 'BILLING_CHECKOUT_ENABLED',
      BILLING_V2: 'BILLING_V2_ENABLED',
      PARENT_PORTAL: 'PARENT_PORTAL_ENABLED',
      PARENT_LINKING_V2: 'PARENT_LINKING_V2_ENABLED',
      AI_ENDPOINTS: 'AI_ENDPOINTS_ENABLED',
      AGENT_API: 'AGENT_API_ENABLED',
      GAME_MODE: 'GAME_MODE_ENABLED',
    })
  })

  it.each([
    undefined,
    null,
    '',
    'false',
    '1',
    'yes',
    'TRUE',
    ' true ',
  ])('keeps a known flag disabled for %s', (value) => {
    expect(
      isFeatureEnabled(FEATURE_FLAGS.AI_ENDPOINTS, {
        [FEATURE_FLAGS.AI_ENDPOINTS]: value,
      })
    ).toBe(false)
  })

  it('enables a known flag only for the exact string true', () => {
    expect(
      isFeatureEnabled(FEATURE_FLAGS.AI_ENDPOINTS, {
        [FEATURE_FLAGS.AI_ENDPOINTS]: 'true',
      })
    ).toBe(true)
  })

  it('fails closed for an unknown flag and an empty flag group', () => {
    expect(isFeatureEnabled('MISSPELLED_FLAG', { MISSPELLED_FLAG: 'true' })).toBe(false)
    expect(areFeaturesEnabled([], {})).toBe(false)
  })

  it('requires both billing flags for the canonical checkout', () => {
    expect(
      isBillingCheckoutEnabled({
        BILLING_CHECKOUT_ENABLED: 'true',
      })
    ).toBe(false)
    expect(
      isBillingCheckoutEnabled({
        BILLING_CHECKOUT_ENABLED: 'true',
        BILLING_V2_ENABLED: 'true',
      })
    ).toBe(true)
  })

  it('keeps the legacy Stripe checkout permanently fail-closed', async () => {
    const response = await legacyStripeCheckout()

    expect(response.status).toBe(410)
    await expect(response.json()).resolves.toMatchObject({
      code: 'LEGACY_CHECKOUT_DISABLED',
    })
  })

  it('enables implemented Parent V2 only when both environment flags are true', () => {
    const portalOnly = { PARENT_PORTAL_ENABLED: 'true' }
    const portalAndLinking = {
      PARENT_PORTAL_ENABLED: 'true',
      PARENT_LINKING_V2_ENABLED: 'true',
    }

    expect(isParentPortalEnabled(portalOnly)).toBe(true)
    expect(isParentLinkingV2Enabled(portalOnly)).toBe(false)
    expect(isParentLinkingV2Enabled(portalAndLinking)).toBe(true)
  })

  it('gates all Parent V2 APIs before Supabase work when flags are absent', async () => {
    const previousPortal = process.env.PARENT_PORTAL_ENABLED
    const previousLinking = process.env.PARENT_LINKING_V2_ENABLED
    delete process.env.PARENT_PORTAL_ENABLED
    delete process.env.PARENT_LINKING_V2_ENABLED

    try {
      const [{ DELETE: deleteChild, GET: listChildren, POST: linkChild }, { GET: childDashboard }, { POST: childConsent }] = await Promise.all([
        import('@/app/api/parent/children/route'),
        import('@/app/api/parent/child-dashboard/[childId]/route'),
        import('@/app/api/parent/consent/route'),
      ])

      const linkResponse = await linkChild(new Request('http://localhost/api/parent/children', {
        method: 'POST',
        body: JSON.stringify({ child_email: 'child@example.com' }),
      }))
      const listResponse = await listChildren()
      const deleteResponse = await deleteChild(new Request(
        'http://localhost/api/parent/children?id=00000000-0000-4000-8000-000000000001',
        { method: 'DELETE' }
      ))
      const dashboardResponse = await childDashboard(
        new Request('http://localhost/api/parent/child-dashboard/00000000-0000-4000-8000-000000000001'),
        { params: Promise.resolve({ childId: '00000000-0000-4000-8000-000000000001' }) }
      )
      const consentResponse = await childConsent(new Request('http://localhost/api/parent/consent', {
        method: 'POST',
        body: JSON.stringify({
          invitation_id: '00000000-0000-4000-8000-000000000001',
          decision: 'accept',
        }),
      }))

      expect(linkResponse.status).toBe(503)
      expect(listResponse.status).toBe(503)
      expect(deleteResponse.status).toBe(503)
      expect(dashboardResponse.status).toBe(503)
      expect(consentResponse.status).toBe(503)
      await expect(linkResponse.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
      await expect(listResponse.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
      await expect(deleteResponse.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
      await expect(dashboardResponse.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
      await expect(consentResponse.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
      expect(securityMocks.createClient).not.toHaveBeenCalled()
      expect(securityMocks.createAdminClient).not.toHaveBeenCalled()
    } finally {
      if (previousPortal === undefined) delete process.env.PARENT_PORTAL_ENABLED
      else process.env.PARENT_PORTAL_ENABLED = previousPortal
      if (previousLinking === undefined) delete process.env.PARENT_LINKING_V2_ENABLED
      else process.env.PARENT_LINKING_V2_ENABLED = previousLinking
    }
  })

  it('requires the global AI flag for both direct AI and agent APIs', () => {
    expect(isAiEndpointsEnabled({ AI_ENDPOINTS_ENABLED: 'true' })).toBe(true)
    expect(isAgentApiEnabled({ AGENT_API_ENABLED: 'true' })).toBe(false)
    expect(
      isAgentApiEnabled({
        AI_ENDPOINTS_ENABLED: 'true',
        AGENT_API_ENABLED: 'true',
      })
    ).toBe(true)
  })

  it.each([
    ['study plan', () => import('@/app/api/generate-study-plan/route')],
    ['admissions comparison', () => import('@/app/api/prijemni/compare-insight/route')],
    ['medicinar briefing', () => import('@/app/api/medicinar/briefing/generate/route')],
  ])('blocks the %s provider route before auth or provider initialization', async (_name, loadRoute) => {
    const previous = process.env.AI_ENDPOINTS_ENABLED
    delete process.env.AI_ENDPOINTS_ENABLED
    const fetchSpy = vi.spyOn(globalThis, 'fetch')

    try {
      const { POST } = await loadRoute()
      const response = await POST(new Request('http://localhost/api/test', { method: 'POST' }))

      expect(response.status).toBe(503)
      await expect(response.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
      expect(securityMocks.anthropicConstructor).not.toHaveBeenCalled()
      expect(securityMocks.providerCreate).not.toHaveBeenCalled()
      expect(securityMocks.createClient).not.toHaveBeenCalled()
      expect(securityMocks.createAdminClient).not.toHaveBeenCalled()
      expect(securityMocks.requirePro).not.toHaveBeenCalled()
      expect(fetchSpy).not.toHaveBeenCalled()
    } finally {
      fetchSpy.mockRestore()
      if (previous === undefined) delete process.env.AI_ENDPOINTS_ENABLED
      else process.env.AI_ENDPOINTS_ENABLED = previous
    }
  })
})
