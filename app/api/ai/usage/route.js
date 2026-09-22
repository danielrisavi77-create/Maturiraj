import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { requirePro } from '@/lib/billing/requirePro'
import { getUsageStats } from '@/lib/ai-usage/ledger'
import { isAiEndpointsEnabled } from '@/lib/config/featureFlags'

export async function GET(request) {
  if (!isAiEndpointsEnabled()) return NextResponse.json({ error: 'AI unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store' } })
  const denied = await requirePro(request, { source: 'ai-usage' })
  if (denied) return denied
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401, headers: { 'Cache-Control': 'no-store' } })
  try {
    const stats = await getUsageStats({ userId: user.id, tier: 'pro' })
    return NextResponse.json(stats, { headers: { 'Cache-Control': 'no-store' } })
  } catch {
    return NextResponse.json({ error: 'AI usage unavailable' }, { status: 503, headers: { 'Cache-Control': 'no-store' } })
  }
}
