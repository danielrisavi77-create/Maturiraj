import { beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => ({ provider: vi.fn(), auth: vi.fn(), gate: vi.fn(), limit: vi.fn(), reserve: vi.fn(), complete: vi.fn(), tier: vi.fn() }))
vi.mock('@anthropic-ai/sdk', () => ({ default: class { constructor() { this.messages = { create: mocks.provider } } } }))
vi.mock('@/lib/supabase/server', () => ({ createClient: mocks.auth }))
vi.mock('@/lib/billing/requirePro', () => ({ requireStandardOrPro: mocks.gate }))
vi.mock('@/lib/config/featureFlags', () => ({ isAiEndpointsEnabled: () => true }))
vi.mock('@/lib/rate-limit', () => ({ checkRateLimit: mocks.limit }))
vi.mock('@/lib/billing/subscriptions', () => ({ getUserTier: mocks.tier }))
vi.mock('@/lib/ai-usage/ledger', () => ({ reserveUsage: mocks.reserve, completeUsage: mocks.complete, markUsageUncertain: vi.fn() }))

import { POST } from '@/app/api/ai-simulator/route'

describe('AI simulator usage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mocks.gate.mockResolvedValue(null)
    mocks.tier.mockResolvedValue('starter')
    mocks.limit.mockResolvedValue({ limited: false })
    mocks.auth.mockResolvedValue({ auth: { getUser: async () => ({ data: { user: { id: 'user-1' } } }) } })
    mocks.reserve.mockResolvedValue({ requestId: 'r-1' })
    mocks.provider.mockResolvedValue({ usage: { input_tokens: 10, output_tokens: 20 }, content: [] })
  })
  it('denies provider call when reservation fails', async () => {
    mocks.reserve.mockRejectedValueOnce(Object.assign(new Error('limit'), { code: 'AI_BUDGET_EXCEEDED' }))
    const res = await POST(new Request('http://localhost/api/ai-simulator', { method: 'POST', body: JSON.stringify({ messages: [{ role: 'user', content: 'A' }] }) }))
    expect(res.status).toBe(429)
    expect(mocks.provider).not.toHaveBeenCalled()
  })
  it('settles actual provider usage once', async () => {
    const res = await POST(new Request('http://localhost/api/ai-simulator', { method: 'POST', body: JSON.stringify({ messages: [{ role: 'user', content: 'A' }] }) }))
    expect(res.status).toBe(200)
    expect(mocks.complete).toHaveBeenCalledWith(expect.objectContaining({ requestId: 'r-1', usage: { input_tokens: 10, output_tokens: 20 } }))
  })
  it('rejects a negative requested output cap before a reservation', async () => {
    const res = await POST(new Request('http://localhost/api/ai-simulator', { method: 'POST', body: JSON.stringify({ max_tokens: -100, messages: [{ role: 'user', content: 'A' }] }) }))
    expect(res.status).toBe(400)
    expect(mocks.reserve).not.toHaveBeenCalled()
  })
})
