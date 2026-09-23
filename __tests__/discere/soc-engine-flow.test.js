import { readFileSync } from 'node:fs'
import path from 'node:path'
import { afterEach, beforeAll, describe, expect, it } from 'vitest'
import { Window } from 'happy-dom'

/**
 * ADR-001, Faza 2 — ENGINE SOCIOLOGIJE, ODIGRAN OD POČETKA DO KRAJA.
 *
 * public/sim/sociologija.html je 7100 linija jednog inline <script>-a bez build
 * koraka i, do sada, bez ijednog testa. Zahvat iz Faze 2 dirao je upravo ono što
 * se najteže vidi statički: EXAMS je prazan dok roditelj ne pošalje ispit, ocjena
 * dolazi s poslužitelja, a odgovori i rok moraju preživjeti osvježavanje.
 *
 * Zato se ovdje engine DOISTA POKREĆE: React i ReactDOM iz public/sim/vendor/
 * učitaju se u happy-dom prozor, inline skripta se izvrši, a test odigra ulogu
 * roditelja (SociologijaClient.jsx) na postMessage mostu. Provjerava se ono što
 * korisnik vidi — ekran, gumbi, mrežica — a ne oblik izvornog koda.
 *
 * `window.fetch` je namjerno mina: engine po ODLUCI 7 ne smije zvati mrežu, pa
 * bi svaki poziv srušio test.
 */

const ROOT = path.resolve(__dirname, '..', '..')
const EXAM_KEY = '2024_ljeto'

const html = readFileSync(path.join(ROOT, 'public', 'sim', 'sociologija.html'), 'utf8')
const scriptOpen = html.lastIndexOf('<script>')
const scriptStart = scriptOpen + '<script>'.length
const inline = html.slice(scriptStart, html.indexOf('</script>', scriptStart))

const react = readFileSync(path.join(ROOT, 'public', 'sim', 'vendor', 'react.production.min.js'), 'utf8')
const reactDom = readFileSync(path.join(ROOT, 'public', 'sim', 'vendor', 'react-dom.production.min.js'), 'utf8')

const publicExam = JSON.parse(readFileSync(path.join(ROOT, 'content', 'soc', 'exams', `${EXAM_KEY}.json`), 'utf8'))
const secrets = JSON.parse(readFileSync(path.join(ROOT, 'lib', 'data', 'soc', 'secrets', `${EXAM_KEY}.json`), 'utf8'))

/** Envelope rute GET /api/sim/soc/exam/<key>, sa ili bez ključeva. */
function envelope({ withKeys }) {
  const qs = publicExam.qs.map((q) => (withKeys && secrets[q.id] ? { ...q, ...secrets[q.id] } : { ...q }))
  const merged = qs.filter((q) => q.sol).length
  return {
    key: publicExam.key,
    meta: publicExam.meta,
    texts: publicExam.texts,
    qs,
    keys: merged === 0 ? 'none' : merged >= qs.length ? 'full' : 'partial',
  }
}

const AUTO_QS = publicExam.qs.filter((q) => q.type !== 'sa' && q.type !== 'es')

/** `scores` mapa kakvu vraća ocjenjivačka ruta: `correctIds` točni, ostali netočni. */
function serverScores(correctIds) {
  const wanted = new Set(correctIds)
  const scores = {}
  for (const q of publicExam.qs) {
    scores[q.id] = (q.type === 'sa' || q.type === 'es') ? null : wanted.has(q.id)
  }
  return scores
}

const openWindows = []

/**
 * Pokreni engine u svježem prozoru.
 * @param {{embedded?: boolean, storage?: Record<string,string>}} opts
 */
function boot({ embedded = true, storage = null } = {}) {
  const win = new Window({ url: 'http://localhost/sim/sociologija.html' })
  openWindows.push(win)
  win.document.body.innerHTML = '<div id="root"></div>'

  const sent = []
  const parent = { postMessage: (m) => sent.push(m) }
  if (embedded) Object.defineProperty(win, 'parent', { value: parent, configurable: true })

  // ODLUKA 7: engine nema pravo na mrežu. Ovo je mina, ne stub.
  win.fetch = () => { throw new Error('Engine je pozvao fetch() — ODLUKA 7 je prekršena.') }

  win.eval(react)
  win.eval(reactDom)
  win.eval('window.confetti=function(){};')
  if (storage) for (const [k, v] of Object.entries(storage)) win.localStorage.setItem(k, v)
  win.eval(inline)

  const doc = win.document
  return {
    win,
    doc,
    sent,
    /** Poruka roditelja u iframe. */
    toFrame(data) {
      const ev = new win.Event('message')
      Object.defineProperty(ev, 'data', { value: data })
      Object.defineProperty(ev, 'source', { value: parent })
      win.dispatchEvent(ev)
    },
    text: () => doc.body.textContent.replace(/\s+/g, ' '),
    find: (sel, needle) => [...doc.querySelectorAll(sel)].find((el) => (el.textContent || '').includes(needle)),
    all: (sel) => [...doc.querySelectorAll(sel)],
    click(el, what) {
      if (!el) throw new Error(`nema elementa za klik: ${what}`)
      el.dispatchEvent(new win.Event('click', { bubbles: true }))
    },
    of: (type) => sent.filter((m) => m.type === type),
  }
}

const tick = (ms = 30) => new Promise((r) => setTimeout(r, ms))

/** Handshake roditelja, pa Home. */
async function start(ctx, config) {
  ctx.toFrame({ type: 'DISCERE_HYDRATE', state: {} })
  ctx.toFrame({ type: 'DISCERE_CONFIG', freeExam: true, ...config })
  ctx.toFrame({ type: 'DISCERE_BOOT' })
  await tick()
}

/** Home → klik na ispit 2024/ljeto → ekran čekanja. */
async function openExamRow(ctx) {
  ctx.click(ctx.find('.year-group-header', '2024'), 'godina 2024')
  await tick()
  const group = ctx.all('.year-group').find((g) => (g.textContent || '').includes('2024. godina'))
  const row = group && [...group.querySelectorAll('.exrow-sub')].find((el) => (el.textContent || '').includes('Ljetni'))
  ctx.click(row, 'red ispita 2024 ljeto')
  await tick()
}

async function submitExam(ctx) {
  ctx.click(ctx.find('button', 'Predaj'), 'gumb Predaj')
  await tick()
  ctx.click(ctx.find('.mlbox button', 'Predaj ispit'), 'potvrda predaje')
  await tick()
}

beforeAll(() => {
  // Ako se ovo sruši, nema smisla ni pokretati ostalo.
  expect(inline.length).toBeGreaterThan(100_000)
  expect(publicExam.qs.length).toBeGreaterThan(10)
})

afterEach(() => {
  // Engine u iframeu ostavi safety-timer od 6 s; bez zatvaranja prozora bi se
  // gomilali kroz cijeli suite.
  while (openWindows.length) {
    const win = openWindows.pop()
    try { win.close() } catch { /* starija verzija happy-doma */ }
  }
})

describe('soc engine — FREE, ispitni mod bez ključeva', () => {
  it('odigra cijeli put: Home → ispit → predaja → ocjena s poslužitelja', async () => {
    const ctx = boot()
    await start(ctx, { tier: 'free', isPro: false, allowed: ['2025_ljeto', '2025_jesen'], lockResults: true })

    // Home: popis ispita dolazi iz META-e, pa ne pokreće NIJEDAN dohvat (ODLUKA 4).
    expect(ctx.text()).toContain('Dostupni ispiti')
    expect(ctx.all('.year-group')).toHaveLength(16)
    expect(ctx.of('DISCERE_NEED_EXAM')).toHaveLength(0)

    await openExamRow(ctx)
    const need = ctx.of('DISCERE_NEED_EXAM')
    expect(need).toHaveLength(1)
    expect(need[0]).toMatchObject({ key: EXAM_KEY, mode: 'exam' })
    // Timer ne smije krenuti prije pitanja — Sim se još nije ni montirao.
    expect(ctx.text()).toContain('Pitanja dolaze s poslužitelja')
    expect(ctx.doc.querySelector('.opt')).toBeNull()

    ctx.toFrame({ type: 'DISCERE_EXAMS', key: EXAM_KEY, exam: envelope({ withKeys: false }) })
    await tick()
    expect(ctx.text()).toContain('Odaberi na')
    expect(ctx.text()).toContain(`${publicExam.qs.length} pitanja`)

    ctx.click(ctx.find('.mode-card', 'Simulacija mature'), 'simulacija')
    await tick()
    // Isti ispit, isti mod → keš; drugi dohvat nema smisla.
    expect(ctx.of('DISCERE_NEED_EXAM')).toHaveLength(1)
    expect(ctx.text()).toContain(publicExam.qs[0].q.slice(0, 40))

    // Bez ključa nema ni „Provjeri“ ni „Pokaži odgovor“ (ODLUKA 1).
    expect(ctx.find('button', 'Provjeri')).toBeUndefined()
    expect(ctx.doc.querySelector('.ah-toggle-btn')).toBeNull()

    ctx.click(ctx.doc.querySelector('.opt'), 'prva opcija')
    await tick()
    expect(ctx.doc.querySelector('.opt.sel')).toBeTruthy()

    // ODLUKA 6: nacrt nosi odgovore, vremena, rok i tekuće pitanje.
    const draftKey = `disc_soc_exam_${EXAM_KEY}_exam`
    const draft = JSON.parse(ctx.win.localStorage.getItem(draftKey))
    expect(Object.keys(draft.answers)).toHaveLength(1)
    expect(Number.isFinite(draft.deadline)).toBe(true)
    expect(draft).toHaveProperty('qTimes')
    expect(draft).toHaveProperty('cur')

    await submitExam(ctx)
    const submits = ctx.of('DISCERE_SUBMIT')
    expect(submits).toHaveLength(1)
    expect(submits[0].examKey).toBe(EXAM_KEY)
    expect(submits[0].examMode).toBe(true)
    expect(submits[0].attemptId).toMatch(/^[A-Za-z0-9_-]{8,64}$/)
    expect(Object.keys(submits[0].answers)).toHaveLength(1)
    // Bez ključeva rezultat može dati samo poslužitelj — ekran to i kaže.
    expect(ctx.text()).toContain('Ocjenjujemo')

    const correctId = publicExam.qs[0].id
    const scores = serverScores([correctId])
    const pct = Math.round((1 / AUTO_QS.length) * 100)
    ctx.toFrame({
      type: 'DISCERE_GRADE',
      attemptId: submits[0].attemptId,
      result: { pct, grade: 1, cor: 1, total: AUTO_QS.length, bodovi: null, xpGain: 5, scores },
    })
    await tick()

    expect(ctx.text()).toContain(`${pct}%`)
    // ODLUKA 1: free SMIJE vidjeti ✓/✗ po pitanju…
    expect(ctx.all('.qgrid .qdot')).toHaveLength(publicExam.qs.length)
    expect(ctx.all('.qdot.cok')).toHaveLength(1)
    expect(ctx.all('.qdot.cbad')).toHaveLength(AUTO_QS.length - 1)
    // …ali nikad točan odgovor ni obrazloženje.
    expect(ctx.text()).toContain('Otklju')
    expect(ctx.text()).not.toContain('✓ Točno')
    for (const q of publicExam.qs) {
      const sol = secrets[q.id]?.sol
      if (sol?.cl && q.opts?.[['A', 'B', 'C', 'D', 'E', 'F'].indexOf(sol.cl)]) {
        expect(ctx.doc.body.innerHTML).not.toContain(secrets[q.id].exp ?? ' nepostojeće')
      }
    }

    // Konačan rezultat: nacrt se briše, povijest se piše jednom, i to serverskim brojkama.
    expect(ctx.win.localStorage.getItem(draftKey)).toBeNull()
    const results = ctx.of('DISCERE_RESULT')
    expect(results).toHaveLength(1)
    expect(results[0].result.pct).toBe(pct)
    // Ruta je već upisala redak — preglednik ga ne smije upisati drugi put.
    expect(results[0].result.serverSaved).toBe(true)
  })
})

describe('soc engine — ODLUKA 4: free nikad ne traži cijelu banku', () => {
  it('svaki zaključani ekran vodi na paywall, a ne na dohvat', async () => {
    const ctx = boot()
    await start(ctx, { tier: 'free', isPro: false, allowed: ['2025_ljeto', '2025_jesen'], lockResults: true })

    // Kartice na Home ekranu koje bi za plaćenog korisnika povukle svih 32 ispita.
    const gated = ['Vježbaj po temi', 'Greške — ponavljanje', 'Pregled ispita', 'Bookmarci', 'Flashcards', 'Dnevni izazov', 'Ponavljanje']
    for (const label of gated) {
      const card = ctx.all('.mc').find((el) => (el.querySelector('h3')?.textContent || '') === label)
      expect(card, label).toBeTruthy()
      ctx.click(card, label)
      await tick(5)
    }

    // socFeatureGate stoji PRIJE zahtjeva: nijedan dohvat, samo poziv na Standard.
    expect(ctx.of('DISCERE_NEED_EXAM')).toHaveLength(0)
    expect(ctx.of('DISCERE_UPGRADE').length).toBeGreaterThanOrEqual(gated.length)
    // I dalje smo na Home ekranu — nijedan od tih ekrana se nije otvorio.
    expect(ctx.text()).toContain('Dostupni ispiti')

    // Vježbanje ispita koji NIJE u free demo popisu isto ne dohvaća ništa.
    ctx.click(ctx.all('.mc').find((el) => (el.querySelector('h3')?.textContent || '') === 'Vježbanje'), 'vježbanje')
    await tick()
    expect(ctx.of('DISCERE_NEED_EXAM')).toHaveLength(0)
  })
})

describe('soc engine — PLAĆENI tier, vježbanje s ključevima', () => {
  it('ocjenjuje lokalno za prikaz, ali rezultat s poslužitelja je izvor istine', async () => {
    const ctx = boot()
    await start(ctx, { tier: 'pro', isPro: true, allowed: null, lockResults: false })

    await openExamRow(ctx)
    ctx.toFrame({ type: 'DISCERE_EXAMS', key: EXAM_KEY, exam: envelope({ withKeys: true }) })
    await tick()

    ctx.click(ctx.find('.mode-card', 'Vjež'), 'vježbanje')
    await tick()
    // Način rada je dio ključa keša, pa vježbanje traži SVOJ payload.
    const needs = ctx.of('DISCERE_NEED_EXAM')
    expect(needs).toHaveLength(2)
    expect(needs[1].mode).toBe('practice')
    ctx.toFrame({ type: 'DISCERE_EXAMS', key: EXAM_KEY, exam: envelope({ withKeys: true }) })
    await tick()

    const first = publicExam.qs[0]
    const correctIdx = ['A', 'B', 'C', 'D', 'E', 'F'].indexOf(secrets[first.id].sol.cl)
    ctx.click(ctx.all('.opt')[correctIdx], 'točan odgovor')
    await tick()
    // S ključem „Provjeri“ postoji i doista provjerava.
    expect(ctx.find('button', 'Provjeri')).toBeTruthy()
    ctx.click(ctx.find('button', 'Provjeri'), 'provjeri')
    await tick()
    expect(ctx.text()).toContain('Točno!')

    await submitExam(ctx)
    const submits = ctx.of('DISCERE_SUBMIT')
    // ADR-001: predaja ide na poslužitelj i kad klijent ima ključeve.
    expect(submits).toHaveLength(1)
    expect(submits[0].examMode).toBe(false)
    // …a lokalna ocjena je odmah na ekranu, bez čekanja.
    expect(ctx.text()).not.toContain('Ocjenjujemo')
    expect(ctx.text()).toMatch(/\d+%/)

    ctx.toFrame({
      type: 'DISCERE_GRADE',
      attemptId: submits[0].attemptId,
      result: {
        pct: 100, grade: 5, cor: AUTO_QS.length, total: AUTO_QS.length,
        bodovi: null, xpGain: 130, scores: serverScores(AUTO_QS.map((q) => q.id)),
      },
    })
    await tick()

    // Poslužitelj pregazi lokalni prikaz, a povijest se piše točno jednom.
    expect(ctx.text()).toContain('100%')
    expect(ctx.text()).toContain('Rezultati po tipu pitanja') // paid vidi razradu
    const results = ctx.of('DISCERE_RESULT')
    expect(results).toHaveLength(1)
    expect(results[0].result.pct).toBe(100)
    expect(results[0].result.cor).toBe(AUTO_QS.length)
    expect(results[0].result.serverSaved).toBe(true)
  })
})

describe('soc engine — nacrt preživljava osvježavanje (ODLUKA 6)', () => {
  it('nastavlja na spremljenom pitanju i s preostalim vremenom, ne s punim timerom', async () => {
    const draftKey = `disc_soc_exam_${EXAM_KEY}_exam`
    const ctx = boot({
      storage: {
        [draftKey]: JSON.stringify({
          at: Date.now(),
          answers: { [publicExam.qs[0].id]: 'B' },
          qTimes: { [publicExam.qs[0].id]: 17 },
          cur: 2,
          deadline: Date.now() + 42_000,
          attemptId: 'soc-attempt-0009',
        }),
      },
    })
    await start(ctx, { tier: 'free', isPro: false, allowed: ['2025_ljeto'], lockResults: true })
    await openExamRow(ctx)
    ctx.toFrame({ type: 'DISCERE_EXAMS', key: EXAM_KEY, exam: envelope({ withKeys: false }) })
    await tick()
    ctx.click(ctx.find('.mode-card', 'Simulacija mature'), 'simulacija')
    await tick()

    expect(ctx.text()).toContain(publicExam.qs[2].q.slice(0, 40))
    // 90 minuta bi značilo da je rok izgubljen i ispit se produljuje unedogled.
    expect(ctx.text()).not.toContain('90:00')
    expect(ctx.text()).toMatch(/0[01]:\d\d/)
    // Isti attemptId: ponovljena predaja ruti je ISTA predaja, ne nova.
    expect(JSON.parse(ctx.win.localStorage.getItem(draftKey)).attemptId).toBe('soc-attempt-0009')
  })

  it('istekao rok predaje ispit sam, a odbijenu predaju nudi ponoviti', async () => {
    const draftKey = `disc_soc_exam_${EXAM_KEY}_exam`
    const ctx = boot({
      storage: {
        [draftKey]: JSON.stringify({
          at: Date.now() - 1000,
          answers: { [publicExam.qs[0].id]: 'B' },
          qTimes: {},
          cur: 0,
          deadline: Date.now() - 5000,
          attemptId: 'soc-attempt-0010',
        }),
      },
    })
    await start(ctx, { tier: 'free', isPro: false, allowed: ['2025_ljeto'], lockResults: true })
    await openExamRow(ctx)
    ctx.toFrame({ type: 'DISCERE_EXAMS', key: EXAM_KEY, exam: envelope({ withKeys: false }) })
    await tick()
    ctx.click(ctx.find('.mode-card', 'Simulacija mature'), 'simulacija')
    await tick()
    await tick()

    const submits = ctx.of('DISCERE_SUBMIT')
    expect(submits).toHaveLength(1)
    expect(submits[0].attemptId).toBe('soc-attempt-0010')
    expect(ctx.text()).toContain('Ocjenjujemo')

    ctx.toFrame({
      type: 'DISCERE_GRADE_ERROR',
      attemptId: submits[0].attemptId,
      status: 429,
      retryAfterSec: 3,
      error: 'Predaja je moguća svakih 60 s.',
    })
    await tick()

    expect(ctx.text()).toContain('Predaja je moguća svakih 60 s.')
    expect(ctx.text()).toContain('3 s')
    expect(ctx.find('button', 'Pokušaj ponovno')).toBeTruthy()
    // Bez ključeva rezultat ne postoji, pa se povijest NE smije napisati…
    expect(ctx.of('DISCERE_RESULT')).toHaveLength(0)
    // …a odgovori moraju ostati sačuvani za ponovni pokušaj.
    expect(ctx.win.localStorage.getItem(draftKey)).toBeTruthy()
  })
})

describe('soc engine — standalone otvaranje je fail-closed', () => {
  it('bez roditelja nema ispita, ali ni praznog ekrana', async () => {
    const ctx = boot({ embedded: false })
    await tick(250) // standalone boot ide preko setTimeout(boot, 150)

    expect(ctx.text()).toContain('Dostupni ispiti')
    expect(ctx.text()).toContain('otvara kroz aplikaciju')

    await openExamRow(ctx)
    await tick()
    // Nema kome poslati zahtjev → jasna poruka, a ne vječno „Učitavamo…“.
    expect(ctx.text()).toContain('kroz aplikaciju')
    expect(ctx.doc.querySelector('.opt')).toBeNull()
  })
})
