import { createClient } from '@supabase/supabase-js'

const target = process.env.P0_ACCEPTANCE_TARGET
const confirm = process.env.P0_ACCEPTANCE_CONFIRM
const url =
  process.env.P0_SUPABASE_URL ||
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  process.env.SUPABASE_URL
const anonKey =
  process.env.P0_SUPABASE_PUBLISHABLE_KEY ||
  process.env.P0_SUPABASE_ANON_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  process.env.SUPABASE_ANON_KEY
const serviceKey =
  process.env.P0_SUPABASE_SECRET_KEY ||
  process.env.P0_SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY

function fail(message) {
  throw new Error(message)
}

function ok(condition, message) {
  if (!condition) fail(message)
}

function safeError(error) {
  if (!error) return null
  return {
    code: error.code || null,
    message: String(error.message || '').slice(0, 180),
  }
}

function assertNonProductionTarget() {
  if (!['local', 'staging'].includes(target)) {
    fail('Set P0_ACCEPTANCE_TARGET=local or staging. Production is intentionally unsupported.')
  }
  if (confirm !== 'I_UNDERSTAND_NONPROD_ONLY') {
    fail('Set P0_ACCEPTANCE_CONFIRM=I_UNDERSTAND_NONPROD_ONLY.')
  }
  if (!url || !anonKey || !serviceKey) {
    fail('Missing Supabase URL, anon key, or service-role key for runtime acceptance.')
  }

  const host = new URL(url).hostname
  if (
    target === 'local' &&
    !['127.0.0.1', 'localhost', 'host.docker.internal'].includes(host)
  ) {
    fail('P0_ACCEPTANCE_TARGET=local refuses non-local Supabase host: ' + host)
  }
}

function makeClient(key) {
  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  })
}

async function createTempUser(admin, label, suffix) {
  const email = 'p0-' + label + '-' + suffix + '@example.com'
  const password = 'Maturiraj-P0-' + suffix + '-Aa9!'
  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: { full_name: 'P0 ' + label },
  })

  if (error || !data?.user) {
    fail('createUser(' + label + ') failed: ' + JSON.stringify(safeError(error)))
  }

  return { id: data.user.id, email, password }
}

async function signIn(user) {
  const supabase = makeClient(anonKey)
  const { error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  })

  if (error) {
    fail('signIn(' + user.email + ') failed: ' + JSON.stringify(safeError(error)))
  }

  return supabase
}

async function waitForProfile(admin, userId) {
  let lastError = null
  for (let i = 0; i < 20; i += 1) {
    const { data, error } = await admin
      .from('profiles')
      .select('id,email,full_name,tier,plan_type,pro_expires_at,role')
      .eq('id', userId)
      .maybeSingle()

    if (!error && data) return data
    if (error) lastError = safeError(error)
    await new Promise(resolve => setTimeout(resolve, 150))
  }

  fail(
    'profiles bootstrap/read failed for ' +
      userId +
      '; last database error=' +
      JSON.stringify(lastError)
  )
}

async function expectRejected(label, queryPromise) {
  const { data, error } = await queryPromise
  if (!error) {
    fail(label + ': expected rejection, got data=' + JSON.stringify(data))
  }
  return safeError(error)
}

async function expectInvisible(label, queryPromise) {
  const { data, error } = await queryPromise
  if (error) {
    fail(label + ': unexpected error ' + JSON.stringify(safeError(error)))
  }
  const rows = Array.isArray(data) ? data : data ? [data] : []
  if (rows.length !== 0) {
    fail(label + ': expected zero visible rows, got ' + rows.length)
  }
}

async function testEntitlementGuard(ctx) {
  const { admin, parent, child, parentClient } = ctx

  await waitForProfile(admin, parent.id)
  await waitForProfile(admin, child.id)

  const { data: ordinary, error: ordinaryError } = await parentClient
    .from('profiles')
    .update({ full_name: 'P0 runtime owner update' })
    .eq('id', parent.id)
    .select('id,full_name')
    .single()

  if (ordinaryError || ordinary?.full_name !== 'P0 runtime owner update') {
    fail(
      'SEC-P0-01 ordinary owner update failed: ' +
      JSON.stringify(safeError(ordinaryError))
    )
  }

  const protectedCases = [
    ['tier', 'pro'],
    ['plan_type', 'pro'],
    ['pro_expires_at', new Date(Date.now() + 86400000).toISOString()],
    ['role', 'admin'],
    ['email', 'mutated-' + parent.email],
  ]

  const rejected = {}
  for (const [column, value] of protectedCases) {
    rejected[column] = await expectRejected(
      'SEC-P0-01 protected column ' + column,
      parentClient.from('profiles').update({ [column]: value }).eq('id', parent.id)
    )
  }

  await expectInvisible(
    'SEC-P0-01 cross-account profile update',
    parentClient
      .from('profiles')
      .update({ full_name: 'cross-account-should-not-write' })
      .eq('id', child.id)
      .select('id')
  )

  const { error: adminWriteError } = await admin
    .from('profiles')
    .update({ tier: 'pro', plan_type: 'pro' })
    .eq('id', parent.id)

  if (adminWriteError) {
    fail(
      'SEC-P0-01 trusted service-role write failed: ' +
      JSON.stringify(safeError(adminWriteError))
    )
  }

  const { data: trustedRow, error: trustedReadError } = await admin
    .from('profiles')
    .select('tier,plan_type')
    .eq('id', parent.id)
    .single()

  if (
    trustedReadError ||
    trustedRow?.tier !== 'pro' ||
    trustedRow?.plan_type !== 'pro'
  ) {
    fail('SEC-P0-01 service-role write could not be verified')
  }

  await admin
    .from('profiles')
    .update({
      tier: 'free',
      plan_type: null,
      pro_expires_at: null,
      role: 'user',
    })
    .eq('id', parent.id)

  return {
    protectedMutationsRejected: Object.keys(rejected),
    serviceRoleWrite: 'verified',
  }
}

async function testParentConsentV2(ctx) {
  const {
    admin,
    parent,
    child,
    parentClient,
    childClient,
    intruderClient,
  } = ctx

  await expectInvisible(
    'SEC-P0-02 parent reads child profile before consent',
    parentClient.from('profiles').select('id').eq('id', child.id)
  )

  const insertPayload = {
    parent_id: parent.id,
    child_id: null,
    child_email: child.email.toLowerCase(),
    child_name: 'P0 Child',
    status: 'pending',
    linked_at: null,
    consent_version: null,
    consent_decided_at: null,
  }

  const { data: invitation, error: invitationError } = await parentClient
    .from('parent_children')
    .insert(insertPayload)
    .select(
      'id,parent_id,child_id,child_email,status,consent_version,consent_decided_at'
    )
    .single()

  if (invitationError || !invitation?.id) {
    fail(
      'SEC-P0-02 pending invitation failed: ' +
      JSON.stringify(safeError(invitationError))
    )
  }

  ok(
    invitation.child_id === null && invitation.status === 'pending',
    'Invitation was not detached/pending'
  )

  await expectRejected(
    'SEC-P0-02 parent direct UPDATE to linked',
    parentClient
      .from('parent_children')
      .update({
        child_id: child.id,
        status: 'linked',
        consent_version: 'v2',
        consent_decided_at: new Date().toISOString(),
      })
      .eq('id', invitation.id)
  )

  await expectRejected(
    'SEC-P0-02 parent direct linked INSERT',
    parentClient.from('parent_children').insert({
      ...insertPayload,
      child_email: 'other-' + child.email,
      child_id: child.id,
      status: 'linked',
      consent_version: 'v2',
      consent_decided_at: new Date().toISOString(),
    })
  )

  await expectInvisible(
    'SEC-P0-02 intruder sees pending invitation',
    intruderClient.from('parent_children').select('id').eq('id', invitation.id)
  )

  const { data: childPending, error: childPendingError } = await childClient
    .from('parent_children')
    .select('id,status,child_email')
    .eq('id', invitation.id)
    .single()

  if (childPendingError || childPending?.status !== 'pending') {
    fail(
      'SEC-P0-02 intended child cannot discover pending invitation: ' +
      JSON.stringify(safeError(childPendingError))
    )
  }

  await expectRejected(
    'SEC-P0-02 intruder accepts another child invitation',
    intruderClient.rpc('respond_to_parent_invitation_v2', {
      p_invitation_id: invitation.id,
      p_decision: 'accept',
    })
  )

  const { data: acceptedRows, error: acceptError } = await childClient.rpc(
    'respond_to_parent_invitation_v2',
    {
      p_invitation_id: invitation.id,
      p_decision: 'accept',
    }
  )

  if (acceptError) {
    fail(
      'SEC-P0-02 intended child accept failed: ' +
      JSON.stringify(safeError(acceptError))
    )
  }

  const accepted = Array.isArray(acceptedRows) ? acceptedRows[0] : acceptedRows
  ok(
    accepted?.status === 'linked' &&
      accepted?.child_id === child.id &&
      Boolean(accepted?.consent_decided_at),
    'SEC-P0-02 accept did not create linked V2 consent state'
  )

  await expectRejected(
    'SEC-P0-02 replayed child consent',
    childClient.rpc('respond_to_parent_invitation_v2', {
      p_invitation_id: invitation.id,
      p_decision: 'accept',
    })
  )

  const { data: visibleChildProfile, error: visibleChildError } = await parentClient
    .from('profiles')
    .select('id')
    .eq('id', child.id)
    .single()

  if (visibleChildError || visibleChildProfile?.id !== child.id) {
    fail(
      'SEC-P0-02 linked parent cannot read consented child profile: ' +
      JSON.stringify(safeError(visibleChildError))
    )
  }

  await expectInvisible(
    'SEC-P0-02 unrelated user reads linked child profile',
    intruderClient.from('profiles').select('id').eq('id', child.id)
  )

  const { error: deleteError } = await parentClient
    .from('parent_children')
    .delete()
    .eq('id', invitation.id)
    .eq('parent_id', parent.id)

  if (deleteError) {
    fail(
      'SEC-P0-02 revoke/delete failed: ' +
      JSON.stringify(safeError(deleteError))
    )
  }

  await expectInvisible(
    'SEC-P0-02 parent reads child after revoke',
    parentClient.from('profiles').select('id').eq('id', child.id)
  )

  const { data: remaining, error: remainingError } = await admin
    .from('parent_children')
    .select('id')
    .eq('id', invitation.id)

  if (remainingError || (remaining || []).length !== 0) {
    fail('SEC-P0-02 invitation remains after revoke')
  }

  return {
    pendingInvitation: 'verified',
    childOnlyConsent: 'verified',
    replayRejected: 'verified',
    crossAccountReadBlocked: 'verified',
    revoke: 'verified',
  }
}

async function main() {
  assertNonProductionTarget()

  const admin = makeClient(serviceKey)
  const suffix =
    String(Date.now()) + '-' + Math.random().toString(16).slice(2, 10)
  const users = []

  try {
    const parent = await createTempUser(admin, 'parent', suffix)
    const child = await createTempUser(admin, 'child', suffix)
    const intruder = await createTempUser(admin, 'intruder', suffix)
    users.push(parent, child, intruder)

    const [parentClient, childClient, intruderClient] = await Promise.all([
      signIn(parent),
      signIn(child),
      signIn(intruder),
    ])

    const ctx = {
      admin,
      parent,
      child,
      intruder,
      parentClient,
      childClient,
      intruderClient,
    }

    const entitlement = await testEntitlementGuard(ctx)
    const parentConsent = await testParentConsentV2(ctx)

    console.log(
      JSON.stringify(
        {
          ok: true,
          target,
          checks: {
            'SEC-P0-01': entitlement,
            'SEC-P0-02': parentConsent,
          },
          note:
            'BIL-P0-01 requires the separate Stripe test-mode/staging runbook; this script does not contact Stripe.',
        },
        null,
        2
      )
    )
  } finally {
    for (const user of users.reverse()) {
      try {
        await admin.auth.admin.deleteUser(user.id)
      } catch {
        // Best-effort cleanup. A failed test must preserve the original error.
      }
    }
  }
}

main().catch(error => {
  console.error(
    JSON.stringify(
      {
        ok: false,
        target: target || null,
        error: String(error?.message || error),
      },
      null,
      2
    )
  )
  process.exitCode = 1
})
