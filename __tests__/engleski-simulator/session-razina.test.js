/**
 * session-razina.test.js
 *
 * Pokriva deriveRazina() iz lib/engleski-simulator/sessionRazina.js:
 *   - sva pitanja 'osnovna' -> 'osnovna'
 *   - sva pitanja 'visa' -> 'visa'
 *   - miješano -> 'mixed'
 *   - prazan niz pitanja -> 'osnovna' (default)
 *   - pitanja bez _examKey/examKey pronađena po id-u u examsMap
 */
import { describe, it, expect } from 'vitest'
import { deriveRazina } from '../../lib/engleski-simulator/sessionRazina.js'

const EXAMS_MAP = {
  osn_2020: { key: 'osn_2020', razina: 'osnovna', qs: [{ id: 'q1' }, { id: 'q2' }] },
  vis_2020: { key: 'vis_2020', razina: 'visa', qs: [{ id: 'q3' }, { id: 'q4' }] },
}

describe('deriveRazina', () => {
  it('vraća "osnovna" kad su sva pitanja iz osnovne razine (preko _examKey)', () => {
    const qs = [
      { id: 'q1', _examKey: 'osn_2020' },
      { id: 'q2', _examKey: 'osn_2020' },
    ]
    expect(deriveRazina(qs, EXAMS_MAP)).toBe('osnovna')
  })

  it('vraća "visa" kad su sva pitanja iz više razine (preko _examKey)', () => {
    const qs = [
      { id: 'q3', _examKey: 'vis_2020' },
      { id: 'q4', _examKey: 'vis_2020' },
    ]
    expect(deriveRazina(qs, EXAMS_MAP)).toBe('visa')
  })

  it('vraća "mixed" kad su pitanja iz obje razine', () => {
    const qs = [
      { id: 'q1', _examKey: 'osn_2020' },
      { id: 'q3', _examKey: 'vis_2020' },
    ]
    expect(deriveRazina(qs, EXAMS_MAP)).toBe('mixed')
  })

  it('vraća "osnovna" kao default za prazan niz pitanja', () => {
    expect(deriveRazina([], EXAMS_MAP)).toBe('osnovna')
    expect(deriveRazina(null, EXAMS_MAP)).toBe('osnovna')
    expect(deriveRazina(undefined, EXAMS_MAP)).toBe('osnovna')
  })

  it('pronalazi razinu po q.examKey kad _examKey nije postavljen', () => {
    const qs = [{ id: 'q3', examKey: 'vis_2020' }]
    expect(deriveRazina(qs, EXAMS_MAP)).toBe('visa')
  })

  it('pronalazi razinu pretragom examsMap po q.id kad nema ni _examKey ni examKey', () => {
    const qs = [{ id: 'q3' }, { id: 'q4' }]
    expect(deriveRazina(qs, EXAMS_MAP)).toBe('visa')
  })

  it('miješano preko pretrage po id-u kad ključevi nedostaju', () => {
    const qs = [{ id: 'q1' }, { id: 'q3' }]
    expect(deriveRazina(qs, EXAMS_MAP)).toBe('mixed')
  })

  it('pitanje koje se ne može pronaći nigdje tretira se kao "osnovna"', () => {
    const qs = [{ id: 'nepoznato' }]
    expect(deriveRazina(qs, EXAMS_MAP)).toBe('osnovna')
  })
})
