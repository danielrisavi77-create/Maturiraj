import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function GET(request) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createAdminClient()

  // Dohvati sve Pro userove s aktivnim targetima
  const { data: eligibleUsers } = await supabase
    .from('profiles')
    .select(`
      id,
      user_target_studiji!inner(studij_id, active)
    `)
    .eq('plan_type', 'pro')

  if (!eligibleUsers?.length) return NextResponse.json({ processed: 0 })

  const results = { processed: 0, skipped: 0, failed: 0 }

  for (const user of eligibleUsers) {
    const activeTargets = user.user_target_studiji?.filter(t => t.active) || []
    if (activeTargets.length === 0) continue

    // Generate za primary target only
    const primaryTarget = activeTargets[0]

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/medicinar/briefing/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
          'X-User-Id': user.id,
        },
        body: JSON.stringify({ studij_id: primaryTarget.studij_id }),
      })

      if (res.ok) results.processed++
      else if (res.status === 200) results.skipped++
      else results.failed++

      // Throttle — Claude rate limits
      await new Promise(r => setTimeout(r, 1500))
    } catch {
      results.failed++
    }
  }

  return NextResponse.json(results)
}
