import { describe, expect, it } from 'vitest'
import { buildResult, scoreExam, scoreQuestion } from '@/lib/discere/scoring'

const mc = {
  id: '1', type: 'mc', points: 1, topic: 'stanica',
  options: [{ id: 'A' }, { id: 'B' }],
  answer: { kind: 'choice', correct: ['B'] },
}

describe('Discere canonical scoring', () => {
  it('scores exact multiple choice', () => {
    expect(scoreQuestion(mc, 'B')).toEqual({ earned: 1, possible: 1, status: 'scored' })
    expect(scoreQuestion(mc, 'A')).toEqual({ earned: 0, possible: 1, status: 'scored' })
  })

  it('requires an exact set for multi choice', () => {
    const q = { ...mc, type: 'multi', points: 2, answer: { kind: 'choice', correct: ['A', 'C'] } }
    expect(scoreQuestion(q, ['C', 'A']).earned).toBe(2)
    expect(scoreQuestion(q, ['A']).earned).toBe(0)
  })

  it('normalizes only explicit accepted short answers', () => {
    const q = { id: '2', type: 'short', points: 1, answer: { kind: 'text', accepted: ['Mitoza'] } }
    expect(scoreQuestion(q, '  mitoza  ').earned).toBe(1)
    expect(scoreQuestion(q, 'mitosis').earned).toBe(0)
  })

  it('scores fill gaps independently', () => {
    const q = {
      id: '3', type: 'fill', points: 2, gaps: [{ id: 'g1' }, { id: 'g2' }],
      answer: { kind: 'fill', accepted: { g1: ['DNA'], g2: ['RNA'] }, gapPoints: { g1: 1, g2: 1 } },
    }
    expect(scoreQuestion(q, { g1: 'dna', g2: 'krivo' }).earned).toBe(1)
  })

  it('supports all-or-nothing fill scoring for official 0/1 tasks', () => {
    const q = {
      id: '3b', type: 'fill', points: 1, gaps: [{ id: 'g1' }, { id: 'g2' }],
      answer: { kind: 'fill', accepted: { g1: ['DNA'], g2: ['RNA'] }, scoring: 'all_or_nothing' },
    }
    expect(scoreQuestion(q, { g1: 'dna', g2: 'krivo' }).earned).toBe(0)
    expect(scoreQuestion(q, { g1: 'dna', g2: 'rna' }).earned).toBe(1)
  })

  it('scores matching using explicit pair points', () => {
    const q = {
      id: '4', type: 'matching', points: 2,
      left: [{ id: 'l1' }, { id: 'l2' }], right: [{ id: 'r1' }, { id: 'r2' }],
      answer: { kind: 'matching', pairs: { l1: 'r2', l2: 'r1' }, pairPoints: { l1: 1, l2: 1 } },
    }
    expect(scoreQuestion(q, { l1: 'r2', l2: 'r2' }).earned).toBe(1)
  })

  it('supports all-or-nothing matching scoring for official 0/1 tasks', () => {
    const q = {
      id: '4b', type: 'matching', points: 1,
      left: [{ id: 'l1' }, { id: 'l2' }], right: [{ id: 'r1' }, { id: 'r2' }],
      answer: { kind: 'matching', pairs: { l1: 'r2', l2: 'r1' }, scoring: 'all_or_nothing' },
    }
    expect(scoreQuestion(q, { l1: 'r2', l2: 'r2' }).earned).toBe(0)
    expect(scoreQuestion(q, { l1: 'r2', l2: 'r1' }).earned).toBe(1)
  })

  it('scores ordering only when the full order is exact', () => {
    const q = { id: '5', type: 'ordering', points: 1, answer: { kind: 'ordering', order: ['b', 'a'] } }
    expect(scoreQuestion(q, ['b', 'a']).earned).toBe(1)
    expect(scoreQuestion(q, ['a', 'b']).earned).toBe(0)
  })

  it('scores true/false subitems independently', () => {
    const q = {
      id: '6', type: 'true_false', points: 2,
      statements: [{ id: 's1' }, { id: 's2' }],
      answer: { kind: 'true_false', values: { s1: true, s2: false }, statementPoints: { s1: 1, s2: 1 } },
    }
    expect(scoreQuestion(q, { s1: true, s2: true }).earned).toBe(1)
  })

  it('marks essays as manual instead of inventing a score', () => {
    const q = { id: '7', type: 'essay', points: 3, answer: { kind: 'rubric', rubric: [{ id: 'r1', points: 3 }] } }
    expect(scoreQuestion(q, 'tekst')).toEqual({ earned: 0, possible: 3, status: 'manual' })
  })

  it('sums grouped child scores', () => {
    const group = { id: 'g', type: 'passage_group', children: [{ ...mc, id: 'g.1' }, { ...mc, id: 'g.2' }] }
    expect(scoreQuestion(group, { 'g.1': 'B', 'g.2': 'A' })).toEqual({ earned: 1, possible: 2, status: 'scored' })
  })

  it('builds a normalized result with topics and unanswered ids', () => {
    const exam = {
      meta: { subject: 'bio', key: '2026_ljeto', label: 'Ljetni rok 2026.', maxPoints: 2 },
      questions: [{ ...mc, id: '1', topic: 'stanica' }, { ...mc, id: '2', topic: 'genetika' }],
    }
    const scored = scoreExam(exam, { 1: 'B' })
    expect(scored.earnedPoints).toBe(1)
    expect(scored.unanswered).toEqual(['2'])

    const result = buildResult({
      exam,
      responses: { 1: 'B' },
      startedAt: '2026-08-06T10:00:00.000Z',
      completedAt: '2026-08-06T10:10:00.000Z',
      flagged: ['2'],
    })
    expect(result.subject).toBe('bio')
    expect(result.examKey).toBe('2026_ljeto')
    expect(result.durationSec).toBe(600)
    expect(result.earnedPoints).toBe(1)
    expect(result.maxPoints).toBe(2)
    expect(result.percent).toBe(50)
    expect(result.unanswered).toEqual(['2'])
    expect(result.flagged).toEqual(['2'])
    expect(result.topicBreakdown.stanica).toEqual({ earned: 1, possible: 1 })
    expect(result.topicBreakdown.genetika).toEqual({ earned: 0, possible: 1 })
  })
})
