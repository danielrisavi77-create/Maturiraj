// lib/billing/getEffectiveTier.js
// ─────────────────────────────────────────────────────────────────────────────
// Jedan izvor istine za tier korisnika. Prije je isto pravilo postojalo na tri
// mjesta s tri različita rezultata: `plan_type` u proxy.js, `profiles.tier` u
// useAuth/engineu i `requireStandardOrPro` u API rutama.
//
// Namjerno bez server-only importa (Supabase admin, Stripe) — modul se koristi
// u proxyju (edge), u pregledniku (useAuth) i u API rutama.
//
// Rang: free(0) < starter(1) < pro(2)

export const TIER_RANK = { free: 0, starter: 1, pro: 2 }

// `profiles.tier` povijesno piše 'standard' za isti plan koji billing zove 'starter'.
const TIER_ALIASES = { standard: 'starter', pro_god: 'pro' }

const PAID_TIERS = new Set(['starter', 'pro'])

/** Kanonski naziv tiera; sve nepoznato → 'free' (fail closed). */
export function normalizeTier(raw) {
  if (typeof raw !== 'string') return 'free'
  const t = TIER_ALIASES[raw] ?? raw
  return Object.prototype.hasOwnProperty.call(TIER_RANK, t) ? t : 'free'
}

// Prazan datum = plan bez isteka. Neispravan datum → istekao (fail closed).
function stillValid(expiresAt) {
  if (expiresAt == null || expiresAt === '') return true
  const ts = new Date(expiresAt).getTime()
  return Number.isFinite(ts) && ts > Date.now()
}

/**
 * Efektivni tier iz retka profila/pretplate.
 * Prihvaća `plan_type` (profiles), `plan` (subscriptions) i `tier` (profiles.tier),
 * uz `pro_expires_at` odnosno `current_period_end` kao datum isteka.
 *
 * @param {object|null|undefined} row
 * @param {{ devBypass?: boolean }} [opts] devBypass mora biti eksplicitno true
 * @returns {'free'|'starter'|'pro'}
 */
export function getEffectiveTier(row, opts = {}) {
  if (opts.devBypass === true) return 'pro'
  if (!row) return 'free'

  const tier = normalizeTier(row.plan_type ?? row.plan ?? row.tier)
  if (!PAID_TIERS.has(tier)) return 'free'

  const expiresAt = row.pro_expires_at ?? row.current_period_end ?? null
  return stillValid(expiresAt) ? tier : 'free'
}

/** @param {string} tier */
export function tierRank(tier) {
  return TIER_RANK[normalizeTier(tier)] ?? 0
}

/** Ispunjava li `tier` minimalni traženi tier. */
export function tierAtLeast(tier, minTier) {
  return tierRank(tier) >= (TIER_RANK[normalizeTier(minTier)] ?? 0)
}

/** Bilo koji plaćeni plan (starter ili pro). */
export function isPaidTier(tier) {
  return tierAtLeast(tier, 'starter')
}

/** Samo Pro. */
export function isProTier(tier) {
  return tierAtLeast(tier, 'pro')
}
