'use client'
import React from 'react'

export default function EssayQuestion({ value, onChange, disabled = false }) {
  return (
    <label style={{display:'grid', gap:6}}>
      <span className="sr-only">Odgovor</span>
      <textarea
        value={typeof value === 'string' ? value : ''}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        rows={8}
        placeholder="Upiši odgovor"
        style={{width:'100%', boxSizing:'border-box', padding:'12px', borderRadius:10, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)', resize:'vertical'}}
      />
    </label>
  )
}
