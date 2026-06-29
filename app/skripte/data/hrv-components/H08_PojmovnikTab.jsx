'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">55 pojmova</span>
      <span class="pill p-go">Kafka + moderna</span>
      <span class="pill p-r">parabola · ekspresionizam</span>
      <span class="pill p-t">filter po kategoriji</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik — moderna + Kafka pojmovi</div>
      <div class="box-int-txt">
        <b>55 ključnih pojmova</b> — sve što treba znati za esej i ispit. Filtriraj po kategoriji: <em>djelo</em> (Preobražaj — likovi, motivi, scene), <em>autor</em> (Kafka — biografija, djela, suvremenici), <em>moderna</em> (epoha — pravci, postupci, terminologija), <em>kontekst</em> (filozofija, povijest, paralele). Tražilica radi po riječi i po objašnjenju.
      </div>
    </div>

    <!-- POJMOVNIK SEARCH + FILTER -->
    <div class="pojm-tools">
      <div class="pojm-search-row">
        <input type="text" class="pojm-search" id="pojm-search" placeholder="🔎 Pretraži pojmove…" aria-label="Pretraži pojmove">
      </div>
      <div class="pojm-filters">
        <button class="pojm-filter on" data-cat="all">Svi (55)</button>
        <button class="pojm-filter" data-cat="djelo">📌 Djelo (17)</button>
        <button class="pojm-filter" data-cat="autor">📌 Autor (10)</button>
        <button class="pojm-filter" data-cat="moderna">📌 Moderna (15)</button>
        <button class="pojm-filter" data-cat="kontekst">📌 Kontekst (13)</button>
      </div>
    </div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- == DJELO — likovi, motivi, scene Preobražaja (17) == -->

      <div class="pojm" data-cat="djelo" data-kw="gregor samsa protagonist trgovacki putnik kukac"><span class="pojm-cat">djelo</span><div class="pojm-word">Gregor Samsa</div><div class="pojm-def">Protagonist Preobražaja, <em>trgovački putnik</em>, oko 25–30 godina, jedini hranitelj obitelji. Otplaćuje očev dug. Jednog jutra se budi kao <b>kukac</b>. Iako fizički izgubi ljudski oblik, <em>svijest mu ostaje</em> — razumije glasove, voli glazbu. <b>Asonanca s prezimenom Kafka</b> (SAM-SA / KAF-KA, isti slogovni obrazac). Umire sam u svojoj sobi.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="greta sestra violina presuda preobrazba"><span class="pojm-cat">djelo</span><div class="pojm-word">Greta Samsa</div><div class="pojm-def">Gregorova <em>17-godišnja sestra</em>. Najvažniji lik uz Gregora. <b>Paralelna preobrazba</b> — dok Gregor odumire, ona sazrijeva. Isprva voli brata, brine se za njega, donosi hranu, čisti sobu. Svira violinu — Gregor je htio platiti joj konzervatorij. <em>U III. dijelu donosi presudu</em>: „Moramo se riješiti toga." Na kraju — odrasla djevojka spremna za udaju.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="hermann samsa otac autoritet jabuka uniforma"><span class="pojm-cat">djelo</span><div class="pojm-word">Otac (Hermann Samsa)</div><div class="pojm-def">Gregorov otac. Prije preobrazbe — <em>star, debeo, sporobudan</em>, neuspješan poduzetnik koji živi od sinova rada. <b>Nakon preobrazbe se transformira</b> — postaje portir, nosi plavu uniformu, fizički se ispravlja. <em>Gađa Gregora jabukama</em> — jedna ostaje u leđima i ognoji se. Umnogome <em>fikcionalni dvojnik Kafkina oca Hermanna</em>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="majka pasivnost astma slabost"><span class="pojm-cat">djelo</span><div class="pojm-word">Majka</div><div class="pojm-def">Astmatična, slaba, <em>pasivna lik</em>. Voli Gregora, ali ga se boji pogledati. Kad ga ugleda — <b>gubi svijest</b>. Ne intervenira između Gretine energije i očeve okrutnosti. <em>Jedan put intervenira</em>: „Pustite Gregora kakav je. To mi je dijete!" — bezuspješno. Autobiografska paralela s Kafkinom majkom.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="prokurist birokracija firma posao"><span class="pojm-cat">djelo</span><div class="pojm-word">Prokurist</div><div class="pojm-def">Zamjenik ravnatelja Gregorove firme. Dolazi ujutro nakon preobrazbe — <em>provjerava zašto Gregor kasni</em>. Formalno uljudan ali <b>neobično prijeteći</b>. Kad vidi Gregora-kukca — <em>pobjegne užasnuto</em>. Simbol <b>birokratske dehumanizacije</b> — čovjek-funkcija koji ne vidi čovjeka, samo zaposlenika.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="podstanari trojica gospoda arhetip"><span class="pojm-cat">djelo</span><div class="pojm-word">Tri podstanara</div><div class="pojm-def">Trojica <em>bradatih, ozbiljnih gospode</em>. Obitelj ih uzme u stan kad Gregor više ne zarađuje. <b>Tipski Kafkin motiv</b> — trojica-arhetip (kao trojica suca, trojica dvorjana). Kad Gregora ugledaju — <em>zahtijevaju da napuste stan i ne plaćaju najamninu</em>. Otac ih agresivno izbaci.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="dvorkinja stara sluskinja crko ravnodusnost"><span class="pojm-cat">djelo</span><div class="pojm-word">Dvorkinja</div><div class="pojm-def">Stara, jaka — <em>jedina se ne boji Gregora</em>. Ponaša se normalno u njegovoj prisutnosti, čak ga zove „bube". Otkriva njegovo mrtvo tijelo: <b>„Crk'o je! Eno ga gdje leži crknut, baš crknut!"</b>. Tretira ga kao stvar — <em>simbol ravnodušnog glasa naroda/svijeta</em>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="anna kuharica otpustena"><span class="pojm-cat">djelo</span><div class="pojm-word">Kuharica Anna</div><div class="pojm-def">Prethodna sluškinja obitelji Samsa. Nakon preobrazbe <em>moli da bude otpuštena</em>. Obećava da ništa neće reći. <b>Pokazuje izolaciju obitelji</b> — Gregorova preobrazba je tajna. Zamijenjena starom dvorkinjom.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="ungeziefer kukac gamad insekt"><span class="pojm-cat">djelo</span><div class="pojm-word">Ungeziefer (kukac)</div><div class="pojm-def">Njemačka riječ koju Kafka koristi — znači <b>„gamad, štetnik"</b>, životinja koja nije za jelo (<em>ne-zebar</em>, ne-žrtvena). <em>Nije specifična vrsta</em>. Nabokov tvrdi — kornjaš s krilima. Najbolje koristiti <b>„kukac" / „insekt" / „gamad"</b>; izbjegavati <em>„buba"</em> (umanjuje grotesknost).</div></div>

      <div class="pojm" data-cat="djelo" data-kw="jabuka kazna otac biblijska"><span class="pojm-cat">djelo</span><div class="pojm-word">Jabuka</div><div class="pojm-def">Otac u II. dijelu gađa Gregora jabukama iz vaze. Jedna se <em>zabija duboko u leđa i ognoji se</em>. Gregor umire od te upale. <b>Biblijska aluzija</b> — jabuka kao simbol grijeha i istjerivanja iz raja. <em>Anti-Edipov motiv</em>: otac kažnjava sina, ne sin oca.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="slika dama u krznu sacher masoch venera"><span class="pojm-cat">djelo</span><div class="pojm-word">Slika „dame u krznu"</div><div class="pojm-def">Gregor u sobi ima uokvirenu sliku žene u krznu izrezanu iz časopisa. Kad je žele odnijeti — <em>penje se na zid i priljubi uz nju</em>: „prije će joj skočiti u lice nego dopustiti da je odnesu". <b>Aluzija na Sacher-Masochovu „Veneru u krznu"</b> (1870.). Ostatak Gregorove erotike, subjektiviteta, ljudskosti.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="soba zatvor klaustrofobija prostor"><span class="pojm-cat">djelo</span><div class="pojm-word">Gregorova soba</div><div class="pojm-def">Sva radnja se odvija u jednom stanu, većinom u Gregorovoj sobi. Prostor se <em>postupno sužava</em>: I. dio — soba je dom; II. — uklanjaju namještaj, prazna; III. — <b>postaje skladište smeća</b>. Gregor nepokretan na sredini. <em>Klaustrofobija je formalna</em> — i u dijegezi i u čitateljskom doživljaju.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="kanape skrivanje regresija"><span class="pojm-cat">djelo</span><div class="pojm-word">Kanape (skrivanje)</div><div class="pojm-def">Gregor se najradije <em>skriva pod kanapeom</em> — tu se osjeća zaštićenim, iako mu je tijesno. <b>Infantilna regresija</b> — vraćanje u maternalnu zaštitu. Psihoanalitička interpretacija (Freud) — <em>povratak u embrionalno stanje</em> pred autoritativnim ocem.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="violina glazba ljudskost greta"><span class="pojm-cat">djelo</span><div class="pojm-word">Violina (glazba)</div><div class="pojm-def">U III. dijelu Greta svira violinu podstanarima. <em>Gregor izlazi iz sobe</em>, privučen glazbom. <b>Glazba = posljednji znak Gregorove ljudskosti</b>. Ključna unutarnja rečenica: <em>„Je li bio životinja, kad ga je glazba tako dirala?"</em> — tragično pitanje koje potvrđuje preostalu dušu.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="izlet tramvaj finale obnova"><span class="pojm-cat">djelo</span><div class="pojm-word">Izlet (finale)</div><div class="pojm-def">Posljednja scena — obitelj izlazi tramvajem na proljetni izlet. <em>Svi zaposleni, svi zdravi, osjećaj olakšanja</em>. Roditelji primjećuju Gretu — <b>spremna za udaju</b>. <em>Gregorova smrt = uspjeh obitelji</em>. Kafkin ironični kraj — pripovijetka o smrti završava obnovljenim životom.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="prva recenica in medias res nemirnih snova"><span class="pojm-cat">djelo</span><div class="pojm-word">Prva rečenica</div><div class="pojm-def">„Kad se Gregor Samsa jednoga jutra probudio iz nemirnih snova, nađe se u svom krevetu preobražen u golemog kukca." <b>Najpoznatiji početak modernističke proze.</b> <em>In medias res</em>, bez objašnjenja, bez uzročne predigre. Prototip moderne parabolične pripovijesti. <em>Mora se znati napamet</em>.</div></div>

      <div class="pojm" data-cat="djelo" data-kw="tri dijela kompozicija postupnost"><span class="pojm-cat">djelo</span><div class="pojm-word">Tri dijela (kompozicija)</div><div class="pojm-def">Pripovijetka ima <b>3 dijela</b>, svaki prati jedan stupanj preobražaja: <em>(I) fizička preobrazba, (II) gubitak glasa / nemogućnost komunikacije, (III) sužavanje vida i prostora — duhovno odumiranje</em>. <b>Svaki dio završava rečenicom o očevom odnosu prema Gregoru.</b> Postupnost preobražaja = postupnost gubitka ljudskosti.</div></div>

      <!-- == AUTOR — Kafka biografija (10) == -->

      <div class="pojm" data-cat="autor" data-kw="franz kafka prag 1883 1924 zivot"><span class="pojm-cat">autor</span><div class="pojm-word">Franz Kafka</div><div class="pojm-def"><em>Praški pisac</em> (3. srpnja 1883. — 3. lipnja 1924.). Židovskog porijekla, piše na njemačkom. <b>Trostruka margina</b> — Nijemac u Pragu, Židov među Nijemcima, pisac u svijetu prava. Studirao pravo, radio u osiguravajućoj kući. Tri puta zaručen, nikada oženjen. Umire od tuberkuloze. Najvažniji pisac moderne / ekspresionizma.</div></div>

      <div class="pojm" data-cat="autor" data-kw="pismo ocu hermann autobiografska proza"><span class="pojm-cat">autor</span><div class="pojm-word">Pismo ocu (1919.)</div><div class="pojm-def">Kafkina <em>autobiografska proza</em> — pismo koje je napisao ocu Hermannu, ali ga otac nikada nije pročitao. <b>Iskreno opisuje odnos straha, autoritarnosti, neuroze</b>. Ključ za biografsku interpretaciju Preobražaja — Hermann Samsa = Hermann Kafka. Otkriva otkud Kafkina opsesija temom očinske kazne.</div></div>

      <div class="pojm" data-cat="autor" data-kw="max brod prijatelj oporuka rukopisi"><span class="pojm-cat">autor</span><div class="pojm-word">Max Brod</div><div class="pojm-def">Kafkin <em>najbolji prijatelj i izvršitelj oporuke</em>. Kafka je oporukom naložio da spali sve neobjavljene rukopise. <b>Brod je odbio izvršiti oporuku</b> — objavio <em>Proces</em> (1925.), <em>Zamak</em> (1926.), <em>Ameriku</em> (1927.). <em>Bez Broda, Kafka bi bio nepoznat.</em> Napisao Kafkinu prvu biografiju (1937.).</div></div>

      <div class="pojm" data-cat="autor" data-kw="felice bauer zarucnica pisma"><span class="pojm-cat">autor</span><div class="pojm-word">Felice Bauer</div><div class="pojm-def">Berlinka, <em>Kafkina dvostruka zaručnica</em> (1914., 1917.). Veza je trajala 5 godina i sastojala se uglavnom od <b>pisama</b> (oko 500 dopisa) — Kafka je više volio pisati o ljubavi nego je živjeti. <em>Veza je prekinuta kad je Kafki dijagnosticirana tuberkuloza</em> (1917.).</div></div>

      <div class="pojm" data-cat="autor" data-kw="milena jesenska novinarka prevoditeljica pisma"><span class="pojm-cat">autor</span><div class="pojm-word">Milena Jesenska</div><div class="pojm-def">Češka <em>novinarka i prevoditeljica</em>. Kafkina velika ljubav <b>1920. godine</b>. <em>Pisma Mileni</em> — neka od najznačajnijih ljubavnih pisama 20. stoljeća. Milena ne razvodi brak — veza ostaje epistolarna. Ubijena u koncentracijskom logoru Ravensbrück (1944.).</div></div>

      <div class="pojm" data-cat="autor" data-kw="dora diamant berlin posljednja partnerka"><span class="pojm-cat">autor</span><div class="pojm-word">Dora Diamant</div><div class="pojm-def">Kafkina <em>posljednja partnerka</em> (1923.–1924.). Mlada Židovka iz Poljske. Preselili su se u Berlin gdje su <em>nakratko zajedno živjeli</em>. <b>Dora je bila uz Kafku do same smrti</b> u sanatoriju Kierling. Sačuvala dio njegovih rukopisa (kasnije zaplijenila Gestapo).</div></div>

      <div class="pojm" data-cat="autor" data-kw="hermann kafka otac trgovac autoritet"><span class="pojm-cat">autor</span><div class="pojm-word">Hermann Kafka</div><div class="pojm-def">Kafkin otac — uspješan trgovac, dominantan, autoritativan, fizički snažan. <em>Centralna figura Kafkina psihološkog svijeta</em>. Kafka ga doživljava kao <b>gromoglasnu prijetnju</b>. <em>Pismo ocu</em> (1919.) je Kafkin pokušaj rasprave. Otac u Preobražaju i u <em>Procesu</em> nosi tragove Hermanna.</div></div>

      <div class="pojm" data-cat="autor" data-kw="praska zidovska zajednica multikulturalnost margina"><span class="pojm-cat">autor</span><div class="pojm-word">Praška židovska zajednica</div><div class="pojm-def">Početkom 20. stoljeća Prag je <em>multikulturni grad</em> — češki, njemački i židovski živalj. Kafka je <b>židov koji piše na njemačkom u češkom Pragu</b>. <em>Nijednoj zajednici ne pripada potpuno</em>. Iskustvo nepripadnosti prelijeva se u likove Gregora, Josefa K., geometra K.</div></div>

      <div class="pojm" data-cat="autor" data-kw="osiguravajuca kuca arbeiter unfall posao"><span class="pojm-cat">autor</span><div class="pojm-word">Arbeiter-Unfall-Versicherungs-Anstalt</div><div class="pojm-def">Praški <em>Radnički zavod za osiguranje od nezgoda</em>. Kafka tu radi <b>14 godina (1908.–1922.)</b> kao pravnik. Mrzi posao — piše tek noću i subotom. <b>Birokratska mehanika ovog zavoda postaje ključna tema njegovih djela</b> (Proces, Preobražaj — prokurist).</div></div>

      <div class="pojm" data-cat="autor" data-kw="tuberkuloza bolest sanatorij smrt"><span class="pojm-cat">autor</span><div class="pojm-word">Tuberkuloza</div><div class="pojm-def">Dijagnosticirana 1917. Kafka ostatak života provodi po <em>sanatorijima</em>. Umire <b>3. lipnja 1924. u sanatoriju Kierling</b> kraj Beča (tuberkuloza larinksa, 40 godina). <em>Bolest kao metafora</em> njegova života — čovjek koji se polako povlači iz svijeta. Pisao posljednje tjedne dok više nije mogao govoriti.</div></div>

      <!-- == MODERNA — epoha, pravci, postupci (15) == -->

      <div class="pojm" data-cat="moderna" data-kw="moderna epoha 1890 1930 kriza realizma"><span class="pojm-cat">moderna</span><div class="pojm-word">Moderna (epoha)</div><div class="pojm-def">Književno-kulturna epoha, <em>oko 1890.–1930.</em> Nastaje iz <b>krize realizma i pozitivizma</b>. Svijet prestaje biti objektivno spoznatljiv. <em>Središnja tema: gubitak sigurnih koordinata modernog čovjeka</em> — Boga, identiteta, koherentnog svijeta. Forma: eksperiment, fragmentacija, unutarnji monolog.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="ekspresionizam unutarnji izraz krik munch"><span class="pojm-cat">moderna</span><div class="pojm-word">Ekspresionizam</div><div class="pojm-def">Moderni pokret (oko <em>1905.–1925.</em>, njemački govorno područje). Tvrdi: <b>umjetnik ne oponaša svijet, nego iznosi svoj unutarnji doživljaj</b>. Strah, tjeskoba, krik, groteska, distorzija. Slikarstvo: <em>Edvard Munch — Krik</em> (1893.). Književnost: Kafka, Trakl, Benn, Werfel, Toller.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="simbolizam baudelaire rimbaud verlaine"><span class="pojm-cat">moderna</span><div class="pojm-word">Simbolizam</div><div class="pojm-def">Pravac <em>kasnog 19. stoljeća</em> (Baudelaire, Rimbaud, Verlaine, Mallarmé). <b>Stvarnost je sustav simbola</b> koje pjesnik dešifrira. Suprotnost realizmu — interesira ga ono <em>iza pojavnosti</em>. Pretkursor moderne. Hrvatska paralela: A. G. Matoš.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="futurizam marinetti brzina stroj"><span class="pojm-cat">moderna</span><div class="pojm-word">Futurizam</div><div class="pojm-def">Talijanski pokret (1909.), osnivač <em>F. T. Marinetti</em>. Slavi <b>brzinu, stroj, rat, modernizaciju</b>. <em>Manifest futurizma</em>: „rat — jedina higijena svijeta". Ekstremno antitradicijski. <em>Politički klizi prema fašizmu</em>.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="dadaizam tzara cabaret voltaire absurd"><span class="pojm-cat">moderna</span><div class="pojm-word">Dadaizam</div><div class="pojm-def">Antiumjetnički pokret (Zürich, 1916., Cabaret Voltaire). <em>Tristan Tzara, Hugo Ball</em>. <b>Nakon Prvog svjetskog rata — gubitak vjere u smisao</b>. Poezija nasumice, kolaži, provokacija. Pretkursor nadrealizma.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="nadrealizam breton freud san"><span class="pojm-cat">moderna</span><div class="pojm-word">Nadrealizam</div><div class="pojm-def">Pokret 1920-ih. <em>André Breton — Nadrealistički manifest</em> (1924.). Inspiriran <b>Freudovskom psihoanalizom</b> — <em>oslobađanje nesvjesnog, automatsko pisanje, snovi</em>. Slikari: Dalí, Magritte, Ernst. Književnost: Breton, Aragon, Éluard.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="egzistencijalizam sartre camus heidegger"><span class="pojm-cat">moderna</span><div class="pojm-word">Egzistencijalizam</div><div class="pojm-def">Filozofsko-književni pravac sredine 20. stoljeća. <em>Sartre, Camus, Heidegger, Kierkegaard</em> kao preteča. <b>Egzistencija prethodi esenciji</b> — čovjek nije unaprijed određen, mora <em>sam stvoriti smisao</em>. <b>Kafka kao preteča</b> — Camusov esej <em>Mit o Sizifu</em> (1942.) tumači Kafku.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="parabola kratka alegorijska prica"><span class="pojm-cat">moderna</span><div class="pojm-word">Parabola</div><div class="pojm-def">Kratka <em>alegorijska priča s univerzalnim značenjem</em>. Konkretna situacija — apstraktna poruka. <b>Preobražaj nije priča o jednom čovjeku-kukcu, nego univerzalna slika modernog čovjeka</b>. Kafka je majstor moderne parabole. Različite interpretacije = sve točne.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="alegorija metafora prikriveno znacenje"><span class="pojm-cat">moderna</span><div class="pojm-word">Alegorija</div><div class="pojm-def">Književni postupak gdje <em>konkretna slika nosi prikriveno apstraktno značenje</em>. <b>Kukac u Preobražaju</b> = alijenacija / dehumanizacija / regresija / autobiografija. <em>Više slojeva istovremeno</em>. Različito od jednostavne metafore — alegorija je proširena, sustavna.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="groteska ruzno smjesno absurd"><span class="pojm-cat">moderna</span><div class="pojm-word">Groteska</div><div class="pojm-def">Estetska kategorija — <b>spoj komičnog i strašnog, ljudskog i nakaznog</b>. <em>Čovjek koji postaje kukac</em> = klasična groteska. Korijeni u srednjovjekovnim figurama (himere, vodorige). U moderni postaje <em>ključno sredstvo izraza apsurda</em>.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="apsurd besmisao egzistencijalna situacija"><span class="pojm-cat">moderna</span><div class="pojm-word">Apsurd</div><div class="pojm-def">Filozofski/književni pojam — <em>besmisao egzistencijalne situacije</em> u kojoj se čovjek nalazi. <b>Camus</b>: apsurd je sukob između čovjekove potrebe za smislom i šutnje univerzuma. Kafkin Preobražaj = <em>arhetipska slika apsurda</em>. Anticipira Camusov <em>Stranac</em>, Beckettov <em>Čekajući Godota</em>.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="kafkijanski pridjev situacija birokracija"><span class="pojm-cat">moderna</span><div class="pojm-word">Kafkijanski</div><div class="pojm-def">Pridjev (po Kafki) — označava specifično stanje: <em>čovjek zarobljen u bezizlaznoj situaciji pred nevidljivim, neshvatljivim silama</em> na koje ne može utjecati. <b>Birokratska apsurdnost, lavirint moći, otuđenje, nemoć otpora</b>. Postaje opći pojam u 20. stoljeću.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="stream of consciousness joyce woolf tok svijesti"><span class="pojm-cat">moderna</span><div class="pojm-word">Stream of consciousness</div><div class="pojm-def">„<em>Tok svijesti</em>" — narativni postupak moderne. <b>Pripovjedač zapisuje misli lika onako kako se javljaju, bez logičke strukture</b>. James Joyce (Ulysses, 1922.), Virginia Woolf, Faulkner. <em>Kafka NE koristi stream of consciousness</em> — koristi <b>hladan izvještajni 3. lice</b>, što je drugačiji modernistički postupak.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="unutarnji monolog samogovor introspektivni"><span class="pojm-cat">moderna</span><div class="pojm-word">Unutarnji monolog</div><div class="pojm-def">Književni postupak — <em>predstavljanje lika kroz njegove neprekidne unutarnje misli</em>. Razvija se u moderni (Édouard Dujardin, 1887.; Joyce). Kafkin Gregor — <em>prelazi u indirektni unutarnji monolog</em> (3. lice ali kroz Gregorovu perspektivu). <b>Free indirect speech</b>.</div></div>

      <div class="pojm" data-cat="moderna" data-kw="fragmentacija tok modernizma diskontinuitet"><span class="pojm-cat">moderna</span><div class="pojm-word">Fragmentacija</div><div class="pojm-def">Ključno svojstvo modernizma — <em>razbijanje koherentnog narativnog toka</em> na fragmente. Kratki rezovi, skokovi u vremenu, nepouzdani pripovjedač. <b>Suprotnost realističkoj sigurnosti</b>. Kafkin Preobražaj fragmentira preko <em>3 dijela</em> — između njih praznine, mjeseci, ne-objašnjeni prijelazi.</div></div>

      <!-- == KONTEKST — filozofija, povijest, paralele (13) == -->

      <div class="pojm" data-cat="kontekst" data-kw="nietzsche bog je mrtav nadcovjek volja"><span class="pojm-cat">kontekst</span><div class="pojm-word">Nietzsche — „Bog je mrtav"</div><div class="pojm-def">Friedrich Nietzsche (1844.–1900.) — njemački filozof. Najpoznatija fraza iz <em>Vesele znanosti</em> (1882.): <b>„Bog je mrtav, i mi smo ga ubili."</b> Kraj metafizičkih sigurnosti. <em>Ključni filozofski okidač moderne</em>. Njegov <em>Zaratustra</em> i ideja nadčovjeka utječu na cijelo 20. stoljeće.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="freud psihoanaliza nesvjesno tumacenje snova"><span class="pojm-cat">kontekst</span><div class="pojm-word">Freud — psihoanaliza</div><div class="pojm-def">Sigmund Freud (1856.–1939.) — bečki psihijatar. <em>Tumačenje snova</em> (1900.) — početak psihoanalize. Pojmovi: <b>nesvjesno, libido, Edipov kompleks, potisnuto</b>. Utječe na cijelu modernu, posebice na nadrealizam i Kafkinu generaciju. <em>Kafka je čitao Freuda</em> — Preobražaj nudi se psihoanalitičkoj interpretaciji.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="einstein relativnost prostor vrijeme"><span class="pojm-cat">kontekst</span><div class="pojm-word">Einstein — relativnost</div><div class="pojm-def">Albert Einstein (1879.–1955.) — fizičar. <em>Specijalna teorija relativnosti</em> (1905.), opća (1915.). <b>Kraj Newtonskog svijeta</b> — vrijeme i prostor nisu apsolutni, ovise o promatraču. <em>Filozofska implikacija</em>: nema apsolutne, objektivne stvarnosti. Suvremenik Kafke i moderne.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="prvi svjetski rat 1914 1918 kraj liberalizma"><span class="pojm-cat">kontekst</span><div class="pojm-word">Prvi svjetski rat (1914.–1918.)</div><div class="pojm-def">Najveća ratna katastrofa do tada — <em>masovna mehanizirana smrt</em>, raspad četiriju carstava (Austro-Ugarska, Njemačko, Rusko, Osmansko). <b>Kraj liberalnog optimizma 19. stoljeća</b>. Otvara put nadrealizmu, ekspresionizmu kao reakciji. <em>Kafka piše Preobražaj 1912.</em> — predosjećaj.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="munch krik ekspresionizam slika tjeskoba"><span class="pojm-cat">kontekst</span><div class="pojm-word">Edvard Munch — Krik</div><div class="pojm-def">Norveški slikar (1863.–1944.). Slika <em>Krik</em> (1893.) — <b>najpoznatija slika ekspresionizma</b>. Distorzija lica, pejzaž koji odražava unutarnju tjeskobu. <em>Vizualni paralelizam Kafkinom svijetu</em>. Često se koristi kao ilustracija ekspresionističke estetike.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="camus stranac meursault apsurd"><span class="pojm-cat">kontekst</span><div class="pojm-word">Camus — Stranac (1942.)</div><div class="pojm-def">Albert Camus (1913.–1960.) — francuski egzistencijalist. <em>Stranac</em> — protagonist Meursault, otuđen od društvenih konvencija. <b>Razvija Kafkin koncept apsurda</b> u eksplicitnu filozofiju. Camus o Kafki: <em>„Cijeli Kafkin svijet je svijet u kojemu nada postaje teret."</em> Nasljednik Kafkine linije.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="sartre mucnina egzistencija prethodi esenciji"><span class="pojm-cat">kontekst</span><div class="pojm-word">Sartre — Mučnina (1938.)</div><div class="pojm-def">Jean-Paul Sartre (1905.–1980.) — francuski egzistencijalist. <em>Mučnina</em> (La Nausée) — protagonist Roquentin osjeća tjelesnu mučninu pred apsurdnošću postojanja. <b>Direktna nasljednička linija od Kafke</b>. Kasnije: <em>Egzistencijalizam je humanizam</em> (1946.).</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="sacher masoch venera u krznu mazohizam"><span class="pojm-cat">kontekst</span><div class="pojm-word">Sacher-Masoch — Venera u krznu (1870.)</div><div class="pojm-def">Leopold von Sacher-Masoch (1836.–1895.) — austrijski pisac. Roman <em>Venera u krznu</em> — Severin postaje rob Wande. <b>Aluzija na ovaj roman u Preobražaju</b> — slika „dame u krznu" koju Gregor brani. Glavni lik kod Sacher-Masocha također <em>preuzima ime Gregor</em>. Kafka direktno upućuje.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="nabokov predavanja knjizevnost interpretacija"><span class="pojm-cat">kontekst</span><div class="pojm-word">Nabokov — Predavanja o književnosti</div><div class="pojm-def">Vladimir Nabokov (1899.–1977.) — ruski/američki pisac (Lolita). <em>Predavanja o književnosti</em> (postumno 1980.) — analiza Preobražaja. Nabokov tvrdi: <b>Greta je prava negativka pripovijetke — ona izdaje brata</b>. Insektološki: Gregor je <em>kornjaš s krilima</em>, mogao je odletjeti.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="adorno frankfurtska skola otudenje"><span class="pojm-cat">kontekst</span><div class="pojm-word">Adorno — Bilješke o Kafki (1953.)</div><div class="pojm-def">Theodor W. Adorno (1903.–1969.) — njemački filozof, Frankfurtska škola. Tumači Kafku kao <b>kritičara otuđenja u kapitalizmu</b>. <em>„Kafka piše o čovjeku koji je zaboravio da je čovjek."</em> Marksistička linija interpretacije — Gregor kao otuđeni radnik.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="walter benjamin esej parabola otvorenost"><span class="pojm-cat">kontekst</span><div class="pojm-word">Walter Benjamin — Franz Kafka (1934.)</div><div class="pojm-def">Walter Benjamin (1892.–1940.) — njemački filozof, esejist. Esej <em>Franz Kafka: Povodom desete obljetnice njegove smrti</em>. <b>Kafkin tekst se opire interpretaciji</b>. <em>„Da bi razumio Kafku, treba zaboraviti razumjeti."</em> Otvara mogućnost <em>više interpretacija istovremeno</em>.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="edipov kompleks freud otac sin"><span class="pojm-cat">kontekst</span><div class="pojm-word">Edipov kompleks</div><div class="pojm-def">Freudov pojam — <em>nesvjesna sinovska želja za uklanjanjem oca i posjedovanjem majke</em>. Po grčkom mitu o Edipu. <b>Kafka okreće Edipov mit</b>: u Preobražaju ne sin ubija oca, nego <em>otac kažnjava sina</em> (jabuka u leđa). <b>Anti-Edipov motiv</b>.</div></div>

      <div class="pojm" data-cat="kontekst" data-kw="austrougarska monarhija raspad prag birokracija"><span class="pojm-cat">kontekst</span><div class="pojm-word">Austro-Ugarska Monarhija</div><div class="pojm-def">Dvojna monarhija (1867.–1918.) u kojoj Kafka živi. <em>Multinacionalna, multietnička, birokratska</em>. Prag — provincijski centar češkog dijela. <b>Raspada se iznutra</b> — birokracija rastuća, nacionalni identiteti napeti. <em>Kafkina birokratska estetika potječe iz iskustva Monarhije</em>. Raspada se 1918.</div></div>

    </div>

    <div class="pojm-noresult" id="pojm-noresult">
      <b>Nema rezultata</b>Niti jedan pojam ne odgovara pretrazi. Probaj drugu riječ ili promijeni kategoriju.
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(3)">‹ 📖 Citatnik</span>
      <span class="nb primary" onclick="sw(5)">🧠 Kviz ›</span>
    </div>
`;

function normalize(value) {
  return (value || '').toLowerCase()
    .replace(/č|ć/g, 'c')
    .replace(/š/g, 's')
    .replace(/ž/g, 'z')
    .replace(/đ/g, 'd')
    .replace(/[„”"''“”„]/g, '')
    .trim();
}

function bindPojmovnikH08() {
  const grid = document.getElementById('pojm-grid');
  if (!grid) return;

  const search = document.getElementById('pojm-search');
  const noResult = document.getElementById('pojm-noresult');
  const filterBtns = Array.from(document.querySelectorAll('.pojm-filter'));
  const items = Array.from(grid.querySelectorAll('.pojm'));

  const apply = () => {
    const activeBtn = document.querySelector('.pojm-filter.on');
    const category = activeBtn ? activeBtn.dataset.cat || 'all' : 'all';
    const query = normalize(search ? search.value : '');
    let visibleCount = 0;

    items.forEach((item) => {
      const itemCategory = item.dataset.cat || '';
      const keywords = item.dataset.kw || '';
      const word = item.querySelector('.pojm-word')?.textContent || '';
      const def = item.querySelector('.pojm-def')?.textContent || '';
      const haystack = normalize(keywords + ' ' + word + ' ' + def);
      const visible = (category === 'all' || itemCategory === category) && (!query || haystack.includes(query));
      item.style.display = visible ? '' : 'none';
      if (visible) visibleCount += 1;
    });

    if (noResult) noResult.classList.toggle('show', visibleCount === 0);
  };

  if (search && search.dataset.pojmInitBound !== '1') {
    search.dataset.pojmInitBound = '1';
    let debounce = 0;
    search.addEventListener('input', () => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(apply, 120);
    });
  }

  filterBtns.forEach((button) => {
    if (button.dataset.pojmInitBound === '1') return;
    button.dataset.pojmInitBound = '1';
    button.addEventListener('click', () => {
      filterBtns.forEach((other) => other.classList.remove('on'));
      button.classList.add('on');
      apply();
    });
  });

  window.initPojmovnikH08 = bindPojmovnikH08;
  apply();
}

export default function H08PojmovnikTab() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initPojmovnikH08 = bindPojmovnikH08;
    }
    bindPojmovnikH08();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(bindPojmovnikH08, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }} />;
}
