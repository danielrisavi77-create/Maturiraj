import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const source = readFileSync(
  resolve(process.cwd(), 'scripts/security/p0-runtime-acceptance.mjs'),
  'utf8'
)

describe('P0 runtime acceptance harness safety contract', () => {
  it('refuses unspecified and production targets', () => {
    expect(source).toContain("['local', 'staging'].includes(target)")
    expect(source).toContain('Production is intentionally unsupported.')
    expect(source).toContain('I_UNDERSTAND_NONPROD_ONLY')
  })

  it('locks local mode to loopback-style hosts', () => {
    expect(source).toContain("'127.0.0.1'")
    expect(source).toContain("'localhost'")
    expect(source).toContain("'host.docker.internal'")
    expect(source).toContain('refuses non-local Supabase host')
  })

  it('uses temporary admin-created users and best-effort cleanup', () => {
    expect(source).toContain('admin.auth.admin.createUser')
    expect(source).toContain('email_confirm: true')
    expect(source).toContain('admin.auth.admin.deleteUser')
    expect(source).toContain('finally')
  })

  it('exercises protected entitlement fields and a trusted service-role write', () => {
    for (const field of ['tier', 'plan_type', 'pro_expires_at', 'role', 'email']) {
      expect(source).toContain("['" + field + "'")
    }
    expect(source).toContain("update({ tier: 'pro', plan_type: 'pro' })")
    expect(source).toContain('cross-account profile update')
  })

  it('exercises Parent Consent V2 negative and positive transitions', () => {
    expect(source).toContain("status: 'pending'")
    expect(source).toContain('parent direct UPDATE to linked')
    expect(source).toContain('parent direct linked INSERT')
    expect(source).toContain('intruder accepts another child invitation')
    expect(source).toContain("p_decision: 'accept'")
    expect(source).toContain('replayed child consent')
    expect(source).toContain('parent reads child after revoke')
  })

  it('does not pretend to perform Stripe acceptance', () => {
    expect(source).toContain(
      'BIL-P0-01 requires the separate Stripe test-mode/staging runbook'
    )
    expect(source).not.toContain("from 'stripe'")
  })
})
