'use client'
import { useState, useEffect, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/lib/hooks/useAuth'
import DailyLogWidget from './components/DailyLogWidget'
import AdaptiveToastContainer from './components/AdaptiveToast'
import { analyzeplan, applyAdaptiveChanges } from '@/lib/hooks/useAdaptivePlan'
import { MATURA_DATE, getGreeting, daysUntil, progressColor, card } from '@/lib/dashboard/helpers'
import ProBlur from '@/components/dashboard/ProBlur'

/* ─── New layout helpers ───────────────────────────────────── */
function dayName(dateStr) {
  return ['Ned','Pon','Uto','Sri','Čet','Pet','Sub'][new Date(dateStr).getDay()]
}
function dayNum(dateStr) {
  return new Date(dateStr).getDate()
}
function monthName(dateStr) {
  return new Date(dateStr).toLocaleDateString('hr-HR', { month: 'short' }).toUpperCase()
}
function getNext30Days() {
  const days = []
  const today = new Date(); today.setHours(0, 0, 0, 0)
  for (let i = 0; i < 30; i++) {
    const d = new Date(today); d.setDate(today.getDate() + i)
    days.push(d.toISOString().split('T')[0])
  }
  return days
}
const SAVJETI = [
  'Ne učiš više od 90 min bez pauze. Nakon zadataka, odmori oči 10 min — mozak pamti tek kad miruje.',
  'Aktivan opoziv je učinkovitiji od ponovnog čitanja. Zatvori bilježnicu i pokušaj reproducirati gradivo.',
  'Pomodoro tehnika: 25 min fokusa + 5 min pauze. Nakon 4 ciklusa, dulja pauza od 20 min.',
  'Jutarnji sati su zlatni za teško gradivo. Rezerviraj lagane stvari za popodne.',
  'Objasni koncept naglas kao da ga predaješ — Feynmanova tehnika učenja.',
  'Spavanje učvršćuje pamćenje. Noć pred ispit ne uči do kasno — tijelo treba odmor.',
]

/* ─── Helpers ──────────────────────────────────── */
function weeksUntil(date) {
  return Math.ceil(daysUntil(date) / 7)
}

function formatDate(str) {
  if (!str) return ''
  return new Date(str).toLocaleDateString('hr-HR', { day: 'numeric', month: 'short' })
}

/* ─── Heatmap helpers ──────────────────────────── */
function getLast12Weeks() {
  const weeks = []
  const today = new Date()
  for (let w = 11; w >= 0; w--) {
    const days = []
    for (let d = 0; d < 7; d++) {
      const date = new Date(today)
      date.setDate(today.getDate() - w * 7 - (6 - d))
      days.push(date.toISOString().split('T')[0])
    }
    weeks.push(days)
  }
  return weeks
}

function heatColor(hours) {
  if (!hours || hours === 0) return 'rgba(255,255,255,.04)'
  if (hours < 1)  return 'rgba(75,123,255,.2)'
  if (hours < 2)  return 'rgba(75,123,255,.45)'
  if (hours < 4)  return 'rgba(75,123,255,.72)'
  return 'rgba(75,123,255,1)'
}

export default function DashboardPage() {
  const router   = useRouter()
  const { user, isPro, loading: authLoading } = useAuth()
  const supabase = createClient()

  // PRO status iz useAuth hooka
  const hasPro = isPro

  const [plan,        setPlan]        = useState(null)
  const [weeks,       setWeeks]       = useState([])
  const [progressLog, setProgressLog] = useState([])
  const [loading,     setLoading]     = useState(true)
  const [activeTab,   setActiveTab]   = useState('tjedni')  // 'tjedni' | 'predmeti' | 'heatmapa'
  const [selectedDay,  setSelectedDay]  = useState(null)
  const [togglingId,  setTogglingId]  = useState(null)
  const [toasts,      setToasts]      = useState([])
  const [showResetModal, setShowResetModal] = useState(false)
  const addToast = useCallback((message, level = 'info', changes = []) => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, level, changes }])
  }, [])

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  /* ─── Auth guard ───────────────────────────────── */
  useEffect(() => {
    if (!authLoading && !user) router.push('/prijava?redirect=/plan-ucenja/dashboard')
  }, [user, authLoading])

  /* ─── Fetch plan + weeks + progress ───────────── */
  useEffect(() => {
    if (!user) return
    const load = async () => {
      setLoading(true)

      // Aktivni plan
      const { data: planData } = await supabase
        .from('study_plans')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single()

      if (!planData) { setLoading(false); return }
      setPlan(planData)

      // Tjedni rasporeda
      const { data: weeksData } = await supabase
        .from('plan_weeks')
        .select('*')
        .eq('plan_id', planData.id)
        .order('week_num', { ascending: true })
      setWeeks(weeksData || [])

      // Progress log (zadnjih 90 dana)
      const from = new Date()
      from.setDate(from.getDate() - 90)
      const { data: logData } = await supabase
        .from('progress_log')
        .select('*')
        .eq('user_id', user.id)
        .gte('logged_date', from.toISOString().split('T')[0])
      setProgressLog(logData || [])

      setLoading(false)
    }
    load()
  }, [user])

  /* ─── Toggle week completed + adaptivna rekalkulacija ── */
  const toggleWeek = async (week) => {
    if (togglingId === week.id) return
    setTogglingId(week.id)

    const newCompleted = !week.completed
    const now          = new Date().toISOString()

    // Optimistički update
    setWeeks(prev => prev.map(w =>
      w.id === week.id
        ? { ...w, completed: newCompleted, completed_at: newCompleted ? now : null }
        : w
    ))

    await supabase
      .from('plan_weeks')
      .update({ completed: newCompleted, completed_at: newCompleted ? now : null })
      .eq('id', week.id)

    // Upiši u progress log
    if (newCompleted) {
      await supabase.from('progress_log').insert({
        user_id:     user.id,
        plan_id:     plan.id,
        week_id:     week.id,
        subject_id:  week.subject_id,
        logged_date: new Date().toISOString().split('T')[0],
        hours_spent: week.hours,
      })
    }

    // ── Adaptivna rekalkulacija (samo kad označavamo kao završeno) ──
    if (newCompleted && plan?.subjects?.length > 0) {
      // Dohvati svježe tjedne iz baze za točnu analizu
      const { data: freshWeeks } = await supabase
        .from('plan_weeks')
        .select('*')
        .eq('plan_id', plan.id)
        .order('week_num', { ascending: true })

      if (freshWeeks) {
        const updatedWeeks = freshWeeks.map(w =>
          w.id === week.id ? { ...w, completed: true, completed_at: now } : w
        )

        const analysis = analyzeplan(updatedWeeks, plan.subjects, plan.hours_per_week)

        // Prikaži upozorenja
        analysis.warnings.forEach(w => {
          addToast(w.message, w.level)
        })

        // Primijeni adaptivne promjene (remedijalni tjedni + prilagodba sati)
        const hasChanges = analysis.remedialsNeeded.length > 0 ||
          analysis.adjustedHours !== plan.hours_per_week

        if (hasChanges) {
          const changes = await applyAdaptiveChanges({
            planId:   plan.id,
            userId:   user.id,
            weeks:    updatedWeeks,
            analysis,
            subjects: plan.subjects,
          })

          if (changes.length > 0) {
            addToast('📅 Plan je prilagođen na temelju tvog napretka.', 'success', changes)
          }

          // Osvježi tjedne u state-u
          const { data: newWeeks } = await supabase
            .from('plan_weeks')
            .select('*')
            .eq('plan_id', plan.id)
            .order('week_num', { ascending: true })
          if (newWeeks) setWeeks(newWeeks)
        } else if (analysis.status === 'on_track') {
          addToast('✅ Odlično! Na si putu prema planu.', 'success')
        }
      }
    }

    setTogglingId(null)
  }

  /* ─── Reset plana ──────────────────────────────── */
  const [resetting, setResetting] = useState(false)
  const resetPlan = async () => {
    if (!plan) return
    setResetting(true)
    // Deaktiviraj plan
    await supabase
      .from('study_plans')
      .update({ is_active: false })
      .eq('id', plan.id)
    // Obriši tjedne
    await supabase
      .from('plan_weeks')
      .delete()
      .eq('plan_id', plan.id)
    // Obriši progress log za ovaj plan
    await supabase
      .from('progress_log')
      .delete()
      .eq('plan_id', plan.id)
    setResetting(false)
    setShowResetModal(false)
    router.push('/plan-ucenja')
  }
  const stats = useMemo(() => {
    if (!weeks.length) return null
    const total     = weeks.length
    const completed = weeks.filter(w => w.completed).length
    const pct       = Math.round((completed / total) * 100)

    // Sati po predmetu
    const bySubject = {}
    weeks.forEach(w => {
      if (!bySubject[w.subject_id]) bySubject[w.subject_id] = { name: w.subject_name, total: 0, done: 0, hours: 0, doneHours: 0 }
      bySubject[w.subject_id].total++
      bySubject[w.subject_id].hours += w.hours
      if (w.completed) {
        bySubject[w.subject_id].done++
        bySubject[w.subject_id].doneHours += w.hours
      }
    })

    // Predviđanje: ako nastavimo ovim tempom
    const daysElapsed = plan
      ? Math.max(1, Math.ceil((new Date() - new Date(plan.created_at)) / (1000 * 60 * 60 * 24)))
      : 1
    const ratePerDay     = completed / daysElapsed
    const daysLeft       = daysUntil(MATURA_DATE)
    const projectedTotal = completed + ratePerDay * daysLeft
    const projectedPct   = Math.min(100, Math.round((projectedTotal / total) * 100))

    // Streak: koliko dana za redom ima progress log
    const logDates = new Set(progressLog.map(l => l.logged_date))
    let streak = 0
    const d = new Date()
    while (logDates.has(d.toISOString().split('T')[0])) {
      streak++
      d.setDate(d.getDate() - 1)
    }

    return { total, completed, pct, bySubject, projectedPct, streak, daysLeft }
  }, [weeks, progressLog, plan])

  /* ─── New user detection ───────────────────────── */
  // Novi korisnik = nema dnevnih logova I nema označenih tjedana
  const isNewUser = !loading && progressLog.length === 0 && (stats?.completed || 0) === 0
  const [onboardingDismissed, setOnboardingDismissed] = useState(false)
  // Automatski dismiss onboardinga kad korisnik označi prvi tjedan ili upiše sate
  const showOnboarding = isNewUser && !onboardingDismissed

  /* ─── Calendar helpers ─────────────────────────── */
  const next30 = useMemo(() => getNext30Days(), [])
  const today  = new Date().toISOString().split('T')[0]

  const dayWeekMap = useMemo(() => {
    const map = {}
    if (!weeks.length) return map
    weeks.forEach((w, i) => { if (i < next30.length) map[next30[i]] = w })
    return map
  }, [weeks, next30])

  const todayWeek = dayWeekMap[today]

  /* ─── Weak subjects (least completed %) ───────── */
  const weakSubjects = useMemo(() => {
    if (!weeks.length || !plan?.subjects) return []
    const bySubj = {}
    weeks.forEach(w => {
      if (!bySubj[w.subject_id]) bySubj[w.subject_id] = { name: w.subject_name, total: 0, done: 0 }
      bySubj[w.subject_id].total++
      if (w.completed) bySubj[w.subject_id].done++
    })
    return Object.entries(bySubj)
      .map(([id, s]) => ({ ...s, id, pct: Math.round((s.done / s.total) * 100) }))
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3)
  }, [weeks, plan])

  /* ─── Next milestone ───────────────────────────── */
  const nextMilestone = useMemo(() => {
    if (!weeks.length) return null
    const examWeek = weeks.find(w => !w.completed && (w.topic?.toLowerCase().includes('simulacija') || w.topic?.toLowerCase().includes('ispit')))
    return examWeek || weeks.filter(w => !w.completed).slice(-1)[0]
  }, [weeks])

  /* ─── Savjet za danas (deterministic) ─────────── */
  const savjet = useMemo(() => {
    const doy = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
    return SAVJETI[doy % SAVJETI.length]
  }, [])

  /* ─── Heatmap data ─────────────────────────────── */
  const heatmapWeeks = useMemo(() => getLast12Weeks(), [])
  const heatmapData  = useMemo(() => {
    const map = {}
    progressLog.forEach(l => {
      map[l.logged_date] = (map[l.logged_date] || 0) + Number(l.hours_spent)
    })
    return map
  }, [progressLog])

  /* ─── Colours from plan subjects ──────────────── */
  const subjectColors = useMemo(() => {
    if (!plan?.subjects) return {}
    const map = {}
    plan.subjects.forEach(s => { map[s.id] = s.color || 'var(--blue)' })
    return map
  }, [plan])

  /* ─── Current + upcoming weeks ────────────────── */
  const currentWeekNum = useMemo(() => {
    if (!plan) return 1
    const elapsed = Math.ceil((new Date() - new Date(plan.created_at)) / (1000 * 60 * 60 * 24 * 7))
    return Math.max(1, elapsed)
  }, [plan])

  const upcomingWeeks  = useMemo(() =>
    weeks.filter(w => !w.completed).slice(0, 8),
    [weeks]
  )
  const completedWeeks = useMemo(() =>
    weeks.filter(w => w.completed),
    [weeks]
  )

  /* ─── Loading / empty states ───────────────────── */
  if (authLoading || loading) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '3px solid rgba(75,123,255,.2)', borderTopColor: 'var(--blue)', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
        <div style={{ fontSize: 14, color: 'var(--muted)' }}>Učitavam tvoj plan...</div>
      </div>
    </div>
  )

  if (!plan) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ ...card, padding: '48px 40px', textAlign: 'center', maxWidth: 440 }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>📋</div>
        <div style={{ fontFamily: 'var(--fh)', fontSize: 26, fontWeight: 900, marginBottom: 10 }}>Nemaš aktivan plan</div>
        <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28 }}>
          Kreiraš plan u čarobnjaku — odabereš predmete, tempo i generiraš raspored.
        </div>
        <button onClick={() => router.push('/plan-ucenja')}
          style={{
            padding: '13px 28px', borderRadius: 14, border: 'none',
            background: 'linear-gradient(135deg, var(--blue), var(--violet))',
            color: '#fff', fontSize: 14, fontWeight: 800,
            cursor: 'pointer', fontFamily: 'var(--fb)',
            boxShadow: '0 8px 24px rgba(75,123,255,.3)',
          }}>
          Kreiraj plan učenja →
        </button>
      </div>
    </div>
  )

  const danaDoMature   = daysUntil(MATURA_DATE)
  const tjednaDoMature = weeksUntil(MATURA_DATE)
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || 'Maturante'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', display: 'flex', fontFamily: 'var(--fb)' }}>

      {/* ══ SIDEBAR ══ */}
      <div style={{
        width: 210, flexShrink: 0,
        background: 'rgba(7,9,15,.95)',
        borderRight: '1px solid rgba(255,255,255,.06)',
        display: 'flex', flexDirection: 'column',
        position: 'fixed', top: 58, left: 0, bottom: 0, zIndex: 200,
      }}>
        {/* Ambient orb behind sidebar */}
        <div style={{ position: 'absolute', bottom: '-20%', left: '-30%', width: 260, height: 260, borderRadius: '50%', background: 'radial-gradient(circle,rgba(75,123,255,.08),transparent 65%)', pointerEvents: 'none', animation: 'orb-b 22s ease-in-out infinite' }} />

        {/* Logo */}
        <div style={{ padding: '20px 16px 16px', borderBottom: '1px solid rgba(255,255,255,.06)', position: 'relative', zIndex: 1 }}>
          <div onClick={() => router.push('/')} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', marginBottom: 14 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--blue)', boxShadow: '0 0 10px var(--blue)', flexShrink: 0, animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'var(--fh)', fontSize: 17, fontWeight: 900, letterSpacing: '-.03em' }}>maturiraj.hr</span>
          </div>
          {/* Active subject chip */}
          {plan?.subjects?.[0] && (
            <div style={{ padding: '8px 10px', borderRadius: 10, background: `${plan.subjects[0].color}18`, border: `1px solid ${plan.subjects[0].color}33` }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.08em', textTransform: 'uppercase', color: plan.subjects[0].color, marginBottom: 2 }}>Aktivan predmet</div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{plan.subjects[0].name}</div>
              {plan.subjects[0].razina && <div style={{ fontSize: 10, color: 'var(--muted)' }}>razina {plan.subjects[0].razina}</div>}
            </div>
          )}
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 2, position: 'relative', zIndex: 1 }}>
          {[
            { key: 'danas',    icon: '⊙',  label: 'Danas' },
            { key: 'tjedni',   icon: '▦',  label: 'Plan učenja' },
            { key: 'predmeti', icon: '📊', label: 'Predmeti' },
            { key: 'heatmapa', icon: '🔥', label: 'Aktivnost' },
            { key: 'discere',  icon: '⭐', label: 'Discere' },
            { key: 'ai',       icon: '✦',  label: 'AI Profesor', badge: hasPro ? null : '2/3' },
            { key: 'kalk',     icon: '⊞',  label: 'Kalkulator' },
          ].map(item => (
            <button key={item.key} onClick={() => {
              if (item.key === 'ai')      router.push('/ai-profesor')
              else if (item.key === 'kalk')    router.push('/kalkulator')
              else if (item.key === 'discere') router.push('/discere')
              else setActiveTab(item.key)
            }} style={{
              display: 'flex', alignItems: 'center', gap: 9,
              padding: '8px 10px', borderRadius: 8, border: 'none',
              background: activeTab === item.key ? 'rgba(75,123,255,.12)' : 'transparent',
              color: activeTab === item.key ? 'var(--blue)' : 'var(--muted)',
              fontSize: 13, fontWeight: activeTab === item.key ? 700 : 400,
              cursor: 'pointer', textAlign: 'left', width: '100%', transition: 'all .15s',
            }}>
              <span style={{ fontSize: 14, width: 16, textAlign: 'center', opacity: .8 }}>{item.icon}</span>
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.badge && <span style={{ fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 999, background: 'rgba(75,123,255,.15)', color: 'var(--blue)', border: '1px solid rgba(75,123,255,.25)' }}>{item.badge}</span>}
            </button>
          ))}
        </nav>

        {/* PRO upsell */}
        {!hasPro && (
          <div style={{ margin: '0 10px 12px', padding: '12px', borderRadius: 10, background: 'linear-gradient(135deg,rgba(75,123,255,.12),rgba(124,92,252,.08))', border: '1px solid rgba(75,123,255,.2)', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 5 }}>Otključaj sve</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 10 }}>Neograničen AI, cijeli Discere i personalizirani plan.</div>
            <button onClick={() => router.push('/pro')} style={{ width: '100%', padding: '8px', borderRadius: 8, border: 'none', background: 'var(--green)', color: '#0f1a15', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' }}>
              Pro · 9,99 €/mj
            </button>
          </div>
        )}

        {/* Reset link */}
        <div onClick={() => setShowResetModal(true)} style={{ padding: '10px 14px', borderBottom: '0', borderTop: '1px solid rgba(255,255,255,.06)', fontSize: 12, color: '#f87171', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 7, opacity: .6, transition: 'opacity .15s', position: 'relative', zIndex: 1 }}
          onMouseEnter={e => e.currentTarget.style.opacity = '1'}
          onMouseLeave={e => e.currentTarget.style.opacity = '.6'}
        >
          <span>↺</span> Resetiraj plan
        </div>
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div style={{ marginLeft: 210, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', paddingTop: 58 }}>
        {/* Ambient orbs */}
        <div style={{ position: 'fixed', top: '-15%', right: '-10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(75,123,255,.08),transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0, animation: 'orb-b 18s ease-in-out infinite' }} />

        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* ── Header ── */}
          <div style={{ padding: '28px 28px 0', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Plan učenja</div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 30, fontWeight: 900, lineHeight: 1.1, marginBottom: 4, letterSpacing: '-.03em' }}>
                {getGreeting()}, {firstName}.
              </div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 400, color: 'var(--muted)', fontStyle: 'italic' }}>
                Još {danaDoMature} dana. Idemo redom.
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8, paddingTop: 4 }}>
              <button onClick={() => router.push('/plan-ucenja')} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: 'var(--muted)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'var(--fb)', transition: 'all .15s' }}>
                <span style={{ fontSize: 12 }}>↺</span> Regeneriraj
              </button>
              <button onClick={() => router.push('/ai-profesor')} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 16px', borderRadius: 10, border: 'none', background: 'linear-gradient(135deg,var(--blue),var(--violet))', color: '#fff', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)', boxShadow: '0 4px 14px rgba(75,123,255,.3)' }}>
                <span>✦</span> AI Profesor
              </button>
            </div>
          </div>

          {/* ── Top stat row ── */}
          <div style={{ padding: '20px 28px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10 }} className="dashboard-stat-grid">
            {/* Countdown */}
            <div style={{ ...card, padding: '16px 18px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 70, height: 70, borderRadius: '50%', background: 'rgba(248,113,113,.1)', filter: 'blur(20px)', pointerEvents: 'none' }} />
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Do mature</div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 34, fontWeight: 900, color: danaDoMature < 30 ? '#f87171' : danaDoMature < 60 ? 'var(--gold)' : 'var(--text)', lineHeight: 1, marginBottom: 3 }}>{danaDoMature}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>{danaDoMature === 1 ? 'dan' : 'dana'} · {tjednaDoMature} tj.</div>
              {danaDoMature <= 30 && <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 999, background: 'rgba(240,92,92,.12)', border: '1px solid rgba(240,92,92,.25)', fontSize: 10, fontWeight: 700, color: '#f87171' }}>⚡ urgent mode</div>}
              <div style={{ marginTop: 10, height: 2, borderRadius: 99, background: 'rgba(255,255,255,.06)' }}>
                <div style={{ height: '100%', borderRadius: 99, width: `${Math.round((1 - danaDoMature / 365) * 100)}%`, background: 'linear-gradient(90deg,#f87171,#fb923c)' }} />
              </div>
            </div>

            {/* Napredak */}
            <div style={{ ...card, padding: '16px 18px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, width: 70, height: 70, borderRadius: '50%', background: 'rgba(75,123,255,.1)', filter: 'blur(20px)', pointerEvents: 'none' }} />
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Napredak</div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 34, fontWeight: 900, color: isNewUser ? 'var(--muted)' : progressColor(stats?.pct || 0), lineHeight: 1, marginBottom: 3 }}>{isNewUser ? '—' : `${stats?.pct || 0}%`}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>{isNewUser ? 'Označi prvi tjedan →' : `${stats?.completed || 0}/${stats?.total || 0} tjedana`}</div>
              <div style={{ marginTop: 10, height: 2, borderRadius: 99, background: 'rgba(255,255,255,.06)' }}>
                <div style={{ height: '100%', borderRadius: 99, width: `${stats?.pct || 0}%`, background: 'linear-gradient(90deg,var(--blue),var(--violet))', transition: 'width .6s cubic-bezier(.16,1,.3,1)' }} />
              </div>
            </div>

            {/* Streak */}
            <div style={{ ...card, padding: hasPro ? '16px 18px' : 0, position: 'relative', overflow: 'hidden' }}>
              {hasPro ? (
                <>
                  <div style={{ position: 'absolute', top: -20, right: -20, width: 70, height: 70, borderRadius: '50%', background: 'rgba(251,191,36,.08)', filter: 'blur(20px)', pointerEvents: 'none' }} />
                  <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Streak 🔥</div>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 34, fontWeight: 900, color: stats?.streak > 0 ? 'var(--gold)' : 'var(--muted)', lineHeight: 1, marginBottom: 3 }}>{isNewUser ? '—' : stats?.streak || 0}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>{stats?.streak === 0 ? 'Nema streaka' : 'dana za redom'}</div>
                </>
              ) : (
                <ProBlur onUpgrade={() => router.push('/pro')} label="Streak" compact>
                  <div style={{ padding: '16px 18px' }}>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Streak 🔥</div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 34, fontWeight: 900, color: 'var(--gold)', lineHeight: 1, marginBottom: 3 }}>7</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>dana za redom</div>
                  </div>
                </ProBlur>
              )}
            </div>

            {/* Predviđanje */}
            <div style={{ ...card, padding: hasPro ? '16px 18px' : 0, position: 'relative', overflow: 'hidden' }}>
              {hasPro ? (
                <>
                  <div style={{ position: 'absolute', top: -20, right: -20, width: 70, height: 70, borderRadius: '50%', background: 'rgba(62,207,110,.08)', filter: 'blur(20px)', pointerEvents: 'none' }} />
                  <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Predviđanje</div>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 34, fontWeight: 900, color: isNewUser ? 'var(--muted)' : progressColor(stats?.projectedPct || 0), lineHeight: 1, marginBottom: 3 }}>{isNewUser ? '—' : `${stats?.projectedPct || 0}%`}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', fontWeight: 600 }}>{isNewUser ? 'Dostupno nakon unosa' : 'završeno do mature'}</div>
                  {!isNewUser && stats?.projectedPct < 80 && <div style={{ marginTop: 6, fontSize: 11, color: 'var(--gold)', fontWeight: 700 }}>⚠️ Povećaj tempo</div>}
                </>
              ) : (
                <ProBlur onUpgrade={() => router.push('/pro')} label="Predviđanje" compact>
                  <div style={{ padding: '16px 18px' }}>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>Predviđanje</div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 34, fontWeight: 900, color: 'var(--green)', lineHeight: 1, marginBottom: 3 }}>84%</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>završeno do mature</div>
                  </div>
                </ProBlur>
              )}
            </div>
          </div>

          {/* ── Onboarding banner ── */}
          {showOnboarding && (
            <div style={{ margin: '0 28px 20px', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(75,123,255,.25)', background: 'linear-gradient(135deg,rgba(75,123,255,.1),rgba(124,92,252,.06))', animation: 'up .5s cubic-bezier(.16,1,.3,1)' }}>
              <div style={{ height: 2, background: 'linear-gradient(90deg,var(--blue),var(--violet))' }} />
              <div style={{ padding: '20px 22px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 5 }}>Dobrodošao! 🎉</div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 900, lineHeight: 1.1, marginBottom: 5 }}>{firstName}, plan je aktivan!</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>Evo 3 koraka za dobar početak:</div>
                  </div>
                  <button onClick={() => setOnboardingDismissed(true)} style={{ width: 26, height: 26, borderRadius: 7, border: '1px solid rgba(255,255,255,.1)', background: 'rgba(255,255,255,.05)', color: 'var(--muted)', fontSize: 14, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 8 }}>
                  {[
                    { num:'1', icon:'✅', title:'Označi prvi tjedan', desc:'Klikni checkbox kad završiš gradivo.', color:'var(--green)', rgb:'62,207,110', action:()=>setActiveTab('tjedni'), cta:'Idi na raspored →' },
                    { num:'2', icon:'⏱',  title:'Upiši prve sate',   desc:'Evidentiraj koliko si danas učio.', color:'var(--blue)', rgb:'75,123,255', action:()=>document.getElementById('daily-log-anchor')?.scrollIntoView({behavior:'smooth'}), cta:'Upiši sate →' },
                    { num:'3', icon:'📊', title:'Prati napredak',     desc:'Heatmapa i predviđanje rade nakon prvih unosa.', color:'var(--violet)', rgb:'124,92,252', action:()=>setActiveTab('heatmapa'), cta:'Pogledaj aktivnost →' },
                  ].map(step => (
                    <div key={step.num} onClick={step.action} style={{ padding: '12px 14px', borderRadius: 14, cursor: 'pointer', background: `rgba(${step.rgb},.06)`, border: `1px solid rgba(${step.rgb},.18)`, transition: 'all .18s' }}
                      onMouseEnter={e => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=`0 8px 24px rgba(${step.rgb},.14)` }}
                      onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 6 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 9, background: `rgba(${step.rgb},.15)`, border: `1px solid rgba(${step.rgb},.25)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{step.icon}</div>
                        <div style={{ fontSize: 13, fontWeight: 800 }}>{step.title}</div>
                      </div>
                      <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 8 }}>{step.desc}</div>
                      <div style={{ fontSize: 11, fontWeight: 800, color: step.color }}>{step.cta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════════ TAB CONTENT ════════ */}

          {/* ─── Danas / Tjedni: Calendar + Sidebar layout ─── */}
          {(activeTab === 'danas' || activeTab === 'tjedni') && (
            <div style={{ padding: '0 28px', display: 'grid', gridTemplateColumns: '1fr 270px', gap: 14, flex: 1 }} className="dashboard-main-grid">

              {/* Calendar section */}
              <div>
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 900 }}>Tvojih {next30.length} dana</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Svaki kvadrat je dan. Klikni za detalje.</div>
                  </div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    {[{ color:'var(--green)', label:'odrađeno' }, { color:'var(--blue)', label:'u tijeku' }, { color:'rgba(255,255,255,.06)', label:'buduće' }, { color:'#f87171', label:'ispit' }].map(l => (
                      <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, color: 'var(--muted)' }}>
                        <div style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />{l.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Day grid — 5 rows × 6 cols */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {[0,1,2,3,4].map(weekIdx => {
                    const weekDays = next30.slice(weekIdx * 6, weekIdx * 6 + 6)
                    if (!weekDays.length) return null
                    return (
                      <div key={weekIdx} style={{ display: 'grid', gridTemplateColumns: 'auto repeat(6,1fr)', gap: 6, alignItems: 'center' }}>
                        <div style={{ fontSize: 9, fontWeight: 700, color: 'var(--muted)', width: 28, textAlign: 'right', paddingRight: 6 }}>TJ{weekIdx+1}</div>
                        {weekDays.map(date => {
                          const w = dayWeekMap[date]
                          const isToday    = date === today
                          const isSelected = date === selectedDay
                          const color      = w ? (subjectColors[w.subject_id] || 'var(--blue)') : 'rgba(255,255,255,.12)'
                          const isExam     = w?.topic?.toLowerCase().includes('simulacija') || w?.topic?.toLowerCase().includes('ispit')
                          let bg = 'rgba(255,255,255,.025)'
                          if (w?.completed) bg = 'rgba(62,207,110,.14)'
                          else if (isExam)  bg = 'rgba(248,113,113,.08)'
                          else if (isToday) bg = `${subjectColors[w?.subject_id] || 'rgba(75,123,255,1)'}14`
                          return (
                            <div key={date} onClick={() => setSelectedDay(isSelected ? null : date)} style={{
                              padding: '8px 10px', borderRadius: 12, cursor: 'pointer',
                              background: bg,
                              border: isSelected ? `1px solid ${color}` : isToday ? `1px solid ${color}66` : isExam ? '1px solid rgba(248,113,113,.3)' : '1px solid rgba(255,255,255,.06)',
                              transition: 'all .15s', position: 'relative', minHeight: 72,
                              boxShadow: isSelected ? `0 4px 16px ${color}22` : 'none',
                            }}
                              onMouseEnter={e => { if (!isSelected) e.currentTarget.style.borderColor = color+'55' }}
                              onMouseLeave={e => { if (!isSelected) e.currentTarget.style.borderColor = isToday ? color+'66' : '#1e2440' }}
                            >
                              {isToday && <div style={{ position: 'absolute', top: 5, right: 5, fontSize: 8, fontWeight: 800, padding: '1px 5px', borderRadius: 999, background: subjectColors[w?.subject_id] || 'var(--blue)', color: '#fff' }}>danas</div>}
                              {isExam && !isToday && <div style={{ position: 'absolute', top: 5, right: 5, fontSize: 8, fontWeight: 800, padding: '1px 5px', borderRadius: 999, background: '#f87171', color: '#fff' }}>ispit</div>}
                              <div style={{ fontSize: 9, fontWeight: 600, color: 'var(--muted)', marginBottom: 2 }}>{dayName(date)}</div>
                              <div style={{ fontFamily: 'var(--fh)', fontSize: 17, fontWeight: 700, color: w?.completed ? 'var(--green)' : 'var(--text)', lineHeight: 1, marginBottom: 4 }}>{dayNum(date)}.</div>
                              {w ? (
                                <>
                                  <div style={{ fontSize: 10, color: w.completed ? 'var(--green)' : color, fontWeight: 600, lineHeight: 1.3, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                    {w.subject_name || w.topic?.split('—')?.[0]?.trim()}
                                  </div>
                                  <div style={{ marginTop: 5, height: 2, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: w.completed ? '100%' : isToday ? '40%' : '0%', background: w.completed ? 'var(--green)' : color, borderRadius: 99 }} />
                                  </div>
                                </>
                              ) : (
                                <div style={{ fontSize: 10, color: 'rgba(255,255,255,.2)' }}>odmor</div>
                              )}
                            </div>
                          )
                        })}
                        {weekDays.length < 6 && Array.from({ length: 6 - weekDays.length }).map((_, i) => (
                          <div key={`empty-${i}`} style={{ minHeight: 72, borderRadius: 12, background: 'transparent', border: '1px solid transparent' }} />
                        ))}
                      </div>
                    )
                  })}
                </div>

                {/* Schedule list below calendar — upcoming weeks */}
                <div style={{ marginTop: 18 }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 700, marginBottom: 10 }}>Sljedećih {Math.min(upcomingWeeks.length, 4)} tjedana</div>
                  {upcomingWeeks.length === 0 ? (
                    <div style={{ ...card, padding: '28px 20px', textAlign: 'center', color: 'var(--muted)' }}>
                      <div style={{ fontSize: 28, marginBottom: 8 }}>🎉</div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>Sve tjedne si završio!</div>
                      <div style={{ fontSize: 12 }}>Izniman rad. Plan je kompletiran.</div>
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {upcomingWeeks.slice(0, 4).map((w, i) => {
                        const color = subjectColors[w.subject_id] || 'var(--blue)'
                        const isNext = i === 0
                        return (
                          <div key={w.id} style={{ borderRadius: 14, border: isNext ? `1px solid ${color}44` : '1px solid rgba(255,255,255,.06)', background: isNext ? `linear-gradient(135deg,${color}0e,rgba(255,255,255,.015))` : 'rgba(255,255,255,.02)', display: 'flex', alignItems: 'stretch', overflow: 'hidden', boxShadow: isNext ? `0 8px 24px ${color}14` : 'none' }}>
                            <div style={{ width: 3, background: `linear-gradient(180deg,${color},${color}55)`, flexShrink: 0 }} />
                            <div style={{ flex: 1, padding: '12px 12px 12px 10px', display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${color}18`, border: `1px solid ${color}2a`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                <div style={{ fontSize: 13, fontWeight: 900, fontFamily: 'var(--fh)', color, lineHeight: 1 }}>{w.week_num}</div>
                                <div style={{ fontSize: 7, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.04em' }}>tj.</div>
                              </div>
                              <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2, flexWrap: 'wrap' }}>
                                  <span style={{ fontSize: 13, fontWeight: 800 }}>{w.subject_name}</span>
                                  <span style={{ fontSize: 10, fontWeight: 700, color, background: `${color}18`, border: `1px solid ${color}28`, borderRadius: 999, padding: '1px 6px' }}>{w.hours}h</span>
                                  {isNext && <span style={{ fontSize: 9, fontWeight: 800, color: 'var(--blue)', background: 'rgba(75,123,255,.1)', border: '1px solid rgba(75,123,255,.2)', borderRadius: 999, padding: '1px 6px' }}>Sljedeći</span>}
                                  {w.is_remedial && <span style={{ fontSize: 9, fontWeight: 800, color: 'var(--gold)', background: 'rgba(233,180,70,.1)', border: '1px solid rgba(233,180,70,.2)', borderRadius: 999, padding: '1px 6px' }}>Remedijalni</span>}
                                </div>
                                <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{w.topic}</div>
                              </div>
                              <button onClick={() => toggleWeek(w)} disabled={togglingId === w.id} style={{ width: 26, height: 26, borderRadius: 7, border: `1.5px solid ${w.completed ? color : 'rgba(255,255,255,.14)'}`, background: w.completed ? color : 'transparent', cursor: togglingId === w.id ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: w.completed ? '#000' : 'transparent', transition: 'all .2s', transform: togglingId === w.id ? 'scale(.88)' : 'scale(1)' }}>✓</button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}

                  {/* Completed */}
                  {completedWeeks.length > 0 && (
                    <div style={{ marginTop: 14 }}>
                      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Završeno ({completedWeeks.length})</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                        {completedWeeks.slice(-3).map(w => {
                          const color = subjectColors[w.subject_id] || 'var(--blue)'
                          return (
                            <div key={w.id} style={{ borderRadius: 12, padding: '8px 12px', background: 'rgba(62,207,110,.04)', border: '1px solid rgba(62,207,110,.1)', display: 'flex', alignItems: 'center', gap: 8, opacity: 0.7 }}>
                              <div style={{ width: 18, height: 18, borderRadius: 5, background: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: '#000', fontWeight: 900, flexShrink: 0 }}>✓</div>
                              <div style={{ flex: 1, fontSize: 12, fontWeight: 700, color: 'var(--muted)' }}>Tj. {w.week_num} · {w.subject_name} <span style={{ fontSize: 10, color: 'rgba(255,255,255,.2)', marginLeft: 6 }}>{formatDate(w.completed_at)}</span></div>
                              <button onClick={() => toggleWeek(w)} style={{ fontSize: 10, fontWeight: 700, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'var(--fb)' }}>poništi</button>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Right sidebar */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>

                {/* Next milestone */}
                {nextMilestone && (
                  <div style={{ ...card, padding: '16px' }}>
                    <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>SLJEDEĆI MILESTONE</div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 800, marginBottom: 5 }}>
                      {nextMilestone.topic?.includes('simulacija') ? 'Simulacija mature' : nextMilestone.subject_name}
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.55, marginBottom: 10 }}>
                      {nextMilestone.topic?.includes('simulacija')
                        ? `Pun test iz 2024. pod uvjetima. Za ${Math.max(0, nextMilestone.week_num - (stats?.completed || 0))} tj.`
                        : nextMilestone.topic}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ width: 7, height: 7, borderRadius: 2, background: 'var(--green)' }} />
                      <span style={{ fontSize: 11, color: 'var(--muted)' }}>Cilj: <span style={{ color: 'var(--green)', fontWeight: 700 }}>{stats?.projectedPct || 0}%+</span></span>
                    </div>
                  </div>
                )}

                {/* Slaba mjesta */}
                <div style={{ ...card, padding: '16px', position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Tvoja slaba mjesta</div>
                  {hasPro ? (
                    weakSubjects.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {weakSubjects.map(s => {
                          const color = subjectColors[s.id] || 'var(--blue)'
                          return (
                            <div key={s.name}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}>
                                <span>{s.name}</span>
                                <span style={{ color: s.pct < 40 ? '#f87171' : 'var(--muted)', fontWeight: 700 }}>{s.pct}%</span>
                              </div>
                              <div style={{ height: 3, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                                <div style={{ height: '100%', width: `${s.pct}%`, background: s.pct < 40 ? '#f87171' : s.pct < 60 ? 'var(--gold)' : 'var(--green)', borderRadius: 99 }} />
                              </div>
                            </div>
                          )
                        })}
                        <button onClick={() => router.push('/ai-profesor')} style={{ marginTop: 4, padding: '7px 12px', borderRadius: 8, border: 'none', background: 'transparent', color: 'var(--blue)', fontSize: 12, fontWeight: 600, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--fb)' }}>
                          Pitaj AI profesora →
                        </button>
                      </div>
                    ) : (
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>Označi tjedne da vidiš analizu.</div>
                    )
                  ) : (
                    <ProBlur onUpgrade={() => router.push('/pro')}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {[{ name: 'Integrali', pct: 42 }, { name: 'Vjerojatnost', pct: 51 }, { name: 'Kompleksni', pct: 58 }].map(s => (
                          <div key={s.name}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}><span>{s.name}</span><span style={{ color: '#f87171' }}>{s.pct}%</span></div>
                            <div style={{ height: 3, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}><div style={{ height: '100%', width: `${s.pct}%`, background: '#f87171', borderRadius: 99 }} /></div>
                          </div>
                        ))}
                      </div>
                    </ProBlur>
                  )}
                </div>

                {/* Plan details */}
                <div style={{ ...card, padding: '16px' }}>
                  <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Detalji plana</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {[
                      { label: 'Naziv',    val: plan.title },
                      { label: 'Kreiran',  val: formatDate(plan.created_at) },
                      { label: 'Tempo',    val: `${plan.hours_per_week}h/tjedan` },
                      { label: 'Tjedana',  val: weeks.length },
                    ].map(r => (
                      <div key={r.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
                        <span style={{ color: 'var(--muted)' }}>{r.label}</span>
                        <span style={{ fontWeight: 700 }}>{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Savjet */}
                <div style={{ ...card, padding: '14px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                    <span>⚙</span> SAVJET ZA DANAS
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.65 }}>{savjet}</div>
                </div>

                {/* Daily log widget */}
                <div id="daily-log-anchor" style={{ position: 'relative', borderRadius: 24, overflow: 'hidden' }}>
                  {hasPro ? (
                    <DailyLogWidget
                      userId={user.id} planId={plan.id} subjects={plan.subjects || []}
                      onLogged={({ subjectId, hours }) => {
                        const tod = new Date().toISOString().split('T')[0]
                        setProgressLog(prev => [...prev, { id:`temp-${Date.now()}`, user_id:user.id, plan_id:plan.id, subject_id:subjectId, logged_date:tod, hours_spent:hours }])
                      }}
                    />
                  ) : (
                    <ProBlur onUpgrade={() => router.push('/pro')} label="Dnevni log">
                      <div style={{ ...card, padding: '16px' }}>
                        <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Dnevni log</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {[1,2].map(i => <div key={i} style={{ height: 40, borderRadius: 10, background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.06)' }} />)}
                          <div style={{ height: 34, borderRadius: 9, background: 'rgba(75,123,255,.1)', border: '1px solid rgba(75,123,255,.15)' }} />
                        </div>
                      </div>
                    </ProBlur>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ─── TAB: Napredak po predmetima ─── */}
          {activeTab === 'predmeti' && (
            hasPro ? (
              <div style={{ padding: '0 28px 28px' }}>
                <div style={card}>
                  <div style={{ padding: '20px 22px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Analiza</div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 900 }}>Napredak po predmetima</div>
                  </div>
                  <div style={{ padding: '20px' }}>
                    {stats && Object.entries(stats.bySubject).length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {Object.entries(stats.bySubject).sort((a,b) => (b[1].done/b[1].total) - (a[1].done/a[1].total)).map(([id, subj]) => {
                          const pct   = Math.round((subj.done / subj.total) * 100)
                          const color = subjectColors[id] || 'var(--blue)'
                          return (
                            <div key={id}>
                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                  <div style={{ width: 32, height: 32, borderRadius: 9, background: `${color}18`, border: `1px solid ${color}2a`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color }}>
                                    {plan.subjects?.find(s => s.id === id)?.sym || '📚'}
                                  </div>
                                  <div>
                                    <div style={{ fontSize: 14, fontWeight: 800 }}>{subj.name}</div>
                                    <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1 }}>{subj.done}/{subj.total} tjedana · {subj.doneHours}h od {subj.hours}h</div>
                                  </div>
                                </div>
                                <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900, color: progressColor(pct) }}>{pct}%</div>
                              </div>
                              <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,.05)', overflow: 'hidden' }}>
                                <div style={{ height: '100%', borderRadius: 99, width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}aa)`, transition: 'width .6s cubic-bezier(.16,1,.3,1)', boxShadow: `0 0 8px ${color}60` }} />
                              </div>
                              <div style={{ marginTop: 6 }}>
                                {pct === 100 ? <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--green)' }}>✓ Završeno</span>
                                  : pct >= 70 ? <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue)' }}>Na dobrom putu</span>
                                  : pct >= 30 ? <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--gold)' }}>U tijeku</span>
                                  : <span style={{ fontSize: 11, fontWeight: 700, color: '#f87171' }}>Treba više pažnje</span>}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '40px 20px', color: 'var(--muted)' }}>
                        <div style={{ fontSize: 32, marginBottom: 10 }}>📊</div>
                        <div style={{ fontSize: 14 }}>Označi tjedne kao završene da vidiš analizu.</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: '0 28px 28px' }}>
                <ProBlur onUpgrade={() => router.push('/pro')} label="Analiza po predmetima">
                  <div style={card}>
                    <div style={{ padding: '20px 22px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                      <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 900 }}>Napredak po predmetima</div>
                    </div>
                    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                      {[70,45,88,30].map((pct,i) => (
                        <div key={i}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                            <div style={{ height: 14, width: 120, borderRadius: 6, background: 'rgba(255,255,255,.06)' }} />
                            <div style={{ fontSize: 18, fontWeight: 900, color: progressColor(pct) }}>{pct}%</div>
                          </div>
                          <div style={{ height: 8, borderRadius: 99, background: 'rgba(255,255,255,.05)', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${pct}%`, borderRadius: 99, background: 'linear-gradient(90deg,var(--blue),var(--violet))' }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ProBlur>
              </div>
            )
          )}

          {/* ─── TAB: Heatmapa ─── */}
          {activeTab === 'heatmapa' && (
            hasPro ? (
              <div style={{ padding: '0 28px 28px' }}>
                <div style={card}>
                  <div style={{ padding: '20px 22px', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Aktivnost</div>
                      <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 900 }}>Heatmapa učenja</div>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--muted)' }}>Zadnjih 12 tjedana</div>
                  </div>
                  <div style={{ padding: '24px' }}>
                    <div style={{ display: 'flex', gap: 4, marginBottom: 6, paddingLeft: 28 }}>
                      {['Pon','Uto','Sri','Čet','Pet','Sub','Ned'].map(d => (
                        <div key={d} style={{ flex: 1, fontSize: 9, fontWeight: 700, color: 'var(--muted)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '.04em' }}>{d}</div>
                      ))}
                    </div>
                    <div style={{ display: 'flex', gap: 4 }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginRight: 4 }}>
                        {heatmapWeeks.map((week, wi) => {
                          const firstDay = new Date(week[0])
                          const lbl = wi % 3 === 0 ? firstDay.toLocaleDateString('hr-HR', { day: 'numeric', month: 'short' }) : ''
                          return <div key={wi} style={{ height: 14, fontSize: 9, color: 'var(--muted)', fontWeight: 600, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center' }}>{lbl}</div>
                        })}
                      </div>
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {heatmapWeeks.map((week, wi) => (
                          <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>
                            {week.map(date => {
                              const hrs = heatmapData[date] || 0
                              const isToday2 = date === today
                              return <div key={date} title={`${date}: ${hrs}h`} style={{ height: 14, borderRadius: 3, background: heatColor(hrs), border: isToday2 ? '1px solid rgba(75,123,255,.6)' : '1px solid transparent', transition: 'all .15s' }} />
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 16, justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600 }}>Manje</span>
                      {[0,0.5,1.5,2.5,4].map(h => <div key={h} style={{ width: 12, height: 12, borderRadius: 2, background: heatColor(h) }} />)}
                      <span style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 600 }}>Više</span>
                    </div>
                    <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, padding: '16px', borderRadius: 16, background: 'rgba(255,255,255,.025)', border: '1px solid rgba(255,255,255,.06)' }}>
                      {[
                        { label: 'Ukupno sati',  val: `${progressLog.reduce((s,l) => s + Number(l.hours_spent), 0).toFixed(1)}h`, color: 'var(--blue)' },
                        { label: 'Aktivnih dana', val: new Set(progressLog.map(l => l.logged_date)).size, color: 'var(--green)' },
                        { label: 'Naj. streak',   val: `${stats?.streak || 0} dana`, color: 'var(--gold)' },
                      ].map(s => (
                        <div key={s.label} style={{ textAlign: 'center' }}>
                          <div style={{ fontFamily: 'var(--fh)', fontSize: 24, fontWeight: 900, color: s.color, lineHeight: 1, marginBottom: 4 }}>{s.val}</div>
                          <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ padding: '0 28px 28px' }}>
                <ProBlur onUpgrade={() => router.push('/pro')} label="Heatmapa aktivnosti">
                  <div style={card}>
                    <div style={{ padding: '20px 22px', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                      <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 900 }}>Heatmapa učenja</div>
                    </div>
                    <div style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {Array.from({ length: 8 }).map((_, wi) => (
                          <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: 4 }}>
                            {Array.from({ length: 7 }).map((_, di) => (
                              <div key={di} style={{ height: 14, borderRadius: 3, background: Math.random() > 0.6 ? `rgba(75,123,255,${(Math.random()*0.8+0.2).toFixed(2)})` : 'rgba(255,255,255,.04)' }} />
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ProBlur>
              </div>
            )
          )}

        </div>

        {/* ── Bottom day detail bar ── */}
        {(activeTab === 'danas' || activeTab === 'tjedni') && (selectedDay || today) && (
          <div style={{ position: 'sticky', bottom: 0, background: 'rgba(7,9,15,.95)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,.06)', padding: '12px 28px', display: 'flex', alignItems: 'center', gap: 14, zIndex: 100 }}>
            {(() => {
              const dayKey = selectedDay || today
              const w = dayWeekMap[dayKey]
              if (!w) return <div style={{ fontSize: 13, color: 'var(--muted)' }}>Nema zadataka za ovaj dan.</div>
              const color    = subjectColors[w.subject_id] || 'var(--blue)'
              const totalMin = w.hours * 60
              const doneMin  = w.completed ? totalMin : (dayKey === today ? Math.round(totalMin * 0.4) : 0)
              return (
                <>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0 }}>
                    <div style={{ width: 7, height: 7, borderRadius: 2, background: 'var(--green)' }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--muted)' }}>{dayName(dayKey)} · {dayNum(dayKey)}. {monthName(dayKey)} · DAN {next30.indexOf(dayKey)+1}/{next30.length}</span>
                  </div>
                  <div style={{ height: 18, width: 1, background: 'rgba(255,255,255,.06)', flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 800, marginBottom: 2 }}>{w.topic || w.subject_name}</div>
                    {w.note && <div style={{ fontSize: 11, color: 'var(--muted)' }}>{w.note}</div>}
                  </div>
                  <div style={{ flexShrink: 0, textAlign: 'right' }}>
                    <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 3 }}>{doneMin}/{totalMin} min</div>
                    <div style={{ width: 110, height: 3, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${totalMin > 0 ? (doneMin/totalMin)*100 : 0}%`, background: 'var(--green)', borderRadius: 99 }} />
                    </div>
                  </div>
                  {!w.completed && (
                    <button onClick={() => toggleWeek(w)} disabled={!!togglingId} style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: 'var(--green)', color: '#0f1a15', fontSize: 12, fontWeight: 700, cursor: togglingId ? 'not-allowed' : 'pointer', flexShrink: 0, fontFamily: 'var(--fb)' }}>
                      {togglingId === w.id ? '...' : 'Označi završeno'}
                    </button>
                  )}
                  {w.completed && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '8px 12px', borderRadius: 8, background: 'rgba(62,207,110,.1)', border: '1px solid rgba(62,207,110,.22)', fontSize: 12, fontWeight: 600, color: 'var(--green)', flexShrink: 0 }}>
                      ✓ Odrađeno
                    </div>
                  )}
                </>
              )
            })()}
          </div>
        )}
      </div>

      {/* ── Adaptive toasts ── */}
      <AdaptiveToastContainer toasts={toasts} onRemove={removeToast} />

      {/* ── Reset modal ── */}
      {showResetModal && (
        <div onClick={e => e.target === e.currentTarget && setShowResetModal(false)} style={{ position: 'fixed', inset: 0, zIndex: 600, background: 'rgba(7,9,15,.88)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ ...card, padding: '32px 28px', maxWidth: 420, width: '100%', animation: 'up .3s cubic-bezier(.16,1,.3,1)' }}>
            <div style={{ fontSize: 36, marginBottom: 16, textAlign: 'center' }}>🗑️</div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900, marginBottom: 10, textAlign: 'center' }}>Resetirati plan?</div>
            <div style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 24, textAlign: 'center' }}>Ovo će obrisati <strong style={{ color: 'var(--text)' }}>sve tjedne, napredak i logove</strong>. Nije moguće poništiti.</div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setShowResetModal(false)} style={{ flex: 1, padding: '12px', borderRadius: 12, border: '1px solid rgba(255,255,255,.08)', background: 'rgba(255,255,255,.04)', color: 'var(--muted)', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)' }}>Odustani</button>
              <button onClick={resetPlan} disabled={resetting} style={{ flex: 1, padding: '12px', borderRadius: 12, border: 'none', background: resetting ? 'rgba(248,113,113,.3)' : 'linear-gradient(135deg,#f87171,#ef4444)', color: '#fff', fontSize: 14, fontWeight: 800, cursor: resetting ? 'not-allowed' : 'pointer', fontFamily: 'var(--fb)' }}>
                {resetting ? 'Brišem...' : 'Da, resetiraj'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .dashboard-stat-grid { grid-template-columns: 1fr 1fr !important; }
          .dashboard-main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .dashboard-stat-grid { grid-template-columns: 1fr 1fr !important; }
          .dashboard-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
