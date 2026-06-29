import type { Studij } from '@/lib/types/prijemni'

export type UrgencyLevel = 'expired' | 'critical' | 'urgent' | 'soon' | 'normal' | 'none'

export interface StudijUrgency {
  studij_id: string
  deadline_type: 'prijava_do' | 'ispit'
  date: Date
  days_left: number
  level: UrgencyLevel
  label: string  // human-readable ("Prijava zatvara za 6 dana")
}

export function getUrgency(daysLeft: number | null): UrgencyLevel {
  if (daysLeft === null || daysLeft === undefined) return 'none'
  if (daysLeft < 0) return 'expired'
  if (daysLeft <= 3) return 'critical'
  if (daysLeft <= 7) return 'urgent'
  if (daysLeft <= 14) return 'soon'
  return 'normal'
}

export function urgencyColor(level: UrgencyLevel): string {
  switch (level) {
    case 'critical': return '#f87171'
    case 'urgent':   return '#fb923c'
    case 'soon':     return '#e9b446'
    case 'normal':   return 'var(--muted)'
    case 'expired':  return 'var(--muted)'
    default:         return 'var(--muted)'
  }
}

/**
 * Svi aktivni urgency-ji za sve studije, sortirani po najbližem prvom.
 * Uzima u obzir SAMO critical/urgent/soon (≤ 14 dana).
 */
export function getActiveUrgencies(studiji: Studij[]): StudijUrgency[] {
  const now = Date.now()
  const results: StudijUrgency[] = []

  for (const s of studiji) {
    // Prioritet 1: prijava_do (važnije od ispita — deadline za sustav prijava)
    if (s.prijava_do_iso) {
      const d = new Date(s.prijava_do_iso)
      const daysLeft = Math.ceil((d.getTime() - now) / 86400000)
      const level = getUrgency(daysLeft)
      if (['critical', 'urgent', 'soon'].includes(level)) {
        results.push({
          studij_id: s.id,
          deadline_type: 'prijava_do',
          date: d,
          days_left: daysLeft,
          level,
          label: formatDeadlineLabel('prijava_do', daysLeft),
        })
        continue // skip ispit ako je prijava urgent
      }
    }

    // Prioritet 2: ispit (ako prijava nije urgent)
    if (s.ispit_iso) {
      const d = new Date(s.ispit_iso)
      const daysLeft = Math.ceil((d.getTime() - now) / 86400000)
      const level = getUrgency(daysLeft)
      if (['critical', 'urgent', 'soon'].includes(level)) {
        results.push({
          studij_id: s.id,
          deadline_type: 'ispit',
          date: d,
          days_left: daysLeft,
          level,
          label: formatDeadlineLabel('ispit', daysLeft),
        })
      }
    }
  }

  // Sort by days_left asc (najbliži prvi)
  return results.sort((a, b) => a.days_left - b.days_left)
}

export function formatDeadlineLabel(type: 'prijava_do' | 'ispit', daysLeft: number): string {
  const noun = type === 'prijava_do' ? 'Prijava' : 'Ispit'
  if (daysLeft < 0) return `${noun} je prošao`
  if (daysLeft === 0) return `${noun} je danas`
  if (daysLeft === 1) return `${noun} sutra`
  if (daysLeft <= 7) return `${noun} za ${daysLeft} ${daysLeft < 5 ? 'dana' : 'dana'}`
  if (daysLeft <= 14) return `${noun} za ${daysLeft} dana`
  return `${noun} za ~${Math.round(daysLeft / 7)} tjedna`
}

export function formatDateCroatian(d: Date): string {
  return d.toLocaleDateString('hr-HR', { day: 'numeric', month: 'long', year: 'numeric' })
}
