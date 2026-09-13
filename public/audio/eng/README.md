# Audio konvencija — Engleski simulator

Datoteke idu u `public/audio/eng/<examKey>/taskN-1.mp3` (1. slušanje) i `public/audio/eng/<examKey>/taskN-2.mp3` (ponavljanje), gdje je `<examKey>` ključ ispita (npr. `vis_2015_ljeto`), a `N` redni broj task-a unutar slušanja za tu razinu.

Putanje se registriraju u `lib/data/engleski-simulator/audio-map.json` pod `"<examKey>": { "<N>": { "first", "repeat" } }`.

Dok datoteka fizički ne postoji na tom putu, `<audio>` element baca `onError` i prikazuje tekstualni fallback (uz link na `legacyDriveId` ako postoji u JSON-u).
