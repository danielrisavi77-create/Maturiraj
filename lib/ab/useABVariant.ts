'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'
import { trackEvent } from '@/lib/analytics/tracker'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const LOCAL_AB_KEY = 'mh_ab_variants_v1'
const SESSION_AB_KEY = 'mh_ab_session'

type Variant = 'a' | 'b' | string

function getLocalAssignment(expId: string): Variant | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(LOCAL_AB_KEY)
    const data = raw ? JSON.parse(raw) : {}
    return data[expId] ?? null
  } catch {
    return null
  }
}

function setLocalAssignment(expId: string, variant: Variant) {
  if (typeof window === 'undefined') return
  try {
    const raw = localStorage.getItem(LOCAL_AB_KEY)
    const data = raw ? JSON.parse(raw) : {}
    data[expId] = variant
    localStorage.setItem(LOCAL_AB_KEY, JSON.stringify(data))
  } catch {}
}

function getSessionId(): string {
  if (typeof window === 'undefined') return 'ssr'
  try {
    let id = sessionStorage.getItem(SESSION_AB_KEY)
    if (!id) {
      id = `ab_${Date.now()}_${Math.random().toString(36).slice(2)}`
      sessionStorage.setItem(SESSION_AB_KEY, id)
    }
    return id
  } catch {
    return 'storage-denied'
  }
}

interface ABStore {
  variants: Record<string, Variant>
  loading: boolean
  loaded: Set<string>
}

/**
 * A/B variant hook.
 * Returns stable variant for each experiment.
 * First call per experiment triggers assignment (Supabase RPC).
 * Subsequent calls return cached value instantly.
 */
export function useABVariant() {
  const [store, setStore] = useState<ABStore>({
    variants: {},
    loading: false,
    loaded: new Set(),
  })
  const inflight = useRef(new Set<string>())

  const getVariant = useCallback((experimentId: string): Variant => {
    // 1. Cache hit
    if (store.variants[experimentId]) return store.variants[experimentId]

    // 2. LocalStorage hit (for guests between page loads)
    const local = getLocalAssignment(experimentId)
    if (local) {
      setStore(s => ({
        ...s,
        variants: { ...s.variants, [experimentId]: local },
      }))
      return local
    }

    // 3. Server assignment (async)
    if (!inflight.current.has(experimentId)) {
      inflight.current.add(experimentId)

      const assign = async () => {
        try {
          const sessionId = getSessionId()
          const { data: variant } = await supabase.rpc('get_or_create_ab_assignment', {
            p_experiment_id: experimentId,
            p_session_id: sessionId,
          })

          if (variant) {
            setLocalAssignment(experimentId, variant)
            setStore(s => ({
              ...s,
              variants: { ...s.variants, [experimentId]: variant },
              loaded: new Set([...s.loaded, experimentId]),
            }))

            // Track assignment (once per session per experiment)
            const assignedKey = `mh_ab_assigned_${experimentId}`
            if (!sessionStorage.getItem(assignedKey)) {
              sessionStorage.setItem(assignedKey, '1')
              trackEvent({
                name: 'ab_variant_assigned',
                meta: { experiment: experimentId, variant },
              })
            }
          }
        } catch (err) {
          console.warn('[AB] Assignment failed:', experimentId, err)
        } finally {
          inflight.current.delete(experimentId)
        }
      }

      assign()
    }

    // Return 'a' as default while loading (consistent, no flash)
    return 'a'
  }, [store.variants])

  /**
   * Track conversion for a specific experiment.
   */
  const trackConversion = useCallback((experimentId: string, conversionEvent: string) => {
    const variant = store.variants[experimentId] ?? getLocalAssignment(experimentId) ?? 'a'
    trackEvent({
      name: 'ab_conversion',
      meta: { experiment: experimentId, variant, conversion_event: conversionEvent },
    })
  }, [store.variants])

  return { getVariant, trackConversion }
}
