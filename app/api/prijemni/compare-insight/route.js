import Anthropic from '@anthropic-ai/sdk'
import { NextResponse } from 'next/server'
import { requirePro } from '@/lib/billing/requirePro'
import { createClient } from '@/lib/supabase/server'
import { reserveUsage, completeUsage, markUsageUncertain, releaseUsage } from '@/lib/ai-usage/ledger'
import { isAiEndpointsEnabled } from '@/lib/config/featureFlags'

// POST /api/prijemni/compare-insight
// ─────────────────────────────────────────────────────────────────────────────
// Pro-only. Generates a short AI insight paragraph comparing 2–4 studiji.
//
// Request body:
//   {
//     studiji: Array<{ ime, fakultet, prag_2025, trajanje, predmeti, opis }>
//     scores: object | null
//   }
//
// Response: { insight: string }

let anthropic

function getAnthropic() {
  if (!anthropic) {
    anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  }
  return anthropic
}

const SYSTEM_PROMPT =
  'Ti si nepristrani savjetnik za upis na fakultet u Hrvatskoj. ' +
  'Na temelju podataka o studijima koje korisnik uspoređuje daj kratak, konkretan uvid — ' +
  '2-3 rečenice. Budi direktan i koristan. ' +
  'Ako korisnik ima bodove, uzmi ih u obzir. ' +
  'Odgovaraj ISKLJUČIVO na temu usporedbe navedenih studija.'

const SAFE_SCORE_KEYS = new Set([
  'matematika', 'matematika_a', 'matematika_b',
  'hrvatski_jezik', 'engleski_jezik', 'fizika', 'kemija',
  'biologija', 'informatika', 'geografija', 'povijest',
  'filozofija', 'psihologija', 'sociologija',
  'likovni', 'glazbeni', 'tjelesni',
  'strani_jezik_1', 'strani_jezik_2',
  'ukupno_bodova', 'razredna_ocjena',
])

export async function POST(req) {
  if (!isAiEndpointsEnabled()) {
    return NextResponse.json(
      { error: 'AI je privremeno nedostupan.', code: 'FEATURE_DISABLED' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  const deny = await requirePro(req, { source: 'compare-insight' })
  if (deny) return deny

  const body = await req.json().catch(() => null)
  if (!body) return NextResponse.json({ error: 'Invalid body.' }, { status: 400 })

  const { studiji, scores } = body

  if (!Array.isArray(studiji) || studiji.length < 2 || studiji.length > 4) {
    return NextResponse.json({ error: 'Potrebna su 2–4 studija.' }, { status: 400 })
  }

  // Build sanitised study lines — data comes from our DB but keep it tight
  const studijiLines = studiji.map((s, i) => {
    const ime      = String(s.ime      ?? '').slice(0, 80)
    const fakultet = String(s.fakultet ?? '').slice(0, 80)
    const prag     = Number.isFinite(Number(s.prag_2025)) ? Number(s.prag_2025) : null
    const trajanje = String(s.trajanje ?? '').slice(0, 20)
    const predmeti = Array.isArray(s.predmeti)
      ? s.predmeti.map(p => String(p).slice(0, 40)).slice(0, 6).join(', ')
      : ''
    return (
      `${i + 1}. ${ime} — ${fakultet}` +
      (prag     ? `, prag 2025: ${prag}`              : '') +
      (trajanje ? `, trajanje: ${trajanje}`            : '') +
      (predmeti ? `, predmeti: ${predmeti}`            : '')
    )
  }).join('\n')

  // Sanitise scores — only allow known keys, values must be numbers
  let scoresLine = 'Bodovi nisu uneseni.'
  if (scores && typeof scores === 'object') {
    const parts = Object.entries(scores)
      .filter(([k, v]) => SAFE_SCORE_KEYS.has(k) && Number.isFinite(Number(v)))
      .map(([k, v]) => `${k}: ${Number(v)}`)
      .slice(0, 20)
    if (parts.length) scoresLine = `Moji bodovi: ${parts.join(', ')}.`
  }

  const userMessage =
    `Uspoređujem ${studiji.length} studija:\n${studijiLines}\n\n${scoresLine}\n\n` +
    'Napiši 2-3 rečenice: koji studij mi najviše odgovara i zašto, ili koji je ključni kriterij koji bi trebao odlučiti moj izbor.'

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const model = 'claude-haiku-4-5'
  let requestId
  try {
    ({ requestId } = await reserveUsage({ userId: user.id, feature: 'compare-insight', tier: 'pro', model,
      estimatedInputTokens: new TextEncoder().encode(SYSTEM_PROMPT + userMessage).length + 2048, maxOutputTokens: 220 }))
    const msg = await getAnthropic().messages.create({
    model,
    max_tokens: 220,
    system:     SYSTEM_PROMPT,
    messages:   [{ role: 'user', content: userMessage }],
    })
    await completeUsage({ requestId, model, usage: msg.usage })

    const insight = msg.content?.[0]?.text?.trim() ?? ''
    if (!insight) return NextResponse.json({ error: 'AI nije vratio odgovor.' }, { status: 502 })

    return NextResponse.json({ insight })
  } catch (error) {
    if (requestId && [400, 401, 403, 429].includes(error?.status)) await releaseUsage({ requestId }).catch(() => {})
    else if (requestId) await markUsageUncertain({ requestId }).catch(() => {})
    if (error?.code === 'AI_BUDGET_EXCEEDED') return NextResponse.json({ error: 'AI budget exceeded', code: error.code }, { status: 429 })
    return NextResponse.json({ error: 'AI ili evidencija potrošnje nije dostupna.' }, { status: 503 })
  }
}
