import { describe, expect, it } from 'vitest'
import { validateExam } from '@/lib/discere/exam-schema'

describe('Biologija 2026 official first-session exam', () => {
  it('matches the official structural totals and passes canonical validation', async () => {
    const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')

    expect(exam.meta.subject).toBe('bio')
    expect(exam.meta.year).toBe(2026)
    expect(exam.meta.durationSec).toBe(9000)
    expect(exam.meta.questionCount).toBe(48)
    expect(exam.meta.maxPoints).toBe(70)
    expect(exam.questions.filter((question) => question.type === 'mc')).toHaveLength(35)

    const result = validateExam(exam)
    expect(result.errors).toEqual([])
  })
})
