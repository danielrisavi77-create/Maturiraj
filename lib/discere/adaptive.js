// lib/discere/adaptive.js
// Adaptivno vježbanje — pronađi slabe teme iz stats.js i sastavi skup pitanja
// nad njima. Port ideje iz components/simulator/mat/screens/practice.tsx
// (odabir po temi), bez React ovisnosti.

import { rankTopicsByAccuracy } from './stats'

/** Prag ispod kojega se tema smatra "slabom" (postotak točnosti). */
export const WEAK_TOPIC_THRESHOLD = 70

/**
 * Vrati teme koje korisnik slabo poznaje, najslabija prva.
 * @param {Record<string, {correct: number, total: number}>} topicStats
 * @param {{limit?: number, minAttempts?: number, threshold?: number}} [options]
 * @returns {{topic: string, correct: number, total: number, accuracy: number}[]}
 */
export function weakTopics(topicStats, { limit = 5, minAttempts = 2, threshold = WEAK_TOPIC_THRESHOLD } = {}) {
  return rankTopicsByAccuracy(topicStats, { minAttempts })
    .filter(t => t.accuracy < threshold)
    .slice(0, limit)
}

/**
 * Odaberi pitanja iz poola nad slabim temama; ako nema dovoljno, popuni
 * ostatak nasumičnim pitanjima iz cijelog poola (bez ponavljanja id-eva).
 * @param {Array<{id: string, topic?: string}>} pool
 * @param {{topic: string}[]} weak - izlaz weakTopics()
 * @param {number} count
 * @param {() => number} [rng] - injektiran radi determinizma u testovima
 * @returns {Array<object>}
 */
export function pickAdaptiveQuestions(pool, weak, count, rng = Math.random) {
  const items = Array.isArray(pool) ? pool : []
  const weakCodes = new Set((weak || []).map(w => w.topic))
  const used = new Set()
  const shuffle = list => [...list].sort(() => rng() - 0.5)

  const fromWeak = shuffle(items.filter(q => weakCodes.has(q.topic)))
  const picked = []
  for (const q of fromWeak) {
    if (picked.length >= count) break
    if (used.has(q.id)) continue
    used.add(q.id)
    picked.push(q)
  }
  if (picked.length < count) {
    const rest = shuffle(items.filter(q => !used.has(q.id)))
    for (const q of rest) {
      if (picked.length >= count) break
      used.add(q.id)
      picked.push(q)
    }
  }
  return picked
}
