'use client';

import { useEffect } from 'react';
import { AccordionPojmoviAntika, SVGTragedija } from './H01_Components';

const POJMOVNIK_HTML = `    <div class="tags">
      <span class="pill p-br">35 pojmova</span>
      <span class="pill p-go">teorija knjiž.</span>
      <span class="pill p-r">12 bodova</span>
    </div>

    <div class="box-int">
      <div class="box-int-lbl">💡 Pojmovnik — teorija književnosti iz antike</div>
      <div class="box-int-txt">
        Visoka vjerojatnost pojavljivanja u <strong>12 bodova teorije i povijesti književnosti</strong> te u zadacima čitanja književnog teksta. Pretraži po riječi ili kategoriji.
      </div>
    </div>

    <!-- H01_POJMOVNIK_REACT_COMPONENTS -->

    <!-- SEARCH -->
    <div style="margin:16px 0 22px">
      <label for="pojm-search" class="sr-only">Pretraži pojmove</label>
      <input type="text" id="pojm-search" aria-label="Pretraži pojmove" placeholder="🔎 Pretraži pojmove (npr. hybris, heksametar, parabola...)" style="width:100%;padding:14px 18px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);color:var(--t1);font-family:var(--serif);font-size:14.5px;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='var(--bd-br)'" onblur="this.style.borderColor='var(--bdm)'">
    </div>

    <!-- CATEGORY FILTERS -->
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:18px" id="pojm-filters">
      <button class="pojm-filter on" data-cat="all">Sve</button>
      <button class="pojm-filter" data-cat="ep">Ep</button>
      <button class="pojm-filter" data-cat="drama">Drama</button>
      <button class="pojm-filter" data-cat="lirika">Lirika</button>
      <button class="pojm-filter" data-cat="biblija">Biblija</button>
      <button class="pojm-filter" data-cat="stil">Stil</button>
      <button class="pojm-filter" data-cat="pismo">Pismo</button>
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
      <div class="pojm" data-cat="ep" data-kw="ep epopeja"><span class="pojm-cat">ep</span><div class="pojm-word">Ep</div><div class="pojm-def">Duga pripovjedna pjesma u stihu o junacima i važnim događajima. Najstariji: Ep o Gilgamešu.</div></div>
      <div class="pojm" data-cat="ep" data-kw="epopeja"><span class="pojm-cat">ep</span><div class="pojm-word">Epopeja</div><div class="pojm-def">Sinonim za ep — veliko pripovjedno djelo u stihu.</div></div>
      <div class="pojm" data-cat="ep" data-kw="heksametar stih"><span class="pojm-cat">ep</span><div class="pojm-word">Heksametar</div><div class="pojm-def">Stih od šest stopa. Standard antičke epike — Homer, Vergilije.</div></div>
      <div class="pojm" data-cat="ep" data-kw="invokacija muza"><span class="pojm-cat">ep</span><div class="pojm-word">Invokacija</div><div class="pojm-def">Zaziv muze na početku epa. „Srdžbu mi, boginjo, pjevaj…"</div></div>
      <div class="pojm" data-cat="ep" data-kw="epiteton epitet ornans"><span class="pojm-cat">ep</span><div class="pojm-word">Epiteton ornans</div><div class="pojm-def">Ukrasni, ustaljeni pridjev uz imenicu: „brzonogi Ahilej", „sivooki Atena".</div></div>
      <div class="pojm" data-cat="stil" data-kw="in medias res"><span class="pojm-cat">stil</span><div class="pojm-word">In medias res</div><div class="pojm-def">„Usred stvari" — radnja počinje u središtu, prethodno dolazi kao flashback.</div></div>
      <div class="pojm" data-cat="drama" data-kw="tragedija"><span class="pojm-cat">drama</span><div class="pojm-word">Tragedija</div><div class="pojm-def">Dramska vrsta — pad junaka visokog staleža zbog sudbine ili vlastite greške.</div></div>
      <div class="pojm" data-cat="drama" data-kw="katarza proces pročišćenje"><span class="pojm-cat">drama</span><div class="pojm-word">Katarza</div><div class="pojm-def">Pročišćenje koje publika doživljava gledajući tragediju. Aristotelov pojam.</div></div>
      <div class="pojm" data-cat="drama" data-kw="hybris oholost"><span class="pojm-cat">drama</span><div class="pojm-word">Hybris</div><div class="pojm-def">Bahata oholost, prekoračenje granica. Glavni uzrok tragičkog pada.</div></div>
      <div class="pojm" data-cat="drama" data-kw="hamartia greška"><span class="pojm-cat">drama</span><div class="pojm-word">Hamartia</div><div class="pojm-def">Tragička krivnja/greška. Junak pada zbog vlastite pogreške, ne slučajnosti.</div></div>
      <div class="pojm" data-cat="drama" data-kw="peripetija obrat"><span class="pojm-cat">drama</span><div class="pojm-word">Peripetija</div><div class="pojm-def">Nagli obrat u radnji — od sreće u nesreću ili obrnuto.</div></div>
      <div class="pojm" data-cat="drama" data-kw="anagnorizis prepoznavanje"><span class="pojm-cat">drama</span><div class="pojm-word">Anagnorizis</div><div class="pojm-def">Prepoznavanje, otkriće istine. Često vezano uz peripetiju.</div></div>
      <div class="pojm" data-cat="drama" data-kw="deus ex machina"><span class="pojm-cat">drama</span><div class="pojm-word">Deus ex machina</div><div class="pojm-def">„Bog iz stroja" — rješenje silom izvana. Kritiziran kao slabost drame.</div></div>
      <div class="pojm" data-cat="drama" data-kw="kor zbor"><span class="pojm-cat">drama</span><div class="pojm-word">Kor (zbor)</div><div class="pojm-def">Kolektivni glas u tragediji — komentira radnju, savjetuje, moralizira.</div></div>
      <div class="pojm" data-cat="drama" data-kw="prolog uvod"><span class="pojm-cat">drama</span><div class="pojm-word">Prolog</div><div class="pojm-def">Uvodni dio tragedije, prije ulaska zbora.</div></div>
      <div class="pojm" data-cat="drama" data-kw="parodos zbor"><span class="pojm-cat">drama</span><div class="pojm-word">Parodos</div><div class="pojm-def">Prvi ulazak zbora na scenu nakon prologa.</div></div>
      <div class="pojm" data-cat="drama" data-kw="stasimon pjesma zbor"><span class="pojm-cat">drama</span><div class="pojm-word">Stasimon</div><div class="pojm-def">Pjesma zbora između epizoda.</div></div>
      <div class="pojm" data-cat="drama" data-kw="eksodos izlazak"><span class="pojm-cat">drama</span><div class="pojm-word">Eksodos</div><div class="pojm-def">Završni dio tragedije — izlazak zbora.</div></div>
      <div class="pojm" data-cat="drama" data-kw="komedija aristofan"><span class="pojm-cat">drama</span><div class="pojm-word">Komedija</div><div class="pojm-def">Dramska vrsta koja završava sretno, ismijava ljudske mane. Aristofan.</div></div>
      <div class="pojm" data-cat="drama" data-kw="mimesis oponašanje"><span class="pojm-cat">drama</span><div class="pojm-word">Mimesis</div><div class="pojm-def">Oponašanje stvarnosti. Aristotelov pojam — književnost oponaša život.</div></div>
      <div class="pojm" data-cat="drama" data-kw="poetika aristotel"><span class="pojm-cat">drama</span><div class="pojm-word">Poetika</div><div class="pojm-def">Aristotelovo djelo o teoriji književnosti — najutjecajniji tekst o drami ikad.</div></div>
      <div class="pojm" data-cat="drama" data-kw="tri jedinstva"><span class="pojm-cat">drama</span><div class="pojm-word">Tri jedinstva</div><div class="pojm-def">Jedinstvo radnje, vremena (24h) i mjesta. Pravilo klasicističke drame.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="lirika lira"><span class="pojm-cat">lirika</span><div class="pojm-word">Lirika</div><div class="pojm-def">Književna vrsta koja izražava osobne osjećaje. Ime od <em>lire</em> — instrumenta.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="oda svečana"><span class="pojm-cat">lirika</span><div class="pojm-word">Oda</div><div class="pojm-def">Svečana lirska pjesma uzvišenog tona, u čast osobe, događaja ili ideala.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="elegija tužna"><span class="pojm-cat">lirika</span><div class="pojm-word">Elegija</div><div class="pojm-def">Tužna, melankolična lirska pjesma — smrt, rastanak, izgubljena ljubav.</div></div>
      <div class="pojm" data-cat="lirika" data-kw="himna pohvalna"><span class="pojm-cat">lirika</span><div class="pojm-word">Himna</div><div class="pojm-def">Svečana, pohvalna pjesma — obično bogu ili domovini.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="parabola priča"><span class="pojm-cat">biblija</span><div class="pojm-word">Parabola</div><div class="pojm-def">Alegorijska priča s moralnom poukom. Tipično za Novi zavjet.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="psalam religijska"><span class="pojm-cat">biblija</span><div class="pojm-word">Psalam</div><div class="pojm-def">Religijska lirska pjesma. 150 psalama u Starom zavjetu.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="evanđelje evandjelje"><span class="pojm-cat">biblija</span><div class="pojm-word">Evanđelje</div><div class="pojm-def">„Radosna vijest" — četiri knjige o Isusu: Matej, Marko, Luka, Ivan.</div></div>
      <div class="pojm" data-cat="biblija" data-kw="apokalipsa otkrivenje"><span class="pojm-cat">biblija</span><div class="pojm-word">Apokalipsa</div><div class="pojm-def">Proročka proza o kraju svijeta, puna simbola. Zadnja knjiga N. zavjeta.</div></div>
      <div class="pojm" data-cat="stil" data-kw="paralelizam ponavljanje"><span class="pojm-cat">stil</span><div class="pojm-word">Paralelizam</div><div class="pojm-def">Ponavljanje iste misli drugim riječima u susjednim stihovima. Tipično za psalme.</div></div>
      <div class="pojm" data-cat="stil" data-kw="antiteza suprotnost"><span class="pojm-cat">stil</span><div class="pojm-word">Antiteza</div><div class="pojm-def">Suprotstavljanje pojmova: „tko se uzvisi, bit će ponižen".</div></div>
      <div class="pojm" data-cat="pismo" data-kw="klinasto pismo sumer"><span class="pojm-cat">pismo</span><div class="pojm-word">Klinasto pismo</div><div class="pojm-def">Prvo pismo u povijesti, oko 3200. pr. Kr., Mezopotamija.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="hijeroglif egipat"><span class="pojm-cat">pismo</span><div class="pojm-word">Hijeroglif</div><div class="pojm-def">Egipatsko „sveto pismo". Slikovni znakovi + fonetski simboli.</div></div>
      <div class="pojm" data-cat="pismo" data-kw="papirus"><span class="pojm-cat">pismo</span><div class="pojm-word">Papirus</div><div class="pojm-def">Egipatski materijal za pisanje — od biljke papirusa. Preteča papira.</div></div>
    </div>

    <div class="nav-row">
      <span class="nb" onclick="sw(3)">‹ Citatnik</span>
      <span class="nb primary" onclick="sw(5)">⚡ Drill ›</span>
    </div>
`;

const [POJMOVNIK_BEFORE_COMPONENTS, POJMOVNIK_AFTER_COMPONENTS] = POJMOVNIK_HTML.split(
  '    <!-- H01_POJMOVNIK_REACT_COMPONENTS -->\n'
);

export default function H01PojmovnikTab() {
  useEffect(() => {
    const init = () => {
      if (typeof window !== 'undefined' && typeof window.initPojmovnik === 'function') {
        window.initPojmovnik();
      }
    };
    init();
    const timers = [0, 50, 250, 750].map((delay) => window.setTimeout(init, delay));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, []);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_BEFORE_COMPONENTS }} />
      <SVGTragedija />
      <AccordionPojmoviAntika />
      <div dangerouslySetInnerHTML={{ __html: POJMOVNIK_AFTER_COMPONENTS }} />
    </>
  );
}
