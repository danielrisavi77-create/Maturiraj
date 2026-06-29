import { createClient } from '@/lib/supabase/client'

const MAX_SETS = 10

/** @returns {Promise<Array>} sorted newest-first */
export async function getCompareSets() {
  const supabase = createClient()
  const { data, error } = await supabase
    .from('user_compare_sets')
    .select('id, name, studij_ids, created_at')
    .order('created_at', { ascending: false })
    .limit(MAX_SETS)
  if (error) throw error
  return data ?? []
}

/**
 * Save a new compare set.
 * @param {string} name
 * @param {string[]} studijIds  2-4 ids
 * @returns {Promise<Object>} saved row
 */
export async function saveCompareSet(name, studijIds) {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Not authenticated')
  const { data, error } = await supabase
    .from('user_compare_sets')
    .insert({ user_id: user.id, name: name.trim(), studij_ids: studijIds })
    .select('id, name, studij_ids, created_at')
    .single()
  if (error) throw error
  return data
}

/**
 * Delete a compare set by id.
 * @param {string} id
 */
export async function deleteCompareSet(id) {
  const supabase = createClient()
  const { error } = await supabase
    .from('user_compare_sets')
    .delete()
    .eq('id', id)
  if (error) throw error
}
