'use client'
// ── useMatProgress ───────────────────────────────────────────────────────────
// Tracks per-chapter progress for mat-a.
//
// Free users: localStorage only.
// Paid users: localStorage + Supabase cloud sync (takes max of both).
//
// Usage:
//   const { progress, saveProgress, loadProgress } = useMatProgress(chapterId)
//
// progress     → current progress % (0–100) for the chapter
// saveProgress(pct) → save locally + cloud if paid
// loadProgress()    → merge local + cloud, return best
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { createClient } from '@/lib/supabase/client'

const SUBJECT = 'mat-a'

function localKey(chapterId) {
  return `maturiraj_${chapterId}_prog`
}

export function useMatProgress(chapterId) {
  const { isPaid, user } = useAuth()
  const [progress, setProgress] = useState(0)

  // Load on mount — merge local + cloud
  useEffect(() => {
    if (!chapterId) return
    let cancelled = false

    async function load() {
      const local = parseInt(localStorage.getItem(localKey(chapterId)) || '0', 10)

      if (!isPaid || !user) {
        if (!cancelled) setProgress(local)
        return
      }

      try {
        const supabase = createClient()
        const { data } = await supabase
          .from('chapter_progress')
          .select('progress_pct')
          .eq('user_id', user.id)
          .eq('subject', SUBJECT)
          .eq('chapter', chapterId)
          .maybeSingle()

        const cloud = data?.progress_pct ?? 0
        const best = Math.max(local, cloud)

        // Back-fill localStorage if cloud is ahead
        if (cloud > local) {
          try { localStorage.setItem(localKey(chapterId), String(cloud)) } catch {}
        }

        if (!cancelled) setProgress(best)
      } catch {
        // Network failure — fall back to local
        if (!cancelled) setProgress(local)
      }
    }

    load()
    return () => { cancelled = true }
  }, [chapterId, isPaid, user])

  const saveProgress = useCallback(async (pct) => {
    if (!chapterId) return
    const val = Math.min(100, Math.max(0, Math.round(pct)))
    setProgress(val)

    // Always persist locally
    try { localStorage.setItem(localKey(chapterId), String(val)) } catch {}

    // Cloud sync for paid users only
    if (!isPaid || !user) return

    try {
      const supabase = createClient()
      await supabase
        .from('chapter_progress')
        .upsert({
          user_id: user.id,
          subject: SUBJECT,
          chapter: chapterId,
          progress_pct: val,
          updated_at: new Date().toISOString(),
        }, { onConflict: 'user_id,subject,chapter' })
    } catch (e) {
      console.warn('[useMatProgress] cloud sync failed, saved locally only:', e)
    }
  }, [chapterId, isPaid, user])

  return { progress, saveProgress }
}
