export interface ScrapedRow {
  studij_naziv: string          // raw ime studija iz source-a
  fakultet_hint: string         // raw hint za mapiranje na fakultet
  godina: number
  prag: number | null
  prijavljenih?: number | null
  upisanih?: number | null
  raw_payload: Record<string, unknown>
}

export interface ScraperSource {
  name: string                  // unique id
  label: string                 // human readable
  url: string                   // base URL
  run(): Promise<ScrapedRow[]>
}
