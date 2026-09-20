import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
const readSource = relativePath => readFileSync(resolve(root, relativePath), 'utf8')

describe('Phase 0 billing success containment', () => {
  it('routes every landing paid-plan action to the plan selection page', () => {
    const source = readSource('app/page.jsx')

    // Landing paid actions must end on the plan selection page (/pro), never on
    // a checkout call or the post-payment success page. Since fdb744d the seven
    // onPlan props no longer inline `window.location.href = "/pro"`; they all go
    // through a single goPro(billing) helper that appends the billing period.
    // The assertion checks that intent structurally, not the old literal count.
    const goPro = source.match(
      /const goPro = \(billing\) => \{([\s\S]*?)\n {2}\};/
    )
    expect(goPro, 'app/page.jsx must define a goPro plan-selection helper').toBeTruthy()

    // The helper's only navigation target is the plan selection page.
    const goProNavigations = goPro[1].match(/window\.location\.href = [^\n]+/g) ?? []
    expect(goProNavigations).toHaveLength(1)
    expect(goProNavigations[0]).toContain('`/pro?billing=${q}`')

    // Every paid-plan entry point on the landing page is wired to that helper.
    const onPlanProps = source.match(/onPlan=\{[^}]*\}/g) ?? []
    expect(onPlanProps).toHaveLength(7)
    for (const prop of onPlanProps) {
      expect(prop, `onPlan prop must route through goPro: ${prop}`).toMatch(/goPro/)
    }

    // No landing entry point may skip plan selection.
    expect(source).not.toContain('window.location.href = "/uspjeh"')
    expect(source).not.toContain('/api/checkout')
    expect(source).not.toContain('/api/stripe')
  })

  it('routes parent paid-plan actions to plan selection instead of success', () => {
    const source = readSource('app/roditelji/page.jsx')

    expect(source).toContain('const goPlan = () => router.push("/pro")')
    expect(source).not.toContain('router.push("/uspjeh")')
  })

  it('uses only the canonical checkout endpoint and canonical plan slugs', () => {
    const source = readSource('app/pro/page.js')

    expect(source).toContain("fetch('/api/checkout'")
    expect(source).not.toContain("fetch('/api/stripe/checkout'")
    expect(source).toContain("monthly: 'starter'")
    expect(source).toContain("monthly: 'pro'")
    expect(source).toContain("yearly:  'pro_god'")
    expect(source).toContain("data.code === 'FEATURE_DISABLED'")
    expect(source).toContain('Naplata je privremeno nedostupna')
  })

  it('shows checkout success only after the server confirms an active known plan', () => {
    const source = readSource('app/uspjeh/page.js')

    expect(source).toContain("fetch('/api/billing/refresh'")
    expect(source).toContain('if (!response.ok)')
    expect(source).toContain('ACTIVE_SUBSCRIPTION_STATUSES.has(data.status)')
    expect(source).toContain('CONFIRMED_PLANS.has(data.tier)')
    expect(source).toContain("const isVerified = verification.state === 'verified'")
    expect(source).toContain('if (!isVerified)')
    expect(source).not.toContain('/api/session')
    expect(source).not.toContain('|| sadrzaj.pro')
    expect(source).not.toContain('Plaćanje je potvrđeno')
    expect(source).toContain('Pretplata i pristup')
  })

  it('keeps the legacy return page neutral and free of automatic redirects', () => {
    const source = readSource('app/pro/success/page.js')

    expect(source).toContain('Plaćanje nije potvrđeno')
    expect(source).toContain("router.push('/pro')")
    expect(source).not.toContain('setInterval')
    expect(source).not.toContain('countdown')
    expect(source).not.toContain('Plaćanje uspješno')
    expect(source).not.toContain('Pristup je aktiviran')
  })
})
