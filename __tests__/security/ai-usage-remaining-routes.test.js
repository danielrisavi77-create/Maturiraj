import { beforeEach, describe, expect, it, vi } from 'vitest'

const m = vi.hoisted(() => ({ reserve: vi.fn(), complete: vi.fn(), uncertain: vi.fn(), release: vi.fn(), gate: vi.fn(), user: vi.fn(), tier: vi.fn(), provider: vi.fn(), admin: vi.fn() }))
vi.mock('@/lib/ai-usage/ledger', () => ({ reserveUsage: m.reserve, completeUsage: m.complete, markUsageUncertain: m.uncertain, releaseUsage: m.release }))
vi.mock('@/lib/billing/requirePro', () => ({ requirePro: m.gate }))
vi.mock('@/lib/config/featureFlags', () => ({ isAiEndpointsEnabled: () => true }))
vi.mock('@/lib/supabase/server', () => ({ createClient: m.user }))
vi.mock('@/lib/supabase/admin', () => ({ createAdminClient: m.admin }))
vi.mock('@/lib/billing/subscriptions', () => ({ getUserTier: m.tier }))
vi.mock('@anthropic-ai/sdk', () => ({ default: class { constructor() { this.messages = { create: m.provider } } } }))

import { POST as studyPlan } from '@/app/api/generate-study-plan/route'
import { POST as compare } from '@/app/api/prijemni/compare-insight/route'
import { POST as briefing } from '@/app/api/medicinar/briefing/generate/route'

describe('remaining billed AI routes', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    m.gate.mockResolvedValue(null)
    m.user.mockResolvedValue({ auth: { getUser: async () => ({ data: { user: { id: 'student-1' } } }) } })
    m.reserve.mockResolvedValue({ requestId: 'r-2' })
    m.complete.mockResolvedValue({ status: 'completed' })
    m.release.mockResolvedValue(true)
    m.tier.mockResolvedValue('pro')
    m.provider.mockResolvedValue({ content: [{ type: 'text', text: 'Kratak uvid' }], usage: { input_tokens: 30, output_tokens: 10 } })
    m.admin.mockReturnValue({
      auth: { getUser: async () => ({ data: { user: { id: 'student-1' } } }) },
      from: table => {
        const data = table === 'profiles' ? { plan_type: 'pro' } : table === 'studiji_view'
          ? { naziv: 'Studij', fak_name: 'Fakultet', fak_short: 'F', tip_upisa_label: 'prijemni', predmeti: [] }
          : table === 'ai_briefings' ? null : []
        const chain = {
          select: () => chain, eq: () => chain, order: () => chain, limit: () => chain,
          single: async () => ({ data }), maybeSingle: async () => ({ data }),
          insert: () => ({ select: () => ({ single: async () => ({ data: { id: 'b-1' }, error: null }) }) }),
          then: (resolve, reject) => Promise.resolve({ data }).then(resolve, reject),
        }
        return chain
      },
    })
  })

  it('study-plan budget denial prevents a paid fetch', async () => {
    m.reserve.mockRejectedValueOnce(Object.assign(new Error('limit'), { code: 'AI_BUDGET_EXCEEDED' }))
    const upstream = vi.fn()
    vi.stubGlobal('fetch', upstream)
    try {
      const result = await studyPlan(new Request('http://localhost/api/generate-study-plan', { method: 'POST', body: JSON.stringify({ prompt: 'Tjedni plan' }) }))
      expect(result.status).toBe(429)
      expect(upstream).not.toHaveBeenCalled()
    } finally { vi.unstubAllGlobals() }
  })

  it('study-plan settles actual usage before returning the generated plan', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => ({ usage: { input_tokens: 25, output_tokens: 10 }, content: [{ text: '{"days":[]}' }] }) }))
    try {
      const res = await studyPlan(new Request('http://localhost/api/generate-study-plan', { method: 'POST', body: JSON.stringify({ prompt: 'Tjedni plan' }) }))
      expect(res.status).toBe(200)
      expect(m.complete).toHaveBeenCalledWith(expect.objectContaining({ requestId: 'r-2', usage: { input_tokens: 25, output_tokens: 10 } }))
    } finally { vi.unstubAllGlobals() }
  })

  it('study-plan marks usage uncertain when the provider response cannot be decoded', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => { throw new Error('body disconnected') } }))
    try {
      const res = await studyPlan(new Request('http://localhost/api/generate-study-plan', { method: 'POST', body: JSON.stringify({ prompt: 'Tjedni plan' }) }))
      expect(res.status).toBe(503)
      expect(m.uncertain).toHaveBeenCalledWith({ requestId: 'r-2' })
    } finally { vi.unstubAllGlobals() }
  })

  it('releases reservation after a definitive provider rejection', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 429, text: async () => 'rate limit' }))
    try {
      const res = await studyPlan(new Request('http://localhost/api/generate-study-plan', { method: 'POST', body: JSON.stringify({ prompt: 'Tjedni plan' }) }))
      expect(res.status).toBe(502)
      expect(m.release).toHaveBeenCalledWith({ requestId: 'r-2' })
      expect(m.uncertain).not.toHaveBeenCalled()
    } finally { vi.unstubAllGlobals() }
  })

  it('compare insight settles actual usage', async () => {
    const res = await compare(new Request('http://localhost/api/prijemni/compare-insight', { method: 'POST', body: JSON.stringify({ studiji: [{ ime: 'A' }, { ime: 'B' }] }) }))
    expect(res.status).toBe(200)
    expect(m.complete).toHaveBeenCalledWith(expect.objectContaining({ requestId: 'r-2', usage: { input_tokens: 30, output_tokens: 10 } }))
  })

  it('compare budget denial prevents a provider call', async () => {
    m.reserve.mockRejectedValueOnce(Object.assign(new Error('limit'), { code: 'AI_BUDGET_EXCEEDED' }))
    const res = await compare(new Request('http://localhost/api/prijemni/compare-insight', { method: 'POST', body: JSON.stringify({ studiji: [{ ime: 'A' }, { ime: 'B' }] }) }))
    expect(res.status).toBe(429)
    expect(m.provider).not.toHaveBeenCalled()
  })

  it('compare releases a definite SDK rejection', async () => {
    m.provider.mockRejectedValueOnce(Object.assign(new Error('invalid request'), { status: 400 }))
    const res = await compare(new Request('http://localhost/api/prijemni/compare-insight', { method: 'POST', body: JSON.stringify({ studiji: [{ ime: 'A' }, { ime: 'B' }] }) }))
    expect(res.status).toBe(503)
    expect(m.release).toHaveBeenCalledWith({ requestId: 'r-2' })
    expect(m.uncertain).not.toHaveBeenCalled()
  })

  it('weekly briefing budget denial prevents provider call', async () => {
    m.reserve.mockRejectedValueOnce(Object.assign(new Error('limit'), { code: 'AI_BUDGET_EXCEEDED' }))
    const res = await briefing(new Request('http://localhost/api/medicinar/briefing/generate', { method: 'POST', headers: { authorization: 'Bearer test-token' }, body: JSON.stringify({ studij_id: 1 }) }))
    expect(res.status).toBe(429)
    expect(m.provider).not.toHaveBeenCalled()
  })

  it('weekly briefing settles actual provider usage', async () => {
    m.provider.mockResolvedValueOnce({ content: [{ type: 'text', text: JSON.stringify({ summary: 'S', priorities: [], encouragement: 'E' }) }], usage: { input_tokens: 30, output_tokens: 10 } })
    const res = await briefing(new Request('http://localhost/api/medicinar/briefing/generate', { method: 'POST', headers: { authorization: 'Bearer test-token' }, body: JSON.stringify({ studij_id: 1 }) }))
    expect(res.status).toBe(200)
    expect(m.complete).toHaveBeenCalledWith(expect.objectContaining({ requestId: 'r-2', usage: { input_tokens: 30, output_tokens: 10 } }))
  })
})
