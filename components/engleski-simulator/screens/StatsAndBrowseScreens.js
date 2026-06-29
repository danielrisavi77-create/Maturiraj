'use client'
import React, { createElement as e, useState, useEffect, Fragment } from 'react'

export function StatsScreen({ userData, onBack, onFilter, onFilterSession, onPDFReport, LEVEL_NAMES, getLevel, xpProgress, xpToNext, AnalyticsPanel }) {
  return e(Fragment, null,
    e('div', { className: 'nav' },
      e('button', { className: 'btn btn-g', style: { fontSize: 13, padding: '6px 12px' }, onClick: onBack }, '← Natrag'),
      e('span', { className: 'ntitle' }, 'Statistike'),
      userData && e('span', { className: 'nbadge' }, (userData.history || []).length + ' ispita · ' + (userData.xp || 0) + ' XP'),
      (userData?.history || []).length > 0 && e('button', {
        className: 'btn btn-g',
        style: { fontSize: 12, padding: '5px 12px', marginLeft: 8 },
        onClick: () => onPDFReport && onPDFReport(),
      }, '📄 PDF izvještaj'),
    ),
    e('div', { style: { maxWidth: 860, margin: '0 auto', padding: '24px 20px 80px' } },
      e('div', { style: { marginBottom: 24 } },
        e('div', { style: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6, flexWrap: 'wrap' } },
          e('div', { style: { fontFamily: 'var(--fh)', fontSize: 26, fontWeight: 400 } }, 'Moji rezultati'),
          (userData?.history || []).length > 0 && e('span', { style: { fontSize: 13, color: 'var(--muted)', fontWeight: 500 } },
            (userData.history || []).length + ' ispita · ' + Math.round((userData.history || []).reduce((a, h) => a + h.pct, 0) / ((userData.history || []).length || 1)) + '% prosjek',
          ),
        ),
        e('div', { style: { fontSize: 13, color: 'var(--muted)' } }, 'Analitika napretka, greške i predikcija ocjene.'),
      ),
      userData && userData.xp >= 0 && e('div', { style: { background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--rr)', padding: '20px', marginBottom: 20 } },
        e('div', { style: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12, flexWrap: 'wrap' } },
          e('div', { className: 'level-badge', style: { fontSize: 13, padding: '6px 14px' } }, '⭐ ' + (LEVEL_NAMES[getLevel(userData.xp || 0)] || 'Početnik')),
          userData.streak > 0 && e('div', { className: 'streak-badge' }, e('span', { className: 'streak-fire' }, '🔥'), userData.streak + ' ' + (userData.streak === 1 ? 'dan' : 'dana') + ' zaredom'),
          e('div', { style: { marginLeft: 'auto', fontSize: 13, color: 'var(--muted)' } }, (userData.xp || 0) + ' XP ukupno · ' + (userData.history || []).length + ' ispita riješeno'),
        ),
        e('div', { className: 'xp-bar-wrap' }, e('div', { className: 'xp-bar', style: { width: xpProgress(userData.xp || 0) + '%' } })),
        e('div', { className: 'xp-label' },
          e('span', null, 'Razina ' + (getLevel(userData.xp || 0) + 1)),
          xpToNext(userData.xp || 0) > 0 && e('span', null, xpToNext(userData.xp || 0) + ' XP do sljedeće razine'),
        ),
      ),
      e(AnalyticsPanel, { userData, defaultTab: 'danas', onFilter, onFilterSession }),
    ),
  )
}

export function BrowseScreen({ onBack, EXAMS, TLBL, TBDG, TOPIC_LABELS }) {
  const [selExam, setSelExam] = useState(null)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [filterSection, setFilterSection] = useState('sve')
  const [filterType, setFilterType] = useState('sve')
  const [expanded, setExpanded] = useState({})
  const [globalSearch, setGlobalSearch] = useState(false)
  const [page, setPage] = useState(0)
  const ITEMS_PER_PAGE = 25

  useEffect(() => {
    const t = setTimeout(() => { setDebouncedSearch(search); setPage(0) }, 250)
    return () => clearTimeout(t)
  }, [search])

  const exam = selExam ? EXAMS[selExam] : null

  const allQuestions = React.useMemo(() => {
    const qs = []
    Object.values(EXAMS).forEach(ex => {
      ex.qs.forEach(q => qs.push({ ...q, _examKey: ex.key, _examLabel: ex.year + '. — ' + (ex.season === 'ljeto' ? 'Ljetni' : ex.season === 'zima' ? 'Zimski' : 'Jesenski') }))
    })
    return qs
  }, [EXAMS])

  const sourceQs = globalSearch ? allQuestions : (exam ? exam.qs : [])

  const allFiltered = React.useMemo(() => sourceQs.filter(q => {
    if (filterSection !== 'sve') {
      const secMap = {
        reading: ['reading_match', 'reading_ins', 'reading_mc4', 'reading_cloze4', 'reading_opencloze', 'reading_a', 'reading_b', 'reading_c', 'reading_d', 'reading_e', 'reading_f'],
        listening: ['listening_match', 'listening_mc3', 'listening_a', 'listening_b', 'listening_c', 'listening_d', 'listening_books'],
        writing: ['writing_essay', 'writing_a', 'writing_b', 'writing_email'],
        use: ['use_cloze', 'use_mc', 'use_wf', 'use_of_english'],
      }
      if (secMap[filterSection] && !secMap[filterSection].includes(q.topic)) return false
    }
    if (filterType !== 'sve' && q.type !== filterType) return false
    if (debouncedSearch) {
      const s = debouncedSearch.toLowerCase()
      const inQ = q.q.toLowerCase().includes(s)
      const inOpts = q.opts?.some(o => o.toLowerCase().includes(s))
      const inAns = (q.sol?.ans || q.sol?.ex || '').toLowerCase().includes(s)
      const inTopic = (TOPIC_LABELS[q.topic] || '').toLowerCase().includes(s)
      if (!inQ && !inOpts && !inAns && !inTopic) return false
    }
    return true
  }), [sourceQs, filterSection, filterType, debouncedSearch, TOPIC_LABELS])

  const questions = allFiltered.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)
  const totalPages = Math.ceil(allFiltered.length / ITEMS_PER_PAGE)

  const examList = Object.values(EXAMS).sort((a, b) => b.year - a.year || (a.season === 'ljeto' ? -1 : 1))
  const years = [...new Set(examList.map(item => item.year))]
  const availableTypes = [...new Set(sourceQs.map(q => q.type))]

  function renderQuestion(q, i, showExam) {
    return e('div', { key: q.id + (q._examKey || ''), style: { background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--rr)', padding: '16px 18px', boxShadow: 'var(--shadow-sm)' } },
      e('div', { style: { display: 'flex', gap: 8, marginBottom: 10, flexWrap: 'wrap', alignItems: 'center' } },
        e('span', { style: { fontSize: 11, color: 'var(--muted)', fontWeight: 600 } }, i + 1 + '.'),
        e('span', { className: 'fqp-badge ' + (TBDG[q.type] || 'b-mc') }, TLBL[q.type]),
        e('span', { className: 'topic-tag', style: { fontSize: 11 } }, TOPIC_LABELS[q.topic] || q.topic),
        showExam && q._examLabel && e('span', { style: { fontSize: 11, color: 'var(--muted)' } }, q._examLabel),
      ),
      e('div', { style: { fontSize: 13, marginBottom: 10, lineHeight: 1.6, fontWeight: 500 } }, q.q),
      q.opts && e('div', { style: { display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 10 } },
        q.opts.map((opt, j) => {
          const isCorrect = q.sol?.cl === String.fromCharCode(65 + j)
          const correctInSet = q.sol?.cls?.includes(String.fromCharCode(65 + j))
          const marked = isCorrect || correctInSet
          return e('div', { key: j, style: { fontSize: 12, padding: '6px 11px', borderRadius: 'var(--r)', background: marked ? 'var(--green-d)' : 'var(--s2)', border: '1px solid ' + (marked ? 'rgba(30,122,62,.35)' : 'var(--bdr)'), color: marked ? 'var(--green)' : 'var(--text)', fontWeight: marked ? 700 : 400, display: 'flex', alignItems: 'center', gap: 8 } }, marked && e('span', { style: { fontSize: 10 } }, '✓'), String.fromCharCode(65 + j) + '. ' + opt)
        }),
      ),
      (q.sol?.ans || q.sol?.ex) && e('div', { style: { fontSize: 12, color: 'var(--green)', background: 'var(--green-d)', border: '1px solid rgba(30,122,62,.25)', borderRadius: 'var(--r)', padding: '8px 11px', lineHeight: 1.5 } }, e('span', { style: { fontWeight: 700, marginRight: 6 } }, '✓'), (q.sol.ans || q.sol.ex)),
      q.exp && e('div', { style: { fontSize: 11, color: 'var(--muted)', marginTop: 8, fontStyle: 'italic', borderTop: '1px solid var(--bdr)', paddingTop: 6 } }, '💡 ' + q.exp),
    )
  }

  return e(Fragment, null,
    e('div', { className: 'nav' },
      e('button', { className: 'btn btn-g', style: { fontSize: 13, padding: '6px 12px' }, onClick: selExam && !globalSearch ? () => { setSelExam(null); setSearch(''); setFilterSection('sve'); setFilterType('sve') } : onBack }, '← Natrag'),
      e('span', { className: 'ntitle' }, '📖 Pregled ispita'),
      selExam && !globalSearch && e('span', { style: { fontSize: 12, color: 'var(--muted)', marginLeft: 4 } }, exam.year + '. — ' + (exam.season === 'ljeto' ? 'Ljetni' : exam.season === 'zima' ? 'Zimski' : 'Jesenski')),
    ),
    e('div', { style: { maxWidth: 760, margin: '0 auto', padding: '24px 20px 80px' } },
      e('div', { style: { display: 'flex', gap: 8, marginBottom: 16, alignItems: 'center', flexWrap: 'wrap' } },
        e('button', { className: 'btn ' + (globalSearch ? 'btn-gold' : 'btn-g'), style: { fontSize: 12, padding: '6px 14px' }, onClick: () => { setGlobalSearch(g => !g); setSelExam(null); setSearch('') } }, globalSearch ? '🔍 Globalna pretraga (uklj.)' : '🔍 Pretraži sve ispite'),
        !globalSearch && !selExam && e('span', { style: { fontSize: 12, color: 'var(--muted)' } }, 'ili odaberi ispit ispod'),
      ),
      (selExam || globalSearch) && e('div', { style: { marginBottom: 12 } },
        e('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', marginBottom: 8 } },
          e('input', {
            type: 'text',
            placeholder: 'Pretraži pitanja, odgovore, teme...',
            value: search,
            onChange: ev => setSearch(ev.target.value),
            style: { flex: 1, minWidth: 200, background: 'var(--s2)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '8px 12px', color: 'var(--text)', fontSize: 13, fontFamily: 'var(--fb)' },
          }),
          e('select', {
            value: filterType,
            onChange: ev => setFilterType(ev.target.value),
            style: { background: 'var(--s2)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '8px 10px', color: 'var(--text)', fontSize: 13, fontFamily: 'var(--fb)', cursor: 'pointer' },
          },
            e('option', { value: 'sve' }, 'Svi tipovi'),
            availableTypes.map(t => e('option', { key: t, value: t }, TLBL[t] || t)),
          ),
        ),
        e('div', { style: { display: 'flex', gap: 5, flexWrap: 'wrap' } },
          [
            { key: 'sve', label: 'Sve sekcije', cls: '' },
            { key: 'reading', label: '📖 Reading', cls: 'reading' },
            { key: 'listening', label: '🎧 Listening', cls: 'listening' },
            { key: 'writing', label: '✏️ Writing', cls: 'writing' },
            { key: 'use', label: '🔤 Use of Eng.', cls: 'use' },
          ].map(s => e('button', {
            key: s.key,
            className: 'filter-chip' + (filterSection === s.key ? ' ' + (s.cls || 'active') : ''),
            onClick: () => { setFilterSection(s.key); setPage(0) },
          }, s.label)),
        ),
      ),
      (selExam || globalSearch) && e(Fragment, null,
        e('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, flexWrap: 'wrap', gap: 8 } },
          e('div', { style: { fontSize: 12, color: 'var(--muted)' } }, allFiltered.length + ' pitanja' + (debouncedSearch || filterSection !== 'sve' || filterType !== 'sve' ? ' (filtrirano)' : '') + (globalSearch ? ' · svi ispiti' : '') + (search && !debouncedSearch ? ' · pretražujem...' : '')),
          totalPages > 1 && e('div', { style: { display: 'flex', alignItems: 'center', gap: 6 } },
            e('button', { className: 'btn btn-g', style: { fontSize: 11, padding: '3px 9px' }, disabled: page === 0, onClick: () => setPage(p => Math.max(0, p - 1)) }, '←'),
            e('span', { style: { fontSize: 11, color: 'var(--muted)' } }, (page + 1) + '/' + totalPages),
            e('button', { className: 'btn btn-g', style: { fontSize: 11, padding: '3px 9px' }, disabled: page >= totalPages - 1, onClick: () => setPage(p => Math.min(totalPages - 1, p + 1)) }, '→'),
          ),
        ),
        e('div', { style: { display: 'flex', flexDirection: 'column', gap: 8 } }, questions.map((q, i) => renderQuestion(q, page * ITEMS_PER_PAGE + i, globalSearch))),
        totalPages > 1 && e('div', { style: { display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16, flexWrap: 'wrap' } },
          Array.from({ length: Math.min(totalPages, 10) }, (_, j) => e('button', { key: j, className: 'btn ' + (page === j ? 'btn-blue' : 'btn-g'), style: { fontSize: 12, padding: '5px 10px', minWidth: 36 }, onClick: () => { setPage(j); window.scrollTo(0, 300) } }, j + 1)),
          totalPages > 10 && e('span', { style: { fontSize: 12, color: 'var(--muted)', padding: '5px 4px' } }, '...'),
        ),
      ),
      !selExam && !globalSearch && e('div', null,
        e('div', { style: { fontSize: 13, color: 'var(--muted)', marginBottom: 16 } }, 'Odaberi ispit za pregled svih pitanja i točnih odgovora:'),
        years.map(year => {
          const yExams = examList.filter(item => item.year === year)
          const open = expanded[year] !== false
          return e('div', { key: year, style: { marginBottom: 8 } },
            e('button', {
              style: { width: '100%', background: 'var(--s2)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '10px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontFamily: 'var(--fb)', fontSize: 14, fontWeight: 700, color: 'var(--text)' },
              onClick: () => setExpanded(p => ({ ...p, [year]: !open })),
            },
              e('span', { style: { fontFamily: 'var(--fh)', color: 'var(--gold)' } }, year + '.'),
              e('span', { style: { fontSize: 12, color: 'var(--muted)', fontWeight: 400 } }, yExams.length + ' ispit' + (yExams.length > 1 ? 'a' : '') + ' · ' + (open ? '▲' : '▼')),
            ),
            open && e('div', { style: { display: 'flex', flexDirection: 'column', gap: 4, marginTop: 4 } },
              yExams.map(item => e('div', {
                key: item.key,
                style: { background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '12px 16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: 'var(--shadow-sm)', transition: 'all .15s' },
                onClick: () => { setSelExam(item.key); setSearch(''); setFilterSection('sve'); setFilterType('sve') },
              },
                e('div', { style: { display: 'flex', alignItems: 'center', gap: 10 } },
                  e('span', { className: 'exrow-sub-season ' + (item.season === 'ljeto' ? 'ljeto' : item.season === 'zima' ? 'zima' : 'jesen') }, item.season === 'ljeto' ? '☀️ Ljetni' : item.season === 'zima' ? '❄️ Zimski' : '🍂 Jesenski'),
                  e('span', { style: { fontSize: 13, fontWeight: 600 } }, item.label),
                ),
                e('span', { style: { fontSize: 12, color: 'var(--muted)' } }, item.qs.length + ' pit. →'),
              )),
            ),
          )
        }),
      ),
    ),
  )
}
