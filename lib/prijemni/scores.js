'use client'
/** @import { UserScores } from '@/lib/prijemni/matcher' */

import { createClient } from '@/lib/supabase/client'

function getSupabase() {
  return createClient()
}

// Session ID za anonimne usere
const SESSION_KEY = 'mh_anon_session_id'

/**
 * @returns {string}
 */
export function getOrCreateSessionId() {
  if (typeof window === 'undefined') return ''
  let id = localStorage.getItem(SESSION_KEY)
  if (!id) {
    id = (typeof crypto !== 'undefined' && crypto.randomUUID)
      ? crypto.randomUUID()
      : 'anon_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem(SESSION_KEY, id)
  }
  return id
}

/**
 * Get scores za trenutnog usera (auth ili guest).
 *
 * @returns {Promise<UserScores|null>}
 */
export async function getUserScores() {
  const supabase = getSupabase()
  const { data: { session } } = await supabase.auth.getSession()

  if (session?.user) {
    const { data, error } = await supabase
      .from('user_prijemni_scores')
      .select('*')
      .eq('user_id', session.user.id)
      .maybeSingle()
    if (error) { console.error(error); return null }
    return data
  } else {
    // Gost: server-side ruta veže session_id iz httpOnly cookieja (ne anon RLS).
    const res = await fetch('/api/prijemni/guest-scores', { cache: 'no-store' })
    if (!res.ok) return null
    const { data } = await res.json()
    return data ?? null
  }
}

/**
 * Upsert scores. Ako je user logged in → user_id, inače → session_id.
 *
 * @param {Partial<UserScores>} scores
 * @returns {Promise<UserScores|null>}
 */
export async function saveUserScores(scores) {
  const supabase = getSupabase()
  const { data: { session } } = await supabase.auth.getSession()

  const payload = { ...scores, updated_at: new Date().toISOString() }

  if (session?.user) {
    payload.user_id = session.user.id
    const { data, error } = await supabase
      .from('user_prijemni_scores')
      .upsert(payload, { onConflict: 'user_id' })
      .select()
      .single()
    if (error) { console.error(error); return null }
    return data
  } else {
    // Gost: server upsert veže session_id iz httpOnly cookieja i whitelista stupce.
    const res = await fetch('/api/prijemni/guest-scores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scores),
    })
    if (!res.ok) { console.error('[guest-scores] save failed', res.status); return null }
    const { data } = await res.json()
    return data ?? null
  }
}

/**
 * Migracija guest → logged in.
 * Pozovi nakon uspješnog logina da se session score poveže s userom.
 *
 * @param {string} userId
 * @returns {Promise<void>}
 */
export async function migrateGuestScores(userId) {
  // Guest podaci su vezani na httpOnly cookie (server), a ne na klijentski
  // session_id — migracija ide serverski (user iz auth sesije, guest iz cookieja).
  // `userId` se zadržava radi kompatibilnosti potpisa; server ga izvodi iz sesije.
  try {
    await fetch('/api/prijemni/guest-scores/migrate', { method: 'POST' })
  } catch (e) {
    console.error('[guest-scores] migrate failed', e)
  }
}

/**
 * @returns {Promise<void>}
 */
export async function deleteUserScores() {
  const supabase = getSupabase()
  const { data: { session } } = await supabase.auth.getSession()

  if (session?.user) {
    await supabase.from('user_prijemni_scores').delete().eq('user_id', session.user.id)
  } else {
    // Gost: server briše red scoped na httpOnly cookie session_id.
    await fetch('/api/prijemni/guest-scores', { method: 'DELETE' })
  }
}
