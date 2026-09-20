// @vitest-environment happy-dom
import React from 'react'
import { act, cleanup, render } from '@testing-library/react'
import { renderToString } from 'react-dom/server'
import { hydrateRoot } from 'react-dom/client'
import { afterEach, expect, it, vi } from 'vitest'
import Hero from '@/components/landing/Hero'

vi.mock('@/components/landing/HeroCountdown', () => ({ default: () => null }))
afterEach(cleanup)

it('reveals the trial after hydration without changing server markup', async () => {
  const markup = renderToString(<Hero trialDismissed={false} />)
  expect(markup).not.toContain('hero-trial-btn')
  const container = document.createElement('div')
  container.innerHTML = markup
  document.body.appendChild(container)
  const onRecoverableError = vi.fn()
  let root
  try {
    await act(async () => {
      root = hydrateRoot(container, <Hero trialDismissed={false} />, { onRecoverableError })
    })
    expect(container.querySelector('.hero-trial-btn')).not.toBeNull()
    expect(onRecoverableError).not.toHaveBeenCalled()
    await act(async () => root.render(<Hero trialDismissed />))
    expect(container.querySelector('.hero-trial-btn')).toBeNull()
  } finally {
    if (root) await act(async () => root.unmount())
    container.remove()
  }
})

it('shows an available trial on a client navigation and respects dismissal', () => {
  const view = render(<Hero trialDismissed={false} />)
  expect(view.container.querySelector('.hero-trial-btn')).not.toBeNull()
  view.rerender(<Hero trialDismissed />)
  expect(view.container.querySelector('.hero-trial-btn')).toBeNull()
})
