'use client'
import { useEffect, useState, useRef } from 'react'
import ShareStoryCard from '@/components/shared/ShareStoryCard'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { firePragConfetti, fireDoubleConfetti } from '@/lib/effects/confetti'

/**
 * SimulatorResultsShare — MEF/prijemni simulator share component
 *
 * Loads the real percentile from Supabase (simulator_attempts.percentile)
 * and surfaces a ShareStoryCard with "Top X% u MEF simulatoru" headline.
 *
 * Props:
 *   attemptId    string  UUID of the simulator_attempts row
 *   studij       object  { id, fak_short, naziv, predmeti }
 *   scorePct     number  0-100 overall score
 *   correctCount number  correct answers
 *   totalCount   number  total questions
 *   breakdown    array   [{ subject, correct, total }] optional
 */
export default function SimulatorResultsShare({
  attemptId,
  studij,
  scorePct,
  correctCount,
  totalCount,
  breakdown = [],
}) {
  const [percentile, setPercentile] = useState(null)
  const [loading, setLoading]       = useState(!!attemptId)
  const confettiFiredRef            = useRef(false)
  const supabase = createClientComponentClient()

  // Confetti kad score prijeđe MEF/simulator prolaz prag od 55%
  useEffect(() => {
    if (confettiFiredRef.current) return
    if (typeof scorePct !== 'number') return
    confettiFiredRef.current = true
    if (scorePct >= 55) {
      const colors = [accentColor, '#3ecf6e', '#e9b446', '#fff']
      setTimeout(() => fireDoubleConfetti(colors), 600)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Faculty color palette
  const FAC_COLORS = {
    mef:    '#f87171',  // medical red
    pmf:    '#60a5fa',  // math/science blue
    pravo:  '#a78bfa',  // law purple
    efs:    '#34d399',  // economics green
    fer:    '#fbbf24',  // engineering amber
    geof:   '#22d3ee',  // geo teal
    default:'#fb923c',  // orange
  }
  const FAK_EMOJI = {
    mef: '🩺', pmf: '⚗️', pravo: '⚖️', efs: '📈', fer: '⚙️', geof: '🌍', default: '🎓',
  }

  const fakKey = (studij?.id || '').toLowerCase().split('_')[0] || 'default'
  const accentColor = FAC_COLORS[fakKey] || FAC_COLORS.default
  const emoji       = FAK_EMOJI[fakKey]  || FAK_EMOJI.default
  const fakultetShort = studij?.fak_short || studij?.id || null
  const label = `${studij?.naziv || fakultetShort || 'Prijemni'} — Simulator 2026`

  // Fetch / trigger percentile computation
  useEffect(() => {
    if (!attemptId) return

    async function fetchPercentile() {
      setLoading(true)
      try {
        // First check if percentile is already computed
        const { data: attempt } = await supabase
          .from('simulator_attempts')
          .select('percentile')
          .eq('id', attemptId)
          .single()

        if (attempt?.percentile !== null && attempt?.percentile !== undefined) {
          setPercentile(Number(attempt.percentile))
          setLoading(false)
          return
        }

        // Trigger computation via RPC
        const { data: pct } = await supabase.rpc('compute_attempt_percentile', {
          p_attempt_id: attemptId,
        })

        setPercentile(pct !== null ? Number(pct) : null)
      } catch (err) {
        console.warn('[SimulatorResultsShare] percentile fetch failed', err)
        setPercentile(null)
      }
      setLoading(false)
    }

    fetchPercentile()
  }, [attemptId])

  // Render percentile teaser while loading
  const topPct = percentile !== null ? Math.max(1, 100 - Math.round(percentile)) : null

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Percentile badge — shown immediately if available */}
      {topPct !== null && (
        <div style={{
          padding: '16px 20px',
          borderRadius: 16,
          background: topPct <= 10
            ? 'linear-gradient(135deg,rgba(62,207,110,.15),rgba(62,207,110,.05))'
            : topPct <= 25
            ? 'linear-gradient(135deg,rgba(233,180,70,.15),rgba(233,180,70,.05))'
            : `linear-gradient(135deg,${accentColor}22,${accentColor}08)`,
          border: `1px solid ${topPct <= 10 ? 'rgba(62,207,110,.4)' : topPct <= 25 ? 'rgba(233,180,70,.4)' : accentColor + '44'}`,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{ fontSize: 36 }}>
            {topPct <= 10 ? '🏆' : topPct <= 25 ? '🥈' : topPct <= 50 ? '🥉' : '📊'}
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--fh)',
              fontSize: 32,
              fontWeight: 900,
              letterSpacing: '-.03em',
              color: topPct <= 10 ? '#3ecf6e' : topPct <= 25 ? 'var(--gold)' : 'var(--text)',
              lineHeight: 1,
              marginBottom: 4,
            }}>
              Top {topPct}%
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.4 }}>
              od svih koji su rješavali {fakultetShort ? fakultetShort + ' ' : ''}simulator
              {topPct <= 10 && ' — outstanding!'}
              {topPct > 10 && topPct <= 25 && ' — odlično!'}
              {topPct > 25 && topPct <= 50 && ' — iznad prosjeka!'}
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div style={{
          padding: '14px 18px',
          borderRadius: 12,
          background: 'rgba(255,255,255,.03)',
          border: '1px solid var(--bdr)',
          fontSize: 13,
          color: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
        }}>
          <span style={{ animation: 'spin 1s linear infinite', display: 'inline-block' }}>⏳</span>
          Izračunavam tvoj percentil u odnosu na ostale kandidate...
        </div>
      )}

      {/* Share story card */}
      <ShareStoryCard
        score={scorePct}
        correct={correctCount}
        total={totalCount}
        percentile={percentile}
        label={label}
        facultyShort={fakultetShort}
        accentColor={accentColor}
        emoji={emoji}
        breakdown={breakdown}
      />
    </div>
  )
}
