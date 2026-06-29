'use client'
// ── useSubscription ──────────────────────────────────────────────────────────
// Thin wrapper around useAuth that exposes subscription status.
// Re-uses the existing AuthContext so there's no duplicate Supabase call.
//
// Usage:
//   const { isPaid, planType } = useSubscription()
//
// isPaid  → true if planType is 'starter' or 'pro' and not expired
// planType → null | 'starter' | 'pro'
// ─────────────────────────────────────────────────────────────────────────────

import { useAuth } from '@/lib/hooks/useAuth'

export function useSubscription() {
  const { isPaid, isPro, planType, loading } = useAuth()
  return { isPaid, isPro, planType, loading }
}
