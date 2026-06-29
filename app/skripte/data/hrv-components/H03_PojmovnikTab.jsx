'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">48 pojmova</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik — teorija renesanse + Hamlet pojmovi</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja neknjiževnog teksta. Pokrivamo <em>Hamlet pojmove</em> (obvezatno čitanje 2026) i <em>renesansne pojmove</em> (humanizam, sonet, blank verse). Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔎 Pretraži pojmove (npr. klaudije, ofelija, elsinor, revenge tragedy, blank verse...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="hamlet">Hamlet</button>
      <button class="pojm-filter" data-cat="epoha">Epoha</button>
      <button class="pojm-filter" data-cat="drama">Drama</button>
      <button class="pojm-filter" data-cat="lirika">Lirika · sonet</button>
      <button class="pojm-filter" data-cat="roman">Roman · novela</button>
      <button class="pojm-filter" data-cat="rj">Romeo i Julija</button>
      <button class="pojm-filter" data-cat="stil">Stil</button>
    </div>

    <style>
      .pojm-filter{padding:6px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;background:var(--card);color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .18s}
      .pojm-filter:hover{color:var(--t1);border-color:var(--bd-br)}
      .pojm-filter.on{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--bronze);font-weight:700}
      .pojm-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:12px}
      .pojm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}
      .pojm{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 16px;transition:all .2s;position:relative}
      .pojm:hover{border-color:var(--bd-br);transform:translateY(-2px);box-shadow:0 6px 20px rgba(220,50,47,.08)}
      .pojm-cat{position:absolute;top:12px;right:12px;font-family:var(--mono);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:2px 7px;background:var(--ele);border-radius:var(--r1)}
      .pojm-word{font-family:var(--display);font-size:15px;font-weight:600;color:var(--bronze-l);letter-spacing:.5px;margin-bottom:6px;padding-right:70px}
      .pojm-def{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}
      .pojm.hidden{display:none}
    </style>

    <div class="pojm-count" id="pojm-count">48 pojmova prikazano</div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- HAMLET POJMOVI (13) -->
      <div class="pojm" data-cat="hamlet" data-kw="hamlet princ danski protagonist wittenberg"><span class="pojm-cat">hamlet</span><div class="pojm-word">Hamlet (princ)</div><div class="pojm-def">Glavni lik istoimene tragedije — <em>mladi danski kraljević, student iz Wittenberga</em> (protestantski grad). ~30 godina. Inteligentan, filozofski, melankoličan. Otac mu je ubijen od strica Klaudija. <b>Arhetip modernog refleksivnog subjekta</b> — misli previše da bi brzo djelovao. Harold Bloom: „Shakespeare izumio čovjeka”.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="klaudije claudius stric kralj ubojica"><span class="pojm-cat">hamlet</span><div class="pojm-word">Klaudije (Claudius)</div><div class="pojm-def">Hamletov stric — <em>ubio brata (starog kralja Hamleta), oženio udovicu Gertrudu, uzurpirao prijestolje</em>. Nije jednodimenzionalni zlikovac — sposoban za ljubav (prema Gertrudi), kajanje (molitva u III činu). Makijavelistički vladar. <b>„Osmjehnuti zlikovac”</b> — smješka se dok intrigira.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="gertruda gertrude majka kraljica"><span class="pojm-cat">hamlet</span><div class="pojm-word">Gertruda (Gertrude)</div><div class="pojm-def">Hamletova majka, danska kraljica. <em>Udala se za Klaudija dva mjeseca nakon muževljeve smrti</em> — Hamlet joj to prebacuje. Moralno dvosmislena: je li znala za ubojstvo? Shakespeare namjerno ne odgovara. U finalu <b>ispije otrov namijenjen sinu</b> — tragička ironija.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="ofelija ophelia polonijeva kci ljubav ludilo"><span class="pojm-cat">hamlet</span><div class="pojm-word">Ofelija (Ophelia)</div><div class="pojm-def">Polonijeva kći, Hamletova ljubav. Mlada, nježna, <em>poslušna ocu i bratu</em>. Odbija Hamleta po očevoj naredbi, što Hamlet doživljava kao izdaju. Nakon Hamletovog ubojstva oca <b>stvarno poludi</b> (za razliku od Hamletovog glumljenog ludila) — dijeli cvijeće, pjeva ludoljubne pjesme, utapa se. <em>Simbol nevinosti slomljene spletkama.</em></div></div>
      <div class="pojm" data-cat="hamlet" data-kw="polonije polonius komornik savjetnik spijun"><span class="pojm-cat">hamlet</span><div class="pojm-word">Polonije (Polonius)</div><div class="pojm-def">Kraljev komornik i glavni savjetnik, Ofelijin i Laertov otac. <em>Smatra se mudrim, a zapravo je komičan</em> — pretjerano govorljiv. Šalje špijune čak na sina Laerta. Sakriven iza zavjese, <b>Hamlet ga ubije zabunom</b> (misleći da je Klaudije). <em>Simbol korumpirane dvorske politike.</em></div></div>
      <div class="pojm" data-cat="hamlet" data-kw="laert laertes polonijev sin osvetnik dvojnik"><span class="pojm-cat">hamlet</span><div class="pojm-word">Laert (Laertes)</div><div class="pojm-def">Polonijev sin, Ofelijin brat. Student u Parizu. <em>Hamletov dvojnik</em> — dok Hamlet oklijeva, Laert <b>odmah djeluje</b> čim čuje za očevu smrt. Dva sina traže osvetu za oca — dva različita stava. Laert umire od vlastitog otrovanog mača u finalnom dvoboju. <em>„Čovjek akcije” koji ne preživljava.</em></div></div>
      <div class="pojm" data-cat="hamlet" data-kw="horacije horatio prijatelj wittenberg preživljava"><span class="pojm-cat">hamlet</span><div class="pojm-word">Horacije (Horatio)</div><div class="pojm-def">Hamletov najbolji prijatelj, student iz Wittenberga, racionalni. <em>Jedini lik kojem Hamlet vjeruje.</em> Nije princ, nije intrigant — samo učen čovjek. <b>Jedini od glavnih likova preživljava dramu</b> — njegova zadaća je ispričati priču svijetu. „<em>Laku noć, slatki prinče</em>” — njegov oproštaj.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="fortinbras norveski princ osvetnik preživljava"><span class="pojm-cat">hamlet</span><div class="pojm-word">Fortinbras</div><div class="pojm-def">Norveški princ — <em>treći osvetnik</em> u drami (uz Hamleta i Laerta). Otac mu je ubijen od starog Hamleta. Za razliku od druga dvojica, Fortinbras <b>čeka 20 godina i strategijski djeluje</b>. Dolazi u Dansku u zadnjem činu — dobiva prijestolje. <em>Shakespearova poruka:</em> pravda dolazi, ali ne uvijek iz prave strane.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="duh oca kralj hamlet stariji prikaza cistiliste"><span class="pojm-cat">hamlet</span><div class="pojm-word">Duh oca (Hamlet stariji)</div><div class="pojm-def">Pokojni kralj Hamlet, otac protagonista. Pojavljuje se u I činu — <em>traži osvetu</em>. Dolazi iz čistilišta (katoličko učenje — kontroverzno u protestantskoj Engleskoj). <b>Ambivalentan lik:</b> je li stvarno otac, ili Đavao koji kuša Hamleta? Mišolovka u III činu dokazuje istinu Duhovog svjedočenja.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="elsinor helsingor danski dvor kronborg"><span class="pojm-cat">hamlet</span><div class="pojm-word">Elsinor (Helsingör)</div><div class="pojm-def">Mjesto radnje drame — <em>danski kraljevski dvor</em>. Shakespeare preuzeo stvarnu tvrđavu Kronborg u danskom Helsingöru. <b>Elsinor kao metafora korumpiranog svijeta</b> — „<em>Nešto je trulo u državi Danskoj</em>”. Centri radnje: bedemi (Duh), dvor (spletke), groblje (smrt), Ofelijina soba (intima, špijunaža).</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="revenge tragedy osvetnicka tragedija seneca kyd"><span class="pojm-cat">hamlet</span><div class="pojm-word">Revenge tragedy</div><div class="pojm-def">Engleska osvetnička tragedija, popularan žanr na prijelazu 16./17. st. Uzori: <em>Seneka</em>, <em>Thomas Kyd (The Spanish Tragedy)</em>. Formula: junak mora osvetiti ubijenog rođaka; duh; glumljeno ludilo; masovna smrt na kraju. <b>Shakespeare s Hamletom žanr transformira</b> — osveta postaje filozofski problem, ne samo akcija.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="antic disposition glumljeno ludilo maska"><span class="pojm-cat">hamlet</span><div class="pojm-word">Antic disposition</div><div class="pojm-def">Engleska fraza = „<em>glumljeno ludilo, luđačka maska</em>”. Hamletova strategija u II činu — <em>hiniti ludilo</em> da prikrije pravu namjeru (osvetu) i provjeri istinitost Duha. Kontrast: <b>Ofelijino stvarno ludilo</b> u IV činu. Shakespeareova ironija: onaj tko glumi preživljava duže od onoga tko je iskren.</div></div>
      <div class="pojm" data-cat="hamlet" data-kw="mišolovka umorstvo gonzaga predstava metateatar"><span class="pojm-cat">hamlet</span><div class="pojm-word">Mišolovka (Umorstvo Gonzaga)</div><div class="pojm-def">Predstava u predstavi (<b>metateatar</b>) u III činu. Hamlet poručuje glumcima da izvedu <em>Umorstvo Gonzaga</em> — scenu identičnu Duhovom opisu ubojstva. Klaudijeva reakcija (prestaje izvedbu, odlazi) <b>dokazuje krivnju</b>. Hamlet: „<em>Predstava je ono čime ću uhvatiti savjest kralja</em>”. <em>Kazalište kao detektivski instrument.</em></div></div>
      <div class="pojm" data-cat="hamlet" data-kw="yorick lubanja groblje memento mori"><span class="pojm-cat">hamlet</span><div class="pojm-word">Yorick</div><div class="pojm-def">Kraljev šaljivac iz Hamletova djetinjstva — sad samo lubanja na groblju. U V/1 Hamlet drži Yorickovu lubanju i meditira o smrti: „<em>Jao, jadni Yorick! Poznavao sam ga, Horacije</em>”. <b>Vizualna ikona drame</b> — memento mori scena. Demokratizacija smrti: kraljevi i šaljivci završavaju isto.</div></div>

      <div class="pojm" data-cat="epoha" data-kw="renesansa preporod"><span class="pojm-cat">epoha</span><div class="pojm-word">Renesansa</div><div class="pojm-def">Kulturno razdoblje 14.–17. st. Počinje u Italiji. „Preporod” antičke kulture + preoblikovanje pogleda na čovjeka i svijet.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="humanizam čovjek studia humanitatis"><span class="pojm-cat">epoha</span><div class="pojm-word">Humanizam</div><div class="pojm-def">Kulturni pokret 14.–16. st. U središte vraća čovjeka i antičke autore. Otac: Petrarca. <em>Studia humanitatis</em> — humanističke discipline.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="antropocentrizam čovjek središte"><span class="pojm-cat">epoha</span><div class="pojm-word">Antropocentrizam</div><div class="pojm-def">Pogled na svijet u kojem je čovjek u središtu (nasuprot srednjovjekovnog teocentrizma). Obilježje renesanse.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="reformacija luther crkva"><span class="pojm-cat">epoha</span><div class="pojm-word">Reformacija</div><div class="pojm-def">Vjerski pokret koji vodi Martin Luther (95 teza, 1517.). Cijepa katoličku Europu na protestante i katolike. Kontekst u kojem Shakespeare piše.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="gutenberg tiskarski stroj 1440"><span class="pojm-cat">epoha</span><div class="pojm-word">Gutenbergov tisak</div><div class="pojm-def">1440. — tiskarski stroj s pokretnim slovima. Knjiga postaje dostupna: od 30 000 knjiga u Europi prije do 9 milijuna do 1500.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="elizabetansko doba engleska"><span class="pojm-cat">epoha</span><div class="pojm-word">Elizabetansko doba</div><div class="pojm-def">Vladavina Elizabete I. (1558.–1603.) u Engleskoj. Vrhunac engleske renesanse. Najproduktivnije razdoblje engleske književnosti — Shakespeare, Marlowe, Spenser.</div></div>

      <div class="pojm" data-cat="drama" data-kw="tragedija shakespeare 5 činova"><span class="pojm-cat">drama</span><div class="pojm-word">Renesansna tragedija</div><div class="pojm-def">Shakespeareov model: 5 činova, psihološka dubina, junak pada zbog sebe (ne zbog sudbine kao u antici). Primjeri: R&amp;J, Hamlet, Othello, Macbeth.</div></div>
      <div class="pojm" data-cat="drama" data-kw="blank verse jampski pentametar"><span class="pojm-cat">drama</span><div class="pojm-word">Blank verse</div><div class="pojm-def">Nerimovani jampski pentametar — standardni stih Shakespeareovih drama. Plemići govore u stihu, obični ljudi u prozi.</div></div>
      <div class="pojm" data-cat="drama" data-kw="jamb jambski pentametar stopa"><span class="pojm-cat">drama</span><div class="pojm-word">Jampski pentametar</div><div class="pojm-def">Stih od 5 jambskih stopa. Jamb = nenaglašeni + naglašeni slog (<em>da-DUM</em>). Primjer: „<em>But SOFT! What LIGHT through YON-der WIN-dow BREAKS?</em>”</div></div>
      <div class="pojm" data-cat="drama" data-kw="globe kazalište london"><span class="pojm-cat">drama</span><div class="pojm-word">The Globe</div><div class="pojm-def">Shakespeareovo kazalište u Londonu (1599.). Okruglo, javno, 3000 mjesta. Publika od plemića do pučana koji stoje u jami.</div></div>
      <div class="pojm" data-cat="drama" data-kw="komedija dell arte improvizacija"><span class="pojm-cat">drama</span><div class="pojm-word">Commedia dell'arte</div><div class="pojm-def">Talijanska improvizacijska komedija 16. st. Fiksni likovi u maskama (Harlekin, Pantalone, Pulcinella). Utjecaj na cijelu Europu.</div></div>
      <div class="pojm" data-cat="drama" data-kw="hamartia tragička greška shakespeare"><span class="pojm-cat">drama</span><div class="pojm-word">Hamartia (renesansna)</div><div class="pojm-def">Tragička greška junaka — ali kod Shakespearea <em>unutarnja</em>, psihološka. Hamlet oklijeva, Othello povjeruje, Macbeth je ambiciozan.</div></div>
      <div class="pojm" data-cat="drama" data-kw="monolog solilokvij hamlet"><span class="pojm-cat">drama</span><div class="pojm-word">Monolog (solilokvij)</div><div class="pojm-def">Lik sam govori publici svoje misli. Shakespeare koristi za psihološku dubinu — <em>„Biti ili ne biti”</em> je najpoznatiji solilokvij u svjetskoj književnosti.</div></div>

      <div class="pojm" data-cat="lirika" data-kw="sonet 14 stihova"><span class="pojm-cat">lirika</span><div class="pojm-word">Sonet</div><div class="pojm-def">Lirska pjesma od 14 stihova. Nastaje u Italiji u 13. st., Petrarca standardizira, Shakespeare modificira. Dominantna forma renesansne lirike.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="petrarkinski talijanski sonet"><span class="pojm-cat">lirika</span><div class="pojm-word">Petrarkinski sonet</div><div class="pojm-def">14 stihova: 2 kvartine (ABBA ABBA) + 2 tercete (CDE CDE ili sl.) = 8+6. „Volta” (obrat) između 8. i 9. stiha.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="shakespeareov engleski sonet"><span class="pojm-cat">lirika</span><div class="pojm-word">Shakespeareov sonet</div><div class="pojm-def">14 stihova: 3 kvartine (ABAB CDCD EFEF) + 1 distih (GG) = 12+2. Završni distih daje pointu ili paradoks.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="petrarkizam stil"><span class="pojm-cat">lirika</span><div class="pojm-word">Petrarkizam</div><div class="pojm-def">Stil ljubavne lirike nastao po uzoru na Petrarcu. Idealizirana dama, unutarnji sukob pjesnika, antiteze (oganj/led, život/smrt). Dominira Europom 300 godina.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="kanconijer petrarca laura"><span class="pojm-cat">lirika</span><div class="pojm-word">Kanconijer</div><div class="pojm-def">Petrarcino životno djelo — zbirka 366 pjesama posvećenih <em>Lauri</em>. Temelj europske ljubavne lirike.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="volta obrat sonet"><span class="pojm-cat">lirika</span><div class="pojm-word">Volta</div><div class="pojm-def">„Obrat” u sonetu. U petrarkinom između 8. i 9. stiha, u Shakespeareovom prije završnog distiha. Ključno mjesto promjene misli.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="pentametar pet stopa"><span class="pojm-cat">lirika</span><div class="pojm-word">Pentametar</div><div class="pojm-def">Stih od 5 stopa. U engleskoj književnosti obično jampski pentametar (5 × jamb). U grčkoj — polovica stopa je drugačija.</div></div>

      <div class="pojm" data-cat="roman" data-kw="moderni roman don quijote"><span class="pojm-cat">roman</span><div class="pojm-word">Moderni roman</div><div class="pojm-def">Književna forma koja nastaje s <em>Don Quijoteom</em> (1605.). Karakteristike: nepouzdan pripovjedač, složeni likovi, igra stvarnosti i ideala.</div></div>
      <div class="pojm" data-cat="roman" data-kw="novela boccaccio kratka"><span class="pojm-cat">roman</span><div class="pojm-word">Novela</div><div class="pojm-def">Kratka pripovjedna proza o jednom događaju, s neočekivanim obratom. Boccaccio je otac europske novele (<em>Dekameron</em>, 100 novela).</div></div>
      <div class="pojm" data-cat="roman" data-kw="okvirna priča dekameron"><span class="pojm-cat">roman</span><div class="pojm-word">Okvirna priča</div><div class="pojm-def">Narativni postupak: jedna priča okružuje druge priče. Boccacciov Dekameron — okvir je bijeg od kuge, u kojem 10 ljudi priča 100 priča u 10 dana.</div></div>
      <div class="pojm" data-cat="roman" data-kw="parodija viteski don quijote"><span class="pojm-cat">roman</span><div class="pojm-word">Parodija</div><div class="pojm-def">Smiješno oponašanje forme radi kritike. <em>Don Quijote</em> je parodija viteškog romana — ismijava naivni idealizam srednjovjekovne književnosti.</div></div>
      <div class="pojm" data-cat="roman" data-kw="pikareskni roman"><span class="pojm-cat">roman</span><div class="pojm-word">Pikareskni roman</div><div class="pojm-def">Roman o lukavom junaku iz nižeg staleža (pícaro) koji preživljava putujući. Španjolska tradicija 16. st. Utjecaj na Don Quijotea.</div></div>
      <div class="pojm" data-cat="roman" data-kw="donkihotski idealist"><span class="pojm-cat">roman</span><div class="pojm-word">Donkihotski</div><div class="pojm-def">Pridjev izveden iz Don Quijotea. Znači: idealistički, nerealan, sanjarski. U mnogim jezicima se koristi za opis idealističnog ponašanja.</div></div>

      <div class="pojm" data-cat="rj" data-kw="star-crossed lovers sudbina"><span class="pojm-cat">romeo</span><div class="pojm-word">Star-crossed lovers</div><div class="pojm-def">„Ljubavnici protiv kojih su zvijezde” — Shakespeareov izraz iz prologa R&amp;J. Postao simbol za par osuđen sudbinom.</div></div>
      <div class="pojm" data-cat="rj" data-kw="montecchi capuletti verona"><span class="pojm-cat">romeo</span><div class="pojm-word">Montecchi i Capuletti</div><div class="pojm-def">Dvije zaraćene plemićke obitelji u Veroni. Preuzeo Shakespeare od Arthura Brookea (1562.), koji je preuzeo od talijanskih izvora. Dante ih spominje još u 14. st.</div></div>
      <div class="pojm" data-cat="rj" data-kw="fra lorenzo redovnik"><span class="pojm-cat">romeo</span><div class="pojm-word">Fra Lorenzo</div><div class="pojm-def">Franjevački redovnik, Romeov i Julijin savjetnik. Tajno ih vjenča, sastavlja plan s napitkom. Moralno dvoznačan lik — dobronamjeran, ali pokreće tragediju.</div></div>
      <div class="pojm" data-cat="rj" data-kw="mercutio prijatelj knezov"><span class="pojm-cat">romeo</span><div class="pojm-word">Mercutio</div><div class="pojm-def">Romeov najbolji prijatelj, knežov rođak. Ne pripada nijednoj zaraćenoj obitelji. Duhovit, ciničan, govori u metaforama. Njegova smrt pokreće tragediju.</div></div>
      <div class="pojm" data-cat="rj" data-kw="tybalt capuletti nasilan"><span class="pojm-cat">romeo</span><div class="pojm-word">Tybalt</div><div class="pojm-def">Julijin temperamentni rođak, „kralj mačaka” — vrhunski mačevalac. Utjelovljenje obiteljske mržnje. Ubija Mercutia, Romeo ubija njega.</div></div>

      <div class="pojm" data-cat="stil" data-kw="antiteza oganj led"><span class="pojm-cat">stil</span><div class="pojm-word">Petrarkinska antiteza</div><div class="pojm-def">Stilsko suprotstavljanje dvaju pojmova (oganj/led, život/smrt, sreća/patnja) za izraz unutarnjeg sukoba. Temelj petrarkinskog stila.</div></div>
      <div class="pojm" data-cat="stil" data-kw="alegorija simbolička renesansa"><span class="pojm-cat">stil</span><div class="pojm-word">Alegorija (renesansna)</div><div class="pojm-def">Stilski postupak u kojem konkretno predstavlja apstraktno. U renesansi manje religiozno nego u srednjem vijeku — alegorija ljubavi, prolaznosti, znanja.</div></div>
      <div class="pojm" data-cat="stil" data-kw="hiperbola pretjerano"><span class="pojm-cat">stil</span><div class="pojm-word">Hiperbola</div><div class="pojm-def">Stilsko pretjerivanje. Romeo Juliji: „Julija je sunce”. Petrarca Lauri: „od mene je svjetlija od tisuću sunaca”. Tipično petrarkinsko.</div></div>
      <div class="pojm" data-cat="stil" data-kw="metafora preneseno"><span class="pojm-cat">stil</span><div class="pojm-word">Proširena metafora</div><div class="pojm-def">Metafora koja se razvija kroz cijelu pjesmu ili prizor. Shakespeare u Sonetu 18 proširuje metaforu „ljeto” kroz cijeli sonet. Omiljen postupak renesansne lirike.</div></div>
      <div class="pojm" data-cat="stil" data-kw="carpe diem antika petrarca"><span class="pojm-cat">stil</span><div class="pojm-word">Carpe diem</div><div class="pojm-def">„Iskoristi dan” — motiv antičkog podrijetla (Horacije), koji renesansa oživljava. Kod Shakespearea i Petrarce: prolaznost ljepote traži <em>sada</em>.</div></div>

    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(3)">‹ Citatnik</span>
      <span class="nb primary" onclick="sw(5)">⚡ Drill ›</span>
    </div>
`;

function bindPojmovnik() {
  const search = document.getElementById('pojm-search');
  const filters = document.getElementById('pojm-filters');
  if (!search || !filters) return;

  const filter = () => {
    const query = search.value.toLowerCase().trim();
    const activeBtn = filters.querySelector('.pojm-filter.on');
    const category = activeBtn ? activeBtn.dataset.cat : 'all';
    const items = document.querySelectorAll('.pojm');
    let shown = 0;

    items.forEach((el) => {
      const keywords = (el.dataset.kw || '').toLowerCase();
      const itemCategory = el.dataset.cat;
      const matchesSearch = !query || keywords.includes(query) || el.textContent.toLowerCase().includes(query);
      const matchesCategory = category === 'all' || itemCategory === category;
      const visible = matchesSearch && matchesCategory;
      el.classList.toggle('hidden', !visible);
      if (visible) shown += 1;
    });

    const count = document.getElementById('pojm-count');
    if (count) {
      count.textContent = shown + ' ' + (shown === 1 ? 'pojam' : (shown < 5 ? 'pojma' : 'pojmova')) + ' prikazano';
    }
  };

  if (search.dataset.pojmInitBound !== '1') {
    search.dataset.pojmInitBound = '1';
    search.addEventListener('input', filter);
  }

  filters.querySelectorAll('.pojm-filter').forEach((button) => {
    if (button.dataset.pojmInitBound === '1') return;
    button.dataset.pojmInitBound = '1';
    button.addEventListener('click', () => {
      filters.querySelectorAll('.pojm-filter').forEach((other) => other.classList.remove('on'));
      button.classList.add('on');
      filter();
    });
  });

  filter();
}

export default function H03PojmovnikTab() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initPojmovnikH03 = bindPojmovnik;
    }
    bindPojmovnik();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(bindPojmovnik, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }} />;
}
