'use client'

import { useParentContext } from '@/lib/roditelji/parentContext'
import { useParentRokovi } from '@/lib/roditelji/useParentRokovi'
import { PCard, PBadge, PEmptyState, PSkeleton } from '@/components/roditelji/ui'

const TYPE_ICON = { deadline: '📋', exam: '📝', result: '🏆' }
const URGENCY_LABEL = { passed: 'Prošlo', urgent: 'Uskoro', soon: 'Za 30 dana', ok: 'Na rasporedu' }
const URGENCY_SEV   = { passed: 'info', urgent: 'urgent', soon: 'warning', ok: 'ok' }

export default function RokoviPage() {
  const { parentReady, loading } = useParentContext()
  const rokovi = useParentRokovi()

  if (!parentReady || loading) {
    return <div>{[1,2,3].map(i => <PSkeleton key={i} height={80} />)}</div>
  }

  const upcoming = rokovi.filter(r => r.urgency !== 'passed')
  const passed   = rokovi.filter(r => r.urgency === 'passed')

  return (
    <div>
      <h1 style={styles.title}>Rokovi i datumi</h1>
      <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 24, lineHeight: 1.6 }}>
        Svi ključni datumi državne mature za školsku godinu 2025./2026.
      </p>

      {upcoming.length === 0 && (
        <PEmptyState icon="📅" title="Nema nadolazećih rokova" body="Svi rokovi su prošli." />
      )}

      {upcoming.map((r, i) => (
        <div key={r.id} style={styles.timelineItem}>
          {/* Vertical line */}
          {i < upcoming.length - 1 && <div style={styles.line} />}
          {/* Dot */}
          <div style={{
            ...styles.dot,
            background: r.urgency === 'urgent' ? 'var(--red)' : r.urgency === 'soon' ? 'var(--gold)' : 'var(--blue)',
          }} />
          <PCard style={{ flex: 1, marginLeft: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8 }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 18 }}>{TYPE_ICON[r.type] ?? '📌'}</span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{r.title}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 4 }}>{r.body}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)' }}>
                  {new Date(r.date).toLocaleDateString('hr-HR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                <PBadge severity={URGENCY_SEV[r.urgency]}>{URGENCY_LABEL[r.urgency]}</PBadge>
                <span style={{ fontSize: 12, color: 'var(--muted)' }}>za {r.daysLeft} dana</span>
              </div>
            </div>
          </PCard>
        </div>
      ))}

      {passed.length > 0 && (
        <>
          <div style={styles.sectionDivider}>Prošli rokovi</div>
          {passed.map(r => (
            <PCard key={r.id} style={{ marginBottom: 10, opacity: 0.5 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 16 }}>{TYPE_ICON[r.type] ?? '📌'}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--muted)' }}>{r.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                    {new Date(r.date).toLocaleDateString('hr-HR')}
                  </div>
                </div>
              </div>
            </PCard>
          ))}
        </>
      )}
    </div>
  )
}

const styles = {
  title: {
    fontSize:     20,
    fontWeight:   900,
    letterSpacing: '-0.01em',
    color:        'var(--text)',
    marginBottom:  8,
  },
  timelineItem: {
    display:      'flex',
    alignItems:   'flex-start',
    position:     'relative',
    marginBottom:  16,
    paddingLeft:   8,
  },
  dot: {
    width:        14,
    height:       14,
    borderRadius: '50%',
    flexShrink:   0,
    marginTop:    18,
    zIndex:       1,
    position:     'relative',
  },
  line: {
    position:   'absolute',
    left:       14,
    top:        32,
    bottom:    -18,
    width:       2,
    background: 'var(--bdr)',
    zIndex:      0,
  },
  sectionDivider: {
    fontSize:     11,
    fontWeight:   700,
    color:        'var(--muted)',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    margin:       '24px 0 12px',
    padding:      '6px 0',
    borderBottom: '1px solid var(--bdr)',
  },
}
