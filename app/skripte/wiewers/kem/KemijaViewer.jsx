'use client'
import { useState } from 'react'

// ─── Style helpers ────────────────────────────────────────────────────────────
const card = (extra = {}) => ({
  background: 'var(--surface)',
  border: '1px solid var(--border)',
  borderRadius: 16,
  padding: '22px 24px',
  ...extra,
})

const badge = (color, extra = {}) => ({
  display: 'inline-flex', alignItems: 'center', gap: 5,
  fontSize: 11, fontWeight: 700, letterSpacing: '.04em',
  padding: '3px 10px', borderRadius: 99,
  border: `1px solid ${color}55`, color, background: `${color}12`,
  ...extra,
})

const sectionLabel = {
  fontSize: 10, fontWeight: 800, letterSpacing: '.12em',
  textTransform: 'uppercase', marginBottom: 8,
}

const diffColor = { lako: '#4ade80', srednje: '#fbbf24', 'teško': '#f87171' }
const relColor  = { ključna: '#e9b446', visoka: '#60a5fa', osnova: '#94a3b8' }
const relLabel  = { ključna: 'Ključna za maturu', visoka: 'Visoka', osnova: 'Osnova' }

// ─── Leaf components ──────────────────────────────────────────────────────────
function SectionHeading({ accent, label, title }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ ...sectionLabel, color: accent }}>{label}</div>
      <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-.02em' }}>{title}</div>
    </div>
  )
}

function MustKnow({ items }) {
  return (
    <div style={card({ borderColor: 'rgba(62,207,110,.25)', background: 'rgba(62,207,110,.04)' })}>
      <SectionHeading accent="#4ade80" label="Što MORAŠ znati" title="Ključne točke" />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.65 }}>
            <span style={{ color: '#4ade80', fontWeight: 900, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function QuickConcept({ text }) {
  return (
    <div style={card({ borderColor: 'rgba(251,191,36,.28)', background: 'rgba(251,191,36,.05)', borderLeft: '3px solid #fbbf24' })}>
      <div style={{ ...sectionLabel, color: '#fbbf24' }}>💡 Brzi koncept</div>
      <p style={{ fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>{text}</p>
    </div>
  )
}

function Theory({ blocks }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="#60a5fa" label="Teorija" title="Ključna teorija" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {blocks.map((block, i) => (
          <div key={i}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8 }}>{block.heading}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'rgba(228,237,255,.82)', margin: '0 0 12px' }}>{block.content}</p>
            {block.table && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr>
                      {block.table.headers.map((h, j) => (
                        <th key={j} style={{ textAlign: 'left', padding: '8px 12px', background: 'var(--surface-2)', color: 'var(--muted)', fontWeight: 700, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', borderBottom: '1px solid var(--border)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.table.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: '1px solid var(--border)' }}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{ padding: '9px 12px' }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MaturaPattern({ text }) {
  return (
    <div style={card({ borderColor: 'rgba(96,165,250,.3)', background: 'rgba(96,165,250,.05)', borderLeft: '3px solid #60a5fa' })}>
      <div style={{ ...sectionLabel, color: '#60a5fa' }}>🎯 Kako dolazi na maturi</div>
      <p style={{ fontSize: 14, lineHeight: 1.72, margin: 0 }}>{text}</p>
    </div>
  )
}

function TaskPatterns({ patterns }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="#a78bfa" label="Prepoznaj tip zadatka" title="Uzorci rješavanja" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {patterns.map((p, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: '#a78bfa' }}>📌 {p.pattern}</div>
            <div style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(228,237,255,.8)' }}>{p.howToSolve}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Shortcuts({ items }) {
  return (
    <div style={card({ borderColor: 'rgba(251,191,36,.2)', background: 'rgba(251,191,36,.03)' })}>
      <SectionHeading accent="#fbbf24" label="Shortcuti" title="Pamtim brzo" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((s, i) => (
          <div key={i} style={{ fontSize: 13.5, lineHeight: 1.65, padding: '10px 14px', background: 'rgba(251,191,36,.06)', borderRadius: 10, border: '1px solid rgba(251,191,36,.18)' }}>{s}</div>
        ))}
      </div>
    </div>
  )
}

function Formulas({ formulas }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="#60a5fa" label="Formule" title="Must-know formule" />
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
        {formulas.map((f, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{f.label}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: '#60a5fa', marginBottom: 8 }}>{f.formula}</div>
            <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.55 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Tasks({ tasks }) {
  const [open, setOpen] = useState({})
  return (
    <div style={card({})}>
      <SectionHeading accent="var(--text)" label="Tipični zadaci" title="Riješeni primjeri" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tasks.map((t, i) => (
          <div key={i} style={{ background: 'var(--surface-2)', borderRadius: 12, border: '1px solid var(--border)', overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setOpen(o => ({ ...o, [i]: !o[i] }))}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 16px', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', textAlign: 'left', gap: 12 }}
            >
              <span style={{ fontSize: 13.5, lineHeight: 1.6, fontWeight: 600 }}>{t.q}</span>
              <span style={{ fontSize: 18, color: 'var(--muted)', flexShrink: 0, marginTop: 2, display: 'inline-block', transform: open[i] ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>⌄</span>
            </button>
            {open[i] && (
              <div style={{ padding: '0 16px 16px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#60a5fa', marginBottom: 10 }}>Rješenje korak po korak:</div>
                <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {t.steps.map((s, j) => (
                    <li key={j} style={{ fontSize: 13.5, lineHeight: 1.65, color: 'rgba(228,237,255,.85)' }}>{s}</li>
                  ))}
                </ol>
                <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(52,211,153,.08)', border: '1px solid rgba(52,211,153,.25)', borderRadius: 10, fontSize: 13.5, fontWeight: 700, color: '#34d399' }}>
                  ✓ Odgovor: {t.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function Mistakes({ items }) {
  return (
    <div style={card({ borderColor: 'rgba(248,113,113,.25)', background: 'rgba(248,113,113,.03)' })}>
      <SectionHeading accent="#f87171" label="Greške" title="Najčešće greške na maturi" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((m, i) => (
          <div key={i} style={{ fontSize: 13.5, lineHeight: 1.65, padding: '10px 14px', background: 'rgba(248,113,113,.06)', borderRadius: 10, border: '1px solid rgba(248,113,113,.18)' }}>{m}</div>
        ))}
      </div>
    </div>
  )
}

function MiniQuiz({ questions }) {
  const [chosen, setChosen] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const score = submitted ? questions.filter((q, i) => chosen[i] === q.answer).length : 0
  const scoreColor = score === questions.length ? '#4ade80' : score >= questions.length / 2 ? '#fbbf24' : '#f87171'
  const reset = () => { setChosen({}); setSubmitted(false) }

  return (
    <div style={card({ borderColor: 'rgba(96,165,250,.3)', background: 'rgba(96,165,250,.04)' })}>
      <SectionHeading accent="#60a5fa" label="Mini kviz" title="Provjeri razumijevanje" />
      {submitted && (
        <div style={{ marginBottom: 20, padding: '14px 18px', background: 'var(--surface-2)', borderRadius: 12, border: `1px solid ${scoreColor}44`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>
            Rezultat: <span style={{ color: scoreColor }}>{score}/{questions.length}</span>
          </div>
          <button type="button" onClick={reset} style={{ fontSize: 12, padding: '6px 14px', borderRadius: 8, border: '1px solid var(--border)', background: 'var(--surface)', color: 'var(--muted)', cursor: 'pointer' }}>Pokušaj ponovo</button>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {questions.map((q, qi) => {
          const picked = chosen[qi]
          const correct = q.answer
          return (
            <div key={qi}>
              <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.6, marginBottom: 12 }}>
                <span style={{ color: '#60a5fa', fontWeight: 800, marginRight: 8 }}>{qi + 1}.</span>{q.q}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {q.opts.map((opt, oi) => {
                  let bg = 'var(--surface-2)', border = '1px solid var(--border)', color = 'var(--text)'
                  if (submitted) {
                    if (oi === correct) { bg = 'rgba(52,211,153,.1)'; border = '1px solid rgba(52,211,153,.4)'; color = '#34d399' }
                    else if (oi === picked) { bg = 'rgba(248,113,113,.1)'; border = '1px solid rgba(248,113,113,.4)'; color = '#f87171' }
                  } else if (picked === oi) {
                    bg = 'rgba(96,165,250,.12)'; border = '1px solid rgba(96,165,250,.5)'; color = '#a0b4ff'
                  }
                  return (
                    <button key={oi} type="button" disabled={submitted} onClick={() => !submitted && setChosen(c => ({ ...c, [qi]: oi }))}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '10px 14px', borderRadius: 10, border, background: bg, color, cursor: submitted ? 'default' : 'pointer', fontSize: 13.5, textAlign: 'left', transition: 'all .15s' }}
                    >
                      <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', border: `2px solid ${color}66`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700 }}>
                        {submitted && oi === correct ? '✓' : submitted && oi === picked && oi !== correct ? '✗' : 'ABCD'[oi]}
                      </span>
                      {opt}
                    </button>
                  )
                })}
              </div>
              {submitted && q.exp && (
                <div style={{ marginTop: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(96,165,250,.07)', border: '1px solid rgba(96,165,250,.2)', fontSize: 13, color: 'rgba(228,237,255,.8)', lineHeight: 1.6 }}>
                  💡 {q.exp}
                </div>
              )}
            </div>
          )
        })}
      </div>
      {!submitted && (
        <button type="button" onClick={() => setSubmitted(true)} disabled={Object.keys(chosen).length < questions.length}
          style={{ marginTop: 20, width: '100%', padding: '12px', borderRadius: 12, border: 'none', background: Object.keys(chosen).length < questions.length ? 'var(--surface-2)' : '#60a5fa', color: Object.keys(chosen).length < questions.length ? 'var(--muted)' : '#fff', fontSize: 14, fontWeight: 700, cursor: Object.keys(chosen).length < questions.length ? 'not-allowed' : 'pointer', transition: 'all .2s' }}
        >
          Provjeri odgovore ({Object.keys(chosen).length}/{questions.length} odgovoreno)
        </button>
      )}
    </div>
  )
}

function UltraSummary({ items }) {
  return (
    <div style={card({ background: 'rgba(52,211,153,.04)', borderColor: 'rgba(52,211,153,.2)' })}>
      <SectionHeading accent="#34d399" label="Ultra sažetak" title="Sve u 5 redaka" />
      <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 14, lineHeight: 1.65 }}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

function Connections({ items }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="var(--muted)" label="Veze s temama" title="Poveži s drugim poglavljima" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((c, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 14px', background: 'var(--surface-2)', borderRadius: 10, border: '1px solid var(--border)' }}>
            <span style={{ fontSize: 16, flexShrink: 0 }}>🔗</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>{c.topic}</div>
              <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.5 }}>{c.why}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── ChapterView ──────────────────────────────────────────────────────────────
function ChapterView({ chapter, module_, allChapters, onBack }) {
  const idx = allChapters.findIndex(c => c.slug === chapter.slug)
  const prev = idx > 0 ? allChapters[idx - 1] : null
  const next = idx < allChapters.length - 1 ? allChapters[idx + 1] : null

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '28px 20px 80px' }}>
      {/* Breadcrumb */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)', marginBottom: 24, flexWrap: 'wrap' }}>
        <button type="button" onClick={onBack} style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: 12, padding: 0 }}>← {module_.title}</button>
      </nav>

      {/* Hero */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
          <span style={badge('#34d399')}>Kemija</span>
          <span style={badge(module_.color || '#34d399')}>{module_.title}</span>
          <span style={badge(diffColor[chapter.difficulty] || 'var(--muted)')}>
            {chapter.difficulty}
          </span>
          <span style={badge(relColor[chapter.maturaRelevance] || 'var(--muted)')}>
            🎯 {relLabel[chapter.maturaRelevance] || chapter.maturaRelevance}
          </span>
          {chapter.duration && <span style={badge('var(--muted)')}>⏱ {chapter.duration}</span>}
        </div>
        <h2 style={{ fontSize: 'clamp(24px,4vw,36px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.1, marginBottom: 10, marginTop: 0 }}>{chapter.title}</h2>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{chapter.subtitle}</p>
      </div>

      {/* Sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {chapter.mustKnow?.length > 0 && <MustKnow items={chapter.mustKnow} />}
        {chapter.quickConcept && <QuickConcept text={chapter.quickConcept} />}
        {chapter.theory?.length > 0 && <Theory blocks={chapter.theory} />}
        {chapter.maturaPattern && <MaturaPattern text={chapter.maturaPattern} />}
        {chapter.taskPatterns?.length > 0 && <TaskPatterns patterns={chapter.taskPatterns} />}
        {chapter.shortcuts?.length > 0 && <Shortcuts items={chapter.shortcuts} />}
        {chapter.formulas?.length > 0 && <Formulas formulas={chapter.formulas} />}
        {chapter.tasks?.length > 0 && <Tasks tasks={chapter.tasks} />}
        {chapter.mistakes?.length > 0 && <Mistakes items={chapter.mistakes} />}
        {chapter.quiz?.length > 0 && <MiniQuiz questions={chapter.quiz} />}
        {chapter.ultraSummary?.length > 0 && <UltraSummary items={chapter.ultraSummary} />}
        {chapter.connections?.length > 0 && <Connections items={chapter.connections} />}
      </div>

      {/* Chapter navigation */}
      {(prev || next) && (
        <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
          {prev
            ? <button type="button" onClick={() => onBack(prev)}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '14px 18px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, cursor: 'pointer', color: 'var(--text)', textAlign: 'left' }}>
                <span style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4, fontWeight: 600 }}>← Prethodno</span>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{prev.title}</span>
              </button>
            : <div style={{ flex: 1 }} />
          }
          {next
            ? <button type="button" onClick={() => onBack(next)}
                style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '14px 18px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 14, cursor: 'pointer', color: 'var(--text)', textAlign: 'right' }}>
                <span style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4, fontWeight: 600 }}>Sljedeće →</span>
                <span style={{ fontSize: 13, fontWeight: 700 }}>{next.title}</span>
              </button>
            : <div style={{ flex: 1 }} />
          }
        </div>
      )}
    </div>
  )
}

// ─── ModuleView ───────────────────────────────────────────────────────────────
function ModuleView({ module_, onBack, onSelectChapter }) {
  const chapters = module_._chapters || []
  const isAvailable = chapters.length > 0

  return (
    <div style={{ maxWidth: 840, margin: '0 auto', padding: '28px 20px 80px' }}>
      <button type="button" onClick={onBack}
        style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: 14, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>
        ← Natrag na sve module
      </button>

      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 24 }}>
        <div style={{ width: 52, height: 52, borderRadius: 14, background: module_.colorDim || 'rgba(52,211,153,.08)', border: `1px solid ${module_.color || '#34d399'}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>
          {module_.icon}
        </div>
        <div>
          <div style={{ fontSize: 11, color: module_.color || '#34d399', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 3 }}>Modul {module_.order}</div>
          <h2 style={{ fontSize: 'clamp(20px,3.5vw,30px)', fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.1, margin: 0 }}>{module_.title}</h2>
        </div>
      </div>
      <p style={{ fontSize: 14.5, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 28, marginTop: 0 }}>{module_.subtitle}</p>

      {!isAvailable ? (
        <div style={{ padding: '32px 24px', textAlign: 'center', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 16, color: 'var(--muted)', fontSize: 14 }}>
          Sadržaj ovog modula dolazi uskoro. 🚧
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {chapters.map((ch, i) => (
            <button key={ch.slug} type="button" onClick={() => onSelectChapter(ch)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'var(--surface)', border: `1px solid ${module_.color || '#34d399'}22`, borderRadius: 14, cursor: 'pointer', color: 'var(--text)', textAlign: 'left', transition: 'border-color .2s' }}>
              <div>
                <div style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4 }}>Poglavlje {i + 1}</div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{ch.title}</div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>{ch.subtitle}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0, marginLeft: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: diffColor[ch.difficulty] || 'var(--muted)' }}>{ch.difficulty}</span>
                {ch.duration && <span style={{ fontSize: 11, color: 'var(--muted)' }}>⏱ {ch.duration}</span>}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── KemijaViewer (main export) ───────────────────────────────────────────────
export default function KemijaViewer({ subject, onBack }) {
  const [selectedModule, setSelectedModule] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)

  const modules = subject?.modules || []

  // Chapter detail view
  if (selectedChapter && selectedModule) {
    const allChapters = selectedModule._chapters || []
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-sans, sans-serif)' }}>
        <ChapterView
          chapter={selectedChapter}
          module_={selectedModule}
          allChapters={allChapters}
          onBack={(neighborChapter) => {
            if (neighborChapter && neighborChapter.slug) {
              setSelectedChapter(neighborChapter)
            } else {
              setSelectedChapter(null)
            }
          }}
        />
      </div>
    )
  }

  // Module chapter list view
  if (selectedModule) {
    return (
      <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-sans, sans-serif)' }}>
        <ModuleView
          module_={selectedModule}
          onBack={() => setSelectedModule(null)}
          onSelectChapter={(ch) => setSelectedChapter(ch)}
        />
      </div>
    )
  }

  // Subject overview — module grid
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-sans, sans-serif)' }}>
      <div style={{ maxWidth: 1080, margin: '0 auto', padding: '40px 24px 80px' }}>

        {/* Back */}
        <button type="button" onClick={onBack}
          style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: 14, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 6, padding: 0 }}>
          ← Natrag na sve predmete
        </button>

        {/* Hero */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(52,211,153,.1)', border: '1px solid rgba(52,211,153,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
            ⚗
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#34d399', marginBottom: 4 }}>Prirodoslovno</div>
            <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.05, margin: 0 }}>Kemija</h1>
          </div>
        </div>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, maxWidth: 540, margin: '0 0 32px' }}>
          Kompletna priprema za državnu maturu iz kemije. Temelji, reakcije, organska kemija i izračuni — od osnova do mature.
        </p>

        {/* Module grid */}
        <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 20 }}>Svi moduli</div>
        <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {modules.map(mod => {
            const available = !!(mod._chapters && mod._chapters.length > 0)
            return (
              <button key={mod.slug} type="button"
                onClick={() => available ? setSelectedModule(mod) : undefined}
                style={{ display: 'block', background: 'var(--surface)', border: `1px solid ${available ? mod.color + '44' : 'var(--border)'}`, borderRadius: 16, padding: '20px 22px', opacity: available ? 1 : 0.6, cursor: available ? 'pointer' : 'default', textAlign: 'left', color: 'var(--text)', transition: 'all .2s', position: 'relative' }}
              >
                {!available && (
                  <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 99, background: 'var(--surface-2)', border: '1px solid var(--border)', color: 'var(--muted)', letterSpacing: '.06em' }}>USKORO</div>
                )}
                <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: mod.colorDim || 'rgba(52,211,153,.08)', border: `1px solid ${mod.color || '#34d399'}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{mod.icon}</div>
                  <div>
                    <div style={{ fontSize: 11, color: mod.color || '#34d399', fontWeight: 700, marginBottom: 2 }}>Modul {mod.order}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.3 }}>{mod.title}</div>
                  </div>
                </div>
                <p style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.55, margin: '0 0 12px' }}>{mod.subtitle}</p>
                <div style={{ fontSize: 11, color: 'var(--muted)' }}>
                  {mod.chapterMetas?.length || 0} poglavlja
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
