import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

// Reuse same formula as PuttingRateCard / medicinarMode for consistency
function calcPuttingRate(studij, progress) {
  const predmeti = (studij.predmeti || []).map(p => p.toLowerCase().split(' ')[0])
  const rel = progress.filter(p => predmeti.includes(p.predmet))
  if (rel.length === 0) return null
  const avg = rel.reduce((sum, p) => {
    const cov = p.skripte_total_chapters
      ? (p.skripte_viewed_chapters / p.skripte_total_chapters) * 100 : 0
    const mas = p.skripte_total_chapters
      ? (p.skripte_mastered_chapters / p.skripte_total_chapters) * 100 : 0
    const acc = p.vjezbe_accuracy ?? 0
    const sim = p.simulator_best_score ?? 0
    return sum + (cov * 0.2 + mas * 0.25 + acc * 0.25 + (sim > 0 ? sim * 0.3 : 0))
  }, 0) / rel.length
  return Math.max(5, Math.min(95, Math.round(avg)))
}

// GET /api/parent/child-dashboard/[childId]
export async function GET(request, { params }) {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { childId } = await params

  // Verify parent-child link is confirmed (status = 'linked')
  const { data: link } = await supabase
    .from('parent_children')
    .select('id, child_email, child_name, status, child_id')
    .eq('parent_id', session.user.id)
    .eq('child_id', childId)
    .eq('status', 'linked')
    .maybeSingle()

  if (!link) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Fetch all child data using admin client (bypasses RLS, parent already verified above)
  const admin = createAdminClient()

  const [profileRes, targetsRes, progressRes, simRes] = await Promise.all([
    admin
      .from('profiles')
      .select('id, email, plan_type')
      .eq('id', childId)
      .maybeSingle(),
    admin
      .from('user_target_studiji')
      .select('studij_id, priority, active')
      .eq('user_id', childId)
      .eq('active', true)
      .order('priority')
      .limit(3),
    admin
      .from('user_predmet_progress')
      .select('predmet, skripte_total_chapters, skripte_viewed_chapters, skripte_mastered_chapters, vjezbe_total_attempts, vjezbe_correct, vjezbe_accuracy, simulator_best_score, simulator_last_score, simulator_attempts_count, last_activity_at')
      .eq('user_id', childId),
    admin
      .from('simulator_attempts')
      .select('id, score_pct, created_at, target_studij_id, status')
      .eq('user_id', childId)
      .eq('status', 'completed')
      .order('created_at', { ascending: false })
      .limit(10),
  ])

  const profile = profileRes.data
  const targets = targetsRes.data || []
  const progress = progressRes.data || []
  const simAttempts = simRes.data || []

  // Fetch studij details for active targets
  let studiji = []
  if (targets.length > 0) {
    const { data } = await admin
      .from('studiji_view')
      .select('id, naziv, fak_short, color, predmeti, prag_2025, sym, glyph_bg')
      .in('id', targets.map(t => t.studij_id))
    studiji = data || []
  }

  // Compute last_active_at from progress rows
  const activityDates = progress
    .map(p => p.last_activity_at)
    .filter(Boolean)
    .map(d => new Date(d))
  const lastActive = activityDates.length > 0
    ? new Date(Math.max(...activityDates.map(d => d.getTime())))
    : null
  const daysInactive = lastActive !== null
    ? Math.floor((Date.now() - lastActive.getTime()) / 86400000)
    : null

  // Enrich targets with studij data and putting rate
  const enrichedTargets = targets.map(t => {
    const studij = studiji.find(s => s.id === t.studij_id) || null
    return {
      ...t,
      studij,
      putting_rate: studij ? calcPuttingRate(studij, progress) : null,
    }
  })

  return NextResponse.json({
    child: {
      id: childId,
      email: profile?.email || link.child_email,
      name: link.child_name,
      plan: profile?.plan_type || 'free',
    },
    targets: enrichedTargets,
    progress,
    sim_attempts: simAttempts,
    last_active_at: lastActive?.toISOString() || null,
    days_inactive: daysInactive,
  })
}
