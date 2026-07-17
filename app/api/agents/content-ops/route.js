// app/api/agents/content-ops/route.js
import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { runAgent } from '@/lib/agent-core/runAgent'
import { isAgentApiEnabled } from '@/lib/config/featureFlags'

export async function POST(request) {
  if (!isAgentApiEnabled()) {
    return NextResponse.json(
      { error: 'AI agenti su privremeno nedostupni.', code: 'FEATURE_DISABLED' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      { cookies: { getAll: () => request.cookies.getAll() } }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const isAdmin = await checkAdminStatus(user.id, supabase)
    if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

    const { contentType, action, data } = await request.json()

    const result = await runAgent('contentOps', {
      userId: user.id,
      contentType,
      action,
      data,
      supabase,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('ContentOps error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

async function checkAdminStatus(userId, supabase) {
  const { data } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single()
  return data?.role === 'admin'
}
