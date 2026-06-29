'use client'
import { useCompare } from '@/lib/prijemni/compareStore'

export default function CompareToggle({ studijId, isPro = false, onMaxReached, size = 28, stopPropagation = true }) {
  const { has, toggle } = useCompare()
  const active = has(studijId)

  const handleClick = (e) => {
    if (stopPropagation) { e.preventDefault(); e.stopPropagation() }
    const result = toggle(studijId, isPro)
    if (!result.ok && result.reason === 'max_reached') {
      onMaxReached?.()
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label={active ? 'Ukloni iz usporedbe' : 'Dodaj u usporedbu'}
      title={active ? 'Ukloni iz usporedbe' : 'Dodaj u usporedbu (max 4)'}
      style={{
        width: size, height: size, borderRadius: size / 3.5,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer',
        border: `1px solid ${active ? 'rgba(75,123,255,.45)' : 'var(--bdr)'}`,
        background: active ? 'linear-gradient(135deg,rgba(75,123,255,.22),rgba(124,92,252,.18))' : 'rgba(255,255,255,.03)',
        color: active ? 'var(--blue)' : 'var(--muted)',
        fontSize: size < 28 ? 12 : 14,
        fontWeight: 700,
        transition: 'all .18s cubic-bezier(.16,1,.3,1)',
        backdropFilter: 'blur(8px)',
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        if (!active) {
          e.currentTarget.style.color = 'var(--text)'
          e.currentTarget.style.borderColor = 'var(--bdr-hi)'
          e.currentTarget.style.background = 'rgba(255,255,255,.06)'
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          e.currentTarget.style.color = 'var(--muted)'
          e.currentTarget.style.borderColor = 'var(--bdr)'
          e.currentTarget.style.background = 'rgba(255,255,255,.03)'
        }
      }}
    >
      {active ? '✓' : '⊕'}
    </button>
  )
}
