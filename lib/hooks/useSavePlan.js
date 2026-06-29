// lib/hooks/useSavePlan.js
'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { buildFreePlan, buildProPlan } from '@/app/plan-ucenja/lib/planGenerator'

export function useSavePlan() {
  const [saving,  setSaving]  = useState(false)
  const [error,   setError]   = useState(null)
  const [savedId, setSavedId] = useState(null)
  const supabase = createClient()

  /**
   * Spremi plan u bazu.
   * @param {object} opts
   * @param {string}   opts.userId           - ID korisnika (iz useAuth)
   * @param {object[]} opts.selectedSubjects  - [{id, name, color, sym, tezina}]
   * @param {number}   opts.satiTjedno
   * @param {number}   opts.tjednaDoMature
   * @param {'free'|'pro'} opts.planType
   * @returns {Promise<{planId: string|null, error: string|null}>}
   */
  const savePlan = async ({ userId, selectedSubjects, satiTjedno, tjednaDoMature, planType = 'free' }) => {
    setSaving(true)
    setError(null)

    try {
      // userId se prosljeđuje iz komponente (useAuth) — nema auth network poziva
      if (!userId) throw new Error('Nisi prijavljen.')
      const user = { id: userId }

      // 2. Deaktiviraj prethodni aktivni plan
      await supabase
        .from('study_plans')
        .update({ is_active: false })
        .eq('user_id', user.id)
        .eq('is_active', true)

      // 3. Kreiraj novi plan
      const { data: plan, error: planErr } = await supabase
        .from('study_plans')
        .insert({
          user_id:        user.id,
          title:          `Plan mature ${new Date().getFullYear()}`,
          subjects:       selectedSubjects,
          hours_per_week: satiTjedno,
          plan_type:      planType,
          matura_date:    '2026-06-01',
          is_active:      true,
        })
        .select('id')
        .single()

      if (planErr) throw planErr

      // 4. Generiraj tjedne
      const weeks = planType === 'pro'
        ? buildProPlan(selectedSubjects, satiTjedno, Math.min(tjednaDoMature, 20))
        : buildFreePlan(selectedSubjects, satiTjedno, Math.min(tjednaDoMature, 20))

      // 5. Upiši sve tjedne (batch insert)
      const weekRows = weeks.map(w => ({
        plan_id:      plan.id,
        user_id:      user.id,
        week_num:     w.tjedan,
        subject_id:   selectedSubjects.find(s => s.name === w.predmet)?.id ?? w.predmet,
        subject_name: w.predmet,
        topic:        w.tema,
        hours:        w.sati,
        note:         w.note,
        is_remedial:  false,
        completed:    false,
      }))

      const { error: weeksErr } = await supabase
        .from('plan_weeks')
        .insert(weekRows)

      if (weeksErr) throw weeksErr

      setSavedId(plan.id)
      return { planId: plan.id, error: null }

    } catch (e) {
      const msg = e?.message || 'Greška pri spremanju plana.'
      setError(msg)
      return { planId: null, error: msg }
    } finally {
      setSaving(false)
    }
  }

  return { savePlan, saving, error, savedId }
}