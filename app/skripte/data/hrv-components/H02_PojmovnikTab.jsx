'use client';

import { useEffect } from 'react';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">35 pojmova</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik — teorija književnosti iz srednjeg vijeka</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja neknjiževnog teksta. Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔎 Pretraži pojmove (npr. glagoljica, tercina, trubadur...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="pismo">Pismo</button>
      <button class="pojm-filter" data-cat="hrv">Hrv. pismenost</button>
      <button class="pojm-filter" data-cat="dante">Dante</button>
      <button class="pojm-filter" data-cat="viteski">Viteška knjiz.</button>
      <button class="pojm-filter" data-cat="epoha">Epoha</button>
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

    <div class="pojm-count" id="pojm-count">35 pojmova prikazano</div>

    <div class="pojm-grid" id="pojm-grid">
      <div class="pojm" data-cat="pismo" data-kw="glagoljica slavensko pismo"><span class="pojm-cat">pismo</span><div class="pojm-word">Glagoljica</div><div class="pojm-def">Najstarije slavensko pismo, nastalo u 9. st. Djelo Ćirila i Metoda za prevođenje liturgijskih knjiga.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="obla glagoljica"><span class="pojm-cat">pismo</span><div class="pojm-word">Obla glagoljica</div><div class="pojm-def">Starija, okrugla varijanta glagoljice (9.–11. st.). Slova imaju zaobljene, zračne oblike.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="uglata glagoljica"><span class="pojm-cat">pismo</span><div class="pojm-word">Uglata glagoljica</div><div class="pojm-def">Mlađa, kvadratična varijanta (od 12. st.). Dominantno pismo u Hrvatskoj sve do 19. st.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="ćirilica kliment"><span class="pojm-cat">pismo</span><div class="pojm-word">Ćirilica</div><div class="pojm-def">Slavensko pismo, razvijeno u 10. st. od Klimenta Ohridskog. Zasnovano na grčkom alfabetu.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="bosančica hrvatski brzopis"><span class="pojm-cat">pismo</span><div class="pojm-word">Bosančica</div><div class="pojm-def">Hrvatska i bosanska varijanta ćirilice. Korištena u Bosni, Hercegovini i Dalmaciji. Povelja Kulina bana.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="ćiril metod solun"><span class="pojm-cat">pismo</span><div class="pojm-word">Ćiril i Metod</div><div class="pojm-def">Braća iz Soluna, 9. st. Stvorili glagoljicu i preveli liturgijske tekstove na staroslavenski jezik.</div></div>

      <div class="pojm" data-cat="hrv" data-kw="bašćanska ploča krk"><span class="pojm-cat">hrv</span><div class="pojm-word">Bašćanska ploča</div><div class="pojm-def">Kameni spomenik iz oko 1100., Krk. Pisan prijelaznom glagoljicom. Prvi put spomen „kralj hrvatski”. „Krsni list” hrvatske kulture.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="vinodolski zakonik 1288"><span class="pojm-cat">hrv</span><div class="pojm-word">Vinodolski zakonik</div><div class="pojm-def">Najstariji hrvatski pravni kodeks, 1288. Pisan glagoljicom. Regulira život u 9 općina Vinodola.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="hrvojev misal iluminacija"><span class="pojm-cat">hrv</span><div class="pojm-word">Hrvojev misal</div><div class="pojm-def">Rukopisni glagoljski misal iz oko 1404. za Hrvoja Vukčića Hrvatinića. Najljepše iluminirana hrvatska knjiga srednjeg vijeka.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="glagoljaš svećenik liturgija"><span class="pojm-cat">hrv</span><div class="pojm-word">Glagoljaš</div><div class="pojm-def">Svećenik koji liturgiju služi na staroslavenskom jeziku uz glagoljičke knjige. Specifično hrvatska tradicija.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="plutej pregrada kamena"><span class="pojm-cat">hrv</span><div class="pojm-word">Plutej</div><div class="pojm-def">Kamena pregradna ploča u crkvi koja dijeli oltarski prostor od lađe. Bašćanska ploča je bila lijevi plutej.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="kartular samostan darovnice"><span class="pojm-cat">hrv</span><div class="pojm-word">Kartular</div><div class="pojm-def">Samostanska knjiga darovnica i pravnih zapisa. Branko Fučić drži da je tekst Bašćanske ploče preuzet iz kartulara sv. Lucije.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="benediktinac samostan"><span class="pojm-cat">hrv</span><div class="pojm-word">Benediktinac</div><div class="pojm-def">Redovnik reda sv. Benedikta. Ovaj red čuvao je pismenost i prepisivao knjige u srednjem vijeku. Crkva sv. Lucije bila je benediktinska.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="povelja kulina bana 1189"><span class="pojm-cat">hrv</span><div class="pojm-word">Povelja Kulina bana</div><div class="pojm-def">Trgovački ugovor s Dubrovnikom, 1189. Najstariji bosansko-hrvatski dokument pisan bosančicom.</div></div>
      <div class="pojm" data-cat="hrv" data-kw="klevetna formula prokletstvo"><span class="pojm-cat">hrv</span><div class="pojm-word">Klevetna formula</div><div class="pojm-def">Tipski element srednjovjekovnih darovnica — prokletstvo na onoga tko ospori zapis. Bašćanska ploča: „klni j Bog…”</div></div>

      <div class="pojm" data-cat="dante" data-kw="božanstvena komedija dante"><span class="pojm-cat">dante</span><div class="pojm-word">Božanstvena komedija</div><div class="pojm-def">Danteovo životno djelo (1307.–1321.). 100 pjevanja u tri cantica: Pakao, Čistilište, Raj. Pisano tercinama na talijanskom.</div></div>
      <div class="pojm" data-cat="dante" data-kw="tercina terza rima"><span class="pojm-cat">dante</span><div class="pojm-word">Tercina</div><div class="pojm-def">Strofa od tri stiha s rimom ABA BCB CDC (terza rima). Danteov izum, 11-slog.</div></div>
      <div class="pojm" data-cat="dante" data-kw="inferno pakao"><span class="pojm-cat">dante</span><div class="pojm-word">Inferno</div><div class="pojm-def">„Pakao” — prva cantica Božanstvene komedije, 34 pjevanja. 9 krugova grijeha, Lucifer na dnu.</div></div>
      <div class="pojm" data-cat="dante" data-kw="purgatorio čistilište"><span class="pojm-cat">dante</span><div class="pojm-word">Purgatorio</div><div class="pojm-def">„Čistilište” — druga cantica, 33 pjevanja. Brdo s 7 terasa (7 smrtnih grijeha). Duše se čiste za Raj.</div></div>
      <div class="pojm" data-cat="dante" data-kw="paradiso raj"><span class="pojm-cat">dante</span><div class="pojm-word">Paradiso</div><div class="pojm-def">„Raj” — treća cantica, 33 pjevanja. 9 nebeskih sfera do Empireuma (prebivališta Boga).</div></div>
      <div class="pojm" data-cat="dante" data-kw="beatrice vodič"><span class="pojm-cat">dante</span><div class="pojm-word">Beatrice</div><div class="pojm-def">Danteova voljena (Beatrice Portinari). U Božanstvenoj komediji — vodič kroz Raj, alegorija božanske milosti.</div></div>
      <div class="pojm" data-cat="dante" data-kw="volgare narodni jezik"><span class="pojm-cat">dante</span><div class="pojm-word">Volgare</div><div class="pojm-def">„Narodni jezik” — talijanski nasuprot latinskom. Dante je prvi veliki autor koji piše djelo o teologiji i filozofiji na volgare.</div></div>

      <div class="pojm" data-cat="viteski" data-kw="viteški roman ep"><span class="pojm-cat">viteški</span><div class="pojm-word">Viteški roman</div><div class="pojm-def">Pripovjedno djelo o junaštvu vitezova, vjernosti kralju, ljubavi prema dami. Primjeri: Pjesma o Rolandu, Cidu, Nibelunzima.</div></div>
      <div class="pojm" data-cat="viteski" data-kw="chanson de geste francuska"><span class="pojm-cat">viteški</span><div class="pojm-word">Chanson de geste</div><div class="pojm-def">„Pjesma junačkih djela” — francuski srednjovjekovni ep. Najpoznatiji: Pjesma o Rolandu (oko 1100.).</div></div>
      <div class="pojm" data-cat="viteski" data-kw="trubadur provansa"><span class="pojm-cat">viteški</span><div class="pojm-word">Trubadur</div><div class="pojm-def">Pjesnik-izvođač iz južne Francuske (Provansa), 11.–13. st. Pjevaju o kurtoaznoj ljubavi, na provansalskom jeziku.</div></div>
      <div class="pojm" data-cat="viteski" data-kw="minnesinger njemačka walther"><span class="pojm-cat">viteški</span><div class="pojm-word">Minnesinger</div><div class="pojm-def">Njemački ekvivalent trubadura. Od Minne = plemenita ljubav. Walther von der Vogelweide najpoznatiji.</div></div>
      <div class="pojm" data-cat="viteski" data-kw="kurtoazna ljubav dama"><span class="pojm-cat">viteški</span><div class="pojm-word">Kurtoazna ljubav</div><div class="pojm-def">Idealizirana, neuzvraćena ljubav prema nedostupnoj dami. Pjevač je ponizni sluga, dama plemenita i daleka.</div></div>
      <div class="pojm" data-cat="viteski" data-kw="bestijarij životinje simboli"><span class="pojm-cat">viteški</span><div class="pojm-word">Bestijarij</div><div class="pojm-def">Srednjovjekovni zbornik o životinjama. Svaka životinja ima kršćanski simbolički značaj (jednorog = Krist).</div></div>
      <div class="pojm" data-cat="viteski" data-kw="hagiografija životopis sveci"><span class="pojm-cat">viteški</span><div class="pojm-word">Hagiografija</div><div class="pojm-def">Životopis sveca. Popularan srednjovjekovni žanr. Obično slijedi obrazac: rođenje, obraćenje, čuda, mučeništvo.</div></div>
      <div class="pojm" data-cat="viteski" data-kw="mirakul miracle čudo"><span class="pojm-cat">viteški</span><div class="pojm-word">Mirakul</div><div class="pojm-def">Srednjovjekovna dramska vrsta — igra o čudima svetaca ili Marije.</div></div>

      <div class="pojm" data-cat="epoha" data-kw="feudalizam vazal kralj"><span class="pojm-cat">epoha</span><div class="pojm-word">Feudalizam</div><div class="pojm-def">Društveni sustav srednjeg vijeka: kralj daje feud (zemlju) vazalu u zamjenu za vojnu službu. Ispod — kmetovi.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="teocentrizam bog srednji vijek"><span class="pojm-cat">epoha</span><div class="pojm-word">Teocentrizam</div><div class="pojm-def">„Bog u središtu” — pogled na svijet srednjeg vijeka. Ovozemaljski život kao priprema za vječni.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="skolastika akvinski teologija"><span class="pojm-cat">epoha</span><div class="pojm-word">Skolastika</div><div class="pojm-def">Srednjovjekovna filozofija i teologija, 13. st. Spaja Aristotelov razum s kršćanskom vjerom. Vrhunac: Toma Akvinski.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="humanizam petrarca čovjek"><span class="pojm-cat">epoha</span><div class="pojm-word">Humanizam</div><div class="pojm-def">Kulturni pokret (14.–16. st.) koji u središte vraća čovjeka i antičke autore. Otac: Petrarca. Preteča renesanse.</div></div>
      <div class="pojm" data-cat="epoha" data-kw="tre corone dante petrarca boccaccio"><span class="pojm-cat">epoha</span><div class="pojm-word">Tre corone</div><div class="pojm-def">„Tri krune” talijanske književnosti: Dante, Petrarca, Boccaccio. Utemeljuju talijanski književni jezik (firentinski).</div></div>

      <div class="pojm" data-cat="stil" data-kw="alegorija skriveno značenje"><span class="pojm-cat">stil</span><div class="pojm-word">Alegorija</div><div class="pojm-def">Priča u kojoj likovi i događaji imaju skriveno duhovno značenje. Srednjovjekovni način mišljenja. Dante: putovanje = duhovni put.</div></div>
      <div class="pojm" data-cat="stil" data-kw="iluminacija rukopis minijatura"><span class="pojm-cat">stil</span><div class="pojm-word">Iluminacija</div><div class="pojm-def">Umjetničko ukrašavanje rukopisa — inicijali, minijature, ornamenti. Hrvojev misal je vrhunac hrvatske iluminacije.</div></div>
      <div class="pojm" data-cat="stil" data-kw="memento mori smrt"><span class="pojm-cat">stil</span><div class="pojm-word">Memento mori</div><div class="pojm-def">„Sjeti se smrti” — srednjovjekovni motiv. Podsjetnik na prolaznost. Redovnici su imali ovu frazu pred očima.</div></div>

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

export default function H02PojmovnikTab() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.initPojmovnikH02 = bindPojmovnik;
    }
    bindPojmovnik();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(bindPojmovnik, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_HTML }} />;
}
