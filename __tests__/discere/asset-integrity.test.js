import { afterEach, describe, expect, it } from 'vitest'
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

const temporaryRoots = []
const cli = resolve('scripts/discere-validate.mjs')
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64')

afterEach(() => {
  for (const root of temporaryRoots.splice(0)) rmSync(root, { recursive: true, force: true })
})

function fixture(src, bytes, grouped = false) {
  const root = mkdtempSync(join(tmpdir(), 'discere-assets-'))
  temporaryRoots.push(root)
  const subjectDir = join(root, 'content/discere/bio')
  mkdirSync(join(subjectDir, 'exams'), { recursive: true })
  mkdirSync(join(root, 'public/discere/bio'), { recursive: true })
  const question = {
    id: 'child', type: 'mc', prompt: 'Synthetic fixture?', topic: 'test', points: 1,
    sourceRef: { task: '1', page: 1 }, assets: [{ type: 'image', src, alt: 'Fixture image' }],
    options: [{ id: 'A', text: 'One' }, { id: 'B', text: 'Two' }],
    answer: { kind: 'choice', correct: ['A'], source: 'maturiraj-reviewed' },
  }
  const exam = {
    meta: { schemaVersion: 1, subject: 'bio', key: 'fixture', year: 2026, season: 'ljeto',
      level: null, label: 'Synthetic validation fixture', durationSec: 60, questionCount: 1, maxPoints: 1,
      source: { provider: 'Test fixture', examUrl: 'https://example.test/fixture', retrievedAt: '2026-09-10' },
      qa: { status: 'draft', notes: [] } },
    questions: grouped ? [{ id: 'group', type: 'passage_group', prompt: 'Group', sourceRef: { task: '1' }, assets: [], children: [question] }] : [question],
  }
  writeFileSync(join(subjectDir, 'index.json'), JSON.stringify({ subject: 'bio', exams: [{ key: 'fixture', file: 'exams/fixture.mjs' }] }))
  writeFileSync(join(subjectDir, 'exams/fixture.mjs'), `export const exam = ${JSON.stringify(exam)}`)
  if (bytes !== undefined) {
    const assetPath = join(root, 'public', src)
    mkdirSync(dirname(assetPath), { recursive: true })
    writeFileSync(assetPath, bytes)
  }
  return root
}

function validate(root, args = ['bio']) {
  const result = spawnSync(process.execPath, [cli, ...args], { cwd: root, encoding: 'utf8', timeout: 15000 })
  if (result.error) throw result.error
  return { status: result.status, output: result.stdout + result.stderr }
}

describe('asset integrity at the actual validator CLI boundary', () => {
  it('fails a structurally valid exam whose local image is missing', () => {
    const result = validate(fixture('/discere/bio/missing.png'))
    expect(result.status).toBe(1)
    expect(result.output).toContain('ASSET_MISSING')
    expect(result.output).toContain('fixture')
    expect(result.output).toContain('child')
    expect(result.output).toContain('/discere/bio/missing.png')
  })

  it('accepts a real decodable local image', () => {
    const result = validate(fixture('/discere/bio/image.png', png))
    expect(result.output).toContain('PASS')
    expect(result.status).toBe(0)
  })

  it.each([
    ['empty.png', Buffer.alloc(0), 'ASSET_EMPTY'],
    ['corrupt.png', Buffer.from('This is not an image'), 'ASSET_DECODE_FAILED'],
    ['wrong.webp', png, 'ASSET_FORMAT_MISMATCH'],
  ])('rejects %s instead of trusting the extension', (name, bytes, code) => {
    const result = validate(fixture(`/discere/bio/${name}`, bytes))
    expect(result.status).toBe(1)
    expect(result.output).toContain(code)
  })

  it('checks assets inside nested groups', () => {
    const result = validate(fixture('/discere/bio/child.png', undefined, true))
    expect(result.status).toBe(1)
    expect(result.output).toContain('ASSET_MISSING')
    expect(result.output).toContain('children[0]')
  })

  it.each(['/discere/../../secret.png', '/discere/%2e%2e/%2e%2e/secret.png', '//external.test/picture.png'])('rejects unsafe asset path %s', (src) => {
    const result = validate(fixture(src))
    expect(result.status).toBe(1)
    expect(result.output).toContain('ASSET_PATH_INVALID')
  })

  it('does not accept a remote image without availability and integrity verification', () => {
    const result = validate(fixture('https://example.test/image.png'))
    expect(result.status).toBe(1)
    expect(result.output).toContain('ASSET_EXTERNAL_UNVERIFIED')
  })

  it('validates the requested subject after a package-manager argument separator', () => {
    const result = validate(fixture('/discere/bio/missing.png'), ['--', 'bio'])
    expect(result.status).toBe(1)
    expect(result.output).toContain('ASSET_MISSING')
  })

  it('fails an explicitly requested subject without an index', () => {
    const result = validate(fixture('/discere/bio/image.png', png), ['unknown'])
    expect(result.status).toBe(1)
    expect(result.output).toContain('SUBJECT_INDEX_MISSING')
  })
})
