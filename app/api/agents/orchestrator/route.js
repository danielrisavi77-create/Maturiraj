// app/api/agents/orchestrator/route.js
import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { orchestrator } from '@/lib/agents/orchestrator'

export async function POST(request) {
  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      { cookies: { getAll: () => request.cookies.getAll() } }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { input, context } = await request.json()

    const result = await orchestrator({
      input,
      userId: user.id,
      context,
      supabase,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Orchestrator error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
