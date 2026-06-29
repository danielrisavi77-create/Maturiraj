'use client'
import { useState, useEffect } from 'react'
import { getCompareSets, saveCompareSet, deleteCompareSet } from '@/lib/prijemni/compareSets'

const MAX_SETS = 10

const CSS = `
.csd-backdrop{position:fixed;inset:0;z-index:9999;background:rgba(7,9,15,.7);backdrop-filter:blur(6px);display:flex;align-items:flex-end;justify-content:flex-end}
.csd-panel{width:340px;max-width:100vw;height:calc(100vh - 64px);background:var(--s1);border-left:1px solid var(--bdr);border-top:1px solid var(--bdr);border-radius:18px 0 0 0;display:flex;flex-direction:column;overflow:hidden;animation:csd-slide .25s cubic-bezier(.16,1,.3,1)}
@keyframes csd-slide{from{transform:translateX(100%)}to{transform:translateX(0)}}
.csd-head{padding:20px 20px 14px;border-bottom:1px solid var(--bdr);display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.csd-title{font-family:var(--fh);font-size:18px;font-weight:800;letter-spacing:-.02em}
.csd-close{width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;cursor:pointer;background:rgba(255,255,255,.06);border:1px solid var(--bdr);font-size:14px;color:var(--muted);transition:all .15s}
.csd-close:hover{color:var(--text);border-color:var(--bdr-hi)}
.csd-body{flex:1;overflow-y:auto;padding:16px 20px;display:flex;flex-direction:column;gap:10px}
.csd-body::-webkit-scrollbar{width:4px}
.csd-body::-webkit-scrollbar-thumb{background:var(--bdr);border-radius:99px}
.csd-set{background:var(--s2);border:1px solid var(--bdr);border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;gap:6px;cursor:pointer;transition:all .15s}
.csd-set:hover{border-color:var(--bdr-hi);background:var(--s3)}
.csd-set-name{font-size:13px;font-weight:700;color:var(--text)}
.csd-set-meta{font-size:11px;color:var(--muted)}
.csd-set-actions{display:flex;gap:6px;margin-top:4px}
.csd-btn-load{padding:4px 10px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer;font-family:var(--fb);background:rgba(75,123,255,.12);color:var(--blue);border:1px solid rgba(75,123,255,.3);transition:all .15s}
.csd-btn-load:hover{background:rgba(75,123,255,.22);border-color:rgba(75,123,255,.5)}
.csd-btn-del{padding:4px 10px;border-radius:7px;font-size:11px;font-weight:700;cursor:pointer;font-family:var(--fb);background:rgba(248,113,113,.08);color:#f87171;border:1px solid rgba(248,113,113,.25);transition:all .15s}
.csd-btn-del:hover{background:rgba(248,113,113,.18)}
.csd-save{flex-shrink:0;padding:16px 20px;border-top:1px solid var(--bdr);display:flex;flex-direction:column;gap:8px}
.csd-save-label{font-size:11px;font-weight:700;color:var(--muted);letter-spacing:.06em;text-transform:uppercase}
.csd-input-row{display:flex;gap:8px}
.csd-input{flex:1;padding:8px 12px;border-radius:9px;font-size:13px;font-family:var(--fb);background:var(--s2);color:var(--text);border:1px solid var(--bdr);outline:none;transition:border .15s}
.csd-input:focus{border-color:rgba(75,123,255,.5)}
.csd-input::placeholder{color:var(--muted)}
.csd-save-btn{padding:8px 14px;border-radius:9px;font-size:13px;font-weight:700;cursor:pointer;font-family:var(--fb);background:var(--blue);color:#fff;border:none;white-space:nowrap;transition:opacity .15s}
.csd-save-btn:disabled{opacity:.4;cursor:default}
.csd-empty{text-align:center;color:var(--muted);font-size:13px;padding:32px 0}
.csd-pro-gate{margin:12px 0;padding:12px 14px;border-radius:12px;background:rgba(233,180,70,.08);border:1px solid rgba(233,180,70,.22);font-size:12px;color:var(--gold);display:flex;gap:8px;align-items:flex-start;line-height:1.6}
`

/**
 * Props:
 *   open {boolean}
 *   onClose {() => void}
 *   currentIds {string[]}   — ids currently in compare store
 *   isPro {boolean}
 *   onLoad {(ids: string[]) => void}  — called when user loads a saved set
 *   track {function}
 */
export default function CompareSetsDrawer({ open, onClose, currentIds = [], isPro = false, onLoad, track }) {
  const [sets, setSets] = useState([])
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!open || !isPro) return
    setLoading(true)
    getCompareSets()
      .then(setSets)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [open, isPro])

  const handleSave = async () => {
    if (!name.trim() || currentIds.length < 2) return
    setSaving(true); setError(null)
    try {
      const saved = await saveCompareSet(name, currentIds)
      setSets(prev => [saved, ...prev].slice(0, MAX_SETS))
      setName('')
      track?.('compare_set_saved', null, null, null, { count: currentIds.length, name })
    } catch (e) {
      setError(e.message || 'Greška pri spremanju.')
    } finally {
      setSaving(false) }
  }

  const handleLoad = (set) => {
    onLoad?.(set.studij_ids)
    track?.('compare_set_loaded', null, null, null, { id: set.id, count: set.studij_ids.length })
    onClose()
  }

  const handleDelete = async (e, id) => {
    e.stopPropagation()
    try {
      await deleteCompareSet(id)
      setSets(prev => prev.filter(s => s.id !== id))
      track?.('compare_set_deleted', null, null, null, { id })
    } catch {}
  }

  if (!open) return null

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: CSS}}/>
      <div className="csd-backdrop" onClick={onClose}>
        <div className="csd-panel" onClick={e => e.stopPropagation()}>
          <div className="csd-head">
            <div className="csd-title">Spremi usporedbu</div>
            <button className="csd-close" onClick={onClose}>✕</button>
          </div>

          <div className="csd-body">
            {!isPro ? (
              <div className="csd-pro-gate">
                <span>⭐</span>
                <span>Spremanje usporedbi dostupno je Pro korisnicima. <a href="/pro" style={{color:'var(--gold)',textDecoration:'underline'}}>Aktiviraj Pro →</a></span>
              </div>
            ) : loading ? (
              <div className="csd-empty">Učitavam...</div>
            ) : sets.length === 0 ? (
              <div className="csd-empty">Još nema spremljenih usporedbi.<br/>Spremi svoju prvu u nastavku.</div>
            ) : (
              sets.map(set => (
                <div key={set.id} className="csd-set" onClick={() => handleLoad(set)}>
                  <div className="csd-set-name">{set.name}</div>
                  <div className="csd-set-meta">
                    {set.studij_ids.length} {set.studij_ids.length === 1 ? 'studij' : 'studija'} •{' '}
                    {new Date(set.created_at).toLocaleDateString('hr-HR', {day:'numeric', month:'short'})}
                  </div>
                  <div className="csd-set-actions" onClick={e => e.stopPropagation()}>
                    <button className="csd-btn-load" onClick={() => handleLoad(set)}>Učitaj →</button>
                    <button className="csd-btn-del" onClick={e => handleDelete(e, set.id)}>Obriši</button>
                  </div>
                </div>
              ))
            )}
          </div>

          {isPro && (
            <div className="csd-save">
              <div className="csd-save-label">Spremi trenutnu usporedbu</div>
              {currentIds.length < 2 && (
                <div style={{fontSize:11,color:'var(--muted)'}}>Dodaj barem 2 studija za spremanje.</div>
              )}
              {currentIds.length >= 2 && (
                <>
                  <div className="csd-input-row">
                    <input
                      className="csd-input"
                      placeholder='npr. "Moji top medicinski"'
                      value={name}
                      maxLength={80}
                      onChange={e => setName(e.target.value)}
                      onKeyDown={e => { if (e.key === 'Enter') handleSave() }}
                    />
                    <button className="csd-save-btn" disabled={!name.trim() || saving || sets.length >= MAX_SETS} onClick={handleSave}>
                      {saving ? '...' : 'Spremi'}
                    </button>
                  </div>
                  {sets.length >= MAX_SETS && <div style={{fontSize:11,color:'#fb923c'}}>Dostignut maksimum od {MAX_SETS} setova. Obriši stari da bi dodao novi.</div>}
                  {error && <div style={{fontSize:11,color:'#f87171'}}>{error}</div>}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
