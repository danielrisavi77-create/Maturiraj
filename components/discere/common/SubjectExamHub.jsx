'use client'
import React from 'react'

const seasonRank = { ljeto: 3, jesen: 2, zima: 1 }

export default function SubjectExamHub({ subject, index, onOpen }) {
  const exams = [...(index?.exams || [])].sort((a, b) => (
    (b.year - a.year) || ((seasonRank[b.season] || 0) - (seasonRank[a.season] || 0))
  ))

  return (
    <main style={{minHeight:'100vh', background:'var(--bg)', color:'var(--text)', padding:'32px 18px'}}>
      <div style={{maxWidth:920, margin:'0 auto'}}>
        <div className="sec-label">Discere · {subject.name}</div>
        <h1 style={{fontFamily:'var(--fh)', fontSize:'clamp(30px,5vw,46px)', margin:'8px 0'}}>Odaberi ispit</h1>
        <p style={{color:'var(--muted)', maxWidth:620, lineHeight:1.65}}>Rješavaj službene ispite po rokovima. Sadržaj se objavljuje tek nakon provjere strukture, ključeva i bodovanja.</p>

        {!exams.length && <div style={{marginTop:24, padding:18, border:'1px solid var(--bdr)', borderRadius:14, background:'var(--s1)'}}>Za ovaj predmet još nema objavljenih ispita.</div>}

        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:12, marginTop:24}}>
          {exams.map((exam) => {
            const available = exam.qaStatus === 'verified' || exam.qaStatus === 'published'
            return (
              <button
                type="button"
                key={exam.key}
                onClick={() => available && onOpen(exam.key)}
                disabled={!available}
                style={{textAlign:'left', padding:18, borderRadius:14, border:'1px solid var(--bdr)', background:'var(--s1)', color:'var(--text)', cursor:available ? 'pointer' : 'default', opacity:available ? 1 : .6}}
              >
                <strong style={{display:'block', fontSize:16, marginBottom:7}}>{exam.label}</strong>
                <span style={{display:'block', fontSize:12, color:'var(--muted)', lineHeight:1.6}}>{exam.questionCount} zadataka · {Math.round(exam.durationSec / 60)} min · {exam.maxPoints} bodova</span>
                <span style={{display:'block', marginTop:10, fontSize:11, fontWeight:700, color:available ? 'var(--green)' : 'var(--muted)'}}>{available ? 'OTVORI ISPIT →' : 'U PROVJERI'}</span>
              </button>
            )
          })}
        </div>
      </div>
    </main>
  )
}
