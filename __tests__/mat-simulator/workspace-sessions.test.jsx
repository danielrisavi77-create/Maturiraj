// @vitest-environment happy-dom
import React from 'react'
import { act, cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { ScratchPad } from '@/components/simulator/mat/tools/calc'
import { createWorkspaceStore } from '@/components/simulator/mat/sim/workspace-store'

const makeStore = initial => createWorkspaceStore(initial)
const read = (store, key) => store.get(key)
const props = (store, wsKey) => ({ store, wsKey, qText: `Pitanje ${wsKey}`, onClose: () => {} })
const calcInput = view => view.getByPlaceholderText('npr. 2·(3+5)^2 − √16')

beforeEach(() => {
  localStorage.clear()
  const context = new Proxy({ measureText: () => ({ width: 10 }) }, {
    get: (target, key) => key in target ? target[key] : () => {},
  })
  vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(context)
})
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.useRealTimers(); vi.unstubAllGlobals() })

it('keeps A and B calculator drafts separate while the workspace remains open', () => {
  const store = makeStore({ A: { mode: 'calc', calcExpr: '1+1' }, B: { mode: 'calc', calcExpr: '2+2' } })
  const view = render(<ScratchPad {...props(store, 'A')} />)
  fireEvent.change(calcInput(view), { target: { value: '9+9' } })
  view.rerender(<ScratchPad {...props(store, 'B')} />)
  expect(calcInput(view).value).toBe('2+2')
  fireEvent.change(calcInput(view), { target: { value: '8+8' } })
  view.rerender(<ScratchPad {...props(store, 'A')} />)
  expect(calcInput(view).value).toBe('9+9')
  expect(read(store, 'A').calcExpr).toBe('9+9')
  expect(read(store, 'B').calcExpr).toBe('8+8')
})

it('restores saved work without modifying the snapshot supplied to the session', () => {
  const store = makeStore({ A: { mode: 'calc', calcExpr: '3+3', strokes: [] } })
  const saved = read(store, 'A')
  Object.freeze(saved.strokes)
  Object.freeze(saved)
  const view = render(<ScratchPad {...props(store, 'A')} />)
  fireEvent.change(calcInput(view), { target: { value: '4+4' } })
  expect(saved.calcExpr).toBe('3+3')
  expect(read(store, 'A').calcExpr).toBe('4+4')
})

it('keeps published strokes unchanged through undo, redo and clear', () => {
  const stroke = { color: '#000', width: 2, pts: [{ x: 1, y: 2 }] }
  const store = makeStore({ A: { strokes: [stroke] } })
  const original = read(store, 'A').strokes
  const view = render(<ScratchPad {...props(store, 'A')} />)
  fireEvent.click(view.getByTitle('Poništi potez'))
  expect(original).toHaveLength(1)
  expect(read(store, 'A').strokes).toHaveLength(0)
  fireEvent.click(view.getByTitle('Ponovi potez'))
  expect(read(store, 'A').strokes).toHaveLength(1)
  fireEvent.click(view.getByTitle('Očisti sve'))
  expect(read(store, 'A').strokes).toHaveLength(0)
  expect(original).toHaveLength(1)
})

it('preserves viewport and calculator fields across close and reopen', () => {
  const store = makeStore({ A: { viewS: 2, viewOx: 10, viewOy: 20, calcExpr: '5+5' } })
  const view = render(<ScratchPad {...props(store, 'A')} />)
  expect(view.getByTitle('Vrati na 100%').textContent).toBe('200%')
  fireEvent.click(view.getByTitle('Povećaj'))
  fireEvent.click(view.getByRole('button', { name: '🧮 Računalo' }))
  fireEvent.change(calcInput(view), { target: { value: '6+6' } })
  view.unmount()
  const reopened = render(<ScratchPad {...props(store, 'A')} />)
  expect(calcInput(reopened).value).toBe('6+6')
  fireEvent.click(reopened.getByRole('button', { name: '✏️ Skica' }))
  expect(reopened.getByTitle('Vrati na 100%').textContent).toBe('250%')
})

it('restores the saved imported figure and respects its removal before reopening', () => {
  vi.useFakeTimers()
  let loads = 0
  vi.stubGlobal('Image', class { set src(_value) { loads++; this.onload() } })
  const store = makeStore({ A: { figOn: true } })
  const figure = <svg viewBox="0 0 100 80"><path d="M0 0L10 10" /></svg>
  const view = render(<ScratchPad {...props(store, 'A')} figure={figure} />)
  act(() => vi.advanceTimersByTime(80))
  expect(loads).toBe(1)
  expect(read(store, 'A').figOn).toBe(true)
  fireEvent.click(view.getByTitle('Ukloni figuru'))
  expect(read(store, 'A').figOn).toBe(false)
  view.unmount()
  render(<ScratchPad {...props(store, 'A')} figure={figure} />)
  act(() => vi.advanceTimersByTime(80))
  expect(loads).toBe(1)
})

it.each([0, 80])('does not reinsert a removed figure when restoration is pending at %d ms', elapsed => {
  vi.useFakeTimers()
  const pending = []
  vi.stubGlobal('Image', class { set src(_value) { pending.push(this) } })
  const store = makeStore({ A: { figOn: true } })
  const view = render(<ScratchPad {...props(store, 'A')} figure={<svg />} />)
  act(() => vi.advanceTimersByTime(elapsed))
  fireEvent.click(view.getByTitle('Ukloni figuru'))
  act(() => {
    vi.advanceTimersByTime(80)
    pending.forEach(image => image.onload())
  })
  expect(read(store, 'A').figOn).toBe(false)
  expect(view.queryByTitle('Ukloni figuru')).toBeNull()
})
