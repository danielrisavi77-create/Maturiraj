'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import CitatnikH06 from './H06_CitatnikTab';
import H06PojmovnikTab from './H06_PojmovnikTab';

/* ============================================================
   H06 — Romantizam (europski) · Puškin · Evgenij Onjegin
   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.

   NAPOMENA: L1 sekcija "01b · Puškinov život" već ima
   .puskin-timeline — NE zamjenjivati, samo dopuniti.
============================================================ */

/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_SECHDR6 = `
  .sh6{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh6-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh6-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;
function SH6({label,style}){
  return(
    <><style>{CSS_SECHDR6}</style>
    <div className="sh6" style={style}>
      <div className="sh6-line"/><div className="sh6-badge">{label}</div><div className="sh6-line"/>
    </div></>
  );
}

const CSS_AC6 = `
  .ac6{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac6:hover{border-color:var(--bd-br)}
  .ac6-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac6-mono{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,50,47,.3)}
  .ac6-meta{flex:1;min-width:0}
  .ac6-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac6-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac6-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac6-star{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;color:var(--gold);letter-spacing:.5px;margin-top:6px}
  .ac6-body{padding:18px 22px}
  .ac6-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac6-body p:last-child{margin-bottom:0}
  .ac6-body strong{color:var(--t1)}
  .ac6-body em{color:var(--gold);font-style:italic}
  .ac6-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac6-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac6-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac6-work:last-child{border-bottom:none;padding-bottom:0}
  .ac6-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac6-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac6-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac6-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  .ac6-triple{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}
  .ac6-triple .ac6{margin:0}
  @media(max-width:700px){.ac6-triple{grid-template-columns:1fr}}
  @media(max-width:600px){.ac6-hdr{flex-direction:column;gap:10px}.ac6-mono{width:42px;height:42px;font-size:18px}.ac6-body{padding:14px 16px}.ac6-name{font-size:15px}}
`;

const CSS_TL6 = `
  .tl6{position:relative;padding:20px 0;margin:18px 0}
  .tl6::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl6-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl6-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl6-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl6-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl6-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl6-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl6-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC6 = `
  .sc6s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc6{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc6:hover{border-color:var(--bd-br)}
  .sc6[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc6-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc6-sum::-webkit-details-marker{display:none}
  .sc6-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc6[open] .sc6-chev{transform:rotate(180deg);color:var(--gold)}
  .sc6-num{font-family:var(--display);font-size:14px;font-weight:700;color:var(--bronze-l);min-width:26px}
  .sc6[open] .sc6-num{color:var(--gold)}
  .sc6-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc6-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc6-body{padding:0 16px 16px}
  .sc6-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc6-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .sc6-why b{color:var(--t1)}
  .sc6-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc6-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc6-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .sc6-note{margin-top:10px;padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .sc6-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc6-meta{display:none}
    .sc6-body{padding:0 12px 12px}
  }
`;

const CSS_CMP6 = `
  .cmp6{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp6-side{padding:18px 20px;background:var(--sur)}
  .cmp6-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp6-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp6-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp6-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp6-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp6-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp6-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:58px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp6{grid-template-columns:1fr}.cmp6-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp6-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT6 = `
  .stat6{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0 20px}
  .stat6-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat6-card:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px)}
  .stat6-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat6-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat6-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat6-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat6{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE6 = `
  .hq6{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
  .hq6::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq6::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
  .hq6-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
  .hq6-text{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);line-height:1.45;font-style:italic;margin-bottom:10px}
  .hq6-text em{color:var(--gold);font-style:normal}
  .hq6-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq6-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq6{padding:18px 18px 18px 22px}.hq6-text{font-size:14px}}
`;

const CSS_WRAP6 = `
  .wr6{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;margin:0 0 22px;overflow:hidden;transition:border-color .25s}
  .wr6:hover{border-color:rgba(255,255,255,.12)}
  .wr6-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:14px;display:flex;align-items:center;gap:8px}
  .wr6-lbl::before{content:'';display:block;width:16px;height:1px;background:var(--bdm)}
`;

const CSS_POP6 = `
  .pop6{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop6-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop6-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop6-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop6-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop6-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop6{grid-template-columns:1fr}}
`;

const CSS_OPERA6 = `
  .opera6{background:linear-gradient(135deg,rgba(107,155,255,.06),rgba(124,92,252,.06));border:1px solid rgba(107,155,255,.2);border-radius:var(--r4);padding:20px;margin:18px 0}
  .opera6-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--blue,#6b9bff);margin-bottom:8px;text-transform:uppercase}
  .opera6-title{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);margin-bottom:6px}
  .opera6-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.65}
`;

export const CSS_ONJEGIN6 = `
@keyframes gradient-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.si-te{background:rgba(107,142,127,.09);color:#6B8E7F}
.si-re{background:rgba(192,66,68,.10);color:#E06264}
.oneginski-viz{background:linear-gradient(135deg,rgba(220,50,47,.03),rgba(232,201,122,.03));border:1px solid rgba(220,50,47,.28);border-radius:12px;padding:20px;margin:18px 0;font-family:monospace;font-size:13px;line-height:2}
.oneginski-viz-row{display:flex;align-items:baseline;gap:14px;padding:3px 0}
.oneginski-viz-num{width:24px;color:#6B5A4E;font-size:10px;text-align:right;flex-shrink:0}
.oneginski-viz-rhyme{width:28px;font-weight:700;font-size:12px;padding:2px 6px;border-radius:4px;text-align:center;flex-shrink:0}
.oneginski-viz-rhyme.A{background:rgba(220,50,47,.15);color:#E06264}
.oneginski-viz-rhyme.B{background:rgba(232,201,122,.15);color:#E8C97A}
.oneginski-viz-rhyme.C{background:rgba(107,148,100,.15);color:#8BB584}
.oneginski-viz-rhyme.D{background:rgba(180,140,200,.15);color:#c5a1d9}
.oneginski-viz-rhyme.E{background:rgba(100,180,200,.15);color:#7cc5d9}
.oneginski-viz-rhyme.F{background:rgba(220,120,80,.15);color:#e0a077}
.oneginski-viz-rhyme.G{background:rgba(150,150,150,.15);color:#B09684}
.oneginski-viz-rhyme.lc{opacity:.7;font-size:11px}
.oneginski-viz-text{flex:1;color:#B09684;font-family:Georgia,serif;font-style:italic}
.oneginski-viz-caption{font-family:monospace;font-size:10px;color:#6B5A4E;text-transform:uppercase;letter-spacing:1.5px;margin-bottom:12px;text-align:center}
.oneginski-viz-legend{display:flex;justify-content:center;gap:10px;margin-top:14px;flex-wrap:wrap;font-family:monospace;font-size:10px;color:#6B5A4E}
.puskin-timeline{position:relative;padding:20px 0;margin:18px 0}
.puskin-timeline::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#DC322F,#E8C97A,#DC322F);opacity:.4}
.pt-event{display:flex;gap:16px;margin-bottom:16px;position:relative}
.pt-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:#2A1612;border:2px solid #DC322F;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:9px;font-weight:700;color:#DC322F;z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
.pt-date.pt-major{background:linear-gradient(135deg,#8B1E1B,#DC322F);color:#F5E6D3;border-color:#E8C97A;box-shadow:0 0 16px rgba(232,201,122,.3)}
.pt-body{flex:1;padding:8px 14px;background:#2A1612;border:1px solid rgba(220,50,47,.18);border-radius:8px}
.pt-body:hover{border-color:rgba(220,50,47,.28)}
.pt-title{font-family:Georgia,serif;font-size:13px;font-weight:600;color:#FF5A54;margin-bottom:3px}
.pt-desc{font-family:Georgia,serif;font-size:12.5px;color:#B09684;line-height:1.55}
.ck.te{color:#6B8E7F}.ck.te::before{background:#6B8E7F}
.ck.t{color:#6B8E7F}.ck.t::before{background:#6B8E7F}
.feature-callout{position:relative;padding:20px;margin:18px 0;border-radius:12px;background:#2A1612;overflow:hidden}
.feature-callout::before{content:'';position:absolute;inset:-2px;border-radius:12px;padding:2px;background:linear-gradient(90deg,#DC322F,#E8C97A,#C04244,#E8C97A,#DC322F);background-size:300% 100%;animation:gradient-border 8s linear infinite;-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}
`;

const TEZA_COLORS6 = ['#e9b446','#DC322F','#6b9bff','#3ecf6e','rgba(200,130,255,1)','#f97316','#06b6d4'];

/* ============================================================
   [1] AUTHOR CARD — Aleksandar Puškin
============================================================ */
export function AuthorCardPuskin({context='l0'}) {
  return (
    <>
      <style>{CSS_AC6}</style>
      <div className="ac6">
        <div className="ac6-hdr">
          <div className="ac6-mono">П</div>
          <div className="ac6-meta">
            <div className="ac6-name">Aleksandar Sergejevič Puškin</div>
            <div className="ac6-dates">MOSKVA · 1799. – SANKT-PETERBURG · 1837.</div>
            <div className="ac6-tags">
              <span className="pill p-br" style={{fontSize:10}}>{'\u201E'}naše sve{'\u201C'}</span>
              <span className="pill p-go" style={{fontSize:10}}>oneginski stih</span>
              <span className="pill p-r" style={{fontSize:10}}>suvišan čovjek</span>
              {context==='l1'&&<div className="ac6-star">⭐ ROMANTIZAM · TEORIJA 2026</div>}
            </div>
          </div>
        </div>
        <div className="ac6-body">
          <p>Najveći ruski pjesnik svih vremena — <em>{'\u201E'}naše sve{'\u201C'}</em> kako ga zovu Rusi. Utemeljitelj modernog ruskog književnog jezika: prije njega ruska književnost je fragmentirana (staroruski, crkvenoslavenski, francuski u salonima), Puškin kombinira narodni jezik s visokim stilom. Svi veliki Rusi — Gogolj, Dostojevski, Tolstoj — polaze od Puškina.</p>
          <p>Pogiba u dvoboju s 38 godina braneći čast žene Natalije Gončarove — ironija: upravo kao Onjegin koji je ubio Lenskog u duelu. Pradjed mu je bio <strong>Abram Hanibal</strong> — afrički princ kojeg je Petar Veliki adoptirao, što mu daje osjećaj {'\u201E'}outsidera{'\u201C'} u ruskoj aristokraciji.</p>
          <div className="ac6-works">
            <div className="ac6-works-lbl">Ključna djela</div>
            <div className="ac6-work">
              <div className="ac6-badge">📖</div>
              <div>
                <div className="ac6-work-title">Evgenij Onjegin</div>
                <div className="ac6-work-meta">1823.–1831. · ROMAN U STIHOVIMA · 389 STROFA</div>
                <div className="ac6-work-desc">8 godina pisanja, 8 poglavlja. Suvišan čovjek, ljubavni obrat, oneginski stih. Belinski: <em>{'\u201E'}enciklopedija ruskog života.{'\u201C'}</em></div>
              </div>
            </div>
            <div className="ac6-work">
              <div className="ac6-badge">🏇</div>
              <div>
                <div className="ac6-work-title">Kapetanova kći · Boris Godunov</div>
                <div className="ac6-work-meta">1836. · ROMAN U PROZI + DRAMA</div>
                <div className="ac6-work-desc">Kapetanova kći = prijelaz u realizam. Boris Godunov = povijesna drama po Shakespeareovom uzoru. Puškin je i dramatičar i prozaist.</div>
              </div>
            </div>
            <div className="ac6-work">
              <div className="ac6-badge">🌹</div>
              <div>
                <div className="ac6-work-title">Južne poeme · Ruslan i Ljudmila</div>
                <div className="ac6-work-meta">1820.–1824. · ROMANTIČKE POEME</div>
                <div className="ac6-work-desc">Pisane u progonstvu pod Byronovim utjecajem. Kavkaz, Krim, Moldavija kao romantičarski egzotični krajolici.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [2] AUTHOR CARD — Lord Byron
============================================================ */
export function AuthorCardByron() {
  return (
    <>
      <style>{CSS_AC6}</style>
      <div className="ac6">
        <div className="ac6-hdr">
          <div className="ac6-mono" style={{background:'linear-gradient(135deg,#1a1a3a,#3a3a6a)'}}>B</div>
          <div className="ac6-meta">
            <div className="ac6-name">George Gordon, Lord Byron</div>
            <div className="ac6-dates">LONDON · 1788. – MISSOLONGHI · 1824.</div>
            <div className="ac6-tags">
              <span className="pill p-t" style={{fontSize:10}}>byronski heroj</span>
              <span className="pill p-br" style={{fontSize:10}}>Childe Harold</span>
              <span className="pill p-go" style={{fontSize:10}}>ikona romantizma</span>
            </div>
          </div>
        </div>
        <div className="ac6-body">
          <p>Arhetip romantičarskog genija — i u životu i u djelu. Skandalozan, melankoličan, proganjani, moralno ambivalentan. <em>{'\u201E'}Mad, bad, and dangerous to know{'\u201C'}</em> — Lady Caroline Lamb o njemu. Umire 1824. u Grčkoj boreći se za grčku nezavisnost od Osmanskog Carstva — ikona romantičarskog ideala slobode do groba.</p>
          <p><strong>Byronski heroj</strong> je književni tip koji utjelovljuje: melankoliju, tajnovitu prošlost, izolaciju od društva, intelektualnu superiornost i demonsku privlačnost. Puškinov Onjegin je byronski heroj — u sobi mu visi Byronov portret. Lermontovljev Pečorin, Brontein Heathcliff — svi su nasljednici.</p>
          <div className="ac6-works">
            <div className="ac6-works-lbl">Ključna djela</div>
            <div className="ac6-work">
              <div className="ac6-badge">🧳</div>
              <div>
                <div className="ac6-work-title">Childe Haroldovo hodočašće</div>
                <div className="ac6-work-meta">1812.–1818. · ROMANTIČKA POEMA · 4 PJEVANJA</div>
                <div className="ac6-work-desc">Melankolični mladi plemić putuje Europom, razočaran i izoliran. Byron postaje slavom poznata osoba preko noći. Definira byronski heroj tip.</div>
              </div>
            </div>
            <div className="ac6-work">
              <div className="ac6-badge">🎭</div>
              <div>
                <div className="ac6-work-title">Don Juan</div>
                <div className="ac6-work-meta">1819.–1824. · NEDOVRŠENO · SATIRIČKA POEMA</div>
                <div className="ac6-work-desc">Byronov Don Juan nije zapeljivač — on je naivan mladić kojeg žene zavode. Parodija romantičkih klišeja. Nedovršeno u trenutku Byronove smrti.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [3] TRIPLE MINI CARD — Wordsworth + Shelley + Keats
============================================================ */
export function AuthorCardEngleskiRom() {
  const autori = [
    {mono:'W',monoBg:'linear-gradient(135deg,#1a3a1a,#2a6a2a)',name:'William Wordsworth',dates:'1770. – 1850.',
     djelo:'Lyrical Ballads (1798., s Coleridgeom)',
     ideja:"Manifest engleskog romantizma. Priroda kao duhovni prostor, jednostavni ljudi kao moralni uzor. Otvara romantizam u Engleskoj."},
    {mono:'S',monoBg:'linear-gradient(135deg,#1a1a3a,#2a2a6a)',name:'Percy B. Shelley',dates:'1792. – 1822.',
     djelo:'Oda zapadnom vjetru (1819.)',
     ideja:"Shelley je revolucionar i ateist — romantizam kao politički program slobode. Utoplja se s 29."},
    {mono:'K',monoBg:'linear-gradient(135deg,#3a1a1a,#6a2a2a)',name:'John Keats',dates:'1795. – 1821.',
     djelo:'Oda slavuju (1819.)',
     ideja:"Keats = ljepota kao jedina istina. Umire od tuberkuloze s 25 — simbol romantičarskog genija kojeg ugasi mladost."},
  ];
  return (
    <>
      <style>{CSS_AC6}</style>
      <div style={{fontFamily:'var(--mono)',fontSize:9,fontWeight:700,letterSpacing:2,textTransform:'uppercase',color:'var(--t3)',margin:'20px 0 14px'}}>
        ENGLESKI ROMANTIZAM — LAKISTI I MLAĐA GENERACIJA
      </div>
      <div className="ac6-triple">
        {autori.map(a=>(
          <div className="ac6" key={a.name}>
            <div className="ac6-hdr" style={{padding:'14px 16px 12px'}}>
              <div className="ac6-mono" style={{background:a.monoBg,width:40,height:40,fontSize:17}}>{a.mono}</div>
              <div className="ac6-meta">
                <div className="ac6-name" style={{fontSize:14}}>{a.name}</div>
                <div className="ac6-dates" style={{fontSize:9}}>{a.dates}</div>
              </div>
            </div>
            <div className="ac6-body" style={{padding:'12px 16px'}}>
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
   [4] AUTHOR CARD MINI — Goethe / Faust
============================================================ */
export function AuthorCardFaustMini() {
  return (
    <>
      <style>{CSS_AC6}</style>
      <div className="ac6" style={{margin:'14px 0'}}>
        <div className="ac6-hdr" style={{padding:'14px 18px 12px'}}>
          <div className="ac6-mono" style={{background:'linear-gradient(135deg,#2a2a0a,#5a5a2a)',width:44,height:44,fontSize:18}}>G</div>
          <div className="ac6-meta">
            <div className="ac6-name" style={{fontSize:15}}>Goethe — Faust (kasna faza)</div>
            <div className="ac6-dates">FRANKFURT · 1749. – 1832. · ← iz H05</div>
            <div className="ac6-tags">
              <span className="pill p-go" style={{fontSize:9}}>Faust I · 1808.</span>
              <span className="pill p-br" style={{fontSize:9}}>kozmička drama</span>
            </div>
          </div>
        </div>
        <div className="ac6-body" style={{padding:'12px 18px'}}>
          <p style={{fontSize:13}}>Goethe je u H05 kao Sturm und Drang autor (Werther). Ovdje se pojavljuje u kasnoj romantičkoj fazi: <strong>Faust I</strong> (1808.) i <strong>Faust II</strong> (1832., posmrtno). Doktor prodaje dušu Mefistofelesu za znanje i iskustvo — kozmička drama o neutaživoj ljudskoj težnji za apsolutnim.<br/><br/>Ključni stih za esej: <em>{'\u201E'}Zaustavi se, trenutku! Tako si lijep!{'\u201C'}</em> — Faust izgovara kad konačno pronađe smisao (ali tada gubi dušu). Romantičarska paradoks: cilj uništava onoga koji ga dostiže.</p>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [5] COMPARE STRIP — Romantizam vs Prosvjetiteljstvo
============================================================ */
export function CompareRomantiProsvjet() {
  const rows = [
    ['Temelj',    'Razum i iskustvo',         'Osjećaj i intuicija'],
    ['Priroda',   'Resurs koji koristimo',     'Duhovni prostor, ogledalo duše'],
    ['Čovjek',    'Racionalno biće',           'Osjećajno, genijalnoindividualno'],
    ['Ideal',     'Progres, korisnost',        'Sloboda, autentičnost, ljepota'],
    ['Forma',     'Jasnoća, disciplina',       'Slobodna, ekspresivna, hibridna'],
    ['Društvo',   'Poboljšati razumom',        'Pobjeći u prirodu/povijest'],
    ['Ključni',   "Kantov 'Sapere aude!'",     'Wertherova smrt (H05)'],
  ];
  return (
    <>
      <style>{CSS_CMP6}</style>
      <SH6 label="03b · Romantizam kao reakcija na prosvjetiteljstvo"/>
      <div className="cmp6">
        <div className="cmp6-side left">
          <div className="cmp6-author">☀️ Prosvjetiteljstvo</div>
          <div className="cmp6-period">18. ST. · RAZUM · VOLTAIRE · KANT · ← H05</div>
          {rows.map(([l,p])=>(<div className="cmp6-row" key={l}><span className="cmp6-lbl">{l}</span><span>{p}</span></div>))}
        </div>
        <div className="cmp6-vs"><span className="cmp6-vs-inner">→</span></div>
        <div className="cmp6-side">
          <div className="cmp6-author">🌹 Romantizam</div>
          <div className="cmp6-period">1798.–1848. · OSJEĆAJ · BYRON · PUŠKIN · H06</div>
          {rows.map(([l,,r])=>(<div className="cmp6-row" key={l}><span className="cmp6-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — romantizam nije protuprosvjetiteljstvo</div>
        <div className="box-int-txt">Romantičari su čitali prosvjetitelje i poštuju razum — ali smatraju da <strong>razum nije dovoljan</strong> za razumijevanje ljubavi, prirode i ljepote. Werther (H05) je most: piše kao prosvjetiteljski epistolarni roman, ali s antiprosvjetiteljskim sadržajem.</div>
      </div>
    </>
  );
}

/* ============================================================
   [6] TIMELINE — Romantizam u Europi 1798.–1848.
============================================================ */
const ROM_TIMELINE = [
  {date:'1798.', major:true,  title:'Lyrical Ballads — manifest romantizma',        desc:'Wordsworth i Coleridge objavljuju zbirku. Predgovor (1800.) je manifest engleskog romantizma: priroda, jednostavni ljudi, emocionalna istinitost. Romantizam ima datum rođenja.'},
  {date:'1808.', major:false, title:'Faust I — Goethe',                              desc:'Goethe prekida sa Sturm und Drang i donosi kozmičku romantičarsku dramu. Faust je simbol romantičke neutažive žudnje za apsolutnim.'},
  {date:'1812.', major:false, title:'Childe Harold — Byron postaje slavan',          desc:'Byron se probudi slavan. Childe Harold definira byronski heroj. Romantizam postaje moda — melankolija, putovanja, egzotika.'},
  {date:'1818.', major:true,  title:'Frankenstein — Mary Shelley',                   desc:'Mary Shelley piše 1. sci-fi roman. Frankenstein = romantičarsko upozorenje o granicama ljudskog znanja i moći. Koji je pravi čudovište — stvorenje ili tvorac?'},
  {date:'1819.', major:false, title:'Don Juan + Keats + Shelley',                    desc:'Don Juan (Byron), Oda slavuju (Keats), Oda zapadnom vjetru (Shelley) — ista godina. Engleski romantizam na vrhuncu — i na izmaku.'},
  {date:'1823.', major:true,  title:'Onjegin počinje — Puškin u progonstvu',         desc:'Puškin u Kišinjevu počinje pisati Evgenija Onjegina. Byronov utjecaj na vrhuncu. Roman će se pisati 8 godina kroz progonstva i vraćanja.'},
  {date:'1824.', major:false, title:'Byron umire u Grčkoj',                          desc:'Umire boreći se za grčku nezavisnost. Ikona romantizma postaje mučenik. Cijela Europa žaluje.'},
  {date:'1831.', major:true,  title:'Onjegin dovršen + Victor Hugo',                 desc:'Puškin dovršava Onjegina. Hugo objavljuje Notre-Dame de Paris — francuski romantizam u punom jeku. Romantizam se širi po cijeloj Europi.'},
  {date:'1848.', major:false, title:'Revolucije u Europi — kraj romantizma',         desc:'Revolucije u Parizu, Beču, Berlinu, Pragu, Budimpešti. Romantički ideali slobode postaju politika — i gube. Realizam (H07) nastaje iz razočaranja.'},
];

export function TimelineRomantizam() {
  return (
    <>
      <style>{CSS_TL6}</style>
      <SH6 label="03c · Romantizam u Europi — kronologija" style={{marginTop:24}}/>
      <div className="tl6">
        {ROM_TIMELINE.map((ev,i)=>(
          <div className="tl6-ev" key={i}>
            <div className={`tl6-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl6-body">
              <div className="tl6-title">{ev.title}</div>
              <div className="tl6-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [7] POP KULTURA — Romantizam danas
============================================================ */
const POP_ROM = [
  {film:'⚡ Byron — 1. pop zvijezda',       title:'Groupies, skandali, slavna osoba',   source:'Byron je imao fanove koji su mu slali pramen kose, pratili ga na putovanjima i padali u nesvijest. 1. celebrity u modernom smislu — 200 godina prije Instagrama.'},
  {film:'🧟 Frankenstein (1818.)',           title:'1. sci-fi roman',                    source:'Mary Shelley napisala za kišnog vikenda u Ženevi (kladi se s Byronom i Shelleyem). Frankenstein = romantičarska kritika znanosti bez morala. Svaki zombi film od tada je nasljednik.'},
  {film:'🎵 Čajkovski — opera Onjegin (1879.)',title:'Slavnija od romana',              source:'Puškinov roman je globalno poznat ponajviše kroz Čajkovskijevu operu. Tatjanino pismo iz opere = jedan od najslavnijih opernih monologa. Onjegin je opera ikona.'},
  {film:'🧛 Twilight, Heathcliff, Rochester', title:'Byronski heroj živi',              source:'Edward Cullen (Twilight), Heathcliff (Wuthering Heights), Rochester (Jane Eyre) — svi su byronski heroji: tajnoviti, melankolični, moralno ambivalentni, magnetski. 200 godina i dalje prodaje.'},
  {film:'🌿 Romantizam u Instagramu',        title:"'Cottagecore' i priroda",           source:"Cottagecore, dark academia, romanticized nature — estetske online pokrete direktno nasljeđuju romantizam. Gen Z koji se fotografira u šumi pored vrtova oponaša Wordswortha."},
  {film:'🇭🇷 Preradović — hrv. romantizam',  title:'Bridge prema H16/H17',             source:"Petar Preradović (1818.–1872.) — 'dalmatinski Puškin'. Hrv. romantizam dolazi 20 god. kasnije. Preradović piše po Byronovim i Puškinovim uzorima. H16 će ga obraditi."},
];

export function PopKulturaRomantizam() {
  return (
    <>
      <style>{CSS_POP6}</style>
      <SH6 label="Romantizam u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="pop6">
        {POP_ROM.map((p,i)=>(
          <div className="pop6-card" key={i}>
            <div className="pop6-film">{p.film}</div>
            <div className="pop6-title">{p.title}</div>
            <div className="pop6-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [8] HERO QUOTE — Tatjanino pismo
============================================================ */
export function HeroQuoteTatjanino() {
  return (
    <>
      <style>{CSS_QUOTE6}</style>
      <div className="hq6">
        <div className="hq6-eye">PRVA EKSPLICITNA ŽENSKA IZJAVA LJUBAVI U RUSKOJ KNJIŽEVNOSTI</div>
        <div className="hq6-text">
          {'\u201E'}Pišem Vam — <em>što još reći</em>?
          Što više mogu dodati? Znam da ste sad u vlasti
          da mene prezret{'\u2019'} il{'\u2019'} kazniti za ovu odvažnost smjelu.{'\u201C'}
        </div>
        <div className="hq6-body">Tatjana noću piše pismo Onjeginu — III. poglavlje. Čin koji krši sve konvencije epohe: žena ne smije prva iskazivati ljubav. Tatjana to zna — i svejedno piše. To je čin hrabrosti, ne naivnosti. <strong style={{color:'var(--t1)'}}>Puškin je čuva kao svetinju.</strong></div>
        <div className="hq6-source">EVGENIJ ONJEGIN · A. PUŠKIN · 1823.–1831. · III. POGLAVLJE · ONEGINSKI STIH</div>
      </div>
    </>
  );
}

/* ============================================================
   [9] STAT CARDS — Evgenij Onjegin
============================================================ */
export function StatCardsOnjegin() {
  const stats = [
    {ico:'⏱️', val:'8 godina',   lbl:'Pisanje',      sub:'1823.–1831.'},
    {ico:'📖', val:'8 poglavlja', lbl:'Struktura',    sub:'+ 1 izbačeno'},
    {ico:'📝', val:'389 strofa', lbl:'Oneginski stih',sub:'= 5.446 stihova'},
    {ico:'🎭', val:'Čajkovski',  lbl:'Opera 1879.',   sub:'slavnija od knjige'},
  ];
  return (
    <>
      <style>{CSS_STAT6}</style>
      <div className="stat6">
        {stats.map(s=>(
          <div className="stat6-card" key={s.lbl}>
            <span className="stat6-ico">{s.ico}</span>
            <div className="stat6-val">{s.val}</div>
            <div className="stat6-lbl">{s.lbl}</div>
            <div className="stat6-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [10] SVG — Onjeginov obrat (inverzija uloga)
============================================================ */
export function SVGOnjeginObrat() {
  return (
    <>
      <style>{CSS_WRAP6}</style>
      <div className="wr6">
        <div className="wr6-lbl">PUŠKINOVA STRUKTURALNA SIMETRIJA — OBRAT ULOGA</div>
        <svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Inverzija uloga Onjegina i Tatjane kroz roman">
          <text x="180" y="22" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.4)" letterSpacing="1">I.–IV. POGLAVLJE</text>
          <text x="480" y="22" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.4)" letterSpacing="1">V.–VIII. POGLAVLJE</text>
          <line x1="330" y1="10" x2="330" y2="250" stroke="rgba(255,255,255,.08)" strokeWidth="1" strokeDasharray="4,4"/>
          <path d="M60 180 C100 170 150 155 200 135 C240 120 280 100 330 90 C380 80 420 85 470 95 C510 105 560 120 600 130"
            fill="none" stroke="#6b9bff" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M60 180 C100 170 150 155 200 135 C240 120 280 100 330 90 C380 80 420 85 470 95 C510 105 560 120 600 130 L600 250 L60 250 Z"
            fill="#6b9bff" opacity=".05"/>
          <path d="M60 80 C100 85 150 95 200 110 C240 125 280 145 330 160 C380 175 420 185 470 190 C510 195 560 200 600 205"
            fill="none" stroke="#DC322F" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M60 80 C100 85 150 95 200 110 C240 125 280 145 330 160 C380 175 420 185 470 190 C510 195 560 200 600 205 L600 250 L60 250 Z"
            fill="#DC322F" opacity=".05"/>
          <circle cx="330" cy="125" r="7" fill="var(--gold)" opacity=".8"/>
          <text x="330" y="112" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="var(--gold)">OBRAT</text>
          <text x="65" y="76" fontFamily="serif" fontSize="12" fontWeight="700" fill="#DC322F">Onjegin: ODBIJA</text>
          <text x="65" y="91" fontFamily="monospace" fontSize="8" fill="rgba(220,50,47,.6)">ciničan · hladan</text>
          <text x="65" y="185" fontFamily="serif" fontSize="12" fontWeight="700" fill="#6b9bff">Tatjana: VOLI</text>
          <text x="65" y="200" fontFamily="monospace" fontSize="8" fill="rgba(107,155,255,.6)">iskrena · ranjiva</text>
          <text x="480" y="127" fontFamily="serif" fontSize="12" fontWeight="700" fill="#6b9bff">Tatjana: ODBIJA</text>
          <text x="480" y="142" fontFamily="monospace" fontSize="8" fill="rgba(107,155,255,.6)">dostojanstvena · moralna</text>
          <text x="480" y="202" fontFamily="serif" fontSize="12" fontWeight="700" fill="#DC322F">Onjegin: VOLI</text>
          <text x="480" y="217" fontFamily="monospace" fontSize="8" fill="rgba(220,50,47,.6)">slomljen · ničice</text>
          <text x="180" y="240" textAnchor="middle" fontFamily="serif" fontSize="9.5" fill="rgba(255,255,255,.35)" fontStyle="italic">{'\u201E'}Nisam stvoren za blaženstvo braka.{'\u201C'}</text>
          <text x="500" y="240" textAnchor="middle" fontFamily="serif" fontSize="9.5" fill="rgba(255,255,255,.35)" fontStyle="italic">{'\u201E'}Drugomu sam dana i vjerna ću mu biti.{'\u201C'}</text>
        </svg>
        <div style={{marginTop:10,fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t3)',textAlign:'center',fontStyle:'italic'}}>
          Puškin obrće romantički klišej: tko je na početku odbijen, na kraju odbija. Tko je bio superioran, postaje inferioran.
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [11] ACCORDION — 4 centralna sukoba
============================================================ */
const SUKOBI_H06 = [
  {br:'S1',naslov:'Strast vs razum / emocija vs konvencija',tag:'CENTRALNI SUKOB',
   citat:'\u201ETajanino pismo je strast. Tatjanino odbijanje je integritet.\u201C',
   esej:'Tatjana piše pismo — strast protiv konvencije (žena ne smije prva). Onjegin odbija — razum/cinizam protiv strasti. U finalu: obrat. Onjegin gubi razum iz ljubavi, Tatjana slijedi moralnu konvenciju iz razuma. Puškin ne nagrađuje ni strast ni razum — nagrađuje integritet.',
   args:['Tatjanino pismo = eksplicitno kršenje konvencije — i to je njen jedini revolucionarni čin','Onjegin u I.–IV. poglavlju = razum koji odbija. Onjegin u VIII. = razum koji kapitulira pred strašću','Tatjanin finale = strast (voli Onjegina i dalje) + moralna konvencija (ne može ga uzeti) = integritet kao sinteza']},
  {br:'S2',naslov:'Provincija vs metropola / gdje je Rusija?',tag:'NACIONALNI IDENTITET',
   citat:'\u201ETatjana — ruska duša! — i ne znajući zašto, voli zimsku hladnoću, led, snijeg...\u201C — Puškin.',
   esej:'Onjegin u Petrogradu — zasićen, ciničan. Na selu — još dosadnije. Tatjana na selu — autentična, ruska. U Moskvi/SPB kao kneginja — dostojanstvena, ali ne sretna. Puškin se pita: gdje je prava Rusija? Odgovor: u ruskom selu, u narodnoj duši koju Tatjana nosi.',
   args:['Tatjana razumije ruske bajke, snove, folklor — Onjegin čita Adama Smitha i Byrona (sve strano)','Salon u SPB = pozornica lažnih emocija. Tatjanov vrt na selu = jedino autentično mjesto u romanu','Puškin piše roman o ruskom identitetu u trenutku kad Rusija definira sama sebe vs Europu']},
  {br:'S3',naslov:'Prijateljstvo vs ponos / čast kao konvencija',tag:'DUEL · LENSKI',
   citat:'\u201EOnjegin je volio Lenskog — i ipak, čast nije dopuštala povlačenje.\u201C — Puškin.',
   esej:'Onjegin ne želi ubiti Lenskog — ali konvencija duela ga prisiljava. Ako se povuče = kukavica u očima društva. Ubija prijatelja zbog tuđeg mišljenja. Absurdna tragičnost: obojica su mogli odustati. Puškin ne glorificira duel — on ga dijagnosticira kao društvenu smrt.',
   args:['Zareckij (sekundant) je pravi krivac — on sprječava kompromis jer mu odgovara skandal','Lenski se pojavljuje kasno — Onjegin ne može više povući bez uvrede','Za esej: analogija s Hamletovim duelom (H03) — oba su uzrokovana konvencijom, oba ubijaju krivca i nevinog']},
  {br:'S4',naslov:'Sloboda vs dosada / splin kao moderna bolest',tag:'WELTSCHMERZ · MODERNITET',
   citat:'\u201EOnjegin je čekao nešto novo — i zijevao.\u201C — Puškin (parafr.)',
   esej:"Onjeginova dosada nije melankolija Werthera (ljubavna) niti Byronova demonska bol (metafizička) — to je bezrazložna zasićenost koja prethodi Baudelaireu i Dostojevskom. Splin = moderna bolest čovjeka koji ima sve pa ne želi ništa. Za esej: Onjegin → Werther → Camus (Stranac, H09) = evolucija 'dosadnog junaka'.",
   args:['Onjegin čita Byrona i nosi mu portret — ali je i karikatura Byrona, ne njegov naslijednik','Tatjana u VIII. poglavlju razotkriva Onjegina: \u201Eparodija, tužna sjena\u201C — Puškinova kritika byronizma kao poze','Splin (fr. spleen) je Baudelaireov pojam (H08) koji direktno nastavlja Puškinovu dijagnozu']},
];

export function AccordionSukobiH06() {
  return (
    <>
      <style>{CSS_SC6}</style>
      <p className="prose" style={{marginBottom:12}}>Klikni na sukob za citat, analizu i argumente. Iz ova 4 sukoba može se argumentirati svaka moguća esejska teza o Onjeginu.</p>
      <div className="sc6s">
        {SUKOBI_H06.map(s=>(
          <details className="sc6" key={s.br}>
            <summary className="sc6-sum">
              <div className="sc6-num">{s.br}</div>
              <div className="sc6-ttl">{s.naslov}</div>
              <span className="sc6-meta">{s.tag}</span>
              <span className="sc6-chev">▾</span>
            </summary>
            <div className="sc6-body">
              <div className="sc6-quote">{s.citat}</div>
              <div className="sc6-why"><b>Za esej:</b> {s.esej}</div>
              <div className="sc6-args">
                {s.args.map((a,i)=>(
                  <div className="sc6-arg" key={i}>
                    <span className="sc6-arg-num">({i+1})</span>
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
   [12] ACCORDION — 5 ključnih scena
============================================================ */
const KLJUCNE_H06 = [
  {br:'III',  naslov:'Tatjanino pismo', tag:'CENTRALNA SCENA',
   citat:'\u201EPišem Vam — što još reći? Što više mogu dodati?\u201C',
   esej:'Tatjana noću piše Onjeginu pismo na francuskom — otvoreno priznanje ljubavi. Prva eksplicitna ženska izjava ljubavi u ruskoj književnosti. Za esej o strasti vs konvenciji: Tatjana krši sve konvencije epohe svjesno. Puškin: \u201EPreda mnom leži pismo njeno; ko svetinja mi ono osta.\u201C'},
  {br:'IV',   naslov:'Onjeginov odgovor u vrtu', tag:'ODBIJANJE',
   citat:'\u201ENisam stvoren za blaženstvo braka — brzo ćete me zaboraviti.\u201C',
   esej:'Onjegin dolazi Tatjani u vrt i hladno je odbija. Cinik na vrhuncu. Ironija: upravo ovaj cinizam koji misli da je mudar — dovest će ga do finalne propasti. Za esej o byronskom heroju koji se pogrešno procjenjuje.'},
  {br:'V',    naslov:'Tatjanin san', tag:'PROROŠTVO',
   citat:'\u201EMedvjed je lovi, Onjegin sjedi s demonima — i ubija Lenskog nožem.\u201C',
   esej:'Zloslutni proročanski san koji anticipira duel. Puškin eksplicitno povezuje folklorne motive s kasnijim tragičnim ishodom. Za esej o romantičarskom motivu sna i sudbine.'},
  {br:'VI',   naslov:'Duel — Lenski pada', tag:'TRAGIČKI VRHUNAC',
   citat:'\u201ELenski puca — promašuje. Onjegin puca — Lenski pada.\u201C',
   esej:'Rano ujutro, zima, šumski proplanak. Obojica su mogli odustati — ali ponos/konvencija ne dopušta. Puškin lirski opisuje smrt mladog pjesnika. Za esej o konvenciji vs slobodnoj volji: duel je ubojstvo koje nije htio nitko.'},
  {br:'VIII', naslov:'Finalni susret — Tatjanino odbijanje', tag:'OBRAT · KATARZA',
   citat:'\u201EDrugomu sam dana i vjerna ću mu biti zauvijek.\u201C — Tatjana izlazi. Onjegin je slomljen.',
   esej:'Onjegin dolazi Tatjani u salon, pada na koljena. Ona ustaje, drži dug monolog, izlazi. Puškin zatvara roman: \u201EOstavimo ga zauvijek.\u201C Otvoreni kraj — romantički klišej obrnut. Za esej: Tatjana je moralno superiorni lik jer integritet stavlja iznad sreće.'},
];

export function AccordionKljucneSceneH06() {
  return (
    <>
      <style>{CSS_SC6}</style>
      <p className="prose" style={{marginBottom:12}}>Iz ovih 5 scena može se argumentirati bilo koja teza. Klikni za citat i analizu.</p>
      <div className="sc6s">
        {KLJUCNE_H06.map(sc=>(
          <details className="sc6" key={sc.br}>
            <summary className="sc6-sum">
              <div className="sc6-num" style={{fontSize:11}}>{sc.br}</div>
              <div className="sc6-ttl">{sc.naslov}</div>
              <span className="sc6-meta">{sc.tag}</span>
              <span className="sc6-chev">▾</span>
            </summary>
            <div className="sc6-body">
              <div className="sc6-quote">{sc.citat}</div>
              <div className="sc6-why"><b>Za esej:</b> {sc.esej}</div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [13] USPOREDBA — Onjegin vs Werther
============================================================ */
export function UsporedbaOnjeginWerther() {
  const rows = [
    ['Tip',    'suvišan čovjek · cinik',                    'suvišan čovjek · preosjetljiv'],
    ['Problem','dosada + cinizam = ne može voljeti kad treba','osjeća previše = ne može ne voljeti'],
    ['Ljubav', 'odbija Tatjanu, voli je kad je kasno',       'voli Lottu apsolutno, ne može prestati'],
    ['Smrt',   'živi — ali slomljen i bez cilja',            'bira smrt kao jedini izlaz'],
    ['Bolest', 'splin · dosada · bezrazložna zasićenost',    'Weltschmerz · ljubavna melankolija'],
    ['Forma',  'roman u stihovima · oneginski stih',         'epistolarni roman · pisma prijatelju'],
    ['Poruka', 'cinizam kao samoobrana → samoizolacija',     'osjećaj bez granica → propast'],
  ];
  return (
    <>
      <style>{CSS_CMP6}</style>
      <SH6 label="07b · Onjegin vs Werther — bridge H05→H06" style={{marginTop:24}}/>
      <div className="cmp6">
        <div className="cmp6-side left">
          <div className="cmp6-author">Evgenij Onjegin</div>
          <div className="cmp6-period">PUŠKIN · 1823.–1831. · RUSIJA</div>
          {rows.map(([l,a])=>(<div className="cmp6-row" key={l}><span className="cmp6-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp6-vs"><span className="cmp6-vs-inner">VS</span></div>
        <div className="cmp6-side">
          <div className="cmp6-author">Werther</div>
          <div className="cmp6-period">GOETHE · 1774. · NJEMAČKA · ← H05</div>
          {rows.map(([l,,r])=>(<div className="cmp6-row" key={l}><span className="cmp6-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — savršena komparativna teza</div>
        <div className="box-int-txt">Werther <strong>osjeća previše</strong> i umire od ljubavi. Onjegin <strong>osjeća premalo</strong> i propada od dosade. Obojica su suvišni — ali iz dijametralno suprotnih razloga. Puškin piše odgovor na Goethea: u Rusiji 1820-ih, Wertherova sentimentalnost je već postala moda i poza.</div>
      </div>
    </>
  );
}

/* ============================================================
   [14] USPOREDBA — Tatjana vs Lotte
============================================================ */
export function UsporedbaTatjanaLotte() {
  const rows = [
    ['Karakter', 'intelektualna, snažna, moralna',        'brižna, majčinska, dužna'],
    ['Voli',     'Onjegina iskreno i svjesno',            'Werthera kao prijatelja — ne može drugačije'],
    ['Bira',     'integritet nad srećom — slobodnom voljom','dužnost prema Albertu — bez prave slobode'],
    ['Moć',      'raste kroz odbijanje → postaje jaka',   'ograničena ulogom "majke" 8 mlađih'],
    ['Kraj',     'odbija Onjegina — moralni trijumf',     'daje Wertheru pištolje — duhovna krivnja'],
    ['Autor',    'Puškin: "uzvišeni ideal"',              'Goethe: ne daje joj vlastita pisma'],
  ];
  return (
    <>
      <style>{CSS_CMP6}</style>
      <SH6 label="03b · Tatjana vs Lotte — dvije predmeta ljubavi suvišnih junaka" style={{marginTop:24}}/>
      <div className="cmp6">
        <div className="cmp6-side left">
          <div className="cmp6-author">Tatjana Larina</div>
          <div className="cmp6-period">PUŠKIN · ONJEGIN · RUSIJA · 1820-IH</div>
          {rows.map(([l,a])=>(<div className="cmp6-row" key={l}><span className="cmp6-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp6-vs"><span className="cmp6-vs-inner">VS</span></div>
        <div className="cmp6-side">
          <div className="cmp6-author">Lotte (Charlotte)</div>
          <div className="cmp6-period">GOETHE · WERTHER · NJEMAČKA · 1770-IH · ← H05</div>
          {rows.map(([l,,r])=>(<div className="cmp6-row" key={l}><span className="cmp6-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — Tatjana je moralno superiornija figura</div>
        <div className="box-int-txt">Lotte <strong>ne može birati</strong> — dužnost je vanjska prisila. Tatjana <strong>svjesno bira</strong> integritet nad srećom — to je slobodna volja. 50 godina dijeli njih dvije, ali Puškin svjesno piše odgovor Goetheu: žena kao moralni stožer, ne kao pasivni objekt ljubavi.</div>
      </div>
    </>
  );
}

/* ============================================================
   [15] ONJEGIN U OPERI
============================================================ */
export function OnjeginOpera() {
  return (
    <>
      <style>{CSS_OPERA6}</style>
      <div className="opera6">
        <div className="opera6-eye">🎵 KULTURNO NASLIJEĐE · ČAJKOVSKI</div>
        <div className="opera6-title">Evgenij Onjegin — opera (1879.)</div>
        <div className="opera6-body">
          Čajkovskijeva opera je <strong>globalno slavnija od Puškinovog romana</strong>. Premijera 1879. u Moskvi — odmah trijumf. Danas se izvodi u svim velikim opernim kućama: Met (New York), Covent Garden (London), Bečka opera.<br/><br/>
          <strong>Tatjanino pismo</strong> (arija iz I. čina) jedan je od najslavnijih opernih monologa ikad napisanih. Sopran koji ga pjeva mora prikazati unutarnju borbu između konvencije i strasti — 20 minuta dramatske intenzivnosti iz jednog pisma.<br/><br/>
          <strong>Za esej:</strong> Puškinov roman je primjer kako književnost postaje <em>kulturno naslijeđe</em> — živi dalje kroz opere, balet, filmske adaptacije, citate. Belinski je nazvao roman <em>{'\u201E'}enciklopedijom ruskog života{'\u201C'}</em> — Čajkovski je tu enciklopediju preveo u glazbu koja traje.
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [16] ACCORDION — 7 esejnih teza
============================================================ */
const ESEJ_TEZE_H06 = [
  {br:'T1',naslov:'Onjegin kao arhetip suvišnog čovjeka',tag:'SUVIŠAN ČOVJEK',
   teza:'\u201EPuškin u Onjeginu stvara prvi tip suvišnog čovjeka koji će dominirati ruskom književnošću cijelog 19. stoljeća: talentiran, obrazovan, bez svrhe — cinik koji ne može voljeti kad bi trebao.\u201C',
   args:['Onjegin je talentiran, obrazovan ali bez cilja — čita Adama Smitha ali ne radi ništa korisnog','Arhetip koji se razvija: Pečorin (Ljermontov, 1840.) → Oblomov (Gončarov, 1859.) → Raskoljnikov (Dostojevski, H07 — obvezatno)','Za esej: paralela s Dostojevskim — obavezno poglavlje 2026'],
   scena:'Tatjana u VIII. razotkriva Onjegina: \u201Eparodija, tužna sjena\u201C — Puškinova vlastita kritika svog junaka.'},
  {br:'T2',naslov:'Tatjana Larina kao moralna vertikala',tag:'MORALNI STOŽER',
   teza:'\u201ETatjana je Puškinov uzvišeni ideal — ruska duša koja raste kroz bol i postaje moralni stožer romana. Ne iz osvete odbija — iz integriteta.\u201C',
   args:['Raste: od sentimentalne čitateljice do dostojanstvene kneginje koja odbija Onjegina svjesno','\u201EDrugomu sam dana i vjerna ću mu biti zauvijek\u201C — integritet iznad sreće, slobodna volja iznad osjećaja','Utjecaj: Tolstojeva Ana Karenjina, Dostojevskijeve heroinje — sve počinju od Tatjane'],
   scena:'Finalni monolog: Tatjana stoji, drži monolog, izlazi. Onjegin kleči. Puškin: \u201EOstavimo ga zauvijek.\u201C'},
  {br:'T3',naslov:'Onjegin vs Lenski: dva lica romantizma',tag:'BYRONIZAM · IDEALIZAM',
   teza:'\u201EPuškin kroz dvojicu prijatelja pokazuje dvije strane romantičarskog junaka: cyniku-demonsku (byronizam) i idealističko-sentimentalnu. Duel je sukob dviju koncepcija romantizma.\u201C',
   args:['Onjegin = Byron (Childe Harold, Don Juan) — melankolija, cinizam, demonska privlačnost','Lenski = Schiller i Kant (njemački idealizam) — romantičarska ljubav, entuzijazam, naivnost','Duel: pobjeđuje cinizam, ali Puškin time kritizira obje pozicije'],
   scena:'Duel (VI.) — Lenski puca, promašuje. Onjegin puca — Lenski pada. Obojica su mogli odustati.'},
  {br:'T4',naslov:'Roman u stihovima kao jedinstvena forma',tag:'FORMA · INOVACIJA',
   teza:'\u201EEvgenij Onjegin je prvi roman u stihovima u svjetskoj književnosti — hibridna forma koja spaja epsku narativnost, lirsku subjektivnost i dramsku neposrednost.\u201C',
   args:['Oneginski stih (14 stihova, AbAbCCddEffEgg, jampski tetrametar) — Puškin ga izmišlja i drži kroz cijeli roman','Puškin-pripovjedač je lik u vlastitom djelu: komentira, ironizira, govori ja — moderna narativna inovacija','Belinski: \u201Eenciklopedija ruskog života\u201C — gustoća informacija po strofi nema parnjaka u prozi'],
   scena:'Tatjanino pismo: Puškin interpolira ga kao lirsku pjesmu unutar narativa — tri forme u jednoj sceni.'},
  {br:'T5',naslov:'Most između romantizma i realizma',tag:'PRIJELAZ · EPOHE',
   teza:'\u201EOnjegin je prijelazno djelo: počinje kao romantička poema pod Byronovim utjecajem, završava kao realistički roman. Puškin zatvara europski romantizam i otvara ruski realizam.\u201C',
   args:['Prva polovica: byronski junak, sentimentalna junakinja, priroda kao ogledalo, proročanski sni','Druga polovica: psihološka preciznost, kritika društva, razotkrivanje romantičkih iluzija','Otvoreni kraj + Tatjanina analiza Onjegina = realistički postupak koji romantizam nikad ne bi koristio'],
   scena:'Tatjana čita Onjeginove knjige (VII.): \u201EOn je parodija.\u201C — psihološka analiza umjesto romantičarskog idealiziranja.'},
  {br:'T6',naslov:'Dosada i splin kao moderna bolest',tag:'SPLIN · MODERNITET',
   teza:'\u201EPuškin u Onjeginu dijagnosticira bezrazložnu zasićenost — splin — koji prethodi Baudelaireu i Dostojevskom. Nije melankolija Werthera niti Byronova demonska bol — to je moderni nihilizam bez uzroka.\u201C',
   args:["Onjeginova dosada nije uzrokovana konkretnim gubitkom: on ima sve — i upravo zato ne želi ništa",'Most: Onjegin → Baudelaireov spleen (H08) → Camusov Meursault (H09) = linija moderne apatije','Za esej: paralela s Camusovim Strancem — obavezno 2026'],
   scena:'I. poglavlje: Onjegin na balovima, u operi — zijevao čak i kad je Tatjana pjevala.'},
  {br:'T7',naslov:'Finale kao antiklimaks i otvoreni kraj',tag:'MODERNA NARACIJA',
   teza:'\u201EEvgenij Onjegin ne završava — prestaje. Puškinov otvoreni kraj je prvi u modernom romanu: bez katarze, bez morala, bez happy enda. Čitatelj ostaje s pitanjem.\u201C',
   args:['\u201EOstavimo ga zauvijek\u201C — Puškin svjesno odbija romantički klišej (tragična smrt ili sretni kraj)','Otvoreni kraj otvara pitanje: što Onjegin radi? Pati? Mijenja se? Puškin ne odgovara','Most prema modernizmu: Flaubert (Madame Bovary), Kafka (Preobrazba, H08) — antiklimaks kao poetika'],
   scena:'Finalna slika: Onjegin kleči, Tatjana izlazi, korak se čuju. Puškin zatvara: \u201EOstavimo ga zauvijek.\u201C'},
];

export function AccordionEsejTezeH06() {
  return (
    <>
      <style>{CSS_SC6}</style>
      <div className="box-int" style={{marginBottom:14}}>
        <div className="box-int-lbl">📌 Napomena o ispitnoj relevantnosti</div>
        <div className="box-int-txt">Evgenij Onjegin nije obvezatno ispitno djelo 2026, ali pojavljuje se u teoriji (oneginski stih, suvišan čovjek, roman u stihovima) i kao paralela uz <strong>Dostojevskog (H07 — obvezatno)</strong>. Teze T1, T3 i T6 direktno se mogu koristiti u eseju o Dostojevskom.</div>
      </div>
      <div className="sc6s">
        {ESEJ_TEZE_H06.map((t,idx)=>(
          <details className="sc6" key={t.br} style={{'--sc6-accent':TEZA_COLORS6[idx]}}>
            <summary className="sc6-sum">
              <div className="sc6-num" style={{fontSize:13,color:TEZA_COLORS6[idx]}}>{t.br}</div>
              <div className="sc6-ttl">{t.naslov}</div>
              <span className="sc6-meta" style={{color:TEZA_COLORS6[idx],borderColor:`${TEZA_COLORS6[idx]}55`}}>{t.tag}</span>
              <span className="sc6-chev" style={{color:TEZA_COLORS6[idx]}}>▾</span>
            </summary>
            <div className="sc6-body">
              <div className="sc6-quote">{t.teza}</div>
              <div className="sc6-why"><b>Argumenti:</b></div>
              <div className="sc6-args">
                {t.args.map((a,i)=>(
                  <div className="sc6-arg" key={i} style={{borderLeftColor:TEZA_COLORS6[idx]}}>
                    <span className="sc6-arg-num" style={{color:TEZA_COLORS6[idx]}}>({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc6-note">
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
   H06ReactLayers — portal mount
============================================================ */
function H06ReactLayers() {
  const [anchors, setAnchors] = useState({});
  useEffect(() => {
    setAnchors({
      compareRomantiProsvjet:  document.getElementById('h06-react-compare-romanti-prosvjet'),
      timelineRomantizam:      document.getElementById('h06-react-timeline-romantizam'),
      authorPuskin:            document.getElementById('h06-react-author-puskin'),
      authorByron:             document.getElementById('h06-react-author-byron'),
      authorEngleskiRom:       document.getElementById('h06-react-author-engleski-rom'),
      authorFaustMini:         document.getElementById('h06-react-author-faust-mini'),
      popKultura:              document.getElementById('h06-react-pop-kultura'),
      heroQuote:               document.getElementById('h06-react-hero-quote-tatjanino'),
      statCards:               document.getElementById('h06-react-stat-cards-onjegin'),
      usporedbaTatjana:        document.getElementById('h06-react-usporedba-tatjana-lotte'),
      svgObrat:                document.getElementById('h06-react-svg-onjegin-obrat'),
      accordionSukobi:         document.getElementById('h06-react-accordion-sukobi'),
      accordionKljucne:        document.getElementById('h06-react-accordion-kljucne'),
      usporedbaOnjegin:        document.getElementById('h06-react-usporedba-onjegin-werther'),
      onjeginOpera:            document.getElementById('h06-react-onjegin-opera'),
      esejTeze:                document.getElementById('h06-react-accordion-esej-teze'),
      citatnik:              document.getElementById('h06-react-citatnik'),
      pojmovnik:             document.getElementById('h06-react-pojmovnik'),
    });
  }, []);
  return (
    <>
      <style>{CSS_ONJEGIN6}</style>
      {anchors.compareRomantiProsvjet  && createPortal(<CompareRomantiProsvjet />,      anchors.compareRomantiProsvjet)}
      {anchors.timelineRomantizam      && createPortal(<TimelineRomantizam />,           anchors.timelineRomantizam)}
      {anchors.authorPuskin            && createPortal(<AuthorCardPuskin context="l0" />, anchors.authorPuskin)}
      {anchors.authorByron             && createPortal(<AuthorCardByron />,              anchors.authorByron)}
      {anchors.authorEngleskiRom       && createPortal(<AuthorCardEngleskiRom />,        anchors.authorEngleskiRom)}
      {anchors.authorFaustMini         && createPortal(<AuthorCardFaustMini />,          anchors.authorFaustMini)}
      {anchors.popKultura              && createPortal(<PopKulturaRomantizam />,         anchors.popKultura)}
      {anchors.heroQuote               && createPortal(<HeroQuoteTatjanino />,           anchors.heroQuote)}
      {anchors.statCards               && createPortal(<StatCardsOnjegin />,             anchors.statCards)}
      {anchors.usporedbaTatjana        && createPortal(<UsporedbaTatjanaLotte />,        anchors.usporedbaTatjana)}
      {anchors.svgObrat                && createPortal(<SVGOnjeginObrat />,              anchors.svgObrat)}
      {anchors.accordionSukobi         && createPortal(<AccordionSukobiH06 />,           anchors.accordionSukobi)}
      {anchors.accordionKljucne        && createPortal(<AccordionKljucneSceneH06 />,     anchors.accordionKljucne)}
      {anchors.usporedbaOnjegin        && createPortal(<UsporedbaOnjeginWerther />,      anchors.usporedbaOnjegin)}
      {anchors.onjeginOpera            && createPortal(<OnjeginOpera />,                 anchors.onjeginOpera)}
      {anchors.esejTeze                && createPortal(<AccordionEsejTezeH06 />,           anchors.esejTeze)}
      {anchors.citatnik              && createPortal(
        <CitatnikH06
          onBack={() => window.sw && window.sw(2)}
          onNext={() => window.sw && window.sw(4)}
        />,
        anchors.citatnik
      )}
      {anchors.pojmovnik             && createPortal(<H06PojmovnikTab />, anchors.pojmovnik)}
    </>
  );
}

export default H06ReactLayers;
