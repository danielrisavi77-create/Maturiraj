// lib/discere/modes.js
// ─────────────────────────────────────────────────────────────────────────────
// Tablica modova rada simulatora. Jedno mjesto koje zna ima li mod timer, koji
// ga entitlement otvara, koliko ključeva free korisnik smije dobiti, je li
// sesija nastavljiva, kakav sintetički ključ nosi i upisuje li se u napredak.
//
// Bez ispitnih podataka i bez ključeva (ADR-001).
import { FREE_PRACTICE_LIMIT } from './entitlements.js'

/**
 * Pravi (službeni) ispit: '2024_ljeto', '2016_ljeto_B', 'vis_2015_jesen'.
 * Virtualne sesije ('filter_session_…', 'errors_session', 'daily_…') nemaju
 * godinu na početku i ne idu u `sim_progress`. Isto pravilo kao engleski
 * (lib/engleski-simulator/cloudSync.js), samo na jednom mjestu za sve predmete.
 */
const REAL_EXAM_RE = /^(vis_)?\d{4}_/

/**
 * @param {string} [key]
 * @returns {boolean}
 */
export function isRealExamKey(key) {
  return typeof key === 'string' && REAL_EXAM_RE.test(key)
}

/**
 * @typedef {Object} ModeDef
 * @property {string}  feature            entitlement koji otvara mod
 * @property {boolean} timer              ima li mod odbrojavanje
 * @property {number}  keysForFree        koliko prvih pitanja free korisnik dobiva s ključem
 * @property {boolean} resumable          smije li se sesija nastaviti nakon izlaza
 * @property {?string} syntheticKeyPrefix prefiks sintetičkog ključa sesije (null = pravi ispit)
 * @property {boolean} writesProgress     upisuje li rezultat u `sim_progress`
 */

/** @type {Readonly<Record<string, ModeDef>>} */
export const MODES = Object.freeze({
  // Pravi ispit s timerom — besplatan svakom prijavljenom korisniku, ali se
  // rješava naslijepo: nijedno pitanje ne nosi ključ prije predaje.
  exam: Object.freeze({
    feature: 'exam',
    timer: true,
    keysForFree: 0,
    resumable: true,
    syntheticKeyPrefix: null,
    writesProgress: true,
  }),

  // Vježbanje: free vidi prvih FREE_PRACTICE_LIMIT pitanja (practice_preview),
  // cijeli ispit otvara Standard.
  practice: Object.freeze({
    feature: 'practice',
    timer: false,
    keysForFree: FREE_PRACTICE_LIMIT,
    resumable: true,
    syntheticKeyPrefix: null,
    writesProgress: false,
  }),

  practice_timed: Object.freeze({
    feature: 'practice',
    timer: true,
    keysForFree: FREE_PRACTICE_LIMIT,
    resumable: true,
    syntheticKeyPrefix: null,
    writesProgress: false,
  }),

  // Izbor pitanja po temi/tipu iz cijele banke.
  filter: Object.freeze({
    feature: 'practice',
    timer: false,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'filter_session_',
    writesProgress: false,
  }),

  errors: Object.freeze({
    feature: 'errors',
    timer: false,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'errors_session',
    writesProgress: false,
  }),

  srs: Object.freeze({
    feature: 'srs',
    timer: false,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'srs_session',
    writesProgress: false,
  }),

  daily: Object.freeze({
    feature: 'daily',
    timer: true,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'daily_',
    writesProgress: false,
  }),

  adaptive: Object.freeze({
    feature: 'adaptive',
    timer: false,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'adaptive_',
    writesProgress: false,
  }),
})

/** Popis imena modova (stabilan redoslijed). */
export const MODE_IDS = Object.freeze(Object.keys(MODES))

/**
 * Definicija moda; nepoznat mod → null (pozivatelj tada gasi mogućnost).
 * @param {string} mode
 * @returns {ModeDef|null}
 */
export function getMode(mode) {
  return MODES[mode] ?? null
}

/**
 * Entitlement koji otvara mod; nepoznat mod → 'adaptive' nije dobar fallback,
 * pa vraćamo null i pozivatelj gate-a fail-closed.
 * @param {string} mode
 * @returns {string|null}
 */
export function featureForMode(mode) {
  return MODES[mode]?.feature ?? null
}
