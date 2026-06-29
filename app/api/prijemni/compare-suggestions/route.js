import { NextResponse } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'

// GET /api/prijemni/compare-suggestions?studijId=<uuid>
// ─────────────────────────────────────────────────────────────────────────────
// Returns top-3 studij IDs that most frequently co-appear with `studijId`
// across all saved compare sets (user_compare_sets table).
// Used to power "Korisnici često uspoređuju zajedno s:" chips on detail view.
//
// Response: { suggestions: Array<{ studijId: string, count: number }> }
// Never returns 5xx — on error returns empty suggestions.

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const studijId = searchParams.get('studijId')?.trim()

    if (!studijId || !/^[0-9a-f-]{36}$/i.test(studijId)) {
      return NextResponse.json({ suggestions: [] })
    }

    const db = createAdminClient()

    // Fetch all sets that contain this studijId
    const { data, error } = await db
      .from('user_compare_sets')
      .select('studij_ids')
      .contains('studij_ids', [studijId])
      .limit(500) // cap to avoid scanning huge tables

    if (error || !data?.length) return NextResponse.json({ suggestions: [] })

    // Count co-occurrences of peer IDs in JS
    /** @type {Map<string, number>} */
    const counts = new Map()
    for (const row of data) {
      for (const id of row.studij_ids) {
        if (id === studijId) continue
        counts.set(id, (counts.get(id) ?? 0) + 1)
      }
    }

    const suggestions = Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([id, count]) => ({ studijId: id, count }))

    return NextResponse.json({ suggestions })
  } catch {
    return NextResponse.json({ suggestions: [] })
  }
}
