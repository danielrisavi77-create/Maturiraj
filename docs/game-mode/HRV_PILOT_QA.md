# Hrvatski Game Mode — pilot QA gate

Datum tehničke provjere: 2026-07-21

## Launch pool

- 400 canonical pitanja iz postojeće Discere banke
- 400 jedinstvenih canonical ID-jeva
- 400 jedinstvenih normaliziranih promptova
- 0 neispravnih ključeva odgovora
- 0 pitanja bez objašnjenja
- 0 pitanja koja ovise o izdvojenom `ctx` tekstu
- 0 promptova duljih od 180 znakova
- 0 odgovora duljih od 55 znakova
- 0 Unicode replacement znakova
- 0 neriješenih automatskih QA upozorenja u launch poolu

Coverage launch poola:

- gramatika: 160
- pravopis: 99
- leksikologija: 41
- sintaksa: 30
- stilistika: 21
- versifikacija: 9
- kratke književne činjenice: 40

Provjera se reproducira naredbama:

```text
npm run game:content-report
npm run test -- __tests__/game-mode
```

## Provenijencija i pravo uporabe

Svaki launch zapis tehnički čuva izvorni Discere `examKey`, ID pitanja, godinu i oznaku ispita. Time je tehnička provenijencija potpuna.

Pravo ponovne uporabe službenih ispitnih pitanja nije moguće potvrditi analizom repozitorija. Za produkcijski pilot potrebna je dokumentirana potvrda vlasnika proizvoda ili pravno odgovorne osobe. `GAME_MODE_ENABLED=true` u lokalnom okruženju nije takva potvrda i ne predstavlja odobrenje produkcijskog puštanja.
