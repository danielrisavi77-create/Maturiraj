import { getCroatianRegistryReport, getCroatianValidationReport } from '../lib/game-mode/hrv-registry'

const registry = getCroatianRegistryReport()
const validation = getCroatianValidationReport()
console.log(JSON.stringify({
  generatedAt: new Date().toISOString(),
  registry,
  validation: {
    issueCount: validation.issues.length,
    issuesByCode: validation.issues.reduce<Record<string, number>>((result, issue) => {
      result[issue.code] = (result[issue.code] ?? 0) + 1
      return result
    }, {}),
    exactDuplicateGroups: validation.duplicateGroups.length,
    semanticDuplicateGroups: validation.semanticDuplicateGroups.length,
    sampleIssues: validation.issues.slice(0, 25),
  },
}, null, 2))
