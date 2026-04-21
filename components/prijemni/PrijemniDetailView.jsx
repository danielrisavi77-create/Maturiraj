'use client'
import { useState, useEffect } from 'react'
import { getUserScores } from '@/lib/prijemni/scores'
import { matchStudij, hasMinimumScores } from '@/lib/prijemni/matcher'
import { getUserTargets, addTarget, removeTarget } from '@/lib/prijemni/medicinarMode'
import { isHardStudij } from '@/lib/supabase/pricing'
import PaywallOverlay from './PaywallOverlay'
import Kalkulator from './Kalkulator'
import TrendChart from './TrendChart'
import { daysUntil, formatDays, pragZona, pragLabel } from './helpers'
import { CSS } from './styles'
import CompareToggle from './CompareToggle'
import { useCompare } from '@/lib/prijemni/compareStore'
import SuggestedComparisons from './SuggestedComparisons'
import MobileBottomNav from './MobileBottomNav'

function TrendBadge({ curr, prev }) {
  if (!curr || !prev) return null
  const diff = curr - prev
  if (diff === 0) return <span className="pr-trend pr-trend-flat">= 0</span>
  if (diff > 0) return <span className="pr-trend pr-trend-up">↑ {diff}</span>
  return <span className="pr-trend pr-trend-down">↓ {Math.abs(diff)}</span>
}

function DatumiTab({ studij, fakColor }) {
  const days = daysUntil(studij.ispit_iso)
  const rows = [
    { ic: '📅', label: 'Prijava od', val: studij.prijava_od || '—' },
    { ic: '⏰', label: 'Prijava do', val: studij.prijava_do || '—' },
    { ic: '✏️', label: 'Datum ispita', val: studij.ispit || '—' },
    { ic: '💶', label: 'Cijena prijave', val: studij.cijena || '—' },
  ]

  return (
    <div>
      {days !== null && (
        <div style={{padding:'16px 20px',borderRadius:14,marginBottom:14,display:'flex',alignItems:'center',gap:14,
          background: days <= 60 ? `linear-gradient(120deg, ${fakColor}14, ${fakColor}04)` : 'var(--s1)',
          border: `1px solid ${days <= 60 ? fakColor+'44' : 'var(--bdr)'}`}}>
          <div style={{fontSize:28,flexShrink:0}}>{days <= 30 ? '🔥' : days <= 90 ? '⏳' : '📅'}</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600,marginBottom:3}}>Do prijemnog</div>
            <div style={{fontSize:20,fontWeight:800,fontFamily:'var(--fh)',letterSpacing:'-.02em',color:days <= 60 ? fakColor : 'var(--text)'}}>
              {days === 0 ? 'danas je ispit' : days === 1 ? '1 dan' : `${days} dana`}
            </div>
          </div>
          {/* T1 #4 stub — reminder CTA */}
          <button
            onClick={() => window.location.href = `/reminders/new?studij=${studij.id}&type=ispit`}
            style={{padding:'8px 14px',borderRadius:10,fontSize:12,fontWeight:600,cursor:'pointer',fontFamily:'var(--fb)',background:'rgba(255,255,255,.06)',color:'var(--text)',border:'1px solid var(--bdr)',whiteSpace:'nowrap',flexShrink:0}}>
            🔔 Podsjeti me
          </button>
        </div>
      )}

      <div className="pr-dgrid">
        {rows.map(r => (
          <div key={r.label} className="pr-dcard">
            <div className="pr-dcard-ico">{r.ic}</div>
            <div className="pr-dcard-lbl">{r.label}</div>
            <div className="pr-dcard-v">{r.val}</div>
          </div>
        ))}
      </div>

      {studij.napomena && (
        <div style={{padding:'13px 16px',borderRadius:12,background:`${fakColor}0d`,border:`1px solid ${fakColor}33`,fontSize:13,color:fakColor,marginBottom:16,display:'flex',gap:10,lineHeight:1.6}}>
          <span style={{flexShrink:0}}>ℹ</span><span>{studij.napomena}</span>
        </div>
      )}

      {studij.web_url && (
        <a href={studij.web_url} target="_blank" rel="noopener noreferrer"
          style={{display:'inline-flex',alignItems:'center',gap:7,padding:'9px 16px',borderRadius:10,fontSize:13,fontWeight:600,background:`${fakColor}18`,color:fakColor,border:`1px solid ${fakColor}44`,textDecoration:'none',transition:'transform .15s'}}
          onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-1px)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
          🔗 Službena stranica upisa →
        </a>
      )}
    </div>
  )
}

function InfoTab({ studij, fakColor }) {
  return (
    <div>
      {studij.opis && (
        <div style={{padding:'15px 18px',borderRadius:12,background:`${fakColor}0d`,border:`1px solid ${fakColor}33`,color:fakColor,fontSize:13.5,lineHeight:1.65,marginBottom:24,display:'flex',gap:10,alignItems:'flex-start'}}>
          <span style={{flexShrink:0,marginTop:1}}>ℹ</span><span>{studij.opis}</span>
        </div>
      )}

      {/* Meta — upisna mjesta, trajanje, popularnost */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(120px,1fr))',gap:10,marginBottom:28}}>
        {studij.upisnih_mjesta && (
          <div style={{padding:'14px 16px',borderRadius:12,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
            <div style={{fontSize:10,color:'var(--muted)',letterSpacing:'.06em',textTransform:'uppercase',fontWeight:600,marginBottom:4}}>Upisnih mjesta</div>
            <div style={{fontSize:20,fontWeight:800,fontFamily:'var(--fh)',color:'var(--text)'}}>{studij.upisnih_mjesta}</div>
          </div>
        )}
        {studij.trajanje_god && (
          <div style={{padding:'14px 16px',borderRadius:12,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
            <div style={{fontSize:10,color:'var(--muted)',letterSpacing:'.06em',textTransform:'uppercase',fontWeight:600,marginBottom:4}}>Trajanje</div>
            <div style={{fontSize:20,fontWeight:800,fontFamily:'var(--fh)',color:'var(--text)'}}>{studij.trajanje_god} god.</div>
          </div>
        )}
        {studij.popularnost > 0 && (
          <div style={{padding:'14px 16px',borderRadius:12,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
            <div style={{fontSize:10,color:'var(--muted)',letterSpacing:'.06em',textTransform:'uppercase',fontWeight:600,marginBottom:4}}>Popularnost</div>
            <div style={{fontSize:20,fontWeight:800,fontFamily:'var(--fh)',color:studij.popularnost >= 80 ? '#fb923c' : 'var(--text)'}}>
              {studij.popularnost}<span style={{fontSize:11,color:'var(--muted)',fontWeight:500}}>/100</span>
            </div>
          </div>
        )}
      </div>

      <div style={{fontWeight:700,fontSize:13,marginBottom:12,letterSpacing:'.04em',textTransform:'uppercase',color:'var(--muted)'}}>Predmeti ispita</div>
      <div style={{display:'flex',gap:7,marginBottom:28,flexWrap:'wrap'}}>
        {studij.predmeti.map(p => (
          <span key={p} style={{display:'inline-flex',alignItems:'center',padding:'5px 12px',borderRadius:99,fontSize:12,fontWeight:600,background:`${fakColor}14`,color:fakColor,border:`1px solid ${fakColor}33`}}>{p}</span>
        ))}
      </div>

      <div style={{fontWeight:700,fontSize:13,marginBottom:12,letterSpacing:'.04em',textTransform:'uppercase',color:'var(--muted)'}}>Ključna gradiva</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginBottom:28}} className="pr-kalk-grid">
        {studij.gradivo.map((g, i) => (
          <div key={i} style={{padding:'12px 14px',borderRadius:11,border:'1px solid var(--bdr)',background:'var(--s1)',fontSize:13,color:'var(--text)',display:'flex',alignItems:'center',gap:10}}>
            <span style={{width:20,height:20,borderRadius:6,background:`${fakColor}18`,border:`1px solid ${fakColor}33`,color:fakColor,fontSize:10,fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{i+1}</span>
            {g}
          </div>
        ))}
      </div>

      {/* Trend chart */}
      {studij.prag_2025 && (
        <div style={{marginBottom:24}}>
          <TrendChart studijId={studij.id} color={fakColor}/>
        </div>
      )}

      <div className="pr-discere">
        <div className="pr-discere-ic">⭐</div>
        <div className="pr-discere-body">
          <div className="pr-discere-t">Discere — prijemni zadaci za {studij.short || studij.naziv}</div>
          <div className="pr-discere-s">Arhiva svih zadataka s prethodnih prijemnih ispita + rješenja.</div>
        </div>
        <button onClick={() => window.location.href = '/pro'} style={{padding:'8px 16px',borderRadius:10,fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'var(--fb)',background:'linear-gradient(135deg,var(--gold),#f5d170)',color:'#160d00',border:'none',flexShrink:0,whiteSpace:'nowrap',boxShadow:'0 4px 16px rgba(233,180,70,.22)'}}>
          Pogledaj →
        </button>
      </div>
    </div>
  )
}

export default function PrijemniDetailView({
  fakultet, studij, tab, setTab,
  sidebarOpen, setSidebarOpen,
  onBackToStudiji, onBackToList,
  proStatus, track,
  allFakulteti, onMaxReached
}) {
  const fakColor = fakultet.color
  const compare = useCompare()
  const [userMatch, setUserMatch] = useState(null)
  const [isTarget, setIsTarget] = useState(false)
  const [targetLoading, setTargetLoading] = useState(false)

  useEffect(() => {
    getUserScores().then(sc => {
      if (sc && hasMinimumScores(sc)) setUserMatch(matchStudij(studij, sc))
      else setUserMatch(null)
    })
  }, [studij.id])

  useEffect(() => {
    getUserTargets().then(targets => {
      setIsTarget(targets.some(t => t.studij_id === studij.id))
    })
  }, [studij.id])

  const handleToggleTarget = async () => {
    if (proStatus === 'no-session') {
      window.location.href = `/login?redirect=/prijemni&target=${studij.id}`
      return
    }
    setTargetLoading(true)
    if (isTarget) {
      const ok = await removeTarget(studij.id)
      if (ok) {
        setIsTarget(false)
        track?.('target_removed', studij.fakultet_id, studij.id)
      }
    } else {
      const ok = await addTarget(studij.id)
      if (ok) {
        setIsTarget(true)
        track?.('target_added', studij.fakultet_id, studij.id, null, {
          is_hard: isHardStudij(studij),
        })
      }
    }
    setTargetLoading(false)
  }

  const hardStudij = isHardStudij(studij)
  const TABOVI = ['info', 'datumi', 'kalkulator']
  const TAB_DEF = {
    info: { ico: '📋', full: 'Gradivo & info', short: 'Info' },
    datumi: { ico: '📅', full: 'Datumi & prijava', short: 'Datumi' },
    kalkulator: { ico: '🧮', full: 'Kalkulator bodova', short: 'Kalk.' }
  }
  const daysToExam = daysUntil(studij.ispit_iso)
  const showStudijiBack = fakultet.studiji.length > 1

  return (
    <div className="pr-root" style={{'--fak-color': fakColor}}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pr-orb pr-orb-1"/>
      <div className="pr-orb pr-orb-2"/>

      {/* Mobile sidebar toggle FAB — hidden on mobile, replaced by MobileBottomNav */}
      <button className="pr-mob-gradivo" onClick={() => setSidebarOpen(o => !o)}
        style={{display:'none'}}>
        📚 {sidebarOpen ? '✕' : 'Gradivo'}
      </button>

      <div className="pr-detail-layout pr-detail" style={{paddingTop:58,display:'flex',minHeight:'100vh'}}>
        {/* Sidebar */}
        <div className={`pr-detail-sidebar${sidebarOpen ? ' open' : ''}`}
          style={{width:250,flexShrink:0,borderRight:'1px solid var(--bdr)',padding:'26px 18px',position:'sticky',top:58,height:'calc(100vh - 58px)',overflowY:'auto',background:'var(--s1)'}}>

          {/* Other studiji na istom fakultetu */}
          {fakultet.studiji.length > 1 && (
            <>
              <div className="pr-sidebar-title">
                <span style={{color:fakColor,fontSize:13}}>■</span> Ostali studiji
              </div>
              {fakultet.studiji.filter(s => s.id !== studij.id).map(s => (
                <div key={s.id} onClick={onBackToStudiji} className="pr-sidebar-item" style={{cursor:'pointer'}}>
                  <span className="pr-sidebar-dot" style={{background:fakColor,opacity:.4}}/>
                  <span style={{fontSize:12.5,lineHeight:1.5}}>{s.naziv}</span>
                </div>
              ))}
              <hr style={{margin:'18px 0',border:'none',borderTop:'1px solid var(--bdr)'}}/>
            </>
          )}

          <div className="pr-sidebar-title">
            <span style={{color:fakColor,fontSize:13}}>■</span> Gradivo
          </div>
          {studij.gradivo.map((g, i) => (
            <div key={i} className="pr-sidebar-item">
              <span className="pr-sidebar-dot" style={{background:fakColor,opacity:.6}}/>
              <span style={{fontSize:12.5,lineHeight:1.5}}>{g}</span>
            </div>
          ))}

          <hr style={{margin:'20px 0',border:'none',borderTop:'1px solid var(--bdr)'}}/>

          <div className="pr-sidebar-title">⚡ Povezano</div>
          <div onClick={() => window.location.href = '/skripte'} className="pr-sidebar-item" style={{cursor:'pointer'}}>
            📚 <span style={{fontSize:12.5}}>Skripte za predmete</span>
          </div>
          <div onClick={() => window.location.href = `/plan-ucenja?target=${studij.id}`} className="pr-sidebar-item" style={{cursor:'pointer'}}>
            🗺️ <span style={{fontSize:12.5}}>Generiraj plan učenja</span>
          </div>
          <div onClick={() => window.location.href = '/discere'} className="pr-sidebar-item" style={{cursor:'pointer'}}>
            🎯 <span style={{fontSize:12.5}}>Discere simulatori</span>
          </div>

          <div className="pr-sidebar-cta">
            <div className="pr-sidebar-cta-title">⭐ Discere za {studij.short || fakultet.short}</div>
            <div className="pr-sidebar-cta-sub">Arhiva prijemnih zadataka uz Pro pretplatu.</div>
            <button onClick={() => window.location.href = '/pro'} className="pr-sidebar-cta-btn">Nadogradi →</button>
          </div>
        </div>

        {/* Body */}
        <div className="pr-detail-body" style={{flex:1,padding:'32px 44px',maxWidth:820,overflowX:'hidden'}}>
          {/* Breadcrumb */}
          <div className="pr-breadcrumb">
            <span className="pr-breadcrumb-l" onClick={onBackToList}>Fakulteti</span>
            <span className="pr-breadcrumb-sep">/</span>
            {showStudijiBack ? (
              <>
                <span className="pr-breadcrumb-l" onClick={onBackToStudiji}>{fakultet.short}</span>
                <span className="pr-breadcrumb-sep">/</span>
                <span style={{color:'var(--text)'}}>{studij.naziv}</span>
              </>
            ) : (
              <span style={{color:'var(--text)'}}>{fakultet.short}</span>
            )}
          </div>

          {/* Hero */}
          <section className="pr-detail-hero">
            <div className="pr-detail-bg" style={{background:`radial-gradient(ellipse,${fakColor}33,transparent 70%)`}}/>
            <div className="pr-detail-headrow">
              <div className="pr-detail-glyph" style={{background:fakultet.glyph_bg}}>{fakultet.sym}</div>
              <div className="pr-detail-title-wrap">
                <div className="pr-detail-eye">
                  <span className="pr-detail-eye-lbl">{fakultet.name}</span>
                  <span className="pr-detail-type" style={{background:`${fakColor}18`,color:fakColor,border:`1px solid ${fakColor}33`}}>{studij.tip_upisa_label}</span>
                </div>
                <h1 className="pr-detail-title">{studij.naziv}</h1>
                {studij.trajanje_god && (
                  <div className="pr-detail-sub">{studij.trajanje_god}-godišnji studij {studij.upisnih_mjesta ? `• ${studij.upisnih_mjesta} upisnih mjesta` : ''}</div>
                )}
              </div>
            </div>
            <div style={{display:'flex',gap:8,marginTop:12,position:'relative',zIndex:1}}>
              <CompareToggle studijId={studij.id} size={34} isPro={false}/>
              <span style={{fontSize:12,color:'var(--muted)',alignSelf:'center'}}>
                {compare.has(studij.id) ? '✓ U usporedbi' : 'Dodaj u usporedbu'}
              </span>
            </div>
          </section>

          {/* Suggested comparisons — social proof */}
          <SuggestedComparisons
            studijId={studij.id}
            allFakulteti={allFakulteti}
            isPro={proStatus === 'allowed'}
            onMaxReached={onMaxReached}
          />

          {/* Match status banner */}
          {userMatch && userMatch.status !== 'no_data' && userMatch.status !== 'incomputable' && (
            <div style={{
              padding:'16px 20px',borderRadius:14,marginBottom:20,position:'relative',overflow:'hidden',
              background: userMatch.status === 'safe'
                ? 'linear-gradient(120deg,rgba(62,207,110,.10),rgba(62,207,110,.02))'
                : userMatch.status === 'borderline'
                  ? 'linear-gradient(120deg,rgba(251,146,60,.10),rgba(251,146,60,.02))'
                  : 'linear-gradient(120deg,rgba(248,113,113,.10),rgba(248,113,113,.02))',
              border: `1px solid ${userMatch.status === 'safe' ? 'rgba(62,207,110,.3)' : userMatch.status === 'borderline' ? 'rgba(251,146,60,.3)' : 'rgba(248,113,113,.3)'}`,
              display:'flex',alignItems:'center',gap:14,flexWrap:'wrap'
            }}>
              <div style={{fontSize:24,flexShrink:0}}>
                {userMatch.status === 'safe' ? '\u2705' : userMatch.status === 'borderline' ? '\u26a0\ufe0f' : '\uD83D\uDEAB'}
              </div>
              <div style={{flex:1,minWidth:200}}>
                <div style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600,marginBottom:3}}>
                  Tvoj match
                </div>
                <div style={{fontSize:15,fontWeight:700,color:'var(--text)',marginBottom:3}}>
                  {userMatch.status === 'safe' && `Siguran upis \u2014 ${userMatch.bodovi} bod. (+${userMatch.razlika})`}
                  {userMatch.status === 'borderline' && `Granica \u2014 ${userMatch.bodovi} bod. (${userMatch.razlika >= 0 ? '+' : ''}${userMatch.razlika})`}
                  {userMatch.status === 'risky' && `Ispod praga \u2014 ${userMatch.bodovi} bod. (${userMatch.razlika})`}
                </div>
                <div style={{fontSize:12,color:'var(--muted)'}}>
                  {userMatch.status === 'safe' && 'S unesenim bodovima si iznad praga. Svejedno, pripremi se za prijemni.'}
                  {userMatch.status === 'borderline' && 'Na granici si \u2014 mali boost mo\u017ee biti presudan. Provjeri gap analizu u kalkulatoru.'}
                  {userMatch.status === 'risky' && 'Treba\u0161 dodatno pripremiti slabija podru\u010dja. Generiraj plan u\u010denja.'}
                </div>
              </div>
              <button onClick={() => setTab('kalkulator')} style={{padding:'8px 14px',borderRadius:10,fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'var(--fb)',background:'rgba(255,255,255,.06)',color:'var(--text)',border:'1px solid var(--bdr)',whiteSpace:'nowrap',flexShrink:0}}>
                Otvori kalkulator \u2192
              </button>
            </div>
          )}

          {/* Postavi kao cilj */}
          <div style={{
            padding: '14px 18px', borderRadius: 14, marginBottom: 20,
            background: isTarget
              ? `linear-gradient(120deg,${fakColor}14,${fakColor}05)`
              : 'var(--s1)',
            border: `1px solid ${isTarget ? fakColor + '44' : 'var(--bdr)'}`,
            display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
            position: 'relative', zIndex: 1,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 11, flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
              background: isTarget ? `${fakColor}22` : 'rgba(255,255,255,.04)',
              border: `1px solid ${isTarget ? fakColor + '44' : 'var(--bdr)'}`,
              color: isTarget ? fakColor : 'var(--muted)',
            }}>
              {isTarget ? '⭐' : '☆'}
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 3, letterSpacing: '-.005em' }}>
                {isTarget ? 'Ovaj studij je tvoj cilj' : 'Ciljaš ovaj studij?'}
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                {isTarget
                  ? hardStudij
                    ? '🩺 Medicinar Mode je aktivan — pratit ćemo ti napredak po predmetima.'
                    : 'Pratit ćemo ti progress i deadline-ove za ovaj studij.'
                  : hardStudij
                    ? '🩺 Označi kao cilj → otključaj Medicinar Mode (progress tracker + simulator + AI analizu).'
                    : 'Označi kao cilj → progress tracker + personalizirani plan učenja.'}
              </div>
            </div>
            <button onClick={handleToggleTarget} disabled={targetLoading} style={{
              padding: '9px 16px', borderRadius: 11, fontSize: 12.5, fontWeight: 700, cursor: 'pointer',
              fontFamily: 'var(--fb)', whiteSpace: 'nowrap', flexShrink: 0,
              background: isTarget ? 'transparent' : `linear-gradient(135deg,${fakColor},${fakColor}dd)`,
              color: isTarget ? 'var(--muted)' : '#fff',
              border: isTarget ? '1px solid var(--bdr)' : 'none',
              boxShadow: isTarget ? 'none' : `0 4px 14px ${fakColor}33`,
              transition: 'all .15s',
            }}>
              {targetLoading ? '...' : isTarget ? '✓ Cilj' : '⭐ Postavi kao cilj'}
            </button>
          </div>

          {/* Medicinar Mode entry point — visible to all, features gated inside */}
          {(
            <div style={{
              padding: '14px 18px', borderRadius: 14, marginBottom: 20,
              background: isTarget
                ? 'linear-gradient(120deg,rgba(75,123,255,.14),rgba(124,92,252,.09) 50%,rgba(233,180,70,.05))'
                : 'linear-gradient(120deg,rgba(75,123,255,.07),rgba(124,92,252,.04))',
              border: `1px solid ${isTarget ? 'rgba(75,123,255,.35)' : 'rgba(75,123,255,.15)'}`,
              display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', cursor: 'pointer',
              boxShadow: isTarget ? '0 8px 32px -12px rgba(75,123,255,.25)' : 'none',
              transition: 'all .2s',
            }} onClick={() => {
              track?.('medicinar_mode_open', fakultet.id, studij.id)
              window.location.href = `/medicinar/${studij.id}`
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: isTarget
                  ? 'linear-gradient(135deg,var(--blue),var(--violet))'
                  : 'rgba(75,123,255,.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
                boxShadow: isTarget ? '0 4px 16px rgba(75,123,255,.3)' : 'none',
                border: isTarget ? 'none' : '1px solid rgba(75,123,255,.2)',
              }}>\uD83E\uDE7A</div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: 'var(--text)', marginBottom: 3, fontFamily: 'var(--fh)', letterSpacing: '-.01em' }}>
                  {isTarget ? 'Medicinar Mode aktivan' : 'Medicinar Mode'}
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>
                  {isTarget
                    ? 'Progress po predmetima, detekcija slabosti, timed simulator i AI tjedni plan.'
                    : 'Personalizirani tracker, simulator prijemnog i AI analiza \u2014 besplatno istraži, Pro otključava sve.'}
                </div>
              </div>
              <div style={{
                padding: '7px 14px', borderRadius: 9, fontSize: 12.5, fontWeight: 700,
                background: isTarget ? 'var(--blue)' : 'rgba(75,123,255,.15)',
                color: isTarget ? '#fff' : 'var(--blue)',
                flexShrink: 0, whiteSpace: 'nowrap',
              }}>
                {isTarget ? 'Otvori \u2192' : 'Istra\u017ei \u2192'}
              </div>
            </div>
          )}

          {/* 3 stat kartice: prag + countdown + mjesta */}
          <div className="pr-pragcards">
            <div className="pr-pragcard lead" style={{'--tone':`${fakColor}0d`}}>
              <div className="pr-pragcard-lbl">
                Min. bodovi 2025. <TrendBadge curr={studij.prag_2025} prev={studij.prag_2024}/>
              </div>
              {studij.prag_2025
                ? <div className="pr-pragcard-v" style={{color:fakColor}}>{studij.prag_2025}<span style={{fontSize:12,color:'var(--muted)',fontWeight:500}}>/1000</span></div>
                : <div style={{fontSize:13,color:'var(--muted)'}}>nije objavljeno</div>}
              <div className="pr-pragcard-sub">{pragLabel(studij.prag_2025)}</div>
            </div>

            <div className="pr-pragcard">
              <div className="pr-pragcard-lbl">⏳ Do ispita</div>
              {daysToExam !== null
                ? <>
                    <div className="pr-pragcard-v" style={{color: daysToExam <= 60 ? fakColor : 'var(--text)'}}>
                      {daysToExam}<span style={{fontSize:12,color:'var(--muted)',fontWeight:500}}> {daysToExam === 1 ? 'dan' : 'dana'}</span>
                    </div>
                    <div className="pr-pragcard-sub">{studij.ispit}</div>
                  </>
                : <div style={{fontSize:13,color:'var(--muted)'}}>datum tbd</div>}
            </div>

            <div className="pr-pragcard">
              <div className="pr-pragcard-lbl">🎓 Mjesta</div>
              {studij.upisnih_mjesta
                ? <>
                    <div className="pr-pragcard-v" style={{color:'var(--text)'}}>{studij.upisnih_mjesta}</div>
                    <div className="pr-pragcard-sub">upisnih mjesta</div>
                  </>
                : <div style={{fontSize:13,color:'var(--muted)'}}>—</div>}
            </div>
          </div>

          {/* Tabs */}
          <div className="pr-tabs">
            {TABOVI.map(t => {
              const locked = proStatus !== 'allowed' && (t === 'info' || t === 'kalkulator')
              return (
                <button key={t} className={`pr-tab${tab === t ? ' on' : ''}`} onClick={() => setTab(t)}>
                  <span>{TAB_DEF[t].ico}</span>
                  <span className="pr-tab-full">{TAB_DEF[t].full}</span>
                  <span className="pr-tab-short">{TAB_DEF[t].short}</span>
                  {locked && <span className="pr-tab-lock">🔒</span>}
                </button>
              )
            })}
          </div>

          {tab === 'info' && (
            proStatus === 'allowed'
              ? <div className="pr-up"><InfoTab studij={studij} fakColor={fakColor}/></div>
              : <PaywallOverlay status={proStatus} onView={() => track('paywall_hit', fakultet.id, studij.id, 'info')}/>
          )}

          {tab === 'datumi' && (
            <div className="pr-up">
              <div style={{padding:'12px 16px',borderRadius:10,background:'var(--s1)',border:'1px solid var(--bdr)',fontSize:12,color:'var(--muted)',marginBottom:20}}>
                Datumi su procjene temeljene na prethodnim godinama. Provjeravaj web stranice fakulteta za službene rokove 2026.
              </div>
              <DatumiTab studij={studij} fakColor={fakColor}/>
            </div>
          )}

          {tab === 'kalkulator' && (
            proStatus === 'allowed'
              ? (
                <div className="pr-up">
                  <div style={{padding:'13px 16px',borderRadius:11,background:'var(--s1)',border:'1px solid var(--bdr)',fontSize:12.5,color:'var(--muted)',marginBottom:24,lineHeight:1.6,display:'flex',gap:8,alignItems:'flex-start'}}>
                    <span>✨</span>
                    <span>Unesi prosjeke ocjena i postotke mature — bodovi se računaju u realnom vremenu.</span>
                  </div>
                  <Kalkulator studij={studij} fakColor={fakColor} onResult={(bod) => {
                    track('kalkulator_use', fakultet.id, studij.id, 'kalkulator', { bodovi: bod })
                    if (studij.prag_2025 && bod >= studij.prag_2025) {
                      track('calculator_passed_threshold', fakultet.id, studij.id, 'kalkulator', { bodovi: bod, prag: studij.prag_2025 })
                    }
                  }}/>
                </div>
              )
              : <PaywallOverlay status={proStatus} onView={() => track('paywall_hit', fakultet.id, studij.id, 'kalkulator')}/>
          )}
        </div>
      </div>

      <MobileBottomNav
        activeTab={tab}
        onTabChange={setTab}
        sidebarOpen={sidebarOpen}
        onSidebarToggle={() => setSidebarOpen(o => !o)}
        fakColor={fakColor}
        proStatus={proStatus}
        track={track}
      />
    </div>
  )
}
