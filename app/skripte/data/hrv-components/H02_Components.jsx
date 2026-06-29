/* ============================================================
   H02 — Srednji vijek i hrvatska pismenost
   Svaki komponent je self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

import { useState } from 'react';

/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_AUTHOR_CARD = `
  .ac2{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac2:hover{border-color:var(--bd-br)}
  .ac2-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac2-mono{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,50,47,.3)}
  .ac2-meta{flex:1;min-width:0}
  .ac2-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac2-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac2-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac2-star{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;color:var(--gold);letter-spacing:.5px;margin-top:6px}
  .ac2-body{padding:18px 22px}
  .ac2-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac2-body p:last-child{margin-bottom:0}
  .ac2-body strong{color:var(--t1)}
  .ac2-body em{color:var(--gold);font-style:italic}
  .ac2-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac2-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac2-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac2-work:last-child{border-bottom:none;padding-bottom:0}
  .ac2-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac2-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac2-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac2-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  @media(max-width:600px){.ac2-hdr{flex-direction:column;gap:10px}.ac2-mono{width:42px;height:42px;font-size:18px}.ac2-name{font-size:15px}.ac2-body{padding:14px 16px}}
`;

const CSS_TIMELINE = `
  .tl2{position:relative;padding:20px 0;margin:18px 0}
  .tl2::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.15));opacity:.5}
  .tl2-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl2-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl2-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl2-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl2-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl2-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl2-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SCENES2 = `
  .scenes2{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .scene2{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .scene2:hover{border-color:var(--bd-br)}
  .scene2[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .scene2-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .scene2-sum::-webkit-details-marker{display:none}
  .scene2-chevron{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .scene2[open] .scene2-chevron{transform:rotate(180deg);color:var(--gold)}
  .scene2-num{font-family:var(--display);font-size:18px;font-weight:700;color:var(--bronze-l);min-width:28px}
  .scene2[open] .scene2-num{color:var(--gold)}
  .scene2-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .scene2-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .scene2-body{padding:0 16px 16px}
  .scene2-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .scene2-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .scene2-why b{color:var(--t1)}
  .scene2-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .scene2-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .scene2-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .scene2-citat{margin-top:10px;padding:10px 12px;background:rgba(220,50,47,.05);border:1px solid var(--bd-br);border-radius:var(--r2);font-family:var(--serif);font-size:12px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .scene2-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .scene2-meta{display:none}
    .scene2-body{padding:0 12px 12px}
  }
`;

const CSS_SVG_WRAP2 = `
  .svg-wrap2{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;margin:14px 0 22px;overflow:hidden;transition:border-color .25s}
  .svg-wrap2:hover{border-color:rgba(255,255,255,.12)}
  .svg-wrap2-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:14px;display:flex;align-items:center;gap:8px}
  .svg-wrap2-lbl::before{content:'';display:block;width:16px;height:1px;background:var(--bdm)}
`;

const CSS_SEC_HDR2 = `
  .sec-hdr2{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sec-line2{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sec-badge2{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;

function SecHdr2({label}) {
  return (
    <>
      <style>{CSS_SEC_HDR2}</style>
      <div className="sec-hdr2">
        <div className="sec-line2"/><div className="sec-badge2">{label}</div><div className="sec-line2"/>
      </div>
    </>
  );
}

/* ============================================================
   [1] AUTHOR CARD — Dante Alighieri
   HTML pozicija: L0 · sec-badge "05 · Dante i Božanstvena komedija"
   → ODMAH NAKON sec-hdr-a, PRIJE postojećeg <div class="prose">
   → Zamjenjuje ulogu uvoda — autor se predstavlja vizualno
============================================================ */
export function AuthorCardDante() {
  return (
    <>
      <style>{CSS_AUTHOR_CARD}</style>
      <div className="ac2">
        <div className="ac2-hdr">
          <div className="ac2-mono">D</div>
          <div className="ac2-meta">
            <div className="ac2-name">Dante Alighieri</div>
            <div className="ac2-dates">FIRENCA · 1265. – 1321.</div>
            <div className="ac2-tags">
              <span className="pill p-br" style={{fontSize:10}}>alegorija</span>
              <span className="pill p-go" style={{fontSize:10}}>srednji vijek</span>
              <span className="pill p-t" style={{fontSize:10}}>terza rima</span>
              <div className="ac2-star">⭐ ESEJSKI AUTOR</div>
            </div>
          </div>
        </div>
        <div className="ac2-body">
          <p>Najvažniji pjesnik srednjeg vijeka i jedan od najvećih svjetske književnosti.
          Rođen u Firenci, <strong>prognan</strong> zbog sukoba s papinskom strankom (Guelfi).
          Umro u egzilu u Raveni. Dante piše na <em>volgare</em> — narodnom talijanskom, ne
          latinskom — što ga čini tvorcem <strong>talijanskog književnog jezika</strong>.</p>
          <p>S Petrarcom i Boccacciom tvori <em>tre corone</em> — „tri krune" talijanske književnosti.</p>
          <div className="ac2-works">
            <div className="ac2-works-lbl">Ključna djela</div>
            <div className="ac2-work">
              <div className="ac2-badge">📖</div>
              <div>
                <div className="ac2-work-title">Božanstvena komedija</div>
                <div className="ac2-work-meta">1307.–1321. · ALEGORIJSKI EP · 14.233 STIHA</div>
                <div className="ac2-work-desc">Pakao → Čistilište → Raj. <strong>Najvažnije djelo za esej.</strong> Vodič: Vergilije (razum) + Beatrice (vjera).</div>
              </div>
            </div>
            <div className="ac2-work">
              <div className="ac2-badge">💕</div>
              <div>
                <div className="ac2-work-title">Vita Nuova</div>
                <div className="ac2-work-meta">~1293. · PROZA + POEZIJA</div>
                <div className="ac2-work-desc">Soneti i proza o ljubavi prema Beatrice — duhovnoj muzi i simbolu božanske milosti.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [2] SVG — Danteova trostupanjska struktura
   HTML pozicija: L0 · sec "05 · Dante"
   → NAKON AuthorCardDante + postojećeg .sg grida s 4 kartice
   → UMJESTO ili NAKON .box-20 "Struktura u 3 koraka"
   → Vizualni prikaz zamjenjuje/dopunjuje box-20 listu
============================================================ */
export function SVGDanteStruktura() {
  return (
    <>
      <style>{CSS_SVG_WRAP2}</style>
      <div className="svg-wrap2">
        <div className="svg-wrap2-lbl">STRUKTURA BOŽANSTVENE KOMEDIJE</div>
        <svg viewBox="0 0 660 320" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto'}}
          role="img" aria-label="Danteova trostupanjska struktura: Pakao, Čistilište, Raj">
          <defs>
            <linearGradient id="h02-g-pakao" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B1E1B"/><stop offset="100%" stopColor="#3d0b0a"/>
            </linearGradient>
            <linearGradient id="h02-g-cist" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5a4a1e"/><stop offset="100%" stopColor="#3a2e0e"/>
            </linearGradient>
            <linearGradient id="h02-g-raj" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1a3a2a"/><stop offset="100%" stopColor="#0d2218"/>
            </linearGradient>
            <marker id="h02-arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,.3)"/>
            </marker>
          </defs>
          {/* PAKAO */}
          <rect x="20" y="30" width="190" height="260" rx="10" fill="url(#h02-g-pakao)" stroke="#DC322F" strokeWidth="1.5"/>
          <text x="115" y="58" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#e87a77">🔥 PAKAO</text>
          <text x="115" y="75" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#c5756f" letterSpacing="1">INFERNO · 34 PJEVANJA</text>
          <line x1="40" y1="84" x2="190" y2="84" stroke="rgba(220,50,47,.3)" strokeWidth="1"/>
          {[['Vodič:','Vergilije'],['Razina:','9 krugova'],['Smjer:','silazak ↓'],['Tema:','kazne grijeha'],['Ključno:','Paolo & Francesca'],['Dno:','Lucifer u ledu']].map(([l,v],i)=>(
            <g key={i}>
              <text x="36" y={102+i*28} fontFamily="monospace" fontSize="8.5" fill="rgba(197,117,111,.8)">{l}</text>
              <text x="98" y={102+i*28} fontFamily="serif" fontSize="12" fill="#e8c5c3">{v}</text>
            </g>
          ))}
          <text x="115" y="278" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(220,50,47,.5)" fontStyle="italic">„Lasciate ogne speranza..."</text>
          {/* ČISTILIŠTE */}
          <rect x="235" y="30" width="190" height="260" rx="10" fill="url(#h02-g-cist)" stroke="#8B6D2F" strokeWidth="1.5"/>
          <text x="330" y="56" textAnchor="middle" fontFamily="serif" fontSize="17" fontWeight="700" fill="#d4a843">⛰ ČISTILIŠTE</text>
          <text x="330" y="75" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#a88030" letterSpacing="1">PURGATORIO · 33 PJEVANJA</text>
          <line x1="255" y1="84" x2="405" y2="84" stroke="rgba(139,109,47,.3)" strokeWidth="1"/>
          {[['Vodič:','Vergilije'],['Razina:','7 terasa'],['Smjer:','uspon ↑'],['Tema:','7 smrtnih grijeha'],['Prijelaz:','Beatrice preuzima'],['Vrh:','Zemaljski raj']].map(([l,v],i)=>(
            <g key={i}>
              <text x="251" y={102+i*28} fontFamily="monospace" fontSize="8.5" fill="rgba(168,128,48,.8)">{l}</text>
              <text x="313" y={102+i*28} fontFamily="serif" fontSize="12" fill="#d4b870">{v}</text>
            </g>
          ))}
          <text x="330" y="278" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(139,109,47,.5)" fontStyle="italic">purgazione → purificazione</text>
          {/* RAJ */}
          <rect x="450" y="30" width="190" height="260" rx="10" fill="url(#h02-g-raj)" stroke="#2a7a4a" strokeWidth="1.5"/>
          <text x="545" y="58" textAnchor="middle" fontFamily="serif" fontSize="20" fontWeight="700" fill="#5ecf8a">✨ RAJ</text>
          <text x="545" y="75" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#3a9a5a" letterSpacing="1">PARADISO · 33 PJEVANJA</text>
          <line x1="470" y1="84" x2="620" y2="84" stroke="rgba(42,122,74,.3)" strokeWidth="1"/>
          {[['Vodič:','Beatrice'],['Razina:','9 nebeskih sfera'],['Smjer:','uzlazak ↑↑'],['Tema:','božanska ljubav'],['Vrhunac:','vizija Trojstva'],['Kraj:','Empyreum — Bog']].map(([l,v],i)=>(
            <g key={i}>
              <text x="466" y={102+i*28} fontFamily="monospace" fontSize="8.5" fill="rgba(58,154,90,.8)">{l}</text>
              <text x="528" y={102+i*28} fontFamily="serif" fontSize="12" fill="#8ee8b0">{v}</text>
            </g>
          ))}
          <text x="545" y="278" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(42,122,74,.5)" fontStyle="italic">„L'amor che move il sole..."</text>
          {/* Strelice */}
          <path d="M212 160 L232 160" stroke="rgba(255,255,255,.3)" strokeWidth="2" markerEnd="url(#h02-arr)"/>
          <path d="M427 160 L447 160" stroke="rgba(255,255,255,.3)" strokeWidth="2" markerEnd="url(#h02-arr)"/>
        </svg>
        <div style={{marginTop:10,fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t3)',textAlign:'center',fontStyle:'italic'}}>
          Svaka cantika: 33 pjevanja · tercina (ABA BCB CDC) · 11-slog (jedanaesterac)
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [3] ACCORDION — Tri kantike Božanstvene komedije
   HTML pozicija: L0 · sec "05 · Dante"
   → NAKON SVGDanteStruktura
   → ISPRED .box-key "Zašto je Dante ključan" i .box-tip
============================================================ */
const KANTIKE = [
  {br:'I', naslov:'Inferno — Pakao', tag:'34 PJEVANJA',
   citat:'„Lasciate ogne speranza, voi ch\'intrate" — Natpis na ulazu u Pakao. (Napustite svaku nadu, vi koji ulazite.)',
   esej:'Pakao je obrnuti stožac s 9 krugova — svaki krug kažnjava drugi grijeh po težini. Kazna je kontrapasso: odgovara grijehu (požuda = vječni vjetar koji nosi duše). Najpoznatija scena: Paolo i Francesca (5. krug — požuda) — ljubavna tragedija, jedna od najčitanijih epizoda u svjetskoj književnosti.',
   args:['Vodič Vergilije simbolizira ljudski razum koji može prepoznati grijeh, ali ne može doseći Boga','Lucifer je na samom dnu, zatvoren u ledu — poraz zla kroz njegovu vlastitu statičnost','Dante sreće i antičke i biblijske i suvremene mu Talijane — Pakao je enciklopedija epohe']},
  {br:'II', naslov:'Purgatorio — Čistilište', tag:'33 PJEVANJA',
   citat:'„E quindi uscimmo a riveder le stelle" — Kraj Pakla. (I odatle izađosmo da opet vidimo zvijezde.)',
   esej:'Čistilište je planina s 7 terasa — svaka terasa čišćenje jednog od 7 smrtnih grijeha. Duše MOGU izaći — za razliku od Pakla. Na vrhu planine je Zemaljski raj gdje Vergilije odlazi: pagan ne može u Raj. Beatrice preuzima Dantea.',
   args:['Prijelaz Vergilije → Beatrice simbolizira prijelaz od razuma prema vjeri','Čistilište je optimistična slika: griješnici imaju budućnost, pokajanje je moguće','7 terasa = 7 smrtnih grijeha = 7 mogućnosti rasta — humanistička vizija morala']},
  {br:'III', naslov:'Paradiso — Raj', tag:'33 PJEVANJA',
   citat:'„L\'amor che move il sole e l\'altre stelle" — Završni stih. (Ljubav koja pokreće sunce i ostale zvijezde.)',
   esej:'Raj je 9 nebeskih sfera (Ptolemejska kozmologija) + Empireum gdje prebiva Bog. Beatrice vodi Dantea sve do vizije Presvetog Trojstva — trenutka koji se ne može opisati riječima. Završni stih je možda najpoznatiji stih talijanske književnosti: ljubav = Bog = pokretačka sila svemira.',
   args:['Raj je teološki najzahtjevniji — za esej dovoljno znati strukturu i vodiča','Beatrice = Danteova stvarna ljubav iz mladosti, ali ovdje simbolizira Božansku milost i teologiju','Kraj: Dante gleda u Boga i gubi sposobnost govora — mistična vizija koja nadilazi jezik']},
];

export function AccordionKantike() {
  return (
    <>
      <style>{CSS_SCENES2}</style>
      <SecHdr2 label="05b · Tri kantike — za esej"/>
      <p className="prose" style={{marginBottom:12}}>Klikni na kantiku za detalje, ključni citat i argumente za esej.</p>
      <div className="scenes2">
        {KANTIKE.map(k=>(
          <details className="scene2" key={k.br}>
            <summary className="scene2-sum">
              <div className="scene2-num">{k.br}</div>
              <div className="scene2-ttl">{k.naslov}</div>
              <span className="scene2-meta">{k.tag}</span>
              <span className="scene2-chevron">▾</span>
            </summary>
            <div className="scene2-body">
              <div className="scene2-quote">{k.citat}</div>
              <div className="scene2-why"><b>Za esej:</b> {k.esej}</div>
              <div className="scene2-args">
                {k.args.map((a,i)=>(
                  <div className="scene2-arg" key={i}>
                    <span className="scene2-arg-num">({i+1})</span>
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
   [4] DANTE VS HOMER — usporedna kartica
   HTML pozicija: L0 · sec "05 · Dante"
   → NAKON .box-tip "PRO TIP ZA ESEJ"
   → NA DNU sekcije 05, tik ISPRED sec-hdr-a "06 · Pretece renesanse"
============================================================ */
export function DanteVsHomer() {
  return (
    <>
      <style>{`
        .cmp2{display:grid;grid-template-columns:1fr auto 1fr;margin:18px 0;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
        .cmp2-side{padding:18px 20px;background:var(--sur);transition:background .2s}
        .cmp2-side:hover{background:rgba(255,255,255,.02)}
        .cmp2-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
        .cmp2-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
        .cmp2-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
        .cmp2-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
        .cmp2-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
        .cmp2-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
        .cmp2-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:52px;flex-shrink:0;margin-top:1px}
        @media(max-width:600px){.cmp2{grid-template-columns:1fr}.cmp2-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp2-vs-inner{writing-mode:horizontal-tb}}
      `}</style>
      <SecHdr2 label="05c · Dante vs Homer — brza usporedba"/>
      <p className="prose" style={{marginBottom:12}}>Veza s H01 — ako si učio Antigonu i Homera, evo kako se Dante uklapa u sliku.</p>
      <div className="cmp2">
        <div className="cmp2-side left">
          <div className="cmp2-author">Dante Alighieri</div>
          <div className="cmp2-period">Firenca · 1265. – 1321.</div>
          {[['Djelo','Božanstvena komedija'],['Jezik','Talijanski (volgare)'],['Stih','Tercina · 11-slog'],['Opseg','14.233 stiha · 100 pjevanja'],['Žanr','Alegorijski ep'],['Epoha','Srednji vijek → renesansa'],['Tema','Duša, grijeh, spasenje']].map(([l,v])=>(
            <div className="cmp2-row" key={l}><span className="cmp2-lbl">{l}</span><span>{v}</span></div>
          ))}
        </div>
        <div className="cmp2-vs"><span className="cmp2-vs-inner">VS</span></div>
        <div className="cmp2-side">
          <div className="cmp2-author">Homer</div>
          <div className="cmp2-period">Grčka · ~8. st. pr. Kr.</div>
          {[['Djelo','Ilijada / Odiseja'],['Jezik','Starogrčki'],['Stih','Heksametar · 6-stopa'],['Opseg','15.693 / 12.109 stihova'],['Žanr','Junački ep'],['Epoha','Antika — arhaično'],['Tema','Rat, herojstvo, povratak']].map(([l,v])=>(
            <div className="cmp2-row" key={l}><span className="cmp2-lbl">{l}</span><span>{v}</span></div>
          ))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — ključna razlika u jednoj rečenici</div>
        <div className="box-int-txt">Homer pjeva o <strong>herojima koji traže slavu ovozemaljsku</strong>. Dante pjeva o <strong>duši koja traži Boga</strong>. To je razlika između antičkog i srednjovjekovnog svjetonazora.</div>
      </div>
    </>
  );
}

/* ============================================================
   [5] DUAL AUTHOR CARD — Boccaccio + Petrarca
   HTML pozicija: L0 · sec "06 · Pretece renesanse — Boccaccio i Petrarca"
   → ODMAH NAKON sec-hdr-a "06 ·", PRIJE postojećeg .prose i .con
   → Zamjenjuje ulogu uvoda u sekciji — autori prikazani vizualno
============================================================ */
export function AuthorCardPretece() {
  return (
    <>
      <style>{CSS_AUTHOR_CARD}{`
        .ac2-dual{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:20px 0}
        .ac2-dual-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:14px}
        @media(max-width:640px){.ac2-dual{grid-template-columns:1fr}}
        .ac2-dual .ac2{margin:0}
      `}</style>
      <div className="ac2-dual-lbl">TRE CORONE — DANTE, PETRARCA, BOCCACCIO</div>
      <div className="ac2-dual">
        <div className="ac2">
          <div className="ac2-hdr">
            <div className="ac2-mono" style={{background:'linear-gradient(135deg,#2a4a7a,#4a6aaa)'}}>P</div>
            <div className="ac2-meta">
              <div className="ac2-name">Francesco Petrarca</div>
              <div className="ac2-dates">AREZZO · 1304. – 1374.</div>
              <div className="ac2-tags">
                <span className="pill p-t" style={{fontSize:10}}>humanizam</span>
                <span className="pill p-br" style={{fontSize:10}}>sonet</span>
              </div>
            </div>
          </div>
          <div className="ac2-body">
            <p>„Otac humanizma." Putovao Europom tražeći antičke rukopise. Životno djelo <em>Kanconijer</em> — <strong>366 soneta</strong> o ljubavi prema Lauri. Petrarkinski sonet (4+4+3+3) dominira europskom lirikom sljedećih 300 godina — uključujući <strong>hrvatske petrarkiste</strong> (H11).</p>
            <div className="ac2-works">
              <div className="ac2-works-lbl">Ključno djelo</div>
              <div className="ac2-work">
                <div className="ac2-badge">🌹</div>
                <div>
                  <div className="ac2-work-title">Kanconijer (Canzoniere)</div>
                  <div className="ac2-work-meta">~1342.–1374. · 366 SONETA</div>
                  <div className="ac2-work-desc">Ljubavna lirika posvećena Lauri. <strong>Veza s H11</strong> — Menčetić, Hektorović i Lucić slijede petrarkistički model.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ac2">
          <div className="ac2-hdr">
            <div className="ac2-mono" style={{background:'linear-gradient(135deg,#2a6a3a,#4a9a5a)'}}>B</div>
            <div className="ac2-meta">
              <div className="ac2-name">Giovanni Boccaccio</div>
              <div className="ac2-dates">CERTALDO · 1313. – 1375.</div>
              <div className="ac2-tags">
                <span className="pill p-t" style={{fontSize:10}}>novela</span>
                <span className="pill p-go" style={{fontSize:10}}>Decameron</span>
              </div>
            </div>
          </div>
          <div className="ac2-body">
            <p>„Tvorac novele." Petrarkin bliski prijatelj. Životno djelo <em>Dekameron</em> (1348.–1353.) — <strong>100 novela</strong> koje 10 mladih priča 10 dana skrivajući se od kuge. <em>Obični čovjek, bez religijske pouke — prvi put.</em></p>
            <div className="ac2-works">
              <div className="ac2-works-lbl">Ključno djelo</div>
              <div className="ac2-work">
                <div className="ac2-badge">📚</div>
                <div>
                  <div className="ac2-work-title">Dekameron</div>
                  <div className="ac2-work-meta">1348.–1353. · 100 NOVELA</div>
                  <div className="ac2-work-desc">Okvirna priča (kuga + villa + 10 osoba) + 100 novela. Temelj europske novele kao žanra.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [6] TIMELINE — Hrvatska pismenost kronologija
   HTML pozicija: L0 · sec "03 · Srednji vijek — kontekst epohe"
   → NAKON .box-key "Ključni citat — duh epohe"
   → NA DNU sekcije 03, tik ISPRED sec-hdr-a "04 · Viteški epovi i trubadurska lirika"
   → Razlog: kronološki pregled završava sekciju o kontekstu epohe
============================================================ */
const PISMENOST_EVENTS = [
  {date:'863.',      major:false, title:'Ćiril i Metod — glagoljica',          desc:'Braća iz Soluna stvaraju glagoljicu za slavensku Bibliju i liturgiju. Temelj slavenske pismenosti.'},
  {date:'~925.',     major:false, title:'Hrvatska kneževina → Kraljevina',      desc:'Tomislav postaje prvi kralj. Hrvatska je samostalna država s vlastitom Crkvom i kulturom.'},
  {date:'~1100.',    major:true,  title:'Bašćanska ploča',                      desc:'„Krsni list hrvatske kulture." Crkva sv. Lucije, Jurandvor/Krk. Prijelazna glagoljica — oblata → uglata.'},
  {date:'1189.',     major:false, title:'Povelja Kulina bana',                  desc:'Najstariji dokument pisan bosančicom (varijanta ćirilice). Trgovački ugovor s Dubrovnikom.'},
  {date:'1288.',     major:true,  title:'Vinodolski zakonik',                   desc:'Najstariji hrvatski pravni kodeks — regulira život u 9 općina. Pisan glagoljicom.'},
  {date:'~1404.',    major:false, title:'Hrvojev misal',                        desc:'Najljepše iluminirana glagoljička knjiga — rukopisni misal za hercega Hrvoja Vukčića Hrvatinića.'},
  {date:'1483.',     major:true,  title:'Prvotisak — Misal po zakonu rimskog dvora', desc:'Prva knjiga tiskana glagoljicom u Europi — 9 godina prije Kolumba.'},
];

export function TimelinePismenost() {
  return (
    <>
      <style>{CSS_TIMELINE}</style>
      <SecHdr2 label="03b · Kronologija hrvatske pismenosti"/>
      <div className="tl2">
        {PISMENOST_EVENTS.map((ev,i)=>(
          <div className="tl2-ev" key={i}>
            <div className={`tl2-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl2-body">
              <div className="tl2-title">{ev.title}</div>
              <div className="tl2-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [7] KRSNI LIST HERO QUOTE
   HTML pozicija: L1 · Hrv. pismenost tab
   → ODMAH NAKON .box-int "Zašto Bašćanska ploča zaslužuje poseban tab"
   → PRIJE sec-hdr-a "01 · Osnovni podaci"
   → Dramski otvarač taba — kao HeroQuoteAntigona u H01/L1
============================================================ */
export function KrsniListQuote() {
  return (
    <>
      <style>{`
        .krsni2{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:18px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
        .krsni2::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
        .krsni2::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
        .krsni2-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
        .krsni2-text{font-family:var(--display);font-size:17px;font-weight:700;color:var(--t1);line-height:1.45;font-style:italic;margin-bottom:10px}
        .krsni2-text em{color:var(--gold);font-style:normal}
        .krsni2-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
        @media(max-width:600px){.krsni2{padding:18px 18px 18px 22px}.krsni2-text{font-size:15px}}
      `}</style>
      <div className="krsni2">
        <div className="krsni2-eye">KLJUČNA REČENICA ZA ESEJ</div>
        <div className="krsni2-text">
          „Zvonimir, <em>kralj hrvatski</em>" — sintagma koja se u Bašćanskoj ploči (~1100.){' '}
          pojavljuje prvi put u pisanom obliku na hrvatskom jeziku.
        </div>
        <div className="krsni2-source">Bašćanska ploča · ~1100. · Glagoljica · Crkva sv. Lucije, Jurandvor/Krk</div>
      </div>
    </>
  );
}

/* ============================================================
   [8] STAT CARDS — Bašćanska ploča dimenzije
   HTML pozicija: L1 · sec "01 · Osnovni podaci"
   → NAKON postojećeg .sg grida (6 sc-kartica: NASTANAK, MJESTO, PISMO, JEZIK, FIZIČKI, ČUVANJE)
   → ISPRED .box-key "Jedna rečenica koja otvara esej"
   → Dodaje fizičke detalje koji nedostaju u .sg (težina, broj redaka...)
============================================================ */
export function StatCardsPloca() {
  const stats = [
    {ico:'📏', val:'199 × 99,5 cm', lbl:'Dimenzije', sub:'debljina: 9 cm'},
    {ico:'⚖️', val:'~800 kg',       lbl:'Težina',    sub:'bijeli vapnenac'},
    {ico:'📝', val:'13 redaka',     lbl:'Tekst',     sub:'~100 riječi, ~400 slova'},
    {ico:'🏛',  val:'od 1934.',     lbl:'HAZU Zagreb',sub:'replika ostaje na Krku'},
  ];
  return (
    <>
      <style>{`
        .stat2{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0 20px}
        .stat2-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
        .stat2-card:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px)}
        .stat2-ico{font-size:22px;margin-bottom:6px;display:block}
        .stat2-val{font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
        .stat2-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
        .stat2-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
        @media(max-width:580px){.stat2{grid-template-columns:repeat(2,1fr)}}
      `}</style>
      <div className="stat2">
        {stats.map(s=>(
          <div className="stat2-card" key={s.lbl}>
            <span className="stat2-ico">{s.ico}</span>
            <div className="stat2-val">{s.val}</div>
            <div className="stat2-lbl">{s.lbl}</div>
            <div className="stat2-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [9] TIMELINE — Otkriće Bašćanske ploče
   HTML pozicija: L1 · sec "02 · Otkriće i put do HAZU-a"
   → ZAMJENJUJE postojeću .box-20 s numeriranom listom (8 li stavki)
   → Isti sadržaj, vizualno superioran format
============================================================ */
const ODKRICE_EVENTS = [
  {date:'~1100.',      major:true,  title:'Izvorna namjena',      desc:'Ploča je lijevi plutej — pregradna ploča koja dijeli oltarski prostor od crkve sv. Lucije u Jurandvoru.'},
  {date:'11.–19. st.', major:false, title:'Stoljetna zaborav',     desc:'Uklonjena s pozicije i ugrađena u pod crkve gdje služi kao obični građevni materijal.'},
  {date:'15.9.1851.',  major:true,  title:'Spašavanje',            desc:'Bogoslov Petar Dorčić prepoznaje vrijednost ploče i vadi je iz poda. Ovaj datum se obilježava kao dan spašavanja.'},
  {date:'1853.',       major:false, title:'Prijepis u Prag',       desc:'Ivan Kukuljević Sakcinski šalje amaterski prijepis Pavelu Šafáriku. Šafárik misli da se radi o kriptografiji.'},
  {date:'kasno 19. st.',major:false, title:'Zaštita — vitrina',    desc:'Staroslavenska akademija i biskup Mahnić zatvaraju ploču u staklenu vitrinu. Propadanje ipak se nastavlja.'},
  {date:'1934.',       major:true,  title:'Predaja HAZU-u',        desc:'Krčki biskup Josip Srebrnić predaje ploču „na vječno čuvanje" Jugoslavenskoj akademiji u Zagreb.'},
  {date:'20. st.',     major:false, title:'Moderna istraživanja',  desc:'Branko Fučić postavlja temelje modernog proučavanja — pretpostavlja da je tekst preuzet iz samostanskog kartulara.'},
  {date:'danas',       major:true,  title:'HAZU + replika na Krku',desc:'Ploča je u HAZU-u. U crkvi sv. Lucije stoji vjerna replika. Nacionalni simbol hrvatske pismenosti.'},
];

export function TimelineOtkrice() {
  return (
    <>
      <style>{CSS_TIMELINE}</style>
      <div className="tl2">
        {ODKRICE_EVENTS.map((ev,i)=>(
          <div className="tl2-ev" key={i}>
            <div className={`tl2-date${ev.major?' major':''}`} style={{fontSize:8}}>{ev.date}</div>
            <div className="tl2-body">
              <div className="tl2-title">{ev.title}</div>
              <div className="tl2-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [10] TABLICA PISAMA — glagoljica, ćirilica, latinica
   HTML pozicija: L1 · sec "06 · Glagoljica — pismo Hrvata"
   → NAKON .con s tri .cr (OBLA GLAGOLJICA, UGLATA, PRIJELAZNI TIP)
   → ISPRED postojećeg .svg-wrap "Tri pisma u střednjovjekovnoj Hrvatskoj"
   → Tablični pregled dopunjuje SVG dijagram koji već postoji
============================================================ */
export function TablicaPisama() {
  const rows = [
    {pismo:'Glagoljica', period:'9.–19. st.', tag:'gl', nastanak:'Ćiril i Metod, 863.', regija:'Istra, Kvarner, Dalmacija', primjer:'Bašćanska ploča, Vinodolski zakonik, Hrvojev misal', napomena:'Hrvatska je čuvala glagoljicu najdulje od svih slavenskih naroda.'},
    {pismo:'Ćirilica / bosančica', period:'10.–17. st.', tag:'ci', nastanak:'Kliment Ohridski, ~9. st.', regija:'Bosna, Hercegovina, jug Dalmacije', primjer:'Povelja Kulina bana (1189.), Miroslavljevo evanđelje', napomena:'U Bosni se razvija lokalna varijanta — bosančica (brzopis).'},
    {pismo:'Latinica', period:'od 12. st.', tag:'la', nastanak:'Rimska tradicija', regija:'Cijela Hrvatska (crkva, administracija)', primjer:'Diplomatski dokumenti, crkveni tekstovi', napomena:'Postaje dominantno pismo od humanizma nadalje (H03).'},
  ];
  return (
    <>
      <style>{`
        .pisma-tbl-wrap{margin:16px 0;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
        .pisma-tbl{width:100%;border-collapse:collapse;font-family:var(--serif);font-size:12.5px}
        .pisma-tbl th{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:10px 12px;text-align:left;border-bottom:2px solid var(--bdm);background:var(--ele)}
        .pisma-tbl td{padding:10px 12px;border-bottom:1px solid var(--bd);color:var(--t2);vertical-align:top;line-height:1.45}
        .pisma-tbl tr:last-child td{border-bottom:none}
        .pisma-tbl tr:hover td{background:rgba(255,255,255,.015)}
        .pisma-name{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1)}
        .pisma-period{font-family:var(--mono);font-size:9px;color:var(--bronze);letter-spacing:.5px;display:block;margin-top:2px}
        .pisma-tag{display:inline-block;padding:2px 7px;border-radius:4px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.5px;margin-top:4px}
        .pisma-tag.gl{background:var(--dim-go);color:var(--gold);border:1px solid var(--bd-go)}
        .pisma-tag.ci{background:rgba(74,144,217,.1);color:#6b9bff;border:1px solid rgba(74,144,217,.2)}
        .pisma-tag.la{background:rgba(62,207,110,.08);color:var(--green);border:1px solid rgba(62,207,110,.15)}
        @media(max-width:680px){
          .pisma-tbl, .pisma-tbl thead, .pisma-tbl tbody, .pisma-tbl tr, .pisma-tbl th, .pisma-tbl td{display:block}
          .pisma-tbl thead{display:none}
          .pisma-tbl tr{padding:10px 0;border-bottom:1px solid var(--bd)}
          .pisma-tbl td{padding:5px 12px;border-bottom:none}
          .pisma-tbl td::before{content:attr(data-label);font-family:var(--mono);font-size:9px;color:var(--t3);display:block;margin-bottom:2px;text-transform:uppercase;letter-spacing:1px}
        }
      `}</style>
      <SecHdr2 label="06b · Tri pisma u Hrvatskoj"/>
      <div className="pisma-tbl-wrap">
        <table className="pisma-tbl">
          <thead>
            <tr>
              <th>Pismo</th><th>Nastanak</th><th>Regija</th><th>Primjeri</th><th>Napomena</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r=>(
              <tr key={r.pismo}>
                <td data-label="Pismo">
                  <span className="pisma-name">{r.pismo}</span>
                  <span className="pisma-period">{r.period}</span>
                  <span className={`pisma-tag ${r.tag}`}>{r.tag==='gl'?'ⰀⰁⰂ':r.tag==='ci'?'АБВ':'ABC'}</span>
                </td>
                <td data-label="Nastanak">{r.nastanak}</td>
                <td data-label="Regija">{r.regija}</td>
                <td data-label="Primjeri">{r.primjer}</td>
                <td data-label="Napomena" style={{fontSize:12,color:'var(--t3)'}}>{r.napomena}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ============================================================
   [11] GLAGOLJICA — interaktivni panel
   HTML pozicija: L1 · sec "06 · Glagoljica — pismo Hrvata"
   → NAKON TablicaPisama (komponenta [10])
   → ISPRED .box-tip koji eventualno slijedi u sekciji 06
============================================================ */
const GLAG_LETTERS = [
  {char:'Ⰰ',lat:'A',name:'Az',      desc:'Prvo slovo glagoljice — "az" znači "ja". Kao u latinici, početak alfabeta.'},
  {char:'Ⰱ',lat:'B',name:'Buky',    desc:'„Buky" — knjige. Glagoljica je od samog početka vezana uz pisanu kulturu.'},
  {char:'Ⰲ',lat:'V',name:'Vědi',    desc:'„Vědi" — znanje. Svako slovo glagoljice nosi simbolično ime i značenje.'},
  {char:'Ⰳ',lat:'G',name:'Glagoli', desc:'„Glagoli" — govori! Od ovog slova dolazi naziv pisma — glagoljica.'},
  {char:'Ⰴ',lat:'D',name:'Dobro',   desc:'„Dobro" — vrijednost u imenu slova pokazuje kršćansku etiku tvorca pisma.'},
  {char:'Ⰵ',lat:'E',name:'Jest',    desc:'„Jest" — jest, postoji. Egzistencijalno slovo — affirmation of being.'},
  {char:'Ⰶ',lat:'Ž',name:'Živěte', desc:'„Živěte" — živite! Glagoljica je živo pismo — njezina su slova imperativ.'},
  {char:'Ⰷ',lat:'Z',name:'Zemlja',  desc:'„Zemlja" — zemlja, tlo. Veže čovjeka uz njegovo porijeklo.'},
  {char:'Ⰹ',lat:'I',name:'Iže',     desc:'„Iže" — koji. Relacijska zamjenica kao slovo — jezik ugrađen u abecedu.'},
  {char:'Ⱁ',lat:'O',name:'On',      desc:'„On" — on. Referenca na treće lice — gramatika u imenu slova.'},
  {char:'Ⱂ',lat:'P',name:'Pokoj',   desc:'„Pokoj" — mir, počinak. Kršćanski motiv vječnog mira u samom pismu.'},
  {char:'Ⱃ',lat:'R',name:'Rci',     desc:'„Rci" — reci! Imperativ govorenja — pismo kao poziv na komunikaciju.'},
];

export function GlagoljicaPanel() {
  const [active, setActive] = useState(null);
  const al = active !== null ? GLAG_LETTERS[active] : null;
  return (
    <>
      <style>{`
        .glag2-panel{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;margin:18px 0}
        .glag2-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(52px,1fr));gap:8px;margin:14px 0}
        .glag2-letter{display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 6px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;transition:all .15s;user-select:none}
        .glag2-letter:hover,.glag2-letter.on{border-color:var(--bd-go);background:var(--dim-go)}
        .glag2-char{font-size:20px;color:var(--t1);line-height:1;transition:color .15s}
        .glag2-letter.on .glag2-char{color:var(--gold)}
        .glag2-lat{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:.5px}
        .glag2-tip{margin-top:12px;padding:12px 14px;background:var(--sur);border:1px solid var(--bd-go);border-radius:var(--r2);min-height:56px;display:flex;align-items:center;gap:12px;transition:all .2s}
        .glag2-tip-char{font-size:32px;flex-shrink:0}
        .glag2-tip-name{font-family:var(--display);font-size:14px;font-weight:700;color:var(--gold);margin-bottom:2px}
        .glag2-tip-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2)}
        .glag2-note{margin-top:12px;padding:10px 14px;background:var(--ele);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;color:var(--t3)}
      `}</style>
      <SecHdr2 label="06c · Glagoljica — interaktivna abeceda"/>
      <div className="glag2-panel">
        <div style={{fontFamily:'var(--serif)',fontSize:13.5,color:'var(--t2)',lineHeight:1.6,marginBottom:4}}>
          Klikni na slovo da vidiš naziv i značenje. Svako slovo glagoljice nosi simbolično ime.
        </div>
        <div className="glag2-grid">
          {GLAG_LETTERS.map((l,i)=>(
            <div key={i} className={`glag2-letter${active===i?' on':''}`} onClick={()=>setActive(active===i?null:i)}>
              <span className="glag2-char">{l.char}</span>
              <span className="glag2-lat">{l.lat}</span>
            </div>
          ))}
        </div>
        <div className="glag2-tip">
          {al ? (
            <>
              <span className="glag2-tip-char">{al.char}</span>
              <div>
                <div className="glag2-tip-name">{al.name} → "{al.lat}"</div>
                <div className="glag2-tip-desc">{al.desc}</div>
              </div>
            </>
          ) : (
            <div style={{fontFamily:'var(--serif)',fontSize:13,color:'var(--t3)',fontStyle:'italic'}}>← Klikni na slovo iznad</div>
          )}
        </div>
        <div className="glag2-note">
          💡 <strong style={{color:'var(--t2)'}}>Zanimljivost:</strong> Glagoljica ima 41 slovo —
          latinica 26. Slavenski jezici imaju glasove kojih nema u latinici (Č, Š, Ž, Ć, DŽ...) —
          zato Ćiril i Metod moraju stvoriti <em>novo</em> pismo, ne samo posuditi latinično.
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [12] GEOGRAFSKA SVG MINI-MAPA
   HTML pozicija: L1 · sec "07 · Ostali glagoljički spomenici"
   → ODMAH NAKON sec-hdr-a "07 ·", NA VRH sekcije
   → ISPRED tablice ili liste postojećih lokaliteta u sekciji
============================================================ */
export function GeografskaMapa() {
  return (
    <>
      <style>{`
        .geo2{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;margin:18px 0 22px}
        .geo2-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:14px}
        .geo2-img{width:100%;height:auto;display:block;border-radius:var(--r2)}
      `}</style>
      <div className="geo2">
        <div className="geo2-lbl">KLJUČNI LOKALITETI GLAGOLJIČKE PISMENOSTI</div>
        <img
          src="/h02-glagoljicka-mapa.jpg"
          alt="Geografska mapa ključnih lokaliteta glagoljičke pismenosti u Hrvatskoj"
          className="geo2-img"
        />
      </div>
    </>
  );
}

/* ============================================================
   [13] ACCORDION — 5 esejnih teza
   HTML pozicija: L2 · Esej alat · sec "01 · Pet mogućih esejnih teza"
   → ZAMJENJUJE 5 statičnih .box-key blokova (TEZA 1–5)
   → Dolazi IZMEĐU .prose "Ako te esej pita o..." i sec "02 · Model uvoda"
   → Isti sadržaj, interaktivno + color-coded po tezi
============================================================ */
const TEZA_COLORS2 = ['#e9b446','#DC322F','#6b9bff','#3ecf6e','rgba(200,130,255,1)'];

const ESEJ_TEZE = [
  {br:'T1',naslov:'Hrvatska pismenost kao identitet',tag:'BAŠĆANSKA PLOČA',
   teza:'„Bašćanska ploča je krsni list hrvatske kulture — dokument u kojem hrvatski narod prvi put pisano ulazi u europsku povijest."',
   args:['Ploča je prvi pisani spomen sintagme „kralj hrvatski" na hrvatskom jeziku (~1100.)','Jezik prelazi iz crkvenoslavenskog u starohrvatski — postaje samostalan medij','Prisutnost triju pisama u jednom kulturnom kontekstu pokazuje europsku širinu'],
   citat:'„kralj Zvonimir, kralj hrvatski" — Bašćanska ploča, ~1100.'},
  {br:'T2',naslov:'Dante kao alegorija duhovnog puta',tag:'DANTE',
   teza:'„Božanstvena komedija je alegorijska mapa puta duše od grijeha do Boga."',
   args:['Pakao → Čistilište → Raj nije geografija — to je duhovna dijagnoza ljudske duše','Vergilije (razum) te vodi dokle razum može; Beatrice (vjera) preuzima jer samo vjera može doseći Boga','Vrhunac je vizija Trojstva — spoznaja koja nadilazi jezik i logiku'],
   citat:'„L\'amor che move il sole e l\'altre stelle" — Dante, Paradiso, XXXIII'},
  {br:'T3',naslov:'Viteški roman kao zrcalo feudalnog društva',tag:'VITEŠTVO',
   teza:'„Viteški ep nije bajka — to je udžbenik feudalne etike u pjesničkoj formi."',
   args:['Roland umire zbog časti, ne zbog taktičke nužnosti — feudalna vjernost je vrijednija od života','Kurtoazna ljubav je stilizacija feudalnog odnosa vazala prema gospodaru','Cid osvaja Valenciju Bogu i kralju — religiozni i feudalni motivi su nerazdvojni'],
   citat:'Teme časti, vjernosti i vjere u viteškim epovima (Roland, Cid, Nibelunzi)'},
  {br:'T4',naslov:'Srednjovjekovna alegorija kao način mišljenja',tag:'ALEGORIJA',
   teza:'„Alegorija nije književni trik srednjeg vijeka — to je način na koji taj svijet misli."',
   args:['Dante svakom grijehu u Paklu pridaje kaznu koja ga oslikava (požuda = vječni vjetar)','Bestijari pripisuju moralnu simboliku životinjama — lav = Krist, lisica = hereza','Biblija se čita u četiri razine: doslovna, alegorijska, moralna, anagogična (mistična)'],
   citat:'„Svaka stvar postoji da bi označavala neku drugu stvar." — Augustin, duh epohe'},
  {br:'T5',naslov:'Prijelaz u renesansu — što se mijenja',tag:'PETRARCA · BOCCACCIO',
   teza:'„Petrarca i Boccaccio označavaju trenutak kad čovjek potiskuje Boga iz središta priče."',
   args:['Petrarca piše 366 pjesama jednoj ženi — čovjekov osjećaj kao autonomna tema, bez religijske pouke','Boccaccio u Dekameronu — 100 novela o ljubavi, lukavosti i grijehu bez moralne osude','Obojica otkrivaju antiku: Petrarca traži rukopise, Boccaccio prevodi Homera na latinski'],
   citat:'„Laura nije anđeo — to je žena od krvi i mesa koja me muči." — duh Petrarcina Kanconijera'},
];

export function AccordionEsejTeze() {
  return (
    <>
      <style>{CSS_SCENES2}</style>
      <div className="scenes2">
        {ESEJ_TEZE.map((t,idx)=>(
          <details className="scene2" key={t.br} style={{'--t2-accent':TEZA_COLORS2[idx]}}>
            <summary className="scene2-sum">
              <div className="scene2-num" style={{color:TEZA_COLORS2[idx],fontSize:13}}>{t.br}</div>
              <div className="scene2-ttl">{t.naslov}</div>
              <span className="scene2-meta" style={{color:TEZA_COLORS2[idx],borderColor:`${TEZA_COLORS2[idx]}44`}}>{t.tag}</span>
              <span className="scene2-chevron" style={{color:TEZA_COLORS2[idx]}}>▾</span>
            </summary>
            <div className="scene2-body">
              <div className="scene2-quote">{t.teza}</div>
              <div className="scene2-why"><b>Argumenti:</b></div>
              <div className="scene2-args">
                {t.args.map((a,i)=>(
                  <div className="scene2-arg" key={i} style={{borderLeftColor:TEZA_COLORS2[idx]}}>
                    <span className="scene2-arg-num" style={{color:TEZA_COLORS2[idx]}}>({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="scene2-citat">
                <strong style={{color:TEZA_COLORS2[idx],fontStyle:'normal',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1}}>CITAT: </strong>{t.citat}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   MAPA POZICIJA U H02.HTML

   ═══════════════════════════════════════════════════════════
   TAB L0 — TEORIJA (#l0)
   ═══════════════════════════════════════════════════════════

   [6] TimelinePismenost
   → Sekcija: "03 · Srednji vijek — kontekst epohe"
   → Pozicija: NAKON .box-key "Ključni citat — duh epohe"
   → Tik ISPRED sec-hdr "04 · Viteški epovi i trubadurska lirika"
   → Razlog: kronološki pregled završava sekciju o kontekstu epohe

   [1] AuthorCardDante
   → Sekcija: "05 · Dante i Božanstvena komedija"
   → Pozicija: ODMAH NAKON sec-hdr-a "05 ·", ISPRED <div class="prose">
   → Razlog: autor se vizualno predstavlja PRIJE tekstualnog uvoda

   [2] SVGDanteStruktura
   → Sekcija: "05 · Dante"
   → Pozicija: ZAMJENJUJE ili dolazi NAKON .box-20 "Struktura u 3 koraka"
   → Razlog: vizualni prikaz 3 cantike superiorniji od numbered liste

   [3] AccordionKantike
   → Sekcija: "05 · Dante"
   → Pozicija: NAKON SVGDanteStruktura, ISPRED .box-key "Zašto je Dante ključan"
   → Razlog: deep-dive u svaku cantiku klik-po-klik

   [4] DanteVsHomer
   → Sekcija: "05 · Dante"
   → Pozicija: NA DNU sekcije 05, NAKON .box-tip "PRO TIP ZA ESEJ"
   → Tik ISPRED sec-hdr "06 · Pretece renesanse"
   → Razlog: most prema H01 — cross-chapter veza

   [5] AuthorCardPretece
   → Sekcija: "06 · Pretece renesanse — Boccaccio i Petrarca"
   → Pozicija: ODMAH NAKON sec-hdr-a "06 ·", ISPRED .prose i .con
   → Razlog: dvojna kartica zamjenjuje ulogu uvoda u sekciji

   ═══════════════════════════════════════════════════════════
   TAB L1 — HRVATSKA PISMENOST (#l1)
   ═══════════════════════════════════════════════════════════

   [7] KrsniListQuote
   → Pozicija: NAKON .box-int "Zašto Bašćanska ploča zaslužuje poseban tab"
   → ISPRED sec-hdr "01 · Osnovni podaci"
   → Razlog: dramski otvarač taba — emotional hook prije suhoparnih podataka

   [8] StatCardsPloca
   → Sekcija: "01 · Osnovni podaci"
   → Pozicija: NAKON postojećeg .sg grida s 6 sc-kartica
   → ISPRED .box-key "Jedna rečenica koja otvara esej"
   → Razlog: .sg grid = opći podaci, StatCards = fizičke dimenzije (dopuna, ne zamjena)

   [9] TimelineOtkrice
   → Sekcija: "02 · Otkriće i put do HAZU-a"
   → Pozicija: ZAMJENJUJE .box-20 s 8 numeriranih li stavki
   → Razlog: isti sadržaj, vizualno superioran format

   [10] TablicaPisama
   → Sekcija: "06 · Glagoljica — pismo Hrvata"
   → Pozicija: NAKON .con s 3 .cr (OBLA, UGLATA, PRIJELAZNI TIP)
   → ISPRED postojećeg .svg-wrap "Tri pisma u střednjovjekovnoj Hrvatskoj"
   → Razlog: tablični pregled dopunjuje SVG dijagram koji već postoji

   [11] GlagoljicaPanel
   → Sekcija: "06 · Glagoljica — pismo Hrvata"
   → Pozicija: NAKON TablicaPisama (i.e. NAKON .svg-wrap "Tri pisma")
   → Razlog: interaktivni abecedni panel kao završetak sekcije o glagoljici

   [12] GeografskaMapa
   → Sekcija: "07 · Ostali glagoljički spomenici"
   → Pozicija: ODMAH NAKON sec-hdr-a "07 ·", NA VRH sekcije
   → ISPRED tablice ili liste lokaliteta koji eventualno slijede
   → Razlog: vizualni kontekst PRIJE tekstualnih detalja

   ═══════════════════════════════════════════════════════════
   TAB L2 — ESEJ ALAT (#l2)
   ═══════════════════════════════════════════════════════════

   [13] AccordionEsejTeze
   → Sekcija: "01 · Pet mogućih esejnih teza"
   → Pozicija: ZAMJENJUJE 5 statičnih .box-key blokova (TEZA 1–TEZA 5)
   → Dolazi IZMEĐU .prose opisa i sec-hdr "02 · Model uvoda i prve razrade"
   → Razlog: interaktivan accordion sa color-coding = duplo bolji UX od statičnih kartica

============================================================ */
