/**
 * lib/entitlements.js
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all feature access rules on maturiraj.hr.
 *
 * Product tiers:
 *   FREE     — no account required (or free account, plan_type = null)
 *   STANDARD — paid plan: plan_type = 'starter'
 *   PRO      — paid plan: plan_type = 'pro'
 *
 * Usage:
 *   import { canAccess, FEATURES, getUpgradeTarget } from '@/lib/entitlements'
 *   const ok = canAccess(FEATURES.KALKULATOR_RESULTS, { isPaid, isPro })
 *
 * Middleware uses its own DB check (see middleware.js).
 * This module is for CLIENT-SIDE UI gating.
 */

// ─── Plan rank ───────────────────────────────────────────────────────────────
const PLAN_RANK = { null: 0, starter: 1, pro: 2 }

// ─── Feature registry ────────────────────────────────────────────────────────
export const FEATURES = {
  // ── FREE (no account, no plan) ─────────────────────────────────────────────
  LANDING:                 { minPlan: null,       label: 'Početna stranica'          },
  TERMINI:                 { minPlan: null,       label: 'Termini ispita'            },
  FORMULE:                 { minPlan: null,       label: 'Formule'                   },
  CHECKLIST:               { minPlan: null,       label: 'Checklist za mature'       },
  KALKULATOR_BASIC:        { minPlan: null,       label: 'Kalkulator (unos)'         },
  PRO_PAGE:                { minPlan: null,       label: 'Stranica s planovima'      },

  // ── REQUIRES LOGIN ─────────────────────────────────────────────────────────
  SKRIPTE:                 { minPlan: null,       requiresAuth: true, label: 'Skripte'                  },
  DASHBOARD:               { minPlan: null,       requiresAuth: true, label: 'Dashboard'                },
  PLAN_UCENJA_BUILDER:     { minPlan: null,       requiresAuth: true, label: 'Graditelj plana učenja'   },

  // ── STANDARD (starter OR pro) ──────────────────────────────────────────────
  DISCERE_CORE:            { minPlan: 'starter',  label: 'Discere simulator'          },
  KALKULATOR_RESULTS:      { minPlan: 'starter',  label: 'Kalkulator — rezultati'     },
  STUDY_PLAN_SAVE:         { minPlan: 'starter',  label: 'Spremi plan učenja'         },
  STUDY_PLAN_DASHBOARD:    { minPlan: 'starter',  label: 'Pratilica plana učenja'     },
  PROGRESS_BASIC:          { minPlan: 'starter',  label: 'Praćenje napretka'          },

  // ── STANDARD — Discere simulator (full, no preview limit) ─────────────────
  DISCERE_SIMULATOR_FULL:  { minPlan: 'starter',  label: 'Discere — cijeli simulator'    },

  // ── PRO only ───────────────────────────────────────────────────────────────
  AI_PROFESOR:             { minPlan: 'pro',      label: 'AI Profesor'                },
  STUDY_PLAN_ADAPTIVE:     { minPlan: 'pro',      label: 'Adaptivni plan učenja'      },
  KALKULATOR_ADVANCED:     { minPlan: 'pro',      label: 'Kalkulator — napredne analize' },
  KALKULATOR_AI_CHAT:      { minPlan: 'pro',      label: 'Kalkulator — AI savjetnik'  },
  KALKULATOR_SHARE:        { minPlan: 'pro',      label: 'Dijeli rezultate'           },
  KALKULATOR_RECOMMENDATIONS:{ minPlan: 'pro',   label: 'Personalizirane preporuke'  },
  KALKULATOR_VISUALIZATION:{ minPlan: 'pro',      label: 'Vizualizacija bodova'       },
  KALKULATOR_SIMULATION:   { minPlan: 'pro',      label: 'Simulacija bodova'          },
  KALKULATOR_ENTRANCE_EXAM:{ minPlan: 'pro',      label: 'Prijemni ispiti'            },
  DISCERE_ALL_SUBJECTS:    { minPlan: 'pro',      label: 'Svi Discere predmeti'       },
  PLAN_ADAPTIVE_DASHBOARD: { minPlan: 'pro',      label: 'Napredna analitika plana'   },
  PROGRESS_ADVANCED:       { minPlan: 'pro',      label: 'Napredna analitika napretka'},
  // ── Discere Pro features ────────────────────────────────────────────────────
  DISCERE_AI_RESULTS:      { minPlan: 'pro',      label: 'Discere — AI analiza rezultata'     },
  DISCERE_AI_PER_TASK:     { minPlan: 'pro',      label: 'Discere — Pitaj AI o zadatku'       },
  DISCERE_WEAK_AREAS:      { minPlan: 'pro',      label: 'Discere — Slaba područja'           },
  DISCERE_PERSONALIZED_PLAN:{ minPlan: 'pro',     label: 'Discere — Personalizirani plan'     },
}

// ─── Access check ─────────────────────────────────────────────────────────────
/**
 * @param {string} feature  — one of FEATURES keys
 * @param {{ isPaid: boolean, isPro: boolean, user: object|null }} ctx
 * @returns {boolean}
 */
export function canAccess(feature, { isPaid = false, isPro = false, user = null } = {}) {
  const def = FEATURES[feature]
  if (!def) return false
  if (def.requiresAuth && !user) return false
  const planType = isPro ? 'pro' : isPaid ? 'starter' : null
  const userRank = PLAN_RANK[planType] ?? 0
  const reqRank  = PLAN_RANK[def.minPlan] ?? 0
  return userRank >= reqRank
}

// ─── Upgrade target  ──────────────────────────────────────────────────────────
/**
 * Returns which plan a user needs to upgrade to for a given feature.
 * @returns {'starter' | 'pro' | null}  null = already has access
 */
export function getUpgradeTarget(feature, { isPaid = false, isPro = false } = {}) {
  if (canAccess(feature, { isPaid, isPro, user: isPaid ? {} : null })) return null
  const def = FEATURES[feature]
  if (!def) return null
  return def.minPlan ?? null
}

// ─── Plan labels  ─────────────────────────────────────────────────────────────
export function getPlanLabel({ isPaid, isPro }) {
  if (isPro)    return 'PRO'
  if (isPaid)   return 'Standard'
  return 'Besplatni'
}

export function getPlanBadge({ isPaid, isPro }) {
  if (isPro)    return { emoji: '✨', label: 'PRO plan',      color: 'var(--blue)'  }
  if (isPaid)   return { emoji: '⭐', label: 'Standard plan', color: 'var(--gold)'  }
  return          { emoji: '🔒', label: 'Besplatni',     color: 'var(--muted)' }
}

// ─── Upgrade CTA text  ────────────────────────────────────────────────────────
/**
 * Returns button/CTA text for upgrading to access a feature.
 */
export function getUpgradeText(feature, { isPaid = false } = {}) {
  const target = getUpgradeTarget(feature, { isPaid })
  if (!target) return null
  if (target === 'starter') return 'Otključaj uz Standard — od 6,99€/mj →'
  if (target === 'pro')     return 'Otključaj uz Pro — 19,99€/mj →'
  return 'Otključaj →'
}

export function getUpgradePath(feature, { isPaid = false, from = '' } = {}) {
  const target = getUpgradeTarget(feature, { isPaid })
  if (!target) return null
  const fromParam = from ? `?from=${from}&plan=${target}` : `?plan=${target}`
  return `/pro${fromParam}`
}
