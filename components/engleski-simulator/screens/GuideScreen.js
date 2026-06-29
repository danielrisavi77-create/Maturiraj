'use client'
import { useState } from 'react'

const GUIDE_SECTIONS = [
  {
    id: 'start',
    title: '🚀 Kako početi?',
    content: [
      { q: 'Odaberi razinu', a: 'Na početnom ekranu odaberi Osnovna (B) ili Viša razina (A) i godišnji ispit koji želiš rješavati.' },
      { q: 'Odaberi mod', a: 'Vježba = bez vremenskog ograničenja s povratnom informacijom. Simulacija = pravi uvjeti mature, bez pomoći.' },
      { q: 'Počni s vježbanjem', a: 'Preporučujemo početi s vježbanjem i postupno prelaziti na simulacije. Cilj: ≥3 simulacije tjedno.' },
    ],
  },
  {
    id: 'types',
    title: '📋 Vrste pitanja',
    content: [
      { q: 'Višestruki izbor (MC)', a: 'Odaberi jedan točan odgovor od 4 ponuđena (A, B, C, D).' },
      { q: 'Višestruke kombinacije (MS)', a: 'Odaberi dva točna odgovora od 5. Oba moraju biti točna za bod.' },
      { q: 'Povezivanje (MAT)', a: 'Spoji pojmove s lijeve strane s definicijama/parnjacima s desne strane.' },
      { q: 'Dopunjavanje (FB)', a: 'Upiši nedostajuću riječ / izraz u prazno polje. Pazite na gramatiku!' },
      { q: 'Umetanje rečenice (INS)', a: 'Odaberi koja rečenica od 5 ponuđenih odgovara praznini u tekstu.' },
      { q: 'Kratki odgovor (SA)', a: 'Napiši kratki odgovor na pitanje (1–3 rečenice). Vrednuje nastavnik.' },
    ],
  },
  {
    id: 'scoring',
    title: '🏆 Bodovanje i ocjene',
    content: [
      { q: 'NCE bodovanje', a: 'Matura se vrednuje prema Nacionalnim centrom za vanjsko vrednovanje (NCVVO). Svako pitanje nosi određen broj bodova.' },
      { q: 'Ljestvica ocjena', a: '85%+ = Odličan (5) | 70–84% = Vrlo dobar (4) | 55–69% = Dobar (3) | 40–54% = Dovoljan (2) | <40% = Nedovoljan (1)' },
      { q: 'Prolazak mature', a: 'Minimalni prag za prolazak: ~40% ukupnog broja bodova. Na ovom simulatoru prolazak = ≥40%.' },
    ],
  },
  {
    id: 'strategy',
    title: '🎯 Strategija učenja',
    content: [
      { q: 'Fokus na slabim temama', a: 'Koristi Analytics → Teme za pregled najslabijih tema. Filtriraj po temi u Pretraži.' },
      { q: 'Redovitost je ključ', a: 'Bolji su rezultati kod učenika koji vježbaju svaki dan po 30min nego jednom tjedno 3h.' },
      { q: 'Analiziraj greške', a: 'Nakon svake simulacije pregleda "Ponovi greške" — tamo su pitanja koja ti idu najlošije.' },
      { q: 'Virtualni ispit', a: 'Koristi "Virtualni ispit" za vježbanje bez ponavljanja istih ispita — generira mješavinu pitanja.' },
    ],
  },
  {
    id: 'xp',
    title: '⚡ XP sustav',
    content: [
      { q: 'Kako zaraditi XP?', a: 'Svaki riješeni ispit donosi XP: razred × 10 + bonus za točnost + bonus za streak.' },
      { q: 'Razine', a: 'Početnik (0 XP) → Vježbač (250) → Napredni (700) → Matura Pro (1400) → Matura Master (2500+)' },
      { q: 'Streak bonus', a: 'Vježbanje nekoliko dana zaredom daje bonus XP. Dnevni streak se pamti!' },
    ],
  },
  {
    id: 'tips',
    title: '💡 Korisne funkcije',
    content: [
      { q: 'Dnevni izazov', a: '20 pitanja koja se mijenjaju svaki dan u ponoć. Brz način za svakodnevno vježbanje.' },
      { q: 'Bookmarks', a: 'Označi pitanja koja su ti teška za brzo ponavljanje. Sprema se lokalno u preglednik.' },
      { q: 'Kontekst pitanja', a: 'Klikni "Kontekst" u modu vježbanja za prikaz originalnog teksta uz pitanje.' },
      { q: 'Export podataka', a: 'Svi tvoji podaci su lokalni (localStorage). Možeš ispisati izvještaj napretka (PDF).' },
    ],
  },
]

export default function GuideScreen({ onBack }) {
  const [open, setOpen] = useState(new Set(['start']))

  function toggle(id) {
    setOpen(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="eng-sim">
      <div className="sim-card">
        <div className="exam-header" style={{ marginBottom: 20 }}>
          <button className="btn btn-ghost exam-header-back" onClick={onBack}>✕ Zatvori</button>
          <div className="exam-header-info">
            <div className="exam-title">📖 Vodič za korištenje</div>
            <div className="exam-meta">Sve što trebaš znati</div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(135deg, var(--gold-d, rgba(168,114,10,.1)), rgba(0,0,0,0))', borderRadius: 'var(--rr)', padding: '16px', marginBottom: 20, border: '1px solid var(--bdr)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 32 }}>📘</div>
            <div>
              <div style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 700, marginBottom: 2 }}>Maturiraj.com — Simulator</div>
              <div style={{ fontSize: 12, color: 'var(--muted)' }}>Engleski jezik · Matura · Priprema s realnim ispitima NCVVO</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {GUIDE_SECTIONS.map(section => {
            const isOpen = open.has(section.id)
            return (
              <div key={section.id} className="guide-section" style={{
                background: 'var(--s1)', border: '1px solid var(--bdr)', borderRadius: 'var(--rr)',
                overflow: 'hidden',
              }}>
                <button className="guide-section-header" onClick={() => toggle(section.id)} style={{
                  width: '100%', background: 'none', border: 'none', padding: '14px 16px',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer', color: 'var(--text)', textAlign: 'left',
                }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>{section.title}</span>
                  <span style={{ fontSize: 18, color: 'var(--muted)', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}>▾</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 16px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {section.content.map((item, i) => (
                      <div key={i} style={{ background: 'var(--s2)', borderRadius: 'var(--r)', padding: '12px 14px' }}>
                        <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 4, color: 'var(--gold)' }}>
                          {item.q}
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6 }}>
                          {item.a}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div style={{ marginTop: 20, padding: '14px', background: 'var(--s1)', borderRadius: 'var(--r)', border: '1px solid var(--bdr)', fontSize: 12, color: 'var(--muted)', textAlign: 'center' }}>
          Pitanja? Kontaktiraj nas na <strong>info@maturiraj.com</strong>
        </div>
      </div>
    </div>
  )
}
