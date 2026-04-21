import type { Studij, Fakultet } from '@/lib/types/prijemni'
import type { OnboardingPrefs } from './onboardingStore'

const INTERES_MAPPINGS: Record<string, Set<string>> = {
  medicina:    new Set(['mef_zg', 'medri', 'sfzg', 'vef']),
  tehnika:     new Set(['afz', 'fer', 'fsb', 'ttf']),  // proširi po potrebi
  humanistika: new Set(['ffzg', 'erf', 'kif']),
  umjetnost:   new Set(['adu', 'ufzg', 'alu']),
  ekonomija:   new Set(['efzg', 'efri']),
  pravo:       new Set(['pfzg']),
  prirodne:    new Set(['pmf']),
}

export const INTERES_OPTIONS = [
  { key: 'medicina',    label: 'Medicina i zdravstvo', emoji: '🩺' },
  { key: 'tehnika',     label: 'Tehnika i inženjerstvo', emoji: '🔧' },
  { key: 'humanistika', label: 'Humanistika i jezici', emoji: '📚' },
  { key: 'umjetnost',   label: 'Umjetnost i dizajn', emoji: '🎨' },
  { key: 'ekonomija',   label: 'Ekonomija i biznis', emoji: '📊' },
  { key: 'pravo',       label: 'Pravo i društvo', emoji: '⚖️' },
  { key: 'prirodne',    label: 'Prirodne znanosti', emoji: '🧪' },
]

export const RAZRED_OPTIONS = [
  { value: 1 as const, label: '1. razred' },
  { value: 2 as const, label: '2. razred' },
  { value: 3 as const, label: '3. razred' },
  { value: 4 as const, label: '4. razred (matura)' },
]

export const PROSJEK_OPTIONS = [
  { value: 'sub3' as const,  label: 'Manje od 3.0', hint: 'Realnije ciljati lakše upise' },
  { value: '3-4' as const,   label: '3.0 — 4.0',    hint: 'Većina studija u igri' },
  { value: '4-45' as const,  label: '4.0 — 4.5',    hint: 'Većina studija pristupačna' },
  { value: '45+' as const,   label: '4.5 i više',   hint: 'Možeš birati gotovo sve' },
]

export const CITY_OPTIONS = [
  { value: 'svejedno' as const, label: 'Svejedno mi je', emoji: '🌍' },
  { value: 'zg' as const,       label: 'Zagreb',         emoji: '🏛' },
  { value: 'ri' as const,       label: 'Rijeka',         emoji: '⚓' },
  { value: 'st' as const,       label: 'Split',          emoji: '🌊' },
  { value: 'os' as const,       label: 'Osijek',         emoji: '🌾' },
]

const CITY_MAP: Record<string, string> = {
  zg: 'Zagreb', ri: 'Rijeka', st: 'Split', os: 'Osijek',
}

/**
 * Filtrira fakultete na temelju onboarding preferenci.
 * Uvijek vraća barem nešto — fallback na sve ako filter rezultira u 0.
 */
export function personalizeFakulteti(fakulteti: Fakultet[], prefs: OnboardingPrefs): {
  matched: Fakultet[]
  others: Fakultet[]
  hasFiltering: boolean
} {
  if (!prefs.completed_at || prefs.skipped) {
    return { matched: fakulteti, others: [], hasFiltering: false }
  }

  let matched = fakulteti

  // Filter po city
  if (prefs.city_preference && prefs.city_preference !== 'svejedno') {
    const targetCity = CITY_MAP[prefs.city_preference]
    matched = matched.filter(f => f.grad === targetCity)
  }

  // Filter po interesima
  if (prefs.interesi.length > 0) {
    const allowedIds = new Set<string>()
    prefs.interesi.forEach(i => {
      INTERES_MAPPINGS[i]?.forEach(id => allowedIds.add(id))
    })
    if (allowedIds.size > 0) {
      matched = matched.filter(f => allowedIds.has(f.id))
    }
  }

  // Fallback — ako filter premale rezultate
  if (matched.length === 0) {
    return { matched: fakulteti, others: [], hasFiltering: false }
  }

  // Others = fakulteti koji NISU u matched
  const matchedIds = new Set(matched.map(f => f.id))
  const others = fakulteti.filter(f => !matchedIds.has(f.id))

  return { matched, others, hasFiltering: matched.length < fakulteti.length }
}

/**
 * Generira "smart" recommendation za gdje user treba ići dalje.
 */
export function getNextActionRecommendation(prefs: OnboardingPrefs): {
  action: 'matcher' | 'compare' | 'browse'
  label: string
  hint: string
} {
  // Maturanti s prosjekom — primary action je matcher
  if (prefs.razred === 4 && prefs.prosjek_band) {
    return {
      action: 'matcher',
      label: 'Izračunaj svoj match',
      hint: 'Vidi koje fakultete točno možeš upisati',
    }
  }
  // Mlađi razredi — exploration mode
  if (prefs.razred && prefs.razred <= 2) {
    return {
      action: 'browse',
      label: 'Razgledaj fakultete',
      hint: 'Imaš vremena — prvo upoznaj opcije',
    }
  }
  // Treći razred — compare mode
  return {
    action: 'compare',
    label: 'Usporedi top 2-3 izbora',
    hint: 'Pripremi se za odluku ovog ljeta',
  }
}
