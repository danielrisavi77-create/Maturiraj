// @vitest-environment happy-dom
/**
 * exam-play-blocks.test.js
 *
 * Renderira PRAVI ExamPlayScreen (named export iz EngleskiSimulator.js) i pokriva
 * blokovsku navigaciju simulacije — dio koji nijedan drugi test nije dotaknuo:
 *   - mreža i brojač pokazuju samo pitanja tekućeg bloka,
 *   - 'Sljedeće →' ne izlazi iz bloka,
 *   - 'Završi dio →' (uz potvrdu) prelazi na sljedeći blok bez povratka,
 *   - istek timera bloka prelazi na sljedeći blok, a istek zadnjeg predaje ispit,
 *   - upozorenje na 600 s nosi naziv ispitne cjeline,
 *   - paywall: prijavljeni free korisnik rješava cijeli ispit (ispitni mod je
 *     besplatan), a u vježbanju ostaje zaključan od FREE_LIMIT-og pitanja,
 *   - nacrt pokušaja: rok i indeks cjeline preživljavaju osvježavanje stranice,
 *     nacrt vježbanja ne ulazi u simulaciju, a potvrđeni izlazak ga briše.
 *
 * MCQ i SimulatorPreviewGate su pravi (ne mockani) — testiramo stvarni DOM.
 * Mockani su samo next/navigation (router ne postoji izvan Nexta) i useAuth
 * (vuče Supabase klijent pri importu modula).
 *
 * ZAŠTO '?lang.jsx' NA IMPORTU: EngleskiSimulator.js ima JSX u datoteci s
 * nastavkom .js, a Vite 8 (oxc) JSX parsira samo za .jsx/.tsx — bez tog queryja
 * transform padne s "JSX syntax is disabled". Query ne mijenja modul, samo
 * nagovara oxc da datoteku čita kao jsx (vite bira 'lang' iz nastavka id-a).
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup } from '@testing-library/react'
import { createElement as e } from 'react'
import { makeVisaExam, PRO_ACCESS, FREE_ACCESS } from './_synthExam.js'
import { installSimApiMock } from './_mockSimApi.js'
import { FREE_LIMIT } from '@/components/discere/paywall/paywallHelpers'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/engleski-simulator',
  useSearchParams: () => new URLSearchParams(),
}))

vi.mock('@/lib/hooks/useAuth', () => ({
  useAuth: () => ({ user: null, isPro: false, isPaid: false, loading: false }),
}))

const { ExamPlayScreen } = await import('../../components/engleski-simulator/EngleskiSimulator.js?lang.jsx')

// Trajanja blokova više razine u sekundama (Čitanje 70, Pisanje 75, Slušanje 35 min)
const READING_S = 70 * 60
const WRITING_S = 75 * 60
const LISTENING_S = 35 * 60

function renderPlay(overrides = {}) {
  const onDone = vi.fn()
  const onExit = vi.fn()
  const utils = render(e(ExamPlayScreen, {
    exam: makeVisaExam(),
    examMode: true,
    timedMode: false,
    examContext: {},
    onExit,
    onDone,
    userAccess: PRO_ACCESS,
    isPro: true,
    examLookup: {},
    soundOn: false,
    onBookmarkChange: undefined,
    ...overrides,
  }))
  return { onDone, onExit, ...utils }
}

/** Gumbi mreže pitanja nose samo redni broj unutar bloka. */
function gridButtons() {
  return screen.getAllByRole('button').filter(b => /^\d+$/.test(b.textContent.trim()))
}

function navTitle() {
  return document.querySelector('.ntitle').textContent
}

describe('ExamPlayScreen — blokovska navigacija simulacije', () => {
  beforeEach(() => {
    window.confirm = vi.fn(() => true)
    // Predaja pravog ispita ide na POST /api/sim/eng/grade (ADR-001).
    installSimApiMock({ exams: { [makeVisaExam().key]: makeVisaExam() }, tier: 'pro' })
    try { localStorage.clear() } catch { /* happy-dom bez localStoragea */ }
  })
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('mreža i brojač pokazuju samo pitanja tekućeg bloka', () => {
    renderPlay()
    expect(navTitle()).toContain('Čitanje (1/3)')
    expect(screen.getByText('R1-TEXT')).toBeTruthy()
    // 6 pitanja u ispitu, ali blok Čitanja ima samo 2
    expect(gridButtons()).toHaveLength(2)
    expect(screen.getByText('1/2')).toBeTruthy()
    // Pitanja drugih blokova nisu dostupna
    expect(screen.queryByText('W1-TEXT')).toBeNull()
    expect(screen.queryByText('L1-TEXT')).toBeNull()
  })

  it('"Sljedeće →" se kreće unutar bloka i na zadnjem pitanju bloka je onemogućeno', () => {
    renderPlay()
    const next = screen.getByRole('button', { name: 'Sljedeće →' })
    expect(next.disabled).toBe(false)
    fireEvent.click(next)
    expect(screen.getByText('R2-TEXT')).toBeTruthy()
    expect(screen.getByText('2/2')).toBeTruthy()
    // Nema izlaza iz bloka: gumb je na kraju bloka onemogućen, blok se nije promijenio
    expect(screen.getByRole('button', { name: 'Sljedeće →' }).disabled).toBe(true)
    fireEvent.click(screen.getByRole('button', { name: 'Sljedeće →' }))
    expect(navTitle()).toContain('Čitanje (1/3)')
    expect(screen.queryByText('W1-TEXT')).toBeNull()
  })

  it('"Završi dio →" uz potvrdu prelazi na sljedeći blok i zatvara prethodni', () => {
    renderPlay()
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' }))
    expect(window.confirm).toHaveBeenCalledTimes(1)
    expect(navTitle()).toContain('Pisanje (2/3)')
    expect(screen.getByText('W1-TEXT')).toBeTruthy()
    // Prethodna pitanja više nisu u mreži ni dostupna preko nje
    expect(screen.queryByText('R1-TEXT')).toBeNull()
    expect(screen.queryByText('R2-TEXT')).toBeNull()
    expect(gridButtons()).toHaveLength(2)
    fireEvent.click(gridButtons()[0])
    expect(screen.getByText('W1-TEXT')).toBeTruthy()
    expect(screen.queryByText('R1-TEXT')).toBeNull()
  })

  it('otkazana potvrda ostavlja korisnika u istom bloku', () => {
    window.confirm = vi.fn(() => false)
    renderPlay()
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' }))
    expect(navTitle()).toContain('Čitanje (1/3)')
    expect(screen.getByText('R1-TEXT')).toBeTruthy()
  })

  it('istek bloka prelazi na sljedeći, a istek zadnjeg bloka predaje ispit točno jednom', async () => {
    vi.useFakeTimers()
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const { onDone } = renderPlay()

    act(() => { vi.advanceTimersByTime(READING_S * 1000) })
    expect(navTitle()).toContain('Pisanje (2/3)')
    expect(onDone).not.toHaveBeenCalled()

    act(() => { vi.advanceTimersByTime(WRITING_S * 1000) })
    expect(navTitle()).toContain('Slušanje (3/3)')
    expect(onDone).not.toHaveBeenCalled()

    act(() => { vi.advanceTimersByTime(LISTENING_S * 1000) })
    // Predaja sada ide preko POST /api/sim/eng/grade, pa je onDone asinkron;
    // await propušta mikrozadatke i s lažnim timerima.
    await act(async () => {})
    expect(onDone).toHaveBeenCalledTimes(1)
    // Timer nakon isteka više ne predaje (expired ref)
    act(() => { vi.advanceTimersByTime(60 * 1000) })
    await act(async () => {})
    expect(onDone).toHaveBeenCalledTimes(1)
    expect(errorSpy.mock.calls.some(c => String(c[0]).includes('Cannot update a component'))).toBe(false)
    errorSpy.mockRestore()
  })

  it('prijavljeni free korisnik nije zaključan ni na pitanju iznad FREE_LIMIT-a', () => {
    renderPlay({ userAccess: FREE_ACCESS, isPro: false })
    expect(screen.getByText('R1-TEXT')).toBeTruthy()
    // Slušanje je treći blok — globalni indeks 4, dakle iznad FREE_LIMIT-a (3)
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' }))
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' }))
    expect(navTitle()).toContain('Slušanje (3/3)')
    expect(FREE_LIMIT).toBeLessThan(4)
    expect(screen.getByText('L1-TEXT')).toBeTruthy()
  })

  it('vježbanje (examMode:false) ostaje zaključano od FREE_LIMIT-og pitanja', () => {
    renderPlay({ examMode: false, userAccess: FREE_ACCESS, isPro: false })
    expect(screen.getByText('R1-TEXT')).toBeTruthy()
    fireEvent.click(gridButtons()[FREE_LIMIT])
    expect(screen.queryByText('W2-TEXT')).toBeNull()
    // Paywall je doista podignut (a ne samo prazan render) — modal se sam otvara
    expect(screen.getByRole('dialog')).toBeTruthy()
  })

  it('na 600 s prije kraja prikazuje upozorenje s nazivom ispitne cjeline', () => {
    vi.useFakeTimers()
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    renderPlay()
    act(() => { vi.advanceTimersByTime((READING_S - 600) * 1000) })
    const toast = document.querySelector('[role="status"]')
    expect(toast).not.toBeNull()
    expect(toast.textContent).toContain('Još 10 minuta')
    expect(toast.textContent).toContain('Čitanje')
    // Upozorenje nije predaja ni prelaz bloka
    expect(navTitle()).toContain('Čitanje (1/3)')
    expect(errorSpy.mock.calls.some(c => String(c[0]).includes('Cannot update a component'))).toBe(false)
    errorSpy.mockRestore()
  })
})

describe('ExamPlayScreen — nacrt pokušaja u localStorageu', () => {
  const EXAM_KEY = makeVisaExam().key
  // Način rada je dio ključa: vježbanje i simulacija istog ispita ne dijele nacrt.
  const EXAM_DRAFT = `disc_eng_exam_${EXAM_KEY}_exam`
  const PRACTICE_DRAFT = `disc_eng_exam_${EXAM_KEY}_practice`

  beforeEach(() => {
    window.confirm = vi.fn(() => true)
    try { localStorage.clear() } catch { /* happy-dom bez localStoragea */ }
  })
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('simulacija zapiše rok i indeks cjeline čim počne', () => {
    vi.useFakeTimers()
    installSimApiMock({ exams: { [EXAM_KEY]: makeVisaExam() }, tier: 'pro' })
    renderPlay()
    const draft = JSON.parse(localStorage.getItem(EXAM_DRAFT))
    expect(draft.blockIdx).toBe(0)
    expect(draft.deadline).toBe(Date.now() + READING_S * 1000)
  })

  it('osvježavanje nastavlja odbrojavanje od zapisanog roka, u zapisanoj cjelini', () => {
    vi.useFakeTimers()
    installSimApiMock({ exams: { [EXAM_KEY]: makeVisaExam() }, tier: 'pro' })
    localStorage.setItem(EXAM_DRAFT, JSON.stringify({
      at: Date.now(),
      answers: { W1: 'nacrt' },
      qTimes: {},
      deadline: Date.now() + 5 * 60 * 1000,
      blockIdx: 1,
    }))
    renderPlay()
    // Ne 75:00 (puno trajanje Pisanja) nego ostatak iz nacrta — inače bi F5 vraćao
    // pun timer uz netaknute odgovore, dakle ispit bez vremenskog ograničenja.
    expect(screen.getByRole('timer').textContent).toBe('05:00')
    // I zatvoreni se blok ne otvara ponovno.
    expect(navTitle()).toContain('Pisanje (2/3)')
  })

  it('nacrt vježbanja ne ulazi u simulaciju istog ispita', async () => {
    const { calls } = installSimApiMock({ exams: { [EXAM_KEY]: makeVisaExam() }, tier: 'pro' })
    localStorage.setItem(PRACTICE_DRAFT, JSON.stringify({
      at: Date.now(),
      answers: { R1: 'A', R2: 'A', L1: 'A', L2: 'A' },
      qTimes: {},
    }))
    renderPlay()
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' }))
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' }))
    fireEvent.click(screen.getByRole('button', { name: 'Predaj ispit' }))
    await act(async () => {})
    expect(calls.grade).toHaveLength(1)
    // Odgovori iz vježbanja (gdje „Provjeri“ pokazuje točan odgovor) ne smiju se
    // predati kao regularan ispitni pokušaj.
    expect(calls.grade[0].answers).toEqual({})
    expect(JSON.parse(localStorage.getItem(PRACTICE_DRAFT)).answers).toEqual({ R1: 'A', R2: 'A', L1: 'A', L2: 'A' })
  })

  it('potvrđeni izlazak iz simulacije briše nacrt, otkazani ga čuva', () => {
    installSimApiMock({ exams: { [EXAM_KEY]: makeVisaExam() }, tier: 'pro' })
    window.confirm = vi.fn(() => false)
    const { onExit } = renderPlay()
    expect(localStorage.getItem(EXAM_DRAFT)).not.toBeNull()
    fireEvent.click(screen.getByRole('button', { name: '← Natrag' }))
    expect(onExit).not.toHaveBeenCalled()
    expect(localStorage.getItem(EXAM_DRAFT)).not.toBeNull()

    window.confirm = vi.fn(() => true)
    fireEvent.click(screen.getByRole('button', { name: '← Natrag' }))
    expect(onExit).toHaveBeenCalledTimes(1)
    // Potvrda obećava da napredak nestaje — inače bi se odgovori vratili pri
    // sljedećem ulasku u isti ispit.
    expect(localStorage.getItem(EXAM_DRAFT)).toBeNull()
  })

  it('vježbanje ne piše u ispitni ključ i ne dobiva rok', () => {
    installSimApiMock({ exams: { [EXAM_KEY]: makeVisaExam() }, tier: 'pro' })
    renderPlay({ examMode: false })
    expect(localStorage.getItem(EXAM_DRAFT)).toBeNull()
  })
})
