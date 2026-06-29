/*
 * H12 additions components for layer injections.
 * Self-contained components with scoped style tags.
 */

const CSS_SECHDR12 = `
  .sh12{display:flex;align-items:center;gap:12px;margin:26px 0 10px}
  .sh12-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh12-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:5px 11px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
  @media(max-width:600px){
    .sh12{gap:8px;margin:18px 0 8px}
    .sh12-badge{font-size:8.5px;letter-spacing:1.3px;padding:4px 9px}
  }
`;

function SH12({ label, style }) {
  return (
    <>
      <style>{CSS_SECHDR12}</style>
      <div className="sh12" style={style}>
        <div className="sh12-line" />
        <div className="sh12-badge">{label}</div>
        <div className="sh12-line" />
      </div>
    </>
  );
}

const CSS_TL12 = `
  .tl12{position:relative;padding:22px 0 4px;margin:20px 0 24px}
  .tl12::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl12-ev{display:flex;gap:16px;margin-bottom:16px;position:relative}
  .tl12-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl12-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl12-body{flex:1;padding:11px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl12-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl12-title{font-family:var(--display);font-size:14px;font-weight:600;color:var(--bronze-l);margin-bottom:4px}
  .tl12-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.62}
  @media(max-width:900px){
    .tl12-body{padding:10px 14px}
  }
  @media(max-width:600px){
    .tl12{padding:14px 0 2px;margin:14px 0 18px}
    .tl12::before{left:18px}
    .tl12-ev{gap:12px;margin-bottom:12px}
    .tl12-date{width:36px;height:36px;font-size:7px}
    .tl12-body{padding:9px 11px}
    .tl12-title{font-size:12.5px}
    .tl12-desc{font-size:12px;line-height:1.55}
  }
`;

const CSS_SC12 = `
  .sc12s{display:flex;flex-direction:column;gap:10px;margin:16px 0 24px}
  .sc12{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc12:hover{border-color:var(--bd-br)}
  .sc12[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc12-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:14px 18px;cursor:pointer;list-style:none;user-select:none}
  .sc12-sum::-webkit-details-marker{display:none}
  .sc12-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc12[open] .sc12-chev{transform:rotate(180deg);color:var(--gold)}
  .sc12-num{font-family:var(--display);font-size:20px;font-weight:700;color:var(--bronze-l);min-width:36px}
  .sc12-num-ico{font-size:20px;line-height:1}
  .sc12[open] .sc12-num{color:var(--gold)}
  .sc12-ttl{font-family:var(--serif);font-size:14.5px;color:var(--t1);font-weight:600;line-height:1.42}
  .sc12-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc12-body{padding:0 18px 18px}
  .sc12-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13.5px;line-height:1.64;color:var(--t1);font-style:italic;margin-bottom:11px}
  .sc12-why{font-family:var(--serif);font-size:13.25px;line-height:1.64;color:var(--t2);margin-bottom:8px}
  .sc12-why b{color:var(--t1)}
  .sc12-note{margin-top:10px;padding:9px 13px;background:rgba(232,201,122,.06);border:1px solid rgba(232,201,122,.2);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--gold);line-height:1.64}
  .sc12-note-lbl{font-size:8px;letter-spacing:1px;margin-bottom:5px;color:var(--t3)}
  .sc12-recs{margin-top:10px;display:flex;flex-direction:column;gap:8px}
  .sc12-rec{padding:10px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);border-left:3px solid var(--gold);font-family:var(--serif);font-size:12.75px;color:var(--t1);line-height:1.56;font-style:italic}
  @media(max-width:900px){
    .sc12-sum{padding:13px 14px}
    .sc12-body{padding:0 14px 14px}
  }
  @media(max-width:600px){
    .sc12s{gap:8px;margin:12px 0 18px}
    .sc12-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc12-sum{align-items:flex-start}
    .sc12-meta{display:none}
    .sc12-chev{margin-top:4px}
    .sc12-body{padding:0 12px 12px}
    .sc12-ttl{font-size:13.25px}
    .sc12-quote{font-size:12.5px;line-height:1.55}
    .sc12-why,.sc12-rec{font-size:12px;line-height:1.5}
    .sc12-num-ico{font-size:18px}
  }
`;

const CSS_CMP12 = `
  .cmp12{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp12-side{padding:20px 22px;background:var(--sur)}
  .cmp12-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp12-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp12-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp12-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:4px}
  .cmp12-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp12-row{display:flex;gap:6px;margin-bottom:6px;font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .cmp12-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:80px;flex-shrink:0;margin-top:2px}
  @media(max-width:900px){
    .cmp12-side{padding:15px}
    .cmp12-row{font-size:12px}
    .cmp12-lbl{min-width:66px}
  }
  @media(max-width:600px){
    .cmp12{grid-template-columns:1fr}
    .cmp12-side{padding:13px 12px}
    .cmp12-author{font-size:14px}
    .cmp12-period{font-size:7.5px;margin-bottom:8px}
    .cmp12-row{font-size:12px;line-height:1.45}
    .cmp12-lbl{min-width:62px;font-size:8px}
    .cmp12-vs{writing-mode:horizontal-tb;width:auto;height:34px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}
    .cmp12-vs-inner{writing-mode:horizontal-tb;letter-spacing:1px}
  }
`;

const CSS_STAT12 = `
  .stat12{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:12px;margin:0 0 22px}
  .stat12-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat12-card:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px)}
  .stat12-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat12-val{font-family:var(--display);font-size:17px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat12-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat12-sub{font-family:var(--serif);font-size:11.5px;color:var(--t3);margin-top:4px;line-height:1.38}
  @media(max-width:580px){.stat12{grid-template-columns:repeat(2,1fr);gap:9px}.stat12-card{padding:12px 10px}.stat12-val{font-size:14px}}
`;

const CSS_QUOTE12 = `
  .hq12{border:1px solid var(--bd-go);border-radius:var(--r4);padding:26px 30px;margin:18px 0 26px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
  .hq12::before{content:'\\201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq12::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
  .hq12-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
  .hq12-text{font-family:var(--display);font-size:17px;font-weight:700;color:var(--t1);line-height:1.52;font-style:italic;margin-bottom:11px}
  .hq12-text em{color:var(--gold);font-style:normal}
  .hq12-list{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.72;margin:10px 0 12px;padding-left:0;list-style:none}
  .hq12-list li{padding:3px 0;padding-left:16px;position:relative}
  .hq12-list li::before{content:'->';position:absolute;left:0;color:var(--gold);font-size:11px}
  .hq12-note{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6;margin:6px 0 10px}
  .hq12-source{font-family:var(--mono);font-size:9.5px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:900px){
    .hq12{padding:20px 22px;margin:14px 0 20px}
    .hq12-text{font-size:15px}
  }
  @media(max-width:600px){
    .hq12{padding:16px 14px 16px 18px}
    .hq12-eye{font-size:8px;letter-spacing:1.2px;margin-bottom:8px}
    .hq12-text{font-size:13px;line-height:1.45}
    .hq12-list{font-size:12px;line-height:1.56}
    .hq12-list li{padding-left:14px}
    .hq12-note{font-size:12px;line-height:1.55}
    .hq12-source{font-size:8px;letter-spacing:.25px}
  }
`;

const CSS_POP12 = `
  .pop12{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin:14px 0 22px}
  .pop12-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;transition:border-color .2s,transform .2s}
  .pop12-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop12-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop12-title{font-family:var(--display);font-size:14px;font-weight:700;color:var(--t1);margin-bottom:6px;line-height:1.4}
  .pop12-source{font-family:var(--serif);font-size:12.5px;color:var(--t3);font-style:italic;line-height:1.58}
  @media(max-width:900px){
    .pop12{grid-template-columns:repeat(2,minmax(0,1fr))}
  }
  @media(max-width:600px){
    .pop12{grid-template-columns:1fr;gap:9px}
    .pop12-card{padding:13px}
    .pop12-film{font-size:8.25px;letter-spacing:.7px}
    .pop12-title{font-size:13px}
    .pop12-source{font-size:12px;line-height:1.5}
  }
`;

const CSS_INFO12 = `
  .h12i{background:var(--ele);border:1px solid var(--bd);border-radius:var(--r3);padding:15px 18px;margin:0 0 14px}
  .h12i-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--bronze-l);margin-bottom:9px}
  .h12i-txt{font-family:var(--serif);font-size:13.25px;color:var(--t2);line-height:1.62}
  .h12i-txt strong{color:var(--t1)}
  @media(max-width:600px){
    .h12i{padding:12px 13px;margin:0 0 10px}
    .h12i-lbl{font-size:8.75px;letter-spacing:.75px;margin-bottom:6px}
    .h12i-txt{font-size:12px;line-height:1.5}
  }
`;

export function HeroQuoteJudita() {
  return (
    <>
      <style>{CSS_QUOTE12}</style>
      <div className="hq12">
        <div className="hq12-eye">INVOKACIJA JUDITE - NAPAMET ZA ANALIZU ULOMKA</div>
        <div className="hq12-text">
          "Ki hoće slišati čudesa Božja starim,
          neka posluša <em>Judite kriposti harim</em>."
        </div>
        <ul className="hq12-list">
          <li>Invokacija čitatelja - antička epska tehnika (Vergilije: <em>"Arma virumque cano"</em>)</li>
          <li>Invokacija Boga - kršćanski ep, ne antički</li>
          <li>Subjekt: Judita - ženska heroina, neobičan izbor za ep</li>
        </ul>
        <div className="hq12-note">
          Na analizi ulomka: prepoznaj ovu tehniku i napiši da Marulić spaja antički i kršćanski model.
        </div>
        <div className="hq12-source">JUDITA - I. PJEVANJE - 1501. - MARKO MARULIĆ - SPLIT - ČAKAVSKI DVOSTRUKO RIMOVANI DVANAESTERAC</div>
      </div>
    </>
  );
}

export function StatCardsJudita() {
  const stats = [
    { ico: '📖', val: '6 pjevanja', lbl: 'Kompozicija', sub: 'nejednake duljine' },
    { ico: '📝', val: '2126', lbl: 'Dvanaesteraca', sub: 'dvostruko rimovanih' },
    { ico: '📅', val: '1501./1521.', lbl: 'Pisana/Tiskana', sub: '20 god. razlike' },
    { ico: '🌍', val: '100+', lbl: 'Institucija u Europi', sub: 'lat. izdanja do 17. st.' },
  ];
  return (
    <>
      <style>{CSS_STAT12}</style>
      <div className="stat12">
        {stats.map((s) => (
          <div className="stat12-card" key={s.lbl}>
            <span className="stat12-ico">{s.ico}</span>
            <div className="stat12-val">{s.val}</div>
            <div className="stat12-lbl">{s.lbl}</div>
            <div className="stat12-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const MARULIC_TL = [
  { date: '1440.', major: false, title: 'Gutenbergov tisak - preduvjet svega', desc: 'Bez tiska ne bi bilo europske recepcije Marulića. Institucija doživljava 100+ izdanja upravo jer postoji tisak. Judita bi ostala rukopis.' },
  { date: '1450.', major: true, title: 'Marulić rođen u Splitu', desc: 'Humanistička obitelj, Split kao most između Dalmacije i Italije. Iste godine Petrarca je mrtav 76 godina - humanizam je već etabliran u Europi. Marulić ga prima kao normalan intelektualni okvir.' },
  { date: '1453.', major: false, title: 'Pad Carigrada - kontekst cijele misije', desc: 'Turci osvajaju Bizant. Za Marulića i Split - ovo je egzistencijalna prijetnja koja oblikuje sve što piše. Judita nastaje iz tog straha.' },
  { date: '1478.', major: false, title: 'Marulić u Padovi (vjerojatno)', desc: 'Studira u Italiji, upija humanizam, uči latinski, upoznaje Petrarcu i antičku književnost. Formira se kao kršćanski humanist.' },
  { date: '1493.', major: true, title: 'Krbavska bitka - hrv. katastrofa', desc: 'Katastrofalan poraz hrvatske vojske pred Turcima. Neposredni povod za pisanje Judite. Marulić ne može ratovati - može pisati alegoriju nade.' },
  { date: '1501.', major: true, title: 'Judita napisana - prvi veliki hrv. ep', desc: '6 pjevanja, 2126 dvanaesteraca. Posveta don Jeronimu Balistriliću. Marulić u posveti objašnjava vlastitu poetiku: začinjavci + antički ep.' },
  { date: '1507.', major: false, title: 'Institucija - europski bestseller', desc: 'De institutione bene vivendi per exempla sanctorum - moralno-teološka proza na latinskom. Prevodi se na talijanski, njemački, francuski, engleski, španjolski. Marulić postaje europski pisac.' },
  { date: '1521.', major: true, title: 'Judita tiskana u Veneciji', desc: '20 godina nakon pisanja. Kod Guglielma da Fontanetto. Počinje javna recepcija Judite. Marulić ima 71 godinu.' },
  { date: '1524.', major: false, title: 'Marulić umire u Splitu', desc: 'Zapušeni grad, turska opasnost nije prošla. Ali Marulić je iza sebe ostavio prvi ep na hrvatskom i europski poznatu latinsku prozu.' },
];

export function TimelineMarulic() {
  return (
    <>
      <style>{CSS_TL12}</style>
      <div className="tl12">
        {MARULIC_TL.map((ev, i) => (
          <div className="tl12-ev" key={i}>
            <div className={`tl12-date${ev.major ? ' major' : ''}`}>{ev.date}</div>
            <div className="tl12-body">
              <div className="tl12-title">{ev.title}</div>
              <div className="tl12-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function CompareAlegorijaJudita() {
  const rows = [
    ['Protagonist', 'Judita - udovica iz Betulije', 'Hrvatska / hrv. vjera / kršćanstvo'],
    ['Antagonist', 'Holofern - asirski vojskovoda', 'Turci / Osmanlije / antikrist'],
    ['Grad', 'Betulija - opsjednuta', 'Hrv. gradovi / Dalmacija / Split'],
    ['Vrhovni zli', 'Nabukodonosor - asirski car', 'Sultan / Mehmed II. i nasljednici'],
    ['Oružje', 'Holofernov mač', 'Vjera / Božja providnost'],
    ['Ishod', 'Judita odsijeca glavu', 'Pobjeda vjere nad silom'],
    ['Poruka', 'Biblijska heroina pobjeđuje', 'Hrvatska s Bogom može pobijediti'],
  ];
  return (
    <>
      <style>{`${CSS_CMP12}${CSS_INFO12}`}</style>
      <SH12 label="05b - Judita - dvostruko čitanje" />
      <div className="h12i" style={{ marginBottom: 12 }}>
        <div className="h12i-lbl">⚠️ Za ispit - tri razine čitanja</div>
        <div className="h12i-txt">NCVVO može pitati: "Što Judita simbolizira?" Odgovor mora sadržavati sve tri razine: (1) <strong>Doslovna</strong> = biblijska priča, (2) <strong>Alegorijska</strong> = Hrvatska vs. Turci, (3) <strong>Moralna</strong> = vjera pobjeđuje silu. Marulić sam u posveti objašnjava alegorijsku dimenziju - jedinstven slučaj autorske interpretacije u to doba.</div>
      </div>
      <div className="cmp12">
        <div className="cmp12-side left">
          <div className="cmp12-author">📖 Biblijska razina</div>
          <div className="cmp12-period">DOSLOVNO ČITANJE - KNJIGA O JUDITI (ST. ZAVJET)</div>
          {rows.map(([l, b]) => (
            <div className="cmp12-row" key={l}><span className="cmp12-lbl">{l}</span><span>{b}</span></div>
          ))}
        </div>
        <div className="cmp12-vs"><span className="cmp12-vs-inner">=</span></div>
        <div className="cmp12-side">
          <div className="cmp12-author">🏰 Alegorijska razina</div>
          <div className="cmp12-period">ALEGORIJSKO ČITANJE - HRVATSKA 1493.-1521.</div>
          {rows.map(([l, , a]) => (
            <div className="cmp12-row" key={l}><span className="cmp12-lbl">{l}</span><span>{a}</span></div>
          ))}
        </div>
      </div>
    </>
  );
}

const POP_MARULIC = [
  { film: '🗿 Kip na Peristilu - Split', title: 'Najfotografiranije mjesto Splita', source: 'Ivan Meštrović je 1924. postavio Marulićev kip na Voćnom trgu u Splitu. Jedna od najpoznatijih javnih skulptura u RH. Turisti ga fotografiraju ne znajući tko je - ali Split bi bez njega bio drugačiji.' },
  { film: '📚 Institucija - 100+ europskih izdanja', title: 'Jedini hrv. renesansni međunarodni bestseller', source: 'De institutione bene vivendi per exempla sanctorum (1507.) preveden na sve europske jezike za Marulićeva života. Jedini hrv. pisac tog doba poznat u Europi. Erasmo ga citira - svjedočanstvo prvog reda.' },
  { film: '🏆 Marulićevi dani - Split', title: 'Književna nagrada i festival', source: 'Marulićevi dani - godišnji festival hrv. drame u Splitu od 1991. Dodjeljuje se nagrada "Marul" za najbolju hrv. dramu. Marulić je identitetski simbol splitske kulturne scene.' },
  { film: '🇭🇷 "Otac hrv. književnosti"', title: 'Naslov koji traje 500 godina', source: 'Naziv koji je dobio od suvremenika i zadržao do danas. Nije PR konstrukt - Marulić je zaista bio prvi koji je na hrvatskom postigao ep europske razine i koji je bio preveden u Europu.' },
  { film: '📖 Judita na suvremenom HR jeziku', title: 'Modernizacije i kritička izdanja', source: 'Judita je višestruko modernizirana - najpoznatije HAZU kritičko izdanje (1950., 1988., 2001.). Dostupna na internetu. Jedini renesansni hrv. ep koji se redovito čita u školama.' },
  { film: '🌍 Judita i europski ep - uz Tassa', title: 'Marulić anticipira Tassa za 80 godina', source: 'Tasso piše Oslobođeni Jeruzalem (1581.) - 80 godina poslije Judite - isti žanr, ista tema (kršćani vs. muslimani). Marulić anticipira jednu od ključnih europskih tradicija.' },
];

export function PopKulturaMarulic() {
  return (
    <>
      <style>{CSS_POP12}</style>
      <SH12 label="Marulić i Judita danas" style={{ marginTop: 24 }} />
      <div className="pop12">
        {POP_MARULIC.map((p, i) => (
          <div className="pop12-card" key={i}>
            <div className="pop12-film">{p.film}</div>
            <div className="pop12-title">{p.title}</div>
            <div className="pop12-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

const PJEVANJA = [
  { br: 'I', naslov: 'Ekspozicija - Nabukodonosor šalje Holoferna', tag: 'IN MEDIAS RES', stih: '"Ki hoće slišati čudesa Božja starim, / neka posluša Judite kriposti harim."', funk: 'Invokacija + ekspozicija. In medias res - Marulić počinje od slanja Holoferna, ne od Nabukodonosorova podrijetla. Antička epska tehnika.', esej: 'Uspostavljanje temeljne napetosti: golema sila (Holofern) vs. mali vjernički narod (Betulija). Teološki i politički argument istovremeno. Čitatelj 1501. odmah razumije - Holofernova vojska = osmanski prodori.' },
  { br: 'II', naslov: 'Kriza - Judita se pojavljuje', tag: 'UVOD PROTAGONISTICE', stih: '"Biše tada udova, ka živi u gradu, / po imenu Judita u lipu porodu."', funk: 'Holofern opsijeda Betuliju. Starešine planiraju predaju ako ne dođe pomoć. U tom momentu krize - Judita.', esej: 'Uvođenje heroine u trenutku najveće krize je dramatski genij. Judita je suprotnost Holofernu: mala fizički, golema moralno. Alegorija: Hrvatska je mala zemlja, ali vjera je čini jakom.' },
  { br: 'III', naslov: 'Kulminacija - Molitva i odlazak', tag: 'EKFRAZA - PSIHOLOGIZACIJA', stih: '"Gospode svemogi, ki si stvor nebesa, / pogledaj na tugu i plač naroda svoga."', funk: 'Judita se moli - dugo i žarko. Zatim se uljepšava: svečana odjeća, miris, nakit. Odlazi s Abrom u Holofernov tabor.', esej: 'III. pjevanje sadrži najljepša mjesta u hrv. renesansnoj lirici - ekfraza Juditina tijela. Molitva + uljepšavanje = paradoks koji Marulić razrješuje: ljepota kao oružje Božje providnosti, ne taština.' },
  { br: 'IV', naslov: 'Holofernova gozba - dramska ironija', tag: 'IRONIJA - UBOJSTVO', stih: '"I u tomzi času nožem mu odsiče / s tila glavu, ka mu niz skalice stiče."', funk: 'Holofern priređuje gozbu, Judita pleše. Holofern se opija, gosti odlaze. Judita uzima Holofernov mač - dva udarca, glava je u torbi.', esej: 'Dramski vrhunac - ironija: zavojevač cijelog poznatog svijeta pobijeđen vinom i ženom. Marulić naglašava: tjelesna moć i oholost vode u propast. Teološki problem: ubojstvo je grijeh - ali Bog odobrava.' },
  { br: 'V', naslov: 'Povratak - peripetija', tag: 'PERIPETIJA - KOLEKTIV', stih: '"Ovo vam glava je tiranina zla, / ka je hotila nas dat pod jaram zla."', funk: 'Judita i Abra ulaze u Betuliju s glavom. Vojska izlazi, neprijatelji bez vojskovođe bježe. Betulija spašena.', esej: 'V. pjevanje je trijumf kolektiva - Judita je bila instrument, cijeli narod sudjeluje u pobjedi. Kolektivna dimenzija alegorije: svi Hrvati trebaju biti Judite. Klasična epska peripetija (usp. Ilijada).' },
  { br: 'VI', naslov: 'Epilog - Zahvala i moralna pouka', tag: 'MORAL - ANTITURSKI APEL', stih: '"Blagovsi, duše moja, Gospoda svemoga, / ki meni pomaga u trudu svakoga."', funk: 'Svečana procesija, himne, zahvale. Marulić umeće moralnu pouku. Eksplicitni antiturski apel - jedini trenutak gdje izlazi iz alegorijskog registra.', esej: 'Kraj Judite je istovremeno kraj alegorije i početak direktnog govora Marulića čitatelju (Hrvatu 16. st.). Raritet u renesansnoj književnosti: autor rupturira fikciju da govori izravno. Za esej: VI. pjevanje dokazuje da je Judita pisana s konkretnim političkim ciljem, ne samo literarnim.' },
];

export function AccordionPjevanja() {
  return (
    <>
      <style>{CSS_SC12}</style>
      <SH12 label="Judita - 6 pjevanja" style={{ marginBottom: 8 }} />
      <div className="sc12s">
        {PJEVANJA.map((p) => (
          <details className="sc12" key={p.br}>
            <summary className="sc12-sum">
              <div className="sc12-num">{p.br}</div>
              <div className="sc12-ttl">{p.naslov}</div>
              <span className="sc12-meta">{p.tag}</span>
              <span className="sc12-chev">▾</span>
            </summary>
            <div className="sc12-body">
              <div className="sc12-quote">{p.stih}</div>
              <div className="sc12-why"><b>Dramatska funkcija:</b> {p.funk}</div>
              <div className="sc12-note">
                <div className="sc12-note-lbl">ZA ESEJ:</div>
                {p.esej}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

const ESEJ_BRIDGE = [
  {
    br: '🎭',
    naslov: 'Judita u eseju o Petrarci',
    tag: 'PETRARCA - RECEPCIJA',
    uvod: 'Esej o Petrarci traži recepciju petrarkizma u europskim i hrv. književnostima. Judita nudi negativni primjer - Marulić kao suvremenik hrv. petrarkista ide sasvim drukčijim putem.',
    recenice: [
      '"Dok su hrv. petrarkisti (Menčetić, Džore Držić) preuzimali Petrarkin ljubavno-lirski repertoar, Marulić je birao epski žanr i religiozno-domoljubni sadržaj - pokazujući da humanizam u Hrvata nije jednobojan."',
      '"Petrarcin sonet je forma introspektivnog ja; Marulićev dvanaesterac je forma kolektivnog glasa. Obje su renesansne forme, ali s potpuno suprotnim subjektom: jedan je lirski ljubavnik, drugi je epski narod."',
    ],
    formula: '"Petrarkin utjecaj na hrv. književnost nije bio jednoznačan. Dok su petrarkisti [X] preuzimali [Y], Marulić - suvremenik koji je sigurno poznavao petrarkizam - ide potpuno drukčijim putem. To pokazuje da hrvatska renesansa nije pasivni prijevod europskog modela, nego kreativna prilagodba lokalnim potrebama."',
  },
  {
    br: '🎭',
    naslov: 'Judita u eseju o Calderonu (Život je san)',
    tag: 'CALDERON - PROVIDNOST',
    uvod: 'Život je san (1635.) i Judita (1501.) dijele temu: sudbina, slobodna volja i Božja providnost. Oba su kršćanski humanisti koji se pitaju: može li čovjek slobodnom voljom mijenjati sudbinu?',
    recenice: [
      '"I Marulić (Judita, 1501.) i Calderon (Život je san, 1635.) postavljaju isti teološki problem: može li čovjek slobodnom voljom promijeniti sudbinu? Obojica odgovaraju potvrdno - uz Božju pomoć."',
      '"Dok Sigismund mora odrasti u kazni i prihvatiti ograničenja slobode, Judita djeluje odmah - hrabro, s molitvom i odlučnošću. Oboje su instrumenti Božje providnosti u dvjema različitim dramskim formama."',
    ],
    formula: '"[Obvezatno djelo] i Marulićeva Judita (1501.) dijele temeljnu teološku pretpostavku: [zajednička tema]. Unatoč vremenskoj i žanrovskoj razlici - [djelo je X, Judita je Y] - oboje pokazuju [zajednički zaključak]."',
  },
  {
    br: '✍️',
    naslov: 'Judita u eseju o Krleži (Glembajevi)',
    tag: 'KRLEZA - TRADICIJA',
    uvod: 'Glembajevski ciklus nije renesansno djelo - ali Krleža se svjesno postavlja u tradiciju hrv. književnosti. Judita tu postaje most između renesansne i moderne hrv. književnosti.',
    recenice: [
      '"Marulić u Juditi gradi ep kao kolektivni glas hrv. naroda; Krleža u Glembajevima dekonstruira tu kolektivnu heroičnost - od epa nade do drame raspadanja."',
      '"Tradicija hrv. epa (Marulić -> Gundulić -> Mažuranić) završava u Krleži koji ju ironizira: gdje je nekad bio Bog koji pomaže Juditi, kod Glembajeva je ostao samo novac i raspad."',
    ],
    formula: '"Hrv. književna tradicija od Marulića do Krleže opisuje luk od [Marulićeva tema] do [Krležina tema]. Marulić vjeruje u [X]; Krleža pokazuje što ostaje kad [X] nestane."',
  },
  {
    br: '📜',
    naslov: 'Judita u eseju o Shakespeareu (Hamlet)',
    tag: 'SHAKESPEARE - HEROIZAM',
    uvod: 'Na prvi pogled daleko - ali oba teksta bave se moralnim kompleksitetom heroičnog čina. Judita ubija, Hamlet ne može ubiti. Oboje su heroji koji se susreću s etičkim problemom nasilja.',
    recenice: [
      '"Dok Hamlet beskonačno odgađa osvetu jer je moralno paraliziran pitanjem ubojstva, Judita ubija odlučno - jer je njezin čin sankcioniran Božjom providnošću. Renesansni kršćanski okvir razrješuje moralni problem koji Shakespeareov Hamlet ne može razriješiti."',
      '"I Judita i Hamlet su heroji koji moraju ubiti nekoga moćnijeg od sebe. Razlika je temeljna: Judita ima transcendentno opravdanje (Bog), Hamlet nema - i upravo ta razlika razdvaja renesansni ep od elizabetanske tragedije."',
    ],
    formula: '"Marulićeva Judita i Shakespeareov Hamlet suočavaju heroje s istim problemom - moralnim opravdanjem ubojstva. [Daljnji argument o razlici]."',
  },
];

export function AccordionEsejBridgeH12() {
  return (
    <>
      <style>{`${CSS_SC12}${CSS_INFO12}`}</style>
      <div className="h12i" style={{ marginBottom: 14 }}>
        <div className="h12i-lbl">📌 Judita NIJE esejsko djelo 2026. - ali je moćan kontekstualni argument</div>
        <div className="h12i-txt">Svaki esej o obvezatnim djelima može dobiti bonus bod ako se Judita navede kao kontekstualni primjer. Formula: "[Obvezatno djelo] + Marulić Judita = pokazuješ da razumiješ širi kontekst hrv. i europske književnosti."</div>
      </div>
      <div className="sc12s">
        {ESEJ_BRIDGE.map((b, i) => (
          <details className="sc12" key={i}>
            <summary className="sc12-sum">
              <div className="sc12-num sc12-num-ico">{b.br}</div>
              <div className="sc12-ttl">{b.naslov}</div>
              <span className="sc12-meta">{b.tag}</span>
              <span className="sc12-chev">▾</span>
            </summary>
            <div className="sc12-body">
              <div className="sc12-why"><b>Kontekst:</b> {b.uvod}</div>
              <div className="sc12-recs">
                {b.recenice.map((r, j) => (
                  <div className="sc12-rec" key={j}>{r}</div>
                ))}
              </div>
              <div className="sc12-note">
                <div className="sc12-note-lbl">FORMULA ZA UBACIVANJE U ESEJ:</div>
                {b.formula}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}


/* AUTO-GENERATED AUTHOR EMBEDS */

const CSS_H12A_AUTHOR_EMBED = `
  .h12a-author-wrap{margin:16px 0 20px}
  .h12a-author-wrap .author-card{
    border:1px solid var(--bdm, rgba(203,176,145,.35));
    border-radius:var(--r3, 16px);
    background:linear-gradient(180deg, rgba(20,14,12,.86), rgba(20,14,12,.72));
    overflow:hidden;
    box-shadow:0 10px 28px rgba(0,0,0,.18);
  }
  .h12a-author-wrap .ac-header{background:rgba(255,255,255,.02)}
  .h12a-author-wrap .ac-work-item{background:rgba(255,255,255,.02)}
  @media (max-width: 700px){
    .h12a-author-wrap{margin:12px 0 16px}
  }
`;

function H12AAuthorEmbed({ html }) {
  return (
    <>
      <style>{CSS_H12A_AUTHOR_EMBED}</style>
      <div className="h12a-author-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}


const H12A_AUTHORPROFILEMARULICH12_HTML = `    <div class="author-card">
      <div class="ac-header">
        <div class="ac-monogram">MM</div>
        <div class="ac-meta">
          <div class="ac-name">Marko Marulić</div>
          <div class="ac-dates">Split · 1450.–1524.</div>
          <div class="ac-tags" style="margin-top:6px">
            <span class="hchip br" style="font-size:8px">„otac hrv. književnosti"</span>
            <span class="hchip go" style="font-size:8px">kršćanski humanist</span>
            <span class="hchip pa" style="font-size:8px">čakavica + latinština</span>
          </div>
        </div>
      </div>
      <div class="ac-body">
        <p>Marulić se školovao u splitskoj humanističkoj školi i vjerojatno u Italiji (Padova). Cijeloga života bavio se i pravnim i javnim poslovima u Splitu. Pisao je <strong>na latinskom</strong> (moralno-teološka proza) i <strong>na hrvatskom</strong> (ep, lirika). U posveti Judite navodi da prati „<b>začinjavce</b>" — hrv. srednjovjekovne pjesnike od kojih preuzima vrstu rime.</p>
        <p>Naziva se „<em>ocem hrvatske književnosti</em>" — prvi autor koji je na hrvatskom ostvario ep europske razine. Njegova latinska djela prevođena su diljem Europe.</p>
        <div class="ac-works">
          <div class="ac-works-lbl">Ključna djela</div>
          <div class="ac-work-item">
            <div class="ac-badge">📖</div>
            <div>
              <div class="ac-work-title">Judita</div>
              <div class="ac-work-meta">Napisana 1501. · Tiskana 1521. u Veneciji · 6 pjevanja · 2126 dvanaesteraca</div>
              <div class="ac-work-desc">Biblijsko-kršćanski ep. Udovica Judita ubija asirskog vojvodu Holoferna. <strong>Alegorija:</strong> Holofern = Turci, Judita = Hrvatska/vjera, Betulija = hrv. gradovi. Dvostruko rimovani dvanaesterci — spoj hrv. usmene tradicije i humanističkog epa.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📜</div>
            <div>
              <div class="ac-work-title">Suzana</div>
              <div class="ac-work-meta">Hrv. ep · biblijski predložak (Knjiga o Danielu)</div>
              <div class="ac-work-desc">Drugi hrv. ep Marulića — pobožna Suzana brani čast pred lažnim svjedocima. Isti moralni obrazac kao Judita: vjera + vrlina pobjeđuju.<em> Manja popularnost od Judite.</em></div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">🌍</div>
            <div>
              <div class="ac-work-title">Evangelistarium</div>
              <div class="ac-work-meta">Latinsko djelo · 1516. · 100+ europskih izdanja</div>
              <div class="ac-work-desc">Moralno-teološka proza na latinskom. <strong>Europski bestseller 16. st.</strong> — po broju izdanja jedan od najpopularnijih hrv. autora u Europi. Marulić je europski intelektualac, ne samo lokalni pisac.</div>
            </div>
          </div>
          <div class="ac-work-item">
            <div class="ac-badge">📝</div>
            <div>
              <div class="ac-work-title">Poklad i korizma · Tuženje grada Hjerozolima</div>
              <div class="ac-work-meta">Hrv. lirska i moralistička djela</div>
              <div class="ac-work-desc">Manji hrv. tekstovi — pokazuju raspon od moralne satire (Poklad i korizma) do tugaljive meditacije o turskom razaranju (Tuženje). Svjedoče da Marulić nije samo epičar.</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

export function AuthorProfileMarulicH12() {
  return <H12AAuthorEmbed html={H12A_AUTHORPROFILEMARULICH12_HTML} />;
}

const CSS_H12A_AUTH_EMBED = `
  .h12a-auth-wrap{margin:12px 0 18px}
  .h12a-auth-wrap .auth-box{
    border:1px solid var(--bdm, rgba(203,176,145,.35));
    border-radius:var(--r3, 16px);
    background:linear-gradient(180deg, rgba(20,14,12,.86), rgba(20,14,12,.72));
    box-shadow:0 10px 28px rgba(0,0,0,.15);
  }
`;

function H12AAuthEmbed({ html }) {
  return (
    <>
      <style>{CSS_H12A_AUTH_EMBED}</style>
      <div className="h12a-auth-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H12A_NCVVO_AUTH_BOX_HTML = `    <div class="auth-box">
      <div class="auth-ttl">📋 Što NCVVO može pitati iz H12</div>
      <div class="auth-txt">
        Prema ispitnom katalogu 2025./2026., <strong>Judita Marka Marulića</strong> navodi se u popisu propisanih djela (ishod B.3.2.) za Teoriju i povijest književnosti.
        Može se pojaviti: <em>(a)</em> ulomak Judite za čitanje i analizu u višestrukom izboru, <em>(b)</em> pitanje o žanru, stihu ili alegoriji,
        <em>(c)</em> smještanje u književnopovijesno razdoblje. <strong>Judita NIJE na popisu esejskih djela 2025./2026.</strong>
        Ali poznavanje Marulića i Judite pomaže u eseju o Petrarci (hrv. recepcija petrarkizma), Calderónu (ep vs. drama) ili Krleži (tradicija epike).
      </div>
    </div>`;

export function NcvvoAuthBoxH12() {
  return <H12AAuthEmbed html={H12A_NCVVO_AUTH_BOX_HTML} />;
}

const CSS_H12A_DISCERE_EMBED = `
  .h12a-discere-wrap .discere-banner{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H12ADiscereEmbed({ html }) {
  return (
    <>
      <style>{CSS_H12A_DISCERE_EMBED}</style>
      <div className="h12a-discere-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H12A_DISCERE_BANNER_PRIMARY_HTML = `    <div class="discere-banner" onclick="window.location.href='#discere'">
      <div class="discere-ico">🎯</div>
      <div class="discere-txt">
        <div class="discere-ttl">Discere · Simulator ispita</div>
        <div class="discere-sub">Vježbaj pitanja tipa NCVVO o Marulića i Juditi — višestruki izbor, vremensko ograničenje, bodovanje</div>
      </div>
      <div class="discere-arrow">→</div>
    </div>`;

export function DiscereBannerPrimaryH12() {
  return <H12ADiscereEmbed html={H12A_DISCERE_BANNER_PRIMARY_HTML} />;
}

const CSS_H12A_VIDEO_EMBED = `
  .h12a-video-wrap .yt-card{box-shadow:0 8px 22px rgba(0,0,0,.14)}
`;

function H12AVideoEmbed({ html }) {
  return (
    <>
      <style>{CSS_H12A_VIDEO_EMBED}</style>
      <div className="h12a-video-wrap" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const H12A_VIDEO_CARD_PRIMARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Marulić+Judita+analiza+lektira+matura+hrvatski" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Judita — analiza na hrvatskom</div>
        </div>
      </a>`;

export function VideoCardPrimaryH12() {
  return <H12AVideoEmbed html={H12A_VIDEO_CARD_PRIMARY_HTML} />;
}

const H12A_VIDEO_CARD_SECONDARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Marko+Marulić+otac+hrvatske+književnosti+Split" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div>
          <div class="yt-title">Marko Marulić — život i opus</div>
        </div>
      </a>`;

export function VideoCardSecondaryH12() {
  return <H12AVideoEmbed html={H12A_VIDEO_CARD_SECONDARY_HTML} />;
}

const H12A_VIDEO_CARD_TERTIARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Judith+biblical+story+art+Botticelli+allegory" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div>
          <div class="yt-title">Judith — biblical story &amp; allegory</div>
        </div>
      </a>`;

export function VideoCardTertiaryH12() {
  return <H12AVideoEmbed html={H12A_VIDEO_CARD_TERTIARY_HTML} />;
}

const H12A_VIDEO_CARD_QUATERNARY_HTML = `      <a class="yt-card" href="https://www.youtube.com/results?search_query=Croatian+Renaissance+epic+poem+Marko+Marulic" target="_blank" rel="noopener noreferrer">
        <div class="yt-thumb">
          <div class="yt-play">▶</div>
        </div>
        <div class="yt-body">
          <div class="yt-lang"><span class="yt-flag">🎬</span> EN</div>
          <div class="yt-title">Marulić &amp; Croatian Renaissance epic</div>
        </div>
      </a>`;

export function VideoCardQuaternaryH12() {
  return <H12AVideoEmbed html={H12A_VIDEO_CARD_QUATERNARY_HTML} />;
}

