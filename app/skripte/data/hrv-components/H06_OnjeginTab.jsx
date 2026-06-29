/**
 * H06_OnjeginTab.jsx
 * Maturiraj.hr — Hrvatski H06 · Tab 1: Evgenij Onjegin (deep-dive)
 *
 * CSS je definiran u h06-components.jsx (CSS_ONJEGIN6) i injektira se
 * direktno u ovom komponentu da radi i u HrvatskiViewer i u poglavlje06.
 */

import { CSS_ONJEGIN6 } from './H06_Components';

export default function H06OnjeginTab({ onPrev, onNext }) {
  return (
    <div className="layer on" id="l1" role="tabpanel" tabIndex={0}>
      <style>{CSS_ONJEGIN6}</style>

      {/* Pills */}
      <div className="tags">
        <span className="pill p-br">1823.–1831.</span>
        <span className="pill p-go">Aleksandar Puškin</span>
        <span className="pill p-r">roman u stihovima</span>
        <span className="pill p-t">oneginski stih</span>
        <span className="pill p-pa">8 poglavlja · 389 strofa</span>
      </div>

      {/* Intro box */}
      <div className="box-int">
        <div className="box-int-lbl">🌹 Zašto Evgenij Onjegin zaslužuje cijeli tab</div>
        <div className="box-int-txt">
          Puškinov <em>Evgenij Onjegin</em> nije samo važan ruski roman — on je{' '}
          <strong>temeljno djelo europskog romantizma</strong> i{' '}
          <em>prvi veliki moderni roman</em> (uz Cervantesa). Stvara arhetip{' '}
          <b>„suvišnog čovjeka"</b> koji će dominirati ruskom književnošću kroz
          Dostojevskog i Tolstoja (oboje obvezatno čitanje). Uvodi{' '}
          <b>oneginski stih</b> kao jedinstvenu formalnu inovaciju. Na maturi se
          pojavljuje u <em>teoriji književnosti</em> i <em>čitanju književnog teksta</em>.
          Puškin je most između romantizma i realizma — razumijevanje Onjegina je ključ
          za razumijevanje cijele ruske (a time i europske) književnosti 19. stoljeća.
        </div>
      </div>

      {/* ── SEKCIJA 01: OSNOVNI PODACI ─────────────────────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">01 · Osnovni podaci o djelu</div>
        <div className="sec-line"></div>
      </div>

      <div className="sg">
        {/* AUTOR */}
        <div className="sc">
          <span className="sc-ico si-br">AUTOR</span>
          <div className="sc-name">Aleksandar Puškin</div>
          <div className="sc-desc">
            (1799. Moskva – 1837. Sankt-Peterburg, u dvoboju). Najveći ruski pjesnik,{' '}
            „<em>naše sve</em>". Utemeljuje moderni ruski književni jezik. Tragičan kraj
            s 38 godina — poginuo u dvoboju braneći čast žene Natalije Gončarove.
          </div>
        </div>

        {/* GODINA */}
        <div className="sc">
          <span className="sc-ico si-go">GODINA</span>
          <div className="sc-name">1823.–1831. (8 godina pisanja)</div>
          <div className="sc-desc">
            Puškin piše roman u više ciklusa — prva 2 poglavlja u progonstvu na jugu
            (1823.–1824., Kišinjev/Odessa), nastavak u Mihajlovskom (1824.–1826.),
            završava u Boldinu (jesen 1830., kreativni vrhunac). Objavljeno po
            poglavljima, cjelovito 1833.
          </div>
        </div>

        {/* KNJIŽEVNA VRSTA */}
        <div className="sc">
          <span className="sc-ico si-r">KNJIŽEVNA VRSTA</span>
          <div className="sc-name">Roman u stihovima</div>
          <div className="sc-desc">
            Hibridna forma — <em>ni ep, ni roman, ni zbirka poezije</em>. Puškin je
            izmišlja i stvara. 8 poglavlja (jedno od originalnih 9 je izbačeno —
            „Onjeginovo putovanje"). Ukupno 389 onegainskih strofa = 5446 stihova.
            Zove se i <b>„enciklopedija ruskog života"</b> (Belinski).
          </div>
        </div>

        {/* STIH I RIMA */}
        <div className="sc">
          <span className="sc-ico si-t">STIH I RIMA</span>
          <div className="sc-name">Oneginski stih (AbAbCCddEffEgg)</div>
          <div className="sc-desc">
            Puškin stvara <strong>oneginsku strofu</strong>: 14 stihova u jampskom
            tetrametru. Rimovni uzorak: <b>AbAbCCddEffEgg</b> (veliko slovo = ženska
            rima, malo slovo = muška rima). 3 kvartine različitih rimovnih uzoraka +
            završni distih. Jedinstveno u svjetskoj književnosti.
          </div>
        </div>

        {/* PRIPOVJEDAČ — si-te: NOVA CSS KLASA */}
        <div className="sc">
          <span className="sc-ico si-te">PRIPOVJEDAČ</span>
          <div className="sc-name">Puškin osobno (u prvom licu)</div>
          <div className="sc-desc">
            Neobično: pripovjedač <em>nije lik niti svesveznajući</em> — on je{' '}
            <b>sam Puškin</b>. Obraća se čitatelju, komentira likove
            („<em>Moj Onjegin…</em>", „<em>Tatjana, voljena Tatjana!</em>"),
            ubacuje digresije o svom životu, Moskvi, književnosti.{' '}
            <b>Puškin kao lik u vlastitom romanu.</b>
          </div>
        </div>

        {/* MJESTO RADNJE — si-re: NOVA CSS KLASA */}
        <div className="sc">
          <span className="sc-ico si-re">MJESTO RADNJE</span>
          <div className="sc-name">SPB · rusko selo · Moskva</div>
          <div className="sc-desc">
            Radnja prati <em>3 lokacije</em>: <b>Sankt-Peterburg</b> (Onjeginov
            dandijski život, I pogl.), <b>rusko selo</b> (imanje strica, Larini,
            II.–VI. pogl.), <b>Moskva</b> (Tatjana kao udana kneginja, VIII. pogl.).
            Vrijeme: 1819.–1825., život ruskog plemstva pred dekabrističkim ustankom.
          </div>
        </div>
      </div>

      {/* Oneginski stih warn box */}
      <div className="box-warn">
        <div className="bw-ico">⚠️</div>
        <div className="bw-body">
          <div className="bw-title">ONEGINSKI STIH — RAZUMJETI FORMU</div>
          <div className="bw-txt">
            <b>Jedinstvena formalna inovacija Puškina.</b> 14-stih koji kombinira
            tri različita rimovna uzorka:<br />
            • Stih 1–4: <em>ukrštena rima AbAb</em> (uvod)<br />
            • Stih 5–8: <em>parna rima CCdd</em> (razrada)<br />
            • Stih 9–12: <em>obgrljena rima EffE</em> (antiteza, obrat)<br />
            • Stih 13–14: <em>završni distih gg</em> (zaključak, poenta, često ironija)<br />
            Meter: <b>jampski tetrametar</b> (4 jampske stope = 8 slogova, ili 9 ako
            je ženska rima). <em>Izmjena muških i ženskih rima</em> (mali slovi = muška,
            velika = ženska). Savršena forma za <em>enciklopedijsku gustoću</em> — svaka
            strofa je minijaturna cjelina, ali ulijeva se u veći narativ.
          </div>
        </div>
      </div>

      {/* ── ONEGINSKA STROFA VIZUALIZACIJA ─────────────────────────── */}
      <div className="oneginski-viz" role="figure"
        aria-label="Vizualizacija oneginske strofe — uvodne strofe romana">
        <div className="oneginski-viz-caption">
          🎼 Oneginska strofa · uvodni stihovi · rimovni uzorak AbAbCCddEffEgg
        </div>

        {[
          { n:'1.', r:'A',   t:'Moj stric, čovjek najčestitijih pravila,' },
          { n:'2.', r:'b',   t:'kad se teško razbolio,', lc:true },
          { n:'3.', r:'A',   t:'izazvao je poštovanje svih oko sebe' },
          { n:'4.', r:'b',   t:'i ništa bolje nije mogao smisliti.', lc:true },
          { n:'5.', r:'c',   t:'Njegov primjer — drugima nauk;', lc:true },
          { n:'6.', r:'c',   t:'Ali, Bože, kakva je dosada', lc:true },
          { n:'7.', r:'d',   t:'sjedjeti noću i dan uz bolesnika,', lc:true },
          { n:'8.', r:'d',   t:'nikada se ne micati daleko!', lc:true },
          { n:'9.', r:'E',   t:'Kakvog li niskog licemjerstva' },
          { n:'10.', r:'f',  t:'zabavljati umirućega,', lc:true },
          { n:'11.', r:'f',  t:'popravljati mu jastuke kraj glave,', lc:true },
          { n:'12.', r:'E',  t:'tugaljivo pružati mu lijekove…' },
          { n:'13.', r:'g',  t:'uzdisati i u sebi misliti:', lc:true },
          { n:'14.', r:'g',  t:'„Kad će te već vrag uzeti!"', lc:true, italic:true },
        ].map(({n, r, t, lc, italic}) => (
          <div className="oneginski-viz-row" key={n}>
            <span className="oneginski-viz-num">{n}</span>
            <span className={`oneginski-viz-rhyme ${r}${lc?' lc':''}`}>{r}</span>
            <span className="oneginski-viz-text">{italic ? <em>{t}</em> : t}</span>
          </div>
        ))}

        <div className="oneginski-viz-legend">
          <span><span className="oneginski-viz-rhyme A" style={{display:'inline-block',padding:'1px 5px'}}>A</span> ženska</span>
          <span><span className="oneginski-viz-rhyme B lc" style={{display:'inline-block',padding:'1px 5px'}}>b</span> muška</span>
          <span>· ukrštena (1–4) · parna (5–8) · obgrljena (9–12) · distih (13–14)</span>
        </div>
      </div>

      {/* ── SEKCIJA 01b: PUŠKINOV ŽIVOT — KRONOLOGIJA ───────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">01b · Puškinov život — kronologija</div>
        <div className="sec-line"></div>
      </div>

      <div className="prose">
        Puškinov život je <em>neodvojiv od ruske povijesti 1799.–1837.</em> —
        napoleonski ratovi, dekabristički ustanak, konflikti s carom, tragični kraj.
        Ključne točke:
      </div>

      <div className="puskin-timeline">
        {[
          { year:'1799', major:true, title:'Rođenje u Moskvi',
            desc:'Plemićka obitelj. Pradjed Abram Petrović Hanibal — afrički princ kojeg je Petar Veliki adoptirao i poslao u Francusku na studij. Puškinovo porijeklo objašnjava egzotičan izgled i osjećaj „outsidera" u ruskoj aristokraciji.' },
          { year:'1811–17', major:false, title:'Carskoselski licej',
            desc:'Elitna škola pokraj Sankt-Peterburga, osnovana za carske sinove. Puškin tu formira politička uvjerenja (liberalizam, antidespotizam) i piše prve pjesme. Druženje s budućim dekabristima.' },
          { year:'1820', major:true, title:'Progonstvo na jug',
            desc:'Car Aleksandar I. protjeruje Puškina zbog političkih pjesama. 4 godine na Kavkazu, Kišinjevu i u Odessi. Tu počinje pisati Evgenija Onjegina (1823.). Utjecaj Byrona na vrhuncu — Južne poeme.' },
          { year:'1824–26', major:false, title:'Mihajlovskoe (obiteljsko imanje)',
            desc:'Novi car Nikolaj I. ga vraća. Puškin piše intenzivno — Boris Godunov, srednja poglavlja Onjegina. 14. 12. 1825. — dekabristički ustanak. Puškinovi prijatelji strijeljani ili protjerani. Puškin bio odsutan — spašen.' },
          { year:'1830', major:true, title:'Boldinska jesen — kreativni vrhunac',
            desc:'U selu Boldinu, karantenom odsječen od svijeta, Puškin u 3 mjeseca piše: završna 2 poglavlja Onjegina, Mali tragedii, Povesti Belkina, ~30 lirskih pjesama. Najproduktivnije razdoblje — poznato kao „Boldinska jesen".' },
          { year:'1831', major:false, title:'Brak s Natalijom Gončarovom · završetak Onjegina',
            desc:'Oženi najljepšu ženu Moskve. Puškin završava Evgenija Onjegina nakon 8 godina. Objavljeno kao cjelina 1833. Natalija će biti razlog finalnog duela.' },
          { year:'1836', major:false, title:'Kapetanova kći · zrelost u prozi',
            desc:'Puškin ulazi u prozu — prvi ruski povijesni roman. Utjecaj Waltera Scotta, ali s puškinskom ironijom. Već realizam u embriju.' },
          { year:'1837', major:true, title:'Smrt u dvoboju (38 god.)',
            desc:'Francuski časnik Georges d\'Anthès zavodi Nataliju. Puškin izaziva na dvoboj. 27. 1. 1837. — pogođen u trbuh. Umire 29. 1. Tragička ironija: Puškin napisao Lenskov duel 14 godina prije svoje smrti.' },
        ].map(ev => (
          <div className="pt-event" key={ev.year}>
            <div className={`pt-date${ev.major?' pt-major':''}`}>{ev.year}</div>
            <div className="pt-body">
              <div className="pt-title">{ev.title}</div>
              <div className="pt-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── SEKCIJA 02: RADNJA PO POGLAVLJIMA ──────────────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">02 · Radnja u 8 poglavlja</div>
        <div className="sec-line"></div>
      </div>

      <div className="prose">
        Roman prati život Evgenija Onjegina, mladog peterburškog plemića, kroz 8
        godina. Od besposlene mladosti u prijestolnici, preko prijateljstva s Lenskim
        i ljubavi prema Tatjani, do tragičnog duela i gorke spoznaje u finalu.
      </div>

      <div className="box-20">
        <div className="b20-lbl">📖 8 poglavlja — struktura radnje</div>
        <ol className="b20-list b20-numbered">
          {[
            { title:'POGLAVLJE I — „Bio je bolestan…"',
              txt:<>
                <em>Sankt-Peterburg.</em> Onjegin, 26 godina, besposleni dendi,
                zasićen balovima i svjetovnim životom. „Čita Byrona", nosi portret
                Byrona u sobi. Stric umire, Onjegin nasljeđuje imanje na selu i odlazi
                tamo. <b>Uvod u „suvišnog čovjeka".</b>
              </> },
            { title:'POGLAVLJE II — Selo i Lenski.',
              txt:<>
                Onjegin se dosađuje na selu. Upoznaje <em>Vladimira Lenskog</em>
                (18 godina, mladi pjesnik-romantičar koji se vratio iz Göttingena),
                i preko njega <em>obitelj Larin</em>. Lenski je zaljubljen u{' '}
                <b>Olgu Larinu</b> (mlađa sestra, površna, vesela). Susreće i{' '}
                <b>Tatjanu Larinu</b> (starija, povučena, zamišljena — čita
                sentimentalne romane).
              </> },
            { title:'POGLAVLJE III — Tatjanino pismo.',
              txt:<>
                <em>Centralni trenutak romana.</em> Tatjana se strastveno zaljubljuje
                u Onjegina. Ne spava noću, piše mu pismo na francuskom —{' '}
                <em>otvoreno priznanje ljubavi</em>. Puškin interpolira pismo kao
                lirsku pjesmu. U selu se priča da će Onjegin oženiti Tatjanu. On
                dolazi s odgovorom.
              </> },
            { title:'POGLAVLJE IV — Hladno odbijanje.',
              txt:<>
                U vrtu Onjegin Tatjanu hladno odbija —{' '}
                <em>„nisam stvoren za brak", „ti ćeš me brzo zaboraviti"</em>.
                Poslovno, moralizirajući, bez topline. Tatjana je duboko povrijeđena.
                U međuvremenu, <b>Lenski i Olga sretniji no ikad</b> — pišu jedno
                drugome, planiraju vjenčanje.
              </> },
            { title:'POGLAVLJE V — Tatjanin imendan i zloslutni san.',
              txt:<>
                Tatjanin rođendan. Prethodne noći sanja{' '}
                <b>zloslutni san</b> — u njemu ju lovi medvjed, Onjegin ju napada
                s nožem, a zatim <em>ubija Lenskog</em>. Na proslavi Onjegin, iz
                dosade i osvete prema Lenskom (koji ga je natjerao doći),{' '}
                <b>cijelu večer pleše s Olgom</b>. Lenski, ljubomoran i povrijeđen,
                izaziva Onjegina na <b>dvoboj</b>.
              </> },
            { title:'POGLAVLJE VI — Duel i smrt Lenskog.',
              txt:<>
                <em>Tragička srednjina romana.</em> Onjegin dolazi kasno, Zareckij
                (sekundant) forsira dvoboj. Obojica bi mogla odustati — ali ponos
                i konvencije ne dopuštaju. <b>Onjegin ubija Lenskog</b>. Puškin
                ironijski nagovještava: „<em>možda bi postao veliki pjesnik — ili
                samo debeli gospodin s podagrom</em>". Onjegin odlazi iz sela na
                putovanje.
              </> },
            { title:'POGLAVLJE VII — Tatjana u Onjeginovoj kući · Moskva.',
              txt:<>
                Godina dana kasnije. Olga se brzo udala za husara. Tatjana ostaje
                u selu. <em>Ulazi u Onjeginovu napuštenu kuću</em> — čita njegove
                knjige (Byron!), shvaća da je{' '}
                <b>Onjegin „parodija, sjena, čovjek bez originalnosti"</b>. Majka
                ju vodi u Moskvu na „tržište nevjesta". Tamo ju primijeti stari
                general — udaje se.
              </> },
            { title:'POGLAVLJE VIII — Finale: Tatjana kao kneginja.',
              txt:<>
                <em>3 godine kasnije.</em> Onjegin se vraća u Sankt-Peterburg,
                na balu vidi <b>Tatjanu kao udanu kneginju</b>, elegantnu,
                dostojanstvenu. <em>Zaljubljuje se u nju — sad on piše njoj pisma.</em>
                Ona ne odgovara. Dolazi u njen salon, pada na koljena. Tatjana ispovijeda
                da ga <em>još voli</em>, ali:{' '}
                „<b>Drugomu sam dana i vjerna ću mu biti zauvijek</b>". Onjegin
                ostaje slomljen. Roman završava otvoreno.
              </> },
          ].map((pg, i) => (
            <li className="b20-item" key={i}>
              <span className="b20-num">{i+1}</span>
              <div className="b20-txt"><b>{pg.title}</b> {pg.txt}</div>
            </li>
          ))}
        </ol>
      </div>

      <div className="box-signal">
        <div className="box-signal-lbl">📍 Struktura romana — zašto ne završava „happy end"</div>
        <div className="box-signal-txt">
          Puškin <em>namjerno obrće klišeje</em>. U tipičnom romantičkom romanu ljubavnici
          bi na kraju bili zajedno. Ovdje: <b>Tatjana koja je prva voljela sad odbija</b>.
          Onjegin, koji je prvi odbio, sad moli. <em>Simetrija ali inverzija.</em> Ovo
          nije slučajno — Puškin pokazuje da je <b>Tatjana moralno superiorna</b> — rast
          kroz bol. Onjegin je ostao isti, samo je sad na drugoj strani.{' '}
          <strong>Otvoren kraj</strong> je prvi u modernom romanu — čitatelj sam zaključuje
          što znači.
        </div>
      </div>

      {/* ── SEKCIJA 03: LIKOVI ─────────────────────────────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">03 · Likovi — tko je tko u Onjeginovoj priči</div>
        <div className="sec-line"></div>
      </div>

      <div className="prose">
        5 ključnih likova — 4 protagonista + Puškin kao pripovjedač. Svaki lik je{' '}
        <em>tip</em> kojeg Puškin istodobno stvara i parodira.
      </div>

      <div className="con">
        {[
          { color:'br', name:'EVGENIJ ONJEGIN', txt:<>
            <b>Protagonist, 26 god.</b> Peterburški dendi iz plemićke obitelji.
            Inteligentan, obrazovan (površno), <em>zasićen životom</em>. Nosi portret
            Byrona, čita Adam Smitha. <b>Arhetip „suvišnog čovjeka"</b> — talentiran ali
            bez svrhe, ciničan, hladan. Odbija Tatjanu hladno, ubije prijatelja u duelu,
            godinama luta — a na kraju pada ponizno. <em>Tatjana ga u VII. poglavlju
            razotkriva kao „parodiju, sjenu"</em> — to je Puškinova kritika byronizma
            kao poze.
          </> },
          { color:'go', name:'TATJANA LARINA', txt:<>
            <b>Puškinov „uzvišeni ideal".</b> Starija Larinova, povučena, zaljubljena
            u Rusoove sentimentalne romane. Sanja romantičku ljubav — nalazi ju u Onjeginu.
            <em>Piše mu otvoreno pismo</em> — rijedak čin hrabrosti za ženu tog doba.
            Nakon odbijanja sazrijeva. U finalu: dostojanstvena, moralno dosljedna.{' '}
            <b>Puškin je voli eksplicitno</b> („<em>Tatjana, voljena Tatjana!</em>").
            Ona je <em>ruska duša, moralna vertikala</em>.
          </> },
          { color:'pa', name:'VLADIMIR LENSKI', txt:<>
            <b>Naivni pjesnik-romantičar, 18 god.</b> Vratio se iz Göttingena pun
            idealističke filozofije (Kant, Schiller). Zaljubljen u Olgu, piše joj
            sentimentalnu poeziju. <em>Antiteza Onjeginu</em> — vjeruje u ljubav,
            prijateljstvo, budućnost. <b>Umire u duelu</b>. Puškin u VI. poglavlju
            ironijski pita: bi li postao veliki pjesnik ili „debeli gospodin s podagrom"?
            — <em>romantizam može ili sazreti u genij, ili propasti u banalnost</em>.
          </> },
          { color:'t', name:'OLGA LARINA', txt:<>
            <b>Površna lepotica, Tatjanina sestra.</b> Vesela, simpatična, ali plitka.
            Zaručena za Lenskog. <em>Ne razumije težinu duela</em> — nakon Lenskove
            smrti brzo se udaje za husara. <b>Antiteza Tatjani</b> — Tatjana kao duboka,
            Olga kao površna; Tatjana vjerna, Olga zaboravlja. Puškin je prikazuje blago
            ironično — ona je „normalna" djevojka, a ne iznimka poput Tatjane.
          </> },
          { color:'re', name:'PUŠKIN KAO PRIPOVJEDAČ', txt:<>
            <b>Sam Puškin kao lik u romanu.</b> Obraća se čitatelju izravno, komentira
            likove, digresira o svom životu. „<em>Moj Onjegin</em>",{' '}
            „<em>moja Tatjana</em>". Kaže da je <b>Lenski ugodniji njegovoj duši,
            a Tatjana voljeniji lik</b>. Razlikuje se od Onjegina — Onjegin ne voli
            prirodu, Puškin ju obožava; Onjegin je cinik, Puškin lirski.{' '}
            <em>Puškinova digresijska poetika</em> je ključna inovacija — prvi puta
            autor priznaje da je u svom djelu.
          </> },
        ].map(lik => (
          <div className="cr" key={lik.name}>
            <div className={`ck ${lik.color}`}>{lik.name}</div>
            <div className="cv">{lik.txt}</div>
          </div>
        ))}
      </div>

      <div className="box-tip">
        <div className="bt-title">💡 4 LIKA — 4 TIPA ROMANTIČARSKE PSIHOLOGIJE</div>
        <div className="bt-txt">
          Puškin stvara <em>cijelu tipologiju</em> romantičkih junaka u jednom djelu:<br />
          <b>1. Onjegin</b> — <em>byronski cinik</em> (demonski, proganjani, hladni)<br />
          <b>2. Lenski</b> — <em>idealistički romantičar</em> (njemačka filozofija, Schiller)<br />
          <b>3. Tatjana</b> — <em>sentimentalna čitateljica</em> (Rousseau, Richardson)
          koja sazrijeva u <em>moralnu vertikalu</em><br />
          <b>4. Olga</b> — <em>nereflektirajuća ljepotica</em> (površno društveno biće)<br />
          Ova 4 tipa će se ponavljati u cijeloj ruskoj književnosti kroz Dostojevskog,
          Tolstoja, Turgenjeva.
        </div>
      </div>

      {/* ── SEKCIJA 04: SUKOBI ─────────────────────────────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">04 · Centralni sukobi — filozofske dileme</div>
        <div className="sec-line"></div>
      </div>

      <div className="prose">
        Onjegin nije samo ljubavna priča. Puškin gradi <em>4 ključna sukoba</em> koji
        čine filozofsku jezgru djela.
      </div>

      <div className="con">
        {[
          { color:'br', name:'SUKOB 1', txt:<>
            <b>Strast vs razum / emocija vs konvencija.</b> Tatjana piše pismo — to
            je strast protiv konvencije (djevojka ne smije prva priznati ljubav).
            Onjegin odbija — razum/cinizam protiv strasti. <em>U finalu obrat</em>:
            Onjegin gubi razum iz ljubavi, Tatjana slijedi moralnu konvenciju iz razuma.{' '}
            <b>Ne pobjeđuje ni strast ni razum — pobjeđuje integritet.</b>
          </> },
          { color:'go', name:'SUKOB 2', txt:<>
            <b>Provincija vs metropola / selo vs Sankt-Peterburg.</b> Onjegin u
            SPB — zasićen, ciničan. Na selu — još dosadnije. Tatjana na selu —
            autentična. U Moskvi/SPB kao kneginja — dostojanstvena, ali ne sretna.
            Puškin se pita: <em>gdje je prava Rusija?</em> Odgovor: u ruskom selu,
            u narodnoj duši koju Tatjana nosi.
          </> },
          { color:'pa', name:'SUKOB 3', txt:<>
            <b>Prijateljstvo vs ponos / čast kao konvencija.</b> Onjegin ne želi
            ubiti Lenskog — ali <em>konvencija duela</em> ga primorava. Zareckij
            (sekundant, profesionalni dueler) ne dopušta odustajanje.{' '}
            <b>Ponos i čast postaju mehanizam smrti.</b> Puškin osuđuje bezumni
            ritual duela — ironija: sam će poginuti u duelu 1837.
          </> },
          { color:'t', name:'SUKOB 4', txt:<>
            <b>Iluzija vs stvarnost / knjiški romantizam vs život.</b> Tatjana
            voli Onjegina jer vidi u njemu junaka iz Rousseaua/Richardsona. Onjegin
            je zapravo „parodija, sjena" (Tatjanin uvid u VII. pogl.). Lenski voli
            Olgu jer je vidi kao anđela iz Schillerove poezije.{' '}
            <b>Romantizam kao iluzija — stvarnost razbija ideale.</b> Ovo je zametak
            realizma u Puškinovom djelu.
          </> },
        ].map(sukob => (
          <div className="cr" key={sukob.name}>
            <div className={`ck ${sukob.color}`}>{sukob.name}</div>
            <div className="cv">{sukob.txt}</div>
          </div>
        ))}
      </div>

      {/* ── SEKCIJA 05: KLJUČNE SCENE ──────────────────────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">05 · Ključne scene — što moraš pamtiti</div>
        <div className="sec-line"></div>
      </div>

      <div className="prose">5 scena koje moraš znati za esej, kviz i citatnik.</div>

      <div className="box-20">
        <div className="b20-lbl">🎬 5 ključnih scena</div>
        <ol className="b20-list b20-numbered">
          {[
            { title:'TATJANINO PISMO (III. poglavlje).', txt:<>
              <em>Centralna scena.</em> Tatjana noću piše Onjeginu pismo na
              francuskom — otvoreno priznanje ljubavi. Puškin interpolira pismo kao
              lirsku pjesmu. „<em>Pišem Vam — što još reći…</em>" Puškin dodaje:
              „<em>Preda mnom leži pismo njeno; ko svetinja mi ono osta</em>".{' '}
              <b>Prva eksplicitna ženska izjava ljubavi u ruskoj književnosti.</b>
            </> },
            { title:'ONJEGINOV ODGOVOR U VRTU (IV. poglavlje).', txt:<>
              Onjegin dolazi Tatjani u vrt i hladno ju odbija: „<em>Nisam stvoren
              za blaženstvo braka</em>", „<em>brzo ćete me zaboraviti</em>". Ironija:
              kasnije će sam padati ničice pred njom. <em>Onjegin kao cinik ovdje
              na vrhuncu</em>.
            </> },
            { title:'TATJANIN SAN (V. poglavlje).', txt:<>
              Prije imendana Tatjana sanja: medvjed ju lovi po šumi, Onjegin je u
              kolibi demona, ubija Lenskog nožem. <em>Zloslutni proročanski san.</em>
              Puškin eksplicitno povezuje san s kasnijim duelom.{' '}
              <b>Jedan od najpoznatijih sanja u svjetskoj književnosti.</b>
            </> },
            { title:'DUEL (VI. poglavlje).', txt:<>
              Rano ujutro, zima, šumski proplanak. Onjegin dolazi kasno (već znak
              nesklada). Zareckij mjeri korake. Lenski puca prvi — promašuje.{' '}
              <b>Onjegin puca — Lenski pada.</b> Puškin lirski opisuje smrt mladog
              pjesnika: „<em>srce probodeno, krv iz grudi</em>". Ironija scene:
              obojica bi mogla odustati.
            </> },
            { title:'FINALNI SUSRET (VIII. poglavlje).', txt:<>
              Onjegin dolazi Tatjani u salon. Pada na koljena. Ona ustaje, drhti.{' '}
              <em>Dug monolog</em>: „<em>Ja vas ljubim (zašto bih lagala?) Ali
              drugomu sam dana i vjerna ću mu biti zauvijek.</em>" Ona izlazi.{' '}
              <b>Onjegin je slomljen</b>. Puškin zatvara: „<em>Ostavimo ga
              zauvijek</em>". Otvoren kraj — romantički klišej obrnut.
            </> },
          ].map((sc, i) => (
            <li className="b20-item" key={i}>
              <span className="b20-num">{i+1}</span>
              <div className="b20-txt"><b>{sc.title}</b> {sc.txt}</div>
            </li>
          ))}
        </ol>
      </div>

      {/* ── SEKCIJA 06: TEME I MOTIVI ──────────────────────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">06 · Teme i motivi</div>
        <div className="sec-line"></div>
      </div>

      <div className="con">
        {[
          { color:'br', name:'SUVIŠAN ČOVJEK', txt:<>
            <b>Glavna tema.</b> Onjegin je <em>prvi „suvišan čovjek"</em> u ruskoj
            književnosti. Talentiran, obrazovan, ali bez svrhe. Ne nalazi mjesta u
            društvu. Ne može voljeti kad bi trebao, voli kad je kasno.{' '}
            <b>Arhetip za Pečorina (Ljermontov), Oblomova (Gončarov), Rudina
            (Turgenjev), Raskoljnikova (Dostojevski)</b>.
          </> },
          { color:'go', name:'LJUBAV I NJEN VREMENSKI POREDAK', txt:<>
            <b>Tema: tajming ljubavi.</b> Tatjana voli Onjegina kad je on ne želi.
            Onjegin voli Tatjanu kad ga ona ne može (više). <em>Ljubav kao pitanje
            trenutka, ne vječnosti.</em> Puškinova ironijska tragika:{' '}
            <b>ljudi se mimoilaze</b>, ne zbog zle volje, nego zbog asimetrije vremena.
          </> },
          { color:'pa', name:'PRIRODA I GODIŠNJA DOBA', txt:<>
            <b>Priroda prati emocije.</b> <em>Ljeto</em> — Tatjanina ljubav buja.{' '}
            <em>Jesen</em> — odbijanje, melankolija. <em>Zima</em> — duel (smrt).{' '}
            <em>Proljeće</em> — Onjeginova preobrazba (prekasno). Puškin je veliki
            pjesnik <em>ruske prirode</em> — šume, polja, snijeg, rijeke. Kontrastira
            Onjeginovoj indiferentnosti prema prirodi.
          </> },
          { color:'t', name:'KNJIGE KAO OGLEDALA LIKOVA', txt:<>
            <b>Puškin karakterizira likove kroz njihovu lektiru.</b> Onjegin čita
            Byrona, Adam Smitha — površno, ciničko čitanje. Tatjana čita Rousseaua
            i Richardsona — sentimentalno, dušom. Lenski čita Schillera i Kanta —
            idealistički. <em>„Reci mi što čitaš, reći ću ti tko si"</em> — Puškinov
            princip.
          </> },
          { color:'re', name:'RUSIJA I NJEN IDENTITET', txt:<>
            <b>Puškin se pita: što je Rusija?</b> Odgovor: <em>Tatjana je Rusija</em>.
            Iako čita francuske romane i piše francuskim pismom, ona je u duši ruska
            — voli zimu, narodne pripovijesti, babicu-dadilju.{' '}
            <b>„Ruska dušom, iako nije znala zašto"</b> — Puškinov stih o Tatjani.
            Djelo utemeljuje tip <em>ruske žene kao čuvara moralnih vrijednosti</em>.
          </> },
        ].map(tema => (
          <div className="cr" key={tema.name}>
            <div className={`ck ${tema.color}`}>{tema.name}</div>
            <div className="cv">{tema.txt}</div>
          </div>
        ))}
      </div>

      {/* ── SEKCIJA 07: ROMANTIČKO DJELO ───────────────────────────── */}
      <div className="sec-hdr">
        <div className="sec-line"></div>
        <div className="sec-badge">07 · Onjegin kao romantičko djelo — i most prema realizmu</div>
        <div className="sec-line"></div>
      </div>

      <div className="prose">
        Evgenij Onjegin je <em>prijelazno djelo</em>. Počinje kao romantička poema
        pod Byronovim utjecajem — završava kao realistički roman.{' '}
        <b>Prva polovica je romantizam, druga realizam.</b> Zato djelo zauzima posebno
        mjesto u povijesti književnosti.
      </div>

      <div className="sg">
        <div className="sc">
          <span className="sc-ico si-br">ROMANTIČKI ELEMENTI</span>
          <div className="sc-name">U djelu</div>
          <div className="sc-desc">
            <b>Byronski junak</b> (Onjegin). <b>Sentimentalna junakinja</b> (Tatjana
            piše pismo). <b>Duel kao romantički topos</b>. <b>Priroda kao ogledalo
            duše</b>. <b>Sanje i natprirodno</b> (Tatjanin san). <b>Lirske
            digresije</b>. <b>Melankolija i weltschmerz</b> kao glavna atmosfera.
          </div>
        </div>
        <div className="sc">
          <span className="sc-ico si-go">REALISTIČKI ELEMENTI</span>
          <div className="sc-name">U djelu</div>
          <div className="sc-desc">
            <b>Psihološka preciznost</b> (Onjeginov razvoj). <b>Kritika društva</b>
            (prazna peterburška aristokracija). <b>Svakodnevica</b> (opisi imenandana,
            balova, ruske kuhinje, odjeće). <b>Razotkrivanje romantičkih iluzija</b>
            (Tatjana uviđa da je Onjegin „parodija"). <b>Otvoreni kraj</b>. Belinski:{' '}
            „<b>enciklopedija ruskog života</b>".
          </div>
        </div>
        <div className="sc">
          <span className="sc-ico si-r">UTJECAJ</span>
          <div className="sc-name">Na kasnije autore</div>
          <div className="sc-desc">
            <b>Gogolj</b> (Mrtve duše — 1842.), <b>Ljermontov</b> (Heroj našeg
            vremena — 1840., Pečorin = drugi Onjegin), <b>Dostojevski</b>
            (Raskoljnikov kao duhovni nasljednik Onjegina —{' '}
            <em>obvezatno čitanje 2026!</em>), <b>Tolstoj</b> (Ana Karenjina —
            kompozicija paralelnih linija naslijeđena je od Puškina), <b>Turgenjev</b>
            (svi „suvišni ljudi"). Bez Onjegina ne postoji ruska književnost 19. st.
          </div>
        </div>
        <div className="sc">
          <span className="sc-ico si-t">ADAPTACIJE</span>
          <div className="sc-name">Opera · film · balet</div>
          <div className="sc-desc">
            Puškinov roman trajni izvor inspiracije — tri glavne adaptacije:<br />
            • <b>Čajkovski — opera „Evgenij Onjegin"</b> (1879.). Najpopularnije rusko
            operno djelo. <em>Tatjanino pismo</em> i <em>Onjeginov monolog</em> —
            operni klasici.<br />
            • <b>Ralph Fiennes — film</b> (1999.). Fiennes kao Onjegin, Liv Tyler kao
            Tatjana.<br />
            • <b>John Cranko — balet</b> (1965.). Stuttgart Ballet. Glazba: Čajkovski
            (ali NE iz opere — orkestracija iz drugih Čajkovskog djela).
          </div>
        </div>
      </div>

      {/* Feature callout — bridge to H07 Dostojevski */}
      <div className="feature-callout" role="complementary">
        <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
          <div style={{flexShrink:0,fontSize:38,lineHeight:1}}>🌉</div>
          <div>
            <div style={{
              fontFamily:'var(--display)',fontSize:15,fontWeight:700,
              color:'var(--bronze-l)',letterSpacing:'.5px',marginBottom:8,
              textTransform:'uppercase'
            }}>
              Zašto je ovo bitno za maturu 2026
            </div>
            <div style={{fontFamily:'var(--serif)',fontSize:13.5,color:'var(--t2)',lineHeight:1.7}}>
              <strong>Puškinov Onjegin je genetski predak Dostojevskog Raskoljnikova</strong>
              {' '}— a <em>Zločin i kazna</em> je{' '}
              <b>obvezatno ispitno čitanje 2026</b>. U eseju o Dostojevskom možeš
              citirati Onjegina kao prvo izvorište „suvišnog čovjeka" u ruskoj
              književnosti.<br /><br />
              <em>Linija razvoja:</em> Werther (osjećajni individualac, H05) →{' '}
              <b>Onjegin (ciničan, dosadan plemić, H06)</b> → Pečorin (Ljermontov)
              → Oblomov (Gončarov) → <b>Raskoljnikov (krivi, idealist-ubojica, H07)</b>.
              Isti psihološki arhetip kroz 80 godina — svaki sljedeći dublji i tamniji.
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-row">
        <span className="nb" onClick={onPrev}>← Teorija</span>
        <span className="nb primary" onClick={onNext}>✍ Esej alat →</span>
      </div>

    </div>
  );
}
