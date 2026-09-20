// @vitest-environment happy-dom
import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ExamShell from '@/components/discere/common/ExamShell'

const mc = (id, prompt) => ({
  id, type:'mc', prompt, points:1, topic:'stanica', sourceRef:{task:id}, assets:[], explanation:null,
  options:[{id:'A',text:'A'},{id:'B',text:'B'}],
  answer:{kind:'choice',correct:['B'],source:'official'},
})

function exam(durationSec = 600) {
  return {
    meta:{ subject:'bio', key:'2026_ljeto', label:'Ljetni rok 2026.', durationSec, questionCount:2, maxPoints:2 },
    questions:[
      mc('1','Prvo pitanje'),
      {
        id:'g1', type:'passage_group', prompt:'Pročitaj tekst', points:1, topic:'ekologija', sourceRef:{task:'2'}, assets:[], explanation:null,
        stimulus:{text:'Izvorni tekst'},
        children:[mc('g1.1','Drugo pitanje')],
      },
    ],
  }
}

afterEach(() => vi.useRealTimers())

describe('ExamShell', () => {
  it('preserves responses, flags questions and emits flat leaf answers on submit', async () => {
    const onComplete = vi.fn()
    const onExit = vi.fn()
    render(<ExamShell exam={exam()} onComplete={onComplete} onExit={onExit} />)

    expect(screen.getByText('1 / 2')).toBeTruthy()
    await userEvent.click(screen.getByLabelText('B'))
    await userEvent.click(screen.getByRole('button', { name:'Označi pitanje' }))
    await userEvent.click(screen.getByRole('button', { name:'Sljedeće' }))

    expect(screen.getByText('2 / 2')).toBeTruthy()
    await userEvent.click(screen.getByLabelText('B'))
    await userEvent.click(screen.getByRole('button', { name:'Prethodno' }))
    expect(screen.getByLabelText('B').checked).toBe(true)

    await userEvent.click(screen.getByRole('button', { name:'Sljedeće' }))
    await userEvent.click(screen.getByRole('button', { name:'Predaj ispit' }))
    expect(screen.getByText(/želiš li predati/i)).toBeTruthy()
    await userEvent.click(screen.getByRole('button', { name:'Potvrdi predaju' }))

    expect(onComplete).toHaveBeenCalledTimes(1)
    const result = onComplete.mock.calls[0][0]
    expect(result.answers).toEqual({ '1':'B', 'g1.1':'B' })
    expect(result.flagged).toEqual(['1'])
    expect(result.unanswered).toEqual([])
    expect(result.percent).toBe(100)

    await userEvent.click(screen.getByRole('button', { name:'Izlaz' }))
    expect(onExit).toHaveBeenCalledTimes(1)
  })

  it('never renders a negative timer', () => {
    vi.useFakeTimers()
    render(<ExamShell exam={exam(1)} onComplete={() => {}} onExit={() => {}} />)
    expect(screen.getByText('00:01')).toBeTruthy()
    act(() => vi.advanceTimersByTime(3000))
    expect(screen.getByText('00:00')).toBeTruthy()
  })

  it('replaces the review with a locked placeholder when canSeeReview is false', async () => {
    render(<ExamShell exam={exam()} onComplete={() => {}} onExit={() => {}} canSeeReview={false} />)
    await userEvent.click(screen.getByLabelText('B'))
    await userEvent.click(screen.getByRole('button', { name:'Sljedeće' }))
    await userEvent.click(screen.getByLabelText('B'))
    await userEvent.click(screen.getByRole('button', { name:'Predaj ispit' }))
    await userEvent.click(screen.getByRole('button', { name:'Potvrdi predaju' }))

    expect(screen.getByText(/otključaj razradu/i)).toBeTruthy()
    expect(screen.queryByRole('heading', { name:'Pregled odgovora' })).toBeNull()
  })
})
