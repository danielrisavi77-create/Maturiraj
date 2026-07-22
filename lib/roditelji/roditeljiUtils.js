/* ─────────────────────────────────────────────
   UTILS / DERIVED DATA
   Helper functions for parent portal screens
───────────────────────────────────────────── */

export function rizikStyle(r) {
  if (r === 'kritično') return { color: 'var(--red)',   bg: 'var(--red-d)',   border: 'rgba(248,113,113,.2)' }
  if (r === 'pazi')     return { color: 'var(--gold)',  bg: 'var(--gold-d)',  border: 'rgba(245,158,11,.2)' }
  return null
}

export function alertStyle(tip) {
  if (tip === 'warn') return { bg: 'var(--red-d)',   border: 'rgba(248,113,113,.2)', color: 'var(--red)' }
  if (tip === 'good') return { bg: 'var(--green-d)', border: 'rgba(62,207,110,.2)',  color: 'var(--green)' }
  return                      { bg: 'var(--blue-d)',  border: 'rgba(75,123,255,.2)',  color: 'var(--blue)' }
}

export function tipColor(tip) {
  if (tip === 'rok')   return 'var(--red)'
  if (tip === 'ispit') return 'var(--blue)'
  return 'var(--muted)'
}

export function childScore(c) {
  if (!c?.predmeti?.length) return 0
  return Math.round(c.predmeti.reduce((a, p) => a + p.prog, 0) / c.predmeti.length)
}

export function childStatus(c) {
  const s = childScore(c)
  if (s >= 80) return { label: 'Odlično', color: 'var(--green)', badge: 'r-b-green' }
  if (s >= 65) return { label: 'Na putu',  color: 'var(--blue)',  badge: 'r-b-blue' }
  return              { label: 'Pažnja',   color: 'var(--amber)', badge: 'r-b-amber' }
}

export function childNameGenitive(firstName) {
  if (firstName === 'Luka') return 'Luke'
  if (firstName === 'Ana')  return 'Ane'
  return firstName + 'a'
}
