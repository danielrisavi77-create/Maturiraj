import 'server-only' // @exam-secret
// lib/exam-secrets/subjects/eng.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001 — adapter engleskog jezika za zajedničke rute
//   GET  /api/sim/eng/exam/<examKey>
//   POST /api/sim/eng/grade
//
// Podatke generira scripts/gen-eng-exams-json.mjs iz izvora istine
// lib/engleski-simulator/exams.js u dvije obitelji datoteka:
//   content/eng/exams/<examKey>.json     javni payload { key, meta, texts, qs }
//   lib/data/eng/secrets/<examKey>.json  tajni store { qid: { sol, exp, type, topic } }
//
// OCJENJIVANJE NE PIŠE VLASTITU LOGIKU. Koristi `chk` iz
// lib/engleski-simulator/scoring.js — istu funkciju koju koristi i preglednik,
// pa se ocjena ne može razići između lokalnog i poslužiteljskog puta. Obrisana
// ruta app/api/exams/check je imala vlastiti `checkQ` s dvije greške: `mat` je
// uspoređivao `answer[p.l] === p.r` bez `.trim()` (lažni netočni) i
// implementirao tip `ms` kojeg u podacima engleskog uopće nema.
//
// Javni payload se čita `fs`-om, kao i tajni store: putanja je poznata tek u
// runtimeu (70 ispita), a statički uvoz svih 70 datoteka u rutu ne bi ništa
// dobio. Zato next.config.mjs ima `outputFileTracingIncludes` i za
// './content/eng/exams/**' — bez toga je prvi produkcijski poziv ENOENT.
import { chk, grade, calcXpGain } from '@/lib/engleski-simulator/scoring'
import { allowedExamKeys as allowedKeysForTier } from '@/lib/discere-access'
import { loadSecrets, mergeSecrets } from '@/lib/exam-secrets'
import { createPublicStore } from '@/lib/exam-secrets/public-store'

export const SUBJECT = 'eng'

/**
 * Polja pitanja koja smiju u klijent. Zrcali allowlistu generatora; ruta je
 * primjenjuje NAD VEĆ ČISTIM payloadom, pa greška u generatoru ne procuri.
 */
export const PUBLIC_QUESTION_FIELDS = Object.freeze([
  'id',
  'section',
  'type',
  'topic',
  'q',
  'opts',
  'items',
  'rights',
  'note',
])

/** Tipovi koje ocjenjivač ocjenjuje ručno — `chk` za njih vraća null. */
const MANUAL_TYPES = new Set(['sa', 'es'])

/**
 * Keš javnih payloada. Ispiti su nepromjenjivi unutar instance; strop postoji
 * da jedna serverless instanca ne završi sa svih 1,4 MB u memoriji. Put, keš i
 * ENOENT-kao-404 dijeli s ostalim predmetima (lib/exam-secrets/public-store.js).
 */
const publicStore = createPublicStore(SUBJECT)

/**
 * Javni payload jednog ispita.
 * @param {string} examKey
 * @returns {Promise<{key: string, meta: object, texts: object, qs: object[]}|null>}
 */
export function loadPublic(examKey) {
  return publicStore.load(examKey)
}

/** Samo za testove i regeneraciju sadržaja. */
export function clearPublicCache() {
  publicStore.clear()
}

/** @param {string} examKey */
export function loadEngSecrets(examKey) {
  return loadSecrets(SUBJECT, examKey)
}

/**
 * Ispiti za koje tier smije dobiti KLJUČEVE. Isti popis koji klijentski paywall
 * već koristi za `locked`, pa se pravo ne izvodi na dva mjesta.
 *
 * Za free je vrijednost informativna: ruta je konzultira samo za plaćeni tier,
 * a free izuzeci (vježbanje do FREE_LIMIT pitanja) žive u free-policy.js.
 *
 * @param {'free'|'starter'|'pro'} tier
 */
export function allowedExamKeys(tier) {
  return allowedKeysForTier(tier === 'starter' ? 'standard' : tier, SUBJECT)
}

/**
 * Ocijeni predaju. Brojanje je namjerno identično klijentskom `finish()`
 * (components/engleski-simulator/EngleskiSimulator.js): nazivnik su sva pitanja
 * osim `sa`/`es`, a ne samo ona koja je `chk` uspio ocijeniti — inače bi se
 * postoci svih zatečenih korisnika tiho promijenili.
 *
 * @param {object[]} qs       javna pitanja (bez ključeva)
 * @param {Record<string, object>} secrets  tajni store tog ispita
 * @param {Record<string, unknown>} answers
 */
export function score(qs, secrets, answers) {
  const given = answers && typeof answers === 'object' ? answers : {}
  const scores = {}
  const topicBreakdown = {}
  let cor = 0
  let total = 0

  for (const question of Array.isArray(qs) ? qs : []) {
    const full = mergeSecrets(question, secrets)
    if (MANUAL_TYPES.has(full.type)) {
      scores[question.id] = null
      continue
    }
    const ok = chk(full, given[question.id])
    scores[question.id] = ok
    total += 1
    if (ok === true) cor += 1

    const topic = full.topic || 'ostalo'
    if (!topicBreakdown[topic]) topicBreakdown[topic] = { correct: 0, total: 0 }
    topicBreakdown[topic].total += 1
    if (ok === true) topicBreakdown[topic].correct += 1
  }

  const pct = total ? Math.round((cor / total) * 100) : 0
  return {
    scores,
    cor,
    total,
    pct,
    grade: grade(pct),
    // Engleski nema bodove po pitanju; NCVVO ponderira cjeline, a to klijent
    // izvodi iz razine (examStructure.js) — ne iz podataka.
    bodovi: null,
    xpGain: calcXpGain(pct),
    topicBreakdown,
  }
}

export const engAdapter = Object.freeze({
  loadPublic,
  loadSecrets: loadEngSecrets,
  allowedExamKeys,
  score,
  publicFields: PUBLIC_QUESTION_FIELDS,
})
