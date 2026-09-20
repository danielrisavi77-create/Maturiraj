'use client'
// ── /dashboard — command center hub ──────────────────────────────────────────
// Agregira "što dalje" kroz cijeli proizvod (plan, simulator, skripte, AI).
// Linka u postojeće sekcije — NE duplicira plan kalendar/heatmapu.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/lib/hooks/useAuth'
import { MATURA_DATE, getGreeting, daysUntil, progressColor, card } from '@/lib/dashboard/helpers'
import ProBlur from '@/components/dashboard/ProBlur'
import { isAiEndpointsEnabled, isGameModeEnabled } from '@/lib/config/featureFlags'

const SUBJECT_LABELS = {
  hrv: 'Hrvatski', mat: 'Matematika', 'mat-a': 'Matematika A', 'mat-b': 'Matematika B',
  eng: 'Engleski', 'eng-visa': 'Engleski (viša)', 'eng-niza': 'Engleski (niža)',
  kem: 'Kemija', soc: 'Sociologija', bio: 'Biologija', fiz: 'Fizika',
}
function subjLabel(code) {
  if (!code) return ''
  return SUBJECT_LABELS[code] || code.charAt(0).toUpperCase() + code.slice(1)
}

export default function DashboardHub() {
  const router = useRouter()
  const { user, planType, isPro, isPaid, loading: authLoading } = useAuth()
  const supabase = createClient()

  const [plan, setPlan] = useState(null)
  const [weeks, setWeeks] = useState([])
  const [progressLog, setProgressLog] = useState([])
  const [lastSim, setLastSim] = useState(null)
  const [chapters, setChapters] = useState([])
  const [loading, setLoading] = useState(true)

  /* ─── Auth guard (defense-in-depth; proxy.js je primarni) ─── */
  useEffect(() => {
    if (!authLoading && !user) router.push('/prijava?redirect=/dashboard')
  }, [user, authLoading]) // eslint-disable-line react-hooks/exhaustive-deps

  /* ─── Fetch sve izvore paralelno ─── */
  useEffect(() => {
    if (!user) return
    let cancelled = false
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
        .maybeSingle()

      // Tjedni plana
      let weeksData = []
      if (planData) {
        const { data } = await supabase
          .from('plan_weeks')
          .select('*')
          .eq('plan_id', planData.id)
          .order('week_num', { ascending: true })
        weeksData = data || []
      }

      // Progress log (zadnjih 60 dana — za streak)
      const from = new Date()
      from.setDate(from.getDate() - 60)
      const { data: logData } = await supabase
        .from('progress_log')
        .select('logged_date')
        .eq('user_id', user.id)
        .gte('logged_date', from.toISOString().split('T')[0])

      // Zadnja završena simulator sesija — simulatori pišu u sim_progress
      // (jedan red po završenom ispitu), a NE u simulator_sessions. Mapiramo
      // stupce na oblik koji ostatak UI-a očekuje (score/correct_count/…).
      const { data: simRow } = await supabase
        .from('sim_progress')
        .select('subject, pct, correct, total, created_at')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      const simData = simRow ? {
        subject: simRow.subject,
        score: simRow.pct,
        correct_count: simRow.correct,
        total_questions: simRow.total,
        finished_at: simRow.created_at,
      } : null

      // Napredak skripti (nezavršena poglavlja)
      const { data: chapterData } = await supabase
        .from('chapter_progress')
        .select('subject, chapter, progress_pct, updated_at')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false })

      if (cancelled) return
      setPlan(planData || null)
      setWeeks(weeksData)
      setProgressLog(logData || [])
      setLastSim(simData || null)
      setChapters(chapterData || [])
      setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

  /* ─── Derivacije ─── */
  const nextWeek = useMemo(() => weeks.find(w => !w.completed) || null, [weeks])

  const planPct = useMemo(() => {
    if (!weeks.length) return 0
    return Math.round((weeks.filter(w => w.completed).length / weeks.length) * 100)
  }, [weeks])

  const streak = useMemo(() => {
    const dates = new Set(progressLog.map(l => l.logged_date))
    let s = 0
    const d = new Date()
    while (dates.has(d.toISOString().split('T')[0])) {
      s++
      d.setDate(d.getDate() - 1)
    }
    return s
  }, [progressLog])

  const resumeChapter = useMemo(() => {
    const inProgress = chapters.filter(c => c.progress_pct > 0 && c.progress_pct < 100)
    if (!inProgress.length) return null
    return inProgress.reduce((a, b) => (b.progress_pct > a.progress_pct ? b : a))
  }, [chapters])

  const simPct = lastSim
    ? (lastSim.total_questions > 0
        ? Math.round((lastSim.correct_count / lastSim.total_questions) * 100)
        : (lastSim.score ?? 0))
    : null

  const daysLeft = daysUntil(MATURA_DATE)
  const firstName = user?.user_metadata?.full_name?.split(' ')[0] || null
  const goPro = () => router.push('/pro')

  /* ─── Loading ─── */
  if (authLoading || (user && loading)) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted)', fontFamily: 'var(--fb)' }}>
        Učitavanje…
      </div>
    )
  }
  if (!user) return null

  /* ─── Tier badge ─── */
  let tierLabel = 'Besplatno', tierColor = '#6a82a8'
  if (isPro) { tierLabel = 'PRO'; tierColor = '#c084fc' }
  else if (planType === 'starter') { tierLabel = 'Standard'; tierColor = '#e9b446' }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '88px 20px 72px' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto' }}>

        {/* ── Hero ── */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: 'var(--fh)', fontSize: 32, fontWeight: 900, letterSpacing: '-.02em', margin: 0, color: 'var(--text)' }}>
              {getGreeting()}{firstName ? `, ${firstName}` : ''}.
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: 14, marginTop: 6 }}>
              Još <strong style={{ color: 'var(--text)' }}>{daysLeft}</strong> dana do mature. Evo što dalje.
            </p>
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: tierColor, background: `${tierColor}22`, border: `1px solid ${tierColor}44`, borderRadius: 999, padding: '5px 12px' }}>
            {tierLabel}
          </span>
        </div>

        {/* ── Što dalje danas (primarna CTA) ── */}
        <PrimaryCard nextWeek={nextWeek} plan={plan} planPct={planPct} router={router} />

        {/* ── Quick stats ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, margin: '14px 0 22px' }}>
          <Stat label="Napredak plana" value={`${planPct}%`} color={progressColor(planPct)} />
          <Stat label="Streak" value={`${streak} 🔥`} color="var(--gold)" />
          <Stat label="Do mature" value={`${daysLeft} dana`} color={daysLeft < 30 ? '#f87171' : 'var(--blue)'} />
        </div>

        {/* ── Grid kartica ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 14 }}>

          {/* Plan učenja */}
          <HubCard
            icon="📅" title="Plan učenja" accent="var(--blue)"
            onClick={() => router.push(plan ? '/plan-ucenja/dashboard' : '/plan-ucenja')}
          >
            {plan ? (
              nextWeek ? (
                <>
                  <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600 }}>
                    Tjedan {nextWeek.week_num} · {subjLabel(nextWeek.subject_id) || nextWeek.subject_name}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{nextWeek.topic}</div>
                  <Bar pct={planPct} />
                </>
              ) : (
                <div style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>✓ Sve tjedne odradio. Bravo!</div>
              )
            ) : (
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>Još nemaš plan — kreiraj ga u par koraka.</div>
            )}
            <CardCta label={plan ? 'Otvori plan →' : 'Kreiraj plan →'} />
          </HubCard>

          {/* Simulator */}
          <HubCard icon="⭐" title="Simulator" accent="var(--gold)" onClick={() => router.push('/discere')}>
            {/* Postotak zadnjeg ispita je besplatan sadržaj (uz ocjenu, bodove i XP),
                pa ga vidi i free korisnik — uz Standard dolazi razrada, ne rezultat. */}
            {lastSim ? (
              <>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600 }}>
                  {subjLabel(lastSim.subject)} · {simPct}%
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>
                  {isPaid ? 'Zadnji pokušaj — nastavi vježbati.' : 'Zadnji pokušaj — razrada rezultata uz Standard.'}
                </div>
                <Bar pct={simPct} />
              </>
            ) : (
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>
                {isPaid
                  ? 'Riješi prvi probni ispit i prati rezultat.'
                  : 'Probni ispiti s timerom su besplatni — razrada rezultata uz Standard.'}
              </div>
            )}
            <CardCta label="Otvori Discere →" />
          </HubCard>

          {isGameModeEnabled() && (
            <HubCard icon="🎮" title="Game Mode · Hrvatski" accent="#ff6b35" onClick={() => router.push('/game')}>
              <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600 }}>Brzo ponavljanje iz Discere banke.</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>10 pitanja · post-check · pristupačni način</div>
              <CardCta label="Pokreni rundu →" />
            </HubCard>
          )}

          {/* Skripte */}
          <HubCard icon="📖" title="Skripte" accent="var(--green)" onClick={() => router.push('/skripte')}>
            {resumeChapter ? (
              <>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600 }}>
                  {subjLabel(resumeChapter.subject)} · {resumeChapter.progress_pct}%
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Nastavi gdje si stao.</div>
                <Bar pct={resumeChapter.progress_pct} />
              </>
            ) : (
              <div style={{ fontSize: 13, color: 'var(--muted)' }}>Otvori skripte i počni s prvim poglavljem.</div>
            )}
            <CardCta label={resumeChapter ? 'Nastavi skriptu →' : 'Otvori skripte →'} />
          </HubCard>

          {/* AI Profesor (PRO) — sakriven dok AI_ENDPOINTS_ENABLED nije true */}
          {isAiEndpointsEnabled() && (isPro ? (
            <HubCard icon="🤖" title="AI Profesor" accent="var(--violet)" onClick={() => router.push('/ai-profesor')}>
              <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600 }}>Pitaj bilo što, 24/7.</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Objašnjenja, zadaci, savjeti.</div>
              <CardCta label="Otvori AI Profesora →" />
            </HubCard>
          ) : (
            <ProBlur onUpgrade={goPro} label="PRO">
              <HubCard icon="🤖" title="AI Profesor" accent="var(--violet)" onClick={goPro}>
                <div style={{ fontSize: 13, color: 'var(--text)', fontWeight: 600 }}>Pitaj bilo što, 24/7.</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Objašnjenja, zadaci, savjeti.</div>
                <CardCta label="Otključaj uz PRO →" />
              </HubCard>
            </ProBlur>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Podkomponente ─── */
function PrimaryCard({ nextWeek, plan, planPct, router }) {
  const noPlan = !plan
  const done = plan && !nextWeek
  const title = noPlan ? 'Kreiraj svoj plan učenja'
    : done ? 'Sav plan je odrađen 🎉'
    : `Nastavi: Tjedan ${nextWeek.week_num}`
  const sub = noPlan ? 'Odaberi predmete i tempo — generiramo raspored do mature.'
    : done ? 'Označi nove tjedne ili regeneriraj plan za sljedeću fazu.'
    : `${nextWeek.subject_name} — ${nextWeek.topic}`
  const cta = noPlan ? 'Kreiraj plan' : 'Otvori plan'
  const target = noPlan ? '/plan-ucenja' : '/plan-ucenja/dashboard'

  return (
    <div style={{ ...card, padding: '22px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, borderColor: 'rgba(75,123,255,.25)' }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 6 }}>Što dalje danas</div>
        <h2 style={{ fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900, margin: 0, color: 'var(--text)' }}>{title}</h2>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 4, maxWidth: 460 }}>{sub}</p>
        {!noPlan && !done && (
          <div style={{ marginTop: 10, maxWidth: 360 }}><Bar pct={planPct} /></div>
        )}
      </div>
      <button onClick={() => router.push(target)} style={{
        padding: '12px 22px', borderRadius: 12, border: 'none', flexShrink: 0,
        background: 'linear-gradient(135deg,var(--blue),var(--violet))', color: '#fff',
        fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)',
        boxShadow: '0 8px 24px rgba(75,123,255,.3)',
      }}>{cta} →</button>
    </div>
  )
}

function Stat({ label, value, color }) {
  return (
    <div style={{ ...card, padding: '14px 16px', borderRadius: 16 }}>
      <div style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.05em' }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color, marginTop: 4, fontFamily: 'var(--fh)' }}>{value}</div>
    </div>
  )
}

function HubCard({ icon, title, accent, onClick, children }) {
  return (
    <div onClick={onClick} style={{ ...card, padding: 18, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 6, transition: 'transform .15s, border-color .15s' }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.borderColor = `${accent}55` }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
        <span style={{ fontSize: 18 }}>{icon}</span>
        <span style={{ fontFamily: 'var(--fh)', fontSize: 15, fontWeight: 800, color: 'var(--text)' }}>{title}</span>
      </div>
      {children}
    </div>
  )
}

function Bar({ pct }) {
  return (
    <div style={{ height: 6, borderRadius: 99, background: 'rgba(255,255,255,.07)', marginTop: 8, overflow: 'hidden' }}>
      <div style={{ height: '100%', width: `${pct}%`, background: progressColor(pct), borderRadius: 99, transition: 'width .3s' }} />
    </div>
  )
}

function CardCta({ label }) {
  return (
    <div style={{ marginTop: 'auto', paddingTop: 10, fontSize: 12, fontWeight: 700, color: 'var(--blue)' }}>{label}</div>
  )
}
