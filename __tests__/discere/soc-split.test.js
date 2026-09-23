import { readFileSync, readdirSync, existsSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import * as acorn from 'acorn'

/**
 * ADR-001, Faza 2 — invarijante reza sociološkog monolita.
 *
 * Rez radi scripts/soc-split-solutions.mjs: iz public/sim/sociologija.html vadi
 * `const EXAMS={…}` u content/soc/exams/<key>.json (javno) i
 * lib/data/soc/secrets/<key>.json (ključevi), a u HTML-u ostavlja `let EXAMS={}`.
 *
 * Ovi testovi su REGRESIJSKO SIDRO: jeftini su, a hvataju točno onu regresiju
 * koja je i dovela do problema — da netko ručno vrati pitanja (i ključeve) u
 * statički asset koji se poslužuje bez ijedne provjere.
 */

const ROOT = path.resolve(__dirname, '..', '..')
const HTML_PATH = path.join(ROOT, 'public', 'sim', 'sociologija.html')
const PUBLIC_DIR = path.join(ROOT, 'content', 'soc', 'exams')
const SECRETS_DIR = path.join(ROOT, 'lib', 'data', 'soc', 'secrets')
const INDEX_PATH = path.join(ROOT, 'lib', 'data', 'soc', 'exams-index.json')

/** Mjereno na izvoru u trenutku reza — svaka promjena mora biti svjesna. */
const EXPECTED_EXAMS = 32
const EXPECTED_QUESTIONS = 1718

/** Polja koja u javnom payloadu znače pad — uključujući potpolja `sol`-a. */
const FORBIDDEN = new Set([
  'sol', 'exp', 'why', 'steps', 'warn', 'graphRef', 'ocjenaKljuc', 'distraktori',
  'rubric', 'solFormula', 'svgFn', 'cl', 'cls', 'pairs', 'ans', 'alt', 'ex',
])

const html = readFileSync(HTML_PATH, 'utf8')
const index = JSON.parse(readFileSync(INDEX_PATH, 'utf8'))

function readJson(dir, key) {
  return JSON.parse(readFileSync(path.join(dir, `${key}.json`), 'utf8'))
}

function inlineScript(source) {
  const open = source.lastIndexOf('<script>')
  const bodyStart = open + '<script>'.length
  return source.slice(bodyStart, source.indexOf('</script>', bodyStart))
}

/** Prvo ime polja iz FORBIDDEN na bilo kojoj dubini, ili null. */
function findForbidden(value, trail = '') {
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      const hit = findForbidden(value[i], `${trail}[${i}]`)
      if (hit) return hit
    }
    return null
  }
  if (!value || typeof value !== 'object') return null
  for (const [field, child] of Object.entries(value)) {
    if (FORBIDDEN.has(field)) return `${trail}.${field}`
    const hit = findForbidden(child, `${trail}.${field}`)
    if (hit) return hit
  }
  return null
}

describe('soc — statički asset više ne nosi podatke', () => {
  it('EXAMS je prazan `let`, a QS nizova više nema', () => {
    const ast = acorn.parse(inlineScript(html), { ecmaVersion: 'latest' })
    const declared = []
    for (const node of ast.body) {
      if (node.type !== 'VariableDeclaration') continue
      for (const d of node.declarations) {
        if (d.id?.type === 'Identifier') declared.push({ name: d.id.name, kind: node.kind, init: d.init })
      }
    }

    const qs = declared.filter((d) => d.name === 'QS' || d.name === 'QS2' || /^QS_/.test(d.name))
    expect(qs).toHaveLength(0)

    const exams = declared.find((d) => d.name === 'EXAMS')
    expect(exams).toBeTruthy()
    expect(exams.kind).toBe('let') // mora biti mutabilan — bridge ga puni in place
    expect(exams.init.type).toBe('ObjectExpression')
    expect(exams.init.properties).toHaveLength(0)
  })

  it('u HTML-u nema nijednog ključa ni obrazloženja kao svojstva objekta', () => {
    // Isti obrazac koji koristi ratchet (scripts/security/exam-secret-scan.mjs).
    const pattern = /(?:^|[{,[])\s*["']?(sol|exp|why|pairs|cls|ocjenaKljuc|rubric|distraktori)["']?\s*:/gm
    expect(html.match(pattern)).toBeNull()
  })

  it('inline script se i dalje parsira', () => {
    expect(() => new Function(inlineScript(html))).not.toThrow()
  })

  it('META popis ispita ostaje inline (Home ga treba prije ijednog dohvata)', () => {
    expect(html).toContain('const SOC_EXAM_META=[')
    for (const entry of index) {
      expect(html).toContain(`{key:"${entry.key}",year:${entry.year}`)
    }
    // Ključevi i obrazloženja ne smiju biti u META retku, ali broj pitanja i MC
    // pitanja mora — bez njega se Home ruši na praznom EXAMS.
    expect(html).toMatch(/qCount:\d+,mcCount:\d+,durationSec:5400/)
  })

  it('EXAM_CONTEXT (javni NCVVO ulomci) ostaje inline', () => {
    expect(html).toContain('const EXAM_CONTEXT = {')
  })

  it('bridge ima jedinstvenu točku ulaza za punjenje EXAMS-a', () => {
    expect(html).toContain('window.__SOC_INGEST_EXAMS__')
    expect(html).toContain('function socIngestExam(payload)')
  })

  it('druga kopija monolita (content/discere/soc.html) je uklonjena', () => {
    // Dvije kopije banke = dvostruko curenje i nejasan izvor istine. Kopija nije
    // imala nijednog čitatelja u kodu (samo docs i baseline) i bila je starija od
    // one u public/ (sadržavala je pitanja ispravljena u auditu).
    expect(existsSync(path.join(ROOT, 'content', 'discere', 'soc.html'))).toBe(false)
  })
})

describe('soc — generirane datoteke', () => {
  it('indeks pokriva sve ispite i pitanja', () => {
    expect(index).toHaveLength(EXPECTED_EXAMS)
    expect(index.reduce((sum, e) => sum + e.qCount, 0)).toBe(EXPECTED_QUESTIONS)
    for (const entry of index) {
      expect(entry.key).toMatch(/^\d{4}_(ljeto|jesen)$/)
      expect(entry.qCount).toBeGreaterThan(0)
    }
  })

  it('na disku nema ni viška ni manjka datoteka', () => {
    const keys = new Set(index.map((e) => e.key))
    const jsons = (dir) => readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => f.slice(0, -5))
    expect(jsons(PUBLIC_DIR).sort()).toEqual([...keys].sort())
    expect(jsons(SECRETS_DIR).sort()).toEqual([...keys].sort())
  })

  it('javni payload nema nijedno tajno polje ni na kojoj dubini', () => {
    for (const entry of index) {
      const payload = readJson(PUBLIC_DIR, entry.key)
      expect(findForbidden(payload)).toBeNull()
    }
  })

  it('tajni store ima unos za svaki qid, i nijedan višak', () => {
    let questions = 0
    let secrets = 0
    for (const entry of index) {
      const payload = readJson(PUBLIC_DIR, entry.key)
      const store = readJson(SECRETS_DIR, entry.key)
      const ids = payload.qs.map((q) => q.id)

      expect(new Set(ids).size).toBe(ids.length) // qid je jedinstven unutar ispita
      expect(Object.keys(store).sort()).toEqual([...ids].sort())

      questions += ids.length
      secrets += Object.keys(store).length
    }
    expect(questions).toBe(EXPECTED_QUESTIONS)
    expect(secrets).toBe(EXPECTED_QUESTIONS)
  })

  it('svako pitanje nosi točno ono što treba za rješavanje', () => {
    const allowed = new Set(['id', 'type', 'topic', 'q', 'opts', 'items', 'nsel'])
    for (const entry of index) {
      const payload = readJson(PUBLIC_DIR, entry.key)
      expect(payload.qs).toHaveLength(entry.qCount)
      for (const q of payload.qs) {
        for (const field of Object.keys(q)) expect(allowed.has(field)).toBe(true)
        // id je NORMALIZIRAN U STRING: ocjenjivačka ruta zadržava samo odgovore
        // čiji je id string, pa bi brojčani id tiho dao nula točnih.
        expect(typeof q.id).toBe('string')
        expect(typeof q.q).toBe('string')
        if (q.type === 'mc' || q.type === 'ms') expect(Array.isArray(q.opts)).toBe(true)
        // MSQ bezuvjetno ispisuje "Odaberi N odgovora"; bez ključa N dolazi iz nsel.
        if (q.type === 'ms') expect(q.nsel).toBeGreaterThan(0)
      }
    }
  })

  it('meta nosi ono što engine treba prije prvog pitanja', () => {
    for (const entry of index) {
      const { meta } = readJson(PUBLIC_DIR, entry.key)
      expect(meta.year).toBe(entry.year)
      expect(meta.season).toBe(entry.season)
      expect(meta.label).toBe(entry.label)
      expect(meta.fullLabel).toBe(`${entry.year}. ${entry.label}`)
      expect(meta.razinaCode).toBeNull() // sociologija nema razinu
      expect(meta.durationSec).toBe(5400)
      expect(meta.qCount).toBe(entry.qCount)
      expect(meta.mcCount).toBe(entry.mcCount)
    }
  })

  it('tajni store nosi i type/topic, pa ocjenjivanje ne mora dirati javni payload', () => {
    const store = readJson(SECRETS_DIR, '2025_ljeto')
    const payload = readJson(PUBLIC_DIR, '2025_ljeto')
    for (const q of payload.qs) {
      expect(store[q.id].type).toBe(q.type)
      if (q.topic !== undefined) expect(store[q.id].topic).toBe(q.topic)
    }
  })
})
