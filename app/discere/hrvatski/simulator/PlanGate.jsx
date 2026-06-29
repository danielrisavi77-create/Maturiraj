'use client'

import { useAuth } from '@/lib/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

/**
 * Client-side plan gate — defense in depth on top of middleware.
 * Redirects free users to /pro if they somehow bypass the middleware.
 */
export default function PlanGate({ children }) {
  const { user, isPaid, loading } = useAuth()
  const router = useRouter()

  // Dev bypass — owner account zaobilazi plan check
  const isDevBypass = user?.email === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL

  // Free preview model: logged-in free users may enter — SimulatorPreviewGate handles the Q limit.
  // Only unauthenticated visitors are redirected to login.
  useEffect(() => {
    if (!loading && !user && !isDevBypass) {
      router.replace('/prijava?from=discere')
    }
  }, [user, loading, router, isDevBypass])

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

  if (!loading && !user && !isDevBypass) return null

  return children
}
