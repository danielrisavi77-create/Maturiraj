import { describe, expect, it } from 'vitest'
import { DISCERE_SUBJECTS } from '@/lib/discere/subject-registry'
import { registeredCanonicalSubjects } from '@/lib/discere/content-loader'

describe('active canonical Discere content gate', () => {
  it('requires a registered loader for every active canonical route', () => {
    const activeCanonical = DISCERE_SUBJECTS
      .filter((subject) => subject.status === 'active' && subject.route === `/discere/${subject.slug}`)
      .map((subject) => subject.id)
      .sort()

    expect(registeredCanonicalSubjects().sort()).toEqual(activeCanonical)
  })
})
