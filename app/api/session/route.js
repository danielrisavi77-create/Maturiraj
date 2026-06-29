import Stripe from 'stripe'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    return null
  }

  return new Stripe(secretKey)
}

export async function GET(request) {
  const stripe = getStripe()

  if (!stripe) {
    return NextResponse.json(
      { error: 'Nedostaje STRIPE_SECRET_KEY env varijabla' },
      { status: 500 }
    )
  }

  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ error: 'Nema session_id' }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    const plan = session.metadata?.plan || 'pro'

    return NextResponse.json({ plan })
  } catch (error) {
    console.error('Stripe session error:', error)

    return NextResponse.json(
      { error: error?.message || 'Greška pri dohvaćanju sessiona' },
      { status: 500 }
    )
  }
}