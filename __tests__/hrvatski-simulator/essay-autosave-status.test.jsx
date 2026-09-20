// @vitest-environment happy-dom
import React from 'react'
import { act, cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { EssayMode, SazetakMode } from '@/app/discere/hrvatski/simulator/components/essay/EssayScreens'
import { ESEJI, SAZECI } from '@/app/discere/hrvatski/simulator/hrvatskiSimulatorData'
import { lsSave } from '@/app/discere/hrvatski/simulator/utils/helpers'

vi.mock('@/app/discere/hrvatski/simulator/utils/helpers', async () => {
  const React = await import('react')
  return { e: React.createElement, lsSave: vi.fn(), postAi: vi.fn() }
})
beforeEach(() => { vi.useFakeTimers(); localStorage.clear(); lsSave.mockReset().mockReturnValue(true) })
afterEach(() => { cleanup(); vi.useRealTimers() })
const essayKey = Object.keys(ESEJI)[0]
const essay = () => {
  const view = render(<EssayMode esejKey={essayKey} userData={{}} onBack={() => {}} />)
  fireEvent.click(view.getByRole('button', { name: /Počni pisati/ }))
  return view
}
const status = view => view.queryAllByText('✓ Automatski spremljeno')

it('does not report an essay as saved when storage rejects it', () => {
  lsSave.mockReturnValue(false)
  const view = essay()
  fireEvent.change(view.getByRole('textbox'), { target: { value: 'Novi esej' } })
  act(() => vi.advanceTimersByTime(800))
  expect(lsSave).toHaveBeenCalledWith(`discere_esej_${essayKey}`, JSON.stringify('Novi esej'))
  expect(status(view)).toHaveLength(0)
})

it('keeps each successful save notice visible for its own two-second interval', () => {
  const view = essay()
  fireEvent.change(view.getByRole('textbox'), { target: { value: 'Prva verzija' } })
  act(() => vi.advanceTimersByTime(800))
  expect(status(view).length).toBeGreaterThan(0)
  act(() => vi.advanceTimersByTime(200))
  fireEvent.change(view.getByRole('textbox'), { target: { value: 'Druga verzija' } })
  expect(status(view)).toHaveLength(0)
  act(() => vi.advanceTimersByTime(800))
  expect(status(view).length).toBeGreaterThan(0)
  act(() => vi.advanceTimersByTime(1000))
  expect(status(view).length).toBeGreaterThan(0)
  act(() => vi.advanceTimersByTime(1000))
  expect(status(view)).toHaveLength(0)
})

it.each([
  ['essay', EssayMode, { esejKey: essayKey }, `discere_esej_${essayKey}`],
  ['summary', SazetakMode, { sazetakKey: Object.keys(SAZECI)[0] }, `discere_sazetak_${Object.keys(SAZECI)[0]}`],
])('%s debounces the latest JSON draft and cancels pending writes on unmount', (_name, Component, props, key) => {
  const view = render(<Component {...props} userData={{}} onBack={() => {}} />)
  fireEvent.click(view.getByRole('button', { name: /Počni pisati/ }))
  fireEvent.change(view.getByRole('textbox'), { target: { value: 'Prvo' } })
  act(() => vi.advanceTimersByTime(500))
  fireEvent.change(view.getByRole('textbox'), { target: { value: 'Drugo' } })
  act(() => vi.advanceTimersByTime(799))
  expect(lsSave).not.toHaveBeenCalled()
  act(() => vi.advanceTimersByTime(1))
  expect(lsSave).toHaveBeenCalledExactlyOnceWith(key, JSON.stringify('Drugo'))
  fireEvent.change(view.getByRole('textbox'), { target: { value: 'Treće' } })
  view.unmount()
  act(() => vi.advanceTimersByTime(3000))
  expect(lsSave).toHaveBeenCalledTimes(1)
})
