import { describe, it, expect } from 'vitest'
import { warnMessage } from '../../lib/engleski-simulator/useTimer.js'

describe('warnMessage', () => {
  it('vraća poruku za prag od 10 minuta (600s)', () => {
    expect(warnMessage(600)).toBe('Još 10 minuta')
  })

  it('vraća poruku za prag od 5 minuta (300s)', () => {
    expect(warnMessage(300)).toBe('Još 5 minuta')
  })

  it('vraća poruku za neočekivani prag zaokružen na minute', () => {
    expect(warnMessage(120)).toBe('Još 2 minuta')
  })

  it('vraća null za 0 sekundi', () => {
    expect(warnMessage(0)).toBeNull()
  })
})
