// app/api/agents/essay/route.js
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

    const { essayText, topic, feedbackType } = await request.json()

    const result = await runAgent('essay', {
      userId: user.id,
      essayText,
      topic,
      feedbackType,
      supabase,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Essay error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
