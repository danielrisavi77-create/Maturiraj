import 'server-only'
import { randomUUID } from 'node:crypto'
import { createAdminClient } from '@/lib/supabase/server'
import { PRICE_VERSION, quoteMicroUsd } from './prices'

const VALID_FEATURES = new Set(['ai-profesor', 'ai-explain', 'ai-simulator', 'study-plan', 'compare-insight', 'medicinar-briefing'])

export class UsageLimitError extends Error {
  constructor() { super('AI monthly budget exceeded'); this.code = 'AI_BUDGET_EXCEEDED' }
}

function budget(tier) {
  const raw = tier === 'pro' ? process.env.AI_MONTHLY_BUDGET_MICROUSD_PRO : process.env.AI_MONTHLY_BUDGET_MICROUSD_STARTER
  const n = Number(raw)
  if (!raw || !Number.isSafeInteger(n) || n <= 0) throw new Error('AI budget not configured')
  return n
}

async function rpc(name, params) {
  const { data, error } = await createAdminClient().rpc(name, params)
  if (error) throw new Error(`AI ledger unavailable: ${error.code || 'RPC_ERROR'}`)
  return data
}

export async function reserveUsage({ userId, feature, model, estimatedInputTokens, maxOutputTokens, tier = 'pro' }) {
  if (!userId || !VALID_FEATURES.has(feature) || !['pro', 'starter'].includes(tier)) throw new Error('Invalid AI usage request')
  const amount = Math.max(1, quoteMicroUsd({ model, inputTokens: estimatedInputTokens, outputTokens: maxOutputTokens }))
  const maxBudget = budget(tier)
  const requestId = randomUUID()
  const now = new Date()
  const period = now.toISOString().slice(0, 7) + '-01'
  const allowed = await rpc('ai_usage_reserve', {
    p_user_id: userId, p_request_id: requestId, p_feature: feature, p_model: model,
    p_period: period, p_budget_microusd: maxBudget, p_reserved_microusd: amount,
    p_expires_at: new Date(now.getTime() + 10 * 60_000).toISOString(),
    p_message_limit: feature === 'ai-profesor' ? 150 : null,
  })
  if (allowed !== true) throw new UsageLimitError()
  return { requestId }
}

export async function markUsageUncertain({ requestId }) {
  await rpc('ai_usage_mark_uncertain', { p_request_id: requestId })
}

export async function releaseUsage({ requestId }) {
  await rpc('ai_usage_release', { p_request_id: requestId })
}

export async function completeUsage({ requestId, model, usage }) {
  if (!usage || !Number.isSafeInteger(usage.input_tokens) || !Number.isSafeInteger(usage.output_tokens)) {
    await markUsageUncertain({ requestId })
    return { status: 'uncertain' }
  }
  const read = usage.cache_read_input_tokens ?? 0
  const write = usage.cache_creation_input_tokens ?? 0
  const amount = quoteMicroUsd({ model, inputTokens: usage.input_tokens, outputTokens: usage.output_tokens, cacheReadTokens: read, cacheWriteTokens: write })
  const done = await rpc('ai_usage_complete', {
    p_request_id: requestId, p_input_tokens: usage.input_tokens, p_output_tokens: usage.output_tokens,
    p_cache_read_tokens: read, p_cache_write_tokens: write, p_actual_microusd: amount,
    p_price_version: PRICE_VERSION,
  })
  if (done !== true) throw new Error('AI usage completion rejected')
  return { status: 'completed', amountMicroUsd: amount }
}

export async function getUsageStats({ userId, tier = 'pro' }) {
  if (!userId) throw new Error('Missing user')
  const maxBudget = budget(tier)
  const period = new Date().toISOString().slice(0, 7) + '-01'
  const data = await rpc('ai_usage_stats', { p_user_id: userId, p_period: period })
  return { ...data, budgetMicroUsd: maxBudget, messageLimit: 150, coverage: 'partial' }
}
