// scripts/qa/hrv-sim-visual.mjs
// Vizualni QA hrvatskog simulatora u pravom pregledniku (Playwright + Chromium).
//
// Pokriva: onboarding → početna (značka besplatnog ispita) → ispitni mod
// (3-2-1, pitanje bez topic-taga/bookmarka, reload usred ispita) → rezultati
// za FREE i STANDARD → filter po temi. Sve na 1280×800 i 400×860.
//
// Supabase je u cijelosti lažan (scripts/qa/hrv-sim-mock-supabase.mjs), a
// sesija se ubacuje kao sb-localhost-auth-token cookie + localStorage zapis.
// Tier bira `qa_tier` claim u tokenu, koji mock pretvara u profiles.plan_type
// — jedini izvor entitlementa u lib/hooks/useAuth.js i proxy.js.
//
// Priprema (dev server mora gledati u isti mock, inače proxy.js na serveru
// zove pravi Supabase i QA prolaz završi na /prijava):
//
//   NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321 \
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=<bilo koji JWT-oblik string> \
//   DEV_BYPASS_EMAIL=qa.vizual@maturiraj.test \
//   npx next dev --webpack -p 3005
//
//   node scripts/qa/hrv-sim-visual.mjs --base http://localhost:3005 --out ./.qa-shots
//
// DEV_BYPASS_EMAIL je nužan samo za FREE prolaz: proxy.js cijeli /discere
// zaključava za neplaćeni tier, pa bi se free korisnik preusmjerio na /pro
// prije nego što se ijedan zaslon simulatora uopće iscrta.
//
// Izlaz: PNG po koraku u --out i JSON sažetak provjera na stdout.

import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import { startMockSupabase, makeSession, MOCK_PORT, MOCK_URL, QA_USER } from './hrv-sim-mock-supabase.mjs'

const args = process.argv.slice(2)
const argOf = (name, dflt) => {
  const i = args.indexOf('--' + name)
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt
}

const BASE = argOf('base', 'http://localhost:3005')
const OUT = path.resolve(argOf('out', './.qa-shots'))
const SIM = '/discere/hrvatski/simulator'
const EXAM_KEY = '2019_ljeto_B'
const FREE_EXAM_YEAR = 2016
// supabase-js: `sb-${new URL(url).hostname.split('.')[0]}-auth-token`
const AUTH_COOKIE = `sb-${new URL(MOCK_URL).hostname.split('.')[0]}-auth-token`

const VIEWPORTS = {
  '1280x800': { width: 1280, height: 800 },
  '400x860': { width: 400, height: 860 },
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function seedSession(context, tier) {
  const sess = makeSession(tier)
  await context.addInitScript(
    ({ cookieName, sess }) => {
      const raw = JSON.stringify(sess)
      try {
        localStorage.setItem(cookieName, raw)
      } catch {}
      // @supabase/ssr čita cookie bez "base64-" prefiksa kao čisti JSON, a
      // useAuth.readUserFromStorage radi decodeURIComponent + JSON.parse.
      document.cookie = `${cookieName}=${encodeURIComponent(raw)}; path=/; max-age=21600; SameSite=Lax`
    },
    { cookieName: AUTH_COOKIE, sess },
  )
  await context.addCookies([
    {
      name: AUTH_COOKIE,
      value: encodeURIComponent(JSON.stringify(sess)),
      url: BASE,
    },
  ])
}

async function installGuards(context, log) {
  // Ništa ne smije otići na pravi projekt — ako ode, prolaz to mora prijaviti.
  await context.route('**/*.supabase.co/**', (route) => {
    log.leaks.push(route.request().url())
    return route.abort()
  })
  // Percentil ide kroz Next rutu (server → Supabase); fiksiramo ga da je
  // "Bolji/a od X %" deterministički vidljiv na snimci.
  await context.route('**/api/discere/percentile**', (route) =>
    route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ percentile: 72 }) }),
  )
  // /api/game/discere-attempts (zove se nakon predaje) se NE kompajlira: njegov
  // uvozni lanac hrv-engine -> pedagogy.js -> utils/helpers.js povlaci React hookove
  // u serverski sloj, pa ruta vraca 500 i u dev modu zatruje build cijele rute
  // simulatora. Ovdje ga presrecemo da jedan pravi kvar ne obori ostatak QA prolaza.
  await context.route('**/api/game/discere-attempts**', (route) => {
    log.blockedAttemptsCall = (log.blockedAttemptsCall || 0) + 1
    return route.fulfill({ status: 204, body: '' })
  })
}

function attachLogs(page, log) {
  page.on('console', (msg) => {
    const t = msg.type()
    if (t === 'error' || t === 'warning') log.console.push(`[${t}] ${msg.text()}`)
  })
  page.on('pageerror', (err) => log.pageErrors.push(String(err && err.message ? err.message : err)))
  page.on('response', (res) => {
    if (res.status() >= 400) log.httpErrors.push(`${res.status()} ${res.url()}`)
  })
}

async function shot(page, name, log, opts = {}) {
  fs.mkdirSync(OUT, { recursive: true })
  await page.screenshot({ path: path.join(OUT, name + '.png'), fullPage: !!opts.full })
  log.shots.push(name + '.png')
}

async function runOnboarding(page, tier, vp, log, checks) {
  await page.goto(BASE + SIM, { waitUntil: 'domcontentloaded', timeout: 120000 })
  checks.push({
    id: `${tier}-${vp}-ruta-dostupna`,
    ok: page.url().startsWith(BASE + SIM),
    detail: `URL nakon učitavanja: ${page.url()}`,
  })
  await page.waitForSelector('text=Dobrodošao/la u Discere', { timeout: 90000 })
  await shot(page, `${tier}-01-onboarding-${vp}`, log)
  await page.getByText('4. razred — matura ove godine', { exact: true }).click()
  await page.getByRole('button', { name: 'Dalje →' }).first().click()
  await page.getByRole('button', { name: 'Preskočiti →' }).click()
  await page.getByRole('button', { name: 'Počni vježbati! 🚀' }).click()
  await page.waitForSelector('#exams', { timeout: 60000 })
  await sleep(600)
  await shot(page, `${tier}-02-pocetna-${vp}`, log)
}

async function freeBadgeSteps(page, tier, vp, log, checks) {
  const yearBtn = page.locator('.year-group-header', { hasText: String(FREE_EXAM_YEAR) }).first()
  await yearBtn.scrollIntoViewIfNeeded()
  await yearBtn.click()
  await sleep(400)
  await page.locator('.year-group-body.open').first().locator('div', { hasText: 'Osnovna razina' }).last().click()
  await sleep(400)
  // Godine s jedinstvenim ispitom (2023+) renderiraju retke i dok im je grupa
  // zatvorena, pa selektor mora biti unutar otvorenog tijela grupe.
  const openBody = page.locator('.year-group-body.open').first()
  const ljetoRow = openBody.locator('.exrow-sub--active', { hasText: 'Ljetni' }).first()
  await ljetoRow.scrollIntoViewIfNeeded()
  await sleep(250)
  const homeBadge = await openBody.locator('.exrow-sub--active', { hasText: 'Besplatno u cijelosti' }).count()
  checks.push({
    id: `${tier}-${vp}-znacka-pocetna`,
    ok: tier === 'free' ? homeBadge > 0 : homeBadge === 0,
    detail: `2016 ljetni B — značka "🆓 Besplatno u cijelosti" na početnoj: ${homeBadge} (tier=${tier})`,
  })
  await shot(page, `${tier}-03-znacka-2016B-${vp}`, log)

  await ljetoRow.click()
  await page.waitForSelector('.modeselect-screen', { timeout: 60000 })
  await sleep(400)
  const modeBadge = await page.locator('.modecard', { hasText: 'Sva pitanja besplatno' }).count()
  checks.push({
    id: `${tier}-${vp}-znacka-modeselect`,
    ok: tier === 'free' ? modeBadge > 0 : modeBadge === 0,
    detail: `ModeSelect — značka "🆓 Sva pitanja besplatno" uz Vježbanje: ${modeBadge} (tier=${tier})`,
  })
  await shot(page, `${tier}-04-modeselect-2016B-${vp}`, log, { full: true })
}

async function examSteps(page, tier, vp, log, checks) {
  await page.goto(`${BASE}${SIM}?s=exammode&exam=${EXAM_KEY}`, { waitUntil: 'domcontentloaded', timeout: 120000 })
  try {
    await page.waitForSelector('.exam-countdown', { timeout: 90000 })
    await shot(page, `${tier}-05-odbrojavanje-${vp}`, log)
    checks.push({ id: `${tier}-${vp}-odbrojavanje`, ok: true, detail: '3-2-1 odbrojavanje prikazano prije starta' })
  } catch {
    checks.push({ id: `${tier}-${vp}-odbrojavanje`, ok: false, detail: '.exam-countdown nije uhvaćen' })
  }
  await page.waitForSelector('.qcard', { timeout: 90000 })
  // .qcard postoji i ispod odbrojavanja (overlay mu je sibling), pa bez ovoga
  // snimka "prvog pitanja" uhvati još uvijek prekriven zaslon.
  await page.waitForSelector('.exam-countdown', { state: 'detached', timeout: 20000 }).catch(() => {})
  await sleep(600)

  const topicTags = await page.locator('.qcard .qmeta .topic-tag').count()
  const bookmarkBtns = await page.locator('.qcard .qmeta .qflag', { hasText: 'Spremi' }).count()
  const hasTimer = await page.locator('.timer, [class*="timer"]').count()
  checks.push({
    id: `${tier}-${vp}-ispit-bez-taga-i-bookmarka`,
    ok: topicTags === 0 && bookmarkBtns === 0,
    detail: `topic-tag: ${topicTags}, gumb "Spremi": ${bookmarkBtns} (oba moraju biti 0); timer elemenata: ${hasTimer}`,
  })
  await shot(page, `${tier}-06-ispit-pitanje1-${vp}`, log)

  for (let i = 0; i < 3; i++) {
    const opts = page.locator('.qcard .opts .opt')
    if (await opts.count()) await opts.nth(i % (await opts.count())).click()
    await sleep(150)
    const next = page.getByRole('button', { name: 'Sljedeće →' })
    if (await next.count()) await next.first().click()
    else if (await page.locator('.mob-nav-btn[aria-label="Sljedeće pitanje"]').count())
      await page.locator('.mob-nav-btn[aria-label="Sljedeće pitanje"]').click()
    await sleep(250)
  }
  await sleep(800)

  await page.reload({ waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForSelector('.qcard', { timeout: 90000 })
  await sleep(700)
  const body = await page.locator('body').innerText()
  const hasResume = body.includes('Nastavljaš ispit')
  const countdownAgain = await page.locator('.exam-countdown').count()
  checks.push({
    id: `${tier}-${vp}-nastavak-ispita`,
    ok: hasResume && countdownAgain === 0,
    detail: `banner "Nastavljaš ispit" = ${hasResume}, ponovno odbrojavanje = ${countdownAgain} (mora biti 0)`,
  })
  await shot(page, `${tier}-07-nastavak-nakon-reloada-${vp}`, log)

  // Donja mobilna traka (.mob-nav) nosi jedini prečac do mrežice pitanja na uskom
  // ekranu. Provjeravamo je li uopće iscrtana — u CSS-u je `display:none` zapisan
  // POSLIJE @media(max-width:768px){display:flex}, pa je pravilo nikad ne prikaže.
  // `display` sam po sebi nije dovoljan: traka je position:fixed, pa ju je
  // dovoljno da neki predak ima transform (npr. .screen-slide s
  // animation-fill-mode:both) da se usidri na dno omotaca umjesto viewporta i
  // ispadne s ekrana. Zato mjerimo i stvarni pravokutnik.
  const mobNav = await page.evaluate(() => {
    const el = document.querySelector('.mob-nav')
    if (!el) return { present: false }
    const cs = getComputedStyle(el)
    const r = el.getBoundingClientRect()
    return {
      present: true, display: cs.display, visibility: cs.visibility,
      rect: { top: Math.round(r.top), bottom: Math.round(r.bottom) },
      innerH: window.innerHeight,
      unutarViewporta: r.top >= 0 && r.bottom <= window.innerHeight + 1,
    }
  })
  const narrow = vp === '400x860'
  checks.push({
    id: `${tier}-${vp}-mobilna-donja-traka`,
    ok: narrow ? mobNav.present && mobNav.display !== 'none' && mobNav.unutarViewporta : true,
    detail: `.mob-nav u DOM-u: ${mobNav.present}, computed display: ${mobNav.display || '—'} (na ${vp} bi trebala biti flex), rect ${JSON.stringify(mobNav.rect || null)} vs innerHeight ${mobNav.innerH || '—'}, unutar viewporta: ${mobNav.unutarViewporta}`,
  })

  const sideDots = page.locator('.sidebar .qgrid .qdot')
  const mobCenter = page.locator('.mob-nav-center').first()
  if ((await sideDots.count()) > 0 && (await sideDots.first().isVisible())) {
    const last = sideDots.nth((await sideDots.count()) - 1)
    await last.scrollIntoViewIfNeeded()
    await last.click()
  } else if (await mobCenter.isVisible().catch(() => false)) {
    await mobCenter.click()
    await page.waitForSelector('.mob-sheet-grid .qdot', { timeout: 20000 })
    const mDots = page.locator('.mob-sheet-grid .qdot')
    await mDots.nth((await mDots.count()) - 1).click()
  } else {
    // Bez mrežice i bez donje trake preostaje samo redom kroz sva pitanja.
    const next = page.getByRole('button', { name: 'Sljedeće →' })
    for (let i = 0; i < 200 && (await next.count()) > 0; i++) await next.first().click()
  }
  await sleep(500)

  const finish = page.getByRole('button', { name: /Završi ispit/ })
  if ((await finish.count()) > 0 && (await finish.first().isVisible())) await finish.first().click()
  else await page.locator('.mob-nav-end').first().click()
  await page.waitForSelector('.results', { timeout: 60000 })
  await sleep(1200)
}

async function resultsChecks(page, tier, vp, log, checks, shared) {
  const body = await page.locator('body').innerText()
  await shot(page, `${tier}-08-rezultati-vrh-${vp}`, log)
  await shot(page, `${tier}-09-rezultati-cijelo-${vp}`, log, { full: true })

  // .glbl ima text-transform:uppercase, pa innerText vraca "OCJENA TESTA".
  const ocjenaTesta = /ocjena testa/i.test(body)
  checks.push({
    id: `${tier}-${vp}-ocjena-testa`,
    ok: ocjenaTesta,
    detail: `krug ocjene nosi natpis "ocjena testa" (a ne "ocjena mature"): ${ocjenaTesta}; spominje li se "ocjena mature": ${/ocjena mature/i.test(body)}`,
  })
  const pctOk = /Bolji\/a od \d+ %/.test(body)
  checks.push({ id: `${tier}-${vp}-percentil`, ok: pctOk, detail: `percentil "Bolji/a od X %": ${pctOk}` })

  const lockedBlocks = await page.locator('[role="region"]', { hasText: 'Otključaj razradu' }).count()
  const reviewHeader = await page.locator('span', { hasText: /^[▶▼] Pregled pitanja$/ }).count()

  if (tier === 'free') {
    checks.push({
      id: `${tier}-${vp}-zakljucani-blokovi`,
      ok: lockedBlocks >= 3,
      detail: `zaključanih blokova s CTA "Otključaj razradu → Standard": ${lockedBlocks}`,
    })
    checks.push({
      id: `${tier}-${vp}-nema-interaktivnog-pregleda`,
      ok: reviewHeader === 0,
      detail: `interaktivni "Pregled pitanja" (ne smije postojati za free): ${reviewHeader}`,
    })
    const html = await page.content()
    const correctMark = /✓ točno/.test(html)
    checks.push({
      id: `${tier}-${vp}-bez-tocnih-odgovora-u-htmlu`,
      ok: !correctMark,
      detail: `oznaka "✓ točno" u HTML-u stranice: ${correctMark}`,
    })
    if (shared.expText) {
      const leak = body.includes(shared.expText)
      checks.push({
        id: `${tier}-${vp}-bez-obrazlozenja-u-domu`,
        ok: !leak,
        detail: `document.body.innerText sadrži obrazloženje 1. pitanja: ${leak} (uzorak: "${shared.expText.slice(0, 70)}…")`,
      })
      const htmlLeak = html.includes(shared.expText)
      checks.push({
        id: `${tier}-${vp}-bez-obrazlozenja-u-htmlu`,
        ok: !htmlLeak,
        detail: `cijeli HTML sadrži obrazloženje 1. pitanja: ${htmlLeak}`,
      })
    } else {
      checks.push({
        id: `${tier}-${vp}-bez-obrazlozenja-u-domu`,
        ok: null,
        detail: 'nema referentnog obrazloženja iz STANDARD prolaza — provjera preskočena',
      })
    }
  } else {
    checks.push({
      id: `${tier}-${vp}-bez-zakljucanih-blokova`,
      ok: lockedBlocks === 0,
      detail: `zaključanih blokova za plaćeni tier (mora biti 0): ${lockedBlocks}`,
    })
    checks.push({
      id: `${tier}-${vp}-analiza-vidljiva`,
      ok: body.includes('Tvoja analiza') || reviewHeader > 0,
      detail: `"Tvoja analiza": ${body.includes('Tvoja analiza')}, zaglavlje "Pregled pitanja": ${reviewHeader}`,
    })
    // revOpen je po defaultu true - popis je vec otvoren, samo ga treba dohvatiti.
    const header = page.locator('span', { hasText: /^[▶▼] Pregled pitanja$/ }).first()
    if (await header.count()) {
      await header.scrollIntoViewIfNeeded()
      if ((await header.innerText()).startsWith('▶')) await header.click()
      await page.waitForSelector('.revlist .revitem', { timeout: 30000 })
      await sleep(700)
      await shot(page, `${tier}-10-pregled-pitanja-${vp}`, log)
      const txt = await page.locator('.revlist .revitem').first().innerText()
      const line = txt.split('\n').map((s) => s.trim()).find((s) => s.startsWith('💡'))
      if (line) shared.expText = line.replace(/^💡\s*/, '').slice(0, 120)
      checks.push({
        id: `${tier}-${vp}-pregled-otvoren`,
        ok: true,
        detail: `pregled pitanja otvoren, stavki: ${await page.locator('.revlist .revitem').count()}; obrazloženje uhvaćeno: ${!!line}`,
      })
    } else {
      checks.push({ id: `${tier}-${vp}-pregled-otvoren`, ok: false, detail: 'zaglavlje "Pregled pitanja" nije pronađeno' })
    }
  }
}

async function filterSteps(page, tier, vp, log, checks) {
  await page.goto(`${BASE}${SIM}?s=filter`, { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForSelector('.filter-chip', { timeout: 90000 })
  await sleep(600)
  // Naslovi grupa su uppercase preko CSS-a, pa innerText vraća "JEZIK" itd.
  const bodyTxt = (await page.locator('body').innerText()).toLowerCase()
  const expected = ['Jezik', 'Književnost — razdoblja', 'Književnost — teorija']
  const has = (g) => bodyTxt.includes(g.toLowerCase())
  const missing = expected.filter((g) => !has(g))
  checks.push({
    id: `${tier}-${vp}-filter-grupe`,
    ok: missing.length === 0,
    detail: `grupe: ${expected.filter(has).join(' | ')}${missing.length ? ' — NEDOSTAJE: ' + missing.join(', ') : ''}; chipova ukupno (teme+godine+težina): ${await page.locator('.filter-chip').count()}`,
  })
  const ov = await page.evaluate(() => ({
    scrollW: document.documentElement.scrollWidth,
    clientW: document.documentElement.clientWidth,
  }))
  checks.push({
    id: `${tier}-${vp}-filter-bez-horizontalnog-scrolla`,
    ok: ov.scrollW <= ov.clientW + 2,
    detail: `scrollWidth ${ov.scrollW} vs clientWidth ${ov.clientW}`,
  })
  await shot(page, `${tier}-11-filter-teme-${vp}`, log, { full: true })
}

async function runFlow(browser, { tier, vp, shared, doFilter }) {
  const log = { shots: [], console: [], pageErrors: [], httpErrors: [], leaks: [], blockedAttemptsCall: 0 }
  const checks = []
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

  try {
    await runOnboarding(page, tier, vp, log, checks)
    await freeBadgeSteps(page, tier, vp, log, checks)
    await examSteps(page, tier, vp, log, checks)
    await resultsChecks(page, tier, vp, log, checks, shared)
    if (doFilter) await filterSteps(page, tier, vp, log, checks)
  } catch (err) {
    checks.push({ id: `${tier}-${vp}-FATAL`, ok: false, detail: String(err && err.message ? err.message : err) })
    try {
      await shot(page, `${tier}-99-greska-${vp}`, log, { full: true })
    } catch {}
  }

  await context.close()
  return { tier, vp, checks, log }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true })

  const mockCalls = []
  let mock = null
  try {
    mock = await startMockSupabase(MOCK_PORT, { onCall: (c) => mockCalls.push(c) })
  } catch (err) {
    if (err && err.code === 'EADDRINUSE') console.error(`[qa] port ${MOCK_PORT} zauzet — koristim već pokrenuti mock`)
    else throw err
  }

  const browser = await chromium.launch({ headless: true })
  const shared = { expText: null }
  const runs = []

  // STANDARD prvi — iz njegova "Pregleda pitanja" uzimamo obrazloženje 1. pitanja,
  // koje se onda traži (i ne smije naći) u FREE DOM-u.
  runs.push(await runFlow(browser, { tier: 'standard', vp: '1280x800', shared, doFilter: false }))
  runs.push(await runFlow(browser, { tier: 'standard', vp: '400x860', shared, doFilter: false }))
  runs.push(await runFlow(browser, { tier: 'free', vp: '1280x800', shared, doFilter: true }))
  runs.push(await runFlow(browser, { tier: 'free', vp: '400x860', shared, doFilter: true }))

  await browser.close()
  if (mock) await new Promise((r) => mock.close(r))

  const summary = {
    base: BASE,
    out: OUT,
    examKey: EXAM_KEY,
    authCookie: AUTH_COOKIE,
    qaUser: QA_USER.email,
    expSample: shared.expText,
    runs: runs.map((r) => ({
      tier: r.tier,
      viewport: r.vp,
      shots: r.log.shots,
      checks: r.checks,
      pageErrors: r.log.pageErrors,
      httpErrors: [...new Set(r.log.httpErrors)],
      realSupabaseLeaks: [...new Set(r.log.leaks)],
      blokiranihPozivaDiscereAttempts: r.log.blockedAttemptsCall,
      consoleErrors: [...new Set(r.log.console.filter((l) => l.startsWith('[error]')))],
      consoleWarnings: [...new Set(r.log.console.filter((l) => l.startsWith('[warning]')))],
    })),
    mockEndpointsHit: [...new Set(mockCalls.map((c) => c.split('?')[0]))],
  }
  console.log(JSON.stringify(summary, null, 2))
  process.exitCode = runs.flatMap((r) => r.checks).some((c) => c.ok === false) ? 1 : 0
}

main().catch((err) => {
  console.error(err)
  process.exit(2)
})
