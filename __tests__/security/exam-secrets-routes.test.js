import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * ADR-001 — docs/ADR-001-ispitni-podaci.md
 *
 * Ugovor dviju zajedničkih ruta, provjeren nad LAŽNIM adapterom registriranim u
 * testu: infrastruktura se dokazuje bez ijednog pravog predmeta, pa test vrijedi
 * i prije nego engleski adapter postoji.
 *
 * Javni payload lažnog adaptera NAMJERNO još nosi sol/exp — tako se provjerava
 * da čišćenje radi ruta, a ne adapterova dobra volja. To je stanje u kojem će
 * svaki predmet biti na pola migracije.
 */

const SUBJECT = 'test'
const EXAM_KEY = '2025_ljeto_A'

const mocks = vi.hoisted(() => ({
  createClient: vi.fn(),
  getUserTier: vi.fn(),
  checkRateLimit: vi.fn(),
}))

vi.mock('@/lib/supabase/server', () => ({ createClient: mocks.createClient }))
vi.mock('@/lib/billing/subscriptions', () => ({ getUserTier: mocks.getUserTier }))
// Mjesta kvote troši consumeRateLimitSlots, pa i on mora postojati u dvojniku —
// implementiran preko istog mocka, da test vidi svaki ključ koji ruta zauzme.
vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: mocks.checkRateLimit,
  consumeRateLimitSlots: async (userId, slots, keyFor, windowMs) => {
    let soonest = Number.POSITIVE_INFINITY
    for (const slot of slots) {
      const res = await mocks.checkRateLimit(userId, keyFor(slot), windowMs)
      if (!res.limited) return { ok: true, retryAfterSec: 0 }
      soonest = Math.min(soonest, res.retryAfterSec || 0)
    }
    return {
      ok: false,
      retryAfterSec: Number.isFinite(soonest) && soonest > 0 ? soonest : Math.round(windowMs / 1000),
    }
  },
}))

/** Pitanja onako kako ih adapter danas vraća — s ključem i obrazloženjem. */
const RAW_QS = [
  { id: 'q1', type: 'mc', topic: 'Grammar', q: 'Prvo pitanje?', opts: ['a', 'b'], sol: { cl: 'a' }, exp: 'TAJNA-1' },
  { id: 'q2', type: 'mc', topic: 'Grammar', q: 'Drugo pitanje?', opts: ['a', 'b'], sol: { cl: 'b' }, exp: 'TAJNA-2' },
  { id: 'q3', type: 'mc', topic: 'Reading', q: 'Treće pitanje?', opts: ['a', 'b'], sol: { cl: 'a' }, exp: 'TAJNA-3' },
  { id: 'q4', type: 'sa', topic: 'Writing', q: 'Četvrto pitanje?', sol: { rubric: 'TAJNA-4' }, why: 'TAJNA-5' },
]

const SECRETS = {
  q1: { type: 'mc', topic: 'Grammar', sol: { cl: 'a' }, exp: 'TAJNA-1' },
  q2: { type: 'mc', topic: 'Grammar', sol: { cl: 'b' }, exp: 'TAJNA-2' },
  q3: { type: 'mc', topic: 'Reading', sol: { cl: 'a' }, exp: 'TAJNA-3' },
  q4: { type: 'sa', topic: 'Writing', sol: { rubric: 'TAJNA-4' }, why: 'TAJNA-5' },
}

/** Sve tajne vrijednosti kojih u odgovoru za free korisnika ne smije biti. */
const SENTINELS = ['TAJNA-1', 'TAJNA-2', 'TAJNA-3', 'TAJNA-4', 'TAJNA-5', '"sol"', '"exp"', '"why"']

function fakeScore(qs, secrets, answers) {
  const scores = {}
  let cor = 0
  let total = 0
  for (const question of qs) {
    const key = secrets[question.id]?.sol?.cl
    if (key == null) {
      scores[question.id] = null // ručno ocjenjivo
      continue
    }
    total += 1
    const ok = answers?.[question.id] === key
    scores[question.id] = ok
    if (ok) cor += 1
  }
  const pct = total ? Math.round((cor / total) * 100) : 0
  return {
    scores,
    cor,
    total,
    pct,
    grade: pct >= 55 ? 'dobar' : 'nedovoljan',
    bodovi: cor,
    xpGain: cor * 10,
    topicBreakdown: { Grammar: { correct: cor, total } },
  }
}

function makeAdapter(overrides = {}) {
  return {
    loadPublic: vi.fn(async (key) =>
      key === EXAM_KEY
        ? { key, meta: { label: '2025 — Ljeto A', razina: 'A', year: 2025 }, texts: { t1: 'Ulomak.' }, qs: RAW_QS }
        : null,
    ),
    loadSecrets: vi.fn(async (key) => (key === EXAM_KEY ? SECRETS : null)),
    allowedExamKeys: vi.fn(() => new Set([EXAM_KEY])),
    score: vi.fn(fakeScore),
    ...overrides,
  }
}

/**
 * Supabase dvojnik. Lanac (.select().eq()….gte()) je thenable i razrješava se u
 * { data, error, count }; .maybeSingle() vraća `prior`; .insert() bilježi redak.
 */
function makeSupabase({ user = { id: 'u1' }, count = 0, prior = null, insertError = null } = {}) {
  const inserts = []
  const from = vi.fn(() => {
    const query = {}
    for (const method of ['select', 'eq', 'gte', 'lte', 'order', 'limit', 'in']) {
      query[method] = vi.fn(() => query)
    }
    query.maybeSingle = vi.fn(async () => ({ data: prior, error: null }))
    query.insert = vi.fn((row) => {
      inserts.push(row)
      return Promise.resolve({ error: insertError })
    })
    query.then = (onOk, onErr) => Promise.resolve({ data: [], error: null, count }).then(onOk, onErr)
    return query
  })
  return {
    inserts,
    from,
    client: { auth: { getUser: vi.fn(async () => ({ data: { user }, error: null })) }, from },
  }
}

/**
 * Ista registracija, ali vraća i konstante politike.
 *
 * Konstante NISU u datoteci rute: Next iz datoteke rute prihvaća samo HTTP
 * metode i poznate konfiguracijske izvoze, pa je svaki dodatni `export` greška
 * builda. Žive u lib/exam-secrets/grade-policy.js i test ih uzima odande.
 */
async function loadGradeRoute(adapter) {
  const registry = await import('@/lib/exam-secrets/registry')
  registry.resetRegistry()
  if (adapter) registry.registerSubject(SUBJECT, adapter)
  const route = await import('@/app/api/sim/[subject]/grade/route')
  const policy = await import('@/lib/exam-secrets/grade-policy')
  return { ...policy, POST: route.POST }
}

async function loadRoutes(adapter) {
  const registry = await import('@/lib/exam-secrets/registry')
  registry.resetRegistry()
  if (adapter) registry.registerSubject(SUBJECT, adapter)
  const exam = await import('@/app/api/sim/[subject]/exam/[examKey]/route')
  const grade = await import('@/app/api/sim/[subject]/grade/route')
  return { GET: exam.GET, POST: grade.POST }
}

function getRequest(mode) {
  const url = `http://localhost/api/sim/${SUBJECT}/exam/${EXAM_KEY}${mode ? `?mode=${mode}` : ''}`
  return [new Request(url), { params: { subject: SUBJECT, examKey: EXAM_KEY } }]
}

function postRequest(body, subject = SUBJECT) {
  const request = new Request(`http://localhost/api/sim/${subject}/grade`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return [request, { params: { subject } }]
}

const baseBody = (attemptId = 'attempt-0001') => ({
  examKey: EXAM_KEY,
  answers: { q1: 'a', q2: 'a', q3: 'a', q4: 'nešto' },
  examMode: true,
  attemptId,
})

/**
 * Dvojnik checkRateLimita koji PAMTI kljuceve, kao i pravi (jedan prolaz po
 * kljucu unutar prozora). Zahvaljujuci tome se u testu jednako ponasaju sva tri
 * korisnika te funkcije u ruti: razmak od 60 s, mjesta dnevnog budzeta i otisak
 * pokusaja.
 */
let rateLimitSeen = new Set()

/** Zauzmi mjesta dnevnog budzeta prije poziva rute. */
function consumeBudget(slots, userId = 'u1') {
  for (const slot of slots) rateLimitSeen.add(userId + '|sim-grade-day:' + SUBJECT + ':' + EXAM_KEY + ':' + slot)
}

beforeEach(() => {
  vi.clearAllMocks()
  vi.resetModules()
  mocks.getUserTier.mockResolvedValue('free')
  rateLimitSeen = new Set()
  mocks.checkRateLimit.mockImplementation(async (userId, route) => {
    const key = userId + '|' + route
    if (rateLimitSeen.has(key)) return { limited: true, retryAfterSec: 42 }
    rateLimitSeen.add(key)
    return { limited: false, retryAfterSec: 0 }
  })
  mocks.createClient.mockResolvedValue(makeSupabase().client)
})

describe('GET /api/sim/[subject]/exam/[examKey]', () => {
  it('bez prijavljenog korisnika vraća 401 i ne dira adapter', async () => {
    mocks.createClient.mockResolvedValue(makeSupabase({ user: null }).client)
    const adapter = makeAdapter()
    const { GET } = await loadRoutes(adapter)

    const res = await GET(...getRequest('exam'))

    expect(res.status).toBe(401)
    expect(adapter.loadPublic).not.toHaveBeenCalled()
    expect(mocks.getUserTier).not.toHaveBeenCalled()
  })

  it('free korisnik ne dobiva ključ ni u jednom pitanju i dobiva keys:"none"', async () => {
    const adapter = makeAdapter()
    const { GET } = await loadRoutes(adapter)

    const res = await GET(...getRequest('exam'))
    const raw = await res.text()
    const payload = JSON.parse(raw)

    expect(res.status).toBe(200)
    expect(payload.keys).toBe('none')
    expect(payload.qs).toHaveLength(RAW_QS.length)
    for (const sentinel of SENTINELS) expect(raw).not.toContain(sentinel)
    for (const question of payload.qs) {
      expect(question.sol).toBeUndefined()
      expect(question.exp).toBeUndefined()
      expect(question.why).toBeUndefined()
      expect(question.q).toBeTruthy() // tekst zadatka ostaje — on je javni materijal
    }
    expect(adapter.loadSecrets).not.toHaveBeenCalled()
  })

  it('odgovor nosi private/no-store i Vary: Cookie (CDN ne smije dijeliti tier-ovisan payload)', async () => {
    const { GET } = await loadRoutes(makeAdapter())
    const res = await GET(...getRequest('exam'))

    expect(res.headers.get('Cache-Control')).toBe('private, no-store')
    expect(res.headers.get('Vary')).toBe('Cookie')
  })

  it('plaćeni korisnik dobiva pune podatke i keys:"full"', async () => {
    mocks.getUserTier.mockResolvedValue('starter')
    const { GET } = await loadRoutes(makeAdapter())

    const res = await GET(...getRequest('exam'))
    const payload = await res.json()

    expect(payload.keys).toBe('full')
    expect(payload.qs.every((question) => question.sol)).toBe(true)
    expect(payload.qs[0].exp).toBe('TAJNA-1')
    expect(payload.meta.label).toBe('2025 — Ljeto A')
    expect(payload.texts.t1).toBe('Ulomak.')
  })

  it('tier se čita iz baze, ne iz query stringa', async () => {
    const { GET } = await loadRoutes(makeAdapter())
    const request = new Request(`http://localhost/api/sim/${SUBJECT}/exam/${EXAM_KEY}?mode=exam&tier=pro&keys=full`)

    const payload = await (await GET(request, { params: { subject: SUBJECT, examKey: EXAM_KEY } })).json()

    expect(payload.keys).toBe('none')
    expect(mocks.getUserTier).toHaveBeenCalledWith('u1')
  })

  it('free vježbanje otključava TOČNO prvih FREE_LIMIT pitanja i ni jedno više', async () => {
    const { FREE_LIMIT, freeKeyAllowance } = await import('@/lib/exam-secrets/free-policy')
    const adapter = makeAdapter()
    const { GET } = await loadRoutes(adapter)

    const payload = await (await GET(...getRequest('practice'))).json()

    // ODLUKA VLASNIKA (5): namjeran, ograničen javni preview — isti onaj koji
    // paywall ionako pokazuje (dalje od FREE_LIMIT free korisnik ne može doći).
    expect(freeKeyAllowance(SUBJECT, EXAM_KEY, 'practice')).toBe(FREE_LIMIT)
    expect(payload.keys).toBe('partial')
    expect(payload.qs.filter((question) => question.sol !== undefined)).toHaveLength(FREE_LIMIT)
    // Iza granice nema ničega — ni ključa ni obrazloženja.
    for (const question of payload.qs.slice(FREE_LIMIT)) {
      expect(question.sol).toBeUndefined()
      expect(question.exp).toBeUndefined()
      expect(question.why).toBeUndefined()
    }
  })

  it('ispitni mod free korisniku ne otključava ništa ni kad vježbanje smije', async () => {
    const { freeKeyAllowance } = await import('@/lib/exam-secrets/free-policy')
    const adapter = makeAdapter()
    const { GET } = await loadRoutes(adapter)

    const res = await GET(...getRequest('exam'))
    const raw = await res.text()

    expect(freeKeyAllowance(SUBJECT, EXAM_KEY, 'exam')).toBe(0)
    expect(JSON.parse(raw).keys).toBe('none')
    for (const sentinel of SENTINELS) expect(raw).not.toContain(sentinel)
    // Tajni store se u tom slučaju uopće ne dira.
    expect(adapter.loadSecrets).not.toHaveBeenCalled()
  })

  it('free korisnik ima kvotu dohvata ispita po satu, plaćeni nema', async () => {
    const { FREE_EXAM_FETCH_LIMIT } = await import('@/lib/exam-secrets/grade-policy')
    const { GET } = await loadRoutes(makeAdapter())

    // Kvota je potrošena (svih FREE_EXAM_FETCH_LIMIT mjesta zauzeto).
    for (let slot = 0; slot < FREE_EXAM_FETCH_LIMIT; slot += 1) {
      rateLimitSeen.add(`u1|sim-exam-get:${SUBJECT}:${slot}`)
    }
    const blocked = await GET(...getRequest('practice'))
    expect(blocked.status).toBe(429)
    expect(blocked.headers.get('Retry-After')).toBe('42')

    // Isti, potpuno potrošeni prozor — plaćenog tiera se ne tiče: skupni dohvat
    // cijele banke je 70 zahtjeva i to mu je zadano ponašanje. (Drugi korisnik
    // jer se tier kešira 60 s po korisniku, kao i u produkciji.)
    mocks.getUserTier.mockResolvedValue('pro')
    mocks.createClient.mockResolvedValue(makeSupabase({ user: { id: 'u2' } }).client)
    for (let slot = 0; slot < FREE_EXAM_FETCH_LIMIT; slot += 1) {
      rateLimitSeen.add(`u2|sim-exam-get:${SUBJECT}:${slot}`)
    }
    const paid = await GET(...getRequest('practice'))
    expect(paid.status).toBe(200)
  })

  it('neregistriran predmet i nepostojeći ispit vraćaju 404', async () => {
    const adapter = makeAdapter()
    const { GET } = await loadRoutes(adapter)

    const unknownSubject = await GET(new Request('http://localhost/api/sim/hrv/exam/x'), {
      params: { subject: 'hrv', examKey: EXAM_KEY },
    })
    expect(unknownSubject.status).toBe(404)

    const unknownExam = await GET(new Request(`http://localhost/api/sim/${SUBJECT}/exam/nema_me`), {
      params: { subject: SUBJECT, examKey: 'nema_me' },
    })
    expect(unknownExam.status).toBe(404)
  })
})

describe('POST /api/sim/[subject]/grade', () => {
  it('bez prijavljenog korisnika vraća 401 i ništa ne ocjenjuje', async () => {
    const supabase = makeSupabase({ user: null })
    mocks.createClient.mockResolvedValue(supabase.client)
    const adapter = makeAdapter()
    const { POST } = await loadRoutes(adapter)

    const res = await POST(...postRequest(baseBody()))

    expect(res.status).toBe(401)
    expect(adapter.score).not.toHaveBeenCalled()
    expect(supabase.inserts).toHaveLength(0)
  })

  it('free korisnik dobiva scores po pitanju, ali ni jedan ključ ni topicBreakdown', async () => {
    const { POST } = await loadRoutes(makeAdapter())

    const res = await POST(...postRequest(baseBody()))
    const raw = await res.text()
    const payload = JSON.parse(raw)

    expect(res.status).toBe(200)
    expect(payload.scores).toEqual({ q1: true, q2: false, q3: true, q4: null })
    expect(payload).toMatchObject({ cor: 2, total: 3, pct: 67, bodovi: 2, xpGain: 20 })
    expect(payload.grade).toBe('dobar')
    expect(payload.topicBreakdown).toBeUndefined()
    for (const sentinel of SENTINELS) expect(raw).not.toContain(sentinel)
  })

  it('plaćeni korisnik dodatno dobiva topicBreakdown', async () => {
    mocks.getUserTier.mockResolvedValue('pro')
    const { POST } = await loadRoutes(makeAdapter())

    const payload = await (await POST(...postRequest(baseBody()))).json()

    expect(payload.scores).toBeTruthy()
    expect(payload.topicBreakdown).toEqual({ Grammar: { correct: 2, total: 3 } })
  })

  it('ruta sama upisuje sim_progress — jednom, s poljima iz migracije', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    await POST(...postRequest({ ...baseBody(), qTimes: { q1: 12 } }))

    expect(supabase.inserts).toHaveLength(1)
    expect(supabase.inserts[0]).toMatchObject({
      user_id: 'u1',
      subject: SUBJECT,
      exam_key: EXAM_KEY,
      exam_label: '2025 — Ljeto A',
      razina: 'A',
      pct: 67,
      grade: 'dobar',
      correct: 2,
      total: 3,
      exam_mode: true,
      q_times: { q1: 12 },
      topic_breakdown: { Grammar: { correct: 2, total: 3 } },
      attempt_id: 'attempt-0001',
    })
    expect(supabase.inserts[0].answers).toEqual(baseBody().answers)
  })

  it('druga predaja unutar 60 s vraća 429 i ne upisuje ništa', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    const first = await POST(...postRequest(baseBody('attempt-0001')))
    const second = await POST(...postRequest(baseBody('attempt-0002')))

    expect(first.status).toBe(200)
    expect(second.status).toBe(429)
    expect(second.headers.get('Retry-After')).toBe('42')
    expect(supabase.inserts).toHaveLength(1)
    expect(mocks.checkRateLimit).toHaveBeenCalledWith('u1', `sim-grade:${SUBJECT}:${EXAM_KEY}`, 60000)
  })

  it('plaćeni tier nije podložan dnevnom budžetu (budžet štiti od oraclea, a on ima ključeve)', async () => {
    mocks.getUserTier.mockResolvedValue('standard')
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { GRADE_DAILY_BUDGET, POST } = await loadGradeRoute(makeAdapter())
    consumeBudget(Array.from({ length: GRADE_DAILY_BUDGET }, (_, i) => i))

    const res = await POST(...postRequest(baseBody()))

    expect(res.status).toBe(200)
    expect(supabase.inserts).toHaveLength(1)
    // Nijedno mjesto budžeta nije ni traženo — samo razmak od 60 s i otisak pokušaja.
    const routes = mocks.checkRateLimit.mock.calls.map(([, route]) => route)
    expect(routes.some(route => route.startsWith('sim-grade-day:'))).toBe(false)
    expect(routes).toContain(`sim-grade:${SUBJECT}:${EXAM_KEY}`)
  })

  it('razmak od 60 s vrijedi i za plaćeni tier (zaštita od dvostruke predaje)', async () => {
    mocks.getUserTier.mockResolvedValue('pro')
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    const first = await POST(...postRequest(baseBody('attempt-P001')))
    const second = await POST(...postRequest(baseBody('attempt-P002')))

    expect(first.status).toBe(200)
    expect(second.status).toBe(429)
    // Retry-After nosi odbrojavanje koje klijent prikaže prije ponovne predaje.
    expect(second.headers.get('Retry-After')).toBe('42')
    expect(supabase.inserts).toHaveLength(1)
  })

  it('prekoračen dnevni budžet po (korisnik, ispit) vraća 429', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { GRADE_DAILY_BUDGET, POST } = await loadGradeRoute(makeAdapter())
    consumeBudget(Array.from({ length: GRADE_DAILY_BUDGET }, (_, i) => i))

    const res = await POST(...postRequest(baseBody()))

    expect(res.status).toBe(429)
    expect(supabase.inserts).toHaveLength(0)
  })

  it('budžet se broji u ai_rate_limit, ne u sim_progress (korisnik ga ne može obrisati)', async () => {
    // Redaka u sim_progress ima koliko god — brojanje ih više ne gleda.
    const supabase = makeSupabase({ count: 99 })
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    const res = await POST(...postRequest(baseBody()))

    expect(res.status).toBe(200)
    expect(supabase.inserts).toHaveLength(1)
    const routes = mocks.checkRateLimit.mock.calls.map(([, route]) => route)
    expect(routes.some((route) => route.startsWith('sim-grade-day:'))).toBe(true)
  })

  it('vježbanje ne smije potrošiti mjesta rezervirana za ispitni mod', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { GRADE_PRACTICE_BUDGET, POST } = await loadGradeRoute(makeAdapter())
    consumeBudget(Array.from({ length: GRADE_PRACTICE_BUDGET }, (_, i) => i))

    // Vježbanje je iscrpilo svoj dio budžeta…
    const practice = await POST(...postRequest({ ...baseBody('attempt-PRAC'), examMode: false }))
    expect(practice.status).toBe(429)

    // …ali ispitni mod i dalje ima svoja mjesta (nakon proteklih 60 s razmaka:
    // odbijena predaja je razmak ipak potrošila, kao i u produkciji).
    rateLimitSeen.delete('u1|sim-grade:' + SUBJECT + ':' + EXAM_KEY)
    // …ali ispitni mod i dalje ima svoja mjesta.
    const exam = await POST(...postRequest({ ...baseBody('attempt-EXAM'), examMode: true }))
    expect(exam.status).toBe(200)
    expect(supabase.inserts).toHaveLength(1)
  })

  it('durationSec izvan raspona int4 ne ruši upis nego ispada iz retka', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    const res = await POST(...postRequest({ ...baseBody(), durationSec: 3000000000 }))

    expect(res.status).toBe(200)
    expect(supabase.inserts).toHaveLength(1)
    expect(supabase.inserts[0].duration_sec).toBeNull()
  })

  it('odgovor s NUL bajtom (koji jsonb odbija) vraća 400 prije ocjenjivanja', async () => {
    const adapter = makeAdapter()
    const { POST } = await loadRoutes(adapter)

    const res = await POST(...postRequest({ ...baseBody(), answers: { q1: String.fromCharCode(0) } }))

    expect(res.status).toBe(400)
    expect(adapter.score).not.toHaveBeenCalled()
    expect(mocks.checkRateLimit).not.toHaveBeenCalled()
  })

  it('odgovori na pitanja koja ispit nema ne ulaze u sim_progress', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    await POST(...postRequest({ ...baseBody(), answers: { q1: 'a', nepostojece: 'x' } }))

    expect(supabase.inserts[0].answers).toEqual({ q1: 'a' })
  })

  it('predaja odbijena budžetom, ponovljena s istim attemptId i odgovorima, vraća rezultat bez upisa', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { GRADE_DAILY_BUDGET, POST } = await loadGradeRoute(makeAdapter())
    consumeBudget(Array.from({ length: GRADE_DAILY_BUDGET }, (_, i) => i))

    const rejected = await POST(...postRequest(baseBody('attempt-RETRY')))
    expect(rejected.status).toBe(429)

    // Isti pokušaj i isti odgovori, nakon isteka razmaka od 60 s: rezultat je
    // ista čista funkcija, pa ga ruta vrati bez novog mjesta u budžetu — i bez
    // retka, jer ga prvi poziv nije upisao (budžet ga je odbio).
    rateLimitSeen.delete('u1|sim-grade:' + SUBJECT + ':' + EXAM_KEY)
    const retry = await POST(...postRequest(baseBody('attempt-RETRY')))
    expect(retry.status).toBe(200)
    expect(supabase.inserts).toHaveLength(0)
  })

  it('predaja odbijena RAZMAKOM, ponovljena nakon čekanja, ipak se upiše', async () => {
    // Razlika prema budžetu: razmak nije odbijen pokušaj nego "pričekaj". Otisak
    // se zato zauzima TEK nakon razmaka — inače bi ponovljena predaja vratila
    // ocjenu koju korisnik vidi na ekranu, a retka u sim_progress ne bi bilo.
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    // Tuđa ranija predaja istog ispita potrošila je razmak.
    rateLimitSeen.add('u1|sim-grade:' + SUBJECT + ':' + EXAM_KEY)

    const rejected = await POST(...postRequest(baseBody('attempt-WAIT')))
    expect(rejected.status).toBe(429)
    expect(rejected.headers.get('Retry-After')).toBe('42')
    expect(supabase.inserts).toHaveLength(0)

    // Klijent odbroji i pošalje ISTI attemptId; sada prolazi kao prva predaja.
    rateLimitSeen.delete('u1|sim-grade:' + SUBJECT + ':' + EXAM_KEY)
    const retry = await POST(...postRequest(baseBody('attempt-WAIT')))

    expect(retry.status).toBe(200)
    expect(supabase.inserts).toHaveLength(1)
    expect(supabase.inserts[0].attempt_id).toBe('attempt-WAIT')
  })

  it('isti attemptId daje isti odgovor, bez novog upisa i bez trošenja limita', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const adapter = makeAdapter()
    const { POST } = await loadRoutes(adapter)

    const first = await (await POST(...postRequest(baseBody('attempt-ABCD')))).json()
    const second = await (await POST(...postRequest(baseBody('attempt-ABCD')))).json()

    expect(second).toEqual(first)
    expect(supabase.inserts).toHaveLength(1)
    // Prva predaja: otisak pokušaja + razmak od 60 s + jedno mjesto budžeta.
    // Druga ne dira limiter uopće.
    expect(mocks.checkRateLimit).toHaveBeenCalledTimes(3)
  })

  it('ponovljeni attemptId spremljen u bazi ocjenjuje SPREMLJENE odgovore, ne novoposlane', async () => {
    const supabase = makeSupabase({ prior: { answers: { q1: 'a', q2: 'b', q3: 'a' }, exam_mode: true } })
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadRoutes(makeAdapter())

    const payload = await (await POST(...postRequest({ ...baseBody('attempt-WXYZ'), answers: { q1: 'b', q2: 'a', q3: 'b' } }))).json()

    expect(payload.cor).toBe(3)
    expect(supabase.inserts).toHaveLength(0)
    expect(mocks.checkRateLimit).not.toHaveBeenCalled()
  })

  it('odbija zahtjev bez attemptId-a i bez odgovora', async () => {
    const { POST } = await loadRoutes(makeAdapter())

    const noAttempt = await POST(...postRequest({ examKey: EXAM_KEY, answers: {}, examMode: true }))
    const noAnswers = await POST(...postRequest({ examKey: EXAM_KEY, attemptId: 'attempt-0001', examMode: true }))

    expect(noAttempt.status).toBe(400)
    expect(noAnswers.status).toBe(400)
  })

  it('neregistriran predmet vraća 404', async () => {
    const { POST } = await loadRoutes(makeAdapter())
    const res = await POST(...postRequest(baseBody(), 'hrv'))
    expect(res.status).toBe(404)
  })
})

describe('registry — ugovor adaptera', () => {
  it('odbija adapter bez obavezne metode', async () => {
    const registry = await import('@/lib/exam-secrets/registry')
    registry.resetRegistry()
    expect(() => registry.registerSubject('x', { loadPublic() {} })).toThrow(/loadSecrets/)
    expect(registry.getAdapter('x')).toBeNull()
  })

  it('asKeySet razlikuje "bez ograničenja" od praznog popisa', async () => {
    const { asKeySet } = await import('@/lib/exam-secrets/registry')
    expect(asKeySet(null)).toBeNull()
    expect(asKeySet([])).toEqual(new Set())
    expect(asKeySet(['a'])).toEqual(new Set(['a']))
  })
})

describe('lib/exam-secrets — čišćenje pitanja', () => {
  it('denylist uklanja svako tajno polje, allowlist zadržava samo navedena', async () => {
    const { SECRET_FIELDS, stripQuestion } = await import('@/lib/exam-secrets')
    const question = Object.fromEntries([
      ['id', 'q1'],
      ['q', 'Pitanje?'],
      ...SECRET_FIELDS.map((field) => [field, 'TAJNA']),
    ])

    const stripped = stripQuestion(question)
    expect(Object.keys(stripped).sort()).toEqual(['id', 'q'])

    const allowlisted = stripQuestion({ ...question, opts: ['a'] }, ['id', 'q', 'opts'])
    expect(Object.keys(allowlisted).sort()).toEqual(['id', 'opts', 'q'])
  })

  it('odbija putanju izvan lib/data/<predmet>/secrets', async () => {
    const { secretsPath, loadSecrets } = await import('@/lib/exam-secrets')
    expect(secretsPath('../etc', 'x')).toBeNull()
    expect(secretsPath('eng', '../../secrets')).toBeNull()
    await expect(loadSecrets('eng', '../../package')).resolves.toBeNull()
  })
})

/* ────────────────────────────────────────────────────────────────────────────
   Isti ugovor, ali nad PRAVIM engleskim adapterom i pravim datotekama ispita.
   Lažni adapter iznad dokazuje rutu; ovo dokazuje da je engleski doista spojen
   i da se ključevi ne pojavljuju u odgovoru koji free korisnik stvarno dobije.
   ──────────────────────────────────────────────────────────────────────────── */

const ENG_KEY = '2024_ljeto'

async function loadEngRoutes() {
  const registry = await import('@/lib/exam-secrets/registry')
  registry.resetRegistry()
  registry.registerBuiltInSubjects()
  const exam = await import('@/app/api/sim/[subject]/exam/[examKey]/route')
  const grade = await import('@/app/api/sim/[subject]/grade/route')
  return { GET: exam.GET, POST: grade.POST }
}

function engGetRequest(mode) {
  const url = `http://localhost/api/sim/eng/exam/${ENG_KEY}?mode=${mode}`
  return [new Request(url), { params: { subject: 'eng', examKey: ENG_KEY } }]
}

/** Polja koja u odgovoru ne smiju stajati u poziciji JSON ključa. */
const SECRET_KEY_RE = /"(sol|exp|why|steps|rubric|pairs|cl|ans|alt|ex)"\s*:/

describe('rute nad pravim engleskim adapterom', () => {
  it('free + ispitni mod: nijedan ključ, keys:"none", sva pitanja', async () => {
    const { GET } = await loadEngRoutes()

    const res = await GET(...engGetRequest('exam'))
    const raw = await res.text()
    const payload = JSON.parse(raw)

    expect(res.status).toBe(200)
    expect(payload.keys).toBe('none')
    expect(payload.qs).toHaveLength(43)
    expect(raw).not.toMatch(SECRET_KEY_RE)
    // Sve što treba za rješavanje i dalje je tu.
    expect(payload.qs[0]).toMatchObject({ id: 'r1', type: 'mat', section: 'reading' })
    expect(payload.meta.razina).toBe('osnovna')
    expect(res.headers.get('Cache-Control')).toBe('private, no-store')
    expect(res.headers.get('Vary')).toBe('Cookie')
  })

  it('free + vježbanje: ključ samo za prvih FREE_LIMIT pitanja', async () => {
    const { FREE_LIMIT } = await import('@/lib/exam-secrets/free-policy')
    const { GET } = await loadEngRoutes()

    const payload = await (await GET(...engGetRequest('practice'))).json()

    expect(payload.keys).toBe('partial')
    expect(payload.qs.filter(q => q.sol !== undefined)).toHaveLength(FREE_LIMIT)
    expect(payload.qs.slice(FREE_LIMIT).every(q => q.sol === undefined && q.exp === undefined)).toBe(true)
    // 3 od 43 pitanja jednog ispita — svjesna iznimka, ne curenje banke.
    expect(payload.qs.length).toBe(43)
  })

  it('plaćeni tier dobiva pun payload (politika to izričito dopušta)', async () => {
    mocks.getUserTier.mockResolvedValue('pro')
    const { GET } = await loadEngRoutes()

    const payload = await (await GET(...engGetRequest('exam'))).json()

    expect(payload.keys).toBe('full')
    expect(payload.qs.every(q => q.sol !== undefined)).toBe(true)
  })

  it('tier iz query stringa se ignorira — vrijedi samo baza', async () => {
    const { GET } = await loadEngRoutes()

    const url = `http://localhost/api/sim/eng/exam/${ENG_KEY}?mode=exam&tier=pro&keys=full`
    const payload = await (await GET(new Request(url), { params: { subject: 'eng', examKey: ENG_KEY } })).json()

    expect(payload.keys).toBe('none')
  })

  it('ocjenjivanje vraća točno/netočno bez ključeva i sámo upisuje sim_progress', async () => {
    const supabase = makeSupabase()
    mocks.createClient.mockResolvedValue(supabase.client)
    const { POST } = await loadEngRoutes()

    const request = new Request('http://localhost/api/sim/eng/grade', {
      method: 'POST',
      body: JSON.stringify({ examKey: ENG_KEY, answers: { r6: 'A' }, examMode: true, attemptId: 'eng-attempt-01' }),
    })
    const res = await POST(request, { params: { subject: 'eng' } })
    const raw = await res.text()
    const body = JSON.parse(raw)

    expect(res.status).toBe(200)
    expect(raw).not.toMatch(SECRET_KEY_RE)
    expect(Object.keys(body.scores)).toHaveLength(43)
    expect(body.total).toBe(42)
    // Free tier ne dobiva razradu po temama.
    expect(body.topicBreakdown).toBeUndefined()

    expect(supabase.inserts).toHaveLength(1)
    const row = supabase.inserts[0]
    expect(row.subject).toBe('eng')
    expect(row.exam_key).toBe(ENG_KEY)
    // razinaCode iz meta: osnovna → 'B' (sim_progress ne poznaje 'osnovna')
    expect(row.razina).toBe('B')
    expect(row.exam_label).toBe('2024. — Ljetni rok')
    expect(row.attempt_id).toBe('eng-attempt-01')
    expect(Object.keys(row.topic_breakdown).length).toBeGreaterThan(0)
  })
})
