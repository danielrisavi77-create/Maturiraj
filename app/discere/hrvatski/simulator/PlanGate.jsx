'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Client-side plan gate — defense in depth uz proxy (/discere traži prijavu).
 *
 * Zadano (allowFree=true) je free-exam model cijelog Discerea: prijava je
 * obavezna, ali prijavljeni free korisnik ulazi — pravi ispiti s timerom su
 * besplatni, a ograničenja žive u aplikaciji (FREE_LIMIT u vježbanju, razrada
 * rezultata iza canSeeDiscereAnalysis). Gost uvijek ide na
 * /prijava?redirect=<trenutna putanja>.
 *
 * allowFree={false} zadržava stari paid-only mod (prijavljeni free → /pro) za
 * rute koje još nemaju in-app gating; te ga rute moraju slati eksplicitno.
 */
export default function PlanGate({ children, allowFree = true }) {
  const { user, isPaid, loading } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  // Dev bypass — owner account zaobilazi plan check
  const isDevBypass = user?.email === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL

  useEffect(() => {
    if (loading) return
    if (isDevBypass) return
    if (!user) {
      router.replace('/prijava?redirect=' + encodeURIComponent(pathname || '/discere'))
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
