// lib/agent-core/anthropicClient.js

// Agent handlers do not yet reserve a server budget or settle provider usage.
// Keep both entry points closed, even when the existing API flags are enabled.
// Reopening requires the integration and review in docs/AGENT_PROVIDER_GUARD.md.
export function getAnthropicClient() {
  const error = new Error('AI agenti su privremeno nedostupni.')
  error.code = 'AGENT_USAGE_UNAVAILABLE'
  throw error
}

export async function makeClaudeRequest() {
  return getAnthropicClient()
}
