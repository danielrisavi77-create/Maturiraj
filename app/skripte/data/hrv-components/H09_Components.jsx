/* ============================================================
   H09 — Egzistencijalizam · Albert Camus · Stranac
   ⚠️  OBVEZATNO ISPITNO DJELO 2026

   H09 već ima: 3 SVG-a, 7 accordion scena, simbolika text,
   5 interpretacija, citatnik, pojmovnik, matching game.
   Ove additions dopunjuju što stvarno nedostaje.

   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

import { useState } from 'react';

/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_SECHDR9 = `
  .sh9{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh9-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh9-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;
function SH9({label,style}){
  return(
    <><style>{CSS_SECHDR9}</style>
    <div className="sh9" style={style}>
      <div className="sh9-line"/><div className="sh9-badge">{label}</div><div className="sh9-line"/>
    </div></>
  );
}

const CSS_AC9 = `
  .ac9{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac9:hover{border-color:var(--bd-br)}
  .ac9-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac9-mono{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,#1a0a0a,#4a1a0a);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,130,50,.3)}
  .ac9-meta{flex:1;min-width:0}
  .ac9-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac9-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac9-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac9-star{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;color:var(--gold);letter-spacing:.5px;margin-top:6px}
  .ac9-body{padding:18px 22px}
  .ac9-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac9-body p:last-child{margin-bottom:0}
  .ac9-body strong{color:var(--t1)}
  .ac9-body em{color:var(--gold);font-style:italic}
  .ac9-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac9-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac9-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac9-work:last-child{border-bottom:none;padding-bottom:0}
  .ac9-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac9-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac9-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac9-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  @media(max-width:600px){.ac9-hdr{flex-direction:column;gap:10px}.ac9-mono{width:42px;height:42px;font-size:18px}.ac9-body{padding:14px 16px}.ac9-name{font-size:15px}}
`;

const CSS_TL9 = `
  .tl9{position:relative;padding:20px 0;margin:18px 0}
  .tl9::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl9-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl9-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl9-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl9-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl9-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl9-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl9-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC9 = `
  .sc9s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc9{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc9:hover{border-color:var(--bd-br)}
  .sc9[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc9-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc9-sum::-webkit-details-marker{display:none}
  .sc9-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc9[open] .sc9-chev{transform:rotate(180deg);color:var(--gold)}
  .sc9-num{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);min-width:32px}
  .sc9[open] .sc9-num{color:var(--gold)}
  .sc9-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc9-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc9-body{padding:0 16px 16px}
  .sc9-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc9-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .sc9-why b{color:var(--t1)}
  .sc9-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc9-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc9-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .sc9-note{margin-top:10px;padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .sc9-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc9-meta{display:none}
    .sc9-body{padding:0 12px 12px}
  }
`;

const CSS_CMP9 = `
  .cmp9{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp9-side{padding:18px 20px;background:var(--sur)}
  .cmp9-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp9-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp9-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp9-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp9-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp9-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp9-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:62px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp9{grid-template-columns:1fr}.cmp9-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp9-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT9 = `
  .stat9{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 20px}
  .stat9-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat9-card:hover{border-color:rgba(220,130,50,.35);transform:translateY(-2px)}
  .stat9-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat9-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat9-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat9-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat9{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE9 = `
  .hq9{border:1px solid rgba(220,160,80,.4);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(220,130,50,.05),rgba(232,201,122,.04));position:relative;overflow:hidden}
  .hq9::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq9::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,rgba(220,130,50,.7),transparent)}
  .hq9-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(220,160,80,.9);margin-bottom:10px}
  .hq9-text{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);line-height:1.4;font-style:italic;margin-bottom:10px}
  .hq9-text em{color:#e9b446;font-style:normal}
  .hq9-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq9-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq9{padding:18px 18px 18px 22px}.hq9-text{font-size:15px}}
`;

const CSS_POP9 = `
  .pop9{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop9-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop9-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop9-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop9-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop9-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop9{grid-template-columns:1fr}}
`;

const CSS_SIMB9 = `
  .simb9{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:14px 0}
  .simb9-item{display:flex;gap:10px;padding:12px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);align-items:flex-start;transition:border-color .2s}
  .simb9-item:hover{border-color:rgba(220,160,80,.3)}
  .simb9-ico{font-size:20px;flex-shrink:0;margin-top:1px}
  .simb9-name{font-family:var(--display);font-size:13px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .simb9-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
  @media(max-width:600px){.simb9{grid-template-columns:1fr}}
`;

const TEZA_COLORS9 = ['#e9b446','#3ecf6e','#DC322F','#6b9bff','#f97316','#e879f9','#06b6d4'];

/* ============================================================
   [1] AUTHOR CARD — Albert Camus
============================================================ */
export function AuthorCardCamus({context='l0'}) {
  return (
    <>
      <style>{CSS_AC9}</style>
      <div className="ac9">
        <div className="ac9-hdr">
          <div className="ac9-mono">C</div>
          <div className="ac9-meta">
            <div className="ac9-name">Albert Camus</div>
            <div className="ac9-dates">MONDOVI, ALŽIR · 1913. – VILLEBLEVIN · 1960.</div>
            <div className="ac9-tags">
              <span className="pill p-br" style={{fontSize:10}}>apsurd</span>
              <span className="pill p-r" style={{fontSize:10}}>pied-noir</span>
              <span className="pill p-go" style={{fontSize:10}}>Nobel 1957.</span>
              {context==='l1'&&<div className="ac9-star">⭐ OBVEZATNO DJELO 2026</div>}
            </div>
          </div>
        </div>
        <div className="ac9-body">
          <p>Francusko-alžirski pisac, <em>pied-noir</em> (Francuz rođen u Alžiru). Otac mu gine na Marni 1914. — nikad ga nije upoznao. Majka polugluha, nepismena čistačica. Tuberkuloza od 17. — ne može studirati normalno, ne može igrati nogomet (bio je golman FC Alžira). Taj niz gubitaka nije ga učinio nihilistom — naučio ga je <strong>živjeti svjesno</strong>.</p>
          <p>Piše Stranca usred nacističke ocupacije Pariza (1942.). Umire u prometnoj nesreći s 46 godina — u džepu mu je bila <em>neiskorištena karta za vlak</em>. Apsurdna smrt koju nije planirao. Nobelova nagrada 1957. — drugi najmlađi laureat ikad.</p>
          <div className="ac9-works">
            <div className="ac9-works-lbl">Trilogija apsurda (1942.) + ostalo</div>
            <div className="ac9-work">
              <div className="ac9-badge">☀️</div>
              <div>
                <div className="ac9-work-title">Stranac (L'Étranger)</div>
                <div className="ac9-work-meta">1942. · ROMAN · 2 DIJELA · OBVEZATNO 2026</div>
                <div className="ac9-work-desc">Meursault ne plače na sahrani majke, ubije Arapina „zbog sunca". <strong>Najčitanija francuska knjiga 20. st.</strong></div>
              </div>
            </div>
            <div className="ac9-work">
              <div className="ac9-badge">📜</div>
              <div>
                <div className="ac9-work-title">Mit o Sizifu · Caligula</div>
                <div className="ac9-work-meta">1942. · ESEJ + DRAMA · ISTI CIKLUS</div>
                <div className="ac9-work-desc">Tri žanra, jedna tema: kako živjeti bez metafizičke utjehe. „Treba zamisliti Sizifa sretnim" — završna rečenica eseja.</div>
              </div>
            </div>
            <div className="ac9-work">
              <div className="ac9-badge">🤝</div>
              <div>
                <div className="ac9-work-title">Kuga · Pobunjeni čovjek</div>
                <div className="ac9-work-meta">1947. + 1951. · DRUGI CIKLUS</div>
                <div className="ac9-work-desc">Kuga = solidarnost pred apsurdom (Dr. Rieux). Pobunjeni čovjek kritizira marksistički teror — uzrokuje sukob sa Sartreom 1952.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [2] TIMELINE — Camus životopis
============================================================ */
const CAMUS_EVENTS = [
  {date:'1913.', major:true,  title:'Rođenje u Mondoviju, Alžir',                 desc:'Pied-noir — Francuz rođen u alžirskoj koloniji. Otac Lucien Camus: radnik na farmi. Majka Catherine: polugluha, nepismena, radi kao čistačica. Siromaštvo od prvog dana.'},
  {date:'1914.', major:false, title:'Otac gine na Marni — nikad ga nije upoznao', desc:'Lucien Camus umire u Prvom svjetskom ratu. Camus odrasta bez oca — taj gubitak direktno oblikuje njegov odnos prema apsurdu i odsutnosti smisla.'},
  {date:'1930.', major:false, title:'Tuberkuloza — kraj sporta',                   desc:'Dijagnoza tuberkuloze u 17. Ne može normalno studirati, ne može igrati nogomet (bio je golman FC Alžira). Suočava se s vlastitom smrtnošću — postaje egzistencijalni mislilac od tinejdžerske dobi.'},
  {date:'1935.', major:false, title:'Komunistička partija — kratko',               desc:'Pristupa KP-u iz anti-fašizma, izbačen 1937. zbog kritike Moskve. Cijeli život ostaje anti-totalitarian: ni fašizam ni staljinizam. Socijalno angažiran, ideološki neovisni.'},
  {date:'1942.', major:true,  title:'Stranac + Mit o Sizifu — usred Occupationa', desc:'Piše i objavljuje Stranca (roman) i Mit o Sizifu (esej) iste godine, u nacistički okupiranom Parizu. Gallimard odmah objavljuje. Intelektualna Francuska govori samo o njemu.'},
  {date:'1944.', major:false, title:'Otpor — uređuje Combat',                     desc:'Urednik ilegalnog lista Combat u nacistički okupiranom Parizu. „Pisac u Otporu" — za Camusa literatura ima moralnu odgovornost. Živi ono što piše.'},
  {date:'1952.', major:false, title:'Sukob sa Sartreom — Pobunjeni čovjek',       desc:'Pobunjeni čovjek kritizira marksistički teror i GULAG. Sartre ga napada u Les Temps Modernes. Javni intelektualni raskid. Camus ostaje sam — ali ima pravo o Staljinu.'},
  {date:'1957.', major:true,  title:'Nobelova nagrada — 44 godine',               desc:'„Za vidovitu književnu produkciju koja osvjetljava probleme ljudske savjesti." Drugi najmlađi laureat ikad. Na ceremoniji kaže: „Trebam pisati za sve one koji ne mogu govoriti."'},
  {date:'1960.', major:true,  title:'Prometna nesreća — 46 godina',               desc:'4. siječnja 1960., auto Michela Gallimarda kod sela Villeblevin. Camus gine na licu mjesta. U džepu: neiskorištena karta za vlak. Apsurdna smrt koja nije planirana.'},
];

export function TimelineCamus() {
  return (
    <>
      <style>{CSS_TL9}</style>
      <SH9 label="03b · Camus — kronologija"/>
      <div className="tl9">
        {CAMUS_EVENTS.map((ev,i)=>(
          <div className="tl9-ev" key={i}>
            <div className={`tl9-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl9-body">
              <div className="tl9-title">{ev.title}</div>
              <div className="tl9-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [3] COMPARE STRIP — Camus vs Sartre
============================================================ */
export function CompareCamusSartre() {
  const rows = [
    ['Pojam',       'Apsurd',                           'Egzistencijalizam'],
    ['Teza',        'Smisla nema — ali pobunimo se',    'Esencija ne postoji, sloboda = teret'],
    ['Bog',         'Odsutan — ali ne gnjevan',         '„Bog je mrtav" (nasljeđuje Nietzschea)'],
    ['Odgovor',     'Pobuna + solidarnost',             'Radikalna sloboda + tjeskoba'],
    ['Sizif',       '„Treba zamisliti Sizifa sretnim"', 'Sizif je osuđen — i svjestan je toga'],
    ['Politika',    'Anti-totalitaran, moralan',        'Blizak marksizmu (GULAG problem)'],
    ['Ključno',     'Stranac + Mit o Sizifu',           'Mučnina + Bitak i ništavilo'],
  ];
  return (
    <>
      <style>{CSS_CMP9}</style>
      <div className="box-int" style={{marginBottom:12}}>
        <div className="box-int-lbl">⚠️ Pazi — česta greška na eseju</div>
        <div className="box-int-txt">Camus <strong>nije egzistencijalst</strong> u Sartreovom smislu — on sam odbija tu etiketu. Apsurd i egzistencijalizam se preklapaju, ali su različite filozofije. Na eseju: uvijek navedi „filozofija apsurda", ne „egzistencijalizam" kad govoriš o Camusu.</div>
      </div>
      <SH9 label="04b · Camus vs Sartre — najčešća greška na eseju"/>
      <div className="cmp9">
        <div className="cmp9-side left">
          <div className="cmp9-author">Albert Camus</div>
          <div className="cmp9-period">ALŽIR · 1913.–1960. · APSURD</div>
          {rows.map(([l,a])=>(<div className="cmp9-row" key={l}><span className="cmp9-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp9-vs"><span className="cmp9-vs-inner">VS</span></div>
        <div className="cmp9-side">
          <div className="cmp9-author">Jean-Paul Sartre</div>
          <div className="cmp9-period">PARIZ · 1905.–1980. · EGZISTENCIJALIZAM</div>
          {rows.map(([l,,r])=>(<div className="cmp9-row" key={l}><span className="cmp9-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [4] POP KULTURA — Camus i Stranac danas
============================================================ */
const POP_CAMUS = [
  {film:'📖 Najprevedena fr. knjiga 20. st.', title:'Stranac — globalni fenomen',        source:'Stranac je preveden na 50+ jezika i prodan u 10+ milijuna primjeraka. Najčitanija francuska knjiga 20. st. — ispred Proustovog Traganja i Sartreove Mučnine.'},
  {film:'🎵 The Cure — „Killing an Arab" (1978.)', title:'Direktna referenca na Stranca', source:'Robert Smith piše pjesmu o sceni ubojstva Arapina. „Killing an Arab" = Meursaultova perspektiva u 3 minute. The Cure su definirali gotik-rok djelomično kroz Camusa.'},
  {film:'📖 Kamel Daoud — Meursaultova istraga (2013.)', title:'Odgovor iz arapske perspektive', source:'Alžirski pisac daje glas Arapinu iz Stranca — imenuje ga Musa, daje mu obitelj, rekonstruira Meursaultov dan. Goncourov dobitnik 2015. Postkolonijalni odgovor na Camusa.'},
  {film:'🎬 Luchino Visconti — Stranac (1967.)', title:'Film s Marcellom Mastroiannijem',  source:'Jedina velika filmska adaptacija. Mastroianni kao Meursault u alžirskom suncu. Visconti: „Camus je jedini pisac kojeg sam mogao adaptirati bez da ga izdam."'},
  {film:'🏆 „Apsurdni junak" — arhetip',         title:'Od Stranca do serije Fleabag',    source:'Phoebe Waller-Bridge (Fleabag, 2016.–2019.) citira Camusa kao ključni utjecaj. Lik koji direktno progovara publici, bez filtera, ravnodušan prema konvencijama — Meursault u ženskom tijelu.'},
  {film:'🇭🇷 Camus u hr. nastavi',              title:'Most prema H10 postmoderni',      source:'Stranac je bridge između egzistencijalizma i postmoderne (H10): Meursault nema fiksni identitet, ne prihvaća metanarativu, odbija legitimnost institucija. Camus anticipira postmodernu kritiku institucija.'},
];

export function PopKulturaCamus() {
  return (
    <>
      <style>{CSS_POP9}</style>
      <SH9 label="Camus i Stranac u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="pop9">
        {POP_CAMUS.map((p,i)=>(
          <div className="pop9-card" key={i}>
            <div className="pop9-film">{p.film}</div>
            <div className="pop9-title">{p.title}</div>
            <div className="pop9-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [5] HERO QUOTE — Prva rečenica Stranca
============================================================ */
export function HeroQuoteStranac() {
  return (
    <>
      <style>{CSS_QUOTE9}</style>
      <div className="hq9">
        <div className="hq9-eye">NAJPOZNATIJI POČETAK FRANCUSKE PROZE 20. ST. — NAPAMET</div>
        <div className="hq9-text">
          „Danas mi je umrla majka. <em>Možda i jučer, ne znam.</em>"
        </div>
        <div className="hq9-body">Dvije rečenice koje sadrže sve: ravnodušnost prema datumu, brisanje emocionalne hijerarhije, hladan izvještajni ton. „Možda i jučer" — datum majčine smrti nije važan. To je <strong style={{color:'var(--t1)'}}>najavljeni zločin pred društvom</strong> — Meursault ne laže, ali njegova iskrenost postaje optužnica.</div>
        <div className="hq9-source">STRANAC (L'ÉTRANGER) · A. CAMUS · 1942. · I. DIO, I. POGLAVLJE · BIJELA PROZA</div>
      </div>
    </>
  );
}

/* ============================================================
   [6] STAT CARDS — Stranac
============================================================ */
export function StatCardsStranac() {
  const stats = [
    {ico:'📅', val:'1942.',       lbl:'Objava',        sub:'usred Occupationa'},
    {ico:'📖', val:'2 dijela',    lbl:'Kompozicija',   sub:'život → suđenje'},
    {ico:'🏆', val:'Nobel 1957.', lbl:'Nagrada',       sub:'44 god. — 2. najmlađi'},
    {ico:'☀️', val:'„Zbog sunca"',lbl:'Uzrok ubojstva',sub:'najkraće objašnjenje'},
  ];
  return (
    <>
      <style>{CSS_STAT9}</style>
      <div className="stat9">
        {stats.map(s=>(
          <div className="stat9-card" key={s.lbl}>
            <span className="stat9-ico">{s.ico}</span>
            <div className="stat9-val">{s.val}</div>
            <div className="stat9-lbl">{s.lbl}</div>
            <div className="stat9-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [7] SIMBOLI GRID
============================================================ */
export function SimboliGridStranac() {
  const simboli = [
    {ico:'☀️', name:'Sunce — drugi protagonist', desc:'Žari, peče, pritišće na sahrani, na plaži, u sudnici. Meursault ubija „zbog sunca" — sud odbija. Sunce nije izgovor nego fizička realnost. Camusova mediteranska poetika: priroda djeluje, nije kulisa.'},
    {ico:'🌊', name:'More — jedino utočište',    desc:'Meursault je smiren samo na moru. Plivanje s Marie, voda na koži. More = sloboda bez društvenih normi, pred-socijalno stanje. U zatvoru pamti more. Suprotstavlja se sudnici i ćeliji.'},
    {ico:'⚖️', name:'Giljotina — društvena osveta',desc:'Camus je cijeli život bio protiv smrtne kazne (esej Razmišljanja o giljotini, 1957.). Giljotina u Strancu nije pravda — ona je ritual činjenja koje nije prihvatilo tuđost. Društvo ubija Meursaulta jer ne laže.'},
    {ico:'🗣️', name:'Jezik — laž konvencije',   desc:'Meursault ne kaže što se očekuje. Suđenje pretvara njegovu iskrenost u moralni zločin. „Optužujem ga da je sahranio majku s kriminalnim srcem." Jezik konvencije = laž; Meursaultov jezik = istina koja ne spasava.'},
    {ico:'⚰️', name:'Lijes — neotvoreni',        desc:'Meursault odbija otvoriti majčin lijes. Ne zato što je hladan — nego jer smatra da to nije potrebno. Društvo to čita kao dokaz bezdušnosti. Pravi zločin u Strancu počinje pred zatvorenim lijesom.'},
    {ico:'✝️', name:'Svećenik — odbijeni posrednik',desc:'Svećenik dolazi tri puta u Meursaultovu ćeliju. Tri puta odbijen. Četvrti put sam dolazi — Meursault eksplodira. Svećenik = ponuda transcendencije koju Meursault odbija. Eksplozija = jedina scena s emocijama.'},
  ];
  return (
    <>
      <style>{CSS_SIMB9}</style>
      <div className="simb9">
        {simboli.map((s,i)=>(
          <div className="simb9-item" key={i}>
            <span className="simb9-ico">{s.ico}</span>
            <div>
              <div className="simb9-name">{s.name}</div>
              <div className="simb9-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [8] COMPARE STRIP — Stranac vs Preobražaj
============================================================ */
export function CompareStranacPreobrazaj() {
  const rowsL = [
    ['Junak',      'Meursault — svjestan autsajder'],
    ['Izbor',      'Svjesno odbija konvencije'],
    ['Tijelo',     'Fizičnost — sunce, more, ljubav'],
    ['Kraj',       'Giljotina — ali slobodan iznutra'],
    ['Poruka',     '„Otvaram se nježnoj ravnodušnosti"'],
    ['Stil',       'Bijela proza, hladan ton, 1. lice'],
    ['Filozofija', 'Apsurd → pobuna → sloboda'],
  ];
  const rowsR = [
    ['Junak',      'Gregor — nesvjesna žrtva'],
    ['Izbor',      'Nema izbora — transformiran'],
    ['Tijelo',     'Tijelo = teret, zamka, kukac'],
    ['Kraj',       'Smrt — sam, napušten'],
    ['Poruka',     'Alijenacija je sudbina, ne izbor'],
    ['Stil',       'Hladan izvještaj, 3. lice'],
    ['Filozofija', 'Apsurd → bez izlaza → smrt'],
  ];
  return (
    <>
      <style>{CSS_CMP9}</style>
      <SH9 label="Stranac vs Preobražaj — bridge H08→H09" style={{marginTop:20}}/>
      <div className="cmp9">
        <div className="cmp9-side left">
          <div className="cmp9-author">Stranac (Meursault)</div>
          <div className="cmp9-period">CAMUS · 1942. · APSURD · H09</div>
          {rowsL.map(([l,v])=>(<div className="cmp9-row" key={l}><span className="cmp9-lbl">{l}</span><span>{v}</span></div>))}
        </div>
        <div className="cmp9-vs"><span className="cmp9-vs-inner">VS</span></div>
        <div className="cmp9-side">
          <div className="cmp9-author">Preobražaj (Gregor)</div>
          <div className="cmp9-period">KAFKA · 1915. · APSURD + ALIJENACIJA · ← H08</div>
          {rowsR.map(([l,v])=>(<div className="cmp9-row" key={l}><span className="cmp9-lbl">{l}</span><span>{v}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — Camus odgovara Kafki</div>
        <div className="box-int-txt">Apsurd se ne podnosi pasivno — nego se transformira u pobunu. Gregor umire pasivan. Meursault umire <strong>pobunjen</strong>. Oba su žrtve apsurda — ali Camus nudi izlaz koji Kafka ne vidi. Filozofski: Kafka prikazuje apsurd kao zatvor, Camus kao polaznu točku slobode.</div>
      </div>
    </>
  );
}

/* ============================================================
   [9] ACCORDION — 7 esejnih teza
============================================================ */
const ESEJ_TEZE_H09 = [
  {br:'T1',naslov:'Apsurd kao filozofska pozicija',tag:'APSURD · FILOZOFIJA',
   teza:'„Stranac je literarni izraz Camusove filozofije apsurda. Meursault je prvi apsurdni junak — onaj koji vidi besmisao i ne pretvara se. Roman radi paralelno s Mitom o Sizifu (isti ciklus, 1942.)."',
   args:['Apsurd = razilazak između čovjekove potrebe za smislom i šutnje svijeta — ne u čovjeku, ne u svijetu, nego u susretu','Meursault živi apsurd doslovno: ne laže, ne pretpostavlja smisao, reagira direktno na fizičke podražaje','Paralela s Mitom o Sizifu: „treba zamisliti Sizifa sretnim" — apsurd nije poraz, nego polazna točka pobune'],
   scena:'Finale: Meursault eksplodira na svećenika, „otvara se nježnoj ravnodušnosti svijeta." Apsurd prihvaćen, ne poražavajući.'},
  {br:'T2',naslov:'Meursault — lik koji ne laže',tag:'ISKRENOST · MORALNI ZLOČIN',
   teza:'„Meursault odbija društvene konvencije jezika. Ne kaže ono što se očekuje, čak ni radi svog spasa. Iskrenost postaje moralni zločin."',
   args:['Kad pitaju je li plakao na sahrani — kaže iskreno. Ni laž, ni izgovor — i upravo to je optužnica','Suđenje kažnjava ne ubojstvo, nego načine izražavanja: tužitelj gradi sliku „čudovišta bez duše" iz praznih prostora u Meursaultovom jeziku','Paralela s Gregorom (H08): i Gregor je autsajder kojeg društvo kažnjava — ali Gregor nema glas, Meursault odbija koristiti konvencionalni glas'],
   scena:'Tužiteljev govor: „Optužujem ovog čovjeka da je sahranio majku s kriminalnim srcem." Ubojstvo je manje važno od sahrane.'},
  {br:'T3',naslov:'Sunce kao aktivan akter',tag:'PRIRODA · MEDITERAN',
   teza:'„Priroda u Strancu nije pozadina, ona djeluje. Žarko alžirsko sunce pritišće, otežava misao, odlučuje. Meursault ubija Arapina zbog sunca."',
   args:['Sunce je prisutno na sahrani majke, na plaži, u sudnici — uvijek kao pritisak koji oblikuje doživljaj','Mediteranska estetika: Camus se odvaja od pariškog egzistencijalizma, vraća se grčkoj misli gdje je priroda etopoetska','Sud odbija prihvatiti sunce kao objašnjenje — ali Camus ga ne nudi kao izgovor nego kao opis fizičke stvarnosti koja oblikuje odluke'],
   scena:'Ubojstvo Arapina (I/6): „I to su bila kao četiri kratka kucanja na vrata nesreće." Sunce, bljesak nožem, pucanj.'},
  {br:'T4',naslov:'Kritika pravosuđa i društvenog licemjerja',tag:'PRAVDA · TEATAR',
   teza:'„Suđenje u II. dijelu je primjer kako pravda postaje predstava. Meursaultu sude ne za ubojstvo, nego za način na koji se ponašao na majčinu pogrebu."',
   args:['Tužbeni spis se bavi: nije plakao, pio kavu, gledao komediju, vodio ljubav — sve u danima oko sahrane. Ubojstvo je sporedna tema','Camusov anti-totalitarian impuls: svako društvo koje kažnjava tuđost kreće prema totalitarizmu — tko se ne uklapa = zločinac','Pravni sustav = teatar morala: tužitelj, branitelj, suci igraju uloge. Meursault ne želi sudjelovati u toj igri — i gubi'],
   scena:'Tužiteljev performans: „Taj čovjek je prazan u duhu kao i u srcu." Meursault se skoro nasmije — jer je to apsurdno.'},
  {br:'T5',naslov:'Bijela proza kao filozofski izraz',tag:'STIL · ÉCRITURE BLANCHE',
   teza:'„Camus razvija écriture blanche — kratke rečenice, konkretni glagoli, minimum metafora, prvo lice u prošlom nesvršenom. Stil prati sadržaj. Tek u finalu stil eksplodira."',
   args:['Bijela proza = nulti stupanj pisanja (Barthes): bez retorike, bez metafora, registriranje, ne interpretiranje','Meursaultov jezik je doživljajan: „Vožnja je bila duga." Bez emocionalne ocjene — čitatelj mora sam zaključiti','Finale (svećenikov prizor): duge rečenice, retorički period, emocionalni izboj. Stilska promjena = filozofska promjena.'],
   scena:'Posljednje poglavlje: „Otvorio sam se prvi put nježnoj ravnodušnosti svijeta." Jedina metaforična rečenica u romanu.'},
  {br:'T6',naslov:'Dva dijela — kompozicijska simetrija',tag:'KOMPOZICIJA · STRUKTURA',
   teza:'„Kompozicijski rez je eksplicitan: I. dio prati Meursaulta u životu — doživljajno. II. dio prati suđenje — refleksivno. Granica: četiri pucnji na plaži."',
   args:['I. dio: tijelo, sunce, more, ljubav, dosada — doživljavanje bez komentara','II. dio: jezik, institucije, sjećanja — Meursault mora rekonstruirati sebe za druge','Četiri pucnja = rascjep. Meursault prelazi iz čovjeka-doživljavatelja u čovjeka-optuženika. Nije ista osoba.'],
   scena:'„Četiri kratka kucanja na vrata nesreće" — zadnja rečenica I. dijela. Zvuči kao ukucavanje čavala u lijes.'},
  {br:'T7',naslov:'Pobuna kao oslobođenje',tag:'POBUNA · SLOBODA · KRAJ',
   teza:'„Meursault pronalazi slobodu tek kad se suočava sa smrću. Sukob sa svećenikom je jedina prava emocionalna scena. Apsurd postaje prihvaćen. Camus odgovara Kafki: apsurd se ne podnosi pasivno."',
   args:['Svećenik = ponuda transcendencije, smisla, Boga. Meursault eksplodira jer ga to ne zanima — to je autentična reakcija, ne cinizam','„Otvaram se prvi put nježnoj ravnodušnosti svijeta" — konačno prihvaćanje apsurda kao smirenja, ne poraza','„Krikovi mržnje" na pogubljenju — Meursault ih želi. Paradoks: mržnja potvrđuje da je živio iskreno. Nije bio nevidan.'],
   scena:'Eksplozija na svećenika: „Što me briga za Božju dobrotu i za Njegov život koji jest? Živjelo se kao da se živjelo."'},
];

export function AccordionEsejTezeH09() {
  return (
    <>
      <style>{CSS_SC9}</style>
      <div className="sc9s">
        {ESEJ_TEZE_H09.map((t,idx)=>(
          <details className="sc9" key={t.br}>
            <summary className="sc9-sum">
              <div className="sc9-num" style={{fontSize:13,color:TEZA_COLORS9[idx]}}>{t.br}</div>
              <div className="sc9-ttl">{t.naslov}</div>
              <span className="sc9-meta" style={{color:TEZA_COLORS9[idx],borderColor:`${TEZA_COLORS9[idx]}55`}}>{t.tag}</span>
              <span className="sc9-chev" style={{color:TEZA_COLORS9[idx]}}>▾</span>
            </summary>
            <div className="sc9-body">
              <div className="sc9-quote">{t.teza}</div>
              <div className="sc9-why"><b>Argumenti:</b></div>
              <div className="sc9-args">
                {t.args.map((a,i)=>(
                  <div className="sc9-arg" key={i} style={{borderLeftColor:TEZA_COLORS9[idx]}}>
                    <span className="sc9-arg-num" style={{color:TEZA_COLORS9[idx]}}>({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc9-note">
                <strong style={{color:'var(--bronze)',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1,fontStyle:'normal'}}>KLJUČNA SCENA: </strong>{t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
