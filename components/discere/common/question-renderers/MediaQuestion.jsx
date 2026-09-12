'use client'
import React from 'react'

export default function MediaQuestion({ question, value, onChange, disabled = false, renderQuestion }) {
  const values = value && typeof value === 'object' ? value : {}
  return (
    <div style={{display:'grid', gap:18}}>
      <div style={{display:'grid', gap:10}}>
        {(question.assets || []).map((asset, index) => {
          if (asset.type === 'image') {
            return <img key={`${asset.src}-${index}`} src={asset.src} alt={asset.alt || ''} style={{maxWidth:'100%', height:'auto', borderRadius:10}} />
          }
          if (asset.type === 'audio') {
            return <audio key={`${asset.src}-${index}`} controls src={asset.src} style={{width:'100%'}} />
          }
          return null
        })}
      </div>
      {(question.children || []).map((child, index) => (
        <section key={child.id} style={{paddingTop:index ? 16 : 0, borderTop:index ? '1px solid var(--bdr)' : 'none'}}>
          {renderQuestion(child, values[child.id], (next) => onChange({ ...values, [child.id]: next }), disabled)}
        </section>
      ))}
    </div>
  )
}
