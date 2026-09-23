// lib/discere/cloud-sync.js
// Cross-device perzistencija napretka canonical simulatora — port
// lib/engleski-simulator/cloudSync.js, parametriziran predmetom.
//
// Dva sloja:
//  1) ČISTE funkcije (bez Reacta, bez Supabasea) — build/parse blob-a za
//     discere_sim_state, odluka o hidraciji, merge lokalnog i cloud stanja.
//     Testabilne izolirano.
//  2) TANKI async omotači na dnu datoteke — koriste lazy import() za
//     '@/lib/discere-sim-state' (subject parametar) tako da čisti dio ostaje
//     uvozljiv bez Supabase klijenta.

/** localStorage ključevi — svi prefiksirani predmetom da se dva predmeta ne miješaju. */
export function storageKeys(subjectId) {
  return {
    userKey: `disc_${subjectId}_user`,
    bookmarksKey: `disc_${subjectId}_bookmarks`,
    bookmarksDeletedKey: `disc_${subjectId}_bookmarks_deleted`,
    syncedAtKey: `disc_${subjectId}_synced_at`,
    cloudUidKey: `disc_${subjectId}_cloud_uid`,
  }
}

/**
 * Sanitizira jedan unos errorTrackera — { q, topic, examKey, qid, count, lastDate? }.
 * Isti ugovor kao eng (lib/engleski-simulator/scoring.js), lokalna kopija da
 * dijeljene lib-ove ne veže na predmetni simulator.
 */
function sanitizeErrorEntry(v) {
  if (typeof v === 'number') v = { count: v }
  if (!v || typeof v !== 'object' || Array.isArray(v)) return null

  const examKey = typeof v.examKey === 'string' ? v.examKey.slice(0, 100) : null
  if (!examKey) return null

  const qid = (typeof v.qid === 'string' || typeof v.qid === 'number') ? String(v.qid).slice(0, 50) : null
  if (!qid) return null

  const count = (typeof v.count === 'number' && Number.isFinite(v.count) && v.count >= 0)
    ? Math.min(Math.round(v.count), 9999)
    : null
  if (count === null) return null

  const out = {
    q: typeof v.q === 'string' ? v.q.slice(0, 300) : '',
    topic: typeof v.topic === 'string' ? v.topic.slice(0, 60) : 'ostalo',
    examKey,
    qid,
    count,
  }
  if (typeof v.lastDate === 'string' && v.lastDate.length <= 40) out.lastDate = v.lastDate
  return out
}

/**
 * Validira i sanitizira sirov userData objekt (localStorage ili cloud).
 * @param {*} p
 */
export function validateUserData(p) {
  if (!p || typeof p !== 'object') {
    return { xp: 0, streak: 0, lastDate: null, history: [], totalExams: 0, errorTracker: {}, bookmarks: [] }
  }
  const rawEt = p.errorTracker
  let validatedEt = {}
  if (rawEt && typeof rawEt === 'object' && !Array.isArray(rawEt)) {
    for (const [k, v] of Object.entries(rawEt)) {
      if (typeof k !== 'string' || k.length > 200) continue
      const entry = sanitizeErrorEntry(v)
      if (entry) validatedEt[k] = entry
    }
  }
  const etKeys = Object.keys(validatedEt)
  if (etKeys.length > 2000) {
    const limited = {}
    etKeys
      .sort((a, b) => validatedEt[b].count - validatedEt[a].count)
      .slice(0, 2000)
      .forEach(k => { limited[k] = validatedEt[k] })
    validatedEt = limited
  }
  return {
    xp: (typeof p.xp === 'number' && p.xp >= 0 && p.xp <= 10000000) ? Math.floor(p.xp) : 0,
    streak: (typeof p.streak === 'number' && p.streak >= 0 && p.streak <= 3650) ? Math.floor(p.streak) : 0,
    lastDate: (typeof p.lastDate === 'string' && p.lastDate.length < 40) ? p.lastDate : null,
    history: Array.isArray(p.history)
      ? p.history
          .filter(h => h && typeof h.examKey === 'string' && typeof h.pct === 'number' && h.pct >= 0 && h.pct <= 100)
          .slice(0, 1000)
      : [],
    totalExams: (typeof p.totalExams === 'number' && p.totalExams >= 0) ? Math.floor(p.totalExams) : 0,
    errorTracker: validatedEt,
    bookmarks: Array.isArray(p.bookmarks)
      ? p.bookmarks.filter(b => b !== null && typeof b === 'object' && !Array.isArray(b)).slice(0, 500)
      : [],
  }
}

/** Validira i sanitizira sirove bookmark podatke. */
export function validateBookmarks(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {}
  const out = {}
  for (const [key, val] of Object.entries(raw)) {
    if (typeof key !== 'string' || key.length > 300) continue
    if (!val || typeof val !== 'object') continue
    if (typeof val.qid === 'undefined') continue
    if (typeof val.examKey !== 'string') continue
    out[key] = {
      qid: val.qid,
      examKey: String(val.examKey).slice(0, 100),
      examLabel: typeof val.examLabel === 'string' ? val.examLabel.slice(0, 200) : '',
      q: typeof val.q === 'string' ? val.q.slice(0, 200) : '',
    }
    if (typeof val.addedAt === 'number' && Number.isFinite(val.addedAt) && val.addedAt > 0) {
      out[key].addedAt = val.addedAt
    }
  }
  return out
}

/** Sanitizira raw tombstone objekt { [bkKey]: deletedAtMs }. */
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

/**
 * Upiše tombstone brisanja bookmarka.
 * @param {string} subjectId
 * @param {string} key - ključ bookmarka (`${examKey}_${qid}`)
 */
export function writeBookmarkTombstone(subjectId, key, at = Date.now()) {
  const { bookmarksDeletedKey } = storageKeys(subjectId)
  try {
    const del = JSON.parse(localStorage.getItem(bookmarksDeletedKey) || '{}')
    del[key] = at
    localStorage.setItem(bookmarksDeletedKey, JSON.stringify(del))
  } catch { /* localStorage nedostupan */ }
}

// Pravi (službeni) ispit — godina na početku ključa, uz opcionalni prefiks
// razine ('A_', 'vis_', ...). Virtualne sesije ne idu u sim_progress.
const REAL_EXAM_RE = /^([a-zA-Z]+_)?\d{4}_/

/** Je li ključ ispita pravi (službeni) ispit, a ne virtualna sesija? */
export function isRealExamKey(key) {
  return typeof key === 'string' && REAL_EXAM_RE.test(key)
}

/**
 * Komu pripada lokalno stanje na ovom uređaju?
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
 * Složi blob za discere_sim_state (subject = subjectId).
 * @returns {{[key: string]: unknown, _savedAt: number}}
 */
export function buildCloudBlob(subjectId, { userData, bookmarks, bookmarksDeleted, savedAt } = {}) {
  const { userKey, bookmarksKey, bookmarksDeletedKey } = storageKeys(subjectId)
  const at = Number(savedAt)
  return {
    [userKey]: JSON.stringify(userData || {}),
    [bookmarksKey]: JSON.stringify(bookmarks || {}),
    [bookmarksDeletedKey]: JSON.stringify(bookmarksDeleted || {}),
    _savedAt: Number.isFinite(at) && at > 0 ? at : Date.now(),
  }
}

/**
 * Raspakiraj blob s clouda. Tolerira prazan, null ili pokvaren blob.
 * @returns {{userData: object|null, bookmarks: object, bookmarksDeleted: object, savedAt: number}}
 */
export function parseCloudBlob(subjectId, blob) {
  const { userKey, bookmarksKey, bookmarksDeletedKey } = storageKeys(subjectId)
  const out = { userData: null, bookmarks: {}, bookmarksDeleted: {}, savedAt: 0 }
  if (!blob || typeof blob !== 'object' || Array.isArray(blob)) return out
  const at = Number(blob._savedAt)
  out.savedAt = Number.isFinite(at) && at > 0 ? at : 0
  const rawUser = blob[userKey]
  try {
    const parsed = typeof rawUser === 'string' ? JSON.parse(rawUser) : rawUser
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      out.userData = validateUserData(parsed)
    }
  } catch { /* pokvaren JSON → ostaje null */ }
  const rawBm = blob[bookmarksKey]
  try {
    const parsed = typeof rawBm === 'string' ? JSON.parse(rawBm) : rawBm
    out.bookmarks = validateBookmarks(parsed)
  } catch { out.bookmarks = {} }
  const rawDel = blob[bookmarksDeletedKey]
  try {
    const parsed = typeof rawDel === 'string' ? JSON.parse(rawDel) : rawDel
    out.bookmarksDeleted = validateBookmarkTombstones(parsed)
  } catch { out.bookmarksDeleted = {} }
  return out
}

const BOOKMARK_TOMBSTONE_TTL_MS = 90 * 24 * 60 * 60 * 1000

/**
 * Čista funkcija: spoji lokalne i cloud bookmarke uz tombstone-e brisanja.
 * @param {Object} localBm
 * @param {Object} localDel
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

/** Je li cloud stanje novije od onoga što je ovaj uređaj zadnji put sinkronizirao? */
export function shouldHydrateFromCloud(cloudSavedAt, localSyncedAt) {
  const cloud = Number(cloudSavedAt)
  const local = Number(localSyncedAt)
  if (!Number.isFinite(cloud) || cloud <= 0) return false
  return cloud > (Number.isFinite(local) ? local : 0)
}

// Smije li se stanje spremiti u cloud? Samo uz prijavljenog korisnika i SAMO
// nakon što je hidracija tog korisnika završila (cloudReady).
export function shouldCloudSave(user, cloudReady) {
  return Boolean(user) && cloudReady === true
}

function parseHrDate(s) {
  if (typeof s !== 'string' || !s) return 0
  const hr = s.match(/^(\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})/)
  if (hr) return Date.UTC(Number(hr[3]), Number(hr[2]) - 1, Number(hr[1]))
  const t = Date.parse(s)
  return Number.isFinite(t) ? t : 0
}

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
 * Spoji lokalno i cloud userData (prva prijava, ili dva uređaja koja su oba
 * radila). Isti algoritam kao lib/engleski-simulator/cloudSync.js.
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

  const merged = validateUserData({
    xp: Math.max(a.xp, b.xp),
    streak,
    lastDate,
    history,
    totalExams: history.length,
    errorTracker,
    bookmarks: dedupeByJson([...a.bookmarks, ...b.bookmarks]),
  })
  merged.totalExams = merged.history.length
  return merged
}

// ── Async omotači (Supabase); lazy import da čisti dio ostane bez ovisnosti ──

/**
 * Pročitaj cloud stanje predmeta. Neuspjelo čitanje se NE smije tretirati
 * kao prazan cloud (inače lokalno stanje pregazi cloud), pa se vraća i 'ok'.
 * @param {string} subjectId
 * @returns {Promise<{ok: boolean, blob: object|null, missingSchema: boolean}>}
 */
export async function loadDiscereCloudState(subjectId) {
  try {
    const { loadSimStateStrict } = await import('@/lib/discere-sim-state')
    const res = await loadSimStateStrict(subjectId)
    if (res && res.ok) return { ok: true, blob: res.state, missingSchema: false }
    return { ok: false, blob: null, missingSchema: Boolean(res && res.missingSchema) }
  } catch {
    return { ok: false, blob: null, missingSchema: false }
  }
}

/**
 * Spremi cloud stanje predmeta; vraća je li upload uspio (pozivatelj tek
 * tada smije zapisati _synced_at).
 * @param {string} subjectId
 * @param {object} blob
 * @returns {Promise<boolean>}
 */
export async function saveDiscereCloudState(subjectId, blob) {
  try {
    const { saveSimStateStrict } = await import('@/lib/discere-sim-state')
    const res = await saveSimStateStrict(blob, subjectId)
    return Boolean(res && res.ok)
  } catch { /* offline/bez migracije → ostaje samo localStorage */ }
  return false
}
