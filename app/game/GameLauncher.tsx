'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/hooks/useAuth'
import type { GameRecipe } from '@/lib/game-mode/types'
import { trackEvent } from '@/lib/analytics/tracker'

const RECIPES: Array<{ id: GameRecipe; title: string; description: string; icon: string }> = [
  { id: 'quick_review', title: 'Brzo ponavljanje', description: '10 pitanja, oko 5 minuta', icon: '⚡' },
  { id: 'mistake_review', title: 'Ponovi pogreške', description: 'Pogrešna pitanja i srodni koncepti', icon: '↻' },
  { id: 'chapter_boost', title: 'Chapter Boost', description: 'Pitanja iz otvorenog poglavlja', icon: '📖' },
]

function legacyErrorIds() {
  try {
    const data = JSON.parse(localStorage.getItem('discere_hrv_user') || '{}')
    return Object.values(data.errorTracker || {}).flatMap((entry: any) =>
      entry?.examKey != null && entry?.qid != null ? [`hrv:discere:${entry.examKey}:${entry.qid}`] : []
    )
  } catch {
    return []
  }
}

export default function GameLauncher({ initialRecipe, chapterSlug }: { initialRecipe?: string; chapterSlug?: string }) {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()
  const defaultRecipe: GameRecipe = RECIPES.some((recipe) => recipe.id === initialRecipe) ? initialRecipe as GameRecipe : chapterSlug ? 'chapter_boost' : 'quick_review'
  const [recipe, setRecipe] = useState<GameRecipe>(defaultRecipe)
  const [motorAssist, setMotorAssist] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [semanticMode, setSemanticMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function start() {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/game/sessions', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subjectId: 'hrv', recipe, chapterSlug: recipe === 'chapter_boost' ? chapterSlug : null,
          errorQuestionIds: recipe === 'mistake_review' ? legacyErrorIds() : [],
          accessibility: { motorAssist, reducedMotion, semanticMode },
        }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error || 'Runda nije pokrenuta.')
      trackEvent({ name: 'game_session_started', meta: { subject: 'hrv', recipe, variant: payload.manifest.experimentVariant, question_count: payload.manifest.questions.length } })
      sessionStorage.setItem(`maturiraj:game:${payload.manifest.id}`, JSON.stringify(payload))
      router.push(`/game/runner/${payload.manifest.id}`)
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Runda nije pokrenuta.')
    } finally {
      setLoading(false)
    }
  }

  if (authLoading) return <main className="gm-shell"><p>Učitavanje…</p></main>
  if (!user) return <main className="gm-shell"><section className="gm-panel"><h1>Prijavi se za Game Mode</h1><a className="gm-primary" href="/prijava?redirect=/game">Prijava</a></section></main>

  return <main className="gm-shell">
    <section className="gm-launch">
      <p className="gm-eyebrow">GAME MODE · HRVATSKI</p>
      <h1>Matura City</h1>
      <p className="gm-lead">Kratke runde iz provjerenih Discere pitanja. Rezultat ovisi samo o znanju — ne o brzini ili motorici.</p>
      <div className="gm-recipes" role="radiogroup" aria-label="Vrsta runde">
        {RECIPES.map((item) => <button key={item.id} type="button" role="radio" aria-checked={recipe === item.id} className={`gm-recipe ${recipe === item.id ? 'is-selected' : ''}`} onClick={() => setRecipe(item.id)} disabled={item.id === 'chapter_boost' && !chapterSlug}>
          <span aria-hidden="true">{item.icon}</span><strong>{item.title}</strong><small>{item.id === 'chapter_boost' && !chapterSlug ? 'Pokreće se iz hrvatske skripte' : item.description}</small>
        </button>)}
      </div>
      <fieldset className="gm-access"><legend>Pristupačnost</legend>
        <label><input type="checkbox" checked={motorAssist} onChange={(event) => setMotorAssist(event.target.checked)} /> Motor-assist</label>
        <label><input type="checkbox" checked={reducedMotion} onChange={(event) => setReducedMotion(event.target.checked)} /> Bez akcijske animacije</label>
        <label><input type="checkbox" checked={semanticMode} onChange={(event) => setSemanticMode(event.target.checked)} /> Samo semantički kviz</label>
      </fieldset>
      {error && <p className="gm-error" role="alert">{error}</p>}
      <button className="gm-primary" type="button" onClick={start} disabled={loading}>{loading ? 'Pripremam rundu…' : 'Pokreni rundu'}</button>
      <p className="gm-note">8–12 pitanja · možeš izaći u svakom trenutku · ista vrijednost nagrada u svim načinima</p>
    </section>
  </main>
}
