// lib/agent-core/runAgent.js
import { getAgent, isAgentRegistered } from './agentRegistry'
import { makeClaudeRequest } from './anthropicClient'
import { agentLogger } from './agentLogger'
import { capabilityGate } from './capabilityGate'
import { getAgentMemory, saveAgentMemory } from './agentMemory'
import { validateAgentInput } from './validation'
import { Mutex } from 'async-mutex'

const agentMutex = new Mutex()

export async function runAgent(agentName, input) {
  return agentMutex.runExclusive(async () => {
    const startTime = Date.now()

    try {
      // Provjeri je li agent registriran
      if (!isAgentRegistered(agentName)) {
        throw new Error(`Agent '${agentName}' is not registered`)
      }

      const agent = getAgent(agentName)
      agentLogger.log(`Starting agent: ${agentName}`, { input })

      // Validacija inputa
      validateAgentInput(agentName, input)

      // Provjera capability-ja
      const hasCapability = await capabilityGate.checkCapability(
        input.userId,
        agent.type
      )
      if (!hasCapability) {
        agentLogger.warn(`User ${input.userId} doesn't have access to agent ${agentName}`)
        throw new Error('Access denied')
      }

      // Učitaj prethodno stanje agenta
      const memory = await getAgentMemory(input.userId, agentName)

      // Dohvati agent handler
      const agentModule = await getAgentHandler(agentName)
      const result = await agentModule.handle({
        ...input,
        memory,
      })

      // Spremi novo stanje
      await saveAgentMemory(input.userId, agentName, result.memory)

      agentLogger.log(`Agent ${agentName} completed successfully`, {
        duration: Date.now() - startTime,
        result: result.output,
      })

      return result.output
    } catch (error) {
      agentLogger.error(`Agent ${agentName} failed`, error, { input })
      throw error
    }
  })
}

async function getAgentHandler(agentName) {
  // Dinamički učitaj agent handler
  const handlerPath = `@/lib/agents/${agentName}Agent`
  try {
    return await import(handlerPath)
  } catch (error) {
    throw new Error(`Failed to load agent handler for ${agentName}: ${error.message}`)
  }
}
