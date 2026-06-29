'use client'
import { useState, useEffect } from 'react'
import { isPushSupported, getPushPermission, subscribeToPush, unsubscribeFromPush } from '@/lib/prijemni/push'

// iOS Safari (non-standalone) ne podržava Web Push — detektiramo i pokazujemo fallback
function isIOSSafariNonStandalone() {
  if (typeof window === 'undefined') return false
  const isIOS = /iPhone|iPad/.test(navigator.userAgent) && !/CriOS|FxiOS/.test(navigator.userAgent)
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
  return isIOS && !isStandalone
}

export default function PushOptInCard({ studijIds = [], track, compact = false }) {
  const [supported, setSupported] = useState(null)
  const [permission, setPermission] = useState(null)
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [iosFallback, setIosFallback] = useState(false)

  useEffect(() => {
    const check = async () => {
      if (isIOSSafariNonStandalone()) {
        setIosFallback(true)
        setSupported(false)
        return
      }
      const ok = isPushSupported()
      setSupported(ok)
      if (ok) {
        const p = await getPushPermission()
        setPermission(p)
        if (p === 'granted') {
          try {
            const reg = await navigator.serviceWorker.ready
            const sub = await reg.pushManager.getSubscription()
            setSubscribed(!!sub)
          } catch {}
        }
      }
    }
    check()
  }, [])

  // iOS Safari fallback — ponudi email reminder umjesto push
  if (iosFallback) {
    return (
      <div style={{
        padding: '14px 16px', borderRadius: 12,
        background: 'linear-gradient(120deg,rgba(75,123,255,.07),rgba(124,92,252,.04))',
        border: '1px solid rgba(75,123,255,.2)',
        display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap',
      }}>
        <span style={{fontSize:20}}>📧</span>
        <div style={{flex:1,minWidth:160}}>
          <div style={{fontSize:13,fontWeight:700,marginBottom:2}}>Ne propusti deadline</div>
          <div style={{fontSize:11,color:'var(--muted)'}}>Na iOS-u dodaj stranicu na Home Screen za push, ili se prijavi za email podsjetnike.</div>
        </div>
        <a href="/reminders/new" style={{
          padding:'8px 14px',borderRadius:9,fontSize:12,fontWeight:700,cursor:'pointer',
          background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',
          textDecoration:'none',whiteSpace:'nowrap',flexShrink:0,
        }}
          onClick={() => track?.('ios_fallback_email_click')}>
          Email reminder
        </a>
      </div>
    )
  }

  if (supported === false || supported === null) return null
  if (permission === 'denied') return null  // Can't re-ask

  const handleEnable = async () => {
    setLoading(true)
    track?.('push_optin_click', null, null, null, { studij_count: studijIds.length })
    const ok = await subscribeToPush(studijIds)
    setLoading(false)
    if (ok) {
      setPermission('granted')
      setSubscribed(true)
      track?.('push_subscribed', null, null, null, { studij_count: studijIds.length })
    } else {
      track?.('push_optin_failed')
    }
  }

  const handleDisable = async () => {
    setLoading(true)
    await unsubscribeFromPush()
    setSubscribed(false)
    setLoading(false)
    track?.('push_unsubscribed')
  }

  if (subscribed) {
    return (
      <div style={{
        padding: '12px 16px', borderRadius: 12,
        background: 'rgba(62,207,110,.06)', border: '1px solid rgba(62,207,110,.22)',
        display: 'flex', alignItems: 'center', gap: 12, fontSize: 13,
      }}>
        <span style={{fontSize:18}}>🔔</span>
        <span style={{flex:1,color:'var(--text)'}}>
          <strong style={{color:'#3ecf6e'}}>Push reminders aktivirani.</strong>
          {' '}Obavijestit ćemo te 7 i 1 dan prije svakog deadline-a.
        </span>
        <button onClick={handleDisable} disabled={loading}
          style={{padding:'5px 10px',borderRadius:8,fontSize:11,fontWeight:600,cursor:'pointer',
            background:'transparent',color:'var(--muted)',border:'1px solid var(--bdr)',fontFamily:'var(--fb)'}}>
          Isključi
        </button>
      </div>
    )
  }

  if (compact) {
    return (
      <button onClick={handleEnable} disabled={loading}
        style={{padding:'8px 14px',borderRadius:10,fontSize:12,fontWeight:700,cursor:'pointer',
          background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',border:'none',
          boxShadow:'0 4px 14px rgba(75,123,255,.25)',fontFamily:'var(--fb)',whiteSpace:'nowrap'}}>
        {loading ? '...' : '🔔 Uključi reminder'}
      </button>
    )
  }

  return (
    <div style={{
      padding: '18px 20px', borderRadius: 14,
      background: 'linear-gradient(120deg,rgba(75,123,255,.08),rgba(124,92,252,.05))',
      border: '1px solid rgba(75,123,255,.25)',
      display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: 'linear-gradient(135deg,var(--blue),var(--violet))',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
        boxShadow: '0 4px 14px rgba(75,123,255,.3)',
      }}>🔔</div>
      <div style={{flex:1,minWidth:200}}>
        <div style={{fontSize:14,fontWeight:700,marginBottom:3,letterSpacing:'-.01em'}}>
          Ne propusti deadline
        </div>
        <div style={{fontSize:12,color:'var(--muted)',lineHeight:1.5}}>
          Jedno dozvola → pushamo ti 7 i 1 dan prije svake prijave ili ispita. Bez spama.
        </div>
      </div>
      <button onClick={handleEnable} disabled={loading}
        style={{padding:'10px 18px',borderRadius:11,fontSize:13,fontWeight:700,cursor:'pointer',
          background:'linear-gradient(135deg,var(--blue),var(--violet))',color:'#fff',border:'none',
          boxShadow:'0 4px 14px rgba(75,123,255,.3)',fontFamily:'var(--fb)',whiteSpace:'nowrap',flexShrink:0}}>
        {loading ? 'Aktiviram...' : 'Uključi reminders'}
      </button>
    </div>
  )
}
