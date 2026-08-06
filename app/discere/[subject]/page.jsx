import { notFound } from 'next/navigation'
import GenericSubjectApp from '@/components/discere/common/GenericSubjectApp'
import { getDiscereSubject } from '@/lib/discere/subject-registry'

export default async function CanonicalDiscereSubjectPage({ params }) {
  const { subject: slug } = await params
  const subject = getDiscereSubject(slug)
  const isCanonicalRoute = subject?.route === `/discere/${subject?.slug}`
  const isAvailableForRoute = subject?.status === 'active' || subject?.status === 'qa'

  if (!subject || !isCanonicalRoute || !isAvailableForRoute) notFound()

  return <GenericSubjectApp subject={subject} />
}
