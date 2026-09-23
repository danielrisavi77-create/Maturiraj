// lib/discere/session-store.js
// Snapshot aktivne (nedovršene) ispitne sesije u localStorageu — port
// lib/engleski-simulator/resumeSession.js, parametriziran predmetom.
//
// Ključ je `disc_<subjectId>_active_session`: sintetički ključevi ispita
// (virtualni ispit, dnevni izazov, ponavljanje grešaka) nikad ne pišu ni ne
// brišu snapshot pravog nastavka — writeActiveSession/clearActiveSessionFor
// su jedina vrata i oba provjeravaju isResumableExamKey.
//
// PRIVATNOST (ADR-001): u snapshot smiju samo korisnikovi odgovori i indeksi,
// nikad tekst pitanja/opcija/ključ — sanitizeAnswers je jedina vrata prema
// zapisu. Canonical odgovori dolaze u tri oblika (exam-schema.js):
//   - tekst (short, essay)
//   - mapa primitiva (fill.accepted po gap.id, matching.pairs po left.id,
//     true_false.values po statement.id)
//   - niz primitiva (multi — odabrane opcije, ordering — poredani id-evi)

export const ACTIVE_SESSION_VERSION = 1
/** Snapshot stariji od 24 h se ignorira i briše. */
export const ACTIVE_SESSION_TTL_MS = 24 * 60 * 60 * 1000

// Sintetičke sesije nastaju iz nasumično složenog skupa pitanja koji se nakon
// refresha ne može rekonstruirati — za njih se snapshot ne piše, niti smiju
// obrisati tuđi zapis.
const NON_RESUMABLE_PREFIXES = ['virtual_', 'filter_session_', 'daily_', 'adaptive_']
const NON_RESUMABLE_KEYS = ['exam_errors_session']

/** Duljina jednog spremljenog tekstualnog odgovora (short/essay) — brana za kvotu. */
const MAX_TEXT_LEN = 4000
/** Duljina jedne vrijednosti unutar mape/niza (fill/matching/true_false/multi/ordering). */
const MAX_ITEM_LEN = 300
/** Gornja granica broja stavki unutar jedne mape/niza odgovora. */
const MAX_ITEMS = 100

// Polja iz canonical question objekta (exam-schema.js) — mapa koja nosi
// IJEDNO od njih nije korisnikov odgovor nego slučajno proslijeđen objekt
// pitanja i cijela otpada, čak i ako bi neka od njezinih vrijednosti prošla
// kao primitiv.
const QUESTION_FIELDS = ['q', 'prompt', 'type', 'options', 'answer', 'gaps', 'left', 'right', 'items', 'statements', 'children', 'stimulus', 'assets', 'sourceRef', 'topic']

export function storageKey(subjectId) {
  return `disc_${subjectId}_active_session`
}

/**
 * Smije li se za ovaj ključ ispita spremati snapshot sesije.
 * @param {*} key
 * @returns {boolean}
 */
export function isResumableExamKey(key) {
  if (typeof key !== 'string' || !key) return false
  if (NON_RESUMABLE_KEYS.includes(key)) return false
  return !NON_RESUMABLE_PREFIXES.some(p => key.startsWith(p))
}

function cleanText(v) {
  if (typeof v === 'string') return v.slice(0, MAX_TEXT_LEN)
  if (typeof v === 'number' && Number.isFinite(v)) return v
  if (typeof v === 'boolean') return v
  return undefined
}

function cleanItem(v) {
  if (typeof v === 'string') return v.length <= MAX_ITEM_LEN ? v : undefined
  if (typeof v === 'boolean') return v
  if (typeof v === 'number' && Number.isFinite(v)) return v
  return undefined
}

function cleanArrayAnswer(arr) {
  const out = []
  for (const item of arr.slice(0, MAX_ITEMS)) {
    const v = cleanItem(item)
    if (v !== undefined) out.push(v)
  }
  return out
}

function cleanMapAnswer(obj) {
  if (Object.keys(obj).some(k => QUESTION_FIELDS.includes(k))) return {}
  const out = {}
  const entries = Object.entries(obj).slice(0, MAX_ITEMS)
  for (const [k, v] of entries) {
    if (typeof k !== 'string' || k.length > MAX_ITEM_LEN) continue
    const clean = cleanItem(v)
    if (clean !== undefined) out[k] = clean
  }
  return out
}

/**
 * Propušta samo korisnikove odgovore: qid → primitiv (short/essay/mc), niz
 * primitiva (multi/ordering) ili mapa primitiva (fill/matching/true_false).
 * Sve ostalo (funkcije, ugniježđeni objekti, slučajno proslijeđen objekt
 * pitanja) otpada.
 * @param {*} answers
 * @returns {Object}
 */
export function sanitizeAnswers(answers) {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) return {}
  const out = {}
  for (const [qid, val] of Object.entries(answers)) {
    if (typeof qid !== 'string') continue
    const scalar = cleanText(val)
    if (scalar !== undefined) { out[qid] = scalar; continue }
    if (Array.isArray(val)) {
      const arr = cleanArrayAnswer(val)
      if (arr.length) out[qid] = arr
      continue
    }
    if (val && typeof val === 'object') {
      const map = cleanMapAnswer(val)
      if (Object.keys(map).length) out[qid] = map
    }
  }
  return out
}

/**
 * Složi zapis snapshota. Čista funkcija — 'now' se injektira radi testova.
 *
 * @param {{subject: string, examKey: string, mode: string, answers?: Object,
 *          index?: number, flagged?: string[], notebooks?: Object,
 *          playback?: Object, startedAt?: number, endsAt?: number|null, now?: number}} args
 * @returns {Object}
 */
export function buildSnapshot({ subject, examKey, mode, answers, index, flagged, notebooks, playback, startedAt, endsAt, now = Date.now() }) {
  return {
    v: ACTIVE_SESSION_VERSION,
    subject,
    examKey,
    mode,
    answers: sanitizeAnswers(answers),
    index: Number.isFinite(index) ? index : 0,
    flagged: Array.isArray(flagged) ? flagged.filter(id => typeof id === 'string').slice(0, MAX_ITEMS) : [],
    notebooks: notebooks && typeof notebooks === 'object' ? notebooks : {},
    playback: playback && typeof playback === 'object' ? playback : {},
    startedAt: Number.isFinite(startedAt) ? startedAt : now,
    // Apsolutni epoch ms roka — refresh ne smije vratiti puno vrijeme.
    endsAt: Number.isFinite(endsAt) ? endsAt : null,
    savedAt: now,
    ttl: ACTIVE_SESSION_TTL_MS,
  }
}

/** Obriši snapshot (kvota/privatni mod ne smiju srušiti simulator). */
export function clearActiveSession(subjectId) {
  try { localStorage.removeItem(storageKey(subjectId)) } catch {}
}

/**
 * Obriši snapshot SAMO ako pripada danom ispitu — brisanje je zaštićeno isto
 * kao i pisanje: sintetičke sesije imaju svoj ključ i ne mogu obrisati tuđi
 * zapis nedovršenog ispita.
 * @returns {boolean} je li zapis obrisan
 */
export function clearActiveSessionFor(subjectId, examKey) {
  if (!isResumableExamKey(examKey)) return false
  let raw = null
  try { raw = localStorage.getItem(storageKey(subjectId)) } catch { return false }
  if (!raw) return false
  let s = null
  try { s = JSON.parse(raw) } catch { clearActiveSession(subjectId); return true }
  if (s && typeof s === 'object' && typeof s.examKey === 'string' && s.examKey !== examKey) return false
  clearActiveSession(subjectId)
  return true
}

/**
 * Zapiši snapshot. Sintetičke sesije se tiho preskaču — tako dnevni izazov,
 * filtrirano vježbanje i ponavljanje grešaka ne mogu prepisati tuđi snapshot.
 * @param {string} subjectId
 * @param {Object} snap - izlaz buildSnapshot()
 * @returns {boolean} je li zapisano
 */
export function writeActiveSession(subjectId, snap) {
  if (!snap || !isResumableExamKey(snap.examKey)) return false
  try {
    localStorage.setItem(storageKey(subjectId), JSON.stringify(snap))
    return true
  } catch (err) {
    console.warn('Spremanje aktivne sesije nije uspjelo:', err)
    return false
  }
}

/**
 * Pročitaj snapshot. Nevaljan, tuđe verzije ili istekao (TTL) → briše se i
 * vraća null, pa pozivatelj nikad ne dobije zapis kojem ne smije vjerovati.
 * @param {string} subjectId
 * @param {number} [now]
 * @returns {Object|null}
 */
export function readActiveSession(subjectId, now = Date.now()) {
  let raw = null
  try { raw = localStorage.getItem(storageKey(subjectId)) } catch { return null }
  if (!raw) return null
  let s = null
  try { s = JSON.parse(raw) } catch { clearActiveSession(subjectId); return null }
  const valid = s && typeof s === 'object'
    && s.v === ACTIVE_SESSION_VERSION
    && isResumableExamKey(s.examKey)
    && typeof s.mode === 'string' && s.mode
    && Number.isFinite(s.savedAt)
  if (!valid) { clearActiveSession(subjectId); return null }
  const ttl = Number.isFinite(s.ttl) ? s.ttl : ACTIVE_SESSION_TTL_MS
  if (now - s.savedAt > ttl) { clearActiveSession(subjectId); return null }
  return {
    v: s.v,
    subject: s.subject,
    examKey: s.examKey,
    mode: s.mode,
    answers: sanitizeAnswers(s.answers),
    index: Number.isFinite(s.index) ? s.index : 0,
    flagged: Array.isArray(s.flagged) ? s.flagged : [],
    notebooks: s.notebooks && typeof s.notebooks === 'object' ? s.notebooks : {},
    playback: s.playback && typeof s.playback === 'object' ? s.playback : {},
    startedAt: Number.isFinite(s.startedAt) ? s.startedAt : s.savedAt,
    endsAt: Number.isFinite(s.endsAt) ? s.endsAt : null,
    savedAt: s.savedAt,
    ttl,
  }
}

/**
 * Koliko je pitanja odgovoreno (prazan string, null i prazna mapa/niz ne broje).
 * @param {Object} answers
 * @returns {number}
 */
export function answeredCount(answers) {
  return Object.values(answers || {}).filter(a => {
    if (a === undefined || a === null || a === '') return false
    if (Array.isArray(a)) return a.length > 0
    if (typeof a === 'object') return Object.values(a).some(v => v !== undefined && v !== null && v !== '')
    return true
  }).length
}

/**
 * Preostalo vrijeme u sekundama; null kad snapshot nema rok. Nikad
 * negativno — 0 znači "vrijeme je isteklo".
 * @param {Object|null} snap
 * @param {number} [now]
 * @returns {number|null}
 */
export function remainingSeconds(snap, now = Date.now()) {
  if (!snap || !Number.isFinite(snap.endsAt)) return null
  return Math.max(0, Math.round((snap.endsAt - now) / 1000))
}

/**
 * mm:ss za prikaz na kartici (sat se piše i preko 60 min).
 * @param {number} s
 * @returns {string}
 */
export function formatRemaining(s) {
  const t = Math.max(0, Math.floor(s || 0))
  return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0')
}
