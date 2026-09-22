'use client'
import { useState, useEffect, useCallback } from 'react'
import MedicinarReadWidget from '@/components/medicinar/MedicinarReadWidget'

export default function RoditeljiMedicinarPage() {
  const [links, setLinks] = useState([])
  const [linksLoading, setLinksLoading] = useState(true)
  const [dashboards, setDashboards] = useState({})
  const [dashLoading, setDashLoading] = useState({})
  const [formOpen, setFormOpen] = useState(false)
  const [formEmail, setFormEmail] = useState('')
  const [formName, setFormName] = useState('')
  const [formSubmitting, setFormSubmitting] = useState(false)
  const [formError, setFormError] = useState(null)

  const fetchLinks = useCallback(() => fetch('/api/parent/children')
    .then(res => res.ok ? res.json() : null)
    .then(data => {
      if (data) setLinks(data)
      setLinksLoading(false)
    }), [])

  useEffect(() => { fetchLinks() }, [fetchLinks])

  // Fetch dashboard data for every linked child
  useEffect(() => {
    const linked = links.filter(l => l.status === 'linked' && l.child_id)
    linked.forEach(link => {
      if (dashboards[link.child_id] || dashLoading[link.child_id]) return
      setDashLoading(prev => ({ ...prev, [link.child_id]: true }))
      fetch(`/api/parent/child-dashboard/${link.child_id}`)
        .then(r => r.ok ? r.json() : null)
        .then(data => { if (data) setDashboards(prev => ({ ...prev, [link.child_id]: data })) })
        .finally(() => setDashLoading(prev => ({ ...prev, [link.child_id]: false })))
    })
  }, [links]) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleAdd(e) {
    e.preventDefault()
    setFormError(null)
    setFormSubmitting(true)
    try {
      const res = await fetch('/api/parent/children', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ child_email: formEmail, child_name: formName || undefined }),
      })
      const json = await res.json()
      if (!res.ok) { setFormError(json.error || 'Greška'); return }
      setFormEmail(''); setFormName(''); setFormOpen(false)
      setLinksLoading(true)
      await fetchLinks()
    } catch { setFormError('Mrežna greška.') }
    finally { setFormSubmitting(false) }
  }

  async function handleRemove(linkId) {
    if (!confirm('Ukloniti praćenje?')) return
    const res = await fetch(`/api/parent/children?id=${linkId}`, { method: 'DELETE' })
    if (res.ok) setLinks(prev => prev.filter(l => l.id !== linkId))
  }

  const linkedLinks   = links.filter(l => l.status === 'linked' && l.child_id)
  const pendingLinks  = links.filter(l => l.status === 'pending')
  const declinedLinks = links.filter(l => l.status === 'declined')

  if (linksLoading) {
    return (
      <div className="r-fi" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 200 }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: 28, height: 28, border: '2px solid var(--bdr)', borderTopColor: 'var(--blue)', borderRadius: '50%', animation: 'r-spin .7s linear infinite', margin: '0 auto 12px' }} />
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Učitavanje…</div>
        </div>
      </div>
    )
  }

  return (
    <div className="r-fi">

      {/* ── Add child form ── */}
      <div className="r-card" style={{ padding: '20px 22px', marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: formOpen ? 18 : 0 }}>
          <div>
            <div style={{ fontSize: 14.5, fontWeight: 800, marginBottom: 2 }}>🩺 Medicinar Mode praćenje</div>
            <div style={{ fontSize: 12, color: 'var(--muted)' }}>
              {links.length === 0
                ? 'Dodajte dijete koje se priprema za MEF/PMF prijemni.'
                : `${links.length} ${links.length === 1 ? 'dijete' : 'djece'} u praćenju.`}
            </div>
          </div>
          <button
            onClick={() => { setFormOpen(v => !v); setFormError(null) }}
            className="r-btn r-bp r-btn-sm"
            style={{ fontSize: 12.5 }}
          >
            {formOpen ? 'Zatvori' : '+ Dodaj dijete'}
          </button>
        </div>

        {formOpen && (
          <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <label style={{ display: 'block', fontSize: 11.5, fontWeight: 600, color: 'var(--muted)', marginBottom: 5 }}>Email djeteta *</label>
              <input
                type="email" required
                placeholder="npr. ana@gmail.com"
                value={formEmail} onChange={e => setFormEmail(e.target.value)}
                className="r-inp"
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: 11.5, fontWeight: 600, color: 'var(--muted)', marginBottom: 5 }}>Ime (neobavezno)</label>
              <input
                type="text"
                placeholder="npr. Ana"
                value={formName} onChange={e => setFormName(e.target.value)}
                className="r-inp"
              />
            </div>
            {formError && (
              <div style={{ padding: '9px 12px', borderRadius: 9, background: 'rgba(239,68,68,.1)', border: '1px solid rgba(239,68,68,.25)', fontSize: 12, color: '#ef4444' }}>
                {formError}
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button type="submit" className="r-btn r-bp" disabled={formSubmitting} style={{ fontSize: 13 }}>
                {formSubmitting ? 'Šalje se…' : 'Pošalji zahtjev'}
              </button>
              <span style={{ fontSize: 11, color: 'var(--muted)' }}>Dijete mora prihvatiti praćenje.</span>
            </div>
          </form>
        )}
      </div>

      {/* ── Linked children — Medicinar widgets ── */}
      {linkedLinks.length > 0 && (
        <section style={{ marginBottom: 28 }}>
          <div className="r-sh" style={{ marginBottom: 14 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              ✓ Povezana djeca ({linkedLinks.length})
            </span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: 18 }}>
            {linkedLinks.map(link => {
              const childId = link.child_id
              const dash = dashboards[childId]
              const loading = dashLoading[childId]

              if (loading || !dash) {
                return (
                  <div key={link.id} className="r-card" style={{ padding: '36px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 160 }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ width: 24, height: 24, border: '2px solid var(--bdr)', borderTopColor: 'var(--blue)', borderRadius: '50%', animation: 'r-spin .7s linear infinite', margin: '0 auto 10px' }} />
                      <div style={{ fontSize: 12, color: 'var(--muted)' }}>{link.child_name || link.child_email}</div>
                    </div>
                  </div>
                )
              }

              return (
                <MedicinarReadWidget
                  key={link.id}
                  data={dash}
                  linkId={link.id}
                  onRemove={handleRemove}
                />
              )
            })}
          </div>
        </section>
      )}

      {/* ── Pending / declined ── */}
      {(pendingLinks.length > 0 || declinedLinks.length > 0) && (
        <section style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.09em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 12 }}>
            Na čekanju / odbijeni
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {[...pendingLinks, ...declinedLinks].map(link => (
              <div key={link.id} className="r-card" style={{
                padding: '13px 18px', display: 'flex', alignItems: 'center', gap: 12,
                borderColor: link.status === 'declined' ? 'rgba(239,68,68,.2)' : 'var(--bdr)',
              }}>
                <div style={{ fontSize: 18 }}>{link.status === 'pending' ? '⏳' : '✕'}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {link.child_name || link.child_email}
                  </div>
                  <div style={{ fontSize: 11, color: link.status === 'declined' ? '#ef4444' : 'var(--muted)', marginTop: 1 }}>
                    {link.status === 'pending' ? 'Čeka prihvaćanje…' : 'Odbio/la praćenje'}
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(link.id)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--muted)', fontFamily: 'var(--fb)', padding: '4px 6px' }}
                >×</button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Empty state ── */}
      {links.length === 0 && (
        <div className="r-card" style={{ textAlign: 'center', padding: '52px 24px' }}>
          <div style={{ fontSize: 40, marginBottom: 14 }}>🩺</div>
          <div style={{ fontFamily: 'var(--fh)', fontSize: 17, fontWeight: 800, marginBottom: 8 }}>Nema povezane djece</div>
          <div style={{ fontSize: 13, color: 'var(--muted)', maxWidth: 320, margin: '0 auto', lineHeight: 1.6 }}>
            Dodajte email adresu djeteta koje se priprema za medicinski/prirodoslovno-matematički prijemni.
          </div>
        </div>
      )}
    </div>
  )
}
