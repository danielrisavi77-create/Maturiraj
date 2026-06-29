// Shared formatting helpers for parent portal

export function formatMinutes(minutes) {
  if (!minutes || minutes === 0) return '0min'
  if (minutes < 60) return `${minutes}min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m > 0 ? `${h}h ${m}min` : `${h}h`
}

export function formatRelativeDate(isoString) {
  if (!isoString) return 'Nikad'
  const diff = (Date.now() - new Date(isoString)) / (1000 * 60 * 60 * 24)
  if (diff < 1) return 'Danas'
  if (diff < 2) return 'Jučer'
  if (diff < 7) return `Prije ${Math.floor(diff)} dana`
  if (diff < 30) return `Prije ${Math.floor(diff / 7)} tjedan/tjedna`
  return `Prije ${Math.floor(diff / 30)} mj.`
}

export function trendLabel(current, previous) {
  if (!previous || previous === 0) return null
  const pct = Math.round(((current - previous) / previous) * 100)
  if (Math.abs(pct) < 5) return { label: '→ Isto', color: '#6a82a8' }
  if (pct > 0) return { label: `↑ ${pct}%`, color: '#3ecf6e' }
  return { label: `↓ ${Math.abs(pct)}%`, color: '#f87171' }
}

export function healthStatus(child) {
  if (!child.lastActiveAt) return { dot: '#6a82a8', label: 'Nikad aktivan' }
  const days = (Date.now() - new Date(child.lastActiveAt)) / (1000 * 60 * 60 * 24)
  if (days < 2) return { dot: '#3ecf6e', label: 'Aktivan' }
  if (days < 5) return { dot: '#e9b446', label: 'Malo aktivan' }
  return { dot: '#f87171', label: 'Neaktivan' }
}

export const SECTION_LABELS = {
  'discere':      'Discere',
  'ai-profesor':  'AI Profesor',
  'plan-ucenja':  'Plan učenja',
  'skripte':      'Skripte',
  'checklist':    'Checklist',
  'formule':      'Formule',
  'kalkulator':   'Kalkulator',
  'prijemni':     'Prijemni',
}

export function sectionLabel(slug) {
  return SECTION_LABELS[slug] ?? slug
}
