'use client'
import { useMemo } from 'react'
import { PAYWALL_COPY } from '@/lib/ab/paywallVariant'
import { usePaywallVariant } from '@/lib/ab/usePaywallVariant'

/**
 * Crude ali stvarno informativan estimator vjerojatnosti upisa.
 * Formula:
 *   base = weighted avg (coverage 20%, mastery 25%, vjezbe 25%, sim 30%)
 *   gap = (prag_2025 - estimated_bodovi) / 1000
 *   rate = clamp(base * 1.0 - gap * 200, 5, 95)
 *
 * Ovo NIJE statištki rigorozno — to je motivacijski estimator.
 * Kasnije replace-ati s regression model-om na historical data.
 */
function estimatePuttingRate(studij, progress, userScores) {
  if (!progress || progress.length === 0) return null

  // Per-predmet score = weighted
  const predmetScores = progress.map(p => {
    const coverage = p.skripte_total_chapters ? (p.skripte_viewed_chapters / p.skripte_total_chapters) * 100 : 0
    const mastery = p.skripte_total_chapters ? (p.skripte_mastered_chapters / p.skripte_total_chapters) * 100 : 0
    const acc = p.vjezbe_accuracy ?? 0
    const sim = p.simulator_best_score ?? 0
    return coverage * 0.2 + mastery * 0.25 + acc * 0.25 + (sim > 0 ? sim * 0.3 : 0)
  })

  const avgProgress = predmetScores.reduce((a, b) => a + b, 0) / predmetScores.length

  // Jednostavan gap check: ako imamo user_scores + prag_2025
  let penaltyFactor = 1.0
  if (studij.prag_2025 && userScores?.ukupno_bodovi) {
    const gap = studij.prag_2025 - userScores.ukupno_bodovi
    if (gap > 0) penaltyFactor = Math.max(0.3, 1 - gap / 200)
  }

  const rate = Math.max(5, Math.min(95, avgProgress * penaltyFactor))
  return Math.round(rate)
}

export default function PuttingRateCard({ studij, progress, isPro }) {
  const variant = usePaywallVariant()
  const copy = PAYWALL_COPY.puttingRate[variant]
  const rate = useMemo(() => estimatePuttingRate(studij, progress, null), [studij, progress])

  if (!isPro) {
    return (
      <section style={{
        padding:'18px 20px',borderRadius:14,
        background:'linear-gradient(160deg,rgba(124,92,252,.1),rgba(75,123,255,.04))',
        border:'1px solid rgba(124,92,252,.25)',
        position:'relative',overflow:'hidden',
      }}>
        <div style={{filter:'blur(5px)',pointerEvents:'none',userSelect:'none',opacity:.6}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--muted)',marginBottom:10}}>
            📊 Vjerojatnost upisa
          </div>
          <div style={{fontFamily:'var(--fh)',fontSize:44,fontWeight:900,color:'var(--blue)',letterSpacing:'-.02em'}}>
            ••%
          </div>
          <div style={{fontSize:11,color:'var(--muted)',marginTop:4}}>Bazirano na tvom progressu</div>
        </div>
        <div style={{
          position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',
          background:'linear-gradient(to bottom,rgba(7,9,15,.2),rgba(7,9,15,.85))',borderRadius:14,
        }}>
          <div style={{textAlign:'center',padding:'0 16px'}}>
            <div style={{fontSize:26,marginBottom:8}}>🔒</div>
            <div style={{
              display:'inline-block',padding:'2px 9px',borderRadius:99,marginBottom:8,
              fontSize:10,fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',
              background:'rgba(75,123,255,.15)',color:'var(--blue)',border:'1px solid rgba(75,123,255,.25)',
            }}>{copy.badge}</div>
            <div style={{fontSize:12.5,fontWeight:700,marginBottom:4}}>{copy.title}</div>
            <div style={{fontSize:11,color:'var(--muted)',lineHeight:1.5,marginBottom:10,maxWidth:220}}>
              {copy.desc}
            </div>
            <a href={`/pro?from=putting-rate&ab=${variant}`} style={{
              display:'inline-block',padding:'7px 14px',borderRadius:9,fontSize:11.5,fontWeight:700,
              background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',textDecoration:'none',
            }}>{copy.cta}</a>
          </div>
        </div>
      </section>
    )
  }

  if (rate === null) {
    return (
      <section style={{padding:'18px 20px',borderRadius:14,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
        <div style={{fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--muted)',marginBottom:10}}>
          📊 Vjerojatnost upisa
        </div>
        <div style={{fontSize:12,color:'var(--muted)',textAlign:'center',padding:'16px 0',lineHeight:1.6}}>
          Počni rješavati zadatke da vidimo procjenu.
        </div>
      </section>
    )
  }

  const color = rate >= 70 ? '#3ecf6e' : rate >= 45 ? 'var(--gold)' : '#fb923c'
  const label = rate >= 70 ? 'Jako dobro' : rate >= 45 ? 'Na dobrom putu' : 'Moraš ubrzati'

  return (
    <section style={{
      padding:'20px 22px',borderRadius:14,
      background:`linear-gradient(160deg,${color}10,${color}03)`,
      border:`1px solid ${color}33`,
    }}>
      <div style={{fontSize:11,fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--muted)',marginBottom:14}}>
        📊 Vjerojatnost upisa
      </div>
      <div style={{display:'flex',alignItems:'flex-end',gap:12,marginBottom:10}}>
        <div style={{fontFamily:'var(--fh)',fontSize:48,fontWeight:900,color:color,letterSpacing:'-.03em',lineHeight:1}}>
          {rate}<span style={{fontSize:20,color:'var(--muted)',fontWeight:500}}>%</span>
        </div>
        <div style={{paddingBottom:4}}>
          <div style={{fontSize:12,fontWeight:700,color:color,marginBottom:2}}>{label}</div>
        </div>
      </div>

      <div style={{height:8,borderRadius:99,background:'rgba(255,255,255,.06)',overflow:'hidden',marginBottom:10}}>
        <div style={{
          height:'100%',width:`${rate}%`,borderRadius:99,
          background:`linear-gradient(90deg,${color},${color}cc)`,
          transition:'width .8s cubic-bezier(.16,1,.3,1)',
        }}/>
      </div>

      <div style={{fontSize:11,color:'var(--muted)',lineHeight:1.5}}>
        Procjena bazirana na tvom progressu i povijesnim pragovima {studij.fak_short}. Broj se ažurira kako učiš.
      </div>

      <div style={{
        marginTop:12,paddingTop:12,borderTop:'1px solid rgba(255,255,255,.05)',
        fontSize:10,color:'var(--muted)',lineHeight:1.5,
      }}>
        ⚠ Ovo je motivacijska procjena, ne garancija. Stvarni upis ovisi o rezultatu prijemnog, konkurenciji i drugim faktorima.
      </div>
    </section>
  )
}
