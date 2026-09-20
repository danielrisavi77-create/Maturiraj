import { createClient } from '@/lib/supabase'

function finiteNumber(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback
}

function legacyPercent(value) {
  return Math.max(0, Math.min(100, Math.round(finiteNumber(value))))
}

export function canonicalResultToProgressRow(result, userId) {
  const level = result?.level === 'A' || result?.level === 'B' ? result.level : null
  const earnedPoints = finiteNumber(result?.earnedPoints)
  const maxPoints = finiteNumber(result?.maxPoints)
  const percent = Math.max(0, Math.min(100, finiteNumber(result?.percent)))

  return {
    user_id: userId,
    subject: result?.subject,
    exam_key: result?.examKey,
    exam_label: result?.examLabel ?? null,
    razina: level,
    pct: legacyPercent(percent),
    grade: null,
    correct: Math.round(earnedPoints),
    total: Math.round(maxPoints),
    exam_mode: true,
    answers: result?.answers ?? {},
    q_times: {},
    topic_breakdown: result?.topicBreakdown ?? {},
    error_tags: [],
    duration_sec: Number.isFinite(result?.durationSec) ? Math.max(0, Math.round(result.durationSec)) : null,
    result_version: 2,
    score_pct: percent,
    earned_points: earnedPoints,
    max_points: maxPoints,
    manual_pending: Boolean(result?.manualPending),
    unanswered: Array.isArray(result?.unanswered) ? result.unanswered : [],
    flagged: Array.isArray(result?.flagged) ? result.flagged : [],
  }
}

export async function saveCanonicalSimResult(result) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { saved: false, reason: 'anonymous' }

  const row = canonicalResultToProgressRow(result, user.id)
  const { error } = await supabase.from('sim_progress').insert(row)
  if (!error) return { saved: true }

  const code = error?.code
  const message = `${error?.message || ''}${error?.details || ''}`
  if (code === '42703' || /column .* does not exist/i.test(message)) {
    console.warn('[discere-progress] canonical sim_progress columns not migrated yet')
    return { saved: false, reason: 'migration-missing', error }
  }
  if (code === '42P01' || code === 'PGRST205' || /does not exist|schema cache|could not find the table/i.test(message)) {
    console.warn('[discere-progress] sim_progress not migrated yet')
    return { saved: false, reason: 'table-missing', error }
  }

  console.error('[discere-progress] save failed', error)
  return { saved: false, reason: 'error', error }
}
