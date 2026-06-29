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
    const sessionId = getOrCreateSessionId()
    if (!sessionId) return null
    const { data, error } = await supabase
      .from('user_prijemni_scores')
      .select('*')
      .eq('session_id', sessionId)
      .maybeSingle()
    if (error) { console.error(error); return null }
    return data
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
    payload.session_id = getOrCreateSessionId()
    // Za session_id nemamo unique index pa moramo prvo provjeriti
    const existing = await getUserScores()
    if (existing) {
      const { data, error } = await supabase
        .from('user_prijemni_scores')
        .update(payload)
        .eq('session_id', payload.session_id)
        .select()
        .single()
      if (error) { console.error(error); return null }
      return data
    } else {
      const { data, error } = await supabase
        .from('user_prijemni_scores')
        .insert(payload)
        .select()
        .single()
      if (error) { console.error(error); return null }
      return data
    }
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
  const supabase = getSupabase()
  const sessionId = getOrCreateSessionId()
  if (!sessionId) return

  const { data: guestScore } = await supabase
    .from('user_prijemni_scores')
    .select('*')
    .eq('session_id', sessionId)
    .maybeSingle()

  if (!guestScore) return

  const { data: existingUserScore } = await supabase
    .from('user_prijemni_scores')
    .select('id')
    .eq('user_id', userId)
    .maybeSingle()

  if (existingUserScore) {
    // User već ima score → samo obriši guest
    await supabase.from('user_prijemni_scores').delete().eq('session_id', sessionId)
  } else {
    // Promote guest na user
    await supabase
      .from('user_prijemni_scores')
      .update({ user_id: userId, session_id: null })
      .eq('session_id', sessionId)
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
    const sessionId = getOrCreateSessionId()
    if (sessionId) {
      await supabase.from('user_prijemni_scores').delete().eq('session_id', sessionId)
    }
  }
}
