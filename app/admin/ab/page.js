'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key)
}

const supabase = getSupabase()

function chiSquare(a_conv, a_total, b_conv, b_total) {
  if (a_total === 0 || b_total === 0) return null
  const total_conv = a_conv + b_conv
  const total = a_total + b_total
  if (total_conv === 0) return null
  const exp_a = (total_conv / total) * a_total
  const exp_b = (total_conv / total) * b_total
  if (exp_a === 0 || exp_b === 0) return null
  return Math.pow(a_conv - exp_a, 2) / exp_a +
         Math.pow(b_conv - exp_b, 2) / exp_b
}

function estimateNeededConversions(a_conv, a_total, b_conv, b_total) {
  const p_a = a_total > 0 ? a_conv / a_total : 0
  const p_b = b_total > 0 ? b_conv / b_total : 0
  const p_bar = (a_conv + b_conv) / Math.max(a_total + b_total, 1)
  const diff = Math.abs(p_a - p_b)
  if (diff < 0.001 || p_bar === 0 || p_bar === 1) return 100
  const n = Math.ceil(3.84 * 2 * p_bar * (1 - p_bar) / (diff * diff))
  return Math.min(Math.max(n, 30), 1000)
}

function significanceBadge(chi2, winnerVariant, a_conv, a_total, b_conv, b_total) {
  if (chi2 === null) {
    return { label: '🔄 Premalo podataka — čekaj na ~50 konverzija po varijanti', color: 'var(--muted)', bg: 'rgba(255,255,255,.04)', border: 'var(--bdr)' }
  }
  const needed = estimateNeededConversions(a_conv, a_total, b_conv, b_total)
  const w = winnerVariant.toUpperCase()
  if (chi2 >= 10.83) return { label: `⚡ Statistički značajno — variant ${w} wins (p < 0.001)`, color: '#3ecf6e', bg: 'rgba(62,207,110,.1)', border: 'rgba(62,207,110,.25)' }
  if (chi2 >= 6.63)  return { label: `⚡ Statistički značajno — variant ${w} wins (p < 0.01)`,  color: '#3ecf6e', bg: 'rgba(62,207,110,.08)', border: 'rgba(62,207,110,.2)' }
  if (chi2 >= 3.84)  return { label: `⚡ Statistički značajno — variant ${w} wins (p < 0.05)`,  color: '#e9b446', bg: 'rgba(233,180,70,.1)', border: 'rgba(233,180,70,.25)' }
  return { label: `🔄 Još nije dovoljno podataka — čekaj na ~${needed} konverzija po varijanti`, color: 'var(--muted)', bg: 'rgba(255,255,255,.04)', border: 'var(--bdr)' }
}

export default function ABDashboard() {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(null)
  const [experiments, setExperiments] = useState([])
  const [selectedExp, setSelectedExp] = useState(null)
  const [conversions, setConversions] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!supabase) { setAuthorized(false); return }
    ;(async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { router.replace('/login'); return }
      const { data: profile } = await supabase.from('profiles').select('role').eq('id', session.user.id).single()
      if (profile?.role !== 'admin') { setAuthorized(false); return }
      setAuthorized(true)

      const { data: exps } = await supabase
        .from('ab_experiments')
        .select(`*, assignments:ab_assignments(variant)`)
        .order('created_at', { ascending: false })
      setExperiments(exps || [])
    })()
  }, [router])

  useEffect(() => {
    if (!selectedExp || !supabase) { setConversions([]); return }
    setLoading(true)

    supabase
      .from('analytics_events')
      .select('meta, created_at')
      .eq('event_name', 'ab_conversion')
      .contains('meta', { experiment: selectedExp.id })
      .order('created_at', { ascending: false })
      .limit(500)
      .then(({ data }) => {
        setConversions(data || [])
        setLoading(false)
      })
  }, [selectedExp])

  if (authorized === null) return <div style={{padding:40,color:'var(--muted)'}}>Provjera...</div>
  if (!authorized) return <div style={{padding:40,textAlign:'center'}}>🔒 Nemaš pristup.</div>

  return (
    <div style={{minHeight:'100vh',background:'var(--bg)',padding:'28px 24px',color:'var(--text)',fontFamily:'var(--fb)'}}>
      <div style={{maxWidth:1200,margin:'0 auto'}}>
        <div style={{marginBottom:24}}>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--muted)',marginBottom:6}}>Admin</div>
          <h1 style={{fontFamily:'var(--fh)',fontSize:28,fontWeight:800,letterSpacing:'-.02em'}}>
            A/B Experiments
          </h1>
          <p style={{fontSize:13,color:'var(--muted)',marginTop:6}}>Prati eksperimente i uzimaj podatke-based odluke.</p>
        </div>
        <div style={{padding:40,color:'var(--muted)',fontSize:13}}>
          Otvori ovu stranicu u browseru — lista eksperimenata učitava se nakon prijave.
        </div>
      </div>
    </div>
  )
}
