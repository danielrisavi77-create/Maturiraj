import { readFileSync } from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { describe, expect, it } from 'vitest'
import * as acorn from 'acorn'
import { chk, grade, calcXpGain, scoreExam } from '@/lib/sociologija/scoring'
import { score as adapterScore } from '@/lib/exam-secrets/subjects/soc'

/**
 * ADR-001, Faza 2 — PARITET OCJENJIVANJA.
 *
 * lib/sociologija/scoring.js je prijepis `nrm`/`chk`/`grade`/`calcXpGain` iz
 * public/sim/sociologija.html. Te funkcije i dalje žive u HTML-u (plaćeni tier
 * ocjenjuje lokalno, ODLUKA 7), pa se ocjena smije razići samo preko mrtvog
 * tijela ovog testa: referentne funkcije se acornom izvlače RAVNO IZ ISPORUČENOG
 * HTML-a i uspoređuju s modulom nad sva 32 stvarna ispita.
 *
 * Usporedba ide na tri razine: po pitanju (`chk`), po ispitu (`cor/total/pct/
 * ocjena`) i kroz adapter (`score(javna pitanja, tajni store, odgovori)`) —
 * zadnje zato što adapter pitanja tek mora spojiti iz dvije datoteke, pa je
 * spajanje dio tvrdnje.
 */

const ROOT = path.resolve(__dirname, '..', '..')
const HTML_PATH = path.join(ROOT, 'public', 'sim', 'sociologija.html')
const PUBLIC_DIR = path.join(ROOT, 'content', 'soc', 'exams')
const SECRETS_DIR = path.join(ROOT, 'lib', 'data', 'soc', 'secrets')

const index = JSON.parse(readFileSync(path.join(ROOT, 'lib', 'data', 'soc', 'exams-index.json'), 'utf8'))

/* ── referentne funkcije iz isporučenog HTML-a ────────────────────────────── */

function extractHtmlScoring() {
  const source = readFileSync(HTML_PATH, 'utf8')
  const open = source.lastIndexOf('<script>')
  const bodyStart = open + '<script>'.length
  const code = source.slice(bodyStart, source.indexOf('</script>', bodyStart))
  const ast = acorn.parse(code, { ecmaVersion: 'latest' })

  // `asList` je pomoćna funkcija koju `chk` u HTML-u koristi (odgovor koji nije
  // ni polje ni tekst svodi na prazan popis), pa se mora izvući zajedno s njim.
  const wanted = new Set(['nrm', 'asList', 'chk', 'grade', 'calcXpGain'])
  const parts = []
  for (const node of ast.body) {
    if (node.type === 'FunctionDeclaration' && wanted.has(node.id.name)) {
      parts.push(code.slice(node.start, node.end))
      wanted.delete(node.id.name)
    }
  }
  if (wanted.size) throw new Error(`U HTML-u nedostaju funkcije: ${[...wanted].join(', ')}`)

  const context = vm.createContext(Object.create(null))
  vm.runInContext(`${parts.join('\n')}\n;globalThis.__REF__={nrm,chk,grade,calcXpGain};`, context)
  return context.__REF__
}

const ref = extractHtmlScoring()

/**
 * Referentni `chk` je sada DOSLOVNO onaj iz HTML-a, bez ijednog dodatka.
 * Čuvar `if(!q||!q.sol) return null` živi u samom engineu (Faza 2, zadatak E):
 * free korisnik u ispitnom modu dobiva sva pitanja bez ključa, pa bi bezuvjetno
 * čitanje `q.sol.cl` značilo bijeli ekran umjesto tihe degradacije. Test na dnu
 * tvrdi da čuvar doista postoji i da se ponaša isto kao u modulu.
 */
function refChk(question, answer) {
  return ref.chk(question, answer)
}

/* ── učitavanje stvarnih ispita ───────────────────────────────────────────── */

/** Pitanja spojena iz javnog payloada i tajnog storea — onako kako ih vidi adapter. */
function loadExam(key) {
  const payload = JSON.parse(readFileSync(path.join(PUBLIC_DIR, `${key}.json`), 'utf8'))
  const secrets = JSON.parse(readFileSync(path.join(SECRETS_DIR, `${key}.json`), 'utf8'))
  return {
    payload,
    secrets,
    merged: payload.qs.map((q) => ({ ...q, ...secrets[q.id] })),
  }
}

/* ── deterministički odgovori ─────────────────────────────────────────────── */

/** mulberry32 — isti niz na svakom pokretanju, pa je pad reproducibilan. */
function rng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F']

/**
 * Za svako pitanje: ~40 % točan odgovor, ~35 % netočan, ~25 % prazan/nedostaje.
 * Točni `fb` odgovori se namjerno „prljaju“ velikim slovima i interpunkcijom da
 * se provjeri i `nrm` (mala slova, trim, skidanje `.,!?;:`).
 */
function makeAnswers(questions, seed) {
  const next = rng(seed)
  const answers = {}

  for (const q of questions) {
    const roll = next()
    if (roll > 0.75) continue // bez odgovora

    const wrong = roll > 0.4
    const sol = q.sol

    if (q.type === 'mc') {
      if (!sol || typeof sol.cl !== 'string') { answers[q.id] = 'A'; continue }
      answers[q.id] = wrong
        ? LETTERS[(LETTERS.indexOf(sol.cl) + 1 + Math.floor(next() * 3)) % LETTERS.length]
        : sol.cl
    } else if (q.type === 'ms') {
      const cls = Array.isArray(sol?.cls) ? sol.cls : []
      answers[q.id] = wrong ? [...cls.slice(1), 'F'] : [...cls].reverse()
    } else if (q.type === 'mat') {
      const pairs = Array.isArray(sol?.pairs) ? sol.pairs : []
      const map = {}
      pairs.forEach((p, i) => {
        map[p.l] = wrong && i === 0 ? `${p.r} (krivo)` : p.r
      })
      answers[q.id] = map
    } else if (q.type === 'fb') {
      const accepted = sol?.alt || [sol?.ans]
      const correct = accepted[Math.floor(next() * accepted.length)]
      answers[q.id] = wrong ? 'potpuno netočan odgovor' : ` ${String(correct).toUpperCase()}.`
    } else {
      answers[q.id] = 'Slobodan tekst odgovora koji se ne ocjenjuje automatski.'
    }
  }
  return answers
}

/** Agregat onako kako ga računa `Sim.submit()` u HTML-u. */
function referenceAggregate(questions, answers) {
  const auto = questions.filter((q) => q.type !== 'sa' && q.type !== 'es')
  let cor = 0
  for (const q of auto) if (refChk(q, answers[q.id]) === true) cor += 1
  const pct = auto.length ? Math.round((cor / auto.length) * 100) : 0
  return { cor, total: auto.length, pct, grade: ref.grade(pct), xpGain: ref.calcXpGain(pct) }
}

/* ── testovi ──────────────────────────────────────────────────────────────── */

describe('soc — paritet s ocjenjivanjem iz HTML-a', () => {
  it('referentne funkcije su doista izvučene iz isporučenog HTML-a', () => {
    expect(typeof ref.chk).toBe('function')
    expect(typeof ref.grade).toBe('function')
    // Pragovi 85/70/55/40 — ako ih netko promijeni u HTML-u, ovo pada prvo.
    for (const pct of [0, 39, 40, 54, 55, 69, 70, 84, 85, 100]) {
      expect(grade(pct)).toBe(ref.grade(pct))
      expect(calcXpGain(pct)).toBe(ref.calcXpGain(pct))
    }
  })

  it('chk daje isti rezultat za svako od 1718 pitanja, u tri različita skupa odgovora', () => {
    let compared = 0
    for (const entry of index) {
      const { merged } = loadExam(entry.key)
      for (const seed of [1, 1337, 99991]) {
        const answers = makeAnswers(merged, seed)
        for (const q of merged) {
          const mine = chk(q, answers[q.id])
          const theirs = refChk(q, answers[q.id])
          if (mine !== theirs) {
            throw new Error(`${entry.key}/${q.id} (${q.type}): moj ${mine}, HTML ${theirs}`)
          }
          compared += 1
        }
      }
    }
    expect(compared).toBe(1718 * 3)
  })

  it('cor/total/pct/ocjena su identični nad svim ispitima', () => {
    for (const entry of index) {
      const { merged } = loadExam(entry.key)
      for (const seed of [7, 42, 2024]) {
        const answers = makeAnswers(merged, seed)
        const expected = referenceAggregate(merged, answers)
        const actual = scoreExam(merged, answers)
        expect({
          cor: actual.cor, total: actual.total, pct: actual.pct, grade: actual.grade, xpGain: actual.xpGain,
        }).toEqual(expected)
      }
    }
  })

  it('adapter.score (javna pitanja + tajni store) daje isti agregat kao HTML', () => {
    for (const entry of index) {
      const { payload, secrets, merged } = loadExam(entry.key)
      const answers = makeAnswers(merged, 5150)
      const expected = referenceAggregate(merged, answers)
      const actual = adapterScore(payload.qs, secrets, answers)

      expect(actual.cor).toBe(expected.cor)
      expect(actual.total).toBe(expected.total)
      expect(actual.pct).toBe(expected.pct)
      expect(actual.grade).toBe(expected.grade)
      // Sociologija nema bodove po pitanju.
      expect(actual.bodovi).toBeNull()
      // `scores` ima unos za SVAKO pitanje; sa/es su null (ručno ocjenjivo).
      expect(Object.keys(actual.scores).sort()).toEqual(payload.qs.map((q) => q.id).sort())
      for (const q of payload.qs) {
        if (q.type === 'sa' || q.type === 'es') expect(actual.scores[q.id]).toBeNull()
      }
    }
  })

  it('topicBreakdown preskače sa/es i zbraja se u total', () => {
    const { merged } = loadExam('2024_ljeto')
    const answers = makeAnswers(merged, 3)
    const result = scoreExam(merged, answers)
    const sum = Object.values(result.topicBreakdown).reduce((s, t) => s + t.total, 0)
    expect(sum).toBe(result.total)
    for (const t of Object.values(result.topicBreakdown)) {
      expect(t.correct).toBeLessThanOrEqual(t.total)
    }
  })

  it('pitanja bez ključa daju null i u modulu i u engineu', () => {
    // Tri `mc` pitanja u 2018_jesen nemaju `sol` u izvoru. Popis je namjerno
    // doslovan: čim ih se popravi (ili ih se pojavi više), ovaj test traži da se
    // odluka ponovi svjesno.
    const { merged } = loadExam('2018_jesen')
    const keyless = merged.filter((q) => !q.sol).map((q) => q.id)
    expect(keyless).toEqual(['33_1', '34_1', '35_1'])

    for (const q of merged.filter((x) => !x.sol)) {
      expect(chk(q, 'A')).toBeNull()
      // Engine više NE puca. Bez ovog čuvara free korisnik — koji sva pitanja
      // dobiva bez ključa — ne bi mogao ni otvoriti ispit, a kamoli ga predati.
      expect(ref.chk(q, 'A')).toBeNull()
    }

    // Isto vrijedi za pitanje koje uopće nije proslijeđeno.
    expect(ref.chk(null, 'A')).toBeNull()
    expect(ref.chk(undefined, 'A')).toBeNull()

    // Takva pitanja i dalje ulaze u nazivnik (tip nije sa/es) — isto kao u
    // `Sim.submit()`, gdje je autoQ filtriran samo po tipu.
    const result = scoreExam(merged, {})
    expect(result.total).toBe(merged.filter((q) => q.type !== 'sa' && q.type !== 'es').length)
  })
})
