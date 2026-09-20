// @vitest-environment happy-dom
import React from 'react'
import { act, cleanup, render, waitFor } from '@testing-library/react'
import { afterEach, expect, it } from 'vitest'
import H04ReactLayers from '@/app/skripte/data/hrv-components/H04_Components'

afterEach(() => { cleanup(); document.querySelectorAll('[data-test-anchor]').forEach(node => node.remove()) })

it('attaches a chapter portal when its HTML anchor arrives after mounting', async () => {
  render(<H04ReactLayers />)
  const anchor = document.createElement('div')
  anchor.id = 'h04-react-stat-cards-zivot'
  anchor.dataset.testAnchor = 'true'
  await act(async () => { document.body.appendChild(anchor) })
  await waitFor(() => expect(anchor.childElementCount).toBeGreaterThan(0))
})

it('moves the portal to a replaced anchor and removes its contents on unmount', async () => {
  const anchor = document.createElement('div')
  anchor.id = 'h04-react-stat-cards-zivot'
  anchor.dataset.testAnchor = 'true'
  document.body.appendChild(anchor)
  const view = render(<H04ReactLayers />)
  expect(anchor.childElementCount).toBeGreaterThan(0)
  const replacement = document.createElement('div')
  replacement.id = anchor.id
  replacement.dataset.testAnchor = 'true'
  await act(async () => { anchor.replaceWith(replacement) })
  await waitFor(() => expect(replacement.childElementCount).toBeGreaterThan(0))
  view.unmount()
  expect(replacement.childElementCount).toBe(0)
})
