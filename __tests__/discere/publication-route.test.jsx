import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('next/navigation', () => ({ notFound: () => { throw new Error('NOT_FOUND') } }))
vi.mock('@/components/discere/common/GenericSubjectApp', () => ({ default: () => null }))
// PlanGate (app/discere/hrvatski/simulator/PlanGate.jsx) pulls in
// lib/hooks/useAuth.js, a plain .js file containing JSX that this test
// environment's transform doesn't parse as JSX outside of .jsx/.tsx files.
// Mock it the same way GenericSubjectApp is mocked above — this test only
// exercises the route's publication-boundary logic, not real auth gating.
vi.mock('@/app/discere/hrvatski/simulator/PlanGate', () => ({ default: ({ children }) => children }))
import CanonicalDiscereSubjectPage from '@/app/discere/[subject]/page'

afterEach(() => vi.unstubAllEnvs())

describe('canonical route publication boundary', () => {
  it('does not expose a QA subject in production by guessing its URL', async () => {
    vi.stubEnv('NODE_ENV', 'production')
    await expect(CanonicalDiscereSubjectPage({ params: Promise.resolve({ subject: 'biologija' }) })).rejects.toThrow('NOT_FOUND')
  })

  it('allows local preview of QA content', async () => {
    vi.stubEnv('NODE_ENV', 'development')
    const page = await CanonicalDiscereSubjectPage({ params: Promise.resolve({ subject: 'biologija' }) })
    // The route wraps GenericSubjectApp in PlanGate for the same real
    // isPaid tier enforcement used elsewhere in Discere (see agents/bugs.md).
    expect(page.props.children.props.subject.id).toBe('bio')
  })

  it.each(['matematika', 'sociologija', 'unknown'])('does not route %s through the canonical app', async (subject) => {
    vi.stubEnv('NODE_ENV', 'development')
    await expect(CanonicalDiscereSubjectPage({ params: Promise.resolve({ subject }) })).rejects.toThrow('NOT_FOUND')
  })
})
