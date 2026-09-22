import 'server-only' // @exam-secret
// lib/exam-secrets/index.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001 (docs/ADR-001-ispitni-podaci.md) — JEDINI čitač tajnog storea.
//
// Tajni store živi pod lib/data/<predmet>/secrets/<examKey>.json i čita se
// `fs`-om, NIKAD `import`-om: statički uvoz bi bundler uvukao u graf modula, pa
// bi jedan neoprezan re-export iz klijentske komponente vratio ključeve u
// preglednik. Uz `fs` put je jedino zvanje ove funkcije, a ono je iza
// `server-only`.
//
// Cijena tog izbora: datoteka mora postojati u bundleu serverless funkcije.
// Next output tracing ne vidi `readFile(process.cwd() + …)`, pa next.config.mjs
// ima `outputFileTracingIncludes` za '/api/sim/…' → bez toga je prvi
// produkcijski poziv 500 (docs: ADR-001, "Regeneracijski lanci").
import { readFile } from 'node:fs/promises'
import path from 'node:path'

/** Predmet i ključ ispita ulaze u putanju — samo bezopasni segmenti. */
const SAFE_SEGMENT = /^[A-Za-z0-9_-]{1,64}$/

/**
 * Polja koja otkrivaju rješenje. Popis je zrcalo ADR-a i sloja B ratcheta
 * (scripts/security/exam-secret-scan.mjs). Gnijezdena polja (cl, ans, alt,
 * pairs, ex) žive unutar sol, pa ih uklanjanje sol-a nosi sa sobom.
 */
export const SECRET_FIELDS = Object.freeze([
  'sol',
  'exp',
  'why',
  'steps',
  'warn',
  'graphRef',
  'ocjenaKljuc',
  'distraktori',
  'rubric',
  'solFormula',
  'svgFn',
])

/**
 * Keš učitanih tajni. Ispiti su nepromjenjivi u jednoj instanci, ali mat ima
 * ~100 KB po ispitu, pa keš ima strop i izbacuje najstariji unos (FIFO).
 * Promašaji se NE keširaju — negativan keš bi značio da novododana datoteka
 * ostaje nevidljiva do restarta instance.
 */
const MAX_CACHED_EXAMS = 24
const cache = new Map()

/** @param {unknown} value */
export function isSafeSegment(value) {
  return typeof value === 'string' && SAFE_SEGMENT.test(value)
}

/** Apsolutna putanja tajnog storea za (predmet, ispit), ili null za neispravan segment. */
export function secretsPath(subject, examKey) {
  if (!isSafeSegment(subject) || !isSafeSegment(examKey)) return null
  return path.join(process.cwd(), 'lib', 'data', subject, 'secrets', `${examKey}.json`)
}

/**
 * Učitaj tajni store jednog ispita.
 *
 * @param {string} subject
 * @param {string} examKey
 * @returns {Promise<Record<string, object>|null>} mapa qid → tajna polja, ili null
 */
export async function loadSecrets(subject, examKey) {
  const file = secretsPath(subject, examKey)
  if (!file) return null

  const cacheKey = `${subject}/${examKey}`
  const cached = cache.get(cacheKey)
  if (cached !== undefined) return cached

  let parsed = null
  try {
    parsed = JSON.parse(await readFile(file, 'utf8'))
  } catch (err) {
    // ENOENT je legitiman odgovor ("ispit nema ključ"), sve ostalo je kvar.
    if (err?.code !== 'ENOENT') {
      console.error(`[exam-secrets] ${subject}/${examKey}: tajni store nije čitljiv.`, err)
    }
    return null
  }
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null

  if (cache.size >= MAX_CACHED_EXAMS) cache.delete(cache.keys().next().value)
  cache.set(cacheKey, parsed)
  return parsed
}

/** Testovi i regeneracija sadržaja. */
export function clearSecretsCache() {
  cache.clear()
}

/**
 * Očisti jedno pitanje za isporuku bez ključeva.
 *
 * `publicFields` (allowlist iz adaptera) je jači oblik: novo polje s ključem
 * ispada samo od sebe. Bez njega vrijedi denylist nad SECRET_FIELDS — dovoljan
 * za zatečene predmete, ali svaki novi predmet treba dati allowlistu.
 *
 * @param {object} question
 * @param {readonly string[]|null} [publicFields]
 */
export function stripQuestion(question, publicFields = null) {
  if (!question || typeof question !== 'object') return question
  if (Array.isArray(publicFields) && publicFields.length) {
    const out = {}
    for (const field of publicFields) {
      if (question[field] !== undefined) out[field] = question[field]
    }
    return out
  }
  const out = { ...question }
  for (const field of SECRET_FIELDS) delete out[field]
  return out
}

/** @param {object[]} questions */
export function stripQuestions(questions, publicFields = null) {
  if (!Array.isArray(questions)) return []
  return questions.map((question) => stripQuestion(question, publicFields))
}

/**
 * Spoji tajna polja natrag u javno pitanje (plaćeni tier, i legitimni free
 * izuzeci iz free-policy.js). Vraća isto pitanje kad tajne za taj qid nema, pa
 * pozivatelj po identitetu objekta zna je li spajanje doista bilo.
 *
 * @param {object} question
 * @param {Record<string, object>|null} secrets
 */
export function mergeSecrets(question, secrets) {
  const qid = question?.id
  const secret = qid != null && secrets ? secrets[qid] : null
  if (!secret || typeof secret !== 'object') return question
  return { ...question, ...secret }
}
