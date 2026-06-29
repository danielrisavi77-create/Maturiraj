'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { migrateGuestScores } from '@/lib/prijemni/scores'

const AuthContext = createContext(null)

// Read user synchronously — checks localStorage (supabase-js) AND cookies (@supabase/ssr).
// Used to unblock the UI before onAuthStateChange fires (which does a token refresh).
function readUserFromStorage() {
  if (typeof window === 'undefined') return null
  try {
    // 1. localStorage — used by supabase-js v2 standalone
    const lsKey = Object.keys(window.localStorage).find(
      k => k.startsWith('sb-') && k.endsWith('-auth-token')
    )
    if (lsKey) {
      const raw = JSON.parse(window.localStorage.getItem(lsKey))
      if (raw?.user) return raw.user
    }
    // 2. Cookies — used by @supabase/ssr createBrowserClient (OAuth SSR flow)
    // Cookie may be split into chunks: sb-<ref>-auth-token, sb-<ref>-auth-token.0, .1 …
    const allCookies = Object.fromEntries(
      document.cookie.split('; ').filter(Boolean).map(c => {
        const idx = c.indexOf('=')
        return [c.slice(0, idx), c.slice(idx + 1)]
      })
    )
    const baseKey = Object.keys(allCookies).find(
      k => k.startsWith('sb-') && (k.endsWith('-auth-token') || k.endsWith('-auth-token.0'))
    )
    if (baseKey) {
      // Reassemble chunked cookies
      let combined = ''
      if (allCookies[baseKey] !== undefined && !baseKey.endsWith('.0')) {
        combined = allCookies[baseKey]
      } else {
        let i = 0
        const chunkBase = baseKey.replace(/\.0$/, '')
        while (allCookies[`${chunkBase}.${i}`] !== undefined) {
          combined += allCookies[`${chunkBase}.${i}`]
          i++
        }
      }
      if (combined) {
        const raw = JSON.parse(decodeURIComponent(combined))
        if (raw?.user) return raw.user
      }
    }
  } catch {
    // Ignore parse errors
  }
  return null
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [planType, setPlanType] = useState(null) // null | 'starter' | 'pro'
  const [userTier, setUserTier] = useState('free') // 'free' | 'standard' | 'pro' (profiles.tier)
  const [planError, setPlanError] = useState(false) // true if plan status check failed/timed out
  const [loading, setLoading] = useState(true)

  // Independent of fetchPlanStatus — a separate query so a missing `tier` column
  // (schema not migrated yet) can never break the existing plan_type flow.
  async function fetchTier(userId, supabase) {
    if (!userId) { setUserTier('free'); return }
    const { data } = await supabase
      .from('profiles')
      .select('tier')
      .eq('id', userId)
      .single()
    setUserTier(data?.tier ?? 'free')
  }

  async function fetchPlanStatus(userId, supabase) {
    if (!userId) { setPlanType(null); return }
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('plan_type, pro_expires_at')
      .eq('id', userId)
      .single()

    // If the column doesn't exist yet (schema not migrated), treat as schema error
    // and fall back to 'pro' so the dashboard isn't permanently blocked.
    if (profileError) {
      const isSchemaError = profileError.code === '42703' || profileError.message?.includes('does not exist')
      if (isSchemaError) {
        console.warn('[useAuth] plan_type column missing — defaulting to pro until schema is migrated')
        setPlanType('pro')
      } else {
        setPlanType(null)
      }
      return
    }

    const valid =
      !profile?.pro_expires_at ||
      new Date(profile.pro_expires_at) > new Date()
    const type =
      (profile?.plan_type === 'pro' || profile?.plan_type === 'starter') && valid
        ? profile.plan_type
        : null
    setPlanType(type)
  }

  useEffect(() => {
    let supabase
    let mounted = true

    // Instant: read user from localStorage before any network call.
    // This eliminates the 3s delay caused by Supabase's silent token refresh.
    const storedUser = readUserFromStorage()
    if (storedUser) {
      setUser(storedUser)
      setLoading(false)
    }

    // Hard timeout fallback — if everything hangs, unblock after 5s
    const hardTimeout = setTimeout(() => {
      if (mounted) {
        console.warn('[useAuth] hard timeout — forcing loading=false')
        setLoading(false)
      }
    }, 5000)

    try {
      supabase = createClient()
    } catch (e) {
      console.error('[useAuth] createClient failed:', e)
      clearTimeout(hardTimeout)
      if (mounted) setLoading(false)
      return
    }

    // onAuthStateChange validates/refreshes the token in the background.
    // INITIAL_SESSION fires after refresh — updates user with authoritative data.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!mounted) return
        setUser(session?.user ?? null)

        if (event === 'INITIAL_SESSION') {
          clearTimeout(hardTimeout)
          if (mounted) setLoading(false) // covers the case where storedUser was null
        }

        // Migracija guest prijemni score-ova na user account nakon prijave
        if (event === 'SIGNED_IN' && session?.user?.id) {
          migrateGuestScores(session.user.id).catch(() => {})
        }

        // fetchPlanStatus je fire-and-forget — NE smije se await-ati unutar
        // onAuthStateChange callbacka. fetchPlanStatus interno zove getSession()
        // što pokušava re-akvirirati processLock koji auth library još drži →
        // deadlock → INITIAL_SESSION nikad ne stiže → hard timeout.
        fetchPlanStatus(session?.user?.id ?? null, supabase).catch(() => {
          if (mounted) setPlanError(true)
        })

        // userTier — independent fire-and-forget fetch (profiles.tier).
        fetchTier(session?.user?.id ?? null, supabase).catch(() => {
          if (mounted) setUserTier('free')
        })
      }
    )

    return () => {
      mounted = false
      clearTimeout(hardTimeout)
      subscription.unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        planType,
        userTier, // 'free' | 'standard' | 'pro' — from profiles.tier (default 'free' for anon/loading)
        isPaid: planType !== null,
        isPro: planType === 'pro' || user?.email === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL,
        planError,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
