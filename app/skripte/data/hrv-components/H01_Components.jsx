/* ============================================================
   H01 — Temelji civilizacije: Antika, Antigona
   Svaki komponent je self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

import { useState } from 'react';

const TEZA_COLORS = ['#e9b446','#DC322F','#6b9bff','#3ecf6e','rgba(200,130,255,1)'];

/* ── Shared CSS (sec-hdr) — injektira se u SecHdr komponentu ── */
const CSS_SEC_HDR = `
.sec-hdr{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
.sec-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
.sec-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;

function SecHdr({ label }) {
  return (
    <>
      <style>{CSS_SEC_HDR}</style>
      <div className="sec-hdr">
        <div className="sec-line"/>
        <div className="sec-badge">{label}</div>
        <div className="sec-line"/>
      </div>
    </>
  );
}

/* ============================================================
   1. HERO QUOTE
============================================================ */
export function HeroQuoteAntigona() {
  return (
    <>
      <style>{`
        .krsni-quote{
          position:relative;padding:28px 32px;margin:20px 0;
          border-radius:0 var(--r3) var(--r3) 0;
          background:linear-gradient(135deg,rgba(232,201,122,.07) 0%,rgba(232,201,122,.03) 60%,transparent 100%);
          overflow:hidden;
        }
        .krsni-quote::before{
          content:'';position:absolute;left:0;top:0;bottom:0;width:4px;
          background:linear-gradient(180deg,transparent 0%,#e9b446 30%,#e9b446 70%,transparent 100%);
        }
        .krsni-quote::after{
          content:'\u201c';position:absolute;top:-10px;left:20px;
          font-family:var(--serif);font-size:120px;line-height:1;
          color:rgba(232,201,122,.06);pointer-events:none;font-style:italic;
        }
        .krsni-quote-ornament{
          font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:3px;
          color:rgba(232,201,122,.4);text-transform:uppercase;margin-bottom:12px;
        }
        .krsni-quote-text{
          font-family:var(--serif);font-size:18px;line-height:1.65;
          color:var(--t1);font-style:italic;margin-bottom:14px;position:relative;
        }
        .krsni-quote-text em{color:var(--gold);font-style:normal;font-weight:700}
        .krsni-quote-source{
          font-family:var(--mono);font-size:9px;color:var(--t3);
          letter-spacing:1.5px;text-transform:uppercase;
          display:flex;align-items:center;gap:8px;
        }
        .krsni-quote-source::before{content:'—';color:var(--gold)}
        @media(max-width:600px){
          .krsni-quote{padding:20px 20px 20px 24px}
          .krsni-quote-text{font-size:15px}
        }
      `}</style>
      <div className="krsni-quote">
        <div className="krsni-quote-ornament">⁕ Sofoklo, Antigona · ~441. pr. Kr.</div>
        <div className="krsni-quote-text">
          „Nisam mislila da tvoje naredbe imaju toliku moć da smrtnik može pregaziti{' '}
          <em>nepisane i nepropadljive zakone bogova.</em>"
        </div>
        <div className="krsni-quote-source">Antigona → Kreontu</div>
      </div>
    </>
  );
}

/* ============================================================
   2. AUTHOR CARD — Sofoklo
============================================================ */
export function AuthorCardSofoklo() {
  return (
    <>
      <style>{`
        .author-card{
          display:flex;gap:18px;padding:20px;border:1px solid var(--bdm);
          border-radius:var(--r4);background:var(--card);
          transition:border-color .25s,box-shadow .25s;margin:16px 0 22px;
        }
        .author-card:hover{border-color:rgba(232,201,122,.35);box-shadow:0 4px 20px rgba(232,201,122,.06)}
        .ac-monogram{
          width:54px;height:54px;border-radius:50%;border:2px solid rgba(232,201,122,.3);
          display:flex;align-items:center;justify-content:center;
          font-family:var(--serif);font-size:26px;color:var(--gold);
          background:radial-gradient(circle,rgba(232,201,122,.1),transparent 70%);
          flex-shrink:0;animation:ac-pulse 3s ease-in-out infinite;
        }
        @keyframes ac-pulse{
          0%,100%{box-shadow:0 0 0 0 rgba(232,201,122,.25)}
          50%{box-shadow:0 0 0 8px rgba(232,201,122,0)}
        }
        .ac-body{flex:1;min-width:0}
        .ac-header{display:flex;align-items:baseline;gap:10px;margin-bottom:6px;flex-wrap:wrap}
        .ac-name{font-family:var(--display);font-size:17px;font-weight:700;color:var(--t1)}
        .ac-years{
          font-family:var(--mono);font-size:9px;color:var(--bronze);letter-spacing:1px;
          background:var(--ele);padding:2px 8px;border-radius:10px;border:1px solid var(--bdm);
        }
        .ac-tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}
        .ac-tag{
          font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:.5px;
          color:var(--t3);background:var(--ele);border:1px solid var(--bdm);
          padding:2px 8px;border-radius:10px;
        }
        .ac-bio{font-family:var(--serif);font-size:12.5px;line-height:1.65;color:var(--t2);margin-bottom:8px}
        .ac-works{display:flex;gap:8px;align-items:baseline;flex-wrap:wrap}
        .ac-work-label{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px}
        .ac-work{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic}
        @media(max-width:600px){
          .author-card{flex-direction:column;gap:12px}
          .ac-monogram{width:44px;height:44px;font-size:20px}
        }
      `}</style>
      <div className="author-card">
        <div className="ac-monogram">Σ</div>
        <div className="ac-body">
          <div className="ac-header">
            <span className="ac-name">Sofoklo</span>
            <span className="ac-years">496.–406. pr. Kr.</span>
          </div>
          <div className="ac-tags">
            <span className="ac-tag">Grčka tragedija</span>
            <span className="ac-tag">Atena</span>
            <span className="ac-tag">Klasično razdoblje</span>
          </div>
          <div className="ac-bio">
            Jedan od trojice velikih grčkih tragičara (Eshil–Sofoklo–Euripid). Napisao ~123 drame,
            sačuvano 7. U Antigoni uvodi <strong>treći glumac</strong> i smanjuje ulogu hora.
            Živio u doba atenske demokracije i Perikla.
          </div>
          <div className="ac-works">
            <span className="ac-work-label">Ključna djela</span>
            <span className="ac-work">Antigona (~441.) · Kralj Edip (~429.) · Elektra</span>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   3. STAT CARDS
============================================================ */
export function StatCardsAntigona() {
  const stats = [
    {ico:'🎭', val:'~441. pr. Kr.', lbl:'Antigona nastala', sub:'Periklovo doba'},
    {ico:'⚖️', val:'2 zakona', lbl:'Središnji sukob', sub:'božanski vs. ljudski'},
    {ico:'🏛️', val:'5 teza', lbl:'Za esej na maturi', sub:'pripremi sve napamet'},
    {ico:'📖', val:'1 / 6', lbl:'Vjerojatnost ispita', sub:'jedno od 6 ispitnih djela'},
  ];
  return (
    <>
      <style>{`
        .stat-cards{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:14px 0 22px}
        .stat-card{
          background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);
          padding:16px 12px;text-align:center;
          transition:border-color .2s,transform .2s,box-shadow .2s;cursor:default;
        }
        .stat-card:hover{
          border-color:rgba(232,201,122,.4);
          transform:translateY(-3px);
          box-shadow:0 8px 24px rgba(232,201,122,.08);
        }
        .stat-card-ico{font-size:24px;margin-bottom:8px;display:block;transition:transform .2s}
        .stat-card:hover .stat-card-ico{transform:scale(1.15)}
        .stat-card-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:4px;line-height:1.2}
        .stat-card-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
        .stat-card-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:5px;line-height:1.3}
        @media(max-width:600px){.stat-cards{grid-template-columns:repeat(2,1fr)}}
      `}</style>
      <div className="stat-cards">
        {stats.map(s => (
          <div className="stat-card" key={s.lbl}>
            <span className="stat-card-ico">{s.ico}</span>
            <div className="stat-card-val">{s.val}</div>
            <div className="stat-card-lbl">{s.lbl}</div>
            <div className="stat-card-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   4. TIMELINE
============================================================ */
export function TimelineAntika() {
  const events = [
    {god:'3200. pr. Kr.', ev:'Klinasto pismo (Sumer)', note:'Prvo pismo u povijesti', star:false},
    {god:'2100. pr. Kr.', ev:'Ep o Gilgamešu', note:'Prvo veliko književno djelo', star:false},
    {god:'800. pr. Kr.', ev:'Homer — Ilijada i Odiseja', note:'Temelj zapadne književnosti', star:false},
    {god:'6. st. pr. Kr.', ev:'Nastanak grčke tragedije', note:'Dionizova proslava → kor → glumci', star:false},
    {god:'~441. pr. Kr.', ev:'Sofoklo — Antigona ⭐', note:'Uvodi 3. glumca · ispitno djelo 2025/26', star:true},
    {god:'~429. pr. Kr.', ev:'Sofoklo — Kralj Edip', note:'Aristotel: savršena tragedija', star:false},
    {god:'19. st.–danas', ev:'Antigona živi dalje', note:'Brecht, Anouilh — 60+ verzija', star:false},
  ];
  return (
    <>
      <style>{`
        .pt-timeline{margin:16px 0 22px}
        .pt-line{position:relative;padding-left:32px;margin-bottom:20px}
        .pt-line::before{
          content:'';position:absolute;left:10px;top:0;bottom:-20px;width:1px;
          background:linear-gradient(180deg,var(--gold) 0%,rgba(232,201,122,.3) 50%,transparent 100%);
        }
        .pt-line:last-child::before{display:none}
        .pt-dot{
          position:absolute;left:5px;top:5px;width:11px;height:11px;
          border-radius:50%;background:var(--gold);border:2px solid var(--bg);
          transition:box-shadow .2s;
        }
        .pt-line:hover .pt-dot{box-shadow:0 0 0 5px rgba(232,201,122,.15)}
        .pt-line.star .pt-dot{animation:tl-pulse 2.5s ease-in-out infinite}
        @keyframes tl-pulse{
          0%,100%{box-shadow:0 0 0 0 rgba(232,201,122,.5)}
          50%{box-shadow:0 0 0 7px rgba(232,201,122,0)}
        }
        .pt-year{font-family:var(--mono);font-size:9px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:2px;text-transform:uppercase}
        .pt-event{font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;line-height:1.4}
        .pt-line.star .pt-event{color:var(--gold)}
        .pt-note{font-family:var(--serif);font-size:11.5px;color:var(--t3);margin-top:3px;line-height:1.4}
      `}</style>
      <SecHdr label="Kronologija antičke književnosti"/>
      <div className="pt-timeline">
        {events.map((e,i) => (
          <div className={`pt-line${e.star?' star':''}`} key={i}>
            <div className="pt-dot"/>
            <div className="pt-year">{e.god}</div>
            <div className="pt-event">{e.ev}</div>
            <div className="pt-note">{e.note}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   5. SVG WRAP — shared style za sve SVG komponente
============================================================ */
const SVG_WRAP_CSS = `
  .svg-wrap{
    background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);
    padding:20px;margin:0 0 22px;overflow:hidden;transition:border-color .25s;
  }
  .svg-wrap:hover{border-color:rgba(255,255,255,.12)}
  .svg-wrap-lbl{
    font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;
    text-transform:uppercase;color:var(--t3);margin-bottom:14px;
    display:flex;align-items:center;gap:8px;
  }
  .svg-wrap-lbl::before{content:'';display:block;width:16px;height:1px;background:var(--bdm)}
`;

export function SVGAntigonaKreont() {
  return (
    <>
      <style>{SVG_WRAP_CSS}</style>
      <div className="svg-wrap">
        <div className="svg-wrap-lbl">ANTIGONA vs KREONT — SUKOB DVAJU ZAKONA (HEGELOV MODEL)</div>
        <svg viewBox="0 0 660 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'100%',height:'auto',display:'block'}}>
          <rect x={10} y={20} width={270} height={160} rx="12" fill="rgba(232,201,122,.07)" stroke="#e9b446" strokeWidth="1.5"/>
          <text x={145} y={48} textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="700" fill="#e9b446">ANTIGONA</text>
          <text x={145} y={66} textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(232,201,122,.5)" letterSpacing="1">BOŽANSKI ZAKON</text>
          {['Obiteljska dužnost (pokop brata)','Nepisani zakoni bogova','Moralna savjest pojedinca','Hamartia: apsolutna rigidnost','Fatalni izbor: moralno živjeti'].map((t,i)=>(
            <text key={i} x={28} y={90+i*16} fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.65)">• {t}</text>
          ))}
          <rect x={295} y={70} width={70} height={60} rx="8" fill="rgba(220,50,47,.1)" stroke="#DC322F" strokeWidth="1.5"/>
          <text x={330} y={97} textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="700" fill="#DC322F">SUKOB</text>
          <text x={330} y={113} textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(220,50,47,.7)">tragedija</text>
          <rect x={380} y={20} width={270} height={160} rx="12" fill="rgba(107,155,255,.07)" stroke="#6b9bff" strokeWidth="1.5"/>
          <text x={515} y={48} textAnchor="middle" fontFamily="serif" fontSize="16" fontWeight="700" fill="#6b9bff">KREONT</text>
          <text x={515} y={66} textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(107,155,255,.5)" letterSpacing="1">DRŽAVNI ZAKON</text>
          {['Državni red i zakon','Autoritet vladara (polis)','Politička stabilnost','Hamartia: hybris / tvrdoglavost','Anagnorizis: prekasno'].map((t,i)=>(
            <text key={i} x={398} y={90+i*16} fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.65)">• {t}</text>
          ))}
          <text x="330" y="192" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(255,255,255,.3)" fontStyle="italic">
            Hegel: oba principa su opravdana — zato je to tragedija, ne melodrama
          </text>
        </svg>
      </div>
    </>
  );
}

export function SVGTragedija() {
  const el1 = [
    {n:'Hybris',    def:'Pretjerana oholost, kršenje granica koje bogovi postavljaju čovjeku.', color:'#DC322F', x:110},
    {n:'Hamartia',  def:'Tragička pogreška ili mana junaka koja uzrokuje pad.',                 color:'#e9b446', x:330},
    {n:'Peripetija',def:'Preokret sudbine — iz sreće u nesreću.',                              color:'#6b9bff', x:550},
  ];
  const el2 = [
    {n:'Anagnorizis',def:'Spoznaja — junak uviđa svoju pogrešku. "Sve su mi ruke pune zla."', color:'#3ecf6e',              x:220},
    {n:'Katarza',    def:'Pročišćenje publike od straha i sažaljenja. Svrha tragedije.',       color:'rgba(200,130,255,1)', x:440},
  ];
  return (
    <>
      <style>{SVG_WRAP_CSS}</style>
      <div className="svg-wrap">
        <div className="svg-wrap-lbl">ARISTOTELOVI ELEMENTI TRAGEDIJE — POJMOVNIK ZA ISPIT</div>
        <svg viewBox="0 0 660 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'100%',height:'auto',display:'block'}}>
          {el1.map((e,i)=>(
            <g key={i}>
              <rect x={e.x-95} y={12} width={190} height={78} rx="10" fill={e.color} opacity=".08" stroke={e.color} strokeWidth="1.5"/>
              <text x={e.x} y={36} textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="700" fill={e.color}>{e.n}</text>
              <text x={e.x} y={56} textAnchor="middle" fontFamily="serif" fontSize="9" fill="rgba(255,255,255,.5)">{e.def.substring(0,46)}</text>
              {e.def.length>46&&<text x={e.x} y={70} textAnchor="middle" fontFamily="serif" fontSize="9" fill="rgba(255,255,255,.5)">{e.def.substring(46)}</text>}
            </g>
          ))}
          {el2.map((e,i)=>(
            <g key={i}>
              <rect x={e.x-105} y={108} width={210} height={78} rx="10" fill={e.color} opacity=".08" stroke={e.color} strokeWidth="1.5"/>
              <text x={e.x} y={132} textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="700" fill={e.color}>{e.n}</text>
              <text x={e.x} y={152} textAnchor="middle" fontFamily="serif" fontSize="9" fill="rgba(255,255,255,.5)">{e.def.substring(0,52)}</text>
            </g>
          ))}
          <text x="330" y="196" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.2)">
            Hybris → Hamartia → Peripetija → Anagnorizis → Katarza = klasična tragička krivulja
          </text>
        </svg>
      </div>
    </>
  );
}

export function SVGBodoviMaturi() {
  const cjeline = [
    {n:'Školski esej',       b:30, color:'#DC322F',             note:'Antigona ispitno djelo ⭐'},
    {n:'Čit. knj. teksta',   b:20, color:'#e9b446',             note:'Ilijada, Odiseja, Biblija ⭐'},
    {n:'Sažetak',            b:18, color:'#6b9bff',             note:'—'},
    {n:'Ustroj hrv. jez.',   b:15, color:'#3ecf6e',             note:'—'},
    {n:'Teorija i pov. knj.',b:12, color:'rgba(200,130,255,1)', note:'hybris, katarza ⭐'},
    {n:'Čit. neknj. teksta', b:10, color:'rgba(200,180,100,.8)',note:'—'},
    {n:'Primjena ustroja',   b:5,  color:'rgba(150,200,255,.8)',note:'—'},
  ];
  return (
    <>
      <style>{SVG_WRAP_CSS}</style>
      <div className="svg-wrap">
        <div className="svg-wrap-lbl">BODOVI NA MATURI — GDJE ANTIKA DONOSI BODOVE</div>
        <svg viewBox="0 0 660 200" xmlns="http://www.w3.org/2000/svg" style={{maxWidth:'100%',height:'auto',display:'block'}}>
          {cjeline.map((c,i)=>{
            const w=(c.b/110)*520; const y=15+i*25;
            return (
              <g key={i}>
                <rect x={10} y={y} width={w} height={20} rx="4" fill={c.color} opacity=".25" stroke={c.color} strokeWidth="1"/>
                <text x={18} y={y+13} fontFamily="serif" fontSize="11" fill={c.color}>{c.n}</text>
                <text x={540} y={y+13} fontFamily="monospace" fontSize="10" fontWeight="700" fill={c.color}>{c.b} bod.</text>
                {c.note!=='—'&&<text x={360} y={y+13} fontFamily="serif" fontSize="9.5" fill={c.color} opacity=".7" fontStyle="italic">✓ {c.note}</text>}
              </g>
            );
          })}
          <text x="330" y="196" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(255,255,255,.2)">
            Ukupno 110 bodova · Antika ulazi u 3 od 7 cjelina = ~62 boda potencijalno
          </text>
        </svg>
      </div>
    </>
  );
}

/* ============================================================
   6. COMPARE STRIP — reusable, koriste ga 2 komponente
============================================================ */
const COMPARE_CSS = `
  .compare-strip{
    display:grid;grid-template-columns:1fr auto 1fr;
    margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;
  }
  .compare-side{padding:18px 20px;background:var(--sur);transition:background .2s}
  .compare-side:hover{background:rgba(255,255,255,.02)}
  .compare-side.left{background:linear-gradient(135deg,rgba(232,201,122,.06),rgba(232,201,122,.01))}
  .compare-side.left:hover{background:linear-gradient(135deg,rgba(232,201,122,.09),rgba(232,201,122,.02))}
  .compare-vs{
    display:flex;align-items:center;justify-content:center;width:42px;
    background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm);
  }
  .compare-vs-inner{
    font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);
    writing-mode:vertical-rl;letter-spacing:2px;
  }
  .compare-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .compare-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1.2px;margin-bottom:12px;text-transform:uppercase}
  .compare-row{display:flex;gap:6px;margin-bottom:6px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.45}
  .compare-row-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:70px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){
    .compare-strip{grid-template-columns:1fr}
    .compare-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}
    .compare-vs-inner{writing-mode:horizontal-tb}
  }
`;

function CompareStrip({leftTitle, leftPeriod, rightTitle, rightPeriod, rows, vsLabel='VS'}) {
  return (
    <>
      <style>{COMPARE_CSS}</style>
      <div className="compare-strip">
        <div className="compare-side left">
          <div className="compare-author">{leftTitle}</div>
          <div className="compare-period">{leftPeriod}</div>
          {rows.map(([l,a])=>(
            <div className="compare-row" key={l}>
              <span className="compare-row-lbl">{l}</span><span>{a}</span>
            </div>
          ))}
        </div>
        <div className="compare-vs"><span className="compare-vs-inner">{vsLabel}</span></div>
        <div className="compare-side">
          <div className="compare-author">{rightTitle}</div>
          <div className="compare-period">{rightPeriod}</div>
          {rows.map(([l,,r])=>(
            <div className="compare-row" key={l}>
              <span className="compare-row-lbl">{l}</span><span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function CompareAntigonaIsmena() {
  const rows = [
    ['Odluka',    'Pokopa brata Polinika',              'Odbija pomoći — strah'],
    ['Zakon',     'Božanski iznad ljudskog',             'Kreontov zakon iz straha'],
    ['Motivacija','Savjest + obiteljska dužnost',        'Samoočuvanje'],
    ['Sudbina',   'Smrt — moralna pobjeda',              'Živi — s teretom kukavičluka'],
    ['U eseju',   'Protagonistica, tragička junakinja',  'Foil lik — pojačava Antigoninu veličinu'],
  ];
  return (
    <>
      <SecHdr label="Antigona vs Ismena — sestre suprotnih izbora"/>
      <CompareStrip
        leftTitle="Antigona"     leftPeriod="PROTAGONISTICA · TRAGIČKA JUNAKINJA"
        rightTitle="Ismena"      rightPeriod="FOIL LIK · KONTRAST"
        rows={rows}
      />
    </>
  );
}

export function CompareAntigonaKreont() {
  const rows = [
    ['Aristotel',    'Visok položaj ✓, Hamartia ✓, Pad ✓', 'Visok položaj ✓, Hybris ✓, Pad ✓'],
    ['Hamartia',     'Apsolutna rigidnost prema bogu',       'Hybris — misliti da si iznad bogova'],
    ['Anagnorizis',  'Nema — sigurna do kraja',              'Da — "Sve su mi ruke pune zla."'],
    ['Zaključak',    'Heroin moralne pobjede',               'Aristotelski = pravi tragički junak'],
  ];
  return (
    <>
      <SecHdr label="Tko je pravi tragički junak? — esejska kontroverza"/>
      <CompareStrip
        leftTitle="Antigona kao junakinja"     leftPeriod="MORALNA POBJEDA · TEZA 1"
        rightTitle="Kreont kao tragički junak" rightPeriod="ARISTOTELSKI · TEZA 2"
        rows={rows} vsLabel="ili"
      />
    </>
  );
}

/* ============================================================
   7. SIMBOLI GRID
============================================================ */
export function SimboliGridAntigona() {
  const simboli = [
    {ico:'🪦', name:'Pokop Polinika',       desc:'Pokop = poštivanje božanskog zakona. Centar cijelog sukoba.'},
    {ico:'⚖️', name:'Dva zakona',           desc:'Božanski (Antigona) vs. državni (Kreont). Nijedan nije lažan — tragedija (Hegel).'},
    {ico:'👁️', name:'Tirezija — vidovnjak', desc:'Vidovnjak koji je slijep = ironija. Kreontovo upozorenje.'},
    {ico:'🌿', name:'Grobnica',             desc:'Antigona živa zazidana — ona koja poštuje smrt, umire u grobnici. Paradoks.'},
    {ico:'👑', name:'Kraljevska palača',     desc:'Simbol Kreontove vlasti i izoliranosti od bogova.'},
    {ico:'🕯️', name:'Tama i svjetlo',       desc:'Antigona bira smrt — ali njezina moralna svjetlost traje. Kreont ostaje u mraku.'},
  ];
  return (
    <>
      <style>{`
        .simbol-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:14px 0 22px}
        .simbol-item{
          padding:16px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);
          transition:border-color .2s,transform .2s,box-shadow .2s;cursor:default;
        }
        .simbol-item:hover{border-color:rgba(232,201,122,.35);transform:translateY(-2px);box-shadow:0 6px 18px rgba(0,0,0,.15)}
        .simbol-ico{font-size:26px;margin-bottom:8px;display:block;transition:transform .25s}
        .simbol-item:hover .simbol-ico{transform:scale(1.2) rotate(-5deg)}
        .simbol-name{font-family:var(--display);font-size:13px;font-weight:700;color:var(--gold);margin-bottom:5px}
        .simbol-desc{font-family:var(--serif);font-size:12px;color:var(--t2);line-height:1.5}
        @media(max-width:600px){.simbol-grid{grid-template-columns:1fr}}
      `}</style>
      <SecHdr label="Simboli u Antigoni"/>
      <div className="simbol-grid">
        {simboli.map((s,i) => (
          <div className="simbol-item" key={i}>
            <span className="simbol-ico">{s.ico}</span>
            <div className="simbol-name">{s.name}</div>
            <div className="simbol-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   8. ACCORDION — Pojmovi (Hybris, Hamartia…)
============================================================ */
const SCENE_CSS = `
  .scenes{display:flex;flex-direction:column;gap:6px;margin:14px 0 22px}
  .scene{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .scene:hover{border-color:rgba(255,255,255,.12)}
  .scene[open]{border-color:rgba(232,201,122,.3);box-shadow:0 2px 12px rgba(232,201,122,.07)}
  .scene-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:10px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .scene-sum::-webkit-details-marker{display:none}
  .scene-chevron{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .scene[open] .scene-chevron{transform:rotate(180deg);color:var(--gold)}
  .scene-num{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze);min-width:24px}
  .scene[open] .scene-num{color:var(--gold)}
  .scene-ttl{font-family:var(--serif);font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.4}
  .scene-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .scene-body{padding:0 16px 16px}
  .scene-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.65;color:var(--t1);font-style:italic;margin-bottom:10px}
  .scene-why{font-family:var(--serif);font-size:12.5px;line-height:1.6;color:var(--t2)}
  .scene-why b{color:var(--t1)}
  @media(max-width:600px){
    .scene-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .scene-meta{display:none}
    .scene-body{padding:0 12px 12px}
  }
`;

export function AccordionPojmoviAntika() {
  const pojmovi = [
    {p:'Hybris',      def:'ὕβρις. Pretjerana oholost, kršenje granica koje su bogovi postavili.',        prim:'Kreont misli da je njegova naredba iznad božanskih zakona.'},
    {p:'Hamartia',    def:'ἁμαρτία. Tragička pogreška ili mana koja uzrokuje pad junaka.',               prim:'Kreontova hamartia = tvrdoglavost/hybris. Antigonina = rigidnost.'},
    {p:'Peripetija',  def:'περιπέτεια. Nagli preokret sudbine iz sreće u nesreću.',                     prim:'Kreont iz vladara → gubitak sina, žene, svega.'},
    {p:'Anagnorizis', def:'ἀναγνώρισις. Spoznaja — junak uviđa svoju pravu situaciju.',                prim:'"Sve su mi ruke pune zla." — Kreont prekasno.'},
    {p:'Katarza',     def:'κάθαρσις. Pročišćenje gledatelja od straha i sažaljenja tragedijom.',        prim:'Publika osjeća katarzu nakon Kreontove propasti.'},
    {p:'Kor',         def:'χορός. 12–15 pjevača koji komentiraju radnju, nisu akteri.',                 prim:'Tebansi starci koji komentiraju sukob.'},
    {p:'Stasimon',    def:'Stacionarna pjesma hora između epizoda.',                                     prim:'1. stasimon: "Mnogo je čudesa, al\' ništa čudesnije od čovjeka."'},
  ];
  return (
    <>
      <style>{SCENE_CSS}{`
        .pojam-def{padding:10px 12px;background:var(--ele);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;line-height:1.6;color:var(--t2);margin-bottom:8px}
        .pojam-example{padding:8px 12px;background:rgba(232,201,122,.05);border:1px solid rgba(232,201,122,.18);border-radius:var(--r2);font-family:var(--serif);font-size:12.5px;color:var(--t2)}
      `}</style>
      <SecHdr label="Grčki pojmovi — definicije za ispit"/>
      <div className="scenes">
        {pojmovi.map(p => (
          <details className="scene" key={p.p}>
            <summary className="scene-sum">
              <div className="scene-num" style={{fontFamily:'var(--serif)',color:'var(--gold)',fontSize:15}}>{p.p[0]}</div>
              <div className="scene-ttl">{p.p}</div>
              <span className="scene-meta">GRČKI POJAM</span>
              <span className="scene-chevron">▾</span>
            </summary>
            <div className="scene-body">
              <div className="pojam-def"><strong>Definicija:</strong> {p.def}</div>
              <div className="pojam-example"><strong style={{color:'var(--gold)'}}>U Antigoni:</strong> {p.prim}</div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   9. ACCORDION — Esejne teze (T1–T5, svaka svoja boja)
============================================================ */
export function AccordionEsejTezeH01() {
  const teze = [
    {br:'T1', teza:'"Antigona je tragedija moralnog pojedinca u sukobu s vlašću."',
     arg:['Antigona utjelovljuje savjest koja odbija nepravedan zakon','Kreont je slomljen — ona nije','Moralna pobjeda ostaje i u smrti'],
     citati:'"Nisam mislila da tvoje naredbe imaju toliku moć..." · "Nisam rođena da mrzim, nego da volim."',
     za:'Klasična interpretacija · za eseje o slobodi savjesti'},
    {br:'T2', teza:'"Kreont je pravi tragički junak — on je taj koji pada." (Aristotel)',
     arg:['Aristotelova def.: visok položaj → hamartia → peripetija → anagnorizis','Kreont prolazi potpunu transformaciju — Antigona nema anagnorizis','Peripetija: gubi sina, ženu, sve'],
     citati:'"Sve su mi ruke pune zla." · "Država nije jednog čovjeka posjed." (Hemon)',
     za:'Aristotelska interpretacija · odlična za teoriju tragedije'},
    {br:'T3', teza:'"Sukob Antigone i Kreonta je sukob dvaju opravdanih principa." (Hegel)',
     arg:['Antigona brani obiteljski/božanski zakon — legitimno','Kreont brani državni zakon i autoritet — legitimno','Tragedija nastaje od sudaranja dva opravdana principa'],
     citati:'Hegel: "oboje u pravu, oboje pogriješili"',
     za:'Filozofska interpretacija · za visoku ocjenu'},
    {br:'T4', teza:'"Antigona je drama o granicama ljudske moći."',
     arg:['"Mnogo je čudesa, al\' ništa čudesnije od čovjeka" — ali čovjek strada kad ne prizna granice','Kreontova hybris: misliti da nema granica','Tirezija = glas bogova o tim granicama'],
     citati:'"Mnogo je čudesa, al\' ništa čudesnije od čovjeka." (Kor, 1. stasimon)',
     za:'Za teme o ljudskoj nadmenosti i hybrisу'},
    {br:'T5', teza:'"Antigona je prikaz ženske subverzije u patrijarhalnom društvu."',
     arg:['Žene nemaju glasa u Ateni 5. st. pr. Kr.','Antigona zauzima javni prostor i izaziva kralja','Otpor je i moralni i rodni'],
     citati:'Ismena: "Mi smo žene, ne možemo se boriti s muškarcima"',
     za:'Feministička interpretacija · suvremeni kut'},
  ];
  return (
    <>
      <style>{SCENE_CSS}{`
        .teza-arg{padding:5px 10px;background:var(--ele);border-radius:var(--r1);font-family:var(--serif);font-size:12px;color:var(--t2);margin-bottom:4px;border-left:2px solid var(--t-accent,var(--gold));transition:background .2s}
        .teza-arg:hover{background:rgba(255,255,255,.03)}
        .teza-citati{margin-top:10px;padding:10px 12px;background:rgba(232,201,122,.05);border:1px solid rgba(232,201,122,.18);border-radius:var(--r2);font-family:var(--serif);font-size:12px;color:var(--t2);font-style:italic}
        .teza-tip{margin-top:8px;font-family:var(--serif);font-size:11.5px;color:rgba(62,207,110,.7);line-height:1.4}
      `}</style>
      <SecHdr label="5 esejnih teza — arsenal za svaku varijantu"/>
      <div className="scenes">
        {teze.map((t,idx) => (
          <details className="scene" key={t.br} style={{'--t-accent':TEZA_COLORS[idx]}}>
            <summary className="scene-sum">
              <div className="scene-num" style={{color:TEZA_COLORS[idx]}}>{t.br}</div>
              <div className="scene-ttl">{t.teza}</div>
              <span className="scene-meta" style={{color:TEZA_COLORS[idx],borderColor:`${TEZA_COLORS[idx]}55`}}>TEZA</span>
              <span className="scene-chevron" style={{color:TEZA_COLORS[idx]}}>▾</span>
            </summary>
            <div className="scene-body">
              {t.arg.map((a,i)=>(<div className="teza-arg" key={i}>• {a}</div>))}
              <div className="teza-citati"><strong style={{color:TEZA_COLORS[idx],fontStyle:'normal'}}>Citati: </strong>{t.citati}</div>
              <div className="teza-tip">💡 {t.za}</div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   10. ACCORDION — Citati (5 ključnih)
============================================================ */
export function AccordionCitatiH01() {
  const citati = [
    {c:'"Nisam mislila da tvoje naredbe imaju toliku moć da smrtnik može pregaziti nepisane i nepropadljive zakone bogova."', tko:'Antigona → Kreontu', za:'T1, T3, T4'},
    {c:'"Mnogo je čudesa, al\' ništa čudesnije od čovjeka."', tko:'Kor, 1. stasimon', za:'T4 · Obavezan u svakom eseju!'},
    {c:'"Nisam rođena da mrzim, nego da volim."',             tko:'Antigona',          za:'Karakterizacija, T1, T5'},
    {c:'"Država nije jednog čovjeka posjed."',                tko:'Hemon → Kreontu',  za:'T2, Kreontova hybris'},
    {c:'"Sve su mi ruke pune zla."',                          tko:'Kreont — finale',  za:'T2 · Kreontov anagnorizis'},
  ];
  return (
    <>
      <style>{SCENE_CSS}</style>
      <SecHdr label="Citatni arsenal — 5 ključnih citata"/>
      <div className="scenes">
        {citati.map((c,i) => (
          <details className="scene" key={i}>
            <summary className="scene-sum">
              <div className="scene-num" style={{fontSize:11,color:'var(--bronze)'}}>{i+1}</div>
              <div className="scene-ttl" style={{fontStyle:'italic',fontSize:13}}>„{c.c.substring(0,55)}…"</div>
              <span className="scene-meta">{c.tko.split('→')[0].trim()}</span>
              <span className="scene-chevron">▾</span>
            </summary>
            <div className="scene-body">
              <div className="scene-quote">{c.c}</div>
              <div className="scene-why"><strong>Tko govori:</strong> {c.tko}</div>
              <div style={{marginTop:8,padding:'8px 12px',background:'rgba(62,207,110,.05)',border:'1px solid rgba(62,207,110,.2)',borderRadius:'var(--r2)',fontFamily:'var(--serif)',fontSize:12.5,color:'var(--t2)'}}>
                <strong style={{color:'rgba(62,207,110,.8)'}}>Koristi za:</strong> {c.za}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   11. CROSS CHAPTER
============================================================ */
export function CrossChapterH01() {
  const bridges = [
    {ch:'H17 → Stilske figure',       opis:'Antigona prepuna figura: metafora, antiteza (Antigona vs Kreont), ironija Tirezije. H17 arsenal direktno koristiš u stilskoj analizi Antigone.'},
    {ch:'H11–H16 → Hrv. književnost', opis:'Antičke teme žive dalje: Marulićeva Judita (H12) imitira Homera, Krleža (H16) koristi grčku tragičku strukturu, hybris prolazi kroz sve epohe.'},
    {ch:'H27 → Školski esej',         opis:'H01 je jedno od 6 ispitnih djela. 5 esejnih teza direktno koristiš u H27 UKR formuli. Citati = arsenal za uvod, razradu i zaključak.'},
    {ch:'H23 → Povijest hrv. jezika', opis:'Biblija i antički tekstovi utjecali su na staroslavenski i prve hrv. tekstove. H01 → H23 je kulturno-civilizacijski most kroz 2000 godina.'},
  ];
  return (
    <>
      <style>{`
        .cross-grid{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
        .cross-item{display:flex;align-items:flex-start;gap:12px;padding:12px 16px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);transition:border-color .2s,background .2s}
        .cross-item:hover{background:rgba(255,255,255,.02);border-color:rgba(232,201,122,.25)}
        .cross-arrow{font-size:14px;color:var(--gold);flex-shrink:0;margin-top:1px;opacity:.5;transition:opacity .2s,transform .2s}
        .cross-item:hover .cross-arrow{opacity:1;transform:translateX(3px)}
        .cross-ch{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);flex-shrink:0;min-width:130px;line-height:1.5;padding-top:1px}
        .cross-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
        @media(max-width:600px){.cross-ch{min-width:auto;font-size:11px}}
      `}</style>
      <SecHdr label="H01 ↔ ostali chapteri"/>
      <div className="cross-grid">
        {bridges.map((b,i) => (
          <div className="cross-item" key={i}>
            <span className="cross-arrow">→</span>
            <div className="cross-ch">{b.ch}</div>
            <div className="cross-desc">{b.opis}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   12. POP KULTURA
============================================================ */
export function PopKulturaAntika() {
  const pop = [
    {film:'🎬 The Lion King (1994.)', title:'Hamlet = Edip u Africi',            source:'"Lion King" je Hamlet koji je remake Kralja Edipa — Simba je sin ubijenog kralja, Scar je hybrisni uzurpator. Antika živi u svakoj generaciji.'},
    {film:'📺 Game of Thrones',       title:'Cersei = Kreont, Jon = Antigona',   source:'GoT pun tragičkih shema: hybris vladara (Cersei), moralni pojedinac koji kršenjem pravila radi ispravno (Jon). Autori studirali antiku.'},
    {film:'⚖️ Suvremene Antigone',    title:'Whistlebloweri = moderni Antigone', source:'Snowden, Assange — brane moralni zakon protiv državnog. H01 nije povijest — to je suvremena politika savjesti i vlasti.'},
    {film:'🎭 Anouilh & Brecht',      title:'60+ verzija od 19. st.',            source:'Anouilh pisao Antigonu 1944. pod nacističkom Parizom — Antigona = otpor fašizmu. Nijedna tragedija nije dožela toliko adaptacija.'},
    {film:'🤖 AI i hybris',           title:'"Playing God" = moderna hybris',    source:'Istraživači superinteligencije bez sigurnosnih mjera = hybris. Antički pojam savršeno opisuje suvremenu tehnologiju.'},
    {film:'🌐 TikTok zakoni vs savjest',title:'"Zakon je nepravedan" = Antigona 2024.',source:'Svaki aktivist koji krši nepravedan zakon iz savjesti reproducira Antigonin argument. H01 je živi etički kod.'},
  ];
  return (
    <>
      <style>{`
        .pop-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
        .pop-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;transition:border-color .2s,transform .2s,box-shadow .2s;position:relative;overflow:hidden}
        .pop-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(107,155,255,.5),transparent);opacity:0;transition:opacity .25s}
        .pop-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,.2)}
        .pop-card:hover::before{opacity:1}
        .pop-card-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue);margin-bottom:5px;text-transform:uppercase}
        .pop-card-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:6px;line-height:1.35}
        .pop-card-source{font-family:var(--serif);font-size:11.5px;color:var(--t3);font-style:italic;line-height:1.5}
        @media(max-width:600px){.pop-grid{grid-template-columns:1fr}}
      `}</style>
      <SecHdr label="Antika u modernoj kulturi"/>
      <div className="pop-grid">
        {pop.map((p,i) => (
          <div className="pop-card" key={i}>
            <div className="pop-card-film">{p.film}</div>
            <div className="pop-card-title">{p.title}</div>
            <div className="pop-card-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   13. QUICK REF — Final cheat sheet
============================================================ */
export function QuickRefAntigona() {
  const items = [
    {kat:'OSNOVNI PODACI',        boja:'#e9b446', fakti:['Autor: Sofoklo (496.–406. pr. Kr.)','Godina: ~441. pr. Kr.','Žanr: Klasična grčka tragedija','Mjesto: Teba, pred palačom']},
    {kat:'ARISTOTELSKI ELEMENTI', boja:'#DC322F', fakti:['Hybris: Kreontova oholost','Hamartia: Kreontova tvrdoglavost','Peripetija: gubi sina + ženu','Anagnorizis: "Sve su mi ruke pune zla."','Katarza: strah + sažaljenje']},
    {kat:'5 ESEJNIH TEZA',        boja:'#3ecf6e', fakti:['T1: moralni pojedinac vs. vlast','T2: Kreont = pravi tragički junak','T3: sukob dvaju opravdanih (Hegel)','T4: granice ljudske moći','T5: ženska subverzija']},
  ];
  return (
    <>
      <style>{`
        .qr-grid{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
        .qr-card{padding:14px 16px;background:var(--ele);border-radius:var(--r3);position:relative;overflow:hidden}
        .qr-card::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--qr-color,var(--gold))}
        .qr-label{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--qr-color,var(--gold));text-transform:uppercase;margin-bottom:10px}
        .qr-fact{font-family:var(--serif);font-size:12.5px;color:var(--t2);padding:5px 0;border-bottom:1px solid rgba(255,255,255,.05);line-height:1.5}
        .qr-fact:last-child{border-bottom:none;padding-bottom:0}
      `}</style>
      <SecHdr label="Antigona — final cheat sheet"/>
      <div className="qr-grid">
        {items.map((it,i) => (
          <div className="qr-card" key={i} style={{'--qr-color':it.boja}}>
            <div className="qr-label">{it.kat}</div>
            {it.fakti.map((f,j) => <div className="qr-fact" key={j}>{f}</div>)}
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   USAGE MAP
   L0 (#l0): SVGBodoviMaturi · TimelineAntika · PopKulturaAntika · CrossChapterH01
   L1 (#l1): HeroQuoteAntigona · StatCardsAntigona · AuthorCardSofoklo
             CompareAntigonaIsmena · SVGAntigonaKreont · CompareAntigonaKreont
             SimboliGridAntigona · QuickRefAntigona
   L2 (#l2): AccordionEsejTezeH01 · AccordionCitatiH01
   L4 (#l4): SVGTragedija · AccordionPojmoviAntika
============================================================ */
