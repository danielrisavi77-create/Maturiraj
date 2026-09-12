import { describe, it, expect } from 'vitest'
import { grade, getLevel, xpProgress, xpToNext } from '../../lib/engleski-simulator/constants.js'
import { grade as scoringGrade } from '../../lib/engleski-simulator/scoring.js'

describe('constants.js', () => {
  it('grade je isti izvor kao scoring.grade', () => {
    expect(grade).toBe(scoringGrade)
  })

  it('getLevel granice', () => {
    expect(getLevel(0)).toBe(0)
    expect(getLevel(250)).toBe(1)
    expect(getLevel(4000)).toBe(5)
    expect(getLevel(5000)).toBe(5)
  })

  it('xpProgress granice', () => {
    expect(xpProgress(0)).toBe(0)
    expect(xpProgress(250)).toBe(0)
    expect(xpProgress(4000)).toBe(100)
    expect(xpProgress(5000)).toBe(100)
  })

  it('xpToNext granice', () => {
    expect(xpToNext(0)).toBe(250)
    expect(xpToNext(250)).toBe(450)
    expect(xpToNext(4000)).toBe(0)
    expect(xpToNext(5000)).toBe(0)
  })
})
