import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { getGuestSid } from '@/lib/prijemni/guestSessionServer'

// Guest (nelogirani) perzistencija prijemni rezultata. session_id se ISKLJUČIVO
// veže iz httpOnly cookieja (nikad iz body-ja), pa gost ne može čitati/mijenjati
// tuđe redove. Svi upiti su scoped na `session_id = sid AND user_id IS NULL`.
// Autentificirani korisnici NE koriste ovu rutu (idu direktno preko RLS-a).

// Whitelista stupaca koje gost smije pisati (spriječi injection user_id-a itd.)
const ALLOWED = [
  'prosjek_r1', 'prosjek_r2', 'prosjek_r3', 'prosjek_r4',
  'mat_a_pct', 'mat_b_pct', 'hrv_a_pct', 'hrv_b_pct', 'eng_a_pct', 'eng_b_pct',
  'izborni', 'posebne_provjere',
]

export async function GET() {
  const sid = await getGuestSid()
  if (!sid) return NextResponse.json({ data: null })
  const db = createAdminClient()
  const { data, error } = await db
    .from('user_prijemni_scores')
    .select('*')
    .eq('session_id', sid)
    .is('user_id', null)
    .maybeSingle()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ data: data ?? null })
}

export async function POST(request) {
  const sid = await getGuestSid({ create: true })
  const body = await request.json().catch(() => ({}))
  const payload = { session_id: sid, updated_at: new Date().toISOString() }
  for (const k of ALLOWED) if (k in body) payload[k] = body[k]

  const db = createAdminClient()
  const { data: existing } = await db
    .from('user_prijemni_scores')
    .select('id')
    .eq('session_id', sid)
    .is('user_id', null)
    .maybeSingle()

  const res = existing
    ? await db.from('user_prijemni_scores').update(payload).eq('id', existing.id).select().single()
    : await db.from('user_prijemni_scores').insert(payload).select().single()

  if (res.error) return NextResponse.json({ error: res.error.message }, { status: 500 })
  return NextResponse.json({ data: res.data })
}

export async function DELETE() {
  const sid = await getGuestSid()
  if (!sid) return NextResponse.json({ ok: true })
  const db = createAdminClient()
  const { error } = await db
    .from('user_prijemni_scores')
    .delete()
    .eq('session_id', sid)
    .is('user_id', null)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
