// @vitest-environment happy-dom
import { act, cleanup, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { useTrialState } from '@/hooks/useTrialState'

const key = 'maturiraj_trial_dismissed'
beforeEach(() => { localStorage.clear(); vi.useFakeTimers() })
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.useRealTimers() })

it('shows the offer after thirty seconds and persists a dismissal as the existing raw marker', () => {
  const { result } = renderHook(useTrialState)
  expect(result.current.mounted).toBe(true)
  act(() => vi.advanceTimersByTime(29999))
  expect(result.current.shown).toBe(false)
  act(() => vi.advanceTimersByTime(1))
  expect(result.current.shown).toBe(true)
  act(() => result.current.dismiss())
  expect(result.current.shown).toBe(false)
  expect(result.current.dismissed).toBe(true)
  expect(localStorage.getItem(key)).toBe('1')
})

it('respects any pre-existing nonempty dismissal marker', () => {
  localStorage.setItem(key, 'dismissed')
  const { result } = renderHook(useTrialState)
  act(() => vi.advanceTimersByTime(60000))
  expect(result.current.dismissed).toBe(true)
  expect(result.current.shown).toBe(false)
})

it('dismisses the offer in every mounted consumer and cancels pending displays', () => {
  const first = renderHook(useTrialState)
  const second = renderHook(useTrialState)
  act(() => first.result.current.dismiss())
  act(() => vi.advanceTimersByTime(30000))
  expect(second.result.current.dismissed).toBe(true)
  expect(second.result.current.shown).toBe(false)
})

it('mounts when the browser refuses storage reads', () => {
  vi.spyOn(localStorage, 'getItem').mockImplementation(() => { throw new Error('denied') })
  expect(() => renderHook(useTrialState)).not.toThrow()
})
