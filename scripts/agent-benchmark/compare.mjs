import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

export function compareResults(results) {
  if (!Array.isArray(results) || !results.length) throw new Error('No results')
  const { taskId, baseCommit } = results[0]
  if (results.some(r => r.taskId !== taskId || r.baseCommit !== baseCommit)) throw new Error('Different taskId or baseCommit')
  if (new Set(results.map(r => r.tool?.toLowerCase())).size !== results.length) throw new Error('Duplicate tool results')
  const eligible = []
  const ineligible = []
  for (const r of results) {
    let reason = null
    if (!Array.isArray(r.checks) || !r.checks.length || r.checks.some(c => c.passed !== true)) reason = 'Required checks incomplete'
    else if (!r.reviewer || r.reviewer.toLowerCase() === r.tool.toLowerCase()) reason = 'Independent review missing'
    else if (r.kind === 'content' && (!r.sourceReview?.passed || !r.sourceReview.reviewer || r.sourceReview.reviewer.toLowerCase() === r.tool.toLowerCase())) reason = 'Independent source review missing'
    else if (r.reviewFindings?.some(f => ['critical', 'blocker', 'important', 'major'].includes(f.severity?.toLowerCase()))) reason = 'Open significant review finding'
    if (reason) ineligible.push({ tool: r.tool, reason })
    else eligible.push({ tool: r.tool, elapsedSeconds: r.elapsedSeconds, tokens: r.tokens, tokenSource: r.tokenSource })
  }
  const fullyMeasured = eligible.length > 0 && eligible.every(r => Number.isSafeInteger(r.tokens) && r.tokenSource !== 'unknown')
  return {
    taskId, baseCommit, eligible, ineligible,
    qualityGate: ineligible.length ? 'incomplete' : 'complete',
    timeSeconds: eligible.map(({ tool, elapsedSeconds }) => ({ tool, elapsedSeconds })),
    tokenComparison: fullyMeasured ? [...eligible].sort((a, b) => a.tokens - b.tokens).map(({ tool, tokens }) => ({ tool, tokens })) : 'unknown',
    recommendationEvidence: eligible.length >= 2 ? 'Compare quality, elapsed time and verified usage; do not infer API cost from CLI tokens.' : 'Insufficient eligible results for routing.',
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const files = process.argv.slice(2)
  if (!files.length) throw new Error('Usage: node compare.mjs <result1.json> <result2.json> ...')
  console.log(JSON.stringify(compareResults(files.map(f => JSON.parse(readFileSync(resolve(f), 'utf8')))), null, 2))
}
