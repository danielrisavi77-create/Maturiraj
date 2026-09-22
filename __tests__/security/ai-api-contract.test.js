import { beforeEach, describe, expect, it, vi } from 'vitest'

const mocks = vi.hoisted(() => ({
  providerCreate: vi.fn(),
  createClient: vi.fn(),
  requirePro: vi.fn(),
  requireStandardOrPro: vi.fn(),
  checkRateLimit: vi.fn(),
  isAiEndpointsEnabled: vi.fn(),
  reserveUsage: vi.fn(),
  completeUsage: vi.fn(),
  markUsageUncertain: vi.fn(),
  releaseUsage: vi.fn(),
  getUserTier: vi.fn(),
}))

vi.mock('@anthropic-ai/sdk', () => ({
  default: class AnthropicMock {
    constructor() {
      this.messages = { create: mocks.providerCreate }
    }
  },
}))

vi.mock('@/lib/supabase/server', () => ({
  createClient: mocks.createClient,
}))

vi.mock('@/lib/billing/requirePro', () => ({
  requirePro: mocks.requirePro,
  requireStandardOrPro: mocks.requireStandardOrPro,
}))

vi.mock('@/lib/config/featureFlags', () => ({
  isAiEndpointsEnabled: mocks.isAiEndpointsEnabled,
}))

vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: mocks.checkRateLimit,
}))
vi.mock('@/lib/ai-usage/ledger', () => ({
  reserveUsage: mocks.reserveUsage,
  completeUsage: mocks.completeUsage,
  markUsageUncertain: mocks.markUsageUncertain,
  releaseUsage: mocks.releaseUsage,
  UsageLimitError: class UsageLimitError extends Error { constructor() { super('limit'); this.code = 'AI_BUDGET_EXCEEDED' } },
}))
vi.mock('@/lib/billing/subscriptions', () => ({ getUserTier: mocks.getUserTier }))

async function loadPost() {
  const mod = await import('@/app/api/ai/route')
  return mod.POST
}

describe('/api/ai contract (W2)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
    mocks.isAiEndpointsEnabled.mockReturnValue(true)
    mocks.requirePro.mockResolvedValue(null)
    mocks.requireStandardOrPro.mockResolvedValue(null)
    mocks.checkRateLimit.mockResolvedValue({ limited: false, retryAfterSec: 0 })
    mocks.getUserTier.mockResolvedValue('pro')
    mocks.reserveUsage.mockResolvedValue({ requestId: 'reservation-1' })
    mocks.completeUsage.mockResolvedValue({ status: 'completed' })
    mocks.markUsageUncertain.mockResolvedValue(true)
    mocks.createClient.mockResolvedValue({
      auth: { getUser: async () => ({ data: { user: { id: 'u1' } } }) },
    })
    mocks.providerCreate.mockResolvedValue(
      (async function* () {
        yield { type: 'content_block_delta', delta: { text: 'ok' } }
      })()
    )
  })

  it('stays fail-closed when AI_ENDPOINTS_ENABLED is off', async () => {
    mocks.isAiEndpointsEnabled.mockReturnValue(false)
    const POST = await loadPost()
    const res = await POST(
      new Request('http://localhost/api/ai', {
        method: 'POST',
        body: JSON.stringify({ messages: [{ role: 'user', content: 'hi' }] }),
      })
    )
    expect(res.status).toBe(503)
    await expect(res.json()).resolves.toMatchObject({ code: 'FEATURE_DISABLED' })
    expect(mocks.requirePro).not.toHaveBeenCalled()
    expect(mocks.requireStandardOrPro).not.toHaveBeenCalled()
    expect(mocks.providerCreate).not.toHaveBeenCalled()
  })

  it('explain path: Standard+ gate, rejects multi-turn', async () => {
    const POST = await loadPost()
    const res = await POST(
      new Request('http://localhost/api/ai', {
        method: 'POST',
        body: JSON.stringify({
          mode: 'explain',
          messages: [
            { role: 'user', content: 'q1' },
            { role: 'assistant', content: 'a1' },
            { role: 'user', content: 'q2' },
          ],
        }),
      })
    )
    expect(mocks.requireStandardOrPro).toHaveBeenCalled()
    expect(mocks.requirePro).not.toHaveBeenCalled()
    expect(res.status).toBe(400)
  })

  it('profesor path: requirePro + accepts multi-turn', async () => {
    const POST = await loadPost()
    const res = await POST(
      new Request('http://localhost/api/ai', {
        method: 'POST',
        body: JSON.stringify({
          mode: 'profesor',
          system: 'Ti si AI Profesor za maturu.',
          messages: [
            { role: 'user', content: 'Objasni derivacije.' },
            { role: 'assistant', content: 'Derivacija je...' },
            { role: 'user', content: 'Daj primjer.' },
          ],
        }),
      })
    )
    expect(mocks.requirePro).toHaveBeenCalled()
    expect(mocks.requireStandardOrPro).not.toHaveBeenCalled()
    expect(res.status).toBe(200)
    expect(mocks.providerCreate).toHaveBeenCalled()
    const arg = mocks.providerCreate.mock.calls[0][0]
    expect(arg.messages).toHaveLength(3)
    expect(arg.system).toContain('AI Profesor')
  })

  it('implicit profesor when client sends system (kalkulator / legacy)', async () => {
    const POST = await loadPost()
    await POST(
      new Request('http://localhost/api/ai', {
        method: 'POST',
        body: JSON.stringify({
          system: 'JSON only',
          messages: [{ role: 'user', content: '{"x":1}' }],
        }),
      })
    )
    expect(mocks.requirePro).toHaveBeenCalled()
  })

  it('never calls provider after budget denial', async () => {
    mocks.reserveUsage.mockRejectedValueOnce(Object.assign(new Error('limit'), { code: 'AI_BUDGET_EXCEEDED' }))
    const POST = await loadPost()
    const res = await POST(new Request('http://localhost/api/ai', { method: 'POST', body: JSON.stringify({ mode: 'profesor', messages: [{ role: 'user', content: 'Pitanje' }] }) }))
    expect(res.status).toBe(429)
    expect(mocks.providerCreate).not.toHaveBeenCalled()
  })

  it('settles actual stream usage while keeping the SSE text format', async () => {
    mocks.providerCreate.mockResolvedValueOnce((async function* () {
      yield { type: 'message_start', message: { usage: { input_tokens: 45, output_tokens: 0 } } }
      yield { type: 'content_block_delta', delta: { text: 'Odgovor' } }
      yield { type: 'message_delta', usage: { output_tokens: 12 } }
    })())
    const POST = await loadPost()
    const res = await POST(new Request('http://localhost/api/ai', { method: 'POST', body: JSON.stringify({ mode: 'profesor', messages: [{ role: 'user', content: 'Pitanje' }] }) }))
    expect(await res.text()).toContain('data: {"type":"content_block_delta"')
    expect(mocks.completeUsage).toHaveBeenCalledWith(expect.objectContaining({ requestId: 'reservation-1', usage: expect.objectContaining({ input_tokens: 45, output_tokens: 12 }) }))
  })

  it('retains reservation when the provider stream ends unexpectedly', async () => {
    mocks.providerCreate.mockResolvedValueOnce((async function* () { throw new Error('upstream disconnected') })())
    const POST = await loadPost()
    const res = await POST(new Request('http://localhost/api/ai', { method: 'POST', body: JSON.stringify({ mode: 'profesor', messages: [{ role: 'user', content: 'Pitanje' }] }) }))
    await expect(res.text()).rejects.toThrow(/upstream disconnected/)
    expect(mocks.markUsageUncertain).toHaveBeenCalledWith({ requestId: 'reservation-1' })
  })

  it('retains reservation on clean EOF without terminal usage', async () => {
    mocks.providerCreate.mockResolvedValueOnce((async function* () {
      yield { type: 'message_start', message: { usage: { input_tokens: 45, output_tokens: 0 } } }
    })())
    const POST = await loadPost()
    const res = await POST(new Request('http://localhost/api/ai', { method: 'POST', body: JSON.stringify({ mode: 'profesor', messages: [{ role: 'user', content: 'Pitanje' }] }) }))
    await res.text()
    expect(mocks.completeUsage).not.toHaveBeenCalled()
    expect(mocks.markUsageUncertain).toHaveBeenCalledWith({ requestId: 'reservation-1' })
  })
})
