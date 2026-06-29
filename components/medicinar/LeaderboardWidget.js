'use client'
import { useState, useEffect } from 'react'
import { getLeaderboardStats } from '@/lib/prijemni/medicinarMode'
import { LeaderboardSkeleton } from '@/components/prijemni/skeletons/ComponentSkeletons'

export default function LeaderboardWidget({ studij, userProgress }) {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLeaderboardStats(studij.id)
      .then(d => { setStats(d); setLoading(false) })
  }, [studij.id])

  if (loading) return <LeaderboardSkeleton/>

  if (!stats || stats.total_attempts === 0) {
    return (
      <section style={{
        padding:'18px 20px',borderRadius:14,background:'var(--s1)',border:'1px solid var(--bdr)',
      }}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--muted)',marginBottom:10}}>
          🏆 Leaderboard
        </div>
        <div style={{fontSize:12,color:'var(--muted)',textAlign:'center',padding:'20px 0',lineHeight:1.6}}>
          Još nema rezultata simulatora za {studij.fak_short}. Budi prvi/a!
        </div>
      </section>
    )
  }

  // Izračun user-ovog percentila ako ima simulator score
  const userBest = userProgress
    .map(p => p.simulator_best_score)
    .filter(s => s !== null && s !== undefined)
    .reduce((max, s) => Math.max(max, s), 0)

  const userPercentile = userBest > 0 && stats.p90_score
    ? userBest >= stats.p90_score ? 90
      : userBest >= stats.p75_score ? 75
      : userBest >= stats.median_score ? 50
      : userBest >= stats.p25_score ? 25
      : 10
    : null

  return (
    <section style={{
      padding:'18px 20px',borderRadius:14,
      background:'linear-gradient(160deg,rgba(233,180,70,.06),rgba(233,180,70,.01))',
      border:'1px solid rgba(233,180,70,.22)',
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--gold)'}}>
          🏆 Leaderboard
        </div>
        <div style={{fontSize:10,color:'var(--muted)'}}>
          {stats.unique_users} korisnika
        </div>
      </div>

      {userPercentile !== null ? (
        <div style={{
          padding:'14px 16px',borderRadius:12,marginBottom:14,
          background:userPercentile >= 75 ? 'rgba(62,207,110,.1)' : userPercentile >= 50 ? 'rgba(233,180,70,.08)' : 'rgba(251,146,60,.08)',
          border:`1px solid ${userPercentile >= 75 ? 'rgba(62,207,110,.28)' : userPercentile >= 50 ? 'rgba(233,180,70,.28)' : 'rgba(251,146,60,.28)'}`,
        }}>
          <div style={{fontSize:10,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--muted)',marginBottom:3}}>
            Tvoj rang
          </div>
          <div style={{
            fontFamily:'var(--fh)',fontSize:22,fontWeight:800,letterSpacing:'-.02em',
            color:userPercentile >= 75 ? '#3ecf6e' : userPercentile >= 50 ? 'var(--gold)' : '#fb923c',
          }}>
            Top {100 - userPercentile}%
          </div>
          <div style={{fontSize:11,color:'var(--muted)',marginTop:2}}>
            Tvoj best score: <strong style={{color:'var(--text)'}}>{Math.round(userBest)}%</strong>
          </div>
        </div>
      ) : (
        <div style={{
          padding:'12px 14px',borderRadius:10,marginBottom:14,
          background:'rgba(0,0,0,.15)',border:'1px dashed var(--bdr)',
          fontSize:12,color:'var(--muted)',textAlign:'center',lineHeight:1.5,
        }}>
          Odradi 1 simulator da vidiš svoj rang.
        </div>
      )}

      <div style={{display:'flex',flexDirection:'column',gap:7}}>
        <LeaderboardBar label="Top 10%" value={Math.round(stats.p90_score)} highlight={userPercentile >= 90} color="#3ecf6e"/>
        <LeaderboardBar label="Top 25%" value={Math.round(stats.p75_score)} highlight={userPercentile >= 75 && userPercentile < 90} color="var(--gold)"/>
        <LeaderboardBar label="Medijan" value={Math.round(stats.median_score)} highlight={userPercentile >= 50 && userPercentile < 75} color="var(--blue)"/>
        <LeaderboardBar label="Bottom 25%" value={Math.round(stats.p25_score)} highlight={userPercentile < 25} color="var(--muted)"/>
      </div>

      <div style={{
        marginTop:12,padding:'8px 12px',borderRadius:8,background:'rgba(255,255,255,.03)',
        fontSize:10,color:'var(--muted)',textAlign:'center',lineHeight:1.5,
      }}>
        Anonimno — nitko ne vidi tvoje ime ni rezultate.
      </div>
    </section>
  )
}

function LeaderboardBar({ label, value, highlight, color }) {
  return (
    <div style={{
      display:'flex',alignItems:'center',gap:10,padding:'6px 10px',borderRadius:8,
      background:highlight?`${color === 'var(--muted)' ? 'rgba(106,130,168,.12)' : color + '18'}`:'transparent',
      border:highlight?`1px solid ${color === 'var(--muted)' ? 'var(--bdr)' : color + '33'}`:'1px solid transparent',
    }}>
      <div style={{
        width:7,height:7,borderRadius:'50%',background:color,flexShrink:0,
        boxShadow:highlight?`0 0 8px ${color}`:'none',
      }}/>
      <span style={{fontSize:11.5,color:highlight?'var(--text)':'var(--muted)',fontWeight:highlight?700:500,flex:1}}>{label}</span>
      <span style={{fontSize:12.5,fontWeight:700,color:color,fontFamily:'var(--fh)'}}>{value}%</span>
    </div>
  )
}
