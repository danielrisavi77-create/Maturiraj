'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Client-side plan gate — defense in depth on top of proxy paidRequired.
 *
 * Dva moda:
 *  1. paid-only (default, allowFree=false) — W2 / ODL-1: gosti idu na /prijava,
 *     prijavljeni free korisnici na /pro. Vrijedi za engleski, matematiku,
 *     sociologiju i generičke /discere/[subject] rute.
 *  2. free-preview (allowFree=true) — ispitni mod je besplatan, ali prijava je
 *     obavezna: gosti idu na /prijava?redirect=<trenutna putanja>, prijavljeni
 *     free korisnici ulaze bez /pro redirecta. Ograničenja su u samoj aplikaciji
 *     (FREE_LIMIT u vježbanju, analiza rezultata preko canSeeHrvAnalysis).
 *     Koristi ga /discere/hrvatski i mora ostati usklađeno s iznimkom
 *     freePreviewRoutes u proxy.js.
 */
export default function PlanGate({ children, allowFree = false }) {
  const { user, isPaid, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Dev bypass — owner account zaobilazi plan check
  const isDevBypass = user?.email === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL

  useEffect(() => {
    if (loading) return
    if (isDevBypass) return
    if (!user) {
      // Free-preview rute vraćaju korisnika točno tamo gdje je stao; paid-only
      // rute zadržavaju postojeći /discere redirect.
      const target = allowFree && pathname
        ? '/prijava?redirect=' + encodeURIComponent(pathname)
        : '/prijava?redirect=/discere'
      router.replace(target)
      return
    }
    if (!allowFree && !isPaid) {
      router.replace('/pro?from=discere')
    }
  }, [user, isPaid, loading, router, isDevBypass, allowFree, pathname])

  if (loading && !isDevBypass) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'var(--bg, #0a0a12)',
      }}>
        <div style={{ color: 'var(--muted, #888)', fontSize: 14 }}>Učitavanje...</div>
      </div>
    )
  }

  if (!isDevBypass && (!user || (!allowFree && !isPaid))) return null

  return children
}
