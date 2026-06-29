'use client'

const PRED_META = {
  biologija:  { ic: '🧬', color: '#3ecf6e' },
  kemija:     { ic: '⚗️', color: '#e9b446' },
  fizika:     { ic: '⚛️', color: '#4b7bff' },
  matematika: { ic: '∑',  color: '#7c5cfc' },
  hrvatski:   { ic: '📖', color: '#fb923c' },
  engleski:   { ic: '🌐', color: '#2dd4bf' },
}

// Same formula as PredmetProgressCard
function predmetOverall(p) {
  if (!p) return 0
  const cov = p.skripte_total_chapters
    ? Math.round((p.skripte_viewed_chapters / p.skripte_total_chapters) * 100) : 0
  const mas = p.skripte_total_chapters
    ? Math.round((p.skripte_mastered_chapters / p.skripte_total_chapters) * 100) : 0
  const acc = Math.round(p.vjezbe_accuracy ?? 0)
  return Math.round(cov * 0.3 + mas * 0.3 + acc * 0.4)
}

function ScoreBar({ value, color, thin = false }) {
  const h = thin ? 4 : 6
  return (
    <div style={{ height: h, borderRadius: h, background: 'rgba(255,255,255,.07)', overflow: 'hidden', flex: 1 }}>
      <div style={{
        height: '100%',
        width: `${Math.max(0, Math.min(100, value ?? 0))}%`,
        background: color,
        borderRadius: h,
        transition: 'width .7s cubic-bezier(.22,1,.36,1)',
      }} />
    </div>
  )
}

function ActivityPulse({ daysInactive }) {
  if (daysInactive === null) return null
  const label = daysInactive === 0 ? 'Danas' : daysInactive === 1 ? 'Jučer' : `Aktivan/a ${daysInactive}d`
  const color = daysInactive === 0 ? '#3ecf6e' : daysInactive <= 2 ? 'var(--gold)' : '#fb923c'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
      <span style={{
        width: 6, height: 6, borderRadius: '50%', background: color,
        boxShadow: `0 0 6px ${color}`,
        display: 'inline-block',
        animation: daysInactive <= 1 ? 'mrw-pulse 2s ease-in-out infinite' : 'none',
      }} />
      <span style={{ fontSize: 10, color, fontWeight: 600 }}>{label}</span>
    </div>
  )
}

// ── Main widget ────────────────────────────────────────────────────
export default function MedicinarReadWidget({ data, linkId, onRemove }) {
  const { child, targets, progress, sim_attempts, days_inactive } = data

  const displayName = child.name || child.email?.split('@')[0] || 'Dijete'
  const isPro = child.plan === 'pro' || child.plan === 'standard'

  const primaryTarget = targets?.[0]
  const studij = primaryTarget?.studij

  const simDone = sim_attempts?.length ?? 0
  const bestSim = simDone > 0 ? Math.max(...sim_attempts.map(a => a.score_pct ?? 0)) : null
  const lastSim = sim_attempts?.[0]?.score_pct ?? null
  const puttingRate = primaryTarget?.putting_rate ?? null

  const rateColor = puttingRate === null ? 'var(--muted)'
    : puttingRate >= 65 ? '#3ecf6e'
    : puttingRate >= 40 ? '#e9b446'
    : '#fb923c'

  return (
    <div style={{
      borderRadius: 18,
      background: 'linear-gradient(170deg,var(--s1),rgba(10,13,24,.95))',
      border: '1px solid var(--bdr)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <style>{`
        @keyframes mrw-pulse {
          0%,100%{opacity:1;transform:scale(1)}
          50%{opacity:.5;transform:scale(1.35)}
        }
      `}</style>

      {/* Faculty color accent strip */}
      {studij?.color && (
        <div style={{ height: 3, background: `linear-gradient(90deg,${studij.color},transparent 70%)` }} />
      )}

      <div style={{ padding: '20px 22px' }}>

        {/* ── Child header ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 18, gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12, flexShrink: 0,
              background: studij?.color ? `${studij.color}18` : 'rgba(75,123,255,.1)',
              border: `1px solid ${studij?.color ? studij.color + '30' : 'rgba(75,123,255,.22)'}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: studij?.sym ? 20 : 18,
            }}>
              {studij?.sym || '🎓'}
            </div>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: '-.015em', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {displayName}
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {child.email}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, flexShrink: 0 }}>
            {isPro ? (
              <span style={{
                padding: '3px 9px', borderRadius: 20, fontSize: 10, fontWeight: 700,
                background: 'rgba(233,180,70,.14)', color: '#e9b446',
                border: '1px solid rgba(233,180,70,.28)',
              }}>✦ PRO</span>
            ) : (
              <span style={{
                padding: '3px 9px', borderRadius: 20, fontSize: 10, fontWeight: 700,
                background: 'rgba(255,255,255,.05)', color: 'var(--muted)',
                border: '1px solid var(--bdr)',
              }}>BESPLATNO</span>
            )}
            <ActivityPulse daysInactive={days_inactive} />
          </div>
        </div>

        {/* ── Target studij + putting rate ── */}
        {studij ? (
          <div style={{
            padding: '14px 16px', borderRadius: 13, marginBottom: 18,
            background: `${studij.color}0c`,
            border: `1px solid ${studij.color}25`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 3 }}>
                Cilj upisa
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 800, color: studij.color, letterSpacing: '-.01em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {studij.naziv}
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{studij.fak_short}</div>
            </div>
            {puttingRate !== null && (
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>
                  Šansa upisa
                </div>
                <div style={{ fontFamily: 'var(--fh)', fontSize: 30, fontWeight: 900, letterSpacing: '-.03em', color: rateColor, lineHeight: 1 }}>
                  {puttingRate}<span style={{ fontSize: 14, fontWeight: 500, color: 'var(--muted)' }}>%</span>
                </div>
                <div style={{ fontSize: 9.5, color: 'var(--muted)', marginTop: 2 }}>
                  procjena na osnovu učenja
                </div>
              </div>
            )}
          </div>
        ) : (
          <div style={{
            padding: '12px 14px', borderRadius: 12, marginBottom: 18,
            background: 'rgba(0,0,0,.14)', border: '1px dashed var(--bdr)',
            fontSize: 12, color: 'var(--muted)', textAlign: 'center', lineHeight: 1.6,
          }}>
            Nije postavio/la ciljani studij
          </div>
        )}

        {/* ── Per-subject mini progress ── */}
        {studij?.predmeti?.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 2 }}>
              Napredak po predmetima
            </div>
            {studij.predmeti.slice(0, 5).map(predmetName => {
              const key = predmetName.toLowerCase().split(' ')[0]
              const meta = PRED_META[key] || { ic: '📘', color: 'var(--muted)' }
              const pData = progress.find(p => p.predmet === key)
              const overall = predmetOverall(pData)
              const cov = pData?.skripte_total_chapters
                ? Math.round((pData.skripte_viewed_chapters / pData.skripte_total_chapters) * 100) : 0
              const acc = Math.round(pData?.vjezbe_accuracy ?? 0)

              return (
                <div key={key}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, width: 20, textAlign: 'center', flexShrink: 0 }}>{meta.ic}</span>
                    <span style={{ fontSize: 11.5, fontWeight: 600, minWidth: 76, color: 'var(--text)' }}>{predmetName}</span>
                    <div style={{ flex: 1, display: 'flex', gap: 3 }}>
                      <ScoreBar value={cov} color={meta.color} thin />
                      <ScoreBar value={acc} color={meta.color + 'aa'} thin />
                    </div>
                    <span style={{
                      fontSize: 11, fontWeight: 700, minWidth: 34, textAlign: 'right',
                      color: overall >= 65 ? '#3ecf6e' : overall >= 40 ? '#e9b446' : overall > 0 ? '#fb923c' : 'var(--muted)',
                    }}>
                      {overall > 0 ? `${overall}%` : '—'}
                    </span>
                  </div>
                  {/* Thin bar legend only on first row */}
                </div>
              )
            })}
            <div style={{ display: 'flex', gap: 12, marginTop: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 16, height: 3, borderRadius: 2, background: 'var(--muted)' }} />
                <span style={{ fontSize: 9.5, color: 'var(--muted)' }}>gradivo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 16, height: 3, borderRadius: 2, background: 'rgba(255,255,255,.2)' }} />
                <span style={{ fontSize: 9.5, color: 'var(--muted)' }}>vježbe</span>
              </div>
            </div>
          </div>
        )}

        {/* ── Simulator summary ── */}
        {bestSim !== null && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '11px 14px', borderRadius: 11, marginBottom: 18,
            background: 'rgba(75,123,255,.08)', border: '1px solid rgba(75,123,255,.2)',
          }}>
            <span style={{ fontSize: 17 }}>🎮</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 2 }}>Simulator</div>
              <div style={{ fontSize: 12.5, fontWeight: 700 }}>
                Best: <span style={{ color: '#5b9fff' }}>{Math.round(bestSim)}%</span>
                {lastSim !== null && Math.round(lastSim) !== Math.round(bestSim) && (
                  <span style={{ color: 'var(--muted)', fontWeight: 400, marginLeft: 8, fontSize: 11 }}>
                    zadnji: {Math.round(lastSim)}%
                  </span>
                )}
              </div>
            </div>
            <div style={{ fontSize: 10.5, color: 'var(--muted)', textAlign: 'right' }}>
              <div style={{ fontWeight: 700, color: 'var(--text)' }}>{simDone}×</div>
              <div>odradirano</div>
            </div>
          </div>
        )}

        {/* ── Upsell if child is on free plan ── */}
        {!isPro && (
          <div style={{
            padding: '14px 16px', borderRadius: 12,
            background: 'linear-gradient(135deg,rgba(124,92,252,.1),rgba(75,123,255,.05))',
            border: '1px solid rgba(124,92,252,.28)',
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, marginBottom: 3 }}>
                🔓 {displayName} nema Pro plan
              </div>
              <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.55 }}>
                Pro aktivira AI tjedni briefing, naprednu analitiku slabih točaka i neograničene simulatore.
              </div>
            </div>
            <a href="/pro" style={{
              padding: '9px 15px', borderRadius: 10, fontSize: 12, fontWeight: 700,
              background: 'linear-gradient(135deg,var(--blue),var(--violet))',
              color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0,
              boxShadow: '0 4px 14px rgba(75,123,255,.3)',
            }}>
              Aktiviraj →
            </a>
          </div>
        )}

        {/* ── Remove link ── */}
        {onRemove && (
          <div style={{ marginTop: 14, textAlign: 'right' }}>
            <button
              onClick={() => onRemove(linkId)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--fb)',
                padding: '4px 2px',
              }}
            >
              Ukloni praćenje ×
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
