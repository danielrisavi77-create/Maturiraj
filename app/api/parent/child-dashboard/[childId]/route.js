import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { isParentLinkingV2Enabled } from '@/lib/config/featureFlags'

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function parentV2Disabled() {
  return NextResponse.json(
    { error: 'Roditeljski pregled je privremeno nedostupan.', code: 'FEATURE_DISABLED' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  )
}

function calcPuttingRate(studij, progress) {
  const predmeti = (studij.predmeti || []).map(p => p.toLowerCase().split(' ')[0])
  const relevant = progress.filter(p => predmeti.includes(p.predmet))
  if (relevant.length === 0) return null

  const average = relevant.reduce((sum, item) => {
    const coverage = item.skripte_total_chapters
      ? (item.skripte_viewed_chapters / item.skripte_total_chapters) * 100 : 0
    const mastery = item.skripte_total_chapters
      ? (item.skripte_mastered_chapters / item.skripte_total_chapters) * 100 : 0
    const accuracy = item.vjezbe_accuracy ?? 0
    const simulator = item.simulator_best_score ?? 0
    return sum + (coverage * 0.2 + mastery * 0.25 + accuracy * 0.25 + (simulator > 0 ? simulator * 0.3 : 0))
  }, 0) / relevant.length

  return Math.max(5, Math.min(95, Math.round(average)))
}

// GET /api/parent/child-dashboard/[childId]
export async function GET(_request, { params } = {}) {
  if (!isParentLinkingV2Enabled()) return parentV2Disabled()

  const resolvedParams = await params
  const childId = resolvedParams?.childId
  if (!childId || !UUID_PATTERN.test(childId)) {
    return NextResponse.json({ error: 'Neispravan child id.' }, { status: 400 })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // This regular RLS read is the authorization proof. No admin client exists
  // until the authenticated parent owns a child-approved V2 relationship.
  const { data: link, error: linkError } = await supabase
    .from('parent_children')
    .select('id, child_id, child_email, child_name, status, consent_version, consent_decided_at')
    .eq('parent_id', user.id)
    .eq('child_id', childId)
    .eq('status', 'linked')
    .eq('consent_version', 'v2')
    .not('consent_decided_at', 'is', null)
    .maybeSingle()

  if (linkError) {
    return NextResponse.json({ error: 'Nije moguće potvrditi ovlaštenje.' }, { status: 500 })
  }

  const childApproved = link
    && link.child_id === childId
    && link.status === 'linked'
    && link.consent_version === 'v2'
    && Boolean(link.consent_decided_at)

  if (!childApproved) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Admin reads are permitted only after the proof above.
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

  if ([profileRes, targetsRes, progressRes, simRes].some(result => result.error)) {
    return NextResponse.json({ error: 'Podaci djeteta trenutačno nisu dostupni.' }, { status: 502 })
  }

  const profile = profileRes.data
  const targets = targetsRes.data || []
  const progress = progressRes.data || []
  const simAttempts = simRes.data || []

  let studiji = []
  if (targets.length > 0) {
    const { data, error } = await admin
      .from('studiji_view')
      .select('id, naziv, fak_short, color, predmeti, prag_2025, sym, glyph_bg')
      .in('id', targets.map(target => target.studij_id))
    if (error) {
      return NextResponse.json({ error: 'Podaci studija trenutačno nisu dostupni.' }, { status: 502 })
    }
    studiji = data || []
  }

  const activityDates = progress
    .map(item => item.last_activity_at)
    .filter(Boolean)
    .map(value => new Date(value))
    .filter(value => !Number.isNaN(value.getTime()))
  const lastActive = activityDates.length > 0
    ? new Date(Math.max(...activityDates.map(value => value.getTime())))
    : null
  const daysInactive = lastActive
    ? Math.floor((Date.now() - lastActive.getTime()) / 86400000)
    : null

  const enrichedTargets = targets.map(target => {
    const studij = studiji.find(item => item.id === target.studij_id) || null
    return {
      ...target,
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
  }, { headers: { 'Cache-Control': 'no-store' } })
}
