'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { PCard, PLabel } from '@/components/roditelji/ui'

export default function PoweziPage() {
  const router   = useRouter()
  const [email, setEmail]   = useState('')
  const [name, setName]     = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [msg, setMsg]       = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setMsg('')

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      router.replace('/prijava?redirect=/roditelji/povezi')
      return
    }

    // Provjeri postoji li dijete s tim emailom
    const { data: childProfile } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', email.trim().toLowerCase())
      .single()

    // Insert parent_children row
    const childId   = childProfile?.id ?? null
    const { error } = await supabase
      .from('parent_children')
      .insert({
        parent_id:   user.id,
        child_id:    childId,
        child_email: email.trim().toLowerCase(),
        child_name:  name.trim() || null,
        status:      childId ? 'linked' : 'pending',
        linked_at:   childId ? new Date().toISOString() : null,
      })

    if (error) {
      if (error.code === '23505') {
        setMsg('To dijete je već dodano.')
      } else {
        setMsg('Greška pri dodavanju. Pokušaj ponovo.')
      }
      setStatus('error')
      return
    }

    setStatus('success')

    // Redirect after short delay so user sees confirmation
    setTimeout(() => router.replace('/roditelji/pregled'), 1800)
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.inner}>

        {/* Header */}
        <div style={styles.header}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>👨‍👧</div>
          <h1 style={styles.title}>Poveži dijete</h1>
          <p style={styles.subtitle}>
            Unesite email adresu vašeg djeteta koje koristi Maturiraj.hr.
            Ako dijete ima račun, odmah ćete vidjeti njihov napredak.
          </p>
        </div>

        {status === 'success' ? (
          <PCard style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>✅</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
              Dijete je dodano!
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>
              Preusmjeravamo vas na pregled...
            </div>
          </PCard>
        ) : (
          <PCard>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 16 }}>
                <PLabel>Email adresa djeteta *</PLabel>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="dijete@email.com"
                  style={styles.input}
                />
              </div>

              <div style={{ marginBottom: 20 }}>
                <PLabel>Ime djeteta (opcionalno)</PLabel>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="npr. Marko"
                  style={styles.input}
                />
                <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 5 }}>
                  Koristimo za prikaz u dashboardu. Ako ostavite prazno, koristit ćemo email.
                </div>
              </div>

              {msg && (
                <div style={styles.errorMsg}>{msg}</div>
              )}

              <button type="submit" disabled={status === 'loading'} style={styles.btn}>
                {status === 'loading' ? 'Dodajem...' : 'Poveži dijete →'}
              </button>
            </form>
          </PCard>
        )}

        {/* Note */}
        <p style={styles.note}>
          🔒 Privatnost djeteta je zaštićena — vidite samo aktivnost i napredak,
          ne sadržaj učenja ni komunikaciju s AI Profesorom.
        </p>
      </div>
    </div>
  )
}

const styles = {
  wrap: {
    display:        'flex',
    justifyContent: 'center',
    padding:        '40px 16px',
  },
  inner: {
    width:    '100%',
    maxWidth: 480,
  },
  header: {
    textAlign:     'center',
    marginBottom:  28,
  },
  title: {
    fontSize:     24,
    fontWeight:   900,
    letterSpacing: '-0.02em',
    color:        'var(--text)',
    marginBottom:  10,
  },
  subtitle: {
    fontSize:   14,
    color:      'var(--muted)',
    lineHeight: 1.65,
  },
  input: {
    width:        '100%',
    padding:      '11px 14px',
    borderRadius:  12,
    border:        '1px solid var(--bdr-hi)',
    background:    'rgba(255,255,255,0.04)',
    color:        'var(--text)',
    fontSize:      14,
    outline:       'none',
    marginTop:     4,
    boxSizing:     'border-box',
  },
  btn: {
    width:        '100%',
    padding:      '13px',
    borderRadius:  13,
    border:        'none',
    background:    'linear-gradient(135deg, var(--blue), var(--violet))',
    color:        '#fff',
    fontSize:      15,
    fontWeight:    800,
    cursor:        'pointer',
  },
  errorMsg: {
    padding:       '10px 14px',
    borderRadius:   10,
    background:    'rgba(248,113,113,0.1)',
    border:        '1px solid rgba(248,113,113,0.2)',
    color:         'var(--red)',
    fontSize:       13,
    marginBottom:   14,
  },
  note: {
    marginTop:   20,
    fontSize:    12,
    color:       'var(--muted)',
    textAlign:   'center',
    lineHeight:  1.6,
  },
}
