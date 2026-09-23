'use client'
// Zajednička ljuska za sve canonical predmete: .dsc-root s temom/pristupačnim
// zastavicama, predmetnim akcentom i sticky zaglavljem (natrag / naziv+simbol
// / toggle teme). GenericSubjectApp i ExamShell namjerno ne uvoze ovu ljusku
// (izvan dosega ove grupe) — koristi ju SubjectExamHub oko vlastitog ekrana.
import Link from 'next/link'
import { useDiscereTheme } from '@/lib/discere/theme.js'
import './discere-canonical.css'

export default function SubjectShell({ subject, backHref = '/discere', title, children }) {
  const { theme, toggleTheme, rootAttrs, styleVars } = useDiscereTheme(subject?.id)
  const label = title || subject?.name || ''

  return (
    <div className="dsc-root" {...rootAttrs} style={styleVars}>
      <header className="dsc-header">
        <Link href={backHref} className="dsc-header-back" aria-label="Natrag">←</Link>
        <div className="dsc-header-title">
          {subject?.sym && <span className="dsc-header-sym" aria-hidden="true">{subject.sym}</span>}
          <span className="dsc-header-name">{label}</span>
        </div>
        <button
          type="button"
          className="dsc-btn dsc-header-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Prebaci na svijetlu temu' : 'Prebaci na tamnu temu'}
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </header>
      <main className="dsc-main">{children}</main>
    </div>
  )
}
