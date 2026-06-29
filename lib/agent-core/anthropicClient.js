// lib/agent-core/anthropicClient.js
import Anthropic from '@anthropic-ai/sdk'

let client = null

export function getAnthropicClient() {
  if (!client) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY environment variable is not set')
    }
    client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    })
  }
  return client
}

export async function makeClaudeRequest({
  systemPrompt,
  messages,
  tools = [],
  model = 'claude-3-5-sonnet-20241022',
  maxTokens = 2048,
  temperature = 0.7,
}) {
  const client = getAnthropicClient()

  const requestBody = {
    model,
    max_tokens: maxTokens,
    temperature,
    system: systemPrompt,
    messages,
  }

  if (tools.length > 0) {
    requestBody.tools = tools
  }

  const response = await client.messages.create(requestBody)

  return response
}
