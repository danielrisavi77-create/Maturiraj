const SUBJECT_LOADERS = {
  bio: () => import('@/content/discere/bio/loaders.js'),
}

export async function loadSubjectModule(subjectId, registry = SUBJECT_LOADERS) {
  const loader = registry[subjectId]
  if (!loader) throw new Error(`Unknown Discere subject: ${subjectId}`)
  const module = await loader()
  if (!module?.index) {
    throw new Error(`Invalid Discere subject module: ${subjectId}`)
  }
  return module
}

export async function loadSubjectIndex(subjectId, registry = SUBJECT_LOADERS) {
  const module = await loadSubjectModule(subjectId, registry)
  return module.index
}

export async function loadExam(subjectId, examKey, registry = SUBJECT_LOADERS) {
  const module = await loadSubjectModule(subjectId, registry)
  // ADR-001: predmet kojemu je izvor razdvojen (content/discere/<id>/exams/*.mjs
  // nosi answer/solution) namjerno nema klijentske exam loadere — ispit se
  // dohvaća rutom GET /api/sim/<id>/exam/<key>. Prijelaz je zadatak grupe B1.
  if (!module.examLoaders) {
    throw new Error(
      `Discere subject has no client exam loaders (ADR-001): ${subjectId} — use GET /api/sim/${subjectId}/exam/${examKey}`,
    )
  }
  const loader = module.examLoaders[examKey]
  if (!loader) throw new Error(`Unknown exam for ${subjectId}: ${examKey}`)
  const examModule = await loader()
  if (!examModule?.exam) throw new Error(`Exam module does not export exam: ${subjectId}/${examKey}`)
  return examModule.exam
}

export function registeredCanonicalSubjects() {
  return Object.keys(SUBJECT_LOADERS)
}
