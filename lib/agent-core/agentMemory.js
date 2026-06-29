// lib/agent-core/agentMemory.js

const memoryCache = new Map()

export async function getAgentMemory(userId, agentName) {
  const cacheKey = `${userId}:${agentName}`

  // Provjeri cache
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey)
  }

  // U produkciji, učitaj iz Supabase
  // Za sada vraćamo osnovnu strukturu
  const emptyMemory = {
    conversationHistory: [],
    userProfile: {},
    lastInteraction: null,
    preferences: {},
  }

  memoryCache.set(cacheKey, emptyMemory)
  return emptyMemory
}

export async function saveAgentMemory(userId, agentName, memory) {
  const cacheKey = `${userId}:${agentName}`
  memoryCache.set(cacheKey, memory)

  // U produkciji, spremi u Supabase
  // await supabase.from('agent_memory').upsert({
  //   user_id: userId,
  //   agent_name: agentName,
  //   memory: memory,
  //   updated_at: new Date().toISOString(),
  // })
}

export async function clearAgentMemory(userId, agentName) {
  const cacheKey = `${userId}:${agentName}`
  memoryCache.delete(cacheKey)
}

export async function getAllUserMemory(userId) {
  const userMemory = {}
  for (const [key, value] of memoryCache.entries()) {
    if (key.startsWith(`${userId}:`)) {
      const agentName = key.split(':')[1]
      userMemory[agentName] = value
    }
  }
  return userMemory
}
