# Upute za rad u ovom repozitoriju

## Ispitni podaci i ključevi — ADR-001

Prije dodavanja ili premještanja ispitnog sadržaja pročitaj
[`docs/ADR-001-ispitni-podaci.md`](docs/ADR-001-ispitni-podaci.md).

- Ključ nikad ne ide u klijentski bundle: `sol` (`cl`, `ans`, `alt`, `pairs`, `ex`, `rubric`,
  `solFormula`, `svgFn`), `exp`, `why`, `steps`, `graphRef`, `ocjenaKljuc`, `distraktori`.
  Dvojiš li — polje je tajno.
- Javni payload ide pod `content/<predmet>/`, tajni store pod `lib/data/<predmet>/secrets/`
  i čita se isključivo kroz `lib/exam-secrets` (`import 'server-only'`, marker `@exam-secret`).
- Provjeri prije commita: `npm run security:secrets`. Baseline smije samo padati; regenerira
  se skriptom (`npm run security:secrets -- --write-baseline`) koja odbija porast — porast
  traži izmjenu ADR-a i `--allow-increase`. Nikad ručno.
