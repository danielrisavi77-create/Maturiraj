import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import {
  getUserTier,
  getUserEntitlements,
  FREE_PREVIEW_LIMIT,
  TIER_RANK,
} from '@/lib/billing/subscriptions'
import { trackPaywallEventServer, PAYWALL_EVENTS } from '@/lib/analytics/paywallEvents'

// POST /api/discere/check-access
// ─────────────────────────────────────────────────────────────────────────────
// Server-side gate for simulator question access.
// Called before revealing each question answer or advancing past the free limit.
//
// Why server-enforce the preview limit?
// The question content and answers themselves are loaded from static data files,
// so the UI gate alone (disabling buttons) is sufficient for casual users.
// However, for AI-generated hints or server-fetched question content,
// this endpoint enforces the limit on the backend to prevent API-bypass attacks.
//
// Request body:
//   { simulatorId: string, questionIndex: number, subject?: string }
//
// Response:
//   200 { canProceed: true,  tier, freeLimit, remaining }
//   200 { canProceed: false, tier, freeLimit, remaining, reason: 'limit_reached'|'not_logged_in' }
//   401 (unauthenticated) — canProceed: false, reason: 'not_logged_in'

export async function POST(req) {
  // ── Auth ────────────────────────────────────────────────────────────────────
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll()            { return cookieStore.getAll() },
        setAll(toSet) { toSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return NextResponse.json({
      canProceed: false,
      reason:     'not_logged_in',
      tier:       'free',
      freeLimit:  FREE_PREVIEW_LIMIT,
      remaining:  0,
    }, { status: 401 })
  }

  // ── Parse + validate body ────────────────────────────────────────────────────
  const body = await req.json().catch(() => ({}))
  const { simulatorId, questionIndex, subject } = body

  if (typeof questionIndex !== 'number' || questionIndex < 0) {
    return NextResponse.json({ error: 'questionIndex musí být číslo >= 0' }, { status: 400 })
  }

  // ── Entitlement check ────────────────────────────────────────────────────────
  const tier = await getUserTier(user.id)
  const rank = TIER_RANK[tier] ?? 0

  // Standard and Pro have full access
  if (rank >= TIER_RANK.starter) {
    return NextResponse.json({
      canProceed: true,
      tier,
      freeLimit:  FREE_PREVIEW_LIMIT,
      remaining:  null, // null = unlimited
    })
  }

  // Free tier: first FREE_PREVIEW_LIMIT questions are accessible
  const canProceed = questionIndex < FREE_PREVIEW_LIMIT
  const remaining  = Math.max(0, FREE_PREVIEW_LIMIT - questionIndex - 1)

  if (!canProceed) {
    // Track the limit hit — only once per session would be ideal but that
    // requires session state. Tracking on server is fine; dedup in analytics.
    trackPaywallEventServer(user.id, PAYWALL_EVENTS.FREE_PREVIEW_LIMIT_HIT, {
      subject:       subject     ?? null,
      simulatorId:   simulatorId ?? null,
      questionIndex,
      tier,
      source: 'simulator',
    }).catch(() => {})
  }

  return NextResponse.json({
    canProceed,
    tier,
    freeLimit: FREE_PREVIEW_LIMIT,
    remaining,
    ...(canProceed ? {} : { reason: 'limit_reached' }),
  })
}
