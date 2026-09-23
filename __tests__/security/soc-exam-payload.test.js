import { readFileSync } from 'node:fs'
import path from 'node:path'
import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * ADR-001, Faza 2 — sociologija kroz ZAJEDNIČKE rute, sa STVARNIM podacima.
 *
 * __tests__/security/exam-secrets-routes.test.js dokazuje ugovor ruta nad lažnim
 * adapterom. Ovdje se dokazuje da je sociologija doista priključena na taj
 * ugovor: pravi adapter, pravi javni payload iz content/soc/exams/ i pravi tajni
 * store iz lib/data/soc/secrets/.
 *
 * Odluke vlasnika koje se ovdje provjeravaju:
 *   (1) free nakon predaje dobiva `scores` po pitanju, ali NIKAD sol/exp
 *   (3) plaćeni tier dobiva keys:"full"
 *   (5) free vježbanje pravog ispita nosi ključ za prvih FREE_LIMIT pitanja
 *       (demo ispiti iz SOC_FREE_DEMO i dalje u cijelosti — zatečena politika)
 */

const SUBJECT = 'soc'
const DEMO_EXAM = '2025_ljeto' // SOC_FREE_DEMO — vježbanje besplatno u cijelosti
const PAID_EXAM = '2024_ljeto' // nije demo

const ROOT = path.resolve(__dirname, '..', '..')
const publicExam = JSON.parse(readFileSync(path.join(ROOT, 'content', 'soc', 'exams', `${PAID_EXAM}.json`), 'utf8'))
const secretStore = JSON.parse(readFileSync(path.join(ROOT, 'lib', 'data', 'soc', 'secrets', `${PAID_EXAM}.json`), 'utf8'))

const mocks = vi.hoisted(() => ({
  createClient: vi.fn(),
  getUserTier: vi.fn(),
  checkRateLimit: vi.fn(),
}))

vi.mock('@/lib/supabase/server', () => ({ createClient: mocks.createClient }))
vi.mock('@/lib/billing/subscriptions', () => ({ getUserTier: mocks.getUserTier }))
vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: mocks.checkRateLimit,
  consumeRateLimitSlots: async (userId, slots, keyFor, windowMs) => {
    let soonest = Number.POSITIVE_INFINITY
    for (const slot of slots) {
      const res = await mocks.checkRateLimit(userId, keyFor(slot), windowMs)
      if (!res.limited) return { ok: true, retryAfterSec: 0 }
      soonest = Math.min(soonest, res.retryAfterSec || 0)
    }
    return { ok: false, retryAfterSec: Number.isFinite(soonest) ? soonest : 60 }
  },
}))

function makeSupabase({ user = { id: 'u1' } } = {}) {
  const inserts = []
  const from = vi.fn(() => {
    const query = {}
    for (const method of ['select', 'eq', 'gte', 'lte', 'order', 'limit', 'in']) query[method] = vi.fn(() => query)
    query.maybeSingle = vi.fn(async () => ({ data: null, error: null }))
    query.insert = vi.fn((row) => {
      inserts.push(row)
      return Promise.resolve({ error: null })
    })
    query.then = (onOk, onErr) => Promise.resolve({ data: [], error: null, count: 0 }).then(onOk, onErr)
    return query
  })
  return { inserts, client: { auth: { getUser: vi.fn(async () => ({ data: { user }, error: null })) }, from } }
}

async function loadRoutes() {
  const registry = await import('@/lib/exam-secrets/registry')
  registry.resetRegistry()
  registry.registerBuiltInSubjects()
  const exam = await import('@/app/api/sim/[subject]/exam/[examKey]/route')
  const grade = await import('@/app/api/sim/[subject]/grade/route')
  const policy = await import('@/lib/exam-secrets/free-policy')
  return { GET: exam.GET, POST: grade.POST, FREE_LIMIT: policy.FREE_LIMIT, SOC_FREE_DEMO: policy.SOC_FREE_DEMO }
}

function getRequest(examKey, mode) {
  const url = `http://localhost/api/sim/${SUBJECT}/exam/${examKey}${mode ? `?mode=${mode}` : ''}`
  return [new Request(url), { params: { subject: SUBJECT, examKey } }]
}

function postRequest(body) {
  const request = new Request(`http://localhost/api/sim/${SUBJECT}/grade`, { method: 'POST', body: JSON.stringify(body) })
  return [request, { params: { subject: SUBJECT } }]
}

/** Odgovori koji su svi TOČNI prema tajnom storeu — očekivani rezultat je 100 %. */
function perfectAnswers() {
  const answers = {}
  for (const q of publicExam.qs) {
    const sol = secretStore[q.id]?.sol
    if (!sol) continue
    if (q.type === 'mc') answers[q.id] = sol.cl
    else if (q.type === 'ms') answers[q.id] = sol.cls
    else if (q.type === 'mat') answers[q.id] = Object.fromEntries(sol.pairs.map((p) => [p.l, p.r]))
    else if (q.type === 'fb') answers[q.id] = sol.ans
  }
  return answers
}

let rateLimitSeen = new Set()

beforeEach(() => {
  vi.clearAllMocks()
  vi.resetModules()
  mocks.getUserTier.mockResolvedValue('free')
  rateLimitSeen = new Set()
  mocks.checkRateLimit.mockImplementation(async (userId, route) => {
    const key = `${userId}|${route}`
    if (rateLimitSeen.has(key)) return { limited: true, retryAfterSec: 42 }
    rateLimitSeen.add(key)
    return { limited: false, retryAfterSec: 0 }
  })
  mocks.createClient.mockResolvedValue(makeSupabase().client)
})

describe('GET /api/sim/soc/exam/[examKey]', () => {
  it('gost dobiva 401 — statički asset više nije put do podataka', async () => {
    mocks.createClient.mockResolvedValue(makeSupabase({ user: null }).client)
    const { GET } = await loadRoutes()
    const res = await GET(...getRequest(PAID_EXAM, 'exam'))
    expect(res.status).toBe(401)
  })

  it('free u ISPITNOM modu ne dobiva nijedan ključ (keys:"none")', async () => {
    const { GET } = await loadRoutes()
    const res = await GET(...getRequest(PAID_EXAM, 'exam'))
    const raw = await res.text()
    const payload = JSON.parse(raw)

    expect(res.status).toBe(200)
    expect(payload.keys).toBe('none')
    expect(payload.qs).toHaveLength(publicExam.qs.length)
    expect(raw).not.toContain('"sol"')
    expect(raw).not.toContain('"exp"')

    // Stvarni ključ i stvarno obrazloženje kao sentinele — ne samo imena polja.
    const withExp = publicExam.qs.find((q) => secretStore[q.id]?.exp)
    expect(raw).not.toContain(secretStore[withExp.id].exp)
    const mc = publicExam.qs.find((q) => q.type === 'mc' && secretStore[q.id]?.sol?.cl)

    for (const question of payload.qs) {
      expect(question.sol).toBeUndefined()
      expect(question.exp).toBeUndefined()
      expect(question.q).toBeTruthy() // tekst zadatka je javni NCVVO materijal
    }
    // …a pitanje i dalje ima sve što treba za rješavanje.
    const delivered = payload.qs.find((q) => q.id === mc.id)
    expect(delivered.opts).toEqual(mc.opts)
  })

  it('free u VJEŽBANJU dobiva ključ samo za prvih FREE_LIMIT pitanja (keys:"partial")', async () => {
    const { GET, FREE_LIMIT } = await loadRoutes()
    const res = await GET(...getRequest(PAID_EXAM, 'practice'))
    const payload = await res.json()

    expect(payload.keys).toBe('partial')
    const withKeys = payload.qs.filter((q) => q.sol)
    expect(withKeys).toHaveLength(FREE_LIMIT)
    expect(payload.qs.slice(FREE_LIMIT).every((q) => !q.sol && !q.exp)).toBe(true)
  })

  it('free u VJEŽBANJU demo ispita dobiva sve ključeve (zatečena politika socGate)', async () => {
    const { GET, SOC_FREE_DEMO } = await loadRoutes()
    expect(SOC_FREE_DEMO).toContain(DEMO_EXAM)

    const res = await GET(...getRequest(DEMO_EXAM, 'practice'))
    const payload = await res.json()
    expect(payload.keys).toBe('full')
  })

  it('plaćeni tier dobiva keys:"full" i u ispitnom modu', async () => {
    mocks.getUserTier.mockResolvedValue('standard')
    const { GET } = await loadRoutes()
    const res = await GET(...getRequest(PAID_EXAM, 'exam'))
    const payload = await res.json()

    expect(payload.keys).toBe('full')
    expect(payload.qs.every((q) => q.sol || secretStore[q.id]?.sol === undefined)).toBe(true)
    expect(payload.meta.durationSec).toBe(5400)
    expect(payload.meta.fullLabel).toBe(publicExam.meta.fullLabel)
  })

  it('tier se čita iz baze, ne iz query stringa', async () => {
    const { GET } = await loadRoutes()
    const request = new Request(`http://localhost/api/sim/${SUBJECT}/exam/${PAID_EXAM}?mode=exam&tier=pro`)
    const res = await GET(request, { params: { subject: SUBJECT, examKey: PAID_EXAM } })
    const payload = await res.json()
    expect(payload.keys).toBe('none')
  })

  it('odgovor nosi private/no-store i Vary: Cookie', async () => {
    const { GET } = await loadRoutes()
    const res = await GET(...getRequest(PAID_EXAM, 'exam'))
    expect(res.headers.get('Cache-Control')).toBe('private, no-store')
    expect(res.headers.get('Vary')).toBe('Cookie')
  })

  it('nepostojeći ispit daje 404, a ne 500', async () => {
    const { GET } = await loadRoutes()
    const res = await GET(...getRequest('1999_ljeto', 'exam'))
    expect(res.status).toBe(404)
  })
})

describe('POST /api/sim/soc/grade', () => {
  it('free dobiva scores po pitanju, ali nijedan ključ ni razradu po temama', async () => {
    const { POST } = await loadRoutes()
    const res = await POST(...postRequest({
      examKey: PAID_EXAM, answers: perfectAnswers(), examMode: true, attemptId: 'soc-attempt-0001',
    }))
    const raw = await res.text()
    const body = JSON.parse(raw)

    expect(res.status).toBe(200)
    expect(body.pct).toBe(100)
    expect(body.grade).toBe(5)
    expect(body.cor).toBe(body.total)
    expect(body.bodovi).toBeNull() // sociologija nema bodove po pitanju
    expect(body.xpGain).toBeGreaterThan(0)

    // ODLUKA (1): točno/netočno po pitanju DA, ključ NE.
    expect(Object.keys(body.scores).length).toBe(publicExam.qs.length)
    expect(body.topicBreakdown).toBeUndefined()
    expect(raw).not.toContain('"sol"')
    expect(raw).not.toContain('"exp"')
    const withExp = publicExam.qs.find((q) => secretStore[q.id]?.exp)
    expect(raw).not.toContain(secretStore[withExp.id].exp)
  })

  it('sa/es pitanja su u scores kao null (ručno ocjenjivanje), ne kao netočna', async () => {
    const { POST } = await loadRoutes()
    const res = await POST(...postRequest({
      examKey: PAID_EXAM, answers: perfectAnswers(), examMode: true, attemptId: 'soc-attempt-0002',
    }))
    const body = await res.json()

    const manual = publicExam.qs.filter((q) => q.type === 'sa' || q.type === 'es')
    expect(manual.length).toBeGreaterThan(0)
    for (const q of manual) expect(body.scores[q.id]).toBeNull()
    expect(body.total).toBe(publicExam.qs.length - manual.length)
  })

  it('ruta SAMA upisuje sim_progress (ODLUKA 2) — bez razine, s punim nazivom', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes()

    await POST(...postRequest({
      examKey: PAID_EXAM, answers: perfectAnswers(), examMode: true, attemptId: 'soc-attempt-0003', durationSec: 1234,
    }))

    expect(supabase.inserts).toHaveLength(1)
    const row = supabase.inserts[0]
    expect(row.subject).toBe('soc')
    expect(row.exam_key).toBe(PAID_EXAM)
    expect(row.exam_label).toBe(publicExam.meta.fullLabel)
    expect(row.razina).toBeNull() // sociologija nema razinu
    expect(row.pct).toBe(100)
    expect(row.duration_sec).toBe(1234)
    expect(row.attempt_id).toBe('soc-attempt-0003')
    // topic_breakdown se upisuje i za free, iako mu ne izlazi u odgovoru.
    expect(Object.keys(row.topic_breakdown).length).toBeGreaterThan(0)
  })

  it('plaćeni tier uz scores dobiva i topicBreakdown', async () => {
    mocks.getUserTier.mockResolvedValue('pro')
    const { POST } = await loadRoutes()
    const res = await POST(...postRequest({
      examKey: PAID_EXAM, answers: perfectAnswers(), examMode: true, attemptId: 'soc-attempt-0004',
    }))
    const body = await res.json()
    expect(body.topicBreakdown).toBeTruthy()
    expect(Object.keys(body.topicBreakdown).length).toBeGreaterThan(0)
  })

  it('prazna predaja daje 0 % i ocjenu 1, bez iznimke', async () => {
    const { POST } = await loadRoutes()
    const res = await POST(...postRequest({
      examKey: PAID_EXAM, answers: {}, examMode: false, attemptId: 'soc-attempt-0005',
    }))
    const body = await res.json()
    expect(body.pct).toBe(0)
    expect(body.grade).toBe(1)
    expect(body.cor).toBe(0)
  })

  it('brojčani qid-evi prolaze — payload ih isporučuje kao stringove', async () => {
    // Monolit je imao id kao BROJ; ruta zadržava samo odgovore čiji je id string
    // (pickKnown), pa bi bez normalizacije svaka predaja dala nula točnih.
    expect(publicExam.qs.some((q) => /^\d+$/.test(q.id))).toBe(true)
    const { POST } = await loadRoutes()
    const res = await POST(...postRequest({
      examKey: PAID_EXAM, answers: perfectAnswers(), examMode: true, attemptId: 'soc-attempt-0006',
    }))
    const body = await res.json()
    expect(body.cor).toBeGreaterThan(0)
  })
})
