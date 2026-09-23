// lib/discere/entitlements.js
// ─────────────────────────────────────────────────────────────────────────────
// Jedna matrica prava za sve Discere predmete: značajka → minimalni tier.
//
// Tier imena su kanonska imena iz billinga (free < starter < pro). Povijesni
// naziv 'standard' je alias za 'starter' i rješava ga normalizeTier, pa ova
// datoteka ne zna za dvostruko nazivlje.
//
// Namjerno bez server-only importa: matricu čita i UI (lokoti, CTA) i server
// (rute, adapteri). Ovdje nema ni ispitnih podataka ni ključeva (ADR-001).
import { TIER_RANK, normalizeTier, tierRank } from '../billing/getEffectiveTier.js'

export { TIER_RANK, normalizeTier }

/** Broj besplatnih pitanja u vježbanju — jedini izvor istine za tu brojku. */
export const FREE_PRACTICE_LIMIT = 3

/**
 * Značajka → minimalni tier.
 *
 * Odluka vlasnika (2026-09-23):
 *   free    — ispitni mod na svim ispitima, ocjena/XP/percentil, prva 3 pitanja
 *             vježbanja kao pregled;
 *   starter — cijelo vježbanje, razrada, po temama, SRS, greške, oznake, browse,
 *             nastavak sesije;
 *   pro     — sav AI, dnevni izazov, adaptivni mod.
 */
export const FEATURES = Object.freeze({
  // besplatno
  exam:             'free',   // rješavanje pravog ispita s timerom
  grade:            'free',   // ocjena, bodovi, XP, percentil, po cjelinama
  practice_preview: 'free',   // prva FREE_PRACTICE_LIMIT pitanja vježbanja

  // Standard
  practice:         'starter',
  review:           'starter', // pregled pitanja i točnih odgovora
  solution_steps:   'starter',
  topic_stats:      'starter',
  srs:              'starter',
  errors:           'starter',
  bookmarks:        'starter',
  browse:           'starter',
  resume_card:      'starter',

  // Pro
  ai_explain:       'pro',
  ai_analysis:      'pro',
  ai_plan:          'pro',
  ai_essay_grade:   'pro',
  daily:            'pro',
  adaptive:         'pro',
})

/** Ekran → značajka koja odlučuje smije li se uopće otvoriti. */
export const SCREEN_FEATURE = Object.freeze({
  home:      'exam',
  exams:     'exam',
  exam:      'exam',
  results:   'grade',
  practice:  'practice',
  review:    'review',
  stats:     'topic_stats',
  srs:       'srs',
  errors:    'errors',
  bookmarks: 'bookmarks',
  browse:    'browse',
  daily:     'daily',
  adaptive:  'adaptive',
  analysis:  'ai_analysis',
})

/**
 * Minimalni tier za značajku. Nepoznata značajka → 'pro' (fail closed).
 * @param {string} feature
 * @returns {'free'|'starter'|'pro'}
 */
export function minTier(feature) {
  return FEATURES[feature] ?? 'pro'
}

/**
 * Smije li korisnik s danim tierom koristiti značajku.
 * @param {string} feature
 * @param {string} tier  'free'|'starter'|'standard'|'pro' (sve ostalo → free)
 * @returns {boolean}
 */
export function canUse(feature, tier) {
  return tierRank(tier) >= (TIER_RANK[minTier(feature)] ?? TIER_RANK.pro)
}

/**
 * Na koji plan korisnik mora nadograditi da otključa značajku.
 * Vraća null ako je već ima (ili je značajka besplatna).
 *
 * Zamjena za stari paywall getUpgradeTarget koji je uvijek vraćao 'pro'.
 *
 * @param {string} feature
 * @param {string} [tier] trenutni tier; izostavljen = 'free'
 * @returns {'starter'|'pro'|null}
 */
export function upgradeTargetFor(feature, tier = 'free') {
  if (canUse(feature, tier)) return null
  const min = minTier(feature)
  return min === 'free' ? null : min
}

/** Značajka po ekranu; nepoznat ekran → null (ekran nije u matrici). */
export function featureForScreen(screen) {
  return SCREEN_FEATURE[screen] ?? null
}
