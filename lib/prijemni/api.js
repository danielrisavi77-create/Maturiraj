import { createClient } from '@/lib/supabase/client'

/** @import { Studij, Fakultet, PragHistoryRow } from '@/lib/types/prijemni' */

/**
 * Vraća sve fakultete grupirane sa svojim studijima.
 * Koristi raw fetch umjesto Supabase klijenta kako bi izbjegao
 * blokadu auth token refresha u createBrowserClient.
 *
 * @returns {Promise<Fakultet[]>}
 */
export async function getAllFakulteti() {
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  const res = await fetch(
    `${base}/rest/v1/studiji_view?select=*&order=fakultet_id.asc,popularnost.desc`,
    {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
    }
  )
  if (!res.ok) throw new Error(`HTTP ${res.status} — ${await res.text()}`)
  const data = await res.json()
  if (!data) return []

  /** @type {Map<string, Fakultet>} */
  const map = new Map()

  for (const s of /** @type {Studij[]} */ (data)) {
    if (!map.has(s.fakultet_id)) {
      map.set(s.fakultet_id, {
        id: s.fakultet_id,
        short: s.fak_short,
        name: s.fak_name,
        grad: s.grad,
        sveuciliste: null,
        sym: s.sym,
        color: s.color,
        glyph_bg: s.glyph_bg,
        web_url: s.web_url,
        opis: null,
        sort_order: 100,
        studiji: [],
      })
    }
    map.get(s.fakultet_id).studiji.push(s)
  }

  return Array.from(map.values())
}

/**
 * Vraća povijest pragova za jedan studij (za trend chart).
 *
 * @param {string} studijId
 * @returns {Promise<PragHistoryRow[]>}
 */
export async function getPragoviHistory(studijId) {
  const supabase = createClient()

  const { data, error } = await supabase
    .from('pragovi')
    .select('godina, prag, prijavljenih, upisanih')
    .eq('studij_id', studijId)
    .order('godina', { ascending: true })

  if (error) throw error
  return data ?? []
}
