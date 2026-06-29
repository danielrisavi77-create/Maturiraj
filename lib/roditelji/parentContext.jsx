'use client'

import { createContext, useContext, useState } from 'react'
import { PARENT, DJECA } from '@/lib/roditelji/mockData'

const ParentContext = createContext(null)

export function useParentContext() {
  const ctx = useContext(ParentContext)
  if (!ctx) throw new Error('useParentContext must be used within ParentProvider')
  return ctx
}

export function ParentProvider({ children }) {
  const [djeca, setDjeca]                 = useState(DJECA)
  const [activeChildId, setActiveChildId] = useState(DJECA[0].id)

  const activeChild = djeca.find(c => c.id === activeChildId) ?? djeca[0]

  // Mark a single notification as read
  function markRead(childId, alertId) {
    setDjeca(prev => prev.map(c =>
      c.id !== childId ? c : {
        ...c,
        obavijesti: c.obavijesti.map(o =>
          o.id !== alertId ? o : { ...o, read: true }
        ),
      }
    ))
  }

  return (
    <ParentContext.Provider value={{
      parent: PARENT,
      djeca,
      activeChild,
      activeChildId,
      setActiveChildId,
      markRead,
      parentReady: true,
      loading: false,
      // Legacy compat aliases for old pages (postavke, povezi, rokovi, dijete/[childId])
      linkedChildren: djeca,
      refetch: () => {},
    }}>
      {children}
    </ParentContext.Provider>
  )
}


