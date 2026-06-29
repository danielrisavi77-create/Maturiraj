// app/plan-ucenja/dashboard/components/AdaptiveToast.js
'use client'
import { useState, useEffect } from 'react'

const LEVEL_STYLES = {
  critical: {
    border:     'rgba(248,113,113,.35)',
    background: 'linear-gradient(135deg, rgba(248,113,113,.12), rgba(248,113,113,.05))',
    dot:        '#f87171',
    glow:       'rgba(248,113,113,.2)',
  },
  warning: {
    border:     'rgba(233,180,70,.3)',
    background: 'linear-gradient(135deg, rgba(233,180,70,.1), rgba(233,180,70,.04))',
    dot:        '#e9b446',
    glow:       'rgba(233,180,70,.15)',
  },
  info: {
    border:     'rgba(75,123,255,.28)',
    background: 'linear-gradient(135deg, rgba(75,123,255,.1), rgba(75,123,255,.04))',
    dot:        '#4b7bff',
    glow:       'rgba(75,123,255,.15)',
  },
  success: {
    border:     'rgba(62,207,110,.28)',
    background: 'linear-gradient(135deg, rgba(62,207,110,.1), rgba(62,207,110,.04))',
    dot:        '#3ecf6e',
    glow:       'rgba(62,207,110,.15)',
  },
}

function Toast({ message, level = 'info', onClose, changes = [] }) {
  const style = LEVEL_STYLES[level] || LEVEL_STYLES.info
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Slide in
    requestAnimationFrame(() => setVisible(true))
    // Auto-close nakon 7s
    const t = setTimeout(() => handleClose(), 7000)
    return () => clearTimeout(t)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 350)
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 12,
      padding: '14px 16px',
      borderRadius: 18,
      background: style.background,
      border: `1px solid ${style.border}`,
      boxShadow: `0 8px 32px ${style.glow}`,
      transition: 'all .35s cubic-bezier(.16,1,.3,1)',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(20px)',
      position: 'relative',
      overflow: 'hidden',
      maxWidth: 380,
    }}>
      {/* Dot indicator */}
      <div style={{
        width: 8, height: 8, borderRadius: '50%',
        background: style.dot,
        boxShadow: `0 0 8px ${style.dot}`,
        flexShrink: 0, marginTop: 3,
      }} />

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.55, color: 'var(--text)', marginBottom: changes.length ? 8 : 0 }}>
          {message}
        </div>

        {/* Applied changes */}
        {changes.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {changes.map((c, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 11, color: 'var(--muted)',
              }}>
                <span style={{ color: style.dot, flexShrink: 0 }}>✓</span>
                {c}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Close */}
      <button onClick={handleClose} style={{
        width: 22, height: 22, borderRadius: 6, flexShrink: 0,
        border: '1px solid rgba(255,255,255,.1)',
        background: 'rgba(255,255,255,.05)',
        color: 'var(--muted)', fontSize: 12, fontWeight: 700,
        cursor: 'pointer', fontFamily: 'var(--fb)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>×</button>
    </div>
  )
}

/**
 * Toast container — prikazuje stack toastova u gornjem desnom kutu
 * Koristi se: <AdaptiveToastContainer toasts={toasts} onRemove={id => ...} />
 */
export default function AdaptiveToastContainer({ toasts, onRemove }) {
  if (!toasts.length) return null

  return (
    <div style={{
      position: 'fixed',
      top: 76, right: 20,
      zIndex: 400,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      pointerEvents: 'none',
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{ pointerEvents: 'auto' }}>
          <Toast
            message={t.message}
            level={t.level}
            changes={t.changes || []}
            onClose={() => onRemove(t.id)}
          />
        </div>
      ))}
    </div>
  )
}