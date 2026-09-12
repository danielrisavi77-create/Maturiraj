'use client'
import { useState } from 'react'
import QuestionRenderer from './QuestionRenderer'
import { responseForQuestion } from '@/lib/discere/question-responses'
import styles from './ExamReview.module.css'

function leaves(question) {
  return question.children ? question.children.flatMap(leaves) : [question]
}

function keyText(question) {
  const answer = question.answer
  if (!answer) return 'Ključ nije dostupan.'
  if (answer.officialText) return answer.officialText
  if (answer.rubric) return answer.rubric.map(row => row.text).join('\n')
  if (answer.correct) return answer.correct.map(id => question.options?.find(option => option.id === id)?.text || id).join('\n')
  if (Array.isArray(answer.accepted)) return answer.accepted.join(' / ')
  if (answer.accepted) return (question.gaps || []).map(gap => `${gap.label || gap.id}: ${(answer.accepted[gap.id] || []).join(' / ')}`).join('\n')
  if (answer.pairs) return (question.left || []).map(item => `${item.text}: ${question.right?.find(right => right.id === answer.pairs[item.id])?.text || answer.pairs[item.id]}`).join('\n')
  if (answer.order) return answer.order.map(id => question.items?.find(item => item.id === id)?.text || id).join(' → ')
  if (answer.values) return (question.statements || []).map(item => `${item.text}: ${answer.values[item.id] ? 'Točno' : 'Netočno'}`).join('\n')
  return 'Ključ nije dostupan.'
}

function ReviewedQuestion({ question, number, responses, notebook, notebookScope }) {
  const [open, setOpen] = useState(false)
  return <details className={styles.task} onToggle={event => setOpen(event.currentTarget.open)}>
    <summary className={styles.summary}>Zadatak {number}</summary>
    {open && <div className={styles.body}>
      <p className={styles.label}>Tvoj predani odgovor</p>
      <QuestionRenderer question={question} value={responseForQuestion(question, responses)} disabled onChange={() => {}} notebook={notebook} notebookScope={notebookScope} listeningMode="review" />
      {leaves(question).map((leaf,index) => {
        const official = leaf.answer?.source === 'official'
        const rubric = leaf.answer?.kind === 'rubric'
        const explanation = typeof leaf.explanation === 'string' ? leaf.explanation : leaf.explanation?.text
        const label=leaf===question?number:/^\d+(?:\.\d+)*$/.test(leaf.id)?leaf.id:`${number}.${index+1}`
        return <section key={leaf.id} className={styles.key} aria-label={`Ključ zadatka ${label}`}>
          <h3>{label} · {official ? rubric ? 'Službeni ključ i rubrika' : 'Službeni ključ' : rubric ? 'Rubrika iz sadržaja' : 'Ključ iz sadržaja'}</h3>
          {rubric && <p className={styles.pending}>Čeka ručnu procjenu · najviše {leaf.points} {leaf.points === 1 ? 'bod' : 'bodova'}. Usporedba s rubricom ne dodjeljuje bodove.</p>}
          <p className={styles.text} lang={leaf.language}>{keyText(leaf)}</p>
          {official && leaf.sourceRef?.keyPdfPage && <p className={styles.reference}>Službeni ključ · PDF stranica {leaf.sourceRef.keyPdfPage}</p>}
          {leaf.answer?.acceptedSource === 'maturiraj-adapted' && <p className={styles.reference}>Automatska provjera koristi prilagođene varijante zapisa. Drukčije formuliran točan odgovor može ostati neprepoznat; usporedi ga sa službenim ključem.</p>}
          {explanation && <div className={styles.explanation}>
            <h4>{leaf.explanation?.source === 'ai' ? 'AI povratna informacija' : 'Objašnjenje iz sadržaja'}</h4>
            <p className={styles.text}>{explanation}</p>
          </div>}
        </section>
      })}
    </div>}
  </details>
}

export default function ExamReview({ exam, responses, notebooks = {}, notebookScope }) {
  return <section className={styles.review} aria-label="Pregled predanih odgovora">
    <h2>Pregled odgovora</h2>
    <p className={styles.intro}>Otvori zadatak i usporedi predani odgovor s ključem. Ovaj pregled ne mijenja rezultat.</p>
    {exam.questions.map((question, index) => <ReviewedQuestion key={question.id} question={question} number={/^\d+$/.test(question.id) ? question.id : index+1} responses={responses} notebook={notebooks[question.id]} notebookScope={notebookScope} />)}
  </section>
}
