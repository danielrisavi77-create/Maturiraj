'use client'
import { useEffect } from 'react'

// Registrira push service worker (/sw.js). Bez ovoga se SW nikad ne instalira
// pa podsjetnici za rokove (push) ne rade. Ne traži dopuštenje niti se
// pretplaćuje — opt-in i pushManager.subscribe idu kroz PushOptInCard.
export default function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return
    const id = setTimeout(() => {
      navigator.serviceWorker.register('/sw.js').catch((e) => {
        console.warn('[sw] registration failed:', e)
      })
    }, 0)
    return () => clearTimeout(id)
  }, [])
  return null
}
