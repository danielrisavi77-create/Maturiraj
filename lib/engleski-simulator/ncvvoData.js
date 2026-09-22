/**
 * ncvvoData.js — službeni NCVVO podaci o ispitu iz Engleskoga jezika na državnoj maturi.
 *
 * Sadrži ISKLJUČIVO brojke koje su doslovno preuzete iz objavljenih NCVVO-ovih
 * dokumenata. Ništa se ne interpolira, ne zaokružuje na "lijepu" vrijednost i ne
 * procjenjuje. Godina za koju NCVVO nije objavio podatak ovdje ne postoji.
 *
 * Što JEST dostupno: prosječna postotna riješenost ispita (aritmetička sredina
 * ukupnoga rezultata preračunatoga na skalu postotnih bodova), zasebno za višu
 * (A) i osnovnu (B) razinu, za ljetni rok.
 *
 * Što NIJE dostupno i zato ovdje ne postoji:
 *   - postotak prolaznosti po predmetu i razini — NCVVO ga u izvještajima i
 *     statističko-psihometrijskim analizama ne objavljuje kao brojku po ispitu;
 *   - raspodjela ocjena 1–5 po predmetu i razini — u izvještajima postoji samo
 *     kao grafika bez brojčane tablice, pa se ne može pouzdano pročitati.
 * Kartice koje su te dvije veličine prikazivale uklonjene su iz analitike.
 *
 * Izvori (dohvaćeno 2026-09-23; sve su stranice brojevi otisnuti u dokumentu):
 *   2017./2018. — Statistička i psihometrijska analiza ispita državne mature u
 *     šk. god. 2017./2018.
 *     https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2017-2018/
 *     PDF: https://www.ncvvo.hr/wp-content/uploads/2019/06/Statisti%C4%8Dka-i-psihometrijska-analiza-ispita-DM-2017_2018-finale-web.pdf
 *     Tablica 20., str. 48 (viša razina) i Tablica 24., str. 55 (osnovna razina).
 *   2018./2019. — Statistička i psihometrijska analiza ispita državne mature u
 *     šk. god. 2018./2019.
 *     https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2018-2019/
 *     PDF: https://www.ncvvo.hr/wp-content/uploads/2020/06/Statisticki-i-psihometrijski-izvjestaj-DM-018_2019-za-web-NOVO.pdf
 *     Tablica 20., str. 41 (viša razina) i Tablica 24., str. 48 (osnovna razina).
 *   2020./2021. — Statistička i psihometrijska analiza ispita državne mature u
 *     šk. god. 2020./2021.
 *     https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2020-2021/
 *     PDF: https://www.ncvvo.hr/wp-content/uploads/2022/03/NCVVO-Psihometrijska-analiza-2021_12_2021.pdf
 *     Tablica 27., str. 50 (viša razina) i Tablica 34., str. 56 (osnovna razina).
 *   2021./2022. — Statistička i psihometrijska analiza ispita državne mature u
 *     šk. god. 2021./2022.
 *     https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2021-2022/
 *     PDF: https://www.ncvvo.hr/wp-content/uploads/2023/07/Statisticka-i-psihometrijska-analiza-DM-21_22.pdf
 *     str. 26 (viša razina) i str. 29 (osnovna razina), tablice „Osnovni
 *     statistički pokazatelji”.
 *
 * Godine koje nedostaju i zašto:
 *   2019./2020. — analiza je najavljena, ali PDF nije javno povezan ni s jedne
 *     stranice NCVVO-a (ni s arhive „Izvještaji državne mature”).
 *   2022./2023., 2023./2024., 2024./2025. — NCVVO na dan dohvata nije objavio
 *     statističko-psihometrijsku analizu ni izvještaj s tim podatcima.
 *   do 2016./2017. — izvještaji postoje, ali prosječnu riješenost donose samo kao
 *     sliku (graf) ili razred vrijednosti („61 – 75 %”), bez brojke po ispitu.
 */

/** Ključ = kalendarska godina ljetnoga roka (npr. 2022 = ljetni rok 2022., šk. god. 2021./2022.). */
export const NCVVO_ENG_AVG = {
  2018: {
    schoolYear: '2017./2018.',
    visa: 73.4,
    osnovna: 56.1,
    sourceLabel: 'NCVVO — Statistička i psihometrijska analiza 2017./2018.',
    sourceUrl: 'https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2017-2018/',
    pdfUrl: 'https://www.ncvvo.hr/wp-content/uploads/2019/06/Statisti%C4%8Dka-i-psihometrijska-analiza-ispita-DM-2017_2018-finale-web.pdf',
    page: 'Tablica 20., str. 48 (A) · Tablica 24., str. 55 (B)',
  },
  2019: {
    schoolYear: '2018./2019.',
    visa: 77.45,
    osnovna: 61.93,
    sourceLabel: 'NCVVO — Statistička i psihometrijska analiza 2018./2019.',
    sourceUrl: 'https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2018-2019/',
    pdfUrl: 'https://www.ncvvo.hr/wp-content/uploads/2020/06/Statisticki-i-psihometrijski-izvjestaj-DM-018_2019-za-web-NOVO.pdf',
    page: 'Tablica 20., str. 41 (A) · Tablica 24., str. 48 (B)',
  },
  2021: {
    schoolYear: '2020./2021.',
    visa: 75.5,
    osnovna: 62.77,
    sourceLabel: 'NCVVO — Statistička i psihometrijska analiza 2020./2021.',
    sourceUrl: 'https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2020-2021/',
    pdfUrl: 'https://www.ncvvo.hr/wp-content/uploads/2022/03/NCVVO-Psihometrijska-analiza-2021_12_2021.pdf',
    page: 'Tablica 27., str. 50 (A) · Tablica 34., str. 56 (B)',
  },
  2022: {
    schoolYear: '2021./2022.',
    visa: 80.57,
    osnovna: 69.19,
    sourceLabel: 'NCVVO — Statistička i psihometrijska analiza 2021./2022.',
    sourceUrl: 'https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2021-2022/',
    pdfUrl: 'https://www.ncvvo.hr/wp-content/uploads/2023/07/Statisticka-i-psihometrijska-analiza-DM-21_22.pdf',
    page: 'str. 26 (A) · str. 29 (B)',
  },
}

/** Datum dohvata svih gornjih podataka. */
export const NCVVO_FETCHED_AT = '2026-09-23'

/**
 * Rastavlja ključ ispita simulatora na godinu i razinu.
 * Ključevi su oblika `2022_ljeto` (osnovna razina) ili `vis_2022_ljeto` (viša razina).
 * @param {string} examKey
 * @returns {{ year: number, razina: 'visa'|'osnovna' } | null}
 */
export function parseExamKey(examKey) {
  if (typeof examKey !== 'string') return null
  const m = /^(vis_)?(\d{4})_/.exec(examKey)
  if (!m) return null
  return { year: Number(m[2]), razina: m[1] ? 'visa' : 'osnovna' }
}

/**
 * Službeni prosjek riješenosti za ispit zadan ključem simulatora.
 * Vraća `null` kad NCVVO za tu godinu/razinu nema objavljen podatak.
 * @param {string} examKey
 */
export function getNcvvoAvg(examKey) {
  const parsed = parseExamKey(examKey)
  if (!parsed) return null
  const row = NCVVO_ENG_AVG[parsed.year]
  if (!row) return null
  const avg = row[parsed.razina]
  if (typeof avg !== 'number') return null
  return {
    year: parsed.year,
    razina: parsed.razina,
    razinaLabel: parsed.razina === 'visa' ? 'viša razina (A)' : 'osnovna razina (B)',
    avg,
    schoolYear: row.schoolYear,
    sourceLabel: row.sourceLabel,
    sourceUrl: row.sourceUrl,
    pdfUrl: row.pdfUrl,
    page: row.page,
  }
}

/**
 * Iz povijesti rješavanja bira najnoviji unos za koji postoji službeni NCVVO podatak
 * i računa korisnikov prosjek na ispitima iste razine.
 * @param {Array<{ pct: number, examKey?: string }>} history
 */
export function pickNcvvoComparison(history) {
  if (!Array.isArray(history) || history.length === 0) return null
  for (let i = history.length - 1; i >= 0; i--) {
    const ref = getNcvvoAvg(history[i]?.examKey)
    if (!ref) continue
    const sameLevel = history.filter(h => parseExamKey(h?.examKey)?.razina === ref.razina)
    if (sameLevel.length === 0) continue
    const userAvg = Math.round(sameLevel.reduce((s, h) => s + h.pct, 0) / sameLevel.length)
    return { ...ref, userAvg, sampleSize: sameLevel.length }
  }
  return null
}
