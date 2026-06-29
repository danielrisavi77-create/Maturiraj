'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useParentContext } from '@/lib/roditelji/parentContext'
import { PCard, PLabel, PEmptyState, PSkeleton } from '@/components/roditelji/ui'

export default function PostavkePage() {
  const router    = useRouter()
  const { linkedChildren, parentReady, loading, refetch } = useParentContext()
  const [removing, setRemoving] = useState(null) // childEmail being removed
  const [digestEnabled, setDigestEnabled] = useState(true)
  const [saving, setSaving] = useState(false)

  const supabase = createClient()

  useEffect(() => {
    async function loadPrefs() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('parent_preferences')
        .select('digest_enabled')
        .eq('parent_id', user.id)
        .single()
      if (data) setDigestEnabled(data.digest_enabled)
    }
    loadPrefs()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const savePrefs = async () => {
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase
      .from('parent_preferences')
      .upsert({ parent_id: user.id, digest_enabled: digestEnabled })
    setSaving(false)
  }

  const removeChild = async (childEmail) => {
    if (!confirm(`Jeste li sigurni da želite prekinuti praćenje za ${childEmail}?`)) return
    setRemoving(childEmail)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await supabase
      .from('parent_children')
      .delete()
      .eq('parent_id', user.id)
      .eq('child_email', childEmail)
    await refetch()
    setRemoving(null)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace('/')
  }

  if (!parentReady || loading) {
    return <div>{[1,2].map(i => <PSkeleton key={i} height={100} />)}</div>
  }

  return (
    <div>
      <h1 style={styles.title}>Postavke</h1>

      {/* ── Moja djeca ─────────────────────────────────────────────── */}
      <PCard style={{ marginBottom: 16 }}>
        <PLabel>Moja djeca</PLabel>

        {linkedChildren.length === 0 ? (
          <PEmptyState icon="👤" title="Nema dodane djece" style={{ padding: '24px 0' }} />
        ) : (
          linkedChildren.map(child => (
            <div key={child.childId} style={styles.childRow}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={styles.avatar}>{child.name[0]?.toUpperCase()}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{child.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>{child.email}</div>
                </div>
              </div>
              <button
                onClick={() => removeChild(child.email)}
                disabled={removing === child.email}
                style={styles.removeBtn}
              >
                {removing === child.email ? '...' : 'Ukloni'}
              </button>
            </div>
          ))
        )}

        <button
          onClick={() => router.push('/roditelji/povezi')}
          style={styles.addBtn}
        >
          + Dodaj dijete
        </button>
      </PCard>

      {/* ── Obavijesti ─────────────────────────────────────────────── */}
      <PCard style={{ marginBottom: 16 }}>
        <PLabel>Tjedni email digest</PLabel>
        <div style={styles.toggle}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>
              Tjedni izvještaj na email
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2, lineHeight: 1.5 }}>
              Primajte sažetak napretka svakog ponedjeljka.
            </div>
          </div>
          <button
            onClick={() => setDigestEnabled(v => !v)}
            style={{ ...styles.toggleBtn, background: digestEnabled ? 'rgba(75,123,255,0.15)' : 'rgba(255,255,255,0.06)', borderColor: digestEnabled ? 'rgba(75,123,255,0.4)' : 'var(--bdr)' }}
          >
            <span style={{ ...styles.toggleThumb, transform: digestEnabled ? 'translateX(20px)' : 'translateX(2px)', background: digestEnabled ? 'var(--blue)' : 'var(--muted)' }} />
          </button>
        </div>
        <button onClick={savePrefs} disabled={saving} style={styles.saveBtn}>
          {saving ? 'Sprema...' : 'Spremi postavke'}
        </button>
      </PCard>

      {/* ── Pretplata ──────────────────────────────────────────────── */}
      <PCard style={{ marginBottom: 16 }}>
        <PLabel>Pretplata</PLabel>
        <div style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 12, lineHeight: 1.6 }}>
          Upravljajte trenutnom pretplatom — promjena plana, otkazivanje, fakture.
        </div>
        <a
          href="/api/stripe/portal"
          style={styles.stripeLink}
        >
          Otvori portal pretplate →
        </a>
      </PCard>

      {/* ── Logout ─────────────────────────────────────────────────── */}
      <button onClick={handleLogout} style={styles.logoutBtn}>
        Odjava
      </button>
    </div>
  )
}

const styles = {
  title: {
    fontSize:     20,
    fontWeight:   900,
    letterSpacing: '-0.01em',
    color:        'var(--text)',
    marginBottom:  24,
  },
  childRow: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    padding:        '12px 0',
    borderBottom:   '1px solid var(--bdr)',
  },
  avatar: {
    width:          36,
    height:         36,
    borderRadius:   '50%',
    background:     'rgba(75,123,255,0.15)',
    border:         '1px solid rgba(75,123,255,0.25)',
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'center',
    fontWeight:     800,
    fontSize:       15,
    color:          'var(--blue)',
    flexShrink:     0,
  },
  removeBtn: {
    padding:      '5px 12px',
    borderRadius:  8,
    border:        '1px solid rgba(248,113,113,0.3)',
    background:   'rgba(248,113,113,0.06)',
    color:        'var(--red)',
    fontSize:      12,
    fontWeight:    600,
    cursor:        'pointer',
  },
  addBtn: {
    marginTop:    14,
    padding:      '9px 16px',
    borderRadius:  10,
    border:        '1px solid var(--bdr-hi)',
    background:   'rgba(255,255,255,0.04)',
    color:        'var(--text)',
    fontSize:      13,
    fontWeight:    600,
    cursor:        'pointer',
    width:         '100%',
  },
  toggle: {
    display:        'flex',
    alignItems:     'center',
    justifyContent: 'space-between',
    gap:             12,
    marginBottom:   14,
  },
  toggleBtn: {
    width:        44,
    height:       24,
    borderRadius:  99,
    border:        '1px solid',
    background:   'transparent',
    cursor:        'pointer',
    position:      'relative',
    flexShrink:    0,
    padding:       0,
    transition:    'background 0.2s, border-color 0.2s',
  },
  toggleThumb: {
    position:   'absolute',
    top:         2,
    width:       18,
    height:      18,
    borderRadius: '50%',
    transition: 'transform 0.2s, background 0.2s',
  },
  saveBtn: {
    padding:      '9px 18px',
    borderRadius:  10,
    border:        'none',
    background:   'rgba(75,123,255,0.12)',
    color:        'var(--blue)',
    fontSize:      13,
    fontWeight:    700,
    cursor:        'pointer',
  },
  stripeLink: {
    display:        'inline-block',
    padding:        '9px 18px',
    borderRadius:    10,
    border:          '1px solid var(--bdr-hi)',
    background:     'rgba(255,255,255,0.04)',
    color:          'var(--text)',
    fontSize:        13,
    fontWeight:      600,
    textDecoration:  'none',
  },
  logoutBtn: {
    display:     'block',
    width:       '100%',
    padding:     '11px',
    borderRadius: 10,
    border:      '1px solid rgba(248,113,113,0.25)',
    background:  'rgba(248,113,113,0.05)',
    color:       'var(--red)',
    fontSize:     14,
    fontWeight:   600,
    cursor:       'pointer',
    marginTop:    8,
  },
}
