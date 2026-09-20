'use client'
import React from 'react'

export default function TextQuestion({ question, value, onChange, disabled = false }) {
  if (question.type === 'fill') {
    const values = value && typeof value === 'object' ? value : {}
    return (
      <div style={{display:'grid', gap:12}}>
        {(question.gaps || []).map((gap, index) => {
          const label = gap.label || `Praznina ${index + 1}`
          return (
            <label key={gap.id} style={{display:'grid', gap:6}}>
              <span style={{fontSize:13, fontWeight:600}}>{label}</span>
              <input
                aria-label={label}
                type="text"
                value={values[gap.id] ?? ''}
                onChange={(event) => onChange({ ...values, [gap.id]: event.target.value })}
                disabled={disabled}
                style={{width:'100%', boxSizing:'border-box', padding:'11px 12px', borderRadius:9, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)'}}
              />
            </label>
          )
        })}
      </div>
    )
  }

  return (
    <label style={{display:'grid', gap:6}}>
      <span className="sr-only">Odgovor</span>
      <input
        type="text"
        value={typeof value === 'string' ? value : ''}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="Upiši odgovor"
        style={{width:'100%', boxSizing:'border-box', padding:'11px 12px', borderRadius:9, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)'}}
      />
    </label>
  )
}
