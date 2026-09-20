'use client'
import React from 'react'

export default function TrueFalseQuestion({ question, value, onChange, disabled = false }) {
  const values = value && typeof value === 'object' ? value : {}
  return (
    <div style={{display:'grid', gap:12}}>
      {(question.statements || []).map((statement) => (
        <fieldset key={statement.id} style={{border:'1px solid var(--bdr)', borderRadius:10, padding:'10px 12px'}} disabled={disabled}>
          <legend style={{padding:'0 6px'}}>{statement.text}</legend>
          <div style={{display:'flex', gap:18}}>
            <label style={{display:'flex', gap:6, alignItems:'center'}}>
              <input type="radio" name={`${question.id}-${statement.id}`} checked={values[statement.id] === true} onChange={() => onChange({ ...values, [statement.id]: true })}/>
              Točno
            </label>
            <label style={{display:'flex', gap:6, alignItems:'center'}}>
              <input type="radio" name={`${question.id}-${statement.id}`} checked={values[statement.id] === false} onChange={() => onChange({ ...values, [statement.id]: false })}/>
              Netočno
            </label>
          </div>
        </fieldset>
      ))}
    </div>
  )
}
