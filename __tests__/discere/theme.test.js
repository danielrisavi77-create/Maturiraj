// @vitest-environment happy-dom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  CB_STORAGE_KEY,
  DYS_STORAGE_KEY,
  THEME_STORAGE_KEY,
  getInitialColorBlindFlag,
  getInitialDyslexiaFlag,
  getInitialTheme,
  setStoredColorBlindFlag,
  setStoredDyslexiaFlag,
  setStoredTheme,
  subjectStyleVars,
} from '@/lib/discere/theme.js'

function mockMatchMedia(prefersLight) {
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    matches: query === '(prefers-color-scheme: light)' ? prefersLight : false,
    media: query,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

describe('lib/discere/theme', () => {
  beforeEach(() => {
    window.localStorage.clear()
    mockMatchMedia(false)
  })
  afterEach(() => {
    window.localStorage.clear()
  })

  it('defaults to dark when nothing is stored and the system has no preference', () => {
    expect(getInitialTheme()).toBe('dark')
  })

  it('falls back to the system light preference when nothing is stored', () => {
    mockMatchMedia(true)
    expect(getInitialTheme()).toBe('light')
  })

  it('prefers a stored theme over the system preference', () => {
    mockMatchMedia(true)
    setStoredTheme('dark')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(getInitialTheme()).toBe('dark')
  })

  it('ignores an invalid stored value and falls back to the default', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'purple')
    expect(getInitialTheme()).toBe('dark')
  })

  it('round-trips the light theme through storage', () => {
    setStoredTheme('light')
    expect(getInitialTheme()).toBe('light')
  })

  it('defaults the colour-blind and dyslexia flags to false', () => {
    expect(getInitialColorBlindFlag()).toBe(false)
    expect(getInitialDyslexiaFlag()).toBe(false)
  })

  it('persists the colour-blind flag', () => {
    setStoredColorBlindFlag(true)
    expect(window.localStorage.getItem(CB_STORAGE_KEY)).toBe('1')
    expect(getInitialColorBlindFlag()).toBe(true)
    setStoredColorBlindFlag(false)
    expect(window.localStorage.getItem(CB_STORAGE_KEY)).toBeNull()
    expect(getInitialColorBlindFlag()).toBe(false)
  })

  it('persists the dyslexia flag independently from the colour-blind flag', () => {
    setStoredDyslexiaFlag(true)
    expect(window.localStorage.getItem(DYS_STORAGE_KEY)).toBe('1')
    expect(getInitialDyslexiaFlag()).toBe(true)
    expect(getInitialColorBlindFlag()).toBe(false)
  })

  it('never throws when localStorage is unavailable', () => {
    const original = window.localStorage
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      get() { throw new Error('blocked') },
    })
    expect(() => getInitialTheme()).not.toThrow()
    expect(() => setStoredTheme('light')).not.toThrow()
    Object.defineProperty(window, 'localStorage', { configurable: true, value: original })
  })

  it('maps subjectThemeStyle() onto the --accent* / --content-font tokens', () => {
    const vars = subjectStyleVars('mat')
    expect(Object.keys(vars).sort()).toEqual(['--accent', '--accent-border', '--accent-soft', '--content-font'])
    expect(vars['--accent']).toMatch(/^#/)
    expect(vars['--content-font']).toBeTruthy()
  })

  it('returns a usable fallback for an unknown subject id', () => {
    const vars = subjectStyleVars('__unknown__')
    expect(vars['--accent']).toBe('#b8720a')
  })
})
