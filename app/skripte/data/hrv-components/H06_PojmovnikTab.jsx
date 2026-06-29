'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">55 pojmova</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik — romantizam + Puškin pojmovi</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja neknjiževnog teksta. Pokrivamo <em>Puškin pojmove</em> (Evgenij Onjegin — deep-dive), <em>pojmovi epohe romantizma</em> (byronizam, weltschmerz, demonski junak) i <em>kontekst 18./19. st.</em> (prosvjetiteljski i romantičarski autori). Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔎 Pretraži pojmove (npr. onjegin, tatjana, oneginski stih, suvišan čovjek, byronizam, weltschmerz...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="puskin">Puškin · Onjegin</button>
      <button class="pojm-filter" data-cat="stil">Romantizam · Stil</button>
      <button class="pojm-filter" data-cat="epoha">18./19. st.</button>
      <button class="pojm-filter" data-cat="filoz">Filozofija</button>
      <button class="pojm-filter" data-cat="proza">Proza</button>
      <button class="pojm-filter" data-cat="romautor">Rom. autori</button>
      <button class="pojm-filter" data-cat="autori">Autori</button>
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

    <div class="pojm-count" id="pojm-count">55 pojmova prikazano</div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- PUŠKIN / ROMANTIZAM POJMOVI (13) -->
      <div class="pojm" data-cat="puskin" data-kw="onjegin evgenij protagonist suvišan čovjek"><span class="pojm-cat">puskin</span><div class="pojm-word">Evgenij Onjegin</div><div class="pojm-def">Protagonist istoimenog Puškinova djela (1823.–1831.). Mladi peterburški dendi, 26 godina, inteligentan ali besposlen. Zasićen svjetovnim životom, ciničan. Odbija Tatjaninu ljubav, ubija Lenskog u duelu, godinama luta, na kraju pada ničice pred Tatjanom. <b>Arhetip „suvišnog čovjeka”</b> u ruskoj književnosti — uzor za Pečorina (Ljermontov), Oblomova (Gončarov), Raskoljnikova (Dostojevski).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="tatjana larina junakinja pismo kneginja"><span class="pojm-cat">puskin</span><div class="pojm-word">Tatjana Larina</div><div class="pojm-def">Ženska protagonistica Evgenija Onjegina. Starija Larinova, povučena, zaljubljena u francuske sentimentalne romane (Rousseau, Richardson). Piše Onjeginu <em>otvoreno ljubavno pismo</em> — rijedak čin hrabrosti. Nakon hladnog odbijanja sazrijeva. U finalu kao kneginja dostojanstveno odbija Onjegina: „<em>Ja vas ljubim, ali drugomu sam dana</em>”. <b>Moralna vertikala romana</b> — Puškinov „uzvišeni ideal”.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="lenski vladimir pjesnik romantik duel"><span class="pojm-cat">puskin</span><div class="pojm-word">Vladimir Lenski</div><div class="pojm-def">Naivni pjesnik-romantičar, 18 godina, školovan u Göttingenu (njemački idealizam — Kant, Schiller). Zaručen za Olgu Larinu. <em>Antiteza Onjeginu</em> — vjeruje u ljubav, prijateljstvo, ideju. Nakon što Onjegin pleše s Olgom, izaziva ga na dvoboj. <b>Pogiba u duelu u VI. poglavlju.</b> Puškin ironijski pita bi li postao veliki pjesnik — ili „debeli gospodin s podagrom”.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="olga larina mladja sestra povrsna"><span class="pojm-cat">puskin</span><div class="pojm-word">Olga Larina</div><div class="pojm-def">Mlađa Larinova, Lenskova zaručnica. <em>Vesela, simpatična, površna</em> — antiteza Tatjani. Ne razumije težinu duela. Nakon Lenskove smrti <b>brzo se udaje za husara</b>. Puškin je prikazuje blago ironično — „normalna” djevojka, bez Tatjanine dubine. Služi kao katalizator duela (Onjegin s njom pleše iz osvete Lenskom).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="oneginski stih 14 stihova jampski tetrametar"><span class="pojm-cat">puskin</span><div class="pojm-word">Oneginski stih</div><div class="pojm-def">Specifična strofa koju Puškin izmišlja za Evgenija Onjegina. <em>14 stihova u jampskom tetrametru</em> (4 jampske stope). Rimovni uzorak: <b>AbAbCCddEffEgg</b> (3 kvartine različitog rimovanja + završni distih). Izmjena muških (malo slovo) i ženskih rima (veliko slovo). <b>Jedinstvena forma u svjetskoj književnosti.</b> 389 strofa čini cijeli roman.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="suvišan čovjek tip lik ruska književnost"><span class="pojm-cat">puskin</span><div class="pojm-word">Suvišan čovjek</div><div class="pojm-def">Tip lika u ruskoj književnosti 19. st. — <em>talentiran, obrazovan plemić koji nema svrhu u društvu</em>. Puškinov Onjegin je prvi. Slijede: Pečorin (Ljermontov, <em>Heroj našeg vremena</em>, 1840.), Rudin (Turgenjev), Oblomov (Gončarov), Raskoljnikov (Dostojevski — <b>obvezatno 2026</b>). Karakteristike: dosada, cinizam, neprilagođenost, odsustvo samokritičnosti. <b>Centralni pojam ruske književnosti.</b></div></div>
      <div class="pojm" data-cat="puskin" data-kw="roman u stihovima forma hibridna"><span class="pojm-cat">puskin</span><div class="pojm-word">Roman u stihovima</div><div class="pojm-def">Hibridna književna forma — <em>ni ep, ni roman, ni zbirka poezije</em>. Puškinov <em>Evgenij Onjegin</em> (1823.–1831.) je prvi. Spaja <b>epsku narativnost</b> (radnja, likovi), <b>lirsku subjektivnost</b> (Puškin kao pripovjedač) i <b>dramsku neposrednost</b> (dijalozi). Ima 8 poglavlja, 389 oneginskih strofa. Belinski: „<em>enciklopedija ruskog života</em>”.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="byron byronizam engleski pjesnik utjecaj"><span class="pojm-cat">puskin</span><div class="pojm-word">Byronizam</div><div class="pojm-def">Utjecaj Byrona i njegovih heroja (Childe Harold, Don Juan, Manfred) na europsku književnost 19. st. <em>Byronski heroj</em> — melankoličan, ponosan, proganjani, moralno ambivalentan, usamljeni, prezrivo-superiorni. <b>Onjegin je puškinski byronski heroj</b> — Onjegin čak nosi portret Byrona u sobi. Puškin i njegovu pozu istovremeno imitira i kritizira (Tatjana otkriva da je „parodija”).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="demonski junak romantik manfred faust"><span class="pojm-cat">puskin</span><div class="pojm-word">Demonski junak</div><div class="pojm-def">Tip romantičkog heroja koji <em>komunicira s onostranim</em> ili <em>djeluje izvan moralnih konvencija</em>. Prethodnici: Miltonov Sotona (17. st.). Romantički primjeri: Byronov Manfred, Goetheov Faust, Ljermontovljev Demon, Puškinov Onjegin (po inverziji — „demon dosade”). <b>Jedna od centralnih tipova romantizma</b> uz byronskog heroja.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="weltschmerz svjetska bol romantizam"><span class="pojm-cat">puskin</span><div class="pojm-word">Weltschmerz</div><div class="pojm-def">Njemački pojam — <em>„svjetska bol”</em>. Osjećaj da svijet ne može zadovoljiti duboke čežnje pojedinca. Melankolija pred nesavršenošću stvarnosti. Nastaje u predromantizmu (<em>Werther</em> je prvi primjer, H05), <b>postaje centralni pojam romantizma</b>. Byron, Puškin, Leopardi, Heine. Ruski ekvivalent: „splin”, „ruska dosada” kod Puškina.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="dvoboj duel ponos konvencija zareckij"><span class="pojm-cat">puskin</span><div class="pojm-word">Dvoboj (duel)</div><div class="pojm-def">Ritualizirani borba dvojice radi časti, uobičajen u ruskom i europskom plemstvu 18./19. st. Proveden po strogim pravilima (pištolji, sekundanti, odmjereni koraci). U <em>Evgeniju Onjeginu</em>: Onjegin ubija Lenskog u VI. poglavlju — Zareckij (profesionalni dueler) ne dopušta odustajanje. <b>Tragična ironija:</b> Puškin će i sam poginuti u duelu 1837. s francuskim časnikom Dantesom.</div></div>
      <div class="pojm" data-cat="puskin" data-kw="sankt peterburg prijestolnica rusko društvo"><span class="pojm-cat">puskin</span><div class="pojm-word">Sankt-Peterburg</div><div class="pojm-def">Ruska carska prijestolnica (1703.–1918.). Osnovao Petar Veliki. U <em>Evgeniju Onjeginu</em>: <b>prostor visokog društva, balova, salonske dosade</b>. Onjegin u SPB-u kao dendi — zasićen. U finalu (VIII. poglavlje) ponovo u SPB-u — Tatjana kao kneginja. Simbolizuje <em>umjetni, europski Rus</em> nasuprot „pravoj” Rusiji (ruskog sela).</div></div>
      <div class="pojm" data-cat="puskin" data-kw="rusko selo imanje priroda tatjana"><span class="pojm-cat">puskin</span><div class="pojm-word">Rusko selo (imanje)</div><div class="pojm-def">Provincijski prostor u <em>Evgeniju Onjeginu</em>. Onjegin nasljeđuje imanje od strica (I. pogl.) i dolazi u selo. <b>Tu su glavni događaji</b> — prijateljstvo s Lenskim (II.), Tatjanino pismo (III.), odbijanje (IV.), imendan (V.), duel (VI.), Tatjana u napuštenoj kući (VII.). Puškin prikazuje selo kao <em>izvor ruskog identiteta</em> — Tatjana kao autentična „ruska duša” dolazi iz sela.</div></div>

      <div class="pojm" data-cat="epoha" data-kw="prosvjetiteljstvo 18 stoljece razum"><span class="pojm-cat">epoha</span><div class="pojm-word">Prosvjetiteljstvo</div><div class="pojm-def">Intelektualno razdoblje 18. st. (fr. <em>Les Lumieres</em>, eng. <em>The Enlightenment</em>, njem. <em>Aufklärung</em>). Razum kao mjerilo svega, kritika religije i vlasti, Enciklopedija kao središnji projekt. Završava Francuskom revolucijom 1789.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="le siecle des lumieres veliko stoljece"><span class="pojm-cat">epoha</span><div class="pojm-word">Le Siecle des Lumieres</div><div class="pojm-def">„Stoljeće svjetla” — francuski naziv za 18. st. Središte prosvjetiteljstva. Pariz kao salonska prijestolnica. Voltaire, Rousseau, Diderot, Montesquieu.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="enciklopedija diderot dalembert 1751"><span class="pojm-cat">epoha</span><div class="pojm-word">Enciklopedija</div><div class="pojm-def"><em>Encyclopédie, ou dictionnaire raisonné</em> (1751.–1772.). 17 tomova teksta + 11 tomova ilustracija. Urednici Diderot i d'Alembert. 140 suradnika. Manifest prosvjetiteljstva, najveći izdavački projekt 18. st.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="lisabonski potres 1755 povod candide"><span class="pojm-cat">epoha</span><div class="pojm-word">Lisabonski potres</div><div class="pojm-def">1. studenog 1755. — razara Lisabon, ubija 30 000–50 000 ljudi na Svetkovinu svih svetih. Kriza za teodiceju i Leibnizov optimizam. Neposredni povod <em>Candidu</em>.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="salon pariz intelektualni krug"><span class="pojm-cat">epoha</span><div class="pojm-word">Salon</div><div class="pojm-def">Pariški intelektualni krug 18. st. — kuće plemkinja gdje se okupljaju filozofi, pisci, znanstvenici. Madame Geoffrin, Madame du Deffand. Središte prosvjetiteljske razmjene ideja.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="prosvijeceni apsolutizam fridrih josif"><span class="pojm-cat">epoha</span><div class="pojm-word">Prosvijećeni apsolutizam</div><div class="pojm-def">Politički program — vladar apsolutne vlasti koji primjenjuje prosvjetiteljske reforme. Primjeri: Fridrih II. u Prusiji (štiti Voltairea), Josip II. u Austriji (<em>jozefinizam</em>), Katarina II. u Rusiji.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="francuska revolucija 1789 pad bastille"><span class="pojm-cat">epoha</span><div class="pojm-word">Francuska revolucija</div><div class="pojm-def">1789. — pad Bastille (14. srpnja), <em>Deklaracija o pravima čovjeka i građanina</em>. Politička realizacija prosvjetiteljskih ideja. Rousseau, Voltaire i Montesquieu su „intelektualni očevi” revolucije.</div></div>

      <div class="pojm" data-cat="filoz" data-kw="racionalizam descartes razum"><span class="pojm-cat">filoz</span><div class="pojm-word">Racionalizam</div><div class="pojm-def">Filozofski pravac — razum je glavni izvor spoznaje. Začetnik: Descartes („<em>Cogito, ergo sum</em>” / „Mislim, dakle jesam”). Leibniz, Spinoza. Utjecaj na francusko prosvjetiteljstvo.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="empirizam locke iskustvo tabula rasa"><span class="pojm-cat">filoz</span><div class="pojm-word">Empirizam</div><div class="pojm-def">Filozofski pravac — iskustvo je glavni izvor spoznaje. Začetnik: John Locke (<em>Esej o ljudskom razumijevanju</em>, 1689.). Razum je <em>tabula rasa</em> koju popunjuju osjetila. Utjecaj na englesko prosvjetiteljstvo.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="deizam bog stvaratelj bez dogme"><span class="pojm-cat">filoz</span><div class="pojm-word">Deizam</div><div class="pojm-def">Vjerovanje u Boga-stvaratelja, ali bez crkvene dogme, objavljenja, sakramenata. Bog je „pokrenuo” svijet i ostavio ga djelovati po prirodnim zakonima. Voltaire je deist. Razlika od ateizma.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="teodiceja leibniz zlo bog problem"><span class="pojm-cat">filoz</span><div class="pojm-word">Teodiceja</div><div class="pojm-def">Filozofska disciplina koja pokušava opravdati Božju dobrotu unatoč postojanju zla. Leibnizova <em>Teodiceja</em> (1710.) tvrdi da je ovaj svijet „najbolji od svih mogućih”. Voltaire u Candidu ruši taj argument.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="drustveni ugovor rousseau volja"><span class="pojm-cat">filoz</span><div class="pojm-word">Društveni ugovor</div><div class="pojm-def">Rousseauov koncept (1762.): ljudi se slobodno udružuju i prenose vlast na zajednicu. Legitimacija države. <em>„Čovjek je rođen slobodan, a posvuda je u okovima.”</em></div></div>
      <div class="pojm" data-cat="filoz" data-kw="opca volja rousseau zajednica dobro"><span class="pojm-cat">filoz</span><div class="pojm-word">Opća volja</div><div class="pojm-def">Rousseauov termin (<em>volonté générale</em>) — volja zajednice usmjerena prema općem dobru, različita od pukog zbroja pojedinačnih volja. Temelj moderne demokracije — i kontroverzno: temelj totalitarizma (Robespierre).</div></div>
      <div class="pojm" data-cat="filoz" data-kw="razdvajanje vlasti montesquieu zakonodavna"><span class="pojm-cat">filoz</span><div class="pojm-word">Razdvajanje vlasti</div><div class="pojm-def">Montesquieuova teorija (<em>O duhu zakona</em>, 1748.): zakonodavna, izvršna i sudska vlast moraju biti razdvojene da se spriječi tiranija. Preuzeto u američki Ustav (1787.), francuski i sve moderne demokracije.</div></div>
      <div class="pojm" data-cat="filoz" data-kw="sapere aude kant razum hrabrosti"><span class="pojm-cat">filoz</span><div class="pojm-word">Sapere aude!</div><div class="pojm-def">Latinska parola iz Horacija — „Usudi se znati!” / „Imaj hrabrosti koristiti svoj razum!” Kant ju 1784. koristi kao definiciju prosvjetiteljstva. Simbol intelektualne autonomije.</div></div>

      <div class="pojm" data-cat="proza" data-kw="filozofski roman voltaire candide"><span class="pojm-cat">proza</span><div class="pojm-word">Filozofski roman</div><div class="pojm-def">Nova forma prosvjetiteljstva — roman u kojem likovi i radnja <em>ilustriraju filozofsku tezu</em>. Likovi su tipovi-ideje, ne psihološki portreti. Candide je arhetipski primjer. Preteča Diderotova <em>Jacquesa fatalista</em>.</div></div>
      <div class="pojm" data-cat="proza" data-kw="epistolarni roman pisma montesquieu"><span class="pojm-cat">proza</span><div class="pojm-word">Epistolarni roman</div><div class="pojm-def">Roman u obliku pisama. Prosvjetiteljstvo ga izmišlja — Montesquieu <em>Perzijska pisma</em> (1721.), Rousseau <em>Nova Heloisa</em> (1761.), Richardson <em>Pamela</em> (1740.). Daje direktan pristup unutarnjem svijetu lika.</div></div>
      <div class="pojm" data-cat="proza" data-kw="autobiografija rousseau ispovijesti"><span class="pojm-cat">proza</span><div class="pojm-word">Moderna autobiografija</div><div class="pojm-def">Rousseau izmišlja s <em>Ispovijestima</em> (1782., posmrtno) — iskren prikaz osobnog života, svih mana i vrlina. Preteča Proustove moderne proze i psihološkog romana.</div></div>
      <div class="pojm" data-cat="proza" data-kw="pikareskni roman lutanje junak"><span class="pojm-cat">proza</span><div class="pojm-word">Pikareskni roman</div><div class="pojm-def">Roman lutanja — junak putuje kroz društvo, opisuje ga kroz svoju nevolju. Španjolska tradicija (<em>Lazarillo de Tormes</em>, 1554.). Candide je prosvjetiteljska adaptacija pikaresknog romana.</div></div>
      <div class="pojm" data-cat="proza" data-kw="satira ismijavanje kritika drustva"><span class="pojm-cat">proza</span><div class="pojm-word">Satira</div><div class="pojm-def">Književni postupak — kritika društva, ideja ili osoba kroz ironijsko ismijavanje. Swift (<em>Gulliver</em>), Voltaire (<em>Candide</em>), Moliere. Prosvjetiteljstvo podiže satiru na razinu filozofskog oružja.</div></div>
      <div class="pojm" data-cat="proza" data-kw="ironija voltaire distanca kritika"><span class="pojm-cat">proza</span><div class="pojm-word">Ironija</div><div class="pojm-def">Stilski postupak — reći jedno, misliti drugo. Voltaireov glavni alat. Kad Pangloss za vrijeme potresa kaže „<em>sve je u najboljem redu</em>”, Voltaire se ne slaže — ironija ruši tezu sama od sebe.</div></div>
      <div class="pojm" data-cat="proza" data-kw="utopija eldorado idealno drustvo"><span class="pojm-cat">proza</span><div class="pojm-word">Utopija</div><div class="pojm-def">Fiktivno idealno društvo. Thomas More (<em>Utopia</em>, 1516.) izmišlja pojam. U prosvjetiteljstvu: Eldorado u Candidu (pogl. 17–18) — zlato nevrijedno, nema sudova, svi žive u skladu. <em>Mogući bolji svijet.</em></div></div>

      <div class="pojm" data-cat="romautor" data-kw="byron george gordon engleski romantik"><span class="pojm-cat">rom. autori</span><div class="pojm-word">George Gordon, Lord Byron</div><div class="pojm-def">(1788.–1824.) Engleski pjesnik, arhetip romantičarskog genija. Najvažnija djela: <em>Childe Haroldovo hodočašće</em> (1812.–1818.), <em>Don Juan</em> (1819.–1824., nedovršeno), <em>Manfred</em> (1817.), istočnjačke poeme. <em>Byronski heroj</em> — melankoličan, proganjani, moralno ambivalentan. <b>Umire 1824. u Grčkoj</b> boreći se za oslobođenje. Puškinov glavni uzor.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="wordsworth william engleski romantizam priroda"><span class="pojm-cat">rom. autori</span><div class="pojm-word">William Wordsworth</div><div class="pojm-def">(1770.–1850.) Engleski pjesnik, utemeljitelj engleskog romantizma. S Coleridgeom pisac <em>Lyrical Ballads</em> (1798.) — manifest pokreta. Poznate pjesme: <em>Tintern Abbey</em>, <em>I Wandered Lonely as a Cloud</em> („Daffodils”), <em>The Prelude</em>. Tema: <b>priroda kao ogledalo duše</b>, sjećanja iz djetinjstva. Umro kao poet laureate.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="coleridge samuel taylor lyrical ballads natprirodno"><span class="pojm-cat">rom. autori</span><div class="pojm-word">Samuel Taylor Coleridge</div><div class="pojm-def">(1772.–1834.) Engleski pjesnik, filozof, Wordsworthov partner u <em>Lyrical Ballads</em> (1798.). Specijaliziran za <b>natprirodno i imaginaciju</b>: <em>The Rime of the Ancient Mariner</em>, <em>Kubla Khan</em> (napisana u opijumskoj viziji), <em>Christabel</em>. Predgovor 1817. (<em>Biographia Literaria</em>) — teorija imaginacije. Patio od ovisnosti o laudanumu.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="shelley percy bysshe oslobodjeni prometej radikalni"><span class="pojm-cat">rom. autori</span><div class="pojm-word">Percy Bysshe Shelley</div><div class="pojm-def">(1792.–1822.) Radikalni engleski pjesnik, ateist, politički aktivist. Najvažnija djela: <em>Oslobođeni Prometej</em> (1820.) — drama o mitskom titanu, <em>Ozymandias</em> (sonet o prolaznosti moći), <em>Ode to the West Wind</em>. Muž Mary Shelley (autorica <em>Frankensteina</em>). <b>Utopljen u oluji</b> kod Viareggia s 29 godina — ikona „umjetnika koji umire mlad”.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="keats john oda grckoj vazi nightingale"><span class="pojm-cat">rom. autori</span><div class="pojm-word">John Keats</div><div class="pojm-def">(1795.–1821.) Engleski pjesnik, druga generacija romantizma. <em>Velike ode</em> (1819.): <b>Ode on a Grecian Urn</b> („Ljepota je istina, istina ljepota”), <em>Ode to a Nightingale</em>, <em>To Autumn</em>. <b>Umro od tuberkuloze u Rimu s 25 godina.</b> Epitaf: „<em>Ovdje leži onaj čije je ime pisano u vodi</em>”. Tragični romantički genij par excellence.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="blake william tyger mistik slikar"><span class="pojm-cat">rom. autori</span><div class="pojm-word">William Blake</div><div class="pojm-def">(1757.–1827.) Engleski pjesnik, slikar, mistik — prethodnik romantizma. <em>Songs of Innocence and of Experience</em> (1789./1794.), <em>The Marriage of Heaven and Hell</em>. <b>Tyger! Tyger!</b> — metafora stvaralačke snage. Stvorio vlastiti mitološki sustav (Urizen, Los, Albion) — <em>prethodi Jungovoj psihologiji</em>. Često zaboravljen u svoje vrijeme, otkriven nakon smrti.</div></div>
      <div class="pojm" data-cat="romautor" data-kw="ljermontov mihail pecorin heroj naseg vremena"><span class="pojm-cat">rom. autori</span><div class="pojm-word">Mihail Ljermontov</div><div class="pojm-def">(1814.–1841.) Puškinov neposredni nasljednik u ruskoj književnosti. Najvažniji roman: <b>Heroj našeg vremena</b> (1840.) — protagonist <em>Pečorin</em> je drugi „suvišan čovjek” nakon Onjegina. Poeme: <em>Mciri</em>, <em>Demon</em>. <b>Umro u dvoboju s 26 godina</b> — tragična paralela Puškinu. Bez Ljermontova nema Dostojevskog (obvezatno 2026).</div></div>

      <div class="pojm" data-cat="autori" data-kw="voltaire arouet francuski filozof"><span class="pojm-cat">autori</span><div class="pojm-word">Voltaire</div><div class="pojm-def">François-Marie Arouet (1694.–1778.). Francuski filozof, pisac, povjesničar. Najutjecajnija figura prosvjetiteljstva. Branitelj slobode govora i vjerske tolerancije. Živio u Bastilji, Engleskoj, Prusiji, Švicarskoj.</div></div>
      <div class="pojm" data-cat="autori" data-kw="goethe johann wolfgang nemacki werther faust"><span class="pojm-cat">autori</span><div class="pojm-word">Johann Wolfgang von Goethe</div><div class="pojm-def">(1749.–1832.) Najveći njemački pjesnik svih vremena. <em>Werther</em> (1774.), <em>Götz von Berlichingen</em> (1773.), <em>Ifigenija na Tauridi</em> (1787.), <em>Wilhelm Meister</em> (1796.), <em>Faust I/II</em> (1808./1832.). <b>Tvorac pojma „svjetska književnost”</b>. Razdoblje njegove aktivnosti naziva se „Goetheovo doba”.</div></div>
      <div class="pojm" data-cat="autori" data-kw="rousseau jean jacques drustveni ugovor"><span class="pojm-cat">autori</span><div class="pojm-word">Jean-Jacques Rousseau</div><div class="pojm-def">(1712.–1778.) Švicarsko-francuski filozof, pisac. <em>Društveni ugovor</em> (1762.), <em>Emil</em> (1762.), <em>Ispovijesti</em> (1782.). Preteča romantizma — emocija, priroda, pojedinac. Intelektualni rival Voltairea.</div></div>
      <div class="pojm" data-cat="autori" data-kw="diderot denis enciklopedija urednik"><span class="pojm-cat">autori</span><div class="pojm-word">Denis Diderot</div><div class="pojm-def">(1713.–1784.) Glavni urednik Enciklopedije, 28 godina rada. <em>Ramoova sinovica</em> (~1761.), <em>Jacques fatalist</em> (1796.). Preteča moderne proze. Materijalistički filozof.</div></div>
      <div class="pojm" data-cat="autori" data-kw="montesquieu duh zakona razdvajanje"><span class="pojm-cat">autori</span><div class="pojm-word">Montesquieu</div><div class="pojm-def">Charles-Louis de Secondat, barun de Montesquieu (1689.–1755.). <em>Perzijska pisma</em> (1721.), <em>O duhu zakona</em> (1748.). Pravni i politički teoretičar. Otac moderne konstitucijske teorije.</div></div>
      <div class="pojm" data-cat="autori" data-kw="kant immanuel njemacki filozof razum"><span class="pojm-cat">autori</span><div class="pojm-word">Immanuel Kant</div><div class="pojm-def">(1724.–1804.) Njemački filozof. <em>Kritika čistog uma</em> (1781.), <em>Kritika praktičkog uma</em> (1788.), esej <em>„Što je prosvjetiteljstvo?”</em> (1784.). Zatvara prosvjetiteljsku epohu svojim kritičkim sustavom. Kategorički imperativ.</div></div>
      <div class="pojm" data-cat="autori" data-kw="lessing gotthold nathan mudri"><span class="pojm-cat">autori</span><div class="pojm-word">Gotthold Ephraim Lessing</div><div class="pojm-def">(1729.–1781.) Njemački prosvjetitelj. <em>Nathan Mudri</em> (1779.) — drama o vjerskoj toleranciji. <em>Laokoon</em> (1766.) — estetika. <em>Minna von Barnhelm</em> — komedija.</div></div>
      <div class="pojm" data-cat="autori" data-kw="defoe daniel robinson crusoe"><span class="pojm-cat">autori</span><div class="pojm-word">Daniel Defoe</div><div class="pojm-def">(1660.–1731.) Engleski prosvjetiteljski pisac. <em>Robinson Crusoe</em> (1719.) — prototip modernog engleskog romana. <em>Moll Flanders</em> (1722.) — pikareskni roman s ženskim protagonistom.</div></div>
      <div class="pojm" data-cat="autori" data-kw="swift jonathan gulliver satira"><span class="pojm-cat">autori</span><div class="pojm-word">Jonathan Swift</div><div class="pojm-def">(1667.–1745.) Irsko-engleski satiričar. <em>Gulliverova putovanja</em> (1726.) — satira društva kroz fantastična putovanja. <em>Skromni prijedlog</em> (1729.) — pamflet koji parodira ekonomski racionalizam.</div></div>

      <div class="pojm" data-cat="stil" data-kw="predromantizam sturm drang emocija priroda"><span class="pojm-cat">stil</span><div class="pojm-word">Predromantizam</div><div class="pojm-def">Kraj 18. st. — reakcija protiv hladnog razuma. <em>Osjećaj, priroda, pojedinac</em>. Goetheov <em>Werther</em> (1774.), Sturm und Drang, Rousseauov utjecaj. Preteča romantizma (H06).</div></div>
      <div class="pojm" data-cat="stil" data-kw="sturm und drang oluja nalet pokret nemacki"><span class="pojm-cat">stil</span><div class="pojm-word">Sturm und Drang</div><div class="pojm-def">Njemački književni pokret ~1765.–1785. (<em>„Oluja i nalet”</em>). Reakcija na prosvjetiteljski racionalizam. Ideje: <b>osjećaj iznad razuma, priroda, pojedinac-genij, sloboda stvaranja</b>. Naziv po drami F.M. Klingera (1776.). Kulminacija: Goetheov <em>Werther</em> i Schillerovi <em>Razbojnici</em>.</div></div>
      <div class="pojm" data-cat="stil" data-kw="goetheovo doba njemacka knjizevnost 1770 1832"><span class="pojm-cat">stil</span><div class="pojm-word">Goetheovo doba</div><div class="pojm-def">Razdoblje njemačke književnosti ~1770.–1832. (Goetheove godine aktivnosti). Uključuje Sturm und Drang, Weimarsku klasiku i ranu fazu njemačkog romantizma. <em>Centralni naziv za razdoblje</em> jer je Goethe dominantna figura.</div></div>
      <div class="pojm" data-cat="stil" data-kw="weimarska klasika goethe schiller antika"><span class="pojm-cat">stil</span><div class="pojm-word">Weimarska klasika</div><div class="pojm-def">Faza Goetheovog i Schillerovog stvaralaštva ~1786.–1805. Nakon Sturm und Drang-a, povratak klasičnoj harmoniji, antičkim uzorima, estetici ravnoteže. <em>Ifigenija na Tauridi</em>, <em>Wilhelm Meister</em>, <em>Rimske elegije</em>. Kontrast Wertheru.</div></div>
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

export default function H06PojmovnikTab() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initPojmovnikH06 = bindPojmovnik;
    }
    bindPojmovnik();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(bindPojmovnik, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }} />;
}
