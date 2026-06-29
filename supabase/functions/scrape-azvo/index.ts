/**
 * Supabase Edge Function — AZVO scraper.
 * Pozivati kao scheduled function jednom tjedno.
 *
 * Konfiguracija u `supabase/config.toml`:
 *   [functions.scrape-azvo]
 *   schedule = "0 3 * * 1"   # svaki ponedjeljak u 3h ujutro
 *
 * Deploy: supabase functions deploy scrape-azvo
 */

import 'jsr:@supabase/functions-js/edge-runtime.d.ts'
import { createClient } from 'jsr:@supabase/supabase-js@2'
import * as Sentry from 'npm:@sentry/deno'

// Initialise Sentry — set SENTRY_DSN in Supabase secrets:
//   supabase secrets set SENTRY_DSN=https://xxx@oXXX.ingest.sentry.io/YYY
const SENTRY_DSN = Deno.env.get('SENTRY_DSN')
if (SENTRY_DSN) {
  Sentry.init({ dsn: SENTRY_DSN, tracesSampleRate: 0 })
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface ScrapedRow {
  studij_naziv: string
  fakultet_hint: string
  godina: number
  prag: number | null
  prijavljenih?: number | null
  upisanih?: number | null
  raw_payload: Record<string, unknown>
}

interface StudijLookup {
  id: string
  fak_short: string
  fak_name: string
  naziv: string
}

interface DiffResult {
  status: 'new' | 'changed' | 'unchanged' | 'unmatched'
  delta?: Record<string, { old: unknown; new: unknown }>
}

// ─── Fuzzy matching ───────────────────────────────────────────────────────────

function normalize(s: string): string {
  return s.toLowerCase().trim()
    .replace(/č/g, 'c').replace(/ć/g, 'c').replace(/š/g, 's')
    .replace(/đ/g, 'd').replace(/ž/g, 'z')
    .replace(/\s+/g, ' ')
}

function editDistance(a: string, b: string): number {
  const m = a.length, n = b.length
  if (m === 0) return n
  if (n === 0) return m
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0) as number[])
  for (let i = 0; i <= m; i++) dp[i][0] = i
  for (let j = 0; j <= n; j++) dp[0][j] = j
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    }
  }
  return dp[m][n]
}

// Manual overrides — key is normalized "fakultet_hint|studij_naziv"
const OVERRIDES: Record<string, string> = {
  'medicinski fakultet zagreb|medicina': 'mef_zg__medicina',
  'medicinski fakultet zagreb|sanitarno inzenjerstvo': 'mef_zg__sanitarno',
  'medicinski fakultet zagreb|medicinsko-laboratorijska dijagnostika': 'mef_zg__medlab',
  'stomatoloski fakultet zagreb|dentalna medicina': 'sfzg__dentalna',
  'akademija dramske umjetnosti|gluma': 'adu__gluma',
}

function matchScrapedRow(studijNaziv: string, fakultetHint: string, studiji: StudijLookup[]): string | null {
  const key = `${normalize(fakultetHint)}|${normalize(studijNaziv)}`
  if (OVERRIDES[key]) return OVERRIDES[key]

  const hintNorm = normalize(fakultetHint)
  const candidates = studiji.filter(s =>
    normalize(s.fak_name).includes(hintNorm) ||
    hintNorm.includes(normalize(s.fak_short))
  )
  if (candidates.length === 0) return null

  const exact = candidates.find(c => normalize(c.naziv) === normalize(studijNaziv))
  if (exact) return exact.id

  let best: { id: string; dist: number } | null = null
  const target = normalize(studijNaziv)
  for (const c of candidates) {
    const d = editDistance(normalize(c.naziv), target)
    if (!best || d < best.dist) best = { id: c.id, dist: d }
  }
  if (best && best.dist <= Math.max(2, Math.floor(target.length * 0.2))) {
    return best.id
  }
  return null
}

// ─── AZVO fetch ───────────────────────────────────────────────────────────────

const AZVO_URL = 'https://www.postani-student.hr/api/export/upis-rezultati'

async function fetchAzvoRows(godina: number): Promise<ScrapedRow[]> {
  const res = await fetch(`${AZVO_URL}?godina=${godina}`, {
    headers: { 'Accept': 'application/json', 'User-Agent': 'Maturiraj.hr DataBot/1.0' },
  })
  if (!res.ok) throw new Error(`AZVO fetch failed: ${res.status} ${res.statusText}`)

  const data = await res.json() as { rezultati?: unknown[] }
  if (!Array.isArray(data?.rezultati)) throw new Error('Unexpected AZVO payload structure')

  return (data.rezultati as Record<string, unknown>[])
    .filter(r => r.studij && r.fakultet)
    .map(r => ({
      studij_naziv: r.studij as string,
      fakultet_hint: r.fakultet as string,
      godina,
      prag: (r.bodovi_min as number | undefined) ?? null,
      prijavljenih: (r.prijavljenih as number | undefined) ?? null,
      upisanih: (r.upisanih as number | undefined) ?? null,
      raw_payload: r,
    }))
}

// ─── Diff ─────────────────────────────────────────────────────────────────────

async function computeDiff(
  supabase: ReturnType<typeof createClient>,
  row: ScrapedRow,
  studijId: string | null
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

  return Object.keys(delta).length > 0 ? { status: 'changed', delta } : { status: 'unchanged' }
}

// ─── Handler ──────────────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''

  // Supabase scheduled functions send the service role key as the bearer token
  const auth = req.headers.get('Authorization') ?? ''
  if (!serviceKey || auth !== `Bearer ${serviceKey}`) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    serviceKey,
    { auth: { persistSession: false } }
  )

  const runId = crypto.randomUUID()
  const t0 = Date.now()
  const godina = new Date().getFullYear()
  const stats = { rows_total: 0, rows_new: 0, rows_changed: 0, rows_unchanged: 0, rows_unmatched: 0 }
  let status: 'success' | 'failed' | 'partial' = 'success'
  let errorMsg: string | null = null

  await supabase.from('scraper_runs').insert({
    id: runId,
    source: 'azvo_upisi',
    triggered_by: 'cron',
    status: 'running',
  })

  try {
    const rows = await fetchAzvoRows(godina)
    stats.rows_total = rows.length
    if (rows.length === 0) throw new Error('Scraper returned 0 rows — likely structure change')

    const { data: studiji, error: studErr } = await supabase
      .from('studiji_view')
      .select('id, fak_short, fak_name, naziv')
    if (studErr) throw studErr

    const stagingRows = await Promise.all(rows.map(async r => {
      const studijId = matchScrapedRow(r.studij_naziv, r.fakultet_hint, studiji as StudijLookup[])
      const diff = await computeDiff(supabase, r, studijId)

      if (diff.status === 'new') stats.rows_new++
      else if (diff.status === 'changed') stats.rows_changed++
      else if (diff.status === 'unchanged') stats.rows_unchanged++
      else stats.rows_unmatched++

      return {
        run_id: runId,
        studij_id: studijId,
        studij_naziv: r.studij_naziv,
        fakultet_hint: r.fakultet_hint,
        godina: r.godina,
        prag: r.prag,
        prijavljenih: r.prijavljenih ?? null,
        upisanih: r.upisanih ?? null,
        source: 'azvo_upisi',
        source_url: AZVO_URL,
        raw_payload: r.raw_payload,
        diff_status: diff.status,
        diff_delta: diff.delta ?? null,
      }
    }))

    const { error: stagingErr } = await supabase.from('pragovi_staging').insert(stagingRows)
    if (stagingErr) throw stagingErr

    if (stats.rows_unmatched > 0) status = 'partial'

  } catch (err: unknown) {
    errorMsg = err instanceof Error ? err.message : String(err)
    status = 'failed'
    if (SENTRY_DSN) Sentry.captureException(err)
  }

  await supabase.from('scraper_runs').update({
    status,
    error_message: errorMsg,
    duration_ms: Date.now() - t0,
    finished_at: new Date().toISOString(),
    ...stats,
  }).eq('id', runId)

  if (SENTRY_DSN) await Sentry.flush(2000)

  const code = status === 'failed' ? 500 : 200
  return new Response(JSON.stringify({ runId, status, stats, error: errorMsg }), {
    status: code,
    headers: { 'Content-Type': 'application/json' },
  })
})
