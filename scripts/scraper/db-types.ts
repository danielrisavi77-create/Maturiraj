/**
 * Minimalna, ručno pisana Supabase shema — SAMO za tablice/viewove koje scraper dira.
 *
 * U repou ne postoje generirani Supabase tipovi (`supabase gen types`), pa se bez ovoga
 * tip reda u `createClient()` svodi na `never` i type-check pada (TS2339/TS2353/TS2345).
 * Stupci dolje su 1:1 prepisani iz migracija:
 *   - supabase/migrations/20260418000001_prijemni_fakulteti_studiji.sql  (pragovi, studiji_view)
 *   - supabase/migrations/20260419000004_prijemni_staging_audit.sql      (pragovi_staging, scraper_runs)
 * Ako se shema promijeni, ovdje je treba ažurirati (ili zamijeniti generiranim tipovima).
 *
 * NAPOMENA: Row tipovi moraju biti `type` (ne `interface`) — supabase-js trazi
 * `Record<string, unknown>` (GenericSchema), a interface nema implicitni index signature
 * pa bi se Schema svela na `never` i svi upiti bi opet bili netipizirani.
 */

/** Slobodni JSON blob (jsonb stupac) — ne ograničavamo dubinu, samo oblik na vrhu. */
export type JsonObject = Record<string, unknown>

/** check constraint na pragovi_staging.diff_status */
export type DiffStatus =
  | 'pending'
  | 'new'
  | 'unchanged'
  | 'changed'
  | 'unmatched'
  | 'applied'
  | 'rejected'

/** check constraint na scraper_runs.status */
export type ScraperRunStatus = 'running' | 'success' | 'failed' | 'partial'

export type PragRow = {
  id: number
  studij_id: string
  godina: number
  prag: number | null
  prijavljenih: number | null
  upisanih: number | null
  source: string | null
  source_url: string | null
  verified: boolean | null
  updated_at: string | null
  last_verified_at: string | null
  last_verified_by: string | null
}

export type PragStagingRow = {
  id: number
  run_id: string
  studij_id: string | null
  studij_naziv: string
  fakultet_hint: string | null
  godina: number
  prag: number | null
  prijavljenih: number | null
  upisanih: number | null
  source: string
  source_url: string | null
  raw_payload: JsonObject | null
  diff_status: DiffStatus | null
  diff_delta: JsonObject | null
  reviewed_by: string | null
  reviewed_at: string | null
  review_note: string | null
  created_at: string | null
}

export type ScraperRunRow = {
  id: string
  source: string
  triggered_by: string
  status: ScraperRunStatus | null
  rows_total: number | null
  rows_new: number | null
  rows_changed: number | null
  rows_unchanged: number | null
  rows_unmatched: number | null
  error_message: string | null
  duration_ms: number | null
  started_at: string | null
  finished_at: string | null
}

/**
 * studiji_view = studiji.* + fakulteti (short/name/grad/...) + prag_YYYY podstupci.
 * Ovdje navodimo samo stupce koje scraper stvarno čita (vidi match.ts / StudijLookup);
 * `select('*')` nad ovim viewom bi dao nepotpun tip, zato ga scraper ne koristi.
 */
export type StudijiViewRow = {
  id: string
  fakultet_id: string
  naziv: string
  short: string | null
  fak_short: string
  fak_name: string
}

export type ScraperDatabase = {
  public: {
    Tables: {
      pragovi: {
        Row: PragRow
        Insert: Omit<PragRow, 'id'> & { id?: number }
        Update: Partial<PragRow>
        Relationships: []
      }
      pragovi_staging: {
        Row: PragStagingRow
        Insert: Partial<Omit<PragStagingRow, 'run_id' | 'studij_naziv' | 'godina' | 'source'>> & {
          run_id: string
          studij_naziv: string
          godina: number
          source: string
        }
        Update: Partial<PragStagingRow>
        Relationships: []
      }
      scraper_runs: {
        Row: ScraperRunRow
        Insert: Partial<Omit<ScraperRunRow, 'source' | 'triggered_by'>> & {
          source: string
          triggered_by: string
        }
        Update: Partial<ScraperRunRow>
        Relationships: []
      }
    }
    Views: {
      studiji_view: {
        Row: StudijiViewRow
        Relationships: []
      }
    }
    Functions: Record<string, never>
  }
}
