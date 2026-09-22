'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import { activeFilterCount } from '@/lib/prijemni/searchFilter'
import { useClientState } from '@/lib/hooks/useClientState'

// #5 — static trending chips (replace with analytics-driven later)
const TRENDING_CHIPS = [
  { label: 'medicina', query: 'medicina' },
  { label: 'arhitektura', query: 'arhitektura' },
  { label: 'zagreb', filter: { city: 'Zagreb' } },
  { label: 'kalkulator', filter: { has_kalk: true } },
  { label: 'pravo', query: 'pravo' },
  { label: 'niski prag', filter: { prag_band: 'pristupacan' } },
]

// #6 — localStorage helpers for saved presets
const PRESETS_KEY = 'pr_filter_presets'
function loadPresets() {
  try { return JSON.parse(localStorage.getItem(PRESETS_KEY) || '[]') } catch { return [] }
}
function savePresets(presets) {
  try { localStorage.setItem(PRESETS_KEY, JSON.stringify(presets)) } catch {}
}

const SORT_OPTIONS = [
  { value: 'popular',    label: '🔥 Popularnost' },
  { value: 'prag_desc',  label: '📈 Prag (visoki prvi)' },
  { value: 'prag_asc',   label: '📉 Prag (niski prvi)' },
  { value: 'ispit_soon', label: '⏰ Ispit najbliže' },
  { value: 'alpha',      label: '🔤 Po abecedi' },
]

const PRAG_OPTIONS = [
  { value: 'all',          label: 'Svi pragovi' },
  { value: 'pristupacan',  label: '< 500 bod.' },
  { value: 'srednje',      label: '500–650' },
  { value: 'tezak',        label: '> 650' },
]

const ISPIT_OPTIONS = [
  { value: 'all',     label: 'Svi mjeseci' },
  { value: 'lipanj',  label: 'Lipanj' },
  { value: 'srpanj',  label: 'Srpanj' },
  { value: 'kasnije', label: 'Kasnije' },
]

const TIP_OPTIONS = [
  { value: 'all',       label: 'Svi tipovi' },
  { value: 'klasicni',  label: 'Klasični prijemni' },
  { value: 'elim_test', label: 'Eliminirajući test' },
  { value: 'audicija',  label: 'Audicija' },
  { value: 'matura',    label: 'Samo matura' },
]

const CITY_OPTIONS_FLAT = [
  { value: 'all',     label: 'Svi gradovi' },
  { value: 'Zagreb',  label: 'Zagreb' },
  { value: 'Rijeka',  label: 'Rijeka' },
  { value: 'Split',   label: 'Split' },
  { value: 'Osijek',  label: 'Osijek' },
]

export default function SearchFilterBar({ filter, setFilter, totalStudiji, defaultFilter, track, isPro = false, forceOpen = false, onForceOpenHandled }) {
  const [open, setOpen] = useState(forceOpen)
  const [previousForceOpen, setPreviousForceOpen] = useState(forceOpen)
  if (previousForceOpen !== forceOpen) {
    setPreviousForceOpen(forceOpen)
    if (forceOpen) setOpen(true)
  }
  const inputRef = useRef(null)
  const activeCount = activeFilterCount(filter)
  const hasFilters = activeCount > 0 || filter.query
  const [savedPresets, setSavedPresets] = useClientState(loadPresets, [])
  const [presetName, setPresetName] = useState('')
  const lastSubmittedQuery = useRef('')

  // Open filter panel when parent requests it (#4)
  useEffect(() => {
    if (forceOpen) {
      onForceOpenHandled?.()
    }
  }, [forceOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  // Hydrate filter from URL params on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams(window.location.search)
    const patch = {}
    if (p.get('q')) patch.query = p.get('q')
    if (p.get('prag')) patch.prag_band = p.get('prag')
    if (p.get('sort')) patch.sort = p.get('sort')
    if (p.get('ispit')) patch.ispit_month = p.get('ispit')
    if (p.get('tip')) patch.tip_upisa = p.get('tip')
    if (p.get('city')) patch.city = p.get('city')
    if (p.get('kalk') === '1') patch.has_kalk = true
    if (Object.keys(patch).length > 0) setFilter(f => ({ ...f, ...patch }))
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // Sync filter state → URL params (replaceState, no history entry)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    for (const key of ['q', 'prag', 'sort', 'ispit', 'tip', 'city', 'kalk']) params.delete(key)
    if (filter.query) params.set('q', filter.query)
    if (filter.prag_band && filter.prag_band !== 'all') params.set('prag', filter.prag_band)
    if (filter.sort && filter.sort !== 'popular') params.set('sort', filter.sort)
    if (filter.ispit_month && filter.ispit_month !== 'all') params.set('ispit', filter.ispit_month)
    if (filter.tip_upisa && filter.tip_upisa !== 'all') params.set('tip', filter.tip_upisa)
    if (filter.city && filter.city !== 'all') params.set('city', filter.city)
    if (filter.has_kalk) params.set('kalk', '1')
    const url = window.location.pathname + (params.toString() ? `?${params}` : '') + window.location.hash
    window.history.replaceState({}, '', url)
  }, [filter])

  // Cmd/Ctrl+K to focus search
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const handleClear = () => {
    setFilter(defaultFilter)
    track?.('search_filter_cleared', null, null, null, { had_query: !!filter.query, active_count: activeCount })
  }

  // #7 — track search submission on Enter or blur when query changed
  const handleQuerySubmit = useCallback(() => {
    const q = filter.query?.trim()
    if (q && q !== lastSubmittedQuery.current) {
      lastSubmittedQuery.current = q
      track?.('search_query_submit', null, null, null, { query: q, active_filters: activeCount })
    }
  }, [filter.query, activeCount, track])

  // #6 helpers
  const handleSavePreset = () => {
    const name = presetName.trim()
    if (!name) return
    const updated = [...savedPresets, { name, filter: { ...filter } }]
    setSavedPresets(updated)
    savePresets(updated)
    setPresetName('')
    track?.('filter_preset_saved', null, null, null, { name })
  }
  const handleDeletePreset = (idx) => {
    const updated = savedPresets.filter((_, i) => i !== idx)
    setSavedPresets(updated)
    savePresets(updated)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{__html:`
        @keyframes sfb-expand{from{opacity:0;max-height:0}to{opacity:1;max-height:400px}}
        .sfb-root{
          position:sticky;top:58px;z-index:50;
          background:linear-gradient(180deg,rgba(7,9,15,.95) 0%,rgba(7,9,15,.85) 100%);
          backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);
          border-radius:14px;border:1px solid var(--bdr);
          margin-bottom:18px;padding:10px 12px
        }
        .sfb-row{display:flex;gap:8px;align-items:center}
        .sfb-search{
          flex:1;position:relative;display:flex;align-items:center
        }
        .sfb-search-ic{
          position:absolute;left:11px;top:50%;transform:translateY(-50%);
          color:var(--muted);font-size:14px;pointer-events:none
        }
        .sfb-search input{
          width:100%;padding:9px 36px 9px 36px;border-radius:10px;
          background:var(--s2);border:1px solid var(--bdr);color:var(--text);
          font-family:var(--fb);font-size:13.5px;outline:none;transition:border-color .15s
        }
        .sfb-search input:focus{border-color:rgba(75,123,255,.4)}
        .sfb-search input::placeholder{color:var(--muted)}
        .sfb-shortcut{
          position:absolute;right:11px;top:50%;transform:translateY(-50%);
          padding:2px 6px;border-radius:5px;font-size:10px;font-weight:600;
          background:rgba(255,255,255,.06);color:var(--muted);border:1px solid var(--bdr);
          font-family:var(--fb);pointer-events:none
        }
        .sfb-clear{
          position:absolute;right:11px;top:50%;transform:translateY(-50%);
          width:20px;height:20px;border-radius:6px;
          background:rgba(255,255,255,.08);color:var(--muted);border:none;
          display:flex;align-items:center;justify-content:center;font-size:11px;cursor:pointer
        }
        .sfb-clear:hover{background:rgba(255,255,255,.14);color:var(--text)}
        .sfb-toggle{
          padding:9px 14px;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;
          background:rgba(255,255,255,.06);color:var(--text);border:1px solid var(--bdr);
          font-family:var(--fb);display:flex;align-items:center;gap:6px;white-space:nowrap;transition:all .15s
        }
        .sfb-toggle:hover{background:rgba(255,255,255,.1)}
        .sfb-toggle.active{background:rgba(75,123,255,.12);color:var(--blue);border-color:rgba(75,123,255,.3)}
        .sfb-toggle-badge{
          padding:1px 7px;border-radius:99px;background:var(--blue);color:#fff;
          font-size:10px;font-weight:700;min-width:16px;text-align:center
        }
        .sfb-results{
          font-size:11.5px;color:var(--muted);padding:0 10px;flex-shrink:0;font-weight:500
        }
        .sfb-results strong{color:var(--text);font-family:var(--fh);font-weight:800}
        .sfb-panel{
          margin-top:10px;padding:12px;border-radius:11px;
          background:rgba(0,0,0,.2);border:1px solid var(--bdr);
          animation:sfb-expand .25s cubic-bezier(.16,1,.3,1)
        }
        .sfb-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px}
        .sfb-field{display:flex;flex-direction:column;gap:4px}
        .sfb-field label{
          font-size:10px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
          color:var(--muted)
        }
        .sfb-select{
          padding:7px 10px;border-radius:8px;font-size:12.5px;
          background:var(--s2);border:1px solid var(--bdr);color:var(--text);
          font-family:var(--fb);outline:none;cursor:pointer
        }
        .sfb-select:focus{border-color:rgba(75,123,255,.4)}
        .sfb-checkbox{
          padding:7px 10px;border-radius:8px;cursor:pointer;
          background:var(--s2);border:1px solid var(--bdr);
          display:flex;align-items:center;gap:8px;font-size:12.5px;color:var(--text);
          font-family:var(--fb);transition:all .15s
        }
        .sfb-checkbox:hover{border-color:var(--bdr-hi)}
        .sfb-checkbox.on{background:rgba(75,123,255,.1);border-color:rgba(75,123,255,.4);color:var(--blue);font-weight:600}
        .sfb-clear-btn{
          margin-top:10px;padding:8px 14px;border-radius:9px;font-size:12px;font-weight:600;cursor:pointer;
          background:transparent;color:var(--muted);border:1px solid var(--bdr);font-family:var(--fb);
          display:inline-flex;align-items:center;gap:6px
        }
        .sfb-clear-btn:hover{color:#f87171;border-color:rgba(248,113,113,.3)}
        @media(max-width:640px){
          .sfb-row{flex-wrap:wrap}
          .sfb-results{display:none}
          .sfb-shortcut{display:none}
          .sfb-toggle{padding:9px 12px}
        }
      `}}/>

      <div className="sfb-root">
        <div className="sfb-row">
          <div className="sfb-search">
            <span className="sfb-search-ic">🔍</span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Pretraži fakultete, studije, predmete, gradove..."
              value={filter.query}
              onChange={e => setFilter({ ...filter, query: e.target.value })}
              onFocus={() => track?.('search_focused')}
              onKeyDown={e => { if (e.key === 'Enter') handleQuerySubmit() }}
              onBlur={handleQuerySubmit}
            />
            {filter.query
              ? <button className="sfb-clear" onClick={() => setFilter({ ...filter, query: '' })}>✕</button>
              : <span className="sfb-shortcut">⌘ K</span>
            }
          </div>

          <button className={`sfb-toggle${activeCount > 0 ? ' active' : ''}`} onClick={() => setOpen(o => !o)}>
            <span>⚙ Filteri</span>
            {activeCount > 0 && <span className="sfb-toggle-badge">{activeCount}</span>}
            <span style={{fontSize:10,opacity:.6}}>{open ? '▴' : '▾'}</span>
          </button>

          <div className="sfb-results">
            <strong>{totalStudiji}</strong> {totalStudiji === 1 ? 'studij' : 'studija'}
          </div>
        </div>

        {/* #5 — Trending chips (hidden when query or filters active) */}
        {!filter.query && activeCount === 0 && (
          <div style={{display:'flex',alignItems:'center',gap:6,marginTop:8,flexWrap:'wrap'}}>
            <span style={{fontSize:10,fontWeight:700,color:'var(--muted)',letterSpacing:'.06em',textTransform:'uppercase',whiteSpace:'nowrap'}}>🔥 Često:</span>
            {TRENDING_CHIPS.map(chip => (
              <button key={chip.label}
                onClick={() => {
                  if (chip.query) setFilter(f => ({ ...f, query: chip.query }))
                  else if (chip.filter) setFilter(f => ({ ...f, ...chip.filter }))
                  track?.('trending_chip_click', null, null, null, { chip: chip.label })
                }}
                style={{
                  padding:'3px 10px',borderRadius:99,fontSize:11,fontWeight:600,cursor:'pointer',
                  background:'rgba(255,255,255,.04)',color:'var(--muted)',border:'1px solid var(--bdr)',
                  fontFamily:'var(--fb)',whiteSpace:'nowrap',transition:'all .12s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.09)';e.currentTarget.style.color='var(--text)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.04)';e.currentTarget.style.color='var(--muted)'}}>
                {chip.label}
              </button>
            ))}
          </div>
        )}

        {open && (
          <div className="sfb-panel">
            <div className="sfb-grid">
              <div className="sfb-field">
                <label>Sortiraj</label>
                <select className="sfb-select" value={filter.sort} onChange={e => setFilter({ ...filter, sort: e.target.value })}>
                  {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="sfb-field">
                <label>Bodovni prag</label>
                <select className="sfb-select" value={filter.prag_band} onChange={e => setFilter({ ...filter, prag_band: e.target.value })}>
                  {PRAG_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="sfb-field">
                <label>Mjesec ispita</label>
                <select className="sfb-select" value={filter.ispit_month} onChange={e => setFilter({ ...filter, ispit_month: e.target.value })}>
                  {ISPIT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="sfb-field">
                <label>Tip upisa</label>
                <select className="sfb-select" value={filter.tip_upisa} onChange={e => setFilter({ ...filter, tip_upisa: e.target.value })}>
                  {TIP_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="sfb-field">
                <label>Grad</label>
                <select className="sfb-select" value={filter.city} onChange={e => setFilter({ ...filter, city: e.target.value })}>
                  {CITY_OPTIONS_FLAT.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="sfb-field">
                <label>Dodatno</label>
                <div className={`sfb-checkbox${filter.has_kalk ? ' on' : ''}`}
                  onClick={() => setFilter({ ...filter, has_kalk: !filter.has_kalk })}>
                  <input type="checkbox" checked={filter.has_kalk} readOnly style={{accentColor:'var(--blue)'}}/>
                  Ima kalkulator bodova
                </div>
              </div>
            </div>

            {hasFilters && (
              <button className="sfb-clear-btn" onClick={handleClear}>
                ✕ Očisti sve
              </button>
            )}

            {/* #6 — Saved filter presets */}
            <div style={{marginTop:12,paddingTop:12,borderTop:'1px solid var(--bdr)'}}>
              <div style={{fontSize:10,fontWeight:700,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--muted)',marginBottom:8}}>
                {isPro ? '⭐ Moji presets' : '⭐ Moji presets (Pro)'}
              </div>
              {savedPresets.length > 0 && (
                <div style={{display:'flex',flexWrap:'wrap',gap:6,marginBottom:8}}>
                  {savedPresets.map((p, i) => (
                    <div key={i} style={{display:'flex',alignItems:'center',gap:4,padding:'4px 10px 4px 12px',borderRadius:99,background:'rgba(75,123,255,.08)',border:'1px solid rgba(75,123,255,.2)'}}>
                      <button
                        onClick={() => { setFilter({ ...defaultFilter, ...p.filter }); track?.('filter_preset_load', null, null, null, { name: p.name }) }}
                        style={{fontSize:11,fontWeight:600,color:'var(--blue)',background:'none',border:'none',cursor:'pointer',padding:0,fontFamily:'var(--fb)'}}>
                        {p.name}
                      </button>
                      <button onClick={() => handleDeletePreset(i)} style={{fontSize:10,color:'var(--muted)',background:'none',border:'none',cursor:'pointer',padding:0,lineHeight:1}}>
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {isPro ? (
                <div style={{display:'flex',gap:6}}>
                  <input
                    value={presetName}
                    onChange={e => setPresetName(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSavePreset()}
                    placeholder="Ime preseta..."
                    style={{flex:1,padding:'6px 10px',borderRadius:8,background:'var(--s2)',border:'1px solid var(--bdr)',color:'var(--text)',fontFamily:'var(--fb)',fontSize:12,outline:'none'}}/>
                  <button onClick={handleSavePreset} disabled={!presetName.trim()}
                    style={{padding:'6px 12px',borderRadius:8,fontSize:12,fontWeight:700,cursor:'pointer',fontFamily:'var(--fb)',background:'rgba(75,123,255,.12)',color:'var(--blue)',border:'1px solid rgba(75,123,255,.25)',opacity:presetName.trim()?1:.5}}>
                    Spremi
                  </button>
                </div>
              ) : (
                <div style={{fontSize:11,color:'var(--muted)',fontStyle:'italic'}}>Dostupno Pro korisnicima.</div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
