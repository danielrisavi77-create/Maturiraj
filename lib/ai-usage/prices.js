import 'server-only'

// First-party Claude API, USD per million tokens. Verified 2026-09-22:
// https://platform.claude.com/docs/en/about-claude/pricing
// The 1-hour cache-write rate is a conservative upper bound when TTL is unknown.
export const PRICE_VERSION = 'anthropic-2026-09-22'
const RATES = Object.freeze({
  'claude-sonnet-4-6': { input: 3, output: 15, cacheRead: 0.3, cacheWrite: 6 },
  'claude-haiku-4-5': { input: 1, output: 5, cacheRead: 0.1, cacheWrite: 2 },
})

export function quoteMicroUsd({ model, inputTokens = 0, outputTokens = 0, cacheReadTokens = 0, cacheWriteTokens = 0 }) {
  const rate = RATES[model]
  if (!rate) throw new Error('Unsupported AI model price')
  for (const count of [inputTokens, outputTokens, cacheReadTokens, cacheWriteTokens]) {
    if (!Number.isSafeInteger(count) || count < 0) throw new Error('Invalid token count')
  }
  // USD/MTok multiplied by tokens equals micro USD. Round once, at the end.
  return Math.ceil(inputTokens * rate.input + outputTokens * rate.output + cacheReadTokens * rate.cacheRead + cacheWriteTokens * rate.cacheWrite)
}
