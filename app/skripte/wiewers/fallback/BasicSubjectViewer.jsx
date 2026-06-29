'use client'

export default function BasicSubjectViewer({ subject, onBack }) {
  if (!subject) return null

  return (
    <div className="subject-view-shell">
      <button type="button" className="inline-back-btn" onClick={onBack}>
        ← Natrag na sve predmete
      </button>

      <div
        className="subject-badge"
        style={{
          color: subject.color || '#efb04a',
          borderColor: `${subject.color || '#efb04a'}44`,
          background: `${subject.color || '#efb04a'}14`,
        }}
      >
        {subject.sym || '•'}
      </div>

      <h1 className="page-title">{subject.name}</h1>
      <p className="page-subtitle">
        Poseban premium pregled za ovaj predmet još nije dovršen. Ispod je privremeni pregled
        razina i poglavlja.
      </p>

      <div className="levels">
        {(subject.razine || []).map((level) => (
          <section key={level.id} className="level-card">
            <div className="level-head">
              <h2 className="level-title">{level.label}</h2>
              <div className="level-count">{(level.poglavlja || []).length} poglavlja</div>
            </div>

            <div className="chapter-list">
              {(level.poglavlja || []).map((chapter, index) => (
                <div key={chapter.id || `${level.id}-${index}`} className="chapter-item">
                  <div className="chapter-main">
                    <div className="chapter-name">{chapter.naziv}</div>
                    <div className="chapter-topics">{(chapter.teme || []).join(' · ')}</div>
                  </div>

                  <button type="button" className="open-btn disabled">
                    Uskoro
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}