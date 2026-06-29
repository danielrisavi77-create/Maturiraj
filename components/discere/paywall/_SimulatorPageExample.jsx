'use client'
// components/discere/paywall/_SimulatorPageExample.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Reference integration: how to wire the paywall into any Discere simulator page.
// Copy-paste the relevant sections into your actual page.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from 'react'
import { useAuth } from '@/lib/hooks/useAuth'
import { buildUserAccess, SimulatorPreviewGate } from '@/components/discere/paywall'

// Hypothetical data — your simulator feeds this from its own logic
const DUMMY_QUESTIONS = [
  { id: 1, text: 'Pitanje 1', options: ['A', 'B', 'C', 'D'], correct: 'A' },
  { id: 2, text: 'Pitanje 2', options: ['A', 'B', 'C', 'D'], correct: 'B' },
  // … 28 more
]

export default function SimulatorPageExample() {
  const { user, isPro, isPaid } = useAuth()

  // Build the UserAccess object once from auth state
  const userAccess = buildUserAccess({ user, isPro, isPaid })

  const [currentQ, setCurrentQ] = useState(0)
  const [answers,  setAnswers]  = useState({})

  const question = DUMMY_QUESTIONS[currentQ]

  function handleAnswer(option) {
    setAnswers(prev => ({ ...prev, [currentQ]: option }))
    // Auto-advance after short delay
    if (currentQ < DUMMY_QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ(q => q + 1), 400)
    }
  }

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: '32px 20px' }}>

      {/* ── Progress bar ───────────────────────────────────────────────── */}
      <div style={{
        height:       4,
        borderRadius: 2,
        background:   'rgba(255,255,255,.07)',
        marginBottom: 24,
      }}>
        <div style={{
          height:     '100%',
          borderRadius: 2,
          background: 'linear-gradient(90deg, #4b7bff, #7c5cfc)',
          width:      `${((currentQ + 1) / DUMMY_QUESTIONS.length) * 100}%`,
          transition: 'width .3s ease',
        }} />
      </div>

      {/* ── Question counter ────────────────────────────────────────────── */}
      <div style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 16 }}>
        Pitanje {currentQ + 1} od {DUMMY_QUESTIONS.length}
      </div>

      {/* ── SimulatorPreviewGate wraps the question + answer area ───────── */}
      {/*                                                                    */}
      {/* The gate renders a BlurLockOverlay and PaywallModal automatically  */}
      {/* when currentQ >= FREE_LIMIT and subscriptionTier === 'free'.       */}
      {/* Children receive { isLocked, openPaywall } via render prop.        */}
      <SimulatorPreviewGate
        userAccess={userAccess}
        currentQuestionIndex={currentQ}
        totalQuestions={DUMMY_QUESTIONS.length}
        from="simulator-mat"
        style={{ borderRadius: 20 }}
      >
        {({ isLocked, openPaywall }) => (
          <div style={{
            padding:      '28px 24px',
            borderRadius: 20,
            background:   'linear-gradient(155deg, rgba(14,18,32,.92), rgba(20,24,40,.82))',
            border:       '1px solid rgba(255,255,255,.08)',
          }}>
            {/* Question text */}
            <p style={{
              fontFamily:   'var(--fh)',
              fontSize:     18,
              fontWeight:   700,
              color:        'var(--text)',
              lineHeight:   1.45,
              marginBottom: 24,
            }}>
              {question.text}
            </p>

            {/* Answer buttons — disabled when locked */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {question.options.map((opt) => {
                const isAnswered = answers[currentQ] === opt

                return (
                  <button
                    key={opt}
                    disabled={isLocked}
                    onClick={isLocked ? openPaywall : () => handleAnswer(opt)}
                    style={{
                      padding:      '12px 18px',
                      borderRadius: 12,
                      border:       isAnswered
                        ? '1px solid rgba(75,123,255,.5)'
                        : '1px solid rgba(255,255,255,.09)',
                      background:   isAnswered
                        ? 'rgba(75,123,255,.15)'
                        : 'rgba(255,255,255,.04)',
                      color:        isLocked ? 'rgba(228,237,255,.35)' : 'var(--text)',
                      cursor:       isLocked ? 'not-allowed' : 'pointer',
                      fontFamily:   'var(--fb)',
                      fontSize:     14,
                      fontWeight:   500,
                      textAlign:    'left',
                      transition:   'all .16s ease',
                    }}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </SimulatorPreviewGate>

    </div>
  )
}
