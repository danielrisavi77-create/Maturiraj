import { describe, expect, it } from 'vitest'
import { P0_CONTRACT_IDS, scanP0Contracts } from '../../scripts/security/p0-baseline.mjs'

describe('Phase 0 frozen P0 security audit snapshot', () => {
  it('inventories exactly the three canonical P0 contracts without live services', async () => {
    const report = await scanP0Contracts()

    expect(report.mode).toBe('offline-frozen-audit-snapshot')
    expect(report.snapshotDate).toBe('2026-07-15')
    expect(report.snapshotCommit).toMatch(/^[0-9a-f]{40}$/)
    expect(report.liveServicesUsed).toBe(false)
    expect(report.contractCount).toBe(3)
    expect(report.findings.map(({ id }) => id)).toEqual(P0_CONTRACT_IDS)
    expect(report.findings.every(({ riskPresent }) => riskPresent)).toBe(true)

    for (const finding of report.findings) {
      expect(finding.riskPresent).toBe(true)
      expect(finding.status).toBe('VULNERABLE_SOURCE_CONTRACT_PRESENT')
      expect(finding.acceptance.length).toBeGreaterThan(20)
      expect(finding.evidence.length).toBeGreaterThan(0)

      for (const source of finding.evidence) {
        expect(source.readableAtSnapshot).toBe(true)
        expect(source.path).not.toMatch(/^[A-Za-z]:[\\/]/)
        expect(source).not.toHaveProperty('text')
        expect(source).not.toHaveProperty('snippet')
        for (const marker of source.markers) {
          expect(Object.keys(marker).sort()).toEqual(['id', 'line', 'matched'])
          expect(marker.matched).toBe(true)
          expect(marker.line).toBeGreaterThan(0)
        }
      }
    }
  })

  it('does not serialize environment secret values', async () => {
    const sentinel = 'phase0-do-not-leak-this-value'
    const previous = process.env.STRIPE_SECRET_KEY
    process.env.STRIPE_SECRET_KEY = sentinel

    try {
      const serialized = JSON.stringify(await scanP0Contracts())
      expect(serialized).not.toContain(sentinel)
    } finally {
      if (previous === undefined) delete process.env.STRIPE_SECRET_KEY
      else process.env.STRIPE_SECRET_KEY = previous
    }
  })

  it.todo('SEC-P0-01 acceptance: an authenticated user cannot mutate entitlement fields')
  it.todo('SEC-P0-02 acceptance: a parent cannot approve their own child link')
  it.todo('BIL-P0-01 acceptance: unknown Stripe prices fail closed in the only active webhook')
})
