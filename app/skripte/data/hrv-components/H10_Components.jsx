/* ============================================================
   H10 — Postmoderna · Umberto Eco · Pavao Pavličić
   ⚠️  NCVVO napomena: Postmoderna nije u katalogu direktno.
   Pojmovi se pojavljuju u teoriji književnosti i kao esejski
   alat za obvezatna djela (Kafka, Camus, Dostojevski...).

   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

import { useState } from 'react';

/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_SECHDR10 = `
  .sh10{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh10-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh10-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;
function SH10({label,style}){
  return(
    <><style>{CSS_SECHDR10}</style>
    <div className="sh10" style={style}>
      <div className="sh10-line"/><div className="sh10-badge">{label}</div><div className="sh10-line"/>
    </div></>
  );
}

const CSS_AC10 = `
  .ac10{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac10:hover{border-color:var(--bd-br)}
  .ac10-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac10-mono{width:52px;height:52px;border-radius:var(--r3);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0}
  .ac10-meta{flex:1;min-width:0}
  .ac10-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac10-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac10-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac10-body{padding:18px 22px}
  .ac10-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac10-body p:last-child{margin-bottom:0}
  .ac10-body strong{color:var(--t1)}
  .ac10-body em{color:var(--gold);font-style:italic}
  .ac10-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac10-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac10-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac10-work:last-child{border-bottom:none;padding-bottom:0}
  .ac10-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac10-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac10-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac10-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  @media(max-width:600px){.ac10-hdr{flex-direction:column;gap:10px}.ac10-mono{width:42px;height:42px;font-size:18px}.ac10-body{padding:14px 16px}.ac10-name{font-size:15px}}
`;

const CSS_TL10 = `
  .tl10{position:relative;padding:20px 0;margin:18px 0}
  .tl10::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl10-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl10-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl10-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl10-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl10-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl10-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl10-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC10 = `
  .sc10s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc10{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc10:hover{border-color:var(--bd-br)}
  .sc10[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc10-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc10-sum::-webkit-details-marker{display:none}
  .sc10-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc10[open] .sc10-chev{transform:rotate(180deg);color:var(--gold)}
  .sc10-num{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);min-width:32px}
  .sc10[open] .sc10-num{color:var(--gold)}
  .sc10-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc10-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc10-body{padding:0 16px 16px}
  .sc10-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:12px}
  .sc10-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
  .sc10-col{padding:10px 12px;border-radius:var(--r2)}
  .sc10-col-lbl{font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:1px;margin-bottom:5px}
  .sc10-col-txt{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
  .sc10-ostalo{padding:8px 12px;background:var(--ele);border-radius:var(--r2);margin-bottom:8px}
  .sc10-ostalo-lbl{font-family:var(--mono);font-size:8px;font-weight:700;letter-spacing:1px;color:var(--t3);margin-bottom:4px}
  .sc10-ostalo-txt{font-family:var(--serif);font-size:12px;color:var(--t3);line-height:1.45}
  .sc10-note{padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .sc10-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc10-meta{display:none}
    .sc10-body{padding:0 12px 12px}
    .sc10-grid{grid-template-columns:1fr}
  }
`;

const CSS_CMP10 = `
  .cmp10{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp10-side{padding:18px 20px;background:var(--sur)}
  .cmp10-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp10-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp10-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp10-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp10-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp10-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp10-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:62px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp10{grid-template-columns:1fr}.cmp10-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp10-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT10 = `
  .stat10{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 20px}
  .stat10-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat10-card:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px)}
  .stat10-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat10-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat10-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat10-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat10{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE10 = `
  .hq10{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(107,155,255,.02));position:relative;overflow:hidden}
  .hq10::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq10::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,rgba(107,155,255,.5),transparent)}
  .hq10-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:rgba(107,155,255,.9);margin-bottom:10px}
  .hq10-text{font-family:var(--display);font-size:16px;font-weight:700;color:var(--t1);line-height:1.45;font-style:italic;margin-bottom:10px}
  .hq10-text em{color:#e9b446;font-style:normal}
  .hq10-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq10-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq10{padding:18px 18px 18px 22px}.hq10-text{font-size:14px}}
`;

const CSS_POP10 = `
  .pop10{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop10-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop10-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop10-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop10-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop10-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop10{grid-template-columns:1fr}}
`;

const TEZA_COLORS10 = ['#e9b446','#3ecf6e','#DC322F','#6b9bff','#f97316','#e879f9','#06b6d4'];

/* ============================================================
   [1] HERO QUOTE — Eco o intertekstualnosti
============================================================ */
export function HeroQuotePostmoderna() {
  return (
    <>
      <style>{CSS_QUOTE10}</style>
      <div className="hq10">
        <div className="hq10-eye">DEFINICIJA INTERTEKSTUALNOSTI U JEDNOJ REČENICI</div>
        <div className="hq10-text">
          {`„Knjige uvijek govore o `}<em>{`drugim knjigama`}</em>{`,
          a svaka priča priča već ispričanu priču."`}
        </div>
        <div className="hq10-body">Eco, Postille uz Ime ruže (1983.) — naknadan esej u kojemu objašnjava vlastiti roman. Ključna teza postmoderne: originalnost nije moguća ni potrebna. Svaki tekst je mreža tragova prethodnih tekstova. <strong style={{color:'var(--t1)'}}>Za esej: naučiti napamet.</strong></div>
        <div className="hq10-source">UMBERTO ECO · POSTILLE UZ IME RUŽE · 1983. · TEMELJNA TEZA POSTMODERNE</div>
      </div>
    </>
  );
}

/* ============================================================
   [2] COMPARE STRIP — Postmoderna vs Moderna
============================================================ */
export function ComparePostModModerna() {
  const rows = [
    ['Stav',          'Kriza — subjekt se raspada',     'Igra — subjekt se umnožava'],
    ['Originalnost',  'Traži se, teži se njoj',         'Nije moguća ni potrebna'],
    ['Istina',        'Jedna — ali nedostižna',         'Višestruka — ovisno o čitatelju'],
    ['Autor',         'Glas koji se traži',             '„Autor je mrtav" (Barthes)'],
    ['Forma',         'Eksperiment, fragmentacija',     'Pastiš, parodija, citati, igra'],
    ['Tradicija',     'Bunt, raskid',                   'Dijalog, ironija, hommage'],
    ['Ključni tekst', 'Preobražaj, Stranac (H08/H09)', 'Ime ruže, Večernji akt (H10)'],
  ];
  return (
    <>
      <style>{CSS_CMP10+CSS_SECHDR10}</style>
      <SH10 label="01b · Postmoderna vs Moderna — bridge H08/H09→H10" style={{marginTop:24}}/>
      <div className="cmp10">
        <div className="cmp10-side left">
          <div className="cmp10-author">🌀 Moderna</div>
          <div className="cmp10-period">1890.–1960. · KAFKA · CAMUS · H08/H09</div>
          {rows.map(([l,a])=>(<div className="cmp10-row" key={l}><span className="cmp10-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp10-vs"><span className="cmp10-vs-inner">→</span></div>
        <div className="cmp10-side">
          <div className="cmp10-author">🎭 Postmoderna</div>
          <div className="cmp10-period">1960.–danas · ECO · PAVLIČIĆ · H10</div>
          {rows.map(([l,,r])=>(<div className="cmp10-row" key={l}><span className="cmp10-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — postmoderna nije pesimistična</div>
        <div className="box-int-txt">Moderna pita: „ima li smisla?&quot; — i trpi zbog odgovora. Postmoderna pita isto — i <strong>smije se</strong>. Kafka i Camus su ozbiljni pred apsurdom. Eco i Pavličić se igraju s njim. Isti problem, drugačiji stav.</div>
      </div>
    </>
  );
}

/* ============================================================
   [3] AUTHOR CARD — Umberto Eco (context="l0" ili "l1")
============================================================ */
export function AuthorCardEco({context='l0'}) {
  return (
    <>
      <style>{CSS_AC10}</style>
      <div className="ac10">
        <div className="ac10-hdr">
          <div className="ac10-mono" style={{background:'linear-gradient(135deg,#1a1a0a,#3a3a1a)',boxShadow:'0 4px 20px rgba(180,160,50,.25)'}}>E</div>
          <div className="ac10-meta">
            <div className="ac10-name">Umberto Eco</div>
            <div className="ac10-dates">ALESSANDRIA · 1932. – MILANO · 2016.</div>
            <div className="ac10-tags">
              <span className="pill p-br" style={{fontSize:10}}>semiotika</span>
              <span className="pill p-t" style={{fontSize:10}}>Ime ruže</span>
              <span className="pill p-go" style={{fontSize:10}}>teorija u praksi</span>
              {context==='l1'&&<span className="pill p-r" style={{fontSize:10}}>50M primjeraka</span>}
            </div>
          </div>
        </div>
        <div className="ac10-body">
          <p>Profesor semiotike na Sveučilištu u Bologni koji piše prvi roman u <strong>48. godini</strong> — da pokaže vlastitu teoriju o postmoderni i otvorenom djelu u praksi. Eco je sam teoretičar kojeg citira svaki udžbenik postmoderne: roman je teorija utjelovljena u priči.</p>
          <p><em>Ime ruže</em> (1980.) — 50+ milijuna prodanih primjeraka, preveden na 40+ jezika. Filmska adaptacija 1986. — Sean Connery kao Vilim od Baskervillea. Eco je jedini akademski semiotičar koji je istovremeno bio globalni bestseller autor.</p>
          <div className="ac10-works">
            <div className="ac10-works-lbl">Ključna djela</div>
            <div className="ac10-work">
              <div className="ac10-badge">🏰</div>
              <div>
                <div className="ac10-work-title">Ime ruže (Il nome della rosa)</div>
                <div className="ac10-work-meta">1980. · POSTMODERNI KRIMIĆ · 7 DANA / 7 UBOJSTAVA</div>
                <div className="ac10-work-desc">Benediktinski samostan, 1327. Vilim od Baskervillea (= Sherlock Holmes) + Adso (= Watson) istražuju ubojstva. Tajanstvena biblioteka. Postmoderni pojmovi u akciji: metafikcija, intertekstualnost, pastiš.</div>
              </div>
            </div>
            <div className="ac10-work">
              <div className="ac10-badge">📜</div>
              <div>
                <div className="ac10-work-title">Postille uz Ime ruže · Otvoreno djelo</div>
                <div className="ac10-work-meta">1983. + 1962. · TEORIJA</div>
                <div className="ac10-work-desc">Postille = Eco objašnjava vlastiti roman — obavezno za razumijevanje. Otvoreno djelo = teorija da čitatelj dovršava tekst — temelj postmoderne interpretacije.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [4] TIMELINE — Postmoderna u Europi i Hrvatskoj
============================================================ */
const POSTMOD_TL = [
  {date:'1967.', major:false, title:'Barthes — Smrt autora',                       desc:'„Autor je mrtav" — tekst ne pripada autoru nego čitatelju. Svaki čitatelj piše vlastiti tekst čitanjem. Julia Kristeva iste godine uvodi pojam intertekstualnosti.'},
  {date:'1979.', major:true,  title:'Lyotard — Postmoderno stanje',                desc:'Jean-François Lyotard definira postmodernu kao nevjericu prema velikim naracijama (marksizam, napredak, religija). „Svaka Velika Priča je sumnjiva." Filozofski manifest epohe.'},
  {date:'1980.', major:true,  title:'Umberto Eco — Ime ruže',                      desc:'Talijanski semiotičar piše prvi roman u 48. god. Teorija postmoderne u akciji: metafikcija, intertekstualnost, pastiš. 50M primjeraka. Postmoderna postaje mainstream.'},
  {date:'1981.', major:true,  title:'Pavličić — Večernji akt + Ugrešić — Štefica Cvek', desc:'Iste godine dvije ključne knjige HR postmoderne. Pavličić: borgesovska fantastika u Zagreb. Ugrešić: žanrovski romani + visoka literatura. HR postmoderna ima datum.'},
  {date:'1984.', major:false, title:'Quorum generacija — časopis',                  desc:'Pokretanje časopisa Quorum — glasilo HR postmoderne proze. Nova generacija pisaca: Bagić, Mićanović. Postmoderna u HR izlazi iz usamljenih eksperimenata u generacijski pokret.'},
  {date:'1986.', major:false, title:'Film Ime ruže — Sean Connery',                desc:'Jean-Jacques Annaud adaptira roman. Connery kao Vilim. Film globalizira Ecov roman. Postmoderna ironija: knjiga o knjigama postaje slika.'},
  {date:'2013.', major:false, title:'Kamel Daoud — Meursaultova istraga',          desc:'Alžirski pisac piše postmodernu repliku na Camusovog Stranca (H09): daje glas Arapinu, imenuje ga Musa. Intertekstualnost + postkolonijalna kritika. Postmoderna živi dalje.'},
];

export function TimelinePostmoderna() {
  return (
    <>
      <style>{CSS_TL10+CSS_SECHDR10}</style>
      <SH10 label="04b · Postmoderna — kronologija Europe i Hrvatske"/>
      <div className="tl10">
        {POSTMOD_TL.map((ev,i)=>(
          <div className="tl10-ev" key={i}>
            <div className={`tl10-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl10-body">
              <div className="tl10-title">{ev.title}</div>
              <div className="tl10-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [5] POP KULTURA — Postmoderna danas
============================================================ */
const POP_POSTMOD = [
  {film:'🎬 Tarantino — Pulp Fiction (1994.)',           title:'Pastiš + miješanje žanrova u akciji',   source:'Pulp Fiction = pastiš noir filma, gangsterskog žanra i grindhousei. Nelinearna struktura, citati iz pop-kulture, visoko i nisko istodobno. Tarantino je živući primjer svakog postmodernog pojma.'},
  {film:'📺 Lost (2004.–2010.)',                          title:'Intertekstualnost + otvoreni kraj',      source:'Likovi se zovu John Locke, Rousseau, Hume, Boone — svaki je filozofska referenca. Serijal završava otvorenim krajem koji publika interpretira desetljećima. Postmoderna TV drama.'},
  {film:'🎬 Everything Everywhere (2022.)',               title:'Fragmentacija identiteta + multiverse', source:'Oscar film koji postmoderno tretira identitet, narativni rez i intertekstualnost. Evelyn Wang je svaka moguća žena istovremeno — postmoderna teza o nestalnom subjektu.'},
  {film:'📺 Rick i Morty (2013.–)',                       title:'Metafikcija u animiranoj seriji',       source:'Likovi znaju da su u seriji, komentiraju vlastitu pripovijednu strukturu, parodiraju žanrove. Rick i Morty je najpopularnija metafikcija na TV-u — i učionica postmodernih pojmova.'},
  {film:'📖 Borges — preteča svega',                     title:'Jorge Luis Borges (1899.–1986.)',       source:'Argentinski pisac koji je izmislio postmodernu 20 godina prije termina. Babilonska biblioteka, Vrt razgranatih staza, izmišljene enciklopedije. Eco, Pavličić, Calvino — svi idu od Borgesa.'},
  {film:'📖 Štefica Cvek (1981.) — HR primjer',          title:'Dubravka Ugrešić + pop kultura',        source:'Ugrešić piše ljubavni roman koji je simultano krojački priručnik. Poglavlja su šivaći uzorci, citati iz ženskih časopisa ulaze ravnopravno u tekst. HR postmoderna u najpristupačnijem obliku.'},
];

export function PopKulturaPostmoderna() {
  return (
    <>
      <style>{CSS_POP10+CSS_SECHDR10}</style>
      <SH10 label="Postmoderna u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="pop10">
        {POP_POSTMOD.map((p,i)=>(
          <div className="pop10-card" key={i}>
            <div className="pop10-film">{p.film}</div>
            <div className="pop10-title">{p.title}</div>
            <div className="pop10-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [6] STAT CARDS — Ime ruže
============================================================ */
export function StatCardsImeRuze() {
  const stats = [
    {ico:'📅', val:'1980.',    lbl:'Objava',             sub:'Eco ima 48 godina'},
    {ico:'📖', val:'7 dana',   lbl:'Radnja',             sub:'7 dana · 7 ubojstava'},
    {ico:'💰', val:'50M+',     lbl:'Prodano',            sub:'40+ jezika, film 1986.'},
    {ico:'🔎', val:'Vilim',    lbl:'= Sherlock Holmes',  sub:'Adso = Watson'},
  ];
  return (
    <>
      <style>{CSS_STAT10}</style>
      <div className="stat10">
        {stats.map(s=>(
          <div className="stat10-card" key={s.lbl}>
            <span className="stat10-ico">{s.ico}</span>
            <div className="stat10-val">{s.val}</div>
            <div className="stat10-lbl">{s.lbl}</div>
            <div className="stat10-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [7] AUTHOR CARD MINI — Pavao Pavličić
============================================================ */
export function AuthorCardPavličić() {
  return (
    <>
      <style>{CSS_AC10}</style>
      <div className="ac10" style={{margin:'16px 0'}}>
        <div className="ac10-hdr" style={{padding:'14px 18px 12px'}}>
          <div className="ac10-mono" style={{background:'linear-gradient(135deg,#0a1a2a,#1a3a5a)',width:44,height:44,fontSize:18,boxShadow:'0 4px 16px rgba(30,80,140,.25)'}}>P</div>
          <div className="ac10-meta">
            <div className="ac10-name" style={{fontSize:15}}>Pavao Pavličić</div>
            <div className="ac10-dates">VUKOVAR · 1946. –</div>
            <div className="ac10-tags">
              <span className="pill p-br" style={{fontSize:9}}>HR postmoderna</span>
              <span className="pill p-t" style={{fontSize:9}}>borgesovska linija</span>
              <span className="pill p-go" style={{fontSize:9}}>Večernji akt 1981.</span>
            </div>
          </div>
        </div>
        <div className="ac10-body" style={{padding:'12px 18px'}}>
          <p style={{fontSize:13}}>Profesor komparativne književnosti u Zagrebu, autor 40+ knjiga — romana, krimića, memoara, teorijskih radova. Ključni pisac <strong>hrvatske postmoderne</strong>: nastavlja borgesovsku liniju (nemogući predmeti, labirinti, igra sa stvarnošću) u domaćem kontekstu.</p>
          <p style={{fontSize:13,marginBottom:0}}><em>Večernji akt</em> (1981.) — godinu dana nakon Ecovog Ima ruže — postavlja iste postmoderne mehanizme u <strong>zagrebački kontekst</strong>. Protagonist je slikar, središnji predmet je slika koja stari. Mehanizmi: žanrovski hibrid, borgesovska fantastika, implicitna metafikcija, otvoreni kraj.</p>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [8] COMPARE STRIP — Eco vs Pavličić
============================================================ */
export function CompareEcoPavličić() {
  const rows = [
    ['Tradicija',    'Talijanska akademska postmoderna',  'HR borgesovska linija'],
    ['Smještaj',     'Benediktinski samostan, 1327.',     'Zagreb, 1960-e'],
    ['Protagonist',  'Vilim — bivši inkvizitor, logičar', 'Krsto Brodnjak — slikar, opsesivac'],
    ['Središnji obj.','Tajanstvena knjiga (Aristotel)',    'Slika koja stari'],
    ['Metafikcija',  'Eksplicitna — izmišljeni rukopis',  'Implicitna — roman o slici'],
    ['Intertekst',   'Holmes, Borges, Aristotel — navedeni','Borges — prisutan bez citiranja'],
    ['Kraj',         'Požar biblioteke — istina izgori',  'Otvoreni — nema odgovora'],
    ['Opseg',        'Bestseller, 50M primjeraka',        'Kanonski HR roman, manji doseg'],
  ];
  return (
    <>
      <style>{CSS_CMP10}</style>
      <div className="cmp10">
        <div className="cmp10-side left">
          <div className="cmp10-author">Umberto Eco</div>
          <div className="cmp10-period">ITALIJA · IME RUŽE · 1980.</div>
          {rows.map(([l,a])=>(<div className="cmp10-row" key={l}><span className="cmp10-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp10-vs"><span className="cmp10-vs-inner">VS</span></div>
        <div className="cmp10-side">
          <div className="cmp10-author">Pavao Pavličić</div>
          <div className="cmp10-period">HRVATSKA · VEČERNJI AKT · 1981.</div>
          {rows.map(([l,,r])=>(<div className="cmp10-row" key={l}><span className="cmp10-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — najjači potez</div>
        <div className="box-int-txt">Usporediti oba romana u jednom eseju znači pokazati da razumiješ <strong>pojam</strong>, a ne samo djelo. To je razlika između dobrog i odličnog odgovora. Eco radi eksplicitno — Pavličić implicitno. Oba postižu isti učinak.</div>
      </div>
    </>
  );
}

/* ============================================================
   [9] ACCORDION — 7 esejnih teza
============================================================ */
const ESEJ_TEZE_H10 = [
  {br:'T1',naslov:'Intertekstualnost kao ključ tumačenja',tag:'INTERTEKSTUALNOST',
   teza:'„Autor X gradi tekst na mreži referenci — svako čitanje pretpostavlja prepoznavanje prethodnih tekstova."',
   eco:'Vilim od Baskervillea → Sherlock Holmes; Jorge od Burgosa → Borges; Adso → Watson. Roman koji ne prepoznaješ čitaš plošno — ali funkcionira i bez prepoznavanja (otvoreno djelo).',
   pavl:'Borgesovska fantastika bez izravnog citiranja — slika koja stari je motiv koji Borges koristi u drukčijim oblicima. Pavličić ne imenuje uzor, ali ga nosi.',
   ostalo:'Krleža Glembajevi (Ibsen, Shakespeare), Marinković Kiklop (mitovi), Matoš (francuski simbolizam).',
   scena:'Eco: „Finis Africae" — skrivena soba = Borgesova Babilonska biblioteka. Čitatelj koji prepoznaje dobiva dodatni sloj značenja.'},
  {br:'T2',naslov:'Metafikcija — razotkrivanje konstrukcije',tag:'METAFIKCIJA',
   teza:'„Djelo X ne skriva da je konstrukt — pokazuje vlastiti mehanizam nastanka."',
   eco:'Izmišljeni pronađeni rukopis: Eco tvrdi da je pronašao francuski prijevod Adsinog latinskog teksta. Akademske bilješke, fiktivni izdavači. Čitatelj sekundu vjeruje — to je metafikcija.',
   pavl:'Implicitna metafikcija: protagonist je slikar, tema je kako djelo djeluje na primatelja. Pavličić prešutno pita — roman čini isto što i slika s Krstom.',
   ostalo:'Kafka Preobražaj (prekinute scene bez uzroka), Camus Stranac (hladni ton kao stilski komentar), Marinković Kiklop (višestruke razine fikcije).',
   scena:'Eco, predgovor: „Pronašao sam stari rukopis..." — čitatelj već u prvoj stranici sudjeluje u igri istina/laž.'},
  {br:'T3',naslov:'Fragmentacija kao odraz modernog subjekta',tag:'FRAGMENTACIJA',
   teza:'„Strukturna fragmentacija teksta odražava ontološku fragmentaciju modernog subjekta."',
   eco:'Roman je organiziran po danima i kanonskim satima — ali unutar toga priče se granaju, prekidaju, vraćaju. Red je prividan.',
   pavl:'Večernji akt kombinira detektivsku prozu, fantastiku i psihološki roman bez jasnih granica — čitatelj ne zna u koji žanr ulazi.',
   ostalo:'Kafka Preobražaj (prekinute radnje), Krleža Povratak Filipa Latinovicza (fragmentirani unutarnji monolog), Šimić (kratki stih).',
   scena:'Eco: biblioteka kao labirint — fizički prostor koji odgovara fragmentiranom znanju. Karta biblioteke ne odgovara iskustvu kretanja kroz nju.'},
  {br:'T4',naslov:'Nepouzdani pripovjedač kao znak epohe',tag:'NEPOUZDANI PRIPOVJEDAČ',
   teza:'„Pripovjedač u djelu X ne jamči istinu — njegov pogled je subjektivan, fragmentaran, možda lažan."',
   eco:'Adso piše s 80+ godina o događajima iz mladosti. Kaže: „sada više ne znam je li to što pamtim istina ili san." Nepouzdanost je tematizirana, ne skrivena.',
   pavl:'Krsto Brodnjak ne može biti siguran vidi li sliku kako stari ili je to njegova opsesija. Granica između stvarnosti i percepcije je nejasna.',
   ostalo:'Kafka (Gregor kao jedini filter), Camus Stranac (Meursault — emotivno nepouzdan), Dostojevski (Raskoljnikov).',
   scena:'Eco: Adso zaključuje krivo nekoliko puta — Vilim ga ispravlja. Čitatelj slijedi krivog detektiva.'},
  {br:'T5',naslov:'Ironija — nemogućnost jednoznačnog čitanja',tag:'POSTMODERNA IRONIJA',
   teza:'„Djelo X koristi ironiju ne da ismije, nego da pokaže nemogućnost jednoznačnog tumačenja."',
   eco:'Eco piše pravi krimić koji istovremeno jest i nije krimić. Detektiv ne uspijeva. Biblioteka izgori. Istina nije dostupna. I to je poanta.',
   pavl:'Večernji akt je krimić bez rješenja. Čitatelj koji očekuje odgovor je frustriran. Čitatelj koji prihvaća igru — nagrađen.',
   ostalo:'Matoš novele (ironija prema malograđanskom mentalitetu), Marinković Kiklop (gorka ironija prema egzistenciji), Krleža Balade Petrice Kerempuha.',
   scena:'Eco, finale: „Nema reda. Ja sam vidio lažni red i trčao za njim." Vilim — detektiv koji dekonstruira vlastitu metodu.'},
  {br:'T6',naslov:'Miješanje žanrova kao svjesna strategija',tag:'ŽANROVSKI HIBRID',
   teza:'„Djelo X krši granice žanrova — to nije slabost nego namjerna postmoderna strategija."',
   eco:'Povijesni roman + detektivska proza + filozofska rasprava + teološka debata. Aristotelova Poetika, Tomistička teologija i krimić u istom tekstu.',
   pavl:'Detektivska proza + fantastična proza + psihološki roman + roman o umjetnosti — istovremeno, bez deklariranja.',
   ostalo:'Krleža Glembajevi (drama + roman), Marinković Kiklop (roman + esej + lirski fragmenti), Kafka (realizam + alegorija).',
   scena:'Eco: rasprava o smijehu (Aristotelova izgubljena Poetika II) = filozofski esej unutar krimića. Čitatelji filozofije i krimića čitaju isti tekst drugačije.'},
  {br:'T7',naslov:'Otvoreni kraj — odbijanje konačne istine',tag:'OTVORENI KRAJ',
   teza:'„Djelo X ne zatvara se jednoznačnim razrješenjem — otvoreni kraj je dio poruke."',
   eco:'Biblioteka izgori, Adso odlazi. Tajanstvena knjiga je zauvijek izgubljena. „Ime ruže" — rosa postoji samo u imenu, ne u stvari. Smisao je samo u jeziku.',
   pavl:'Tko je žena na slici? Zašto stari? Pavličić ostavlja sve otvoreno. U postmoderni: to je točno ono što treba. Čitatelj nosi pitanje sa sobom.',
   ostalo:'Kafka Preobražaj (smrt bez katarze), Camus Stranac (pristajanje bez razrješenja), Marinković Kiklop (Melkior u statusu quo).',
   scena:'Eco, zadnja stranica: Adso na ruševinama samostana skuplja ostatke spaljenih knjiga. Fragmenti bez smisla — i on ih pamti. Memorija kao jedina istina.'},
];

export function AccordionEsejTezeH10() {
  return (
    <>
      <style>{CSS_SC10}</style>
      <div className="box-int" style={{marginBottom:14}}>
        <div className="box-int-lbl">📌 Kako koristiti ove teze</div>
        <div className="box-int-txt">Svaka teza radi za <strong>Eco i Pavličića</strong> direktno, ali i za obvezatna djela (Kafka, Camus, Dostojevski, Krleža) kao dodatni analitički sloj. Postmoderni pojam + citat iz obvezatnog djela = automatski bonus na eseju.</div>
      </div>
      <div className="sc10s">
        {ESEJ_TEZE_H10.map((t,idx)=>(
          <details className="sc10" key={t.br}>
            <summary className="sc10-sum">
              <div className="sc10-num" style={{fontSize:13,color:TEZA_COLORS10[idx]}}>{t.br}</div>
              <div className="sc10-ttl">{t.naslov}</div>
              <span className="sc10-meta" style={{color:TEZA_COLORS10[idx],borderColor:`${TEZA_COLORS10[idx]}55`}}>{t.tag}</span>
              <span className="sc10-chev" style={{color:TEZA_COLORS10[idx]}}>▾</span>
            </summary>
            <div className="sc10-body">
              <div className="sc10-quote">{t.teza}</div>
              <div className="sc10-grid">
                <div className="sc10-col" style={{background:'rgba(232,201,122,.04)',border:'1px solid rgba(232,201,122,.15)'}}>
                  <div className="sc10-col-lbl" style={{color:'var(--gold)'}}>ECO — IME RUŽE</div>
                  <div className="sc10-col-txt">{t.eco}</div>
                </div>
                <div className="sc10-col" style={{background:'rgba(107,155,255,.04)',border:'1px solid rgba(107,155,255,.15)'}}>
                  <div className="sc10-col-lbl" style={{color:'#6b9bff'}}>PAVLIČIĆ — VEČERNJI AKT</div>
                  <div className="sc10-col-txt">{t.pavl}</div>
                </div>
              </div>
              <div className="sc10-ostalo">
                <div className="sc10-ostalo-lbl">OSTALA OBVEZATNA DJELA</div>
                <div className="sc10-ostalo-txt">{t.ostalo}</div>
              </div>
              <div className="sc10-note">
                <strong style={{color:'var(--bronze)',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1,fontStyle:'normal'}}>KLJUČNA SCENA: </strong>{t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
