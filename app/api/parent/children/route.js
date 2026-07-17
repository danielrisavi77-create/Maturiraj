import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { isParentLinkingV2Enabled } from '@/lib/config/featureFlags'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const ALLOWED_POST_FIELDS = new Set(['child_email', 'child_name'])

function parentV2Disabled() {
  return NextResponse.json(
    { error: 'Roditeljsko povezivanje je privremeno nedostupno.', code: 'FEATURE_DISABLED' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } }
  )
}

function normalizeInvitationInput(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return null
  if (Object.keys(body).some(key => !ALLOWED_POST_FIELDS.has(key))) return null
  if (typeof body.child_email !== 'string') return null
  if (body.child_name !== undefined && body.child_name !== null && typeof body.child_name !== 'string') return null

  const childEmail = body.child_email.trim().toLowerCase()
  const childName = typeof body.child_name === 'string' ? body.child_name.trim() : ''

  if (childEmail.length < 3 || childEmail.length > 254 || !EMAIL_PATTERN.test(childEmail)) return null
  if (childName.length > 120) return null

  return {
    child_email: childEmail,
    child_name: childName || null,
  }
}

// GET /api/parent/children — list only links owned by the authenticated parent.
export async function GET() {
  if (!isParentLinkingV2Enabled()) return parentV2Disabled()

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('parent_children')
    .select('id, child_id, child_email, child_name, status, linked_at, consent_version, consent_decided_at, created_at')
    .eq('parent_id', user.id)
    .order('created_at')

  if (error) {
    return NextResponse.json({ error: 'Nije moguće učitati pozive.' }, { status: 500 })
  }
  return NextResponse.json(data || [], { headers: { 'Cache-Control': 'no-store' } })
}

// POST /api/parent/children — create a detached pending invitation only.
export async function POST(request) {
  if (!isParentLinkingV2Enabled()) return parentV2Disabled()

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Neispravan zahtjev.' }, { status: 400 })
  }

  const input = normalizeInvitationInput(body)
  if (!input) return NextResponse.json({ error: 'Neispravni podaci poziva.' }, { status: 400 })

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  if (input.child_email === user.email?.trim().toLowerCase()) {
    return NextResponse.json({ error: 'Ne možeš poslati poziv samom sebi.' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('parent_children')
    .insert({
      parent_id: user.id,
      child_id: null,
      child_email: input.child_email,
      child_name: input.child_name,
      status: 'pending',
      linked_at: null,
      consent_version: null,
      consent_decided_at: null,
    })
    .select('id, child_id, child_email, child_name, status, created_at')
    .single()

  if (error?.code === '23505') {
    return NextResponse.json({ error: 'Poziv za ovu adresu već postoji.' }, { status: 409 })
  }
  if (error) {
    return NextResponse.json({ error: 'Poziv nije moguće poslati.' }, { status: 500 })
  }

  return NextResponse.json(data, {
    status: 201,
    headers: { 'Cache-Control': 'no-store' },
  })
}

// DELETE /api/parent/children — RLS and parent_id both constrain ownership.
export async function DELETE(request) {
  if (!isParentLinkingV2Enabled()) return parentV2Disabled()

  const { searchParams } = new URL(request.url)
  const linkId = searchParams.get('id')
  if (!linkId || !UUID_PATTERN.test(linkId)) {
    return NextResponse.json({ error: 'Neispravan id poziva.' }, { status: 400 })
  }

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { error } = await supabase
    .from('parent_children')
    .delete()
    .eq('id', linkId)
    .eq('parent_id', user.id)

  if (error) {
    return NextResponse.json({ error: 'Vezu nije moguće ukloniti.' }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
