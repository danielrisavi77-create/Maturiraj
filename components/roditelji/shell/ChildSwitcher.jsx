'use client'

import { useParentContext } from '@/lib/roditelji/parentContext'

export default function ChildSwitcher() {
  const { linkedChildren, activeChildId, setActiveChildId } = useParentContext()

  if (linkedChildren.length <= 1) return null // samo jedan — ne prikazujemo

  return (
    <div style={styles.wrap}>
      {linkedChildren.map(child => {
        const active = child.childId === activeChildId
        const dot = child.status === 'active' ? '#3ecf6e'
                  : child.status === 'idle'   ? '#e9b446'
                  : '#f87171'
        return (
          <button
            key={child.childId}
            onClick={() => setActiveChildId(child.childId)}
            style={{ ...styles.pill, ...(active ? styles.pillActive : {}) }}
          >
            <span style={{ ...styles.dot, background: dot }} />
            {child.name}
          </button>
        )
      })}
    </div>
  )
}

const styles = {
  wrap: {
    display:  'flex',
    gap:       6,
    flexWrap: 'wrap',
  },
  pill: {
    display:        'inline-flex',
    alignItems:     'center',
    gap:            6,
    padding:        '5px 12px',
    borderRadius:   99,
    fontSize:       13,
    fontWeight:     600,
    cursor:         'pointer',
    border:         '1px solid var(--bdr)',
    background:     'transparent',
    color:          'var(--muted)',
    transition:     'all 0.15s',
  },
  pillActive: {
    background: 'rgba(75,123,255,0.1)',
    border:     '1px solid rgba(75,123,255,0.3)',
    color:      'var(--blue)',
  },
  dot: {
    width:        7,
    height:       7,
    borderRadius: '50%',
    flexShrink:   0,
  },
}
