// app/auth/callback/route.js
// Ovaj endpoint obrađuje OAuth redirect i magic link potvrde

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code     = searchParams.get('code')
  const next     = searchParams.get('next') ?? '/dashboard'
  const redirectRaw = searchParams.get('redirect') ?? '/dashboard'
  // Sigurnost: dozvoli samo relativne, same-origin putanje (spriječi open redirect)
  const redirect = (redirectRaw.startsWith('/') && !redirectRaw.startsWith('//') && !redirectRaw.startsWith('/\\'))
    ? redirectRaw
    : '/dashboard'

  if (code) {
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() { return cookieStore.getAll() },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          },
        },
      }
    )

    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      // Sigurnost: ne gradi odredište iz spoofabilnog `x-forwarded-host` headera.
      // U produkciji koristi konfiguriranu kanonsku domenu; lokalno request origin.
      const isLocalEnv = process.env.NODE_ENV === 'development'
      const base = isLocalEnv ? origin : (process.env.NEXT_PUBLIC_URL || origin)
      return NextResponse.redirect(`${base}${redirect}`)
    }
  }

  // Greška — na login s porukom
  return NextResponse.redirect(`${origin}/prijava?error=auth_callback_failed`)
}