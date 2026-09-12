const groups = new Set(['passage_group', 'audio_group', 'media_response'])
const plain = value => value !== null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype
const text = value => typeof value === 'string'
const ids = items => new Set((items || []).map(item => item.id))
const selection = (value, allowed) => typeof value === 'string' && allowed.has(value)
function mapResponse(response, items, validValue) {
  const allowed = ids(items)
  return plain(response) && Object.entries(response).every(([key, value]) => allowed.has(key) && validValue(value, key))
}

/** Shape validation against trusted question content, never against answer keys.
 * Partial/empty snapshots support editing and clearing. Transport separately
 * enforces JSON/size limits; this function neither saves nor awards points.
 */
export function isAssessmentResponse(question, response, depth = 0) {
  if (!question || depth > 20) return false
  if (groups.has(question.type)) {
    const children = question.children || []
    return mapResponse(response, children, (value, key) => isAssessmentResponse(children.find(child => child.id === key), value, depth + 1))
  }
  switch (question.type) {
    case 'mc': return selection(response, ids(question.options))
    case 'multi':
    case 'ordering': {
      const allowed = ids(question.type === 'multi' ? question.options : question.items)
      return Array.isArray(response) && new Set(response).size === response.length && response.every(value => selection(value, allowed))
    }
    case 'short':
    case 'essay': return text(response)
    case 'fill': return mapResponse(response, question.gaps, text)
    case 'matching': return mapResponse(response, question.left, value => value === '' || selection(value, ids(question.right)))
    case 'true_false': return mapResponse(response, question.statements, value => typeof value === 'boolean')
    default: return false
  }
}
