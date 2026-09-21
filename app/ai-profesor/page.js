'use client'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/lib/hooks/useAuth'
import { usePageTracking } from '@/lib/hooks/usePageTracking'
import { analyzeplan } from '@/lib/hooks/useAdaptivePlan'

/* ─── Predmeti za selector ─────────────────────── */
const SUBJECTS = [
  { id: 'mat-a', name: 'Matematika A', sym: '∑', color: '#818cf8', tag: 'Obavezni' },
  { id: 'mat-b', name: 'Matematika B', sym: '∑', color: '#a5b4fc', tag: 'Obavezni' },
  { id: 'hrv',   name: 'Hrvatski',     sym: 'Č', color: '#f87171', tag: 'Obavezni' },
  { id: 'eng',   name: 'Engleski',     sym: 'E', color: '#60a5fa', tag: 'Obavezni' },
  { id: 'fiz',   name: 'Fizika',       sym: 'Φ', color: '#fbbf24', tag: 'Prirodoslovni' },
  { id: 'kem',   name: 'Kemija',       sym: '⚗', color: '#34d399', tag: 'Prirodoslovni' },
  { id: 'bio',   name: 'Biologija',    sym: '⊕', color: '#2dd4bf', tag: 'Prirodoslovni' },
  { id: 'inf',   name: 'Informatika',  sym: '⌨', color: '#818cf8', tag: 'Prirodoslovni' },
  { id: 'geo',   name: 'Geografija',   sym: '◉', color: '#38bdf8', tag: 'Društveni' },
  { id: 'pov',   name: 'Povijest',     sym: '⚔', color: '#fb923c', tag: 'Društveni' },
  { id: 'psi',   name: 'Psihologija',  sym: '🧠', color: '#c084fc', tag: 'Društveni' },
  { id: 'mef',   name: 'Prijemni MEF', sym: '⚕', color: '#f43f5e', tag: 'Prijemni' },
  { id: 'fer',   name: 'Prijemni FER', sym: '⚡', color: '#6366f1', tag: 'Prijemni' },
]

/* ─── Quick prompts ────────────────────────────── */
const QUICK_PROMPTS = [
  { label: '📚 Objasni ovu temu',   text: 'Objasni mi temu iz ovog tjedna na jednostavan način s primjerima.' },
  { label: '🎯 Što učim danas?',    text: 'Što bih trebao učiti danas prema mom planu?' },
  { label: '⚠️ Gdje zaostajm?',    text: 'Gdje zaostajm u planu i kako to nadoknaditi?' },
  { label: '🔁 Kratko ponavljanje', text: 'Napravi mi kratko ponavljanje najvažnijih pojmova za ovaj tjedan.' },
  { label: '📝 Primjeri zadataka',  text: 'Daj mi nekoliko tipičnih maturalnih zadataka za gradivo ovog tjedna.' },
  { label: '💡 Savjet za učenje',   text: 'Kako da učinkovitije učim i pamtim gradivo za maturu?' },
]

/* ─── Formatiranje poruka ──────────────────────── */
function formatMessage(text) {
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  text = text.replace(/`([^`]+)`/g, '<code style="background:rgba(75,123,255,.12);padding:1px 5px;border-radius:4px;font-size:13px;font-family:monospace;">$1</code>')
  text = text.replace(/^\d+\.\s(.+)$/gm, '<div style="display:flex;gap:8px;margin:3px 0;"><span style="color:#4b7bff;font-weight:700;min-width:16px;">•</span><span>$1</span></div>')
  text = text.replace(/\n\n/g, '<div style="height:8px;"></div>')
  text = text.replace(/\n/g, '<br/>')
  return text
}

/* ─── Typing dots ──────────────────────────────── */
function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center', padding: '4px 0' }}>
      {[0, 1, 2].map(i => (
        <div key={i} style={{
          width: 6, height: 6, borderRadius: '50%', background: 'var(--blue)',
          animation: 'typing-dot 1.2s ease-in-out infinite',
          animationDelay: `${i * 0.2}s`,
        }} />
      ))}
    </div>
  )
}

/* ─── Message bubble ───────────────────────────── */
function Message({ msg }) {
  const isAI = msg.role === 'ai'
  return (
    <div style={{
      display: 'flex',
      justifyContent: isAI ? 'flex-start' : 'flex-end',
      animation: 'msgin .27s ease both',
    }}>
      {isAI && (
        <div style={{
          width: 30, height: 30, borderRadius: 10, flexShrink: 0,
          background: 'linear-gradient(135deg, var(--blue), var(--violet))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, marginRight: 8, alignSelf: 'flex-end', marginBottom: 2,
        }}>🤖</div>
      )}
      <div style={{
        maxWidth: '75%',
        padding: '11px 15px',
        borderRadius: isAI ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
        fontSize: 14, lineHeight: 1.7,
        background: isAI
          ? 'linear-gradient(160deg, rgba(255,255,255,.045), rgba(255,255,255,.02))'
          : 'linear-gradient(135deg, rgba(75,123,255,.2), rgba(124,92,252,.15))',
        border: isAI
          ? '1px solid rgba(255,255,255,.08)'
          : '1px solid rgba(75,123,255,.3)',
        color: 'var(--text)',
        wordBreak: 'break-word',
        ...(msg.isLimit && { borderColor: 'rgba(248,113,113,.3)', background: 'rgba(248,113,113,.07)' }),
      }}>
        {isAI ? (
          <>
            <div dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }} />
            {msg.streaming && (
              <span style={{ display: 'inline-flex', gap: 3, marginLeft: 4, verticalAlign: 'middle' }}>
                <span className="dot" /><span className="dot" /><span className="dot" />
              </span>
            )}
          </>
        ) : msg.text}
      </div>
    </div>
  )
}

/* ─── Glavni komponent ─────────────────────────── */
export default function AIProfessorPage() {
  usePageTracking('ai-profesor')
  const router             = useRouter()
  const { user } = useAuth()
  const supabase           = createClient()

  // Plan state
  const [plan,        setPlan]        = useState(null)
  const [weeks,       setWeeks]       = useState([])
  const [loadingPlan, setLoadingPlan] = useState(!!user)

  // Chat state
  const [messages,  setMessages]  = useState([])
  const [input,     setInput]     = useState('')
  const [loading,   setLoading]   = useState(false)
  const [streaming, setStreaming] = useState(false)
  const [error,     setError]     = useState(null)

  // Sidebar state
  const [selSubj,  setSelSubj]  = useState(null)
  const [userPlan, setUserPlan] = useState(null)  // 'pro' | 'starter' | null
  const [usage,    setUsage]    = useState({ used: 0, limit: 150, budgetUsedPct: 0, costUsd: 0 })
  const [previousUser, setPreviousUser] = useState(user)
  if (previousUser !== user) {
    setPreviousUser(user)
    setPlan(null)
    setWeeks([])
    setUserPlan(null)
    setUsage({ used: 0, limit: 150, budgetUsedPct: 0, costUsd: 0 })
    setMessages([])
    setLoadingPlan(!!user)
  }

  const chatBodyRef = useRef(null)
  const inputRef    = useRef(null)
  const abortRef    = useRef(null)

  /* ─── Auth + plan check ─────────────────────── */
  useEffect(() => {
    if (!user) return
    let cancelled = false

    const init = async () => {
      // Dohvati plan korisnika
      const { data: profileData } = await supabase
        .from('profiles')
        .select('plan_type')
        .eq('id', user.id)
        .single()
      if (cancelled) return

      const planType = profileData?.plan_type === 'pro' ? 'pro'
        : profileData?.plan_type === 'starter' ? 'starter'
        : null
      setUserPlan(planType)

      // Miesečni usage stats (samo za PRO)
      if (planType === 'pro') {
        const { data: statsData } = await supabase
          .rpc('get_ai_usage_stats', { p_user_id: user.id })
        if (cancelled) return

        if (statsData) {
          setUsage({
            used:          statsData.message_count || 0,
            limit:         statsData.limit || 150,
            budgetUsedPct: statsData.budget_used_pct || 0,
            costUsd:       statsData.cost_usd || 0,
            resetsAt:      statsData.resets_at,
          })
        }
      }

      // Plan učenja
      const { data: planData } = await supabase
        .from('study_plans')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true)
        .order('created_at', { ascending: false })
        .limit(1)
        .single()
      if (cancelled) return

      if (planData) {
        setPlan(planData)
        const { data: weeksData } = await supabase
          .from('plan_weeks')
          .select('*')
          .eq('plan_id', planData.id)
          .order('week_num', { ascending: true })
        if (cancelled) return
        setWeeks(weeksData || [])
      }

      setLoadingPlan(false)
    }
    init()
    return () => { cancelled = true }
  }, [user])

  /* ─── Welcome poruka ────────────────────────── */
  const nextWeek = useMemo(() => weeks.find(w => !w.completed) || null, [weeks])
  const [welcomeContext, setWelcomeContext] = useState(null)
  if (!welcomeContext || welcomeContext.loadingPlan !== loadingPlan || welcomeContext.selSubj !== selSubj || welcomeContext.userPlan !== userPlan) {
    setWelcomeContext({ loadingPlan, selSubj, userPlan })
    if (!loadingPlan) {

    let welcomeText
    if (!user) {
      welcomeText = 'Bok! Za korištenje AI Profesora moraš biti prijavljen. 👋'
    } else if (userPlan !== 'pro') {
      welcomeText = 'Bok! AI Profesor je dostupan isključivo uz **PRO plan**.\n\nNadogradi na /pro i odmah dobivaš pristup — 150 poruka miesečno, plan kontekst i odgovore na hrvatskom. 🎓'
    } else {
      const subjectCtx = selSubj ? `Odabrao si **${selSubj.name}**. ` : ''
      const planCtx = plan
        ? `Vidim tvoj plan s ${(plan.subjects || []).length} predmeta.${nextWeek ? ` Sljedeći tjedan učiš **${nextWeek.subject_name}** — ${nextWeek.topic}.` : ''} `
        : 'Nemaš aktivan plan učenja, ali svejedno te mogu pomoći s gradivom. '
      welcomeText = `Bok! Ja sam tvoj AI Profesor za maturu. ${subjectCtx}${planCtx}Što te zanima?`
    }

    setMessages([{ role: 'ai', text: welcomeText, id: 'welcome' }])
    }
  }

  /* ─── Derivirani kontekst plana ─────────────── */
  const analysis = useMemo(() => {
    if (!weeks.length || !plan?.subjects?.length) return null
    return analyzeplan(weeks, plan.subjects, plan.hours_per_week)
  }, [weeks, plan])

  const completedWeeks = weeks.filter(w => w.completed).length
  const totalWeeks     = weeks.length
  const napredakPct    = totalWeeks ? Math.round((completedWeeks / totalWeeks) * 100) : 0

  /* ─── System prompt ─────────────────────────── */
  const buildSystemPrompt = useCallback(() => {
    const danaDoMature = Math.max(0, Math.ceil((new Date('2026-06-01') - new Date()) / (1000 * 60 * 60 * 24)))
    const subjects     = (plan?.subjects || []).map(s => s.name).join(', ')

    let prompt = `Ti si AI Profesor za državnu maturu u Hrvatskoj. Odgovaraj ISKLJUČIVO na pitanja vezana uz gradivo mature i prijemnih ispita. Uvijek odgovaraj na hrvatskom. Budi koncizan i precizan — maturanti trebaju jasna, brza objašnjenja. Za matematiku i fiziku koristi Unicode simbole (∫, Δ, π, α, β, ²…). Strukturiraj odgovor: kratko objasni, daj primjer, zaključi. Maksimalno 4–5 rečenica ili koraci za zadatke.`

    if (selSubj) {
      prompt += `\n\nAktivni predmet: ${selSubj.name}. Fokusiraj se na gradivo ovog predmeta za državnu maturu.`
    }

    if (plan) {
      prompt += `\n\nKORISNIKOV PLAN UČENJA:
- Predmeti: ${subjects}
- Tempo: ${plan.hours_per_week}h/tjedan
- Napredak: ${napredakPct}% (${completedWeeks}/${totalWeeks} tjedana završeno)
- Dana do mature: ${danaDoMature}`

      if (nextWeek) {
        prompt += `\n- Sljedeći tjedan: ${nextWeek.subject_name} — ${nextWeek.topic} (${nextWeek.hours}h)`
      }
      if (analysis?.warnings?.length > 0) {
        prompt += `\n- Upozorenja: ${analysis.warnings.map(w => w.message).join('; ')}`
      }
      if (analysis?.laggingSubjects?.length > 0) {
        prompt += `\n- Predmeti koji zaostaju: ${analysis.laggingSubjects.map(s => s.name).join(', ')}`
      }
    }

    return prompt
  }, [plan, selSubj, napredakPct, completedWeeks, totalWeeks, nextWeek, analysis])

  /* ─── Auto-scroll ───────────────────────────── */
  useEffect(() => {
    chatBodyRef.current?.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, streaming])

  /* ─── Send ──────────────────────────────────── */
  const send = useCallback(async (overrideText) => {
    const q = (overrideText ?? input).trim()
    if (!q || loading) return

    if (!user) {
      setMessages(m => [...m, { role: 'ai', text: 'Za korištenje AI Profesora moraš biti prijavljen.', id: Date.now() }])
      return
    }
    if (userPlan !== 'pro') {
      setMessages(m => [...m, { role: 'ai', text: 'AI Profesor je dostupan uz **PRO plan** (19,99 €/mj). Nadogradi na /pro.', id: Date.now() }])
      return
    }
    if (usage.used >= usage.limit) {
      setMessages(m => [...m, { role: 'ai', text: `Dostigao si miesečni limit od **${usage.limit} poruka**. Resetira se 1. u miesecu. 🌙`, id: Date.now(), isLimit: true }])
      return
    }

    setInput('')
    setError(null)
    const userMsg = { role: 'user', text: q, id: Date.now() }
    setMessages(m => [...m, userMsg])
    setLoading(true)

    // Rate limit + token tracking
    try {
      const estimatedInput  = 400 + (messages.slice(1).slice(-8).reduce((s, m) => s + m.text.length, 0) / 4) + (q.length / 4)
      const estimatedOutput = 300

      const { data: rpcResult, error: rpcErr } = await supabase.rpc('check_and_increment_ai_usage', {
        p_user_id:       user.id,
        p_input_tokens:  Math.round(estimatedInput),
        p_output_tokens: estimatedOutput,
      })
      if (rpcErr) throw rpcErr

      if (!rpcResult.allowed) {
        const reason = rpcResult.reason
        const msg = reason === 'budget_limit'
          ? `Dostigao si miesečni AI budžet ($3). Limit se resetira 1. u miesecu. 🌙`
          : reason === 'message_limit'
          ? `Dostigao si limit od **${rpcResult.limit} poruka** ovaj miesec. Resetira se 1. u miesecu. 🌙`
          : 'Nemaš aktivan PRO plan za AI Profesor.'

        setMessages(m => [...m, { role: 'ai', text: msg, id: Date.now(), isLimit: true }])
        setLoading(false)
        return
      }

      setUsage(prev => ({
        ...prev,
        used:          rpcResult.message_count,
        budgetUsedPct: rpcResult.budget_used_pct || prev.budgetUsedPct,
        costUsd:       rpcResult.cost_usd || prev.costUsd,
      }))
    } catch {
      setMessages(m => [...m, { role: 'ai', text: 'Greška pri provjeri limita. Pokušaj ponovo.', id: Date.now() }])
      setLoading(false)
      return
    }

    // Build history — preskoči welcome (index 0), zadrži zadnjih 8
    const allMsgs    = [...messages, userMsg]
    const history    = allMsgs.slice(1).slice(-8)
    const apiHistory = history.map(m => ({
      role:    m.role === 'ai' ? 'assistant' : 'user',
      content: m.text,
    }))

    // Streaming
    abortRef.current = new AbortController()
    setStreaming(true)
    const aiMsgId = Date.now() + 1
    setMessages(m => [...m, { role: 'ai', text: '', id: aiMsgId, streaming: true }])

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: abortRef.current.signal,
        body: JSON.stringify({
          mode:     'profesor',
          system:   buildSystemPrompt(),
          messages: apiHistory,
        }),
      })

      if (!res.ok) throw new Error(`API error: ${res.status}`)

      const reader  = res.body.getReader()
      const decoder = new TextDecoder()
      let fullText  = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        const lines = chunk.split('\n').filter(l => l.startsWith('data: '))

        for (const line of lines) {
          try {
            const json = JSON.parse(line.slice(6))
            if (json.type === 'content_block_delta' && json.delta?.text) {
              fullText += json.delta.text
              setMessages(m => m.map(msg =>
                msg.id === aiMsgId ? { ...msg, text: fullText } : msg
              ))
            }
          } catch {}
        }
      }

      setMessages(m => m.map(msg =>
        msg.id === aiMsgId ? { ...msg, streaming: false } : msg
      ))

    } catch (err) {
      if (err.name === 'AbortError') {
        setMessages(m => m.map(msg =>
          msg.id === aiMsgId ? { ...msg, text: msg.text + ' _(prekinuto)_', streaming: false } : msg
        ))
      } else {
        setMessages(m => m.map(msg =>
          msg.id === aiMsgId
            ? { ...msg, text: 'Greška pri komunikaciji s AI-jem. Pokušaj ponovo.', streaming: false }
            : msg
        ))
      }
    }

    setLoading(false)
    setStreaming(false)
    setTimeout(() => inputRef.current?.focus(), 50)
  }, [input, messages, loading, user, userPlan, usage, buildSystemPrompt, supabase])

  /* ─── Abort ─────────────────────────────────── */
  const abort = () => {
    abortRef.current?.abort()
    setLoading(false)
    setStreaming(false)
  }

  /* ─── Helpers ───────────────────────────────── */
  const remaining  = Math.max(usage.limit - usage.used, 0)
  const usagePct   = usage.limit > 0 ? Math.min((usage.used / usage.limit) * 100, 100) : 0
  const usageColor = usagePct >= 90 ? '#f87171' : usagePct >= 70 ? '#e9b446' : '#3ecf6e'
  const canSend    = !!user && userPlan === 'pro' && usage.used < usage.limit && !loading

  /* ─── Loading ───────────────────────────────── */
  if (loadingPlan) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', border: '3px solid rgba(75,123,255,.2)', borderTopColor: 'var(--blue)', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }} />
        <div style={{ fontSize: 14, color: 'var(--muted)' }}>Učitavam...</div>
      </div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', flexDirection: 'column' }}>

      {/* ── Ambient orb ── */}
      <div style={{
        position: 'fixed', top: '-10%', right: '-5%', width: 500, height: 500,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(75,123,255,.1), transparent 65%)',
        filter: 'blur(60px)', pointerEvents: 'none', zIndex: 0,
        animation: 'orb-b 18s ease-in-out infinite',
      }} />

      {/* ── Main layout ── */}
      <div style={{
        paddingTop: 60, flex: 1, display: 'flex', position: 'relative', zIndex: 1,
        maxWidth: 1200, margin: '0 auto', width: '100%', padding: '60px 16px 0',
      }}>

        {/* ── LEFT sidebar — predmeti ── */}
        <div className="ai-sidebar-left" style={{
          width: 220, flexShrink: 0, paddingTop: 20, paddingRight: 16,
          display: 'flex', flexDirection: 'column', gap: 4,
          borderRight: '1px solid rgba(255,255,255,.06)',
          overflowY: 'auto',
        }}>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', padding: '4px 10px', marginBottom: 6 }}>
            Predmet
          </div>

          <button onClick={() => setSelSubj(null)} style={{
            width: '100%', padding: '8px 10px', borderRadius: 10, border: 'none',
            fontFamily: 'var(--fb)', fontSize: 13, cursor: 'pointer', textAlign: 'left',
            transition: 'all .15s', display: 'flex', alignItems: 'center', gap: 8,
            background: !selSubj ? 'rgba(75,123,255,.12)' : 'transparent',
            color: !selSubj ? 'var(--text)' : 'var(--muted)',
            fontWeight: !selSubj ? 700 : 400,
          }}>
            <span>🎯</span> Svi predmeti
          </button>

          {['Obavezni', 'Prirodoslovni', 'Društveni', 'Prijemni'].map(tag => (
            <div key={tag} style={{ marginTop: 10 }}>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--muted)', padding: '2px 10px', marginBottom: 3 }}>
                {tag}
              </div>
              {SUBJECTS.filter(s => s.tag === tag).map(s => (
                <button key={s.id} onClick={() => setSelSubj(s)} style={{
                  width: '100%', padding: '7px 10px', borderRadius: 10, border: 'none',
                  fontFamily: 'var(--fb)', fontSize: 12, cursor: 'pointer', textAlign: 'left',
                  transition: 'all .15s', display: 'flex', alignItems: 'center', gap: 7,
                  background: selSubj?.id === s.id ? `${s.color}14` : 'transparent',
                  color: selSubj?.id === s.id ? s.color : 'var(--muted)',
                  fontWeight: selSubj?.id === s.id ? 700 : 400,
                }}>
                  <span style={{ color: s.color, fontSize: 14, width: 18, textAlign: 'center' }}>{s.sym}</span>
                  {s.name}
                </button>
              ))}
            </div>
          ))}

          {/* Usage na dnu — samo PRO */}
          {userPlan === 'pro' && (
            <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.06)' }}>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 6 }}>
                <span style={{ color: usageColor, fontWeight: 700 }}>{remaining}</span> poruka preostalo
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,.06)', borderRadius: 99, overflow: 'hidden', marginBottom: 4 }}>
                <div style={{ width: `${usagePct}%`, height: '100%', background: usageColor, borderRadius: 99, transition: 'width .4s' }} />
              </div>
              {usage.budgetUsedPct > 0 && (
                <>
                  <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 3, marginTop: 6 }}>
                    AI budžet: ${usage.costUsd?.toFixed(2) || '0.00'} / $3.00
                  </div>
                  <div style={{ height: 3, background: 'rgba(255,255,255,.06)', borderRadius: 99, overflow: 'hidden', marginBottom: 4 }}>
                    <div style={{ width: `${usage.budgetUsedPct}%`, height: '100%', background: usage.budgetUsedPct > 80 ? '#f87171' : usageColor, borderRadius: 99, transition: 'width .4s' }} />
                  </div>
                </>
              )}
              <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 2 }}>
                PRO · 150 poruka/mj · $3 budžet · Reset 1. u mj.
              </div>
            </div>
          )}
        </div>

        {/* ── CENTER — chat ── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 20, paddingBottom: 20, minWidth: 0, paddingLeft: 20, paddingRight: 20 }}>

          {/* Chat body */}
          <div ref={chatBodyRef} style={{
            flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column',
            gap: 14, paddingRight: 4,
            scrollbarWidth: 'thin', scrollbarColor: 'rgba(75,123,255,.2) transparent',
          }}>
            {/* Quick prompts — samo za PRO s porukama */}
            {messages.length <= 1 && canSend && (
              <div style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                  Brza pitanja
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                  {QUICK_PROMPTS.map(p => (
                    <button key={p.label} onClick={() => send(p.text)} style={{
                      padding: '7px 13px', borderRadius: 999, fontSize: 12,
                      border: '1px solid rgba(255,255,255,.08)',
                      background: 'rgba(255,255,255,.03)', color: 'var(--muted)',
                      cursor: 'pointer', fontFamily: 'var(--fb)', transition: 'all .15s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(75,123,255,.35)'; e.currentTarget.style.color = 'var(--blue)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.08)'; e.currentTarget.style.color = 'var(--muted)' }}
                    >{p.label}</button>
                  ))}
                </div>
              </div>
            )}

            {messages.map(msg => <Message key={msg.id} msg={msg} />)}

            {loading && !streaming && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
                <div style={{
                  width: 30, height: 30, borderRadius: 10, flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14,
                }}>🤖</div>
                <div style={{ padding: '11px 15px', borderRadius: '16px 16px 16px 4px', background: 'linear-gradient(160deg, rgba(255,255,255,.045), rgba(255,255,255,.02))', border: '1px solid rgba(255,255,255,.08)' }}>
                  <TypingDots />
                </div>
              </div>
            )}
          </div>

          {/* Paywall banner — za sve koji nisu PRO */}
          {user && userPlan !== 'pro' && (
            <div style={{
              margin: '12px 0 8px', padding: '14px 18px', borderRadius: 16,
              background: 'linear-gradient(135deg, rgba(75,123,255,.1), rgba(124,92,252,.07))',
              border: '1px solid rgba(75,123,255,.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--text)', marginBottom: 3 }}>
                  🔒 AI Profesor je dostupan uz PRO plan
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                  150 poruka/mj · Plan kontekst · Streaming odgovori · 19,99€/mj
                </div>
              </div>
              <button onClick={() => router.push('/pro')} style={{
                padding: '10px 18px', borderRadius: 12, border: 'none', flexShrink: 0,
                background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                color: '#fff', fontSize: 13, fontWeight: 800,
                cursor: 'pointer', fontFamily: 'var(--fb)', whiteSpace: 'nowrap',
                boxShadow: '0 4px 14px rgba(75,123,255,.3)',
              }}>Otključaj PRO →</button>
            </div>
          )}

          {/* Login banner */}
          {!user && (
            <div style={{
              margin: '12px 0 8px', padding: '12px 16px', borderRadius: 14,
              background: 'rgba(75,123,255,.07)', border: '1px solid rgba(75,123,255,.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            }}>
              <span style={{ fontSize: 13, color: 'var(--muted)' }}>🔒 Prijavi se za pristup AI Profesoru</span>
              <button onClick={() => router.push('/prijava')} style={{
                padding: '8px 16px', borderRadius: 10, border: 'none',
                background: 'linear-gradient(135deg, var(--blue), var(--violet))',
                color: '#fff', fontSize: 12, fontWeight: 800,
                cursor: 'pointer', fontFamily: 'var(--fb)',
              }}>Prijava →</button>
            </div>
          )}

          {/* Error */}
          {error && (
            <div style={{ marginBottom: 8, padding: '9px 12px', borderRadius: 10, background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.18)', fontSize: 12, color: '#f87171' }}>
              {error}
            </div>
          )}

          {/* Input */}
          <div style={{
            display: 'flex', gap: 8, padding: '12px 14px', borderRadius: 18,
            background: 'linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012))',
            border: `1px solid ${canSend ? 'rgba(255,255,255,.08)' : 'rgba(255,255,255,.04)'}`,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
              disabled={!canSend}
              placeholder={
                !user                  ? 'Prijavi se za pristup...' :
                userPlan !== 'pro'     ? 'AI Profesor je dostupan uz PRO plan...' :
                remaining === 0        ? 'Miesečni limit dostignut — resetira se 1. u miesecu' :
                selSubj                ? `Pitaj o ${selSubj.name}...` :
                                         'Postavi pitanje o gradivu mature...'
              }
              rows={1}
              style={{
                flex: 1, background: 'transparent', border: 'none', outline: 'none',
                color: 'var(--text)', fontSize: 14, fontFamily: 'var(--fb)',
                resize: 'none', lineHeight: 1.5, minHeight: 24, maxHeight: 120,
                opacity: canSend ? 1 : 0.4,
              }}
              onInput={e => {
                e.target.style.height = 'auto'
                e.target.style.height = Math.min(120, e.target.scrollHeight) + 'px'
              }}
            />
            <button
              onClick={() => streaming ? abort() : send()}
              disabled={!canSend && !streaming}
              style={{
                width: 36, height: 36, borderRadius: 10, border: 'none', flexShrink: 0,
                background: !canSend && !streaming
                  ? 'rgba(255,255,255,.06)'
                  : 'linear-gradient(135deg, var(--blue), var(--violet))',
                color: !canSend && !streaming ? 'rgba(255,255,255,.2)' : '#fff',
                fontSize: 16, cursor: !canSend && !streaming ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all .15s',
                boxShadow: !canSend && !streaming ? 'none' : '0 4px 14px rgba(75,123,255,.3)',
              }}
            >
              {streaming ? '⬛' : loading
                ? <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid rgba(255,255,255,.3)', borderTopColor: '#fff', animation: 'spin 1s linear infinite' }} />
                : '→'}
            </button>
          </div>

          <div style={{ marginTop: 6, display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--muted)', fontWeight: 600 }}>
            <span>Enter za slanje · Shift+Enter novi red</span>
            {userPlan === 'pro' && (
              <span style={{ color: remaining <= 10 ? '#f87171' : 'var(--muted)' }}>
                {remaining} / {usage.limit} poruka ovaj mj.
                {usage.costUsd > 0 && ` · $${usage.costUsd?.toFixed(2)}`}
              </span>
            )}
          </div>
        </div>

        {/* ── RIGHT sidebar — plan kontekst ── */}
        <div className="ai-sidebar-right" style={{
          width: 260, flexShrink: 0, paddingTop: 20, paddingLeft: 20,
          display: 'flex', flexDirection: 'column', gap: 14,
          borderLeft: '1px solid rgba(255,255,255,.06)',
          overflowY: 'auto',
        }}>
          {/* Plan summary */}
          {plan ? (
            <div style={{ borderRadius: 20, padding: '16px', background: 'linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012))', border: '1px solid rgba(255,255,255,.08)' }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>Tvoj plan</div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: 12 }}>
                  <span style={{ color: 'var(--muted)' }}>Napredak</span>
                  <span style={{ fontWeight: 800, color: 'var(--blue)' }}>{napredakPct}%</span>
                </div>
                <div style={{ height: 4, borderRadius: 99, background: 'rgba(255,255,255,.06)', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${napredakPct}%`, borderRadius: 99, background: 'linear-gradient(90deg, var(--blue), var(--violet))', transition: 'width .6s' }} />
                </div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 3 }}>{completedWeeks} / {totalWeeks} tjedana</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                {(plan.subjects || []).map(s => (
                  <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '6px 9px', borderRadius: 9, background: `${s.color}0e`, border: `1px solid ${s.color}1e` }}>
                    <span style={{ fontSize: 12 }}>{s.sym}</span>
                    <span style={{ fontSize: 11, fontWeight: 700 }}>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div style={{ borderRadius: 20, padding: '16px', background: 'rgba(255,255,255,.02)', border: '1px dashed rgba(255,255,255,.08)', textAlign: 'center' }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>📋</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 10 }}>Nemaš aktivan plan.</div>
              <button onClick={() => router.push('/plan-ucenja')} style={{ padding: '7px 12px', borderRadius: 9, border: 'none', background: 'linear-gradient(135deg, var(--blue), var(--violet))', color: '#fff', fontSize: 11, fontWeight: 800, cursor: 'pointer', fontFamily: 'var(--fb)' }}>
                Kreiraj plan →
              </button>
            </div>
          )}

          {/* Sljedeći tjedan */}
          {nextWeek && (
            <div style={{ borderRadius: 20, padding: '16px', background: 'linear-gradient(135deg, rgba(75,123,255,.08), rgba(124,92,252,.05))', border: '1px solid rgba(75,123,255,.18)' }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10 }}>Sljedeći tjedan</div>
              <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 3 }}>{nextWeek.subject_name}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.5, marginBottom: 10 }}>{nextWeek.topic}</div>
              <button
                onClick={() => send(`Objasni mi gradivo: ${nextWeek.subject_name} — ${nextWeek.topic}`)}
                disabled={!canSend}
                style={{
                  width: '100%', padding: '7px', borderRadius: 9, border: 'none',
                  background: canSend ? 'rgba(75,123,255,.15)' : 'rgba(255,255,255,.04)',
                  color: canSend ? 'var(--blue)' : 'var(--muted)',
                  fontSize: 11, fontWeight: 800,
                  cursor: canSend ? 'pointer' : 'not-allowed',
                  fontFamily: 'var(--fb)',
                }}
              >Pitaj AI o ovoj temi →</button>
            </div>
          )}

          {/* Upozorenja */}
          {analysis?.warnings?.length > 0 && (
            <div style={{ borderRadius: 20, padding: '16px', background: 'rgba(233,180,70,.06)', border: '1px solid rgba(233,180,70,.18)' }}>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>⚠️ Upozorenja</div>
              {analysis.warnings.slice(0, 2).map((w, i) => (
                <div key={i} style={{ fontSize: 11, color: 'var(--muted)', lineHeight: 1.55, marginBottom: i < analysis.warnings.length - 1 ? 6 : 0 }}>{w.message}</div>
              ))}
            </div>
          )}

          {/* Novi razgovor */}
          <button
            onClick={() => setMessages([{ role: 'ai', text: `Novi razgovor. ${selSubj ? `Predmet: **${selSubj.name}**. ` : ''}Što te zanima?`, id: Date.now() }])}
            style={{
              width: '100%', padding: '10px', borderRadius: 14,
              border: '1px solid rgba(255,255,255,.08)',
              background: 'rgba(255,255,255,.03)', color: 'var(--muted)',
              fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'var(--fb)',
              transition: 'all .15s',
            }}
          >+ Novi razgovor</button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ai-sidebar-right { display: none !important; }
          .ai-sidebar-left  { display: none !important; }
        }
        @media (max-width: 640px) {
          .ai-sidebar-left { display: none !important; }
        }
      `}</style>
    </div>
  )
}
