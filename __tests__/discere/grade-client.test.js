import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { submitGrade, newAttemptId, GradeError, gradeErrorMessage } from '@/lib/discere/grade-client'

describe('newAttemptId', () => {
  it('vraća neprazan jedinstveni string', () => {
    const a = newAttemptId()
    const b = newAttemptId()
    expect(typeof a).toBe('string')
    expect(a.length).toBeGreaterThan(0)
    expect(a).not.toBe(b)
  })
})

describe('submitGrade', () => {
  const realFetch = global.fetch

  beforeEach(() => {
    global.fetch = vi.fn()
  })

  afterEach(() => {
    global.fetch = realFetch
    vi.restoreAllMocks()
  })

  it('šalje POST na /api/sim/<subject>/grade s ispravnim tijelom', async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: async () => ({ pct: 80, grade: 4, cor: 8, total: 10, bodovi: 8, xpGain: 20, scores: {} }),
      headers: { get: () => null },
    })

    const result = await submitGrade('bio', {
      examKey: '2026_ljeto',
      answers: { q1: 'a' },
      attemptId: 'abc123',
      examMode: true,
    })

    expect(global.fetch).toHaveBeenCalledTimes(1)
    const [url, init] = global.fetch.mock.calls[0]
    expect(url).toBe('/api/sim/bio/grade')
    expect(init.method).toBe('POST')
    const body = JSON.parse(init.body)
    expect(body.examKey).toBe('2026_ljeto')
    expect(body.answers).toEqual({ q1: 'a' })
    expect(body.attemptId).toBe('abc123')
    expect(result.pct).toBe(80)
  })

  it('baca GradeError s statusom kad odgovor nije ok', async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      status: 429,
      json: async () => ({ error: 'Previše predaja.' }),
      headers: { get: h => (h === 'Retry-After' ? '30' : null) },
    })

    await expect(submitGrade('bio', { examKey: 'k', answers: {}, attemptId: 'x' }))
      .rejects.toMatchObject({ name: 'GradeError', status: 429, retryAfterSec: 30, message: 'Previše predaja.' })
  })

  it('mrežna greška postaje GradeError statusa 0', async () => {
    global.fetch.mockRejectedValue(new Error('offline'))
    await expect(submitGrade('bio', { examKey: 'k', answers: {}, attemptId: 'x' }))
      .rejects.toMatchObject({ name: 'GradeError', status: 0 })
  })
})

describe('gradeErrorMessage', () => {
  it('poznaje 401, 429, 404 i fallback', () => {
    expect(gradeErrorMessage(new GradeError('x', 401))).toMatch(/istekla/)
    expect(gradeErrorMessage(new GradeError('previše', 429))).toBe('previše')
    expect(gradeErrorMessage(new GradeError('x', 404))).toMatch(/nije dostupan/)
    expect(gradeErrorMessage(new GradeError('x', 500))).toMatch(/nije uspjelo/)
  })
})
