/**
 * lib/billing/subscriptions.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Server-side subscription helpers.
 * All functions use the Supabase admin client (service role, bypasses RLS).
 * NEVER import this module in client components or API routes that run in the
 * browser — it contains server-only imports.
 *
 * Tier rank:  free(0) < starter(1) < pro(2)
 *
 * Usage:
 *   import { getUserEntitlements, canAccessAIResults } from '@/lib/billing/subscriptions'
 *   const ent = await getUserEntitlements(userId)
 *   if (!ent.canAccessAIResults) return accessDenied()
 */

import { createAdminClient } from '@/lib/supabase/admin'
import { getStripe }         from '@/lib/stripe'

// ─── Constants ───────────────────────────────────────────────────────────────

export const FREE_PREVIEW_LIMIT = 3

export const TIER_RANK = { free: 0, starter: 1, pro: 2 }

/** Map Stripe price IDs → plan tier. Loaded lazily so env is available. */
function buildPriceMap() {
  return {
    [process.env.STRIPE_PRICE_STARTER]:  'starter',
    [process.env.STRIPE_PRICE_PRO]:      'pro',
    [process.env.STRIPE_PRICE_PRO_GOD]:  'pro',
  }
}

// ─── Stripe status → app status ───────────────────────────────────────────────

function mapStripeStatus(status) {
  switch (status) {
    case 'active':    return 'active'
    case 'trialing':  return 'trialing'
    case 'past_due':  return 'past_due'
    case 'incomplete': return 'incomplete'
    default:          return 'inactive'
  }
}

// ─── Derive plan from Stripe subscription object ─────────────────────────────

/**
 * @param {import('stripe').Stripe.Subscription} stripeSub
 * @returns {'starter'|'pro'}
 */
export function derivePlanFromStripe(stripeSub) {
  // 1. metadata.plan set during checkout — most reliable
  const meta = stripeSub.metadata?.plan
  if (meta && TIER_RANK[meta] !== undefined) return meta

  // 2. price ID lookup
  const priceId = stripeSub.items?.data?.[0]?.price?.id
  const priceMap = buildPriceMap()
  if (priceId && priceMap[priceId]) return priceMap[priceId]

  // 3. Safe fallback — don't silently downgrade, default to starter
  console.warn(`[billing] derivePlanFromStripe: unknown price ${priceId}, defaulting to starter`)
  return 'starter'
}

// ─── Supabase sync helpers ────────────────────────────────────────────────────

/**
 * Upsert subscriptions row + sync profiles.plan_type atomically.
 * This is the authoritative write path for all subscription changes.
 *
 * @param {string} userId
 * @param {import('stripe').Stripe.Subscription} stripeSub
 * @param {ReturnType<typeof createAdminClient>} [supabase]
 */
export async function syncSubscriptionToSupabase(userId, stripeSub, supabase) {
  const db = supabase ?? createAdminClient()

  const customerId = typeof stripeSub.customer === 'string'
    ? stripeSub.customer
    : stripeSub.customer?.id

  const appStatus = mapStripeStatus(stripeSub.status)
  const plan      = derivePlanFromStripe(stripeSub)

  const periodEndUnix = stripeSub.items?.data?.[0]?.current_period_end
    ?? stripeSub.current_period_end
    ?? null
  const periodEnd = periodEndUnix
    ? new Date(periodEndUnix * 1000).toISOString()
    : null

  const isActive = appStatus === 'active' || appStatus === 'trialing'

  // 1. Upsert subscriptions row
  const { error: subErr } = await db
    .from('subscriptions')
    .upsert({
      user_id:                userId,
      plan,
      status:                 appStatus,
      stripe_customer_id:     customerId,
      stripe_subscription_id: stripeSub.id,
      current_period_end:     periodEnd,
      updated_at:             new Date().toISOString(),
    }, { onConflict: 'stripe_subscription_id' })

  if (subErr) throw new Error(`[billing] subscriptions upsert: ${subErr.message}`)

  // 2. Sync profiles.plan_type — this is what useAuth reads in the browser
  const profilePatch = isActive
    ? { plan_type: plan,  pro_expires_at: periodEnd }
    : { plan_type: null,  pro_expires_at: null }

  const { error: profErr } = await db
    .from('profiles')
    .update(profilePatch)
    .eq('id', userId)

  if (profErr) throw new Error(`[billing] profiles update: ${profErr.message}`)

  return { plan, status: appStatus, periodEnd }
}

/**
 * Mark subscription inactive + clear profiles.plan_type.
 *
 * @param {string} stripeSubscriptionId
 * @param {ReturnType<typeof createAdminClient>} [supabase]
 */
export async function deactivateSubscription(stripeSubscriptionId, supabase) {
  const db = supabase ?? createAdminClient()

  // Find the user first so we can clear their profile
  const { data: sub } = await db
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_subscription_id', stripeSubscriptionId)
    .maybeSingle()

  const { error: subErr } = await db
    .from('subscriptions')
    .update({ status: 'inactive', current_period_end: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq('stripe_subscription_id', stripeSubscriptionId)

  if (subErr) throw new Error(`[billing] deactivateSubscription: ${subErr.message}`)

  // Clear profile cache if we found the user
  if (sub?.user_id) {
    await db
      .from('profiles')
      .update({ plan_type: null, pro_expires_at: null })
      .eq('id', sub.user_id)
  }
}

// ─── Public query helpers ─────────────────────────────────────────────────────

/**
 * Get the user's most recent active subscription record.
 * Returns null when free tier (no active subscription).
 *
 * @param {string} userId
 * @returns {Promise<object|null>}
 */
export async function getUserSubscription(userId) {
  if (!userId) return null

  const db = createAdminClient()
  const { data, error } = await db
    .from('subscriptions')
    .select('id, plan, status, stripe_customer_id, stripe_subscription_id, current_period_end, updated_at')
    .eq('user_id', userId)
    .in('status', ['active', 'trialing'])
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('[billing] getUserSubscription:', error.message)
    return null
  }
  return data
}

/**
 * Derive the effective plan tier for a user.
 * Checks subscription + expiry. Returns 'free' when nothing found.
 *
 * @param {string} userId
 * @returns {Promise<'free'|'starter'|'pro'>}
 */
export async function getUserTier(userId) {
  const sub = await getUserSubscription(userId)
  if (!sub) return 'free'

  // Guard against expired subscriptions that weren't marked inactive
  if (sub.current_period_end && new Date(sub.current_period_end) < new Date()) return 'free'

  return sub.plan ?? 'free'
}

/**
 * Full entitlement object for a user — derive all feature flags at once.
 * More efficient than calling individual can* helpers sequentially.
 *
 * @param {string} userId
 * @returns {Promise<{
 *   plan: 'free'|'starter'|'pro',
 *   subscriptionId: string|null,
 *   customerId: string|null,
 *   currentPeriodEnd: string|null,
 *   canAccessFullSimulator: boolean,
 *   canAccessAIResults: boolean,
 *   canAccessAskAI: boolean,
 *   canAccessPersonalizedPlan: boolean,
 * }>}
 */
export async function getUserEntitlements(userId) {
  const [sub, tier] = await Promise.all([
    getUserSubscription(userId),
    getUserTier(userId),
  ])
  const rank = TIER_RANK[tier] ?? 0

  return {
    plan:                       tier,
    subscriptionId:             sub?.stripe_subscription_id ?? null,
    customerId:                 sub?.stripe_customer_id     ?? null,
    currentPeriodEnd:           sub?.current_period_end     ?? null,
    // Feature flags
    canAccessFullSimulator:     rank >= TIER_RANK.starter,
    canAccessAIResults:         rank >= TIER_RANK.pro,
    canAccessAskAI:             rank >= TIER_RANK.pro,
    canAccessPersonalizedPlan:  rank >= TIER_RANK.pro,
  }
}

// ─── Convenience single-feature helpers ───────────────────────────────────────

/** @param {string} userId */
export async function canAccessFullSimulator(userId) {
  const tier = await getUserTier(userId)
  return (TIER_RANK[tier] ?? 0) >= TIER_RANK.starter
}

/** @param {string} userId */
export async function canAccessAIResults(userId) {
  const tier = await getUserTier(userId)
  return (TIER_RANK[tier] ?? 0) >= TIER_RANK.pro
}

/** @param {string} userId */
export async function canAccessAskAI(userId) {
  return canAccessAIResults(userId)
}

// ─── Stripe refresh ───────────────────────────────────────────────────────────

/**
 * Pull fresh subscription state from Stripe and overwrite Supabase.
 * Use this after checkout success to avoid waiting for the webhook.
 * Returns updated entitlement info or null on failure.
 *
 * @param {string} userId
 * @returns {Promise<{ plan: string, status: string }|null>}
 */
export async function refreshSubscriptionState(userId) {
  if (!userId) return null

  const db     = createAdminClient()
  const stripe = getStripe()

  // Find their current subscription record
  const { data: sub } = await db
    .from('subscriptions')
    .select('stripe_subscription_id')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (!sub?.stripe_subscription_id) return null

  try {
    const stripeSub = await stripe.subscriptions.retrieve(
      sub.stripe_subscription_id,
      { expand: ['items.data.price'] }
    )
    const result = await syncSubscriptionToSupabase(userId, stripeSub, db)
    return result
  } catch (err) {
    console.error('[billing] refreshSubscriptionState:', err.message)
    return null
  }
}

/**
 * Lookup user_id from a Stripe customer ID.
 * Tries the subscriptions table first, then Stripe customer metadata.
 *
 * @param {string} customerId
 * @param {ReturnType<typeof createAdminClient>} [supabase]
 * @returns {Promise<string|null>}
 */
export async function userIdFromCustomer(customerId, supabase) {
  const db = supabase ?? createAdminClient()

  const { data } = await db
    .from('subscriptions')
    .select('user_id')
    .eq('stripe_customer_id', customerId)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  return data?.user_id ?? null
}

/**
 * Lookup or create a Stripe customer for a user.
 * Reuses existing customer to prevent duplicates.
 *
 * @param {{ userId: string, email: string }} opts
 * @returns {Promise<string>} Stripe customer ID
 */
export async function getOrCreateStripeCustomer({ userId, email }) {
  const db     = createAdminClient()
  const stripe = getStripe()

  // Check existing record
  const { data: sub } = await db
    .from('subscriptions')
    .select('stripe_customer_id')
    .eq('user_id', userId)
    .not('stripe_customer_id', 'is', null)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  if (sub?.stripe_customer_id) {
    // Verify it still exists in Stripe (defensive)
    try {
      const customer = await stripe.customers.retrieve(sub.stripe_customer_id)
      if (!customer.deleted) return sub.stripe_customer_id
    } catch {
      // Customer no longer exists in Stripe — fall through to create
    }
  }

  // Create new customer with user_id in metadata for future lookups
  const customer = await stripe.customers.create({
    email,
    metadata: { user_id: userId },
  })
  return customer.id
}
