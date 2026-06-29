'use client';
import { useState } from "react";

/* ══════════════════════════════════════════════════════
   POJMOVNIK H09 — Stranac (Camus) + Egzistencijalizam
   55 pojmova — 4 kategorije: djelo · autor · egzist · kontekst
   ══════════════════════════════════════════════════════ */

const CAT_CFG = {
  djelo:   { label:"djelo",   color:"var(--bronze-l,#cd853f)", bg:"var(--dim-br,rgba(220,50,47,.08))",  border:"var(--bd-br,rgba(220,50,47,.2))"  },
  autor:   { label:"autor",   color:"var(--teal,#4ecdc4)",     bg:"var(--dim-t,rgba(78,205,196,.12))",  border:"var(--bd-t,rgba(78,205,196,.25))" },
  egzist:  { label:"egzist",  color:"#c5a1d9",                 bg:"rgba(197,161,217,.12)",              border:"rgba(197,161,217,.25)"             },
  kontekst:{ label:"kontekst",color:"var(--gold,#e9b446)",     bg:"var(--dim-go,rgba(232,201,122,.12))",border:"var(--bd-go,rgba(232,201,122,.3))" },
};

const POJMOVI = [
  /* ══ DJELO — likovi, scene, motivi Stranca (17) ══ */
  { id:"p01", cat:"djelo", kw:"meursault protagonist alžir činovnik",
    word:"Meursault",
    def:`Protagonist Stranca, alžirski <em>kancelarijski službenik</em> oko 30 godina. Pripovjedač u prvom licu — <b>nikad ne saznajemo ime</b>. Hladan, distanciran, bez emocionalne hijerarhije. Ne plače na sahrani majke. Ubije Arapina „zbog sunca". Pristane na giljotinu. <b>Prvi „apsurdni junak" moderne književnosti</b> — onaj koji vidi besmisao i ne pretvara se.` },

  { id:"p02", cat:"djelo", kw:"marie cardona ljubavnica bazen",
    word:"Marie Cardona",
    def:`Bivša daktilografkinja u Meursaultovoj firmi. <em>Sutradan nakon sahrane majke</em> sastaju se na bazenu. Pita Meursaulta „<em>voliš li me?</em>" — odgovara „<em>to ne znači ništa, ali mislim da te ne volim</em>". Pristao bi se vjenčati ako ona to želi. <b>Marie pokušava razumjeti Meursaulta — ne uspijeva</b>.` },

  { id:"p03", cat:"djelo", kw:"raymond sintès susjed nasilnik mauretanka",
    word:"Raymond Sintès",
    def:`Susjed Meursaultov, nasilnik prema svojoj mauretanskoj djevojci. <b>Meursault mu pomaže bez moralnih rezervacija</b>. Raymond ga vodi na plažu — sukob s Arapima vodi do ubojstva. <em>Indirektno uzrok ubojstva.</em> Prijateljstvo s njim postaje <b>otežavajuća okolnost</b> na suđenju.` },

  { id:"p04", cat:"djelo", kw:"salamano susjed pas paralela",
    word:"Salamano i pas",
    def:`Stari susjed Meursaultov. Živi sa <em>starim šugavim psom</em> — tuče ga, psuje, voli ga. Kad pas pobjegne — <b>Salamano plače</b>. <em>Paralela s Meursaultom</em>: izvana okrutan, iznutra vezan. Svjedoči u Meursaultovu korist na suđenju.` },

  { id:"p05", cat:"djelo", kw:"tužitelj sud osuda kriminalno srce",
    word:"Tužitelj",
    def:`Predstavlja <b>društvenu osudu</b> u II. dijelu. Optužuje ne za ubojstvo nego za moralnu deformaciju: <em>„Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem."</em> Zahtijeva giljotinu. <em>Iz Meursaultove ravnodušnosti gradi sliku „čudovišta bez duše".</em>` },

  { id:"p06", cat:"djelo", kw:"svećenik kapelan ćelija religija pobuna",
    word:"Svećenik (kapelan)",
    def:`Dolazi u ćeliju u <em>posljednjem poglavlju</em>. Tri puta ga Meursault odbija. Kad sam dođe — <b>Meursault eksplodira</b>. Prva i jedina prava emocionalna scena romana. Svećenik je <b>katalizator finalne pobune</b>.` },

  { id:"p07", cat:"djelo", kw:"majka mama starci marengo sahrana",
    word:"Majka (Mama)",
    def:`Umire na samom početku u <em>domu staraca u Marengu</em>. Romana počinje: <em>„Danas mi je umrla majka. Možda i jučer, ne znam."</em> <b>Sahrana postaje suđenje koje se vraća</b>. U finalu Meursault razumije majku — „<em>spremna je bila proživjeti sve</em>".` },

  { id:"p08", cat:"djelo", kw:"arapin musa daoud postkolonijalno pucanj",
    word:"Arapin (ubijeni)",
    def:`Nema imena, glasa, biografije u Camusovom tekstu. Meursault ga ubija na plaži — <em>pet pucnjeva</em>. <b>Postkolonijalna kritika</b>: ubijeni je „pozadina" kolonijalne perspektive. <em>Kamel Daoud (2013.) daje mu ime „Musa".</em>` },

  { id:"p09", cat:"djelo", kw:"sunce alžir vrućina aktivan akter mediteran",
    word:"Sunce",
    def:`<b>Drugi protagonist romana.</b> Žari, peče, pritišće — na sahrani, na plaži, u sudnici. Meursault kaže da je <em>„zbog sunca"</em> ubio Arapina. <b>Sunce je fizička realnost koja oblikuje doživljaj</b> — nije izgovor. Camusova mediteranska poetika.` },

  { id:"p10", cat:"djelo", kw:"more plivanje sloboda iskonsko",
    word:"More",
    def:`Jedino mjesto gdje je Meursault <em>potpuno smiren</em>. <b>More je prirodno utočište</b> — bez društvenih očekivanja, bez jezika. U zatvoru pamti more. <em>Predstavlja iskonsku slobodu pred-društvenog stanja.</em>` },

  { id:"p11", cat:"djelo", kw:"giljotina smrtna kazna pogubljenje",
    word:"Giljotina",
    def:`Camus je cijeli život protivnik smrtne kazne. U Strancu giljotina nije pravda — <b>obred očišćenja društva</b>. Tužitelj traži najteži kazneni postupak ne za zločin, nego za Meursaultov <em>način postojanja</em>. <b>Posljednja maska na apsurdu.</b>` },

  { id:"p12", cat:"djelo", kw:"nježna ravnodušnost zvijezde finale prosvjetljenje",
    word:'„Nježna ravnodušnost svijeta"',
    def:`U <b>posljednjem poglavlju</b> Meursault gleda zvijezde kroz prozor ćelije. <em>„Pred tom noći punom znakova i zvijezda, otvarao sam se prvi put nježnoj ravnodušnosti svijeta."</em> <b>Trenutak prosvjetljenja apsurda</b>. Meursault prihvaća apsurd — to je njegova pobuna.` },

  { id:"p13", cat:"djelo", kw:"ubojstvo plaža četiri kucanja pucanj",
    word:"Ubojstvo Arapina (I/6)",
    def:`Plaža, sunce u zenitu. Meursault puca <em>jednom</em>, pa <em>još četiri puta</em>. <b>„Bilo je kao da kucam četiri puta na vrata nesreće."</b> Drugi pucnji su filozofski važniji — to je <em>ulazak u svijet kazne</em>. <b>Granica između I. i II. dijela romana.</b>` },

  { id:"p14", cat:"djelo", kw:"suđenje sud presuda predstava",
    word:"Suđenje (II/3-4)",
    def:`Sude Meursaultu <em>ne za ubojstvo nego za to što nije plakao na pogrebu</em>. <b>Klasičan primjer kako pravda postaje predstava</b>. Branitelj je nemoćan. <em>Govore o Meursaultu kao da nije prisutan.</em>` },

  { id:"p15", cat:"djelo", kw:"i dio život opisi senzorno doživljajno",
    word:"I. dio (6 poglavlja)",
    def:`Meursault živi: sahrana majke, veza s Marie, pomoć Raymondu, ubojstvo Arapina. <em>Doživljajan, opisan, senzorni stil</em>. Bez kauzalnosti — Meursault živi u trenucima. Završava <b>pucnjem na plaži</b>.` },

  { id:"p16", cat:"djelo", kw:"ii dio zatvor suđenje refleksija eksplozija stila",
    word:"II. dio (5 poglavlja)",
    def:`Meursault u zatvoru, suđenje, čekanje smrti. <em>Refleksivan, dijaloški, duže rečenice</em>. Završava <b>sukobom sa svećenikom + nježna ravnodušnost</b>. <b>Stilska eksplozija u finalu.</b>` },

  { id:"p17", cat:"djelo", kw:"kazna giljotina etika pravosuđe moral",
    word:"Smrtna kazna kao tema",
    def:`Camus piše Stranca i esej <em>Razmišljanja o giljotini</em> (1957.) protiv smrtne kazne. <b>Roman pokazuje kako pravosuđe može ubiti čovjeka jer „ne plače dovoljno"</b>. Etičko-politička dimenzija romana.` },

  /* ══ AUTOR — Camus biografski + djela (12) ══ */
  { id:"p18", cat:"autor", kw:"albert camus 1913 1960 nobelova nagrada alžir",
    word:"Albert Camus (1913.–1960.)",
    def:`Francusko-alžirski pisac. Rođen u Mondoviju (Alžir), umro u prometnoj nesreći (4.1.1960.). <em>Nobelova nagrada za književnost 1957.</em> — drugi najmlađi laureat (44 god.). Romani, eseji, drame. <b>Filozof apsurda i pobune.</b>` },

  { id:"p19", cat:"autor", kw:"pied-noir alžir kolonija francuska mediteran",
    word:"Pied-noir",
    def:`„Crna noga" — francuski Europljanin rođen u Alžiru. <em>Camus je tipičan pied-noir</em> — polugluha nepismena majka (čistačica). Distancira ga od pariških egzistencijalista — daje mu <b>specifičan mediteranski osjećaj prirode</b>.` },

  { id:"p20", cat:"autor", kw:"nobelova nagrada 1957 stockholm govor",
    word:"Nobelova nagrada (1957.)",
    def:`„Za vidovitu književnu produkciju koja s jasnom ozbiljnošću osvjetljava probleme ljudske savjesti." <em>Drugi najmlađi laureat ikad</em> (44 god.). U govoru u Stockholmu — <b>solidarnost, ne neutralnost</b>.` },

  { id:"p21", cat:"autor", kw:"combat otpor list 1944 nacizam",
    word:"Combat (list otpora)",
    def:`Ilegalni list francuskog pokreta otpora. <em>Camus uređuje 1943.–1947.</em> Nakon oslobođenja Pariza postaje legalni list. <b>Politička dimenzija biografije</b> — istovremeno piše Stranca i bori se protiv nacizma.` },

  { id:"p22", cat:"autor", kw:"stranac l'étranger 1942 gallimard roman",
    word:"Stranac (L'Étranger), 1942.",
    def:`Camusov prvi roman. Izlazi u Gallimardu lipnja 1942. <em>U okupiranoj Francuskoj.</em> <b>Globalni klasik tek nakon rata.</b> Prodano preko 10 milijuna primjeraka. <em>Najčitaniji francuski roman 20. stoljeća.</em>` },

  { id:"p23", cat:"autor", kw:"mit o sizifu esej apsurd 1942 treba zamisliti",
    word:"Mit o Sizifu (1942.)",
    def:`Camusov filozofski esej, <em>istovremen sa Strancem</em>. Centralno pitanje: <em>„Vrijedi li život živjeti?"</em> Slavna posljednja rečenica: <b>„Treba zamisliti Sizifa sretnim."</b> Esej je <b>teorijska podloga Stranca</b>.` },

  { id:"p24", cat:"autor", kw:"kuga 1947 oran solidarnost alegorija nacizma",
    word:"Kuga (La Peste), 1947.",
    def:`Drugi Camusov veliki roman. Alegorija nacističke okupacije. Otvara <b>ciklus pobune</b>. Odgovor: <b>solidarnost u patnji</b>. Doktor Rieux: „<em>Borim se protiv kuge.</em>"` },

  { id:"p25", cat:"autor", kw:"pobunjeni čovjek 1951 sukob sartre revolucija",
    word:"Pobunjeni čovjek (1951.)",
    def:`Camusov drugi veliki esej. <em>Kritika revolucionarne nasilnosti</em>. Slavna rečenica: <em>„Pobunjujem se, dakle jesmo."</em> <b>Knjiga koja je raskinula prijateljstvo sa Sartreom (1952.)</b>. Camus je bio u pravu o GULAG-u.` },

  { id:"p26", cat:"autor", kw:"caligula drama 1944 tiranija apsurd",
    word:"Caligula (drama, 1944.)",
    def:`Drama o caru Caliguli koji shvaća da <em>„ljudi umiru i nisu sretni"</em>. Pretvara apsurd u tiraniju. <b>Treći dio ciklusa apsurda</b> uz Stranca i Mit o Sizifu. <em>Što se događa kad apsurd postane politički program?</em>` },

  { id:"p27", cat:"autor", kw:"pad 1956 amsterdam monolog ispovijest",
    word:"Pad (La Chute), 1956.",
    def:`Posljednji završeni roman. <em>Monolog odvjetnika u amsterdamskom baru</em>. <b>Ironično ispovijedanje krivnje</b>. Najmračnija Camusova knjiga — i možda najsloženija.` },

  { id:"p28", cat:"autor", kw:"prvi čovjek nedovršen autobiografija 1994 rukopis",
    word:"Prvi čovjek (Le Premier Homme)",
    def:`Autobiografski roman koji Camus piše u trenutku smrti — <em>rukopis pronađen u olupini auta</em>. Objavljen tek 1994. O djetinjstvu u Alžiru, polugluhoj majki, učitelju koji ga je spasio. <em>Nedovršen vrhunac ciklusa ljubavi.</em>` },

  { id:"p29", cat:"autor", kw:"razmišljanja o giljotini esej 1957 smrtna kazna",
    word:"Razmišljanja o giljotini (1957.)",
    def:`Esej protiv smrtne kazne. <em>Camus je cijeli život protivnik giljotine</em>. Esej je <b>etička eksplikacija centralne teme Stranca</b>. Pridonio ukidanju smrtne kazne u Francuskoj (1981.).` },

  /* ══ EGZISTENCIJALIZAM — pojmovi i autori (14) ══ */
  { id:"p30", cat:"egzist", kw:"apsurd razilazak smisao šutnja nihilizam",
    word:"Apsurd",
    def:`Centralni Camusov pojam. <b>Razilazak između čovjekove potrebe za smislom i šutnje svijeta</b>. Nije depresija — <em>jasno viđenje besmisla</em>. Nije ni u čovjeku ni u svijetu, nego u <b>njihovom susretu</b>. <em>Ne brkati s nihilizmom!</em> Apsurd je polazna točka, ne završna.` },

  { id:"p31", cat:"egzist", kw:"egzistencijalizam pokret filozofija postwar sloboda",
    word:"Egzistencijalizam",
    def:`Filozofski i književni pokret (oko 1930.–1960.). <b>„Egzistencija prethodi esenciji"</b> (Sartre). Čovjek se rađa bez svrhe — sam je određuje. <em>Radikalna sloboda + radikalna odgovornost = tjeskoba</em>. <b>Camus se ograđuje od oznake</b>, ali dijeli osnovne pretpostavke.` },

  { id:"p32", cat:"egzist", kw:"egzistencija prethodi esenciji sartre formula",
    word:'„Egzistencija prethodi esenciji"',
    def:`Sartreova najpoznatija formula (<em>Egzistencijalizam je humanizam</em>, 1946.). <b>Čovjek prvo postoji, pa se određuje izborima</b>. Camus dijeli pretpostavku iako odbija oznaku egzistencijalist.` },

  { id:"p33", cat:"egzist", kw:"jean-paul sartre filozof bitak ništavilo",
    word:"Jean-Paul Sartre (1905.–1980.)",
    def:`Francuski filozof, romansijer. <em>Bitak i ništavilo</em> (1943.). „<b>Drugi su pakao.</b>" Marksist nakon rata. Camusov prijatelj — pa neprijatelj (1952.). <b>Odbio Nobelovu nagradu 1964.</b>` },

  { id:"p34", cat:"egzist", kw:"simone de beauvoir feminizam drugi spol",
    word:"Simone de Beauvoir (1908.–1986.)",
    def:`Sartreova životna partnerica. <em>Drugi spol</em> (1949.): <b>„Ne rađa se ženom, postaje se."</b> Egzistencijalistički feminizam. Kontekst egzistencijalizma.` },

  { id:"p35", cat:"egzist", kw:"kierkegaard preteča vjera angst skok",
    word:"Søren Kierkegaard (1813.–1855.)",
    def:`Danski teolog. <b>Otac modernog egzistencijalizma</b>. „<em>Tjeskoba (Angst) je vrtoglavica slobode.</em>" Vjerski skok. <b>Camus s njim raspravlja u Mitu o Sizifu.</b>` },

  { id:"p36", cat:"egzist", kw:"nietzsche bog mrtav nadčovjek vrijednosti",
    word:"Friedrich Nietzsche (1844.–1900.)",
    def:`<em>„Bog je mrtav"</em> (1882.) — kraj metafizičkih sigurnosti. <b>Nadčovjek</b> — kreira vlastite vrijednosti. <em>Vječno vraćanje istog.</em> Camus s njim raspravlja u <b>Mitu o Sizifu</b>.` },

  { id:"p37", cat:"egzist", kw:"heidegger dasein bitak vrijeme bačenost smrt",
    word:"Martin Heidegger (1889.–1976.)",
    def:`<em>Bitak i vrijeme</em> (1927.). <b>Dasein</b> — konkretno postojanje. Čovjek je <em>bačen u svijet</em>, mora se odnositi prema vlastitoj smrti. <b>Bivanje-prema-smrti</b> kao izvor autentičnosti. Kontroverzan zbog NSDAP članstva.` },

  { id:"p38", cat:"egzist", kw:"dasein bitak-tu konkretno postojanje bačenost",
    word:"Dasein",
    def:`Heideggerov pojam. „Bitak-tu". <b>Konkretno ljudsko postojanje</b>. Dasein je <em>bačen u svijet</em> bez vlastitog izbora. Razlikovanje <em>autentičnog</em> i <em>neautentičnog</em> (bijeg u anonimni „das Man" — „se").` },

  { id:"p39", cat:"egzist", kw:"angst tjeskoba sloboda vrtoglavica",
    word:"Angst (tjeskoba)",
    def:`<b>Razlika od straha</b>: strah ima objekt, Angst nema — to je <em>strah pred ništavilom</em>. Kierkegaard: „<em>Vrtoglavica slobode.</em>" Pojavljuje se u trenucima svijesti o vlastitoj smrti i slobodi.` },

  { id:"p40", cat:"egzist", kw:"mučnina sartre roquentin predmeti kontingentnost",
    word:"Mučnina (nausée)",
    def:`Iz Sartreovog romana <em>Mučnina</em> (1938.). Roquentin osjeća „<em>mučninu</em>" pred postojanjem predmeta — pred <b>besmislom čistog bitka</b>. <em>Slično Camusovom apsurdu</em> ali apstraktnije.` },

  { id:"p41", cat:"egzist", kw:"autentičnost autentičan izbor smrt sloboda",
    word:"Autentičnost",
    def:`Egzistencijalistička etička kategorija. <b>Suočavati se s vlastitom slobodom i smrću — bez bijega u konvencije</b>. Sartre: autentičan odbija „mauvaise foi" (lošu vjeru). <b>Meursault je egzemplarno autentičan.</b>` },

  { id:"p42", cat:"egzist", kw:"écriture blanche bijela proza minimalizam barthes stil",
    word:"Écriture blanche (bijela proza)",
    def:`Pojam Rolanda Barthesa iz <em>Stupanj nule pisanja</em> (1953.) — <b>opis Camusovog stila</b>. Kratke rečenice, bez metafora, bez emocije, prvo lice u prošlom nesvršenom. <b>Prvi roman u tom stilu = Stranac.</b>` },

  { id:"p43", cat:"egzist", kw:"3 ciklusa apsurda pobune ljubavi camus",
    word:"3 ciklusa Camusovog djela",
    def:`Camus svoje djelo dijeli u <em>3 ciklusa</em>: <b>(1) APSURD</b> (1942.) — Stranac, Mit o Sizifu, Caligula. <b>(2) POBUNA</b> (1947.–51.) — Kuga, Pobunjeni čovjek. <b>(3) LJUBAV</b> (planiran) — Pad, Prvi čovjek (nedovršen).` },

  /* ══ KONTEKST — povijesni, filozofski, recepcija (12) ══ */
  { id:"p44", cat:"kontekst", kw:"drugi svjetski rat ww2 okupacija nacizam",
    word:"II. svjetski rat (1939.–1945.)",
    def:`Camus piše Stranca <em>tijekom rata</em>. Francuska pod nacističkom okupacijom (od lipnja 1940.). Roman izlazi lipnja 1942. — <em>uz formalno odobrenje cenzure</em>. <b>Nadrealnost katastrofe određuje ton apsurdističke literature.</b>` },

  { id:"p45", cat:"kontekst", kw:"auschwitz holokaust adorno barbarski",
    word:"Auschwitz / Holokaust",
    def:`Adorno (1949.): <em>„Pisati pjesmu nakon Auschwitza je barbarski."</em> <b>Holokaust je referentna točka egzistencijalizma</b> — kako govoriti o smislu nakon industrijskog ubijanja. Stranac (1942.) anticipira ovaj kontekst.` },

  { id:"p46", cat:"kontekst", kw:"okupirana francuska otpor pariz vichy kolaboracija",
    word:"Okupirana Francuska (1940.–1944.)",
    def:`Nakon poraza, sjeverna Francuska pod direktnom nijemačkom okupacijom; jug pod Vichyjem. <b>Stranac u toj atmosferi nosi politički naboj</b> koji nije eksplicitan. Camus se priključuje otporu.` },

  { id:"p47", cat:"kontekst", kw:"adorno horkheimer kritička teorija frankfurt prosvjetiteljstvo",
    word:"Theodor Adorno (1903.–1969.)",
    def:`Njemački filozof, kritička teorija. <em>Dijalektika prosvjetiteljstva</em> (s Horkheimerom, 1944.) — <b>moderno doba kao samouništenje razuma</b>. Slavna rečenica: <em>„Pisati pjesmu nakon Auschwitza je barbarski."</em>` },

  { id:"p48", cat:"kontekst", kw:"francuski alžir kolonija pied-noir arapi",
    word:"Francuski Alžir",
    def:`Alžir je 1830.–1962. bio integralni dio Francuske. <em>Camus pripada doseljeničkoj manjini (pied-noir)</em>. Stranac smješta radnju u tom svijetu — <b>ali Arapi su „pozadina"</b>. Postkolonijalna kritika to ističe.` },

  { id:"p49", cat:"kontekst", kw:"alžirski rat nezavisnost de gaulle 1962 pravda majka",
    word:"Alžirski rat za nezavisnost (1954.–1962.)",
    def:`Brutalni rat između Francuske i alžirskog FLN-a. Camus politički razdvojen — pied-noir i ljevičar. <b>Slavna rečenica „između pravde i moje majke, biram majku".</b> Camus umire 1960. ne dočekavši kraj.` },

  { id:"p50", cat:"kontekst", kw:"kamel daoud meursaultova istraga 2013 musa goncourt",
    word:"Kamel Daoud — Meursaultova istraga (2013.)",
    def:`Alžirsko-francuski autor. <b>Daje glas ubijenom Arapinu — zove se Musa</b>, brat Haroun pripovijeda. Goncourt prvog romana 2015. <em>Suvremeni odgovor na slijepu pjegu Stranca.</em>` },

  { id:"p51", cat:"kontekst", kw:"edward said kultura imperijalizam orijentalizam postkolonijalno",
    word:"Edward Said (1935.–2003.)",
    def:`Palestinsko-američki teoretičar. <em>Orijentalizam</em> (1978.), <em>Kultura i imperijalizam</em> (1993.). <b>Otac postkolonijalne kritike</b>. O Strancu: <em>roman kolonijalne svijesti</em> — Arapi nemaju glas.` },

  { id:"p52", cat:"kontekst", kw:"postkolonijalno postkolonijalna kritika spivak bhabha",
    word:"Postkolonijalna kritika",
    def:`Akademski pravac (od 1970-ih). Said, Spivak, Bhabha. Kod Stranca pita: <b>tko ima glas, tko nema; tko je vidljiv, tko je „pozadina"</b>. <em>Suvremeno čitanje Stranca.</em>` },

  { id:"p53", cat:"kontekst", kw:"hladni rat nuklearno egzistencijalizam staljin gulag",
    word:"Hladni rat",
    def:`Globalni sukob SAD–SSSR (1947.–1991.). <em>Egzistencijalizam je dijelom reakcija na nuklearnu prijetnju</em>. <b>Camus je anti-totalitarian</b> — odbija i marksizam i kapitalizam. <em>Pobunjeni čovjek</em> je anti-staljinistički manifest.` },

  { id:"p54", cat:"kontekst", kw:"sartre camus sukob 1952 pobunjeni čovjek les temps modernes",
    word:"Sukob Sartre–Camus (1952.)",
    def:`Sartre objavljuje u <em>Les Temps Modernes</em> oštru kritiku <em>Pobunjenog čovjeka</em>. <b>Razlog: Camus odbija opravdati revolucionarno nasilje</b>. Sartre brani SSSR; Camus optužuje GULAG. <em>Prijateljstvo se prekida zauvijek.</em> Historijska pravda na Camusovoj strani.` },

  { id:"p55", cat:"kontekst", kw:"hemingway minimalizam stil utjecaj američki",
    word:"Ernest Hemingway (1899.–1961.)",
    def:`<em>Američki minimalizam</em> — kratke rečenice, konkretni glagoli, malo pridjeva. <b>Camus je čitao Hemingwaya</b> i utkao njegov stil u francuski. <em>Stranac je u neku ruku „Sunce također izlazi" na francuskom.</em> Formira <b>écriture blanche</b>.` },
];

/* ── helpers ── */
function normalize(s){
  return (s||"").toLowerCase()
    .replace(/č|ć/g,"c").replace(/š/g,"s").replace(/ž/g,"z")
    .replace(/đ/g,"d").replace(/[\u201e\u201c\u201d"'„]/g,"").trim();
}

/* ── CARD ── */
function PojmCard({p}){
  const cfg = CAT_CFG[p.cat];
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);

  const bStyle = `color:var(--t1,#f4ede5);font-weight:600;font-family:var(--serif,Georgia)`;
  const emStyle = `color:var(--t1,#f4ede5);font-style:italic`;
  const richDef = p.def
    .replace(/<b>/g,`<b style="${bStyle}">`)
    .replace(/<em>/g,`<em style="${emStyle}">`);

  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      onClick={()=>setOpen(o=>!o)}
      style={{
        background:"var(--card,#120808)",
        border:`1px solid ${hov||open?"var(--bd-br,rgba(220,50,47,.3))":"var(--bdm,#2c1f1f)"}`,
        borderRadius:12,
        padding:"14px 16px 12px 18px",
        cursor:"pointer",
        transition:"all .2s cubic-bezier(.4,0,.2,1)",
        position:"relative",
        overflow:"hidden",
        transform:hov&&!open?"translateY(-1px)":"none",
        boxShadow:open?"0 8px 24px rgba(0,0,0,.3)":(hov?"0 4px 12px rgba(0,0,0,.2)":"none"),
      }}>

      {/* stripe */}
      <div style={{
        position:"absolute",left:0,top:10,bottom:10,
        width:open||hov?3:2,
        background:cfg.color,
        opacity:open?.9:.35,
        borderRadius:"0 2px 2px 0",
        transition:"all .2s",
        pointerEvents:"none",
      }}/>

      {/* header row */}
      <div style={{display:"flex",alignItems:"center",gap:8,paddingRight:24}}>
        <span style={{
          fontFamily:"var(--mono,monospace)",fontSize:"8px",letterSpacing:"1.5px",
          textTransform:"uppercase",fontWeight:700,padding:"2px 7px",borderRadius:5,
          color:cfg.color,background:cfg.bg,border:`1px solid ${cfg.border}`,
          flexShrink:0,
        }}>{cfg.label}</span>
        <span style={{
          fontFamily:"'EB Garamond',Georgia,serif",fontSize:15,fontWeight:600,
          color:hov||open?"var(--t1,#f4ede5)":"var(--t1,#f4ede5)",
          lineHeight:1.3,
        }}>{p.word}</span>
        <span style={{
          marginLeft:"auto",fontSize:10,color:"var(--t3,#8c7b72)",
          transform:open?"rotate(180deg)":"none",transition:"transform .2s",
          flexShrink:0,
        }}>▼</span>
      </div>

      {/* definition */}
      {open&&(
        <div style={{
          fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",
          lineHeight:1.65,marginTop:12,paddingTop:10,
          borderTop:"1px solid var(--bdm,#2c1f1f)",
        }}
          dangerouslySetInnerHTML={{__html:richDef}}
        />
      )}
    </div>
  );
}

/* ══ MAIN ══ */
export default function PojmovnikH09({onBack, onNext}){
  const [catFilter, setCatFilter] = useState("all");
  const [q, setQ] = useState("");

  function normalize2(s){ return normalize(s); }

  const filtered = POJMOVI.filter(p=>{
    const matchCat = catFilter==="all" || p.cat===catFilter;
    const hay = normalize2(p.kw+" "+p.word+" "+p.def);
    const matchQ = !q || hay.includes(normalize2(q));
    return matchCat && matchQ;
  });

  const hasActive = catFilter!=="all" || !!q;
  function clearAll(){ setCatFilter("all"); setQ(""); }

  const catBtns = [
    {key:"all",     label:`Svi (${POJMOVI.length})`,  spec:false},
    {key:"djelo",   label:"📖 Djelo (17)",             spec:false},
    {key:"autor",   label:"✒ Autor (12)",              spec:false},
    {key:"egzist",  label:"🎭 Egzistencijalizam (14)", spec:false},
    {key:"kontekst",label:"🧠 Kontekst (12)",          spec:false},
  ];

  const fbtn = (active)=>({
    padding:"6px 14px",
    fontFamily:"var(--mono,monospace)",fontSize:10,fontWeight:700,letterSpacing:"1px",
    textTransform:"uppercase",
    background:active?"linear-gradient(135deg,#8b2500,#cd3a1f)":"var(--card,#120808)",
    color:active?"#F5E6D3":"var(--t2,#c5b8aa)",
    border:`1px solid ${active?"var(--bronze,#8b4513)":"var(--bdm,#2c1f1f)"}`,
    borderRadius:8,cursor:"pointer",transition:"all .18s",
    display:"inline-flex",alignItems:"center",gap:5,lineHeight:1.4,
    boxShadow:active?"0 2px 10px rgba(220,50,47,.15)":"none",
  });

  return (
    <div style={{padding:"0 0 32px"}}>

      {/* INTRO */}
      <div style={{background:"var(--sur,#0F0605)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"16px 20px",marginBottom:20}}>
        <div style={{fontFamily:"var(--mono,monospace)",fontSize:9,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:"var(--bronze-l,#cd853f)",marginBottom:8}}>
          📚 Pojmovnik H09 — sve što ti treba na dohvat ruke
        </div>
        <div style={{fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t2,#c5b8aa)",lineHeight:1.65}}>
          <b>55 pojmova</b> grupiranih u 4 kategorije: <em>djelo</em> (likovi, scene, motivi Stranca · 17), <em>autor</em> (Camus biograf., djela, ideje · 12), <em>egzistencijalizam</em> (apsurd, Sartre, Heidegger · 14), <em>kontekst</em> (Auschwitz, Adorno, Said, Daoud · 12).{" "}
          <strong>Pretraži</strong> tipkanjem ili filtriraj klikom. Klikni na pojam za definiciju.
        </div>
      </div>

      {/* CAT FILTERS */}
      <div style={{display:"flex",gap:6,flexWrap:"wrap",margin:"0 0 12px"}}>
        {catBtns.map(f=>(
          <button key={f.key} onClick={()=>setCatFilter(f.key)} style={fbtn(catFilter===f.key)}>{f.label}</button>
        ))}
      </div>

      {/* SEARCH */}
      <div style={{display:"flex",gap:8,alignItems:"center",margin:"0 0 14px"}}>
        <span style={{fontSize:16,color:"var(--gold,#e9b446)"}}>🔍</span>
        <input
          type="search" value={q} onChange={e=>setQ(e.target.value)}
          placeholder="Pretraži pojmove…"
          aria-label="Pretraži pojmove" autoComplete="off"
          style={{flex:1,padding:"9px 14px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:10,color:"var(--t1,#f4ede5)",fontFamily:"var(--mono,monospace)",fontSize:13,outline:"none"}}
        />
        {q&&<button onClick={()=>setQ("")} aria-label="Očisti" style={{padding:"7px 11px",background:"var(--inp,#0F0605)",border:"1px solid var(--bdl,#2c1f1f)",borderRadius:8,color:"var(--t2,#c5b8aa)",cursor:"pointer",fontSize:13}}>✕</button>}
      </div>

      {/* COUNT */}
      <div style={{fontFamily:"var(--mono,monospace)",fontSize:11,color:"var(--t3,#8c7b72)",marginBottom:14,display:"flex",alignItems:"center",gap:10}}>
        <span><b style={{color:"var(--bronze-l,#cd853f)",fontWeight:700}}>{filtered.length}</b> od {POJMOVI.length} pojmova prikazano</span>
        {hasActive&&(
          <button onClick={clearAll} style={{fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:"var(--t3,#8c7b72)",background:"transparent",border:"1px dashed var(--bdm,#2c1f1f)",borderRadius:6,padding:"3px 9px",cursor:"pointer"}}>
            Resetiraj
          </button>
        )}
      </div>

      {/* EMPTY */}
      {filtered.length===0&&(
        <div style={{background:"var(--card,#120808)",border:"1px solid var(--bdm,#2c1f1f)",borderRadius:12,padding:"28px 20px",textAlign:"center",fontFamily:"var(--serif,Georgia)",fontSize:13.5,color:"var(--t3,#8c7b72)",fontStyle:"italic"}}>
          <b style={{color:"var(--bronze-l,#cd853f)",fontStyle:"normal",fontFamily:"var(--mono,monospace)",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:700,display:"block",marginBottom:8}}>Nema rezultata</b>
          Niti jedan pojam ne odgovara pretrazi. Probaj drugu kombinaciju.
        </div>
      )}

      {/* GRID */}
      <div style={{display:"flex",flexDirection:"column",gap:6}}>
        {filtered.map(p=>(
          <PojmCard key={p.id} p={p}/>
        ))}
      </div>

      {/* NAV */}
      <div style={{display:"flex",justifyContent:"space-between",marginTop:32}}>
        {onBack&&<button onClick={onBack} style={{background:"none",border:"none",color:"var(--t2,#c5b8aa)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer"}}>← 💬 Citatnik</button>}
        {onNext&&<button onClick={onNext} style={{background:"none",border:"none",color:"var(--bronze-l,#cd853f)",fontFamily:"var(--serif,Georgia)",fontSize:14,cursor:"pointer",fontWeight:600}}>⚡ Drill →</button>}
      </div>
    </div>
  );
}
