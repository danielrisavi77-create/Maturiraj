// lib/agents/essayAgent.js
import { makeClaudeRequest } from '@/lib/agent-core/anthropicClient'
import { essaySystemPrompt } from '@/lib/prompts/essay.system'
import { essayTools } from '@/lib/agent-tools/essayTools'

export async function handle({ userId, essayText, topic, feedbackType, memory, supabase }) {
  const tools = essayTools.map(tool => ({
    name: tool.name,
    description: tool.description,
    input_schema: tool.inputSchema,
  }))

  const messages = [
    {
      role: 'user',
      content: `
Tema: ${topic}
Tip povratne informacije: ${feedbackType}

Esej:
${essayText}

Pruži detaljnu povratnu informaciju.
`,
    },
  ]

  const response = await makeClaudeRequest({
    systemPrompt: essaySystemPrompt,
    messages,
    tools,
    maxTokens: 2500,
  })

  let feedback = ''
  let corrections = []
  let score = null

  for (const block of response.content) {
    if (block.type === 'text') {
      feedback = block.text
      try {
        const parsed = JSON.parse(block.text)
        corrections = parsed.corrections || []
        score = parsed.score
      } catch {}
    } else if (block.type === 'tool_use') {
      const tool = essayTools.find(t => t.name === block.name)
      if (tool) {
        const result = await tool.execute(block.input, supabase)
        corrections.push(result)
      }
    }
  }

  return {
    output: {
      feedback,
      corrections,
      score,
      timestamp: new Date().toISOString(),
    },
    memory: {
      ...memory,
      lastEssayFeedback: { feedback, score, topic },
      lastInteraction: new Date().toISOString(),
    },
  }
}
