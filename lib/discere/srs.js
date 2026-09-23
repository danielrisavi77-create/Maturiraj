// lib/discere/srs.js
// Ponavljanje s razmakom (SM-2) nad errorTrackerom — port SM-2 algoritma iz
// components/simulator/mat/screens/srs.tsx, primijenjen na canonical
// errorTracker (lib/discere/cloud-sync.js validateUserData): pitanja koja je
// korisnik jednom promašio, ne cijelu banku (mat radi nad cijelom bankom jer
// nema poslužiteljski errorTracker; canonical ga ima iz sim_progress/lokalno).
//
// Kartica je identificirana istim ključem kao errorTracker unos:
// `${examKey}_${qid}`.

export function storageKey(subjectId) {
  return `disc_${subjectId}_srs`
}

/** Koliko novih kartica (pitanja koja se prvi put uvode u SRS) po danu. */
export const SRS_NEW_PER_DAY = 15

/** Cjelobrojni "dan" — stabilan za usporedbu rokova, neovisan o satu. */
export function dayOrdinal(now = Date.now()) {
  return Math.floor(now / 86400000)
}

/**
 * SM-2 update jedne kartice.
 * @param {{ef?: number, interval?: number, reps?: number}} card
 * @param {0|1|2} quality - 0 nisam znao, 1 djelomično, 2 znao sam
 * @param {number} [now]
 * @returns {{ef: number, interval: number, due: number, reps: number, intro?: number}}
 */
export function sm2Update(card, quality, now = Date.now()) {
  const prev = card || {}
  const ef = Math.max(1.3, (prev.ef || 2.5) + 0.1 - (2 - quality) * (0.08 + (2 - quality) * 0.02))
  let interval
  if (quality === 0) interval = 1
  else if (!prev.interval || prev.interval < 1) interval = 1
  else if (prev.interval === 1) interval = 6
  else interval = Math.round(prev.interval * ef)
  const updated = { ef, interval, due: dayOrdinal(now) + interval, reps: (prev.reps || 0) + 1 }
  if (!prev.interval && !prev.reps) updated.intro = dayOrdinal(now)
  return updated
}

/**
 * Sastavi red pitanja za sesiju: sva dospjela ponavljanja + ograničen broj
 * novih kartica po danu (errorTracker unosi bez zapisa u srsData).
 *
 * @param {Record<string, {q?: string, topic?: string, examKey: string, qid: string, count: number}>} errorTracker
 * @param {Record<string, object>} srsData - key → SM-2 kartica (isti key kao errorTracker)
 * @param {{newPerDay?: number, now?: number}} [options]
 * @returns {{key: string, entry: object, card: object|null, isNew: boolean}[]}
 */
export function buildSrsQueue(errorTracker, srsData, { newPerDay = SRS_NEW_PER_DAY, now = Date.now() } = {}) {
  const tod = dayOrdinal(now)
  const data = srsData || {}
  const introToday = Object.values(data).filter(c => c && c.intro === tod).length
  const newAllowed = Math.max(0, newPerDay - introToday)

  const reviews = []
  const news = []
  for (const [key, entry] of Object.entries(errorTracker || {})) {
    if (!entry || typeof entry !== 'object') continue
    const card = data[key]
    if (card) {
      if (card.due <= tod) reviews.push({ key, entry, card, isNew: false })
    } else {
      news.push({ key, entry, card: null, isNew: true })
    }
  }
  reviews.sort((a, b) => (a.card.due || 0) - (b.card.due || 0))
  const newPick = news.slice(0, newAllowed)
  return [...reviews, ...newPick]
}

/**
 * Primijeni ocjenu na jednu karticu i vrati novi srsData objekt (imutabilno).
 * @param {Record<string, object>} srsData
 * @param {string} key
 * @param {0|1|2} quality
 * @param {number} [now]
 * @returns {Record<string, object>}
 */
export function recordReview(srsData, key, quality, now = Date.now()) {
  const data = srsData || {}
  const updated = sm2Update(data[key] || null, quality, now)
  return { ...data, [key]: updated }
}

/**
 * Koliko je kartica dospjelo sutra / u tjednu — za motivacijski prikaz.
 * @param {Record<string, object>} srsData
 * @param {number} [now]
 */
export function upcomingCounts(srsData, now = Date.now()) {
  const tod = dayOrdinal(now)
  const values = Object.values(srsData || {})
  return {
    dueTomorrow: values.filter(c => c && c.due === tod + 1).length,
    dueWeek: values.filter(c => c && c.due > tod && c.due <= tod + 7).length,
    introToday: values.filter(c => c && c.intro === tod).length,
  }
}

/** localStorage čitanje/pisanje (kvota/privatni mod ne smiju srušiti simulator). */
export function loadSrsData(subjectId) {
  try {
    const raw = localStorage.getItem(storageKey(subjectId))
    const parsed = raw ? JSON.parse(raw) : {}
    return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : {}
  } catch {
    return {}
  }
}

export function saveSrsData(subjectId, data) {
  try {
    localStorage.setItem(storageKey(subjectId), JSON.stringify(data || {}))
    return true
  } catch {
    return false
  }
}
