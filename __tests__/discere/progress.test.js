import { describe, expect, it } from 'vitest'
import { canonicalResultToProgressRow } from '@/lib/discere/progress'

describe('canonical Discere progress mapping', () => {
  it('preserves exact point scoring while filling legacy compatibility columns', () => {
    const row = canonicalResultToProgressRow({
      subject:'bio', examKey:'2026_ljeto', examLabel:'Ljetni rok 2026.', level:null,
      percent:77.5, earnedPoints:54.25, maxPoints:70, durationSec:3210,
      answers:{ 1:'B' }, topicBreakdown:{ genetika:{ earned:10.5, possible:14 } },
      unanswered:['12'], flagged:['8'], manualPending:false,
    }, 'user-1')

    expect(row).toMatchObject({
      user_id:'user-1', subject:'bio', exam_key:'2026_ljeto', exam_label:'Ljetni rok 2026.',
      razina:null, pct:78, correct:54, total:70,
      score_pct:77.5, earned_points:54.25, max_points:70,
      duration_sec:3210, result_version:2, manual_pending:false,
      unanswered:['12'], flagged:['8'],
    })
    expect(row.topic_breakdown.genetika).toEqual({ earned:10.5, possible:14 })
  })

  it('preserves A/B level when present and clamps legacy pct', () => {
    const row = canonicalResultToProgressRow({
      subject:'mat', examKey:'x', examLabel:'X', level:'A',
      percent:100.4, earnedPoints:10, maxPoints:10, durationSec:1,
      answers:{}, topicBreakdown:{}, unanswered:[], flagged:[], manualPending:false,
    }, 'user-2')
    expect(row.razina).toBe('A')
    expect(row.pct).toBe(100)
  })
})
