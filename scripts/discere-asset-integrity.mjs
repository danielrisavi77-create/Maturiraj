import { readFile, realpath, stat } from 'node:fs/promises'
import { extname, isAbsolute, relative, resolve, sep } from 'node:path'
import { createHash } from 'node:crypto'
import sharp from 'sharp'

const IMAGE_FORMATS = { '.png': 'png', '.jpg': 'jpeg', '.jpeg': 'jpeg', '.webp': 'webp', '.gif': 'gif', '.avif': 'heif' }
const MAX_BYTES = 25 * 1024 * 1024

function isWithin(root, target) {
  const rel = relative(root, target)
  return rel !== '' && rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel)
}

async function inspectAsset(asset, publicRoot) {
  const src = asset.src
  if (/^https:\/\//i.test(src)) {
    return { code: 'ASSET_EXTERNAL_UNVERIFIED', message: 'External assets require verified availability and integrity; local validation cannot certify this URL.' }
  }
  let decoded
  try { decoded = decodeURIComponent(src) } catch { decoded = '' }
  if (!decoded.startsWith('/') || decoded.startsWith('//') || /[\\\x00-\x1f?#]/.test(decoded) || decoded.split('/').some((part) => part === '..' || part === '.') || decoded.includes(':')) {
    return { code: 'ASSET_PATH_INVALID', message: 'Expected an absolute public URL path without traversal, query, fragment or protocol.' }
  }
  const root = resolve(publicRoot)
  const filePath = resolve(root, `.${decoded}`)
  if (!isWithin(root, filePath)) return { code: 'ASSET_PATH_INVALID', message: 'Asset escapes public directory.' }

  let info
  try {
    info = await stat(filePath)
    const [realRoot, realFile] = await Promise.all([realpath(root), realpath(filePath)])
    if (!isWithin(realRoot, realFile)) return { code: 'ASSET_PATH_INVALID', message: 'Asset symlink escapes public directory.' }
  } catch (error) {
    return { code: error.code === 'ENOENT' ? 'ASSET_MISSING' : 'ASSET_UNREADABLE', message: `Asset cannot be read (${error.code || 'unknown error'}).` }
  }
  if (!info.isFile()) return { code: 'ASSET_NOT_FILE', message: 'Asset path must identify a file.' }
  if (!info.size) return { code: 'ASSET_EMPTY', message: 'Asset file is empty.' }
  if (info.size > MAX_BYTES) return { code: 'ASSET_TOO_LARGE', message: `Asset exceeds ${MAX_BYTES} bytes.` }
  const expectedFormat = IMAGE_FORMATS[extname(decoded).toLowerCase()]
  if (asset.type !== 'image' || !expectedFormat) {
    return { code: 'ASSET_DECODER_UNAVAILABLE', message: 'No verified decoder for this asset type/format. Publication remains blocked.' }
  }
  try {
    const bytes = await readFile(filePath)
    const decoder = sharp(bytes, { failOn: 'warning', limitInputPixels: 40_000_000, animated: true })
    const metadata = await decoder.metadata()
    if (metadata.format !== expectedFormat) return { code: 'ASSET_FORMAT_MISMATCH', message: `Extension expects ${expectedFormat}; decoded format is ${metadata.format}.` }
    // Metadata alone can succeed for a truncated file. Decode every image frame.
    await decoder.raw().toBuffer()
    return { bytes: info.size, format: metadata.format, width: metadata.width, height: metadata.height, sha256: createHash('sha256').update(bytes).digest('hex') }
  } catch {
    return { code: 'ASSET_DECODE_FAILED', message: 'Image cannot be fully decoded.' }
  }
}

/** Node-only physical media gate. Structural validation remains browser-safe. */
export async function validateExamAssets(exam, { publicRoot }) {
  const errors = []
  const assets = []
  const inspected = new Map()
  async function visit(questions, prefix) {
    for (const [index, question] of (Array.isArray(questions) ? questions : []).entries()) {
      if (!question || typeof question !== 'object') continue
      const questionPath = `${prefix}[${index}]`
      for (const [assetIndex, asset] of (Array.isArray(question.assets) ? question.assets : []).entries()) {
        if (!asset || typeof asset.src !== 'string' || !asset.src.trim()) continue // Structural validator reports invalid records.
        const cacheKey = `${asset.type}:${asset.src}`
        if (!inspected.has(cacheKey)) inspected.set(cacheKey, await inspectAsset(asset, publicRoot))
        const result = inspected.get(cacheKey)
        const context = { questionId: question.id, path: `${questionPath}.assets[${assetIndex}]`, src: asset.src }
        if (result.code) errors.push({ ...context, ...result, message: `Question ${question.id}, ${asset.src}: ${result.message}` })
        else assets.push({ ...context, ...result })
      }
      await visit(question.children, `${questionPath}.children`)
    }
  }
  await visit(exam?.questions, 'questions')
  return { valid: errors.length === 0, errors, assets }
}
