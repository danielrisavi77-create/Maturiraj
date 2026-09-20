/**
 * Matchaj scraped row na existing studij_id u bazi.
 * Koristi naziv + fakultet_hint kao ključ, s fuzzy matching fallbackom.
 */

import type { SupabaseClient } from '@supabase/supabase-js'
import type { ScraperDatabase } from './db-types'

export interface StudijLookup {
  id: string
  fakultet_id: string
  fak_short: string
  fak_name: string
  naziv: string
  short: string | null
}

// Manual override mappings za edge case-ove
// Key: "fakultet_hint|studij_naziv" (lowercase)
const OVERRIDES: Record<string, string> = {
  'medicinski fakultet zagreb|medicina': 'mef_zg__medicina',
  'medicinski fakultet zagreb|sanitarno inzenjerstvo': 'mef_zg__sanitarno',
  'medicinski fakultet zagreb|medicinsko-laboratorijska dijagnostika': 'mef_zg__medlab',
  'stomatoloski fakultet zagreb|dentalna medicina': 'sfzg__dentalna',
  'akademija dramske umjetnosti|gluma': 'adu__gluma',
  // ... dodaj kako nailaziš na edge case-ove
}

export function normalize(s: string): string {
  return s.toLowerCase().trim()
    .replace(/č/g, 'c').replace(/ć/g, 'c').replace(/š/g, 's')
    .replace(/đ/g, 'd').replace(/ž/g, 'z')
    .replace(/\s+/g, ' ')
}

/**
 * Levenshtein distance — simple edit distance za fuzzy match
 */
function editDistance(a: string, b: string): number {
  const m = a.length, n = b.length
  if (m === 0) return n
  if (n === 0) return m
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0) as number[])
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

export function matchScrapedRow(
  studijNaziv: string,
  fakultetHint: string,
  studiji: StudijLookup[]
): string | null {
  const key = `${normalize(fakultetHint)}|${normalize(studijNaziv)}`

  // 1) Override check
  if (OVERRIDES[key]) return OVERRIDES[key]

  // 2) Filter candidates by fakultet (fak_name contains hint)
  const hintNorm = normalize(fakultetHint)
  const candidates = studiji.filter(s =>
    normalize(s.fak_name).includes(hintNorm) ||
    hintNorm.includes(normalize(s.fak_short))
  )
  if (candidates.length === 0) return null

  // 3) Exact naziv match
  const exact = candidates.find(c => normalize(c.naziv) === normalize(studijNaziv))
  if (exact) return exact.id

  // 4) Fuzzy — min edit distance; accept if distance ≤ 20% of length
  let best: { id: string; dist: number } | null = null
  const target = normalize(studijNaziv)
  for (const c of candidates) {
    const d = editDistance(normalize(c.naziv), target)
    if (!best || d < best.dist) best = { id: c.id, dist: d }
  }
  if (best && best.dist <= Math.max(2, Math.floor(target.length * 0.2))) {
    return best.id
  }
  return null
}

export async function loadStudijiForMatching(supabase: SupabaseClient<ScraperDatabase>): Promise<StudijLookup[]> {
  const { data, error } = await supabase
    .from('studiji_view')
    .select('id, fakultet_id, fak_short, fak_name, naziv, short')
  if (error) throw error
  return data
}
