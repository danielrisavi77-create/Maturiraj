/**
 * skripta-emit.mjs — čisto stvaranje sadržaja datoteka za jedan predmet iz
 * checkpoint zapisa (curriculum skeleton + generirana poglavlja), u formatu
 * identičnom postojećem modulu kem (vidi app/skripte/data/kem/).
 *
 * Odvojeno od gen-skripta.mjs da bi string-building logika (buildSubjectFiles)
 * bila testabilna bez pravog Anthropic poziva — writeSubjectFiles je jedini dio
 * koji dira disk.
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

export function slugify(str) {
  return String(str || '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'D')
    .normalize('NFD').replace(/\p{M}/gu, '') // ukloni kombinirajuće dijakritičke znakove (é→e, ü→u, č→c, ...)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '')
}

export function toPascalCase(str) {
  return slugify(str).split('-').filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join('')
}

export function toCamelCase(str) {
  const p = toPascalCase(str)
  return p ? p[0].toLowerCase() + p.slice(1) : p
}

/**
 * @param {object} params
 * @param {string} params.id predmet id, npr. 'fiz'
 * @param {{curriculum: object, chapters: Record<string,object>}} params.entry checkpoint zapis za predmet
 * @param {{name?:string, sym?:string, color?:string, obvezno?:boolean}} params.subject meta iz lib/data/subjects.js
 * @param {string} params.category kategorija ('jezici'|'prirodni'|'drustveni'|'umjetnost')
 * @param {string} params.model Claude model korišten za generiranje
 * @returns {{moduleFileName:string, moduleFileContent:string, modulesFileContent:string, indexFileContent:string} | null}
 */
export function buildSubjectFiles({ id, entry, subject, category, model }) {
  if (!entry?.curriculum) return null
  const chapterMetas = entry.curriculum.chapters || []
  const fullChapters = chapterMetas
    .map((meta, i) => {
      const body = entry.chapters?.[meta.slug]
      if (!body) return null
      return { ...meta, ...body, slug: meta.slug, title: meta.title, subtitle: meta.subtitle, order: i + 1 }
    })
    .filter(Boolean)
  if (fullChapters.length === 0) return null

  const moduleSlug = slugify(entry.curriculum.title) || `${id}-modul-01`
  const modulePascal = toPascalCase(entry.curriculum.title) || toPascalCase(id)
  const moduleVar = `module01${modulePascal}`

  // ── modules/01-<slug>.js ──────────────────────────────────────────────────────
  const usedNames = new Set()
  const chapterVarNames = []
  const chapterVarLines = fullChapters.map((ch) => {
    let varName = toCamelCase(ch.slug) || 'poglavlje'
    while (usedNames.has(varName)) varName += '_'
    usedNames.add(varName)
    chapterVarNames.push(varName)
    return `const ${varName} = ${JSON.stringify(ch, null, 2)}\n`
  })

  const moduleMetaJson = JSON.stringify(
    {
      slug: moduleSlug,
      title: entry.curriculum.title,
      subtitle: entry.curriculum.subtitle,
      icon: entry.curriculum.icon,
      color: entry.curriculum.color,
      colorDim: entry.curriculum.colorDim,
      order: 1,
    },
    null,
    2,
  )
  // moduleMetaJson završava s "\n}" — zamijeni to dodatnim "chapters" poljem prije zatvaranja.
  const moduleObjLiteral = moduleMetaJson.slice(0, -2) + `,\n  "chapters": [${chapterVarNames.join(', ')}],\n}`

  const moduleFileContent = `// AUTO-GENERIRANO skriptom scripts/gen-skripta.mjs (kategorija: ${category}, model: ${model})
// Modul 01: ${entry.curriculum.title}
// Provjeriti sadržaj prije objave — vidi scripts/.skripta-checkpoint.json za sirove odgovore.

${chapterVarLines.join('\n')}
export const ${moduleVar} = ${moduleObjLiteral}
`
  const moduleFileName = `01-${moduleSlug}.js`

  // ── modules.js ────────────────────────────────────────────────────────────────
  const modulesFileContent = `// AUTO-GENERIRANO skriptom scripts/gen-skripta.mjs
import { ${moduleVar} } from './modules/${moduleFileName}'

export const ${id}Modules = [
  {
    slug: ${moduleVar}.slug,
    title: ${moduleVar}.title,
    subtitle: ${moduleVar}.subtitle,
    icon: ${moduleVar}.icon,
    color: ${moduleVar}.color,
    colorDim: ${moduleVar}.colorDim,
    order: 1,
    chapterMetas: ${moduleVar}.chapters.map(c => ({
      slug: c.slug, title: c.title, subtitle: c.subtitle, duration: c.duration,
      difficulty: c.difficulty, maturaRelevance: c.maturaRelevance, order: c.order,
    })),
    _chapters: ${moduleVar}.chapters,
  },
]
`

  // ── index.js ──────────────────────────────────────────────────────────────────
  const indexFileContent = `// AUTO-GENERIRANO skriptom scripts/gen-skripta.mjs
import { ${id}Modules } from './modules.js'

const ${id} = {
  id: ${JSON.stringify(id)},
  name: ${JSON.stringify(subject?.name || id)},
  sym: ${JSON.stringify(subject?.sym || '')},
  color: ${JSON.stringify(subject?.color || '#34d399')},
  obvezno: ${!!subject?.obvezno},

  razine: ${id}Modules.map(mod => ({
    id: mod.slug,
    label: mod.title,
    poglavlja: mod.chapterMetas.map(ch => ({
      id: ch.slug,
      naziv: ch.title,
      teme: [ch.subtitle],
    })),
  })),

  modules: ${id}Modules,
}

export default ${id}
`

  return { moduleFileName, moduleFileContent, modulesFileContent, indexFileContent }
}

export function writeSubjectFiles(dataDir, id, files) {
  const subjectDir = resolve(dataDir, id)
  const modulesDir = resolve(subjectDir, 'modules')
  mkdirSync(modulesDir, { recursive: true })
  writeFileSync(resolve(modulesDir, files.moduleFileName), files.moduleFileContent, 'utf8')
  writeFileSync(resolve(subjectDir, 'modules.js'), files.modulesFileContent, 'utf8')
  writeFileSync(resolve(subjectDir, 'index.js'), files.indexFileContent, 'utf8')
}
