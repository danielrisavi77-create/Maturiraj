'use client'
import { useEffect, useState } from 'react'
import { getPaywallVariant, PAYWALL_COPY } from '@/lib/ab/paywallVariant'

export default function WeaknessHeatmap({ progress, color, isPro }) {
  const [variant, setVariant] = useState('control')
  useEffect(() => { setVariant(getPaywallVariant()) }, [])
  const copy = PAYWALL_COPY.weaknessLock[variant]
  // Aggregate top weak topics preko svih predmeta
  const allWeak = progress
    .flatMap(p => (p.weak_topics || []).map(w => ({ ...w, predmet: p.predmet })))
    .filter(w => w.attempts >= 5)  // samo topics s minimumom data
    .sort((a, b) => a.accuracy - b.accuracy)
    .slice(0, isPro ? 8 : 3)

  const hasAny = allWeak.length > 0

  return (
    <section style={{
      padding: '20px 22px', borderRadius: 16,
      background: 'linear-gradient(160deg,rgba(248,113,113,.06),rgba(248,113,113,.02))',
      border: '1px solid rgba(248,113,113,.2)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14,flexWrap:'wrap',gap:8}}>
        <div>
          <h2 style={{fontFamily:'var(--fh)',fontSize:18,fontWeight:700,letterSpacing:'-.015em',marginBottom:3}}>
            🔥 Gdje si najslabiji/a
          </h2>
          <div style={{fontSize:12,color:'var(--muted)'}}>
            {hasAny
              ? 'Tu ciljaj fokus — najveći gain po uloženom vremenu.'
              : 'Nema dovoljno podataka. Riješi 20+ zadataka da vidimo slabosti.'}
          </div>
        </div>
        {!isPro && (
          <div style={{
            fontSize:10,fontWeight:700,padding:'3px 9px',borderRadius:99,
            background:'rgba(233,180,70,.12)',color:'var(--gold)',border:'1px solid rgba(233,180,70,.25)',
            letterSpacing:'.06em',textTransform:'uppercase',
          }}>
            Pro — full heatmap
          </div>
        )}
      </div>

      {hasAny ? (
        <div style={{display:'flex',flexDirection:'column',gap:8}}>
          {allWeak.map((w, i) => {
            const severity = w.accuracy < 30 ? 'critical' : w.accuracy < 50 ? 'high' : 'medium'
            const sevColor = { critical: '#f87171', high: '#fb923c', medium: '#e9b446' }[severity]
            return (
              <div key={i} style={{
                display:'flex',alignItems:'center',gap:12,padding:'11px 14px',borderRadius:11,
                background:'rgba(0,0,0,.2)',border:`1px solid ${sevColor}22`,
              }}>
                <div style={{
                  width:28,height:28,borderRadius:8,flexShrink:0,
                  background:`${sevColor}22`,color:sevColor,border:`1px solid ${sevColor}44`,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontSize:11,fontWeight:700,
                }}>{i+1}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:13,fontWeight:700,color:'var(--text)',marginBottom:2,letterSpacing:'-.005em'}}>
                    {w.topic}
                  </div>
                  <div style={{fontSize:11,color:'var(--muted)'}}>
                    {w.predmet} • {w.attempts} pokušaja
                  </div>
                </div>
                <div style={{textAlign:'right',flexShrink:0}}>
                  <div style={{fontFamily:'var(--fh)',fontSize:18,fontWeight:800,color:sevColor,letterSpacing:'-.02em'}}>
                    {Math.round(w.accuracy)}%
                  </div>
                  <div style={{fontSize:10,color:'var(--muted)',fontWeight:500}}>uspjeh</div>
                </div>
              </div>
            )
          })}
          {!isPro && progress.some(p => (p.weak_topics || []).length > 3) && (
            <div style={{
              padding:'10px 14px',borderRadius:10,background:'rgba(233,180,70,.05)',border:'1px dashed rgba(233,180,70,.3)',
              fontSize:12,color:'var(--muted)',textAlign:'center',marginTop:4,
            }}>
              {copy.text(progress.reduce((s,p) => s + (p.weak_topics?.length || 0), 0) - 3)}{' '}
              <a href={`/pro?from=heatmap&ab=${variant}`} style={{color:'var(--gold)',fontWeight:700}}>{copy.cta}</a>
            </div>
          )}
        </div>
      ) : (
        <div style={{
          padding:'32px 16px',textAlign:'center',borderRadius:12,
          background:'rgba(0,0,0,.15)',border:'1px dashed var(--bdr)',
        }}>
          <div style={{fontSize:34,marginBottom:10,opacity:.5}}>📊</div>
          <div style={{fontSize:13,color:'var(--muted)',lineHeight:1.6}}>
            Počni rješavati vježbe iz skripti — sustav automatski detektira tvoje slabosti.
          </div>
        </div>
      )}
    </section>
  )
}
