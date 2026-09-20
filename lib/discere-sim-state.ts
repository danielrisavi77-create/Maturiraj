// lib/discere-sim-state.ts
// Cross-device store for the Discere simulator's full DS state (public.discere_sim_state).
// The engine emits DISCERE_SAVE {key,value} on every DS.set; we accumulate those into one
// { [dsKey]: value } blob and upsert it. On load we return the blob to hydrate the engine.
import { createClient } from '@/lib/supabase'

export type SimState = Record<string, unknown>

// The discere_sim_state migration may not be applied yet (table absent). Treat that as a
// soft/expected condition: warn quietly and degrade to localStorage-only — never throw a
// console.error (which trips the Next dev error overlay) for a known-missing schema.
function isMissingSchema(error: any): boolean {
  const code = error?.code
  const msg = (error?.message || '') + (error?.details || '')
  return code === '42P01' || code === 'PGRST205' || code === '42703' ||
    /does not exist|schema cache|could not find the table/i.test(msg)
}

function report(where: string, error: any) {
  if (isMissingSchema(error)) {
    console.warn(`[discere-sim-state] ${where}: table not migrated yet — running localStorage-only`)
  } else {
    console.error(`[discere-sim-state] ${where}`, error)
  }
}

export async function loadSimState(subject = 'mat'): Promise<SimState> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return {}
  const { data, error } = await supabase
    .from('discere_sim_state')
    .select('state')
    .eq('user_id', user.id)
    .eq('subject', subject)
    .maybeSingle()
  if (error) { report('loadSimState', error); return {} }
  return (data?.state as SimState) ?? {}
}

export async function saveSimState(state: SimState, subject = 'mat'): Promise<void> {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return
  const { error } = await supabase
    .from('discere_sim_state')
    .upsert(
      { user_id: user.id, subject, state, updated_at: new Date().toISOString() },
      { onConflict: 'user_id,subject' },
    )
  if (error) report('saveSimState', error)
}

// ── Strict varijante (aditivno; postojeće loadSimState/saveSimState ostaju
// nepromijenjene jer ih dijeli hrvatski simulator) ──
// loadSimState na grešku vraća {}, pa pozivatelj ne može razlikovati "cloud je
// prazan" od "čitanje nije uspjelo" i lokalno stanje može pregaziti cloud.
// Strict varijante nikad ne bacaju, ali jasno razlikuju ta dva slučaja.

export type StrictLoadResult =
  | { ok: true; state: SimState }
  | { ok: false; error: unknown; missingSchema: boolean }

export async function loadSimStateStrict(subject = 'mat'): Promise<StrictLoadResult> {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    // Neprijavljen korisnik nije greška — nema cloud stanja za učitati.
    if (!user) return { ok: true, state: {} }
    const { data, error } = await supabase
      .from('discere_sim_state')
      .select('state')
      .eq('user_id', user.id)
      .eq('subject', subject)
      .maybeSingle()
    if (error) {
      report('loadSimStateStrict', error)
      return { ok: false, error, missingSchema: isMissingSchema(error) }
    }
    return { ok: true, state: (data?.state as SimState) ?? {} }
  } catch (error) {
    report('loadSimStateStrict', error)
    return { ok: false, error, missingSchema: isMissingSchema(error) }
  }
}

export async function saveSimStateStrict(state: SimState, subject = 'mat'): Promise<{ ok: boolean }> {
  try {
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return { ok: false }
    const { error } = await supabase
      .from('discere_sim_state')
      .upsert(
        { user_id: user.id, subject, state, updated_at: new Date().toISOString() },
        { onConflict: 'user_id,subject' },
      )
    if (error) { report('saveSimStateStrict', error); return { ok: false } }
    return { ok: true }
  } catch (error) {
    report('saveSimStateStrict', error)
    return { ok: false }
  }
}
