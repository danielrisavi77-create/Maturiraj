// Rule-based recommendation engine for parent portal.
// Returns a Recommendation[] based on child activity patterns.

/**
 * @param {import('./parentContext.jsx').ChildSummary[]} children
 * @returns {{ id: string, title: string, body: string, actionUrl: string|null, childId: string|null }[]}
 */
export function getRecommendations(children) {
  const recs = []

  for (const child of children) {
    const daysSince = child.lastActiveAt
      ? (Date.now() - new Date(child.lastActiveAt)) / (1000 * 60 * 60 * 24)
      : Infinity

    // No activity ever
    if (daysSince === Infinity) {
      recs.push({
        id:        `onboard-${child.childId}`,
        title:     `Pomozite ${child.name} da počne`,
        body:      'Dijete se još nije prijavilo. Zajedno pregledajte platformu — prvih 15 minuta je najvažnijih.',
        actionUrl: null,
        childId:   child.childId,
      })
      continue
    }

    // Prolonged inactivity — pep talk
    if (daysSince >= 5) {
      recs.push({
        id:        `reactivate-${child.childId}`,
        title:     `Potaknite ${child.name} da nastavi`,
        body:      'Kratka podrška bez pritiska — pitajte što im je najteže i predložite konkretni predmet za danas.',
        actionUrl: `/roditelji/dijete/${child.childId}`,
        childId:   child.childId,
      })
      continue
    }

    // Good streak — reinforce
    if (child.weekMinutes > 300) {
      recs.push({
        id:        `reinforce-${child.childId}`,
        title:     `${child.name} radi odlično — nastavite podržavati`,
        body:      `${child.weekMinutes} minuta učenja ovaj tjedan. Ohrabrujuća riječ sada znači puno.`,
        actionUrl: null,
        childId:   child.childId,
      })
    }

    // Low checklist completion
    if (child.checklistTotal > 0 && child.checklistDone / child.checklistTotal < 0.3) {
      recs.push({
        id:        `checklist-${child.childId}`,
        title:     `Checklist prijave za ${child.name}`,
        body:      `${child.checklistDone}/${child.checklistTotal} administrativnih koraka završeno. Preostale stavke imaju rokove!`,
        actionUrl: `/roditelji/dijete/${child.childId}`,
        childId:   child.childId,
      })
    }
  }

  // General recommendation if nothing else
  if (recs.length === 0 && children.length > 0) {
    recs.push({
      id:        'general-1',
      title:     'Pitajte dijete o planu učenja',
      body:      'Tjedni razgovor o ciljevima — ne ispitivanje — poboljšava motivaciju i smanjuje anksioznost.',
      actionUrl: null,
      childId:   null,
    })
  }

  return recs
}

import { useMemo } from 'react'
export function useParentRecommendations(children) {
  return useMemo(() => getRecommendations(children ?? []), [children])
}
