'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { migrateGuestScores } from '@/lib/prijemni/scores'
import { getEffectiveTier, isPaidTier, isProTier } from '@/lib/billing/getEffectiveTier'

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
  const [planError, setPlanError] = useState(false) // true if plan status check failed/timed out
  const [loading, setLoading] = useState(true)
  // Je li plan UOPĆE razriješen? `loading` govori samo je li poznat KORISNIK:
  // pada na false čim se sesija pročita iz localStoragea, dok planTier tada još
  // stoji na početnom 'free' jer fetchPlanStatus tek kreće. Potrošači koji tier
  // šalju nekome izvana (npr. DISCERE_CONFIG prema simulatoru u iframeu) moraju
  // razlikovati „free jer takav je plan“ od „free jer se još ne zna“ — inače
  // plaćeni korisnik dobije free konfiguraciju i ona mu ostane do kraja sesije.
  const [planResolved, setPlanResolved] = useState(false)

  // NAPOMENA: kolona `profiles.tier` NIJE izvor entitlementa. Nema polje isteka i
  // nijedan kod je ne briše pri otkazu/isteku pretplate (deactivateSubscription i
  // syncSubscriptionToSupabase čiste samo plan_type + pro_expires_at), pa bi jednom
  // upisan 'pro' trajno otključavao Pro sadržaj. Entitlement se izvodi isključivo iz
  // plan_type + pro_expires_at — isto pravilo koje koriste proxy.js i requirePro
  // (getUserTier → subscriptions.plan + current_period_end).

  async function fetchPlanStatus(userId, supabase) {
    if (!userId) { setPlanType(null); setPlanTier('free'); setPlanResolved(true); return }
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
      setPlanResolved(true)
      return
    }

    // Isti helper kao proxy.js i requirePro — jedno pravilo za plan + istek.
    const tier = getEffectiveTier(profile)
    setPlanError(false)
    setPlanTier(tier)
    setPlanType(tier === 'free' ? null : tier)
    setPlanResolved(true)
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
        // Zastavica mora pasti i ovdje: potrošači koji čekaju razriješen plan
        // inače čekaju zauvijek. Tier ostaje 'free' — fail-closed, kao i inače.
        setPlanResolved(true)
      }
    }, 5000)

    try {
      supabase = createClient()
    } catch (e) {
      console.error('[useAuth] createClient failed:', e)
      clearTimeout(hardTimeout)
      queueMicrotask(() => {
        if (mounted) { setLoading(false); setPlanResolved(true) }
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
          if (mounted) { setPlanError(true); setPlanResolved(true) }
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

  // Efektivni tier = isključivo plan (plan_type + pro_expires_at); dev bypass → pro.
  const userTier = devBypass ? 'pro' : planTier

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
        // false = tier se još razrješava; 'free' u tom trenutku NIJE odgovor.
        planResolved,
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
