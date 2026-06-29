import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

let cachedSupabase = null

function getSupabaseClient() {
  if (cachedSupabase) return cachedSupabase

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase env vars: SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY.')
  }

  cachedSupabase = createClient(supabaseUrl, serviceRoleKey)
  return cachedSupabase
}

const SLACK_WEBHOOK = process.env.SLACK_WEBHOOK_URL // add to Vercel env vars

/**
 * POST /api/webhooks/slack
 * Called by admin panel "Send Slack summary" button, or manually.
 * Requires admin JWT in Authorization header.
 *
 * Also accepts ?source=cron for cron-triggered summaries (uses CRON_SECRET).
 */
export async function POST(request) {
  let supabase
  try {
    supabase = getSupabaseClient()
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }

  // Auth: cron secret OR admin JWT
  const auth = request.headers.get('authorization') ?? ''
  const isCron = auth === `Bearer ${process.env.CRON_SECRET}`

  if (!isCron) {
    // Verify admin JWT
    const token = auth.replace('Bearer ', '')
    const { data: { user }, error } = await supabase.auth.getUser(token)
    if (error || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    if (profile?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }
  }

  if (!SLACK_WEBHOOK) {
    return NextResponse.json({ error: 'SLACK_WEBHOOK_URL not configured' }, { status: 500 })
  }

  // Fetch staging counts grouped by diff_status
  const { data: counts } = await supabase
    .from('pragovi_staging')
    .select('diff_status')
    .in('diff_status', ['new', 'changed', 'unmatched', 'pending'])

  const summary = (counts ?? []).reduce((acc, r) => {
    acc[r.diff_status] = (acc[r.diff_status] ?? 0) + 1
    return acc
  }, {})

  const total = Object.values(summary).reduce((s, n) => s + n, 0)

  // Fetch last scraper run
  const { data: lastRun } = await supabase
    .from('scraper_runs')
    .select('source_key, started_at, status, rows_new, rows_changed, rows_unmatched')
    .order('started_at', { ascending: false })
    .limit(1)
    .maybeSingle()

  const adminUrl = 'https://maturiraj.hr/admin/prijemni'

  const blocks = [
    {
      type: 'header',
      text: { type: 'plain_text', text: `🔔 Prijemni scraper — ${total} promjena` },
    },
    {
      type: 'section',
      fields: [
        { type: 'mrkdwn', text: `*Novi:*\n${summary.new ?? 0}` },
        { type: 'mrkdwn', text: `*Promijenjeni:*\n${summary.changed ?? 0}` },
        { type: 'mrkdwn', text: `*Neprepoznati:*\n${summary.unmatched ?? 0}` },
        { type: 'mrkdwn', text: `*Pending:*\n${summary.pending ?? 0}` },
      ],
    },
    lastRun && {
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `*Zadnji run:* \`${lastRun.source_key}\` — ${lastRun.status} (${new Date(lastRun.started_at).toLocaleString('hr-HR')})`,
      },
    },
    total > 0 && {
      type: 'actions',
      elements: [
        {
          type: 'button',
          text: { type: 'plain_text', text: 'Otvori admin panel →' },
          url: adminUrl,
          style: 'primary',
        },
      ],
    },
  ].filter(Boolean)

  const slackRes = await fetch(SLACK_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ blocks }),
  })

  if (!slackRes.ok) {
    const text = await slackRes.text()
    return NextResponse.json({ error: `Slack error: ${text}` }, { status: 502 })
  }

  return NextResponse.json({ ok: true, total, summary })
}
