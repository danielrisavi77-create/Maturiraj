import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

let cachedSupabaseAdmin = null

function getSupabaseConfig() {
  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase env vars: SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY.')
  }

  return { supabaseUrl, serviceRoleKey }
}

function getSupabaseAdminClient() {
  if (cachedSupabaseAdmin) return cachedSupabaseAdmin

  const { supabaseUrl, serviceRoleKey } = getSupabaseConfig()
  cachedSupabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  })

  return cachedSupabaseAdmin
}

export async function POST(request) {
  let supabaseAdmin
  let supabaseUrl
  let serviceRoleKey

  try {
    supabaseAdmin = getSupabaseAdminClient()
    ;({ supabaseUrl, serviceRoleKey } = getSupabaseConfig())
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }

  // Verify admin — server-side check via JWT from Authorization header or cookie
  const authHeader = request.headers.get('authorization')
  const cookieToken = request.cookies.get('sb-access-token')?.value
  const token = authHeader?.replace('Bearer ', '') || cookieToken

  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: { user } } = await supabaseAdmin.auth.getUser(token)
  if (!user) return NextResponse.json({ error: 'Invalid token' }, { status: 401 })

  const { data: profile } = await supabaseAdmin
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'admin') {
    return NextResponse.json({ error: 'Admin required' }, { status: 403 })
  }

  const body = await request.json().catch(() => ({}))
  const source = typeof body?.source === 'string' ? body.source : 'azvo_upisi'

  try {
    // Invoke the deployed Edge Function
    const fnUrl = `${supabaseUrl}/functions/v1/scrape-${source}`
    const res = await fetch(fnUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ triggeredBy: user.id }),
    })
    const result = await res.json()
    return NextResponse.json(result, { status: res.ok ? 200 : 500 })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
