import { createClient } from '@/lib/supabase/client'

export type PlanType = 'free' | 'standard' | 'pro'

export async function getUserPlan(): Promise<PlanType> {
  const supabase = createClient()
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) return 'free'
  const { data } = await supabase
    .from('profiles')
    .select('plan_type')
    .eq('id', session.user.id)
    .single()
  return (data?.plan_type as PlanType) || 'free'
}

// Hard fakulteti — trigger za Medicinar Mode
export const HARD_FAKULTETI = new Set([
  'mef_zg', 'medri', 'sfzg', 'vef', 'mef_os', 'mef_st',
])

export function isHardStudij(studij: { fakultet_id: string }): boolean {
  return HARD_FAKULTETI.has(studij.fakultet_id)
}
