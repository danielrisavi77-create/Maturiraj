import { NextResponse } from 'next/server'
import { optionalGameAdmin, requireGameUser } from '@/lib/game-mode/server'
import { verifyGameManifest } from '@/lib/game-mode/signing'

export async function PATCH(request: Request, context: { params: Promise<{ sessionId: string }> }) {
  const user = await requireGameUser()
  if (!user) return NextResponse.json({ error: 'Potrebna je prijava.' }, { status: 401 })
  try {
    const { sessionId } = await context.params
    const body = await request.json()
    const manifest = verifyGameManifest(String(body.token ?? ''))
    if (manifest.id !== sessionId) return NextResponse.json({ error: 'Sesija se ne podudara.' }, { status: 400 })
    const checkpoint = {
      questionIndex: Math.max(0, Number(body.checkpoint?.questionIndex ?? 0)),
      phase: String(body.checkpoint?.phase ?? 'reading_question'),
      lockedAnswers: Array.isArray(body.checkpoint?.lockedAnswers) ? body.checkpoint.lockedAnswers.slice(0, 20) : [],
      savedAt: new Date().toISOString(),
    }
    const admin = optionalGameAdmin()
    if (admin) {
      const { error } = await admin.from('game_sessions').update({ checkpoint }).eq('id', sessionId).eq('user_id', user.id)
      if (error) throw error
    }
    return NextResponse.json({ ok: true, checkpoint })
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Checkpoint nije spremljen.' }, { status: 400 })
  }
}
