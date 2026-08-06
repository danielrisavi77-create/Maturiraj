# Discere — onboarding novog predmeta

Ovaj dokument je obvezni production postupak za svaki novi predmet državne mature. Cilj je da novi predmet koristi isti canonical engine i da se ne objavi dok izvor, ključevi, bodovanje i tehnički prikaz nisu provjereni.

## Datoteke po predmetu

```text
content/discere/<id>/source-manifest.json
content/discere/<id>/index.json
content/discere/<id>/loaders.js
content/discere/<id>/exams/<year>_<season>.mjs
content/discere/<id>/assets/<year>_<season>/...
content/discere/<id>/qa/<year>_<season>.json
```

## Production redoslijed

1. **Službeni source manifest** — zabilježi NCVVO stranicu, paket/ispit, ključ ili bodovanje, datum dohvaćanja i poznate službene strukturne totale.
2. **Prvo napiši failing structural test** — test mora fiksirati službeni broj zadataka, trajanje, maksimalni broj bodova, razinu i druge pouzdane metapodatke.
3. **Normaliziraj sadržaj** — svaki službeni zadatak prenesi u canonical model. Ne dodaj AI objašnjenja u official content layer.
4. **Pokreni deterministički validator** — `pnpm discere:validate -- <id>` mora imati nula errora.
5. **Neovisni drugi QA prolaz** — ponovno usporedi tekst, opcije, ključ i bodovanje sa službenim materijalom bez oslanjanja na zaključak prvog prolaza.
6. **Provjeri assete** — slike, tablice i audio moraju postojati, biti povezani s točnim zadatkom i imati pristupačne opise gdje je primjenjivo.
7. **Dodaj index i eksplicitni loader** — bez template-literal dinamičkih importa.
8. **Smoke-test generic route** — hub, otvaranje ispita, reprezentativni tipovi zadataka, navigacija i predaja.
9. **Provjeri spremanje rezultata** — canonical result v2 mora se spremiti bez regresije postojećih legacy simulatora.
10. **Tek tada promijeni registry status `qa -> active`**.
11. Pokreni `pnpm test -- __tests__/discere`.
12. Pokreni `pnpm discere:validate`.
13. Pokreni `pnpm lint`.
14. Pokreni `pnpm build`.

## QA statusi

- `draft` — sadržaj se tek prenosi.
- `structural-pass` — struktura prolazi validator, ali ključ/sadržaj još nisu neovisno potvrđeni.
- `verified` — službeni sadržaj, ključevi/bodovanje i asseti prošli su drugi QA prolaz.
- `published` — verificirani ispit je prošao route, mobile i persistence smoke test.

Predmet na glavnom Discere hubu smije biti `active` tek kada svi ispiti koje taj predmet predstavlja zadovoljavaju dogovoreni coverage i nemaju otvoren P0/P1 sadržajni problem.

## Pravila izvora

- Primarni izvor za službene zadatke je NCVVO.
- Ako se službeni paket ne može dohvatiti programatski, ne rekonstruiraj zadatke iz sjećanja, kataloga, sekundarnih stranica ili AI odgovora. Zadrži predmet u `qa` i evidentiraj source blocker.
- Modelom ili ručnim rješavanjem dobiven odgovor ne smije se označiti kao `official` bez službenog ključa/bodovanja.
- Službeni ispitni sadržaj i Maturiraj-added value (AI objašnjenja, adaptivnost, SRS, napredna analiza) ostaju odvojeni slojevi.

## Regression pravilo

Svaki potvrđeni sadržajni bug mora završiti barem jednim od sljedećeg:

- novim validator pravilom,
- novim test fixtureom/regression testom,
- dokumentiranom napomenom zašto se problem ne može deterministički otkriti.

Time se svaka pronađena greška pretvara u trajno jači sustav, a ne samo jednokratni ručni popravak.
