// @vitest-environment happy-dom
import { describe, it, expect, beforeEach } from 'vitest'
import {
  storageKey, SRS_NEW_PER_DAY, dayOrdinal, sm2Update, buildSrsQueue,
  recordReview, upcomingCounts, loadSrsData, saveSrsData,
} from '@/lib/discere/srs'

describe('storageKey', () => {
  it('prefiksira predmetom', () => {
    expect(storageKey('bio')).toBe('disc_bio_srs')
  })
})

describe('dayOrdinal', () => {
  it('raste za točno 1 svaki UTC dan', () => {
    const before = new Date('2026-04-13T23:59:59.999Z').getTime()
    const after = new Date('2026-04-14T00:00:00.000Z').getTime()
    expect(dayOrdinal(after)).toBe(dayOrdinal(before) + 1)
  })
})

describe('sm2Update', () => {
  const now = new Date('2026-04-13T12:00:00.000Z').getTime()

  it('nova kartica s quality=0 dobiva interval 1 i intro danas', () => {
    const card = sm2Update(null, 0, now)
    expect(card.interval).toBe(1)
    expect(card.due).toBe(dayOrdinal(now) + 1)
    expect(card.intro).toBe(dayOrdinal(now))
    expect(card.reps).toBe(1)
  })

  it('nova kartica s quality=2 (znao sam) i dalje kreće od intervala 1', () => {
    const card = sm2Update(null, 2, now)
    expect(card.interval).toBe(1)
  })

  it('interval 1 → sljedeći ponovljeni prolaz je 6 dana', () => {
    const first = sm2Update(null, 2, now)
    const second = sm2Update(first, 2, now)
    expect(second.interval).toBe(6)
  })

  it('quality=0 uvijek resetira interval na 1, čak i za zrelu karticu', () => {
    const mature = { ef: 2.5, interval: 30, reps: 5 }
    const updated = sm2Update(mature, 0, now)
    expect(updated.interval).toBe(1)
    expect(updated.due).toBe(dayOrdinal(now) + 1)
  })

  it('ef nikad ne pada ispod 1.3', () => {
    let card = null
    for (let i = 0; i < 20; i++) card = sm2Update(card, 0, now)
    expect(card.ef).toBeGreaterThanOrEqual(1.3)
  })

  it('reps raste sa svakim pregledom', () => {
    let card = sm2Update(null, 2, now)
    expect(card.reps).toBe(1)
    card = sm2Update(card, 2, now)
    expect(card.reps).toBe(2)
  })
})

describe('buildSrsQueue', () => {
  const now = new Date('2026-04-13T12:00:00.000Z').getTime()
  const tod = dayOrdinal(now)
  const errorTracker = {
    e1_q1: { examKey: 'e1', qid: 'q1', topic: 't', count: 1 },
    e1_q2: { examKey: 'e1', qid: 'q2', topic: 't', count: 2 },
    e1_q3: { examKey: 'e1', qid: 'q3', topic: 't', count: 1 },
  }

  it('bez srsData sve su nove kartice, ograničene na newPerDay', () => {
    const queue = buildSrsQueue(errorTracker, {}, { newPerDay: 2, now })
    expect(queue).toHaveLength(2)
    expect(queue.every(item => item.isNew)).toBe(true)
  })

  it('dospjelo ponavljanje ulazi u red, nedospjelo ne', () => {
    const srsData = {
      e1_q1: { ef: 2.5, interval: 3, due: tod - 1, reps: 1 },
      e1_q2: { ef: 2.5, interval: 3, due: tod + 5, reps: 1 },
    }
    const queue = buildSrsQueue(errorTracker, srsData, { newPerDay: 0, now })
    expect(queue.map(q => q.key)).toEqual(['e1_q1'])
  })

  it('ponavljanja idu prije novih kartica, sortirana po roku', () => {
    const srsData = {
      e1_q2: { ef: 2.5, interval: 1, due: tod, reps: 1 },
    }
    const queue = buildSrsQueue(errorTracker, srsData, { newPerDay: 5, now })
    expect(queue[0].key).toBe('e1_q2')
    expect(queue[0].isNew).toBe(false)
  })

  it('već uvedene kartice danas smanjuju dozvoljeni broj novih', () => {
    const srsData = { e1_q1: { ef: 2.5, interval: 1, due: tod + 1, reps: 1, intro: tod } }
    const queue = buildSrsQueue(errorTracker, srsData, { newPerDay: 1, now })
    // e1_q1 nije dospio (due > tod) i nije nov (ima kartu) → izostaje;
    // preostala 2 su nova, ali newAllowed = 1 - 1(introToday) = 0
    expect(queue).toHaveLength(0)
  })
})

describe('recordReview', () => {
  it('imutabilno ažurira jednu karticu', () => {
    const before = { e1_q1: { ef: 2.5, interval: 3, due: 100, reps: 2 } }
    const now = Date.now()
    const after = recordReview(before, 'e1_q1', 2, now)
    expect(after).not.toBe(before)
    expect(before.e1_q1.reps).toBe(2)
    expect(after.e1_q1.reps).toBe(3)
  })

  it('kreira novu karticu kad ne postoji', () => {
    const now = Date.now()
    const after = recordReview({}, 'e1_q9', 1, now)
    expect(after.e1_q9.reps).toBe(1)
  })
})

describe('upcomingCounts', () => {
  it('broji sutra/tjedan/danas uvedene', () => {
    const now = new Date('2026-04-13T12:00:00.000Z').getTime()
    const tod = dayOrdinal(now)
    const srsData = {
      a: { due: tod + 1 },
      b: { due: tod + 5 },
      c: { due: tod + 10 },
      d: { intro: tod },
    }
    // dueWeek broji sve s due u (tod, tod+7], što uključuje i "a" (tod+1) osim "c" (tod+10)
    expect(upcomingCounts(srsData, now)).toEqual({ dueTomorrow: 1, dueWeek: 2, introToday: 1 })
  })
})

describe('loadSrsData / saveSrsData (localStorage)', () => {
  beforeEach(() => { try { localStorage.clear() } catch {} })

  it('round-trip preko localStoragea', () => {
    saveSrsData('bio', { e1_q1: { ef: 2.5, interval: 3, due: 100, reps: 1 } })
    expect(loadSrsData('bio')).toEqual({ e1_q1: { ef: 2.5, interval: 3, due: 100, reps: 1 } })
  })

  it('bez zapisa vraća prazan objekt', () => {
    expect(loadSrsData('bio')).toEqual({})
  })

  it('pokvaren JSON se tretira kao prazno stanje', () => {
    localStorage.setItem(storageKey('bio'), '{nije json')
    expect(loadSrsData('bio')).toEqual({})
  })

  it('dva predmeta imaju neovisno stanje', () => {
    saveSrsData('bio', { a: 1 })
    saveSrsData('fiz', { b: 2 })
    expect(loadSrsData('bio')).toEqual({ a: 1 })
    expect(loadSrsData('fiz')).toEqual({ b: 2 })
  })
})

describe('SRS_NEW_PER_DAY', () => {
  it('zadana vrijednost je 15', () => {
    expect(SRS_NEW_PER_DAY).toBe(15)
  })
})
