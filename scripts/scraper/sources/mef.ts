/**
 * Primjer direktnog scrape-a s fakultetske stranice za fallback.
 * Kada AZVO kasni s objavom, povlačimo direkt s mef.unizg.hr/upisi.
 *
 * Ovo je izgled scraperera — stvarni selektori ovise o strukturi fakultetske stranice
 * i moraju se validirati.
 */

import { ScraperSource, ScrapedRow } from './types'
import * as cheerio from 'cheerio'

export const mefSource: ScraperSource = {
  name: 'mef_zg_web',
  label: 'MEF Zagreb — službena stranica',
  url: 'https://mef.unizg.hr/upisi/rezultati',

  async run(): Promise<ScrapedRow[]> {
    const res = await fetch(this.url, {
      headers: { 'User-Agent': 'Maturiraj.hr DataBot/1.0' },
    })
    if (!res.ok) throw new Error(`MEF fetch failed: ${res.status}`)

    const html = await res.text()
    const $ = cheerio.load(html)
    const godina = new Date().getFullYear()

    const rows: ScrapedRow[] = []

    // Primjer parsa — treba prilagoditi stvarnom HTML-u
    $('table.upisi-rezultati tbody tr').each((_, el) => {
      const cells = $(el).find('td')
      const studij = $(cells[0]).text().trim()
      const prag = parseInt($(cells[1]).text().replace(/\D/g, ''), 10)

      if (studij && !isNaN(prag)) {
        rows.push({
          studij_naziv: studij,
          fakultet_hint: 'Medicinski fakultet Zagreb',
          godina,
          prag,
          raw_payload: { studij, prag_text: $(cells[1]).text() },
        })
      }
    })

    return rows
  },
}
