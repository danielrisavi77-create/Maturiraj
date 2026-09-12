'use client'
import { readingNotebookText } from '@/lib/learning/reading-notebook'
import styles from './ReadingWorkbench.module.css'

export default function ReadingWorkbench({ reading, notebook = {thesis:'',annotations:{}}, onChange, onInsert, disabled, scope = 'page' }) {
  const selected = reading.lines.filter(line => Object.hasOwn(notebook.annotations, line.id))
  function select(line, checked) {
    const annotations = {...notebook.annotations}
    if (checked) annotations[line.id] = ''
    else delete annotations[line.id]
    onChange({...notebook,annotations})
  }
  return <section className={styles.workbench} aria-label="Tekst i bilješke">
    <div className={styles.grid}>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Polazni tekst</p><h3>{reading.title}</h3><p>{reading.author}</p>
        <p className={styles.note}>Odaberi stihove koji podupiru tvoj argument. {reading.note}</p>
        <fieldset className={styles.poem}><legend className={styles.legend}>Stihovi za analizu</legend>
          {reading.lines.map((line,index) => <label key={line.id} className={styles.line} data-stanza-start={index>0 && reading.lines[index-1].stanza!==line.stanza ? 'true' : undefined}>
            <input type="checkbox" disabled={disabled} checked={Object.hasOwn(notebook.annotations,line.id)} aria-label={`Odaberi stih ${index+1}: ${line.text}`} onChange={event=>select(line,event.target.checked)} />
            <span className={styles.number} aria-hidden="true">{index+1}</span><span>{line.text}</span>
          </label>)}
        </fieldset>
        <a className={styles.link} href={reading.sourceUrl} target="_blank" rel="noopener noreferrer">Otvori izvorni tekst ↗</a>
      </div>
      <div className={styles.panel}>
        <p className={styles.eyebrow}>Od opažanja do argumenta</p><h3>Tvoja radna bilježnica</h3>
        <p className={styles.note}>{scope==='device' ? 'Bilješke se čuvaju na ovom uređaju uz tvoj pokušaj. Na račun se sprema odgovor u polju eseja. Bilješke nisu dio ocjene.' : 'Bilješke su dostupne tijekom ovog otvaranja. Osvježavanjem se gube; nisu dio ocjene.'}</p>
        <label className={styles.field}>Središnja tvrdnja — bilješka<textarea maxLength={4000} rows={3} value={notebook.thesis} disabled={disabled} onChange={event=>onChange({...notebook,thesis:event.target.value})} placeholder="Odgovori na polazno pitanje jednom rečenicom." /></label>
        {!selected.length && <p className={styles.note}>Odaberi stih pa napiši što opažaš i kako to podupire tvrdnju.</p>}
        {selected.map(line => <div className={styles.annotation} key={line.id}>
          <blockquote>„{line.text}”<cite>Stih {reading.lines.indexOf(line)+1}</cite></blockquote>
          <label className={styles.field}>Bilješka uz stih {reading.lines.indexOf(line)+1}<textarea rows={3} maxLength={2000} value={notebook.annotations[line.id]} disabled={disabled} onChange={event=>onChange({...notebook,annotations:{...notebook.annotations,[line.id]:event.target.value}})} placeholder="Opažanje → učinak → veza s tvrdnjom" /></label>
        </div>)}
        <button type="button" className={styles.button} disabled={disabled || (!notebook.thesis.trim() && !selected.length)} onClick={()=>onInsert(readingNotebookText(reading,notebook))}>Dodaj nacrt argumenta u esej</button>
        <p className={styles.note}>Nacrt se dodaje na kraj. Poveži rečenice i provjeri citate prije predaje.</p>
      </div>
    </div>
  </section>
}
