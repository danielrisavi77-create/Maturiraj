/**
 * Engleski Simulator — Analytics
 *
 * Thin wrapper around window.gtag / window.plausible / console.
 * Designed to be tree-shakeable and testable (adapter injection via setAdapter).
 *
 * Usage:
 *   import { trackEvent } from '@/lib/engleski-simulator/analytics';
 *   trackEvent('exam_started', { examKey: 'e2024a', razina: 'visa', mode: 'simulacija' });
 *
 * In production, wire a real adapter via setAdapter() in _app / layout:
 *   import { setAdapter } from '@/lib/engleski-simulator/analytics';
 *   setAdapter((name, props) => window.gtag('event', name, props));
 */

/** @type {((name: string, props: Record<string, unknown>) => void) | null} */
let _adapter = null;

/**
 * Override the analytics back-end (gtag, plausible, mixpanel, …).
 * Call this once during app initialisation.
 * @param {(name: string, props: Record<string, unknown>) => void} fn
 */
export function setAdapter(fn) {
  _adapter = fn;
}

/**
 * Fire an analytics event.
 * - In production: delegates to the registered adapter.
 * - In development (NODE_ENV !== 'production'): logs to console.
 * - Always a no-op if adapter is null and not in development.
 *
 * @param {string} name  Snake_case event name, e.g. 'exam_started'
 * @param {Record<string, unknown>} [props]  Additional dimensions / metrics
 */
export function trackEvent(name, props = {}) {
  if (typeof name !== 'string' || !name) return;

  const payload = { ...props, _ts: Date.now() };

  if (_adapter) {
    try { _adapter(name, payload); } catch { /* never let analytics crash the app */ }
    return;
  }

  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    // Development-only logging — stripped by bundler in prod builds
    console.debug('[analytics]', name, payload);
  }
}

// ─── Typed event helpers ───────────────────────────────────────────────────────
// Each function enforces the expected shape so call-sites stay concise.

/**
 * User picked an exam and hit "Počni ispit" / "Vježbaj" / "Vježbaj s tajmerom".
 * @param {{ examKey: string, razina: string, mode: 'simulacija'|'vježbanje'|'vježbanje_timer' }} p
 */
export function trackExamStarted({ examKey, razina, mode }) {
  trackEvent('exam_started', { examKey, razina, mode });
}

/**
 * Exam (or practice session) finished — either by submit or timer expiry.
 * @param {{ pct: number, grade: number, duration_s: number, examKey: string, mode: 'simulacija'|'vježbanje'|'vježbanje_timer' }} p
 */
export function trackExamCompleted({ pct, grade, duration_s, examKey, mode }) {
  trackEvent('exam_completed', { pct, grade, duration_s, examKey, mode });
}

/**
 * User clicked the "🤖 AI objašnjenje" button.
 * @param {{ topic: string, question_type: string, examKey: string }} p
 */
export function trackAiHelpRequested({ topic, question_type, examKey }) {
  trackEvent('ai_help_requested', { topic, question_type, examKey });
}

/**
 * The exam timer counted down to 0 and auto-submitted.
 * @param {{ examKey: string, unanswered: number }} p
 */
export function trackTimerExpired({ examKey, unanswered }) {
  trackEvent('timer_expired', { examKey, unanswered });
}

/**
 * User toggled the dark-mode button.
 * @param {{ dark: boolean, source: 'manual'|'os_default' }} p
 */
export function trackDarkModeToggle({ dark, source }) {
  trackEvent('dark_mode_toggle', { dark, source });
}

/**
 * User returned to a tab that has an exam in progress (visibilitychange → visible).
 * @param {{ examKey: string, remainingPct: number }} p  remainingPct = remaining/total * 100 (rounded)
 */
export function trackSessionResumed({ examKey, remainingPct }) {
  trackEvent('session_resumed', { examKey, remainingPct });
}

/**
 * User clicked "Provjeri" to reveal whether their answer was correct in practice mode.
 * @param {{ questionType: string, topic: string, examKey: string, wasCorrect: boolean }} p
 */
export function trackPracticeErrorReviewed({ questionType, topic, examKey, wasCorrect }) {
  trackEvent('practice_error_reviewed', { questionType, topic, examKey, wasCorrect });
}
