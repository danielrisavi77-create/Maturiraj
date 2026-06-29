'use client'
import { useCopy } from '@/lib/content/useCopy'
import { StoriesSectionSkeleton } from '@/components/prijemni/skeletons/ComponentSkeletons'

export default function StoriesSection({ studij, stories = [], onWrite }) {
  const { c } = useCopy()

  if (stories === null) return <StoriesSectionSkeleton/>

  if (stories.length === 0) {
    return (
      <div style={{
        padding: '32px 24px',
        borderRadius: 16,
        background: 'linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.01))',
        border: '1px solid var(--bdr)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 40, marginBottom: 14, opacity: .6 }}>✍</div>
        <h2 style={{
          fontFamily: 'var(--fh)', fontSize: 18, fontWeight: 700,
          marginBottom: 10, letterSpacing: '-.015em', color: 'var(--text)',
        }}>
          {c('stories.empty_title', { FAK: studij.fak_short })}
        </h2>
        <p style={{
          fontSize: 13, color: 'var(--muted)', lineHeight: 1.65,
          maxWidth: 480, margin: '0 auto 20px',
        }}>
          {c('stories.empty_sub', { STUDIJ: studij.naziv, FAK: studij.fak_short })}
        </p>
        <button
          onClick={onWrite}
          style={{
            padding: '11px 22px', borderRadius: 11, fontSize: 13.5, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'var(--fb)',
            background: 'linear-gradient(135deg,var(--blue),var(--violet))',
            color: '#fff', border: 'none',
            boxShadow: '0 4px 18px rgba(75,123,255,.3)',
          }}>
          {c('stories.write_cta', { FAK: studij.fak_short })}
        </button>
        <div style={{
          marginTop: 20, fontSize: 11.5, color: 'var(--muted)', opacity: .7,
          lineHeight: 1.6,
        }}>
          {c('stories.disclaimer')}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 16, flexWrap: 'wrap', gap: 10,
      }}>
        <h2 style={{
          fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 700,
          margin: 0, color: 'var(--text)',
        }}>
          {c('stories.write_cta_header')}
        </h2>
        <button
          onClick={onWrite}
          style={{
            padding: '8px 16px', borderRadius: 10, fontSize: 12.5, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'var(--fb)',
            background: 'rgba(75,123,255,.12)', color: 'var(--blue)',
            border: '1px solid rgba(75,123,255,.25)',
          }}>
          {c('stories.write_cta', { FAK: studij.fak_short })}
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {stories.map((s, i) => (
          <StoryCard key={s.id ?? i} story={s} />
        ))}
      </div>
      <div style={{
        marginTop: 16, fontSize: 11, color: 'var(--muted)', opacity: .65,
        lineHeight: 1.6,
      }}>
        {c('stories.disclaimer')}
      </div>
    </div>
  )
}

function StoryCard({ story }) {
  return (
    <div style={{
      padding: '16px 18px', borderRadius: 14,
      background: 'var(--s1)', border: '1px solid var(--bdr)',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 10, flexWrap: 'wrap',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: 'linear-gradient(135deg,var(--blue),var(--violet))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, fontWeight: 700, color: '#fff', flexShrink: 0,
        }}>
          {story.initials ?? '?'}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)' }}>
            {story.author ?? 'Anonimno'}
            {story.verified && (
              <span style={{
                marginLeft: 6, fontSize: 10, fontWeight: 700,
                color: '#3ecf6e', background: 'rgba(62,207,110,.12)',
                border: '1px solid rgba(62,207,110,.25)',
                padding: '2px 7px', borderRadius: 99,
              }}>✓ verificirano</span>
            )}
          </div>
          {story.year && (
            <div style={{ fontSize: 11, color: 'var(--muted)' }}>upisao/la {story.year}.</div>
          )}
        </div>
      </div>
      <p style={{
        fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, margin: 0,
      }}>
        {story.text}
      </p>
    </div>
  )
}
