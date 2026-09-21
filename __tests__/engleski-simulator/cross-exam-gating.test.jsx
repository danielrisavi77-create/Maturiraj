// @vitest-environment happy-dom
/**
 * Engleski: ekrani koji prikazuju cijelu banku s točnim odgovorima i
 * obrazloženjima (Pregled svih pitanja, Vocabulary, Bookmarci, Greške,
 * Statistike) su Standard sadržaj. Prijavljeni free korisnik smije rješavati
 * ispite, ali u te ekrane ne ulazi — ni pitanja ni rješenja ne smiju doći u DOM,
 * nego zaključani placeholder s CTA-om. Plaćeni korisnik prolazi normalno.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react'
import { createElement as e } from 'react'

const auth = { user: { id: 'gating-test-user' }, isPro: false, isPaid: false, loading: false }

vi.mock('@/lib/hooks/useAuth', () => ({ useAuth: () => auth }))

vi.mock('@/components/engleski-simulator/screens/AnalyticsPanelFull', () => ({
  AnalyticsPanelFull: () => null,
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/discere/engleski/simulator',
  useSearchParams: () => new URLSearchParams(),
}))

const OSNOVNA_EXAM = {
  key: '2024_ljeto',
  year: 2024,
  season: 'ljeto',
  label: 'Ljetni rok',
  razina: 'osnovna',
  qs: [
    { id: 'o1', section: 'reading', type: 'mc', topic: 'reading', q: 'Tajno pitanje jedan', opts: ['A opcija', 'B opcija'], sol: { cl: 'A', ans: 'Tajni točan odgovor' }, exp: 'Tajno obrazloženje' },
  ],
}
const EXAMS_MAP = { [OSNOVNA_EXAM.key]: OSNOVNA_EXAM }
const EXAMS_INDEX = [
  { key: OSNOVNA_EXAM.key, year: 2024, season: 'ljeto', label: 'Ljetni rok', razina: 'osnovna', hasListening: true, hasReading: true, qCount: 1 },
]

vi.mock('@/lib/engleski-simulator/examsLoader', () => ({
  RAZINE: ['osnovna', 'visa'],
  getExamsIndex: () => EXAMS_INDEX,
  razinaForKey: () => 'osnovna',
  isRazinaLoaded: () => true,
  loadRazina: () => Promise.resolve(EXAMS_MAP),
  getLoadedSync: () => EXAMS_MAP,
}))

const { default: EngleskiSimulator } = await import('../../components/engleski-simulator/EngleskiSimulator.js?lang.jsx')

async function openBrowse() {
  render(e(EngleskiSimulator))
  const browseBtn = await screen.findByTitle('Pregledaj sva pitanja', {}, { timeout: 30000 })
  fireEvent.click(browseBtn)
}

describe('EngleskiSimulator — cross-exam ekrani iza Standarda', () => {
  beforeEach(() => {
    auth.isPro = false
    auth.isPaid = false
    global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }))
    try { localStorage.clear() } catch { /* happy-dom bez localStoragea */ }
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('free korisnik ne dobiva banku s točnim odgovorima, nego CTA', async () => {
    await openBrowse()

    await waitFor(() => {
      expect(document.querySelector('a[href^="/pro?from=eng-feature"]')).toBeTruthy()
    }, { timeout: 30000 })

    expect(screen.queryByText('📖 Pregled ispita')).toBeNull()
    expect(screen.queryByText('Tajno pitanje jedan')).toBeNull()
    expect(screen.queryByText(/Tajni točan odgovor/)).toBeNull()
    expect(screen.queryByText(/Tajno obrazloženje/)).toBeNull()
  }, 120000)

  it('plaćeni korisnik i dalje ulazi u pregled svih pitanja', async () => {
    auth.isPaid = true
    await openBrowse()

    await waitFor(() => {
      expect(screen.getByText('📖 Pregled ispita')).toBeTruthy()
    }, { timeout: 30000 })

    expect(document.querySelector('a[href^="/pro?from=eng-feature"]')).toBeNull()
  }, 120000)
})
