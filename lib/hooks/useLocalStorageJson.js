// lib/hooks/useLocalStorageJson.js
'use client'
import { useCallback, useMemo, useSyncExternalStore } from 'react'

const SAME_TAB_EVENT = 'useLocalStorageJson:write'

// Holds the last-written raw JSON for a key when the real storage write/read
// throws (private-browsing quota errors, sandboxed iframes, etc.) so the
// user's edit survives for the rest of the session instead of being lost.
const memoryFallback = new Map()
const lastRead = new Map()
let storageArea
let watchingFallback = false

function isLocalStorageEvent(event) {
  if (!event.storageArea) return true
  try { storageArea = window.localStorage } catch {}
  return event.storageArea === storageArea
}

function forgetFallback(key) {
  if (key === null) memoryFallback.clear()
  else memoryFallback.delete(key)
  if (watchingFallback && memoryFallback.size === 0) {
    window.removeEventListener('storage', invalidateFallback)
    watchingFallback = false
  }
}

function invalidateFallback(event) {
  if (!isLocalStorageEvent(event)) return
  forgetFallback(event.key)
  if (event.key === null) lastRead.clear()
  else lastRead.delete(event.key)
}

function readRaw(key) {
  if (memoryFallback.has(key)) return memoryFallback.get(key)
  try {
    storageArea = window.localStorage
    const raw = storageArea.getItem(key)
    lastRead.set(key, raw === null ? undefined : raw)
    return raw === null ? undefined : raw
  } catch {
    return lastRead.get(key)
  }
}

function writeRaw(key, raw) {
  try {
    storageArea = window.localStorage
    storageArea.setItem(key, raw)
    lastRead.set(key, raw)
    forgetFallback(key)
  } catch {
    memoryFallback.set(key, raw)
    // Keep invalidation alive even when the last view using this key unmounts.
    if (!watchingFallback) {
      window.addEventListener('storage', invalidateFallback)
      watchingFallback = true
    }
  }
  window.dispatchEvent(new CustomEvent(SAME_TAB_EVENT, { detail: { key } }))
}

function getServerSnapshot() {
  return undefined
}

export function useLocalStorageJson(key, defaultValue) {
  const subscribe = useCallback(
    (onStoreChange) => {
      const onStorage = (event) => {
        if (!isLocalStorageEvent(event)) return
        if (event.key === key || event.key === null) {
          invalidateFallback(event)
          onStoreChange()
        }
      }
      const onSameTab = (event) => {
        if (event.detail?.key === key) onStoreChange()
      }
      window.addEventListener('storage', onStorage)
      window.addEventListener(SAME_TAB_EVENT, onSameTab)
      return () => {
        window.removeEventListener('storage', onStorage)
        window.removeEventListener(SAME_TAB_EVENT, onSameTab)
      }
    },
    [key]
  )

  const getSnapshot = useCallback(() => readRaw(key), [key])

  const raw = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  const parsed = useMemo(() => {
    if (raw === undefined) return null
    try {
      return { value: JSON.parse(raw) }
    } catch {
      return null
    }
  }, [raw])
  const value = parsed ? parsed.value : defaultValue

  const setValue = useCallback(
    (update) => {
      const currentRaw = readRaw(key)
      let currentValue = defaultValue
      if (currentRaw !== undefined) {
        try {
          currentValue = JSON.parse(currentRaw)
        } catch {
          currentValue = defaultValue
        }
      }
      const nextValue = typeof update === 'function' ? update(currentValue) : update
      writeRaw(key, JSON.stringify(nextValue))
    },
    [key, defaultValue]
  )

  return [value, setValue]
}
