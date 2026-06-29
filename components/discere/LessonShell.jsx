'use client'
import { useState } from 'react'
import Link from 'next/link'

// ─── Helpers ─────────────────────────────────────────────────────────────────
const difficultyLabel = { lako: 'Lako', srednje: 'Srednje', 'teško': 'Teško' }
const difficultyColor = { lako: 'var(--green)', srednje: 'var(--gold)', 'teško': 'var(--red)' }
const relevanceLabel  = { osnova: 'Osnova', visoka: 'Visoka', ključna: 'Ključna za maturu' }

const card = (extra) => ({
  background: 'var(--s1)', border: '1px solid var(--bdr)',
  borderRadius: 16, padding: '22px 24px', ...extra,
})

const badge = (color, extra) => ({
  display: 'inline-flex', alignItems: 'center', gap: 5,
  fontSize: 11, fontWeight: 700, letterSpacing: '.04em',
  padding: '3px 10px', borderRadius: 99,
  border: `1px solid ${color}55`, color, background: `${color}12`,
  ...extra,
})

const sectionLabel = {
  fontSize: 10, fontWeight: 800, letterSpacing: '.12em',
  textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8,
}

const SectionHeading = ({ accent, label, title }) => (
  <div style={{ marginBottom: 18 }}>
    <div style={{ ...sectionLabel, color: accent }}>{label}</div>
    <div style={{ fontFamily: 'var(--fh)', fontSize: 20, fontWeight: 700, letterSpacing: '-.02em' }}>{title}</div>
  </div>
)

// ─── MustKnow ────────────────────────────────────────────────────────────────
function MustKnow({ items }) {
  return (
    <div style={card({ borderColor: 'rgba(62,207,110,.25)', background: 'rgba(62,207,110,.04)' })}>
      <SectionHeading accent="var(--green)" label="Što MORAŠ znati" title="Ključne točke ovog poglavlja" />
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.65 }}>
            <span style={{ color: 'var(--green)', fontWeight: 900, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// ─── QuickConcept ─────────────────────────────────────────────────────────────
function QuickConcept({ text }) {
  return (
    <div style={card({ borderColor: 'rgba(233,180,70,.28)', background: 'rgba(233,180,70,.05)', borderLeft: '3px solid var(--gold)' })}>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>💡 Brzi koncept</div>
      <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'var(--text)', margin: 0 }}>{text}</p>
    </div>
  )
}

// ─── Theory ──────────────────────────────────────────────────────────────────
function Theory({ blocks }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="var(--blue)" label="Teorija" title="Ključna teorija" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {blocks.map((block, i) => (
          <div key={i}>
            <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 8, color: 'var(--text)' }}>{block.heading}</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'rgba(228,237,255,.82)', margin: '0 0 12px' }}>{block.content}</p>
            {block.table && (
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                  <thead>
                    <tr>
                      {block.table.headers.map((h, j) => (
                        <th key={j} style={{ textAlign: 'left', padding: '8px 12px', background: 'var(--s2)', color: 'var(--muted)', fontWeight: 700, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', borderBottom: '1px solid var(--bdr)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.table.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderBottom: '1px solid var(--bdr)' }}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{ padding: '9px 12px', color: 'var(--text)', fontFamily: ci === 0 ? 'inherit' : 'inherit' }}>{cell}</td>
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

// ─── MaturaPattern ────────────────────────────────────────────────────────────
function MaturaPattern({ text }) {
  return (
    <div style={card({ borderColor: 'rgba(75,123,255,.3)', background: 'rgba(75,123,255,.05)', borderLeft: '3px solid var(--blue)' })}>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10 }}>🎯 Kako dolazi na maturi</div>
      <p style={{ fontSize: 14, lineHeight: 1.72, color: 'var(--text)', margin: 0 }}>{text}</p>
    </div>
  )
}

// ─── TaskPatterns ─────────────────────────────────────────────────────────────
function TaskPatterns({ patterns }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="#a78bfa" label="Prepoznaj tip zadatka" title="Uzorci rješavanja" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {patterns.map((p, i) => (
          <div key={i} style={{ background: 'var(--s2)', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--bdr)' }}>
            <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 6, color: '#a78bfa' }}>📌 {p.pattern}</div>
            <div style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(228,237,255,.8)' }}>{p.howToSolve}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Shortcuts ───────────────────────────────────────────────────────────────
function Shortcuts({ items }) {
  return (
    <div style={card({ borderColor: 'rgba(233,180,70,.2)', background: 'rgba(233,180,70,.03)' })}>
      <SectionHeading accent="var(--gold)" label="Shortcuti" title="Pamtim brzo" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((s, i) => (
          <div key={i} style={{ fontSize: 13.5, lineHeight: 1.65, padding: '10px 14px', background: 'rgba(233,180,70,.06)', borderRadius: 10, border: '1px solid rgba(233,180,70,.18)' }}>{s}</div>
        ))}
      </div>
    </div>
  )
}

// ─── Formulas ─────────────────────────────────────────────────────────────────
function Formulas({ formulas }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="var(--blue)" label="Formule" title="Must-know formule" />
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {formulas.map((f, i) => (
          <div key={i} style={{ background: 'var(--s2)', borderRadius: 12, padding: '14px 16px', border: '1px solid var(--bdr)' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{f.label}</div>
            <div style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: 'var(--blue)', marginBottom: 8, letterSpacing: '.02em' }}>{f.formula}</div>
            <div style={{ fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.55 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Tasks ────────────────────────────────────────────────────────────────────
function Tasks({ tasks }) {
  const [open, setOpen] = useState({})
  return (
    <div style={card({})}>
      <SectionHeading accent="var(--text)" label="Tipični zadaci" title="Riješeni primjeri" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {tasks.map((t, i) => (
          <div key={i} style={{ background: 'var(--s2)', borderRadius: 12, border: '1px solid var(--bdr)', overflow: 'hidden' }}>
            <button
              onClick={() => setOpen(o => ({ ...o, [i]: !o[i] }))}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '14px 16px', background: 'none', border: 'none', color: 'var(--text)', cursor: 'pointer', textAlign: 'left', gap: 12 }}
            >
              <span style={{ fontSize: 13.5, lineHeight: 1.6, fontWeight: 600 }}>{t.q}</span>
              <span style={{ fontSize: 18, color: 'var(--muted)', flexShrink: 0, marginTop: 2, transition: 'transform .2s', display: 'inline-block', transform: open[i] ? 'rotate(180deg)' : 'none' }}>⌄</span>
            </button>
            {open[i] && (
              <div style={{ padding: '0 16px 16px' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10 }}>Rješenje korak po korak:</div>
                <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {t.steps.map((s, j) => (
                    <li key={j} style={{ fontSize: 13.5, lineHeight: 1.65, color: 'rgba(228,237,255,.85)' }}>{s}</li>
                  ))}
                </ol>
                <div style={{ marginTop: 14, padding: '10px 14px', background: 'rgba(62,207,110,.08)', border: '1px solid rgba(62,207,110,.25)', borderRadius: 10, fontSize: 13.5, fontWeight: 700, color: 'var(--green)' }}>
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

// ─── Mistakes ─────────────────────────────────────────────────────────────────
function Mistakes({ items }) {
  return (
    <div style={card({ borderColor: 'rgba(248,113,113,.25)', background: 'rgba(248,113,113,.03)' })}>
      <SectionHeading accent="var(--red)" label="Greške" title="Najčešće greške na maturi" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((m, i) => (
          <div key={i} style={{ fontSize: 13.5, lineHeight: 1.65, padding: '10px 14px', background: 'rgba(248,113,113,.06)', borderRadius: 10, border: '1px solid rgba(248,113,113,.18)' }}>{m}</div>
        ))}
      </div>
    </div>
  )
}

// ─── MiniQuiz ─────────────────────────────────────────────────────────────────
function MiniQuiz({ questions }) {
  const [chosen, setChosen] = useState({})  // q index → option index
  const [submitted, setSubmitted] = useState(false)

  const score = submitted
    ? questions.filter((q, i) => chosen[i] === q.answer).length
    : 0

  const scoreColor = score === questions.length ? 'var(--green)' : score >= questions.length / 2 ? 'var(--gold)' : 'var(--red)'

  const reset = () => { setChosen({}); setSubmitted(false) }

  return (
    <div style={card({ border: '1px solid rgba(75,123,255,.3)', background: 'rgba(75,123,255,.04)' })}>
      <SectionHeading accent="var(--blue)" label="Mini kviz" title="Provjeri razumijevanje" />

      {submitted && (
        <div style={{ marginBottom: 20, padding: '14px 18px', background: 'var(--s2)', borderRadius: 12, border: `1px solid ${scoreColor}44`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>
            Rezultat: <span style={{ color: scoreColor }}>{score}/{questions.length}</span>
          </div>
          <button onClick={reset} style={{ fontSize: 12, padding: '6px 14px', borderRadius: 8, border: '1px solid var(--bdr)', background: 'var(--s1)', color: 'var(--muted)', cursor: 'pointer', fontFamily: 'var(--fb)' }}>Pokušaj ponovo</button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {questions.map((q, qi) => {
          const picked = chosen[qi]
          const correct = q.answer
          return (
            <div key={qi}>
              <div style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.6, marginBottom: 12 }}>
                <span style={{ color: 'var(--blue)', fontWeight: 800, marginRight: 8 }}>{qi + 1}.</span>{q.q}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {q.opts.map((opt, oi) => {
                  let bg = 'var(--s2)'
                  let border = '1px solid var(--bdr)'
                  let color = 'var(--text)'
                  if (submitted) {
                    if (oi === correct) { bg = 'rgba(62,207,110,.1)'; border = '1px solid rgba(62,207,110,.4)'; color = 'var(--green)' }
                    else if (oi === picked && oi !== correct) { bg = 'rgba(248,113,113,.1)'; border = '1px solid rgba(248,113,113,.4)'; color = 'var(--red)' }
                  } else if (picked === oi) {
                    bg = 'rgba(75,123,255,.12)'; border = '1px solid rgba(75,123,255,.5)'; color = '#a0b4ff'
                  }
                  return (
                    <button
                      key={oi}
                      disabled={submitted}
                      onClick={() => !submitted && setChosen(c => ({ ...c, [qi]: oi }))}
                      style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', padding: '10px 14px', borderRadius: 10, border, background: bg, color, cursor: submitted ? 'default' : 'pointer', fontFamily: 'var(--fb)', fontSize: 13.5, textAlign: 'left', transition: 'all .15s' }}
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
                <div style={{ marginTop: 10, padding: '10px 14px', borderRadius: 10, background: 'rgba(75,123,255,.07)', border: '1px solid rgba(75,123,255,.2)', fontSize: 13, color: 'rgba(228,237,255,.8)', lineHeight: 1.6 }}>
                  💡 {q.exp}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {!submitted && (
        <button
          onClick={() => setSubmitted(true)}
          disabled={Object.keys(chosen).length < questions.length}
          style={{ marginTop: 20, width: '100%', padding: '12px', borderRadius: 12, border: 'none', background: Object.keys(chosen).length < questions.length ? 'var(--s2)' : 'var(--blue)', color: Object.keys(chosen).length < questions.length ? 'var(--muted)' : '#fff', fontFamily: 'var(--fb)', fontSize: 14, fontWeight: 700, cursor: Object.keys(chosen).length < questions.length ? 'not-allowed' : 'pointer', transition: 'all .2s' }}
        >
          Provjeri odgovore ({Object.keys(chosen).length}/{questions.length} odgovoreno)
        </button>
      )}
    </div>
  )
}

// ─── UltraSummary ─────────────────────────────────────────────────────────────
function UltraSummary({ items }) {
  return (
    <div style={card({ background: 'rgba(62,207,110,.04)', borderColor: 'rgba(62,207,110,.2)' })}>
      <SectionHeading accent="var(--green)" label="Ultra sažetak" title="Sve u 5 redaka" />
      <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--text)' }}>{item}</li>
        ))}
      </ol>
    </div>
  )
}

// ─── Connections ──────────────────────────────────────────────────────────────
function Connections({ items }) {
  return (
    <div style={card({})}>
      <SectionHeading accent="var(--muted)" label="Veze s temama" title="Poveži s drugim poglavljima" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((c, i) => (
          <div key={i} style={{ display: 'flex', gap: 12, padding: '10px 14px', background: 'var(--s2)', borderRadius: 10, border: '1px solid var(--bdr)' }}>
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

// ─── Chapter Navigation ───────────────────────────────────────────────────────
function ChapterNav({ prevChapter, nextChapter, moduleSlug, subjectSlug }) {
  return (
    <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
      {prevChapter ? (
        <Link href={`/discere/${subjectSlug}/${moduleSlug}/${prevChapter.slug}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '14px 18px', background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 14, textDecoration: 'none', color: 'var(--text)', transition: 'border-color .2s' }}>
          <span style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4, fontWeight: 600 }}>← Prethodno</span>
          <span style={{ fontSize: 13, fontWeight: 700 }}>{prevChapter.title}</span>
        </Link>
      ) : <div style={{ flex: 1 }} />}
      {nextChapter ? (
        <Link href={`/discere/${subjectSlug}/${moduleSlug}/${nextChapter.slug}`} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '14px 18px', background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 14, textDecoration: 'none', color: 'var(--text)', transition: 'border-color .2s' }}>
          <span style={{ fontSize: 11, color: 'var(--muted)', marginBottom: 4, fontWeight: 600 }}>Sljedeće →</span>
          <span style={{ fontSize: 13, fontWeight: 700 }}>{nextChapter.title}</span>
        </Link>
      ) : <div style={{ flex: 1 }} />}
    </div>
  )
}

// ─── LessonShell (main export) ────────────────────────────────────────────────
/**
 * @param {{ chapter: import('@/lib/discere/types').DiscereChapter, module_: import('@/lib/discere/types').DiscereModuleMeta, prevChapter: object|null, nextChapter: object|null, moduleSlug: string, subjectSlug: string, subjectColor: string }} props
 */
export default function LessonShell({ chapter, module_, prevChapter, nextChapter, moduleSlug, subjectSlug, subjectColor = '#34d399' }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--fb)' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '28px 20px 80px' }}>

        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--muted)', marginBottom: 24, flexWrap: 'wrap' }}>
          <Link href="/discere" style={{ color: 'var(--muted)', textDecoration: 'none' }}>DISCERE</Link>
          <span>/</span>
          <Link href={`/discere/${subjectSlug}`} style={{ color: 'var(--muted)', textDecoration: 'none' }}>Kemija</Link>
          <span>/</span>
          <Link href={`/discere/${subjectSlug}/${moduleSlug}`} style={{ color: 'var(--muted)', textDecoration: 'none' }}>{module_.title}</Link>
          <span>/</span>
          <span style={{ color: 'var(--text)', fontWeight: 600 }}>{chapter.title}</span>
        </nav>

        {/* Hero */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 14 }}>
            <span style={badge(subjectColor)}>Kemija</span>
            <span style={badge(subjectColor)}>{module_.title}</span>
            <span style={badge(difficultyColor[chapter.difficulty] || 'var(--muted)')}>
              {difficultyLabel[chapter.difficulty] || chapter.difficulty}
            </span>
            <span style={badge(chapter.maturaRelevance === 'ključna' ? 'var(--gold)' : 'var(--muted)')}>
              🎯 {relevanceLabel[chapter.maturaRelevance] || chapter.maturaRelevance}
            </span>
            <span style={badge('var(--muted)')}>⏱ {chapter.duration}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(26px,4vw,38px)', fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.1, marginBottom: 10 }}>{chapter.title}</h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>{chapter.subtitle}</p>
        </div>

        {/* Lesson sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <MustKnow items={chapter.mustKnow} />
          <QuickConcept text={chapter.quickConcept} />
          <Theory blocks={chapter.theory} />
          <MaturaPattern text={chapter.maturaPattern} />
          <TaskPatterns patterns={chapter.taskPatterns} />
          <Shortcuts items={chapter.shortcuts} />
          <Formulas formulas={chapter.formulas} />
          <Tasks tasks={chapter.tasks} />
          <Mistakes items={chapter.mistakes} />
          <MiniQuiz questions={chapter.quiz} />
          <UltraSummary items={chapter.ultraSummary} />
          <Connections items={chapter.connections} />
        </div>

        {/* Chapter navigation */}
        <div style={{ marginTop: 36 }}>
          <ChapterNav prevChapter={prevChapter} nextChapter={nextChapter} moduleSlug={moduleSlug} subjectSlug={subjectSlug} />
          <div style={{ textAlign: 'center', marginTop: 20 }}>
            <Link href={`/discere/${subjectSlug}/${moduleSlug}`} style={{ fontSize: 13, color: 'var(--muted)', textDecoration: 'none' }}>
              ← Sve lekcije modula
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
