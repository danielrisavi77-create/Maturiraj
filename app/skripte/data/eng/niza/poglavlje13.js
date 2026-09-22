// Maturiraj.hr — Engleski niža razina · Poglavlje 13
// Reported Speech
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function EngleskiNizaPoglavlje13({ onBack, onNext, onPrev, onNavigate }) {
  // Keep latest nav callbacks in ref so interceptor never goes stale
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    // 1. Inject CSS (jednom)
    const styleId = "skripta-ch13-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH13_CSS;
      document.head.appendChild(s);
    }

    // 2. Expose funkcije na window (onclick handlers trebaju globalni scope)
    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch13-js";
    scriptEl.textContent = CH13_JS;
    document.body.appendChild(scriptEl);

    // 3. Intercept chapterXX.html navigation → delegate to React
    function navInterceptor(e) {
      const el = e.target.closest('a[href], [onclick]');
      if (!el) return;
      const href = el.getAttribute('href') || '';
      const onclick = el.getAttribute('onclick') || '';
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
      if (num === 14 && nav.onNext) nav.onNext();
      else if (num === 12 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch13-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch13-root"
      dangerouslySetInnerHTML={{ __html: CH13_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH13_CSS = `/* ─── DESIGN TOKENS ──────────────────────────────────────── */
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
`;

const CH13_BODY = `<div class="shell">
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
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter12.html'"><span class="sb-dot"></span> 12 · Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 13 · Neupravni govor</div>
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
  <div class="sb-item" onclick="window.location='chapter12.html'" style="cursor:pointer"><span class="sb-dot"></span> 12 · Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item active"><span class="sb-dot"></span> 13 · Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 · Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 · Komparativ i tag pitanja</div>
  <div class="sb-footer">13 / 15 · maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span onclick="window.location='chapter12.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>grammar+</span>
    <span class="bc-sep">/</span><span class="bc-active">reported-speech</span>
  </div>

  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" onclick="switchTab(0)" tabindex="0">&#9889; 2 min<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" onclick="switchTab(1)" tabindex="0">&#128214; Learn<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" onclick="switchTab(2)" tabindex="0">&#9999;&#65039; Practice<span class="tab-check">&#10003;</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Overview</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Learn</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Practice</div>
    <div class="time-est" style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto">~35 min</div>
  </div>

  <!-- ══ LAYER 0 ══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 13 &middot; grammar+</div>
      <h1 class="hero-title">Reported <span>Speech</span></h1>
      <div class="hero-meta" style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap">
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">&#9201; ~35 min</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">ni&#382;a razina</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">13 / 15</span>
      </div>
      <p class="hero-sub">Direct → Indirect &middot; Backshift &middot; Zamjenice &middot; Reporting verbs &middot; Neizravna pitanja</p>
      <div class="progress-track"><div class="progress-bar" style="width:100%;background:linear-gradient(90deg,var(--lime),var(--sky))"></div></div>
    </div>

        <div style="margin-bottom:16px;padding:14px 18px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r3)">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--amber);margin-bottom:6px">// pro&#353;ireno gradivo &mdash; za koga je ovo?</div>
    <div style="padding:7px 12px;background:var(--bg-elevated);border-radius:var(--r2);font-size:12px;color:var(--t3);margin-top:8px;font-family:var(--mono)">&#x1F4CB; Na ispitu: reported speech se pojavljuje u <b style="color:var(--t2)">gap fill formatu</b> &mdash; nije zasebna sekcija nego dio gramatičkih zadataka.</div>

      <div style="font-size:13px;color:var(--t2);line-height:1.6">
        <b>Ch13 (Reported Speech)</b> pokriva neizravni govor i backshift glagola. Na ispitu se pojavljuje u <b>1&ndash;3 pitanja u gramatičkom dijelu</b>.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">
          &#x2713; Preporu&#269;a se ako ima&scaron; vi&scaron;e od 1 tjedna pripreme &middot;
          &#x26A0; Ako ima&scaron; manje od 1 tjedna &mdash; fokusiraj se na Ch01&ndash;Ch07 i Ch12 prvo
        </span>
      </div>
    </div>
<div class="tags">
      <span class="pill pill-lime">Backshift</span>
      <span class="pill pill-sky">Zamjenice</span>
      <span class="pill pill-violet">Reporting verbs</span>
      <span class="pill pill-amber">Indirect question</span>
      <span class="pill pill-red">Zamke</span>
    </div>

    <div class="sec-label">// at a glance &mdash; &#353;to je reported speech?</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">RS</div><div class="stat-name">Reported Statement</div><div class="stat-desc">She said she <b>was</b> tired. &mdash; backshift!</div></div>
      <div class="stat-card"><div class="stat-icon sky">RQ</div><div class="stat-name">Reported Question</div><div class="stat-desc">He asked <b>where</b> she lived &mdash; bez upitnika!</div></div>
      <div class="stat-card"><div class="stat-icon violet">RV</div><div class="stat-name">Reporting Verbs</div><div class="stat-desc">said &middot; told &middot; asked &middot; explained &middot; warned</div></div>
      <div class="stat-card"><div class="stat-icon amber">BS</div><div class="stat-name">Backshift</div><div class="stat-desc">is→was &middot; will→would &middot; can→could &middot; must→had to</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Backshift</div><div class="cv">Glagol se pomi&#269;e u pro&#353;lost: is→was &middot; will→would &middot; can→could &middot; have+PP→had+PP &middot; must→had to</div></div>
      <div class="concept-row"><div class="ck sky">Zamjenice</div><div class="cv">I→he/she &middot; my→his/her &middot; we→they &middot; here→there &middot; now→then &middot; today→that day</div></div>
      <div class="concept-row"><div class="ck violet">said vs told</div><div class="cv">said (bez objekta): She <b>said</b> she was tired. &middot; told (s objektom): She <b>told me</b> she was tired.</div></div>
      <div class="concept-row"><div class="ck amber">Indirect question</div><div class="cv">Bez upitnika! Bez inverzije: He asked <b>where she lived</b>. (ne: where did she live?)</div></div>
      <div class="concept-row"><div class="ck red">Zamka #1</div><div class="cv">&#x274C; said me &rarr; &#x2713; told me &middot; &#x274C; He asked did she live? &rarr; &#x2713; He asked where she lived.</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; panic-proof &mdash; reported speech</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Backshift PRVO</b> &mdash; is→was, will→would, can→could, have→had, must→had to</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Zamjenice</b> &mdash; I→he/she, my→his/her, we→they, here→there, now→then</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>said vs told</b> &mdash; ima li objekt? said me &#x274C; &rarr; told me &#x2713;</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Pitanja</b> &mdash; if/whether za yes/no &middot; wh-word za wh &middot; bez inverzije &middot; bez upitnika!</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Provjeri</b> &mdash; svaki glagol backshiftan? Zamjenice OK? Nema upitnika?</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>&#352;to je backshift i za&#353;to se dogodi?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Backshift = pomicanje glagola jedan korak u pro&#353;lost.</b><br><br>
      Zasto: jer reporting verb (said/told) je u pro&#353;losti &rarr; i ono &#353;to je re&#269;eno &bdquo;ide&rdquo; u pro&#353;lost.<br><br>
      is/am/are &rarr; <b>was/were</b> &middot; do/does &rarr; <b>did</b> &middot; will &rarr; <b>would</b><br>
      can &rarr; <b>could</b> &middot; have/has+PP &rarr; <b>had+PP</b> &middot; must &rarr; <b>had to</b></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>said vs told &mdash; u &#269;emu je razlika?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>said</b> = bez osobnog objekta: She <b>said</b> (that) she was tired. &#x2713;<br>
      She <b>said me</b> she was tired. &#x274C;<br><br>
      <b>told</b> = uvijek s osobnim objektom: She <b>told me</b> she was tired. &#x2713;<br>
      She <b>told</b> she was tired. &#x274C;</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako pretvoriti pitanje u neizravni govor?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Direct: "Where <b>do</b> you live?" → Reported: He asked where I <b>lived</b>.<br>3 koraka: (1) ukloni upitnike/upitni redoslijed · (2) backshift · (3) promijeni zamjenice<br>&#x274C; He asked where <b>did</b> I live. → &#x2713; He asked where I <b>lived</b>.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koje rije&#269;i se mijenjaju osim glagola?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Zamjenice:</b> I&rarr;he/she &middot; my&rarr;his/her &middot; we&rarr;they &middot; our&rarr;their<br><br>
      <b>Vremenska odrednica:</b> now&rarr;then &middot; today&rarr;that day &middot; yesterday&rarr;the day before &middot; tomorrow&rarr;the next day<br><br>
      <b>Mjesto:</b> here&rarr;there<br><br>
      &#x26A0; Na ni&#382;oj razini: fokus na glagolima i zamjenicama.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch02 &mdash; pro&#353;la vremena u reported speech</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Reported speech koristi pro&#353;la vremena iz ch02!</b><br><br>
      &bdquo;She <b>works</b> here.&rdquo; &rarr; She said she <b>worked</b> here.<br>
      &bdquo;They <b>are</b> coming.&rdquo; &rarr; He said they <b>were</b> coming.<br>
      &bdquo;I <b>have finished</b>.&rdquo; &rarr; She said she <b>had finished</b>.<br><br>
      Past Simple + Past Continuous iz ch02 su direktno upotrebljivi ovdje.</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F6A8; ako zaglavim &mdash; &#269;ini ovo</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Backshiftaj SVAKI glagol &mdash; ni&#353;ta ne smije ostati u prezentu</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Provjeri: ima li objekt? Ako da &rarr; <b>told</b>. Ako ne &rarr; <b>said</b>.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Je li pitanje? &rarr; if/whether (yes/no) ili wh-word &rarr; NEMA inverzije &rarr; NEMA upitnika</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Zamjenice: I &rarr; he/she, my &rarr; his/her, we &rarr; they</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Provjeri svaki od 4 koraka &mdash; MCQ zamke su uvijek u jednom od njih</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter12.html" class="nav-btn">&larr; Chapter 12</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — LEARN ══ -->
  <div class="layer" id="l1">

    <div class="sec-label">// formule &mdash; sve 3 situacije</div>
    <p class="prose">Reported speech ima 3 osnovne situacije: izjava, wh-pitanje, yes/no pitanje. Svaka ima svoju formulu.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">RS</div>
        <div><div class="gram-title">Reported Statement &mdash; izjava</div><div class="gram-sub">said &middot; told &middot; explained &middot; added &middot; admitted</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'subject + said/told + (that) + subject + backshift glagol')">copy</button>
          <span class="lbl">Formula</span><br>
          subject + <span class="kw">said</span>/(that) + subject + <span class="val">backshift glagol</span><br>
          <span style="font-size:12.5px;color:var(--t2)">
            &bdquo;I <b>am</b> tired.&rdquo; &rarr; She said she <b>was</b> tired.<br>
            &bdquo;We <b>will</b> help.&rdquo; &rarr; They said they <b>would</b> help.<br>
            &bdquo;He <b>can</b> swim.&rdquo; &rarr; She said he <b>could</b> swim.
          </span>
        </div>
      </div>
    </div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)">RQ-WH</div>
        <div><div class="gram-title">Reported Wh-Question</div><div class="gram-sub">asked &middot; wondered &middot; wanted to know</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'subject + asked + wh-word + subject + backshift glagol')">copy</button>
          <span class="lbl">Formula</span><br>
          subject + <span class="kw">asked</span> + <span class="val">wh-word</span> + subject + <span class="val">backshift glagol</span><br>
          <span style="font-size:12.5px;color:var(--t2)">
            &bdquo;Where <b>do</b> you live?&rdquo; &rarr; He asked where she <b>lived</b>.<br>
            &bdquo;What <b>are</b> you doing?&rdquo; &rarr; She asked what I <b>was doing</b>.<br>
            <span style="color:var(--red)">&#x274C; He asked where <b>did she live</b>? &rarr; bez inverzije, bez upitnika!</span>
          </span>
        </div>
      </div>
    </div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">RQ-YN</div>
        <div><div class="gram-title">Reported Yes/No Question</div><div class="gram-sub">asked &middot; wondered &middot; if &middot; whether</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'subject + asked + if/whether + subject + backshift glagol')">copy</button>
          <span class="lbl">Formula</span><br>
          subject + <span class="kw">asked</span> + <span class="val">if/whether</span> + subject + <span class="val">backshift glagol</span><br>
          <span style="font-size:12.5px;color:var(--t2)">
            &bdquo;Are you ready?&rdquo; &rarr; She asked <b>if</b> I <b>was</b> ready.<br>
            &bdquo;Did he call?&rdquo; &rarr; He asked <b>whether</b> she <b>had called</b>.<br>
            <span style="color:var(--red)">&#x274C; She asked <b>are you ready</b>? &rarr; &#x2713; She asked <b>if</b> I <b>was</b> ready.</span>
          </span>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// backshift tablica &mdash; sve promjene</div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Direct speech</th><th>Reported speech</th><th>Primjer</th></tr></thead>
        <tbody>
          <tr><td>Present Simple (is/am/are)</td><td><b style="color:var(--lime)">Past Simple (was/were)</b></td><td><em>"She <b>is</b> tired." &rarr; She said she <b>was</b> tired.</em></td></tr>
          <tr><td>Present Continuous (is doing)</td><td><b style="color:var(--lime)">Past Continuous (was doing)</b></td><td><em>"He <b>is</b> working." &rarr; He said he <b>was</b> working.</em></td></tr>
          <tr><td>Past Simple (worked)</td><td><b style="color:var(--lime)">Past Perfect (had worked)</b></td><td><em>"I <b>finished</b> it." &rarr; She said she <b>had finished</b> it.</em></td></tr>
          <tr><td>Present Perfect (has done)</td><td><b style="color:var(--lime)">Past Perfect (had done)</b></td><td><em>"I <b>have seen</b> it." &rarr; He said he <b>had seen</b> it.</em></td></tr>
          <tr><td>will</td><td><b style="color:var(--sky)">would</b></td><td><em>"I <b>will</b> call." &rarr; She said she <b>would</b> call.</em></td></tr>
          <tr><td>can</td><td><b style="color:var(--sky)">could</b></td><td><em>"She <b>can</b> help." &rarr; He said she <b>could</b> help.</em></td></tr>
          <tr><td>must</td><td><b style="color:var(--sky)">had to</b></td><td><em>"You <b>must</b> leave." &rarr; She said I <b>had to</b> leave.</em></td></tr>
          <tr><td>may</td><td><b style="color:var(--sky)">might</b></td><td><em>"It <b>may</b> rain." &rarr; He said it <b>might</b> rain.</em></td></tr>
        </tbody>
      </table>
    </div>

    <hr class="divider">
    <div class="sec-label">// said vs told &mdash; direktna usporedba</div>
    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--lime-dim);color:var(--lime);border-bottom-color:var(--lime-border)">said &mdash; bez osobnog objekta</div>
        <div class="cmp-body">
          <div class="cmp-row">&#x2713; She <b>said</b> (that) she was tired.</div>
          <div class="cmp-row">&#x2713; He <b>said</b> he would help.</div>
          <div class="cmp-row">&#x2713; They <b>said</b> the film was great.</div>
          <div class="cmp-row" style="color:var(--red)">&#x274C; She <b>said me</b> she was tired.</div>
          <div class="cmp-row" style="color:var(--t3);font-size:12px">said + that + izjava (that je opcionalno)</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--sky-dim);color:var(--sky);border-bottom-color:var(--sky-border)">told &mdash; uvijek s osobnim objektom</div>
        <div class="cmp-body">
          <div class="cmp-row">&#x2713; She <b>told me</b> she was tired.</div>
          <div class="cmp-row">&#x2713; He <b>told us</b> he would help.</div>
          <div class="cmp-row">&#x2713; They <b>told her</b> the film was great.</div>
          <div class="cmp-row" style="color:var(--red)">&#x274C; She <b>told</b> she was tired.</div>
          <div class="cmp-row" style="color:var(--t3);font-size:12px">told + me/us/him/her/them + izjava</div>
        </div>
      </div>
    </div>

    <hr class="divider">
        <div style="padding:10px 14px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r3);margin-bottom:14px;font-size:13px;color:var(--t2)">
      <span style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--amber);text-transform:uppercase;letter-spacing:.8px">// ispitna u&#269;estalost</span><br>
      Reported speech se pojavljuje u <b>1&ndash;3 pitanja</b> u grammati&#269;kom dijelu mature. Ovo poglavlje poma&#382;e osigurati te bodove &mdash; posebno <b>said vs told</b> i <b>backshift zamke</b> koje NCVVO najvi&#353;e testira.
    </div>
<div class="sec-label">// zna&#269;ajne zamke &mdash; za&#353;to NIJE to&#269;no?</div>
    <div class="why-not">
      <div class="wn-item">
        <div class="wn-wrong">&#x274C; She said me she was happy.</div>
        <div class="wn-why">said nema osobnog objekta &rarr; <span class="wn-fix">&#x2713; She <b>told me</b> she was happy.</span></div>
      </div>
      <div class="wn-item">
        <div class="wn-wrong">&#x274C; He asked where did she live?</div>
        <div class="wn-why">Neizravno pitanje: bez inverzije i bez upitnika &rarr; <span class="wn-fix">&#x2713; He asked where she <b>lived</b>.</span></div>
      </div>
      <div class="wn-item">
        <div class="wn-wrong">&#x274C; She said she is tired.</div>
        <div class="wn-why">Backshift: is &rarr; was &rarr; <span class="wn-fix">&#x2713; She said she <b>was</b> tired.</span></div>
      </div>
      <div class="wn-item">
        <div class="wn-wrong">&#x274C; She asked are you ready?</div>
        <div class="wn-why">Yes/No pitanje: if/whether + bez inverzije + bez upitnika &rarr; <span class="wn-fix">&#x2713; She asked <b>if</b> I <b>was</b> ready.</span></div>
      </div>
      <div class="wn-item">
        <div class="wn-wrong">&#x274C; He said he must leave.</div>
        <div class="wn-why">Backshift: must &rarr; had to &rarr; <span class="wn-fix">&#x2713; He said he <b>had to</b> leave.</span></div>
      </div>
    </div>

    <!-- MATURA RADAR -->
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 16px;margin-bottom:4px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--sky);margin-bottom:8px">// indirect questions &mdash; u reading i listening kontekstu</div>
      <p style="font-size:13px;color:var(--t2);margin:0 0 8px">Reported speech se na NCVVO ispitu pojavljuje i u <b>reading tekstovima</b> (dijalozi, intervjui) i u <b>listening</b> — ne samo kao izolirani gramatički zadatak.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12.5px">
        <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:8px 10px">
          <div style="color:var(--t3);font-size:11px;margin-bottom:4px">U tekstu vidi&#353;:</div>
          <div style="color:var(--t2)"><em>"Do you know <b>where</b> the library <b>is</b>?"</em></div>
          <div style="font-size:11px;color:var(--t3);margin-top:3px">Indirektno pitanje → normalan red rije&#269;i (nije upitni)</div>
        </div>
        <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:8px 10px">
          <div style="color:var(--t3);font-size:11px;margin-bottom:4px">&#x274C; &#268;esta gre&#353;ka:</div>
          <div style="color:var(--red)"><em>"Do you know <b>where is</b> the library?"</em></div>
          <div style="font-size:11px;color:var(--t3);margin-top:3px">Upitni red rije&#269;i = pogre&#353;ka u indirect!</div>
        </div>
      </div>
    </div>

<div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; reported speech</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>said me &#x274C; &mdash; told me &#x2713;</b><br>Najtipičnija zamka. Pamti: said (bez obj.) vs told (s obj. uvijek!).</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Inverzija u neizravnom pitanju &#x274C;</b><br>He asked where <b>did she live</b>? &rarr; He asked where she <b>lived</b>. Bez inverzije, bez upitnika!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>Zaboraviti backshift</b><br>She said she <b>is</b> &rarr; She said she <b>was</b>. Svaki prezent glagol mora postati prošlost.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>must ostaje must &#x274C;</b><br>must u reported speech uvijek &rarr; <b>had to</b>. must to = ne postoji!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>Upitnik u neizravnom pitanju &#x274C;</b><br>She asked if I was ready<b>.</b> (to&#269;ka, ne ?) &mdash; neizravno pitanje je izjavna re&#269;enica!</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Na ispitu:</b> gap fill (upi&#353;i backshiftani glagol) &middot; MCQ (odaberi to&#269;nu formu) &middot; error correction<br><b>Uvijek testirano:</b> said vs told &middot; will&rarr;would &middot; can&rarr;could &middot; pitanja bez inverzije</div></div>
      </div>
    </div>

    <!-- SPEED DRILL PREVIEW -->
    <hr class="divider">
    <div class="sec-label">// backshift drill &mdash; odaberi to&#269;an oblik</div>
    <p class="prose" style="margin-bottom:10px">10 re&#269;enica. Odaberi to&#269;an backshiftani oblik. Tipke <span style="font-family:var(--mono);color:var(--t2)">1 &middot; 2 &middot; 3</span> = brzi unos.</p>
    <div class="speed-drill-wrap">
      <div class="sd-progress" id="sdprog"></div>
      <div id="sdq-wrap"></div>
      <div class="sd-score" id="sd-score-box" aria-live="polite">
        <div class="sd-score-num" id="sd-score-num">0/10</div>
        <div class="sd-score-lbl" id="sd-score-lbl"></div>
        <button class="sd-retry" onclick="initSpeedDrill()">&#x21BA; Ponovi drill</button>
      </div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">&larr; Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Practice &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 2 — PRACTICE ══ -->
  <div class="layer" id="l2">

    <div class="quiz-intro"><strong>// knowledge quiz</strong> &middot; 10 pitanja o reported speech. Target: <strong>8/10</strong>.</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>
    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 &middot; backshift &middot; reported statement</div><div class="q-text">"I am very happy," she said. Odaberi to&#269;an reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> She said she is very happy.</div>
      <div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> She said she was very happy.</div>
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> She said she were very happy.</div>
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> She told she was very happy.</div>
    </div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 &middot; said vs told</div><div class="q-text">Odaberi ispravnu re&#269;enicu:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> He said me that he was hungry.</div>
      <div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">B</span> He told me that he was hungry.</div>
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">C</span> He told that he was hungry.</div>
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> He said to me he is hungry.</div>
    </div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 &middot; backshift &middot; will → would</div><div class="q-text">"We will arrive at 8," they said. Reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> They said they will arrive at 8.</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> They told they would arrive at 8.</div>
      <div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> They said they would arrive at 8.</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> They said they should arrive at 8.</div>
    </div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 &middot; indirect question &middot; wh-</div><div class="q-text">"Where do you work?" she asked. Reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> She asked where did I work?</div>
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> She asked where do I work.</div>
      <div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">C</span> She asked where I worked.</div>
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> She asked where I work?</div>
    </div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 &middot; indirect question &middot; yes/no</div><div class="q-text">"Are you coming?" he asked. Reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> He asked if I am coming.</div>
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">B</span> He asked are you coming.</div>
      <div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">C</span> He asked if I was coming.</div>
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> He asked whether was I coming.</div>
    </div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 &middot; backshift &middot; can → could</div><div class="q-text">"I can help you tomorrow," she said. Reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">A</span> She said she could help me the next day.</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">B</span> She said she can help me tomorrow.</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">C</span> She told she could help me the next day.</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> She said she would help me the next day.</div>
    </div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 &middot; reporting verb &middot; told + inf</div><div class="q-text">Which sentence is correct?</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> She said me to be quiet.</div>
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">B</span> She told to be quiet.</div>
      <div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">C</span> She told me to be quiet.</div>
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> She said to me be quiet.</div>
    </div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 &middot; backshift &middot; have → had</div><div class="q-text">"I have already finished," Tom said. Reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> Tom said he has already finished.</div>
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> Tom told he had already finished.</div>
      <div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">C</span> Tom said he had already finished.</div>
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> Tom said he already finished.</div>
    </div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 &middot; zamjenice &amp; backshift</div><div class="q-text">"My sister is visiting me," he said. Reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> He said his sister is visiting him.</div>
      <div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">B</span> He said his sister was visiting him.</div>
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">C</span> He said my sister was visiting me.</div>
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> He told his sister was visiting him.</div>
    </div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 &middot; must → had to</div><div class="q-text">"You must submit the form today," the teacher said. Reported speech:</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> The teacher said I must submit the form today.</div>
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> The teacher told I had to submit the form that day.</div>
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">C</span> The teacher said I must to submit the form that day.</div>
      <div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">D</span> The teacher said I had to submit the form that day.</div>
    </div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px;text-align:center">
        <div style="font-size:28px;margin-bottom:8px">&#x1F3C6;</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje zavr&#353;eno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">13 &middot; Reported Speech<br>Nastavi na Ch14 &rarr;</div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upi&#353;i ispravni backshiftani oblik. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb-block" id="fi1">
      <div class="fitb-sent"><span style="color:var(--t3);font-size:12px">"I am tired," she said.</span><br>She said she _______ tired.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi1_inp" placeholder="was" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','was','rs')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi1','f1fb','was','rs')">Check</button>
      </div>
      <div class="fitb-fb" id="f1fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi2">
      <div class="fitb-sent"><span style="color:var(--t3);font-size:12px">"We will call you," they said.</span><br>They said they _______ call me.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi2_inp" placeholder="would" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','would','rs')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi2','f2fb','would','rs')">Check</button>
      </div>
      <div class="fitb-fb" id="f2fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi3">
      <div class="fitb-sent"><span style="color:var(--t3);font-size:12px">"He can swim," she said.</span><br>She said he _______ swim.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi3_inp" placeholder="could" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','could','rs')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi3','f3fb','could','rs')">Check</button>
      </div>
      <div class="fitb-fb" id="f3fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi4">
      <div class="fitb-sent"><span style="color:var(--t3);font-size:12px">"Where do you live?" he asked.</span><br>He asked where I _______.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi4_inp" placeholder="lived" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','lived','rs')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi4','f4fb','lived','rs')">Check</button>
      </div>
      <div class="fitb-fb" id="f4fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi5">
      <div class="fitb-sent"><span style="color:var(--t3);font-size:12px">"Are you ready?" she asked.</span><br>She asked _______ I was ready.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi5_inp" placeholder="if" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','if','rs')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi5','f5fb','if','rs')">Check</button>
      </div>
      <div class="fitb-fb" id="f5fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi6">
      <div class="fitb-sent"><span style="color:var(--t3);font-size:12px">"I have finished," Tom said.</span><br>Tom said he _______ finished.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi6_inp" placeholder="had" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','had','rs')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi6','f6fb','had','rs')">Check</button>
      </div>
      <div class="fitb-fb" id="f6fb" aria-live="polite"></div>
    </div>

    <hr class="divider">
    <div class="sec-label">// error correction &mdash; prona&#273;i gre&#353;ku</div>
    <p class="prose" style="margin-bottom:14px">Svaka re&#269;enica sadr&#382;i tipi&#269;nu gre&#353;ku u reported speech. Klikni da vidis ispravak.</p>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">""She said me that she was happy.""</div>
        <button class="err-btn" onclick="showErrFix('ef1',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef1">&#x2705; <span class="correct">She <b>told</b> me that she was happy.</span><span class="explain">'said me' ne postoji &mdash; said nema osobni objekt. Kada ima objekt koristi se <b>told</b>: told me, told him, told us.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""He asked where did she live?""</div>
        <button class="err-btn" onclick="showErrFix('ef2',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef2">&#x2705; <span class="correct">He asked where she <b>lived</b>.</span><span class="explain">Neizravno pitanje: (1) bez inverzije (she lived, ne did she live), (2) bez upitnika, (3) backshift live&rarr;lived.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""She said she is very tired.""</div>
        <button class="err-btn" onclick="showErrFix('ef3',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef3">&#x2705; <span class="correct">She said she <b>was</b> very tired.</span><span class="explain">Backshift u reported speech: is &rarr; <b>was</b>. Reporting verb 'said' je u pro&#353;losti &rarr; glagol se pomi&#269;e.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""They told that the meeting was cancelled.""</div>
        <button class="err-btn" onclick="showErrFix('ef4',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef4">&#x2705; <span class="correct">They <b>said</b> that the meeting was cancelled.</span><span class="explain">'told' uvijek treba osobni objekt: told us, told me, told him. Bez objekta koristi se <b>said</b>.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""He asked if was she ready.""</div>
        <button class="err-btn" onclick="showErrFix('ef5',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef5">&#x2705; <span class="correct">He asked if she <b>was</b> ready.</span><span class="explain">Neizravno pitanje: NEMA inverzije (she was, ne was she). Red rije&#269;i je isti kao u izjavnoj re&#269;enici.</span></div>
      </div>
    </div>

    <div class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim zadacima mature</div><div class="cta-sub">Svi NCVVO zadaci 2010.&ndash;2026. uz detaljna obja&#353;njenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>

    <div class="matura">
      <div class="matura-hd">&#x2B50; for the exam &mdash; key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>Backshift</b>: is&rarr;was &middot; will&rarr;would &middot; can&rarr;could &middot; have+PP&rarr;had+PP &middot; must&rarr;had to</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>said vs told</b>: said (bez obj.) &middot; told + me/us/him/her (uvijek objekt!)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Neizravno pitanje</b>: bez inverzije &middot; bez upitnika &middot; if/whether za yes/no</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Zamjenice</b>: I&rarr;he/she &middot; my&rarr;his/her &middot; we&rarr;they &middot; here&rarr;there</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Zamka #1</b>: said me &rarr; told me (najtipičnija gre&#353;ka!)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Zamka #2</b>: He asked where did she live? &rarr; He asked where she lived.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Zamka #3</b>: must ne ostaje must &rarr; must &rarr; had to</span></li>
      </ul>
    </div>

    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to 'said me' nije ispravno?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>'said' nema osobnog objekta &mdash; 'told' ima!</b><br><br>said + that/nothing: She <b>said</b> (that) she was tired. &#x2713;<br>told + osobni objekt: She <b>told me</b> (that) she was tired. &#x2713;<br>said me &#x274C; &middot; told (bez objekta) &#x274C;</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to nema upitnika u neizravnom pitanju?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Jer neizravno pitanje NIJE pravo pitanje &mdash; to je izjavna re&#269;enica!</b><br><br>Direct: 'Where <b>does</b> she work?' (pravo pitanje, upitnik)<br>Indirect: He asked where she <b>worked</b>. (izjavna, bez upitnika)<br><br>Neizravno pitanje samo opisuje da je netko pitao.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koje rije&#269;i se mijenjaju osim glagola?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Zamjenice:</b> I&rarr;he/she &middot; my&rarr;his/her &middot; we&rarr;they<br><b>Deiksa:</b> here&rarr;there &middot; this&rarr;that<br><b>Vrijeme:</b> now&rarr;then &middot; today&rarr;that day &middot; tomorrow&rarr;the next day<br><br>Na ni&#382;oj razini: zamjenice i backshift su najva&#382;niji.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch02 (past tenses)</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Reported speech = primjena past tenses iz ch02!</b><br><br>is&rarr;was (ch02 Past Simple of be)<br>is working&rarr;was working (ch02 Past Continuous)<br>has finished&rarr;had finished (Past Perfect)<br><br>Ako zna&#353; ch02 dobro, backshift je samo primjena tih oblika.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch06 &mdash; conditionals u reported speech</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>C1 u reported speech:</b><br>'If it rains, I <b>will</b> stay.' &rarr; She said if it rained, she <b>would</b> stay.<br><br>will&rarr;would (backshift) &middot; if + PS ostaje isti (ne backshifta dalje)<br><br>Na ni&#382;oj razini: C1&rarr;backshifted C1 je najtipičniji.</div>
    </div>

    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter14.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">14 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Articles &amp; Determiners</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">a/an/the/zero article</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter02.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 02</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Past Simple &amp; Continuous</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Backshift koristi past tenses</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter06.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 06</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Conditionals</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">C1 u reported speech</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter15.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">15 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Comparatives &amp; Question Tags</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Sljedeće poglavlje</div>
        </div>
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
      <a href="chapter12.html" class="nav-btn">&larr; Chapter 12</a>
      <a href="chapter14.html" class="nav-btn primary">Next chapter &rarr;</a>
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
`;

const CH13_JS = `var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  if(i===1&&typeof initSpeedDrill==='function'&&sdState.idx===0)initSpeedDrill();
  window.scrollTo({top:0,behavior:'smooth'});
}

var E={
  q1:{c:"✓ Točno. Backshift: am → was. said bez osobnog objekta = ispravno.",w:"✗ Netočno. Backshift: am → was (ne ostaje is). said nema objekta — told bi trebalo told me. Točan odgovor: B."},
  q2:{c:"✓ Točno. told + osobni objekt (me) + that + backshift (was).",w:"✗ Netočno. said me ne postoji. told treba objekt: told me. told that bez objekta = netočno. Točan odgovor: B."},
  q3:{c:"✓ Točno. Backshift: will → would. said ispravno (bez osobnog objekta).",w:"✗ Netočno. Backshift: will → would (ne ostaje will). told treba objekt. should ne zamjenjuje would. Točan odgovor: C."},
  q4:{c:"✓ Točno. Neizravno pitanje: bez inverzije, bez upitnika, backshift (do → worked).",w:"✗ Netočno. Neizravno pitanje: (1) bez inverzije, (2) bez upitnika, (3) backshift do→worked. Točan odgovor: C."},
  q5:{c:"✓ Točno. Yes/No pitanje: if/whether + backshift (are→was) + bez inverzije.",w:"✗ Netočno. Yes/No pitanje: if/whether + red riječi bez inverzije + backshift are→was. Točan odgovor: C."},
  q6:{c:"✓ Točno. Backshift: can→could. Zamjenica: you→me. Vrijeme: tomorrow→the next day.",w:"✗ Netočno. Backshift: can→could. told treba objekt. would ne zamjenjuje could. Točan odgovor: A."},
  q7:{c:"✓ Točno. told + objekt (me) + infinitiv (to be) = nalog/zahtjev.",w:"✗ Netočno. Za naloge: told + objekt + to + infinitiv. said me = netočno, told to (bez objekta) = netočno. Točan odgovor: C."},
  q8:{c:"✓ Točno. Backshift: have finished (PP) → had finished (Past Perfect).",w:"✗ Netočno. Backshift: Present Perfect (have finished) → Past Perfect (had finished). told treba objekt. Točan odgovor: C."},
  q9:{c:"✓ Točno. Zamjenice: my→his, me→him. Backshift: is visiting→was visiting.",w:"✗ Netočno. Zamjenice: my→his, me→him. Backshift: is visiting→was visiting. told treba objekt. Točan odgovor: B."},
  q10:{c:"✓ Točno. Backshift: must→had to. today→that day. said (bez objekta) ispravno.",w:"✗ Netočno. must→had to (backshift). today→that day. told treba objekt. must to ne postoji. Točan odgovor: D."}
};
var answered={},correct=0,total=10;
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savrseno! Reported Speech svladan. 🎉':
      correct>=9?'Odlicno!':correct>=7?'Good. Ponovi backshift tablicu.':
      correct>=5?'Vrati se na formule.':'Vrati se na Learn tab.';
    document.getElementById('score').classList.add('show');
    if(correct>=8){document.getElementById('completionBadge').style.display='block';tabDone[2]=true;saveProgress();document.querySelectorAll('.tab')[2].classList.add('done-tab');}
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
  var sdwrap=document.getElementById('sdq-wrap');
  if(sdwrap){
    var sdbtns=sdwrap.querySelectorAll('.sd-btn');
    if(e.key==='1'&&sdbtns[0])sdbtns[0].click();
    if(e.key==='2'&&sdbtns[1])sdbtns[1].click();
    if(e.key==='3'&&sdbtns[2])sdbtns[2].click();
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

function checkFitb(id,fbId,correct,tag){
  var inp=document.getElementById(id+'_inp');
  if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();
  var ok=(val===correct.toLowerCase());
  inp.disabled=true;
  inp.style.borderColor=ok?'var(--green)':'var(--red)';
  var fb=document.getElementById(fbId);
  if(fb){fb.innerHTML=ok?'&#x2713; Tocno!':'&#x2717; Tocan oblik: <b>'+correct+'</b>';fb.className='fitb-fb '+(ok?'ok':'no');}
}

function svAns(el,id,correct){
  if(el.classList.contains('sv-correct')||el.classList.contains('sv-wrong'))return;
  var parent=el.closest('.sv-opts');
  var opts=parent?parent.querySelectorAll('.sv-opt'):[];
  var isCorrect=el.textContent.trim()===correct;
  opts.forEach(function(o){o.style.pointerEvents='none';});
  if(isCorrect){el.classList.add('sv-correct');}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o.textContent.trim()===correct)o.classList.add('sv-reveal');});}
  var fb=document.getElementById(id+'fb');
  if(fb){fb.className='sv-fb '+(isCorrect?'ok':'no')+' show';fb.innerHTML=(isCorrect?'✓ Tocno! ':'✗ Netocno. Tocno: ')+'<strong>'+correct+'</strong>';}
}

function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  if(btn){btn.setAttribute('aria-expanded','true');btn.style.display='none';}
}

function toggleReveal(card){
  var isOpen=card.classList.contains('open');
  card.classList.toggle('open');
  card.setAttribute('aria-expanded',!isOpen?'true':'false');
}

function copyFormula(btn,text){
  if(navigator.clipboard){navigator.clipboard.writeText(text).then(function(){
    var orig=btn.textContent;btn.textContent='copied!';btn.style.color='var(--lime)';
    setTimeout(function(){btn.textContent=orig;btn.style.color='';},1200);
  });}
}

var SD=[
  {s:"She said she _______ happy. (am)", opts:["was","is","were"], ans:0, exp:"Backshift: am → was. said (bez objekta) = ispravno."},
  {s:"He asked where she _______ . (live)", opts:["lived","lives","did live"], ans:0, exp:"Neizravno pitanje: backshift live→lived. Bez inverzije! Bez upitnika!"},
  {s:"She _______ me she would be late.", opts:["told","said","asked"], ans:0, exp:"told + osobni objekt (me). said nema objekta!"},
  {s:"They said they _______ call later. (will)", opts:["would","will","could"], ans:0, exp:"Backshift: will → would."},
  {s:"He asked if I _______ ready. (are)", opts:["was","am","were"], ans:0, exp:"Backshift: are → was (1. lice jd. u reported speech)."},
  {s:"She said she _______ finish by 5. (can)", opts:["could","can","might"], ans:0, exp:"Backshift: can → could."},
  {s:"He _______ that the meeting was cancelled.", opts:["said","told","asked"], ans:0, exp:"said (bez objekta). told treba objekt: told us."},
  {s:"She asked what I _______ . (do)", opts:["did","do","was doing"], ans:0, exp:"Backshift: do → did. Bez inverzije u neizravnom pitanju!"},
  {s:"She said she _______ already eaten. (have)", opts:["had","has","was"], ans:0, exp:"Backshift: have (PP) → had (Past Perfect)."},
  {s:"He said he _______ leave the next day. (must)", opts:["had to","must","should"], ans:0, exp:"Backshift: must → had to (jedini moguc oblik!)."}
];
var sdState={idx:0,results:[]};

function initSpeedDrill(){sdState={idx:0,results:[]};document.getElementById('sd-score-box').classList.remove('show');renderSD();}

function renderSD(){
  var prog=document.getElementById('sdprog');
  if(prog){prog.innerHTML='';for(var i=0;i<SD.length;i++){var d=document.createElement('div');d.className='sd-dot'+(i<sdState.results.length?(sdState.results[i]?' ok':' no'):(i===sdState.idx?' cur':''));prog.appendChild(d);}}
  var wrap=document.getElementById('sdq-wrap');if(!wrap)return;
  if(sdState.idx>=SD.length){
    wrap.innerHTML='';
    var sc=sdState.results.filter(function(r){return r}).length;
    document.getElementById('sd-score-num').textContent=sc+'/'+SD.length;
    document.getElementById('sd-score-lbl').textContent=sc===SD.length?'Savrseno! Backshift svladan. 🎉':sc>=8?'Odlicno! 💪':sc>=6?'Dobro! Ponovi backshift tablicu.':'Vrati se na formule.';
    document.getElementById('sd-score-box').classList.add('show');return;
  }
  var q=SD[sdState.idx];
  var btnsHtml=q.opts.map(function(o,i){return '<div class="sd-btn" style="background:var(--bg-input);border:1px solid var(--bd-mid);color:var(--t2);border-radius:var(--r2);padding:10px 16px;font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex:1;text-align:center;transition:all .15s" onclick="sdAns('+i+')" tabindex="0">'+o+' <span style="font-size:10px;opacity:.4">['+(i+1)+']</span></div>';}).join('');
  wrap.innerHTML='<div class="sd-q"><div class="sd-sent">'+q.s+'</div><div class="sd-btns" style="display:flex;gap:8px;flex-wrap:wrap">'+btnsHtml+'</div><div class="sd-fb" id="sdfb" aria-live="polite"></div></div>';
}

function sdAns(idx){
  var q=SD[sdState.idx];var ok=idx===q.ans;sdState.results.push(ok);
  var btns=document.querySelectorAll('#sdq-wrap .sd-btn');
  btns.forEach(function(b){b.style.pointerEvents='none';b.setAttribute('tabindex','-1');});
  btns[idx].style.background=ok?'var(--green)':'var(--red-dim)';
  btns[idx].style.color=ok?'#080B10':'var(--red)';
  btns[idx].style.borderColor=ok?'var(--green)':'var(--red-border)';
  if(!ok){btns[q.ans].style.background='var(--green-dim)';btns[q.ans].style.color='var(--green)';btns[q.ans].style.borderColor='var(--green-border)';}
  var fb=document.getElementById('sdfb');fb.className='sd-fb show '+(ok?'ok':'no');fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1700);
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}
function saveProgress(){try{localStorage.setItem('maturix_ch13_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch13_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initSpeedDrill();


// Auto-init SD drill ako je L1 aktivan
if(document.getElementById('l1')&&document.getElementById('l1').classList.contains('active'))initSpeedDrill();
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
`;