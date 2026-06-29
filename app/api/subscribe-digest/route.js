import { NextResponse } from 'next/server'

/**
 * POST /api/subscribe-digest
 * Accepts { email } and subscribes the parent to the Monday morning digest.
 * TODO: wire to email provider (Resend, Mailchimp, ConvertKit, etc.)
 */
export async function POST(request) {
  try {
    const body = await request.json()
    const email = (body?.email || '').trim().toLowerCase()

    // Basic server-side email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // TODO: call email provider SDK here
    // await resend.contacts.create({ email, audienceId: process.env.DIGEST_AUDIENCE_ID })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
