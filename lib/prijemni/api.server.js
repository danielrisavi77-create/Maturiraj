import { createClient } from '@/lib/supabase/server'

/** @import { Studij, Fakultet, PragHistoryRow } from '@/lib/types/prijemni' */

/**
 * Vraća sve fakultete grupirane sa svojim studijima.
 * Single query iz studiji_view + server-side group by fakultet_id.
 * Namijenjen Server Componentima i Route Handlerima.
 *
 * @returns {Promise<Fakultet[]>}
 */
export async function getAllFakulteti() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('studiji_view')
    .select('*')
    .order('fakultet_id')
    .order('popularnost', { ascending: false })

  if (error) throw error
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
 * Namijenjen Server Componentima i Route Handlerima.
 *
 * @param {string} studijId
 * @returns {Promise<PragHistoryRow[]>}
 */
export async function getPragoviHistory(studijId) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('pragovi')
    .select('godina, prag, prijavljenih, upisanih')
    .eq('studij_id', studijId)
    .order('godina', { ascending: true })

  if (error) throw error
  return data ?? []
}
