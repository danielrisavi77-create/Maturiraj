import { NextResponse } from 'next/server'
import { requirePro } from '@/lib/billing/requirePro'

// POST /api/discere/ask-ai
// ─────────────────────────────────────────────────────────────────────────────
// "Pitaj AI o svakom zadatku" — Pro-only per-question AI chat.
//
// Request body:
//   { question: string, taskContext: string, subject: string, sessionId?: string }
//
// Response (Pro):
//   { answer: string }
//
// Response (denied):
//   403 { error, code, requiredTier, currentTier }

export async function POST(req) {
  const deny = await requirePro(req, { subject: 'unknown', source: 'ask-ai' })
  if (deny) return deny

  const { question, taskContext, subject } = await req.json().catch(() => ({}))

  if (!question?.trim()) {
    return NextResponse.json({ error: 'question je obavezan.' }, { status: 400 })
  }

  // ── Implement your actual AI call here ───────────────────────────────────────
  // const answer = await callAIProfessor({ question, taskContext, subject })

  return NextResponse.json({
    answer: 'AI odgovor nije još implementiran u ovoj verziji.',
  })
}
