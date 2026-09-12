'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { migrateGuestScores } from '@/lib/prijemni/scores'
import { getEffectiveTier, normalizeTier, tierRank, isPaidTier, isProTier } from '@/lib/billing/getEffectiveTier'

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
  const [planTier, setPlanTier] = useState('free') // getEffectiveTier(profiles.plan_type + pro_expires_at)
  const [columnTier, setColumnTier] = useState('free') // profiles.tier (zasebna kolona, može nedostajati)
  const [planError, setPlanError] = useState(false) // true if plan status check failed/timed out
  const [loading, setLoading] = useState(true)

  // Independent of fetchPlanStatus — a separate query so a missing `tier` column
  // (schema not migrated yet) can never break the existing plan_type flow.
  async function fetchTier(userId, supabase) {
    if (!userId) { setColumnTier('free'); return }
    const { data } = await supabase
      .from('profiles')
      .select('tier')
      .eq('id', userId)
      .single()
    setColumnTier(normalizeTier(data?.tier))
  }

  async function fetchPlanStatus(userId, supabase) {
    if (!userId) { setPlanType(null); setPlanTier('free'); return }
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('plan_type, pro_expires_at')
      .eq('id', userId)
      .single()

    // Entitlements must fail closed. A missing column, query failure, or schema
    // drift must never grant a paid plan in the browser.
    if (profileError) {
      const isSchemaError = profileError.code === '42703' || profileError.message?.includes('does not exist')
      if (isSchemaError) {
        console.warn('[useAuth] plan_type column missing — defaulting to free until schema is migrated')
      } else {
        console.warn('[useAuth] plan status query failed — defaulting to free')
      }
      setPlanError(true)
      setPlanType(null)
      setPlanTier('free')
      return
    }

    // Isti helper kao proxy.js i requirePro — jedno pravilo za plan + istek.
    const tier = getEffectiveTier(profile)
    setPlanError(false)
    setPlanTier(tier)
    setPlanType(tier === 'free' ? null : tier)
  }

  useEffect(() => {
    let supabase
    let mounted = true

    // Instant: read user from localStorage before any network call.
    // This eliminates the 3s delay caused by Supabase's silent token refresh.
    const storedUser = readUserFromStorage()
    if (storedUser) {
      queueMicrotask(() => {
        if (!mounted) return
        setUser(storedUser)
        setLoading(false)
      })
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
      queueMicrotask(() => {
        if (mounted) setLoading(false)
      })
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
          if (mounted) setColumnTier('free')
        })
      }
    )

    return () => {
      mounted = false
      clearTimeout(hardTimeout)
      subscription.unsubscribe()
    }
  }, [])

  // DEV bypass mora biti eksplicitno postavljen; inače (env unset) `undefined === undefined`
  // bi otvorio isPro anonimnim korisnicima (fail-open paywall bypass).
  const devBypass = !!process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL && !!user?.email
    && user.email === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL

  // Efektivni tier = viši od plana (plan_type) i kolone profiles.tier; dev bypass → pro.
  const userTier = devBypass
    ? 'pro'
    : (tierRank(planTier) >= tierRank(columnTier) ? planTier : columnTier)

  return (
    <AuthContext.Provider
      value={{
        user,
        planType,
        userTier, // 'free' | 'starter' | 'pro' — getEffectiveTier (default 'free' for anon/loading)
        isPaid: isPaidTier(userTier),
        isPro: isProTier(userTier),
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
