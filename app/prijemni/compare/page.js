import { redirect } from 'next/navigation'
import ComparePageClient from './ComparePageClient'

export const metadata = {
  title: 'Usporedi studije — Maturiraj.hr',
  description: 'Usporedba studija rame uz rame — prag, mjesta, predmeti, datumi.',
}

export default async function ComparePage({ searchParams }) {
  const ids = searchParams.ids?.split(',').filter(Boolean) || []
  if (ids.length < 2 || ids.length > 4) {
    redirect('/prijemni')
  }

  return <ComparePageClient ids={ids} />
}
