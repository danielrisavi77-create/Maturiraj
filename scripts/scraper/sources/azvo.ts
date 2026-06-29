/**
 * AZVO Postani Student scraper.
 * Pulls published upisni rezultati from AZVO portal.
 *
 * NAPOMENA: AZVO mijenja strukturu URL-ova i data formata često.
 * Ovo je primjer — prilagodi selektore/endpointa kad se objavi 2026 lista.
 * Testiraj lokalno prije pokretanja na produkciji.
 */

import { ScraperSource, ScrapedRow } from './types'
import { scrapeFetch, sleep, RATE_LIMIT_MS } from '../http'

// AZVO objavljuje CSV i JSON rezultate upisa. Koristimo javno dostupne export endpointe.
// U slučaju da ne postoji službeni API, možeš prepuniti od strane zadnjeg rounda
// s fakultetskih stranica direktno (vidi mef.ts source niže)

const AZVO_EXPORT_URL = 'https://www.postani-student.hr/api/export/upis-rezultati'
// ^ placeholder — validiraj stvarni endpoint kad pokreneš

export const azvoSource: ScraperSource = {
  name: 'azvo_upisi',
  label: 'AZVO — Upisni rezultati',
  url: AZVO_EXPORT_URL,

  async run(): Promise<ScrapedRow[]> {
    const godina = new Date().getFullYear()
    await sleep(RATE_LIMIT_MS) // polite delay before first request
    const res = await scrapeFetch(
      `${AZVO_EXPORT_URL}?godina=${godina}`,
      { headers: { 'Accept': 'application/json' } },
      'https://www.postani-student.hr/'
    )

    if (!res.ok) {
      throw new Error(`AZVO fetch failed: ${res.status} ${res.statusText}`)
    }

    const data = await res.json() as { rezultati?: unknown[] }
    // Očekivana struktura (pretpostavka): { rezultati: [{ studij, fakultet, bodovi_min, prijavljenih, upisanih }, ...] }

    if (!Array.isArray(data?.rezultati)) {
      throw new Error('Unexpected AZVO payload structure')
    }

    return (data.rezultati as Record<string, unknown>[])
      .filter((r) => r.studij && r.fakultet)
      .map((r): ScrapedRow => ({
        studij_naziv: r.studij as string,
        fakultet_hint: r.fakultet as string,
        godina,
        prag: (r.bodovi_min as number | undefined) ?? null,
        prijavljenih: (r.prijavljenih as number | undefined) ?? null,
        upisanih: (r.upisanih as number | undefined) ?? null,
        raw_payload: r,
      }))
  },
}
