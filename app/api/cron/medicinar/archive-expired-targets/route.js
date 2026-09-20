import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

// Runs daily — archives user_target_studiji where ispit_iso + 30 days has passed.

export async function GET(request) {
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret || request.headers.get('authorization') !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createAdminClient()

  const { data: expired, error: fetchErr } = await supabase
    .from('user_target_studiji')
    .select('id, user_id, studij_id, studiji!inner(ispit_iso)')
    .eq('active', true)
    .not('studiji.ispit_iso', 'is', null)
    .lt('studiji.ispit_iso', new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10))

  if (fetchErr) {
    console.error('[archive-expired-targets] fetch error:', fetchErr)
    return NextResponse.json({ error: fetchErr.message }, { status: 500 })
  }

  if (!expired?.length) {
    return NextResponse.json({ archived: 0, message: 'Nothing to archive' })
  }

  const ids = expired.map(r => r.id)

  const { error: updateErr } = await supabase
    .from('user_target_studiji')
    .update({
      active: false,
      archived_at: new Date().toISOString(),
      archived_reason: 'exam_expired',
    })
    .in('id', ids)

  if (updateErr) {
    console.error('[archive-expired-targets] update error:', updateErr)
    return NextResponse.json({ error: updateErr.message }, { status: 500 })
  }

  console.log(`[archive-expired-targets] archived ${ids.length} targets`)
  return NextResponse.json({ archived: ids.length, ids })
}
