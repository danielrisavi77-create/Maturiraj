import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const parentMocks = vi.hoisted(() => ({
  createClient: vi.fn(),
  createAdminClient: vi.fn(),
}))

vi.mock('@/lib/supabase/server', () => ({
  createClient: parentMocks.createClient,
}))

vi.mock('@/lib/supabase/admin', () => ({
  createAdminClient: parentMocks.createAdminClient,
}))

import {
  DELETE as deleteInvitation,
  GET as listInvitations,
  POST as createInvitation,
} from '@/app/api/parent/children/route'
import { POST as decideInvitation } from '@/app/api/parent/consent/route'
import { GET as getChildDashboard } from '@/app/api/parent/child-dashboard/[childId]/route'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
const readSource = relativePath => readFileSync(resolve(root, relativePath), 'utf8')
const INVITATION_ID = '10000000-0000-4000-8000-000000000001'
const CHILD_ID = '20000000-0000-4000-8000-000000000002'

function enableParentV2() {
  vi.stubEnv('PARENT_PORTAL_ENABLED', 'true')
  vi.stubEnv('PARENT_LINKING_V2_ENABLED', 'true')
}

function chainTo(result) {
  const query = {}
  for (const method of ['select', 'eq', 'not', 'order', 'limit', 'in', 'delete']) {
    query[method] = vi.fn(() => query)
  }
  query.maybeSingle = vi.fn().mockResolvedValue(result)
  query.single = vi.fn().mockResolvedValue(result)
  query.then = (resolvePromise, rejectPromise) => Promise.resolve(result).then(resolvePromise, rejectPromise)
  return query
}

beforeEach(() => {
  vi.clearAllMocks()
})

afterEach(() => {
  vi.unstubAllEnvs()
})

describe('Parent V2 invitation API', () => {
  it('creates only a detached pending invitation without an admin lookup', async () => {
    enableParentV2()
    const inserted = vi.fn()
    const single = vi.fn().mockResolvedValue({
      data: {
        id: INVITATION_ID,
        child_id: null,
        child_email: 'child@example.com',
        child_name: 'Ana',
        status: 'pending',
      },
      error: null,
    })
    const client = {
      auth: { getUser: vi.fn().mockResolvedValue({ data: { user: { id: 'parent-1', email: 'parent@example.com' } } }) },
      from: vi.fn(() => ({
        insert: payload => {
          inserted(payload)
          return { select: vi.fn(() => ({ single })) }
        },
      })),
    }
    parentMocks.createClient.mockResolvedValue(client)

    const response = await createInvitation(new Request('http://localhost/api/parent/children', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ child_email: ' Child@Example.com ', child_name: ' Ana ' }),
    }))

    expect(response.status).toBe(201)
    expect(inserted).toHaveBeenCalledWith({
      parent_id: 'parent-1',
      child_id: null,
      child_email: 'child@example.com',
      child_name: 'Ana',
      status: 'pending',
      linked_at: null,
      consent_version: null,
      consent_decided_at: null,
    })
    expect(parentMocks.createAdminClient).not.toHaveBeenCalled()
  })

  it('rejects attempts to provide child_id or status before any database call', async () => {
    enableParentV2()

    const response = await createInvitation(new Request('http://localhost/api/parent/children', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        child_email: 'child@example.com',
        child_id: CHILD_ID,
        status: 'linked',
      }),
    }))

    expect(response.status).toBe(400)
    expect(parentMocks.createClient).not.toHaveBeenCalled()
    expect(parentMocks.createAdminClient).not.toHaveBeenCalled()
  })

  it('does not contain a profile lookup or direct update path', () => {
    const source = readSource('app/api/parent/children/route.js')

    expect(source).not.toContain(".from('profiles')")
    expect(source).not.toContain('createAdminClient')
    expect(source).not.toContain('.update(')
    expect(source).toContain('child_id: null')
    expect(source).toContain("status: 'pending'")
  })

  it('scopes reads and deletes to the authenticated parent', async () => {
    enableParentV2()
    const parentId = 'parent-1'
    const listQuery = chainTo({ data: [], error: null })
    const deleteQuery = chainTo({ data: null, error: null })
    const from = vi.fn()
      .mockReturnValueOnce(listQuery)
      .mockReturnValueOnce(deleteQuery)
    parentMocks.createClient.mockResolvedValue({
      auth: { getUser: vi.fn().mockResolvedValue({ data: { user: { id: parentId } } }) },
      from,
    })

    const listResponse = await listInvitations()
    const deleteResponse = await deleteInvitation(new Request(
      `http://localhost/api/parent/children?id=${INVITATION_ID}`,
      { method: 'DELETE' }
    ))

    expect(listResponse.status).toBe(200)
    expect(deleteResponse.status).toBe(200)
    expect(listQuery.eq).toHaveBeenCalledWith('parent_id', parentId)
    expect(deleteQuery.eq).toHaveBeenCalledWith('id', INVITATION_ID)
    expect(deleteQuery.eq).toHaveBeenCalledWith('parent_id', parentId)
  })
})

describe('Child consent API', () => {
  it.each(['accept', 'decline'])('delegates %s to the one-time child RPC', async decision => {
    enableParentV2()
    const rpc = vi.fn().mockResolvedValue({
      data: [{
        id: INVITATION_ID,
        status: decision === 'accept' ? 'linked' : 'declined',
        linked_at: decision === 'accept' ? '2026-07-15T00:00:00.000Z' : null,
        consent_decided_at: '2026-07-15T00:00:00.000Z',
      }],
      error: null,
    })
    parentMocks.createClient.mockResolvedValue({
      auth: { getUser: vi.fn().mockResolvedValue({ data: { user: { id: CHILD_ID, email: 'child@example.com' } } }) },
      rpc,
    })

    const response = await decideInvitation(new Request('http://localhost/api/parent/consent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ invitation_id: INVITATION_ID, decision }),
    }))

    expect(response.status).toBe(200)
    expect(rpc).toHaveBeenCalledWith('respond_to_parent_invitation_v2', {
      p_invitation_id: INVITATION_ID,
      p_decision: decision,
    })
    expect(parentMocks.createAdminClient).not.toHaveBeenCalled()
  })

  it('returns the same generic response for ownership failure, missing id, or replay', async () => {
    enableParentV2()
    const rpc = vi.fn().mockResolvedValue({
      data: null,
      error: { message: 'Invitation belongs to another email' },
    })
    parentMocks.createClient.mockResolvedValue({
      auth: { getUser: vi.fn().mockResolvedValue({ data: { user: { id: CHILD_ID, email: 'child@example.com' } } }) },
      rpc,
    })

    const response = await decideInvitation(new Request('http://localhost/api/parent/consent', {
      method: 'POST',
      body: JSON.stringify({ invitation_id: INVITATION_ID, decision: 'accept' }),
    }))
    const body = await response.json()

    expect(response.status).toBe(409)
    expect(body).toEqual({
      error: 'Poziv nije dostupan ili je već obrađen.',
      code: 'INVITATION_NOT_ACTIONABLE',
    })
    expect(JSON.stringify(body)).not.toContain('another email')
  })

  it('rejects an invalid decision before auth or RPC work', async () => {
    enableParentV2()

    const response = await decideInvitation(new Request('http://localhost/api/parent/consent', {
      method: 'POST',
      body: JSON.stringify({ invitation_id: INVITATION_ID, decision: 'link' }),
    }))

    expect(response.status).toBe(400)
    expect(parentMocks.createClient).not.toHaveBeenCalled()
  })
})

describe('Parent dashboard authorization ordering', () => {
  it('never creates an admin client without a linked child-approved V2 relation', async () => {
    enableParentV2()
    const relationQuery = chainTo({ data: null, error: null })
    parentMocks.createClient.mockResolvedValue({
      auth: { getUser: vi.fn().mockResolvedValue({ data: { user: { id: 'parent-1' } } }) },
      from: vi.fn(() => relationQuery),
    })

    const response = await getChildDashboard(
      new Request(`http://localhost/api/parent/child-dashboard/${CHILD_ID}`),
      { params: Promise.resolve({ childId: CHILD_ID }) }
    )

    expect(response.status).toBe(403)
    expect(parentMocks.createAdminClient).not.toHaveBeenCalled()
  })

  it('places the child-approved relation proof before createAdminClient in source', () => {
    const source = readSource('app/api/parent/child-dashboard/[childId]/route.js')
    const proof = source.indexOf(".eq('consent_version', 'v2')")
    const admin = source.indexOf('const admin = createAdminClient()')

    expect(proof).toBeGreaterThan(-1)
    expect(source).toContain(".eq('status', 'linked')")
    expect(source).toContain(".not('consent_decided_at', 'is', null)")
    expect(admin).toBeGreaterThan(proof)
  })
})

describe('Parent consent V2 SQL contract', () => {
  const migration = readSource('supabase/migrations/20260715020000_parent_consent_v2.sql')

  it('resets every legacy relation and validates the new consent constraints', () => {
    const resetStart = migration.indexOf('update public.parent_children')
    const resetEnd = migration.indexOf('alter table public.parent_children', resetStart)
    const reset = migration.slice(resetStart, resetEnd)

    expect(reset).toContain("status = 'pending'")
    expect(reset).toContain('child_id = null')
    expect(reset).toContain('linked_at = null')
    expect(reset).toContain('consent_version = null')
    expect(reset).toContain('consent_decided_at = null')
    expect(reset.toLowerCase()).not.toContain('where')
    expect(migration).toContain('validate constraint parent_children_consent_version_v2')
    expect(migration).toContain('validate constraint parent_children_consent_state_v2')
  })

  it('removes direct update authority and permits only detached pending inserts', () => {
    expect(migration).toContain('drop policy if exists "parent_update_own_children"')
    expect(migration).toContain('drop policy if exists "child_update_link_status"')
    expect(migration).toContain('revoke update on table public.parent_children from public, anon, authenticated')
    expect(migration).toContain('parent_insert_pending_invitation_v2')
    expect(migration).toContain('parent_id = auth.uid()')
    expect(migration).toContain('and child_id is null')
    expect(migration).toContain("and status = 'pending'")
    expect(migration).toContain('and consent_decided_at is null')
  })

  it('limits parent reads and deletes to rows owned by auth.uid()', () => {
    expect(migration).toMatch(
      /create policy "parent_read_own_children_v2"[\s\S]*?using \(parent_id = auth\.uid\(\)\);/
    )
    expect(migration).toMatch(
      /create policy "parent_delete_own_children_v2"[\s\S]*?using \(parent_id = auth\.uid\(\)\);/
    )
  })

  it('allows only the authenticated child JWT email to decide under a row lock', () => {
    expect(migration).toContain('security definer')
    expect(migration).toContain('set search_path = pg_catalog')
    expect(migration).not.toContain('set search_path = pg_catalog, public')
    expect(migration).toContain('v_child_id uuid := auth.uid()')
    expect(migration).toContain("auth.jwt() ->> 'email'")
    expect(migration).toContain('lower(btrim(pc.child_email)) = v_child_email')
    expect(migration).toContain('for update')
    expect(migration).toContain('Invitation unavailable or already processed')
    expect(migration).toContain('grant execute on function public.respond_to_parent_invitation_v2(uuid, text) to authenticated')
  })

  it('replaces all eight downstream parent-read policies with V2 consent proof', () => {
    const policies = [
      'parent_read_child_activity',
      'parent_read_child_profile',
      'parent_read_child_checklist',
      'parent_read_child_plans',
      'parent_read_child_plan_weeks',
      'parent_read_child_predmet_progress',
      'parent_read_child_targets',
      'parent_read_child_simulator_attempts',
    ]

    for (const policy of policies) {
      expect(migration).toContain(`drop policy if exists "${policy}"`)
      expect(migration).toContain(`create policy "${policy}"`)
    }
    expect(migration.match(/pc\.consent_version = 'v2'/g)).toHaveLength(8)
    expect(migration.match(/pc\.consent_decided_at is not null/g)).toHaveLength(8)
  })
})

describe('Parent linking UI containment', () => {
  it('uses the invitation API and never looks up or links a child directly', () => {
    const source = readSource('app/roditelji/(app)/povezi/page.jsx')

    expect(source).toContain("fetch('/api/parent/children'")
    expect(source).not.toContain(".from('profiles')")
    expect(source).not.toContain(".from('parent_children')")
    expect(source).not.toContain("status:      childId ? 'linked'")
    expect(source).toContain('Poziv je poslan!')
    expect(source).toContain('Čeka se prihvaćanje djeteta')
  })
})
