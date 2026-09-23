// @vitest-environment happy-dom
import { readFileSync } from 'node:fs'
import path from 'node:path'
import React from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cleanup, render } from '@testing-library/react'
import vm from 'node:vm'
import * as acorn from 'acorn'
import { SOC_FREE_DEMO } from '@/lib/exam-secrets/free-policy'

/**
 * ADR-001, Faza 2 — MOST ZA SOCIOLOGIJU (ODLUKA 7).
 *
 * Engine je statički HTML u public/ i nema pravo zvati mrežu. Ispit dohvaća i
 * predaju šalje ISKLJUČIVO roditelj (app/discere/sociologija/SociologijaClient.jsx),
 * porukama:
 *
 *   iframe → parent : DISCERE_NEED_EXAM {key,mode}  ("*" = cijela banka)
 *                     DISCERE_SUBMIT {examKey,answers,qTimes,examMode,attemptId}
 *   parent → iframe : DISCERE_EXAMS {key,exam} / DISCERE_EXAM_ERROR
 *                     DISCERE_GRADE {attemptId,result} / DISCERE_GRADE_ERROR
 *
 * Prvi dio testa vozi roditelja u pregledniku (happy-dom): poruka ulazi, HTTP
 * izlazi, odgovor se vraća porukom. Drugi dio je REGRESIJSKO SIDRO nad samim
 * HTML-om — da netko ne vrati `fetch` u iframe ili ne pomakne socFeatureGate iza
 * skupnog dohvata banke (ODLUKA 4).
 */

/* ────────────────────────────────────────────────────────────────────────────
   DIO 1 — roditelj (SociologijaClient)
   ──────────────────────────────────────────────────────────────────────────── */

const mocks = vi.hoisted(() => ({
  push: vi.fn(),
  auth: { user: { id: 'u1' }, isPro: false, isPaid: false },
  loadSimState: vi.fn(async () => ({})),
  saveSimState: vi.fn(),
  saveSimResult: vi.fn(),
}))

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: mocks.push }) }))
vi.mock('@/lib/hooks/useAuth', () => ({ useAuth: () => mocks.auth }))
vi.mock('@/lib/discere-sim-state', () => ({
  loadSimState: mocks.loadSimState,
  saveSimState: mocks.saveSimState,
}))
vi.mock('@/lib/sim-progress', () => ({ saveSimResult: mocks.saveSimResult }))

const ROOT = path.resolve(__dirname, '..', '..')
const EXAM_INDEX = JSON.parse(readFileSync(path.join(ROOT, 'lib', 'data', 'soc', 'exams-index.json'), 'utf8'))
const EXAM_KEY = '2025_ljeto'

/** Envelope kakav vraća GET /api/sim/soc/exam/<key> — bez ijednog ključa. */
function envelope(key = EXAM_KEY, keys = 'none') {
  return {
    key,
    meta: { year: 2025, season: 'ljeto', label: 'Ljetni rok', durationSec: 5400 },
    texts: {},
    qs: [{ id: '1', type: 'mc', topic: 'st', q: 'Pitanje?', opts: ['A', 'B', 'C', 'D'] }],
    keys,
  }
}

function okResponse(body, headers = {}) {
  return {
    ok: true,
    status: 200,
    json: async () => body,
    headers: { get: (name) => headers[name] ?? null },
  }
}

function errResponse(status, body = {}, headers = {}) {
  return {
    ok: false,
    status,
    json: async () => body,
    headers: { get: (name) => headers[name] ?? null },
  }
}

let posted = []
let frameWindow = null
let fetchMock = null

/** Montiraj roditelja i podmetni mu iframe prozor koji bilježi poruke. */
async function mountClient() {
  const { default: SociologijaClient } = await import('@/app/discere/sociologija/SociologijaClient')
  const view = render(React.createElement(SociologijaClient))
  const iframe = view.container.querySelector('iframe')
  frameWindow = { postMessage: (msg) => posted.push(msg) }
  Object.defineProperty(iframe, 'contentWindow', { value: frameWindow, configurable: true })
  return view
}

/**
 * Poruka iz iframea. `source` mora biti isti objekt koji roditelj vidi kao
 * contentWindow — upravo to je provjera koju roditelj radi prije svake poruke,
 * pa je test ne smije zaobići.
 */
function fromFrame(data, source = frameWindow) {
  const ev = new Event('message')
  Object.defineProperty(ev, 'data', { value: data })
  Object.defineProperty(ev, 'source', { value: source })
  window.dispatchEvent(ev)
}

function lastOfType(type) {
  for (let i = posted.length - 1; i >= 0; i -= 1) if (posted[i]?.type === type) return posted[i]
  return null
}

// happy-dom bi doista pokušao dohvatiti /sim/sociologija.html iz iframea — pravi
// mrežni poziv na localhost, koji u CI-ju samo troši vrijeme i pada. Ovdje se
// engine ne pokreće (provjerava se statički, DIO 2), pa se učitavanje gasi.
// happy-dom to prijavi u svoj page console; poruka je bezopasna.
try { window.happyDOM.settings.disableIframePageLoading = true } catch { /* starija verzija happy-doma */ }

beforeEach(() => {
  vi.clearAllMocks()
  posted = []
  frameWindow = null
  mocks.auth = { user: { id: 'u1' }, isPro: false, isPaid: false }
  fetchMock = vi.fn(async (url) => {
    if (String(url).includes('/api/sim/soc/exam/')) return okResponse(envelope())
    return okResponse({ pct: 100, grade: 5, cor: 1, total: 1, bodovi: null, xpGain: 110, scores: { 1: true } })
  })
  globalThis.fetch = fetchMock
})

afterEach(() => {
  cleanup()
})

describe('SociologijaClient — dohvat ispita', () => {
  it('DISCERE_NEED_EXAM → GET /api/sim/soc/exam/<key> → DISCERE_EXAMS', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: EXAM_KEY, mode: 'exam' })

    await vi.waitFor(() => expect(lastOfType('DISCERE_EXAMS')).toBeTruthy())
    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(String(fetchMock.mock.calls[0][0])).toBe(`/api/sim/soc/exam/${EXAM_KEY}?mode=exam`)
    expect(fetchMock.mock.calls[0][1].credentials).toBe('same-origin')

    const msg = lastOfType('DISCERE_EXAMS')
    expect(msg.key).toBe(EXAM_KEY)
    expect(msg.exam.qs).toHaveLength(1)
    expect(msg.exam.keys).toBe('none')
  })

  it('način rada je dio keša — ista sesija u vježbanju traži svoj payload', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: EXAM_KEY, mode: 'exam' })
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

    // Isti ispit, isti mod → keš, bez novog zahtjeva.
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: EXAM_KEY, mode: 'exam' })
    await vi.waitFor(() => expect(posted.filter((m) => m.type === 'DISCERE_EXAMS')).toHaveLength(2))
    expect(fetchMock).toHaveBeenCalledTimes(1)

    // Drugi mod → novi zahtjev: payload iz vježbanja nosi ključeve kojih u
    // ispitnom modu ne smije biti.
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: EXAM_KEY, mode: 'practice' })
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))
    expect(String(fetchMock.mock.calls[1][0])).toBe(`/api/sim/soc/exam/${EXAM_KEY}?mode=practice`)
  })

  it('nepoznat ključ ispita ne dolazi ni do mreže', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: '../../etc/passwd', mode: 'exam' })

    await vi.waitFor(() => expect(lastOfType('DISCERE_EXAM_ERROR')).toBeTruthy())
    expect(lastOfType('DISCERE_EXAM_ERROR').status).toBe(404)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('401 s rute postaje DISCERE_EXAM_ERROR, a ne tiha tišina', async () => {
    fetchMock.mockResolvedValueOnce(errResponse(401))
    await mountClient()
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: EXAM_KEY, mode: 'exam' })

    await vi.waitFor(() => expect(lastOfType('DISCERE_EXAM_ERROR')).toBeTruthy())
    expect(lastOfType('DISCERE_EXAM_ERROR').status).toBe(401)
    expect(lastOfType('DISCERE_EXAMS')).toBeNull()
  })

  it('ODLUKA 4: free NIKAD ne radi skupni dohvat banke', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: '*', mode: 'exam' })

    await vi.waitFor(() => expect(lastOfType('DISCERE_EXAM_ERROR')).toBeTruthy())
    expect(lastOfType('DISCERE_EXAM_ERROR').status).toBe(403)
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('plaćeni tier dobiva cijelu banku lijeno i allSettled — jedan pad ne ruši ekran', async () => {
    mocks.auth = { user: { id: 'u1' }, isPro: false, isPaid: true }
    let seen = 0
    fetchMock.mockImplementation(async (url) => {
      const key = String(url).split('/').pop().split('?')[0]
      seen += 1
      // Jedan ispit namjerno pada: ostali moraju stići.
      if (key === EXAM_INDEX[0].key) return errResponse(500)
      return okResponse(envelope(key, 'full'))
    })

    await mountClient()
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: '*', mode: 'exam' })

    await vi.waitFor(() => expect(lastOfType('DISCERE_EXAMS_DONE')).toBeTruthy(), { timeout: 5000 })
    const done = lastOfType('DISCERE_EXAMS_DONE')
    expect(done.total).toBe(EXAM_INDEX.length)
    expect(done.delivered).toBe(EXAM_INDEX.length - 1)
    expect(seen).toBe(EXAM_INDEX.length)
    // Skupni dohvat ide s mode=exam — najuži mogući payload.
    for (const call of fetchMock.mock.calls) expect(String(call[0])).toContain('mode=exam')
  })
})

describe('SociologijaClient — predaja na ocjenjivanje', () => {
  it('DISCERE_SUBMIT → POST /api/sim/soc/grade → DISCERE_GRADE', async () => {
    await mountClient()
    fromFrame({
      type: 'DISCERE_SUBMIT',
      examKey: EXAM_KEY,
      answers: { 1: 'A' },
      qTimes: { 1: 12 },
      examMode: true,
      attemptId: 'soc-attempt-0001',
      durationSec: 1234,
    })

    await vi.waitFor(() => expect(lastOfType('DISCERE_GRADE')).toBeTruthy())
    const [url, init] = fetchMock.mock.calls[0]
    expect(String(url)).toBe('/api/sim/soc/grade')
    expect(init.method).toBe('POST')
    const body = JSON.parse(init.body)
    expect(body).toMatchObject({ examKey: EXAM_KEY, examMode: true, attemptId: 'soc-attempt-0001', durationSec: 1234 })
    expect(body.answers).toEqual({ 1: 'A' })

    const msg = lastOfType('DISCERE_GRADE')
    expect(msg.attemptId).toBe('soc-attempt-0001')
    expect(msg.result).toMatchObject({ pct: 100, grade: 5, cor: 1, total: 1 })
    expect(msg.result.scores).toEqual({ 1: true })
  })

  it('429 vraća DISCERE_GRADE_ERROR s odbrojavanjem iz Retry-After', async () => {
    fetchMock.mockResolvedValueOnce(
      errResponse(429, { error: 'Predaja je moguća svakih 60 s.' }, { 'Retry-After': '42' }),
    )
    await mountClient()
    fromFrame({ type: 'DISCERE_SUBMIT', examKey: EXAM_KEY, answers: {}, examMode: true, attemptId: 'soc-attempt-0002' })

    await vi.waitFor(() => expect(lastOfType('DISCERE_GRADE_ERROR')).toBeTruthy())
    const err = lastOfType('DISCERE_GRADE_ERROR')
    expect(err.status).toBe(429)
    expect(err.retryAfterSec).toBe(42)
    expect(err.error).toContain('60 s')
    expect(lastOfType('DISCERE_GRADE')).toBeNull()
  })

  it('ponovni pokušaj s ISTIM attemptId nakon greške ide ponovno na rutu', async () => {
    fetchMock.mockResolvedValueOnce(errResponse(500))
    await mountClient()
    const submit = { type: 'DISCERE_SUBMIT', examKey: EXAM_KEY, answers: {}, examMode: true, attemptId: 'soc-attempt-0003' }

    fromFrame(submit)
    await vi.waitFor(() => expect(lastOfType('DISCERE_GRADE_ERROR')).toBeTruthy())

    fromFrame(submit)
    await vi.waitFor(() => expect(lastOfType('DISCERE_GRADE')).toBeTruthy())
    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(JSON.parse(fetchMock.mock.calls[1][1].body).attemptId).toBe('soc-attempt-0003')
  })

  it('predaja s nepoznatim ključem ispita ne dolazi do mreže', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_SUBMIT', examKey: 'virtual_123', answers: {}, examMode: false, attemptId: 'a1234567' })

    await vi.waitFor(() => expect(lastOfType('DISCERE_GRADE_ERROR')).toBeTruthy())
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('poruka iz tuđeg prozora se ignorira', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_NEED_EXAM', key: EXAM_KEY, mode: 'exam' }, { postMessage() {} })
    await new Promise((r) => setTimeout(r, 20))
    expect(fetchMock).not.toHaveBeenCalled()
  })
})

describe('SociologijaClient — sim_progress (ODLUKA 2)', () => {
  it('rezultat koji je upisala ruta preglednik NE upisuje ponovno', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_RESULT', result: { examKey: EXAM_KEY, pct: 80, serverSaved: true } })
    await new Promise((r) => setTimeout(r, 20))
    expect(mocks.saveSimResult).not.toHaveBeenCalled()
  })

  it('pokušaj koji je ruta odbila (serverSaved:false) preglednik spašava', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_RESULT', result: { examKey: EXAM_KEY, pct: 80, serverSaved: false } })
    await vi.waitFor(() => expect(mocks.saveSimResult).toHaveBeenCalledTimes(1))
    expect(mocks.saveSimResult.mock.calls[0][2]).toBe('soc')
  })

  it('rezervni upis nosi attempt_id — inače jedinstveni indeks ne vidi duplikat', async () => {
    await mountClient()
    fromFrame({
      type: 'DISCERE_RESULT',
      result: { examKey: EXAM_KEY, pct: 80, serverSaved: false, attemptId: 'soc-attempt-77' },
    })
    await vi.waitFor(() => expect(mocks.saveSimResult).toHaveBeenCalledTimes(1))
    // Djelomični indeks (user_id, attempt_id) vrijedi samo where attempt_id is
    // not null: bez otiska bi redak prošao uz onaj koji je ruta već upisala.
    expect(mocks.saveSimResult.mock.calls[0][0].attemptId).toBe('soc-attempt-77')
  })

  it('pokušaj bez otiska šalje attemptId:null, ne undefined polje', async () => {
    await mountClient()
    fromFrame({ type: 'DISCERE_RESULT', result: { examKey: EXAM_KEY, pct: 80, serverSaved: false } })
    await vi.waitFor(() => expect(mocks.saveSimResult).toHaveBeenCalledTimes(1))
    expect(mocks.saveSimResult.mock.calls[0][0].attemptId).toBeNull()
  })
})

describe('SociologijaClient — odgovor u letu preživi osvježavanje tokena', () => {
  /**
   * useAuth na SVAKI Supabase auth događaj radi setUser(session?.user ?? null),
   * pa TOKEN_REFRESHED (periodično i pri povratku fokusa na karticu) daje NOVI
   * objekt istog korisnika. Ako se most na to poništi, odgovor predaje koji je u
   * letu nema kamo stići i engine istekne u „Slanje je predugo trajalo“ —
   * za predaju koju je ruta već ocijenila, upisala i naplatila iz budžeta.
   */
  it('novi `user` objekt istog korisnika ne guta DISCERE_GRADE', async () => {
    let release = null
    fetchMock.mockImplementationOnce(
      () => new Promise((resolve) => { release = () => resolve(okResponse({ pct: 100, grade: 5, cor: 1, total: 1, xpGain: 110, scores: { 1: true } })) }),
    )
    const view = await mountClient()
    fromFrame({ type: 'DISCERE_SUBMIT', examKey: EXAM_KEY, answers: {}, examMode: true, attemptId: 'a-1' })
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))

    // Osvježen token: isti korisnik, novi objekt.
    mocks.auth = { user: { id: 'u1' }, isPro: false, isPaid: false }
    view.rerender(React.createElement((await import('@/app/discere/sociologija/SociologijaClient')).default))

    release()
    await vi.waitFor(() => expect(lastOfType('DISCERE_GRADE')).toBeTruthy())
    expect(lastOfType('DISCERE_GRADE').attemptId).toBe('a-1')
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })
})

describe('SociologijaClient — tier stiže nakon handshakea (utrka s planom)', () => {
  /**
   * useAuth kreće s planTier 'free' i plan razrješava mrežom (fetchPlanStatus),
   * dok PlanGate djecu pušta čim `loading` padne — kod sesije u localStorageu to
   * je odmah. Lokalni iframe tu utrku redovito dobiva, pa je DISCERE_CONFIG na
   * prvi READY nosio 'free' i tamo ostajao do kraja sesije (READY se nakon boota
   * više ne ponavlja): plaćeni korisnik dobije keys:"full" s poslužitelja, a
   * engine mu skriva razradu i nudi „Otključaj razradu → Standard“.
   */
  const AUTH = (extra) => ({ user: { id: 'u1' }, isPro: false, isPaid: false, loading: false, planResolved: true, ...extra })

  async function rerenderWith(view, auth) {
    mocks.auth = auth
    view.rerender(React.createElement((await import('@/app/discere/sociologija/SociologijaClient')).default))
  }

  it('dok plan nije razriješen, „free“ nije odgovor — CONFIG i BOOT čekaju', async () => {
    mocks.auth = AUTH({ planResolved: false })
    const view = await mountClient()
    fromFrame({ type: 'DISCERE_READY' })

    // Stanje s oblaka ide odmah (engine ga primjenjuje samo dok nije bootan).
    await vi.waitFor(() => expect(lastOfType('DISCERE_HYDRATE')).toBeTruthy())
    expect(lastOfType('DISCERE_CONFIG')).toBeNull()
    expect(lastOfType('DISCERE_BOOT')).toBeNull()

    await rerenderWith(view, AUTH({ isPaid: true }))

    await vi.waitFor(() => expect(lastOfType('DISCERE_CONFIG')).toBeTruthy())
    const cfg = lastOfType('DISCERE_CONFIG')
    expect(cfg.tier).toBe('standard')
    expect(cfg.lockResults).toBe(false)
    expect(cfg.allowed).toBeNull()
    expect(lastOfType('DISCERE_BOOT')).toBeTruthy()
    // Engine READY ponavlja dok ne dobije BOOT; stanje se zato čita točno jednom.
    expect(posted.filter((m) => m.type === 'DISCERE_HYDRATE')).toHaveLength(1)
  })

  it('ponovljeni READY ne čita stanje ponovno i ne boota prije tiera', async () => {
    mocks.auth = AUTH({ planResolved: false })
    await mountClient()
    fromFrame({ type: 'DISCERE_READY' })
    await vi.waitFor(() => expect(lastOfType('DISCERE_HYDRATE')).toBeTruthy())
    fromFrame({ type: 'DISCERE_READY' })
    fromFrame({ type: 'DISCERE_READY' })
    await new Promise((r) => setTimeout(r, 20))

    expect(posted.filter((m) => m.type === 'DISCERE_HYDRATE')).toHaveLength(1)
    expect(mocks.loadSimState).toHaveBeenCalledTimes(1)
    expect(lastOfType('DISCERE_BOOT')).toBeNull()
  })

  it('engine je već bootan s tierom „free“ — novi CONFIG ga ispravlja', async () => {
    // Plan se razriješio kao free (ili je korisnik nadogradio plan u drugoj
    // kartici). READY je prošao, engine je bootan i više se ne javlja, pa je
    // jedini put do ispravka DISCERE_CONFIG poslan bez novog handshakea.
    mocks.auth = AUTH()
    const view = await mountClient()
    fromFrame({ type: 'DISCERE_READY' })
    await vi.waitFor(() => expect(lastOfType('DISCERE_BOOT')).toBeTruthy())
    expect(lastOfType('DISCERE_CONFIG')).toMatchObject({ tier: 'free', lockResults: true })
    expect(lastOfType('DISCERE_CONFIG').allowed).toEqual(SOC_FREE_DEMO)

    await rerenderWith(view, AUTH({ isPaid: true }))

    await vi.waitFor(() => expect(posted.filter((m) => m.type === 'DISCERE_CONFIG')).toHaveLength(2))
    const cfg = lastOfType('DISCERE_CONFIG')
    expect(cfg.tier).toBe('standard')
    expect(cfg.lockResults).toBe(false)
    expect(cfg.allowed).toBeNull()
    expect(cfg.isPro).toBe(false)
    // Bez novog čitanja stanja: hidracija je stvar montiranja, ne tiera.
    expect(posted.filter((m) => m.type === 'DISCERE_HYDRATE')).toHaveLength(1)
  })

  it('odjava zaključa natrag — CONFIG ide i kad tier pada', async () => {
    mocks.auth = AUTH({ isPro: true })
    const view = await mountClient()
    fromFrame({ type: 'DISCERE_READY' })
    await vi.waitFor(() => expect(lastOfType('DISCERE_CONFIG')).toBeTruthy())
    expect(lastOfType('DISCERE_CONFIG')).toMatchObject({ tier: 'pro', isPro: true, lockResults: false })

    await rerenderWith(view, AUTH({ user: null }))

    await vi.waitFor(() => expect(lastOfType('DISCERE_CONFIG').tier).toBe('free'))
    expect(lastOfType('DISCERE_CONFIG').lockResults).toBe(true)
  })
})

/* ────────────────────────────────────────────────────────────────────────────
   DIO 2 — engine (public/sim/sociologija.html), regresijska sidra
   ──────────────────────────────────────────────────────────────────────────── */

const HTML_PATH = path.join(ROOT, 'public', 'sim', 'sociologija.html')
const html = readFileSync(HTML_PATH, 'utf8')

function inlineScript(source) {
  const open = source.lastIndexOf('<script>')
  const bodyStart = open + '<script>'.length
  return source.slice(bodyStart, source.indexOf('</script>', bodyStart))
}

const code = inlineScript(html)
const ast = acorn.parse(code, { ecmaVersion: 'latest' })

/** Sve deklaracije funkcija u skripti, na bilo kojoj dubini → ime → izvorni tekst. */
function collectFunctions(node, out = new Map()) {
  if (!node || typeof node !== 'object') return out
  if (Array.isArray(node)) {
    for (const child of node) collectFunctions(child, out)
    return out
  }
  if (node.type === 'FunctionDeclaration' && node.id && !out.has(node.id.name)) {
    out.set(node.id.name, code.slice(node.start, node.end))
  }
  for (const key of Object.keys(node)) {
    if (key === 'type' || key === 'start' || key === 'end') continue
    collectFunctions(node[key], out)
  }
  return out
}

const fns = collectFunctions(ast.body)

describe('engine — ODLUKA 7: iframe nikad ne zove mrežu za ispitne podatke', () => {
  it('skripta je sintaktički ispravna i EXAMS je prazan', () => {
    expect(typeof code).toBe('string')
    expect(code).toContain('let EXAMS={};')
  })

  it('nema nijednog dohvata /api/sim/* iz enginea', () => {
    // /api/ai-simulator je zasebna ruta s vlastitom prijavom i kvotom i ne
    // isporučuje ispitne podatke, pa nije predmet ove tvrdnje.
    const urls = [...code.matchAll(/fetch\(\s*["'`]([^"'`]+)/g)].map((m) => m[1])
    expect(urls.length).toBeGreaterThan(0) // da test ne postane prazan ako se regex razmine
    for (const url of urls) expect(url.startsWith('/api/sim/')).toBe(false)
  })

  it('ispit i ocjena traže se porukama roditelju', () => {
    expect(fns.get('socRequestExam')).toContain('DISCERE_NEED_EXAM')
    expect(fns.get('socRequestAllExams')).toContain('"*"')
    expect(fns.get('socSubmitToParent')).toContain('DISCERE_SUBMIT')
  })

  it('svaki ulazak u ispit prvo dohvaća ispit', () => {
    for (const name of ['goExam', 'goModeSelect', 'goExamMode', 'goPractice', 'goPracticeTimer']) {
      expect(fns.has(name)).toBe(true)
      expect(fns.get(name)).toContain('withExam(')
    }
  })

  it('predaja UVIJEK ide na poslužitelj, i kad klijent ima ključeve', () => {
    // `submit` postoji i u Dnevnom izazovu, pa se gleda tijelo Sima.
    const sim = fns.get('Sim')
    expect(sim).toContain('socSubmitToParent(')
    // Lokalni izračun služi trenutnom prikazu; konačan rezultat je onaj iz
    // DISCERE_GRADE (finalize(result, true)), a povijest se piše točno jednom.
    expect(sim).toContain('finalize(result,true)')
    expect(sim).toContain('doneCalledRef')
    // Istek roka predaje sam od sebe.
    expect(sim).toContain('if(timedRun&&submitRef.current)submitRef.current();')
  })

  it('nacrt ispita nosi odgovore, vremena, rok i tekuće pitanje', () => {
    const read = fns.get('socReadDraft')
    for (const field of ['answers', 'qTimes', 'deadline', 'cur', 'attemptId']) {
      expect(read).toContain(field)
    }
    // Način rada je dio ključa: vježbanje i simulacija ne dijele odgovore.
    expect(fns.get('socDraftKey')).toContain('examMode?"_exam"')
  })

  it('standalone otvaranje je fail-closed', () => {
    expect(fns.get('socRequestExam')).toContain('socHasParent()')
    expect(fns.get('socRequestAllExams')).toContain('socHasParent()')
    expect(code).toContain('SOC_STANDALONE_MSG')
  })
})

describe('engine — ODLUKA 4: socFeatureGate stoji PRIJE skupnog dohvata', () => {
  const GATED = ['goFilter', 'goErrors', 'goBrowse', 'goBookmarks', 'goFlashcards', 'goDailyChallenge', 'goSRS', 'goVirtualExam']

  it('svaki ekran nad cijelom bankom je iza gatea, i to prije zahtjeva', () => {
    for (const name of GATED) {
      const body = fns.get(name)
      expect(body, name).toBeTruthy()
      expect(body, name).toContain('socFeatureGate()')
      expect(body, name).toContain('withAllExams(')
      expect(body.indexOf('socFeatureGate()'), name).toBeLessThan(body.indexOf('withAllExams('))
    }
  })

  // Statistika je jedini ekran koji banku traži, a NIJE iza socFeatureGatea:
  // free korisnik svoju statistiku smije vidjeti, samo bez blokova izvedenih iz
  // cijele banke. Zato je kod njega zahtjev zabranjen izravnom provjerom
  // socLocked(), a ne gateom koji bi ga poslao na ekran za nadogradnju.
  const BANK_CALLERS = [...GATED, 'goStats']

  it('withAllExams se ne zove nigdje izvan tih ekrana', () => {
    const callers = [...fns.entries()]
      .filter(([name, body]) => name !== 'withAllExams' && body.includes('withAllExams('))
      // Ugniježđene funkcije nasljeđuju tekst omotača (App sadrži sve go*), pa
      // se gleda samo popis koji doista poziva, bez omotača.
      .map(([name]) => name)
      .filter((name) => name !== 'App')
    expect(callers.sort()).toEqual([...BANK_CALLERS].sort())
  })

  it('goStats za free ne traži banku — izlazi prije withAllExams', () => {
    const body = fns.get('goStats')
    expect(body).toBeTruthy()
    expect(body).toContain('socLocked()')
    expect(body.indexOf('socLocked()')).toBeLessThan(body.indexOf('withAllExams('))
  })

  it('Home i ModeSelect ne traže pitanja — popis ispita dolazi iz META-e', () => {
    expect(fns.get('Home')).toContain('const examList=SOC_EXAM_META;')
    expect(fns.get('Home')).not.toContain('DISCERE_NEED_EXAM')
    expect(fns.get('Home')).not.toContain('socRequestAllExams')
    expect(fns.get('ModeSelect')).not.toContain('socRequestAllExams')
    // Ukupan broj mc pitanja je izveden iz META-e, a ne iz (praznog) EXAMS-a.
    expect(code).toContain('const SOC_TOTAL_MC=SOC_EXAM_META.reduce(')
  })
})

describe('engine — kasni DISCERE_CONFIG osvježava već renderirane ekrane', () => {
  it('promjena konfiguracije se javlja događajem, a ista se ne prebojava', () => {
    const at = code.indexOf('d.type==="DISCERE_CONFIG"')
    expect(at).toBeGreaterThan(-1)
    const handler = code.slice(at, at + 1200)
    expect(handler).toContain('window.__SOC_BRIDGE__=next')
    expect(handler).toContain('bridgeChanged(prev,next)')
    expect(handler).toContain('soc-bridge-change')
  })

  it('ekrani koji čitaju zaključavanje pretplaćeni su na promjenu', () => {
    // Bez pretplate bi kasni CONFIG promijenio SAMO globalni most: rezultat koji
    // je već na zaslonu ostao bi zaključan, a značke na Homeu bi i dalje nudile
    // nadogradnju korisniku koji je plaćen.
    expect(fns.get('useSocBridge')).toContain('soc-bridge-change')
    for (const name of ['Results', 'StatsScreen', 'Home']) {
      expect(fns.get(name), name).toContain('useSocBridge()')
    }
  })
})

/* ────────────────────────────────────────────────────────────────────────────
   DIO 3 — engine, pokrenut nastvarno

   Sloj koji razgovara s roditeljem (socRequestExam / socSubmitToParent / nacrt)
   ne dira React, pa se izrezuje iz isporučenog HTML-a i pokreće u `vm`-u. Time
   se protokol testira s OBIJE strane: roditelj gore, engine ovdje.
   ──────────────────────────────────────────────────────────────────────────── */

const ENGINE_START = code.indexOf('let EXAMS={};')
const ENGINE_END = code.indexOf('const EXAM_CONTEXT = {')

/**
 * @param {{parent?: boolean}} opts `parent:false` = standalone otvaranje HTML-a.
 */
function makeEngine({ parent = true } = {}) {
  const sent = []
  const store = new Map()
  const sandbox = {
    console,
    setTimeout, clearTimeout, setInterval, clearInterval,
    Promise, Date, Math, JSON, Object, Array, String, Number, Boolean, Error, Map, Set, RegExp,
    parseInt, parseFloat, isNaN,
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => { store.set(k, String(v)) },
      removeItem: (k) => { store.delete(k) },
    },
  }
  sandbox.window = sandbox
  sandbox.globalThis = sandbox
  // socHasParent() uspoređuje window.parent s window-om.
  sandbox.parent = parent ? { postMessage() {} } : sandbox
  sandbox.__SOC_TOPARENT__ = parent ? (m) => { sent.push(m); return true } : () => false

  vm.createContext(sandbox)
  vm.runInContext(
    code.slice(ENGINE_START, ENGINE_END)
      + '\n;globalThis.__ENGINE__={EXAMS,SOC_EXAM_META,SOC_TOTAL_MC,socRequestExam,socRequestAllExams,'
      + 'socOnExams,socOnExamError,socOnExamsDone,socSubmitToParent,socOnGrade,socOnGradeError,'
      + 'socDraftKey,socReadDraft,socWriteDraft,socClearDraft,socNewAttemptId,'
      + 'socSrsDueCount,today_ord};',
    sandbox,
  )
  return { api: sandbox.__ENGINE__, sent, store }
}

function envelopeFor(key, keys) {
  return {
    key,
    meta: { year: 2024, season: 'ljeto', label: 'Ljetni rok' },
    texts: {},
    qs: [{ id: '1', type: 'mc', q: 'P?', opts: ['A', 'B'] }],
    keys: keys || 'none',
  }
}

describe('engine — dohvat ispita preko roditelja', () => {
  it('traži ispit porukom i popuni EXAMS IN PLACE kad odgovor stigne', async () => {
    const { api, sent } = makeEngine()
    const pending = api.socRequestExam('2024_ljeto', 'exam')

    expect(sent).toHaveLength(1)
    expect(sent[0]).toEqual({ type: 'DISCERE_NEED_EXAM', key: '2024_ljeto', mode: 'exam' })

    api.socOnExams({ type: 'DISCERE_EXAMS', key: '2024_ljeto', exam: envelopeFor('2024_ljeto') })
    const exam = await pending
    expect(exam.qs).toHaveLength(1)
    // Referenca na EXAMS se nikad ne mijenja — ~20 mjesta drži Object.values(EXAMS).
    expect(api.EXAMS['2024_ljeto']).toBe(exam)
    expect(exam.keys).toBe('none')
  })

  it('isti ispit u istom modu ne traži se dvaput; drugi mod traži se ponovno', async () => {
    const { api, sent } = makeEngine()
    const first = api.socRequestExam('2024_ljeto', 'exam')
    api.socOnExams({ key: '2024_ljeto', exam: envelopeFor('2024_ljeto') })
    await first

    await api.socRequestExam('2024_ljeto', 'exam')
    expect(sent).toHaveLength(1)

    api.socRequestExam('2024_ljeto', 'practice')
    expect(sent).toHaveLength(2)
    expect(sent[1].mode).toBe('practice')
  })

  it('dva zahtjeva u istom tiku dijele jedan zahtjev prema roditelju', async () => {
    const { api, sent } = makeEngine()
    const a = api.socRequestExam('2024_ljeto', 'exam')
    const b = api.socRequestExam('2024_ljeto', 'exam')
    expect(sent).toHaveLength(1)
    api.socOnExams({ key: '2024_ljeto', exam: envelopeFor('2024_ljeto') })
    expect(await a).toBe(await b)
  })

  it('greška roditelja postaje odbijeni promise sa statusom', async () => {
    const { api } = makeEngine()
    const pending = api.socRequestExam('2024_ljeto', 'exam')
    api.socOnExamError({ key: '2024_ljeto', status: 401, error: 'Sesija je istekla.' })
    await expect(pending).rejects.toMatchObject({ status: 401, message: 'Sesija je istekla.' })

    // Nakon greške ponovni pokušaj mora biti moguć (čekanje je očišćeno).
    const retry = api.socRequestExam('2024_ljeto', 'exam')
    api.socOnExams({ key: '2024_ljeto', exam: envelopeFor('2024_ljeto') })
    await expect(retry).resolves.toBeTruthy()
  })

  it('bez roditelja (standalone) ne šalje ništa i odmah odustaje', async () => {
    const { api, sent } = makeEngine({ parent: false })
    await expect(api.socRequestExam('2024_ljeto', 'exam')).rejects.toThrow(/kroz aplikaciju/)
    await expect(api.socRequestAllExams()).rejects.toThrow(/kroz aplikaciju/)
    expect(sent).toHaveLength(0)
  })

  it('skupni dohvat: dio banke je dovoljan, ništa nije greška', async () => {
    const ok = makeEngine()
    const pendingOk = ok.api.socRequestAllExams()
    expect(ok.sent[0]).toEqual({ type: 'DISCERE_NEED_EXAM', key: '*', mode: 'exam' })
    ok.api.socOnExamsDone({ delivered: 31, total: 32 })
    await expect(pendingOk).resolves.toBe(31)

    const empty = makeEngine()
    const pendingEmpty = empty.api.socRequestAllExams()
    empty.api.socOnExamsDone({ delivered: 0, total: 32 })
    await expect(pendingEmpty).rejects.toThrow(/Dohvat ispita nije uspio/)
  })

  it('nepotpuna banka se pri sljedećem ulasku traži ponovno', async () => {
    const { api, sent } = makeEngine()
    const first = api.socRequestAllExams()
    api.socOnExamsDone({ delivered: 31, total: 32 })
    await first
    api.socRequestAllExams()
    expect(sent).toHaveLength(2)

    const full = makeEngine()
    const done = full.api.socRequestAllExams()
    full.api.socOnExamsDone({ delivered: 32, total: 32 })
    await done
    await full.api.socRequestAllExams()
    expect(full.sent).toHaveLength(1) // cijela banka je tu, drugi zahtjev nema smisla
  })
})

describe('engine — predaja preko roditelja', () => {
  it('šalje DISCERE_SUBMIT i čeka DISCERE_GRADE', async () => {
    const { api, sent } = makeEngine()
    const attemptId = api.socNewAttemptId()
    expect(attemptId).toMatch(/^[A-Za-z0-9_-]{8,64}$/) // ATTEMPT_ID_PATTERN u ruti

    const pending = api.socSubmitToParent({
      examKey: '2024_ljeto', answers: { 1: 'A' }, qTimes: { 1: 9 }, examMode: true, attemptId, durationSec: 60,
    })
    expect(sent[0]).toMatchObject({ type: 'DISCERE_SUBMIT', examKey: '2024_ljeto', examMode: true, attemptId, durationSec: 60 })

    api.socOnGrade({ attemptId, result: { pct: 50, grade: 3, cor: 1, total: 2, scores: { 1: true } } })
    await expect(pending).resolves.toMatchObject({ pct: 50, grade: 3 })
  })

  it('429 se vraća kao greška s odbrojavanjem, a ISTI attemptId se smije ponoviti', async () => {
    const { api, sent } = makeEngine()
    const attemptId = 'soc-attempt-0001'
    const first = api.socSubmitToParent({ examKey: '2024_ljeto', answers: {}, attemptId })
    api.socOnGradeError({ attemptId, status: 429, retryAfterSec: 42, error: 'Predaja je moguća svakih 60 s.' })
    await expect(first).rejects.toMatchObject({ status: 429, retryAfterSec: 42 })

    const second = api.socSubmitToParent({ examKey: '2024_ljeto', answers: {}, attemptId })
    expect(sent).toHaveLength(2)
    expect(sent[1].attemptId).toBe(attemptId)
    api.socOnGrade({ attemptId, result: { pct: 0, grade: 1, cor: 0, total: 2, scores: {} } })
    await expect(second).resolves.toBeTruthy()
  })

  it('dvostruki klik na Predaj šalje jedan zahtjev', async () => {
    const { api, sent } = makeEngine()
    const attemptId = 'soc-attempt-0002'
    const a = api.socSubmitToParent({ examKey: '2024_ljeto', answers: {}, attemptId })
    const b = api.socSubmitToParent({ examKey: '2024_ljeto', answers: {}, attemptId })
    expect(sent).toHaveLength(1)
    api.socOnGrade({ attemptId, result: { pct: 0, grade: 1, cor: 0, total: 1, scores: {} } })
    expect(await a).toBe(await b)
  })
})

describe('engine — nacrt ispita preživljava reload (ODLUKA 6)', () => {
  it('nosi odgovore, vremena, rok i tekuće pitanje', () => {
    const { api } = makeEngine()
    const key = api.socDraftKey('2024_ljeto', true, false)
    expect(key).toBe('disc_soc_exam_2024_ljeto_exam')

    const deadline = Date.now() + 5400_000
    api.socWriteDraft(key, { answers: { 1: 'A' }, qTimes: { 1: 12 }, cur: 7, deadline, attemptId: 'soc-attempt-0003' })

    const draft = api.socReadDraft(key)
    expect(draft.answers).toEqual({ 1: 'A' })
    expect(draft.qTimes).toEqual({ 1: 12 })
    expect(draft.cur).toBe(7)
    expect(draft.deadline).toBe(deadline)
    expect(draft.attemptId).toBe('soc-attempt-0003')

    api.socClearDraft(key)
    expect(api.socReadDraft(key)).toBeNull()
  })

  it('način rada je dio ključa — vježbanje i simulacija ne dijele odgovore', () => {
    const { api } = makeEngine()
    expect(api.socDraftKey('2024_ljeto', true, false)).not.toBe(api.socDraftKey('2024_ljeto', false, true))
    // Virtualne sesije se slažu iznova pri svakom ulasku → bez nacrta.
    expect(api.socDraftKey('virtual_1730000000000', false, true)).toBeNull()
    expect(api.socDraftKey('exam_errors_session', false, true)).toBeNull()
  })

  it('SVA ČETIRI načina rada imaju svoj nacrt — timer je dio ključa', () => {
    const { api } = makeEngine()
    // (examMode, practice, timedPractice) — točno onako kako ih Sim dobiva.
    const keys = [
      api.socDraftKey('2024_ljeto', true, false, false),   // simulacija
      api.socDraftKey('2024_ljeto', false, true, false),   // vježbanje
      api.socDraftKey('2024_ljeto', false, true, true),    // vježbanje s timerom
      api.socDraftKey('2024_ljeto', false, false, false),  // ispit bez timera
    ]
    expect(new Set(keys).size).toBe(4)
    // Vježbanje otkriva točan odgovor po pitanju: kad bi dijelilo nacrt s
    // timeranom vježbom, simulacija bi krenula s već viđenim rješenjima, a
    // netimirano vježbanje s tuđim rokom na odbrojavanju.
    expect(api.socDraftKey('2024_ljeto', false, true, true))
      .toBe('disc_soc_exam_2024_ljeto_practice_timed')
  })

  it('zastario nacrt se ne vraća', () => {
    const { api, store } = makeEngine()
    const key = api.socDraftKey('2024_ljeto', true, false)
    store.set(key, JSON.stringify({ at: Date.now() - 7 * 60 * 60 * 1000, answers: { 1: 'A' } }))
    expect(api.socReadDraft(key)).toBeNull()
  })

  it('pokvaren zapis ne ruši engine', () => {
    const { api, store } = makeEngine()
    const key = api.socDraftKey('2024_ljeto', true, false)
    store.set(key, '{ ovo nije json')
    expect(api.socReadDraft(key)).toBeNull()
    store.set(key, JSON.stringify({ at: Date.now(), answers: 'ne-objekt', cur: -3, deadline: 'x' }))
    const draft = api.socReadDraft(key)
    expect(draft.answers).toEqual({})
    expect(draft.cur).toBe(0)
    expect(draft.deadline).toBeNull()
  })

  it('otisak pokušaja ulazi u nacrt PRIJE nego ekran prijeđe na rezultat', () => {
    // Efekt koji nacrt inače piše izlazi na `done`. Kad bi attemptId nastao tek
    // nakon setDone(true), u nacrtu ga nikad ne bi bilo: nakon reloada bi ista
    // predaja dobila NOVI otisak, ruta je ne bi prepoznala (findPriorAttempt),
    // potrošila bi još jedno mjesto dnevnog budžeta i upisala drugi redak.
    const sim = fns.get('Sim')
    const submit = sim.slice(sim.indexOf('function submit(){'))
    const tail = submit.slice(submit.indexOf('socNewAttemptId()'))
    expect(tail).toContain('socWriteDraft(draftKey')
    expect(tail.indexOf('socWriteDraft(draftKey')).toBeLessThan(tail.indexOf('setDone(true)'))
    // Nacrt i dalje prestaje s konačnim rezultatom, ne prije njega.
    expect(fns.get('finalize')).toContain('socClearDraft(draftKey)')
  })

  it('otisak putuje s rezultatom sve do roditelja', () => {
    expect(fns.get('finalize')).toContain('attemptId:attemptIdRef.current')
    // DISCERE_RESULT je jedini put kojim otisak stigne do saveSimResult.
    const done = fns.get('onExamDone')
    expect(done).toContain('DISCERE_RESULT')
    expect(done).toContain('attemptId:')
  })
})

describe('engine — prazan EXAMS ne smije proizvesti lažno pozitivan ekran', () => {
  it('Home brojku dospjelih kartica uzima iz manifesta, ne iz banke', () => {
    const body = fns.get('Home')
    expect(body).toContain('socSrsDueCount(')
    // getSrsDueCards traži EXAMS; na Home ekranu banke nema, pa bi uvijek
    // vraćao praznu listu i kartica bi tvrdila „Sve naučeno za danas!“.
    expect(body).not.toContain('getSrsDueCards(')
  })

  it('AnalyticsPanel razlikuje „nema grešaka“ od „nemam banku“', () => {
    const body = fns.get('AnalyticsPanel')
    expect(body).toContain('socBankLoaded()')
    // Navodnik je dio uzorka: tražimo string koji se DOISTA renderira, a ne
    // spomen iste rečenice u komentaru iznad grane.
    expect(body.indexOf('!bankLoaded')).toBeLessThan(body.indexOf('"Nema pogrešnih odgovora'))
    // Pokrivenost gradiva bi bez banke svaku temu prikazala kao 0/N.
    expect(body).toContain('Pokrivenost gradiva')
  })

  it('prečac na slabu temu predaje recept, a ne popis složen iz praznog EXAMS-a', () => {
    const body = fns.get('AnalyticsPanel')
    expect(body).toContain('window._virtualExamBuilder=')
    expect(body).not.toContain('window._virtualExam=')

    const filter = fns.get('goFilter')
    expect(filter).toContain('_virtualExamBuilder')
    expect(filter).toContain('withAllExams(')
    // Recept se izvršava TEK nakon dohvata banke, inače Sim dobije qs:[] i
    // sruši se na `exam.key+"_"+q.id`.
    expect(filter.indexOf('_virtualExamBuilder')).toBeLessThan(filter.indexOf('withAllExams('))
    expect(filter).toContain('vex.qs.length')
  })
})

describe('engine — brojač SRS kartica na Home ekranu ne treba banku', () => {
  it('prazan SRS zapis znači da SVE mc kartice čekaju, ne nijedna', () => {
    const { api } = makeEngine()
    // EXAMS je prazan (banka stiže s poslužitelja) — brojka svejedno mora biti
    // istinita, inače Home tvrdi „Sve naučeno za danas!“ korisniku koji nije
    // vidio nijednu karticu.
    expect(Object.keys(api.EXAMS)).toHaveLength(0)
    const st = api.socSrsDueCount({})
    expect(st.total).toBe(api.SOC_TOTAL_MC)
    expect(st.due).toBe(api.SOC_TOTAL_MC)
    expect(st.seen).toBe(0)
  })

  it('dospjele i nedospjele kartice se razlikuju po `due`', () => {
    const { api } = makeEngine()
    const tod = api.today_ord()
    const st = api.socSrsDueCount({
      '2024_ljeto__1': { due: tod - 3 },   // dospjela
      '2024_ljeto__2': { due: tod },       // dospjela (danas)
      '2024_ljeto__3': { due: tod + 9 },   // još ne
      '2024_ljeto__4': { due: 'pokvareno' }, // neispravan zapis → radije pokaži
    })
    expect(st.seen).toBe(4)
    expect(st.due).toBe(3 + (api.SOC_TOTAL_MC - 4))
  })

  it('„sve naučeno“ je moguće tek kad su sve kartice viđene i nijedna ne dospijeva', () => {
    const { api } = makeEngine()
    const tod = api.today_ord()
    const srs = {}
    for (let i = 0; i < api.SOC_TOTAL_MC; i += 1) srs['k' + i] = { due: tod + 5 }
    expect(api.socSrsDueCount(srs).due).toBe(0)
  })
})
