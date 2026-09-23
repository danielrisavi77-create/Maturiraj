import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { EXAMS } from '../../lib/engleski-simulator/exams.js'
import index from '../../lib/data/engleski-simulator/exams-index.json'

/**
 * ADR-001 — razdvajanje javnog payloada i tajnog storea je KORAK GENERATORA
 * (scripts/gen-eng-exams-json.mjs), pa ovaj test provjerava njegov izlaz, a ne
 * ručni zahvat. Pada ako se exams.js promijeni a datoteke nisu regenerirane —
 * i, važnije, ako bi ijedan ključ završio u javnom payloadu.
 */

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'content', 'eng', 'exams')
const SECRETS_DIR = path.join(ROOT, 'lib', 'data', 'eng', 'secrets')

const readJson = (file) => JSON.parse(readFileSync(file, 'utf8'))
const publicExam = (key) => readJson(path.join(PUBLIC_DIR, `${key}.json`))
const secretStore = (key) => readJson(path.join(SECRETS_DIR, `${key}.json`))

const allKeys = Object.keys(EXAMS)

/** Polja koja smiju u klijent (allowlista generatora). */
const PUBLIC_FIELDS = ['id', 'section', 'type', 'topic', 'q', 'opts', 'items', 'rights', 'note']

/**
 * Polja koja klijent nikad ne smije vidjeti: `sol`/`exp` iz podataka engleskog,
 * sva gnijezdena imena ključeva i ostatak popisa iz ADR-a — da test uhvati i
 * polje koje se tek pojavi u izvoru.
 */
const SECRET_FIELDS = [
  'sol', 'exp', 'why', 'steps', 'warn', 'graphRef', 'ocjenaKljuc',
  'distraktori', 'rubric', 'solFormula', 'svgFn', 'ans', 'cl', 'pairs', 'alt', 'ex', 'cls',
]

function collectKeys(value, out = new Set()) {
  if (Array.isArray(value)) {
    value.forEach((item) => collectKeys(item, out))
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      out.add(k)
      collectKeys(v, out)
    }
  }
  return out
}

describe('generator — javni payload po ispitu', () => {
  it('postoji točno jedna datoteka po ispitu (70), bez zaostalih', () => {
    const files = readdirSync(PUBLIC_DIR).filter((f) => f.endsWith('.json'))
    expect(allKeys).toHaveLength(70)
    expect(files.map((f) => f.slice(0, -5)).sort()).toEqual([...allKeys].sort())
  })

  it('broj i redoslijed pitanja su nepromijenjeni', () => {
    allKeys.forEach((key) => {
      const src = EXAMS[key].qs || []
      const out = publicExam(key).qs
      expect(out, key).toHaveLength(src.length)
      expect(out.map((q) => q.id), key).toEqual(src.map((q) => q.id))
    })
  })

  it('metapodaci odgovaraju izvoru', () => {
    allKeys.forEach((key) => {
      const src = EXAMS[key]
      const out = publicExam(key)
      expect(out.key).toBe(key)
      expect(out.meta.year).toBe(src.year)
      expect(out.meta.season).toBe(src.season)
      expect(out.meta.label).toBe(src.label)
      expect(out.meta.razina).toBe(src.razina)
      expect(out.meta.razinaCode).toBe(src.razina === 'visa' ? 'A' : 'B')
      expect(out.meta.fullLabel).toBe(`${src.year}. — ${src.label}`)
    })
  })

  it('NIJEDAN tajni ključ nije u javnom payloadu, ni gnijezdeno', () => {
    const offenders = []
    allKeys.forEach((key) => {
      const found = collectKeys(publicExam(key))
      SECRET_FIELDS.forEach((field) => {
        if (found.has(field)) offenders.push(`${key}: ${field}`)
      })
    })
    expect(offenders).toEqual([])
  })

  it('pitanje nosi samo polja s allowliste', () => {
    const extra = new Set()
    allKeys.forEach((key) => {
      publicExam(key).qs.forEach((q) => {
        Object.keys(q).forEach((field) => {
          if (!PUBLIC_FIELDS.includes(field)) extra.add(`${key}: ${field}`)
        })
      })
    })
    expect([...extra]).toEqual([])
  })

  it('polja za prikaz su sačuvana doslovno (q, opts, items, rights)', () => {
    allKeys.forEach((key) => {
      const srcQs = EXAMS[key].qs || []
      const outQs = publicExam(key).qs
      srcQs.forEach((q, i) => {
        const out = outQs[i]
        expect(out.q, `${key}#${q.id}`).toBe(q.q)
        expect(out.type).toBe(q.type)
        expect(out.section).toBe(q.section)
        expect(JSON.stringify(out.opts)).toBe(JSON.stringify(q.opts))
        expect(JSON.stringify(out.items)).toBe(JSON.stringify(q.items))
        expect(JSON.stringify(out.rights)).toBe(JSON.stringify(q.rights))
      })
    })
  })
})

describe('generator — tajni store', () => {
  it('ima datoteku po ispitu i unos za SVAKI qid', () => {
    let questions = 0
    let entries = 0
    allKeys.forEach((key) => {
      const secrets = secretStore(key)
      const qs = EXAMS[key].qs || []
      questions += qs.length
      entries += Object.keys(secrets).length
      qs.forEach((q) => {
        expect(secrets[q.id], `${key}#${q.id}`).toBeDefined()
      })
    })
    expect(questions).toBe(3009)
    expect(entries).toBe(questions)
  })

  it('čuva sol i exp doslovno, uz duplikat type/topic za ocjenjivanje', () => {
    allKeys.forEach((key) => {
      const secrets = secretStore(key)
      ;(EXAMS[key].qs || []).forEach((q) => {
        const secret = secrets[q.id]
        expect(JSON.stringify(secret.sol), `${key}#${q.id}`).toBe(JSON.stringify(q.sol))
        expect(secret.exp).toBe(q.exp)
        expect(secret.type).toBe(q.type)
        expect(secret.topic).toBe(q.topic)
      })
    })
  })

  it('ne nosi tekst pitanja — ključ i pitanje su razdvojeni', () => {
    allKeys.forEach((key) => {
      Object.values(secretStore(key)).forEach((secret) => {
        expect(secret.q).toBeUndefined()
        expect(secret.opts).toBeUndefined()
      })
    })
  })
})

describe('exams-index.json', () => {
  it('ima 70 zapisa s ispravnim qCount i metapodacima', () => {
    expect(index).toHaveLength(70)
    expect(index.map((r) => r.key)).toEqual(allKeys)
    index.forEach((rec) => {
      const src = EXAMS[rec.key]
      expect(src, rec.key).toBeDefined()
      expect(rec.qCount).toBe((src.qs || []).length)
      expect(rec.year).toBe(src.year)
      expect(rec.season).toBe(src.season)
      expect(rec.label).toBe(src.label)
      expect(rec.razina).toBe(src.razina)
      expect(rec.hasListening).toBe(!!src.hasListening)
      expect(rec.hasReading).toBe(!!src.hasReading)
    })
  })

  it('ne sadrži pitanja (lagan je)', () => {
    index.forEach((rec) => {
      expect(rec.qs).toBeUndefined()
      expect(Object.keys(rec).sort()).toEqual(['hasListening', 'hasReading', 'key', 'label', 'qCount', 'razina', 'season', 'year'])
    })
  })
})
