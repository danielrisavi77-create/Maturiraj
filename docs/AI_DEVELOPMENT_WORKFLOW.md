# Usporedba alata za razvoj Maturiraja

Ovaj postupak uspoređuje isti mali zadatak na istom početnom commitu. Ne pokreće AI alate automatski i ne šalje podatke pružateljima. CLI pretplata i produkcijski API trošak bilježe se odvojeno.

## Privremeni način zajedničkog rada

Dok nema usporedivih rezultata, zadatak dobiva **jednog autora** u izdvojenom worktreeu; autor može biti Codex, Claude Code ili Grok ako je njegov alat dostupan. Drugi od dostupnih alata čita samo cilj, relevantan diff i rezultate provjera te radi neovisan pregled. Treći se uključuje samo za zaseban problem koji može dokazivo riješiti (primjerice provjera činjenica i izvora u nastavnom sadržaju), a ne da ponovno generira isti kod. Za promjene pristupa, osobnih podataka ili troška tražite neovisan sigurnosni pregled; za obrazovni sadržaj i izvore odgovorna osoba potvrđuje točnost. Nijedan alat ne odobrava vlastiti rad.

Početni ulaz svakom alatu neka bude kratak: cilj, kriteriji prihvaćanja, ograničenja, base commit i mali popis relevantnih putanja. Umjesto povijesti razgovora proslijedite sažetak odluka i artefakte iz repozitorija. Autor prvo pronađe postojeći obrazac, izmijeni minimalan opseg i izvrši ciljane provjere; puni testni skup služi kao završna vrata. Recenzent dobiva samo promijenjene datoteke i rizike koje treba provjeriti. Ako recenzija pronađe problem, isti autor popravlja postojeći diff. Vodite vrijeme, provjere i tokene samo kad CLI ili pružatelj izlaže pouzdanu metriku; za svaku rundu zabilježite i razlog uključivanja sljedećeg alata.

Ovo je postupak za uštedu nepotrebnog konteksta, a ne tvrdnja da je jedan model bolji u pojedinoj ulozi. Nakon tri usporediva mala zadatka iz odjeljka 3 prilagodite autorstvo i pregled prema prolaznosti, broju naknadnih ispravaka, trajanju i izmjerenoj potrošnji. Ako Grok nema dostupan CLI ili pouzdan prikaz tokena, zadržite ga kao ručni neovisni pregled bez izmišljene metrike.

## 1. Priprema

U čistom checkoutu odaberite `kind` (`code`, `content`, `security`), zadane putanje i naredbe provjere u JSON manifestu. Primjer se nalazi u `scripts/agent-benchmark/fixtures/tasks.json` (izdvojite jedan objekt u lokalnu datoteku). Ne koristite stvarne studentske podatke, API ključeve ni tajne odgovore. Provjerite `command -v codex`, `command -v claude`, `command -v grok`; navedite samo dostupne alate. Za Grok posebno provjerite naziv CLI-ja, verziju, podržane zastavice i strukturirani izlaz. Ako toga nema, Grok ostaje `unmeasured`.

```bash
node scripts/agent-benchmark/prepare.mjs /put/do/lokalnog/task.json codex claude
```

Naredba stvara odvojene `.worktrees/<task-id>/<tool>` s istim commitom i ispisuje **pinned manifest** `scripts/agent-benchmark/runs/<task-id>/task.json`. Dalje upotrebljavajte baš taj manifest, jer `HEAD` iz izvornog predloška nije trajni identifikator.

## 2. Izvedba i provjera

Svakom alatu dajte isti cilj i samo datoteke navedene u manifestu. Pokrenite ga u njegovu worktreeu. Izvršite iste naredbe `checks` za svaki rezultat. Drugi alat ili osoba pregleda diff i zabilježi stvarne nalaze; pregledavatelj ne smije biti autor. Nastavni sadržaj zahtijeva dodatnu provjeru izvora i stručnu potvrdu prije objave. Nijedan benchmark rezultat sam po sebi ne daje odobrenje za objavu ili merge.

U svakom worktreeu stvorite `result.json` s podacima u ovom obliku (bez prompta, tajni i osobnih podataka):

```json
{
  "taskId": "ai-route-security-review",
  "tool": "codex",
  "model": "model-iz-CLI-ja-ako-je-poznat",
  "baseCommit": "puni-sha-iz-pinned-manifesta",
  "branch": "benchmark/ai-route-security-review/codex",
  "elapsedSeconds": 120,
  "tokens": null,
  "tokenSource": "unknown",
  "checks": [{ "name": "npm run security:secrets", "passed": true }],
  "sourceReview": null,
  "artifactPaths": ["result.json"],
  "reviewer": "claude",
  "reviewFindings": []
}
```

Za dokazanu potrošnju dopustite samo `tokenSource: "cli_report"` ili `"provider_report"` i stvarni cijeli broj `tokens`. Bez mjerne potvrde vrijednost ostaje `null`. `artifactPaths` su putanje unutar dodijeljenog worktreea. Za `kind: "content"`, `sourceReview` mora biti `{ "reviewer": "neovisna-osoba-ili-alat", "passed": true }`.

## 3. Uvoz i usporedba

```bash
node scripts/agent-benchmark/import-result.mjs scripts/agent-benchmark/runs/ai-route-security-review/task.json codex .worktrees/ai-route-security-review/codex/result.json .worktrees/ai-route-security-review/codex
node scripts/agent-benchmark/compare.mjs scripts/agent-benchmark/runs/ai-route-security-review/codex.json scripts/agent-benchmark/runs/ai-route-security-review/claude.json
npm run agent:benchmark:test
```

Rezultat prikazuje prošle i nepotpune provjere, stvarno vrijeme te usporedive tokene samo kada ih oba alata pouzdano prijave. Ne pretvarajte tokene iz pretplate u API cijenu. Bez barem dva usporediva kvalitetna rezultata nemojte mijenjati pravila usmjeravanja. Za sigurnosni ili nastavni zadatak ne prihvaćajte samopregled.
