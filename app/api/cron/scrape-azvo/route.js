import { NextResponse } from 'next/server'

export async function GET(request) {
  // Vercel cron security — check header
  const authHeader = request.headers.get('authorization')
  // Fail-closed: ako CRON_SECRET nije postavljen, 'Bearer undefined' bi inače prošao
  const cronSecret = process.env.CRON_SECRET
  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Trigger Edge Function
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/scrape-azvo`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ triggeredBy: 'vercel_cron' }),
    }
  )

  return NextResponse.json(await res.json())
}
