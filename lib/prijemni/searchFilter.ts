import type { Studij, Fakultet } from '@/lib/types/prijemni'
import { daysUntil } from '@/components/prijemni/helpers'

export type SortMode = 'popular' | 'prag_asc' | 'prag_desc' | 'ispit_soon' | 'alpha'

export interface FilterState {
  query: string
  has_kalk: boolean
  prag_band: 'all' | 'pristupacan' | 'srednje' | 'tezak'    // <500 / 500-650 / 650+
  ispit_month: 'all' | 'lipanj' | 'srpanj' | 'kasnije'
  tip_upisa: 'all' | 'klasicni' | 'elim_test' | 'audicija' | 'matura'
  city: 'all' | 'Zagreb' | 'Rijeka' | 'Split' | 'Osijek'
  sort: SortMode
}

export const DEFAULT_FILTER: FilterState = {
  query: '',
  has_kalk: false,
  prag_band: 'all',
  ispit_month: 'all',
  tip_upisa: 'all',
  city: 'all',
  sort: 'popular',
}

// HR diacritics-insensitive normalize
function normalize(s: string): string {
  return s.toLowerCase().trim()
    .replace(/č/g, 'c').replace(/ć/g, 'c').replace(/š/g, 's')
    .replace(/đ/g, 'd').replace(/ž/g, 'z')
    .replace(/\s+/g, ' ')
}

function studijMatchesQuery(studij: Studij, fakultet: Fakultet, q: string): boolean {
  if (!q) return true
  const nq = normalize(q)
  const haystack = [
    studij.naziv, studij.short || '', fakultet.short, fakultet.name, fakultet.grad,
    ...studij.predmeti,
  ].map(normalize).join(' ')
  // Sve riječi query-ja moraju biti u haystacku (AND match)
  return nq.split(' ').every(w => haystack.includes(w))
}

function studijMatchesFilters(studij: Studij, fakultet: Fakultet, f: FilterState): boolean {
  // Has kalk
  if (f.has_kalk && !studij.kalk) return false

  // Prag band
  if (f.prag_band !== 'all') {
    const p = studij.prag_2025
    if (!p) return false
    if (f.prag_band === 'pristupacan' && p >= 500) return false
    if (f.prag_band === 'srednje' && (p < 500 || p >= 650)) return false
    if (f.prag_band === 'tezak' && p < 650) return false
  }

  // Ispit month
  if (f.ispit_month !== 'all') {
    if (!studij.ispit_iso) return false
    const month = new Date(studij.ispit_iso).getMonth() + 1  // 1-12
    if (f.ispit_month === 'lipanj' && month !== 6) return false
    if (f.ispit_month === 'srpanj' && month !== 7) return false
    if (f.ispit_month === 'kasnije' && month <= 7) return false
  }

  // Tip upisa
  if (f.tip_upisa !== 'all' && studij.tip_upisa !== f.tip_upisa) return false

  // City
  if (f.city !== 'all' && fakultet.grad !== f.city) return false

  return true
}

function sortStudiji(items: Array<{ studij: Studij; fakultet: Fakultet }>, mode: SortMode): typeof items {
  const sorted = [...items]
  switch (mode) {
    case 'popular':
      sorted.sort((a, b) => (b.studij.popularnost ?? 0) - (a.studij.popularnost ?? 0))
      break
    case 'prag_asc':
      sorted.sort((a, b) => (a.studij.prag_2025 ?? 99999) - (b.studij.prag_2025 ?? 99999))
      break
    case 'prag_desc':
      sorted.sort((a, b) => (b.studij.prag_2025 ?? -1) - (a.studij.prag_2025 ?? -1))
      break
    case 'ispit_soon': {
      const now = Date.now()
      sorted.sort((a, b) => {
        const ad = a.studij.ispit_iso ? new Date(a.studij.ispit_iso).getTime() - now : Infinity
        const bd = b.studij.ispit_iso ? new Date(b.studij.ispit_iso).getTime() - now : Infinity
        return ad - bd
      })
      break
    }
    case 'alpha':
      sorted.sort((a, b) => a.studij.naziv.localeCompare(b.studij.naziv, 'hr'))
      break
  }
  return sorted
}

/**
 * Apply filter + search + sort. Returns flat lista studija, te grupirano po fakultetima.
 */
export function applyFilters(fakulteti: Fakultet[], filter: FilterState): {
  studiji: Array<{ studij: Studij; fakultet: Fakultet }>
  fakulteti: Fakultet[]
  totalStudiji: number
  totalFakulteti: number
} {
  const allFlat = fakulteti.flatMap(f => f.studiji.map(s => ({ studij: s, fakultet: f })))

  const matching = allFlat.filter(({ studij, fakultet }) =>
    studijMatchesQuery(studij, fakultet, filter.query) &&
    studijMatchesFilters(studij, fakultet, filter)
  )

  const sorted = sortStudiji(matching, filter.sort)

  // Grupiraj po fakultetima (prema prvom appearance)
  const fakIds = new Set(sorted.map(x => x.fakultet.id))
  const filteredFakulteti = fakulteti.filter(f => fakIds.has(f.id))

  return {
    studiji: sorted,
    fakulteti: filteredFakulteti,
    totalStudiji: matching.length,
    totalFakulteti: filteredFakulteti.length,
  }
}

/**
 * Active filter count (bez query) — za badge iznad clear button-a.
 */
export function activeFilterCount(f: FilterState): number {
  let count = 0
  if (f.has_kalk) count++
  if (f.prag_band !== 'all') count++
  if (f.ispit_month !== 'all') count++
  if (f.tip_upisa !== 'all') count++
  if (f.city !== 'all') count++
  if (f.sort !== 'popular') count++
  return count
}
