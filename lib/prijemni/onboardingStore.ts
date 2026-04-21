'use client'
import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'mh_onboarding_v1'

export interface OnboardingPrefs {
  razred: 1 | 2 | 3 | 4 | null
  interesi: string[]            // ['medicina', 'tehnika', 'humanistika', 'umjetnost', 'ekonomija', 'pravo']
  prosjek_band: 'sub3' | '3-4' | '4-45' | '45+' | null
  city_preference: 'zg' | 'ri' | 'st' | 'os' | 'svejedno' | null
  completed_at: string | null
  skipped: boolean
}

const DEFAULT: OnboardingPrefs = {
  razred: null,
  interesi: [],
  prosjek_band: null,
  city_preference: null,
  completed_at: null,
  skipped: false,
}

class OnboardingStore {
  private state: OnboardingPrefs = { ...DEFAULT }
  private listeners = new Set<() => void>()

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) this.state = { ...DEFAULT, ...JSON.parse(raw) }
      } catch {}
    }
  }

  private persist() {
    if (typeof window === 'undefined') return
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state)) } catch {}
  }

  private emit() {
    this.persist()
    this.listeners.forEach(l => l())
  }

  getSnapshot = () => this.state
  subscribe = (l: () => void) => { this.listeners.add(l); return () => this.listeners.delete(l) }

  update(partial: Partial<OnboardingPrefs>) {
    this.state = { ...this.state, ...partial }
    this.emit()
  }

  complete(prefs: Omit<OnboardingPrefs, 'completed_at' | 'skipped'>) {
    this.state = { ...prefs, completed_at: new Date().toISOString(), skipped: false }
    this.emit()
  }

  skip() {
    this.state = { ...this.state, completed_at: new Date().toISOString(), skipped: true }
    this.emit()
  }

  reset() {
    this.state = { ...DEFAULT }
    this.emit()
  }

  shouldShow(): boolean {
    return !this.state.completed_at && !this.state.skipped
  }
}

const store = typeof window !== 'undefined' ? new OnboardingStore() : null
const EMPTY: OnboardingPrefs = { ...DEFAULT }

export function useOnboarding() {
  const snapshot = useSyncExternalStore(
    store?.subscribe ?? (() => () => {}),
    () => store?.getSnapshot() ?? EMPTY,
    () => EMPTY
  )

  return {
    prefs: snapshot,
    shouldShow: store?.shouldShow() ?? false,
    update: (p: Partial<OnboardingPrefs>) => store?.update(p),
    complete: (p: Omit<OnboardingPrefs, 'completed_at' | 'skipped'>) => store?.complete(p),
    skip: () => store?.skip(),
    reset: () => store?.reset(),
  }
}
