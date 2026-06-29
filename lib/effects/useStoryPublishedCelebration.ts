'use client'
import { useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { fireDoubleConfetti } from '@/lib/effects/confetti'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

const CELEBRATED_KEY = 'mh_story_celebrated'

function getCelebrated(): Set<string> {
  if (typeof window === 'undefined') return new Set()
  try {
    const raw = localStorage.getItem(CELEBRATED_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch { return new Set() }
}

function markCelebrated(storyId: string) {
  try {
    const set = getCelebrated()
    set.add(storyId)
    localStorage.setItem(CELEBRATED_KEY, JSON.stringify([...set]))
  } catch {}
}

/**
 * Fires fireDoubleConfetti() when the user logs in and has a newly published story
 * that hasn't been celebrated yet.
 *
 * Mount in layout or prijemni page — runs once per session per published story.
 */
export function useStoryPublishedCelebration() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    async function check() {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        if (!session?.user) return

        // Fetch published stories for this user
        const { data: stories } = await supabase
          .from('user_stories')
          .select('id, status, published_at')
          .eq('user_id', session.user.id)
          .eq('status', 'published')
          .order('published_at', { ascending: false })
          .limit(10)

        if (!stories?.length) return

        const celebrated = getCelebrated()
        const newlyPublished = stories.filter(s => s.id && !celebrated.has(s.id))

        if (newlyPublished.length === 0) return

        // Mark all as celebrated before firing (prevent race)
        newlyPublished.forEach(s => markCelebrated(s.id))

        // Fire double confetti — story published! 🎉
        setTimeout(() => {
          fireDoubleConfetti(['#3ecf6e', '#4b7bff', '#7c5cfc', '#e9b446', '#fff'])
        }, 800)
      } catch (err) {
        // Silent — non-critical
      }
    }

    check()
  }, [])
}
