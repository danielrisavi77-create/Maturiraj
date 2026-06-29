// lib/agent-core/agentRegistry.js
const agents = {}

export function registerAgent(name, config) {
  agents[name] = config
}

export function getAgent(name) {
  const agent = agents[name]
  if (!agent) {
    throw new Error(`Agent '${name}' not found in registry`)
  }
  return agent
}

export function listAgents() {
  return Object.keys(agents)
}

export function isAgentRegistered(name) {
  return name in agents
}

// Registracija sve dostupnih agenata
registerAgent('planner', {
  name: 'planner',
  type: 'planning',
  description: 'Kreira personalizirane planove učenja',
  capabilities: ['plan-creation', 'schedule-optimization', 'adjustments'],
})

registerAgent('tutor', {
  name: 'tutor',
  type: 'educational',
  description: 'AI profesor koji odgovara na pitanja',
  capabilities: ['teaching', 'explanation', 'practice'],
})

registerAgent('diagnostic', {
  name: 'diagnostic',
  type: 'analysis',
  description: 'Analizira napredak i slabosti',
  capabilities: ['analysis', 'reporting', 'recommendations'],
})

registerAgent('mentor', {
  name: 'mentor',
  type: 'motivational',
  description: 'Dnevni mentor koji motivira i pomaže',
  capabilities: ['motivation', 'guidance', 'support'],
})

registerAgent('essay', {
  name: 'essay',
  type: 'feedback',
  description: 'Daje povratnu informaciju na eseje',
  capabilities: ['feedback', 'correction', 'tips'],
})

registerAgent('support', {
  name: 'support',
  type: 'support',
  description: 'Korisničke podrške',
  capabilities: ['troubleshooting', 'help', 'escalation'],
})

registerAgent('contentOps', {
  name: 'contentOps',
  type: 'operations',
  description: 'Upravljanje sadržajem za admini',
  capabilities: ['content-management', 'moderation', 'analytics'],
})
