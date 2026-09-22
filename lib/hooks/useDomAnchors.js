'use client'
import { useMemo, useSyncExternalStore } from 'react'

const EMPTY_SNAPSHOT = Object.freeze({})

function sameMapping(a, b, names) {
  for (const name of names) {
    if (a[name] !== b[name]) return false
  }
  return true
}

function readMapping(names, ids) {
  const mapping = {}
  for (const name of names) {
    mapping[name] = document.getElementById(ids[name]) || null
  }
  return mapping
}

function createDomAnchorStore(ids) {
  const names = Object.keys(ids)
  let snapshot = typeof document === 'undefined' ? EMPTY_SNAPSHOT : readMapping(names, ids)

  function getSnapshot() {
    if (typeof document === 'undefined') return EMPTY_SNAPSHOT
    const next = readMapping(names, ids)
    if (snapshot !== EMPTY_SNAPSHOT && sameMapping(snapshot, next, names)) return snapshot
    snapshot = next
    return snapshot
  }

  function getServerSnapshot() {
    return EMPTY_SNAPSHOT
  }

  function subscribe(onStoreChange) {
    if (typeof document === 'undefined') return () => {}
    let notified = getSnapshot()
    const observer = new MutationObserver(() => {
      const next = getSnapshot()
      // A render may have read the new snapshot before the observer fires.
      if (next !== notified) {
        notified = next
        onStoreChange()
      }
    })
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['id']
    })
    return () => observer.disconnect()
  }

  return { subscribe, getSnapshot, getServerSnapshot }
}

export function useDomAnchors(ids) {
  const store = useMemo(() => createDomAnchorStore(ids), [ids])
  return useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot)
}
