// lib/engleski-simulator/cloudSync.js
// Cross-device perzistencija napretka engleskog simulatora.
//
// Dva sloja:
//  1) ČISTE funkcije (bez Reacta, bez Supabasea) — build/parse blob-a za
//     discere_sim_state, odluka o hidraciji, merge lokalnog i cloud stanja te
//     mapiranje rezultata ispita u sim_progress payload. Testabilne izolirano.
//  2) TANKI async omotači na dnu datoteke — koriste lazy import() za
//     '@/lib/discere-sim-state' i '@/lib/sim-progress' tako da čisti dio ostaje
//     uvozljiv bez Supabase klijenta.
import { validateUserData, validateBookmarks } from './scoring'

// localStorage ključevi koje engleski simulator drži i sinkronizira
export const ENG_USER_KEY = 'engleski_simulator_user'
export const ENG_BOOKMARKS_KEY = 'disc_eng_bookmarks'
// Tombstone-i brisanja bookmarka: { [bkKey]: deletedAtMs }. Bez ovoga je merge
// bookmarka bila unija pa se brisanje na jednom uređaju vraćalo s drugog.
export const ENG_BOOKMARKS_DELETED_KEY = 'disc_eng_bookmarks_deleted'

/**
 * Upiše tombstone brisanja bookmarka u localStorage (na razini modula, jer
 * React Compiler ne dopušta Date.now() u funkcijama tijela komponente).
 * @param {string} key - ključ bookmarka (`${examKey}_${qid}`)
 */
export function writeBookmarkTombstone(key, at = Date.now()) {
  try {
    const del = JSON.parse(localStorage.getItem(ENG_BOOKMARKS_DELETED_KEY) || '{}')
    del[key] = at
    localStorage.setItem(ENG_BOOKMARKS_DELETED_KEY, JSON.stringify(del))
  } catch { /* localStorage nedostupan */ }
}
export const ENG_SYNCED_AT_KEY = 'eng_synced_at'
// Uid računa čije je lokalno stanje — bez njega se nakon prebacivanja računa u
// istom tabu tuđe lokalno stanje migrira/mergea u cloud novog korisnika.
export const ENG_CLOUD_UID_KEY = 'eng_cloud_uid'
export const ENG_SUBJECT = 'eng'

// Pravi (službeni) ispit: '2024_ljeto', 'vis_2015_jesen', 'vis_2024_prvi'.
// Virtualne sesije ('virtual_…', 'filter_session_…', 'errors_session',
// 'bookmarks_session', 'exam_errors_session', 'daily_…') ne idu u sim_progress.
const REAL_EXAM_RE = /^(vis_)?\d{4}_/

/**
 * Je li ključ ispita pravi (službeni) ispit, a ne virtualna sesija?
 * @param {string} [key]
 * @returns {boolean}
 */
export function isRealExamKey(key) {
  return typeof key === 'string' && REAL_EXAM_RE.test(key)
}

/**
 * Komu pripada lokalno stanje na ovom uređaju?
 *  - 'unclaimed' — uid nikad nije zapisan (prva prijava na ovom uređaju ikad);
 *    lokalno stanje je slobodno za migraciju u cloud,
 *  - 'same' — stanje pripada upravo prijavljenom korisniku,
 *  - 'foreign' — stanje pripada drugom računu; NE migrirati i NE mergeati.
 *
 * @param {string|null|undefined} storedUid
 * @param {string|null|undefined} userId
 * @returns {'same'|'foreign'|'unclaimed'}
 */
export function resolveLocalOwnership(storedUid, userId) {
  const stored = typeof storedUid === 'string' ? storedUid.trim() : ''
  if (!stored) return 'unclaimed'
  const uid = typeof userId === 'string' ? userId.trim() : userId == null ? '' : String(userId)
  return uid && stored === uid ? 'same' : 'foreign'
}

/**
 * Složi blob za discere_sim_state (subject 'eng').
 * Vrijednosti su JSON stringovi (isti oblik kao u localStorageu) da hidracija
 * može pisati ravno u localStorage bez re-serijalizacije.
 * @returns {{[key: string]: unknown, _savedAt: number}}
 */
export function buildCloudBlob({ userData, bookmarks, bookmarksDeleted, savedAt } = {}) {
  const at = Number(savedAt)
  return {
    [ENG_USER_KEY]: JSON.stringify(userData || {}),
    [ENG_BOOKMARKS_KEY]: JSON.stringify(bookmarks || {}),
    [ENG_BOOKMARKS_DELETED_KEY]: JSON.stringify(bookmarksDeleted || {}),
    _savedAt: Number.isFinite(at) && at > 0 ? at : Date.now(),
  }
}

/**
 * Raspakiraj blob s clouda. Tolerira prazan, null ili pokvaren blob —
 * nikad ne baca; userData je null ako cloud nema upotrebljivo stanje.
 * @returns {{userData: object|null, bookmarks: object, savedAt: number}}
 */
export function parseCloudBlob(blob) {
  const out = { userData: null, bookmarks: {}, bookmarksDeleted: {}, savedAt: 0 }
  if (!blob || typeof blob !== 'object' || Array.isArray(blob)) return out
  const at = Number(blob._savedAt)
  out.savedAt = Number.isFinite(at) && at > 0 ? at : 0
  const rawUser = blob[ENG_USER_KEY]
  try {
    const parsed = typeof rawUser === 'string' ? JSON.parse(rawUser) : rawUser
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      out.userData = validateUserData(parsed)
    }
  } catch { /* pokvaren JSON → ostaje null */ }
  const rawBm = blob[ENG_BOOKMARKS_KEY]
  try {
    const parsed = typeof rawBm === 'string' ? JSON.parse(rawBm) : rawBm
    out.bookmarks = validateBookmarks(parsed)
  } catch { out.bookmarks = {} }
  const rawDel = blob[ENG_BOOKMARKS_DELETED_KEY]
  try {
    const parsed = typeof rawDel === 'string' ? JSON.parse(rawDel) : rawDel
    out.bookmarksDeleted = validateBookmarkTombstones(parsed)
  } catch { out.bookmarksDeleted = {} }
  return out
}

/**
 * Sanitizira raw tombstone objekt { [bkKey]: deletedAtMs } iz clouda/localStoragea.
 * @returns {{[key: string]: number}}
 */
function validateBookmarkTombstones(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {}
  const out = {}
  for (const [key, val] of Object.entries(raw)) {
    if (typeof key !== 'string' || key.length > 300) continue
    const at = Number(val)
    if (!Number.isFinite(at) || at <= 0) continue
    out[key] = at
  }
  return out
}

const BOOKMARK_TOMBSTONE_TTL_MS = 90 * 24 * 60 * 60 * 1000

/**
 * Čista funkcija: spoji lokalne i cloud bookmarke uz tombstone-e brisanja.
 * Bez ovoga bi merge bio unija, pa se brisanje na jednom uređaju vraćalo s
 * drugog (staro ponašanje).
 *
 * Pravila:
 *  - tombstone-i se spajaju s max vremenom brisanja,
 *  - tombstone stariji od 90 dana se čisti (ne prenosi se dalje),
 *  - bookmark preživi ako ne postoji tombstone noviji od njegova addedAt;
 *    bookmark bez addedAt gubi od bilo kojeg tombstone-a (tretira se kao star),
 *  - kad isti ključ postoji u oba izvora, pobjeđuje onaj s novijim addedAt
 *    (ili bilo koji ako nijedan nema addedAt).
 *
 * @param {Object} localBm   - { [bkKey]: {qid, examKey, examLabel, q, addedAt?} }
 * @param {Object} localDel  - { [bkKey]: deletedAtMs }
 * @param {Object} cloudBm
 * @param {Object} cloudDel
 * @returns {{bookmarks: Object, deleted: Object}}
 */
export function mergeBookmarks(localBm, localDel, cloudBm, cloudDel) {
  const now = Date.now()
  const deleted = {}
  const mergeDel = src => {
    for (const [k, v] of Object.entries(src || {})) {
      const at = Number(v)
      if (!Number.isFinite(at) || at <= 0) continue
      if (now - at > BOOKMARK_TOMBSTONE_TTL_MS) continue
      if (!deleted[k] || at > deleted[k]) deleted[k] = at
    }
  }
  mergeDel(localDel)
  mergeDel(cloudDel)

  const bookmarks = {}
  const mergeBm = src => {
    for (const [k, v] of Object.entries(src || {})) {
      if (!v || typeof v !== 'object') continue
      const tomb = deleted[k]
      const addedAt = Number(v.addedAt)
      const hasAddedAt = Number.isFinite(addedAt) && addedAt > 0
      const killedByTombstone = tomb && (!hasAddedAt || tomb > addedAt)
      if (killedByTombstone) continue
      const prev = bookmarks[k]
      if (!prev) { bookmarks[k] = v; continue }
      const prevAt = Number(prev.addedAt) || 0
      bookmarks[k] = addedAt >= prevAt ? v : prev
    }
  }
  mergeBm(localBm)
  mergeBm(cloudBm)

  return { bookmarks, deleted }
}

/**
 * Je li cloud stanje novije od onoga što je ovaj uređaj zadnji put sinkronizirao?
 */
export function shouldHydrateFromCloud(cloudSavedAt, localSyncedAt) {
  const cloud = Number(cloudSavedAt)
  const local = Number(localSyncedAt)
  if (!Number.isFinite(cloud) || cloud <= 0) return false
  return cloud > (Number.isFinite(local) ? local : 0)
}

// Smije li se stanje spremiti u cloud? Samo uz prijavljenog korisnika i SAMO
// nakon što je hidracija tog korisnika završila (cloudReady). Dok je hidracija
// u letu (ili još nije započela nakon prijave) spremanje je zabranjeno, inače
// bi staro lokalno stanje moglo pregaziti svježije cloud stanje.
export function shouldCloudSave(user, cloudReady) {
  return Boolean(user) && cloudReady === true
}

// Datum u povijesti je toLocaleDateString('hr') → 'd. m. yyyy.'; podnosi i ISO.
function parseHrDate(s) {
  if (typeof s !== 'string' || !s) return 0
  const hr = s.match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/)
  if (hr) return Date.UTC(Number(hr[3]), Number(hr[2]) - 1, Number(hr[1]))
  const t = Date.parse(s)
  return Number.isFinite(t) ? t : 0
}

// Identitet zapisa povijesti. Novi zapisi nose 'at' (ms timestamp) pa su
// jednoznačni; stari zapisi (bez 'at') padaju na (examKey, date, pct) i za njih
// se u mergeu koristi multiset brojanje da se dva ista pokušaja ne izgube.
function hasAt(h) {
  const at = h && Number(h.at)
  return Number.isFinite(at) && at > 0
}

function historyKey(h) {
  if (hasAt(h)) return `at:${h.examKey}|${Number(h.at)}`
  return `k:${h && h.examKey}|${h && h.date}|${h && h.pct}`
}

function dedupeByJson(arr) {
  const seen = new Set()
  const out = []
  for (const item of arr) {
    let k
    try { k = JSON.stringify(item) } catch { k = String(item) }
    if (seen.has(k)) continue
    seen.add(k)
    out.push(item)
  }
  return out
}

/**
 * Spoji lokalno i cloud stanje (prva prijava, ili dva uređaja koja su oba radila).
 * Pravila:
 *  - history: unija, identitet zapisa je (examKey, date, pct); lokalni redoslijed
 *    se čuva, cloud zapisi koji ne postoje lokalno dodaju se na kraj,
 *  - xp: maksimum (XP se samo akumulira, pa je veći broj ispravniji),
 *  - streak + lastDate: uzima se par s novijim lastDate; ako se datumi ne mogu
 *    usporediti ili su jednaki, uzima se veći streak,
 *  - errorTracker: unija ključeva, count = max (neriješena greška ostaje greška),
 *  - totalExams: history.length nakon unije (brojač se izvodi iz povijesti),
 *  - bookmarks (niz u userData): unija bez duplikata po serijalizaciji.
 * Oba argumenta prolaze validateUserData, pa radi i s null/pokvarenim ulazom.
 */
export function mergeUserData(local, cloud) {
  const a = validateUserData(local)
  const b = validateUserData(cloud)

  const history = [...a.history]
  const seen = new Set()
  const localCount = new Map()
  for (const h of a.history) {
    if (hasAt(h)) { seen.add(historyKey(h)); continue }
    const k = historyKey(h)
    localCount.set(k, (localCount.get(k) || 0) + 1)
  }
  const cloudCount = new Map()
  for (const h of b.history) {
    const k = historyKey(h)
    if (hasAt(h)) {
      if (seen.has(k)) continue
      seen.add(k)
      history.push(h)
      continue
    }
    // Bez 'at': zadrži max(broj lokalnih, broj cloud pojavljivanja) kopija
    const n = (cloudCount.get(k) || 0) + 1
    cloudCount.set(k, n)
    if (n > (localCount.get(k) || 0)) history.push(h)
  }

  const errorTracker = { ...a.errorTracker }
  for (const [k, v] of Object.entries(b.errorTracker)) {
    const prev = errorTracker[k]
    if (!prev) { errorTracker[k] = v; continue }
    errorTracker[k] = (v.count || 0) > (prev.count || 0) ? v : prev
  }

  const aAt = parseHrDate(a.lastDate)
  const bAt = parseHrDate(b.lastDate)
  let streak
  let lastDate
  if (aAt > bAt) { streak = a.streak; lastDate = a.lastDate }
  else if (bAt > aAt) { streak = b.streak; lastDate = b.lastDate }
  else { streak = Math.max(a.streak, b.streak); lastDate = a.lastDate || b.lastDate }

  // Kroz validateUserData da nakon unije vrijede limiti (history 1000,
  // errorTracker 2000, bookmarks 500) — inače merge raste bez gornje granice.
  const merged = validateUserData({
    xp: Math.max(a.xp, b.xp),
    streak,
    lastDate,
    history,
    totalExams: history.length,
    errorTracker,
    bookmarks: dedupeByJson([...a.bookmarks, ...b.bookmarks]),
  })
  // Brojač se izvodi iz povijesti i nakon primjene limita
  merged.totalExams = merged.history.length
  return merged
}

/**
 * Pretvori onExamDone rezultat u payload za saveSimResult (tablica sim_progress).
 * Vraća null za virtualne sesije (sve što nije pravi ispit po REAL_EXAM_RE).
 * Razina: 'visa' → 'A', 'osnovna' → 'B', sve ostalo (npr. 'mixed') → null.
 *
 * NAPOMENA (ADR-001): engleski simulator ovaj put VIŠE NE KORISTI — redak u
 * sim_progress upisuje ocjenjivačka ruta POST /api/sim/eng/grade, koja je
 * rezultat i izračunala. Funkcije ostaju jer su čiste i pokrivene testovima, i
 * jer su predložak za predmete koji još nisu migrirani.
 */
export function toSimProgressPayload(result, topic_breakdown, examRazina) {
  if (!result || typeof result.examKey !== 'string') return null
  if (!isRealExamKey(result.examKey)) return null
  const razina = examRazina === 'visa' ? 'A' : examRazina === 'osnovna' ? 'B' : null
  return {
    examKey: result.examKey,
    examLabel: result.examLabel || result.examKey,
    razina,
    pct: result.pct,
    grade: String(result.grade),
    cor: result.cor,
    total: result.total,
    answers: result.answers || {},
    qTimes: result.qTimes || {},
    examMode: !!result.examMode,
    topic_breakdown: topic_breakdown || {},
    errorTags: [],
  }
}

// ── Async omotači (Supabase); lazy import da čisti dio ostane bez ovisnosti ──

/**
 * Pročitaj cloud stanje. Neuspjelo čitanje se NE smije tretirati kao prazan
 * cloud (inače lokalno stanje pregazi cloud), pa se vraća i 'ok'.
 * @returns {Promise<{ok: boolean, blob: object|null, missingSchema: boolean}>}
 */
export async function loadEngCloudState() {
  try {
    const { loadSimStateStrict } = await import('@/lib/discere-sim-state')
    const res = await loadSimStateStrict(ENG_SUBJECT)
    if (res && res.ok) return { ok: true, blob: res.state, missingSchema: false }
    return { ok: false, blob: null, missingSchema: Boolean(res && res.missingSchema) }
  } catch {
    return { ok: false, blob: null, missingSchema: false }
  }
}

/**
 * Spremi cloud stanje; vraća je li upload uspio (pozivatelj tek tada smije
 * zapisati eng_synced_at).
 * @returns {Promise<boolean>}
 */
export async function saveEngCloudState(blob) {
  try {
    const { saveSimStateStrict } = await import('@/lib/discere-sim-state')
    const res = await saveSimStateStrict(blob, ENG_SUBJECT)
    return Boolean(res && res.ok)
  } catch { /* offline/bez migracije → ostaje samo localStorage */ }
  return false
}

export async function saveEngSimResult(payload) {
  if (!payload) return
  try {
    const { saveSimResult } = await import('@/lib/sim-progress')
    await saveSimResult(payload, undefined, ENG_SUBJECT)
  } catch { /* fire-and-forget */ }
}
