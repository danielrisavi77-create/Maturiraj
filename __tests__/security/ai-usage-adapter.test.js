import { beforeEach, describe, expect, it, vi } from 'vitest'

const rpc = vi.fn()
vi.mock('server-only', () => ({}))
vi.mock('@/lib/supabase/server', () => ({ createAdminClient: () => ({ rpc }) }))

import { quoteMicroUsd } from '@/lib/ai-usage/prices'
import { reserveUsage, completeUsage, markUsageUncertain } from '@/lib/ai-usage/ledger'

describe('server-owned usage accounting', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.stubEnv('AI_MONTHLY_BUDGET_MICROUSD_PRO', '3000000')
    rpc.mockResolvedValue({ data: true, error: null })
  })

  it('prices short Sonnet calls in micro USD rather than whole cents', () => {
    expect(quoteMicroUsd({ model: 'claude-sonnet-4-6', inputTokens: 100, outputTokens: 20 })).toBe(600)
  })

  it('rejects unsupported model and missing budget without writing to the database', async () => {
    await expect(reserveUsage({ userId: crypto.randomUUID(), feature: 'ai-profesor', model: 'unknown', estimatedInputTokens: 100, maxOutputTokens: 200 })).rejects.toThrow(/model/i)
    vi.stubEnv('AI_MONTHLY_BUDGET_MICROUSD_PRO', '')
    await expect(reserveUsage({ userId: crypto.randomUUID(), feature: 'ai-profesor', model: 'claude-sonnet-4-6', estimatedInputTokens: 100, maxOutputTokens: 200 })).rejects.toThrow(/budget/i)
    expect(rpc).not.toHaveBeenCalled()
  })

  it('reserves against server budget with a generated request ID', async () => {
    const userId = crypto.randomUUID()
    const { requestId } = await reserveUsage({ userId, feature: 'ai-profesor', model: 'claude-sonnet-4-6', estimatedInputTokens: 100, maxOutputTokens: 200 })
    expect(requestId).toMatch(/^[0-9a-f-]{36}$/)
    expect(rpc).toHaveBeenCalledWith('ai_usage_reserve', expect.objectContaining({ p_user_id: userId, p_budget_microusd: 3000000, p_reserved_microusd: 3300 }))
  })

  it('uses actual usage for completion and keeps missing usage uncertain', async () => {
    const requestId = crypto.randomUUID()
    await completeUsage({ requestId, model: 'claude-sonnet-4-6', usage: { input_tokens: 100, output_tokens: 20 } })
    expect(rpc).toHaveBeenCalledWith('ai_usage_complete', expect.objectContaining({ p_actual_microusd: 600, p_input_tokens: 100, p_output_tokens: 20 }))
    rpc.mockClear()
    await completeUsage({ requestId, model: 'claude-sonnet-4-6', usage: null })
    expect(rpc).toHaveBeenCalledWith('ai_usage_mark_uncertain', { p_request_id: requestId })
  })

  it('fails closed when the ledger RPC is unavailable', async () => {
    rpc.mockResolvedValueOnce({ data: null, error: { code: '42P01' } })
    await expect(reserveUsage({ userId: crypto.randomUUID(), feature: 'ai-profesor', model: 'claude-sonnet-4-6', estimatedInputTokens: 100, maxOutputTokens: 200 })).rejects.toThrow(/ledger unavailable/i)
  })

  it('prices cached tokens once using the configured category rates', () => {
    expect(quoteMicroUsd({ model: 'claude-sonnet-4-6', inputTokens: 10, outputTokens: 10, cacheReadTokens: 10, cacheWriteTokens: 10 })).toBe(243)
    expect(() => quoteMicroUsd({ model: 'claude-sonnet-4-6', inputTokens: -1 })).toThrow(/token count/i)
  })
})
