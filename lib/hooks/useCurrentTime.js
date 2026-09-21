'use client'
import { useSyncExternalStore } from 'react'

let current = null
let timer = null
const listeners = new Set()
function update() {
  current = Date.now()
  for (const listener of listeners) listener()
}
function subscribe(listener) {
  listeners.add(listener)
  if (timer === null) {
    update()
    timer = setInterval(update, 60000)
  }
  return () => {
    listeners.delete(listener)
    if (listeners.size === 0) {
      clearInterval(timer)
      timer = null
    }
  }
}
const getSnapshot = () => current
const getServerSnapshot = () => null

export function useCurrentTime() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
