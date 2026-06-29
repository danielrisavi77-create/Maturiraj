/**
 * Historical backfill — jednokratno povlači pragove 2020–2024 iz AZVO arhive.
 * Upisuje direktno u pragovi tablicu (ne staging), jer su arhivski podaci verificirani.
 *
 * Pokreni: tsx scripts/scraper/backfill.ts [--dry-run] [--godina 2022]
 * Potrebno: SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY u .env.local
 */

import { createClient } from '@supabase/supabase-js'
import { config } from 'dotenv'
import { scrapeFetch, sleep, RATE_LIMIT_MS } from './http'
import { matchScrapedRow, loadStudijiForMatching } from './match'

config({ path: '.env.local' })

const supabase = createClient(
  process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { persistSession: false } }
)

const AZVO_EXPORT_URL = 'https://www.postani-student.hr/api/export/upis-rezultati'
const START_YEAR = 2020
const END_YEAR = 2024

interface AzvoResultat {
  studij: string
  fakultet: string
  bodovi_min?: number
  prijavljenih?: number
  upisanih?: number
  [key: string]: unknown
}

const args = process.argv.slice(2)
const DRY_RUN = args.includes('--dry-run')
const SINGLE_YEAR = (() => {
  const idx = args.indexOf('--godina')
  return idx !== -1 ? parseInt(args[idx + 1], 10) : null
})()

async function fetchGodina(godina: number): Promise<AzvoResultat[]> {
  console.log(`  Fetching ${godina}…`)
  await sleep(RATE_LIMIT_MS)
  const res = await scrapeFetch(
    `${AZVO_EXPORT_URL}?godina=${godina}`,
    { headers: { 'Accept': 'application/json' } },
    'https://www.postani-student.hr/'
  )
  if (!res.ok) {
    console.warn(`  [WARN] ${godina}: HTTP ${res.status} — preskačem`)
    return []
  }
  const data = await res.json() as { rezultati?: unknown[] }
  if (!Array.isArray(data?.rezultati)) {
    console.warn(`  [WARN] ${godina}: unexpected payload structure — preskačem`)
    return []
  }
  return data.rezultati as AzvoResultat[]
}

async function backfillGodina(
  godina: number,
  studiji: Awaited<ReturnType<typeof loadStudijiForMatching>>
): Promise<{ inserted: number; skipped: number; unmatched: number }> {
  const rezultati = await fetchGodina(godina)
  if (rezultati.length === 0) return { inserted: 0, skipped: 0, unmatched: 0 }

  let inserted = 0, skipped = 0, unmatched = 0

  for (const r of rezultati) {
    if (!r.studij || !r.fakultet) { skipped++; continue }

    const studijId = matchScrapedRow(r.studij, r.fakultet, studiji)
    if (!studijId) {
      console.log(`    [UNMATCHED] ${r.fakultet} | ${r.studij}`)
      unmatched++
      continue
    }

    // Check if row already exists
    const { data: existing } = await supabase
      .from('pragovi')
      .select('id')
      .eq('studij_id', studijId)
      .eq('godina', godina)
      .maybeSingle()

    if (existing) { skipped++; continue }

    if (DRY_RUN) {
      console.log(`    [DRY] INSERT pragovi studij_id=${studijId} godina=${godina} prag=${r.bodovi_min ?? null}`)
      inserted++
      continue
    }

    const { error } = await supabase.from('pragovi').insert({
      studij_id: studijId,
      godina,
      prag: r.bodovi_min ?? null,
      prijavljenih: r.prijavljenih ?? null,
      upisanih: r.upisanih ?? null,
      last_verified_by: 'backfill_script',
      last_verified_at: new Date().toISOString(),
    })

    if (error) {
      console.error(`    [ERROR] ${studijId} ${godina}: ${error.message}`)
      skipped++
    } else {
      inserted++
    }
  }

  return { inserted, skipped, unmatched }
}

async function main() {
  console.log(`\n=== Backfill prijemni pragovi ${DRY_RUN ? '[DRY RUN]' : ''} ===\n`)

  const studiji = await loadStudijiForMatching(supabase as any)
  console.log(`Loaded ${studiji.length} studiji for matching\n`)

  const years = SINGLE_YEAR
    ? [SINGLE_YEAR]
    : Array.from({ length: END_YEAR - START_YEAR + 1 }, (_, i) => START_YEAR + i)

  let totalInserted = 0, totalSkipped = 0, totalUnmatched = 0

  for (const godina of years) {
    const { inserted, skipped, unmatched } = await backfillGodina(godina, studiji)
    console.log(`  ${godina}: +${inserted} inserted, ${skipped} skipped, ${unmatched} unmatched`)
    totalInserted += inserted
    totalSkipped += skipped
    totalUnmatched += unmatched
  }

  console.log(`\nDone: +${totalInserted} inserted, ${totalSkipped} skipped, ${totalUnmatched} unmatched\n`)
  if (DRY_RUN) console.log('[DRY RUN] — Ništa nije upisano u bazu.\n')
}

main().catch(err => {
  console.error('Backfill failed:', err)
  process.exit(1)
})
