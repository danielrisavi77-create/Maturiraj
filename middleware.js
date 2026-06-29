// middleware.js  <- ide u ROOT projekta (uz next.config.js)

import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          )
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // VAZNO: ne pisati kod između createServerClient i getUser()
  const { data: { user } } = await supabase.auth.getUser()

  // ── Rute koje zahtijevaju samo prijavu (besplatni i placeni) ───
  const authRequired = ['/plan-ucenja/dashboard']
  const isAuthRequired = authRequired.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (isAuthRequired && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/prijava'
    url.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // ── Rute koje zahtijevaju placeni plan (starter ili pro — Discere) ─
  const paidRequired = ['/discere']
  const isPaidRequired = paidRequired.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (isPaidRequired) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/prijava'
      url.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('plan_type, pro_expires_at')
      .eq('id', user.id)
      .single()

    // Dev bypass — owner email zaobilazi plan gate
    const isDevBypass = process.env.DEV_BYPASS_EMAIL && user.email === process.env.DEV_BYPASS_EMAIL

    const hasPaid =
      isDevBypass ||
      ((profile?.plan_type === 'pro' || profile?.plan_type === 'starter') &&
      (!profile?.pro_expires_at || new Date(profile.pro_expires_at) > new Date()))

    if (!hasPaid) {
      const url = request.nextUrl.clone()
      url.pathname = '/pro'
      url.searchParams.set('from', 'discere')
      return NextResponse.redirect(url)
    }
  }

  // ── Rute samo za PRO korisnike ─────────────────────────────────
  const proRoutes = ['/plan-ucenja/pro', '/simulacije', '/ai-profesor']
  const isProRoute = proRoutes.some(route =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (isProRoute) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/prijava'
      url.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('plan_type, pro_expires_at')
      .eq('id', user.id)
      .single()

    const isPro =
      profile?.plan_type === 'pro' &&
      (!profile?.pro_expires_at || new Date(profile.pro_expires_at) > new Date())

    if (!isPro) {
      const url = request.nextUrl.clone()
      url.pathname = '/pro'
      return NextResponse.redirect(url)
    }
  }

  // ── Roditeljski portal — samo admin (DEV_BYPASS_EMAIL) za sada ──
  // TODO: otvoriti za role=parent korisnike kad bude spreman za produkciju
  const isRoditeljiAppRoute =
    request.nextUrl.pathname.startsWith('/roditelji/') &&
    request.nextUrl.pathname !== '/roditelji'
  if (isRoditeljiAppRoute) {
    const isAdmin = process.env.DEV_BYPASS_EMAIL && user?.email === process.env.DEV_BYPASS_EMAIL
    if (!isAdmin) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  // ── Admin pragovi — zahtijeva prijavu ──────────────────────────
  if (request.nextUrl.pathname.startsWith('/admin-pragovi') && !user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // ── Auth rute — prijavljeni korisnici preusmjeri na početnu ─
  const authRoutes = ['/prijava', '/registracija']
  if (authRoutes.includes(request.nextUrl.pathname) && user) {
    const url = request.nextUrl.clone()
    url.pathname = '/'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|auth/callback|api/).*)',
  ],
}
