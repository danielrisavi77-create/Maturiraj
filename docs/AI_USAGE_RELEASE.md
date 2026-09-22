# AI potrošnja: provjera prije uključivanja

Datum: 22. rujna 2026. Prva etapa obračunava stvarne Anthropic API tokene u milijuntinkama USD. Cijene su u `lib/ai-usage/prices.js`; izvor: https://platform.claude.com/docs/en/about-claude/pricing . CLI pretplate za Codex, Claude Code i Grok nisu dio ove evidencije.

## Inventar poziva

| Poziv | Model u kodu | Pristup | Evidencija | Napomena |
| --- | --- | --- | --- | --- |
| `/api/ai` profesor | Sonnet 4.6 | Pro | rezervacija + završni stream usage | prekid ostavlja `uncertain` |
| `/api/ai` explain | Sonnet 4.6 | Starter+ | rezervacija + završni stream usage | isti mjesečni račun po korisniku |
| `/api/ai-simulator` | Sonnet 4.6 | Starter+ | rezervacija + response usage | ograničen izlaz |
| `/api/generate-study-plan` | Sonnet 4.6 | Pro | rezervacija + response usage | provjera dužine prompta |
| `/api/prijemni/compare-insight` | Haiku 4.5 | Pro | rezervacija + response usage | kratki odgovor |
| `/api/medicinar/briefing/generate` | Sonnet 4.6 | Pro ili ovlašteni cron | rezervacija + response usage | postojeći tjedni rezultat vraća se bez novog poziva; `ai_briefings` i ledger nisu dvije naplate |
| `/api/agents/*` preko `lib/agent-core/anthropicClient.js` | Sonnet 4.6 | `AI_ENDPOINTS_ENABLED` + `AGENT_API_ENABLED` | **nije obuhvaćeno** | `runAgent` ne prosljeđuje Supabase u capability gate; ne uključivati AGENT_API dok se pristup i obračun ne poprave |
| `scripts/gen-skripta.mjs`, `scripts/gen-distractors.mjs` | ovisno o kategoriji | lokalni autor, API ključ | nije u korisničkom ledgeru | izvan produkcijskih ruta; voditi zaseban proizvodni trošak |
| hrvatske skripte `app/skripte/data/hrv-components/poglavlje*.jsx` | zastarjeli Sonnet 4 | preglednik | nema valjanog server poziva | nekoliko mjesta pokušava izravni `api.anthropic.com` bez ključa; zaseban funkcionalni popravak i provjera dometa prije tvrdnje o punoj pokrivenosti |
| `/api/discere/ask-ai` | nema | Pro | nema troška | trenutačno vraća placeholder |

`/api/ai/usage` vraća `coverage: "partial"` sve dok postoje nepokriveni naplativi putovi. To polje nije potvrda ukupnog organizacijskog troška. Za pristup pregledniku nije dopušten proizvoljan ID korisnika.

## Konfiguracija i redoslijed

1. Potvrditi koja je Supabase baza povezana s ovom aplikacijom. Trenutačni repozitorij ne sadržava migracije za stari browser RPC `check_and_increment_ai_usage`; provjeriti stvarnu bazu prije promjene. Ne pokretati migraciju na produkciji bez pregleda rezultata na izoliranoj grani/staging bazi.
2. Primijeniti `supabase/migrations/20260922000000_ai_usage_ledger.sql` na staging. Testirati istodobne rezervacije, idempotentni završetak, RLS/grantove za `authenticated` i `anon`, prekinuti stream, brisanje korisnika i retenciju. Lokalni PGlite testovi pokrivaju SQL ponašanje, ali ne dokazuju PostgREST i stvarnu mrežnu konkurentnost.
3. Odabrati mjesečni iznos po planu i postaviti **server-only** `AI_MONTHLY_BUDGET_MICROUSD_PRO` i `AI_MONTHLY_BUDGET_MICROUSD_STARTER` kao pozitivne cijele brojeve (`3000000` znači `$3.00`). Vrijednost prikazana u starom UI-ju nije automatska potvrda cijene plana. Bez valjane konfiguracije novi naplativi poziv staje prije pružatelja.
4. Provjeriti aktualni cjenik i modele prije uključivanja; kod modela koji nema cijenu poziv se odbija. Provjeriti da računi ne uključuju dodatne usluge poput web searcha, koje trenutni pozivi ne koriste.
5. Na stagingu testirati AI Profesora, objašnjenje, simulator, plan, usporedbu i briefing uz stvarni Anthropic završni `usage`. Usporediti mjesečni agregat s Anthropicovim izvještajem. Provjeriti ponašanje pri 429, 503, prekidu i `uncertain` rezervacijama.
   Potvrđeno odbijanje pružatelja (400/401/403/429) oslobađa rezervaciju; nedovršen stream bez završnog `message_delta` ostaje `uncertain` čak i ako iterator završi bez iznimke.
6. Tek nakon toga uključiti `AI_ENDPOINTS_ENABLED=true`. Ostaviti `AGENT_API_ENABLED=false` dok taj poseban put ne dobije ispravan capability gate i obračun. Ne proglašavati globalni GO dok direktni pozivi iz hrvatskih skripti nisu zamijenjeni sigurnim server rutama ili uklonjeni iz aktivne značajke.

## Povrat i održavanje

Zaustaviti nove AI pozive vraćanjem `AI_ENDPOINTS_ENABLED=false`; ne brisati već obračunate događaje. `ai_usage_prune()` je ograničen na service role i mora se zakazati tek nakon provjere na stagingu: sirovi događaji 90 dana, mjesečni agregati 13 mjeseci. Nepoznate rezervacije ostaju rezervirane dok se sigurno ne pomire; ne oslobađati ih samo zato što je korisnik zatvorio karticu. Zabilježiti broj `uncertain` stavki i provesti ručno pomirenje s izvještajem pružatelja.
