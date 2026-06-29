// lib/agents/mentorAgent.js
import { makeClaudeRequest } from '@/lib/agent-core/anthropicClient'
import { mentorSystemPrompt } from '@/lib/prompts/mentor.system'
import { reminderTools } from '@/lib/agent-tools/reminderTools'

export async function handle({ userId, dayOfWeek, currentProgress, mood, challenges, memory, supabase }) {
  const { data: profile } = await supabase
    .from('profiles')
    .select('name')
    .eq('id', userId)
    .single()

  const tools = reminderTools.map(tool => ({
    name: tool.name,
    description: tool.description,
    input_schema: tool.inputSchema,
  }))

  const messages = [
    {
      role: 'user',
      content: `
Korisnik: ${profile?.name}
Dan: ${dayOfWeek}
Trenutni napredak: ${JSON.stringify(currentProgress)}
Raspoloženje: ${mood}
${challenges ? `Izazovi: ${challenges.join(', ')}` : ''}

Pruži dnevnu motivaciju i savjete.
`,
    },
  ]

  const response = await makeClaudeRequest({
    systemPrompt: mentorSystemPrompt,
    messages,
    tools,
    maxTokens: 1500,
  })

  let motivation = ''
  let suggestions = []

  for (const block of response.content) {
    if (block.type === 'text') {
      motivation = block.text
    } else if (block.type === 'tool_use') {
      const tool = reminderTools.find(t => t.name === block.name)
      if (tool) {
        suggestions.push(await tool.execute(block.input, supabase))
      }
    }
  }

  return {
    output: {
      motivation,
      suggestions,
      timestamp: new Date().toISOString(),
    },
    memory: {
      ...memory,
      lastMentorSession: { motivation, suggestions, dayOfWeek, mood },
      lastInteraction: new Date().toISOString(),
    },
  }
}
