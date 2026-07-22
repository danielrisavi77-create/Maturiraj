import { describe, expect, it } from 'vitest'
import { EXAMS } from '@/app/discere/hrvatski/simulator/data/exams/index.js'
import { getApprovedCroatianQuestions, getCroatianQuestionRegistry, getCroatianRegistryReport, getLaunchCroatianQuestions, promptFingerprint } from '@/lib/game-mode/hrv-registry'
import { buildCroatianGameManifest } from '@/lib/game-mode/session'

describe('Croatian canonical registry', () => {
  it('adapts all Discere questions without mutating the source', () => {
    const firstExam: any = Object.values(EXAMS)[0]
    const before = JSON.stringify(firstExam.qs[0])
    const registry = getCroatianQuestionRegistry()
    expect(registry).toHaveLength(4839)
    expect(JSON.stringify(firstExam.qs[0])).toBe(before)
    expect(registry[0].id).toMatch(/^hrv:discere:/)
  })

  it('provides a launch-sized deduplicated runner pool', () => {
    const approved = getApprovedCroatianQuestions()
    const prompts = approved.map((question) => promptFingerprint(question.prompt))
    const report = getCroatianRegistryReport()
    expect(approved.length).toBeGreaterThanOrEqual(300)
    expect(new Set(prompts).size).toBe(prompts.length)
    expect(report.topics.jez_gram).toBeGreaterThanOrEqual(100)
    expect(report.topics.jez_pravopis).toBeGreaterThanOrEqual(60)
    expect(report.topics.jez_leks).toBeGreaterThanOrEqual(40)
    expect(report.topics.jez_sint).toBeGreaterThanOrEqual(30)
    expect((report.topics.jez_stil ?? 0) + (report.topics.knj_versif ?? 0)).toBeGreaterThanOrEqual(30)
    expect(report.topics.literature_fact).toBeGreaterThanOrEqual(40)
    expect(getLaunchCroatianQuestions()).toHaveLength(400)
  })

  it('creates deterministic manifests and a same-concept post-check', () => {
    const first = buildCroatianGameManifest({ recipe: 'quick_review', seed: 20260721 })
    const second = buildCroatianGameManifest({ recipe: 'quick_review', seed: 20260721 })
    expect(first.questions.map((question) => [question.id, question.answers.map((answer) => answer.id)]))
      .toEqual(second.questions.map((question) => [question.id, question.answers.map((answer) => answer.id)]))
    expect(first.questions).toHaveLength(10)
    first.postCheck.forEach((postQuestion) => {
      expect(first.questions.some((runnerQuestion) => runnerQuestion.prompt === postQuestion.prompt)).toBe(false)
      expect(first.questions.some((runnerQuestion) => runnerQuestion.conceptIds.some((concept) => postQuestion.conceptIds.includes(concept)))).toBe(true)
    })
  })

  it('builds a strict h25 chapter boost without unrelated questions', () => {
    const manifest = buildCroatianGameManifest({ recipe: 'chapter_boost', chapterSlug: 'h25', seed: 25 })
    expect(manifest.questions).toHaveLength(10)
    expect(manifest.questions.every((question) => question.chapterSlug === 'h25')).toBe(true)
  })
})
