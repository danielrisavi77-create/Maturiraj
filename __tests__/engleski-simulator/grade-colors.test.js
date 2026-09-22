/**
 * grade-colors.test.js
 *
 * Nalaz 2.1: EngleskiSimulator.js je imao vlastitu kopiju GC (boje ocjena) koja se
 * razilazila s lib/engleski-simulator/constants.js — ista ocjena istog pokušaja
 * prikazivala se u dvije boje (ResultsScreen prima GC propom iz EngleskiSimulator.js,
 * AnalyticsPanelFull uvozi GC iz constants.js).
 *
 * Testira se da postoji točno jedan izvor GC-a.
 */
import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { GC } from '../../lib/engleski-simulator/constants.js'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const read = rel => readFileSync(path.join(ROOT, rel), 'utf8')

describe('GC — jedan izvor boja ocjena', () => {
  it('constants.js definira boju za svaku ocjenu 1-5', () => {
    expect(Object.keys(GC).sort()).toEqual(['1', '2', '3', '4', '5'])
    for (const g of [1, 2, 3, 4, 5]) expect(typeof GC[g]).toBe('string')
  })

  it('sve boje ocjena su CSS varijable teme (var(--...)), nema hardkodiranih hex vrijednosti', () => {
    for (const g of [1, 2, 3, 4, 5]) expect(GC[g]).toMatch(/^var\(--[a-z0-9-]+\)$/)
  })

  it('EngleskiSimulator.js nema lokalnu definiciju GC-a', () => {
    const src = read('components/engleski-simulator/EngleskiSimulator.js')
    expect(src).not.toMatch(/(?:const|let|var)\s+GC\s*=/)
  })

  it('EngleskiSimulator.js uvozi GC iz constants.js', () => {
    const src = read('components/engleski-simulator/EngleskiSimulator.js')
    const imp = src.match(/import\s*\{([^}]*)\}\s*from\s*'@\/lib\/engleski-simulator\/constants'/)
    expect(imp).toBeTruthy()
    expect(imp[1].split(',').map(s => s.trim())).toContain('GC')
  })

  it('AnalyticsPanelFull.js uvozi GC iz istog modula (nema druge kopije)', () => {
    const src = read('components/engleski-simulator/screens/AnalyticsPanelFull.js')
    expect(src).toMatch(/import\s*\{[^}]*\bGC\b[^}]*\}\s*from\s*'@\/lib\/engleski-simulator\/constants'/)
    expect(src).not.toMatch(/(?:const|let|var)\s+GC\s*=/)
  })
})
