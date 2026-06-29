/**
 * lib/analytics/paywallEvents.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Fire-and-forget event tracking for all paywall interactions.
 * Uses Supabase anon client so it works from both client and server without
 * needing the service role key.
 *
 * All writes go to the `paywall_events` table.
 * Failures are silently swallowed — analytics must never break product flow.
 *
 * ─── Event types ─────────────────────────────────────────────────────────────
 * simulator_started          user opens a simulator
 * free_preview_limit_hit     free user hits Q3
 * paywall_opened             PaywallModal becomes visible
 * paywall_dismissed          user closes modal without upgrading
 * upgrade_cta_clicked        primary CTA clicked
 * checkout_started           /api/checkout called
 * checkout_completed         Stripe success page reached
 * results_viewed             results page seen
 * locked_analysis_seen       LockedAnalysisSection rendered
 * ai_feature_blocked         server rejected AI request (403)
 * pro_upgrade_from_results   upgrade CTA clicked from results page
 *
 * Usage (client):
 *   import { trackPaywallEvent, PAYWALL_EVENTS } from '@/lib/analytics/paywallEvents'
 *   trackPaywallEvent(PAYWALL_EVENTS.PAYWALL_OPENED, { subject: 'mat', tier: 'free', source: 'simulator' })
 *
 * Usage (server route handler):
 *   import { trackPaywallEventServer } from '@/lib/analytics/paywallEvents'
 *   await trackPaywallEventServer(userId, PAYWALL_EVENTS.AI_FEATURE_BLOCKED, { subject: 'mat' })
 */

// ─── Event name constants ─────────────────────────────────────────────────────

export const PAYWALL_EVENTS = Object.freeze({
  SIMULATOR_STARTED:        'simulator_started',
  FREE_PREVIEW_LIMIT_HIT:   'free_preview_limit_hit',
  PAYWALL_OPENED:           'paywall_opened',
  PAYWALL_DISMISSED:        'paywall_dismissed',
  UPGRADE_CTA_CLICKED:      'upgrade_cta_clicked',
  CHECKOUT_STARTED:         'checkout_started',
  CHECKOUT_COMPLETED:       'checkout_completed',
  RESULTS_VIEWED:           'results_viewed',
  LOCKED_ANALYSIS_SEEN:     'locked_analysis_seen',
  AI_FEATURE_BLOCKED:       'ai_feature_blocked',
  PRO_UPGRADE_FROM_RESULTS: 'pro_upgrade_from_results',
})

// ─── Client-side tracker ─────────────────────────────────────────────────────
// Uses the public anon API endpoint so no service role key leaks to the browser.

/**
 * Track a paywall event from client components.
 * Silently fails — never throws.
 *
 * @param {string} eventType  — one of PAYWALL_EVENTS values
 * @param {{
 *   subject?: string,
 *   simulatorId?: string,
 *   questionIndex?: number,
 *   tier?: string,
 *   source?: string,
 *   [key: string]: any,
 * }} payload
 */
export function trackPaywallEvent(eventType, payload = {}) {
  // Delegate to a lightweight API route to avoid Supabase client imports
  // in every component bundle.
  const { subject, simulatorId, questionIndex, tier, source, ...rest } = payload

  fetch('/api/analytics/paywall-event', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      event_type:        eventType,
      subject:           subject  ?? null,
      simulator_id:      simulatorId ?? null,
      question_index:    questionIndex ?? null,
      subscription_tier: tier    ?? null,
      source_screen:     source  ?? null,
      metadata:          rest,
    }),
    // keepalive so it fires even if user navigates away immediately
    keepalive: true,
  }).catch(() => { /* silently discard network errors */ })
}

// ─── Server-side tracker ─────────────────────────────────────────────────────
// Uses admin client for server-only callsites (route handlers, server actions).

/**
 * Track a paywall event from a server-side route handler.
 * Silently fails — never throws.
 *
 * @param {string|null} userId
 * @param {string} eventType
 * @param {{
 *   subject?: string,
 *   simulatorId?: string,
 *   questionIndex?: number,
 *   tier?: string,
 *   source?: string,
 *   [key: string]: any,
 * }} payload
 */
export async function trackPaywallEventServer(userId, eventType, payload = {}) {
  try {
    // Dynamic import so this file stays importable from client (where admin isn't available)
    const { createAdminClient } = await import('@/lib/supabase/admin')
    const db = createAdminClient()

    const { subject, simulatorId, questionIndex, tier, source, ...rest } = payload

    await db.from('paywall_events').insert({
      user_id:           userId   ?? null,
      event_type:        eventType,
      subject:           subject  ?? null,
      simulator_id:      simulatorId ?? null,
      question_index:    questionIndex ?? null,
      subscription_tier: tier     ?? null,
      source_screen:     source   ?? null,
      metadata:          rest,
    })
  } catch {
    // Analytics must never crash the product flow
  }
}
