import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import {
  BASELINE_PATH,
  BaselineIncreaseError,
  SECRET_KEYS,
  baselineMissingKeys,
  STRONG_SECRET_KEYS,
  WEAK_SECRET_KEYS,
  compareToBaseline,
  countSecretKeys,
  extractImportSpecifiers,
  hasLeadingUseClient,
  isPublicExamPayloadPath,
  isSecretDataPath,
  listScanRootDirs,
  loadBaseline,
  scanImportIsolation,
  scanPublicExamPayloads,
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

  it('moduli s markerom su točno oni koje je netko pogledao', () => {
    // Popis je zatvoren namjerno — nova datoteka s markerom mora proći kroz
    // izmjenu ovog testa, pa se tajni modul ne može tiho pojaviti.
    const marked = report.secretModules.filter((file) => !file.endsWith('.json'))
    expect(marked).toEqual([
      'lib/exam-secrets/index.js',
      'lib/exam-secrets/registry.js',
      'lib/exam-secrets/subjects/canonical.js',
      'lib/exam-secrets/subjects/eng.js',
      'lib/exam-secrets/subjects/soc.js',
    ])
    // public-store.js NEMA marker namjerno: čita samo content/<id>/exams/*.json,
    // dakle javni materijal. Marker bi ga pretvorio u tajni modul i time zabranio
    // svaki (legitiman) put iz klijentskog grafa do javnog ispita.
    expect(marked).not.toContain('lib/exam-secrets/public-store.js')
  })

  it('tajni store je samo pod lib/data/<predmet>/secrets/ — eng 70, soc 32 ispita', () => {
    const data = report.secretModules.filter((file) => file.endsWith('.json'))
    expect(data.every((file) => isSecretDataPath(file))).toBe(true)
    expect(data.filter((file) => file.startsWith('lib/data/eng/secrets/'))).toHaveLength(70)
    expect(data.filter((file) => file.startsWith('lib/data/soc/secrets/'))).toHaveLength(32)
    const other = data.filter((file) => !/^lib\/data\/(eng|soc)\/secrets\//.test(file))
    expect(other).toEqual([])
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

  it('broji i ključeve canonical sheme, i to kao JAKE (sami po sebi otkrivaju rješenje)', () => {
    for (const key of ['answer', 'explanation', 'solution', 'rubricDetails', 'officialText', 'transcript']) {
      expect(STRONG_SECRET_KEYS, key).toContain(key)
      // Jaki ključ se broji i izvan datoteke oblika ispita — canonical ispit nema
      // ni `q:` ni `opts:`, nego `prompt:`/`options:`.
      expect(countSecretKeys(`{ "${key}": { "correct": ["C"] } }`), key).toBeGreaterThan(0)
    }
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
    // Baseline pamti popis ključeva pod kojim je zapisan. Proširenje popisa
    // (canonical: answer, explanation, solution…) nije regresija nego zahtjev za
    // regeneracijom — `baselineMissingKeys` ga imenuje, a ratchet do tada mjeri
    // istom mjerom kojom je baseline nastao (ADR-001 §6).
    expect(baseline.keys.every((key) => SECRET_KEYS.includes(key))).toBe(true)
    // Razlika se IMENUJE, a ne samo tvrdi da postoji: `baselineMissingKeys` je po
    // konstrukciji podskup SECRET_KEYS, pa je `.every(k => SECRET_KEYS.includes(k))`
    // uvijek istina — i kad je baseline prazan i kad je zastario za deset ključeva.
    // Ovaj oblik pada i kad netko regenerira baseline ispustivši `answer`, i kad ga
    // regenerira punim popisom (tada popis treba isprazniti i ovdje i u ADR-u §6).
    expect(baselineMissingKeys(baseline)).toEqual([
      'answer',
      'explanation',
      'solution',
      'rubricDetails',
      'officialText',
      'transcript',
    ])
    expect(baseline.roots).toContain('hooks')
    expect(Object.keys(baseline.files).length).toBeGreaterThan(0)
    expect(baseline.totalHits).toBe(
      Object.values(baseline.files).reduce((sum, n) => sum + n, 0),
    )
    // Baseline mora biti u POSIX obliku da bude isti na Windowsu i na CI-ju.
    for (const file of Object.keys(baseline.files)) expect(file).not.toContain('\\')
  })

  it('nijedna datoteka ne premašuje baseline i nema nove datoteke bez unosa', async () => {
    const baseline = await loadBaseline()
    const current = await scanSecretKeys({ keys: baseline.keys })
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

describe('ADR-001 SLOJ B2 — javni ispitni payload mjeri se PUNIM popisom ključeva', () => {
  it('prepoznaje content/<predmet>/exams/**.json, a ne i ostale JSON-e', () => {
    expect(isPublicExamPayloadPath('content/eng/exams/2010_ljeto.json')).toBe(true)
    expect(isPublicExamPayloadPath('content/discere/bio/exams/2026_ljeto.json')).toBe(true)
    expect(isPublicExamPayloadPath('content/eng/exams/nested/dio1.json')).toBe(true)
    expect(isPublicExamPayloadPath('content/eng/meta.json')).toBe(false)
    expect(isPublicExamPayloadPath('lib/data/eng/secrets/2010_ljeto.json')).toBe(false)
  })

  it('canonical ključ u javnom payloadu je PAD, iako ga ratchet (mjera baselinea) ne vidi', async () => {
    const dir = await mkdtemp(path.join(tmpdir(), 'exam-payload-'))
    try {
      const leaking = JSON.stringify({
        meta: { key: '2026_ljeto' },
        questions: [{ id: 'q1', type: 'mc', answer: { correct: ['C'] }, solution: { modelAnswer: 'x' } }],
      })
      await writeFixtureFile(dir, 'content/bio/exams/2026_ljeto.json', leaking)
      await writeFixtureFile(dir, 'content/bio/exams/2025_ljeto.json', JSON.stringify({
        meta: { key: '2025_ljeto' },
        questions: [{ id: 'q1', type: 'mc', options: [{ id: 'A' }] }],
      }))

      const payloads = await scanPublicExamPayloads({ root: dir })
      expect(payloads.ok).toBe(false)
      expect(payloads.leaks).toEqual([{ file: 'content/bio/exams/2026_ljeto.json', count: 2 }])

      // Ista datoteka pod popisom ključeva iz baselinea (bez canonical imena)
      // broji 0 — zbog toga sloj B2 i postoji.
      const baselineKeys = (await loadBaseline()).keys
      const asRatchetSeesIt = await scanSecretKeys({ root: dir, rootDirs: ['content'], keys: baselineKeys })
      expect(asRatchetSeesIt.files).toEqual({})
    } finally {
      await rm(dir, { recursive: true, force: true })
    }
  })

  it('stvarni repozitorij: nijedan javni ispitni payload ne nosi ključ', async () => {
    const payloads = await scanPublicExamPayloads()
    expect(payloads.leaks).toEqual([])
  }, 180000)
})

describe('ADR-001 — mrtve rute s ispitnim sadržajem su uklonjene', () => {
  it('cijelo stablo app/api/exams više ne postoji', async () => {
    const { access } = await import('node:fs/promises')
    // [razina]/route.js je bio javan i bez prijave; check/route.js je vraćao
    // točno/netočno po pitanju uz vlastiti, pogrešan `checkQ`. Oboje zamjenjuju
    // /api/sim/[subject]/exam/[examKey] i /api/sim/[subject]/grade.
    for (const dead of [
      path.resolve(process.cwd(), 'app', 'api', 'exams'),
      path.resolve(process.cwd(), 'app', 'api', 'exams', '[razina]', 'route.js'),
      path.resolve(process.cwd(), 'app', 'api', 'exams', 'check', 'route.js'),
    ]) {
      await expect(access(dead), dead).rejects.toThrow()
    }
  })
})

describe('ADR-001 SLOJ B — tajni store se ne broji u ratchetu', () => {
  it('lib/data/<predmet>/secrets/** nije u baselineu, iako je pun ključeva', async () => {
    const baseline = await loadBaseline()
    const inBaseline = Object.keys(baseline.files).filter((file) => isSecretDataPath(file))
    // To je mjesto na koje ključeve treba PRESELITI; da ih ratchet broji,
    // svaka uspješna migracija bila bi "porast". Sloj A gleda točno isti skup
    // putanja i pada ako je ijedna dohvatljiva iz klijenta.
    expect(inBaseline).toEqual([])
  })

  it('sken preskače tajni store, ali ne i ostatak lib/data', async () => {
    const current = await scanSecretKeys()
    expect(Object.keys(current.files).filter((file) => isSecretDataPath(file))).toEqual([])
  }, 180000)
})
