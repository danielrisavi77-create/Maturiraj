import 'server-only' // @exam-secret
// lib/exam-secrets/subjects/soc.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001 — adapter sociologije za zajedničke rute
//   GET  /api/sim/soc/exam/<examKey>
//   POST /api/sim/soc/grade
//
// Podatke generira scripts/soc-split-solutions.mjs iz monolita
// public/sim/sociologija.html u dvije obitelji datoteka:
//   content/soc/exams/<examKey>.json     javni payload { key, meta, texts, qs }
//   lib/data/soc/secrets/<examKey>.json  tajni store  { qid: { sol, exp, type, topic } }
//
// Sociologija je jedini predmet koji nije modul nego statički HTML u public/.
// Engine u iframeu NIKAD ne zove mrežu (ODLUKA 7): roditelj SociologijaClient.jsx
// dohvaća ispit s ove rute i šalje ga porukom DISCERE_EXAMS, a predaju vraća
// porukom DISCERE_GRADE. Zato adapter ne zna ništa o iframeu — vidi samo isti
// ugovor kao engleski.
//
// OCJENJIVANJE NE PIŠE VLASTITU LOGIKU. Koristi `scoreExam` iz
// lib/sociologija/scoring.js, prijepis `chk`/`grade` iz istog HTML-a, pa se
// ocjena ne može razići između lokalnog (plaćeni tier ima ključeve) i
// poslužiteljskog puta. Paritet drži test, ne komentar:
// __tests__/discere/soc-scoring-parity.test.js.
//
// Javni payload se čita `fs`-om, kao i tajni store: putanja je poznata tek u
// runtimeu (32 ispita). next.config.mjs već ima `outputFileTracingIncludes` za
// './content/*/exams/*.json' i './lib/data/*/secrets/**', pa soc ne treba novi
// unos — bez njih bi prvi produkcijski poziv bio ENOENT.
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { scoreExam } from '@/lib/sociologija/scoring'
import { allowedExamKeys as allowedKeysForTier } from '@/lib/discere-access'
import { isSafeSegment, loadSecrets, mergeSecrets } from '@/lib/exam-secrets'

export const SUBJECT = 'soc'

/**
 * Polja pitanja koja smiju u klijent. Zrcali allowlistu generatora; ruta je
 * primjenjuje NAD VEĆ ČISTIM payloadom, pa greška u generatoru ne procuri.
 * `nsel` je izvedeno (koliko odgovora traži `ms` pitanje) — broj, ne ključ:
 * bez njega MSQ ne zna ispisati „Odaberi N odgovora“.
 */
export const PUBLIC_QUESTION_FIELDS = Object.freeze([
  'id',
  'type',
  'topic',
  'q',
  'opts',
  'items',
  'nsel',
])

/**
 * Keš javnih payloada. Ispiti su nepromjenjivi unutar instance; strop postoji da
 * jedna serverless instanca ne završi sa svih 32 ispita u memoriji.
 */
const MAX_CACHED_EXAMS = 12
const publicCache = new Map()

function publicPath(examKey) {
  if (!isSafeSegment(examKey)) return null
  return path.join(process.cwd(), 'content', SUBJECT, 'exams', `${examKey}.json`)
}

/**
 * Javni payload jednog ispita.
 * @param {string} examKey
 * @returns {Promise<{key: string, meta: object, texts: object, qs: object[]}|null>}
 */
export async function loadPublic(examKey) {
  const file = publicPath(examKey)
  if (!file) return null

  const cached = publicCache.get(examKey)
  if (cached !== undefined) return cached

  let parsed = null
  try {
    parsed = JSON.parse(await readFile(file, 'utf8'))
  } catch (err) {
    // ENOENT je legitiman odgovor ("ispit ne postoji"), sve ostalo je kvar.
    if (err?.code !== 'ENOENT') {
      console.error(`[exam-secrets/soc] ${examKey}: javni payload nije čitljiv.`, err)
    }
    return null
  }
  if (!parsed || typeof parsed !== 'object' || !Array.isArray(parsed.qs)) return null

  if (publicCache.size >= MAX_CACHED_EXAMS) publicCache.delete(publicCache.keys().next().value)
  publicCache.set(examKey, parsed)
  return parsed
}

/** Samo za testove i regeneraciju sadržaja. */
export function clearPublicCache() {
  publicCache.clear()
}

/** @param {string} examKey */
export function loadSocSecrets(examKey) {
  return loadSecrets(SUBJECT, examKey)
}

/**
 * Ispiti za koje tier smije dobiti KLJUČEVE. Isti popis koji engine već koristi
 * za `socGate` (vježbanje je za free ograničeno na demo ispite), pa se pravo ne
 * izvodi na dva mjesta: free popis je SOC_FREE_DEMO iz lib/exam-secrets/free-policy.js,
 * plaćeni tier dobiva sve ključeve iz lib/data/soc/exams-index.json.
 *
 * @param {'free'|'starter'|'standard'|'pro'} tier
 */
export function allowedExamKeys(tier) {
  return allowedKeysForTier(tier === 'starter' ? 'standard' : tier, SUBJECT)
}

/**
 * Ocijeni predaju.
 *
 * Ruta predaje JAVNA pitanja (bez ključeva) i tajni store; spajanje je ovdje, pa
 * ključ nikad ne izlazi iz ovog modula. Nazivnik su sva pitanja osim `sa`/`es` —
 * isto kao `Sim.submit()` u engineu.
 *
 * @param {object[]} qs       javna pitanja (bez ključeva)
 * @param {Record<string, object>} secrets  tajni store tog ispita
 * @param {Record<string, unknown>} answers
 */
export function score(qs, secrets, answers) {
  const merged = (Array.isArray(qs) ? qs : []).map((question) => mergeSecrets(question, secrets))
  return scoreExam(merged, answers)
}

export const socAdapter = Object.freeze({
  loadPublic,
  loadSecrets: loadSocSecrets,
  allowedExamKeys,
  score,
  publicFields: PUBLIC_QUESTION_FIELDS,
})
