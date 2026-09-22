// @vitest-environment happy-dom
/**
 * grade-note.test.js
 *
 * Nalazi 2.3 i 3.3:
 *  - Pragovi 85/70/55/40 moraju svugdje gdje se predviđa/objavljuje ocjena nositi
 *    oznaku da su orijentacijski (GRADE_NOTE), ne samo na ResultsScreen i
 *    DailyChallengeScreen.
 *  - Izmišljene referentne brojke (NCE_DATA / NCE_DIST) više ne postoje: kartica
 *    raspodjele ocjena je uklonjena, a usporedba s prosjekom prikazuje stvarne
 *    NCVVO podatke iz lib/engleski-simulator/ncvvoData.js (vidi ncvvo-data.test.js).
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
    // Ponderirani rezultat — jedina veličina usporediva s NCVVO prosjekom.
    weighted: pct,
  }))
}

/** Zapis kakav nastaje u načinu simulacije (ispitni uvjeti). */
const asSimulation = (examKey) => h => ({ ...h, examKey, mode: 'simulacija' })

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

  it('nema više izmišljenih referentnih brojki ni ilustrativne raspodjele ocjena', () => {
    render(e(AnalyticsPanelFull, { userData: { history: historyOf(86, 88, 90) }, defaultTab: 'napredak' }))
    const txt = document.body.textContent
    expect(txt).not.toContain('Usporedba s orijentacijskim prosjekom')
    expect(txt).not.toContain('Ilustrativna referenca')
    expect(txt).not.toContain('Ilustrativna raspodjela ocjena')
    expect(txt).not.toMatch(/ilustrativnoj raspodjeli/)
    expect(txt).not.toMatch(/nisu službeni podaci NCVVO-a/)
    expect(APF_SRC).not.toContain('NCE_DIST')
    expect(APF_SRC).not.toContain('NCE_DATA')
  })

  it('kartica usporedbe se prikazuje samo uz stvarni NCVVO podatak, s atribucijom', () => {
    // 2025. NCVVO nije objavio podatke → kartice nema.
    render(e(AnalyticsPanelFull, {
      userData: { history: historyOf(86, 88, 90).map(asSimulation('2025_ljeto')) },
      defaultTab: 'napredak',
    }))
    expect(document.body.textContent).not.toContain('Usporedba sa službenim prosjekom NCVVO-a')
    cleanup()

    // Ljetni rok 2022. (šk. god. 2021./2022.) je objavljen → kartica s izvorom.
    render(e(AnalyticsPanelFull, {
      userData: { history: historyOf(86, 88, 90).map(asSimulation('vis_2022_ljeto')) },
      defaultTab: 'napredak',
    }))
    const txt = document.body.textContent
    expect(txt).toContain('Usporedba sa službenim prosjekom NCVVO-a')
    expect(txt).toContain('Izvor: NCVVO 2021./2022.')
    const link = screen.getByText('Izvor: NCVVO 2021./2022.')
    expect(link.getAttribute('href')).toMatch(/^https:\/\/www\.ncvvo\.hr\/.*\.pdf$/i)
  })

  it('kartice nema za jesenski rok — NCVVO objavljuje samo ljetni', () => {
    render(e(AnalyticsPanelFull, {
      userData: { history: historyOf(86, 88, 90).map(asSimulation('vis_2022_jesen')) },
      defaultTab: 'napredak',
    }))
    expect(document.body.textContent).not.toContain('Usporedba sa službenim prosjekom NCVVO-a')
  })

  it('kartice nema kad su svi zapisi iz načina vježbanja', () => {
    // historyOf() daje mode 'vježbanje' — rješenja su bila vidljiva prije predaje.
    render(e(AnalyticsPanelFull, {
      userData: { history: historyOf(86, 88, 90).map(h => ({ ...h, examKey: 'vis_2022_ljeto' })) },
      defaultTab: 'napredak',
    }))
    expect(document.body.textContent).not.toContain('Usporedba sa službenim prosjekom NCVVO-a')
  })

  it('brojevi su u hrvatskom zapisu i daju prikazanu razliku', () => {
    render(e(AnalyticsPanelFull, {
      userData: { history: historyOf(86, 88, 90).map(asSimulation('vis_2022_ljeto')) },
      defaultTab: 'napredak',
    }))
    const txt = document.body.textContent
    expect(txt).toContain('80,6%')   // državni prosjek 80,57 → 80,6 (zarez, ne točka)
    expect(txt).not.toContain('80.57')
    expect(txt).toContain('88%')     // korisnikov prosjek (86 + 88 + 90) / 3
    expect(txt).toContain('+7%')     // round(88 − 80,57) = 7
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
