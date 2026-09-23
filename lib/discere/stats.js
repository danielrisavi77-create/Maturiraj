// lib/discere/stats.js
// Agregacija statistike po temama — port logike iz
// components/simulator/mat/screens/stats.tsx (topicStats iz history[].topic_breakdown)
// i lib/discere/progress.js (sim_progress redak nosi topic_breakdown), uz
// oznake tema iz summary.json/taxonomy.json (lib/discere/taxonomy.js).
//
// Ulaz su generički redovi s poljem topic_breakdown — isti oblik dolazi i iz
// klijentske povijesti (userData.history) i iz sim_progress redaka koje vraća
// poslužitelj, pa jedna funkcija pokriva oba izvora.
//
// OBLIK ZAPISA: canonical scorer (lib/discere/scoring.js, buildResult) gradi
// topicBreakdown[topic] = { earned, possible } u BODOVIMA, a lib/discere/progress.js
// to doslovno upisuje u sim_progress.topic_breakdown — to je mjerodavan oblik.
// Stari engleski simulator koristi { correct, total } (broj pitanja), pa se taj
// oblik čita kao zamjena kad canonical polja nema; bez toga bi agregacija nad
// stvarnim sim_progress redcima tiho davala same nule.

/** Osvojeni bodovi iz jednog topic_breakdown zapisa (canonical `earned`, legacy `correct`). */
function readEarned(data) {
  if (!data || typeof data !== 'object') return 0
  const earned = Number(data.earned)
  if (Number.isFinite(earned)) return earned
  return Number(data.correct) || 0
}

/** Mogući bodovi iz jednog topic_breakdown zapisa (canonical `possible`, legacy `total`). */
function readPossible(data) {
  if (!data || typeof data !== 'object') return 0
  const possible = Number(data.possible)
  if (Number.isFinite(possible)) return possible
  return Number(data.total) || 0
}

/**
 * Agregiraj bodove po temi iz niza redaka koji nose `topic_breakdown`
 * (canonical `{ [topic]: { earned, possible } }`; legacy `{ correct, total }`).
 * @param {Array<{topic_breakdown?: Record<string, {earned?: number, possible?: number, correct?: number, total?: number}>}>} rows
 * @returns {Record<string, {earned: number, possible: number}>}
 */
export function aggregateTopicStats(rows) {
  const out = {}
  for (const row of rows || []) {
    const breakdown = row && row.topic_breakdown
    if (!breakdown || typeof breakdown !== 'object') continue
    for (const [topic, data] of Object.entries(breakdown)) {
      if (!out[topic]) out[topic] = { earned: 0, possible: 0 }
      out[topic].earned += readEarned(data)
      out[topic].possible += readPossible(data)
    }
  }
  return out
}

/**
 * Postotak uspješnosti jedne teme (0 kad nema mogućih bodova).
 * @param {{earned: number, possible: number}} stat
 */
export function topicAccuracy(stat) {
  if (!stat || !stat.possible) return 0
  return Math.round((stat.earned / stat.possible) * 100)
}

/**
 * Poredaj teme po uspješnosti (rastuće — najslabije prve), s opcionalnim
 * minimalnim brojem mogućih bodova da tema uđe u poredak.
 * @param {Record<string, {earned: number, possible: number}>} topicStats
 * @param {{minPossible?: number}} [options]
 * @returns {{topic: string, earned: number, possible: number, accuracy: number}[]}
 */
export function rankTopicsByAccuracy(topicStats, { minPossible = 1 } = {}) {
  return Object.entries(topicStats || {})
    .filter(([, stat]) => (stat?.possible || 0) >= minPossible)
    .map(([topic, stat]) => ({ topic, earned: stat.earned, possible: stat.possible, accuracy: topicAccuracy(stat) }))
    .sort((a, b) => a.accuracy - b.accuracy || b.possible - a.possible)
}

/**
 * Ukupna uspješnost preko svih tema (za prsten spremnosti na Homeu).
 * @param {Record<string, {earned: number, possible: number}>} topicStats
 * @returns {number}
 */
export function overallAccuracy(topicStats) {
  let earned = 0
  let possible = 0
  for (const stat of Object.values(topicStats || {})) {
    earned += Number(stat?.earned) || 0
    possible += Number(stat?.possible) || 0
  }
  return possible ? Math.round((earned / possible) * 100) : 0
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
