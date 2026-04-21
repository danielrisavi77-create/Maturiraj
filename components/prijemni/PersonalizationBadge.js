'use client'
import { useOnboarding } from '@/lib/prijemni/onboardingStore'
import { INTERES_OPTIONS, CITY_OPTIONS } from '@/lib/prijemni/personalize'

export default function PersonalizationBadge({ matchedCount, totalCount, onReset, onEdit, track }) {
  const { prefs, reset } = useOnboarding()

  if (!prefs.completed_at || prefs.skipped) return null
  if (matchedCount === totalCount) return null

  const interesiLabels = prefs.interesi.map(k => INTERES_OPTIONS.find(o => o.key === k)?.label).filter(Boolean)
  const cityLabel = prefs.city_preference !== 'svejedno'
    ? CITY_OPTIONS.find(o => o.value === prefs.city_preference)?.label
    : null

  const handleReset = () => {
    if (confirm('Prikazati sve fakultete bez personalizacije?')) {
      reset()
      onReset?.()
      track?.('personalization_reset')
    }
  }

  return (
    <div style={{
      display:'flex',alignItems:'center',gap:12,padding:'11px 14px',borderRadius:11,marginBottom:18,
      background:'linear-gradient(120deg,rgba(75,123,255,.06),rgba(124,92,252,.03))',
      border:'1px solid rgba(75,123,255,.22)',flexWrap:'wrap',
    }}>
      <span style={{fontSize:14}}>🎯</span>
      <div style={{flex:1,minWidth:200,fontSize:12,color:'var(--muted)',lineHeight:1.5}}>
        Prikazano <strong style={{color:'var(--blue)'}}>{matchedCount}</strong> od {totalCount} fakulteta na temelju tvojih preferenci
        {(interesiLabels.length > 0 || cityLabel) && (
          <span style={{display:'block',marginTop:3,fontSize:11,opacity:.85}}>
            {[cityLabel, ...interesiLabels].filter(Boolean).join(' • ')}
          </span>
        )}
      </div>
      <button onClick={handleReset} style={{
        padding:'5px 11px',borderRadius:8,fontSize:11,fontWeight:600,cursor:'pointer',
        background:'transparent',color:'var(--muted)',border:'1px solid var(--bdr)',fontFamily:'var(--fb)',whiteSpace:'nowrap',
      }}>
        Prikaži sve
      </button>
      {onEdit && (
        <button onClick={() => { onEdit(); track?.('personalization_edit_open') }} style={{
          padding:'5px 11px',borderRadius:8,fontSize:11,fontWeight:600,cursor:'pointer',
          background:'rgba(75,123,255,.08)',color:'var(--blue)',border:'1px solid rgba(75,123,255,.25)',fontFamily:'var(--fb)',whiteSpace:'nowrap',
        }}>
          ✎ Uredi
        </button>
      )}
    </div>
  )
}
