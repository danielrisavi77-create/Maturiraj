'use client'
import { useEffect, useState } from 'react'
import { getPragoviHistory } from '@/lib/prijemni/api'
import { TrendChartSkeleton } from '@/components/prijemni/skeletons/ComponentSkeletons'

export default function TrendChart({ studijId, color }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    getPragoviHistory(studijId).then(setData).catch(() => setData([]))
  }, [studijId])

  if (data === null) return <TrendChartSkeleton/>

  const points = data.filter(d => d.prag !== null)
  if (points.length < 2) return (
    <div style={{padding:'20px 16px',borderRadius:12,background:'var(--s1)',border:'1px solid var(--bdr)',fontSize:12,color:'var(--muted)',textAlign:'center'}}>
      📊 Nedovoljno podataka za trend (potrebno ≥ 2 godine).
    </div>
  )

  // Normalize za SVG — viewBox 300x120
  const W = 300, H = 120, PAD = 20
  const minY = Math.min(...points.map(p => p.prag)) - 20
  const maxY = Math.max(...points.map(p => p.prag)) + 20
  const rangeY = maxY - minY || 1

  const xFor = (i) => PAD + (i * (W - 2*PAD)) / (points.length - 1)
  const yFor = (v) => H - PAD - ((v - minY) / rangeY) * (H - 2*PAD)

  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${xFor(i)} ${yFor(p.prag)}`).join(' ')
  const area = `${path} L ${xFor(points.length-1)} ${H-PAD} L ${PAD} ${H-PAD} Z`

  // Trend = razlika prva vs zadnja
  const diff = points[points.length-1].prag - points[0].prag
  const trendPct = Math.round((diff / points[0].prag) * 100)

  return (
    <div style={{padding:'18px 20px',borderRadius:14,background:'var(--s1)',border:'1px solid var(--bdr)'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:14}}>
        <div>
          <div style={{fontSize:11,color:'var(--muted)',letterSpacing:'.08em',textTransform:'uppercase',fontWeight:600,marginBottom:3}}>
            📈 Povijest pragova
          </div>
          <div style={{fontSize:13,color:'var(--text)'}}>
            {points[0].godina}–{points[points.length-1].godina}
          </div>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{
            display:'inline-flex',alignItems:'center',gap:4,padding:'3px 10px',borderRadius:99,fontSize:11,fontWeight:700,
            background: diff > 0 ? 'rgba(248,113,113,.12)' : diff < 0 ? 'rgba(62,207,110,.12)' : 'rgba(106,130,168,.12)',
            color: diff > 0 ? '#f87171' : diff < 0 ? '#3ecf6e' : 'var(--muted)',
            border: `1px solid ${diff > 0 ? 'rgba(248,113,113,.25)' : diff < 0 ? 'rgba(62,207,110,.25)' : 'var(--bdr)'}`
          }}>
            {diff > 0 ? '↑' : diff < 0 ? '↓' : '='} {Math.abs(diff)} bod. ({trendPct > 0 ? '+' : ''}{trendPct}%)
          </div>
          <div style={{fontSize:10,color:'var(--muted)',marginTop:4}}>
            {diff > 0 ? 'teže za upis' : diff < 0 ? 'lakše za upis' : 'stabilno'}
          </div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} style={{display:'block',overflow:'visible'}}>
        <defs>
          <linearGradient id={`grad-${studijId}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
            <stop offset="100%" stopColor={color} stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0.25, 0.5, 0.75].map(p => (
          <line key={p} x1={PAD} x2={W-PAD} y1={PAD + p*(H-2*PAD)} y2={PAD + p*(H-2*PAD)} stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
        ))}

        {/* Area fill */}
        <path d={area} fill={`url(#grad-${studijId})`}/>

        {/* Line */}
        <path d={path} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Points + labels */}
        {points.map((p, i) => (
          <g key={p.godina}>
            <circle cx={xFor(i)} cy={yFor(p.prag)} r="3.5" fill={color} stroke="var(--bg)" strokeWidth="1.5"/>
            <text x={xFor(i)} y={yFor(p.prag) - 10} textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--text)" fontFamily="var(--fh)">
              {p.prag}
            </text>
            <text x={xFor(i)} y={H - 4} textAnchor="middle" fontSize="10" fill="var(--muted)" fontWeight="500">
              {p.godina}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
