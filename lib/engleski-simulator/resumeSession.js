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
// SAT: snapshot nosi 'endsAt' — apsolutni epoch ms roka tekuće ispitne cjeline
// (simulacija) odnosno cijelog mjerenog vježbanja („Vježbanje ⏱”). Pri nastavku
// se preostalo vrijeme računa kao endsAt − now, pa refresh ne može poslužiti kao
// pauza ni u jednom mjerenom modu. Samo nemjereno vježbanje nema rok (endsAt
// null) — ondje sat i ne postoji.
//
// POMICANJE SISTEMSKOG SATA: 'endsAt' je apsolutno vrijeme, pa bi pomak sata
// unatrag vratio proizvoljno mnogo vremena. Zato potrošač (ExamPlayScreen)
// preostalo vrijeme kapa na puno propisano trajanje cjeline — više od toga
// nijedan legitiman nastavak ne može imati.

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
// Odgovor tipa 'mat' je mapa lijevo → odabrana desna opcija, a ta je opcija
// CIJELI tekst ('D — Daniel', 'A — To teach their children responsibility.') jer
// se upravo s njim uspoređuje ocjenjivanje (scoring.js, chk → p.r.trim()).
// Ograničenje duljine je zato samo brana za kvotu: najdulja stvarna opcija u
// bankama ima 73 znaka. Predugačka vrijednost se ODBACUJE, nikad ne reže —
// odrezan tekst više ne bi bio jednak točnom odgovoru pa bi sparivanje tiho palo
// na netočno.
const MAX_MAT_VALUE_LEN = 200
// Privatnost (ADR-001) ne čuva duljina nego oblik: ključevi 'mat' mape su tekstovi
// lijevih stavki, a nikad imena polja pitanja. Mapa koja nosi ijedno takvo polje
// nije korisnikov odgovor nego slučajno proslijeđen objekt pitanja → cijela otpada.
const QUESTION_FIELDS = ['q', 'sol', 'exp', 'opts', 'items', 'rights', 'pairs', 'section', 'topic', 'type']

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

// Vrijednost unutar 'mat' mape: niz dulji od svake stvarne opcije nije odgovor → otpada.
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
      const keys = Object.keys(val)
      if (keys.some(k => QUESTION_FIELDS.includes(k))) continue
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
    // Rok ima smisla u svakom mjerenom modu (simulacija i „Vježbanje ⏱”);
    // nemjereno vježbanje nema sat pa ni rok. Bez roka u timed vježbanju bio bi
    // refresh najjeftiniji način da se sat vrati na puno vrijeme.
    endsAt: (examMode || timedMode) && Number.isFinite(endsAt) ? endsAt : null,
    savedAt: now,
    ttl: ACTIVE_SESSION_TTL_MS,
  }
}

/** Obriši snapshot (kvota/privatni mod ne smiju srušiti simulator). */
export function clearActiveSession() {
  try { localStorage.removeItem(ENG_ACTIVE_SESSION_KEY) } catch {}
}

/**
 * Obriši snapshot SAMO ako pripada danom ispitu. Brisanje je time zaštićeno isto
 * kao i pisanje (writeActiveSession): sintetičke sesije (dnevni izazov,
 * virtualni ispit, greške, filtrirano vježbanje) imaju svoj ključ i ne mogu
 * obrisati zapis nedovršene simulacije. Isto štiti i drugu karticu preglednika —
 * predaja u jednom tabu ne briše nedovršen ispit drugog.
 *
 * @param {*} examKey - ključ ispita koji je upravo završen/napušten
 * @returns {boolean} je li zapis obrisan
 */
export function clearActiveSessionFor(examKey) {
  if (!isResumableExamKey(examKey)) return false
  let raw = null
  try { raw = localStorage.getItem(ENG_ACTIVE_SESSION_KEY) } catch { return false }
  if (!raw) return false
  let s = null
  try { s = JSON.parse(raw) } catch { clearActiveSession(); return true }
  // Neupotrebljiv zapis (nema ključ) nema vlasnika — čisti se kao smeće.
  if (s && typeof s === 'object' && typeof s.examKey === 'string' && s.examKey !== examKey) return false
  clearActiveSession()
  return true
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
    endsAt: (s.mode === 'simulacija' || !!s.timedMode) && Number.isFinite(s.endsAt) ? s.endsAt : null,
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
