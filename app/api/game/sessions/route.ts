import { NextResponse } from 'next/server'
import { isGameModeEnabled } from '@/lib/config/featureFlags'
import { buildCroatianGameManifest } from '@/lib/game-mode/session'
import { signGameManifest } from '@/lib/game-mode/signing'
import { optionalGameAdmin, requireGameUser } from '@/lib/game-mode/server'
import type { GameRecipe } from '@/lib/game-mode/types'
import { migrateLegacyCroatianProgress } from '@/lib/game-mode/migrate-legacy'
import { hashSeed } from '@/lib/game-mode/seeded'

const RECIPES = new Set<GameRecipe>(['quick_review', 'mistake_review', 'chapter_boost'])

export async function POST(request: Request) {
  if (!isGameModeEnabled()) {
    return NextResponse.json({ error: 'Game Mode pilot trenutačno nije omogućen.' }, { status: 404 })
  }
  const user = await requireGameUser()
  if (!user) return NextResponse.json({ error: 'Potrebna je prijava.' }, { status: 401 })

  try {
    const body = await request.json()
    if (body?.subjectId !== 'hrv' || !RECIPES.has(body?.recipe)) {
      return NextResponse.json({ error: 'Neispravan predmet ili recept.' }, { status: 400 })
    }
    const manifest = buildCroatianGameManifest({
      recipe: body.recipe,
      chapterSlug: typeof body.chapterSlug === 'string' ? body.chapterSlug : null,
      conceptIds: Array.isArray(body.conceptIds) ? body.conceptIds.slice(0, 10) : [],
      errorQuestionIds: Array.isArray(body.errorQuestionIds) ? body.errorQuestionIds.slice(0, 200) : [],
      accessibility: body.accessibility ?? {},
      questionCount: body.questionCount,
    })
    const admin = optionalGameAdmin()
    if (admin) {
      await migrateLegacyCroatianProgress(admin, user.id)
      const { data: existingAssignment } = await admin.from('ab_assignments').select('variant').eq('experiment_id', 'hrv_runner_pilot').eq('user_id', user.id).maybeSingle()
      const variant = existingAssignment?.variant === 'control' || existingAssignment?.variant === 'runner'
        ? existingAssignment.variant
        : hashSeed(user.id) % 2 === 0 ? 'control' : 'runner'
      if (!existingAssignment) {
        const { error: assignmentError } = await admin.from('ab_assignments').upsert({ experiment_id: 'hrv_runner_pilot', user_id: user.id, variant }, { onConflict: 'experiment_id,user_id' })
        if (assignmentError) throw assignmentError
      }
      manifest.experimentVariant = variant
      if (variant === 'control') manifest.accessibility = { ...manifest.accessibility, semanticMode: true, reducedMotion: true }
      const { error } = await admin.from('game_sessions').insert({
        id: manifest.id,
        user_id: user.id,
        subject_id: 'hrv',
        recipe: manifest.recipe,
        seed: manifest.seed,
        manifest,
        content_version: manifest.contentVersion,
        runtime_version: manifest.runtimeVersion,
      })
      if (error) throw error
    }
    return NextResponse.json({ manifest, token: signGameManifest(manifest) }, { status: 201 })
  } catch (error) {
    console.error('[game/sessions] create failed', error)
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Sesija nije stvorena.' }, { status: 500 })
  }
}
