'use client'
import { useEffect, useRef, useState } from 'react'
import { advancePlayback, emptyPlayback } from '@/lib/learning/listening-state'
import styles from './ListeningPlayer.module.css'

export default function ListeningPlayer(props) {
  return <Player key={`${props.src}:${props.mode||'practice'}`} {...props}/>
}
function Player({src,policy,mode='practice',playback,onAction,disabled=false,onAvailability,active=true}) {
  const audio=useRef(null),latest=useRef(playback??emptyPlayback()),queue=useRef(Promise.resolve()),working=useRef(false),lastCheckpoint=useRef(-1)
  const [local,setLocal]=useState(emptyPlayback),[ready,setReady]=useState(false),[playing,setPlaying]=useState(false),[busy,setBusy]=useState(false)
  const [error,setError]=useState(null),[elapsed,setElapsed]=useState(0)
  const limited=mode==='assessment',state=playback??local
  useEffect(()=>{latest.current=playback??local},[playback,local])
  useEffect(()=>{const element=audio.current;return()=>element?.pause()},[])
  useEffect(()=>{if(!active) audio.current?.pause()},[active])
  function dispatch(action) {
    const task=queue.current.then(async()=>{
      const next=onAction?await onAction(action):advancePlayback(policy,latest.current,action)
      latest.current=next
      if(!onAction) setLocal(next)
      return next
    })
    queue.current=task.catch(()=>{})
    return task
  }
  async function mediaFailed() {
    setReady(false);setPlaying(false);setError('Zvuk nije dostupan. Pokušaj ponovno učitati snimku. To nije netočan odgovor.')
    onAvailability?.(false)
    if(limited) try {await dispatch({type:'failure'})} catch {setError('Pogreška zvuka nije spremljena. Ostani na stranici i ponovno učitaj snimku prije predaje.')}
  }
  async function available() {
    try {
      if(limited) await dispatch({type:'ready'})
      setReady(true);setError(null);onAvailability?.(true)
    } catch {setError('Stanje slušanja nije spremljeno. Pokušaj ponovno prije predaje.');onAvailability?.(false)}
  }
  async function play() {
    if(working.current||disabled||!ready||!active) return
    working.current=true;setBusy(true)
    try {
      if(limited) {
        const next=await dispatch({type:'start'})
        audio.current.currentTime=next.position
      } else if(audio.current.ended) audio.current.currentTime=0
      await audio.current.play();setPlaying(true)
    } catch {await mediaFailed()}
    finally {working.current=false;setBusy(false)}
  }
  function checkpoint() {
    const element=audio.current
    setElapsed(element.currentTime)
    if(!limited||element.ended||!latest.current.active) return
    const second=Math.floor(element.currentTime)
    if(second===lastCheckpoint.current) return
    lastCheckpoint.current=second
    void dispatch({type:'position',position:element.currentTime}).catch(()=>{
      element.pause();setError('Položaj snimke nije spremljen. Pokušaj ponovno prije napuštanja stranice.');onAvailability?.(false)
    })
  }
  async function ended() {
    setPlaying(false)
    if(limited) try {await dispatch({type:'finish'})} catch {setError('Završetak slušanja nije spremljen. Pokušaj ponovno prije predaje.');onAvailability?.(false)}
  }
  const exhausted=limited&&!state.active&&state.started>=policy.maxPlays
  const seconds=value=>`${Math.floor(value/60)}:${String(Math.floor(value%60)).padStart(2,'0')}`
  return <section className={styles.player} aria-label={policy.title} lang="hr">
    <div className={styles.top}><span className={styles.label}>Slušanje</span><strong lang={policy.language}>{policy.title}</strong></div>
    <p className={styles.note}>{policy.synthetic?'Autorska snimka · sintetički glas. ':'Autorska snimka. '}{limited?`Do ${policy.maxPlays} slušanja. Pauza i nastavak ne troše novo slušanje.`:'Vježba: snimku možeš ponavljati i premotavati.'}</p>
    <audio ref={audio} src={src} preload={active?'auto':'none'} onCanPlay={available} onError={()=>void mediaFailed()} onTimeUpdate={checkpoint} onEnded={()=>void ended()} onPause={()=>setPlaying(false)} />
    <div className={styles.controls}>
      <button type="button" disabled={disabled||busy||!ready||(!playing&&exhausted)} onClick={()=>playing?audio.current.pause():void play()}>
        {playing?'Pauziraj':state.active&&limited?'Nastavi slušanje':state.started&&limited?'Ponovi snimku':'Pokreni slušanje'}
      </button>
      <span aria-label="Položaj snimke" className={styles.time}>{seconds(elapsed)} / {seconds(policy.durationSec)}</span>
    </div>
    {!limited&&<label className={styles.seek}>Položaj snimke<input aria-label="Premotaj snimku" type="range" min="0" max={policy.durationSec} step="1" value={Math.min(elapsed,policy.durationSec)} disabled={!ready} onChange={event=>{audio.current.currentTime=Number(event.target.value);setElapsed(Number(event.target.value))}}/></label>}
    {limited&&<p className={styles.note} role="status">Započeto: {state.started}/{policy.maxPlays}. Dovršeno: {state.completed}. {exhausted?'Iskorištena su sva slušanja.':'Transkript će se otvoriti nakon predaje.'}</p>}
    {!ready&&!error&&<p role="status">Učitavanje zvuka…</p>}
    {error&&<div role="alert"><p>{error}</p><button type="button" onClick={()=>{setError(null);audio.current.load()}}>Ponovno učitaj snimku</button></div>}
    {!limited&&<details className={styles.transcript}><summary>Transkript i dokaz odgovora</summary><div lang={policy.language}>{policy.transcript.map(segment=><p key={segment.id} data-segment-id={segment.id}>{segment.text}</p>)}</div></details>}
  </section>
}
