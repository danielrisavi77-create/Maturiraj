'use client'

import { createClient } from '@/lib/supabase/client'

// ── Fetches full detail data for one child ───────────────────────────────────
// Returns ChildDetail shape as defined in architecture.
export async function fetchChildDetail(childId) {
  const supabase = createClient()
  const now      = new Date()
  const days14Ago = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)

  const [activityRes, planRes, checklistRes] = await Promise.all([
    supabase.from('activity_events')
      .select('section, duration_s, visited_at')
      .eq('user_id', childId)
      .gte('visited_at', days14Ago.toISOString())
      .order('visited_at', { ascending: true }),
    supabase.from('study_plans')
      .select('id, subjects, created_at')
      .eq('user_id', childId)
      .eq('is_active', true)
      .single(),
    supabase.from('checklist_progress')
      .select('id, completed')
      .eq('user_id', childId),
  ])

  const activity  = activityRes.data ?? []
  const checklist = checklistRes.data ?? []

  // Per-section breakdown
  const sectionMap = {}
  for (const e of activity) {
    if (!sectionMap[e.section]) sectionMap[e.section] = 0
    sectionMap[e.section] += e.duration_s ?? 0
  }
  const sections = Object.entries(sectionMap)
    .map(([section, seconds]) => ({ section, minutes: Math.round(seconds / 60) }))
    .sort((a, b) => b.minutes - a.minutes)

  // Daily activity (last 14 days)
  const dailyMap = {}
  for (const e of activity) {
    const day = e.visited_at.split('T')[0]
    if (!dailyMap[day]) dailyMap[day] = 0
    dailyMap[day] += e.duration_s ?? 0
  }
  const daily = Array.from({ length: 14 }, (_, i) => {
    const d = new Date(now)
    d.setDate(d.getDate() - (13 - i))
    const key = d.toISOString().split('T')[0]
    return { date: key, minutes: Math.round((dailyMap[key] ?? 0) / 60) }
  })

  // Plan progress (weeks)
  let plan = null
  if (planRes.data) {
    const { data: weeks } = await supabase
      .from('plan_weeks')
      .select('id, completed, week_num, subject_name')
      .eq('plan_id', planRes.data.id)

    const total     = weeks?.length ?? 0
    const completed = weeks?.filter(w => w.completed).length ?? 0
    plan = { total, completed, pct: total ? Math.round((completed / total) * 100) : 0 }
  }

  const lastActiveAt = activity.length
    ? activity[activity.length - 1].visited_at
    : null

  return {
    childId,
    sections,
    daily,
    plan,
    checklistDone:  checklist.filter(c => c.completed).length,
    checklistTotal: checklist.length,
    lastActiveAt,
  }
}

// ── React hook wrapper ────────────────────────────────────────────────────────
import { useState, useEffect } from 'react'

export function useChildDetail(childId) {
  const [data, setData]     = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]   = useState(null)

  useEffect(() => {
    if (!childId) { setLoading(false); return }
    setLoading(true)
    fetchChildDetail(childId)
      .then(d => { setData(d); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [childId])

  return { data, loading, error }
}
