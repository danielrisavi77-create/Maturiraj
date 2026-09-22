import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import {
  BASELINE_PATH,
  BaselineIncreaseError,
  SECRET_KEYS,
  STRONG_SECRET_KEYS,
  WEAK_SECRET_KEYS,
  compareToBaseline,
  countSecretKeys,
  extractImportSpecifiers,
  hasLeadingUseClient,
  isSecretDataPath,
  listScanRootDirs,
  loadBaseline,
  scanImportIsolation,
  scanSecretKeys,
  writeBaseline,
} from '../../scripts/security/exam-secret-scan.mjs'

/**
 * ADR-001 — docs/ADR-001-ispitni-podaci.md
 *
 * SLOJ A provjerava da tajni modul nije dohvatljiv iz klijentskog grafa uvoza.
 * Danas u repozitoriju nema nijednog tajnog modula, pa bi sloj bio trivijalno
 * zelen; zato uz provjeru nad stvarnim stablom ide i lažni primjer koji dokazuje
 * da provjera doista hvata propuštanje.
 *
 * SLOJ B je ratchet: broj pogodaka po datoteci smije samo padati.
 */

async function writeFixtureFile(root, relPath, contents) {
  const absPath = path.join(root, relPath)
  await mkdir(path.dirname(absPath), { recursive: true })
  await writeFile(absPath, contents, 'utf8')
}

describe('ADR-001 SLOJ A — izolacija grafa uvoza (stvarno stablo)', () => {
  let report

  // Sken cijelog stabla pod paralelnim opterećenjem suitea zna trajati > 60 s.
  beforeAll(async () => {
    report = await scanImportIsolation()
  }, 180000)

  it('nijedan tajni modul nije dohvatljiv iz klijentskog grafa', () => {
    expect(report.violations).toEqual([])
  })

  it('graf se doista gradi — ima modula, klijentskih korijena i dohvatljivih čvorova', () => {
    expect(report.moduleCount).toBeGreaterThan(100)
    expect(report.clientRoots.length).toBeGreaterThan(0)
    expect(report.reachableFromClient).toBeGreaterThan(report.clientRoots.length)
  })

  it('skenira sve runtime mape na korijenu, ne ručno popisane (hooks/ mora biti uključen)', async () => {
    const roots = await listScanRootDirs()
    expect(roots).toContain('hooks')
    expect(roots).toContain('app')
    expect(roots).toContain('public')
    expect(roots).not.toContain('node_modules')
    expect(roots).not.toContain('scripts')
    expect(roots).not.toContain('__tests__')
  })

  it('tajni moduli su točno oni koje je netko pogledao (marker ni lib/data/*/secrets/**)', () => {
    // Faza 1: zajednička infrastruktura nosi marker. Popis je zatvoren namjerno —
    // nova datoteka s markerom mora proći kroz izmjenu ovog testa, pa se tajni
    // modul ne može tiho pojaviti.
    expect(report.secretModules).toEqual([
      'lib/exam-secrets/index.js',
      'lib/exam-secrets/registry.js',
    ])
  })

  it('nijedan tajni modul nije ujedno i klijentski korijen', () => {
    expect(report.secretModules.filter((file) => report.clientRoots.includes(file))).toEqual([])
  })
})

describe('ADR-001 SLOJ A — lažni primjer dokazuje da provjera hvata propuštanje', () => {
  let root

  beforeAll(async () => {
    root = await mkdtemp(path.join(tmpdir(), 'exam-secret-'))

    await writeFile(
      path.join(root, 'tsconfig.json'),
      JSON.stringify({ compilerOptions: { baseUrl: '.', paths: { '@/*': ['./*'] } } }, null, 2),
      'utf8',
    )

    // Tajni moduli: marker u prvih 500 B te JSON pod lib/data/<predmet>/secrets/**.
    await writeFixtureFile(root, 'lib/exam-secrets/index.js', "// @exam-secret\nimport 'server-only'\nexport const kljucevi = {}\n")
    await writeFixtureFile(root, 'lib/data/hrvatski/secrets/2024.json', '{"sol":{"cl":"A"}}\n')

    // Nedužan poslužiteljski modul koji smije čitati tajne.
    await writeFixtureFile(root, 'lib/grade.js', "import 'server-only'\nimport { kljucevi } from '@/lib/exam-secrets'\nexport const g = kljucevi\n")

    // Klijentski korijen koji tajnu vuče preko alias uvoza — MORA pasti.
    await writeFixtureFile(root, 'components/LeakyScreen.jsx', "'use client'\nimport { kljucevi } from '@/lib/exam-secrets'\nexport default function S() { return kljucevi }\n")

    // Klijentski korijen koji tajni JSON vuče dinamičkim uvozom — MORA pasti.
    await writeFixtureFile(root, 'components/LeakyJson.jsx', "'use client'\nexport async function load() { return import('../lib/data/hrvatski/secrets/2024.json') }\n")

    // Poslužiteljska stranica sa 'server-only' nije klijentski korijen.
    await writeFixtureFile(root, 'app/ispit/page.jsx', "import 'server-only'\nimport { g } from '@/lib/grade'\nexport default function P() { return g }\n")

    // Klijentska stranica koja dira samo javni sadržaj — smije proći.
    await writeFixtureFile(root, 'app/pregled/page.jsx', "'use client'\nimport { pitanja } from '@/content/hrvatski/javno'\nexport default function P() { return pitanja }\n")
    await writeFixtureFile(root, 'content/hrvatski/javno.js', 'export const pitanja = [{ id: 1, q: "Pitanje?" }]\n')

    // Tajna u hooks/ (mapa koja nije app/components/lib/content) — MORA se vidjeti.
    await writeFixtureFile(root, 'hooks/useKljucevi.js', "// @exam-secret\nexport const k = { sol: { cl: 'B' } }\n")
    // Klijentska komponenta s dugim licenčnim bannerom ispred 'use client' — MORA pasti.
    const banner = `/**\n${' * Licenca i opis komponente.\n'.repeat(12)} */\n`
    await writeFixtureFile(root, 'components/LateDirective.jsx', `${banner}'use client'\nimport { k } from '@/hooks/useKljucevi'\nexport default function L() { return k }\n`)
  })

  afterAll(async () => {
    if (root) await rm(root, { recursive: true, force: true })
  })

  it('prepoznaje oba oblika tajnog modula, i u mapi izvan app/components/lib/content', async () => {
    const report = await scanImportIsolation({ root })
    expect(report.secretModules).toEqual([
      'hooks/useKljucevi.js',
      'lib/data/hrvatski/secrets/2024.json',
      'lib/exam-secrets/index.js',
    ])
  })

  it("'use client' datoteke i stranice bez server-only su klijentski korijeni, poslužiteljska stranica nije", async () => {
    const report = await scanImportIsolation({ root })
    expect(report.clientRoots).toContain('components/LeakyScreen.jsx')
    expect(report.clientRoots).toContain('components/LeakyJson.jsx')
    expect(report.clientRoots).toContain('components/LateDirective.jsx')
    expect(report.clientRoots).toContain('app/pregled/page.jsx')
    expect(report.clientRoots).not.toContain('app/ispit/page.jsx')
  })

  it('hvata statički uvoz, dinamički uvoz JSON-a i tajnu u hooks/ iza licenčnog bannera', async () => {
    const report = await scanImportIsolation({ root })
    const leaked = report.violations.map((v) => v.secret).sort()
    expect(leaked).toEqual([
      'hooks/useKljucevi.js',
      'lib/data/hrvatski/secrets/2024.json',
      'lib/exam-secrets/index.js',
    ])

    const chain = report.violations.find((v) => v.secret === 'lib/exam-secrets/index.js').chain
    expect(chain[0]).toBe('components/LeakyScreen.jsx')
    expect(chain.at(-1)).toBe('lib/exam-secrets/index.js')

    const hooksChain = report.violations.find((v) => v.secret === 'hooks/useKljucevi.js').chain
    expect(hooksChain[0]).toBe('components/LateDirective.jsx')
  })

  it('poslužiteljski put do tajne nije prekršaj kad klijent na njega ne dolazi', async () => {
    const serverOnlyRoot = await mkdtemp(path.join(tmpdir(), 'exam-secret-ok-'))
    try {
      await writeFixtureFile(serverOnlyRoot, 'lib/exam-secrets/index.js', '// @exam-secret\nexport const kljucevi = {}\n')
      await writeFixtureFile(serverOnlyRoot, 'app/api/grade/route.js', "import 'server-only'\nimport { kljucevi } from '../../../lib/exam-secrets/index.js'\nexport const POST = () => kljucevi\n")
      await writeFixtureFile(serverOnlyRoot, 'app/ispit/page.jsx', "'use client'\nexport default function P() { return null }\n")

      const report = await scanImportIsolation({ root: serverOnlyRoot })
      expect(report.secretModules).toEqual(['lib/exam-secrets/index.js'])
      expect(report.violations).toEqual([])
    } finally {
      await rm(serverOnlyRoot, { recursive: true, force: true })
    }
  })
})

describe('ADR-001 SLOJ A — pomoćne funkcije', () => {
  it('izvlači statički, dinamički, re-export i require specifikator', () => {
    const source = [
      "import a from '@/lib/a'",
      "import { b } from './b.js'",
      "export { c } from '../c'",
      "const d = await import('@/lib/d')",
      "const e = require('./e')",
      "import '@/styles/f.css'",
    ].join('\n')

    expect(extractImportSpecifiers(source).sort()).toEqual([
      '../c',
      './b.js',
      './e',
      '@/lib/a',
      '@/lib/d',
      '@/styles/f.css',
    ])
  })

  it('tajnim podatkom smatra samo JSON pod lib/data/<predmet>/secrets/**', () => {
    expect(isSecretDataPath('lib/data/hrvatski/secrets/2024.json')).toBe(true)
    expect(isSecretDataPath('lib/data/mat/secrets/duboko/2019.json')).toBe(true)
    expect(isSecretDataPath('lib/data/hrvatski/2024.json')).toBe(false)
    expect(isSecretDataPath('content/hrvatski/secrets/2024.json')).toBe(false)
  })

  it("'use client' vrijedi kao prva izjava, i iza komentara/bannera, ali ne iza prave izjave", () => {
    expect(hasLeadingUseClient("'use client'\nimport x from 'y'")).toBe(true)
    expect(hasLeadingUseClient('"use client";\n')).toBe(true)
    expect(hasLeadingUseClient("// komentar\n/* blok\n * banner */\n\n'use client'\n")).toBe(true)
    expect(hasLeadingUseClient(`/**${' *\n'.repeat(30)} */\n'use client'`)).toBe(true)
    expect(hasLeadingUseClient("import x from 'y'\n'use client'")).toBe(false)
    expect(hasLeadingUseClient("const s = 'use client'")).toBe(false)
    expect(hasLeadingUseClient('')).toBe(false)
  })
})

describe('ADR-001 SLOJ B — ratchet nad izvorom', () => {
  it('broji ključ samo u poziciji svojstva objekta ili JSON ključa', () => {
    expect(countSecretKeys('{ "sol": { "cl": "A" } }')).toBe(2)
    expect(countSecretKeys('const q = { exp: "zato", why: "jer", steps: [] }')).toBe(3)
    expect(countSecretKeys('[{ ans: 1 }, { pairs: [] }]')).toBe(2)

    // Ne smije hvatati spominjanje ključa izvan pozicije svojstva.
    expect(countSecretKeys('const sol = 1')).toBe(0)
    expect(countSecretKeys('console.log(q.sol)')).toBe(0)
    expect(countSecretKeys('obratiSe(exp)')).toBe(0)
  })

  it('pokriva svaki ključ iz ADR-a — jaki sami, slabi u datoteci oblika ispita', () => {
    for (const key of STRONG_SECRET_KEYS) {
      expect(countSecretKeys(`{ ${key}: 1 }`), key).toBe(1)
    }
    for (const key of WEAK_SECRET_KEYS) {
      expect(countSecretKeys(`{ q: "Pitanje?", ${key}: 1 }`), key).toBe(1)
    }
    expect(new Set(SECRET_KEYS)).toEqual(new Set([...STRONG_SECRET_KEYS, ...WEAK_SECRET_KEYS]))
    for (const required of ['ex', 'alt', 'svgFn']) expect(SECRET_KEYS).toContain(required)
  })

  it('generički ključevi izvan oblika ispita nisu pogodak (wizard steps, XP exp, className cl)', () => {
    expect(countSecretKeys('const wizard = { steps: ["Odaberi plan", "Unesi podatke", "Potvrdi"] }')).toBe(0)
    expect(countSecretKeys('const reward = { exp: 120, cl: "btn" }')).toBe(0)
    // …ali čim datoteka ima pitanje ili jaki ključ, broje se i slabi.
    expect(countSecretKeys('const q = { q: "Koliko?", opts: ["1", "2"], exp: "Zato." }')).toBe(1)
    expect(countSecretKeys('const q = { sol: { cl: "A" }, exp: "Zato." }')).toBe(3)
  })

  it('--write-baseline odbija porast i novu datoteku bez --allow-increase', async () => {
    const dir = await mkdtemp(path.join(tmpdir(), 'exam-secret-baseline-'))
    const file = path.join(dir, 'baseline.json')
    try {
      const lower = { files: { 'lib/a.js': 5 }, totalHits: 5, fileCount: 1, roots: ['lib'] }
      await writeBaseline(lower, file)

      const higher = { files: { 'lib/a.js': 6 }, totalHits: 6, fileCount: 1, roots: ['lib'] }
      await expect(writeBaseline(higher, file)).rejects.toBeInstanceOf(BaselineIncreaseError)

      const added = { files: { 'lib/a.js': 5, 'lib/novo.js': 1 }, totalHits: 6, fileCount: 2, roots: ['lib'] }
      await expect(writeBaseline(added, file)).rejects.toBeInstanceOf(BaselineIncreaseError)

      const written = await writeBaseline(higher, file, { allowIncrease: true })
      expect(written.files['lib/a.js']).toBe(6)

      const evenLower = { files: { 'lib/a.js': 2 }, totalHits: 2, fileCount: 1, roots: ['lib'] }
      const ok = await writeBaseline(evenLower, file)
      expect(ok.files['lib/a.js']).toBe(2)
    } finally {
      await rm(dir, { recursive: true, force: true })
    }
  })

  it('baseline postoji, generiran je skriptom i nije prazan', async () => {
    const baseline = await loadBaseline()
    expect(baseline.schemaVersion).toBe(2)
    expect(baseline.keys).toEqual([...SECRET_KEYS])
    expect(baseline.roots).toContain('hooks')
    expect(Object.keys(baseline.files).length).toBeGreaterThan(0)
    expect(baseline.totalHits).toBe(
      Object.values(baseline.files).reduce((sum, n) => sum + n, 0),
    )
    // Baseline mora biti u POSIX obliku da bude isti na Windowsu i na CI-ju.
    for (const file of Object.keys(baseline.files)) expect(file).not.toContain('\\')
  })

  it('nijedna datoteka ne premašuje baseline i nema nove datoteke bez unosa', async () => {
    const current = await scanSecretKeys()
    const baseline = await loadBaseline()
    const diff = compareToBaseline(current, baseline)

    expect(diff.regressions, `Baseline: ${BASELINE_PATH}`).toEqual([])
    expect(diff.newFiles, 'Nova datoteka s ispitnim ključevima nema unos u baselineu').toEqual([])
  }, 180000)

  it('ratchet prijavljuje porast, novu datoteku i napredak', () => {
    const baseline = { files: { 'lib/a.js': 5, 'lib/b.js': 3, 'lib/c.js': 2 } }
    const current = { files: { 'lib/a.js': 6, 'lib/b.js': 1, 'lib/novo.js': 4 } }
    const diff = compareToBaseline(current, baseline)

    expect(diff.regressions).toEqual([{ file: 'lib/a.js', count: 6, allowed: 5 }])
    expect(diff.newFiles).toEqual([{ file: 'lib/novo.js', count: 4 }])
    expect(diff.improvements).toEqual([{ file: 'lib/b.js', count: 1, allowed: 3 }])
    expect(diff.removed).toEqual([{ file: 'lib/c.js', allowed: 2 }])
    expect(diff.ok).toBe(false)
  })

  it('ratchet je zelen kad broj pogodaka samo pada', () => {
    const baseline = { files: { 'lib/a.js': 5 } }
    expect(compareToBaseline({ files: { 'lib/a.js': 5 } }, baseline).ok).toBe(true)
    expect(compareToBaseline({ files: { 'lib/a.js': 0 } }, baseline).ok).toBe(true)
    expect(compareToBaseline({ files: {} }, baseline).ok).toBe(true)
  })
})

describe('ADR-001 — mrtva javna ruta s ispitnim sadržajem je uklonjena', () => {
  it('app/api/exams/[razina]/route.js više ne postoji', async () => {
    const { access } = await import('node:fs/promises')
    const dead = path.resolve(process.cwd(), 'app', 'api', 'exams', '[razina]', 'route.js')
    await expect(access(dead)).rejects.toThrow()
  })
})
