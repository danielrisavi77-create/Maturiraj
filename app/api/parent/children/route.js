import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

// GET /api/parent/children — list all parent's child links
export async function GET() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabase
    .from('parent_children')
    .select('*')
    .eq('parent_id', session.user.id)
    .order('created_at')

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data || [])
}

// POST /api/parent/children — add a child by email
export async function POST(request) {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  let body
  try { body = await request.json() }
  catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }

  const child_email = (body.child_email || '').toLowerCase().trim()
  const child_name = (body.child_name || '').trim() || null

  if (!child_email || !child_email.includes('@') || !child_email.includes('.')) {
    return NextResponse.json({ error: 'Neispravna email adresa' }, { status: 400 })
  }
  if (child_email === session.user.email?.toLowerCase()) {
    return NextResponse.json({ error: 'Ne možeš pratiti samog sebe' }, { status: 400 })
  }

  // Resolve child_id from profiles if account already exists
  const admin = createAdminClient()
  const { data: childProfile } = await admin
    .from('profiles')
    .select('id')
    .eq('email', child_email)
    .maybeSingle()

  const { data, error } = await supabase
    .from('parent_children')
    .upsert(
      {
        parent_id: session.user.id,
        child_id: childProfile?.id || null,
        child_email,
        child_name,
        status: 'pending',
      },
      { onConflict: 'parent_id,child_email', ignoreDuplicates: false }
    )
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}

// DELETE /api/parent/children — remove link by child_email or child_id
export async function DELETE(request) {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(request.url)
  const linkId = searchParams.get('id')
  if (!linkId) return NextResponse.json({ error: 'Nedostaje id parametar' }, { status: 400 })

  const { error } = await supabase
    .from('parent_children')
    .delete()
    .eq('id', linkId)
    .eq('parent_id', session.user.id) // RLS double-check

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
