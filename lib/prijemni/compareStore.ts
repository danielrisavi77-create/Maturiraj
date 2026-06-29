'use client'
import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'mh_compare_studiji'
const MAX_FREE = 2
const MAX_PRO = 4

type CompareState = Set<string>

class CompareStore {
  private state: CompareState = new Set()
  private listeners = new Set<() => void>()

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) {
          const parsed = JSON.parse(raw) as string[]
          this.state = new Set(parsed)
        }
      } catch {}
    }
  }

  private persist() {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(this.state)))
    } catch {}
  }

  private emit() {
    this.persist()
    this.listeners.forEach(l => l())
  }

  getSnapshot = (): CompareState => this.state

  subscribe = (listener: () => void) => {
    this.listeners.add(listener)
    return () => { this.listeners.delete(listener) }
  }

  toggle(id: string, max = MAX_FREE): { ok: boolean; reason?: 'max_reached' } {
    if (this.state.has(id)) {
      this.state = new Set(this.state)
      this.state.delete(id)
      this.emit()
      return { ok: true }
    }
    if (this.state.size >= max) {
      return { ok: false, reason: 'max_reached' }
    }
    this.state = new Set(this.state)
    this.state.add(id)
    this.emit()
    return { ok: true }
  }

  clear() {
    this.state = new Set()
    this.emit()
  }

  remove(id: string) {
    if (!this.state.has(id)) return
    this.state = new Set(this.state)
    this.state.delete(id)
    this.emit()
  }

  loadSet(ids: string[]) {
    this.state = new Set(ids.slice(0, MAX_PRO))
    this.emit()
  }

  has(id: string): boolean { return this.state.has(id) }
  count(): number { return this.state.size }
  ids(): string[] { return Array.from(this.state) }
}

// Singleton
const store = typeof window !== 'undefined' ? new CompareStore() : null

// Safe server-side snapshot (empty set)
const EMPTY_SNAPSHOT: CompareState = new Set()

/**
 * Hook za čitanje i mutaciju compare seta.
 * SSR-safe preko useSyncExternalStore.
 */
export function useCompare() {
  const snapshot = useSyncExternalStore(
    store?.subscribe ?? (() => () => {}),
    () => store?.getSnapshot() ?? EMPTY_SNAPSHOT,
    () => EMPTY_SNAPSHOT
  )

  return {
    ids: Array.from(snapshot),
    count: snapshot.size,
    has: (id: string) => snapshot.has(id),
    toggle: (id: string, isPro = false) => store?.toggle(id, isPro ? MAX_PRO : MAX_FREE) ?? { ok: false },
    remove: (id: string) => store?.remove(id),
    clear: () => store?.clear(),
    loadSet: (ids: string[]) => store?.loadSet(ids),
    MAX_FREE,
    MAX_PRO,
  }
}

export { MAX_FREE, MAX_PRO }
