/* ============================================================
   H04 — Barok · Klasicizam · Život je san
   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CitatnikH04 from './H04_CitatnikTab';
import H04PojmovnikTab from './H04_PojmovnikTab';

/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_SECHDR3 = `
  .sh3{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh3-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh3-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;

function SH3({label,style}) {
  return (
    <>
      <style>{CSS_SECHDR3}</style>
      <div className="sh3" style={style}>
        <div className="sh3-line"/><div className="sh3-badge">{label}</div><div className="sh3-line"/>
      </div>
    </>
  );
}

const CSS_AC3 = `
  .ac3{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac3:hover{border-color:var(--bd-br)}
  .ac3-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac3-mono{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,50,47,.3)}
  .ac3-meta{flex:1;min-width:0}
  .ac3-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac3-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac3-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac3-star{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;color:var(--gold);letter-spacing:.5px;margin-top:6px}
  .ac3-body{padding:18px 22px}
  .ac3-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac3-body p:last-child{margin-bottom:0}
  .ac3-body strong{color:var(--t1)}
  .ac3-body em{color:var(--gold);font-style:italic}
  .ac3-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac3-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac3-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac3-work:last-child{border-bottom:none;padding-bottom:0}
  .ac3-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac3-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac3-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac3-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  @media(max-width:600px){.ac3-hdr{flex-direction:column;gap:10px}.ac3-mono{width:42px;height:42px;font-size:18px}.ac3-body{padding:14px 16px}.ac3-name{font-size:15px}}
`;

const CSS_TL3 = `
  .tl3{position:relative;padding:20px 0;margin:18px 0}
  .tl3::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl3-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl3-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2;white-space:pre-line}
  .tl3-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl3-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl3-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl3-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl3-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC3 = `
  .sc3s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc3{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc3:hover{border-color:var(--bd-br)}
  .sc3[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc3-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc3-sum::-webkit-details-marker{display:none}
  .sc3-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc3[open] .sc3-chev{transform:rotate(180deg);color:var(--gold)}
  .sc3-num{font-family:var(--display);font-size:16px;font-weight:700;color:var(--bronze-l);min-width:28px}
  .sc3[open] .sc3-num{color:var(--gold)}
  .sc3-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc3-ttl em{color:var(--bronze-l);font-style:italic;font-weight:400}
  .sc3-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc3-body{padding:0 16px 16px}
  .sc3-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc3-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .sc3-why b{color:var(--t1)}
  .sc3-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc3-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc3-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .sc3-note{margin-top:10px;padding:9px 13px;background:var(--ele);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;color:var(--t2);border-left:3px solid var(--bronze)}
  @media(max-width:600px){
    .sc3-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc3-meta{display:none}
    .sc3-body{padding:0 12px 12px}
    .sc3-num{font-size:13px;min-width:22px}
  }
`;

const CSS_CMP3 = `
  .cmp3{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp3-side{padding:18px 20px;background:var(--sur);transition:background .2s}
  .cmp3-side:hover{background:rgba(255,255,255,.02)}
  .cmp3-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp3-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp3-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp3-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp3-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp3-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp3-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:60px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp3{grid-template-columns:1fr}.cmp3-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp3-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT3 = `
  .stat3{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0 20px}
  .stat3-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat3-card:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px)}
  .stat3-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat3-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat3-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat3-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat3{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE3 = `
  .hq3{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
  .hq3::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq3::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
  .hq3-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
  .hq3-text{font-family:var(--display);font-size:17px;font-weight:700;color:var(--t1);line-height:1.45;font-style:italic;margin-bottom:10px}
  .hq3-text em{color:var(--gold);font-style:normal}
  .hq3-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq3-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq3{padding:18px 18px 18px 22px}.hq3-text{font-size:15px}}
`;

const CSS_WRAP3 = `
  .wr3{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;margin:0 0 22px;overflow:hidden;transition:border-color .25s}
  .wr3:hover{border-color:rgba(255,255,255,.12)}
  .wr3-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:14px;display:flex;align-items:center;gap:8px}
  .wr3-lbl::before{content:'';display:block;width:16px;height:1px;background:var(--bdm)}
  .wr3-legend{display:flex;gap:16px;flex-wrap:wrap;margin-top:12px}
  .wr3-legend-item{display:flex;align-items:center;gap:6px;font-family:var(--serif);font-size:12px;color:var(--t2)}
  .wr3-dot{width:10px;height:10px;border-radius:2px;flex-shrink:0}
`;

const CSS_POP3 = `
  .pop3{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop3-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop3-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop3-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop3-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop3-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop3{grid-template-columns:1fr}}
`;

/* ─────────────────────────────────────────────────────────── */

/* ============================================================
   [1] COMPARE — Barok vs Klasicizam
   HTML pozicija: L0 · sec "03 · Kontekst — barok i klasicizam"
   → ZAMJENJUJE .cmp-tbl-wrap (HTML tablicu usporedbe)
   → Vizualno superioran React layout umjesto statičnog HTML
============================================================ */
export function CompareBarokKlasicizam() {
  const rows = [
    ['Doba',     '17. st., osobito prva polovica', '17. st., druga pol. + 18. st.'],
    ['Centri',   'Španjolska, Italija, Engleska', 'Francuska, dvor Luja XIV.'],
    ['Stil',     'Raskošan, patetičan, zasićen metaforama', 'Discipliniran, jasan, razumski'],
    ['Tematika', 'Religiozna, vječni život, prolaznost', 'Svjetovna, društvene mane, tipovi'],
    ['Motivi',   'Vanitas, memento mori, san, smrt', 'Čast, dužnost, razum, strasti'],
    ['Stih',     'Slobodniji, rafinirane metafore', 'Aleksandrinac (12 slogova, strogo)'],
    ['Drama',    'Slobodnija, bez pravila', 'Strogo: 3 jedinstva, 5 činova'],
  ];
  return (
    <>
      <style>{CSS_CMP3}</style>
      <div className="cmp3">
        <div className="cmp3-side left">
          <div className="cmp3-author">Barok</div>
          <div className="cmp3-period">Milton · Calderón · Góngora · Marino</div>
          {rows.map(([l,a])=>(
            <div className="cmp3-row" key={l}>
              <span className="cmp3-lbl">{l}</span><span>{a}</span>
            </div>
          ))}
        </div>
        <div className="cmp3-vs"><span className="cmp3-vs-inner">VS</span></div>
        <div className="cmp3-side">
          <div className="cmp3-author">Klasicizam</div>
          <div className="cmp3-period">Molière · Racine · Corneille · Boileau</div>
          {rows.map(([l,,r])=>(
            <div className="cmp3-row" key={l}>
              <span className="cmp3-lbl">{l}</span><span>{r}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — ključna distinkcija</div>
        <div className="box-int-txt">Barok i klasicizam <strong>nisu suprotnosti</strong> — oba su reakcija na renesansu, ali iz drugog kuta. Barok uzima renesansnu slobodu i pretvara je u <em>religioznu ekstatičnost</em>. Klasicizam uzima renesansni razum i pretvara ga u <em>pravila i disciplinu</em>. Na maturi: ako pitanje traži distinkciju ovih dvaju stilova, ovo je jezgra odgovora.</div>
      </div>
    </>
  );
}

/* ============================================================
   [2] TIMELINE — 17. stoljeće u europskoj književnosti
   HTML pozicija: L0 · sec "03"
   → IZA .box-key "Ključna razlika — renesansa vs barok vs klasicizam"
   → ISPRED sec-hdr "04 · Calderón"
   → Kronološki pregled završava kontekstualni uvod sekcije
============================================================ */
const EVENTS_17ST = [
  {date:'1600.',   major:true,  title:'Calderón se rađa · Bruno na lomači',      desc:'Pedro Calderón de la Barca rođen u Madridu. Iste godine Giordano Bruno spaljen na lomači u Rimu — barokna napetost između vjere i znanja. Španjolska politički slabi, ali kulturno je u zenitu.'},
  {date:'1605.',   major:false, title:'Don Quijote I — Cervantes',               desc:'Cervantes objavljuje prvi moderni roman — parodija viteškog ideala. Kraj renesansnog optimizma, ulaz u baroknu sumnju. Quijote je simbol čovjeka čija unutrašnja stvarnost ne odgovara vanjskom svijetu — ista tema kao Život je san.'},
  {date:'1616.',   major:false, title:'Shakespeare i Cervantes umiru iste godine',desc:'23. travnja 1616. (različiti kalendari). Renesansa simbolički završava. Europska književnost prelazi u ruke baroka i klasicizma.'},
  {date:'1618.',   major:false, title:'Trideset-godišnji rat počinje',            desc:'Vjerski rat koji pustoši Europu 30 godina. Barokni pesimizam, vanitas i memento mori nisu slučajni — Europa gori. Calderón sam sudjeluje u ratovima (Katalonija, 1640.).'},
  {date:'1629.',   major:false, title:'Calderón — El príncipe constante',         desc:'Calderónov prvi veliki uspjeh. Religiozna drama o mučeništvu. Dvor Filipa IV. ga primjećuje — put prema dvorskom dramatičarskom položaju.'},
  {date:'1635.',   major:true,  title:'ŽIVOT JE SAN — praizvedba u Madridu',     desc:'Calderón objavljuje La vida es sueño. Iste godine umire Lope de Vega — Calderón preuzima štafetu. Ispitno djelo za maturu 2026.'},
  {date:'1636.',   major:false, title:'Corneille — Le Cid (tragedija)',           desc:'Pierre Corneille u Parizu piše Le Cid — prvu veliku klasicističku tragediju. Tema: sukob ljubavi i časti. Akademija je kritizira (previše sloboda forme), ali publika je voli. Aleksandrinac, 3 jedinstva — klasicistički kanon u nastajanju.'},
  {date:'1643.',   major:false, title:'Luj XIV. počinje vladati (5 godina)',      desc:'„Kralj Sunce" bit će na vlasti do 1715. Versailles, centralizacija, kulturni apsolutizam. Klasicizam je dvorska estetika — strogost forme odražava strogost monarhije. Akademie française kodificira jezik i stilska pravila.'},
  {date:'1664.',   major:false, title:'Molière — Tartuffe',                       desc:'Jean-Baptiste Poquelin (Molière) piše Tartuffe — komediju o religioznom licemjerju. Crkva traži zabranu 5 godina. Komičar koji kritizira društvene mane kroz karikaturu — komedija karaktera kao klasicistički žanr.'},
  {date:'1667.',   major:true,  title:'Milton — Izgubljeni raj',                  desc:'John Milton, slijep, diktira kćerima Paradise Lost — barokni ep u 12 knjiga. Sotona kao tragički heroj. Biblijski pad Adama i Eve kao prizma za pitanja o slobodnoj volji. Engleski barok paralelan s francuskim klasicizmom.'},
  {date:'1677.',   major:false, title:'Racine — Fedra',                           desc:'Jean Racine piše Phèdre — psihološku tragediju o patološkoj strasti (Fedra zaljubljena u pastorka). Preuzeto iz Euripida, ali sa psihološkom dubinom koja je moderna. Vrhunac klasicistička tragedije — i Racineov posljednji svjetovni komad.'},
  {date:'1681.',   major:true,  title:'Calderón umire — Siglo de Oro završava',  desc:'Calderón umire u Madridu. S njim završava španjolski Zlatni vijek. Europski barok ulazi u zalasku — prosvjetiteljstvo (H05) dolazi s novim idejama o razumu, slobodi i napretku.'},
];

export function Timeline17Stoljece() {
  return (
    <>
      <style>{CSS_TL3}</style>
      <SH3 label="03b · 17. stoljeće — kronologija europske književnosti" style={{marginTop:24}}/>
      <div className="tl3">
        {EVENTS_17ST.map((ev,i)=>(
          <div className="tl3-ev" key={i}>
            <div className={`tl3-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl3-body">
              <div className="tl3-title">{ev.title}</div>
              <div className="tl3-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [3] AUTHOR CARD — Pedro Calderón de la Barca
   HTML pozicija: L0 · sec "04 · Calderón"
   → ODMAH NAKON sec-hdr-a "04 ·"
   → ISPRED postojećeg .prose uvoda
============================================================ */
export function AuthorCardCalderon() {
  return (
    <>
      <style>{CSS_AC3}</style>
      <div className="ac3">
        <div className="ac3-hdr">
          <div className="ac3-mono" style={{background:'linear-gradient(135deg,#4a1a6a,#7a2a9a)'}}>C</div>
          <div className="ac3-meta">
            <div className="ac3-name">Pedro Calderón de la Barca</div>
            <div className="ac3-dates">MADRID · 1600. – 1681. · SIGLO DE ORO</div>
            <div className="ac3-tags">
              <span className="pill p-pa" style={{fontSize:10}}>filozofska drama</span>
              <span className="pill p-br" style={{fontSize:10}}>španjolski barok</span>
              <span className="pill p-go" style={{fontSize:10}}>auto sacramental</span>
              <div className="ac3-star">⭐ ISPITNO DJELO 2026 — ŽIVOT JE SAN</div>
            </div>
          </div>
        </div>
        <div className="ac3-body">
          <p>Najveći španjolski barokni dramatičar i <strong>posljednji velikan Zlatnog vijeka</strong> (<em>Siglo de Oro</em>). Rođen u Madridu, studirao filozofiju i pravo u Salamanci. Kao mlad ratnik sudjelovao u vojnim pohodima. Nakon smrti Lope de Vege 1635., preuzima mjesto <strong>glavnog dvorskog dramatičara</strong> kralja Filipa IV.</p>
          <p>U 51. godini zaređen za svećenika — ostatak života posvećuje isključivo religijskim dramama (<em>autos sacramentales</em>). Napisao ~<strong>120 drama i 80 autos</strong>. Umire 1681. — s njim završava Siglo de Oro.</p>
          <p>Njemci romantičari (Goethe, Schlegel) smatraju ga <em>jednakim Shakespeareu</em>. Schopenhauer citira <em>Život je san</em> kao filozofsku ilustraciju. Calderón nije samo španjolski klasik — on je europski.</p>
          <div className="ac3-works">
            <div className="ac3-works-lbl">Ključna djela</div>
            <div className="ac3-work">
              <div className="ac3-badge">🌙</div>
              <div>
                <div className="ac3-work-title">Život je san (La vida es sueño)</div>
                <div className="ac3-work-meta">1635. · FILOZOFSKA DRAMA · 3 ČINA · ŠPANJOLSKI</div>
                <div className="ac3-work-desc">Sigismund: zvijer → tiranin → mudri vladar. San vs java, sudbina vs slobodna volja. <strong>Ispitno djelo 2026.</strong></div>
              </div>
            </div>
            <div className="ac3-work">
              <div className="ac3-badge">⚖️</div>
              <div>
                <div className="ac3-work-title">Zalamejski sudac</div>
                <div className="ac3-work-meta">~1640. · DRAMA ČASTI · ŠPANJOLSKI</div>
                <div className="ac3-work-desc">Seljak-sudac osuđuje plemića zbog silovanja kćeri. Demokratska poruka u feudalnom društvu.</div>
              </div>
            </div>
            <div className="ac3-work">
              <div className="ac3-badge">🎭</div>
              <div>
                <div className="ac3-work-title">Veliki svjetski teatar</div>
                <div className="ac3-work-meta">~1635. · AUTO SACRAMENTAL · ALEGORIJA</div>
                <div className="ac3-work-desc">Bog kao redatelj, čovjek kao glumac u ulogama (kralj, siromah, ljepotica). Shakespeareova metafora „svijet je pozornica&quot; radikalizirana u teološki sustav.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [4] TIMELINE — Calderónov životopis
   HTML pozicija: L0 · sec "04 · Calderón"
   → IZA .sg grida (DOBA, DVOR, ŽANR, OPUS)
   → ISPRED .box-20 "Calderónova najvažnija djela"
============================================================ */
const CALDERON_EVENTS = [
  {date:'1600.',  major:true,  title:'Rođenje u Madridu',            desc:'Otac dvorski tajnik. Privilegirana obitelj — pristup obrazovanju. Jezuitski kolegij u Madridu.'},
  {date:'1614.',  major:false, title:'Sveučilište u Alcalá i Salamanci', desc:'Studij filozofije i kanonskog prava. Susreti s teologijom i skolastičkom filozofijom — osnova za metafizičku dimenziju drama.'},
  {date:'1621.',  major:false, title:'Prve drame u Madridu',          desc:'Calderón počinje pisati za madridska kazališta. Brzo stječe reputaciju. Lope de Vega, patrijarh kazališta, jo uvijek dominira — ali Calderón mu je konkurencija.'},
  {date:'1629.',  major:false, title:'El príncipe constante',          desc:'Prva velika drama — religiozni mučenik Fernando. Dvor Filipa IV. ga primjećuje. Calderón ulazi u dvorski krug.'},
  {date:'1635.',  major:true,  title:'ŽIVOT JE SAN · Lope de Vega umire', desc:'Praizvedba La vida es sueño u Madridu. Iste godine umire Lope de Vega (~1500 drama, patrijarh). Calderón preuzima štafetu kao vodeći dramatičar Zlatnog vijeka.'},
  {date:'1636.',  major:false, title:'Glavni dvorski dramatičar Filipa IV.', desc:'Imenovan dvorskim dramatičarom — piše za Buen Retiro, kraljevsku palaču-kazalište. Drame s bogatom scenografijom, glazbom i mehanizmima. Istovremeno vojnik (sudjeluje u vojnom pohodu u Kataloniji 1640.).'},
  {date:'1651.',  major:true,  title:'Ređenje za svećenika',          desc:'U 51. godini zaređen za svećenika. Prekretnica — od toga trenutka piše isključivo autos sacramentales (religiozna prikazanja za Corpus Christi). Svjetovne drame prepušta nasljednicima.'},
  {date:'1663.',  major:false, title:'Čelni dramatičar religioznih drama za dvor', desc:'Imenovan kapitelanom dvora — sve crkvene svečanosti pod njegovom upravom. Piše jedan auto sacramental godišnje. Utjecaj na cijelu Europu.'},
  {date:'1681.',  major:true,  title:'Smrt u Madridu — kraj Sigla de Oro', desc:'Calderón umire 25. svibnja 1681. u Madridu. Ima 81 godinu. S njegovom smrću simbolički završava španjolski Zlatni vijek — najdulje trajuće barokno stvaralaštvo u europskoj književnosti.'},
];

export function TimelineCalderon() {
  return (
    <>
      <style>{CSS_TL3}</style>
      <SH3 label="04b · Calderónov životopis — kronologija"/>
      <div className="tl3">
        {CALDERON_EVENTS.map((ev,i)=>(
          <div className="tl3-ev" key={i}>
            <div className={`tl3-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl3-body">
              <div className="tl3-title">{ev.title}</div>
              <div className="tl3-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [5] AUTHOR CARD — Francuski klasičari (Molière, Racine, Corneille)
   HTML pozicija: L0 · sec "05 · Francuski klasicizam"
   → ODMAH NAKON sec-hdr-a "05 ·"
   → ISPRED .prose uvoda i .con s 4 .cr
============================================================ */
export function AuthorCardFrancuski() {
  return (
    <>
      <style>{CSS_AC3}</style>
      <div style={{fontFamily:'var(--mono)',fontSize:9,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'var(--t3)',marginBottom:14}}>
        FRANCUSKI KLASICIZAM · VERSAILLES · LUJ XIV. · 1640.–1700.
      </div>
      <div className="ac3">
        <div className="ac3-hdr">
          <div className="ac3-mono" style={{background:'linear-gradient(135deg,#1a2a5a,#2a4a9a)',fontSize:16}}>FR</div>
          <div className="ac3-meta">
            <div className="ac3-name">Tri stupa klasicizma</div>
            <div className="ac3-dates">PARIZ · VERSAILLES · 1636.–1699.</div>
            <div className="ac3-tags">
              <span className="pill p-t" style={{fontSize:10}}>komedija karaktera</span>
              <span className="pill p-go" style={{fontSize:10}}>aleksandrinac</span>
              <span className="pill p-br" style={{fontSize:10}}>3 jedinstva</span>
            </div>
          </div>
        </div>
        <div className="ac3-body">
          <p>Dok španjolski barok dominira kroz Calderóna, <strong>Francuska pod Lujem XIV.</strong> razvija klasicizam — estetiku discipline, razuma i antičkih uzora. Versailles je centar — strogost forme odražava strogost apsolutne monarhije.</p>
          <div className="ac3-works">
            <div className="ac3-works-lbl">Tri ključna autora</div>
            <div className="ac3-work">
              <div className="ac3-badge">😂</div>
              <div>
                <div className="ac3-work-title">Molière (1622.–1673.)</div>
                <div className="ac3-work-meta">KOMEDIJA KARAKTERA · DVORSKI DRAMATIČAR LUJA XIV.</div>
                <div className="ac3-work-desc"><em>Tartuffe</em> (1664., licemjerje), <em>Škrtac</em> (1668., Harpagon), <em>Mizantrop</em> (1666., Alceste), <em>Umišljeni bolesnik</em> (1673., umrro na pozornici). <strong>Centralni lik s dominantnom manom</strong> — to je recept komedije karaktera.</div>
              </div>
            </div>
            <div className="ac3-work">
              <div className="ac3-badge">🗡️</div>
              <div>
                <div className="ac3-work-title">Corneille (1606.–1684.)</div>
                <div className="ac3-work-meta">OTAC KLASICISTIČKA TRAGEDIJE · ALEKSANDRINAC</div>
                <div className="ac3-work-desc"><em>Le Cid</em> (1636.) — mladić Rodrigo mora odabrati između ljubavi (Chimène) i časti (ubojstvo njezina oca). <strong>Cornelleovski sukob: dužnost vs ljubav</strong>. Pisano u aleksandrincu (12-slog, cezura 6+6).</div>
              </div>
            </div>
            <div className="ac3-work">
              <div className="ac3-badge">💔</div>
              <div>
                <div className="ac3-work-title">Racine (1639.–1699.)</div>
                <div className="ac3-work-meta">PSIHOLOŠKA TRAGEDIJA · FEDRA</div>
                <div className="ac3-work-desc"><em>Fedra</em> (1677.) — kraljica zaljubljena u pastorka Hipolita. Preuzeto iz Euripida, ali sa psihološkom dubinom. <strong>Prikaz patološke strasti</strong>. Racine poslije Phèdre prestaje pisati — ide u samostan.</div>
              </div>
            </div>
          </div>
          <div style={{marginTop:12,padding:'10px 14px',background:'var(--ele)',borderRadius:'var(--r2)',fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t2)'}}>
            💡 <strong style={{color:'var(--t1)'}}>Za esej:</strong> Klasicistička drama = 3 jedinstva (mjesto, vrijeme 24h, radnja) + aleksandrinac + 5 činova + scene nasilja izvan pozornice (glasnik priča). Shakespeareova drama = sve suprotno. Ovo je UVIJEK točan kontrast na ispitu.
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [6] AUTHOR CARD — John Milton
   HTML pozicija: L0 · sec "06 · Drugi barokni autori"
   → ODMAH NAKON sec-hdr-a "06 ·"
   → ISPRED .prose i .sg kartice autora
============================================================ */
export function AuthorCardMilton() {
  return (
    <>
      <style>{CSS_AC3}</style>
      <div className="ac3">
        <div className="ac3-hdr">
          <div className="ac3-mono" style={{background:'linear-gradient(135deg,#1a3a1a,#2a6a2a)'}}>M</div>
          <div className="ac3-meta">
            <div className="ac3-name">John Milton</div>
            <div className="ac3-dates">LONDON · 1608. – 1674. · ENGLESKI BAROK</div>
            <div className="ac3-tags">
              <span className="pill p-br" style={{fontSize:10}}>Izgubljeni raj</span>
              <span className="pill p-go" style={{fontSize:10}}>blank verse</span>
              <span className="pill p-r" style={{fontSize:10}}>puritanac</span>
            </div>
          </div>
        </div>
        <div className="ac3-body">
          <p>Engleski barokni pjesnik, puritanac, politički aktivist. Studirao u Cambridgeu, putovao po Italiji. Tijekom Engleske građanske revolucije služio Cromwellu kao latinski tajnik. <strong>1652. oslijepio</strong> — ostatak života provodi slijep.</p>
          <p><em>Paradise Lost</em> (<strong>Izgubljeni raj</strong>, 1667.) pisan je <strong>slijep, diktirajući kćerima</strong> — 10.565 stihova blank versa u 12 knjiga. Lik Sotone postaje najkompleksniji i najtragičniji u djelu — romantičari ga vide kao pravog heroja. Blakeov komentar: <em>„Milton je bio na đavolovoj strani a da to nije znao.&quot;</em></p>
          <div className="ac3-works">
            <div className="ac3-works-lbl">Ključno djelo</div>
            <div className="ac3-work">
              <div className="ac3-badge">😇</div>
              <div>
                <div className="ac3-work-title">Izgubljeni raj (Paradise Lost)</div>
                <div className="ac3-work-meta">1667. · EP · 12 KNJIGA · 10.565 STIHOVA · BLANK VERSE</div>
                <div className="ac3-work-desc">Biblijski pad Adama i Eve. Sotona je buntovnik koji izaziva Boga — tragic hero. Adam i Eva biraju spoznaju (slobodna volja) i gube raj. Veza s Calderónom: <strong>obojica dramatiziraju pitanje slobodne volje</strong> — Sigismund i Adam biraju, pa snose posljedice.</div>
              </div>
            </div>
          </div>
          <div style={{marginTop:12,padding:'10px 14px',background:'var(--ele)',borderRadius:'var(--r2)',fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t2)'}}>
            💡 <strong style={{color:'var(--t1)'}}>Za esej:</strong> Milton je <em>engleski barok</em>, ne klasicizam. Paralela s Calderónom (slobodna volja, teološko pitanje) korisna je za komparativni esej — oba istražuju što se dogodi kad čovjek izabere drugačije od onoga što mu je suđeno.
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [7] POP KULTURA — Barok danas
   HTML pozicija: L0 · na dno
   → IZA .cheat-card, ISPRED nav-row
============================================================ */
const POP_KULTURA_BAROK = [
  {film:'🎬 Inception (2010.)', title:'= Život je san',    source:'DiCaprio u slojevima snova — može li razlikovati stvarnost od sna? Ista filozofska zagonetka kao Sigismundova. „Totem" = Rosaurin mač (simbol koji potvrđuje stvarnost).'},
  {film:'📺 Westworld (2016.)', title:'= La vida es sueño', source:'Androidi koji ne znaju jesu li stvarni ili programirani. Sezona 1 završnica doslovno citira baroknu filozofiju — „Sve što si ikad doživio... može biti san."'},
  {film:'🎬 The Truman Show (1998.)', title:'= Veliki svjetski teatar',    source:'Truman Burbank živi u insceniranoj stvarnosti ne znajući za to. Calderónov auto sacramental: Bog-redatelj, čovjek-glumac. Što je slobodna volja u kontroliranom svijetu?'},
  {film:'🎵 „La vida loca" — Ricky Martin (1999.)', title:'= Život je lud san', source:'Naslov direktno citira Calderónov naslov (La vida es sueño/loca). Barokna filozofija kao pop-kultura — vanitas i hedonizam u jednoj pjesmi.'},
  {film:'🎨 Caravaggio · Bernini · Rubens', title:'= Barokna vizualnost živa', source:'Caravageov chiaroscuro (svjetlo/tama), Berninijev Sv. Toma u ekstazi, Rubensove mitologije — ista estetika raskošnog, patetičnog i dramatičnog nastavlja se u modernoj fotografiji i filmskom svjetlu.'},
  {film:'💀 Memento mori u pop kulturi', title:'= Vanitas je svuda', source:'Lobanje na modnoj odjeći (Alexander McQueen), Mexico Día de los Muertos (barokni španjolski utjecaj), Halloween — kultura sjećanja na smrt direktno nasljeđuje barokni vanitas motiv.'},
];

export function PopKulturaBarok() {
  return (
    <>
      <style>{CSS_POP3}</style>
      <SH3 label="Barok u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="box-int" style={{marginBottom:14}}>
        <div className="box-int-lbl">💡 Zašto ovo znati</div>
        <div className="box-int-txt">Barokne ideje nisu mrtve — one se pojavljuju u svakom velikom suvremenom djelu koje pita <strong>„je li ono što doživljavam stvarno?&quot;</strong> Prepoznavanje tih veza na eseju pokazuje ocjenjivaču <em>tematsku dubinu</em>.</div>
      </div>
      <div className="pop3">
        {POP_KULTURA_BAROK.map((p,i)=>(
          <div className="pop3-card" key={i}>
            <div className="pop3-film">{p.film}</div>
            <div className="pop3-title">{p.title}</div>
            <div className="pop3-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [8] HERO QUOTE — „La vida es sueño"
   HTML pozicija: L1 · Život je san tab
   → ODMAH NAKON .box-int "Zašto Život je san zaslužuje poseban tab"
   → ISPRED sec-hdr "01 · Osnovni podaci"
============================================================ */
export function HeroQuoteVitaEsSueno() {
  return (
    <>
      <style>{CSS_QUOTE3}</style>
      <div className="hq3">
        <div className="hq3-eye">NAJPOZNATIJI STIH ŠPANJOLSKE KNJIŽEVNOSTI · II. ČIN · CALDERÓN 1635.</div>
        <div className="hq3-text">
          „<em>O, malen je dar nam dan, / jer sav život — to je san, / a san su i sami snovi.</em>&quot;
        </div>
        <div className="hq3-body">Sigismund izgovara ovaj monolog nakon povratka u tamnicu, uvjeren da je dvorski doživljaj bio san. Calderón u jednoj rečenici sažima cijelu baroknu filozofiju vanitasa: ako je život san, a snovi snovi — jedino što ostaje jest moralno djelovanje. <strong>Prolaznost ne ukida odgovornost — pojačava je.</strong></div>
        <div style={{marginTop:12,padding:'8px 12px',background:'rgba(232,201,122,.06)',borderRadius:'var(--r2)',fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t2)',fontStyle:'italic'}}>
          Orig. (špa.): „¿Qué es la vida? Un frenesí. / ¿Qué es la vida? Una ilusión, / una sombra, una ficción, / y el mayor bien es pequeño; / que toda la vida es sueño, / y los sueños, sueños son.&quot;
        </div>
        <div className="hq3-source">PEDRO CALDERÓN DE LA BARCA · ŽIVOT JE SAN · 1635. · II. ČIN · OSMERAC</div>
      </div>
    </>
  );
}

/* ============================================================
   [9] STAT CARDS — Život je san u brojevima
   HTML pozicija: L1 · sec "01 · Osnovni podaci"
   → NAKON .sg grida (6 kartica: AUTOR, GODINA, VRSTA, MJESTO, STIL, JEZIK)
   → ISPRED .box-signal "POVIJESNI KONTEKST"
============================================================ */
export function StatCardsZivotJeSan() {
  const stats = [
    {ico:'📜', val:'3 čina',    lbl:'Struktura',   sub:'jornadas — španjolski barokni format'},
    {ico:'📅', val:'1635.',     lbl:'Napisano',    sub:'Siglo de Oro · Lope de Vega umire iste god.'},
    {ico:'🔤', val:'~2.500',    lbl:'Stihova',     sub:'osmerac (romance) + soneti za monologe'},
    {ico:'👥', val:'7 likova',  lbl:'Protagonisti', sub:'Sigismund · Bazilije · Rosaura + 4 druga'},
  ];
  return (
    <>
      <style>{CSS_STAT3}</style>
      <div className="stat3">
        {stats.map(s=>(
          <div className="stat3-card" key={s.lbl}>
            <span className="stat3-ico">{s.ico}</span>
            <div className="stat3-val">{s.val}</div>
            <div className="stat3-lbl">{s.lbl}</div>
            <div className="stat3-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [10] SVG DIJAGRAM — Sigismundove 3 faze transformacije
   HTML pozicija: L1 · sec "02 · Radnja"
   → VROH sekcije 02, IZA .prose uvoda
   → ISPRED .box-20 (timeline radnje)
============================================================ */
export function SVGSigismundFaze() {
  return (
    <>
      <style>{CSS_WRAP3}</style>
      <div className="wr3">
        <div className="wr3-lbl">SIGISMUNDOVA TRANSFORMACIJA — 3 FAZE</div>
        <svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Sigismundove tri faze: zvijer, tiranin, mudri vladar">

          {/* Connecting arrows */}
          <defs>
            <marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
              <path d="M0,0 L0,6 L8,3 z" fill="rgba(232,201,122,.5)"/>
            </marker>
          </defs>
          <line x1="195" y1="130" x2="255" y2="130" stroke="rgba(232,201,122,.5)" strokeWidth="2" markerEnd="url(#arr4)"/>
          <line x1="445" y1="130" x2="505" y2="130" stroke="rgba(232,201,122,.5)" strokeWidth="2" markerEnd="url(#arr4)"/>

          {/* Progression bar background */}
          <rect x="70" y="200" width="560" height="8" rx="4" fill="rgba(255,255,255,.05)"/>
          <rect x="70" y="200" width="560" height="8" rx="4" fill="url(#prog4)"/>
          <defs>
            <linearGradient id="prog4" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#DC322F" stopOpacity=".7"/>
              <stop offset="50%" stopColor="#E8C97A" stopOpacity=".5"/>
              <stop offset="100%" stopColor="#3ecf6e" stopOpacity=".8"/>
            </linearGradient>
          </defs>

          {/* Phase 1: ZVIJER */}
          <rect x="30" y="60" width="165" height="130" rx="10" fill="#1a0505" stroke="#DC322F" strokeWidth="1.5"/>
          <text x="112" y="90" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#DC322F" letterSpacing="2">FAZA 1</text>
          <text x="112" y="112" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#e87a77">ZVIJER</text>
          <text x="112" y="132" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.5)" fontStyle="italic">kula u šumi</text>
          <text x="112" y="152" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.4)">bijes · zatočeništvo</text>
          <text x="112" y="169" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.4)">bez iskustva</text>

          {/* I čin label */}
          <text x="112" y="220" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(220,50,47,.7)">I. ČIN</text>

          {/* Phase 2: TIRANIN */}
          <rect x="268" y="60" width="165" height="130" rx="10" fill="#1a1005" stroke="#E8C97A" strokeWidth="1.5"/>
          <text x="350" y="90" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#E8C97A" letterSpacing="2">FAZA 2</text>
          <text x="350" y="112" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#d4a843">TIRANIN</text>
          <text x="350" y="132" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.5)" fontStyle="italic">kraljevski dvor</text>
          <text x="350" y="152" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.4)">moć bez mudrosti</text>
          <text x="350" y="169" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.4)">proročanstvo ispunjeno</text>

          {/* II čin label */}
          <text x="350" y="220" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(232,201,122,.7)">II. ČIN</text>

          {/* Phase 3: MUDRI VLADAR */}
          <rect x="505" y="60" width="165" height="130" rx="10" fill="#041a0a" stroke="#3ecf6e" strokeWidth="2"/>
          <text x="587" y="90" textAnchor="middle" fontFamily="monospace" fontSize="10" fontWeight="700" fill="#3ecf6e" letterSpacing="2">FAZA 3</text>
          <text x="587" y="109" textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="700" fill="#5ecf8a">MUDRI VLADAR</text>
          <text x="587" y="130" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.5)" fontStyle="italic">pobuna · pobjeda</text>
          <text x="587" y="150" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.4)">milost umjesto osvete</text>
          <text x="587" y="169" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.4)">slobodna volja pobjeđuje</text>

          {/* III čin label */}
          <text x="587" y="220" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(62,207,110,.7)">III. ČIN</text>

          {/* Bottom legend */}
          <text x="350" y="248" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.3)" fontStyle="italic">„Moj učitelj bio je san.&quot; — Sigismund, finalni monolog</text>
        </svg>
        <div className="wr3-legend">
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(220,50,47,.6)'}}/><span>I. čin: Zvijer — bez odgoja i iskustva = animalna narav</span></div>
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(232,201,122,.6)'}}/><span>II. čin: Tiranin — iskustvo bez mudrosti = proročanstvo ispunjeno</span></div>
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(62,207,110,.6)'}}/><span>III. čin: Mudri vladar — iskustvo + refleksija = slobodna volja</span></div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [11] TIMELINE — Radnja Života je san kroz 3 čina
   HTML pozicija: L1 · sec "02 · Radnja"
   → ZAMJENJUJE .box-20 "Čin po čin — Sigismundov put"
   → Dolazi odmah iza SVGSigismundFaze
============================================================ */
const RADNJA_H04 = [
  {date:'I ČIN\n1.',  major:true,  title:'Rosaura i Sigismund — kula u šumi', desc:'Rosaura, prerušena u muškarca, i sluga Klarin dolaze pred mračnu kulu u planinama. Čuju jadikovke — unutra je Sigismund u lancima, „zvijer u ljudskoj koži". Otkriva im tko je: kralj Bazilije ga je zatvorio zbog proročanstva.'},
  {date:'I ČIN\n2.',  major:false, title:'Klotaldo otkriva Rosaurin identitet', desc:'Klotaldo, Sigismundov odgojitelj, prepoznaje u Rosaurinom maču simbol koji je dao ženi koju je napustio — Rosaura je njegova kći. Početak paralelne radnje.'},
  {date:'I ČIN\n3.',  major:false, title:'Bazilije objavljuje plan — eksperiment', desc:'Kralj Bazilije sazivlje dvor. Objavljuje plan: jednom će Sigismunda narkotizirati i dovesti na dvor. Ako se pokaže tiraninom — natrag u tamnicu. Ako ne — kruna.'},
  {date:'II ČIN\n1.', major:true,  title:'Sigismund na dvoru — tiranija se iskazuje', desc:'Uspavan napitkom, Sigismund se budi u luksuzu. Čuje da je kraljević. Umjesto zahvalnosti: baca slugu s balkona, napada Klotalda, pokušava silovati Rosauru. Proročanstvo se (prividno) ispunjava.'},
  {date:'II ČIN\n2.', major:true,  title:'VELIKI MONOLOG O SNU — filozofski vrhunac', desc:'Vraćen u tamnicu, uvjeren da je dvor bio san, Sigismund izgovara najpoznatiji monolog: „O, malen je dar nam dan, jer sav život — to je san, a san su i sami snovi." Zaključak: u snu valja činiti dobro.'},
  {date:'III ČIN\n1.',major:false, title:'Pobuna naroda — oslobađanje Sigismunda', desc:'Vojnici oslobađaju Sigismunda. Sigismund pita se: „Sanjam li opet?" Ali odlučuje: makar sve bilo san, treba činiti dobro. Kreće s vojskom — ali ovaj put bira pravednost.'},
  {date:'III ČIN\n2.',major:true,  title:'Pobjeda · milost · finalni monolog', desc:'Sigismund pobjeđuje Bazilijevu vojsku. Bazilije mu se pokorava — Sigismund mu oprašta. Rosaura dobiva čast (Astolfo je mora oženiti). Finalni monolog: „Moj učitelj bio je san." Transformacija završena.'},
];

export function TimelineRadnjaH04() {
  return (
    <>
      <style>{CSS_TL3}</style>
      <div className="tl3">
        {RADNJA_H04.map((ev,i)=>(
          <div className="tl3-ev" key={i}>
            <div className={`tl3-date${ev.major?' major':''}`} style={{fontSize:7}}>{ev.date}</div>
            <div className="tl3-body">
              <div className="tl3-title">{ev.title}</div>
              <div className="tl3-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [12] ACCORDION — 4 filozofska sukoba
   HTML pozicija: L1 · sec "04 · Centralni sukobi"
   → ZAMJENJUJE .con s 4 .cr blokova (SUKOB 1–4)
   → Dolazi IZMEĐU .prose i .box-warn "VANITAS"
============================================================ */
const SUKOBI_H04 = [
  {br:'S1', naslov:'Sudbina vs slobodna volja', tag:'CENTRALNA TEMA',
   citat:'„Sudbina ne potiče na grijeh, nego potiče volja." — Sigismund, III. čin.',
   esej:'Centralna filozofska napetost drame. Proročanstvo kaže da će Sigismund biti tiranin — Bazilije ga zatvara kako bi to spriječio. Paradoks: upravo je zatvor ono što ga pretvori u zvijer. Calderónov zaključak: sudbina postoji, ali čovjek je može nadvladati moralnim izborom.',
   args:['Bazilijeva pogreška je logička: utamničenjem sina on SAM uzrokuje ispunjenje proročanstva — bez slobode nema ni razvoja','Sigismund u III. činu bira milost umjesto osvete — proročanstvo tehički ispunjeno (sin je pobijedio oca), ali duhovno nadvladano','Klarin koji bježi od borbe pogiba slučajnim metkom — nitko ne može pobjeći sudbini, ali Sigismund je mijenja iznutra']},
  {br:'S2', naslov:'San vs java', tag:'BAROKNA FILOZOFIJA',
   citat:'„O, malen je dar nam dan, jer sav život — to je san, a san su i sami snovi." — II. čin.',
   esej:'Sigismund ne može razlikovati je li dvorski doživljaj bio san ili java. Calderónov obrat: pitanje nije „što je stvarno", nego „kako se ponašati u neizvjesnom svijetu". Odgovor je moralistički: makar sve bilo san, treba činiti dobro jer je to jedino što ostaje. Barokni vanitas ne vodi nihilizmu, nego etičkoj obvezi.',
   args:['Klotaldo namjerno drži Sigismunda u neizvjesnosti — spoznajna nesigurnost je strukturna, ne slučajna','Paralela s Descartesom (1637., cogito ergo sum): Calderón kulturno anticipira modernu filozofsku skepsu kroz dramu','Sigismund pri pobuni pita se „sanjam li opet?" — ali svejedno djeluje. Neizvjesnost ne paralizira, ona prisiljava na moralnu odluku']},
  {br:'S3', naslov:'Odgoj vs priroda', tag:'PRETEČA PROSVJETITELJSTVA',
   citat:'„Odgajao si me kao zvijer, a sad se čudiš što sam takav?" — Sigismund Baziliju.',
   esej:'Je li Sigismund tiranin po naravi ili ga je takvim učinilo odrastanje u kuli? Calderónov odgovor: odgoj formira čovjeka. Tri faze (zvijer, tiranin, mudri vladar) nisu Sigismundova priroda — one su reakcija na socijalne uvjete. Preteča prosvjetiteljske pedagogije (Locke, Rousseau).',
   args:['Klotaldo ga obrazovao (filozofija, politika) ali bez iskustva života u društvu — znanje bez prakse vodi buntovništvu','Sigismundova transformacija u III. činu moguća je jer je prošao iskustvo dvora (čak i kao san) — iskustvo, ne narav, ga mijenja','Paralela s H05: Lockeova tabula rasa i Rousseauov Emil sistematiziraju ono što Calderón dramatizira']},
  {br:'S4', naslov:'Čast vs ambicija', tag:'PARALELNA RADNJA',
   citat:'„Moje ime treba čast, a ne vladavina." — Rosaura Sigismundu.',
   esej:'Rosaurina priča o izgubljenoj časti (Astolfo je zaveo i napustio) paralelna je Sigismundovoj. Čast je u španjolskoj baroku apsolutni kozmički princip — njezino narušavanje narušava red svemira. Astolfo mora oženiti Rosauru (obnova časti), a Sigismund mu to omogućuje. Pravda i čast su isprepleteni.',
   args:['Rosaura nosi mač — simbol identiteta i časti koji Klotaldo prepoznaje. Mač = dokaz koji pokreće paralelnu radnju','Astolfo je politički oportunist: zaručen za Stelu, ali obećao brak Rosauri. Između ljubavi, časti i ambicije — ambicija vodi u etički kaos','Sigismund pri kraju prisiljava Astolfa da oženi Rosauru — pravda i čast se uspostavljaju simultano s uspostavom krune']},
];

export function AccordionSukobiH04() {
  return (
    <>
      <style>{CSS_SC3}</style>
      <p className="prose" style={{marginBottom:12}}>Klikni na sukob za citat, analizu i argumente. Iz ova 4 sukoba može se argumentirati svaka moguća esejska teza o Životu je san.</p>
      <div className="sc3s">
        {SUKOBI_H04.map(s=>(
          <details className="sc3" key={s.br}>
            <summary className="sc3-sum">
              <div className="sc3-num" style={{fontSize:13}}>{s.br}</div>
              <div className="sc3-ttl">{s.naslov}</div>
              <span className="sc3-meta">{s.tag}</span>
              <span className="sc3-chev">▾</span>
            </summary>
            <div className="sc3-body">
              <div className="sc3-quote">{s.citat}</div>
              <div className="sc3-why"><b>Za esej:</b> {s.esej}</div>
              <div className="sc3-args">
                {s.args.map((a,i)=>(
                  <div className="sc3-arg" key={i}>
                    <span className="sc3-arg-num">({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [13] USPOREDBA — Sigismund vs Hamlet
   HTML pozicija: L1 · sec "05 · Barok i Siglo de Oro"
   → IZA .box-key "Culteranismo i conceptismo"
   → NA DNU sekcije 05, ISPRED sec-hdr "06 · Ključne scene"
============================================================ */
export function UsporedbaZivotJeSanHamlet() {
  const rows = [
    ['Epoha',        'Barok · 17. st.',        'Renesansa · ~1601.'],
    ['Djelo',        'Filozofska drama · 3 čina', 'Tragedija · 5 činova'],
    ['Hamartia',     'odgoj + naivnost',        'oklijevanje + refleksija'],
    ['Motiv',        'san vs java · vanitas',   'smrt · osveta · egzistencija'],
    ['Transformacija','zvijer → mudri vladar',  'student → paraliziran → smrt'],
    ['Zaključak',    'moralna obveza u snu',    'osveta kao ciklus katastrofe'],
    ['Pobjeđuje',    'milošću i oprostom',      'Fortinbras (koji čeka)'],
    ['Poruka',       'slobodna volja > sudbina','previše refleksije = paraliza'],
  ];
  return (
    <>
      <style>{CSS_CMP3}</style>
      <SH3 label="05b · Sigismund vs Hamlet — bridge prema H03" style={{marginTop:24}}/>
      <div className="cmp3">
        <div className="cmp3-side left">
          <div className="cmp3-author">Sigismund</div>
          <div className="cmp3-period">CALDERÓN · 1635. · ŠPANJ.</div>
          {rows.map(([l,a])=>(<div className="cmp3-row" key={l}><span className="cmp3-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp3-vs"><span className="cmp3-vs-inner">VS</span></div>
        <div className="cmp3-side">
          <div className="cmp3-author">Hamlet</div>
          <div className="cmp3-period">SHAKESPEARE · ~1601. · ENGL.</div>
          {rows.map(([l,,r])=>(<div className="cmp3-row" key={l}><span className="cmp3-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — ključna distinkcija</div>
        <div className="box-int-txt">Sigismund <strong>djeluje</strong> — i time mijenja sudbinu. Hamlet <strong>ne može djelovati</strong> — i time postaje žrtva sudbine. Oba su junaci koji se bore s predodređenošću, ali na dijametralno suprotne načine. Ocjenjivači vole kad student komparira ispitna djela između H03 i H04 — to pokazuje razumijevanje epoha.</div>
      </div>
    </>
  );
}

/* ============================================================
   [14] ACCORDION — 5 ključnih scena
   HTML pozicija: L1 · sec "06 · Ključne scene"
   → ZAMJENJUJE .sg grid s 5 .sc kartica
   → Dolazi IZMEĐU .prose "Ako imaš 10 minuta" i .box-signal "SIMBOLI"
============================================================ */
const KLJUCNE_SCENE_H04 = [
  {br:'I/1',  naslov:'Sigismundov prvi monolog — „Jadi moji"', tag:'POČETAK · SLOBODA',
   citat:'„Što sam zgriješio protiv vas / što me tako kažnjavate? / Zar jer sam se rodio / kriv je samo moj grijeh?" — I. čin.',
   esej:'Sigismund u lancima jadikuje nad vlastitom sudbinom. Pita se zašto ptice, zvijeri i ribe imaju slobodu a on, čovjek, nema. Ovo je prva esejska točka: tema slobodne volje uvedena je odmah. Za svaki esej koji pita o temi slobode — ova scena je obavezan primjer.'},
  {br:'II/1', naslov:'Sigismund na dvoru — tiranija i bijes', tag:'ISKUŠENJE · PROROČANSTVO',
   citat:'„Jesi li ti rekao da sam u snu? — Sve što vidim je stvarno." — Sigismund Klotaldu.',
   esej:'Sigismund se budi u dvoru, sazna da je kraljević — i odmah iskazuje tiransku narav: baca slugu, napada Klotalda, uznemirava Rosauru. Ovo dokazuje proročanstvo. Za esej o temi odgoja: ovo je dokaz da bez iskustva civilizacije, čovjek ostaje zvijer — Calderónova pedagoška teza.'},
  {br:'II/2', naslov:'Veliki monolog o snu — filozofski vrhunac', tag:'VANITAS · MORA LNI ZAKLJUČAK',
   citat:'„O, malen je dar nam dan, / jer sav život — to je san, / a san su i sami snovi." — II. čin.',
   esej:'Najpoznatiji monolog drame i španjolske književnosti uopće. Sigismund po povratku u tamnicu, uvjeren da je dvor bio san, izgovara baroknu filozofiju vanitasa. Zaključak: u snu treba činiti dobro jer je to jedino što ostaje. Za svaki esej o temi prolaznosti, vanitasa ili moralnoj obvezi — ovo je srce dokaza.'},
  {br:'III/1', naslov:'Pobuna naroda — moralni izbor',         tag:'PREKRETNICA · SLOBODNA VOLJA',
   citat:'„Makar sve bio san, / korisno je učiniti dobro." — Sigismund, III. čin.',
   esej:'Vojnici oslobađaju Sigismunda iz kule. On zna da ne može razlikovati san od jave — ali svejedno odlučuje djelovati pravedno. Ovo je ključna etička prekretnica: Calderón pokazuje da moralno djelovanje ne zahtijeva metafizičku sigurnost. Za esej o temi sna/jave kao etičke dileme — ova scena je centralna.'},
  {br:'III/2', naslov:'Sigismund oprašta Baziliju — transformacija', tag:'FINALE · MILOST',
   citat:'„Moj učitelj bio je san." — Sigismund, finalni monolog.',
   esej:'Sigismund pobjeđuje, Bazilije se pokorava — Sigismund mu oprašta. Daje Rosauri čast (Astolfo je mora oženiti). Transformacija je dovršena: zvijer → tiranin → mudri vladar. Za svaki esej o temi slobodne volje ili odgoja — ovdje je dokaz Calderónove teze: čovjek MOŽE nadvladati proročanstvo moralnim izborom.'},
];

export function AccordionKljucneSceneH04() {
  return (
    <>
      <style>{CSS_SC3}</style>
      <p className="prose" style={{marginBottom:12}}>Iz ovih 5 scena može se argumentirati bilo koja teza. Klikni za citat i analizu.</p>
      <div className="sc3s">
        {KLJUCNE_SCENE_H04.map(sc=>(
          <details className="sc3" key={sc.br}>
            <summary className="sc3-sum">
              <div className="sc3-num" style={{fontSize:11}}>{sc.br}</div>
              <div className="sc3-ttl">{sc.naslov}</div>
              <span className="sc3-meta">{sc.tag}</span>
              <span className="sc3-chev">▾</span>
            </summary>
            <div className="sc3-body">
              <div className="sc3-quote">{sc.citat}</div>
              <div className="sc3-why"><b>Za esej:</b> {sc.esej}</div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [15] SVG — Vanitas (barokni simboli)
   HTML pozicija: L1 · sec "07 · Teme i motivi"
   → NA VRH sekcije 07, ISPRED .prose
   → Vizualni uvod u tematiku vanitasa
============================================================ */
export function SVGVanitas() {
  return (
    <>
      <style>{CSS_WRAP3}</style>
      <div className="wr3">
        <div className="wr3-lbl">VANITAS — BAROKNI SIMBOLI PROLAZNOSTI</div>
        <svg viewBox="0 0 660 300" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Barokni simboli vanitasa: lubanja, pješčanik, svjeća, globus, cvijeće">

          {/* Background gradient */}
          <defs>
            <radialGradient id="bg4" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(232,201,122,.04)"/>
              <stop offset="100%" stopColor="rgba(0,0,0,0)"/>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="660" height="300" fill="url(#bg4)"/>

          {/* Central Skull */}
          <ellipse cx="330" cy="130" rx="48" ry="52" fill="#1a1208" stroke="#8B6D2F" strokeWidth="2"/>
          <ellipse cx="330" cy="120" rx="38" ry="42" fill="#120d05" stroke="rgba(139,109,47,.5)" strokeWidth="1"/>
          <ellipse cx="313" cy="118" rx="11" ry="14" fill="rgba(0,0,0,.8)" stroke="rgba(139,109,47,.3)" strokeWidth="1"/>
          <ellipse cx="347" cy="118" rx="11" ry="14" fill="rgba(0,0,0,.8)" stroke="rgba(139,109,47,.3)" strokeWidth="1"/>
          <path d="M 315 148 Q 330 152 345 148" stroke="rgba(139,109,47,.5)" strokeWidth="1.5" fill="none"/>
          <line x1="325" y1="148" x2="325" y2="154" stroke="rgba(139,109,47,.3)" strokeWidth="1"/>
          <line x1="330" y1="148" x2="330" y2="155" stroke="rgba(139,109,47,.3)" strokeWidth="1"/>
          <line x1="335" y1="148" x2="335" y2="154" stroke="rgba(139,109,47,.3)" strokeWidth="1"/>
          <text x="330" y="195" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(232,201,122,.8)" fontStyle="italic">MEMENTO MORI</text>
          <text x="330" y="210" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)" letterSpacing="1">sjeti se smrti</text>

          {/* Hourglass (left) */}
          <polygon points="110,60 170,60 140,115 170,170 110,170 140,115" fill="none" stroke="rgba(232,201,122,.5)" strokeWidth="1.5"/>
          <polygon points="115,65 165,65 140,113" fill="rgba(232,201,122,.1)"/>
          <text x="140" y="192" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(232,201,122,.7)" fontStyle="italic">TEMPUS FUGIT</text>
          <text x="140" y="207" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)" letterSpacing="1">vrijeme bježi</text>

          {/* Candle (right of hourglass) */}
          <rect x="205" y="90" width="20" height="70" rx="3" fill="rgba(255,230,100,.1)" stroke="rgba(255,230,100,.4)" strokeWidth="1"/>
          <ellipse cx="215" cy="90" rx="10" ry="4" fill="rgba(255,230,100,.15)"/>
          <line x1="215" y1="90" x2="215" y2="72" stroke="rgba(255,230,100,.5)" strokeWidth="1"/>
          <ellipse cx="215" cy="68" rx="6" ry="9" fill="rgba(255,200,50,.12)" stroke="rgba(255,200,50,.3)" strokeWidth="1"/>
          <ellipse cx="215" cy="64" rx="3" ry="5" fill="rgba(255,230,100,.2)"/>
          <text x="215" y="192" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,200,50,.7)" fontStyle="italic">VITA BREVIS</text>
          <text x="215" y="207" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)" letterSpacing="1">život je kratak</text>

          {/* Globe (right of skull) */}
          <circle cx="450" cy="125" r="45" fill="#0a1020" stroke="rgba(107,155,255,.4)" strokeWidth="1.5"/>
          <ellipse cx="450" cy="125" rx="45" ry="20" fill="none" stroke="rgba(107,155,255,.25)" strokeWidth="1"/>
          <line x1="450" y1="80" x2="450" y2="170" stroke="rgba(107,155,255,.25)" strokeWidth="1"/>
          <ellipse cx="450" cy="125" rx="28" ry="45" fill="none" stroke="rgba(107,155,255,.2)" strokeWidth="1"/>
          <text x="450" y="192" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(107,155,255,.7)" fontStyle="italic">SICUT FUMUS</text>
          <text x="450" y="207" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)" letterSpacing="1">kao dim prolazi</text>

          {/* Fading flower (far right) */}
          <circle cx="560" cy="115" r="22" fill="rgba(220,50,47,.08)" stroke="rgba(220,50,47,.3)" strokeWidth="1"/>
          {[0,60,120,180,240,300].map((angle,i)=>{
            const rad = angle * Math.PI / 180;
            const x2 = 560 + 30 * Math.cos(rad);
            const y2 = 115 + 30 * Math.sin(rad);
            return <ellipse key={i} cx={x2} cy={y2} rx="10" ry="15"
              transform={`rotate(${angle+90},${x2},${y2})`}
              fill="rgba(220,50,47,.1)" stroke="rgba(220,50,47,.25)" strokeWidth="1"/>;
          })}
          <circle cx="560" cy="115" r="8" fill="rgba(232,201,122,.2)" stroke="rgba(232,201,122,.4)" strokeWidth="1"/>
          <text x="560" y="192" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(220,50,47,.7)" fontStyle="italic">OMNIA VANITAS</text>
          <text x="560" y="207" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)" letterSpacing="1">sve je taština</text>

          {/* Central label */}
          <text x="330" y="260" textAnchor="middle" fontFamily="serif" fontSize="13" fill="rgba(255,255,255,.35)" fontStyle="italic">„Sav život — to je san, a san su i sami snovi.&quot; — Calderón, 1635.</text>
        </svg>
        <div className="wr3-legend">
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(139,109,47,.6)'}}/><span>Lubanja — memento mori: svi umiremo, rang ne štiti</span></div>
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(232,201,122,.6)'}}/><span>Pješčanik — tempus fugit: vrijeme bježi, svaki trenutak nestaje</span></div>
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(255,200,50,.6)'}}/><span>Svjeća — vita brevis: kratkoća života; ona se gasi kao što mi nestajemo</span></div>
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(220,50,47,.5)'}}/><span>Cvijeće — omnia vanitas: ljepota je prolazna kao cvat koji vene</span></div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [16] ACCORDION — 5 esejnih teza za Život je san
   HTML pozicija: L2 · Esej alat · sec "01 · 5 provjerenih teza"
   → ZAMJENJUJE 5 .box-20 blokova (TEZA 1–5)
   → Dolazi IZMEĐU .prose i sec-hdr "02 · Model uvoda"
============================================================ */
const TEZA_COLORS4 = ['#e9b446','#DC322F','#6b9bff','#3ecf6e','rgba(200,130,255,1)'];

const ESEJ_TEZE_H04 = [
  {br:'T1', naslov:'Vanitas — prolaznost kao moralna obveza', tag:'VANITAS · BAROK',
   teza:'„Calderónova drama nije pesimistički traktat o ništavnosti života, već barokni filozofski odgovor na vanitas — pokazuje da upravo prolaznost obvezuje čovjeka na moralno djelovanje."',
   args:['Sigismundov zaključak „u snu valja činiti dobro" direktno vezuje prolaznost s obvezom — vanitas je motor moralne odluke, ne nihilizma','Motiv sna prožima dramu od I do III čina: dvor-san, tamnica-java, pobuna-novi san? Ali moralna obveza ostaje u svakom stanju','Epoha Sigla de Oro: Španjolska politički pada, ali kulturno cvjeta — Calderón vanitas ne piše kao očajnik nego kao filosof koji pronalazi smisao'],
   scena:'II. čin — Sigismundov veliki monolog u tamnici. „O, malen je dar nam dan..." — prolaznost i moralna agenda u jednoj rečenici.'},
  {br:'T2', naslov:'Slobodna volja nadvladava sudbinu', tag:'SLOBODNA VOLJA · FINALE',
   teza:'„Drama Život je san afirmira slobodnu volju — Sigismund nadvladava proročanstvo moralnim izborom, čime Calderón pokazuje da sudbina nije apsolutna ako čovjek stekne samospoznaju."',
   args:['Bazilijeva astrološka pogreška sama uzrokuje ispunjenje proročanstva: zatvorom sinu oduzima razvoj → zvijer. Sudbina se realizira kroz ljudsku odluku','Sigismund u III. činu bira milost umjesto osvete — proročanstvo tehnički ispunjeno (sin je pobijedio oca), ali duhovno nadvladano','Klarin koji bježi od borbe pogiba — nitko ne može pobjeći sudbini kroz bijeg, ali Sigismund je mijenja iznutra kroz moralni izbor'],
   scena:'Finale — Sigismund oprašta Baziliju. Umjesto pogubljenja — oprost. Proročanstvo ispunjeno formalno, nadvladano duhom.'},
  {br:'T3', naslov:'Odgoj formira čovjeka — predznak prosvjetiteljstva', tag:'ODGOJ · PEDAGOG',
   teza:'„Calderón postavlja pitanje odnosa prirode i odgoja i odgovara jasno — Sigismund nije rođen kao tiranin, nego je takvim postao zbog odgoja u tamnici. Drama je preteča prosvjetiteljske pedagogije."',
   args:['Sigismundove tri faze — zvijer → tiranin → mudri vladar — nisu priroda nego reakcija na socijalne uvjete. U kuli: bijes. Na dvoru: osveta. U iskustvu: milost','Klotaldo ga obrazovao (filozofija, politika) ali bez iskustva zajednice. Znanje bez iskustva pretvara se u bijes — Calderón anticipira Locka','Most prema H05: što je za Calderóna teološko-filozofsko pitanje, za Rousseaua postaje pedagoški program. Barok anticipira prosvjetiteljstvo'],
   scena:'II. čin — Sigismund na dvoru: baca slugu s balkona, napada Klotalda. Dokazuje da nije obrazovan za društvo. Kad dobije iskustvo + refleksiju — postaje mudrac.'},
  {br:'T4', naslov:'San kao alegorija spoznajne neizvjesnosti', tag:'SAN · FILOZOFIJA',
   teza:'„Motiv sna nije samo metafora prolaznosti — Calderón kroz njega izražava barokni skepticizam: čovjek nikad sigurno ne zna što je stvarno, pa mora djelovati bez te sigurnosti."',
   args:['Sigismund ne može razlikovati je li dvorsko iskustvo san ili java. Epistemološka neizvjesnost je strukturna — Calderón ne daje odgovor, on dramatizira pitanje','Paralela s Descartesom (1637.): Calderón kulturno anticipira modernu filozofsku skepsu kroz dramu, ne kroz traktat. Oba žive u 17. st.','Odgovor je pragmatičan: „makar sve bilo san, valja činiti dobro." Neizvjesnost ne paralizira — ona prisiljava na moralnu akciju bez garancija'],
   scena:'III. čin — pobuna naroda. Sigismund pita se: „Sanjam li opet?" Odlučuje djelovati bez odgovora. Filozofska sumnja i moralna odluka simultano.'},
  {br:'T5', naslov:'Siglo de Oro i Calderónovo mjesto u europskoj književnosti', tag:'EPOHA · KONTEKST',
   teza:'„Život je san nije izoliran klasik — on je vrhunac španjolskog Zlatnog vijeka i most između srednjovjekovne metafizike i moderne filozofije pojedinca."',
   args:['Siglo de Oro (~1550.–1681.) je paradoksalna epoha: Španjolska gubi politički svijet ali osvaja kulturu. Calderón je zadnji glas — s njim 1681. era se zatvara','Calderón preuzima srednjovjekovnu alegoriju (auto sacramental) i modernizira je kroz psihološku dubinu. Spoj forme i sadržaja je jedinstven u europskom baroku','Utjecaj na europski romantizam: Goethe i Schlegel smatraju ga jednakim Shakespeareu. Schopenhauer citira dramu kao filozofsku ilustraciju vanitasa'],
   scena:'Finalni monolog: „Moj učitelj bio je san." Ta jedna rečenica sumira cijelu dramu i cijeli barok. Europski klasik koji će preživjeti 400 godina.'},
];

export function AccordionEsejTezeH04() {
  return (
    <>
      <style>{CSS_SC3}</style>
      <div className="sc3s">
        {ESEJ_TEZE_H04.map((t,idx)=>(
          <details className="sc3" key={t.br} style={{'--sc3-accent':TEZA_COLORS4[idx]}}>
            <summary className="sc3-sum">
              <div className="sc3-num" style={{fontSize:13,color:TEZA_COLORS4[idx]}}>{t.br}</div>
              <div className="sc3-ttl">{t.naslov}</div>
              <span className="sc3-meta" style={{color:TEZA_COLORS4[idx],borderColor:`${TEZA_COLORS4[idx]}55`}}>{t.tag}</span>
              <span className="sc3-chev" style={{color:TEZA_COLORS4[idx]}}>▾</span>
            </summary>
            <div className="sc3-body">
              <div className="sc3-quote">{t.teza}</div>
              <div className="sc3-why"><b>Argumenti:</b></div>
              <div className="sc3-args">
                {t.args.map((a,i)=>(
                  <div className="sc3-arg" key={i} style={{borderLeftColor:TEZA_COLORS4[idx]}}>
                    <span className="sc3-arg-num" style={{color:TEZA_COLORS4[idx]}}>({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc3-note">
                <strong style={{color:'var(--bronze)',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1}}>KLJUČNA SCENA: </strong>{t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   H04ReactLayers — portal mount
============================================================ */
function H04ReactLayers() {
  const [anchors, setAnchors] = useState({});
  useEffect(() => {
    setAnchors({
      compareBarok:         document.getElementById('h04-react-compare-barok-klasicizam'),
      timeline17St:         document.getElementById('h04-react-timeline-17-stoljece'),
      authorCalderon:       document.getElementById('h04-react-author-calderon'),
      timelineCalderon:     document.getElementById('h04-react-timeline-calderon'),
      authorFrancuski:      document.getElementById('h04-react-author-francuski'),
      authorMilton:         document.getElementById('h04-react-author-milton'),
      popKultura:           document.getElementById('h04-react-pop-kultura-barok'),
      heroQuote:            document.getElementById('h04-react-hero-quote-vita'),
      statCards:            document.getElementById('h04-react-stat-cards-zivot'),
      svgSigismund:         document.getElementById('h04-react-svg-sigismund'),
      timelineRadnja:       document.getElementById('h04-react-timeline-radnja'),
      accordionSukobi:      document.getElementById('h04-react-accordion-sukobi'),
      usporedba:            document.getElementById('h04-react-usporedba-zivot-hamlet'),
      accordionKljucne:     document.getElementById('h04-react-accordion-kljucne-scene'),
      svgVanitas:           document.getElementById('h04-react-svg-vanitas'),
      esejTeze:             document.getElementById('h04-react-accordion-esej-teze'),
      citatnik:             document.getElementById('h04-react-citatnik'),
      pojmovnik:            document.getElementById('h04-react-pojmovnik'),
    });
  }, []);
  return (
    <>
      {anchors.compareBarok     && createPortal(<CompareBarokKlasicizam />,     anchors.compareBarok)}
      {anchors.timeline17St     && createPortal(<Timeline17Stoljece />,          anchors.timeline17St)}
      {anchors.authorCalderon   && createPortal(<AuthorCardCalderon />,          anchors.authorCalderon)}
      {anchors.timelineCalderon && createPortal(<TimelineCalderon />,            anchors.timelineCalderon)}
      {anchors.authorFrancuski  && createPortal(<AuthorCardFrancuski />,         anchors.authorFrancuski)}
      {anchors.authorMilton     && createPortal(<AuthorCardMilton />,            anchors.authorMilton)}
      {anchors.popKultura       && createPortal(<PopKulturaBarok />,             anchors.popKultura)}
      {anchors.heroQuote        && createPortal(<HeroQuoteVitaEsSueno />,        anchors.heroQuote)}
      {anchors.statCards        && createPortal(<StatCardsZivotJeSan />,         anchors.statCards)}
      {anchors.svgSigismund     && createPortal(<SVGSigismundFaze />,            anchors.svgSigismund)}
      {anchors.timelineRadnja   && createPortal(<TimelineRadnjaH04 />,           anchors.timelineRadnja)}
      {anchors.accordionSukobi  && createPortal(<AccordionSukobiH04 />,          anchors.accordionSukobi)}
      {anchors.usporedba        && createPortal(<UsporedbaZivotJeSanHamlet />,   anchors.usporedba)}
      {anchors.accordionKljucne && createPortal(<AccordionKljucneSceneH04 />,    anchors.accordionKljucne)}
      {anchors.svgVanitas       && createPortal(<SVGVanitas />,                  anchors.svgVanitas)}
      {anchors.esejTeze         && createPortal(<AccordionEsejTezeH04 />,        anchors.esejTeze)}
      {anchors.citatnik         && createPortal(
        <CitatnikH04
          onBack={() => window.sw && window.sw(2)}
          onNext={() => window.sw && window.sw(4)}
        />,
        anchors.citatnik
      )}
      {anchors.pojmovnik        && createPortal(<H04PojmovnikTab />, anchors.pojmovnik)}
    </>
  );
}

export default H04ReactLayers;
