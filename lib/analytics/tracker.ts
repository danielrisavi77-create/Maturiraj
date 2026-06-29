import { createClient } from '@supabase/supabase-js'
import type { EventName, EventPayload } from './events'
import { COPY_VERSION } from '@/lib/content/copy'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

// ─── Sampling ────────────────────────────────────────────────────────────────
//
// Enable sampling by setting NEXT_PUBLIC_ANALYTICS_SAMPLING_ENABLED=true in
// .env.production once you hit ~10k daily events.
// In development and when the flag is absent, ALL events are always tracked.
//
// Critical events (billing, threshold crossings, auth, A/B conversions) are
// ALWAYS tracked at 100% — sampling only applies to high-volume ambient noise.

const SAMPLING_ENABLED =
  process.env.NEXT_PUBLIC_ANALYTICS_SAMPLING_ENABLED === 'true'

/**
 * Per-event sample rate (0.0 – 1.0).
 * Events absent from this map default to 1.0 (always track).
 */
const SAMPLE_RATES: Partial<Record<EventName, number>> = {
  // High-volume, non-critical: 20%
  kalkulator_input:        0.2,
  search_focused:          0.2,
  search_query:            0.2,
  search_filter_changed:   0.2,
  search_filter_cleared:   0.2,
  prijemni_page_view:      0.2,
  prijemni_studij_view:    0.2,
  prijemni_tab_click:      0.2,
  prijemni_fakultet_view:  0.2,
  medicinar_page_view:     0.2,
  story_section_view:      0.2,
  urgency_banner_shown:    0.2,
  compare_toggle:          0.2,
}

/**
 * Events that are ALWAYS tracked at 100%, even when sampling is enabled.
 * Covers anything used for revenue attribution, funnel analysis, or A/B.
 */
const ALWAYS_FULL = new Set<EventName>([
  // Billing & conversion
  'billing_upgrade_click',
  'billing_checkout_started',
  'billing_upgrade_completed',
  'billing_downgrade',
  'billing_churn',
  // Kalkulator magic moments
  'kalkulator_threshold_crossed',
  'kalkulator_result',
  'kalkulator_gap_cta_click',
  // Auth
  'auth_signup_started',
  'auth_signup_completed',
  'auth_login_completed',
  'auth_logout',
  'auth_guest_scores_migrated',
  // Onboarding
  'onboarding_completed',
  'onboarding_skipped',
  // A/B
  'ab_variant_assigned',
  'ab_conversion',
  // Stories
  'story_submitted',
  'story_approved',
  'story_rejected',
  // Target & matcher (funnel)
  'target_added',
  'target_removed',
  'matcher_saved',
  'compare_share',
  // Paywall
  'paywall_hit',
  'paywall_upgrade_click',
])

function shouldTrack(name: EventName): boolean {
  if (!SAMPLING_ENABLED) return true
  if (ALWAYS_FULL.has(name)) return true
  const rate = SAMPLE_RATES[name] ?? 1.0
  return rate >= 1.0 || Math.random() < rate
}

const SESSION_ID_KEY = 'mh_analytics_session'

function getSessionId(): string {
  if (typeof window === 'undefined') return 'ssr'
  try {
    let id = sessionStorage.getItem(SESSION_ID_KEY)
    if (!id) {
      id = typeof crypto !== 'undefined'
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(36).slice(2)}`
      sessionStorage.setItem(SESSION_ID_KEY, id)
    }
    return id
  } catch {
    return 'storage-denied'
  }
}

let userIdCache: string | null = null

async function getUserId(): Promise<string | null> {
  if (userIdCache !== undefined) return userIdCache
  try {
    const { data: { session } } = await supabase.auth.getSession()
    userIdCache = session?.user?.id ?? null
    return userIdCache
  } catch {
    return null
  }
}

// Debounce map za high-frequency eventi (search, kalkulator input)
const debouncedEvents = new Map<string, ReturnType<typeof setTimeout>>()

function debounce(key: string, fn: () => void, ms: number) {
  clearTimeout(debouncedEvents.get(key))
  debouncedEvents.set(key, setTimeout(() => { fn(); debouncedEvents.delete(key) }, ms))
}

// ─── Batch buffer ─────────────────────────────────────────────────────────────
//
// Non-critical events are buffered and sent in a single insert every 5 seconds.
// Critical events (billing, threshold, auth, A/B) always bypass the buffer and
// are inserted immediately so they're never lost to a tab-close or timer gap.

const BATCH_INTERVAL_MS = 5_000

type DbRow = {
  session_id: string
  user_id: string | null
  event_name: string
  fakultet_id: string | null
  studij_id: string | null
  tab: string | null
  meta: Record<string, unknown>
  url: string | null
  referrer: string | null
}

const buffer: DbRow[] = []
let batchTimer: ReturnType<typeof setInterval> | null = null

function ensureBatchTimer() {
  if (batchTimer !== null) return
  batchTimer = setInterval(flushBuffer, BATCH_INTERVAL_MS)
}

function flushBuffer(): void {
  if (buffer.length === 0) return
  const batch = buffer.splice(0)
  void Promise.resolve(supabase.from('analytics_events').insert(batch)).catch(() => {})
}

// Flush remaining events when tab is hidden or navigated away
if (typeof window !== 'undefined') {
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') flushBuffer()
  })
  window.addEventListener('pagehide', flushBuffer)
}

/**
 * Main tracking function.
 * Critical events insert immediately; all others are buffered and flushed in batch.
 */
export async function trackEvent(payload: EventPayload): Promise<void> {
  if (typeof window === 'undefined') return  // no-op on server

  // Dev mode: log umjesto inserting
  if (process.env.NODE_ENV === 'development') {
    const sampled = shouldTrack(payload.name)
    console.debug('[Analytics]', payload.name, sampled ? '✓' : '⊘ sampled-out', payload)
    return
  }

  // Sampling gate — drop non-critical high-volume events
  if (!shouldTrack(payload.name)) return

  try {
    const userId = await getUserId()
    const row: DbRow = {
      session_id:  getSessionId(),
      user_id:     userId,
      event_name:  payload.name,
      fakultet_id: payload.fakultet_id ?? null,
      studij_id:   payload.studij_id ?? null,
      tab:         payload.tab ?? null,
      meta:        { copy_version: COPY_VERSION, ...payload.meta },
      url:         window.location.pathname,
      referrer:    document.referrer || null,
    }

    if (ALWAYS_FULL.has(payload.name)) {
      // Critical — insert immediately, do not buffer
      await supabase.from('analytics_events').insert(row)
    } else {
      // Non-critical — add to buffer, ensure timer is running
      buffer.push(row)
      ensureBatchTimer()
    }
  } catch {
    // Silent fail — analytics ne smije blokirati UI
  }
}

/**
 * Debounced tracking — za search queries, kalkulator input.
 */
export function trackDebounced(payload: EventPayload, ms = 800): void {
  const key = `${payload.name}_${payload.studij_id ?? ''}`
  debounce(key, () => trackEvent(payload), ms)
}

/**
 * Convenience: build track function za komponente (zamijeni track prop pattern).
 * Sada sve komponente koriste isti interface.
 */
export function buildTracker(defaults: Partial<EventPayload> = {}) {
  return (
    name: EventName,
    fakultet_id?: string | null,
    studij_id?: string | null,
    tab?: string | null,
    meta?: Record<string, unknown>
  ) => trackEvent({ name, fakultet_id, studij_id, tab, meta, ...defaults })
}
