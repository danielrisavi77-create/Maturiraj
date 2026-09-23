import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * ADR-001 — canonical predmeti (grupa A2).
 *
 * Grupni zadaci (`passage_group`, `audio_group`, `media_response`) drže prava
 * pitanja u `children`. Sve što je dosad radilo po vrhu popisa — čišćenje,
 * spajanje ključeva i kvota free vježbanja — mora raditi po LISTOVIMA, inače je
 * "prva 3 pitanja" kod jezika zapravo 15.
 *
 * Fixture je namjerno najgori slučaj: 3 grupe × 5 listova, svaki list ima ključ.
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
vi.mock('@/lib/rate-limit', () => ({
  checkRateLimit: mocks.checkRateLimit,
  consumeRateLimitSlots: async () => ({ ok: true, retryAfterSec: 0 }),
}))

/* ── fixture ───────────────────────────────────────────────────────────────── */

const GROUP_COUNT = 3
const LEAVES_PER_GROUP = 5

/** Javna grupa: ulomak + 5 pitanja, bez ijednog ključa. */
function makeGroup(groupIndex) {
  return {
    id: `g${groupIndex}`,
    type: 'passage_group',
    prompt: `Ulomak ${groupIndex}`,
    stimulus: { text: `Tekst ulomka ${groupIndex}.`, listening: { maxPlays: 2 } },
    children: Array.from({ length: LEAVES_PER_GROUP }, (_, leafIndex) => ({
      id: `g${groupIndex}q${leafIndex + 1}`,
      type: 'mc',
      prompt: `Pitanje ${groupIndex}.${leafIndex + 1}`,
      points: 1,
      topic: 'citanje',
      options: [
        { id: 'A', text: 'a' },
        { id: 'B', text: 'b' },
      ],
    })),
  }
}

const PUBLIC_QS = Array.from({ length: GROUP_COUNT }, (_, index) => makeGroup(index + 1))

/** Tajni store: ključ svakog lista + transkript svake grupe. */
const SECRETS = {}
for (let groupIndex = 1; groupIndex <= GROUP_COUNT; groupIndex += 1) {
  SECRETS[`g${groupIndex}`] = { stimulus: { listening: { maxPlays: 2, transcript: `TAJNA-TRANSKRIPT-${groupIndex}` } } }
  for (let leafIndex = 1; leafIndex <= LEAVES_PER_GROUP; leafIndex += 1) {
    SECRETS[`g${groupIndex}q${leafIndex}`] = {
      answer: { kind: 'choice', correct: ['A'], source: 'official' },
      explanation: `TAJNA-RAZRADA-${groupIndex}-${leafIndex}`,
    }
  }
}

const SENTINELS = ['TAJNA-TRANSKRIPT-', 'TAJNA-RAZRADA-', '"answer"', '"explanation"', '"transcript"']

function makeAdapter(publicFields) {
  return {
    loadPublic: vi.fn(async (key) =>
      key === EXAM_KEY ? { key, meta: { label: 'Fixture', razinaCode: 'A' }, texts: {}, qs: PUBLIC_QS } : null,
    ),
    loadSecrets: vi.fn(async (key) => (key === EXAM_KEY ? SECRETS : null)),
    allowedExamKeys: vi.fn(() => null),
    score: vi.fn(() => ({ scores: {}, cor: 0, total: 0, pct: 0, grade: 1, bodovi: 0, xpGain: 5, topicBreakdown: {} })),
    publicFields,
  }
}

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

async function loadExamRoute(adapter) {
  const registry = await import('@/lib/exam-secrets/registry')
  registry.resetRegistry()
  registry.registerSubject(SUBJECT, adapter)
  const route = await import('@/app/api/sim/[subject]/exam/[examKey]/route')
  return route.GET
}

function getRequest(mode) {
  return [
    new Request(`http://localhost/api/sim/${SUBJECT}/exam/${EXAM_KEY}?mode=${mode}`),
    { params: { subject: SUBJECT, examKey: EXAM_KEY } },
  ]
}

function leafIdsWithKey(qs) {
  const found = []
  for (const group of qs) {
    for (const child of group.children ?? []) {
      if (child.answer !== undefined || child.explanation !== undefined) found.push(child.id)
    }
  }
  return found
}

beforeEach(() => {
  vi.clearAllMocks()
  vi.resetModules()
  mocks.getUserTier.mockResolvedValue('free')
  mocks.checkRateLimit.mockResolvedValue({ limited: false, retryAfterSec: 0 })
  mocks.createClient.mockResolvedValue(makeSupabase().client)
})

/* ── jezgra: rekurzivno čišćenje i spajanje ────────────────────────────────── */

describe('lib/exam-secrets — rekurzija po children', () => {
  it('allowlista vrijedi i za djecu, a transkript ispada na svakoj razini', async () => {
    const { stripQuestion } = await import('@/lib/exam-secrets')
    const { PUBLIC_QUESTION_FIELDS } = await import('@/lib/exam-secrets/subjects/canonical')

    const dirty = {
      ...makeGroup(1),
      answer: 'TAJNA',
      stimulus: { text: 'Ulomak.', listening: { maxPlays: 2, transcript: 'TAJNA-TRANSKRIPT' } },
      children: makeGroup(1).children.map((child) => ({
        ...child,
        answer: { correct: ['A'] },
        explanation: 'TAJNA',
        solution: { modelAnswer: 'TAJNA' },
      })),
    }

    const clean = stripQuestion(dirty, PUBLIC_QUESTION_FIELDS)

    expect(clean.answer).toBeUndefined()
    expect(clean.stimulus.listening.transcript).toBeUndefined()
    expect(clean.stimulus.listening.maxPlays).toBe(2) // ostatak stimulusa ostaje
    expect(clean.children).toHaveLength(LEAVES_PER_GROUP)
    for (const child of clean.children) {
      expect(child.answer).toBeUndefined()
      expect(child.explanation).toBeUndefined()
      expect(child.solution).toBeUndefined()
      expect(child.prompt).toBeTruthy() // tekst zadatka je javni materijal
    }
    expect(JSON.stringify(clean)).not.toContain('TAJNA')
  })

  it('denylist (bez allowliste) također silazi u djecu', async () => {
    const { stripQuestion } = await import('@/lib/exam-secrets')
    const clean = stripQuestion({ id: 'g', children: [{ id: 'g1', sol: 'TAJNA', q: 'Pitanje?' }] })
    expect(clean.children[0].sol).toBeUndefined()
    expect(clean.children[0].q).toBe('Pitanje?')
  })

  it('mergeSecrets spaja tajne listova unutar grupe i čuva identitet kad tajne nema', async () => {
    const { mergeSecrets } = await import('@/lib/exam-secrets')
    const group = PUBLIC_QS[0]

    const merged = mergeSecrets(group, SECRETS)
    expect(merged).not.toBe(group)
    expect(merged.children.every((child) => child.answer !== undefined)).toBe(true)
    expect(merged.stimulus.listening.transcript).toBe('TAJNA-TRANSKRIPT-1')

    expect(mergeSecrets(group, {})).toBe(group)
    expect(mergeSecrets(group, null)).toBe(group)
  })

  it('spajanje je DUBOKO — tajna na ugniježđenoj putanji ne briše javni stimulus', async () => {
    const { mergeSecrets } = await import('@/lib/exam-secrets')
    // Tajni zapis grupe realno ima samo transkript: stripQuestion ga skida na
    // putanji stimulus.listening.transcript, pa je to jedino što ide u store.
    // Plitki spread bi cijeli `stimulus` zamijenio ovim objektom i odnio tekst
    // ulomka i maxPlays — plaćeni korisnik bi dobio ispit koji se ne da riješiti.
    const group = {
      id: 'g1',
      type: 'audio_group',
      stimulus: { text: 'JAVNI-TEKST', listening: { maxPlays: 2, src: '/audio/g1.mp3' } },
      children: [{ id: 'g1q1', type: 'mc', points: 1, options: [{ id: 'A' }] }],
    }
    const secrets = {
      g1: { stimulus: { listening: { transcript: 'TRANSKRIPT' } } },
      g1q1: { answer: { correct: ['A'] } },
    }

    const merged = mergeSecrets(group, secrets)

    expect(merged.stimulus.text).toBe('JAVNI-TEKST')
    expect(merged.stimulus.listening.maxPlays).toBe(2)
    expect(merged.stimulus.listening.src).toBe('/audio/g1.mp3')
    expect(merged.stimulus.listening.transcript).toBe('TRANSKRIPT')
    expect(merged.children[0].answer).toEqual({ correct: ['A'] })
    // Javni objekt ostaje netaknut (kopija, ne mutacija).
    expect(group.stimulus.listening.transcript).toBeUndefined()
  })

  it('grupna tajna se NE spaja dok svi listovi grupe nisu unutar kvote', async () => {
    const { mergeSecretsWithAllowance } = await import('@/lib/exam-secrets')
    // audio_group od 6 listova, kvota 3. Transkript je ključ SVIH šest zadataka
    // (ADR-001 §2), pa bi ga spajanje zbog prva tri lista dalo dvostruko više
    // nego što kvota dopušta.
    const group = {
      id: 'g1',
      type: 'audio_group',
      stimulus: { listening: { maxPlays: 2 } },
      children: Array.from({ length: 6 }, (_, i) => ({ id: `g1q${i + 1}`, type: 'mc', points: 1 })),
    }
    const secrets = { g1: { stimulus: { listening: { transcript: 'CIJELI TEKST SNIMKE' } } } }
    for (let i = 1; i <= 6; i += 1) secrets[`g1q${i}`] = { answer: { correct: ['A'] } }

    const partial = mergeSecretsWithAllowance([group], secrets, 3)
    expect(partial.mergedLeaves).toBe(3)
    expect(partial.qs[0].stimulus.listening.transcript).toBeUndefined()
    expect(JSON.stringify(partial.qs)).not.toContain('CIJELI TEKST SNIMKE')

    // Cijela grupa unutar kvote → transkript je legitiman.
    const whole = mergeSecretsWithAllowance([group], secrets, 6)
    expect(whole.qs[0].stimulus.listening.transcript).toBe('CIJELI TEKST SNIMKE')
    expect(whole.qs[0].stimulus.listening.maxPlays).toBe(2)
  })

  it('list bez unosa u tajnom storeu troši kvotu i ne drži grupu zatvorenom', async () => {
    const { mergeSecretsWithAllowance } = await import('@/lib/exam-secrets')
    const group = {
      id: 'g1',
      type: 'audio_group',
      stimulus: { listening: {} },
      children: [
        { id: 'g1q1', type: 'mc', points: 1 },
        { id: 'g1q2', type: 'essay', points: 1 },
      ],
    }
    const secrets = { g1: { stimulus: { listening: { transcript: 'T' } } }, g1q1: { answer: { correct: ['A'] } } }

    const { qs, mergedLeaves } = mergeSecretsWithAllowance([group], secrets, 2)
    expect(mergedLeaves).toBe(1) // samo g1q1 ima što spojiti
    expect(qs[0].stimulus.listening.transcript).toBe('T')
  })

  it('brojanje listova i qid-ova ne ovisi o dubini', async () => {
    const { countLeavesIn, collectQuestionIds } = await import('@/lib/exam-secrets')
    expect(countLeavesIn(PUBLIC_QS)).toBe(GROUP_COUNT * LEAVES_PER_GROUP)
    expect(collectQuestionIds(PUBLIC_QS)).toHaveLength(GROUP_COUNT + GROUP_COUNT * LEAVES_PER_GROUP)
    // Predmet bez djece (eng/soc oblik) — ponašanje nepromijenjeno.
    expect(countLeavesIn([{ id: 'q1' }, { id: 'q2' }])).toBe(2)
  })
})

/* ── kvota free vježbanja ──────────────────────────────────────────────────── */

describe('GET /api/sim/[subject]/exam/[examKey] — kvota po listovima', () => {
  it('free vježbanje dobiva TOČNO FREE_LIMIT listova s ključem, ne FREE_LIMIT grupa', async () => {
    const { FREE_LIMIT } = await import('@/lib/exam-secrets/free-policy')
    const { PUBLIC_QUESTION_FIELDS } = await import('@/lib/exam-secrets/subjects/canonical')
    const GET = await loadExamRoute(makeAdapter(PUBLIC_QUESTION_FIELDS))

    const res = await GET(...getRequest('practice'))
    const raw = await res.text()
    const payload = JSON.parse(raw)

    expect(res.status).toBe(200)
    expect(payload.keys).toBe('partial')
    // Bez rekurzivne kvote ovo bi bilo 15 (tri cijele grupe).
    expect(leafIdsWithKey(payload.qs)).toEqual(['g1q1', 'g1q2', 'g1q3'])
    expect(leafIdsWithKey(payload.qs)).toHaveLength(FREE_LIMIT)

    // Iza granice nema ničega: ni ključa, ni razrade, ni transkripta drugih grupa.
    expect(payload.qs[1].stimulus?.listening?.transcript).toBeUndefined()
    expect(payload.qs[2].stimulus?.listening?.transcript).toBeUndefined()
    expect(raw).not.toContain('TAJNA-RAZRADA-1-4')
    // I PRVA grupa: kvota je pokrila 3 od 5 njezinih listova, a transkript je
    // ključ svih pet — spojiti ga zbog prva tri znači tiho podići kvotu.
    expect(payload.qs[0].stimulus?.listening?.transcript).toBeUndefined()
    expect(payload.qs[0].stimulus?.text).toBe('Tekst ulomka 1.') // javni dio ostaje
    for (let i = 1; i <= GROUP_COUNT; i += 1) expect(raw).not.toContain(`TAJNA-TRANSKRIPT-${i}`)
  })

  it('free ispitni mod ne otključava nijedan list i ne dira tajni store', async () => {
    const { PUBLIC_QUESTION_FIELDS } = await import('@/lib/exam-secrets/subjects/canonical')
    const adapter = makeAdapter(PUBLIC_QUESTION_FIELDS)
    const GET = await loadExamRoute(adapter)

    const res = await GET(...getRequest('exam'))
    const raw = await res.text()

    expect(JSON.parse(raw).keys).toBe('none')
    for (const sentinel of SENTINELS) expect(raw).not.toContain(sentinel)
    expect(adapter.loadSecrets).not.toHaveBeenCalled()
  })

  it('plaćeni tier dobiva sve listove i keys:"full"', async () => {
    mocks.getUserTier.mockResolvedValue('pro')
    const { PUBLIC_QUESTION_FIELDS } = await import('@/lib/exam-secrets/subjects/canonical')
    const GET = await loadExamRoute(makeAdapter(PUBLIC_QUESTION_FIELDS))

    const payload = await (await GET(...getRequest('exam'))).json()

    expect(payload.keys).toBe('full')
    expect(leafIdsWithKey(payload.qs)).toHaveLength(GROUP_COUNT * LEAVES_PER_GROUP)
    // Cijela grupa je unutar kvote → transkript ide, ali javni stimulus OSTAJE:
    // bez teksta ulomka plaćeni korisnik ispit ne može riješiti.
    expect(payload.qs[0].stimulus.listening.transcript).toBe('TAJNA-TRANSKRIPT-1')
    expect(payload.qs[0].stimulus.text).toBe('Tekst ulomka 1.')
    expect(payload.qs[0].stimulus.listening.maxPlays).toBe(2)
  })
})

/* ── ocjenjivanje ──────────────────────────────────────────────────────────── */

describe('createCanonicalAdapter — ocjenjivanje', () => {
  const ESSAY = {
    id: 'e1',
    type: 'essay',
    prompt: 'Obrazloži.',
    points: 8,
  }
  const ESSAY_SECRET = {
    rubric: 'Rubrika',
    rubricDetails: [{ id: 'r1', points: 4, label: 'Teza' }],
    solution: { modelAnswer: 'Model odgovora.', steps: ['TAJNA-KORAK'] },
    explanation: 'TAJNA-RAZRADA',
  }

  it('daje scores, bodove, progressRow i review.manual', async () => {
    const { createCanonicalAdapter } = await import('@/lib/exam-secrets/subjects/canonical')
    const adapter = createCanonicalAdapter('bio')

    const qs = [...PUBLIC_QS, ESSAY]
    const secrets = { ...SECRETS, e1: ESSAY_SECRET }
    // Prvi list točan, drugi netočan, ostali neodgovoreni.
    const result = adapter.score(qs, secrets, { g1q1: 'A', g1q2: 'B' })

    expect(result.scores.g1q1).toBe(true)
    expect(result.scores.g1q2).toBe(false)
    expect(result.scores.e1).toBeNull() // ručni zadatak nema automatsku ocjenu
    expect(Object.keys(result.scores)).toHaveLength(GROUP_COUNT * LEAVES_PER_GROUP + 1)

    expect(result.points.g1q1).toEqual({ earned: 1, possible: 1 })
    expect(result.points.e1).toEqual({ earned: 0, possible: 8 })
    expect(result.bodovi).toBe(1)
    expect(result.cor).toBe(1)
    expect(result.total).toBe(GROUP_COUNT * LEAVES_PER_GROUP)

    expect(result.progressRow).toMatchObject({
      result_version: 2,
      earned_points: 1,
      max_points: 23, // 15 listova × 1 bod + esej 8
      manual_pending: true,
    })
    expect(result.progressRow.score_pct).toBe(result.pct)
    expect(result.progressRow.unanswered).toContain('g1q3')

    // Amandman ADR §5a: rubrika + model + bodovi, ali NE i razrada.
    expect(result.review.manual.e1).toEqual({
      rubric: 'Rubrika',
      rubricDetails: ESSAY_SECRET.rubricDetails,
      modelAnswer: 'Model odgovora.',
      points: 8,
    })
    expect(JSON.stringify(result.review)).not.toContain('TAJNA')
  })

  it('ocjena 1–5 ide po pragovima 85/70/55/40, kao kod engleskog', async () => {
    const { createCanonicalAdapter } = await import('@/lib/exam-secrets/subjects/canonical')
    const { grade } = await import('@/lib/engleski-simulator/scoring')
    const adapter = createCanonicalAdapter('bio')

    const all = {}
    for (const id of Object.keys(SECRETS)) if (id.includes('q')) all[id] = 'A'
    const result = adapter.score(PUBLIC_QS, SECRETS, all)

    expect(result.pct).toBe(100)
    expect(result.grade).toBe(grade(100))
    expect(result.grade).toBe(5)
  })

  it('osnovica ocjene je AUTOMATSKI dio — esej s earned=0 ne deflatira postotak', async () => {
    const { createCanonicalAdapter } = await import('@/lib/exam-secrets/subjects/canonical')
    const { grade } = await import('@/lib/engleski-simulator/scoring')
    const adapter = createCanonicalAdapter('fil')

    // Filozofija: 40 bodova automatski + esej 20 (33 % ispita). Učenik točno
    // riješi SVE automatski ocjenjivo i napiše esej.
    const auto = Array.from({ length: 40 }, (_, i) => ({
      id: `a${i + 1}`,
      type: 'mc',
      points: 1,
      options: [{ id: 'A' }, { id: 'B' }],
    }))
    const essay = { id: 'e1', type: 'essay', points: 20 }
    const secrets = { e1: { rubric: 'R' } }
    const answers = { e1: 'Esej.' }
    for (const question of auto) {
      secrets[question.id] = { answer: { kind: 'choice', correct: ['A'] } }
      answers[question.id] = 'A'
    }

    const result = adapter.score([...auto, essay], secrets, answers)

    // Po summary.percent bilo bi 40/60 = 67 → ocjena 2, iako učenik nije
    // pogriješio ništa što se automatski ocjenjuje. eng adapter za istu izvedbu
    // daje 100 (MANUAL_TYPES ne ulaze u nazivnik) — ljestvica je zajednička, pa
    // mora biti i osnovica.
    expect(result.pct).toBe(100)
    expect(result.grade).toBe(grade(100))
    expect(result.grade).toBe(5)
    expect(result.progressRow.score_pct).toBe(100)
    // Puni zbroj bodova ostaje zapisan — po njemu se rezultat poslije ručnog
    // pregleda može dopuniti.
    expect(result.progressRow.max_points).toBe(60)
    expect(result.progressRow.earned_points).toBe(40)
    expect(result.progressRow.manual_pending).toBe(true)
  })

  it('allowedExamKeys je null (bez popisa po ispitu), a nepostojeći ispit daje null', async () => {
    const { createCanonicalAdapter } = await import('@/lib/exam-secrets/subjects/canonical')
    const adapter = createCanonicalAdapter('bio')

    expect(adapter.allowedExamKeys('free')).toBeNull()
    expect(adapter.allowedExamKeys('pro')).toBeNull()
    await expect(adapter.loadPublic('nema_me')).resolves.toBeNull()
    await expect(adapter.loadPublic('../../package')).resolves.toBeNull()
  })
})

/* ── registar ──────────────────────────────────────────────────────────────── */

describe('registry — canonical predmeti i stubovi', () => {
  it('svaki runtime:canonical predmet iz registra ima adapter, uz eng i soc', async () => {
    const registry = await import('@/lib/exam-secrets/registry')
    const { DISCERE_SUBJECTS } = await import('@/lib/discere/subject-registry')
    registry.resetRegistry()
    registry.registerBuiltInSubjects()

    const canonical = DISCERE_SUBJECTS.filter((subject) => subject.runtime === 'canonical')
    expect(canonical.length).toBeGreaterThan(15)
    for (const subject of canonical) {
      const adapter = registry.getAdapter(subject.id)
      expect(adapter, subject.id).toBeTruthy()
      expect(adapter.allowedExamKeys('free')).toBeNull()
    }
    expect(registry.getAdapter('eng')).toBeTruthy()
    expect(registry.getAdapter('soc')).toBeTruthy()
  })

  it('mat i hrv su registrirani kao stubovi — loadPublic null, dakle 404', async () => {
    const registry = await import('@/lib/exam-secrets/registry')
    registry.resetRegistry()
    registry.registerBuiltInSubjects()

    for (const subject of ['mat', 'hrv']) {
      const adapter = registry.getAdapter(subject)
      expect(adapter, subject).toBeTruthy()
      await expect(adapter.loadPublic('2024_ljeto')).resolves.toBeNull()
      await expect(adapter.loadSecrets('2024_ljeto')).resolves.toBeNull()
      expect(() => adapter.score([], {}, {})).toThrow()
    }
  })
})
