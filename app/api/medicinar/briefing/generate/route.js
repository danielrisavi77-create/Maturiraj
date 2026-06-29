import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

function mondayOfWeek(d = new Date()) {
  const result = new Date(d)
  const day = result.getDay()
  const diff = day === 0 ? -6 : 1 - day
  result.setDate(result.getDate() + diff)
  result.setHours(0, 0, 0, 0)
  return result.toISOString().split('T')[0]
}

export async function POST(request) {
  // Auth
  const authHeader = request.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '')
  if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const supabase = createAdminClient()

  // Cron bypass: service role key + X-User-Id header
  let userId
  const isCronCall = token === process.env.SUPABASE_SERVICE_ROLE_KEY
  if (isCronCall) {
    userId = request.headers.get('x-user-id')
    if (!userId) return NextResponse.json({ error: 'Missing X-User-Id' }, { status: 400 })
  } else {
    const { data: { user } } = await supabase.auth.getUser(token)
    if (!user) return NextResponse.json({ error: 'Invalid token' }, { status: 401 })
    userId = user.id
  }

  // Pro check
  const { data: profile } = await supabase.from('profiles').select('plan_type').eq('id', userId).single()
  if (profile?.plan_type !== 'pro') {
    return NextResponse.json({ error: 'Pro required' }, { status: 403 })
  }

  const { studij_id } = await request.json()

  // Weekly idempotency
  const week = mondayOfWeek()
  const { data: existing } = await supabase
    .from('ai_briefings')
    .select('*')
    .eq('user_id', userId)
    .eq('week_of', week)
    .maybeSingle()

  if (existing) {
    return NextResponse.json(existing)
  }

  // Fetch context
  const [studijRes, progressRes, simAttemptsRes, userScoresRes] = await Promise.all([
    supabase.from('studiji_view').select('*').eq('id', studij_id).single(),
    supabase.from('user_predmet_progress').select('*').eq('user_id', userId),
    supabase.from('simulator_attempts').select('score_pct, breakdown, created_at').eq('user_id', userId).eq('status', 'completed').order('created_at', { ascending: false }).limit(5),
    supabase.from('user_prijemni_scores').select('*').eq('user_id', userId).maybeSingle(),
  ])

  const studij = studijRes.data
  const progress = progressRes.data || []
  const attempts = simAttemptsRes.data || []
  const scores = userScoresRes.data

  // Gradi prompt
  const systemPrompt = `Ti si stručni mentor za pripremu prijemnih ispita u Hrvatskoj. Govoriš hrvatski (ti-forma). Tvoj stil je direktan, topao, motivacijski ali realan — nikad lažno pozitivan.

Za student-a koji cilja ${studij.naziv} (${studij.fak_name}), analiziraj njegov trenutni progress i generiraj tjedni plan.

Vrati ISKLJUČIVO valid JSON u ovom formatu (bez markdown fence, bez dodatnog teksta):
{
  "summary": "2-3 rečenice TL;DR — gdje je student i što treba ovaj tjedan.",
  "priorities": [
    {"topic": "Konkretna tema", "why": "Zašto je prioritet (1 rečenica)", "action": "Konkretna akcija za ovaj tjedan"}
  ],
  "encouragement": "1-2 rečenice motivacije — konkretno, ne generično."
}

Daj 2-4 prioriteta, nikad više od 4. Akcije moraju biti specifične i izvedive (npr. "riješi 20 zadataka iz organske kemije" umjesto "uči kemiju").`

  const userPrompt = `Studij cilja: ${studij.naziv} (${studij.fak_short})
Prag 2025.: ${studij.prag_2025 || 'N/A'} bodova
Tip upisa: ${studij.tip_upisa_label}
Predmeti ispita: ${studij.predmeti.join(', ')}

Progress po predmetima:
${progress.length ? progress.map(p => `- ${p.predmet}: gradivo ${p.skripte_total_chapters ? Math.round(p.skripte_viewed_chapters / p.skripte_total_chapters * 100) : 0}%, usvojeno ${p.skripte_total_chapters ? Math.round(p.skripte_mastered_chapters / p.skripte_total_chapters * 100) : 0}%, vježbe ${Math.round(p.vjezbe_accuracy || 0)}%, sim best ${p.simulator_best_score ? Math.round(p.simulator_best_score) + '%' : 'N/A'}`).join('\n') : 'Nema progress podataka još.'}

Slabe teme:
${progress.flatMap(p => (p.weak_topics || []).map(w => `- ${w.topic} (${p.predmet}): ${Math.round(w.accuracy)}% na ${w.attempts} pokušaja`)).join('\n') || 'Nema detektiranih slabih tema.'}

Zadnjih 5 simulatora:
${attempts.length ? attempts.map(a => `- ${Math.round(a.score_pct)}% (${new Date(a.created_at).toLocaleDateString('hr-HR')})`).join('\n') : 'Još nije odrađen nijedan simulator.'}

${scores ? `Uneseni bodovi: prosjeci ${scores.prosjek_r1 || '-'}/${scores.prosjek_r2 || '-'}/${scores.prosjek_r3 || '-'}/${scores.prosjek_r4 || '-'}, Mat A ${scores.mat_a_pct || '-'}%, Hrv A ${scores.hrv_a_pct || '-'}%` : ''}

Generiraj tjedni briefing.`

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1200,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    let parsed
    try {
      parsed = JSON.parse(text.trim())
    } catch {
      // Retry with stripped markdown fence
      const cleaned = text.replace(/```json\n?|```\n?/g, '').trim()
      parsed = JSON.parse(cleaned)
    }

    const inputs_snapshot = {
      studij_id,
      progress_summary: progress.map(p => ({ predmet: p.predmet, accuracy: p.vjezbe_accuracy, sim: p.simulator_best_score })),
      attempts_count: attempts.length,
      generated_at: new Date().toISOString(),
    }

    const { data, error } = await supabase.from('ai_briefings').insert({
      user_id: userId,
      week_of: week,
      target_studij_id: studij_id,
      inputs_snapshot,
      summary: parsed.summary,
      priorities: parsed.priorities,
      encouragement: parsed.encouragement,
      model: 'claude-sonnet-4-6',
      tokens_in: response.usage.input_tokens,
      tokens_out: response.usage.output_tokens,
    }).select().single()

    if (error) throw error
    return NextResponse.json(data)

  } catch (err) {
    console.error('Briefing generation failed:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
