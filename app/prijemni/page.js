'use client'
import { useState, useEffect, useMemo, useRef } from 'react'
import { usePageTracking } from '@/lib/hooks/usePageTracking'
import { getAllFakulteti } from '@/lib/prijemni/api'
import PrijemniListView from '@/components/prijemni/PrijemniListView'
import PrijemniStudijiView from '@/components/prijemni/PrijemniStudijiView'
import PrijemniDetailView from '@/components/prijemni/PrijemniDetailView'
import CompareDock from '@/components/prijemni/CompareDock'
import CompareView from '@/components/prijemni/CompareView'
import MaxReachedToast from '@/components/prijemni/MaxReachedToast'
import UrgencyBanner from '@/components/prijemni/UrgencyBanner'
import ExitIntentModal from '@/components/prijemni/ExitIntentModal'
import { useCompare } from '@/lib/prijemni/compareStore'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/lib/hooks/useAuth'
import PrijemniOnboarding from '@/components/prijemni/PrijemniOnboarding'
import { useOnboarding } from '@/lib/prijemni/onboardingStore'
import PrijemniListSkeleton from '@/components/prijemni/skeletons/PrijemniListSkeleton'
import PrijemniStudijiSkeleton from '@/components/prijemni/skeletons/PrijemniStudijiSkeleton'
import PrijemniDetailSkeleton from '@/components/prijemni/skeletons/PrijemniDetailSkeleton'
import SkeletonNav from '@/components/ui/SkeletonNav'

/* ───────────────────────── ANALYTICS ───────────────────────── */
const SESSION_ID = typeof crypto !== 'undefined'
  ? crypto.randomUUID() : Math.random().toString(36).slice(2)

function useAnalytics() {
  const [userId, setUserId] = useState(null)
  useEffect(() => {
    // Only getSession() — no onAuthStateChange subscription here.
    // useAuth (AuthProvider) already manages auth state globally via onAuthStateChange.
    // A second onAuthStateChange listener here causes concurrent lock acquisitions on the
    // same client, which combined with React Strict Mode double-mount leaves orphaned locks
    // and triggers "lock was released because another request stole it" errors.
    const supabase = createClient()
    supabase.auth.getSession().then(({ data: { session } }) => setUserId(session?.user?.id ?? null))
  }, [])
  const track = async (event_type, fakultet_id = null, studij_id = null, tab = null, meta = {}) => {
    try {
      const supabase = createClient()
      await supabase.from('prijemni_events').insert({
        user_id: userId, session_id: SESSION_ID,
        event_type, fakultet_id, studij_id, tab, meta
      })
    } catch {}
  }
  return { track }
}

/* SkeletonNav imported from @/components/ui/SkeletonNav */

/* ───────────────────────── LOADING ───────────────────────── */
function LoadingScreen() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 32, height: 32, border: '2px solid var(--bdr)', borderTopColor: 'var(--blue)', borderRadius: '50%', animation: 'pr-spin .7s linear infinite', margin: '0 auto 16px' }} />
        <div style={{ fontSize: 13, color: 'var(--muted)' }}>Učitavam fakultete...</div>
      </div>
    </div>
  )
}

/* ───────────────────────── MAIN PAGE ───────────────────────── */
export default function Prijemni() {
  usePageTracking('prijemni')
  const { user, isPro, isPaid, loading: authLoading } = useAuth()
  const isDevBypass = user?.email === process.env.NEXT_PUBLIC_DEV_BYPASS_EMAIL
  const proStatus = authLoading ? 'loading'
    : !user ? 'no-session'
    : (isPro || isPaid || isDevBypass) ? 'allowed'
    : 'no-pro'
  const { track } = useAnalytics()

  // Data
  const [fakulteti, setFakulteti] = useState(null)
  const [loadError, setLoadError] = useState(null)

  // Min skeleton duration — prevents flash-of-skeleton for fast connections
  const [showSkeleton, setShowSkeleton] = useState(true)
  const skeletonTimer = useRef(null)
  useEffect(() => {
    skeletonTimer.current = setTimeout(() => setShowSkeleton(false), 300)
    return () => clearTimeout(skeletonTimer.current)
  }, [])

  // Navigation: null (list) → { fakultet } → { fakultet, studij }
  const [selFak, setSelFak] = useState(null)
  const [selStudij, setSelStudij] = useState(null)
  const [tab, setTab] = useState('datumi')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [navLoading, setNavLoading] = useState(null) // null | 'studiji' | 'detail'

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const data = await Promise.race([
          getAllFakulteti(),
          new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout: učitavanje trajalo predugo (10s)')), 10000))
        ])
        if (!cancelled) setFakulteti(data)
      } catch (err) {
        console.error('[prijemni] getAllFakulteti error:', err)
        if (!cancelled) setLoadError(err.message || 'Nepoznata greška')
      }
    })()
    return () => { cancelled = true }
  }, [])

  const handleSelectFakultet = async (fak) => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setNavLoading('studiji')
    await new Promise(r => requestAnimationFrame(r))
    if (fak.studiji.length === 1) {
      setNavLoading('detail')
      await new Promise(r => requestAnimationFrame(r))
      setSelFak(fak)
      setSelStudij(fak.studiji[0])
      setTab('datumi')
      track('view_studij', fak.id, fak.studiji[0].id, null, { direct: true })
    } else {
      setSelFak(fak)
      setSelStudij(null)
      track('view_fakultet', fak.id, null, null, { studiji_count: fak.studiji.length })
    }
    setNavLoading(null)
    setSidebarOpen(false)
  }

  const handleSelectStudij = async (studij) => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setNavLoading('detail')
    await new Promise(r => requestAnimationFrame(r))
    setSelStudij(studij)
    setTab('datumi')
    setSidebarOpen(false)
    setNavLoading(null)
    track('view_studij', studij.fakultet_id, studij.id, null, {
      tip: studij.tip_upisa, prag_2025: studij.prag_2025
    })
  }

  const handleBackToList = () => { setSelFak(null); setSelStudij(null) }
  const handleBackToStudiji = () => setSelStudij(null)
  const handleTabChange = (t) => {
    setTab(t)
    if (selStudij) track('tab_click', selFak.id, selStudij.id, t)
  }

  useEffect(() => { setSidebarOpen(false) }, [tab])

  const { prefs: onboardingPrefs } = useOnboarding()

  // ── Onboarding ────────────────────────────────────────────────
  const [matcherAutoOpen, setMatcherAutoOpen] = useState(false)

  // ── Compare ──────────────────────────────────────────────────
  const compare = useCompare()
  const [compareOpen, setCompareOpen] = useState(false)
  const [maxToast, setMaxToast] = useState(false)

  const compareStudiji = useMemo(() => {
    if (!fakulteti) return []
    const m = new Map()
    for (const f of fakulteti) for (const s of f.studiji) m.set(s.id, s)
    return compare.ids.map(id => m.get(id)).filter(Boolean)
  }, [fakulteti, compare.ids])

  // Deeplink auto-open
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.get('openCompare') === '1') {
      setCompareOpen(true)
      window.history.replaceState({}, '', '/prijemni')
      track('compare_deeplink_open')
    }
  }, [])

  // Navigate to studij from CompareView
  useEffect(() => {
    const handler = (e) => {
      const { fakultetId, studijId } = e.detail
      const fak = fakulteti?.find(f => f.id === fakultetId)
      const stu = fak?.studiji.find(s => s.id === studijId)
      if (fak && stu) { setSelFak(fak); setSelStudij(stu); setCompareOpen(false) }
    }
    window.addEventListener('prijemni:navigate', handler)
    return () => window.removeEventListener('prijemni:navigate', handler)
  }, [fakulteti])

  const handleCompareShare = async () => {
    const ids = compare.ids.join(',')
    const shareUrl = `https://maturiraj.hr/prijemni/compare?ids=${ids}`
    const shareTitle = `Usporedio/la sam ${compare.count} studija za upis 🎯`
    if (typeof navigator !== 'undefined' && navigator.share) {
      try { await navigator.share({ title: shareTitle, url: shareUrl }); track('compare_share_native', null, null, null, { count: compare.count }) } catch {}
    } else {
      try { await navigator.clipboard.writeText(shareUrl); alert('Link kopiran!'); track('compare_share_clipboard', null, null, null, { count: compare.count }) }
      catch {
        const waUrl = `https://wa.me/?text=${encodeURIComponent(shareTitle + ' ' + shareUrl)}`
        window.open(waUrl, '_blank', 'noopener,noreferrer')
        track('compare_share_whatsapp', null, null, null, { count: compare.count })
      }
    }
  }

  if (navLoading === 'studiji') return (
    <>
      <SkeletonNav onBack={handleBackToList}/>
      <div className="pr-wrap" style={{maxWidth:840,margin:'0 auto',padding:'0 40px'}}>
        <PrijemniStudijiSkeleton/>
      </div>
    </>
  )

  if (navLoading === 'detail') return (
    <>
      <SkeletonNav onBack={handleBackToStudiji}/>
      <PrijemniDetailSkeleton fakColor={selFak?.color || 'var(--blue)'}/>
    </>
  )

  if ((!fakulteti || showSkeleton) && !loadError) return (
    <>
      {/* Nav skeleton */}
      <nav style={{position:'fixed',inset:'0 0 auto',zIndex:100,height:58,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 18px',background:'rgba(7,9,15,.92)',backdropFilter:'blur(24px)',borderBottom:'1px solid var(--bdr)'}}>
        <div style={{fontFamily:'var(--fh)',fontSize:20,fontWeight:900,display:'flex',alignItems:'center',gap:8}}>
          <div style={{width:7,height:7,borderRadius:'50%',background:'var(--blue)',boxShadow:'0 0 10px var(--blue)'}}/>
          Maturiraj.hr
        </div>
      </nav>
      {/* List skeleton — prikaz odmah, bez čekanja */}
      <div className="pr-wrap" style={{maxWidth:1040,margin:'0 auto',padding:'0 40px',position:'relative',zIndex:1}}>
        <PrijemniListSkeleton/>
      </div>
    </>
  )

  if (loadError) return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ maxWidth: 400, textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 16 }}>⚠</div>
        <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Greška pri učitavanju</div>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 20 }}>{loadError}</div>
        <button onClick={() => window.location.reload()} style={{ padding: '10px 20px', borderRadius: 10, background: 'var(--blue)', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
          Pokušaj ponovno
        </button>
      </div>
    </div>
  )

  const handleUrgencyNavigate = (studij, fak) => {
    const resolvedFak = fak || fakulteti?.find(f => f.studiji.some(s => s.id === studij.id))
    if (resolvedFak) { setSelFak(resolvedFak); setSelStudij(studij); setTab('datumi') }
  }

  return (
    <>
      {fakulteti && (
        <UrgencyBanner
          fakulteti={fakulteti}
          onSelectStudij={handleUrgencyNavigate}
          track={track}
        />
      )}
      <PrijemniOnboarding
        onMatcherOpen={() => { setMatcherAutoOpen(true) }}
        onCompareOpen={() => setCompareOpen(true)}
        onBrowse={() => {}}
      />
      {!selFak && (
        <PrijemniListView
          fakulteti={fakulteti}
          onSelect={handleSelectFakultet}
          track={track}
          isPro={proStatus === 'allowed'}
          autoOpenMatcher={matcherAutoOpen}
          onMatcherAutoOpenDone={() => setMatcherAutoOpen(false)}
          onboardingPrefs={onboardingPrefs}
        />
      )}
      {selFak && !selStudij && (
        <PrijemniStudijiView
          fakultet={selFak}
          onBack={handleBackToList}
          onSelect={handleSelectStudij}
          track={track}
          allFakulteti={fakulteti}
        />
      )}
      {selFak && selStudij && (
        <PrijemniDetailView
          fakultet={selFak}
          studij={selStudij}
          tab={tab}
          setTab={handleTabChange}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          onBackToStudiji={handleBackToStudiji}
          onBackToList={handleBackToList}
          proStatus={proStatus}
          track={track}
          allFakulteti={fakulteti}
          onMaxReached={() => setMaxToast(true)}
        />
      )}
      {fakulteti && (
        <>
          <CompareDock
            fakulteti={fakulteti}
            onOpenCompare={() => setCompareOpen(true)}
            isPro={proStatus === 'allowed'}
            track={track}
          />
          <CompareView
            open={compareOpen}
            onClose={() => setCompareOpen(false)}
            studiji={compareStudiji}
            onRemove={(id) => compare.remove(id)}
            onShare={handleCompareShare}
            track={track}
            isPro={proStatus === 'allowed'}
            onLoadSet={(ids) => {
              compare.loadSet(ids)
              setCompareOpen(true)
            }}
          />
          <MaxReachedToast
            show={maxToast}
            onClose={() => setMaxToast(false)}
            isPro={proStatus === 'allowed'}
          />
          <ExitIntentModal
            fakulteti={fakulteti}
            onAction={handleUrgencyNavigate}
            track={track}
          />
        </>
      )}
    </>
  )
}
