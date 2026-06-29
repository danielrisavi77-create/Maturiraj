'use client'
import { useCopy } from '@/lib/content/useCopy'

export default function MatcherBanner({ hasScores, groups, onOpen, onClear }) {
  const { c } = useCopy()
  if (hasScores) {
    const counts = {
      safe: groups.safe.length,
      borderline: groups.borderline.length,
      risky: groups.risky.length,
      no_data: groups.no_data.length,
      incomputable: groups.incomputable.length,
    }

    return (
      <div style={{
        padding:'16px 20px',borderRadius:16,marginBottom:24,
        background:'linear-gradient(120deg,rgba(75,123,255,.08),rgba(124,92,252,.05) 60%,rgba(62,207,110,.05))',
        border:'1px solid rgba(75,123,255,.22)',
        display:'flex',alignItems:'center',gap:16,flexWrap:'wrap',
        boxShadow:'0 8px 32px -12px rgba(75,123,255,.2)',
      }}>
        <div style={{
          width:44,height:44,borderRadius:12,flexShrink:0,
          background:'linear-gradient(135deg,var(--blue),var(--violet))',
          display:'flex',alignItems:'center',justifyContent:'center',fontSize:22,
          boxShadow:'0 4px 16px rgba(75,123,255,.3)'
        }}>🎯</div>

        <div style={{flex:1,minWidth:220}}>
          <div style={{fontSize:13,fontWeight:700,color:'var(--text)',marginBottom:4}}>Tvoj bodovni profil</div>
          <div style={{display:'flex',gap:12,flexWrap:'wrap',fontSize:12}}>
            {counts.safe > 0 && <Pill color="#3ecf6e" label="siguran" n={counts.safe}/>}
            {counts.borderline > 0 && <Pill color="#fb923c" label="granica" n={counts.borderline}/>}
            {counts.risky > 0 && <Pill color="#f87171" label="riskantno" n={counts.risky}/>}
            {counts.incomputable > 0 && <Pill color="var(--muted)" label="audicija/test" n={counts.incomputable}/>}
          </div>
        </div>

        <div style={{display:'flex',gap:8,flexShrink:0}}>
          <button onClick={onOpen} style={{padding:'8px 14px',borderRadius:10,fontSize:12.5,fontWeight:700,cursor:'pointer',fontFamily:'var(--fb)',background:'rgba(255,255,255,.06)',color:'var(--text)',border:'1px solid var(--bdr)',whiteSpace:'nowrap'}}>
            &#x270e; Uredi
          </button>
          <button onClick={onClear} style={{padding:'8px 14px',borderRadius:10,fontSize:12.5,fontWeight:600,cursor:'pointer',fontFamily:'var(--fb)',background:'transparent',color:'var(--muted)',border:'1px solid var(--bdr)',whiteSpace:'nowrap'}}>
            &#x2715;
          </button>
        </div>
      </div>
    )
  }

  // Empty state — onboarding CTA
  return (
    <div style={{
      padding:'20px 22px',borderRadius:18,marginBottom:28,position:'relative',overflow:'hidden',
      background:'linear-gradient(120deg,rgba(75,123,255,.12) 0%,rgba(124,92,252,.08) 50%,rgba(233,180,70,.06) 100%)',
      border:'1px solid rgba(75,123,255,.3)',
      display:'flex',alignItems:'center',gap:18,flexWrap:'wrap',
      boxShadow:'0 12px 40px -12px rgba(75,123,255,.3)',
      cursor:'pointer',
    }} onClick={onOpen}>
      <div style={{
        position:'absolute',top:-40,right:-40,width:200,height:200,borderRadius:'50%',
        background:'radial-gradient(circle,rgba(75,123,255,.2),transparent 70%)',
        filter:'blur(40px)',pointerEvents:'none',
      }}/>

      <div style={{
        width:52,height:52,borderRadius:14,flexShrink:0,position:'relative',zIndex:1,
        background:'linear-gradient(135deg,var(--blue),var(--violet))',
        display:'flex',alignItems:'center',justifyContent:'center',fontSize:26,
        boxShadow:'0 4px 20px rgba(75,123,255,.4)',
      }}>🎯</div>

      <div style={{flex:1,minWidth:240,position:'relative',zIndex:1}}>
        <div style={{fontSize:15,fontWeight:800,color:'var(--text)',marginBottom:4,fontFamily:'var(--fh)',letterSpacing:'-.015em'}}>
          {c('list.matcher_banner_title')}
        </div>
        <div style={{fontSize:12.5,color:'var(--muted)',lineHeight:1.55}}>
          {c('list.matcher_banner_sub')}
        </div>
      </div>

      <button style={{
        padding:'11px 20px',borderRadius:11,fontSize:13.5,fontWeight:700,cursor:'pointer',fontFamily:'var(--fb)',
        background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',border:'none',
        boxShadow:'0 4px 18px rgba(75,123,255,.3)',whiteSpace:'nowrap',flexShrink:0,position:'relative',zIndex:1,
      }}>
        {c('list.matcher_cta_empty')}
      </button>
    </div>
  )
}

function Pill({ color, label, n }) {
  return (
    <span style={{
      display:'inline-flex',alignItems:'center',gap:5,padding:'3px 9px',borderRadius:99,
      background:color === 'var(--muted)' ? 'rgba(106,130,168,.12)' : `${color}18`,
      border:color === 'var(--muted)' ? '1px solid var(--bdr)' : `1px solid ${color}33`,
      fontSize:11.5,fontWeight:700,color:color === 'var(--muted)' ? 'var(--muted)' : color,
    }}>
      <strong style={{fontFamily:'var(--fh)',fontSize:13}}>{n}</strong> {label}
    </span>
  )
}
