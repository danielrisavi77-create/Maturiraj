import { NextResponse } from 'next/server'
import { requirePro } from '@/lib/billing/requirePro'
import { isAiEndpointsEnabled } from '@/lib/config/featureFlags'

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

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 500,
        messages: [{ role: 'user', content: prompt }],
      }),
    })

    if (!res.ok) {
      // Ne prosljeđuj sirovu Anthropic grešku klijentu (curenje internih detalja)
      console.error('[generate-study-plan] Anthropic error:', res.status, await res.text())
      return NextResponse.json({ error: 'Greška pri generiranju plana.' }, { status: 502 })
    }

    const data = await res.json()
    const text = data.content?.[0]?.text || ''
    const clean = text.replace(/```json|```/g, '').trim()
    const plan = JSON.parse(clean)

    return NextResponse.json({ plan })
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Greška pri generiranju plana.' },
      { status: 500 }
    )
  }
}
