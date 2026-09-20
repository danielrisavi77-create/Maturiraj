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
// istovremeno poslužuje free i standard sesiju.
//
// Samostalno: node scripts/qa/hrv-sim-mock-supabase.mjs [port]

import http from 'node:http'

export const MOCK_PORT = 54321
export const MOCK_URL = `http://localhost:${MOCK_PORT}`
export const MOCK_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlzcyI6InN1cGFiYXNlLXFhIiwiaWF0IjoxNzAwMDAwMDAwLCJleHAiOjIwMDAwMDAwMDB9.qa-anon-key-signature'

export const QA_USER = {
  id: '00000000-0000-4000-8000-000000000011',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'qa.vizual@maturiraj.test',
  email_confirmed_at: '2024-01-01T00:00:00Z',
  confirmed_at: '2024-01-01T00:00:00Z',
  phone: '',
  app_metadata: { provider: 'email', providers: ['email'] },
  user_metadata: { full_name: 'QA Vizual' },
  identities: [],
  created_at: '2024-01-01T00:00:00Z',
  updated_at: '2024-01-01T00:00:00Z',
  last_sign_in_at: '2024-01-01T00:00:00Z',
  is_anonymous: false,
}

const b64url = (s) =>
  Buffer.from(s, 'utf8').toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')

/** Access token s `qa_tier` claimom — poslužitelj iz njega izvodi plan_type. */
export function makeAccessToken(tier = 'free', ttlSec = 6 * 3600) {
  const now = Math.floor(Date.now() / 1000)
  const header = { alg: 'HS256', typ: 'JWT' }
  const payload = {
    iss: `${MOCK_URL}/auth/v1`,
    sub: QA_USER.id,
    aud: 'authenticated',
    role: 'authenticated',
    email: QA_USER.email,
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
    user: QA_USER,
  }
}

function tierFromRequest(req) {
  const auth = req.headers['authorization'] || ''
  const token = auth.replace(/^Bearer\s+/i, '')
  const parts = token.split('.')
  if (parts.length !== 3) return null
  try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64url').toString('utf8'))
    if (!payload || payload.sub !== QA_USER.id) return null
    if (typeof payload.exp === 'number' && payload.exp * 1000 < Date.now()) return null
    return payload.qa_tier === 'standard' || payload.qa_tier === 'pro' ? payload.qa_tier : 'free'
  } catch {
    return null
  }
}

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-headers': '*',
  'access-control-allow-methods': 'GET,POST,PATCH,PUT,DELETE,OPTIONS',
  'access-control-expose-headers': 'content-range,x-supabase-api-version',
  'access-control-max-age': '600',
}

export function createMockSupabase({ onCall } = {}) {
  return http.createServer((req, res) => {
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

    const tier = tierFromRequest(req)
    const single = (req.headers['accept'] || '').includes('vnd.pgrst.object')

    if (url.pathname === '/auth/v1/user') {
      if (!tier) return send(401, { code: 401, error_code: 'bad_jwt', msg: 'invalid claim' })
      return send(200, QA_USER)
    }
    if (url.pathname === '/auth/v1/token') {
      return send(200, makeSession(tier || 'free'))
    }
    if (url.pathname === '/auth/v1/logout') return send(204)
    if (url.pathname.startsWith('/auth/v1/')) return send(200, {})

    if (url.pathname === '/rest/v1/profiles') {
      const row = { plan_type: tier === 'free' || !tier ? null : 'starter', pro_expires_at: null }
      return send(200, single ? row : [row])
    }
    if (url.pathname === '/rest/v1/discere_sim_state') {
      if (req.method === 'GET') return send(200, single ? { state: {} } : [{ state: {} }])
      return send(201, [])
    }
    if (url.pathname === '/rest/v1/sim_progress') {
      if (req.method === 'GET') return send(200, [])
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
