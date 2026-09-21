'use client'
import { useState, useMemo } from 'react'
import { useCurrentTime } from '@/lib/hooks/useCurrentTime'
import { daysUntil, formatDays, pragZona } from './helpers'
import { getUrgency, urgencyColor, formatDeadlineLabel } from '@/lib/prijemni/urgency'
import { CSS } from './styles'
import { useCompare } from '@/lib/prijemni/compareStore'
import CompareToggle from './CompareToggle'
import CompareDock from './CompareDock'
import CompareView from './CompareView'
import MaxReachedToast from './MaxReachedToast'

function UrgencyDot({ studij }) {
  const now = useCurrentTime()
  if (studij.prijava_do_iso && now !== null) {
    const days = Math.ceil((new Date(studij.prijava_do_iso).getTime() - now) / 86400000)
    const level = getUrgency(days)
    if (level === 'critical' || level === 'urgent') {
      return (
        <div style={{
          position: 'absolute', top: 10, right: 10, zIndex: 2,
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '3px 8px 3px 6px', borderRadius: 99,
          background: level === 'critical' ? 'rgba(248,113,113,.14)' : 'rgba(251,146,60,.14)',
          border: `1px solid ${level === 'critical' ? 'rgba(248,113,113,.35)' : 'rgba(251,146,60,.35)'}`,
          fontSize: 10, fontWeight: 700, color: urgencyColor(level),
          backdropFilter: 'blur(8px)',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: urgencyColor(level),
            boxShadow: `0 0 6px ${urgencyColor(level)}`,
            animation: 'pr-pulse 1.2s ease-in-out infinite',
          }}/>
          <span style={{letterSpacing:'.04em',textTransform:'uppercase'}}>
            {formatDeadlineLabel('prijava_do', days)}
          </span>
        </div>
      )
    }
  }
  return null
}

export default function PrijemniStudijiView({ fakultet, onBack, onSelect, track, allFakulteti }) {
  const compare = useCompare()
  const [compareOpen, setCompareOpen] = useState(false)
  const [maxToast, setMaxToast] = useState(false)

  const allStudijiMap = useMemo(() => {
    const m = new Map()
    const source = allFakulteti ?? [fakultet]
    for (const f of source)
      for (const s of f.studiji)
        m.set(s.id, { ...s, color: f.color, sym: f.sym, glyph_bg: f.glyph_bg, fak_short: f.short, fakultet_id: f.id })
    return m
  }, [allFakulteti, fakultet])

  const compareStudiji = compare.ids.map(id => allStudijiMap.get(id)).filter(Boolean)

  const handleShare = async () => {
    const ids = compare.ids.join(',')
    const shareUrl = `https://maturiraj.hr/prijemni/compare?ids=${ids}`
    if (typeof navigator !== 'undefined' && navigator.share) {
      try { await navigator.share({ title: 'Usporedi studije na Maturiraj.hr', url: shareUrl }) } catch {}
    } else {
      try { await navigator.clipboard.writeText(shareUrl) } catch {}
    }
    track?.('compare_share', null, null, null, { count: compare.count })
  }
  return (
    <div className="pr-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pr-orb pr-orb-1"/>
      <div className="pr-orb pr-orb-2"/>

      <div className="pr-wrap pr-up" style={{maxWidth:840,margin:"0 auto",padding:"92px 40px 60px",position:"relative",zIndex:1}}>
        <div className="pr-breadcrumb">
          <span className="pr-breadcrumb-l" onClick={onBack}>Fakulteti</span>
          <span className="pr-breadcrumb-sep">/</span>
          <span style={{color:"var(--text)"}}>{fakultet.short}</span>
        </div>

        <section style={{paddingBottom:28,marginBottom:28,borderBottom:"1px solid var(--bdr)",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:-40,right:"-10%",width:420,height:220,borderRadius:"50%",filter:"blur(80px)",pointerEvents:"none",opacity:.5,background:`radial-gradient(ellipse,${fakultet.color}33,transparent 70%)`}}/>
          <div style={{display:"flex",alignItems:"center",gap:16,position:"relative",zIndex:1,flexWrap:"wrap"}}>
            <div style={{width:64,height:64,borderRadius:18,display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,background:fakultet.glyph_bg,position:"relative"}}>
              {fakultet.sym}
              <div style={{position:"absolute",inset:0,borderRadius:"inherit",border:"1px solid rgba(255,255,255,.1)"}}/>
            </div>
            <div style={{flex:1,minWidth:220}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:".14em",textTransform:"uppercase",color:"var(--muted)",marginBottom:5}}>Fakultet</div>
              <h1 style={{fontFamily:"var(--fh)",fontSize:"clamp(22px,3.2vw,32px)",fontWeight:800,letterSpacing:"-.025em",lineHeight:1.15}}>{fakultet.name}</h1>
              <div style={{fontSize:13,color:"var(--muted)",marginTop:6}}>{fakultet.grad} &bull; {fakultet.studiji.length} {fakultet.studiji.length === 1 ? 'studij' : 'studija'}</div>
            </div>
          </div>
        </section>

        <div style={{marginBottom:16,fontSize:13,color:"var(--muted)"}}>
          Odaberi studij za detalje &mdash; gradivo, datume, kalkulator bodova.
        </div>

        <div className="pr-studij-list">
          {fakultet.studiji.map(s => {
            const days = daysUntil(s.ispit_iso)
            const urgent = days !== null && days <= 30
            const pragColor = pragZona(s.prag_2025)
            const inCompare = compare.has(s.id)

            return (
              <div key={s.id} className="pr-studij-card"
                onClick={() => onSelect(s)}
                style={{
                  position: 'relative',
                  borderColor: inCompare ? 'rgba(75,123,255,.4)' : 'var(--bdr)',
                  boxShadow: inCompare ? '0 0 0 1px rgba(75,123,255,.25)' : 'none',
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=inCompare?'rgba(75,123,255,.7)':fakultet.color+"55";e.currentTarget.style.boxShadow=inCompare?'0 0 0 1px rgba(75,123,255,.4)':(`0 14px 40px -12px ${fakultet.color}26`)}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=inCompare?'rgba(75,123,255,.4)':'var(--bdr)';e.currentTarget.style.boxShadow=inCompare?'0 0 0 1px rgba(75,123,255,.25)':'none'}}>

                <UrgencyDot studij={s}/>
                <div className="pr-studij-ico" style={{background:fakultet.glyph_bg}}>{fakultet.sym}</div>

                <div className="pr-studij-body">
                  <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap",marginBottom:4}}>
                    <div className="pr-studij-name">{s.naziv}</div>
                    {s.popularnost >= 80 && <span className="pr-tag pr-tag-hot">&#x26A1; Tra&#x17E;eno</span>}
                    {s.kalk && <span className="pr-tag pr-tag-kalk">&#x1F9EE; Kalkulator</span>}
                  </div>
                  <div className="pr-studij-meta">
                    <span>&#x1F4DA; {s.tip_upisa_label}</span>
                    {s.trajanje_god && <span>&#x23F1; {s.trajanje_god} god.</span>}
                    {s.upisnih_mjesta && <span>&#x1F393; {s.upisnih_mjesta} mjesta</span>}
                    {days !== null && days > 0 && (
                      <span style={{color: urgent ? '#fb923c' : 'var(--muted)'}}>
                        {urgent ? '🔥' : '📅'} Ispit za {formatDays(days)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="pr-studij-right">
                  <CompareToggle
                    studijId={s.id}
                    isPro={false}
                    onMaxReached={() => setMaxToast(true)}
                    size={30}
                  />
                  {s.prag_2025 ? (
                    <>
                      <div className="pr-studij-prag" style={{color:pragColor}}>
                        {s.prag_2025}<span style={{fontSize:12,color:"var(--muted)",fontWeight:500}}>/1000</span>
                      </div>
                      <div className="pr-studij-prag-lbl">min. bodovi 2025.</div>
                    </>
                  ) : (
                    <div style={{fontSize:11,color:"var(--muted)",fontStyle:"italic"}}>nema podatka</div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div style={{marginTop:24,padding:"12px 16px",borderRadius:12,background:"var(--s1)",border:"1px solid var(--bdr)",fontSize:12,color:"var(--muted)",display:"flex",alignItems:"center",gap:8}}>
          <span>&#x24D8;</span>
          <span>Svaki studij ima razli&#x10D;it prijemni proces i prag. Odaberi onaj koji te zanima za detaljan pregled.</span>
        </div>
      </div>

      {/* Compare feature */}
      <CompareDock
        fakulteti={allFakulteti ?? [fakultet]}
        onOpenCompare={() => setCompareOpen(true)}
        isPro={false}
        track={track}
      />
      <CompareView
        open={compareOpen}
        onClose={() => setCompareOpen(false)}
        studiji={compareStudiji}
        onRemove={compare.remove}
        onShare={handleShare}
        track={track}
      />
      <MaxReachedToast
        show={maxToast}
        onClose={() => setMaxToast(false)}
        isPro={false}
      />
    </div>
  )
}
