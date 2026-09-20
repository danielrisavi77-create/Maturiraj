// Dodatne QA provjere (a)-(d) na 400x860, standard tier.
import { chromium } from 'playwright'
import fs from 'node:fs'
import path from 'node:path'
import { startMockSupabase, makeSession, MOCK_PORT, MOCK_URL } from './hrv-sim-mock-supabase.mjs'

const args = process.argv.slice(2)
const argOf = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 && args[i + 1] ? args[i + 1] : d }
const BASE = argOf('base', 'http://localhost:3006')
const OUT = path.resolve(argOf('out', './.qa-shots'))
const SIM = '/discere/hrvatski/simulator'
const EXAM_KEY = '2019_ljeto_B'
const AUTH_COOKIE = `sb-${new URL(MOCK_URL).hostname.split('.')[0]}-auth-token`
const sleep = (ms) => new Promise(r => setTimeout(r, ms))
const checks = []
const shots = []
const add = (id, ok, detail) => { checks.push({ id, ok, detail }) }

async function shot(page, name, opts = {}) {
  fs.mkdirSync(OUT, { recursive: true })
  await page.screenshot({ path: path.join(OUT, name + '.png'), fullPage: !!opts.full })
  shots.push(name + '.png')
}

async function main() {
  let mock = null
  try { mock = await startMockSupabase(MOCK_PORT) } catch (e) { if (e.code !== 'EADDRINUSE') throw e }
  const browser = await chromium.launch({ headless: true })
  const ctx = await browser.newContext({ viewport: { width: 400, height: 860 }, locale: 'hr-HR', isMobile: true, hasTouch: true })
  await ctx.route('**/*.supabase.co/**', r => r.abort())
  await ctx.route('**/api/discere/percentile**', r => r.fulfill({ status: 200, contentType: 'application/json', body: '{"percentile":72}' }))
  await ctx.route('**/api/game/discere-attempts**', r => r.fulfill({ status: 204, body: '' }))
  const sess = makeSession('standard')
  await ctx.addInitScript(({ cookieName, sess }) => {
    const raw = JSON.stringify(sess)
    try { localStorage.setItem(cookieName, raw) } catch {}
    document.cookie = `${cookieName}=${encodeURIComponent(raw)}; path=/; max-age=21600; SameSite=Lax`
  }, { cookieName: AUTH_COOKIE, sess })
  await ctx.addCookies([{ name: AUTH_COOKIE, value: encodeURIComponent(JSON.stringify(sess)), url: BASE }])
  const page = await ctx.newPage()
  const pageErrors = []
  page.on('pageerror', e => pageErrors.push(String(e.message || e)))

  // onboarding
  await page.goto(BASE + SIM, { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForSelector('text=Dobrodošao/la u Discere', { timeout: 90000 })
  await page.getByText('4. razred — matura ove godine', { exact: true }).click()
  await page.getByRole('button', { name: 'Dalje →' }).first().click()
  await page.getByRole('button', { name: 'Preskočiti →' }).click()
  await page.getByRole('button', { name: 'Počni vježbati! 🚀' }).click()
  await page.waitForSelector('#exams', { timeout: 60000 })

  // ispitni mod
  await page.goto(`${BASE}${SIM}?s=exammode&exam=${EXAM_KEY}`, { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForSelector('.qcard', { timeout: 90000 })
  await page.waitForSelector('.exam-countdown', { state: 'detached', timeout: 25000 }).catch(() => {})
  await sleep(900)

  // -- (c) timer "100:00" u prstenu --
  const timer = await page.evaluate(() => {
    const svgs = [...document.querySelectorAll('svg[viewBox="0 0 36 36"]')]
    const svg = svgs.find(s => s.querySelector('text'))
    if (!svg) return { found: false }
    const t = svg.querySelector('text')
    const bb = t.getBBox()
    const circ = svg.querySelector('circle')
    const cx = +circ.getAttribute('cx'), cy = +circ.getAttribute('cy'), r = +circ.getAttribute('r')
    const sw = +(circ.getAttribute('stroke-width') || 0)
    const inner = r - sw / 2
    const corners = [[bb.x, bb.y], [bb.x + bb.width, bb.y], [bb.x, bb.y + bb.height], [bb.x + bb.width, bb.y + bb.height]]
    const maxDist = Math.max(...corners.map(([x, y]) => Math.hypot(x - cx, y - cy)))
    const halfChord = Math.sqrt(Math.max(0, inner * inner - Math.pow((bb.y + bb.height / 2) - cy, 2)))
    // Najgori slucaj je "100:00" (6 znakova, font-size 8) — na zaslonu ga vidimo
    // samo u prvoj sekundi ispita, pa ga mjerimo sinteticki u istom SVG-u.
    const probe = t.cloneNode(true)
    probe.setAttribute('font-size', '8')
    probe.textContent = '100:00'
    t.parentNode.appendChild(probe)
    const pb = probe.getBBox()
    const pCorners = [[pb.x, pb.y], [pb.x + pb.width, pb.y], [pb.x, pb.y + pb.height], [pb.x + pb.width, pb.y + pb.height]]
    const pMaxDist = Math.max(...pCorners.map(([x, y]) => Math.hypot(x - cx, y - cy)))
    const pHalfChord = Math.sqrt(Math.max(0, inner * inner - Math.pow((pb.y + pb.height / 2) - cy, 2)))
    probe.remove()
    return {
      found: true, text: t.textContent, fontSize: t.getAttribute('font-size') || getComputedStyle(t).fontSize,
      bbox: { x: +bb.x.toFixed(2), y: +bb.y.toFixed(2), w: +bb.width.toFixed(2), h: +bb.height.toFixed(2) },
      r, inner, maxDist: +maxDist.toFixed(2), halfWidth: +(bb.width / 2).toFixed(2), halfChord: +halfChord.toFixed(2),
      probe: {
        text: '100:00', bbox: { x: +pb.x.toFixed(2), y: +pb.y.toFixed(2), w: +pb.width.toFixed(2), h: +pb.height.toFixed(2) },
        maxDist: +pMaxDist.toFixed(2), halfWidth: +(pb.width / 2).toFixed(2), halfChord: +pHalfChord.toFixed(2),
      },
    }
  })
  add('c-timer-u-prstenu',
    !!timer.found && timer.maxDist <= timer.r && timer.halfWidth <= timer.halfChord,
    timer.found
      ? `tekst "${timer.text}" (font-size ${timer.fontSize}), bbox ${JSON.stringify(timer.bbox)}; najdalji kut od sredista ${timer.maxDist} <= r ${timer.r}; polovica sirine ${timer.halfWidth} <= polutetiva ${timer.halfChord}`
      : 'SVG prsten s tekstom nije pronaden')
  add('c-timer-100:00-u-prstenu',
    !!timer.found && timer.probe.maxDist <= timer.r && timer.probe.halfWidth <= timer.probe.halfChord,
    timer.found
      ? `sintetski "100:00" @font-size 8: bbox ${JSON.stringify(timer.probe.bbox)}; najdalji kut ${timer.probe.maxDist} <= r ${timer.r}; polovica sirine ${timer.probe.halfWidth} <= polutetiva ${timer.probe.halfChord}`
      : 'SVG prsten s tekstom nije pronaden')
  await shot(page, 'x-01-timer-prsten-400x860')
  const timerBox = await page.locator('svg[viewBox="0 0 36 36"]').first().boundingBox()
  if (timerBox) {
    const clip = { x: Math.max(0, timerBox.x - 14), y: Math.max(0, timerBox.y - 14), width: timerBox.width + 28, height: timerBox.height + 28 }
    await page.screenshot({ path: path.join(OUT, 'x-01b-timer-zoom-400x860.png'), clip })
    shots.push('x-01b-timer-zoom-400x860.png')
    // Vizualni dokaz najgoreg slucaja: privremeno upisemo "100:00" (React ga
    // vrati na sljedeci tick sekunde).
    await page.evaluate(() => {
      const svg = [...document.querySelectorAll('svg[viewBox="0 0 36 36"]')].find(s => s.querySelector('text'))
      const t = svg && svg.querySelector('text')
      if (t) { t.setAttribute('font-size', '8'); t.textContent = '100:00' }
    })
    await page.screenshot({ path: path.join(OUT, 'x-01c-timer-100-00-zoom-400x860.png'), clip })
    shots.push('x-01c-timer-100-00-zoom-400x860.png')
  }

  // -- (b) FAB biljeznice ne prekriva nijednu opciju --
  await page.waitForSelector('.sp-fab', { timeout: 30000 })
  const fab = await page.evaluate(() => {
    const f = document.querySelector('.sp-fab')
    if (!f) return { found: false }
    const r = f.getBoundingClientRect()
    // FAB je krug (border-radius:50%), pa kutovi njegova bounding boxa NISU
    // prekriveni — hit-testiranje ih propusta dalje. Uzorkujemo iskljucivo
    // tocke UNUTAR diska: srediste + dva prstena po 12 tocaka.
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2, rad = r.width / 2
    const pts = [['srediste', cx, cy]]
    for (const k of [0.55, 0.92]) {
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * 2 * Math.PI
        pts.push([`r${k}@${i * 30}°`, cx + Math.cos(a) * rad * k, cy + Math.sin(a) * rad * k])
      }
    }
    const cls = (el) => (typeof el.className === 'string' ? el.className : '') || el.tagName
    const hits = pts.map(([name, x, y]) => {
      const stack = document.elementsFromPoint(x, y)
      const i = stack.findIndex(el => el === f)
      const below = i >= 0 ? stack.slice(i + 1) : stack
      const opt = below.find(el => el.closest && el.closest('.opt'))
      return { point: name, fabNaVrhu: i === 0, below: below.slice(0, 2).map(cls).join(' < '), optIspod: opt ? cls(opt) : null }
    })
    // Obrnuta provjera: svaka opcija mora ostati dohvatljiva u svom sredistu.
    // Racunamo samo opcije koje su u tom trenutku u viewportu — one ispod ruba
    // vrati elementFromPoint kao null, a to nije zaklanjanje nego skrol.
    const opts = [...document.querySelectorAll('.opt')]
    const zaklonjene = opts.map((o, i) => {
      const b = o.getBoundingClientRect()
      const cxo = b.left + b.width / 2, cyo = b.top + b.height / 2
      if (cyo < 0 || cyo > window.innerHeight) return { i, izvanEkrana: true, dohvatljiva: true }
      const top = document.elementFromPoint(cxo, cyo)
      return { i, izvanEkrana: false, dohvatljiva: !!(top && (top === o || o.contains(top))), naVrhu: top ? cls(top) : null }
    }).filter(x => !x.dohvatljiva)
    const nav = document.querySelector('.mob-nav')
    return {
      found: true,
      rect: { top: Math.round(r.top), bottom: Math.round(r.bottom), left: Math.round(r.left), right: Math.round(r.right) },
      navTop: nav ? Math.round(nav.getBoundingClientRect().top) : null,
      hits, zaklonjene,
      optCount: opts.length,
    }
  })
  const fabBad = fab.found ? fab.hits.filter(h => h.optIspod) : []
  add('b-fab-ne-prekriva-opciju',
    !!fab.found && fabBad.length === 0,
    fab.found
      ? `.sp-fab rect ${JSON.stringify(fab.rect)}, .mob-nav top ${fab.navTop}, opcija na zaslonu: ${fab.optCount}; uzorkovano ${fab.hits.length} tocaka unutar diska, s .opt ispod: ${fabBad.length ? fabBad.map(h => h.point + ' -> ' + h.optIspod).join(', ') : 'nijedna'}`
      : '.sp-fab nije pronaden')
  // Svaku opciju dovedemo u vidno polje pa provjerimo da je na svom sredistu
  // doista ona na vrhu (a ne FAB ili donja traka).
  const discHits = async () => page.evaluate(() => {
    const f = document.querySelector('.sp-fab')
    if (!f) return []
    const r = f.getBoundingClientRect()
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2, rad = r.width / 2
    const pts = [[0, 0]]
    for (const k of [0.55, 0.92]) for (let i = 0; i < 12; i++) { const a = (i / 12) * 2 * Math.PI; pts.push([Math.cos(a) * rad * k, Math.sin(a) * rad * k]) }
    const bad = []
    for (const [dx, dy] of pts) {
      const stack = document.elementsFromPoint(cx + dx, cy + dy)
      const i = stack.findIndex(el => el === f)
      const below = i >= 0 ? stack.slice(i + 1) : stack
      if (below.some(el => el.closest && el.closest('.opt'))) bad.push(`(${Math.round(dx)},${Math.round(dy)}) @scrollY ${Math.round(window.scrollY)}`)
    }
    return bad
  })
  const optCount = await page.locator('.qcard .opts .opt').count()
  const blokirane = []
  const discBad = [...fabBad.map(h => h.point + ' @scrollY 0')]
  for (let i = 0; i < optCount; i++) {
    const o = page.locator('.qcard .opts .opt').nth(i)
    // block:'center', a ne scrollIntoViewIfNeeded: potonji skrola minimalno i
    // ostavi opciju tik uz donji rub, tj. iza fiksne trake.
    await o.evaluate((el) => el.scrollIntoView({ block: 'center' }))
    await sleep(150)
    discBad.push(...(await discHits()))
    const res = await o.evaluate((el) => {
      const b = el.getBoundingClientRect()
      const top = document.elementFromPoint(b.left + b.width / 2, b.top + b.height / 2)
      return { ok: !!(top && (top === el || el.contains(top))), naVrhu: top ? ((typeof top.className === 'string' ? top.className : '') || top.tagName) : 'null' }
    })
    let trial = 'ok'
    try { await o.click({ trial: true, timeout: 4000 }) } catch (err) { trial = String(err.message || err).split('\n')[0].slice(0, 70) }
    if (!res.ok || trial !== 'ok') blokirane.push(`#${i + 1} (na vrhu ${res.naVrhu}; probni klik: ${trial})`)
  }
  add('b-sve-opcije-dohvatljive', blokirane.length === 0,
    `opcija: ${optCount}, svaka dovedena u vidno polje; blokiranih u sredistu: ${blokirane.join(', ') || 'nijedna'}`)
  add('b-fab-ne-prekriva-opciju-ni-pri-skrolu', discBad.length === 0,
    `25 tocaka diska x ${optCount + 1} polozaja skrola; pogodaka .opt: ${discBad.slice(0, 6).join(', ') || 'nijedan'}`)
  await page.evaluate(() => window.scrollTo(0, 0))
  await sleep(200)
  add('b-fab-iznad-mob-nav',
    !!fab.found && fab.navTop != null && fab.rect.bottom <= fab.navTop,
    `FAB bottom ${fab.found ? fab.rect.bottom : '-'} vs .mob-nav top ${fab.navTop}`)
  await shot(page, 'x-02-fab-vs-opcije-400x860')

  // -- (a) mobilna donja traka --
  const nav = await page.evaluate(() => {
    const el = document.querySelector('.mob-nav')
    if (!el) return { present: false }
    const cs = getComputedStyle(el)
    const r = el.getBoundingClientRect()
    const btns = [...el.querySelectorAll('.mob-nav-btn')].map(b => ({
      label: b.getAttribute('aria-label'), text: b.textContent, disabled: b.disabled,
      h: Math.round(b.getBoundingClientRect().height),
    }))
    const pos = el.querySelector('.mob-nav-pos')
    const sub = el.querySelector('.mob-nav-sub')
    return {
      present: true, display: cs.display, visibility: cs.visibility, opacity: cs.opacity,
      rect: { top: Math.round(r.top), bottom: Math.round(r.bottom), h: Math.round(r.height) },
      unutarViewporta: r.top >= 0 && r.bottom <= window.innerHeight + 1,
      pos: pos ? pos.textContent : null, sub: sub ? sub.textContent : null,
      btns,
    }
  })
  const arrows = (nav.btns || []).filter(b => /Prethodno|Sljedec|Sljedeć/i.test(b.label || ''))
  add('a-mob-nav-vidljiva',
    !!nav.present && nav.display === 'flex' && nav.visibility === 'visible' && nav.unutarViewporta,
    `display ${nav.display}, visibility ${nav.visibility}, rect ${JSON.stringify(nav.rect)} (viewport 860), unutar viewporta ${nav.unutarViewporta}`)
  add('a-mob-nav-brojac-i-strelice',
    /^\d+\/80$/.test((nav.pos || '').trim()) && arrows.length === 2,
    `pozicija "${nav.pos}" (podnaslov "${nav.sub}"), strelice: ${arrows.map(a => a.label + (a.disabled ? ' [disabled]' : '')).join(', ') || '-'}`)
  await shot(page, 'x-03-mob-nav-400x860')

  let gridOk = false, gridDetail = ''
  try {
    await page.locator('.mob-nav-center').first().click()
    await page.waitForSelector('.mob-sheet-grid .qdot', { timeout: 15000 })
    await sleep(500)
    const n = await page.locator('.mob-sheet-grid .qdot').count()
    const sheet = await page.evaluate(() => {
      const s = document.querySelector('.mob-sheet')
      if (!s) return null
      const r = s.getBoundingClientRect()
      return { top: Math.round(r.top), bottom: Math.round(r.bottom), unutarViewporta: r.top >= 0 && r.bottom <= window.innerHeight + 1 }
    })
    const vis = await page.locator('.mob-sheet').first().isVisible()
    gridOk = n === 80 && vis && !!sheet && sheet.unutarViewporta
    gridDetail = `mrezica otvorena, .qdot: ${n}, .mob-sheet vidljiv: ${vis}, rect ${JSON.stringify(sheet)}`
    await shot(page, 'x-04-mob-nav-mrezica-400x860')
  } catch (err) { gridDetail = 'mrezica se nije otvorila: ' + (err.message || err) }
  add('a-mob-nav-otvara-mrezicu', gridOk, gridDetail)

  // Gumb ✓ (predaja) renderira se tek na ZADNJEM pitanju — skocimo tamo kroz mrezicu.
  let endDetail = '', endOk = false
  try {
    const dots = page.locator('.mob-sheet-grid .qdot')
    await dots.nth((await dots.count()) - 1).click()
    await sleep(600)
    const end = await page.evaluate(() => {
      const el = document.querySelector('.mob-nav')
      const b = el && el.querySelector('.mob-nav-end')
      const pos = el && el.querySelector('.mob-nav-pos')
      const r = el ? el.getBoundingClientRect() : null
      return {
        pos: pos ? pos.textContent : null,
        cek: b ? { text: b.textContent.trim(), label: b.getAttribute('aria-label') } : null,
        navUnutarViewporta: r ? r.top >= 0 && r.bottom <= window.innerHeight + 1 : false,
      }
    })
    endOk = !!end.cek && end.cek.text === '✓' && end.navUnutarViewporta && /^80\/80$/.test((end.pos || '').trim())
    endDetail = `na zadnjem pitanju pozicija "${end.pos}", gumb ✓: ${end.cek ? end.cek.text + ' (' + end.cek.label + ')' : 'NEMA'}, traka u viewportu: ${end.navUnutarViewporta}`
    await shot(page, 'x-04b-mob-nav-zadnje-pitanje-400x860')
  } catch (err) { endDetail = 'skok na zadnje pitanje nije uspio: ' + (err.message || err) }
  add('a-mob-nav-gumb-predaje', endOk, endDetail)

  // -- (d) filter godina --
  await page.goto(`${BASE}${SIM}?s=filter`, { waitUntil: 'domcontentloaded', timeout: 120000 })
  await page.waitForSelector('.filter-chip', { timeout: 90000 })
  await sleep(700)
  const years = await page.evaluate(() => {
    const chips = [...document.querySelectorAll('.filter-chip')].filter(c => /^\d{4}\.$/.test(c.textContent.trim()))
    const vw = document.documentElement.clientWidth
    return {
      count: chips.length,
      labels: chips.map(c => c.textContent.trim()),
      izvanViewporta: chips.filter(c => { const r = c.getBoundingClientRect(); return r.left < -0.5 || r.right > vw + 0.5 || r.width < 1 }).map(c => c.textContent.trim()),
      preMali: chips.filter(c => { const r = c.getBoundingClientRect(); return r.width < 40 || r.height < 32 }).map(c => { const r = c.getBoundingClientRect(); return c.textContent.trim() + ' ' + Math.round(r.width) + 'x' + Math.round(r.height) }),
      vw,
      scrollW: document.documentElement.scrollWidth,
    }
  })
  add('d-filter-16-godina-u-viewportu',
    years.count === 16 && years.izvanViewporta.length === 0,
    `chipova godina: ${years.count} (${years.labels.join(' ')}); izvan viewporta (${years.vw}px): ${years.izvanViewporta.join(', ') || 'nijedan'}; scrollWidth ${years.scrollW}`)
  add('d-filter-godine-dodirni-cilj',
    years.preMali.length === 0,
    `chipovi manji od 40x32: ${years.preMali.join(', ') || 'nijedan'}`)
  await shot(page, 'x-05-filter-godine-400x860', { full: true })

  const clickFails = []
  const yearChips = page.locator('.filter-chip').filter({ hasText: /^\d{4}\.$/ })
  const n = await yearChips.count()
  for (let i = 0; i < n; i++) {
    const c = yearChips.nth(i)
    const label = (await c.innerText()).trim()
    const before = await c.getAttribute('class')
    try {
      await c.scrollIntoViewIfNeeded()
      await c.click({ timeout: 4000 })
      await sleep(90)
      const after = await yearChips.nth(i).getAttribute('class')
      if (before === after) clickFails.push(`${label} (klik nije promijenio stanje)`)
    } catch (err) { clickFails.push(`${label} (${String(err.message || err).split('\n')[0].slice(0, 90)})`) }
  }
  add('d-filter-godine-klikabilne', clickFails.length === 0,
    `kliknuto ${n} chipova godina; neuspjeli: ${clickFails.join(' | ') || 'nijedan'}`)
  await shot(page, 'x-06-filter-godine-nakon-klikova-400x860', { full: true })

  await ctx.close(); await browser.close()
  if (mock) await new Promise(r => mock.close(r))
  console.log(JSON.stringify({ base: BASE, out: OUT, checks, shots, pageErrors: [...new Set(pageErrors)], timer, fab, nav, years }, null, 2))
  process.exitCode = checks.some(c => c.ok === false) ? 1 : 0
}
main().catch(e => { console.error(e); process.exit(2) })
