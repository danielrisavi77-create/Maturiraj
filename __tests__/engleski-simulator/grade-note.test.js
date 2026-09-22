// @vitest-environment happy-dom
/**
 * grade-note.test.js
 *
 * Nalazi 2.3 i 3.3:
 *  - Pragovi 85/70/55/40 moraju svugdje gdje se predviđa/objavljuje ocjena nositi
 *    oznaku da su orijentacijski (GRADE_NOTE), ne samo na ResultsScreen i
 *    DailyChallengeScreen.
 *  - Ilustrativne referentne brojke (NCE_DATA / NCE_DIST) ne smiju se korisniku
 *    pripisivati NCVVO-u.
 *  - 'napredUJEš' → 'napreduješ'.
 *
 * GuideScreen.js i AnalyticsPanelFull.js imaju JSX u .js datoteci, pa import
 * treba '?lang.jsx' (isto kao u simulator-smoke.test.js).
 */
import { describe, it, expect, afterEach } from 'vitest'
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import { createElement as e } from 'react'
import { GRADE_NOTE } from '../../lib/engleski-simulator/constants.js'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const APF_SRC = readFileSync(path.join(ROOT, 'components/engleski-simulator/screens/AnalyticsPanelFull.js'), 'utf8')

const { default: GuideScreen } = await import('../../components/engleski-simulator/screens/GuideScreen.js?lang.jsx')
const { AnalyticsPanelFull } = await import('../../components/engleski-simulator/screens/AnalyticsPanelFull.js?lang.jsx')

afterEach(cleanup)

function historyOf(...pcts) {
  return pcts.map((pct, i) => ({
    pct, grade: pct >= 85 ? 5 : pct >= 70 ? 4 : pct >= 55 ? 3 : pct >= 40 ? 2 : 1,
    examKey: '2024_ljeto', examLabel: 'Ljetni rok', date: '1.1.2025.', cor: pct, total: 100, mode: 'vježbanje',
  }))
}

describe('Vodič — ljestvica ocjena je označena kao orijentacijska', () => {
  it('sekcija "Bodovanje i ocjene" prikazuje napomenu o orijentacijskom pragu', () => {
    render(e(GuideScreen, { onBack: () => {} }))
    fireEvent.click(screen.getByText(/Bodovanje i ocjene/))
    expect(screen.getByText(new RegExp(GRADE_NOTE.slice(0, 30).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))).toBeTruthy()
    expect(screen.getByText(/Ljestvica ocjena \(orijentacijska\)/)).toBeTruthy()
    expect(screen.getByText(/Orijentacijski prag/)).toBeTruthy()
  })
})

describe('Analitika — predviđena ocjena nosi napomenu', () => {
  it('kartica Napredak prikazuje GRADE_NOTE uz predviđenu ocjenu', () => {
    render(e(AnalyticsPanelFull, { userData: { history: historyOf(86, 88, 90) }, defaultTab: 'napredak' }))
    expect(screen.getByText(/Predviđena ocjena na maturi/)).toBeTruthy()
    expect(document.body.textContent).toContain(GRADE_NOTE)
  })

  it('ilustrativne referentne brojke se ne pripisuju NCVVO-u', () => {
    render(e(AnalyticsPanelFull, { userData: { history: historyOf(86, 88, 90) }, defaultTab: 'napredak' }))
    const txt = document.body.textContent
    expect(txt).toContain('Usporedba s orijentacijskim prosjekom')
    expect(txt).toContain('Ilustrativna referenca')
    expect(txt).not.toContain('Izvor: NCVVO')
    expect(txt).not.toMatch(/NCVVO prosjek/)
    expect(txt).toMatch(/nisu službeni podaci NCVVO-a/)
    expect(txt).not.toContain('Distribucija ocjena na maturi (NCVVO)')
  })
})

describe('Analitika — tekstualne sitnice', () => {
  it('nema kapitalizacije usred riječi u poruci o napretku', () => {
    expect(APF_SRC).not.toContain('napredUJEš')
    expect(APF_SRC).toContain('Odlično napreduješ!')
  })

  it('preporuka za 85%+ nosi napomenu o orijentacijskoj ocjeni', () => {
    render(e(AnalyticsPanelFull, { userData: { history: historyOf(86, 88, 90) }, defaultTab: 'savjeti' }))
    expect(document.body.textContent).toContain(GRADE_NOTE)
  })
})
