'use client'
// Discere tema: čita/piše korisničku preferenciju (svjetlo/tamno), pristupačne
// zastavice (kolorblind, disleksija) i prevodi predmetni akcent iz
// subject-themes.js u CSS varijable koje .dsc-root primjenjuje na sebe.
import { useCallback, useEffect, useMemo, useState } from 'react'
import { subjectThemeStyle } from './subject-themes.js'

export const THEME_STORAGE_KEY = 'disc_theme'
export const CB_STORAGE_KEY = 'disc_cb'
export const DYS_STORAGE_KEY = 'disc_dys'

const THEMES = ['dark', 'light']
const DEFAULT_THEME = 'dark'

function readLocalStorage(key) {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage.getItem(key)
  } catch {
    // Privatni način rada / blokirana pohrana — pretpostavi da ništa nije spremljeno.
    return null
  }
}

function writeLocalStorage(key, value) {
  if (typeof window === 'undefined') return
  try {
    if (value === null || value === undefined) window.localStorage.removeItem(key)
    else window.localStorage.setItem(key, String(value))
  } catch {
    // Nema pohrane — preferenca vrijedi samo za ovu sesiju (React stanje).
  }
}

function systemPrefersLight() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return false
  try {
    return window.matchMedia('(prefers-color-scheme: light)').matches
  } catch {
    return false
  }
}

// Bez spremljene preference: dark je zadano (v. PREDMETI_PLAN.md), osim kad
// sustav izričito traži svijetlu temu.
export function getInitialTheme() {
  const stored = readLocalStorage(THEME_STORAGE_KEY)
  if (THEMES.includes(stored)) return stored
  return systemPrefersLight() ? 'light' : DEFAULT_THEME
}

export function setStoredTheme(theme) {
  if (!THEMES.includes(theme)) return
  writeLocalStorage(THEME_STORAGE_KEY, theme)
}

function readFlag(key) {
  return readLocalStorage(key) === '1'
}

function writeFlag(key, value) {
  writeLocalStorage(key, value ? '1' : null)
}

export function getInitialColorBlindFlag() {
  return readFlag(CB_STORAGE_KEY)
}

export function setStoredColorBlindFlag(value) {
  writeFlag(CB_STORAGE_KEY, value)
}

export function getInitialDyslexiaFlag() {
  return readFlag(DYS_STORAGE_KEY)
}

export function setStoredDyslexiaFlag(value) {
  writeFlag(DYS_STORAGE_KEY, value)
}

// subjectThemeStyle() vraća --subject-* varijable (dijeli ih i paywall/legacy
// kod); ovdje se preslikavaju na opće nazive tokena koje discere-canonical.css
// očekuje na .dsc-root (--accent, --accent-soft, --accent-border, --content-font).
export function subjectStyleVars(idOrSlug) {
  const vars = subjectThemeStyle(idOrSlug)
  return {
    '--accent': vars['--subject-accent'],
    '--accent-soft': vars['--subject-accent-soft'],
    '--accent-border': vars['--subject-accent-border'],
    '--content-font': vars['--subject-content-font'],
  }
}

// React kuka za SubjectShell: drži temu/cb/dys u stanju, sinkronizira s
// localStorage i vraća atribute + CSS varijable spremne za .dsc-root.
export function useDiscereTheme(subjectId) {
  const [theme, setThemeState] = useState(getInitialTheme)
  const [cb, setCbState] = useState(getInitialColorBlindFlag)
  const [dys, setDysState] = useState(getInitialDyslexiaFlag)

  const setTheme = useCallback((next) => {
    setThemeState(next)
    setStoredTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      setStoredTheme(next)
      return next
    })
  }, [])

  const setCb = useCallback((value) => {
    setCbState(value)
    setStoredColorBlindFlag(value)
  }, [])

  const setDys = useCallback((value) => {
    setDysState(value)
    setStoredDyslexiaFlag(value)
  }, [])

  // Ako korisnik nije izabrao ništa, prati promjenu sistemske teme uživo.
  useEffect(() => {
    if (readLocalStorage(THEME_STORAGE_KEY) || typeof window === 'undefined' || typeof window.matchMedia !== 'function') return undefined
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = (event) => {
      if (readLocalStorage(THEME_STORAGE_KEY)) return
      setThemeState(event.matches ? 'light' : DEFAULT_THEME)
    }
    mql.addEventListener?.('change', onChange)
    return () => mql.removeEventListener?.('change', onChange)
  }, [])

  const styleVars = useMemo(() => subjectStyleVars(subjectId), [subjectId])

  const rootAttrs = useMemo(() => ({
    'data-theme': theme,
    'data-cb': cb ? '' : undefined,
    'data-dys': dys ? '' : undefined,
  }), [theme, cb, dys])

  return { theme, setTheme, toggleTheme, cb, setCb, dys, setDys, styleVars, rootAttrs }
}
