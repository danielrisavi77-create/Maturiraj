import { describe, it, expect } from 'vitest'
import { pseudoRandom, dailySeed, dailyExamKey, isDailyDone, pickDailyQuestions } from '@/lib/discere/daily'

describe('dailySeed — UTC-day-based', () => {
  it('seed je isti u 08:00 i 20:00 istog kalendarskog dana', () => {
    const t1 = new Date('2026-04-13T08:00:00.000Z').getTime()
    const t2 = new Date('2026-04-13T20:00:00.000Z').getTime()
    expect(dailySeed(t1)).toBe(dailySeed(t2))
  })

  it('seed raste za točno 1 na UTC ponoć', () => {
    const before = new Date('2026-04-13T23:59:59.999Z').getTime()
    const after = new Date('2026-04-14T00:00:00.000Z').getTime()
    expect(dailySeed(after)).toBe(dailySeed(before) + 1)
  })
})

describe('pseudoRandom', () => {
  it('deterministički za isti par (n, seed)', () => {
    const seed = 20000
    expect(pseudoRandom(7, seed)).toBe(pseudoRandom(7, seed))
    expect(pseudoRandom(7, seed)).not.toBe(pseudoRandom(8, seed))
  })
})

describe('dailyExamKey / isDailyDone', () => {
  it('gradi ključ oblika daily_<seed>', () => {
    expect(dailyExamKey(20000)).toBe('daily_20000')
  })

  it('prepoznaje jesu li današnji izazov riješen po povijesti', () => {
    expect(isDailyDone([{ examKey: 'daily_20000' }], 20000)).toBe(true)
    expect(isDailyDone([{ examKey: 'daily_19999' }], 20000)).toBe(false)
    expect(isDailyDone([], 20000)).toBe(false)
    expect(isDailyDone(null, 20000)).toBe(false)
  })
})

const MOCK_POOL = [
  ...Array.from({ length: 15 }, (_, i) => ({ id: `mc${i}`, type: 'mc' })),
  ...Array.from({ length: 6 }, (_, i) => ({ id: `matching${i}`, type: 'matching' })),
  ...Array.from({ length: 8 }, (_, i) => ({ id: `fill${i}`, type: 'fill' })),
]

const SEED_A = 20000
const SEED_B = 20001

describe('pickDailyQuestions — s ciljevima po tipu', () => {
  const targets = { mc: 10, matching: 4, fill: 6 }

  it('vraća točno onoliko koliko zbroj ciljeva traži', () => {
    expect(pickDailyQuestions(MOCK_POOL, SEED_A, { targets })).toHaveLength(20)
  })

  it('poštuje pojedinačne ciljeve po tipu', () => {
    const qs = pickDailyQuestions(MOCK_POOL, SEED_A, { targets })
    expect(qs.filter(q => q.type === 'mc')).toHaveLength(10)
    expect(qs.filter(q => q.type === 'matching')).toHaveLength(4)
    expect(qs.filter(q => q.type === 'fill')).toHaveLength(6)
  })

  it('svako pitanje ima jedinstven id i dailyId oblika daily_<seed>_<index>', () => {
    const qs = pickDailyQuestions(MOCK_POOL, SEED_A, { targets })
    expect(new Set(qs.map(q => q.id)).size).toBe(qs.length)
    qs.forEach((q, i) => expect(q.dailyId).toBe(`daily_${SEED_A}_${i}`))
  })

  it('isti seed → identičan redoslijed; drugi seed → drugi redoslijed', () => {
    const order1 = pickDailyQuestions(MOCK_POOL, SEED_A, { targets }).map(q => q.id)
    const order2 = pickDailyQuestions(MOCK_POOL, SEED_A, { targets }).map(q => q.id)
    expect(order1).toEqual(order2)
    const orderB = pickDailyQuestions(MOCK_POOL, SEED_B, { targets }).map(q => q.id).join(',')
    expect(order1.join(',')).not.toBe(orderB)
  })
})

describe('pickDailyQuestions — bez targets (ravnomjerno iz poola)', () => {
  it('vraća `count` pitanja bez ponavljanja', () => {
    const qs = pickDailyQuestions(MOCK_POOL, SEED_A, { count: 10 })
    expect(qs).toHaveLength(10)
    expect(new Set(qs.map(q => q.id)).size).toBe(10)
  })
})

describe('pickDailyQuestions — rubni slučajevi', () => {
  it('prazan/nedostajući pool vraća []', () => {
    expect(pickDailyQuestions([], SEED_A)).toEqual([])
    expect(pickDailyQuestions(null, SEED_A)).toEqual([])
    expect(pickDailyQuestions(undefined, SEED_A)).toEqual([])
  })

  it('manji pool od cilja vraća manje od traženog broja', () => {
    const sparse = [{ id: 'mc0', type: 'mc' }]
    expect(pickDailyQuestions(sparse, SEED_A, { targets: { mc: 10, matching: 4 } }).length).toBeLessThan(14)
  })
})
