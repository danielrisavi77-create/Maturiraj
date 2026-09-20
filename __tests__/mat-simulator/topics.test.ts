// __tests__/mat-simulator/topics.test.ts
// Kanon tema (3.1/3.3): svaki topic kod u podacima ispita mora biti kanonski kod ili
// njegov alias iz content/simulator/mat/topic-canon.json (scripts/mat-normalize-topics.mjs).
import { describe, expect, it } from 'vitest';
import { readdirSync } from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import canon from '@/content/simulator/mat/topic-canon.json';

const here = dirname(fileURLToPath(import.meta.url));
const dir = resolve(here, '../../content/simulator/mat/exams');
const examFiles = readdirSync(dir).filter((f) => f.endsWith('.mjs')).sort();

const RESERVED_KEYS = new Set(['_comment', '_invariant']);

function validTopicCodes(): Set<string> {
  const valid = new Set<string>();
  for (const [code, entry] of Object.entries(canon as Record<string, any>)) {
    if (RESERVED_KEYS.has(code)) continue;
    valid.add(code);
    for (const alias of entry.aliases || []) valid.add(alias);
  }
  return valid;
}

function collectTopics(qs: any[]): string[] {
  const topics: string[] = [];
  for (const q of qs) {
    if (!q || q._META) continue;
    if (q.topic) topics.push(q.topic);
    if (Array.isArray(q.parts)) {
      for (const p of q.parts) if (p?.topic) topics.push(p.topic);
    }
  }
  return topics;
}

describe('mat-simulator: kanon tema pokriva sve topic kodove u podacima', () => {
  const validCodes = validTopicCodes();

  it('kanon ima barem jedan kod', () => {
    expect(validCodes.size).toBeGreaterThan(0);
  });

  for (const file of examFiles) {
    const key = file.replace('.mjs', '');

    it(`${key}: svi topic kodovi su u kanonu`, async () => {
      const mod = await import(pathToFileURL(resolve(dir, file)).href);
      const topics = collectTopics(mod.qs || []);
      const unknown = [...new Set(topics)].filter((t) => !validCodes.has(t));
      expect(unknown, `nepoznati topic kodovi u ${key} (nedostaju u topic-canon.json)`).toEqual([]);
    });
  }
});
