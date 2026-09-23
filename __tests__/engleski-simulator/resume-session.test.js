// @vitest-environment happy-dom
/**
 * resume-session.test.js
 *
 * Nastavak nedovršenog ispita nakon refresha ili zatvaranja kartice.
 * Pokriveno je troje:
 *   1. čisti modul (lib/engleski-simulator/resumeSession.js) — TTL, sanitizacija,
 *      sintetičke sesije, privatnost zapisa,
 *   2. ExamPlayScreen — pisanje snapshota, podizanje odgovora i pozicije pri
 *      remountu ("refresh"), sat simulacije preko endsAt, brisanje pri predaji i
 *      svjesnom izlasku, prepisivanje novim ispitom,
 *   3. EngleskiSimulator — Home kartica „Nastavi ispit”, Odbaci, istekao TTL i
 *      automatska predaja kad je rok prošao dok korisnika nije bilo.
 *
 * ZAŠTO '?lang.jsx' NA IMPORTU: isto kao u exam-play-blocks.test.js —
 * EngleskiSimulator.js ima JSX u '.js' datoteci, a oxc JSX parsira samo za
 * '.jsx'/'.tsx'.
 */
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act, cleanup, waitFor } from '@testing-library/react'
import { createElement as e } from 'react'
import { makeVisaExam, PRO_ACCESS } from './_synthExam.js'
import {
  ENG_ACTIVE_SESSION_KEY, ACTIVE_SESSION_TTL_MS, buildSnapshot, writeActiveSession,
  readActiveSession, clearActiveSession, clearActiveSessionFor, isResumableExamKey,
  answeredCount, remainingSeconds, formatRemaining, sanitizeAnswers,
} from '@/lib/engleski-simulator/resumeSession'

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), replace: vi.fn(), prefetch: vi.fn() }),
  usePathname: () => '/engleski-simulator',
  useSearchParams: () => new URLSearchParams(),
}))

// Prijavljen pro korisnik: prijava je po politici obavezna, a pro plan drži sva
// pitanja otključanima — paywall nije predmet ovog testa.
vi.mock('@/lib/hooks/useAuth', () => ({
  useAuth: () => ({ user: { id: 'resume-test-user' }, isPro: true, isPaid: true, loading: false }),
}))

// Sintetički ispit osnovne razine za integracijski dio (jedan blok, jedno mc
// pitanje) — dovoljno za Home karticu i tok nastavka.
const OSN_EXAM = {
  key: '2024_ljeto',
  year: 2024,
  season: 'ljeto',
  label: 'Ljetni rok',
  razina: 'osnovna',
  qs: [
    { id: 'o1', section: 'reading', type: 'mc', topic: 'reading', q: 'Osnovna pitanje 1', opts: ['A opcija', 'B opcija', 'C opcija'], sol: { cl: 'A' } },
    { id: 'o2', section: 'reading', type: 'mc', topic: 'reading', q: 'Osnovna pitanje 2', opts: ['A opcija', 'B opcija', 'C opcija'], sol: { cl: 'B' } },
  ],
}
// Ispit više razine s tri cjeline (Čitanje/Pisanje/Slušanje) — za nastavak
// simulacije kojoj je istekla cjelina koja NIJE zadnja.
const VIS_EXAM = makeVisaExam()
const EXAMS_MAP = { [OSN_EXAM.key]: OSN_EXAM, [VIS_EXAM.key]: VIS_EXAM }
// 'hasListening: false' odgovara OSN_EXAM-u koji ima samo pitanja čitanja — indeks
// i banka moraju biti u skladu, inače kartica krivo procijeni broj cjelina.
const EXAMS_INDEX = [
  { key: OSN_EXAM.key, year: 2024, season: 'ljeto', label: 'Ljetni rok', razina: 'osnovna', hasListening: false, hasReading: true, qCount: 2 },
  { key: VIS_EXAM.key, year: 9999, season: 'test', label: 'Testni rok', razina: 'visa', hasListening: true, hasReading: true, qCount: 6 },
]

vi.mock('@/lib/engleski-simulator/examsLoader', () => ({
  RAZINE: ['osnovna', 'visa'],
  getExamsIndex: () => EXAMS_INDEX,
  razinaForKey: () => 'osnovna',
  isRazinaLoaded: () => true,
  loadRazina: () => Promise.resolve(EXAMS_MAP),
  getLoadedSync: () => EXAMS_MAP,
}))

vi.mock('@/components/engleski-simulator/screens/AnalyticsPanelFull', () => ({
  AnalyticsPanelFull: () => null,
}))

const { ExamPlayScreen, default: EngleskiSimulator } =
  await import('../../components/engleski-simulator/EngleskiSimulator.js?lang.jsx')

const READING_S = 70 * 60

/** MCQ opcije su div[role=radio] s aria-checked (nema DOM .checked). */
function isChecked(el) {
  return el.getAttribute('aria-checked') === 'true'
}

function snap() {
  const raw = localStorage.getItem(ENG_ACTIVE_SESSION_KEY)
  return raw ? JSON.parse(raw) : null
}

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
    ...overrides,
  }))
  return { onDone, onExit, ...utils }
}

describe('resumeSession — zapis u localStorageu', () => {
  beforeEach(() => { try { localStorage.clear() } catch {} })

  it('sintetičke sesije se ne spremaju i ne diraju tuđi snapshot', () => {
    expect(isResumableExamKey('2024_ljeto')).toBe(true)
    expect(isResumableExamKey('vis_2024_prvi')).toBe(true)
    for (const k of ['virtual_123', 'filter_session_9', 'exam_errors_session', 'daily_20321', '', null]) {
      expect(isResumableExamKey(k)).toBe(false)
    }
    writeActiveSession(buildSnapshot({ examKey: '2024_ljeto', examMode: false, answers: { o1: 'A' } }))
    const before = snap()
    expect(writeActiveSession(buildSnapshot({ examKey: 'virtual_1', examMode: false }))).toBe(false)
    expect(snap()).toEqual(before)
  })

  it('snapshot stariji od TTL-a se ignorira i briše', () => {
    const now = 1_700_000_000_000
    writeActiveSession(buildSnapshot({ examKey: '2024_ljeto', examMode: false, answers: { o1: 'A' }, now }))
    expect(readActiveSession(now + ACTIVE_SESSION_TTL_MS - 1000)).not.toBeNull()
    expect(readActiveSession(now + ACTIVE_SESSION_TTL_MS + 1000)).toBeNull()
    expect(localStorage.getItem(ENG_ACTIVE_SESSION_KEY)).toBeNull()
  })

  it('pokvaren ili tuđi zapis se briše umjesto da se koristi', () => {
    localStorage.setItem(ENG_ACTIVE_SESSION_KEY, '{nije json')
    expect(readActiveSession()).toBeNull()
    localStorage.setItem(ENG_ACTIVE_SESSION_KEY, JSON.stringify({ v: 99, examKey: '2024_ljeto', mode: 'vjezbanje', savedAt: Date.now() }))
    expect(readActiveSession()).toBeNull()
    expect(localStorage.getItem(ENG_ACTIVE_SESSION_KEY)).toBeNull()
  })

  it('zapis nosi samo korisnikove odgovore i indekse — nikad tekst pitanja (ADR-001)', () => {
    // Namjerno podmetnut cijeli objekt pitanja kao "odgovor"
    const dirty = {
      o1: 'A',
      o2: { lijevo: 'B' },
      o3: { q: 'Tekst pitanja koji ne smije u zapis', sol: { cl: 'C' }, opts: ['x'] },
    }
    writeActiveSession(buildSnapshot({ examKey: '2024_ljeto', examMode: true, answers: dirty, endsAt: Date.now() + 1000 }))
    const raw = localStorage.getItem(ENG_ACTIVE_SESSION_KEY)
    expect(raw).not.toContain('Tekst pitanja')
    expect(raw).not.toContain('sol')
    expect(raw).not.toContain('opts')
    expect(JSON.parse(raw).answers).toEqual({ o1: 'A', o2: { lijevo: 'B' } })
    expect(sanitizeAnswers({ a: () => {} })).toEqual({})
  })

  it('sparivanje (mat) preživi zapis s punim tekstom opcije', () => {
    // Vrijednost 'mat' odgovora je CIJELI tekst desne opcije (SimSharedUI), a
    // ocjenjivanje uspoređuje upravo njega — kratiti ga ili odbaciti značilo bi
    // tiho izgubljeno sparivanje i nižu ocjenu.
    const dugo = 'A — To teach their children responsibility.'
    const ans = { q1: { 'Why do people get dogs?': dugo, 'Short': 'D — Daniel' } }
    expect(sanitizeAnswers(ans)).toEqual(ans)
    expect(answeredCount(sanitizeAnswers(ans))).toBe(1)
    // Apsurdno dug niz (nije opcija nego tuđi sadržaj) i dalje otpada
    expect(sanitizeAnswers({ q1: { l: 'x'.repeat(500) } })).toEqual({})
    // Objekt pitanja se prepoznaje po poljima, ne po duljini teksta
    expect(sanitizeAnswers({ q1: { q: 'Tekst pitanja', l: 'A — Alec' } })).toEqual({})
  })

  it('brisanje je vezano uz ispit — sintetička sesija i drugi tab ne diraju tuđi zapis', () => {
    writeActiveSession(buildSnapshot({ examKey: '2024_ljeto', examMode: true, answers: { o1: 'A' } }))
    const before = snap()
    for (const k of ['daily_20321', 'virtual_1', 'filter_session_9', 'exam_errors_session', '2023_ljeto', null]) {
      expect(clearActiveSessionFor(k)).toBe(false)
    }
    expect(snap()).toEqual(before)
    expect(clearActiveSessionFor('2024_ljeto')).toBe(true)
    expect(snap()).toBeNull()
  })

  it('nemjereno vježbanje nema rok; simulacija i „Vježbanje ⏱” ga imaju', () => {
    const end = Date.now() + 60_000
    expect(buildSnapshot({ examKey: 'k', examMode: false, endsAt: end }).endsAt).toBeNull()
    expect(buildSnapshot({ examKey: 'k', examMode: true, endsAt: end }).endsAt).toBe(end)
    // Mjereno vježbanje: rok se pamti, pa refresh ne vraća puni sat
    expect(buildSnapshot({ examKey: 'k', examMode: false, timedMode: true, endsAt: end }).endsAt).toBe(end)
    writeActiveSession(buildSnapshot({ examKey: '2024_ljeto', examMode: false, timedMode: true, endsAt: end }))
    expect(readActiveSession().endsAt).toBe(end)
    const s = { endsAt: end }
    expect(remainingSeconds(s, end - 90_000)).toBe(90)
    expect(remainingSeconds(s, end + 5_000)).toBe(0)
    expect(remainingSeconds({ endsAt: null }, 0)).toBeNull()
    expect(formatRemaining(3607)).toBe('60:07')
    expect(answeredCount({ a: 'A', b: '', c: null, d: { x: '' }, e: { x: 'B' } })).toBe(2)
  })
})

describe('ExamPlayScreen — snapshot i nastavak', () => {
  beforeEach(() => {
    window.confirm = vi.fn(() => true)
    try { localStorage.clear() } catch {}
  })
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('ulazak u ispit odmah zapisuje snapshot, odgovori se spremaju debounceano', () => {
    vi.useFakeTimers()
    renderPlay()
    const s0 = snap()
    expect(s0.examKey).toBe('vis_9999_test')
    expect(s0.mode).toBe('simulacija')
    expect(s0.blockIdx).toBe(0)
    expect(s0.answers).toEqual({})
    expect(typeof s0.endsAt).toBe('number')

    fireEvent.click(screen.getAllByRole('radio')[0])
    // Prije isteka debouncea zapis je još stari
    expect(snap().answers).toEqual({})
    act(() => { vi.advanceTimersByTime(500) })
    expect(snap().answers).toEqual({ R1: 'A' })
  })

  it('remount s istim localStorageom vraća isto pitanje i iste odgovore (vježbanje)', () => {
    vi.useFakeTimers()
    const first = renderPlay({ examMode: false })
    fireEvent.click(screen.getAllByRole('radio')[1])
    fireEvent.click(screen.getByRole('button', { name: 'Sljedeće →' }))
    act(() => { vi.advanceTimersByTime(500) })
    const saved = snap()
    expect(saved.mode).toBe('vjezbanje')
    expect(saved.endsAt).toBeNull()
    expect(saved.cur).toBe(1)

    // "Refresh": komponenta nestane bez predaje, snapshot ostaje
    first.unmount()
    expect(snap()).not.toBeNull()

    const restored = readActiveSession()
    renderPlay({ examMode: false, resume: restored })
    expect(screen.getByText('R2-TEXT')).toBeTruthy()
    expect(isChecked(screen.getAllByRole('radio')[1])).toBe(false)
    // Odgovor prvog pitanja je i dalje zapisan
    fireEvent.click(screen.getByRole('button', { name: '← Prethodno' }))
    expect(screen.getByText('R1-TEXT')).toBeTruthy()
    expect(isChecked(screen.getAllByRole('radio')[1])).toBe(true)
  })

  it('simulacija nastavlja u istom bloku i sa spremljenim odgovorima', () => {
    vi.useFakeTimers()
    const first = renderPlay()
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' })) // → Pisanje
    act(() => { vi.advanceTimersByTime(500) })
    expect(snap().blockIdx).toBe(1)
    first.unmount()

    renderPlay({ resume: readActiveSession(), resumeSeconds: 60 })
    expect(document.querySelector('.ntitle').textContent).toContain('Pisanje (2/3)')
  })

  it('sat simulacije nastavlja od preostalog vremena (endsAt − now), ne od punog', () => {
    vi.useFakeTimers()
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    const first = renderPlay()
    const savedEndsAt = snap().endsAt
    first.unmount()

    // Korisnik se vraća 60 min kasnije — preostalo je 10 min, ne punih 70
    const resume = readActiveSession()
    const left = remainingSeconds(resume, savedEndsAt - 10 * 60 * 1000)
    expect(left).toBe(600)
    const { onDone } = renderPlay({ resume, resumeSeconds: left })
    expect(document.querySelector('.timer').textContent).toBe('10:00')

    // Blok istječe nakon preostalih 10 min, ne nakon 70
    act(() => { vi.advanceTimersByTime(600 * 1000) })
    expect(document.querySelector('.ntitle').textContent).toContain('Pisanje (2/3)')
    // Sljedeći blok kreće od punog vremena i ima novi rok u snapshotu
    expect(document.querySelector('.timer').textContent).toBe('75:00')
    expect(onDone).not.toHaveBeenCalled()
    expect(errorSpy.mock.calls.some(c => String(c[0]).includes('Cannot update a component'))).toBe(false)
    errorSpy.mockRestore()
  })

  it('prelazak cjeline se zapisuje ODMAH, ne kroz debounce', () => {
    // Inače bi refresh u tih 400 ms našao zapis sa starom cjelinom i rokom koji
    // je upravo istekao → nastavak bi predao cijeli ispit.
    vi.useFakeTimers()
    renderPlay()
    const before = snap()
    fireEvent.click(screen.getByRole('button', { name: 'Završi dio →' }))
    const after = snap()
    expect(after.blockIdx).toBe(1)
    expect(after.endsAt).toBeGreaterThan(before.endsAt)
  })

  it('pomaknut sistemski sat ne može dati više od punog vremena cjeline', () => {
    vi.useFakeTimers()
    const tooMuch = 999 * 60
    renderPlay({
      resume: { examKey: 'vis_9999_test', cur: 0, blockIdx: 0, answers: {}, endsAt: Date.now() + tooMuch * 1000 },
      resumeSeconds: tooMuch,
    })
    expect(document.querySelector('.timer').textContent).toBe('70:00')
    // I zapisani rok je kapiran, pa se prednost ne prenosi na sljedeći refresh
    expect(snap().endsAt - Date.now()).toBeLessThanOrEqual(READING_S * 1000)
  })

  it('mjereno vježbanje („Vježbanje ⏱”) nastavlja od preostalog vremena, ne od punog', () => {
    vi.useFakeTimers()
    const first = renderPlay({ examMode: false, timedMode: true })
    const saved = snap()
    expect(saved.mode).toBe('vjezbanje')
    expect(typeof saved.endsAt).toBe('number')
    first.unmount()

    const resume = readActiveSession()
    const left = remainingSeconds(resume, resume.endsAt - 5 * 60 * 1000)
    renderPlay({ examMode: false, timedMode: true, resume, resumeSeconds: left })
    expect(document.querySelector('.timer').textContent).toBe('05:00')
  })

  it('nova sesija bez snapshota kreće od punog vremena bloka (nepromijenjeno ponašanje)', () => {
    vi.useFakeTimers()
    renderPlay()
    expect(document.querySelector('.timer').textContent).toBe('70:00')
    expect(snap().endsAt - Date.now()).toBeGreaterThan((READING_S - 5) * 1000)
  })

  it('predaja ispita briše snapshot', () => {
    vi.useFakeTimers()
    const { onDone } = renderPlay({ examMode: false })
    expect(snap()).not.toBeNull()
    fireEvent.click(screen.getByRole('button', { name: 'Vidi rezultate' }))
    expect(onDone).toHaveBeenCalledTimes(1)
    expect(snap()).toBeNull()
    // Ni odgođeni zapis ga ne vraća
    act(() => { vi.advanceTimersByTime(2000) })
    expect(snap()).toBeNull()
  })

  it('svjestan izlazak („← Natrag”) briše snapshot, a refresh ga ostavlja', () => {
    vi.useFakeTimers()
    const { onExit, unmount } = renderPlay()
    fireEvent.click(screen.getByRole('button', { name: '← Natrag' }))
    expect(onExit).toHaveBeenCalledTimes(1)
    expect(snap()).toBeNull()
    unmount()

    // Za usporedbu: isti ispit, ali bez klika na Natrag (refresh)
    const second = renderPlay()
    second.unmount()
    expect(snap()).not.toBeNull()
  })

  it('novi ispit prepisuje snapshot prethodnog', () => {
    vi.useFakeTimers()
    const first = renderPlay({ examMode: false })
    expect(snap().examKey).toBe('vis_9999_test')
    first.unmount()
    renderPlay({ exam: OSN_EXAM, examMode: false })
    expect(snap().examKey).toBe(OSN_EXAM.key)
    expect(snap().answers).toEqual({})
  })

  it('sintetička sesija (greške/filter/virtualni) ne piše i ne briše snapshot', () => {
    vi.useFakeTimers()
    writeActiveSession(buildSnapshot({ examKey: OSN_EXAM.key, examMode: false, answers: { o1: 'A' } }))
    const before = snap()
    const errs = { ...makeVisaExam(), key: 'exam_errors_session' }
    const sess = renderPlay({ exam: errs, examMode: false })
    fireEvent.click(screen.getAllByRole('radio')[0])
    act(() => { vi.advanceTimersByTime(1000) })
    expect(snap()).toEqual(before)
    // Ni PREDAJA te sesije ne smije obrisati tuđi zapis (brisanje je vezano uz ključ)
    fireEvent.click(screen.getByRole('button', { name: 'Vidi rezultate' }))
    expect(snap()).toEqual(before)
    // Ni izlazak iz te sesije ne smije obrisati tuđi zapis
    fireEvent.click(screen.getByRole('button', { name: '← Natrag' }))
    expect(snap()).toEqual(before)
    sess.unmount()
  })
})

describe('EngleskiSimulator — Home kartica „Nastavi ispit”', () => {
  beforeEach(() => {
    global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({}) }))
    try { localStorage.clear() } catch {}
    window.confirm = vi.fn(() => true)
  })
  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('kartica prikazuje napredak i „Nastavi” vraća odgovore u ispit', async () => {
    writeActiveSession(buildSnapshot({
      examKey: OSN_EXAM.key, examMode: false, answers: { o1: 'A' }, cur: 1,
    }))
    render(e(EngleskiSimulator))

    const card = await screen.findByText('Nastavi ispit', {}, { timeout: 20000 })
    expect(card).toBeTruthy()
    expect(screen.getByText(/2024\. — Ljetni rok · Vježbanje · 1\/2/)).toBeTruthy()

    fireEvent.click(screen.getByRole('button', { name: 'Nastavi' }))
    // Nastavak ide na spremljeno pitanje, s prethodnim odgovorom
    await screen.findByText('Osnovna pitanje 2', {}, { timeout: 20000 })
    fireEvent.click(screen.getByRole('button', { name: '← Prethodno' }))
    expect(screen.getByText('Osnovna pitanje 1')).toBeTruthy()
    expect(isChecked(screen.getAllByRole('radio')[0])).toBe(true)
  }, 60000)

  it('„Odbaci” briše snapshot i kartica nestaje', async () => {
    writeActiveSession(buildSnapshot({ examKey: OSN_EXAM.key, examMode: false, answers: { o1: 'A' } }))
    render(e(EngleskiSimulator))
    await screen.findByText('Nastavi ispit', {}, { timeout: 20000 })
    fireEvent.click(screen.getByRole('button', { name: 'Odbaci' }))
    await waitFor(() => expect(screen.queryByText('Nastavi ispit')).toBeNull())
    expect(snap()).toBeNull()
  }, 60000)

  it('istekao TTL — nema kartice i zapis se počisti', async () => {
    const old = buildSnapshot({ examKey: OSN_EXAM.key, examMode: false, answers: { o1: 'A' } })
    old.savedAt = Date.now() - ACTIVE_SESSION_TTL_MS - 60_000
    localStorage.setItem(ENG_ACTIVE_SESSION_KEY, JSON.stringify(old))
    render(e(EngleskiSimulator))
    await waitFor(() => expect(document.querySelector('.hero')).toBeTruthy(), { timeout: 20000 })
    expect(screen.queryByText('Nastavi ispit')).toBeNull()
    expect(snap()).toBeNull()
  }, 60000)

  it('istekla cjelina koja NIJE zadnja → nastavak sljedeće cjeline s punim vremenom', async () => {
    // Rok u snapshotu je rok TEKUĆE cjeline. Istek Čitanja dok korisnika nije
    // bilo mora završiti isto kao istek uživo: Pisanje s punih 75 min, a ne
    // predaja ispita u kojem dvije trećine nisu ni ponuđene.
    writeActiveSession(buildSnapshot({
      examKey: VIS_EXAM.key, examMode: true, answers: { R1: 'A' }, cur: 0, blockIdx: 0,
      endsAt: Date.now() - 60 * 1000,
    }))
    render(e(EngleskiSimulator))
    await screen.findByText('Nastavi ispit', {}, { timeout: 20000 })
    // Nije zadnja cjelina → gumb doista nastavlja
    fireEvent.click(screen.getByRole('button', { name: 'Nastavi' }))

    await waitFor(() => expect(document.querySelector('.ntitle')).toBeTruthy(), { timeout: 20000 })
    expect(document.querySelector('.ntitle').textContent).toContain('Pisanje (2/3)')
    expect(document.querySelector('.timer').textContent).toBe('75:00')
    expect(document.querySelector('[role="status"]').textContent).toContain('Pisanje')
    // Zapis je odmah osvježen na novu cjelinu, s novim rokom i zadržanim odgovorom
    const s = snap()
    expect(s.blockIdx).toBe(1)
    expect(s.answers).toEqual({ R1: 'A' })
    expect(s.endsAt).toBeGreaterThan(Date.now())
  }, 60000)

  it('istekla ZADNJA cjelina → automatska predaja spremljenih odgovora i poruka', async () => {
    writeActiveSession(buildSnapshot({
      examKey: OSN_EXAM.key, examMode: true, answers: { o1: 'A' }, cur: 0,
      endsAt: Date.now() - 5 * 60 * 1000,
    }))
    render(e(EngleskiSimulator))
    await screen.findByText('Ispit čeka predaju', {}, { timeout: 20000 })
    expect(screen.getByText('Vrijeme je isteklo')).toBeTruthy()

    // Gumb piše ono što doista radi — predaju, ne nastavak
    fireEvent.click(screen.getByRole('button', { name: 'Predaj i vidi rezultat' }))
    // Ne ulazi se u ispit — ide se ravno na rezultate (nema ni sata ni predaje)
    await waitFor(() => expect(document.querySelector('.score-ring-pct')).toBeTruthy(), { timeout: 40000 })
    expect(document.querySelector('.timer')).toBeNull()
    expect(screen.queryByRole('button', { name: 'Predaj ispit' })).toBeNull()
    expect(document.querySelector('[role="status"]').textContent).toContain('Vrijeme je isteklo')
    expect(snap()).toBeNull()
    // Spremljeni odgovor je ocijenjen: o1 = 'A' je točan, o2 neodgovoren → 50 %
    const stored = JSON.parse(localStorage.getItem('engleski_simulator_user'))
    expect(stored.history).toHaveLength(1)
    expect(stored.history[0].pct).toBe(50)
    expect(stored.history[0].mode).toBe('simulacija')
  }, 90000)

  it('dnevni izazov ne stvara snapshot sesije', async () => {
    render(e(EngleskiSimulator))
    await waitFor(() => expect(document.querySelector('.hero')).toBeTruthy(), { timeout: 20000 })
    fireEvent.click(screen.getByText('Dnevni izazov'))
    // Ekran se promijenio (Home hero je nestao), a sesija se nije zapisala
    await waitFor(() => expect(document.querySelector('.hero')).toBeNull(), { timeout: 20000 })
    expect(snap()).toBeNull()
  }, 60000)
})
