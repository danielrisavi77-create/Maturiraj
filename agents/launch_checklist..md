# 🚀 SVRHA

Ovo je operativni dokument za provjeru:

> **je li maturiraj.hr + Discere dovoljno stabilan, jasan i monetizacijski siguran za stvarne korisnike**

Ovo NIJE “savršeno prije launch-a” lista.

Ovo JE:
➡️ **minimalni ozbiljni standard prije stvarnog korištenja**

Ako više kritičnih stavki ovdje nije zadovoljeno:
➡️ proizvod nije launch-ready.

---

# 1) CORE PRODUCT CLARITY CHECK

## [ ] Proizvod djeluje kao JEDAN sustav
Provjera:
- Discere i maturiraj ne djeluju kao dvije aplikacije
- nema duplih identiteta
- korisnik ne osjeća fragmentaciju

## [ ] Korisnik odmah razumije što proizvod radi
Provjera:
- landing je jasan
- dashboard je jasan
- korisnik ne luta

## [ ] Korisnik zna što je njegov sljedeći korak
Provjera:
- dashboard vodi
- plan vodi
- simulator vodi
- nema osjećaja “ok… i sad?”

---

# 2) FREE / STANDARD / PRO CHECK

## [ ] FREE je jasno ograničen
Provjera:
- free korisnik ne dobiva puni proizvod
- free jasno pokazuje vrijednost, ali ostaje teaser

## [ ] STANDARD djeluje kao pravi proizvod
Provjera:
- standard korisnik dobiva puni core Discere experience
- standard ne djeluje “okrnjeno”

## [ ] PRO djeluje kao ozbiljna nadogradnja
Provjera:
- pro ima jasnu dodatnu vrijednost
- pro nije samo skup random lockova

## [ ] Monetizacijska hijerarhija je jasna
Mora vrijediti:
- FREE = teaser
- STANDARD = core paid product
- PRO = enhanced version

---

# 3) ENTITLEMENT / PAYWALL SECURITY CHECK

## [ ] Free korisnik ne može slučajno doći do Standard funkcija
Provjera:
- route check
- UI check
- conditional rendering check
- hidden state check

## [ ] Free korisnik ne može slučajno doći do Pro funkcija
Provjera:
- premium widgets
- analytics
- AI premium layer
- advanced simulator / plan layer

## [ ] Lock stateovi su konzistentni
Provjera:
- ono što je zaključano vizualno mora biti zaključano i stvarno

## [ ] Access logika nije razbacana posvuda
Provjera:
- entitlement je centraliziran ili barem dosljedan

---

# 4) AUTH / USER FLOW CHECK

## [ ] Login radi pouzdano
Provjera:
- login screen
- validacija
- redirect nakon logina

## [ ] Logout radi čisto
Provjera:
- session cleanup
- nema ghost stateova

## [ ] Protected routeovi rade kako treba
Provjera:
- user bez pristupa ne može unutra
- nema redirect loopova
- nema čudnih half-auth stateova

## [ ] Session restore radi
Provjera:
- refresh page
- reopen browser
- app se ponaša logično

## [ ] Logged-out korisnik dobiva smislen UX
Provjera:
- nije bačen u broken stanje
- zna što može napraviti dalje

---

# 5) DASHBOARD CHECK

## [ ] Dashboard ima jasan prioritet
Provjera:
- vidi se što je najvažnije
- nema previše jednakih “važnih” kartica

## [ ] Dashboard daje “next step”
Provjera:
- korisnik zna što treba kliknuti dalje

## [ ] Dashboard ne djeluje cluttered
Provjera:
- vizualni ritam
- nema osjećaja feature dumpa

## [ ] Free / Standard / Pro dashboard experience je ispravno diferenciran
Provjera:
- free ne dobiva puni dashboard
- standard dobiva puni core
- pro dobiva enhancement layer

---

# 6) PLAN UČENJA CHECK

## [ ] Plan je jasan
Provjera:
- korisnik razumije što plan znači
- nema konfuzije oko korištenja

## [ ] Plan vodi u akciju
Provjera:
- plan nije samo “lijep popis”
- korisnik zna što sada treba napraviti

## [ ] Plan se ponaša stabilno
Provjera:
- load/save radi
- state ne nestaje
- nema random resetova

## [ ] Free / Standard / Pro plan logika je točna
Provjera:
- free ne dobiva puni plan
- standard dobiva puni core plan
- pro dobiva enhancement ako postoji

---

# 7) SIMULATOR CHECK

## [ ] Start flow simulatora je jasan
Provjera:
- korisnik zna što pokreće
- nema konfuzije prije starta

## [ ] Rješavanje zadataka radi stabilno
Provjera:
- answer states
- navigation
- persistence
- timer (ako postoji)

## [ ] Finish flow radi
Provjera:
- submit
- end state
- review / results flow

## [ ] Simulator djeluje ozbiljno i premium
Provjera:
- nije “samo još jedna stranica”
- gradi povjerenje

## [ ] Free / Standard / Pro simulator logika je točna
Provjera:
- free ne dobiva puni simulator
- standard dobiva core simulator
- pro dobiva enhancement layer ako postoji

---

# 8) AI / SMART HELP CHECK

## [ ] AI ima jasnu ulogu
Provjera:
- nije samo random chat box

## [ ] AI ne djeluje broken
Provjera:
- loading
- responses
- UX stateovi

## [ ] AI premium logika je ispravna
Provjera:
- free ne dobiva puni AI value
- standard/pro imaju smislen raspored vrijednosti

---

# 9) MOBILE CHECK

## [ ] Nema horizontalnog overflowa
## [ ] Nema razbijenih kartica
## [ ] Nema neupotrebljivih modala
## [ ] Navigacija radi na mobitelu
## [ ] Paywall i CTA flowovi rade na mobitelu
## [ ] Dashboard je čitljiv i funkcionalan na mobitelu
## [ ] Simulator je upotrebljiv na mobitelu
## [ ] Plan učenja je čitljiv i operativan na mobitelu

Ako ovo nije riješeno:
➡️ launch nije siguran.

---

# 10) UI / TRUST CHECK

## [ ] Proizvod izgleda dovoljno ozbiljno za naplatu
Provjera:
- ne djeluje kao studentski projekt
- ne djeluje poludovršeno

## [ ] CTA-ovi su jasni
Provjera:
- zna se gdje kliknuti
- nema nejasnih akcija

## [ ] Empty states nisu mrtvi
Provjera:
- svaki prazan ekran daje smisao i smjer

## [ ] Lock stateovi djeluju premium
Provjera:
- nisu jeftini
- nisu očajni
- nisu frustrirajući bez objašnjenja

## [ ] Pricing / upgrade trenutci djeluju pametno
Provjera:
- ne djeluju naporno
- ne djeluju spammy
- ne djeluju neozbiljno

---

# 11) TECHNICAL SAFETY CHECK

## [ ] Nema očitih console errora
## [ ] Nema obvious null / undefined crash rizika
## [ ] Nema mrtvih importova koji ruše build
## [ ] Nema broken routeova
## [ ] Nema obvious hydration bugova
## [ ] Nema očitih deploy blocker problema

---

# 12) BUILD / DEPLOY CHECK

## [ ] App build prolazi
## [ ] Env varijable su poznate i pravilno postavljene
## [ ] Supabase konekcije su stabilne
## [ ] Auth flow radi i na produkciji
## [ ] Protected routeovi rade i na produkciji
## [ ] Paywall logika radi i na produkciji

Ako bilo što od ovoga nije potvrđeno:
➡️ launch je rizičan.

---

# 13) FIRST USER EXPERIENCE CHECK

## [ ] Novi korisnik zna što prvo napraviti
## [ ] Novi korisnik razumije razliku FREE / STANDARD / PRO
## [ ] Novi korisnik osjeti vrijednost unutar prvih nekoliko minuta
## [ ] Novi korisnik ne upada u slijepu ulicu
## [ ] Novi korisnik ima razlog ostati ili kupiti

Ako prvi korisnik nema dobar flow:
➡️ proizvod neće dobro konvertirati.

---

# 14) MINIMALNI KRITERIJ ZA “MOŽE VAN”

Proizvod se može pokazati stvarnim korisnicima tek kada vrijedi:

- nema očitih monetization leakova
- nema očitih auth bugova
- nema očitih broken routeova
- free / standard / pro je jasno
- dashboard vodi korisnika
- plan i simulator rade dovoljno stabilno
- app izgleda dovoljno ozbiljno da opravda naplatu

Ako to nije istina:
➡️ još nije vrijeme za launch.

---

# 15) LAUNCH BLOCKERS (RUČNO DOPUNJAVATI)

Ovdje zapisivati konkretne launch blockere:

- [ ] ______________________________________________________
- [ ] ______________________________________________________
- [ ] ______________________________________________________
- [ ] ______________________________________________________

---

# 16) POST-LAUNCH WATCHLIST (RUČNO DOPUNJAVATI)

Ovdje zapisivati stvari koje nisu launch blocker, ali ih treba pratiti odmah nakon izlaska:

- [ ] ______________________________________________________
- [ ] ______________________________________________________
- [ ] ______________________________________________________
- [ ] ______________________________________________________

---

# 📌 UPUTA ZA AGENTE

Ako čitaš ovaj file:

Tvoj posao NIJE reći “izgleda dobro”.

Tvoj posao JE:
- pronaći rupe
- zatvoriti rupe
- smanjiti rizik
- povećati povjerenje
- učiniti proizvod dovoljno sigurnim za stvarne korisnike

Ako postoji konflikt između:
- dodavanja novog featurea
i
- zatvaranja launch rizika

➡️ uvijek zatvaraš launch rizik.