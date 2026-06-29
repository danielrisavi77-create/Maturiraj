// lib/agents/tutorAgent.js
import { makeClaudeRequest } from '@/lib/agent-core/anthropicClient'
import { tutorSystemPrompt } from '@/lib/prompts/tutor.system'
import { contentTools } from '@/lib/agent-tools/contentTools'

export async function handle({ userId, question, subject, context, conversationId, memory, supabase }) {
  // Učitaj prethodni razgovore ako postoje
  let conversationHistory = memory.conversationHistory || []

  if (conversationId && conversationHistory.length === 0) {
    const { data: messages } = await supabase
      .from('tutor_conversations')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true })
      .limit(10)

    conversationHistory = messages || []
  }

  const tools = contentTools.map(tool => ({
    name: tool.name,
    description: tool.description,
    input_schema: tool.inputSchema,
  }))

  // Pripremi poruke
  const messages = [
    ...conversationHistory.map(msg => ({
      role: msg.role,
      content: msg.content,
    })),
    {
      role: 'user',
      content: `Predmet: ${subject}\nPitanje: ${question}${context ? `\nKontekst: ${JSON.stringify(context)}` : ''}`,
    },
  ]

  const response = await makeClaudeRequest({
    systemPrompt: tutorSystemPrompt,
    messages,
    tools,
    maxTokens: 2048,
  })

  let answer = ''
  let resources = []

  for (const block of response.content) {
    if (block.type === 'text') {
      answer = block.text
    } else if (block.type === 'tool_use') {
      const tool = contentTools.find(t => t.name === block.name)
      if (tool) {
        resources = await tool.execute(block.input, supabase)
      }
    }
  }

  // Spremi razgovor
  if (conversationId) {
    await supabase.from('tutor_conversations').insert([
      {
        conversation_id: conversationId,
        user_id: userId,
        role: 'user',
        content: question,
      },
      {
        conversation_id: conversationId,
        user_id: userId,
        role: 'assistant',
        content: answer,
      },
    ])
  }

  return {
    output: {
      answer,
      resources,
      conversationId,
    },
    memory: {
      ...memory,
      conversationHistory: [
        ...conversationHistory,
        { role: 'user', content: question },
        { role: 'assistant', content: answer },
      ].slice(-20),
      lastInteraction: new Date().toISOString(),
    },
  }
}
