'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CitatnikH05 from './H05_CitatnikTab';
import H05PojmovnikTab from './H05_PojmovnikTab';

/* ============================================================
   H05 — Prosvjetiteljstvo i predromantizam · Goethe · Werther
   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */



/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_SECHDR5 = `
  .sh5{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh5-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh5-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;
function SH5({label,style}){
  return(
    <><style>{CSS_SECHDR5}</style>
    <div className="sh5" style={style}>
      <div className="sh5-line"/><div className="sh5-badge">{label}</div><div className="sh5-line"/>
    </div></>
  );
}

const CSS_AC5 = `
  .ac5{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac5:hover{border-color:var(--bd-br)}
  .ac5-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac5-mono{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,50,47,.3)}
  .ac5-meta{flex:1;min-width:0}
  .ac5-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac5-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac5-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac5-star{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;color:var(--gold);letter-spacing:.5px;margin-top:6px}
  .ac5-body{padding:18px 22px}
  .ac5-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac5-body p:last-child{margin-bottom:0}
  .ac5-body strong{color:var(--t1)}
  .ac5-body em{color:var(--gold);font-style:italic}
  .ac5-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac5-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac5-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac5-work:last-child{border-bottom:none;padding-bottom:0}
  .ac5-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac5-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac5-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac5-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  .ac5-dual{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0}
  .ac5-dual .ac5{margin:0}
  .ac5-triple{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}
  .ac5-triple .ac5{margin:0}
  @media(max-width:700px){.ac5-dual,.ac5-triple{grid-template-columns:1fr}}
  @media(max-width:600px){.ac5-hdr{flex-direction:column;gap:10px}.ac5-mono{width:42px;height:42px;font-size:18px}.ac5-body{padding:14px 16px}.ac5-name{font-size:15px}}
`;

const CSS_TL5 = `
  .tl5{position:relative;padding:20px 0;margin:18px 0}
  .tl5::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl5-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl5-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2;white-space:pre-line}
  .tl5-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl5-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl5-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl5-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl5-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC5 = `
  .sc5s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc5{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc5:hover{border-color:var(--bd-br)}
  .sc5[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc5-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc5-sum::-webkit-details-marker{display:none}
  .sc5-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc5[open] .sc5-chev{transform:rotate(180deg);color:var(--gold)}
  .sc5-num{font-family:var(--display);font-size:14px;font-weight:700;color:var(--bronze-l);min-width:26px}
  .sc5[open] .sc5-num{color:var(--gold)}
  .sc5-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc5-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc5-body{padding:0 16px 16px}
  .sc5-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc5-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .sc5-why b{color:var(--t1)}
  .sc5-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc5-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc5-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .sc5-note{margin-top:10px;padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .sc5-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc5-meta{display:none}
    .sc5-body{padding:0 12px 12px}
  }
`;

const CSS_CMP5 = `
  .cmp5{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp5-side{padding:18px 20px;background:var(--sur)}
  .cmp5-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp5-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp5-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp5-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp5-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp5-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp5-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:58px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp5{grid-template-columns:1fr}.cmp5-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp5-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT5 = `
  .stat5{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0 20px}
  .stat5-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat5-card:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px)}
  .stat5-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat5-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat5-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat5-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat5{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE5 = `
  .hq5{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
  .hq5::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq5::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
  .hq5-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
  .hq5-text{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);line-height:1.45;font-style:italic;margin-bottom:10px}
  .hq5-text em{color:var(--gold);font-style:normal}
  .hq5-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq5-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq5{padding:18px 18px 18px 22px}.hq5-text{font-size:14px}}
`;

const CSS_WRAP5 = `
  .wr5{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;margin:0 0 22px;overflow:hidden;transition:border-color .25s}
  .wr5:hover{border-color:rgba(255,255,255,.12)}
  .wr5-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:14px;display:flex;align-items:center;gap:8px}
  .wr5-lbl::before{content:'';display:block;width:16px;height:1px;background:var(--bdm)}
`;

const CSS_POP5 = `
  .pop5{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop5-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop5-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop5-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop5-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop5-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop5{grid-template-columns:1fr}}
`;

const CSS_VERT5 = `
  .vert5{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:16px 0}
  .vert5-card{background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px}
  .vert5-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);margin-bottom:6px}
  .vert5-title{font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:8px}
  .vert5-body{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6}
  .vert5-card.warn{border-color:rgba(248,113,113,.3);background:rgba(248,113,113,.04)}
  .vert5-card.warn .vert5-title{color:#f87171}
  .simb5{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:14px 0}
  .simb5-item{display:flex;gap:10px;padding:10px 12px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);align-items:flex-start}
  .simb5-ico{font-size:18px;flex-shrink:0;margin-top:1px}
  .simb5-name{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:2px}
  .simb5-desc{font-family:var(--serif);font-size:12px;color:var(--t2);line-height:1.45}
  @media(max-width:600px){.vert5,.simb5{grid-template-columns:1fr}}
`;

const TEZA_COLORS5 = ['#e9b446','#DC322F','#6b9bff','#3ecf6e','rgba(200,130,255,1)'];

/* ============================================================
   [1] AUTHOR CARD — Johann Wolfgang von Goethe
   HTML pozicija: L0 · sec "04 · Goethe — autor Werthera"
   → ODMAH NAKON sec-hdr-a "04 ·", ISPRED .prose uvoda
   → Isti komponent reuse u L1 (context="l1")
============================================================ */
export function AuthorCardGoethe({context='l0'}) {
  return (
    <>
      <style>{CSS_AC5}</style>
      <div className="ac5">
        <div className="ac5-hdr">
          <div className="ac5-mono">G</div>
          <div className="ac5-meta">
            <div className="ac5-name">Johann Wolfgang von Goethe</div>
            <div className="ac5-dates">FRANKFURT · 1749. – 1832.</div>
            <div className="ac5-tags">
              <span className="pill p-br" style={{fontSize:10}}>Sturm und Drang</span>
              <span className="pill p-go" style={{fontSize:10}}>Goetheovo doba</span>
              <span className="pill p-t" style={{fontSize:10}}>Faust · Werther</span>
              {context==='l1'&&<div className="ac5-star">⭐ OBVEZATNO DJELO 2026</div>}
            </div>
          </div>
        </div>
        <div className="ac5-body">
          <p>Najveći njemački pisac svih vremena — cijelo razdoblje njegovog djelovanja naziva se <em>„Goetheovo doba&quot;</em>. S 24 godine napisao <strong>Patnje mladog Werthera</strong> za samo 4 tjedna i preko noći postao europska književna zvijezda. Ministar u Weimaru, prirodoznanstvenik, likovni kritičar — renesansni čovjek kasnog 18. stoljeća.</p>
          <p>Jedini autor ovog tečaja čije ime označava <strong>cijelu literarnu epohu</strong>. Schiller, Hegel, Beethoven i Napoleon su ga poznavali osobno. Napoleon mu je u Erfurtu 1808. rekao: <em>„Vous êtes un homme!&quot;</em> — „Vi ste čovjek!&quot;</p>
          <div className="ac5-works">
            <div className="ac5-works-lbl">Ključna djela</div>
            <div className="ac5-work">
              <div className="ac5-badge">💔</div>
              <div>
                <div className="ac5-work-title">Patnje mladog Werthera</div>
                <div className="ac5-work-meta">1774. · EPISTOLARNI ROMAN · 4 TJEDNA PISANJA</div>
                <div className="ac5-work-desc">98 pisama, ljubav, Weltschmerz, smrt. <strong>Obvezatno djelo 2026.</strong> 1. europski bestseller moderne ere — prouzročio val imitacijskih samoubojstava.</div>
              </div>
            </div>
            <div className="ac5-work">
              <div className="ac5-badge">🔮</div>
              <div>
                <div className="ac5-work-title">Faust I + II</div>
                <div className="ac5-work-meta">1808. + 1832. · DRAMSKA POEMA · DJELO ŽIVOTA</div>
                <div className="ac5-work-desc">Doktor koji prodaje dušu đavlu (Mefistofelu) za znanje i iskustvo. Faust I (ljubav + tragedija) → Faust II (filozofija + spasenje). 60 godina pisanja — od Sturm und Drang do klasike.</div>
              </div>
            </div>
            <div className="ac5-work">
              <div className="ac5-badge">📚</div>
              <div>
                <div className="ac5-work-title">Ifigenija na Tauridi · Wilhelm Meister</div>
                <div className="ac5-work-meta">1787. + 1795. · WEIMARSKA KLASIKA</div>
                <div className="ac5-work-desc">Druga faza: klasična harmonija umjesto sturmundrang bunta. Wilhelm Meister = Bildungsroman — roman o odrastanju i formaciji karaktera.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [2] TIMELINE — Goethe životopis
   HTML pozicija: L0 · sec "04 · Goethe"
   → NAKON .sg grida (ŽIVOT, STURM UND DRANG, WEIMARSKA KLASIKA, FAUST)
   → ISPRED .box-20 "Goetheova najvažnija djela — sažetak"
============================================================ */
const GOETHE_EVENTS = [
  {date:'1749.', major:true,  title:'Rođenje u Frankfurtu',         desc:'Bogata građanska obitelj. Otac — pravnik i skupljač slika. Obrazovanje kod privatnih učitelja. Frankfurt je slobodni carski grad — Goethe odrasta bez strogih dvorskih konvencija.'},
  {date:'1765.', major:false, title:'Studij prava — Leipzig',        desc:'Leipzig, „malo Pariz". Goethe ne voli pravo — pohađa predavanja iz književnosti i slikarstva. Prve ljubavi, prve pjesme.'},
  {date:'1770.', major:false, title:'Strasbourg — Herder i novi svjetovi', desc:'Upoznaje Johanna Herdera — oca Sturm und Drang pokreta. Herder mu pokazuje Shakespearea i narodnu poeziju. Goetheova intelektualna revolucija.'},
  {date:'1772.', major:true,  title:'Wetzlar — Charlotte Buff',     desc:'Pravni stažist u Wetzlaru. Zaljubi se u Charlotte Buff — zaručnicu drugog. Beznadna ljubav postaje izvor Werthera. Prijatelj Christian Jerusalem se ustreli — Goethe spaja dvije priče.'},
  {date:'1774.', major:true,  title:'Werther — europska senzacija', desc:'Napisano za 4 tjedna u zanosu. Odmah preveden na sve europske jezike. Napoleon ga čita 7 puta. Prouzroči val imitacijskih samoubojstava — neke države zabranjuju roman. 1. globalni pop-kulturni bestseller.'},
  {date:'1775.', major:false, title:'Weimar — ministar i plemstvo',  desc:'Vojvoda Karl August poziva ga u Weimar. Goethe postaje dvorjanin, ministar, upravlja rudnicima i cestama. Weimar postaje kulturna prijestolnica Njemačke.'},
  {date:'1786.', major:false, title:'Italija — preokret prema klasici', desc:'Tajno putovanje u Italiju 1786.–88. Antička umjetnost mijenja ga zauvijek. Napušta Sturm und Drang — ulazi u Weimarsku klasiku. Harmonija, forma, mjera umjesto bunta.'},
  {date:'1808.', major:true,  title:'Faust I — djelo života',       desc:'Objavljuje Faust I nakon 30 godina rada. Napoleon mu kaže: „Vous êtes un homme!" Faust II završit će samo nekoliko tjedana prije smrti.'},
  {date:'1832.', major:true,  title:'Smrt u Weimaru — 82 godine',   desc:'Zadnje riječi: „Mehr Licht!" — „Više svjetla!" Sahranjen uz Schillera u Weimaru. Goetheovo doba završava s njim.'},
];

export function TimelineGoethe() {
  return (
    <>
      <style>{CSS_TL5}</style>
      <SH5 label="04b · Goethe — kronologija"/>
      <div className="tl5">
        {GOETHE_EVENTS.map((ev,i)=>(
          <div className="tl5-ev" key={i}>
            <div className={`tl5-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl5-body">
              <div className="tl5-title">{ev.title}</div>
              <div className="tl5-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [3] DUAL AUTHOR CARD — Voltaire + Rousseau
   HTML pozicija: L0 · sec "06 · Francuski prosvjetitelji"
   → ODMAH NAKON sec-hdr-a "06 ·", ISPRED .prose i .con s 4 .cr
   → Dva autora side-by-side, s box-int ispod
============================================================ */
export function AuthorCardVoltaireRousseau() {
  return (
    <>
      <style>{CSS_AC5}</style>
      <div style={{fontFamily:'var(--mono)',fontSize:9,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'var(--t3)',marginBottom:14}}>
        DVA LICA PROSVJETITELJSTVA — RAZUM I OSJEĆAJ
      </div>
      <div className="ac5-dual">
        <div className="ac5">
          <div className="ac5-hdr">
            <div className="ac5-mono" style={{background:'linear-gradient(135deg,#1a3a6a,#3a6aaa)'}}>V</div>
            <div className="ac5-meta">
              <div className="ac5-name">Voltaire</div>
              <div className="ac5-dates">PARIZ · 1694. – 1778.</div>
              <div className="ac5-tags">
                <span className="pill p-t" style={{fontSize:9}}>satira</span>
                <span className="pill p-go" style={{fontSize:9}}>deizam</span>
                <span className="pill p-br" style={{fontSize:9}}>Candide</span>
              </div>
            </div>
          </div>
          <div className="ac5-body">
            <p style={{fontSize:13}}>Najsnažniji glas prosvjetiteljstva. Voltaire = oštrica razuma usmjerena protiv dogme, fanatizma i apsolutizma. Parola: <em>„Écrasez l&apos;infâme!&quot;</em> — „Skrši sramotu!&quot; Deist — vjeruje u Boga kao tvorca, ali ne u crkvu.</p>
            <div className="ac5-works">
              <div className="ac5-works-lbl">Ključno djelo</div>
              <div className="ac5-work">
                <div className="ac5-badge">🌍</div>
                <div>
                  <div className="ac5-work-title">Candide ili Optimizam</div>
                  <div className="ac5-work-meta">1759. · FILOZOFSKI ROMAN · SATIRA</div>
                  <div className="ac5-work-desc">Naivni Candide doživljava sve moguće katastrofe dok mu učitelj Pangloss tvrdi da žive u <em>„najboljem od svih mogućih svjetova&quot;</em>. Satira Leibnizova optimizma. Kraj: <em>„Il faut cultiver notre jardin&quot;</em>.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ac5">
          <div className="ac5-hdr">
            <div className="ac5-mono" style={{background:'linear-gradient(135deg,#1a4a2a,#3a8a4a)'}}>R</div>
            <div className="ac5-meta">
              <div className="ac5-name">Jean-Jacques Rousseau</div>
              <div className="ac5-dates">ŽENEVA · 1712. – 1778.</div>
              <div className="ac5-tags">
                <span className="pill p-t" style={{fontSize:9}}>priroda</span>
                <span className="pill p-go" style={{fontSize:9}}>Sturm und Drang</span>
                <span className="pill p-br" style={{fontSize:9}}>Revolucija</span>
              </div>
            </div>
          </div>
          <div className="ac5-body">
            <p style={{fontSize:13}}>Najkontroverzniji prosvjetitelj — i direktna inspiracija za Goethea i Sturm und Drang. <em>„Čovjek je rođen slobodan, a posvuda je u okovima.&quot;</em> Rousseau hvali prirodu i osuđuje civilizaciju — misao koja će oblikovati romantizam, pedagogiku i sve revolucije do danas.</p>
            <div className="ac5-works">
              <div className="ac5-works-lbl">Ključna djela</div>
              <div className="ac5-work">
                <div className="ac5-badge">📜</div>
                <div>
                  <div className="ac5-work-title">Društveni ugovor + Emil</div>
                  <div className="ac5-work-meta">1762. · POLITIKA + PEDAGOGIJA</div>
                  <div className="ac5-work-desc"><em>Du contrat social</em>: temelj Revolucije 1789. <em>Emil</em>: odgoj u prirodi — direktan utjecaj na Calderónovu tezu o odgoju (H04) i Wertherovu izolaciju od društva.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-int" style={{marginTop:4}}>
        <div className="box-int-lbl">💡 Voltaire vs Rousseau — isti pokret, suprotan pristup</div>
        <div className="box-int-txt">Voltaire: <strong>razum + satira</strong> = kritika crkve i dogme. Rousseau: <strong>osjećaj + priroda</strong> = kritika civilizacije. Voltaire prezire Rousseaua — ali obojica su stupovi Revolucije. Rousseau je ujedno preteča romantizma koji Voltaire ne bi odobrio.</div>
      </div>
    </>
  );
}

/* ============================================================
   [4] TRIPLE MINI CARD — Kant + Lessing + Defoe
   HTML pozicija: L0 · sec "07 · Lessing, Kant, Defoe — prosvjetiteljstvo izvan Francuske"
   → ODMAH NAKON sec-hdr-a "07 ·", ISPRED .prose i .sg kartice
============================================================ */
export function AuthorCardKantLessing() {
  const autori = [
    {mono:'K',monoBg:'linear-gradient(135deg,#2a1a4a,#4a2a8a)',name:'Immanuel Kant',dates:'KÖNIGSBERG · 1724. – 1804.',
     djelo:'„Što je prosvjetiteljstvo?" (1784.)',
     ideja:'„Sapere aude! — Imaj hrabrosti koristiti vlastiti razum!" Prosvjetiteljstvo = izlazak čovjeka iz samoskrivljene nesamostalnosti. Kanon epohe u jednoj rečenici.'},
    {mono:'L',monoBg:'linear-gradient(135deg,#1a3a2a,#2a6a4a)',name:'Gotthold E. Lessing',dates:'CAMENZ · 1729. – 1781.',
     djelo:'Nathan Mudri (1779.)',
     ideja:'Drama o vjerskoj toleranciji — kršćanstvo, judaizam i islam simbolizirani kroz tri prstena. Koji je pravi? Nitko ne zna — ali pravi je onaj koji čini dobro. Werther na stolu drži njegovu Emiliju Galotti!'},
    {mono:'D',monoBg:'linear-gradient(135deg,#3a2a1a,#6a4a2a)',name:'Daniel Defoe',dates:'LONDON · 1660. – 1731.',
     djelo:'Robinson Crusoe (1719.)',
     ideja:'1. engleski roman. Čovjek koji se industrijskim radom i razumom spašava iz prirode. Prosvjetiteljski ideal: razum + rad = preživljavanje. Direktan kontrast Wertheru koji propada upravo od previše osjećaja.'},
  ];
  return (
    <>
      <style>{CSS_AC5}</style>
      <div style={{fontFamily:'var(--mono)',fontSize:9,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'var(--t3)',marginBottom:14}}>
        PROSVJETITELJSTVO IZVAN FRANCUSKE
      </div>
      <div className="ac5-triple">
        {autori.map(a=>(
          <div className="ac5" key={a.name}>
            <div className="ac5-hdr" style={{padding:'14px 16px 12px'}}>
              <div className="ac5-mono" style={{background:a.monoBg,width:40,height:40,fontSize:17}}>{a.mono}</div>
              <div className="ac5-meta">
                <div className="ac5-name" style={{fontSize:14}}>{a.name}</div>
                <div className="ac5-dates" style={{fontSize:9}}>{a.dates}</div>
              </div>
            </div>
            <div className="ac5-body" style={{padding:'12px 16px'}}>
              <div style={{fontFamily:'var(--display)',fontSize:12,fontWeight:700,color:'var(--gold)',marginBottom:6}}>{a.djelo}</div>
              <p style={{fontSize:12.5,marginBottom:0}}>{a.ideja}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [5] COMPARE STRIP — Prosvjetiteljstvo vs Sturm und Drang
   HTML pozicija: L0 · sec "05 · Sturm und Drang — pokret koji je rodio Werthera"
   → ODMAH NAKON sec-hdr-a "05 ·", ISPRED .prose i .con s 5 .cr
   → Vizualni kontrast dvaju pokreta kao uvod u sekciju
============================================================ */
export function CompareProsvjetiteljstvoSD() {
  const rows = [
    ['Središte',  'Francuska, Engleska',             'Njemačka (Frankfurt, Göttingen)'],
    ['Prioritet', 'Razum iznad svega',                'Osjećaj iznad razuma'],
    ['Čovjek',    'Racionalno biće',                  'Osjećajno, genijalno biće'],
    ['Priroda',   'Kontrolirati i koristiti',         'Koristiti za utočište duše'],
    ['Forma',     'Disciplina · jasnoća',             'Spontanost · lirska proza'],
    ['Ideal',     'Korisnost · progres',              'Autentičnost · sloboda'],
    ['Ključni',   'Voltaire · Kant · Diderot',        'Goethe · Schiller · Herder'],
  ];
  return (
    <>
      <style>{CSS_CMP5}</style>
      <SH5 label="05b · Prosvjetiteljstvo vs Sturm und Drang"/>
      <div className="cmp5">
        <div className="cmp5-side left">
          <div className="cmp5-author">☀️ Prosvjetiteljstvo</div>
          <div className="cmp5-period">18. ST. · FRANCUSKA · RAZUM · VOLTAIRE</div>
          {rows.map(([l,p])=>(<div className="cmp5-row" key={l}><span className="cmp5-lbl">{l}</span><span>{p}</span></div>))}
        </div>
        <div className="cmp5-vs"><span className="cmp5-vs-inner">VS</span></div>
        <div className="cmp5-side">
          <div className="cmp5-author">⚡ Sturm und Drang</div>
          <div className="cmp5-period">1770-IH · NJEMAČKA · OSJEĆAJ · GOETHE</div>
          {rows.map(([l,,s])=>(<div className="cmp5-row" key={l}><span className="cmp5-lbl">{l}</span><span>{s}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — paradoks epohe</div>
        <div className="box-int-txt">Sturm und Drang <strong>nastaje unutar prosvjetiteljstva</strong> kao protest protiv njega. Goethe i Schiller su obrazovani prosvjetiteljski intelektualci koji se bune protiv prosvjetiteljskog racionalizma. Taj paradoks je motor koji dovodi do romantizma (H06).</div>
      </div>
    </>
  );
}

/* ============================================================
   [6] TIMELINE — 18. stoljeće kronologija
   HTML pozicija: L0 · sec "03 · Kontekst — 18. stoljeće kao doba razuma"
   → NAKON .box-key "Ključna razlika — klasicizam vs prosvjetiteljstvo vs predromantizam"
   → NA DNU sekcije 03, tik ISPRED sec-hdr "04 · Goethe"
============================================================ */
const H05_18ST = [
  {date:'1689.', major:false, title:'Locke — Esej o ljudskom razumijevanju', desc:'Empirizam kao temelj prosvjetiteljstva: um je tabula rasa, znanje dolazi iz iskustva. Direktan utjecaj na Rousseauov Emil i Calderónovu tezu o odgoju (H04).'},
  {date:'1734.', major:false, title:'Voltaire — Filozofska pisma',           desc:'Voltaire vraća se iz Engleske s idejama Lockea i Newtona. Napada francusku crkvu i apsolutizam. Moderna satira kao politički alat.'},
  {date:'1748.', major:false, title:'Montesquieu — Duh zakona',              desc:'Teorija podjele vlasti: zakonodavna, izvršna, sudska. Temelj modernih demokratskih ustava — uključujući američki (1787.) i sve kasnije.'},
  {date:'1751.', major:true,  title:'Enciklopedija — Diderot i d\'Alembert', desc:'17 svezaka, 72.000 članaka, 20 godina rada. Codex prosvjetiteljske misli. Svaki članak je napad na praznovjerje i zagovor razuma. Crkva zabranjuje — što samo povećava čitanost.'},
  {date:'1762.', major:false, title:'Rousseau — Društveni ugovor + Emil',   desc:'„Čovjek je rođen slobodan..." — temelj Revolucije. Emil — odgoj u prirodi, bez prisile. Rousseau je ujedno inspiracija za Sturm und Drang: kult prirode i osjećaja.'},
  {date:'1774.', major:true,  title:'Werther — Goethe',                     desc:'Predromantizam u akciji: epistolarni roman koji zapali Europu. Werther efekt — val samoubojstava. Književnost prvi put ima globalni masovni kulturni utjecaj.'},
  {date:'1781.', major:false, title:'Kant — Kritika čistog uma',            desc:'Sinteza racionalizma i empirizma. Prosvjetiteljstvo dostiže filozofski vrhunac — i odmah počinje razgradnja kroz Sturm und Drang i romantizam koji Kant nije predvidio.'},
  {date:'1789.', major:true,  title:'Francuska revolucija — ideje postaju politika', desc:'Prosvjetiteljske ideje (sloboda, jednakost, bratstvo) silaze s knjižnih polica na ulice. Ancien régime pada. Romantizam nastaje kao odgovor na revolucionarni optimizam koji je izneverio.'},
];

export function Timeline18Stoljece() {
  return (
    <>
      <style>{CSS_TL5}</style>
      <SH5 label="03b · 18. stoljeće — kronologija prosvjetiteljstva" style={{marginTop:24}}/>
      <div className="tl5">
        {H05_18ST.map((ev,i)=>(
          <div className="tl5-ev" key={i}>
            <div className={`tl5-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl5-body">
              <div className="tl5-title">{ev.title}</div>
              <div className="tl5-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [7] POP KULTURA — Werther danas
   HTML pozicija: L0 · NAKON .cheat-card (sec "08 · Pred-ispit cheat sheet")
   → ISPRED .nav-row "← Prethodno / 💔 Werther deep-dive →"
============================================================ */
const POP_WERTHER = [
  {film:"🍬 Werther's Original",             title:'Bonboni nazvani po romanu',           source:"Bavarska tvrtka Storck nazvala je bonbone po Wertheru 1909. — jer su zlatni i slatki kao Wertherova ljubav. Generacije djece jedu 'Werther' ne znajući veze."},
  {film:'👔 Plavi frak + žuti prsluk',       title:'Moda kao protest',                   source:"Verterizam 1775.: mladići Europe oblače Wertherovu odjeću s bala. Prvo dokumentirano 'cosplay' iskustvo u povijesti — literatura kao fashion statement."},
  {film:'🎬 The Fault in Our Stars (2014.)', title:'= moderni Werther',                  source:'John Green: mladi s terminalnom bolešću koji vole beznadnom ljubavlju. Weltschmerz, smrt, autentičnost nasuprot društvenim konvencijama — Wertherovi motivi u YA formi.'},
  {film:'🎵 Charlotte Sometimes — The Cure', title:'Wertherova Charlotte u glazbi',      source:'Robert Smith (The Cure) čitao Goethea. Melankolija, neuzvraćena ljubav, depresija kao estetika — gotska glazba 1980-ih = verterizam u rock formatu.'},
  {film:'📱 Werther efekt (psihologija)',    title:'Znanstveni termin, živi i danas',    source:'Svaki medijsko-spektakularni slučaj samoubojstva uzrokuje porast stopa. WHO i mediji imaju protokole — „Werther protokol" vs „Papageno protokol". Goetheov roman u medicinskim udžbenicima.'},
  {film:'🇭🇷 Šenoa — „Prosjak Luka" (1879.)', title:'Wertherizam u hrvatskoj književnosti', source:'August Šenoa piše hrv. verziju Wertherova motiva: nesretna ljubav, socijalna barijera, melankolija. Most prema H17 (hrvatska moderna) — verterizam dolazi u Zagreb.'},
];

export function PopKulturaWerther() {
  return (
    <>
      <style>{CSS_POP5}</style>
      <SH5 label="Werther u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="box-int" style={{marginBottom:14}}>
        <div className="box-int-lbl">💡 Zašto ovo znati</div>
        <div className="box-int-txt">Werther nije historijski kuriozitet — on je živa referenca. Prepoznati vezu Werther↔Werther&apos;s Original ili Werther efekt pokazuje <strong>dubinsko razumijevanje kulturnog utjecaja</strong> — što ocjenjivači nagrađuju.</div>
      </div>
      <div className="pop5">
        {POP_WERTHER.map((p,i)=>(
          <div className="pop5-card" key={i}>
            <div className="pop5-film">{p.film}</div>
            <div className="pop5-title">{p.title}</div>
            <div className="pop5-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [8] HERO QUOTE — Werther
   HTML pozicija: L1 · Werther tab
   → ODMAH NAKON .box-int "Zašto Werther zaslužuje poseban tab"
   → ISPRED sec-hdr "01 · Osnovni podaci"
============================================================ */
export function HeroQuoteWerther() {
  return (
    <>
      <style>{CSS_QUOTE5}</style>
      <div className="hq5">
        <div className="hq5-eye">WERTHEROVA FILOZOFIJA U JEDNOJ REČENICI</div>
        <div className="hq5-text">„Poznajem se — <em>osjećam previše</em> — i to je moja nesreća.&quot;</div>
        <div className="hq5-body">Werther Wilhelmu, jesen 1772. — u trenutku kad Homer ustupa mjesto Ossianu. Jedna rečenica sumira Weltschmerz, Sturm und Drang i cijeli predromantizam: osjetljivost nije dar — ona je <strong style={{color:'var(--t1)'}}>i vrlina i prokletstvo</strong>.</div>
        <div className="hq5-source">PATNJE MLADOG WERTHERA · J.W. GOETHE · 1774. · EPISTOLARNI ROMAN · STURM UND DRANG</div>
      </div>
    </>
  );
}

/* ============================================================
   [9] STAT CARDS — Werther
   HTML pozicija: L1 · sec "01 · Osnovni podaci"
   → NAKON .sg grida (6 kartica: AUTOR, NAPISANO, VRSTA, STRUKTURA, MJESTO, FORMA)
   → ISPRED .box-signal "AUTOBIOGRAFSKI POVOD"
============================================================ */
export function StatCardsWerther() {
  const stats = [
    {ico:'✍️', val:'4 tjedna', lbl:'Pisanje',          sub:'u zanosu, 1774.'},
    {ico:'💌', val:'98 pisama', lbl:'Epistole',         sub:'prijatelju Wilhelmu'},
    {ico:'📖', val:'1. bestseller', lbl:'Europe',       sub:'preveden odmah svuda'},
    {ico:'💀', val:'Werther efekt', lbl:'Val samoub.',  sub:'Leipzig/Kopenh. zabrana'},
  ];
  return (
    <>
      <style>{CSS_STAT5}</style>
      <div className="stat5">
        {stats.map(s=>(
          <div className="stat5-card" key={s.lbl}>
            <span className="stat5-ico">{s.ico}</span>
            <div className="stat5-val">{s.val}</div>
            <div className="stat5-lbl">{s.lbl}</div>
            <div className="stat5-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [10] TIMELINE — Radnja Werthera (10 etapa)
   HTML pozicija: L1 · sec "02 · Radnja — u 10 etapa"
   → ZAMJENJUJE .box-20 s 10 numeriranih li stavki
   → Dolazi NAKON .prose uvoda sekcije
============================================================ */
const WERTHER_RADNJA = [
  {date:'sij.\n1771.', major:false, title:'Dolazak u Wahlheim',                   desc:'Werther bježi od neuzvraćene ljubavi i dolazi u malo mjesto. Buja u prirodi, slika, čita Homera. Pisma Wilhelmu su euforična.'},
  {date:'16.6.\n1771.', major:true,  title:'Susret s Lottom — ladanjski bal',      desc:'Lotte reže kruh za 8 mlađe braće i sestara. Werther se zaljubljuje. Na balu — oluja, Lottina igra, Klopstock. Katastrofa je počela.'},
  {date:'ljeto\n1771.', major:false, title:'Zlatno doba — prijateljstvo troje',    desc:'Werther, Lotte i Albert provode ljeto zajedno. Werther vara sebe da je prijatelju — ali pisma Wilhelmu otkrivaju suprotno.'},
  {date:'kraj\nkol.',   major:false, title:'Rasprava s Albertom o samoubojstvu',  desc:'Albert: „slabost i bijeg." Werther: „legitimno kad je bol apsolutna." Goethe postavlja nagovještaj kraja — Werther će svoju tezu dokazati životom.'},
  {date:'ruj.\n1771.',  major:false, title:'Albert se vraća — Lotte se udaje',    desc:'Albert i Lotte se vjenčaju. Werther shvaća da je izgubio. Odlazi u grad — uzima birokratski posao.'},
  {date:'velj.\n1772.', major:true,  title:'Poniženje kod grofa — klasno odbacivanje', desc:'Werther (građanin) mora napustiti večeru kad stignu plemići. Javno poniženje. Daje ostavku, vraća se u Wahlheim.'},
  {date:'stud.\n1772.', major:true,  title:'Ossian zamjenjuje Homera',            desc:'„Ossian je istisnuo Homera iz mog srca." Homer = klasicistička jasnoća, život. Ossian = predromantičarska melankolija, smrt. Simbolični prijelaz.'},
  {date:'20.12.\n1772.', major:false, title:'Posljednji susret s Lottom — Ossian', desc:'Čitaju zajedno Ossianove „Jadi Selme". Plaču. Werther ju poljubi — Lotte ga odbija i odlazi. Weltschmerz na vrhuncu.'},
  {date:'22.12.\n1772.', major:true,  title:'Samoubojstvo — Albertovi pištolji',  desc:'Werther šalje slugu po Albertove pištolje. Lotte ih vlastoručno daje — drhtava, „naslućujući loše." Tragička ironija: Albert (razum) daje oružje Wertherovoj (osjećaj) smrti.'},
  {date:'23.12.\n1772.', major:true,  title:'Smrt — pokopan između dvije lipe',   desc:'Umire ujutro. Pokopan bez svećenika, između dvije lipe — mjesta koje je sam odabrao kao idilu u prvoj knjizi. Idila postaje grob. Na stolu: otvoreni Lessingov Emilia Galotti.'},
];

export function TimelineRadnjaWerther() {
  return (
    <>
      <style>{CSS_TL5}</style>
      <p className="prose" style={{marginBottom:12}}>Roman prati Wertherov <em>unutarnji put</em> kroz pisma prijatelju Wilhelmu. 10 ključnih etapa:</p>
      <div className="tl5">
        {WERTHER_RADNJA.map((ev,i)=>(
          <div className="tl5-ev" key={i}>
            <div className={`tl5-date${ev.major?' major':''}`} style={{fontSize:7}}>{ev.date}</div>
            <div className="tl5-body">
              <div className="tl5-title">{ev.title}</div>
              <div className="tl5-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [11] SVG — Wertherov psihološki arc
   HTML pozicija: L1 · sec "07 · Teme i motivi"
   → ODMAH NAKON sec-hdr-a "07 ·", NA VRH sekcije
   → ISPRED .con s 5 .cr (tematski blokovi)
   → Vizualni arc pada prati tekstualnu analizu tema
============================================================ */
export function SVGWertherArc() {
  return (
    <>
      <style>{CSS_WRAP5}</style>
      <div className="wr5">
        <div className="wr5-lbl">WERTHEROV PSIHOLOŠKI PAD — OD EUFORIJE DO PROPASTI</div>
        <svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Wertherov emocionalni arc od euforije do samoubojstva">
          {[0,25,50,75,100].map(y=>(
            <line key={y} x1="60" y1={220-y*1.6} x2="620" y2={220-y*1.6} stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
          ))}
          {[['Euforija',100],['Nada',75],['Ravnoteža',50],['Depresija',25],['Očaj',0]].map(([l,v])=>(
            <text key={l} x="55" y={220-v*1.6+4} textAnchor="end" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)">{l}</text>
          ))}
          <defs>
            <linearGradient id="arc-grad5" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3ecf6e" stopOpacity=".8"/>
              <stop offset="35%" stopColor="#e9b446" stopOpacity=".8"/>
              <stop offset="70%" stopColor="#DC322F" stopOpacity=".8"/>
              <stop offset="100%" stopColor="#8B1E1B" stopOpacity=".9"/>
            </linearGradient>
          </defs>
          <path d="M80 60 C120 40 160 35 200 50 C240 65 270 90 310 120 C350 150 380 155 420 165 C450 173 470 175 500 182 C520 186 530 188 550 195 C570 202 585 210 600 218"
            fill="none" stroke="url(#arc-grad5)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M80 60 C120 40 160 35 200 50 C240 65 270 90 310 120 C350 150 380 155 420 165 C450 173 470 175 500 182 C520 186 530 188 550 195 C570 202 585 210 600 218 L600 220 L80 220 Z"
            fill="url(#arc-grad5)" opacity=".08"/>
          {[
            {x:80,  y:60,  label:'Dolazak\nu Wahlheim', color:'#3ecf6e'},
            {x:200, y:40,  label:'Susret\ns Lottom',    color:'#e9b446'},
            {x:310, y:110, label:'Vjenčanje\nAlberta',  color:'#e9b446'},
            {x:390, y:150, label:'Poniženje\nkod grofa', color:'#DC322F'},
            {x:490, y:178, label:'Ossian\n→ tama',      color:'#DC322F'},
            {x:570, y:195, label:'Ossian\n+ poljubac',  color:'#c0392b'},
            {x:600, y:218, label:'Smrt',                color:'#8B1E1B'},
          ].map((p,i)=>(
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="5" fill={p.color} opacity=".9"/>
              <text x={p.x} y={p.y-12} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={p.color}>{p.label.split('\n')[0]}</text>
              {p.label.includes('\n')&&(
                <text x={p.x} y={p.y-3} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={p.color}>{p.label.split('\n')[1]}</text>
              )}
            </g>
          ))}
          <line x1="60" y1="220" x2="620" y2="220" stroke="rgba(255,255,255,.15)" strokeWidth="1"/>
          <text x="80" y="234" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)">sij. 1771.</text>
          <text x="600" y="234" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)">pros. 1772.</text>
          <text x="330" y="248" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(255,255,255,.25)" fontStyle="italic">
            18 mjeseci — od Homerove jasnoće do Ossianova mraka
          </text>
        </svg>
      </div>
    </>
  );
}

/* ============================================================
   [12] ACCORDION — 4 centralna sukoba
   HTML pozicija: L1 · sec "04 · Centralni sukobi — sloj po sloj"
   → ZAMJENJUJE .con s 4 .cr blokova (SUKOB 1–4)
   → Dolazi IZMEĐU .prose "roman u kojem se pojedinac sudara s nizom barijera"
     i .box-warn "Goethe NE hvali Wertherovo samoubojstvo"
============================================================ */
const SUKOBI_H05 = [
  {br:'S1',naslov:'Osjećaj vs razum',tag:'CENTRALNI SUKOB · S&D',
   citat:'„Jedino što znam jest da osjećam — a to je za mene istina." — Werther Wilhelmu.',
   esej:'Centralni sukob cijelog Sturm und Drang pokreta. Werther = osjećaj kao jedini izvor istine. Albert = razum kontrolira osjećaj. Goethe ne daje pobjedniku pobjedu — Albert preživi, ali Wertherova smrt ostavlja dublji trag. Za esej: postavi kao dijagnoza epohe, ne osobna Wertherova mana.',
   args:['Albert je pozitivan lik (brižan, pošten, razuman) — Goethe ga ne čini zlikovcem da bi banalizirao sukob','Rasprava o samoubojstvu (kolovoz 1771.) anticipira kraj: Werther dokazuje svoju filozofiju vlastitom smrću','Sturm und Drang je književni protest: Goethe piše razumom kako bi pokazao granice razuma']},
  {br:'S2',naslov:'Pojedinac vs društvo',tag:'KLASNA BARIJERA',
   citat:'„Ja sam jedinstven — i nikome nisam potreban na način na koji bi mi ja bio potreban." — Werther.',
   esej:'Werther se ne uklapa nigdje: kao građanin odbačen od plemića (grofa), kao umjetnik od birokracije, kao ljubavnik od braka. Rani izraz moderne otuđenosti — 100 godina prije Kafke. Za esej: Weltschmerz nije subjektivan hir — on je strukturan, društveno nametnut.',
   args:['Scena kod grofa (veljača 1772.): Werther mora otići kad stignu plemići. Prosvjetiteljska ideja o jednakosti — ostaje teorija','Epistolarni format pojačava izolaciju: vidimo samo Wertherovu perspektivu, društvo je uvijek „vani"','Most prema egzistencijalizmu: Camus, Sartre, Kafka — otuđeni intelektualac kao književni arhetip počinje s Wertherom']},
  {br:'S3',naslov:'Ljubav vs dužnost',tag:'LOTTIN SUKOB',
   citat:'„Lotte, Lotte — i kad me napusti, ja ću ti i dalje biti ono što ti nisi mogla biti." — Werther, finale.',
   esej:'Tragedija nije samo Wertherova — Lotte je jednako zarobljena. Voli Werthera, ali dužna je Albertu. Goethe ne romantizira bijeg zbog ljubavi — Lotte ostaje vjerna. Za esej: Wertherova tragedija ima dva lica. On umire od ljubavi, ona živi s krivnjom.',
   args:['Lotte nije pasivna: ona daje Albertove pištolje i „naslućuje loše" — razumije što se događa, ne može drugačije','Njezina uloga „majke" 8 mlađih vezuje je za obiteljski poredak — ne bira između dvojice muškaraca, nego između ljubavi i dužnosti','Epistolarni format je nepošten prema Lotti: čujemo je samo kroz Werthera — ona nikad ne dobiva vlastitu perspektivu']},
  {br:'S4',naslov:'Priroda vs civilizacija',tag:'ROUSSEAUOV MOTIV',
   citat:'„Ossian je istisnuo Homera iz mog srca." — Werther, studeni 1772.',
   esej:'Werther se osjeća živim u prirodi (Wahlheim, ljeto) i mrtvim u gradu (birokracija, zimska tama). Rousseauov motiv: priroda = autentičnost, civilizacija = korupcija. Ali Goethe ga razvija dalje: priroda se mijenja zajedno s Wertherom — zimska pustoš odgovara unutarnjem krajoliku. Priroda = ogledalo duše.',
   args:['Homer = klasicistička jasnoća, ljetna idila, nada. Ossian = predromantičarska magla, zima, smrt. Dva pjesnika = dvije sezone = jedan psihološki put','Wahlheim (wahlheim = izabrani dom) — Werther sam bira grob ispod dvije lipe koje je opisao kao idilu u prvoj knjizi','Rousseau: Emil se odgaja u prirodi. Werther je otišao u prirodu ali civilizacija ga je pratila — brak, klase, konvencija']},
];

export function AccordionSukobiH05() {
  return (
    <>
      <style>{CSS_SC5}</style>
      <p className="prose" style={{marginBottom:12}}>Klikni za citat, analizu i argumente.</p>
      <div className="sc5s">
        {SUKOBI_H05.map(s=>(
          <details className="sc5" key={s.br}>
            <summary className="sc5-sum">
              <div className="sc5-num">{s.br}</div>
              <div className="sc5-ttl">{s.naslov}</div>
              <span className="sc5-meta">{s.tag}</span>
              <span className="sc5-chev">▾</span>
            </summary>
            <div className="sc5-body">
              <div className="sc5-quote">{s.citat}</div>
              <div className="sc5-why"><b>Za esej:</b> {s.esej}</div>
              <div className="sc5-args">
                {s.args.map((a,i)=>(
                  <div className="sc5-arg" key={i}>
                    <span className="sc5-arg-num">({i+1})</span>
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
   [13] ACCORDION — 5 ključnih scena + simboli drame
   HTML pozicija: L1 · sec "06 · Ključne scene — što moraš pamtiti"
   → ZAMJENJUJE .sg grid s 5 .sc kartica (Kruh, Rasprava, Grofd, Ossian, Pištolji/Smrt)
   → Dolazi IZMEĐU .prose "10 minuta pred maturu" i .con "07 · Teme i motivi"
============================================================ */
const KLJUCNE_H05 = [
  {br:'I/1', naslov:'Scena kruha + bal', tag:'16.6.1771.',
   citat:'„Vidio sam ju kako reže kruh za sve — i pomislio: ovo je žena." — Werther (parafr.)',
   esej:'Uspostavlja Lottin kompleksan lik: nije samo ljubavnica — ona je „majka" zajednice. Za esej o Weltschmerzu: jedini trenutak u romanu kad je Werther potpuno sretan — kontrast koji naglašava dubinu pada.'},
  {br:'I/2', naslov:'Rasprava s Albertom o samoubojstvu', tag:'kraj kolovo. 1771.',
   citat:'„Albert: samoubojstvo je slabost. Werther: pa je li bolest slabost?"',
   esej:'Ključna filozofska scena romana. Werther brani samoubojstvo kao legitimni čin kad je bol apsolutna — i dokazat će svoju tezu. Za esej o osjećaj vs razum: čista dramatizacija sukoba dvaju svjetonazora.'},
  {br:'II/1', naslov:'Poniženje kod grofa — klasna barijera', tag:'veljača 1772.',
   citat:'„Grof je bio ljubazan — bio je prinuđen biti." — Werther poslije.',
   esej:'Werther mora otići s večere kad stignu plemići. Prosvjetiteljska teza o jednakosti — provjerena u praksi i opovrgnuta. Za esej o pojedinac vs društvo: konkretni primjer Weltschmerza koji nije subjektivan.'},
  {br:'II/2', naslov:'Ossian i Homer — simbolički prijelaz', tag:'studeni 1772.',
   citat:'„Ossian je istisnuo Homera iz mog srca — i u tom tamnom, divljem, vjetrovitom, uzburkanom svijetu pronalazim sebe."',
   esej:'Najvažniji simbolički moment romana. Homer = klasicistička jasnoća, radost, prosvjetiteljstvo. Ossian = predromantičarska melankolija, smrt, Weltschmerz. Zamjena nije estetska — ona je egzistencijalna.'},
  {br:'II/3', naslov:'Pištolji i smrt', tag:'22.–23.12.1772.',
   citat:'„Lotte vlastoručno pruža pištolje — drhtavica je prolazi. Naslućuje loše."',
   esej:'Finalna tragička ironija: Albert (razum) posuđuje pištolje → Lotte (dužnost) ih predaje → Werther (osjećaj) njima umire. Pokopan bez svećenika, između dviju lipa. Na stolu: Lessingov Emilia Galotti otvorena na danu Emilijine dobrovoljne smrti.'},
];

export function AccordionKljucneSceneH05() {
  const simboli = [
    {ico:'👔', name:'Plavi frak + žuti prsluk', desc:'Wertherova odjeća s bala. Postaje uniforma verterizma — 1. modni kulturni fenomen.'},
    {ico:'🍞', name:'Kruh',                     desc:'Prva Lottina scena. Simbol majčinstva, zajednice i onoga što Werther želi ali ne može imati.'},
    {ico:'🔫', name:'Albertovi pištolji',        desc:'Albert (razum) → Lotte (dužnost) → Werther (osjećaj) = tragička ironija u jednom predmetu.'},
    {ico:'🌳', name:'Dvije lipe',               desc:'Werther sam opisuje kao idilično odmaralište u prvoj knjizi. Grob u drugoj.'},
    {ico:'📖', name:'Emilia Galotti (Lessing)',  desc:'Otvorena na stolu. Tragedija o ženi koja bira smrt nad nevoljenim brakom — Wertherova aluzija.'},
    {ico:'🎵', name:'Homer → Ossian',           desc:'Homer = živjeti. Ossian = umirati. Zamjena pjesnika = Wertherov psihološki prijelaz.'},
  ];
  return (
    <>
      <style>{`${CSS_SC5}${CSS_VERT5}`}</style>
      <p className="prose" style={{marginBottom:12}}>Iz ovih 5 scena može se argumentirati bilo koja teza.</p>
      <div className="sc5s">
        {KLJUCNE_H05.map(sc=>(
          <details className="sc5" key={sc.br}>
            <summary className="sc5-sum">
              <div className="sc5-num" style={{fontSize:11}}>{sc.br}</div>
              <div className="sc5-ttl">{sc.naslov}</div>
              <span className="sc5-meta">{sc.tag}</span>
              <span className="sc5-chev">▾</span>
            </summary>
            <div className="sc5-body">
              <div className="sc5-quote">{sc.citat}</div>
              <div className="sc5-why"><b>Za esej:</b> {sc.esej}</div>
            </div>
          </details>
        ))}
      </div>
      <SH5 label="06b · Simboli drame — čitaj kao šifru" style={{marginTop:20}}/>
      <div className="simb5">
        {simboli.map((s,i)=>(
          <div className="simb5-item" key={i}>
            <span className="simb5-ico">{s.ico}</span>
            <div>
              <div className="simb5-name">{s.name}</div>
              <div className="simb5-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [14] VERTERIZAM INFOGRAFIKA
   HTML pozicija: L1 · sec "08 · Verterizam, Werther efekt i video resursi"
   → ZAMJENJUJE .box-key "Verterizam i Werther efekt" (statični text blok)
   → Dolazi IZMEĐU .prose uvoda sekcije i .prose "Werther je dostupan online"
============================================================ */
export function VerterizamInfografika() {
  return (
    <>
      <style>{CSS_VERT5}</style>
      <div className="vert5">
        <div className="vert5-card">
          <div className="vert5-eye">KULTURNI FENOMEN · 1774.–1800.</div>
          <div className="vert5-title">🎭 Verterizam</div>
          <div className="vert5-body">
            Mladići Europe oponašaju Werthera: <strong>plavi frak + žuti prsluk</strong>, čitaju Ossiana i Homera, pišu ispovjedna pisma prijateljima, kultiviraju melankoliju. Parfem „Eau de Werther&quot;, motivi na kineskom porculanu.<br/><br/>
            <strong>1. pop-kulturni globalni bestseller</strong> — prije interneta, medija i reklamnih kampanja, Werther osvaja Europu isključivo snagom emocionalnog rezonancije.
          </div>
        </div>
        <div className="vert5-card warn">
          <div className="vert5-eye">PSIHOLOŠKI POJAM · od 1974.</div>
          <div className="vert5-title">⚠️ Werther efekt</div>
          <div className="vert5-body">
            Statistički dokumentirani val samoubojstava u Europi nakon 1774. Mladići oponašaju Werthera — čak i u načinu smrti. Neke države (Leipzig, Kopenhagen) <strong>zabranjuju roman</strong>. Goethe je užasnut.<br/><br/>
            Moderna psihologija (dr. David Phillips, 1974.) imenuje fenomen: medijsko spektakularna prezentacija samoubojstva uzrokuje porast stopa. <strong>WHO ima protokole zaštite</strong> — „Werther protokol&quot; vs „Papageno protokol&quot;.
          </div>
        </div>
      </div>
      <div className="box-int" style={{marginTop:4}}>
        <div className="box-int-lbl">⚠️ Goethe NE hvali samoubojstvo — pamti ovo</div>
        <div className="box-int-txt">Površno čitanje tretira roman kao glorifikaciju. Nije. Goethe je 1787. dodao upozorenje: <em>„I ti budi čovjek i ne slijedi njegov primjer.&quot;</em> Roman je klinički prikaz emocionalnog sloma — ne recept. Werther efekt ga je trajno užasavao.</div>
      </div>
    </>
  );
}

/* ============================================================
   [15] USPOREDBA — Werther vs Sigismund (cross-chapter H04→H05)
   HTML pozicija: L1 · sec "05 · Werther kao Sturm und Drang heroj"
   → NAKON .box-key "Pojam Weltschmerz — nauči napamet"
   → NA DNU sekcije 05, tik ISPRED sec-hdr "06 · Ključne scene"
   → Bridge H04 → H05
============================================================ */
export function UsporedbaWertherSigismund() {
  const rows = [
    ['Zapreka',   'iznutra — apsolutizam osjećaja',              'izvana — zatvor, sudbina, proročanstvo'],
    ['Problem',   'osjeća previše, ne može kontrolirati',        'nema iskustva, ne može kontrolirati bes'],
    ['Okolina',   'odbacuje ga (klase, brak, birokr.)',          'zatvorila ga (otac, zvijezde)'],
    ['Sloboda',   'ima je — ali je ne može koristiti',           'nema je — i to je problem'],
    ['Kraj',      'bira smrt kao jedini izlaz',                  'bira milost i postaje mudar vladar'],
    ['Poruka',    'osjećaj bez razuma = propast',                'slobodna volja pobjeđuje sudbinu'],
    ['Epoha',     'Predromantizam · S&D',                        'Barok · Siglo de Oro'],
  ];
  return (
    <>
      <style>{CSS_CMP5}</style>
      <SH5 label="05b · Werther vs Sigismund — bridge H04→H05" style={{marginTop:24}}/>
      <div className="cmp5">
        <div className="cmp5-side left">
          <div className="cmp5-author">Werther</div>
          <div className="cmp5-period">GOETHE · 1774. · PREDROMANTIZAM</div>
          {rows.map(([l,a])=>(<div className="cmp5-row" key={l}><span className="cmp5-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp5-vs"><span className="cmp5-vs-inner">VS</span></div>
        <div className="cmp5-side">
          <div className="cmp5-author">Sigismund</div>
          <div className="cmp5-period">CALDERÓN · 1635. · BAROK</div>
          {rows.map(([l,,r])=>(<div className="cmp5-row" key={l}><span className="cmp5-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — komparativna teza</div>
        <div className="box-int-txt">„Sigismund je zatvoren <strong>izvana</strong> (sudbina, otac) i uspijeva pobjeći — Werther je zatvoren <strong>iznutra</strong> (osjećaji) i ne uspijeva. Calderón vjeruje u slobodnu volju — Goethe pokazuje da slobodna volja nije dovoljna kad te unutarnji world ubija.&quot;</div>
      </div>
    </>
  );
}

/* ============================================================
   [16] ACCORDION — 5 esejnih teza za Werther
   HTML pozicija: L2 · Esej alat · sec "01 · 5 provjerenih teza za esej"
   → ZAMJENJUJE 5 .box-20 blokova (TEZA 1–5)
   → Dolazi IZMEĐU .prose "Svaka teza je formulirana kao central thesis"
     i sec-hdr "02 · Model uvoda"
============================================================ */
const ESEJ_TEZE_H05 = [
  {br:'T1',naslov:'Werther kao utjelovljenje Weltschmerza',tag:'WELTSCHMERZ',
   teza:'„Werther je prvi književni junak koji utjelovljuje pojam Weltschmerza — svjetske boli pojedinca koji osjeća nepremostiv jaz između svojih ideala i stvarnosti društva."',
   args:['Wertherova osjetljivost nije patološka — ona je prozor u stvarnost koju drugi ne vide; njegova bol je dijagnoza društva, ne osobna mana','Scena poniženja kod grofa pokazuje sistemsku prirodu Weltschmerza: kao građanin, ne može ući u plemićko društvo usprkos talentu','Ossian zamjenjuje Homera: prelazak od klasicistički jasnoće u predromantičarsku melankoliju simbolički prati psihički pad'],
   scena:'Posljednji susret s Lottom (20.12.) — čitanje Ossiana, suze, poljubac. Weltschmerz dostiže vrhunac: stvarnost više ne može zadržati ideale.'},
  {br:'T2',naslov:'Werther kao Sturm und Drang heroj',tag:'STURM UND DRANG',
   teza:'„Werther je arhetipski S&D heroj — genij kojeg sputavaju društvene konvencije, a čija tragedija proizlazi iz sukoba između pojedinca i poretka."',
   args:['Odbacuje sve tri institucije: crkvu (pokopan bez svećenika), državu (daje ostavku), brak (ne može prihvatiti Lotte-Albert vezu)','Albert je namjerno pozitivan lik — Goethe ga ne čini zlikovcem jer bi to banaliziralo sukob: tragedija je sistemska, ne personalna','Epistolarni oblik = formalni izraz teme: društvo je uvijek izvan, nečujno, dok Wertherov glas ispunjava roman'],
   scena:'Rasprava s Albertom o samoubojstvu (kolovoz 1771.) — dva svjetonazora u direktnom sudaru. Werther će svoju tezu dokazati smrću.'},
  {br:'T3',naslov:'Ljubav vs dužnost — Lottina šutnja',tag:'LOTTE · DUŽNOST',
   teza:'„Tragedija Werthera nije samo njegova — Lotte je jednako zarobljena u sukobu ljubavi i dužnosti, a njezina tiha patnja predstavlja srž moralnog problema romana."',
   args:['Lotte nije pasivna — ona voli Werthera, ali bira dužnost. Scena pištolja (daje ih drhtava) pokazuje da razumije posljedice, a ipak ne može drugačije','Njezina uloga „majke" 8 mlađih vezuje je za obiteljski poredak — ne bira između dvojice muškaraca, nego između ljubavi i dužnosti prema drugima','Goethe nikad ne daje Lotti vlastita pisma: vidimo je samo kroz Wertherovu subjektivnu, idealizirajuću prizmu'],
   scena:'Scena kruha (16.6.) — Lotte hrani braću i sestre. Werther se zaljubljuje u nju kao u simbol majčinskog poretka koji ne može uništiti.'},
  {br:'T4',naslov:'Priroda kao zrcalo duše',tag:'PRIRODA · ROUSSEAU',
   teza:'„Priroda u Wertheru nije kulisa — ona je psihološki instrument, zrcalo u kojem se Wertherovo unutarnje stanje ogleda i razvija."',
   args:['Prva knjiga (ljeto): bujna, topla priroda Wahlheima — Wertherov ushit i nada. Druga knjiga (zima): pustoš i tama — unutarnji krajolik','Rousseauov kult prirode: Werther u prirodi = autentičan, u gradu = mrtav. Ali Goethe ide dalje: čak i priroda se mijenja s njim','Dvije lipe: idilično odmaralište u prvoj knjizi → grob u drugoj. Ista mjesta, dijametralno suprotno značenje'],
   scena:'Studeni 1772.: „Ossian je istisnuo Homera." Promijenili su mu se i priroda i literatura — jednom promjenom osjećaja.'},
  {br:'T5',naslov:'Werther kao most prosvjetiteljstvo → romantizam',tag:'PRIJELAZ · EPOHE',
   teza:'„Werther predstavlja prijelomnu točku: odbacuje prosvjetiteljski razum kao mjerilo svega, istovremeno pripremajući teren za romantizam koji će dominirati sljedećih 50 godina."',
   args:['Albert = prosvjetiteljski razum (disciplina, konvencija). Werther = predromantičarski osjećaj. Albertov razum „pobjeđuje" — ali Wertherova smrt ostavlja trajniji kulturni trag','Roman koristi prosvjetiteljsku formu (epistolarni roman) ali je ispunjava antiprosvjetiteljskim sadržajem: iracionalnošću, strašću, mistikom','Verterizam dokazuje kulturnu prijelomnost: publika 1770-ih masovno se okreće osjećaju — pripremljena za Byrona, Puškina, Heinea (H06)'],
   scena:'Homer → Ossian zamjena. Homer je Voltaireov prosvjetiteljski ideal. Ossian je romantičarski. Werther izabire Ossiana — i s njim uvodi Europu u romantizam.'},
];

export function AccordionEsejTezeH05() {
  return (
    <>
      <style>{CSS_SC5}</style>
      <div className="sc5s">
        {ESEJ_TEZE_H05.map((t,idx)=>(
          <details className="sc5" key={t.br} style={{'--sc5-accent':TEZA_COLORS5[idx]}}>
            <summary className="sc5-sum">
              <div className="sc5-num" style={{fontSize:13,color:TEZA_COLORS5[idx]}}>{t.br}</div>
              <div className="sc5-ttl">{t.naslov}</div>
              <span className="sc5-meta" style={{color:TEZA_COLORS5[idx],borderColor:`${TEZA_COLORS5[idx]}55`}}>{t.tag}</span>
              <span className="sc5-chev" style={{color:TEZA_COLORS5[idx]}}>▾</span>
            </summary>
            <div className="sc5-body">
              <div className="sc5-quote">{t.teza}</div>
              <div className="sc5-why"><b>Argumenti:</b></div>
              <div className="sc5-args">
                {t.args.map((a,i)=>(
                  <div className="sc5-arg" key={i} style={{borderLeftColor:TEZA_COLORS5[idx]}}>
                    <span className="sc5-arg-num" style={{color:TEZA_COLORS5[idx]}}>({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc5-note">
                <strong style={{color:'var(--bronze)',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1,fontStyle:'normal'}}>KLJUČNA SCENA: </strong>{t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}


/* ============================================================
   H05ReactLayers — portal mount
============================================================ */
function H05ReactLayers() {
  const [anchors, setAnchors] = useState({});
  useEffect(() => {
    setAnchors({
      timeline18St:     document.getElementById('h05-react-timeline-18st'),
      authorGoethe:     document.getElementById('h05-react-author-goethe'),
      timelineGoethe:   document.getElementById('h05-react-timeline-goethe'),
      compareSD:        document.getElementById('h05-react-compare-sd'),
      authorVoltaire:   document.getElementById('h05-react-author-voltaire-rousseau'),
      authorKant:       document.getElementById('h05-react-author-kant-lessing'),
      popKultura:       document.getElementById('h05-react-pop-kultura'),
      heroQuote:        document.getElementById('h05-react-hero-quote'),
      statCards:        document.getElementById('h05-react-stat-cards'),
      timelineRadnja:   document.getElementById('h05-react-timeline-radnja'),
      accordionSukobi:  document.getElementById('h05-react-accordion-sukobi'),
      usporedba:        document.getElementById('h05-react-usporedba'),
      accordionKljucne: document.getElementById('h05-react-accordion-kljucne'),
      svgArc:           document.getElementById('h05-react-svg-arc'),
      verterizam:       document.getElementById('h05-react-verterizam'),
      esejTeze:         document.getElementById('h05-react-accordion-teze'),
      citatnik:         document.getElementById('h05-react-citatnik'),
      pojmovnik:        document.getElementById('h05-react-pojmovnik'),
    });
  }, []);
  return (
    <>
      {anchors.timeline18St     && createPortal(<Timeline18Stoljece />,              anchors.timeline18St)}
      {anchors.authorGoethe     && createPortal(<AuthorCardGoethe />,                anchors.authorGoethe)}
      {anchors.timelineGoethe   && createPortal(<TimelineGoethe />,                  anchors.timelineGoethe)}
      {anchors.compareSD        && createPortal(<CompareProsvjetiteljstvoSD />,       anchors.compareSD)}
      {anchors.authorVoltaire   && createPortal(<AuthorCardVoltaireRousseau />,       anchors.authorVoltaire)}
      {anchors.authorKant       && createPortal(<AuthorCardKantLessing />,            anchors.authorKant)}
      {anchors.popKultura       && createPortal(<PopKulturaWerther />,               anchors.popKultura)}
      {anchors.heroQuote        && createPortal(<HeroQuoteWerther />,                anchors.heroQuote)}
      {anchors.statCards        && createPortal(<StatCardsWerther />,                anchors.statCards)}
      {anchors.timelineRadnja   && createPortal(<TimelineRadnjaWerther />,           anchors.timelineRadnja)}
      {anchors.accordionSukobi  && createPortal(<AccordionSukobiH05 />,              anchors.accordionSukobi)}
      {anchors.usporedba        && createPortal(<UsporedbaWertherSigismund />,        anchors.usporedba)}
      {anchors.accordionKljucne && createPortal(<AccordionKljucneSceneH05 />,        anchors.accordionKljucne)}
      {anchors.svgArc           && createPortal(<SVGWertherArc />,                   anchors.svgArc)}
      {anchors.verterizam       && createPortal(<VerterizamInfografika />,           anchors.verterizam)}
      {anchors.esejTeze         && createPortal(<AccordionEsejTezeH05 />,            anchors.esejTeze)}
      {anchors.citatnik         && createPortal(
        <CitatnikH05
          onBack={() => window.sw && window.sw(2)}
          onNext={() => window.sw && window.sw(4)}
        />,
        anchors.citatnik
      )}
      {anchors.pojmovnik        && createPortal(<H05PojmovnikTab />, anchors.pojmovnik)}
    </>
  );
}

export default H05ReactLayers;
