'use client'

import { useMemo } from 'react'
import { useClientState } from '@/lib/hooks/useClientState'
import { useRouter } from 'next/navigation'
import { usePageTracking } from '@/lib/hooks/usePageTracking'
import Link from 'next/link'
import {
  SUBJECTS_OBVEZNI,
  SUBJECTS_PRIRODO,
  SUBJECTS_DRUSTVO,
  SUBJECTS_UMJETNOST,
  SUBJECTS_KLASICNI,
  SKRIPTE,
} from './data'
import { SUBJECT_VIEWERS, BasicSubjectViewer } from './wiewers'

const GROUPS = [
  { title: 'Obvezni predmeti', items: SUBJECTS_OBVEZNI || [] },
  { title: 'Izborni — Prirodoslovno-matematički', items: SUBJECTS_PRIRODO || [] },
  { title: 'Izborni — Društveno-humanistički', items: SUBJECTS_DRUSTVO || [] },
  { title: 'Izborni — Umjetnički', items: SUBJECTS_UMJETNOST || [] },
  { title: 'Izborni — Klasični jezici', items: SUBJECTS_KLASICNI || [] },
]

function getLevelCount(subject) {
  return Array.isArray(subject?.razine) ? subject.razine.length : 0
}

function getChapterCount(subject) {
  if (!Array.isArray(subject?.razine)) return 0

  return subject.razine.reduce((sum, level) => {
    const count = Array.isArray(level?.poglavlja) ? level.poglavlja.length : 0
    return sum + count
  }, 0)
}

function SubjectCard({ subject, onOpen }) {
  const color = subject?.color || '#b8720a'
  const levelCount = getLevelCount(subject)
  const chapterCount = getChapterCount(subject)

  return (
    <button
      type="button"
      className="subject-card"
      onClick={() => onOpen(subject.id)}
      style={{ '--icon-glow': `${color}44` }}
    >
      <div
        className="subject-icon"
        style={{
          color,
          borderColor: `${color}44`,
          background: `${color}14`,
          transition: 'box-shadow 0.22s ease',
        }}
      >
        {subject?.sym || '•'}
      </div>

      <div className="subject-body">
        <div className="subject-name">{subject?.name || 'Predmet'}</div>
        <div className="subject-meta">
          {levelCount} {levelCount === 1 ? 'razina' : 'razine'} · {chapterCount} poglavlja
        </div>
      </div>

      <div className="subject-arrow">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </button>
  )
}

function CatalogView({ onOpenSubject }) {
  const totalSubjects = GROUPS.reduce((acc, g) => acc + g.items.length, 0)
  const totalChapters = GROUPS.reduce(
    (acc, g) => acc + g.items.reduce((s, sub) => s + getChapterCount(sub), 0),
    0,
  )

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="skripte-hero">
        <div className="skripte-orb orb-gold" />
        <div className="skripte-orb orb-blue" />
        <div className="skripte-dotgrid" />

        <div className="skripte-hero-inner">
          <Link href="/" className="back-link">
            ← Maturiraj.hr
          </Link>

          <div className="hero-badges-row">
            <div className="badge-gold">
              <span className="pulse-dot gold" />
              Skripte · Državna matura
            </div>
            <div className="badge-green">
              <span className="pulse-dot green" />
              Besplatno
            </div>
          </div>

          <h1 className="hero-title">
            <span className="line-one">Sve što trebaš</span>
            <span className="line-grad">za maturu.</span>
          </h1>

          <p className="hero-sub">
            Skripte za sve obvezne i izborne predmete državne mature. Odaberi predmet,
            otvori poglavlje i uči prema svom tempu.
          </p>

          <div className="hero-stat-row">
            <div className="stat-pill">
              <span className="stat-n">{totalSubjects}</span>
              <span className="stat-l">predmeta</span>
            </div>
            <div className="stat-pill">
              <span className="stat-n">{totalChapters}+</span>
              <span className="stat-l">poglavlja</span>
            </div>
            <div className="stat-pill">
              <span className="stat-n">100%</span>
              <span className="stat-l">besplatno</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Subject catalog ────────────────────────────────── */}
      <div className="skripte-wrap">
        {GROUPS.map((group) => (
          <section key={group.title} className="group-section">
            <div className="group-head">
              <h2 className="group-title">{group.title}</h2>
              <div className="group-count-pill">{group.items.length} predmeta</div>
            </div>

            <div className="subject-grid">
              {group.items.map((subject) => (
                <SubjectCard
                  key={subject.id}
                  subject={subject}
                  onOpen={onOpenSubject}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default function Page() {
  usePageTracking('skripte')
  const router = useRouter()
  const [selectedSubjectId, setSelectedSubjectId] = useClientState(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('sub')
      return p && SKRIPTE.find(s => s.id === p) ? p : null
    } catch { return null }
  }, null)

  function handleOpenSubject(id) {
    if (id === 'hrv') {
      router.push('/skripte/hrv')
      return
    }
    setSelectedSubjectId(id)
  }

  const selectedSubject = useMemo(() => {
    if (!selectedSubjectId) return null
    return SKRIPTE.find((item) => item.id === selectedSubjectId) || null
  }, [selectedSubjectId])

  const Viewer = SUBJECT_VIEWERS[selectedSubject?.id] || BasicSubjectViewer

  return (
    <>
      <main className="skripte-shell">
        {!selectedSubject ? (
          <CatalogView onOpenSubject={handleOpenSubject} />
        ) : (
          <div className="skripte-viewer-wrap">
            <Viewer
              subject={selectedSubject}
              onBack={() => setSelectedSubjectId(null)}
            />
          </div>
        )}
      </main>

      <style jsx global>{`
        /* Skripte-local vars — only those not in globals.css */
        .skripte-shell, .skripte-shell * {
          --surface: var(--s1);
          --surface-2: var(--s2);
          --border: rgba(255,255,255,0.07);
          --border-strong: rgba(255,255,255,0.16);
          --muted-2: rgba(106,130,168,0.65);
          --accent: #d4890a;
          --accent-soft: rgba(212, 137, 10, 0.12);
          --radius-lg: 18px;
          --radius-md: 12px;
          --shadow: 0 20px 60px rgba(0,0,0,0.28);
        }

        .skripte-shell {
          min-height: 100vh;
          width: 100%;
          background: var(--bg);
        }

        .skripte-wrap {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        .skripte-viewer-wrap {
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 0;
        }

        /* ── Hero section ─────────────────────────────────────── */
        .skripte-hero {
          position: relative;
          overflow: hidden;
          padding: 84px 0 68px;
        }

        .skripte-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .orb-gold {
          width: 720px;
          height: 720px;
          top: -22%;
          left: -10%;
          background: radial-gradient(circle, rgba(212,137,10,0.13), transparent 62%);
          animation: orb-a 24s ease-in-out infinite;
        }

        .orb-blue {
          width: 560px;
          height: 560px;
          top: 5%;
          right: -8%;
          background: radial-gradient(circle, rgba(75,123,255,0.09), transparent 62%);
          animation: orb-b 28s ease-in-out infinite;
        }

        .skripte-dotgrid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(212,137,10,0.055) 1px, transparent 1px);
          background-size: 46px 46px;
          pointer-events: none;
        }

        .skripte-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .back-link,
        .inline-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: 13px;
          font-weight: 600;
          font-family: var(--fb);
          margin-bottom: 28px;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: color 0.15s;
        }

        .back-link:hover,
        .inline-back-btn:hover {
          color: var(--text);
        }

        .hero-badges-row {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }

        .badge-gold {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .05em;
          text-transform: uppercase;
          background: rgba(212,137,10,0.12);
          color: #efb04a;
          border: 1px solid rgba(212,137,10,0.26);
          font-family: var(--fb);
        }

        .badge-green {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .05em;
          text-transform: uppercase;
          background: rgba(62,207,110,0.08);
          border: 1px solid rgba(62,207,110,0.22);
          color: var(--green);
          font-family: var(--fb);
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        .pulse-dot.gold {
          background: #efb04a;
          box-shadow: 0 0 6px #efb04a;
        }

        .pulse-dot.green {
          background: var(--green);
          box-shadow: 0 0 6px var(--green);
        }

        .hero-title {
          margin: 0 0 18px;
          font-family: var(--fh);
          font-size: clamp(44px, 6vw, 82px);
          font-weight: 900;
          line-height: 0.97;
          letter-spacing: -0.03em;
        }

        .line-one {
          display: block;
          color: var(--text);
        }

        .line-grad {
          display: block;
          background: linear-gradient(270deg, #e9b446, #efb04a, #d4890a, #e9b446);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hero-text-shift 4s ease-in-out infinite;
        }

        .hero-sub {
          margin: 0 0 30px;
          max-width: 560px;
          font-size: 16px;
          line-height: 1.8;
          color: var(--muted);
          font-family: var(--fb);
        }

        .hero-stat-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.042);
          border: 1px solid rgba(255,255,255,0.09);
          font-family: var(--fb);
        }

        .stat-n {
          font-size: 18px;
          font-weight: 900;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .stat-l {
          font-size: 11px;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ── Group sections ───────────────────────────────────── */
        .group-section {
          margin-top: 48px;
        }

        .group-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(212,137,10,0.14);
          position: relative;
        }

        .group-head::before {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 40px;
          height: 1px;
          background: linear-gradient(90deg, #d4890a, transparent);
        }

        .group-title {
          margin: 0;
          font-family: var(--fb);
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .group-count-pill {
          display: inline-flex;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          background: rgba(212,137,10,0.10);
          border: 1px solid rgba(212,137,10,0.20);
          color: #efb04a;
          font-family: var(--fb);
          letter-spacing: 0.03em;
          flex-shrink: 0;
        }

        .subject-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        /* ── Subject card ─────────────────────────────────────── */
        .subject-card {
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 18px;
          background: linear-gradient(180deg, var(--s1), var(--s2));
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: 0 8px 30px rgba(0,0,0,0.22);
          min-height: 94px;
          text-align: left;
          cursor: pointer;
          transition:
            transform 0.22s cubic-bezier(.16,1,.3,1),
            border-color 0.22s ease,
            box-shadow 0.22s ease;
        }

        .subject-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-strong);
          box-shadow: 0 18px 48px rgba(0,0,0,0.32);
        }

        .subject-card:hover .subject-icon {
          box-shadow: 0 0 18px var(--icon-glow, rgba(212,137,10,0.28));
        }

        .subject-icon,
        .subject-badge {
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subject-icon {
          width: 52px;
          height: 52px;
          min-width: 52px;
          border-radius: 14px;
          font-size: 24px;
          font-weight: 700;
        }

        .subject-badge {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 18px;
        }

        .subject-body {
          flex: 1;
          min-width: 0;
        }

        .subject-name {
          font-size: 17px;
          font-weight: 700;
        }

        .subject-meta {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
          margin-top: 5px;
        }

        .subject-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: rgba(255,255,255,0.04);
          color: var(--muted);
          flex-shrink: 0;
          transition: background 0.18s ease, color 0.18s ease, transform 0.22s cubic-bezier(.16,1,.3,1);
        }

        .subject-card:hover .subject-arrow {
          background: rgba(212,137,10,0.12);
          color: #efb04a;
          transform: translateX(3px);
        }

        .subject-view-shell {
          width: 100%;
        }

        .levels {
          margin-top: 34px;
          display: grid;
          gap: 22px;
        }

        .level-card {
          background: linear-gradient(180deg, var(--s1), var(--s2));
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 60px rgba(0,0,0,0.24);
          overflow: hidden;
        }

        .level-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          border-bottom: 1px solid var(--border);
        }

        .level-title {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
        }

        .level-count {
          color: var(--muted-2);
          font-size: 13px;
        }

        .chapter-list {
          padding: 8px 0;
        }

        .chapter-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border);
        }

        .chapter-item:last-child {
          border-bottom: none;
        }

        .chapter-main {
          flex: 1;
          min-width: 0;
        }

        .chapter-name {
          font-size: 15px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .chapter-topics {
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .open-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 92px;
          padding: 10px 14px;
          border-radius: 10px;
          border: none;
          flex-shrink: 0;
          font-size: 13px;
          font-weight: 700;
        }

        .open-btn.disabled {
          background: rgba(255,255,255,0.08);
          color: var(--muted);
          cursor: default;
          pointer-events: none;
        }

        @media (max-width: 980px) {
          .subject-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .skripte-wrap {
            padding: 0 16px 56px;
          }

          .skripte-hero {
            padding: 60px 0 48px;
          }

          .subject-grid {
            grid-template-columns: 1fr;
          }

          .chapter-item {
            flex-direction: column;
            align-items: stretch;
          }

          .open-btn {
            width: 100%;
          }

          .hero-title {
            font-size: clamp(38px, 9vw, 58px);
          }

          .hero-stat-row {
            gap: 8px;
          }
        }
      `}</style>
    </>
  )
}
