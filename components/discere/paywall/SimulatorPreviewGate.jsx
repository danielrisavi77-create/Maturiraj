'use client'
// components/discere/paywall/SimulatorPreviewGate.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Controls access to simulator questions past the free limit.
// Uses render-prop API so the parent can disable answer buttons without lifting state.
//
// Flow (freePractice; s freeExam ništa nije zaključano za prijavljene):
//  1. Questions 0–2 → full access (isLocked = false)
//  2. On question 3+ (free tier) → PaywallModal auto-opens
//  3. User dismisses modal → BlurLockOverlay covers question area
//  4. Overlay CTA re-opens the modal
//  5. Buttons passed isLocked=true → parent disables them
//
// Usage:
//   <SimulatorPreviewGate
//     userAccess={userAccess}
//     currentQuestionIndex={currentQ}
//     totalQuestions={30}
//     from="simulator-mat"
//     style={{ borderRadius: 20 }}
//   >
//     {({ isLocked, openPaywall }) => (
//       <>
//         <QuestionText />
//         <AnswerButtons disabled={isLocked} onLockedClick={openPaywall} />
//       </>
//     )}
//   </SimulatorPreviewGate>
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import PaywallModal from './PaywallModal'
import BlurLockOverlay from './BlurLockOverlay'
import { checkSimulatorAccess, FREE_LIMIT } from './paywallHelpers'
import { SIMULATOR_COPY, NOT_LOGGED_IN_COPY } from './paywallCopy'

export default function SimulatorPreviewGate({
  userAccess,
  currentQuestionIndex,
  totalQuestions,
  from         = 'simulator',
  children,
  style        = {},
  previewScore = null,
  freeExam     = false,
  freePractice = false,
}) {
  const router   = useRouter()
  const access   = checkSimulatorAccess(userAccess, currentQuestionIndex, { freeExam, freePractice })
  const isLocked = !access.canProceed
  const isNotLoggedIn = access.reason === 'not-logged-in'

  const [modalOpen,         setModalOpen]         = useState(false)
  const [modalWasDismissed, setModalWasDismissed] = useState(false)

  // Auto-open once on first lock hit
  useEffect(() => {
    if (isLocked && !modalWasDismissed) {
      setModalOpen(true)
    }
  }, [isLocked, modalWasDismissed])

  const openPaywall  = useCallback(() => setModalOpen(true), [])
  const closePaywall = useCallback(() => {
    setModalOpen(false)
    setModalWasDismissed(true)
  }, [])

  const handleNotLoggedIn = useCallback(() => {
    router.push(`/prijava?from=${encodeURIComponent(from)}`)
  }, [router, from])

  const overlayMessage = isNotLoggedIn
    ? 'Prijavi se da nastaviš'
    : 'Nastavi simulator'

  const overlayCtaLabel = isNotLoggedIn
    ? 'Prijavi se'
    : 'Otključaj simulator'

  const overlayClick = isNotLoggedIn ? handleNotLoggedIn : openPaywall

  const modalCopy = isNotLoggedIn ? NOT_LOGGED_IN_COPY : SIMULATOR_COPY

  return (
    <>
      {/* Positioned wrapper — BlurLockOverlay is absolute inside this */}
      <div style={{ position: 'relative', ...style }}>

        {/* Render children via render prop or plain */}
        {typeof children === 'function'
          ? children({ isLocked, openPaywall })
          : children
        }

        {/* Overlay: shown when locked AND modal is not blocking */}
        {isLocked && !modalOpen && (
          <BlurLockOverlay
            visible
            lockMessage={overlayMessage}
            ctaLabel={overlayCtaLabel}
            onCTAClick={overlayClick}
          />
        )}
      </div>

      {/* Modal: sits outside the positioned wrapper, no layout influence */}
      <PaywallModal
        open={modalOpen && !isNotLoggedIn}
        onClose={closePaywall}
        copy={modalCopy}
        from={from}
        questionsCompleted={Math.min(currentQuestionIndex, FREE_LIMIT)}
        previewScore={previewScore}
        tier="standard"
      />

      {/* Not-logged-in redirects directly — no modal needed */}
    </>
  )
}
