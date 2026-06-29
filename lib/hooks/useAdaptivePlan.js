// lib/hooks/useAdaptivePlan.js
'use client'
import { createClient } from '@/lib/supabase/client'

const MATURA_DATE = new Date('2026-06-01')

function daysUntil(date) {
  return Math.max(0, Math.ceil((date - new Date()) / (1000 * 60 * 60 * 24)))
}

function weeksUntil(date) {
  return Math.ceil(daysUntil(date) / 7)
}

/**
 * Analizira plan i vraća adaptivne preporuke.
 * Poziva se nakon što korisnik označi tjedan kao završen.
 *
 * @param {object[]} weeks        — svi tjedni plana (plan_weeks)
 * @param {object[]} subjects     — predmeti iz plana (plan.subjects)
 * @param {number}   hoursPerWeek — tempo (plan.hours_per_week)
 * @returns {object} { status, warnings, remedialsNeeded, adjustedHours, actions }
 */
export function analyzeplan(weeks, subjects, hoursPerWeek) {
  const tjednaLeft    = weeksUntil(MATURA_DATE)
  const completed     = weeks.filter(w => w.completed)
  const remaining     = weeks.filter(w => !w.completed)
  const totalWeeks    = weeks.length
  const completedPct  = Math.round((completed.length / totalWeeks) * 100)

  // ── Koliko tjedana korisnik kasni ──
  const planCreatedAt   = weeks[0]?.created_at ? new Date(weeks[0].created_at) : new Date()
  const daysElapsed     = Math.ceil((new Date() - planCreatedAt) / (1000 * 60 * 60 * 24))
  const weeksElapsed    = Math.max(1, Math.ceil(daysElapsed / 7))
  const expectedPct     = Math.min(100, Math.round((weeksElapsed / totalWeeks) * 100))
  const behindBy        = Math.max(0, expectedPct - completedPct)
  const behindWeeks     = Math.round((behindBy / 100) * totalWeeks)

  // ── Analiza po predmetima ──
  const subjectStats = {}
  subjects.forEach(s => {
    const subjectWeeks     = weeks.filter(w => w.subject_id === s.id)
    const subjectCompleted = subjectWeeks.filter(w => w.completed)
    subjectStats[s.id] = {
      name:       s.name,
      color:      s.color,
      sym:        s.sym,
      tezina:     s.tezina || 1.0,
      total:      subjectWeeks.length,
      completed:  subjectCompleted.length,
      pct:        subjectWeeks.length
        ? Math.round((subjectCompleted.length / subjectWeeks.length) * 100)
        : 0,
    }
  })

  // ── Predmeti koji zaostaju (teži predmeti s manjim napretkom) ──
  const laggingSubjects = Object.values(subjectStats)
    .filter(s => s.tezina >= 1.1 && s.pct < 40 && s.total > 0)
    .sort((a, b) => (b.tezina - a.tezina))

  // ── Prijedlog remedijalnih tjedana ──
  const remedialsNeeded = laggingSubjects.slice(0, 3).map(s => ({
    subject_id:   subjects.find(x => x.name === s.name)?.id,
    subject_name: s.name,
    sym:          s.sym,
    color:        s.color,
    reason:       `${s.name} zaostaje — samo ${s.pct}% završeno, a težina je ${s.tezina}`,
  }))

  // ── Prilagodba sati ──
  let adjustedHours = hoursPerWeek
  let hoursWarning  = null

  if (behindWeeks >= 3 && tjednaLeft > 0) {
    // Korisnik jako zaostaje — predloži povećanje tempa
    const catchUpHours = Math.ceil((behindWeeks * hoursPerWeek) / Math.max(1, tjednaLeft))
    adjustedHours = Math.min(20, hoursPerWeek + catchUpHours)
    if (adjustedHours > hoursPerWeek) {
      hoursWarning = `Da sustigneš zaostatak, preporučujemo ${adjustedHours}h/tjedan umjesto ${hoursPerWeek}h.`
    }
  } else if (tjednaLeft < 4 && remaining.length > tjednaLeft) {
    // Matura blizu, previše tjedana ostalo — smanji scope
    adjustedHours = Math.min(20, hoursPerWeek + 2)
    hoursWarning = `Matura je za ${tjednaLeft} tjedna, a ostalo je ${remaining.length} tjedana gradiva. Povećaj tempo!`
  }

  // ── Warnings ──
  const warnings = []

  if (behindWeeks >= 2) {
    warnings.push({
      type:    'behind',
      level:   behindWeeks >= 4 ? 'critical' : 'warning',
      message: behindWeeks >= 4
        ? `⚠️ Kasniš ${behindWeeks} tjedana za planom — potrebna hitna korekcija!`
        : `📌 Kasniš ${behindWeeks} tjedna za planom. Pokušaj nadoknaditi ovaj tjedan.`,
    })
  }

  if (laggingSubjects.length > 0) {
    warnings.push({
      type:    'subject_lag',
      level:   'info',
      message: `📚 ${laggingSubjects.map(s => s.name).join(', ')} ${laggingSubjects.length === 1 ? 'zaostaje' : 'zaostaju'} — razmisli o remedijalnom tjednu.`,
    })
  }

  if (hoursWarning) {
    warnings.push({
      type:    'hours',
      level:   'warning',
      message: `⏱ ${hoursWarning}`,
    })
  }

  if (tjednaLeft <= 2 && remaining.length > 0) {
    warnings.push({
      type:    'urgent',
      level:   'critical',
      message: `🚨 Matura je za ${tjednaLeft} ${tjednaLeft === 1 ? 'tjedan' : 'tjedna'}! Fokusiraj se samo na najvažnije teme.`,
    })
  }

  // ── Status ──
  const status = behindWeeks === 0 && warnings.length === 0
    ? 'on_track'
    : behindWeeks >= 4 || (tjednaLeft <= 2 && remaining.length > 0)
    ? 'critical'
    : 'behind'

  return {
    status,
    warnings,
    remedialsNeeded,
    adjustedHours,
    behindWeeks,
    completedPct,
    expectedPct,
    tjednaLeft,
    laggingSubjects,
  }
}

/**
 * Primijeni adaptivne promjene na plan u bazi:
 * - Ubaci remedijalne tjedne za predmete koji zaostaju
 * - Ažuriraj sate za preostale tjedne ako je tempo prevelik/premali
 */
export async function applyAdaptiveChanges({ planId, userId, weeks, analysis, subjects }) {
  const supabase = createClient()
  const changes  = []

  // ── 1. Ubaci remedijalne tjedne ──
  if (analysis.remedialsNeeded.length > 0) {
    const remaining     = weeks.filter(w => !w.completed)
    const maxWeekNum    = Math.max(...weeks.map(w => w.week_num))

    for (const remedial of analysis.remedialsNeeded) {
      // Provjeri nije li već ubačen remedijalni za ovaj predmet
      const alreadyExists = weeks.some(
        w => w.is_remedial && w.subject_id === remedial.subject_id && !w.completed
      )
      if (alreadyExists) continue

      // Ubaci remedijalni tjedan nakon zadnjeg nezavršenog tjedna tog predmeta
      const lastSubjectWeek = remaining
        .filter(w => w.subject_id === remedial.subject_id)
        .sort((a, b) => b.week_num - a.week_num)[0]

      const insertAfter = lastSubjectWeek?.week_num || maxWeekNum

      // Pomakni sve tjedne nakon insertAfter za +1
      const weeksToShift = weeks.filter(w => !w.completed && w.week_num > insertAfter)
      for (const w of weeksToShift) {
        await supabase
          .from('plan_weeks')
          .update({ week_num: w.week_num + 1 })
          .eq('id', w.id)
      }

      // Upiši remedijalni tjedan
      const subjectData = subjects.find(s => s.id === remedial.subject_id)
      const { error } = await supabase
        .from('plan_weeks')
        .insert({
          plan_id:      planId,
          user_id:      userId,
          week_num:     insertAfter + 1,
          subject_id:   remedial.subject_id,
          subject_name: remedial.subject_name,
          topic:        `Remedijalno ponavljanje — slabe točke i analiza pogrešaka`,
          hours:        Math.min(analysis.adjustedHours, 4),
          note:         'Adaptivno ubačen tjedan na temelju analize napretka.',
          is_remedial:  true,
          completed:    false,
        })

      if (!error) {
        changes.push(`Ubačen remedijalni tjedan za ${remedial.subject_name}`)
      }
    }
  }

  // ── 2. Prilagodi sate za preostale tjedne ──
  if (analysis.adjustedHours !== null) {
    const remaining = weeks.filter(w => !w.completed && !w.is_remedial)
    for (const w of remaining) {
      const subjectData  = subjects.find(s => s.id === w.subject_id)
      const tezina       = subjectData?.tezina || 1.0
      const baseHours    = Math.max(1, Math.round(analysis.adjustedHours / Math.min(subjects.length, 3)))
      const adjustedSati = Math.min(analysis.adjustedHours, Math.round(baseHours * tezina))

      if (adjustedSati !== w.hours) {
        await supabase
          .from('plan_weeks')
          .update({ hours: adjustedSati })
          .eq('id', w.id)
      }
    }
    if (analysis.adjustedHours > (weeks[0]?.hours || 0)) {
      changes.push(`Sati prilagođeni na ${analysis.adjustedHours}h/tjedan`)
    }
  }

  return changes
}