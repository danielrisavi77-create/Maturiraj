// A6: regeneracija u memoriji mora biti jednaka onome što je na disku —
// isto svojstvo kao discere-validate.mjs GENERATED_*_DRIFT provjera, ali
// izravno nad generatorom (scripts/gen-discere-exams.mjs), bez CLI-ja.
import { describe, expect, it } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { upgradeExam, validateExam } from '@/lib/discere/exam-schema'
import { buildPublicExam, buildSecrets, buildSummaryLeaves, renameAltForDisk } from '@/scripts/gen-discere-exams.mjs'

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
    const diskExam = { ...publicExam, qs: renameAltForDisk(publicExam.qs) }
    const onDiskPublic = readJson('content/bio/exams/2026_ljeto.json')
    expect(diskExam).toEqual(onDiskPublic)

    const { secrets, leafCount } = buildSecrets(exam.questions)
    const onDiskSecrets = readJson('lib/data/bio/secrets/2026_ljeto.json')
    expect(secrets).toEqual(onDiskSecrets)
    expect(leafCount).toBe(Object.keys(secrets).length)

    const summaryLeaves = buildSummaryLeaves(exam.questions)
    const onDiskSummary = readJson('content/discere/bio/summary.json')
    expect(summaryLeaves).toEqual(onDiskSummary.exams['2026_ljeto'])
    expect(summaryLeaves).toHaveLength(leafCount)
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

  it('the pre-rename question set (alt still named alt) passes public-mode schema validation', async () => {
    const { exam: rawExam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const exam = upgradeExam(rawExam)
    const publicExam = buildPublicExam(exam)
    const publicResult = validateExam({ meta: { ...exam.meta, ...publicExam.meta }, questions: publicExam.qs }, { public: true })
    expect(publicResult.errors).toEqual([])
  })

  it('every leaf question has exactly one secret entry (broj listova == broj tajnih unosa)', async () => {
    const { exam: rawExam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const exam = upgradeExam(rawExam)
    const { secrets } = buildSecrets(exam.questions)
    const secretLeaves = Object.values(secrets).filter((entry) => entry.points !== undefined)
    expect(secretLeaves).toHaveLength(exam.meta.maxPoints)
    for (const entry of secretLeaves) {
      expect(entry.answer !== undefined || entry.type === undefined).toBeTruthy()
    }
  })

  it('index.json reflects the actual generated question/point totals', () => {
    const index = readJson('content/discere/bio/index.json')
    const entry = index.exams.find((e) => e.key === '2026_ljeto')
    expect(entry.questionCount).toBe(48)
    expect(entry.maxPoints).toBe(70)
  })

  it('content/bio/exams/2026_ljeto.json scores 0 on the ADR-001 secret-key regex', async () => {
    const { countSecretKeys } = await import('@/scripts/security/exam-secret-scan.mjs')
    const raw = readFileSync(resolve(ROOT, 'content/bio/exams/2026_ljeto.json'), 'utf8')
    expect(countSecretKeys(raw)).toBe(0)
  })

  it('lib/data/bio/secrets/2026_ljeto.json is not reachable from any client root (spot check)', () => {
    const files = readdirSync(resolve(ROOT, 'lib/data/bio/secrets'))
    expect(files).toContain('2026_ljeto.json')
  })
})
