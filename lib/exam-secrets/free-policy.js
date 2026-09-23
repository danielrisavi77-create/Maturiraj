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
 * Ispiti iz FREE_PRACTICE_EXAMS su demo u cijelosti (danas samo hrvatski), pa im
 * vježbanje nosi ključ za sva pitanja — to je zatečena proizvodna politika, ne
 * novo popuštanje.
 *
 * @param {string} subject
 * @param {string} examKey
 * @param {'exam'|'practice'} mode
 * @returns {number}
 */
export function freeKeyAllowance(subject, examKey, mode) {
  if (mode !== 'practice') return 0
  if (isFreePracticeExam(subject, examKey)) return UNLIMITED
  return FREE_LIMIT
}
