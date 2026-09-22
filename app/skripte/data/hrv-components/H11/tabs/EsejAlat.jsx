'use client';
import { useState, useEffect, useCallback } from 'react';

function WordCounter() {
  const [text, setText] = useState(() => {
    try { return localStorage.getItem('mt.hrv.h11.wc_text') || ''; } catch { return ''; }
  });

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const chars = text.length;
  const paras = text.split(/\n\n+/).filter(p => p.trim().length > 10).length;
  const pct = Math.min(100, Math.round(words / 440 * 100));
  const passed = words >= 440;

  const handleChange = (e) => {
    const v = e.target.value;
    setText(v);
    try { localStorage.setItem('mt.hrv.h11.wc_text', v); } catch {}
  };

  const copyText = () => {
    if (!text) return;
    navigator.clipboard?.writeText(text).catch(() => {});
  };

  const clearText = () => {
    if (confirm('Obrisati tekst eseja?')) { setText(''); try { localStorage.removeItem('mt.hrv.h11.wc_text'); } catch {} }
  };

  return (
    <div className="wc-wrap">
      <div className="wc-header">
        <div className="wc-lbl">📝 BROJAČ RIJEČI — ESEJ</div>
        <div className="wc-stats">
          <div className={`wc-stat${words >= 440 ? ' ok' : words > 0 && words < 200 ? ' critical' : ''}`} id="wc-words">
            <span className="wc-stat-num">{words}</span>
            <span className="wc-stat-lbl">RIJEČI</span>
          </div>
          <div className="wc-stat">
            <span className="wc-stat-num">{chars}</span>
            <span className="wc-stat-lbl">ZNAKOVI</span>
          </div>
          <div className="wc-stat">
            <span className="wc-stat-num">{paras}</span>
            <span className="wc-stat-lbl">ODLOMCI</span>
          </div>
          <div className="wc-stat">
            <span className="wc-stat-num">{Math.max(0, Math.round(words / 200))} min</span>
            <span className="wc-stat-lbl">ČITANJE</span>
          </div>
        </div>
      </div>
      <div className="wc-body">
        <textarea
          className="wc-ta"
          placeholder="Ovdje piši esej o Noveli od Stanca... cilj je 440 riječi."
          value={text}
          onChange={handleChange}
        />
        <div className={`wc-prog${passed ? ' pass' : ''}`}>
          <div className="wc-prog-bar" style={{ width: `${pct}%` }} />
        </div>
        <div className="wc-prog-lbl">CILJ 440 · {words} / 440{passed ? ' ✓ Dostignuto!' : ''}</div>
        <div className="wc-actions">
          <button className="wc-btn" onClick={copyText}>⎘ Kopiraj</button>
          <button className="wc-btn" onClick={clearText}>🗑 Obriši</button>
        </div>
      </div>
    </div>
  );
}

export default function EsejAlat({ onTabSwitch }) {
  return (
    <div>
      <div className="tags">
        <span className="pill p-go">★ Novela od Stanca 2026</span>
        <span className="pill p-br">6 teza</span>
        <span className="pill p-r">model uvoda</span>
        <span className="pill p-t">440+ riječi · brojač</span>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">✍ Kako se piše esej o Noveli od Stanca</div>
        <div className="box-int-txt">
          Esej na maturi = <b>min. 440 riječi</b>, <b>uvod-razrada-zaključak</b>, <em>jasna središnja tvrdnja</em>, barem <b>1 citat ili parafraza</b>, barem <b>1 književnoteorijski pojam</b>. Ovdje imaš <b>6 probranih teza</b>, <b>model uvoda i razrade</b>, <b>checklist</b> i <b>brojač riječi</b>.
        </div>
      </div>

      {/* SEC 01 — 6 teza */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">01 · 6 teza za esej o Noveli od Stanca</div><div className="sec-line"></div></div>

      <div className="sc-grid">
        <div className="sc">
          <span className="sc-ico hchip br">TEZA 1</span>
          <div className="sc-name">Pokladni kontekst kao dramski uvjet</div>
          <div className="sc-desc">Novela od Stanca nije moguća bez poklada. <em>Pokladne slobode</em> dopuštaju prevaru i preokret društvenih uloga — u karnevalu je dopušteno ono što inače nije. Bez poklada, zlodjelo mladića ne bi imalo ni dramsku legitimnost ni komičnu olakšicu. <b>Poklade = dramski uvjet + filozofski okvir</b>.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip go">TEZA 2</span>
          <div className="sc-name">Opreka mlado–staro kao os radnje</div>
          <div className="sc-desc">Stanac je žrtva <em>zbog starosti</em> — naivan, pun nade u podmladak, lako prevaren. Mladići pobjeđuju <b>lukavošću</b>, ne fizičkom silom. Renesansa slavi vitalnost i pamet kao vrline — starost bez mudrosti postaje komična. <em>Mlado = pobjeđuje. Staro = gubi.</em> Bez moralne osude — to je farsa.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip t">TEZA 3</span>
          <div className="sc-name">Komentar dubrovačkog društva</div>
          <div className="sc-desc">Dubrovački mladići = vlastela; Stanac = seljak iz Trebinja. <b>Klasna nadmoć</b> iskazuje se kroz intelektualnu prijevaru, ne nasilje. Držić koristi komediju kao <em>ogledalo dubrovačkog društva</em> — kako vlastela zaista gleda na seljaka. Satira bez eksplicitnog suda.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip re">TEZA 4</span>
          <div className="sc-name">Farsa kao žanr — poetika komedije</div>
          <div className="sc-desc">Novela je <b>farsa</b>: kratka (1 čin), likovi su tipovi a ne individue, komika situacijska. Razlikuje se od <em>Dunda Maroja</em> (složenija, psihologiziranija). Žanrovski uzori: talijanska commedia dell&apos;arte, Plaut. <em>Farsa ne zahtijeva moral — zahtijeva smijeh.</em></div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip pa">TEZA 5</span>
          <div className="sc-name">Jezik i stil — dubrovački idiom</div>
          <div className="sc-desc">Novela je pisana <b>dvostruko rimovanim dvanaestercima</b> — standardni stih hrv. renesanse. Jezik je <em>dubrovački idiom</em> 16. st. Stanac govori drukčije od dubrovačkih mladića — jezična razlika prati klasnu. <b>Stil prati karakter</b> — kao kod Marulića gdje čakavski daje ep lokalnu autentičnost.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip gr">TEZA 6</span>
          <div className="sc-name">Voda mladosti — mitski motiv</div>
          <div className="sc-desc">„Voda od mladosti&quot; je renesansni mitski motiv — <em>Fontana della giovinezza</em>. Mladići ga koriste kao instrument prevare, ali Stanac ga prima doslovno. <b>Naivnost vs. sofisticiranost</b>. Motiv otkriva i Stančevu duboku želju za podmlatkom — <em>tragedija unutar komedije</em>: čovjek koji zaista želi biti mlad.</div>
        </div>
      </div>

      {/* SEC 01c — Teze 7-9 za napredni esej */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">01c · Teze 7–9 za napredni esej</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">🎓 Za A ocjenu — složenije interpretacijske teze</div>
        <div className="box-int-txt">
          Ove teze zahtijevaju dublje poznavanje konteksta i žanra. Korisne za napredne učenike koji žele ići iznad standardnih odgovora.
        </div>
      </div>

      <div className="sc-grid">
        <div className="sc">
          <span className="sc-ico hchip br">TEZA 7</span>
          <div className="sc-name">Dramska ironija kao motor komike</div>
          <div className="sc-desc">Publika zna što Stanec ne zna — nema „vode od mladosti&quot;. Taj jaz između publicnog i Stančeva znanja je mehanizam smijeha, ali i mehanizam empatije: <b>smijemo se, ali i žalimo</b>. Teza: Novela od Stanca koristi dramsku ironiju kao etički instrument — smijeh nije samo zabava, on je moralna refleksija.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip go">TEZA 8</span>
          <div className="sc-name">Novela od Stanca kao komentar kapitala</div>
          <div className="sc-desc">Dubrovnik 16. st. je merkantilni grad — novac, trgovina i poslovni um su ključne vrijednosti. Stanec dolazi bez kapitala (ni materijalnog ni socijalnog). Mladići imaju oboje. Teza: <b>Novela od Stanca nije samo komedija — to je ekonomska analiza Dubrovnika u formi farse</b>. Ko ima kapital, pobjeđuje.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip te">TEZA 9</span>
          <div className="sc-name">Farsa i moderno kazalište</div>
          <div className="sc-desc">Farsa 16. st. je preteča modernog teatra apsurda (Beckett, Ionesco) — oboje prikazuju bez osude, oba nemaju jasnu moralnu pouku, oba su komična i tragična istovremeno. Teza: <b>Držić anticipira moderno kazalište 400 godina unaprijed</b> — njegova neuzimljivost prema moralnoj osudi je modernistička crta koja ga razlikuje od suvremenih pisaca.</div>
        </div>
      </div>

      {/* SEC 01b — Teze za esej o Juditi */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">01b · 4 teze za esej o Juditi</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">📖 Kad esejsko pitanje dođe iz Judite</div>
        <div className="box-int-txt">
          Judita nije obvezatno djelo za esej 2026. (<em>esej se piše o: Calderón, Goethe, Krleža, Marinković, Novak, Petrarca</em>), ali može se pojaviti u <strong>pitanjima čitanja ili teorije književnosti</strong>. Ove teze korisne su i za usporedni argument u eseju kad pišeš o Držiću ili Zoraniću.
        </div>
      </div>

      <div className="sc-grid">
        <div className="sc">
          <span className="sc-ico hchip br">TEZA A</span>
          <div className="sc-name">Judita — alegorijska poetika</div>
          <div className="sc-desc">Marulić ne prikazuje suvremenu stvarnost direktno — on je <em>kodira u biblijsku priču</em>. Alegorija kao zaštita (cenzura turskih vlasti) i kao poetski postupak. <b>Argument:</b> alegorija je Marulićev odgovor na nemoć — kad se ne može boriti mačem, bori se perom i simbolom.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip go">TEZA B</span>
          <div className="sc-name">Judita kao heroina i Božje oruđe</div>
          <div className="sc-desc">Judita ne pobjeđuje snagom nego <em>vjernošću i Božjom pomoći</em>. To je kršćanski ideal: slabiji može pobijediti jačeg uz Božju pomoć. <b>Argument:</b> lik Judite je utjelovljenje hrv. nade — ne militar, nego moralna snaga.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip te">TEZA C</span>
          <div className="sc-name">Forma kao poruka — stih i tradicija</div>
          <div className="sc-desc">2126 dvostruko rimovanih dvanaesteraca nije slučajno — Marulić time kaže: <em>nastavljam tradiciju začinjavaca, ali je uzdižem na europsku razinu</em>. <b>Argument:</b> forma nije samo estetika — ona je manifest kontinuiteta i ambicije.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip pa">TEZA D</span>
          <div className="sc-name">Judita u europskom kontekstu</div>
          <div className="sc-desc">Marulić je <em>jedini hrv. pisac poznat u Europi za života</em> — <em>Institucija</em> prevedena na sve europske jezike. <b>Argument:</b> Judita je lokalna; Institucija je europska. Marulić je svjestan obje publike i piše za obje na različitim jezicima.</div>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Uvod eseja o Juditi (model)</div>
        <div className="box-key-txt">
          <em>„Marko Marulić (1450.–1524.), splitski humanist i najpoznatiji hrv. pisac 16. st. u europskim krugovima, u epu <b>Judita</b> (dovršena 1501., tiskana 1521.) daje prvu veliku hrv. književnu alegoriju turske opasnosti. U 6 pjevanja i 2126 dvostruko rimovanih dvanaesteraca na splitskoj čakavštini, Marulić prepriča biblijsku priču o Juditi i Holofernu kao <em>poziv na otpor</em> — Oloferno su Turci, Judita je Hrvatska, Bog Izraelov je kršćanski Bog koji pomaže slabijima. U ovom eseju pokazat ću kako Marulić koristi <b>alegoriju kao poetičko i političko oruđe</b> — istovremeno književni postupak i domoljubni manifest.&quot;</em>
        </div>
      </div>

      {/* SEC 02 — Model uvoda */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02 · Model uvoda eseja</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Primjer uvoda (za Tezu 2 — mlado vs. staro)</div>
        <div className="box-key-txt">
          <em>„Marin Držić (1508.–1567.), dubrovački dramaturg poznat kao <b>„Vidra&quot;</b> i najveći hrv. komediograf, napisao je komediju <b>Novela od Stanca</b> (praizvedena 1550.) kao pokladnu igru — kratku farsu u jednom činu namijenjenoj dubrovačkim karnevalskim svečanostima. U djelu koje se odvija jedne pokladne noći, mladi dubrovački vlastelini nasamare Stanca, starog seljaka iz Trebinja, uvjeravajući ga da ga je voda podmladila. Na taj način Držić postavlja temeljnu dramatsku opreku: <em>mlado vs. staro</em>, vlastela vs. seljak, pamet vs. naivnost. U ovom eseju pokazat ću kako Novela od Stanca nije samo zabavna farsa — nego <b>precizni komentar dubrovačkog društva i pokladnog karnevalskog koda</b> u kojemu je prevara legitimna, a naivnost kažnjiva.&quot;</em>
        </div>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">🎯 Anatomija dobrog uvoda — 5 obaveznih elemenata</div>
        <div className="box-int-txt">
          <b>(1)</b> <em>Autor + datacija + djelo</em> — „Marin Držić (1508.–1567.), <em>Novela od Stanca</em> (praizvedena 1550.)&quot;. <b>(2)</b> <em>Kontekst</em> — pokladna igra, farsa, dubrovačka tradicija. <b>(3)</b> <em>Suženje na temu</em> — „opreka mlado–staro&quot;. <b>(4)</b> <em>Središnja tvrdnja</em> — jedna jasna rečenica s tezom. <b>(5)</b> <em>Najava strukture</em> — „u ovom eseju pokazat ću…&quot;. <b>Ne počinji s općenitostima. Počinji autorom + djelom + tezom.</b>
        </div>
      </div>

      {/* SEC 02b — Esejski modeli za Zoranića i Hektorovića */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02b · Model eseja za Zoranića i Hektorovića</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Uvod eseja o Planinama (model)</div>
        <div className="box-key-txt">
          <em>„Petar Zoranić (~1508.–1569.), zadarski humanist, u djelu <b>Planine</b> (nastale oko 1543., tiskane 1569.) stvara <em>prvi hrv. roman</em> — žanrovski hibrid koji spaja pastoralni roman, putopis, alegoriju i liriku. Protagonist Zoran putuje zadarskim zaleđem kako bi izliječio neuzv. ljubav, ali Zoranić ga iskorištava za nešto veće: kroz epizodu <b>Perivoja od Slave</b>, gdje Hrvatska vila jadikuje nad siromašnim jabukama, Zoranić piše <em>prvi eksplicitni manifest hrv. književnosti</em> — 300 godina prije Preporoda. Pokazat ću kako su <b>ljubavna tematika i domoljubni apel</b> u Planinama nerazdvojivi — osobna bol postaje metafora nacionalne tuge.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Uvod eseja o Ribanju (model)</div>
        <div className="box-key-txt">
          <em>„Petar Hektorović (1487.–1572.), hvarski humanist i graditelj Tvrdalja, u djelu <b>Ribanje i ribarsko prigovaranje</b> (1556.) stvara iznimno djelo hrv. renesanse — trodnevno putovanje od Hvara prema Braču i Šolti koje istovremeno jest ep, putopis, ribarska ekloga i poslanica. Za razliku od Marulića koji transformira stvarnost u alegoriju, Hektorović bilježi stvarnost <em>kakva jest</em> — more je stvarno, ribari su stvarni, bugarštice su stvarne. Pokazat ću kako je <b>Hektorovićev dokumentarni realizam</b> revolucionarna novost u hrv. renesansnoj književnosti i zašto je Ribanje dragocjen kulturnopovijesni dokument koji sačuva hrv. usm. tradiciju.&quot;</em>
        </div>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">🎯 Usporedna teza — Marulić i Zoranić</div>
        <div className="box-int-txt">
          <em>„I Marko Marulić u Juditi i Petar Zoranić u Planinama pišu o turskoj prijetnji i domovini — ali iz potpuno različitih poetičkih pozicija. Marulić kodira apel u biblijsku alegoriju (Oloferno = Turci, Judita = Hrvatska); Zoranić ga iskazuje kroz lirsku tugu i alegoriju književnosti (rasuta bašćina, Perivoj od Slave). Oba su jednako politični pisci — samo različitih sredstava. Marulić poziva na borbu mačem (Božjom pomoći); Zoranić poziva na borbu perom (gradnjom hrv. književnosti).&quot;</em>
        </div>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">🎯 Usporedna teza — Hektorović i Marulić</div>
        <div className="box-int-txt">
          <em>„Dok Marulić u Juditi transformira stvarnost u alegoriju, Hektorović u Ribanju odbija alegoriju i prikazuje stvarnost neposredno. Ova razlika nije slučajna — to su dvije legitimne humanističke poetike. Marulić je „učeni humanist&quot; koji piše za obrazovanu publiku koja čita simbole; Hektorović je „praktični humanist&quot; koji piše za prijatelja Bartučevića i bilježi ono što vidi i čuje. Oba su jednako vrijedno — Judita je kulturni monument, Ribanje je kulturni arhiv.&quot;</em>
        </div>
      </div>

      {/* SEC 02c — Puni model eseja Teza 2 */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02c · Puni model eseja — Teza 2</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Uvod (Teza 2 — mlado vs. staro)</div>
        <div className="box-key-txt">
          <em>„Marin Držić (1508.–1567.), najznačajniji hrv. renesansni dramatičar, u farsi <b>Novela od Stanca</b> (praizvedena 1550.) postavlja jedan od vječnih dramskih sukoba — <b>sudar mladosti i starosti</b>. Stanec, stari seljak iz Trebinja, dolazi u Dubrovnik obilježen tugom i naivnošću; dubrovački mladići — vlastela — dolaze s lukavošću i energijom. Njihov susret u pokladnoj noći nije slučajan — on je dramska slika jednog zakona: u Dubrovniku 16. st., kao i posvuda, <em>pobjeda pripada onima koji znaju pravila igre</em>. U ovom eseju pokazat ću kako Držić koristi opreku mlado–staro kao okvir za širu društvenu sliku.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Razrada — Odlomak 1 (Stanac kao tip)</div>
        <div className="box-key-txt">
          <em>„Stanec nije individualizirani lik s psihološkom dubinom — on je <b>tip „naivnog seljaka&quot;</b> iz kazališne tradicije commedia dell&apos;arte. To što ga ne poznajemo dublje nije Držićev propust — to je žanrovski zahtjev farse. Stanec funkcionira kao nosač opreke: sve što je staro, naivno, ruralno i neiskusno. <b>Njegova tuga za pokojnom ženom na početku</b> jedini je humanizujući detalj — i upravo on objašnjava zašto tako lako prihvaća mit o „vodi od mladosti&quot;. Čovjek koji je izgubio svoju ženu i koji stari bez nje — on <em>zaista želi</em> biti mlad. Farsa iskorištava tu čovjekovu slabost bez grižnje savjesti.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Razrada — Odlomak 2 (Mladići kao tip)</div>
        <div className="box-key-txt">
          <em>„Nasuprot Stancu, dubrovački mladići — Vlaho, Miho i Dživo — predstavljaju sve što Stanec nije: mladi su, urbani, obrazovani, lukavi. Ali ni oni nisu individualizirani — to su tipovi „lukave vlastele&quot;. Njihova prevara nije spontana zlonamjerna odluka; to je <b>karnevalska igra</b> koja u pokladno doba postaje legitimna. Važan je detalj: <em>kada odlaze, odlaze u toplinu svojih domova</em> — Stanec ostaje svežan na trgu. Taj kontrast Držić ne komentira; on ga samo prikazuje. I u toj šutnji leži sva oštrost <b>društvene kritike bez moralne pouke</b>.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Zaključak</div>
        <div className="box-key-txt">
          <em>„Novela od Stanca nije priča o dobrima i zlima — to je priča o tome kako <b>zakoni društva funkcioniraju bez moralne korekture</b>. Mladi pobjeđuju jer posjeduju ono što stari gube: energiju, znanje, pristup. Stanec gubi jer je stranac u gradu koji ne prašta naivnost. Marin Držić ne osuđuje ni jedne ni druge — on nam prikazuje igru i govori: <em>evo kako to ide</em>. Za razliku od Marulića koji u Juditi eksplicitno poziva na otpor i vjeru, ili Zoranića koji u Planinama tuguje za rasutom bašćinom, Držić se samo smije — ali taj smijeh, pažljivo osluškivan, boli.&quot;</em>
        </div>
      </div>

      {/* SEC 02d — Puni model eseja Zoranić */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02d · Puni model eseja — Zoranić (ako dođe)</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Uvod (Teza: Planine kao književni manifest)</div>
        <div className="box-key-txt">
          <em>„Petar Zoranić (~1508.–1569.), zadarski humanist, u žanrovski hibridnom djelu <b>Planine</b> (nastale oko 1543., tiskane 1569.) postiže nešto što nitko prije njega nije pokušao u hrv. književnosti: piše <em>manifest za gradnju nacionalne književne tradicije</em>. Kroz alegoriju <b>Perivoja od Slave</b>, gdje Hrvatska vila jadikuje nad siromašnim jabukama, Zoranić govori neposredno i rezolutno — <em>hrv. književnost kasni za Europom i to mora biti promijenjeno</em>. U ovom eseju pokazat ću kako Zoranić u Planinama spaja <b>osobnu melankoliju, patriotski apel i književnopovijesnu refleksiju</b> u djelo koje anticipira Ilirski preporod za 300 godina.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Razrada — Perivoj od Slave kao ključna epizoda</div>
        <div className="box-key-txt">
          <em>„Ključna epizoda Planina je <b>Perivoj od Slave</b> — alegorijski vrt u kojemu četiri vile čuvaju jabučnjake koji simboliziraju nacionalne književnosti. Latina, Grkinja i Kaldejka imaju bujne, lijepe jabuke; Hrvatska vila stoji <em>sramežljivo i tužno</em> s najmalobrojnijim i najlošijim voćem. Ovaj prizor nije dekorativna alegorija — to je <b>književna dijagnoza</b> Zoranićeva doba: hrv. pisci pišu latinskim, zanemaruju vlastiti jezik, nema sustavne kulturne politike. Zoranić ne samo da opisuje problem — on poziva na buđenje. <em>Taj poziv dolazi 1543., puna tri vijeka prije Ilirskog preporoda.</em>&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Razrada — Rasuta bašćina i ljubavni gubitak</div>
        <div className="box-key-txt">
          <em>„Uz književni manifest, Planine nose i drugi bol: <b>rasuta bašćina</b> — rascjepkana domovina pod turskom prijetnjom. Zoranova ljubavna melankolija (ne može oženiti Jagu) i patriotska tuga (ne može zaštititi domovinu) imaju isti emocionalni patos — oboje su gubitci nad kojima nemamo moć. Ova <em>paralela privatnog i javnog bola</em> nije slučajna: Zoranić govori da je osobna nemoć odraz nacionalne nemoći. Time Planine postaju <b>i ljubavni roman i politički esej</b> — žanrovski hibrid koji je jedino mogući odgovor na složenu stvarnost 16. st. Dalmacije.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Zaključak</div>
        <div className="box-key-txt">
          <em>„Zoranić nije Marulić — ne poziva na oružje niti slavi junaštvo. On tuguje, svjedoči i poziva na budnost. U Planinama je ljubavna tuga samo metafora šire tuge: za domovinom koja se raspada i za književnošću koja zaostaje za Europom. <b>Perivoj od Slave nije samo lijepa alegorija — to je najhrabrija rečenica hrv. renesanse</b>: priznati da zaostajemo i reći: mora biti bolje. To je gesta koja hrv. renesansnu književnost čini aktualnom čak i danas — kad god nacija prepozna vlastitu zaostalost, ona u Zoraniću prepoznaje prvog koji je to glasno rekao.&quot;</em>
        </div>
      </div>

      {/* SEC 02e — Model eseja Hektorović */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02e · Model eseja — Hektorović i demokratizacija humanizma</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Teza + model argumenta</div>
        <div className="box-key-txt">
          <b>Teza:</b> <em>„Hektorovićevo Ribanje nije idila — to je humanistički program u ribarskoj odori: demokratizacija spoznaje, arhiviranje kulture i proslava slobodnog razgovora kao najviše vrijednosti.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Model argumenta (TIPS)</div>
        <div className="box-key-txt">
          <b>T:</b> <em>„Hektorović u Ribanju demokratizira humanistički ideal — pokazuje da mudrost nije privilegija školovane vlastele.&quot;</em><br />
          <b>I:</b> <em>„Ribari Nikola Zet i Paskoje Debeli pjevaju bugarštice koje Hektorović vjerno bilježi — oni nisu obiekt njegova promatranja, oni su <em>njegovi sugovornici</em>.&quot;</em><br />
          <b>P:</b> <em>„Hektorović ne samo da sluša ribare — on ih smatra čuvarima kulturnog blaga koje Marulić i Zoranić, s latinskom i talijanskom naobrazbom, ne bi ni prepoznali kao vrijednost.&quot;</em><br />
          <b>S:</b> <em>„Time Ribanje postaje više od putopisa — to je <b>manifest pluralizma humanizma</b>: i latinski ep i narodna bugarštica su jednako vrijedni dokumenti jedne civilizacije.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Zaključak</div>
        <div className="box-key-txt">
          <em>„Hektorović ostaje usamljen u hrv. renesansi — nema izravnih nastavljača koji bi preuzeli njegov dokumentarni realizam. Ali <b>posredno utječe na sve buduće bilježitelje hrv. usmene tradicije</b> — od Kaćića Miošića (18. st.) do Vuka Stefanovića Karadžića (19. st.) koji romantičarski sakuplja narodne pjesme. Hektorović je napravio to 300 godina ranije, bez teorijskog okvira, samo iz humanističke ljubavi prema stvarnom. I upravo ta <em>nekonceptualizirana autentičnost</em> čini Ribanje najmodernijim djelom hrv. renesanse.&quot;</em>
        </div>
      </div>

      {/* SEC 02f — Uvod za 3 tipa eseja */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02f · Uvod za 3 tipa</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📄 TIP A: Djelo iz H11 kao glavni predmet eseja</div>
        <div className="box-key-txt">
          <em>„[Autor], [djelo] ([godina]), [žanr], jedno je od temeljnih djela hrv. renesanse. [Kratki opis djela u 1 rečenici]. U ovom eseju pokazat ću kako [teza — specifična tvrdnja o djelu].&quot;</em><br />
          Primjer: <em>„Marin Držić, Novela od Stanca (1550.), farsa, jedno je od temeljnih djela hrv. renesanse. Trodnevna pokladna igra u kojoj mladići varaju starog seljaka Stanca obnavlja stari pitanje: tko pobjeđuje u gradu koji ne prašta naivnost? U ovom eseju pokazat ću kako Držić koristi pokladni kontekst kao dramski uvjet koji čini prevaru komičnom, legitimnom i društveno relevantnom.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 TIP B: H11 pisac kao usporedni kontekst u eseju o drugom djelu</div>
        <div className="box-key-txt">
          <em>„[Autor s popisa eseja], [djelo], [tema]. Isti [tema] prisutan je i u hrv. renesansi — [hrv. pisac] u [djelu] [kako tretira temu]. Za razliku od [hrv. pisca], [autor s popisa] [razlika]. Ta usporedba otkriva [ono što usporedba otkriva].&quot;</em><br />
          Primjer: <em>„Francesco Petrarca u Kanconijeru istražuje ljubav kao izvor i strasti i duhovnog uzleta. Isti poetički problem obrađuju i hrv. petrarkisti — Šiško Menčetić preuzima Petrarcinih motiva ali ih piše dvostrukim dvanaestercima umjesto sonetima. Za razliku od Petrarce koji razvija strogu formalnu disciplinu soneta, Menčetić prilagođava petrarkistički repertoar lokalnoj začinjavačkoj tradiciji.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📄 TIP C: Usporedba dvaju pisaca iz H11</div>
        <div className="box-key-txt">
          <em>„[Pisac A] u [djelu A] i [Pisac B] u [djelu B] oba se bave [zajedničkom temom]. Međutim, njihovi pristup su dijametralno različiti: [Pisac A] [pristup A], dok [Pisac B] [pristup B]. U ovom eseju argumentirat ću da [teza koja objašnjava zašto su ta dva pristupa oba legitimna odgovori na isti problem].&quot;</em><br />
          Primjer: <em>„Marko Marulić u Juditi i Petar Zoranić u Planinama oba govore o turskoj opasnosti i domovini u krizi. Međutim, njihovi pristupi su dijametralno različiti: Marulić alegorijom poziva na oružanu borbu, Zoranić elegijom poziva na buđenje književnosti. U ovom eseju argumentirat ću da su oba pristupa legitimni odgovori na istu prijetnju — jedan mobilizira mač, drugi pero.&quot;</em>
        </div>
      </div>

      {/* SEC 03 — Model razrade */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">03 · Model razrade — argumentacijski odlomak</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Primjer odlomka razrade (Teza 3 — komentar društva)</div>
        <div className="box-key-txt">
          <em>„Novela od Stanca nije samo zabavna farsa — ona je <b>precizni komentar dubrovačkog društva 16. st.</b> Stanac, seljak iz trebinjskog zaleđa, dolazi u Dubrovnik naivan i pun nade. Dubrovački mladići, vlastela kojoj je karnevalska prevara zabava a ne zločin, iskorištavaju ga s lakoćom. Držić ne osuđuje eksplicitno — ali <em>samo prikazivanje</em> dovoljno je da publika vidi klasnu dinamiku. Kao što Machiavelli opisuje politiku kakva jest (a ne kakva bi trebala biti), Držić prikazuje društvo kakvo jest — <b>u kojemu pamet pobjeđuje naivnost, a klasna pozicija određuje tko smije varati koga</b>. Usporedimo li Novelu s <em>Dundom Marojom</em> — u Marojeu je sukob unutar same vlastele. U Noveli seljak gubi jer nema ni klasu ni pamet. Žanr farse to opravdava: farsa ne zahtijeva moral, zahtijeva smijeh.&quot;</em>
        </div>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">🔧 Struktura odlomka razrade — TIPS formula</div>
        <div className="box-int-txt">
          <b>T</b> — <em>Topic sentence</em>: jasna mikro-teza odlomka (jedna rečenica).<br />
          <b>I</b> — <em>Ilustracija</em>: konkretan primjer iz teksta ili parafraza.<br />
          <b>P</b> — <em>Pojašnjenje</em>: što ilustracija dokazuje u odnosu na tezu.<br />
          <b>S</b> — <em>Sinteza</em>: veza s drugim djelom, autorom ili književnoteorijskim pojmom.<br />
          <em>3 odlomka razrade × ~150 riječi = 450+ riječi ukupno</em>.
        </div>
      </div>

      {/* SEC 03c — TIPS formula + napredni argumentacijski lanac */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">03c · TIPS formula — razrada argumenta</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">🔧 TIPS — Teza, Ilustracija, Pojašnjenje, Sinteza</div>
        <div className="box-int-txt">
          Svaki argumentacijski odlomak u eseju slijedi ovu strukturu. <b>T</b> = tvrdnja (što tvrdim). <b>I</b> = ilustracija (dokaz iz teksta). <b>P</b> = pojašnjenje (zašto taj dokaz potvrđuje tvrdnju). <b>S</b> = sinteza (kako se ovo veže na tezu eseja).
        </div>
      </div>

      <div className="tbl">
        <div className="cr"><div className="ck br" style={{ minWidth: '50px' }}>T</div><div className="cv b">Teza odlomka</div><div className="cv"><em>„Pokladni kontekst u Noveli od Stanca nije dekor — on je dramski uvjet koji čini prevaru mogućom i legitimnom.&quot;</em></div></div>
        <div className="cr"><div className="ck go" style={{ minWidth: '50px' }}>I</div><div className="cv b">Ilustracija</div><div className="cv"><em>„U II. prizoru mladići ugledaju Stanca i spontano odlučuju varati ga — poklade su im to dopustile: u karnevalsko doba vrijede se norme.&quot;</em></div></div>
        <div className="cr"><div className="ck t" style={{ minWidth: '50px' }}>P</div><div className="cv b">Pojašnjenje</div><div className="cv"><em>„Da nije poklada, vlastela ne bi pristupila seljaku niti bi prevara bila prihvaćena kao komičan čin — bila bi moralno problematična.&quot;</em></div></div>
        <div className="cr"><div className="ck re" style={{ minWidth: '50px' }}>S</div><div className="cv b">Sinteza</div><div className="cv"><em>„Time Držić pokazuje da je farsa žanr koji ovisi o kontekstu — bez karnevala nema komedije, bez komedije nema Novele od Stanca.&quot;</em></div></div>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">🔗 Napredni argumentacijski lanac (3 odlomka)</div>
        <div className="box-int-txt">
          Napredni esej ima <strong>tri međusobno povezana argumenta</strong> koji grade prema zaključku. Svaki argument je korak naprijed, ne zasebna tema.<br /><br />
          <b>Odlomak 1 (kontekst):</b> Pokladni kontekst čini prevaru mogućom → uspostavi kontekst.<br />
          <b>Odlomak 2 (opreke):</b> Klasna i dobna asimetrija pojačava komički učinak → dodaj društvenu dimenziju.<br />
          <b>Odlomak 3 (žanr):</b> Farsa kao žanr ne traži moral — Držić prikazuje, ne prosuđuje → podigne argument na razinu poetike.<br /><br />
          <em>Svaki odlomak počinje konektorom: „Uz pokladni kontekst...&quot;, „Nadalje, klasna razlika...&quot;, „Konačno, žanr farse...&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Model razrade — Odlomak 2 (klasna dinamika)</div>
        <div className="box-key-txt">
          <em>„Uz pokladni kontekst, Novela od Stanca otkriva i <b>klasnu asimetriju</b> dubrovačkog društva 16. st. Mladići — vlastela — dolaze iz privilegiranog urbanog okruženja i posjeduju „gradski kod&quot;: znanje o pravilima igre, imenima i mjestima. Stanec — seljak iz Trebinja — dolazi bez tog znanja i upravo to ga čini lakom metom. Kada mladići <em>vežu ga, opale mu bradu i odlaze u toplinu svojih domova</em>, a Stanec ostaje sam na trgu, Držić nam ne mora ništa reći eksplicitno — slika sama govori. <b>Dubrovnik 16. st. nagrađuje pamet i poznanstvo, ne dobrotu i naivnost.</b> Ovo nije moralna osuda — to je precizna socijalna dijagnoza u formi farse.&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Model razrade — Odlomak 3 (poetika farse)</div>
        <div className="box-key-txt">
          <em>„Konačno, da bismo razumjeli Novelu od Stanca, moramo razumjeti što je <b>farsa kao žanr</b>. Farsa ne traži moralnu pouku — to je komedija situacije, ne karaktera. Stanec nije moralno loš čovjek koji zaslužuje kaznu; on je samo naivan u pogrešnom trenutku na pogrešnom mjestu. Mladići nisu moralno dobri ni loši — oni su tipovi koji iskorištavaju trenutak. <em>Držić ne sudi — prikazuje.</em> I upravo ta <b>moralna otvorenost</b> razlikuje Novelu od Stanca od Marulićeve Judite (eksplicitan kršćanski moral) i Zoranićevih Planina (patriotski apel). Držić je, od svih hrv. renesansnih pisaca, najslobodniji od didaktike — i upravo zato najbliži modernom kazalištu.&quot;</em>
        </div>
      </div>

      {/* SEC 03b — Ključni prizori za esej */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">03b · Ključni prizori — što citirati u eseju</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">🎭 7 prizora Novele od Stanca — esejska vrijednost</div>
        <div className="box-int-txt">
          Ispit može dati <strong>ulomak iz Novele od Stanca</strong> i tražiti analizu. Svaki prizor ima svoju dramsku funkciju — zapamti barem 3 za esej. Korisno: uvijek poveži prizor s <em>ključnim oprekama</em> (mlado–staro, vlastela–seljak, poklade–realnost).
        </div>
      </div>

      <div className="sc-grid">
        <div className="sc">
          <span className="sc-ico hchip br">I–II</span>
          <div className="sc-name">Ekspozicija + iskra</div>
          <div className="sc-desc"><b>Esejska vrijednost:</b> Stanac kao simpatičan, tužan lik — <em>ne zlikovac</em>. Publika zna da će biti prevarena. Napetost je dramatska ironija: <b>mi znamo, Stanac ne zna</b>. Argument: farsa ne mora imati zlog protagonista — samo naivnog.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip go">III–IV</span>
          <div className="sc-name">Obmana u akciji</div>
          <div className="sc-desc"><b>Esejska vrijednost:</b> Stanac <em>želi vjerovati</em> u vodu od mladosti — to je tragična dimenzija unutar komedije. Citirati: <em>„Voda od mladosti&quot;</em> kao renesansni mitski motiv (Fontana della giovinezza). Argument: farsa može sadržavati i dublje antropološke motive.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip te">V–VI</span>
          <div className="sc-name">Vrhunac + spoznaja</div>
          <div className="sc-desc"><b>Esejska vrijednost:</b> Klasna asimetrija je naglašena — mladići odlaze u toplinu svojih kuća, Stanac ostaje svežan na trgu. <b>Argument o društvenoj kritici:</b> Držić ne osuđuje eksplicitno, ali prikaz je dovoljan.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip pa">VII</span>
          <div className="sc-name">Otvoreni završetak</div>
          <div className="sc-desc"><b>Esejska vrijednost:</b> Bez moralne pouke — to je Držićeva <em>modernistička</em> crta. Usporedi s Marulićem: <em>Judita</em> ima eksplicitnu poruku (Božja pomoć pobjeđuje). Novela nema — publika sama zaključuje. Argument: žanr određuje moralnu poziciju autora.</div>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Analitički okvir za ulomak iz Novele</div>
        <div className="box-key-txt">
          Kad dobiješ ulomak iz Novele od Stanca, prođi ovim koracima:<br />
          <b>1. Koji prizor je ovo?</b> (I–VII) — odredi mjesto u radnji.<br />
          <b>2. Koje opreke su aktivne?</b> (mlado–staro? vlastela–seljak? poklade–realnost?)<br />
          <b>3. Koji je ton?</b> (komičan? ironičan? blago tragičan?)<br />
          <b>4. Koja stilska sredstva?</b> (dijalog, komika situacije, dvanaesterac, dramska ironija)<br />
          <b>5. Veza s cjelinom:</b> Kako ovaj prizor pridonosi ukupnoj tezi drame?<br />
          <em>Ovo je TIPS formula prilagođena za dramski tekst.</em>
        </div>
      </div>

      {/* SEC 04b — H11 u eseju o drugom djelu */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">04b · H11 u eseju o drugom djelu</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">📋 H11 kao kontekst za eseje o drugim djelima</div>
        <div className="box-int-txt">
          Esej za maturu 2026. nije o Noveli od Stanca niti o Juditi direktno — ali hrv. renesansa može biti <strong>kontekstualni argument</strong> kad pišeš o djelima s popisa. Evo kako:
        </div>
      </div>

      <div className="sc-grid">
        <div className="sc">
          <span className="sc-ico hchip br">PETRARCA</span>
          <div className="sc-name">Esej o Petrarci → H11 kontekst</div>
          <div className="sc-desc">Ako pišeš o Petrarci (<em>Kanconijer</em>), H11 ti daje hrv. recepciju: <b>Menčetić i Džore Držić preuzimaju petrarkistički repertoar, ali pišu dvanaesterce umjesto soneta</b>. Argument: Petrarkin utjecaj se prilagođava lokalnoj tradiciji — hrv. petrarkisti su kreativni prevoditelji, ne kopisti.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip go">CALDERÓN</span>
          <div className="sc-name">Esej o Calderónu → H11 kontekst</div>
          <div className="sc-desc">Calderón (<em>Život je san</em>) i Držić su suvremenici renesansno-baroknog prijelaza. Argument: <b>Calderón pita što je stvarnost; Držić prikazuje iluziju (Stanec vjeruje da se podmladio)</b>. Oba koriste dramatsku obmanu kao filozofski alat — ali u suprotnim smjerovima.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip te">GOETHE</span>
          <div className="sc-name">Esej o Goetheu → H11 kontekst</div>
          <div className="sc-desc">Goethe (<em>Faust</em>) kao renesansni humanist koji želi znati sve — usporedi s Marulićevom <em>curiositas</em>. Argument: <b>i Faust i Marulić streme spoznaji, ali Faust je moderan (faustovski pakt), Marulić je kršćanski humanist koji ne napušta vjeru</b>. Kontrast koji pokazuje razvoj humanizma.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip pa">KRLEŽA</span>
          <div className="sc-name">Esej o Krleži → H11 kontekst</div>
          <div className="sc-desc">Krleža (<em>Gospoda Glembajevi</em>) kao moderni nasljednik Držića. Argument: <b>i Držić (Skup, Dundo Maroje) i Krleža kritiziraju pohlepu i moralnu dekadencu hrvatskog imućnog sloja</b> — ali Držić to radi komedijom, Krleža tragedijom. 400 godina razvoja žanra.</div>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">💡 Kako umetnuti H11 u esej o drugom djelu</div>
        <div className="box-key-txt">
          <b>Formula:</b> <em>„[Djelo s popisa] bavi se [temom], što je prisutno i u hrv. renesansnoj književnosti — [pisac] u [djelu] [veza s temom]. Za razliku od [pisce], [autor s popisa] [razlika].&quot;</em><br /><br />
          <b>Primjer:</b> <em>„Goetheov Faust bavi se žudnjom za spoznajom, što je temeljno humanistički motiv prisutan i u hrv. renesansi. Marulić u <em>Instituciji</em> i <em>Davidijadi</em> stoji pred istim humanističkim idealom — ali za razliku od Fausta koji sklapa pakt s đavlom, Marulić spoznaji pristupa kroz kršćanski intelektualni okvir koji ga štiti od Faustova pada.&quot;</em>
        </div>
      </div>

      {/* SEC 04 — Checklist */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">04 · Checklist prije predaje</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">✅ 10-točka checklist</div>
        <div className="box-key-txt">
          <b>□ 1.</b> Uvod sadrži: autora, naslov, godinu, žanr i jasnu tezu?<br />
          <b>□ 2.</b> Teza je argumentabilna i specifična — ne trivijalna (&quot;Novela od Stanca je komedija&quot;)?<br />
          <b>□ 3.</b> Svaki odlomak razrade slijedi TIPS: Tvrdnja → Ilustracija → Pojašnjenje → Sinteza?<br />
          <b>□ 4.</b> Razrada ima min. 2–3 argumenata koji međusobno grade prema zaključku?<br />
          <b>□ 5.</b> Barem jedan citat ili parafraza iz teksta s interpretacijom?<br />
          <b>□ 6.</b> Barem 3–4 književnoteorijska pojma (farsa, pokladna igra, dvanaesterac, alegorija...)?<br />
          <b>□ 7.</b> Odlomci su vezani konektorima: „Uz to...&quot;, „Za razliku od...&quot;, „Konačno...&quot;?<br />
          <b>□ 8.</b> Zaključak sinteza argumenata + širi kontekst ili usporedba s drugim djelom?<br />
          <b>□ 9.</b> Esej ima min. 440 riječi? (provjeri brojačem ispod)<br />
          <b>□ 10.</b> Nema prepričavanja bez interpretacijske tvrdnje uz njega?
        </div>
      </div>

      {/* SEC 04c — Tipovi esejskih pitanja */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">04c · 3 tipa ispitnih pitanja</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">📋 3 tipa pitanja koja se pojavljuju na maturi</div>
        <div className="box-int-txt">
          Renesansna tema može doći u tri oblika. Svaki traži drugačiji pristup.
        </div>
      </div>

      <div className="scenes">
        <details className="scene">
          <summary className="scene-sum">
            <div className="scene-num">TIP 1</div>
            <div className="scene-ttl">Analiza konkretnog ulomka — <em>čitanje s razumijevanjem</em></div>
            <div className="scene-meta">ULOMAK</div>
          </summary>
          <div className="scene-body">
            <div className="scene-quote">Dobiješ ulomak iz Novele od Stanca (ili Judite, ili Planina) i 5 pitanja višestrukoga izbora. Pitat će: tko govori, kojeg je prizora, što znači određena rečenica, koje stilsko sredstvo je upotrijebljeno, što lik osjeća.</div>
            <div className="scene-why"><b>Taktika:</b> (1) Identificiraj tko govori i u kom kontekstu. (2) Provjeri stilska sredstva: anafora, metafora, ironija, dvanaesterac. (3) Poveži ulomak s cjelinom — kojeg je prizora, koja opreka je aktivna. (4) Nikad ne gubiš bod na višestrukome izboru ako pažljivo čitaš. <b>H11 = Novela od Stanca je obvezatno čitanje 2026.</b></div>
          </div>
        </details>

        <details className="scene">
          <summary className="scene-sum">
            <div className="scene-num">TIP 2</div>
            <div className="scene-ttl">Teorijsko pitanje — <em>definicija pojma ili žanra</em></div>
            <div className="scene-meta">TEORIJA</div>
          </summary>
          <div className="scene-body">
            <div className="scene-quote">Pitanje kao: „Što je petrarkizam?&quot;, „Definiraj bugaršticu&quot;, „Koji su žanrovi hrv. renesansne drame?&quot;, „Što je dvostruko rimovani dvanaesterac?&quot;. Kratki odgovori ili višestruki izbor.</div>
            <div className="scene-why"><b>Taktika:</b> (1) Definicija + primjer = potpun odgovor. (2) Nikad samo definicija bez primjera. (3) Primjer iz konkretnog hrv. teksta je bolji od apstraktnog opisa. Npr.: „Petrarkizam je ljubavna lirika po uzoru na Petrarcu — hrv. primjer: Menčetić (<em>Blažen čas i hip</em>), koji preuzima petrarkistički repertoar ali piše dvanaesterce umjesto soneta.&quot;</div>
          </div>
        </details>

        <details className="scene">
          <summary className="scene-sum">
            <div className="scene-num">TIP 3</div>
            <div className="scene-ttl">Kontekstualni esejski argument — <em>H11 unutar eseja o drugom djelu</em></div>
            <div className="scene-meta">ESEJ</div>
          </summary>
          <div className="scene-body">
            <div className="scene-quote">Pišeš esej o Petrarci, Calderónu, Goetheu ili Krleži — i hoćeš ubaciti H11 kao kontekstualni argument. Npr. u eseju o Petrarci možeš pokazati kako hrv. petrarkisti preuzimaju tematiku ali mijenjaju formu.</div>
            <div className="scene-why"><b>Taktika:</b> (1) Formula: „Za razliku od [autor s popisa], hrv. pisac [Menčetić/Marulić/Držić] [sličnost/razlika].&quot; (2) Jedan do dva paragrafa konteksta je dovoljno — ne pišeš esej o Maruliću, pišeš o Petrarci. (3) Interdisciplinarni kontekst = viša ocjena jer pokazuješ šire poznavanje.</div>
          </div>
        </details>
      </div>

      {/* SEC 05 — Model zaključka */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">05 · Model zaključka</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Primjer zaključka (za Tezu 1 — pokladni kontekst)</div>
        <div className="box-key-txt">
          <em>„Novela od Stanca Marina Držića nije samo pokladna zabava — ona je <b>precizni xray dubrovačkog društva 16. st.</b> smještena u karnevalski okvir koji tu preciznost čini mogućom i legitimnom. Stanec gubi jer je star, naivan i stranac u gradu koji nagrađuje pamet i poznanstvo. Pokladni kontekst nije dekor — on je <b>dramski uvjet i filozofski okvir</b> cijele farse. Upravo zato Novela od Stanca ostaje živim tekstom: ne govori o pokladama — govori o <em>tome tko pobjeđuje i zašto</em>. Dok Marulić u Juditi poziva na otpor alegorijom, a Zoranić u Planinama tuguje nad rasutom bašćinom, Držić se smije — ali taj smijeh bolno točno pogađa.&quot;</em>
        </div>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">🎯 Anatomija dobrog zaključka — 3 elementa</div>
        <div className="box-int-txt">
          <b>(1) Povratak na tezu</b> — reformuliraj središnju tvrdnju novim riječima (ne kopiraj uvod doslovno). <b>(2) Sinteza argumenata</b> — jednom rečenicom sažmi što su ti argumenti dokazali. <b>(3) Širi kontekst</b> — smjesti djelo u širu perspektivu: renesansa, hrv. književnost, usporedi s drugim piscem ili djelom. <em>Zaključak ne uvodi nove argumente — zatvara ono što je otvoreno.</em>
        </div>
      </div>

      {/* SEC 06 — 5 grešaka */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">06 · 5 grešaka koje uništavaju esej</div><div className="sec-line"></div></div>

      <div className="sc-grid">
        <div className="sc">
          <span className="sc-ico hchip re">GREŠKA 1</span>
          <div className="sc-name">Prepričavanje radnje</div>
          <div className="sc-desc">„U Noveli od Stanca mladići prevare Stanca...&quot; — to nije analiza, to je sažetak. <strong>Svaka rečenica mora argumentirati tezu</strong>, ne opisivati što se događa. Ispit traži interpretaciju, ne prepričavanje.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip re">GREŠKA 2</span>
          <div className="sc-name">Nepovezani argumenti</div>
          <div className="sc-desc">Tri odlomka koji ne razgovaraju međusobno. Svaki argument mora <em>graditi prema zaključku</em>. Koristiti konektore: <b>„Nadalje...&quot;, „Uz to...&quot;, „Što je još važnije...&quot;</b> — ne pisati tri odvojena eseja unutar jednog.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip re">GREŠKA 3</span>
          <div className="sc-name">Nema književnoteorijskih pojmova</div>
          <div className="sc-desc">Ako ne upotrijebite <em>farsa, pokladna igra, dvostruko rimovani dvanaesterac, komika situacije, tipski lik</em> — esej zvuči amaterski. Pojmovi su signal da razumiješ žanr i tradiciju. Barem 3–4 po eseju.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip re">GREŠKA 4</span>
          <div className="sc-name">Opći uvod bez autora i naslova</div>
          <div className="sc-desc">„Književnost je oduvijek bila ogledalo društva...&quot; — gubi bodove odmah. <strong>Počni s autorom, naslovom, godinom</strong>. Svaki sekund čitateljevog strpljenja je bitan. NCVVO vrednuje preciznost, ne filozofske uvodne pasuse.</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip re">GREŠKA 5</span>
          <div className="sc-name">Zaključak = kopija uvoda</div>
          <div className="sc-desc">Zaključak koji samo kopira uvod dobiva 0 bodova za tu sastavnicu. <em>Zaključak mora sintetizirati, ne ponavljati</em>. Dodaj širi kontekst ili usporedi s drugim djelom — npr. „Za razliku od Marulića koji alegorijski potiče otpor, Držić se smije...&quot;</div>
        </div>
        <div className="sc">
          <span className="sc-ico hchip go">SAVJET</span>
          <div className="sc-name">Stilska sredstva u Noveli</div>
          <div className="sc-desc">Ironija (Stanac misli da se podmladio — publika zna da laže), <em>komika situacije</em> (ne karaktera — Stanac je tip, ne individua), <em>dijalog</em> kao jedino dramsko sredstvo u farsi, <b>dvostruko rimovani dvanaesterac</b> daje ritmičnost i muzikalnost čak i komičnim scenama.</div>
        </div>
      </div>

      {/* SEC 08 — Usporedi */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">08 · Usporedi — Marulić, Držić, Zoranić</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">⚖️ Kad esejsko pitanje traži usporedbu</div>
        <div className="box-int-txt">
          Interpretacijski esej može biti i <strong>usporedni</strong> — npr. <em>„Usporedi kako Marulić i Držić prikazuju dubrovačko/splitsko društvo&quot;</em> ili <em>„Kako Marulić i Zoranić koriste alegoriju u službi domoljublja&quot;</em>.
        </div>
      </div>

      <div className="tbl">
        <div className="cr">
          <div className="ck br" style={{ minWidth: '100px' }}>KRITERIJ</div>
          <div className="cv"><b style={{ color: 'var(--bronze-l)' }}>Marulić</b></div>
          <div className="cv"><b style={{ color: 'var(--gold)' }}>Držić</b></div>
          <div className="cv"><b style={{ color: 'var(--teal)' }}>Zoranić</b></div>
        </div>
        <div className="cr">
          <div className="ck go" style={{ minWidth: '100px' }}>Žanr</div>
          <div className="cv">Ep (Judita), latinska proza</div>
          <div className="cv">Farsa/komedija (Novela, Dundo)</div>
          <div className="cv">Roman (Planine) — mješavina proze i stiha</div>
        </div>
        <div className="cr">
          <div className="ck t" style={{ minWidth: '100px' }}>Turska tema</div>
          <div className="cv"><em>Eksplicitna alegorija</em> — Oloferno = Turci, poziv na otpor</div>
          <div className="cv"><em>Odsutna</em> — farsa je društvena satira, ne politički apel</div>
          <div className="cv"><em>Emocionalna</em> — „rasuta bašćina&quot;, tuga za domovinom</div>
        </div>
        <div className="cr">
          <div className="ck re" style={{ minWidth: '100px' }}>Alegorija</div>
          <div className="cv"><b>Transparentna</b> — Bog, heroj, neprijatelj jasno su mapirani</div>
          <div className="cv"><b>Nema</b> — Novela je doslovna slika pokladne noći</div>
          <div className="cv"><b>Višeslojna</b> — Perivoj od Slave, jabuke, vile = hrv. književnost</div>
        </div>
        <div className="cr">
          <div className="ck pa" style={{ minWidth: '100px' }}>Moral</div>
          <div className="cv">Eksplicitni kršćanski moral — pobožnost pobjeđuje</div>
          <div className="cv">Bez moralne osude — farsa prikazuje, ne prosuđuje</div>
          <div className="cv">Patriotski apel — poziv na buđenje književnosti i domovine</div>
        </div>
        <div className="cr">
          <div className="ck g" style={{ minWidth: '100px' }}>Publika</div>
          <div className="cv">Europski humanistički kružoci (latinskim) + Hrvatska (Juditom)</div>
          <div className="cv">Dubrovačka vlastela na pokladnim svečanostima</div>
          <div className="cv">Obrazovani čitatelji, zadarski plemićki krug</div>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Rečenica za usporedni esej</div>
        <div className="box-key-txt">
          „Dok Marulić u <em>Juditi</em> koristi <b>biblijsku alegoriju</b> kao eksplicitan poziv na otpor turskoj prijetnji, Zoranić u <em>Planinama</em> istu temu obrađuje kroz <b>elegičnu alegoriju rasute bašćine</b> — oba pisca govore o istoj opasnosti, ali iz različite emocionalne i žanrovske pozicije. Marin Držić pak tu temu potpuno izostavljuje: njegova je komedija <b>socijalna satira</b> dubrovačke svakodnevice, ne politički manifest.&quot;
        </div>
      </div>

      {/* SEC 09 — Stilska sredstva */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">09 · Stilska sredstva u hrv. renesansi</div><div className="sec-line"></div></div>

      <div className="sc-grid">
        <div className="sc"><span className="sc-ico hchip br">STIL</span><div className="sc-name">Alegorija</div><div className="sc-desc">Tekst ima doslovno i skriveno značenje. <em>Judita</em>: Holoferno = Turci. <em>Planine</em>: Perivoj od Slave = hrv. književnost. <b>Tipično za Marulića i Zoranića</b> — manje kod Hektorovića i Držića.</div></div>
        <div className="sc"><span className="sc-ico hchip go">STIL</span><div className="sc-name">Dvostruko rimovani dvanaesterac</div><div className="sc-desc">Standardni stih hrv. renesanse. 12 slogova, cesura po 6. Rima: AA BB ili AB AB. Koriste svi osim Lucića (osmesterac u lirici) i Zoranića (mješavina proze i stiha u romanu).</div></div>
        <div className="sc"><span className="sc-ico hchip te">STIL</span><div className="sc-name">Petrarkistički motivi</div><div className="sc-desc">„Gospoja&quot; idealizirana, ljubav kao bol i slast, Amor/Kupido, usporedba ljepote s prirodom. <b>Standardni repertoar</b> koji svi hrv. petrarkisti dijele — razlikuju se po <em>intenzitetu senzualnosti</em> (Menčetić) ili <em>idealizaciji</em> (Džore Držić).</div></div>
        <div className="sc"><span className="sc-ico hchip pa">STIL</span><div className="sc-name">Komika situacije (farsa)</div><div className="sc-desc">Ne komika karaktera — Stanac je <em>tip</em>, ne individua. Smijeh dolazi iz situacije (vara ga, opijaju, vežu) a ne iz psihološke dubine lika. <b>Tipično za Držića</b> — razlika od Shakespeareove psihološke komedije.</div></div>
        <div className="sc"><span className="sc-ico hchip re">STIL</span><div className="sc-name">Patriotska jadikovka</div><div className="sc-desc">Emocionalni apel na stanje domovine — <em>Planine</em> (rasuta bašćina), <em>Judita</em> (alegorijski poziv), <em>Vazetje Sigeta</em> (glorifikacija žrtve). Specifičan ton hrv. renesanse — nema analogije u talijanskoj.</div></div>
        <div className="sc"><span className="sc-ico hchip gr">STIL</span><div className="sc-name">Realistični opis (Hektorović)</div><div className="sc-desc">Konkretni detalji puta, krajolika, ribareva razgovora — bez alegorije. Inovativnost: <em>stvarnost je dovoljan književni predmet</em>. Anticipira realizam 19. st. ali ostaje osamljeni glas u hrv. renesansi.</div></div>
      </div>

      {/* SEC 09b — Stilska sredstva: analitički model */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">09b · Analiza stilskog sredstva</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">🔬 Formula za analizu stilskog sredstva u eseju</div>
        <div className="box-int-txt">
          Ne pisat: <em>„Menčetić koristi anaforu.&quot;</em> — to je samo identifikacija.<br />
          Pisat: <em>„Menčetić koristi anaforu (Blažen... blažena... blažena...) — <b>ponavljanjem pojačava emotivni intenzitet euforije</b> prvog pogleda, čineći gospoju sveprisutnom u svim sferama lirskog subjektovog iskustva.&quot;</em> — to je analiza.<br /><br />
          <b>Formula:</b> [Stilsko sredstvo] + [primjer iz teksta] + [efekt na čitatelja ili značenje u kontekstu].
        </div>
      </div>

      <div className="tbl">
        <div className="cr"><div className="ck br">STILSKO SREDSTVO</div><div className="cv b">PRIMJER IZ H11</div><div className="cv b">ŠTO POSTIŽE</div></div>
        <div className="cr"><div className="ck go">Anafora</div><div className="cv"><em>„Blažen čas i hip... blažena kolipka... blažena ti ženska...&quot;</em> (Menčetić)</div><div className="cv">Pojačava emocionalni intenzitet — gospoja je sveprisutna u svakom aspektu lirskog iskustva</div></div>
        <div className="cr"><div className="ck t">Alegorija</div><div className="cv">Holoferno = Turci; Judita = Hrvatska (Marulić, <em>Judita</em>)</div><div className="cv">Kodira politički apel u biblijsku naraciju — zaobilazi cenzuru i daje priči vječnost</div></div>
        <div className="cr"><div className="ck re">Dramska ironija</div><div className="cv">Publika zna da nema „vode od mladosti&quot;; Stanec ne zna (Držić, <em>Novela</em>)</div><div className="cv">Stvara komiku i empatiju istovremeno — publika se smije, ali i žali Stanca</div></div>
        <div className="cr"><div className="ck pa">Antiteza</div><div className="cv"><em>„volim i mrzim&quot;</em>, bol i slast ljubavi (petrarkistička lirika)</div><div className="cv">Prikazuje paradoks ljubavnog iskustva — unutarnji raskorak kao temelj petrarkizma</div></div>
        <div className="cr"><div className="ck g">Metafora</div><div className="cv">Jabuke = stanje nacionalnih književnosti (Zoranić, <em>Perivoj od Slave</em>)</div><div className="cv">Apstraktni pojam (stanje književnosti) postaje konkretan i vidljiv kroz sliku</div></div>
        <div className="cr"><div className="ck br">Apostrofa</div><div className="cv">Lirski subjekt direktno govori Amoru, gospoji ili Bogu u petrarkizmu</div><div className="cv">Monolog postaje živ — lirski subjekt komunicira s apstraktnim entitetom, pojačava dramu</div></div>
      </div>

      {/* SEC 11 — Konektori */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">11 · Konektori i prijelazne rečenice</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">🔗 Gotove fraze za uvezivanje argumenata</div>
        <div className="box-int-txt">
          Esej bez konektora zvuči kao lista, ne kao argumentacija. Ove fraze pomažu da prijelazi između odlomaka budu logični i elegantni.
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">➕ Dodavanje / pojačavanje</div>
        <div className="box-key-txt">
          <em>„Uz to...&quot;</em> · <em>„Osim toga...&quot;</em> · <em>„Što je još važnije...&quot;</em> · <em>„Nadalje, ...&quot;</em> · <em>„K tome, ...&quot;</em> · <em>„Tome valja dodati...&quot;</em> · <em>„Jednako značajno je...&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">⚖️ Kontrast / suprotnost</div>
        <div className="box-key-txt">
          <em>„Za razliku od [X], [Y]...&quot;</em> · <em>„Dok [X], [Y]...&quot;</em> · <em>„Međutim, ...&quot;</em> · <em>„S druge strane, ...&quot;</em> · <em>„Suprotno od toga, ...&quot;</em> · <em>„No, [Y] ukazuje na drugačije...&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">🔑 Zaključivanje / sinteza</div>
        <div className="box-key-txt">
          <em>„Iz navedenog je vidljivo...&quot;</em> · <em>„Ovi primjeri potvrđuju tezu da...&quot;</em> · <em>„Stoga možemo zaključiti...&quot;</em> · <em>„Time [autor] pokazuje...&quot;</em> · <em>„Konačno, ...&quot;</em> · <em>„Sve navedeno ukazuje na...&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">📖 Uvođenje dokaza iz teksta</div>
        <div className="box-key-txt">
          <em>„To potvrđuje [prizor/stih/lik] u kojemu...&quot;</em> · <em>„Primjer za to je [prizor X] kada...&quot;</em> · <em>„Lik [X] to ilustrira kada...&quot;</em> · <em>„Karakteristično je da [autor] u [prizoru/sceni]...&quot;</em> · <em>„[Autor] to postiže kroz [stilsko sredstvo] —...&quot;</em>
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">💡 Konkretni primjeri konektora u H11 eseju</div>
        <div className="box-key-txt">
          <em>„Uz pokladni kontekst kao dramski uvjet, valja razmotriti i klasnu dinamiku Novele...&quot;</em><br />
          <em>„Za razliku od Marulića koji alegorijom kodira domoljubni apel, Zoranić ga iskazuje kroz elegičnu tugu rasute bašćine...&quot;</em><br />
          <em>„Nadalje, Hektorovićev dokumentarni realizam — koji bilježi bugarštice ribarâ — govori o posve drugačijem humanizmu od Marulićevog...&quot;</em><br />
          <em>„Konačno, Novela od Stanca nije moralna pouka nego socijalna dijagnoza — i upravo ta razlika u odnosu na Juditu i Planine čini Držića modernistom avant la lettre.&quot;</em>
        </div>
      </div>

      {/* SEC 12 — Napredni zaključak */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">12 · Napredni zaključak — usporedba 3 pisca</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📄 Model zaključka koji uspoređuje Marulića, Zoranića i Držića</div>
        <div className="box-key-txt">
          <em>„Hrv. renesansna književnost nema jednu poetiku — ima tri. <b>Marulić</b> alegorijom traži ono čega nema: Božju intervenciju, Juditinu hrabrost, poraz Turaka. <b>Zoranić</b> elegijom oplakuje ono što se gubi: domovinu, književnu tradiciju, identitet. <b>Držić</b> smijehom prikazuje ono što jest: grad bez morala, pobjedu lukavosti, poraz naivnosti. Tri pisca, tri poetike, jedna stvarnost — Hrvatska 16. st. Ovo je bogatstvo hrv. renesanse: da na istu prijetnju i isti gubitak odgovori alegorijom, elegijom i smijehom. I upravo ta trostrukost čini hrv. renesansu ne provincijskim odjecima talijanske, nego originalnom književnom epohom s vlastitim glasom.&quot;</em>
        </div>
      </div>

      {/* SEC 13 — Zašto je hrv. renesansa važna */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">13 · Zašto je hrv. renesansa važna danas</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">💡 Za napredni esejski zaključak — relevantnost hrv. renesanse</div>
        <div className="box-int-txt">
          Hrv. renesansa nije mrtva prošlost — ona postavlja pitanja koja su aktualna i danas. Svaki pisac ostavlja poruku koja nadilazi 16. st.:<br /><br />
          <b>Marulić pita:</b> <em>Kako se boriti kad si slabiji? — Alegorijom, vjerom, kulturom.</em><br />
          <b>Zoranić pita:</b> <em>Što je nacionalna književnost? — Nešto što se mora svjesno graditi, ne čeka samo na se.</em><br />
          <b>Hektorović pita:</b> <em>Čije je znanje vrijedno? — Svačije, i onoga koji je učen i onoga koji zna put mora.</em><br />
          <b>Držić pita:</b> <em>Tko pobjeđuje u gradu koji nagrađuje pamet? — Uvijek isti: lukavi, urbani, privilegirani.</em><br />
          <b>Menčetić i Lucić pitaju:</b> <em>Što je ljubav — strast ili put prema Bogu? — Oboje, ovisno o tome koliko si spreman ići.</em><br /><br />
          Ova pitanja nemaju rok trajanja. I upravo zato hrv. renesansa nije gradivo — ona je razgovor koji traje.
        </div>
      </div>

      <div className="box-key">
        <div className="box-key-lbl">🎯 Savjet za dan ispita — H11</div>
        <div className="box-key-txt">
          Ujutro na dan ispita: (1) Poglej Must-Know kartice (Tab 0, vrh). (2) Ponovi 5 zamki (Tab 0, Sec 14). (3) Pročitaj Top 10 citata (Tab 3, dno) — barem 2–3 nauči napamet. (4) Prođi kroz Checkpoint (Tab 7) — ako si sve označio/la, spreman/a si. Sretno!
        </div>
      </div>

      {/* SEC 10 — Piši esej */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">10 · Piši esej ovdje</div><div className="sec-line"></div></div>

      <WordCounter />

      <div className="nav-row">
        <span className="nb" onClick={() => onTabSwitch(1)}>← 📖 Pisci i djela</span>
        <span className="nb primary" onClick={() => onTabSwitch(3)}>💬 Citatnik →</span>
      </div>
    </div>
  );
}
