import { P00A_HTML as matNizaPp00aHtml } from './p00a'
import { P00B_HTML as matNizaPp00bHtml } from './p00b'
import { P01_HTML as matNizaPp01Html } from './p01'
import { P02_HTML as matNizaPp02Html } from './p02'
import { P03_HTML as matNizaPp03Html } from './p03'
import { P04_HTML as matNizaPp04Html } from './p04'
import { P05_HTML as matNizaPp05Html } from './p05'
import { P06_HTML as matNizaPp06Html } from './p06'
import { P07_HTML as matNizaPp07Html } from './p07'
import { P08_HTML as matNizaPp08Html } from './p08'
import { P09_HTML as matNizaPp09Html } from './p09'
import { P10_HTML as matNizaPp10Html } from './p10'
import { P11_HTML as matNizaPp11Html } from './p11'
import { P12_HTML as matNizaPp12Html } from './p12'
import { P13_HTML as matNizaPp13Html } from './p13'
import { P14_HTML as matNizaPp14Html } from './p14'
import { P15_HTML as matNizaPp15Html } from './p15'
import { P16_HTML as matNizaPp16Html } from './p16'
import { P17_HTML as matNizaPp17Html } from './p17'
import { P18_HTML as matNizaPp18Html } from './p18'
import { P19_HTML as matNizaPp19Html } from './p19'

export const MAT_NIZA_POGLAVLJA_META = [
  { id: 'p00a', broj: 0, blok: 0, blokNaziv: 'Uvod', kategorija: 'Uvod', naslov: 'Uvod u maturu', opis: 'Navigacija · struktura · što očekivati', implemented: true },
  { id: 'p00b', broj: 0, blok: 0, blokNaziv: 'Uvod', kategorija: 'Uvod', naslov: 'Kalkulator i alati', opis: 'Dopušteni alati · bodovanje · strategija pristupa', implemented: true },
  { id: 'p01', broj: 1, blok: 1, blokNaziv: 'Osnove', kategorija: 'Osnove', naslov: 'Skupovi i brojevi', opis: 'Skupovi · ℕℤℚℝ · apsolutna vrijednost · intervali', implemented: true },
  { id: 'p02', broj: 2, blok: 1, blokNaziv: 'Osnove', kategorija: 'Osnove', naslov: 'Razlomci i postoci', opis: 'Skraćivanje · operacije · postoci · omjeri', implemented: true },
  { id: 'p03', broj: 3, blok: 1, blokNaziv: 'Osnove', kategorija: 'Osnove', naslov: 'Potencije i korijeni', opis: 'Zakoni potencija · racionalni eksponenti · korijeni', implemented: true },
  { id: 'p04', broj: 4, blok: 1, blokNaziv: 'Osnove', kategorija: 'Osnove', naslov: 'Algebarski izrazi', opis: 'Faktorizacija · polinomi · racionalni izrazi', implemented: true },
  { id: 'p05', broj: 5, blok: 2, blokNaziv: 'Jednadžbe', kategorija: 'Jednadžbe', naslov: 'Linearne jednadžbe', opis: 'Jednadžbe prvog stupnja · tekstualni zadaci', implemented: true },
  { id: 'p06', broj: 6, blok: 2, blokNaziv: 'Jednadžbe', kategorija: 'Jednadžbe', naslov: 'Kvadratne jednadžbe', opis: 'Diskriminanta · Vièteove formule · faktorizacija', implemented: true },
  { id: 'p07', broj: 7, blok: 2, blokNaziv: 'Jednadžbe', kategorija: 'Jednadžbe', naslov: 'Sustavi jednadžbi', opis: 'Supstitucija · eliminacija · grafička metoda', implemented: true },
  { id: 'p08', broj: 8, blok: 3, blokNaziv: 'Funkcije', kategorija: 'Funkcije', naslov: 'Linearna funkcija', opis: 'Graf · nagib · y-os · jednadžba pravca', implemented: true },
  { id: 'p09', broj: 9, blok: 3, blokNaziv: 'Funkcije', kategorija: 'Funkcije', naslov: 'Kvadratna funkcija', opis: 'Parabola · tjeme · nultočke · diskriminanta', implemented: true },
  { id: 'p10', broj: 10, blok: 3, blokNaziv: 'Funkcije', kategorija: 'Funkcije', naslov: 'Eksponencijalna i logaritam', opis: 'aˣ · logₐ(x) · ln · zakoni logaritama · jednadžbe', implemented: true },
  { id: 'p11', broj: 11, blok: 4, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Vektori', opis: 'Zbrajanje · skalarni produkt · duljina · kut', implemented: true },
  { id: 'p12', broj: 12, blok: 4, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Trigonometrija', opis: 'sin · cos · tan · kružnica · identiteti · jednadžbe', implemented: true },
  { id: 'p13', broj: 13, blok: 4, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Geometrija ravnine', opis: 'Trokut · poligoni · kružnica · površine', implemented: true },
  { id: 'p14', broj: 14, blok: 4, blokNaziv: 'Geometrija', kategorija: 'Geometrija', naslov: 'Geometrija prostora', opis: 'Tijela · volumen · oplošje · Pitagorin poučak 3D', implemented: true },
  { id: 'p15', broj: 15, blok: 5, blokNaziv: 'Kombinatorika', kategorija: 'Kombinatorika', naslov: 'Kombinatorika', opis: 'Permutacije · kombinacije · binomni poučak', implemented: true },
  { id: 'p16', broj: 16, blok: 5, blokNaziv: 'Kombinatorika', kategorija: 'Kombinatorika', naslov: 'Statistika', opis: 'Srednje vrijednosti · disperzija · grafički prikazi', implemented: true },
  { id: 'p17', broj: 17, blok: 5, blokNaziv: 'Kombinatorika', kategorija: 'Kombinatorika', naslov: 'Nizovi i redovi', opis: 'Aritmetički · geometrijski niz · suma · granica', implemented: true },
  { id: 'p18', broj: 18, blok: 6, blokNaziv: 'Financijska mat.', kategorija: 'Financijska mat.', naslov: 'Financijska matematika', opis: 'Kamate · krediti · anuiteti · ulaganja', implemented: true },
  { id: 'p19', broj: 19, blok: 7, blokNaziv: 'Bonus', kategorija: 'Bonus', naslov: 'Tips & Tricks za maturu', opis: 'Strategija ispita · top greške · zadnji tjedan · exam tips', implemented: true },
]

export const MAT_NIZA_RAZINA = {
  id: 'niza',
  label: 'B razina (niža)',
  poglavlja: MAT_NIZA_POGLAVLJA_META,
  chapters: {
    'p00a': matNizaPp00aHtml,
    'p00b': matNizaPp00bHtml,
    'p01': matNizaPp01Html,
    'p02': matNizaPp02Html,
    'p03': matNizaPp03Html,
    'p04': matNizaPp04Html,
    'p05': matNizaPp05Html,
    'p06': matNizaPp06Html,
    'p07': matNizaPp07Html,
    'p08': matNizaPp08Html,
    'p09': matNizaPp09Html,
    'p10': matNizaPp10Html,
    'p11': matNizaPp11Html,
    'p12': matNizaPp12Html,
    'p13': matNizaPp13Html,
    'p14': matNizaPp14Html,
    'p15': matNizaPp15Html,
    'p16': matNizaPp16Html,
    'p17': matNizaPp17Html,
    'p18': matNizaPp18Html,
    'p19': matNizaPp19Html,
  },
}
