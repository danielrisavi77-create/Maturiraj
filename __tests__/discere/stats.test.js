import { describe, it, expect } from 'vitest'
import { aggregateTopicStats, topicAccuracy, rankTopicsByAccuracy, overallAccuracy, summarizeAttempts } from '@/lib/discere/stats'
import { weakTopics, pickAdaptiveQuestions, WEAK_TOPIC_THRESHOLD } from '@/lib/discere/adaptive'

const rows = [
  { pct: 80, topic_breakdown: { genetika: { correct: 4, total: 5 }, evolucija: { correct: 1, total: 5 } } },
  { pct: 60, topic_breakdown: { genetika: { correct: 3, total: 5 }, ekologija: { correct: 5, total: 5 } } },
]

describe('aggregateTopicStats', () => {
  it('zbraja correct/total po temi preko više redaka', () => {
    const out = aggregateTopicStats(rows)
    expect(out.genetika).toEqual({ correct: 7, total: 10 })
    expect(out.evolucija).toEqual({ correct: 1, total: 5 })
    expect(out.ekologija).toEqual({ correct: 5, total: 5 })
  })

  it('preskače retke bez topic_breakdown', () => {
    expect(aggregateTopicStats([{ pct: 50 }, null, undefined])).toEqual({})
  })

  it('podnosi prazan/nedostajući ulaz', () => {
    expect(aggregateTopicStats([])).toEqual({})
    expect(aggregateTopicStats(undefined)).toEqual({})
  })
})

describe('topicAccuracy', () => {
  it('računa postotak, zaokruženo', () => {
    expect(topicAccuracy({ correct: 1, total: 3 })).toBe(33)
    expect(topicAccuracy({ correct: 0, total: 0 })).toBe(0)
    expect(topicAccuracy(null)).toBe(0)
  })
})

describe('rankTopicsByAccuracy', () => {
  it('sortira rastuće po točnosti, najslabija tema prva', () => {
    const stats = aggregateTopicStats(rows)
    const ranked = rankTopicsByAccuracy(stats)
    expect(ranked[0].topic).toBe('evolucija') // 20%
    expect(ranked.at(-1).topic).toBe('ekologija') // 100%
  })

  it('minAttempts filtrira teme s premalo pokušaja', () => {
    const stats = { a: { correct: 1, total: 1 }, b: { correct: 0, total: 5 } }
    expect(rankTopicsByAccuracy(stats, { minAttempts: 3 }).map(t => t.topic)).toEqual(['b'])
  })
})

describe('overallAccuracy', () => {
  it('agregira preko svih tema', () => {
    const stats = aggregateTopicStats(rows)
    // ukupno correct=13, total=20 → 65%
    expect(overallAccuracy(stats)).toBe(65)
  })
  it('bez pokušaja vraća 0', () => {
    expect(overallAccuracy({})).toBe(0)
  })
})

describe('summarizeAttempts', () => {
  it('broji pokušaje i prosječan postotak', () => {
    expect(summarizeAttempts(rows)).toEqual({ count: 2, avgPct: 70 })
  })
  it('prazan niz daje count 0', () => {
    expect(summarizeAttempts([])).toEqual({ count: 0, avgPct: 0 })
  })
})

// ─── adaptive.js (weakTopics/pickAdaptiveQuestions grade se na stats.js) ──────
describe('weakTopics', () => {
  it('vraća teme ispod praga, najslabija prva', () => {
    // genetika je 70% (== prag, ne ispod), pa ostaje samo evolucija (20%).
    const stats = aggregateTopicStats(rows)
    const weak = weakTopics(stats, { minAttempts: 2 })
    expect(weak.map(t => t.topic)).toEqual(['evolucija'])
    expect(weak.every(t => t.accuracy < WEAK_TOPIC_THRESHOLD)).toBe(true)
  })

  it('limit ograničava broj vraćenih tema', () => {
    const stats = { a: { correct: 0, total: 5 }, b: { correct: 1, total: 5 }, c: { correct: 2, total: 5 } }
    expect(weakTopics(stats, { minAttempts: 1, limit: 1 })).toHaveLength(1)
  })

  it('bez pokušaja vraća prazan niz', () => {
    expect(weakTopics({})).toEqual([])
  })
})

describe('pickAdaptiveQuestions', () => {
  const pool = [
    { id: 'q1', topic: 'genetika' },
    { id: 'q2', topic: 'genetika' },
    { id: 'q3', topic: 'evolucija' },
    { id: 'q4', topic: 'ekologija' },
  ]

  it('prioritizira pitanja iz slabih tema', () => {
    const rng = (() => { let calls = [0.1, 0.2, 0.3, 0.4]; let i = 0; return () => calls[i++ % calls.length] })()
    const picked = pickAdaptiveQuestions(pool, [{ topic: 'genetika' }], 2, rng)
    expect(picked).toHaveLength(2)
    expect(picked.every(q => q.topic === 'genetika')).toBe(true)
  })

  it('popuni ostatak iz cijelog poola kad slabih tema nema dovoljno', () => {
    const picked = pickAdaptiveQuestions(pool, [{ topic: 'genetika' }], 4, () => 0.5)
    expect(picked).toHaveLength(4)
    expect(new Set(picked.map(q => q.id)).size).toBe(4)
  })

  it('bez slabih tema bira iz cijelog poola', () => {
    const picked = pickAdaptiveQuestions(pool, [], 2, () => 0.5)
    expect(picked).toHaveLength(2)
  })
})
