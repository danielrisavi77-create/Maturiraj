/* ============================================================
   H07 — Realizam · Dostojevski · Zločin i kazna
   ⚠️  OBVEZATNO ISPITNO DJELO 2026

   Svaki komponent self-contained — nosi vlastiti <style>.
   Nema vanjskih CSS dependencyja osim CSS varijabli teme.
============================================================ */

'use client';

import { useState } from 'react';

/* ── Privatni shared CSS stringsovi ─────────────────────── */

const CSS_SECHDR7 = `
  .sh7{display:flex;align-items:center;gap:10px;margin:22px 0 6px}
  .sh7-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--bdm),transparent)}
  .sh7-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);white-space:nowrap;padding:4px 10px;border:1px solid var(--bdm);border-radius:20px;background:var(--ele)}
`;
function SH7({label,style}){
  return(
    <><style>{CSS_SECHDR7}</style>
    <div className="sh7" style={style}>
      <div className="sh7-line"/><div className="sh7-badge">{label}</div><div className="sh7-line"/>
    </div></>
  );
}

const CSS_AC7 = `
  .ac7{border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:20px 0;background:var(--sur);transition:border-color .2s}
  .ac7:hover{border-color:var(--bd-br)}
  .ac7-hdr{padding:18px 22px 14px;background:linear-gradient(135deg,var(--ele),var(--card));border-bottom:1px solid var(--bdm);display:flex;align-items:flex-start;gap:16px}
  .ac7-mono{width:52px;height:52px;border-radius:var(--r3);background:linear-gradient(135deg,var(--bronze-d),var(--bronze));display:flex;align-items:center;justify-content:center;font-family:var(--display);font-size:22px;font-weight:700;color:var(--gold);flex-shrink:0;box-shadow:0 4px 20px rgba(220,50,47,.3)}
  .ac7-meta{flex:1;min-width:0}
  .ac7-name{font-family:var(--display);font-size:18px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:.3px}
  .ac7-dates{font-family:var(--mono);font-size:10px;color:var(--bronze);letter-spacing:1.5px;margin-bottom:6px}
  .ac7-tags{display:flex;gap:6px;flex-wrap:wrap}
  .ac7-star{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:var(--dim-go);border:1px solid var(--bd-go);border-radius:var(--r1);font-family:var(--mono);font-size:9px;font-weight:700;color:var(--gold);letter-spacing:.5px;margin-top:6px}
  .ac7-body{padding:18px 22px}
  .ac7-body p{font-family:var(--serif);font-size:14px;color:var(--t2);line-height:1.65;margin-bottom:12px}
  .ac7-body p:last-child{margin-bottom:0}
  .ac7-body strong{color:var(--t1)}
  .ac7-body em{color:var(--gold);font-style:italic}
  .ac7-works{margin-top:14px;padding-top:14px;border-top:1px solid var(--bd)}
  .ac7-works-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
  .ac7-work{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--bd)}
  .ac7-work:last-child{border-bottom:none;padding-bottom:0}
  .ac7-work-title{font-family:var(--display);font-size:12px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .ac7-work-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;margin-bottom:5px}
  .ac7-work-desc{font-family:var(--serif);font-size:13px;color:var(--t2);line-height:1.5}
  .ac7-badge{width:28px;height:28px;border-radius:var(--r1);background:var(--ele);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:13px}
  .ac7-triple{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}
  .ac7-triple .ac7{margin:0}
  @media(max-width:700px){.ac7-triple{grid-template-columns:1fr}}
  @media(max-width:600px){.ac7-hdr{flex-direction:column;gap:10px}.ac7-mono{width:42px;height:42px;font-size:18px}.ac7-body{padding:14px 16px}.ac7-name{font-size:15px}}
`;

const CSS_TL7 = `
  .tl7{position:relative;padding:20px 0;margin:18px 0}
  .tl7::before{content:'';position:absolute;left:22px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--bronze),var(--gold),rgba(232,201,122,.1));opacity:.5}
  .tl7-ev{display:flex;gap:16px;margin-bottom:14px;position:relative}
  .tl7-date{flex-shrink:0;width:44px;height:44px;border-radius:50%;background:var(--card);border:2px solid var(--bronze);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:8px;font-weight:700;color:var(--bronze);z-index:1;letter-spacing:.5px;text-align:center;line-height:1.2}
  .tl7-date.major{background:linear-gradient(135deg,var(--bronze-d),var(--bronze));color:#F5E6D3;border-color:var(--gold);box-shadow:0 0 16px rgba(232,201,122,.3)}
  .tl7-body{flex:1;padding:8px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s}
  .tl7-body:hover{border-color:var(--bd-br);transform:translateX(3px)}
  .tl7-title{font-family:var(--display);font-size:13px;font-weight:600;color:var(--bronze-l);margin-bottom:3px}
  .tl7-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.55}
`;

const CSS_SC7 = `
  .sc7s{display:flex;flex-direction:column;gap:8px;margin:14px 0 22px}
  .sc7{border:1px solid var(--bdm);border-radius:var(--r3);background:var(--sur);overflow:hidden;transition:border-color .2s,box-shadow .2s}
  .sc7:hover{border-color:var(--bd-br)}
  .sc7[open]{border-color:var(--bd-go);box-shadow:0 2px 8px rgba(232,201,122,.08)}
  .sc7-sum{display:grid;grid-template-columns:auto 1fr auto auto;gap:12px;align-items:center;padding:13px 16px;cursor:pointer;list-style:none;user-select:none}
  .sc7-sum::-webkit-details-marker{display:none}
  .sc7-chev{font-size:10px;color:var(--t3);transition:transform .25s,color .2s;flex-shrink:0}
  .sc7[open] .sc7-chev{transform:rotate(180deg);color:var(--gold)}
  .sc7-num{font-family:var(--display);font-size:13px;font-weight:700;color:var(--bronze-l);min-width:36px}
  .sc7[open] .sc7-num{color:var(--gold)}
  .sc7-ttl{font-family:var(--serif);font-size:14px;color:var(--t1);font-weight:600;line-height:1.4}
  .sc7-meta{font-family:var(--mono);font-size:8.5px;color:var(--t3);letter-spacing:1.5px;padding:2px 8px;background:var(--ele);border:1px solid var(--bdm);border-radius:10px;text-transform:uppercase;white-space:nowrap;flex-shrink:0}
  .sc7-body{padding:0 16px 16px}
  .sc7-quote{padding:12px 14px;background:var(--ele);border-left:3px solid var(--gold);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t1);font-style:italic;margin-bottom:10px}
  .sc7-why{font-family:var(--serif);font-size:13px;line-height:1.6;color:var(--t2)}
  .sc7-why b{color:var(--t1)}
  .sc7-args{margin-top:8px;display:flex;flex-direction:column;gap:5px}
  .sc7-arg{display:flex;gap:8px;font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5;padding:4px 8px;background:var(--ele);border-radius:var(--r1);border-left:2px solid var(--bronze)}
  .sc7-arg-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--bronze);flex-shrink:0;margin-top:2px}
  .sc7-note{margin-top:10px;padding:9px 13px;background:var(--ele);border-radius:var(--r2);border-left:3px solid var(--bronze);font-family:var(--serif);font-size:12.5px;color:var(--t2);font-style:italic}
  @media(max-width:600px){
    .sc7-sum{grid-template-columns:auto 1fr auto;gap:8px;padding:11px 12px}
    .sc7-meta{display:none}
    .sc7-body{padding:0 12px 12px}
  }
`;

const CSS_CMP7 = `
  .cmp7{display:grid;grid-template-columns:1fr auto 1fr;margin:16px 0 22px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
  .cmp7-side{padding:18px 20px;background:var(--sur)}
  .cmp7-side.left{background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(232,201,122,.01))}
  .cmp7-vs{display:flex;align-items:center;justify-content:center;width:42px;background:var(--ele);border-left:1px solid var(--bdm);border-right:1px solid var(--bdm)}
  .cmp7-vs-inner{font-family:var(--display);font-size:10px;font-weight:700;color:var(--t3);writing-mode:vertical-rl;letter-spacing:2px}
  .cmp7-author{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .cmp7-period{font-family:var(--mono);font-size:8px;color:var(--bronze);letter-spacing:1px;margin-bottom:10px;text-transform:uppercase}
  .cmp7-row{display:flex;gap:6px;margin-bottom:5px;font-family:var(--serif);font-size:12.5px;color:var(--t2)}
  .cmp7-lbl{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);letter-spacing:.5px;min-width:62px;flex-shrink:0;margin-top:1px}
  @media(max-width:600px){.cmp7{grid-template-columns:1fr}.cmp7-vs{writing-mode:horizontal-tb;width:auto;height:36px;border-left:none;border-right:none;border-top:1px solid var(--bdm);border-bottom:1px solid var(--bdm)}.cmp7-vs-inner{writing-mode:horizontal-tb}}
`;

const CSS_STAT7 = `
  .stat7{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:0 0 20px}
  .stat7-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 12px;text-align:center;transition:border-color .2s,transform .2s}
  .stat7-card:hover{border-color:rgba(220,50,47,.35);transform:translateY(-2px)}
  .stat7-ico{font-size:22px;margin-bottom:6px;display:block}
  .stat7-val{font-family:var(--display);font-size:15px;font-weight:700;color:var(--gold);margin-bottom:3px;line-height:1.2}
  .stat7-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3)}
  .stat7-sub{font-family:var(--serif);font-size:11px;color:var(--t3);margin-top:4px;line-height:1.3}
  @media(max-width:580px){.stat7{grid-template-columns:repeat(2,1fr)}}
`;

const CSS_QUOTE7 = `
  .hq7{border:1px solid var(--bd-go);border-radius:var(--r4);padding:24px 28px;margin:16px 0 24px;background:linear-gradient(135deg,rgba(232,201,122,.05),rgba(220,50,47,.03));position:relative;overflow:hidden}
  .hq7::before{content:'\u201E';position:absolute;top:-10px;left:16px;font-family:var(--display);font-size:120px;color:var(--gold);opacity:.07;line-height:1;pointer-events:none}
  .hq7::after{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(180deg,transparent,#DC322F,transparent)}
  .hq7-eye{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#DC322F;margin-bottom:10px;opacity:.8}
  .hq7-text{font-family:var(--display);font-size:17px;font-weight:700;color:var(--t1);line-height:1.4;font-style:italic;margin-bottom:10px}
  .hq7-text em{color:#e9b446;font-style:normal}
  .hq7-body{font-family:var(--serif);font-size:13.5px;color:var(--t2);line-height:1.6;margin:10px 0}
  .hq7-source{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase}
  @media(max-width:600px){.hq7{padding:18px 18px 18px 22px}.hq7-text{font-size:14px}}
`;

const CSS_WRAP7 = `
  .wr7{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;margin:0 0 22px;overflow:hidden;transition:border-color .25s}
  .wr7:hover{border-color:rgba(255,255,255,.12)}
  .wr7-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--t3);margin-bottom:14px;display:flex;align-items:center;gap:8px}
  .wr7-lbl::before{content:'';display:block;width:16px;height:1px;background:var(--bdm)}
`;

const CSS_POP7 = `
  .pop7{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:14px 0 22px}
  .pop7-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px;transition:border-color .2s,transform .2s}
  .pop7-card:hover{border-color:rgba(107,155,255,.3);transform:translateY(-2px)}
  .pop7-film{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1px;color:var(--blue,#6b9bff);margin-bottom:5px;text-transform:uppercase}
  .pop7-title{font-family:var(--display);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.35}
  .pop7-source{font-family:var(--serif);font-size:12px;color:var(--t3);font-style:italic;line-height:1.5}
  @media(max-width:600px){.pop7{grid-template-columns:1fr}}
`;

const CSS_SIMB7 = `
  .simb7{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:14px 0}
  .simb7-item{display:flex;gap:10px;padding:12px 14px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);align-items:flex-start;transition:border-color .2s}
  .simb7-item:hover{border-color:rgba(232,201,122,.25)}
  .simb7-ico{font-size:20px;flex-shrink:0;margin-top:1px}
  .simb7-name{font-family:var(--display);font-size:13px;font-weight:700;color:var(--gold);margin-bottom:3px}
  .simb7-desc{font-family:var(--serif);font-size:12.5px;color:var(--t2);line-height:1.5}
  @media(max-width:600px){.simb7{grid-template-columns:1fr}}
`;

const TEZA_COLORS7 = ['#e9b446','#3ecf6e','#DC322F','#6b9bff','#f97316','#e879f9','#06b6d4'];

/* ============================================================
   [1] AUTHOR CARD — Fjodor Mihajlovič Dostojevski
============================================================ */
export function AuthorCardDostojevski({context='l0'}) {
  return (
    <>
      <style>{CSS_AC7}</style>
      <div className="ac7">
        <div className="ac7-hdr">
          <div className="ac7-mono">Д</div>
          <div className="ac7-meta">
            <div className="ac7-name">Fjodor Mihajlovič Dostojevski</div>
            <div className="ac7-dates">MOSKVA · 1821. – SANKT-PETERBURG · 1881.</div>
            <div className="ac7-tags">
              <span className="pill p-r" style={{fontSize:10}}>psihološki realizam</span>
              <span className="pill p-br" style={{fontSize:10}}>polifonija</span>
              <span className="pill p-go" style={{fontSize:10}}>pravoslavlje</span>
              {context==='l1'&&<div className="ac7-star">⭐ OBVEZATNO DJELO 2026</div>}
            </div>
          </div>
        </div>
        <div className="ac7-body">
          <p>Jedan od trojice najvećih europskih pisaca 19. st. (uz Tolstoja i Flauberta). Svaka biografska činjenica postaje roman: otac ubijen od kmetova, osuđen na smrt strijeljanjem → <strong>pomilovan na strelištu u posljednjem trenutku</strong>, 4 godine Sibira, epilepsija, kockarska ovisnost, smrt žene i brata iste godine. Sve to piše.</p>
          <p>Dostojevski stvara <em>psihološki realizam</em> — ulazi iznutra u lik: paranoja, grižnja, savjest, vjera. Mihail Bahtin ga je nazvao tvorcem <strong>polifonog romana</strong> — svaki lik ima nezavisan glas i filozofiju, čak i negativci. Freud, Nietzsche, Kafka, Camus — svi ga navode kao ključni utjecaj.</p>
          <div className="ac7-works">
            <div className="ac7-works-lbl">Ključna djela</div>
            <div className="ac7-work">
              <div className="ac7-badge">🔪</div>
              <div>
                <div className="ac7-work-title">Zločin i kazna</div>
                <div className="ac7-work-meta">1866. · PSIHOLOŠKI ROMAN · 6 DIJELOVA + EPILOG</div>
                <div className="ac7-work-desc">Raskoljnikov, teorija nadčovjeka, Sonja, Porfirije. <strong>Obvezatno čitanje 2026.</strong></div>
              </div>
            </div>
            <div className="ac7-work">
              <div className="ac7-badge">🎰</div>
              <div>
                <div className="ac7-work-title">Idiot · Braća Karamazovi</div>
                <div className="ac7-work-meta">1868. + 1880. · KASNI ROMANI</div>
                <div className="ac7-work-desc">Idiot = knez Miškin, „pozitivno lijep čovjek&quot;. Braća Karamazovi = sinteza svega — vjera, sloboda, ubojstvo, ljubav. Tolstoj: „najveći ikad napisan.&quot;</div>
              </div>
            </div>
            <div className="ac7-work">
              <div className="ac7-badge">🏔️</div>
              <div>
                <div className="ac7-work-title">Zapisi iz Mrtvog doma · Kockar</div>
                <div className="ac7-work-meta">1861. + 1866. · AUTOBIOGRAFSKI ELEMENTI</div>
                <div className="ac7-work-desc">Zapisi = iskustvo Sibira — dokumentarizam koji prethodi realističkom romanu. Kockar = napisan za 26 dana da otplati dugove.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [2] TIMELINE — Dostojevski životopis
============================================================ */
const DOST_EVENTS = [
  {date:'1821.', major:true,  title:'Rođenje u Moskvi',                        desc:'Sin liječnika u bolnici za siromašne. Otac strog i alkoholičar — majka nježna i vjernica. Ta dihotomija prožima sve likove: griješnici s dušom, svetci s tamnom stranom.'},
  {date:'1846.', major:true,  title:'Bijedni ljudi — trenutna slava',           desc:'Bijelinski, tadašnji arbitar ruske kulture, proglašava ga novim Gogoljem. Dostojevski postaje književna zvijezda u 25 godina.'},
  {date:'1849.', major:true,  title:'Osuđen na smrt — pomilovan na strelištu', desc:'Uhićen zbog Petraševskog kružoka (revolucionarni socijalisti). Osuđen na strijeljanje. Na strelištu — sanduk, kapuljača — POMILOVAN. Car ga šalje u Sibir. Taj moment ostaje trauma i opsesija do kraja života.'},
  {date:'1850.', major:false, title:'Sibir — 4 godine katorge',                desc:'Omsk, robijaški logor. Živi s kriminalcima, ubicama — upoznaje „niže" ljude koji postaju njegovi likovi. Pronalazi Bibliju — jedina dozvoljena knjiga. Vjera mu postaje sidro.'},
  {date:'1861.', major:false, title:'Zapisi iz Mrtvog doma — povratak',        desc:'Vraća se iz Sibira, piše o iskustvu. Odmah relevantan. Uređuje časopise s bratom Mihailom.'},
  {date:'1864.', major:false, title:'Crna godina — smrt žene i brata',         desc:'U istoj godini umiru mu prva žena Marija i brat Mihail. Financijska kriza. Dugovi. Dostojevski piše pod pritiskom — to mu postaje kreativni motor.'},
  {date:'1866.', major:true,  title:'Zločin i kazna — kulturni fenomen',       desc:'Izlazi serijalno u Ruskom vjesniku. Svi raspravljaju o Raskoljnikovu. Piše Kockara paralelno (da otplati dugove) — u 26 dana. Upoznaje Anu Snitkinu, svoju drugu ženu.'},
  {date:'1867.', major:false, title:'Europa — bijeg od dugova',                desc:'Dostojevski i Ana bježe u Europu 4 godine. Dresden, Ženeva, Firenca, Prag. Piše Idiota i Zle duhove u egzilu.'},
  {date:'1880.', major:true,  title:'Braća Karamazovi — posljednje djelo',     desc:'Objavljen godinu dana prije smrti. Tolstoj: „Najveći roman ikad napisan." Dostojevski umire s 59. Sahranjen u Aleksandro-Nevskoj lavri u SPB.'},
];

export function TimelineDostojevski() {
  return (
    <>
      <style>{CSS_TL7}</style>
      <SH7 label="02b · Dostojevski — kronologija"/>
      <div className="tl7">
        {DOST_EVENTS.map((ev,i)=>(
          <div className="tl7-ev" key={i}>
            <div className={`tl7-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl7-body">
              <div className="tl7-title">{ev.title}</div>
              <div className="tl7-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [3] COMPARE STRIP — Realizam vs Romantizam (bridge H06→H07)
============================================================ */
export function CompareRealizmRomantizam() {
  const rows = [
    ['Temelj',  'Osjećaj · mašta · intuicija',      'Razum · promatranje · analiza'],
    ['Junak',   'Genij, izoliran od društva',         'Produkt društvenih uvjeta'],
    ['Prostor', 'Priroda, egzotika, ideal',           'Grad, svakodnevica, stan, ulica'],
    ['Stil',    'Lirski, metaforički',                'Objektivni, detaljni opisi'],
    ['Forma',   'Poema, romantički roman',            'Realistički roman, novela'],
    ['Cilj',    'Probuditi osjećaj',                  'Pokazati stvarnost'],
    ['Ključni', 'Werther (H05), Onjegin (H06)',       'Zločin i kazna (H07)'],
  ];
  return (
    <>
      <style>{CSS_CMP7}</style>
      <SH7 label="01b · Realizam vs Romantizam — bridge H06→H07" style={{marginTop:24}}/>
      <div className="cmp7">
        <div className="cmp7-side left">
          <div className="cmp7-author">🌹 Romantizam</div>
          <div className="cmp7-period">1798.–1848. · BYRON · PUŠKIN · ← H06</div>
          {rows.map(([l,a])=>(<div className="cmp7-row" key={l}><span className="cmp7-lbl">{l}</span><span>{a}</span></div>))}
        </div>
        <div className="cmp7-vs"><span className="cmp7-vs-inner">→</span></div>
        <div className="cmp7-side">
          <div className="cmp7-author">🏛 Realizam</div>
          <div className="cmp7-period">1830.–1895. · DOSTOJEVSKI · TOLSTOJ · H07</div>
          {rows.map(([l,,r])=>(<div className="cmp7-row" key={l}><span className="cmp7-lbl">{l}</span><span>{r}</span></div>))}
        </div>
      </div>
    </>
  );
}

/* ============================================================
   [4] TIMELINE — Realizam u Europi
============================================================ */
const REALIZAM_TL = [
  {date:'1830.', major:false, title:'Stendhal — Crveno i crno',             desc:'Julien Sorel — ambiciozni mladi čovjek koji ne može prodrijeti u više slojeve. 1. realistički roman. Psihologizacija karaktera.'},
  {date:'1835.', major:false, title:'Balzac — Otac Goriot',                 desc:'Goriot žrtvuje sve za kćeri koje ga zaboravljaju. Balzac = sociolog u romanu, enciklopedija Pariza. „Ljudska komedija" — 90+ romana o francuskom društvu.'},
  {date:'1848.', major:true,  title:'Revolucije — kraj romantizma',         desc:'„Proljeće naroda" — revolucije u Parizu, Beču, Berlinu, Pragu. Romantički ideali postaju politika i gube. Razočaranje → realizam kao književni odgovor.'},
  {date:'1857.', major:true,  title:'Madame Bovary — Flaubert',             desc:'Emma Bovary mašta o romantičarskim ljubavima i strada u sivoj provincijalnoj stvarnosti. Flaubert = stilistički savršenstvo realizma. Emma Bovary = žrtva romantičnih iluzija.'},
  {date:'1859.', major:false, title:'Darwin — O podrijetlu vrsta',          desc:'Evolucija i prirodna selekcija mijenjaju sliku čovjeka. Pozitivizam (Comte) traži da se i čovjek analizira kao prirodni fenomen. Realizam = literarni pozitivizam.'},
  {date:'1866.', major:true,  title:'Zločin i kazna — Dostojevski ★ 2026', desc:'Psihološki realizam na vrhuncu: unutarnji monolog, paranoja, grižnja. Raskoljnikov = ne produkt društva, nego produkt vlastite filozofije. Revolucija u realizmu.'},
  {date:'1877.', major:false, title:'Ana Karenjina — Tolstoj',              desc:'„Sve sretne obitelji su jednake; svaka nesretna obitelj je nesretna na svoj način." Tolstoj = moralna psihologija. Ana = žrtva društvenih konvencija.'},
  {date:'1895.', major:false, title:'Čehov — kraj klasičnog realizma',      desc:'Kratka priča i drama bez dramske napetosti. Čehov = realizam minimalizma. Moderna (H08) nastaje kao reakcija.'},
];

export function TimelineRealizam() {
  return (
    <>
      <style>{CSS_TL7}</style>
      <SH7 label="01c · Realizam u Europi — kronologija" style={{marginTop:24}}/>
      <div className="tl7">
        {REALIZAM_TL.map((ev,i)=>(
          <div className="tl7-ev" key={i}>
            <div className={`tl7-date${ev.major?' major':''}`}>{ev.date}</div>
            <div className="tl7-body">
              <div className="tl7-title">{ev.title}</div>
              <div className="tl7-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [5] TRIPLE MINI CARD — Tolstoj + Flaubert + Dickens
============================================================ */
export function AuthorCardOstaliRealisti() {
  const autori = [
    {mono:'Т',monoBg:'linear-gradient(135deg,#1a3a1a,#2a6a2a)',name:'Lav Nikolajevič Tolstoj',dates:'1828. – 1910. · RUSIJA',
     djelo:'Ana Karenjina (1877.) · Rat i mir (1869.)',
     ideja:'Moralna psihologija: svaki lik je i dobar i loš ovisno o izboru. Ana Karenjina = žrtva društvenih konvencija. Rat i mir = epika + filozofija povijesti. Tolstoj i Dostojevski = dva pola ruskog realizma: Tolstoj = površina + moral, Dostojevski = dubina + duh.'},
    {mono:'F',monoBg:'linear-gradient(135deg,#1a1a3a,#2a2a6a)',name:'Gustave Flaubert',dates:'1821. – 1880. · FRANCUSKA',
     djelo:'Madame Bovary (1857.)',
     ideja:'„Le mot juste" — pravo slovo na pravom mejstu. Stilistički savršenstvo realizma. Emma Bovary čita romantičke romane i strada kad stvarnost ne odgovara iluzijama. Flaubert = krvnik romantizma — ubija ga vlastitim oruđem (romanom).'},
    {mono:'D',monoBg:'linear-gradient(135deg,#3a1a1a,#6a2a2a)',name:'Charles Dickens',dates:'1812. – 1870. · ENGLESKA',
     djelo:'Oliver Twist (1838.) · David Copperfield (1850.)',
     ideja:'Socijalna satira viktorijanske Engleske: sirotišta, zatvori, eksploatacija djece, hipokrizija buržoazije. Dickens = realizam s moralnom indignacijom. Najčitaniji pisac svog doba — serijski romani u novinama, kao Netflix serije 19. st.'},
  ];
  return (
    <>
      <style>{CSS_AC7}</style>
      <SH7 label="Ostali veliki realisti — kontekst za esej" style={{marginTop:24}}/>
      <div className="ac7-triple">
        {autori.map(a=>(
          <div className="ac7" key={a.name}>
            <div className="ac7-hdr" style={{padding:'14px 16px 12px'}}>
              <div className="ac7-mono" style={{background:a.monoBg,width:40,height:40,fontSize:18}}>{a.mono}</div>
              <div className="ac7-meta">
                <div className="ac7-name" style={{fontSize:14}}>{a.name}</div>
                <div className="ac7-dates" style={{fontSize:9}}>{a.dates}</div>
              </div>
            </div>
            <div className="ac7-body" style={{padding:'12px 16px'}}>
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
   [6] POP KULTURA — Dostojevski danas
============================================================ */
const POP_DOST = [
  {film:'🎬 The Joker (2019.)',               title:'= suvremeni Raskoljnikov',          source:'Arthur Fleck = anonimni neuspješnik koji razvija teoriju o sebi kao nadčovjeku i prelazi crtu. Joaquin Phoenix. Direktna Dostojevskijeva linija: teorija → zločin → duhovna kriza.'},
  {film:'🎬 Crime and Punishment (TV, 2024.)', title:'Moderna adaptacija — BBC',          source:'Postavljeno u suvremenu Englesku. Jack Thorne adaptacija dokazuje da je teorija nadčovjeka apsolutno aktualna u doba influencera i „superiornijih" pojedinaca.'},
  {film:'📚 Nietzsche — Übermensch (1883.)',   title:'Dostojevski anticipira Nietzschea', source:'Raskoljnikov razvija teoriju nadčovjeka 17 godina PRIJE Nietzscheovog Zaratustre. Dostojevski je bio svjestan opasnosti te ideje — Nietzsche ju je slavio. Dostojevski je Nietzsche koji se kaje.'},
  {film:'🧠 Freud čita Dostojevskog',          title:'Psihoanaliza i Braća Karamazovi',  source:'Freud: „Braća Karamazovi su najveći roman ikad napisan." Freud čita Dostojevskog kao predanalitički opis id-a, ega i superega. Raskoljnikov = id koji pobjeđuje superego i strada.'},
  {film:'📖 Kafka, Camus, Sartre',             title:'Svi polaze od Dostojevskog',       source:'Kafka (H08) = apsurd bez Boga. Camus = Stranac kao Raskoljnikov bez grižnje. Sartre = egzistencijalizam slobodne volje. Sva moderna europska literatura 20. st. počinje s Dostojevskim.'},
  {film:'🇭🇷 „Dostojevski u HR lektiri"',      title:'Zašto je na maturi 2026',         source:'NCVVO: Zločin i kazna je obvezatno djelo jer „psihološkim realizmom propituje temeljne moralne dileme koje su relevantne za svakog čovjeka." To je jedini roman na HR maturi koji Freud citira.'},
];

export function PopKulturaDostojevski() {
  return (
    <>
      <style>{CSS_POP7}</style>
      <SH7 label="Dostojevski u suvremenoj kulturi" style={{marginTop:24}}/>
      <div className="pop7">
        {POP_DOST.map((p,i)=>(
          <div className="pop7-card" key={i}>
            <div className="pop7-film">{p.film}</div>
            <div className="pop7-title">{p.title}</div>
            <div className="pop7-source">{p.source}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [7] HERO QUOTE — "Jesam li vaš ili Napoleon?"
============================================================ */
export function HeroQuoteRaskoljnikov() {
  return (
    <>
      <style>{CSS_QUOTE7}</style>
      <div className="hq7">
        <div className="hq7-eye">RASKOLJNIKOVLJEVA CENTRALNA DILEMA</div>
        <div className="hq7-text">„<em>Jesam li vaš</em> ili sam Napoleon?&quot;</div>
        <div className="hq7-body">Raskoljnikov, II. dio. Jedna rečenica = cijela filozofija romana. Ubojstvo Alijone nije bio zločin radi novca — bio je <strong style={{color:'var(--t1)'}}>filozofski eksperiment</strong>: je li Raskoljnikov „neobični čovjek&quot; koji smije kršiti zakone, ili je „obični&quot; — i onda je ubojica? Odgovor koji ga uništava: obični.</div>
        <div className="hq7-source">ZLOČIN I KAZNA · F. DOSTOJEVSKI · 1866. · II. DIO · PSIHOLOŠKI ROMAN</div>
      </div>
    </>
  );
}

/* ============================================================
   [8] STAT CARDS — Zločin i kazna
============================================================ */
export function StatCardsZlocin() {
  const stats = [
    {ico:'📅', val:'1866.',    lbl:'Godina',           sub:'serijski u Ruskom vjesniku'},
    {ico:'📖', val:'6+1',      lbl:'Dijelova',         sub:'6 dijelova + epilog'},
    {ico:'7️⃣', val:'Broj 7',  lbl:'Biblijska opsesija',sub:'struktura + simbolika'},
    {ico:'🏔️', val:'Sibir',   lbl:'Iskupljenje',      sub:'epilog 1,5 god. poslije'},
  ];
  return (
    <>
      <style>{CSS_STAT7}</style>
      <div className="stat7">
        {stats.map(s=>(
          <div className="stat7-card" key={s.lbl}>
            <span className="stat7-ico">{s.ico}</span>
            <div className="stat7-val">{s.val}</div>
            <div className="stat7-lbl">{s.lbl}</div>
            <div className="stat7-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [9] ACCORDION — Kompozicija 6 dijelova + Epilog
============================================================ */
const KOMPOZICIJA = [
  {br:'I',     naslov:'Priprema i zločin',        tag:'ZLOČIN',
   citat:'„Ubija — i ne osjeća ništa. Tek pokušava pobjeći."',
   esej:'Raskoljnikov živi u kukavičjem stanu, bolestan i siromašan. Ubija lihvaricu Alonu Ivanovnu — i slučajno Lizavetu (nevinog svjedoka). Nakon ubojstva: trauma, groznica, gubitak kontrole. Ključno: ne uzima novac koji mu je bio „utilitarni" motiv. Za esej — ubojstvo nije radi novca, nego radi teorije.'},
  {br:'II',    naslov:'Bolest i paranoja',         tag:'PARANOJA',
   citat:'„Svaki razgovor s policajcem čini mu se optužbom."',
   esej:'Raskoljnikov u groznici. Svi razgovori s policijom su za njega ispitivanja. Marmeladov umire pregažen konjima — Raskoljnikov daje mu novac. Susreće Sonju. Razumihin ga čuva. Dostojevski = majstor prikazivanja paranoičnog stanja. Za esej o psihološkom realizmu.'},
  {br:'III',   naslov:'Intelektualna igra s Porfirijem', tag:'MAČKA I MIŠ',
   citat:'Porfirije citira Raskoljnikovljev članak — Raskoljnikov zna da zna.',
   esej:'Dolaze majka i Dunja. Drugi susret s Porfirijem — Porfirije citira teoriju nadčovjeka iz članka. Igra mačke i miša počinje: obojica znaju, ali Raskoljnikov nema dokaznog materijala koji bi ga ulovio. Za esej — Porfirije kao intelektualni dvojnik Raskoljnikova.'},
  {br:'IV',    naslov:'Sonja čita Lazara',         tag:'PREKRETNICA',
   citat:'„Čita mu o uskrsnuću Lazara — i Raskoljnikov sluša kao da mu se čita sudbina."',
   esej:'Raskoljnikov ide Sonji. Ona mu čita evanđelje — uskrsnuće Lazara. Scena prekretnica: Raskoljnikov spušta obranu, sluša. Treći susret s Porfirijem — Porfirije savjetuje dobrovoljnu predaju. Za esej: Sonja kao duhovni vodič, Biblija kao jedina literatura koja može promijeniti Raskoljnikova.'},
  {br:'V',     naslov:'Ispovijest Sonji',          tag:'ISPOVIJEST',
   citat:'„Ona plače i kaže: Otići ćemo zajedno u patnju."',
   esej:'Raskoljnikov konačno govori Sonji da je on ubojica. Ona ne bježi — plače i prihvaća ga. „Otići ćemo zajedno u patnju." Savjetuje predaju. Lužin optužuje Sonju krađe — Raskoljnikov je brani. Za esej: Sonja kao moralna vertikala — ne osuda, nego prihvaćanje i vodilja.'},
  {br:'VI',    naslov:'Svidrigajlov · Predaja',    tag:'RASPLET',
   citat:'„Svidrigajlov pušta Dunju — i ide na groblje. Raskoljnikov ide policiji."',
   esej:'Svidrigajlov ucjenjuje Dunju — ali je pušta. Ubija se. Njegovo samouništenje = što bi se Raskoljnikovu dogodilo bez Sonje. Raskoljnikov uzima križ od Sonje i odlazi se predati. Predaja = prvi čin slobodne volje izvan teorije.'},
  {br:'EPILOG',naslov:'Sibir — iskupljenje počinje', tag:'ISKUPLJENJE',
   citat:'„Pada pred noge Sonji, plače. Nova priča tek počinje."',
   esej:'1,5 godinu poslije. Raskoljnikov u katorgi. Sonja ga prati, radi u gradu. Raskoljnikov JOŠ UVIJEK odbija krivnju — „nisam pogriješio, samo nisam bio dovoljno jak." San o bakterijama = proroštvo nihilizma. Buđenje: gleda Sonju, plače, pada pred noge. Iskupljenje počinje. Dostojevski: „nova priča, priča o postupnom preporodu čovjeka."'},
];

export function AccordionKompozicija() {
  return (
    <>
      <style>{CSS_SC7}</style>
      <p className="prose" style={{marginBottom:12}}>Klikni za citat i analizu svakog dijela. Ključni za esej.</p>
      <div className="sc7s">
        {KOMPOZICIJA.map(k=>(
          <details className="sc7" key={k.br}>
            <summary className="sc7-sum">
              <div className="sc7-num">{k.br}</div>
              <div className="sc7-ttl">{k.naslov}</div>
              <span className="sc7-meta">{k.tag}</span>
              <span className="sc7-chev">▾</span>
            </summary>
            <div className="sc7-body">
              <div className="sc7-quote">{k.citat}</div>
              <div className="sc7-why"><b>Za esej:</b> {k.esej}</div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [10] SVG — Likovi i veze u Zločinu i kazni
============================================================ */
export function SVGLikoviZlocin() {
  return (
    <>
      <style>{CSS_WRAP7}</style>
      <div className="wr7">
        <div className="wr7-lbl">ODNOSI IZMEĐU LIKOVA — ZLOČIN I KAZNA</div>
        <svg viewBox="0 0 660 360" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Odnosi između likova u Zločinu i kazni">
          <line x1="330" y1="140" x2="330" y2="265" stroke="#3ecf6e" strokeWidth="2.5" opacity=".7"/>
          <line x1="330" y1="140" x2="500" y2="160" stroke="#6b9bff" strokeWidth="2" strokeDasharray="5,3" opacity=".7"/>
          <line x1="330" y1="140" x2="500" y2="280" stroke="#DC322F" strokeWidth="1.5" strokeDasharray="8,4" opacity=".6"/>
          <line x1="330" y1="140" x2="160" y2="200" stroke="#e9b446" strokeWidth="1.5" opacity=".6"/>
          <line x1="330" y1="140" x2="160" y2="300" stroke="#3ecf6e" strokeWidth="1.5" opacity=".5"/>
          <line x1="330" y1="140" x2="130" y2="140" stroke="rgba(255,255,255,.2)" strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="330" y1="265" x2="500" y2="280" stroke="rgba(220,50,47,.3)" strokeWidth="1" strokeDasharray="4,4"/>
          <line x1="160" y1="200" x2="500" y2="280" stroke="#DC322F" strokeWidth="1" strokeDasharray="5,5" opacity=".4"/>
          <circle cx="330" cy="140" r="38" fill="#0d0505" stroke="#DC322F" strokeWidth="2.5"/>
          <text x="330" y="133" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="700" fill="#e87a77">RASKOLJNIKOV</text>
          <text x="330" y="148" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(220,50,47,.6)">protagonist · 23 g.</text>
          <circle cx="330" cy="285" r="30" fill="#041a0a" stroke="#3ecf6e" strokeWidth="2"/>
          <text x="330" y="280" textAnchor="middle" fontFamily="serif" fontSize="12" fontWeight="700" fill="#5ecf8a">SONJA</text>
          <text x="330" y="294" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(62,207,110,.6)">moralna vertikala</text>
          <text x="330" y="325" textAnchor="middle" fontFamily="serif" fontSize="9" fill="rgba(62,207,110,.4)" fontStyle="italic">„Otići ćemo zajedno&quot;</text>
          <circle cx="510" cy="155" r="28" fill="#04061a" stroke="#6b9bff" strokeWidth="2"/>
          <text x="510" y="150" textAnchor="middle" fontFamily="serif" fontSize="11" fontWeight="700" fill="#8baeff">PORFIRIJE</text>
          <text x="510" y="164" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(107,155,255,.6)">istražitelj · mačka</text>
          <circle cx="510" cy="278" r="28" fill="#1a0505" stroke="rgba(220,50,47,.6)" strokeWidth="1.5"/>
          <text x="510" y="273" textAnchor="middle" fontFamily="serif" fontSize="11" fontWeight="700" fill="rgba(220,50,47,.8)">SVIDRIGAJLOV</text>
          <text x="510" y="287" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(220,50,47,.5)">dvojnik · cinik</text>
          <circle cx="155" cy="195" r="26" fill="#0e0e04" stroke="#e9b446" strokeWidth="1.5"/>
          <text x="155" y="190" textAnchor="middle" fontFamily="serif" fontSize="11" fontWeight="700" fill="#d4a843">DUNJA</text>
          <text x="155" y="204" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(232,201,122,.6)">sestra · ponosna</text>
          <circle cx="155" cy="295" r="25" fill="#041a0a" stroke="rgba(62,207,110,.4)" strokeWidth="1"/>
          <text x="155" y="290" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(62,207,110,.7)">RAZUMIHIN</text>
          <text x="155" y="304" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(62,207,110,.4)">prijatelj · razum</text>
          <circle cx="120" cy="135" r="22" fill="rgba(255,255,255,.03)" stroke="rgba(255,255,255,.15)" strokeWidth="1"/>
          <text x="120" y="130" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(255,255,255,.5)">MARMELADOV</text>
          <text x="120" y="143" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="rgba(255,255,255,.3)">Sonjin otac</text>
          <g transform="translate(20,340)">
            <line x1="0" y1="8" x2="20" y2="8" stroke="#3ecf6e" strokeWidth="2.5"/>
            <text x="25" y="12" fontFamily="serif" fontSize="9.5" fill="rgba(255,255,255,.45)">iskupljenje / prijateljstvo</text>
            <line x1="0" y1="22" x2="20" y2="22" stroke="#6b9bff" strokeWidth="2" strokeDasharray="5,3"/>
            <text x="25" y="26" fontFamily="serif" fontSize="9.5" fill="rgba(255,255,255,.45)">intelektualni dvoboj</text>
            <line x1="0" y1="36" x2="20" y2="36" stroke="#DC322F" strokeWidth="2" strokeDasharray="8,4"/>
            <text x="25" y="40" fontFamily="serif" fontSize="9.5" fill="rgba(255,255,255,.45)">dvojnik / neprijatelj</text>
          </g>
        </svg>
      </div>
    </>
  );
}

/* ============================================================
   [11] SVG — Teorija nadčovjeka vizualizacija
============================================================ */
export function SVGNadcovjek() {
  return (
    <>
      <style>{CSS_WRAP7}</style>
      <div className="wr7" style={{marginBottom:20}}>
        <div className="wr7-lbl">RASKOLJNIKOVLJEVA TEORIJA NADČOVJEKA — I NJEZIN KRAH</div>
        <svg viewBox="0 0 660 260" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Raskoljnikovljeva hijerarhija nadčovjeka">
          <defs>
            <marker id="arr-h07" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="rgba(255,255,255,.3)"/>
            </marker>
          </defs>
          <rect x="230" y="20" width="200" height="60" rx="10" fill="#1a0a0a" stroke="#e9b446" strokeWidth="2"/>
          <text x="330" y="45" textAnchor="middle" fontFamily="serif" fontSize="15" fontWeight="700" fill="#e9b446">NAPOLEON</text>
          <text x="330" y="62" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(232,201,122,.6)">arhetip „neobičnog&quot; čovjeka</text>
          <rect x="140" y="110" width="380" height="60" rx="10" fill="#150505" stroke="rgba(220,50,47,.6)" strokeWidth="1.5"/>
          <text x="330" y="135" textAnchor="middle" fontFamily="serif" fontSize="14" fontWeight="700" fill="#e87a77">„NEOBIČNI&quot; LJUDI</text>
          <text x="330" y="152" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(220,50,47,.5)">Pravo na kršenje zakona za viši cilj</text>
          <text x="230" y="152" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(220,50,47,.4)">Newton · Muhamed</text>
          <text x="440" y="152" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(220,50,47,.4)">Lihvarica = prepreka?</text>
          <rect x="60" y="200" width="540" height="45" rx="10" fill="#0a0a0a" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
          <text x="330" y="220" textAnchor="middle" fontFamily="serif" fontSize="13" fill="rgba(255,255,255,.6)">„OBIČNI&quot; LJUDI — moraju slijediti zakone</text>
          <text x="330" y="237" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="rgba(255,255,255,.3)">Masa · Konformisti · „Vaši&quot;</text>
          <path d="M330 80 L330 108" stroke="rgba(232,201,122,.4)" strokeWidth="1.5" markerEnd="url(#arr-h07)"/>
          <path d="M330 170 L330 198" stroke="rgba(255,255,255,.2)" strokeWidth="1.5" markerEnd="url(#arr-h07)"/>
          <text x="600" y="128" textAnchor="middle" fontFamily="serif" fontSize="11" fontWeight="700" fill="#DC322F">← RASKOLJNIKOV</text>
          <text x="600" y="143" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="rgba(220,50,47,.6)">„Jesam li vaš?&quot;</text>
          <text x="330" y="255" textAnchor="middle" fontFamily="serif" fontSize="11" fill="rgba(255,255,255,.3)" fontStyle="italic">
            Teorija se ruši: savjest dokazuje da je OBIČNI. Raskoljnikov se slama.
          </text>
        </svg>
      </div>
    </>
  );
}

/* ============================================================
   [12] SIMBOLI GRID
============================================================ */
export function SimboliGrid() {
  const simboli = [
    {ico:'7️⃣', name:'Broj 7',           desc:'Raskoljnikov ubija u 7h, čeka 7 dana, ide 730 koraka do Alijone. Biblijski broj savršenosti — ironija: zločin u broju koji označava cjelovitost.'},
    {ico:'💛', name:'Žuta boja',        desc:'Raskoljnikovljev stan (žute tapete, „sobica kao lijes"), Alonina haljina, Sonyin status (žuta kartica = prostitutka). Žuto = grad koji truje. Suprotnost: bijeli Sibir.'},
    {ico:'✝️', name:'Križ',            desc:'Sonja daje Raskoljnikovu Lizavetin križ pri predaji — simbolično nosi težinu nevinog žrtve. Križ = prihvaćanje kršćanske patnje kao puta k uskrsnuću.'},
    {ico:'📜', name:'Uskrsnuće Lazara', desc:'Sonja čita IV. poglavlje: Lazar mrtav 4 dana → Krist ga zove. Paralela: Raskoljnikov „mrtav" duhovno. Scena prekretnica romana. Evanđelje po Ivanu, 11.'},
    {ico:'🏔️', name:'Sibir',           desc:'Epilog: bijelo, hladno, prostrano — antiteza smrdljivom Peterburgu. Prostor iskupljenja i duhovnog uskrsnuća. Dostojevski piše iz iskustva.'},
    {ico:'🐛', name:'San o bakterijama',desc:'Epilog: Raskoljnikov sanja sitna bića koja nose „vlastitu istinu" i međusobno se ubijaju. Proroštvo nihilizma i ideoloških totalitarizama 20. st. — napisano 1866.'},
  ];
  return (
    <>
      <style>{CSS_SIMB7}</style>
      <div className="simb7">
        {simboli.map((s,i)=>(
          <div className="simb7-item" key={i}>
            <span className="simb7-ico">{s.ico}</span>
            <div>
              <div className="simb7-name">{s.name}</div>
              <div className="simb7-desc">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [13] SVG — Raskoljnikovljev psihološki arc
============================================================ */
export function SVGRaskoljnikovArc() {
  return (
    <>
      <style>{CSS_WRAP7}</style>
      <div className="wr7">
        <div className="wr7-lbl">RASKOLJNIKOVLJEV PSIHOLOŠKI ARC — OD TEORIJE DO ISKUPLJENJA</div>
        <svg viewBox="0 0 660 230" xmlns="http://www.w3.org/2000/svg"
          style={{maxWidth:'100%',height:'auto',display:'block'}}
          role="img" aria-label="Raskoljnikovljev arc od teorije do iskupljenja">
          <defs>
            <linearGradient id="arc-h07b" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e9b446"/>
              <stop offset="20%" stopColor="#DC322F"/>
              <stop offset="50%" stopColor="#8B1E1B"/>
              <stop offset="80%" stopColor="#DC322F"/>
              <stop offset="100%" stopColor="#3ecf6e"/>
            </linearGradient>
          </defs>
          {[0,50,100].map(y=>(
            <line key={y} x1="60" y1={190-y*1.5} x2="620" y2={190-y*1.5} stroke="rgba(255,255,255,.04)" strokeWidth="1"/>
          ))}
          {[['Mir/teorija',100],['Kriza',50],['Dno',0]].map(([l,v])=>(
            <text key={l} x="55" y={190-v*1.5+4} textAnchor="end" fontFamily="monospace" fontSize="8" fill="rgba(255,255,255,.3)">{l}</text>
          ))}
          <path d="M80 100 C110 80 140 60 170 95 C190 115 210 155 240 165 C260 170 280 175 310 178 C340 181 360 182 390 180 C420 177 450 170 480 155 C510 140 540 115 580 80"
            fill="none" stroke="url(#arc-h07b)" strokeWidth="3" strokeLinecap="round"/>
          <path d="M80 100 C110 80 140 60 170 95 C190 115 210 155 240 165 C260 170 280 175 310 178 C340 181 360 182 390 180 C420 177 450 170 480 155 C510 140 540 115 580 80 L580 190 L80 190 Z"
            fill="url(#arc-h07b)" opacity=".06"/>
          {[
            {x:80,  y:100, label:'Teorija\nnačovj.',  color:'#e9b446'},
            {x:170, y:85,  label:'Ubojstvo\nAljone',  color:'#DC322F'},
            {x:240, y:155, label:'Groznica\nparanoja', color:'#8B1E1B'},
            {x:310, y:168, label:'Porfirije\nI. susret',color:'#8B1E1B'},
            {x:390, y:170, label:'Sonja\nčita Lazara',color:'#DC322F'},
            {x:480, y:145, label:'Ispovijest\nSonji',  color:'#e9b446'},
            {x:580, y:72,  label:'Predaja\n+ Sibir',   color:'#3ecf6e'},
          ].map((p,i)=>(
            <g key={i}>
              <circle cx={p.x} cy={p.y} r="5" fill={p.color} opacity=".9"/>
              {p.label.split('\n').map((line,li)=>(
                <text key={li} x={p.x} y={p.y-18+li*11} textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill={p.color}>{line}</text>
              ))}
            </g>
          ))}
          <line x1="60" y1="190" x2="620" y2="190" stroke="rgba(255,255,255,.1)" strokeWidth="1"/>
          <text x="80" y="204" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(255,255,255,.3)">Dio I</text>
          <text x="580" y="204" textAnchor="middle" fontFamily="monospace" fontSize="7.5" fill="rgba(255,255,255,.3)">Epilog</text>
          <text x="330" y="220" textAnchor="middle" fontFamily="serif" fontSize="10" fill="rgba(255,255,255,.25)" fontStyle="italic">
            „Tko ne trpi, ne može uskrsnuti.&quot; — Dostojevski
          </text>
        </svg>
      </div>
    </>
  );
}

/* ============================================================
   [14] ACCORDION — Ključne scene (NOVA SEKCIJA)
============================================================ */
const KLJUCNE_H07 = [
  {br:'I/7',    naslov:'Ubojstvo Alijone i Lizavete',          tag:'ZLOČIN',
   citat:'„Ubija lihvaricu jednim udarcem. Zatim ulazi Lizaveta — nevin svjedok. Ubija i nju. Raskoljnikov bježi."',
   esej:'Ubojstvo nije hladnokrvno — Raskoljnikov je u panici. Lizaveta je slučajna žrtva koja ruši utilitarni argument (ubio je nevinog). Novac koji je uzeo — nikad ne iskoristi. Za esej: ubojstvo dokazuje da teorija nadčovjeka ne funkcionira od prvog trena.'},
  {br:'II/6',   naslov:'Marmeladov umire — Raskoljnikov daje novac', tag:'KONTRADIKCIJA',
   citat:'„Raskoljnikov daje sve novce Katerini Ivanovnoj. Novce koje je ukrao."',
   esej:'Odmah po ubojstvu — Raskoljnikov djeluje humano. Kontradikcija: „nadčovjek" koji je ubio radi teorije — daje ukradeni novac siromašnoj obitelji. Za esej: Raskoljnikovljeva teorija nikad nije bila dosledna. On je uvijek imao dušu.'},
  {br:'III/5',  naslov:'Porfirije citira teoriju nadčovjeka',  tag:'IGRA MAČKE I MIŠA',
   citat:'„Čitao sam Vaš članak. Zanimljiv. Dakle — vi dijelite ljude na obične i neobične?"',
   esej:'Porfirije citira Raskoljnikovljev članak direktno. Raskoljnikov zna da zna — ali nema dokaz. Intelektualni dvoboj počinje: tko je pametniji, tko će prvije pući. Za esej o psihološkom realizmu: dijalog je jedino oružje oba lika.'},
  {br:'IV/4',   naslov:'Sonja čita Uskrsnuće Lazara',          tag:'PREKRETNICA',
   citat:'„Lazar, izlazi! — I mrtvi izađe."',
   esej:'Sonja čita Evanđelje po Ivanu, 11. poglavlje. Raskoljnikov sluša kao da mu se čita njegova sudbina. Lazar = Raskoljnikov. Uskrsnuće = iskupljenje koje mu Sonja nudi. Scena prekretnica: Raskoljnikov počinje bježati od sebe, ne samo od policije.'},
  {br:'V/4',    naslov:'Raskoljnikov ispovijeda Sonji',         tag:'ISPOVIJEST',
   citat:'„Ja sam ubio. Alonu Ivanovnu i Lizavetu. To sam ja." Sonja plače i prima ga.',
   esej:'Sonja ne bježi, ne poziva policiju, ne osuđuje. Plače i kaže: „Otići ćemo zajedno u patnju." Za esej o Sonji kao moralnoj vertikali: prihvaćanje ubojice bez osude = kršćanska agape (bezuvjetna ljubav). Dostojevski pokazuje da je Sonja moralno superiornija od Porfirija.'},
  {br:'EPIL.',  naslov:'Raskoljnikov pada pred Sonjine noge',   tag:'ISKUPLJENJE',
   citat:'„Nešto mu zatreptaju obrazi. Pade pred nje — i zaplaka. Sonja ga gleda i drži za ruku."',
   esej:'Epilog. Sibir. Raskoljnikov još uvijek odbija krivnju — pa sanja bakterije. Buđenje: vidi Sonju, shvaća da ju voli, pada pred noge. Plač = prvi spontani osjećaj izvan teorije. Za esej o iskupljenju kroz patnju: ovo je tek početak.'},
];

export function AccordionKljucneSceneH07() {
  return (
    <>
      <style>{CSS_SC7}</style>
      <SH7 label="Ključne scene — za esej i kviz"/>
      <p className="prose" style={{marginBottom:12}}>H07 nema zasebnu sekciju ključnih scena — ovo je nova. 6 scena koje moraš znati.</p>
      <div className="sc7s">
        {KLJUCNE_H07.map(sc=>(
          <details className="sc7" key={sc.br}>
            <summary className="sc7-sum">
              <div className="sc7-num" style={{fontSize:10}}>{sc.br}</div>
              <div className="sc7-ttl">{sc.naslov}</div>
              <span className="sc7-meta">{sc.tag}</span>
              <span className="sc7-chev">▾</span>
            </summary>
            <div className="sc7-body">
              <div className="sc7-quote">{sc.citat}</div>
              <div className="sc7-why"><b>Za esej:</b> {sc.esej}</div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

/* ============================================================
   [15] USPOREDBA — Raskoljnikov vs Onjegin (bridge H06→H07)
============================================================ */
export function UsporedbaRaskoljnikovOnjegin() {
  const rowsL = [
    ['Tip',      'suvišan čovjek → ubojica'],
    ['Problem',  'ima teoriju, djeluje — i griješi'],
    ['Aktivnost','ubija — i pada'],
    ['Bolest',   'intelektualna gordost → paranoja'],
    ['Spas',     'Sonja + patnja + vjera'],
    ['Kraj',     'iskupljenje — buđenje u Sibiru'],
    ['Most prema','Camus, Kafka (H08/H09)'],
  ];
  const rowsR = [
    ['Tip',      'suvišan čovjek → cinik'],
    ['Problem',  'nema volju, ne djeluje — i propada'],
    ['Aktivnost','ubija prijatelja u duelu — pasivno'],
    ['Bolest',   'splin · dosada · zasićenost'],
    ['Spas',     'Tatjana — ali je odbija'],
    ['Kraj',     'slomljen · otvoren kraj'],
    ['Most prema','Raskoljnikov, Meursault (H09)'],
  ];
  return (
    <>
      <style>{CSS_CMP7}</style>
      <SH7 label={'Raskoljnikov vs Onjegin \u2014 evolucija \u201Esuvi\u0161nog \u010Dovjeka\u201C'} style={{marginTop:20}}/>
      <div className="cmp7">
        <div className="cmp7-side left">
          <div className="cmp7-author">Raskoljnikov</div>
          <div className="cmp7-period">DOSTOJEVSKI · 1866. · H07 OBVEZATNO</div>
          {rowsL.map(([l,v])=>(<div className="cmp7-row" key={l}><span className="cmp7-lbl">{l}</span><span>{v}</span></div>))}
        </div>
        <div className="cmp7-vs"><span className="cmp7-vs-inner">VS</span></div>
        <div className="cmp7-side">
          <div className="cmp7-author">Onjegin</div>
          <div className="cmp7-period">PUŠKIN · 1823.–1831. · ← H06</div>
          {rowsR.map(([l,v])=>(<div className="cmp7-row" key={l}><span className="cmp7-lbl">{l}</span><span>{v}</span></div>))}
        </div>
      </div>
      <div className="box-int" style={{marginTop:8}}>
        <div className="box-int-lbl">💡 Za esej — linija suvišnog čovjeka kroz 3 poglavlja</div>
        <div className="box-int-txt">Werther (H05) → Onjegin (H06) → Raskoljnikov (H07) = evolucija istog arhetipa. Werther osjeća previše i umire. Onjegin ne osjeća dovoljno i propada. Raskoljnikov previše <strong>misli</strong> — i postaje ubojica. Dostojevski je Puškinov nasljednik koji uvodi moralne posljedice tamo gdje Puškin ostavlja otvoreni kraj.</div>
      </div>
    </>
  );
}

/* ============================================================
   [16] ACCORDION — 7 esejnih teza
============================================================ */
const ESEJ_TEZE_H07 = [
  {br:'T1',naslov:'Raskoljnikov kao tragičan junak',tag:'TRAGEDIJA · ARISTOTEL',
   teza:'„Dostojevski prikazuje Raskoljnikova kao tragičnog junaka — njegova intelektualna gordost (teorija nadčovjeka) vodi ga do ubojstva, a zatim do psihološkog raspada. Kao antički tragički junak, pada jer je velik."',
   args:['Hamartia = teorija nadčovjeka — gordi intelektualni eksperiment koji postaje zločin','Peripetija = ubojstvo Lizavete (slučajne žrtve) — teorija se ruši od prvog trena','Anagnorizis = Raskoljnikov shvaća da je „obični" — i sruši se. Paralela s Kreontom (H01) i Hamletom (H03)'],
   scena:'Prizor s Porfirijem (III. susret): „Želio sam biti Napoleon — to je sve." Anagnorizis u jednoj rečenici.'},
  {br:'T2',naslov:'Sonja kao moralna vertikala',tag:'MORALNA VERTIKALA · KRŠĆANSTVO',
   teza:'„Sonja utjelovljuje kršćansku ljubav, žrtvu i iskupljenje. Iako po statusu prostitutka, ona je duhovno najčistiji lik u romanu. Čita evanđelje, ide u Sibir. Paralela s Tatjanom iz Onjegina (H06)."',
   args:['Sonja = agape (bezuvjetna ljubav): prima Raskoljnikova bez osude, čak ni ne naziva ga ubojicom','Čita mu Evanđelje po Ivanu 11 — Lazar kao paralela: Raskoljnikov je „mrtav duhovno", treba mu poziv iz groba','Ide u Sibir dobrovoljno. Dostojevski: žrtva bez nagrade je jedina istinska žrtva'],
   scena:'Sonja čita Lazara (IV. dio) — Raskoljnikov sluša s bolnim interesom, „kao da čita svoju sudbinu."'},
  {br:'T3',naslov:'Kritika nihilizma i teorije nadčovjeka',tag:'NIHILIZAM · FILOZOFIJA',
   teza:'„Zločin i kazna je Dostojevskijev odgovor na ruski nihilizam 1860-ih: odbacivanje moralnih normi = psihološki raspad. Anticipira Nietzscheovog Übermenscha (1883.) — i kritizira ga 17 godina ranije."',
   args:['Raskoljnikov teoretski dokazuje da smije ubiti — ali savjest ga zaustavlja odmah po činu','Svidrigajlov = što bi se Raskoljnikovu dogodilo bez savjesti: cinik koji ne osjeća grižnju, ubija se na kraju','Dostojevski kao pravoslavni kršćanin: čovjek nije samo razum — ima dušu koja se ne može ugasiti teorijom'],
   scena:'San o bakterijama (Epilog): Dostojevskijevo proroštvo totalitarizma — svaka „vlastita istina" vodi u kaos.'},
  {br:'T4',naslov:'Psihološki realizam — Dostojevskijeva inovacija',tag:'PSIHOLOŠKI REALIZAM',
   teza:'„Dostojevski transformira realizam: gdje Balzac i Flaubert opisuju društvo izvana, Dostojevski ulazi iznutra. Paranoja, grižnja, samoosuda. Polifonija (Bahtin): svaki lik ima nezavisan glas."',
   args:['Unutarnji monolog: čitatelj prati Raskoljnikov tijek misli u realnom vremenu — nova narativna tehnika','Polifonija: Sonja, Porfirije, Svidrigajlov — svi imaju legitimne filozofije, čak i negativci. Nema jednostrane moralizacije','Prethodnica stream of consciousness (Virginia Woolf), psihoanalize (Freud čita Dostojevskog), egzistencijalizma'],
   scena:'Tri susreta s Porfirijem: dijalog je jedino oružje. Raskoljnikov i Porfirije — oba genijalna, oba igraju igru u mislima.'},
  {br:'T5',naslov:'Peterburg kao lik',tag:'GRAD · AMBIJENT',
   teza:'„Grad u romanu nije pozadina — on je aktivan lik. Uske ulice, vrućina, žuti smrad, bijeda. Peterburg generira Raskoljnikovljevu teoriju. Gradski realizam kao nova forma."',
   args:['Raskoljnikovljev stan = „sobica kao lijes" (žute tapete, niski strop) = njegova psiha u arhitekturi','Peterburg ljeti: gužva, smrad, pijani, prostitutke — kontekst koji čini teoriju „logičnom"','Suprotnost: Sibir = bijela čistoća, prostranstvo. Iskupljenje je moguće tek van Peterburga'],
   scena:'Raskoljnikov hoda Peterburgu 730 koraka do Alijone — grad ga vodi, ne on grad.'},
  {br:'T6',naslov:'Sonja i Dunja — žensko žrtvovanje',tag:'ŽENSKO ŽRTVOVANJE · NCVVO 2020',
   teza:'„Obje žrtvuju sebe za obitelj: Sonja prostitucijom, Dunja brakom s Lužinom. Dostojevski kritizira društvo u kojemu žene prodaju tijelo ili čast za opstanak obitelji."',
   args:['Sonja: oca je izgubila alkoholu, majka umire, polubratia gladuju — ona postaje prostitutka jer nema druge opcije','Dunja: namjerava se udati za Lužina (koristoljubivog odvjetnika) da financira bratov studij — Raskoljnikov to odbija','Tema NCVVO primjera eseja 2020: ocjenjivači direktno nagrađuju analizu ove teze'],
   scena:'Raskoljnikov čita majčino pismo: Dunja se uda radi njega. Reakcija: gadi mu se — jer razumije logiku.'},
  {br:'T7',naslov:'Iskupljenje kroz patnju',tag:'ISKUPLJENJE · PRAVOSLAVLJE',
   teza:'„Središnja Dostojevskijeva ideja: tko ne trpi, ne može uskrsnuti. Raskoljnikov mora kroz Sibir (patnju) da bi se duhovno rodio. Sonja mu pokazuje put. Uskrsnuće Lazara kao biblijska paralela."',
   args:['Dostojevski kao pravoslavni kršćanin piše teološki roman: krivnja bez iskupljenja = smrt duše','Sibir = prostor pročišćenja: hladno, bijelo, prostrano — suprotnost smrdljivom Peterburgu','Kraj nije happy end: „nova priča" tek počinje — Dostojevski obećava nastavak (nikad ga ne napiše)'],
   scena:'Epilog: Raskoljnikov pada pred Sonjine noge, plače. Evanđelje ispod jastuka — još nije ga otvorio, ali zna da hoće.'},
];

export function AccordionEsejTezeH07() {
  return (
    <>
      <style>{CSS_SC7}</style>
      <div className="sc7s">
        {ESEJ_TEZE_H07.map((t,idx)=>(
          <details className="sc7" key={t.br}>
            <summary className="sc7-sum">
              <div className="sc7-num" style={{fontSize:13,color:TEZA_COLORS7[idx]}}>{t.br}</div>
              <div className="sc7-ttl">{t.naslov}</div>
              <span className="sc7-meta" style={{color:TEZA_COLORS7[idx],borderColor:`${TEZA_COLORS7[idx]}55`}}>{t.tag}</span>
              <span className="sc7-chev" style={{color:TEZA_COLORS7[idx]}}>▾</span>
            </summary>
            <div className="sc7-body">
              <div className="sc7-quote">{t.teza}</div>
              <div className="sc7-why"><b>Argumenti:</b></div>
              <div className="sc7-args">
                {t.args.map((a,i)=>(
                  <div className="sc7-arg" key={i} style={{borderLeftColor:TEZA_COLORS7[idx]}}>
                    <span className="sc7-arg-num" style={{color:TEZA_COLORS7[idx]}}>({i+1})</span>
                    <span>{a}</span>
                  </div>
                ))}
              </div>
              <div className="sc7-note">
                <strong style={{color:'var(--bronze)',fontFamily:'var(--mono)',fontSize:9,letterSpacing:1,fontStyle:'normal'}}>KLJUČNA SCENA: </strong>{t.scena}
              </div>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
