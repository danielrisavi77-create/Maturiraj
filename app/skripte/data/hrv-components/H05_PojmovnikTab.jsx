'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">51 pojam</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik — teorija književnosti 18. stoljeća</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja neknjiževnog teksta. Pokrivamo i <em>Werther pojmove</em> (ispitno djelo) i <em>prosvjetiteljske pojmove</em> (teorija epohe). Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔎 Pretraži pojmove (npr. werther, sturm und drang, weltschmerz, verterizam, epistolarni roman, sapere aude...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="werther">Werther</button>
      <button class="pojm-filter" data-cat="stil">Stil · Epoha</button>
      <button class="pojm-filter" data-cat="epoha">18. stoljeće</button>
      <button class="pojm-filter" data-cat="filoz">Filozofija</button>
      <button class="pojm-filter" data-cat="proza">Proza</button>
      <button class="pojm-filter" data-cat="candide">Candide</button>
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

    <div class="pojm-count" id="pojm-count">51 pojam prikazan</div>

    <div class="pojm-grid" id="pojm-grid">

      <!-- WERTHER POJMOVI (10) -->
      <div class="pojm" data-cat="werther" data-kw="werther glavni lik goethe epistolarni roman 1774"><span class="pojm-cat">werther</span><div class="pojm-word">Werther</div><div class="pojm-def">Glavni lik i pripovjedač Goetheova romana <em>Patnje mladog Werthera</em> (1774.). Mladi umjetnik građanskog porijekla, preosjetljiv, strastven. Voli Homera, Klopstocka, prirodu, slikanje. <b>Arhetipski Sturm und Drang heroj</b> — genij kojeg sputava okolina. Završava samoubojstvom zbog neuzvraćene ljubavi prema Lotte.</div></div>
      <div class="pojm" data-cat="werther" data-kw="lotte charlotte buff zaručnica albert"><span class="pojm-cat">werther</span><div class="pojm-word">Lotte (Charlotte)</div><div class="pojm-def">Predmet Wertherove ljubavi. Zaručena/udata za Alberta, brine se o 8 mlađe braće i sestara nakon majčine smrti. Lijepa, brižna, „majčinska”. <em>Voli Werthera kao prijatelja</em>, ali odabire dužnost prema Albertu. Inspiracija: Charlotte Buff, koju je Goethe upoznao u Wetzlaru 1772.</div></div>
      <div class="pojm" data-cat="werther" data-kw="albert lottin zarucnik razum suprotnost"><span class="pojm-cat">werther</span><div class="pojm-word">Albert</div><div class="pojm-def">Lottin zaručnik, poslije suprug. <em>Racionalan, staložen, buržoaski pouzdan</em> — antiteza Wertheru. <b>Nije zlikovac</b> — pozitivan lik koji predstavlja prosvjetiteljski razum. Debatira s Wertherom o samoubojstvu. Goetheov prijatelj Johann Kestner inspirira ovaj lik.</div></div>
      <div class="pojm" data-cat="werther" data-kw="wilhelm prijatelj primatelj pisama"><span class="pojm-cat">werther</span><div class="pojm-word">Wilhelm</div><div class="pojm-def">Wertherov prijatelj i primatelj njegovih 98 pisama. Nikada se ne pojavljuje „u kadru” — saznajemo za njega samo kroz Wertherove poruke. <em>Pasivni slušatelj</em> koji omogućuje čitatelju pristup Wertherovoj psihi. Glas razuma koji neuspješno pokušava Werthera urazumjeti.</div></div>
      <div class="pojm" data-cat="werther" data-kw="wahlheim wetzlar izmisljeno mjesto njemacka"><span class="pojm-cat">werther</span><div class="pojm-word">Wahlheim</div><div class="pojm-def">Izmišljeno malo njemačko mjesto u kojem se odvija radnja Werthera. Prototip: <em>Wetzlar</em>, gdje je Goethe stvarno boravio 1772. Simbol <b>idilične prirode</b> nasuprot nerazumijevajućem gradu-društvu. Prvi dio romana — ljetna idila, drugi dio — zimska pustoš.</div></div>
      <div class="pojm" data-cat="werther" data-kw="verterizam moda odjeca plavi frak zuti prsluk"><span class="pojm-cat">werther</span><div class="pojm-word">Verterizam</div><div class="pojm-def">Kulturni fenomen koji se javlja u Europi nakon 1774. Mladići oponašaju Werthera: oblače <em>plavi frak i žuti prsluk</em>, čitaju Ossiana i Homera, pišu ispovjedna pisma. Pojavljuje se parfem „Eau de Werther”, motivi na kineskom porculanu. <b>Prvi globalni književni pop-fenomen.</b></div></div>
      <div class="pojm" data-cat="werther" data-kw="werther efekt imitacijska samoubojstva"><span class="pojm-cat">werther</span><div class="pojm-word">Werther efekt</div><div class="pojm-def">Pojam moderne psihologije (~1974.) — <em>val imitacijskih samoubojstava po uzoru na Werthera</em>. Nakon 1774. neke njemačke države (Leipzig, Kopenhagen) zabranjuju roman. Goethe 1787. dodaje upozorenje u drugom izdanju. Danas se „Werther efekt” koristi za bilo koji fenomen oponašanja samoubojstva nakon medijske prezentacije.</div></div>
      <div class="pojm" data-cat="werther" data-kw="weltschmerz svjetska bol nesklad ideal stvarnost"><span class="pojm-cat">werther</span><div class="pojm-word">Weltschmerz</div><div class="pojm-def">Njemački pojam — <em>„svjetska bol”</em>. Osjećaj da svijet ne može zadovoljiti duboke čežnje pojedinca. Melankolija pred nesavršenošću stvarnosti. <b>Werther je prvi književni junak koji pati od Weltschmerza</b>. Centralni pojam za romantizam (H06) — Byron, Leopardi, svi romantičari koriste koncept.</div></div>
      <div class="pojm" data-cat="werther" data-kw="ossian skotski epski pjesnik melankolija magla"><span class="pojm-cat">werther</span><div class="pojm-word">Ossian</div><div class="pojm-def">Legendarni škotski epski pjesnik 3. st. (zapravo fikcija James Macphersona iz 1760-ih, ali tada se vjerovalo u autentičnost). Tamne, melankolične pjesme magle i smrti. <em>U Wertheru</em> Ossian <b>zamjenjuje Homera</b> u drugoj knjizi — simbolička oznaka Wertherovog prelaska iz svjetlosti u tamu, iz klasicizma u predromantizam.</div></div>
      <div class="pojm" data-cat="werther" data-kw="bildungsroman roman odgoja formacije njemacki"><span class="pojm-cat">werther</span><div class="pojm-word">Bildungsroman</div><div class="pojm-def">„Roman formacije” ili roman odgoja. Njemačka književna tradicija — junak sazrijeva kroz iskustvo (obrazovanje, putovanja, ljubav). <em>Werther je svojevrsni „anti-Bildungsroman”</em> — junak NE sazrijeva, već propada. Goetheov pravi Bildungsroman je <em>Wilhelm Meister</em> (1796.).</div></div>

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

      <div class="pojm" data-cat="candide" data-kw="candide naivni mladic ucenik"><span class="pojm-cat">candide</span><div class="pojm-word">Candide</div><div class="pojm-def">Glavni lik romana. Ime znači „naivni, jednostavni”. Prosvjetiteljski učenik koji kroz iskustvo prelazi od Panglossova optimizma do pragmatičnog zaključka: <em>„obrađuj svoj vrt”</em>.</div></div>
      <div class="pojm" data-cat="candide" data-kw="pangloss leibniz satira optimizam"><span class="pojm-cat">candide</span><div class="pojm-word">Pangloss</div><div class="pojm-def">Candidov učitelj, karikatura Leibniza. Ime grčki = „sve-jezik” (ima odgovor za sve). Ponavlja formulu <em>„sve je u najboljem redu u najboljem od svih mogućih svjetova”</em> unatoč svim katastrofama. Voltaireov glavni satirički fokus.</div></div>
      <div class="pojm" data-cat="candide" data-kw="cunigonda cunegonde ljubav ideal"><span class="pojm-cat">candide</span><div class="pojm-word">Cunigonda</div><div class="pojm-def">Candidova voljena, barunova kći. Počinje kao idealizirani objekt ljubavi, završava kao ružna, zloćudna. Voltaireova poruka: <em>ideali se ne održavaju u stvarnom svijetu</em>. Candide ju ipak oženi — iz dužnosti.</div></div>
      <div class="pojm" data-cat="candide" data-kw="eldorado utopija zlato raj"><span class="pojm-cat">candide</span><div class="pojm-word">Eldorado</div><div class="pojm-def">Skriveno kraljevstvo u Južnoj Americi (pogl. 17–18). Zlato nevrijedno, nema sudova ni zatvora, svi žive u skladu. Voltaireova utopija. <em>Ali Candide ga napušta</em> — ljudska priroda odbija raj.</div></div>
      <div class="pojm" data-cat="candide" data-kw="auto da fe inkvizicija kazna heretici"><span class="pojm-cat">candide</span><div class="pojm-word">Auto-da-fé</div><div class="pojm-def">„Čin vjere” — javna kazna heretika, specijalitet španjolske i portugalske inkvizicije. U Candidu (pogl. 6) Lisabonska inkvizicija odlučuje spaliti heretike da se spriječi novi potres — Pangloss obješen, Candide bičuvan. Vrhunac Voltaireove kritike fanatizma.</div></div>
      <div class="pojm" data-cat="candide" data-kw="kultivacija vrt rad finale pragmatizam"><span class="pojm-cat">candide</span><div class="pojm-word">„Il faut cultiver notre jardin”</div><div class="pojm-def">Finalna rečenica Candida (pogl. 30). <em>„Treba obrađivati svoj vrt.”</em> Voltaireov pragmatični odgovor: odustani od metafizike, počni raditi u svom lokalnom svijetu. Formula prosvjetiteljskog djelovanja.</div></div>

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

export default function H05PojmovnikTab() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initPojmovnikH05 = bindPojmovnik;
    }
    bindPojmovnik();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(bindPojmovnik, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }} />;
}
