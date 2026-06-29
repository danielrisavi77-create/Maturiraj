import { NextResponse } from 'next/server'
import { runScraper } from '@/scripts/scraper/run'

// Secret shared between Vercel cron and this route.
// Set CRON_SECRET in Vercel environment variables.
const CRON_SECRET = process.env.CRON_SECRET

export const maxDuration = 300 // 5 min (Vercel Pro max for cron routes)

export async function GET(request) {
  // Verify cron secret — Vercel passes it as Authorization: Bearer <secret>
  const auth = request.headers.get('authorization')
  if (!CRON_SECRET || auth !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const source = searchParams.get('source') ?? 'azvo_upisi'

  try {
    const result = await runScraper(source, 'cron')
    return NextResponse.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[cron/scraper] Fatal:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
