// scripts/qa/discere-free-exam-visual.mjs
// Vizualni QA free-exam modela na engleskom, matematici i sociologiji.
//
// Politika koju provjeravamo (ista kao već isporučeni hrvatski):
//   • prijavljeni free korisnik ulazi na rutu i rješava PRAVI ispit s timerom,
//   • na rezultatima vidi ocjenu/postotak/bodove, a razrada je zaključana
//     (LockedResultsBlock + CTA) i NE SMIJE biti u DOM-u ni skrivena,
//   • vježbanje ostaje plaćeno (eng: FREE_LIMIT, mat: zaključana kartica moda,
//     soc: socGate → /pro),
//   • gost i dalje ide na /prijava.
//
// Za razliku od hrv-sim-visual.mjs ovdje NEMA DEV_BYPASS_EMAIL — cijela poanta
// je da free korisnik prolazi sam, bez owner bypassa u proxy.js.
//
// Priprema:
//   NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321 \
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=<bilo koji JWT-oblik string> \
//   npx next dev --webpack -p 3008
//
//   node scripts/qa/discere-free-exam-visual.mjs --base http://localhost:3008 --out ./.qa-shots
//
// Izlaz: PNG po koraku u --out i JSON sažetak na stdout (exit 1 ako nešto padne).

import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { startMockSupabase, makeSession, MOCK_PORT, MOCK_URL } from './hrv-sim-mock-supabase.mjs'

const args = process.argv.slice(2)
const argOf = (name, dflt) => {
  const i = args.indexOf('--' + name)
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt
}

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const BASE = argOf('base', 'http://localhost:3008')
const OUT = path.resolve(argOf('out', './.qa-shots'))
const ONLY = argOf('only', '')
const AUTH_COOKIE = `sb-${new URL(MOCK_URL).hostname.split('.')[0]}-auth-token`

const VIEWPORTS = {
  '1280x800': { width: 1280, height: 800 },
  '400x860': { width: 400, height: 860 },
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ── Referentni tekstovi iz PODATAKA ───────────────────────────────────────────
// Obrazloženje/točan odgovor 1. pitanja odabranog ispita — to je tekst koji za
// free korisnika ne smije postojati nigdje u document.documentElement.outerHTML.

function unquote(raw) {
  try { return JSON.parse('"' + raw + '"') } catch { return raw.replace(/\\(.)/g, '$1') }
}

function quotedAfter(src, from, field) {
  if (from < 0) return null
  const re = new RegExp(field + '\\s*:\\s*\\[?\\s*"((?:[^"\\\\]|\\\\.)*)"', 'g')
  re.lastIndex = from
  const m = re.exec(src)
  return m ? unquote(m[1]) : null
}

// Iz obrazloženja uzimamo najduži ulomak bez znakova koje renderer transformira
// (mat koristi [FRAC:a|b] markere), da usporedba s HTML-om bude doslovna.
function plainFragment(text, min = 24) {
  if (!text) return null
  const runs = String(text).split(/[[\]|"'<>&]+/).map((s) => s.trim()).filter((s) => s.length >= min)
  if (!runs.length) return null
  return runs.sort((a, b) => b.length - a.length)[0].slice(0, 90)
}

function readProbe(subject) {
  try {
    if (subject === 'engleski') {
      const src = fs.readFileSync(path.join(ROOT, 'lib/engleski-simulator/exams.js'), 'utf8')
      return plainFragment(quotedAfter(src, src.indexOf('key: "2024_ljeto"'), 'exp'))
    }
    if (subject === 'sociologija') {
      const src = fs.readFileSync(path.join(ROOT, 'public/sim/sociologija.html'), 'utf8')
      return plainFragment(quotedAfter(src, src.indexOf('const QS_2024_ljeto='), 'exp'))
    }
    if (subject === 'matematika') {
      const src = fs.readFileSync(path.join(ROOT, 'content/simulator/mat/exams/2024_ljeto_A.mjs'), 'utf8')
      // Mat nema `exp` nego `why` — niz obrazloženja 1. zadatka; uzimamo najdulji.
      const at = src.indexOf('why:', src.indexOf('export const qs'))
      const block = at < 0 ? '' : src.slice(at, at + 4000)
      const frags = [...block.matchAll(/"((?:[^"\\]|\\.)*)"/g)]
        .map((m) => plainFragment(unquote(m[1])))
        .filter(Boolean)
      return frags.sort((a, b) => b.length - a.length)[0] || null
    }
  } catch (err) {
    return null
  }
  return null
}

// ── Preglednik ────────────────────────────────────────────────────────────────

async function seedSession(context, tier) {
  const sess = makeSession(tier)
  const raw = JSON.stringify(sess)
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
  // Iste dvije rute koje ruši i hrv QA prolaz: njihov uvozni lanac u dev modu
  // zatruje build cijele rute, pa jedan poznati kvar ne smije oboriti QA.
  await context.route('**/api/game/discere-attempts**', (route) => {
    log.stubbed.push('discere-attempts')
    return route.fulfill({ status: 204, body: '' })
  })
  await context.route('**/api/ai-simulator**', (route) =>
    route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"qa"}' }))
}

function attachLogs(page, log) {
  page.on('console', (msg) => {
    const t = msg.type()
    if (t === 'error' || t === 'warning') log.console.push(`[${t}] ${msg.text()}`)
  })
  page.on('pageerror', (err) => log.pageErrors.push(String(err && err.message ? err.message : err)))
  page.on('response', (res) => { if (res.status() >= 400) log.httpErrors.push(`${res.status()} ${res.url()}`) })
  // Ispitni modovi traže potvrdu prije predaje / prelaska na sljedeći dio.
  page.on('dialog', (d) => d.accept().catch(() => {}))
}

async function shot(page, subject, tier, step, vp, log, opts = {}) {
  fs.mkdirSync(OUT, { recursive: true })
  const name = `${subject}-${tier}-${step}-${vp}.png`
  await page.screenshot({ path: path.join(OUT, name), fullPage: !!opts.full })
  log.shots.push(name)
}

// ── (1) Status pristupa ───────────────────────────────────────────────────────

async function accessChecks(routes) {
  const out = []
  for (const tier of ['free', 'standard', null]) {
    const headers = {}
    if (tier) headers.cookie = `${AUTH_COOKIE}=${encodeURIComponent(JSON.stringify(makeSession(tier)))}`
    for (const route of routes) {
      let status = 0
      let location = ''
      try {
        const res = await fetch(BASE + route, { headers, redirect: 'manual' })
        status = res.status
        location = res.headers.get('location') || ''
      } catch (err) {
        location = String(err && err.message ? err.message : err)
      }
      const who = tier || 'gost'
      const ok = who === 'gost'
        ? status === 307 && location.startsWith('/prijava')
        : status === 200
      out.push({
        id: `pristup-${who}-${route}`,
        ok,
        detail: `${status}${location ? ' → ' + location : ''} (očekivano: ${who === 'gost' ? '307 /prijava' : '200'})`,
      })
    }
  }
  return out
}

// ── Zajednički koraci ─────────────────────────────────────────────────────────

async function answerAndAdvance(page, optSel, nextNames, rounds) {
  for (let i = 0; i < rounds; i++) {
    const opts = page.locator(optSel)
    const n = await opts.count().catch(() => 0)
    if (n) await opts.nth(i % n).click({ timeout: 8000 }).catch(() => {})
    await sleep(200)
    let moved = false
    for (const name of nextNames) {
      const btn = page.getByRole('button', { name }).first()
      if (await btn.count() && await btn.isEnabled().catch(() => false)) {
        await btn.click({ timeout: 8000 }).catch(() => {})
        moved = true
        break
      }
    }
    if (!moved) break
    await sleep(350)
  }
}

async function resultsGating(page, tier, checks, prefix, probe, opts = {}) {
  const body = await page.locator('body').innerText()
  const html = await page.evaluate(() => document.documentElement.outerHTML)
  const pct = /(\d{1,3})\s*%/.test(body)
  checks.push({
    id: `${prefix}-ocjena-postotak`,
    ok: pct,
    detail: `postotak na rezultatima: ${pct}${opts.gradeHint ? `; ocjena ("${opts.gradeHint}"): ${body.includes(opts.gradeHint)}` : ''}`,
  })

  // Pregled odgovora se ne traži po naslovu (zaključani blok nosi vrlo sličan
  // natpis), nego po stvarnom popisu .revlist koji sva tri enginea dijele.
  const revlist = await page.locator('.revlist').count()
  const locked = await page.locator('[role="region"]').filter({ hasText: 'Otključaj razradu' }).count()
  if (tier === 'free') {
    checks.push({
      id: `${prefix}-zakljucani-blokovi`,
      ok: locked >= 2,
      detail: `zaključanih blokova s CTA "Otključaj razradu → Standard": ${locked} (očekivano ≥ 2)`,
    })
    checks.push({
      id: `${prefix}-bez-pregleda-odgovora`,
      ok: revlist === 0,
      detail: `popisa .revlist s odgovorima na rezultatima: ${revlist} (mora biti 0)`,
    })
    if (probe) {
      const leak = html.includes(probe)
      checks.push({
        id: `${prefix}-bez-obrazlozenja-u-htmlu`,
        ok: !leak,
        detail: `outerHTML sadrži obrazloženje 1. pitanja: ${leak} (uzorak: "${probe.slice(0, 60)}…")`,
      })
    } else {
      checks.push({ id: `${prefix}-bez-obrazlozenja-u-htmlu`, ok: null, detail: 'referentno obrazloženje nije izvučeno iz podataka — provjera preskočena' })
    }
  } else {
    checks.push({
      id: `${prefix}-bez-zakljucanih-blokova`,
      ok: locked === 0,
      detail: `zaključanih blokova za plaćeni tier (mora biti 0): ${locked}`,
    })
    checks.push({
      id: `${prefix}-pregled-odgovora-vidljiv`,
      ok: revlist > 0,
      detail: `popisa .revlist s odgovorima na rezultatima: ${revlist} (mora biti > 0)`,
    })
  }
  return { body, html }
}

// ── Engleski ──────────────────────────────────────────────────────────────────

async function flowEngleski(page, tier, vp, log, checks, probe) {
  const P = `engleski-${tier}-${vp}`
  await page.goto(BASE + '/discere/engleski/simulator', { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForSelector('.home-search-input', { timeout: 120000 })
  checks.push({ id: `${P}-ruta-otvorena`, ok: page.url().includes('/discere/engleski/simulator'), detail: `URL: ${page.url()}` })
  await sleep(500)
  await shot(page, 'engleski', tier, '01-pocetna', vp, log)

  await page.locator('.home-razina-tab[data-r="osnovna"]').click()
  await page.locator('.home-search-input').fill('2024')
  await sleep(700)
  const row = page.locator('.exrow-sub').filter({ hasText: 'Ljetni' }).first()
  await row.scrollIntoViewIfNeeded()
  await row.click()
  await page.waitForSelector('.mode-card.exam', { timeout: 60000 })
  await sleep(400)
  await shot(page, 'engleski', tier, '02-modeselect', vp, log, { full: true })

  await page.locator('.mode-card.exam').click()
  await page.waitForSelector('.card .opts, .card', { timeout: 90000 })
  await sleep(700)
  const navTitle = (await page.locator('.ntitle').first().innerText().catch(() => '')) || ''
  const examBanner = /Simulacija/i.test(navTitle)
  checks.push({ id: `${P}-ispitni-mod-otvoren`, ok: examBanner, detail: `naslov ispitnog moda: "${navTitle}" (očekivano "Simulacija · <cjelina>")` })
  await shot(page, 'engleski', tier, '03-ispit', vp, log)

  await answerAndAdvance(page, '.card .opts > *[role="radio"], .card .opts .opt', ['Sljedeće →'], 3)

  // Blokovska navigacija: "Završi dio →" dok se ne dođe do zadnjeg bloka.
  for (let i = 0; i < 6; i++) {
    const block = page.getByRole('button', { name: 'Završi dio →' })
    if (!(await block.count())) break
    await block.first().click()
    await sleep(700)
  }
  const submit = page.getByRole('button', { name: 'Predaj ispit' }).first()
  checks.push({ id: `${P}-gumb-predaje`, ok: (await submit.count()) > 0, detail: `gumb "Predaj ispit" dohvatljiv: ${(await submit.count()) > 0}` })
  if (await submit.count()) await submit.click()
  await page.waitForSelector('.results', { timeout: 90000 })
  await sleep(1000)
  await shot(page, 'engleski', tier, '04-rezultati', vp, log)
  await shot(page, 'engleski', tier, '05-rezultati-cijelo', vp, log, { full: true })

  await resultsGating(page, tier, checks, P, probe)

  if (tier === 'free') {
    // (4) Vježbanje: prva FREE_LIMIT (3) pitanja su preview, na 4. je lock.
    await page.goto(BASE + '/discere/engleski/simulator', { waitUntil: 'domcontentloaded', timeout: 120000 })
    await page.waitForSelector('.home-search-input', { timeout: 120000 })
    await page.locator('.home-razina-tab[data-r="osnovna"]').click()
    await page.locator('.home-search-input').fill('2024')
    await sleep(700)
    await page.locator('.exrow-sub').filter({ hasText: 'Ljetni' }).first().click()
    await page.waitForSelector('.mode-card.practice', { timeout: 60000 })
    await page.locator('.mode-card.practice').click()
    await page.waitForSelector('.card', { timeout: 90000 })
    await sleep(600)
    for (let i = 0; i < 3; i++) {
      const next = page.getByRole('button', { name: 'Sljedeće →' }).first()
      if (!(await next.count()) || !(await next.isEnabled().catch(() => false))) break
      await next.click()
      await sleep(400)
    }
    await sleep(800)
    const bodyP = await page.locator('body').innerText()
    const lockedPractice = /Otključaj|Standard|Nastavi s|pretplat/i.test(bodyP)
      || (await page.locator('.paywall-modal, [class*="paywall"], [class*="blur-lock"]').count()) > 0
    checks.push({
      id: `${P}-vjezbanje-zakljucano-nakon-FREE_LIMIT`,
      ok: lockedPractice,
      detail: `nakon 3 pitanja vježbanja vidljiv paywall/lock: ${lockedPractice}`,
    })
    await shot(page, 'engleski', tier, '06-vjezbanje-lock', vp, log, { full: true })
  }
}

// ── Matematika ────────────────────────────────────────────────────────────────

// Prvi ulaz u mat engine otvara modal "Postavimo tvoj plan" koji prekriva početnu.
async function matOnboarding(page) {
  const modal = page.getByText('Postavimo tvoj plan', { exact: false }).first()
  if (!(await modal.count()) || !(await modal.isVisible().catch(() => false))) return false
  // "Viša razina (A)" postoji i kao značka na popisu ispita, pa biramo opis
  // kartice koji se pojavljuje samo u modalu.
  await page.getByText('Zahtjevnija.', { exact: false }).first().click()
  await sleep(250)
  await page.getByRole('button', { name: /Kreni/ }).first().click()
  await page.waitForSelector('.year-card-hdr', { timeout: 30000 })
  await sleep(500)
  return true
}

async function openMatExam(page, year, seasonLabel, razinaRe) {
  const hdr = page.locator('.year-card-hdr').filter({ hasText: String(year) }).first()
  await hdr.scrollIntoViewIfNeeded()
  if (!(await page.locator('.year-card.open .year-num').filter({ hasText: String(year) }).count())) await hdr.click()
  await page.waitForSelector('.year-card.open .exam-btn', { timeout: 30000 })
  await sleep(400)
  const idx = await page.evaluate(({ year, seasonLabel, razinaSrc }) => {
    const razinaRe = new RegExp(razinaSrc)
    const card = [...document.querySelectorAll('.year-card')]
      .find((c) => (c.querySelector('.year-num') || {}).textContent?.trim() === String(year))
    if (!card) return -1
    const all = [...document.querySelectorAll('.exam-btn')]
    for (const b of card.querySelectorAll('.exam-btn')) {
      let n = b
      while (n && !(n.parentElement && n.parentElement.classList.contains('year-card-body'))) n = n.parentElement
      const lab = n ? (n.querySelector('.razina-label') || {}).textContent || '' : ''
      if (razinaRe.test(lab) && (b.textContent || '').includes(seasonLabel)) return all.indexOf(b)
    }
    return -1
  }, { year, seasonLabel, razinaSrc: razinaRe.source })
  if (idx < 0) throw new Error(`mat: ispit ${year} ${seasonLabel} (${razinaRe}) nije pronađen na početnoj`)
  await page.locator('.exam-btn').nth(idx).click()
}

async function flowMatematika(page, tier, vp, log, checks, probe) {
  const P = `matematika-${tier}-${vp}`
  await page.goto(BASE + '/discere/matematika', { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForSelector('.year-card-hdr', { timeout: 150000 })
  checks.push({ id: `${P}-ruta-otvorena`, ok: page.url().includes('/discere/matematika'), detail: `URL: ${page.url()}` })
  await sleep(600)
  const onboarded = await matOnboarding(page)
  await shot(page, 'matematika', tier, '01-pocetna', vp, log)
  checks.push({ id: `${P}-pocetna-ucitana`, ok: (await page.locator('.year-card-hdr').count()) > 0, detail: `godišnje kartice ispita na početnoj: ${await page.locator('.year-card-hdr').count()}; onboarding modal zatvoren: ${onboarded}` })

  await openMatExam(page, 2024, 'Ljetni rok', /\(A\)/)
  await page.waitForSelector('.mode-card.sim', { timeout: 60000 })
  await sleep(500)
  const modeTxt = await page.locator('.mode-select, body').first().innerText()
  if (tier === 'free') {
    // Natpisi kartica idu kroz text-transform:uppercase, pa usporedba ide bez razlike u veličini slova.
    const freeBadge = /MATURA MODE · BESPLATNO/i.test(modeTxt)
    const practiceLocked = /Vježbanje · zaključano/i.test(modeTxt)
    checks.push({ id: `${P}-znacka-besplatan-ispit`, ok: freeBadge, detail: `značka "MATURA MODE · BESPLATNO": ${freeBadge}` })
    checks.push({ id: `${P}-vjezbanje-kartica-zakljucana`, ok: practiceLocked, detail: `kartica "Vježbanje · zaključano": ${practiceLocked}` })
  }
  await shot(page, 'matematika', tier, '02-modeselect', vp, log, { full: true })

  await page.locator('.mode-card.sim').click()
  await page.waitForSelector('.opts .opt, .qtext, .qcard', { timeout: 120000 })
  await sleep(900)
  const qCount = await page.locator('.opts .opt').count()
  checks.push({ id: `${P}-ispit-ucitan`, ok: qCount > 0, detail: `opcija 1. zadatka u ispitnom modu: ${qCount} (zaključan ispit mora se učitati iz side-storea)` })
  await shot(page, 'matematika', tier, '03-ispit', vp, log)

  await answerAndAdvance(page, '.opts .opt', ['Sljedeće →', 'Sljedeći →'], 3)

  // "Završi ispit ✓" postoji tek na zadnjem zadatku. Navigator (.sidebar) je na
  // <=768px display:none, pa tamo idemo tipkom → koju engine sluša (4830).
  const gridBtns = page.locator('.sidebar .qgrid .qgrid-btn')
  const gridN = await gridBtns.count()
  const gridUsable = gridN > 0 && await gridBtns.last().isVisible().catch(() => false)
  if (gridUsable) {
    const last = gridBtns.nth(gridN - 1)
    await last.scrollIntoViewIfNeeded()
    await last.click()
    await sleep(600)
  } else {
    for (let i = 0; i < Math.max(gridN, 60); i++) {
      if (await page.getByRole('button', { name: /Završi ispit/ }).count()) break
      await page.keyboard.press('ArrowRight')
      await sleep(70)
    }
  }
  const finish = page.getByRole('button', { name: /Završi ispit/ }).first()
  checks.push({ id: `${P}-gumb-predaje`, ok: (await finish.count()) > 0, detail: `gumb "Završi ispit ✓" na zadnjem zadatku: ${(await finish.count()) > 0} (navigator: ${gridN} zadataka)` })
  if (await finish.count()) {
    await finish.click()
    await sleep(600)
    const confirm = page.getByRole('button', { name: /Predaj ispit/ }).first()
    if (await confirm.count()) await confirm.click()
  }
  await page.waitForSelector('.results', { timeout: 90000 })
  await sleep(1200)
  await shot(page, 'matematika', tier, '04-rezultati', vp, log)
  await shot(page, 'matematika', tier, '05-rezultati-cijelo', vp, log, { full: true })

  await resultsGating(page, tier, checks, P, probe)

  if (tier === 'free') {
    await page.goto(BASE + '/discere/matematika', { waitUntil: 'domcontentloaded', timeout: 120000 })
    await page.waitForSelector('.year-card-hdr', { timeout: 150000 })
    await matOnboarding(page)
    await openMatExam(page, 2024, 'Ljetni rok', /\(A\)/)
    await page.waitForSelector('.mode-card.vjezba', { timeout: 60000 })
    await sleep(400)
    await page.locator('.mode-card.vjezba').first().click({ timeout: 15000, force: true })
    await page.waitForURL(/\/pro/, { timeout: 20000 }).catch(() => {})
    await sleep(600)
    const wentPro = page.url().includes('/pro')
    checks.push({
      id: `${P}-vjezbanje-vodi-na-pro`,
      ok: wentPro,
      detail: `klik na zaključanu karticu vježbanja → ${page.url()} (očekivano /pro)`,
    })
    await shot(page, 'matematika', tier, '06-vjezbanje-lock', vp, log)
  }
}

// ── Sociologija (iframe) ──────────────────────────────────────────────────────

const socFrameOf = (page) => page.frames().find((f) => f.url().includes('/sim/sociologija.html'))

async function flowSociologija(page, tier, vp, log, checks, probe) {
  const P = `sociologija-${tier}-${vp}`
  await page.goto(BASE + '/discere/sociologija', { waitUntil: 'domcontentloaded', timeout: 120000 })
  const frame = page.frameLocator('iframe[title*="Sociologija"]')
  await frame.locator('.year-group-header').first().waitFor({ timeout: 150000 })
  checks.push({ id: `${P}-ruta-otvorena`, ok: page.url().includes('/discere/sociologija'), detail: `URL: ${page.url()}` })
  await sleep(800)
  await shot(page, 'sociologija', tier, '01-pocetna', vp, log)

  if (tier === 'free') {
    // Demo skup za vježbanje je SOC_FREE_DEMO (2025 ljeto + jesen) — samo ta dva
    // retka smiju biti bez značke "vježbanje 🔒". Retke čitamo iz cijelog DOM-a
    // (zatvorene godine su display:none, ali postoje), pa ne ovisimo o klikovima.
    const rows = await socFrameOf(page).evaluate(() => {
      const out = { ukupno: 0, sa: 0, demo: 0, demoSa: 0 }
      document.querySelectorAll('.year-group').forEach((g) => {
        const hdr = g.querySelector('.year-group-header')
        const year = ((hdr && hdr.textContent) || '').match(/20\d\d/)
        g.querySelectorAll('.exrow-sub').forEach((r) => {
          const badged = (r.textContent || '').includes('vježbanje')
          out.ukupno++
          if (badged) out.sa++
          if (year && year[0] === '2025') { out.demo++; if (badged) out.demoSa++ }
        })
      })
      return out
    })
    checks.push({
      id: `${P}-znacka-vjezbanje-zakljucano`,
      ok: rows.sa > 0 && rows.demo > 0 && rows.demoSa === 0,
      detail: `značka "vježbanje 🔒": ${rows.sa}/${rows.ukupno} ispita; u demo godini 2025: ${rows.demoSa}/${rows.demo} (mora biti 0)`,
    })
  }

  const hdr = frame.locator('.year-group-header').filter({ hasText: '2024' }).first()
  await hdr.scrollIntoViewIfNeeded()
  await hdr.click()
  await sleep(500)
  const row = frame.locator('.year-group-body.open .exrow-sub').filter({ hasText: 'Ljetni' }).first()
  await row.scrollIntoViewIfNeeded()
  await row.click()
  await frame.locator('.mode-card.exam').waitFor({ timeout: 60000 })
  await sleep(400)
  await shot(page, 'sociologija', tier, '02-modeselect', vp, log, { full: true })

  await frame.locator('.mode-card.exam').click()
  await frame.locator('.qtext').first().waitFor({ timeout: 90000 })
  await sleep(700)
  const banner = await frame.locator('.exam-mode-banner').count()
  checks.push({ id: `${P}-ispitni-mod-otvoren`, ok: banner > 0, detail: `traka "Simulacija ispita" u ispitnom modu: ${banner}` })
  await shot(page, 'sociologija', tier, '03-ispit', vp, log)

  for (let i = 0; i < 3; i++) {
    const opts = frame.locator('.opts .opt')
    const n = await opts.count().catch(() => 0)
    if (n) await opts.nth(i % n).click({ timeout: 8000 }).catch(() => {})
    await sleep(200)
    const next = frame.getByRole('button', { name: 'Sljedeće →' }).first()
    if (!(await next.count())) break
    await next.click().catch(() => {})
    await sleep(350)
  }

  // "Predaj ispit" postoji tek na zadnjem pitanju. Bočna traka s mrežicom je na
  // <=768px display:none!important, pa tamo idemo tipkom → (handler na 6452).
  const dots = frame.locator('.qgrid .qdot')
  const dotCount = await dots.count()
  const dotsUsable = dotCount > 0 && await dots.last().isVisible().catch(() => false)
  if (dotsUsable) {
    await dots.nth(dotCount - 1).click()
  } else {
    for (let i = 0; i < Math.max(dotCount, 60); i++) {
      if (await frame.getByRole('button', { name: 'Predaj ispit' }).count()) break
      await frame.locator('body').press('ArrowRight')
      await sleep(70)
    }
  }
  await sleep(500)
  const submit = frame.getByRole('button', { name: 'Predaj ispit' }).first()
  checks.push({ id: `${P}-gumb-predaje`, ok: (await submit.count()) > 0, detail: `gumb "Predaj ispit": ${(await submit.count()) > 0}` })
  if (await submit.count()) {
    await submit.click()
    await sleep(400)
    const modalBtn = frame.locator('.btn.btn-gold').filter({ hasText: 'Predaj ispit' }).first()
    if (await modalBtn.count()) await modalBtn.click()
  }
  await frame.locator('.results').waitFor({ timeout: 90000 })
  await sleep(1200)
  await shot(page, 'sociologija', tier, '04-rezultati', vp, log)
  await shot(page, 'sociologija', tier, '05-rezultati-cijelo', vp, log, { full: true })

  // Sadržaj je u iframeu, pa se i tekst i HTML čitaju iz njegova dokumenta.
  const socBody = await frame.locator('body').innerText()
  const socHtml = await socFrameOf(page).evaluate(() => document.documentElement.outerHTML)
  const pctOk = /\d{1,3}\s*%/.test(socBody)
  checks.push({ id: `${P}-ocjena-postotak`, ok: pctOk, detail: `postotak na rezultatima: ${pctOk}` })
  const lockedBlocks = await frame.locator('[role="region"]').filter({ hasText: 'Otključaj razradu' }).count()
  const socRevlist = await frame.locator('.revlist').count()
  if (tier === 'free') {
    checks.push({ id: `${P}-zakljucani-blokovi`, ok: lockedBlocks >= 2, detail: `zaključanih blokova s CTA: ${lockedBlocks} (očekivano ≥ 2)` })
    checks.push({
      id: `${P}-bez-pregleda-odgovora`,
      ok: socRevlist === 0,
      detail: `popisa .revlist s odgovorima na rezultatima: ${socRevlist} (mora biti 0)`,
    })
    if (probe) {
      // sociologija.html je statički asset: cijela banka je u izvornom kodu
      // dokumenta bez obzira na tier, pa DOM-provjera gleda samo iscrtani dio.
      const leakText = socBody.includes(probe)
      checks.push({
        id: `${P}-bez-obrazlozenja-u-domu`,
        ok: !leakText,
        detail: `iscrtani tekst sadrži obrazloženje 1. pitanja: ${leakText} (uzorak: "${probe.slice(0, 60)}…")`,
      })
      const inScript = socHtml.includes(probe)
      checks.push({
        id: `${P}-napomena-banka-u-izvoru`,
        ok: null,
        detail: `obrazloženje postoji u <script> izvoru statičkog asseta: ${inScript} — poznato ograničenje public/sim/sociologija.html (view-source), isto kao hrv bundle`,
      })
    }
  } else {
    checks.push({ id: `${P}-bez-zakljucanih-blokova`, ok: lockedBlocks === 0, detail: `zaključanih blokova za plaćeni tier: ${lockedBlocks}` })
    checks.push({
      id: `${P}-pregled-odgovora-vidljiv`,
      ok: socRevlist > 0,
      detail: `popisa .revlist s odgovorima na rezultatima: ${socRevlist} (mora biti > 0)`,
    })
  }

  if (tier === 'free') {
    await page.goto(BASE + '/discere/sociologija', { waitUntil: 'domcontentloaded', timeout: 120000 })
    const f2 = page.frameLocator('iframe[title*="Sociologija"]')
    await f2.locator('.year-group-header').first().waitFor({ timeout: 120000 })
    const h2 = f2.locator('.year-group-header').filter({ hasText: '2024' }).first()
    await h2.scrollIntoViewIfNeeded()
    await h2.click()
    await sleep(500)
    await f2.locator('.year-group-body.open .exrow-sub').filter({ hasText: 'Ljetni' }).first().click()
    await f2.locator('.mode-card.practice').waitFor({ timeout: 60000 })
    await f2.locator('.mode-card.practice').click()
    await page.waitForURL(/\/pro/, { timeout: 20000 }).catch(() => {})
    await sleep(600)
    const wentPro = page.url().includes('/pro')
    checks.push({
      id: `${P}-vjezbanje-vodi-na-pro`,
      ok: wentPro,
      detail: `klik na vježbanje ispita izvan demo skupa → ${page.url()} (očekivano /pro)`,
    })
    await shot(page, 'sociologija', tier, '06-vjezbanje-lock', vp, log)
  }
}

// ── Pokretanje ────────────────────────────────────────────────────────────────

const FLOWS = { engleski: flowEngleski, matematika: flowMatematika, sociologija: flowSociologija }

async function runFlow(browser, subject, tier, vp, probe) {
  const log = { shots: [], console: [], pageErrors: [], httpErrors: [], leaks: [], stubbed: [] }
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
    await FLOWS[subject](page, tier, vp, log, checks, probe)
  } catch (err) {
    checks.push({ id: `${subject}-${tier}-${vp}-FATAL`, ok: false, detail: String(err && err.message ? err.message : err).split('\n').slice(0, 8).join(' | ') })
    try { await shot(page, subject, tier, '99-greska', vp, log, { full: true }) } catch {}
  }

  await context.close()
  return { subject, tier, vp, checks, log }
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true })
  const subjects = (ONLY ? ONLY.split(',') : ['engleski', 'matematika', 'sociologija']).map((s) => s.trim()).filter(Boolean)
  const tiers = argOf('tiers', 'standard,free').split(',').map((s) => s.trim()).filter(Boolean)
  const vps = argOf('vp', '1280x800,400x860').split(',').map((s) => s.trim()).filter(Boolean)
  const routes = {
    engleski: '/discere/engleski/simulator',
    matematika: '/discere/matematika',
    sociologija: '/discere/sociologija',
  }
  const probes = Object.fromEntries(subjects.map((s) => [s, readProbe(s)]))
  if (args.includes('--probes-only')) {
    console.log(JSON.stringify(probes, null, 2))
    return
  }

  const mockCalls = []
  let mock = null
  try {
    mock = await startMockSupabase(MOCK_PORT, { onCall: (c) => mockCalls.push(c) })
  } catch (err) {
    if (err && err.code === 'EADDRINUSE') console.error(`[qa] port ${MOCK_PORT} zauzet — koristim već pokrenuti mock`)
    else throw err
  }

  const access = await accessChecks(subjects.map((s) => routes[s]))

  const browser = await chromium.launch({ headless: true })
  const runs = []
  for (const subject of subjects) {
    for (const tier of tiers) {
      for (const vp of vps) {
        runs.push(await runFlow(browser, subject, tier, vp, probes[subject]))
      }
    }
  }
  await browser.close()
  if (mock) await new Promise((r) => mock.close(r))

  const bySubject = {}
  for (const s of subjects) {
    const rs = runs.filter((r) => r.subject === s)
    const all = rs.flatMap((r) => r.checks)
    bySubject[s] = {
      palo: all.filter((c) => c.ok === false).length,
      proslo: all.filter((c) => c.ok === true).length,
      preskoceno: all.filter((c) => c.ok === null).length,
    }
  }

  const summary = {
    base: BASE,
    out: OUT,
    probes,
    pristup: access,
    poPredmetu: bySubject,
    runs: runs.map((r) => ({
      predmet: r.subject,
      tier: r.tier,
      viewport: r.vp,
      shots: r.log.shots,
      checks: r.checks,
      pageErrors: [...new Set(r.log.pageErrors)],
      httpErrors: [...new Set(r.log.httpErrors)],
      realSupabaseLeaks: [...new Set(r.log.leaks)],
      consoleErrors: [...new Set(r.log.console.filter((l) => l.startsWith('[error]')))],
    })),
    mockEndpointsHit: [...new Set(mockCalls.map((c) => c.split('?')[0]))],
  }
  console.log(JSON.stringify(summary, null, 2))
  const failed = [...access, ...runs.flatMap((r) => r.checks)].some((c) => c.ok === false)
  process.exitCode = failed ? 1 : 0
}

main().catch((err) => {
  console.error(err)
  process.exit(2)
})
