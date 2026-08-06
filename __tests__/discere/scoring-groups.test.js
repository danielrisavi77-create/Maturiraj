import { describe, expect, it } from 'vitest'
import { scoreExam } from '@/lib/discere/scoring'

describe('Discere grouped exam scoring', () => {
  it('scores nested child responses and reports leaf unanswered ids', () => {
    const child = (id, topic) => ({
      id, type:'mc', points:1, topic,
      options:[{id:'A'},{id:'B'}],
      answer:{ kind:'choice', correct:['B'] },
    })
    const exam = {
      meta:{ subject:'bio', key:'2026_ljeto', maxPoints:2 },
      questions:[{
        id:'group-1', type:'passage_group',
        children:[child('1.1','ekologija'), child('1.2','ekologija')],
      }],
    }

    const result = scoreExam(exam, { 'group-1': { '1.1':'B' } })
    expect(result.earnedPoints).toBe(1)
    expect(result.unanswered).toEqual(['1.2'])
    expect(result.topicBreakdown.ekologija).toEqual({ earned:1, possible:2 })
  })
})
