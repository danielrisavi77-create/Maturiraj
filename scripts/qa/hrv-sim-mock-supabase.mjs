// scripts/qa/hrv-sim-mock-supabase.mjs
// Minimalni lažni Supabase (GoTrue + PostgREST) za vizualni QA.
//
// Zašto poslužitelj, a ne samo page.route: /discere je zaključan u proxy.js
// (Next 16 zamjena za middleware) koji na SERVERU zove supabase.auth.getUser()
// i profiles.plan_type. Presretanje u pregledniku ne vidi taj promet, pa bi
// svaki QA prolaz završio na /prijava. Zato dev server i preglednik gledaju
// u isti lažni endpoint preko NEXT_PUBLIC_SUPABASE_URL.
//
// Port 54321 jer dev CSP (next.config.mjs) u connect-src propušta samo
// http://localhost:54321 i http://127.0.0.1:54321 uz *.supabase.co.
//
// Tier se čita iz `qa_tier` claima u access tokenu, pa isti poslužitelj
// istovremeno poslužuje free i standard sesiju. Rute iz ADR-001
// (/api/sim/<predmet>/…) tier čitaju iz BAZE preko admin klijenta, koji
// korisnikov token uopće ne nosi — zato svaki tier ima i vlastiti user id, pa
// je `subscriptions` upit odgovoriv iz `user_id` filtera (vidi QA_USERS).
//
// Stanje (rate limit, sim_progress) živi u memoriji procesa koji mock pokreće i
// dostupno je kroz `mockState` — QA skripta tako može tvrditi da je predaja
// doista upisana, a druga predaja doista odbijena.
//
// Samostalno: node scripts/qa/hrv-sim-mock-supabase.mjs [port]

import http from 'node:http'

export const MOCK_PORT = 54321
export const MOCK_URL = `http://localhost:${MOCK_PORT}`
// Ne pravi tajni ključ nego lažni JWT za lokalni mock server, sastavljen u
// runtimeu (da statička analiza tajni ne prijavi lažni pozitivac).
function base64url(input) {
  return Buffer.from(input).toString('base64url')
}

function buildMockJwt() {
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = base64url(
    JSON.stringify({
      role: 'anon',
      iss: 'supabase-qa',
      iat: 1700000000,
      exp: 2000000000,
    })
  )
  return `${header}.${payload}.qa-anon-key-signature`
}

export const MOCK_ANON_KEY = buildMockJwt()

function qaUser(id, email, fullName) {
  return {
    id,
    aud: 'authenticated',
    role: 'authenticated',
    email,
    email_confirmed_at: '2024-01-01T00:00:00Z',
    confirmed_at: '2024-01-01T00:00:00Z',
    phone: '',
    app_metadata: { provider: 'email', providers: ['email'] },
    user_metadata: { full_name: fullName },
    identities: [],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
    last_sign_in_at: '2024-01-01T00:00:00Z',
    is_anonymous: false,
  }
}

// KORISNIK PO TIERU, a ne jedan za sve. Tier se dosad čitao samo iz `qa_tier`
// claima korisnikovog tokena, ali `getUserTier` (ADR-001 rute) pita
// `subscriptions` ADMIN klijentom, koji u Authorizationu nosi service-role
// ključ — korisnikov token tamo ne postoji. Jedini podatak tog upita je
// `user_id`, pa tier mora biti izvediv iz ID-a. Usput to razdvaja i stanje:
// free i standard prolaz više ne dijele sim_progress ni kvotu predaja.
export const QA_USERS = Object.freeze({
  free: qaUser('00000000-0000-4000-8000-000000000011', 'qa.vizual@maturiraj.test', 'QA Vizual'),
  standard: qaUser('00000000-0000-4000-8000-000000000012', 'qa.standard@maturiraj.test', 'QA Standard'),
  pro: qaUser('00000000-0000-4000-8000-000000000013', 'qa.pro@maturiraj.test', 'QA Pro'),
})

/** Zatečeni izvoz: free korisnik je i dalje zadani QA korisnik. */
export const QA_USER = QA_USERS.free

/** @param {'free'|'standard'|'pro'} tier */
export function userForTier(tier) {
  return QA_USERS[tier] || QA_USERS.free
}

const TIER_BY_USER_ID = new Map(Object.entries(QA_USERS).map(([tier, user]) => [user.id, tier]))

const b64url = (s) =>
  Buffer.from(s, 'utf8').toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

/** Access token s `qa_tier` claimom — poslužitelj iz njega izvodi plan_type. */
export function makeAccessToken(tier = 'free', ttlSec = 6 * 3600) {
  const now = Math.floor(Date.now() / 1000)
  const user = userForTier(tier)
  const header = { alg: 'HS256', typ: 'JWT' }
  const payload = {
    iss: `${MOCK_URL}/auth/v1`,
    sub: user.id,
    aud: 'authenticated',
    role: 'authenticated',
    email: user.email,
    session_id: '11111111-2222-4333-8444-555555555555',
    is_anonymous: false,
    qa_tier: tier,
    iat: now,
    exp: now + ttlSec,
  }
  return `${b64url(JSON.stringify(header))}.${b64url(JSON.stringify(payload))}.${b64url('qa-signature')}`
}

export function makeSession(tier = 'free') {
  const ttl = 6 * 3600
  return {
    access_token: makeAccessToken(tier, ttl),
    token_type: 'bearer',
    expires_in: ttl,
    expires_at: Math.floor(Date.now() / 1000) + ttl,
    refresh_token: `qa-refresh-${tier}`,
    user: userForTier(tier),
  }
}

/** Korisnik iz korisnikovog access tokena; null kad ga nema ili je istekao. */
function userFromRequest(req) {
  const auth = req.headers['authorization'] || ''
  const token = auth.replace(/^Bearer\s+/i, '')
  const parts = token.split('.')
  if (parts.length !== 3) return null
  try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'))
    if (!payload || !TIER_BY_USER_ID.has(payload.sub)) return null
    if (typeof payload.exp === 'number' && payload.exp * 1000 < Date.now()) return null
    const claimed = payload.qa_tier === 'standard' || payload.qa_tier === 'pro' ? payload.qa_tier : 'free'
    // ID je mjerodavan (isti odgovor kao admin upit nad `subscriptions`); claim
    // je samo za zatečene pozivatelje koji token slažu ručno.
    const tier = TIER_BY_USER_ID.get(payload.sub) || claimed
    return { user: QA_USERS[tier], tier }
  } catch {
    return null
  }
}

/* ── stanje u memoriji ─────────────────────────────────────────────────────
   Rate limit i sim_progress su jedine tablice koje ADR-001 rute doista mijenjaju.
   Bez pamćenja bi druga predaja prošla kao prva (429 se ne bi dogodio), a
   idempotencija po attemptId ne bi imala što prepoznati. */

/** `${userId}|${route}` → trenutak zadnjeg propuštenog zahtjeva (ms). */
const rateLimit = new Map()
/** Redovi sim_progressa, redom kojim su upisani. */
const simProgress = []

export const mockState = {
  rateLimit,
  simProgress,
  reset() {
    rateLimit.clear()
    simProgress.length = 0
  },
}

/** Ista semantika kao public.ai_rate_limit_try: 0 = prošlo, inače preostali ms. */
function rateLimitTry(userId, route, windowMs) {
  const key = `${userId}|${route}`
  const now = Date.now()
  const last = rateLimit.get(key) ?? 0
  const elapsed = now - last
  if (last && elapsed < windowMs) return windowMs - elapsed
  rateLimit.set(key, now)
  return 0
}

function readBody(req) {
  return new Promise((resolve) => {
    let raw = ''
    req.on('data', (chunk) => { raw += chunk })
    req.on('end', () => {
      try { resolve(raw ? JSON.parse(raw) : null) } catch { resolve(null) }
    })
  })
}

/** PostgREST filteri koje mock razumije: `col=eq.x` i `col=in.(a,b)`. */
function matchesFilters(row, url) {
  for (const [col, expr] of url.searchParams) {
    if (['select', 'order', 'limit', 'offset', 'on_conflict', 'columns'].includes(col)) continue
    if (typeof expr !== 'string') continue
    if (expr.startsWith('eq.')) {
      if (String(row[col] ?? '') !== expr.slice(3)) return false
    } else if (expr.startsWith('in.')) {
      const list = expr.slice(3).replace(/^\(|\)$/g, '').split(',').map((s) => s.replace(/^"|"$/g, ''))
      if (!list.includes(String(row[col] ?? ''))) return false
    }
  }
  return true
}

/** Samo stupci iz `select`, jer supabase-js vraća točno njih. */
function projectRow(row, url) {
  const select = url.searchParams.get('select')
  if (!select || select === '*') return row
  const cols = select.split(',').map((s) => s.trim().split(':').pop()).filter(Boolean)
  return Object.fromEntries(cols.filter((c) => c in row).map((c) => [c, row[c]]))
}

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-headers': '*',
  'access-control-allow-methods': 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
  'access-control-expose-headers': 'content-range,x-supabase-api-version',
  'access-control-max-age': '600',
}

/** Plan koji `subscriptions`/`profiles` prijavljuju za pojedini tier. */
const PLAN_BY_TIER = { free: null, standard: 'starter', pro: 'pro' }

// Namjerno kasnjenje odgovora na upite o planu (profiles/subscriptions).
// U produkciji Supabase odgovara preko mreze, pa useAuth plan sazna TEK nakon
// nekoliko stotina milisekundi do sekunde, dok lokalni iframe handshake
// (DISCERE_READY) posalje odmah. Bez ovog kasnjenja mock odgovara u ~1 ms i
// utrka se nikad ne dogodi, pa bi QA prolaz lazno tvrdio da je tier-gate
// otporan. Ukljucuje se s QA_PLAN_DELAY_MS (npr. 1500).
const PLAN_DELAY_MS = Number(process.env.QA_PLAN_DELAY_MS || 0)
const PLAN_PATHS = new Set(['/rest/v1/profiles', '/rest/v1/subscriptions'])
const wait = (ms) => new Promise((r) => setTimeout(r, ms))

export function createMockSupabase({ onCall } = {}) {
  return http.createServer(async (req, res) => {
    const url = new URL(req.url, MOCK_URL)
    const send = (status, body, extra = {}) => {
      const payload = body === undefined ? '' : JSON.stringify(body)
      res.writeHead(status, { 'content-type': 'application/json', ...CORS, ...extra })
      res.end(payload)
    }
    if (onCall) onCall(`${req.method} ${url.pathname}${url.search}`)
    if (req.method === 'OPTIONS') {
      res.writeHead(204, CORS)
      return res.end()
    }
    if (PLAN_DELAY_MS > 0 && PLAN_PATHS.has(url.pathname)) await wait(PLAN_DELAY_MS)

    const session = userFromRequest(req)
    const tier = session ? session.tier : null
    const single = (req.headers['accept'] || '').includes('vnd.pgrst.object')

    if (url.pathname === '/auth/v1/user') {
      if (!session) return send(401, { code: 401, error_code: 'bad_jwt', msg: 'invalid claim' })
      return send(200, session.user)
    }
    if (url.pathname === '/auth/v1/token') {
      return send(200, makeSession(tier || 'free'))
    }
    if (url.pathname === '/auth/v1/logout') return send(204)
    if (url.pathname.startsWith('/auth/v1/')) return send(200, {})

    // ── RPC ──────────────────────────────────────────────────────────────────
    // Jedini RPC koji rute zovu je atomični rate limit; zove ga admin klijent,
    // pa korisnik dolazi iz tijela zahtjeva, ne iz tokena.
    if (url.pathname === '/rest/v1/rpc/ai_rate_limit_try') {
      const body = await readBody(req)
      const userId = body?.p_user_id
      const route = body?.p_route
      const windowMs = Number(body?.p_window_ms)
      if (!userId || !route || !Number.isFinite(windowMs)) {
        return send(400, { code: '22023', message: 'ai_rate_limit_try: neispravni argumenti' })
      }
      return send(200, rateLimitTry(userId, route, windowMs))
    }
    if (url.pathname.startsWith('/rest/v1/rpc/')) return send(200, null)

    // ── tablice ──────────────────────────────────────────────────────────────
    if (url.pathname === '/rest/v1/profiles') {
      const row = { plan_type: PLAN_BY_TIER[tier] ?? null, pro_expires_at: null }
      return send(200, single ? row : [row])
    }
    // Tier za ADR-001 rute: upit ide admin klijentom, pa se korisnik čita iz
    // `user_id` filtera. Free nema redak (getUserTier tada vraća 'free').
    if (url.pathname === '/rest/v1/subscriptions') {
      if (req.method !== 'GET') return send(201, [])
      const filter = url.searchParams.get('user_id') || ''
      const userId = filter.startsWith('eq.') ? filter.slice(3) : ''
      const plan = PLAN_BY_TIER[TIER_BY_USER_ID.get(userId) || 'free']
      if (!plan) return send(200, single ? null : [])
      const row = {
        id: `qa-sub-${userId.slice(-4)}`,
        plan,
        status: 'active',
        stripe_customer_id: 'cus_qa',
        stripe_subscription_id: 'sub_qa',
        current_period_end: null,
        updated_at: '2025-01-01T00:00:00Z',
      }
      return send(200, single ? row : [row])
    }
    if (url.pathname === '/rest/v1/discere_sim_state') {
      if (req.method === 'GET') return send(200, single ? { state: {} } : [{ state: {} }])
      return send(201, [])
    }
    if (url.pathname === '/rest/v1/sim_progress') {
      if (req.method === 'GET') {
        const rows = simProgress.filter((row) => matchesFilters(row, url)).map((row) => projectRow(row, url))
        return send(200, single ? (rows[0] ?? null) : rows)
      }
      if (req.method === 'POST') {
        const body = await readBody(req)
        const rows = Array.isArray(body) ? body : body ? [body] : []
        for (const row of rows) {
          // Jedinstveni indeks (user_id, attempt_id) — ruta na 23505 računa kao
          // na potvrdu idempotencije, pa ga mock mora doista vraćati.
          const dup = row.attempt_id
            && simProgress.some((r) => r.user_id === row.user_id && r.attempt_id === row.attempt_id)
          if (dup) {
            return send(409, {
              code: '23505',
              message: 'duplicate key value violates unique constraint "sim_progress_user_attempt_uniq"',
              details: null,
              hint: null,
            })
          }
          simProgress.push({ id: `qa-${simProgress.length + 1}`, created_at: new Date().toISOString(), ...row })
        }
        return send(201, [])
      }
      return send(200, [])
    }
    // Tablica rate limita (fallback put kad RPC ne postoji) — isti izvor stanja.
    if (url.pathname === '/rest/v1/ai_rate_limit') {
      if (req.method === 'GET') {
        const rows = [...rateLimit.entries()].map(([key, at]) => {
          const [user_id, route] = key.split('|')
          return { user_id, route, last_at: new Date(at).toISOString() }
        }).filter((row) => matchesFilters(row, url))
        return send(200, single ? (rows[0] ?? null) : rows)
      }
      const body = await readBody(req)
      for (const row of Array.isArray(body) ? body : body ? [body] : []) {
        if (row.user_id && row.route) rateLimit.set(`${row.user_id}|${row.route}`, Date.now())
      }
      return send(201, [])
    }
    if (url.pathname.startsWith('/rest/v1/')) {
      if (req.method === 'GET') return send(200, single ? null : [])
      return send(201, [])
    }
    return send(200, single ? null : [])
  })
}

export function startMockSupabase(port = MOCK_PORT, opts) {
  const server = createMockSupabase(opts)
  return new Promise((resolve, reject) => {
    server.once('error', reject)
    // Bez hosta — Node na Windowsu "localhost" zna razriješiti u ::1, pa
    // vezanje samo na 127.0.0.1 ostavi serverski fetch bez odgovora.
    server.listen(port, () => resolve(server))
  })
}

const isMain = process.argv[1] && process.argv[1].endsWith('hrv-sim-mock-supabase.mjs')
if (isMain) {
  const port = Number(process.argv[2] || MOCK_PORT)
  startMockSupabase(port, { onCall: (c) => console.log('[mock]', c) }).then(() => {
    console.log(`[mock] Supabase mock sluša na http://localhost:${port}`)
  })
}
