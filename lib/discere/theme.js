'use client'
// Discere tema: čita/piše korisničku preferenciju (svjetlo/tamno), pristupačne
// zastavice (kolorblind, disleksija) i prevodi predmetni akcent iz
// subject-themes.js u CSS varijable koje .dsc-root primjenjuje na sebe.
import { useCallback, useMemo, useSyncExternalStore } from 'react'
import { subjectThemeStyle } from './subject-themes.js'

export const THEME_STORAGE_KEY = 'disc_theme'
export const CB_STORAGE_KEY = 'disc_cb'
export const DYS_STORAGE_KEY = 'disc_dys'

const THEMES = ['dark', 'light']
const DEFAULT_THEME = 'dark'

// Zamjena kad je localStorage blokiran (privatni način rada): preferencija tada
// vrijedi samo za ovu karticu. Popunjava se isključivo kad pravi zapis padne, pa
// nikad ne zasjeni stvarnu pohranu.
const memoryStore = new Map()

function localStorageOrNull() {
  try {
    return window.localStorage ?? null
  } catch {
    return null
  }
}

function readLocalStorage(key) {
  if (typeof window === 'undefined') return null
  const store = localStorageOrNull()
  if (!store) return memoryStore.get(key) ?? null
  try {
    return store.getItem(key)
  } catch {
    return memoryStore.get(key) ?? null
  }
}

function writeLocalStorage(key, value) {
  if (typeof window === 'undefined') return
  const store = localStorageOrNull()
  try {
    if (!store) throw new Error('no storage')
    if (value === null || value === undefined) store.removeItem(key)
    else store.setItem(key, String(value))
  } catch {
    if (value === null || value === undefined) memoryStore.delete(key)
    else memoryStore.set(key, String(value))
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

// Preferencija živi izvan Reacta (localStorage + sistemska tema), pa je i držimo
// kao vanjski store: useSyncExternalStore vraća DEFAULT_THEME na poslužitelju i u
// prvom klijentskom renderu (getServerSnapshot), a spremljenu vrijednost tek
// nakon hidratacije — bez mismatcha na data-theme i tekstu gumba (☀/☾), koji bi
// nastao da se localStorage čita kao useState inicijal. Uz to sve montirane
// ljuske vide istu promjenu (isti store), pa se teme ne razilaze.
const themeListeners = new Set()

function emitThemeChange() {
  for (const listener of themeListeners) listener()
}

function subscribeThemeStore(listener) {
  themeListeners.add(listener)
  if (typeof window === 'undefined') return () => themeListeners.delete(listener)

  // Promjena u drugoj kartici.
  const onStorage = (event) => {
    if (!event.key || [THEME_STORAGE_KEY, CB_STORAGE_KEY, DYS_STORAGE_KEY].includes(event.key)) emitThemeChange()
  }
  window.addEventListener('storage', onStorage)

  // Sistemska tema uživo; getInitialTheme() sam pazi da spremljeni izbor ima prednost.
  let mql = null
  const onMedia = () => emitThemeChange()
  if (typeof window.matchMedia === 'function') {
    try {
      mql = window.matchMedia('(prefers-color-scheme: light)')
      mql.addEventListener?.('change', onMedia)
    } catch {
      mql = null
    }
  }

  return () => {
    themeListeners.delete(listener)
    window.removeEventListener('storage', onStorage)
    mql?.removeEventListener?.('change', onMedia)
  }
}

// React kuka za SubjectShell: čita temu/cb/dys iz storea, piše izbor u
// localStorage i vraća atribute + CSS varijable spremne za .dsc-root.
export function useDiscereTheme(subjectId) {
  const theme = useSyncExternalStore(subscribeThemeStore, getInitialTheme, () => DEFAULT_THEME)
  const cb = useSyncExternalStore(subscribeThemeStore, getInitialColorBlindFlag, () => false)
  const dys = useSyncExternalStore(subscribeThemeStore, getInitialDyslexiaFlag, () => false)

  const setTheme = useCallback((next) => {
    setStoredTheme(next)
    emitThemeChange()
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  const setCb = useCallback((value) => {
    setStoredColorBlindFlag(value)
    emitThemeChange()
  }, [])

  const setDys = useCallback((value) => {
    setStoredDyslexiaFlag(value)
    emitThemeChange()
  }, [])

  const styleVars = useMemo(() => subjectStyleVars(subjectId), [subjectId])

  const rootAttrs = useMemo(() => ({
    'data-theme': theme,
    'data-cb': cb ? '' : undefined,
    'data-dys': dys ? '' : undefined,
  }), [theme, cb, dys])

  return { theme, setTheme, toggleTheme, cb, setCb, dys, setDys, styleVars, rootAttrs }
}
