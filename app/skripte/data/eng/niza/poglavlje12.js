// Maturiraj.hr — Engleski niža razina · Poglavlje 12
// Višestruki izbor — taktika
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useRef } from "react";

export default function ENG_NIZA_CH12({ onBack, onNext, onPrev, onNavigate }) {
  // Keep latest nav callbacks in ref so interceptor never goes stale
  const navRef = useRef(null);
  navRef.current = { onBack, onNext, onPrev, onNavigate };

  useEffect(() => {
    // 1. Inject CSS (jednom)
    const styleId = "skripta-ch12-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH12_CSS;
      document.head.appendChild(s);
    }

    // 2. Expose funkcije na window (onclick handlers trebaju globalni scope)
    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch12-js";
    scriptEl.textContent = CH12_JS;
    document.body.appendChild(scriptEl);

    // 3. Intercept chapterXX.html navigation → delegate to React
    function navInterceptor(e) {
      const el = e.target.closest('a[href], [onclick]');
      if (!el) return;
      const href = el.getAttribute('href') || '';
      const onclick = el.getAttribute('onclick') || '';
      // Back to chapter list (breadcrumb)
      if (/index\.html/.test(href) || /index\.html/.test(onclick)) {
        e.preventDefault(); e.stopPropagation();
        const nav = navRef.current || {};
        if (nav.onBack) nav.onBack();
        return;
      }
      const m = href.match(/chapter(\d+)\.html/) ||
                onclick.match(/chapter(\d+)\.html/);
      if (!m) return;
      e.preventDefault();
      e.stopPropagation();
      const num = parseInt(m[1]);
      const nav = navRef.current || {};
      if (nav.onNavigate) { nav.onNavigate(num); return; }
      if (num === 13 && nav.onNext) nav.onNext();
      else if (num === 11 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch12-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch12-root"
      dangerouslySetInnerHTML={{ __html: CH12_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH12_CSS = `








/* ─── DESIGN TOKENS ──────────────────────────────────────── */
:root {
  --bg-base:       #080B10;
  --bg-surface:    #0D1117;
  --bg-elevated:   #131820;
  --bg-card:       #161D27;
  --bg-hover:      #1C2535;
  --bg-input:      #111620;
  --bd:            rgba(255,255,255,0.06);
  --bd-mid:        rgba(255,255,255,0.10);
  --bd-light:      rgba(255,255,255,0.16);
  --t1:  #E8EDF5;
  --t2:  #8A95A8;
  --t3:  #4A5568;
  --lime:          #9BF73A;
  --lime-dim:      rgba(155,247,58,0.10);
  --lime-border:   rgba(155,247,58,0.22);
  --lime-glow:     rgba(155,247,58,0.04);
  --sky:           #38BDF8;
  --sky-dim:       rgba(56,189,248,0.10);
  --sky-border:    rgba(56,189,248,0.22);
  --violet:        #A78BFA;
  --violet-dim:    rgba(167,139,250,0.10);
  --violet-border: rgba(167,139,250,0.22);
  --amber:         #FBB724;
  --amber-dim:     rgba(251,183,36,0.10);
  --amber-border:  rgba(251,183,36,0.22);
  --red:           #F87171;
  --red-dim:       rgba(248,113,113,0.10);
  --red-border:    rgba(248,113,113,0.22);
  --green:         #4ADE80;
  --green-dim:     rgba(74,222,128,0.10);
  --green-border:  rgba(74,222,128,0.22);
  --font: 'DM Sans', system-ui, sans-serif;
  --mono: 'DM Mono', 'Fira Code', monospace;
  --r1:4px; --r2:8px; --r3:12px; --r4:16px; --r5:24px;
  --sidebar:240px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg-base);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.shell{display:flex;min-height:100vh}

/* SIDEBAR */
.sidebar{width:var(--sidebar);flex-shrink:0;background:var(--bg-surface);border-right:1px solid var(--bd);position:sticky;top:0;height:100vh;overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bd-mid) transparent}
.sidebar::-webkit-scrollbar{width:3px}
.sidebar::-webkit-scrollbar-thumb{background:var(--bd-mid);border-radius:2px}
.sb-brand{padding:20px 16px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:28px;height:28px;background:var(--lime);border-radius:var(--r1);display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sb-logo svg{width:14px;height:14px}
.sb-name{font-size:13px;font-weight:700;color:var(--t1);letter-spacing:-0.2px}
.sb-sub{font-size:10px;color:var(--t3);margin-top:1px;font-family:var(--mono)}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:1.8px;color:var(--t3);text-transform:uppercase;padding:16px 16px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 16px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}
.sb-item.active{color:var(--lime);background:var(--lime-glow);border-left-color:var(--lime)}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
.sb-item.active .sb-dot{opacity:1}
.sb-footer{margin-top:auto;padding:12px 16px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.6;font-family:var(--mono)}

/* MAIN */
.main{flex:1;min-width:0}
.content-wrap{max-width:800px;width:100%;margin:0 auto;padding:36px 44px 100px}

/* BREADCRUMB */
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--t3);margin-bottom:28px;font-family:var(--mono)}
.bc-sep{opacity:.3}
.bc-active{color:var(--lime)}

/* TABS */
.tabs-wrap{display:flex;gap:0;margin-bottom:36px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:4px;width:fit-content}
.tab{padding:8px 20px;font-size:12.5px;font-weight:500;color:var(--t2);cursor:pointer;border-radius:var(--r1);transition:all .15s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}
.tab.active{background:var(--lime);color:#080B10;font-weight:700}
.layer{display:none}
.layer.active{display:block}

/* HERO */
.hero{margin-bottom:32px;padding:32px 36px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--lime),var(--sky),transparent)}
.hero::after{content:'EN';position:absolute;right:32px;top:50%;transform:translateY(-50%);font-size:96px;font-weight:700;color:rgba(255,255,255,.02);font-family:var(--mono);letter-spacing:-4px;pointer-events:none;user-select:none}
.hero-eyebrow{font-family:var(--mono);font-size:10px;color:var(--lime);letter-spacing:1.5px;margin-bottom:12px;text-transform:uppercase}
.hero-title{font-size:28px;font-weight:700;color:var(--t1);letter-spacing:-0.8px;line-height:1.15;margin-bottom:8px}
.hero-title span{color:var(--lime)}
.hero-sub{font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:20px}
.progress-track{height:2px;background:var(--bd-mid);border-radius:1px;overflow:hidden;width:100%;max-width:400px}
.progress-bar{height:100%;background:var(--lime);border-radius:1px;position:relative}
.progress-bar::after{content:'';position:absolute;right:0;top:-2px;width:6px;height:6px;background:var(--lime);border-radius:50%}

/* TAGS */
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.pill{display:inline-flex;align-items:center;padding:4px 12px;border-radius:var(--r1);font-size:11.5px;font-weight:600;font-family:var(--mono);border:1px solid;letter-spacing:.2px}
.pill-lime  {background:var(--lime-dim);  color:var(--lime);  border-color:var(--lime-border)}
.pill-sky   {background:var(--sky-dim);   color:var(--sky);   border-color:var(--sky-border)}
.pill-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.pill-amber {background:var(--amber-dim); color:var(--amber); border-color:var(--amber-border)}
.pill-red   {background:var(--red-dim);   color:var(--red);   border-color:var(--red-border)}

/* DIVIDER */
.divider{border:none;border-top:1px solid var(--bd);margin:32px 0}

/* SECTION LABEL */
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}

/* STAT GRID */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s;cursor:default}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.lime  {background:var(--lime-dim);  color:var(--lime)}
.stat-icon.sky   {background:var(--sky-dim);   color:var(--sky)}
.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}
.stat-icon.amber {background:var(--amber-dim); color:var(--amber)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}

/* CONCEPTS */
.concepts{border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px}
.concept-row{display:grid;grid-template-columns:minmax(170px,36%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.concept-row:last-child{border-bottom:none}
.concept-row:nth-child(even){background:rgba(255,255,255,.015)}
.concept-row:hover{background:var(--bg-hover)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:12px;font-weight:500;border-right:1px solid var(--bd);position:relative;padding-left:18px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.lime  {color:var(--lime)}  .ck.lime::before  {background:var(--lime)}
.ck.sky   {color:var(--sky)}   .ck.sky::before   {background:var(--sky)}
.ck.violet{color:var(--violet)}.ck.violet::before{background:var(--violet)}
.ck.amber {color:var(--amber)} .ck.amber::before {background:var(--amber)}
.ck.red   {color:var(--red)}   .ck.red::before   {background:var(--red)}
.ck.green {color:var(--green)} .ck.green::before {background:var(--green)}
.cv{padding:11px 16px;font-size:13px;color:var(--t2);line-height:1.6}
.cv code{font-family:var(--mono);font-size:11.5px;background:var(--bg-input);padding:1px 6px;border-radius:var(--r1);color:var(--lime)}

/* PROSE */
.prose{font-size:14.5px;line-height:1.85;color:rgba(232,237,245,.82);margin-bottom:16px}
.prose b,.prose strong{color:var(--t1);font-weight:600}
.prose em{color:var(--sky);font-style:normal}

/* GRAMMAR BLOCK */
.gram{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.gram-head{display:flex;align-items:center;gap:12px;padding:14px 20px;border-bottom:1px solid var(--bd);background:var(--bg-surface)}
.gram-badge{font-family:var(--mono);font-size:11px;font-weight:500;padding:4px 10px;border-radius:var(--r1);border:1px solid}
.gram-badge.ps{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.gram-badge.pc{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.gram-title{font-size:15px;font-weight:600;color:var(--t1)}
.gram-sub{font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:1px}
.gram-body{padding:20px 22px}

/* FORMULA */
.formula{background:var(--bg-input);border:1px solid var(--bd-mid);border-left:3px solid var(--lime);border-radius:0 var(--r2) var(--r2) 0;padding:12px 16px;margin:12px 0;font-family:var(--mono);font-size:13px;line-height:2}
.formula.pc{border-left-color:var(--violet);display:block;overflow:visible;flex-direction:initial}
.formula .lbl{color:var(--t1);font-weight:500}
.formula .sub{color:var(--t3)}
.formula .val{color:var(--lime)}
.formula.pc .val{color:var(--violet)}
.formula .kw{color:var(--amber)}

/* EXAMPLES */
.exs{margin:14px 0 20px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-en{font-size:14px;color:var(--t1);line-height:1.5}
.ex-en b{color:var(--lime);font-weight:600}
.ex-en b.pc{color:var(--violet);display:inline;padding:0;border:none;background:transparent;position:static;overflow:visible}
.ex-arr{color:var(--t3);font-size:12px;padding-top:2px}
.ex-hr{font-size:12.5px;color:var(--t2);line-height:1.5;font-family:var(--mono)}

/* COMPARE */
.compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 24px}
.cmp-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden}
.cmp-head{padding:10px 14px;font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-head.ps{background:var(--lime-dim);color:var(--lime);border-bottom-color:var(--lime-border)}
.cmp-head.pc{background:var(--violet-dim);color:var(--violet);border-bottom-color:var(--violet-border)}
.cmp-body{padding:12px 14px}
.cmp-row{font-size:12.5px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.5}
.cmp-row:last-child{border-bottom:none}
.cmp-row b{color:var(--t1);display:block;font-size:12px;margin-bottom:1px}

/* SIGNAL WORDS */
.signal-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 22px}
.sig-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px}
.sig-head{font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.sig-head.ps{color:var(--lime)}
.sig-head.pc{color:var(--violet)}
.chips{display:flex;flex-wrap:wrap;gap:5px}
.chip{font-family:var(--mono);font-size:11.5px;padding:3px 9px;border-radius:var(--r1);border:1px solid;transition:all .12s;cursor:default}
.chip:hover{transform:translateY(-1px)}
.chip.ps{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.chip.pc{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}

/* CALLOUT */
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn  {background:var(--red-dim);   border-color:var(--red-border)}
.callout-tip   {background:var(--amber-dim); border-color:var(--amber-border)}
.callout-info  {background:var(--sky-dim);   border-color:var(--sky-border)}
.callout-purple{background:var(--violet-dim);border-color:var(--violet-border)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}
.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn   .callout-title{color:var(--red)}
.callout-tip    .callout-title{color:var(--amber)}
.callout-info   .callout-title{color:var(--sky)}
.callout-purple .callout-title{color:var(--violet)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}

/* TABLE */
.tbl-wrap{overflow-x:auto;margin:14px 0 22px;border:1px solid var(--bd-mid);border-radius:var(--r3)}
table{width:100%;border-collapse:collapse;font-size:13px}
th{padding:10px 14px;background:var(--bg-surface);color:var(--t3);font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bd-mid);white-space:nowrap}
td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);line-height:1.55;vertical-align:top}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(255,255,255,.015)}
tr:hover td{background:var(--bg-hover)}
td code{font-family:var(--mono);font-size:11.5px;background:var(--bg-input);padding:1px 5px;border-radius:var(--r1);color:var(--lime)}
td b{color:var(--t1)}

/* SUB LABEL */
.sub-label{font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:1.5px;color:var(--sky);text-transform:uppercase;margin:22px 0 10px}

/* QUIZ */
.quiz-intro{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;font-size:13px;color:var(--t2);margin-bottom:22px;font-family:var(--mono);line-height:1.65}
.quiz-intro strong{color:var(--lime)}
.q-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px;transition:border-color .15s}
.q-head{padding:14px 18px;border-bottom:1px solid var(--bd)}
.q-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:500;letter-spacing:.5px;margin-bottom:6px;text-transform:uppercase}
.q-text{font-size:14.5px;font-weight:600;color:var(--t1);line-height:1.5;letter-spacing:-0.1px}
.q-opts{padding:12px 18px;display:flex;flex-direction:column;gap:6px}
.q-opt{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13.5px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none;font-family:var(--mono)}
.q-opt:hover:not(.disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.q-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}
.q-opt.wrong  {background:var(--red-dim);  border-color:var(--red-border);  color:var(--red)}
.q-opt.disabled{cursor:default;pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
.expl-no{background:var(--red-dim);  border:1px solid var(--red-border);  color:var(--red);  padding:10px 14px;border-radius:var(--r2)}
.score-box{display:none;text-align:center;padding:36px 24px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);margin-top:16px}
.score-box.show{display:block}
.score-num{font-size:56px;font-weight:700;color:var(--lime);letter-spacing:-3px;font-family:var(--mono)}
.score-lbl{font-size:13.5px;color:var(--t2);margin-top:8px}

/* FILL IN BLANK */
.fitb{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:10px}
.fitb-head{padding:12px 18px;border-bottom:1px solid var(--bd)}
.fitb-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase;margin-bottom:5px}
.fitb-sent{font-size:14.5px;font-weight:600;color:var(--t1);letter-spacing:-0.1px}
.fitb-row{padding:12px 18px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.fitb-in{font-family:var(--mono);font-size:13px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);color:var(--t1);padding:8px 12px;outline:none;width:190px;transition:border-color .15s}
.fitb-in:focus{border-color:var(--lime)}
.fitb-in.ok  {border-color:var(--green);background:var(--green-dim);color:var(--green)}
.fitb-in.fail{border-color:var(--red);  background:var(--red-dim);  color:var(--red)}
.fitb-btn{padding:8px 16px;background:var(--lime);color:#080B10;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;white-space:nowrap}
.fitb-btn:hover{opacity:.88}
.fitb-btn:disabled{opacity:.35;cursor:default}
.fitb-fb{display:none;padding:10px 18px;font-family:var(--mono);font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd)}
.fitb-fb.show{display:block}
.fitb-fb.ok  {color:var(--green);background:var(--green-dim)}
.fitb-fb.fail{color:var(--red);  background:var(--red-dim)}

/* CTA */
.cta{background:var(--bg-card);border:1px solid var(--lime-border);border-radius:var(--r4);padding:24px 28px;margin:28px 0;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;position:relative;overflow:hidden}
.cta::before{content:'';position:absolute;inset:0;background:var(--lime-glow);pointer-events:none}
.cta-eye{font-family:var(--mono);font-size:9.5px;color:var(--lime);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px}
.cta-title{font-size:17px;font-weight:700;color:var(--t1);margin-bottom:4px;letter-spacing:-0.3px}
.cta-sub{font-size:12.5px;color:var(--t2)}
.cta-btn{padding:10px 20px;background:var(--lime);color:#080B10;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:13px;font-weight:700;cursor:pointer;transition:all .15s;flex-shrink:0;white-space:nowrap;text-decoration:none;display:inline-flex}
.cta-btn:hover{opacity:.88;transform:translateY(-1px)}

/* MATURA */
.matura{border:1px solid var(--amber-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.matura-hd{background:var(--amber);padding:9px 18px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:2px;color:#080B10;text-transform:uppercase}
.matura-list{list-style:none;padding:12px 18px}
.m-item{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:rgba(232,237,245,.8);padding:7px 0;border-bottom:1px solid rgba(251,183,36,.10);line-height:1.6}
.m-item:last-child{border-bottom:none}
.m-dot{width:5px;height:5px;background:var(--amber);border-radius:1px;flex-shrink:0;margin-top:6px;transform:rotate(45deg)}
.m-item b{color:var(--t1)}

/* NAV */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:36px;padding-top:20px;border-top:1px solid var(--bd)}
.nav-btn{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:12.5px;color:var(--t2);cursor:pointer;padding:8px 14px;border:1px solid var(--bd-mid);border-radius:var(--r2);background:transparent;transition:all .15s}
.nav-btn:hover{color:var(--t1);background:var(--bg-card);border-color:var(--bd-light)}
.nav-btn.primary{background:var(--lime);color:#080B10;border-color:var(--lime);font-weight:700}
.nav-btn.primary:hover{opacity:.88}
.nav-btn.disabled{opacity:.25;pointer-events:none}

@media(max-width:900px){.content-wrap{padding:28px 24px 80px}}
@media(max-width:720px){.sidebar{display:none}.content-wrap{padding:22px 16px 80px}.hero{padding:22px 22px}.hero-title{font-size:22px}.compare,.signal-grid{grid-template-columns:1fr}.stat-grid{grid-template-columns:1fr 1fr}.concept-row{grid-template-columns:1fr}.ck{border-right:none;border-bottom:1px solid var(--bd)}.cta{flex-direction:column}.tabs-wrap{width:100%}.tab{flex:1;text-align:center;font-size:11.5px;padding:8px 10px}}
@media(max-width:480px){.stat-grid{grid-template-columns:1fr}.ex{grid-template-columns:1fr}.ex-arr{display:none}}

/* REVEAL / CLICK-REVEAL */
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .28s ease,padding .28s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:300px;padding:12px 16px;border-top-color:var(--bd)}
.reveal-ans b,.reveal-ans strong{color:var(--t1)}
.reveal-ans .ok{color:var(--green)}
.reveal-ans .bad{color:var(--red)}

/* PANIC BOX */
.panic-box{background:linear-gradient(135deg,rgba(248,113,113,.06),rgba(251,183,36,.06));border:1px solid var(--amber-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.panic-hd{background:var(--amber);padding:10px 20px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:#080B10;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.panic-body{padding:18px 20px}
.panic-step{display:flex;align-items:flex-start;gap:14px;padding:9px 0;border-bottom:1px solid rgba(251,183,36,.10)}
.panic-step:last-child{border-bottom:none}
.panic-num{width:24px;height:24px;border-radius:50%;background:var(--amber);color:#080B10;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.panic-text{font-size:13px;color:rgba(232,237,245,.85);line-height:1.6}
.panic-text b{color:var(--t1)}

/* DECISION TREE */
.dtree{margin:18px 0 26px}
.dt-node{border-radius:var(--r3);border:1px solid;padding:13px 16px;margin-bottom:6px;font-size:13.5px;font-weight:600;line-height:1.4}
.dt-node.question{background:var(--bg-card);border-color:var(--bd-mid);color:var(--t1)}
.dt-node.yes-ps{background:var(--lime-dim);border-color:var(--lime-border);color:var(--lime)}
.dt-node.yes-pc{background:var(--violet-dim);border-color:var(--violet-border);color:var(--violet)}
.dt-node.note{background:var(--sky-dim);border-color:var(--sky-border);color:var(--sky);font-size:12px;font-weight:500;font-family:var(--mono)}
.dt-row{display:flex;align-items:stretch;gap:6px;margin-bottom:6px}
.dt-branch{flex:1}
.dt-connector{font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;padding:5px 4px;white-space:nowrap;align-self:center}
.dt-indent{padding-left:22px;border-left:2px solid var(--bd-mid);margin-left:6px;margin-bottom:6px}

/* SPEED DRILL */
.speed-drill-wrap{margin:18px 0}
.sd-intro{font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2)}
.sd-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:18px 20px;margin-bottom:14px}
.sd-sent{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:14px;letter-spacing:-0.1px;line-height:1.4}
.sd-btns{display:flex;gap:10px;flex-wrap:wrap}
.sd-btn{padding:10px 22px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s;user-select:none}
.sd-btn.ps{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.sd-btn.pc{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.sd-btn:hover:not(.picked){opacity:.75;transform:translateY(-1px)}
.sd-btn.correct-pick{background:var(--green);color:#080B10;border-color:var(--green);pointer-events:none}
.sd-btn.wrong-pick{background:var(--red-dim);color:var(--red);border-color:var(--red-border);pointer-events:none}
.sd-btn.reveal-correct{background:var(--green-dim);color:var(--green);border-color:var(--green-border);pointer-events:none}
.sd-fb{display:none;margin-top:10px;font-family:var(--mono);font-size:12px;line-height:1.6;padding:9px 12px;border-radius:var(--r2)}
.sd-fb.show{display:block}
.sd-fb.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.sd-fb.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.sd-progress{display:flex;gap:5px;margin-bottom:16px;flex-wrap:wrap}
.sd-dot{width:10px;height:10px;border-radius:2px;background:var(--bg-elevated);border:1px solid var(--bd-mid);transition:all .2s}
.sd-dot.ok{background:var(--green);border-color:var(--green)}
.sd-dot.no{background:var(--red);border-color:var(--red)}
.sd-dot.cur{border-color:var(--lime);background:var(--lime-dim)}
.sd-score{text-align:center;padding:28px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);display:none}
.sd-score.show{display:block}
.sd-score-num{font-size:48px;font-weight:700;color:var(--lime);font-family:var(--mono);letter-spacing:-2px}
.sd-score-lbl{font-size:13px;color:var(--t2);margin-top:6px}
.sd-retry{margin-top:14px;padding:9px 20px;background:var(--lime);color:#080B10;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer}

/* ERROR CORRECTION DRILL */
.err-drill{margin:18px 0}
.err-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:10px}
.err-sent{padding:14px 18px;font-size:15px;font-weight:600;color:var(--red);letter-spacing:-0.1px;border-bottom:1px solid var(--bd)}
.err-btn{display:block;width:100%;text-align:left;padding:11px 18px;font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t3);background:transparent;border:none;cursor:pointer;transition:color .12s;letter-spacing:.3px}
.err-btn:hover{color:var(--amber)}
.err-fix{display:none;padding:12px 18px;font-family:var(--mono);font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);background:var(--bg-surface)}
.err-fix.show{display:block}
.err-fix .correct{color:var(--green);font-weight:600}
.err-fix .explain{color:var(--t2);font-size:12px;margin-top:4px;display:block}

/* MATURA RADAR */
.radar{border:1px solid var(--sky-border);border-radius:var(--r4);overflow:hidden;margin:22px 0}
.radar-hd{background:var(--sky-dim);border-bottom:1px solid var(--sky-border);padding:10px 18px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--sky);text-transform:uppercase}
.radar-body{padding:6px 0}
.radar-item{display:flex;align-items:flex-start;gap:12px;padding:11px 18px;border-bottom:1px solid var(--bd)}
.radar-item:last-child{border-bottom:none}
.radar-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;padding:3px 8px;border-radius:var(--r1);flex-shrink:0;margin-top:1px;letter-spacing:.5px;text-transform:uppercase}
.rb-trap{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.rb-where{background:var(--sky-dim);color:var(--sky);border:1px solid var(--sky-border)}
.radar-text{font-size:13px;color:var(--t2);line-height:1.6}
.radar-text b{color:var(--t1)}
.radar-text em{color:var(--violet);font-style:normal}

/* STATE VERB MINI DRILL */
.sv-drill{margin:16px 0}
.sv-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-bottom:8px}
.sv-sent{font-size:14px;font-weight:600;color:var(--t1);margin-bottom:12px}
.sv-opts{display:flex;gap:8px;flex-wrap:wrap}
.sv-opt{padding:8px 18px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:600;cursor:pointer;border:1px solid var(--bd-mid);background:var(--bg-input);color:var(--t2);transition:all .12s}
.sv-opt:hover:not(.sv-picked){background:var(--bg-hover);color:var(--t1)}
.sv-opt.sv-correct{background:var(--green-dim);color:var(--green);border-color:var(--green-border);pointer-events:none}
.sv-opt.sv-wrong{background:var(--red-dim);color:var(--red);border-color:var(--red-border);pointer-events:none}
.sv-opt.sv-reveal{background:var(--green-dim);color:var(--green);border-color:var(--green-border);pointer-events:none}
.sv-fb{display:none;margin-top:8px;font-family:var(--mono);font-size:12px;line-height:1.6;padding:8px 12px;border-radius:var(--r2)}
.sv-fb.show{display:block}
.sv-fb.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.sv-fb.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}

/* QUICK EXAM SUMMARY */
.qes{margin:18px 0}
.qes-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-bottom:8px}
.qes-tag{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px}
.qes-tag.gap{color:var(--lime)}
.qes-tag.mcq{color:var(--violet)}
.qes-tag.err{color:var(--red)}
.qes-steps{font-size:13px;color:var(--t2);line-height:2;font-family:var(--mono)}
.qes-steps b{color:var(--t1)}

/* TAB PROGRESS ROW */
.tab-progress-row{display:flex;align-items:center;gap:6px;margin:8px 0 28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);transition:color .15s;cursor:pointer;padding:4px 0}
.tab-prog-item:hover{color:var(--t2)}
.tab-prog-item.active{color:var(--lime)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:7px;height:7px;border-radius:50%;background:currentColor;flex-shrink:0;transition:background .15s}
.tp-lbl{}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.4}

/* COPY BUTTON ON FORMULAS */
.formula-wrap{position:relative}
.formula-wrap .copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula-wrap:hover .copy-btn{opacity:1}
.formula-wrap .copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.formula-wrap .copy-btn.copied{color:var(--green);border-color:var(--green-border);opacity:1}

/* SV DRILL SCORE */
.sv-score{display:none;text-align:center;padding:20px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);margin-top:12px}
.sv-score.show{display:block}
.sv-score-num{font-size:36px;font-weight:700;color:var(--lime);font-family:var(--mono);letter-spacing:-2px}
.sv-score-lbl{font-size:12.5px;color:var(--t2);margin-top:4px}

/* KEYBOARD HINT */
.kbd-hint{font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.kbd{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:20px;padding:0 5px;background:var(--bg-elevated);border:1px solid var(--bd-mid);border-bottom:2px solid var(--bd-light);border-radius:3px;font-size:10px;font-weight:600;color:var(--t2);font-family:var(--mono)}

@media(max-width:560px){.tab-progress-row{display:none}}

/* MOBILE HAMBURGER + DRAWER */
.hamburger{display:none;position:fixed;bottom:22px;right:22px;z-index:300;width:50px;height:50px;background:var(--lime);border-radius:50%;border:none;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(155,247,58,.35);transition:transform .15s}
.hamburger:hover{transform:scale(1.08)}
.hamburger svg{width:20px;height:20px}
.mob-drawer{display:none;position:fixed;inset:0;z-index:250;background:rgba(8,11,16,.95);backdrop-filter:blur(8px);flex-direction:column;padding:28px 24px;overflow-y:auto}
.mob-drawer.open{display:flex}
.mob-drawer-close{align-self:flex-end;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 18px;font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;margin-bottom:20px}
.mob-drawer .sb-label{padding:14px 0 5px}
.mob-drawer .sb-item{padding:10px 0;border-left:none;border-bottom:1px solid var(--bd)}
@media(max-width:720px){.hamburger{display:flex}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}

/* AMBER DT-NODE (irregular verbs decision tree) */
.dt-node.yes-amber{background:var(--amber-dim);border-color:var(--amber-border);color:var(--amber)}
/* EXTRA CHIP COLORS */
.chip.amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.chip.red{background:var(--red-dim);color:var(--red);border-color:var(--red-border)}
/* FORMULA COPY BTN */
.formula{position:relative}
.copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula:hover .copy-btn{opacity:1}
.copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.copy-btn.copied{color:var(--green)!important;border-color:var(--green-border)!important;opacity:1!important}


/* CHAPTER 02 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px;margin-bottom:12px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.progress-bar::after{box-shadow:0 0 6px var(--lime)}
.hero-sub{margin-bottom:16px}
.nav-btn{text-decoration:none}
.sd-btn.ps{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.sd-btn.pc{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border);display:revert;padding:revert;border-radius:revert;position:revert;overflow:revert;transition:revert}
.sd-btn{flex:1;text-align:center}
@media(max-width:480px){.sd-btns{flex-direction:column}.sd-btn{flex:none}}

/* CHAPTER 03 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.progress-bar::after{box-shadow:0 0 6px var(--lime)}
.hero-sub{margin-bottom:16px}
.nav-btn{text-decoration:none}
.sd-btn.ps{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.sd-btn.pp{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.sd-btn{flex:1;text-align:center}
.dt-node.yes-amber{background:var(--amber-dim);border-color:var(--amber-border);color:var(--amber)}
.formula{position:relative}
.copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula:hover .copy-btn{opacity:1}
.copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.copy-btn.copied{color:var(--green)!important;border-color:var(--green-border)!important;opacity:1!important}
@media(max-width:480px){.sd-btns{flex-direction:column}.sd-btn{flex:none}}


/* CHAPTER 04 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.progress-bar::after{box-shadow:0 0 6px var(--lime)}
.hero-sub{margin-bottom:16px}
.nav-btn{text-decoration:none}
.sd-btn.will{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.sd-btn.going{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.sd-btn{flex:1;text-align:center}
.dt-node.yes-amber{background:var(--amber-dim);border-color:var(--amber-border);color:var(--amber)}
.formula{position:relative}
.copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula:hover .copy-btn{opacity:1}
.copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.copy-btn.copied{color:var(--green)!important;border-color:var(--green-border)!important;opacity:1!important}
.gram-badge.will{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.gram-badge.going{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.cmp-head.will{background:var(--sky-dim);color:var(--sky);border-bottom-color:var(--sky-border)}
.cmp-head.going{background:var(--violet-dim);color:var(--violet);border-bottom-color:var(--violet-border)}
.ex-en b.will{color:var(--sky)}
.ex-en b.going{color:var(--violet)}
.sig-head.will{color:var(--sky)}
.sig-head.going{color:var(--violet)}
.chip.will{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.chip.going{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
@media(max-width:480px){.sd-btns{flex-direction:column}.sd-btn{flex:none}.sv-opts{flex-direction:column}}


/* CHAPTER 05 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.progress-bar::after{box-shadow:0 0 6px var(--lime)}
.hero-sub{margin-bottom:16px}
.nav-btn{text-decoration:none}
.formula{position:relative}
.copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula:hover .copy-btn{opacity:1}
.copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.copy-btn.copied{color:var(--green)!important;border-color:var(--green-border)!important;opacity:1!important}
.modal-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:16px 0 24px}
.modal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s}
.modal-card:hover{border-color:var(--bd-light)}
.modal-name{font-family:var(--mono);font-size:16px;font-weight:700;color:var(--lime);margin-bottom:6px}
.modal-meaning{font-size:12px;font-weight:600;color:var(--t2);margin-bottom:8px;text-transform:uppercase;letter-spacing:.8px;font-family:var(--mono)}
.modal-ex{font-size:13px;color:var(--t1);line-height:1.5;font-style:italic}
.modal-ex span{color:var(--lime);font-style:normal;font-weight:600}
.modal-neg{font-size:11.5px;color:var(--red);margin-top:6px;font-family:var(--mono)}
.modal-card.sky .modal-name{color:var(--sky)}
.modal-card.sky .modal-ex span{color:var(--sky)}
.modal-card.violet .modal-name{color:var(--violet)}
.modal-card.violet .modal-ex span{color:var(--violet)}
.modal-card.amber .modal-name{color:var(--amber)}
.modal-card.amber .modal-ex span{color:var(--amber)}
.modal-card.red .modal-name{color:var(--red)}
.modal-card.red .modal-ex span{color:var(--red)}
.modal-card.green .modal-name{color:var(--green)}
.modal-card.green .modal-ex span{color:var(--green)}
.modal-full{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.modal-full-head{display:flex;align-items:center;gap:12px;padding:14px 20px;border-bottom:1px solid var(--bd);background:var(--bg-surface)}
.modal-full-badge{font-family:var(--mono);font-size:13px;font-weight:700;padding:5px 12px;border-radius:var(--r2);border:1px solid}
.modal-full-body{padding:18px 22px}
.modal-row{display:grid;grid-template-columns:minmax(140px,30%) 1fr;gap:0;border-bottom:1px solid var(--bd)}
.modal-row:last-child{border-bottom:none}
.modal-lbl{padding:10px 14px;font-family:var(--mono);font-size:11px;font-weight:600;color:var(--t3);letter-spacing:.8px;text-transform:uppercase;border-right:1px solid var(--bd);background:rgba(255,255,255,.015)}
.modal-val{padding:10px 16px;font-size:13px;color:var(--t2);line-height:1.6}
.modal-val b{color:var(--t1)}
.modal-val em{color:var(--sky);font-style:normal}
.strength-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:16px 0}
.str-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;text-align:center}
.str-label{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px}
.str-label.must{color:var(--red)}
.str-label.should{color:var(--amber)}
.str-label.may{color:var(--violet)}
.str-modals{display:flex;flex-wrap:wrap;gap:5px;justify-content:center}
.str-pill{font-family:var(--mono);font-size:11px;font-weight:600;padding:3px 8px;border-radius:var(--r1);border:1px solid}
.str-pill.must{background:var(--red-dim);color:var(--red);border-color:var(--red-border)}
.str-pill.should{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.str-pill.may{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
@media(max-width:720px){.modal-grid{grid-template-columns:1fr 1fr}.strength-grid{grid-template-columns:1fr}}
@media(max-width:480px){.modal-grid{grid-template-columns:1fr}.modal-row{grid-template-columns:1fr}.modal-lbl{border-right:none;border-bottom:1px solid var(--bd)}}


/* CHAPTER 06 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.progress-bar::after{box-shadow:0 0 6px var(--lime)}
.hero-sub{margin-bottom:16px}
.nav-btn{text-decoration:none}
.formula{position:relative}
.copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula:hover .copy-btn{opacity:1}
.copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.copy-btn.copied{color:var(--green)!important;border-color:var(--green-border)!important;opacity:1!important}
.cond-block{background:var(--bg-card);border-radius:var(--r4);overflow:hidden;margin:20px 0;border:1px solid var(--bd-mid)}
.cond-head{padding:14px 20px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:12px}
.cond-num{font-family:var(--mono);font-size:22px;font-weight:700;flex-shrink:0}
.cond-num.c0{color:var(--sky)}
.cond-num.c1{color:var(--lime)}
.cond-num.c2{color:var(--violet)}
.cond-title{font-size:15px;font-weight:600;color:var(--t1)}
.cond-sub{font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:2px}
.cond-body{padding:20px 22px}
.cond-formula{background:var(--bg-input);border-radius:var(--r2);padding:14px 16px;font-family:var(--mono);font-size:13px;line-height:2;margin:10px 0;position:relative}
.cond-formula.c0{border-left:3px solid var(--sky)}
.cond-formula.c1{border-left:3px solid var(--lime)}
.cond-formula.c2{border-left:3px solid var(--violet)}
.cond-formula .if-part{color:var(--sky)}
.cond-formula.c1 .if-part{color:var(--lime)}
.cond-formula.c2 .if-part{color:var(--violet)}
.cond-formula .then-part{color:var(--amber)}
.cond-ex{font-size:14px;color:var(--t1);padding:8px 0;border-bottom:1px solid var(--bd);display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start}
.cond-ex:last-child{border-bottom:none}
.cond-ex-en b.c0{color:var(--sky)}
.cond-ex-en b.c1{color:var(--lime)}
.cond-ex-en b.c2{color:var(--violet)}
.cond-tag{font-family:var(--mono);font-size:10px;padding:2px 7px;border-radius:var(--r1);white-space:nowrap;align-self:center}
.cond-tag.c0{background:var(--sky-dim);color:var(--sky);border:1px solid var(--sky-border)}
.cond-tag.c1{background:var(--lime-dim);color:var(--lime);border:1px solid var(--lime-border)}
.cond-tag.c2{background:var(--violet-dim);color:var(--violet);border:1px solid var(--violet-border)}
.cond-note{font-size:12.5px;color:var(--t2);line-height:1.6;margin-top:12px;padding:10px 14px;background:var(--bg-surface);border-radius:var(--r2);border:1px solid var(--bd)}
.unless-box{background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r3);padding:14px 18px;margin:14px 0}
.unless-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase;margin-bottom:8px}
.unless-body{font-size:13px;color:var(--t2);line-height:1.7}
.cond-compare{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:16px 0}
.cc-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px}
.cc-head{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid var(--bd)}
.cc-head.c0{color:var(--sky)}
.cc-head.c1{color:var(--lime)}
.cc-head.c2{color:var(--violet)}
.cc-row{font-size:12px;color:var(--t2);padding:5px 0;border-bottom:1px solid var(--bd);line-height:1.5}
.cc-row:last-child{border-bottom:none}
.cc-row b{color:var(--t1);display:block;font-size:11px;margin-bottom:1px;font-family:var(--mono)}
@media(max-width:720px){.cond-compare{grid-template-columns:1fr}.cond-ex{grid-template-columns:1fr}}
@media(max-width:480px){.cond-head{flex-direction:column;align-items:flex-start}}


/* CHAPTER 07 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.progress-bar::after{box-shadow:0 0 6px var(--lime)}
.hero-sub{margin-bottom:16px}
.nav-btn{text-decoration:none}
.formula{position:relative}
.copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula:hover .copy-btn{opacity:1}
.copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.copy-btn.copied{color:var(--green)!important;border-color:var(--green-border)!important;opacity:1!important}
.pass-tbl{width:100%;border-collapse:collapse;margin:14px 0 22px}
.pass-tbl th{padding:9px 14px;background:var(--bg-surface);color:var(--t3);font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bd-mid);white-space:nowrap}
.pass-tbl td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);font-size:13px;line-height:1.5;vertical-align:top}
.pass-tbl tr:last-child td{border-bottom:none}
.pass-tbl tr:hover td{background:var(--bg-hover)}
.pass-tbl .tense{font-family:var(--mono);font-size:11px;color:var(--sky);font-weight:600}
.pass-tbl .active-ex{color:var(--t2)}
.pass-tbl .passive-ex{color:var(--violet);font-weight:500}
.pass-tbl .formula-cell{font-family:var(--mono);font-size:11.5px;color:var(--lime)}
.transform-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:10px}
.tc-head{padding:10px 16px;border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:9.5px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:var(--t3)}
.tc-body{padding:14px 18px;display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center}
.tc-active{font-size:14px;color:var(--t1);line-height:1.5}
.tc-active b{color:var(--lime)}
.tc-passive{font-size:14px;color:var(--violet);line-height:1.5}
.tc-passive b{color:var(--violet)}
.tc-arr{font-size:20px;color:var(--t3);text-align:center}
.tc-note{padding:8px 18px;font-family:var(--mono);font-size:11.5px;color:var(--t3);background:var(--bg-surface);border-top:1px solid var(--bd)}
.by-agent{color:var(--amber);font-weight:600}
@media(max-width:600px){.tc-body{grid-template-columns:1fr}.tc-arr{display:none}}


/* CHAPTER 08 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.progress-bar::after{box-shadow:0 0 6px var(--lime)}
.hero-sub{margin-bottom:16px}
.nav-btn{text-decoration:none}
.formula{position:relative}
.copy-btn{position:absolute;top:8px;right:8px;padding:3px 10px;font-family:var(--mono);font-size:10px;font-weight:600;background:var(--bg-hover);border:1px solid var(--bd-mid);border-radius:var(--r1);color:var(--t3);cursor:pointer;transition:all .15s;opacity:0}
.formula:hover .copy-btn{opacity:1}
.copy-btn:hover{color:var(--lime);border-color:var(--lime-border)}
.copy-btn.copied{color:var(--green)!important;border-color:var(--green-border)!important;opacity:1!important}
/* VOCAB SPECIFIC */
.vocab-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin:16px 0 24px}
.vocab-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;cursor:pointer;transition:all .15s}
.vocab-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.vc-topic{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:8px 12px 0;color:var(--t3)}
.vc-word{font-size:15px;font-weight:700;color:var(--t1);padding:4px 12px 2px;letter-spacing:-0.2px}
.vc-trans{font-size:12px;color:var(--t2);padding:0 12px;font-family:var(--mono)}
.vc-ex{font-size:12px;color:var(--t3);padding:6px 12px 10px;line-height:1.5;border-top:1px solid var(--bd);margin-top:6px;font-style:italic}
.vc-revealed .vc-ex{color:var(--sky)}
.topic-section{margin:28px 0}
.topic-hd{display:flex;align-items:center;gap:10px;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.topic-icon{width:32px;height:32px;border-radius:var(--r2);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.topic-title{font-size:15px;font-weight:700;color:var(--t1)}
.topic-count{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto}
.match-game{margin:20px 0}
.match-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}
.match-en{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:10px 14px;font-size:13px;font-weight:600;color:var(--t1);cursor:pointer;transition:all .12s;text-align:center;user-select:none}
.match-hr{background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:10px 14px;font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;text-align:center;font-family:var(--mono);user-select:none}
.match-en:hover,.match-hr:hover{border-color:var(--bd-light);color:var(--t1)}
.match-en.selected{border-color:var(--lime);background:var(--lime-dim);color:var(--lime)}
.match-hr.selected{border-color:var(--violet);background:var(--violet-dim);color:var(--violet)}
.match-en.correct,.match-hr.correct{border-color:var(--green);background:var(--green-dim);color:var(--green);pointer-events:none}
.match-en.wrong,.match-hr.wrong{border-color:var(--red);background:var(--red-dim);color:var(--red)}
.collocations{margin:16px 0}
.colloc-row{display:flex;align-items:baseline;gap:10px;padding:8px 0;border-bottom:1px solid var(--bd)}
.colloc-row:last-child{border-bottom:none}
.colloc-word{font-size:14px;font-weight:700;color:var(--lime);min-width:130px;font-family:var(--mono)}
.colloc-pairs{font-size:13px;color:var(--t2);line-height:1.7}
.colloc-pairs em{color:var(--sky);font-style:normal}
@media(max-width:600px){.match-grid{grid-template-columns:1fr}.vocab-grid{grid-template-columns:1fr 1fr}}
@media(max-width:400px){.vocab-grid{grid-template-columns:1fr}}


/* CHAPTER 09 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.nav-btn{text-decoration:none}
/* READING SPECIFIC */
.reading-text{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);padding:22px 26px;margin:16px 0;line-height:1.85;font-size:14px;color:var(--t1);position:relative}
.reading-text p{margin:0 0 14px}
.reading-text p:last-child{margin:0}
.reading-title{font-size:16px;font-weight:700;color:var(--t1);margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--bd)}
.reading-meta{font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:16px;display:flex;gap:16px;flex-wrap:wrap}
.reading-meta span{display:flex;align-items:center;gap:5px}
.hl{background:var(--lime-dim);color:var(--lime);border-radius:2px;padding:0 3px;font-weight:600}
.hl-sky{background:var(--sky-dim);color:var(--sky);border-radius:2px;padding:0 3px;font-weight:600}
.hl-violet{background:var(--violet-dim);color:var(--violet);border-radius:2px;padding:0 3px;font-weight:600}
.hl-amber{background:var(--amber-dim);color:var(--amber);border-radius:2px;padding:0 3px;font-weight:600}
.strategy-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 18px;margin-bottom:10px;transition:border-color .15s}
.strategy-card:hover{border-color:var(--bd-light)}
.sc-head{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.sc-num{width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:12px;font-weight:700;flex-shrink:0}
.sc-title{font-size:14px;font-weight:600;color:var(--t1)}
.sc-body{font-size:13px;color:var(--t2);line-height:1.6;padding-left:38px}
.sc-tip{font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:6px;padding-left:38px}
.q-type-badge{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9.5px;font-weight:700;padding:3px 9px;border-radius:var(--r1);border:1px solid;margin-bottom:10px}
.qtb-mcq{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.qtb-tf{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.qtb-match{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.qtb-gap{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.reading-q-block{background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;margin-bottom:10px}
.rq-text{font-size:13.5px;color:var(--t1);margin-bottom:10px;line-height:1.5}
.rq-opts{display:flex;flex-direction:column;gap:6px}
.rq-opt{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:9px 14px;font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;display:flex;align-items:center;gap:10px}
.rq-opt:hover{border-color:var(--bd-light);color:var(--t1)}
.rq-opt.correct{border-color:var(--green);background:var(--green-dim);color:var(--green)}
.rq-opt.wrong{border-color:var(--red);background:var(--red-dim);color:var(--red)}
.rq-opt.disabled{pointer-events:none}
.rq-letter{width:20px;height:20px;border-radius:4px;background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);flex-shrink:0}
.tf-opts{display:flex;gap:8px;margin-top:8px}
.tf-btn{flex:1;padding:9px;border:1px solid var(--bd-mid);border-radius:var(--r2);background:var(--bg-card);font-family:var(--mono);font-size:12px;font-weight:700;color:var(--t2);cursor:pointer;text-align:center;transition:all .12s}
.tf-btn:hover{border-color:var(--bd-light);color:var(--t1)}
.tf-btn.correct{border-color:var(--green);background:var(--green-dim);color:var(--green)}
.tf-btn.wrong{border-color:var(--red);background:var(--red-dim);color:var(--red)}
.tf-btn.disabled{pointer-events:none}
.rq-expl{font-size:12px;padding:8px 12px;border-radius:var(--r2);margin-top:8px;display:none}
.rq-expl.show{display:block}
.rq-expl.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.rq-expl.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.word-type{display:inline-block;font-family:var(--mono);font-size:10px;padding:2px 7px;border-radius:var(--r1);border:1px solid;margin:2px}
.wt-n{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.wt-v{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.wt-adj{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.wt-adv{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
@media(max-width:600px){.tf-opts{flex-direction:column}.reading-text{padding:16px 16px}}


/* CHAPTER 10 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.nav-btn{text-decoration:none}
/* WRITING SPECIFIC */
.sample-text{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);padding:22px 26px;margin:16px 0;line-height:1.85;font-size:14px;color:var(--t1)}
.sample-text p{margin:0 0 12px}
.sample-text p:last-child{margin:0}
.sample-title{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd);font-family:var(--mono)}
.sample-meta{display:flex;gap:12px;margin-bottom:14px;flex-wrap:wrap}
.sm-tag{font-family:var(--mono);font-size:10px;padding:3px 9px;border-radius:var(--r1);border:1px solid}
.anno{background:var(--lime-dim);color:var(--lime);border-radius:2px;padding:0 3px;cursor:help;font-weight:600;border-bottom:1px dashed var(--lime)}
.anno-sky{background:var(--sky-dim);color:var(--sky);border-radius:2px;padding:0 3px;cursor:help;font-weight:600;border-bottom:1px dashed var(--sky)}
.anno-violet{background:var(--violet-dim);color:var(--violet);border-radius:2px;padding:0 3px;cursor:help;font-weight:600;border-bottom:1px dashed var(--violet)}
.anno-amber{background:var(--amber-dim);color:var(--amber);border-radius:2px;padding:0 3px;cursor:help;font-weight:600;border-bottom:1px dashed var(--amber)}
.anno-red{background:var(--red-dim);color:var(--red);border-radius:2px;padding:0 3px;cursor:help;font-weight:600;border-bottom:1px dashed var(--red)}
.anno-legend{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0 20px;font-size:12px}
.al-item{display:flex;align-items:center;gap:5px;color:var(--t2)}
.al-dot{width:10px;height:10px;border-radius:2px;flex-shrink:0}
.task-box{background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 20px;margin:16px 0}
.task-box-hd{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);margin-bottom:10px}
.task-box-body{font-size:13.5px;color:var(--t1);line-height:1.7}
.task-box-body b{color:var(--lime)}
.struct-row{display:grid;grid-template-columns:100px 1fr 80px;gap:0;border-bottom:1px solid var(--bd)}
.struct-row:last-child{border-bottom:none}
.struct-part{padding:10px 14px;font-family:var(--mono);font-size:11px;font-weight:600;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface);text-transform:uppercase;letter-spacing:.8px}
.struct-content{padding:10px 16px;font-size:13px;color:var(--t2);line-height:1.6}
.struct-content em{color:var(--sky);font-style:normal}
.struct-words{padding:10px 10px;font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center}
.phrase-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0}
.phrase-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:10px 14px}
.phrase-type{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--t3);margin-bottom:6px}
.phrase-list{font-size:12.5px;color:var(--t2);line-height:1.8}
.phrase-list em{color:var(--lime);font-style:italic}
.writing-q{background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-bottom:10px}
.wq-num{font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:6px}
.wq-q{font-size:13.5px;color:var(--t1);margin-bottom:10px;line-height:1.5}
.wq-opts{display:flex;flex-direction:column;gap:6px}
.wq-opt{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:9px 14px;font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;display:flex;align-items:flex-start;gap:10px}
.wq-opt:hover{border-color:var(--bd-light);color:var(--t1)}
.wq-opt.correct{border-color:var(--green);background:var(--green-dim);color:var(--green)}
.wq-opt.wrong{border-color:var(--red);background:var(--red-dim);color:var(--red)}
.wq-opt.disabled{pointer-events:none}
.wq-letter{width:20px;height:20px;border-radius:4px;background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);flex-shrink:0;margin-top:1px}
.wq-expl{font-size:12px;padding:8px 12px;border-radius:var(--r2);margin-top:8px;display:none}
.wq-expl.show{display:block}
.wq-expl.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.wq-expl.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.error-sent{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:12px 16px;font-size:13.5px;color:var(--t1);margin-bottom:8px;line-height:1.6;font-style:italic}
.error-sent .wrong-part{color:var(--red);text-decoration:underline wavy var(--red);font-style:normal}
@media(max-width:600px){.phrase-grid{grid-template-columns:1fr}.struct-row{grid-template-columns:80px 1fr 60px}}

/* CHAPTER 11 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.nav-btn{text-decoration:none}
/* LISTENING SPECIFIC */
.listen-task{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:14px 0}
.lt-head{padding:12px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px;background:var(--bg-surface)}
.lt-badge{font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 9px;border-radius:var(--r1);border:1px solid}
.lt-title{font-size:14px;font-weight:600;color:var(--t1)}
.lt-body{padding:16px 20px}
.lt-script{font-size:13.5px;color:var(--t1);line-height:1.8;border-left:3px solid var(--bd-mid);padding-left:14px;margin:10px 0;font-style:italic}
.lt-script .spk{color:var(--sky);font-style:normal;font-weight:600;font-family:var(--mono);font-size:11px}
.lt-script .hl{background:var(--lime-dim);color:var(--lime);border-radius:2px;padding:0 3px;font-style:normal;font-weight:600;font-size:13px}
.lt-script .hl-red{background:var(--red-dim);color:var(--red);border-radius:2px;padding:0 3px;font-style:normal;font-weight:600;font-size:13px}
.lt-script .hl-amber{background:var(--amber-dim);color:var(--amber);border-radius:2px;padding:0 3px;font-style:normal;font-weight:600;font-size:13px}
.lt-script .hl-violet{background:var(--violet-dim);color:var(--violet);border-radius:2px;padding:0 3px;font-style:normal;font-weight:600;font-size:13px}
.audio-sim{background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;align-items:center;gap:12px}
.audio-icon{width:36px;height:36px;border-radius:50%;background:var(--lime-dim);border:1px solid var(--lime-border);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0}
.audio-info{flex:1}
.audio-title{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:2px}
.audio-sub{font-family:var(--mono);font-size:11px;color:var(--t3)}
.audio-dur{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;flex-shrink:0}
.signal-listen{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:10px 0}
.sl-head{padding:8px 14px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.sl-body{padding:12px 16px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.sl-item{font-size:13px;color:var(--t2);display:flex;align-items:flex-start;gap:8px;line-height:1.5}
.sl-word{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--lime);flex-shrink:0;min-width:100px}
.sl-item.contrast .sl-word{color:var(--sky)}
.sl-item.cause .sl-word{color:var(--amber)}
.sl-item.example .sl-word{color:var(--violet)}
.sl-item.conclude .sl-word{color:var(--red)}
.trap-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-bottom:10px;border-left:3px solid var(--red)}
.trap-hd{font-size:13px;font-weight:600;color:var(--red);margin-bottom:6px}
.trap-body{font-size:13px;color:var(--t2);line-height:1.6}
.trap-body em{color:var(--t1);font-style:normal}
@media(max-width:600px){.sl-body{grid-template-columns:1fr}.audio-sim{flex-wrap:wrap}}

/* CHAPTER 12 EXTRAS */
.tab.done-tab .tab-check{display:inline-flex}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#080B10;font-weight:700;flex-shrink:0;margin-left:4px}
.tab{display:flex;align-items:center;gap:6px}
.tabs-wrap{margin-bottom:12px}
.layer.active{animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:8px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--lime);background:var(--lime-dim);border-color:var(--lime-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)}
.hb-level{background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)}
.hb-chapter{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.progress-bar{background:linear-gradient(90deg,var(--lime),var(--sky))}
.nav-btn{text-decoration:none}
/* CH12 SPECIFIC */
.tactic-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 20px;margin-bottom:10px;transition:border-color .15s;border-left:3px solid var(--bd-mid)}
.tactic-card:hover{border-color:var(--bd-light)}
.tactic-card.lime{border-left-color:var(--lime)}
.tactic-card.sky{border-left-color:var(--sky)}
.tactic-card.violet{border-left-color:var(--violet)}
.tactic-card.amber{border-left-color:var(--amber)}
.tactic-card.red{border-left-color:var(--red)}
.tc-hd{display:flex;align-items:center;gap:10px;margin-bottom:8px}
.tc-step{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:11px;font-weight:700;flex-shrink:0}
.tc-title{font-size:14px;font-weight:600;color:var(--t1)}
.tc-body{font-size:13px;color:var(--t2);line-height:1.65;padding-left:36px}
.tc-tip{font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:6px;padding-left:36px}
.distractor-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}
.dist-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 16px}
.dist-type{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;color:var(--red)}
.dist-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:6px}
.dist-ex{font-size:12px;color:var(--t2);line-height:1.6}
.dist-ex em{color:var(--sky);font-style:normal}
.mcq-demo{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.mcq-demo-head{padding:12px 18px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1px;text-transform:uppercase}
.mcq-demo-body{padding:16px 20px}
.mcq-stem{font-size:14px;color:var(--t1);margin-bottom:14px;line-height:1.6}
.mcq-opts-demo{display:flex;flex-direction:column;gap:8px}
.mcq-opt-demo{padding:10px 14px;border-radius:var(--r2);border:1px solid var(--bd-mid);font-size:13px;display:flex;align-items:flex-start;gap:10px;line-height:1.5}
.mcq-opt-demo.correct-demo{border-color:var(--green);background:var(--green-dim);color:var(--green)}
.mcq-opt-demo.wrong-demo{border-color:var(--red-dim);background:rgba(239,68,68,.04);color:var(--t3)}
.mcq-opt-demo.trap-demo{border-color:var(--amber-border);background:var(--amber-dim);color:var(--amber)}
.opt-letter-demo{width:20px;height:20px;border-radius:4px;background:var(--bg-input);display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);flex-shrink:0;margin-top:1px}
.mcq-opt-demo.correct-demo .opt-letter-demo{background:var(--green);color:#080B10}
.mcq-opt-demo.wrong-demo .opt-letter-demo{background:var(--bg-hover)}
.mcq-opt-demo.trap-demo .opt-letter-demo{background:var(--amber);color:#080B10}
.opt-anno{font-family:var(--mono);font-size:10px;margin-left:auto;padding:2px 7px;border-radius:var(--r1);flex-shrink:0}
.anno-correct{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.anno-trap{background:var(--amber-dim);color:var(--amber);border:1px solid var(--amber-border)}
.anno-wrong{background:var(--bg-hover);color:var(--t3);border:1px solid var(--bd-mid)}
.subject-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:16px 0}
.subj-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px}
.subj-title{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px}
.subj-trap{font-size:12.5px;color:var(--t2);line-height:1.6}
.subj-trap b{color:var(--red)}
.final-checklist{background:linear-gradient(135deg,var(--lime-dim),rgba(56,189,248,.06));border:1px solid var(--lime-border);border-radius:var(--r4);padding:24px 28px;margin:24px 0}
.fc-title{font-size:17px;font-weight:700;color:var(--lime);margin-bottom:20px;display:flex;align-items:center;gap:10px}
.fc-item{display:flex;align-items:flex-start;gap:12px;padding:10px 0;border-bottom:1px solid rgba(155,247,58,.15)}
.fc-item:last-child{border-bottom:none}
.fc-check{width:22px;height:22px;border-radius:5px;background:var(--lime-dim);border:1px solid var(--lime-border);display:flex;align-items:center;justify-content:center;font-size:12px;flex-shrink:0;margin-top:1px;color:var(--lime)}
.fc-text{font-size:13px;color:var(--t2);line-height:1.5}
.fc-text b{color:var(--t1)}
@media(max-width:720px){.distractor-grid{grid-template-columns:1fr}.subject-grid{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.subject-grid{grid-template-columns:1fr}}
/* ══════ PREMIUM GATES ══════ */
.pg-ai{position:relative;margin:24px 0;padding:22px 22px 20px;background:linear-gradient(135deg,rgba(56,189,248,0.06),rgba(167,139,250,0.06));border:1px solid transparent;border-radius:16px;overflow:hidden;isolation:isolate}
.pg-ai::before{content:"";position:absolute;inset:0;border-radius:16px;padding:1px;background:linear-gradient(135deg,#38BDF8,#A78BFA,#38BDF8);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;background-size:200% 200%;animation:pg-border 4s linear infinite;z-index:-1}
@keyframes pg-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.pg-ai-hd{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.pg-ai-ico{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#38BDF8,#A78BFA);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;animation:pg-pulse 2s ease-in-out infinite}
@keyframes pg-pulse{0%{box-shadow:0 0 0 0 rgba(56,189,248,0.5)}70%{box-shadow:0 0 0 14px rgba(56,189,248,0)}100%{box-shadow:0 0 0 0 rgba(56,189,248,0)}}
.pg-ai-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#38BDF8;letter-spacing:2px;text-transform:uppercase;line-height:1.2}
.pg-ai-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-ai-chips{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 12px}
.pg-ai-chip{font-family:var(--mono);font-size:10.5px;padding:6px 10px;background:rgba(56,189,248,0.08);border:1px solid rgba(56,189,248,0.25);border-radius:999px;color:#38BDF8;cursor:pointer;transition:all .15s}
.pg-ai-chip:hover{background:rgba(56,189,248,0.15);transform:translateY(-1px)}
.pg-ai-bubble{background:rgba(8,11,16,0.7);border:1px solid rgba(167,139,250,0.2);border-radius:12px;padding:12px 14px;margin-bottom:14px;position:relative;font-size:12.5px;color:var(--t2);line-height:1.55}
.pg-ai-bubble::before{content:"AI";position:absolute;top:-10px;left:12px;background:linear-gradient(135deg,#38BDF8,#A78BFA);color:#080B10;font-family:var(--mono);font-size:9px;font-weight:800;padding:2px 7px;border-radius:4px;letter-spacing:1px}
.pg-ai-typing{display:inline-flex;gap:3px;margin-left:4px;vertical-align:middle}
.pg-ai-typing span{width:5px;height:5px;border-radius:50%;background:#38BDF8;animation:pg-typing 1.4s ease-in-out infinite}
.pg-ai-typing span:nth-child(2){animation-delay:0.2s}
.pg-ai-typing span:nth-child(3){animation-delay:0.4s}
@keyframes pg-typing{0%,60%,100%{opacity:0.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}
.pg-ai-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#38BDF8,#A78BFA);color:#080B10;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(56,189,248,0.3)}
.pg-ai-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(56,189,248,0.4)}
.pg-ai-badge{font-family:var(--mono);font-size:9px;color:#38BDF8;padding:3px 8px;background:rgba(56,189,248,0.1);border:1px solid rgba(56,189,248,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}
.pg-disc{position:relative;margin:24px 0 0;padding:22px;background:linear-gradient(135deg,rgba(155,247,58,0.05),rgba(74,222,128,0.04));border:1px solid rgba(155,247,58,0.22);border-radius:16px;overflow:hidden}
.pg-disc::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#9BF73A,#4ADE80,#9BF73A);background-size:200% 100%;animation:pg-slide 3s linear infinite}
@keyframes pg-slide{0%{background-position:0% 0}100%{background-position:200% 0}}
.pg-disc-hd{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.pg-disc-ico{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#9BF73A,#4ADE80);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.pg-disc-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#9BF73A;letter-spacing:2px;text-transform:uppercase}
.pg-disc-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-disc-stats{display:flex;gap:20px;margin:14px 0;flex-wrap:wrap}
.pg-disc-stat{display:flex;align-items:baseline;gap:6px}
.pg-disc-stat-n{font-size:22px;font-weight:700;color:#9BF73A;font-family:var(--mono)}
.pg-disc-stat-l{font-size:10px;color:var(--t3);font-family:var(--mono);text-transform:uppercase;letter-spacing:1px}
.pg-disc-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#9BF73A,#4ADE80);color:#080B10;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(155,247,58,0.3)}
.pg-disc-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(155,247,58,0.4)}
.pg-disc-badge{font-family:var(--mono);font-size:9px;color:#9BF73A;padding:3px 8px;background:rgba(155,247,58,0.1);border:1px solid rgba(155,247,58,0.28);border-radius:999px;letter-spacing:1.5px;margin-left:10px}
.pw-overlay{position:fixed;inset:0;z-index:9999;background:rgba(8,11,16,0.92);backdrop-filter:blur(10px);display:none;align-items:center;justify-content:center;padding:20px}
.pw-overlay.show{display:flex}
.pw-card{background:var(--bg-surface);border:1px solid rgba(155,247,58,0.25);border-radius:16px;max-width:440px;width:100%;padding:28px 24px;position:relative;animation:pwIn 0.22s ease-out}
@keyframes pwIn{from{transform:translateY(14px);opacity:0}to{transform:translateY(0);opacity:1}}
.pw-close{position:absolute;top:12px;right:12px;background:transparent;border:none;color:var(--t3);font-size:20px;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .15s}
.pw-close:hover{background:var(--bg-card);color:var(--t1)}
.pw-title{font-size:19px;font-weight:800;color:var(--t1);margin-bottom:6px;padding-right:32px;letter-spacing:-0.4px}
.pw-sub{color:var(--t2);font-size:13px;line-height:1.55;margin-bottom:18px}
.pw-tiers{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px}
.pw-tier{padding:14px 12px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);cursor:pointer;transition:all 0.15s;position:relative}
.pw-tier.featured{border-color:rgba(155,247,58,0.4);background:linear-gradient(135deg,rgba(155,247,58,0.05),rgba(56,189,248,0.03))}
.pw-tier.featured::before{content:"POPULAR";position:absolute;top:-8px;right:10px;background:linear-gradient(135deg,#9BF73A,#38BDF8);color:#080B10;font-family:var(--mono);font-size:8px;font-weight:800;padding:2px 8px;border-radius:999px;letter-spacing:0.1em}
.pw-tier-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px}
.pw-tier-price{font-family:var(--mono);font-size:16px;font-weight:800;color:var(--lime)}
.pw-tier-price .per{font-size:10px;color:var(--t3);font-weight:400}
.pw-tier-feat{font-size:10.5px;color:var(--t2);margin-top:8px;line-height:1.5}
.pw-cta{width:100%;padding:12px 18px;border:none;border-radius:var(--r3);font-family:var(--mono);font-size:13px;font-weight:800;letter-spacing:0.03em;text-transform:uppercase;cursor:pointer;transition:all 0.2s}
.pw-cta.pro-btn{background:linear-gradient(135deg,#9BF73A,#38BDF8);color:#080B10}
.pw-cta.pro-btn:hover{transform:translateY(-1px);box-shadow:0 4px 18px rgba(155,247,58,0.4)}
.pw-cta.disc-btn{background:linear-gradient(135deg,#9BF73A,#4ADE80);color:#080B10}
.pw-cta.disc-btn:hover{transform:translateY(-1px);box-shadow:0 4px 18px rgba(155,247,58,0.4)}
.pw-note{text-align:center;font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:10px}
.pw-note strong{color:var(--lime)}
`; // end CH12_CSS

const CH12_BODY = `<div class="shell">
<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">&#x2715; Zatvori</button>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter01.html'"><span class="sb-dot"></span> 01 · Present Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter02.html'"><span class="sb-dot"></span> 02 · Past Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter03.html'"><span class="sb-dot"></span> 03 · Present Perfect</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter04.html'"><span class="sb-dot"></span> 04 · Futur: will i going to</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter05.html'"><span class="sb-dot"></span> 05 · Modal glagoli</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter06.html'"><span class="sb-dot"></span> 06 · Uvjetne rečenice 0, 1, 2</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter07.html'"><span class="sb-dot"></span> 07 · Pasiv</div>
  <div class="sb-label">// Vještine</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter08.html'"><span class="sb-dot"></span> 08 · Vokabular — život</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter09.html'"><span class="sb-dot"></span> 09 · Čitanje s razumijevanjem</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter10.html'"><span class="sb-dot"></span> 10 · Pisanje — kratki tekst</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter11.html'"><span class="sb-dot"></span> 11 · Strategije slušanja</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 12 · Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter13.html'"><span class="sb-dot"></span> 13 · Neupravni govor</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter14.html'"><span class="sb-dot"></span> 14 · Članovi: a / an / the</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter15.html'"><span class="sb-dot"></span> 15 · Komparativ i tag pitanja</div>
</div>
<nav class="sidebar">
  <div class="sb-brand">
    <div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg></div>
    <div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">EN · niža razina</div></div>
  </div>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item" onclick="window.location='chapter01.html'" style="cursor:pointer"><span class="sb-dot"></span> 01 · Present Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter02.html'" style="cursor:pointer"><span class="sb-dot"></span> 02 · Past Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter03.html'" style="cursor:pointer"><span class="sb-dot"></span> 03 · Present Perfect</div>
  <div class="sb-item" onclick="window.location='chapter04.html'" style="cursor:pointer"><span class="sb-dot"></span> 04 · Futur: will i going to</div>
  <div class="sb-item" onclick="window.location='chapter05.html'" style="cursor:pointer"><span class="sb-dot"></span> 05 · Modal glagoli</div>
  <div class="sb-item" onclick="window.location='chapter06.html'" style="cursor:pointer"><span class="sb-dot"></span> 06 · Uvjetne rečenice 0, 1, 2</div>
  <div class="sb-item" onclick="window.location='chapter07.html'" style="cursor:pointer"><span class="sb-dot"></span> 07 · Pasiv</div>
  <div class="sb-label">// Vještine</div>
  <div class="sb-item" onclick="window.location='chapter08.html'" style="cursor:pointer"><span class="sb-dot"></span> 08 · Vokabular — život</div>
  <div class="sb-item" onclick="window.location='chapter09.html'" style="cursor:pointer"><span class="sb-dot"></span> 09 · Čitanje s razumijevanjem</div>
  <div class="sb-item" onclick="window.location='chapter10.html'" style="cursor:pointer"><span class="sb-dot"></span> 10 · Pisanje — kratki tekst</div>
  <div class="sb-item" onclick="window.location='chapter11.html'" style="cursor:pointer"><span class="sb-dot"></span> 11 · Strategije slušanja</div>
  <div class="sb-item active"><span class="sb-dot"></span> 12 · Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 · Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 · Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 · Komparativ i tag pitanja</div>
  <div class="sb-footer">12 / 15 · maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span onclick="window.location='chapter11.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>exam</span>
    <span class="bc-sep">/</span><span class="bc-active">mcq-tactics</span>
  </div>

  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" onclick="switchTab(0)" tabindex="0">&#9889; 2 min<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" onclick="switchTab(1)" tabindex="0">&#128214; Tactics<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" onclick="switchTab(2)" tabindex="0">&#9999;&#65039; Final quiz<span class="tab-check">&#10003;</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Overview</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Learn tactics</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Final quiz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~30 min
    </div>
  </div>

  <!-- ══ LAYER 0 ══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 12 of 12 &middot; exam</div>
      <h1 class="hero-title">MCQ <span>Tactics</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">&#9201; ~30 min</span>
        <span class="hero-badge hb-level">ni&#382;a razina</span>
        <span class="hero-badge hb-chapter">12 / 12</span>
      </div>
      <p class="hero-sub">Eliminacija &middot; Distraktori &middot; Parafraziranje &middot; Educated guess &middot; Sve teme na jednom mjestu</p>
      <div class="progress-track"><div class="progress-bar" style="width:100%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">Eliminacija</span>
      <span class="pill pill-sky">Parafraziranje</span>
      <span class="pill pill-red">Distraktori</span>
      <span class="pill pill-violet">Educated guess</span>
      <span class="pill pill-amber">Finale quiz</span>
    </div>

    <div class="sec-label">// at a glance &mdash; MCQ taktike u 60 sekundi</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">ELI</div><div class="stat-name">Eliminacija</div><div class="stat-desc">Ukloni sigurno krive opcije &rarr; biramo od preostalih</div></div>
      <div class="stat-card"><div class="stat-icon sky">PAR</div><div class="stat-name">Parafraziranje</div><div class="stat-desc">To&#269;an odgovor = isti smisao, razli&#269;ite rije&#269;i</div></div>
      <div class="stat-card"><div class="stat-icon red">DIS</div><div class="stat-name">Distraktori</div><div class="stat-desc">6 tipova zamki &mdash; prepoznaj i eliminiraj</div></div>
      <div class="stat-card"><div class="stat-icon violet">GUE</div><div class="stat-name">Educated guess</div><div class="stat-desc">Eliminiraj 2 &rarr; 50/50 &rarr; nikad prazno!</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Korak 1</div><div class="cv">Pitanje PRVO &rarr; &#269;itaj/slu&#353;aj ciljano &rarr; tra&#382;i parafraziran odgovor</div></div>
      <div class="concept-row"><div class="ck sky">Korak 2</div><div class="cv">Odmah eliminiraj: apsolutne tvrdnje (all/never) &middot; info koje nema u tekstu &middot; direktno kopirane rije&#269;i</div></div>
      <div class="concept-row"><div class="ck red">Korak 3</div><div class="cv">Prepoznaj tip distraktora: parafrazna zamka &middot; djelomi&#269;no to&#269;an &middot; pretjerivanje &middot; negacija &middot; ispravka</div></div>
      <div class="concept-row"><div class="ck violet">Korak 4</div><div class="cv">Ako su ostale 2 opcije: vrati se na tekst &rarr; na&#273;i dokaz &rarr; educated guess &rarr; nikad prazno!</div></div>
      <div class="concept-row"><div class="ck amber">Finale</div><div class="cv">Ovo poglavlje = sve zamke i taktike iz ch01&ndash;ch11 na jednom mjestu</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; MCQ na ispitu</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; 5-step MCQ formula</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Pro&#269;itaj pitanje</b> &mdash; podvuci klju&#269;nu rije&#269; ili frazu. &#352;to to&#269;no pitanje tra&#382;i?</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Scan za odgovor</b> &mdash; na&#273;i dio teksta/audio koji govori o tome. Pro&#269;itaj cijeli odlomak oko toga.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Eliminiraj</b> &mdash; ukloni opcije s: all/never/always &middot; info koje nije u tekstu &middot; iste rije&#269;i kao pitanje</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Provjeri preostale</b> &mdash; koja je parafrazom onoga &#353;to si pro&#269;itao/&#269;uo? Prona&#273;i dokaz!</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Nikad prazno</b> &mdash; educated guess &gt; prazan odgovor. Prazno = 0 bodova uvijek.</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to apsolutne tvrdnje (all, never, always) treba eliminirati?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Tekstovi rijetko tvrde apsolutno → apsolutne opcije su <b>obično zamka</b>:<br>&#x274C; "All young people want to emigrate." → &#x2713; "Many young people consider emigrating."<br>Signal: <b>all / never / always / everyone / nobody</b> → eliminirati prvi</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>&#352;to je "educated guess" i kada ga koristim?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Educated guess</b> = eliminiraj, zatim bira&#353; — ne slijepo nagađaš:<br>1. Eliminiraj apsolutne opcije (all/never/always) &#x274C;<br>2. Eliminiraj opcije koje su doslovno u tekstu (zamka parafraziranja) &#x274C;<br>3. Od preostalih: odaberi najbliže temi odlomka</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koja je razlika izme&#273;u MCQ u gramatici, &#269;itanju i slu&#353;anju?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Iste taktike, različit fokus:<br><b>Gramatika MCQ</b>: traži grešku u formi (was/were, modal + bez "to")<br><b>Reading MCQ</b>: traži parafraziranu ideju, ne doslovne riječi<br><b>Listening MCQ</b>: pazi na ispravku govornika — zadnja izjava = točna</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kvantifikatori &mdash; za&#353;to su klju&#269;ni?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Jedna riječ mijenja točnost: <b>all</b> vs <b>most</b> vs <b>some</b> vs <b>few</b><br>&#x274C; "All students passed." vs &#x2713; "Most students passed."<br>Na ispitu: uvijek provjeri je li kvantifikator u opciji podudaran s tekstom — ne prejudiciraj!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koja gramatička zamka se naj&#269;e&#353;&#263;e pojavljuje u MCQ?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Top 3 NCVVO MCQ zamke:<br>1. <b>will u if klauzuli</b> &#x274C; If it will rain → &#x2713; If it rains (Ch06)<br>2. <b>mustn't vs don't have to</b>: zabranjeno ≠ nije obvezno (Ch05)<br>3. <b>was/were + PP</b>: buildings <b>were</b> built (množina!) (Ch07)</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F6A8; ako zaglavim na MCQ pitanju</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Eliminiraj <b>apsolutne</b> tvrdnje (all/never/always) &mdash; gotovo uvijek krive</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Eliminiraj opcije s <b>info koje nema</b> u tekstu/audiou &mdash; ako ne mo&#382;e&#353; na&#263;i dokaz, nije to&#269;no</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Eliminiraj opcije koje <b>kopiraju rije&#269;i</b> iz pitanja (&#269;itanje/slu&#353;anje) ili imaju gre&#353;ke u formi (gramatika)</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Preostale 2 opcije: <b>educated guess</b> &mdash; biraj onu koja ima dokaz u tekstu</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Max 30 sekundi</b> po pitanju &mdash; kreni dalje. Mo&#382;e&#353; se vratiti na kraju ako ima&#353; vremena.</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter11.html" class="nav-btn">&larr; Chapter 11</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn tactics &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — TACTICS ══ -->
  <div class="layer" id="l1">

    <div class="sec-label">// 6 MCQ taktika &mdash; primjenjivo na sve tipove zadataka</div>
    <p class="prose">Ove taktike vrijede za gramatički MCQ, &#269;itanje s razumijevanjem i listening. Svaka je kombinacija onoga &#353;to si u&#269;io u prethodnim poglavljima.</p>

    <div class="tactic-card lime">
      <div class="tc-hd"><div class="tc-step" style="background:var(--lime-dim);color:var(--lime)">1</div><div class="tc-title">Pitanje PRVO &mdash; ciljano traži</div></div>
      <div class="tc-body">Pro&#269;itaj pitanje i opcije <b>prije</b> teksta/audioa. Podvuci klju&#269;nu rije&#269; ili frazu. Mozak sada aktivno tra&#382;i tu informaciju &mdash; ne &#269;ita sve jednako pa&#382;ljivo. U gramatici: provjeri &#353;to se to&#269;no testira (vreme, oblik, prijedlog...).</div>
      <div class="tc-tip">&rarr; "According to the text, why did she...?" &rarr; tra&#382;i razlog &rarr; scan za "because", "since", "as a result"</div>
    </div>

    <div class="tactic-card sky">
      <div class="tc-hd"><div class="tc-step" style="background:var(--sky-dim);color:var(--sky)">2</div><div class="tc-title">Eliminacija &mdash; umanji izbor</div></div>
      <div class="tc-body">Odmah eliminiraj opcije koje su sigurno krive &mdash; ne &#269;ekaj do kraja. Eliminiraj: (a) apsolutne tvrdnje bez dokaza, (b) info koje tekst ne spominje, (c) u gramatici: oblike s o&#269;itim gre&#353;kama (cans, must to, will u if...).</div>
      <div class="tc-tip">&rarr; Cilj: od 4 opcije do&#263;i na 2 &mdash; tada je educated guess 50/50 (ne 25%).</div>
    </div>

    <div class="tactic-card red">
      <div class="tc-hd"><div class="tc-step" style="background:var(--red-dim);color:var(--red)">3</div><div class="tc-title">Prepoznaj distraktore &mdash; 6 tipova</div></div>
      <div class="tc-body">
        <b>1. Apsolutna tvrdnja</b>: "all", "never" &rarr; eliminiraj<br>
        <b>2. Iste rije&#269;i kao pitanje</b>: kopira tekst ali mijenja smisao<br>
        <b>3. Djelomi&#269;no to&#269;an</b>: sadr&#382;i pravu informaciju ali neto&#269;no kombinira<br>
        <b>4. Negacija obrnuta</b>: "not permitted" &rarr; MCQ ka&#382;e "permitted" (izo&#353;tavljena rije&#269;)<br>
        <b>5. Parafrazna zamka</b>: zvu&#269;i logiki&#269;no ali nije u tekstu<br>
        <b>6. Ispravka zamijenjena</b> (listening): govornik ispravlja ali u&#269;enik zadr&#382;ava prvu info
      </div>
      <div class="tc-tip">&rarr; Za svaku opciju pitaj: "Mogu li na&#263;i to&#269;nu re&#269;enicu u tekstu koja to potvr&#273;uje?"</div>
    </div>

    <div class="tactic-card violet">
      <div class="tc-hd"><div class="tc-step" style="background:var(--violet-dim);color:var(--violet)">4</div><div class="tc-title">Parafraziranje &mdash; isti smisao, razli&#269;ite rije&#269;i</div></div>
      <div class="tc-body">To&#269;an odgovor uvijek koristi sinonime ili preformulira tekst. Vje&#382;baj: uzmi re&#269;enicu iz teksta i zamisli 3 na&#269;ina kako bi je rekao druk&#269;ije. U&#269;e&#353; prepoznati parafraziranje i u &#269;itanju i u slu&#353;anju.</div>
      <div class="tc-tip">&rarr; "resigned" = "left the job" = "decided to quit" = "stepped down" &mdash; svi isti smisao!</div>
    </div>

    <div class="tactic-card amber">
      <div class="tc-hd"><div class="tc-step" style="background:var(--amber-dim);color:var(--amber)">5</div><div class="tc-title">Kvantifikatori &mdash; jedna rije&#269; = razlika</div></div>
      <div class="tc-body">most &#x2260; all &#x2260; many &#x2260; some &#x2260; few &#x2260; none. Provjeri uvijek to&#269;an kvantifikator. MCQ zamka: tekst ka&#382;e "many" &rarr; opcija ka&#382;e "all" ili "most" ili "a few" &rarr; svaka je druga to&#269;nost. Isti problem s: often/always, sometimes/usually.</div>
      <div class="tc-tip">&rarr; Tablica: many &gt; some &gt; few &middot; usually &gt; often &gt; sometimes &middot; all &gt; most &gt; many</div>
    </div>

    <div class="tactic-card lime">
      <div class="tc-hd"><div class="tc-step" style="background:var(--lime-dim);color:var(--lime)">6</div><div class="tc-title">Educated guess &mdash; nikad prazno</div></div>
      <div class="tc-body">Nakon eliminacije ostale ti 2 opcije: vrati se na tekst, tra&#382;i dokaz. Ako ne mo&#382;e&#353; na&#263;i u 20 sekundi: biraj opciju koja <em>nije</em> apsolutna, <em>nije</em> kopija rije&#269;i iz pitanja, i koja je bri&#382;e formulirana. Zaokru&#382;i i nastavi. Nikad ne ostavljaj prazno!</div>
      <div class="tc-tip">&rarr; Statistika: 25% &#353;anse za prazno = 0 bodova. Educated guess = 50% &#353;anse = u prosjeku 0.5 boda. Uvijek vrijedi.</div>
    </div>

    <!-- DISTRACTOR TYPES DETAILED -->
    <hr class="divider">
    <div class="sec-label">// 6 tipova distraktora &mdash; prepoznaj i eliminiraj</div>

    <div class="distractor-grid">
      <div class="dist-card">
        <div class="dist-type">Tip 1</div>
        <div class="dist-name">Apsolutna tvrdnja</div>
        <div class="dist-ex">Tekst: "Many students struggle with time management."<br><em>Zamka: "All students have poor time management."</em><br>&rarr; many &#x2260; all &rarr; eliminiraj odmah</div>
      </div>
      <div class="dist-card">
        <div class="dist-type">Tip 2</div>
        <div class="dist-name">Iste rije&#269;i, krivo zna&#269;enje</div>
        <div class="dist-ex">Tekst: "She doesn't enjoy cooking."<br><em>Zamka: "She enjoys cooking." (izo&#353;tavlja negaciju)</em><br>&rarr; jedna rije&#269; mijenja sve &rarr; pazi na not/never!</div>
      </div>
      <div class="dist-card">
        <div class="dist-type">Tip 3</div>
        <div class="dist-name">Djelomi&#269;no to&#269;an</div>
        <div class="dist-ex">Tekst: "She works in London but lives in Brighton."<br><em>Zamka: "She lives and works in London."</em><br>&rarr; sadr&#382;i to&#269;nu info ali neto&#269;no kombinira</div>
      </div>
      <div class="dist-card">
        <div class="dist-type">Tip 4</div>
        <div class="dist-name">Parafrazna zamka</div>
        <div class="dist-ex">Tekst: "He resigned due to the long commute."<br><em>Zamka: "He left because of a salary dispute."</em><br>&rarr; logicky, ali nije u tekstu &rarr; nema dokaza!</div>
      </div>
      <div class="dist-card">
        <div class="dist-type">Tip 5</div>
        <div class="dist-name">Pretjerivanje</div>
        <div class="dist-ex">Tekst: "Technology has improved communication."<br><em>Zamka: "Technology has completely transformed all communication."</em><br>&rarr; "completely" i "all" = apsolutno = kriva</div>
      </div>
      <div class="dist-card">
        <div class="dist-type">Tip 6</div>
        <div class="dist-name">Ispravka zamijenjena</div>
        <div class="dist-ex">Audio: "The price is 50€... actually 15€."<br><em>Zamka: U&#269;enik odgovara 50€ (prvi podatak)</em><br>&rarr; uvijek zadnji podatak &rarr; 15€ je to&#269;an odgovor!</div>
      </div>
    </div>

    <!-- ANNOTATED MCQ EXAMPLE -->
    <hr class="divider">
    <div class="sec-label">// anotiran MCQ primjer &mdash; analiziraj svaku opciju</div>
    <p class="prose" style="margin-bottom:10px">Kontekst teksta: <em>"Research shows that many young people who study abroad return home after graduation, although some choose to remain in the host country for professional reasons."</em></p>

    <div class="mcq-demo">
      <div class="mcq-demo-head">Pitanje: According to the text, what do many young people do after studying abroad?</div>
      <div class="mcq-demo-body">
        <div class="mcq-opts-demo">
          <div class="mcq-opt-demo wrong-demo">
            <div class="opt-letter-demo">A</div>
            <div><b>All</b> students who study abroad stay in the host country permanently.</div>
            <div class="opt-anno anno-wrong">&#x274C; all = apsolutno</div>
          </div>
          <div class="mcq-opt-demo correct-demo">
            <div class="opt-letter-demo">B</div>
            <div>The majority of them go back to their home country.</div>
            <div class="opt-anno anno-correct">&#x2713; to&#269;no</div>
          </div>
          <div class="mcq-opt-demo trap-demo">
            <div class="opt-letter-demo">C</div>
            <div>Young people <b>choose to remain</b> in the host country for professional reasons.</div>
            <div class="opt-anno anno-trap">&#x26A0; zamka</div>
          </div>
          <div class="mcq-opt-demo wrong-demo">
            <div class="opt-letter-demo">D</div>
            <div>They never return home because of better career opportunities abroad.</div>
            <div class="opt-anno anno-wrong">&#x274C; never = apsolutno</div>
          </div>
        </div>
        <div class="callout callout-info" style="margin-top:14px">
          <span class="callout-icon">&#x1F4A1;</span>
          <div class="callout-body">
            <div class="callout-title">Analiza opcija</div>
            <div class="callout-text">
              <b>A</b>: "All" = apsolutno &rarr; eliminiraj odmah. Tekst ka&#382;e "many", ne "all".<br>
              <b>B</b>: &#x2713; "majority of them go back" = parafraziranje "many return home" &rarr; to&#269;an odgovor.<br>
              <b>C</b>: &#x26A0; Zamka &mdash; tekst TO govori, ali za <em>some</em>, ne za <em>many</em>. Pitanje pita o "many"!<br>
              <b>D</b>: "Never" = apsolutno &rarr; eliminiraj. "Career opportunities" nije razlog u tekstu.
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- GRAMMAR MCQ SPECIFICS -->
    <hr class="divider">
    <div class="sec-label">// gramati&#269;ki MCQ &mdash; zamke po poglavljima</div>
    <p class="prose" style="margin-bottom:12px">U gramati&#269;kom MCQ odmah eliminiraj opcije s ovim gre&#353;kama:</p>

    <div class="subject-grid">
      <div class="subj-card">
        <div class="subj-title">ch01&ndash;03 &middot; Vremena</div>
        <div class="subj-trap"><b>PS umjesto PP</b>: "She <b>went</b> three times" &#x274C; (PP kontekst)<br><b>been vs gone</b>: "I've <b>went</b>" &#x274C;<br><b>for vs since</b>: "since 3 years" &#x274C;</div>
      </div>
      <div class="subj-card">
        <div class="subj-title">ch04 &middot; Future</div>
        <div class="subj-trap"><b>will vs going to</b> &mdash; plan vs spontana odluka<br><b>"will" u if klauzuli</b> &#x274C;<br><b>will + -ing</b> &#x274C; (ne "will going")</div>
      </div>
      <div class="subj-card">
        <div class="subj-title">ch05 &middot; Modali</div>
        <div class="subj-trap"><b>cans/musts</b> &#x274C; (nema -s!)<br><b>must to</b> &#x274C; (naked inf.!)<br><b>mustn't vs don't have to</b><br><b>must been</b> &#x274C;</div>
      </div>
      <div class="subj-card">
        <div class="subj-title">ch06 &middot; Conditionals</div>
        <div class="subj-trap"><b>will u if klauzuli</b> &#x274C;<br><b>would u if klauzuli C2</b> &#x274C;<br><b>C1+would / C2+will</b> &#x274C;<br><b>was umjesto were (C2)</b> &#x274C;</div>
      </div>
      <div class="subj-card">
        <div class="subj-title">ch07 &middot; Pasiv</div>
        <div class="subj-trap"><b>was wrote</b> &#x274C; (PP, ne PS!)<br><b>must been</b> &#x274C; (modal+be)<br><b>has repaired</b> &#x274C; (treba been)<br><b>was za mno&#382;inu</b> &#x274C;</div>
      </div>
      <div class="subj-card">
        <div class="subj-title">ch08 &middot; Vokabular</div>
        <div class="subj-trap"><b>make homework</b> &#x274C; (do!)<br><b>apply to a job</b> &#x274C; (for!)<br><b>grow (bez up)</b> &#x274C;<br><b>rise awareness</b> &#x274C; (raise!)</div>
      </div>
    </div>

    <!-- STRATEGY DRILL -->
    <hr class="divider">
    <div class="sec-label">// taktika drill &mdash; prepoznaj i primijeni</div>
    <p class="prose" style="margin-bottom:14px">5 pitanja. Odaberi to&#269;nu taktiku za svaku situaciju.</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">MCQ opcija ka&#382;e "All students prefer online learning." Tekst ka&#382;e "many students". &#352;to&#269;ini&#353;?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'t1',false,'Odmah eliminiraj &mdash; all &#x2260; many')">Odabire&#353; tu opciju jer postoji veza</div><div class="sv-opt" onclick="sdAns(this,'t1',true,'Odmah eliminiraj &mdash; all &#x2260; many')">Odmah eliminiraj &mdash; all &#x2260; many</div><div class="sv-opt" onclick="sdAns(this,'t1',false,'Odmah eliminiraj &mdash; all &#x2260; many')">Preskači pitanje</div></div><div class="sv-fb" id="t1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">MCQ opcija koristi to&#269;no iste rije&#269;i kao i klju&#269;na re&#269;enica u tekstu. Obi&#269;no je to...</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'t2',false,'Distraktor &mdash; iste rije&#269;i = zamka')">Sigurno to&#269;an odgovor</div><div class="sv-opt" onclick="sdAns(this,'t2',true,'Distraktor &mdash; iste rije&#269;i = zamka')">Distraktor &mdash; zamka</div><div class="sv-opt" onclick="sdAns(this,'t2',false,'Distraktor &mdash; iste rije&#269;i = zamka')">Nije va&#382;no</div></div><div class="sv-fb" id="t2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Gramati&#269;ki MCQ: "If it _____ tomorrow, we will cancel." Opcija A: will rain. Opcija B: rains. &#352;to bira&#353;?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'t3',false,'Rains &mdash; nikad will u if klauzuli!')">will rain (A)</div><div class="sv-opt" onclick="sdAns(this,'t3',true,'Rains &mdash; nikad will u if klauzuli!')">rains (B)</div><div class="sv-opt" onclick="sdAns(this,'t3',false,'Rains &mdash; nikad will u if klauzuli!')">Obje su to&#269;ne</div></div><div class="sv-fb" id="t3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Ostale su ti 2 MCQ opcije i ne mo&#382;e&#353; na&#263;i dokaz ni za jednu. &#352;to&#269;ini&#353;?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'t4',false,'Educated guess: biraj, nikad prazno')">Ostavlja&#353; prazno</div><div class="sv-opt" onclick="sdAns(this,'t4',true,'Educated guess: biraj, nikad prazno')">Educated guess: biraj, nikad prazno</div><div class="sv-opt" onclick="sdAns(this,'t4',false,'Educated guess: biraj, nikad prazno')">Ponavlja&#353; tekst od po&#269;etka</div></div><div class="sv-fb" id="t4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">MCQ opcija: "She has been promoted." Tekst: "She got a promotion." Ovo je primjer...</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'t5',true,'Parafraziranja &mdash; isti smisao, razli&#269;ite rije&#269;i')">Parafraziranja &mdash; to&#269;no!</div><div class="sv-opt" onclick="sdAns(this,'t5',false,'Parafraziranja &mdash; isti smisao, razli&#269;ite rije&#269;i')">Distraktora &mdash; krivo</div><div class="sv-opt" onclick="sdAns(this,'t5',false,'Parafraziranja &mdash; isti smisao, razli&#269;ite rije&#269;i')">Ispravke govornika</div></div><div class="sv-fb" id="t5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; sve MCQ zamke na jednom mjestu</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>Apsolutne tvrdnje bez dokaza</b><br>all/never/always/completely &rarr; eliminiraj odmah ako tekst ne potvr&#273;uje apsolutno.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Iste rije&#269;i, druk&#269;iji smisao</b><br>Opcija kopira frazu iz teksta ali mijenja zna&#269;enje (npr. izostavlja "not"). Uvijek provjeri kontekst!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>Kvantifikator zamjena</b><br>many &rarr; all &middot; some &rarr; most &middot; often &rarr; always. Jedna rije&#269; = razlika izme&#273;u to&#269;nog i krivog.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>Gramatička greška u opciji</b><br>cans &middot; must to &middot; will u if &middot; was wrote &middot; must been &mdash; eliminiraj odmah bez &#269;itanja ostatka opcije.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>Logički ali nije u tekstu</b><br>Opcija se &#269;ini logičnom ali tekst to ne ka&#382;e. Uvijek tra&#382;i dokaz u tekstu. Logika &ne; to&#269;no na ispitu.</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Gramatika:</b> forma glagola &middot; prijedlog &middot; red rije&#269;i<br><b>&#268;itanje:</b> parafraziranje &middot; apsolutne &middot; djelomi&#269;no to&#269;an<br><b>Slu&#353;anje:</b> ispravka &middot; iste rije&#269;i &middot; negacija</div></div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">&larr; Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Final quiz &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 2 — FINAL QUIZ ══ -->
  <div class="layer" id="l2">
    <div     <div id="weak-tracker" style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);padding:16px 18px;margin-bottom:20px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--violet)">// moja slaba podru&#269;ja</div>
        <button onclick="clearWeakData()" style="font-family:var(--mono);font-size:9px;padding:3px 10px;color:var(--t3);cursor:pointer;border-radius:var(--r2)">Re&#353;etiraj</button>
      </div>
      <div id="weak-body">
        <div style="font-size:13px;color:var(--t3);text-align:center;padding:8px 0">Rje&#353;avaj quizove u poglavljima da vidi&#353; svoja slaba podru&#269;ja.</div>
      <div style="font-size:11px;color:var(--t3);margin-top:7px;font-family:var(--mono)">
        * Tracker prati MCQ pitanja u quiz sekcijama. Rije&#353;i kvizove u poglavljima da vidi&#353; podatke.
      </div>
      </div>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:13px 17px;margin-bottom:18px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--lime);margin-bottom:10px">// kako koristiti practice tab</div>
      <div style="display:grid;grid-template-columns:auto 1fr;gap:6px 12px;font-size:13px;align-items:start">
        <div style="font-family:var(--mono);font-size:11px;color:var(--lime);font-weight:700;padding-top:1px">① Finale quiz</div>
        <div style="color:var(--t2)">15 pitanja &mdash; sve MCQ strategije Ch01&ndash;Ch11. <span style="color:var(--t3);font-size:11px">Cilj: 12/15.</span></div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--sky);font-weight:700;padding-top:1px">② Integrirani quiz</div>
        <div style="color:var(--t2)">15 pitanja &mdash; sva gramatika Ch01&ndash;Ch07 pomiješana. <span style="color:var(--t3);font-size:11px">Cilj: 12/15.</span></div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--violet);font-weight:700;padding-top:1px">③ SD drill</div>
        <div style="color:var(--t2)">Brzo ponavljanje &mdash; 10 re&#269;enica, 3 opcije. <span style="color:var(--t3);font-size:11px">Za zadnji dan.</span></div>
      </div>
    </div>
class="quiz-intro"><strong>// finale quiz &mdash; sve teme</strong> &middot; 12 pitanja koja pokrivaju sve strategije ch01&ndash;ch11. Target: <strong>10/12</strong> ili bolje. Spreman si za maturu!</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 15 &middot; strategija &middot; ch09 + ch11</div><div class="q-text">Koji je UVIJEK prvi korak pri rje&#353;avanju MCQ zadatka (&#269;itanje ili slu&#353;anje)?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">A</span> Pro&#269;itati sva pitanja i opcije prije teksta/audioa.</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">B</span> Pro&#269;itati tekst od po&#269;etka do kraja.</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> Odgovoriti na pitanja redoslijedom.</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> Prevesti nepoznate rije&#269;i.</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 15 &middot; parafraziranje &middot; ch09</div><div class="q-text">To&#269;an MCQ odgovor je uvijek...</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> Kopija rije&#269;i iz teksta.</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">B</span> Najdu&#382;a ponudjena opcija.</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">C</span> Parafraziran &mdash; isti smisao, razli&#269;ite rije&#269;i.</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> Opcija koja sadr&#382;i rije&#269;i iz pitanja.</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 15 &middot; gramati&#269;ki MCQ &middot; conditional (ch06)</div><div class="q-text">Odaberi to&#269;an oblik: "If it _______ tomorrow, we will cancel the match."</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> will rain</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> would rain</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> rains</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> rained</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 15 &middot; vokabularni MCQ &middot; kolokacija (ch08)</div><div class="q-text">She _______ a great effort to improve her English before the exam.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">A</span> made</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> did</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> got</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> had</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 15 &middot; gramati&#269;ki MCQ &middot; pasiv (ch07)</div><div class="q-text">The Eiffel Tower _______ in 1889 by Gustave Eiffel.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> has built</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">B</span> was build</div><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">C</span> was built</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> is built</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 15 &middot; kvantifikatori &middot; ch09</div><div class="q-text">Tekst ka&#382;e "most students". Koja MCQ opcija je to&#269;na parafraziranja?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> "All students..."</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">B</span> "The majority of students..."</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">C</span> "A few students..."</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> "Some students..."</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 15 &middot; distraktor &middot; djelomi&#269;no to&#269;an</div><div class="q-text">Tekst: "She works in Split but commutes from Trogir." MCQ zamka: "She lives and works in Split." Ovo je primjer kojeg tipa distraktora?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">A</span> Djelomi&#269;no to&#269;an &mdash; to&#269;na info ali krivo kombinirana.</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">B</span> Apsolutna tvrdnja.</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> Negacija obrnuta.</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> Pretjerivanje.</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 15 &middot; &#269;itanje MCQ &middot; zna&#269;enje rije&#269;i iz konteksta (ch09)</div><div class="q-text">Tekst: "The new policy faced strong <em>opposition</em> from local residents who feared it would affect their daily lives." Što znači "opposition" u ovom kontekstu?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> podr&#353;ka i odobravanje</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> ravnodu&#353;nost i nezainteresiranost</div><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">C</span> otpor i protivljenje</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> iznena&#273;enje i &#269;u&#273;enje</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 15 &middot; listening zamka &middot; ch11</div><div class="q-text">Audio: "The bus leaves at 3pm... sorry, actually at 3:30." Koji je to&#269;an odgovor?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> 3pm &mdash; prvi podatak koji sam &#269;uo.</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">B</span> Nije navedeno.</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">C</span> 3:30 &mdash; zadnji podatak (ispravka).</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> Oba su to&#269;na.</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 15 &middot; educated guess &middot; taktika</div><div class="q-text">Ostale su ti 2 MCQ opcije i ne mo&#382;e&#353; na&#263;i dokaz. &#352;to je ispravna strategija?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">A</span> Educated guess: eliminiraj jo&#353; jednu po logici, zaokru&#382;i preostalu.</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> Ostavi prazno &mdash; ne riskira&#353;.</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">C</span> Odaberi uvijek opciju B (statistika).</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> Prepi&#353;i pitanje i potra&#382;i ga u tekstu.</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="q-block" id="q11"><div class="q-head"><div class="q-meta">11 / 15 &middot; signal words &middot; ch10 + ch11</div><div class="q-text">&#268;uje&#353; "To sum up" na kraju govora ili pro&#269;ita&#353; ga u tekstu. &#352;to to signalizira?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">A</span> Kraj &mdash; prestani &#269;itati/slu&#353;ati.</div><div class="q-opt" onclick="ans(this,'q11',true)" tabindex="0"><span class="q-letter">B</span> Zaklju&#269;ak &mdash; poja&#269;aj pa&#382;nju, klju&#269;ne info dolaze.</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">C</span> Kontrast prema prethodnoj ideji.</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">D</span> Primjer koji podr&#382;ava argument.</div></div><div class="q-expl" id="q11e" aria-live="polite"></div></div>

    <div class="q-block" id="q12"><div class="q-head"><div class="q-meta">12 / 15 &middot; pisanje MCQ &middot; ch10</div><div class="q-text">Koji je gre&#353;ka u zaklju&#269;nom odlomku pisanog teksta?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">A</span> Koristiti "In conclusion" na po&#269;etku.</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">B</span> Restatati tezu druk&#269;ijim rije&#269;ima.</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">C</span> Napisati zavr&#353;nu misao ili prijedlog.</div><div class="q-opt" onclick="ans(this,'q12',true)" tabindex="0"><span class="q-letter">D</span> Uvesti potpuno novi argument koji nije bio u body.</div></div><div class="q-expl" id="q12e" aria-live="polite"></div></div>

    <div class="q-block" id="q13"><div class="q-head"><div class="q-meta">13 / 15 &middot; listening &middot; parafraziranje u slu&#353;anju</div><div class="q-text">Pitanje: &ldquo;Why did she leave her job?&rdquo;<br>U audio zapisu govorknica ka&#382;e: &ldquo;She decided to resign because the commute was too stressful.&rdquo;<br>Koji MCQ odgovor je to&#269;an?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q13',false)" tabindex="0"><span class="q-letter">A</span> She left because she found a better-paid job.</div><div class="q-opt" onclick="ans(this,'q13',false)" tabindex="0"><span class="q-letter">B</span> She resigned because she did not like her colleagues.</div><div class="q-opt" onclick="ans(this,'q13',true)" tabindex="0"><span class="q-letter">C</span> She quit her job because travelling to work was too tiring.</div><div class="q-opt" onclick="ans(this,'q13',false)" tabindex="0"><span class="q-letter">D</span> She resigned because the commute was too stressful.</div></div><div class="q-expl" id="q13e" aria-live="polite"></div></div>
<div class="q-block" id="q14"><div class="q-head"><div class="q-meta">14 / 15 &middot; listening &middot; iste rije&#269;i = zamka</div><div class="q-text">&#268;uje&#353; &ldquo;However, <b>many</b> students find it useful.&rdquo;<br>MCQ opcija D ka&#382;e: &ldquo;<b>All</b> students find it useful.&rdquo;<br>Za&#353;to je opcija D kriva?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q14',false)" tabindex="0"><span class="q-letter">A</span> Jer &ldquo;useful&rdquo; nije &#269;ula u audio zapisu.</div><div class="q-opt" onclick="ans(this,'q14',false)" tabindex="0"><span class="q-letter">B</span> Jer govornik ne govori o studentima.</div><div class="q-opt" onclick="ans(this,'q14',true)" tabindex="0"><span class="q-letter">C</span> Jer &ldquo;many&rdquo; i &ldquo;all&rdquo; nisu isto &mdash; apsolutna tvrdnja koju tekst ne podr&#382;ava.</div><div class="q-opt" onclick="ans(this,'q14',false)" tabindex="0"><span class="q-letter">D</span> Jer opcija D koristi razli&#269;ite rije&#269;i od audio zapisa.</div></div><div class="q-expl" id="q14e" aria-live="polite"></div></div>
<div class="q-block" id="q15"><div class="q-head"><div class="q-meta">15 / 15 &middot; pisanje &middot; formalni email zamka</div><div class="q-text">U formalnom emailu u&#269;enik pi&#353;e: &ldquo;I <b>don't</b> have any experience, but <b>I'm</b> very motivated and <b>I'd</b> like to apply.&rdquo;<br>Koliko gre&#353;aka sadr&#382;i ova re&#269;enica?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q15',false)" tabindex="0"><span class="q-letter">A</span> Nula &mdash; re&#269;enica je ispravna.</div><div class="q-opt" onclick="ans(this,'q15',false)" tabindex="0"><span class="q-letter">B</span> Jedna &mdash; samo &ldquo;don't&rdquo; je skra&#263;enica.</div><div class="q-opt" onclick="ans(this,'q15',false)" tabindex="0"><span class="q-letter">C</span> Dvije &mdash; &ldquo;don't&rdquo; i &ldquo;I'm&rdquo; su skra&#263;enice.</div><div class="q-opt" onclick="ans(this,'q15',true)" tabindex="0"><span class="q-letter">D</span> Tri &mdash; &ldquo;don't&rdquo;, &ldquo;I'm&rdquo; i &ldquo;I'd&rdquo; su skra&#263;enice koje se ne koriste u formalnom pismu.</div></div><div class="q-expl" id="q15e" aria-live="polite"></div></div>
<div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/15</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:24px 28px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:340px;text-align:center">
        <div style="font-size:36px;margin-bottom:12px">&#x1F3C6;</div>
        <div style="font-size:17px;font-weight:700;color:var(--green);margin-bottom:8px">Skripta kompletna!</div>
        <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.6">Prošao si glavnih 12 poglavlja (+ 3 bonus)<br>engleski ni&#382;a razina &middot; maturiraj.hr<br><br><span style="color:var(--lime)">Sretno na maturi! &#x1F4AA;</span></div>
      </div>
    </div>

    <!-- FINAL CHECKLIST -->
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);padding:18px 20px;margin:24px 0">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--lime);margin-bottom:12px">// &#353;to dalje? &mdash; gramatika i vje&#353;tine zavr&#353;ene</div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:14px">
        Ch01&ndash;Ch12 pokrivaju sve &#353;to se <b>aktivno testira</b> na maturi iz engleskog (ni&#382;a razina). Ako ima&#353; jo&#353; vremena, postoje tri proširena poglavlja:
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px">
        <div style="background:var(--bg-elevated);border:1px solid var(--violet-border);border-radius:var(--r3);padding:11px 13px;cursor:pointer" onclick="window.location='chapter13.html'">
          <div style="font-family:var(--mono);font-size:9px;color:var(--violet);font-weight:700;margin-bottom:4px">CH13 &mdash; opcionalno</div>
          <div style="font-size:12px;font-weight:600;color:var(--t1)">Reported Speech</div>
          <div style="font-size:11px;color:var(--t3);margin-top:3px">1&ndash;3 pitanja na ispitu</div>
        </div>
        <div style="background:var(--bg-elevated);border:1px solid var(--violet-border);border-radius:var(--r3);padding:11px 13px;cursor:pointer" onclick="window.location='chapter14.html'">
          <div style="font-family:var(--mono);font-size:9px;color:var(--violet);font-weight:700;margin-bottom:4px">CH14 &mdash; opcionalno</div>
          <div style="font-size:12px;font-weight:600;color:var(--t1)">Articles &amp; Determiners</div>
          <div style="font-size:11px;color:var(--t3);margin-top:3px">1&ndash;2 pitanja na ispitu</div>
        </div>
        <div style="background:var(--bg-elevated);border:1px solid var(--violet-border);border-radius:var(--r3);padding:11px 13px;cursor:pointer" onclick="window.location='chapter15.html'">
          <div style="font-family:var(--mono);font-size:9px;color:var(--violet);font-weight:700;margin-bottom:4px">CH15 &mdash; opcionalno</div>
          <div style="font-size:12px;font-weight:600;color:var(--t1)">Comparatives &amp; Tags</div>
          <div style="font-size:11px;color:var(--t3);margin-top:3px">1&ndash;2 pitanja na ispitu</div>
        </div>
      </div>
      <div style="padding:8px 12px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r2);font-size:12.5px;color:var(--amber)">
        &#x26A0; Ima&#353; manje od 1 tjedna? Preskoči Ch13&ndash;15 i fokusiraj se na ponavljanje Ch01&ndash;07 + ovaj finalni checklist.
      </div>
    </div>

<hr class="divider">
    <div class="sec-label">// &#x2713; finalni checklist &mdash; za dan ispita</div>
    <div class="final-checklist">
      <div class="fc-title">&#x1F9E0; Dan ispita &mdash; sve taktike u jednom popisu</div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Pitanja PRVO</b> &mdash; pro&#269;itaj sva pitanja i opcije prije teksta/audioa (ch09, ch11, ch12)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Apsolutne tvrdnje</b> &mdash; all/never/always bez dokaza &rarr; eliminiraj odmah (ch09, ch12)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Parafraziranje</b> &mdash; to&#269;an odgovor = isti smisao, razli&#269;ite rije&#269;i (ch09, ch11, ch12)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Kvantifikatori</b> &mdash; most &#x2260; all &#x2260; many &#x2260; some &mdash; provjeri uvijek (ch09, ch12)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Gramatika: odmah eliminiraj</b> &mdash; cans &middot; must to &middot; will u if &middot; was wrote &middot; must been (ch01&ndash;ch07)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Listening ispravka</b> &mdash; zadnji podatak je uvijek to&#269;an (ch11)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Pisanje: zaklju&#269;ak</b> &mdash; nikad novi argument &middot; signal words min. 3 &middot; bez skra&#263;enica (ch10)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Educated guess</b> &mdash; eliminiraj 2, biraj od 2 &middot; nikad prazno! (ch09, ch11, ch12)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Signal words</b> &mdash; However (kontrast) &middot; Furthermore (dodavanje) &middot; Therefore (uzrok) &middot; To sum up (kraj) (ch10, ch11)</div></div>
      <div class="fc-item"><div class="fc-check">&#x2713;</div><div class="fc-text"><b>Pisanje: broj rije&#269;i</b> &mdash; 120&ndash;180 &middot; provjeri na kraju (ch10)</div></div>
    </div>

        <hr class="divider">
    <div class="sec-label">// &#x1F9E9; integrirani vje&#382;bovnik &mdash; sva gramatika u jednom</div>
    <div class="quiz-intro"><strong>// cross-chapter quiz</strong> &middot; 15 pitanja koja mije&#353;aju Ch01&ndash;Ch07. Cilj: <strong>12/15</strong> ili bolje.</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>

    <div class="q-block" id="ix1"><div class="q-head"><div class="q-meta">01 / 15 &middot; Ch01 + Ch03 &middot; PS vs PP</div><div class="q-text">She _______ in Zagreb all her life. She loves the city.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix1',false)" tabindex="0"><span class="q-letter">A</span> lived</div><div class="q-opt" onclick="ixAns(this,'ix1',true)" tabindex="0"><span class="q-letter">B</span> has lived</div><div class="q-opt" onclick="ixAns(this,'ix1',false)" tabindex="0"><span class="q-letter">C</span> is living</div><div class="q-opt" onclick="ixAns(this,'ix1',false)" tabindex="0"><span class="q-letter">D</span> lives</div></div><div class="q-expl" id="ix1e" aria-live="polite"></div></div>

    <div class="q-block" id="ix2"><div class="q-head"><div class="q-meta">02 / 15 &middot; Ch02 &middot; Past Simple irregular</div><div class="q-text">When I _______ the door, I _______ that someone had been inside.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix2',false)" tabindex="0"><span class="q-letter">A</span> opened … saw</div><div class="q-opt" onclick="ixAns(this,'ix2',true)" tabindex="0"><span class="q-letter">B</span> opened … saw</div><div class="q-opt" onclick="ixAns(this,'ix2',false)" tabindex="0"><span class="q-letter">C</span> open … see</div><div class="q-opt" onclick="ixAns(this,'ix2',false)" tabindex="0"><span class="q-letter">D</span> was opening … was seeing</div></div><div class="q-expl" id="ix2e" aria-live="polite"></div></div>

    <div class="q-block" id="ix3"><div class="q-head"><div class="q-meta">03 / 15 &middot; Ch01 &middot; State verb zamka</div><div class="q-text">This coffee _______ amazing! What brand is it?</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix3',false)" tabindex="0"><span class="q-letter">A</span> is tasting</div><div class="q-opt" onclick="ixAns(this,'ix3',true)" tabindex="0"><span class="q-letter">B</span> tastes</div><div class="q-opt" onclick="ixAns(this,'ix3',false)" tabindex="0"><span class="q-letter">C</span> has tasted</div><div class="q-opt" onclick="ixAns(this,'ix3',false)" tabindex="0"><span class="q-letter">D</span> tasted</div></div><div class="q-expl" id="ix3e" aria-live="polite"></div></div>

    <div class="q-block" id="ix4"><div class="q-head"><div class="q-meta">04 / 15 &middot; Ch04 &middot; will vs going to</div><div class="q-text">'Oh no, I forgot my wallet!' — 'Don't worry, I _______ pay for you.'</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix4',true)" tabindex="0"><span class="q-letter">A</span> 'll</div><div class="q-opt" onclick="ixAns(this,'ix4',false)" tabindex="0"><span class="q-letter">B</span> 'm going to</div><div class="q-opt" onclick="ixAns(this,'ix4',false)" tabindex="0"><span class="q-letter">C</span> 'm paying</div><div class="q-opt" onclick="ixAns(this,'ix4',false)" tabindex="0"><span class="q-letter">D</span> will to</div></div><div class="q-expl" id="ix4e" aria-live="polite"></div></div>

    <div class="q-block" id="ix5"><div class="q-head"><div class="q-meta">05 / 15 &middot; Ch05 &middot; mustn't vs don't have to</div><div class="q-text">The museum is free on Sundays — you _______ pay to enter.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix5',false)" tabindex="0"><span class="q-letter">A</span> mustn't</div><div class="q-opt" onclick="ixAns(this,'ix5',true)" tabindex="0"><span class="q-letter">B</span> don't have to</div><div class="q-opt" onclick="ixAns(this,'ix5',false)" tabindex="0"><span class="q-letter">C</span> can't</div><div class="q-opt" onclick="ixAns(this,'ix5',false)" tabindex="0"><span class="q-letter">D</span> shouldn't</div></div><div class="q-expl" id="ix5e" aria-live="polite"></div></div>

    <div class="q-block" id="ix6"><div class="q-head"><div class="q-meta">06 / 15 &middot; Ch06 &middot; Conditional 1 zamka</div><div class="q-text">If she _______ harder, she will definitely pass the exam.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix6',false)" tabindex="0"><span class="q-letter">A</span> will study</div><div class="q-opt" onclick="ixAns(this,'ix6',true)" tabindex="0"><span class="q-letter">B</span> studies</div><div class="q-opt" onclick="ixAns(this,'ix6',false)" tabindex="0"><span class="q-letter">C</span> studied</div><div class="q-opt" onclick="ixAns(this,'ix6',false)" tabindex="0"><span class="q-letter">D</span> would study</div></div><div class="q-expl" id="ix6e" aria-live="polite"></div></div>

    <div class="q-block" id="ix7"><div class="q-head"><div class="q-meta">07 / 15 &middot; Ch07 &middot; Pasiv — was/were</div><div class="q-text">The new school buildings _______ last year by a local company.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix7',false)" tabindex="0"><span class="q-letter">A</span> was built</div><div class="q-opt" onclick="ixAns(this,'ix7',true)" tabindex="0"><span class="q-letter">B</span> were built</div><div class="q-opt" onclick="ixAns(this,'ix7',false)" tabindex="0"><span class="q-letter">C</span> are built</div><div class="q-opt" onclick="ixAns(this,'ix7',false)" tabindex="0"><span class="q-letter">D</span> have been built</div></div><div class="q-expl" id="ix7e" aria-live="polite"></div></div>

    <div class="q-block" id="ix8"><div class="q-head"><div class="q-meta">08 / 15 &middot; Ch02 + Ch03 &middot; PS vs PP</div><div class="q-text">I _______ Tom three times this week. We _______ last week too.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix8',true)" tabindex="0"><span class="q-letter">A</span> have seen … met</div><div class="q-opt" onclick="ixAns(this,'ix8',false)" tabindex="0"><span class="q-letter">B</span> saw … have met</div><div class="q-opt" onclick="ixAns(this,'ix8',false)" tabindex="0"><span class="q-letter">C</span> have seen … have met</div><div class="q-opt" onclick="ixAns(this,'ix8',false)" tabindex="0"><span class="q-letter">D</span> saw … met</div></div><div class="q-expl" id="ix8e" aria-live="polite"></div></div>

    <div class="q-block" id="ix9"><div class="q-head"><div class="q-meta">09 / 15 &middot; Ch05 &middot; Modal — logički zaključak</div><div class="q-text">She knows every word of every song. She _______ be a huge fan.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix9',false)" tabindex="0"><span class="q-letter">A</span> should</div><div class="q-opt" onclick="ixAns(this,'ix9',false)" tabindex="0"><span class="q-letter">B</span> might</div><div class="q-opt" onclick="ixAns(this,'ix9',true)" tabindex="0"><span class="q-letter">C</span> must</div><div class="q-opt" onclick="ixAns(this,'ix9',false)" tabindex="0"><span class="q-letter">D</span> can</div></div><div class="q-expl" id="ix9e" aria-live="polite"></div></div>

    <div class="q-block" id="ix10"><div class="q-head"><div class="q-meta">10 / 15 &middot; Ch06 &middot; Conditional 2</div><div class="q-text">If I _______ you, I _______ apologise immediately.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix10',false)" tabindex="0"><span class="q-letter">A</span> am … will</div><div class="q-opt" onclick="ixAns(this,'ix10',false)" tabindex="0"><span class="q-letter">B</span> was … would</div><div class="q-opt" onclick="ixAns(this,'ix10',true)" tabindex="0"><span class="q-letter">C</span> were … would</div><div class="q-opt" onclick="ixAns(this,'ix10',false)" tabindex="0"><span class="q-letter">D</span> were … will</div></div><div class="q-expl" id="ix10e" aria-live="polite"></div></div>

    <div class="q-block" id="ix11"><div class="q-head"><div class="q-meta">11 / 15 &middot; Ch07 &middot; Modal pasiv</div><div class="q-text">This form _______ in black ink only. Please do not use pencil.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix11',false)" tabindex="0"><span class="q-letter">A</span> must been completed</div><div class="q-opt" onclick="ixAns(this,'ix11',false)" tabindex="0"><span class="q-letter">B</span> must complete</div><div class="q-opt" onclick="ixAns(this,'ix11',true)" tabindex="0"><span class="q-letter">C</span> must be completed</div><div class="q-opt" onclick="ixAns(this,'ix11',false)" tabindex="0"><span class="q-letter">D</span> must have been completed</div></div><div class="q-expl" id="ix11e" aria-live="polite"></div></div>

    <div class="q-block" id="ix12"><div class="q-head"><div class="q-meta">12 / 15 &middot; Ch01 + Ch04 &middot; PC za budućnost vs will</div><div class="q-text">Look at those clouds — it _______ rain. We should take an umbrella.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix12',false)" tabindex="0"><span class="q-letter">A</span> will</div><div class="q-opt" onclick="ixAns(this,'ix12',true)" tabindex="0"><span class="q-letter">B</span> is going to</div><div class="q-opt" onclick="ixAns(this,'ix12',false)" tabindex="0"><span class="q-letter">C</span> is raining</div><div class="q-opt" onclick="ixAns(this,'ix12',false)" tabindex="0"><span class="q-letter">D</span> rains</div></div><div class="q-expl" id="ix12e" aria-live="polite"></div></div>

    <div class="q-block" id="ix13"><div class="q-head"><div class="q-meta">13 / 15 &middot; Ch03 &middot; PP — for/since</div><div class="q-text">He _______ this company _______ he graduated in 2018.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix13',false)" tabindex="0"><span class="q-letter">A</span> works … for</div><div class="q-opt" onclick="ixAns(this,'ix13',false)" tabindex="0"><span class="q-letter">B</span> worked … since</div><div class="q-opt" onclick="ixAns(this,'ix13',true)" tabindex="0"><span class="q-letter">C</span> has worked … since</div><div class="q-opt" onclick="ixAns(this,'ix13',false)" tabindex="0"><span class="q-letter">D</span> has worked … for</div></div><div class="q-expl" id="ix13e" aria-live="polite"></div></div>

    <div class="q-block" id="ix14"><div class="q-head"><div class="q-meta">14 / 15 &middot; Ch02 &middot; when/while + Past</div><div class="q-text">_______ she was cooking dinner, the phone rang.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix14',false)" tabindex="0"><span class="q-letter">A</span> When</div><div class="q-opt" onclick="ixAns(this,'ix14',true)" tabindex="0"><span class="q-letter">B</span> While</div><div class="q-opt" onclick="ixAns(this,'ix14',false)" tabindex="0"><span class="q-letter">C</span> During</div><div class="q-opt" onclick="ixAns(this,'ix14',false)" tabindex="0"><span class="q-letter">D</span> As soon as</div></div><div class="q-expl" id="ix14e" aria-live="polite"></div></div>

    <div class="q-block" id="ix15"><div class="q-head"><div class="q-meta">15 / 15 &middot; Ch05 + Ch07 &middot; Modal pasiv negativ</div><div class="q-text">Phones _______ in the exam hall. Please leave them outside.</div></div><div class="q-opts"><div class="q-opt" onclick="ixAns(this,'ix15',false)" tabindex="0"><span class="q-letter">A</span> shouldn't use</div><div class="q-opt" onclick="ixAns(this,'ix15',false)" tabindex="0"><span class="q-letter">B</span> mustn't use</div><div class="q-opt" onclick="ixAns(this,'ix15',true)" tabindex="0"><span class="q-letter">C</span> cannot be used</div><div class="q-opt" onclick="ixAns(this,'ix15',false)" tabindex="0"><span class="q-letter">D</span> must not use</div></div><div class="q-expl" id="ix15e" aria-live="polite"></div></div>

    <div class="score-box" id="ix-score" aria-live="polite" style="display:none">
      <div class="score-num" id="ix-num">0/15</div>
      <div class="score-lbl" id="ix-lbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryIX()">&#x21BA; Ponovi integrirani quiz</button>
    </div>

<!-- CTA -->
    <div class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim NCVVO zadacima</div><div class="cta-sub">Svi zadaci 2010.&ndash;2026. uz detaljna obja&#353;njenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>

    <!-- KEY POINTS -->
    <div class="matura">
      <div class="matura-hd">&#x2B50; master summary &mdash; sve teme</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>ch01&ndash;03:</b> PS/PP razlika &middot; for vs since &middot; been vs gone &middot; signal words za vremena</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch04:</b> will (spontana odluka) vs going to (plan) &middot; will = modalni</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch05:</b> mustn't &#x2260; don't have to &middot; naked inf. &middot; modal+be (ne been) &middot; has to (3.l.jed.)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch06:</b> C1 (If+PS&rarr;will) &middot; C2 (If+PastS&rarr;would) &middot; nikad will u if &middot; were za sve &middot; unless=if not</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch07:</b> be+PP &middot; was/were &middot; has/have been &middot; modal+be &middot; is/are being &middot; by+agent</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch08:</b> make/do/get/have &middot; apply FOR &middot; phrasal verbs (partikel!) &middot; raise vs rise</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch09:</b> pitanja PRVO &middot; skim+scan &middot; parafraziranje &middot; T/F dokaz &middot; zna&#269;enje iz konteksta</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch10:</b> struktura &middot; signal words &middot; zaklju&#269;ak=summary &middot; formalno bez skra&#263;enica &middot; 120&ndash;180 rije&#269;i</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch11:</b> pitanja PRVO &middot; ispravka=zadnji podatak &middot; iste rije&#269;i=distraktor &middot; blje&#353;ke=klju&#269;ne</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>ch12:</b> eliminacija &middot; parafraziranje &middot; apsolutne tvrdnje &middot; educated guess &middot; nikad prazno</span></li>
      </ul>
    </div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint &mdash; finale</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koja je najuniverzalnija MCQ taktika?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Eliminacija + parafraziranje &mdash; vrijedi za sve tipove MCQ.</b><br>Eliminiraj: apsolutne tvrdnje &middot; opcije bez dokaza &middot; gramatičke gre&#353;ke<br>Prepoznaj: to&#269;an odgovor = parafraziran (isti smisao, razli&#269;ite rije&#269;i)<br>Nikad: ne ostavljaj prazno &middot; ne biraj po du&#382;ini opcije &middot; ne biraj jer "zvu&#269;i logički"</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koje su 3 gramatičke teme s najvi&#353;e MCQ zamki?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>1. Conditionals (ch06)</b>: will u if klauzuli &middot; was umjesto were &middot; C1+would/C2+will mije&#353;anje<br><b>2. Modal glagoli (ch05)</b>: mustn't vs don't have to &middot; modal+be (ne been) &middot; cans/musts<br><b>3. Pasiv (ch07)</b>: PS oblik umjesto PP &middot; has repaired (bez been) &middot; must been</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako pristupiti ispitu u 3 koraka?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Korak 1: Pregled (5 min)</b> &mdash; listaj cijeli ispit, vidi koje su sekcije i koliko bodova nosi svaka.<br><b>Korak 2: Rad (ispitno vrijeme)</b> &mdash; pitanja PRVO, eliminacija, parafraziranje, nikad prazno.<br><b>Korak 3: Provjera (zadnjih 5 min)</b> &mdash; prazna mjesta, skra&#263;enice u formalnom pisanju, educated guess.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>&#352;to ako ne znam odgovor na pitanje?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Nikad ne ostavljaj prazno &mdash; uvijek educated guess:</b><br>1. Eliminiraj apsolutne tvrdnje (all, never, always)<br>2. Eliminiraj opcije s o&#269;itim gre&#353;kama u gramatici<br>3. Eliminiraj opcije bez dokaza u tekstu<br>4. Od preostalih: biraj onu koja je parafrazirana i nema apsolutnih tvrdnji<br>5. Zaokru&#382;i i nastavi &mdash; max 30 sekundi po pitanju!</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Sve si nau&#269;io &mdash; &#353;to je sljede&#263;i korak?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Vje&#382;baj s autenti&#269;nim zadacima &mdash; teorija bez prakse nije dovoljna!</b><br><br>1. Discere archive na maturiraj.hr &mdash; svi NCVVO zadaci 2010.&ndash;2026.<br>2. Radi cijele testove pod vremenskim uvjetima (kao pravi ispit)<br>3. Nakon svakog testa: analiziraj gre&#353;ke &rarr; vrati se na relevantno poglavlje<br>4. Ponovi finale quiz ch12 jos jednom kad pro&#273;e tjedan dana<br><br><b style="color:var(--lime)">Sretno na maturi! Pripremio si se dobro. &#x1F4AA;</b></div></div>

    <!-- NEXT STEPS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// ponovi poglavlje</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px">
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;cursor:pointer;transition:all .15s;text-align:center" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter01.html'"><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">ch01&ndash;03</div><div style="font-size:12px;font-weight:600;color:var(--sky);margin-top:3px">Vremena</div></div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;cursor:pointer;transition:all .15s;text-align:center" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter05.html'"><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">ch05</div><div style="font-size:12px;font-weight:600;color:var(--lime);margin-top:3px">Modali</div></div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;cursor:pointer;transition:all .15s;text-align:center" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter06.html'"><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">ch06</div><div style="font-size:12px;font-weight:600;color:var(--violet);margin-top:3px">Conditionals</div></div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;cursor:pointer;transition:all .15s;text-align:center" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter07.html'"><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">ch07</div><div style="font-size:12px;font-weight:600;color:var(--sky);margin-top:3px">Pasiv</div></div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;cursor:pointer;transition:all .15s;text-align:center" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter09.html'"><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">ch09</div><div style="font-size:12px;font-weight:600;color:var(--amber);margin-top:3px">&#268;itanje</div></div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;cursor:pointer;transition:all .15s;text-align:center" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter10.html'"><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">ch10</div><div style="font-size:12px;font-weight:600;color:var(--lime);margin-top:3px">Pisanje</div></div>
      </div>
    </div>

    
<!-- ═══ PREMIUM GATE: AI PROFESSOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">&#129302;</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO &middot; 200 msg/dan</span></div>
      <div class="pg-ai-sub">Imaš pitanje o gramatici ili ispitnoj strategiji? Pitaj me odmah — objasnim korak po korak.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Kako vježbati gramatiku učinkovito?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Koje su najčešće greške na ispitu?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Plan učenja za zadnji tjedan</span>
  </div>
  <div class="pg-ai-bubble">
    Gramatika, vokabular, ispitna taktika — <strong>AI profesor odgovara 24/7</strong><span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora &#8594;</button>
</div>

<!-- ═══ PREMIUM GATE: DISCERE SIMULATOR ═══ -->
<div class="pg-disc">
  <div class="pg-disc-hd">
    <div class="pg-disc-ico">&#127919;</div>
    <div style="flex:1;min-width:0">
      <div class="pg-disc-ttl">Discere Simulator <span class="pg-disc-badge">STANDARD</span></div>
      <div class="pg-disc-sub">Stvarni NCVVO zadaci iz arhive uz tajmer i detaljni feedback. Više od 35+ ENJ niža ispita.</div>
    </div>
  </div>
  <div class="pg-disc-stats">
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">35+</span><span class="pg-disc-stat-l">ispita ENJ niža</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">2010</span><span class="pg-disc-stat-l">–2026 NCVVO</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">9,99&#8364;</span><span class="pg-disc-stat-l">/mj</span></div>
  </div>
  <button class="pg-disc-cta" onclick="openDiscereModal()">Pokreni simulator &#8594;</button>
</div>

<div class="nav-row">
      <a href="chapter11.html" class="nav-btn">&larr; Chapter 11</a>
      <a href="https://maturiraj.hr" class="nav-btn primary">Discere archive &rarr;</a>
    </div>
  </div>
</div>
</main>
</div>
<!-- ═══ PAYWALL MODAL ═══ -->
<div class="pw-overlay" id="pw-modal" onclick="if(event.target===this)closePwModal()" role="dialog" aria-modal="true">
  <div class="pw-card">
    <button class="pw-close" onclick="closePwModal()" aria-label="Zatvori">&#215;</button>
    <div class="pw-title">&#9889; Otključaj <span style="background:linear-gradient(135deg,#9BF73A,#38BDF8);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Pro</span></div>
    <div class="pw-sub" id="pw-sub-txt">Pristupi AI profesoru, Discere simulatoru i personaliziranom planu učenja. Otkazivanje bilo kad.</div>
    <div class="pw-tiers">
      <div class="pw-tier">
        <div class="pw-tier-lbl">Standard</div>
        <div class="pw-tier-price">9,99&#8364;<span class="per"> /mj</span></div>
        <div class="pw-tier-feat">&#8226; Svi Discere simulatori<br>&#8226; Sva gradiva<br>&#8226; AI: 30 msg/dan</div>
      </div>
      <div class="pw-tier featured">
        <div class="pw-tier-lbl">Pro</div>
        <div class="pw-tier-price">19,99&#8364;<span class="per"> /mj</span></div>
        <div class="pw-tier-feat">&#8226; Sve iz Standard<br>&#8226; AI: 200 msg/dan<br>&#8226; AI plan učenja<br>&#8226; Prijemni priprema</div>
      </div>
    </div>
    <button class="pw-cta pro-btn" onclick="goCheckout()">Nastavi s Pro &#8594;</button>
    <div class="pw-note"><strong>7 dana besplatno</strong> &middot; otkaži bilo kada &middot; bez obveze</div>
  </div>
</div>
<!-- ═══ DISCERE MODAL ═══ -->
<div class="pw-overlay" id="disc-modal" onclick="if(event.target===this)closeDiscModal()" role="dialog" aria-modal="true">
  <div class="pw-card" style="border-color:rgba(155,247,58,0.3)">
    <button class="pw-close" onclick="closeDiscModal()">&#215;</button>
    <div class="pw-title">&#127919; Discere <span style="background:linear-gradient(135deg,#9BF73A,#4ADE80);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Simulator</span></div>
    <div class="pw-sub">Simuliraj pravi ENJ niža ispit uz NCVVO arhivu zadataka. Dostupno uz Standard plan.</div>
    <div class="pw-tiers">
      <div class="pw-tier featured"><div class="pw-tier-lbl">Standard</div><div class="pw-tier-price">9,99&#8364;<span class="per"> /mj</span></div></div>
      <div class="pw-tier"><div class="pw-tier-lbl">Pro</div><div class="pw-tier-price">19,99&#8364;<span class="per"> /mj</span></div></div>
    </div>
    <button class="pw-cta disc-btn" onclick="goCheckout()">Otključaj Discere &#8594;</button>
    <div class="pw-note"><strong>7 dana besplatno</strong> &middot; otkaži bilo kada</div>
  </div>
</div>
`; // end CH12_BODY

const CH12_JS = `// TRACKER: bilježi pogreške
function trackAnswer(chKey, ok){
  try{
    var wa=JSON.parse(localStorage.getItem('maturix_weak')||'{}');
    if(!wa[chKey]) wa[chKey]={w:0,t:0};
    wa[chKey].t++;
    if(!ok) wa[chKey].w++;
    localStorage.setItem('maturix_weak',JSON.stringify(wa));
  }catch(e){}
}
var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  window.scrollTo({top:0,behavior:'smooth'});
}

// FINAL MCQ QUIZ
var answered={},correct=0,total=15;
var E={
  q1:{c:"✓ Točno. Uvijek pitanja PRVO — podvuci ključne riječi. Tada znaš što tražiš u tekstu/audiou.",w:"✗ Netočno. Uvijek pitanja PRVO, pa čitanje/slušanje. Točan odgovor: A."},
  q2:{c:"✓ Točno. Točan MCQ odgovor je uvijek parafraziran — iste riječi iz teksta/pitanja = distraktor (zamka).",w:"✗ Netočno. Točan odgovor je parafraziran — isti smisao, različite riječi. Iste riječi = zamka. Točan odgovor: C."},
  q3:{c:"✓ Točno. C1 Conditional: If + Present Simple, will + infinitiv. Nikad will u if klauzuli! If it rains (PS), we will cancel.",w:"✗ Netočno. C1 Conditional zahtijeva Present Simple u if klauzuli — ne will, ne would, ne past. If it RAINS → will cancel. Točan odgovor: C."},
  q4:{c:"✓ Točno. Make a great effort = uložiti trud. Kolokacija: make + effort/mistake/decision/progress. Do/get/have effort — ne postoje.",w:"✗ Netočno. Kolokacija great effort ide uz MAKE. Zapamti: make an effort, make a mistake, make progress. Točan odgovor: A."},
  q5:{c:"✓ Točno. Past Simple Passive = was/were + past participle. was built (PP od build) = točno. has built (active), was build (kriva forma), is built (present) — sve krivo.",w:"✗ Netočno. Past Passive = was/were + PAST PARTICIPLE. build → built (nepravilni). was built = točno. Točan odgovor: C."},
  q6:{c:"✓ Točno. 'Most' ≠ 'all', 'some' ≠ 'many' ≠ 'most'. Kvantifikatori su ključni — jedna promjena mijenja točnost tvrdnje.",w:"✗ Netočno. Kvantifikatori su ključni: most ≠ all, some ≠ many. Provjeri uvijek točan kvantifikator. Točan odgovor: B."},
  q7:{c:"✓ Točno. Distraktor koristi informacije iz teksta ali ih netočno kombinira ili prebacuje s jedne osobe/mjesta na drugu.",w:"✗ Netočno. 'Djelomično točan' distraktor kombinira točne informacije na krivi način. Točan odgovor: A."},
  q8:{c:"✓ Točno. Opposition: residents FEARED → negativan stav = otpor i protivljenje. Strong opposition = jak otpor prema nečemu. Kontekst određuje značenje.",w:"✗ Netočno. Kontekst: residents feared → negativno = otpor/protivljenje. Strong opposition = jak otpor. Točan odgovor: C."},
  q9:{c:"✓ Točno. Listening ispravka: uvijek zadnji podatak. Govornik se ispravlja namjerno — to je zamka za one koji brzo zapišu prvi podatak.",w:"✗ Netočno. Ispravka = zadnji podatak je točan. 'Actually/I mean/Sorry' signalizira ispravku. Točan odgovor: C."},
  q10:{c:"✓ Točno. Za educated guess: eliminiraj apsolutne tvrdnje, eliminiraj što sigurno nije u tekstu, biraj između preostalih — statistički bolje od praznog.",w:"✗ Netočno. Educated guess: eliminiraj što možeš, biraj između preostalih. Prazno = sigurno 0. Točan odgovor: A."},
  q11:{c:"✓ Točno. Signal za zaključak (In conclusion, To sum up, Finally) = pojačaj pažnju — dolaze ključne informacije i summary. Ne prestaj slušati!",w:"✗ Netočno. 'To sum up' = signal zaključka — dolaze ključne info, pojačaj pažnju! Točan odgovor: B."},
  q12:{c:"✓ Točno. MCQ za pisanje: 'In conclusion' + novi argument = greška. Zaključak = samo summary + restate teze, nikad nova informacija.",w:"✗ Netočno. Zaključak u pisanju nikad ne uvodi novu informaciju. Točan odgovor: D."},
  q13:{c:"✓ Točno. 'Resign' = 'leave/quit' (sinonim) · 'commute was stressful' = 'travelling to work was tiring' (parafraziranje). Opcija D je zamka — kopira tačno 'commute was stressful' iz audio zapisa, ali u listening-u tačan odgovor je UVIJEK parafraziran, ne kopija.",w:"✗ Netočno. U listening MCQ tačan odgovor je uvijek parafraziran — iste riječi iz audio zapisa su ZAMKA (Tip 2: iste riječi, krivo ili nije parafrazirano). Odgovor C: 'quit' = 'resign', 'travelling to work was tiring' = 'commute was stressful'."},
  q14:{c:"✓ Točno. 'Many' ≠ 'all' — apsolutna tvrdnja. Tekst/audio kaže 'many students', opcija D kaže 'all students'. Kvantifikatori su najtipičnija MCQ zamka: many/most/some/all/none — provjeri uvijek točan kvantifikator!",w:"✗ Netočno. Opcija D je kriva jer mijenja kvantifikator: 'many' → 'all'. To je Tip 1 distraktor: apsolutna tvrdnja (all/never/always) koju audio ne podržava. Odgovor C."},
  q15:{c:"✓ Točno. Formalni email: BEZ skraćenica. don't → do not · I'm → I am · I'd → I would. Sve tri su greške. Pravilo: ako pišeš formalni tekst, provjeri SVAKU skraćenicu — sve zamijeni punim oblikom.",w:"✗ Netočno. U formalnom emailu NEMA skraćenica: don't → do not, I'm → I am, I'd → I would. Sve tri su greške. Odgovor D: tri greške."}
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch12',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršeno! Sve taktike su ti jasne. Spreman si za maturu! 🎉':
      correct>=11?'Izvrsno! Još jedan korak do savršenog.':
      correct>=9?'Odlično! Sigurno si spreman.':
      correct>=7?'Good. Ponovi poglavlja s temama u kojima si griješio.':
      'Vrati se na relevantna poglavlja i ponovi strategije.';
    document.getElementById('score').classList.add('show');
    if(correct>=10){document.getElementById('completionBadge').style.display='block';tabDone[2]=true;saveProgress();document.querySelectorAll('.tab')[2].classList.add('done-tab');}
  }
}

document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2')return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){
    for(var i=0;i<QORDER.length;i++){
      if(answered[QORDER[i]]===undefined){
        var opts=document.querySelectorAll('#'+QORDER[i]+' .q-opt:not(.disabled)');
        if(opts[k-1])opts[k-1].click();break;
      }
    }
  }
});

function retryQuiz(){
  answered={};correct=0;
  QORDER.forEach(function(qid){
    var b=document.getElementById(qid);if(!b)return;
    b.querySelectorAll('.q-opt').forEach(function(o){o.classList.remove('correct','wrong','disabled')});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  document.getElementById('score').classList.remove('show');
  document.getElementById('completionBadge').style.display='none';
  tabDone[2]=false;saveProgress();
  document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}

// TACTIC DRILL
var sdAnswered={},sdCorrect=0,sdTotal=5;
function sdAns(el,id,isCorrect,correctForm){
  if(sdAnswered[id])return;
  sdAnswered[id]=true;if(isCorrect)sdCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){el.classList.add('sv-correct');if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong>';}}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong>';}}
  if(Object.keys(sdAnswered).length===sdTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=sdCorrect+'/'+sdTotal;
      document.getElementById('sv-score-lbl').textContent=sdCorrect===5?'Savršen! Taktike su ti jasne. 🎉':sdCorrect>=4?'Odlično!':sdCorrect>=3?'Dobro — ponovi taktike.':'Vrati se na Learn tab.';
      box.classList.add('show');
    }
  }
}

function toggleReveal(card){
  var isOpen=card.classList.contains('open');
  card.classList.toggle('open');
  card.setAttribute('aria-expanded',!isOpen?'true':'false');
}
function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  if(btn){btn.setAttribute('aria-expanded','true');btn.style.display='none';}
}
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}
function saveProgress(){try{localStorage.setItem('maturix_ch12_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch12_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();

// CROSS-CHAPTER INTEGRIRANI QUIZ
var ixAnswered={},ixCorrect=0,ixTotal=15;
var IXE={
  ix1:{c:"✓ Točno. 'All her life' = radnja traje od prošlosti do sad → PP. has lived + for/all her life → Ch03.",w:"✗ Netočno. 'All her life' signalizira trajanje do sadašnjosti → Present Perfect (has lived). lived = PS (završeno, s točnim vremenom). lives = PS (rutina, ne trajanje)."},
  ix2:{c:"✓ Točno. opened (PS regular) + saw (PS irregular: see→saw). Niz završenih PS radnji u prošlosti.",w:"✗ Netočno. Niz završenih PS radnji: open→opened (regular) · see→saw (irregular). Nemoj brkati: was seeing = PC (trajanje), ne ono što trebamo ovdje."},
  ix3:{c:"✓ Točno. taste = state verb (osjet okusa) → uvijek PS, nikad -ing. This coffee tastes amazing ✓ → Ch01.",w:"✗ Netočno. taste = state verb kada opisuje okus → NIKAD -ing. is tasting ✗. has tasted = PP (pogrešan kontekst). tasted = prošlost. Odgovor B."},
  ix4:{c:"✓ Točno. Spontana odluka u trenutku ('Oh no, forgot!') → will. I'll pay = odlučio sam upravo sada → Ch04.",w:"✗ Netočno. Spontana odluka u trenutku razgovora → will (ne going to). going to = plan donesen ranije. will to = ne postoji. Odgovor A."},
  ix5:{c:"✓ Točno. Ulaz je besplatan → NIJE OBVEZNO platiti → don't have to. mustn't = zabranjeno (netočno — možeš platiti, samo ne moraš) → Ch05.",w:"✗ Netočno. 'The museum is free' = nije obvezno platiti → don't have to. mustn't = zabranjeno (kao da je ilegalno platiti — logički pogrešno). Najtipičnija zamka Ch05!"},
  ix6:{c:"✓ Točno. C1: If + Present Simple → will. if klauzula NIKAD ne ide s will → if she studies ✓ → Ch06.",w:"✗ Netočno. Conditional 1: if klauzula = Present Simple (NIKAD will!). will study ✗ (najtipičnija C1 zamka). studied = C2 (nerealno). would study = C2. Odgovor B."},
  ix7:{c:"✓ Točno. 'buildings' = množina → were built (ne was built). PS pasiv množina = were + PP → Ch07.",w:"✗ Netočno. 'buildings' = množina → Past Simple pasiv množina = were built. was built = jednina (the building). are built = Present Simple pasiv (pogrešno vrijeme). Odgovor B."},
  ix8:{c:"✓ Točno. 'this week' (nije završeno) → PP (have seen). 'last week' (završeno, točno kada) → PS (met) → Ch02+03.",w:"✗ Netočno. 'this week' (još traje, neodređeno) → PP: have seen. 'last week' (specifično završeno vrijeme) → PS: met. Nikad PP s 'last week'! Odgovor A."},
  ix9:{c:"✓ Točno. Logički zaključak na temelju jakih dokaza ('knows every word') → must be. must = siguran sam na temelju dokaza → Ch05.",w:"✗ Netočno. Jaki dokazi ('zna svaku riječ svake pjesme') → logički zaključak = must. should = savjet. might = slaba mogućnost. can = sposobnost. Odgovor C."},
  ix10:{c:"✓ Točno. C2: If + were (za sve subjekte na ispitu) → would. If I were you = standardna C2 formula → Ch06.",w:"✗ Netočno. C2 formula: If + Past Simple → would. 'If I were you' = standardna C2 savjet formula. were (ne was!) za sve subjekte na pisanom ispitu. will = C1 (realno). Odgovor C."},
  ix11:{c:"✓ Točno. Modal pasiv: modal + be + PP. must be completed ✓. must been = ne postoji. must complete = aktiv → Ch07.",w:"✗ Netočno. Modal pasiv = modal + be + PP (ne been!). must be completed ✓. must been completed ✗ (been nije ispravno uz modalni). must complete = aktiv (netočno). Odgovor C."},
  ix12:{c:"✓ Točno. 'Look at those clouds' = vidljivi dokaz → predviđanje s dokazom = going to (ne will) → Ch04.",w:"✗ Netočno. Vidljivi dokaz (oblaci) → going to. will = predviđanje bez dokaza (I think, probably). is raining = sada, ne budućnost. rains = PS (rutina). Odgovor B."},
  ix13:{c:"✓ Točno. 'since he graduated' = točka u prošlosti → PP + since. has worked since 2018 → Ch03.",w:"✗ Netočno. 'since he graduated' = točka u prošlosti → PP + since. works/worked = PS (pogrešno). 'for he graduated' ne postoji — for ide s trajanjem. Odgovor C."},
  ix14:{c:"✓ Točno. 'was cooking' (dulja radnja u tijeku) → while. while + PC (trajanje). when + PS (kratka, završena) → Ch02.",w:"✗ Netočno. Dulja radnja u tijeku (was cooking) → while. When bi išao uz kratku završenu radnju. During = prijedlog (+ imenica, ne rečenica). As soon as = čim (drugačije značenje). Odgovor B."},
  ix15:{c:"✓ Točno. Pasivna konstrukcija: cannot be used. Subjekt (Phones) ne vrše radnju — radnja se vrši na njima → pasiv → Ch05+07.",w:"✗ Netočno. 'Phones' su objekt radnje (ne koriste se) → pasiv. cannot be used ✓. shouldn't use / mustn't use / must not use = aktiv s pogrešnim subjektom — kao da telefoni sami trebaju ne koristiti sebe. Odgovor C."}
};
function ixAns(el,qid,ok){
  if(ixAnswered[qid]!==undefined)return;
  ixAnswered[qid]=ok;if(ok)ixCorrect++;
  var opts=el.closest('.q-opts');
  if(opts)opts.querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){var p=el.closest('.q-opts');if(p)p.querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+IXE[qid][ok?'c':'w']+'</div>';expl.classList.add('show');}
  if(Object.keys(ixAnswered).length===ixTotal){
    document.getElementById('ix-num').textContent=ixCorrect+'/'+ixTotal;
    document.getElementById('ix-lbl').textContent=
      ixCorrect===ixTotal?'Savršeno! Cijela gramatika svladana. \\uD83C\\uDF89':
      ixCorrect>=13?'Odlično! Spreman si za maturu. \\uD83D\\uDCAA':
      ixCorrect>=11?'Dobro! Ponovi poglavlja gdje si pogriješio.':
      'Vrati se na gramatička poglavlja i ponovi.';
    var s=document.getElementById('ix-score');if(s){s.style.display='block';}
  }
}
function retryIX(){
  ixAnswered={};ixCorrect=0;
  for(var i=1;i<=15;i++){
    var qid='ix'+i;
    document.querySelectorAll('[onclick*="ixAns(this,\\''+qid+'\\'"]').forEach(function(o){o.classList.remove('correct','wrong','disabled');});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  }
  var s=document.getElementById('ix-score');if(s){s.style.display='none';}
}


// WEAK AREAS TRACKER — prikazivanje u Ch12
var CH_NAMES={
  ch01:'Present Simple & Continuous',ch02:'Past Simple & Continuous',
  ch03:'Present Perfect',ch04:'Future: will & going to',
  ch05:'Modal glagoli',ch06:'Conditionals 0, 1, 2',
  ch07:'Pasiv',ch08:'Vokabular',
  ch09:'Čitanje',ch10:'Pisanje',
  ch11:'Listening',ch12:'MCQ taktika'
};
function renderWeakAreas(){
  var el=document.getElementById('weak-body');
  if(!el)return;
  try{
    var wa=JSON.parse(localStorage.getItem('maturix_weak')||'{}');
    var keys=Object.keys(wa).filter(function(k){return wa[k].t>0;});
    if(!keys.length){el.innerHTML='<div style="font-size:13px;color:var(--t3);text-align:center;padding:8px 0">Rješavaj quizove u poglavljima da vidiš svoja slaba područja.</div>';return;}
    keys.sort(function(a,b){var ra=wa[a].t?wa[a].w/wa[a].t:0,rb=wa[b].t?wa[b].w/wa[b].t:0;return rb-ra;});
    var html='<div style="display:grid;gap:7px;">';
    keys.forEach(function(k){
      var d=wa[k],pct=d.t?Math.round((d.w/d.t)*100):0;
      var col=pct>=60?'var(--red)':pct>=30?'var(--amber)':'var(--lime)';
      var bg=pct>=60?'var(--red-dim)':pct>=30?'var(--amber-dim)':'var(--lime-dim)';
      html+='<div style="display:flex;align-items:center;gap:10px;padding:8px 10px;background:'+bg+';border-radius:var(--r2);">';
      html+='<div style="font-size:12px;color:'+col+';font-family:var(--mono);font-weight:700;min-width:36px">'+pct+'%</div>';
      html+='<div style="flex:1"><div style="font-size:13px;color:var(--t1);font-weight:500">'+(CH_NAMES[k]||k)+'</div>';
      html+='<div style="font-size:11px;color:var(--t3)">'+d.w+' pogrešaka od '+d.t+' pitanja</div></div>';
      html+='<div style="height:4px;width:50px;background:var(--bd);border-radius:2px;overflow:hidden;margin-right:4px"><div style="height:100%;width:'+pct+'%;background:'+col+';"></div></div>';
      html+='<button data-k="'+k+'" onclick="resetOneCh(this.dataset.k)" style="font-family:var(--mono);font-size:9px;padding:2px 7px;color:var(--t3);cursor:pointer;border-radius:var(--r2);border:1px solid var(--bd);background:transparent;flex-shrink:0">&#x21BA;</button>';
      html+='</div>';
    });
    html+='</div>';
    el.innerHTML=html;
  }catch(e){el.innerHTML='<div style="font-size:13px;color:var(--t3)">Nema podataka.</div>';}
}
function clearWeakData(){
  try{localStorage.removeItem('maturix_weak');}catch(e){}
  renderWeakAreas();
}
function resetOneCh(chKey){
  try{
    var wa=JSON.parse(localStorage.getItem('maturix_weak')||'{}');
    delete wa[chKey];
    localStorage.setItem('maturix_weak',JSON.stringify(wa));
  }catch(e){}
  renderWeakAreas();
}
document.addEventListener('DOMContentLoaded',renderWeakAreas);
// ═══ PREMIUM GATES ═══
function openPaywall(feature){
  var sub=document.getElementById('pw-sub-txt');
  if(sub){var msgs={'ai':'AI profesor objašnjava gramatiku, ispravlja greške i sastavlja plan učenja prilagođen tebi.','default':'Pristupi AI profesoru, Discere simulatoru i personaliziranom planu učenja.'};sub.textContent=msgs[feature]||msgs['default'];}
  var m=document.getElementById('pw-modal');if(m)m.classList.add('show');
}
function closePwModal(){var m=document.getElementById('pw-modal');if(m)m.classList.remove('show');}
function openDiscereModal(){var m=document.getElementById('disc-modal');if(m)m.classList.add('show');}
function closeDiscModal(){var m=document.getElementById('disc-modal');if(m)m.classList.remove('show');}
function goCheckout(){
  closePwModal();closeDiscModal();
  if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/pro'},'*');}
}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closePwModal();closeDiscModal();}});
`; // end CH12_JS
