import { describe, expect, it } from 'vitest'
import { resolve } from 'node:path'
import { examModulePathsForSubject } from '@/scripts/discere-validate.mjs'

describe('Discere validator CLI helpers', () => {
  it('builds deterministic exam module paths from an index', () => {
    const index = {
      subject: 'bio',
      exams: [{ key: '2026_ljeto', file: 'exams/2026_ljeto.mjs' }],
    }

    expect(examModulePathsForSubject('/repo/content/discere/bio', index))
      .toEqual([resolve('/repo/content/discere/bio/exams/2026_ljeto.mjs')])
  })

  it('rejects index entries that escape the subject directory', () => {
    const index = {
      subject: 'bio',
      exams: [{ key: 'bad', file: '../../secrets.mjs' }],
    }

    expect(() => examModulePathsForSubject('/repo/content/discere/bio', index))
      .toThrow(/outside subject directory/i)
  })
})
