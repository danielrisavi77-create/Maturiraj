import type { SupabaseClient } from '@supabase/supabase-js'
import { getCroatianQuestion } from './hrv-registry'
import { canonicalAnswerIsCorrect, EVIDENCE_WEIGHTS } from '@/lib/learning/hrv-engine'

const MIGRATION_VERSION = 'hrv-game-v1'

function answerId(value: any) {
  if (typeof value === 'string') return value.trim().charAt(0).toUpperCase()
  return String(value?.cl ?? value?.answer ?? value?.selected ?? '').trim().charAt(0).toUpperCase()
}

function parseUserState(state: any) {
  const raw = state?.discere_hrv_user
  if (!raw) return null
  if (typeof raw === 'object') return raw
  try { return JSON.parse(raw) } catch { return null }
}

export async function migrateLegacyCroatianProgress(admin: SupabaseClient, userId: string) {
  const { data: marker } = await admin.from('game_user_migrations').select('migration_version').eq('user_id', userId).eq('migration_version', MIGRATION_VERSION).maybeSingle()
  if (marker) return { migrated: false, reason: 'already_migrated' }

  const [{ data: exams, error: examError }, { data: stateRow, error: stateError }] = await Promise.all([
    admin.from('sim_progress').select('id,exam_key,answers,q_times,exam_mode,created_at').eq('user_id', userId).eq('subject', 'hrv').order('created_at', { ascending: true }),
    admin.from('discere_sim_state').select('state').eq('user_id', userId).eq('subject', 'hrv').maybeSingle(),
  ])
  if (examError) throw examError
  if (stateError) throw stateError

  const rows: any[] = []
  for (const exam of exams ?? []) {
    for (const [questionId, selected] of Object.entries(exam.answers ?? {})) {
      const canonicalId = `hrv:discere:${exam.exam_key}:${questionId}`
      const question = getCroatianQuestion(canonicalId)
      if (!question) continue
      const selectedId = answerId(selected)
      question.conceptIds.forEach((conceptId, conceptIndex) => rows.push({
        session_id: null, user_id: userId, subject_id: 'hrv', question_id: canonicalId, concept_id: conceptId,
        mode: exam.exam_mode ? 'exam' : 'classic_quiz', classification: 'learning', answer_id: selectedId || null,
        correct: canonicalAnswerIsCorrect(question.correctAnswerId, selectedId),
        evidence_weight: exam.exam_mode ? EVIDENCE_WEIGHTS.exam : EVIDENCE_WEIGHTS.classic_quiz,
        response_ms: Math.max(0, Number(exam.q_times?.[questionId] ?? 0) * 1000), sequence: conceptIndex,
        occurred_at: exam.created_at, source_event_key: `sim_progress:${exam.id}:${questionId}:${conceptId}`,
      }))
    }
  }

  const tracker = parseUserState(stateRow?.state)?.errorTracker ?? {}
  for (const entry of Object.values(tracker) as any[]) {
    if (entry?.examKey == null || entry?.qid == null) continue
    const canonicalId = `hrv:discere:${entry.examKey}:${entry.qid}`
    const question = getCroatianQuestion(canonicalId)
    if (!question) continue
    question.conceptIds.forEach((conceptId, conceptIndex) => rows.push({
      session_id: null, user_id: userId, subject_id: 'hrv', question_id: canonicalId, concept_id: conceptId,
      mode: 'classic_quiz', classification: 'learning', answer_id: null, correct: false,
      evidence_weight: EVIDENCE_WEIGHTS.classic_quiz, response_ms: 0, sequence: conceptIndex,
      source_event_key: `discere_error:${entry.examKey}:${entry.qid}:${conceptId}`,
    }))
  }

  if (rows.length) {
    const { error } = await admin.from('learning_attempt_events').upsert(rows, { onConflict: 'source_event_key', ignoreDuplicates: true })
    if (error) throw error
    const aggregates = new Map<string, { alpha: number; beta: number }>()
    rows.forEach((row) => {
      const current = aggregates.get(row.concept_id) ?? { alpha: 1, beta: 1 }
      if (row.correct) current.alpha += Number(row.evidence_weight)
      else current.beta += Number(row.evidence_weight)
      aggregates.set(row.concept_id, current)
    })
    const masteryRows = [...aggregates].map(([conceptId, value]) => ({
      user_id: userId, subject_id: 'hrv', concept_id: conceptId, alpha: value.alpha, beta: value.beta,
      mastery: value.alpha / (value.alpha + value.beta), has_non_runner_evidence: true,
      last_attempt_at: new Date().toISOString(), next_review_at: new Date(Date.now() + 86400000).toISOString(), updated_at: new Date().toISOString(),
    }))
    const { error: masteryError } = await admin.from('user_concept_mastery').upsert(masteryRows)
    if (masteryError) throw masteryError
  }
  const { error: markerError } = await admin.from('game_user_migrations').insert({ user_id: userId, migration_version: MIGRATION_VERSION, details: { importedEvents: rows.length } })
  if (markerError) throw markerError
  return { migrated: true, importedEvents: rows.length }
}
