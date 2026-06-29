'use client'
import { useEffect, useState } from 'react'

export default function MaxReachedToast({ show, onClose, isPro }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => { setVisible(false); setTimeout(onClose, 250) }, 4500)
      return () => clearTimeout(t)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes toast-in{from{opacity:0;transform:translateX(-50%) translateY(-10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
        @keyframes toast-out{to{opacity:0;transform:translateX(-50%) translateY(-10px)}}
        .mrt-root{
          position:fixed;top:72px;left:50%;transform:translateX(-50%);
          z-index:160;max-width:calc(100vw - 32px);width:auto;
          animation: ${visible ? 'toast-in .25s cubic-bezier(.16,1,.3,1) both' : 'toast-out .25s cubic-bezier(.16,1,.3,1) both'}
        }
        .mrt-box{
          display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:14px;
          background:linear-gradient(135deg,rgba(233,180,70,.12),rgba(251,146,60,.08));
          border:1px solid rgba(233,180,70,.35);
          backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);
          box-shadow:0 12px 40px rgba(0,0,0,.4)
        }
        .mrt-ic{font-size:20px;flex-shrink:0}
        .mrt-body{flex:1;min-width:0}
        .mrt-t{font-size:13px;font-weight:700;color:var(--text);margin-bottom:2px}
        .mrt-s{font-size:11.5px;color:var(--muted);line-height:1.45}
        .mrt-cta{
          padding:7px 13px;border-radius:9px;font-size:12px;font-weight:700;cursor:pointer;
          font-family:var(--fb);border:none;white-space:nowrap;
          background:linear-gradient(135deg,var(--gold),#f5d170);color:#160d00
        }
      `}}/>

      <div className="mrt-root">
        <div className="mrt-box">
          <div className="mrt-ic">{isPro ? '🔒' : '⭐'}</div>
          <div className="mrt-body">
            <div className="mrt-t">{isPro ? 'Max 4 studija u usporedbi' : 'Usporedi do 2 studija — Free'}</div>
            <div className="mrt-s">{isPro ? 'Ukloni jedan da dodaš novi.' : 'Nadogradi na Pro za usporedbu do 4 studija odjednom.'}</div>
          </div>
          {!isPro && (
            <button className="mrt-cta" onClick={() => window.location.href = '/pro'}>
              Pro →
            </button>
          )}
        </div>
      </div>
    </>
  )
}
