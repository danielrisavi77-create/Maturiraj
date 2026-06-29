// ── HOW TO ADD A NEW CHAPTER ──────────────────────────────────────────────────
// All chapters are HTML strings exported as `html` from their module.
//
// 1. Edit the file in this folder (p01.js, p02.js, etc.)
// 2. Set implemented: true in MAT_VISA_POGLAVLJA_META for that chapter
// 3. The chapter will automatically appear in MatematikaViewer
// ─────────────────────────────────────────────────────────────────────────────

import { html as matP00AHtml } from './p00a'
import { html as matP00BHtml } from './p00b'
import { html as matP01Html } from './p01'
import { html as matP02Html } from './p02'
import { html as matP03Html } from './p03'
import { html as matP04Html } from './p04'
import { html as matP05Html } from './p05'
import { html as matP06Html } from './p06'
import { html as matP07Html } from './p07'
import { html as matP08Html } from './p08'
import { html as matP09Html } from './p09'
import { html as matP10Html } from './p10'
import { html as matP11Html } from './p11'
import { html as matP12Html } from './p12'
import { html as matP13Html } from './p13'
import { html as matP14Html } from './p14'
import { html as matP15Html } from './p15'
import { html as matP16Html } from './p16'
import { html as matP17Html } from './p17'
import { html as matP18Html } from './p18'
import { html as matP19Html } from './p19'
import { html as matP20Html } from './p20'
import { html as matP21Html } from './p21'

// ── Blok struktura (sekcije se u pregledniku grupiraju po 'kategorija') ────────
// Uvod                     (p00a–p00b)
// Algebra i brojevi        (p01–p05)
// Funkcije                 (p06–p08)
// Geometrija               (p09–p13)
// Nizovi i kombinatorika   (p14–p15)
// Analiza                  (p16–p18)
// Sinteza i ponavljanje    (p19–p20)
// Vjerojatnost             (p21)
// ─────────────────────────────────────────────────────────────────────────────

export const MAT_VISA_POGLAVLJA_META = [
  { id: 'p00a', broj: 0,  blok: 0, blokNaziv: 'Uvod', kategorija: 'Uvod', naslov: 'Kako koristiti skripte', opis: 'Navigacija · struktura · što očekivati', implemented: true },
  { id: 'p00b', broj: 0,  blok: 0, blokNaziv: 'Uvod', kategorija: 'Uvod', naslov: 'Što te čeka na maturi', opis: 'Zadatci A · bodovanje · strategija pristupa', implemented: true },
  { id: 'p01',  broj: 1,  blok: 1, blokNaziv: 'Algebra i brojevi', kategorija: 'Algebra i brojevi', naslov: 'Skupovi, brojevi i |x|', opis: 'Skupovi · ℕℤℚℝ · apsolutna vrijednost · intervali', implemented: true },
  { id: 'p02',  broj: 2,  blok: 1, blokNaziv: 'Algebra i brojevi', kategorija: 'Algebra i brojevi', naslov: 'Potencije i korijeni', opis: 'Zakoni potencija · racionalni eksponenti · korijeni · racionalizacija', implemented: true },
  { id: 'p03',  broj: 3,  blok: 1, blokNaziv: 'Algebra i brojevi', kategorija: 'Algebra i brojevi', naslov: 'Algebarski izrazi', opis: 'Faktorizacija · polinomi · racionalni algebarski izrazi', implemented: true },
  { id: 'p04',  broj: 4,  blok: 1, blokNaziv: 'Algebra i brojevi', kategorija: 'Algebra i brojevi', naslov: 'Jednadžbe i nejednadžbe', opis: 'Linearne i kvadratne jednadžbe · sustavi · apsolutne vrijednosti', implemented: true },
  { id: 'p05',  broj: 5,  blok: 1, blokNaziv: 'Algebra i brojevi', kategorija: 'Algebra i brojevi', naslov: 'Kompleksni brojevi', opis: 'Imaginarna jedinica · algebarski i trigonometrijski oblik · konjugat · modul · De Moivre · korijeni', implemented: true },
  { id: 'p06',  broj: 6,  blok: 2, blokNaziv: 'Funkcije', kategorija: 'Funkcije', naslov: 'Funkcije — uvod', opis: 'Domene · kodomena · parnost · monotonija · kompozicija · inverz', implemented: true },
  { id: 'p07',  broj: 7,  blok: 2, blokNaziv: 'Funkcije', kategorija: 'Funkcije', naslov: 'Kvadratna funkcija', opis: 'Parabola · tjeme · nultočke · diskriminanta · grafovi', implemented: true },
  { id: 'p08',  broj: 8,  blok: 2, blokNaziv: 'Funkcije', kategorija: 'Funkcije', naslov: 'Eksponencijalna i logaritam', opis: 'aˣ · log_a(x) · ln · zakoni logaritama · jednadžbe', implemented: true },
  { id: 'p09',  broj: 9,  blok: 3, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Trigonometrija', opis: 'sin · cos · tan · jedinična kružnica · jednadžbe · adicijske formule', implemented: true },
  { id: 'p10',  broj: 10, blok: 3, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Analitička geometrija', opis: 'Pravac · kružnica · tangenta · udaljenost točke · presjek pravca i kružnice', implemented: true },
  { id: 'p11',  broj: 11, blok: 3, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Geometrija prostora', opis: 'Kvadar · kocka · piramida · stožac · kugla · oplošje i volumen', implemented: true },
  { id: 'p12',  broj: 12, blok: 3, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Vektori', opis: 'Komponente · duljina · skalarni i vektorski produkt · kut · okomitost', implemented: true },
  { id: 'p13',  broj: 13, blok: 3, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Planimetrija', opis: 'Trokut · površine · Pitagora · sinusov i kosinusov poučak · kružnica · obodni kut', implemented: true },
  { id: 'p14',  broj: 14, blok: 4, blokNaziv: 'Nizovi i kombinatorika', kategorija: 'Nizovi i kombinatorika', naslov: 'Nizovi i redovi', opis: 'Aritmetički i geometrijski nizovi · sume · limes niza · redovi', implemented: true },
  { id: 'p15',  broj: 15, blok: 4, blokNaziv: 'Nizovi i kombinatorika', kategorija: 'Nizovi i kombinatorika', naslov: 'Kombinatorika', opis: 'Permutacije · varijacije · kombinacije · binomni teorem', implemented: true },
  { id: 'p16',  broj: 16, blok: 5, blokNaziv: 'Analiza', kategorija: 'Analiza', naslov: 'Granice funkcija', opis: 'Limes funkcije · neodređeni oblici · asimptote · neprekidnost · L\'Hôpital', implemented: true },
  { id: 'p17',  broj: 17, blok: 5, blokNaziv: 'Analiza', kategorija: 'Analiza', naslov: 'Derivacije', opis: 'Derivacija · pravila deriviranja · lančano pravilo · tangenta · ekstremi', implemented: true },
  { id: 'p18',  broj: 18, blok: 5, blokNaziv: 'Analiza', kategorija: 'Analiza', naslov: 'Integrali', opis: 'Neodređeni i određeni integral · supstitucija · parcijalna integracija · površina', implemented: true },
  { id: 'p19',  broj: 19, blok: 6, blokNaziv: 'Sinteza i ponavljanje', kategorija: 'Sinteza i ponavljanje', naslov: 'Složeni maturalni zadaci', opis: 'Kombinirani A-razina zadaci · derivacije, integrali i geometrija', implemented: true },
  { id: 'p20',  broj: 20, blok: 6, blokNaziv: 'Sinteza i ponavljanje', kategorija: 'Sinteza i ponavljanje', naslov: 'Završna sistematizacija', opis: 'Mješoviti pregled cijelog gradiva · ponavljanje pred maturu', implemented: true },
  { id: 'p21',  broj: 21, blok: 7, blokNaziv: 'Vjerojatnost', kategorija: 'Vjerojatnost', naslov: 'Vjerojatnost', opis: 'Klasična · uvjetna vjerojatnost · Bayesov poučak · raspodjele', implemented: true },
]

export const MAT_VISA_RAZINA = {
  id: 'visa',
  label: 'A razina (viša)',
  poglavlja: MAT_VISA_POGLAVLJA_META,
  chapters: {
    'p00a': matP00AHtml,
    'p00b': matP00BHtml,
    'p01': matP01Html,
    'p02': matP02Html,
    'p03': matP03Html,
    'p04': matP04Html,
    'p05': matP05Html,
    'p06': matP06Html,
    'p07': matP07Html,
    'p08': matP08Html,
    'p09': matP09Html,
    'p10': matP10Html,
    'p11': matP11Html,
    'p12': matP12Html,
    'p13': matP13Html,
    'p14': matP14Html,
    'p15': matP15Html,
    'p16': matP16Html,
    'p17': matP17Html,
    'p18': matP18Html,
    'p19': matP19Html,
    'p20': matP20Html,
    'p21': matP21Html,
  },
}
