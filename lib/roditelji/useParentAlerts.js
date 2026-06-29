// Computed alerts — no separate table, derived from activity patterns.
// Returns Alert[] sorted by severity (urgent first).

/**
 * @param {import('./parentContext.jsx').ChildSummary[]} children
 * @returns {import('./parentTypes.js').Alert[]}
 */
export function computeAlerts(children) {
  const alerts = []
  const now    = new Date()

  for (const child of children) {
    const daysSinceActive = child.lastActiveAt
      ? (now - new Date(child.lastActiveAt)) / (1000 * 60 * 60 * 24)
      : Infinity

    // Inactivity alert
    if (daysSinceActive >= 5) {
      alerts.push({
        id:        `inactivity-${child.childId}`,
        type:      'inactivity',
        severity:  daysSinceActive >= 10 ? 'urgent' : 'warning',
        title:     `${child.name} nije bio/la aktivan/na`,
        body:      daysSinceActive === Infinity
          ? `${child.name} još nije koristio/la Maturiraj.`
          : `${child.name} nije učio/la zadnjih ${Math.floor(daysSinceActive)} dana.`,
        actionUrl: `/roditelji/dijete/${child.childId}`,
        childId:   child.childId,
        createdAt: now.toISOString(),
      })
    }

    // Drop in activity vs previous week
    if (
      child.prevWeekMinutes > 60 &&
      child.weekMinutes < child.prevWeekMinutes * 0.5
    ) {
      alerts.push({
        id:        `drop-${child.childId}`,
        type:      'drop',
        severity:  'warning',
        title:     `Pad aktivnosti — ${child.name}`,
        body:      `Ovaj tjedan ${child.weekMinutes}min vs prošli tjedan ${child.prevWeekMinutes}min.`,
        actionUrl: `/roditelji/dijete/${child.childId}`,
        childId:   child.childId,
        createdAt: now.toISOString(),
      })
    }
  }

  // Sort: urgent > warning > info
  const order = { urgent: 0, warning: 1, info: 2 }
  return alerts.sort((a, b) => order[a.severity] - order[b.severity])
}

import { useMemo } from 'react'

export function useParentAlerts(children) {
  return useMemo(() => computeAlerts(children ?? []), [children])
}
