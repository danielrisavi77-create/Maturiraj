import { describe, it, expect } from 'vitest'
import { EXAMS } from '../../lib/engleski-simulator/exams.js'
import { chk } from '../../lib/engleski-simulator/scoring.js'
import {
  EXAM_STRUCTURE, structureFor, getExamBlocks, totalMinutes,
  scoringUnits, sectionScores, weightedEstimate,
} from '../../lib/engleski-simulator/examStructure.js'

// Pomoćnik: indeksi pitanja danih sekcija u ispitu
function idxOf(exam, sections) {
  const out = []
  exam.qs.forEach((q, i) => { if (sections.includes(q.section)) out.push(i) })
  return out
}

describe('EXAM_STRUCTURE (NCVVO katalog 2025./2026.)', () => {
  it('viša razina ima tri bloka 70/75/35 s ponderom 1/3', () => {
    const b = EXAM_STRUCTURE.visa.blocks
    expect(b.map(x => x.id)).toEqual(['reading', 'writing', 'listening'])
    expect(b.map(x => x.minutes)).toEqual([70, 75, 35])
    expect(b.reduce((a, x) => a + x.minutes, 0)).toBe(180)
    b.forEach(x => expect(x.weight).toBeCloseTo(1 / 3, 10))
  })

  it('osnovna razina ima zajednički blok čitanje+pisanje 75 min i slušanje 30 min', () => {
    const b = EXAM_STRUCTURE.osnovna.blocks
    expect(b.map(x => x.id)).toEqual(['reading_writing', 'listening'])
    expect(b.map(x => x.minutes)).toEqual([75, 30])
    expect(b[0].parts.map(p => [p.id, p.weight])).toEqual([['reading', 0.4], ['writing', 0.3]])
    expect(b[1].weight).toBe(0.3)
  })

  it('structureFor vraća osnovnu za mixed i nepoznatu razinu', () => {
    expect(structureFor('visa')).toBe(EXAM_STRUCTURE.visa)
    expect(structureFor('osnovna')).toBe(EXAM_STRUCTURE.osnovna)
    expect(structureFor('mixed')).toBe(EXAM_STRUCTURE.osnovna)
    expect(structureFor(undefined)).toBe(EXAM_STRUCTURE.osnovna)
  })
})

describe('getExamBlocks — stvarni ispiti', () => {
  it('standardni viša razina: tri bloka s ispravnim qIdx po sekciji', () => {
    const exam = EXAMS.vis_2024_prvi
    expect(exam.razina).toBe('visa')
    const blocks = getExamBlocks(exam)
    expect(blocks.map(b => b.id)).toEqual(['reading', 'writing', 'listening'])
    expect(blocks[0].qIdx).toEqual(idxOf(exam, ['reading', 'use_of_english']))
    expect(blocks[1].qIdx).toEqual(idxOf(exam, ['writing']))
    expect(blocks[2].qIdx).toEqual(idxOf(exam, ['listening']))
    // svako pitanje je točno u jednom bloku
    const all = blocks.flatMap(b => b.qIdx).sort((a, b) => a - b)
    expect(all).toEqual(exam.qs.map((_, i) => i))
  })

  it('standardni osnovna razina: dva bloka, prvi sadrži i čitanje i pisanje', () => {
    const exam = EXAMS['2024_ljeto']
    expect(exam.razina).toBe('osnovna')
    const blocks = getExamBlocks(exam)
    expect(blocks.map(b => b.id)).toEqual(['reading_writing', 'listening'])
    expect(blocks[0].qIdx).toEqual(idxOf(exam, ['reading', 'use_of_english', 'writing']))
    expect(blocks[0].qIdx.some(i => exam.qs[i].section === 'reading')).toBe(true)
    expect(blocks[0].qIdx.some(i => exam.qs[i].section === 'writing')).toBe(true)
    expect(blocks[1].qIdx).toEqual(idxOf(exam, ['listening']))
  })

  it('stari osnovna ispit s use_of_english: ta pitanja idu u blok čitanja', () => {
    const exam = EXAMS['2011_ljeto']
    const uoe = idxOf(exam, ['use_of_english'])
    expect(uoe.length).toBeGreaterThan(0)
    const blocks = getExamBlocks(exam)
    expect(blocks[0].id).toBe('reading_writing')
    uoe.forEach(i => expect(blocks[0].qIdx).toContain(i))
  })

  it('2010_zima (bez slušanja): samo blok čitanje+pisanje', () => {
    const exam = EXAMS['2010_zima']
    expect(exam.hasListening).toBe(false)
    const blocks = getExamBlocks(exam)
    expect(blocks.map(b => b.id)).toEqual(['reading_writing'])
    expect(blocks[0].qIdx.length).toBe(exam.qs.length)
  })

  it('2010_ljeto (samo slušanje): samo blok slušanja', () => {
    const exam = EXAMS['2010_ljeto']
    expect(exam.hasReading).toBe(false)
    const blocks = getExamBlocks(exam)
    expect(blocks.map(b => b.id)).toEqual(['listening'])
    expect(blocks[0].qIdx).toEqual(exam.qs.map((_, i) => i))
  })

  it('razina "mixed" koristi osnovnu strukturu', () => {
    const exam = { razina: 'mixed', qs: [
      { id: 'a', section: 'reading', type: 'mc' },
      { id: 'b', section: 'writing', type: 'es' },
      { id: 'c', section: 'listening', type: 'mc' },
    ] }
    const blocks = getExamBlocks(exam)
    expect(blocks.map(b => b.id)).toEqual(['reading_writing', 'listening'])
    expect(blocks[0].qIdx).toEqual([0, 1])
    expect(blocks[1].qIdx).toEqual([2])
  })

  it('prazan ili nedostajući ispit daje prazan popis blokova', () => {
    expect(getExamBlocks(null)).toEqual([])
    expect(getExamBlocks({ razina: 'visa', qs: [] })).toEqual([])
  })
})

describe('totalMinutes', () => {
  it('180 min za višu razinu', () => {
    expect(totalMinutes(EXAMS.vis_2024_prvi)).toBe(180)
  })

  it('105 min za osnovnu razinu', () => {
    expect(totalMinutes(EXAMS['2024_ljeto'])).toBe(105)
  })

  it('75 min za 2010_zima (bez slušanja)', () => {
    expect(totalMinutes(EXAMS['2010_zima'])).toBe(75)
  })

  it('30 min za 2010_ljeto (samo slušanje)', () => {
    expect(totalMinutes(EXAMS['2010_ljeto'])).toBe(30)
  })

  it('0 za ispit bez pitanja', () => {
    expect(totalMinutes({ razina: 'visa', qs: [] })).toBe(0)
  })

  it('svaki stvarni ispit ima trajanje veće od nule', () => {
    Object.values(EXAMS).forEach(ex => {
      expect(totalMinutes(ex)).toBeGreaterThan(0)
    })
  })
})

describe('scoringUnits', () => {
  it('viša: tri cjeline s ponderom 1/3', () => {
    expect(scoringUnits('visa').map(u => u.id)).toEqual(['reading', 'writing', 'listening'])
  })

  it('osnovna: čitanje i pisanje su odvojene cjeline unutar zajedničkog bloka', () => {
    const u = scoringUnits('osnovna')
    expect(u.map(x => x.id)).toEqual(['reading', 'writing', 'listening'])
    expect(u.map(x => x.weight)).toEqual([0.4, 0.3, 0.3])
  })
})

// Sintetički ispiti s poznatim odgovorima (mc: sol.cl je točno slovo)
function mc(id, section, sol) {
  return { id, section, type: 'mc', q: 'Q', opts: ['a', 'b'], sol: { cl: sol } }
}
function mkQs(section, n) {
  return Array.from({ length: n }, (_, i) => mc(section[0] + i, section, 'A'))
}

describe('sectionScores i weightedEstimate', () => {
  const visaExam = {
    razina: 'visa',
    qs: [
      ...mkQs('reading', 10),
      { id: 'w1', section: 'writing', type: 'es', q: 'Esej', sol: { ex: 'primjer' } },
      ...mkQs('listening', 10),
    ],
  }
  // Čitanje 8/10, Slušanje 5/10
  const visaAnswers = {}
  visaExam.qs.forEach(q => {
    if (q.section === 'reading') visaAnswers[q.id] = Number(q.id.slice(1)) < 8 ? 'A' : 'B'
    if (q.section === 'listening') visaAnswers[q.id] = Number(q.id.slice(1)) < 5 ? 'A' : 'B'
  })
  visaAnswers.w1 = 'Moj esej.'

  it('viša: čitanje 8/10, slušanje 5/10, pisanje neocijenjeno', () => {
    const sc = sectionScores(visaExam, visaAnswers, chk)
    expect(sc.map(s => s.id)).toEqual(['reading', 'writing', 'listening'])
    expect(sc[0]).toMatchObject({ correct: 8, total: 10, autoGraded: true, pct: 80 })
    expect(sc[1]).toMatchObject({ total: 1, autoGraded: false, pct: null })
    expect(sc[2]).toMatchObject({ correct: 5, total: 10, autoGraded: true, pct: 50 })
  })

  it('viša: ponderirana procjena bez pisanja je (80 + 50) / 2 = 65', () => {
    const w = weightedEstimate(sectionScores(visaExam, visaAnswers, chk))
    expect(w.pct).toBe(65)
    expect(w.coveredWeight).toBeCloseTo(2 / 3, 10)
  })

  const osnExam = {
    razina: 'osnovna',
    qs: [...mkQs('reading', 10), ...mkQs('listening', 10)],
  }
  // Čitanje 10/10, Slušanje 0/10
  const osnAnswers = {}
  osnExam.qs.forEach(q => { osnAnswers[q.id] = q.section === 'reading' ? 'A' : 'B' })

  it('osnovna: čitanje 100 %, slušanje 0 % → (0.4·100 + 0.3·0) / 0.7 = 57', () => {
    const sc = sectionScores(osnExam, osnAnswers, chk)
    expect(sc.map(s => s.id)).toEqual(['reading', 'listening'])
    expect(sc[0]).toMatchObject({ correct: 10, total: 10, pct: 100, weight: 0.4 })
    expect(sc[1]).toMatchObject({ correct: 0, total: 10, pct: 0, weight: 0.3 })
    const w = weightedEstimate(sc)
    expect(w.pct).toBe(57)
    expect(w.coveredWeight).toBeCloseTo(0.7, 10)
  })

  it('cjeline bez pitanja se izostavljaju (ispit samo sa slušanjem)', () => {
    const sc = sectionScores({ razina: 'osnovna', qs: mkQs('listening', 4) }, {}, chk)
    expect(sc.map(s => s.id)).toEqual(['listening'])
    expect(weightedEstimate(sc)).toEqual({ pct: 0, coveredWeight: 0.3 })
  })

  it('kratki odgovori i eseji ne ulaze u ukupan broj auto-ocjenjive cjeline', () => {
    const exam = { razina: 'visa', qs: [
      ...mkQs('reading', 2),
      { id: 'rsa', section: 'reading', type: 'sa', q: 'Q', sol: { ans: 'x' } },
    ] }
    const sc = sectionScores(exam, { r0: 'A', r1: 'A' }, chk)
    expect(sc[0]).toMatchObject({ id: 'reading', correct: 2, total: 2, pct: 100 })
  })

  it('weightedEstimate vraća null kad ništa nije auto-ocjenjivo', () => {
    const sc = sectionScores({ razina: 'visa', qs: [{ id: 'w1', section: 'writing', type: 'es', q: 'Q', sol: {} }] }, {}, chk)
    expect(sc.map(s => s.id)).toEqual(['writing'])
    expect(weightedEstimate(sc)).toEqual({ pct: null, coveredWeight: 0 })
    expect(weightedEstimate([])).toEqual({ pct: null, coveredWeight: 0 })
  })

  it('stvarni osnovni ispit: sve tri cjeline, pisanje neocijenjeno', () => {
    const sc = sectionScores(EXAMS['2024_ljeto'], {}, chk)
    expect(sc.map(s => s.id)).toEqual(['reading', 'writing', 'listening'])
    expect(sc.find(s => s.id === 'writing').autoGraded).toBe(false)
    expect(weightedEstimate(sc).pct).toBe(0)
  })
})
