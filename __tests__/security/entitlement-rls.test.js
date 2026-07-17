import { readFileSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
const migrationsDir = join(root, 'supabase', 'migrations')
const vulnerableMigration = '20260627000000_sim_progress.sql'
const guardMigration = '20260715010000_profile_entitlement_guard.sql'
const guardSql = readFileSync(join(migrationsDir, guardMigration), 'utf8')
const vulnerableSql = readFileSync(join(migrationsDir, vulnerableMigration), 'utf8')
const normalizedSql = guardSql.replace(/\s+/g, ' ').toLowerCase()

function extractArrayAfter(marker) {
  const start = guardSql.indexOf(marker)
  const tail = start >= 0 ? guardSql.slice(start) : ''
  const match = tail.match(/array\s*\[(.*?)\]/s)
  return match ? [...match[1].matchAll(/'([^']+)'/g)].map(item => item[1]) : []
}

const protectedColumns = extractArrayAfter('protected_columns constant text[]')
const allowedProfileColumns = extractArrayAfter('allowed_profile_columns constant text[]')
const declaredProtectedArrays = [...guardSql.matchAll(/array\s*\[(.*?)\]/gs)]
  .map(match => [...match[1].matchAll(/'([^']+)'/g)].map(item => item[1]))
  .filter(columns => columns.includes('tier') && columns.includes('role'))
const trustedRoles = ['service_role', 'postgres', 'supabase_admin']

// Static behavioral model derived from the migration's protected-column and
// trusted-role declarations. It does not replace execution against Postgres.
function staticGuardDecision({ role, changedColumns }) {
  if (trustedRoles.includes(role)) return 'allow'
  return changedColumns.some(column => protectedColumns.includes(column))
    ? 'deny'
    : 'allow'
}

describe('SEC-P0-01 static SQL contract (no live Supabase)', () => {
  it('runs after the migration that introduced the vulnerable broad policy', () => {
    const orderedMigrations = readdirSync(migrationsDir).sort()

    expect(vulnerableSql).toMatch(
      /create policy "profiles update own"[\s\S]*for update using \(auth\.uid\(\) = id\);/i
    )
    expect(guardMigration.localeCompare(vulnerableMigration)).toBeGreaterThan(0)
    expect(orderedMigrations.indexOf(guardMigration)).toBeGreaterThan(
      orderedMigrations.indexOf(vulnerableMigration)
    )
  })

  it('replaces the broad update policy with explicit own-row USING and WITH CHECK', () => {
    expect(normalizedSql).toContain(
      'drop policy if exists "profiles update own" on public.profiles;'
    )
    expect(normalizedSql).toMatch(
      /create policy "profiles update own" on public\.profiles for update to authenticated using \(auth\.uid\(\) = id\) with check \(auth\.uid\(\) = id\);/
    )
  })

  it('uses an idempotent invoker trigger that compares OLD and NEW values', () => {
    expect(normalizedSql).toContain(
      'create or replace function public.guard_profile_entitlement_fields()'
    )
    expect(normalizedSql).toContain('security invoker')
    expect(normalizedSql).not.toContain('security definer')
    expect(normalizedSql).toContain('to_jsonb(new) -> protected_column')
    expect(normalizedSql).toContain('to_jsonb(old) -> protected_column')
    expect(normalizedSql).toContain("errcode = '42501'")
    expect(normalizedSql).toContain(
      'drop trigger if exists guard_profile_entitlement_fields on public.profiles;'
    )
    expect(normalizedSql).toContain(
      'create trigger guard_profile_entitlement_fields before update on public.profiles'
    )
  })

  it.each(['tier', 'plan_type', 'pro_expires_at', 'role', 'email'])(
    'statically denies authenticated mutation of %s',
    column => {
      expect(protectedColumns).toContain(column)
      expect(
        staticGuardDecision({
          role: 'authenticated',
          changedColumns: [column],
        })
      ).toBe('deny')
    }
  )

  it('also protects identity and optional privileged profile fields when present', () => {
    expect(protectedColumns).toEqual(
      expect.arrayContaining([
        'id',
        'stripe_customer_id',
        'stripe_subscription_id',
        'stripe_price_id',
        'subscription_status',
        'agent_access',
        'created_at',
      ])
    )
  })

  it('keeps the trigger and dynamic revoke protected lists aligned', () => {
    expect(declaredProtectedArrays.length).toBeGreaterThanOrEqual(2)
    for (const columns of declaredProtectedArrays) {
      expect([...columns].sort()).toEqual([...protectedColumns].sort())
    }
  })

  it.each(trustedRoles)('statically preserves the trusted %s write path', role => {
    expect(
      staticGuardDecision({
        role,
        changedColumns: protectedColumns,
      })
    ).toBe('allow')
  })

  it('keeps ordinary own-profile fields outside the protected set', () => {
    expect(allowedProfileColumns).toEqual([
      'full_name',
      'email_reminders',
      'preferences',
      'updated_at',
    ])

    for (const column of allowedProfileColumns) {
      expect(protectedColumns).not.toContain(column)
    }

    expect(
      staticGuardDecision({
        role: 'authenticated',
        changedColumns: ['full_name', 'email_reminders', 'preferences'],
      })
    ).toBe('allow')
  })

  it('removes broad grants and restores only dynamic non-sensitive authenticated updates', () => {
    expect(normalizedSql).toContain(
      'revoke update on table public.profiles from public, anon, authenticated;'
    )
    expect(normalizedSql).toMatch(
      /revoke update \(email, tier, plan_type, pro_expires_at, role\) on table public\.profiles from public, anon, authenticated;/
    )
    expect(normalizedSql).toContain(
      "'revoke update (%s) on table public.profiles from public, anon, authenticated'"
    )
    expect(normalizedSql).toContain(
      "'grant update (%s) on table public.profiles to authenticated'"
    )
    expect(normalizedSql).toContain(
      'grant update on table public.profiles to service_role;'
    )
  })

  it('ties the trusted bypass to database/service identities before OLD/NEW checks', () => {
    const trustedBranch = normalizedSql.indexOf(
      "current_user in ('service_role', 'postgres', 'supabase_admin')"
    )
    const comparison = normalizedSql.indexOf('to_jsonb(new) -> protected_column')

    expect(trustedBranch).toBeGreaterThan(-1)
    expect(trustedBranch).toBeLessThan(comparison)
  })

  it.todo(
    'runtime acceptance with local Supabase: authenticated and anon updates of email and each entitlement/role field fail with SQLSTATE 42501 or permission denied'
  )
  it.todo(
    'runtime acceptance with local Supabase: authenticated owner can update full_name/preferences/email_reminders but cannot update another profile'
  )
  it.todo(
    'runtime acceptance with local Supabase: service_role can update and revert tier/plan_type/pro_expires_at/role'
  )
})
