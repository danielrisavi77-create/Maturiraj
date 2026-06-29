// app/api/email/unsubscribe/route.js
// Obrađuje odjavu od tjednih emailova

import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/?unsubscribe=invalid', request.url))
  }

  try {
    // Token je base64(userId + ':unsubscribe')
    let decoded
    try { decoded = atob(token) } catch { decoded = '' }
    const [userId, action] = decoded.split(':')

    if (!userId || action !== 'unsubscribe') {
      return NextResponse.redirect(new URL('/?unsubscribe=invalid', request.url))
    }

    const supabase = createAdminClient()

    // Postavi email_reminders = false za ovog korisnika
    const { error } = await supabase
      .from('profiles')
      .update({ email_reminders: false })
      .eq('id', userId)

    if (error) {
      console.error('Unsubscribe error:', error)
      return NextResponse.redirect(new URL('/?unsubscribe=error', request.url))
    }

    return NextResponse.redirect(new URL('/?unsubscribe=success', request.url))

  } catch (e) {
    return NextResponse.redirect(new URL('/?unsubscribe=invalid', request.url))
  }
}