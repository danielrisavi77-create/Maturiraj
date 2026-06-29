import { useState } from 'react'

export default function PreviewWeekCard({ item, pro = false }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        padding: 0,
        border: `1px solid ${hovered ? item.color + '44' : item.color + '20'}`,
        background: pro
          ? `linear-gradient(135deg, rgba(75,123,255,.09), rgba(255,255,255,.012))`
          : 'linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012))',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'stretch',
        overflow: 'hidden',
        transition: 'border-color .2s, transform .2s, box-shadow .2s',
        transform: hovered ? 'translateY(-2px)' : 'none',
        boxShadow: hovered
          ? `0 16px 48px rgba(0,0,0,.22), 0 0 0 1px ${item.color}28`
          : '0 8px 24px rgba(0,0,0,.18)',
      }}
    >
      {/* Left color bar */}
      <div style={{
        width: 4, flexShrink: 0,
        background: `linear-gradient(180deg, ${item.color}, ${item.color}55)`,
        opacity: hovered ? 1 : .7,
        transition: 'opacity .2s',
      }} />

      {/* Content */}
      <div style={{ flex: 1, padding: '14px 16px 14px 14px' }}>
        {/* Top row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          {/* Week badge */}
          <div style={{
            width: 42, height: 42, borderRadius: 13, flexShrink: 0,
            background: `${item.color}14`, border: `1px solid ${item.color}28`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 900, color: item.color, lineHeight: 1 }}>
              {item.tjedan}
            </div>
            <div style={{ fontSize: 8, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.04em' }}>tj.</div>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Subject */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <span style={{ fontSize: 14 }}>{item.sym}</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)' }}>{item.predmet}</span>
            </div>
            {/* Chips */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, borderRadius: 999, padding: '1px 8px',
                color: item.color, background: `${item.color}16`, border: `1px solid ${item.color}28`,
              }}>{item.sati}h</span>
              {pro && (
                <span style={{
                  fontSize: 10, fontWeight: 800, borderRadius: 999, padding: '1px 7px',
                  background: 'rgba(75,123,255,.12)', border: '1px solid rgba(75,123,255,.22)',
                  color: 'var(--blue)', letterSpacing: '.04em',
                }}>PRO</span>
              )}
            </div>
          </div>
        </div>

        {/* Topic */}
        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', lineHeight: 1.55, marginBottom: 8 }}>
          {item.tema}
        </div>

        {/* Note */}
        <div style={{
          fontSize: 12, lineHeight: 1.55, padding: '8px 10px', borderRadius: 10,
          color: pro ? 'rgba(75,123,255,.85)' : 'var(--muted)',
          background: pro ? 'rgba(75,123,255,.06)' : 'var(--s1)',
          border: pro ? '1px solid rgba(75,123,255,.14)' : '1px solid var(--bdr)',
        }}>
          {item.note}
        </div>
      </div>
    </div>
  )
}