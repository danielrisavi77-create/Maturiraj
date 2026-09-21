'use client'
import { useState } from 'react'
import { PAYWALL_COPY } from '@/lib/ab/paywallVariant'
import { usePaywallVariant } from '@/lib/ab/usePaywallVariant'

export default function SimulatorLauncher({ studij, plan }) {
  const isPro = plan === 'pro'
  const isStandard = plan === 'standard' || isPro
  const [weeklyUsed] = useState(0)  // TODO: fetch from Supabase
  const variant = usePaywallVariant()
  const copy = PAYWALL_COPY.simulatorFree[variant]

  const canLaunch = isStandard || weeklyUsed < 1

  return (
    <section style={{
      padding:'24px 26px',borderRadius:18,
      background:'linear-gradient(135deg,rgba(251,146,60,.08),rgba(248,113,113,.04))',
      border:'1px solid rgba(251,146,60,.22)',
    }}>
      <div style={{display:'flex',alignItems:'flex-start',gap:16,marginBottom:18,flexWrap:'wrap'}}>
        <div style={{
          width:52,height:52,borderRadius:14,flexShrink:0,
          background:'linear-gradient(135deg,#fb923c,#f59e0b)',
          display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,
          boxShadow:'0 4px 18px rgba(251,146,60,.3)',
        }}>🎯</div>
        <div style={{flex:1,minWidth:220}}>
          <h2 style={{fontFamily:'var(--fh)',fontSize:18,fontWeight:700,letterSpacing:'-.015em',marginBottom:4}}>
            Timed simulator — {studij.fak_short}
          </h2>
          <div style={{fontSize:13,color:'var(--muted)',lineHeight:1.55}}>
            120 pitanja • 3 sata • Identičan format kao pravi prijemni. Rezultati se automatski matchaju s leaderboard-om.
          </div>
        </div>
      </div>

      <div style={{
        display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))',gap:10,marginBottom:18,
      }}>
        <SimStat label="Pitanja" value="120"/>
        <SimStat label="Trajanje" value="3h"/>
        <SimStat label="Predmeti" value={studij.predmeti?.length ?? '—'}/>
        <SimStat label="Prolaz" value="55%"/>
      </div>

      {!isStandard && (
        <div style={{
          padding:'12px 14px',borderRadius:11,marginBottom:14,
          background:'rgba(233,180,70,.06)',border:'1px solid rgba(233,180,70,.25)',
          display:'flex',alignItems:'center',gap:10,flexWrap:'wrap',
        }}>
          <span style={{fontSize:18}}>⭐</span>
          <div style={{flex:1,fontSize:12,color:'var(--muted)',lineHeight:1.5,minWidth:200}}>
            <strong style={{color:'var(--gold)'}}>{copy.label}</strong> {copy.desc}
          </div>
          <a href={`/pro?from=simulator&ab=${variant}`} style={{
            padding:'6px 12px',borderRadius:8,fontSize:11.5,fontWeight:700,
            background:'transparent',color:'var(--gold)',border:'1px solid rgba(233,180,70,.3)',
            textDecoration:'none',whiteSpace:'nowrap',
          }}>{copy.cta}</a>
        </div>
      )}

      <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
        <button
          onClick={() => {
            // TODO: POST /api/simulator/start → redirect na /medicinar/simulator/:attemptId
            window.location.href = `/medicinar/simulator/start?studij=${studij.id}`
          }}
          disabled={!canLaunch}
          style={{
            flex:1,minWidth:200,padding:'13px 20px',borderRadius:12,fontSize:14,fontWeight:700,cursor:canLaunch?'pointer':'not-allowed',
            background:canLaunch?'linear-gradient(135deg,#fb923c,#f59e0b)':'rgba(255,255,255,.06)',
            color:canLaunch?'#160d00':'var(--muted)',border:'none',
            boxShadow:canLaunch?'0 4px 18px rgba(251,146,60,.3)':'none',fontFamily:'var(--fb)',
            transition:'transform .15s',
          }}>
          🚀 Pokreni simulator
        </button>
        <button
          onClick={() => window.location.href = `/medicinar/simulator/history?studij=${studij.id}`}
          style={{
            padding:'13px 20px',borderRadius:12,fontSize:14,fontWeight:600,cursor:'pointer',
            background:'rgba(255,255,255,.06)',color:'var(--text)',border:'1px solid var(--bdr)',fontFamily:'var(--fb)',
          }}>
          📊 Povijest
        </button>
      </div>
    </section>
  )
}

function SimStat({ label, value }) {
  return (
    <div style={{
      padding:'10px 12px',borderRadius:10,background:'rgba(255,255,255,.03)',border:'1px solid var(--bdr)',
      textAlign:'center',
    }}>
      <div style={{fontFamily:'var(--fh)',fontSize:18,fontWeight:800,color:'var(--text)',letterSpacing:'-.015em'}}>
        {value}
      </div>
      <div style={{fontSize:10,color:'var(--muted)',letterSpacing:'.05em',textTransform:'uppercase',fontWeight:600,marginTop:2}}>
        {label}
      </div>
    </div>
  )
}
