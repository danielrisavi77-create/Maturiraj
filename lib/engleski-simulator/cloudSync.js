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
export const ENG_SYNCED_AT_KEY = 'eng_synced_at'
export const ENG_SUBJECT = 'eng'

// Pravi (službeni) ispit: '2024_ljeto', 'vis_2015_jesen', 'vis_2024_prvi'.
// Virtualne sesije ('virtual_…', 'filter_session_…', 'errors_session',
// 'bookmarks_session', 'exam_errors_session', 'daily_…') ne idu u sim_progress.
const REAL_EXAM_RE = /^(vis_)?\d{4}_/

/**
 * Složi blob za discere_sim_state (subject 'eng').
 * Vrijednosti su JSON stringovi (isti oblik kao u localStorageu) da hidracija
 * može pisati ravno u localStorage bez re-serijalizacije.
 * @returns {{[key: string]: unknown, _savedAt: number}}
 */
export function buildCloudBlob({ userData, bookmarks, savedAt } = {}) {
  const at = Number(savedAt)
  return {
    [ENG_USER_KEY]: JSON.stringify(userData || {}),
    [ENG_BOOKMARKS_KEY]: JSON.stringify(bookmarks || {}),
    _savedAt: Number.isFinite(at) && at > 0 ? at : Date.now(),
  }
}

/**
 * Raspakiraj blob s clouda. Tolerira prazan, null ili pokvaren blob —
 * nikad ne baca; userData je null ako cloud nema upotrebljivo stanje.
 * @returns {{userData: object|null, bookmarks: object, savedAt: number}}
 */
export function parseCloudBlob(blob) {
  const out = { userData: null, bookmarks: {}, savedAt: 0 }
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
  return out
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

function historyKey(h) {
  return `${h && h.examKey}|${h && h.date}|${h && h.pct}`
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
  const seen = new Set(history.map(historyKey))
  for (const h of b.history) {
    const k = historyKey(h)
    if (seen.has(k)) continue
    seen.add(k)
    history.push(h)
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

  return {
    xp: Math.max(a.xp, b.xp),
    streak,
    lastDate,
    history,
    totalExams: history.length,
    errorTracker,
    bookmarks: dedupeByJson([...a.bookmarks, ...b.bookmarks]),
  }
}

/**
 * Pretvori onExamDone rezultat u payload za saveSimResult (tablica sim_progress).
 * Vraća null za virtualne sesije (sve što nije pravi ispit po REAL_EXAM_RE).
 * Razina: 'visa' → 'A', 'osnovna' → 'B', sve ostalo (npr. 'mixed') → null.
 */
export function toSimProgressPayload(result, topic_breakdown, examRazina) {
  if (!result || typeof result.examKey !== 'string') return null
  if (!REAL_EXAM_RE.test(result.examKey)) return null
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

export async function loadEngCloudState() {
  try {
    const { loadSimState } = await import('@/lib/discere-sim-state')
    return await loadSimState(ENG_SUBJECT)
  } catch {
    return {}
  }
}

export async function saveEngCloudState(blob) {
  try {
    const { saveSimState } = await import('@/lib/discere-sim-state')
    await saveSimState(blob, ENG_SUBJECT)
  } catch { /* offline/bez migracije → ostaje samo localStorage */ }
}

export async function saveEngSimResult(payload) {
  if (!payload) return
  try {
    const { saveSimResult } = await import('@/lib/sim-progress')
    await saveSimResult(payload, undefined, ENG_SUBJECT)
  } catch { /* fire-and-forget */ }
}
