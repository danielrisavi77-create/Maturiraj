import 'server-only' // @exam-secret
// lib/exam-secrets/registry.js
// ─────────────────────────────────────────────────────────────────────────────
// ADR-001: dvije rute za sve predmete, a subject-specifičnosti žive OVDJE, u
// adapteru, ne u ruti. Ruta je time jedino mjesto za auth, tier, rate limit i
// upis rezultata, a novi predmet je jedan novi adapter.
//
// UGOVOR ADAPTERA
//   loadPublic(examKey)   → Promise<{ key, meta, texts, qs } | null>
//                           qs su pitanja BEZ ključeva; null znači "ispit ne
//                           postoji" (ruta vraća 404).
//                           Iz `meta` ruta za ocjenjivanje čita dva neobavezna
//                           polja: `razinaCode` ('A'|'B', jer sim_progress ne
//                           poznaje druge oznake) i `fullLabel` (naziv za
//                           povijest; bez njega se koristi `label`). Sve ostalo
//                           u `meta` ide klijentu neizmijenjeno.
//   loadSecrets(examKey)  → Promise<Record<qid, object> | null>
//                           mapa tajnih polja po pitanju; u njoj se type/points/
//                           topic namjerno dupliciraju da ocjenjivanje ne mora
//                           dirati javni payload.
//   allowedExamKeys(tier) → Set<string> | string[] | null
//                           ispiti za koje taj tier smije dobiti KLJUČEVE.
//                           null = bez ograničenja po ispitu.
//   score(qs, secrets, answers)
//                         → { scores, cor, total, pct, grade, bodovi, xpGain,
//                             topicBreakdown }
//                           scores je mapa qid → true|false|null (null = pitanje
//                           koje se ne ocjenjuje automatski).
//   publicFields?         → readonly string[] — allowlist polja javnog pitanja.
//                           Preporučeno za svaki novi predmet: tada novo polje s
//                           ključem ispada samo od sebe (vidi stripQuestion).
//
// Registracija je eksplicitna i statična da je bundler vidi — novi predmet je
// jedan uvoz i jedan poziv `registerSubject` na dnu datoteke.
import { engAdapter } from './subjects/eng.js'
import { socAdapter } from './subjects/soc.js'

/** Metode bez kojih adapter nije upotrebljiv. */
const REQUIRED_METHODS = Object.freeze(['loadPublic', 'loadSecrets', 'allowedExamKeys', 'score'])

/** @type {Map<string, object>} */
const adapters = new Map()

/**
 * @param {string} subject
 * @param {object} adapter
 */
export function registerSubject(subject, adapter) {
  if (typeof subject !== 'string' || !subject) {
    throw new TypeError('registerSubject: predmet mora biti neprazan string.')
  }
  if (!adapter || typeof adapter !== 'object') {
    throw new TypeError(`registerSubject(${subject}): adapter mora biti objekt.`)
  }
  for (const method of REQUIRED_METHODS) {
    if (typeof adapter[method] !== 'function') {
      throw new TypeError(`registerSubject(${subject}): nedostaje metoda ${method}().`)
    }
  }
  adapters.set(subject, adapter)
  return adapter
}

/** @returns {object|null} */
export function getAdapter(subject) {
  if (typeof subject !== 'string') return null
  return adapters.get(subject) ?? null
}

/** @returns {string[]} */
export function listSubjects() {
  return [...adapters.keys()].sort()
}

/** Samo za testove — produkcijska registracija je statična. */
export function resetRegistry() {
  adapters.clear()
}

/**
 * Ugrađeni predmeti. Testovi koji rade s lažnim adapterom zovu `resetRegistry()`
 * pa ovo vrate pozivom `registerBuiltInSubjects()` — bez toga bi jedan test
 * ugasio predmet svima ostalima u istoj datoteci.
 */
export function registerBuiltInSubjects() {
  registerSubject('eng', engAdapter)
  registerSubject('soc', socAdapter)
}

registerBuiltInSubjects()

/**
 * Normalizira `allowedExamKeys` u Set. null/undefined znači "bez ograničenja",
 * pa pozivatelj razlikuje "nema popisa" od "prazan popis".
 *
 * @param {Set<string>|string[]|null|undefined} keys
 * @returns {Set<string>|null}
 */
export function asKeySet(keys) {
  if (keys == null) return null
  if (keys instanceof Set) return keys
  if (Array.isArray(keys)) return new Set(keys)
  return null
}
