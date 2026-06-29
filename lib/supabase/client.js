'use client'

import { createBrowserClient } from '@supabase/ssr'
import { processLock } from '@supabase/auth-js'

// Singleton na globalThis — preživljava Turbopack HMR module re-evaluation.
//
// Koristimo processLock umjesto browserovog Web Locks API-a (navigatorLock).
// Web Locks API baca "lock was released because another request stole it" kada:
//   - onAuthStateChange callback drži lock dok await-a mrežni poziv (fetchPlanStatus)
//   - istovremeno getSession() iz getUserTargets ili drugog poziva čeka isti lock
//   - timeout istekne → steal → error u prethodnom holderu
// processLock je in-memory lock, izbjegava Web Locks API u potpunosti.
// Jedini trade-off: nema cross-tab koordinacije token refresha — prihvatljivo.
export function createClient() {
  if (globalThis.__supabaseBrowserClient) return globalThis.__supabaseBrowserClient
  globalThis.__supabaseBrowserClient = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { auth: { lock: processLock } }
  )
  return globalThis.__supabaseBrowserClient
}