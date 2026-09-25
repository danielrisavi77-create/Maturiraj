import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const migration = readFileSync(
  resolve(
    process.cwd(),
    'supabase/migrations/20260925151234_p0_subscriptions_data_api_grants.sql'
  ),
  'utf8'
)
const normalized = migration.replace(/\s+/g, ' ').toLowerCase()

describe('subscriptions Data API grants', () => {
  it('keeps anonymous subscription access fail-closed', () => {
    expect(normalized).toContain(
      'revoke all on table public.subscriptions from public, anon, authenticated;'
    )
    expect(normalized).not.toMatch(
      /grant\s+.+\s+on\s+table\s+public\.subscriptions\s+to\s+anon/
    )
  })

  it('gives authenticated users read-only access for their RLS-scoped row', () => {
    expect(normalized).toContain(
      'grant select on table public.subscriptions to authenticated;'
    )
    expect(normalized).not.toMatch(
      /grant\s+(insert|update|delete|all).+to\s+authenticated/
    )
  })

  it('gives the trusted service role the provisioning privileges billing needs', () => {
    expect(normalized).toContain(
      'grant select, insert, update, delete on table public.subscriptions to service_role;'
    )
  })
})
