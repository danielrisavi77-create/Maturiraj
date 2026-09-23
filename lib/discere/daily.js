// lib/discere/daily.js
// Dnevni izazov — determinističan seed po (UTC) danu, port algoritma iz
// components/engleski-simulator/screens/DailyChallengeScreen.js (pseudoRandom,
// tip-po-tip odabir) i components/simulator/mat/screens/today.tsx (dnevni seed).
//
// Pool pitanja se ne dohvaća ovdje — daily.js radi nad već učitanim popisom
// (npr. sažetak iz summary.json), isti obrazac kao createExamsLoader.

/** Deterministički pseudo-slučajni broj u [0,1) za par (n, seed). */
export function pseudoRandom(n, seed) {
  const x = Math.sin(seed + n) * 10000
  return x - Math.floor(x)
}

/** UTC dan kao cijeli broj — stabilan seed neovisan o vremenskoj zoni. */
export function dailySeed(now = Date.now()) {
  return Math.floor(now / 86400000)
}

/** Ključ sintetičke sesije dnevnog izazova za dani seed. */
export function dailyExamKey(seed) {
  return `daily_${seed}`
}

/** Je li dnevni izazov za dani seed već odrađen (po povijesti napretka). */
export function isDailyDone(history, seed) {
  const key = dailyExamKey(seed)
  return Array.isArray(history) && history.some(h => h && h.examKey === key)
}

/**
 * Deterministički odaberi `count` pitanja iz poola, bez ponavljanja id-eva,
 * raspoređena po opcionalnim ciljevima po tipu (`targets`, npr.
 * `{ mc: 10, matching: 4, fill: 6 }`); ako `targets` nije zadan, uzima se
 * ravnomjerno iz cijelog poola.
 *
 * @param {Array<{id: string, type?: string}>} pool
 * @param {number} seed
 * @param {{count?: number, targets?: Record<string, number>}} [options]
 * @returns {Array<object>}
 */
export function pickDailyQuestions(pool, seed, { count = 10, targets } = {}) {
  const items = Array.isArray(pool) ? pool : []
  if (!items.length) return []

  function shuffle(list, salt = 0) {
    const indexMap = new Map(list.map((q, i) => [q, i]))
    return [...list].sort((a, b) => pseudoRandom(indexMap.get(a) + salt, seed) - pseudoRandom(indexMap.get(b) + salt, seed))
  }

  const usedIds = new Set()
  let picked = []

  if (targets && typeof targets === 'object') {
    for (const [type, n] of Object.entries(targets)) {
      const candidates = items.filter(q => q.type === type && !usedIds.has(q.id))
      const chosen = shuffle(candidates).slice(0, n)
      chosen.forEach(q => usedIds.add(q.id))
      picked.push(...chosen)
    }
  } else {
    const candidates = items.filter(q => !usedIds.has(q.id))
    picked = shuffle(candidates).slice(0, count)
    picked.forEach(q => usedIds.add(q.id))
  }

  return shuffle(picked, 1).map((q, i) => ({ ...q, dailyId: `daily_${seed}_${i}` }))
}
