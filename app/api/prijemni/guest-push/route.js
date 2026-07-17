import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getGuestSid } from '@/lib/prijemni/guestSessionServer'

// Guest (nelogirani) push pretplate. session_id se veže iz httpOnly cookieja.
// Autentificirani korisnici NE koriste ovu rutu (idu preko RLS-a s user_id).

export async function POST(request) {
  const sid = await getGuestSid({ create: true })
  const b = await request.json().catch(() => ({}))
  if (!b.endpoint || !b.p256dh || !b.auth_key) {
    return NextResponse.json({ error: 'Invalid subscription' }, { status: 400 })
  }
  const db = createAdminClient()
  const { error } = await db.from('push_subscriptions').upsert({
    session_id: sid,
    endpoint: b.endpoint,
    p256dh: b.p256dh,
    auth_key: b.auth_key,
    user_agent: b.user_agent || null,
    platform: b.platform || null,
    studij_ids: Array.isArray(b.studij_ids) ? b.studij_ids : [],
    active: true,
  }, { onConflict: 'endpoint' })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function PATCH(request) {
  const sid = await getGuestSid()
  const b = await request.json().catch(() => ({}))
  if (!sid || !b.endpoint) return NextResponse.json({ ok: false }, { status: 400 })
  const db = createAdminClient()
  const { error } = await db.from('push_subscriptions')
    .update({ studij_ids: Array.isArray(b.studij_ids) ? b.studij_ids : [], updated_at: new Date().toISOString() })
    .eq('endpoint', b.endpoint)
    .eq('session_id', sid)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

export async function DELETE(request) {
  const sid = await getGuestSid()
  const b = await request.json().catch(() => ({}))
  if (!sid || !b.endpoint) return NextResponse.json({ ok: false }, { status: 400 })
  const db = createAdminClient()
  const { error } = await db.from('push_subscriptions')
    .delete()
    .eq('endpoint', b.endpoint)
    .eq('session_id', sid)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
