// lib/roditelji/parentAdapter.js
// ─────────────────────────────────────────────────────────────────────────────
// Pretvara odgovor /api/parent/child-dashboard/[childId] u JEDINSTVENI child objekt
// koji zadovoljava OBA oblika koje portal čita:
//   • Group A (rich): id, firstName, avatar, color, colorBg, ukupno, tjedni, zadaci,
//       satiUkupno, cilj, aktivnost[], predmeti[{name,prog,trend,color,zadaci,sati,rizik}],
//       obavijesti[], preporuke[], upcoming[]
//   • Group B (summary): childId, name, email, planType, status, lastActiveAt,
//       weekMinutes, prevWeekMinutes
// Time postojeće stranice (pregled/dijete/uvidi/obavijesti/preporuke) i noviji
// consumeri (ChildSwitcher/postavke/ParentNav/dijete-[childId]) rade bez promjena.
//
// Polja bez backend-izvora danas (razred/skola/dob, per-subject trend, ukupni sati
// svih vremena) su null/0/neutralno — nikad lažni podaci.

import { computeObavijesti } from './parentAlerts'
import { computePreporuke } from './parentRecommendations'

const CHILD_PALETTE = [
  { color: '#4b7bff', colorBg: 'rgba(75,123,255,.14)' },
  { color: '#7c5cfc', colorBg: 'rgba(124,92,252,.14)' },
  { color: '#34d399', colorBg: 'rgba(52,211,153,.14)' },
  { color: '#fb923c', colorBg: 'rgba(251,146,60,.14)' },
  { color: '#f472b6', colorBg: 'rgba(244,114,182,.14)' },
]
const SUBJECT_COLORS = ['#818cf8', '#fbbf24', '#34d399', '#f87171', '#c084fc', '#60a5fa', '#f472b6', '#2dd4bf']
const HR_MONTHS = ['siječnja', 'veljače', 'ožujka', 'travnja', 'svibnja', 'lipnja', 'srpnja', 'kolovoza', 'rujna', 'listopada', 'studenoga', 'prosinca']

export function adaptChildren(dashboards) {
  return (dashboards || []).filter(Boolean).map((d, i) => adaptChild(d, i))
}

export function adaptChild(dashboard, index = 0) {
  const info = dashboard?.child || {}
  const progress = dashboard?.progress || []
  const targets = dashboard?.targets || []
  const activity = dashboard?.activity || {}
  const daysInactive = dashboard?.days_inactive ?? null
  const pal = CHILD_PALETTE[index % CHILD_PALETTE.length]

  const name = info.name || (info.email ? info.email.split('@')[0] : 'Dijete')
  const firstName = name.split(/\s+/)[0]

  const predmeti = progress.map((p, i) => {
    const prog = subjectProg(p)
    return {
      name: capWords(p.predmet),
      prog,
      trend: 0, // per-subject povijest ne postoji u shemi → neutralno
      color: SUBJECT_COLORS[i % SUBJECT_COLORS.length],
      zadaci: Number(p.vjezbe_total_attempts) || 0,
      sati: 0, // vrijeme po predmetu nije zasebno praćeno
      rizik: subjectRizik(prog),
    }
  }).sort((a, b) => a.prog - b.prog)

  const daily14 = Array.isArray(activity.daily) ? activity.daily : []
  const aktivnost = daily14.slice(-7).map(min => Math.round((Number(min) || 0) / 60 * 10) / 10)
  const satiUkupno = Math.round(daily14.reduce((s, m) => s + (Number(m) || 0), 0) / 60)
  const weekMinutes = Number(activity.week_minutes) || 0
  const prevWeekMinutes = Number(activity.prev_week_minutes) || 0
  const tjedni = (weekMinutes > 0 ? 1 : 0) + (prevWeekMinutes > 0 ? 1 : 0)
  const zadaci = progress.reduce((s, p) => s + (Number(p.vjezbe_total_attempts) || 0), 0)
  const ukupno = predmeti.length
    ? Math.round(predmeti.reduce((s, p) => s + p.prog, 0) / predmeti.length)
    : 0

  const upcoming = buildUpcoming(targets)
  const cilj = targets[0]?.studij?.fak_short || targets[0]?.studij?.naziv || null

  const base = {
    // Group B (summary)
    childId: info.id,
    name,
    email: info.email || null,
    planType: info.plan || 'free',
    status: deriveStatus(daysInactive),
    lastActiveAt: dashboard?.last_active_at || null,
    weekMinutes,
    prevWeekMinutes,
    // Group A (rich)
    id: info.id,
    firstName,
    plan: info.plan || 'free',
    daysInactive,
    razred: null,
    skola: null,
    avatar: initials(name),
    color: pal.color,
    colorBg: pal.colorBg,
    ukupno,
    tjedni,
    zadaci,
    satiUkupno,
    cilj,
    aktivnost,
    predmeti,
    upcoming,
    sections: Array.isArray(activity.sections) ? activity.sections : [],
  }

  base.obavijesti = computeObavijesti(base)
  base.preporuke = computePreporuke(base)
  return base
}

// ── helpers ──────────────────────────────────────────────────────────────────

function subjectProg(p) {
  const total = Number(p.skripte_total_chapters) || 0
  const coverage = total ? (Number(p.skripte_viewed_chapters) || 0) / total * 100 : 0
  const mastery = total ? (Number(p.skripte_mastered_chapters) || 0) / total * 100 : 0
  const accuracy = Number(p.vjezbe_accuracy) || 0
  const sim = Number(p.simulator_best_score) || 0

  const parts = []
  if (total) { parts.push([coverage, 0.2], [mastery, 0.25]) }
  if (Number(p.vjezbe_total_attempts) > 0) parts.push([accuracy, total ? 0.25 : 0.5])
  if (sim > 0) parts.push([sim, total ? 0.3 : 0.5])
  if (parts.length === 0) return 0

  const wsum = parts.reduce((s, [, w]) => s + w, 0)
  const val = parts.reduce((s, [v, w]) => s + v * w, 0) / wsum
  return Math.max(0, Math.min(100, Math.round(val)))
}

function subjectRizik(prog) {
  if (prog < 40) return 'kritično'
  if (prog < 60) return 'pazi'
  return null
}

function deriveStatus(daysInactive) {
  if (daysInactive === null || daysInactive === undefined) return 'inactive'
  if (daysInactive <= 1) return 'active'
  if (daysInactive <= 4) return 'idle'
  return 'inactive'
}

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean)
  if (!parts.length) return '👤'
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase()
}

function capWords(s) {
  return String(s || '').split(/\s+/).map(w => (w ? w[0].toUpperCase() + w.slice(1) : w)).join(' ')
}

function buildUpcoming(targets) {
  const now = Date.now()
  const items = []
  for (const t of targets || []) {
    const s = t?.studij
    if (!s) continue
    const label = s.fak_short || s.naziv || 'Studij'
    addDeadline(items, s.prijava_do_iso, s.prijava_do, `${label} — rok za prijavu`, 'rok', now)
    addDeadline(items, s.ispit_iso, s.ispit, `${label} — ispit`, 'ispit', now)
  }
  return items
    .filter(x => x.daysUntil === null || x.daysUntil >= 0)
    .sort((a, b) => (a.ts ?? Infinity) - (b.ts ?? Infinity))
    .slice(0, 6)
}

function addDeadline(items, iso, fallbackLabel, opis, tip, now) {
  if (!iso && !fallbackLabel) return
  const ts = iso ? new Date(iso).getTime() : NaN
  const valid = !Number.isNaN(ts)
  items.push({
    datum: valid ? formatDatum(ts) : String(fallbackLabel),
    opis,
    tip,
    ts: valid ? ts : null,
    daysUntil: valid ? Math.ceil((ts - now) / 86400000) : null,
  })
}

function formatDatum(ts) {
  const d = new Date(ts)
  return `${d.getDate()}. ${HR_MONTHS[d.getMonth()]}`
}
