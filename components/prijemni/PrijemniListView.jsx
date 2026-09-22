'use client'
import { useMemo, useState, useEffect } from 'react'
import { useCurrentTime } from '@/lib/hooks/useCurrentTime'
import { useCompareDeepLink } from '@/lib/prijemni/useCompareDeepLink'
import { daysUntil, formatDays, pragZona } from './helpers'
import { CSS } from './styles'
import { personalizeFakulteti } from '@/lib/prijemni/personalize'
import { getUserScores, deleteUserScores } from '@/lib/prijemni/scores'
import { matchAll, hasMinimumScores } from '@/lib/prijemni/matcher'
import ScoreMatcherModal from './ScoreMatcherModal'
import MatcherBanner from './MatcherBanner'
import { useCompare, MAX_FREE, MAX_PRO } from '@/lib/prijemni/compareStore'
import { getActiveUrgencies } from '@/lib/prijemni/urgency'
import PushOptInCard from './PushOptInCard'
import CompareView from './CompareView'
import CompareDock from './CompareDock'
import MaxReachedToast from './MaxReachedToast'
import OnboardingWizard from './OnboardingWizard'
import PersonalizationBadge from './PersonalizationBadge'
import SearchFilterBar from './SearchFilterBar'
import ListViewBottomNav from './ListViewBottomNav'
import { useOnboarding } from '@/lib/prijemni/onboardingStore'
import { applyFilters, DEFAULT_FILTER, activeFilterCount } from '@/lib/prijemni/searchFilter'

const FILTER_TABS = [
  { key: 'all', label: 'Svi', color: 'var(--text)' },
  { key: 'safe', label: 'Siguran', color: '#3ecf6e' },
  { key: 'borderline', label: 'Granica', color: '#fb923c' },
  { key: 'risky', label: 'Riskantno', color: '#f87171' },
]

export default function PrijemniListView({ fakulteti, onSelect, track, isPro = false, autoOpenMatcher = false, onMatcherAutoOpenDone, onboardingPrefs = null }) {
  const [scores, setScores] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [matchFilter, setMatchFilter] = useState('all')
  const [loadingScores, setLoadingScores] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const { prefs } = useOnboarding()
  const [filter, setFilter] = useState(DEFAULT_FILTER)
  const [editPrefsOpen, setEditPrefsOpen] = useState(false)
  const [filterOpen, setFilterOpen] = useState(false)

  // Fetch last verified timestamp
  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    fetch(
      `${base}/rest/v1/pragovi?select=last_verified_at&last_verified_at=not.is.null&order=last_verified_at.desc&limit=1`,
      { headers: { apikey: key, Authorization: `Bearer ${key}` } }
    )
      .then(r => r.json())
      .then(data => { if (Array.isArray(data) && data[0]?.last_verified_at) setLastUpdated(data[0].last_verified_at) })
      .catch(() => {})
  }, [])

  // Load scores on mount
  useEffect(() => {
    getUserScores()
      .then(s => setScores(s))
      .finally(() => setLoadingScores(false))
  }, [])

  const matcherRequested = autoOpenMatcher && !loadingScores
  const [previousMatcherRequest, setPreviousMatcherRequest] = useState(matcherRequested)
  if (matcherRequested !== previousMatcherRequest) {
    setPreviousMatcherRequest(matcherRequested)
    if (matcherRequested) setModalOpen(true)
  }
  // Acknowledge the request after the dialog has committed.
  useEffect(() => {
    if (autoOpenMatcher && !loadingScores) {
      onMatcherAutoOpenDone?.()
    }
  }, [autoOpenMatcher, loadingScores])

  // Match svi studiji (flat) ako imamo scores
  const matchData = useMemo(() => {
    if (!scores || !hasMinimumScores(scores)) return null
    const allStudiji = fakulteti.flatMap(f => f.studiji)
    return matchAll(allStudiji, scores)
  }, [scores, fakulteti])

  // Map studij_id -> match result (za fast lookup po karti)
  const matchMap = useMemo(() => {
    if (!matchData) return new Map()
    const m = new Map()
    matchData.results.forEach(r => m.set(r.match.studij_id, r.match))
    return m
  }, [matchData])

  // Personalizacija — split na matched/others temeljem onboarding prefs
  const personalizedView = useMemo(
    () => personalizeFakulteti(fakulteti, prefs),
    [fakulteti, prefs]
  )
  const { hasFiltering } = personalizedView

  // Primijeni search/filter na personalized pool
  const filtered = useMemo(() => {
    const pool = personalizedView.hasFiltering ? personalizedView.matched : fakulteti
    return applyFilters(pool, filter)
  }, [personalizedView, fakulteti, filter])

  // Filter fakulteta na temelju match statusa njegovih studija
  const filteredFakulteti = useMemo(() => {
    const base = filtered.fakulteti
    if (!matchData || matchFilter === 'all') return base
    return base.filter(f => f.studiji.some(s => matchMap.get(s.id)?.status === matchFilter))
  }, [filtered, matchData, matchMap, matchFilter])

  // Agregati za hero stats
  const stats = useMemo(() => {
    const allStudiji = fakulteti.flatMap(f => f.studiji)
    const withPrag = allStudiji.filter(s => s.prag_2025)
    const avg = withPrag.length
      ? Math.round(withPrag.reduce((s, x) => s + x.prag_2025, 0) / withPrag.length)
      : 0
    const nextIspit = allStudiji
      .map(s => daysUntil(s.ispit_iso))
      .filter(d => d !== null && d > 0)
      .sort((a, b) => a - b)[0]
    return {
      totalFak: fakulteti.length,
      totalStudiji: allStudiji.length,
      avg,
      nextIspit
    }
  }, [fakulteti])

  const hasScores = scores && hasMinimumScores(scores)

  // Compare feature
  const compare = useCompare()
  const [compareOpen, setCompareOpen] = useCompareDeepLink(track)
  const [maxToast, setMaxToast] = useState(false)

  const handleCompareAll = (e, f) => {
    e.stopPropagation()
    const max = isPro ? MAX_PRO : MAX_FREE
    let blocked = false
    for (const s of f.studiji) {
      if (compare.count >= max) { blocked = true; break }
      compare.toggle(s.id, isPro)
    }
    if (blocked) setMaxToast(true)
    else track?.('compare_add_all', f.id, null, null, { count: f.studiji.length })
  }

  // Build flat studij map for CompareView + CompareDock
  const allStudijiMap = useMemo(() => {
    const m = new Map()
    for (const f of fakulteti) {
      for (const s of f.studiji) {
        m.set(s.id, { ...s, color: f.color, sym: f.sym, glyph_bg: f.glyph_bg, fak_short: f.short, fakultet_id: f.id })
      }
    }
    return m
  }, [fakulteti])

  const compareStudiji = compare.ids.map(id => allStudijiMap.get(id)).filter(Boolean)

  const handleShare = async () => {
    const ids = compare.ids.join(',')
    const shareUrl = `https://maturiraj.hr/prijemni/compare?ids=${ids}`
    const shareTitle = `Usporedio/la sam ${compare.count} studija za upis 🎯`

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: 'Vidi što sam uspoređivao/la na Maturiraj.hr',
          url: shareUrl,
        })
        track?.('compare_share_native', null, null, null, { count: compare.count })
      } catch {
        // User cancelled — no-op
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        alert('Link kopiran! Podijeli ga sa svima.')
        track?.('compare_share_clipboard', null, null, null, { count: compare.count })
      } catch {
        window.prompt('Kopiraj link:', shareUrl)
      }
    }
  }

  const handleClearScores = async () => {
    if (!confirm('Obrisati sve unesene bodove?')) return
    await deleteUserScores()
    setScores(null)
    setMatchFilter('all')
    track?.('matcher_cleared')
  }

  const handleOpenMatcher = () => {
    setModalOpen(true)
    track?.(hasScores ? 'matcher_edit' : 'matcher_open')
  }

  const handleOnboardingAction = (action) => {
    if (action === 'matcher') {
      handleOpenMatcher()
    } else if (action === 'compare') {
      document.querySelector('.pr-grid')?.scrollIntoView({ behavior: 'smooth' })
    }
    // 'browse' = nothing, ostani na page-u
  }

  // Matura countdown — državna matura 2026 (2. lipnja 2026)
  const now = useCurrentTime()
  const daysToMatura = now === null ? null : Math.ceil((new Date('2026-06-02T08:00:00').getTime() - now) / 86400000)

  return (
    <div className="pr-root">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="pr-orb pr-orb-1"/>
      <div className="pr-orb pr-orb-2"/>
      <div className="pr-orb pr-orb-3"/>

      <div className="pr-wrap pr-up" style={{maxWidth:1040,margin:'0 auto',padding:'0 40px',position:'relative',zIndex:1}}>
        <section className="pr-hero">
          <div className="pr-eye"><span className="pr-eye-dot"/> Prijemni ispiti 2026.</div>
          <h1 className="pr-title">
            Pripremi se. <span className="pr-title-grad">Upiši faks.</span>
          </h1>
          <p className="pr-sub">Unesi bodove jednom — vidi koje fakultete možeš upisati. Kalkulator, datumi i gradivo za svaki studij.</p>

          <div className="pr-stats">
            <div className="pr-stat">
              <div className="pr-stat-n">{stats.totalFak}</div>
              <div className="pr-stat-l">fakulteta</div>
            </div>
            <div className="pr-stat-divider"/>
            <div className="pr-stat">
              <div className="pr-stat-n">{stats.totalStudiji}</div>
              <div className="pr-stat-l">studija</div>
            </div>
            <div className="pr-stat-divider"/>
            <div className="pr-stat">
              <div className="pr-stat-n" style={{color:'var(--gold)'}}>
                {stats.nextIspit ? formatDays(stats.nextIspit) : '\u2014'}
              </div>
              <div className="pr-stat-l">do prvog ispita</div>
            </div>
            <div className="pr-stat-divider"/>
            <div className="pr-stat" title="Državna matura 2026 — 2. lipnja">
              <div className="pr-stat-n" style={{color: daysToMatura === null ? 'var(--text)' : daysToMatura <= 30 ? '#f87171' : daysToMatura <= 60 ? '#fb923c' : 'var(--text)'}}>
                {daysToMatura > 0 ? daysToMatura : '—'}
              </div>
              <div className="pr-stat-l">dana do mature</div>
            </div>
          </div>

          {lastUpdated && (
            <div style={{marginTop:14,fontSize:11,color:'var(--muted)',display:'flex',alignItems:'center',gap:6,flexWrap:'wrap'}}>
              <span style={{width:6,height:6,borderRadius:'50%',background:'#3ecf6e',boxShadow:'0 0 6px #3ecf6e',animation:'pr-pulse 2s ease-in-out infinite',flexShrink:0}}/>
              Podaci ažurirani: {new Date(lastUpdated).toLocaleDateString('hr-HR', {day:'numeric',month:'long',year:'numeric'})}
              {' • '}
              <a href="https://www.postani-student.hr" target="_blank" rel="noopener noreferrer"
                style={{color:'var(--muted)',textDecoration:'underline',textUnderlineOffset:2}}>
                Izvor: AZVO
              </a>
            </div>
          )}
        </section>

        {/* Matcher banner */}
        {!loadingScores && (
          <MatcherBanner
            hasScores={hasScores}
            groups={matchData?.groups}
            onOpen={handleOpenMatcher}
            onClear={handleClearScores}
          />
        )}

        {/* Onboarding modal (auto-show za nove userove, ili force-open za edit) */}
        <OnboardingWizard
          onComplete={(prefs) => {
            setEditPrefsOpen(false)
            track?.('onboarding_personalized', null, null, null, prefs)
          }}
          onAction={handleOnboardingAction}
          track={track}
          forceOpen={editPrefsOpen}
          initialDraft={editPrefsOpen ? {
            razred: prefs.razred ?? null,
            interesi: prefs.interesi ?? [],
            prosjek_band: prefs.prosjek_band ?? null,
            city_preference: prefs.city_preference ?? null,
          } : null}
          proStatus={isPro ? 'allowed' : 'free'}
        />

        {/* Personalization badge */}
        <PersonalizationBadge
          matchedCount={personalizedView.matched.length}
          totalCount={fakulteti.length}
          onReset={() => setFilter(DEFAULT_FILTER)}
          onEdit={() => setEditPrefsOpen(true)}
          track={track}
        />

        {/* Push opt-in — prikazuje se samo kad ima aktivnih urgency deadlinea */}
        {(() => {
          const allStudiji = fakulteti.flatMap(f => f.studiji)
          const hasAnyUrgency = getActiveUrgencies(allStudiji).length > 0
          return hasAnyUrgency ? (
            <div style={{marginBottom:24}}>
              <PushOptInCard
                studijIds={allStudiji.filter(s => s.prijava_do_iso || s.ispit_iso).map(s => s.id)}
                track={track}/>
            </div>
          ) : null
        })()}

        {/* Filter tabs */}
        {hasScores && matchData && (
          <div style={{display:'flex',gap:6,marginBottom:20,flexWrap:'wrap',overflowX:'auto',paddingBottom:4}}>
            {FILTER_TABS.map(t => {
              const count = t.key === 'all'
                ? fakulteti.length
                : fakulteti.filter(f => f.studiji.some(s => matchMap.get(s.id)?.status === t.key)).length
              const active = matchFilter === t.key
              return (
                <button key={t.key} onClick={() => { setMatchFilter(t.key); track?.('matcher_filter', null, null, null, { filter: t.key }) }}
                  style={{
                    padding:'7px 14px',borderRadius:10,fontSize:12.5,fontWeight:600,cursor:'pointer',fontFamily:'var(--fb)',
                    background: active ? (t.color === 'var(--text)' ? 'rgba(255,255,255,.08)' : `${t.color}18`) : 'transparent',
                    color: active ? t.color : 'var(--muted)',
                    border: `1px solid ${active ? (t.color === 'var(--text)' ? 'var(--bdr-hi)' : `${t.color}44`) : 'var(--bdr)'}`,
                    whiteSpace:'nowrap',transition:'all .15s',display:'inline-flex',alignItems:'center',gap:6,
                  }}>
                  <span>{t.label}</span>
                  <span style={{fontSize:10,opacity:.7,fontWeight:700}}>{count}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Search + filter bar */}
        <SearchFilterBar
          filter={filter}
          setFilter={setFilter}
          defaultFilter={DEFAULT_FILTER}
          totalStudiji={filtered.studiji.length}
          track={track}
          isPro={isPro}
          forceOpen={filterOpen}
          onForceOpenHandled={() => setFilterOpen(false)}
        />

        {/* Results count + clear hint */}
        <div style={{marginBottom:16,fontSize:13,color:'var(--muted)'}}>
          {filteredFakulteti.length === 0 ? (
            <span>
              Nema rezultata za tvoje filtere.{' '}
              <button onClick={() => setFilter(DEFAULT_FILTER)} style={{
                background:'transparent',border:'none',color:'var(--blue)',cursor:'pointer',
                fontFamily:'var(--fb)',fontSize:13,padding:0,textDecoration:'underline'
              }}>
                Očisti filtere
              </button>
            </span>
          ) : (
            `Prikazano ${filteredFakulteti.length} ${filteredFakulteti.length === 1 ? 'fakultet' : 'fakulteta'}, ${filtered.studiji.length} ${filtered.studiji.length === 1 ? 'studij' : 'studija'}.`
          )}
        </div>

        {hasFiltering && filteredFakulteti.length > 0 && (
          <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:14}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'#6b9bff',fontFamily:'var(--fm, monospace)',whiteSpace:'nowrap'}}>
              ✦ Za tebe
            </div>
            <div style={{flex:1,height:1,background:'rgba(75,123,255,.18)'}}/>
          </div>
        )}
        <div className="pr-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:12,marginBottom:hasFiltering && personalizedView.others.length > 0 ? 24 : 44}}>
          {filteredFakulteti.map(f => {
            const studijiMatches = f.studiji.map(s => matchMap.get(s.id)).filter(Boolean)
            const bestMatch = hasScores && studijiMatches.length > 0
              ? studijiMatches.reduce((best, curr) => {
                  const order = { safe: 0, borderline: 1, risky: 2, no_data: 3, incomputable: 4 }
                  return order[curr.status] < order[best.status] ? curr : best
                })
              : null

            const pragovi = f.studiji.map(s => s.prag_2025).filter(Boolean)
            const pragMin = pragovi.length ? Math.min(...pragovi) : null
            const pragMax = pragovi.length ? Math.max(...pragovi) : null
            const hasPopular = f.studiji.some(s => s.popularnost >= 80)
            const hasKalk = f.studiji.some(s => s.kalk !== null)
            const nextDays = f.studiji
              .map(s => daysUntil(s.ispit_iso))
              .filter(d => d !== null && d > 0)
              .sort((a, b) => a - b)[0]
            const urgent = nextDays !== undefined && nextDays <= 30

            const ringColor = bestMatch
              ? { safe: '#3ecf6e', borderline: '#fb923c', risky: '#f87171', no_data: null, incomputable: null }[bestMatch.status]
              : null

            return (
              <div key={f.id} className="pr-fcard" onClick={() => onSelect(f)}
                style={{
                  borderColor: ringColor ? `${ringColor}55` : 'var(--bdr)',
                  boxShadow: ringColor ? `0 0 0 1px ${ringColor}22, 0 8px 28px -8px ${ringColor}33` : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = ringColor ? `${ringColor}88` : f.color + '55'
                  e.currentTarget.style.boxShadow = ringColor
                    ? `0 0 0 1px ${ringColor}44, 0 18px 48px -12px ${ringColor}44`
                    : `0 18px 48px -12px ${f.color}33`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = ringColor ? `${ringColor}55` : 'var(--bdr)'
                  e.currentTarget.style.boxShadow = ringColor
                    ? `0 0 0 1px ${ringColor}22, 0 8px 28px -8px ${ringColor}33`
                    : 'none'
                }}>
                <div className="pr-fcard-tophalo" style={{background:`radial-gradient(circle,${ringColor || f.color}44,transparent 70%)`}}/>

                <div className="pr-fcard-top">
                  <div className="pr-fcard-glyph" style={{background:f.glyph_bg}}>{f.sym}</div>
                  <div className="pr-fcard-tags">
                    {bestMatch && <MatchBadge match={bestMatch} studijiCount={f.studiji.length} groupCount={studijiMatches.filter(m => m.status === bestMatch.status).length}/>}
                    {hasPopular && !bestMatch && <span className="pr-tag pr-tag-hot">⚡ Traženo</span>}
                    {hasKalk && <span className="pr-tag pr-tag-kalk">&#x1F9EE;</span>}
                    <span className="pr-tag pr-tag-count">{f.studiji.length} {f.studiji.length === 1 ? 'studij' : 'studija'}</span>
                  </div>
                </div>

                <div className="pr-fcard-name">{f.short}</div>
                <div className="pr-fcard-full">{f.name}</div>

                <div className="pr-prag-summary">
                  <div className="pr-prag-summary-row">
                    <span>Raspon pragova 2025.</span>
                    {bestMatch && bestMatch.razlika !== null && bestMatch.status !== 'no_data' && bestMatch.status !== 'incomputable' && (
                      <span style={{fontWeight:700,color:ringColor}}>
                        {bestMatch.razlika >= 0 ? `+${bestMatch.razlika}` : bestMatch.razlika} bod.
                      </span>
                    )}
                  </div>
                  {pragMin !== null ? (
                    pragMin === pragMax ? (
                      <div className="pr-prag-range" style={{color: pragZona(pragMax)}}>
                        {pragMax}<span style={{fontSize:11,color:'var(--muted)',fontWeight:500,marginLeft:4}}>/1000</span>
                      </div>
                    ) : (
                      <div className="pr-prag-range">
                        <span style={{color: pragZona(pragMin)}}>{pragMin}</span>
                        <span style={{color:'var(--muted)',margin:'0 6px',fontWeight:400}}>&ndash;</span>
                        <span style={{color: pragZona(pragMax)}}>{pragMax}</span>
                      </div>
                    )
                  ) : (
                    <div style={{fontSize:12,color:'var(--muted)',fontStyle:'italic'}}>pragovi nisu objavljeni</div>
                  )}
                </div>

                <div className="pr-fcard-bot">
                  {nextDays !== undefined ? (
                    <div className="pr-fcard-cd" style={{color: urgent ? '#fb923c' : 'var(--muted)'}}>
                      <span>{urgent ? '\uD83D\uDD25' : '\uD83D\uDCC5'}</span>
                      <span>Ispit za <strong style={{color: urgent ? '#fb923c' : 'var(--text)'}}>{formatDays(nextDays)}</strong></span>
                    </div>
                  ) : <span/>}
                  <div style={{display:'flex',alignItems:'center',gap:8}}>
                    {f.studiji.length > 1 && (
                      <button
                        onClick={(e) => handleCompareAll(e, f)}
                        title={`Dodaj sva ${f.studiji.length} studija u usporedbu`}
                        style={{
                          padding:'3px 9px',borderRadius:7,fontSize:10,fontWeight:700,cursor:'pointer',
                          fontFamily:'var(--fb)',whiteSpace:'nowrap',
                          background:'rgba(75,123,255,.10)',color:'var(--blue)',
                          border:'1px solid rgba(75,123,255,.25)',transition:'all .15s',
                        }}
                        onMouseEnter={e=>{e.currentTarget.style.background='rgba(75,123,255,.2)';e.currentTarget.style.borderColor='rgba(75,123,255,.5)'}}
                        onMouseLeave={e=>{e.currentTarget.style.background='rgba(75,123,255,.10)';e.currentTarget.style.borderColor='rgba(75,123,255,.25)'}}>
                        ⊕ Usporedi sve
                      </button>
                    )}
                    <div className="pr-fcard-arrow">&rarr;</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {personalizedView.hasFiltering && personalizedView.others.length > 0 && filter.query === '' && activeFilterCount(filter) === 0 && (
          <>
            <div style={{display:'flex',alignItems:'center',gap:10,margin:'28px 0 14px'}}>
              <div style={{fontSize:11,fontWeight:700,letterSpacing:'.08em',textTransform:'uppercase',color:'var(--muted)',fontFamily:'var(--fm, monospace)',whiteSpace:'nowrap'}}>
                Ostatak fakulteta
              </div>
              <div style={{flex:1,height:1,background:'var(--bdr)'}}/>
            </div>
            <div className="pr-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:12,marginBottom:44,opacity:.65}}>
              {personalizedView.others.map(f => {
                const studijiMatches = f.studiji.map(s => matchMap.get(s.id)).filter(Boolean)
                const bestMatch = hasScores && studijiMatches.length > 0
                  ? studijiMatches.reduce((best, curr) => {
                      const order = { safe: 0, borderline: 1, risky: 2, no_data: 3, incomputable: 4 }
                      return order[curr.status] < order[best.status] ? curr : best
                    })
                  : null
                const pragovi = f.studiji.map(s => s.prag_2025).filter(Boolean)
                const pragMin = pragovi.length ? Math.min(...pragovi) : null
                const pragMax = pragovi.length ? Math.max(...pragovi) : null
                const hasPopular = f.studiji.some(s => s.popularnost >= 80)
                const hasKalk = f.studiji.some(s => s.kalk !== null)
                const nextDays = f.studiji.map(s => daysUntil(s.ispit_iso)).filter(d => d !== null && d > 0).sort((a, b) => a - b)[0]
                const urgent = nextDays !== undefined && nextDays <= 30
                const ringColor = null
                return (
                  <div key={f.id} className="pr-fcard" onClick={() => onSelect(f)}
                    style={{ borderColor: 'var(--bdr)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = f.color + '55' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--bdr)' }}>
                    <div className="pr-fcard-tophalo" style={{background:`radial-gradient(circle,${f.color}33,transparent 70%)`}}/>
                    <div className="pr-fcard-top">
                      <div className="pr-fcard-glyph" style={{background:f.glyph_bg}}>{f.sym}</div>
                      <div className="pr-fcard-tags">
                        {hasPopular && <span className="pr-tag pr-tag-hot">⚡ Traženo</span>}
                        {hasKalk && <span className="pr-tag pr-tag-kalk">&#x1F9EE;</span>}
                        <span className="pr-tag pr-tag-count">{f.studiji.length} {f.studiji.length === 1 ? 'studij' : 'studija'}</span>
                      </div>
                    </div>
                    <div className="pr-fcard-name">{f.short}</div>
                    <div className="pr-fcard-full">{f.name}</div>
                    <div className="pr-prag-summary">
                      <div className="pr-prag-summary-row"><span>Raspon pragova 2025.</span></div>
                      {pragMin !== null ? (
                        pragMin === pragMax
                          ? <div className="pr-prag-range" style={{color: pragZona(pragMax)}}>{pragMax}<span style={{fontSize:11,color:'var(--muted)',fontWeight:500,marginLeft:4}}>/1000</span></div>
                          : <div className="pr-prag-range"><span style={{color:pragZona(pragMin)}}>{pragMin}</span><span style={{color:'var(--muted)',margin:'0 6px',fontWeight:400}}>&ndash;</span><span style={{color:pragZona(pragMax)}}>{pragMax}</span></div>
                      ) : <div style={{fontSize:12,color:'var(--muted)',fontStyle:'italic'}}>pragovi nisu objavljeni</div>}
                    </div>
                    <div className="pr-fcard-bot">
                      {nextDays !== undefined ? <div className="pr-fcard-cd" style={{color:urgent?'#fb923c':'var(--muted)'}}><span>{urgent?'🔥':'📅'}</span><span>Ispit za <strong style={{color:urgent?'#fb923c':'var(--text)'}}>{formatDays(nextDays)}</strong></span></div> : <span/>}
                      <div className="pr-fcard-arrow">&rarr;</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}

        <div style={{marginTop:28,marginBottom:40,padding:'14px 18px',borderRadius:12,background:'var(--s1)',border:'1px solid var(--bdr)',fontSize:12,color:'var(--muted)',display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}}>
          <span>&#8505;</span>
          <span>Bodovni pragovi prikazuju minimum zadnjeg upisanog studenta (AZVO 2025). {hasScores ? 'Zelena oznaka = siguran upis, \u017euta = granica, crvena = riskantno.' : 'Unesi bodove za personalizirani match.'}</span>
        </div>
      </div>

      {/* Matcher modal */}
      <ScoreMatcherModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialScores={scores}
        onSaved={(saved) => setScores(saved)}
        track={track}
      />

      {/* Compare feature */}
      <CompareDock
        fakulteti={fakulteti}
        onOpenCompare={() => setCompareOpen(true)}
        isPro={false}
        track={track}
      />
      <CompareView
        open={compareOpen}
        onClose={() => setCompareOpen(false)}
        studiji={compareStudiji}
        onRemove={compare.remove}
        onShare={handleShare}
        track={track}
      />
      <MaxReachedToast
        show={maxToast}
        onClose={() => setMaxToast(false)}
        isPro={false}
      />

      {/* #4 — Mobile list view bottom nav */}
      <ListViewBottomNav
        onOpenMatcher={handleOpenMatcher}
        onOpenCompare={() => setCompareOpen(true)}
        onOpenFilter={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
          // Small delay so the scroll starts before the filter panel pops
          setTimeout(() => setFilterOpen(true), 280)
        }}
        track={track}
      />
    </div>
  )
}

function MatchBadge({ match, studijiCount, groupCount }) {
  const config = {
    safe: { color: '#3ecf6e', bg: 'rgba(62,207,110,.14)', bdr: 'rgba(62,207,110,.3)', label: 'Siguran' },
    borderline: { color: '#fb923c', bg: 'rgba(251,146,60,.14)', bdr: 'rgba(251,146,60,.3)', label: 'Granica' },
    risky: { color: '#f87171', bg: 'rgba(248,113,113,.14)', bdr: 'rgba(248,113,113,.3)', label: 'Riskantno' },
    no_data: { color: 'var(--muted)', bg: 'rgba(106,130,168,.12)', bdr: 'var(--bdr)', label: 'Nedovoljno podataka' },
    incomputable: { color: 'var(--muted)', bg: 'rgba(106,130,168,.12)', bdr: 'var(--bdr)', label: 'Audicija/test' },
  }[match.status]

  return (
    <span style={{
      fontSize:9.5,fontWeight:700,padding:'3px 8px',borderRadius:99,letterSpacing:'.04em',
      textTransform:'uppercase',whiteSpace:'nowrap',
      background:config.bg,color:config.color,border:`1px solid ${config.bdr}`,
    }}>
      {config.label} {groupCount < studijiCount ? `(${groupCount}/${studijiCount})` : ''}
    </span>
  )
}

function OthersSection({ others, onSelect }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div style={{marginTop:32,paddingTop:28,borderTop:'1px dashed var(--bdr)'}}>
      <button onClick={() => setExpanded(e => !e)} style={{
        width:'100%',padding:'14px 18px',borderRadius:11,
        background:'rgba(255,255,255,.03)',border:'1px solid var(--bdr)',
        display:'flex',alignItems:'center',justifyContent:'space-between',cursor:'pointer',
        fontFamily:'var(--fb)',
      }}>
        <div style={{textAlign:'left'}}>
          <div style={{fontSize:13,fontWeight:700,color:'var(--text)'}}>
            Ostali fakulteti ({others.length})
          </div>
          <div style={{fontSize:11,color:'var(--muted)',marginTop:2}}>
            Izvan tvojih označenih interesa
          </div>
        </div>
        <span style={{color:'var(--muted)',fontSize:14}}>{expanded ? '▴' : '▾'}</span>
      </button>

      {expanded && (
        <div className="pr-grid" style={{
          display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:12,marginTop:16,
          opacity:.85,
        }}>
          {others.map(f => (
            <div key={f.id} className="pr-fcard" onClick={() => onSelect(f)}>
              <div className="pr-fcard-top">
                <div className="pr-fcard-glyph" style={{background:f.glyph_bg}}>{f.sym}</div>
              </div>
              <div className="pr-fcard-name">{f.short}</div>
              <div className="pr-fcard-full">{f.name}</div>
              <div style={{marginTop:'auto',fontSize:11,color:'var(--muted)'}}>
                {f.studiji.length} {f.studiji.length === 1 ? 'studij' : 'studija'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
