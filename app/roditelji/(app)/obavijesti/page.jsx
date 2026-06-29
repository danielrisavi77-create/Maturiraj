'use client'

import { useState } from 'react'
import { useParentContext } from '@/lib/roditelji/parentContext'
import { alertStyle } from '@/lib/roditelji/roditeljiUtils'
import { EmptyState } from '@/components/roditelji/ui'

const FTABS = [
  { k: 'sve',  l: 'Sve' },
  { k: 'warn', l: '⚠ Upozorenja' },
  { k: 'info', l: 'ℹ Informativno' },
  { k: 'good', l: '✓ Pohvale' },
]

export default function ObavijestPage() {
  const { activeChild: child, markRead } = useParentContext()
  const [ftab, setFtab] = useState('sve')

  if (!child) return null

  const alerts  = child.obavijesti || []
  const unread  = alerts.filter(n => !n.read).length
  const visible = ftab === 'sve' ? alerts : alerts.filter(n => n.tip === ftab)

  return (
    <div className="r-fi">
      {/* Summary bar */}
      <div className="r-card" style={{ padding: '16px 22px', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        {unread > 0
          ? <>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--red)', boxShadow: '0 0 10px var(--red)', animation: 'r-pulse 2s infinite', flexShrink: 0 }} />
              <span style={{ fontSize: 14, fontWeight: 700 }}>{unread} nepročitan{unread === 1 ? 'a' : unread < 5 ? 'e' : 'ih'} obavijest{unread === 1 ? '' : 'i'}</span>
            </>
          : <>
              <span style={{ fontSize: 18 }}>✅</span>
              <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--green)' }}>Sve pročitano — nema ničega hitnog.</span>
            </>
        }
      </div>

      {/* Filter tabs */}
      <div className="r-tabs" style={{ marginBottom: 18 }}>
        {FTABS.map(f => (
          <button key={f.k} className={`r-tab${ftab === f.k ? ' on' : ''}`} onClick={() => setFtab(f.k)}>
            {f.l}
            <span style={{ marginLeft: 5, fontSize: 11, opacity: .6 }}>
              {f.k === 'sve' ? alerts.length : alerts.filter(n => n.tip === f.k).length}
            </span>
          </button>
        ))}
      </div>

      {/* Alert cards */}
      {visible.length === 0 ? (
        <EmptyState ico="📭" title="Nema obavijesti" sub={ftab === 'sve' ? 'Nema obavijesti za prikazati.' : 'Nema obavijesti u ovoj kategoriji.'} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {visible.map(n => {
            const as = alertStyle(n.tip)
            return (
              <div key={n.id} className="r-alert-card r-card-lift" style={{ borderColor: as.border, background: as.bg, opacity: n.read ? .55 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>{n.ico}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                      <span style={{ fontWeight: 700, fontSize: 14 }}>{n.naslov}</span>
                      {!n.read && <span style={{ width: 7, height: 7, borderRadius: '50%', background: as.color, boxShadow: `0 0 6px ${as.color}` }} />}
                    </div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>{n.opis}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 10, flexWrap: 'wrap' }}>
                      <span style={{ fontSize: 11, color: 'var(--muted)' }}>{n.datum}</span>
                      {n.akcija && <button className="r-btn r-bs" style={{ padding: '4px 10px', fontSize: 11 }}>{n.akcija}</button>}
                      {!n.read && (
                        <button onClick={() => markRead(child.id, n.id)} style={{ background: 'none', border: 'none', color: 'var(--blue)', fontSize: 11, fontWeight: 600, cursor: 'pointer', padding: 0 }}>
                          Označi pročitano
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
