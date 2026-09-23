// lib/exam-secrets/grade-policy.js
// ─────────────────────────────────────────────────────────────────────────────
// Brojke zaštite zajedničkih ispitnih ruta (ADR-001) — na jednom mjestu, IZVAN
// datoteke rute.
//
// ZAŠTO ZASEBAN MODUL: Next iz `app/**/route.js` prihvaća samo HTTP metode i
// poznate konfiguracijske izvoze (`dynamic`, `revalidate`, `runtime`…). Svaki
// dodatni `export` je greška builda ("Route ... does not match the required
// types"), pa su konstante koje testovi i klijent trebaju morale izaći iz rute.
//
// Modul je NAMJERNO bez ijednog uvoza: brojke čita i klijent (odbrojavanje do
// ponovne predaje u ExamPlayScreenu), pa bi uvoz `lib/rate-limit` — koji drži
// service-role klijent — povukao serverski ključ u klijentski graf. Sama
// potrošnja mjesta zato živi u `consumeRateLimitSlots` (lib/rate-limit.ts).

export const DAY_MS = 24 * 60 * 60 * 1000
export const HOUR_MS = 60 * 60 * 1000

/**
 * Najmanji razmak između dvije ocijenjene predaje istog ispita. Vrijedi za SVE
 * tierove — dvostruki klik i mrežni retry ne smiju stvoriti dva pokušaja.
 * Ponovljeni `attemptId` s istim odgovorima ovaj razmak ne osjeti (otisak
 * pokušaja), pa legitiman retry ne čeka.
 */
export const GRADE_MIN_INTERVAL_MS = 60 * 1000

/**
 * Dnevni budžet ocijenjenih predaja po (korisnik, ispit) — SAMO ZA FREE.
 *
 * ODLUKA VLASNIKA (3): plaćeni tier ionako dobiva pune ključeve u preglednik, pa
 * mu ocjenjivačka ruta nije oracle nego servis — budžet bi mu samo pojeo
 * legitimne pokušaje i ostavio ga bez retka u `sim_progress`. Štiti se free
 * korisnik, kojemu je `scores` jedini kanal prema ključu.
 */
export const GRADE_DAILY_BUDGET = 5

/**
 * Koliko od tih mjesta smije potrošiti vježbanje. Ostatak je rezerviran za
 * ispitni mod: bez toga pet predaja iz vježbanja ostavi korisnika koji je
 * navečer odradio 90-minutnu simulaciju bez ijednog rezultata.
 */
export const GRADE_PRACTICE_BUDGET = 3

/**
 * Koliko ispita free korisnik smije dohvatiti na sat.
 *
 * Free vježbanje po ODLUCI (5) nosi ključ za prvih FREE_LIMIT pitanja TOG
 * ispita. Bez ovog stropa taj namjerni preview postaje skupni ispis: 70 curl
 * poziva = 210 punih rješenja u minuti. Sa stropom je isti ispis posao od nekoliko
 * sati, a legitimnom korisniku 30 ispita na sat ne smeta (jedan ispit su najviše
 * dva dohvata — odabir načina pa vježbanje).
 *
 * Plaćeni tier NIJE ograničen: ekrani nad cijelom bankom rade 70 dohvata odjednom
 * i to im je zadano ponašanje.
 */
export const FREE_EXAM_FETCH_LIMIT = 30
export const FREE_EXAM_FETCH_WINDOW_MS = HOUR_MS

/**
 * Do koliko sekundi čekanja klijent sam odbrojava i ponavlja predaju.
 * Razmak od 60 s stane; dnevni budžet (sati) ne — tamo je iskrena poruka jedini
 * pošten odgovor.
 */
export const GRADE_AUTO_RETRY_MAX_SEC = 180

/*
 * Mjesta kvote se troše kroz `consumeRateLimitSlots` (lib/rate-limit.ts): ključevi
 * u `public.ai_rate_limit` s prozorom `windowMs`, dakle u tablici koju piše
 * isključivo service-role — za razliku od `sim_progress`, koju je korisnik po
 * zatečenom RLS-u smio brisati, pa bi resetirao vlastiti budžet. Prolaz kroz
 * mjesta ide redom, pa je k-ti zahtjev unutar prozora k provjera; kvote su zato
 * namjerno male (≤ 30).
 */

/** Mjesta budžeta: vježbanje od dna (0…), ispitni mod od vrha (…N-1). */
export function budgetSlots(examMode) {
  return examMode
    ? Array.from({ length: GRADE_DAILY_BUDGET }, (_, i) => GRADE_DAILY_BUDGET - 1 - i)
    : Array.from({ length: GRADE_PRACTICE_BUDGET }, (_, i) => i)
}
