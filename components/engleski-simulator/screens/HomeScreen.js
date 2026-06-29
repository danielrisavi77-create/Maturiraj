'use client'
import React, { createElement as e, useState, useEffect, useRef, Fragment } from 'react'
import { FocusTrap } from '../components/SimSharedUI'

export function DisclaimerModal({ onClose }) {
  return e('div', { className: 'disclaimer-modal-overlay', onClick: ev => { if (ev.target === ev.currentTarget) onClose() } },
    e(FocusTrap, { label: 'O simulatoru', onClose, className: 'disclaimer-modal' },
      e('div', { className: 'dm-tag' }, 'ℹ️ O simulatoru'),
      e('h3', null, 'Discere · Engleski jezik'),
      e('p', null, e('strong', null, 'Discere Simulator'), ' pokriva obje razine — Osnovna (B2) i Višu razinu (C1). Sadrži pitanja s originalnih NCVVO ispita s točnim odgovorima i objašnjenjima.'),
      e('div', { className: 'dm-section' },
        e('p', null, e('strong', null, 'Napomena o slušanju: '), 'Listening zadaci prikazuju se s tekstom umjesto audio zapisa. Za pravo vježbanje slušanja, koristi NCVVO audio materijale.'),
        e('p', { style: { marginBottom: 0 } }, 'Ispitna pitanja su vlasništvo ', e('a', { href: 'https://www.ncvvo.hr', target: '_blank', rel: 'noopener' }, 'NCVVO-a'), '. © ' + new Date().getFullYear() + ' Discere · ', e('a', { href: 'mailto:info@discere.app' }, 'info@discere.app')),
      ),
      e('div', { style: { marginTop: 20, textAlign: 'right' } }, e('button', { className: 'btn btn-blue', onClick: onClose }, 'Razumijem')),
    ),
  )
}

export function Home({
  onModeSelect,
  userData,
  toggles,
  goErrors,
  goBookmarks,
  goStats,
  goBrowse,
  goDailyChallenge,
  goVirtualExam,
  goFilter,
  goVocab,
  goCompare,
  visaLoaded,
  examsMap,
  levelNames,
  getLevel,
  xpProgress,
  xpToNext,
}) {
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [homeSearch, setHomeSearch] = useState('')
  const [homeRazina, setHomeRazina] = useState('sve')
  const [homeListState, setHomeListState] = useState({ open: false, ver: 0 })
  const examList = Object.values(examsMap || {})
  const osnoRef = useRef(null)
  const visaRef = useRef(null)

  function YearGroup({ year, yearExams, razina, defaultOpen, userData: ud }) {
    const ssKey = 'ygopen_' + razina + '_' + year
    const [open, setOpen] = useState(() => {
      try { const v = sessionStorage.getItem(ssKey); return v !== null ? v === '1' : !!defaultOpen } catch { return !!defaultOpen }
    })
    const totalQY = yearExams.reduce((a, ex) => a + ex.qs.length, 0)
    const history = ud?.history || []
    const isVisa = razina === 'visa'
    return e('div', { className: 'year-group' + (isVisa ? ' visa' : '') },
      e('button', { className: 'year-group-header' + (open ? ' open' : ''), onClick: () => setOpen(o => { const n = !o; try { sessionStorage.setItem(ssKey, n ? '1' : '0') } catch {}; return n }) },
        e('div', { className: 'ygh-year' }, year),
        e('div', { className: 'ygh-info' },
          e('span', { className: 'ygh-title' }, isVisa ? 'Viša razina' : 'Osnovna razina'),
          e('span', { className: 'ygh-sub' }, yearExams.length + ' ispit' + (yearExams.length > 1 ? 'a' : '') + ' · ' + totalQY + ' pitanja'),
        ),
        e('span', { className: 'ygh-arrow' }, open ? '▲' : '▼'),
      ),
      e('div', { className: 'year-group-body' + (open ? ' open' : '') },
        yearExams.map(ex => {
          const done = history.find(h => h.examKey === ex.key)
          const donePct = done?.pct
          const doneCol = donePct == null ? null : donePct >= 70 ? 'var(--green)' : donePct >= 55 ? 'var(--gold)' : 'var(--red)'
          return e('div', { key: ex.key, className: 'exrow-sub' + (isVisa ? ' visa' : ''), role: 'button', tabIndex: 0, onClick: () => onModeSelect(ex.key), onKeyDown: ev => { if (ev.key === ' ' || ev.key === 'Enter') { ev.preventDefault(); onModeSelect(ex.key) } } },
            e('span', { className: 'exrow-sub-season ' + (ex.season === 'ljeto' ? 'ljeto' : ex.season === 'zima' ? 'zima' : 'jesen'), style: isVisa ? { color: '#8b5cf6' } : {} }, ex.season === 'ljeto' ? '☀️ Ljetni' : ex.season === 'zima' ? '❄️ Zimski' : '🍂 Jesenski'),
            e('span', { className: 'exrow-sub-info' },
              ex.qs.length + ' pitanja',
              isVisa && e('span', { className: 'razina-badge visa', style: { marginLeft: 8 } }, '★ Viša'),
              ex.hasListening === false && e('span', { style: { marginLeft: 8, fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 99, background: 'rgba(233,180,70,.12)', border: '1px solid rgba(233,180,70,.25)', color: 'var(--gold)' } }, 'bez 🎧'),
              ex.hasReading === false && e('span', { style: { marginLeft: 8, fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 99, background: 'rgba(32,69,184,.1)', border: '1px solid rgba(32,69,184,.25)', color: 'var(--blue)' } }, 'bez 📖'),
              donePct != null && e('span', { style: { marginLeft: 8, fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 99, background: doneCol + '22', border: '1px solid ' + doneCol + '44', color: doneCol } }, '✓ ' + donePct + '%'),
            ),
            e('span', { className: 'exrow-sub-arrow' }, '→'),
          )
        }),
      ),
    )
  }

  return e(Fragment, null,
    showDisclaimer && e(DisclaimerModal, { onClose: () => setShowDisclaimer(false) }),
    e('div', { className: 'nav' },
      e('span', { className: 'ntitle', style: { fontFamily: 'var(--fh)' } }, 'Discere'),
      e('span', { style: { color: 'var(--muted)', fontSize: 13, margin: '0 4px' } }, '›'),
      e('span', { className: 'ntitle' }, 'Engleski'),
      e('span', { className: 'nbadge' }, 'Simulator mature'),
      toggles,
    ),
    e('div', { className: 'home' },
      e('div', { className: 'hero' },
        e('div', { className: 'hero-icon' }, '🇬🇧'),
        e('h1', null, 'Engleski jezik ', e('em', null, '— Simulator mature')),
        e('p', null, 'Vježbaj stvarne ispite državne mature iz engleskog jezika. Sva pitanja s originalnih NCVVO ispita za obje razine — s točnim odgovorima i objašnjenjima.'),
      ),
      userData && userData.xp >= 0 && (userData.history || []).length > 0 && e('div', { style: { maxWidth: 480, margin: '-16px auto 36px', padding: '0 4px' } },
        e('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, flexWrap: 'wrap', gap: 8 } },
          e('div', { className: 'level-badge' }, '⭐ ' + (levelNames[getLevel(userData.xp)] || 'Početnik')),
          userData.streak > 0 && e('div', { className: 'streak-badge' }, e('span', { className: 'streak-fire' }, '🔥'), userData.streak + ' ' + (userData.streak === 1 ? 'dan' : 'dana') + ' zaredom'),
          e('div', { style: { fontSize: 12, color: 'var(--muted)' } }, (userData.xp || 0) + ' XP'),
        ),
        e('div', { className: 'xp-bar-wrap' }, e('div', { className: 'xp-bar', style: { width: xpProgress(userData.xp || 0) + '%' } })),
        e('div', { className: 'xp-label' }, e('span', null, 'Razina ' + (getLevel(userData.xp || 0) + 1)), xpToNext(userData.xp || 0) > 0 && e('span', null, xpToNext(userData.xp || 0) + ' XP do sljedeće razine')),
      ),
      e('div', { className: 'razine-grid', style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 } },
        e('button', { className: 'razina-card osnovna', onClick: () => osnoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), type: 'button', 'aria-label': 'Osnovna razina — skoči na pregled ispita' },
          e('div', { className: 'razina-card-header' },
            e('span', { className: 'razina-card-tag osnovna' }, 'B razina'),
            e('span', { className: 'razina-card-level' }, 'B2'),
          ),
          e('div', { className: 'razina-card-title' }, 'Osnovna razina'),
          e('div', { className: 'razina-card-desc' }, 'Reading, Writing i Listening. Provjeri znanje na stvarnim ispitima od 2010. do 2025.'),
          e('div', { className: 'razina-card-footer' },
            e('span', { className: 'razina-card-stat' }, examList.filter(ex => ex.razina === 'osnovna').length + ' ispita'),
            e('span', { className: 'razina-card-cta' }, 'Odaberi ispit →'),
          ),
        ),
        e('button', { className: 'razina-card visa', onClick: () => visaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), type: 'button', 'aria-label': 'Viša razina — skoči na pregled ispita' },
          e('div', { className: 'razina-card-header' },
            e('span', { className: 'razina-card-tag visa' }, 'A razina'),
            e('span', { className: 'razina-card-level' }, 'C1'),
          ),
          e('div', { className: 'razina-card-title' }, 'Viša razina'),
          e('div', { className: 'razina-card-desc' }, 'Reading, Writing i Listening s kompleksnijim tekstovima i gramatikom. Za odlične ocjene.'),
          e('div', { className: 'razina-card-footer' },
            e('span', { className: 'razina-card-stat' }, examList.filter(ex => ex.razina === 'visa').length + ' ispita'),
            e('span', { className: 'razina-card-cta' }, 'Odaberi ispit →'),
          ),
        ),
      ),
      e('div', { className: 'alati-wrap' },
        e('div', { className: 'alati-primary' },
          e('button', { className: 'alati-card alati-card-gold', onClick: goVirtualExam },
            e('div', { className: 'alati-card-ico' }, '🎲'),
            e('div', { className: 'alati-card-body' },
              e('div', { className: 'alati-card-title' }, 'Virtualni ispit'),
              e('div', { className: 'alati-card-desc' }, 'Nasumičan ispit — simuliraj pravi uvjete mature'),
            ),
            e('div', { className: 'alati-card-arrow' }, '→'),
          ),
          e('button', { className: 'alati-card alati-card-blue', onClick: goFilter },
            e('div', { className: 'alati-card-ico' }, '🎯'),
            e('div', { className: 'alati-card-body' },
              e('div', { className: 'alati-card-title' }, 'Vježbaj po temi'),
              e('div', { className: 'alati-card-desc' }, 'Odaberi sekciju, tip pitanja ili godinu ispita'),
            ),
            e('div', { className: 'alati-card-arrow' }, '→'),
          ),
          e('button', { className: 'alati-card alati-card-teal', onClick: goCompare },
            e('div', { className: 'alati-card-ico' }, '⚖'),
            e('div', { className: 'alati-card-body' },
              e('div', { className: 'alati-card-title' }, 'Usporedi ispite'),
              e('div', { className: 'alati-card-desc' }, 'Ljetni vs jesenski, osnovna vs viša, ja vs NCE'),
            ),
            e('div', { className: 'alati-card-arrow' }, '→'),
          ),
        ),
        e('div', { className: 'alati-secondary' },
          e('button', {
            className: 'alati-sm' + (!(userData?.history || []).length ? ' alati-sm-dim' : ''),
            onClick: (userData?.history || []).length ? goErrors : null,
            'aria-disabled': !(userData?.history || []).length,
            title: !(userData?.history || []).length ? 'Najprije riješi ispit da bi vidio/la greške' : undefined,
          },
            e('div', { className: 'alati-sm-ico alati-ico-red' }, '🔁'),
            e('div', { className: 'alati-sm-body' },
              e('div', { className: 'alati-sm-title' }, 'Ponovi greške'),
              e('div', { className: 'alati-sm-sub' }, (userData?.history || []).length ? Object.values(userData.errorTracker || {}).filter(x => x.count > 0).length + ' pitanja' : 'Riješi ispit prvo'),
            ),
          ),
          e('button', {
            className: 'alati-sm' + (!(userData?.history || []).length ? ' alati-sm-dim' : ''),
            onClick: (userData?.history || []).length ? goStats : null,
            'aria-disabled': !(userData?.history || []).length,
            title: !(userData?.history || []).length ? 'Najprije riješi ispit da bi vidio/la statistike' : undefined,
          },
            e('div', { className: 'alati-sm-ico alati-ico-blue' }, '📊'),
            e('div', { className: 'alati-sm-body' },
              e('div', { className: 'alati-sm-title' }, 'Statistike'),
              e('div', { className: 'alati-sm-sub' }, (userData?.history || []).length ? (userData.history || []).length + ' ispita riješeno' : 'Nema podataka'),
            ),
          ),
          e('button', { className: 'alati-sm', onClick: goDailyChallenge },
            e('div', { className: 'alati-sm-ico alati-ico-green' }, '⚡'),
            e('div', { className: 'alati-sm-body' },
              e('div', { className: 'alati-sm-title' }, 'Dnevni izazov'),
              e('div', { className: 'alati-sm-sub' }, '5 pitanja danas'),
            ),
          ),
          e('button', {
            className: 'alati-sm' + (!(userData?.errorTracker && Object.values(userData.errorTracker).some(er => er.count > 0)) ? ' alati-sm-dim' : ''),
            onClick: goVocab,
            'aria-disabled': !(userData?.errorTracker && Object.values(userData.errorTracker).some(er => er.count > 0)),
            title: !(userData?.errorTracker && Object.values(userData.errorTracker).some(er => er.count > 0)) ? 'Rječnik je prazan — riješi ispit da bi nakupio/la greške' : undefined,
          },
            e('div', { className: 'alati-sm-ico alati-ico-purple' }, '📖'),
            e('div', { className: 'alati-sm-body' },
              e('div', { className: 'alati-sm-title' }, 'Rječnik grešaka'),
              e('div', { className: 'alati-sm-sub' }, (() => {
                const n = Object.values(userData?.errorTracker || {}).filter(er => er.count > 0).length
                return n > 0 ? n + ' pojmova' : 'Nema još grešaka'
              })()),
            ),
          ),
          e('button', {
            className: 'alati-sm' + (!(userData?.history || []).length ? ' alati-sm-dim' : ''),
            onClick: (userData?.history || []).length ? goBookmarks : null,
            'aria-disabled': !(userData?.history || []).length,
            title: !(userData?.history || []).length ? 'Riješi ispit da bi mogao/la dodavati pitanja u Spremnena' : undefined,
          },
            e('div', { className: 'alati-sm-ico alati-ico-gold' }, '🔖'),
            e('div', { className: 'alati-sm-body' },
              e('div', { className: 'alati-sm-title' }, 'Spremljena'),
              e('div', { className: 'alati-sm-sub' }, (() => { try { const n = Object.keys(JSON.parse(localStorage.getItem('disc_eng_bookmarks') || '{}')).length; return n > 0 ? n + ' pitanja' : 'Ništa još' } catch { return 'Ništa još' } })()),
            ),
          ),
        ),
      ),
      e('div', { id: 'exams' },
        e('div', { className: 'home-search-bar' },
          e('div', { className: 'home-search-input-wrap' },
            e('span', { className: 'home-search-icon' }, '🔍'),
            e('input', {
              type: 'text',
              className: 'home-search-input',
              placeholder: 'Pretraži ispit — godina, rok... (npr. 2023 ili ljeto)',
              value: homeSearch,
              onChange: ev => setHomeSearch(ev.target.value),
              onKeyDown: ev => ev.key === 'Escape' && setHomeSearch(''),
            }),
            homeSearch && e('button', { className: 'home-search-clear', onClick: () => setHomeSearch('') }, '✕'),
            e('button', {
              className: 'home-browse-btn',
              onClick: () => setHomeListState(s => ({ open: !s.open, ver: s.ver + 1 })),
              title: homeListState.open ? 'Sklopi sve ispite' : 'Raširi sve ispite',
            }, homeListState.open ? '▲' : '▼'),
            e('button', { className: 'home-browse-btn', onClick: goBrowse, title: 'Pregledaj sva pitanja' }, '📖'),
          ),
          e('div', { className: 'home-razina-tabs' },
            ['sve', 'visa', 'osnovna'].map(r => e('button', {
              key: r,
              className: 'home-razina-tab' + (homeRazina === r ? ' active' : ''),
              'data-r': r,
              onClick: () => setHomeRazina(r),
            }, r === 'sve' ? 'Sve razine' : r === 'visa' ? 'A — Viša' : 'B — Osnovna')),
          ),
        ),
        (() => {
          const s = homeSearch.toLowerCase().trim()
          const osnovni = examList.filter(ex => {
            if (ex.razina !== 'osnovna') return false
            if (homeRazina === 'visa') return false
            if (!s) return true
            return String(ex.year).includes(s) || ex.season.includes(s) || ex.label.toLowerCase().includes(s) || (s === 'zima' && ex.season === 'zima') || (s === 'ljeto' && ex.season === 'ljeto') || (s === 'jesen' && ex.season === 'jesen')
          })
          const visa = examList.filter(ex => {
            if (ex.razina !== 'visa') return false
            if (homeRazina === 'osnovna') return false
            if (!s) return true
            return String(ex.year).includes(s) || ex.season.includes(s) || ex.label.toLowerCase().includes(s) || (s === 'zima' && ex.season === 'zima') || (s === 'ljeto' && ex.season === 'ljeto') || (s === 'jesen' && ex.season === 'jesen')
          })
          const osnovniYears = [...new Set(osnovni.map(ex => ex.year))].sort((a, b) => b - a)
          const visaYears = [...new Set(visa.map(ex => ex.year))].sort((a, b) => b - a)
          const latestYear = Math.max(...examList.map(ex => ex.year))
          const isFiltered = !!s
          const noResults = osnovniYears.length === 0 && visaYears.length === 0

          function RazinaGroup({ label, color, years, exams, razina, anchorId, sectionRef, globalOpen, userData: ud }) {
            const [allOpen, setAllOpen] = useState(false)
            const [resetKey, setResetKey] = useState(0)
            useEffect(() => {
              if (globalOpen && globalOpen.ver > 0) {
                setAllOpen(globalOpen.open)
                setResetKey(k => k + 1)
              }
            }, [globalOpen?.ver, globalOpen?.open])
            function toggleAll() {
              setAllOpen(o => !o)
              setResetKey(k => k + 1)
            }
            return e(Fragment, null,
              e('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, marginTop: visaYears.length > 0 && razina === 'osnovna' ? 20 : 0 } },
                e('div', { id: anchorId, ref: sectionRef, className: 'exhdr-visa', style: { color, margin: 0, flex: 1 } }, label),
                e('div', { style: { display: 'flex', gap: 6 } },
                  e('button', { className: 'exams-toggle-btn', onClick: toggleAll }, allOpen ? 'Zatvori sve ▲' : 'Otvori sve ▼'),
                ),
              ),
              years.map(year => e(YearGroup, {
                key: razina + '-' + year + '-' + resetKey,
                year,
                razina,
                yearExams: exams.filter(ex => ex.year === year),
                defaultOpen: isFiltered || allOpen || (year === latestYear),
                userData: ud,
              })),
            )
          }

          return e(Fragment, null,
            isFiltered && e('div', { className: 'home-search-results' },
              noResults
                ? "Nema ispita za '" + homeSearch + "'"
                : (osnovniYears.length + visaYears.length) + ' ' + (osnovniYears.length + visaYears.length === 1 ? 'godina' : 'godine') + ' · ' + (osnovni.length + visa.length) + ' ispita',
            ),
            !visaLoaded && (homeRazina === 'visa' || homeRazina === 'sve') && e('div', {
              id: 'exams-visa',
              style: { display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', marginBottom: 16, fontSize: 13, color: 'var(--muted)' },
            },
              e('span', { style: { fontSize: 16 } }, '⏳'),
              'Učitavanje ispita više razine...',
            ),
            visaLoaded && visaYears.length > 0 && e(RazinaGroup, {
              label: 'A — Viša razina',
              color: '#8b5cf6',
              years: visaYears,
              exams: visa,
              razina: 'visa',
              anchorId: 'exams-visa',
              sectionRef: visaRef,
              globalOpen: homeListState,
              userData,
            }),
            osnovniYears.length > 0 && e(RazinaGroup, {
              label: 'B — Osnovna razina',
              color: 'var(--blue)',
              years: osnovniYears,
              exams: osnovni,
              razina: 'osnovna',
              anchorId: 'exams-osnovna',
              sectionRef: osnoRef,
              globalOpen: homeListState,
              userData,
            }),
            noResults && e('div', { className: 'home-search-empty' },
              e('div', { style: { fontSize: 28, marginBottom: 12 } }, '🔍'),
              e('div', { style: { fontWeight: 600, marginBottom: 6 } }, 'Nema rezultata'),
              e('div', { style: { fontSize: 13, color: 'var(--muted)' } }, 'Pokušaj s godinom (npr. 2022) ili rokom (ljeto, jesen, zima)'),
              e('button', {
                className: 'btn btn-g',
                style: { marginTop: 14, fontSize: 13 },
                onClick: () => { setHomeSearch(''); setHomeRazina('sve') },
              }, 'Ukloni filtere'),
            ),
            examList.length === 0 && e('div', { className: 'empty-exams' },
              e('div', { className: 'empty-exams-ico' }, '📭'),
              e('div', { className: 'empty-exams-title' }, 'Ispiti se uskoro dodaju'),
              e('div', { className: 'empty-exams-sub' }, 'Baza ispita se puni postupno iz originalnih NCVVO materijala.'),
            ),
          )
        })(),
      ),
      e('div', { className: 'disclaimer-banner' },
        e('strong', null, '📋 O ispitnim pitanjima: '),
        'Sva pitanja preuzeta su iz javno objavljenih ispita NCVVO-a i vlasništvo su ',
        e('a', { href: 'https://www.ncvvo.hr', target: '_blank', rel: 'noopener' }, 'NCVVO-a'),
        '. ',
        e('span', { style: { color: 'var(--blue)', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }, onClick: () => setShowDisclaimer(true) }, 'Više informacija'),
      ),
    ),
  )
}
