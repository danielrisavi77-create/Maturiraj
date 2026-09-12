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
