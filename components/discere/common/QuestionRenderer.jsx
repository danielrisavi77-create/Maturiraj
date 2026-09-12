'use client'
import React from 'react'
import ChoiceQuestion from './question-renderers/ChoiceQuestion'
import TextQuestion from './question-renderers/TextQuestion'
import MatchingQuestion from './question-renderers/MatchingQuestion'
import OrderingQuestion from './question-renderers/OrderingQuestion'
import TrueFalseQuestion from './question-renderers/TrueFalseQuestion'
import EssayQuestion from './question-renderers/EssayQuestion'
import GroupQuestion from './question-renderers/GroupQuestion'
import MediaQuestion from './question-renderers/MediaQuestion'
import QuestionTable from './QuestionTable'

const GROUP_TYPES = new Set(['passage_group', 'audio_group', 'media_response'])

function LeafAssets({ assets = [] }) {
  if (!assets.length) return null
  return (
    <div style={{display:'grid', gap:10, marginBottom:16}}>
      {assets.map((asset, index) => {
        if (asset.type === 'image') {
          return <img key={`${asset.src}-${index}`} src={asset.src} alt={asset.alt || ''} style={{maxWidth:'100%', height:'auto', borderRadius:10}} />
        }
        if (asset.type === 'audio') {
          return <audio key={`${asset.src}-${index}`} controls src={asset.src} style={{width:'100%'}} />
        }
        return null
      })}
    </div>
  )
}

export default function QuestionRenderer({ question, value, onChange, disabled = false, notebook, onNotebookChange, notebookScope, listeningMode='practice', playback, onPlaybackAction, onMediaAvailability }) {
  function renderChild(child, childValue, childOnChange, childDisabled) {
    return <QuestionRenderer question={child} value={childValue} onChange={childOnChange} disabled={childDisabled} listeningMode={listeningMode} playback={playback} onPlaybackAction={onPlaybackAction} onMediaAvailability={onMediaAvailability} />
  }

  const body = (() => {
    switch (question.type) {
      case 'mc':
      case 'multi':
        return <ChoiceQuestion question={question} value={value} onChange={onChange} disabled={disabled} />
      case 'short':
      case 'fill':
        return <TextQuestion question={question} value={value} onChange={onChange} disabled={disabled} />
      case 'matching':
        return <MatchingQuestion question={question} value={value} onChange={onChange} disabled={disabled} />
      case 'ordering':
        return <OrderingQuestion question={question} value={value} onChange={onChange} disabled={disabled} />
      case 'true_false':
        return <TrueFalseQuestion question={question} value={value} onChange={onChange} disabled={disabled} />
      case 'essay':
        return <EssayQuestion question={question} value={value} onChange={onChange} disabled={disabled} notebook={notebook} onNotebookChange={onNotebookChange} notebookScope={notebookScope} />
      case 'passage_group':
      case 'audio_group':
        return <GroupQuestion question={question} value={value} onChange={onChange} disabled={disabled} renderQuestion={renderChild} listeningMode={listeningMode} playback={playback} onPlaybackAction={onPlaybackAction} onMediaAvailability={onMediaAvailability} />
      case 'media_response':
        return <MediaQuestion question={question} value={value} onChange={onChange} disabled={disabled} renderQuestion={renderChild} />
      default:
        return <div role="alert">Nepodržana vrsta zadatka.</div>
    }
  })()

  return (
    <div data-question-id={question.id} lang={question.language}>
      <div style={{display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:12, marginBottom:12}}>
        <h2 style={{fontSize:18, lineHeight:1.45, margin:0, whiteSpace:'pre-wrap'}}>{question.prompt}</h2>
        {Number.isFinite(question.points) && <span style={{fontSize:12, color:'var(--muted)', whiteSpace:'nowrap'}}>{question.points} b.</span>}
      </div>
      {question.stimulus?.table !== undefined && <QuestionTable table={question.stimulus.table} />}
      {!GROUP_TYPES.has(question.type) && <LeafAssets assets={question.assets} />}
      {typeof question.stimulus?.afterText === 'string' && <p style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.6, margin: '16px 0' }}>{question.stimulus.afterText}</p>}
      {body}
    </div>
  )
}
