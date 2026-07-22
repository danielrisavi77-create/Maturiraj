import { NextResponse } from 'next/server'
import { isGameModeEnabled } from '@/lib/config/featureFlags'
import { getCroatianQuestion } from '@/lib/game-mode/hrv-registry'
import { optionalGameAdmin, requireGameUser } from '@/lib/game-mode/server'
import { applyMasteryEvidence, canonicalAnswerIsCorrect, EVIDENCE_WEIGHTS } from '@/lib/learning/hrv-engine'

export async function POST(request: Request) {
  if (!isGameModeEnabled()) return NextResponse.json({ ok: false }, { status: 404 })
  const user = await requireGameUser()
  if (!user) return NextResponse.json({ error: 'Potrebna je prijava.' }, { status: 401 })
  try {
    const body = await request.json()
    if (!/^\d{4}_[a-z]+_[AB]$/.test(String(body.examKey ?? ''))) return NextResponse.json({ error: 'Neispravan ispit.' }, { status: 400 })
    const attemptId = String(body.attemptId ?? '').slice(0, 80)
    if (!attemptId) return NextResponse.json({ error: 'Nedostaje ID pokušaja.' }, { status: 400 })
    const mode = body.examMode ? 'exam' : 'classic_quiz'
    const weight = EVIDENCE_WEIGHTS[mode]
    const attempts = Object.entries(body.answers ?? {}).slice(0, 200).flatMap(([sourceQuestionId, selected]) => {
      const question = getCroatianQuestion(`hrv:discere:${body.examKey}:${sourceQuestionId}`)
      if (!question) return []
      const selectedValue = selected as any
      const answerId = String(typeof selectedValue === 'string' ? selectedValue : selectedValue?.cl ?? selectedValue?.answer ?? '').charAt(0).toUpperCase()
      return question.conceptIds.map((conceptId) => ({ question, conceptId, answerId, correct: canonicalAnswerIsCorrect(question.correctAnswerId, answerId) }))
    })
    const admin = optionalGameAdmin()
    if (!admin) return NextResponse.json({ ok: true, persisted: false })
    if (attempts.length) {
      const { error } = await admin.from('learning_attempt_events').upsert(attempts.map((attempt, sequence) => ({
        session_id: null, user_id: user.id, subject_id: 'hrv', question_id: attempt.question.id,
        concept_id: attempt.conceptId, mode, classification: 'learning', answer_id: attempt.answerId || null,
        correct: attempt.correct, evidence_weight: weight, response_ms: Math.max(0, Number(body.qTimes?.[attempt.question.sourceQuestionId] ?? 0) * 1000),
        sequence, source_event_key: `discere:${user.id}:${attemptId}:${attempt.question.id}:${attempt.conceptId}`,
      })), { onConflict: 'source_event_key', ignoreDuplicates: true })
      if (error) throw error
    }
    const byConcept = new Map<string, typeof attempts>()
    attempts.forEach((attempt) => byConcept.set(attempt.conceptId, [...(byConcept.get(attempt.conceptId) ?? []), attempt]))
    for (const [conceptId, conceptAttempts] of byConcept) {
      const { data: existing } = await admin.from('user_concept_mastery').select('alpha,beta,has_non_runner_evidence').eq('user_id', user.id).eq('concept_id', conceptId).maybeSingle()
      const result = applyMasteryEvidence(existing ? { alpha: Number(existing.alpha), beta: Number(existing.beta), hasNonRunnerEvidence: existing.has_non_runner_evidence } : null, conceptAttempts.map((attempt) => ({ correct: attempt.correct, mode })))
      const { error } = await admin.from('user_concept_mastery').upsert({
        user_id: user.id, subject_id: 'hrv', concept_id: conceptId, alpha: result.alpha, beta: result.beta,
        mastery: result.mastery, has_non_runner_evidence: result.hasNonRunnerEvidence,
        last_attempt_at: new Date().toISOString(), next_review_at: new Date(Date.now() + 86400000).toISOString(), updated_at: new Date().toISOString(),
      })
      if (error) throw error
    }
    return NextResponse.json({ ok: true, persisted: true, attempts: attempts.length })
  } catch (error) {
    console.error('[game/discere-attempts] dual write failed', error)
    return NextResponse.json({ error: 'Pokušaji nisu sinkronizirani.' }, { status: 500 })
  }
}
