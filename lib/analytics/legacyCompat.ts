import { trackEvent } from './tracker'
import type { EventName } from './events'

/**
 * Legacy track function signature:
 *   track(event_type, fakultet_id?, tab?, meta?)
 *
 * New signature:
 *   trackEvent({ name, fakultet_id, studij_id, tab, meta })
 *
 * Ovo je shim dok sve komponente ne migriraju.
 * Nije tipiziran strogo — migration period tool.
 */
export function legacyTrack(
  event_type: string,
  fakultet_id: string | null = null,
  studij_id: string | null = null,
  tab: string | null = null,
  meta: Record<string, unknown> = {}
): void {
  // Map stari naming na novi
  const nameMap: Record<string, EventName> = {
    'view_fakultet':              'prijemni_fakultet_view',
    'view_studij':                'prijemni_studij_view',
    'tab_click':                  'prijemni_tab_click',
    'paywall_hit':                'paywall_hit',
    'kalkulator_use':             'kalkulator_result',
    'calculator_passed_threshold':'kalkulator_threshold_crossed',
    'target_added':               'target_added',
    'target_removed':             'target_removed',
    'compare_toggle':             'compare_toggle',
    'compare_open':               'compare_view_open',
    'compare_clear':              'compare_clear',
    'compare_remove':             'compare_toggle',
    'compare_share_native':       'compare_share',
    'compare_share_clipboard':    'compare_share',
    'compare_deeplink_open':      'compare_deeplink_open',
    'compare_to_detail':          'compare_to_detail',
    'story_submitted':            'story_submitted',
    'story_expand':               'story_expand',
    'story_modal_open':           'story_submit_modal_open',
    'matcher_saved':              'matcher_saved',
    'matcher_open':               'matcher_open',
    'matcher_edit':               'matcher_edit',
    'matcher_cleared':            'matcher_cleared',
    'matcher_filter':             'matcher_filter',
    'urgency_banner_shown':       'urgency_banner_shown',
    'urgency_banner_click':       'urgency_banner_click',
    'urgency_banner_dismissed':   'urgency_banner_dismissed',
    'exit_intent_shown':          'exit_intent_shown',
    'exit_intent_action':         'exit_intent_action',
    'push_subscribed':            'push_subscribed',
    'onboarding_shown':           'onboarding_shown',
    'onboarding_completed':       'onboarding_completed',
    'onboarding_skipped':         'onboarding_skipped',
    'search_focused':             'search_focused',
    'medicinar_mode_open':        'medicinar_page_view',
  }

  const mappedName = (nameMap[event_type] ?? event_type) as EventName
  trackEvent({ name: mappedName, fakultet_id, studij_id, tab, meta })
}
