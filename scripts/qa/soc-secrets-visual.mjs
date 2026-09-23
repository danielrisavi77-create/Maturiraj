// scripts/qa/soc-secrets-visual.mjs
// Vizualni QA serverske isporuke ključeva na sociologiji (ADR-001, Faza 2).
//
// Uzor je scripts/qa/eng-secrets-visual.mjs: ne provjerava se što se RENDERIRA
// (to radi discere-free-exam-visual.mjs) nego što uopće STIGNE U PREGLEDNIK.
// Zato prolaz presreće svaki mrežni odgovor i za free tvrdi da nijedno tijelo ne
// nosi `sol`/`exp`/`why`/`steps` — pravilo 2 iz docs/ADR-001-ispitni-podaci.md.
//
// SOCIOLOGIJA IMA JEDNU RAZLIKU OD ENGLESKOG i ona je razlog zbog kojeg ova
// skripta postoji odvojeno: engine nije modul nego statički asset
// public/sim/sociologija.html koji se poslužuje iz public/ i učitava u iframe.
// Zato se presreće i HTML tog asseta i tvrdi se da u njemu više NEMA literala
// `sol:` ni `exp:` — to je regresijsko sidro koje trajno sprječava da podaci
// otkotrljaju natrag u javnu datoteku. Engine usto nema nijedan `fetch`: mrežu
// drži isključivo roditelj (SociologijaClient.jsx), pa se svi dohvati vide na
// razini stranice, a ne okvira.
//
// BEZ DEV_BYPASS_EMAIL: poanta je da free korisnik prolazi sam, bez owner
// bypassa u proxy.js.
//
// Što se provjerava (redom kojim i teče):
//   1. /discere/sociologija se otvori, iframe se učita; nijedan odgovor (JSON,
//      JS chunk ni HTML asset) ne nosi ključ — za standard GET ispita ima
//      keys:"full";
//   2. pravi ispit u iframeu: timer kreće TEK nakon što pitanja stignu;
//   3. osvježavanje usred ispita → odgovori, tekuće pitanje i ROK sačuvani;
//   4. odgovori na 2-3 pitanja pa predaja; free: ocjena/postotak + ✓/✗ mrežica,
//      zaključani blokovi, bez ijednog obrazloženja u outerHTML-u iframea;
//      standard: pun pregled;
//   5. druga predaja istog ispita unutar 60 s → 429 s odbrojavanjem;
//   6. free vježbanje: demo ispit (SOC_FREE_DEMO) ima „Provjeri“ i povratnu
//      informaciju, ispit izvan demo skupa je zaključan PRIJE ijednog dohvata;
//   7. free: Pregled ispita / Vježbaj po temi / Flashcards / Ponavljanje →
//      zaključano BEZ ijednog dohvata ispita;
//   8. /sim/sociologija.html otvoren izravno (standalone) → nema banke ni
//      ispita, samo poruka da se simulator otvara kroz aplikaciju.
//
// Priprema (mock se podiže sam, dev server ne):
//   NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321 \
//   NEXT_PUBLIC_SUPABASE_ANON_KEY=<JWT-oblik string> \
//   SUPABASE_SERVICE_ROLE_KEY=<JWT-oblik string> \
//   npx next dev --webpack -p 3013
//
//   node scripts/qa/soc-secrets-visual.mjs --base http://localhost:3013 --out ./.qa-shots
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
const BASE = argOf('base', 'http://localhost:3013')
const OUT = path.resolve(argOf('out', './.qa-shots'))
const AUTH_COOKIE = `sb-${new URL(MOCK_URL).hostname.split('.')[0]}-auth-token`

/** Ispit na kojem se vozi cijeli prolaz — NIJE u SOC_FREE_DEMO. */
const TARGET = { key: '2024_ljeto', year: '2024', row: 'Ljetni' }
/** Demo ispit iz lib/exam-secrets/free-policy.js (SOC_FREE_DEMO). */
const DEMO = { key: '2025_ljeto', year: '2025', row: 'Ljetni' }

/** Polja koja po ADR-001 nikad ne smiju u klijentski payload za free korisnika. */
const SECRET_FIELDS = ['sol', 'exp', 'why', 'steps']

/** Oznake iz public/sim/sociologija.html: A–F (LL na :1792). */
const LL = ['A', 'B', 'C', 'D', 'E', 'F']

/** Statički asset koji se učitava u iframe. */
const SOC_ASSET = '/sim/sociologija.html'

const VIEWPORTS = {
  '1280x800': { width: 1280, height: 800 },
  '400x860': { width: 400, height: 860 },
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// ── Referentni tekstovi iz PODATAKA ───────────────────────────────────────────
// Obrazloženje i točan odgovor 1. pitanja ciljanog ispita: to su tekstovi koji
// za free korisnika ne smiju postojati nigdje u outerHTML-u iframea, ni u
// ijednom JS chunku, ni u samom statičkom assetu.

function readProbes(examKey) {
  const out = { exp: null, solText: null, solLetter: null }
  try {
    const secrets = JSON.parse(fs.readFileSync(path.join(ROOT, 'lib/data/soc/secrets', `${examKey}.json`), 'utf8'))
    const publicExam = JSON.parse(fs.readFileSync(path.join(ROOT, 'content/soc/exams', `${examKey}.json`), 'utf8'))
    const byId = new Map((publicExam.qs || []).map((q) => [String(q.id), q]))
    for (const [qid, entry] of Object.entries(secrets)) {
      if (!out.exp && typeof entry?.exp === 'string' && entry.exp.length >= 40) out.exp = entry.exp.slice(0, 90)
      if (!out.solText) {
        const cl = entry?.sol?.cl
        const q = byId.get(String(qid))
        const idx = typeof cl === 'string' ? LL.indexOf(cl) : -1
        const text = idx >= 0 && Array.isArray(q?.opts) ? q.opts[idx] : null
        if (typeof text === 'string' && text.length >= 12) {
          out.solText = text
          out.solLetter = cl
        }
      }
      if (out.exp && out.solText) break
    }
  } catch (err) {
    console.error('[qa] tajni store sociologije nije čitljiv:', err?.message || err)
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
 * Svaki odgovor koji stigne u karticu prolazi ovdje — uključujući HTML samog
 * asseta, koji je za sociologiju najvažniji: dok su podaci bili u njemu, jedan
 * GET bez ijedne provjere davao je svih 32 ispita s ključevima.
 *
 * JSON se razmotava i pretražuje po KLJUČU, HTML asset po LITERALU (`sol:` /
 * `exp:` — regresijsko sidro), a JS chunkovi i HTML po doslovnom obrazloženju iz
 * tajnog storea.
 */
function attachNetwork(page, log, probes) {
  page.on('response', (res) => {
    const url = res.url()
    if (!url.startsWith(BASE)) return
    const type = (res.headers()['content-type'] || '').toLowerCase()
    const isJson = type.includes('json')
    const isJs = type.includes('javascript')
    const isHtml = type.includes('html')
    if (!isJson && !isJs && !isHtml) return
    res
      .text()
      .then((text) => {
        const short = url.slice(BASE.length) || '/'
        log.seen.push({ url: short, type: isJson ? 'json' : isJs ? 'js' : 'html', bytes: text.length })

        if (isJson) {
          let parsed = null
          try { parsed = JSON.parse(text) } catch { return }
          if (url.includes('/api/sim/soc/exam/')) {
            const qs = Array.isArray(parsed?.qs) ? parsed.qs : []
            log.examFetches.push({
              url: short,
              at: Date.now(),
              keys: parsed?.keys ?? null,
              qs: qs.length,
              withSol: qs.filter((q) => q && q.sol).length,
              withExp: qs.filter((q) => q && q.exp).length,
            })
          }
          if (url.includes('/api/sim/soc/grade')) {
            log.gradeResponses.push({ status: res.status(), at: Date.now(), body: parsed })
          }
          const hit = findSecretKey(parsed)
          if (hit) log.jsonLeaks.push({ url: short, at: hit })
          return
        }

        // Statički asset: literal `sol:`/`exp:` znači da su se podaci vratili u
        // javnu datoteku. Nakon Faze 2 ih u njoj mora biti točno nula.
        if (url.includes(SOC_ASSET)) {
          const solLiterals = (text.match(/\bsol\s*:/g) || []).length
          const expLiterals = (text.match(/\bexp\s*:/g) || []).length
          log.socAsset = {
            url: short,
            bytes: text.length,
            solLiterals,
            expLiterals,
            hasProbeExp: !!(probes.exp && text.includes(probes.exp)),
          }
          if (solLiterals || expLiterals) log.assetLeaks.push({ url: short, solLiterals, expLiterals })
        }
        if (probes.exp && text.includes(probes.exp)) log.textLeaks.push(short)
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
  // Ista dva poznata kvara koja ruše i hrv/eng QA prolaz.
  await context.route('**/api/game/discere-attempts**', (route) => {
    log.stubbed.push('discere-attempts')
    return route.fulfill({ status: 204, body: '' })
  })
  await context.route('**/api/ai-simulator**', (route) =>
    route.fulfill({ status: 503, contentType: 'application/json', body: '{"error":"qa"}' }))
}

async function shot(page, tier, step, vp, log, opts = {}) {
  fs.mkdirSync(OUT, { recursive: true })
  const name = `soc-${tier}-${step}-${vp}.png`
  await page.screenshot({ path: path.join(OUT, name), fullPage: !!opts.full })
  log.shots.push(name)
}

// ── Okvir ─────────────────────────────────────────────────────────────────────

/** Frame objekt (za evaluate); frameLocator ide kroz `socFrame`. */
const socFrameOf = (page) => page.frames().find((f) => f.url().includes(SOC_ASSET))
const socFrame = (page) => page.frameLocator('iframe[title*="Sociologija"]')

async function openHome(page) {
  await page.goto(BASE + '/discere/sociologija', { waitUntil: 'domcontentloaded', timeout: 180000 })
  const frame = socFrame(page)
  await frame.locator('.year-group-header').first().waitFor({ timeout: 180000 })
  await sleep(500)
  return frame
}

/** Otvori godinu i klikni redak ispita → ModeSelect. */
async function openModeSelect(page, exam) {
  const frame = socFrame(page)
  const hdr = frame.locator('.year-group-header').filter({ hasText: exam.year }).first()
  await hdr.scrollIntoViewIfNeeded()
  await hdr.click()
  await sleep(500)
  const row = frame.locator('.year-group-body.open .exrow-sub').filter({ hasText: exam.row }).first()
  await row.scrollIntoViewIfNeeded()
  await row.click()
  await frame.locator('.mode-card.exam').waitFor({ timeout: 120000 })
  await sleep(300)
  return frame
}

async function startExam(page) {
  const frame = socFrame(page)
  await frame.locator('.mode-card.exam').click()
  await frame.locator('.qtext').first().waitFor({ timeout: 150000 })
  await sleep(500)
  return frame
}

async function nextQuestion(frame) {
  const next = frame.getByRole('button', { name: 'Sljedeće →' }).first()
  if (!(await next.count())) return false
  await next.click({ timeout: 8000 }).catch(() => {})
  await sleep(300)
  return true
}

/** Oznaka odabrane opcije tekućeg pitanja ("" kad nijedna). */
async function selectedLetter(frame) {
  const sel = frame.locator('.opts .opt.sel .optl').first()
  if (!(await sel.count())) return ''
  return (await sel.innerText().catch(() => '')).trim()
}

/** Pomakni se do prvog pitanja s ponuđenim odgovorima i odaberi drugi. */
async function pickOptionAnswer(frame, maxSteps = 12) {
  for (let steps = 0; steps <= maxSteps; steps++) {
    const opts = frame.locator('.opts .opt')
    if ((await opts.count()) > 1) {
      await opts.nth(1).click({ timeout: 8000 }).catch(() => {})
      await sleep(400)
      return { steps, letter: await selectedLetter(frame) }
    }
    if (!(await nextQuestion(frame))) break
  }
  return { steps: -1, letter: '' }
}

async function answerAndAdvance(frame, rounds) {
  for (let i = 0; i < rounds; i++) {
    const opts = frame.locator('.opts .opt')
    const n = await opts.count().catch(() => 0)
    if (n) await opts.nth(i % n).click({ timeout: 8000 }).catch(() => {})
    await sleep(250)
    if (!(await nextQuestion(frame))) break
  }
}

/**
 * Predaja. Gumb „Predaj“ stoji u navigaciji na svakom pitanju i otvara modal, pa
 * se ne mora prolistati do zadnjeg zadatka.
 */
async function submitExam(frame) {
  const nav = frame.getByRole('button', { name: 'Predaj', exact: true }).first()
  if (!(await nav.count())) return false
  await nav.click()
  await sleep(400)
  const confirm = frame.locator('.btn.btn-gold').filter({ hasText: 'Predaj ispit' }).first()
  if (!(await confirm.count())) return false
  await confirm.click()
  return true
}

/**
 * Tier-gate kakav ga engine VIDI (window.__SOC_BRIDGE__). Roditelj ga šalje
 * porukom DISCERE_CONFIG i to točno jednom — kao odgovor na DISCERE_READY — pa
 * je ovo jedino mjesto na kojem se vidi je li plaćeni korisnik doista dobio
 * otključan engine ili je handshake stigao prije nego što je useAuth saznao plan.
 */
function readBridge(page) {
  const frame = socFrameOf(page)
  if (!frame) return Promise.resolve(null)
  return frame
    .evaluate(() => {
      try {
        const b = window.__SOC_BRIDGE__ || {}
        return { tier: b.tier ?? null, lockResults: !!b.lockResults, freeExam: !!b.freeExam, allowed: b.allowed ? [...b.allowed] : null }
      } catch { return null }
    })
    .catch(() => null)
}

/** Nacrt ispita iz localStoragea iframea (disc_soc_exam_<key>_exam). */
function readDraft(page, examKey) {
  const frame = socFrameOf(page)
  if (!frame) return Promise.resolve(null)
  return frame
    .evaluate((key) => {
      try { return localStorage.getItem('disc_soc_exam_' + key + '_exam') } catch { return null }
    }, examKey)
    .catch(() => null)
}

// ── Glavni prolaz po tieru ────────────────────────────────────────────────────

async function runFlow(browser, tier, vp, probes) {
  const log = {
    shots: [], console: [], pageErrors: [], httpErrors: [], leaks: [], stubbed: [],
    seen: [], jsonLeaks: [], textLeaks: [], assetLeaks: [], socAsset: null,
    examFetches: [], gradeResponses: [],
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
    // ── (1) ulazak i statički asset ─────────────────────────────────────────
    let frame = await openHome(page)
    add('ruta-otvorena', page.url().includes('/discere/sociologija'), `URL: ${page.url()}`)
    const iframes = await page.locator('iframe[title*="Sociologija"]').count()
    const rows = await frame.locator('.exrow-sub').count()
    add(
      'iframe-ucitan',
      iframes === 1 && rows > 0,
      `iframeova sa simulatorom: ${iframes}; redaka ispita u popisu (iz SOC_EXAM_META, bez ijednog dohvata): ${rows}`,
    )
    const bridgeAtBoot = await readBridge(page)
    add(
      'bridge-config-odgovara-tieru',
      !!bridgeAtBoot && bridgeAtBoot.tier === tier && bridgeAtBoot.lockResults === (tier === 'free'),
      `window.__SOC_BRIDGE__ nakon prvog otvaranja: ${JSON.stringify(bridgeAtBoot)} (očekivano tier="${tier}",`
        + ` lockResults=${tier === 'free'})`,
    )
    await shot(page, tier, '01-pocetna', vp, log)

    const asset = log.socAsset
    add(
      'staticki-asset-bez-kljuceva',
      !!asset && asset.solLiterals === 0 && asset.expLiterals === 0 && !asset.hasProbeExp,
      asset
        ? `${asset.url} (${(asset.bytes / 1024).toFixed(0)} KB): literala "sol:" ${asset.solLiterals}, "exp:" ${asset.expLiterals},`
          + ` obrazloženje iz tajnog storea u izvoru: ${asset.hasProbeExp} (očekivano 0, 0, false)`
        : 'HTML asset nije presretnut — provjera nije izvedena',
    )

    // ── (2) pravi ispit: timer kreće tek kad pitanja stignu ─────────────────
    frame = await openModeSelect(page, TARGET)
    const timerOnModeSelect = await frame.locator('.timer').count()
    await shot(page, tier, '02-modeselect', vp, log, { full: true })

    frame = await startExam(page)
    const timerAt = Date.now()
    const timerText = ((await frame.locator('.timer').first().innerText().catch(() => '')) || '').trim()
    const banner = await frame.locator('.exam-mode-banner').count()
    add('ispitni-mod-otvoren', banner > 0, `traka „Simulacija ispita“ u ispitnom modu: ${banner}`)

    const examGet = log.examFetches.filter((f) => f.url.includes(`${TARGET.key}?mode=exam`))
    const lastExamGet = examGet[examGet.length - 1] || null
    add(
      'timer-tek-nakon-pitanja',
      !!lastExamGet && lastExamGet.at <= timerAt && /^⏱\s*(90:00|89:5\d)$/.test(timerText) && timerOnModeSelect === 0,
      `GET ispita gotov u ${lastExamGet ? new Date(lastExamGet.at).toISOString().slice(14, 23) : '—'},`
        + ` timer se pojavio u ${new Date(timerAt).toISOString().slice(14, 23)} s vrijednošću "${timerText}";`
        + ` timera na ekranu izbora moda: ${timerOnModeSelect} (očekivano 0 i puni rok 90:00)`,
    )
    if (tier === 'free') {
      add(
        'get-ispita-bez-kljuceva',
        !!lastExamGet && lastExamGet.keys === 'none' && lastExamGet.withSol === 0 && lastExamGet.withExp === 0,
        `GET ispita (mode=exam): keys=${lastExamGet?.keys}, pitanja=${lastExamGet?.qs}, sa sol=${lastExamGet?.withSol},`
          + ` sa exp=${lastExamGet?.withExp} (očekivano keys="none", 0, 0)`,
      )
    } else {
      add(
        'get-ispita-puni-kljucevi',
        !!lastExamGet && lastExamGet.keys === 'full' && lastExamGet.withSol === lastExamGet.qs,
        `GET ispita (mode=exam): keys=${lastExamGet?.keys}, sa sol=${lastExamGet?.withSol}/${lastExamGet?.qs} (očekivano keys="full", svi)`,
      )
    }
    await shot(page, tier, '03-ispit', vp, log)

    // ── (3) osvježavanje usred ispita ───────────────────────────────────────
    const before = await pickOptionAnswer(frame)
    await sleep(600)
    const draftBefore = JSON.parse((await readDraft(page, TARGET.key)) || 'null')
    const timerBefore = ((await frame.locator('.timer').first().innerText().catch(() => '')) || '').trim()

    await page.reload({ waitUntil: 'domcontentloaded', timeout: 180000 })
    await socFrame(page).locator('.year-group-header').first().waitFor({ timeout: 180000 })
    await sleep(400)
    await openModeSelect(page, TARGET)
    frame = await startExam(page)
    const bridgeAfterReload = await readBridge(page)
    add(
      'bridge-config-preziv-reload',
      !!bridgeAfterReload && bridgeAfterReload.tier === tier && bridgeAfterReload.lockResults === (tier === 'free'),
      `window.__SOC_BRIDGE__ nakon osvježavanja: ${JSON.stringify(bridgeAfterReload)} (očekivano tier="${tier}",`
        + ` lockResults=${tier === 'free'}). DISCERE_CONFIG se šalje samo kao odgovor na DISCERE_READY, pa tier koji`
        + ' u tom trenutku još nije poznat ostaje kriv do kraja sesije.',
    )
    const letterAfter = await selectedLetter(frame)
    const timerAfter = ((await frame.locator('.timer').first().innerText().catch(() => '')) || '').trim()
    const toSec = (t) => {
      const m = /(\d+):(\d\d)/.exec(t || '')
      return m ? Number(m[1]) * 60 + Number(m[2]) : null
    }
    const secBefore = toSec(timerBefore)
    const secAfter = toSec(timerAfter)
    add(
      'reload-cuva-odgovore',
      !!before.letter && letterAfter === before.letter && draftBefore
        && Object.keys(draftBefore.answers || {}).length > 0,
      `odgovor prije osvježavanja "${before.letter}" (pitanje ${before.steps + 1}), poslije "${letterAfter}";`
        + ` odgovora u nacrtu disc_soc_exam_${TARGET.key}_exam: ${Object.keys(draftBefore?.answers || {}).length}`,
    )
    add(
      'reload-cuva-rok',
      Number.isFinite(draftBefore?.deadline) && secBefore !== null && secAfter !== null && secAfter <= secBefore,
      `rok u nacrtu: ${draftBefore?.deadline ? new Date(draftBefore.deadline).toISOString().slice(11, 19) : 'nema'};`
        + ` timer prije "${timerBefore}", poslije "${timerAfter}" (poslije ne smije biti veći — inače se simulacija produljuje)`,
    )
    await shot(page, tier, '04-nakon-reloada', vp, log)

    // ── (4) odgovori i predaja ──────────────────────────────────────────────
    await answerAndAdvance(frame, 3)
    const submitted = await submitExam(frame)
    add('gumb-predaje', submitted, `predaja kroz gumb „Predaj“ + potvrdu u modalu: ${submitted}`)
    await frame.locator('.score-ring-pct').first().waitFor({ timeout: 150000 })
    await sleep(1200)
    await shot(page, tier, '05-rezultati', vp, log)
    await shot(page, tier, '06-rezultati-cijelo', vp, log, { full: true })

    const grade = log.gradeResponses[log.gradeResponses.length - 1] || null
    add(
      'ocjenjivanje-na-posluzitelju',
      !!grade && grade.status === 200 && typeof grade.body?.pct === 'number',
      `POST /api/sim/soc/grade → ${grade?.status}, pct=${grade?.body?.pct}, cor=${grade?.body?.cor}/${grade?.body?.total}, grade=${grade?.body?.grade}`,
    )
    const scoreCount = grade?.body?.scores ? Object.keys(grade.body.scores).length : 0
    add(
      'scores-po-pitanju',
      scoreCount > 0,
      `ocjenjivačka ruta vratila točno/netočno za ${scoreCount} pitanja (izvor ✓/✗ mrežice)`,
    )
    const gradeLeak = grade?.body ? findSecretKey(grade.body) : null
    add(
      'ocjena-bez-kljuceva',
      gradeLeak === null,
      `odgovor ocjenjivačke rute nosi tajno polje: ${gradeLeak ?? 'ne'}`,
    )
    add(
      'sim-progress-upisan',
      mockState.simProgress.some((r) => r.user_id === userForTier(tier).id && r.exam_key === TARGET.key),
      `redaka u sim_progress za ovog korisnika i ispit: ${mockState.simProgress.filter((r) => r.exam_key === TARGET.key).length}`
        + ' (upisuje ih poslužitelj, ne klijent)',
    )

    // outerHTML BEZ <script>/<style>: engine je jedan inline script, pa njegov
    // vlastiti izvor (`"Točan odgovor: "+q.sol.ans` u FeedbackBoxu) inače uđe u
    // svaku pretragu po tekstu i lažno prijavi curenje. Ovdje se traži ono što je
    // u DOM-u kao SADRŽAJ — uključujući čvorove koji su vizualno skriveni.
    const html = await socFrameOf(page).evaluate(() => {
      const clone = document.documentElement.cloneNode(true)
      clone.querySelectorAll('script, style').forEach((n) => n.remove())
      return clone.outerHTML
    })
    const pctText = ((await frame.locator('.score-ring-pct').first().innerText().catch(() => '')) || '').trim()
    const gradeNum = ((await frame.locator('.score-ring-num').first().innerText().catch(() => '')) || '').trim()
    add(
      'rezultati-ocjena-i-postotak',
      /^\d{1,3}%$/.test(pctText) && /^[1-5]$/.test(gradeNum),
      `prsten: ocjena "${gradeNum}", postotak "${pctText}"`,
    )
    const statLabels = await frame.locator('.results .stat .statl').allTextContents()
    const okMark = statLabels.some((s) => /^to[čc]nih$/i.test(s.trim()))
      && statLabels.some((s) => /^neto[čc]nih$/i.test(s.trim()))
    add('rezultati-tocno-netocno', okMark, `statovi na rezultatima: ${JSON.stringify(statLabels)}`)

    const revlist = await frame.locator('.revlist').count()
    const locked = await frame.locator('[role="region"]').filter({ hasText: 'Otključaj razradu' }).count()
    if (tier === 'free') {
      add('rezultati-bez-pregleda-pitanja', revlist === 0, `popisa .revlist na rezultatima: ${revlist} (mora biti 0)`)
      add('rezultati-zakljucani-blokovi', locked >= 2, `zaključanih blokova s CTA-om: ${locked} (očekivano ≥ 2)`)
      add(
        'rezultati-bez-obrazlozenja-u-htmlu',
        probes.exp ? !html.includes(probes.exp) : null,
        probes.exp
          ? `outerHTML iframea sadrži obrazloženje iz tajnog storea: ${html.includes(probes.exp)} (uzorak: "${probes.exp.slice(0, 50)}…")`
          : 'referentno obrazloženje nije izvučeno iz tajnog storea — provjera preskočena',
      )
      // Natpisi kojima engine uvodi točan odgovor. Traži se u outerHTML-u, pa se
      // hvata i sadržaj koji je u DOM-u, a vizualno skriven.
      const answerLabels = ['Točan odgovor:', '✓ Točno:', 'Točni parovi:', 'Referentni:']
      const hitLabels = answerLabels.filter((label) => html.includes(label))
      add(
        'rezultati-bez-tocnog-odgovora-u-htmlu',
        hitLabels.length === 0,
        `natpisi točnog odgovora u outerHTML-u iframea: ${hitLabels.length ? JSON.stringify(hitLabels) : 'nijedan'}`
          + (hitLabels.length
            ? ` → kontekst: ${JSON.stringify(
              hitLabels.map((label) => html.slice(Math.max(0, html.indexOf(label) - 120), html.indexOf(label) + 80)
                .replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()),
            ).slice(0, 600)}`
            : ''),
      )
      // Per-question ✓/✗: poslužitelj ga šalje u `scores`, a free ekran ga
      // iscrtava kao mrežicu (.qgrid) — jedan bit po pitanju, bez teksta pitanja,
      // ključa i obrazloženja.
      const marks = await frame.locator('.results .qgrid .qdot.cok, .results .qgrid .qdot.cbad').count()
      add(
        'rezultati-per-question-oznake',
        marks > 0,
        `vidljivih ✓/✗ oznaka po pitanju na free rezultatima: ${marks} (poslužitelj je poslao scores za ${scoreCount} pitanja)`,
      )
      const gridText = ((await frame.locator('.results .qgrid').first().innerText().catch(() => '')) || '').replace(/\s+/g, '')
      add(
        'rezultati-mrezica-bez-teksta-pitanja',
        /^[\d]*$/.test(gridText),
        `mrežica po pitanjima sadrži samo redne brojeve: ${JSON.stringify(gridText.slice(0, 80))}`,
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

    // ── (5) druga predaja istog ispita unutar 60 s ──────────────────────────
    const gradesBefore = log.gradeResponses.length
    await openHome(page)
    await openModeSelect(page, TARGET)
    frame = await startExam(page)
    await answerAndAdvance(frame, 1)
    await submitExam(frame)
    await sleep(2500)
    const gradeAgain = log.gradeResponses[log.gradeResponses.length - 1] || null
    add(
      'druga-predaja-429',
      log.gradeResponses.length > gradesBefore && gradeAgain?.status === 429,
      `druga predaja unutar 60 s → HTTP ${gradeAgain?.status} (očekivano 429); poruka rute: `
        + JSON.stringify(String(gradeAgain?.body?.error || '').slice(0, 120)),
    )
    const alertText = ((await frame.locator('[role="alert"]').first().innerText().catch(() => '')) || '').replace(/\s+/g, ' ').trim()
    const bodyText = ((await frame.locator('body').innerText().catch(() => '')) || '').replace(/\s+/g, ' ')
    if (tier === 'free') {
      // Bez ključeva rezultat može dati samo poslužitelj, pa ekran ostaje na
      // poruci s odbrojavanjem i gumbom „Pokušaj ponovno“.
      add(
        'druga-predaja-poruka-s-odbrojavanjem',
        /Predaja je moguća svakih 60 s/.test(alertText) && /Ponovna predaja moguća za \d+ s/.test(bodyText),
        `poruka korisniku: "${alertText.slice(0, 160)}"; odbrojavanje na ekranu: `
          + JSON.stringify((/Ponovna predaja moguća za \d+ s\./.exec(bodyText) || ['—'])[0]),
      )
    } else {
      // Plaćeni tier ima ključeve, pa rezultat postoji i bez poslužitelja —
      // traka mora reći da pokušaj možda nije ušao u napredak.
      add(
        'druga-predaja-traka-plaćeni',
        /Predaja je moguća svakih 60 s/.test(bodyText) && /Rezultat je izračunat na ovom uređaju/.test(bodyText),
        `traka na rezultatima: ${JSON.stringify((/Predaja je moguća[^"]{0,140}/.exec(bodyText) || ['—'])[0])}`,
      )
    }
    await shot(page, tier, '07-druga-predaja-429', vp, log)

    if (tier === 'free') {
      // ── (6) vježbanje ─────────────────────────────────────────────────────
      // SOCIOLOGIJA NIJE ENGLESKI: free vježbanje nije „prvih FREE_LIMIT pitanja
      // svakog ispita“ nego „demo ispiti u cijelosti“ (SOC_FREE_DEMO iz
      // lib/exam-secrets/free-policy.js, zatečena proizvodna politika koju drži
      // socGate). Zato se provjerava oboje: demo ispit radi s „Provjeri“, a
      // ispit izvan demo skupa je zaključan PRIJE ijednog dohvata.
      const fetchesBeforeGate = log.examFetches.length
      await openHome(page)
      await openModeSelect(page, TARGET)
      await socFrame(page).locator('.mode-card.practice').click()
      await page.waitForURL(/\/pro/, { timeout: 20000 }).catch(() => {})
      await sleep(600)
      const practiceFetches = log.examFetches.filter((f, i) => i >= fetchesBeforeGate && f.url.includes('mode=practice'))
      add(
        'vjezbanje-izvan-demo-zakljucano',
        page.url().includes('/pro') && practiceFetches.length === 0,
        `klik na vježbanje ispita ${TARGET.key} (izvan SOC_FREE_DEMO) → ${page.url()};`
          + ` dohvata s mode=practice: ${practiceFetches.length} (mora biti 0 — gate stoji prije mreže)`,
      )
      await shot(page, tier, '08-vjezbanje-gate', vp, log)

      await openHome(page)
      await openModeSelect(page, DEMO)
      await socFrame(page).locator('.mode-card.practice').click()
      frame = socFrame(page)
      await frame.locator('.qtext').first().waitFor({ timeout: 150000 })
      await sleep(600)
      const demoGet = log.examFetches.filter((f) => f.url.includes(`${DEMO.key}?mode=practice`)).pop() || null
      add(
        'vjezbanje-demo-kljucevi',
        !!demoGet && demoGet.withSol > 0,
        `GET vježbanja demo ispita ${DEMO.key}: keys=${demoGet?.keys}, s ključem ${demoGet?.withSol}/${demoGet?.qs} pitanja`
          + ' (SOC_FREE_DEMO je besplatan u cijelosti — ODLUKA 5 u free-policy.js)',
      )

      let withCheck = 0
      let withFeedback = 0
      for (let i = 0; i < 3; i++) {
        const opts = frame.locator('.opts .opt')
        if (await opts.count()) await opts.first().click().catch(() => {})
        await sleep(250)
        const check = frame.getByRole('button', { name: 'Provjeri' }).first()
        if (await check.count()) {
          withCheck++
          await check.click().catch(() => {})
          await sleep(400)
          if (await frame.locator('.fb .fbtitle').count()) withFeedback++
        }
        if (!(await nextQuestion(frame))) break
      }
      add(
        'vjezbanje-provjeri-radi',
        withCheck === 3 && withFeedback === 3,
        `gumb „Provjeri“ na ${withCheck}/3 pitanja, povratna informacija (.fb) na ${withFeedback}/3`,
      )
      await shot(page, tier, '09-vjezbanje-feedback', vp, log)

      // ── (7) alati nad cijelom bankom → zaključano, bez dohvata ────────────
      const tools = [
        { id: 'pregled', name: 'Pregled ispita' },
        { id: 'filter', name: 'Vježbaj po temi' },
        { id: 'flashcards', name: 'Flashcards' },
        { id: 'srs', name: 'Ponavljanje' },
      ]
      for (const tool of tools) {
        await openHome(page)
        const fetchesBefore = log.examFetches.length
        const card = socFrame(page).locator('.mc').filter({ hasText: tool.name }).first()
        if (!(await card.count())) {
          add(`alat-${tool.id}`, false, `kartica „${tool.name}“ nije pronađena na početnoj`)
          continue
        }
        const lockTag = await card.locator('.mtag').filter({ hasText: 'uz Standard' }).count()
        await card.scrollIntoViewIfNeeded()
        await card.click()
        await page.waitForURL(/\/pro/, { timeout: 20000 }).catch(() => {})
        await sleep(500)
        const fetched = log.examFetches.length - fetchesBefore
        add(
          `alat-${tool.id}-zakljucan`,
          page.url().includes('/pro') && lockTag > 0,
          `kartica nosi značku „🔒 uz Standard“: ${lockTag > 0}; klik vodi na ${page.url()}`,
        )
        add(
          `alat-${tool.id}-bez-dohvata`,
          fetched === 0,
          `dohvata /api/sim/soc/exam nakon klika: ${fetched} (mora biti 0 — socFeatureGate stoji prije mreže)`,
        )
        await shot(page, tier, `10-${tool.id}`, vp, log)
      }
    }

    // ── (8) standalone otvaranje statičkog asseta ───────────────────────────
    await page.goto(BASE + SOC_ASSET, { waitUntil: 'domcontentloaded', timeout: 120000 })
    await page.locator('.year-group-header').first().waitFor({ timeout: 120000 }).catch(() => {})
    await sleep(800)
    const standalone = await page.evaluate(() => {
      const out = { exams: -1, meta: -1, note: false, sol: 0, exp: 0 }
      try { out.exams = Object.keys(EXAMS).length } catch {}
      try { out.meta = SOC_EXAM_META.length } catch {}
      const html = document.documentElement.outerHTML
      out.note = /Simulator se otvara kroz aplikaciju/.test(document.body.innerText)
      out.sol = (html.match(/\bsol\s*:/g) || []).length
      out.exp = (html.match(/\bexp\s*:/g) || []).length
      return out
    })
    add(
      'standalone-bez-banke',
      standalone.exams === 0 && standalone.meta > 0 && standalone.note,
      `otvoren izravno: EXAMS ima ${standalone.exams} ispita (mora biti 0), manifest SOC_EXAM_META ${standalone.meta};`
        + ` poruka „Simulator se otvara kroz aplikaciju“: ${standalone.note}`,
    )
    add(
      'standalone-bez-kljuceva-u-domu',
      standalone.sol === 0 && standalone.exp === 0,
      `literala "sol:" u dokumentu: ${standalone.sol}, "exp:": ${standalone.exp} (očekivano 0, 0)`,
    )
    const row = page.locator('.exrow-sub').first()
    if (await row.count()) {
      await page.locator('.year-group-header').first().click().catch(() => {})
      await sleep(400)
      const openRow = page.locator('.year-group-body.open .exrow-sub').first()
      if (await openRow.count()) {
        await openRow.click().catch(() => {})
        await sleep(1200)
      }
    }
    const standaloneMsg = ((await page.locator('[role="alert"]').first().innerText().catch(() => '')) || '').replace(/\s+/g, ' ').trim()
    add(
      'standalone-ispit-nedostupan',
      /Simulator se otvara kroz aplikaciju/.test(standaloneMsg),
      `klik na ispit bez roditelja → "${standaloneMsg.slice(0, 140)}" (očekivana fail-closed poruka, bez ijednog pitanja)`,
    )
    await shot(page, tier, '11-standalone', vp, log, { full: true })

    // ── zbirna provjera presretnute mreže ───────────────────────────────────
    if (tier === 'free') {
      // Vježbanje demo ispita po ODLUCI legitimno nosi ključeve, pa je jedini
      // dopušteni pogodak upravo taj odgovor.
      const illegal = log.jsonLeaks.filter((l) => !l.url.includes('mode=practice'))
      add(
        'nijedan-json-s-kljucem',
        illegal.length === 0,
        `JSON odgovora s poljem sol/exp/why/steps izvan free vježbanja demo ispita: ${illegal.length}`
          + (illegal.length ? ` → ${illegal.slice(0, 5).map((l) => `${l.url} ${l.at}`).join('; ')}` : '')
          + `; pregledano ${log.seen.filter((s) => s.type === 'json').length} JSON odgovora`,
      )
      add(
        'nijedan-asset-ni-chunk-s-obrazlozenjem',
        probes.exp ? log.textLeaks.length === 0 : null,
        probes.exp
          ? `HTML/JS odgovora s obrazloženjem iz tajnog storea: ${log.textLeaks.length}`
            + (log.textLeaks.length ? ' → ' + [...new Set(log.textLeaks)].slice(0, 3).join(', ') : '')
            + `; pregledano ${log.seen.filter((s) => s.type === 'js').length} skripti i ${log.seen.filter((s) => s.type === 'html').length} dokumenata`
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
  const out = []
  for (const route of ['/discere/sociologija', SOC_ASSET]) {
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
      out.push({
        id: `pristup-${route === SOC_ASSET ? 'asset' : 'ruta'}-${who}`,
        ok,
        detail: `${route}: ${status}${location ? ' → ' + location : ''} (očekivano: ${who === 'gost' ? '307 /prijava' : '200'})`,
      })
    }
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
    demoIspit: DEMO.key,
    probes: { exp: probes.exp ? probes.exp.slice(0, 60) + '…' : null, sol: probes.solLetter, solText: probes.solText },
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
      socAsset: r.log.socAsset,
      examFetches: r.log.examFetches.map(({ at, ...rest }) => rest),
      gradeStatuses: r.log.gradeResponses.map((g) => g.status),
      jsonOdgovora: r.log.seen.filter((s) => s.type === 'json').length,
      jsChunkova: r.log.seen.filter((s) => s.type === 'js').length,
      htmlDokumenata: r.log.seen.filter((s) => s.type === 'html').length,
      jsonLeaks: r.log.jsonLeaks,
      textLeaks: [...new Set(r.log.textLeaks)],
      assetLeaks: r.log.assetLeaks,
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
