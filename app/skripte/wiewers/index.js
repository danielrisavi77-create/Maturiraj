import dynamic from 'next/dynamic'
import { getMissingSubjectIds } from '@/lib/data/subjectCategories'

// Lazy-load each viewer — compiled only when user opens that subject.
// Without this, opening /skripte forces Turbopack to compile all 258 data
// files (55 MB) upfront, causing 10-30s compile delay on first visit.

const HrvatskiViewer = dynamic(() => import('./hrv/HrvatskiViewer'), { ssr: false })
const KemijaViewer = dynamic(() => import('./kem/KemijaViewer'), { ssr: false })
const EngleskiViewer = dynamic(() => import('./eng/EngleskiViewer'), { ssr: false })
const SociologijaViewer = dynamic(() => import('./soc/SociologijaViewer'), { ssr: false })
const MatematikaViewer = dynamic(() => import('./mat/MatematikaViewer'), { ssr: false })
const StructuredSkriptaViewer = dynamic(() => import('./shared/StructuredSkriptaViewer'), { ssr: false })
export const BasicSubjectViewer = dynamic(() => import('./fallback/BasicSubjectViewer'), { ssr: false })

export const SUBJECT_VIEWERS = {
  hrv: HrvatskiViewer,
  mat: MatematikaViewer,
  kem: KemijaViewer,
  eng: EngleskiViewer,
  soc: SociologijaViewer,
  // Predmeti generirani preko scripts/gen-skripta.mjs (vidi lib/data/subjectCategories.js)
  // svi dijele isti generički prikaz strukturiranog sadržaja.
  ...Object.fromEntries(getMissingSubjectIds().map((id) => [id, StructuredSkriptaViewer])),
}

export function getSubjectViewer(subjectId) {
  return SUBJECT_VIEWERS[subjectId] || BasicSubjectViewer
}
