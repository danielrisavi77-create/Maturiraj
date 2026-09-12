'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import QuestionRenderer from './QuestionRenderer'
import ExamReview from './ExamReview'
import AssessmentDialog from './AssessmentDialog'
import { buildResult, scoreExam } from '@/lib/discere/scoring'

import { responseForQuestion, mergeQuestionResponse } from '@/lib/discere/question-responses'
import { advancePlayback, canSubmitListening, emptyPlayback, listeningQuestions } from '@/lib/learning/listening-state'

function formatTime(totalSeconds) {
  const safe = Math.max(0, Math.floor(totalSeconds || 0))
  const hours = Math.floor(safe / 3600)
  const minutes = Math.floor((safe % 3600) / 60)
  const seconds = safe % 60
  if (hours > 0) return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

export default function ExamShell({ exam, onExit, onComplete, session }) {
  const [localIndex, setIndex] = useState(0)
  const [localResponses, setResponses] = useState({})
  const [localFlagged, setFlagged] = useState([])
  const [localNotebooks, setNotebooks] = useState({})
  const [localPlayback, setLocalPlayback] = useState({})
  const localPlaybackRef=useRef({})
  const [mediaStatus,setMediaStatus]=useState({})
  const [confirming, setConfirming] = useState(false)
  const [localResult, setResult] = useState(null)
  const [localRemaining, setRemaining] = useState(Math.max(0, exam?.meta?.durationSec || 0))
  const startedAtRef = useRef(new Date().toISOString())

  const index = session?.view?.index ?? localIndex
  const flagged = session?.view?.flagged ?? localFlagged
  const notebooks = session?.view?.notebooks ?? localNotebooks
  const navigate = next => session?.onNavigate ? session.onNavigate(next) : setIndex(next)
  const responses = session ? session.responses : localResponses
  const result = session ? session.result : localResult
  const remaining = session ? session.remainingSeconds : localRemaining
  const controlled = Boolean(session)

  const questions = exam?.questions || []
  const playback=session?.view?.playback??localPlayback
  const listeningReady=canSubmitListening(questions,playback)&&Object.values(mediaStatus).every(Boolean)
  const current = questions[index]
  const progress = useMemo(() => scoreExam(exam, responses), [exam, responses])

  useEffect(() => {
    if (result || controlled) return undefined
    const timer = window.setInterval(() => {
      setRemaining((value) => Math.max(0, value - 1))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [result, controlled])

  if (!current && !result) {
    return <div role="alert">Ispit nema zadataka.</div>
  }

  function updateCurrent(nextValue) {
    if (session) {
      if (!session.disabled) session.onAnswer(current.id, nextValue)
      return
    }
    setResponses((previous) => mergeQuestionResponse(current, nextValue, previous))
  }

  function toggleFlag() {
    if (session?.onToggleFlag) { session.onToggleFlag(current.id); return }
    setFlagged((previous) => previous.includes(current.id)
      ? previous.filter((id) => id !== current.id)
      : [...previous, current.id])
  }

  function submit() {
    if (!listeningReady) return
    if (session) {
      if (!session.busy) session.onSubmit()
      setConfirming(false)
      return
    }
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
          {result.manualPending ? (
            <>
              <h1 style={{fontFamily:'var(--fh)', fontSize:28, margin:'8px 0 4px'}}>{result.autoPossiblePoints > 0 ? 'Automatski provjereno' : 'Čeka ručnu procjenu'}</h1>
              {result.autoPossiblePoints > 0 && <><p style={{fontSize:22, fontWeight:700, margin:'4px 0'}}>{result.earnedPoints} / {result.autoPossiblePoints} bodova</p>
              <p style={{color:'var(--muted)', marginTop:4}}>Automatski dio: {result.autoPercent}%</p></>}
              <p style={{fontSize:13, color:'var(--muted)'}}>Za ručnu provjeru: {result.manualPossiblePoints} {result.manualPossiblePoints === 1 ? 'bod' : 'bodova'}. Konačni rezultat ovisi o vrednovanju tih odgovora prema pripadajućoj rubrici.</p>
            </>
          ) : (
            <>
              <h1 style={{fontFamily:'var(--fh)', fontSize:34, margin:'8px 0 4px'}}>{result.percent}%</h1>
              <p style={{color:'var(--muted)', marginTop:0}}>{result.earnedPoints} / {result.maxPoints} bodova</p>
            </>
          )}
          <p style={{fontSize:13, color:'var(--muted)'}}>Neodgovoreno: {result.unansweredCount ?? result.unanswered.length}</p>
          <button type="button" onClick={onExit} aria-label="Izlaz" style={{marginTop:18, padding:'10px 16px', borderRadius:10, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)', cursor:'pointer'}}>Izlaz</button>
        </div>
        {!session || session.reviewAvailable === true ? <ExamReview exam={exam} responses={responses} notebooks={notebooks} notebookScope={session ? 'device' : 'page'} /> : <p style={{ maxWidth: 680, margin: '24px auto', lineHeight: 1.65 }}>Pregled nije dostupan za ovu verziju sadržaja. Potvrđeni rezultat ostaje sačuvan.</p>}
      </main>
    )
  }

  const currentValue = responseForQuestion(current, responses)
  const playbackAction=async(id,action)=>{
    if(session) return session.onPlaybackAction(id,action)
    const question=listeningQuestions(questions).find(q=>q.id===id)
    const next=advancePlayback(question.stimulus.listening,localPlaybackRef.current[id]??emptyPlayback(),action)
    localPlaybackRef.current={...localPlaybackRef.current,[id]:next}
    setLocalPlayback(localPlaybackRef.current)
    return next
  }
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
          <QuestionRenderer question={current} value={currentValue} onChange={updateCurrent} disabled={Boolean(session?.disabled)} listeningMode="assessment" playback={playback} onPlaybackAction={playbackAction} onMediaAvailability={(id,ready)=>setMediaStatus(previous=>({...previous,[id]:ready}))} notebook={notebooks[current.id]} notebookScope={session ? 'device' : 'page'} onNotebookChange={value => {
            if (session) { if (!session.disabled) session.onNotebookChange?.(current.id,value) }
            else setNotebooks(previous=>({...previous,[current.id]:value}))
          }} />
        </section>

        <nav aria-label="Navigacija ispita" style={{display:'flex', gap:10, marginTop:14}}>
          <button type="button" onClick={() => navigate(Math.max(0, index - 1))} disabled={index === 0} aria-label="Prethodno" style={{padding:'11px 15px', borderRadius:10, border:'1px solid var(--bdr)', background:'var(--s1)', color:'var(--text)'}}>Prethodno</button>
          <div style={{flex:1}}/>
          {index < questions.length - 1 ? (
            <button type="button" onClick={() => navigate(Math.min(questions.length - 1, index + 1))} aria-label="Sljedeće" style={{padding:'11px 15px', borderRadius:10, border:0, background:'var(--blue)', color:'#fff', fontWeight:700}}>Sljedeće</button>
          ) : (
            <button type="button" disabled={!listeningReady} onClick={() => setConfirming(true)} aria-label="Predaj ispit" style={{padding:'11px 15px', borderRadius:10, border:0, background:'var(--blue)', color:'#fff', fontWeight:700,opacity:listeningReady?1:0.5,cursor:listeningReady?'pointer':'default'}}>Predaj ispit</button>
          )}
        </nav>
        {!listeningReady&&<p role="status" style={{lineHeight:1.65}}>Prije predaje dovrši barem jedno slušanje svake snimke i riješi prijavljenu pogrešku zvuka. Ako zvuk nije dostupan, izađi iz provjere bez dodjele rezultata; tehnički problem nije netočan odgovor.</p>}
      </div>

      {confirming && (
        <AssessmentDialog label="Potvrda predaje" onCancel={() => setConfirming(false)}>
            <h2 style={{marginTop:0}}>Želiš li predati ispit?</h2>
            <p style={{color:'var(--muted)'}}>Neodgovoreno: {progress.unanswered.length}. Nakon predaje prikazat će se rezultat.</p>
            <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
              <button data-dialog-cancel type="button" onClick={() => setConfirming(false)} style={{padding:'10px 14px'}}>Odustani</button>
              <button type="button" onClick={submit} disabled={Boolean(session?.busy)||!listeningReady} aria-label="Potvrdi predaju" style={{padding:'10px 14px', background:'var(--blue)', color:'#fff', border:0, borderRadius:9}}>Potvrdi predaju</button>
            </div>
        </AssessmentDialog>
      )}
    </main>
  )
}
