'use client'
import { useState, useSyncExternalStore } from 'react'

// A browser-backed initial value, followed by local edits for this mount.
// Reading is deferred until subscription, so SSR and hydration share a fallback.
function createSession(readInitialValue, serverValue) {
  let value = serverValue
  let initialized = false
  const listeners = new Set()
  function initialize() {
    if (initialized) return
    value = readInitialValue()
    initialized = true
  }
  function notify() { for (const listener of listeners) listener() }
  return {
    subscribe(listener) {
      initialize()
      listeners.add(listener)
      listener()
      return () => listeners.delete(listener)
    },
    getSnapshot: () => value,
    getServerSnapshot: () => serverValue,
    setValue(update) {
      initialize()
      const next = typeof update === 'function' ? update(value) : update
      if (Object.is(value, next)) return
      value = next
      notify()
    },
  }
}

// Like a state initializer, readInitialValue is captured once per mount.
// External storage changes do not overwrite subsequent local edits.
export function useClientState(readInitialValue, serverValue, resetKey) {
  const [record, setRecord] = useState(() => ({ resetKey, session: createSession(readInitialValue, serverValue) }))
  let session = record.session
  if (!Object.is(record.resetKey, resetKey)) {
    session = createSession(readInitialValue, serverValue)
    setRecord({ resetKey, session })
  }
  const value = useSyncExternalStore(session.subscribe, session.getSnapshot, session.getServerSnapshot)
  return [value, session.setValue]
}
