import { describe, it, expect } from 'vitest'
import { warnMessage, minuteWord } from '../../lib/engleski-simulator/useTimer.js'

describe('warnMessage', () => {
  it('vraća poruku za prag od 10 minuta (600s)', () => {
    expect(warnMessage(600)).toBe('Još 10 minuta')
  })

  it('vraća poruku za prag od 5 minuta (300s)', () => {
    expect(warnMessage(300)).toBe('Još 5 minuta')
  })

  it('vraća poruku za neočekivani prag zaokružen na minute', () => {
    expect(warnMessage(120)).toBe('Još 2 minute')
  })

  it('vraća null za 0 sekundi', () => {
    expect(warnMessage(0)).toBeNull()
  })

  it('koristi hrvatski plural (2-4 → minute)', () => {
    expect(warnMessage(60)).toBe('Još 1 minuta')
    expect(warnMessage(180)).toBe('Još 3 minute')
    expect(warnMessage(240)).toBe('Još 4 minute')
    expect(warnMessage(360)).toBe('Još 6 minuta')
  })
})

describe('minuteWord', () => {
  it('1 i 5+ → minuta', () => {
    expect(minuteWord(1)).toBe('minuta')
    expect(minuteWord(5)).toBe('minuta')
    expect(minuteWord(10)).toBe('minuta')
    expect(minuteWord(11)).toBe('minuta')
  })

  it('2-4 → minute', () => {
    expect(minuteWord(2)).toBe('minute')
    expect(minuteWord(3)).toBe('minute')
    expect(minuteWord(4)).toBe('minute')
  })

  it('12-14 su iznimka → minuta', () => {
    expect(minuteWord(12)).toBe('minuta')
    expect(minuteWord(13)).toBe('minuta')
    expect(minuteWord(14)).toBe('minuta')
  })

  it('dvocifreni s nastavkom 2-4 → minute', () => {
    expect(minuteWord(22)).toBe('minute')
    expect(minuteWord(103)).toBe('minute')
    expect(minuteWord(112)).toBe('minuta')
  })
})
