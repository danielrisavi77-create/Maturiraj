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
