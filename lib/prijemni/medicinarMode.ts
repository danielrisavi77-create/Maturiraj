import { createClient } from '@/lib/supabase/client'
import { isHardStudij } from '@/lib/supabase/pricing'

export interface UserTarget {
  id: string
  studij_id: string
  priority: number
  active: boolean
  created_at: string
}

export interface PredmetProgress {
  predmet: string
  skripte_total_chapters: number
  skripte_viewed_chapters: number
  skripte_mastered_chapters: number
  vjezbe_total_attempts: number
  vjezbe_correct: number
  vjezbe_accuracy: number | null
  simulator_best_score: number | null
  simulator_last_score: number | null
  weak_topics: Array<{ topic: string; accuracy: number; attempts: number }>
  last_activity_at: string | null
}

interface StudijRef {
  id: string
  fakultet_id: string
}

/**
 * Dohvati sve aktivne targete za usera.
 */
export async function getUserTargets(): Promise<UserTarget[]> {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return []
  const { data } = await supabase
    .from('user_target_studiji')
    .select('*')
    .eq('user_id', session.user.id)
    .eq('active', true)
    .order('priority')
  return data || []
}

/**
 * Dodaj studij kao target.
 */
export async function addTarget(studijId: string, priority = 1): Promise<boolean> {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return false
  const { error } = await supabase
    .from('user_target_studiji')
    .upsert(
      { user_id: session.user.id, studij_id: studijId, priority, active: true },
      { onConflict: 'user_id,studij_id' }
    )
  return !error
}

export async function removeTarget(studijId: string): Promise<boolean> {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return false
  const { error } = await supabase
    .from('user_target_studiji')
    .update({ active: false })
    .eq('user_id', session.user.id)
    .eq('studij_id', studijId)
  return !error
}

/**
 * Provjeri je li user eligible za Medicinar Mode.
 * Eligible = ima barem jedan hard target.
 */
export async function isMedicinarEligible(studiji: StudijRef[]): Promise<boolean> {
  const targets = await getUserTargets()
  if (targets.length === 0) return false
  return targets.some(t => {
    const studij = studiji.find(s => s.id === t.studij_id)
    return studij && isHardStudij(studij)
  })
}

/**
 * Dohvati progress za sve predmete user-a.
 */
export async function getPredmetProgress(predmeti?: string[]): Promise<PredmetProgress[]> {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return []
  let q = supabase
    .from('user_predmet_progress')
    .select('*')
    .eq('user_id', session.user.id)
  if (predmeti) q = q.in('predmet', predmeti)
  const { data } = await q
  return (data || []) as PredmetProgress[]
}

/**
 * Leaderboard stats za target studij.
 */
export async function getLeaderboardStats(studijId: string) {
  const supabase = createClient()
  const { data } = await supabase
    .from('simulator_stats')
    .select('*')
    .eq('target_studij_id', studijId)
    .maybeSingle()
  return data
}

/**
 * Najnoviji briefing za ovaj tjedan.
 */
export async function getLatestBriefing(studijId?: string) {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return null
  let q = supabase
    .from('ai_briefings')
    .select('*')
    .eq('user_id', session.user.id)
    .order('week_of', { ascending: false })
    .limit(1)
  if (studijId) q = q.eq('target_studij_id', studijId)
  const { data } = await q.maybeSingle()
  return data
}
