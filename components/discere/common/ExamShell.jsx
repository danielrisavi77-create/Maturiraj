'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import QuestionRenderer from './QuestionRenderer'
import { buildResult, scoreExam } from '@/lib/discere/scoring'

const GROUP_TYPES = new Set(['passage_group', 'audio_group', 'media_response'])

function formatTime(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds || 0))
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const seconds = safe % 60
  if (hours > 0) return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function responseForQuestion(question, flatResponses) {
  if (!GROUP_TYPES.has(question.type)) return flatResponses[question.id]
  return Object.fromEntries((question.children || []).map((child) => [child.id, responseForQuestion(child, flatResponses)]))
}

function mergeQuestionResponse(question, nextValue, flatResponses) {
  if (!GROUP_TYPES.has(question.type)) return { ...flatResponses, [question.id]: nextValue }
  let next = { ...flatResponses }
  for (const child of question.children || []) {
    next = mergeQuestionResponse(child, nextValue?.[child.id], next)
  }
  return next
}

export default function ExamShell({ exam, onExit, onComplete }) {
  const [index, setIndex] = useState(0)
  const [responses, setResponses] = useState({})
  const [flagged, setFlagged] = useState([])
  const [confirming, setConfirming] = useState(false)
  const [result, setResult] = useState(null)
  const [remaining, setRemaining] = useState(Math.max(0, exam?.meta?.durationSec || 0))
  const startedAtRef = useRef(new Date().toISOString())

  const questions = exam?.questions || []
  const current = questions[index]
  const progress = useMemo(() => scoreExam(exam, responses), [exam, responses])

  useEffect(() => {
    if (result) return undefined
    const timer = window.setInterval(() => {
      setRemaining((value) => Math.max(0, value - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [result])

  if (!current && !result) {
    return <div role="alert">Ispit nema zadataka.</div>
  }

  function updateCurrent(nextValue) {
    setResponses((previous) => mergeQuestionResponse(current, nextValue, previous))
  }

  function toggleFlag() {
    setFlagged((previous) => previous.includes(current.id)
      ? previous.filter((id) => id !== current.id)
      : [...previous, current.id])
  }

  function submit() {
    const completedAt = new Date().toISOString()
    const nextResult = buildResult({
      exam,
      responses,
      startedAt: startedAtRef.current,
      completedAt,
      flagged,
    })
    setConfirming(false)
    setResult(nextResult)
    onComplete?.(nextResult)
  }

  if (result) {
    return (
      <main style={{minHeight:'100vh', background:'var(--bg)', color:'var(--text)', padding:'32px 18px'}}>
        <div style={{maxWidth:680, margin:'0 auto', background:'var(--s1)', border:'1px solid var(--bdr)', borderRadius:18, padding:24}}>
          <div className="sec-label">Rezultat</div>
          <h1 style={{fontFamily:'var(--fh)', fontSize:34, margin:'8px 0 4px'}}>{result.percent}%</h1>
          <p style={{color:'var(--muted)', marginTop:0}}>{result.earnedPoints} / {result.maxPoints} bodova</p>
          {result.manualPending && <p style={{fontSize:13, color:'var(--muted)'}}>Dio odgovora zahtijeva ručno vrednovanje prema rubrici.</p>}
          <p style={{fontSize:13, color:'var(--muted)'}}>Neodgovoreno: {result.unanswered.length}</p>
          <button type="button" onClick={onExit} aria-label="Izlaz" style={{marginTop:18, padding:'10px 16px', borderRadius:10, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)', cursor:'pointer'}}>Izlaz</button>
        </div>
      </main>
    )
  }

  const currentValue = responseForQuestion(current, responses)
  const isFlagged = flagged.includes(current.id)

  return (
    <main style={{minHeight:'100vh', background:'var(--bg)', color:'var(--text)', padding:'18px'}}>
      <div style={{maxWidth:920, margin:'0 auto'}}>
        <header style={{display:'flex', alignItems:'center', gap:12, flexWrap:'wrap', padding:'12px 0 18px'}}>
          <button type="button" onClick={onExit} aria-label="Izlaz" style={{padding:'8px 12px', borderRadius:9, border:'1px solid var(--bdr)', background:'var(--s1)', color:'var(--text)', cursor:'pointer'}}>← Izlaz</button>
          <div style={{minWidth:0, flex:1}}>
            <strong style={{display:'block'}}>{exam.meta.label}</strong>
            <span style={{fontSize:12, color:'var(--muted)'}}>{index + 1} / {questions.length}</span>
          </div>
          <div aria-label="Preostalo vrijeme" style={{fontVariantNumeric:'tabular-nums', fontWeight:700}}>{formatTime(remaining)}</div>
        </header>

        <div style={{display:'flex', justifyContent:'space-between', gap:12, alignItems:'center', marginBottom:12, color:'var(--muted)', fontSize:12}}>
          <span>Neodgovoreno: {progress.unanswered.length}</span>
          <button type="button" onClick={toggleFlag} aria-label={isFlagged ? 'Ukloni oznaku pitanja' : 'Označi pitanje'} style={{border:'1px solid var(--bdr)', background:isFlagged ? 'var(--s2)' : 'transparent', color:'var(--text)', borderRadius:9, padding:'7px 10px', cursor:'pointer'}}>
            {isFlagged ? '★ Označeno' : '☆ Označi'}
          </button>
        </div>

        <section style={{background:'var(--s1)', border:'1px solid var(--bdr)', borderRadius:16, padding:'20px clamp(16px,4vw,30px)', minHeight:300}}>
          <QuestionRenderer question={current} value={currentValue} onChange={updateCurrent} />
        </section>

        <nav aria-label="Navigacija ispita" style={{display:'flex', gap:10, marginTop:14}}>
          <button type="button" onClick={() => setIndex((value) => Math.max(0, value - 1))} disabled={index === 0} aria-label="Prethodno" style={{padding:'11px 15px', borderRadius:10, border:'1px solid var(--bdr)', background:'var(--s1)', color:'var(--text)'}}>Prethodno</button>
          <div style={{flex:1}}/>
          {index < questions.length - 1 ? (
            <button type="button" onClick={() => setIndex((value) => Math.min(questions.length - 1, value + 1))} aria-label="Sljedeće" style={{padding:'11px 15px', borderRadius:10, border:0, background:'var(--blue)', color:'#fff', fontWeight:700}}>Sljedeće</button>
          ) : (
            <button type="button" onClick={() => setConfirming(true)} aria-label="Predaj ispit" style={{padding:'11px 15px', borderRadius:10, border:0, background:'var(--blue)', color:'#fff', fontWeight:700}}>Predaj ispit</button>
          )}
        </nav>
      </div>

      {confirming && (
        <div role="dialog" aria-modal="true" aria-label="Potvrda predaje" style={{position:'fixed', inset:0, zIndex:200, display:'grid', placeItems:'center', padding:16, background:'rgba(0,0,0,.6)'}}>
          <div style={{width:'min(440px,100%)', background:'var(--s1)', border:'1px solid var(--bdr)', borderRadius:16, padding:20}}>
            <h2 style={{marginTop:0}}>Želiš li predati ispit?</h2>
            <p style={{color:'var(--muted)'}}>Neodgovoreno: {progress.unanswered.length}. Nakon predaje prikazat će se rezultat.</p>
            <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
              <button type="button" onClick={() => setConfirming(false)} style={{padding:'10px 14px'}}>Odustani</button>
              <button type="button" onClick={submit} aria-label="Potvrdi predaju" style={{padding:'10px 14px', background:'var(--blue)', color:'#fff', border:0, borderRadius:9}}>Potvrdi predaju</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
