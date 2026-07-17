import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const SNAPSHOT_URL = new URL('./fixtures/phase0-p0-snapshot.json', import.meta.url)

export const P0_CONTRACT_IDS = Object.freeze(['SEC-P0-01', 'SEC-P0-02', 'BIL-P0-01'])

/**
 * Loads the immutable Phase 0 audit evidence. This deliberately does not scan
 * the current source tree: Phase 1 remediation is expected to remove the
 * vulnerable patterns while the original audit record must remain reproducible.
 */
export async function scanP0Contracts() {
  const snapshot = JSON.parse(await readFile(SNAPSHOT_URL, 'utf8'))
  const snapshotIds = snapshot.contracts.map(({ id }) => id)

  if (JSON.stringify(snapshotIds) !== JSON.stringify(P0_CONTRACT_IDS)) {
    throw new Error('Phase 0 snapshot contract inventory does not match the canonical order')
  }

  return {
    schemaVersion: snapshot.schemaVersion,
    mode: 'offline-frozen-audit-snapshot',
    snapshotDate: snapshot.snapshotDate,
    snapshotCommit: snapshot.snapshotCommit,
    liveServicesUsed: false,
    contractCount: snapshot.contracts.length,
    findings: structuredClone(snapshot.contracts),
  }
}

const isDirectRun = process.argv[1]
  ? path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
  : false

if (isDirectRun) {
  const report = await scanP0Contracts()
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`)
}
