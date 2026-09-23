// lib/sim-progress.ts
// Persists a completed Discere simulator attempt to public.sim_progress.
// Columns mirror Sim.onDone payload exactly (see supabase migration sim_progress).
//
// NOTE: the existing browser client is exported as `createClient` from '@/lib/supabase'
// (there is no `supabase` singleton export), so we instantiate it here.
import { createClient } from '@/lib/supabase'

export type SimResult = {
  examKey: string
  examLabel: string
  razina: 'A' | 'B'
  pct: number
  grade: string
  cor: number
  total: number
  answers: Record<string, unknown>
  qTimes: Record<string, number>
  examMode: boolean
  topic_breakdown: Record<string, { correct: number; total: number; points: number; earned: number }>
  errorTags: unknown
  /**
   * Otisak pokušaja (ADR-001). Preglednik upisuje redak samo kad ocjenjivačka
   * ruta nije odgovorila — a ona je pokušaj možda ipak ocijenila i upisala.
   * S attempt_id djelomični jedinstveni indeks (user_id, attempt_id) tada odbije
   * duplikat; bez njega NULL redak prolazi i pokušaj se broji dvaput (povijest,
   * totalExams, percentil). Neobavezno je: predmeti koji otisak nemaju šalju null.
   */
  attemptId?: string | null
}

export async function saveSimResult(r: SimResult, durationSec?: number, subject = 'mat') {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return
  const { error } = await supabase.from('sim_progress').insert({
    user_id: user.id,
    subject,
    exam_key: r.examKey,
    exam_label: r.examLabel,
    razina: (r.razina === 'A' || r.razina === 'B') ? r.razina : null,
    pct: r.pct,
    grade: r.grade,
    correct: r.cor,
    total: r.total,
    exam_mode: r.examMode,
    answers: r.answers,
    q_times: r.qTimes,
    topic_breakdown: r.topic_breakdown,
    error_tags: (r.errorTags ?? []),
    duration_sec: durationSec ?? null,
    attempt_id: (typeof r.attemptId === 'string' && r.attemptId) ? r.attemptId : null,
  })
  if (error) {
    const code = (error as any)?.code
    const msg = ((error as any)?.message || '') + ((error as any)?.details || '')
    if (code === '42P01' || code === 'PGRST205' || /does not exist|schema cache|could not find the table/i.test(msg)) {
      console.warn('[sim-progress] sim_progress not migrated yet — attempt not persisted')
    } else if (code === '23505') {
      // Jedinstveni indeks (user_id, attempt_id): redak je već upisala
      // ocjenjivačka ruta. To je ispravan ishod, ne kvar — pokušaj je spremljen.
      console.warn('[sim-progress] pokušaj je već spremljen (attempt_id) — preskačem')
    } else {
      console.error('saveSimResult', error)
    }
  }
}
