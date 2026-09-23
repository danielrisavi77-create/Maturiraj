import { describe, it, expect } from 'vitest'
import { EXAMS } from '../../lib/engleski-simulator/exams.js'
import { chk, grade as gradeFor, calcXpGain } from '../../lib/engleski-simulator/scoring.js'
import { engAdapter, score } from '../../lib/exam-secrets/subjects/eng.js'
import { getAdapter, listSubjects } from '../../lib/exam-secrets/registry.js'
import { stripQuestions } from '../../lib/exam-secrets/index.js'

/**
 * ADR-001 — adapter engleskog. Ocjenjivanje NE smije biti druga implementacija:
 * poslužitelj i preglednik dijele isti `chk`, pa se postoci zatečenih korisnika
 * ne mogu tiho promijeniti. Ovdje se to provjerava nad PRAVIM ispitima.
 */

const EXAM_KEY = '2024_ljeto'
const VISA_KEY = 'vis_2024_prvi'

/** Kako bi klijent izračunao rezultat da ima ključeve (finish() u ExamPlayScreenu). */
function clientResult(exam, answers) {
  const autoQ = (exam.qs || []).filter(q => q.type !== 'sa' && q.type !== 'es')
  const cor = autoQ.filter(q => chk(q, answers[q.id]) === true).length
  const pct = autoQ.length ? Math.round((cor / autoQ.length) * 100) : 0
  return { cor, total: autoQ.length, pct, grade: gradeFor(pct), xpGain: calcXpGain(pct) }
}

/** Odgovori koji pogode svako drugo pitanje — da postotak ne bude 0 ni 100. */
function everyOtherCorrect(exam) {
  const answers = {}
  ;(exam.qs || []).forEach((q, i) => {
    if (i % 2 !== 0 || !q.sol) return
    if (q.type === 'mc' || q.type === 'ins') answers[q.id] = q.sol.cl
    else if (q.type === 'fb') answers[q.id] = Array.isArray(q.sol.ans) ? q.sol.ans[0] : q.sol.ans
    else if (q.type === 'mat') answers[q.id] = Object.fromEntries(q.sol.pairs.map(p => [p.l, p.r]))
  })
  return answers
}

describe('registry — engleski je registriran', () => {
  it('getAdapter("eng") vraća adapter s cijelim ugovorom', () => {
    const adapter = getAdapter('eng')
    expect(adapter).toBe(engAdapter)
    for (const method of ['loadPublic', 'loadSecrets', 'allowedExamKeys', 'score']) {
      expect(typeof adapter[method], method).toBe('function')
    }
    expect(adapter.publicFields).toContain('opts')
    expect(listSubjects()).toContain('eng')
  })
})

describe('adapter — javni payload', () => {
  it('vraća envelope { key, meta, texts, qs } bez ijednog ključa', async () => {
    const exam = await engAdapter.loadPublic(EXAM_KEY)
    expect(exam.key).toBe(EXAM_KEY)
    expect(exam.meta.razina).toBe('osnovna')
    expect(exam.texts).toEqual({})
    expect(exam.qs.length).toBe(EXAMS[EXAM_KEY].qs.length)
    expect(JSON.stringify(exam.qs)).not.toMatch(/"(sol|exp)"\s*:/)
  })

  it('nepostojeći ispit i neispravan segment putanje daju null', async () => {
    expect(await engAdapter.loadPublic('2099_nepostojeci')).toBeNull()
    expect(await engAdapter.loadPublic('../../package')).toBeNull()
    expect(await engAdapter.loadPublic('')).toBeNull()
  })

  it('allowlista adaptera preživi i payload koji bi nosio ključ', () => {
    const stripped = stripQuestions(
      [{ id: 'x', type: 'mc', q: 'Pitanje?', opts: ['a'], sol: { cl: 'a' }, exp: 'TAJNA' }],
      engAdapter.publicFields,
    )
    expect(stripped[0]).toEqual({ id: 'x', type: 'mc', q: 'Pitanje?', opts: ['a'] })
  })
})

describe('adapter — tajni store', () => {
  it('ima unos sa `sol` za svako pitanje ispita', async () => {
    const secrets = await engAdapter.loadSecrets(EXAM_KEY)
    const qs = EXAMS[EXAM_KEY].qs
    expect(Object.keys(secrets)).toHaveLength(qs.length)
    qs.forEach(q => {
      expect(secrets[q.id], q.id).toBeDefined()
      expect(JSON.stringify(secrets[q.id].sol)).toBe(JSON.stringify(q.sol))
    })
  })

  it('nepostojeći ispit daje null, ne iznimku', async () => {
    expect(await engAdapter.loadSecrets('2099_nepostojeci')).toBeNull()
  })
})

describe('adapter — ocjenjivanje je identično klijentskom', () => {
  it.each([EXAM_KEY, VISA_KEY])('%s: cor/total/pct/ocjena/XP se poklapaju', async (key) => {
    const source = EXAMS[key]
    const answers = everyOtherCorrect(source)
    const exam = await engAdapter.loadPublic(key)
    const secrets = await engAdapter.loadSecrets(key)

    const server = score(exam.qs, secrets, answers)
    const client = clientResult(source, answers)

    expect(server.cor).toBe(client.cor)
    expect(server.total).toBe(client.total)
    expect(server.pct).toBe(client.pct)
    expect(server.grade).toBe(client.grade)
    expect(server.xpGain).toBe(client.xpGain)
    // Postotak mora biti u sredini, inače test ne bi ništa dokazao.
    expect(server.pct).toBeGreaterThan(0)
    expect(server.pct).toBeLessThan(100)
  })

  it('scores je mapa qid → true|false|null, a sa/es su uvijek null', async () => {
    const exam = await engAdapter.loadPublic(VISA_KEY)
    const secrets = await engAdapter.loadSecrets(VISA_KEY)
    const server = score(exam.qs, secrets, {})

    exam.qs.forEach(q => {
      const value = server.scores[q.id]
      if (q.type === 'sa' || q.type === 'es') expect(value, q.id).toBeNull()
      else expect([true, false], q.id).toContain(value)
    })
    // Ručna pitanja ne ulaze u nazivnik.
    const auto = exam.qs.filter(q => q.type !== 'sa' && q.type !== 'es')
    expect(server.total).toBe(auto.length)
  })

  it('odgovor ocjenjivanja ne sadrži nijedan ključ', async () => {
    const exam = await engAdapter.loadPublic(EXAM_KEY)
    const secrets = await engAdapter.loadSecrets(EXAM_KEY)
    const server = score(exam.qs, secrets, everyOtherCorrect(EXAMS[EXAM_KEY]))
    const raw = JSON.stringify(server)
    expect(raw).not.toMatch(/"(sol|exp|why|steps|rubric|pairs|cl|ans|alt)"\s*:/)
  })

  it('topicBreakdown broji po temi, bez ručnih pitanja', async () => {
    const exam = await engAdapter.loadPublic(EXAM_KEY)
    const secrets = await engAdapter.loadSecrets(EXAM_KEY)
    const server = score(exam.qs, secrets, {})
    const sum = Object.values(server.topicBreakdown).reduce((a, t) => a + t.total, 0)
    expect(sum).toBe(server.total)
  })
})

describe('adapter — pristup po tieru', () => {
  it('plaćeni tier smije ključeve svih 70 ispita', () => {
    expect(engAdapter.allowedExamKeys('starter').size).toBe(70)
    expect(engAdapter.allowedExamKeys('pro').size).toBe(70)
    expect(engAdapter.allowedExamKeys('pro').has(VISA_KEY)).toBe(true)
  })

  it('free tier ne dobiva popis svih ispita', () => {
    const free = engAdapter.allowedExamKeys('free')
    expect(free.size).toBeGreaterThan(0)
    expect(free.size).toBeLessThan(70)
  })
})
