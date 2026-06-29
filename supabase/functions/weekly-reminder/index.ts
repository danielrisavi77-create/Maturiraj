// supabase/functions/weekly-reminder/index.ts
// Pokreće se jednom tjedno (ponedjeljak, 8:00 CET)
// Deploy: supabase functions deploy weekly-reminder

// @deno-types="npm:@supabase/supabase-js@2"
// @ts-ignore — Deno URL import, not resolvable by tsc
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
// @deno-types="npm:resend@3"
// @ts-ignore — Deno URL import, not resolvable by tsc
import { Resend } from 'https://esm.sh/resend@3'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

const resend = new Resend(Deno.env.get('RESEND_API_KEY')!)

const APP_URL      = Deno.env.get('APP_URL') || 'https://maturiraj.hr'
const FROM_EMAIL   = Deno.env.get('FROM_EMAIL') || 'noreply@maturiraj.hr'
const MATURA_DATE  = new Date('2026-06-01')

function daysUntil(date: Date): number {
  return Math.max(0, Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24)))
}

// Generates a URL-safe token: base64(userId + ':unsubscribe')
// Kept simple so the Next.js route.js can verify it with atob() without Node crypto.
async function generateUnsubToken(userId: string): Promise<string> {
  return btoa(userId + ':unsubscribe')
}

// ── HTML template (inline — Edge Functions ne mogu importati lokalne fajlove) ──
function buildEmailHtml(data: {
  firstName: string
  danaDoMature: number
  napredakPct: number
  completedWeeks: number
  totalWeeks: number
  streak: number
  satiOvogTjedna: number
  needsNudge: boolean
  nextWeek: { predmet: string; tema: string; sati: number; sym: string; color: string } | null
  appUrl: string
  unsubscribeUrl: string
}): string {
  const { firstName, danaDoMature, napredakPct, completedWeeks, totalWeeks, streak, satiOvogTjedna, needsNudge, nextWeek, appUrl, unsubscribeUrl } = data

  const napredakBoja = napredakPct >= 70 ? '#3ecf6e' : napredakPct >= 40 ? '#4b7bff' : '#e9b446'
  const barWidth = Math.max(4, napredakPct)

  const motivacija = needsNudge
    ? `${firstName}, primijetili smo da nisi učio nekoliko dana. Matura je za <strong>${danaDoMature} dana</strong> — svaki sat se računa!`
    : napredakPct >= 70
    ? `Odličan tjedan, ${firstName}! Na ${napredakPct}% plana — nastaviš li ovim tempom, bit ćeš spreman.`
    : napredakPct >= 40
    ? `Dobar napredak, ${firstName}! ${napredakPct}% plana je iza tebe. Još malo pa si u finalnoj ravnini.`
    : `Svaki korak naprijed se računa, ${firstName}. ${napredakPct}% plana završeno — matura je za ${danaDoMature} dana.`

  return `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Tjedni izvještaj — Maturiraj.hr</title>
</head>
<body style="background:#07090f;font-family:Helvetica Neue,Arial,sans-serif;color:#e4edff;padding:24px 16px;margin:0;">
<table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
<table width="100%" style="max-width:560px;" cellpadding="0" cellspacing="0">

<!-- Header -->
<tr><td style="padding-bottom:24px;padding-top:8px;">
  <table width="100%" cellpadding="0" cellspacing="0"><tr>
    <td><span style="font-size:18px;font-weight:900;color:#e4edff;letter-spacing:-0.03em;">● Maturiraj.hr</span></td>
    <td align="right"><span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#6a82a8;">Tjedni izvještaj</span></td>
  </tr></table>
</td></tr>

<!-- Main card -->
<tr><td style="background:linear-gradient(160deg,rgba(255,255,255,0.042),rgba(255,255,255,0.012));border:1px solid rgba(255,255,255,0.08);border-radius:24px;overflow:hidden;">
  <div style="height:3px;background:linear-gradient(90deg,#4b7bff,#7c5cfc,#2dd4bf);"></div>
  <div style="padding:28px;">

    <!-- Badge -->
    <div style="margin-bottom:16px;">
      <span style="display:inline-block;padding:5px 14px;border-radius:999px;background:rgba(248,113,113,0.1);border:1px solid rgba(248,113,113,0.22);font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#f87171;">
        📅 ${danaDoMature} dana do mature
      </span>
    </div>

    <!-- Headline -->
    <h1 style="font-size:26px;font-weight:900;line-height:1.1;letter-spacing:-0.025em;color:#e4edff;margin:0 0 12px;">
      ${needsNudge ? '⏰ Vrijeme je da nastaviš!' : '📊 Tjedni sažetak'}
    </h1>

    <!-- Motivacija -->
    <p style="font-size:14px;color:#6a82a8;line-height:1.75;margin:0 0 24px;">${motivacija}</p>

    <!-- Stats 2x2 -->
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
      <tr>
        <td width="50%" style="padding-right:5px;padding-bottom:10px;">
          <div style="background:rgba(75,123,255,0.08);border:1px solid rgba(75,123,255,0.16);border-radius:16px;padding:14px;">
            <div style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#6a82a8;margin-bottom:7px;">Napredak plana</div>
            <div style="font-size:30px;font-weight:900;color:${napredakBoja};line-height:1;margin-bottom:3px;">${napredakPct}%</div>
            <div style="font-size:11px;color:#6a82a8;">${completedWeeks} / ${totalWeeks} tjedana</div>
            <div style="margin-top:8px;height:4px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:hidden;">
              <div style="height:100%;width:${barWidth}%;background:linear-gradient(90deg,#4b7bff,#7c5cfc);border-radius:99px;"></div>
            </div>
          </div>
        </td>
        <td width="50%" style="padding-left:5px;padding-bottom:10px;">
          <div style="background:rgba(233,180,70,0.08);border:1px solid rgba(233,180,70,0.16);border-radius:16px;padding:14px;">
            <div style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#6a82a8;margin-bottom:7px;">Streak</div>
            <div style="font-size:30px;font-weight:900;color:${streak > 0 ? '#e9b446' : '#6a82a8'};line-height:1;margin-bottom:3px;">${streak > 0 ? streak + ' 🔥' : '—'}</div>
            <div style="font-size:11px;color:#6a82a8;">${streak === 0 ? 'Nema streaka' : 'dana za redom'}</div>
          </div>
        </td>
      </tr>
      <tr>
        <td width="50%" style="padding-right:5px;">
          <div style="background:rgba(45,212,191,0.06);border:1px solid rgba(45,212,191,0.14);border-radius:16px;padding:14px;">
            <div style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#6a82a8;margin-bottom:7px;">Ovaj tjedan</div>
            <div style="font-size:30px;font-weight:900;color:${satiOvogTjedna > 0 ? '#2dd4bf' : '#6a82a8'};line-height:1;margin-bottom:3px;">${satiOvogTjedna > 0 ? satiOvogTjedna + 'h' : '—'}</div>
            <div style="font-size:11px;color:#6a82a8;">sati učenja</div>
          </div>
        </td>
        <td width="50%" style="padding-left:5px;">
          <div style="background:rgba(248,113,113,0.06);border:1px solid rgba(248,113,113,0.14);border-radius:16px;padding:14px;">
            <div style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#6a82a8;margin-bottom:7px;">Do mature</div>
            <div style="font-size:30px;font-weight:900;color:${danaDoMature < 30 ? '#f87171' : danaDoMature < 60 ? '#e9b446' : '#e4edff'};line-height:1;margin-bottom:3px;">${danaDoMature}</div>
            <div style="font-size:11px;color:#6a82a8;">dana · 1. lipnja 2026.</div>
          </div>
        </td>
      </tr>
    </table>

    ${nextWeek ? `
    <!-- Sljedeći tjedan -->
    <div style="margin-bottom:24px;padding:16px;border-radius:16px;background:rgba(255,255,255,0.025);border:1px solid rgba(255,255,255,0.07);">
      <div style="font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;color:#6a82a8;margin-bottom:10px;">📚 Sljedeći tjedan</div>
      <table cellpadding="0" cellspacing="0"><tr>
        <td style="padding-right:12px;">
          <div style="width:42px;height:42px;border-radius:12px;background:${nextWeek.color}18;border:1px solid ${nextWeek.color}30;text-align:center;line-height:42px;font-size:20px;">${nextWeek.sym}</div>
        </td>
        <td>
          <div style="font-size:14px;font-weight:800;color:#e4edff;margin-bottom:3px;">${nextWeek.predmet}</div>
          <div style="font-size:12px;color:#6a82a8;line-height:1.5;margin-bottom:5px;">${nextWeek.tema}</div>
          <span style="font-size:11px;font-weight:700;color:${nextWeek.color};background:${nextWeek.color}18;border:1px solid ${nextWeek.color}28;border-radius:999px;padding:2px 8px;">${nextWeek.sati}h</span>
        </td>
      </tr></table>
    </div>
    ` : ''}

    <!-- CTA -->
    <div style="text-align:center;">
      <a href="${appUrl}/plan-ucenja"
         style="display:inline-block;padding:14px 32px;border-radius:14px;background:linear-gradient(135deg,#4b7bff,#7c5cfc);color:#fff;font-size:15px;font-weight:800;text-decoration:none;box-shadow:0 8px 24px rgba(75,123,255,0.3);">
        Otvori plan učenja →
      </a>
    </div>

  </div>
</td></tr>

<!-- Footer -->
<tr><td style="padding:20px 4px 8px;">
  <p style="font-size:11px;color:#6a82a8;text-align:center;line-height:1.7;margin:0;">
    Maturiraj.hr · AI-powered priprema za državnu maturu<br>
    <a href="${unsubscribeUrl}" style="color:#6a82a8;text-decoration:underline;">Odjavi se od podsjetnika</a>
    &nbsp;·&nbsp;
    <a href="${appUrl}" style="color:#6a82a8;text-decoration:underline;">Otvori aplikaciju</a>
  </p>
</td></tr>

</table></td></tr></table>
</body></html>`
}

// ── Glavni handler ──────────────────────────────────────────────
Deno.serve(async (req: Request) => {
  // Prihvati i POST (cron) i GET (manual trigger za testiranje)
  if (req.method !== 'POST' && req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 })
  }

  const danaDoMature = daysUntil(MATURA_DATE)
  const now          = new Date()
  const weekAgo      = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000)
  const threeDaysAgo = new Date(now.getTime() - 3 * 24 * 60 * 60 * 1000)

  // 1. Dohvati sve aktivne korisnike s planom
  const { data: users, error: usersError } = await supabase
    .from('profiles')
    .select('id, email, full_name')
    .not('email', 'is', null)
    .not('plan_type', 'is', null)
    .eq('email_reminders', true)   // skip users who unsubscribed

  if (usersError) {
    console.error('Error fetching users:', usersError)
    return new Response(JSON.stringify({ error: usersError.message }), { status: 500 })
  }

  const results = { sent: 0, skipped: 0, errors: 0 }

  for (const user of (users ?? [])) {
      if (!user.email) { results.skipped++; continue }
    try {
      // 2. Dohvati aktivni plan
      const { data: plan } = await supabase
        .from('study_plans')
        .select('id, subjects, hours_per_week')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .single()

      if (!plan) { results.skipped++; continue }

      // 3. Dohvati tjedne
      const { data: weeks } = await supabase
        .from('plan_weeks')
        .select('id, completed, week_num, subject_name, topic, hours, subject_id')
        .eq('plan_id', plan.id)
        .order('week_num', { ascending: true })

      if (!weeks?.length) { results.skipped++; continue }

      // 4. Izračunaj stats
      const totalWeeks     = weeks.length
      const completedWeeks = weeks.filter((w: { completed: boolean }) => w.completed).length
      const napredakPct    = Math.round((completedWeeks / totalWeeks) * 100)

      // 5. Aktivnost ovaj tjedan (activity_events, duration_s u sekundama)
      const { data: weekActivity } = await supabase
        .from('activity_events')
        .select('duration_s')
        .eq('user_id', user.id)
        .gte('visited_at', weekAgo.toISOString())

      const satiOvogTjedna = Math.round(
        (weekActivity?.reduce((s: number, e: { duration_s: number }) => s + Number(e.duration_s), 0) || 0) / 3600
      )

      // 6. Provjeri nudge (zadnja 3 dana)
      const { data: recentActivity } = await supabase
        .from('activity_events')
        .select('id')
        .eq('user_id', user.id)
        .gte('visited_at', threeDaysAgo.toISOString())
        .limit(1)

      const needsNudge = !recentActivity?.length && completedWeeks > 0

      // Izračunaj streak (zadnjih 60 dana, počevši od jučer)
      const { data: streakData } = await supabase
        .from('activity_events')
        .select('visited_at')
        .eq('user_id', user.id)
        .gte('visited_at', new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000).toISOString())

      const streakDates = new Set(
        streakData?.map((e: { visited_at: string }) => new Date(e.visited_at).toISOString().split('T')[0]) || []
      )
      let streak = 0
      const d    = new Date()
      d.setDate(d.getDate() - 1)  // počni od jučer — danas možda nije logiran
      while (streakDates.has(d.toISOString().split('T')[0])) {
        streak++
        d.setDate(d.getDate() - 1)
      }

      // 7. Sljedeći nezavršeni tjedan
      const nextWeekData = weeks.find((w: { completed: boolean }) => !w.completed)
      const subjects     = plan.subjects as any[]
      const subjectInfo  = subjects?.find((s: any) => s.id === nextWeekData?.subject_id)

      const nextWeek = nextWeekData ? {
        predmet: nextWeekData.subject_name,
        tema:    nextWeekData.topic,
        sati:    nextWeekData.hours,
        sym:     subjectInfo?.sym || '📚',
        color:   subjectInfo?.color || '#4b7bff',
      } : null

      // 8. Generiraj unsubscribe URL — token je base64(userId:unsubscribe)
      const unsubToken     = await generateUnsubToken(user.id)
      const unsubscribeUrl = `${APP_URL}/api/email/unsubscribe?token=${encodeURIComponent(unsubToken)}`

      // 9. Pošalji email
      const firstName = user.full_name?.split(' ')[0] || 'Maturante'

      const html = buildEmailHtml({
        firstName,
        danaDoMature,
        napredakPct,
        completedWeeks,
        totalWeeks,
        streak,
        satiOvogTjedna,
        needsNudge,
        nextWeek,
        appUrl: APP_URL,
        unsubscribeUrl,
      })

      const subject = needsNudge
        ? `⏰ ${firstName}, matura je za ${danaDoMature} dana — nastavimo!`
        : `📊 Tjedni sažetak — ${napredakPct}% plana završeno`

      const { error: emailError } = await resend.emails.send({
        from:    FROM_EMAIL,
        to:      user.email,
        subject,
        html,
        text: `Maturiraj.hr — Tjedni sažetak\n\nNapredak: ${napredakPct}% (${completedWeeks}/${totalWeeks} tjedana)\nStreak: ${streak} dana\nDo mature: ${danaDoMature} dana\n\nOtvori plan učenja: ${APP_URL}/plan-ucenja`,
      })

      if (emailError) {
        console.error(`Email error for ${user.email}:`, emailError)
        results.errors++
      } else {
        results.sent++
      }

      // Kratka pauza između emailova da ne preopteretimo Resend
      await new Promise(resolve => setTimeout(resolve, 100))

    } catch (err) {
      console.error(`Error processing user ${user.id}:`, err)
      results.errors++
    }
  }

  console.log('Weekly reminder results:', results)
  return new Response(JSON.stringify({ success: true, ...results }), {
    headers: { 'Content-Type': 'application/json' },
  })
})