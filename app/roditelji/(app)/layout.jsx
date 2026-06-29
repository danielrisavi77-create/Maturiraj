'use client'

import '../roditelji.css'
import { ParentProvider } from '@/lib/roditelji/parentContext'
import ParentShell from '@/components/roditelji/shell/ParentShell'

export default function RoditeljiAppLayout({ children }) {
  return (
    <ParentProvider>
      <ParentShell>
        {children}
      </ParentShell>
    </ParentProvider>
  )
}
