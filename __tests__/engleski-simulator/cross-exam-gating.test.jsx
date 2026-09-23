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

/** Brojač skupnih dohvata — free korisnik ne smije okinuti nijedan. */
const bulk = { razina: 0 }

vi.mock('@/lib/engleski-simulator/examsLoader', () => ({
  RAZINE: ['osnovna', 'visa'],
  getExamsIndex: () => EXAMS_INDEX,
  razinaForKey: () => 'osnovna',
  isExamLoaded: () => true,
  isRazinaLoaded: () => false,
  loadExamByKey: key => Promise.resolve(EXAMS_MAP[key]),
  loadRazina: () => { bulk.razina += 1; return Promise.resolve(EXAMS_MAP) },
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
    bulk.razina = 0
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

  /**
   * Dnevni izazov, Virtualni ispit, Vježbaj po temi i Usporedba slažu sesiju od
   * pitanja iz CIJELE banke i ocjenjuju je lokalno. Free korisnik za njih nema
   * ključeve, pa bi mu vraćali 0 % i prazan feedback, a usput povlačili svih 70
   * ispita. Politika ih svrstava u vježbanje (Standard), pa su zaključani —
   * isto kao u hrvatskom i matematici.
   */
  it.each(['Virtualni ispit', 'Vježbaj po temi', 'Usporedi ispite', 'Dnevni izazov'])(
    'free korisnik: %s je zaključan i ne povlači cijelu banku', async (label) => {
    render(e(EngleskiSimulator))
    // Naslov kartice je unutar gumba — klik se propagira na njega.
    fireEvent.click(await screen.findByText(label, {}, { timeout: 30000 }))

    await waitFor(() => {
      expect(document.querySelector('a[href^="/pro?from=eng-feature"]')).toBeTruthy()
    }, { timeout: 30000 })

    expect(screen.getByText(label)).toBeTruthy()
    // Ni jedno pitanje iz banke nije došlo u DOM…
    expect(screen.queryByText('Tajno pitanje jedan')).toBeNull()
    expect(screen.queryByText(/Tajni točan odgovor/)).toBeNull()
    // …i nijedan skupni dohvat od 70 ispita nije ni pokrenut.
    expect(bulk.razina).toBe(0)
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
