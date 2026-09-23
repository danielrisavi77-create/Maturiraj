// lib/discere/modes.js
// ─────────────────────────────────────────────────────────────────────────────
// Tablica modova rada simulatora. Jedno mjesto koje zna ima li mod timer, koji
// ga entitlement otvara, koliko ključeva free korisnik smije dobiti, je li
// sesija nastavljiva, kakav sintetički ključ nosi i upisuje li se u napredak.
//
// Bez ispitnih podataka i bez ključeva (ADR-001).
import { FREE_PRACTICE_LIMIT, canUse } from './entitlements.js'

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
 * @property {string}  feature            entitlement koji otvara mod u cijelosti
 * @property {?string} previewFeature     entitlement koji otvara samo prvih `keysForFree` pitanja (null = nema pregleda)
 * @property {boolean} timer              ima li mod odbrojavanje
 * @property {number}  keysForFree        koliko prvih pitanja nosi pregled (0 kad previewFeature nema)
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
    previewFeature: null,
    timer: true,
    keysForFree: 0,
    resumable: true,
    syntheticKeyPrefix: null,
    writesProgress: true,
  }),

  // Vježbanje: free vidi prvih FREE_PRACTICE_LIMIT pitanja (practice_preview),
  // cijeli ispit otvara Standard. `feature` i `previewFeature` su dva različita
  // prava nad istim modom — miri ih keysForTier(), nikad sam `feature`.
  practice: Object.freeze({
    feature: 'practice',
    previewFeature: 'practice_preview',
    timer: false,
    keysForFree: FREE_PRACTICE_LIMIT,
    resumable: true,
    syntheticKeyPrefix: null,
    writesProgress: false,
  }),

  practice_timed: Object.freeze({
    feature: 'practice',
    previewFeature: 'practice_preview',
    timer: true,
    keysForFree: FREE_PRACTICE_LIMIT,
    resumable: true,
    syntheticKeyPrefix: null,
    writesProgress: false,
  }),

  // Izbor pitanja po temi/tipu iz cijele banke.
  filter: Object.freeze({
    feature: 'practice',
    previewFeature: null,
    timer: false,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'filter_session_',
    writesProgress: false,
  }),

  errors: Object.freeze({
    feature: 'errors',
    previewFeature: null,
    timer: false,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'errors_session',
    writesProgress: false,
  }),

  srs: Object.freeze({
    feature: 'srs',
    previewFeature: null,
    timer: false,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'srs_session',
    writesProgress: false,
  }),

  daily: Object.freeze({
    feature: 'daily',
    previewFeature: null,
    timer: true,
    keysForFree: 0,
    resumable: false,
    syntheticKeyPrefix: 'daily_',
    writesProgress: false,
  }),

  adaptive: Object.freeze({
    feature: 'adaptive',
    previewFeature: null,
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
 *
 * `preview: true` traži pravo za pregled (prvih `keysForFree` pitanja). Mod bez
 * pregleda vraća isti puni entitlement, pa pozivatelj ne dobiva lažno otvaranje.
 *
 * @param {string} mode
 * @param {{ preview?: boolean }} [opts]
 * @returns {string|null}
 */
export function featureForMode(mode, { preview = false } = {}) {
  const def = MODES[mode]
  if (!def) return null
  return preview ? (def.previewFeature ?? def.feature) : def.feature
}

/**
 * Koliko pitanja moda smije nositi ključ za dani tier — jedini ispravan način
 * da se pomire `feature` i `keysForFree`.
 *
 * Bez ovoga su moguća dva suprotna čitanja tablice: gate samo po `feature`
 * (free korisniku zatvara vježbanje i guta 3 besplatna pitanja) i čitanje samo
 * po `keysForFree` (daje 3 pitanja bez ijedne provjere prava).
 *
 * @param {string} mode
 * @param {string} tier 'free'|'starter'|'standard'|'pro'
 * @returns {number} Infinity = cijeli ispit, 0 = mod je zaključan
 */
export function keysForTier(mode, tier) {
  const def = MODES[mode]
  if (!def) return 0
  if (canUse(def.feature, tier)) return Infinity
  if (def.previewFeature && canUse(def.previewFeature, tier)) return def.keysForFree
  return 0
}

/**
 * Smije li tier uopće otvoriti mod (makar samo pregled).
 * @param {string} mode
 * @param {string} tier
 * @returns {boolean}
 */
export function canOpenMode(mode, tier) {
  return keysForTier(mode, tier) > 0
}
