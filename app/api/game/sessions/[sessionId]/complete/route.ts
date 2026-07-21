import { NextResponse } from 'next/server'
import { getCroatianQuestion } from '@/lib/game-mode/hrv-registry'
import { optionalGameAdmin, requireGameUser } from '@/lib/game-mode/server'
import { verifyGameManifest } from '@/lib/game-mode/signing'
import { applyMasteryEvidence, canonicalAnswerIsCorrect, EVIDENCE_WEIGHTS } from '@/lib/learning/hrv-engine'

type ClientAttempt = {
  questionId?: string
  answerId?: string | null
  mode?: 'runner' | 'post_check'
  classification?: 'learning' | 'motor' | 'technical' | 'suspend'
  responseMs?: number
  sequence?: number
}

export async function POST(request: Request, context: { params: Promise<{ sessionId: string }> }) {
  const user = await requireGameUser()
  if (!user) return NextResponse.json({ error: 'Potrebna je prijava.' }, { status: 401 })
  try {
    const { sessionId } = await context.params
    const body = await request.json()
    const manifest = verifyGameManifest(String(body.token ?? ''))
    if (manifest.id !== sessionId) return NextResponse.json({ error: 'Sesija se ne podudara.' }, { status: 400 })
    const allowedIds = new Set([...manifest.questions, ...manifest.postCheck].map((question) => question.id))
    const attempts = (Array.isArray(body.attempts) ? body.attempts : []).slice(0, 30) as ClientAttempt[]
    const normalized = attempts.map((attempt, index) => {
      if (!attempt.questionId || !allowedIds.has(attempt.questionId)) throw new Error('Pokušaj sadrži pitanje izvan manifesta.')
      const question = getCroatianQuestion(attempt.questionId)
      if (!question) throw new Error('Pitanje više nije dostupno.')
      const mode: 'runner' | 'post_check' = attempt.mode === 'post_check' ? 'post_check' : 'runner'
      const classification: 'learning' | 'motor' | 'technical' | 'suspend' = ['motor', 'technical', 'suspend'].includes(String(attempt.classification))
        ? attempt.classification as 'motor' | 'technical' | 'suspend'
        : 'learning'
      const correct = canonicalAnswerIsCorrect(question.correctAnswerId, attempt.answerId)
      const weight = classification === 'learning' ? EVIDENCE_WEIGHTS[mode] : 0
      return { question, mode, classification, correct, weight, answerId: attempt.answerId ?? null, responseMs: Math.max(0, Number(attempt.responseMs ?? 0)), sequence: index }
    })

    const byConcept = new Map<string, typeof normalized>()
    normalized.forEach((attempt) => attempt.question.conceptIds.forEach((concept) => {
      byConcept.set(concept, [...(byConcept.get(concept) ?? []), attempt])
    }))

    const admin = optionalGameAdmin()
    const masteryChanges = []
    for (const [conceptId, conceptAttempts] of byConcept) {
      let existing: any = null
      if (admin) {
        const { data } = await admin.from('user_concept_mastery').select('alpha,beta,has_non_runner_evidence').eq('user_id', user.id).eq('concept_id', conceptId).maybeSingle()
        existing = data
      }
      const result = applyMasteryEvidence(existing ? {
        alpha: Number(existing.alpha), beta: Number(existing.beta), hasNonRunnerEvidence: existing.has_non_runner_evidence,
      } : null, conceptAttempts.map((attempt) => ({ correct: attempt.correct, mode: attempt.mode, classification: attempt.classification })))
      const lastCorrect = conceptAttempts.at(-1)?.correct ?? false
      const nextReviewAt = new Date(Date.now() + (lastCorrect ? 2 : 1) * 86400000).toISOString()
      const change = { conceptId, mastery: result.mastery, nextReviewAt }
      masteryChanges.push(change)
      if (admin) {
        const { error } = await admin.from('user_concept_mastery').upsert({
          user_id: user.id, subject_id: 'hrv', concept_id: conceptId,
          alpha: result.alpha, beta: result.beta, mastery: result.mastery,
          has_non_runner_evidence: result.hasNonRunnerEvidence,
          last_attempt_at: new Date().toISOString(), next_review_at: nextReviewAt, updated_at: new Date().toISOString(),
        })
        if (error) throw error
      }
    }

    if (admin) {
      const rows = normalized.flatMap((attempt) => attempt.question.conceptIds.map((conceptId) => ({
        session_id: sessionId, user_id: user.id, subject_id: 'hrv', question_id: attempt.question.id,
        concept_id: conceptId, mode: attempt.mode, classification: attempt.classification,
        answer_id: attempt.answerId, correct: attempt.correct, evidence_weight: attempt.weight,
        response_ms: attempt.responseMs, sequence: attempt.sequence * 10 + attempt.question.conceptIds.indexOf(conceptId),
      })))
      if (rows.length) {
        const { error } = await admin.from('learning_attempt_events').upsert(rows, { onConflict: 'session_id,sequence' })
        if (error) throw error
      }
      const { error } = await admin.from('game_sessions').update({ status: 'completed', completed_at: new Date().toISOString() }).eq('id', sessionId).eq('user_id', user.id)
      if (error) throw error
    }

    const weakest = [...masteryChanges].sort((a, b) => a.mastery - b.mastery)[0]
    const linked = normalized.find((attempt) => attempt.question.conceptIds.includes(weakest?.conceptId ?? ''))?.question
    return NextResponse.json({
      verifiedAttempts: normalized.map((attempt) => ({ questionId: attempt.question.id, correct: attempt.correct, mode: attempt.mode })),
      masteryChanges,
      nextBestAction: linked?.chapterSlug
        ? { type: 'script', label: 'Ponovi povezano poglavlje', href: `/skripte/hrv/${linked.chapterSlug}` }
        : { type: 'discere', label: 'Nastavi klasično vježbanje', href: '/discere/hrvatski/simulator' },
    })
  } catch (error) {
    console.error('[game/sessions] completion failed', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Rezultat nije spremljen.' }, { status: 400 })
  }
}
