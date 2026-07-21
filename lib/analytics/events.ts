/**
 * Centralni event taxonomy za maturiraj.hr analytics.
 *
 * Svi analytics eventi idu kroz trackEvent() helper.
 * Nikad direktno Supabase insert iz komponenti — sve kroz ovaj file.
 *
 * Naming konvencija: {feature}_{object}_{action}
 *   feature   = 'prijemni' | 'medicinar' | 'skripte' | 'discere' | 'auth' | 'billing'
 *   object    = 'studij' | 'kalkulator' | 'matcher' | 'compare' | 'story' | 'push'
 *   action    = 'view' | 'click' | 'complete' | 'dismiss' | 'error'
 */

export type EventName =
  // ─── AUTH ─────────────────────────────────
  | 'auth_signup_started'
  | 'auth_signup_completed'
  | 'auth_login_completed'
  | 'auth_logout'
  | 'auth_guest_scores_migrated'   // T1#2: guest matcher → user

  // ─── BILLING ──────────────────────────────
  | 'billing_upgrade_click'          // CTA klik za Pro
  | 'billing_checkout_started'       // Stripe checkout otvoren
  | 'billing_upgrade_completed'      // Webhook: payment confirmed
  | 'billing_downgrade'
  | 'billing_churn'                  // Subscription cancelled

  // ─── ONBOARDING ───────────────────────────
  | 'onboarding_shown'
  | 'onboarding_step'                // { step: 0-3 }
  | 'onboarding_completed'           // { razred, interesi, prosjek_band, city_preference }
  | 'onboarding_skipped'             // { step: step_at_which_skipped }
  | 'personalization_reset'          // User clear-ao personalizaciju

  // ─── PRIJEMNI ─────────────────────────────
  | 'prijemni_page_view'
  | 'prijemni_fakultet_view'         // { fakultet_id, studiji_count }
  | 'prijemni_studij_view'           // { studij_id, tip_upisa, prag_2025, from: 'direct'|'shortcut' }
  | 'prijemni_tab_click'             // { studij_id, tab: 'info'|'datumi'|'kalkulator' }

  // ─── SEARCH & FILTER ──────────────────────
  | 'search_focused'
  | 'search_query'                   // { query, result_count } — debounced, min 3 chars
  | 'search_filter_changed'          // { field, value, result_count }
  | 'search_filter_cleared'

  // ─── MATCHER (T1#2) ───────────────────────
  | 'matcher_open'
  | 'matcher_step'                   // { step: 'prosjeci'|'matura'|'izborni'|'pregled' }
  | 'matcher_saved'                  // { has_izborni: bool }
  | 'matcher_edit'
  | 'matcher_cleared'
  | 'matcher_filter'                 // { filter: 'safe'|'borderline'|'risky'|'all' }

  // ─── KALKULATOR (T1#3 inline) ─────────────
  | 'kalkulator_input'               // { studij_id, field, has_value: bool } — debounced
  | 'kalkulator_result'              // { studij_id, bodovi, prag, razlika, status }
  | 'kalkulator_threshold_crossed'   // { studij_id, bodovi, prag } — MAGIC MOMENT
  | 'kalkulator_gap_cta_click'       // { studij_id, razlika }

  // ─── COMPARE (T2#5) ───────────────────────
  | 'compare_toggle'                 // { studij_id, action: 'add'|'remove' }
  | 'compare_max_reached'            // { count, is_pro }
  | 'compare_dock_open'
  | 'compare_view_open'              // { count }
  | 'compare_view_section'           // { section: 'match'|'bodovi'|'datumi'|'predmeti' }
  | 'compare_clear'
  | 'compare_share'                  // { method: 'native'|'clipboard', count }
  | 'compare_deeplink_open'          // User kliknuo share link
  | 'compare_to_detail'              // { studij_id }

  // ─── TARGET (T2#7 related) ────────────────
  | 'target_added'                   // { studij_id, is_hard }
  | 'target_removed'                 // { studij_id }

  // ─── MEDICINAR (T2#7) ─────────────────────
  | 'medicinar_page_view'            // { studij_id }
  | 'medicinar_simulator_start'      // { studij_id, plan }
  | 'medicinar_simulator_complete'   // { studij_id, score_pct, duration_s, percentile }
  | 'medicinar_simulator_abandon'    // { studij_id, progress_pct }
  | 'medicinar_briefing_generate'    // { studij_id }
  | 'medicinar_briefing_view'        // { studij_id, week_of }

  // ─── URGENCY (T2#6) ───────────────────────
  | 'urgency_banner_shown'           // { studij_id, level, days_left }
  | 'urgency_banner_click'           // { studij_id, level }
  | 'urgency_banner_dismissed'       // { studij_id, level }
  | 'exit_intent_shown'              // { trigger, urgencies_count, time_on_page }
  | 'exit_intent_action'             // { action: 'open_studij'|'subscribe'|'close' }
  | 'push_optin_shown'
  | 'push_subscribed'
  | 'push_unsubscribed'
  | 'push_notification_click'        // { studij_id, days_until_deadline }

  // ─── STORIES (T2#8) ───────────────────────
  | 'story_section_view'             // { studij_id, story_count }
  | 'story_expand'                   // { story_id, studij_id }
  | 'story_helpful_vote'             // { story_id }
  | 'story_submit_modal_open'        // { studij_id, source: 'empty_cta'|'header_cta'|'ambassador' }
  | 'story_submit_step'              // { step: 'identity'|'upis'|'resources'|'story'|'review' }
  | 'story_submitted'                // { studij_id }
  | 'story_approved'                 // admin action
  | 'story_rejected'                 // admin action

  // ─── PAYWALL ──────────────────────────────
  | 'paywall_hit'                    // { studij_id, tab, plan_type }
  | 'paywall_upgrade_click'          // { source: tab, plan_type }

  // ─── EFFECTS ──────────────────────────────
  | 'confetti_fired'                 // { studij_id, bodovi, razlika }

  // ─── A/B ──────────────────────────────────
  | 'ab_variant_assigned'            // { experiment, variant }
  | 'ab_conversion'                  // { experiment, variant, conversion_event }

  // ─── DISCERE SIMULATOR ────────────────────
  | 'discere_exam_started'           // { subject, examKey, mode }
  | 'discere_exam_completed'         // { subject, examKey, pct, grade, mode }
  | 'discere_skripta_opened'         // { subject, slug, djelo }
  | 'game_session_started'           // { subject, recipe, variant, question_count }
  | 'game_answer_locked'             // { subject, mode, question_index }
  | 'game_session_completed'         // { subject, variant, runner_correct, runner_total }
  | 'game_post_check_completed'      // { subject, correct, total }
  | 'game_next_activity_selected'    // { subject, type }

export interface EventPayload {
  name: EventName
  fakultet_id?: string | null
  studij_id?: string | null
  tab?: string | null
  meta?: Record<string, unknown>
}
