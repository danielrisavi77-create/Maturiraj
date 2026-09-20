'use client'
import React from 'react'

export default function ChoiceQuestion({ question, value, onChange, disabled = false }) {
  const isMulti = question.type === 'multi'
  const selected = isMulti ? (Array.isArray(value) ? value : []) : value

  function toggle(id) {
    if (!isMulti) {
      onChange(id)
      return
    }
    const next = new Set(selected)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    const ordered = (question.options || []).map((option) => option.id).filter((optionId) => next.has(optionId))
    onChange(ordered)
  }

  return (
    <fieldset style={{border:0, padding:0, margin:0}} disabled={disabled}>
      <legend className="sr-only">{question.prompt}</legend>
      <div style={{display:'grid', gap:10}}>
        {(question.options || []).map((option) => {
          const checked = isMulti ? selected.includes(option.id) : selected === option.id
          return (
            <label key={option.id} style={{display:'flex', alignItems:'flex-start', gap:10, padding:'12px 14px', border:'1px solid var(--bdr)', borderRadius:10, cursor:disabled ? 'default' : 'pointer'}}>
              <input
                type={isMulti ? 'checkbox' : 'radio'}
                name={`question-${question.id}`}
                checked={checked}
                onChange={() => toggle(option.id)}
                disabled={disabled}
              />
              <span>{option.text}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
