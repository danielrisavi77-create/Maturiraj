'use client'
// ── MatChapterViewer ─────────────────────────────────────────────────────────
// Renders a single mat-a chapter in an iframe (srcdoc) and handles:
//   - postMessage navigation (navigateChapter / backToList)
//   - progress tracking (localStorage + cloud via useMatProgress)
//
// Props:
//   chapterId   → e.g. 'p01'
//   htmlContent → the chapter HTML string (from MAT_VISA_RAZINA.chapters)
//   onNavigate(id)  → called when chapter requests navigation
//   onBack()        → called when chapter requests back to list
//   onProgress(pct) → optional callback for parent to receive progress updates
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useMatProgress } from '@/hooks/useMatProgress'

export default function MatChapterViewer({ chapterId, htmlContent, onNavigate, onBack, onProgress }) {
  const iframeRef = useRef(null)
  const router = useRouter()
  const { progress, saveProgress } = useMatProgress(chapterId)

  // Send current progress into the iframe once it loads, so it can restore state
  const handleIframeLoad = useCallback(() => {
    try {
      iframeRef.current?.contentWindow?.postMessage(
        { type: 'maturiraj:restoreProgress', progress },
        '*'
      )
    } catch {}
  }, [progress])

  // postMessage bridge: iframe → parent
  useEffect(() => {
    const handler = async (e) => {
      if (!e.data?.type) return

      switch (e.data.type) {
        case 'maturiraj:navigateChapter': {
          const id = e.data.id
          if (id) onNavigate?.(id)
          break
        }
        case 'maturiraj:backToList': {
          onBack?.()
          break
        }
        case 'maturiraj:navigateUrl': {
          const url = e.data.url
          if (url) router.push(url)
          break
        }
        case 'maturiraj:saveProgress': {
          // Chapters can post { type: 'maturiraj:saveProgress', pct: 70 }
          const pct = typeof e.data.pct === 'number' ? e.data.pct : null
          if (pct !== null) {
            await saveProgress(pct)
            onProgress?.(pct)
          }
          break
        }
        default:
          break
      }
    }

    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [onNavigate, onBack, saveProgress, onProgress, router])

  if (!htmlContent) return null

  return (
    <iframe
      ref={iframeRef}
      srcDoc={htmlContent}
      onLoad={handleIframeLoad}
      style={{ width: '100%', flex: 1, minHeight: 0, border: 'none', display: 'block' }}
      sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
      title={`MAT-A · ${chapterId}`}
    />
  )
}
