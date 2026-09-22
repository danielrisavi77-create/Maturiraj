/**
 * ncvvoData.js — službeni NCVVO podaci o ispitu iz Engleskoga jezika na državnoj maturi.
 *
 * Sadrži ISKLJUČIVO brojke koje su doslovno preuzete iz objavljenih NCVVO-ovih
 * dokumenata. Ništa se ne interpolira, ne zaokružuje na "lijepu" vrijednost i ne
 * procjenjuje. Godina za koju NCVVO nije objavio podatak ovdje ne postoji.
 *
 * Što JEST dostupno: prosječna postotna riješenost ispita (aritmetička sredina
 * ukupnoga rezultata preračunatoga na skalu postotnih bodova), zasebno za višu
 * (A) i osnovnu (B) razinu, ISKLJUČIVO za LJETNI rok.
 *
 * ZAŠTO SAMO LJETNI ROK. Glavni dio svake analize izrijekom obrađuje pristupanja
 * u ljetnome roku; jesenski rok ide u zaseban dodatak s vlastitim tablicama i
 * bitno drukčijom populacijom (uglavnom ponavljači). Razlika nije zanemariva:
 * u šk. god. 2019./2020. ljetni rok daje 78,26 (A) i 63,44 (B), a jesenski rok
 * iste godine 66,0 (A) i 41,0 (B) — „Dodatak 2 – Ispiti u jesenskome roku”,
 * otisnute str. 162 i 164. Zato `getNcvvoAvg` za ključeve `*_jesen`, `*_zima`,
 * `*_prvi` i `*_drugi` vraća `null` umjesto da im podmetne ljetnu brojku.
 *
 * Izvori (dohvaćeno i provjereno 2026-09-23 izravno iz tekstualnoga sloja PDF-a;
 * sve su stranice brojevi otisnuti u dokumentu):
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
 *   2019./2020. — Statistička i psihometrijska analiza ispita državne mature u
 *     šk. god. 2019./2020. (objava 5. 3. 2021.)
 *     https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2019-2020/
 *     PDF: https://www.ncvvo.hr/wp-content/uploads/2021/03/Statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-19-20.pdf
 *     Tablica 28., str. 46 (viša razina, 16 969 učenika) i Tablica 36., str. 52
 *     (osnovna razina, 10 398 učenika).
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
 *   2022./2023., 2023./2024., 2024./2025. — NCVVO na dan dohvata nije objavio
 *     statističko-psihometrijsku analizu ni izvještaj s tim podatcima.
 *   do 2016./2017. — izvještaji postoje, ali prosječnu riješenost donose samo kao
 *     sliku (graf) ili razred vrijednosti („61 – 75 %”), bez brojke po ispitu.
 *
 * Prolaznost i raspodjela ocjena 1–5 i dalje NISU ovdje, ali NE zato što ih se
 * „ne može pouzdano pročitati” — ta je ranija tvrdnja bila netočna i ovime se
 * povlači. Stvarno stanje, provjereno po svih pet PDF-ova: NCVVO te veličine
 * objavljuje samo kao sliku „Raspodjela školskih ocjena i ocjena u ispitu”, a
 * njezine oznake u tekstualnome sloju postoje SAMO za dio godina i razina —
 * npr. 2017./2018. viša razina, Slika 20., otisnuta str. 53, stupac OCJENA DM:
 * nedovoljan 1,7 %, dovoljan 10,3 %, dobar 31,3 %, vrlo dobar 32,8 %, odličan
 * 21,8 % (prolaznost je onda 100 − 1,7 = 98,3 %). Za 2018./2019. (viša) i za
 * cijelu 2021./2022. te oznake u tekstualnome sloju ne postoje, pa se niz ne
 * može složiti za sve godine koje ovaj modul pokriva. Kartice koje su te dvije
 * veličine prikazivale ostaju uklonjene dok niz ne bude potpun; kad se dopuni,
 * dodaje se ovdje s istim pravilom citiranja kao i prosjek.
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
  2020: {
    schoolYear: '2019./2020.',
    visa: 78.26,
    osnovna: 63.44,
    sourceLabel: 'NCVVO — Statistička i psihometrijska analiza 2019./2020.',
    sourceUrl: 'https://www.ncvvo.hr/statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-u-sk-god-2019-2020/',
    pdfUrl: 'https://www.ncvvo.hr/wp-content/uploads/2021/03/Statisticka-i-psihometrijska-analiza-ispita-drzavne-mature-19-20.pdf',
    page: 'Tablica 28., str. 46 (A) · Tablica 36., str. 52 (B)',
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

/** Jedini rok za koji NCVVO objavljuje brojke iz `NCVVO_ENG_AVG`. */
export const NCVVO_SEASON = 'ljeto'

/** U prosjek ulaze samo ispiti riješeni u ispitnim uvjetima (bez „Provjeri” i objašnjenja). */
export const NCVVO_COMPARABLE_MODE = 'simulacija'

/**
 * Rastavlja ključ ispita simulatora na godinu, rok i razinu.
 * Ključevi su oblika `2022_ljeto` (osnovna razina) ili `vis_2022_ljeto` (viša razina);
 * rok je `ljeto`, `jesen`, `zima` ili (za 2024.) `prvi` / `drugi`.
 * @param {string} examKey
 * @returns {{ year: number, season: string, razina: 'visa'|'osnovna' } | null}
 */
export function parseExamKey(examKey) {
  if (typeof examKey !== 'string') return null
  const m = /^(vis_)?(\d{4})_([a-z]+)$/.exec(examKey)
  if (!m) return null
  return { year: Number(m[2]), season: m[3], razina: m[1] ? 'visa' : 'osnovna' }
}

/**
 * Službeni prosjek riješenosti za ispit zadan ključem simulatora.
 * Vraća `null` kad NCVVO za tu godinu/razinu nema objavljen podatak ili kad
 * ispit nije iz ljetnoga roka — jesenski i zimski rok imaju vlastitu populaciju
 * i vlastite brojke, pa im se ljetni prosjek ne smije pripisati.
 * @param {string} examKey
 */
export function getNcvvoAvg(examKey) {
  const parsed = parseExamKey(examKey)
  if (!parsed) return null
  if (parsed.season !== NCVVO_SEASON) return null
  const row = NCVVO_ENG_AVG[parsed.year]
  if (!row) return null
  const avg = row[parsed.razina]
  if (typeof avg !== 'number') return null
  return {
    year: parsed.year,
    season: parsed.season,
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
 * Korisnikov rezultat na NCVVO-ovoj skali, iz zapisa povijesti.
 *
 * NIJE `h.pct`: `pct` je udio točnih auto-ocjenjivih pitanja (cor / autoQ.length),
 * pa Čitanje i Slušanje zbraja po broju pitanja umjesto po NCVVO ponderima
 * (0,4 : 0,3 na osnovnoj, 1/3 : 1/3 na višoj). Usporediva je veličina
 * `weightedEstimate()` iz `examStructure.js`, koju simulator sprema u zapis
 * povijesti kao `weighted`. Zapisi stariji od te izmjene nemaju je i zato se u
 * usporedbu ne uzimaju — radije nema kartice nego kriva brojka.
 *
 * @param {{ weighted?: number | { pct?: number } }} entry
 * @returns {number|null}
 */
export function comparablePct(entry) {
  const w = entry && entry.weighted
  if (typeof w === 'number') return w
  if (w && typeof w.pct === 'number') return w.pct
  return null
}

/**
 * Iz povijesti rješavanja bira najnoviji unos za koji postoji službeni NCVVO podatak
 * i računa korisnikov prosjek na ispitima ISTE godine i razine.
 *
 * U obzir dolaze samo zapisi koji su usporedivi sa službenom brojkom:
 *   - `mode === 'simulacija'` (u načinu vježbanja korisnik vidi rješenje prije predaje);
 *   - ljetni rok (`getNcvvoAvg` odbija ostale rokove);
 *   - postoji `weighted` (rezultat po NCVVO ponderima).
 * Prosjek se ne miješa kroz godine: ispit iz 2013. ne ulazi u usporedbu s
 * državnim prosjekom za 2022.
 *
 * @param {Array<{ pct: number, weighted?: number|{pct?: number}, mode?: string, examKey?: string }>} history
 */
export function pickNcvvoComparison(history) {
  if (!Array.isArray(history) || history.length === 0) return null
  const usable = history.filter(h =>
    h && h.mode === NCVVO_COMPARABLE_MODE && comparablePct(h) !== null && getNcvvoAvg(h.examKey))
  if (usable.length === 0) return null

  const ref = getNcvvoAvg(usable[usable.length - 1].examKey)
  const same = usable.filter(h => {
    const p = parseExamKey(h.examKey)
    return p && p.razina === ref.razina && p.year === ref.year
  })
  const userAvg = Math.round(same.reduce((s, h) => s + comparablePct(h), 0) / same.length)
  return { ...ref, userAvg, sampleSize: same.length }
}
