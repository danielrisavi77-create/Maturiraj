'use client'
import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import PredmetProgressCard from '@/components/medicinar/PredmetProgressCard'
import WeaknessHeatmap from '@/components/medicinar/WeaknessHeatmap'
import LeaderboardWidget from '@/components/medicinar/LeaderboardWidget'
import AIBriefingCard from '@/components/medicinar/AIBriefingCard'
import SimulatorLauncher from '@/components/medicinar/SimulatorLauncher'
import PuttingRateCard from '@/components/medicinar/PuttingRateCard'
import { getUserTargets, getPredmetProgress, getLeaderboardStats, getLatestBriefing } from '@/lib/prijemni/medicinarMode'
import MedicinarTour from '@/components/medicinar/MedicinarTour'
import { getUserPlan } from '@/lib/supabase/pricing'
import MedicinarSkeleton from '@/components/medicinar/MedicinarSkeleton'
import SkeletonNav from '@/components/ui/SkeletonNav'

export default function MedicinarDashboard() {
  const params = useParams()
  const router = useRouter()
  const studijId = params.studijId

  const [state, setState] = useState({
    loading: true,
    error: null,
    studij: null,
    progress: [],
    leaderboard: null,
    briefing: null,
    plan: 'free',
  })

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const supabase = createClient()
        const { data: { session } } = await supabase.auth.getSession()
        if (!session) {
          router.replace(`/login?redirect=/medicinar/${studijId}`)
          return
        }

        const [studijRes, targetsRes, plan] = await Promise.all([
          supabase.from('studiji_view').select('*').eq('id', studijId).maybeSingle(),
          getUserTargets(),
          getUserPlan(),
        ])

        if (cancelled) return

        if (!studijRes.data) {
          router.replace('/prijemni')
          return
        }

        // Provjeri je li studij user-ov target
        const isTarget = targetsRes.some(t => t.studij_id === studijId)
        if (!isTarget) {
          // Auto-add kao target (ne blokira UI ako ne uspije)
          supabase.from('user_target_studiji').upsert({
            user_id: session.user.id,
            studij_id: studijId,
            active: true,
          }).then(() => {}).catch(() => {})
        }

        // Fetch progress — sve sekundarne pozive radimo paralelno i gracefully
        const predmeti = (studijRes.data.predmeti || []).map(p => p.toLowerCase().split(' ')[0])
        const [progressRes, leaderboardRes, briefingRes] = await Promise.all([
          getPredmetProgress(predmeti).catch(() => []),
          getLeaderboardStats(studijId).catch(() => null),
          getLatestBriefing(studijId).catch(() => null),
        ])

        if (cancelled) return

        setState({
          loading: false,
          error: null,
          studij: studijRes.data,
          progress: progressRes,
          leaderboard: leaderboardRes,
          briefing: briefingRes,
          plan,
          _userEmail: session.user.email,
        })
      } catch (err) {
        if (cancelled) return
        console.error('[MedicinarDashboard] init error:', err)
        setState(s => ({ ...s, loading: false, error: err?.message || 'Greška pri učitavanju.' }))
      }
    })()
    return () => { cancelled = true }
  }, [studijId, router])

  if (state.loading) {
    return (
      <div style={{minHeight:'100vh',background:'var(--bg)',position:'relative',overflow:'hidden'}}>
        <style dangerouslySetInnerHTML={{__html:MM_CSS}}/>
        <div className="mm-orb" style={{top:-120,left:-80,width:520,height:520,background:'radial-gradient(circle,rgba(75,123,255,.15),transparent 70%)'}}/>
        <SkeletonNav onBack={() => router.push('/prijemni')}/>
        <MedicinarSkeleton/>
      </div>
    )
  }

  if (state.error) {
    return (
      <div style={{minHeight:'100vh',background:'var(--bg)',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{textAlign:'center',maxWidth:380,padding:'0 24px'}}>
          <div style={{fontSize:32,marginBottom:16}}>⚠️</div>
          <div style={{fontSize:15,fontWeight:700,color:'var(--text)',marginBottom:8}}>Greška pri učitavanju</div>
          <div style={{fontSize:12,color:'var(--muted)',marginBottom:24,fontFamily:'monospace',wordBreak:'break-word'}}>{state.error}</div>
          <button onClick={() => router.push('/prijemni')} style={{padding:'8px 20px',borderRadius:9,background:'var(--blue)',color:'#fff',border:'none',fontWeight:700,cursor:'pointer',fontSize:13}}>
            ← Nazad na prijemni
          </button>
        </div>
      </div>
    )
  }

  const { studij, progress, leaderboard, briefing, plan } = state
  const fakColor = studij.color
  const isPro = plan === 'pro' || state._userEmail === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{__html: MM_CSS}}/>

      {/* Ambient orbs */}
      <div className="mm-orb" style={{top:-120,left:-80,width:520,height:520,background:`radial-gradient(circle,${fakColor}22,transparent 70%)`}}/>
      <div className="mm-orb" style={{top:320,right:-140,width:420,height:420,background:'radial-gradient(circle,rgba(124,92,252,.18),transparent 70%)'}}/>

      <div className="mm-wrap">
        {/* Hero */}
        <section className="mm-hero">
          <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:12,flexWrap:'wrap'}}>
            <div className="mm-glyph" style={{background:studij.glyph_bg}}>{studij.sym}</div>
            <div style={{flex:1,minWidth:220}}>
              <div className="mm-eye">
                <span className="mm-eye-dot" style={{background:fakColor,boxShadow:`0 0 6px ${fakColor}`}}/>
                {studij.fak_short} • Tvoj cilj
              </div>
              <h1 className="mm-title">{studij.naziv}</h1>
              <div className="mm-sub">
                Dobrodošao/la u Medicinar Mode — tu je sve što trebaš za ciljani upis na {studij.fak_short}.
              </div>
            </div>
          </div>
        </section>

        {/* 2-column layout */}
        <div className="mm-grid">
          {/* Left column — main content */}
          <div className="mm-main">
            {/* AI Briefing (Pro feature) */}
            <div id="mm-tour-briefing">
            <AIBriefingCard
              studij={studij}
              isPro={isPro}
              onGenerate={() => {
                window.dispatchEvent(new CustomEvent('briefing:refresh'))
              }}
            />
            </div>

            {/* Predmeti progress */}
            <section id="mm-tour-progress" className="mm-section">
              <div className="mm-section-head">
                <h2 className="mm-section-title">📚 Gradivo po predmetima</h2>
                <div className="mm-section-hint">Pokrivenost skripti + uspjeh na vježbama</div>
              </div>
              <div className="mm-predmeti-grid">
                {studij.predmeti.map(predmet => {
                  const key = predmet.toLowerCase().split(' ')[0]
                  const data = progress.find(p => p.predmet === key)
                  return (
                    <PredmetProgressCard
                      key={key}
                      predmet={predmet}
                      data={data}
                      color={fakColor}
                    />
                  )
                })}
              </div>
            </section>

            {/* Weakness heatmap */}
            <div id="mm-tour-weakness"><WeaknessHeatmap progress={progress} color={fakColor} isPro={isPro}/></div>

            {/* Simulator launcher */}
            <div id="mm-tour-simulator"><SimulatorLauncher studij={studij} plan={plan}/></div>
          </div>

          {/* Right column — sidebar widgets */}
          <aside className="mm-aside">
            {/* Putting-rate estimator */}
            <PuttingRateCard
              studij={studij}
              progress={progress}
              isPro={isPro}
            />

            {/* Leaderboard */}
            <LeaderboardWidget
              studij={studij}
              stats={leaderboard}
              userProgress={progress}
            />

            {/* Resources quick links */}
            <section className="mm-widget">
              <div className="mm-widget-title">⚡ Povezano</div>
              <a href="/skripte" className="mm-widget-link">📚 Skripte za sve predmete</a>
              <a href="/discere" className="mm-widget-link">🎯 Discere simulatori</a>
              <a href={`/plan-ucenja?target=${studij.id}`} className="mm-widget-link">🗺️ Plan učenja</a>
              <a href={`/prijemni?studij=${studij.id}`} className="mm-widget-link">📋 Detalji prijemnog</a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('tour:start'))}
                className="mm-widget-link"
                style={{background:'none',border:'none',cursor:'pointer',textAlign:'left',width:'100%',padding:'8px 10px'}}
              >❓ Pokreni vodič</button>
            </section>
          </aside>
        </div>
      </div>

      <MedicinarTour isPro={isPro} />
    </div>
  )
}

const MM_CSS = `
  .mm-orb{position:fixed;border-radius:50%;filter:blur(100px);pointer-events:none;z-index:0}

  .mm-wrap{max-width:1280px;margin:0 auto;padding:90px 32px 60px;position:relative;z-index:1}

  .mm-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 11px;border-radius:99px;font-size:11px;font-weight:700}

  .mm-hero{margin-bottom:32px}
  .mm-glyph{
    width:72px;height:72px;border-radius:20px;display:flex;align-items:center;justify-content:center;
    font-size:36px;flex-shrink:0;position:relative
  }
  .mm-glyph::after{content:'';position:absolute;inset:0;border-radius:inherit;border:1px solid rgba(255,255,255,.1)}
  .mm-eye{
    display:inline-flex;align-items:center;gap:7px;font-size:11px;font-weight:700;
    letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-bottom:6px
  }
  .mm-eye-dot{width:6px;height:6px;border-radius:50%;animation:pr-pulse 2s infinite}
  .mm-title{font-family:var(--fh);font-size:clamp(24px,3.6vw,36px);font-weight:800;letter-spacing:-.025em;line-height:1.1;margin-bottom:6px}
  .mm-sub{font-size:14px;color:var(--muted);line-height:1.55;max-width:580px}

  .mm-grid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:24px}
  @media(max-width:960px){.mm-grid{grid-template-columns:1fr}}

  .mm-main{display:flex;flex-direction:column;gap:24px;min-width:0}
  .mm-aside{display:flex;flex-direction:column;gap:16px}

  .mm-section-head{margin-bottom:14px}
  .mm-section-title{font-family:var(--fh);font-size:18px;font-weight:700;letter-spacing:-.015em;margin-bottom:3px}
  .mm-section-hint{font-size:12px;color:var(--muted)}

  .mm-predmeti-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}

  .mm-widget{padding:18px 20px;border-radius:14px;background:var(--s1);border:1px solid var(--bdr)}
  .mm-widget-title{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
  .mm-widget-link{display:block;padding:8px 10px;border-radius:8px;font-size:13px;color:var(--muted);text-decoration:none;transition:all .15s;margin-bottom:2px}
  .mm-widget-link:hover{color:var(--text);background:rgba(255,255,255,.04)}

  @media(max-width:640px){
    .mm-wrap{padding:76px 16px 40px}
    .mm-glyph{width:56px;height:56px;font-size:28px;border-radius:16px}
    .mm-badge{display:none}
  }
`
