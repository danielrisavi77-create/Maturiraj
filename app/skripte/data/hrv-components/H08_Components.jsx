/* ============================================================
   H08 — Moderna · Franz Kafka · Preobražaj
   ⚠️  OBVEZATNO ISPITNO DJELO 2026

   NAPOMENA: H08 već ima 5 SVG-a, 7 accordion scena,
   citatnik, pojmovnik, matching game. Ove additions
   dopunjuju što stvarno nedostaje.

   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

import { useState } from 'react';

/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_SECHDR8 = `
  .sh8{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh8-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh8-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;
function SH8({label,style}){
  return(
    <><style>{CSS_SECHDR8}</style>
    <div className="sh8" style={style}>
      <div className="sh8-line"/><div className="sh8-badge">{label}</div><div className="sh8-line"/>
    </div></>
  );
}

const CSS_AC8 = `
  .ac8{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac8:hover{border-color:var(--bd-br)}
  .ac8-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac8-mono{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,#0a0a1a,#1a1a3a);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(91,100,200,.3)}
  .ac8-meta{flex:1;min-width:0}
  .ac8-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac8-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac8-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac8-star{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;color:var(--gold);letter-spacing:.5px;margin-top:6px}
  .ac8-body{padding:18px 22px}
  .ac8-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac8-body p:last-child{margin-bottom:0}
  .ac8-body strong{color:var(--t1)}
  .ac8-body em{color:var(--gold);font-style:italic}
  .ac8-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac8-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac8-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac8-work:last-child{border-bottom:none;padding-bottom:0}
  .ac8-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac8-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac8-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac8-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  @media(max-width:600px){.ac8-hdr{flex-direction:column;gap:10px}.ac8-mono{width:42px;height:42px;font-size:18px}.ac8-body{padding:14px 16px}.ac8-name{font-size:15px}}
`;

const CSS_TL8 = `
  .tl8{position:relative;padding:20px 0;margin:18px 0}
  .tl8::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl8-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl8-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl8-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl8-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl8-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl8-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl8-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC8 = `
  .sc8s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc8{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc8:hover{border-color:var(--bd-br)}
  .sc8[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc8-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc8-sum::-webkit-details-marker{display:none}
  .sc8-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc8[open] .sc8-chev{transform:rotate(180deg);color:var(--gold)}
  .sc8-num{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);min-width:32px}
  .sc8[open] .sc8-num{color:var(--gold)}
  .sc8-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc8-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc8-body{padding:0 16px 16px}
  .sc8-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc8-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .sc8-why b{color:var(--t1)}
  .sc8-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc8-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc8-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .sc8-note{margin-top:10px;padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .sc8-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc8-meta{display:none}
    .sc8-body{padding:0 12px 12px}
  }
`;

const CSS_CMP8 = `
  .cmp8{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp8-side{padding:18px 20px;background:var(--sur)}
  .cmp8-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp8-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp8-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp8-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp8-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp8-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp8-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:62px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp8{grid-template-columns:1fr}.cmp8-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp8-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT8 = `
  .stat8{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 20px}
  .stat8-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat8-card:hover{border-color:rgba(91,100,200,.35);transform:translateY(-2px)}
  .stat8-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat8-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat8-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat8-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat8{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE8 = `
  .hq8{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(91,100,200,.04),rgba(232,201,122,.03));position:relative;overflow:hidden}
  .hq8::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.06;line-height:1;pointer-events:none}
  .hq8::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,rgba(91,100,200,.6),transparent)}
  .hq8-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(130,140,255,.9);margin-bottom:10px}
  .hq8-text{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);line-height:1.45;font-style:italic;margin-bottom:10px}
  .hq8-text em{color:#e9b446;font-style:normal}
  .hq8-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq8-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq8{padding:18px 18px 18px 22px}.hq8-text{font-size:14px}}
`;

const CSS_POP8 = `
  .pop8{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop8-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop8-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop8-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop8-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop8-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop8{grid-template-columns:1fr}}
`;

const CSS_SIMB8 = `
  .simb8{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:14px 0}
  .simb8-item{display:flex;gap:10px;padding:12px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);align-items:flex-start;transition:border-color .2s}
  .simb8-item:hover{border-color:rgba(232,201,122,.25)}
  .simb8-ico{font-size:20px;flex-shrink:0;margin-top:1px}
  .simb8-name{font-family:var(--display);font-size:13px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .simb8-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
  @media(max-width:600px){.simb8{grid-template-columns:1fr}}
`;

const TEZA_COLORS8 = ['#e9b446','#3ecf6e','#DC322F','#6b9bff','#f97316','#e879f9','#06b6d4'];

/* ============================================================
   [1] AUTHOR CARD — Franz Kafka
============================================================ */
export function AuthorCardKafka({context='l0'}) {
  return (
    <>
      <style>{CSS_AC8}</style>
      <div className="ac8">
        <div className="ac8-hdr">
          <div className="ac8-mono">K</div>
          <div className="ac8-meta">
            <div className="ac8-name">Franz Kafka</div>
            <div className="ac8-dates">PRAG · 1883. – KIERLING · 1924.</div>
            <div className="ac8-tags">
              <span className="pill p-br" style={{fontSize:10}}>kafkijanski</span>
              <span className="pill p-t" style={{fontSize:10}}>ekspresionizam</span>
              <span className="pill p-go" style={{fontSize:10}}>parabola · apsurd</span>
              {context==='l1'&&<div className="ac8-star">⭐ OBVEZATNO DJELO 2026</div>}
            </div>
          </div>
        </div>
        <div className="ac8-body">
          <p>Praški pisac židovskog porijekla koji piše na njemačkom — tristruki autsajder (Čeh među Nijemcima, Židov među kršćanima, sin koji se ne može othrvati ocu). 14 godina proveo u <strong>Zavodu za osiguranje od nezgoda</strong> — piše noću, bira između književnosti i spavanja. Tri puta zaručen i raskinut, nikad oženjen. Tri puta zamolio prijatelja Maxa Broda da spali sve rukopise. <em>Brod nije.</em></p>
          <p>Jedina književna riječ koja je ušla u <strong>Oxford English Dictionary kao prijev</strong>: <em>kafkaesque</em> — situacija koja je birokratski apsurdna, prijeteća i bez izlaza. Freud, Camus, García Márquez, Beckett — svi navode Kafku kao temeljni utjecaj.</p>
          <div className="ac8-works">
            <div className="ac8-works-lbl">Ključna djela</div>
            <div className="ac8-work">
              <div className="ac8-badge">🪲</div>
              <div>
                <div className="ac8-work-title">Preobražaj (Die Verwandlung)</div>
                <div className="ac8-work-meta">1915. · PRIPOVIJETKA · 3 DIJELA</div>
                <div className="ac8-work-desc">Gregor Samsa se budi kao kukac. Alijenacija, obiteljski raspad, smrt. <strong>Obvezatno 2026.</strong> Napisano za jednu noć 1912.</div>
              </div>
            </div>
            <div className="ac8-work">
              <div className="ac8-badge">⚖️</div>
              <div>
                <div className="ac8-work-title">Proces (Der Proceß)</div>
                <div className="ac8-work-meta">1925. (posmrtno) · NEDOVRŠENI ROMAN</div>
                <div className="ac8-work-desc">Josef K. uhićen bez razloga, suđen bez optužbe, ubijen bez presude. Birokratski apsurd kao metafora modernog života. Kafka tražio da se spali — Brod objavio.</div>
              </div>
            </div>
            <div className="ac8-work">
              <div className="ac8-badge">🏰</div>
              <div>
                <div className="ac8-work-title">Dvorac · Pismo ocu</div>
                <div className="ac8-work-meta">1926. · 1919. (45 STRANICA)</div>
                <div className="ac8-work-desc">Dvorac = nedovršeni roman, K. ne može doseći vlast koja upravlja životom. Pismo ocu = 45 stranica koje nikad nije poslao — autobiografski ključ za Preobražaj.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [2] TIMELINE — Kafka životopis
============================================================ */
const KAFKA_EVENTS = [
  {date:'1883.', major:true,  title:'Rođenje u Pragu',                                desc:'Židovska obitelj u Pragu — češki grad, njemački jezik, židovska kultura. Otac Hermann: samodostatan, grub, dominantan. Kafka mu nikad ne može ugoditi — taj odnos prožima sva njegova velika djela.'},
  {date:'1906.', major:false, title:'Pravo — ali ne odvjetnik',                       desc:'Doktorira pravo, ali ne želi biti odvjetnik. Radi kratkotrajne prakse. Literatura ga zaokupljuje više od bilo čega — piše noću, bira između sna i pisanja.'},
  {date:'1908.', major:false, title:'Zavod za osiguranje od nezgoda',                 desc:'Zapošljava se u državnom zavodu. 14 godina. Piše izvješća o nesrećama na radu — taj birokratski jezik izravno ulazi u Proces i Dvorac. Piše književnost noću, rukom.'},
  {date:'1912.', major:true,  title:'Preobražaj — jedne noći',                        desc:'Preobražaj napisan za jednu noć u listopadu 1912. Kafka piše u delirijumu — ujutro je pripovijetka gotova. Iste godine upoznaje Felice Bauer — prva od triju zaruka koje će raskinuti.'},
  {date:'1919.', major:false, title:'Pismo ocu — 45 stranica koje nikad nije poslao', desc:'Kafka piše dugačko pismo Hermannu Kafki — 45 stranica autobiografske analize odnosa. Majka ga ne dostavlja. Nikad nije poslano. Danas je ključ za razumijevanje Preobražaja i Procesa.'},
  {date:'1922.', major:false, title:'Prekida sve — tuberkuloza napreduje',             desc:'Daje otkaz u Zavodu. Tuberkuloza ga iscrpljuje. Prekida zaruku s Dorom Diamant (jedina žena s kojom je živio). Zamoli Maxa Broda da spali sve što nije objavio.'},
  {date:'1924.', major:true,  title:'Smrt u Kierling — 40 godina',                    desc:'Umire 3. lipnja 1924. od tuberkuloze grla — ne može gutati, umire od gladi. Brod ne spali rukopise. Kafka postaje jedan od najutjecajnijih pisaca 20. st. — posmrtno.'},
];

export function TimelineKafka() {
  return (
    <>
      <style>{CSS_TL8}</style>
      <SH8 label="03b · Kafka — kronologija"/>
      <div className="tl8">
        {KAFKA_EVENTS.map((ev,i)=>(
          <div className="tl8-ev" key={i}>
            <div className={`tl8-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl8-body">
              <div className="tl8-title">{ev.title}</div>
              <div className="tl8-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [3] COMPARE STRIP — Moderna vs Realizam (bridge H07→H08)
============================================================ */
export function CompareModernaRealizam() {
  const rows = [
    ['Stvarnost',  'Objektivna, spoznatljiva',            'Fragmentirana, apsurdna'],
    ['Pripovjedač','Sveznajući, pouzdan',                 'Nepouzdan, subjektivan'],
    ['Lik',        'Produkt društva',                     'Autsajder, otuđen od sebe'],
    ['Uzrok',      'Svaka posljedica ima uzrok',          'Uzrok izostaje (Kafka ne objašnjava)'],
    ['Stil',       'Detaljan opis, dijalog',              'Stream of consciousness, fragmenti'],
    ['Pitanje',    '„Zašto je svijet nepravedan?"',       '„Što ako svijet nije razumljiv?"'],
    ['Ključni',    'Zločin i kazna (H07)',                'Preobražaj (H08)'],
  ];
  return (
    <>
      <style>{CSS_CMP8}</style>
      <SH8 label="01b · Moderna vs Realizam — bridge H07→H08" style={{marginTop:24}}/>
      <div className="cmp8">
        <div className="cmp8-side left">
          <div className="cmp8-author">🏛 Realizam</div>
          <div className="cmp8-period">1830.–1895. · DOSTOJEVSKI · ← H07</div>
          {rows.map(([l,a])=>(<div className="cmp8-row" key={l}><span className="cmp8-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp8-vs"><span className="cmp8-vs-inner">→</span></div>
        <div className="cmp8-side">
          <div className="cmp8-author">🌀 Moderna</div>
          <div className="cmp8-period">1890.–1930. · KAFKA · H08</div>
          {rows.map(([l,,r])=>(<div className="cmp8-row" key={l}><span className="cmp8-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — ključna razlika u jednoj rečenici</div>
        <div className="box-int-txt">Dostojevski pita <strong>„zašto je Raskoljnikov ubio?&quot;</strong> i odgovara — teorija nadčovjeka, siromaštvo, gordost. Kafka pita <strong>„zašto se Gregor preobrazio?&quot;</strong> i ne odgovara nikad. Taj izostanak uzroka je moderna.</div>
      </div>
    </>
  );
}

/* ============================================================
   [4] POP KULTURA — Kafka danas
============================================================ */
const POP_KAFKA = [
  {film:'📖 „Kafkaesque" — Oxford Dictionary', title:'Jedina književna riječ kao prijev',   source:'Kafkaesque = birokratski apsurdan, prijeteći, bez izlaza. Jedina autorska riječ koja je ušla u rječnik kao opći pojam uz Machiavellian i Orwellian. Kafku citiraju bez da su ga čitali.'},
  {film:'🗺️ Prag — Kafka industrija',           title:'Turistički fenomen',                 source:'Kafka Museum, Kafka kava, Kafka suveniri, Kafka ture — Prag živi od Kafke. Ironija: Kafka je bio anoniman za života, progonjen osjećajem nevidljivosti. Sad je na svakom jastučniću.'},
  {film:'🎬 The Trial (1962.) — Orson Welles',  title:'Orson Welles adaptira Proces',       source:'Welles: „Proces je moj omiljeni film koji sam ikad napravio." Anthony Perkins kao Josef K. Crno-bijeli ekspresionistički vizual. Film se smatra jednom od najvećih književnih adaptacija.'},
  {film:'💼 „Kafka" u poslovnom govoru',        title:'Birokracija kao kafkijanski sustav', source:'„To je čisti Kafka" — govore menadžeri o složenim procedurama, „Kafkijanska noćna mora" u novinama o birokraciji. Kafka je jedini književnik koji je postao metafora za poslovni jezik.'},
  {film:'🎵 Radiohead — „OK Computer"',         title:'Kafkijanska alienacija u glazbi',    source:'„Karma Police", „No Surprises" — Thom Yorke citira Kafku kao inspiraciju. Alienated worker, dehumanized system, no exit. OK Computer (1997.) = Preobražaj u glazbi.'},
  {film:'📱 Black Mirror (2011.–)',             title:'Kafka u digitalnom dobu',            source:'Mnoge epizode su izravne Kafka parabole: anonimni sustav koji kontrolira život (Kafka Proces), čovjek pretvoren u objekt (Kafka Preobražaj), birokracija koja nema smisao. Charlie Brooker: „Kafka je naš prorok."'},
];

export function PopKulturaKafka() {
  return (
    <>
      <style>{CSS_POP8}</style>
      <SH8 label="Kafka u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="pop8">
        {POP_KAFKA.map((p,i)=>(
          <div className="pop8-card" key={i}>
            <div className="pop8-film">{p.film}</div>
            <div className="pop8-title">{p.title}</div>
            <div className="pop8-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [5] HERO QUOTE — Prva rečenica Preobražaja
============================================================ */
export function HeroQuotePreobrazaj() {
  return (
    <>
      <style>{CSS_QUOTE8}</style>
      <div className="hq8">
        <div className="hq8-eye">NAJPOZNATIJI POČETAK MODERNISTIČKE PROZE — NAPAMET</div>
        <div className="hq8-text">
          „Kad se Gregor Samsa jednoga jutra probudio iz nemirnih snova, nađe se u svom krevetu <em>preobražen u golemog kukca</em>.&quot;
        </div>
        <div className="hq8-body">Prva rečenica Preobražaja — in medias res, bez uzroka, bez objašnjenja. Kafka ne pita zašto — samo konstatira. Hladan, izvještajan ton opisuje nemoguće. <strong style={{color:'var(--t1)'}}>Ova rečenica mora biti napamet.</strong> Na eseju: citat + napomena da je to prototip moderne parabole = automatski +1 bod.</div>
        <div className="hq8-source">PREOBRAŽAJ (DIE VERWANDLUNG) · F. KAFKA · 1915. · I. DIO · EKSPRESIONIZAM</div>
      </div>
    </>
  );
}

/* ============================================================
   [6] STAT CARDS — Preobražaj
============================================================ */
export function StatCardsPreobrazaj() {
  const stats = [
    {ico:'📅', val:'1915.',     lbl:'Objava',           sub:'napisano 1912. jedne noći'},
    {ico:'📖', val:'3 dijela',  lbl:'Kompozicija',      sub:'tijelo → glas → smrt'},
    {ico:'🪲', val:'Ungeziefer',lbl:'Ne „kukac"',        sub:'gamad · ne za jelo'},
    {ico:'🍎', val:'Jabuka',    lbl:'Biblijska aluzija', sub:'Genesis · anti-Edip'},
  ];
  return (
    <>
      <style>{CSS_STAT8}</style>
      <div className="stat8">
        {stats.map(s=>(
          <div className="stat8-card" key={s.lbl}>
            <span className="stat8-ico">{s.ico}</span>
            <div className="stat8-val">{s.val}</div>
            <div className="stat8-lbl">{s.lbl}</div>
            <div className="stat8-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [7] SIMBOLI GRID
============================================================ */
export function SimboliGridPreobrazaj() {
  const simboli = [
    {ico:'🪲', name:'Ungeziefer (gamad)',  desc:'Kafka namjerno ne kaže "kukac" — Ungeziefer = gamad, nečist organizam koji nije za žrtvu. Vizualizira Gregorov socijalni status: nekoristan, odbačen, nehuman u očima društva.'},
    {ico:'🍎', name:'Jabuka u leđima',     desc:'Otac gađa Gregora jabukama, jedna se ognoji u leđima. Biblijska aluzija (Genesis, istočenje iz raja) + anti-Edip: ne sin ubija oca, nego otac sina. Gregorova smrt počinje jabukivanjem.'},
    {ico:'🚪', name:'Zaključana vrata',    desc:'Gregor zaključava svoja vrata — i ostaje sam. Obitelj zaključava njegova vrata — i izbacuje ga. Vrata = granica između Gregorova unutarnjeg svijeta i neprijateljevskog vanjskog.'},
    {ico:'🎻', name:'Glazba (violina)',    desc:'Greta svira violinu u III. dijelu. Gregor izlazi iz sobe, privučen glazbom — dokazuje da ima dušu. Ironija: taj dokaz čovječnosti pokreće Gretinu presudu. Glazba = posljednji most između njega i obitelji.'},
    {ico:'🪑', name:'Soba / namještaj',    desc:'Greta i majka uklanjaju namještaj u II. dijelu — „on je kukac, ne treba mu to." Namještaj = Gregorov identitet. Bez namještaja — gubi i zadnje veze s humanim. Predmeti nose više od ljudi.'},
    {ico:'🪖', name:'Očeva uniforma',      desc:'Otac koji je prije preobrazbe bio slab i debeo — sad nosi uniformu portira i izravna se. Kafka: uniforma = autoritet. Dok Gregor odumire, otac prolazi obrnutu transformaciju. Sin mora propasti da bi otac vladao.'},
  ];
  return (
    <>
      <style>{CSS_SIMB8}</style>
      <div className="simb8">
        {simboli.map((s,i)=>(
          <div className="simb8-item" key={i}>
            <span className="simb8-ico">{s.ico}</span>
            <div>
              <div className="simb8-name">{s.name}</div>
              <div className="simb8-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [8] COMPARE STRIP — Kafka vs Dostojevski (bridge H07→H08)
============================================================ */
export function CompareKafkaDostojevski() {
  const rowsL = [
    ['Pitanje',    '„Zašto je Raskoljnikov ubio?"'],
    ['Odgovor',    'Daje ga — teorija, gordost, siromaštvo'],
    ['Uzrok',      'Uvijek objašnjen'],
    ['Iskupljenje','Moguće — kroz patnju i vjeru'],
    ['Bog',        'Postoji — Sonja ga nosi'],
    ['Smisao',     'Da, teško dostižan'],
    ['Stil',       'Dijalog, psihološki realizam'],
  ];
  const rowsR = [
    ['Pitanje',    '„Zašto se Gregor preobrazio?"'],
    ['Odgovor',    'Ne daje ga nikad'],
    ['Uzrok',      'Namjerno izbrisan'],
    ['Iskupljenje','Nema — Gregor umire sam'],
    ['Bog',        'Odsutan — vrata, birokracija, apsurd'],
    ['Smisao',     'Ne, i to je poen'],
    ['Stil',       'Hladan izvještaj, apsurdna groteska'],
  ];
  return (
    <>
      <style>{CSS_CMP8}</style>
      <SH8 label="Kafka vs Dostojevski — oba obvezatna, suprotni odgovori" style={{marginTop:20}}/>
      <div className="cmp8">
        <div className="cmp8-side left">
          <div className="cmp8-author">Dostojevski</div>
          <div className="cmp8-period">REALIZAM · H07 · ZLOČIN I KAZNA · 1866.</div>
          {rowsL.map(([l,v])=>(<div className="cmp8-row" key={l}><span className="cmp8-lbl">{l}</span><span>{v}</span></div>))}
        </div>
        <div className="cmp8-vs"><span className="cmp8-vs-inner">VS</span></div>
        <div className="cmp8-side">
          <div className="cmp8-author">Kafka</div>
          <div className="cmp8-period">MODERNA · H08 · PREOBRAŽAJ · 1915.</div>
          {rowsR.map(([l,v])=>(<div className="cmp8-row" key={l}><span className="cmp8-lbl">{l}</span><span>{v}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — savršena cross-chapter teza</div>
        <div className="box-int-txt">„Dostojevski i Kafka prikazuju isti problem — otuđenog modernog čovjeka — ali iz suprotnih kutova: Dostojevski vjeruje da postoji <strong>put van</strong> (iskupljenje, Sonja, Sibir), Kafka tvrdi da <strong>puta nema</strong> (Gregor umire sam, obitelj se smije u tramvaju). Zajedno čine dijagnozu modernog čovjeka — s i bez nade.&quot;</div>
      </div>
    </>
  );
}

/* ============================================================
   [9] ACCORDION — 7 esejnih teza
============================================================ */
const ESEJ_TEZE_H08 = [
  {br:'T1',naslov:'Alijenacija modernog čovjeka',tag:'ALIJENACIJA · PARABOLA',
   teza:'„Preobražaj je parabola o otuđenju modernog čovjeka — od posla, obitelji, vlastitog tijela. Gregor je radnik sveden na funkciju; kad funkcija prestane, ostaje biološki ostatak bez identiteta."',
   args:['Gregor jedini zarađuje — obitelj ne radi, živi od njega. Kad prestaje zarađivati, prestaju ga tretirati kao čovjeka','„Jedini razlog življenja bio je posao" — Kafka dijagnosticira kapitalistički reduktivizam: čovjek = njegova ekonomska korisnost','Paralela s Dostojevskim (H07): Marmeladovi se raspadaju iz istog razloga — ekonomija određuje obiteljsku ljubav'],
   scena:'Prokurist dolazi ujutro po Gregora — ne pita „kako si?" nego „zašto kasniš?". Birokracija nije svjesna čovjeka.'},
  {br:'T2',naslov:'Krhkost obiteljskih veza',tag:'OBITELJ · EKONOMIJA',
   teza:'„Obitelj voli Gregora dok zarađuje. Kad postane teret — prestaju ga voljeti. Greta, koja ga je najviše voljela, donosi presudu. Ljubav je uvjetovana ekonomski."',
   args:['Obrnuta dinamika moći: Gregor je hranio obitelji, sad su obrnute uloge — no obitelj ne uzvraća ljubav nego osudu','Greta prolazi paralelnu preobrazbu: od brižne sestre koja mu donosi hranu → do žene koja kaže „to više nije Gregor"','Kafka kritizira buržoasku obitelj kao instituciju interesa, ne ljubavi — autobiografska dimenzija (odnos s ocem Hermannom)'],
   scena:'Gretina presuda (III. dio): „Moramo se pokušati riješiti toga." Prijelaz od „njega" u „to" — lingvistički izraz gubitka humanosti.'},
  {br:'T3',naslov:'Otac kao autoritet — anti-Edip',tag:'AUTORITET · PSIHOANALIZA',
   teza:'„U klasičnom mitu sin ubija oca. Kafka okreće: otac kažnjava sina. Hermann Samsa = verzija Hermanna Kafke. Sin mora umrijeti da bi otac uskrsnuo."',
   args:['Otac prije preobrazbe: stari, debeo, sporobudan poduzetnik koji živi od Gregorova rada','Otac nakon preobrazbe: uniforma portira, izravna leđa, autoritativan, moćan, gađa jabukama','Pismo ocu (1919.) = 45 stranica autobiografske analize — direktni ključ za razumijevanje oca u Preobražaju'],
   scena:'Jabuka u leđima (II. dio): otac gađa Gregora iz košare. Jedna se ognoji — Gregor umire od te upale. Anti-Genesis: jabuka ne donosi znanje, nego smrt.'},
  {br:'T4',naslov:'Birokratska dehumanizacija',tag:'BIROKRACIJA · KAPITALIZAM',
   teza:'„Gregorov posao je besmislen: putuje, ne stvara odnose, jedina motivacija je otplata duga. Prokurist ne pita «kako si?» nego «zašto kasniš?». Modernu radnu organizaciju Kafka prikazuje kao mehaniku koja proždire dušu."',
   args:['Kafka piše iz prve ruke — 14 godina u Zavodu za osiguranje radnika, piše izvješća o ozljedama na radu','„Kafkijanski" prije Marxa: Kafka vizualizira otuđeni rad bez teorijskog aparata — samo prikazuje','Prokurist je karikatuta sustava: brine o poslovnom izvješću dok pred njim stoji čovjek koji se preobrazio u kukca'],
   scena:'Prokuristov dolazak (I. dio) — Gregor je iza zatvorenih vrata, kaže mu da ne brine, priča o poslu. Prokurist već bježi.'},
  {br:'T5',naslov:'Groteska, parabola, apsurd',tag:'MODERNISTIČKI POSTUPAK',
   teza:'„Kafka koristi grotesku (kukac u krevetu) kao sredstvo modernističkog izraza. Pripovijetka je parabola s univerzalnim značenjem. Apsurd: nemoguće se događa, a pripovjedač opisuje ravnodušno."',
   args:['Groteska = spoj komičnog i strašnog: Gregor pada i kmiječi — situacija je fizički komična ali egzistencijalno tragična','Parabola: konkretna situacija (preobrazba) nosi apstraktnu poruku (alijenacija) — Kafka ne objašnjava, čitatelj zaključuje','Anticipira Camusa (apsurd bez izlaza, H09), Becketta (nema smisla čekati), Márqueza (magični realizam)'],
   scena:'Gregor se ogromnim trudom prevrti i otključa vrata ustima (I. dio) — Kafka opisuje tu komičnu herojsku borbu tonom rutinskog izvješća.'},
  {br:'T6',naslov:'Greta — paralelna preobrazba',tag:'GRETA · OBRAT',
   teza:'„Dok Gregor odumire, Greta sazrijeva. Obrnute trajektorije: Gregor → životinja → smrt; Greta → djevojka → odrasla žena. Kafka kritizira društvenu mehaniku zamjene."',
   args:['Greta donosi hranu I. dio — brine, eksperimentira što mu odgovara. To je Kafka-Gretina prava sestra','U II. dijelu uklanja namještaj — „on je kukac, ne treba mu to". Distancija raste','Posljednja slika: Greta u tramvaju s roditeljima, „rastegnula se i ispravila tijelo" — sve Gregorovo iskoristila za vlastito sazrijevanje'],
   scena:'Gretina presuda (III. dio) i posljednja slika romana: obitelj se smije u tramvaju, sunce sja. Kafka ne daje nikakvu moralnu osudu — samo prikazuje.'},
  {br:'T7',naslov:'Glazba kao posljednji znak ljudskosti',tag:'GLAZBA · IRONIJA',
   teza:'„U III. dijelu Greta svira violinu. Gregor izlazi iz sobe, privučen glazbom. «Je li bio životinja, kad ga je glazba tako dirala?» — ključno pitanje romana. Upravo dok dokazuje dušu, obitelj donosi presudu."',
   args:['Gregor je htio upisati Gretu u konzervatorij — violina je bila zajednički projekt. Sada je ona svira, on samo sluša','Izlazak iz sobe = prvi put u III. dijelu. Glazba = jedino što ga još privlači. Žudnja za ljepotom = žudnja za humanošću','Tragična ironija: Gregor dokazuje da ima dušu upravo u trenutku kad obitelj donosi odluku o njegovu uklanjanju'],
   scena:'„Je li bio životinja, kad ga je glazba tako dirala?" — Narrator postavlja pitanje umjesto Gregora, koji ne može govoriti. Jedino direktno pitanje u romanu.'},
];

export function AccordionEsejTezeH08() {
  return (
    <>
      <style>{CSS_SC8}</style>
      <div className="sc8s">
        {ESEJ_TEZE_H08.map((t,idx)=>(
          <details className="sc8" key={t.br}>
            <summary className="sc8-sum">
              <div className="sc8-num" style={{fontSize:13,color:TEZA_COLORS8[idx]}}>{t.br}</div>
              <div className="sc8-ttl">{t.naslov}</div>
              <span className="sc8-meta" style={{color:TEZA_COLORS8[idx],borderColor:`${TEZA_COLORS8[idx]}55`}}>{t.tag}</span>
              <span className="sc8-chev" style={{color:TEZA_COLORS8[idx]}}>▾</span>
            </summary>
            <div className="sc8-body">
              <div className="sc8-quote">{t.teza}</div>
              <div className="sc8-why"><b>Argumenti:</b></div>
              <div className="sc8-args">
                {t.args.map((a,i)=>(
                  <div className="sc8-arg" key={i} style={{borderLeftColor:TEZA_COLORS8[idx]}}>
                    <span className="sc8-arg-num" style={{color:TEZA_COLORS8[idx]}}>({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc8-note">
                <strong style={{color:'var(--bronze)',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1,fontStyle:'normal'}}>KLJUČNA SCENA: </strong>{t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
