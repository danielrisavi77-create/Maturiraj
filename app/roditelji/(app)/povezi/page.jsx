'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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

    let response
    try {
      response = await fetch('/api/parent/children', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          child_email: email,
          child_name: name,
        }),
      })
    } catch {
      setMsg('Poziv trenutačno nije moguće poslati. Pokušaj ponovo.')
      setStatus('error')
      return
    }

    const data = await response.json().catch(() => ({}))
    if (response.status === 401) {
      router.replace('/prijava?redirect=/roditelji/povezi')
      return
    }
    if (!response.ok) {
      setMsg(data.error || 'Poziv trenutačno nije moguće poslati. Pokušaj ponovo.')
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
            Pristup napretku dobit ćete tek nakon što dijete prihvati poziv.
          </p>
        </div>

        {status === 'success' ? (
          <PCard style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>✅</div>
            <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}>
              Poziv je poslan!
            </div>
            <div style={{ fontSize: 13, color: 'var(--muted)' }}>
              Čeka se prihvaćanje djeteta. Preusmjeravamo vas na pregled...
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
                {status === 'loading' ? 'Šaljem...' : 'Pošalji poziv →'}
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
