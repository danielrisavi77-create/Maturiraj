# Sigurnosna blokada agentskih AI poziva

## Razlog i trenutačno ponašanje

Zajednički agentski wrapper `lib/agent-core/anthropicClient.js` nema povezanu
serversku rezervaciju budžeta ni konačni obračun provider potrošnje. Zato oba
njegova izvoza, `getAnthropicClient` i `makeClaudeRequest`, izričito odbijaju rad
s kodom `AGENT_USAGE_UNAVAILABLE` i kratkom porukom o nedostupnosti. Factory ne
stvara niti vraća SDK klijent, ne čita API ključ i ne šalje zahtjev pružatelju.
Asinkroni wrapper vraća odbijeni Promise. Postojeći objekti argumenata pozivatelja
ne obrađuju se dok je ovaj put zatvoren.

`AI_ENDPOINTS_ENABLED` i `AGENT_API_ENABLED` ostaju nepromijenjene zastavice.
Njihovo postavljanje na `true` samo po sebi ne uklanja ovu sigurnosnu blokadu.
Nije dodana nova konfiguracijska zastavica, tarifa ni migracija.

Orchestrator zasebno čuva `userId` koji njegovoj ruti daje `auth.getUser()`:
korisnički `input` proširuje se prije serverskih `userId` i `supabase` vrijednosti.
Time podmetnuti `input.userId` ne može zamijeniti prijavljenog korisnika. Ostala
polja zadatka i postojeći odabir agenta zadržavaju se.

## Točan opseg

Stvarni pozivatelji `makeClaudeRequest` nalaze se u šest handlera:
`diagnosticAgent`, `essayAgent`, `mentorAgent`, `plannerAgent`, `supportAgent` i
`tutorAgent` u `lib/agents/`. `runAgent.js` dodatno ima nekorišten import wrappera.
Izvan samog wrappera nema stvarnog pozivatelja `getAnthropicClient` u pregledanom
aplikacijskom kodu. Blokada vrijedi i za budući izravni poziv tog izvoza.

Sljedećih pet postojećih obračunanih route datoteka ne uvozi ovaj agentski
wrapper i zadržava vlastite provider i `lib/ai-usage` putove:

- `app/api/ai/route.js` — AI Profesor i objašnjenje odgovora;
- `app/api/ai-simulator/route.js`;
- `app/api/generate-study-plan/route.js`;
- `app/api/prijemni/compare-insight/route.js`;
- `app/api/medicinar/briefing/generate/route.js`.

Ova promjena ne migrira izravne browser Anthropic pozive, ne dodaje agentsku
funkcionalnost i ne tvrdi da su svi AI putovi aplikacije obračunani.

Postojeći `runAgent` poziv `checkCapability(input.userId, agent.type)` i dalje
izostavlja treći argument `supabase` koji ta funkcija zahtijeva. Na putu bez
važećeg cache zapisa to može prekinuti izvršavanje prije wrappera. Argument se
namjerno ne popravlja izdvojeno jer bi oslobodio drugi neobračunati put. Ova
sigurnosna promjena nije dokaz funkcionalnog rada agenata niti popravak svih
njihovih postojećih ugovora. Postojeći HTTP error handling nije promijenjen;
iznimka iz wrappera u aktualnim rutama završava njihovim postojećim odgovorom
500, a zastavica koja je isključena i dalje vraća 503 prije izvršavanja.

## Uvjeti za uklanjanje blokade

Blokada se može ukloniti tek zasebnim pregledanim implementacijskim paketom koji
ispuni sve sljedeće uvjete:

1. Serverski autentificirani korisnik, pripadajući Supabase klijent, prava agenta
   i vlasništvo memorije/razgovora moraju se provesti kroz stvarni izvršni put.
   Nedostajući argument capability provjere tada se popravlja uz povezane
   regresije, a ne samostalno kao prekidač koji otvara provider pozive.
2. Podržane agentske značajke i modeli moraju imati odobren ugovor s ledgerom,
   važeće izvore cijena i konfigurirane serverske budžete. Postojeći
   `VALID_FEATURES` u `lib/ai-usage/ledger.js` trenutačno ne sadrži agentske
   značajke. Nije dovoljno proslijediti proizvoljan naziv ili pretpostavljenu
   cijenu u postojeći helper.
3. Prije svakog potencijalno naplativog provider izvršavanja treba dokazati
   uspješnu rezervaciju, ograničenja ulaza/izlaza i kontrolu konkurentnih zahtjeva.
   Pokušaji, ponavljanja i eventualni dodatni tool turnovi moraju imati jasan
   identitet i pravilo obračuna; SDK retry ne smije biti nevidljivo izuzeće.
4. Konačna stvarna potrošnja mora se vezati uz rezervaciju i pouzdano namiriti.
   Nedostajuća potrošnja, prekid ili neuspjelo spremanje moraju ostati nepoznati
   ili nesigurni prema ledger ugovoru, bez zamjene nulom i bez dvostrukog
   brojanja cache tokena. Rezervacija se oslobađa samo kada za to postoji
   dokaziv siguran uvjet.
5. Ciljane regresije moraju pokriti odbijenu autentifikaciju i prava, iscrpljen
   budžet, neuspjeh rezervacije/obračuna, ponavljanja i konkurenciju, uz potvrdu
   da odbijeni zahtjevi ne dodiruju provider. Potrebni su neovisni sigurnosni
   pregled, puni testni skup i zasebna potvrda stvarnog deployment/DB odredišta
   prije razmatranja produkcijskog uključivanja.

## Provjera ove promjene

`__tests__/security/agent-provider-guard.test.js` koristi stvarnu orchestrator
rutu i orchestrator modul uz mockane autentifikaciju i `runAgent`, a za provider
granicu koristi stvarni wrapper i mockani Anthropic SDK. Provjerava podmetnuti i
uobičajeni ulaz te oba izvoza wrappera uz obje postojeće zastavice postavljene
na `false` i na `true`, isključivo unutar test procesa. Mrežni `fetch` je blokiran.
To dokazuje identitetsku granicu i blokadu wrappera, ne funkcionalan agent niti
ponašanje stvarne baze ili produkcije.

Prije popravka pet od šest slučajeva pada na očekivanim sigurnosnim tvrdnjama;
slučaj uobičajenog ulaza već prolazi. Nakon popravka isti testni sadržaj mora
proći u cijelosti. Obvezna lokalna provjera prije commita je
`npm run security:secrets`, uz `git diff --check` i jedan puni `npm test` prolaz.
Neovisni sigurnosni pregled i odobrenje za merge ne može zamijeniti autorova
vlastita provjera.

Revert ove promjene vratio bi i nezaštićenu identitetsku granicu i neobračunati
wrapper. To nije siguran način ponovnog uključivanja agenata; popravak treba
zadržati do potpune provjerene integracije.
