// lib/discere/taxonomy.js
// Taksonomija predmeta — čiste transformacije nad već učitanim
// `taxonomy.json`/`topics.json` (content/discere/<id>/taxonomy.json, vidi
// docs/PREDMETI_PLAN.md, Faza 1 korak f). Bez fs/import() ovdje — učitavanje
// je odgovornost content-loadera; ova datoteka samo normalizira/indeksira.
//
// Očekivani oblik: { modules: [{slug, title, chapters: [{slug, title, outcomes}]}],
//                     topics: { [code]: { label, chapterSlug, aliases?: string[] } } }

/**
 * Izgradi plošan indeks tema iz taxonomy.json radi brzog pretraživanja po
 * kodu ili aliasu (case-insensitive, trim).
 * @param {{topics?: Record<string, {label: string, chapterSlug?: string, aliases?: string[]}>}} taxonomy
 * @returns {{byCode: Map<string, object>, byAlias: Map<string, string>}}
 */
export function buildTopicIndex(taxonomy) {
  const byCode = new Map()
  const byAlias = new Map()
  const topics = (taxonomy && typeof taxonomy === 'object' && taxonomy.topics) || {}
  for (const [code, entry] of Object.entries(topics)) {
    if (!entry || typeof entry !== 'object') continue
    byCode.set(code, { code, label: entry.label || code, chapterSlug: entry.chapterSlug ?? null })
    byAlias.set(normalizeKey(code), code)
    for (const alias of Array.isArray(entry.aliases) ? entry.aliases : []) {
      if (typeof alias === 'string' && alias) byAlias.set(normalizeKey(alias), code)
    }
  }
  return { byCode, byAlias }
}

function normalizeKey(value) {
  return String(value ?? '').trim().toLocaleLowerCase('hr-HR')
}

/**
 * Pretvori sirovi topic (kod ili alias iz starijeg sadržaja) u kanonski kod
 * iz taksonomije predmeta. Nepoznat topic vraća `null` — pozivatelj odlučuje
 * hoće li to tretirati kao grešku (schema validacija) ili kao "ostalo" (UI).
 * @param {ReturnType<typeof buildTopicIndex>} index
 * @param {string} rawTopic
 * @returns {string|null}
 */
export function normalizeTopic(index, rawTopic) {
  if (typeof rawTopic !== 'string' || !rawTopic.trim()) return null
  const key = normalizeKey(rawTopic)
  if (index?.byCode?.has(rawTopic)) return rawTopic
  return index?.byAlias?.get(key) ?? null
}

/**
 * Čitljiva oznaka teme za UI; vraća sam kod ako taksonomija nema oznaku.
 * @param {ReturnType<typeof buildTopicIndex>} index
 * @param {string} code
 * @returns {string}
 */
export function topicLabel(index, code) {
  return index?.byCode?.get(code)?.label ?? code
}

/**
 * Slug poglavlja skripte za temu (Faza 4: chapter-links.js), ili null kad
 * poglavlje ne postoji / tema nije prepoznata.
 * @param {ReturnType<typeof buildTopicIndex>} index
 * @param {string} code
 * @returns {string|null}
 */
export function chapterSlugFor(index, code) {
  return index?.byCode?.get(code)?.chapterSlug ?? null
}

/**
 * Svi kodovi tema iz taksonomije, redoslijedom kako su navedeni — za
 * `validateExam(exam, { topics })`.
 * @param {ReturnType<typeof buildTopicIndex>} index
 * @returns {string[]}
 */
export function topicCodes(index) {
  return Array.from(index?.byCode?.keys() ?? [])
}
