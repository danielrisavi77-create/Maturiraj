// lib/agents/plannerAgent.js
import { makeClaudeRequest } from '@/lib/agent-core/anthropicClient'
import { plannerSystemPrompt } from '@/lib/prompts/planner.system'
import { planTools } from '@/lib/agent-tools/planTools'

export async function handle({ userId, subjects, currentLevel, targetDate, preferences, memory, supabase }) {
  // Učitaj korisničke podatke
  const { data: profile } = await supabase
    .from('profiles')
    .select('name, level, preferred_learning_pace')
    .eq('id', userId)
    .single()

  // Pripremi kontekst
  const tools = planTools.map(tool => ({
    name: tool.name,
    description: tool.description,
    input_schema: tool.inputSchema,
  }))

  const messages = [
    {
      role: 'user',
      content: `
Kreiraj plan učenja za sljedeće predmete: ${subjects.join(', ')}
Trenutna razina: ${currentLevel}
Cilj do: ${targetDate}
Preferences: ${JSON.stringify(preferences)}
Korisnik: ${profile.name}
`,
    },
  ]

  const response = await makeClaudeRequest({
    systemPrompt: plannerSystemPrompt,
    messages,
    tools,
    maxTokens: 3000,
  })

  // Procesiraj odgovor
  let plan = null
  let toolUse = false

  for (const block of response.content) {
    if (block.type === 'text') {
      // Parse plan iz teksta
      try {
        plan = JSON.parse(block.text)
      } catch {
        plan = { text: block.text }
      }
    } else if (block.type === 'tool_use') {
      toolUse = true
      // Procesiraj tool use
      const tool = planTools.find(t => t.name === block.name)
      if (tool) {
        plan = await tool.execute(block.input, supabase)
      }
    }
  }

  return {
    output: {
      plan,
      message: `Plan učenja je kreirani za ${subjects.length} predmeta.`,
    },
    memory: {
      ...memory,
      lastPlan: plan,
      lastInteraction: new Date().toISOString(),
    },
  }
}
