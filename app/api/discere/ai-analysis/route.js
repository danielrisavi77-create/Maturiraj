import { NextResponse } from 'next/server'
import { requirePro } from '@/lib/billing/requirePro'

// POST /api/discere/ai-analysis
// ─────────────────────────────────────────────────────────────────────────────
// Returns AI-generated error analysis for a completed simulator session.
// Strictly Pro-only — any attempt by free/standard users is rejected at the
// backend level regardless of frontend UI state.
//
// Request body:
//   { sessionId: string, subject: string, simulatorId?: string }
//
// Response (Pro):
//   { analysis: { summary, weakAreas, errorBreakdown, plan } }
//
// Response (denied):
//   403 { error, code, requiredTier, currentTier }

export async function POST(req) {
  // ── Gate: Pro only ──────────────────────────────────────────────────────────
  const deny = await requirePro(req, { subject: 'unknown', source: 'ai-analysis' })
  if (deny) return deny

  // ── Parse body ───────────────────────────────────────────────────────────────
  const { sessionId, subject, simulatorId } = await req.json().catch(() => ({}))

  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId je obavezan.' }, { status: 400 })
  }

  // ── Implement your actual AI call here ───────────────────────────────────────
  // Example: call OpenAI / Gemini with session data from DB
  // const session = await fetchSimulatorSession(sessionId)
  // const analysis = await generateAIAnalysis(session)

  // ── Placeholder response structure —— replace with real AI call ──────────────
  return NextResponse.json({
    analysis: {
      summary:        'AI analiza nije još implementirana u ovoj verziji.',
      weakAreas:      [],
      errorBreakdown: [],
      plan:           null,
    },
  })
}
