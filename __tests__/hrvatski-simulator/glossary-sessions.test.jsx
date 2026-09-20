// @vitest-environment happy-dom
import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import { GlossaryModal, PojmovnikModal, ImporterModal } from '@/app/discere/hrvatski/simulator/components/modals/Modals'

afterEach(cleanup)

it.each([GlossaryModal, PojmovnikModal])('opens the requested term and keeps user selection on a prop-only rerender', Component => {
  const view = render(<Component initialTerm="metafora" onClose={() => {}} />)
  expect(view.getAllByText('metafora').length).toBeGreaterThan(1)
  view.rerender(<Component initialTerm="sonet" onClose={() => {}} />)
  expect(view.getAllByText('metafora').length).toBeGreaterThan(1)
})

it('resets flashcard position and face on reversal and filtering while retaining reverse direction', () => {
  const view = render(<PojmovnikModal onClose={() => {}} />)
  fireEvent.click(view.getByRole('button', { name: /Kartice/ }))
  fireEvent.click(view.getByRole('button', { name: /Sljedeća/ }))
  expect(view.getByText(/^2 \/ /)).toBeTruthy()
  fireEvent.click(view.getByRole('button', { name: /klikni za odgovor/ }))
  expect(view.queryByText('klikni za odgovor')).toBeNull()
  fireEvent.click(view.getByRole('button', { name: 'pojam → definicija' }))
  expect(view.getByText(/^1 \/ /)).toBeTruthy()
  expect(view.getByText('klikni za odgovor')).toBeTruthy()
  fireEvent.click(view.getByRole('button', { name: /Sljedeća/ }))
  fireEvent.click(view.getByRole('button', { name: /klikni za odgovor/ }))
  fireEvent.change(view.getByPlaceholderText('Pretraži pojam ili definiciju...'), { target: { value: 'sonet' } })
  expect(view.getByText(/^1 \/ /)).toBeTruthy()
  expect(view.getByText('klikni za odgovor')).toBeTruthy()
  expect(view.getByRole('button', { name: 'definicija → pojam' })).toBeTruthy()
  fireEvent.click(view.getByRole('button', { name: /Promiješaj/ }))
  expect(view.getByText(/^1 \/ /)).toBeTruthy()
})

it('imports a manually entered question with its generated identity and trimmed choices', () => {
  const onImport = vi.fn()
  const onClose = vi.fn()
  const view = render(<ImporterModal onImport={onImport} onClose={onClose} />)
  fireEvent.click(view.getByRole('button', { name: /Ručni unos/ }))
  fireEvent.change(view.getByPlaceholderText('Napiši pitanje...'), { target: { value: ' Pitanje? ' } })
  fireEvent.change(view.getByPlaceholderText('Odgovor A'), { target: { value: ' Prvi ' } })
  fireEvent.change(view.getByPlaceholderText('Odgovor B'), { target: { value: ' Drugi ' } })
  fireEvent.click(view.getByRole('button', { name: '+ Dodaj pitanje' }))
  fireEvent.click(view.getByRole('button', { name: /Uvezi/ }))
  expect(onImport).toHaveBeenCalledWith([expect.objectContaining({ id: expect.stringMatching(/^custom_\d+_/), q: 'Pitanje?', opts: ['Prvi', 'Drugi'], sol: { cl: 'A' }, _custom: true })])
  expect(onClose).toHaveBeenCalledOnce()
})
