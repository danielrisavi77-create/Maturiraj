'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">48 pojmova</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik — teorija književnosti 17. stoljeća</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja neknjiževnog teksta. Pokrivamo i <em>Život je san pojmove</em> (ispitno djelo) i <em>barokno-klasicističke pojmove</em> (teorija epohe). Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔎 Pretraži pojmove (npr. sigismund, vanitas, siglo de oro, culteranismo, auto sacramental...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="barok-drama">Život je san</button>
      <button class="pojm-filter" data-cat="epoha">Epoha</button>
      <button class="pojm-filter" data-cat="drama">Drama</button>
      <button class="pojm-filter" data-cat="lirika">Lirika</button>
      <button class="pojm-filter" data-cat="skrtac">Škrtac · Moliere</button>
      <button class="pojm-filter" data-cat="autori">Autori</button>
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

      <!-- ŽIVOT JE SAN POJMOVI (13) -->
      <div class="pojm" data-cat="barok-drama" data-kw="sigismund segismundo kralj poljski protagonist kraljevic"><span class="pojm-cat">calderon</span><div class="pojm-word">Sigismund (Segismundo)</div><div class="pojm-def">Glavni lik Calderónove drame — poljski kraljević zatvoren u kuli od rođenja zbog proročanstva. Prolazi kroz <b>3 faze</b>: zvijer (kula) › tiranin (dvor) › mudri vladar (pobjeda). <em>Simbol čovjeka</em> koji snagom slobodne volje nadvladava sudbinu. Obrazovan od Klotalda, ali bez socijalnog iskustva.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="bazilije basilio poljski kralj astrolog otac"><span class="pojm-cat">calderon</span><div class="pojm-word">Bazilije (Basilio)</div><div class="pojm-def">Poljski kralj, Sigismundov otac, astrolog. <em>Dobar vladar, loš otac.</em> Vjeruje u zvijezde — zato zatvara sina. Paradoks: upravo ta odluka <b>uzrokuje ispunjenje proročanstva</b>. Simbol razuma koji se pretvara u tiraniju kad izgubi vjeru u čovjeka.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="klotaldo clotaldo odgojitelj stari plemic rosaurin otac"><span class="pojm-cat">calderon</span><div class="pojm-word">Klotaldo (Clotaldo)</div><div class="pojm-def">Stari plemić, Sigismundov odgojitelj u kuli, <em>tajni Rosaurin otac</em>. Prije 20 godina ostavio Rosaurinu majku — dao joj mač kao znak. Razapet između dužnosti prema kralju i ljubavi prema kćeri. Simbol <b>dužnosti koja se bori s ljubavlju</b>.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="rosaura dama prerusena u muskarca klotaldova kci"><span class="pojm-cat">calderon</span><div class="pojm-word">Rosaura</div><div class="pojm-def">Dama prerušena u muškarca, <em>Klotaldova kći</em>. Dolazi u Poljsku da se osveti Astolfu koji ju je zaveo i obećao brak Steli. Nosi mač — simbol izgubljene časti. <b>Paralelna priča</b> uz Sigismunda: oboje traže ono što im je oduzeto (čast / sloboda).</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="astolfo moskovski knez nasljednik oportunist"><span class="pojm-cat">calderon</span><div class="pojm-word">Astolfo</div><div class="pojm-def">Moskovski knez, Bazilijev nećak, namijenjen za nasljednika prijestolja. Zaručen za Stelu — ali prije je obećao brak Rosauri. <em>Politički oportunist</em>, simbol časti koja se sukobljava s ambicijom. Na kraju oženi Rosauru — čast se vraća.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="stela estrella poljska princeza bazilijeva neakinja"><span class="pojm-cat">calderon</span><div class="pojm-word">Stela (Estrella)</div><div class="pojm-def">Poljska princeza, Bazilijeva nećakinja, druga potencijalna nasljednica. Ime znači „zvijezda”. Zaručena za Astolfa, ali <em>zna da je prevario Rosauru</em>. Bori se za svoja prava — nije pasivan lik.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="klarin lakrdijas gracioso komicni sluga"><span class="pojm-cat">calderon</span><div class="pojm-word">Klarin</div><div class="pojm-def">Rosaurin sluga, <em>lakrdijaš</em> (<b>gracioso</b>). Komični kontrapunkt drame, ismijava sve događaje. <em>Tragička ironija:</em> bježi od borbe, ali pogibe slučajnim metkom u pobuni. Nitko ne može pobjeći sudbini.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="gracioso komicni sluga spanjolska drama"><span class="pojm-cat">calderon</span><div class="pojm-word">Gracioso</div><div class="pojm-def">Tipski lik španjolske drame Zlatnog vijeka — <em>komični sluga</em>. Oponašanje gospodara, igre riječima, „trezvene” ali prizemljene primjedbe. Klarin u Životu je san je arhetipski gracioso. Kontrast ozbiljnim likovima.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="vanitas tastina nistavnost prolaznost memento"><span class="pojm-cat">calderon</span><div class="pojm-word">Vanitas</div><div class="pojm-def">Lat. „taština, ništavnost” — <b>centralna barokna tema</b>. Sve je prolazno, smrt uništava sve. U slikarstvu: lubanje, uvenulo cvijeće, svijeće koje se gase. U književnosti: „život je san”. <em>Calderón nije nihilist — vanitas kod njega generira moralnu odgovornost.</em></div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="siglo de oro zlatno doba spanjolska kultura"><span class="pojm-cat">calderon</span><div class="pojm-word">Siglo de Oro</div><div class="pojm-def">„Zlatno doba” španjolske kulture, ~1550.–1680. Paradoks: Španjolska politički pada, kulturno cvjeta. Istovremeno stvaraju <b>Cervantes</b> (Don Quijote), <b>Lope de Vega</b>, <b>Góngora</b>, <b>Quevedo</b>, <b>Velázquez</b>, <b>Calderón</b>. S Calderónovom smrću 1681. završava.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="culteranismo gongora ukrasen stil metafora"><span class="pojm-cat">calderon</span><div class="pojm-word">Culteranismo</div><div class="pojm-def">Stilski pravac španjolskog baroka (Luis de Góngora). <em>Ukrašen, metaforičan stil</em> — kompleksna sintaksa, latinizmi, zasićenost metaforama. <b>Calderón je pod utjecajem culteranisma</b> — njegovi monolozi imaju gustu metaforičku teksturu.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="conceptismo quevedo koncepti igre rijeci"><span class="pojm-cat">calderon</span><div class="pojm-word">Conceptismo</div><div class="pojm-def">Drugi stilski pravac španjolskog baroka (Francisco de Quevedo). <em>Intelektualno koncentriran stil</em> — paradoksi, igre riječima, oštra misao. Manje ukrasa, više duha. Rival culteranismu — ista tema (prolaznost), različite stilske strategije.</div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="auto sacramental alegorijska drama corpus christi"><span class="pojm-cat">calderon</span><div class="pojm-word">Auto sacramental</div><div class="pojm-def">Španjolski <em>religiozni drama-jednoaktovka</em> za blagdan Corpus Christi. Alegorijski likovi (Bog, Čovjek, Svijet, Smrt). Calderón napisao ~80 autosa — najpoznatiji <em>Veliki svjetski teatar</em> (El gran teatro del mundo). <b>Svijet kao pozornica, Bog kao redatelj, ljudi kao glumci.</b></div></div>
      <div class="pojm" data-cat="barok-drama" data-kw="comedia nueva lope de vega spanjolska drama"><span class="pojm-cat">calderon</span><div class="pojm-word">Comedia nueva</div><div class="pojm-def">„Nova komedija” — tip španjolske drame koju je kodificirao Lope de Vega (~1600.). <em>Tri čina</em>, stih (osmerac), miješa tragično i komično, česte paralelne radnje, ljubav i čast kao teme. <b>Calderón usavršava ovu formu</b> u Životu je san.</div></div>

      <div class="pojm" data-cat="epoha" data-kw="barok 17 stoljece"><span class="pojm-cat">epoha</span><div class="pojm-word">Barok</div><div class="pojm-def">Stilska epoha 17. st. (i prve polovice 18.). Raskošan, patetičan, religiozan, metaforama zasićen. Centri: Španjolska, Italija, Engleska. Reakcija na renesansu i protureformacija.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="klasicizam 17 18 razum"><span class="pojm-cat">epoha</span><div class="pojm-word">Klasicizam</div><div class="pojm-def">Stilska epoha 17.–18. st. Discipliniran, razumski, svjetovni. Vraća antičke uzore. Strogi propisi forme. Centar: Francuska, dvor Luja XIV.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="luj xiv kralj sunce versailles"><span class="pojm-cat">epoha</span><div class="pojm-word">Luj XIV.</div><div class="pojm-def">„Kralj Sunce” (1638.–1715., vlada 1643.–1715.). Apsolutistički francuski monarh. Pokrovitelj Moliereove družine. Versailles kao kulturno središte Europe.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="grand siecle veliko stoljece"><span class="pojm-cat">epoha</span><div class="pojm-word">Le Grand Siecle</div><div class="pojm-def">„Veliko stoljeće” — francuski naziv za 17. st. Vrhunac francuske kulture: Moliere, Racine, Corneille, La Fontaine, Boileau. Cijela Europa imitira Francusku.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="protureformacija katolicka"><span class="pojm-cat">epoha</span><div class="pojm-word">Protureformacija</div><div class="pojm-def">Katolička reakcija na protestantsku reformaciju (od Tridentskog sabora 1545.–1563.). Ideološki kontekst baroka — patetične scene mučeništva, raskoš crkve.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="boileau l art poetique 1674"><span class="pojm-cat">epoha</span><div class="pojm-word">Boileauovo Pjesničko umijeće</div><div class="pojm-def">Nicolas Boileau, <em>L'Art poétique</em> (1674.). Didaktička pjesma — manifest klasicizma. Razum iznad strasti, jasnoća iznad bujnosti, antički uzori.</div></div>

      <div class="pojm" data-cat="drama" data-kw="tri jedinstva mjesto vrijeme radnja"><span class="pojm-cat">drama</span><div class="pojm-word">Tri jedinstva</div><div class="pojm-def">Klasicistička pravila drame: <em>jedinstvo mjesta</em> (jedna lokacija), <em>jedinstvo vremena</em> (24h), <em>jedinstvo radnje</em> (jedna priča). Aristotel govori samo o jedinstvu radnje — Francuzi dodaju ostala dva.</div></div>
      <div class="pojm" data-cat="drama" data-kw="komedija karaktera moliere harpagon"><span class="pojm-cat">drama</span><div class="pojm-word">Komedija karaktera</div><div class="pojm-def">Komedija u kojoj je središte jedan lik s dominantnom manom (škrtost, licemjerje, mizantropija). Moliereov izum. Cilj: kritika društvenih mana kroz karikaturu.</div></div>
      <div class="pojm" data-cat="drama" data-kw="komedija intrige zapleti"><span class="pojm-cat">drama</span><div class="pojm-word">Komedija intrige</div><div class="pojm-def">Komedija u kojoj je središte zaplet (nesporazumi, varke, prerušavanja). Tradicija commedia dell'arte i Plautusa. Moliere kombinira s komedijom karaktera.</div></div>
      <div class="pojm" data-cat="drama" data-kw="aleksandrinac 12 slogova klasicizam"><span class="pojm-cat">drama</span><div class="pojm-word">Aleksandrinac</div><div class="pojm-def">Stih od 12 slogova s cezurom (pauzom) u sredini (6+6). Standardni stih klasicističke tragedije (Racine, Corneille). Rimovan u parovima (AABBCC). Strog i svečan.</div></div>
      <div class="pojm" data-cat="drama" data-kw="quiproquo nesporazum dvostruko"><span class="pojm-cat">drama</span><div class="pojm-word">Quiproquo</div><div class="pojm-def">Komička tehnika — dvije osobe govore o različitim stvarima vjerujući da govore o istoj. Najpoznatiji primjer: scena V/3 u Škrcu (Valere o Élise / Harpagon o škrinjici).</div></div>
      <div class="pojm" data-cat="drama" data-kw="anagnorisis prepoznavanje antika"><span class="pojm-cat">drama</span><div class="pojm-word">Anagnorisis</div><div class="pojm-def">„Prepoznavanje” — antička dramska tehnika u kojoj likovi otkrivaju pravi identitet. Aristotel ju spominje u Poetici. Moliere koristi: Anselme se otkriva kao otac Valerea i Mariane.</div></div>
      <div class="pojm" data-cat="drama" data-kw="tip lika karikatura mana"><span class="pojm-cat">drama</span><div class="pojm-word">Tip lika</div><div class="pojm-def">Lik s jednom dominantnom karakteristikom, jednodimenzionalan. Bez psihološkog razvoja. Suprotan psihološkom liku Shakespearea (Hamlet) — klasicistički princip svjesne apstrakcije.</div></div>

      <div class="pojm" data-cat="lirika" data-kw="vanitas prolaznost barok"><span class="pojm-cat">lirika</span><div class="pojm-word">Vanitas</div><div class="pojm-def">Latinski „taština, prolaznost”. Barokna tema — sve je prolazno, ništa svjetovno nije vječno. Iz Knjige propovjednika: <em>vanitas vanitatum</em>.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="memento mori smrt sjeti"><span class="pojm-cat">lirika</span><div class="pojm-word">Memento mori</div><div class="pojm-def">„Sjeti se da ćeš umrijeti.” Barokni motiv — prikaz smrti, lubanje, pijesak u satu. Cilj: opomena na prolaznost, poticaj na duhovnu pripravu.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="metafizicka poezija donne"><span class="pojm-cat">lirika</span><div class="pojm-word">Metafizička poezija</div><div class="pojm-def">Engleska barokna lirika 17. st. (John Donne, George Herbert). Intelektualne metafore („concetti”), spoj učenosti i emocije. Tema ljubavi, smrti, vjere.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="conceit koncept barok metafora"><span class="pojm-cat">lirika</span><div class="pojm-word">Conceit (koncept)</div><div class="pojm-def">Razrađena, šokantna metafora u baroknoj/metafizičkoj poeziji. Spaja vrlo različite stvari (npr. ljubavnici i geometrijski šestar kod Donnea). Intelektualan, ne emocionalan učinak.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="gongorism gongora španjolski"><span class="pojm-cat">lirika</span><div class="pojm-word">Gongorism</div><div class="pojm-def">Stilski pravac Luisa de Góngore — ekstremno zasićena metaforika, tamne aluzije, učeni jezik. Španjolski barok. Antiteza klasicističke jasnoće.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="marinizam marino italija"><span class="pojm-cat">lirika</span><div class="pojm-word">Marinizam</div><div class="pojm-def">Stilski pravac Giambattiste Marina — talijanski ekvivalent gongorisma. Bujne metafore, hiperbole, neočekivane usporedbe. Utjecaj na cijeli europski barok.</div></div>

      <div class="pojm" data-cat="skrtac" data-kw="harpagon škrtac moliere"><span class="pojm-cat">škrtac</span><div class="pojm-word">Harpagon</div><div class="pojm-def">Glavni lik Škrtca. 60-godišnji bogati pariški građanin-lihvar. Patološki škrt — štedi na hrani djece, sumnja u sve. Tip lika u klasicističkoj komediji karaktera. Ime uđe u jezik kao sinonim za škrtca.</div></div>
      <div class="pojm" data-cat="skrtac" data-kw="cleante sin pobunjenik"><span class="pojm-cat">škrtac</span><div class="pojm-word">Cléante</div><div class="pojm-def">Harpagonov sin, antiteza ocu. Voli Marianu — ali otac je hoće za sebe. Spreman pokrasti oca zbog ljubavi. Mladi pobunjenik klasicističke komedije.</div></div>
      <div class="pojm" data-cat="skrtac" data-kw="frosine svodnica posrednica"><span class="pojm-cat">škrtac</span><div class="pojm-word">Frosine</div><div class="pojm-def">Spletkaarica i posrednica u Škrcu. Lažno hvali Harpagonu Marianu, Mariani Harpagona. Cilj — izvući novčanu nagradu od Harpagona. Ne uspijeva (škrtac nikad ništa ne daje).</div></div>
      <div class="pojm" data-cat="skrtac" data-kw="anselme don thomas alburcy plemic"><span class="pojm-cat">škrtac</span><div class="pojm-word">Anselme</div><div class="pojm-def">Stari plemić koji je zatražio ruku Élise. Razuman, ne želi prisilu. Otkriva se kao <em>Don Thomas d'Alburcy</em>, napuljski plemić — Valereov i Marianin izgubljeni otac. Klasična anagnorisis.</div></div>
      <div class="pojm" data-cat="skrtac" data-kw="aulularia plautus lončić izvor"><span class="pojm-cat">škrtac</span><div class="pojm-word">Plautova Aulularia</div><div class="pojm-def">Antička latinska komedija (2. st. pr. Kr.) — „Komedija o lončiću”. Starac Euklion pronalazi lončić zlata i luduje od straha za njega. <strong>Glavni izvor Moliereova Škrtca.</strong></div></div>
      <div class="pojm" data-cat="skrtac" data-kw="lihvar kamata kapitalizam"><span class="pojm-cat">škrtac</span><div class="pojm-word">Lihvar</div><div class="pojm-def">Onaj tko posuđuje novac uz visoke kamate. Crkva u 17. st. osuđuje lihvarstvo kao grijeh. Harpagon je lihvar — ne samo škrt, nego se bogati na tuđoj nesreći.</div></div>

      <div class="pojm" data-cat="autori" data-kw="moliere jean baptiste poquelin"><span class="pojm-cat">autori</span><div class="pojm-word">Moliere</div><div class="pojm-def">Jean-Baptiste Poquelin (1622.–1673.). Francuski komediograf, glumac, redatelj. Vodio Troupe du Roi. 33 komedije. Umro na pozornici glumeći u Umišljenom bolesniku.</div></div>
      <div class="pojm" data-cat="autori" data-kw="racine fedra klasicistička tragedija"><span class="pojm-cat">autori</span><div class="pojm-word">Jean Racine</div><div class="pojm-def">Francuski klasicistički tragički pisac (1639.–1699.). Najpoznatije djelo: <em>Fedra</em> (1677.). Psihološka dubina, prikaz patološke strasti. Strogo poštuje 3 jedinstva.</div></div>
      <div class="pojm" data-cat="autori" data-kw="corneille cid francuska tragedija"><span class="pojm-cat">autori</span><div class="pojm-word">Pierre Corneille</div><div class="pojm-def">Otac francuske klasicističke tragedije (1606.–1684.). Najpoznatije djelo: <em>Cid</em> (1636.). Cornelleovski sukob: dužnost vs ljubav. Aleksandrinac.</div></div>
      <div class="pojm" data-cat="autori" data-kw="milton izgubljeni raj engleski barok"><span class="pojm-cat">autori</span><div class="pojm-word">John Milton</div><div class="pojm-def">Engleski barokni pjesnik (1608.–1674.). Najpoznatije djelo: <em>Paradise Lost</em> / <em>Izgubljeni raj</em> (1667.) — ep u 12 knjiga, blank verse. Sotona kao kompleksan tragički heroj.</div></div>
      <div class="pojm" data-cat="autori" data-kw="calderón de la barca zivot je san spanjolski barok"><span class="pojm-cat">autori</span><div class="pojm-word">Pedro Calderón de la Barca</div><div class="pojm-def">(1600.–1681.) <b>Najveći španjolski barokni dramatičar</b>, posljednji velikan <em>Siglo de Oro</em>. Napisao ~120 drama i ~80 autos sacramentales. Glavno djelo: <em>Život je san</em> (1635., <b>ispitno djelo 2026</b>). S njegovom smrću završava španjolsko Zlatno doba.</div></div>
      <div class="pojm" data-cat="autori" data-kw="donne metafizicka poezija engleska"><span class="pojm-cat">autori</span><div class="pojm-word">John Donne</div><div class="pojm-def">Engleski metafizički pjesnik (1572.–1631.). Intelektualne ljubavne meditacije. Poznata sentenca: „Nijedan čovjek nije otok.” Iz njegovog citata Hemingway uzeo naslov.</div></div>

      <div class="pojm" data-cat="stil" data-kw="hiperbola pretjerivanje barok"><span class="pojm-cat">stil</span><div class="pojm-word">Hiperbola (barokna)</div><div class="pojm-def">Stilsko pretjerivanje. U baroku ekstremno: „suze poput rijeka”, „bol veća od oceana”. Pojačava patetiku i emocionalni intenzitet — temelj baroknog stila.</div></div>
      <div class="pojm" data-cat="stil" data-kw="antiteza barokna oprost suprotnost"><span class="pojm-cat">stil</span><div class="pojm-word">Antiteza (barokna)</div><div class="pojm-def">Suprotstavljanje pojmova: „život i smrt”, „svjetlo i tama”, „svjetovno i vječno”. U baroku služi kontemplaciji prolaznosti i dvojnosti svijeta.</div></div>
      <div class="pojm" data-cat="stil" data-kw="alegorija barokna sigismund život"><span class="pojm-cat">stil</span><div class="pojm-word">Alegorija (barokna)</div><div class="pojm-def">Postupak gdje konkretno predstavlja apstraktno. Calderónov Sigismund = svaki čovjek; kula = svjetski život; san = naša percepcija stvarnosti. Bogat u baroku.</div></div>
      <div class="pojm" data-cat="stil" data-kw="sententia maksima moralna izreka"><span class="pojm-cat">stil</span><div class="pojm-word">Sententia (sentencija)</div><div class="pojm-def">Kratka moralna izreka, maksima. U klasicizmu omiljena — daje tekstu didaktičku težinu. „Bolje vladati u paklu nego služiti na nebu” (Milton) je sententia.</div></div>
      <div class="pojm" data-cat="stil" data-kw="dvostruko znacenje quiproquo komedija"><span class="pojm-cat">stil</span><div class="pojm-word">Dvostruko značenje</div><div class="pojm-def">Riječ ili rečenica koja se može razumjeti na dva načina. U Škrcu — Valereovo „blago” (Élise vs škrinjica). Temelj quiproquo komike u klasicističke komediji.</div></div>

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

export default function H04PojmovnikTab() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initPojmovnikH04 = bindPojmovnik;
    }
    bindPojmovnik();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(bindPojmovnik, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }} />;
}
