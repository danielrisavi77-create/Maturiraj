'use client'
import React, { createElement as e, useState, Fragment } from 'react'
import { deriveRazina } from '@/lib/engleski-simulator/sessionRazina'

export function ErrorsScreen({ userData, onStart, onBack, examsMap, topicLabels, fisherYates }) {
  const [filter, setFilter] = useState('sve')
  const [selTopic, setSelTopic] = useState(null)
  const [showAll, setShowAll] = useState(false)

  const allErrors = Object.values(userData.errorTracker || {})
    .filter(er => er.count > 0)
    .sort((a, b) => b.count - a.count)

  const byTopic = {}
  allErrors.forEach(err => {
    const t = err.topic || 'ostalo'
    if (!byTopic[t]) byTopic[t] = []
    byTopic[t].push(err)
  })

  const topicList = Object.entries(byTopic)
    .map(([t, errs]) => ({ topic: t, label: topicLabels[t] || t, count: errs.length, totalMistakes: errs.reduce((s, er) => s + er.count, 0) }))
    .sort((a, b) => b.totalMistakes - a.totalMistakes)

  const filteredErrors = selTopic
    ? allErrors.filter(er => (er.topic || 'ostalo') === selTopic)
    : filter === 'high'
      ? allErrors.filter(er => er.count >= 2)
      : allErrors

  const displayErrors = showAll ? filteredErrors : filteredErrors.slice(0, 15)
  const hasMore = filteredErrors.length > 15 && !showAll

  function startSession(subset) {
    const pool = (subset || filteredErrors).slice(0, 40)
    const qs = pool.map(err => {
      const exam = examsMap[err.examKey]
      if (!exam) return null
      const q = exam.qs.find(item => String(item.id) === String(err.qid))
      return q ? { ...q, _examKey: err.examKey } : null
    }).filter(Boolean)
    if (!qs.length) return
    const shuffled = fisherYates(qs)
    onStart({ key: 'errors_session', year: 'Greške', season: 'session', label: 'Greške — ponavljanje', qs: shuffled, razina: deriveRazina(qs, examsMap) })
  }

  return e(Fragment, null,
    e('div', { className: 'nav' },
      e('button', { className: 'btn btn-g', style: { fontSize: 13, padding: '6px 12px' }, onClick: onBack }, '← Natrag'),
      e('span', { className: 'ntitle' }, 'Greške'),
      allErrors.length > 0 && e('span', { className: 'nbadge' }, allErrors.length + ' pitanja'),
    ),
    e('div', { style: { maxWidth: 740, margin: '0 auto', padding: '24px 20px 80px' } },
      allErrors.length === 0 && e('div', { style: { textAlign: 'center', padding: '60px 20px' } },
        e('div', { style: { fontSize: 52, marginBottom: 16 } }, '🎉'),
        e('div', { style: { fontFamily: 'var(--fh)', fontSize: 22, marginBottom: 8 } }, 'Nema grešaka!'),
        e('div', { style: { fontSize: 14, color: 'var(--muted)' } }, (userData.history || []).length === 0 ? 'Riješi barem jedan ispit da bi počeo pratiti greške.' : 'Sve ispravljeno — odličan rad!'),
      ),
      allErrors.length > 0 && e(Fragment, null,
        e('div', { className: 'err-hdr' },
          e('div', { className: 'err-hdr-left' },
            e('div', { className: 'err-hdr-num', style: { color: allErrors.length > 20 ? 'var(--red)' : allErrors.length > 10 ? 'var(--gold)' : 'var(--green)' } }, allErrors.length),
            e('div', { className: 'err-hdr-info' },
              e('div', { className: 'err-hdr-title' }, 'pitanja s greškama'),
              e('div', { className: 'err-hdr-sub' }, topicList.length + ' ' + (topicList.length === 1 ? 'tema' : 'teme') + ' · Najslabija: ' + (topicList[0]?.label || '—')),
            ),
          ),
          e('button', { className: 'btn btn-gold', onClick: () => startSession(allErrors), style: { whiteSpace: 'nowrap', flexShrink: 0 } }, '▶ Pokreni sve'),
        ),
        topicList.length > 1 && e('div', { className: 'err-topics' },
          e('button', { className: 'err-topic-pill' + (selTopic === null ? ' active' : ''), onClick: () => setSelTopic(null) }, 'Sve teme'),
          topicList.slice(0, 6).map(t => e('button', { key: t.topic, className: 'err-topic-pill' + (selTopic === t.topic ? ' active' : ''), onClick: () => setSelTopic(selTopic === t.topic ? null : t.topic) },
            t.label.length > 20 ? t.label.slice(0, 18) + '…' : t.label,
            e('span', { className: 'err-topic-cnt' }, t.count),
          )),
          topicList.length > 6 && e('span', { className: 'err-topics-more' }, '+' + (topicList.length - 6) + ' više'),
        ),
        e('div', { className: 'err-filters' },
          e('button', { className: 'filter-chip' + (filter === 'sve' && !selTopic ? ' active' : ''), onClick: () => { setFilter('sve'); setSelTopic(null) } }, 'Sva pitanja (' + allErrors.length + ')'),
          e('button', { className: 'filter-chip' + (filter === 'high' && !selTopic ? ' active' : ''), onClick: () => { setFilter('high'); setSelTopic(null) } }, 'Kritična 2×+ (' + allErrors.filter(er => er.count >= 2).length + ')'),
          selTopic && e('button', { className: 'btn btn-gold', style: { fontSize: 11, padding: '4px 12px' }, onClick: () => startSession(filteredErrors) }, '▶ Samo ' + (topicLabels[selTopic]?.split('—')[0]?.trim() || selTopic)),
        ),
        e('div', { className: 'error-list' },
          displayErrors.map((err, i) => {
            const countCls = err.count >= 3 ? 'high' : err.count >= 2 ? 'mid' : 'low'
            const examLabel = err.examKey?.replace(/vis_/g, '').replace(/_/g, ' · ').replace('ljeto', 'Ljetni').replace('jesen', 'Jesenski').replace('zima', 'Zimski') || ''
            return e('div', { key: i, className: 'error-item' },
              e('div', { className: 'error-count ' + countCls }, err.count + '×'),
              e('div', { className: 'error-body' },
                e('div', { className: 'error-q' }, err.q?.length > 100 ? err.q.slice(0, 98) + '…' : err.q || '—'),
                e('div', { className: 'error-meta' },
                  e('span', { className: 'topic-tag', style: { fontSize: 10 } }, topicLabels[err.topic] || err.topic || 'Ostalo'),
                  examLabel && e('span', { style: { fontSize: 10, color: 'var(--muted)' } }, examLabel),
                  err.lastDate && e('span', { style: { fontSize: 10, color: 'var(--muted)' } }, err.lastDate),
                ),
              ),
            )
          }),
        ),
        hasMore && e('button', { className: 'btn btn-g', style: { width: '100%', marginTop: 8, fontSize: 13 }, onClick: () => setShowAll(true) }, 'Prikaži svih ' + filteredErrors.length + ' pitanja ▼'),
        showAll && e('button', { className: 'btn btn-g', style: { width: '100%', marginTop: 8, fontSize: 13 }, onClick: () => setShowAll(false) }, 'Sakrij ▲'),
      ),
    ),
  )
}

export function BookmarksScreen({ onBack, onStartSession, examsMap, topicLabels, fisherYates, validateBookmarks }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try { return validateBookmarks(JSON.parse(localStorage.getItem('disc_eng_bookmarks') || '{}')) } catch { return {} }
  })
  const [filter, setFilter] = useState('sve')

  const bkList = Object.entries(bookmarks).map(([key, saved]) => {
    const parts = key.split('_')
    const qidStr = parts.pop()
    const examKey = parts.join('_')
    if (!examKey || !qidStr) return null
    const exam = examsMap[examKey]
    if (!exam) return null
    const q = exam.qs.find(item => String(item.id) === qidStr)
    if (!q) return null
    return { key, examKey, q, saved }
  }).filter(Boolean)

  const topics = [...new Set(bkList.map(b => b.q.topic).filter(Boolean))]
  const filtered = filter === 'sve' ? bkList : bkList.filter(b => b.q.topic === filter)

  function removeBookmark(key) {
    setBookmarks(prev => {
      const next = { ...prev }
      delete next[key]
      try { localStorage.setItem('disc_eng_bookmarks', JSON.stringify(next)) } catch {}
      return next
    })
  }

  function startSession() {
    if (filtered.length === 0) return
    const qs = filtered.map(b => ({ ...b.q, _examKey: b.examKey }))
    const shuffled = fisherYates(qs)
    const sessionQs = shuffled.slice(0, 40)
    onStartSession({ key: 'bookmarks_session', year: 'Spremljena pitanja', season: 'session', label: 'Spremljena pitanja — vježbanje', qs: sessionQs, razina: deriveRazina(sessionQs, examsMap) })
  }

  return e(Fragment, null,
    e('div', { className: 'nav' },
      e('button', { className: 'btn btn-g', style: { fontSize: 13, padding: '6px 12px' }, onClick: onBack }, '← Natrag'),
      e('span', { className: 'ntitle' }, '🔖 Spremljena pitanja'),
    ),
    e('div', { style: { maxWidth: 720, margin: '0 auto', padding: '28px 20px 80px' } },
      bkList.length === 0
        ? e('div', { style: { textAlign: 'center', padding: '60px 0' } },
            e('div', { style: { fontSize: 48, marginBottom: 16 } }, '🔖'),
            e('div', { style: { fontSize: 18, fontWeight: 700, marginBottom: 8 } }, 'Nema bookmarkanih pitanja'),
            e('div', { style: { fontSize: 14, color: 'var(--muted)', marginBottom: 24 } }, 'Dok rješavaš ispit, pritisni B ili ikonu 🔖 da bookmarkaš pitanje.'),
            e('button', { className: 'btn btn-g', onClick: onBack }, '← Natrag'),
          )
        : e('div', null,
            e('div', { className: 'screen-hdr-card bk' },
              e('div', { style: { fontSize: 32, fontWeight: 800, color: 'var(--gold)' } }, bkList.length),
              e('div', { style: { flex: 1 } },
                e('div', { style: { fontWeight: 700, fontSize: 15, marginBottom: 4 } }, 'Bookmarkana pitanja'),
                e('div', { style: { fontSize: 12, color: 'var(--muted)' } }, 'Sesija će vući do 40 pitanja — nasumičnim redoslijedom.'),
              ),
              e('button', { className: 'btn btn-gold', onClick: startSession, style: { whiteSpace: 'nowrap' } }, '▶ Pokreni sesiju'),
            ),
            topics.length > 1 && e('div', { style: { display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 } },
              e('button', { className: 'filter-chip' + (filter === 'sve' ? ' sel' : ''), onClick: () => setFilter('sve') }, 'Sve (' + bkList.length + ')'),
              topics.map(t => e('button', { key: t, className: 'filter-chip' + (filter === t ? ' sel' : ''), onClick: () => setFilter(t) }, topicLabels[t] || t)),
            ),
            e('div', { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
              filtered.map((b, i) => {
                const q = b.q
                const isAutoQ = q.type !== 'sa' && q.type !== 'es'
                return e('div', { key: b.key, style: { background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--r)', padding: '14px 16px', boxShadow: 'var(--shadow-sm)' } },
                  e('div', { style: { display: 'flex', alignItems: 'flex-start', gap: 10 } },
                    e('div', { style: { flex: 1 } },
                      e('div', { style: { display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6, flexWrap: 'wrap' } },
                        e('span', { className: 'topic-tag' }, topicLabels[q.topic] || q.topic),
                        e('span', { style: { fontSize: 11, color: 'var(--muted)' } }),
                        e('span', { style: { fontSize: 11, color: 'var(--muted)' } }, b.examKey.replace('_ljeto', ' — Ljetni').replace('_jesen', ' — Jesenski')),
                      ),
                      e('div', { style: { fontSize: 13, lineHeight: 1.55, marginBottom: isAutoQ ? 8 : 0 } }, q.q),
                      isAutoQ && q.opts && e('div', { style: { display: 'flex', flexDirection: 'column', gap: 3 } },
                        q.opts.map((opt, oi) => {
                          const letter = String.fromCharCode(65 + oi)
                          const correct = q.sol?.cl === letter
                          return e('div', { key: oi, style: { fontSize: 12, padding: '3px 8px', borderRadius: 4, background: correct ? 'var(--green-d)' : 'transparent', color: correct ? 'var(--green)' : 'var(--muted)', fontWeight: correct ? 600 : 400 } }, letter + ') ' + opt + (correct ? ' ✓' : ''))
                        }),
                      ),
                      q.exp && e('div', { style: { fontSize: 11, color: 'var(--muted)', marginTop: 8, fontStyle: 'italic', borderTop: '1px solid var(--bdr)', paddingTop: 6 } }, '💡 ' + q.exp),
                    ),
                    e('button', { onClick: () => removeBookmark(b.key), style: { background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: 18, padding: '2px 4px', flexShrink: 0 }, title: 'Ukloni bookmark' }, '🔖'),
                  ),
                )
              }),
            ),
          ),
    ),
  )
}
