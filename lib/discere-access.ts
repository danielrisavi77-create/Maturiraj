// lib/discere-access.ts
// Decides which exam keys a given tier may open.
//   free     → demo-flagged exams, or (fallback) the newest exam per razina
//   standard → all exams
//   pro      → all exams
import index from '@/content/simulator/mat/index.json'

type Tier = 'free' | 'standard' | 'pro'

export function allowedExamKeys(tier: Tier): Set<string> {
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
