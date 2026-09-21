'use client'
import { useEffect, useState, useMemo } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const STATUS_CONFIG = {
  pending:    { label: 'Pending',    color: '#6a82a8', bg: 'rgba(106,130,168,.1)' },
  new:        { label: 'Novo',       color: '#3ecf6e', bg: 'rgba(62,207,110,.1)' },
  changed:    { label: 'Promjena',   color: '#fb923c', bg: 'rgba(251,146,60,.1)' },
  unchanged:  { label: 'Isto',       color: '#6a82a8', bg: 'rgba(106,130,168,.05)' },
  unmatched:  { label: 'Ne mapira',  color: '#f87171', bg: 'rgba(248,113,113,.1)' },
  applied:    { label: 'Primijenjeno', color: '#3ecf6e', bg: 'rgba(62,207,110,.15)' },
  rejected:   { label: 'Odbijeno',   color: '#f87171', bg: 'rgba(248,113,113,.15)' },
}

export default function AdminPrijemniPage() {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(null)
  const [runs, setRuns] = useState([])
  const [selectedRun, setSelectedRun] = useState(null)
  const [stagingRows, setStagingRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState('all')
  const [selectedIds, setSelectedIds] = useState(new Set())
  const [studiji, setStudiji] = useState([])
  const [previousRun, setPreviousRun] = useState(selectedRun)
  if (previousRun !== selectedRun) {
    setPreviousRun(selectedRun)
    setStagingRows([])
    setSelectedIds(new Set())
    setLoading(!!selectedRun)
  }

  // Auth check
  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace('/login'); return }
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single()
      if (profile?.role !== 'admin') {
        setAuthorized(false)
      } else {
        setAuthorized(true)
      }
    })()
  }, [router])

  // Load runs
  useEffect(() => {
    if (!authorized) return
    ;(async () => {
      const { data } = await supabase
        .from('scraper_runs')
        .select('*')
        .order('started_at', { ascending: false })
        .limit(20)
      setRuns(data || [])

      // Load studiji za manual match dropdown
      const { data: studijiData } = await supabase
        .from('studiji_view')
        .select('id, naziv, fak_short, fak_name')
        .order('fak_short')
      setStudiji(studijiData || [])
    })()
  }, [authorized])

  // Load staging rows za selected run
  useEffect(() => {
    if (!selectedRun) return
    let cancelled = false
    supabase
      .from('pragovi_staging')
      .select('*')
      .eq('run_id', selectedRun.id)
      .order('diff_status')
      .order('fakultet_hint')
      .then(({ data }) => {
        if (cancelled) return
        setStagingRows(data || [])
        setSelectedIds(new Set())
        setLoading(false)
      })
    return () => { cancelled = true }
  }, [selectedRun])

  const filteredRows = useMemo(() => {
    if (filter === 'all') return stagingRows
    return stagingRows.filter(r => r.diff_status === filter)
  }, [stagingRows, filter])

  const actionableRows = useMemo(() =>
    filteredRows.filter(r => (r.diff_status === 'new' || r.diff_status === 'changed') && r.studij_id),
    [filteredRows]
  )

  const handleToggle = (id) => {
    setSelectedIds(prev => {
      const n = new Set(prev)
      if (n.has(id)) n.delete(id); else n.add(id)
      return n
    })
  }

  const handleSelectAll = () => {
    if (selectedIds.size === actionableRows.length) {
      setSelectedIds(new Set())
    } else {
      setSelectedIds(new Set(actionableRows.map(r => r.id)))
    }
  }

  const handleApplyBatch = async () => {
    if (selectedIds.size === 0) return
    if (!confirm(`Primijeniti ${selectedIds.size} promjena u production?`)) return
    const { data, error } = await supabase.rpc('apply_staging_batch', {
      p_ids: Array.from(selectedIds),
    })
    if (error) { alert('Greška: ' + error.message); return }
    alert(`Primijenjeno: ${data.applied}, neuspjelo: ${data.failed}`)
    setSelectedRun(r => ({ ...r }))
  }

  const handleManualMatch = async (stagingId, studijId) => {
    await supabase
      .from('pragovi_staging')
      .update({
        studij_id: studijId,
        diff_status: studijId ? 'pending' : 'unmatched',
      })
      .eq('id', stagingId)

    if (studijId) {
      const row = stagingRows.find(r => r.id === stagingId)
      const { data: existing } = await supabase
        .from('pragovi')
        .select('prag, prijavljenih, upisanih')
        .eq('studij_id', studijId)
        .eq('godina', row.godina)
        .maybeSingle()

      let newStatus = 'new'
      let delta = null
      if (existing) {
        const d = {}
        if (existing.prag !== row.prag) d.prag = { old: existing.prag, new: row.prag }
        if (Object.keys(d).length > 0) {
          newStatus = 'changed'
          delta = d
        } else {
          newStatus = 'unchanged'
        }
      }

      await supabase
        .from('pragovi_staging')
        .update({ diff_status: newStatus, diff_delta: delta })
        .eq('id', stagingId)
    }

    setSelectedRun(r => ({ ...r }))
  }

  const handleReject = async (id, note = null) => {
    const { data: { session } } = await supabase.auth.getSession()
    await supabase
      .from('pragovi_staging')
      .update({
        diff_status: 'rejected',
        reviewed_by: session?.user.id,
        reviewed_at: new Date().toISOString(),
        review_note: note,
      })
      .eq('id', id)
    setSelectedRun(r => ({ ...r }))
  }

  async function runManualScrape() {
    if (!confirm('Pokrenuti scraper sada? Trajati \u0107e par sekundi.')) return
    const res = await fetch('/api/admin/scrape', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'azvo_upisi' }),
    })
    const json = await res.json()
    alert(JSON.stringify(json, null, 2))
    const { data } = await supabase.from('scraper_runs').select('*').order('started_at', { ascending: false }).limit(20)
    setRuns(data || [])
  }

  if (authorized === null) return <div style={{padding:40,color:'var(--muted)'}}>Provjera pristupa...</div>
  if (authorized === false) return (
    <div style={{padding:40,textAlign:'center'}}>
      <div style={{fontSize:40,marginBottom:12}}>🔒</div>
      <div style={{fontSize:16,fontWeight:700,marginBottom:8}}>Nema\u0161 pristup</div>
      <div style={{fontSize:13,color:'var(--muted)'}}>Ova stranica je samo za administratore.</div>
    </div>
  )

  return (
    <div style={{minHeight:'100vh',background:'var(--bg)',color:'var(--text)',fontFamily:'var(--fb)'}}>
      <style dangerouslySetInnerHTML={{__html:ADMIN_CSS}}/>

      <div className="ad-wrap">
        <div className="ad-head">
          <div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--muted)',marginBottom:6}}>Admin</div>
            <h1 style={{fontFamily:'var(--fh)',fontSize:28,fontWeight:800,letterSpacing:'-.02em'}}>Prijemni \u2014 Data Pipeline</h1>
            <p style={{color:'var(--muted)',fontSize:13,marginTop:6}}>Verificiraj scraper runove i primijeni promjene u production.</p>
          </div>
          <button onClick={() => runManualScrape()} className="ad-btn ad-btn-p">
            ⚡ Pokreni scraper
          </button>
        </div>

        {/* Runs sidebar */}
        <div className="ad-layout">
          <div className="ad-runs">
            <div className="ad-sec-title">Nedavni runovi</div>
            {runs.length === 0 && (
              <div style={{padding:20,color:'var(--muted)',fontSize:13,textAlign:'center'}}>Nema runova</div>
            )}
            {runs.map(r => (
              <div key={r.id}
                onClick={() => setSelectedRun(r)}
                className={`ad-run${selectedRun?.id === r.id ? ' on' : ''}`}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}>
                  <div style={{fontSize:13,fontWeight:700}}>{r.source}</div>
                  <div className="ad-run-status" data-status={r.status}>
                    {r.status === 'running' && '⏳'}
                    {r.status === 'success' && '✓'}
                    {r.status === 'partial' && '⚠'}
                    {r.status === 'failed' && '✗'}
                    {' '}{r.status}
                  </div>
                </div>
                <div style={{fontSize:11,color:'var(--muted)',marginBottom:6}}>
                  {new Date(r.started_at).toLocaleString('hr-HR')}
                </div>
                <div style={{display:'flex',gap:8,flexWrap:'wrap',fontSize:10}}>
                  <span style={{padding:'2px 6px',borderRadius:6,background:'rgba(62,207,110,.1)',color:'#3ecf6e'}}>+{r.rows_new} new</span>
                  <span style={{padding:'2px 6px',borderRadius:6,background:'rgba(251,146,60,.1)',color:'#fb923c'}}>~{r.rows_changed} chg</span>
                  {r.rows_unmatched > 0 && <span style={{padding:'2px 6px',borderRadius:6,background:'rgba(248,113,113,.1)',color:'#f87171'}}>⚠{r.rows_unmatched}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="ad-main">
            {!selectedRun && (
              <div style={{padding:60,textAlign:'center',color:'var(--muted)'}}>
                <div style={{fontSize:40,marginBottom:12}}>📊</div>
                <div style={{fontSize:14}}>Odaberi run s lijeve strane za pregled.</div>
              </div>
            )}

            {selectedRun && (
              <>
                <div className="ad-sec-title" style={{marginBottom:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span>{selectedRun.source} • {stagingRows.length} redova</span>
                  {selectedRun.error_message && (
                    <span style={{color:'#f87171',fontSize:11,fontWeight:600}}>⚠ {selectedRun.error_message}</span>
                  )}
                </div>

                {/* Filters */}
                <div style={{display:'flex',gap:6,marginBottom:14,flexWrap:'wrap'}}>
                  {['all', 'changed', 'new', 'unmatched', 'unchanged', 'applied', 'rejected'].map(f => {
                    const count = f === 'all' ? stagingRows.length : stagingRows.filter(r => r.diff_status === f).length
                    return (
                      <button key={f} onClick={() => setFilter(f)}
                        className={`ad-filter${filter === f ? ' on' : ''}`}>
                        {f === 'all' ? 'Svi' : STATUS_CONFIG[f]?.label || f} <span style={{opacity:.6,marginLeft:3}}>{count}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Bulk actions */}
                {actionableRows.length > 0 && (
                  <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14,padding:'10px 14px',borderRadius:10,background:'var(--s1)',border:'1px solid var(--bdr)',flexWrap:'wrap'}}>
                    <label style={{display:'flex',alignItems:'center',gap:8,cursor:'pointer',fontSize:13}}>
                      <input type="checkbox"
                        checked={selectedIds.size === actionableRows.length && actionableRows.length > 0}
                        onChange={handleSelectAll}/>
                      Odaberi sve primjenjive ({actionableRows.length})
                    </label>
                    {selectedIds.size > 0 && (
                      <>
                        <div style={{flex:1}}/>
                        <span style={{fontSize:12,color:'var(--muted)'}}>{selectedIds.size} odabrano</span>
                        <button onClick={handleApplyBatch} className="ad-btn ad-btn-p">
                          ✓ Primijeni odabrane
                        </button>
                      </>
                    )}
                  </div>
                )}

                {loading && <div style={{padding:40,textAlign:'center',color:'var(--muted)'}}>U\u010ditavam...</div>}

                {/* Staging rows */}
                <div style={{display:'flex',flexDirection:'column',gap:8}}>
                  {filteredRows.map(row => (
                    <StagingRow key={row.id}
                      row={row}
                      studiji={studiji}
                      selected={selectedIds.has(row.id)}
                      onToggle={() => handleToggle(row.id)}
                      onMatch={(studijId) => handleManualMatch(row.id, studijId)}
                      onReject={(note) => handleReject(row.id, note)}/>
                  ))}
                  {filteredRows.length === 0 && (
                    <div style={{padding:40,textAlign:'center',color:'var(--muted)',fontSize:13}}>
                      Nema redova u ovom filteru.
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function StagingRow({ row, studiji, selected, onToggle, onMatch, onReject }) {
  const [expanded, setExpanded] = useState(false)
  const cfg = STATUS_CONFIG[row.diff_status] || STATUS_CONFIG.pending
  const canApply = (row.diff_status === 'new' || row.diff_status === 'changed') && row.studij_id

  return (
    <div className="ad-row" style={{borderColor: selected ? 'var(--blue)' : 'var(--bdr)'}}>
      <div style={{display:'flex',alignItems:'flex-start',gap:12}}>
        {canApply && (
          <input type="checkbox" checked={selected} onChange={onToggle} style={{marginTop:4}}/>
        )}

        <div style={{flex:1,minWidth:0}}>
          <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:6,flexWrap:'wrap'}}>
            <span className="ad-status-pill" style={{background:cfg.bg,color:cfg.color}}>{cfg.label}</span>
            <span style={{fontSize:11,color:'var(--muted)'}}>{row.fakultet_hint}</span>
          </div>
          <div style={{fontSize:14,fontWeight:600,marginBottom:4}}>{row.studij_naziv}</div>
          <div style={{fontSize:11,color:'var(--muted)',display:'flex',gap:12,flexWrap:'wrap'}}>
            <span>Godina: {row.godina}</span>
            <span>Prag: <strong style={{color:'var(--text)'}}>{row.prag ?? '\u2014'}</strong></span>
            {row.prijavljenih && <span>Prijava: {row.prijavljenih}</span>}
            {row.upisanih && <span>Upisanih: {row.upisanih}</span>}
          </div>

          {/* Diff display */}
          {row.diff_delta && Object.keys(row.diff_delta).length > 0 && (
            <div style={{marginTop:8,padding:'8px 12px',borderRadius:8,background:'rgba(251,146,60,.06)',border:'1px solid rgba(251,146,60,.2)',fontSize:12}}>
              <strong style={{color:'#fb923c'}}>Promjene:</strong>
              {Object.entries(row.diff_delta).map(([k, v]) => (
                <div key={k} style={{marginTop:3}}>
                  <span style={{color:'var(--muted)'}}>{k}:</span>{' '}
                  <del style={{color:'#f87171'}}>{v.old ?? '\u2014'}</del>
                  {' \u2192 '}
                  <strong style={{color:'#3ecf6e'}}>{v.new ?? '\u2014'}</strong>
                </div>
              ))}
            </div>
          )}

          {/* Unmatched — show dropdown za manual match */}
          {row.diff_status === 'unmatched' && (
            <div style={{marginTop:10,display:'flex',gap:8,flexWrap:'wrap',alignItems:'center'}}>
              <span style={{fontSize:11,color:'var(--muted)'}}>Ru\u010dno mapiraj:</span>
              <select onChange={(e) => onMatch(e.target.value)}
                style={{padding:'6px 10px',borderRadius:8,background:'var(--s2)',border:'1px solid var(--bdr)',color:'var(--text)',fontSize:12,flex:1,minWidth:180}}>
                <option value="">\u2014 odaberi studij \u2014</option>
                {studiji.map(s => (
                  <option key={s.id} value={s.id}>{s.fak_short} \u2014 {s.naziv}</option>
                ))}
              </select>
              <button onClick={() => onReject('Ne mapira se \u2014 ru\u010dni reject')} className="ad-btn ad-btn-s">Odbij</button>
            </div>
          )}

          {/* Expand for raw payload */}
          {expanded && (
            <pre style={{marginTop:10,padding:10,borderRadius:8,background:'rgba(0,0,0,.3)',border:'1px solid var(--bdr)',fontSize:11,color:'var(--muted)',overflow:'auto',maxHeight:200}}>
              {JSON.stringify(row.raw_payload, null, 2)}
            </pre>
          )}
        </div>

        <div style={{display:'flex',flexDirection:'column',gap:6,flexShrink:0}}>
          <button onClick={() => setExpanded(!expanded)} className="ad-btn ad-btn-ghost" style={{fontSize:11}}>
            {expanded ? '\u25b2' : '\u25bc'} Raw
          </button>
          {(row.diff_status === 'new' || row.diff_status === 'changed') && row.studij_id && (
            <button onClick={() => onReject('Ru\u010dno odbi\u0107eno')} className="ad-btn ad-btn-s" style={{fontSize:11}}>Odbij</button>
          )}
        </div>
      </div>
    </div>
  )
}

const ADMIN_CSS = `
  .ad-wrap{max-width:1280px;margin:0 auto;padding:28px 24px 60px}
  .ad-head{display:flex;justify-content:space-between;align-items:flex-end;gap:16px;margin-bottom:28px;padding-bottom:20px;border-bottom:1px solid var(--bdr);flex-wrap:wrap}
  .ad-layout{display:grid;grid-template-columns:280px 1fr;gap:20px}
  @media(max-width:860px){.ad-layout{grid-template-columns:1fr}}
  .ad-runs{display:flex;flex-direction:column;gap:8px;max-height:calc(100vh - 160px);overflow-y:auto;scrollbar-width:thin}
  .ad-sec-title{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
  .ad-run{padding:12px 14px;border-radius:11px;background:var(--s1);border:1px solid var(--bdr);cursor:pointer;transition:border-color .15s,background .15s}
  .ad-run:hover{border-color:var(--bdr-hi)}
  .ad-run.on{border-color:rgba(75,123,255,.4);background:rgba(75,123,255,.05)}
  .ad-run-status{font-size:10px;font-weight:700;padding:2px 7px;border-radius:99px;letter-spacing:.04em;text-transform:uppercase}
  .ad-run-status[data-status="success"]{background:rgba(62,207,110,.12);color:#3ecf6e}
  .ad-run-status[data-status="partial"]{background:rgba(251,146,60,.12);color:#fb923c}
  .ad-run-status[data-status="failed"]{background:rgba(248,113,113,.12);color:#f87171}
  .ad-run-status[data-status="running"]{background:rgba(75,123,255,.12);color:var(--blue)}
  .ad-main{min-width:0}
  .ad-filter{padding:5px 10px;border-radius:8px;font-size:11.5px;font-weight:600;cursor:pointer;font-family:var(--fb);background:transparent;color:var(--muted);border:1px solid var(--bdr);transition:all .15s}
  .ad-filter:hover{color:var(--text);border-color:var(--bdr-hi)}
  .ad-filter.on{background:rgba(75,123,255,.1);color:var(--blue);border-color:rgba(75,123,255,.3)}
  .ad-row{padding:14px 16px;border-radius:11px;background:var(--s1);border:1px solid var(--bdr);transition:border-color .15s}
  .ad-status-pill{padding:2px 8px;border-radius:99px;font-size:10px;font-weight:700;letter-spacing:.04em;text-transform:uppercase}
  .ad-btn{padding:7px 14px;border-radius:9px;font-size:12.5px;font-weight:600;cursor:pointer;font-family:var(--fb);border:none;transition:all .15s;white-space:nowrap}
  .ad-btn-p{background:linear-gradient(135deg,var(--blue),var(--violet));color:#fff;box-shadow:0 4px 14px rgba(75,123,255,.25)}
  .ad-btn-p:hover{transform:translateY(-1px)}
  .ad-btn-s{background:rgba(255,255,255,.06);color:var(--text);border:1px solid var(--bdr)}
  .ad-btn-s:hover{background:rgba(255,255,255,.1)}
  .ad-btn-ghost{background:transparent;color:var(--muted);padding:4px 8px}
  .ad-btn-ghost:hover{color:var(--text)}
`
