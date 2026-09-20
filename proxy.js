// proxy.js  <- ide u ROOT projekta (uz next.config.js)
// Next.js 16 — zamjenjuje middleware.js.

import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

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

  const { data: { user } } = await supabase.auth.getUser()
  const pathname = request.nextUrl.pathname

  const authRequired = ['/dashboard', '/plan-ucenja/dashboard', '/game']
  if (authRequired.some(route => pathname.startsWith(route)) && !user) {
    const url = request.nextUrl.clone()
    url.pathname = '/prijava'
    url.searchParams.set('redirect', pathname)
    return NextResponse.redirect(url)
  }

  const paidRequired = ['/discere', '/engleski-simulator']
  if (paidRequired.some(route => pathname.startsWith(route))) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/prijava'
      url.searchParams.set('redirect', pathname)
      return NextResponse.redirect(url)
    }

    const { data: profile } = await supabase
      .from('profiles')
      .select('plan_type, pro_expires_at')
      .eq('id', user.id)
      .single()

    const isDevBypass = process.env.DEV_BYPASS_EMAIL && user.email === process.env.DEV_BYPASS_EMAIL
    const hasPaid =
      isDevBypass ||
      ((profile?.plan_type === 'pro' || profile?.plan_type === 'starter') &&
      (!profile?.pro_expires_at || new Date(profile.pro_expires_at) > new Date()))

    if (!hasPaid) {
      const url = request.nextUrl.clone()
      url.pathname = '/pro'
      url.searchParams.set('from', pathname.startsWith('/engleski-simulator') ? 'engleski' : 'discere')
      return NextResponse.redirect(url)
    }
  }

  const proRoutes = ['/plan-ucenja/pro', '/simulacije', '/ai-profesor']
  if (proRoutes.some(route => pathname.startsWith(route))) {
    if (!user) {
      const url = request.nextUrl.clone()
      url.pathname = '/prijava'
      url.searchParams.set('redirect', pathname)
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

  const isRoditeljiAppRoute =
    pathname.startsWith('/roditelji/') && pathname !== '/roditelji'
  if (isRoditeljiAppRoute) {
    const isAdmin = process.env.DEV_BYPASS_EMAIL && user?.email === process.env.DEV_BYPASS_EMAIL
    if (!isAdmin) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }
  }

  if (pathname.startsWith('/admin-pragovi') && !user) {
    return NextResponse.redirect(new URL('/prijava', request.url))
  }

  const authRoutes = ['/prijava', '/registracija']
  if (authRoutes.includes(pathname) && user) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|auth/callback|api/).*)',
  ],
}
