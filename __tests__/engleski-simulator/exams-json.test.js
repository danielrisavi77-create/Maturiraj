import { describe, it, expect } from 'vitest'
import { EXAMS } from '../../lib/engleski-simulator/exams.js'
import osnovna from '../../lib/data/engleski-simulator/exams-osnovna.json'
import visa from '../../lib/data/engleski-simulator/exams-visa.json'
import index from '../../lib/data/engleski-simulator/exams-index.json'

// JSON datoteke generira scripts/gen-eng-exams-json.mjs iz exams.js (izvor istine).
// Ovaj test pada ako se exams.js promijeni a JSON-i nisu regenerirani.

const merged = { ...osnovna, ...visa }
const allKeys = Object.keys(EXAMS)

describe('generirani JSON ispiti', () => {
  it('ima isti broj ispita kao EXAMS (70)', () => {
    expect(allKeys).toHaveLength(70)
    expect(Object.keys(osnovna)).toHaveLength(35)
    expect(Object.keys(visa)).toHaveLength(35)
    expect(Object.keys(merged)).toHaveLength(70)
  })

  it('razine su razdvojene bez preklapanja', () => {
    Object.values(osnovna).forEach(ex => expect(ex.razina).toBe('osnovna'))
    Object.values(visa).forEach(ex => expect(ex.razina).toBe('visa'))
    Object.keys(osnovna).forEach(k => expect(visa[k]).toBeUndefined())
  })

  it('ključevi i redoslijed odgovaraju EXAMS', () => {
    expect(Object.keys(merged).sort()).toEqual([...allKeys].sort())
    const osnKeys = allKeys.filter(k => EXAMS[k].razina === 'osnovna')
    expect(Object.keys(osnovna)).toEqual(osnKeys)
    const visaKeys = allKeys.filter(k => EXAMS[k].razina === 'visa')
    expect(Object.keys(visa)).toEqual(visaKeys)
  })

  it('metapodaci i broj pitanja po ispitu su isti', () => {
    allKeys.forEach(key => {
      const src = EXAMS[key]
      const out = merged[key]
      expect(out, key).toBeDefined()
      expect(out.key).toBe(src.key)
      expect(out.year).toBe(src.year)
      expect(out.season).toBe(src.season)
      expect(out.label).toBe(src.label)
      expect(out.razina).toBe(src.razina)
      expect(out.qs).toHaveLength((src.qs || []).length)
    })
  })

  it('svako pitanje je identično (uključujući sol)', () => {
    allKeys.forEach(key => {
      const srcQs = EXAMS[key].qs || []
      const outQs = merged[key].qs || []
      srcQs.forEach((q, i) => {
        expect(outQs[i].id, key + '#' + i).toBe(q.id)
        expect(JSON.stringify(outQs[i].sol), key + '#' + q.id).toBe(JSON.stringify(q.sol))
        expect(JSON.stringify(outQs[i]), key + '#' + q.id).toBe(JSON.stringify(q))
      })
    })
  })
})

describe('exams-index.json', () => {
  it('ima 70 zapisa s ispravnim qCount i metapodacima', () => {
    expect(index).toHaveLength(70)
    expect(index.map(r => r.key)).toEqual(allKeys)
    index.forEach(rec => {
      const src = EXAMS[rec.key]
      expect(src, rec.key).toBeDefined()
      expect(rec.qCount).toBe((src.qs || []).length)
      expect(rec.year).toBe(src.year)
      expect(rec.season).toBe(src.season)
      expect(rec.label).toBe(src.label)
      expect(rec.razina).toBe(src.razina)
      expect(rec.hasListening).toBe(!!src.hasListening)
      expect(rec.hasReading).toBe(!!src.hasReading)
    })
  })

  it('ne sadrži pitanja (lagan je)', () => {
    index.forEach(rec => {
      expect(rec.qs).toBeUndefined()
      expect(Object.keys(rec).sort()).toEqual(['hasListening', 'hasReading', 'key', 'label', 'qCount', 'razina', 'season', 'year'])
    })
  })
})
