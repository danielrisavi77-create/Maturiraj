# Revizija slika u matematickom simulatoru

Datum izvjestaja: 2026-09-13

Ovaj dokument sazima reviziju svih SVG slika u ispitima matematike u simulatoru, provedenu usporedbom svake slike (svijetla i tamna tema) s izrezom iz originalnog PDF ispita. Za svaku sliku kod koje je pronadena razlika, napravljen je popravak na zasebnoj git grani (mat-sim/figures-<ispit>), u zasebnom git worktreeu, i commitan (bez pushanja na remote).

## Sazetak

- Ukupno ispita obradeno: **70**
- Ukupno slika u tim ispitima: **581**
- Slika bez primjedbi (identicne originalu ili bez pronadenog problema): **388**
- Slika sa potvrdenim razlikama od originala (sporno): **189**
  - od toga ozbiljnih razlika (severity wrong/major): **124**
  - od toga manjih/kozmetickih razlika (severity minor): **65**
- Slika popravljeno (commit s ispravkom postoji): **189**
- Slika kod kojih razlika nije popravljena (nema commita): **0**
- Slika koje ne pokazuju stvarnu razliku ali su oznacene za rucnu odluku (severity none): **4**

- Ispita bez ijedne primjedbe (sve slike vec ispravne): **21**
- Ispita s barem jednom primjedbom: **49**
  - od toga popravljeno (postoji commit s ispravkom): **49**
  - od toga bez popravka: **0**

Napomena: sve ispravke nalaze se na zasebnim git granama oblika mat-sim/figures-<ispit> u zasebnim worktreeovima (C:/Users/Daniel/worktrees/Maturiraj/mat-sim-figures-<ispit>) i nisu spojene na main niti pushane na GitHub. Za spajanje u produkciju potrebno je te grane pregledati i mergeati pojedinacno.

## Ispiti bez PDF-a izvornika

Nema ih. Svi obradeni ispiti imali su dostupan izvorni PDF za usporedbu (iako za pojedine slike u pojedinim ispitima izrezak iz PDF-a nije bio dostupan; to je zabiljezeno pojedinacno kod svake takve slike u komentarima commita).

## Slike koje traze rucnu odluku vlasnika

Ovo su slike kod kojih revizija nije nasla stvarnu geometrijsku/sadrzajnu razliku od originala, ali je nesto oko usporedbe bilo dvosmisleno (npr. originalni PDF nema uopce sliku pa je usporedba nemoguca, ili simulator namjerno prikazuje popunjeni odgovor umjesto praznog predloska iz PDF-a). Sadrzajno u ovim slikama nista nije mijenjano niti treba mijenjati, ali vlasnik moze zeljeti provjeriti odluku:

- **2018_jesen_B__28.1** (ispit 2018_jesen_B) - bez potrebe za popravkom slike (predlosci/prazni izresci razliciti od gotovih PDF slika)
- **2018_jesen_B__28.2** (ispit 2018_jesen_B) - bez potrebe za popravkom slike (predlosci/prazni izresci razliciti od gotovih PDF slika)
- **2018_jesen_B__28.3** (ispit 2018_jesen_B) - bez potrebe za popravkom slike (predlosci/prazni izresci razliciti od gotovih PDF slika)
- **2020_ljeto_B__23.1** (ispit 2020_ljeto_B) - bez potrebe za popravkom slike (predlosci/prazni izresci razliciti od gotovih PDF slika)

## Tablica po ispitu

| Ispit | Ukupno slika | Sporno | Status | Fix (grana / commit) |
|---|---:|---:|---|---|
| 2010_ljeto_A | 5 | 2 | Popravljeno | c996108 na grani mat-sim/figures-2010_ljeto_A |
| 2010_ljeto_B | 10 | 9 | Popravljeno | b88fbe1 na grani mat-sim/figures-2010_ljeto_B |
| 2010_jesen_A | 5 | 0 | Bez primjedbi |  |
| 2010_jesen_B | 12 | 1 | Popravljeno | 538d764 na mat-sim/figures-2010_jesen_B |
| 2010_zima_A | 2 | 0 | Bez primjedbi |  |
| 2010_zima_B | 10 | 9 | Popravljeno | 6e9b648 na grani mat-sim/figures-2010_zima_B |
| 2011_ljeto_A | 3 | 0 | Bez primjedbi |  |
| 2011_ljeto_B | 8 | 0 | Bez primjedbi |  |
| 2011_jesen_A | 4 | 0 | Bez primjedbi |  |
| 2011_jesen_B | 12 | 0 | Bez primjedbi |  |
| 2011_zima_A | 3 | 0 | Bez primjedbi |  |
| 2011_zima_B | 10 | 0 | Bez primjedbi |  |
| 2012_ljeto_A | 5 | 2 | Popravljeno | 628a888 on mat-sim/figures-2012_ljeto_A |
| 2012_ljeto_B | 6 | 0 | Bez primjedbi |  |
| 2012_jesen_A | 6 | 0 | Bez primjedbi |  |
| 2012_jesen_B | 9 | 5 | Popravljeno | e28c840 na grani mat-sim/figures-2012_jesen_B |
| 2012_zima_A | 4 | 1 | Popravljeno | fbd8888 / 5beeac7 na mat-sim/figures-2012_zima_A |
| 2012_zima_B | 8 | 2 | Popravljeno | f295956 na grani mat-sim/figures-2012_zima_B |
| 2013_ljeto_A | 11 | 5 | Popravljeno | db6d193 na grani mat-sim/figures-2013_ljeto_A (uklonjene nepovezane slike) |
| 2013_ljeto_B | 7 | 1 | Popravljeno | 692b6f8 na mat-sim/figures-2013_ljeto_B |
| 2013_jesen_A | 7 | 5 | Popravljeno | 8860092 na grani mat-sim/figures-2013_jesen_A |
| 2013_jesen_B | 12 | 9 | Popravljeno | 589d901 na grani mat-sim/figures-2013_jesen_B |
| 2014_ljeto_A | 13 | 11 | Popravljeno | 49fc508 na grani mat-sim/figures-2014_ljeto_A |
| 2014_ljeto_B | 11 | 9 | Popravljeno | edd69b0 na mat-sim/figures-2014_ljeto_B |
| 2014_jesen_A | 10 | 3 | Popravljeno | 64f4339 na grani mat-sim/figures-2014_jesen_A |
| 2014_jesen_B | 8 | 4 | Popravljeno | ef55bdf na grani mat-sim/figures-2014_jesen_B |
| 2015_ljeto_A | 9 | 9 | Popravljeno | 3a17ecc na grani mat-sim/figures-2015_ljeto_A |
| 2015_ljeto_B | 6 | 3 | Popravljeno | 09b5f9e na grani mat-sim/figures-2015_ljeto_B |
| 2015_jesen_A | 11 | 2 | Popravljeno | 3cb496b na grani mat-sim/figures-2015_jesen_A |
| 2015_jesen_B | 7 | 0 | Bez primjedbi |  |
| 2016_ljeto_A | 5 | 4 | Popravljeno | dcadfa8 na grani mat-sim/figures-2016_ljeto_A |
| 2016_ljeto_B | 9 | 0 | Bez primjedbi |  |
| 2016_jesen_A | 6 | 0 | Bez primjedbi |  |
| 2016_jesen_B | 7 | 1 | Popravljeno | d2ac8f1 na mat-sim/figures-2016_jesen_B |
| 2017_ljeto_A | 6 | 5 | Popravljeno | 96b3a88 na grani mat-sim/figures-2017_ljeto_A |
| 2017_ljeto_B | 3 | 0 | Bez primjedbi |  |
| 2017_jesen_A | 7 | 2 | Popravljeno | 4beeb62 na mat-sim/figures-2017_jesen_A |
| 2017_jesen_B | 9 | 0 | Bez primjedbi |  |
| 2018_ljeto_A | 11 | 1 | Popravljeno | eddfcba na mat-sim/figures-2018_ljeto_A |
| 2018_ljeto_B | 13 | 0 | Bez primjedbi |  |
| 2018_jesen_A | 9 | 1 | Popravljeno | 5708f02 na grani mat-sim/figures-2018_jesen_A |
| 2018_jesen_B | 13 | 10 | Popravljeno | de8ccd7 na mat-sim/figures-2018_jesen_B |
| 2019_ljeto_A | 6 | 1 | Popravljeno | f31a04f na grani mat-sim/figures-2019_ljeto_A |
| 2019_ljeto_B | 10 | 0 | Bez primjedbi |  |
| 2019_jesen_A | 9 | 3 | Popravljeno | f94e8d2 na grani mat-sim/figures-2019_jesen_A |
| 2019_jesen_B | 11 | 4 | Popravljeno | 117e6f1 na grani mat-sim/figures-2019_jesen_B |
| 2020_ljeto_A | 5 | 2 | Popravljeno | 8519557 na mat-sim/figures-2020_ljeto_A |
| 2020_ljeto_B | 12 | 7 | Popravljeno | e1080b8 na mat-sim/figures-2020_ljeto_B |
| 2020_jesen_A | 6 | 1 | Popravljeno | e74483d na mat-sim/figures-2020_jesen_A |
| 2020_jesen_B | 10 | 0 | Bez primjedbi |  |
| 2021_ljeto_A | 6 | 0 | Bez primjedbi |  |
| 2021_ljeto_B | 5 | 2 | Popravljeno | 9afc88f na grani mat-sim/figures-2021_ljeto_B |
| 2021_jesen_A | 5 | 1 | Popravljeno | 65f9160 na grani mat-sim/figures-2021_jesen_A |
| 2021_jesen_B | 10 | 2 | Popravljeno | 7e33b86 na grani mat-sim/figures-2021_jesen_B |
| 2022_ljeto_A | 11 | 4 | Popravljeno | ec6c209 na grani mat-sim/figures-2022_ljeto_A |
| 2022_ljeto_B | 7 | 0 | Bez primjedbi |  |
| 2022_jesen_A | 10 | 6 | Popravljeno | 887ebfc na mat-sim/figures-2022_jesen_A |
| 2022_jesen_B | 7 | 3 | Popravljeno | 736f79e na mat-sim/figures-2022_jesen_B |
| 2023_ljeto_A | 12 | 4 | Popravljeno | 9fc2b79 na grani mat-sim/figures-2023_ljeto_A |
| 2023_ljeto_B | 5 | 2 | Popravljeno | bc62661 na mat-sim/figures-2023_ljeto_B |
| 2023_jesen_A | 10 | 0 | Bez primjedbi |  |
| 2023_jesen_B | 6 | 3 | Popravljeno | 2be097a na mat-sim/figures-2023_jesen_B |
| 2024_ljeto_A | 11 | 5 | Popravljeno | abe94b8 na grani mat-sim/figures-2024_ljeto_A |
| 2024_ljeto_B | 11 | 2 | Popravljeno | 9b75846 na mat-sim/figures-2024_ljeto_B (uklonjena izmisljena slika za zad. 28) |
| 2024_jesen_A | 10 | 6 | Popravljeno | df5f3d9 na grani mat-sim/figures-2024_jesen_A |
| 2024_jesen_B | 11 | 3 | Popravljeno | 3c51a45 na grani mat-sim/figures-2024_jesen_B |
| 2025_ljeto_A | 11 | 2 | Popravljeno | 7f46a6f na grani mat-sim/figures-2025_ljeto_A |
| 2025_ljeto_B | 9 | 6 | Popravljeno | 019b2c4 na mat-sim/figures-2025_ljeto_B |
| 2025_jesen_A | 13 | 2 | Popravljeno | 94f5d04 na grani mat-sim/figures-2025_jesen_A |
| 2025_jesen_B | 10 | 6 | Popravljeno | 83b4ef5 na grani mat-sim/figures-2025_jesen_B |

## Detaljan popis spornih slika po ispitu

Za svaki ispit s barem jednom primjedbom navedene su pogodene slike i tezina razlike koju je revizija utvrdila. Puni opis razlika i tocan sadrzaj popravka nalazi se u porukama commita na pripadajucoj grani (mat-sim/figures-<ispit>), a sazetak popravka je zabiljezen u internoj memoriji agenta koji je popravak radio.

### 2010_ljeto_A

Status: **popravljeno** - c996108 na grani mat-sim/figures-2010_ljeto_A

| Slika | Tezina |
|---|---|
| 2010_ljeto_A__17 | ozbiljno |
| 2010_ljeto_A__30 | ozbiljno |

### 2010_ljeto_B

Status: **popravljeno** - b88fbe1 na grani mat-sim/figures-2010_ljeto_B

| Slika | Tezina |
|---|---|
| 2010_ljeto_B__7 | pogresno/nepovezano |
| 2010_ljeto_B__11 | manje |
| 2010_ljeto_B__21 | manje |
| 2010_ljeto_B__23.1 | pogresno/nepovezano |
| 2010_ljeto_B__23.2 | pogresno/nepovezano |
| 2010_ljeto_B__24.1 | manje |
| 2010_ljeto_B__27.1 | pogresno/nepovezano |
| 2010_ljeto_B__27.2 | pogresno/nepovezano |
| 2010_ljeto_B__27.3 | pogresno/nepovezano |

### 2010_jesen_B

Status: **popravljeno** - 538d764 na mat-sim/figures-2010_jesen_B

| Slika | Tezina |
|---|---|
| 2010_jesen_B__28.2 | ozbiljno |

### 2010_zima_B

Status: **popravljeno** - 6e9b648 na grani mat-sim/figures-2010_zima_B

| Slika | Tezina |
|---|---|
| 2010_zima_B__11 | pogresno/nepovezano |
| 2010_zima_B__13 | pogresno/nepovezano |
| 2010_zima_B__21 | pogresno/nepovezano |
| 2010_zima_B__23.1 | pogresno/nepovezano |
| 2010_zima_B__23.2 | pogresno/nepovezano |
| 2010_zima_B__24.1 | pogresno/nepovezano |
| 2010_zima_B__27.1 | ozbiljno |
| 2010_zima_B__27.2 | ozbiljno |
| 2010_zima_B__27.3 | ozbiljno |

### 2012_ljeto_A

Status: **popravljeno** - 628a888 on mat-sim/figures-2012_ljeto_A

| Slika | Tezina |
|---|---|
| 2012_ljeto_A__26 | manje |
| 2012_ljeto_A__29.1 | manje |

### 2012_jesen_B

Status: **popravljeno** - e28c840 na grani mat-sim/figures-2012_jesen_B

| Slika | Tezina |
|---|---|
| 2012_jesen_B__27.1 | manje |
| 2012_jesen_B__27.2 | manje |
| 2012_jesen_B__27.3 | manje |
| 2012_jesen_B__28.1 | ozbiljno |
| 2012_jesen_B__28.2 | ozbiljno |

### 2012_zima_A

Status: **popravljeno** - fbd8888 / 5beeac7 na mat-sim/figures-2012_zima_A

| Slika | Tezina |
|---|---|
| 2012_zima_A__29.1 | ozbiljno |

### 2012_zima_B

Status: **popravljeno** - f295956 na grani mat-sim/figures-2012_zima_B

| Slika | Tezina |
|---|---|
| 2012_zima_B__28.1 | ozbiljno |
| 2012_zima_B__28.2 | ozbiljno |

### 2013_ljeto_A

Status: **popravljeno** - db6d193 na grani mat-sim/figures-2013_ljeto_A (uklonjene nepovezane slike)

| Slika | Tezina |
|---|---|
| 2013_ljeto_A__29.1 | pogresno/nepovezano |
| 2013_ljeto_A__29.2 | pogresno/nepovezano |
| 2013_ljeto_A__29.3 | pogresno/nepovezano |
| 2013_ljeto_A__29.4 | pogresno/nepovezano |
| 2013_ljeto_A__29.5 | pogresno/nepovezano |

### 2013_ljeto_B

Status: **popravljeno** - 692b6f8 na mat-sim/figures-2013_ljeto_B

| Slika | Tezina |
|---|---|
| 2013_ljeto_B__10 | pogresno/nepovezano |

### 2013_jesen_A

Status: **popravljeno** - 8860092 na grani mat-sim/figures-2013_jesen_A

| Slika | Tezina |
|---|---|
| 2013_jesen_A__14 | ozbiljno |
| 2013_jesen_A__23.2 | ozbiljno |
| 2013_jesen_A__28.1 | ozbiljno |
| 2013_jesen_A__29.1 | ozbiljno |
| 2013_jesen_A__29.2 | ozbiljno |

### 2013_jesen_B

Status: **popravljeno** - 589d901 na grani mat-sim/figures-2013_jesen_B

| Slika | Tezina |
|---|---|
| 2013_jesen_B__11 | pogresno/nepovezano |
| 2013_jesen_B__15 | pogresno/nepovezano |
| 2013_jesen_B__19 | pogresno/nepovezano |
| 2013_jesen_B__22 | pogresno/nepovezano |
| 2013_jesen_B__23.1 | pogresno/nepovezano |
| 2013_jesen_B__23.2 | pogresno/nepovezano |
| 2013_jesen_B__25.1 | pogresno/nepovezano |
| 2013_jesen_B__25.2 | pogresno/nepovezano |
| 2013_jesen_B__28.2 | pogresno/nepovezano |

### 2014_ljeto_A

Status: **popravljeno** - 49fc508 na grani mat-sim/figures-2014_ljeto_A

| Slika | Tezina |
|---|---|
| 2014_ljeto_A__21.1 | pogresno/nepovezano |
| 2014_ljeto_A__21.2 | pogresno/nepovezano |
| 2014_ljeto_A__22.1 | pogresno/nepovezano |
| 2014_ljeto_A__22.2 | pogresno/nepovezano |
| 2014_ljeto_A__23.2 | pogresno/nepovezano |
| 2014_ljeto_A__24.1 | pogresno/nepovezano |
| 2014_ljeto_A__24.2 | manje |
| 2014_ljeto_A__28.1 | pogresno/nepovezano |
| 2014_ljeto_A__28.2 | manje |
| 2014_ljeto_A__28.3 | pogresno/nepovezano |
| 2014_ljeto_A__30 | ozbiljno |

### 2014_ljeto_B

Status: **popravljeno** - edd69b0 na mat-sim/figures-2014_ljeto_B

| Slika | Tezina |
|---|---|
| 2014_ljeto_B__1 | pogresno/nepovezano |
| 2014_ljeto_B__9 | ozbiljno |
| 2014_ljeto_B__11 | ozbiljno |
| 2014_ljeto_B__12 | ozbiljno |
| 2014_ljeto_B__20 | ozbiljno |
| 2014_ljeto_B__25.1 | pogresno/nepovezano |
| 2014_ljeto_B__26.1 | ozbiljno |
| 2014_ljeto_B__28.1 | pogresno/nepovezano |
| 2014_ljeto_B__28.2 | pogresno/nepovezano |

### 2014_jesen_A

Status: **popravljeno** - 64f4339 na grani mat-sim/figures-2014_jesen_A

| Slika | Tezina |
|---|---|
| 2014_jesen_A__10 | pogresno/nepovezano |
| 2014_jesen_A__29.1 | ozbiljno |
| 2014_jesen_A__29.3 | pogresno/nepovezano |

### 2014_jesen_B

Status: **popravljeno** - ef55bdf na grani mat-sim/figures-2014_jesen_B

| Slika | Tezina |
|---|---|
| 2014_jesen_B__1 | manje |
| 2014_jesen_B__7 | manje |
| 2014_jesen_B__11 | manje |
| 2014_jesen_B__21 | manje |

### 2015_ljeto_A

Status: **popravljeno** - 3a17ecc na grani mat-sim/figures-2015_ljeto_A

| Slika | Tezina |
|---|---|
| 2015_ljeto_A__5 | pogresno/nepovezano |
| 2015_ljeto_A__6 | pogresno/nepovezano |
| 2015_ljeto_A__10 | pogresno/nepovezano |
| 2015_ljeto_A__20.1 | pogresno/nepovezano |
| 2015_ljeto_A__22.2 | pogresno/nepovezano |
| 2015_ljeto_A__23.1 | pogresno/nepovezano |
| 2015_ljeto_A__26.1 | pogresno/nepovezano |
| 2015_ljeto_A__26.2 | pogresno/nepovezano |
| 2015_ljeto_A__29.1 | pogresno/nepovezano |

### 2015_ljeto_B

Status: **popravljeno** - 09b5f9e na grani mat-sim/figures-2015_ljeto_B

| Slika | Tezina |
|---|---|
| 2015_ljeto_B__13 | ozbiljno |
| 2015_ljeto_B__16 | manje |
| 2015_ljeto_B__27.3 | manje |

### 2015_jesen_A

Status: **popravljeno** - 3cb496b na grani mat-sim/figures-2015_jesen_A

| Slika | Tezina |
|---|---|
| 2015_jesen_A__28.3 | manje |
| 2015_jesen_A__6 | pogresno/nepovezano |

### 2016_ljeto_A

Status: **popravljeno** - dcadfa8 na grani mat-sim/figures-2016_ljeto_A

| Slika | Tezina |
|---|---|
| 2016_ljeto_A__4 | ozbiljno |
| 2016_ljeto_A__5 | manje |
| 2016_ljeto_A__24.1 | manje |
| 2016_ljeto_A__24.2 | ozbiljno |

### 2016_jesen_B

Status: **popravljeno** - d2ac8f1 na mat-sim/figures-2016_jesen_B

| Slika | Tezina |
|---|---|
| 2016_jesen_B__24.2 | ozbiljno |

### 2017_ljeto_A

Status: **popravljeno** - 96b3a88 na grani mat-sim/figures-2017_ljeto_A

| Slika | Tezina |
|---|---|
| 2017_ljeto_A__15 | manje |
| 2017_ljeto_A__19.2 | manje |
| 2017_ljeto_A__21.2 | manje |
| 2017_ljeto_A__26.2 | manje |
| 2017_ljeto_A__27.2 | manje |

### 2017_jesen_A

Status: **popravljeno** - 4beeb62 na mat-sim/figures-2017_jesen_A

| Slika | Tezina |
|---|---|
| 2017_jesen_A__8 | manje |
| 2017_jesen_A__12 | ozbiljno |

### 2018_ljeto_A

Status: **popravljeno** - eddfcba na mat-sim/figures-2018_ljeto_A

| Slika | Tezina |
|---|---|
| 2018_ljeto_A__26.2 | manje |

### 2018_jesen_A

Status: **popravljeno** - 5708f02 na grani mat-sim/figures-2018_jesen_A

| Slika | Tezina |
|---|---|
| 29.3 | ozbiljno |

### 2018_jesen_B

Status: **popravljeno** - de8ccd7 na mat-sim/figures-2018_jesen_B

| Slika | Tezina |
|---|---|
| 2018_jesen_B__12 | pogresno/nepovezano |
| 2018_jesen_B__14 | pogresno/nepovezano |
| 2018_jesen_B__15 | pogresno/nepovezano |
| 2018_jesen_B__16 | pogresno/nepovezano |
| 2018_jesen_B__26.1 | pogresno/nepovezano |
| 2018_jesen_B__26.2 | pogresno/nepovezano |
| 2018_jesen_B__27.1 | manje |
| 2018_jesen_B__28.1 | bez stvarne razlike |
| 2018_jesen_B__28.2 | bez stvarne razlike |
| 2018_jesen_B__28.3 | bez stvarne razlike |

### 2019_ljeto_A

Status: **popravljeno** - f31a04f na grani mat-sim/figures-2019_ljeto_A

| Slika | Tezina |
|---|---|
| 2019_ljeto_A__13 | ozbiljno |

### 2019_jesen_A

Status: **popravljeno** - f94e8d2 na grani mat-sim/figures-2019_jesen_A

| Slika | Tezina |
|---|---|
| 2019_jesen_A__12 | pogresno/nepovezano |
| 2019_jesen_A__25.1 | ozbiljno |
| 2019_jesen_A__27.3 | manje |

### 2019_jesen_B

Status: **popravljeno** - 117e6f1 na grani mat-sim/figures-2019_jesen_B

| Slika | Tezina |
|---|---|
| 2019_jesen_B__13 | pogresno/nepovezano |
| 2019_jesen_B__28.1 | ozbiljno |
| 2019_jesen_B__28.2 | ozbiljno |
| 2019_jesen_B__28.3 | ozbiljno |

### 2020_ljeto_A

Status: **popravljeno** - 8519557 na mat-sim/figures-2020_ljeto_A

| Slika | Tezina |
|---|---|
| 2020_ljeto_A__27.3 | manje |
| 2020_ljeto_A__28 | manje |

### 2020_ljeto_B

Status: **popravljeno** - e1080b8 na mat-sim/figures-2020_ljeto_B

| Slika | Tezina |
|---|---|
| 2020_ljeto_B__7 | ozbiljno |
| 2020_ljeto_B__22.1 | manje |
| 2020_ljeto_B__23.1 | bez stvarne razlike |
| 2020_ljeto_B__27.1 | manje |
| 2020_ljeto_B__27.2 | manje |
| 2020_ljeto_B__27.3 | manje |
| 2020_ljeto_B__28.3 | manje |

### 2020_jesen_A

Status: **popravljeno** - e74483d na mat-sim/figures-2020_jesen_A

| Slika | Tezina |
|---|---|
| 2020_jesen_A__29.4 | manje |

### 2021_ljeto_B

Status: **popravljeno** - 9afc88f na grani mat-sim/figures-2021_ljeto_B

| Slika | Tezina |
|---|---|
| 2021_ljeto_B__15 | ozbiljno |
| 2021_ljeto_B__23.2 | ozbiljno |

### 2021_jesen_A

Status: **popravljeno** - 65f9160 na grani mat-sim/figures-2021_jesen_A

| Slika | Tezina |
|---|---|
| 2021_jesen_A__25.1 | ozbiljno |

### 2021_jesen_B

Status: **popravljeno** - 7e33b86 na grani mat-sim/figures-2021_jesen_B

| Slika | Tezina |
|---|---|
| 2021_jesen_B__4 | manje |
| 2021_jesen_B__27.1 | ozbiljno |

### 2022_ljeto_A

Status: **popravljeno** - ec6c209 na grani mat-sim/figures-2022_ljeto_A

| Slika | Tezina |
|---|---|
| 2022_ljeto_A__32.1 | pogresno/nepovezano |
| 2022_ljeto_A__35.1 | manje |
| 2022_ljeto_A__35.2 | ozbiljno |
| 2022_ljeto_A__39.2 | manje |

### 2022_jesen_A

Status: **popravljeno** - 887ebfc na mat-sim/figures-2022_jesen_A

| Slika | Tezina |
|---|---|
| 2022_jesen_A__14 | pogresno/nepovezano |
| 2022_jesen_A__32.1 | manje |
| 2022_jesen_A__32.2 | manje |
| 2022_jesen_A__34.1 | manje |
| 2022_jesen_A__35.2 | manje |
| 2022_jesen_A__36.1 | ozbiljno |

### 2022_jesen_B

Status: **popravljeno** - 736f79e na mat-sim/figures-2022_jesen_B

| Slika | Tezina |
|---|---|
| 2022_jesen_B__12 | ozbiljno |
| 2022_jesen_B__24.1 | ozbiljno |
| 2022_jesen_B__24.2 | ozbiljno |

### 2023_ljeto_A

Status: **popravljeno** - 9fc2b79 na grani mat-sim/figures-2023_ljeto_A

| Slika | Tezina |
|---|---|
| 2023_ljeto_A__7 | manje |
| 2023_ljeto_A__10 | ozbiljno |
| 2023_ljeto_A__37.1 | manje |
| 2023_ljeto_A__37.2 | manje |

### 2023_ljeto_B

Status: **popravljeno** - bc62661 na mat-sim/figures-2023_ljeto_B

| Slika | Tezina |
|---|---|
| 2023_ljeto_B__12 | manje |
| 2023_ljeto_B__14 | manje |

### 2023_jesen_B

Status: **popravljeno** - 2be097a na mat-sim/figures-2023_jesen_B

| Slika | Tezina |
|---|---|
| 2023_jesen_B__14 | ozbiljno |
| 2023_jesen_B__25.1 | manje |
| 2023_jesen_B__25.2 | manje |

### 2024_ljeto_A

Status: **popravljeno** - abe94b8 na grani mat-sim/figures-2024_ljeto_A

| Slika | Tezina |
|---|---|
| 2024_ljeto_A__14 | manje |
| 2024_ljeto_A__17 | ozbiljno |
| 2024_ljeto_A__33.2 | manje |
| 2024_ljeto_A__35.1 | ozbiljno |
| 2024_ljeto_A__35.2 | ozbiljno |

### 2024_ljeto_B

Status: **popravljeno** - 9b75846 na mat-sim/figures-2024_ljeto_B (uklonjena izmisljena slika za zad. 28)

| Slika | Tezina |
|---|---|
| 2024_ljeto_B__28.1 | manje |
| 2024_ljeto_B__28.2 | manje |

### 2024_jesen_A

Status: **popravljeno** - df5f3d9 na grani mat-sim/figures-2024_jesen_A

| Slika | Tezina |
|---|---|
| 2024_jesen_A__10 | manje |
| 2024_jesen_A__15 | ozbiljno |
| 2024_jesen_A__19 | ozbiljno |
| 2024_jesen_A__23 | manje |
| 2024_jesen_A__37.1 | manje |
| 2024_jesen_A__37.2 | manje |

### 2024_jesen_B

Status: **popravljeno** - 3c51a45 na grani mat-sim/figures-2024_jesen_B

| Slika | Tezina |
|---|---|
| 2024_jesen_B__15 | manje |
| 2024_jesen_B__26.1 | manje |
| 2024_jesen_B__26.2 | manje |

### 2025_ljeto_A

Status: **popravljeno** - 7f46a6f na grani mat-sim/figures-2025_ljeto_A

| Slika | Tezina |
|---|---|
| 2025_ljeto_A__36.1 | pogresno/nepovezano |
| 2025_ljeto_A__36.2 | pogresno/nepovezano |

### 2025_ljeto_B

Status: **popravljeno** - 019b2c4 na mat-sim/figures-2025_ljeto_B

| Slika | Tezina |
|---|---|
| 2025_ljeto_B__11 | manje |
| 2025_ljeto_B__15 | ozbiljno |
| 2025_ljeto_B__16 | manje |
| 2025_ljeto_B__18 | ozbiljno |
| 2025_ljeto_B__30 | pogresno/nepovezano |
| 2025_ljeto_B__33.1 | manje |

### 2025_jesen_A

Status: **popravljeno** - 94f5d04 na grani mat-sim/figures-2025_jesen_A

| Slika | Tezina |
|---|---|
| 2025_jesen_A__6 | pogresno/nepovezano |
| 2025_jesen_A__38.2 | manje |

### 2025_jesen_B

Status: **popravljeno** - 83b4ef5 na grani mat-sim/figures-2025_jesen_B

| Slika | Tezina |
|---|---|
| 2025_jesen_B__17 | pogresno/nepovezano |
| 2025_jesen_B__18 | pogresno/nepovezano |
| 2025_jesen_B__25 | pogresno/nepovezano |
| 2025_jesen_B__32.1 | pogresno/nepovezano |
| 2025_jesen_B__32.2 | pogresno/nepovezano |
| 2025_jesen_B__35.1 | pogresno/nepovezano |

