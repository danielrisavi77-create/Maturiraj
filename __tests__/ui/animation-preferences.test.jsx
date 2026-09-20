// @vitest-environment happy-dom
import React from 'react'
import { renderToString } from 'react-dom/server'
import { act, cleanup, render } from '@testing-library/react'
import { afterEach, expect, it, vi } from 'vitest'
import CelebrationSplash from '@/app/plan-ucenja/components/CelebrationSplash.js?lang.jsx'
import { CountUp } from '@/components/simulator/mat/viz/charts'

vi.mock('next/navigation', () => ({ useRouter: () => ({ push: vi.fn() }) }))
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.unstubAllGlobals() })

it('keeps celebration markup stable between server and client rendering', () => {
  const random = vi.spyOn(Math, 'random').mockReturnValue(0.1)
  const server = renderToString(<CelebrationSplash />)
  random.mockReturnValue(0.9)
  expect(renderToString(<CelebrationSplash />)).toBe(server)
})

it('stops counting when reduced motion is enabled while the result is visible', () => {
  const query = new EventTarget()
  query.matches = false
  vi.stubGlobal('matchMedia', () => query)
  const callbacks = new Map()
  let frame = 0
  vi.stubGlobal('requestAnimationFrame', cb => { callbacks.set(++frame, cb); return frame })
  vi.stubGlobal('cancelAnimationFrame', id => callbacks.delete(id))
  const view = render(<CountUp to={85} suffix="%" />)
  expect(view.container.textContent).toBe('0%')
  expect(callbacks.size).toBe(1)
  act(() => { query.matches = true; query.dispatchEvent(new Event('change')) })
  expect(view.container.textContent).toBe('85%')
  expect(callbacks.size).toBe(0)
  view.rerender(<CountUp to={91} suffix="%" />)
  expect(view.container.textContent).toBe('91%')
  expect(callbacks.size).toBe(0)
})
