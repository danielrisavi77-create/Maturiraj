'use client'
import { useMemo, useState } from 'react'
import { useCompare } from '@/lib/prijemni/compareStore'

export default function CompareDock({ fakulteti, onOpenCompare, isPro = false, track }) {
  const { ids, count, remove, clear, MAX_FREE, MAX_PRO } = useCompare()
  const [dismissed, setDismissed] = useState(false)

  // Build studij lookup map za brzu dohvat metadata
  const studijiMap = useMemo(() => {
    const m = new Map()
    for (const f of fakulteti) {
      for (const s of f.studiji) {
        m.set(s.id, { ...s, fakultet: f })
      }
    }
    return m
  }, [fakulteti])

  const selected = ids.map(id => studijiMap.get(id)).filter(Boolean)

  if (count === 0 || dismissed) return null

  const max = isPro ? MAX_PRO : MAX_FREE
  const canCompare = count >= 2

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes dock-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
        @keyframes dock-chip-in{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}
        .cd-root{
          position:fixed;left:50%;bottom:20px;transform:translateX(-50%);
          z-index:150;max-width:calc(100vw - 32px);animation:dock-in .3s cubic-bezier(.16,1,.3,1)
        }
        .cd-box{
          display:flex;align-items:center;gap:12px;padding:10px 14px 10px 10px;
          border-radius:18px;background:linear-gradient(160deg,rgba(14,18,32,.95),rgba(10,14,26,.95));
          border:1px solid rgba(75,123,255,.28);
          backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
          box-shadow:0 24px 80px -20px rgba(75,123,255,.4),0 8px 32px rgba(0,0,0,.5)
        }
        .cd-chips{display:flex;gap:-6px;align-items:center;flex-shrink:0}
        .cd-chip{
          width:36px;height:36px;border-radius:10px;border:2px solid var(--bg);
          display:flex;align-items:center;justify-content:center;font-size:16px;
          margin-left:-8px;position:relative;cursor:pointer;transition:transform .15s;
          animation:dock-chip-in .25s cubic-bezier(.16,1,.3,1) both;flex-shrink:0
        }
        .cd-chip:first-child{margin-left:0}
        .cd-chip:hover{transform:translateY(-2px) scale(1.05);z-index:10}
        .cd-chip-x{
          position:absolute;top:-6px;right:-6px;width:16px;height:16px;border-radius:50%;
          background:var(--bg);border:1px solid var(--bdr);color:var(--muted);
          display:none;align-items:center;justify-content:center;font-size:9px;font-weight:700;
          cursor:pointer
        }
        .cd-chip:hover .cd-chip-x{display:flex}
        .cd-chip-x:hover{background:#f87171;color:#fff;border-color:#f87171}
        .cd-empty{
          width:36px;height:36px;border-radius:10px;border:2px dashed rgba(255,255,255,.12);
          margin-left:-8px;display:flex;align-items:center;justify-content:center;
          color:rgba(255,255,255,.15);font-size:14px;flex-shrink:0
        }
        .cd-empty:first-child{margin-left:0}
        .cd-info{flex:1;min-width:0;padding:0 4px}
        .cd-title{font-size:12px;font-weight:700;color:var(--text);letter-spacing:-.01em}
        .cd-sub{font-size:11px;color:var(--muted);margin-top:1px}
        .cd-actions{display:flex;gap:6px;flex-shrink:0}
        .cd-btn{
          padding:9px 16px;border-radius:11px;font-size:13px;font-weight:700;cursor:pointer;
          font-family:var(--fb);border:none;transition:all .15s;white-space:nowrap
        }
        .cd-btn-p{background:linear-gradient(135deg,var(--blue),var(--violet));color:#fff;box-shadow:0 4px 16px rgba(75,123,255,.3)}
        .cd-btn-p:hover{transform:translateY(-1px);box-shadow:0 8px 24px rgba(75,123,255,.45)}
        .cd-btn-p:disabled{opacity:.55;cursor:not-allowed;transform:none;box-shadow:none}
        .cd-btn-g{background:transparent;color:var(--muted);padding:6px;border-radius:9px;width:32px;height:32px;display:flex;align-items:center;justify-content:center}
        .cd-btn-g:hover{background:rgba(255,255,255,.06);color:var(--text)}
        @media(max-width:520px){
          .cd-root{bottom:14px;left:12px;right:12px;transform:none;max-width:none}
          .cd-box{padding:8px 10px 8px 8px;gap:8px}
          .cd-title{font-size:11.5px}
          .cd-sub{display:none}
          .cd-btn{padding:8px 12px;font-size:12px}
          .cd-chip{width:32px;height:32px;font-size:14px}
          .cd-empty{width:32px;height:32px}
        }
      `}}/>

      <div className="cd-root">
        <div className="cd-box">
          <div className="cd-chips">
            {selected.map(s => (
              <div key={s.id} className="cd-chip"
                style={{background: s.fakultet.glyph_bg || `linear-gradient(135deg,${s.fakultet.color}33,${s.fakultet.color}11)`}}
                title={`${s.fakultet.short} — ${s.naziv}`}>
                <span>{s.fakultet.sym}</span>
                <span className="cd-chip-x" onClick={(e) => { e.stopPropagation(); remove(s.id); track?.('compare_remove', s.fakultet_id, s.id) }}>✕</span>
              </div>
            ))}
            {Array.from({length: Math.max(0, 2 - count)}).map((_, i) => (
              <div key={`empty-${i}`} className="cd-empty">+</div>
            ))}
          </div>

          <div className="cd-info">
            <div className="cd-title">
              {count === 1 ? 'Dodaj još jedan studij' : `${count} ${count === 1 ? 'studij' : count < 5 ? 'studija' : 'studija'} za usporedbu`}
            </div>
            <div className="cd-sub">
              {count === 1 ? `Min. 2 za usporedbu (max ${max})` : `Max ${max} ${isPro ? '• Pro' : ''}`}
            </div>
          </div>

          <div className="cd-actions">
            <button className="cd-btn cd-btn-g" onClick={() => { clear(); track?.('compare_clear') }} title="Očisti">
              ✕
            </button>
            <button className="cd-btn cd-btn-p" disabled={!canCompare}
              onClick={() => { onOpenCompare(); track?.('compare_open', null, null, null, { count }) }}>
              Usporedi ({count}) →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
