'use client'
import React from 'react'

export default function OrderingQuestion({ question, value, onChange, disabled = false }) {
  const sourceOrder = (question.items || []).map((item) => item.id)
  const order = Array.isArray(value) && value.length === sourceOrder.length ? value : sourceOrder
  const byId = new Map((question.items || []).map((item) => [item.id, item]))

  function move(index, delta) {
    const target = index + delta
    if (disabled || target < 0 || target >= order.length) return
    const next = [...order]
    ;[next[index], next[target]] = [next[target], next[index]]
    onChange(next)
  }

  return (
    <ol style={{display:'grid', gap:8, padding:0, margin:0, listStyle:'none'}}>
      {order.map((id, index) => {
        const item = byId.get(id)
        if (!item) return null
        return (
          <li key={id} style={{display:'grid', gridTemplateColumns:'32px 1fr auto', gap:10, alignItems:'center', padding:'10px 12px', border:'1px solid var(--bdr)', borderRadius:10}}>
            <strong>{index + 1}.</strong>
            <span>{item.text}</span>
            <span style={{display:'flex', gap:6}}>
              <button type="button" onClick={() => move(index, -1)} disabled={disabled || index === 0} aria-label={`Pomakni ${item.text} gore`}>↑</button>
              <button type="button" onClick={() => move(index, 1)} disabled={disabled || index === order.length - 1} aria-label={`Pomakni ${item.text} dolje`}>↓</button>
            </span>
          </li>
        )
      })}
    </ol>
  )
}
