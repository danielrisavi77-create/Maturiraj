/* ============================================================
   H03 — Renesansa · Shakespeare · Hamlet
   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

import { useState } from 'react';

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

export function AuthorCardShakespeare({ context = 'l0' }) {
  return (
    <>
      <style>{CSS_AC3}</style>
      <div className="ac3">
        <div className="ac3-hdr">
          <div className="ac3-mono">W</div>
          <div className="ac3-meta">
            <div className="ac3-name">William Shakespeare</div>
            <div className="ac3-dates">STRATFORD-UPON-AVON · 1564. – 1616.</div>
            <div className="ac3-tags">
              <span className="pill p-br" style={{fontSize:10}}>blank verse</span>
              <span className="pill p-go" style={{fontSize:10}}>elizabetanska era</span>
              <span className="pill p-r" style={{fontSize:10}}>tragičar</span>
              {context==='l1'&&<div className="ac3-star">⭐ OBVEZATNO DJELO 2026</div>}
            </div>
          </div>
        </div>
        <div className="ac3-body">
          <p>Najveći dramatičar engleske i svjetske književnosti. Rođen u Stratfordu, kazališni čovjek cijelog života — glumac, pisac i suvlasnik kazališta <em>The Globe</em> u Londonu. Napisao <strong>~39 drama i 154 soneta</strong> za samo dvadesetak godina aktivnog rada. Elizabetansko doba (vladavina Elizabete I.) koje ga je oblikovalo bilo je zlatno doba engleske književnosti.</p>
          <p>Harold Bloom je napisao da je <em>&bdquo;Shakespeare izumio čovjeka&ldquo;</em> — misleći na psihološku dubinu Hamleta koja po prvi put u književnosti prikazuje individuu s unutrašnjim životom, a ne tip ili simbol.</p>
          <div className="ac3-works">
            <div className="ac3-works-lbl">Ključna djela</div>
            <div className="ac3-work">
              <div className="ac3-badge">💀</div>
              <div>
                <div className="ac3-work-title">Hamlet</div>
                <div className="ac3-work-meta">~1600./1601. · TRAGEDIJA · 5 ČINOVA · ~4000 STIHOVA</div>
                <div className="ac3-work-desc">Osveta, oklijevanje, egzistencijalna dilema. <strong>Obvezatno čitanje 2026.</strong> Najdulja Shakespeareova drama.</div>
              </div>
            </div>
            <div className="ac3-work">
              <div className="ac3-badge">🗡️</div>
              <div>
                <div className="ac3-work-title">Macbeth · Othello · Kralj Lear</div>
                <div className="ac3-work-meta">1603.–1606. · ČETIRI VELIKE TRAGEDIJE</div>
                <div className="ac3-work-desc">Ambicija, ljubomora, senilnost. Uz Hamleta — vrhunac europske dramatike.</div>
              </div>
            </div>
            <div className="ac3-work">
              <div className="ac3-badge">🌹</div>
              <div>
                <div className="ac3-work-title">Romeo i Julija · Soneti</div>
                <div className="ac3-work-meta">~1595. · TRAGEDIJA + 154 SONETA (1609.)</div>
                <div className="ac3-work-desc">Ljubavna tragedija + najpoznatiji sonet u engleskoj književnosti (Sonet 18: &bdquo;Shall I compare thee to a summer&apos;s day?&ldquo;).</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const SHAKESPEARE_EVENTS = [
  {date:'1564.',  major:true,  title:'Rođenje u Stratfordu',     desc:'Stratford-upon-Avon, Warwickshire. Otac John Shakespeare — rukavičar i gradski vijećnik. Latinska škola — Shakespeare dobiva solidno klasično obrazovanje.'},
  {date:'1582.',  major:false, title:'Ženidba s Anne Hathaway',  desc:'Shakespeare ima 18, Anne 26. Tri djece: Susanna i blizanci Hamnet i Judith. Hamnet umire 1596. u dobi od 11 godina.'},
  {date:'1592.',  major:false, title:'London — uspjeh i kritike', desc:'Prve reference na Shakespearea kao dramatičara u Londonu. Kritičar Robert Greene ga napada kao parvenu — znak da je već zapažen i konkurentan.'},
  {date:'1594.',  major:false, title:"Lord Chamberlain's Men",   desc:'Pridružuje se elitnoj kazališnoj družini. Glumac, pisac, suvlasnik. Izvodit će u svim ključnim prostorima Londona.'},
  {date:'1599.',  major:true,  title:'The Globe — otvaranje',    desc:'Suvlasnik i pisac rezidentnog kazališta The Globe na južnoj obali Temze. Kapacitet 3.000 gledatelja. Tu će biti premijere Hamleta, Othellea, Macbetha.'},
  {date:'~1601.', major:true,  title:'Hamlet — premijera',       desc:'Nastaje između 1599. i 1601. Vrhunac Shakespeareovog stvaralaštva — ujedno i najdulja od njegovih drama (~4.000 stihova, oko 4 sata izvedbe).'},
  {date:'1613.',  major:false, title:'Povlačenje u Stratford',   desc:'Shakespeare se povlači iz Londona i vraća u Stratford. The Globe izgori iste godine (topovski hitac za kazališnom izvedbom).'},
  {date:'1616.',  major:true,  title:'Smrt · iste kao Cervantes',desc:'Umire 23. travnja 1616. u Stratfordu. Isti datum kao Cervantes (simbolički, ali različiti kalendarski sustavi). Sahranjen u crkvi Holy Trinity.'},
];

export function TimelineShakespeare() {
  return (
    <>
      <style>{CSS_TL3}</style>
      <SH3 label="04b · Shakespeareov životopis — kronologija"/>
      <div className="tl3">
        {SHAKESPEARE_EVENTS.map((ev,i)=>(
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

const CETIRI_TRAGEDIJE = [
  {br:'I', naslov:'Hamlet', tag:'~1601.', podnaslov:'oklijevanje · osveta · egzistencija',
   citat:'\u201eByti ili ne biti \u2014 to je pitanje.\u201c (III/1)',
   esej:'Obvezatno djelo 2026. Junak koji ne može djelovati zbog prekomjernog razmišljanja. Hamartia = oklijevanje. Jedina tragedija gdje je pitanje "zašto junak ne djeluje" važnije od pitanja "što se događa". Tema: osveta, egzistencijalna dilema, korumpirani svijet.',
   razlika:'Hamlet je intelektualna tragedija — sve je u glavi junaka. Ostale tri tragedije imaju junake koji DJELUJU (pa griješe).'},
  {br:'II', naslov:'Othello', tag:'~1603.', podnaslov:'ljubomora · manipulacija · rasizam',
   citat:'"Green-eyed monster" — Shakespeareova metafora za ljubomoru. (III/3)',
   esej:'Mletački general Othello (Maur) ubija ženu Desdemonu zbog sumnje u nevjeru — podmetanje Jagovo. Tema: ljubomora, rasizam, manipulacija, povjerenje. Hamartia = prebrzo povjerenje. Jago je jedan od najkompleksnijih negativaca u književnosti.',
   razlika:'Za razliku od Hamleta koji oklijeva, Othello djeluje — ali na temelju lažnih informacija. Tragedija naivnosti, ne refleksije.'},
  {br:'III', naslov:'Macbeth', tag:'~1606.', podnaslov:'ambicija · krivnja · tiranija',
   citat:'"Fair is foul, and foul is fair." — vještice, uvod drame.',
   esej:'Škotski general Macbeth, potaknut proročanstvom triju vještica i lady Macbeth, ubija kralja i uzima prijestolje. Tragedija ambicije i krivnje. Lady Macbeth = jedan od najkompleksnijih ženskih likova u književnosti. Tema: moć, krivnja, paranoja.',
   razlika:'Macbeth je najkraća od četiri tragedije i najkoncentriranija — od prvog do zadnjeg čina junak se raspada. Nema Hamletovog oklijevanja.'},
  {br:'IV', naslov:'Kralj Lear', tag:'~1606.', podnaslov:'senilnost · lojalnost · ništavnost moći',
   citat:'"Nothing will come of nothing." — Lear Cordeliji, I/1.',
   esej:'Stari kralj dijeli kraljevstvo prema iskazanoj ljubavi kćeri. Dvije laskave (Goneril, Regan) ga izdaju, iskrena (Cordelia) je prognana. Lear poludi. Drama o pogrešnom sudu, senilnosti i lojalnosti. Najuniverzalnija — o starenju, o tome kome vjerovati.',
   razlika:'Za razliku od Hamleta (mlad junak, intelektualna drama), Lear je star i emocionalan. Tragedija je izvana — nepravde mu čine drugi, ne on sam sebi.'},
];

export function AccordionCetiriTragedije() {
  return (
    <>
      <style>{CSS_SC3}</style>
      <SH3 label="05 · Četiri velike tragedije — usporedba"/>
      <p className="prose" style={{marginBottom:12}}>Hamlet je najvažniji za 2026. — ali ova četiri zajedno čine Shakespeareov vrhunac. Klikni za razliku i esejske napomene.</p>
      <div className="sc3s">
        {CETIRI_TRAGEDIJE.map(t=>(
          <details className="sc3" key={t.br}>
            <summary className="sc3-sum">
              <div className="sc3-num">{t.br}</div>
              <div className="sc3-ttl">{t.naslov} — <em>{t.podnaslov}</em></div>
              <span className="sc3-meta">{t.tag}</span>
              <span className="sc3-chev">▾</span>
            </summary>
            <div className="sc3-body">
              <div className="sc3-quote">{t.citat}</div>
              <div className="sc3-why"><b>Za esej:</b> {t.esej}</div>
              <div className="sc3-note">
                <strong style={{color:'var(--bronze)',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1}}>RAZLIKA OD HAMLETA: </strong>{t.razlika}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

export function AuthorCardCervantes() {
  return (
    <>
      <style>{CSS_AC3}</style>
      <div style={{fontFamily:'var(--mono)',fontSize:9,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'var(--t3)',marginBottom:14}}>
        ISTE GODINE UMRLI — SHAKESPEARE I CERVANTES · 1616.
      </div>
      <div className="ac3">
        <div className="ac3-hdr">
          <div className="ac3-mono" style={{background:'linear-gradient(135deg,#1a4a6a,#2a6a9a)'}}>C</div>
          <div className="ac3-meta">
            <div className="ac3-name">Miguel de Cervantes</div>
            <div className="ac3-dates">ALCALÁ DE HENARES · 1547. – 1616.</div>
            <div className="ac3-tags">
              <span className="pill p-t" style={{fontSize:10}}>Don Quijote</span>
              <span className="pill p-br" style={{fontSize:10}}>španjolska renesansa</span>
              <span className="pill p-go" style={{fontSize:10}}>prvi moderni roman</span>
            </div>
          </div>
        </div>
        <div className="ac3-body">
          <p>Španjolski pisac, vojnik, zarobljenik. Izgubio lijevu ruku u Bici kod Lepanta (1571.) boreći se za kršćansku Europu. Bio zarobljenik u Alžiru 5 godina. Pisac koji je živio avanture koje opisuje.</p>
          <p><em>Don Quijote</em> (1605./1615.) je <strong>prvi moderni roman</strong> — parodija viteškog romana koja postaje nešto puno dublje: tragikomedija o idealizmu sudarenom sa stvarnošću. Tema koja je aktualna i danas.</p>
          <div className="ac3-works">
            <div className="ac3-works-lbl">Ključno djelo</div>
            <div className="ac3-work">
              <div className="ac3-badge">🏇</div>
              <div>
                <div className="ac3-work-title">Don Quijote od Manche</div>
                <div className="ac3-work-meta">1605. (I. DIO) + 1615. (II. DIO) · ROMAN · ŠPANJOLSKI</div>
                <div className="ac3-work-desc">Osiromašeni plemić čita previše viteških romana, poludi i krene &bdquo;vitezovati&ldquo;. Vjetrenjače = divovi. Seljanka Aldonza = plemenita dama Dulcineja. <strong>Sancho Panza</strong> (vjerni sluga) = zdrav razum koji prati ideal. Tema: sukob ideala i stvarnosti.</div>
              </div>
            </div>
          </div>
          <div style={{marginTop:12,padding:'10px 14px',background:'var(--ele)',borderRadius:'var(--r2)',fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t2)'}}>
            💡 <strong style={{color:'var(--t1)'}}>Za esej:</strong> Don Quijote i Hamlet su suvremenci (~1600.) i oba govore o čovjeku koji ne može uskladiti unutrašnju viziju i vanjsku stvarnost. Quijote je tragičan jer sanjari, Hamlet jer previše realno analizira.
          </div>
        </div>
      </div>
    </>
  );
}

const RENESANSA_EVENTS = [
  {date:'14. st.\nItalija',    major:false, title:'Rana renesansa — Petrarca i Boccaccio', desc:'Firenca kao epicentar. Petrarca (Kanconijer) i Boccaccio (Dekameron) — pretece. Humanisti traže antičke rukopise. Teocentrizam → antropocentrizam.'},
  {date:'1440.',               major:true,  title:'Gutenbergov tiskarski stroj',            desc:'Knjiga postaje dostupna. Prije: Europa ima ~30.000 knjiga. Do 1500.: više od 9 milijuna primjeraka u optjecaju. Revolucija znanja.'},
  {date:'15. st.\nItalija',   major:false, title:'Zrela renesansa — vrhunac',              desc:'Leonardo da Vinci, Michelangelo, Rafael. Firenca → Rim. Umjetnost, arhitektura, filozofija. Medici kao mecene.'},
  {date:'1492.',               major:false, title:'Otkriće Amerike — granica epoha',        desc:'Kolumbo. Kraj srednjeg vijeka (konvencionalni datum). Europa shvaća da je Ptolemejev zemljopis bio krivo — mijenja se slika svijeta.'},
  {date:'16. st.\nSj. Europa',major:false, title:'Reformacija — Luther, Kalvin',           desc:'Martin Luther 1517. — 95 teza. Protestantizam razbija jedinstvo kršćanstva. Shakespeare raste u Engleskoj Reformacije — to oblikuje Hamleta (pitanje duše, čistilišta).'},
  {date:'~1580.–\n1610.',      major:true,  title:'Kasna renesansa — Shakespeare i Cervantes',desc:'Sjeverna i španjolska renesansa. Shakespeare u Londonu, Cervantes u Madridu. Oba pišu na narodnom jeziku, oba stvaraju arhetype koji traju do danas.'},
  {date:'17. st.',             major:false, title:'Prijelaz u Barok — kraj epohe',          desc:'Renesansni optimizam zamijenjen tjeskobom. Barok (H04) odgovara ornamentalnošću i dramatičnošću na nesigurnost epohe.'},
];

export function TimelineRenesansa() {
  return (
    <>
      <style>{CSS_TL3}</style>
      <SH3 label="03b · Renesansa u Europi — kronologija" style={{marginTop:24}}/>
      <div className="tl3">
        {RENESANSA_EVENTS.map((ev,i)=>(
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

const POP_KULTURA = [
  {film:'🎬 The Lion King (1994.)', title:'= Hamlet', source:'Simba = Hamlet · Mufasa = otac ubijen · Scar = Klaudije · Hakuna Matata = bijeg od odgovornosti'},
  {film:'🎬 10 Things I Hate About You (1999.)', title:'= Ukroćena goropad', source:'Heath Ledger i Julia Stiles. Škola umjesto Verone, ali struktura identična.'},
  {film:"🎬 She's the Man (2006.)", title:'= Dvanaesta noć', source:'Amanda Bynes u muškoj ulozi. Identitet, prerušavanje, ljubavni trokut.'},
  {film:'🎵 Taylor Swift — Love Story', title:'= Romeo i Julija (preokrenuto)', source:'"Romeo, save me..." — ali sa sretan kraj. Direktna referenca na Shakespeareovu tragediju.'},
  {film:'🎭 West Side Story', title:'= Romeo i Julija', source:'Jets vs Sharks umjesto Montagueovi vs Capuletti. New York 1957. Broadwayski mjuzikl → film 1961. i 2021.'},
  {film:'📱 "To be or not to be"', title:'= kulturalni meme', source:'Najcitiraniji literary quote na internetu. Memovi, reklame, politički govori — Hamlet živi u digitalnoj kulturi.'},
];

export function PopKulturaBlok() {
  return (
    <>
      <style>{CSS_POP3}</style>
      <SH3 label="Shakespeare u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="box-int" style={{marginBottom:14}}>
        <div className="box-int-lbl">💡 Zašto ovo znati</div>
        <div className="box-int-txt">Shakespeare je živ. Prepoznavanje reference u pop kulturi pokazuje ocjenjivaču da razumiješ <strong>tematsku univerzalnost</strong> — što je jedan od kriterija za visoke ocjene eseja.</div>
      </div>
      <div className="pop3">
        {POP_KULTURA.map((p,i)=>(
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

export function HeroQuoteBitiIliNeBiti() {
  return (
    <>
      <style>{CSS_QUOTE3}</style>
      <div className="hq3">
        <div className="hq3-eye">NAJPOZNATIJI CITAT SVJETSKE KNJIŽEVNOSTI</div>
        <div className="hq3-text">&bdquo;<em>To be, or not to be</em> — that is the question.&ldquo;</div>
        <div className="hq3-body">Hamlet, III. čin, 1. prizor — monolog o životu, smrti i egzistencijalnoj dilemi. Hamlet razmatra je li bolje trpjeti patnje života ili se suprotstaviti nepoznatom (smrt = &bdquo;neistražena zemlja&ldquo;). Zaključuje: strah od neizvjesnog drži nas u životu.</div>
        <div className="hq3-source">HAMLET · W. SHAKESPEARE · ~1601. · III/1 · BLANK VERSE (JAMPSKI PENTAMETAR)</div>
      </div>
    </>
  );
}

export function StatCardsHamlet() {
  const stats = [
    {ico:'📜', val:'~4.000', lbl:'Stihova',   sub:'najdulja Shakespeareova drama'},
    {ico:'⏱️', val:'~4 sata', lbl:'Izvedba',   sub:'u punoj verziji'},
    {ico:'🎭', val:'5 činova', lbl:'Struktura', sub:'revenge tragedy format'},
    {ico:'👥', val:'30+ likova',lbl:'Ansambl',  sub:'od kojih 10 ključnih'},
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

const RADNJA_EVENTS = [
  {date:'I ČIN',  major:true,  title:'Duh otkriva ubojstvo',      desc:'Na bedemima Elsinora — Duh pokojnog kralja govori Hamletu: Klaudije ga je ubio (otrov u uho). Hamlet se zaklinje na osvetu. Odlučuje hiniti ludilo.'},
  {date:'II ČIN', major:false, title:'Hamlet glumi ludilo',        desc:'Odbacuje Ofeliju. Klaudije i Polonije sumnjaju. Dolaze putujući glumci — Hamlet smišlja plan: Mišolovka.'},
  {date:'III ČIN',major:true,  title:'Kulminacija — tri scene',    desc:'(1) Monolog "Biti ili ne biti". (2) Mišolovka dokazuje Klaudijevu krivnju. (3) Hamlet ubija Polonija iza zavjese — mislio je Klaudija.'},
  {date:'IV ČIN', major:false, title:'Pad i disperzija',            desc:'Ofelija poludi (otac ubijen, Hamlet otišao). Utapa se. Laert se vraća i traži osvetu. Klaudije šalje Hamleta u Englesku s nalogom za ubojstvo.'},
  {date:'V ČIN',  major:true,  title:'Finale — pet leševa',         desc:'Groblje + Yorickova lubanja (memento mori). Dvoboj Hamlet–Laert otrovnim mačem. Gertruda pije otrovanu čašu. Laert, Gertruda, Klaudije, Hamlet — svi umiru. Fortinbras preuzima Dansku.'},
];

export function TimelineRadnja() {
  return (
    <>
      <style>{CSS_TL3}</style>
      <p className="prose" style={{marginBottom:12}}>Hamlet je kompleksan — ali strukturalno jasan. Pet činova, jedan krug osvete.</p>
      <div className="tl3">
        {RADNJA_EVENTS.map((ev,i)=>(
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

export function SVGLikoviElsinore() {
  return (
    <>
      <style>{CSS_WRAP3}</style>
      <div className="wr3">
        <div className="wr3-lbl">ODNOSI IZMEĐU LIKOVA — ELSINOR</div>
        <svg viewBox="0 0 660 380" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Odnosi između likova u Hamletu">
          <line x1="330" y1="120" x2="490" y2="200" stroke="#DC322F" strokeWidth="2" strokeDasharray="6,3" opacity=".7"/>
          <line x1="330" y1="120" x2="170" y2="200" stroke="#E8C97A" strokeWidth="1.5" opacity=".6"/>
          <line x1="330" y1="120" x2="120" y2="310" stroke="#3ecf6e" strokeWidth="2" opacity=".7"/>
          <line x1="330" y1="120" x2="460" y2="310" stroke="#6b9bff" strokeWidth="1.5" opacity=".6"/>
          <line x1="330" y1="120" x2="330" y2="30" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" strokeDasharray="4,4"/>
          <line x1="490" y1="200" x2="170" y2="200" stroke="#E8C97A" strokeWidth="1.5" opacity=".4"/>
          <line x1="490" y1="200" x2="560" y2="310" stroke="#DC322F" strokeWidth="1" opacity=".5"/>
          <line x1="460" y1="310" x2="560" y2="200" stroke="#E8C97A" strokeWidth="1" opacity=".4"/>
          <line x1="560" y1="310" x2="460" y2="310" stroke="#E8C97A" strokeWidth="1" opacity=".4"/>
          <circle cx="330" cy="120" r="36" fill="#1a0a0a" stroke="#E8C97A" strokeWidth="2.5"/>
          <text x="330" y="115" textAnchor="middle" fontFamily="serif" fontSize="15" fontWeight="700" fill="#E8C97A">HAMLET</text>
          <text x="330" y="130" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(232,201,122,.6)">protagonist</text>
          <circle cx="330" cy="30" r="22" fill="rgba(255,255,255,.05)" stroke="rgba(255,255,255,.3)" strokeWidth="1.5" strokeDasharray="4,3"/>
          <text x="330" y="25" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.6)">DUH</text>
          <text x="330" y="38" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,.4)">pokretač</text>
          <circle cx="490" cy="200" r="30" fill="#1a0505" stroke="#DC322F" strokeWidth="2"/>
          <text x="490" y="195" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="700" fill="#e87a77">KLAUDIJE</text>
          <text x="490" y="210" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(220,50,47,.7)">antagonist · kralj</text>
          <circle cx="170" cy="200" r="28" fill="#110e04" stroke="#8B6D2F" strokeWidth="1.5"/>
          <text x="170" y="195" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="700" fill="#d4a843">GERTRUDA</text>
          <text x="170" y="209" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(139,109,47,.7)">majka · kraljica</text>
          <circle cx="120" cy="310" r="26" fill="#041a0a" stroke="#3ecf6e" strokeWidth="1.5"/>
          <text x="120" y="305" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="700" fill="#5ecf8a">HORACIJE</text>
          <text x="120" y="319" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(62,207,110,.6)">jedini vjeran</text>
          <circle cx="460" cy="310" r="26" fill="#04061a" stroke="#6b9bff" strokeWidth="1.5"/>
          <text x="460" y="305" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="700" fill="#8baeff">OFELIJA</text>
          <text x="460" y="319" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(107,155,255,.6)">ljubav · ludilo</text>
          <circle cx="560" cy="200" r="24" fill="#0e0e06" stroke="rgba(255,255,255,.2)" strokeWidth="1"/>
          <text x="560" y="196" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.6)">POLONIJE</text>
          <text x="560" y="209" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,.35)">savjetnik</text>
          <circle cx="560" cy="310" r="24" fill="#1a0505" stroke="rgba(220,50,47,.5)" strokeWidth="1"/>
          <text x="560" y="306" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(220,50,47,.8)">LAERT</text>
          <text x="560" y="319" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(220,50,47,.5)">osveta · kontrast</text>
          <g transform="translate(20,340)">
            <line x1="0" y1="8" x2="20" y2="8" stroke="#DC322F" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="25" y="12" fontFamily="serif" fontSize="10" fill="rgba(255,255,255,.45)">osveta / neprijateljstvo</text>
            <line x1="0" y1="22" x2="20" y2="22" stroke="#E8C97A" strokeWidth="1.5"/>
            <text x="25" y="26" fontFamily="serif" fontSize="10" fill="rgba(255,255,255,.45)">rodbinska veza / brak</text>
            <line x1="0" y1="36" x2="20" y2="36" stroke="#3ecf6e" strokeWidth="2"/>
            <text x="25" y="40" fontFamily="serif" fontSize="10" fill="rgba(255,255,255,.45)">prijateljstvo / lojalnost</text>
          </g>
        </svg>
      </div>
    </>
  );
}

const SUKOBI = [
  {br:'S1',naslov:'Osveta vs moralnost',tag:'CENTRALNA TEMA',
   citat:'"Revenge his foul and most unnatural murder." — Duh Hamletu, I/5.',
   esej:'Je li osveta moralno opravdana, čak i kad Duh to traži? Hamlet zna istinu — ali se pita: je li ubojstvo kralja pravedno? Shakespeare ne daje jednostavan odgovor. Tragedija je upravo u tome: i osveta i njezin izostanak su katastrofalni.',
   args:['Tri sina osvećuju oca (Hamlet, Laert, Fortinbras) — tri različita pristupa: refleksija, strast, strpljenje','Svi osvetnici stradavaju — osveta kao ciklus, ne kao rješenje','Fortinbras koji ČEKA preuzima Dansku — Shakespeare nagrađuje strpljenje, ne osvetu']},
  {br:'S2',naslov:'Razum vs strast (oklijevanje)',tag:'HAMLETOVA DILEMA',
   citat:'"Tako savjest čini kukavice od svih nas." — Hamlet, III/1.',
   esej:'Hamlet previše misli — analitički paralizira akciju. Laert je Hamletov suprotni pol: čista strast, nula analize. Shakespeare pokazuje da obje krajnosti vode u smrt. Renesansni ideal "mudrog djelovanja" je gotovo nedostižan.',
   args:['Hamlet ima sve dokaze (Mišolovka, Klaudijeva molitva) — ali ne djeluje','Laert odmah djeluje i postaje oruđe u Klaudijevim rukama','Jedina scena gdje Hamlet djeluje instinktivno: Polonijevo ubojstvo iza zavjese — i tada griješi']},
  {br:'S3',naslov:'Stvarnost vs pretvaranje',tag:'KAZALIŠTE KAO METAFORA',
   citat:"\"The play's the thing wherein I'll catch the conscience of the king.\" — Hamlet, II/2.",
   esej:'Hamlet glumi ludilo. Klaudije glumi ljubav. Polonije špijunira iza zavjesa. Cijeli dvor je kazalište. Hamlet koristi kazalište (Mišolovku) da probije pretvaranje. "Cijeli je svijet pozornica" — ta metafora prožima dramu.',
   args:['Metateatar: drama unutar drame (Mišolovka) — Shakespeare komentira vlastito medium','Hamlet glumi ludilo da bi skrio stvarnu namjeru — ironija: i on sam postaje lažni glumac','Klaudijeva molitva je neiskrena — čak je Bog u ovom dvorskom kazalištu publika']},
  {br:'S4',naslov:'Život vs smrt',tag:'EGZISTENCIJALNA DILEMA',
   citat:'"Alas, poor Yorick! I knew him, Horatio." — Hamlet, V/1.',
   esej:'Od Duha u I činu do groblja u V činu, Hamlet je drama preokupirana smrću. Monolog "Biti ili ne biti" razmatra samoubojstvo. Yorickova lubanja = demokratizacija smrti: kraljevi i šaljivci završavaju isto. Memento mori u renesansnoj drami.',
   args:['"Biti ili ne biti" — strah od neistražene zemlje (smrti) drži nas u životu, ne ljubav prema životu','Yorick = djetinjstvo, smijeh, toplina — sad lubanja. Što ostaje od čovjeka?','Aleksandar Veliki, Cezar — i oni su sad prašina. Hamlet generalizira: veličina ne štiti od prolaznosti']},
  {br:'S5',naslov:'Pojedinac vs korumpirani svijet',tag:'POLITIČKA DIMENZIJA',
   citat:'"Something is rotten in the state of Denmark." — Marcello, I/4.',
   esej:'Elsinor nije samo danski dvor — to je slika sustavne korumpcije. Svi izdaju. Jedino Horacije — koji nije dvoranin, nego učenjak — ostaje vjeran. Shakespeare pita: može li čestit čovjek preživjeti u korumpiranom svijetu? Odgovor drame: ne.',
   args:['"Trulost" nije samo Klaudijev grijeh — to je kvaliteta cijelog dvorskog sustava','Horacije preživljava jer je izvan dvora — integritet je moguć samo izvan politike','Hamlet = renesansni humanistički ideal (student iz Wittenberga) u negostoljubivom dvorskom svijetu']},
];

export function AccordionSukobi() {
  return (
    <>
      <style>{CSS_SC3}</style>
      <p className="prose" style={{marginBottom:12}}>Klikni na sukob za citat, analizu i argumente. Iz ova 5 sukoba može se argumentirati svaka moguća esejska teza o Hamletu.</p>
      <div className="sc3s">
        {SUKOBI.map(s=>(
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

const KLJUCNE_SCENE = [
  {br:'I/5',   naslov:'Duh i Hamletova zakletva',          tag:'POKRETAČ',
   citat:'Klaudije mi je u uho ulio otrov dok sam spavao u vrtu. — Duh Hamletu.',
   esej:'Pokretač cijele drame. Prva etička dilema: je li Duh stvaran (otac iz čistilišta) ili vrag koji iskušava Hamleta? Hamlet prihvaća priču — ali njegova sumnja traje do III čina (Mišolovka). Hamlet se zaklinje na osvetu, ali odmah počinje oklijevati.'},
  {br:'III/1',  naslov:'Monolog "Biti ili ne biti"',          tag:'FILOZOFSKI VRHUNAC',
   citat:"To be, or not to be — that is the question: Whether 'tis nobler in the mind to suffer...",
   esej:'Najpoznatiji monolog u povijesti književnosti. Hamlet razmatra samoubojstvo kao izlaz. Zaključuje: strah od neizvjesnog nakon smrti drži nas u životu. Odmah nakon monologa — brutalno odbacuje Ofeliju (znaju da su promatrani). Za esej o egzistencijalnoj dilemi ili ludilu — obavezna referenca.'},
  {br:'III/2',  naslov:'Mišolovka — drama u drami',           tag:'DOKAZ KRIVNJE',
   citat:"The play's the thing wherein I'll catch the conscience of the king.",
   esej:'Hamlet poručuje glumcima da odglume scenu identičnu Duhovom opisu ubojstva. Klaudije prekida izvedbu i odlazi — dokazuje krivnju. Metateatar: kazalište unutar kazališta. Za esej o temi stvarnosti vs pretvaranja ili o inteligenciji kao strategiji.'},
  {br:'III/3',  naslov:'Klaudije se moli — Hamlet ne ubija', tag:'KLJUČNO OKLIJEVANJE',
   citat:"Now might I do it pat, now he is praying; and now I'll do't.",
   esej:'Hamlet naiđe na Klaudija u molitvi — idealna prilika. Ipak ne ubija: boji se da bi Klaudijeva duša tada otišla u raj. Ironija: Klaudijeva molitva neiskrena. Hamlet je mogao završiti sve ovdje. Za esej o oklijevanju — najjasniji primjer.'},
  {br:'III/4',  naslov:'Ubojstvo Polonija iza zavjese',       tag:'PRVA SMRT',
   citat:'"How now! A rat? Dead, for a ducat, dead!" — Hamlet bocajući zavjesu.',
   esej:'Hamlet u majčinoj sobi. Polonije se skriva iza arrasa. Hamlet čuje šum, zabode mač — ubija Polonija misleći da je Klaudije. Prvo ubojstvo u drami i prekretnica: Laertova osvetnička priča počinje. Hamletov moralni pad.'},
  {br:'V/1+2',  naslov:'Groblje + Finale — pet leševa',       tag:'KATARZA',
   citat:'"Alas, poor Yorick! I knew him, Horatio — a fellow of infinite jest."',
   esej:'Groblje: Hamlet meditira nad Yorickovom lubanjom — memento mori. Finale: dvoboj otrovnim mačevima. Gertruda pije otrovanu čašu, Laert i Hamlet se ranjavaju, Laert razotkriva Klaudija, Hamlet konačno ubija strica i sam umire. Horacije preživljava. Fortinbras dolazi i preuzima Dansku.'},
];

export function AccordionKljucneScene() {
  return (
    <>
      <style>{CSS_SC3}</style>
      <p className="prose" style={{marginBottom:12}}>Iz ovih 6 scena može se argumentirati bilo koja teza. Klikni za citat i analizu.</p>
      <div className="sc3s">
        {KLJUCNE_SCENE.map(sc=>(
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

export function SVGTheGlobe() {
  return (
    <>
      <style>{CSS_WRAP3}</style>
      <div className="wr3">
        <div className="wr3-lbl">THE GLOBE — SHAKESPEAREOVO KAZALIŠTE (1599.)</div>
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Shematski prikaz kazališta The Globe">
          <ellipse cx="300" cy="160" rx="270" ry="150" fill="#1a1208" stroke="#8B6D2F" strokeWidth="2"/>
          <ellipse cx="300" cy="160" rx="230" ry="125" fill="none" stroke="rgba(139,109,47,.4)" strokeWidth="1"/>
          <ellipse cx="300" cy="160" rx="185" ry="100" fill="none" stroke="rgba(139,109,47,.3)" strokeWidth="1"/>
          <ellipse cx="300" cy="175" rx="140" ry="85" fill="#0d0902" stroke="rgba(139,109,47,.2)" strokeWidth="1"/>
          <text x="300" y="185" textAnchor="middle" fontFamily="serif" fontSize="13" fill="rgba(255,255,255,.3)" fontStyle="italic">jama (yard)</text>
          <text x="300" y="200" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.2)">stoji · ulaz 1 penny</text>
          <rect x="240" y="120" width="120" height="70" rx="4" fill="#2a1a08" stroke="#E8C97A" strokeWidth="1.5"/>
          <text x="300" y="152" textAnchor="middle" fontFamily="serif" fontSize="13" fontWeight="700" fill="#E8C97A">POZORNICA</text>
          <text x="300" y="168" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(232,201,122,.6)">ulazi u jamu</text>
          <rect x="285" y="172" width="30" height="14" rx="2" fill="rgba(0,0,0,.6)" stroke="rgba(232,201,122,.4)" strokeWidth="1"/>
          <text x="300" y="182" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(232,201,122,.5)">trap</text>
          <rect x="230" y="65" width="140" height="58" rx="4" fill="#1a1208" stroke="rgba(139,109,47,.5)" strokeWidth="1"/>
          <text x="300" y="90" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.5)">tiring house</text>
          <text x="300" y="105" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)">(backstage · garderoba)</text>
          <rect x="250" y="80" width="100" height="12" rx="2" fill="rgba(74,144,217,.2)" stroke="rgba(74,144,217,.4)" strokeWidth="1"/>
          <text x="300" y="91" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(74,144,217,.7)">&bdquo;nebo&ldquo; (canopy)</text>
          <text x="530" y="120" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(232,201,122,.8)">I. galerija</text>
          <text x="530" y="135" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.4)">srednja klasa · 2–3 pence</text>
          <text x="70" y="120" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(232,201,122,.8)">II. galerija</text>
          <text x="70" y="135" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.4)">sjedišta</text>
          <text x="70" y="195" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(232,201,122,.8)">III. galerija</text>
          <text x="70" y="210" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.4)">lože · plemstvo · 6 pence +</text>
          <text x="300" y="305" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.35)" fontStyle="italic">kapacitet ~3.000 · bez krova nad jamom · 1613. izgorio</text>
        </svg>
        <div className="wr3-legend">
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(255,255,255,.25)'}}/><span>Jama: pučani stoje, 1 penny — Shakespeare piše i za njih</span></div>
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'rgba(232,201,122,.6)'}}/><span>Galerije: srednja klasa, 2–3 pence</span></div>
          <div className="wr3-legend-item"><div className="wr3-dot" style={{background:'#E8C97A'}}/><span>Lože: plemstvo, 6+ pence</span></div>
        </div>
        <div style={{marginTop:12,padding:'10px 14px',background:'var(--ele)',borderRadius:'var(--r2)',fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t2)'}}>
          💡 <strong style={{color:'var(--t1)'}}>Za esej:</strong> Shakespeare piše za SVE slojeve istovremeno — grobari u V činu su namijenjeni puku u jami. Zato drama mješa tragično i komično — klasicizam (H04) to kasnije zabranjuje.
        </div>
      </div>
    </>
  );
}

export function UsporedbaHamletRomeo() {
  const rows = [
    ['Dob','\u223030 godina · student','\u223016 godina · mlad'],
    ['Hamartia','oklijevanje · prekomjerna refleksija','impulsivnost · strast'],
    ['Djeluje','kasno · analizira sve','odmah · bez analize'],
    ['Motor','razum i savjest','ljubav i strast'],
    ['Smrt','otrov · tragična ironija','otrov · nesporazum'],
    ['Tip','intelektualna tragedija','ljubavna tragedija'],
    ['Poruka','previše mišljenja = paraliza','strast bez razuma = katastrofa'],
  ];
  return (
    <>
      <style>{CSS_CMP3}</style>
      <SH3 label="07b · Hamlet vs Romeo — tip tragičnog junaka" style={{marginTop:24}}/>
      <div className="cmp3">
        <div className="cmp3-side left">
          <div className="cmp3-author">Hamlet</div>
          <div className="cmp3-period">TRAGEDIJA · ~1601.</div>
          {rows.map(([l,a])=>(<div className="cmp3-row" key={l}><span className="cmp3-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp3-vs"><span className="cmp3-vs-inner">VS</span></div>
        <div className="cmp3-side">
          <div className="cmp3-author">Romeo</div>
          <div className="cmp3-period">TRAGEDIJA · ~1595.</div>
          {rows.map(([l,,r])=>(<div className="cmp3-row" key={l}><span className="cmp3-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej</div>
        <div className="box-int-txt">Oba umiru zbog temeljnog karakternog nedostatka — ali iz suprotnih razloga. Shakespeare u Romeu istražuje što se dogodi kad <strong>osjećaji vladaju razumom</strong>, a u Hamletu što se dogodi kad <strong>razum guši osjećaje</strong>. Zajedno čine kompletnu Shakespeareovu tezu o ravnoteži.</div>
      </div>
    </>
  );
}

export function UsporedbaHamletAntigona() {
  const rows = [
    ['Epoha','Renesansa','Antika'],
    ['Hamartia','oklijevanje · refleksija','krutost · nesposobnost kompromisa'],
    ['Odluka','ne može se odlučiti','odlučuje odmah · ne mijenja se'],
    ['Moral','relativistički · sumnja','apsolutan · božji zakon'],
    ['Svijet','korumpirani dvor','politički antagonizam'],
    ['Kraj','osveta dovršena — ali prekasno','umire za princip — bez žaljenja'],
  ];
  return (
    <>
      <style>{CSS_CMP3}</style>
      <SH3 label="07c · Hamlet vs Antigona — bridge prema H01" style={{marginTop:20}}/>
      <div className="cmp3">
        <div className="cmp3-side left">
          <div className="cmp3-author">Hamlet</div>
          <div className="cmp3-period">SHAKESPEARE · ~1601. · ENGL.</div>
          {rows.map(([l,a])=>(<div className="cmp3-row" key={l}><span className="cmp3-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp3-vs"><span className="cmp3-vs-inner">VS</span></div>
        <div className="cmp3-side">
          <div className="cmp3-author">Antigona</div>
          <div className="cmp3-period">SOFOKLO · ~441. PR. KR. · GR.</div>
          {rows.map(([l,,r])=>(<div className="cmp3-row" key={l}><span className="cmp3-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — ključna razlika</div>
        <div className="box-int-txt">Antigona <strong>ne oklijeva nikad</strong> — njena hamartia je krutost. Hamlet <strong>oklijeva cijelo vrijeme</strong> — njegova hamartia je prekomjerna refleksija. Oboje umiru, ali iz dijametralno suprotnih razloga. Ocjenjivači vole kad student komparira ispitna djela — to pokazuje razumijevanje epoha, ne samo reprodukciju.</div>
      </div>
    </>
  );
}

const TEZA_COLORS3 = ['#e9b446','#DC322F','#6b9bff','#3ecf6e','rgba(200,130,255,1)'];

const ESEJ_TEZE_H03 = [
  {br:'T1',naslov:'Osveta kao tragični ciklus',tag:'OSVETA · FINALE',
   teza:'Shakespearov Hamlet ne slavi osvetu — pokazuje je kao ciklus smrti u kojem svi osvetnici stradavaju. Osveta ne donosi pravdu, nego novu katastrofu.',
   args:['Tri sina osvećuju oca (Hamlet, Laert, Fortinbras) — strukturalna paralela: osveta je univerzalni mehanizam, ne individualni izbor','Svi osvetnici umiru: Hamlet probode Klaudija i sam umire, Laert strada od vlastitog otrova, Klaudije umire od otrova kojeg je pripremio','Ofelija, Gertruda, Polonije umiru kao kolateralna šteta — Shakespeare pokazuje da osveta ne pogađa samo krivce'],
   scena:'Finale V čina — pet leševa na pozornici. Fortinbras (koji je čekao) preuzima Dansku.'},
  {br:'T2',naslov:'Hamletova dilema — razum paralizira djelovanje',tag:'OKLIJEVANJE · RAZUM',
   teza:'Hamletova tragedija nije u tome što ne može djelovati, već u tome što previše misli. Shakespeare dijagnosticira modernu bolest: razum svjestan moralnih posljedica postaje vlastiti zatvor.',
   args:['Hamlet ima sve dokaze (Duh, Mišolovka, Klaudijeva molitva) — ne djeluje jer je moralno paraliziran, ne iz straha','Kontrast s Laertom: čuje za očevu smrt → odmah se vraća → traži osvetu → postaje Klaudijevo oruđe','Hamletova dilema ušla je u kulturu kao arhetip — T.S. Eliot: Hamlet je Mona Liza književnosti'],
   scena:'III/3 — Klaudije se moli, Hamlet ne ubija. Ironija: Klaudijeva molitva je neiskrena.'},
  {br:'T3',naslov:'Smrt i besmrtnost — filozofska meditacija',tag:'SMRT · MEMENTO MORI',
   teza:'Hamlet nije samo drama o osveti — to je filozofska meditacija o smrti. Shakespeare postavlja pitanja kojih se tada bavila renesansna misao: što je smrt, čega se bojimo, kako ostavljati trag.',
   args:['Drama otvara i zatvara se smrću: I čin = Duh pokojnog oca, V čin = groblje + Yorickova lubanja + masovna smrt','"Biti ili ne biti": strah od neistražene zemlje (ne ljubav prema životu) drži nas u životu — 350 godina prije Sartrea','Yorickova scena: demokratizacija smrti — kraljev šaljivac i Aleksandar Veliki završavaju kao ista prašina'],
   scena:'V/1 — groblje. Hamlet drži Yorickovu lubanju — vizualna metafora cijele drame.'},
  {br:'T4',naslov:'Korumpirani svijet — Elsinor kao metafora',tag:'POLITIKA · SUSTAV',
   teza:'Elsinor nije samo danski dvor — to je slika korumpiranog svijeta u kojem čestit čovjek ne može preživjeti. Shakespeare slika renesansnu disilluziju: humanistički ideal slama se u stvarnosti spletke.',
   args:['"Something is rotten in the state of Denmark" — trulost je sustavna, ne individualna: špijuni, laži, pretvaranje na svim razinama','Svi izdaju osim Horacija — koji nije dvoranin, nego učenjak. Integritet je moguć samo izvan politike','Hamlet = renesansni humanistički ideal (student iz Wittenberga) u negostoljubivom dvorskom okruženju'],
   scena:'III/1 — Hamlet odbacuje Ofeliju znajući da su promatrani. Čak i ljubav postaje izvedba u Elsinoru.'},
  {br:'T5',naslov:'Hamlet kao vrhunac renesansne drame',tag:'EPOHA · ŽANR',
   teza:'Hamlet je vrhunac renesansne drame jer kombinira antičku strukturu, osvetničku formu i renesansni psihološki subjekt. U njemu se dovršava prijelaz s kolektivnog na individualnog čovjeka.',
   args:['Preuzima antičku strukturu tragedije (5 činova, pad junaka, katarza) ali ju puni renesansnim sadržajem — unutrašnji život, ne sudbina','Harold Bloom: Shakespeare izumio čovjeka — Hamlet je prva individua u književnosti, a ne tip (vitez, svetac, kralj)','Mješavina stilova (tragedija + komedija, stih + proza) — klasicizam (H04) to zabranjuje; Shakespearova sloboda = moderna drama'],
   scena:'Grobari u V/1 — komični u tragediji. Upravo to klasicizam Racinea neće dopustiti.'},
];

export function AccordionEsejTezeH03() {
  return (
    <>
      <style>{CSS_SC3}</style>
      <div className="sc3s">
        {ESEJ_TEZE_H03.map((t,idx)=>(
          <details className="sc3" key={t.br} style={{'--sc3-accent':TEZA_COLORS3[idx]}}>
            <summary className="sc3-sum">
              <div className="sc3-num" style={{fontSize:13,color:TEZA_COLORS3[idx]}}>{t.br}</div>
              <div className="sc3-ttl">{t.naslov}</div>
              <span className="sc3-meta" style={{color:TEZA_COLORS3[idx],borderColor:`${TEZA_COLORS3[idx]}55`}}>{t.tag}</span>
              <span className="sc3-chev" style={{color:TEZA_COLORS3[idx]}}>▾</span>
            </summary>
            <div className="sc3-body">
              <div className="sc3-quote">{t.teza}</div>
              <div className="sc3-why"><b>Argumenti:</b></div>
              <div className="sc3-args">
                {t.args.map((a,i)=>(
                  <div className="sc3-arg" key={i} style={{borderLeftColor:TEZA_COLORS3[idx]}}>
                    <span className="sc3-arg-num" style={{color:TEZA_COLORS3[idx]}}>({i+1})</span>
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
