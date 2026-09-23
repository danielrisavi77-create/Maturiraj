// lib/discere/grade-scale.js
// ─────────────────────────────────────────────────────────────────────────────
// Jedna ljestvica postotak → ocjena za sve predmete. Ista je brojčana granica
// dosad živjela zasebno u mat (core/progress.ts), engleskom (AnalyticsPanelFull)
// i paywallu (getScoreStatus); ovo je zajednički izvor za canonical engine.
//
// Granice: 85 → 5, 70 → 4, 55 → 3, 40 → 2, ispod → 1.

/** Donje granice po ocjeni, od najviše prema najnižoj. */
export const GRADE_THRESHOLDS = Object.freeze([
  Object.freeze({ grade: 5, min: 85 }),
  Object.freeze({ grade: 4, min: 70 }),
  Object.freeze({ grade: 3, min: 55 }),
  Object.freeze({ grade: 2, min: 40 }),
])

/**
 * Ocjena (1–5) iz postotka. Sve što nije konačan broj → 1 (fail closed).
 * @param {number} pct 0–100
 * @returns {1|2|3|4|5}
 */
export function grade(pct) {
  if (!Number.isFinite(pct)) return 1
  for (const t of GRADE_THRESHOLDS) {
    if (pct >= t.min) return t.grade
  }
  return 1
}

/** Postotak iz bodova; dijeljenje s nulom daje 0, ne NaN. */
export function pctOf(score, total) {
  const t = Number(total)
  if (!Number.isFinite(t) || t <= 0) return 0
  return (Number(score) || 0) / t * 100
}

/** Opisne oznake uz ocjenu — koristi ih kartica rezultata. */
export const GRADE_STATUS = Object.freeze({
  5: Object.freeze({ label: 'Odlično',         color: '#3ecf6e', emoji: '🏆' }),
  4: Object.freeze({ label: 'Vrlo dobro',      color: '#2dcfbe', emoji: '✨' }),
  3: Object.freeze({ label: 'Dobro',           color: '#4b7bff', emoji: '👍' }),
  2: Object.freeze({ label: 'Dovoljno',        color: '#e9b446', emoji: '📘' }),
  1: Object.freeze({ label: 'Potrebna vježba', color: '#f87171', emoji: '💪' }),
})

/**
 * Oznaka (label/color/emoji) za postotak.
 * @param {number} pct
 */
export function gradeStatus(pct) {
  return GRADE_STATUS[grade(pct)]
}
