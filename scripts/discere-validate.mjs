import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { validateExam, upgradeExam } from '../lib/discere/exam-schema.js'
import { validateExamAssets } from './discere-asset-integrity.mjs'
import { buildPublicExam, buildSecrets, renameAltForDisk } from './gen-discere-exams.mjs'

const __filename = fileURLToPath(import.meta.url)

export function examModulePathsForSubject(subjectDir, index) {
  if (!index || !Array.isArray(index.exams)) return []
  const root = resolve(subjectDir)

  return index.exams.map((entry) => {
    if (!entry || typeof entry.file !== 'string' || !entry.file.trim()) {
      throw new Error('Exam index entry is missing file')
    }
    const target = resolve(root, entry.file)
    const rel = relative(root, target)
    if (rel.startsWith(`..${sep}`) || rel === '..' || resolve(target) === dirname(root)) {
      throw new Error(`Exam module path is outside subject directory: ${entry.file}`)
    }
    return target
  })
}

function subjectDirs(contentRoot, requestedSubject) {
  if (requestedSubject) return [join(contentRoot, requestedSubject)]
  if (!existsSync(contentRoot)) return []
  return readdirSync(contentRoot)
    .map((name) => join(contentRoot, name))
    .filter((path) => statSync(path).isDirectory() && existsSync(join(path, 'index.json')))
    .sort()
}

/**
 * Provjera drifta (npm skripta discere:gen): ako generirane datoteke već
 * postoje na disku, moraju biti bajt-identične onome što bi generator upravo
 * sada proizveo iz kanonskog izvora. Pad znači da je netko ručno diraona
 * generirano ili zaboravio pokrenuti `npm run discere:gen` nakon izmjene
 * kanonskog sadržaja.
 */
function checkGeneratedDrift(subjectId, entry, rawExam, cwd) {
  const issues = []
  const publicPath = join(cwd, 'content', subjectId, 'exams', `${entry.key}.json`)
  const secretsPath = join(cwd, 'lib', 'data', subjectId, 'secrets', `${entry.key}.json`)
  if (!existsSync(publicPath) && !existsSync(secretsPath)) return issues

  const upgraded = upgradeExam(rawExam)
  const publicExam = buildPublicExam(upgraded)
  const diskExam = { ...publicExam, qs: renameAltForDisk(publicExam.qs) }
  const { secrets } = buildSecrets(upgraded.questions)

  if (existsSync(publicPath)) {
    const expected = `${JSON.stringify(diskExam, null, 2)}\n`
    if (readFileSync(publicPath, 'utf8') !== expected) {
      issues.push({ code: 'GENERATED_PUBLIC_DRIFT', path: relative(cwd, publicPath), message: `content/${subjectId}/exams/${entry.key}.json ne odgovara generatoru — pokreni npm run discere:gen.` })
    }
  }
  if (existsSync(secretsPath)) {
    const expected = `${JSON.stringify(secrets, null, 2)}\n`
    if (readFileSync(secretsPath, 'utf8') !== expected) {
      issues.push({ code: 'GENERATED_SECRETS_DRIFT', path: relative(cwd, secretsPath), message: `lib/data/${subjectId}/secrets/${entry.key}.json ne odgovara generatoru — pokreni npm run discere:gen.` })
    }
  }
  return issues
}

export async function validateSubjectDirectory(subjectDir, { publicRoot = resolve(subjectDir, '../../../public'), cwd = resolve(subjectDir, '../../..') } = {}) {
  const indexPath = join(subjectDir, 'index.json')
  if (!existsSync(indexPath)) {
    return { subject: subjectDir.split(sep).at(-1), skipped: true, exams: [], errors: [], warnings: [] }
  }

  const index = JSON.parse(readFileSync(indexPath, 'utf8'))
  const subjectId = index.subject || subjectDir.split(sep).at(-1)
  const paths = examModulePathsForSubject(subjectDir, index)
  const exams = []
  const errors = []
  const warnings = []

  for (let i = 0; i < paths.length; i += 1) {
    const modulePath = paths[i]
    const entry = index.exams[i]
    if (!existsSync(modulePath)) {
      errors.push({ code: 'EXAM_MODULE_MISSING', path: entry.file, message: `Nedostaje ${entry.file}.` })
      exams.push({ key: entry.key, valid: false, errorCount: 1, warningCount: 0 })
      continue
    }

    let imported
    try {
      imported = await import(`${pathToFileURL(modulePath).href}?v=${Date.now()}-${i}`)
    } catch (error) {
      errors.push({ code: 'EXAM_MODULE_IMPORT_FAILED', path: entry.file, message: error?.message || String(error) })
      exams.push({ key: entry.key, valid: false, errorCount: 1, warningCount: 0 })
      continue
    }

    if (!imported.exam) {
      errors.push({ code: 'EXAM_EXPORT_MISSING', path: entry.file, message: 'Exam modul mora exportati `exam`.' })
      exams.push({ key: entry.key, valid: false, errorCount: 1, warningCount: 0 })
      continue
    }

    const result = validateExam(imported.exam)
    const media = await validateExamAssets(imported.exam, { publicRoot })
    result.errors.push(...media.errors)
    let driftIssues = []
    try {
      driftIssues = checkGeneratedDrift(subjectId, entry, imported.exam, cwd)
    } catch (error) {
      driftIssues = [{ code: 'GENERATED_DRIFT_CHECK_FAILED', path: entry.file, message: error?.message || String(error) }]
    }
    result.errors.push(...driftIssues)
    result.valid = result.errors.length === 0
    exams.push({ key: entry.key, valid: result.valid, errorCount: result.errors.length, warningCount: result.warnings.length, assets: media.assets })
    result.errors.forEach((error) => errors.push({ ...error, examKey: entry.key }))
    result.warnings.forEach((warning) => warnings.push({ ...warning, examKey: entry.key }))
  }

  return { subject: subjectId, skipped: false, exams, errors, warnings }
}

function printReport(report) {
  if (report.skipped) {
    console.log(`ℹ ${report.subject}: No index for ${report.subject} yet`)
    return
  }

  for (const exam of report.exams) {
    const state = exam.valid ? 'PASS' : 'FAIL'
    console.log(`${exam.valid ? '✓' : '✗'} ${report.subject}/${exam.key}: ${state} (${exam.errorCount} errors, ${exam.warningCount} warnings)`)
  }

  for (const error of report.errors) {
    console.error(`  ERROR ${error.examKey ? `${error.examKey} ` : ''}${error.code} ${error.path}: ${error.message}`)
  }
  for (const warning of report.warnings) {
    console.warn(`  WARN  ${warning.examKey ? `${warning.examKey} ` : ''}${warning.code} ${warning.path}: ${warning.message}`)
  }
}

export async function runDiscereValidation({ cwd = process.cwd(), subject = null } = {}) {
  if (subject && !/^[a-z][a-z0-9-]*$/.test(subject)) {
    const error = { code: 'SUBJECT_ID_INVALID', path: subject, message: 'Expected a subject identifier, not a path or option.' }
    console.error(`ERROR ${error.code}: ${error.message}`)
    return { valid: false, reports: [{ subject, skipped: false, exams: [], errors: [error], warnings: [] }] }
  }
  const contentRoot = join(cwd, 'content', 'discere')
  const dirs = subjectDirs(contentRoot, subject)

  if (subject && dirs.length === 1 && !existsSync(join(dirs[0], 'index.json'))) {
    const report = await validateSubjectDirectory(dirs[0], { cwd })
    report.skipped = false
    report.errors.push({ code: 'SUBJECT_INDEX_MISSING', path: join(dirs[0], 'index.json'), message: `Requested subject ${subject} has no canonical index.` })
    printReport(report)
    return { valid: false, reports: [report] }
  }

  if (!dirs.length) {
    console.log('ℹ No Discere canonical content indexes found yet')
    return { valid: true, reports: [] }
  }

  const reports = []
  for (const dir of dirs) {
    const report = await validateSubjectDirectory(dir, { publicRoot: join(cwd, 'public'), cwd })
    reports.push(report)
    printReport(report)
  }

  return { valid: reports.every((report) => report.errors.length === 0), reports }
}

async function main() {
  const args = process.argv.slice(2).filter((arg) => arg !== '--')
  if (args.length === 1 && args[0] === '--help') {
    console.log('Usage: pnpm discere:validate [--] [subject-id]\nChecks canonical structure and decodes local images. Missing/unsupported/unverified media fail validation; a pass is not publication approval.')
    return
  }
  if (args.length > 1) throw new Error('Usage: pnpm discere:validate [--] [subject-id]')
  const subject = args[0] || null
  const result = await runDiscereValidation({ subject })
  if (!result.valid) process.exitCode = 1
}

if (process.argv[1] && resolve(process.argv[1]) === __filename) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
