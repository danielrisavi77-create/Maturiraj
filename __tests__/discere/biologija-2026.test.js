import { describe, expect, it } from 'vitest'
import { validateExam } from '@/lib/discere/exam-schema'
import { validateExamAssets } from '@/scripts/discere-asset-integrity.mjs'
import { resolve } from 'node:path'
import assetManifest from '@/content/discere/bio/qa/2026_ljeto-assets.json'
import { scoreQuestion, scoreExam } from '@/lib/discere/scoring'

describe('Biologija 2026 official first-session exam', () => {
  it('recognizes equivalent pair order and literal official text without accepting incomplete or wrong answers', async () => {
    const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const leaves = Object.fromEntries(exam.questions.flatMap(q => q.children || []).map(q => [q.id, q]))
    for (const [id, accepted, rejected] of [
      ['44.1', ['5 i 3', '5,3', '3; 5', 'brojevima 5 i 3', '3 i 5.'], ['3', '5', '3 i 3', '3 i 4', '3, 5, 2', '35']],
      ['47.1', ['Xᴮ ; Y', 'Y; Xᴮ', 'Y, XB', 'X^B i Y', 'Y i X^B'], ['XB', 'Y', 'XA i Y', 'Xᴬ ; Y', 'XB i XB', 'XB, Y, XA', 'XBY']],
      ['48.1', ['Areal se povećava.', 'povećava se.'], ['smanjuje se', 'ne povećava se', 'ostaje jednak']],
    ]) {
      for (const answer of accepted) expect(scoreQuestion(leaves[id], answer).earned, `${id}: ${answer}`).toBe(1)
      for (const answer of rejected) expect(scoreQuestion(leaves[id], answer).earned, `${id}: ${answer}`).toBe(0)
    }
    expect(scoreQuestion(leaves['47.1'], leaves['47.1'].answer.officialText).earned).toBe(1)
    expect(scoreQuestion(leaves['48.1'], leaves['48.1'].answer.officialText).earned).toBe(1)
  })
  it('preserves the source table skeleton assignments and scientific subscripts', async () => {
    const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const question = exam.questions.find(q => q.id === '6')
    expect(question.stimulus.table.rows[1]).toEqual(['skelet', 'vapnenasti egzoskelet', 'hidroskelet', 'hidroskelet', 'polisaharidni egzoskelet'])
    expect(exam.questions.find(q => q.id === '24').options.find(o => o.id === 'C').text).toBe('e₁e₂')
    expect(exam.questions.find(q => q.id === '35').options.find(o => o.id === 'A').text).toContain('H₂O')
  })
  it('keeps official open-answer wording separate from digital matching variants', async () => {
    const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const leaves = exam.questions.flatMap(q => q.children || [])
    expect(leaves).toHaveLength(35)
    for (const question of leaves) {
      expect(question.answer.officialText?.length).toBeGreaterThan(0)
      expect([2, 3, 4]).toContain(question.sourceRef.keyPdfPage)
      if (question.answer.accepted) expect(question.answer.acceptedSource).toBe('maturiraj-adapted')
      if (question.type === 'essay') expect(question.answer.rubric[0].text).toBe(question.answer.officialText)
    }
    const byId = Object.fromEntries(leaves.map(q => [q.id, q]))
    expect(byId['39.1'].answer.officialText).toBe('40 %')
    expect(byId['39.1'].answer.accepted).toContain('40')
    expect(byId['42.2'].prompt).toContain('moreplovci tijekom dugih plovidbi')
    expect(byId['47.2'].prompt).toContain('Alel za žutu dlaku')
    expect(byId['40.2'].answer.officialText).toContain('dušičnu bazu timin')
    expect(byId['43.3'].answer.officialText).not.toContain('navesti dvije')
  })
  it('scores the four cladogram fields against the visually checked official key, all or nothing', async () => {
    const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const question = exam.questions.find(q => q.id === '37').children[0]
    expect(question.type).toBe('fill')
    expect(question.gaps.map(g => g.id)).toEqual(['left1', 'left2', 'left3', 'left4'])
    const correct = { left1: 'D', left2: 'A', left3: 'B', left4: 'C' }
    expect(scoreQuestion(question, correct)).toEqual({ earned: 1, possible: 1, status: 'scored' })
    expect(scoreQuestion(question, { ...correct, left4: 'B' }).earned).toBe(0)
    expect(scoreQuestion(question, { left1: 'D', left2: 'A', left3: 'B' }).earned).toBe(0)
    expect(scoreQuestion(question, {}).earned).toBe(0)
    expect(scoreExam(exam).autoPossiblePoints).toBe(55)
    expect(scoreExam(exam).manualPossiblePoints).toBe(15)
  })
  it('matches the official structural totals and passes canonical validation', async () => {
    const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')

    expect(exam.meta.subject).toBe('bio')
    expect(exam.meta.year).toBe(2026)
    expect(exam.meta.durationSec).toBe(9000)
    expect(exam.meta.questionCount).toBe(48)
    expect(exam.meta.maxPoints).toBe(70)
    expect(exam.questions.filter((question) => question.type === 'mc')).toHaveLength(35)

    const result = validateExam(exam)
    expect(result.errors).toEqual([])
  })

  it('ships the same 20 decoded image crops that were reviewed against the official source', async () => {
    const { exam } = await import('@/content/discere/bio/exams/2026_ljeto.mjs')
    const result = await validateExamAssets(exam, { publicRoot: resolve('public') })
    expect(result.errors).toEqual([])
    expect(result.assets).toHaveLength(20)
    expect(assetManifest.assets).toHaveLength(20)
    for (const asset of result.assets) {
      const record = assetManifest.assets.find((item) => item.questionId === asset.questionId)
      expect(record).toBeDefined()
      expect(asset.src).toBe(`/discere/bio/2026_ljeto/${record.file}`)
      expect(asset.sha256).toBe(record.sha256)
      expect(asset.width).toBe(record.width)
      expect(asset.height).toBe(record.height)
    }
  })
})
