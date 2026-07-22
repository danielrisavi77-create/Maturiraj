// Smoke/regression tests for the roditelji real-data layer:
// parentAdapter (dashboard API → unified child shape) + the alert/recommendation engines.

import { adaptChild, adaptChildren } from '@/lib/roditelji/parentAdapter'
import { computeObavijesti } from '@/lib/roditelji/parentAlerts'
import { computePreporuke } from '@/lib/roditelji/parentRecommendations'

const NOW = new Date('2026-05-01T12:00:00Z')
const iso = (days) => new Date(NOW.getTime() + days * 86400000).toISOString()

beforeEach(() => {
  vi.useFakeTimers()
  vi.setSystemTime(NOW)
})
afterEach(() => {
  vi.useRealTimers()
})

function fullDashboard() {
  return {
    child: { id: 'c1', email: 'luka.horvat@example.com', name: 'Luka Horvat', plan: 'pro' },
    targets: [
      {
        studij_id: 's1', priority: 1, active: true, putting_rate: 60,
        studij: {
          id: 's1', naziv: 'Računarstvo', fak_short: 'FER', color: '#4b7bff',
          predmeti: ['Matematika A'], prag_2025: 800,
          prijava_do_iso: iso(10), ispit_iso: iso(40),
        },
      },
    ],
    progress: [
      { predmet: 'matematika', skripte_total_chapters: 20, skripte_viewed_chapters: 14, skripte_mastered_chapters: 8, vjezbe_total_attempts: 48, vjezbe_correct: 30, vjezbe_accuracy: 72, simulator_best_score: 70, simulator_last_score: 65, simulator_attempts_count: 5, last_activity_at: iso(0) },
      { predmet: 'kemija', skripte_total_chapters: 10, skripte_viewed_chapters: 3, skripte_mastered_chapters: 1, vjezbe_total_attempts: 8, vjezbe_correct: 3, vjezbe_accuracy: 35, simulator_best_score: 30, simulator_last_score: 25, simulator_attempts_count: 2, last_activity_at: iso(-2) },
      { predmet: 'engleski', skripte_total_chapters: 15, skripte_viewed_chapters: 15, skripte_mastered_chapters: 12, vjezbe_total_attempts: 60, vjezbe_correct: 54, vjezbe_accuracy: 90, simulator_best_score: 88, simulator_last_score: 86, simulator_attempts_count: 6, last_activity_at: iso(0) },
    ],
    sim_attempts: [{ id: 'a1', score_pct: 88, created_at: iso(-1), target_studij_id: 's1', status: 'completed' }],
    activity: {
      daily: [10, 20, 0, 30, 15, 0, 25, 40, 10, 0, 0, 20, 30, 15],
      sections: [{ section: 'discere', minutes: 120 }, { section: 'skripte', minutes: 60 }],
      week_minutes: 95,
      prev_week_minutes: 115,
    },
    last_active_at: iso(0),
    days_inactive: 0,
  }
}

describe('adaptChild — full realistic payload', () => {
  it('produces a unified child with both Group A and Group B fields', () => {
    const c = adaptChild(fullDashboard(), 0)
    // Group B (summary)
    expect(c.childId).toBe('c1')
    expect(c.email).toBe('luka.horvat@example.com')
    expect(c.planType).toBe('pro')
    expect(c.status).toBe('active') // days_inactive 0
    expect(c.lastActiveAt).toBe(iso(0))
    expect(c.weekMinutes).toBe(95)
    expect(c.prevWeekMinutes).toBe(115)
    // Group A (rich)
    expect(c.id).toBe('c1') // id === childId for Group A compat
    expect(c.firstName).toBe('Luka')
    expect(c.avatar).toBe('LH')
    expect(typeof c.color).toBe('string')
    expect(c.cilj).toBe('FER')
  })

  it('derives predmeti sorted ascending with clamped prog + risk tiers', () => {
    const c = adaptChild(fullDashboard(), 0)
    expect(c.predmeti).toHaveLength(3)
    const progs = c.predmeti.map(p => p.prog)
    // sorted ascending
    expect([...progs].sort((a, b) => a - b)).toEqual(progs)
    for (const p of c.predmeti) {
      expect(p.prog).toBeGreaterThanOrEqual(0)
      expect(p.prog).toBeLessThanOrEqual(100)
      expect(typeof p.name).toBe('string')
    }
    const kemija = c.predmeti.find(p => p.name === 'Kemija')
    expect(kemija.prog).toBeLessThan(40)
    expect(kemija.rizik).toBe('kritično')
    const engleski = c.predmeti.find(p => p.name === 'Engleski')
    expect(engleski.prog).toBeGreaterThanOrEqual(85)
    expect(engleski.rizik).toBeNull()
  })

  it('derives 7-day aktivnost (hours), totals and ukupno', () => {
    const c = adaptChild(fullDashboard(), 0)
    expect(c.aktivnost).toHaveLength(7)
    c.aktivnost.forEach(h => expect(typeof h).toBe('number'))
    expect(c.zadaci).toBe(48 + 8 + 60)
    expect(c.ukupno).toBeGreaterThan(0)
    expect(c.ukupno).toBeLessThanOrEqual(100)
    expect(Array.isArray(c.sections)).toBe(true)
  })

  it('builds upcoming deadlines from target dates with daysUntil', () => {
    const c = adaptChild(fullDashboard(), 0)
    expect(c.upcoming.length).toBeGreaterThanOrEqual(2)
    const prijava = c.upcoming.find(u => u.tip === 'rok')
    expect(prijava.daysUntil).toBe(10)
    expect(typeof prijava.datum).toBe('string')
  })

  it('attaches computed obavijesti and preporuke arrays', () => {
    const c = adaptChild(fullDashboard(), 0)
    expect(Array.isArray(c.obavijesti)).toBe(true)
    expect(Array.isArray(c.preporuke)).toBe(true)
    // kemija kritično → a warn; engleski ≥85 → a good
    expect(c.obavijesti.some(o => o.tip === 'warn')).toBe(true)
    expect(c.obavijesti.some(o => o.tip === 'good')).toBe(true)
    expect(c.preporuke.length).toBeGreaterThan(0)
  })
})

describe('adaptChild — empty / malformed payloads never throw', () => {
  it('handles an empty object', () => {
    const c = adaptChild({}, 0)
    expect(c.predmeti).toEqual([])
    expect(c.aktivnost).toEqual([])
    expect(c.obavijesti).toEqual([])
    expect(c.upcoming).toEqual([])
    expect(c.ukupno).toBe(0)
    expect(c.name).toBe('Dijete')
    expect(c.avatar).toBe('D') // initials of the 'Dijete' fallback name
    expect(c.status).toBe('inactive')
  })

  it('handles undefined', () => {
    expect(() => adaptChild(undefined, 0)).not.toThrow()
  })

  it('adaptChildren filters nulls and maps the rest', () => {
    const out = adaptChildren([fullDashboard(), null, {}])
    expect(out).toHaveLength(2)
    expect(out[0].childId).toBe('c1')
  })

  it('adaptChildren of empty/undefined → []', () => {
    expect(adaptChildren([])).toEqual([])
    expect(adaptChildren(undefined)).toEqual([])
  })
})

describe('computeObavijesti — rules', () => {
  it('empty child → []', () => {
    expect(computeObavijesti(null)).toEqual([])
    expect(computeObavijesti({})).toEqual([])
  })

  it('inactivity ≥5 days → warn', () => {
    const out = computeObavijesti({ childId: 'x', firstName: 'Ana', daysInactive: 6, predmeti: [], upcoming: [] })
    expect(out.some(o => o.tip === 'warn' && /dana bez aktivnosti/.test(o.naslov))).toBe(true)
  })

  it('activity drop vs previous week → warn', () => {
    const out = computeObavijesti({ childId: 'x', prevWeekMinutes: 120, weekMinutes: 20, predmeti: [], upcoming: [] })
    expect(out.some(o => o.id === 'drop-x')).toBe(true)
  })

  it('critical subject → warn; strong subject → good', () => {
    const out = computeObavijesti({
      childId: 'x', predmeti: [{ name: 'Kemija', prog: 30, rizik: 'kritično' }, { name: 'Engleski', prog: 90, rizik: null }], upcoming: [],
    })
    expect(out.some(o => o.tip === 'warn' && o.naslov.includes('Kemija'))).toBe(true)
    expect(out.some(o => o.tip === 'good' && o.naslov.includes('Engleski'))).toBe(true)
  })

  it('upcoming deadline ≤14 days → info', () => {
    const out = computeObavijesti({ childId: 'x', predmeti: [], upcoming: [{ opis: 'FER — ispit', tip: 'ispit', daysUntil: 5, datum: '6. svibnja' }] })
    expect(out.some(o => o.tip === 'info' && o.akcija === 'Otvori rokovi')).toBe(true)
  })
})

describe('computePreporuke — rules + fallback', () => {
  it('empty child → []', () => {
    expect(computePreporuke(null)).toEqual([])
  })

  it('no signals → single fallback recommendation', () => {
    const out = computePreporuke({ firstName: 'Ana', predmeti: [{ name: 'Mat', prog: 70, rizik: null }], upcoming: [], daysInactive: 0 })
    expect(out).toHaveLength(1)
    expect(out[0].id).toBe('rec-general')
  })

  it('critical + inactivity + strong + deadline → targeted recs', () => {
    const out = computePreporuke({
      firstName: 'Luka',
      daysInactive: 5,
      predmeti: [{ name: 'Kemija', prog: 30, rizik: 'kritično' }, { name: 'Engleski', prog: 90, rizik: null }],
      upcoming: [{ opis: 'FER — ispit', tip: 'ispit', daysUntil: 10, datum: '11. svibnja' }],
    })
    const tags = out.map(r => r.tag)
    expect(tags).toContain('rutina')
    expect(tags).toContain('komunikacija')
    expect(tags).toContain('motivacija')
    expect(tags).toContain('organizacija')
    // every rec has the shape the page renders
    for (const r of out) {
      expect(r).toHaveProperty('id')
      expect(r).toHaveProperty('ico')
      expect(r).toHaveProperty('naslov')
      expect(r).toHaveProperty('opis')
      expect(r).toHaveProperty('tagC')
    }
  })
})
