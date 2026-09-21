// lib/discere-access.ts
// Decides which exam keys a given tier may open, per Prirodni-family subject.
//   free     → demo-flagged exams, or (fallback) the newest exam per razina
//   standard → all exams
//   pro      → all exams
import matIndex from '@/content/simulator/mat/index.json'

type Tier = 'free' | 'standard' | 'pro'
export type PrirodniSubject = 'mat' | 'fiz' | 'kem' | 'bio'

// Explicit per-subject map (mirrors content/simulator/mat/exam-loaders.ts's
// explicit-map convention) — add an entry here as each new subject's
// index.json is authored; a subject with no entry yet has no exams to gate.
const INDEXES: Partial<Record<PrirodniSubject, { exams: any[] }>> = {
  mat: matIndex,
}

export function allowedExamKeys(tier: Tier, subject: PrirodniSubject = 'mat'): Set<string> {
  const index = INDEXES[subject]
  if (!index) return new Set()
  if (tier !== 'free') return new Set(index.exams.map((e: any) => e.key))
  const flagged = index.exams.filter((e: any) => e.demo)
  const pool = flagged.length ? flagged : pickNewestPerRazina(index.exams)
  return new Set(pool.map((e: any) => e.key))
}

function pickNewestPerRazina(ex: any[]) {
  const n: Record<string, any> = {}
  for (const e of ex) if (!n[e.razina] || e.key > n[e.razina].key) n[e.razina] = e
  return Object.values(n)
}

// --- Canonical-registry (lib/discere/subject-registry.js) tier gating ---
// bio/fiz/kem/pov/geo/etc. go through the generic Discere engine
// (components/discere/common/GenericSubjectApp) instead of MatEngineCore's
// SUBJECT singleton, so they don't use the PrirodniSubject/INDEXES map
// above. They still need the SAME real entitlement semantics fixed in
// useAuth (see agents/bugs.md): `isPaid` — not a destructured `profile` —
// gates all of Discere, `isPro` gates Pro-only features. This is enforced
// at the route boundary by <PlanGate> (app/discere/hrvatski/simulator/PlanGate.jsx,
// reused by app/discere/[subject]/page.jsx) which reads `isPaid` straight
// from useAuth(); canAccessCanonicalSubject exists so any code that needs to
// answer "can this tier open this canonical subject" without mounting a
// component (e.g. server-side checks, tests) can reuse one source of truth
// instead of re-deriving it.
//
// `freeExam` is the free-exam policy: a real, timed exam is free for every
// logged-in user, so the tier question only applies to everything else
// (practice, and the locked results breakdown). Callers that gate practice or
// analysis leave it false.
export function canAccessCanonicalSubject(
  isPaid: boolean,
  subjectStatus: 'active' | 'qa' | 'soon',
  freeExam = false,
): boolean {
  if (!isPaid && !freeExam) return false
  if (subjectStatus === 'soon') return false
  // 'qa' subjects (e.g. Biologija) are additionally restricted to
  // non-production at the route level (app/discere/[subject]/page.jsx) —
  // this helper only answers the tier question, not the environment one.
  return subjectStatus === 'active' || subjectStatus === 'qa'
}
