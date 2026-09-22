import { beforeEach, describe, expect, it, vi } from 'vitest'

const m = vi.hoisted(() => ({ auth: vi.fn(), gate: vi.fn(), stats: vi.fn(), enabled: vi.fn() }))
vi.mock('@/lib/supabase/server', () => ({ createClient: m.auth }))
vi.mock('@/lib/billing/requirePro', () => ({ requirePro: m.gate }))
vi.mock('@/lib/ai-usage/ledger', () => ({ getUsageStats: m.stats }))
vi.mock('@/lib/config/featureFlags', () => ({ isAiEndpointsEnabled: m.enabled }))
import { GET } from '@/app/api/ai/usage/route'

describe('caller-owned AI usage stats', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    m.enabled.mockReturnValue(true)
    m.gate.mockResolvedValue(null)
    m.auth.mockResolvedValue({ auth: { getUser: async () => ({ data: { user: { id: 'owner' } } }) } })
    m.stats.mockResolvedValue({ usedMicroUsd: 100, budgetMicroUsd: 3000000, coverage: 'partial' })
  })
  it('ignores a different user ID in the query', async () => {
    const response = await GET(new Request('http://localhost/api/ai/usage?userId=someone-else'))
    expect(response.status).toBe(200)
    expect(m.stats).toHaveBeenCalledWith({ userId: 'owner', tier: 'pro' })
    expect(response.headers.get('cache-control')).toBe('no-store')
  })
  it('denies unauthenticated calls without querying usage', async () => {
    m.auth.mockResolvedValue({ auth: { getUser: async () => ({ data: { user: null } }) } })
    expect((await GET(new Request('http://localhost/api/ai/usage'))).status).toBe(401)
    expect(m.stats).not.toHaveBeenCalled()
  })
  it('does not pretend unavailable ledger stats are current', async () => {
    m.stats.mockRejectedValue(new Error('DB down'))
    expect((await GET(new Request('http://localhost/api/ai/usage'))).status).toBe(503)
  })
})
