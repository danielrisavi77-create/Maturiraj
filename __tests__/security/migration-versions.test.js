import { readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const migrationsDir = resolve(process.cwd(), 'supabase', 'migrations')

describe('Supabase migration version contract', () => {
  it('uses a unique numeric version prefix for every migration', () => {
    const files = readdirSync(migrationsDir)
      .filter(name => name.endsWith('.sql'))
      .sort()

    const byVersion = new Map()
    for (const file of files) {
      const match = file.match(/^(\d+)_/)
      expect(match, 'Migration must start with a numeric version: ' + file).toBeTruthy()
      const version = match[1]
      const existing = byVersion.get(version) || []
      existing.push(file)
      byVersion.set(version, existing)
    }

    const duplicates = [...byVersion.entries()]
      .filter(([, names]) => names.length > 1)
      .map(([version, names]) => ({ version, names }))

    expect(duplicates).toEqual([])
  })
})
