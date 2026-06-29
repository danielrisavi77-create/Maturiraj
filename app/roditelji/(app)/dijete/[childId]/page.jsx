'use client'

import { useParams } from 'next/navigation'
import { useParentContext } from '@/lib/roditelji/parentContext'
import { useChildDetail } from '@/lib/roditelji/useChildDetail'
import { PCard, PLabel, PProgressBar, PEmptyState, PSkeleton } from '@/components/roditelji/ui'
import { formatMinutes, formatRelativeDate, sectionLabel } from '@/lib/roditelji/parentHelpers'

export default function DijeteDetailPage() {
  const params    = useParams()
  const childId   = params?.childId
  const { linkedChildren } = useParentContext()
  const { data, loading, error } = useChildDetail(childId)

  const childMeta = linkedChildren.find(c => c.childId === childId)

  if (loading) {
    return (
      <div>
        <PSkeleton height={70} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
          <PSkeleton height={200} style={{ marginBottom: 0 }} />
          <PSkeleton height={200} style={{ marginBottom: 0 }} />
        </div>
        <PSkeleton height={160} />
      </div>
    )
  }

  if (error) {
    return <PEmptyState icon="⚠️" title="Greška" body={error} />
  }

  if (!data || !childMeta) {
    return <PEmptyState icon="🔗" title="Dijete nije pronađeno" body="Ova veza više nije aktivna." />
  }

  const name = childMeta.name

  return (
    <div>
      {/* ── Header ──────────────────────────────────────────────────── */}
      <div style={styles.childHeader}>
        <div>
          <h1 style={styles.childName}>{name}</h1>
          <div style={{ fontSize: 13, color: 'var(--muted)' }}>
            Zadnja aktivnost: {formatRelativeDate(data.lastActiveAt)}
          </div>
        </div>
        {childMeta.planType && (
          <span style={styles.planBadge}>{childMeta.planType === 'pro' ? 'PRO' : 'Starter'}</span>
        )}
      </div>

      {/* ── 2-col grid ──────────────────────────────────────────────── */}
      <div style={styles.grid}>
        {/* Daily activity chart */}
        <PCard style={{ gridColumn: '1 / -1' }}>
          <PLabel>Aktivnost — zadnjih 14 dana (minute/dan)</PLabel>
          <ActivityBars daily={data.daily} />
        </PCard>

        {/* Section breakdown */}
        <PCard>
          <PLabel>Sekcije (ukupno)</PLabel>
          {data.sections.length === 0 ? (
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>Nema aktivnosti još.</div>
          ) : (
            data.sections.map(s => (
              <div key={s.section} style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{sectionLabel(s.section)}</span>
                  <span style={{ fontSize: 12, color: 'var(--muted)' }}>{formatMinutes(s.minutes)}</span>
                </div>
                <PProgressBar
                  pct={data.sections[0].minutes ? Math.round((s.minutes / data.sections[0].minutes) * 100) : 0}
                  color="var(--blue)"
                />
              </div>
            ))
          )}
        </PCard>

        {/* Checklist + Plan */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* Checklist */}
          <PCard>
            <PLabel>✅ Checklist prijave</PLabel>
            <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--blue)', lineHeight: 1 }}>
              {data.checklistDone}
              <span style={{ fontSize: 15, color: 'var(--muted)', fontWeight: 600 }}>/{data.checklistTotal}</span>
            </div>
            {data.checklistTotal > 0 && (
              <PProgressBar
                pct={Math.round((data.checklistDone / data.checklistTotal) * 100)}
                style={{ marginTop: 10 }}
              />
            )}
            {data.checklistTotal === 0 && (
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>Nema checklist stavki.</div>
            )}
          </PCard>

          {/* Plan */}
          <PCard>
            <PLabel>📚 Plan učenja</PLabel>
            {data.plan ? (
              <>
                <div style={{ fontSize: 28, fontWeight: 900, color: 'var(--violet)', lineHeight: 1 }}>
                  {data.plan.pct}%
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 8 }}>
                  {data.plan.completed}/{data.plan.total} tjedana
                </div>
                <PProgressBar pct={data.plan.pct} color="var(--violet)" />
              </>
            ) : (
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>{name} još nema plan učenja.</div>
            )}
          </PCard>
        </div>
      </div>
    </div>
  )
}

// ── Mini bar chart ─────────────────────────────────────────────────────────────
function ActivityBars({ daily }) {
  const max = Math.max(...daily.map(d => d.minutes), 1)

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 80, marginTop: 8 }}>
      {daily.map(d => {
        const h   = Math.max(2, Math.round((d.minutes / max) * 72))
        const day = new Date(d.date).toLocaleDateString('hr-HR', { weekday: 'short' })
        const isToday = d.date === new Date().toISOString().split('T')[0]
        return (
          <div key={d.date} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <div title={`${d.minutes}min · ${d.date}`} style={{
              width:        '100%',
              height:        h,
              background:   d.minutes > 0
                ? (isToday ? 'var(--blue)' : 'rgba(75,123,255,0.5)')
                : 'rgba(255,255,255,0.05)',
              borderRadius:  4,
              transition:    'height 0.3s ease',
            }} />
            <span style={{ fontSize: 8, color: 'var(--muted)', whiteSpace: 'nowrap' }}>{day}</span>
          </div>
        )
      })}
    </div>
  )
}

const styles = {
  childHeader: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    marginBottom:   24,
    padding:        '16px 18px',
    background:     'rgba(255,255,255,0.025)',
    border:         '1px solid var(--bdr)',
    borderRadius:   14,
  },
  childName: {
    fontSize:     20,
    fontWeight:   900,
    letterSpacing: '-0.01em',
    color:        'var(--text)',
    marginBottom:  2,
  },
  planBadge: {
    padding:      '4px 12px',
    borderRadius:  99,
    fontSize:      11,
    fontWeight:    800,
    background:   'rgba(124,92,252,0.15)',
    border:        '1px solid rgba(124,92,252,0.3)',
    color:        'var(--violet)',
  },
  grid: {
    display:             'grid',
    gridTemplateColumns: '1fr 1fr',
    gap:                  14,
  },
}
