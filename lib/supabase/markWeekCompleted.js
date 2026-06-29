import { createClient } from '@/lib/supabase/client'

/**
 * Označi tjedan kao riješen u Supabase bazi.
 * @param {string} weekId - ID tjedna (plan_weeks.id)
 * @param {number} hours - Broj sati (opcionalno)
 * @returns {Promise<null|Error>} null ako je uspješno, error objekt ako nije
 */
export async function markWeekCompleted(weekId, hours = 0) {
  try {
    const supabase = createClient()
    const { error } = await supabase
      .from('plan_weeks')
      .update({
        completed: true,
        completed_at: new Date().toISOString(),
        hours
      })
      .eq('id', weekId)
    if (error) throw error
    return null
  } catch (err) {
    console.error('markWeekCompleted error:', err)
    return err
  }
}
