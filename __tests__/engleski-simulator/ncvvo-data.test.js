/**
 * ncvvo-data.test.js
 *
 * `lib/engleski-simulator/ncvvoData.js` smije sadržavati samo brojke preuzete iz
 * objavljenih NCVVO dokumenata. Ovi testovi čuvaju oblik podataka i pravilo da
 * svaka godina nosi URL izvora, da se ne bi tiho vratile izmišljene vrijednosti.
 */
import { describe, it, expect } from 'vitest'
import {
  NCVVO_ENG_AVG,
  NCVVO_FETCHED_AT,
  parseExamKey,
  getNcvvoAvg,
  pickNcvvoComparison,
} from '../../lib/engleski-simulator/ncvvoData.js'

const years = Object.keys(NCVVO_ENG_AVG).map(Number)

describe('NCVVO_ENG_AVG — oblik podataka', () => {
  it('pokriva barem tri godine', () => {
    expect(years.length).toBeGreaterThanOrEqual(3)
  })

  it('datum dohvata je ISO datum', () => {
    expect(NCVVO_FETCHED_AT).toMatch(/^\d{4}-\d{2}-\d{2}$/)
  })

  it.each(years)('godina %i ima potpun zapis s URL-om izvora', year => {
    const row = NCVVO_ENG_AVG[year]
    expect(year).toBeGreaterThanOrEqual(2010)
    expect(row.schoolYear).toMatch(/^\d{4}\.\/\d{4}\.$/)

    for (const razina of ['visa', 'osnovna']) {
      expect(typeof row[razina]).toBe('number')
      expect(row[razina]).toBeGreaterThan(0)
      expect(row[razina]).toBeLessThanOrEqual(100)
    }

    // Svaka godina mora imati provjerljiv izvor: stranicu NCVVO-a i sam PDF.
    expect(row.sourceUrl).toMatch(/^https:\/\/(www\.)?ncvvo\.hr\//)
    expect(row.pdfUrl).toMatch(/^https:\/\/(www\.)?ncvvo\.hr\/.*\.pdf$/i)
    expect(row.sourceLabel).toContain('NCVVO')
    expect(typeof row.page).toBe('string')
    expect(row.page.length).toBeGreaterThan(0)
  })

  it('nema veličina koje NCVVO ne objavljuje (prolaznost, raspodjela ocjena)', () => {
    for (const year of years) {
      const row = NCVVO_ENG_AVG[year]
      expect(row).not.toHaveProperty('pass')
      expect(row).not.toHaveProperty('dist')
    }
  })

  it('viša je razina u svakoj godini prosječno bolje riješena od osnovne', () => {
    for (const year of years) {
      expect(NCVVO_ENG_AVG[year].visa).toBeGreaterThan(NCVVO_ENG_AVG[year].osnovna)
    }
  })
})

describe('parseExamKey', () => {
  it('prepoznaje osnovnu razinu', () => {
    expect(parseExamKey('2022_ljeto')).toEqual({ year: 2022, razina: 'osnovna' })
  })

  it('prepoznaje višu razinu po prefiksu vis_', () => {
    expect(parseExamKey('vis_2022_ljeto')).toEqual({ year: 2022, razina: 'visa' })
  })

  it('vraća null za neispravan ključ', () => {
    expect(parseExamKey('nesto')).toBeNull()
    expect(parseExamKey(undefined)).toBeNull()
    expect(parseExamKey(null)).toBeNull()
  })
})

describe('getNcvvoAvg', () => {
  it('vraća podatak za godinu i razinu koje NCVVO ima', () => {
    const r = getNcvvoAvg('vis_2022_ljeto')
    expect(r.avg).toBe(NCVVO_ENG_AVG[2022].visa)
    expect(r.razina).toBe('visa')
    expect(r.schoolYear).toBe('2021./2022.')
    expect(r.pdfUrl).toMatch(/\.pdf$/i)
  })

  it('vraća null za godinu bez objavljenog podatka — ništa se ne izmišlja', () => {
    expect(getNcvvoAvg('2025_ljeto')).toBeNull()
    expect(getNcvvoAvg('vis_2024_prvi')).toBeNull()
    expect(getNcvvoAvg('2020_ljeto')).toBeNull() // šk. god. 2019./2020. nije objavljena
  })
})

describe('pickNcvvoComparison', () => {
  const h = (pct, examKey) => ({ pct, examKey })

  it('bira najnoviji unos za koji postoji službeni podatak', () => {
    const res = pickNcvvoComparison([h(50, 'vis_2022_ljeto'), h(70, '2025_ljeto')])
    expect(res.year).toBe(2022)
    expect(res.razina).toBe('visa')
    expect(res.userAvg).toBe(50)
    expect(res.sampleSize).toBe(1)
  })

  it('prosjek računa samo iz ispita iste razine', () => {
    const res = pickNcvvoComparison([h(40, '2022_ljeto'), h(90, 'vis_2018_ljeto'), h(60, '2019_ljeto')])
    expect(res.razina).toBe('osnovna')
    expect(res.userAvg).toBe(50) // (40 + 60) / 2
    expect(res.sampleSize).toBe(2)
  })

  it('vraća null kad nijedan riješeni ispit nema službeni podatak', () => {
    expect(pickNcvvoComparison([h(70, '2025_ljeto'), h(80, 'vis_2024_prvi')])).toBeNull()
    expect(pickNcvvoComparison([])).toBeNull()
    expect(pickNcvvoComparison(null)).toBeNull()
  })
})
