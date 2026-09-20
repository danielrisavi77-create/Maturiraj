/**
 * Main runner. Pozove source, ubaci redove u staging, računa diff, sprema run metadata.
 * Pokreni lokalno: `tsx scripts/scraper/run.ts azvo_upisi`
 * Ili kao cron (Vercel/Supabase Edge Function).
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js'
import { randomUUID } from 'crypto'
import { azvoSource } from './sources/azvo'
import { mefSource } from './sources/mef'
import { matchScrapedRow, loadStudijiForMatching } from './match'
import type { ScraperSource, ScrapedRow } from './sources/types'
import type { ScraperDatabase } from './db-types'

const SOURCES: Record<string, ScraperSource> = {
  azvo_upisi: azvoSource,
  mef_zg_web: mefSource,
}

// Klijent tipiziran ručno pisanom shemom (scripts/scraper/db-types.ts) — repo nema
// generirane Supabase tipove, a bez njih se tip svakog reda svodi na `never`.
type SupabaseAdminClient = SupabaseClient<ScraperDatabase>

let cachedSupabase: SupabaseAdminClient | null = null

function getSupabaseClient(): SupabaseAdminClient {
  if (cachedSupabase) return cachedSupabase

  const supabaseUrl = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error(
      'Missing Supabase env vars for scraper: SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY are required.'
    )
  }

  // Service role — bypass RLS za scraper.
  cachedSupabase = createClient<ScraperDatabase>(supabaseUrl, serviceRoleKey, {
    auth: { persistSession: false },
  })

  return cachedSupabase
}

interface DiffResult {
  status: 'new' | 'changed' | 'unchanged' | 'unmatched'
  delta?: Record<string, { old: unknown; new: unknown }>
}

async function computeDiff(
  row: ScrapedRow,
  studijId: string | null,
  supabase: SupabaseAdminClient
): Promise<DiffResult> {
  if (!studijId) return { status: 'unmatched' }

  const { data: existing } = await supabase
    .from('pragovi')
    .select('prag, prijavljenih, upisanih')
    .eq('studij_id', studijId)
    .eq('godina', row.godina)
    .maybeSingle()

  if (!existing) return { status: 'new' }

  const delta: Record<string, { old: unknown; new: unknown }> = {}
  if (existing.prag !== row.prag) delta.prag = { old: existing.prag, new: row.prag }
  if (existing.prijavljenih !== row.prijavljenih) delta.prijavljenih = { old: existing.prijavljenih, new: row.prijavljenih }
  if (existing.upisanih !== row.upisanih) delta.upisanih = { old: existing.upisanih, new: row.upisanih }

  return Object.keys(delta).length > 0
    ? { status: 'changed', delta }
    : { status: 'unchanged' }
}

export async function runScraper(sourceKey: string, triggeredBy = 'cron') {
  const source = SOURCES[sourceKey]
  if (!source) throw new Error(`Unknown source: ${sourceKey}`)

  const supabase = getSupabaseClient()

  const runId = randomUUID()
  const t0 = Date.now()

  // Create run record
  const { error: runErr } = await supabase.from('scraper_runs').insert({
    id: runId,
    source: sourceKey,
    triggered_by: triggeredBy,
    status: 'running',
  })
  if (runErr) throw runErr

  let stats = { rows_total: 0, rows_new: 0, rows_changed: 0, rows_unchanged: 0, rows_unmatched: 0 }
  let status: 'success' | 'failed' | 'partial' = 'success'
  let errorMsg: string | null = null

  try {
    console.log(`[${source.name}] Fetching...`)
    const rows = await source.run()
    stats.rows_total = rows.length
    console.log(`[${source.name}] Got ${rows.length} rows`)

    if (rows.length === 0) {
      throw new Error('Scraper returned 0 rows — likely structure change')
    }

    const studiji = await loadStudijiForMatching(supabase)

    // Process each row
    const stagingRows = await Promise.all(rows.map(async (r) => {
      const studijId = matchScrapedRow(r.studij_naziv, r.fakultet_hint, studiji)
      const diff = await computeDiff(r, studijId, supabase)

      if (diff.status === 'new') stats.rows_new++
      else if (diff.status === 'changed') stats.rows_changed++
      else if (diff.status === 'unchanged') stats.rows_unchanged++
      else if (diff.status === 'unmatched') stats.rows_unmatched++

      return {
        run_id: runId,
        studij_id: studijId,
        studij_naziv: r.studij_naziv,
        fakultet_hint: r.fakultet_hint,
        godina: r.godina,
        prag: r.prag,
        prijavljenih: r.prijavljenih ?? null,
        upisanih: r.upisanih ?? null,
        source: source.name,
        source_url: source.url,
        raw_payload: r.raw_payload,
        diff_status: diff.status,
        diff_delta: diff.delta ?? null,
      }
    }))

    // Batch insert staging
    const { error: stagingErr } = await supabase.from('pragovi_staging').insert(stagingRows)
    if (stagingErr) throw stagingErr

    console.log(`[${source.name}] Staging: ${stats.rows_new} new, ${stats.rows_changed} changed, ${stats.rows_unchanged} unchanged, ${stats.rows_unmatched} unmatched`)

    if (stats.rows_unmatched > 0) status = 'partial'

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`[${source.name}] FAILED:`, err)
    status = 'failed'
    errorMsg = message
  }

  // Close run
  await supabase.from('scraper_runs').update({
    status,
    error_message: errorMsg,
    duration_ms: Date.now() - t0,
    finished_at: new Date().toISOString(),
    ...stats,
  }).eq('id', runId)

  return { runId, stats, status }
}

// CLI entrypoint
if (require.main === module) {
  const sourceKey = process.argv[2] ?? 'azvo_upisi'
  runScraper(sourceKey, 'manual')
    .then(r => {
      console.log('\n✓ Done:', r)
      process.exit(0)
    })
    .catch(e => {
      console.error('\n✗ Fatal:', e)
      process.exit(1)
    })
}
