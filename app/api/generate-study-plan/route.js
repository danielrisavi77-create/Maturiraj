import { NextResponse } from 'next/server'
import { requirePro } from '@/lib/billing/requirePro'
import { isAiEndpointsEnabled } from '@/lib/config/featureFlags'
import { createClient } from '@/lib/supabase/server'
import { reserveUsage, completeUsage, markUsageUncertain, releaseUsage } from '@/lib/ai-usage/ledger'

export async function POST(req) {
  if (!isAiEndpointsEnabled()) {
    return NextResponse.json(
      { error: 'AI je privremeno nedostupan.', code: 'FEATURE_DISABLED' },
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  try {
    // Server-side entitlement gate — personalizirani plan je Pro značajka (vidi /uspjeh
    // pricing). Prije je bilo dovoljno samo biti prijavljen, pa je free korisnik mogao
    // trošiti Anthropic ključ na Pro feature bez entitlementa.
    const deny = await requirePro(req, { source: 'study-plan' })
    if (deny) return deny

    const { prompt } = await req.json()
    if (typeof prompt !== 'string' || !prompt.trim() || prompt.length > 4000) {
      return NextResponse.json({ error: 'Invalid prompt' }, { status: 400 })
    }
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const model = 'claude-sonnet-4-6'
    const { requestId } = await reserveUsage({ userId: user.id, feature: 'study-plan', tier: 'pro', model,
      estimatedInputTokens: new TextEncoder().encode(prompt).length + 2048, maxOutputTokens: 500 })

    let res
    try { res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model,
        max_tokens: 500,
        messages: [{ role: 'user', content: prompt }],
      }),
    }) } catch (error) {
      await markUsageUncertain({ requestId }).catch(() => {})
      throw error
    }

    if (!res.ok) {
      if ([400, 401, 403, 429].includes(res.status)) await releaseUsage({ requestId })
      else await markUsageUncertain({ requestId })
      // Ne prosljeđuj sirovu Anthropic grešku klijentu (curenje internih detalja)
      console.error('[generate-study-plan] Anthropic error:', res.status, await res.text())
      return NextResponse.json({ error: 'Greška pri generiranju plana.' }, { status: 502 })
    }

    let data
    try {
      data = await res.json()
      await completeUsage({ requestId, model, usage: data.usage })
    } catch (error) {
      await markUsageUncertain({ requestId }).catch(() => {})
      throw error
    }
    const text = data.content?.[0]?.text || ''
    const clean = text.replace(/```json|```/g, '').trim()
    const plan = JSON.parse(clean)

    return NextResponse.json({ plan })
  } catch (error) {
    if (error?.code === 'AI_BUDGET_EXCEEDED') {
      return NextResponse.json({ error: 'AI budget exceeded', code: error.code }, { status: 429 })
    }
    return NextResponse.json(
      { error: 'AI ili evidencija potrošnje nije dostupna.' },
      { status: 503 }
    )
  }
}
