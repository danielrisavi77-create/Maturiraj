import { expect, it } from 'vitest'
import { buildResult } from '@/lib/discere/scoring'

it('preserves nullable A/B exam level in canonical result', () => {
  const exam = {
    meta:{ subject:'eng', key:'2026_ljeto_A', label:'Ljeto A', level:'A', maxPoints:1 },
    questions:[{
      id:'1', type:'mc', points:1, topic:'reading',
      options:[{id:'A'},{id:'B'}], answer:{kind:'choice',correct:['A']},
    }],
  }
  const result = buildResult({
    exam,
    responses:{ 1:'A' },
    startedAt:'2026-08-06T10:00:00.000Z',
    completedAt:'2026-08-06T10:01:00.000Z',
  })
  expect(result.level).toBe('A')
})
