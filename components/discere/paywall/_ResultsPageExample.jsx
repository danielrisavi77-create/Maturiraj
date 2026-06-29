'use client'
// components/discere/paywall/_ResultsPageExample.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Reference integration: results page layout with score + locked analysis.
// Copy-paste into your actual results page.
// ─────────────────────────────────────────────────────────────────────────────

import { useAuth } from '@/lib/hooks/useAuth'
import { buildUserAccess, ResultsSummary, LockedAnalysisSection } from '@/components/discere/paywall'

export default function ResultsPageExample() {
  const { user, isPro, isPaid } = useAuth()
  const userAccess = buildUserAccess({ user, isPro, isPaid })

  // These come from your simulator state / database
  const simulatorState = {
    score:         18,
    totalQuestions: 30,
    correctCount:  18,
    incorrectCount: 12,
    hasFinished:   true,
  }

  // For Pro users — null while loading, populated when AI finishes
  const analysisData = null  // replace with real data when ready

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '32px 20px' }}>

      {/* ── Always-visible score card ───────────────────────────────────── */}
      <ResultsSummary
        simulatorState={simulatorState}
        subjectLabel="Matematika — Simulator 2025"
        userAccess={userAccess}
      />

      {/* ── AI analysis section (locked or unlocked based on tier) ──────── */}
      {/*                                                                    */}
      {/* Free / Standard: shows 4 LockedFeatureCards + upgrade CTA.        */}
      {/* Pro + analysisData: renders children (your actual analysis UI).    */}
      {/* Pro + no analysisData: renders loading skeleton.                   */}
      <LockedAnalysisSection
        userAccess={userAccess}
        from="results-mat"
        isLoading={userAccess.subscriptionTier === 'pro' && !analysisData}
      >
        {/* ↓ Only rendered for Pro users once analysisData is available */}
        {analysisData && (
          <div style={{
            padding:      '28px 24px',
            borderRadius: 20,
            background:   'linear-gradient(155deg, rgba(14,18,32,.92), rgba(20,24,40,.82))',
            border:       '1px solid rgba(255,255,255,.08)',
          }}>
            {/* Plug in your real AI analysis components here */}
            <pre style={{ color: 'var(--muted)', fontSize: 12 }}>
              {JSON.stringify(analysisData, null, 2)}
            </pre>
          </div>
        )}
      </LockedAnalysisSection>

    </div>
  )
}
