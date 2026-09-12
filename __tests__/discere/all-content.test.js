import { describe, expect, it } from 'vitest'
import { DISCERE_SUBJECTS, getDiscereSubject } from '@/lib/discere/subject-registry'
import { loadExam, loadSubjectIndex, registeredCanonicalSubjects } from '@/lib/discere/content-loader'
import { validateExam } from '@/lib/discere/exam-schema'

describe('active canonical Discere content gate', () => {
  it('requires a registered loader for every active canonical runtime', () => {
    const activeCanonical = DISCERE_SUBJECTS
      .filter((subject) => subject.status === 'active' && subject.runtime === 'canonical')
      .map((subject) => subject.id)
      .sort()

    for (const id of activeCanonical) expect(registeredCanonicalSubjects()).toContain(id)
  })

  it('validates every registered loader, including content still in QA', async () => {
    for (const id of registeredCanonicalSubjects()) {
      const subject = getDiscereSubject(id)
      expect(subject?.runtime).toBe('canonical')
      expect(['qa', 'active']).toContain(subject?.status)
      const index = await loadSubjectIndex(id)
      expect(index.subject).toBe(id)
      expect(index.exams.length).toBeGreaterThan(0)
      for (const entry of index.exams) {
        const exam = await loadExam(id, entry.key)
        expect(exam.meta.subject).toBe(id)
        expect(exam.meta.key).toBe(entry.key)
        expect(validateExam(exam).errors).toEqual([])
      }
    }
  })

  it('distinguishes legacy math and sociology from canonical biology despite similar URLs', () => {
    expect(getDiscereSubject('mat').runtime).toBe('legacy')
    expect(getDiscereSubject('soc').runtime).toBe('legacy')
    expect(getDiscereSubject('bio').runtime).toBe('canonical')
    expect(DISCERE_SUBJECTS.every((subject) => ['legacy', 'canonical'].includes(subject.runtime))).toBe(true)
  })
})
