'use client'
import React, { useId } from 'react'

export default function TextQuestion({ question, value, onChange, disabled = false }) {
  const descriptionId = useId()
  const numeric = question.answer?.numeric
  const algebra = question.answer?.algebra
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
    <div style={{display:'grid', gap:6}}>
      <label style={{display:'grid', gap:6}}>
      <span className="sr-only">Odgovor</span>
      <input
        type="text"
        aria-describedby={numeric || algebra ? descriptionId : undefined}
        value={typeof value === 'string' ? value : ''}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        placeholder="Upiši odgovor"
        style={{width:'100%', boxSizing:'border-box', padding:'11px 12px', borderRadius:9, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)',fontSize:16}}
      />
      </label>
      {algebra && <span id={descriptionId} style={{fontSize:14,lineHeight:1.6,color:'var(--muted)'}}>
        Upiši polinom u x, primjerice (x-1)^2 ili x²-2x+1. Dopušteni su decimalni zarez, razlomljeni koeficijenti i množenje 2x. Dijeli samo konstantom; potencije su od 0 do 8. Upiši samo izraz, bez f(x)=.
      </span>}
      {numeric && <span id={descriptionId} style={{fontSize:14,lineHeight:1.6,color:'var(--muted)'}}>
        Broj ili razlomak; decimalni zarez je dopušten. {numeric.unit && <>{numeric.unit.required ? 'Obvezna jedinica' : 'Jedinica'}: {numeric.unit.label}. </>}
        {numeric.absoluteTolerance !== undefined && <>Zadana apsolutna tolerancija: {numeric.absoluteTolerance}.</>}
      </span>}
    </div>
  )
}
