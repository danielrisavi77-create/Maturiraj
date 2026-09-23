// Snapshot aktivne (nedovršene) ispitne sesije u localStorageu.
//
// Zašto postoji: ekran, odgovori, pozicija i sat u simulatoru žive u običnom
// React stanju, pa refresh ili zatvaranje kartice do sada je brisalo nedovršen
// ispit. Snapshot to mijenja, ali NE vraća korisnika automatski u ispit — Home
// prikazuje karticu „Nastavi ispit” i korisnik odlučuje (nastavi ili odbaci).
//
// PRIVATNOST (ADR-001): u snapshot smiju samo korisnikovi odgovori i indeksi.
// Tekst pitanja, opcije i točni odgovori NIKAD — oni su NCVVO sadržaj i ionako
// se učitavaju iz exams-*.json. sanitizeAnswers je jedina vrata prema zapisu i
// propušta samo primitivne vrijednosti (i plitke mape za 'mat' pitanja).
//
// SAT (simulacija): snapshot nosi 'endsAt' — apsolutni epoch ms roka tekuće
// ispitne cjeline. Pri nastavku se preostalo vrijeme računa kao endsAt − now,
// pa refresh ne može poslužiti kao pauza. Za vježbanje (sa ili bez timera)
// endsAt je null i sat kreće ispočetka; vježbanje nije mjereni ispit.

export const ENG_ACTIVE_SESSION_KEY = 'eng_active_session'
export const ACTIVE_SESSION_VERSION = 1
/** Snapshot stariji od 24 h se ignorira i briše. */
export const ACTIVE_SESSION_TTL_MS = 24 * 60 * 60 * 1000

// Sintetičke sesije (virtualni ispit, filtrirano vježbanje, ponavljanje grešaka)
// nastaju iz nasumično složenog skupa pitanja koji se nakon refresha ne može
// rekonstruirati — za njih se snapshot ne piše, niti smiju obrisati tuđi.
const NON_RESUMABLE_PREFIXES = ['virtual_', 'filter_session_', 'daily_']
const NON_RESUMABLE_KEYS = ['exam_errors_session']

/** Duljina jednog spremljenog tekstualnog odgovora (fb/sa/es) — brana za kvotu. */
const MAX_ANSWER_LEN = 4000
// Odgovor tipa 'mat' je mapa lijevo → slovo ('A', 'B', …). Vrijednosti u toj
// mapi zato smiju biti samo kratke: tako ni slučajno proslijeđen objekt pitanja
// ({ q, sol, opts }) ne može prošvercati tekst pitanja u zapis.
const MAX_MAT_VALUE_LEN = 16

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

// Odgovor na cijelo pitanje: dug tekst (esej, dopunjavanje) se reže, ne odbacuje.
function cleanValue(v) {
  if (typeof v === 'string') return v.slice(0, MAX_ANSWER_LEN)
  if (typeof v === 'number' && Number.isFinite(v)) return v
  if (typeof v === 'boolean') return v
  return undefined
}

// Vrijednost unutar 'mat' mape: predugačak niz nije odgovor nego tuđi sadržaj → otpada.
function cleanMatValue(v) {
  if (typeof v === 'string') return v.length <= MAX_MAT_VALUE_LEN ? v : undefined
  if (typeof v === 'number' && Number.isFinite(v)) return v
  if (typeof v === 'boolean') return v
  return undefined
}

/**
 * Propušta samo korisnikove odgovore: qid → primitiv ili plitka mapa primitiva
 * (odgovori tipa 'mat' su { lijevo: 'A' }). Sve ostalo (funkcije, ugniježđeni
 * objekti, tekst pitanja koji bi netko slučajno proslijedio) otpada.
 *
 * @param {*} answers
 * @returns {Object}
 */
export function sanitizeAnswers(answers) {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) return {}
  const out = {}
  for (const [qid, val] of Object.entries(answers)) {
    if (typeof qid !== 'string') continue
    const prim = cleanValue(val)
    if (prim !== undefined) { out[qid] = prim; continue }
    if (val && typeof val === 'object' && !Array.isArray(val)) {
      const sub = {}
      for (const [k, v] of Object.entries(val)) {
        const p = cleanMatValue(v)
        if (p !== undefined) sub[k] = p
      }
      if (Object.keys(sub).length) out[qid] = sub
    }
  }
  return out
}

/**
 * Složi zapis snapshota. Čista funkcija — 'now' se injektira radi testova.
 *
 * @param {{examKey: string, examMode: boolean, timedMode?: boolean, answers?: Object,
 *          cur?: number, blockIdx?: number, startedAt?: number, endsAt?: number|null, now?: number}} args
 * @returns {Object}
 */
export function buildSnapshot({ examKey, examMode, timedMode, answers, cur, blockIdx, startedAt, endsAt, now = Date.now() }) {
  return {
    v: ACTIVE_SESSION_VERSION,
    examKey,
    mode: examMode ? 'simulacija' : 'vjezbanje',
    timedMode: !!timedMode,
    answers: sanitizeAnswers(answers),
    cur: Number.isFinite(cur) ? cur : 0,
    blockIdx: Number.isFinite(blockIdx) ? blockIdx : 0,
    startedAt: Number.isFinite(startedAt) ? startedAt : now,
    // Rok ima smisla samo za simulaciju; vježbanje nema apsolutni rok.
    endsAt: examMode && Number.isFinite(endsAt) ? endsAt : null,
    savedAt: now,
    ttl: ACTIVE_SESSION_TTL_MS,
  }
}

/** Obriši snapshot (kvota/privatni mod ne smiju srušiti simulator). */
export function clearActiveSession() {
  try { localStorage.removeItem(ENG_ACTIVE_SESSION_KEY) } catch {}
}

/**
 * Zapiši snapshot. Sintetičke sesije se tiho preskaču — tako dnevni izazov,
 * filtrirano vježbanje i ponavljanje grešaka ne mogu prepisati tuđi snapshot.
 *
 * @param {Object} snap - izlaz buildSnapshot()
 * @returns {boolean} je li zapisano
 */
export function writeActiveSession(snap) {
  if (!snap || !isResumableExamKey(snap.examKey)) return false
  try {
    localStorage.setItem(ENG_ACTIVE_SESSION_KEY, JSON.stringify(snap))
    return true
  } catch (err) {
    console.warn('Spremanje aktivne sesije nije uspjelo:', err)
    return false
  }
}

/**
 * Pročitaj snapshot. Nevaljan, tuđe verzije ili istekao (TTL) → briše se i
 * vraća null, pa pozivatelj nikad ne dobije zapis kojem ne smije vjerovati.
 *
 * @param {number} [now]
 * @returns {Object|null}
 */
export function readActiveSession(now = Date.now()) {
  let raw = null
  try { raw = localStorage.getItem(ENG_ACTIVE_SESSION_KEY) } catch { return null }
  if (!raw) return null
  let s = null
  try { s = JSON.parse(raw) } catch { clearActiveSession(); return null }
  const valid = s && typeof s === 'object'
    && s.v === ACTIVE_SESSION_VERSION
    && isResumableExamKey(s.examKey)
    && (s.mode === 'simulacija' || s.mode === 'vjezbanje')
    && Number.isFinite(s.savedAt)
  if (!valid) { clearActiveSession(); return null }
  const ttl = Number.isFinite(s.ttl) ? s.ttl : ACTIVE_SESSION_TTL_MS
  if (now - s.savedAt > ttl) { clearActiveSession(); return null }
  return {
    v: s.v,
    examKey: s.examKey,
    mode: s.mode,
    timedMode: !!s.timedMode,
    answers: sanitizeAnswers(s.answers),
    cur: Number.isFinite(s.cur) ? s.cur : 0,
    blockIdx: Number.isFinite(s.blockIdx) ? s.blockIdx : 0,
    startedAt: Number.isFinite(s.startedAt) ? s.startedAt : s.savedAt,
    endsAt: s.mode === 'simulacija' && Number.isFinite(s.endsAt) ? s.endsAt : null,
    savedAt: s.savedAt,
    ttl,
  }
}

/**
 * Koliko je pitanja odgovoreno (prazan string, null i prazna 'mat' mapa ne broje).
 * @param {Object} answers
 * @returns {number}
 */
export function answeredCount(answers) {
  return Object.values(answers || {}).filter(a => {
    if (a === undefined || a === null || a === '') return false
    if (typeof a === 'object') return Object.values(a).some(v => v !== undefined && v !== null && v !== '')
    return true
  }).length
}

/**
 * Preostalo vrijeme simulacije u sekundama; null kad snapshot nema rok.
 * Nikad negativno — 0 znači „vrijeme je isteklo”.
 *
 * @param {Object|null} snap
 * @param {number} [now]
 * @returns {number|null}
 */
export function remainingSeconds(snap, now = Date.now()) {
  if (!snap || !Number.isFinite(snap.endsAt)) return null
  return Math.max(0, Math.round((snap.endsAt - now) / 1000))
}

/**
 * mm:ss za prikaz na kartici (sat se piše i preko 60 min, npr. '92:07').
 * @param {number} s
 * @returns {string}
 */
export function formatRemaining(s) {
  const t = Math.max(0, Math.floor(s || 0))
  return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0')
}
