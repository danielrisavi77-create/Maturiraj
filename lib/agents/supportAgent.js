// lib/agents/supportAgent.js
import { makeClaudeRequest } from '@/lib/agent-core/anthropicClient'
import { supportSystemPrompt } from '@/lib/prompts/support.system'
import { agentLogger } from '@/lib/agent-core/agentLogger'

export async function handle({ userId, issue, category, urgency, previousContext, memory, supabase }) {
  let escalate = false
  let ticketId = null

  // Procijeni je li potrebna eskalacija
  if (urgency === 'critical' || issue.length > 500) {
    escalate = true
    // Kreiraj ticket
    const { data } = await supabase
      .from('support_tickets')
      .insert([
        {
          user_id: userId,
          issue,
          category,
          urgency,
          status: 'open',
        },
      ])
      .select()
      .single()
    ticketId = data?.id
  }

  const messages = [
    {
      role: 'user',
      content: `
Kategorija: ${category}
Hitnost: ${urgency}
Problem: ${issue}
${previousContext ? `Prethodni kontekst: ${JSON.stringify(previousContext)}` : ''}
`,
    },
  ]

  const response = await makeClaudeRequest({
    systemPrompt: supportSystemPrompt,
    messages,
    maxTokens: 1500,
  })

  let solution = ''
  for (const block of response.content) {
    if (block.type === 'text') {
      solution = block.text
      break
    }
  }

  if (escalate) {
    agentLogger.log(`Support ticket created: ${ticketId}`, { userId, issue })
  }

  return {
    output: {
      solution,
      ticketId: ticketId || null,
      escalated: escalate,
      timestamp: new Date().toISOString(),
    },
    memory: {
      ...memory,
      lastSupport: { issue, category, solution },
      lastInteraction: new Date().toISOString(),
    },
  }
}
