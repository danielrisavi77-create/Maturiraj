import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AdminPragoviClient from './AdminPragoviClient'

const ALLOWED_EMAILS = [
  'danielrisavi77@gmail.com',
]

const ALLOWED_USER_IDS = [
  // 'OVDJE_STAVI_SVOJ_SUPABASE_USER_ID'
]

export default async function AdminPragoviPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const emailAllowed =
    user.email && ALLOWED_EMAILS.includes(user.email)

  const idAllowed = ALLOWED_USER_IDS.includes(user.id)

  if (!emailAllowed && !idAllowed) {
    redirect('/')
  }

  return <AdminPragoviClient />
}