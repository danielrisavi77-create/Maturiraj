'use client';

const CSS_HDR = `
  .h14h{display:flex;align-items:center;gap:10px;margin:14px 0 6px}
  .h14h-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .h14h-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;

function H14Header({ label, style }) {
  return (
    <>
      <style>{CSS_HDR}</style>
      <div className="h14h" style={style}>
        <div className="h14h-line" />
        <div className="h14h-badge">{label}</div>
        <div className="h14h-line" />
      </div>
    </>
  );
}

const CSS_QUOTE = `
  .h14q{border:1px solid var(--bd-go);border-radius:var(--r4);padding:22px 24px;margin:12px 0 18px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.02));position:relative;overflow:hidden}
  .h14q::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,var(--gold),transparent)}
  .h14q-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:8px}
  .h14q-text{font-family:var(--display);font-size:15px;font-weight:700;color:var(--t1);line-height:1.45;font-style:italic;margin-bottom:8px}
  .h14q-meta{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.6}
`;

const CSS_CARD = `
  .h14c{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:14px 0;background:var(--sur)}
  .h14c-h{padding:16px 18px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;gap:12px;align-items:flex-start}
  .h14c-m{width:44px;height:44px;border-radius:var(--r2);display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:20px;font-weight:700;color:var(--gold);background:linear-gradient(135deg,#0a1a0a,#1a3a1a)}
  .h14c-n{font-family:var(--display);font-size:17px;font-weight:700;color:var(--t1);margin-bottom:2px}
  .h14c-d{font-family:var(--mono);font-size:9px;color:var(--bronze);letter-spacing:1px;text-transform:uppercase}
  .h14c-b{padding:16px 18px}
  .h14c-b p{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2);margin:0 0 10px}
  .h14c-works{margin-top:8px;padding-top:10px;border-top:1px solid var(--bd)}
  .h14c-w{display:flex;gap:10px;padding:8px 0;border-bottom:1px solid var(--bd)}
  .h14c-w:last-child{border-bottom:none}
  .h14c-badge{width:24px;height:24px;border:1px solid var(--bd);border-radius:8px;background:var(--ele);display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0}
  .h14c-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold)}
  .h14c-sub{font-family:var(--mono);font-size:8px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
`;

const CSS_TIMELINE = `
  .h14tl{position:relative;padding:12px 0;margin:12px 0 18px}
  .h14tl::before{content:'';position:absolute;left:21px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .h14tl-r{display:flex;gap:14px;margin-bottom:10px}
  .h14tl-d{width:42px;height:42px;border-radius:50%;border:2px solid var(--bronze);background:var(--card);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;color:var(--bronze);font-weight:700;flex-shrink:0}
  .h14tl-d.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#f5e6d3;border-color:var(--gold)}
  .h14tl-b{flex:1;padding:8px 12px;border:1px solid var(--bdm);border-radius:var(--r2);background:var(--card)}
  .h14tl-t{font-family:var(--display);font-size:12px;color:var(--bronze-l);font-weight:700;margin-bottom:2px}
  .h14tl-x{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
`;

const CSS_ACC = `
  .h14a-list{display:flex;flex-direction:column;gap:8px;margin:10px 0 18px}
  .h14a{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden}
  .h14a[open]{border-color:var(--bd-go)}
  .h14a-s{display:grid;grid-template-columns:auto 1fr auto auto;gap:10px;align-items:center;padding:12px 14px;cursor:pointer;list-style:none}
  .h14a-s::-webkit-details-marker{display:none}
  .h14a-n{font-family:var(--display);font-size:14px;color:var(--bronze-l);font-weight:700;min-width:28px}
  .h14a-t{font-family:var(--serif);font-size:13.5px;color:var(--t1);font-weight:600}
  .h14a-m{font-family:var(--mono);font-size:8px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;padding:2px 7px;border:1px solid var(--bdm);border-radius:10px;background:var(--ele)}
  .h14a-c{font-size:10px;color:var(--t3)}
  .h14a-b{padding:0 14px 12px}
  .h14a-q{font-family:var(--serif);font-size:12.5px;font-style:italic;color:var(--t1);line-height:1.6;padding:10px 12px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:8px}
  .h14a-x{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.6}
`;

const CSS_CMP = `
  .h14cmp{display:grid;grid-template-columns:1fr auto 1fr;margin:12px 0 18px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .h14cmp-s{padding:16px;background:var(--sur)}
  .h14cmp-s.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .h14cmp-v{width:40px;display:flex;align-items:center;justify-content:center;border-left:1px solid var(--bdm);border-right:1px solid var(--bdm);background:var(--ele);font-family:var(--display);font-size:10px;letter-spacing:2px;color:var(--t3);font-weight:700}
  .h14cmp-a{font-family:var(--display);font-size:14px;color:var(--gold);font-weight:700;margin-bottom:3px}
  .h14cmp-p{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px}
  .h14cmp-r{display:flex;gap:6px;font-family:var(--serif);font-size:12.5px;color:var(--t2);margin-bottom:4px}
  .h14cmp-l{font-family:var(--mono);font-size:8.5px;color:var(--t3);font-weight:700;min-width:58px}
`;

const CSS_GRID = `
  .h14g{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:8px 0 16px}
  .h14g-c{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px;text-align:center}
  .h14g-i{font-size:20px;margin-bottom:5px;display:block}
  .h14g-v{font-family:var(--display);font-size:14px;color:var(--gold);font-weight:700}
  .h14g-l{font-family:var(--mono);font-size:8px;letter-spacing:1px;color:var(--t3);text-transform:uppercase}
  .h14g-s{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:2px}
`;

const CSS_SIMB = `
  .h14s{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:10px 0 14px}
  .h14s-i{display:flex;gap:10px;padding:10px 12px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2)}
  .h14s-ico{font-size:18px;flex-shrink:0}
  .h14s-n{font-family:var(--display);font-size:12px;color:var(--gold);font-weight:700;margin-bottom:2px}
  .h14s-d{font-family:var(--serif);font-size:12px;color:var(--t2);line-height:1.45}
`;

const CSS_POP = `
  .h14p{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:10px 0 18px}
  .h14p-c{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px}
  .h14p-k{font-family:var(--mono);font-size:8px;letter-spacing:1px;color:var(--blue,#6b9bff);text-transform:uppercase;margin-bottom:4px}
  .h14p-t{font-family:var(--display);font-size:12.5px;color:var(--t1);font-weight:700;margin-bottom:4px}
  .h14p-s{font-family:var(--serif);font-size:12px;color:var(--t3);line-height:1.5}
`;

const CSS_WRAP = `
  .h14w{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:18px;margin:0 0 18px}
  .h14w-l{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:12px}
`;

const TIMELINE = [
  { date: '1813.', major: false, title: 'Vrhovac poziva na čuvanje pjesama', desc: 'Rani impuls jezičnog i kulturnog buđenja.' },
  { date: '1814.', major: true, title: 'Rođenje Ivana Mažuranića', desc: 'Novi Vinodolski.' },
  { date: '1835.', major: true, title: 'Danica i preporod', desc: 'Početak snažnije kulturne mobilizacije.' },
  { date: '1846.', major: true, title: 'Objava Smail-age', desc: 'Ključno djelo hrvatskog romantizma.' },
  { date: '1873.', major: true, title: 'Ban Hrvatske', desc: 'Pučki ban i reformator.' },
];

function Accordion({ items }) {
  return (
    <>
      <style>{CSS_ACC}</style>
      <div className="h14a-list">
        {items.map((it) => (
          <details className="h14a" key={it.n}>
            <summary className="h14a-s">
              <div className="h14a-n">{it.n}</div>
              <div className="h14a-t">{it.t}</div>
              <span className="h14a-m">{it.m}</span>
              <span className="h14a-c">▾</span>
            </summary>
            <div className="h14a-b">
              <div className="h14a-q">{it.q}</div>
              <div className="h14a-x">{it.x}</div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

export function AuthorCardMazuranic({ context = 'l0' }) {
  return (
    <>
      <style>{CSS_CARD}</style>
      <div className="h14c">
        <div className="h14c-h">
          <div className="h14c-m">M</div>
          <div>
            <div className="h14c-n">Ivan Mažuranić</div>
            <div className="h14c-d">Novi Vinodolski · 1814. – Zagreb · 1890.</div>
            <div style={{ marginTop: 6 }}>
              <span className="pill p-br" style={{ fontSize: 10 }}>preporod</span>{' '}
              <span className="pill p-go" style={{ fontSize: 10 }}>pučki ban</span>{' '}
              <span className="pill p-t" style={{ fontSize: 10 }}>romantizam</span>{' '}
              {context === 'l1' && <span className="pill p-pa" style={{ fontSize: 10 }}>obvezatno čitanje 2026</span>}
            </div>
          </div>
        </div>
        <div className="h14c-b">
          <p>Pjesnik, jezikoslovac i državnik. Autor spjeva <strong>Smrt Smail-age Čengića</strong> (1846.) i jedan od ključnih ljudi hrvatskog preporoda.</p>
          <div className="h14c-works">
            <div className="h14c-w">
              <div className="h14c-badge">⚔️</div>
              <div>
                <div className="h14c-title">Smrt Smail-age Čengića</div>
                <div className="h14c-sub">1846. · 5 pjevanja · 1134 stiha</div>
              </div>
            </div>
            <div className="h14c-w">
              <div className="h14c-badge">📖</div>
              <div>
                <div className="h14c-title">Osman — XIV. i XV. pjevanje</div>
                <div className="h14c-sub">1842. · dopuna Gundulićeva epa</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function AuthorProfileH14Preporod() {
  return <AuthorCardMazuranic context="l0" />;
}

export function HeroQuoteSmail() {
  return (
    <>
      <style>{CSS_QUOTE}</style>
      <div className="h14q">
        <div className="h14q-eye">Najpoznatiji citat djela</div>
        <div className="h14q-text">"Boj se onoga tko je viko bez golema mrijet jada!"</div>
        <div className="h14q-meta">Durakov savjet Smail-agi uvodi glavnu moralnu os djela: tiranija ignorira mudrost i ubrzava vlastiti pad.</div>
      </div>
    </>
  );
}

export function StatCardsSmail() {
  const stats = [
    { i: '📅', v: '1846.', l: 'Objava', s: 'almanah Iskra' },
    { i: '📖', v: '5', l: 'Pjevanja', s: 'kompozicija' },
    { i: '📝', v: '1134', l: 'Stiha', s: 'ukupno' },
    { i: '⚖️', v: '623/34', l: 'Harač/Kob', s: 'asimetrija' },
  ];
  return (
    <>
      <style>{CSS_GRID}</style>
      <div className="h14g">
        {stats.map((s) => (
          <div className="h14g-c" key={s.l}>
            <span className="h14g-i">{s.i}</span>
            <div className="h14g-v">{s.v}</div>
            <div className="h14g-l">{s.l}</div>
            <div className="h14g-s">{s.s}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function TimelineMazuranic() {
  return (
    <>
      <style>{CSS_TIMELINE}</style>
      <div className="h14tl">
        {TIMELINE.map((e, idx) => (
          <div className="h14tl-r" key={idx}>
            <div className={`h14tl-d${e.major ? ' major' : ''}`}>{e.date}</div>
            <div className="h14tl-b">
              <div className="h14tl-t">{e.title}</div>
              <div className="h14tl-x">{e.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function AccordionLikovi() {
  const items = [
    { n: '⚔️', t: 'Smail-aga — antagonist', m: 'ANTAGONIST', q: 'Tiranska figura.', x: 'Lik nasilja i oholosti; pad ima moralnu funkciju.' },
    { n: '🔄', t: 'Novica — preobrazba', m: 'TRANSFORMACIJA', q: 'Od kavaza do osvetnika.', x: 'Središnji moralni luk pojedinca.' },
    { n: '🧓', t: 'Durak — mudri glas', m: 'MUDROST', q: 'Boj se onoga...', x: 'Ignorirani savjet pokreće katastrofu.' },
  ];
  return <Accordion items={items} />;
}

export function AccordionStilskaSredstva() {
  const items = [
    { n: 'SA', t: 'Slavenska antiteza', m: 'TEHNIKA', q: 'Je li hajduk... Nit je hajduk...', x: 'Ritmička napetost i prepoznatljiv usmeni stil.' },
    { n: 'K', t: 'Kontrast', m: 'TEMELJ', q: 'Smail-aga vs Crnogorci', x: 'Moralna polarizacija u službi ideje.' },
    { n: 'S', t: 'Osmerac i deseterac', m: 'STIH', q: 'Mješoviti metar', x: 'Ritam se prilagođava funkciji prizora.' },
  ];
  return <Accordion items={items} />;
}

export function AccordionTemeIdeje() {
  const items = [
    { n: 'T1', t: 'Povijesna razina', m: 'KONTEKST', q: 'Sukob Turaka i kršćana.', x: 'Povijesna jezgra pretvara se u preporodnu poruku.' },
    { n: 'T2', t: 'Univerzalna razina', m: 'SLOBODA', q: 'Sloboda vs tiranija.', x: 'Temeljna idejna osa djela.' },
    { n: 'GI', t: 'Glavna ideja', m: 'SINTEZA', q: 'Prolaznost sile.', x: 'Poanta je značenje borbe, ne samo bitka.' },
  ];
  return <Accordion items={items} />;
}

export function SimboliGridSmail() {
  const simboli = [
    { i: '🏔️', n: 'Planina/Crna Gora', d: 'Prostor slobode i otpora.' },
    { i: '🌙', n: 'Noć', d: 'Prijelaz i preobrazba.' },
    { i: '⛈️', n: 'Oluja', d: 'Priroda kao moralni sudac.' },
    { i: '💰', n: 'Harač', d: 'Simbol tiranije.' },
    { i: '⚖️', n: 'Kob', d: 'Sudbinski pad nepravde.' },
    { i: '🕍', n: 'Lovćen', d: 'Visina kao perspektiva istine.' },
  ];
  return (
    <>
      <style>{CSS_SIMB}</style>
      <H14Header label="Simboli i motivi" />
      <div className="h14s">
        {simboli.map((s, idx) => (
          <div className="h14s-i" key={idx}>
            <span className="h14s-ico">{s.i}</span>
            <div>
              <div className="h14s-n">{s.n}</div>
              <div className="h14s-d">{s.d}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Compare({ leftTitle, leftMeta, rightTitle, rightMeta, rows, label, vs = 'VS' }) {
  return (
    <>
      <style>{CSS_CMP}</style>
      <H14Header label={label} />
      <div className="h14cmp">
        <div className="h14cmp-s left">
          <div className="h14cmp-a">{leftTitle}</div>
          <div className="h14cmp-p">{leftMeta}</div>
          {rows.map((r) => (
            <div className="h14cmp-r" key={r.k}><span className="h14cmp-l">{r.k}</span><span>{r.l}</span></div>
          ))}
        </div>
        <div className="h14cmp-v">{vs}</div>
        <div className="h14cmp-s">
          <div className="h14cmp-a">{rightTitle}</div>
          <div className="h14cmp-p">{rightMeta}</div>
          {rows.map((r) => (
            <div className="h14cmp-r" key={r.k}><span className="h14cmp-l">{r.k}</span><span>{r.r}</span></div>
          ))}
        </div>
      </div>
    </>
  );
}

export function CompareSmailJudita() {
  const rows = [
    { k: 'Autor', l: 'Mažuranić', r: 'Marulić' },
    { k: 'Epoha', l: 'Preporod', r: 'Renesansa' },
    { k: 'Poruka', l: 'Sloboda kroz volju', r: 'Sloboda kroz providnost' },
  ];
  return <Compare leftTitle="Smrt Smail-age" leftMeta="H14" rightTitle="Judita" rightMeta="H12" rows={rows} label="Smrt Smail-age vs Judita" />;
}

export function CompareBarokPreporod() {
  const rows = [
    { k: 'Epoha', l: 'Barok', r: 'Preporod' },
    { k: 'Autor', l: 'Gundulić', r: 'Mažuranić' },
    { k: 'Junak', l: 'Plemstvo', r: 'Narod' },
  ];
  return <Compare leftTitle="Dubravka" leftMeta="H13" rightTitle="Smail-age" rightMeta="H14" rows={rows} label="Barok vs Preporod" vs="→" />;
}

export function CompareRomantiSmail() {
  const rows = [
    { k: 'Tip', l: 'Narodni ep', r: 'Roman u stihovima' },
    { k: 'Junak', l: 'Kolektiv', r: 'Individua' },
    { k: 'Ton', l: 'Patetičan', r: 'Ironičan' },
  ];
  return <Compare leftTitle="Smrt Smail-age" leftMeta="H14" rightTitle="Evgenij Onjegin" rightMeta="H06" rows={rows} label="Dva romantizma" />;
}

export function PopKulturaMazuranic() {
  const cards = [
    { k: '⚖️ Pučki ban', t: 'Jedini pučanin ban', s: 'Ban Hrvatske 1873.–1880.' },
    { k: '💶 Novčanica', t: 'Kulturna ikona', s: 'Mažuranić na 100 kn.' },
    { k: '🎓 Kanon', t: 'Školska prisutnost', s: 'Dugotrajno obvezatno čitanje.' },
  ];
  return (
    <>
      <style>{CSS_POP}</style>
      <H14Header label="Mažuranić danas" style={{ marginTop: 20 }} />
      <div className="h14p">
        {cards.map((c) => (
          <div className="h14p-c" key={c.t}>
            <div className="h14p-k">{c.k}</div>
            <div className="h14p-t">{c.t}</div>
            <div className="h14p-s">{c.s}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function HeroQuoteNocnik() {
  return (
    <>
      <style>{CSS_QUOTE}</style>
      <div className="h14q" style={{ margin: '10px 0 16px' }}>
        <div className="h14q-eye">Slavenska antiteza</div>
        <div className="h14q-text" style={{ fontSize: 14 }}>
          "Je li hajduk, il' uhoda turska... Nit je hajduk, nit uhoda turska, već Novica..."
        </div>
      </div>
    </>
  );
}

export function AccordionPjevanja() {
  const items = [
    { n: 'I', t: 'Agovanje', m: 'Početak', q: 'Tiranija na vrhuncu.', x: 'Durakov savjet i ignoriranje mudrosti.' },
    { n: 'II', t: 'Noćnik', m: 'Prijelaz', q: 'Novičin bijeg.', x: 'Transformacija identiteta.' },
    { n: 'III', t: 'Četa', m: 'Priprema', q: 'Moralna legitimacija.', x: 'Bez ovog dijela IV bi bio puka osveta.' },
    { n: 'IV', t: 'Harač', m: 'Kulminacija', q: 'Bitka i pad Smail-age.', x: 'Središnje, najopsežnije pjevanje.' },
    { n: 'V', t: 'Kob', m: 'Epilog', q: 'Filozofski završetak.', x: 'Poanta djela je značenje borbe.' },
  ];
  return (
    <>
      <H14Header label="Smrt Smail-age Čengića — 5 pjevanja" style={{ marginBottom: 8 }} />
      <Accordion items={items} />
    </>
  );
}

export function SVGNovicaArc() {
  return (
    <>
      <style>{CSS_WRAP}</style>
      <div className="h14w">
        <div className="h14w-l">Novičina transformacija</div>
        <svg viewBox="0 0 660 200" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}>
          <line x1="60" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,.12)" strokeWidth="2" />
          {[{ x: 60, c: '#DC322F', l: 'KRVNIK' }, { x: 180, c: '#e9b446', l: 'BOL' }, { x: 300, c: '#e9b446', l: 'BJEGUNAC' }, { x: 420, c: '#3ecf6e', l: 'POKRŠTENIK' }, { x: 540, c: '#3ecf6e', l: 'OSVETNIK' }].map((s, i) => (
            <g key={i}>
              <circle cx={s.x} cy="100" r="18" fill={s.c} opacity=".85" />
              <text x={s.x} y="84" textAnchor="middle" fontFamily="monospace" fontSize="9" fontWeight="700" fill={s.c}>{s.l}</text>
            </g>
          ))}
        </svg>
      </div>
    </>
  );
}

export function SVGTreRazine() {
  return (
    <>
      <style>{CSS_WRAP}</style>
      <div className="h14w">
        <div className="h14w-l">Tri razine čitanja</div>
        <svg viewBox="0 0 660 280" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}>
          <ellipse cx="330" cy="150" rx="290" ry="120" fill="rgba(107,155,255,.06)" stroke="rgba(107,155,255,.3)" strokeWidth="1.5" strokeDasharray="6,4" />
          <ellipse cx="330" cy="155" rx="200" ry="80" fill="rgba(232,201,122,.06)" stroke="rgba(232,201,122,.3)" strokeWidth="1.5" strokeDasharray="6,4" />
          <ellipse cx="330" cy="160" rx="110" ry="45" fill="rgba(220,50,47,.08)" stroke="rgba(220,50,47,.4)" strokeWidth="2" />
          <text x="330" y="152" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(220,50,47,.8)">KONKRETNA RAZINA</text>
        </svg>
      </div>
    </>
  );
}

const CSS_EMBED = `.h14e .yt-card,.h14e .discere-banner{box-shadow:0 8px 22px rgba(0,0,0,.14)}`;

function EmbedHtml({ html }) {
  return (
    <>
      <style>{CSS_EMBED}</style>
      <div className="h14e" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}

const DISCERE_HTML = `<div class="discere-banner" id="discere-t1" style="margin-top:18px" onclick="window.location.href=&#39;#discere&#39;"><div class="discere-ico">📖</div><div class="discere-txt"><div class="discere-ttl">Discere · Simulator ulomaka Smrti Smail-age</div><div class="discere-sub">Vježbaj analizu ulomaka iz sva 5 pjevanja · Pro plan</div></div><div class="discere-arrow">→</div></div>`;

const VIDEO_PRIMARY = `<a class="yt-card" href="https://www.youtube.com/results?search_query=Mažuranić+Smrt+Smail-age+Čengića+analiza+lektira" target="_blank" rel="noopener noreferrer"><div class="yt-thumb"><div class="yt-play">▶</div></div><div class="yt-body"><div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div><div class="yt-title">Smrt Smail-age Čengića — analiza</div></div></a>`;
const VIDEO_SECONDARY = `<a class="yt-card" href="https://www.youtube.com/results?search_query=hrvatski+narodni+preporod+ilirski+pokret+Gaj" target="_blank" rel="noopener noreferrer"><div class="yt-thumb"><div class="yt-play">▶</div></div><div class="yt-body"><div class="yt-lang"><span class="yt-flag">🇭🇷</span> HR</div><div class="yt-title">Hrv. narodni preporod — Ilirski pokret</div></div></a>`;
const VIDEO_TERTIARY = `<a class="yt-card" href="https://www.youtube.com/results?search_query=Ivan+Mazuranic+Croatian+national+revival+poem" target="_blank" rel="noopener noreferrer"><div class="yt-thumb"><div class="yt-play">▶</div></div><div class="yt-body"><div class="yt-lang"><span class="yt-flag">🇬🇧</span> EN</div><div class="yt-title">Mažuranić &amp; Croatian National Revival</div></div></a>`;
const VIDEO_QUATERNARY = `<a class="yt-card" href="https://www.youtube.com/results?search_query=national+awakening+19th+century+Balkans+history" target="_blank" rel="noopener noreferrer"><div class="yt-thumb"><div class="yt-play">▶</div></div><div class="yt-body"><div class="yt-lang"><span class="yt-flag">🎬</span> EN</div><div class="yt-title">National awakening — 19th century Balkans</div></div></a>`;

export function DiscereBannerPrimaryH14() { return <EmbedHtml html={DISCERE_HTML} />; }
export function VideoCardPrimaryH14() { return <EmbedHtml html={VIDEO_PRIMARY} />; }
export function VideoCardSecondaryH14() { return <EmbedHtml html={VIDEO_SECONDARY} />; }
export function VideoCardTertiaryH14() { return <EmbedHtml html={VIDEO_TERTIARY} />; }
export function VideoCardQuaternaryH14() { return <EmbedHtml html={VIDEO_QUATERNARY} />; }
