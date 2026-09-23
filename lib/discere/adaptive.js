// lib/discere/adaptive.js
// Adaptivno vježbanje — pronađi slabe teme iz stats.js i sastavi skup pitanja
// nad njima. Port ideje iz components/simulator/mat/screens/practice.tsx
// (odabir po temi), bez React ovisnosti.

import { rankTopicsByAccuracy } from './stats'

/** Prag ispod kojega se tema smatra "slabom" (postotak točnosti). */
export const WEAK_TOPIC_THRESHOLD = 70

/**
 * Vrati teme koje korisnik slabo poznaje, najslabija prva.
 * @param {Record<string, {earned: number, possible: number}>} topicStats
 * @param {{limit?: number, minPossible?: number, threshold?: number}} [options]
 * @returns {{topic: string, earned: number, possible: number, accuracy: number}[]}
 */
export function weakTopics(topicStats, { limit = 5, minPossible = 2, threshold = WEAK_TOPIC_THRESHOLD } = {}) {
  return rankTopicsByAccuracy(topicStats, { minPossible })
    .filter(t => t.accuracy < threshold)
    .slice(0, limit)
}

/**
 * Fisher-Yates s injektiranim rng-om. NE koristiti `sort(() => rng() - 0.5)`:
 * takav komparator je nekonzistentan (za isti par vraća različit rezultat), pa
 * ishod ovisi o implementaciji sorta i na kratkim nizovima ostavlja poredak
 * gotovo netaknutim — "nasumični" odabir bi sustavno vraćao početak poola.
 * @template T
 * @param {T[]} list
 * @param {() => number} rng
 * @returns {T[]} nova, promiješana kopija
 */
function shuffle(list, rng) {
  const out = [...list]
  for (let i = out.length - 1; i > 0; i--) {
    const raw = Math.floor(Number(rng()) * (i + 1))
    const j = Number.isFinite(raw) ? Math.min(i, Math.max(0, raw)) : 0
    const tmp = out[i]
    out[i] = out[j]
    out[j] = tmp
  }
  return out
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

  const fromWeak = shuffle(items.filter(q => weakCodes.has(q.topic)), rng)
  const picked = []
  for (const q of fromWeak) {
    if (picked.length >= count) break
    if (used.has(q.id)) continue
    used.add(q.id)
    picked.push(q)
  }
  if (picked.length < count) {
    const rest = shuffle(items.filter(q => !used.has(q.id)), rng)
    for (const q of rest) {
      if (picked.length >= count) break
      used.add(q.id)
      picked.push(q)
    }
  }
  return picked
}
