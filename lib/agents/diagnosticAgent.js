// lib/agents/diagnosticAgent.js
import { makeClaudeRequest } from '@/lib/agent-core/anthropicClient'
import { diagnosticSystemPrompt } from '@/lib/prompts/diagnostic.system'
import { progressTools } from '@/lib/agent-tools/progressTools'

export async function handle({ userId, testResults, progressData, learningPatterns, memory, supabase }) {
  const tools = progressTools.map(tool => ({
    name: tool.name,
    description: tool.description,
    input_schema: tool.inputSchema,
  }))

  const messages = [
    {
      role: 'user',
      content: `
Analitika napretka:
Rezultati testova: ${JSON.stringify(testResults)}
Podaci o napretku: ${JSON.stringify(progressData)}
Obrasci učenja: ${JSON.stringify(learningPatterns)}

Pruži detaljnu analizu i preporuke.
`,
    },
  ]

  const response = await makeClaudeRequest({
    systemPrompt: diagnosticSystemPrompt,
    messages,
    tools,
    maxTokens: 2500,
  })

  let analysis = ''
  let recommendations = []

  for (const block of response.content) {
    if (block.type === 'text') {
      analysis = block.text
      try {
        const parsed = JSON.parse(block.text)
        recommendations = parsed.recommendations || []
      } catch {}
    } else if (block.type === 'tool_use') {
      const tool = progressTools.find(t => t.name === block.name)
      if (tool) {
        const result = await tool.execute(block.input, supabase)
        recommendations.push(result)
      }
    }
  }

  return {
    output: {
      analysis,
      recommendations,
      timestamp: new Date().toISOString(),
    },
    memory: {
      ...memory,
      lastDiagnostic: { analysis, recommendations },
      lastInteraction: new Date().toISOString(),
    },
  }
}
