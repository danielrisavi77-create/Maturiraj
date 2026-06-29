'use client'
import { useEffect, useRef } from 'react'

/**
 * Tracks how long the logged-in user spends on a given section.
 * Call once at the top of each tracked page:
 *   usePageTracking('discere')
 *
 * On mount:  record start time (no network call)
 * On unmount / tab close: INSERT a new row via fetch { keepalive: true }
 * Visits under 3 seconds are ignored.
 */
export function usePageTracking(section) {
  const startTs   = useRef(null)
  const flushed   = useRef(false)
  const tokenRef  = useRef(null)
  const userIdRef = useRef(null)

  useEffect(() => {
    if (!section) return

    // Read user + JWT from localStorage — no network call
    try {
      const key = Object.keys(window.localStorage).find(
        k => k.startsWith('sb-') && k.endsWith('-auth-token')
      )
      if (key) {
        const parsed = JSON.parse(window.localStorage.getItem(key))
        userIdRef.current = parsed?.user?.id ?? null
        tokenRef.current  = parsed?.access_token ?? null
      }
    } catch {}

    if (!userIdRef.current || !tokenRef.current) return

    startTs.current = Date.now()
    flushed.current = false

    function flush() {
      if (flushed.current || !startTs.current) return
      flushed.current = true

      const secs = Math.round((Date.now() - startTs.current) / 1000)
      if (secs < 3) return // ignore accidental visits under 3s

      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      if (!supabaseUrl || !supabaseKey) return

      fetch(`${supabaseUrl}/rest/v1/activity_events`, {
        method: 'POST',
        headers: {
          'Content-Type':  'application/json',
          'apikey':        supabaseKey,
          'Authorization': `Bearer ${tokenRef.current}`,
        },
        body: JSON.stringify({
          user_id:    userIdRef.current,
          section,
          duration_s: secs,
        }),
        keepalive: true,  // fires even when page is unloading
      }).catch(() => {})
    }

    window.addEventListener('beforeunload', flush)
    return () => {
      window.removeEventListener('beforeunload', flush)
      flush()
    }
  }, [section])
}
