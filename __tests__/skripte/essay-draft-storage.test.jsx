// @vitest-environment happy-dom
import React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { EssayWriterNovelaH11 } from '@/app/skripte/data/hrv-components/H11_Additions'

const key = 'h11.essay.novela'
beforeEach(() => {
  localStorage.clear()
  window.dispatchEvent(new StorageEvent('storage', { key: null, storageArea: localStorage }))
})
afterEach(() => { cleanup(); vi.restoreAllMocks() })

it('keeps raw essay text and synchronizes two mounted views of the draft', () => {
  const saved = 'Uvod\n"Novela od Stanca" — čćž'
  localStorage.setItem(key, saved)
  const first = render(<EssayWriterNovelaH11 />)
  const second = render(<EssayWriterNovelaH11 />)
  const firstInput = first.container.querySelector('textarea')
  const secondInput = second.container.querySelector('textarea')
  expect(firstInput.value).toBe(saved)
  expect(secondInput.value).toBe(saved)
  const next = saved + '\nZaključak'
  fireEvent.change(firstInput, { target: { value: next } })
  expect(localStorage.getItem(key)).toBe(next)
  expect(secondInput.value).toBe(next)
})

it('retains an unsaved edit across remounts when storage writes fail', () => {
  localStorage.setItem(key, 'Sačuvani uvod')
  const first = render(<EssayWriterNovelaH11 />)
  vi.spyOn(localStorage, 'setItem').mockImplementation(() => { throw new Error('quota') })
  fireEvent.change(first.container.querySelector('textarea'), { target: { value: 'Novi dio eseja' } })
  expect(localStorage.getItem(key)).toBe('Sačuvani uvod')
  first.unmount()
  const second = render(<EssayWriterNovelaH11 />)
  expect(second.container.querySelector('textarea').value).toBe('Novi dio eseja')
})
