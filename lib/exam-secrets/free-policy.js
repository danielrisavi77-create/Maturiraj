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
 * Koliko PRVIH pitanja ispita smije free korisniku stići s ključem: NIJEDNO.
 *
 * ODLUKA VLASNIKA: free korisnik nakon predaje dobiva točno/netočno po pitanju,
 * ali NIKAD sol/exp/why/steps — ni u vježbanju, ni na demo ispitu, ni na prva
 * tri pitanja. Dokle god je izuzetak veći od nule, odgovor na pitanje "sadrži li
 * ijedan mrežni odgovor ključ za free korisnika" glasi DA, a onda ga je dovoljno
 * dohvatiti za svih 70 ispita (jedan klik na skupni ekran) da free korisnik ima
 * 210 punih rješenja bez ijedne provjere prava na te ispite.
 *
 * Posljedica u UI-ju je namjerna i pokrivena: bez ključa nema "Provjeri" ni
 * AnswerHelpera u free vježbanju (EngleskiSimulator.js, `hasKeys`), a ocjenu
 * daje ocjenjivačka ruta.
 *
 * Funkcija ostaje jer je ugovor rute i jedino mjesto na kojem bi budući
 * legitiman izuzetak smio postojati — ne zato što ga danas ima.
 *
 * @param {string} subject
 * @param {string} examKey
 * @param {'exam'|'practice'} mode
 * @returns {number}
 */
export function freeKeyAllowance(subject, examKey, mode) {
  return 0
}
