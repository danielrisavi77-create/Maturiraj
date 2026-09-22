'use client'
import { useState, useSyncExternalStore } from 'react'
import { getPaywallVariant } from './paywallVariant'

function createStore() {
  let variant = 'control'
  let initialized = false

  return {
    subscribe(listener) {
      if (!initialized) {
        variant = getPaywallVariant()
        initialized = true
        listener()
      }
      return () => {}
    },
    getSnapshot() {
      return variant
    },
  }
}

function getServerSnapshot() {
  return 'control'
}

export function usePaywallVariant() {
  const [store] = useState(createStore)
  return useSyncExternalStore(store.subscribe, store.getSnapshot, getServerSnapshot)
}
