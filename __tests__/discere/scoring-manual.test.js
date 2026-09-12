import { describe, expect, it } from 'vitest'
import { buildResult, scoreExam } from '@/lib/discere/scoring'

const mc = {
  id:'1', type:'mc', points:1, topic:'stanica',
  options:[{id:'A'},{id:'B'}], answer:{kind:'choice',correct:['B']},
}
const essay = {
  id:'2', type:'essay', points:1, topic:'stanica',
  answer:{kind:'rubric',rubric:[{id:'r',text:'Odgovor',points:1}]},
}

describe('manual rubric scoring', () => {
  it('separates automatically scored and manual point denominators', () => {
    const exam = { meta:{subject:'bio',key:'x',label:'X',maxPoints:2}, questions:[mc,essay] }
    const scored = scoreExam(exam, {'1':'B','2':'tekst'})
    expect(scored.earnedPoints).toBe(1)
    expect(scored.autoPossiblePoints).toBe(1)
    expect(scored.manualPossiblePoints).toBe(1)
    expect(scored.autoPercent).toBe(100)
    expect(scored.manualPending).toBe(true)
  })

  it('includes manual point metadata in the canonical result', () => {
    const exam = { meta:{subject:'bio',key:'x',label:'X',level:null,maxPoints:2}, questions:[mc,essay] }
    const result = buildResult({ exam, responses:{'1':'B','2':'tekst'}, startedAt:'2026-08-06T10:00:00Z', completedAt:'2026-08-06T10:01:00Z' })
    expect(result.autoPossiblePoints).toBe(1)
    expect(result.manualPossiblePoints).toBe(1)
    expect(result.autoPercent).toBe(100)
  })
})
