import { describe, expect, it } from 'vitest'
import { hashSeed, shuffledCopy } from '@/lib/game-mode/seeded'

describe('seeded selection', () => {
  it('returns the same immutable order for the same seed', () => {
    const source = [1, 2, 3, 4, 5, 6]
    const first = shuffledCopy(source, 'session-42')
    expect(shuffledCopy(source, 'session-42')).toEqual(first)
    expect(source).toEqual([1, 2, 3, 4, 5, 6])
    expect(hashSeed('session-42')).toBe(hashSeed('session-42'))
  })
})
