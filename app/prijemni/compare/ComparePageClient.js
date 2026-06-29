'use client'
import dynamic from 'next/dynamic'

const ComparePageHandoff = dynamic(
  () => import('@/components/prijemni/ComparePageHandoff'),
  { ssr: false }
)

export default function ComparePageClient({ ids }) {
  return <ComparePageHandoff ids={ids} />
}
