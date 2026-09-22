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
// ostati čitljivo i s klijentske strane (npr. da UI zna zašto je "Provjeri"
// ugašen). Ključeve i dalje vadi isključivo lib/exam-secrets/index.js.
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
 * - ispitni mod → 0. Pravi ispit s timerom je besplatan, ali ocjenu daje
 *   server; ključ u pregledniku bi cijeli zahvat poništio.
 * - vježbanje na demo ispitu → svi (dogovoreni besplatni sadržaj).
 * - vježbanje na ostalim ispitima → FREE_LIMIT, isti prag koji paywall već
 *   provodi u UI-ju (checkSimulatorAccess).
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
