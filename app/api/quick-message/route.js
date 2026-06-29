import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { message, childName } = await request.json()

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ ok: false, error: 'Message is required' }, { status: 400 })
    }

    if (message.trim().length > 280) {
      return NextResponse.json({ ok: false, error: 'Message too long' }, { status: 400 })
    }

    // TODO: Persist to Supabase notifications table
    // await supabase.from('parent_messages').insert({ message: message.trim(), child_name: childName })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
