'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { PAYWALL_COPY } from '@/lib/ab/paywallVariant'
import { usePaywallVariant } from '@/lib/ab/usePaywallVariant'
import { getLatestBriefing } from '@/lib/prijemni/medicinarMode'
import { AIBriefingSkeleton } from '@/components/prijemni/skeletons/ComponentSkeletons'

export default function AIBriefingCard({ studij, isPro, onGenerate }) {
  const [briefing, setBriefing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const variant = usePaywallVariant()

  useEffect(() => {
    getLatestBriefing(studij?.id).then(b => { setBriefing(b); setLoading(false) })
  }, [studij?.id])

  const copy = PAYWALL_COPY.aiBriefing[variant]

  if (loading) return <AIBriefingSkeleton/>

  if (!isPro) {
    return (
      <section style={{
        padding:'24px 26px',borderRadius:18,position:'relative',overflow:'hidden',
        background:'linear-gradient(120deg,rgba(75,123,255,.1),rgba(124,92,252,.06) 50%,rgba(233,180,70,.04))',
        border:'1px solid rgba(75,123,255,.28)',
      }}>
        <div style={{
          position:'absolute',top:-40,right:-40,width:200,height:200,borderRadius:'50%',
          background:'radial-gradient(circle,rgba(75,123,255,.22),transparent 70%)',filter:'blur(40px)',
        }}/>
        <div style={{position:'relative',zIndex:1,display:'flex',alignItems:'center',gap:16,flexWrap:'wrap'}}>
          <div style={{
            width:52,height:52,borderRadius:14,flexShrink:0,
            background:'linear-gradient(135deg,var(--blue),var(--violet))',
            display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,
            boxShadow:'0 4px 20px rgba(75,123,255,.4)',
          }}>🤖</div>
          <div style={{flex:1,minWidth:220}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--blue)',marginBottom:4}}>
              {copy.badge}
            </div>
            <div style={{fontSize:15,fontWeight:800,color:'var(--text)',marginBottom:4,fontFamily:'var(--fh)',letterSpacing:'-.015em'}}>
              {copy.title}
            </div>
            <div style={{fontSize:12.5,color:'var(--muted)',lineHeight:1.55}}>
              {copy.desc}
            </div>
          </div>
          <a href={`/pro?from=ai-briefing&ab=${variant}`} style={{
            padding:'10px 18px',borderRadius:11,fontSize:13,fontWeight:700,
            background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',textDecoration:'none',
            boxShadow:'0 4px 14px rgba(75,123,255,.3)',whiteSpace:'nowrap',flexShrink:0,
          }}>{copy.cta}</a>
        </div>
      </section>
    )
  }

  if (!briefing) {
    return (
      <section style={{
        padding:'24px 26px',borderRadius:18,
        background:'linear-gradient(160deg,rgba(14,18,32,.7),rgba(14,18,32,.3))',
        border:'1px solid rgba(75,123,255,.25)',
      }}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:14}}>
          <div style={{
            width:44,height:44,borderRadius:12,
            background:'linear-gradient(135deg,var(--blue),var(--violet))',
            display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,
          }}>🤖</div>
          <div style={{flex:1}}>
            <div style={{fontFamily:'var(--fh)',fontSize:16,fontWeight:700,letterSpacing:'-.01em'}}>
              AI briefing za ovaj tjedan
            </div>
            <div style={{fontSize:12,color:'var(--muted)',marginTop:2}}>Claude analizira tvoj progress</div>
          </div>
        </div>
        <button onClick={async () => {
          setGenerating(true)
          try {
            const supabase = createClient()
            const { data: { session } } = await supabase.auth.getSession()
            await fetch('/api/medicinar/briefing/generate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${session.access_token}` },
              body: JSON.stringify({ studij_id: studij.id }),
            })
            onGenerate?.()
          } finally {
            setGenerating(false)
          }
        }} disabled={generating} style={{
          width:'100%',padding:'11px',borderRadius:11,fontSize:13,fontWeight:700,cursor:'pointer',
          background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',border:'none',
          boxShadow:'0 4px 16px rgba(75,123,255,.3)',fontFamily:'var(--fb)',
        }}>
          {generating ? '🤖 Generiram briefing...' : '✨ Generiraj briefing'}
        </button>
      </section>
    )
  }

  return (
    <section style={{
      padding:'24px 26px',borderRadius:18,
      background:'linear-gradient(160deg,rgba(75,123,255,.08),rgba(14,18,32,.3))',
      border:'1px solid rgba(75,123,255,.25)',position:'relative',overflow:'hidden',
    }}>
      <div style={{
        position:'absolute',top:-50,right:-30,width:220,height:220,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(75,123,255,.15),transparent 70%)',filter:'blur(50px)',
      }}/>

      <div style={{position:'relative',zIndex:1}}>
        <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16,flexWrap:'wrap'}}>
          <div style={{
            width:40,height:40,borderRadius:11,flexShrink:0,
            background:'linear-gradient(135deg,var(--blue),var(--violet))',
            display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,
          }}>🤖</div>
          <div style={{flex:1,minWidth:180}}>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--blue)',marginBottom:3}}>
              AI briefing • tjedan {new Date(briefing.week_of).toLocaleDateString('hr-HR', {day:'numeric',month:'short'})}
            </div>
            <div style={{fontFamily:'var(--fh)',fontSize:16,fontWeight:700,letterSpacing:'-.01em'}}>
              Tvoj plan za ovaj tjedan
            </div>
          </div>
        </div>

        <p style={{fontSize:14,lineHeight:1.7,color:'var(--text)',marginBottom:18}}>
          {briefing.summary}
        </p>

        {briefing.priorities?.length > 0 && (
          <div style={{display:'flex',flexDirection:'column',gap:10,marginBottom:16}}>
            {briefing.priorities.map((p, i) => (
              <div key={i} style={{
                display:'flex',gap:12,padding:'12px 14px',borderRadius:11,
                background:'rgba(0,0,0,.2)',border:'1px solid rgba(75,123,255,.18)',
              }}>
                <div style={{
                  width:24,height:24,borderRadius:7,flexShrink:0,
                  background:'rgba(75,123,255,.18)',color:'var(--blue)',border:'1px solid rgba(75,123,255,.3)',
                  display:'flex',alignItems:'center',justifyContent:'center',fontSize:11,fontWeight:700,
                }}>{i+1}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:13,fontWeight:700,color:'var(--text)',marginBottom:4,letterSpacing:'-.005em'}}>
                    {p.topic}
                  </div>
                  <div style={{fontSize:12,color:'var(--muted)',lineHeight:1.55,marginBottom:6}}>
                    {p.why}
                  </div>
                  <div style={{fontSize:12,color:'var(--blue)',lineHeight:1.5,fontWeight:500}}>
                    → {p.action}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {briefing.encouragement && (
          <div style={{
            padding:'12px 14px',borderRadius:10,
            background:'rgba(62,207,110,.08)',border:'1px solid rgba(62,207,110,.22)',
            fontSize:12.5,color:'var(--text)',fontStyle:'italic',lineHeight:1.55,
          }}>
            💚 {briefing.encouragement}
          </div>
        )}
      </div>
    </section>
  )
}
