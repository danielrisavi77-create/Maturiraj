import { NextResponse } from 'next/server'

// Legacy checkout accepted a client-controlled Stripe price ID. It remains
// permanently fail-closed; only the canonical /api/checkout route may be
// enabled by the billing feature flags.
export async function POST() {
  return NextResponse.json(
    {
      error: 'Ovaj checkout endpoint više nije dostupan.',
      code: 'LEGACY_CHECKOUT_DISABLED',
    },
    { status: 410, headers: { 'Cache-Control': 'no-store' } }
  )
}
