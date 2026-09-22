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
import { GC, GC_HEX } from '../../lib/engleski-simulator/constants.js'

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

/**
 * Regresija: ShareStoryCard crta na <canvas>, a canvas ne razumije var(--...).
 * `ctx.fillStyle = 'var(--orange)'` se tiho ignorira, parseInt nad njom daje NaN, a
 * `gradient.addColorStop(0, 'var(--orange)')` baca SyntaxError — generate() tada pukne
 * prije setImgSrc/setLoading(false) i gumb zauvijek ostane onemogućen na "Generira...".
 * Zato ResultsScreen story kartici mora slati GC_HEX, a ne GC.
 */
describe('GC_HEX — hex ljestvica za canvas', () => {
  it('definira #rrggbb za svaku ocjenu 1-5', () => {
    expect(Object.keys(GC_HEX).sort()).toEqual(['1', '2', '3', '4', '5'])
    for (const g of [1, 2, 3, 4, 5]) expect(GC_HEX[g]).toMatch(/^#[0-9a-f]{6}$/i)
  })

  it('pokriva iste ocjene kao GC', () => {
    expect(Object.keys(GC_HEX).sort()).toEqual(Object.keys(GC).sort())
  })

  it('ResultsScreen.js šalje ShareStoryCardu hex, ne CSS varijablu', () => {
    const src = read('components/engleski-simulator/screens/ResultsScreen.js')
    expect(src).toMatch(/accentColor:\s*GC_HEX\[/)
    expect(src).not.toMatch(/accentColor:\s*gc\b/)
    expect(src).toMatch(/import\s*\{[^}]*\bGC_HEX\b[^}]*\}\s*from\s*'@\/lib\/engleski-simulator\/constants'/)
  })

  it('ShareStoryCard prihvaća samo #rrggbb i inače pada na zadanu boju', () => {
    const src = read('components/shared/ShareStoryCard.jsx')
    expect(src).toMatch(/const accent =[\s\S]{0,120}\/\^#\[0-9a-fA-F\]\{6\}\$\//)
    // crtanje i inline stilovi koriste provjereni `accent`; sirovi `accentColor`
    // smije ostati samo u toj jednoj provjeri
    const body = src.slice(src.indexOf('}) {'))
    const raw = body.split('\n').filter(l => l.includes('accentColor'))
    expect(raw).toHaveLength(1)
    expect(raw[0]).toContain('const accent =')
  })
})
