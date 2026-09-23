// @vitest-environment happy-dom
/**
 * Pokriva tri sloja A4 dizajn sustava:
 *   1. čiste get/set pomoćnike iz lib/discere/theme.js,
 *   2. kuku useDiscereTheme i SubjectShell (ono što stvarno ide u DOM:
 *      data-theme/data-cb/data-dys, trajnost toggle-a, prvi render = SSR render),
 *   3. ugovor discere-canonical.css-a (skopiranost pod .dsc-root, potrošač
 *      --content-font, [data-dys] po mat obrascu, 44 px meta, učitani fontovi).
 * Sloj 3 postoji jer su _visual-check artefakti markup bez CSS-a i ne dokazuju
 * ništa o temi.
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { createElement as e } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { act, cleanup, fireEvent, render } from '@testing-library/react'
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
  useDiscereTheme,
} from '@/lib/discere/theme.js'

vi.mock('next/link', () => ({
  default: ({ href, children, ...rest }) => e('a', { href, ...rest }, children),
}))

// vitest se pokreće iz korijena repoa (vitest.config.js), pa su putanje relativne na njega.
const CSS_PATH = path.resolve(process.cwd(), 'components/discere/common/discere-canonical.css')
const LAYOUT_PATH = path.resolve(process.cwd(), 'app/layout.jsx')
const css = readFileSync(CSS_PATH, 'utf8')
const cssNoComments = css.replace(/\/\*[\s\S]*?\*\//g, '')

let mediaListeners = []
let systemPrefersLight = false

function mockMatchMedia(prefersLight) {
  mediaListeners = []
  systemPrefersLight = prefersLight
  window.matchMedia = vi.fn().mockImplementation((query) => ({
    get matches() { return query === '(prefers-color-scheme: light)' ? systemPrefersLight : false },
    media: query,
    addEventListener: (_type, handler) => { mediaListeners.push(handler) },
    removeEventListener: (_type, handler) => { mediaListeners = mediaListeners.filter(h => h !== handler) },
  }))
}

// Simulira sistemsku promjenu teme: mijenja upit i budi pretplatnike.
function fireSystemTheme(prefersLight) {
  systemPrefersLight = prefersLight
  for (const handler of [...mediaListeners]) handler({ matches: prefersLight })
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

  it('carries the per-subject content font (serif for lat, mono for inf)', () => {
    expect(subjectStyleVars('lat')['--content-font']).toMatch(/Georgia/)
    expect(subjectStyleVars('inf')['--content-font']).toMatch(/mono/)
  })

  it('returns a usable fallback for an unknown subject id', () => {
    const vars = subjectStyleVars('__unknown__')
    expect(vars['--accent']).toBe('#b8720a')
  })
})

// ── useDiscereTheme: ono što SubjectShell stvarno troši ──

function Probe({ subjectId = 'mat' }) {
  const { theme, toggleTheme, setCb, setDys, rootAttrs, styleVars } = useDiscereTheme(subjectId)
  return e(
    'div',
    { className: 'dsc-root', 'data-testid': 'root', ...rootAttrs, style: styleVars },
    e('button', { type: 'button', 'data-testid': 'toggle', onClick: toggleTheme }, theme === 'dark' ? '☀' : '☾'),
    e('button', { type: 'button', 'data-testid': 'cb-on', onClick: () => setCb(true) }, 'cb+'),
    e('button', { type: 'button', 'data-testid': 'cb-off', onClick: () => setCb(false) }, 'cb-'),
    e('button', { type: 'button', 'data-testid': 'dys-on', onClick: () => setDys(true) }, 'dys+'),
  )
}

describe('useDiscereTheme', () => {
  beforeEach(() => {
    window.localStorage.clear()
    mockMatchMedia(false)
  })
  afterEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('renders the stored theme onto data-theme after mount', () => {
    setStoredTheme('light')
    const { getByTestId } = render(e(Probe))
    expect(getByTestId('root').getAttribute('data-theme')).toBe('light')
  })

  it('first render matches the server render even when a theme is stored (hydration)', () => {
    setStoredTheme('light')
    const serverHtml = renderToStaticMarkup(e(Probe))
    expect(serverHtml).toContain('data-theme="dark"')
    expect(serverHtml).toContain('☀')
  })

  it('toggleTheme flips data-theme and persists the choice', () => {
    const { getByTestId } = render(e(Probe))
    expect(getByTestId('root').getAttribute('data-theme')).toBe('dark')
    fireEvent.click(getByTestId('toggle'))
    expect(getByTestId('root').getAttribute('data-theme')).toBe('light')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
    fireEvent.click(getByTestId('toggle'))
    expect(getByTestId('root').getAttribute('data-theme')).toBe('dark')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
  })

  it('emits data-cb / data-dys only while the flag is on, and persists them', () => {
    const { getByTestId } = render(e(Probe))
    const root = getByTestId('root')
    expect(root.hasAttribute('data-cb')).toBe(false)
    expect(root.hasAttribute('data-dys')).toBe(false)

    fireEvent.click(getByTestId('cb-on'))
    fireEvent.click(getByTestId('dys-on'))
    expect(root.hasAttribute('data-cb')).toBe(true)
    expect(root.hasAttribute('data-dys')).toBe(true)
    expect(window.localStorage.getItem(CB_STORAGE_KEY)).toBe('1')
    expect(window.localStorage.getItem(DYS_STORAGE_KEY)).toBe('1')

    fireEvent.click(getByTestId('cb-off'))
    expect(root.hasAttribute('data-cb')).toBe(false)
    expect(root.hasAttribute('data-dys')).toBe(true)
  })

  it('puts the subject accent on the root as inline CSS variables', () => {
    const { getByTestId } = render(e(Probe, { subjectId: 'bio' }))
    const style = getByTestId('root').getAttribute('style') || ''
    expect(style).toContain('--accent:')
    expect(style).toContain('--content-font:')
  })

  it('follows a live system theme change while nothing is stored', () => {
    const { getByTestId } = render(e(Probe))
    expect(mediaListeners.length).toBeGreaterThan(0)
    act(() => { fireSystemTheme(true) })
    expect(getByTestId('root').getAttribute('data-theme')).toBe('light')
    act(() => { fireSystemTheme(false) })
    expect(getByTestId('root').getAttribute('data-theme')).toBe('dark')
  })

  it('ignores system theme changes once the user has chosen a theme', () => {
    setStoredTheme('dark')
    const { getByTestId } = render(e(Probe))
    act(() => { fireSystemTheme(true) })
    expect(getByTestId('root').getAttribute('data-theme')).toBe('dark')
  })
})

describe('SubjectShell', () => {
  beforeEach(() => {
    window.localStorage.clear()
    mockMatchMedia(false)
  })
  afterEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('wires theme, accent and the toggle onto .dsc-root', async () => {
    const { default: SubjectShell } = await import('@/components/discere/common/SubjectShell.jsx')
    const { container, getByLabelText } = render(
      e(SubjectShell, { subject: { id: 'bio', name: 'Biologija', sym: '⊕' } }, 'sadržaj'),
    )
    const root = container.querySelector('.dsc-root')
    expect(root.getAttribute('data-theme')).toBe('dark')
    expect(root.getAttribute('style')).toContain('--accent:')
    expect(container.querySelector('.dsc-header-name').textContent).toBe('Biologija')

    fireEvent.click(getByLabelText('Prebaci na svijetlu temu'))
    expect(root.getAttribute('data-theme')).toBe('light')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('light')
    expect(getByLabelText('Prebaci na tamnu temu')).toBeTruthy()
  })
})

// ── discere-canonical.css: ugovor koji vizualni artefakti ne pokrivaju ──

function selectorsOf(source) {
  const out = []
  for (const match of source.matchAll(/([^{}]+)\{/g)) {
    const head = match[1].trim()
    if (!head || head.startsWith('@')) continue
    for (const sel of head.split(',')) {
      const trimmed = sel.trim()
      if (trimmed) out.push(trimmed)
    }
  }
  return out
}

describe('discere-canonical.css', () => {
  it('scopes every dsc-* rule under .dsc-root so nothing leaks into legacy screens', () => {
    const leaking = selectorsOf(cssNoComments).filter(sel => sel.includes('.dsc-') && !sel.startsWith('.dsc-root'))
    expect(leaking).toEqual([])
  })

  it('has a rule that actually consumes --content-font', () => {
    const consumers = selectorsOf(cssNoComments).length
    expect(consumers).toBeGreaterThan(0)
    expect(cssNoComments).toMatch(/font-family:\s*var\(--content-font\)/)
  })

  it('uses font families the root layout actually loads', () => {
    const layout = readFileSync(LAYOUT_PATH, 'utf8')
    const fh = cssNoComments.match(/--fh:\s*'([^']+)'/)[1]
    const fb = cssNoComments.match(/--fb:\s*'([^']+)'/)[1]
    for (const family of [fh, fb]) {
      expect(layout).toContain(family.replace(/ /g, '+'))
    }
  })

  it('implements the dyslexia mode with both the font swap and the spacing (mat pattern)', () => {
    const dys = cssNoComments.slice(cssNoComments.indexOf('[data-dys]'))
    expect(dys).toMatch(/font-family:\s*"Atkinson Hyperlegible"/)
    expect(dys).toMatch(/letter-spacing:\s*\.04em/)
    expect(dys).toMatch(/line-height:\s*1\.85/)
    expect(dys).toMatch(/\[data-dys\]\s+i\s*\{[^}]*font-style:\s*normal/)
  })

  it('gives the thin step navigator a 44 px touch target', () => {
    expect(cssNoComments).toMatch(/\.dsc-step::before\s*\{[^}]*height:\s*44px/)
  })

  it('keeps a light-theme override for every dark palette token', () => {
    const block = (name) => {
      const start = cssNoComments.indexOf(name)
      return cssNoComments.slice(start, cssNoComments.indexOf('}', start))
    }
    const tokens = (text) => [...text.matchAll(/(--[a-z0-9-]+):/g)].map(m => m[1])
    const dark = tokens(block('.dsc-root {')).filter(t => /^--(bg|s\d|bdr2?|text|muted|gold|green|red|blue|teal)/.test(t))
    const light = new Set(tokens(block('.dsc-root[data-theme="light"]')))
    expect(dark.filter(t => !light.has(t))).toEqual([])
  })
})
