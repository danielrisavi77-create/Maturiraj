// ── lib/dashboard/helpers.js ─────────────────────────────────────────────────
// Zajednički helperi za dashboard hub (/dashboard) i plan dashboard
// (/plan-ucenja/dashboard). Izdvojeno da se izbjegne drift između dvije stranice.
// ─────────────────────────────────────────────────────────────────────────────

// Datum mature — centralna referenca za odbrojavanje.
export const MATURA_DATE = new Date('2026-06-01')

// Pozdrav ovisno o dobu dana.
export function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Dobro jutro'
  if (h < 18) return 'Dobar dan'
  return 'Dobra večer'
}

// Broj dana do zadanog datuma (min 0).
export function daysUntil(date) {
  return Math.max(0, Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24)))
}

// Boja progres-bara prema postotku.
export function progressColor(pct) {
  if (pct >= 80) return 'var(--green)'
  if (pct >= 50) return 'var(--blue)'
  if (pct >= 25) return 'var(--gold)'
  return '#f87171'
}

// Zajednička "staklena" površina kartice.
export const card = {
  background: 'linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012))',
  border: '1px solid rgba(255,255,255,.08)',
  borderRadius: 24,
  boxShadow: '0 16px 48px rgba(0,0,0,.22)',
  backdropFilter: 'blur(20px)',
}
