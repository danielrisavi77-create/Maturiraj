// @vitest-environment happy-dom
/**
 * simulator-smoke.test.js
 *
 * Integracijski test cijele komponente EngleskiSimulator — zamjena za ručni
 * smoke test. Prati stvarni tok korisnika: Home → odabir ispita → ModeSelect →
 * Vježbanje → odgovori na prvo pitanje → Provjeri → Vidi rezultate → Results →
 * provjera da je napredak spremljen u localStorage → unmount/remount ("refresh")
 * → Home i dalje pokazuje badge s postotkom.
 *
 * ODSTUPANJE OD SPECIFIKACIJE: zadatak traži da se '@/lib/hooks/useAuth' mockira
 * s user:null. Stvarni paywall (checkSimulatorAccess u
 * components/discere/paywall/paywallHelpers.js) vraća canProceed:false već na
 * PRVOM pitanju kad korisnik nije prijavljen (reason 'not-logged-in'), bez
 * obzira na FREE_LIMIT — to je namjerno ponašanje proizvoda, ne ograničenje
 * happy-doma. Uz user:null bi pitanje ostalo zaključano (skeleton, bez MCQ-a) i
 * tok opisan u zadatku (odgovori → Provjeri → Vidi rezultate) ne bi bio
 * izvediv. Zato je mock prilagođen na PRIJAVLJENOG korisnika na besplatnom
 * planu (isPro: false) — čime je "isPro false" dio zahtjeva zadovoljen, a
 * ostatak toka ostaje testabilan. Guest (user:null) paywall-lock na prvom
 * pitanju pokriven je zasebno u exam-play-blocks.test.js / daily-challenge.test.js.
 *
 * NAPOMENA: 'AnalyticsPanelFull.js' (lazy chunk unutar ResultsScreena, prikazan
 * čim postoji povijest) piše pravi JSX u '.js' datoteci (za razliku od ostalih
 * ekrana koji koriste 'createElement'), a oxc (vitest-ov transformer) JSX parsira
 * samo za '.jsx'/'.tsx' — isti razlog zašto EngleskiSimulator.js treba '?lang.jsx'
 * na uvozu. Kako je taj chunk učitan INTERNIM dinamičkim importom (test ga ne
 * uvozi izravno, pa mu ne može dodati sufiks), ovdje se mocka minimalnim stubom
 * da smoke test ostane fokusiran na tok kroz EngleskiSimulator, ne na taj
 * poseban slučaj transformera.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react'
import { createElement as e } from 'react'

vi.mock('@/lib/hooks/useAuth', () => ({
  useAuth: () => ({ user: { id: 'smoke-test-user' }, isPro: false, isPaid: false, loading: false }),
}))

vi.mock('@/components/engleski-simulator/screens/AnalyticsPanelFull', () => ({
  AnalyticsPanelFull: () => null,
}))

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/engleski-simulator',
  useSearchParams: () => new URLSearchParams(),
}))

// Sintetički ispiti obje razine — jedan 'osnovna' i jedan 'visa', s ključevima
// '2024_ljeto' i 'vis_2024_prvi', po jedno 'mc' pitanje (dovoljno za tok
// Vježbanje → Provjeri → Vidi rezultate).
const OSNOVNA_EXAM = {
  key: '2024_ljeto',
  year: 2024,
  season: 'ljeto',
  label: 'Ljetni rok',
  razina: 'osnovna',
  qs: [
    { id: 'o1', section: 'reading', type: 'mc', topic: 'reading', q: 'Osnovna pitanje 1', opts: ['A opcija', 'B opcija', 'C opcija'], sol: { cl: 'A' } },
  ],
}
const VISA_EXAM = {
  key: 'vis_2024_prvi',
  year: 2024,
  season: 'prvi',
  label: 'Prvi rok',
  razina: 'visa',
  qs: [
    { id: 'v1', section: 'reading', type: 'mc', topic: 'reading', q: 'Viša pitanje 1', opts: ['A opcija', 'B opcija', 'C opcija'], sol: { cl: 'A' } },
  ],
}
const EXAMS_MAP = { [OSNOVNA_EXAM.key]: OSNOVNA_EXAM, [VISA_EXAM.key]: VISA_EXAM }
const EXAMS_INDEX = [
  { key: OSNOVNA_EXAM.key, year: OSNOVNA_EXAM.year, season: OSNOVNA_EXAM.season, label: OSNOVNA_EXAM.label, razina: 'osnovna', hasListening: true, hasReading: true, qCount: OSNOVNA_EXAM.qs.length },
  { key: VISA_EXAM.key, year: VISA_EXAM.year, season: VISA_EXAM.season, label: VISA_EXAM.label, razina: 'visa', hasListening: true, hasReading: true, qCount: VISA_EXAM.qs.length },
]

vi.mock('@/lib/engleski-simulator/examsLoader', () => ({
  RAZINE: ['osnovna', 'visa'],
  getExamsIndex: () => EXAMS_INDEX,
  razinaForKey: key => (typeof key === 'string' && key.startsWith('vis_') ? 'visa' : 'osnovna'),
  isRazinaLoaded: () => true,
  loadRazina: () => Promise.resolve(EXAMS_MAP),
  getLoadedSync: () => EXAMS_MAP,
}))

const { default: EngleskiSimulator } = await import('../../components/engleski-simulator/EngleskiSimulator.js?lang.jsx')

describe('EngleskiSimulator — integracijski smoke test', () => {
  beforeEach(() => {
    global.fetch = vi.fn((url) => {
      if (String(url).includes('exam-context.json')) {
        return Promise.resolve({ json: () => Promise.resolve({}) })
      }
      return Promise.resolve({ json: () => Promise.resolve({}) })
    })
    try { localStorage.clear() } catch { /* happy-dom bez localStoragea */ }
    window.confirm = vi.fn(() => true)
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('Home → ModeSelect → Vježbanje → Provjeri → Rezultati → napredak preživljava refresh', async () => {
    const { unmount } = render(e(EngleskiSimulator))

    // Home prikazuje oba ispita iz indeksa (jedan red po ispitu, unutar godišnje
    // grupe svoje razine — DOM ne ispisuje exam.label, pa se traži po strukturi).
    await waitFor(() => {
      expect(document.querySelector('.year-group:not(.visa) .exrow-sub')).toBeTruthy()
      expect(document.querySelector('.year-group.visa .exrow-sub')).toBeTruthy()
    }, { timeout: 20000 })

    // Klik na osnovni ispit → ModeSelect
    const examRow = document.querySelector('.year-group:not(.visa) .exrow-sub')
    fireEvent.click(examRow)

    const practiceCard = await screen.findByText('Vježbanje', {}, { timeout: 20000 })
    fireEvent.click(practiceCard)

    // Vježbanje ekran: odaberi prvi ponuđeni odgovor
    const radios = await screen.findAllByRole('radio', {}, { timeout: 20000 })
    fireEvent.click(radios[0])

    // 'Provjeri'
    const checkBtn = await screen.findByRole('button', { name: 'Provjeri' }, { timeout: 20000 })
    fireEvent.click(checkBtn)

    // 'Vidi rezultate'
    const resultsBtn = await screen.findByRole('button', { name: 'Vidi rezultate' }, { timeout: 20000 })
    fireEvent.click(resultsBtn)

    // Results prikazuje postotak (ring s tekstom 'NN%') — lazy chunk, prvi put
    // učitan u ovom procesu; na sporom disku (Dropbox) transform zna potrajati.
    await waitFor(() => {
      expect(document.querySelector('.score-ring-pct')).toBeTruthy()
    }, { timeout: 40000 })
    const pctText = document.querySelector('.score-ring-pct').textContent
    expect(pctText).toMatch(/^\d+%$/)

    // localStorage 'engleski_simulator_user' ima history s 1 zapisom
    const stored = JSON.parse(localStorage.getItem('engleski_simulator_user'))
    expect(stored.history).toHaveLength(1)
    expect(stored.history[0].examKey).toBe(OSNOVNA_EXAM.key)
    const savedPct = stored.history[0].pct

    // unmount, ponovni render — Home pokazuje '✓ NN%' badge (napredak preživio "refresh")
    unmount()
    render(e(EngleskiSimulator))
    const badge = await screen.findByText('✓ ' + savedPct + '%', {}, { timeout: 30000 })
    expect(badge).toBeTruthy()
  }, 180000)
})
