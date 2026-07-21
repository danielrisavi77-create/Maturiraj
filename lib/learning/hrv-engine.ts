export {
  sm2Update,
  getDueReviews,
  calcTopicWeights,
  selectAdaptiveMix,
  calcTopicMastery,
  generateStrategyTips,
  selectWarmupQuestions,
} from '@/app/discere/hrvatski/simulator/utils/pedagogy.js'

export const EVIDENCE_WEIGHTS = Object.freeze({
  runner: 0.35,
  classic_quiz: 0.6,
  post_check: 0.8,
  exam: 1,
  technical: 0,
})

export type MasteryEvidence = {
  correct: boolean
  mode: keyof typeof EVIDENCE_WEIGHTS
  classification?: 'learning' | 'motor' | 'technical' | 'suspend'
}

export function canonicalAnswerIsCorrect(correctAnswerId: string, answerId: string | null | undefined) {
  return Boolean(answerId) && correctAnswerId === answerId
}

export function applyMasteryEvidence(
  current: { alpha?: number; beta?: number; hasNonRunnerEvidence?: boolean } | null,
  evidence: MasteryEvidence[]
) {
  let alpha = current?.alpha ?? 1
  let beta = current?.beta ?? 1
  let hasNonRunnerEvidence = Boolean(current?.hasNonRunnerEvidence)

  for (const event of evidence) {
    const ignored = event.classification && event.classification !== 'learning'
    const weight = ignored ? 0 : EVIDENCE_WEIGHTS[event.mode]
    if (weight <= 0) continue
    if (event.correct) alpha += weight
    else beta += weight
    if (event.mode !== 'runner') hasNonRunnerEvidence = true
  }

  const rawMastery = alpha / (alpha + beta)
  return {
    alpha,
    beta,
    hasNonRunnerEvidence,
    mastery: hasNonRunnerEvidence ? rawMastery : Math.min(0.79, rawMastery),
  }
}
