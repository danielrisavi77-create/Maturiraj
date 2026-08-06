// @vitest-environment happy-dom
import React from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const loadSubjectIndex = vi.fn()
const loadExam = vi.fn()
const saveCanonicalSimResult = vi.fn()

vi.mock('@/lib/discere/content-loader', () => ({ loadSubjectIndex, loadExam }))
vi.mock('@/lib/discere/progress', () => ({ saveCanonicalSimResult }))

import GenericSubjectApp from '@/components/discere/common/GenericSubjectApp'

const fakeExam = {
  meta:{ subject:'bio', key:'2026_ljeto', label:'Ljetni rok 2026.', level:null, durationSec:600, questionCount:1, maxPoints:1 },
  questions:[{
    id:'1', type:'mc', prompt:'Pitanje?', points:1, topic:'stanica', sourceRef:{task:'1'}, assets:[], explanation:null,
    options:[{id:'A',text:'A'},{id:'B',text:'B'}], answer:{kind:'choice',correct:['B'],source:'official'},
  }],
}

describe('GenericSubjectApp', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    loadSubjectIndex.mockResolvedValue({
      subject:'bio',
      exams:[{ key:'2026_ljeto', year:2026, season:'ljeto', label:'Ljetni rok 2026.', durationSec:600, questionCount:1, maxPoints:1, qaStatus:'verified' }],
    })
    loadExam.mockResolvedValue(fakeExam)
    saveCanonicalSimResult.mockResolvedValue({ saved:true })
  })

  it('persists the canonical result after submission', async () => {
    render(<GenericSubjectApp subject={{ id:'bio', name:'Biologija' }} />)

    const examButton = await screen.findByRole('button', { name:/Ljetni rok 2026/i })
    await userEvent.click(examButton)
    await screen.findByText('Pitanje?')
    await userEvent.click(screen.getByLabelText('B'))
    await userEvent.click(screen.getByRole('button', { name:'Predaj ispit' }))
    await userEvent.click(screen.getByRole('button', { name:'Potvrdi predaju' }))

    await waitFor(() => expect(saveCanonicalSimResult).toHaveBeenCalledTimes(1))
    expect(saveCanonicalSimResult.mock.calls[0][0]).toMatchObject({
      subject:'bio', examKey:'2026_ljeto', earnedPoints:1, maxPoints:1, percent:100,
    })
  })
})
