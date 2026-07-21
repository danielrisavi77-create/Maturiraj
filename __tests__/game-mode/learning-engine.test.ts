import { describe, expect, it } from 'vitest'
import { applyMasteryEvidence, canonicalAnswerIsCorrect } from '@/lib/learning/hrv-engine'

describe('Croatian learning engine', () => {
  it('caps runner-only mastery at 0.79', () => {
    const result = applyMasteryEvidence(null, Array.from({ length: 100 }, () => ({ correct: true, mode: 'runner' as const })))
    expect(result.mastery).toBe(0.79)
  })

  it('does not penalize motor or technical failures', () => {
    const baseline = applyMasteryEvidence(null, [])
    const result = applyMasteryEvidence(null, [
      { correct: false, mode: 'runner', classification: 'motor' },
      { correct: false, mode: 'runner', classification: 'technical' },
    ])
    expect(result).toEqual(baseline)
  })

  it('uses the canonical answer key', () => {
    expect(canonicalAnswerIsCorrect('B', 'B')).toBe(true)
    expect(canonicalAnswerIsCorrect('B', 'A')).toBe(false)
  })
})
