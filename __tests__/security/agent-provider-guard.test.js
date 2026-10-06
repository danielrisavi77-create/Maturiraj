import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { NextRequest } from 'next/server'

const mocks = vi.hoisted(() => ({
  runAgent: vi.fn(),
  createServerClient: vi.fn(),
  getUser: vi.fn(),
  anthropicConstructor: vi.fn(),
  providerCreate: vi.fn(),
}))

vi.mock('@/lib/agent-core/runAgent', () => ({ runAgent: mocks.runAgent }))
vi.mock('@/lib/agent-core/agentLogger', () => ({
  agentLogger: { log: vi.fn(), error: vi.fn() },
}))
vi.mock('@supabase/ssr', () => ({ createServerClient: mocks.createServerClient }))
vi.mock('@anthropic-ai/sdk', () => ({
  default: class AnthropicMock {
    constructor() {
      mocks.anthropicConstructor()
      this.messages = { create: mocks.providerCreate }
    }
  },
}))

beforeEach(() => {
  vi.resetModules()
  vi.clearAllMocks()
  vi.stubEnv('AI_ENDPOINTS_ENABLED', 'true')
  vi.stubEnv('AGENT_API_ENABLED', 'true')
  vi.stubEnv('ANTHROPIC_API_KEY', 'synthetic-test-key')
  vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'http://127.0.0.1:54321')
  vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'synthetic-test-anon-key')
  vi.stubGlobal('fetch', vi.fn(() => {
    throw new Error('Network is forbidden in this regression')
  }))
  mocks.getUser.mockResolvedValue({ data: { user: { id: 'authenticated-user' } } })
  mocks.runAgent.mockResolvedValue({ answer: 'mocked answer' })
  mocks.providerCreate.mockResolvedValue({ id: 'mock-response', content: [] })
})

afterEach(() => {
  vi.unstubAllEnvs()
  vi.unstubAllGlobals()
})

describe('orchestrator identity boundary', () => {
  it.each([
    ['supplied identity', { userId: 'forged-user', supabase: { forged: true } }],
    ['ordinary input', {}],
  ])('uses the authenticated user and server client for %s', async (_name, extraInput) => {
    const supabase = { auth: { getUser: mocks.getUser } }
    mocks.createServerClient.mockReturnValue(supabase)
    const { POST } = await import('@/app/api/agents/orchestrator/route')
    const response = await POST(new NextRequest('http://localhost/api/agents/orchestrator', {
      method: 'POST',
      body: JSON.stringify({
        input: { question: 'Objasni pojam', subject: 'test subject', ...extraInput },
      }),
    }))

    expect(response.status).toBe(200)
    expect(mocks.getUser).toHaveBeenCalledOnce()
    expect(mocks.runAgent).toHaveBeenCalledExactlyOnceWith('tutor', {
      question: 'Objasni pojam',
      subject: 'test subject',
      userId: 'authenticated-user',
      supabase,
    })
    expect(mocks.anthropicConstructor).not.toHaveBeenCalled()
    expect(mocks.providerCreate).not.toHaveBeenCalled()
    expect(globalThis.fetch).not.toHaveBeenCalled()
  })
})

describe.each(['false', 'true'])('agent provider boundary with both existing flags=%s', (flagValue) => {
  it.each(['getAnthropicClient', 'makeClaudeRequest'])('blocks %s before exposing or calling the SDK', async (entryPoint) => {
    vi.stubEnv('AI_ENDPOINTS_ENABLED', flagValue)
    vi.stubEnv('AGENT_API_ENABLED', flagValue)
    const agentProvider = await import('@/lib/agent-core/anthropicClient')

    await expect(Promise.resolve().then(() => agentProvider[entryPoint]({
      systemPrompt: 'synthetic test',
      messages: [{ role: 'user', content: 'synthetic test' }],
    }))).rejects.toMatchObject({
      code: 'AGENT_USAGE_UNAVAILABLE',
      message: 'AI agenti su privremeno nedostupni.',
    })
    expect(mocks.anthropicConstructor).not.toHaveBeenCalled()
    expect(mocks.providerCreate).not.toHaveBeenCalled()
    expect(globalThis.fetch).not.toHaveBeenCalled()
  })
})
