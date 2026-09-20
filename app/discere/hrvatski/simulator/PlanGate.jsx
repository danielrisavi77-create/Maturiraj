'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Client-side plan gate — defense in depth on top of proxy paidRequired.
 * Paid-only Discere (W2 / ODL-1): free users go to /pro; guests to /prijava.
 * Free 3Q / demo preview is not offered while proxy blocks /discere for free.
 */
export default function PlanGate({ children }) {
  const { user, isPaid, loading } = useAuth()
  const router = useRouter()

  // Dev bypass — owner account zaobilazi plan check
  const isDevBypass = user?.email === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL

  useEffect(() => {
    if (loading) return
    if (isDevBypass) return
    if (!user) {
      router.replace('/prijava?redirect=/discere')
      return
    }
    if (!isPaid) {
      router.replace('/pro?from=discere')
    }
  }, [user, isPaid, loading, router, isDevBypass])

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

  if (!isDevBypass && (!user || !isPaid)) return null

  return children
}
