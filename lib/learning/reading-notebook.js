const plain = value => value !== null && typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype

// Unassessed working notes. Kept in the existing owned/versioned local session
// view, never sent as an answer, included in a score or treated as mastery.
export function isReadingNotebook(question, value) {
  const lines = question?.stimulus?.reading?.lines
  if (!Array.isArray(lines) || !lines.length || !plain(value) ||
      Object.keys(value).some(key => !['thesis','annotations'].includes(key)) ||
      typeof value.thesis !== 'string' || value.thesis.length > 4000 || !plain(value.annotations)) return false
  const ids = new Set(lines.map(line => line.id))
  return Object.keys(value.annotations).length <= 50 && Object.entries(value.annotations).every(([id, note]) =>
    ids.has(id) && typeof note === 'string' && note.length <= 2000)
}

export function readingNotebookText(reading, notebook) {
  const lines = reading.lines.filter(line => Object.hasOwn(notebook.annotations, line.id))
  return [notebook.thesis, ...lines.map(line => `„${line.text}” (${reading.author}, ${reading.title}, stih ${reading.lines.indexOf(line)+1}). ${notebook.annotations[line.id]}`)].filter(Boolean).join('\n\n')
}
