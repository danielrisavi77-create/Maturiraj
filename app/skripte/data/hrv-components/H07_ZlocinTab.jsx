/**
 * H07_ZlocinTab.jsx
 * Maturiraj.hr — Hrvatski H07 · Tab 1: Zločin i kazna (deep-dive)
 *
 * SELF-CONTAINED — CSS ugrađen, bez ručnog kopiranja.
 * Interaktivni grafikon likova + Porfirij tabovi konvertirani u React useState.
 *
 * Integrirano u poglavlje07.jsx kao React portal u <div id="l1">.
 * Vidljivost (show/hide) kontrolira vanilla JS sw() funkcija iz SCRIPTS_JS.
 */

'use client';

import { useState } from 'react';
import {
  HeroQuoteRaskoljnikov,
  StatCardsZlocin,
  SVGRaskoljnikovArc,
  AccordionKompozicija,
  AccordionKljucneSceneH07,
  SVGLikoviZlocin,
  SVGNadcovjek,
  SimboliGrid,
  UsporedbaRaskoljnikovOnjegin,
} from './H07_Components';

// ─── PODACI GRAFIKONA LIKOVA ────────────────────────────────────────────────
const REL_INFO = {
  raskolj: {
    name: 'Rodion Raskoljnikov',
    desc: 'Protagonist. 23 godine, bivši student prava. Autor teorije nadčovjeka. Ubija Alonu i Lizavetu. Prolazi kroz paranoju, priznaje Sonji, predaje se, ide u Sibir — iskupljenje.'
  },
  sonja: {
    name: 'Sonja Marmeladova',
    desc: 'Moralna vertikala. 18 godina, prostitutka iz nužde, pravoslavna. Čita Raskoljnikovu evanđelje (uskrsnuće Lazara). Zove ga na pokoru („Pati — to je put"). Prati ga u Sibir.'
  },
  porfirije: {
    name: 'Porfirij Petrovič',
    desc: 'Istražitelj. Zna od početka — kroz 3 psihološka susreta vodi Raskoljnikova do priznanja. Intelektualni dvojnik. Savjetuje: sam se predaj — dobit ćeš blaže.'
  },
  svidri: {
    name: 'Svidrigajlov',
    desc: 'Cinični dvojnik Raskoljnikovljev — ista filozofija, bez grižnje savjesti. Bivši Dunjin poslodavac. Ucjenjuje je. Pokušaj silovanja. Ubija se na mostu — njegov kraj je što bi R. bio bez Sonje.'
  },
  dunja: {
    name: 'Avdotja „Dunja" Raskoljnikova',
    desc: 'Raskoljnikovljeva sestra. Pristaje na brak s Lužinom zbog brata. Gađa Svidrigajlova pistoljem. Udaje se za Razumihina. Paralela Sonji — aktivna moralnost.'
  },
  razumihin: {
    name: 'Dmitrij Razumihin',
    desc: 'Raskoljnikovljev odani prijatelj, student. Ime od rus. razum. Zdrav, radišan — antiteza Raskoljnikovu. Ženi se Dunjom. Alternativa teoriji nadčovjeka.'
  },
  marmeladov: {
    name: 'Semjon Marmeladov',
    desc: 'Sonjin otac. Bivši činovnik, propio se. Pijani monolog u kafani otvara roman. Umire pregažen konjima. Simbol sloma dostojanstva pod siromaštvom.'
  },
  katerina: {
    name: 'Katerina Ivanovna',
    desc: 'Sonjina maćeha. Nekad plemkinja, sada tuberkuloza i bijeda. Nagovara Sonju na žutu karticu. Umire na ulici iskašljujući krv — „Umrijet ću kao pas!"'
  },
  alona: {
    name: 'Alona Ivanovna + Lizaveta',
    desc: 'Žrtve zločina. Alona — škrta lihvarica (planirana žrtva). Lizaveta — njena krotka polusestra (neplanirana, Sonjina prijateljica). Dvije žrtve: Raskoljnikov nije računao s nevinim životom.'
  },
};

// ─── PORFIRIJ DATA ───────────────────────────────────────────────────────────
const PORF_DATA = {
  1: {
    title: 'I. susret — Razumihinov stan (II. dio)',
    body: 'Raskoljnikov po prvi put susreće Porfirija u stanu kod Razumihina. Situacija je naoko <em>slučajna</em> — Porfirij je navodno došao Razumihinu kao prijatelj. <b>Zapravo se već informirao</b> o Raskoljnikovljevom članku „O zločinu". Tijekom običnog razgovora <em>podbada</em> ga s navodno „nevinim" pitanjima o teoriji. R. je oprezan, <b>ali već upadne u dijalog</b> — ne može odoljeti filozofskoj raspravi. Porfirij <em>sluša, smije se, i tiho sprema hvataljku</em>.',
    quote: '„Ah, vaš je članak toliko zanimljiv, gospodine Raskoljnikov, toliko zanimljiv…"',
    takeaway: '<b>Funkcija:</b> ekspozicija — Porfirij uspostavlja da zna R.-ovu teoriju. <b>Psihološki pritisak:</b> R. shvaća da njegov tekst <em>više nije privatni</em>. Prvi trag u istrazi.'
  },
  2: {
    title: 'II. susret — Policijska postaja (III. dio)',
    body: 'Raskoljnikov sam dolazi k Porfirija. <em>Misli da kontrolira situaciju</em> — da će odigrati „obranu". Porfirij postavlja klopku: <b>pretvara se da je nesiguran u svoje zaključke</b>, citira R.-ov članak naglas, provocira ga protivargumentima. R. je <b>bijesan</b>, jer vidi da Porfirij zna. Unutarnji monolog: <em>„Zna! Sve zna! Ali ne može dokazati."</em> Porfirij izvlači temu o <em>zvonu</em> — priča priču o njemu da ga destabilizira. Na kraju se pojavi <b>Mikolka</b> koji „priznaje" ubojstvo — R. je zbunjen.',
    quote: '„Rečem vam, naš čovjek je mladi, bolestan, pročitao knjigu — pa sad je vjerovao da je Napoleon."',
    takeaway: '<b>Funkcija:</b> intelektualni dvoboj — Porfirij kao <em>dvojnik R.-ovog razuma</em>. <b>Psihološki pritisak:</b> R. gubi iluziju kontrole. Mikolkino priznanje = <em>red herring</em> koji Porfirij koristi za daljnji pritisak.'
  },
  3: {
    title: 'III. susret — Raskoljnikovljev stan (IV. dio)',
    body: 'Porfirij <em>dolazi k Raskoljnikovu</em> — obrat. Više nema pretvaranja. <b>Porfirij priznaje: znam da si ti ubojica</b>, ali nemam dovoljno dokaza za osudu. Zatim savjetuje: <em>„Predajte se sami. Dobit ćete lakšu kaznu. Patnja je velika stvar."</em> Nudi <b>psihološki spas</b>, ne pravni. R. je šokiran — Porfirij je <em>suviše ljudski</em>, suviše blizak. Ovaj susret <b>priprema R. za Sonjin poziv na predaju</b> u V. dijelu.',
    quote: '„Vi ste ubili, Rodion Romanoviču. Ali predajte se — dobit ćete blaže. Ja vam savjetujem. Patnja je velika stvar."',
    takeaway: '<b>Funkcija:</b> pragmatični očinski savjet — Porfirij kao <em>sekularni savjetnik paralelno Sonji (duhovnom)</em>. <b>Psihološki pritisak:</b> nestao, zamijenjen <em>razumijevanjem</em>. R. je razoružan. Put do predaje otvoren.'
  }
};

// ─── CSS (self-contained) ────────────────────────────────────────────────────
const H07_CSS = `
.rel-graph{margin:28px 0 20px;padding:24px 20px;background:#2A1612;border:1px solid rgba(220,50,47,.18);border-radius:12px;position:relative}
.rel-graph-hdr{display:flex;align-items:baseline;gap:10px;margin-bottom:18px;flex-wrap:wrap}
.rel-graph-ttl{font-family:Georgia,serif;font-size:13px;font-weight:700;color:#FF5A54;letter-spacing:1.5px;text-transform:uppercase}
.rel-graph-sub{font-family:Georgia,'Times New Roman',serif;font-size:12.5px;color:#6B5A4E;font-style:italic}
.rel-svg-wrap{width:100%;max-width:560px;margin:0 auto;position:relative;aspect-ratio:560/420}
.rel-svg{width:100%;height:100%;display:block}
.rel-node{cursor:pointer;transition:transform .18s}
.rel-node:hover{transform:scale(1.08);transform-origin:center}
.rel-node-bg{fill:#2A1612;stroke:rgba(220,50,47,.18);stroke-width:1.5;transition:all .18s}
.rel-node.active .rel-node-bg,.rel-node:hover .rel-node-bg{stroke-width:2.5;filter:drop-shadow(0 0 8px rgba(220,50,47,.25))}
.rel-node[data-char="raskolj"] .rel-node-bg{fill:rgba(192,66,68,.10);stroke:#E06264}
.rel-node[data-char="sonja"] .rel-node-bg{fill:rgba(232,201,122,.09);stroke:#E8C97A}
.rel-node[data-char="porfirije"] .rel-node-bg{fill:rgba(107,142,127,.09);stroke:#6B8E7F}
.rel-node[data-char="svidri"] .rel-node-bg{fill:rgba(107,85,85,.2);stroke:#8b7878}
.rel-node[data-char="dunja"] .rel-node-bg{fill:rgba(107,148,100,.09);stroke:#8BB584}
.rel-node[data-char="razumihin"] .rel-node-bg{fill:rgba(107,148,100,.09);stroke:#8BB584}
.rel-node[data-char="marmeladov"] .rel-node-bg{fill:rgba(201,168,120,.15);stroke:#c9a878}
.rel-node[data-char="katerina"] .rel-node-bg{fill:rgba(201,168,120,.15);stroke:#c9a878}
.rel-node[data-char="alona"] .rel-node-bg{fill:rgba(107,85,85,.15);stroke:#6b5555}
.rel-node-label{font-family:'Fira Code',Consolas,monospace;font-size:9.5px;font-weight:700;fill:#F5E6D3;text-anchor:middle;pointer-events:none;letter-spacing:.3px}
.rel-edge{stroke:rgba(220,50,47,.18);stroke-width:1.2;fill:none;transition:stroke .2s,stroke-width .2s;opacity:.7}
.rel-edge.love{stroke:#E8C97A;stroke-width:1.5}
.rel-edge.kill{stroke:#C04244;stroke-width:1.5;stroke-dasharray:4 3}
.rel-edge.double{stroke:#a88;stroke-width:1.5;stroke-dasharray:6 3}
.rel-edge.family{stroke:#6B9464;stroke-width:1.3}
.rel-edge.hunt{stroke:#6B8E7F;stroke-width:1.5;stroke-dasharray:2 2}
.rel-edge.marry{stroke:#8BB584;stroke-width:2}
.rel-edge-label{font-family:'Fira Code',Consolas,monospace;font-size:7.5px;fill:#6B5A4E;text-anchor:middle;letter-spacing:.5px;text-transform:uppercase;pointer-events:none}
.rel-panel{margin-top:14px;padding:14px 16px;background:#20100D;border:1px solid rgba(220,50,47,.18);border-radius:8px;min-height:56px;transition:all .2s}
.rel-panel-empty{font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#6B5A4E;font-style:italic;text-align:center;padding:8px 0}
.rel-panel-name{font-family:Georgia,serif;font-size:14px;font-weight:700;color:#FF5A54;margin-bottom:6px;letter-spacing:.4px}
.rel-panel-desc{font-family:Georgia,'Times New Roman',serif;font-size:13px;color:#B09684;line-height:1.55}
.rel-legend{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px;padding-top:12px;border-top:1px solid rgba(220,50,47,.18);font-family:'Fira Code',Consolas,monospace;font-size:9px;color:#6B5A4E;letter-spacing:.5px;text-transform:uppercase}
.rel-legend-item{display:inline-flex;align-items:center;gap:5px}
.rel-legend-line{display:inline-block;width:18px;height:2px;border-radius:1px}
.porf-box{margin:26px 0 20px;padding:22px 20px;background:#2A1612;border:1px solid rgba(220,50,47,.18);border-radius:12px}
.porf-hdr{display:flex;align-items:baseline;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.porf-ttl{font-family:Georgia,serif;font-size:13px;font-weight:700;color:#6B8E7F;letter-spacing:1.5px;text-transform:uppercase}
.porf-sub{font-family:Georgia,'Times New Roman',serif;font-size:12.5px;color:#6B5A4E;font-style:italic}
.porf-tabs{display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap}
.porf-tab{flex:1;min-width:150px;padding:12px 14px;background:#20100D;border:1px solid rgba(220,50,47,.18);border-radius:8px;cursor:pointer;transition:all .18s;text-align:left;font-family:Georgia,'Times New Roman',serif;color:#B09684;line-height:1.45}
.porf-tab:hover{border-color:rgba(107,142,127,.22);color:#F5E6D3}
.porf-tab.on{background:rgba(107,142,127,.09);border-color:#6B8E7F;color:#F5E6D3;box-shadow:0 2px 12px rgba(91,192,190,.15)}
.porf-tab-num{display:inline-block;width:22px;height:22px;border-radius:50%;background:#0F0605;color:#6B5A4E;font-family:'Fira Code',Consolas,monospace;font-size:10px;font-weight:700;text-align:center;line-height:22px;margin-right:8px;border:1px solid rgba(220,50,47,.18);vertical-align:middle}
.porf-tab.on .porf-tab-num{background:#6B8E7F;color:#0F0605;border-color:#6B8E7F}
.porf-tab-ttl{font-size:12.5px;font-weight:700;font-family:Georgia,serif;display:inline;letter-spacing:.3px}
.porf-tab-when{display:block;margin-top:3px;margin-left:30px;font-family:'Fira Code',Consolas,monospace;font-size:9px;color:#6B5A4E;letter-spacing:.5px;text-transform:uppercase}
.porf-content{padding:16px 18px;background:#180A08;border:1px solid rgba(220,50,47,.18);border-radius:8px;min-height:140px;font-family:Georgia,'Times New Roman',serif;color:#B09684;line-height:1.7;font-size:13.5px}
.porf-content-ttl{font-family:Georgia,serif;font-size:13px;font-weight:700;color:#6B8E7F;letter-spacing:.5px;margin-bottom:8px;text-transform:uppercase}
.porf-content-body{margin-bottom:0}
.porf-content-body em{color:#F5E6D3}
.porf-content-quote{margin-top:12px;padding:10px 14px;background:#2A1612;border-left:2px solid #DC322F;border-radius:0 8px 8px 0;font-family:'EB Garamond',Georgia,serif;font-style:italic;color:#F5E6D3;font-size:14px;line-height:1.55}
.porf-content-takeaway{margin-top:10px;padding:8px 12px;background:rgba(232,201,122,.09);border:1px solid rgba(232,201,122,.26);border-radius:8px;font-family:'Fira Code',Consolas,monospace;font-size:10.5px;color:#E8C97A;letter-spacing:.3px;line-height:1.55}
.porf-content-takeaway b{color:#f5e0a0}
@media(max-width:600px){
  .rel-graph{padding:16px 10px}
  .rel-node-label{font-size:8.5px}
  .rel-edge-label{font-size:6.5px}
  .porf-tab{min-width:120px;padding:10px 11px}
}
`;

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function callSw(n) {
  if (typeof window !== 'undefined' && typeof window.sw === 'function') {
    window.sw(n);
  }
}

// ─── KOMPONENTA ─────────────────────────────────────────────────────────────
export default function H07ZlocinTab({ onPrev, onNext }) {
  const [activeChar, setActiveChar] = useState(null);
  const [activePorf, setActivePorf] = useState(1);

  const handlePrev = onPrev || (() => callSw(0));
  const handleNext = onNext || (() => callSw(2));

  function selectChar(key) {
    setActiveChar(prev => prev === key ? null : key);
  }

  function makeNodeProps(key, label) {
    return {
      className: activeChar === key ? 'rel-node active' : 'rel-node',
      'data-char': key,
      onClick: () => selectChar(key),
      onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectChar(key); } },
      tabIndex: 0,
      role: 'button',
      'aria-label': label,
    };
  }

  const porf = PORF_DATA[activePorf];

  return (
    <>
      <style>{H07_CSS}</style>

      <div className="tags">
        <span className="pill p-br">obvezatno 2026</span>
        <span className="pill p-go">psihološki roman</span>
        <span className="pill p-r">6 dijelova + epilog</span>
        <span className="pill p-t">Raskoljnikov · Sonja · Porfirije</span>
      </div>

      <div className="box-int">
        <div className="box-int-lbl">📖 Zašto Zločin i kazna zaslužuje deep dive</div>
        <div className="box-int-txt">
          <strong>Zločin i kazna</strong> (1866.) je <em>obvezatno čitanje za maturu 2026.</em> Ispit će provjeriti znanje <b>likova</b>, <b>kompozicije (6 dijelova + epilog)</b>, <b>teorije nadčovjeka</b>, <b>simbolike broja 7</b>, <b>Sonjine uloge</b>, <b>kraja (iskupljenje)</b>. Ovo je <em>najvažniji tab cijelog H07</em>. Budi siguran da znaš: zašto Raskoljnikov ubija, što mu Porfirije kaže u 3 susreta, kako Sonja čita Bibliju, zašto se predaje, kako završava roman.
        </div>
      </div>

      <HeroQuoteRaskoljnikov />

      {/* SEC 01 — Kompozicija */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">01 · Kompozicija — 6 dijelova + Epilog</div><div className="sec-line"></div></div>

      <StatCardsZlocin />
      <SVGRaskoljnikovArc />

      <AccordionKompozicija />
      <AccordionKljucneSceneH07 />


      {/* SEC 02 — Glavni likovi */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">02 · Glavni likovi — karakterizacija</div><div className="sec-line"></div></div>

      <SVGLikoviZlocin />

      <div className="sc-grid">
        <div className="sc">
          <span className="sc-ico hchip br">PROTAGONIST</span>
          <div className="sc-name">Rodion Romanovič Raskoljnikov</div>
          <div className="sc-desc">23 godine, bivši student prava. Napustio studij zbog siromaštva. Bolestan, iscrpljen, intelektualno arogantan. Piše članak <em>„O zločinu&quot;</em> — teorija o „običnim&quot; i „neobičnim&quot; ljudima (tj. nadčovjecima). Ubija iz kombinacije <b>utilitarne logike</b> (pomoći siromasima) i <b>intelektualnog eksperimenta</b> („jesam li Napoleon ili vaš?&quot;). Nakon ubojstva: paranoja, samoća, grižnja. Ime od rus. <em>raskoljnik</em> = <b>raskolnik, skizmatik</b>.</div>
        </div>

        <div className="sc">
          <span className="sc-ico hchip go">MORALNA VERTIKALA</span>
          <div className="sc-name">Sonja Semjonovna Marmeladova</div>
          <div className="sc-desc">18 godina. Kći pijanca Marmeladova. <em>Žuta kartica</em> — prisiljena na prostituciju da prehrani obitelj (Katerina Ivanovna + 3 polubrata). Duboko <b>pravoslavna</b>. Raskoljnikovu čita <em>Evanđelje po Ivanu — uskrsnuće Lazara</em>. Njen poziv: <em>„Pati — to je put.&quot;</em> <b>Simbol kršćanske ljubavi i iskupljenja.</b> Slijedi Raskoljnikova u Sibir. <em>Moralna vertikala romana</em> (<b>paralela s Tatjanom iz H06 Onjegina</b> — obje moralne vertikale kroz žrtvu).</div>
        </div>

        <div className="sc">
          <span className="sc-ico hchip t">ISTRAŽITELJ</span>
          <div className="sc-name">Porfirij Petrovič</div>
          <div className="sc-desc">Istražitelj u policiji. Lukav, psihološki profinjen. <em>Zna da je Raskoljnikov ubojica</em> već od prvog susreta, ali nema dokaz. Igra <b>mačke i miša</b> kroz 3 susreta — provocira, citira Raskoljnikovljev članak, postavlja pitanja. U 3. susretu savjetuje da se <em>sam preda</em> — dobit će lakšu kaznu. <b>Jedini lik s kojim Raskoljnikov vodi intelektualni dvoboj</b>.</div>
        </div>

        <div className="sc">
          <span className="sc-ico hchip re">DVOJNIK</span>
          <div className="sc-name">Arkadij Svidrigajlov</div>
          <div className="sc-desc">Oko 50 godina, bivši poslodavac Dunje. <em>Proganja je.</em> Cinik, razvratnik, možda je otrovao svoju ženu Marfu Petrovnu. <b>Raskoljnikovljev dvojnik</b> — također „nadčovjek&quot; po logici, ali <em>bez moralne grižnje</em>. Prisluškuje Sonju kad R. priznaje — pokušava ucijeniti Dunju. Dunja ga gađa pistoljem, promašuje. Svidrigajlov — svjesan da je gotov — <b>ubija se na mostu</b>. Njegov kraj = <em>što bi se Raskoljnikovu dogodilo bez Sonje</em>.</div>
        </div>

        <div className="sc">
          <span className="sc-ico hchip pa">SESTRA</span>
          <div className="sc-name">Avdotja Romanovna „Dunja&quot; Raskoljnikova</div>
          <div className="sc-desc">Raskoljnikovljeva sestra. Lijepa, ponosna, obrazovana. Namjerava se udati za <b>Petra Petroviča Lužina</b> (odvjetnik, koristoljubiv, želi ženu „podređenu&quot;) <em>samo radi brata</em> — da osigura njegov studij. Raskoljnikov odbija tu žrtvu. Dunja raskida s Lužinom. Na kraju se udaje za <b>Razumihina</b> (R.-ov odani prijatelj). Paralela Sonji: <em>obje žrtvuju sebe za druge</em>.</div>
        </div>

        <div className="sc">
          <span className="sc-ico hchip br">PRIJATELJ</span>
          <div className="sc-name">Dmitrij Prokofjič Razumihin</div>
          <div className="sc-desc">Student, Raskoljnikovljev odani prijatelj. <b>Razum</b> (ruski <em>razum</em> = razum, pamet) — u imenu. Zdrav, radišan, veseo — <em>antiteza Raskoljnikovu</em>. Brine o njemu dok je bolestan. Na kraju se ženi Dunjom. Predstavlja <b>alternativu</b>: što bi Raskoljnikov mogao biti bez teorije nadčovjeka.</div>
        </div>

        <div className="sc">
          <span className="sc-ico hchip go">MUČENICA</span>
          <div className="sc-name">Katerina Ivanovna Marmeladova</div>
          <div className="sc-desc">Sonjina maćeha, druga žena pijanca Marmeladova. Nekad plemkinja, obrazovana, sada živi u ekstremnoj bijedi s <em>tuberkulozom</em>. Ponosna, ludi pomalo od siromaštva. Nagovara Sonju na „žutu karticu&quot; kad više nema što za jelo. <em>Na kraju ludi, iskašljava krv</em>, umire na ulici. Simbol <b>sloma dostojanstva pod bijedom</b>.</div>
        </div>

        <div className="sc">
          <span className="sc-ico hchip re">ŽRTVA</span>
          <div className="sc-name">Alona Ivanovna i Lizaveta</div>
          <div className="sc-desc"><b>Alona</b> — lihvarica, škrta, okrutna prema sestri. Raskoljnikov je vidi kao <em>„štetnu vaš&quot;</em> — ubija je sjekirom. <b>Lizaveta</b> — njena polusestra, dobra, krotka, jednostavno duhovna. Neplanirana žrtva — Raskoljnikov ju ubija jer ga je vidjela. <em>Dvije žrtve</em> = ubijajući Alonu, ubio je i nevin život. <b>Lizaveta i Sonja su bile prijateljice</b> — ironična koincidencija.</div>
        </div>
      </div>

      {/* RELATION GRAPH — interaktivna karta odnosa */}
      <div className="rel-graph">
        <div className="rel-graph-hdr">
          <span className="rel-graph-ttl">🕸 Karta odnosa</span>
          <span className="rel-graph-sub">Klikni na lik za kratki opis — pomoć pri pamćenju strukture romana</span>
        </div>
        <div className="rel-svg-wrap">
          <svg className="rel-svg" viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="relgTitle">
            <title id="relgTitle">Karta odnosa likova u Zločinu i kazni</title>

            {/* EDGES */}
            <line className="rel-edge love"   x1="280" y1="210" x2="165" y2="100"/>
            <text className="rel-edge-label"  x="216"  y="152">ljubav</text>
            <line className="rel-edge hunt"   x1="280" y1="210" x2="395" y2="100"/>
            <text className="rel-edge-label"  x="344"  y="152">istraga</text>
            <line className="rel-edge double" x1="280" y1="210" x2="460" y2="270"/>
            <text className="rel-edge-label"  x="376"  y="234">dvojnik</text>
            <line className="rel-edge family" x1="280" y1="210" x2="100" y2="270"/>
            <text className="rel-edge-label"  x="188"  y="234">brat/sestra</text>
            <line className="rel-edge kill"   x1="280" y1="210" x2="280" y2="360"/>
            <text className="rel-edge-label"  x="296"  y="290">ubija</text>
            <line className="rel-edge family" x1="165" y1="100" x2="55"  y2="80"/>
            <text className="rel-edge-label"  x="108"  y="78">kći</text>
            <line className="rel-edge family" x1="55"  y1="80"  x2="55"  y2="170"/>
            <line className="rel-edge hunt"   x1="460" y1="270" x2="100" y2="270"/>
            <text className="rel-edge-label"  x="280"  y="262">proganja</text>
            <line className="rel-edge marry"  x1="100" y1="270" x2="100" y2="355"/>
            <text className="rel-edge-label"  x="130"  y="316">ženi se</text>

            {/* NODES */}
            <g {...makeNodeProps('raskolj', 'Raskoljnikov')}>
              <circle className="rel-node-bg" cx="280" cy="210" r="42"/>
              <text className="rel-node-label" x="280" y="205">RASKOLJ-</text>
              <text className="rel-node-label" x="280" y="218">NIKOV</text>
            </g>
            <g {...makeNodeProps('sonja', 'Sonja')}>
              <circle className="rel-node-bg" cx="165" cy="100" r="34"/>
              <text className="rel-node-label" x="165" y="104">SONJA</text>
            </g>
            <g {...makeNodeProps('porfirije', 'Porfirij')}>
              <circle className="rel-node-bg" cx="395" cy="100" r="34"/>
              <text className="rel-node-label" x="395" y="104">PORFIRIJ</text>
            </g>
            <g {...makeNodeProps('svidri', 'Svidrigajlov')}>
              <circle className="rel-node-bg" cx="460" cy="270" r="36"/>
              <text className="rel-node-label" x="460" y="267">SVIDRI-</text>
              <text className="rel-node-label" x="460" y="278">GAJLOV</text>
            </g>
            <g {...makeNodeProps('dunja', 'Dunja')}>
              <circle className="rel-node-bg" cx="100" cy="270" r="30"/>
              <text className="rel-node-label" x="100" y="274">DUNJA</text>
            </g>
            <g {...makeNodeProps('razumihin', 'Razumihin')}>
              <circle className="rel-node-bg" cx="100" cy="380" r="30"/>
              <text className="rel-node-label" x="100" y="377">RAZUMI-</text>
              <text className="rel-node-label" x="100" y="388">HIN</text>
            </g>
            <g {...makeNodeProps('marmeladov', 'Marmeladov')}>
              <circle className="rel-node-bg" cx="55" cy="80" r="26"/>
              <text className="rel-node-label" x="55" y="77">MARME-</text>
              <text className="rel-node-label" x="55" y="88">LADOV</text>
            </g>
            <g {...makeNodeProps('katerina', 'Katerina')}>
              <circle className="rel-node-bg" cx="55" cy="170" r="26"/>
              <text className="rel-node-label" x="55" y="167">KATE-</text>
              <text className="rel-node-label" x="55" y="178">RINA</text>
            </g>
            <g {...makeNodeProps('alona', 'Alona i Lizaveta')}>
              <circle className="rel-node-bg" cx="280" cy="385" r="28"/>
              <text className="rel-node-label" x="280" y="382">ALONA +</text>
              <text className="rel-node-label" x="280" y="393">LIZAVETA</text>
            </g>
          </svg>
        </div>

        <div className="rel-panel">
          {activeChar
            ? (<><div className="rel-panel-name">{REL_INFO[activeChar]?.name}</div><div className="rel-panel-desc">{REL_INFO[activeChar]?.desc}</div></>)
            : (<div className="rel-panel-empty">↑ Klikni na bilo koji lik za kratki opis njegove uloge u romanu</div>)
          }
        </div>

        <div className="rel-legend">
          <span className="rel-legend-item"><span className="rel-legend-line" style={{background:'#E8C97A'}}></span>ljubav</span>
          <span className="rel-legend-item"><span className="rel-legend-line" style={{background:'#6B8E7F',backgroundImage:'repeating-linear-gradient(90deg,#6B8E7F 0,#6B8E7F 2px,transparent 2px,transparent 4px)'}}></span>lov/istraga</span>
          <span className="rel-legend-item"><span className="rel-legend-line" style={{background:'#a88',backgroundImage:'repeating-linear-gradient(90deg,#a88 0,#a88 6px,transparent 6px,transparent 9px)'}}></span>dvojnik</span>
          <span className="rel-legend-item"><span className="rel-legend-line" style={{background:'#6B9464'}}></span>obitelj</span>
          <span className="rel-legend-item"><span className="rel-legend-line" style={{background:'#C04244',backgroundImage:'repeating-linear-gradient(90deg,#C04244 0,#C04244 4px,transparent 4px,transparent 7px)'}}></span>ubija</span>
          <span className="rel-legend-item"><span className="rel-legend-line" style={{background:'#8BB584',height:'3px'}}></span>brak</span>
        </div>
      </div>

      {/* SEC 03 — Teorija nadčovjeka */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">03 · Teorija nadčovjeka — Raskoljnikovljev članak</div><div className="sec-line"></div></div>

      <div className="box-int">
        <div className="box-int-lbl">💡 „O zločinu&quot; — Raskoljnikovljev esej</div>
        <div className="box-int-txt">
          Raskoljnikov je <em>pol godine prije ubojstva</em> objavio članak <b>„O zločinu&quot;</b> u časopisu. U članku tvrdi: <em>ljudi se dijele na „obične&quot; (većina) i „neobične&quot; (nadčovjeci)</em>. Nadčovjeci imaju pravo <b>prekršiti zakon i moralne norme</b> ako vjeruju da time služe višem cilju. Primjeri: Napoleon, Muhamed, Newton. <em>„Napoleon je preko trupa prešao do svoje ideje — i sad ga zovemo velikim.&quot;</em> Raskoljnikov primjenjuje tu logiku na sebe: <b>„Jesam li ja vaš ili sam Napoleon?&quot;</b>
        </div>
      </div>

      <SVGNadcovjek />

      <div className="tbl">
        <div className="cr"><div className="ck br">UTILITARNI ARGUMENT</div><div className="cv"><em>„Lihvarica Alona je parazit — sisa krv siromasima. Ako je ubijem, imam njen novac → mogu nastaviti studij → mogu služiti društvu. Jedan zločin = stotinu dobrih djela.&quot;</em> Utilitarna matematika: 1 loš život &lt; 100 spašenih.</div></div>
        <div className="cr"><div className="ck go">INTELEKTUALNI ARGUMENT</div><div className="cv"><em>„Je li zakon apsolutan? Ili je napravljen samo za obične ljude?&quot;</em> Raskoljnikov želi <b>testirati sebe</b> — je li nadčovjek ili nije. Ubojstvo nije samo čin, nego <em>filozofski eksperiment</em>.</div></div>
        <div className="cr"><div className="ck t">POSTNAPOLEONSKI KOMPLEKS</div><div className="cv">Raskoljnikov pri kraju priznaje Sonji: <em>„Želio sam biti Napoleon — to je sve.&quot;</em> Zločin nije bio za novac (nije ga ni iskoristio), nego <b>za samopotvrdu</b>. Kad shvati da je <em>obični ubojica</em>, a ne nadčovjek, slama se.</div></div>
        <div className="cr"><div className="ck re">DOSTOJEVSKIJEV ODGOVOR</div><div className="cv"><b>Teorija ne funkcionira.</b> Raskoljnikov <em>psihološki ne može</em> nositi ubojstvo — savjest ga savladava. Čak i nadčovjek ima dušu koja se buni. <em>Čovjek nije samo intelekt</em> — ima osjećaje, vjeru, grižnju. Odbacivanjem moralnih normi, uništava i sebe (Svidrigajlov = self-destruct).</div></div>
        <div className="cr"><div className="ck pa">NIETZSCHEOVA VEZA</div><div className="cv"><b>Raskoljnikovljeva teorija anticipira Nietzscheovog Übermensch-a</b> (<em>„Tako je govorio Zaratustra&quot;</em>, 1883.). Ironija: Nietzsche je bio obožavatelj Dostojevskog („najdublji psiholog&quot;). <em>Dostojevski kritizira nadčovjeka PRIJE nego ga Nietzsche formulira.</em></div></div>
      </div>

      {/* 3 PORFIRIJEVA SUSRETA */}
      <div className="porf-box">
        <div className="porf-hdr">
          <span className="porf-ttl">🔍 Tri Porfirijeva susreta — mačka i miš</span>
          <span className="porf-sub">klikni za fokus — svaki susret ima drukčiju funkciju u radnji</span>
        </div>
        <div className="porf-tabs" role="tablist">
          {[1, 2, 3].map(n => (
            <button
              key={n}
              type="button"
              className={activePorf === n ? 'porf-tab on' : 'porf-tab'}
              role="tab"
              aria-selected={activePorf === n ? 'true' : 'false'}
              onClick={() => setActivePorf(n)}
            >
              <span className="porf-tab-num">{n}</span>
              <span className="porf-tab-ttl">{n === 1 ? 'Prvi susret' : n === 2 ? 'Drugi susret' : 'Treći susret'}</span>
              <span className="porf-tab-when">{n === 1 ? 'II. dio — Razumihinov stan' : n === 2 ? 'III. dio — policijska postaja' : 'IV. dio — R.-ov stan'}</span>
            </button>
          ))}
        </div>
        <div className="porf-content" role="tabpanel">
          {porf && (
            <>
              <div className="porf-content-ttl">{porf.title}</div>
              <div className="porf-content-body" dangerouslySetInnerHTML={{__html: porf.body}}/>
              <div className="porf-content-quote" dangerouslySetInnerHTML={{__html: porf.quote}}/>
              <div className="porf-content-takeaway" dangerouslySetInnerHTML={{__html: porf.takeaway}}/>
            </>
          )}
        </div>
      </div>

      {/* SEC 04 — Simbolika */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">04 · Simbolika — broj 7, križ, žuta boja, Lazar</div><div className="sec-line"></div></div>

      <SimboliGrid />

      {/* SEC 05 — Žene */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">05 · Žene u Zločinu i kazni — esej primjer (NCVVO 2020)</div><div className="sec-line"></div></div>

      <div className="box-key">
        <div className="box-key-lbl">📝 Esejska teza (na osnovu NCVVO primjera)</div>
        <div className="box-key-txt">
          <strong>„Dostojevski u svojemu romanu Zločin i kazna u skladu s realističkom poetikom daje psihološke i socijalne portrete ženskih likova <em>Sonje i Dunje</em> s naglaskom na njihovu plemenitost i žrtvu koju su spremne podnijeti zbog vlastitih obitelji.&quot;</strong>
          <br/><br/>
          Ovo je <em>stvarna teza iz NCVVO vodiča za esej</em> — pokazuje što očekuju na maturi. Teza ima <b>3 dijela</b>: (1) realistička poetika, (2) psihološki + socijalni portret, (3) plemenitost + žrtva zbog obitelji.
        </div>
      </div>

      <div className="prose">
        <p><b>Sonja</b> i <b>Dunja</b> su <em>paralelni ženski likovi</em> — obje žrtvuju <em>svoje tijelo i čast</em> za muške članove obitelji.</p>
        <p><b>Sonja</b> — <em>prostitucija zbog obitelji</em>. Katerina (maćeha) je tjera na „žutu karticu&quot; jer nema za kruh. Sonja pristaje <b>zbog pokornosti, dobrote, i bijede</b>. Njezin odnos prema Raskoljnikovu je <em>spiritualan, ne seksualan</em> — čita mu Bibliju. Ona je <b>njegov moralni vodič</b>.</p>
        <p><b>Dunja</b> — <em>brak bez ljubavi zbog obitelji</em>. Pristaje na Lužina samo da brat završi studij. Raskoljnikov odbija tu žrtvu — <em>„ne želim da ti budeš moja žrtva.&quot;</em> Dunja je <b>ponosnija</b> od Sonje — gađa Svidrigajlova pištoljem kad je ucjenjuje. <em>Aktivnija otpornost</em> nego Sonja, ali jednaka žrtvenost.</p>
        <p><b>Povezivanje</b>: <em>Sonja i Dunja su dvije strane iste ideje</em> — žrtva zbog ljubavi prema bližnjima. Za Dostojevskog, to je <b>najviša vrlina</b>. Obje su moralne vertikale — ali Sonja utjelovljuje <em>kršćansku pasivnu žrtvu</em>, Dunja <em>aktivnu moralnost</em>.</p>
      </div>

      {/* SEC 06 — Epilog */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">06 · Epilog — Sibirsko iskupljenje</div><div className="sec-line"></div></div>

      <div className="prose">
        <p>Epilog se odvija <b>1,5 godinu nakon predaje</b>. Raskoljnikov u Sibirskoj katorgi — <em>8 godina</em> kazne. Sonja je došla za njim, radi kao krojačica u obližnjem gradu. Prati ga.</p>
        <p><b>Ključni trenutak:</b> Raskoljnikov <em>još uvijek odbija</em> priznati zločin kao zločin. Misli: <em>„Nisam pogriješio — pogriješio sam samo što me savjest uhvatila. Jači čovjek bi izdržao.&quot;</em> Preziru ga drugi robijaši. On ih ne razumije. <b>Potpuna alienacija.</b></p>
        <p><em>Bolest.</em> U groznici — <b>san o bezumnim bakterijama</b>. Sanja da je svijet zaražen sitnim bićima koja nose „vlastitu istinu&quot; — svi se <b>uvjeravaju da su u pravu, i međusobno ubijaju</b>. <em>Ovo je Dostojevskijeva proročanska kritika nihilizma, kasnije ideoloških totalitarizama 20. st.</em></p>
        <p><b>Buđenje.</b> Izlazi iz bolnice. Susreće Sonju kraj Sibirske rijeke. <em>Pada joj pred noge, plače</em>. Prvi put osjeća ljubav umjesto teorije. Sonja se osmjehuje, plače. <b>Iskupljenje počinje</b>. Raskoljnikov pokazuje Evanđelje pod jastukom — još nije ga otvorio, ali <em>zna da hoće</em>.</p>
        <p>Kraj: <b><em>„Nova priča počinje, priča o postupnom preporodu čovjeka... No to je već druga priča.&quot;</em></b> — Dostojevski obećava nastavak koji nikad ne napiše. <em>Kraj je otvoren ali simbolično završen</em>.</p>
      </div>

      <UsporedbaRaskoljnikovOnjegin />

      {/* H08 Bridge */}
      <div className="cheat-card" style={{marginTop: '24px'}}>
        <div className="cheat-hdr">
          <div className="cheat-hdr-l">
            <div className="cheat-eye">H08 PREVIEW</div>
            <div className="cheat-ttl">Dostojevski → moderna književnost</div>
          </div>
        </div>
        <div className="cheat-grid">
          <div className="cheat-col cheat-col-wide" style={{fontFamily:"Georgia,'Times New Roman',serif", fontSize:'13.5px', color:'#B09684', lineHeight:'1.65'}}>
            <p style={{margin: 0}}><em>Dostojevski je most između realizma i moderne.</em> Psihološki realizam (unutarnji monolog, paranoja, savjest kao protagonist) <b>prethodi stream of consciousness</b> (Joyce), <b>freudovskoj psihoanalizi</b> (Freud ga čita), <b>egzistencijalizmu</b> (Camus, Sartre), <b>Kafkinoj paranoji</b>.</p>
            <p style={{margin: '10px 0 0'}}><em>Kad čitaš Kafkin Preobražaj (obvezatno 2026),</em> pitaj se: <b>Gregor Samsa i Raskoljnikov — što imaju zajedničko?</b> (Alijenacija, neprepoznavanje sebe, transformacija iznutra, svijet koji ih više ne razumije.)</p>
          </div>
        </div>
      </div>

      {/* VIDEO RESURSI */}
      <div className="sec-hdr"><div className="sec-line"></div><div className="sec-badge">07 · Video resursi</div><div className="sec-line"></div></div>

      <div className="prose">Kada ti tekst nije dovoljan — vizualni učenici često bolje pamte kroz video objašnjenja i filmske adaptacije. Ovdje su pouzdani edukacijski resursi na YouTubeu.</div>

      <div className="yt-grid">
        <a className="yt-card" href="https://www.youtube.com/results?search_query=Zlocin+i+kazna+Dostojevski+analiza+lektira+hrvatski" target="_blank" rel="noopener noreferrer">
          <div className="yt-thumb"><div className="yt-play">▶</div></div>
          <div className="yt-body">
            <div className="yt-lang"><span className="yt-flag">🇭🇷</span> HR</div>
            <div className="yt-title">Zločin i kazna — analiza na hrvatskom</div>
          </div>
        </a>
        <a className="yt-card" href="https://www.youtube.com/results?search_query=Dostojevski+realizam+lektira+analiza+poglavlje" target="_blank" rel="noopener noreferrer">
          <div className="yt-thumb"><div className="yt-play">▶</div></div>
          <div className="yt-body">
            <div className="yt-lang"><span className="yt-flag">🇭🇷</span> HR</div>
            <div className="yt-title">Dostojevski i realizam — kontekst i obilježja</div>
          </div>
        </a>
        <a className="yt-card" href="https://www.youtube.com/results?search_query=Crime+and+Punishment+Dostoevsky+analysis+summary" target="_blank" rel="noopener noreferrer">
          <div className="yt-thumb"><div className="yt-play">▶</div></div>
          <div className="yt-body">
            <div className="yt-lang"><span className="yt-flag">🇬🇧</span> EN</div>
            <div className="yt-title">Crime and Punishment — analysis &amp; themes</div>
          </div>
        </a>
        <a className="yt-card" href="https://www.youtube.com/results?search_query=Dostoevsky+psychology+nihilism+lecture" target="_blank" rel="noopener noreferrer">
          <div className="yt-thumb"><div className="yt-play">▶</div></div>
          <div className="yt-body">
            <div className="yt-lang"><span className="yt-flag">🎬</span> EN</div>
            <div className="yt-title">Dostoevsky — psychology &amp; nihilism lecture</div>
          </div>
        </a>
      </div>

      <div className="box-tip" style={{marginTop: '14px'}}>
        <div className="bt-ico">💡</div>
        <div className="bt-body">
          <div className="bt-title">Pro tip — kako koristiti</div>
          <div className="bt-txt">Video je <strong>dodatak</strong>, ne zamjena. Pročitaj djelo + ovu skriptu, pa pogledaj video — tako pamtiš 3× bolje nego kroz bilo koji pojedinačni izvor.</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-row">
        <button type="button" className="nb" onClick={handlePrev}>← 🏛 Teorija</button>
        <button type="button" className="nb primary" onClick={handleNext}>✍ Esej alat →</button>
      </div>
    </>
  );
}
