import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { isParentLinkingV2Enabled } from '@/lib/config/featureFlags'

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DECISIONS = new Set(['accept', 'decline'])

function parentV2Disabled() {
  return NextResponse.json(
    { error: 'Roditeljsko povezivanje je privremeno nedostupno.', code: 'FEATURE_DISABLED' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  )
}

// POST /api/parent/consent — the authenticated child makes a one-time decision.
export async function POST(request) {
  if (!isParentLinkingV2Enabled()) return parentV2Disabled()

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Neispravan zahtjev.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Neispravni podaci odluke.' }, { status: 400 })
  }
  if (Object.keys(body).some(key => !['invitation_id', 'decision'].includes(key))) {
    return NextResponse.json({ error: 'Neispravni podaci odluke.' }, { status: 400 })
  }

  const invitationId = typeof body.invitation_id === 'string' ? body.invitation_id.trim() : ''
  const decision = typeof body.decision === 'string' ? body.decision.trim().toLowerCase() : ''
  if (!UUID_PATTERN.test(invitationId) || !DECISIONS.has(decision)) {
    return NextResponse.json({ error: 'Neispravni podaci odluke.' }, { status: 400 })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const childEmail = user.email?.trim().toLowerCase() || ''
  if (!EMAIL_PATTERN.test(childEmail)) {
    return NextResponse.json({ error: 'Potvrđena email adresa je obavezna.' }, { status: 403 })
  }

  const { data, error } = await supabase.rpc('respond_to_parent_invitation_v2', {
    p_invitation_id: invitationId,
    p_decision: decision,
  })

  // Do not reveal whether an arbitrary invitation id or email exists. SQL
  // replays, ownership mismatches, and missing rows intentionally look alike.
  const result = Array.isArray(data) ? data[0] : data
  if (error || !result) {
    return NextResponse.json(
      { error: 'Poziv nije dostupan ili je već obrađen.', code: 'INVITATION_NOT_ACTIONABLE' },
      { status: 409, headers: { 'Cache-Control': 'no-store' } }
    )
  }

  return NextResponse.json({
    id: result.id,
    status: result.status,
    linked_at: result.linked_at ?? null,
    consent_decided_at: result.consent_decided_at,
  }, { headers: { 'Cache-Control': 'no-store' } })
}
