// lib/agent-core/validation.js

const agentSchemas = {
  planner: {
    subjects: 'array',
    currentLevel: 'string',
    targetDate: 'string',
    preferences: 'object',
  },
  tutor: {
    question: 'string',
    subject: 'string',
    context: 'object|optional',
    conversationId: 'string|optional',
  },
  diagnostic: {
    testResults: 'array',
    progressData: 'object',
    learningPatterns: 'object',
  },
  mentor: {
    dayOfWeek: 'string',
    currentProgress: 'object',
    mood: 'string',
    challenges: 'array|optional',
  },
  essay: {
    essayText: 'string',
    topic: 'string',
    feedbackType: 'string',
  },
  support: {
    issue: 'string',
    category: 'string',
    urgency: 'string',
    previousContext: 'object|optional',
  },
  contentOps: {
    contentType: 'string',
    action: 'string',
    data: 'object',
  },
}

export function validateAgentInput(agentName, input) {
  const schema = agentSchemas[agentName]

  if (!schema) {
    throw new Error(`No validation schema found for agent: ${agentName}`)
  }

  for (const [field, type] of Object.entries(schema)) {
    const isOptional = type.includes('optional')
    const actualType = type.replace('|optional', '')

    // Provjera je li polje obavezno
    if (!isOptional && !(field in input)) {
      throw new Error(`Missing required field: ${field}`)
    }

    // Provjera tipa ako postoji
    if (field in input && input[field] !== null) {
      const value = input[field]
      const matches = validateType(value, actualType)

      if (!matches) {
        throw new Error(
          `Field ${field} has invalid type. Expected: ${actualType}, Got: ${typeof value}`
        )
      }
    }
  }

  return true
}

function validateType(value, expectedType) {
  switch (expectedType) {
    case 'string':
      return typeof value === 'string'
    case 'number':
      return typeof value === 'number'
    case 'boolean':
      return typeof value === 'boolean'
    case 'array':
      return Array.isArray(value)
    case 'object':
      return typeof value === 'object' && !Array.isArray(value)
    default:
      return true
  }
}
