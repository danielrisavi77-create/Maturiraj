import { describe, expect, it } from 'vitest'
import { loadExam, loadSubjectIndex } from '@/lib/discere/content-loader'

const exam = {
  meta: { subject:'bio', key:'2026_ljeto' },
  questions: [{ id:'1' }],
}

const registry = {
  bio: async () => ({
    index: { subject:'bio', exams:[{ key:'2026_ljeto' }] },
    examLoaders: { '2026_ljeto': async () => ({ exam }) },
  }),
}

describe('Discere content loader', () => {
  it('loads a subject index through an explicit loader registry', async () => {
    await expect(loadSubjectIndex('bio', registry)).resolves.toEqual({ subject:'bio', exams:[{ key:'2026_ljeto' }] })
  })

  it('loads an exam through an explicit exam loader', async () => {
    await expect(loadExam('bio', '2026_ljeto', registry)).resolves.toBe(exam)
  })

  it('rejects unknown subjects and exam keys clearly', async () => {
    await expect(loadSubjectIndex('unknown', registry)).rejects.toThrow(/unknown discere subject/i)
    await expect(loadExam('bio', 'missing', registry)).rejects.toThrow(/unknown exam/i)
  })
})
