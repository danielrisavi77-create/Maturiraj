import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { validateExam } from '../lib/discere/exam-schema.js'
import { validateExamAssets } from './discere-asset-integrity.mjs'
import { buildSubjectArtifacts, serializeArtifact } from './gen-discere-exams.mjs'

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
 * Datoteka na disku mora biti identična očekivanom artefaktu (ako postoji).
 * Prijelomi redaka se normaliziraju: generator uvijek piše LF, ali git s
 * `core.autocrlf=true` (Windows) na checkoutu napravi CRLF, pa bi doslovna
 * usporedba bajtova prijavila drift na svakom svježem klonu. JSON.stringify
 * escapea stvarni CR unutar niza (\r), pa normalizacija ne može sakriti razliku
 * u sadržaju.
 */
function compareArtifact(absPath, expectedValue, { code, message, cwd, examKey = null }) {
  if (!existsSync(absPath)) return []
  const onDisk = readFileSync(absPath, 'utf8').replace(/\r\n/g, '\n')
  if (onDisk === serializeArtifact(expectedValue)) return []
  return [{ code, path: relative(cwd, absPath), message, examKey }]
}

/**
 * Provjera drifta (npm skripta discere:gen): ako generirane datoteke već
 * postoje na disku, moraju biti bajt-identične onome što bi generator upravo
 * sada proizveo iz kanonskog izvora. Pad znači da je netko ručno dirao
 * generirano ili zaboravio pokrenuti `npm run discere:gen` nakon izmjene
 * kanonskog sadržaja.
 *
 * Pokriva SVE generirane artefakte, ne samo javni ispit i tajni store: bez
 * summary.json, topics.json i index.json bi ručna izmjena tih datoteka prošla
 * validaciju, a sljedeći `discere:gen` bi je nijemo poništio.
 */
function checkGeneratedDrift(subjectId, subjectDir, index, rawExams, cwd) {
  const artifacts = buildSubjectArtifacts(subjectId, index, rawExams)
  const issues = []

  for (const built of artifacts.exams) {
    issues.push(...compareArtifact(
      join(cwd, 'content', subjectId, 'exams', `${built.key}.json`),
      built.publicExam,
      { code: 'GENERATED_PUBLIC_DRIFT', message: `content/${subjectId}/exams/${built.key}.json ne odgovara generatoru — pokreni npm run discere:gen.`, cwd, examKey: built.key },
    ))
    issues.push(...compareArtifact(
      join(cwd, 'lib', 'data', subjectId, 'secrets', `${built.key}.json`),
      built.secrets,
      { code: 'GENERATED_SECRETS_DRIFT', message: `lib/data/${subjectId}/secrets/${built.key}.json ne odgovara generatoru — pokreni npm run discere:gen.`, cwd, examKey: built.key },
    ))
  }

  issues.push(...compareArtifact(join(subjectDir, 'summary.json'), artifacts.summary, {
    code: 'GENERATED_SUMMARY_DRIFT', message: `content/discere/${subjectId}/summary.json ne odgovara generatoru — pokreni npm run discere:gen.`, cwd,
  }))
  issues.push(...compareArtifact(join(subjectDir, 'topics.json'), artifacts.topics, {
    code: 'GENERATED_TOPICS_DRIFT', message: `content/discere/${subjectId}/topics.json ne odgovara generatoru — pokreni npm run discere:gen.`, cwd,
  }))
  // index.json je RUČNO pisan (label, durationSec, file) s generiranim poljima
  // unutra, pa se ne uspoređuje bajt po bajt — samo polja koja generator
  // izvodi iz izvora, i to samo ako ih datoteka uopće ima (novi predmet ih
  // dobiva tek prvim `discere:gen`).
  const GENERATED_INDEX_FIELDS = ['questionCount', 'maxPoints', 'qaStatus']
  const onDiskEntries = Array.isArray(index.exams) ? index.exams : []
  for (let i = 0; i < onDiskEntries.length; i += 1) {
    const onDisk = onDiskEntries[i]
    const expected = artifacts.index.exams[i]
    if (!onDisk || !expected) continue
    for (const field of GENERATED_INDEX_FIELDS) {
      if (onDisk[field] === undefined) continue
      if (onDisk[field] === expected[field]) continue
      issues.push({
        code: 'GENERATED_INDEX_DRIFT',
        path: relative(cwd, join(subjectDir, 'index.json')),
        message: `exams[${i}].${field} je ${JSON.stringify(onDisk[field])}, a izvor daje ${JSON.stringify(expected[field])} — pokreni npm run discere:gen.`,
        examKey: onDisk.key ?? null,
      })
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
  const rawExams = new Array(paths.length).fill(null)

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

    rawExams[i] = imported.exam
    const result = validateExam(imported.exam)
    const media = await validateExamAssets(imported.exam, { publicRoot })
    result.errors.push(...media.errors)
    result.valid = result.errors.length === 0
    exams.push({ key: entry.key, valid: result.valid, errorCount: result.errors.length, warningCount: result.warnings.length, assets: media.assets })
    result.errors.forEach((error) => errors.push({ ...error, examKey: entry.key }))
    result.warnings.forEach((warning) => warnings.push({ ...warning, examKey: entry.key }))
  }

  // Drift se provjerava nad CIJELIM predmetom (summary/topics/index su jedan
  // artefakt za sve ispite), pa tek kad su svi kanonski moduli uspješno učitani.
  if (paths.length > 0 && rawExams.every(Boolean)) {
    let driftIssues = []
    try {
      driftIssues = checkGeneratedDrift(subjectId, subjectDir, index, rawExams, cwd)
    } catch (error) {
      driftIssues = [{ code: 'GENERATED_DRIFT_CHECK_FAILED', path: relative(cwd, subjectDir), message: error?.message || String(error), examKey: null }]
    }
    for (const issue of driftIssues) {
      errors.push(issue)
      const target = issue.examKey ? exams.find((exam) => exam.key === issue.examKey) : null
      if (target) {
        target.errorCount += 1
        target.valid = false
      }
    }
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
