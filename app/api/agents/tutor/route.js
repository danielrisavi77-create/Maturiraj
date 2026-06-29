// app/api/agents/tutor/route.js
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

    const { question, subject, context, conversationId } = await request.json()

    const result = await runAgent('tutor', {
      userId: user.id,
      question,
      subject,
      context,
      conversationId,
      supabase,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error('Tutor error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
