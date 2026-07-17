import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createServerClient } from '@supabase/ssr'
import { createAdminClient } from '@/lib/supabase/admin'
import { getGuestSid } from '@/lib/prijemni/guestSessionServer'

// Promocija guest rezultata → prijavljeni korisnik. Poziva se nakon logina.
// user se izvodi iz auth sesije (cookie), guest red iz httpOnly guest cookieja —
// oboje server-side, pa nema forge vektora.
export async function POST() {
  const cookieStore = await cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() { return cookieStore.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Nisi prijavljen' }, { status: 401 })

  const sid = await getGuestSid()
  if (!sid) return NextResponse.json({ ok: true, migrated: false })

  const db = createAdminClient()
  const { data: guest } = await db
    .from('user_prijemni_scores')
    .select('id')
    .eq('session_id', sid)
    .is('user_id', null)
    .maybeSingle()
  if (!guest) return NextResponse.json({ ok: true, migrated: false })

  const { data: existingUser } = await db
    .from('user_prijemni_scores')
    .select('id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (existingUser) {
    // Korisnik već ima rezultat → samo obriši guest red
    await db.from('user_prijemni_scores').delete().eq('id', guest.id)
  } else {
    // Promote guest → user
    await db.from('user_prijemni_scores')
      .update({ user_id: user.id, session_id: null })
      .eq('id', guest.id)
  }
  return NextResponse.json({ ok: true, migrated: true })
}
