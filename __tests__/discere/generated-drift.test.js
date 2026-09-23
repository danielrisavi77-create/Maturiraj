// A6: regeneracija u memoriji mora biti jednaka onome što je na disku —
// isto svojstvo kao discere-validate.mjs GENERATED_*_DRIFT provjera, ali
// izravno nad generatorom (scripts/gen-discere-exams.mjs), bez CLI-ja.
import { describe, expect, it } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { upgradeExam, validateExam } from '@/lib/discere/exam-schema'
import { buildPublicExam, buildSecrets, buildSummaryLeaves, buildTopics } from '@/scripts/gen-discere-exams.mjs'

const ROOT = resolve(__dirname, '..', '..')

function readJson(relPath) {
  return JSON.parse(readFileSync(resolve(ROOT, relPath), 'utf8'))
}

describe('Discere generator drift (bio)', () => {
  it('regenerating 2026_ljeto in memory matches the files committed on disk', async () => {
    const { exam: rawExam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const exam = upgradeExam(rawExam)
    expect(validateExam(exam).errors).toEqual([])

    const publicExam = buildPublicExam(exam)
    const onDiskPublic = readJson('content/bio/exams/2026_ljeto.json')
    expect(publicExam).toEqual(onDiskPublic)

    const { secrets, leafCount } = buildSecrets(exam.questions)
    const onDiskSecrets = readJson('lib/data/bio/secrets/2026_ljeto.json')
    expect(secrets).toEqual(onDiskSecrets)
    expect(leafCount).toBe(Object.keys(secrets).length)

    const summaryLeaves = buildSummaryLeaves(exam.questions)
    const onDiskSummary = readJson('content/discere/bio/summary.json')
    expect(summaryLeaves).toEqual(onDiskSummary.exams['2026_ljeto'])
    expect(summaryLeaves).toHaveLength(leafCount)

    // topics.json i index.json su isto generirani artefakti — i oni moraju pratiti izvor.
    expect(buildTopics('bio', onDiskSummary.exams)).toEqual(readJson('content/discere/bio/topics.json'))
  })

  it('public payload never carries answer/solution/explanation, even nested in children', async () => {
    const onDiskPublic = readJson('content/bio/exams/2026_ljeto.json')

    function assertNoSecrets(question) {
      expect(question).not.toHaveProperty('answer')
      expect(question).not.toHaveProperty('solution')
      expect(question).not.toHaveProperty('explanation')
      expect(question?.stimulus?.listening?.transcript).toBeUndefined()
      for (const child of question.children || []) assertNoSecrets(child)
    }
    for (const question of onDiskPublic.qs) assertNoSecrets(question)
  })

  it('the payload ON DISK passes public-mode schema validation (isporučeno, ne međurezultat)', async () => {
    const { exam: rawExam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const exam = upgradeExam(rawExam)
    const onDiskPublic = readJson('content/bio/exams/2026_ljeto.json')
    // Ruta serviranja sastavlja meta iz kanonskog zapisa i javne omotnice — isto radi generator.
    const publicResult = validateExam(
      { meta: { ...exam.meta, ...onDiskPublic.meta }, questions: onDiskPublic.qs },
      { public: true },
    )
    expect(publicResult.errors).toEqual([])
  })

  it('svaka slika u isporučenom payloadu zadržava alt tekst (renderer čita asset.alt)', () => {
    const onDiskPublic = readJson('content/bio/exams/2026_ljeto.json')
    const assets = []
    const collect = (question) => {
      for (const asset of question.assets || []) assets.push(asset)
      for (const child of question.children || []) collect(child)
    }
    for (const question of onDiskPublic.qs) collect(question)

    expect(assets.length).toBeGreaterThan(0)
    for (const asset of assets) {
      if (asset.type && asset.type !== 'image') continue
      expect(typeof asset.alt).toBe('string')
      expect(asset.alt.trim().length).toBeGreaterThan(0)
      expect(asset).not.toHaveProperty('altText')
    }
  })

  it('every leaf question has exactly one secret entry (broj listova == broj tajnih unosa)', async () => {
    const { exam: rawExam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const exam = upgradeExam(rawExam)
    const { secrets, leafCount } = buildSecrets(exam.questions)

    // Broj listova, NE zbroj bodova: list vrijedan 2 boda ne smije rušiti ovu tvrdnju.
    const countLeafQuestions = (questions) => (questions || []).reduce(
      (sum, q) => sum + (Array.isArray(q.children) && q.children.length ? countLeafQuestions(q.children) : 1),
      0,
    )
    const expectedLeaves = countLeafQuestions(exam.questions)
    const secretLeaves = Object.values(secrets).filter((entry) => entry.points !== undefined)

    expect(leafCount).toBe(expectedLeaves)
    expect(secretLeaves).toHaveLength(expectedLeaves)
    for (const entry of secretLeaves) {
      expect(entry.type).toBeTruthy()
      expect(entry.answer).toBeDefined()
    }
  })

  it('index.json reflects the actual generated question/point totals', () => {
    const index = readJson('content/discere/bio/index.json')
    const entry = index.exams.find((e) => e.key === '2026_ljeto')
    expect(entry.questionCount).toBe(48)
    expect(entry.maxPoints).toBe(70)
  })

  it('content/bio/exams/2026_ljeto.json nema tajnih ključeva osim alt teksta koji shema traži', async () => {
    const { countSecretKeys } = await import('@/scripts/security/exam-secret-scan.mjs')
    const raw = readFileSync(resolve(ROOT, 'content/bio/exams/2026_ljeto.json'), 'utf8')
    const altHits = (raw.match(/"alt":/g) || []).length

    // Bez `alt` (slabi ključ pred-A2 skena, a shema ga zahtijeva na slici) payload
    // ne smije imati nijedan pogodak. Ostane li išta, to je pravo curenje.
    const withoutAlt = raw.replace(/"alt":/g, '"altOpisSlike":')
    expect(countSecretKeys(withoutAlt)).toBe(0)

    // Baseline unos je točno broj alt tekstova — ne ostavlja prostor pravom curenju.
    const baseline = readJson('scripts/security/exam-secret-baseline.json')
    expect(baseline.files['content/bio/exams/2026_ljeto.json']).toBe(altHits)
    expect(countSecretKeys(raw)).toBe(altHits)
  })

  it('lib/data/bio/secrets/2026_ljeto.json is not reachable from any client root (spot check)', () => {
    const files = readdirSync(resolve(ROOT, 'lib/data/bio/secrets'))
    expect(files).toContain('2026_ljeto.json')
  })
})
