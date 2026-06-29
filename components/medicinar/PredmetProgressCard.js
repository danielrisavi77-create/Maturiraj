'use client'

const PREDMET_META = {
  biologija:  { ic: '🧬', color: '#3ecf6e' },
  kemija:     { ic: '⚗️', color: '#e9b446' },
  fizika:     { ic: '⚛️', color: '#4b7bff' },
  matematika: { ic: '∑', color: '#7c5cfc' },
  hrvatski:   { ic: '📖', color: '#fb923c' },
  engleski:   { ic: '🌐', color: '#2dd4bf' },
}

export default function PredmetProgressCard({ predmet, data, color }) {
  const key = predmet.toLowerCase().split(' ')[0]
  const meta = PREDMET_META[key] || { ic: '📘', color: 'var(--muted)' }

  const coverage = data?.skripte_total_chapters
    ? Math.round((data.skripte_viewed_chapters / data.skripte_total_chapters) * 100)
    : 0
  const mastery = data?.skripte_total_chapters
    ? Math.round((data.skripte_mastered_chapters / data.skripte_total_chapters) * 100)
    : 0
  const accuracy = data?.vjezbe_accuracy ?? 0
  const simScore = data?.simulator_best_score ?? null

  // Overall score = weighted average
  const overall = data
    ? Math.round(coverage * 0.3 + mastery * 0.3 + accuracy * 0.4)
    : 0

  const level = overall >= 75 ? 'strong' : overall >= 50 ? 'medium' : overall >= 25 ? 'weak' : 'none'
  const levelColor = {
    strong: '#3ecf6e',
    medium: '#e9b446',
    weak: '#fb923c',
    none: 'var(--muted)',
  }[level]
  const levelLabel = {
    strong: 'Solidno',
    medium: 'Napreduj',
    weak: 'Slabije',
    none: 'Nije započeto',
  }[level]

  return (
    <div style={{
      padding: '16px 18px', borderRadius: 14,
      background: 'var(--s1)',
      border: `1px solid ${data ? levelColor + '33' : 'var(--bdr)'}`,
      position: 'relative', overflow: 'hidden',
      transition: 'transform .2s, border-color .2s',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:14}}>
        <div style={{display:'flex',alignItems:'center',gap:10}}>
          <div style={{
            width:36,height:36,borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',
            background:`${meta.color}18`,border:`1px solid ${meta.color}33`,
            fontSize:18,flexShrink:0,
          }}>{meta.ic}</div>
          <div>
            <div style={{fontSize:13,fontWeight:700,letterSpacing:'-.01em'}}>{predmet}</div>
            <div style={{fontSize:11,color:levelColor,fontWeight:600,marginTop:1}}>{levelLabel}</div>
          </div>
        </div>
        <div style={{fontFamily:'var(--fh)',fontSize:22,fontWeight:900,color:levelColor,letterSpacing:'-.02em'}}>
          {overall}<span style={{fontSize:10,color:'var(--muted)',fontWeight:500}}>/100</span>
        </div>
      </div>

      {/* Metric rows */}
      <div style={{display:'flex',flexDirection:'column',gap:8}}>
        <MetricRow label="Gradivo" value={coverage} unit="%" color={meta.color}
          hint={data ? `${data.skripte_viewed_chapters}/${data.skripte_total_chapters} poglavlja` : null}/>
        <MetricRow label="Usvojeno" value={mastery} unit="%" color={meta.color}
          hint={data ? `kviz > 80%` : null}/>
        <MetricRow label="Vježbe" value={Math.round(accuracy)} unit="%" color={meta.color}
          hint={data ? `${data.vjezbe_correct}/${data.vjezbe_total_attempts} točno` : null}/>
        {simScore !== null && (
          <MetricRow label="Najbolji simulator" value={Math.round(simScore)} unit="%" color={meta.color}/>
        )}
      </div>

      {!data && (
        <div style={{
          marginTop: 12, padding: '8px 10px', borderRadius: 8,
          background: 'rgba(255,255,255,.03)', border: '1px solid var(--bdr)',
          fontSize: 11, color: 'var(--muted)', textAlign: 'center',
        }}>
          Još nisi započeo/la. <a href={`/skripte/${key}`} style={{color:meta.color,textDecoration:'none',fontWeight:600}}>Kreni →</a>
        </div>
      )}
    </div>
  )
}

function MetricRow({ label, value, unit = '', color, hint }) {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',marginBottom:4}}>
        <span style={{fontSize:11,color:'var(--muted)',fontWeight:500}}>{label}</span>
        <span style={{fontSize:12,fontWeight:700,color:'var(--text)'}}>
          {value}{unit}
          {hint && <span style={{fontSize:10,color:'var(--muted)',fontWeight:500,marginLeft:5}}>{hint}</span>}
        </span>
      </div>
      <div style={{height:4,borderRadius:99,background:'rgba(255,255,255,.06)',overflow:'hidden'}}>
        <div style={{
          height:'100%',
          width:`${Math.min(value,100)}%`,
          borderRadius:99,
          background:value > 0 ? `linear-gradient(90deg,${color},${color}cc)` : 'transparent',
          transition:'width .6s cubic-bezier(.16,1,.3,1)',
        }}/>
      </div>
    </div>
  )
}
