'use client'

import { createContext, useContext, useState, useMemo, useCallback } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { useParentData } from './useParentData'

const ParentContext = createContext(null)

export function useParentContext() {
  const ctx = useContext(ParentContext)
  if (!ctx) throw new Error('useParentContext must be used within ParentProvider')
  return ctx
}

function deriveFirstName(user) {
  const meta = user?.user_metadata || {}
  const full = meta.full_name || meta.name || ''
  if (full) return String(full).trim().split(/\s+/)[0]
  if (meta.first_name) return meta.first_name
  const email = user?.email || ''
  const local = email.split('@')[0] || 'Roditelj'
  return local.charAt(0).toUpperCase() + local.slice(1)
}

function initials(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean)
  if (!parts.length) return '👤'
  return (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase()
}

// Lagani stub za PENDING dijete (još nije prihvatilo vezu → nema dashboarda).
// Sadrži i Group B polja (za ChildSwitcher/postavke) i sigurne Group A default-e.
function pendingStub(link) {
  const nm = link.child_name || link.child_email || 'Dijete'
  return {
    childId: link.child_id || link.id,
    id: link.child_id || link.id,
    name: nm,
    firstName: nm.split(/\s+/)[0],
    email: link.child_email || null,
    status: link.status || 'pending',
    planType: null,
    plan: 'free',
    lastActiveAt: null,
    weekMinutes: 0,
    prevWeekMinutes: 0,
    daysInactive: null,
    razred: null,
    skola: null,
    avatar: initials(nm),
    color: '#64748b',
    colorBg: 'rgba(100,116,139,.14)',
    ukupno: 0,
    tjedni: 0,
    zadaci: 0,
    satiUkupno: 0,
    cilj: null,
    aktivnost: [],
    predmeti: [],
    obavijesti: [],
    preporuke: [],
    upcoming: [],
    sections: [],
  }
}

export function ParentProvider({ children }) {
  const { user } = useAuth()
  const { links, children: fetched, loading, error, refetch } = useParentData()

  const [selectedChildId, setSelectedChildId] = useState(null)
  const [readIds, setReadIds] = useState(() => new Set())

  // Aktivno dijete se izvodi TIJEKOM rendera (bez efekta/setState-a): eksplicitni odabir
  // ako je i dalje valjan, inače prvo dijete. Nula djece → null (bez pada).
  const activeChildId = useMemo(() => {
    if (selectedChildId && fetched.some(c => c.childId === selectedChildId)) return selectedChildId
    return fetched[0]?.childId ?? null
  }, [selectedChildId, fetched])
  const setActiveChildId = setSelectedChildId

  const markRead = useCallback((childId, alertId) => {
    setReadIds(prev => {
      const next = new Set(prev)
      next.add(`${childId}:${alertId}`)
      return next
    })
  }, [])

  // Rich djeca s primijenjenim "pročitano" statusom obavijesti (client-side overlay,
  // jer su obavijesti računate, ne perzistirane).
  const djeca = useMemo(() => fetched.map(c => ({
    ...c,
    obavijesti: (c.obavijesti || []).map(o =>
      readIds.has(`${c.childId}:${o.id}`) ? { ...o, read: true } : o,
    ),
  })), [fetched, readIds])

  // Sve veze (uklj. pending) — za postavke i child switcher. Linked djeca dobiju
  // puni rich objekt, pending dobiju stub.
  const linkedChildren = useMemo(() => links.map(l => {
    const rich = djeca.find(c => c.childId === l.child_id)
    return rich || pendingStub(l)
  }), [links, djeca])

  const activeChild = useMemo(
    () => djeca.find(c => c.childId === activeChildId) ?? djeca[0] ?? null,
    [djeca, activeChildId],
  )

  const parent = useMemo(() => ({
    id: user?.id || null,
    firstName: deriveFirstName(user),
    name: user?.user_metadata?.full_name || deriveFirstName(user),
    email: user?.email || null,
  }), [user])

  const value = useMemo(() => ({
    parent,
    djeca,
    activeChild,
    activeChildId,
    setActiveChildId,
    markRead,
    linkedChildren,
    refetch,
    loading,
    error,
    parentReady: !loading,
  }), [parent, djeca, activeChild, activeChildId, setActiveChildId, markRead, linkedChildren, refetch, loading, error])

  return (
    <ParentContext.Provider value={value}>
      {children}
    </ParentContext.Provider>
  )
}
