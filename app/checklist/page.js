'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { ALL_SUBJECTS, SUBJECT_GROUPS, CHECKLIST_DATA, MATURA_DATE } from './data'
import { useAuth } from '@/lib/hooks/useAuth'
import { usePageTracking } from '@/lib/hooks/usePageTracking'
import { createClient } from '@/lib/supabase/client'

const LS_CHECKED  = 'maturiraj_checklist_v1'
const LS_SUBJECTS = 'maturiraj_subjects_v1'

// ─── Helpers ──────────────────────────────────────────────────────────────────
function deadlineChip(deadlineStr) {
  if (!deadlineStr) return null
  const today = new Date(); today.setHours(0,0,0,0)
  const dl   = new Date(deadlineStr)
  const diff = Math.round((dl - today) / 86400000)
  if (diff < 0)   return { label:`Rok prošao ${dl.toLocaleDateString('hr-HR',{day:'numeric',month:'short'})}`, color:'#f87171', bg:'rgba(248,113,113,.12)',  border:'rgba(248,113,113,.3)'  }
  if (diff === 0) return { label:'Rok danas!',                                                                    color:'#f87171', bg:'rgba(248,113,113,.15)',  border:'rgba(248,113,113,.4)'  }
  if (diff <= 7)  return { label:`Rok za ${diff} dan${diff===1?'':'a'}`,                                         color:'#fbbf24', bg:'rgba(251,191,36,.12)',   border:'rgba(251,191,36,.3)'   }
  return             { label:`Rok: ${dl.toLocaleDateString('hr-HR',{day:'numeric',month:'short'})}`,             color:'#94a3b8', bg:'rgba(148,163,184,.08)', border:'rgba(148,163,184,.2)'  }
}

function isVisible(item, subs) {
  if (!item.subjects) return true
  return item.subjects.some(s => subs.includes(s))
}

function daysUntil(date) {
  const today = new Date(); today.setHours(0,0,0,0)
  return Math.round((date - today) / 86400000)
}

// ─── Gamification ─────────────────────────────────────────────────────────────
const LS_STREAK       = 'maturiraj_streak_v1'
const LS_BONUS        = 'maturiraj_bonus_v1'
const LS_POPUP50      = 'maturiraj_popup50_v1'
const LS_LASTVISIT    = 'maturiraj_lastvisit_v1'
const LS_ACHIEVEMENTS = 'maturiraj_achievements_v1'

function itemXP(item) { return item.vazno ? 15 : 10 }

function computeXP(checkedState, userIsPro = false) {
  return CHECKLIST_DATA.flatMap(c => c.stavke)
    .filter(s => (userIsPro || !s.pro) && checkedState[s.id])
    .reduce((sum, s) => sum + itemXP(s), 0)
}

const LEVELS = [
  { min:0,    label:'Početnik',    color:'#94a3b8' },
  { min:100,  label:'Učenik',      color:'#818cf8' },
  { min:250,  label:'Marljivac',   color:'#34d399' },
  { min:500,  label:'Natjecatelj', color:'#fbbf24' },
  { min:800,  label:'Maturaš',     color:'#f87171' },
  { min:1200, label:'Legenda',     color:'#e879f9' },
]
const LEVEL_THRESHOLDS = [0, 100, 250, 500, 800, 1200, Infinity]

function getLevel(xp) {
  let idx = 0
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].min) { idx = i; break }
  }
  return { index: idx + 1, ...LEVELS[idx], current: LEVEL_THRESHOLDS[idx], next: LEVEL_THRESHOLDS[idx + 1] }
}

function updateStreak(prev) {
  const today = new Date().toISOString().slice(0, 10)
  if (prev.lastDate === today) return prev
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10)
  const count = prev.lastDate === yesterday ? prev.count + 1 : 1
  return { count, lastDate: today, longest: Math.max(prev.longest || 0, count) }
}

// ─── Confetti ─────────────────────────────────────────────────────────────────
function Confetti({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3400)
    return () => clearTimeout(t)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  const pieces = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: (i * 37 + 11) % 100,
    color: ['#4ade80','#818cf8','#fbbf24','#f87171','#34d399','#60a5fa','#f472b6'][i % 7],
    delay: (i * 0.07) % 0.75,
    w: 7 + (i % 5) * 2,
    h: 4 + (i % 3) * 2,
  }))
  return (
    <div style={{position:'fixed', inset:0, zIndex:8000, pointerEvents:'none', overflow:'hidden'}}>
      {pieces.map(p => (
        <div key={p.id} style={{
          position:'absolute', left:`${p.x}%`, top:'-14px',
          width:p.w, height:p.h, background:p.color, borderRadius:2,
          animation:`confettiFall 3.2s ease-in ${p.delay}s both`,
        }}/>
      ))}
    </div>
  )
}

// ─── Milestone Toast ──────────────────────────────────────────────────────────
function MilestoneToast({ data, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600)
    return () => clearTimeout(t)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div style={{
      position:'fixed', top:74, left:'50%', transform:'translateX(-50%)', zIndex:2000,
      background:'var(--bg)', border:`1px solid ${data.color}55`, borderRadius:14,
      padding:'13px 22px', display:'flex', alignItems:'center', gap:12,
      boxShadow:`0 8px 40px rgba(0,0,0,.5), 0 0 30px ${data.color}22`,
      animation:'milestoneIn .35s cubic-bezier(.16,1,.3,1) forwards',
      pointerEvents:'none', maxWidth:'calc(100vw - 48px)',
    }}>
      <div style={{fontSize:22, lineHeight:1}}>{data.icon}</div>
      <div>
        <div style={{fontWeight:800, fontSize:13, color:data.color}}>{data.title}</div>
        <div style={{fontSize:11, color:'var(--muted)', marginTop:1}}>{data.sub}</div>
        {data.upgrade && (
          <Link href="/cijene" style={{display:'inline-block', marginTop:6, fontSize:11, fontWeight:700, color:'#fbbf24', textDecoration:'none', letterSpacing:'.02em'}}>Otključaj AI asistenta →</Link>
        )}
      </div>
    </div>
  )
}

// ─── Subject Selector (onboarding + editor modal) ─────────────────────────────
function SubjectSelector({ initial, onSave }) {
  const [selected, setSelected] = useState(initial || ['hrv'])

  function toggle(id) {
    const sub = ALL_SUBJECTS.find(s => s.id === id)
    if (sub?.required) return
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <div style={{position:'fixed', inset:0, zIndex:1000, background:'rgba(7,9,15,.92)', backdropFilter:'blur(18px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px'}}>
      <div style={{background:'var(--bg)', border:'1px solid var(--bdr)', borderRadius:20, padding:'36px 32px', maxWidth:520, width:'100%', maxHeight:'88vh', overflowY:'auto'}}>
        <div style={{fontSize:11, fontWeight:700, letterSpacing:'.12em', textTransform:'uppercase', color:'#818cf8', marginBottom:12}}>Personalizacija</div>
        <h2 style={{fontFamily:'var(--fh)', fontSize:'clamp(20px,3.5vw,28px)', fontWeight:800, margin:'0 0 8px'}}>Koje predmete polažeš?</h2>
        <p style={{fontSize:14, color:'var(--muted)', lineHeight:1.65, margin:'0 0 28px'}}>Checklist će prikazati samo stavke relevantne za tvoje predmete.</p>

        {SUBJECT_GROUPS.map(group => {
          const groupSubs = ALL_SUBJECTS.filter(s => s.group === group)
          return (
            <div key={group} style={{marginBottom:20}}>
              <div style={{fontSize:10, fontWeight:800, letterSpacing:'.12em', textTransform:'uppercase', color:'var(--muted)', marginBottom:10}}>{group}</div>
              <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
                {groupSubs.map(s => {
                  const on = selected.includes(s.id)
                  return (
                    <button key={s.id} type="button" onClick={() => toggle(s.id)} style={{
                      display:'flex', alignItems:'center', gap:6, padding:'7px 14px', borderRadius:10,
                      fontSize:13, fontWeight:600, cursor: s.required ? 'default' : 'pointer',
                      border:`1px solid ${on ? s.color+'66' : 'var(--bdr)'}`,
                      background: on ? `${s.color}18` : 'var(--s1)',
                      color: on ? s.color : 'var(--muted)',
                      transition:'all .15s',
                    }}>
                      <span style={{fontSize:14}}>{s.sym}</span>
                      {s.label}
                      {s.required && <span style={{fontSize:9, fontWeight:700, letterSpacing:'.06em', opacity:.6, marginLeft:2}}>UVIJEK</span>}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}

        <p style={{fontSize:12, color:'var(--muted)', margin:'4px 0 20px', fontStyle:'italic'}}>Nisi siguran/na? Preskoči i promijeni u bilo kada.</p>

        <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
          <button type="button" onClick={() => onSave(['hrv'])} style={{
            padding:'9px 18px', borderRadius:10, border:'1px solid var(--bdr)',
            background:'none', color:'var(--muted)', cursor:'pointer', fontSize:13, fontFamily:'var(--fb)'
          }}>Preskoči</button>
          <button type="button" onClick={() => onSave(selected)} style={{
            padding:'9px 22px', borderRadius:10, border:'none',
            background:'#818cf8', color:'#fff', cursor:'pointer', fontSize:14, fontWeight:700, fontFamily:'var(--fb)'
          }}>Potvrdi ({selected.length} predmeta) →</button>
        </div>
      </div>
    </div>
  )
}

// ─── Conversion Card (PRO upsell) ───────────────────────────────────────────
function ConversionModal({ onClose }) {
  return (
    <div style={{position:'fixed', inset:0, zIndex:3000, background:'rgba(7,9,15,.82)', backdropFilter:'blur(18px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px'}} onClick={onClose}>
      <div style={{background:'var(--bg)', border:'1px solid rgba(251,191,36,.3)', borderRadius:20, padding:'36px 32px', maxWidth:420, width:'100%', textAlign:'center', display:'flex', flexDirection:'column', alignItems:'center', gap:14, animation:'milestoneIn .35s cubic-bezier(.16,1,.3,1) forwards'}} onClick={e => e.stopPropagation()}>
        <div style={{fontSize:40, lineHeight:1}}>🎉</div>
        <div style={{fontFamily:'var(--fh)', fontSize:22, fontWeight:900}}>Odličan napredak!</div>
        <p style={{fontSize:14, color:'var(--muted)', lineHeight:1.7, margin:0}}>
          Dostigao/la si <strong style={{color:'#fbbf24'}}>50% pripreme</strong>. Otključaj sve alate za bolju pripremu: AI plan učenja, analiza slabih točaka i tjedni raspored.
        </p>
        <div style={{display:'flex', flexDirection:'column', gap:8, width:'100%', padding:'14px 18px', borderRadius:12, background:'rgba(251,191,36,.06)', border:'1px solid rgba(251,191,36,.15)'}}>
          {['🤖 AI plan učenja personaliziran za tvoje predmete','📊 Analiza slabih točaka po poglavljima','🔔 Tjedni AI digest — što učiti svaki tjedan'].map(f => (
            <div key={f} style={{fontSize:13, color:'var(--text)', textAlign:'left'}}>{f}</div>
          ))}
        </div>
        <Link href="/cijene" onClick={onClose} style={{width:'100%', display:'block', padding:'13px', borderRadius:12, background:'#fbbf24', color:'#07090F', fontWeight:800, fontSize:15, textDecoration:'none', textAlign:'center'}}>
          Pogledaj planove — od 9,99 €/mj →
        </Link>
        <button type="button" onClick={onClose} style={{background:'none', border:'none', fontSize:13, color:'var(--muted)', cursor:'pointer', fontFamily:'var(--fb)'}}>
          Možda kasnije
        </button>
      </div>
    </div>
  )
}

// ─── Matura karta ────────────────────────────────────────────────────────────────
function drawKarta(canvas, { subs, checked, level, totalXP, pct, allDays }) {
  const ctx = canvas.getContext('2d')
  const W = 800, H = 460
  canvas.width = W; canvas.height = H

  const rr = (x, y, w, h, r) => {
    ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }

  // BG + border
  ctx.fillStyle = '#07090F'
  ctx.fillRect(0, 0, W, H)
  ctx.strokeStyle = 'rgba(255,255,255,.1)'; ctx.lineWidth = 1
  ctx.strokeRect(0.5, 0.5, W-1, H-1)

  // Header band
  ctx.fillStyle = 'rgba(255,255,255,.03)'
  ctx.fillRect(0, 0, W, 68)

  // Green dot
  ctx.fillStyle = '#3ecf6e'; ctx.shadowColor = '#3ecf6e'; ctx.shadowBlur = 10
  ctx.beginPath(); ctx.arc(34, 34, 5, 0, Math.PI * 2); ctx.fill()
  ctx.shadowBlur = 0

  // Logo
  ctx.fillStyle = '#fff'; ctx.font = 'bold 17px system-ui,sans-serif'
  ctx.fillText('Maturiraj.hr', 48, 40)
  ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.font = '12px system-ui,sans-serif'
  ctx.fillText('Priprema: Državna matura 2026.', 48, 56)

  // Countdown chip
  if (allDays > 0) {
    const chip = `Do mature: ${allDays} dana`
    ctx.font = 'bold 11px system-ui,sans-serif'
    const cw = ctx.measureText(chip).width + 20
    ctx.fillStyle = 'rgba(251,191,36,.14)'; rr(W - cw - 16, 18, cw, 24, 12); ctx.fill()
    ctx.strokeStyle = 'rgba(251,191,36,.35)'; rr(W - cw - 16, 18, cw, 24, 12); ctx.stroke()
    ctx.fillStyle = '#fbbf24'; ctx.fillText(chip, W - cw - 6, 34)
  }

  // Level label (top-left, under header)
  ctx.fillStyle = 'rgba(255,255,255,.28)'; ctx.font = '10px system-ui,sans-serif'
  ctx.fillText('NAPREDAK PO KATEGORIJAMA', 28, 186)

  // Big pct (right)
  const pc = pct === 100 ? '#3ecf6e' : pct >= 50 ? '#60a5fa' : '#94a3b8'
  ctx.fillStyle = pc; ctx.font = 'bold 66px system-ui,sans-serif'
  ctx.textAlign = 'right'; ctx.fillText(`${pct}%`, W - 28, 152)
  ctx.fillStyle = level.color; ctx.font = 'bold 13px system-ui,sans-serif'
  ctx.fillText(`Niv. ${level.index} · ${level.label}`, W - 28, 171)
  ctx.fillStyle = 'rgba(255,255,255,.28)'; ctx.font = '11px system-ui,sans-serif'
  ctx.fillText(`${totalXP} XP`, W - 28, 187)
  ctx.textAlign = 'left'

  // Category rows
  const BARX = 200, BARW = 500, BARH = 8
  let y = 202
  CHECKLIST_DATA.forEach(cat => {
    const vis  = cat.stavke.filter(s => isVisible(s, subs) && !s.pro)
    if (!vis.length) return
    const done = vis.filter(s => checked[s.id]).length
    const fill = Math.round(done / vis.length * 100)

    ctx.fillStyle = 'rgba(255,255,255,.72)'; ctx.font = '14px system-ui,sans-serif'
    ctx.fillText(`${cat.sym} ${cat.label}`, 28, y)
    ctx.fillStyle = 'rgba(255,255,255,.3)'; ctx.font = '12px system-ui,sans-serif'
    ctx.fillText(`${done}/${vis.length}`, 28, y + 15)

    ctx.fillStyle = 'rgba(255,255,255,.07)'; rr(BARX, y - 11, BARW, BARH, 4); ctx.fill()
    if (fill > 0) {
      ctx.fillStyle = cat.color
      ctx.shadowColor = fill === 100 ? cat.color : 'transparent'; ctx.shadowBlur = fill === 100 ? 8 : 0
      rr(BARX, y - 11, BARW * fill / 100, BARH, 4); ctx.fill()
      ctx.shadowBlur = 0
    }
    ctx.fillStyle = fill === 100 ? cat.color : 'rgba(255,255,255,.32)'
    ctx.font = 'bold 11px system-ui,sans-serif'; ctx.textAlign = 'right'
    ctx.fillText(`${fill}%`, W - 28, y); ctx.textAlign = 'left'
    y += 52
  })

  // Subject pills
  ctx.fillStyle = 'rgba(255,255,255,.1)'; ctx.fillRect(0, H - 58, W, 1)
  let px = 28
  subs.forEach(subId => {
    const sub = ALL_SUBJECTS.find(s => s.id === subId)
    if (!sub) return
    const lbl = `${sub.sym} ${sub.label}`
    ctx.font = 'bold 11px system-ui,sans-serif'
    const tw = ctx.measureText(lbl).width; const pw = tw + 18
    if (px + pw > W - 28) return
    ctx.fillStyle = `${sub.color}22`; rr(px, H - 50, pw, 22, 11); ctx.fill()
    ctx.strokeStyle = `${sub.color}66`; rr(px, H - 50, pw, 22, 11); ctx.stroke()
    ctx.fillStyle = sub.color; ctx.fillText(lbl, px + 9, H - 35)
    px += pw + 8
  })

  // Footer
  ctx.fillStyle = 'rgba(255,255,255,.12)'; ctx.fillRect(0, H - 26, W, 1)
  ctx.fillStyle = 'rgba(255,255,255,.3)'; ctx.font = '11px system-ui,sans-serif'
  ctx.fillText('maturiraj.hr', 28, H - 10)
  ctx.textAlign = 'right'; ctx.fillStyle = 'rgba(255,255,255,.2)'
  ctx.fillText(new Date().toLocaleDateString('hr-HR'), W - 28, H - 10)
  ctx.textAlign = 'left'
}

function MaturaKartaModal({ subs, checked, level, totalXP, pct, allDays, onClose }) {
  const canvasRef     = useRef(null)
  const [dl, setDl]   = useState(false)

  useEffect(() => {
    if (canvasRef.current) drawKarta(canvasRef.current, { subs, checked, level, totalXP, pct, allDays })
  }, []) // eslint-disable-line

  function download() {
    const a = document.createElement('a')
    a.download = 'moja-matura-2026.png'
    a.href = canvasRef.current.toDataURL('image/png')
    a.click()
    setDl(true); setTimeout(() => setDl(false), 2500)
  }

  return (
    <div style={{position:'fixed', inset:0, zIndex:3000, background:'rgba(7,9,15,.88)', backdropFilter:'blur(18px)', display:'flex', alignItems:'center', justifyContent:'center', padding:'24px'}} onClick={onClose}>
      <div style={{background:'var(--bg)', border:'1px solid var(--bdr)', borderRadius:20, padding:'24px', maxWidth:860, width:'100%', display:'flex', flexDirection:'column', gap:14}} onClick={e => e.stopPropagation()}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
          <div>
            <div style={{fontFamily:'var(--fh)', fontSize:18, fontWeight:800}}>Moja matura karta</div>
            <div style={{fontSize:13, color:'var(--muted)', marginTop:3}}>Preuzmi sliku i podijeli na Instagram Stories 📸</div>
          </div>
          <button type="button" onClick={onClose} style={{background:'none', border:'none', fontSize:22, color:'var(--muted)', cursor:'pointer', padding:'0 4px', lineHeight:1}}>&#x2715;</button>
        </div>
        <div style={{borderRadius:12, overflow:'hidden', border:'1px solid var(--bdr)'}}>
          <canvas ref={canvasRef} style={{display:'block', maxWidth:'100%', height:'auto'}} />
        </div>
        <div style={{display:'flex', gap:10, justifyContent:'flex-end'}}>
          <button type="button" onClick={onClose} style={{padding:'8px 16px', borderRadius:9, border:'1px solid var(--bdr)', background:'none', color:'var(--muted)', cursor:'pointer', fontSize:13, fontFamily:'var(--fb)'}}>Zatvori</button>
          <button type="button" onClick={download} style={{padding:'8px 22px', borderRadius:9, border:'none', background:'#818cf8', color:'#fff', cursor:'pointer', fontSize:13, fontWeight:700, fontFamily:'var(--fb)'}}>
            {dl ? 'Preuzeto! ✓' : 'Preuzmi PNG ↓'}
          </button>
        </div>
      </div>
    </div>
  )
}

function ConversionCard({ pct }) {
  return (
    <div style={{marginBottom:20, padding:'18px 22px', borderRadius:14, background:'rgba(251,191,36,.06)', border:'1px solid rgba(251,191,36,.22)', display:'flex', flexDirection:'column', gap:10}}>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
        <span style={{fontSize:16}}>🏆</span>
        <span style={{fontWeight:800, fontSize:13, color:'#fbbf24'}}>Odlično — ozbiljan/na si kandidat!</span>
      </div>
      <p style={{margin:0, fontSize:13, color:'var(--muted)', lineHeight:1.65}}>
        Na {pct}% pripreme. Pro plan uključuje AI plan učenja s personaliziranim rasporedom do mature.
      </p>
      <Link href="/cijene" style={{alignSelf:'flex-start', fontSize:12, fontWeight:700, padding:'7px 16px', borderRadius:9, background:'rgba(251,191,36,.15)', border:'1px solid rgba(251,191,36,.35)', color:'#fbbf24', textDecoration:'none'}}>
        Pogledaj Pro plan →
      </Link>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Checklist() {
  usePageTracking('checklist')
  const [checked,           setChecked]           = useState({})
  const [subjects,          setSubjects]          = useState(null)
  const [openCats,          setOpenCats]          = useState({ admin:true, ispiti:true })
  const [confirmReset,      setConfirmReset]      = useState(false)
  const [xpPop,             setXpPop]             = useState(null)
  const [shareDone,         setShareDone]         = useState(false)
  const [hydrated,          setHydrated]          = useState(false)
  const [showSubjectEditor, setShowSubjectEditor] = useState(false)
  const [streak,            setStreak]            = useState({ count:0, lastDate:null, longest:0 })
  const [milestoneQueue,    setMilestoneQueue]    = useState([])
  const [syncStatus,        setSyncStatus]        = useState('idle') // 'idle'|'syncing'|'synced'|'error'
  const [bonusXP,           setBonusXP]           = useState(0)
  const [bonuses,           setBonuses]           = useState({ cats:{}, streakAwarded:0, pct100:false })
  const [confetti,          setConfetti]          = useState(false)
  const [showConvModal,     setShowConvModal]     = useState(false)
  const [popup50Shown,      setPopup50Shown]      = useState(false)
  const [showKarta,         setShowKarta]         = useState(false)
  const [achievements,      setAchievements]      = useState([])
  const [daysSinceVisit,    setDaysSinceVisit]    = useState(0)

  const { user, isPro } = useAuth()

  // ── Hydrate: localStorage first (instant), then Supabase if logged in ──
  useEffect(() => {
    async function hydrate() {
      // 1. Always load localStorage first — no flash
      try {
        const savedChecked  = localStorage.getItem(LS_CHECKED)
        const savedSubjects = localStorage.getItem(LS_SUBJECTS)
        const savedStreak   = localStorage.getItem(LS_STREAK)
        if (savedChecked)  setChecked(JSON.parse(savedChecked))
        if (savedSubjects) setSubjects(JSON.parse(savedSubjects))
        if (savedStreak)   setStreak(JSON.parse(savedStreak))
      } catch {}
      try {
        const savedBonus = localStorage.getItem(LS_BONUS)
        if (savedBonus) {
          const b = JSON.parse(savedBonus)
          setBonusXP(b.xp || 0)
          setBonuses({ cats: b.cats || {}, streakAwarded: b.streakAwarded || 0, pct100: !!b.pct100 })
        }
        if (localStorage.getItem(LS_POPUP50)) setPopup50Shown(true)
      } catch {}
      try {
        const savedAch = localStorage.getItem(LS_ACHIEVEMENTS)
        if (savedAch) setAchievements(JSON.parse(savedAch))
        const lastVisit = localStorage.getItem(LS_LASTVISIT)
        if (lastVisit) {
          const today = new Date().toISOString().slice(0,10)
          const gap = Math.round((new Date(today) - new Date(lastVisit)) / 86400000)
          if (gap > 0) setDaysSinceVisit(gap)
        }
        localStorage.setItem(LS_LASTVISIT, new Date().toISOString().slice(0,10))
      } catch {}

      // 2. If logged in, load from Supabase (source of truth) and sync
      if (user) {
        setSyncStatus('syncing')
        try {
          const db = createClient()
          const [progRes, confRes] = await Promise.all([
            db.from('checklist_progress').select('item_id').eq('user_id', user.id),
            db.from('checklist_config').select('subjects,streak').eq('user_id', user.id).maybeSingle(),
          ])

          if (progRes.data) {
            const dbChecked = {}
            progRes.data.forEach(r => { dbChecked[r.item_id] = true })

            // Migration: LS has data, DB is empty → bulk migrate
            if (progRes.data.length === 0) {
              try {
                const lsRaw = localStorage.getItem(LS_CHECKED)
                const lsObj = lsRaw ? JSON.parse(lsRaw) : {}
                const rows  = Object.entries(lsObj)
                  .filter(([, v]) => v)
                  .map(([item_id]) => ({ user_id: user.id, item_id, checked_at: new Date().toISOString() }))
                if (rows.length > 0) {
                  await db.from('checklist_progress').insert(rows)
                  rows.forEach(r => { dbChecked[r.item_id] = true })
                  setMilestoneQueue(prev => [...prev, { icon: '☁️', color: '#818cf8', title: 'Napredak prenesen!', sub: `${rows.length} stavki sinkronizirano s oblakom` }])
                }
              } catch {}
            }

            setChecked(dbChecked)
            try { localStorage.setItem(LS_CHECKED, JSON.stringify(dbChecked)) } catch {}
          }

          if (confRes.data) {
            if (confRes.data.subjects) {
              setSubjects(confRes.data.subjects)
              try { localStorage.setItem(LS_SUBJECTS, JSON.stringify(confRes.data.subjects)) } catch {}
            }
            if (confRes.data.streak) {
              setStreak(confRes.data.streak)
              try { localStorage.setItem(LS_STREAK, JSON.stringify(confRes.data.streak)) } catch {}
            }
          }

          setSyncStatus('synced')
          setTimeout(() => setSyncStatus('idle'), 2500)
        } catch {
          setSyncStatus('error')
          setTimeout(() => setSyncStatus('idle'), 3000)
        }
      }

      setHydrated(true)
    }
    hydrate()
  }, [user?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!hydrated) return
    try { localStorage.setItem(LS_CHECKED, JSON.stringify(checked)) } catch {}
  }, [checked, hydrated])

  function saveSubjects(subs) {
    try { localStorage.setItem(LS_SUBJECTS, JSON.stringify(subs)) } catch {}
    setSubjects(subs)
    setShowSubjectEditor(false)
    if (user) {
      createClient().from('checklist_config')
        .upsert({ user_id: user.id, subjects: subs, updated_at: new Date().toISOString() }, { onConflict: 'user_id', ignoreDuplicates: false })
        .then()
    }
  }

  function addMilestone(data, delay = 0) {
    setTimeout(() => {
      setMilestoneQueue(prev => [...prev, data])
      setAchievements(prev => {
        const entry = { icon: data.icon, title: data.title, date: new Date().toISOString().slice(0,10) }
        const next = [entry, ...prev].slice(0, 10)
        try { localStorage.setItem(LS_ACHIEVEMENTS, JSON.stringify(next)) } catch {}
        return next
      })
    }, delay)
  }

  function toggle(id, e) {
    const wasChecked = !!checked[id]
    const item       = CHECKLIST_DATA.flatMap(c => c.stavke).find(s => s.id === id)
    const xp         = item ? itemXP(item) : 10

    if (!wasChecked) {
      const nextChecked = { ...checked, [id]: true }

      // ── Bonus XP: compute all bonuses atomically ───────────────
      let bxpDelta = 0
      const nb     = { ...bonuses }

      // +50: first time completing a category
      const cat        = CHECKLIST_DATA.find(c => c.stavke.some(s => s.id === id))
      const nonPro     = cat ? cat.stavke.filter(s => !s.pro || isPro) : []
      const wasAllDone = nonPro.every(s => checked[s.id])
      const willAllDone= nonPro.every(s => nextChecked[s.id])
      const catBonus   = !!(cat && !wasAllDone && willAllDone && !bonuses.cats[cat.id])
      if (catBonus) { bxpDelta += 50; nb.cats = { ...nb.cats, [cat.id]: true } }

      // +100: every 7-day streak milestone — only on vazno items
      const newStreak      = item?.vazno ? updateStreak(streak) : streak
      const streakMilestone= Math.floor(newStreak.count / 7)
      const streakBonus    = streakMilestone > 0 && streakMilestone > bonuses.streakAwarded
      if (streakBonus) { bxpDelta += 100; nb.streakAwarded = streakMilestone }

      // +500: first time reaching 100% (one-time)
      const currSubs   = subjects || ['hrv']
      const allVis     = CHECKLIST_DATA.flatMap(c => c.stavke.filter(s => isVisible(s, currSubs) && (!s.pro || isPro)))
      const currPctVal = allVis.length ? Math.round(allVis.filter(s => checked[s.id]).length      / allVis.length * 100) : 0
      const nextPctVal = allVis.length ? Math.round(allVis.filter(s => nextChecked[s.id]).length  / allVis.length * 100) : 0
      const pct100Bonus= nextPctVal === 100 && currPctVal < 100 && !bonuses.pct100
      if (pct100Bonus) { bxpDelta += 500; nb.pct100 = true }

      // ── Level detection (includes all bonus XP) ────────────────
      const oldXP  = computeXP(checked, isPro) + bonusXP
      const newXP  = computeXP(nextChecked, isPro) + bonusXP + bxpDelta
      const oldLvl = getLevel(oldXP)
      const newLvl = getLevel(newXP)

      // ── Persist bonus state ────────────────────────────────────
      if (bxpDelta > 0) {
        const finalBXP = bonusXP + bxpDelta
        setBonusXP(finalBXP)
        setBonuses(nb)
        try { localStorage.setItem(LS_BONUS, JSON.stringify({ xp: finalBXP, ...nb })) } catch {}
      }

      // ── Milestone toasts (staggered) + achievement log ──────────
      if (newLvl.index > oldLvl.index) {
        addMilestone({
          icon: '⬆️', color: newLvl.color,
          title: `Nivel ${newLvl.index} — ${newLvl.label}!`,
          sub: `Dostigao/la si ${newXP} XP`,
          upgrade: !isPro && newLvl.index >= 3,
        }, 120)
      }

      if (cat && !wasAllDone && willAllDone) {
        const delay = newLvl.index > oldLvl.index ? 3200 : 120
        addMilestone({
          icon: cat.sym, color: cat.color,
          title: `${cat.label} završen!`,
          sub: catBonus ? 'Sve stavke označene ✓ · +50 XP bonus' : 'Sve stavke označene ✓',
        }, delay)
      }

      if (streakBonus) {
        addMilestone({
          icon: '🔥', color: '#fb923c',
          title: `${newStreak.count}-dnevni streak!`,
          sub: '+100 XP bonus — nevjerojatno!',
        }, 1400)
      }

      if (pct100Bonus) {
        setConfetti(true)
        addMilestone({
          icon: '🏆', color: '#fbbf24',
          title: 'Checklist ZAVRŠEN!',
          sub: '+500 XP · Spreman/na si za maturu! 🎉',
        }, 600)
      }

      // ── Streak persist ─────────────────────────────────────────
      if (item?.vazno) {
        setStreak(newStreak)
        try { localStorage.setItem(LS_STREAK, JSON.stringify(newStreak)) } catch {}
        if (user) {
          createClient().from('checklist_config')
            .upsert({ user_id: user.id, streak: newStreak, updated_at: new Date().toISOString() }, { onConflict: 'user_id', ignoreDuplicates: false })
            .then()
        }
      }
    }

    setChecked(prev => ({ ...prev, [id]: !prev[id] }))

    // Background DB sync (fire-and-forget — optimistic update already applied)
    if (user) {
      const db = createClient()
      if (!wasChecked) {
        db.from('checklist_progress')
          .upsert({ user_id: user.id, item_id: id, checked_at: new Date().toISOString() })
          .then()
      } else {
        db.from('checklist_progress')
          .delete().eq('user_id', user.id).eq('item_id', id)
          .then()
      }
    }

    if (!wasChecked && e) {
      const rect = e.currentTarget.getBoundingClientRect()
      setXpPop({ id, x: rect.left + rect.width / 2, y: rect.top, xp })
      setTimeout(() => setXpPop(p => p?.id === id ? null : p), 900)
    }
  }

  function handleReset() {
    if (!confirmReset) { setConfirmReset(true); return }
    setChecked({})
    setBonusXP(0)
    setBonuses({ cats:{}, streakAwarded:0, pct100:false })
    setStreak({ count:0, lastDate:null, longest:0 })
    setAchievements([])
    setPopup50Shown(false)
    setConfirmReset(false)
    try { localStorage.removeItem(LS_CHECKED)       } catch {}
    try { localStorage.removeItem(LS_BONUS)         } catch {}
    try { localStorage.removeItem(LS_POPUP50)       } catch {}
    try { localStorage.removeItem(LS_STREAK)        } catch {}
    try { localStorage.removeItem(LS_ACHIEVEMENTS)  } catch {}
    if (user) {
      createClient().from('checklist_progress')
        .delete().eq('user_id', user.id)
        .then()
    }
  }

  function expandAll()  { const o = {}; CHECKLIST_DATA.forEach(c => { o[c.id] = true  }); setOpenCats(o) }
  function collapseAll(){ setOpenCats({}) }

  async function shareProgress() {
    const subs  = subjects || ['hrv']
    const lines = ['Moja priprema: Drzavna matura 2026.', '']
    CHECKLIST_DATA.forEach(cat => {
      const vis  = cat.stavke.filter(s => isVisible(s, subs) && !s.pro)
      const done = vis.filter(s => checked[s.id]).length
      lines.push(`${cat.sym} ${cat.label}: ${done}/${vis.length}`)
    })
    const allVis  = CHECKLIST_DATA.flatMap(c => c.stavke.filter(s => isVisible(s, subs) && !s.pro))
    const allDone = allVis.filter(s => checked[s.id]).length
    const pctShare = allVis.length > 0 ? Math.round(allDone / allVis.length * 100) : 0
    lines.push(`\nUkupno: ${allDone}/${allVis.length} (${pctShare}%)`)
    lines.push('maturiraj.hr')
    const text = lines.join('\n')
    try {
      await navigator.clipboard.writeText(text)
      setShareDone(true)
      setTimeout(() => setShareDone(false), 2000)
    } catch {
      try {
        const ta = document.createElement('textarea')
        ta.value = text
        ta.style.cssText = 'position:fixed;top:-9999px;opacity:0'
        document.body.appendChild(ta)
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
        setShareDone(true)
        setTimeout(() => setShareDone(false), 2000)
      } catch {}
    }
  }

  const subs         = subjects || ['hrv']
  const allDays      = daysUntil(MATURA_DATE)
  const visibleItems = CHECKLIST_DATA.flatMap(c => c.stavke.filter(s => isVisible(s, subs) && (!s.pro || isPro)))
  const totalChecked = visibleItems.filter(s => checked[s.id]).length
  const totalStavke  = visibleItems.length
  const pct          = totalStavke > 0 ? Math.round(totalChecked / totalStavke * 100) : 0

  const totalXP  = computeXP(checked, isPro) + bonusXP
  const level    = getLevel(totalXP)
  const xpToNext = level.next === Infinity ? null : level.next - level.current
  const xpInLvl  = totalXP - level.current
  const xpPct    = xpToNext ? Math.min(100, Math.round(xpInLvl / xpToNext * 100)) : 100

  const motivMsg =
    pct === 100 ? '🎉 Sve gotovo — spreman/na si za maturu!' :
    pct >= 90   ? `Još samo ${totalStavke - totalChecked} stavki do kraja! 💪` :
    pct >= 75   ? 'Odlično napredoješ! Nastavi ovako 🔥' :
    pct >= 50   ? 'Na dobrom si putu. Polako, ali sigurno.' :
    pct > 0     ? 'Nastavi, ide dobro! Svaki klik broji.' :
                  'Označi prvu stavku i kreni!'

  function isUrgentCat(id) {
    if (id === 'dan'    && allDays <= 1) return true
    if (id === 'tjedan' && allDays <= 7) return true
    return false
  }
  function isPriorityCat(id) {
    return id === 'tjedan' && allDays <= 14 && !isUrgentCat(id)
  }

  const allExpanded = CHECKLIST_DATA.every(c => !!openCats[c.id])
  const countdownLabel =
    allDays > 0   ? `Do mature (okvirno): ${allDays} dana` :
    allDays === 0 ? 'Danas je matura!' :
    null

  const aiNudge = isPro ? (() => {
    const behind = CHECKLIST_DATA
      .map(c => {
        const vis  = c.stavke.filter(s => isVisible(s, subs) && !s.pro)
        const done = vis.filter(s => checked[s.id]).length
        return { cat: c, pct: vis.length ? Math.round(done / vis.length * 100) : 100 }
      })
      .filter(x => x.pct < 100)
      .sort((a, b) => a.pct - b.pct)
    if (!behind.length) return 'Sve kategorije završene — sve si pripremio/la! 🎉'
    const top = behind[0]
    return `Prioritet: ${top.cat.label} — ${top.pct}% gotovo. Fokusiraj se ovdje sada.`
  })() : null

  const nextFocusItem = pct > 0 && pct < 100 ? (() => {
    const candidates = CHECKLIST_DATA.flatMap(c => {
      const first = c.stavke.find(s => isVisible(s, subs) && (!s.pro || isPro) && !checked[s.id] && s.vazno)
      return first ? [{ item: first, cat: c }] : []
    })
    if (!candidates.length) return null
    const score = id => isUrgentCat(id) ? 0 : isPriorityCat(id) ? 1 : 2
    candidates.sort((a, b) => score(a.cat.id) - score(b.cat.id))
    return { ...candidates[0].item, catLabel: candidates[0].cat.label, catSym: candidates[0].cat.sym, catColor: candidates[0].cat.color, catId: candidates[0].cat.id }
  })() : null

  // ── 50% conversion popup — after pct is computed ──
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!hydrated || isPro || popup50Shown || pct < 50 || pct === 100 || totalChecked === 0) return
    setShowConvModal(true)
    setPopup50Shown(true)
    try { localStorage.setItem(LS_POPUP50, '1') } catch {}
  }, [pct, hydrated]) // eslint-disable-line

  if (!hydrated) return (
    <div style={{minHeight:'100vh', background:'var(--bg)'}}>
      <div style={{maxWidth:720, margin:'0 auto', padding:'90px 24px 40px', display:'flex', flexDirection:'column', gap:12}}>
        <div style={{height:24, width:160, borderRadius:6, background:'var(--s2)', animation:'shimmer 1.4s ease infinite', marginBottom:4}}/>
        <div style={{height:48, borderRadius:6, background:'var(--s2)', animation:'shimmer 1.4s ease infinite', width:'55%', marginBottom:16}}/>
        <div style={{height:110, borderRadius:16, background:'var(--s1)', border:'1px solid var(--bdr)', animation:'shimmer 1.4s ease infinite'}}/>
        {[1,2,3,4].map(i => (
          <div key={i} style={{height:72, borderRadius:16, background:'var(--s1)', border:'1px solid var(--bdr)', animation:`shimmer 1.4s ease ${i*0.12}s infinite`}}/>
        ))}
      </div>
      <style>{`@keyframes shimmer { 0%,100%{opacity:.6} 50%{opacity:1} }`}</style>
    </div>
  )

  return (
    <div style={{minHeight:'100vh', background:'var(--bg)'}}>

      {xpPop && (
        <div key={xpPop.id} style={{
          position:'fixed', left:xpPop.x, top:xpPop.y, transform:'translateX(-50%)',
          pointerEvents:'none', zIndex:9999, fontSize:13, fontWeight:800, color:'#4ade80',
          animation:'xpFloat .9s ease forwards',
        }}>+{xpPop.xp || 10} XP</div>
      )}

      {milestoneQueue.length > 0 && <MilestoneToast key={milestoneQueue[0].title + milestoneQueue.length} data={milestoneQueue[0]} onDone={() => setMilestoneQueue(prev => prev.slice(1))} />}
      {confetti && <Confetti key='confetti' onDone={() => setConfetti(false)} />}
      {showConvModal && !isPro && <ConversionModal onClose={() => setShowConvModal(false)} />}
      {showKarta && <MaturaKartaModal subs={subs} checked={checked} level={level} totalXP={totalXP} pct={pct} allDays={allDays} onClose={() => setShowKarta(false)} />}

      {(subjects === null || showSubjectEditor) && (
        <SubjectSelector initial={subs} onSave={saveSubjects} />
      )}

      {/* ── Sticky mini progress bar ── */}
      <div style={{position:'fixed', top:58, left:0, right:0, zIndex:99, height:32, display:'flex', alignItems:'center', gap:10, padding:'0 20px', background:'rgba(7,9,15,.88)', backdropFilter:'blur(16px)', borderBottom:'1px solid var(--bdr)'}} className="ck-sticky-bar">
        <div style={{flex:1, display:'flex', gap:2, height:5, borderRadius:99, overflow:'hidden'}}>
          {CHECKLIST_DATA.map(cat => {
            const vis  = cat.stavke.filter(s => isVisible(s, subs) && !s.pro)
            if (!vis.length) return null
            const done = vis.filter(s => checked[s.id]).length
            const fill = Math.round(done / vis.length * 100)
            return (
              <div key={cat.id} style={{flex:vis.length, background:'var(--s2)', borderRadius:99, overflow:'hidden', position:'relative'}}>
                <div style={{position:'absolute', inset:0, width:`${fill}%`, background:cat.color, borderRadius:99, transition:'width .4s cubic-bezier(.16,1,.3,1)'}}/>
              </div>
            )
          })}
        </div>
        <span style={{fontSize:11, fontWeight:700, color: pct===100?'var(--green)':pct>=50?'var(--blue)':'var(--muted)', flexShrink:0}}>{pct}%</span>
        <span style={{fontSize:10, fontWeight:600, color:level.color, flexShrink:0}}>Niv.{level.index} · {level.label}</span>
      </div>

      <div style={{maxWidth:720, margin:'0 auto', padding:'92px 24px 80px'}} className="ck-main">

        {/* ── START SCREEN HERO ── */}
        <div className="ck-hero-card" style={{position:'relative', overflow:'hidden', marginBottom:20, background:'rgba(255,255,255,.025)', border:'1px solid rgba(255,255,255,.08)', borderRadius:20, padding:'36px 36px 28px', boxShadow:'0 24px 64px rgba(0,0,0,.5)'}}>
          {/* Orbs — same as homepage */}
          <div className="orb" style={{width:640,height:640,top:'-55%',left:'-12%',background:'radial-gradient(circle,rgba(75,123,255,.13),transparent 65%)',animation:'orb-a 22s ease-in-out infinite'}}/>
          <div className="orb" style={{width:420,height:420,bottom:'-45%',right:'-6%',background:'radial-gradient(circle,rgba(124,92,252,.09),transparent 65%)',animation:'orb-b 26s ease-in-out infinite'}}/>
          {/* Dot grid */}
          <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(rgba(75,123,255,.04) 1px,transparent 1px)',backgroundSize:'48px 48px',pointerEvents:'none'}}/>

          <div style={{position:'relative', zIndex:1}}>

            {/* Badge row — streak only */}
            {streak.count > 0 && (
              <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:24}}>
                <div style={{display:'flex',alignItems:'center',gap:5,padding:'3px 10px',borderRadius:99,background:'rgba(251,146,60,.08)',border:'1px solid rgba(251,146,60,.2)'}}>
                  <span style={{fontSize:11,fontWeight:600,color:'#fb923c'}}>🔥 {streak.count} {streak.count===1?'dan':'dana'} zaredom</span>
                </div>
              </div>
            )}

            {/* Big animated headline */}
            <h1 className="d2" style={{marginBottom:18,textAlign:'center'}}>
              <span style={{
                display:'block',
                background: pct===100
                  ? 'linear-gradient(270deg,#3ecf6e,#7cf5a8,#2dcfbe,#3ecf6e)'
                  : 'linear-gradient(270deg,#4b7bff,#818cf8,#c084fc,#4b7bff)',
                backgroundSize:'300% 300%',
                WebkitBackgroundClip:'text',
                WebkitTextFillColor:'transparent',
                backgroundClip:'text',
                animation:'hero-text-shift 4s ease-in-out infinite',
              }}>
                {pct===0 ? 'Počni svoju pripremu.' : pct===100 ? 'Spreman/na za maturu.' : pct>=75 ? 'Skoro si tamo.' : pct>=50 ? 'Polovica je za tobom.' : pct>=25 ? 'U dobroj si poziciji.' : 'Dobar početak.'}
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{fontSize:15,lineHeight:1.75,color:'var(--muted)',marginBottom:28,maxWidth:500,textAlign:'center',margin:'0 auto 28px'}}>
              {pct===0
                ? 'Personalizirani checklist za maturu 2026. Počni s administrativnim obvezama.'
                : pct===100
                  ? `Sve stavke završene.${allDays>0?` Do ispita još ${allDays} dana — iskoristi ih za vježbu.`:''}`
                  : nextFocusItem
                    ? `Sljedeće: ${nextFocusItem.catSym} ${nextFocusItem.tekst.length>72?nextFocusItem.tekst.slice(0,72)+'…':nextFocusItem.tekst}`
                    : `${totalChecked} od ${totalStavke} stavki završeno — nastavi dalje.`
              }
            </p>

            {/* CTA buttons — .btn .bp / .btn .bg same as homepage */}
            <div style={{display:'flex',gap:10,flexWrap:'wrap',alignItems:'center',justifyContent:'center',marginBottom:24}}>
              {pct===100 ? (
                <Link href="/discere" className="btn bg btn-lg" style={{textDecoration:'none'}}>🎯 Vježbaj na Discere →</Link>
              ) : nextFocusItem ? (
                <button type="button" className="btn bp btn-lg" onClick={() => {
                  setOpenCats(prev=>({...prev,[nextFocusItem.catId]:true}))
                  setTimeout(()=>{const el=document.getElementById(`cat-${nextFocusItem.catId}`);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})},80)
                }}>{nextFocusItem.catSym} Nastavi: {nextFocusItem.catLabel} →</button>
              ) : (
                <button type="button" className="btn bp btn-lg" onClick={() => {
                  const firstCat=CHECKLIST_DATA[0]
                  setOpenCats(prev=>({...prev,[firstCat.id]:true}))
                  setTimeout(()=>{const el=document.getElementById(`cat-${firstCat.id}`);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})},80)
                }}>Počni pripremu →</button>
              )}
            </div>

            {/* Progress bar + subjects row */}
            <div style={{marginBottom:22}}>
              {pct > 0 && (
                <>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:7}}>
                    <span style={{fontSize:12,color:'var(--muted)'}}>{totalChecked} / {totalStavke} stavki završeno</span>
                    <div style={{display:'flex',alignItems:'center',gap:8}}>
                      <span style={{fontSize:13,fontWeight:700,color:'var(--text)'}}>{pct}%</span>
                      <span style={{display:'inline-flex',alignItems:'center',gap:3,padding:'2px 8px',borderRadius:99,fontSize:10,fontWeight:700,background:`${level.color}18`,color:level.color,border:`1px solid ${level.color}30`,whiteSpace:'nowrap'}}>
                        Niv.{level.index} · {level.label}
                      </span>
                    </div>
                  </div>
                  <div style={{height:4,borderRadius:99,background:'rgba(255,255,255,.07)',overflow:'hidden',marginBottom:14}}>
                    <div style={{height:'100%',width:`${pct}%`,borderRadius:99,background:'linear-gradient(90deg,#4b7bff,#7c5cfc)',transition:'width .5s cubic-bezier(.16,1,.3,1)'}}/>
                  </div>
                </>
              )}
              <div style={{display:'flex',alignItems:'center',gap:7}}>
                <span style={{fontSize:12,color:'var(--muted)'}}>
                  Predmeti: <strong style={{color:'rgba(255,255,255,.6)'}}>{subs.map(id=>ALL_SUBJECTS.find(s=>s.id===id)?.label).filter(Boolean).join(', ')}</strong>
                </span>
                <button type="button" onClick={()=>setShowSubjectEditor(true)} style={{background:'none',border:'1px solid var(--bdr)',borderRadius:6,padding:'2px 8px',fontSize:10,fontWeight:600,color:'var(--muted)',cursor:'pointer',fontFamily:'var(--fb)'}}>Uredi</button>
              </div>
            </div>

            {/* Separator */}
            <div style={{height:1,background:'var(--bdr)',marginBottom:16}}/>

            {/* Category chips */}
            <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',gap:6,marginBottom:16}}>
              {CHECKLIST_DATA.map(cat => {
                const vis=cat.stavke.filter(s=>isVisible(s,subs)&&(!s.pro||isPro))
                if(!vis.length) return null
                const done=vis.filter(s=>checked[s.id]).length
                const fill=Math.round(done/vis.length*100)
                const isDone=fill===100
                return (
                  <button key={cat.id} type="button" onClick={()=>{
                    setOpenCats(prev=>({...prev,[cat.id]:true}))
                    setTimeout(()=>{const el=document.getElementById(`cat-${cat.id}`);if(el)el.scrollIntoView({behavior:'smooth',block:'start'})},80)
                  }} style={{
                    flexShrink:0,display:'inline-flex',alignItems:'center',gap:5,
                    padding:'5px 12px',borderRadius:99,cursor:'pointer',fontFamily:'var(--fb)',
                    fontSize:11,fontWeight:600,whiteSpace:'nowrap',transition:'all .15s',
                    border:`1px solid ${isDone?'rgba(62,207,110,.3)':'var(--bdr)'}`,
                    background:isDone?'rgba(62,207,110,.08)':'transparent',
                    color:isDone?'var(--green)':'var(--muted)',
                  }}>
                    {cat.sym} {done}/{vis.length}
                    {isDone&&<svg width="10" height="9" viewBox="0 0 10 9" fill="none" style={{marginLeft:1,flexShrink:0}}><polyline points="1,4.5 3.8,7.5 9,1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </button>
                )
              })}
            </div>

            {/* Utility actions */}
            <div style={{display:'flex',alignItems:'center',gap:6,flexWrap:'wrap'}}>
              {aiNudge && (
                <div style={{flex:'1 1 160px',display:'flex',alignItems:'center',gap:6,padding:'6px 10px',borderRadius:8,background:'rgba(75,123,255,.07)',border:'1px solid rgba(75,123,255,.15)'}}>
                  <span style={{fontSize:11}}>📌</span>
                  <span style={{fontSize:11,color:'var(--muted)',lineHeight:1.4,flex:1}}>{aiNudge}</span>
                </div>
              )}
              <div style={{display:'flex',alignItems:'center',gap:6,marginLeft:'auto',flexWrap:'wrap'}}>
                {achievements.slice(0,2).map((a,i)=>(
                  <span key={i} style={{fontSize:10,padding:'2px 8px',borderRadius:99,background:'rgba(255,255,255,.05)',border:'1px solid var(--bdr)',color:'var(--muted)',whiteSpace:'nowrap'}}>{a.icon} {a.title}</span>
                ))}
                {totalChecked>0&&(
                  !confirmReset
                    ?<button type="button" onClick={()=>setConfirmReset(true)} style={{background:'none',border:'1px solid var(--bdr)',borderRadius:7,fontSize:11,padding:'4px 10px',color:'var(--muted)',cursor:'pointer',fontFamily:'var(--fb)'}}>Resetiraj</button>
                    :<div style={{display:'flex',alignItems:'center',gap:5,padding:'3px 8px',borderRadius:8,background:'rgba(248,113,113,.08)',border:'1px solid rgba(248,113,113,.3)'}}>
                      <span style={{fontSize:11,color:'#f87171',fontWeight:600}}>Obrisati?</span>
                      <button type="button" onClick={handleReset} style={{background:'#f87171',border:'none',borderRadius:5,fontSize:11,padding:'2px 8px',color:'#fff',cursor:'pointer',fontFamily:'var(--fb)',fontWeight:700}}>Da</button>
                      <button type="button" onClick={()=>setConfirmReset(false)} style={{background:'none',border:'none',fontSize:11,color:'var(--muted)',cursor:'pointer',fontFamily:'var(--fb)'}}>Ne</button>
                    </div>
                )}
                <button type="button" onClick={shareProgress} style={{background:'none',border:'1px solid var(--bdr)',borderRadius:7,fontSize:11,padding:'4px 10px',color:shareDone?'var(--green)':'var(--muted)',cursor:'pointer',fontFamily:'var(--fb)',transition:'color .2s'}}>
                  {shareDone?'Kopirano!':'Kopiraj'}
                </button>
                <button type="button" onClick={()=>setShowKarta(true)} style={{background:'none',border:'1px solid rgba(129,140,248,.3)',borderRadius:7,fontSize:11,padding:'4px 10px',color:'#818cf8',cursor:'pointer',fontFamily:'var(--fb)'}}>📸 Karta</button>
              </div>
            </div>

          </div>
        </div>

        <div style={{display:'none'}} className="ck-progress-card-removed">
          {/* Count + motiv */}
          <div style={{marginBottom:14}}>
            <div style={{fontWeight:700, fontSize:15, marginBottom:4}}>{totalChecked} / {totalStavke} stavki završeno</div>
            <div style={{fontSize:13, color:'var(--muted)', lineHeight:1.55}}>{motivMsg}</div>
          </div>

          <div style={{display:'flex', gap:3, height:8, borderRadius:99, overflow:'hidden'}}>
            {CHECKLIST_DATA.map(cat => {
              const vis  = cat.stavke.filter(s => isVisible(s, subs) && !s.pro)
              if (!vis.length) return null
              const done = vis.filter(s => checked[s.id]).length
              const fill = Math.round(done / vis.length * 100)
              return (
                <div key={cat.id} style={{flex:vis.length, background:'var(--s2)', borderRadius:99, overflow:'hidden', position:'relative'}}>
                  <div style={{position:'absolute', inset:0, width:`${fill}%`, background:cat.color, borderRadius:99, transition:'width .4s cubic-bezier(.16,1,.3,1)',
                    boxShadow: fill===100 ? `0 0 8px ${cat.color}88` : 'none'
                  }}/>
                </div>
              )
            })}
          </div>

          {aiNudge && (
            <div style={{display:'flex', alignItems:'center', gap:8, marginTop:10, padding:'8px 12px', borderRadius:9, background:'rgba(129,140,248,.07)', border:'1px solid rgba(129,140,248,.18)'}}>
              <span style={{fontSize:13}}>📌</span>
              <span style={{fontSize:12, color:'var(--muted)', lineHeight:1.5}}>{aiNudge}</span>
            </div>
          )}
          <div style={{display:'flex', flexWrap:'wrap', gap:'6px 16px', marginTop:10}}>
            {CHECKLIST_DATA.map(cat => {
              const vis  = cat.stavke.filter(s => isVisible(s, subs) && !s.pro)
              const done = vis.filter(s => checked[s.id]).length
              return (
                <div key={cat.id} style={{display:'flex', alignItems:'center', gap:5, fontSize:11, color:'var(--muted)'}}>
                  <div style={{width:8, height:8, borderRadius:'50%', background:cat.color}}/>
                  {cat.sym} {done}/{vis.length}
                </div>
              )
            })}
          </div>

          {achievements.length > 0 && (
            <div style={{display:'flex', flexWrap:'wrap', gap:6, marginTop:8}}>
              {achievements.slice(0,3).map((a, i) => (
                <span key={i} style={{fontSize:11, padding:'2px 9px', borderRadius:99, background:'rgba(255,255,255,.05)', border:'1px solid var(--bdr)', color:'var(--muted)', whiteSpace:'nowrap'}}>
                  {a.icon} {a.title}
                </span>
              ))}
            </div>
          )}

          <div style={{display:'flex', alignItems:'center', flexWrap:'wrap', gap:8, marginTop:14}}>
            {totalChecked > 0 && (
              <>
                {!confirmReset
                  ? <button type="button" onClick={() => setConfirmReset(true)} style={{
                      background:'none', border:'1px solid var(--bdr)', borderRadius:8,
                      fontSize:12, padding:'5px 12px', color:'var(--muted)',
                      cursor:'pointer', fontFamily:'var(--fb)',
                    }}>Resetiraj sve</button>
                  : <div style={{display:'flex', alignItems:'center', gap:6, padding:'4px 10px', borderRadius:9, background:'rgba(248,113,113,.08)', border:'1px solid rgba(248,113,113,.3)'}}>
                      <span style={{fontSize:12, color:'#f87171', fontWeight:600}}>Obrisati sav napredak?</span>
                      <button type="button" onClick={handleReset} style={{background:'#f87171', border:'none', borderRadius:6, fontSize:12, padding:'3px 10px', color:'#fff', cursor:'pointer', fontFamily:'var(--fb)', fontWeight:700}}>Da</button>
                      <button type="button" onClick={() => setConfirmReset(false)} style={{background:'none', border:'none', fontSize:12, color:'var(--muted)', cursor:'pointer', fontFamily:'var(--fb)'}}>Ne</button>
                    </div>
                }
              </>
            )}
            <button type="button" onClick={shareProgress} style={{
              marginLeft:'auto', background:'none', border:'1px solid var(--bdr)', borderRadius:8,
              fontSize:12, padding:'5px 12px', color:shareDone?'var(--green)':'var(--muted)',
              cursor:'pointer', fontFamily:'var(--fb)', transition:'all .2s', display:'flex', alignItems:'center', gap:5,
            }}>
              {shareDone ? 'Kopirano!' : 'Kopiraj napredak'}
            </button>
            <button type="button" onClick={() => setShowKarta(true)} style={{
              background:'none', border:'1px solid rgba(129,140,248,.3)', borderRadius:8,
              fontSize:12, padding:'5px 12px', color:'#818cf8',
              cursor:'pointer', fontFamily:'var(--fb)', transition:'all .2s',
            }}>
              📸 Matura karta
            </button>
          </div>
        </div>

        {/* category strip merged into hero card */}
        <div style={{display:'none'}}>
          {CHECKLIST_DATA.map(cat => {
            const vis  = cat.stavke.filter(s => isVisible(s, subs) && (!s.pro || isPro))
            if (!vis.length) return null
            const done = vis.filter(s => checked[s.id]).length
            const fill = Math.round(done / vis.length * 100)
            const isDone = fill === 100
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setOpenCats(prev => ({...prev, [cat.id]: true}))
                  setTimeout(() => {
                    const el = document.getElementById(`cat-${cat.id}`)
                    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' })
                  }, 80)
                }}
                style={{
                  flex:'0 0 auto',
                  display:'flex', flexDirection:'column', gap:6,
                  padding:'10px 13px',
                  borderRadius:12,
                  border:`1px solid ${isDone ? cat.color+'55' : 'var(--bdr)'}`,
                  background: isDone ? `${cat.color}10` : 'var(--s1)',
                  cursor:'pointer',
                  fontFamily:'var(--fb)',
                  textAlign:'left',
                  minWidth:96,
                  transition:'border-color .15s, background .15s',
                }}
              >
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:8}}>
                  <span style={{fontSize:16, lineHeight:1}}>{cat.sym}</span>
                  <span style={{fontSize:10, fontWeight:700, color: isDone ? cat.color : 'var(--muted)'}}>{fill}%</span>
                </div>
                <div style={{fontSize:11, fontWeight:600, color: isDone ? cat.color : 'var(--text)', lineHeight:1.3, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{cat.label}</div>
                <div style={{height:3, borderRadius:99, background:'var(--s3)', overflow:'hidden'}}>
                  <div style={{height:'100%', width:`${fill}%`, background:cat.color, borderRadius:99, transition:'width .4s cubic-bezier(.16,1,.3,1)', boxShadow: isDone ? `0 0 6px ${cat.color}88` : 'none'}}/>
                </div>
              </button>
            )
          })}
        </div>

        {pct >= 75 && !isPro && totalChecked > 0 && <ConversionCard pct={pct} />}

        {/* Auth banner — visible when logged out after onboarding */}
        {hydrated && !user && subjects !== null && (
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:16, padding:'11px 16px', borderRadius:11, background:'rgba(129,140,248,.07)', border:'1px solid rgba(129,140,248,.2)', flexWrap:'wrap'}}>
            <span style={{fontSize:13, color:'var(--muted)', flex:1, minWidth:160}}>Napredak se čuva samo u ovom pregledniku.</span>
            <Link href="/auth/login" style={{fontSize:12, fontWeight:700, color:'#818cf8', textDecoration:'none', padding:'5px 12px', borderRadius:8, background:'rgba(129,140,248,.12)', border:'1px solid rgba(129,140,248,.25)', flexShrink:0, whiteSpace:'nowrap'}}>
              Prijavi se za oblak →
            </Link>
          </div>
        )}

        {/* Subject nudge — when user skipped onboarding or has only 1 subject */}
        {subjects !== null && subs.length === 1 && (
          <div style={{display:'flex', alignItems:'center', gap:10, marginBottom:16, padding:'10px 16px', borderRadius:11, background:'rgba(251,191,36,.06)', border:'1px solid rgba(251,191,36,.22)', flexWrap:'wrap'}}>
            <span style={{fontSize:13, color:'var(--muted)', flex:1, minWidth:160}}>Prikazujem samo <strong style={{color:'var(--text)'}}>1 predmet</strong>. Dodaj ostale da vidiš sve stavke.</span>
            <button type="button" onClick={() => setShowSubjectEditor(true)} style={{fontSize:12, fontWeight:700, color:'#fbbf24', background:'rgba(251,191,36,.12)', border:'1px solid rgba(251,191,36,.3)', borderRadius:8, padding:'5px 12px', cursor:'pointer', fontFamily:'var(--fb)', whiteSpace:'nowrap'}}>Dodaj predmete →</button>
          </div>
        )}

        {pct === 100 && (
          <div style={{padding:'22px', borderRadius:14, background:'rgba(62,207,110,.08)', border:'1px solid rgba(62,207,110,.3)', marginBottom:16, textAlign:'center'}}>
            <div style={{fontSize:32, marginBottom:8}}>🏆</div>
            <div style={{fontFamily:'var(--fh)', fontSize:20, fontWeight:900, marginBottom:6}}>Spreman/na si za maturu!</div>
            <p style={{fontSize:14, color:'var(--muted)', margin:'0 0 16px', lineHeight:1.65}}>
              Sve stavke završene.{allDays > 0 ? ` Do ispita još ${allDays} dana — iskoristi ih za vježbu.` : ''}
            </p>
            <div style={{display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap'}}>
              <Link href="/discere" style={{fontSize:13, fontWeight:700, padding:'8px 16px', borderRadius:9, background:'rgba(62,207,110,.15)', border:'1px solid rgba(62,207,110,.3)', color:'var(--green)', textDecoration:'none'}}>Vježbaj na Discere →</Link>
              <Link href="/plan-ucenja" style={{fontSize:13, fontWeight:700, padding:'8px 16px', borderRadius:9, background:'rgba(129,140,248,.1)', border:'1px solid rgba(129,140,248,.25)', color:'#818cf8', textDecoration:'none'}}>Plan učenja →</Link>
              {isPro && <Link href="/ai-profesor" style={{fontSize:13, fontWeight:700, padding:'8px 16px', borderRadius:9, background:'rgba(251,191,36,.1)', border:'1px solid rgba(251,191,36,.25)', color:'#fbbf24', textDecoration:'none'}}>AI Profesor →</Link>}
            </div>
          </div>
        )}

        {nextFocusItem && (
          <div style={{padding:'14px 18px', borderRadius:12, background:`${nextFocusItem.catColor}0a`, border:`1px solid ${nextFocusItem.catColor}30`, marginBottom:12, display:'flex', alignItems:'flex-start', gap:12}}>
            <span style={{fontSize:20, flexShrink:0, marginTop:2}}>{nextFocusItem.catSym}</span>
            <div style={{flex:1, minWidth:0}}>
              {daysSinceVisit >= 2 && (
                <div style={{fontSize:11, color:'var(--muted)', marginBottom:3}}>Nisi bio/la ovdje {daysSinceVisit} {daysSinceVisit===1?'dan':'dana'} — nastavi gdje si stao/la</div>
              )}
              <div style={{fontSize:11, fontWeight:700, color:nextFocusItem.catColor, marginBottom:4, textTransform:'uppercase', letterSpacing:'.06em'}}>{nextFocusItem.catLabel}</div>
              <div style={{fontSize:13, color:'var(--text)', lineHeight:1.55}}>{nextFocusItem.tekst}</div>
            </div>
            <button type="button" onClick={() => setOpenCats(prev => ({...prev, [nextFocusItem.catId]: true}))} style={{flexShrink:0, background:nextFocusItem.catColor, color:'#07090F', border:'none', borderRadius:8, fontSize:12, fontWeight:700, padding:'6px 12px', cursor:'pointer', fontFamily:'var(--fb)', whiteSpace:'nowrap'}}>
              Otvori →
            </button>
          </div>
        )}

        <div style={{display:'flex', justifyContent:'flex-end', marginBottom:12}}>
          <button type="button" onClick={allExpanded ? collapseAll : expandAll} style={{
            background:'none', border:'none', fontSize:12, color:'var(--muted)',
            cursor:'pointer', fontFamily:'var(--fb)', padding:'4px 0',
          }}>
            {allExpanded ? 'Zatvori sve' : 'Otvori sve'}
          </button>
        </div>

        <div style={{display:'flex', flexDirection:'column', gap:12}}>
          {CHECKLIST_DATA.map(cat => {
            const visItems   = cat.stavke.filter(s => isVisible(s, subs))
            const nonPro     = visItems.filter(s => !s.pro)
            const catChecked = nonPro.filter(s => checked[s.id]).length
            const catTotal   = nonPro.length
            const catPct     = catTotal > 0 ? Math.round(catChecked / catTotal * 100) : 0
            const isOpen     = !!openCats[cat.id]
            const isDone     = catTotal > 0 && catChecked === catTotal
            const almostDone = !isDone && catPct >= 80
            const urgent     = isUrgentCat(cat.id)
            const priority   = isPriorityCat(cat.id)

            return (
              <div key={cat.id} id={`cat-${cat.id}`} style={{
                background:'var(--s1)',
                border:`1px solid ${urgent ? '#f87171' : isDone ? cat.color+'44' : almostDone ? cat.color+'22' : 'var(--bdr)'}`,
                borderRadius: isDone ? 10 : urgent ? 14 : 12, overflow:'hidden',
                boxShadow: urgent ? '0 0 28px rgba(248,113,113,.2)' : isDone ? `0 0 20px ${cat.color}18` : 'none',
                transition:'box-shadow .4s, border-color .3s',
              }}>

                <button type="button" onClick={() => setOpenCats(prev => ({...prev, [cat.id]: !isOpen}))} style={{
                  width:'100%', padding:'18px 22px', cursor:'pointer', display:'flex', alignItems:'center', gap:14,
                  background: urgent ? 'rgba(248,113,113,.06)' : isDone ? `${cat.color}08` : 'transparent',
                  border:'none', color:'var(--text)', fontFamily:'var(--fb)', textAlign:'left', transition:'background .2s',
                }} className="ck-cat-header">
                  <div style={{width:42, height:42, borderRadius:11, background:`${cat.color}18`, border:`1px solid ${cat.color}33`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, flexShrink:0}}>{cat.sym}</div>

                  <div style={{flex:1, minWidth:0}}>
                    <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:5, flexWrap:'wrap'}}>
                      <span style={{fontWeight:700, fontSize:15}}>{cat.label}</span>
                      {urgent    && <span style={{fontSize:10, fontWeight:800, color:'#f87171', background:'rgba(248,113,113,.16)', border:'1px solid rgba(248,113,113,.3)', borderRadius:99, padding:'2px 8px', animation:'pulse 1s ease infinite'}}>HITNO!</span>}
                      {priority  && <span style={{fontSize:10, fontWeight:700, color:'#fbbf24', background:'rgba(251,191,36,.14)', border:'1px solid rgba(251,191,36,.3)', borderRadius:99, padding:'2px 8px'}}>Fokus sada</span>}
                      {isDone    && <span style={{fontSize:10, fontWeight:700, color:cat.color, background:`${cat.color}18`, border:`1px solid ${cat.color}33`, borderRadius:99, padding:'2px 8px'}}>Gotovo!</span>}
                      {almostDone && !isDone && <span style={{fontSize:10, fontWeight:700, color:cat.color, background:`${cat.color}12`, border:`1px solid ${cat.color}22`, borderRadius:99, padding:'2px 8px', animation:'pulse 1.5s ease infinite'}}>Još malo!</span>}
                    </div>
                    <div style={{height:4, background:'var(--s2)', borderRadius:99, overflow:'hidden', maxWidth:200}}>
                      <div style={{height:'100%', width:`${catPct}%`, background:`linear-gradient(90deg,${cat.color},${cat.color}88)`, borderRadius:99, transition:'width .4s', boxShadow: isDone ? `0 0 6px ${cat.color}88` : 'none'}}/>
                    </div>
                  </div>

                  <div style={{textAlign:'right', flexShrink:0, paddingLeft:8}}>
                    <div style={{fontSize:13, fontWeight:700, color: isDone ? cat.color : 'var(--muted)'}}>{catChecked}/{catTotal}</div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{display:'inline-block', transform:isOpen?'rotate(180deg)':'none', transition:'transform .2s', marginTop:2, flexShrink:0}}><polyline points="3,5.5 8,10.5 13,5.5" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </button>

                {isOpen && (
                  <div style={{borderTop:'1px solid var(--bdr)', padding:'6px 0 10px'}}>
                    {visItems.map(item => {
                      if (item.pro && !isPro) {
                        return (
                          <div key={item.id} className="pro-lock-row" style={{position:'relative', margin:'4px 8px', borderRadius:10}}>
                            <div style={{display:'flex', alignItems:'flex-start', gap:13, padding:'12px 16px', userSelect:'none', opacity:.35, pointerEvents:'none', filter:'blur(3px)'}}>
                              <div style={{width:22, height:22, borderRadius:7, border:'2px solid var(--bdr-hi)', flexShrink:0, marginTop:2}}/>
                              <span style={{fontSize:14, lineHeight:1.6}}>{item.tekst}</span>
                            </div>
                            <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', padding:'0 16px', gap:8, background:'rgba(7,9,15,.7)', borderRadius:10, backdropFilter:'blur(2px)'}}>
                              <span style={{fontSize:10, fontWeight:800, color:'#fbbf24', background:'rgba(251,191,36,.14)', border:'1px solid rgba(251,191,36,.3)', borderRadius:6, padding:'2px 7px', flexShrink:0, letterSpacing:'.04em'}}>PRO</span>
                              <span style={{fontSize:12, color:'var(--muted)', flex:1}}>Dostupno u Pro planu · <span style={{color:'#fbbf24', fontWeight:700}}>19,99 €/mj</span></span>
                              <Link href="/cijene" onClick={e => e.stopPropagation()} style={{fontSize:11, fontWeight:700, padding:'5px 12px', borderRadius:8, background:'rgba(251,191,36,.15)', border:'1px solid rgba(251,191,36,.35)', color:'#fbbf24', textDecoration:'none', flexShrink:0}}>
                                Otključaj →
                              </Link>
                            </div>
                          </div>
                        )
                      }

                      const isDoneItem = !!checked[item.id]
                      const chip       = deadlineChip(item.deadline)

                      return (
                        <div
                          key={item.id}
                          className="item-row ck-item-row"
                          onClick={e => toggle(item.id, e)}
                          style={{
                            display:'flex', alignItems:'flex-start', gap:14,
                            padding:'13px 20px 13px 16px',
                            margin:'2px 8px',
                            borderRadius:10,
                            cursor:'pointer',
                            transition:'background .12s, box-shadow .12s',
                            background: isDoneItem ? `${cat.color}07` : 'transparent',
                            border: isDoneItem ? `1px solid ${cat.color}18` : '1px solid transparent',
                            position:'relative',
                          }}
                        >
                          {/* Checkbox */}
                          <div style={{
                            width:24, height:24, borderRadius:7, flexShrink:0, marginTop:1,
                            border:`2px solid ${isDoneItem ? cat.color : 'rgba(255,255,255,.18)'}`,
                            background: isDoneItem ? cat.color : 'transparent',
                            display:'flex', alignItems:'center', justifyContent:'center',
                            transition:'all .18s cubic-bezier(.34,1.56,.64,1)',
                            boxShadow: isDoneItem ? `0 0 10px ${cat.color}55` : 'none',
                            flexShrink:0,
                          }}>
                            {isDoneItem && (
                              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" style={{animation:'checkPop .28s cubic-bezier(.34,1.56,.64,1) forwards', display:'block'}}>
                                <polyline points="1.5,5.5 5,9 11.5,1.5" stroke="#fff" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>

                          {/* Content */}
                          <div style={{flex:1, minWidth:0}}>
                            {/* Top row: text + badges */}
                            <div style={{display:'flex', flexWrap:'wrap', alignItems:'baseline', gap:'4px 8px', marginBottom: (!isDoneItem && item.action) ? 8 : 0}}>
                              <span style={{
                                fontSize:14, lineHeight:1.6,
                                color: isDoneItem ? 'var(--muted)' : 'var(--text)',
                                textDecoration: isDoneItem ? 'line-through' : 'none',
                                textDecorationColor: isDoneItem ? `${cat.color}60` : 'transparent',
                                transition:'all .2s',
                                flex:'1 1 auto',
                              }}>
                                {item.tekst}
                              </span>

                              {/* VAŽNO badge */}
                              {item.vazno && !isDoneItem && (
                                <span style={{
                                  fontSize:9, fontWeight:800, letterSpacing:'.08em',
                                  color:cat.color, background:`${cat.color}18`,
                                  border:`1px solid ${cat.color}33`,
                                  borderRadius:99, padding:'2px 7px',
                                  flexShrink:0, textTransform:'uppercase',
                                }}>★ Važno</span>
                              )}

                              {/* Deadline chip */}
                              {chip && !isDoneItem && (
                                <span style={{
                                  fontSize:9, fontWeight:700, letterSpacing:'.04em',
                                  color:chip.color, background:chip.bg,
                                  border:`1px solid ${chip.border}`,
                                  borderRadius:99, padding:'2px 8px',
                                  flexShrink:0,
                                }}>
                                  {chip.label}
                                </span>
                              )}

                              {/* Done label */}
                              {isDoneItem && (
                                <span style={{
                                  fontSize:9, fontWeight:700, letterSpacing:'.06em',
                                  color:cat.color, opacity:.7,
                                  flexShrink:0,
                                }}>✓ Gotovo</span>
                              )}
                            </div>

                            {/* CTA action button */}
                            {item.action && !isDoneItem && (
                              <a
                                href={item.action.href}
                                onClick={e => e.stopPropagation()}
                                target={item.action.href.startsWith('http') ? '_blank' : undefined}
                                rel={item.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                style={{
                                  display:'inline-flex', alignItems:'center', gap:5,
                                  fontSize:11, fontWeight:700,
                                  color:cat.color,
                                  background:`${cat.color}12`,
                                  border:`1px solid ${cat.color}2e`,
                                  borderRadius:7,
                                  padding:'4px 11px',
                                  textDecoration:'none',
                                  transition:'background .15s, border-color .15s',
                                  letterSpacing:'.01em',
                                }}
                              >
                                {item.action.label}
                              </a>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="ck-footer" style={{marginTop:28, padding:'16px 20px', borderRadius:12, background:'var(--s1)', border:'1px solid var(--bdr)', fontSize:13, color:'var(--muted)', lineHeight:1.7, textAlign:'center'}}>
          💾 Napredak se pamti lokalno i u oblaku (ako si prijavljen/a).{' '}
          <Link href="/plan-ucenja" style={{color:'var(--blue)', textDecoration:'none'}}>Plan učenja</Link>
          {' · '}
          <Link href="/discere" style={{color:'var(--blue)', textDecoration:'none'}}>Discere</Link>
          {' · '}
          <Link href="/skripte" style={{color:'var(--blue)', textDecoration:'none'}}>Skripte</Link>
        </div>

      </div>

      <style>{`
        .pro-lock-row:hover > div:last-child { background: rgba(7,9,15,.82) !important; }
        .item-row:hover { background: rgba(255,255,255,.045) !important; border-color: rgba(255,255,255,.08) !important; }
        .item-row:active { background: rgba(255,255,255,.08) !important; transform: scale(.995); }
        .item-row a:hover { background: rgba(255,255,255,.1) !important; border-color: rgba(255,255,255,.2) !important; }
        @keyframes xpFloat {
          0%   { opacity:1; transform:translateX(-50%) translateY(0); }
          100% { opacity:0; transform:translateX(-50%) translateY(-44px); }
        }
        @keyframes checkPop {
          0%   { transform:scale(.4); }
          70%  { transform:scale(1.3); }
          100% { transform:scale(1); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; }
          50%     { opacity:.5; }
        }
        @keyframes milestoneIn {
          0%   { opacity:0; transform:translateX(-50%) translateY(-14px) scale(.96); }
          100% { opacity:1; transform:translateX(-50%) translateY(0) scale(1); }
        }
        @keyframes confettiFall {
          0%   { transform:translateY(0) rotate(0deg);     opacity:1; }
          80%  { opacity:1; }
          100% { transform:translateY(108vh) rotate(540deg); opacity:0; }
        }
        .item-row:hover { background: rgba(255,255,255,.04); }
        .item-row:active { background: rgba(255,255,255,.07); }
        @keyframes shimmer { 0%,100% { opacity:.6; } 50% { opacity:1; } }
        @keyframes hero-text-shift { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
        @media (max-width: 600px) {
          .ck-main { padding: 82px 14px 60px !important; }
          .ck-sticky-bar { padding: 0 12px !important; }
          .ck-hero-card { padding: 18px 16px 16px !important; border-radius: 14px !important; }
          .ck-hero-body { grid-template-columns: 1fr !important; gap: 16px !important; }
          .ck-hero-left { text-align: left !important; display: flex !important; align-items: center; gap: 18px; flex-wrap: wrap; }
          .ck-cat-header { padding: 14px 14px !important; }
          .ck-item-row { padding: 10px 14px !important; }
          .ck-footer { padding: 12px 14px !important; font-size: 12px !important; }
        }
      `}</style>
    </div>
  )
}
