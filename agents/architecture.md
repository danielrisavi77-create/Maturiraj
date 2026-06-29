 🏗️ SVRHA

Ovaj dokument definira **tehničku i produktnu arhitekturu** sustava:

> **maturiraj.hr + Discere**

Njegova svrha je da:
- agent razumije kako je proizvod složen
- ne uvodi arhitektonski kaos
- ne duplicira featuree
- ne ruši postojeće logičke veze

Ovo nije “teorijski tehnički dokument”.

Ovo je:
➡️ **operativna mapa proizvoda i sustava**

---

# 1) TEMELJNA ARHITEKTONSKA ISTINA

> Ovo mora biti JEDAN proizvod, a ne više spojenih proizvoda.

To znači:

- maturiraj.hr je **krovna platforma**
- Discere je **core paid learning experience unutar platforme**
- korisnik ne smije osjećati:
  - dvije aplikacije
  - dva različita sustava
  - dva različita proizvoda

Arhitektura mora podržavati:
- jedan UX
- jednu logiku pristupa
- jedan osjećaj proizvoda
- jedan glavni user flow

---

# 2) GLAVNI PRODUKTNI SLOJEVI

Proizvod se sastoji od 5 glavnih slojeva:

---

## A) PUBLIC / CONVERSION LAYER
Ovo je javni, vanjski sloj proizvoda.

### Uloga:
- privlačenje korisnika
- objašnjenje vrijednosti
- teaser experience
- konverzija u Standard / Pro

### Tipične sekcije:
- landing page
- intro / hero
- pricing / planovi
- benefit sekcije
- preview experience

### Važno:
Ovaj sloj ne smije slučajno sadržavati puni proizvod.

---

## B) AUTH / ACCESS LAYER
Ovo je sloj koji određuje:
- tko je korisnik
- je li prijavljen
- koji plan ima
- što smije vidjeti / koristiti

### Mora upravljati:
- login / logout
- session state
- protected routeovi
- entitlement
- plan state (free / standard / pro)

### Ovo je jedan od najkritičnijih slojeva cijelog sustava.

---

## C) CORE APP SHELL
Ovo je glavni unutarnji kostur proizvoda.

### Uključuje:
- layout
- navigation
- sidebar / top nav / mobile nav
- page shell
- user context
- glavni “osjećaj aplikacije”

### Uloga:
Korisnik mora imati osjećaj da je unutar:
> jednog premium study operating systema

Ako je shell nekonzistentan:
➡️ cijeli proizvod djeluje fragmentirano.

---

## D) CORE LEARNING EXPERIENCE (DISCERE LAYER)
Ovo je srce proizvoda.

### Uključuje:
- dashboard
- plan učenja
- simulator
- AI pomoć
- progress / tracking
- preporuke
- saved / favorites gdje ima smisla

### Ovo je glavni razlog zašto korisnik plaća.

### Vrlo važno:
Discere nije zaseban app module koji živi “sa strane”.
Discere je:
> **ugrađeni learning engine proizvoda**

---

## E) PREMIUM / ENHANCEMENT LAYER
Ovo je sloj koji razlikuje:
- Standard
- Pro

### Uključuje:
- naprednu inteligenciju
- adaptivnost
- napredne uvide
- dublju personalizaciju
- acceleration features

### Važno:
Ovaj sloj ne smije:
- popravljati loš Standard
- djelovati kao hrpa random lockova

---

# 3) GLAVNA PRODUKTNA STRUKTURA (VISOKA RAZINA)

Proizvod treba logički imati sljedeće glavne zone:

---

## 1. Public / Entry zone
### Svrha:
- privući
- objasniti
- konvertirati

### Tipično:
- homepage
- intro
- pricing
- CTA ulazi

---

## 2. Auth / Identity zone
### Svrha:
- prijava
- registracija
- session state
- pristup

---

## 3. Dashboard / Command zone
### Svrha:
- dati korisniku orijentaciju
- dati “next step”
- biti home base

---

## 4. Learning execution zone
### Svrha:
- stvarno učenje
- stvarni rad
- stvarna priprema

### Tu ulaze:
- plan
- simulator
- AI pomoć
- rezultati
- preporuke

---

## 5. Account / Settings / Subscription zone
### Svrha:
- profil
- plan
- pristup
- eventualne postavke

---

# 4) KLJUČNO ARHITEKTONSKO PRAVILO

> Svaki važan feature mora pripadati jednoj glavnoj zoni.

Ako neki feature “lebdi” i nije jasno:
- gdje pripada
- čemu služi
- kako se koristi

…onda je arhitektonski slab.

To je zabranjeni pattern.

---

# 5) PREPORUČENA APP LOGIKA (KAKO KORISNIK TREBA TEĆI)

Idealni flow izgleda ovako:

### 1. Korisnik ulazi kroz public layer
↓
### 2. Razumije vrijednost
↓
### 3. Registrira se / prijavljuje
↓
### 4. Ulazi u app shell
↓
### 5. Dolazi na dashboard
↓
### 6. Odlazi u:
- plan
- simulator
- AI
- progress
↓
### 7. Vraća se na dashboard kao home base
↓
### 8. Napreduje / vraća se / kupuje upgrade

Ako flow nije ovako jasan:
➡️ sustav treba doraditi.

---

# 6) ROUTING FILOZOFIJA

Routing mora služiti:
- jasnoći
- brzini
- orijentaciji

Ne smije služiti:
- povijesnom neredu
- “jer smo to nekad tako napravili”
- duplikaciji

---

## Pravila routing arhitekture

### Pravilo 1
Jedan feature = jedno jasno mjesto

### Pravilo 2
Ne smiju postojati dupli routeovi za isti mentalni feature

### Pravilo 3
Public i app routeovi moraju biti jasno odvojeni

### Pravilo 4
Protected i unprotected experience moraju biti jasno razdvojeni

---

## Preporučene produktne route zone (konceptualno)

### Public
- landing
- pricing
- auth entry
- teaser screens

### App core
- dashboard
- plan
- simulator
- ai
- results / progress
- saved

### Account
- settings
- subscription
- profile

> Napomena: stvarni routeovi se trebaju prilagoditi postojećem projektu, ali logika mora ostati čista.

---

# 7) DASHBOARD JE ARHITEKTONSKI HUB

Ovo je vrlo važno.

Dashboard nije samo još jedna stranica.

On je:
> **glavni koordinacijski čvor proizvoda**

Zato dashboard mora biti povezan s:

- planom
- simulatorom
- progressom
- AI-em
- saved sadržajem
- upgrade logikom

Ako dashboard ne povezuje te stvari:
➡️ arhitektura je slaba.

---

# 8) PLAN I SIMULATOR NE SMIJU ŽIVJETI ODVOJENO

Ovo je česta greška.

Plan i simulator ne smiju biti:
- dva odvojena svijeta
- dva featurea bez međusobnog odnosa

Idealno:
- plan vodi prema simulatoru
- simulator daje povratnu informaciju
- rezultati simulatora utječu na sljedeće korake
- dashboard to ponovno reflektira

To je zdrava arhitektura proizvoda.

---

# 9) AI MORA BITI UKLOPLJEN U TOK RADA

AI ne smije biti:
- “stranica sa strane”
- “random chat”

AI mora biti arhitektonski povezan s:

- planom
- rezultatima
- preporukama
- napretkom
- slabim točkama korisnika

Ako AI nema ulogu u glavnom flowu:
➡️ arhitektonski je slab.

---

# 10) ACCESS / ENTITLEMENT ARHITEKTURA

Ovo je jedan od najvažnijih dijelova sustava.

App mora imati jednu jasnu istinu o tome:
- tko je korisnik
- koji plan ima
- što smije koristiti

---

## Plan state mora biti jedan od ova tri:
- FREE
- STANDARD
- PRO

Ne smije postojati:
- više paralelnih istina
- više “skoro istih” access modela
- nasumična logika po komponentama

---

## Access kontrola mora postojati na 3 razine

### 1. Route razina
Korisnik ne smije doći na nedopuštenu stranicu

### 2. Feature razina
Korisnik ne smije koristiti nedopuštenu funkciju

### 3. UI razina
Korisnik mora jasno vidjeti što ima, a što nema

Ako postoji samo jedna od te tri:
➡️ arhitektura je nesigurna.

---

# 11) SOURCE OF TRUTH PRAVILO

Vrlo važno.

Za svaku ključnu stvar mora postojati:
> **jedan source of truth**

To posebno vrijedi za:

- auth stanje
- subscription / plan stanje
- entitlement
- user progress
- user preferences
- saved state
- onboarding state

Ako ista stvar postoji na 3 mjesta:
➡️ bugovi su neizbježni.

---

# 12) LOCAL VS PERSISTED STATE LOGIKA

Ovo je važno za stabilnost.

---

## Local state koristiti za:
- privremeni UI state
- otvorene modale
- local interactions
- kratkotrajne prikaze

---

## Persisted / user-linked state koristiti za:
- progress
- favorites
- plan data
- results
- subscription
- long-term user value

---

## Pravilo
Ako je nešto:
- važno za korisnički napredak
- važno za retention
- važno za monetizaciju

➡️ ne smije živjeti samo u localStorage ako to nije namjerna privremena odluka.

---

# 13) KOMPONENTNA ARHITEKTURA — PRAVILA

Ne želimo:
- 100 sitnih komponenti bez razloga
- ni jedan mega file koji radi sve

Želimo:
> **razumno modularan sustav**

---

## Dobra praksa
Komponentu izdvajamo kada:

- se ponavlja
- ima vlastitu odgovornost
- povećava jasnoću
- olakšava održavanje

---

## Loša praksa
Ne izdvajamo komponentu samo zato da:
- “izgleda profesionalnije”
- “bude više fileova”
- “sve bude ultra modularno”

To često stvara više kaosa, ne manje.

---

# 14) DESIGN / UX ARHITEKTURA

Vizualni sustav mora biti arhitektonski konzistentan.

To znači da moraju postojati konzistentni obrasci za:

- kartice
- CTA-e
- lock stateove
- premium stateove
- prazne stateove
- rezultate
- dashboard widgete
- paywall momente

Ako svaka sekcija izgleda kao drugi proizvod:
➡️ to je i UX i arhitektonski problem.

---

# 15) ŠTO JE ARHITEKTONSKI ZABRANJENO

Sljedeće stvari se ne smiju raditi:

- duplicirati feature pod drugim imenom
- uvoditi “mini module” bez jasne produktne uloge
- graditi route bez jasne zone pripadnosti
- skrivati monetization logiku po random komponentama
- raditi feature “sa strane” bez veze s dashboard / plan / simulator flowom
- uvoditi novi data model bez jasne potrebe
- dodavati kompleksnost bez rješavanja stvarnog problema

---

# 16) DEFINICIJA DOBRE ARHITEKTURE ZA OVAJ PROJEKT

Arhitektura je dobra kada:

- proizvod djeluje kao jedan sustav
- korisnik nije izgubljen
- svaki feature ima jasno mjesto
- routing ima smisla
- access logika je sigurna
- dashboard povezuje iskustvo
- plan, simulator i AI rade kao jedan learning engine
- kod je dovoljno čist da se može dalje graditi bez kaosa

---

# 17) OPERATIVNA UPUTA ZA AGENTE

Ako čitaš ovaj file, tvoje pravilo je:

> **Ne dodaj novu arhitekturu ako stara još može biti očišćena i ujednačena.**

Tvoj posao nije:
- pokazati koliko si tehnički pametan

Tvoj posao je:
- održati sustav čistim
- učiniti ga jasnijim
- smanjiti duplikaciju
- sačuvati monetizaciju
- sačuvati stabilnost

Ako postoji izbor između:
- “pametnijeg tehničkog rješenja”
i
- “jasnijeg i stabilnijeg produktnog rješenja”

➡️ uvijek biraj jasnije i stabilnije produkcijsko rješenje.
