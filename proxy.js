// proxy.js  <- ide u ROOT projekta (uz next.config.js)
// (Next.js nova konvencija — zamjenjuje middleware.js. Logika preuzeta iz middleware.js.)

import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import { getEffectiveTier, isPaidTier, isProTier } from '@/lib/billing/getEffectiveTier'

export async function proxy(request) {
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
  const authRequired = ['/plan-ucenja/dashboard', '/game']
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

  // Tier se čita najviše jednom po zahtjevu (isti helper kao useAuth i requirePro).
  let effectiveTier = null
  async function readTier() {
    if (effectiveTier !== null) return effectiveTier
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan_type, pro_expires_at')
      .eq('id', user.id)
      .single()

    // Dev bypass — owner email zaobilazi plan gate
    const devBypass = !!process.env.DEV_BYPASS_EMAIL && user.email === process.env.DEV_BYPASS_EMAIL
    effectiveTier = getEffectiveTier(profile, { devBypass })
    return effectiveTier
  }

  if (isPaidRequired) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/prijava'
      url.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(url)
    }

    if (!isPaidTier(await readTier())) {
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

    if (!isProTier(await readTier())) {
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
