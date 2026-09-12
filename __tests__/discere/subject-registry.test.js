import { describe, expect, it } from 'vitest'
import {
  DISCERE_SUBJECTS,
  getDiscereGroups,
  getDiscereSubject,
} from '@/lib/discere/subject-registry'

describe('Discere subject registry', () => {
  it('contains Logika and does not advertise obsolete Russian entry', () => {
    expect(getDiscereSubject('log')?.name).toBe('Logika')
    expect(DISCERE_SUBJECTS.some((subject) => subject.name === 'Ruski jezik')).toBe(false)
  })

  it('preserves current production routes', () => {
    expect(getDiscereSubject('hrv')?.route).toBe('/discere/hrvatski/simulator')
    expect(getDiscereSubject('mat')?.route).toBe('/discere/matematika')
    expect(getDiscereSubject('eng')?.route).toBe('/discere/engleski/simulator')
    expect(getDiscereSubject('soc')?.route).toBe('/discere/sociologija')
  })

  it('resolves by slug and groups deterministically', () => {
    expect(getDiscereSubject('biologija')?.id).toBe('bio')
    expect(getDiscereGroups()).toContain('Prirodoslovno')
  })

  it('keeps Biologija non-public until QA is complete', () => {
    expect(getDiscereSubject('bio')?.status).toBe('qa')
  })
})
