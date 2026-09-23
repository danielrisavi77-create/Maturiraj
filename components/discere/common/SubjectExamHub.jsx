'use client'
import React from 'react'
import SubjectShell from './SubjectShell'
import styles from './SubjectExamHub.module.css'

const seasonRank = { ljeto: 3, jesen: 2, zima: 1 }

export default function SubjectExamHub({ subject, index, onOpen }) {
  const exams = [...(index?.exams || [])].sort((a, b) => (
    (b.year - a.year) || ((seasonRank[b.season] || 0) - (seasonRank[a.season] || 0))
  ))

  return (
    <SubjectShell subject={subject}>
      <div className="dsc-label">Discere · {subject.name}</div>
      <h1 className={styles.title}>Odaberi ispit</h1>
      <p className={styles.intro}>Rješavaj službene ispite po rokovima. Sadržaj se objavljuje tek nakon provjere strukture, ključeva i bodovanja.</p>

      {!exams.length && <div className={`dsc-card ${styles.empty}`}>Za ovaj predmet još nema objavljenih ispita.</div>}

      <div className={styles.grid}>
        {exams.map((exam) => {
          const available = exam.qaStatus === 'verified' || exam.qaStatus === 'published'
          return (
            <button
              type="button"
              key={exam.key}
              onClick={() => available && onOpen(exam.key)}
              disabled={!available}
              className={`dsc-card dsc-btn ${styles.exam}`}
            >
              <strong className={styles.examLabel}>{exam.label}</strong>
              <span className={styles.examMeta}>{exam.questionCount} zadataka · {Math.round(exam.durationSec / 60)} min · {exam.maxPoints} bodova</span>
              <span className={`${styles.examStatus} ${available ? styles.available : styles.pending}`}>{available ? 'OTVORI ISPIT →' : 'U PROVJERI'}</span>
            </button>
          )
        })}
      </div>
    </SubjectShell>
  )
}
