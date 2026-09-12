'use client'
import React from 'react'
import ListeningPlayer from '../ListeningPlayer'

export default function GroupQuestion({ question, value, onChange, disabled = false, renderQuestion, listeningMode, playback, onPlaybackAction, onMediaAvailability }) {
  const values = value && typeof value === 'object' ? value : {}
  const audio = (question.assets || []).find((asset) => asset.type === 'audio')

  return (
    <div style={{display:'grid', gap:18}}>
      {question.stimulus?.text && (
        <div lang={question.stimulus.language} style={{padding:'14px 16px', borderRadius:10, border:'1px solid var(--bdr)', background:'var(--s2)', whiteSpace:'pre-wrap', lineHeight:1.65}}>
          {question.stimulus.text}
        </div>
      )}
      {audio && (question.stimulus?.listening ? <ListeningPlayer src={audio.src} policy={question.stimulus.listening} mode={listeningMode} playback={playback?.[question.id]} disabled={listeningMode==='assessment'&&disabled}
        onAction={onPlaybackAction?action=>onPlaybackAction(question.id,action):undefined} onAvailability={onMediaAvailability?ready=>onMediaAvailability(question.id,ready):undefined}/> : <audio controls src={audio.src} style={{width:'100%'}} />)}
      {(question.children || []).map((child, index) => (
        <section key={child.id} style={{paddingTop:index ? 16 : 0, borderTop:index ? '1px solid var(--bdr)' : 'none'}}>
          {renderQuestion(child, values[child.id], (next) => onChange({ ...values, [child.id]: next }), disabled)}
        </section>
      ))}
    </div>
  )
}
