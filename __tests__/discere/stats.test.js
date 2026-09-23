import { describe, it, expect } from 'vitest'
import { aggregateTopicStats, topicAccuracy, rankTopicsByAccuracy, overallAccuracy, summarizeAttempts } from '@/lib/discere/stats'
import { weakTopics, pickAdaptiveQuestions, WEAK_TOPIC_THRESHOLD } from '@/lib/discere/adaptive'
import { buildResult } from '@/lib/discere/scoring'

// Canonical oblik: lib/discere/scoring.js gradi topicBreakdown[topic] = { earned, possible },
// a lib/discere/progress.js to doslovno prepisuje u sim_progress.topic_breakdown.
const rows = [
  { pct: 80, topic_breakdown: { genetika: { earned: 4, possible: 5 }, evolucija: { earned: 1, possible: 5 } } },
  { pct: 60, topic_breakdown: { genetika: { earned: 3, possible: 5 }, ekologija: { earned: 5, possible: 5 } } },
]

describe('aggregateTopicStats', () => {
  it('zbraja earned/possible po temi preko više redaka', () => {
    const out = aggregateTopicStats(rows)
    expect(out.genetika).toEqual({ earned: 7, possible: 10 })
    expect(out.evolucija).toEqual({ earned: 1, possible: 5 })
    expect(out.ekologija).toEqual({ earned: 5, possible: 5 })
  })

  it('preskače retke bez topic_breakdown', () => {
    expect(aggregateTopicStats([{ pct: 50 }, null, undefined])).toEqual({})
  })

  it('podnosi prazan/nedostajući ulaz', () => {
    expect(aggregateTopicStats([])).toEqual({})
    expect(aggregateTopicStats(undefined)).toEqual({})
  })

  it('čita i legacy (engleski) oblik { correct, total }', () => {
    const out = aggregateTopicStats([{ topic_breakdown: { reading: { correct: 3, total: 4 } } }])
    expect(out.reading).toEqual({ earned: 3, possible: 4 })
    expect(topicAccuracy(out.reading)).toBe(75)
  })

  it('miješani izvori (canonical + legacy) se zbrajaju u istu temu', () => {
    const out = aggregateTopicStats([
      { topic_breakdown: { t: { earned: 2, possible: 4 } } },
      { topic_breakdown: { t: { correct: 1, total: 2 } } },
    ])
    expect(out.t).toEqual({ earned: 3, possible: 6 })
  })

  // Regresija: prije je funkcija čitala samo { correct, total } pa je agregacija
  // nad stvarnim sim_progress redcima davala same nule (prsten spremnosti 0 %,
  // rankTopicsByAccuracy prazan niz, adaptivno vježbanje bez slabih tema).
  it('agregira stvarni topic_breakdown iz buildResult()', () => {
    const q = (id, topic, correct) => ({
      id, type: 'mc', prompt: 'p', points: 2, topic, sourceRef: { task: id }, assets: [], explanation: null,
      options: [{ id: 'A', text: 'A' }, { id: 'B', text: 'B' }],
      answer: { kind: 'choice', correct: [correct], source: 'official' },
    })
    const exam = {
      meta: { subject: 'bio', key: '2026_ljeto', label: '2026. — Ljeto', level: null, maxPoints: 6 },
      questions: [q('q1', 'genetika', 'A'), q('q2', 'genetika', 'A'), q('q3', 'evolucija', 'A')],
    }
    const result = buildResult({
      exam,
      responses: { q1: 'A', q2: 'B', q3: 'B' },
      startedAt: '2026-09-10T10:00:00.000Z',
      completedAt: '2026-09-10T10:30:00.000Z',
    })
    // Ovo je točno ono što lib/discere/progress.js upisuje u sim_progress.topic_breakdown.
    const row = { pct: Math.round(result.percent), topic_breakdown: result.topicBreakdown }

    const stats = aggregateTopicStats([row])
    expect(stats.genetika).toEqual({ earned: 2, possible: 4 })
    expect(stats.evolucija).toEqual({ earned: 0, possible: 2 })
    expect(overallAccuracy(stats)).toBe(33)
    expect(rankTopicsByAccuracy(stats).map(t => t.topic)).toEqual(['evolucija', 'genetika'])
    expect(weakTopics(stats).map(t => t.topic)).toEqual(['evolucija', 'genetika'])
  })
})

describe('topicAccuracy', () => {
  it('računa postotak, zaokruženo', () => {
    expect(topicAccuracy({ earned: 1, possible: 3 })).toBe(33)
    expect(topicAccuracy({ earned: 0, possible: 0 })).toBe(0)
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

  it('minPossible filtrira teme s premalo mogućih bodova', () => {
    const stats = { a: { earned: 1, possible: 1 }, b: { earned: 0, possible: 5 } }
    expect(rankTopicsByAccuracy(stats, { minPossible: 3 }).map(t => t.topic)).toEqual(['b'])
  })
})

describe('overallAccuracy', () => {
  it('agregira preko svih tema', () => {
    const stats = aggregateTopicStats(rows)
    // ukupno earned=13, possible=20 → 65%
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
    const weak = weakTopics(stats, { minPossible: 2 })
    expect(weak.map(t => t.topic)).toEqual(['evolucija'])
    expect(weak.every(t => t.accuracy < WEAK_TOPIC_THRESHOLD)).toBe(true)
  })

  it('limit ograničava broj vraćenih tema', () => {
    const stats = { a: { earned: 0, possible: 5 }, b: { earned: 1, possible: 5 }, c: { earned: 2, possible: 5 } }
    expect(weakTopics(stats, { minPossible: 1, limit: 1 })).toHaveLength(1)
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
  /** rng koji redom vraća zadane vrijednosti (pa se ciklički ponavlja). */
  const seqRng = (...values) => { let i = 0; return () => values[i++ % values.length] }

  it('prioritizira pitanja iz slabih tema', () => {
    const picked = pickAdaptiveQuestions(pool, [{ topic: 'genetika' }], 2, seqRng(0.1, 0.2, 0.3, 0.4))
    expect(picked).toHaveLength(2)
    expect(picked.every(q => q.topic === 'genetika')).toBe(true)
  })

  it('popuni ostatak iz cijelog poola kad slabih tema nema dovoljno', () => {
    const picked = pickAdaptiveQuestions(pool, [{ topic: 'genetika' }], 4, seqRng(0.5))
    expect(picked).toHaveLength(4)
    expect(new Set(picked.map(q => q.id)).size).toBe(4)
  })

  it('bez slabih tema bira iz cijelog poola', () => {
    const picked = pickAdaptiveQuestions(pool, [], 2, seqRng(0.5))
    expect(picked).toHaveLength(2)
  })

  // Regresija: prije je miješanje išlo kroz `sort(() => rng() - 0.5)`, komparator
  // koji krši ugovor Array.prototype.sorta (za isti par vraća različit rezultat).
  // Ishod je ovisio o implementaciji sorta i bio sustavno pristran. Testovi ispod
  // pribijaju TOČNU permutaciju koju daje Fisher-Yates, pa pristran komparator pada.
  it('miješa Fisher-Yatesom: rng=0 daje točno očekivanu permutaciju', () => {
    // [q1,q2,q3,q4]; j=0 u svakom koraku:
    // i=3 → [q4,q2,q3,q1]; i=2 → [q3,q2,q4,q1]; i=1 → [q2,q3,q4,q1]
    const picked = pickAdaptiveQuestions(pool, [], 4, () => 0)
    expect(picked.map(q => q.id)).toEqual(['q2', 'q3', 'q4', 'q1'])
  })

  it('miješa Fisher-Yatesom: rng→1 znači j===i, tj. poredak ostaje izvoran', () => {
    const picked = pickAdaptiveQuestions(pool, [], 4, () => 0.999999)
    expect(picked.map(q => q.id)).toEqual(['q1', 'q2', 'q3', 'q4'])
  })

  it('miješanje je permutacija: rng sekvenca mijenja poredak, ne i skup', () => {
    // [q1,q2,q3,q4]; rng ciklus 0.9, 0.1:
    // i=3 → j=floor(0.9*4)=3 (bez promjene); i=2 → j=floor(0.1*3)=0 → [q3,q2,q1,q4];
    // i=1 → j=floor(0.9*2)=1 (bez promjene) → [q3,q2,q1,q4]
    const seq = seqRng(0.9, 0.1)
    const picked = pickAdaptiveQuestions(pool, [], 4, seq)
    expect(picked.map(q => q.id)).toEqual(['q3', 'q2', 'q1', 'q4'])
    expect([...picked.map(q => q.id)].sort()).toEqual(['q1', 'q2', 'q3', 'q4'])
  })

  it('rng izvan [0,1) ne izbacuje pitanja iz poola', () => {
    const outOfRange = pickAdaptiveQuestions(pool, [], 4, () => 5)
    expect([...outOfRange.map(q => q.id)].sort()).toEqual(['q1', 'q2', 'q3', 'q4'])
    const nan = pickAdaptiveQuestions(pool, [], 4, () => NaN)
    expect([...nan.map(q => q.id)].sort()).toEqual(['q1', 'q2', 'q3', 'q4'])
  })

  it('podnosi prazan pool i nevalidan ulaz', () => {
    expect(pickAdaptiveQuestions([], [], 3, () => 0.5)).toEqual([])
    expect(pickAdaptiveQuestions(null, null, 3, () => 0.5)).toEqual([])
  })
})
