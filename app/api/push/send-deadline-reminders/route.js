import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import webpush from 'web-push'

let cachedSupabase = null

function getSupabaseClient() {
  if (cachedSupabase) return cachedSupabase

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error('Missing Supabase env vars: SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY.')
  }

  cachedSupabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  })

  return cachedSupabase
}

const vapidPublicKey = process.env.WEB_PUSH_PUBLIC_KEY || process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
const vapidPrivateKey = process.env.WEB_PUSH_PRIVATE_KEY || process.env.VAPID_PRIVATE_KEY
const vapidSubject = process.env.WEB_PUSH_SUBJECT || 'mailto:hello@maturiraj.hr'

let isWebPushConfigured = false

function ensureWebPushConfigured() {
  if (isWebPushConfigured) return true
  if (!vapidPublicKey || !vapidPrivateKey) return false

  webpush.setVapidDetails(vapidSubject, vapidPublicKey, vapidPrivateKey)
  isWebPushConfigured = true
  return true
}

export async function GET(request) {
  // Cron auth
  if (request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let supabase
  try {
    supabase = getSupabaseClient()
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return NextResponse.json({
      sent: 0,
      failed: 0,
      skipped: 0,
      reason: message,
    })
  }

  if (!ensureWebPushConfigured()) {
    return NextResponse.json({
      sent: 0,
      failed: 0,
      skipped: 0,
      reason: 'Web push is not configured (missing VAPID keys).',
    })
  }

  const now = new Date()
  const daysAhead = [7, 1]  // Pošalji 7 i 1 dan prije
  const tolerance = 12 * 3600 * 1000  // 12h tolerancija da se poklopi s cron intervalom

  // 1. Fetch active subscriptions s njihovim studij_ids
  const { data: subs } = await supabase
    .from('push_subscriptions')
    .select('*')
    .eq('active', true)

  if (!subs?.length) return NextResponse.json({ sent: 0, reason: 'No subs' })

  // 2. Fetch relevant studiji (sve koje imaju prijava_do_iso ili ispit_iso u skorije dane)
  const { data: studiji } = await supabase
    .from('studiji_view')
    .select('id, naziv, fak_short, sym, color, prijava_do_iso, ispit_iso, prijava_do, ispit')

  const results = { sent: 0, failed: 0, skipped: 0, errors: [] }

  for (const sub of subs) {
    for (const studijId of sub.studij_ids || []) {
      const studij = studiji.find(s => s.id === studijId)
      if (!studij) continue

      // Provjeri oba deadline-a
      for (const kind of ['prijava', 'ispit']) {
        const isoField = kind === 'prijava' ? 'prijava_do_iso' : 'ispit_iso'
        const labelField = kind === 'prijava' ? 'prijava_do' : 'ispit'
        const iso = studij[isoField]
        if (!iso) continue

        const deadline = new Date(iso)
        const msUntil = deadline.getTime() - now.getTime()
        const daysUntil = Math.round(msUntil / 86400000)

        // Matchamo li jedan od target days-ova s tolerancijom?
        const shouldSend = daysAhead.some(d => {
          const targetMs = d * 86400000
          return Math.abs(msUntil - targetMs) < tolerance
        })

        if (!shouldSend) continue

        // Idempotency: provjeri smo li već poslali za ovaj studij+kind+day mark
        // (jednostavna provjera: last_sent_at iz istog day windowa)
        if (sub.last_sent_at) {
          const lastSent = new Date(sub.last_sent_at)
          if ((now.getTime() - lastSent.getTime()) < 20 * 3600 * 1000) {
            results.skipped++
            continue
          }
        }

        const level = daysUntil <= 1 ? 'critical' : 'urgent'
        const title = daysUntil <= 1
          ? `\u23f0 SUTRA: ${kind === 'prijava' ? 'prijava' : 'ispit'} za ${studij.fak_short}`
          : `\ud83d\udcc5 ${studij.fak_short} \u2014 ${kind === 'prijava' ? 'prijava' : 'ispit'} za ${daysUntil} dana`
        const body = kind === 'prijava'
          ? `${studij.naziv}: zatvara se prijava ${studij[labelField]}.`
          : `${studij.naziv}: ispit je ${studij[labelField]}.`

        const payload = {
          title, body,
          level,
          tag: `deadline-${studij.id}-${kind}`,
          url: `/prijemni?studij=${studij.id}&tab=datumi`,
          studij_id: studij.id,
        }

        try {
          await webpush.sendNotification(
            {
              endpoint: sub.endpoint,
              keys: { p256dh: sub.p256dh, auth: sub.auth_key },
            },
            JSON.stringify(payload)
          )

          await supabase
            .from('push_subscriptions')
            .update({ last_sent_at: now.toISOString() })
            .eq('id', sub.id)

          results.sent++
        } catch (err) {
          results.failed++
          results.errors.push({ endpoint: sub.endpoint.slice(-20), error: err.message })

          // Deaktiviraj expired subscription-e
          if (err.statusCode === 404 || err.statusCode === 410) {
            await supabase
              .from('push_subscriptions')
              .update({ active: false })
              .eq('id', sub.id)
          }
        }
      }
    }
  }

  return NextResponse.json(results)
}
