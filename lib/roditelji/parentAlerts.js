// lib/roditelji/parentAlerts.js
// ─────────────────────────────────────────────────────────────────────────────
// Rule-based izračun roditeljskih OBAVIJESTI iz stvarnih podataka djeteta.
// Arhitektura (agents/RODITELJI_ARCHITECTURE.md §6.4) predviđa computed alerts —
// nema alerts tablice, sve se računa iz aktivnosti/napretka na klijentu.
//
// Ulaz: "base child" kojeg gradi parentAdapter (predmeti[], daysInactive,
// weekMinutes/prevWeekMinutes, upcoming[], firstName).
// Izlaz: obavijesti[] u obliku koji stranice VEĆ renderiraju:
//   { id, tip:'warn'|'info'|'good', read:false, ico, naslov, opis, datum, akcija }

function slug(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
}

function hours(min) {
  return Math.round((Number(min) || 0) / 60 * 10) / 10
}

export function computeObavijesti(child) {
  if (!child) return []
  const out = []
  const ime = child.firstName || child.name || 'Dijete'
  const di = child.daysInactive
  const cid = child.childId || child.id || 'x'

  // 1) Neaktivnost (≥ 5 dana)
  if (typeof di === 'number' && di >= 5) {
    out.push({
      id: `inactivity-${cid}`, tip: 'warn', read: false, ico: '⚠️',
      naslov: `${di} dana bez aktivnosti`,
      opis: `${ime} nije bio/la aktivan/na ${di} dana. Kratak razgovor bez pritiska često pomaže da se vrati u ritam.`,
      datum: 'danas', akcija: 'Pogledaj plan učenja',
    })
  }

  // 2) Pad aktivnosti vs prošli tjedan (uz smisleni prag prošlog tjedna)
  if (child.prevWeekMinutes > 30 && child.weekMinutes < child.prevWeekMinutes * 0.5) {
    out.push({
      id: `drop-${cid}`, tip: 'warn', read: false, ico: '📉',
      naslov: 'Pad aktivnosti ovaj tjedan',
      opis: `Vrijeme učenja palo je s ~${hours(child.prevWeekMinutes)}h na ~${hours(child.weekMinutes)}h u odnosu na prošli tjedan.`,
      datum: 'ovaj tjedan', akcija: null,
    })
  }

  // 3) Predmeti u kritičnom riziku
  for (const p of child.predmeti || []) {
    if (p.rizik === 'kritično') {
      out.push({
        id: `subj-krit-${slug(p.name)}`, tip: 'warn', read: false, ico: '🔔',
        naslov: `${p.name} — ${p.prog}%`,
        opis: 'Trenutno najslabiji predmet. Redovita kratka vježba (15 min dnevno) najbrže diže rezultat.',
        datum: 'danas', akcija: null,
      })
    }
  }

  // 4) Nadolazeći rokovi (≤ 14 dana)
  for (const u of child.upcoming || []) {
    if (typeof u.daysUntil === 'number' && u.daysUntil >= 0 && u.daysUntil <= 14) {
      out.push({
        id: `deadline-${slug(u.opis)}-${u.daysUntil}`, tip: 'info', read: false, ico: '📅',
        naslov: u.opis,
        opis: `${u.tip === 'rok' ? 'Rok' : 'Ispit'} je za ${u.daysUntil} ${u.daysUntil === 1 ? 'dan' : 'dana'} (${u.datum}).`,
        datum: `za ${u.daysUntil} dana`, akcija: 'Otvori rokovi',
      })
    }
  }

  // 5) Pozitivno — najjači predmet (≥ 85%)
  const strong = (child.predmeti || []).filter(p => p.prog >= 85).sort((a, b) => b.prog - a.prog)[0]
  if (strong) {
    out.push({
      id: `good-${slug(strong.name)}`, tip: 'good', read: false, ico: '✅',
      naslov: `${strong.name} — ${strong.prog}%`,
      opis: 'Odličan i stabilan napredak. Pohvala bez uspoređivanja s drugim predmetima gradi motivaciju.',
      datum: 'ovaj tjedan', akcija: null,
    })
  }

  return out
}
