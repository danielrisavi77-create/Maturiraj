// @vitest-environment happy-dom
import React from 'react'
import { act, cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { SaAiHelper, AnswerHelper } from '@/app/discere/hrvatski/simulator/components/QuestionWidgets'
import { postAi } from '@/app/discere/hrvatski/simulator/utils/helpers'

vi.mock('@/app/discere/hrvatski/simulator/utils/helpers', async () => {
  const React = await import('react')
  return { e: React.createElement, LL: ['A', 'B', 'C', 'D'], postAi: vi.fn() }
})
beforeEach(() => vi.clearAllMocks())
afterEach(cleanup)
const question = id => ({ id, type: 'sa', q: `Pitanje ${id}`, sol: { ans: `Odgovor ${id}` } })

it.each([['short answer', SaAiHelper], ['answer panel', AnswerHelper]])('%s does not show a late explanation for the previous question', async (_name, Component) => {
  let finish
  postAi.mockReturnValueOnce(new Promise(resolve => { finish = resolve }))
  const view = render(<Component q={question(1)} show examKey="one" />)
  fireEvent.click(view.getByRole('button', { name: /AI objašnjenje/ }))
  view.rerender(<Component q={question(2)} show examKey="one" />)
  await act(async () => finish({ ok: true, text: 'Objašnjenje starog pitanja' }))
  expect(view.queryByText('Objašnjenje starog pitanja')).toBeNull()
  expect(view.getByRole('button', { name: /AI objašnjenje/ })).toBeTruthy()
  postAi.mockResolvedValueOnce({ ok: true, text: 'Objašnjenje novog pitanja' })
  await act(async () => fireEvent.click(view.getByRole('button', { name: /AI objašnjenje/ })))
  expect(view.getByText('Objašnjenje novog pitanja')).toBeTruthy()
})

it('resets the answer panel when a different exam reuses the question number', async () => {
  postAi.mockResolvedValueOnce({ ok: true, text: 'Objašnjenje prvog ispita' })
  const view = render(<AnswerHelper q={question(1)} show examKey="one" />)
  await act(async () => fireEvent.click(view.getByRole('button', { name: /AI objašnjenje/ })))
  expect(view.getByText('Objašnjenje prvog ispita')).toBeTruthy()
  view.rerender(<AnswerHelper q={question(1)} show examKey="two" />)
  expect(view.queryByText('Objašnjenje prvog ispita')).toBeNull()
})
