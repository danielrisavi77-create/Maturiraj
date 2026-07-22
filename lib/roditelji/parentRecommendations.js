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

// ─────────────────────────────────────────────────────────────────────────────
// computePreporuke — Group A "rich child" oblik koji /roditelji/preporuke renderira
// (child.preporuke: { id, ico, naslov, opis, tag, tagC }). Odvojeno od gornjeg
// getRecommendations (Group B ChildSummary shape) jer stranice čitaju drugačija polja.
// Ulaz: "base child" iz parentAdapter (predmeti[], daysInactive, upcoming[], firstName).

function _slug(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}
function _cap(s) {
  const t = String(s || '')
  return t ? t[0].toUpperCase() + t.slice(1) : t
}

export function computePreporuke(child) {
  if (!child) return []
  const out = []
  const ime = child.firstName || 'dijete'
  const predmeti = child.predmeti || []

  const krit = predmeti.filter(p => p.rizik === 'kritično').sort((a, b) => a.prog - b.prog)[0]
  const strong = predmeti.filter(p => p.prog >= 85).sort((a, b) => b.prog - a.prog)[0]

  if (krit) {
    out.push({
      id: `rec-krit-${_slug(krit.name)}`, ico: '⏱️',
      naslov: `20 min ${krit.name.toLowerCase()} svaki dan`,
      opis: `Kratke svakodnevne sesije puno su učinkovitije od maratona vikendom. Pomozite ${ime} postaviti tu rutinu — bez pritiska.`,
      tag: 'rutina', tagC: 'var(--gold)',
    })
  }

  if (typeof child.daysInactive === 'number' && child.daysInactive >= 4) {
    out.push({
      id: 'rec-reengage', ico: '💬',
      naslov: 'Razgovor bez ispitivanja',
      opis: 'Pitajte "što ti je danas bilo zanimljivo?" umjesto "jesi li učio?". Razlika u tome kako se dijete osjeća je ogromna.',
      tag: 'komunikacija', tagC: 'var(--blue)',
    })
  }

  if (strong) {
    out.push({
      id: `rec-praise-${_slug(strong.name)}`, ico: '🎯',
      naslov: `Pohvalite ${strong.name.toLowerCase()} posebno`,
      opis: `Pohvala bez uspoređivanja s drugim predmetima gradi povjerenje. "${strong.name} ti stvarno ide!" — to je dovoljno.`,
      tag: 'motivacija', tagC: 'var(--green)',
    })
  }

  const soon = (child.upcoming || []).find(u => typeof u.daysUntil === 'number' && u.daysUntil >= 0 && u.daysUntil <= 21)
  if (soon) {
    out.push({
      id: 'rec-deadline', ico: '📅',
      naslov: 'Pregledajte rokove zajedno',
      opis: `${soon.opis} je za ${soon.daysUntil} dana. Pregledajte to zajedno — kao tim koji rješava zadatak, ne kao pritisak.`,
      tag: 'organizacija', tagC: 'var(--teal)',
    })
  }

  // Fallback kad nema specifičnih signala — ne ostavljaj prazno bez konteksta.
  if (out.length === 0) {
    out.push({
      id: 'rec-general', ico: '📖',
      naslov: 'Nastavite mirno pratiti',
      opis: `${_cap(ime)} radi svojim ritmom. Redovito i mirno praćenje uz podršku najviše pomaže. Konkretne preporuke pojavljuju se čim podaci pokažu priliku.`,
      tag: 'podrška', tagC: 'var(--blue)',
    })
  }

  return out
}
