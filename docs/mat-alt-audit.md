# Audit alt varijanti (matematika)

Predmet: `content/simulator/mat/exams/*.mjs`, polje `sol.alt`.
Alat: `npx tsx scripts/mat-grading-report.mjs` (provjera KANON — varijante koje
normalizator ne izjednačuje sa `sol.ans`).

Nakon proširenja normalizatora ostalo je **1696** neizjednačenih alt varijanti od
17169 u 70 ispita. Ovaj audit prošao je sve, po ispitu, i za svaki par
(`sol.ans`, `alt`) odlučio: ostaviti, ukloniti ili ostaviti uz bilješku.

Pravilo: **u sumnji ostavi.** Ne dira se `sol.ans`, `steps`, `why` ni tekst pitanja.
Uklanja se samo ono što nijedan učenik ne bi napisao kao točan odgovor.

## Brojke

| | |
|---|---|
| pregledano neizjednačenih varijanti | 1696 |
| uklonjeno | 132 |
| ostavljeno | 1564 |
| zabilježeno za ručnu odluku (ostavljeno) | 15 |
| ispita dirnuto | 16 |
| zadataka dirnuto | 68 |

Kontrolni brojevi nakon zahvata: KANON 1696 → **1564**, UGOVOR (varijante koje
`isAnswerCorrect` ne prihvaća) ostao **0**, prazne alt varijante ostale **3**
(nepromijenjene: 2018_jesen_B q27.3, 2018_ljeto_B q25.1, 2018_ljeto_B q26.1).
`node scripts/mat-audit-figures.mjs` nepromijenjen (flagged=580, missing=0, orphan=0).

## Uklonjeno

### A. Prazni placeholderi (113 varijanti, 62 zadatka)

Riječi koje su ostale iz generiranja podataka, a ne opisuju nikakav odgovor.
Bile su u alt listi pa ih je `isAnswerCorrect` prihvaćao kao točan odgovor —
učenik koji upiše "odgovor" dobio bi bod.

| vrijednost | broj | ispiti |
|---|---|---|
| `odgovor` | 41 | 2010_jesen_B, 2010_ljeto_B, 2011_zima_B, 2012_zima_B, 2015_ljeto_A, 2016_ljeto_B, 2017_jesen_A, 2018_jesen_A |
| `rezultat` | 33 | isti skup |
| `alt` | 17 | 2017_jesen_A, 2017_ljeto_A |
| `drugi` | 12 | 2017_jesen_A, 2017_ljeto_A |
| `rješenje` | 3 | 2017_jesen_A, 2017_ljeto_A, 2018_jesen_A |
| `drugo` | 1 | 2017_ljeto_A |
| `drugi format` | 2 | 2017_ljeto_A q23.1, q23.2 |
| `alt format` | 1 | 2017_ljeto_A q21.1 |
| `alternativan oblik` | 1 | 2017_ljeto_A q20.2 |
| `provjeri` | 1 | 2017_ljeto_A q21.1 |
| `∜+` | 1 | 2016_ljeto_A q16 (`sol.ans` "72", niz znakova bez značenja) |

### B. Matematički krive varijante (19 varijanti, 8 zadataka)

Svaka je ručno provjerena uz `steps` i `why` istog zadatka.

| ispit | id | `sol.ans` | uklonjeni alt | razlog |
|---|---|---|---|---|
| 2011_jesen_B | 27.2 | `4` | `4/8` | pitanje traži BROJ županija; `4/8` = 0,5 je omjer, a kroz normalizator bi prošlo i `1/2`. Koraci: "Ukupno: 4 županije". Formulacija `4 županije od 8` ostaje. |
| 2012_jesen_A | 18.1 | `3` | `a = −3/4`, `−3/4` (2×), `a=−0,75`, `a = −0,75` | zbroj rješenja po Vièteu je 3; `−3/4` je upala iz drugog zadatka i proturječi i `sol.ans` i koracima |
| 2012_jesen_A | 24.1 | `60` | `a = 2`, `a=2`, `2` | traži se koeficijent uz x² u (2x+1)⁶ = 60; `2` je baza iz zadatka, ne odgovor |
| 2012_ljeto_A | 19.2 | `57` | `y = 9/(k+1)`, `y = 9 / (k + 1)`, `9/(k+1)` | upala iz zadatka 19.1; ovdje je odgovor dvoznamenkasti broj 57 |
| 2015_jesen_B | 25.2 | `2022. godine` | `12` | `why` istog zadatka izrijekom navodi `12` kao tipičnu grešku ("miješati 'koja godina' s 't' — npr. odgovoriti '12' umjesto '2022.'") |
| 2018_jesen_B | 20.2 | `0,02` | `0,0` (2×), `0` | razlika je 15 − 14,98 = 0,02; `0` je upravo zabluda koju zadatak ispituje |
| 2018_jesen_B | 21.1 | `7/10` | `1/7`, `0,14` | rješenje je x = 7/10 = 0,7; 1/7 ≈ 0,143 je zamijenjen brojnik i nazivnik. Oblici `0,7` i `7/10` ostaju. Uz uklanjanje altova ispravljen je i `sol.solFormula` (prikazivao je `x = 1/7`, sada `x = 7/10`) — inače bi ekran s rješenjem prikazivao odgovor koji se ocjenjuje kao netočan. |
| 2019_ljeto_A | 25.1 | `≈5,30 cm` | `7−13/2` | pokvaren zapis od (7+√13)/2; kako stoji daje 0,5 |

## Ostavljeno uz bilješku — za ručnu odluku (15 varijanti)

Nisu uklonjene jer je svaka obranjiva; vrijedi ih pregledati okom.

| ispit | id | `sol.ans` | alt | bilješka |
|---|---|---|---|---|
| 2010_ljeto_A | 28a | `20 000` | `20,000` | engleski separator tisućica; po hrvatskoj konvenciji `20,000` znači 20 |
| 2011_jesen_B | 27.1 | `450 000` | `420 000`, `440 000`, `480 000`, `490 000` | namjerna tolerancija očitanja s grafikona ("NCVVO ključ: prihvaća se INTERVAL odgovora") — izgleda kao greška, ali nije |
| 2012_ljeto_A | 22.1 | `x = −2/3` | `2/3`, `x=2/3` | `why` kaže da je službeni ključ vjerojatno typo i da se namjerno prihvaćaju obje vrijednosti |
| 2015_jesen_B | 19 | `(15−√201)/2 ≈ 0,411` | `0,42` | krivo zaokruženo (točno je 0,4113 → 0,41) |
| 2018_jesen_B | 20.2 | `0,02` | `−0,02` | obrnut predznak razlike; učenik koji računa 14,98 − 15 dobije isti iznos |
| 2024_jesen_A | 33.1 | `graf sinusoide amplitude 4, perioda π` | `ok` | zadatak s crtanjem grafa, alt lista je namjerno popustljiva |
| 2024_ljeto_B | 22.2 | `62/283 ≈ 0,2191` | `31/92`, `0,337`, `0,33`, `0,34`, `248/736` | drugo tumačenje zadatka (nazivnik 736 = ukupno grozdova), izrijekom opisano u `why` |

## Kako je audit proveden

1. `scripts/mat-grading-report.mjs` dao je svih 1696 parova (ispit, id, `sol.ans`, alt)
   zajedno s normaliziranim oblicima.
2. Automatska klasifikacija po klasama: prazni placeholderi (107), numerički sukob
   (109 — obje strane izračunljive i različite vrijednosti), zaokruživanje (92), ostalo (1388).
3. Detektor unakrsne kontaminacije: isti alt na dva zadatka istog ispita s različitim
   `sol.ans` (tako su nađeni 2012_jesen_A q18.1/q24.1 i 2012_ljeto_A q19.2).
4. Svaki slučaj iz klase "numerički sukob" i iz detektora kontaminacije otvoren je
   ručno uz tekst pitanja, `steps` i `why`; uklonjeno je samo ono gdje alt proturječi
   i rješenju i koracima.
5. Klasa "ostalo" (tekstualne formulacije, algebarska preslagivanja, jedinice, zapisi
   kutova, intervali) ostaje netaknuta — to su legitimni oblici koje normalizator ne
   može pokriti, a ne greške u podacima.
