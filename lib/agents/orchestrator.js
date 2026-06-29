// lib/agents/orchestrator.js
import { runAgent } from '@/lib/agent-core/runAgent'
import { agentLogger } from '@/lib/agent-core/agentLogger'

export async function orchestrator({ input, userId, context, supabase }) {
  agentLogger.log('Orchestrator invoked', { input, userId })

  try {
    // Određi koji agent trebam koristiti na osnovi inputa
    const selectedAgent = await determineAgent(input, userId, supabase)
    agentLogger.log(`Selected agent: ${selectedAgent}`)

    // Prosljedi zahtjev odgovarajućem agentu
    const result = await runAgent(selectedAgent, {
      userId,
      ...input,
      supabase,
    })

    return {
      success: true,
      agent: selectedAgent,
      result,
    }
  } catch (error) {
    agentLogger.error('Orchestrator failed', error)
    throw error
  }
}

async function determineAgent(input, userId, supabase) {
  // Simple keyword-based agent selection to avoid extra Claude call
  const text = JSON.stringify(input).toLowerCase()

  if (text.includes('plan') || text.includes('učiti') || text.includes('raspored')) {
    return 'planner'
  } else if (text.includes('pitanje') || text.includes('objasni') || text.includes('što je')) {
    return 'tutor'
  } else if (text.includes('napredak') || text.includes('analiza') || text.includes('rezultati')) {
    return 'diagnostic'
  } else if (text.includes('motivacija') || text.includes('savjet') || text.includes('inspiracija')) {
    return 'mentor'
  } else if (text.includes('esaj') || text.includes('pisanje') || text.includes('tekst')) {
    return 'essay'
  } else if (text.includes('problem') || text.includes('greška') || text.includes('pomoć')) {
    return 'support'
  } else {
    return 'tutor' // Default
  }
}
