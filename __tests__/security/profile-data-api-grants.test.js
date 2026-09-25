import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const migration = readFileSync(
  resolve(
    process.cwd(),
    'supabase/migrations/20260925144744_p0_profiles_data_api_grants.sql'
  ),
  'utf8'
)
const normalized = migration.replace(/\s+/g, ' ').toLowerCase()

describe('profiles Data API grants', () => {
  it('keeps anonymous profile reads fail-closed', () => {
    expect(normalized).toContain(
      'revoke select on table public.profiles from public, anon;'
    )
    expect(normalized).not.toMatch(
      /grant\s+select\s+on\s+table\s+public\.profiles\s+to\s+anon/
    )
  })

  it('grants profile reads only to authenticated app and service roles', () => {
    expect(normalized).toContain(
      'grant select on table public.profiles to authenticated, service_role;'
    )
  })

  it('does not broaden write privileges', () => {
    expect(normalized).not.toMatch(/grant\s+(insert|update|delete|all)/)
  })
})
