'use client'
import { useLayoutEffect, useRef } from 'react'
import styles from './AssessmentDialog.module.css'

export default function AssessmentDialog({ label, onCancel, children }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    const dialog = ref.current, trigger = document.activeElement
    dialog.showModal()
    dialog.querySelector('[data-dialog-cancel]')?.focus()
    return () => {
      dialog.close()
      if (trigger?.isConnected && !trigger.disabled) trigger.focus()
    }
  }, [])
  return <dialog ref={ref} className={styles.dialog} aria-label={label} aria-modal="true" onKeyDown={event => {
    if (event.key !== 'Tab') return
    const controls = [...event.currentTarget.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]')]
      .filter(node => !node.hidden && node.getClientRects().length > 0)
    const target = event.shiftKey ? controls.at(-1) : controls[0]
    const boundary = event.shiftKey ? controls[0] : controls.at(-1)
    if (target && (document.activeElement === boundary || !controls.includes(document.activeElement))) {
      event.preventDefault()
      target.focus()
    }
  }} onCancel={event => {
    event.preventDefault()
    onCancel()
  }}>{children}</dialog>
}
