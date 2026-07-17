'use client'
// lib/roditelji/useParentData.js
// ─────────────────────────────────────────────────────────────────────────────
// Glavni dohvat podataka roditeljskog portala (arhitektura §5.D).
// 1) /api/parent/children  → sve veze (pending + linked)
// 2) za svako LINKED dijete → /api/parent/child-dashboard/[childId]
// 3) adaptChildren → jedinstveni rich child objekti
//
// Vraća:
//   links    — sirove veze (za postavke: upravljanje, uklj. pending)
//   children — adaptirana rich djeca (samo linked + uspješno učitan dashboard)
//   loading, error ('disabled'|'unauth'|poruka), refetch

import { useState, useEffect, useCallback } from 'react'
import { adaptChildren } from './parentAdapter'

async function fetchJSON(url, signal) {
  const res = await fetch(url, { signal, headers: { 'Cache-Control': 'no-store' } })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    const err = new Error(body.error || `HTTP ${res.status}`)
    err.status = res.status
    err.code = body.code
    throw err
  }
  return res.json()
}

export function useParentData() {
  const [links, setLinks] = useState([])
  const [children, setChildren] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [tick, setTick] = useState(0)

  const refetch = useCallback(() => setTick(t => t + 1), [])

  useEffect(() => {
    const controller = new AbortController()
    let active = true

    ;(async () => {
      setLoading(true)
      setError(null)
      try {
        const raw = await fetchJSON('/api/parent/children', controller.signal)
        const list = Array.isArray(raw) ? raw : []
        if (active) setLinks(list)

        const linked = list.filter(l => l.status === 'linked' && l.child_id)
        const dashboards = await Promise.all(
          linked.map(l =>
            // Jedno dijete čiji dashboard padne (npr. consent nije v2) ne ruši cijeli portal.
            fetchJSON(`/api/parent/child-dashboard/${l.child_id}`, controller.signal).catch(() => null),
          ),
        )
        if (!active) return
        setChildren(adaptChildren(dashboards))
      } catch (e) {
        if (e.name === 'AbortError' || !active) return
        setLinks([])
        setChildren([])
        if (e.code === 'FEATURE_DISABLED') setError('disabled')
        else if (e.status === 401) setError('unauth')
        else setError(e.message || 'error')
      } finally {
        if (active) setLoading(false)
      }
    })()

    return () => { active = false; controller.abort() }
  }, [tick])

  return { links, children, loading, error, refetch }
}
