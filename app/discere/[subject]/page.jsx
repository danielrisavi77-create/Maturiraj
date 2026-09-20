import { notFound } from 'next/navigation'
import GenericSubjectApp from '@/components/discere/common/GenericSubjectApp'
import { getDiscereSubject } from '@/lib/discere/subject-registry'
// Reuses the same client-side plan gate as the Hrvatski simulator route —
// real isPaid tier enforcement (see agents/bugs.md), not the older
// per-subject logic feat/all-subjects shipped before that fix landed.
// allowFree ovisi o subject.freeExam: dok nijedan kanonski predmet nije
// active i freeExam:true, gate ostaje paid-only (fail-closed).
import PlanGate from '@/app/discere/hrvatski/simulator/PlanGate'

export default async function CanonicalDiscereSubjectPage({ params }) {
  const { subject: slug } = await params
  const subject = getDiscereSubject(slug)
  const isCanonicalRoute = subject?.runtime === 'canonical' && subject.route === `/discere/${subject.slug}`
  // NOTE: 'qa' status subjects (e.g. Biologija) stay reachable only outside
  // production — Biology's own QA ledger self-reports "structural-pass",
  // not verified, and is not meant to be publicly reachable yet.
  const isAvailableForRoute = subject?.status === 'active' ||
    (process.env.NODE_ENV !== 'production' && subject?.status === 'qa')

  if (!subject || !isCanonicalRoute || !isAvailableForRoute) notFound()

  return (
    <PlanGate allowFree={subject.freeExam === true}>
      <GenericSubjectApp subject={subject} />
    </PlanGate>
  )
}
