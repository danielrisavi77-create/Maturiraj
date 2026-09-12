'use client'
import React from 'react'
import ReadingWorkbench from '@/components/learning/tools/ReadingWorkbench'

export default function EssayQuestion({ question, value, onChange, disabled = false, notebook, onNotebookChange, notebookScope }) {
  const rubric = question?.answer?.rubricDetails
  const words = typeof value === 'string' && value.trim() ? value.trim().split(/\s+/).length : 0
  return <>
    {question?.guidance?.length > 0 && <ul style={{fontSize:15,lineHeight:1.7,paddingLeft:22}}>{question.guidance.map(item=><li key={item}>{item}</li>)}</ul>}
    {question?.stimulus?.reading && <ReadingWorkbench reading={question.stimulus.reading} notebook={notebook} onChange={onNotebookChange} disabled={disabled} scope={notebookScope} onInsert={draft=>onChange((value ? value+'\n\n' : '')+draft)} />}
    <label style={{display:'grid', gap:6}}>
      <span className="sr-only">Odgovor</span>
      <textarea
        value={typeof value === 'string' ? value : ''}
        onChange={(event) => onChange(event.target.value)}
        disabled={disabled}
        rows={rubric ? 18 : 8}
        placeholder="Upiši odgovor"
        style={{width:'100%', boxSizing:'border-box', padding:'12px', borderRadius:10, border:'1px solid var(--bdr)', background:'var(--s2)', color:'var(--text)', resize:'vertical',fontFamily:'inherit',fontSize:16,lineHeight:1.7}}
      />
    </label>
    {rubric && <section aria-label="Rubrika pisanja" style={{marginTop:20,fontSize:15,lineHeight:1.7}}>
      <p aria-live="polite">{words} riječi · uputa: najmanje {rubric.wordCount.requiredMinimum}. Brojanje je pomoć pri pisanju, a ne ocjena.</p>
      <h3>Rubrika pisanja</h3><p>Procjena je ručna. Broj sastavnica: {rubric.criteria.length}; ukupno {rubric.rawMaxPoints} sirovih bodova, u izvornom katalogu ponderirano na {rubric.weightedMaxPoints}. Samoprovjera ne dodjeljuje bodove.</p>
      <p>Sažeti opisi prema katalogu {rubric.basisYear}. {rubric.targetYearStatus === 'unconfirmed' && <>Katalog {rubric.targetYear} nije potvrđen. </>}<a href={rubric.source.url} target="_blank" rel="noopener noreferrer" style={{color:'var(--subject-accent, #93c5fd)'}}>Službena ljestvica, tablica {rubric.source.table} ↗</a></p>
      {rubric.criteria.map(criterion=><details key={criterion.id} style={{borderTop:'1px solid var(--bdr)',padding:'10px 0'}}>
        <summary style={{minHeight:44,cursor:'pointer',fontWeight:700}}>{criterion.title}</summary>
        <ul>{criterion.levels.map(level=><li key={level.points}><strong>{level.points}:</strong> {level.description}</li>)}</ul>
      </details>)}
      <p>Uvjeti vrednovanja provjeravaju se ručno. Donja tolerancija od {rubric.wordCount.lowerTolerancePercent} % nije preporučena duljina; {rubric.wordCount.maximum === null ? 'gornja granica nije propisana.' : `gornja granica je ${rubric.wordCount.maximum} riječi.`}</p>
    </section>}
  </>
}
