import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import fs from 'fs/promises'
import path from 'path'

const COPY_FILE_PATH = path.join(process.cwd(), 'lib', 'content', 'copy.ts')

/**
 * Maps experiment ID to the top-level section key in COPY (lib/content/copy.ts).
 * Add new experiments here as they are created.
 */
const EXP_SECTION_MAP: Record<string, string> = {
  copy_paywall:    'paywall',
  copy_list:       'list',
  copy_matcher:    'list',   // matcher keys live inside the list section
  copy_kalkulator: 'kalkulator',
  copy_stories:    'stories',
  copy_medicinar:  'medicinar',
  copy_urgency:    'urgency',
  copy_compare:    'compare',
  copy_general:    'general',
  copy_detail:     'detail',
}

/**
 * For every AB entry in the given COPY section, promotes the winner variant
 * to field 'a' and removes field 'b'.
 *
 * Matches the exact 4-line format used in copy.ts:
 *   keyName: {
 *     a: 'text a',
 *     b: 'text b',
 *   },
 */
function promoteWinnerInSection(
  source: string,
  section: string,
  winner: 'a' | 'b',
): { updated: string; changedCount: number } {
  // Locate section header — looks for "\n  sectionName: {"
  const headerRe = new RegExp(`(\n  ${section}: \\{)`)
  const match = headerRe.exec(source)
  if (!match) return { updated: source, changedCount: 0 }

  // Find the end of the section via brace matching
  const blockStart = match.index + 1   // points at start of "  section: {"
  let depth = 0
  let blockEnd = -1
  for (let i = blockStart; i < source.length; i++) {
    if (source[i] === '{') depth++
    else if (source[i] === '}') {
      depth--
      if (depth === 0) { blockEnd = i + 1; break }
    }
  }
  if (blockEnd === -1) return { updated: source, changedCount: 0 }

  const sectionText = source.slice(blockStart, blockEnd)
  let changedCount = 0

  // Matches entries that have both a: and b: (i.e. are actively AB tested)
  // Both single-quoted and double-quoted string values are handled.
  const abEntryRe = /(\n    \w+: \{\n      a: )((?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")),(\n      b: )((?:'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")),(\n    \},)/g

  const updatedSection = sectionText.replace(
    abEntryRe,
    (_, aPrefix, aVal, _sep, bVal, suffix) => {
      changedCount++
      const winnerVal = winner === 'b' ? bVal : aVal
      // Rebuild with only 'a' field, set to winner text
      return `${aPrefix}${winnerVal},${suffix}`
    },
  )

  return {
    updated: source.slice(0, blockStart) + updatedSection + source.slice(blockEnd),
    changedCount,
  }
}

export async function POST(req: NextRequest) {
  try {
    // ── Auth: must be admin ─────────────────────────────────────────
    const cookieStore = await cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() { return cookieStore.getAll() },
          setAll(cs) { cs.forEach(({ name, value, options }) => cookieStore.set(name, value, options)) },
        },
      }
    )
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single()
    if (profile?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // ── Input validation ────────────────────────────────────────────
    const body = await req.json()
    const { experimentId, winner } = body as { experimentId: unknown; winner: unknown }

    if (
      typeof experimentId !== 'string' ||
      experimentId.length === 0 ||
      !/^[\w-]+$/.test(experimentId)
    ) {
      return NextResponse.json({ error: 'Invalid experimentId' }, { status: 400 })
    }

    // Winner must be a single lowercase letter variant ('a' or 'b' etc.)
    if (typeof winner !== 'string' || !/^[a-z]$/.test(winner)) {
      return NextResponse.json(
        { error: 'Invalid winner — must be a single lowercase letter, e.g. "a" or "b"' },
        { status: 400 },
      )
    }

    // ── Update Supabase ─────────────────────────────────────────────
    const { error: dbError } = await supabase
      .from('ab_experiments')
      .update({
        status: 'concluded',
        winner,
        concluded_at: new Date().toISOString(),
      })
      .eq('id', experimentId)

    if (dbError) {
      return NextResponse.json(
        { error: `DB update failed: ${dbError.message}` },
        { status: 500 },
      )
    }

    // ── Update copy.ts ──────────────────────────────────────────────
    const section = EXP_SECTION_MAP[experimentId]
    if (!section) {
      return NextResponse.json({
        success: true,
        changedCount: 0,
        note: `Experiment "${experimentId}" has no copy.ts section mapping — DB updated only.`,
      })
    }

    const source = await fs.readFile(COPY_FILE_PATH, 'utf-8')
    const { updated, changedCount } = promoteWinnerInSection(source, section, winner as 'a' | 'b')

    if (changedCount > 0) {
      await fs.writeFile(COPY_FILE_PATH, updated, 'utf-8')
    }

    const note = changedCount > 0
      ? `Promoted variant "${winner}" → "a" and removed "b" for ${changedCount} key(s) in COPY.${section}`
      : `No AB entries found in COPY.${section} — nothing to rewrite in copy.ts`

    return NextResponse.json({ success: true, changedCount, section, winner, note })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[api/admin/ab/conclude] error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
