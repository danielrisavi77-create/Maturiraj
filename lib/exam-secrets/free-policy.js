// lib/exam-secrets/free-policy.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001, točka 7: legitimni free izuzeci postoje na TOČNO JEDNOM mjestu. Sve
// ostalo je curenje, ne izuzetak.
//
// Brojke se ne dupliciraju: FREE_LIMIT i popis besplatnih ispita ostaju gdje su
// i bili (components/discere/paywall/paywallCopy.js odnosno paywallHelpers.js),
// jer ih čita i klijentski paywall. Ovdje se samo re-exportaju i pretvaraju u
// jedno serversko pravilo — koliko pitanja u odgovoru smije nositi ključ.
//
// Namjerno BEZ `server-only`: modul ne dodiruje tajni store, a pravilo mora
// ostati čitljivo i s klijentske strane (npr. da UI zna koliko pitanja u
// vježbanju smije imati "Provjeri"). Ključeve i dalje vadi isključivo
// lib/exam-secrets/index.js.
import {
  FREE_LIMIT,
  FREE_PRACTICE_EXAMS,
  isFreePracticeExam,
} from '@/components/discere/paywall/paywallHelpers'

export { FREE_LIMIT, FREE_PRACTICE_EXAMS, isFreePracticeExam }

/** Vrijednost za "svi ispiti/sva pitanja". */
export const UNLIMITED = Number.POSITIVE_INFINITY

/**
 * SOCIOLOGIJA — demo ispiti besplatni u VJEŽBANJU (Faza 2).
 *
 * Ovo je zatečena proizvodna politika, ne novo popuštanje: konstanta je dosad
 * živjela kao hardkodirani niz u app/discere/sociologija/SociologijaClient.jsx i
 * određivala `socGate` u engineu (vježbanje je za free otvoreno samo na ta dva
 * ispita). Po ADR točki 7 free izuzetak smije postojati na točno jednom mjestu,
 * pa je preseljena ovamo — sada je čita i klijent (DISCERE_CONFIG.allowed) i
 * poslužitelj (allowedExamKeys u lib/discere-access.ts, pa time i adapter
 * lib/exam-secrets/subjects/soc.js).
 */
export const SOC_FREE_DEMO = Object.freeze(['2025_ljeto', '2025_jesen'])

/**
 * Demo ispiti po predmetu koje free korisnik u VJEŽBANJU dobiva s ključem za SVA
 * pitanja (a ne samo prvih FREE_LIMIT). `FREE_PRACTICE_EXAMS` je isti pojam na
 * klijentskoj strani (danas samo hrvatski), pa se gleda oboje.
 */
const FREE_DEMO_EXAMS = Object.freeze({ soc: SOC_FREE_DEMO })

/** @param {string} subject @param {string} examKey */
export function isFreeDemoExam(subject, examKey) {
  if (isFreePracticeExam(subject, examKey)) return true
  const keys = FREE_DEMO_EXAMS[subject]
  return Array.isArray(keys) && keys.includes(examKey)
}

/**
 * Koliko PRVIH pitanja ispita smije free korisniku stići s ključem.
 *
 * ODLUKA VLASNIKA (1) + (5):
 *   • ISPITNI MOD → 0. Pravi ispit se rješava naslijepo, a nakon predaje free
 *     korisnik dobiva točno/netočno po pitanju (`scores` iz ocjenjivačke rute),
 *     nikad `sol`/`exp`/`why`/`steps`.
 *   • VJEŽBANJE → FREE_LIMIT. To je ISTI onaj javni preview koji paywall ionako
 *     pokazuje: free korisnik u vježbanju smije otvoriti samo prvih FREE_LIMIT
 *     pitanja (checkSimulatorAccess, `freePractice`), a bez ključa bi mu gumb
 *     „Provjeri“ i AnswerHelper tiho ne radili ništa. Svjesna, ograničena iznimka:
 *     3 od ~43 pitanja po ispitu.
 *
 * Iznimka je izvediva SAMO zato što je vezana uz pojedinačan dohvat:
 *   • skupni dohvat cijele banke ide s `mode='exam'` (examsLoader.js, BULK_MODE),
 *     pa 70 ispita × 3 ključa ne postoji ni kao slučajna posljedica;
 *   • ekrani koji cijelu banku traže za free su zaključani (PAID_SCREENS);
 *   • GET ruta free korisniku broji dohvate (FREE_EXAM_FETCH_LIMIT na sat), pa
 *     ni ručni ispis curl-om nije jeftin.
 *
 * Demo ispiti (FREE_PRACTICE_EXAMS za hrvatski, SOC_FREE_DEMO za sociologiju) su
 * besplatni u cijelosti, pa im vježbanje nosi ključ za sva pitanja — to je
 * zatečena proizvodna politika, ne novo popuštanje.
 *
 * @param {string} subject
 * @param {string} examKey
 * @param {'exam'|'practice'} mode
 * @returns {number}
 */
export function freeKeyAllowance(subject, examKey, mode) {
  if (mode !== 'practice') return 0
  if (isFreeDemoExam(subject, examKey)) return UNLIMITED
  return FREE_LIMIT
}

/**
 * Ista kvota, ali izražena u LISTOVIMA (pitanjima koja se doista rješavaju).
 *
 * Canonical shema ima grupne zadatke (`passage_group`, `audio_group`,
 * `media_response`) čija su prava pitanja u `children`. Kad bi se kvota brojila
 * po stavkama na vrhu popisa, „prva 3“ bi kod jezika značilo tri ULOMKA, dakle
 * 15 pitanja s ključem umjesto tri — tiho popuštanje politike zbog oblika
 * podataka. Brojanje po listovima daje isti broj za eng/soc (nemaju djece) i
 * točno 3 lista kod predmeta s grupama.
 *
 * @param {string} subject
 * @param {string} examKey
 * @param {'exam'|'practice'} mode
 * @returns {number}
 */
export function freeLeafAllowance(subject, examKey, mode) {
  return freeKeyAllowance(subject, examKey, mode)
}

/**
 * AMANDMAN ADR §5a — ručni zadaci nakon predaje.
 *
 * Rubrika, model odgovora i bodovi ručno ocjenjivanog zadatka vraćaju se NAKON
 * predaje SVIM tierovima. To nije oracle: ručni zadatak nema automatske
 * usporedbe, pa ruta korisniku ne može reći je li pogodio — bez rubrike i
 * modela nema nikakvu povratnu informaciju, a budžet od 5 predaja iz njih ne
 * izvlači nijedan dodatni bit (odgovor je slobodan tekst). Razrada (`solution`,
 * `explanation`) i dalje ostaje Standard sadržaj.
 *
 * Polja se vade iz SPOJENOG pitanja (javno + tajni store), pa je popis uzak i
 * eksplicitan.
 */
export const MANUAL_REVIEW_FIELDS = Object.freeze(['rubric', 'rubricDetails', 'modelAnswer', 'points'])

/**
 * @param {object} question  pitanje spojeno s tajnim poljima
 * @returns {object|null} polja za `review.manual[qid]`, ili null kad ih nema
 */
export function manualReviewFields(question) {
  if (!question || typeof question !== 'object') return null
  const out = {}
  if (question.rubric !== undefined) out.rubric = question.rubric
  if (question.rubricDetails !== undefined) out.rubricDetails = question.rubricDetails
  const modelAnswer = question.modelAnswer ?? question.solution?.modelAnswer
  if (modelAnswer !== undefined) out.modelAnswer = modelAnswer
  if (Number.isFinite(question.points)) out.points = question.points
  return Object.keys(out).length ? out : null
}
