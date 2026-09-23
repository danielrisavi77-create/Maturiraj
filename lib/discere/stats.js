// lib/discere/stats.js
// Agregacija statistike po temama — port logike iz
// components/simulator/mat/screens/stats.tsx (topicStats iz history[].topic_breakdown)
// i lib/discere/progress.js (sim_progress redak nosi topic_breakdown), uz
// oznake tema iz summary.json/taxonomy.json (lib/discere/taxonomy.js).
//
// Ulaz su generički redovi s poljem topic_breakdown — isti oblik dolazi i iz
// klijentske povijesti (userData.history) i iz sim_progress redaka koje vraća
// poslužitelj, pa jedna funkcija pokriva oba izvora.

/**
 * Agregiraj bodove po temi iz niza redaka koji nose `topic_breakdown`
 * (`{ [topic]: { correct, total } }`).
 * @param {Array<{topic_breakdown?: Record<string, {correct?: number, total?: number}>}>} rows
 * @returns {Record<string, {correct: number, total: number}>}
 */
export function aggregateTopicStats(rows) {
  const out = {}
  for (const row of rows || []) {
    const breakdown = row && row.topic_breakdown
    if (!breakdown || typeof breakdown !== 'object') continue
    for (const [topic, data] of Object.entries(breakdown)) {
      if (!out[topic]) out[topic] = { correct: 0, total: 0 }
      out[topic].correct += Number(data?.correct) || 0
      out[topic].total += Number(data?.total) || 0
    }
  }
  return out
}

/**
 * Postotak točnosti jedne teme (0 kad nema pokušaja).
 * @param {{correct: number, total: number}} stat
 */
export function topicAccuracy(stat) {
  if (!stat || !stat.total) return 0
  return Math.round((stat.correct / stat.total) * 100)
}

/**
 * Poredaj teme po točnosti (rastuće — najslabije prve), s opcionalnim
 * minimalnim brojem pokušaja da tema uđe u poredak.
 * @param {Record<string, {correct: number, total: number}>} topicStats
 * @param {{minAttempts?: number}} [options]
 * @returns {{topic: string, correct: number, total: number, accuracy: number}[]}
 */
export function rankTopicsByAccuracy(topicStats, { minAttempts = 1 } = {}) {
  return Object.entries(topicStats || {})
    .filter(([, stat]) => (stat?.total || 0) >= minAttempts)
    .map(([topic, stat]) => ({ topic, correct: stat.correct, total: stat.total, accuracy: topicAccuracy(stat) }))
    .sort((a, b) => a.accuracy - b.accuracy || b.total - a.total)
}

/**
 * Ukupna točnost preko svih tema (za prsten spremnosti na Homeu).
 * @param {Record<string, {correct: number, total: number}>} topicStats
 * @returns {number}
 */
export function overallAccuracy(topicStats) {
  let correct = 0
  let total = 0
  for (const stat of Object.values(topicStats || {})) {
    correct += Number(stat?.correct) || 0
    total += Number(stat?.total) || 0
  }
  return total ? Math.round((correct / total) * 100) : 0
}

/**
 * Broj riješenih ispita i prosječni postotak iz povijesti (userData.history
 * ili sim_progress redaka, oba nose `pct`).
 * @param {Array<{pct?: number}>} rows
 */
export function summarizeAttempts(rows) {
  const list = Array.isArray(rows) ? rows : []
  const pctList = list.map(r => Number(r?.pct)).filter(Number.isFinite)
  const avgPct = pctList.length ? Math.round(pctList.reduce((s, p) => s + p, 0) / pctList.length) : 0
  return { count: list.length, avgPct }
}
