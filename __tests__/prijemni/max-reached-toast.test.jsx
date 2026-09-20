// @vitest-environment happy-dom
import React from 'react'
import { act, cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import MaxReachedToast from '@/components/prijemni/MaxReachedToast.js?lang.jsx'

beforeEach(() => vi.useFakeTimers())
afterEach(() => { cleanup(); vi.useRealTimers() })

it('cancels the delayed close if the toast is removed during its exit animation', () => {
  const onClose = vi.fn()
  const view = render(<MaxReachedToast show onClose={onClose} isPro />)
  act(() => vi.advanceTimersByTime(4500))
  view.rerender(<MaxReachedToast show={false} onClose={onClose} isPro />)
  act(() => vi.advanceTimersByTime(250))
  expect(onClose).not.toHaveBeenCalled()
})

it('starts a fresh display interval after reopening and closes once', () => {
  const onClose = vi.fn()
  const view = render(<MaxReachedToast show onClose={onClose} isPro />)
  act(() => vi.advanceTimersByTime(2000))
  view.rerender(<MaxReachedToast show={false} onClose={onClose} isPro />)
  act(() => vi.advanceTimersByTime(6000))
  expect(onClose).not.toHaveBeenCalled()
  view.rerender(<MaxReachedToast show onClose={onClose} isPro />)
  expect(view.container.textContent).toContain('toast-in .25s')
  act(() => vi.advanceTimersByTime(4500))
  expect(onClose).not.toHaveBeenCalled()
  expect(view.container.textContent).toContain('toast-out .25s')
  act(() => vi.advanceTimersByTime(250))
  expect(onClose).toHaveBeenCalledTimes(1)
})

it('keeps the closing deadline and invokes the latest callback after a parent rerender', () => {
  const originalClose = vi.fn()
  const latestClose = vi.fn()
  const view = render(<MaxReachedToast show onClose={originalClose} isPro />)
  act(() => vi.advanceTimersByTime(4600))
  view.rerender(<MaxReachedToast show onClose={latestClose} isPro />)
  act(() => vi.advanceTimersByTime(150))
  expect(latestClose).toHaveBeenCalledTimes(1)
  expect(originalClose).not.toHaveBeenCalled()
})
