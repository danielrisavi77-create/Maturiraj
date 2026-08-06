'use client'
import React from 'react'

export default function MatchingQuestion({ question, value, onChange, disabled = false }) {
  const values = value && typeof value === 'object' ? value : {}
  return (
    <div style={{display:'grid', gap:12}}>
      {(question.left || []).map((item) => (
        <label key={item.id} style={{display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(150px,220px)', gap:12, alignItems:'center'}}>
          <span>{item.text}</span>
          <select
            aria-label={item.text}
            value={values[item.id] ?? ''}
            onChange={(event) => onChange({ ...values, [item.id]: event.target.value })}
            disabled={disabled}
            style={{padding:'10px 12px', borderRadius:9, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)'}}
          >
            <option value="">Odaberi…</option>
            {(question.right || []).map((right) => <option key={right.id} value={right.id}>{right.text}</option>)}
          </select>
        </label>
      ))}
    </div>
  )
}
