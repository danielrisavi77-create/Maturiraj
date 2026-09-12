const GROUP_TYPES = new Set(['passage_group', 'audio_group', 'media_response'])

// UI/scoring use flat leaf IDs; durable events contain one top-level snapshot.
// Omitted children are unanswered, not undefined JSON values or old answers.
export function responseForQuestion(question, flatResponses) {
  if (!GROUP_TYPES.has(question.type)) return flatResponses[question.id]
  return Object.fromEntries((question.children || []).map(child => [child.id, responseForQuestion(child, flatResponses)]).filter(([, value]) => value !== undefined))
}

export function mergeQuestionResponse(question, nextValue, flatResponses) {
  if (!GROUP_TYPES.has(question.type)) {
    const next = { ...flatResponses }
    if (nextValue === undefined) { delete next[question.id]; return next }
    return { ...next, [question.id]: nextValue }
  }
  return (question.children || []).reduce((next, child) => mergeQuestionResponse(child, nextValue?.[child.id], next), { ...flatResponses })
}
