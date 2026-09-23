// scripts/qa/eng-secrets-visual.mjs
// Vizualni QA serverske isporuke ključeva na engleskom (ADR-001, Faza 1).
//
// Ovo NIJE ponavljanje discere-free-exam-visual.mjs. Tamo se provjerava što se
// RENDERIRA; ovdje se provjerava što uopće STIGNE U PREGLEDNIK. Zato prolaz
// presreće svaki mrežni odgovor i za free tvrdi da nijedno tijelo ne nosi
// `sol`/`exp`/`why`/`steps` — pravilo 2 iz docs/ADR-001-ispitni-podaci.md.
//
// BEZ DEV_BYPASS_EMAIL: poanta je da free korisnik prolazi sam, bez owner
// bypassa u proxy.js.
//
// Što se provjerava (redom kojim i teče):
//   1. ispitni mod, free: nijedan JSON ne nosi ključ; GET ispita ima keys:"none"
//      (standard: keys:"full");
//   2. odgovori na 2-3 pitanja pa predaja;
//   3. rezultati — free: ocjena/postotak i točno/netočno, bez ijednog teksta
//      obrazloženja ili točnog odgovora u outerHTML-u; standard: puni pregled;
//   4. free vježbanje: prvih FREE_LIMIT pitanja ima „Provjeri“ i povratnu
//      informaciju, zatim paywall;
//   5. free: Dnevni izazov / Virtualni ispit / Vježbaj po temi → zaključano BEZ
//      ijednog mrežnog dohvata ispita;
//   6. druga predaja istog ispita unutar 60 s → 429 s razumljivom porukom i
//      odbrojavanjem;
//   7. osvježavanje usred ispita → odgovori sačuvani.
//
// Priprema (mock se podiže sam, dev server ne):
//   NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321 \
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=<JWT-oblik string> \
//   SUPABASE_SERVICE_ROLE_KEY=<JWT-oblik string> \
//   npx next dev --webpack -p 3012
//
//   node scripts/qa/eng-secrets-visual.mjs --base http://localhost:3012 --out ./.qa-shots
//
// Izlaz: PNG po koraku u --out i JSON sažetak na stdout (exit 1 ako nešto padne).

import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { startMockSupabase, makeSession, mockState, userForTier, MOCK_PORT, MOCK_URL } from './hrv-sim-mock-supabase.mjs'

const args = process.argv.slice(2)
const argOf = (name, dflt) => {
  const i = args.indexOf('--' + name)
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const BASE = argOf('base', 'http://localhost:3012')
const OUT = path.resolve(argOf('out', './.qa-shots'))
const AUTH_COOKIE = `sb-${new URL(MOCK_URL).hostname.split('.')[0]}-auth-token`

const TARGET = { key: '2024_ljeto', razina: 'osnovna', search: '2024', rowText: 'Ljetni' }

/** Iz components/discere/paywall/paywallCopy.js — koliko pitanja free vidi u vježbanju. */
const FREE_LIMIT = 3

/** Polja koja po ADR-001 nikad ne smiju u klijentski payload za free korisnika. */
const SECRET_FIELDS = ['sol', 'exp', 'why', 'steps']

const VIEWPORTS = {
  '1280x800': { width: 1280, height: 800 },
  '400x860': { width: 400, height: 860 },
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ── Referentni tekstovi iz PODATAKA ───────────────────────────────────────────
// Obrazloženje i točan odgovor 1. pitanja ciljanog ispita: to su tekstovi koji
// za free korisnika ne smiju postojati nigdje u outerHTML-u ni u JS chunkovima.

function readProbes(examKey) {
  const out = { exp: null, sol: null }
  try {
    const secrets = JSON.parse(fs.readFileSync(path.join(ROOT, 'lib/data/eng/secrets', `${examKey}.json`), 'utf8'))
    for (const entry of Object.values(secrets)) {
      if (!out.exp && typeof entry?.exp === 'string' && entry.exp.length >= 30) out.exp = entry.exp.slice(0, 80)
      if (!out.sol) {
        const ans = entry?.sol?.ans
        const text = Array.isArray(ans) ? ans[0] : ans
        if (typeof text === 'string' && text.length >= 6) out.sol = text
      }
      if (out.exp && out.sol) break
    }
  } catch (err) {
    console.error('[qa] tajni store nije čitljiv:', err?.message || err)
  }
  return out
}

// ── Presretanje mreže ─────────────────────────────────────────────────────────

/** Rekurzivno traži zabranjeno polje u razmotanom JSON-u; vraća putanju ili null. */
function findSecretKey(value, trail = '', depth = 0) {
  if (!value || typeof value !== 'object' || depth > 8) return null
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length && i < 500; i++) {
      const hit = findSecretKey(value[i], `${trail}[${i}]`, depth + 1)
      if (hit) return hit
    }
    return null
  }
  for (const key of Object.keys(value)) {
    if (SECRET_FIELDS.includes(key)) return `${trail}.${key}`
    const hit = findSecretKey(value[key], `${trail}.${key}`, depth + 1)
    if (hit) return hit
  }
  return null
}

/**
 * Svaki odgovor koji stigne u karticu prolazi ovdje. JSON se razmotava i
 * pretražuje po KLJUČU (ne po tekstu), a JS chunkovi po doslovnom obrazloženju
 * iz tajnog storea — tako se hvata i curenje kroz webpack chunk, ne samo kroz API.
 */
function attachNetwork(page, log, probes) {
  page.on('response', (res) => {
    const url = res.url()
    const type = (res.headers()['content-type'] || '').toLowerCase()
    const sameOrigin = url.startsWith(BASE)
    const isJson = type.includes('json')
    const isJs = type.includes('javascript')
    if (!sameOrigin || (!isJson && !isJs)) return
    res
      .text()
      .then((text) => {
        log.seen.push({ url: url.slice(BASE.length) || '/', type: isJson ? 'json' : 'js', bytes: text.length })
        if (isJson) {
          let parsed = null
          try { parsed = JSON.parse(text) } catch { return }
          if (url.includes('/api/sim/eng/exam/')) {
            const qs = Array.isArray(parsed?.qs) ? parsed.qs : []
            log.examFetches.push({
              url: url.slice(BASE.length),
              keys: parsed?.keys ?? null,
              qs: qs.length,
              withSol: qs.filter((q) => q && q.sol).length,
              withExp: qs.filter((q) => q && q.exp).length,
            })
          }
          if (url.includes('/api/sim/eng/grade')) {
            log.gradeResponses.push({ status: res.status(), body: parsed })
          }
          const hit = findSecretKey(parsed)
          if (hit) log.jsonLeaks.push({ url: url.slice(BASE.length), at: hit })
        } else if (probes.exp && text.includes(probes.exp)) {
          log.chunkLeaks.push(url.slice(BASE.length))
        }
      })
      .catch(() => {})
  })
}

function attachLogs(page, log) {
  page.on('console', (msg) => {
    const t = msg.type()
    if (t === 'error' || t === 'warning') log.console.push(`[${t}] ${msg.text()}`)
  })
  page.on('pageerror', (err) => log.pageErrors.push(String(err?.message || err)))
  page.on('response', (res) => { if (res.status() >= 400) log.httpErrors.push(`${res.status()} ${res.url().replace(BASE, '')}`) })
  // Ispitni mod traži potvrdu prije predaje i prije prelaska na sljedeću cjelinu.
  page.on('dialog', (d) => d.accept().catch(() => {}))
}

// ── Preglednik ────────────────────────────────────────────────────────────────

async function seedSession(context, tier) {
  const raw = JSON.stringify(makeSession(tier))
  await context.addInitScript(
    ({ cookieName, raw }) => {
      try { localStorage.setItem(cookieName, raw) } catch {}
      document.cookie = `${cookieName}=${encodeURIComponent(raw)}; path=/; max-age=21600; SameSite=Lax`
    },
    { cookieName: AUTH_COOKIE, raw },
  )
  await context.addCookies([{ name: AUTH_COOKIE, value: encodeURIComponent(raw), url: BASE }])
}

async function installGuards(context, log) {
  await context.route('**/*.supabase.co/**', (route) => {
    log.leaks.push(route.request().url())
    return route.abort()
  })
  await context.route('**/api/discere/percentile**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ percentile: 72 }) }))
  // Ista dva poznata kvara koja ruše i hrv/discere QA prolaz: njihov uvozni lanac
  // u dev modu zatruje build cijele rute, pa jedan poznat kvar ne obara QA.
  await context.route('**/api/game/discere-attempts**', (route) => {
    log.stubbed.push('discere-attempts')
    return route.fulfill({ status: 204, body: '' })
  })
  await context.route('**/api/ai-simulator**', (route) =>
    route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"qa"}' }))
}

async function shot(page, tier, step, vp, log, opts = {}) {
  fs.mkdirSync(OUT, { recursive: true })
  const name = `eng-${tier}-${step}-${vp}.png`
  await page.screenshot({ path: path.join(OUT, name), fullPage: !!opts.full })
  log.shots.push(name)
}

// ── Koraci ────────────────────────────────────────────────────────────────────

async function openHome(page) {
  await page.goto(BASE + '/discere/engleski/simulator', { waitUntil: 'domcontentloaded', timeout: 180000 })
  await page.waitForSelector('.home-search-input', { timeout: 180000 })
  await sleep(400)
}

async function openModeSelect(page) {
  await page.locator(`.home-razina-tab[data-r="${TARGET.razina}"]`).click()
  await page.locator('.home-search-input').fill(TARGET.search)
  await sleep(700)
  const row = page.locator('.exrow-sub').filter({ hasText: TARGET.rowText }).first()
  await row.scrollIntoViewIfNeeded()
  await row.click()
  await page.waitForSelector('.mode-card.exam', { timeout: 90000 })
  await sleep(300)
}

async function startExam(page) {
  await page.locator('.mode-card.exam').click()
  await page.waitForSelector('.card', { timeout: 120000 })
  await sleep(700)
}

/** Indeks odabrane opcije tekućeg pitanja (-1 kad nijedna). */
function selectedOption(page) {
  return page.evaluate(() => {
    const opts = [...document.querySelectorAll('.card .opts [role="radio"]')]
    return opts.findIndex((o) => o.getAttribute('aria-checked') === 'true')
  })
}

async function nextQuestion(page) {
  const next = page.getByRole('button', { name: 'Sljedeće →' }).first()
  if (!(await next.count()) || !(await next.isEnabled().catch(() => false))) return false
  await next.click({ timeout: 8000 }).catch(() => {})
  await sleep(350)
  return true
}

/**
 * Pomakni se do prvog pitanja s ponuđenim odgovorima i odaberi drugi.
 * Cjelina ne počinje nužno pitanjem s opcijama (2024_ljeto kreće povezivanjem),
 * pa provjera osvježavanja ne smije pretpostaviti da je prvo pitanje mc.
 */
async function pickRadioAnswer(page, maxSteps = 12) {
  for (let steps = 0; steps <= maxSteps; steps++) {
    if ((await page.locator('.card .opts [role="radio"]').count()) > 1) {
      await page.locator('.card .opts [role="radio"]').nth(1).click({ timeout: 8000 }).catch(() => {})
      await sleep(400)
      return { steps, picked: await selectedOption(page) }
    }
    if (!(await nextQuestion(page))) break
  }
  return { steps: -1, picked: -1 }
}

/** Vrati se na isto pitanje brojem koraka (nakon osvježavanja `cur` kreće od 0). */
async function gotoQuestion(page, steps) {
  for (let i = 0; i < steps; i++) {
    if (!(await nextQuestion(page))) return false
  }
  return true
}

async function answerAndAdvance(page, rounds) {
  for (let i = 0; i < rounds; i++) {
    const opts = page.locator('.card .opts [role="radio"]')
    const n = await opts.count().catch(() => 0)
    if (n) await opts.nth(i % n).click({ timeout: 8000 }).catch(() => {})
    await sleep(250)
    const next = page.getByRole('button', { name: 'Sljedeće →' }).first()
    if (!(await next.count()) || !(await next.isEnabled().catch(() => false))) break
    await next.click({ timeout: 8000 }).catch(() => {})
    await sleep(350)
  }
}

/** Kroz preostale cjeline do gumba za predaju. */
async function walkToSubmit(page) {
  for (let i = 0; i < 8; i++) {
    const block = page.getByRole('button', { name: 'Završi dio →' })
    if (!(await block.count())) break
    await block.first().click()
    await sleep(800)
  }
}

async function submitExam(page) {
  const submit = page.getByRole('button', { name: 'Predaj ispit' }).first()
  if (!(await submit.count())) return false
  await submit.click()
  return true
}

// ── Glavni prolaz po tieru ────────────────────────────────────────────────────

async function runFlow(browser, tier, vp, probes) {
  const log = {
    shots: [], console: [], pageErrors: [], httpErrors: [], leaks: [], stubbed: [],
    seen: [], jsonLeaks: [], chunkLeaks: [], examFetches: [], gradeResponses: [],
  }
  const checks = []
  const P = `${tier}-${vp}`
  const add = (id, ok, detail) => checks.push({ id: `${P}-${id}`, ok, detail })

  // Svaki prolaz kreće od praznog stanja baze: razmak od 60 s i dnevni budžet
  // vrijede po (korisnik, ispit), pa bi ih prethodni prolaz inače trošio.
  mockState.reset()

  const context = await browser.newContext({
    viewport: VIEWPORTS[vp],
    locale: 'hr-HR',
    isMobile: vp === '400x860',
    hasTouch: vp === '400x860',
  })
  await installGuards(context, log)
  await seedSession(context, tier)
  const page = await context.newPage()
  attachLogs(page, log)
  attachNetwork(page, log, probes)

  try {
    // ── (1) ulazak i pokretanje pravog ispita ───────────────────────────────
    await openHome(page)
    add('ruta-otvorena', page.url().includes('/discere/engleski/simulator'), `URL: ${page.url()}`)
    await shot(page, tier, '01-pocetna', vp, log)

    await openModeSelect(page)
    await shot(page, tier, '02-modeselect', vp, log, { full: true })

    await startExam(page)
    const navTitle = (await page.locator('.ntitle').first().innerText().catch(() => '')) || ''
    add('ispitni-mod-otvoren', /Simulacija/i.test(navTitle), `naslov ispitnog moda: "${navTitle}"`)
    await shot(page, tier, '03-ispit', vp, log)

    const examGet = log.examFetches.filter((f) => f.url.includes('mode=exam'))
    const lastExamGet = examGet[examGet.length - 1] || null
    if (tier === 'free') {
      add(
        'get-ispita-bez-kljuceva',
        !!lastExamGet && lastExamGet.keys === 'none' && lastExamGet.withSol === 0 && lastExamGet.withExp === 0,
        `GET ispita (mode=exam): keys=${lastExamGet?.keys}, pitanja=${lastExamGet?.qs}, sa sol=${lastExamGet?.withSol}, sa exp=${lastExamGet?.withExp} (očekivano keys="none", 0, 0)`,
      )
    } else {
      add(
        'get-ispita-puni-kljucevi',
        !!lastExamGet && lastExamGet.keys === 'full' && lastExamGet.withSol === lastExamGet.qs,
        `GET ispita (mode=exam): keys=${lastExamGet?.keys}, sa sol=${lastExamGet?.withSol}/${lastExamGet?.qs} (očekivano keys="full", svi)`,
      )
    }

    // ── (7) osvježavanje usred ispita ───────────────────────────────────────
    const before = await pickRadioAnswer(page)
    const draftBefore = await page.evaluate(
      (key) => { try { return localStorage.getItem(`disc_eng_exam_${key}_exam`) } catch { return null } },
      TARGET.key,
    )
    await page.reload({ waitUntil: 'domcontentloaded', timeout: 180000 })
    await page.waitForSelector('.home-search-input', { timeout: 180000 })
    await openModeSelect(page)
    await startExam(page)
    await gotoQuestion(page, before.steps)
    const pickedAfter = await selectedOption(page)
    const answersBefore = Object.keys(JSON.parse(draftBefore || '{}').answers || {}).length
    add(
      'reload-cuva-odgovore',
      before.picked >= 0 && pickedAfter === before.picked,
      `odgovoreno pitanje na koraku ${before.steps}: opcija prije osvježavanja ${before.picked}, poslije ${pickedAfter}`
        + `; odgovora u nacrtu (localStorage): ${answersBefore}`,
    )
    await shot(page, tier, '04-nakon-reloada', vp, log)

    // ── (2) odgovori i predaja ──────────────────────────────────────────────
    await answerAndAdvance(page, 3)
    await walkToSubmit(page)
    const submitted = await submitExam(page)
    add('gumb-predaje', submitted, `gumb "Predaj ispit" dohvatljiv: ${submitted}`)
    await page.waitForSelector('.results', { timeout: 120000 })
    await sleep(1200)
    await shot(page, tier, '05-rezultati', vp, log)
    await shot(page, tier, '06-rezultati-cijelo', vp, log, { full: true })

    const grade = log.gradeResponses[log.gradeResponses.length - 1] || null
    add(
      'ocjenjivanje-na-posluzitelju',
      !!grade && grade.status === 200 && typeof grade.body?.pct === 'number',
      `POST /api/sim/eng/grade → ${grade?.status}, pct=${grade?.body?.pct}, cor=${grade?.body?.cor}/${grade?.body?.total}, grade=${grade?.body?.grade}`,
    )
    const scoreCount = grade?.body?.scores ? Object.keys(grade.body.scores).length : 0
    add(
      'scores-po-pitanju',
      scoreCount > 0,
      `ocjenjivačka ruta vratila točno/netočno za ${scoreCount} pitanja (per-question ✓/✗ izvor)`,
    )
    add(
      'sim-progress-upisan',
      mockState.simProgress.some((r) => r.user_id === userForTier(tier).id && r.exam_key === TARGET.key),
      `redaka u sim_progress za ovog korisnika i ispit: ${mockState.simProgress.filter((r) => r.exam_key === TARGET.key).length} (upisuje ih poslužitelj, ne klijent)`,
    )

    // ── (3) rezultati ───────────────────────────────────────────────────────
    const html = await page.evaluate(() => document.documentElement.outerHTML)
    const pctText = await page.locator('.score-ring-pct').first().innerText().catch(() => '')
    const gradeNum = await page.locator('.score-ring-num').first().innerText().catch(() => '')
    add(
      'rezultati-ocjena-i-postotak',
      /^\d{1,3}%$/.test(pctText.trim()) && /^[1-5]$/.test(gradeNum.trim()),
      `prsten: ocjena "${gradeNum.trim()}", postotak "${pctText.trim()}"`,
    )
    // Natpisi statova idu kroz text-transform, pa innerText vraća verzalom —
    // usporedba ide po textContentu i bez razlike u veličini slova.
    const statLabels = await page.locator('.results .stat .statl').allTextContents()
    const okMark = statLabels.some((s) => /^to[čc]nih$/i.test(s.trim()))
      && statLabels.some((s) => /^neto[čc]nih$/i.test(s.trim()))
    add('rezultati-tocno-netocno', okMark, `statovi na rezultatima: ${JSON.stringify(statLabels)}`)

    const revlist = await page.locator('.revlist').count()
    const locked = await page.locator('[role="region"]').filter({ hasText: 'Otključaj razradu' }).count()
    if (tier === 'free') {
      add('rezultati-bez-pregleda-pitanja', revlist === 0, `popisa .revlist na rezultatima: ${revlist} (mora biti 0)`)
      add('rezultati-zakljucani-blokovi', locked >= 2, `zaključanih blokova s CTA-om: ${locked} (očekivano ≥ 2)`)
      add(
        'rezultati-bez-obrazlozenja-u-htmlu',
        probes.exp ? !html.includes(probes.exp) : null,
        probes.exp
          ? `outerHTML sadrži obrazloženje iz tajnog storea: ${html.includes(probes.exp)} (uzorak: "${probes.exp.slice(0, 50)}…")`
          : 'referentno obrazloženje nije izvučeno iz tajnog storea — provjera preskočena',
      )
      add(
        'rezultati-bez-tocnog-odgovora-u-htmlu',
        !/Točan odgovor:|✓ Točno:/.test(html),
        `outerHTML sadrži natpis točnog odgovora: ${/Točan odgovor:|✓ Točno:/.test(html)}`,
      )
      // Per-question ✓/✗: poslužitelj ga šalje u `scores`, a free ekran ga od
      // sada iscrtava kao kompaktnu mrežicu (.res-qgrid) — jedan bit po pitanju,
      // bez teksta pitanja, ključa i obrazloženja.
      const perQuestionMarks = await page.locator('.res-qgrid .res-qcell.ok, .res-qgrid .res-qcell.bad').count()
      add(
        'rezultati-per-question-oznake',
        perQuestionMarks > 0,
        `vidljivih ✓/✗ oznaka po pitanju na free rezultatima: ${perQuestionMarks} `
          + `(poslužitelj je poslao scores za ${scoreCount} pitanja; očekivano > 0).`,
      )
      const gridText = await page.locator('.res-qgrid').first().innerText().catch(() => '')
      add(
        'rezultati-mrezica-bez-teksta-pitanja',
        /^[\s\d✓✗–]*$/.test(gridText),
        `mrežica po pitanjima sadrži samo brojeve i oznake: ${JSON.stringify(gridText.slice(0, 80))}`,
      )
    } else {
      add('rezultati-pregled-pitanja', revlist > 0, `popisa .revlist na rezultatima: ${revlist} (mora biti > 0)`)
      add('rezultati-bez-zakljucanih-blokova', locked === 0, `zaključanih blokova za plaćeni tier: ${locked}`)
      const hasExp = probes.exp ? html.includes(probes.exp) : null
      add(
        'rezultati-s-obrazlozenjima',
        probes.exp ? hasExp : null,
        probes.exp
          ? `pregled sadrži obrazloženje iz tajnog storea: ${hasExp} (uzorak: "${probes.exp.slice(0, 50)}…")`
          : 'referentno obrazloženje nije izvučeno — provjera preskočena',
      )
    }

    // ── (6) druga predaja istog ispita unutar 60 s ──────────────────────────
    await openHome(page)
    await openModeSelect(page)
    await startExam(page)
    await answerAndAdvance(page, 1)
    await walkToSubmit(page)
    await submitExam(page)
    await page.waitForSelector('[role="alert"]', { timeout: 60000 }).catch(() => {})
    await sleep(600)
    const alertText = (await page.locator('[role="alert"]').first().innerText().catch(() => '')) || ''
    const gradeAgain = log.gradeResponses[log.gradeResponses.length - 1] || null
    add(
      'druga-predaja-429',
      gradeAgain?.status === 429,
      `druga predaja unutar 60 s → HTTP ${gradeAgain?.status} (očekivano 429)`,
    )
    add(
      'druga-predaja-poruka-s-odbrojavanjem',
      /Predaja je moguća svakih 60 s/.test(alertText) && /(Ponovna predaja za \d+ s|Čekam \d+ s)/.test(alertText),
      `poruka korisniku: "${alertText.replace(/\s+/g, ' ').trim().slice(0, 160)}"`,
    )
    await shot(page, tier, '07-druga-predaja-429', vp, log)
    await page.evaluate(() => window.stop()).catch(() => {})

    if (tier === 'free') {
      // ── (4) vježbanje: prvih FREE_LIMIT pitanja, pa paywall ───────────────
      await openHome(page)
      await openModeSelect(page)
      await page.locator('.mode-card.practice').click()
      await page.waitForSelector('.card', { timeout: 120000 })
      await sleep(700)

      const practiceGet = log.examFetches.filter((f) => f.url.includes('mode=practice')).pop() || null
      add(
        'vjezbanje-kljucevi-samo-do-limita',
        !!practiceGet && practiceGet.withSol > 0 && practiceGet.withSol <= FREE_LIMIT,
        `GET vježbanja: keys=${practiceGet?.keys}, s ključem ${practiceGet?.withSol}/${practiceGet?.qs} pitanja (dopušteno najviše ${FREE_LIMIT})`,
      )

      let withCheck = 0
      let withFeedback = 0
      for (let i = 0; i < FREE_LIMIT; i++) {
        const opts = page.locator('.card .opts [role="radio"]')
        if (await opts.count()) await opts.first().click().catch(() => {})
        await sleep(200)
        const check = page.getByRole('button', { name: 'Provjeri' }).first()
        if (await check.count()) {
          withCheck++
          await check.click().catch(() => {})
          await sleep(400)
          if (await page.locator('.fb .fbtitle').count()) withFeedback++
        }
        const next = page.getByRole('button', { name: 'Sljedeće →' }).first()
        if (!(await next.count()) || !(await next.isEnabled().catch(() => false))) break
        await next.click().catch(() => {})
        await sleep(400)
      }
      add(
        'vjezbanje-provjeri-na-prva-3',
        withCheck === FREE_LIMIT && withFeedback === FREE_LIMIT,
        `gumb "Provjeri" na ${withCheck}/${FREE_LIMIT} pitanja, povratna informacija na ${withFeedback}/${FREE_LIMIT}`,
      )
      await shot(page, tier, '08-vjezbanje-feedback', vp, log)

      await sleep(900)
      const practiceBody = await page.locator('body').innerText()
      // PaywallModal se sam otvara na prvom zaključanom pitanju (SimulatorPreviewGate).
      const paywall = await page.locator('[role="dialog"][aria-label="Otključaj simulator"]').count()
      const noCheck = (await page.getByRole('button', { name: 'Provjeri' }).count()) === 0
      add(
        'vjezbanje-paywall-nakon-limita',
        paywall > 0 && /Otključaj|Standard|pretplat/i.test(practiceBody),
        `na ${FREE_LIMIT + 1}. pitanju otvoren paywall modal: ${paywall > 0}; gumb "Provjeri" nestao: ${noCheck}`,
      )
      await shot(page, tier, '09-vjezbanje-paywall', vp, log, { full: true })

      // ── (5) alati nad cijelom bankom → zaključano, bez dohvata ispita ─────
      const tools = [
        { id: 'dnevni-izazov', name: 'Dnevni izazov', label: 'Dnevni izazov' },
        { id: 'virtualni-ispit', name: 'Virtualni ispit', label: 'Virtualni ispit' },
        { id: 'vjezbaj-po-temi', name: 'Vježbaj po temi', label: 'Vježbaj po temi' },
      ]
      for (const tool of tools) {
        await openHome(page)
        const before = log.examFetches.length
        const btn = page.locator('button').filter({ hasText: tool.name }).first()
        if (!(await btn.count())) {
          add(`alat-${tool.id}`, false, `gumb "${tool.name}" nije pronađen na početnoj`)
          continue
        }
        await btn.scrollIntoViewIfNeeded()
        await btn.click()
        await sleep(1800)
        const toolBody = await page.locator('body').innerText()
        const lockedUi = await page.locator('[role="region"]').filter({ hasText: 'Otključaj razradu' }).count()
        const fetched = log.examFetches.length - before
        add(
          `alat-${tool.id}-zakljucan`,
          lockedUi > 0 && toolBody.includes(tool.label),
          `zaključani blok: ${lockedUi}, natpis "${tool.label}" na ekranu: ${toolBody.includes(tool.label)}`,
        )
        add(
          `alat-${tool.id}-bez-dohvata`,
          fetched === 0,
          `dohvata /api/sim/eng/exam nakon klika: ${fetched} (mora biti 0)`,
        )
        await shot(page, tier, `10-${tool.id}`, vp, log)
      }
    }

    // ── zbirna provjera presretnute mreže ───────────────────────────────────
    if (tier === 'free') {
      // Vježbanje po ODLUCI (5) legitimno nosi ključ za prvih FREE_LIMIT pitanja,
      // pa je jedini dopušteni pogodak upravo taj odgovor.
      const illegal = log.jsonLeaks.filter((l) => !l.url.includes('mode=practice'))
      add(
        'nijedan-json-s-kljucem',
        illegal.length === 0,
        `JSON odgovora s poljem sol/exp/why/steps izvan free vježbanja: ${illegal.length}`
          + (illegal.length ? ` → ${illegal.slice(0, 5).map((l) => `${l.url} ${l.at}`).join('; ')}` : '')
          + `; pregledano ${log.seen.filter((s) => s.type === 'json').length} JSON odgovora`,
      )
      add(
        'nijedan-js-chunk-s-obrazlozenjem',
        probes.exp ? log.chunkLeaks.length === 0 : null,
        probes.exp
          ? `JS chunkova s obrazloženjem iz tajnog storea: ${log.chunkLeaks.length}${log.chunkLeaks.length ? ' → ' + log.chunkLeaks.slice(0, 3).join(', ') : ''}; pregledano ${log.seen.filter((s) => s.type === 'js').length} skripti`
          : 'referentno obrazloženje nije izvučeno — provjera preskočena',
      )
    }
  } catch (err) {
    add('FATAL', false, String(err?.message || err).split('\n').slice(0, 8).join(' | '))
    try { await shot(page, tier, '99-greska', vp, log, { full: true }) } catch {}
  }

  await context.close()
  return { tier, vp, checks, log }
}

// ── Pristup rutom (gost mora na /prijava) ─────────────────────────────────────

async function accessChecks() {
  const route = '/discere/engleski/simulator'
  const out = []
  for (const tier of ['free', 'standard', null]) {
    const headers = {}
    if (tier) headers.cookie = `${AUTH_COOKIE}=${encodeURIComponent(JSON.stringify(makeSession(tier)))}`
    let status = 0
    let location = ''
    try {
      const res = await fetch(BASE + route, { headers, redirect: 'manual' })
      status = res.status
      location = res.headers.get('location') || ''
    } catch (err) {
      location = String(err?.message || err)
    }
    const who = tier || 'gost'
    const ok = who === 'gost' ? status === 307 && location.startsWith('/prijava') : status === 200
    out.push({ id: `pristup-${who}`, ok, detail: `${status}${location ? ' → ' + location : ''} (očekivano: ${who === 'gost' ? '307 /prijava' : '200'})` })
  }
  return out
}

// ── Pokretanje ────────────────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(OUT, { recursive: true })
  const tiers = argOf('tiers', 'free,standard').split(',').map((s) => s.trim()).filter(Boolean)
  const vps = argOf('vp', '1280x800,400x860').split(',').map((s) => s.trim()).filter(Boolean)
  const probes = readProbes(TARGET.key)
  if (args.includes('--probes-only')) {
    console.log(JSON.stringify(probes, null, 2))
    return
  }

  const mockCalls = []
  let mock = null
  try {
    mock = await startMockSupabase(MOCK_PORT, { onCall: (c) => mockCalls.push(c) })
  } catch (err) {
    if (err?.code === 'EADDRINUSE') console.error(`[qa] port ${MOCK_PORT} zauzet — koristim već pokrenuti mock`)
    else throw err
  }

  const access = await accessChecks()

  const browser = await chromium.launch({ headless: true })
  const runs = []
  for (const tier of tiers) {
    for (const vp of vps) runs.push(await runFlow(browser, tier, vp, probes))
  }
  await browser.close()
  if (mock) await new Promise((r) => mock.close(r))

  const all = [...access, ...runs.flatMap((r) => r.checks)]
  const summary = {
    base: BASE,
    out: OUT,
    ispit: TARGET.key,
    probes: { exp: probes.exp ? probes.exp.slice(0, 60) + '…' : null, sol: probes.sol },
    zbroj: {
      proslo: all.filter((c) => c.ok === true).length,
      palo: all.filter((c) => c.ok === false).length,
      preskoceno: all.filter((c) => c.ok === null).length,
    },
    pristup: access,
    runs: runs.map((r) => ({
      tier: r.tier,
      viewport: r.vp,
      shots: r.log.shots,
      checks: r.checks,
      examFetches: r.log.examFetches,
      gradeStatuses: r.log.gradeResponses.map((g) => g.status),
      jsonOdgovora: r.log.seen.filter((s) => s.type === 'json').length,
      jsChunkova: r.log.seen.filter((s) => s.type === 'js').length,
      jsonLeaks: r.log.jsonLeaks,
      chunkLeaks: r.log.chunkLeaks,
      pageErrors: [...new Set(r.log.pageErrors)],
      httpErrors: [...new Set(r.log.httpErrors)],
      realSupabaseLeaks: [...new Set(r.log.leaks)],
      consoleErrors: [...new Set(r.log.console.filter((l) => l.startsWith('[error]')))].slice(0, 10),
    })),
    mockEndpointsHit: [...new Set(mockCalls.map((c) => c.split('?')[0]))],
  }
  console.log(JSON.stringify(summary, null, 2))
  process.exitCode = all.some((c) => c.ok === false) ? 1 : 0
}

main().catch((err) => {
  console.error(err)
  process.exit(2)
})
