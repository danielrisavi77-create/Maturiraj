# Usporedba razvojnih AI alata — početni zapis

Datum: 22. rujna 2026.
Početni commit za buduću usporedbu: `91bb322e86f2b257f6d1d50fefeb34e874d4a148`

| Alat | Dostupnost CLI-ja u ovom okruženju | Zadatak koda | Provjera sadržaja | Sigurnosni pregled | Provjereni tokeni |
| --- | --- | --- | --- | --- | --- |
| Codex | nije pronađen kao lokalna izvršna naredba | unmeasured | unmeasured | unmeasured | unknown |
| Claude Code | nije pronađen kao lokalna izvršna naredba | unmeasured | unmeasured | unmeasured | unknown |
| Grok | nije pronađen kao lokalna izvršna naredba | unmeasured | unmeasured | unmeasured | unknown |

Provjereno naredbama `command -v codex`, `command -v claude` i `command -v grok`. Ovaj zapis opisuje izolirani radni kontejner, ne Danielovo računalo ni ograničenja njegovih pretplata. Nema provedenog usporednog pokretanja pa **nema preporuke za automatsko usmjeravanje**. Ne zaključivati da je potrošnja 0.

Nakon dostupnosti alata na računalu za svaki od tri zadatka (ograničen popravak, provjera sadržaja s izvorima, pregled AI rute) pripremiti zajednički manifest i zaseban worktree naredbama iz `docs/AI_DEVELOPMENT_WORKFLOW.md`. Zabilježiti diff, testove, neovisnu recenziju, vrijeme i token metrikу samo ako je alat pouzdano izlaže. Posebno provjeriti stvarni Grok CLI ugovor prije uporabe. Pravila autorstva/pregleda odrediti tek na temelju usporedivih prihvatljivih rezultata.
