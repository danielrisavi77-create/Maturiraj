// Mock zajedničkih ruta simulatora (ADR-001) za testove klijenta.
//
// Nije test datoteka (nema .test.js). Zamjenjuje `fetch` za:
//   GET  /api/sim/eng/exam/<key>?mode=exam|practice
//   POST /api/sim/eng/grade
//   /engleski-simulator/exam-context.json
//
// Ocjenjivanje ovdje računa ISTIM `chk`-om koji koristi i poslužiteljski adapter
// (lib/exam-secrets/subjects/eng.js), pa mock ne može tiho odstupiti od rute.
import { vi } from 'vitest'
import { chk, grade as gradeFor, calcXpGain } from '../../lib/engleski-simulator/scoring.js'
import { freeKeyAllowance } from '../../lib/exam-secrets/free-policy.js'

/** Polja pitanja koja smiju u klijent — allowlista iz generatora i adaptera. */
const PUBLIC_FIELDS = ['id', 'section', 'type', 'topic', 'q', 'opts', 'items', 'rights', 'note']

/**
 * Koliko pitanja free korisnik smije dobiti s ključem — mock ne izmišlja vlastiti
 * broj nego pita isto pravilo koje pita i ruta (lib/exam-secrets/free-policy.js):
 * ispitni mod 0, vježbanje prvih FREE_LIMIT.
 */
export const mockFreeAllowance = (mode, key = '2024_ljeto') => freeKeyAllowance('eng', key, mode)

export function gradeExam(exam, answers) {
  const scores = {}
  const topicBreakdown = {}
  let cor = 0
  let total = 0
  for (const q of exam?.qs || []) {
    if (q.type === 'sa' || q.type === 'es') {
      scores[q.id] = null
      continue
    }
    const ok = chk(q, answers?.[q.id])
    scores[q.id] = ok
    total += 1
    if (ok === true) cor += 1
    const topic = q.topic || 'ostalo'
    if (!topicBreakdown[topic]) topicBreakdown[topic] = { correct: 0, total: 0 }
    topicBreakdown[topic].total += 1
    if (ok === true) topicBreakdown[topic].correct += 1
  }
  const pct = total ? Math.round((cor / total) * 100) : 0
  return { scores, cor, total, pct, grade: gradeFor(pct), bodovi: null, xpGain: calcXpGain(pct), topicBreakdown }
}

function jsonResponse(body, status = 200, headers = {}) {
  return Promise.resolve({
    ok: status >= 200 && status < 300,
    status,
    // Klijent iz Retry-After izvodi odbrojavanje do ponovne predaje, pa dvojnik
    // mora imati `headers.get` kao i pravi Response.
    headers: { get: name => headers[name] ?? null },
    json: () => Promise.resolve(body),
  })
}

/** Envelope GET rute: javni payload + ključevi natrag samo gdje smiju. */
function examEnvelope(exam, mode, tier) {
  const allowance = tier === 'free' ? mockFreeAllowance(mode, exam.key) : exam.qs.length
  const qs = exam.qs.map((q, index) => {
    const pub = {}
    for (const field of PUBLIC_FIELDS) if (q[field] !== undefined) pub[field] = q[field]
    if (index >= allowance) return pub
    return { ...pub, ...(q.sol !== undefined ? { sol: q.sol } : {}), ...(q.exp !== undefined ? { exp: q.exp } : {}) }
  })
  const merged = qs.filter(q => q.sol !== undefined).length
  const { qs: _ignored, key, ...meta } = exam
  return {
    key,
    meta,
    texts: {},
    qs,
    keys: merged === 0 ? 'none' : merged >= qs.length ? 'full' : 'partial',
  }
}

/**
 * @param {{exams?: Record<string, object>, tier?: 'free'|'standard'|'pro', context?: object, gradeStatus?: number, gradeRetryAfterSec?: number}} options
 */
export function installSimApiMock({ exams = {}, tier = 'free', context = {}, gradeStatus = 200, gradeRetryAfterSec = 0 } = {}) {
  const calls = { exam: [], grade: [] }
  // Ocjenjivanje se mijenja usred testa (429 pa 200), pa status živi u varijabli.
  const grade = { status: gradeStatus, retryAfterSec: gradeRetryAfterSec }

  const fetchMock = vi.fn((input, init) => {
    const url = typeof input === 'string' ? input : String(input?.url ?? input)

    if (url.includes('exam-context.json')) return jsonResponse(context)

    const examMatch = url.match(/\/api\/sim\/eng\/exam\/([^?]+)(?:\?mode=([a-z]+))?/)
    if (examMatch) {
      const key = decodeURIComponent(examMatch[1])
      const mode = examMatch[2] === 'practice' ? 'practice' : 'exam'
      calls.exam.push({ key, mode })
      const exam = exams[key]
      if (!exam) return jsonResponse({ error: 'Ispit ne postoji.' }, 404)
      return jsonResponse(examEnvelope(exam, mode, tier))
    }

    if (url.includes('/api/sim/eng/grade')) {
      const body = init?.body ? JSON.parse(init.body) : {}
      calls.grade.push(body)
      if (grade.status !== 200) {
        return jsonResponse(
          { error: 'Ocjenjivanje nije uspjelo.' },
          grade.status,
          grade.retryAfterSec ? { 'Retry-After': String(grade.retryAfterSec) } : {},
        )
      }
      const exam = exams[body.examKey]
      if (!exam) return jsonResponse({ error: 'Ispit ne postoji.' }, 404)
      const result = gradeExam(exam, body.answers)
      // Free tier ne dobiva razradu po temama (Standard sadržaj).
      if (tier === 'free') delete result.topicBreakdown
      return jsonResponse(result)
    }

    return jsonResponse({ error: 'nije mockano: ' + url }, 404)
  })

  global.fetch = fetchMock
  /** Promijeni ishod ocjenjivanja usred testa (npr. 429 → 200 nakon odbrojavanja). */
  const setGradeOutcome = (status, retryAfterSec = 0) => {
    grade.status = status
    grade.retryAfterSec = retryAfterSec
  }
  return { calls, fetchMock, setGradeOutcome }
}
