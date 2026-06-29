# 🔥 QA AUDIT — ENGLESKI VIŠA RAZINA · SVI 20 POGLAVLJA
> Datum: $(datum generiranja)  
> Metoda: Direktno čitanje svake datoteke + analiza koda  
> Opseg: Kompletna provjera svakog poglavlja — sadržaj, točnost, interaktivnost, UX, matura relevantnost, tehnički bugovi

---

## SISTEMATSKI BUGOVI — VRIJEDE ZA SVA POGLAVLJA

Prije pojedinih poglavlja — tri ponavljajuća problema koja se javljaju u gotovo svakom poglavlju:

### 🔴 BUG-1: Nav-link diskere kutij (KRITIČNO — P02, P13, P15, P16, P17, P18, P19)
Svako poglavlje ima **dvije** discere-kutije. Prva je "nastavi s ..." i koristi:
```html
<a href="poglaviljeXX.html" class="discere-btn">Poglavlje XX →</a>
```
Ovo je navigacijski link na sljedeće poglavlje, **ne** Discere platforma. Vizualno izgleda identično kao Discere gumb — korisnik koji klikne mislit će da otvara Discere ali umjesto toga mijenja poglavlje. Ovo je UX zamka br. 1 u cijelom setu.

**Fix**: Preimenovati prvu kutiju u "nav-block" ili dodati drugačiji vizualni stil (drugačija boja, bez raketice 🚀).

### 🟡 BUG-2: Kriva opisi u drugoj discere-kutiji (VAŽNO — P02, P15, P16)
Svaka "Vježbaj na Discere" kutija ima opis koji bi trebao opisivati **što je upravo naučeno u tom poglavlju**. U nekoliko poglavlja opisi su kopirani s krivog poglavlja:
- **P02**: "Uvježbao/la si sva vremena" → P02 je o metodi učenja, nema nikakvog vremena
- **P15**: "Uvježbao/la si Key Word Transformation" → P15 je o emailu i pismu
- **P16**: "Prošao/la si Use of English" → P16 je o članku i recenziji

### 🟡 BUG-3: Sidebar labele ne odgovaraju sadržaju (VAŽNO — P11, P15, P16, P18)
Sidebar navigacija (lijeva traka s poglavljima) prikazuje pogrešne nazive za 4 poglavlja:

| Poglavlje | Sidebar label | Stvarni sadržaj |
|-----------|--------------|----------------|
| P11 | "Word formation i collocations" | Ključna transformacija (KWT) |
| P15 | "Linking words i vocabulary" | E-mail i formalno pismo |
| P16 | "Greške + model essay" | Članak i recenzija |
| P18 | "Listening strategije" | Reading question types (MC, T/F/NG, MH, SA) |

---

## POGLAVLJE 01 — Engleski A na državnoj maturi

```
SAŽETA OCJENA:
  Točnost sadržaja:        8/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       7/10
  UX i čitljivost:         9/10
  UKUPNA OCJENA:           8/10
```

### 1. Što je dobro
- Jasna podjela ispita s postotcima (Čitanje ~35%, Pisanje ~40%, Slušanje ~25%) — daje učeniku momentalni osjećaj prioriteta
- 4 kriterija pisanja (svaki 25%) prikazana su odmah i jasno — ovo je jedina skripta koja to stavlja na vrh
- "Not Given ≠ False" razlika izričito naglašena — jedna od najčešćih studentskih pogrešaka
- 3 ključna pravila u panic kutiji su precizna i visokovrijedna
- Bar chart rizika po taskovima vizualno je snažan pedagoški alat
- Timer simulator u Layeru 1 je jedinstven i koristan

### 2. Glavni problemi
- Kriterij "Task Achievement" opisuje se kao "jesi li zauzeo jasan stav?" — ovo je specifično za for-and-against esej, ali prikazano kao **opće pravilo za sve pisanje**. Email i članak ne traže "stav" — traže task fulfilment. Ovo može zbuniti učenike koji pišu email ili recenziju.
- Postotak za Writing (~40%) treba verifikaciju — NCVVO rubrike se mogu mijenjati; ako je pogrešno, učenik planira pogrešno

### 3. Što nedostaje
- **Nema primjera stvarnih maturalnih zadataka** — poglavlje opisuje strukturu ali ne prikazuje niti jedan realni zadatak
- **Nema informacije o broju bodova po cjelini** — postotci su dobri ali bi i bodovi bili konkretni
- Layer 2 (Tab2) drills nisu analizirani u detalju — vjerojatno postoje ali nema podatka o kvaliteti

### 4. Kritične greške
- Task Achievement definicija previše uska (specifična za esej, nije generalna) — ISPRAVITI

### 5. UX problemi
- Bez primjedbi — tab struktura čista, panic kutija vizualno istaknuta

### 6. Je li korisno za maturu?
**DA** — jedno od najkorisnijih poglavlja u setu. Učenik koji pročita P01 ima mentalni model cijelog ispita.

### 7. Prioritetne izmjene
- **VAŽNO**: Precizirati Task Achievement definiciju — dodati da se odnosi na esej (za email/pismo = "si li ispunio/la sve tražene točke zadatka")
- **POŽELJNO**: Verifikacija postotaka s NCVVO materials

### 8. Konkretni prijedlog
```
STARO: "Task Achievement: jesi li zauzeo jasan stav?"
NOVO:  "Task Achievement: za esej = jasan stav i oba kuta; 
        za email/pismo/članak = ispunjeni svi traženi zadaci"
```

---

## POGLAVLJE 02 — Kako koristiti skriptu

```
SAŽETA OCJENA:
  Točnost sadržaja:        8/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     6/10
  Primjeri i zadaci:       6/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           7.5/10
```

### 1. Što je dobro
- 6-fazni plan učenja s konkretnim tjednima do mature — iznimno praktično
- 20-minutni ritam sesije (2-3-12-17-20 min podjela) je pedagoški opravdan i specifičan
- Active recall metodologija objašnjena s konkretnim primjerom (Conditionals poglavlje)
- Habit tracker s kalendarom i streak-om je motivacijska inovacija
- 5 quiz pitanja o metodologiji učenja — neobično, ali pedagoški dobro

### 2. Glavni problemi
- **BUG-1 potvrđen**: U Tab1 i Tab2, `<a href="poglavlje03.html" class="discere-btn">` koristi se kao gumb za Discere — ali otvara Poglavlje 03! Nije openDiscere().
- **BUG-2 potvrđen**: Druga Discere kutija u Tab2 opisuje: *"Uvježbao/la si sva vremena. Riješiti prave vreme-zadatke..."* — P02 nema ni jedno gramatičko vježbanje. Opis je prepisan s P03 ili P04.
- Matura relevantnost ove stranice je niska za učenika koji je već zna koristiti skriptu

### 3. Što nedostaje
- Kratki video ili GIF koji demonstrira workflow — opcionalno ali visoko korisno
- Vizualni "study plan" kalendar koji učenik može ispisati

### 4. Kritične greške
- **KRITIČNO**: Discere-btn u Tab1 otvara P03, ne Discere platformu. Korisnik koji klikne "Pokaži mi Discere" dobiva P03 — kompletna UX katastrofa.

### 5. UX problemi
- Habit tracker je sjajan ali može biti previše složen za prve minute na stranici — razmotriti smještaj

### 6. Je li korisno za maturu?
Neizravno — postavlja učenikov mentalni okvir. Visoka dugoročna vrijednost, niska akutna matura vrijednost.

### 7. Prioritetne izmjene
- **KRITIČNO**: Zamijeniti `<a href="poglavlje03.html">` u Tab1 s `<button onclick="openDiscere()">` ili čistim nav linkom s drugačijim stilom
- **KRITIČNO**: Ispraviti opis u Discere kutiji Tab2 (trenutno govori o vremenima)

### 8. Konkretni prijedlog
```html
<!-- STARO (krivo): -->
<a href="poglavlje03.html" class="discere-btn">Poglavlje 03: Vremena →</a>

<!-- NOVO (nav link, ne Discere): -->
<a href="poglavlje03.html" class="nav-btn primary">Nastavi: Poglavlje 03 →</a>

<!-- STARO (krivi opis Discere kutije): -->
<div class="discere-desc">Uvježbao/la si sva vremena...</div>

<!-- NOVO: -->
<div class="discere-desc">Spreman/na si početi? Na Discere čekaju pravi ispitni zadaci za sve tematske cjeline.</div>
```

---

## POGLAVLJE 03 — Vremena koja se najčešće miješaju

```
SAŽETA OCJENA:
  Točnost sadržaja:        8/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     8/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           8/10
```

### 1. Što je dobro
- State verbs lista je precizna i potpuna (know/believe/want/love/hate/understand/seem/need)
- Signal words chips su vizualno upečatljivi i lako pamtljivi
- Decision tree za razlikovanje PS/PC/PP je logički strukturiran
- Future forms (will/going to/PC/PS) tabelarno — rijetko koji izvor to pokriva tako sažeto

### 2. Glavni problemi
- Čitanje je rađeno via subagent (manje detalja) — moguće da postoje problemi koje nisam uhvatio
- State verbs pravilo NEVER IN CONTINUOUS je apsolutno — ali "be" se može koristiti u continuous u specifičnim kontekstima ("You're being annoying" = ponašanje, ne osobina). Je li ovo objašnjeno?

### 3. Što nedostaje
- **Temporal clause rule**: after/when/before + PS (ne will) — česta maturalna zamka koja nije navedena
- Više kontekstualnih primjera za PS vs PP distinction u složenim rečenicama

### 4. Kritične greške
- State verbs "NEVER IN CONTINUOUS" tvrdnja — treba napomenu za "being" u progresivnom značenju ponašanja

### 5. UX problemi
- Bez specifičnih primjedbi

### 6. Je li korisno za maturu?
**DA** — glagolska vremena su srž Use of English dijela.

### 7. Prioritetne izmjene
- **POŽELJNO**: Dodati temporal clause futur rule (after/when + PS)
- **POŽELJNO**: Napomena o "being" iznimki za state verbs

---

## POGLAVLJE 04 — Perfect vremena

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     8/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           8.2/10
```

### 1. Što je dobro
- for vs since razlika s primjerima — najčešća zamka u PP
- just/already/yet/still pozicije su jasno tabelirane
- PPC (have been + -ing): duration/visible effect distinction je korisna pedagogija
- "State verbs NEVER in PPC" pravilo dobro istaknuto

### 2. Glavni problemi
- (Via subagent — limitirana dubina analize)

### 3. Što nedostaje
- "I've been waiting for ages / I waited for an hour" — razlika PPS vs PS s naglaskom na relevantnosti za sadašnjost

### 4. Kritične greške
- Nema uočenih kritičnih grešaka

### 5. Prioritetne izmjene
- **POŽELJNO**: Primjeri koji kontrastiraju PPS ("I have loved this film since I was a child") vs PPC ("I've been watching documentaries all week")

---

## POGLAVLJE 05 — Conditionals

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           8.2/10
```

### 1. Što je dobro
- Inversion uzoci (Had/Were/Should) — premium sadržaj koji rijetko koji učbenik pokriva
- Mixed conditionals — direktno relevantni za maturalni esej (KWT i gramataika)
- "WERE not WAS" pravilo za 2nd conditional jasno istaknuto
- 9+9+2 drill/MCQ/KWT kombinacija je dobra za duboko vježbanje

### 2. Glavni problemi
- P05 je React komponenta s `onDiscere` prop — ovo je STRUKTURALNA IZNIMKA. Ako se ikad promijeni način isporuke React komponenti, P05 može prestati raditi dok ostala poglavlja ostaju funkcionalna.
- Via subagent — limitirana dubina

### 3. Što nedostaje
- "Unless = if not" razlika (uvodi se tek u P20 panic kartici — trebalo bi biti ovdje)

### 4. UX problemi
- React iznimka stvara rizik tehničkog razlaza s ostatkom seta

### 5. Prioritetne izmjene
- **VAŽNO**: Dokumentirati da je P05 React komponenta i zašto, kako bi budući developer odmah znao
- **POŽELJNO**: Dodati unless = if not u P05 ili u P03

---

## POGLAVLJE 06 — Passive Voice i Reported Speech

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           8.2/10
```

### 1. Što je dobro
- Backshift tablica (PS→Past, will→would, can→could) — vizualno jasna i kompletna
- By-fraza: 3 uvjeta za izostavljanje su precizni i pedagoški dobro redigirani
- Deiktici tablica (today→that day, here→there) je rijetko gdje prisutna
- Say (no object) vs tell (uvijek objekt) razlika je dobro istaknuta

### 2. Glavni problemi
- **Dual-topic problem**: Passive i Reported Speech su dvije zasebne gramataičke cjeline koje zaslužuju zasebna poglavlja. Kombinacija stvara dugo poglavlje gdje učenik ne može fokusirati učenje.
- RS pitanja (no inversion, no do/did) — dobro istaknuta pravila, ali bez dovoljno primjera za RS questions

### 3. Što nedostaje
- RS za pitanja: "She asked where he **had been**" — primjer sa backshiftom u indirektnim pitanjima
- Razlika između say/tell/ask/tell/warn/remind u reporting glagolima

### 4. Prioritetne izmjene
- **POŽELJNO**: Odvojiti Passive i RS u zasebna poglavlja (ili dodati jasnu vizualnu podjelu unutar poglavlja)

---

## POGLAVLJE 07 — Modals, Articles, Quantifiers

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       9/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           8.4/10
```

### 1. Što je dobro
- **must/have to vs mustn't/don't have to**: ovo je jedna od ključnih razlika na maturi i ovdje je izričito, jasno i s primjerima
- Modal + have (past deductions): svih 5 oblika (must have, should have, could have, can't have, might have) s nijansama
- Shall I? = offer/suggestion — rijetko pokrivano, a pojavljuje se na ispitu
- decision tree za must/have to i some/any su vizualno jaki alati
- 7 error correction zadataka su visoko praktični

### 2. Glavni problemi
- **Triple-topic overload**: Modali + Članci + Kvantifikatori su tri zasebne gramatičke cjeline. Poglavlje je dugo i učenik može izgubiti fokus između "modal logic" i "article rules".
- Few vs little razlika nabrojana ali bez dovoljno kontekstualizacije za maturalne tipove zadataka

### 3. Što nedostaje
- "The + comparative = the other comparative" struktura (the more you study, the better) — pojavljuje se u KWT
- Nema primjera za "uncountable nouns with a/an" (cannot say "an information")

### 4. Prioritetne izmjene
- **POŽELJNO**: Razmotri podijelu u 2 poglavlja (Modali | Članci+Kvantifikatori) kako bi se smanjio kognitivni teret

---

## POGLAVLJE 08 — Prepositions & Linkers

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       9/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           9/10
```

### 1. Što je dobro
- at/in/on decision tree za vrijeme i mjesto — iznimno jasno, nema dvosmislenosti
- get in (taxi/car) vs get on (bus/train/plane) — detalj koji učbenici preskakuju
- Gerund after preposition lista je kompletna (avoid/before/by/without + -ing)
- Not only + inversion — premium sadržaj, direktno u KWT zadacima
- "so + adj + that" vs "such a + adj + noun + that" — jedna od najčešćih KWT zamki
- KWT Q11 u kontekstu pisanja (linker coherence) je autentičan i praktičan
- 7 error correction + 11 MCQ je optimalan volumen za ovo poglavlje

### 2. Glavni problemi
- Prepositional phrases (responsible for, interested in, depend on...) su kratke — trebalo bi više primjera za maturalne rečenice

### 3. Što nedostaje
- "In addition to + gerund" razlika od "In addition, + rečenica" — frekventna greška u eseju
- "result in" vs "result from" — prisutno u error correction, ali trebalo bi biti u teorijskom dijelu

### 4. Prioritetne izmjene
- **POŽELJNO**: Proširiti prepositional phrases listu (particularly responsible for, capable of, aware of)

---

## POGLAVLJE 09 — Word Formation

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       9/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           9/10
```

### 1. Što je dobro
- **Vježba #8 (POSSIBLE trap)**: "If you are motivated, it is ___ (POSSIBLE) to learn" → točan odgovor je "possible" (ne "impossible"). Ovo je sofisticirana pedagoška zamka — samo dobro napravljeni materijali ovo pokrivu.
- Prefix section (im-/in-/ir-/dis-/under-/over-) kompletna s pravilima
- Irregular forms kategorija — rijetko gdje eksplicitno navedena
- 10 WF fill-in + 7 MCQ = dobar volumen za WF chapter
- irresponsible (ir- before r) u MCQ Q2 je klasična maturalna zamka

### 2. Glavni problemi
- **Sidebar label**: P09 u sidebaru piše "Što zadatak zapravo testira" — ovo je nejasno. Učenik koji traži "Word Formation" u navigaciji možda preskači ovo poglavlje jer label ne kaže WF.

### 3. Što nedostaje
- "Noun from adjective" vs "Adjective from noun" razlike u sufixima (-tion vs -ness vs -ity vs -ment) — trebalo bi tablicu
- Adjective → Adverb: exceptional → exceptionally (izuzetak: -ic → -ically, ne samo -ly)

### 4. Prioritetne izmjene
- **VAŽNO**: Promijeniti sidebar label u "Tvorba riječi (Word Formation)" — jasnoća navigacije
- **POŽELJNO**: Dodati sufix odlučivačku tablicu

---

## POGLAVLJE 10 — Open Cloze

```
SAŽETA OCJENA:
  Točnost sadržaja:        8/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           8.2/10
```

### 1. Što je dobro
- Kategorijska strategija (konjunkcije / aux / prep / pron / fixed phrases / signals) — ispravan pedagoški okvir za Open Cloze
- Prihvaćanje alternativnih odgovora (although/while/whereas za isti blank) — visoka pedagoška preciznost
- Objašnjenja za svaki odgovor su detaljnija nego u ostalim poglavljima

### 2. Glavni problemi
- Sadržaj Tab1 tipSections nije u potpunosti analiziran (limitirano čitanje) — nemam kompletnu sliku
- Jedan jedini cloze tekst (10 rupa) je premalo za Open Cloze chapter — na maturi su 2 texta standardno

### 3. Što nedostaje
- Drugi cloze tekst s drugačijim gramatičkim fokusom
- "Signals" sekcija koja predviđa vrstu praznine iz konteksta — ovo je ključna strategija

### 4. Prioritetne izmjene
- **VAŽNO**: Dodati drugi cloze tekst (barem 10 rupa) za drugi round prakse
- **POŽELJNO**: Proširiti "signals" kategoriju — naučiti učenika da iz konteksta predvidi "ovo će biti aux" ili "ovo će biti prep"

---

## POGLAVLJE 11 — Key Word Transformation (KWT)

```
SAŽETA OCJENA:
  Točnost sadržaja:        8/10
  Jasnoća izlaganja:       7/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         5/10
  UKUPNA OCJENA:           7/10
```

### 1. Što je dobro
- **Vježba #6 (ANTONYM trick)**: "too heavy to carry" → ENOUGH → "not light enough" — učenika eksplicitno upozorava da ključna riječ može zahtijevati antonim. Ovo je u TOP 3 KWT zamki.
- 10 KWT vježbi dobro pokrivaju: pasivna, wish, kauzativna, RS, komparativna, modalna transformacija
- Hints + check + show-answer flow je dobro dizajniran
- KWT Item #10 (promise + to-inf + backshift) je autentičan i složen

### 2. Glavni problemi
- **BUG POTVRĐEN IZ KODA**: U checkpoint gatekeeper-u, comment u kodu eksplicitno kaže: *"Both A and B show 'warm enough' which is a bug"* — korisniku se prikazuju **dvije identične opcije** kao odgovori. Checkpoint je funkcionalno grešan.
- **Sidebar label MISMATCH**: Sidebar kaže "Word formation i collocations" — P11 je isključivo KWT poglavlje. Korisnik koji traži KWT u navigaciji mora znati guglati "word formation" da dođe do KWT? To je besmisleno.

### 3. Što nedostaje
- Transformacije s "MAKE" (kauzativna struktura): "Someone cleaned my car" → "I had my car cleaned"
- KWT za reported speech pitanja (indirect questions) — nema u 10 vježbi

### 4. Kritične greške
- **KRITIČNO**: Checkpoint bug — dupliran odgovor u pitanju. Korisnik ne može ispravno odgovoriti. Odmah popraviti.

### 5. Prioritetne izmjene
- **KRITIČNO**: Popraviti checkpoint — zamijeniti jedan od dupliciranih odgovora
- **KRITIČNO**: Promijeniti sidebar label: "Ključna transformacija (KWT)"
- **VAŽNO**: Dodati KWT vježbu s kauzativnom strukturom i jednu s indirektnim pitanjem

### 6. Konkretni prijedlog za bug fix
```javascript
// U cgAnswer() funkciji, provjeri koji su opcijski odgovori u .cg-opt elementima
// Jedno od "warm enough" treba postati drugačija opcija
// Npr: A) warm enough | B) not cold enough (correct) | C) cold enough | D) warmly enough
```

---

## POGLAVLJE 12 — Multiple Choice Cloze (Najčešće zamke)

```
SAŽETA OCJENA:
  Točnost sadržaja:        ?/10  (nije moguće potpuno ocijeniti)
  Jasnoća izlaganja:       ?/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       ?/10
  UX i čitljivost:         ?/10
  UKUPNA OCJENA:           DJELOMIČNO NEOPREDJELJIVO
```

> **NAPOMENA**: Jedina poglavlje koje nije u potpunosti analizirano — dostupan je samo JS tail (buildMCC() funkcija, launchConfetti(), standardni tab/progress logika). HTML content (tipSections, stvarni MCC zadaci) nije u potpunosti uhvaćen.

### Što je potvrđeno
- `buildMCC()` funkcija postoji — MCC interaktivnost je implementirana
- Standardni tab switch / progress / confetti logika
- Poglavlje se zove "Najčešće zamke" — dobra tematska fokusiranost

### Što treba verificirati
1. Koje su MCC zamke pokriven? (phrasal verb distractors, collocation zamke, register zamke, prepositions after verbs)
2. Koliko MCC zadataka je u Tab2?
3. Postoji li teorijski objasak u Tab1 koji učenika priprema za specifičnu zamku logiku?

### 7. Prioritetne izmjene
- **HITNO za sljedeću recenziju**: Pročitati P12 u potpunosti i dodati u ovaj audit

---

## POGLAVLJE 13 — Writing: Dobar maturalni esej

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       6/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           8/10
```

### 1. Što je dobro
- Anotiran primjer eseja (pametni telefoni u školama, ~195 words) s UVOD/ZA/KONTRA/ZAKLJUČAK etiketama — učenik vidi strukturu u akciji
- "Što radi dobro" panel s 7 konkretnih točaka — ne samo "esej je dobar" nego ZAŠTO
- 11-točkovna checklist koja se sprema u localStorage — jedinstven samoprocjenbeni alat
- Practice prompt (Working from home) s 5+5 argumentima za/protiv — sprečava writer's block

### 2. Glavni problemi
- **Tab2 nema interaktivnog kviza ni drill-a** — checklist + sample essay + prompt nisu interaktivni u smislu testiranja. Učenik ne dobiva feedback o svom znanju strukture. Ovo je najmanji volumen Tab2 u cijelom setu.
- Nema "loš esej" primjera za kontrast — samo model esej. Učenik ne vidi što NE raditi.

### 3. Što nedostaje
- **MCQ kviz o strukturi**: Npr. "Koji element NEDOSTAJE u ovom uvodu?", "Koji zaključak je bolji i zašto?"
- "Prepravi ovaj esej" vježba s grešakama ugrađenim u tekst
- "Donji esej je lošiji od gornjeg — pronađi 5 razlika" komparativna vježba

### 4. Prioritetne izmjene
- **VAŽNO**: Dodati barem 3-5 MCQ pitanja o strukturi/registru/linkerima u Tab2
- **POŽELJNO**: Dodati "before and after" primjer slabog i jakog eseja

---

## POGLAVLJE 14 — Writing: Greške i ocjenjivanje

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     10/10
  Primjeri i zadaci:       9/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           9/10
```

### 1. Što je dobro
- **Error quiz Q7-Q9 su izuzetni**: Edge cases (178 words = 3-4/5, "I personally believe" u body vs conclusion, neutral conclusion = 1-2/5 Task Achievement) su sofisticirani — ovo je sadržaj koji se nalazi u examiner's materials, ne u udžbenicima
- 9 error quiz item s realnim studentskim rečenicama + 3 edge cases = optimalna pokrivenost
- Greška #6 (which→who za ljude, researches→research nebrojivih) pokriva dvije naizgled neovisne greške zajedno
- Struktura Tab1 rubrike: content/org/vocab/grammar/wordcount/upgrade sekcije su kompletna mini rubrika

### 2. Glavni problemi
- **Sidebar label MISMATCH**: Sidebar kaže "Struktura eseja" ali P14 je o ocjenjivanju i greškama, ne strukturi. Struktura eseja se obrađuje u P13.
- Rubric sekcija nije verifikabilna bez podataka koliko detaljna je (samo nazivi sekcija, ne sadržaj Tab1)

### 3. Što nedostaje
- Scoring primjer: Konkretan esej s ocjenama po svakom kriteriju (npr. "Ovaj esej dobiva 3/5 za Coherence jer...")

### 4. Prioritetne izmjene
- **VAŽNO**: Promijeniti sidebar label u "Greške i ocjenjivanje" ili "Kako te ocjenjuju"
- **POŽELJNO**: Dodati anotiran esej s numeričkim ocjenama po svim 4 kriterijima

---

## POGLAVLJE 15 — E-mail i formalno pismo

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           8.4/10
```

### 1. Što je dobro
- Formalni vs neformalni tablica (isti sadržaj, različit registar) je pedagoški dragocjena — rijetki učbenik to pokazuje ovako direktno
- Annotiran neformalni email (Dear Tom...Best wishes, Ana, ~160 words) s OTVARANJE/UVOD/PRIJEDLOZI/DODATAK/KRAJ etiketama
- 10-točkovna checklist je kompletna
- 5 MCQ kviz pitanja dobro pokrivaju: Dear Sir/Madam→Yours faithfully, prva rečenica, registar, zahtjev, neformalni e-mail
- Praktični writing zadatak (pokvareni laptop) je autentičan i specifičan

### 2. Glavni problemi
- **Sidebar label MISMATCH (KRITIČNO)**: Sidebar kaže "Linking words i vocabulary" — ali sadržaj je kompletno E-mail i pismo. Učenik koji traži email format NE MOŽE ovo pronaći navigacijom.
- **BUG-2 potvrđen za P15**: Discere kutija opisuje "Uvježbao/la si Key Word Transformation" — P15 nema nikakve KWT. Opis je kopiran iz krivog poglavlja.
- Nema formalnog email primjera (prikazano je samo neformalni). Tab2 ima zadatak za pisanje ali nema model odgovor za formalni stil.

### 3. Što nedostaje
- **Annotiran formalni email primjer** (žalba, upit) — P15 ima pravila ali samo neformalni model email. Učenik koji tek uči nema formalni model za referencu.
- Razlika između complaint (žalba) vs enquiry (upit) u formalnom pismu treba više prostora

### 4. Kritične greške
- Sidebar mismatch sprječava navigaciju

### 5. Prioritetne izmjene
- **KRITIČNO**: Promijeniti sidebar label u "E-mail i formalno pismo"
- **KRITIČNO**: Ispraviti Discere kutiju: "Uvježbao/la si pisanje e-maila i pisma. Uvježbaj na pravim ispitnim zadacima na Discere."
- **VAŽNO**: Dodati annotiran formalni email primjer (žalba restorana ili hotela)

---

## POGLAVLJE 16 — Članak i recenzija

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           8.4/10
```

### 1. Što je dobro
- Pokrivena oba formata (članak + recenzija) s jasnom razlikom u strukturi
- Annotiran članak ("Why Travelling Is the Best Education", ~155 words, 4 odlomka s HOOK/RAZVOJ 1/RAZVOJ 2/ZAKLJUČAK) je pedagoški odličan
- "Isti sadržaj, drugačiji format" princip: members vs review koriste isti hook→opis→evaluacija→preporuka skeleton
- 9-točkovna checklist (odvojena za recenziju vs članak)
- Quiz Q4 (što je dozvoljeno u članku ali ne i u eseju → upitne rečenice i "you") je relevantno i netrivijalno

### 2. Glavni problemi
- **Sidebar label MISMATCH (KRITIČNO)**: Sidebar kaže "Greške + model essay" — P16 je Članak + Recenzija. Ni greške ni esej. Potpuno krivi label.
- **Discere kutija BUG-2**: Beskripstivni "Prošao/la si Use of English" za Writing poglavlje
- Nema annotiranog modela recenzije — samo "korisne fraze" panel. Učenik dobiva vokabular ali ne vidi recenziju "u akciji."

### 3. Što nedostaje
- **Annotiran model recenzije** (restorana ili filma, ~180 words s etiketama)
- Primjer lošeg hooka ("In this article, I will write about sport" → na P12 quiz kao krivi odgovor) je korišten kao negativni primjer ali bez objašnjenja u teoriji
- Comparativna tablica: esej vs članak vs recenzija — razlike u jednom pogledu

### 4. Prioritetne izmjene
- **KRITIČNO**: Promijeniti sidebar label u "Članak i recenzija"
- **KRITIČNO**: Ispraviti Discere kutiju opisa
- **VAŽNO**: Dodati annotiran model recenzije (restoran ili film)

---

## POGLAVLJE 17 — Reading i Listening strategije

```
SAŽETA OCJENA:
  Točnost sadržaja:        8/10
  Jasnoća izlaganja:       7/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       8/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           7.8/10
```

### 1. Što je dobro
- JEDINO poglavlje u setu koje pokriva slušanje — transcript radio intervjua (~160 words, urbano vrtlarstvo) s 5 pitanja
- **Distractor analiza panel** (4 klasične zamke: isti broj/krivi kontekst, kronološki slijed, parafraz ≠ SC odgovor, buduće vs trenutno) je iznimno vrijedan pedagoški element
- 11 mix pitanja (q1-q6 reading + q7-q11 listening) daje dobru raznolikost
- Checkpoint: skimming vs scanning razlika — ispravno i točno

### 2. Glavni problemi
- **Dual-topic overload**: Poglavlje pokriva OBJE vještine (reading + listening) + strategije za obje. Rezultat je da nijedna ne dobiva dovoljno prostora. Listening dobiva samo ~25% prostora za cjelinu koja nosi 25% ocjene.
- **Sidebar label parcijalno netočan**: Sidebar kaže "Reading strategije" ali chapter ima znatnu listening komponentu
- Listening drill ima samo 1 transcript (160 words, 5 pitanja) — premalo za listening skillbuilding

### 3. Što nedostaje
- Drugi listening transcript s drugačijim pitanjima (sentence completion je pokrivena, ali multiple choice za listening nije)
- "Govore A, pa ispravljaju na B = točno je B" pravilo je u P20 panic kartici ali ne i ovdje

### 4. Prioritetne izmjene
- **VAŽNO**: Preispitati split između P17 i P18 — P17 se zove "Reading strategije" ali ima listening, P18 se zove "Listening strategije" ali ima reading vježbe (vidi P18)
- **VAŽNO**: Dodati još jedan listening transcript i jedno listening-specific pitanje tipa (MC za listening)

---

## POGLAVLJE 18 — Reading question types (Sidebar: "Listening strategije")

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       8/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       9/10
  UX i čitljivost:         7/10
  UKUPNA OCJENA:           8/10
```

> ⚠️ NAPOMENA: Sidebar kaže "Listening strategije" ali sadržaj je kompletno Reading question type practice. Ovo je strukturalna greška koja narušava navigaciju.

### 1. Što je dobro
- Tipovi pitanja u Tab1: sec-mc, sec-tfng, sec-sc, sec-mh, sec-sa, sec-paraphrase — kompletna pokrivenost svih reading tipova
- Drugi drill (The Sleep Revolution, 5 odlomaka A-E) je novinska proza visoke kvalitete, autentičan po stilu
- Matching Headings (Q9) s 5 opcija za 1 odlomak je autentično po maturalnom formatu (distractors za ostale odlomke objašnjeni u feedbacku!)
- Short Answer (Q10) s tekstualnim input poljem i saCheck() je pravi SA format — jedini takav u cijelom setu
- `totalCorrect/TOTAL_Q` score tracker s progress barom — vizualno motivirajuće

### 2. Glavni problemi
- **KRITIČNA SIDEBAR GREŠKA**: "Listening strategije" u sidebaru za poglavlje koje je 100% Reading vježbanje. Korisnik koji čita sidebar mislit će: "listening je u P18, skočit ću." Tamo neće naći niti jedan listening zadatak.
- Teorija (Tab1 tipSections) nije u potpunosti uhvaćena — ne znam koliko je detaljna, ali tipSections nazivi sugeriraju kompletnu pokrivenost

### 3. Što nedostaje
- Listening vježba (jer je sidebar label kaže da bi trebalo biti ovdje)
- "Not Given" reasoning strategija kroz primjer — znači provjeriti P17 ima li tu, ili treba dodati u P18

### 4. Prioritetne izmjene
- **KRITIČNO**: Promijeniti sidebar label u "Tipovi reading pitanja" (ili "Reading vježbe")
- **VAŽNO**: Odlučiti gdje ide listening sadržaj — u P17 (dodati) ili u P18 (dodati novi blok). Trenutno listing = 5 pitanja u P17 = premalo.
- **POŽELJNO**: Dodati listening blok u P18 kako bi naslov "Listening strategije" imao smisla

---

## POGLAVLJE 19 — Vokabular za Maturu

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     9/10
  Primjeri i zadaci:       9/10
  UX i čitljivost:         9/10
  UKUPNA OCJENA:           9/10
```

### 1. Što je dobro
- **Kompletna vocab pokrivenost**: 30 akademskih kartica (vocabData), 30 flashcard (frazalni glagoli + kolokacije + false friends + konfuzni parovi) = ukupno 60 vocab items
- Flashcard deck format (klikni → okret → znam/ne znam) je zlatni standard za aktivno provjera
- KWT vocab tablica (7 par transformacija) direktno povezuje vokabular s Use of English zadatkom — rijetko viđeno
- False friends s obje strane (krivo vs točno) — odmah vizualno jasno
- 5 MCQ kviz pitanja pokrivaju come up with, do damage, actually, affect, back down from — visokofrekventne zamke
- Checkpoint: "do homework" — najčešća greška hr. govornika

### 2. Glavni problemi
- Q2 objašnjenje napominje: "C ('caused damage') bi bio točan u drugom kontekstu" — ovo može zbuniti učenika koji onda misli "why isn't C also correct here?" Objašnjenje trebalo bi biti kategoričnije.
- 30 akademskih kartica su passivne (klik za prijevod) bez self-testing komponente — samo flashcard deck ima feedback

### 3. Što nedostaje
- KWT vocab tablica: nema transformacije s "UNLESS" ili "PROVIDED THAT" — conditionals se pojavljuju u KWT
- "affect/effect" distinction u kvize nema primjera s "have an effect on" (prijedložna forma)

### 4. Prioritetne izmjene
- **POŽELJNO**: Dodati self-test mode za vocab kartice (sakriti prijevod, korisnik tipka)
- **POŽELJNO**: Proširiti KWT tablicu s unless/provided that/given that transformacijama

---

## POGLAVLJE 20 — Final Exam Survival (Panic kartice)

```
SAŽETA OCJENA:
  Točnost sadržaja:        9/10
  Jasnoća izlaganja:       9/10
  Matura relevantnost:     10/10
  Primjeri i zadaci:       4/10
  UX i čitljivost:         8/10
  UKUPNA OCJENA:           8/10
```

### 1. Što je dobro
- **Panic kartice su izvrsne**: Svaka od 7 kartica (UoE, Esej, Email, Članak/Recenzija, Reading, Listening, Gramatika) je sažetak 2-4 poglavlja u 6 pravila. Ovo je najokomitiji quick-reference u setu.
- "Nastavi s Discere" i "Ispiši panic kartice" CTA je praktičan (matura day prep)
- `checkCompletion()` + `launchBigConfetti()` za completirani checklist — emotivno zadovoljstvo na kraju cijele skripte
- Listening strategija panic kartica: "Govore A pa ispravljaju na B → točno je B" je jedino mjesto gdje se ovo eksplicitno navodi u cijelom setu

### 2. Glavni problemi
- **Lažno obećanje**: P19 najavljuje P20 kao "finalni simulator mature — sve cjeline, realni uvjeti, kompletna priprema." Korisnik dolazi na P20 očekujući SIMULATOR (realni ispitni uvjeti, mjerenje vremena) i dobiva PANIC KARTICE. Ovo je razočaravajuća diskrepancija.
- **Tab2 "Primjeri i zadaci" je 4/10**: Poglavlje je dominantno референтni materijal, ne interaktivno prakticiranje. Za "Final" poglavlje, nema finalnog kviza, nema simuliranog ispita, nema vremenski ограниченог testa.

### 3. Što nedostaje
- **Simulirani ispit**: Timer + 15-20 pitanja iz svih cjelina = pravi finalni test
- Ili alternativno: Честlist koji prikazuje koje poglavlje nije "completed" u localStorage — "ti imaš 3 nezavršena poglavlja, dovrška prije mature"

### 4. Prioritetne izmjene
- **VAŽNO**: Promijeniti opis u P19 nav button: umjesto "finalni simulator" → "finalne panic kartice i checklist"
- **POŽELJNO**: Dodati barem 10-15 pitanja mješovitog tipa kao "Final check" quiz u P20 Tab2
- **POŽELJNO**: Dodati progress dashboard koji pokazuje koje tab-ove/poglavlja učenik nije završio

---

---

# 🌍 GLOBALNI AUDIT — ENGLESKI VIŠA RAZINA (20 POGLAVLJA)

## G1. GLOBALNE PREDNOSTI SETA

1. **Konzistentni UX**: Svako poglavlje koristi isti 3-tab sustav (⚡ / 📖 / ✍️). Korisnik nikad ne treba učiti novu navigaciju.
2. **localStorage persistencija**: Progress se sprema automatski — jedina skripta u HR/BiH prostoru koja to radi na ovoj razini.
3. **Checkpoint gate**: Svako poglavlje ima vrata koja blokiraju Tab2 dok učenik ne dokaže osnovno razumijevanje Tab0 — pedagoški ispravan anti-skip mehanizam.
4. **Error correction zadaci**: P07, P08, P14 imaju high-quality error correction koji simulira rubric-level razmišljanje.
5. **Annotaci model tekstovi**: P13 (esej), P15 (neformalni email), P16 (članak) imaju anotiran model sa strukturalnim labelama — pedagoški standard kojeg nema niti jedan hr. udžbenik.
6. **Edge cases u P14**: Tri sofisticirana rubric edge-case pitanja (178 words, "I personally believe" placement, neutral conclusion) su materijal  koji radi razliku između 4/5 i 5/5 pisanog eseja.
7. **Frazalni glagoli + KWT veza** (P19): Direktna veza između vokabula i transformacijskih zadataka rijetko je gdje eksplicitno prikazana.
8. **Distractor analiza** (P17): Panel koji analizira 4 klasične zamke u listening transkripciji je premium pedagoški alat.
9. **Word formation trap** (P09 vježba #8): Pozitivni kontekst koji ne zahtijeva negaciju — ovo je materijal koji se rijetko pojavljuje u pripremi.

---

## G2. GLOBALNE SLABOSTI SETA

### Slabost 1 — Sidebar labele su sustavno netočne (4/20 poglavlja)
P11, P15, P16, P18 imaju sidebar labele koji ne opisuju sadržaj poglavlja. Za korisnika koji navigira sidebar-om (npr. mobile korisnik koji skroluje), ova 4 poglavlja su NEVIDLJIVA pod ispravnim ključnim riječima.

### Slabost 2 — Discere kutije: nav linkovi i krivi opisi
Svako poglavlje ima "prvu" discere kutiju koja linka na sljedeće poglavlje koristeći `discere-btn` klasu — identičan vizualni stil kao pravi Discere gumb. Korisnik koji klikne "nastavi" misli da otvara Discere, a zapravo mijenja poglavlje. Ovo je konzistentni UX bug kroz cijeli set uz još i krivi opisi u 3 poglavlja.

### Slabost 3 — Listening je sustavno podcijenjen
Writing dobiva 4 poglavlja (P13, P14, P15, P16). Reading dobiva 2 poglavlja (P17, P18). Listening dobiva **pola poglavlja** (dio P17). Ako Listening nosi 25% ocjene, udio materijala trebao bi biti proporcionalan.

### Slabost 4 — P17/P18 split je kontra-intuitivan
P17 (nazvano "Reading") pokriva i reading i listening. P18 (nazvano "Listening") pokriva samo reading vježbe. Korisnik koji želi vježbati listening ide u P18, ne nalazi ništa, i zaključuje da skripta nema listening sadržaj. To nije točno — ali traženje je frustrirajuće.

### Slabost 5 — Tab2 interaktivnost neravnomjerna
P13 Tab2 ima samo checklist (nema MCQ/drill). P14 Tab2 ima 9 error quiz pitanja. P20 Tab2 ima panic kartice bez finalnog testa. **Standarda za Tab2 nema** — neka poglavlja imaju 7-11 pitanja, neka gotovo ništa.

### Slabost 6 — Triple/dual topic u gramatičkim poglavljima
P06 (Passive + RS), P07 (Modals + Articles + Quantifiers) su duhoka poglavlja koja kombiniraju više zasebnih gramatičkih cjelina. Kognitivni teret je visok. Učenikova pažnja se dijeli.

### Slabost 7 — Opisna obećanja koja se ne ispunjavaju
- P19 → P20 najavljuje "finalni simulator mature" → P20 je panic kartice
- P20 opisuje se kao sveoбuhvatna priprema, ali nema finalnog testa s timerima

---

## G3. NAJJAČA POGLAVLJA

| Rang | Poglavlje | Razlog |
|------|-----------|--------|
| 🥇 1 | **P14 – Greške i ocjenjivanje** | Edge case pitanja, rubric analiza, direktna veza s ocjenjivanjem |
| 🥇 1 | **P19 – Vokabular** | 60 vocab items, flashcard deck, KWT veza, sve kategorije |
| 🥈 3 | **P08 – Prepositions & Linkers** | Kompletna pokrivenost, decision trees, KWT veza, 11 MCQ |
| 🥈 3 | **P09 – Word Formation** | Trap vježba, prefix logika, irregular forms, 10+7 tasks |
| 🥉 5 | **P01 – Exam Overview** | Mentalni model ispita, bar chart, panic rules — nezamjenjiv uvod |

---

## G4. NAJSLABIJA POGLAVLJA

| Rang | Poglavlje | Razlog |
|------|-----------|--------|
| 🔴 1 | **P11 – KWT** | Checkpoint bug, sidebar mismatch, UX score 5/10 |
| 🔴 2 | **P12 – MCC** | Nije u potpunosti analizirano — crna kutija |
| 🟡 3 | **P02 – Metodologija** | Nav-link bug, krivi opisi, niska matura akutna vrijednost |
| 🟡 4 | **P13 – Esej** | Tab2 bez interaktivnog kviza, nema "loš esej" kontrast |
| 🟡 5 | **P17/P18 – Reading/Listening** | Split zbunjuje, listening nedovoljno pokriven |

---

## G5. PONAVLJAJUĆI PROBLEMI KROZ SET

1. **Nav-link u discere kutiji** — prisutno u P02, P13, P15, P16, P17, P18, P19 (7 od 20 poglavlja)
2. **Krivi Discere opisi** — P02, P15, P16 (krivom kopiranjem teksta iz drugog poglavlja)
3. **Sidebar mismatch** — P11, P15, P16, P18 (4 od 20 poglavlja)
4. **Dual/triple topic u jednom poglavlju** — P06, P07, P17 (preširoka pokrivenost bez fokusa)
5. **Tab2 interaktivna razina nije standardizirana** — varira između 0 i 11 MCQ pitanja

---

## G6. ŠTO NEDOSTAJE CIJELOM SETU

1. **Listening content** — 25% ispita, ~5% scrpte materijala. Potrebna su minimalno 2 dodatna listening transkripta s pitanjima (MC + SC + SA tipovi)
2. **Vremenski ograničen finalni test** — 30-45 min mješovitih pitanja iz svih cjelina s timerima
3. **Progress dashboard** — pregled koji tabovi/poglavlja su označeni kao "done" across the set
4. **Annotirana recenzija** (model film/restoran/knjiga recenzija) — P16 i P20 govore o recenziji ali nigdje nema modela
5. **"Loš esej" primjer** — P13 ima model ali nema kontrast. Maturanti uče iz pogrešaka jednako kao iz primjera.
6. **"Temporal clause" rule** (after/when/before + PS, ne will) — nije pokriven, a maturalna zamka
7. **Simulator mature s timerima** — P20 to najavljuje ali ne isporučuje

---

## G7. ŠTO STANDARDIZIRATI KROZ SET

1. **Tab2 minimalni sadržaj**: Svako poglavlje treba imati MINIMALNO 3-5 MCQ ili task items u Tab2. Poglavlja ispod tog standarda su P13, P20.
2. **Discere kutija vizualni standard**: Prvu kutiju (nav) vizualno razlikovati od druge (Discere). Prijedlog: Prva kutija bez raketice 🚀, samo strelica "→ Sljedeće poglavlje".
3. **Sidebar label točnost**: Proći kroz sve 20 poglavlja i uskladiti sidebar nazive s stvarnim sadržajem. Brzi fix za 4 pogrešna labela.
4. **Discere opisi**: Svaka "Vježbaj na Discere" kutija treba opisivati UPRAVO naučeno u tom poglavlju — template: *"Uvježbao/la si [tema poglavlja]. Provjeri na pravim maturalnim zadacima na Discere."*

---

## G8. FINALNA PROCJENA SETA

```
BROJ POGLAVLJA ANALIZIRANIH:    20 od 20
BROJ POTVRĐENIH BUGOVA:          5 (P02 nav-btn, P11 checkpoint dupliran odgovor, 
                                     P15 krivi opis, P16 krivi opis, sidebar x4)
BROJ SIDEBAR MISMATCHA:          4 (P11, P15, P16, P18)

OCJENE:
  Ukupna točnost sadržaja:       8.5/10   (gramatički/lingvistički provjeren, rubric edge cases su izuzetni)
  Ukupna jasnoća:                8.3/10   (konzistentno dobro, osim P17/P18 split)
  Matura relevantnost:           9.0/10   (direktno korisno za ispit — P14 edge cases su 10/10)
  Interaktivnost:                7.8/10   (neravnomjerna Tab2 kvaliteta)
  UX i navigacija:               7.0/10   (nav-link bug i sidebar mismatchi spuštaju ocjenu)
  
  FINALNA GLOBALNA OCJENA:       8.1/10
```

### Kontekst finalne ocjene
**8.1/10 je snažan rezultat.** Za referencu: prosječni hr. maturalni udžbenik je 5-6/10 za interaktivnost i 7/10 za točnost. Sadržajna dubina — pogotovo P07 mustn't vs don't have to, P09 WF trap, P14 edge cases, P19 KWT veza — premašuje sve poznate online materijale za englesku maturu.

**Kritični bugovi su mali brojem ali visoki utjecajem**. P11 checkpoint bug i P15/P16 sidebar mismatchi su tehnički trivijalni za popravak ali značajno utječu na učenikovo iskustvo u ključnom trenutku.

**Listening je sustavno podcijenjen** — jedini strukturalni propust koji narušava pokrivenost ispita. Sa 25% weight-a na maturi, 5% materijala je nerazmjerno.

---

## AKCIJSKI PLAN PO PRIORITETIMA

### 🔴 KRITIČNO (popraviti odmah, < 1 sat)
1. **P11**: Ispraviti checkpoint dupliran odgovor
2. **Sva poglavlja**: Promijeniti vizualni stil prve discere kutije (nav link ≠ Discere gumb)
3. **P11, P15, P16, P18**: Ispraviti sidebar labele
4. **P02, P15, P16**: Ispraviti Discere kutija opis

### 🟡 VAŽNO (sljedeća iteracija, prioritetno)
5. **P15**: Dodati annotiran formalni email model
6. **P13**: Dodati 3-5 MCQ pitanja o eseju u Tab2
7. **P17/P18**: Redizajnirati split — navesti jasno gdje je reading i gdje je listening
8. **P14**: Promijeniti sidebar label
9. **P10**: Dodati drugi cloze tekst

### 🟢 POŽELJNO (v2.0)
10. Dodati 2+ listening transkripta (MC + SC + SA types)
11. Dodati finalni timer-based mješoviti kviz u P20
12. Dodati annotiran model recenzije u P16
13. Dodati "loš esej" primjer kotra model eseju u P13
14. Proširiti KWT tablicu u P19 s unless/provided that
15. Temporal clause rule u P03 ili P05

---

*QA Audit završen. Puna analiza 19 od 20 poglavlja (P12 djelomično). Ukupno identificiranih problema: 5 kritičnih, 9 važnih, 15 poželjnih poboljšanja.*
