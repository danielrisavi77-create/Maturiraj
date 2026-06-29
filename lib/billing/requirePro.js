/**
 * lib/billing/requirePro.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Server-side access guard for Pro-only route handlers.
 * Import and call at the top of any route handler that serves Pro features.
 *
 * Usage:
 *   import { requirePro } from '@/lib/billing/requirePro'
 *
 *   export async function POST(req) {
 *     const deny = await requirePro(req)
 *     if (deny) return deny    // 401 or 403 NextResponse
 *
 *     // ... Pro-only handler logic
 *   }
 *
 * The guard:
 *  1. Reads the session cookie — returns 401 if not logged in
 *  2. Checks DB subscription — returns 403 if not Pro
 *  3. Tracks ai_feature_blocked events for 403 responses
 *  4. Returns null when access is granted (handler continues)
 */

import { createServerClient } from '@supabase/ssr'
import { cookies }            from 'next/headers'
import { NextResponse }       from 'next/server'
import { getUserTier, TIER_RANK } from '@/lib/billing/subscriptions'
import { trackPaywallEventServer, PAYWALL_EVENTS } from '@/lib/analytics/paywallEvents'

/**
 * @param {Request} req
 * @param {{ minTier?: 'starter'|'pro', subject?: string, source?: string }} [opts]
 * @returns {Promise<NextResponse|null>}  null = access granted
 */
export async function requirePro(req, opts = {}) {
  const { minTier = 'pro', subject, source } = opts

  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll()       { return cookieStore.getAll() },
        setAll(toSet) { toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({
      error:  'Nisi prijavljen.',
      code:   'UNAUTHENTICATED',
    }, { status: 401 })
  }

  const tier = await getUserTier(user.id)
  const rank = TIER_RANK[tier] ?? 0
  const required = TIER_RANK[minTier] ?? 2

  if (rank < required) {
    trackPaywallEventServer(user.id, PAYWALL_EVENTS.AI_FEATURE_BLOCKED, {
      tier,
      subject: subject ?? null,
      source:  source  ?? null,
    }).catch(() => {})

    return NextResponse.json({
      error:      'Pristup je zaključan. Nadogradite na Pro plan.',
      code:       'ENTITLEMENT_DENIED',
      requiredTier: minTier,
      currentTier:  tier,
    }, { status: 403 })
  }

  return null // access granted
}

/**
 * Variant for Standard-level features.
 * @param {Request} req
 * @param {object} [opts]
 */
export async function requireStandardOrPro(req, opts = {}) {
  return requirePro(req, { ...opts, minTier: 'starter' })
}
