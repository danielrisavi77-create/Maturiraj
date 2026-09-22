# Maturiraj: mjerenje AI potrošnje i usporedni razvojni workflow

Datum: 22. rujna 2026.
Polazni commit: `a17043e5ba81471c7ed4bff6b41493177a40a149`

## Namjera i kriterij uspjeha

Maturiraj treba štedjeti AI resurse bez pogoršanja točnosti nastavnog sadržaja i korisničkih odgovora. Prva etapa uspostavlja pouzdan serverski obračun stvarnih API tokena i mali ponovljiv postupak za usporedbu razvojnog rada Codexa, Claude Codea i Groka. Cilj je donositi odluke prema kvaliteti, ukupnom utrošku i vremenu, a ne prema unaprijed dodijeljenom modelu. Zadržati postojeće zahtjeve za pristup, tajnost ispitnih rješenja (ADR-001) i provjeru sadržaja prije objave.

Uspjeh prve etape znači: (1) svaki naplativi produkcijski AI poziv unutar uključenog skupa ruta ima serversko odobrenje i zabilježenu stvarnu potrošnju ili eksplicitan status nepoznate potrošnje; (2) prekoračenje budžeta i nedostupna evidencija zaustavljaju novi poziv; (3) ne može se potrošiti budžet drugog korisnika pozivom RPC-a iz preglednika; (4) mali benchmark daje usporedive artefakte za svaki dostupni alat bez automatskog prijenosa produkcijskih ili osobnih podataka.

## Zatečeno stanje i granice

`app/api/ai/route.js` provjerava plan i razmak između zahtjeva, ali ne provjerava mjesečni iznos na serveru i pri streamingu ne bilježi Anthropicovu završnu `usage`. `app/ai-profesor/page.js` procjenjuje tokene i zove `check_and_increment_ai_usage` iz preglednika prije `/api/ai`. Definicije tog RPC-a i `get_ai_usage_stats` nisu u migracijama repozitorija; stvarno stanje produkcijske baze nije potvrđeno. `app/api/ai-simulator/route.js` ima ograničenje razmaka, ali nema zajednički mjesečni obračun. Ostale Anthropic rute imaju različite provjere. `app/api/medicinar/briefing/generate/route.js` već upisuje stvarne tokene u `ai_briefings`, pa se ti podaci ne smiju dvostruko naplatiti pri objedinjavanju. `lib/rate-limit.ts` pri nedostupnosti baze prelazi na memorijski limit po procesu. `lib/agent-core/runAgent.js` ne prosljeđuje `supabase` funkciji `capabilityGate.checkCapability`, i zato postojeći agentski API nije prikladan za novi obračun bez zasebnog popravka.

Codexove uloge u `.codex/agents/`, Claudeove razvojne upute i workflowi te skripte `scripts/gen-skripta.mjs` i `scripts/gen-distractors.mjs` nisu jedinstven sustav. Nema potvrđene Grok integracije. CLI pretplate, CLI korištenje i produkcijski API trošak vode se odvojeno; izvor stvarne CLI potrošnje utvrđuje se po alatu, a nedostupni podaci prikazuju se kao nepoznati, nikada kao nula.

Prva etapa uključuje `/api/ai` i `/api/ai-simulator` kao početne rute te inventar preostalih AI ruta s redoslijedom uključivanja prije produkcijskog uključivanja objedinjene kvote. Usporedni razvojni workflow počinje ručnim ili lokalnim pokretanjem nad zadanim zadatkom i prikuplja samo metapodatke. Automatsko pokretanje sva tri CLI-ja, produkcijsko usmjeravanje između pružatelja, promjena pretplatničkih planova i automatska objava nastavnog sadržaja ostaju za kasniju, zasebnu odluku.

## A. Serverski obračun produkcijskih AI poziva

### Granice i podaci

Jedan serverski modul `lib/ai-usage/` upravlja rezervacijom, završetkom i evidentiranjem poziva. Rute mu predaju potvrđeni `userId`, identifikator funkcije, model, konfigurirani gornji limit izlaza i procijenjeni gornji limit ulaza. Modulu se ne predaje korisnikov identitet iz tijela zahtjeva niti sam sadržaj poruka za trajnu pohranu. Postojeća provjera plana ostaje prije rezervacije; provjera razmaka i rezervacija izvršavaju se prije poziva pružatelju.

Nova migracija stvara privatne tablice `ai_usage_reservations` i `ai_usage_events`, dostupne samo pouzdanom serverskom klijentu. Rezervacija ima jedinstveni `request_id`, korisnika, funkciju, model, mjesečno razdoblje, najviši dopušteni obračunski iznos, vrijeme isteka i stanje (`reserved`, `completed`, `uncertain`, `released`). Event čuva stvarne ulazne/izlazne/cache tokene kada ih pružatelj vrati, pripadajuću cjenovnu verziju, iznos, status i vrijeme. Korisnički dohvat statistike izlaže samo vlastiti agregat preko zasebne sigurnosno provjerene rute; proizvoljan `p_user_id` iz browsera ne može odabrati tuđi račun.

Server računa konzervativnu rezervaciju prije poziva i atomično provjerava `potrošeno + aktivne rezervacije + nova rezervacija <= mjesečni budžet`. Ulazna procjena služi rezervaciji, a **obračun nastaje iz stvarnog odgovora**. Za stream se prihvaća i završni usage događaj; tekstualni delta događaji sami nisu dokaz potrošnje. Ako je zahtjev definitivno odbijen prije slanja pružatelju, rezervacija se oslobađa. Ako je pružatelj možda primio zahtjev, a usage nije stigao zbog prekida, rezervacija ostaje `uncertain` uz gornji iznos do pomirenja ili isteka uz konzervativno pravilo. Ponovljeni `request_id` ne može dvaput potrošiti budžet. Završetak je idempotentan.

Za nedostupnu bazu, nedostajuću migraciju ili nepoznatu cijenu ne izvršava se novi naplativi poziv. Cijene su verzionirana konfiguracija po konkretnom modelu i kategoriji tokena; promjene cijena traže provjeru prije uključivanja. Postojeći prikaz `$3` za AI Profesora nije dokaz konfiguracije na serveru: početna vrijednost i valute budžeta potvrđuju se prema stvarnim planovima prije uključivanja. Rezervacija je konzervativna procjena, pa pojedinačni stvarni obračun može prijeći rezervirani iznos; takav događaj naplaćuje se u cijelosti i blokira idući poziv. Tajne, promptovi, školski odgovori i osobni podaci ne ulaze u evente ni razvojne benchmark logove. Sirovi eventi čuvaju se 90 dana, a mjesečni agregati 13 mjeseci; brisanje korisničkog računa uklanja povezana pojedinačna zabilježena korištenja prema pravilima brisanja podataka.

### Uključivanje i kompatibilnost

Prvo dodati migraciju i modul iza zasebne zastavice te u testnom okruženju potvrditi rezervaciju, stvarni usage i statistiku. Zatim `/api/ai` (profesor i explain) i `/api/ai-simulator` prebaciti na isti modul. UI AI Profesora prestaje unaprijed povećavati potrošnju preko browser RPC-a; čita serversku statistiku i prikazuje isti mjesečni limit. SSE ugovor i postojeće kontrole pristupa ostaju kompatibilni. Dok nisu obuhvaćene ostale naplative AI rute, statistika se jasno označava kao djelomična i ne proglašava ukupnim produkcijskim troškom. Prije globalnog budžeta uključiti preostale rute ili im zasebno onemogućiti naplative pozive.

## B. Usporedni workflow za razvojne alate

Jedan `task brief` sadrži cilj, poznati commit, granice datoteka, provjere, rizike i maksimalni dopušteni napor. Zadaci su mali i imaju po jedan primarni autor; alati rade na odvojenim granama ili worktreeovima, bez istodobnog pisanja u iste datoteke. Drugi alat pregledava diff i izlaz relevantnih testova. Treći radi samo kada postoji nalaz koji treba neovisnu provjeru ili kada je zadatak označen visokim rizikom. Sadržaj prolazi provjeru izvora i stručni pregled prije objave; autorov vlastiti odgovor nije potvrda točnosti.

Početni benchmark sadrži nekoliko reprezentativnih, prethodno definiranih zadataka: ograničen popravak koda s regresijskim testom, provjeru nastavnog sadržaja i sigurnosni pregled AI rute. Isti brief i iste ulazne datoteke daju se svakom dostupnom alatu. Mjere su prolaz relevantnih testova, potvrđeni defekti nakon neovisnog pregleda, točnost sadržaja prema izvorima, broj iteracija, ukupno vrijeme i prijavljena potrošnja. Za CLI bez pouzdane evidencije tokena bilježi se trajanje/sesija i `tokens: unknown`; to se ne smije uspoređivati kao nulti trošak. Grok je opcionalan adapter dok se ne potvrdi pristup CLI-ju, njegova verzija, dopuštenja i strukturirani izlaz; izostanak Groka ne blokira obračun produkcijskih API poziva.

Iz benchmarka proizlaze pravila zadavanja posla po tipu zadatka. Pravila se mijenjaju tek nakon ponovljivih rezultata. Paralelno pokretanje tri puna rješenja nije zadana strategija; koristi se samo za unaprijed odabrane zadatke kada dodatna provjera opravdava trošak. Jedinstveni lokalni zapis treba obuhvatiti zadatak, alat/model ako je poznat, commit, artefakte, trajanje, tokene ako su provjereni, rezultat provjere i odluku o prihvaćanju. Ne uključivati promptove s tajnama ni studentske podatke.

## Provjera, operativni rizici i povrat

- Testirati konkurentne rezervacije istog korisnika, odbijanje na granici budžeta, izolaciju korisnika, nedostupnost baze, ponavljanje zahtjeva, stream bez završnog usage događaja, prekinuti zahtjev i izostanak dvostrukog obračuna.
- Testirati postojeći SSE format, `requirePro`/`requireStandardOrPro`, ograničenje razmaka i UI statistiku. Testirati stvarnu migraciju u izdvojenoj bazi prije produkcije.
- Mjeriti udio poziva sa stvarnim usage zapisom, broj `uncertain` rezervacija i razliku između rezerviranog i obračunatog iznosa. Kvalitetu benchmarka procjenjivati prema neovisnoj provjeri, ne samo prolasku testova.
- Uključivati postupno po ruti. Zastavica vraća raniji put samo u sigurnom testnom okruženju; u produkciji kvar obračuna mora zaustaviti nove naplative pozive. Povrat aplikacijskog koda ne smije obrisati već zapisanu potrošnju. Migracije su samo unaprijed, bez prepisivanja postojećih.

## Redoslijed provedbe nakon odobrenja specifikacije

1. Inventar API poziva, postojeće produkcijske baze i stvarnog izvora CLI metrika; utvrditi postoje li RPC-i koje repo ne sadrži.
2. Migracija, atomska rezervacija i serverski modul s testovima.
3. Uključivanje dviju početnih ruta i UI statistike, uz provjeru SSE ugovora i prekinutih poziva.
4. Inventar i uključivanje ostalih ruta prije proglašenja ukupnog budžeta.
5. Reproducibilni razvojni benchmark, rezultati te odluka o ulozi svakog alata. Tek potom specifikacija automatskog usmjerivača i eventualnog Grok adaptera.
