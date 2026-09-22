const SUBJECT_LOADERS = {
  bio: () => import('@/content/discere/bio/loaders.js'),
}

export async function loadSubjectModule(subjectId, registry = SUBJECT_LOADERS) {
  const loader = registry[subjectId]
  if (!loader) throw new Error(`Unknown Discere subject: ${subjectId}`)
  const subjectModule = await loader()
  if (!subjectModule?.index || !subjectModule?.examLoaders) {
    throw new Error(`Invalid Discere subject module: ${subjectId}`)
  }
  return subjectModule
}

export async function loadSubjectIndex(subjectId, registry = SUBJECT_LOADERS) {
  const subjectModule = await loadSubjectModule(subjectId, registry)
  return subjectModule.index
}

export async function loadExam(subjectId, examKey, registry = SUBJECT_LOADERS) {
  const subjectModule = await loadSubjectModule(subjectId, registry)
  const loader = subjectModule.examLoaders[examKey]
  if (!loader) throw new Error(`Unknown exam for ${subjectId}: ${examKey}`)
  const examModule = await loader()
  if (!examModule?.exam) throw new Error(`Exam module does not export exam: ${subjectId}/${examKey}`)
  return examModule.exam
}

export function registeredCanonicalSubjects() {
  return Object.keys(SUBJECT_LOADERS)
}
