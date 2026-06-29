// app/api/agents/mentor/route.js
import { createServerClient } from '@supabase/ssr'
import { NextRequest, NextResponse } from 'next/server'
import { runAgent } from '@/lib/agent-core/runAgent'

export async function POST(request) {
  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      { cookies: { getAll: () => request.cookies.getAll() } }
    )

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { dayOfWeek, currentProgress, mood, challenges } = await request.json()

    const result = await runAgent('mentor', {
      userId: user.id,
      dayOfWeek,
      currentProgress,
      mood,
      challenges,
      supabase,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Mentor error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
