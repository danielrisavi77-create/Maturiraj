'use client'
import { useEffect } from 'react'
import { useCopy } from '@/lib/content/useCopy'

export default function PaywallOverlay({ status, onView }) {
  useEffect(() => { onView?.() }, [])
  const isGuest = status === 'no-session'
  const { c } = useCopy()

  return (
    <div style={{position:'relative',minHeight:320}}>
      {/* Blur fake content */}
      <div style={{filter:'blur(6px)',pointerEvents:'none',userSelect:'none',opacity:.55}}>
        <div style={{padding:'20px',borderRadius:12,background:'var(--s1)',border:'1px solid var(--bdr)',marginBottom:12}}>
          <div style={{height:14,width:'60%',borderRadius:6,background:'var(--bdr)',marginBottom:10}}/>
          <div style={{height:10,width:'90%',borderRadius:6,background:'var(--bdr)',marginBottom:6}}/>
          <div style={{height:10,width:'75%',borderRadius:6,background:'var(--bdr)',marginBottom:6}}/>
          <div style={{height:10,width:'80%',borderRadius:6,background:'var(--bdr)'}}/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
          {[1,2,3,4].map(i=>(
            <div key={i} style={{padding:'16px',borderRadius:12,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
              <div style={{height:12,width:'50%',borderRadius:6,background:'var(--bdr)',marginBottom:8}}/>
              <div style={{height:24,width:'70%',borderRadius:6,background:'var(--bdr)'}}/>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay modal */}
      <div style={{position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(to bottom,rgba(7,9,15,.3),rgba(7,9,15,.85))',borderRadius:12,zIndex:10}}>
        <div style={{maxWidth:340,width:'100%',textAlign:'center',background:'linear-gradient(160deg,rgba(255,255,255,.07),rgba(255,255,255,.02))',border:'1px solid rgba(75,123,255,.25)',borderRadius:20,padding:'32px 28px',boxShadow:'0 24px 80px rgba(0,0,0,.5)',margin:'0 16px'}}>
          <div style={{fontSize:36,marginBottom:12}}>{isGuest ? '\uD83D\uDD12' : '\u2B50'}</div>
          <div style={{fontFamily:'var(--fh)',fontSize:20,fontWeight:700,marginBottom:8,letterSpacing:'-.02em'}}>
            {c(isGuest ? 'paywall.guest_title' : 'paywall.no_pro_title')}
          </div>
          <div style={{fontSize:13,color:'var(--muted)',lineHeight:1.65,marginBottom:20}}>
            {c(isGuest ? 'paywall.guest_sub' : 'paywall.no_pro_sub')}
          </div>
          <div style={{display:'flex',flexDirection:'column',gap:8}}>
            <button onClick={() => window.location.href='/pro'}
              style={{padding:'12px 20px',borderRadius:11,fontSize:14,fontWeight:700,cursor:'pointer',fontFamily:'var(--fb)',background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',border:'none',boxShadow:'0 0 0 1px rgba(75,123,255,.28), 0 8px 32px rgba(75,123,255,.3)',transition:'transform .15s, box-shadow .15s'}}
              onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-2px)';e.currentTarget.style.boxShadow='0 0 0 1px rgba(75,123,255,.45), 0 22px 64px rgba(75,123,255,.45)'}}
              onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='0 0 0 1px rgba(75,123,255,.28), 0 8px 32px rgba(75,123,255,.3)'}}>
              {c(isGuest ? 'paywall.guest_cta' : 'paywall.no_pro_cta')}
            </button>
            {isGuest && (
              <button onClick={() => window.location.href='/login?redirect=/prijemni'}
                style={{padding:'10px 20px',borderRadius:11,fontSize:13,fontWeight:600,cursor:'pointer',fontFamily:'var(--fb)',background:'rgba(255,255,255,.06)',color:'var(--text)',border:'1px solid var(--bdr)'}}>
                {c('paywall.login_cta')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
