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
  comparablePct,
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
    expect(parseExamKey('2022_ljeto')).toEqual({ year: 2022, season: 'ljeto', razina: 'osnovna' })
  })

  it('prepoznaje višu razinu po prefiksu vis_', () => {
    expect(parseExamKey('vis_2022_ljeto')).toEqual({ year: 2022, season: 'ljeto', razina: 'visa' })
  })

  it('zadržava rok iz ključa — bez toga jesenski ispit dobiva ljetnu brojku', () => {
    expect(parseExamKey('2018_jesen').season).toBe('jesen')
    expect(parseExamKey('vis_2012_zima').season).toBe('zima')
    expect(parseExamKey('vis_2024_prvi').season).toBe('prvi')
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

  it('pokriva šk. god. 2019./2020. — analiza JE objavljena i povezana s ncvvo.hr', () => {
    // https://www.ncvvo.hr/.../2021/03/Statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-19-20.pdf
    // Tablica 28., otisnuta str. 46 (A) i Tablica 36., otisnuta str. 52 (B).
    expect(getNcvvoAvg('vis_2020_ljeto').avg).toBe(78.26)
    expect(getNcvvoAvg('2020_ljeto').avg).toBe(63.44)
    expect(getNcvvoAvg('2020_ljeto').schoolYear).toBe('2019./2020.')
  })

  it('vraća null za godinu bez objavljenog podatka — ništa se ne izmišlja', () => {
    expect(getNcvvoAvg('2025_ljeto')).toBeNull()
    expect(getNcvvoAvg('vis_2024_prvi')).toBeNull()
  })

  it('ne pripisuje ljetnu brojku jesenskom, zimskom ni drugom roku', () => {
    // Jesenski rok ima vlastite tablice i bitno drukčiju populaciju: u šk. god.
    // 2019./2020. ljeto je 78,26 (A) i 63,44 (B), a jesen 66,0 i 41,0.
    for (const key of ['2018_jesen', '2019_jesen', '2020_jesen', '2021_jesen', '2022_jesen',
      'vis_2018_jesen', 'vis_2019_jesen', 'vis_2020_jesen', 'vis_2021_jesen', 'vis_2022_jesen']) {
      expect(getNcvvoAvg(key)).toBeNull()
    }
    expect(getNcvvoAvg('vis_2012_zima')).toBeNull()
  })
})

describe('comparablePct', () => {
  it('uzima ponderirani rezultat, a ne udio točnih pitanja', () => {
    expect(comparablePct({ pct: 90, weighted: 61 })).toBe(61)
    expect(comparablePct({ pct: 90, weighted: { pct: 61 } })).toBe(61)
  })

  it('vraća null kad zapis nema ponderirani rezultat (stara povijest)', () => {
    expect(comparablePct({ pct: 90 })).toBeNull()
    expect(comparablePct({ pct: 90, weighted: null })).toBeNull()
    expect(comparablePct(null)).toBeNull()
  })
})

describe('pickNcvvoComparison', () => {
  /** Zapis povijesti kakav simulator stvarno sprema. */
  const h = (weighted, examKey, mode = 'simulacija') => ({ pct: weighted, weighted, examKey, mode })

  it('bira najnoviji unos za koji postoji službeni podatak', () => {
    const res = pickNcvvoComparison([h(50, 'vis_2022_ljeto'), h(70, '2025_ljeto')])
    expect(res.year).toBe(2022)
    expect(res.razina).toBe('visa')
    expect(res.userAvg).toBe(50)
    expect(res.sampleSize).toBe(1)
  })

  it('prosjek računa samo iz ispita iste razine I iste godine', () => {
    // Rezultat iz 2018. ne smije obarati usporedbu s državnim prosjekom za 2022.
    const res = pickNcvvoComparison([h(40, '2018_ljeto'), h(90, 'vis_2022_ljeto'), h(60, '2022_ljeto')])
    expect(res.razina).toBe('osnovna')
    expect(res.year).toBe(2022)
    expect(res.userAvg).toBe(60)
    expect(res.sampleSize).toBe(1)
  })

  it('prosječuje više simulacija istoga ispitnog roka i razine', () => {
    const res = pickNcvvoComparison([h(40, '2022_ljeto'), h(60, '2022_ljeto')])
    expect(res.userAvg).toBe(50)
    expect(res.sampleSize).toBe(2)
  })

  it('sesije vježbanja ne ulaze u usporedbu — rješenja su bila otkrivena', () => {
    expect(pickNcvvoComparison([h(90, '2022_ljeto', 'vježbanje')])).toBeNull()
    const res = pickNcvvoComparison([h(90, '2022_ljeto', 'vježbanje'), h(50, '2022_ljeto')])
    expect(res.userAvg).toBe(50)
    expect(res.sampleSize).toBe(1)
  })

  it('zapis bez ponderiranog rezultata se preskače umjesto da se usporedi kriva veličina', () => {
    expect(pickNcvvoComparison([{ pct: 90, examKey: '2022_ljeto', mode: 'simulacija' }])).toBeNull()
  })

  it('jesenski rezultat se ne uspoređuje s ljetnim prosjekom', () => {
    expect(pickNcvvoComparison([h(55, '2018_jesen')])).toBeNull()
  })

  it('vraća null kad nijedan riješeni ispit nema službeni podatak', () => {
    expect(pickNcvvoComparison([h(70, '2025_ljeto'), h(80, 'vis_2024_prvi')])).toBeNull()
    expect(pickNcvvoComparison([])).toBeNull()
    expect(pickNcvvoComparison(null)).toBeNull()
  })
})
