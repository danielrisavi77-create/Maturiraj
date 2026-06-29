'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const MOODS = [
  { val: 1, emoji: '😵', label: 'Teško' },
  { val: 2, emoji: '😕', label: 'Slabo' },
  { val: 3, emoji: '😐', label: 'Ok' },
  { val: 4, emoji: '😊', label: 'Dobro' },
  { val: 5, emoji: '🔥', label: 'Odlično' },
]

const HOUR_PRESETS = [0.5, 1, 1.5, 2, 3, 4, 6]

export default function DailyLogWidget({ userId, planId, subjects = [], onLogged }) {
  const supabase = createClient()

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]?.id || null)
  const [hours,           setHours]           = useState(1)
  const [mood,            setMood]            = useState(3)
  const [notes,           setNotes]           = useState('')
  const [showNotes,       setShowNotes]       = useState(false)
  const [saving,          setSaving]          = useState(false)
  const [saved,           setSaved]           = useState(false)
  const [error,           setError]           = useState(null)

  const selectedSubjectData = subjects.find(s => s.id === selectedSubject)

  const handleSubmit = async () => {
    if (!selectedSubject || !userId || !planId) return
    setSaving(true)
    setError(null)

    const today = new Date().toISOString().split('T')[0]

    const { error: e } = await supabase
      .from('progress_log')
      .insert({
        user_id:     userId,
        plan_id:     planId,
        subject_id:  selectedSubject,
        logged_date: today,
        hours_spent: hours,
        mood,
        notes: notes.trim() || null,
      })

    if (e) {
      setError('Greška pri upisivanju. Pokušaj ponovno.')
      setSaving(false)
      return
    }

    setSaved(true)
    setSaving(false)
    if (onLogged) onLogged({ subjectId: selectedSubject, hours, mood })

    // Reset nakon 2.5s
    setTimeout(() => {
      setSaved(false)
      setHours(1)
      setMood(3)
      setNotes('')
      setShowNotes(false)
    }, 2500)
  }

  const accentColor = selectedSubjectData?.color || 'var(--blue)'

  return (
    <div style={{
      background: 'linear-gradient(160deg, rgba(255,255,255,.038), rgba(255,255,255,.012))',
      border: `1px solid ${saved ? 'rgba(62,207,110,.3)' : 'rgba(255,255,255,.08)'}`,
      borderRadius: 24,
      padding: '22px',
      boxShadow: '0 16px 48px rgba(0,0,0,.22)',
      backdropFilter: 'blur(20px)',
      transition: 'border-color .4s ease',
    }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 3 }}>
            Dnevni unos
          </div>
          <div style={{ fontFamily: 'var(--fh)', fontSize: 18, fontWeight: 900, lineHeight: 1 }}>
            {saved ? '✓ Zapisano!' : 'Što si učio danas?'}
          </div>
        </div>

        {/* Today's date */}
        <div style={{
          padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 700,
          background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)',
          color: 'var(--muted)',
        }}>
          {new Date().toLocaleDateString('hr-HR', { day: 'numeric', month: 'short' })}
        </div>
      </div>

      {/* Success state */}
      {saved ? (
        <div style={{
          textAlign: 'center', padding: '24px 0',
          animation: 'up .4s cubic-bezier(.16,1,.3,1)',
        }}>
          <div style={{ fontSize: 48, marginBottom: 10 }}>🎯</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: 'var(--green)', marginBottom: 4 }}>
            {hours}h {selectedSubjectData?.name} upisano
          </div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>
            {MOODS.find(m => m.val === mood)?.emoji} {MOODS.find(m => m.val === mood)?.label}
          </div>
        </div>
      ) : (
        <>
          {/* Subject selector */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.08em' }}>
              Predmet
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {subjects.map(s => {
                const sel = selectedSubject === s.id
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSubject(s.id)}
                    style={{
                      padding: '7px 12px', borderRadius: 999,
                      fontFamily: 'var(--fb)', fontSize: 12, fontWeight: 700,
                      cursor: 'pointer', transition: 'all .15s',
                      border: sel ? `1px solid ${s.color}55` : '1px solid rgba(255,255,255,.08)',
                      background: sel ? `${s.color}1a` : 'rgba(255,255,255,.03)',
                      color: sel ? s.color : 'var(--muted)',
                      boxShadow: sel ? `0 4px 14px ${s.color}20` : 'none',
                      transform: sel ? 'translateY(-1px)' : 'none',
                    }}
                  >
                    {s.sym} {s.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Hours picker */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em' }}>
                Sati učenja
              </div>
              <div style={{
                fontFamily: 'var(--fh)', fontSize: 22, fontWeight: 900,
                color: accentColor, lineHeight: 1,
              }}>
                {hours}h
              </div>
            </div>

            {/* Preset buttons */}
            <div style={{ display: 'flex', gap: 5, marginBottom: 10, flexWrap: 'wrap' }}>
              {HOUR_PRESETS.map(h => (
                <button
                  key={h}
                  onClick={() => setHours(h)}
                  style={{
                    flex: '1 1 36px', minWidth: 36, padding: '7px 4px',
                    borderRadius: 10, fontFamily: 'var(--fb)',
                    fontSize: 12, fontWeight: 800, cursor: 'pointer',
                    transition: 'all .15s',
                    border: hours === h ? `1px solid ${accentColor}50` : '1px solid rgba(255,255,255,.07)',
                    background: hours === h ? `${accentColor}18` : 'rgba(255,255,255,.03)',
                    color: hours === h ? accentColor : 'var(--muted)',
                  }}
                >
                  {h}h
                </button>
              ))}
            </div>

            {/* Fine-tune slider */}
            <div style={{ position: 'relative' }}>
              <input
                type="range"
                min={0.5}
                max={8}
                step={0.5}
                value={hours}
                onChange={e => setHours(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor,
                  cursor: 'pointer',
                  height: 4,
                }}
              />
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontSize: 9, color: 'var(--muted)', fontWeight: 700,
                marginTop: 3, textTransform: 'uppercase', letterSpacing: '.06em',
              }}>
                <span>30 min</span>
                <span>8h</span>
              </div>
            </div>
          </div>

          {/* Mood tracker */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.08em' }}>
              Kako je prošlo?
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {MOODS.map(m => (
                <button
                  key={m.val}
                  onClick={() => setMood(m.val)}
                  title={m.label}
                  style={{
                    flex: 1, padding: '8px 4px', borderRadius: 12,
                    fontFamily: 'var(--fb)', cursor: 'pointer',
                    transition: 'all .18s cubic-bezier(.16,1,.3,1)',
                    border: mood === m.val ? '1px solid rgba(255,255,255,.2)' : '1px solid rgba(255,255,255,.06)',
                    background: mood === m.val ? 'rgba(255,255,255,.1)' : 'rgba(255,255,255,.03)',
                    transform: mood === m.val ? 'scale(1.12) translateY(-2px)' : 'scale(1)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: 20, lineHeight: 1, marginBottom: 2 }}>{m.emoji}</div>
                  <div style={{
                    fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.04em',
                    color: mood === m.val ? 'var(--text)' : 'var(--muted)',
                  }}>{m.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Notes toggle */}
          <div style={{ marginBottom: 16 }}>
            <button
              onClick={() => setShowNotes(v => !v)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: 'var(--fb)', fontSize: 12, fontWeight: 700,
                color: 'var(--muted)', padding: 0, display: 'flex', alignItems: 'center', gap: 5,
                transition: 'color .15s',
              }}
            >
              <span style={{
                display: 'inline-block', transition: 'transform .2s',
                transform: showNotes ? 'rotate(90deg)' : 'none',
              }}>▶</span>
              {showNotes ? 'Sakrij komentar' : 'Dodaj komentar (opcionalno)'}
            </button>
            {showNotes && (
              <textarea
                value={notes}
                onChange={e => setNotes(e.target.value)}
                placeholder="Što si danas naučio? Što je bilo teško?"
                rows={2}
                style={{
                  width: '100%', marginTop: 8, padding: '10px 12px',
                  borderRadius: 12, border: '1px solid rgba(255,255,255,.09)',
                  background: 'rgba(255,255,255,.04)',
                  color: 'var(--text)', fontSize: 13, fontFamily: 'var(--fb)',
                  resize: 'vertical', outline: 'none', lineHeight: 1.5,
                  boxSizing: 'border-box', transition: 'border-color .15s',
                }}
                onFocus={e => e.target.style.borderColor = `${accentColor}50`}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,.09)'}
              />
            )}
          </div>

          {/* Error */}
          {error && (
            <div style={{
              marginBottom: 12, padding: '9px 12px', borderRadius: 10,
              background: 'rgba(248,113,113,.08)', border: '1px solid rgba(248,113,113,.18)',
              fontSize: 12, color: '#f87171',
            }}>{error}</div>
          )}

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!selectedSubject || saving}
            style={{
              width: '100%', padding: '13px', borderRadius: 14, border: 'none',
              background: !selectedSubject
                ? 'rgba(255,255,255,.05)'
                : saving
                ? `${accentColor}60`
                : `linear-gradient(135deg, ${accentColor}, ${accentColor}bb)`,
              color: !selectedSubject ? 'rgba(255,255,255,.2)' : '#fff',
              fontSize: 14, fontWeight: 800, cursor: !selectedSubject || saving ? 'not-allowed' : 'pointer',
              fontFamily: 'var(--fb)',
              boxShadow: selectedSubject && !saving ? `0 6px 20px ${accentColor}35` : 'none',
              transition: 'all .2s cubic-bezier(.16,1,.3,1)',
            }}
          >
            {saving ? 'Upisujem...' : `Upiši ${hours}h${selectedSubjectData ? ` · ${selectedSubjectData.name}` : ''}`}
          </button>
        </>
      )}
    </div>
  )
}