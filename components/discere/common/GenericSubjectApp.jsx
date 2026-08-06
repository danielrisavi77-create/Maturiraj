'use client'
import { useEffect, useState } from 'react'
import ExamShell from './ExamShell'
import SubjectExamHub from './SubjectExamHub'
import { loadExam, loadSubjectIndex } from '@/lib/discere/content-loader'

export default function GenericSubjectApp({ subject }) {
  const [index, setIndex] = useState(null)
  const [exam, setExam] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    setLoading(true)
    loadSubjectIndex(subject.id)
      .then((data) => { if (active) { setIndex(data); setLoading(false) } })
      .catch((err) => { if (active) { setError(err?.message || 'Sadržaj nije dostupan.'); setLoading(false) } })
    return () => { active = false }
  }, [subject.id])

  async function openExam(key) {
    setLoading(true)
    setError('')
    try {
      setExam(await loadExam(subject.id, key))
    } catch (err) {
      setError(err?.message || 'Ispit nije moguće učitati.')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div style={{minHeight:'70vh',display:'grid',placeItems:'center',color:'var(--muted)'}}>Učitavam…</div>
  if (error) return <div role="alert" style={{padding:24,color:'var(--text)'}}>{error}</div>
  if (exam) return <ExamShell exam={exam} onExit={() => setExam(null)} onComplete={() => {}} />
  return <SubjectExamHub subject={subject} index={index} onOpen={openExam} />
}
