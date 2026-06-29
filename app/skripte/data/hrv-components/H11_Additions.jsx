'use client';

import { useEffect, useState } from 'react';

const CSS_SECHDR11 = `
  .sh11{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh11-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh11-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;

function SH11({ label, style }) {
  return (
    <>
      <style>{CSS_SECHDR11}</style>
      <div className="sh11" style={style}>
        <div className="sh11-line" />
        <div className="sh11-badge">{label}</div>
        <div className="sh11-line" />
      </div>
    </>
  );
}

const CSS_TL11 = `
  .tl11{position:relative;padding:20px 0;margin:18px 0}
  .tl11::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl11-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl11-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl11-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl11-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl11-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl11-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl11-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC11 = `
  .sc11s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc11{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc11:hover{border-color:var(--bd-br)}
  .sc11[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc11-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc11-sum::-webkit-details-marker{display:none}
  .sc11-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc11[open] .sc11-chev{transform:rotate(180deg);color:var(--gold)}
  .sc11-num{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);min-width:32px}
  .sc11[open] .sc11-num{color:var(--gold)}
  .sc11-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc11-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc11-body{padding:0 16px 16px}
  .sc11-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc11-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .sc11-why b{color:var(--t1)}
  .sc11-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc11-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc11-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .sc11-note{margin-top:10px;padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .sc11-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc11-meta{display:none}
    .sc11-body{padding:0 12px 12px}
  }
`;

const CSS_CMP11 = `
  .cmp11{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp11-side{padding:18px 20px;background:var(--sur)}
  .cmp11-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp11-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp11-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp11-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp11-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp11-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp11-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:62px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp11{grid-template-columns:1fr}.cmp11-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp11-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT11 = `
  .stat11{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 20px}
  .stat11-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat11-card:hover{border-color:rgba(220,50,47,.25);transform:translateY(-2px)}
  .stat11-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat11-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat11-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat11-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat11{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE11 = `
  .hq11{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
  .hq11::before{content:'„';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq11::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
  .hq11-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:10px}
  .hq11-text{font-family:var(--display);font-size:15px;font-weight:700;color:var(--t1);line-height:1.5;font-style:italic;margin-bottom:10px}
  .hq11-text em{color:var(--gold);font-style:normal}
  .hq11-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq11-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq11{padding:18px 18px 18px 22px}.hq11-text{font-size:13px}}
`;

const CSS_POP11 = `
  .pop11{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop11-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop11-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop11-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop11-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop11-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop11{grid-template-columns:1fr}}
`;

export function HeroQuoteMarulić() {
  return (
    <>
      <style>{CSS_QUOTE11}</style>
      <div className="hq11">
        <div className="hq11-eye">TEMELJNA REČENICA HRVATSKE KNJIŽEVNOSTI — NAPAMET</div>
        <div className="hq11-text">Historiju tuj svedoh na versih, po običaju naših <em>začinjavac</em> i jošće po zakonu onih starih poet.</div>
        <div className="hq11-body">Marulić u posveti Judite objašnjava dvije tradicije koje nastavlja: <strong style={{ color: 'var(--t1)' }}>domaće začinjavce</strong> i <strong style={{ color: 'var(--t1)' }}>stare pjesnike</strong>. Za esej: uvijek navesti uz argument o formi i kontinuitetu.</div>
        <div className="hq11-source">MARKO MARULIĆ · JUDITA (POSVETA) · 1501. · SPLIT · ČAKAVSKI EP</div>
      </div>
    </>
  );
}

const HR_REN_EVENTS = [
  { date: '1450.', major: false, title: 'Marko Marulić — Split', desc: 'Rađanje „oca hrvatske književnosti“ i početak humanističke epohe na istočnoj obali Jadrana.' },
  { date: '1501.', major: true, title: 'Judita dovršena', desc: 'Prvi veliki hrvatski ep. Alegorija otpora i temelj renesansne poetike na narodnom jeziku.' },
  { date: '1507.', major: false, title: 'Ranjinin zbornik', desc: '820 pjesama dubrovačkih petrarkista — ključni izvor za razumijevanje rane lirike.' },
  { date: '1530.', major: false, title: 'Robinja — Lucić', desc: 'Prva hrvatska drama s razrađenom radnjom; važan most prema Držićevoj dramskoj liniji.' },
  { date: '1550.', major: true, title: 'Novela od Stanca ★', desc: 'Farsa u 1 činu, 7 prizora. Obvezatno djelo 2026., pokladni kod kao ključ čitanja.' },
  { date: '1551.', major: false, title: 'Dundo Maroje', desc: 'Najstarija hrvatska prozna komedija; Dubrovnik ulazi u zrelu dramsku fazu.' },
  { date: '1556.', major: true, title: 'Ribanje + Skup', desc: 'Iste godine izlaze ključni tekstovi Hektorovića i Držića — vrhunac renesansne raznolikosti.' },
  { date: '1569.', major: false, title: 'Planine tiskane', desc: 'Prvi hrvatski roman potvrđuje zadarsku liniju renesanse i alegorijski diskurs.' },
  { date: '1584.', major: false, title: 'Vazetje Sigeta', desc: 'Krnarutić zatvara renesansni luk i otvara put prema kasnijoj epici i baroknim modelima.' },
];

export function TimelineHrRenesansa() {
  return (
    <>
      <style>{CSS_TL11}</style>
      <div className="tl11">
        {HR_REN_EVENTS.map((ev, i) => (
          <div className="tl11-ev" key={i}>
            <div className={`tl11-date${ev.major ? ' major' : ''}`}>{ev.date}</div>
            <div className="tl11-body">
              <div className="tl11-title">{ev.title}</div>
              <div className="tl11-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function CompareMarulićDržić() {
  const rows = [
    ['Grad', 'Split (čakavsko područje)', 'Dubrovnik (štokavski idiom)'],
    ['Žanr', 'Ep i humanistička proza', 'Farsa, komedija, pastorala'],
    ['Tema', 'Alegorija otpora Turcima', 'Satira dubrovačkog društva'],
    ['Ton', 'Ozbiljan i moralizatorski', 'Komičan i ironičan'],
    ['Publika', 'Lokalna + europska (lat.)', 'Dubrovačka gradska publika'],
    ['Tradicija', 'Začinjavci + antički ep', "Commedia dell'arte + Plaut"],
    ['Stih', 'Dvostruko rim. dvanaesterac', 'Dvanaesterac + proza'],
    ['Ispit', 'Judita za kontekst', 'Novela ★ obvezatno 2026.'],
  ];

  return (
    <>
      <style>{CSS_CMP11}</style>
      <SH11 label="Marulić vs Marin Držić — dva pola HR renesanse" />
      <div className="cmp11">
        <div className="cmp11-side left">
          <div className="cmp11-author">Marko Marulić</div>
          <div className="cmp11-period">SPLIT · 1450.–1524. · EPIČAR · HUMANIST</div>
          {rows.map(([l, a]) => (
            <div className="cmp11-row" key={l}>
              <span className="cmp11-lbl">{l}</span>
              <span>{a}</span>
            </div>
          ))}
        </div>
        <div className="cmp11-vs"><span className="cmp11-vs-inner">VS</span></div>
        <div className="cmp11-side">
          <div className="cmp11-author">Marin Držić</div>
          <div className="cmp11-period">DUBROVNIK · 1508.–1567. · DRAMATURG</div>
          {rows.map(([l, , r]) => (
            <div className="cmp11-row" key={l}>
              <span className="cmp11-lbl">{l}</span>
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="box-int" style={{ marginTop: 8 }}>
        <div className="box-int-lbl">Za esej — jedna rečenica</div>
        <div className="box-int-txt">Marulić je moralni epičar koji gradi nacionalni mit, Držić je satiričar koji secira društvenu svakodnevicu; obojica su ključni, ali različitim poetikama.</div>
      </div>
    </>
  );
}

const POP_DRZIC = [
  {
    film: '🕵️ Držić — mletački špijun?',
    title: 'Tajna pisma Medicijima',
    source: 'Pisma iz 1566. i dalje su predmet rasprava: politički idealizam, rizik i književnik kao akter povijesti.',
  },
  {
    film: '🎭 Dundo Maroje na repertoaru',
    title: 'Najigraniji hrv. renesansni komad',
    source: 'Kontinuirane izvedbe pokazuju da Držićev humor i društvena kritika i dalje rade na suvremenoj publici.',
  },
  {
    film: '🌆 Dubrovnik — živa scenografija',
    title: 'UNESCO i renesansna memorija',
    source: 'Prostor grada i danas čuva kontekst u kojem je nastala dubrovačka dramska tradicija.',
  },
  {
    film: '📚 Novela od Stanca danas',
    title: 'Farsa koja ne zastarijeva',
    source: 'Redateljske interpretacije mijenjaju ton, ali jezgra farse i dramske ironije ostaje ista.',
  },
  {
    film: '🎬 Nadimak „Vidra”',
    title: 'Autor kao gradski fenomen',
    source: 'Nadimak govori koliko je Držić bio prepoznat i kao književnik i kao društveni provokator.',
  },
  {
    film: '🇭🇷 Marulić u Europi',
    title: 'Latinski opus kao europski kanal',
    source: 'Institucija je omogućila europsku recepciju, dok Judita ostaje temelj nacionalnog kanona.',
  },
];

export function PopKulturaDržić() {
  return (
    <>
      <style>{CSS_POP11}</style>
      <SH11 label="Marin Držić i HR renesansa danas" style={{ marginTop: 24 }} />
      <div className="pop11">
        {POP_DRZIC.map((p, i) => (
          <div className="pop11-card" key={i}>
            <div className="pop11-film">{p.film}</div>
            <div className="pop11-title">{p.title}</div>
            <div className="pop11-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function StatCardsNovelaStan() {
  const stats = [
    { ico: '📅', val: '1550.', lbl: 'Godina', sub: 'Dubrovačke poklade' },
    { ico: '🎭', val: '1 čin', lbl: 'Kompozicija', sub: '7 prizora · farsa' },
    { ico: '🧓', val: 'Stanac', lbl: 'Lik', sub: 'naivni seljak · žrtva' },
    { ico: '💧', val: 'Voda mladosti', lbl: 'Motiv', sub: 'farsalna prevara' },
  ];

  return (
    <>
      <style>{CSS_STAT11}</style>
      <div className="stat11">
        {stats.map((s) => (
          <div className="stat11-card" key={s.lbl}>
            <span className="stat11-ico">{s.ico}</span>
            <div className="stat11-val">{s.val}</div>
            <div className="stat11-lbl">{s.lbl}</div>
            <div className="stat11-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const TEZE_NOVELA = [
  {
    br: 'T1',
    naslov: 'Pokladni kontekst kao dramski uvjet',
    tag: 'POKLADE',
    teza: 'Novela od Stanca nije moguća bez pokladnog koda koji legitimira preokret društvenih uloga i farsalnu obmanu.',
    args: ['Karneval suspendira svakodnevna pravila.', 'Prevara postaje scenski dopuštena.', 'Bez poklada nestaje mehanizam komike.'],
    scena: 'Početni ulazak mladića u noćni dubrovački prostor.',
  },
  {
    br: 'T2',
    naslov: 'Opreka mlado–staro',
    tag: 'GEN. SUKOB',
    teza: 'Sukob mladosti i starosti gradi os radnje: pobjeda dolazi kroz lukavost i društvenu pokretljivost, ne kroz silu.',
    args: ['Stanac je tip naivnog starca.', 'Mladići kontroliraju ritam radnje.', 'Farsa nagrađuje vitalnost i snalažljivost.'],
    scena: 'Prizori obmane i „podmlađivanja”.',
  },
  {
    br: 'T3',
    naslov: 'Socijalna satira Dubrovnika',
    tag: 'DRUŠTVO',
    teza: 'Držićev humor funkcionira i kao društvena dijagnoza klasne i kulturne asimetrije u urbanom Dubrovniku.',
    args: ['Vlastela imaju znanje prostora i igre.', 'Stanac je outsider bez kapitala.', 'Nema eksplicitne osude, ali je hijerarhija razotkrivena.'],
    scena: 'Završni ishod: mladi odlaze, Stanac ostaje. ',
  },
  {
    br: 'T4',
    naslov: 'Farsa kao poetika',
    tag: 'ŽANR',
    teza: 'Žanrovska ekonomija farse (tipizacija, brzina, situacijska komika) razlikuje Novelu od Držićevih složenijih komedija.',
    args: ['1 čin i 7 prizora = visoka kondenzacija.', 'Likovi su funkcionalni tipovi.', 'Primat ima situacija, ne psihološka dubina.'],
    scena: 'Središnji komični obrat oko „vode mladosti”.',
  },
  {
    br: 'T5',
    naslov: 'Jezik i socijalni kod',
    tag: 'JEZIK',
    teza: 'Jezik u Noveli nije samo stil, nego marker društvenog položaja i kulturne pripadnosti likova.',
    args: ['Razlike govora signaliziraju hijerarhiju.', 'Dvanaesterac čuva renesansni standard.', 'Verbalna strategija mladića gradi obmanu.'],
    scena: 'Dijaloške razmjene u prizorima nagovaranja.',
  },
  {
    br: 'T6',
    naslov: 'Mit o podmlađivanju',
    tag: 'MOTIV',
    teza: 'Motiv „vode mladosti” istovremeno proizvodi smijeh i patos, jer aktivira univerzalni strah od starenja i gubitka.',
    args: ['Renesansni motiv ima široku ikonografiju.', 'Stanac vjeruje jer želi vjerovati.', 'Komika i tuga egzistiraju zajedno.'],
    scena: 'Stančevo prihvaćanje lažnog rituala podmlađivanja.',
  },
];

const TEZE_JUDITA = [
  {
    br: 'A',
    naslov: 'Alegorijski kod Judite',
    tag: 'ALEGORIJA',
    teza: 'Marulić kroz biblijsku fabulu kodira suvremeni politički i kulturni kontekst hrvatskog prostora pod prijetnjom.',
    args: ['Biblijski okvir omogućuje univerzalizaciju.', 'Alegorija spaja poetiku i povijest.', 'Čitatelj dekodira lokalni sloj značenja.'],
    scena: 'Središnji čin Juditina ulaska u tabor.',
  },
  {
    br: 'B',
    naslov: 'Heroina i providnost',
    tag: 'LIK',
    teza: 'Judita je istovremeno aktivna junakinja i instrument providnosti, čime ep sintetizira etiku i teologiju.',
    args: ['Snaga lika dolazi iz moralne discipline.', 'Pobjeda nije puka vojna logika.', 'Kršćanski model heroizma mijenja antički obrazac.'],
    scena: 'Molitveni i odlučujući čin prije kulminacije.',
  },
  {
    br: 'C',
    naslov: 'Forma kao manifest',
    tag: 'FORMA',
    teza: 'Posveta i stih potvrđuju svjesno pozicioniranje Judite između domaće tradicije i antičkog kanona.',
    args: ['Začinjavci kao domaći kontinuitet.', 'Antički pjesnici kao europski horizont.', 'Dvanaesterac nosi identitetsku funkciju.'],
    scena: 'Programatska posveta na početku djela.',
  },
  {
    br: 'D',
    naslov: 'Marulićev europski domet',
    tag: 'KONTEKST',
    teza: 'Marulićev latinski opus osigurava europsku recepciju, dok Judita učvršćuje nacionalni kanon na hrvatskom jeziku.',
    args: ['Dvije publike, dva jezična registra.', 'Institucija gradi međunarodnu vidljivost.', 'Judita gradi unutarnji književni identitet.'],
    scena: 'Usporedno čitanje Judite i latinskih djela.',
  },
];

const TEZE_NAPREDNE = [
  {
    br: 'T7',
    naslov: 'Dramska ironija i etika smijeha',
    tag: 'NAPREDNO',
    teza: 'Dramska ironija u Noveli od Stanca proizvodi dvostruki učinak: komiku situacije i etičku nelagodu publike.',
    args: ['Publika zna više od lika.', 'Smijeh je vezan uz nejednakost znanja.', 'Empatija i ruganje funkcioniraju istovremeno.'],
    scena: 'Prizori u kojima Stanac vjeruje obmani.',
  },
  {
    br: 'T8',
    naslov: 'Komedija kao ekonomska mapa grada',
    tag: 'NAPREDNO',
    teza: 'Novela se može čitati i kao model distribucije društvenog kapitala u renesansnom Dubrovniku.',
    args: ['Stanac ulazi bez mreže i statusa.', 'Mladići posjeduju simbolički kapital.', 'Ishod prati socio-ekonomsku hijerarhiju.'],
    scena: 'Završna redistribucija moći i smijeha.',
  },
  {
    br: 'T9',
    naslov: 'Farsa i moderni teatar',
    tag: 'NAPREDNO',
    teza: 'Žanrovska otvorenost farse anticipira moderne dramske modele bez zatvorene moralne pouke.',
    args: ['Kraj bez didaktičke kazne.', 'Likovi ostaju funkcionalni, ne katarzični.', 'Ambivalentnost je trajni estetski učinak.'],
    scena: 'Završni izlaz bez pomirenja i pouke.',
  },
];

export function AccordionEsejTezeH11() {
  const [tab, setTab] = useState('novela');
  const teze = tab === 'novela' ? TEZE_NOVELA : tab === 'judita' ? TEZE_JUDITA : TEZE_NAPREDNE;
  const tabs = [
    { id: 'novela', label: 'Novela od Stanca (T1–T6)', color: '#DC322F' },
    { id: 'judita', label: 'Judita (A–D)', color: '#e9b446' },
    { id: 'napredni', label: 'Napredni (T7–T9)', color: '#6b9bff' },
  ];

  const activeColor = tabs.find((t) => t.id === tab)?.color ?? '#e9b446';

  return (
    <>
      <style>{CSS_SC11}</style>
      <div className="box-int" style={{ marginBottom: 14 }}>
        <div className="box-int-lbl">Novela od Stanca je obvezatna za 2026., Judita je korisna za usporedni argument.</div>
        <div className="box-int-txt">Prebaci tab ovisno o tome radiš li standardni esej, usporedni argument ili napredni model razrade.</div>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            style={{
              padding: '7px 14px',
              borderRadius: 'var(--r2)',
              border: '1px solid',
              cursor: 'pointer',
              fontFamily: 'var(--mono)',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '.5px',
              transition: 'all .15s',
              background: tab === t.id ? t.color : 'var(--ele)',
              color: tab === t.id ? '#0a0a0a' : 'var(--t2)',
              borderColor: tab === t.id ? t.color : 'var(--bdm)',
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="sc11s">
        {teze.map((t) => (
          <details className="sc11" key={t.br}>
            <summary className="sc11-sum">
              <div className="sc11-num" style={{ color: activeColor }}>{t.br}</div>
              <div className="sc11-ttl">{t.naslov}</div>
              <span className="sc11-meta" style={{ color: activeColor, borderColor: `${activeColor}55` }}>{t.tag}</span>
              <span className="sc11-chev" style={{ color: activeColor }}>▾</span>
            </summary>
            <div className="sc11-body">
              <div className="sc11-quote">{t.teza}</div>
              <div className="sc11-why"><b>Argumenti:</b></div>
              <div className="sc11-args">
                {t.args.map((a, i) => (
                  <div className="sc11-arg" key={i} style={{ borderLeftColor: activeColor }}>
                    <span className="sc11-arg-num" style={{ color: activeColor }}>({i + 1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc11-note">
                <strong style={{ color: 'var(--bronze)', fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: 1, fontStyle: 'normal' }}>KLJUČNA SCENA: </strong>
                {t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

const CSS_H11A_TIPOVI_EMBED = `
  .h11a-tipovi-wrap .box-int{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:12px 14px;margin:10px 0 14px}
  .h11a-tipovi-wrap .box-int-lbl{font-family:var(--mono);font-size:10px;letter-spacing:1px;text-transform:uppercase;color:var(--bronze);margin-bottom:6px}
  .h11a-tipovi-wrap .box-int-txt{font-family:var(--serif);font-size:13px;line-height:1.58;color:var(--t2)}
  .h11a-tipovi-wrap .scenes{display:flex;flex-direction:column;gap:8px;margin:0 0 20px}
  .h11a-tipovi-wrap .scene{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .h11a-tipovi-wrap .scene:hover{border-color:var(--bd-br)}
  .h11a-tipovi-wrap .scene[open]{border-color:var(--bd-go);box-shadow:0 4px 14px rgba(0,0,0,.14)}
  .h11a-tipovi-wrap .scene-sum{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:13px 14px;cursor:pointer;list-style:none}
  .h11a-tipovi-wrap .scene-sum::-webkit-details-marker{display:none}
  .h11a-tipovi-wrap .scene-sum::after{content:'▾';font-family:var(--mono);font-size:13px;color:var(--t3);transition:transform .2s}
  .h11a-tipovi-wrap .scene[open] .scene-sum::after{transform:rotate(180deg);color:var(--gold)}
  .h11a-tipovi-wrap .scene-num{font-family:var(--display);font-size:16px;font-weight:700;color:var(--bronze-l);min-width:30px}
  .h11a-tipovi-wrap .scene-ttl{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1);line-height:1.4}
  .h11a-tipovi-wrap .scene-meta{font-family:var(--mono);font-size:9px;letter-spacing:1px;text-transform:uppercase;color:var(--t3);border:1px solid var(--bdm);border-radius:999px;padding:3px 8px}
  .h11a-tipovi-wrap .scene-body{padding:0 14px 13px}
  .h11a-tipovi-wrap .scene-quote{padding:10px 12px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.58;color:var(--t1);margin-bottom:9px}
  .h11a-tipovi-wrap .scene-why{font-family:var(--serif);font-size:13px;line-height:1.56;color:var(--t2)}
  @media(max-width:640px){
    .h11a-tipovi-wrap .scene-sum{grid-template-columns:auto 1fr;gap:8px;padding:11px 12px}
    .h11a-tipovi-wrap .scene-meta{display:none}
    .h11a-tipovi-wrap .scene-num{font-size:14px;min-width:24px}
    .h11a-tipovi-wrap .scene-ttl,.h11a-tipovi-wrap .scene-quote,.h11a-tipovi-wrap .scene-why,.h11a-tipovi-wrap .box-int-txt{font-size:12px}
  }
`;

const CSS_H11A_WRITER_EMBED = `
  .h11a-writer-wrap{margin:18px 0 6px}
  .h11a-writer-title{display:flex;align-items:center;justify-content:center;margin:0 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:var(--t3)}
  .h11a-writer-title span{padding:5px 10px;border:1px solid var(--bdm);border-radius:999px;background:var(--ele)}
  .h11a-writer-wrap .wc-wrap{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r4);overflow:hidden;margin:0}
  .h11a-writer-wrap .wc-header{padding:12px 14px;border-bottom:1px solid var(--bd);background:rgba(255,255,255,.02)}
  .h11a-writer-wrap .wc-lbl{font-family:var(--display);font-size:15px;color:var(--t1);font-weight:700;margin-bottom:8px}
  .h11a-writer-wrap .wc-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
  .h11a-writer-wrap .wc-stat{border:1px solid var(--bdm);border-radius:var(--r2);padding:6px 8px;text-align:center;background:var(--card)}
  .h11a-writer-wrap .wc-stat-num{display:block;font-family:var(--display);font-size:13px;color:var(--gold);font-weight:700;line-height:1.2}
  .h11a-writer-wrap .wc-stat-lbl{display:block;font-family:var(--mono);font-size:8px;letter-spacing:.8px;color:var(--t3)}
  .h11a-writer-wrap .wc-body{padding:12px 14px}
  .h11a-writer-wrap .wc-ta{width:100%;min-height:200px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);font-family:var(--serif);font-size:15px;line-height:1.65;padding:14px;resize:vertical;outline:none;transition:border-color .15s}
  .h11a-writer-wrap .wc-ta:focus{border-color:var(--bronze)}
  .h11a-writer-wrap .wc-prog{height:5px;background:var(--bd);border-radius:3px;overflow:hidden;margin-top:12px}
  .h11a-writer-wrap .wc-prog-bar{height:100%;background:linear-gradient(90deg,var(--bronze-d),var(--bronze),var(--gold));border-radius:3px;transition:width .4s;width:0%}
  .h11a-writer-wrap .wc-prog.pass .wc-prog-bar{background:linear-gradient(90deg,var(--green),var(--teal))}
  .h11a-writer-wrap .wc-prog-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);margin-top:6px;text-align:right}
  .h11a-writer-wrap .wc-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:10px}
  .h11a-writer-wrap .wc-btn{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);padding:7px 10px;color:var(--t1);font-family:var(--mono);font-size:10px;cursor:pointer}
  .h11a-writer-wrap .wc-btn:hover{border-color:var(--bd-go);color:var(--gold)}
  @media(max-width:640px){
    .h11a-writer-wrap .wc-stats{grid-template-columns:repeat(2,minmax(0,1fr))}
    .h11a-writer-wrap .wc-ta{font-size:13px;min-height:170px}
  }
`;

export function EssayTipoviPitanjaH11() {
  return (
    <>
      <style>{CSS_H11A_TIPOVI_EMBED}</style>
      <div className="h11a-tipovi-wrap">
        <div className="box-int">
          <div className="box-int-lbl">3 tipa pitanja koja se pojavljuju na maturi</div>
          <div className="box-int-txt">Renesansna tema može doći u tri oblika. Svaki traži drugačiji pristup.</div>
        </div>

        <div className="scenes">
          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">TIP 1</div>
              <div className="scene-ttl">Analiza konkretnog ulomka — <em>čitanje s razumijevanjem</em></div>
              <div className="scene-meta">ULOMAK</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Dobiješ ulomak iz Novele od Stanca i odgovaraš kroz precizno čitanje, prepoznavanje govornika, scene i ključnog postupka.</div>
              <div className="scene-why"><b>Taktika:</b> tko govori, u kojem prizoru, koje je stilsko sredstvo i kako ulomak podupire tvoju tezu.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">TIP 2</div>
              <div className="scene-ttl">Teorijsko pitanje — <em>definicija pojma ili žanra</em></div>
              <div className="scene-meta">TEORIJA</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Pitanja tipa: što je petrarkizam, što je farsa, što je dvostruko rimovani dvanaesterac.</div>
              <div className="scene-why"><b>Taktika:</b> definicija + konkretan primjer iz H11 daje pun odgovor.</div>
            </div>
          </details>

          <details className="scene">
            <summary className="scene-sum">
              <div className="scene-num">TIP 3</div>
              <div className="scene-ttl">Kontekstualni esejski argument — <em>H11 unutar eseja o drugom djelu</em></div>
              <div className="scene-meta">ESEJ</div>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">Kad pišeš esej o djelu s popisa, H11 ubacuješ kao usporedni argument (sličnost/razlika u temi, formi ili kontekstu).</div>
              <div className="scene-why"><b>Taktika:</b> jedna jasna usporedna rečenica i jedan precizan primjer iz H11 su dovoljni za jači kontekst.</div>
            </div>
          </details>
        </div>
      </div>
    </>
  );
}

export function EssayWriterNovelaH11() {
  const [text, setText] = useState('');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('h11.essay.novela');
      if (saved) setText(saved);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('h11.essay.novela', text);
    } catch (e) {}
  }, [text]);

  const words = (text.match(/\S+/g) || []).length;
  const chars = text.length;
  const paragraphs = text.trim() ? text.trim().split(/\n\s*\n+/).length : 0;
  const readMin = words > 0 ? Math.max(1, Math.ceil(words / 200)) : 0;
  const progress = Math.min(100, Math.round((words / 440) * 100));
  const passed = words >= 440;

  const doCopy = async () => {
    if (!text.trim()) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {}
  };

  const doClear = () => setText('');

  return (
    <>
      <style>{CSS_H11A_WRITER_EMBED}</style>
      <div className="h11a-writer-wrap">
        <div className="h11a-writer-title"><span>13 · Piši esej ovdje</span></div>
        <div className="wc-wrap">
          <div className="wc-header">
            <div className="wc-lbl">Esej — Novela od Stanca</div>
            <div className="wc-stats">
              <div className="wc-stat"><span className="wc-stat-num">{words}</span><span className="wc-stat-lbl">Riječi</span></div>
              <div className="wc-stat"><span className="wc-stat-num">{chars}</span><span className="wc-stat-lbl">Znakovi</span></div>
              <div className="wc-stat"><span className="wc-stat-num">{paragraphs}</span><span className="wc-stat-lbl">Odlomci</span></div>
              <div className="wc-stat"><span className="wc-stat-num">{readMin} min</span><span className="wc-stat-lbl">Čit. vrij.</span></div>
            </div>
          </div>
          <div className="wc-body">
            <textarea
              className="wc-ta"
              placeholder="Ovdje piši esej o Noveli od Stanca. Tekst se automatski sprema. Cilj: 440+ riječi."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <div className={`wc-prog${passed ? ' pass' : ''}`}>
              <div className="wc-prog-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="wc-prog-lbl">CILJ 440 · {words} / 440{passed ? ' ✓ Dostignuto!' : ''}</div>
            <div className="wc-actions">
              <button className="wc-btn" onClick={doCopy}>⎘ Kopiraj</button>
              <button className="wc-btn" onClick={doClear}>✕ Obriši</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


/* AUTO-GENERATED AUTHOR EMBEDS */

const CSS_H11A_AUTHOR_EMBED = `
  .h11a-author-wrap{margin:16px 0 20px}
  .h11a-author-wrap .author-card{
    border:1px solid var(--bdm, rgba(203,176,145,.35));
    border-radius:var(--r3, 16px);
    background:linear-gradient(180deg, rgba(20,14,12,.86), rgba(20,14,12,.72));
    overflow:hidden;
    box-shadow:0 10px 28px rgba(0,0,0,.18);
  }
  .h11a-author-wrap .ac-header{background:rgba(255,255,255,.02)}
  .h11a-author-wrap .ac-work-item{background:rgba(255,255,255,.02)}
  @media (max-width: 700px){
    .h11a-author-wrap{margin:12px 0 16px}
  }
`;

function H11AAuthorEmbed({ html }) {
  return (
    <>
      <style>{CSS_H11A_AUTHOR_EMBED}</style>
      <div className="h11a-author-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}


const H11A_AUTHORPROFILEMARULICH11_HTML = `        <div class="author-card">
          <div class="ac-header">
            <div class="ac-monogram">M</div>
            <div class="ac-meta">
              <div class="ac-name">Marko Marulić</div>
              <div class="ac-dates">Split · 1450.–1524.</div>
              <div class="ac-tags">
                <span class="hchip br" style="font-size:8px">„otac hrv. književnosti"</span>
                <span class="hchip pa" style="font-size:8px">čakavica</span>
              </div>
            </div>
          </div>
          <div class="ac-body">
            <p>Marulić se školovao u splitskoj humanističkoj školi i Italiji. Cijeloga života bavio se i pravnim poslovima. Pisao je <strong>na latinskom</strong> (moralno-teološka proza) i <strong>na hrvatskom</strong> (Judita). U posveti Judite navodi da prati „<b>začinjavce</b>" — hrv. srednovjekovne pjesnike-svećenike od kojih preuzima vrstu rime.</p>
            <p>Naziva se „<em>ocem hrvatske književnosti</em>" — prvi je autor koji je na hrvatskom ostvario ep europske razine preveden na više europskih jezika.</p>
            <div class="ac-works">
              <div class="ac-works-lbl">Ključna djela</div>
              <div class="ac-work-item">
                <div class="ac-badge">📖</div>
                <div>
                  <div class="ac-work-title">Judita</div>
                  <div class="ac-work-meta">Dovršena 1501. · Tiskana 1521. · 6 pjevanja · 2126 dvanaesteraca · splitska čakavština</div>
                  <div class="ac-work-desc">Biblijsko-kršćanski ep. Priča o udovici Juditi koja ubija vojvodu Oloferna. <strong>Alegorija</strong>: Oloferno = turska vojska; Judita = hrvatska otpornost uz Božju pomoć. Pisana dvostruko rimovanim dvanaestercima s <em>prijenosnom rimom</em>. Posveta don Dujmu Balistriliću. Marulić ističe da nastavlja tradiciju „začinjavaca" i „starih poet".</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">📜</div>
                <div>
                  <div class="ac-work-title">Davidijada (Davidias)</div>
                  <div class="ac-work-meta">1517. · na latinskom · 14 pjevanja · 6765 heksametara</div>
                  <div class="ac-work-desc">Latinski ep o životu kralja Davida. Piše po uzoru na rimske epičare (Vergilije). Pokazuje Marulićevu humanističku obrazovanost i poznavanje antičke epike.</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">📋</div>
                <div>
                  <div class="ac-work-title">Institucija (De institutione bene vivendi...)</div>
                  <div class="ac-work-meta">1507. · latinska proza · prevedena na sve europske jezike</div>
                  <div class="ac-work-desc">Zbirka poučnih priča i anegdota iz Biblije. Moralno-teološki priručnik — <strong>Marulić je zbog njega poznat u europskim humanističkim krugovima</strong>. Preveden na talijanski, njemački, francuski, engleski, španjolski i dr.</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">✉️</div>
                <div>
                  <div class="ac-work-title">Poslanica papi Hadrijanu VI.</div>
                  <div class="ac-work-meta">1522. · latinska proza</div>
                  <div class="ac-work-desc">Upozorava na tursku prijetnju kršćanskom svijetu i poziva vladare na zajedničku borbu. Primjer Marulićevog angažiranog humanizma.</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

export function AuthorProfileMarulicH11() {
  return <H11AAuthorEmbed html={H11A_AUTHORPROFILEMARULICH11_HTML} />;
}


const H11A_AUTHORPROFILEHEKTOROVICH11_HTML = `        <div class="author-card">
          <div class="ac-header">
            <div class="ac-monogram">H</div>
            <div class="ac-meta">
              <div class="ac-name">Petar Hektorović</div>
              <div class="ac-dates">Hvar · 1487.–1572.</div>
              <div class="ac-tags">
                <span class="hchip te" style="font-size:8px">putopisac · epičar</span>
                <span class="hchip pa" style="font-size:8px">usm. tradicija</span>
              </div>
            </div>
          </div>
          <div class="ac-body">
            <p>Hektorović je hvarski plemić koji je dao sagraditi utvrdu <strong>Tvrdalj</strong> u Starom Gradu na Hvaru. <em>Ribanje</em> je posvećeno plemiću Jeronimu Bartučeviću i pisano je kao <strong>poslanica</strong>. Putovao je s dvojicom ribara: <b>Nikolom Zetom</b> i <b>Paskojom Debeljem</b>.</p>
            <div class="ac-works">
              <div class="ac-works-lbl">Ključno djelo</div>
              <div class="ac-work-item">
                <div class="ac-badge">🐟</div>
                <div>
                  <div class="ac-work-title">Ribanje i ribarsko prigovaranje</div>
                  <div class="ac-work-meta">1556. · dvostruko rim. dvanaesterci · put Hvar–Brač–Šolta</div>
                  <div class="ac-work-desc"><strong>Višestruko određenje</strong> — ep (kompozicija u stihovima), putopis (opis trodnevnog puta), ribarska ekloga (idilični opis ribarskog života), poslanica (namijenjena Bartučeviću). Hektorović zapisuje <em>narodne pjesme</em> (<em>Naš gospodin poljem jizdi</em>, <em>I kliče devojka</em>) i <em>bugarštice</em> (<em>Kraljević Marko i brat mu Andrijaš</em>, <em>Radosav Siverinac i Vlatko udinski vojvoda</em>) koje pjevaju ribari — <b>dragocjen izvor</b> za proučavanje hrv. usmene tradicije. Realističan opis puta: krajolici, razgovori, ribe, ugoda morske plovidbe — <em>bez alegorije</em> (razlika od Marulića i Zoranića).</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

export function AuthorProfileHektorovicH11() {
  return <H11AAuthorEmbed html={H11A_AUTHORPROFILEHEKTOROVICH11_HTML} />;
}


const H11A_AUTHORPROFILEZORANICH11_HTML = `        <div class="author-card">
          <div class="ac-header">
            <div class="ac-monogram">Z</div>
            <div class="ac-meta">
              <div class="ac-name">Petar Zoranić</div>
              <div class="ac-dates">Zadar · ~1508.–1569.</div>
              <div class="ac-tags">
                <span class="hchip go" style="font-size:8px">prvi hrv. roman</span>
                <span class="hchip pa" style="font-size:8px">čakavsko-štokavski</span>
              </div>
            </div>
          </div>
          <div class="ac-body">
            <p>Zoranić je zadarski plemić koji je <em>Planine</em> posvetio ninskom kanoniku Matiji Matijeviću. Djelo je tiskano 1569., ali posveta je datirana 1543. — nastalo je mnogo ranije.</p>
            <div class="ac-works">
              <div class="ac-works-lbl">Ključno djelo</div>
              <div class="ac-work-item">
                <div class="ac-badge">🏔️</div>
                <div>
                  <div class="ac-work-title">Planine</div>
                  <div class="ac-work-meta">Nastale ~1543. · Tiskane 1569. · 24 poglavlja · proza + stihovi</div>
                  <div class="ac-work-desc"><strong>Prvi hrvatski roman</strong> (mješavina proze i stiha). Glavni lik Zoran putuje zadarskim zaleđem, Dinarom i Velebitom kako bi izliječio patnju od neuzvraćene ljubavi. Na putu sreće vile i pastire koji pjevaju i pripovijedaju. Ključna alegorijska epizoda: <b>Perivoj od Slave</b> — 4 vile (Latinka, Kaldejka, Grkinju, <strong>Hrvatica</strong>) predstavljaju nacionalne književnosti. Hrvatica se žali na loše jabuke — alegorija lošeg stanja hrv. književnosti. Motiv <em>„rasute bašćine"</em> — razdrobljene domovine pod turskim pritiskom. Djelo spaja ljubavnu tematiku s patriotskim apelom.</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

export function AuthorProfileZoranicH11() {
  return <H11AAuthorEmbed html={H11A_AUTHORPROFILEZORANICH11_HTML} />;
}


const H11A_AUTHORPROFILEPETRARKISTIH11_HTML = `        <div class="author-card">
          <div class="ac-header">
            <div class="ac-monogram">P</div>
            <div class="ac-meta">
              <div class="ac-name">Dubrovački petrarkisti</div>
              <div class="ac-dates">Dubrovnik · 15.–16. st. · Ranjinin zbornik (1507.)</div>
              <div class="ac-tags">
                <span class="hchip go" style="font-size:8px">petrarkizam</span>
                <span class="hchip te" style="font-size:8px">lirika · dvanaesterci</span>
              </div>
            </div>
          </div>
          <div class="ac-body">
            <p><em>Ranjinin zbornik</em> (rukopisna zbirka, počeo sakupljati <strong>Nikša Ranjina</strong> 1507.) — 820 pjesama uglavnom ljubavne tematike. Sačuvano autorstvo: Menčetić, Džore Držić, Vetranović, Hispanije, Krstičević.</p>
            <div class="ac-works">
              <div class="ac-works-lbl">Petrarkisti — I. i II. generacija</div>
              <div class="ac-work-item">
                <div class="ac-badge">❤️</div>
                <div>
                  <div class="ac-work-title">Šiško Menčetić (1457.–1527.) — Blažen čas i hip</div>
                  <div class="ac-work-meta">I. gen. · Dubrovnik · dvostruko rim. dvanaesterci · ~500 pjesama u zborniku</div>
                  <div class="ac-work-desc">Opisuje <strong>sve stadije ljubavi</strong> — od prvog pogleda do razočaranja i odbacivanja. Lirski subjekt se obraća „gospoji". <em>Blažen čas i hip</em> — prepjev Petrarcinog soneta u hrv. dvanaesterac. Naglašena senzualnost — razlika od Džore Držića.</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">💭</div>
                <div>
                  <div class="ac-work-title">Džore Držić (1461.–1501.) — idealizator ljubavi</div>
                  <div class="ac-work-meta">I. gen. · Dubrovnik · + autor prve hrv. pastoralne drame</div>
                  <div class="ac-work-desc"><strong>Idealizira ljubav kao apstrakciju</strong> bez naglašavanja senzualnosti. Analizira vlastite osjećaje, slavi voljenu ženu. Autor i <em>Radmio i Ljubmir</em> — <b>prve hrv. pastoralne drame</b> (kraj 15. st., dvanaesterci).</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">🎭</div>
                <div>
                  <div class="ac-work-title">Hanibal Lucić (1485.–1553.) — II. generacija</div>
                  <div class="ac-work-meta">II. gen. · Hvar · neoplatonizam · drama + lirika</div>
                  <div class="ac-work-desc">Lirika u <strong>osmercima</strong> (ne dvanaestercima!) — <em>Jur nijedna na svit vila</em>: 10 strofa, ukrštena + obgrljena rima. Neoplatonizacija ljubavne tematike. Drama <em>Robinja</em> (1530.): <b>prva hrv. drama s razrađenom radnjom</b>, zapletom i rasplatom — individualizirani likovi: robinja (kći bana Vlaska), vitez Derenčin. Tematizira tursku opasnost i trgovinu robljem. 3 čina, dvanaesterci.</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

export function AuthorProfilePetrarkistiH11() {
  return <H11AAuthorEmbed html={H11A_AUTHORPROFILEPETRARKISTIH11_HTML} />;
}


const H11A_AUTHORPROFILEMARINDRZICH11_HTML = `        <div class="author-card">
          <div class="ac-header">
            <div class="ac-monogram">V</div>
            <div class="ac-meta">
              <div class="ac-name">Marin Držić — „Vidra"</div>
              <div class="ac-dates">Dubrovnik · 1508.–1567. · ★ OBVEZATNO 2026.</div>
              <div class="ac-tags">
                <span class="hchip re" style="font-size:8px">★ obvezatno</span>
                <span class="hchip go" style="font-size:8px">komedija · farsa</span>
              </div>
            </div>
          </div>
          <div class="ac-body">
            <p>Marin Držić smatra se <strong>najvećim hrvatskim dramaturgom i komediografom</strong>. Živio je burnim životom — student u Sieni, organist u Dubrovniku, putovao po Europi. Pisao je za dubrovačke pokladne svečanosti. Znan je i po tajnoj <b>Kosmografskoj poslanici</b> (1566.) — pismo Cosimu de' Medici u kojem traži vojnu pomoć za prevrat u Dubrovniku.</p>
            <div class="ac-works">
              <div class="ac-works-lbl">Ključna djela — ★ Novela od Stanca obvezatna 2026.</div>
              <div class="ac-work-item">
                <div class="ac-badge">🎭</div>
                <div>
                  <div class="ac-work-title">Novela od Stanca ★</div>
                  <div class="ac-work-meta">Praizvedena 1550. · 1 čin · 7 prizora · dvostruko rim. dvanaesterci</div>
                  <div class="ac-work-desc"><strong>Farsa i pokladna igra</strong>. Radnja: dubrovački mladići nasamare starog seljaka Stanca iz Trebinja — obmanjuju ga da je podmladio i napojen „vodom mladosti". Ključne opreke: <em>mlado vs. staro, vlastela vs. seljak, grad vs. selo, pamet vs. naivnost</em>. Stanac = tip „glupog seljaka" iz kazalj. tradicije. Sva zbivanja direktna slika dubrovačke svakodnevice i društvenih odnosa u pokladno doba.</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">🏛️</div>
                <div>
                  <div class="ac-work-title">Dundo Maroje</div>
                  <div class="ac-work-meta">Praizvedena 1551. · 2 prologa + 5 činova · proza · radnja u Rimu</div>
                  <div class="ac-work-desc"><strong>Najstarija poznata hrv. prozna drama</strong>. Dundo Maroje traži sina Mara koji je potrošio 5000 dukata s kurtizanom Laurom u Rimu. Kombol dopunio kraj koji nedostaje. Prolozi — lik Negromanta uvodi radnju. Alegorija dubrovačkog društva smještena u Rim.</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">💰</div>
                <div>
                  <div class="ac-work-title">Skup</div>
                  <div class="ac-work-meta">Praizvedena 1556. · 5 činova · proza · po Plauta Aululariji</div>
                  <div class="ac-work-desc">Plautovska komedija — stari škrtac Skup (= Plautov Euklion) brine samo o blagu. Želi udati kćer Adrianu za bogatog Zlatikuma, ali je ona potajno zaručena za mladog Kamila. Aluzije na dubrovačku stvarnost, kritika škrtosti i novca kao vrhovne vrijednosti.</div>
                </div>
              </div>
              <div class="ac-work-item">
                <div class="ac-badge">📖</div>
                <div>
                  <div class="ac-work-title">Pomet (izgubljen) → Dundo Maroje</div>
                  <div class="ac-work-meta">1548. · izvedla Pomet-družina · komedija · prethodi Dundu Maroju</div>
                  <div class="ac-work-desc">Izgubljena komedija — isti likovi kao u Dundu Maroju. Dokaz da je Držić imao razrađen komedijski sustav likova koji prelaze iz drame u dramu. Važno za razumijevanje Držićeva opusa.</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

export function AuthorProfileMarinDrzicH11() {
  return <H11AAuthorEmbed html={H11A_AUTHORPROFILEMARINDRZICH11_HTML} />;
}


const H11A_AUTHORPROFILEKRNARUTICH11_HTML = `        <div class="author-card">
          <div class="ac-header">
            <div class="ac-monogram">K</div>
            <div class="ac-meta">
              <div class="ac-name">Brne Krnarutić</div>
              <div class="ac-dates">Zadar · 1515.–1573.</div>
              <div class="ac-tags">
                <span class="hchip te" style="font-size:8px">povijesni ep</span>
              </div>
            </div>
          </div>
          <div class="ac-body">
            <div class="ac-works">
              <div class="ac-work-item">
                <div class="ac-badge">⚔️</div>
                <div>
                  <div class="ac-work-title">Vazetje Sigeta grada</div>
                  <div class="ac-work-meta">1584. · 4 pjevanja · 1056 dvostruko rim. dvanaesteraca</div>
                  <div class="ac-work-desc"><strong>Prvi hrv. povijesni ep</strong>. Opjeva opsadu Sigeta (1566.) u kojoj su Nikola Šubić Zrinski i njegova vojska, poraženi od Turaka, spasili Hrvatsku, Austriju i Mađarsku od daljnjih napada. Patriotski ep — glorifikacija žrtve za domovinu.</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;

export function AuthorProfileKrnaruticH11() {
  return <H11AAuthorEmbed html={H11A_AUTHORPROFILEKRNARUTICH11_HTML} />;
}

const CSS_H11A_AUTH_EMBED = `
  .h11a-auth-wrap{margin:12px 0 18px}
  .h11a-auth-wrap .auth-box{
    border:1px solid var(--bdm, rgba(203,176,145,.35));
    border-radius:var(--r3, 16px);
    background:linear-gradient(180deg, rgba(20,14,12,.86), rgba(20,14,12,.72));
    box-shadow:0 10px 28px rgba(0,0,0,.15);
  }
`;

function H11AAuthEmbed({ html }) {
  return (
    <>
      <style>{CSS_H11A_AUTH_EMBED}</style>
      <div className="h11a-auth-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H11A_NCVVO_AUTH_BOX_HTML = `        <div class="auth-box">
          <div class="auth-ico">📋</div>
          <div class="auth-body">
            <div class="auth-ttl">Što ispit traži od H11</div>
            <div class="auth-txt">NCVVO provjerava: <strong>Marin Držić (Novela od Stanca)</strong> kao obvezatno djelo 2025./2026. Uz njega mogu se pojaviti pitanja o Marku Maruliću (<em>Judita</em>), Petru Hektoroviću (<em>Ribanje</em>), Petru Zoraniću (<em>Planine</em>) i petrarkistima (Menčetić, Džore Držić). Za esej: Novela od Stanca je ključan tekst — farsa, pokladna igra, kritika.</div>
            <div class="auth-links">
              <a href="https://www.ncvvo.hr" target="_blank" rel="noopener" class="auth-link">ncvvo.hr</a>
              <a href="/skripte/hrv" class="auth-link">D11 · Novela od Stanca →</a>
            </div>
          </div>
        </div>`;

export function NcvvoAuthBoxH11() {
  return <H11AAuthEmbed html={H11A_NCVVO_AUTH_BOX_HTML} />;
}

const CSS_H11A_VIDEO_EMBED = `
  .h11a-video-wrap .yt-card{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H11AVideoEmbed({ html }) {
  return (
    <>
      <style>{CSS_H11A_VIDEO_EMBED}</style>
      <div className="h11a-video-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H11A_VIDEO_CARD_PRIMARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=hrvatska+renesansa+Marulić+Držić+analiza+lektira" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Hrv. renesansa — Marulić i Držić</div>
        </div>
      </a>`;

export function VideoCardPrimaryH11() {
  return <H11AVideoEmbed html={H11A_VIDEO_CARD_PRIMARY_HTML} />;
}

const H11A_VIDEO_CARD_SECONDARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Marin+Držić+Dundo+Maroje+analiza+kazalište" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Marin Držić — Dundo Maroje analiza</div>
        </div>
      </a>`;

export function VideoCardSecondaryH11() {
  return <H11AVideoEmbed html={H11A_VIDEO_CARD_SECONDARY_HTML} />;
}

const H11A_VIDEO_CARD_TERTIARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Croatian+Renaissance+literature+Marulic+Drzic" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Croatian Renaissance — overview</div>
        </div>
      </a>`;

export function VideoCardTertiaryH11() {
  return <H11AVideoEmbed html={H11A_VIDEO_CARD_TERTIARY_HTML} />;
}

const H11A_VIDEO_CARD_QUATERNARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Renaissance+humanism+Italy+Petrarch+influence+Europe" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">Renaissance humanism — European context</div>
        </div>
      </a>`;

export function VideoCardQuaternaryH11() {
  return <H11AVideoEmbed html={H11A_VIDEO_CARD_QUATERNARY_HTML} />;
}

