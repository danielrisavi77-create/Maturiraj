import { NextResponse } from 'next/server'
import { getCroatianQuestion } from '@/lib/game-mode/hrv-registry'
import { optionalGameAdmin, requireGameUser } from '@/lib/game-mode/server'

const REASONS = new Set(['incorrect', 'outdated', 'ambiguous', 'other'])

export async function POST(request: Request, context: { params: Promise<{ questionId: string }> }) {
  const user = await requireGameUser()
  if (!user) return NextResponse.json({ error: 'Potrebna je prijava.' }, { status: 401 })
  const { questionId } = await context.params
  if (!getCroatianQuestion(questionId)) return NextResponse.json({ error: 'Pitanje ne postoji.' }, { status: 404 })
  const body = await request.json()
  const reason = REASONS.has(body?.reason) ? body.reason : 'other'
  const details = typeof body?.details === 'string' ? body.details.trim().slice(0, 1000) : null
  try {
    const admin = optionalGameAdmin()
    if (admin) {
      const { error } = await admin.from('game_question_reports').insert({ user_id: user.id, question_id: questionId, reason, details })
      if (error) throw error
    }
    return NextResponse.json({ ok: true }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Prijava nije spremljena.' }, { status: 500 })
  }
}
