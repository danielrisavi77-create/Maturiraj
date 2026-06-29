// Static Croatian matura deadlines + supplemented by any dynamic data
// Returns Deadline[] sorted by date ASC

const STATIC_DEADLINES = [
  { id: 's1', date: '2026-02-15', title: 'Rok prijave za jesenski rok (rokovi)', body: 'Prijava za ljetni maturalni rok', type: 'deadline' },
  { id: 's2', date: '2026-05-04', title: 'Početak ispita ljetnog roka', body: 'Prva maturalna provjera', type: 'exam' },
  { id: 's3', date: '2026-06-01', title: 'Državna matura — ljetni rok', body: 'Glavni maturalni rok', type: 'exam' },
  { id: 's4', date: '2026-07-01', title: 'Objava rezultata ljetnog roka', body: 'Rezultati državne mature', type: 'result' },
  { id: 's5', date: '2026-08-25', title: 'Državna matura — jesenski rok', body: 'Jesenski maturalni rok', type: 'exam' },
]

/**
 * @returns {{ id: string, date: string, title: string, body: string, type: string, daysLeft: number, urgency: 'passed'|'urgent'|'soon'|'ok' }[]}
 */
export function getDeadlines() {
  const now = new Date()
  return STATIC_DEADLINES
    .map(d => {
      const date     = new Date(d.date)
      const daysLeft = Math.ceil((date - now) / (1000 * 60 * 60 * 24))
      const urgency  =
        daysLeft < 0    ? 'passed' :
        daysLeft <= 7   ? 'urgent' :
        daysLeft <= 30  ? 'soon'   : 'ok'
      return { ...d, daysLeft, urgency }
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date))
}

import { useMemo } from 'react'
export function useParentRokovi() {
  return useMemo(() => getDeadlines(), [])
}
