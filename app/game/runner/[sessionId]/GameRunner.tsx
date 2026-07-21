'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { GameManifest } from '@/lib/game-mode/types'
import { trackEvent } from '@/lib/analytics/tracker'

type StoredSession = { manifest: GameManifest; token: string }
type Attempt = { questionId: string; answerId: string; mode: 'runner' | 'post_check'; classification: 'learning'; responseMs: number; sequence: number }

function CityCanvas({ active, reduced }: { active: boolean; reduced: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reduced) return
    const context = canvas.getContext('2d')
    if (!context) return
    let frame = 0, raf = 0
    const draw = () => {
      const rect = canvas.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1)
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) { canvas.width = rect.width * dpr; canvas.height = rect.height * dpr }
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      const gradient = context.createLinearGradient(0, 0, 0, rect.height)
      gradient.addColorStop(0, '#17224d'); gradient.addColorStop(1, '#10080b')
      context.fillStyle = gradient; context.fillRect(0, 0, rect.width, rect.height)
      context.fillStyle = '#261720'
      for (let x = -80; x < rect.width + 80; x += 74) {
        const shift = active ? (frame * 3) % 74 : 0
        context.fillRect(x - shift, rect.height - 72, 48, 72)
        context.fillStyle = '#f5c85b'; context.fillRect(x + 10 - shift, rect.height - 50, 6, 8); context.fillStyle = '#261720'
      }
      context.fillStyle = '#ff6b35'; context.beginPath(); context.arc(rect.width * .28, rect.height - 48 - (active ? Math.abs(Math.sin(frame / 4)) * 12 : 0), 13, 0, Math.PI * 2); context.fill()
      frame += 1; raf = requestAnimationFrame(draw)
    }
    draw()
    return () => cancelAnimationFrame(raf)
  }, [active, reduced])
  if (reduced) return null
  return <canvas ref={canvasRef} className="gm-canvas" aria-hidden="true" />
}

export default function GameRunner({ sessionId }: { sessionId: string }) {
  const [stored, setStored] = useState<StoredSession | null>(null)
  const [phase, setPhase] = useState<'briefing' | 'reading' | 'action' | 'feedback' | 'post_check' | 'results'>('briefing')
  const [index, setIndex] = useState(0)
  const [postIndex, setPostIndex] = useState(0)
  const [locked, setLocked] = useState<string | null>(null)
  const [attempts, setAttempts] = useState<Attempt[]>([])
  const [result, setResult] = useState<any>(null)
  const [error, setError] = useState('')
  const startedAt = useRef(0)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const value = sessionStorage.getItem(`maturiraj:game:${sessionId}`)
        if (!value) throw new Error('Sesija nije pronađena. Pokreni novu rundu.')
        setStored(JSON.parse(value))
        const checkpointValue = localStorage.getItem(`maturiraj:game-checkpoint:${sessionId}`)
        if (checkpointValue) {
          const saved = JSON.parse(checkpointValue)
          const savedAttempts = Array.isArray(saved.attempts) ? saved.attempts : []
          setIndex(Math.max(0, Number(saved.questionIndex ?? 0)))
          setPostIndex(Math.max(0, Number(saved.postIndex ?? 0)))
          setAttempts(savedAttempts)
          setLocked(savedAttempts.at(-1)?.answerId ?? null)
          setPhase(saved.phase === 'post_check' ? 'post_check' : 'feedback')
        }
      } catch (caught) {
        setError(caught instanceof Error ? caught.message : 'Sesija nije pronađena.')
      }
    }, 0)
    return () => window.clearTimeout(timer)
  }, [sessionId])

  const manifest = stored?.manifest
  const isPost = phase === 'post_check'
  const question = manifest ? (isPost ? manifest.postCheck[postIndex] : manifest.questions[index]) : null
  const reduced = Boolean(manifest?.accessibility.reducedMotion || manifest?.accessibility.semanticMode || manifest?.experimentVariant === 'control')

  const checkpoint = useCallback((nextAttempts: Attempt[], nextPhase: string) => {
    if (!stored) return
    localStorage.setItem(`maturiraj:game-checkpoint:${sessionId}`, JSON.stringify({ questionIndex: index, postIndex, phase: nextPhase, attempts: nextAttempts }))
    fetch(`/api/game/sessions/${sessionId}/checkpoint`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: stored.token, checkpoint: { questionIndex: index, phase: nextPhase, lockedAnswers: nextAttempts.map((attempt) => ({ questionId: attempt.questionId, answerId: attempt.answerId })) } }) }).catch(() => {})
  }, [stored, sessionId, index, postIndex])

  function choose(answerId: string) {
    if (!question || locked) return
    const next: Attempt = { questionId: question.id, answerId, mode: isPost ? 'post_check' : 'runner', classification: 'learning', responseMs: Date.now() - startedAt.current, sequence: attempts.length }
    const nextAttempts = [...attempts, next]
    trackEvent({ name: 'game_answer_locked', meta: { subject: 'hrv', mode: next.mode, question_index: next.sequence } })
    const nextPhase = isPost ? 'post_check' : 'feedback'
    setLocked(answerId); setAttempts(nextAttempts); checkpoint(nextAttempts, nextPhase)
    if (isPost || reduced) setPhase(nextPhase)
    else { setPhase('action'); window.setTimeout(() => setPhase('feedback'), 700) }
  }

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (!question || locked) return
      const number = Number(event.key)
      if (number >= 1 && number <= question.answers.length) choose(question.answers[number - 1].id)
    }
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  })

  async function complete(nextAttempts = attempts) {
    if (!stored) return
    setError('')
    try {
      const response = await fetch(`/api/game/sessions/${sessionId}/complete`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token: stored.token, attempts: nextAttempts }) })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error || 'Rezultat nije spremljen.')
      localStorage.removeItem(`maturiraj:game-checkpoint:${sessionId}`)
      localStorage.removeItem(`maturiraj:game-pending:${sessionId}`)
      const verifiedRunner = payload.verifiedAttempts?.filter((attempt: any) => attempt.mode === 'runner') ?? []
      const verifiedPost = payload.verifiedAttempts?.filter((attempt: any) => attempt.mode === 'post_check') ?? []
      trackEvent({ name: 'game_session_completed', meta: { subject: 'hrv', variant: stored.manifest.experimentVariant, runner_correct: verifiedRunner.filter((attempt: any) => attempt.correct).length, runner_total: verifiedRunner.length } })
      trackEvent({ name: 'game_post_check_completed', meta: { subject: 'hrv', correct: verifiedPost.filter((attempt: any) => attempt.correct).length, total: verifiedPost.length } })
      setResult(payload); setPhase('results')
    } catch (caught) {
      localStorage.setItem(`maturiraj:game-pending:${sessionId}`, JSON.stringify({ token: stored.token, attempts: nextAttempts }))
      setError(caught instanceof Error ? caught.message : 'Rezultat nije spremljen. Pokušaj je sačuvan na uređaju.')
    }
  }

  function next() {
    if (!manifest) return
    setLocked(null); startedAt.current = Date.now()
    if (isPost) {
      if (postIndex + 1 < manifest.postCheck.length) setPostIndex((value) => value + 1)
      else complete()
    } else if (index + 1 < manifest.questions.length) {
      setIndex((value) => value + 1); setPhase('reading')
    } else if (manifest.postCheck.length) {
      setPhase('post_check'); setPostIndex(0)
    } else complete()
  }

  if (error && !stored) return <main className="gm-shell"><section className="gm-panel"><p className="gm-error">{error}</p><a className="gm-primary" href="/game">Nova runda</a></section></main>
  if (!manifest) return <main className="gm-shell"><p>Učitavanje runde…</p></main>
  if (phase === 'briefing') return <main className="gm-shell"><section className="gm-panel gm-brief"><p className="gm-eyebrow">BRIEFING · {manifest.experimentVariant === 'control' ? 'KLASIČNI NAČIN' : 'RUNNER'}</p><h1>{manifest.recipe === 'chapter_boost' ? 'Chapter Boost' : manifest.experimentVariant === 'control' ? 'Hrvatski kviz' : 'Hrvatski Runner'}</h1><p>{manifest.questions.length} pitanja + {manifest.postCheck.length} kratke provjere. Odgovor se zaključava prije animacije i akcija ne mijenja obrazovni rezultat.</p><button className="gm-primary" onClick={() => { startedAt.current = Date.now(); setPhase('reading') }}>Kreni</button></section></main>
  if (phase === 'results') {
    const runner = result?.verifiedAttempts?.filter((attempt: any) => attempt.mode === 'runner') ?? []
    const post = result?.verifiedAttempts?.filter((attempt: any) => attempt.mode === 'post_check') ?? []
    const mastery = [...(result?.masteryChanges ?? [])].sort((a: any, b: any) => a.mastery - b.mastery)
    const wrongIds = new Set(result?.verifiedAttempts?.filter((attempt: any) => !attempt.correct).map((attempt: any) => attempt.questionId) ?? [])
    const wrongQuestions = [...manifest.questions, ...manifest.postCheck].filter((item) => wrongIds.has(item.id))
    const conceptLabel = (value: string) => value.replace('hrv.', '').replaceAll('_', ' ')
    return <main className="gm-shell"><section className="gm-panel gm-results"><p className="gm-eyebrow">RUNDA ZAVRŠENA</p><h1>{runner.filter((item: any) => item.correct).length}/{runner.length} točno</h1><p>Post-check: {post.filter((item: any) => item.correct).length}/{post.length}</p><h2>Najslabiji koncepti</h2><div className="gm-mastery">{mastery.slice(0, 2).map((item: any) => <div key={item.conceptId}><span>{conceptLabel(item.conceptId)}</span><strong>{Math.round(item.mastery * 100)}%</strong></div>)}</div><h2>Najjači koncepti</h2><div className="gm-mastery">{mastery.slice(-2).reverse().map((item: any) => <div key={item.conceptId}><span>{conceptLabel(item.conceptId)}</span><strong>{Math.round(item.mastery * 100)}%</strong></div>)}</div>{wrongQuestions.length > 0 && <div className="gm-wrong-list"><h2>Ponovi pogrešna pitanja</h2>{wrongQuestions.map((item) => <article key={item.id}><strong>{item.prompt}</strong><p>{item.explanation}</p>{item.chapterSlug && <a href={`/skripte/hrv/${item.chapterSlug}`}>Otvori povezanu skriptu</a>}</article>)}</div>}{result?.nextBestAction && <a className="gm-primary" href={result.nextBestAction.href}>{result.nextBestAction.label}</a>}<a className="gm-secondary" href="/game">Odigraj novu rundu</a></section></main>
  }

  const correct = locked === question?.correctAnswerId
  const showFeedback = locked && (phase === 'feedback' || phase === 'post_check')
  return <main className="gm-runner">
    <header className="gm-runner-head"><a href="/game" aria-label="Izađi iz runde">× Izađi</a><span>{isPost ? `Provjera ${postIndex + 1}/${manifest.postCheck.length}` : `${index + 1}/${manifest.questions.length}`}</span><span>Seed {manifest.seed}</span></header>
    <CityCanvas active={phase === 'action'} reduced={reduced} />
    <section className="gm-question" aria-live="polite">
      {isPost && <p className="gm-eyebrow">POST-CHECK · bez arkade</p>}
      <h1>{question?.prompt}</h1>
      <div className="gm-answers">{question?.answers.map((answer, answerIndex) => <button key={answer.id} disabled={Boolean(locked)} className={locked === answer.id ? 'is-locked' : ''} onClick={() => choose(answer.id)}><kbd>{answerIndex + 1}</kbd><span>{answer.text}</span></button>)}</div>
      {phase === 'action' && <p className="gm-action-note">Odgovor zaključan · prolazak kroz grad…</p>}
      {showFeedback && <div className={`gm-feedback ${correct ? 'is-correct' : 'is-wrong'}`}><strong>{correct ? 'Točno!' : 'Netočno'}</strong><p>{question?.explanation}</p><p className="gm-source">{question?.source.examLabel}{question?.source.year ? ` · ${question.source.year}.` : ''}</p><button className="gm-primary" onClick={next}>{isPost && postIndex + 1 === manifest.postCheck.length ? 'Završi' : 'Sljedeće pitanje'}</button><button className="gm-report" onClick={() => fetch(`/api/game/questions/${encodeURIComponent(question!.id)}/report`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ reason: 'ambiguous' }) })}>Prijavi pitanje</button></div>}
      {error && <p className="gm-error" role="alert">{error} <button onClick={() => complete()}>Pokušaj ponovno</button></p>}
    </section>
  </main>
}
