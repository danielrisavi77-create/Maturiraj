// ── lib/dashboard/helpers.js ─────────────────────────────────────────────────
// Zajednički helperi za dashboard hub (/dashboard) i plan dashboard
// (/plan-ucenja/dashboard). Izdvojeno da se izbjegne drift između dvije stranice.
// ─────────────────────────────────────────────────────────────────────────────

// Datum mature — sljedeći ljetni rok (rolling), da odbrojavanje nikad ne zamrzne.
// Ljetni rok državne mature počinje sredinom lipnja; ciljamo 15.6. Kad taj datum
// prođe, automatski se pomiče na sljedeću godinu. (NCVVO objavljuje točan datum —
// po potrebi zamijeni konfiguriranim datumom iz baze/env.)
export function getNextMaturaDate(now = new Date()) {
  const year = now.getFullYear()
  const target = new Date(year, 5, 15) // mjesec 5 = lipanj
  if (now > target) target.setFullYear(year + 1)
  return target
}

// Centralna referenca za odbrojavanje (izračunata pri učitavanju).
export const MATURA_DATE = getNextMaturaDate()

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
