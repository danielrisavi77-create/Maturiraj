import { NextResponse } from 'next/server'

// Legacy provisioning used a second metadata and price-mapping contract.
// It is permanently fail-closed; Stripe must target only /api/webhook.
export async function POST() {
  return NextResponse.json(
    {
      error: 'Ovaj webhook endpoint više nije dostupan.',
      code: 'LEGACY_WEBHOOK_DISABLED',
    },
    { status: 410, headers: { 'Cache-Control': 'no-store' } }
  )
}
