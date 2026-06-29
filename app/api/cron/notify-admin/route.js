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

export async function GET(request) {
  let supabase
  try {
    supabase = getSupabaseClient()
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }

  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Count pending changes
  const { count } = await supabase
    .from('pragovi_staging')
    .select('*', { count: 'exact', head: true })
    .in('diff_status', ['new', 'changed', 'unmatched'])

  if (!count || count === 0) {
    return NextResponse.json({ ok: true, sent: false })
  }

  // Fetch admin emails
  const { data: admins } = await supabase
    .from('profiles')
    .select('email')
    .eq('role', 'admin')

  // Send via Resend
  for (const admin of admins || []) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Maturiraj <noreply@maturiraj.hr>',
        to: admin.email,
        subject: `🔔 ${count} promjena za review — Maturiraj admin`,
        html: `
          <p>Imaš <strong>${count}</strong> pending promjena na prijemnima.</p>
          <p><a href="https://maturiraj.hr/admin/prijemni">Otvori admin panel →</a></p>
        `,
      }),
    })
  }

  return NextResponse.json({ ok: true, sent: admins?.length || 0 })
}
