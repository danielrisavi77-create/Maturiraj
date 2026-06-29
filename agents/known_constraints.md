## 🚧 SVRHA

Ovaj dokument definira:

> **poznata ograničenja projekta**

Njegova svrha je da:
- agent ne donosi pogrešne pretpostavke
- razvoj ostane realan
- ne trošimo vrijeme na stvari koje još nisu spremne
- ne radimo glupe tehničke ili produktne poteze

Ovo nije negativan dokument.

Ovo je:
➡️ **realistični zaštitni okvir projekta**

---

# 1) GLAVNO PRAVILO

> **Ne ponašamo se kao da je sve spremno, ako nije spremno.**

To znači:

- ne glumimo “full production company stack” ako ga još nemamo
- ne radimo flowove koji ovise o stvarima koje još nisu zaključane
- ne gradimo sustav na lažnim pretpostavkama

---

# 2) POSLOVNA / KOMERCIJALNA OGRANIČENJA

## 2.1. Monetizacija možda još nije potpuno poslovno aktivna
Status: ⚠️ Ograničeno / ovisi o poslovnoj spremnosti

Moguća stvarnost:
- firma možda još nije formalno spremna za puni komercijalni rollout
- naplata možda još nije za stvarni produkcijski launch
- dio payment flowa može biti:
  - demo
  - staging
  - privremeni setup

### Pravilo za agente:
Ne tretirati monetizaciju kao potpuno finalnu ako poslovna strana još nije formalno zaključana.

---

## 2.2. Nisu svi komercijalni detalji nužno finalni
Status: ⚠️ Ograničeno

Primjeri:
- konačne cijene
- konačni copy za pricing
- konačna prodajna pozicioniranja
- konačna launch ponuda

### Pravilo:
Ne zaključavati tvrdo stvari koje trebaju ostati fleksibilne za poslovnu odluku.

---

# 3) PRAVNA / SADRŽAJNA OGRANIČENJA

## 3.1. Edukacijski sadržaj mora se tretirati pažljivo
Status: ⚠️ Važno

Posebno vrijedi za:
- državnu maturu
- ispitne materijale
- rješenja
- reprodukciju sadržaja
- transformirani sadržaj

### Pravilo:
Agent ne smije pretpostavljati da se sav sadržaj može koristiti potpuno slobodno bez promišljanja.

Ako se radi na:
- sadržajnim bazama
- simulacijama
- pitanjima
- rješenjima

…mora se raditi pažljivo i strateški.

---

## 3.2. Ne uvoditi pravno rizične funkcionalnosti bez razloga
Status: ⚠️ Važno

Primjeri:
- masovno kopiranje sadržaja bez kontrole
- nepromišljeno javno izlaganje osjetljivog materijala
- featurei koji nepotrebno povećavaju pravni rizik

### Pravilo:
Ako nešto potencijalno povećava pravni rizik, ne raditi to automatski.

---

# 4) TEHNIČKA OGRANIČENJA

## 4.1. Projekt nije mjesto za overengineering
Status: 🔒 Zaključano pravilo

Ovaj projekt NE treba:
- enterprise kompleksnost
- mikroservisni mentalitet
- pretjeranu apstrakciju
- “fancy architecture” bez potrebe

### Pravilo:
Uvijek preferirati:
- jednostavnije
- jasnije
- brže održivo
- launch-praktično rješenje

---

## 4.2. Ne smije se nepotrebno razbijati postojeći working code
Status: 🔒 Kritično pravilo

Ako nešto trenutno radi dovoljno dobro:
- ne razbijati ga bez vrlo dobrog razloga

### Pravilo:
Ne dirati stabilan dio sustava samo zato što postoji “ljepši” tehnički pristup.

---

## 4.3. Neki dijelovi koda mogu biti privremeno ružni, ali funkcionalni
Status: ⚠️ Realnost projekta

Moguće je da postoje:
- veliki fileovi
- manje elegantna rješenja
- prijelazna rješenja
- privremeni workaroundovi

### Pravilo:
Ne raditi veliki refactor samo zato što nešto nije estetski savršeno.

Ako nešto:
- radi
- ne blokira launch
- ne ubija UX
- ne ubija monetizaciju

…onda nije automatski prioritet za prepravljanje.

---

## 4.4. Performance je važniji od “cool” efekata
Status: 🔒 Zaključano pravilo

Ne uvoditi:
- teške animacije
- nepotrebne efekte
- render kaos
- vizualni polish koji usporava app

### Pravilo:
Ako nešto izgleda bolje, ali app radi lošije:
➡️ to nije poboljšanje.

---

# 5) PRODUKTNA OGRANIČENJA

## 5.1. Proizvod ne smije širiti scope bez jasnog razloga
Status: 🔒 Kritično pravilo

Najveći rizik projekta je:
> feature creep

### Pravilo:
Ne dodavati:
- random nove module
- sporedne alate
- “još jednu sekciju”
- “ovo bi moglo biti fora”

…ako to ne podržava jasno:
- korisničku vrijednost
- monetizaciju
- retention
- launch readiness

---

## 5.2. Proizvod još nije u fazi “širenja u svim smjerovima”
Status: ⚠️ Trenutno ograničenje

Trenutna faza projekta je:
➡️ **integracija i stabilizacija**

To znači da je prioritet:
- učvrstiti
- povezati
- pojednostaviti
- zaključati

Ne:
- širiti
- eksperimentirati nasumično
- raditi “phase 3” featuree prerano

---

## 5.3. Ne graditi feature samo zato što “zvuči premium”
Status: 🔒 Važno pravilo

Nisu sve “premium” ideje zapravo dobre.

### Pravilo:
Ne raditi feature ako:
- nema jasnu svrhu
- ne pomaže korisniku
- ne pomaže monetizaciji
- ne povećava stvarnu vrijednost

---

# 6) UX OGRANIČENJA

## 6.1. UI ne smije postati vizualni cirkus
Status: 🔒 Zaključano pravilo

Ne uvoditi:
- previše efekata
- previše boja
- previše “wow” elemenata
- previše konkurentnih CTA-ova

### Pravilo:
Uvijek birati:
- jasnoću
- premium ozbiljnost
- fokus
- konzistentnost

---

## 6.2. Korisnik ne smije biti izgubljen radi “bogatijeg iskustva”
Status: 🔒 Kritično

Ne raditi UX koji:
- izgleda bogatije
- ali je teži za razumjeti

### Pravilo:
Jasnoća pobjeđuje “feature richness”.

---

# 7) ACCESS / AUTH OGRANIČENJA

## 7.1. Client-side skrivanje nije dovoljna sigurnost
Status: 🔒 Kritično

Ne smije se pretpostavljati da je nešto “zaštićeno” samo zato što:
- button nije prikazan
- kartica je blurana
- UI djeluje zaključano

### Pravilo:
Access kontrola mora biti:
- stvarna
- konzistentna
- ne samo vizualna

---

## 7.2. localStorage nije pravi source of truth za važne stvari
Status: 🔒 Važno

Ne tretirati localStorage kao finalno rješenje za:
- pristup
- subscription
- stvarni progress
- ozbiljne korisničke podatke

### Pravilo:
Ako je nešto važno za:
- monetizaciju
- retention
- korisničku vrijednost

…ne smije ostati samo na localStorage logici dugoročno.

---

# 8) TIM / RAZVOJNA OGRANIČENJA

## 8.1. Projekt mora ostati održiv za solo / lean build način rada
Status: 🔒 Kritično

Ovaj projekt se mora moći održavati bez:
- ogromnog tima
- enterprise procesa
- previše internih dependencyja

### Pravilo:
Sve što uvodimo mora biti dovoljno:
- razumljivo
- održivo
- popravljivo
- brzo za iteraciju

---

## 8.2. Ne uvoditi procese koji usporavaju razvoj bez realne koristi
Status: 🔒 Važno

Ne uvoditi:
- previše procedura
- previše dokumentacije koja nema funkciju
- previše tehničkih rituala bez outputa

### Pravilo:
Sve mora služiti:
- jasnoći
- brzini
- kvaliteti
- stabilnosti

---

# 9) LAUNCH OGRANIČENJA

## 9.1. Launch ne znači “savršeno”
Status: 🔒 Važno

Ne čekamo:
- apsolutno savršenstvo
- 100% završenost
- beskonačni polish

### Pravilo:
Launch znači:
> dovoljno dobro, dovoljno sigurno, dovoljno jasno, dovoljno monetizabilno

---

## 9.2. Ali launch ne smije biti ni prerani “fake launch”
Status: 🔒 Kritično

Ne lansirati ako postoje ozbiljne rupe u:
- authu
- pristupu
- monetizaciji
- glavnom flowu
- stabilnosti

### Pravilo:
Ne izlaziti van samo zato što “izgleda spremno”.

---

# 10) DEFINICIJA REALNOG OKVIRA PROJEKTA

Ovaj projekt treba se razvijati unutar sljedećeg realnog okvira:

- lean
- brzo
- fokusirano
- monetizacijski pametno
- bez nepotrebne kompleksnosti
- bez lažnog enterprise mindseta
- bez feature inflacije

To je zdravi okvir.

---

# 11) KADA NISI SIGURAN — PITAJ OVO

Ako nisi siguran treba li nešto raditi, pitaj:

### A) Je li ovo uopće trenutno moguće / smisleno?
### B) Je li ovo stvarno prioritet?
### C) Je li ovo usklađeno s realnom fazom projekta?
### D) Povećava li ovo stvarnu vrijednost?
### E) Povećava li ovo rizik ili kaos?

Ako odgovor nije jasan:
➡️ nemoj to gurati automatski.

---

# 📌 UPUTA ZA AGENTE

Ako čitaš ovaj file:

Tvoj posao NIJE:
- ponašati se kao da je sve spremno i sve dopušteno

Tvoj posao JE:
- poštivati stvarna ograničenja projekta
- graditi unutar realnog okvira
- ne stvarati dodatni kaos
- ne gurati stvari koje još nisu zrele

Ako postoji konflikt između:
- “ambicioznije ideje”
i
- “realno održivog smjera”

➡️ uvijek biraj realno održiv smjer.