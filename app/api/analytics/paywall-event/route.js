import { NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { createAdminClient } from '@/lib/supabase/admin'

// POST /api/analytics/paywall-event
// ─────────────────────────────────────────────────────────────────────────────
// Receives a paywall analytics event from the client and writes it to
// the paywall_events table. Uses admin write (bypasses RLS) so we can track
// even events where the user isn't logged in (user_id = null).
//
// Never returns 5xx to the client — analytics failures are silent.

const ALLOWED_EVENTS = new Set([
  'simulator_started', 'free_preview_limit_hit', 'paywall_opened',
  'paywall_dismissed', 'upgrade_cta_clicked', 'checkout_started',
  'checkout_completed', 'results_viewed', 'locked_analysis_seen',
  'ai_feature_blocked', 'pro_upgrade_from_results',
])

export const runtime = 'edge'

export async function POST(req) {
  try {
    const body = await req.json()
    const { event_type, subject, simulator_id, question_index, subscription_tier, source_screen, metadata } = body

    // Validate event type to prevent garbage data
    if (!event_type || !ALLOWED_EVENTS.has(event_type)) {
      return NextResponse.json({ ok: false }, { status: 200 }) // 200 so client doesn't retry
    }

    // Best-effort user ID from session cookie — okay to be null
    let userId = null
    try {
      const cookieStore = await cookies()
      const supabaseAnon = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
          cookies: {
            getAll() { return cookieStore.getAll() },
            setAll() {},
          },
        }
      )
      const { data: { user } } = await supabaseAnon.auth.getUser()
      userId = user?.id ?? null
    } catch {
      // Fine — anonymous events are valid
    }

    const db = createAdminClient()
    await db.from('paywall_events').insert({
      user_id:           userId,
      event_type,
      subject:           subject           ?? null,
      simulator_id:      simulator_id      ?? null,
      question_index:    question_index    ?? null,
      subscription_tier: subscription_tier ?? null,
      source_screen:     source_screen     ?? null,
      metadata:          typeof metadata === 'object' && metadata !== null ? metadata : {},
    })
  } catch {
    // Silently absorb — analytics must never break product flow
  }

  return NextResponse.json({ ok: true })
}
