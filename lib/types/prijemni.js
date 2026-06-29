/**
 * @typedef {Object} KalkPolje
 * @property {string} id
 * @property {string} label
 * @property {string} razina
 * @property {number} max
 */

/**
 * @typedef {Object} KalkPosebno
 * @property {string} label
 * @property {number} max
 * @property {string|null} napomena
 */

/**
 * @typedef {Object} Kalk
 * @property {number} ocjene_max
 * @property {KalkPolje[]} polja
 * @property {KalkPosebno|null} posebno
 */

/**
 * @typedef {Object} Studij
 * @property {string} id
 * @property {string} fakultet_id
 * @property {string} naziv
 * @property {string|null} short
 * @property {number|null} trajanje_god
 * @property {number|null} upisnih_mjesta
 * @property {string} tip_upisa          - 'klasicni' | 'elim_test' | 'audicija' | 'matura'
 * @property {string} tip_upisa_label
 * @property {number} popularnost
 * @property {string|null} opis
 * @property {string[]} predmeti
 * @property {string[]} gradivo
 * @property {string|null} napomena
 * @property {string|null} prijava_od
 * @property {string|null} prijava_do
 * @property {string|null} prijava_do_iso
 * @property {string|null} ispit
 * @property {string|null} ispit_iso
 * @property {string|null} cijena
 * @property {Kalk|null} kalk
 * @property {string} fak_short
 * @property {string} fak_name
 * @property {string} grad
 * @property {string|null} sym
 * @property {string} color
 * @property {string|null} glyph_bg
 * @property {string|null} web_url
 * @property {number|null} prag_2025
 * @property {number|null} prag_2024
 * @property {number|null} prag_2023
 */

/**
 * @typedef {Object} Fakultet
 * @property {string} id
 * @property {string} short
 * @property {string} name
 * @property {string} grad
 * @property {string|null} sveuciliste
 * @property {string|null} sym
 * @property {string} color
 * @property {string|null} glyph_bg
 * @property {string|null} web_url
 * @property {string|null} opis
 * @property {number} sort_order
 * @property {Studij[]} studiji
 */

/**
 * @typedef {Object} PragHistoryRow
 * @property {number} godina
 * @property {number|null} prag
 * @property {number|null} prijavljenih
 * @property {number|null} upisanih
 */

/**
 * One data row scraped from an external source before staging/matching.
 *
 * @typedef {Object} ScrapedRow
 * @property {string}                  studij_naziv   - Raw study programme name from the source (e.g. "Medicina")
 * @property {string}                  fakultet_hint  - Raw string that hints at the faculty (for matching)
 * @property {number}                  godina         - Academic year the data refers to
 * @property {number|null}             prag           - Admission threshold score, or null if unknown
 * @property {number|null}             [prijavljenih] - Number of applicants (optional)
 * @property {number|null}             [upisanih]     - Number enrolled (optional)
 * @property {Record<string, any>}     raw_payload    - Full raw payload kept for debugging
 */

/**
 * A pluggable scraper source.
 *
 * @typedef {Object} ScraperSource
 * @property {string}                        name   - Unique machine identifier (e.g. "azvo_upisi")
 * @property {string}                        label  - Human-readable label (e.g. "AZVO Upisna statistika")
 * @property {string}                        url    - Base URL that is scraped
 * @property {() => Promise<ScrapedRow[]>}   run    - Execute the scrape and return rows
 */

export {}
