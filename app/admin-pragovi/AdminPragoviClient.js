'use client'

import { useEffect, useMemo, useState } from 'react'

const INITIAL_DATA = [
  ["Medicina","Medicinski fakultet","Zagreb",962.0,960.0,962.0],
  ["Dentalna medicina","Stomatološki fakultet","Zagreb",null,820.0,810.0],
  ["Farmacija","Farmaceutsko-biokemijski","Zagreb",878.5,750.0,673.8],
  ["Veterinarska medicina","Veterinarski fakultet","Zagreb",780.0,780.0,780.0],
  ["Medicina","Medicinski fakultet","Split",null,780.0,775.0],
  ["Medicina","Medicinski fakultet","Rijeka",null,622.0,622.0],
  ["Medicina","Medicinski fakultet","Osijek",null,600.0,598.0],
  ["Psihologija","Filozofski fakultet","Zagreb",820.0,718.0,715.4],
  ["Logopedija","Edukacijsko-rehabilitacijski","Zagreb",870.8,840.0,831.3],
  ["Socijalni rad","Pravni fakultet","Zagreb",null,720.0,715.0],
  ["Socijalna pedagogija","Edukacijsko-rehabilitacijski","Zagreb",781.9,760.0,761.4],
  ["Pravo","Pravni fakultet","Zagreb",630.0,628.0,625.0],
  ["Pravo","Pravni fakultet","Split",null,580.0,575.0],
  ["Politologija","Fakultet pol. znanosti","Zagreb",694.0,620.0,615.9],
  ["Novinarstvo","Fakultet pol. znanosti","Zagreb",742.0,630.0,623.3],
  ["Elektrotehnika i IT i Računarstvo","FER","Zagreb",775.3,758.0,739.2],
  ["Računarstvo","FER","Zagreb",null,760.0,755.0],
  ["Računarstvo","FOI","Varaždin",null,650.0,648.0],
  ["Informatika (stručni)","FOI","Varaždin",477.5,478.0,477.5],
  ["Mehatronika i robotika","FER","Zagreb",680.0,690.0,686.1],
  ["Strojarstvo","FSB","Zagreb",490.0,508.0,518.1],
  ["Brodogradnja","FSB","Zagreb",462.0,430.0,423.2],
  ["Arhitektura i urbanizam","Arhitektonski fakultet","Zagreb",675.8,658.0,642.7],
  ["Dizajn","Arhitektonski fakultet","Zagreb",692.4,688.0,684.1],
  ["Građevinarstvo","Građevinski fakultet","Zagreb",535.0,525.0,520.0],
  ["Matematika","PMF","Zagreb",812.0,805.0,800.0],
  ["Fizika","PMF","Zagreb",748.0,742.0,740.0],
  ["Biologija","PMF","Zagreb",710.0,708.0,705.0],
  ["Kemija","PMF","Zagreb",680.0,668.0,660.0],
  ["Molekularna biologija","PMF","Zagreb",756.0,748.0,745.0],
  ["Poslovna ekonomija","Ekonomski fakultet","Zagreb",508.8,495.0,485.7],
  ["Ekonomija","Ekonomski fakultet","Zagreb",472.4,468.0,465.7],
  ["Ekonomija","Ekonomski fakultet","Split",null,440.0,438.0],
  ["Ekonomija","Ekonomski fakultet","Osijek",null,400.0,398.0],
  ["Kineziologija (Izobrazba trenera)","KIF","Zagreb",910.0,906.0,905.0],
  ["Promet","Fakultet prometnih znanosti","Zagreb",480.0,422.0,420.0],
  ["Aeronautika","Fakultet prometnih znanosti","Zagreb",545.0,582.0,580.0],
  ["Dentalna medicina","Medicinski fakultet","Rijeka",627.2,640.0,651.5],
  ["Rehabilitacija","Edukacijsko-rehabilitacijski","Zagreb",811.1,785.0,779.0],
]

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#07090f;--s1:#0e1220;--s2:#141828;--s3:#1a1f30;--blue:#4b7bff;--violet:#7c5cfc;--gold:#e9b446;--green:#3ecf6e;--red:#f05c5c;--txt:#e8ecf8;--muted:#7b82a0;--border:#1e2440}
html,body{background:var(--bg);color:var(--txt);font-family:'DM Sans',system-ui,sans-serif}
a{color:var(--blue);text-decoration:none}
nav{position:sticky;top:0;z-index:100;background:rgba(7,9,15,.9);border-bottom:1px solid var(--border);padding:0 28px;height:56px;display:flex;align-items:center;justify-content:space-between;backdrop-filter:blur(16px)}
.nav-brand{display:flex;align-items:center;gap:8px;font-weight:800;font-size:15px}
.nav-dot{width:7px;height:7px;border-radius:50%;background:var(--blue);box-shadow:0 0 10px var(--blue)}
.nav-badge{padding:2px 10px;border-radius:999px;background:rgba(240,92,92,.15);border:1px solid rgba(240,92,92,.3);font-size:10px;font-weight:700;color:var(--red);letter-spacing:.08em;text-transform:uppercase}
.wrap{max-width:1100px;margin:0 auto;padding:32px 24px}
.page-title{font-size:28px;font-weight:800;margin-bottom:4px}
.page-sub{font-size:14px;color:var(--muted);margin-bottom:32px}
.stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:32px}
@media(max-width:700px){.stats-row{grid-template-columns:1fr 1fr}}
.stat-card{background:var(--s1);border:1px solid var(--border);border-radius:14px;padding:18px 20px}
.stat-val{font-size:28px;font-weight:800;color:var(--blue);line-height:1}
.stat-lbl{font-size:12px;color:var(--muted);margin-top:4px}
.controls{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;align-items:center}
.search-box{flex:1;min-width:220px;padding:10px 14px;background:var(--s2);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-size:14px;font-family:inherit}
.search-box:focus{outline:none;border-color:var(--blue)}
.btn{padding:9px 18px;border-radius:10px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;transition:all .15s;border:none}
.btn-green{background:linear-gradient(135deg,var(--green),#2dcfbe);color:#fff}
.btn-green:hover{opacity:.88}
.btn-ghost{background:transparent;border:1px solid var(--border);color:var(--muted)}
.btn-ghost:hover{border-color:var(--txt);color:var(--txt)}
.btn-danger{background:rgba(240,92,92,.12);border:1px solid rgba(240,92,92,.3);color:var(--red)}
.btn-danger:hover{background:rgba(240,92,92,.2)}
.year-select{padding:9px 14px;background:var(--s2);border:1px solid var(--border);border-radius:10px;color:var(--txt);font-family:inherit;font-size:13px;font-weight:600;cursor:pointer}
.table-wrap{background:var(--s1);border:1px solid var(--border);border-radius:16px;overflow:hidden}
.table-header{display:grid;grid-template-columns:2fr 1.2fr 1fr 1fr 1fr 1fr 120px;padding:10px 16px;background:var(--s2);border-bottom:1px solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);gap:8px}
.table-row{display:grid;grid-template-columns:2fr 1.2fr 1fr 1fr 1fr 1fr 120px;padding:10px 16px;border-bottom:1px solid rgba(255,255,255,.04);gap:8px;align-items:center;transition:background .15s}
.table-row:last-child{border-bottom:none}
.table-row:hover{background:var(--s2)}
.table-row.edited{background:rgba(233,180,70,.06);border-left:3px solid var(--gold)}
.cell-studij{font-size:13px;font-weight:600;color:var(--txt);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cell-grad{font-size:12px;color:var(--muted)}
.cell-input{width:100%;padding:6px 8px;background:var(--s2);border:1px solid var(--border);border-radius:7px;color:var(--txt);font-size:13px;font-weight:600;font-family:inherit;text-align:center}
.cell-input:focus{outline:none;border-color:var(--gold)}
.cell-input.changed{border-color:var(--gold);background:rgba(233,180,70,.08)}
.cell-trend{font-size:11px;font-weight:700;padding:2px 8px;border-radius:6px;text-align:center}
.cell-trend.up{background:rgba(240,92,92,.12);color:var(--red)}
.cell-trend.down{background:rgba(62,207,110,.12);color:var(--green)}
.cell-trend.flat{background:rgba(123,130,160,.1);color:var(--muted)}
.cell-actions{display:flex;gap:4px;justify-content:flex-end}
.action-btn{padding:4px 8px;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer;font-family:inherit;border:none;transition:all .15s}
.action-reset{background:rgba(255,255,255,.06);color:var(--muted)}
.action-reset:hover{background:rgba(255,255,255,.12);color:var(--txt)}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);padding:12px 20px;border-radius:12px;font-size:13px;font-weight:600;z-index:9999;animation:slideUp .25s ease;white-space:nowrap}
.toast.success{background:rgba(62,207,110,.15);border:1px solid rgba(62,207,110,.35);color:var(--green)}
.toast.error{background:rgba(240,92,92,.12);border:1px solid rgba(240,92,92,.3);color:var(--red)}
@keyframes slideUp{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.export-section{margin-top:28px;padding:20px;background:var(--s1);border:1px solid var(--border);border-radius:16px}
.export-title{font-size:14px;font-weight:700;margin-bottom:8px;color:var(--txt)}
.export-sub{font-size:12px;color:var(--muted);margin-bottom:14px;line-height:1.6}
.code-box{background:var(--s2);border:1px solid var(--border);border-radius:10px;padding:14px;font-family:monospace;font-size:12px;color:var(--txt);overflow-x:auto;white-space:pre;max-height:300px;overflow-y:auto;line-height:1.6}
`

function mapInitialData() {
  return INITIAL_DATA.map((d) => ({
    studij: d[0],
    fakultet: d[1],
    grad: d[2],
    p2023: d[3],
    p2024: d[4],
    p2025: d[5],
    p2026: null,
    edited: false,
    original2025: d[5],
    original2026: null,
  }))
}

function getYearKey(y) {
  return { '2023': 'p2023', '2024': 'p2024', '2025': 'p2025', '2026': 'p2026' }[y] || 'p2025'
}

export default function AdminPragoviClient() {
  const [data, setData] = useState([])
  const [activeYear, setActiveYear] = useState('2025')
  const [search, setSearch] = useState('')
  const [lastSave, setLastSave] = useState('Nije sačuvano')
  const [exportText, setExportText] = useState('// Klikni "Sačuvaj sve" za generiranje...')
  const [toast, setToast] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('admin_pragovi')
    if (saved) {
      setData(JSON.parse(saved))
    } else {
      setData(mapInitialData())
    }
  }, [])

  function showToast(message, type = 'success') {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3000)
  }

  function saveState(nextData = data) {
    localStorage.setItem('admin_pragovi', JSON.stringify(nextData))
    setLastSave(`Sačuvano ${new Date().toLocaleTimeString('hr-HR')}`)
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return data.filter(
      (d) =>
        d.studij.toLowerCase().includes(q) ||
        d.grad.toLowerCase().includes(q)
    )
  }, [data, search])

  const editedCount = useMemo(() => data.filter((d) => d.edited).length, [data])

  const avg2025 = useMemo(() => {
    const valid = data.filter((d) => typeof d.p2025 === 'number')
    if (!valid.length) return '—'
    return Math.round(valid.reduce((a, d) => a + d.p2025, 0) / valid.length)
  }, [data])

  function updateVal(idx, key, val) {
    setData((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item
        const num = val === '' ? null : parseFloat(val)
        const compareBase = key === 'p2026' ? item.original2026 : item.original2025
        return {
          ...item,
          [key]: num,
          edited: num !== compareBase,
        }
      })
    )
  }

  function resetRow(idx) {
    const yk = getYearKey(activeYear)
    setData((prev) =>
      prev.map((item, i) => {
        if (i !== idx) return item
        const resetValue = yk === 'p2026' ? item.original2026 : item.original2025
        return {
          ...item,
          [yk]: resetValue,
          edited: false,
        }
      })
    )
  }

  function resetAll() {
    const ok = window.confirm('Resetirati sve izmjene?')
    if (!ok) return

    setData((prev) =>
      prev.map((d) => ({
        ...d,
        p2025: d.original2025,
        p2026: d.original2026,
        edited: false,
      }))
    )
    showToast('↺ Sve izmjene resetirane', 'success')
  }

  function clearStorage() {
    const ok = window.confirm('Obrisati sve sačuvane podatke?')
    if (!ok) return

    localStorage.removeItem('admin_pragovi')
    const fresh = mapInitialData()
    setData(fresh)
    setLastSave('Nije sačuvano')
    setExportText('// Klikni "Sačuvaj sve" za generiranje...')
    showToast('🗑 Podaci obrisani', 'success')
  }

  function exportJSON(nextData = data) {
    const studiji = nextData
      .map(
        (d) =>
          `  { studij:"${d.studij}", fakultet:"${d.fakultet}", grad:"${d.grad}", prag:${d.p2025 ?? 'null'}, polje:"—" }`
      )
      .join(',\n')

    const prag2023 = nextData
      .filter((d) => d.p2023)
      .map((d) => `  "${d.studij}_${d.grad}": ${d.p2023}`)
      .join(',\n')

    const output = `// ─── GENERIRANO: ${new Date().toLocaleString('hr-HR')} ───────────────────────
// Kopiraj u kalkulatorData.js

export const STUDIJI_2025 = [
${studiji}
];

export const PRAG_2023 = {
${prag2023}
};`

    setExportText(output)

    navigator.clipboard.writeText(output).then(
      () => showToast('📋 Kopirano u clipboard!', 'success'),
      () => showToast('Greška pri kopiranju u clipboard', 'error')
    )
  }

  function saveAll() {
    saveState(data)
    exportJSON(data)
    showToast('✓ Sačuvano i eksportirano!', 'success')
  }

  return (
    <>
      <style>{CSS}</style>

      <nav>
        <div className="nav-brand">
          <div className="nav-dot" />
          maturiraj.hr
          <span className="nav-badge">Admin</span>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: 'var(--muted)' }}>{lastSave}</span>
          <button className="btn btn-ghost" onClick={() => exportJSON()}>
            📥 Export JSON
          </button>
          <button className="btn btn-green" onClick={saveAll}>
            💾 Sačuvaj sve
          </button>
        </div>
      </nav>

      <div className="wrap">
        <div className="page-title">📊 Ažuriranje pragova bodova</div>
        <div className="page-sub">
          Ažuriraj bodovne pragove za svaku godinu. Promjene se eksportaju kao JSON koji kopiraš u <code>kalkulatorData.js</code>.
        </div>

        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-val">{data.length || '—'}</div>
            <div className="stat-lbl">Ukupno studija</div>
          </div>
          <div className="stat-card">
            <div className="stat-val" style={{ color: 'var(--gold)' }}>{editedCount}</div>
            <div className="stat-lbl">Izmijenjeno</div>
          </div>
          <div className="stat-card">
            <div className="stat-val" style={{ color: 'var(--green)' }}>{avg2025}</div>
            <div className="stat-lbl">Prosj. prag 2025</div>
          </div>
          <div className="stat-card">
            <div className="stat-val">{activeYear}</div>
            <div className="stat-lbl">Aktivna godina</div>
          </div>
        </div>

        <div className="controls">
          <input
            className="search-box"
            placeholder="🔍 Pretraži studij ili grad..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="year-select"
            value={activeYear}
            onChange={(e) => setActiveYear(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2026">2026 (unos)</option>
          </select>

          <button className="btn btn-ghost" onClick={resetAll}>
            ↺ Reset izmjena
          </button>

          <button className="btn btn-danger" onClick={clearStorage}>
            🗑 Obriši sve
          </button>
        </div>

        <div className="table-wrap">
          <div className="table-header">
            <div>Studij</div>
            <div>Grad</div>
            <div>2023</div>
            <div>2024</div>
            <div>{activeYear} (prag)</div>
            <div>Trend</div>
            <div style={{ textAlign: 'right' }}>Akcije</div>
          </div>

          <div>
            {filtered.length === 0 ? (
              <div style={{ padding: 32, textAlign: 'center', color: 'var(--muted)', fontSize: 14 }}>
                Nema rezultata za &quot;{search}&quot;
              </div>
            ) : (
              filtered.map((d) => {
                const idx = data.findIndex(
                  (x) => x.studij === d.studij && x.grad === d.grad && x.fakultet === d.fakultet
                )

                const delta =
                  typeof d.p2025 === 'number' && typeof d.p2024 === 'number'
                    ? d.p2025 - d.p2024
                    : 0

                const trend =
                  typeof d.p2025 === 'number' && typeof d.p2024 === 'number'
                    ? delta > 5
                      ? 'up'
                      : delta < -5
                        ? 'down'
                        : 'flat'
                    : 'flat'

                const trendLabel =
                  trend === 'up'
                    ? `↑ +${delta.toFixed(1)}`
                    : trend === 'down'
                      ? `↓ ${delta.toFixed(1)}`
                      : '→ Stabilan'

                const yearKey = getYearKey(activeYear)
                const val = d[yearKey] ?? ''

                return (
                  <div
                    key={`${d.studij}-${d.grad}-${d.fakultet}`}
                    className={`table-row ${d.edited ? 'edited' : ''}`}
                  >
                    <div className="cell-studij" title={d.studij}>
                      {d.studij}
                    </div>
                    <div className="cell-grad">{d.grad}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{d.p2023 ?? '—'}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>{d.p2024 ?? '—'}</div>

                    <input
                      className={`cell-input ${d.edited ? 'changed' : ''}`}
                      type="number"
                      step="0.1"
                      value={val}
                      placeholder="—"
                      onChange={(e) => updateVal(idx, yearKey, e.target.value)}
                      onFocus={(e) => e.target.select()}
                    />

                    <div className={`cell-trend ${trend}`}>{trendLabel}</div>

                    <div className="cell-actions">
                      <button
                        className="action-btn action-reset"
                        onClick={() => resetRow(idx)}
                        title="Reset"
                      >
                        ↺
                      </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>

        <div className="export-section">
          <div className="export-title">📋 Export za kalkulatorData.js</div>
          <div className="export-sub">
            Nakon ažuriranja klikni &quot;Sačuvaj sve&quot; pa &quot;Export JSON&quot;. Kopiraj generirani kod u <code>STUDIJI_2025</code> array u <code>kalkulatorData.js</code>.
            <br />
            Za PRAG_2023 objekt — kopiraj odgovarajući dio.
          </div>
          <div className="code-box">{exportText}</div>
        </div>
      </div>

      {toast ? <div className={`toast ${toast.type}`}>{toast.message}</div> : null}
    </>
  )
}