// Maturiraj.hr — Engleski niža razina · Poglavlje 15
// Comparatives & Question Tags
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function EngleskiNizaPoglavlje15({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch15-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH15_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch15-js";
    scriptEl.textContent = CH15_JS;
    document.body.appendChild(scriptEl);

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
      if (num === 14 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch15-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch15-root"
      dangerouslySetInnerHTML={{ __html: CH15_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH15_CSS = `/* ─── DESIGN TOKENS ──────────────────────────────────────── */
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

const CH15_BODY = `<div class="shell">
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
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter13.html'"><span class="sb-dot"></span> 13 · Neupravni govor</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter14.html'"><span class="sb-dot"></span> 14 · Članovi: a / an / the</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 15 · Komparativ i tag pitanja</div>
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
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 · Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 · Članovi: a / an / the</div>
  <div class="sb-item active"><span class="sb-dot"></span> 15 · Komparativ i tag pitanja</div>
  <div class="sb-footer">15 / 15 · maturiraj.hr</div>
</nav>
<main class="main"><div class="content-wrap">
  <div class="breadcrumb">
    <span onclick="window.location='chapter14.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>grammar+</span>
    <span class="bc-sep">/</span><span class="bc-active">comparatives-question-tags</span>
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

  <!-- LAYER 0 -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 15 &middot; grammar+ &middot; final</div>
      <h1 class="hero-title">Comparatives <span>&amp; Question Tags</span></h1>
      <div class="hero-meta" style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap">
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">&#9201; ~35 min</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">ni&#382;a razina</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">15 / 15 &mdash; finale!</span>
      </div>
      <p class="hero-sub">Comparatives &middot; Superlatives &middot; as...as &middot; Question tags &middot; Nepravilni oblici &middot; Zamke</p>
      <div class="progress-track"><div class="progress-bar" style="width:100%;background:linear-gradient(90deg,var(--lime),var(--sky))"></div></div>
    </div>
        <div style="margin-bottom:16px;padding:14px 18px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r3)">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--amber);margin-bottom:6px">// pro&#353;ireno gradivo &mdash; za koga je ovo?</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6">
        <b>Ch15 (Comparatives & Question Tags)</b> pokriva komparative, superlative i question tags. Na ispitu se pojavljuje u <b>1&ndash;2 pitanja u gramatičkom dijelu</b>.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">
          &#x2713; Preporu&#269;a se ako ima&scaron; vi&scaron;e od 1 tjedna pripreme &middot;
          &#x26A0; Ako ima&scaron; manje od 1 tjedna &mdash; fokusiraj se na Ch01&ndash;Ch07 i Ch12 prvo
        </span>
      </div>
    </div>
<div class="tags">
      <span class="pill pill-lime">Comparatives +er/more</span>
      <span class="pill pill-sky">Superlatives the+est</span>
      <span class="pill pill-violet">as...as</span>
      <span class="pill pill-amber">Question tags</span>
      <span class="pill pill-red">good/bad/far</span>
    </div>
    <div class="sec-label">// at a glance &mdash; 5 sustava</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">+er</div><div class="stat-name">Kratki komparativ</div><div class="stat-desc">tall → taller &middot; big → bigger &middot; happy → happier</div></div>
      <div class="stat-card"><div class="stat-icon sky">more</div><div class="stat-name">Dugi komparativ</div><div class="stat-desc">more interesting &middot; more expensive &middot; more difficult</div></div>
      <div class="stat-card"><div class="stat-icon violet">the</div><div class="stat-name">Superlativ</div><div class="stat-desc">the tallest &middot; the most &middot; the best &middot; the worst</div></div>
      <div class="stat-card"><div class="stat-icon amber">?</div><div class="stat-name">Question tags</div><div class="stat-desc">isn't she? &middot; can they? &middot; haven't they? &middot; didn't he?</div></div>
    </div>
    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Kratak (+er)</div><div class="cv">1-2 sloga: tall&rarr;taller &middot; big&rarr;bigger &middot; happy&rarr;happier &middot; hot&rarr;hotter &middot; + than za usporedbu</div></div>
      <div class="concept-row"><div class="ck sky">Dug (more+)</div><div class="cv">2+ sloga: more interesting &middot; more beautiful &middot; more expensive + than za usporedbu</div></div>
      <div class="concept-row"><div class="ck violet">Superlativ</div><div class="cv">Kratki: the +est (the tallest) &middot; Dugi: the most (the most interesting) &middot; Uvijek s the!</div></div>
      <div class="concept-row"><div class="ck amber">Jednakost</div><div class="cv">as + pridjev + as: She is as tall as her sister. (iste visine) &middot; not as tall as = manji stupanj</div></div>
      <div class="concept-row"><div class="ck red">Question tags</div><div class="cv">Pozitivna &rarr; negativan tag: She is... isn't she? &middot; Negativna &rarr; pozitivan tag: They can't... can they?</div></div>
    </div>
    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; comparatives &amp; question tags &mdash; brzo</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Kratak pridjev (1 slog)?</b> &rarr; +er (taller, bigger, hotter). 2 sloga s -y: +ier (happier)</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Dug pridjev (2+ sloga)?</b> &rarr; more + pridjev (more interesting, more expensive)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Nepravilni?</b> good&rarr;better&rarr;best &middot; bad&rarr;worse&rarr;worst &middot; far&rarr;further&rarr;furthest</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Question tag:</b> Pozitivna re&#269;enica &rarr; negativan tag (isn't she?) &middot; Negativna &rarr; pozitivan tag (can they?)</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Tag zamjenica:</b> isto kao subjekt re&#269;enice (she, they, he...) &middot; Glagol: isti pomo&#263;ni iz re&#269;enice</div></div>
      </div>
    </div>
    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Pravilo kratkih vs dugih pridjeva &mdash; +er ili more?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>1 slog</b> → +er/+est: <span class="ok">tall → taller → tallest</span><br><b>CVC</b> → udvostruči: <span class="ok">big → bigger</span><br><b>-y</b> → -ier: <span class="ok">happy → happier</span><br><b>2+ sloga</b> → more/most: <span class="ok">more interesting</span><br>&#x26A0; Nepravilni: good/better/best · bad/worse/worst · far/further/furthest</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Nepravilni pridjevi &mdash; good, bad, far</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Ovi pridjevi su potpuno nepravilni &mdash; pamti napamet!</b><br><br>
      good &rarr; <b>better</b> &rarr; <b>the best</b><br>
      bad &rarr; <b>worse</b> &rarr; <b>the worst</b><br>
      far &rarr; <b>further</b> &rarr; <b>the furthest</b><br>
      little &rarr; <b>less</b> &rarr; <b>the least</b><br>
      many/much &rarr; <b>more</b> &rarr; <b>the most</b><br><br>
      &#x274C; gooder, goodest, bader, badder, badest &mdash; NE POSTOJE!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Question tags &mdash; kako se tvore?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Pozitivna</b> → negativan tag: <span class="ok">She is tired, <b>isn't she?</b></span><br><b>Negativna</b> → pozitivan tag: <span class="ok">They can't swim, <b>can they?</b></span><br>Tag = isti pomoćni glagol + suprotna polarnost + zamjenica</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>as...as &mdash; kada i kako?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>as + pridjev + as</b> = jednakost: <span class="ok">He is <b>as tall as</b> his father.</span><br>&#x274C; <b>so...as</b> u pozitivnim: <span class="ok">as tall as</span> (ne: so tall as)<br>Negativ: <span class="ok">She is <b>not as tall as</b> him.</span> ✓</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch01 &mdash; pridjevi koji se koriste za comparatives</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Pridjevi opisuju imenice (ch01 — stanja): <span class="ok">tall, happy, expensive</span><br>U komparativu: <span class="ok">taller <b>than</b></span> (kratak) · <span class="ok">more expensive <b>than</b></span> (dug)<br>&#x26A0; State verbs (know/like/want) nemaju komparativ oblika!</div>
    </div>
    <div class="sec-label" style="margin-top:32px">// exam panic protocol</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F6A8; ako zaglavim &mdash; &#269;ini ovo</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Brojim slogove pridjeva: 1 slog &rarr; +er, 2+ sloga &rarr; more</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Je li good/bad/far? &rarr; better/worse/further (nepravilan, pamtim)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Superlativ? &rarr; the + (est/most) + pridjev. UVIJEK s the!</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Question tag: re&#269;enica +? &rarr; negativan tag. re&#269;enica -? &rarr; pozitivan tag</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Tag: isti pomo&#263;ni glagol + ista zamjenica (she, they, he...)</div></div>
      </div>
    </div>
    <div class="nav-row">
      <a href="chapter14.html" class="nav-btn">&larr; Chapter 14</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn &rarr;</span>
    </div>
  </div>

  <!-- LAYER 1 — LEARN -->
  <div class="layer" id="l1">
    <div class="sec-label">// formule &mdash; sva 4 sustava</div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">KOMP</div>
        <div><div class="gram-title">Komparativ &mdash; comparatives</div><div class="gram-sub">usporedba dvaju entiteta &middot; + than</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'kratak: +er than | dug: more + pridjev + than | nepravilan: better/worse/further than')">copy</button>
          <span class="lbl">Formula</span><br>
          <b style="color:var(--lime)">Kratki</b> (1 slog): pridjev + <span class="val">er</span> + than<br>
          <b style="color:var(--sky)">Dugi</b> (2+ sloga): <span class="val">more</span> + pridjev + than<br>
          <b style="color:var(--amber)">Nepravilni</b>: good&rarr;<span class="val">better</span> &middot; bad&rarr;<span class="val">worse</span> &middot; far&rarr;<span class="val">further</span><br>
          <span style="font-size:12.5px;color:var(--t2)">
            She is <b>taller</b> than her brother. (kratki)<br>
            This is <b>more difficult</b> than that. (dugi)<br>
            He is <b>better</b> than before. (nepravilan)
          </span>
        </div>
      </div>
    </div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">SUP</div>
        <div><div class="gram-title">Superlativ &mdash; superlatives</div><div class="gram-sub">najve&#263;i stupanj &middot; uvijek s the</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'superlativ: the + est (kratki) | the most + pridjev (dugi) | the best/worst/furthest (nepravilni)')">copy</button>
          <span class="lbl">Formula</span><br>
          <b style="color:var(--lime)">Kratki</b>: <span class="kw">the</span> + pridjev + <span class="val">est</span><br>
          <b style="color:var(--sky)">Dugi</b>: <span class="kw">the most</span> + pridjev<br>
          <b style="color:var(--amber)">Nepravilni</b>: <span class="kw">the</span> <span class="val">best</span> / <span class="val">worst</span> / <span class="val">furthest</span><br>
          <span style="font-size:12.5px;color:var(--t2)">
            She is <b>the tallest</b> in the class. (kratki)<br>
            It is <b>the most interesting</b> film. (dugi)<br>
            &#x274C; She is <b>a best</b> student. &rarr; &#x2713; <b>the best</b>
          </span>
        </div>
      </div>
    </div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)">QT</div>
        <div><div class="gram-title">Question tags</div><div class="gram-sub">potvrdna pitanja na kraju re&#269;enice</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'question tag: pozitivna → negativan tag (isn't she?) | negativna → pozitivan tag (can they?)')">copy</button>
          <span class="lbl">Formula</span><br>
          Pozitivna re&#269;enica &rarr; <span class="val">negativan tag</span>: She is tired, <b>isn't she?</b><br>
          Negativna re&#269;enica &rarr; <span class="val">pozitivan tag</span>: They can't swim, <b>can they?</b><br>
          <span style="font-size:12.5px;color:var(--t2)">
            He works here, <b>doesn't he?</b> (Ps do/does)<br>
            She didn't call, <b>did she?</b> (past: did)<br>
            They have got a car, <b>haven't they?</b> (have got)<br>
            &#x274C; isn't it? za osobu &rarr; &#x2713; isn't <b>she/he</b>?
          </span>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// komparativ &mdash; kompletna tablica</div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Pozitiv</th><th>Komparativ</th><th>Superlativ</th><th>Tip</th></tr></thead>
        <tbody>
          <tr><td>tall</td><td><b style="color:var(--lime)">taller</b> (than)</td><td><b style="color:var(--lime)">the tallest</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">kratak</span></td></tr>
          <tr><td>big</td><td><b style="color:var(--lime)">bigger</b> (than)</td><td><b style="color:var(--lime)">the biggest</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">CVC &rarr; udvostruči</span></td></tr>
          <tr><td>happy</td><td><b style="color:var(--lime)">happier</b> (than)</td><td><b style="color:var(--lime)">the happiest</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">-y &rarr; -ier</span></td></tr>
          <tr><td>interesting</td><td><b style="color:var(--sky)">more interesting</b> (than)</td><td><b style="color:var(--sky)">the most interesting</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">dug (3 sloga)</span></td></tr>
          <tr><td>expensive</td><td><b style="color:var(--sky)">more expensive</b> (than)</td><td><b style="color:var(--sky)">the most expensive</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">dug (3 sloga)</span></td></tr>
          <tr><td>good</td><td><b style="color:var(--amber)">better</b> (than)</td><td><b style="color:var(--amber)">the best</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">nepravilan &#x26A0;</span></td></tr>
          <tr><td>bad</td><td><b style="color:var(--amber)">worse</b> (than)</td><td><b style="color:var(--amber)">the worst</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">nepravilan &#x26A0;</span></td></tr>
          <tr><td>far</td><td><b style="color:var(--amber)">further</b> (than)</td><td><b style="color:var(--amber)">the furthest</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">nepravilan &#x26A0;</span></td></tr>
        </tbody>
      </table>
    </div>

    <hr class="divider">
    <div class="sec-label">// question tags &mdash; usporedna tablica</div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Rečenica</th><th>Question tag</th><th>Napomena</th></tr></thead>
        <tbody>
          <tr><td>She <b>is</b> tired</td><td><b style="color:var(--lime)">isn't she?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">be + pozitivna</span></td></tr>
          <tr><td>They <b>can</b> swim</td><td><b style="color:var(--lime)">can't they?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">modal + pozitivna</span></td></tr>
          <tr><td>He <b>works</b> here</td><td><b style="color:var(--lime)">doesn't he?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">Ps: do/does</span></td></tr>
          <tr><td>She <b>finished</b> early</td><td><b style="color:var(--lime)">didn't she?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">PSt: did</span></td></tr>
          <tr><td>They <b>have got</b> a car</td><td><b style="color:var(--lime)">haven't they?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">have got</span></td></tr>
          <tr><td>She <b>can't</b> drive</td><td><b style="color:var(--sky)">can she?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">negativna &rarr; + tag</span></td></tr>
          <tr><td>He <b>didn't</b> call</td><td><b style="color:var(--sky)">did he?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">negativna &rarr; + tag</span></td></tr>
          <tr><td>They <b>haven't</b> finished</td><td><b style="color:var(--sky)">have they?</b></td><td><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">negativna &rarr; + tag</span></td></tr>
                  <tr>
            <td style="padding:7px 10px;border-bottom:1px solid var(--bd)">He has to leave</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--bd);font-weight:600">doesn't he?</td>
            <td style="padding:7px 10px;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3)">have to = obi&#269;an glagol &rarr; tag: do/does/did <span style="color:var(--amber);font-weight:600">(ne hasn't he!)</span></td>
          </tr>
          <tr>
            <td style="padding:7px 10px">She doesn't have to go</td>
            <td style="padding:7px 10px;font-weight:600">does she?</td>
            <td style="padding:7px 10px;font-size:11px;color:var(--t3)">negativna &rarr; pozitivan tag &middot; doesn't have to &rarr; does</td>
          </tr>
</tbody>
      </table>
    </div>

    <hr class="divider">
    <div class="sec-label">// zamke &mdash; za&#353;to NIJE to&#269;no?</div>
    <div class="why-not">
      <div class="wn-item"><div class="wn-wrong">&#x274C; She is more tall than her sister.</div><div class="wn-why">tall = kratak pridjev (1 slog) &rarr; +er &rarr; <span class="wn-fix">&#x2713; She is <b>taller</b> than her sister.</span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; He is the most good student.</div><div class="wn-why">good = nepravilan superlativ &rarr; the best &rarr; <span class="wn-fix">&#x2713; He is <b>the best</b> student.</span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; It's cold today, isn't it he?</div><div class="wn-why">Tag zamjenica = subjekt re&#269;enice. it &rarr; <span class="wn-fix">&#x2713; It's cold today, <b>isn't it?</b></span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; She is as tall than her brother.</div><div class="wn-why">Jednakost: as...as (ne as...than) &rarr; <span class="wn-fix">&#x2713; She is as tall <b>as</b> her brother.</span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; This is more easy than I thought.</div><div class="wn-why">easy = 2 sloga s -y &rarr; +ier &rarr; <span class="wn-fix">&#x2713; This is <b>easier</b> than I thought.</span></div></div>
    </div>

    <div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; comparatives &amp; question tags</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>more tall &#x274C; &rarr; taller &#x2713;</b><br>Kratki pridjevi (1 slog) uvijek +er. more tall, more fast, more big = uvijek krivo!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>goodest / gooder &#x274C; &rarr; best / better &#x2713;</b><br>good/bad/far su nepravilni! Pamti: good-better-best &middot; bad-worse-worst.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>isn't he? za It... &#x274C;</b><br>Tag zamjenica = subjekt re&#269;enice. It's raining, isn't <b>it</b>? She is..., isn't <b>she</b>?</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>as tall than &#x274C; &rarr; as tall as &#x2713;</b><br>Jednakost: uvijek as...as. Nikad as...than!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>haven't they not? &#x274C; &rarr; haven't they? &#x2713;</b><br>Question tag je kratak! Samo pomoćni glagol + zamjenica. Bez 'not' u negativnom tagu!</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Na ispitu:</b> gap fill (upi&#353;i oblik) &middot; MCQ &middot; error correction &middot; re&#269;enicu dovrši<br><b>Najva&#382;nije:</b> nepravilni (best/worst) &middot; +er vs more &middot; question tag pravilo</div></div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// drill &mdash; comparatives &amp; question tags</div>
    <p class="prose" style="margin-bottom:10px">10 re&#269;enica. Tipke <span style="font-family:var(--mono);color:var(--t2)">1 &middot; 2 &middot; 3</span> = brzi unos.</p>
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

  <!-- LAYER 2 — PRACTICE -->
  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// final quiz</strong> &middot; 10 pitanja. Target: <strong>8/10</strong>. Ovo je zadnje poglavlje!</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>
    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 &middot; komparativ &middot; kratak pridjev</div><div class="q-text">He is _______ than his brother. (tall)</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> more tall</div>
      <div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> taller</div>
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> tallest</div>
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> the taller</div>
    </div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 &middot; komparativ &middot; dug pridjev</div><div class="q-text">This exercise is _______ than the previous one. (difficult)</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> difficulter</div>
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">B</span> more difficulter</div>
      <div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">C</span> more difficult</div>
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> the most difficult</div>
    </div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 &middot; nepravilan komparativ</div><div class="q-text">She plays _______ than anyone on the team. (good)</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">A</span> better</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> gooder</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">C</span> more good</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> best</div>
    </div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 &middot; superlativ &middot; kratak pridjev</div><div class="q-text">He is _______ person I know. (tall)</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> taller</div>
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> more tall</div>
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> most tallest</div>
      <div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">D</span> the tallest</div>
    </div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 &middot; jednakost &middot; as...as</div><div class="q-text">This film is _______ the book. (isti stupanj dužine — long)</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> longer than</div>
      <div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">B</span> as long as</div>
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> the longest of</div>
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> so long than</div>
    </div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 &middot; question tag &middot; pozitivna rečenica</div><div class="q-text">She is a great teacher, _______?</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> is she</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">B</span> does she</div>
      <div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">C</span> isn't she</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> wasn't she</div>
    </div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 &middot; question tag &middot; negativna rečenica</div><div class="q-text">They can't swim, _______?</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">A</span> can they</div>
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">B</span> can't they</div>
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> could they</div>
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> couldn't they</div>
    </div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 &middot; nepravilan komparativ</div><div class="q-text">The weather today is _______ than yesterday. (bad)</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> badder</div>
      <div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">B</span> worse</div>
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">C</span> more bad</div>
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> worst</div>
    </div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 &middot; question tag &middot; have got</div><div class="q-text">They have got a new car, _______?</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> do they</div>
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">B</span> have they</div>
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">C</span> got they</div>
      <div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">D</span> haven't they</div>
    </div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 &middot; superlativ &middot; dug pridjev</div><div class="q-text">It is _______ painting in the museum. (beautiful)</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> the beautifulest</div>
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> the more beautiful</div>
      <div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">C</span> the most beautiful</div>
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> more beautiful</div>
    </div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div><div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:20px 28px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:340px;text-align:center">
        <div style="font-size:36px;margin-bottom:10px">&#x1F3C6;</div>
        <div style="font-size:17px;font-weight:700;color:var(--green);margin-bottom:6px">Skripta zavr&#353;ena!</div>
        <div style="font-size:13px;color:var(--t2);font-family:var(--mono)">Sva 15 poglavlja — check!<br>Sretna matura! &#x1F4AA;</div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upi&#353;i ispravni komparativ, superlativ ili question tag.</p>
    <div class="fitb-block" id="fi1">
      <div class="fitb-sent">She is _______ than her sister. (tall)</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi1_inp" placeholder="taller" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','taller','comp')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi1','f1fb','taller','comp')">Check</button>
      </div>
      <div class="fitb-fb" id="f1fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi2">
      <div class="fitb-sent">Math is _______ than English for me. (difficult)</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi2_inp" placeholder="more difficult" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','more difficult','comp')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi2','f2fb','more difficult','comp')">Check</button>
      </div>
      <div class="fitb-fb" id="f2fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi3">
      <div class="fitb-sent">He is _______ player in the team. (good — superlativ)</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi3_inp" placeholder="the best" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','the best','comp')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi3','f3fb','the best','comp')">Check</button>
      </div>
      <div class="fitb-fb" id="f3fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi4">
      <div class="fitb-sent">She runs _______ her brother. (as fast — jednakost)</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi4_inp" placeholder="as fast as" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','as fast as','comp')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi4','f4fb','as fast as','comp')">Check</button>
      </div>
      <div class="fitb-fb" id="f4fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi5">
      <div class="fitb-sent">It's a beautiful day, _______?</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi5_inp" placeholder="isn't it?" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','isn\'t it?','comp')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi5','f5fb','isn\'t it?','comp')">Check</button>
      </div>
      <div class="fitb-fb" id="f5fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi6">
      <div class="fitb-sent">They can swim, _______?</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi6_inp" placeholder="can't they?" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','can\'t they?','comp')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi6','f6fb','can\'t they?','comp')">Check</button>
      </div>
      <div class="fitb-fb" id="f6fb" aria-live="polite"></div>
    </div>

    <hr class="divider">
    <div class="sec-label">// error correction</div>
    <p class="prose" style="margin-bottom:14px">Svaka re&#269;enica sadr&#382;i tipičnu gre&#353;ku. Klikni da vidis ispravak.</p>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">""She is more tall than her sister.""</div>
        <button class="err-btn" onclick="showErrFix('ef1',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef1">&#x2705; <span class="correct">She is <b>taller</b> than her sister.</span><span class="explain">tall = kratak pridjev (1 slog) &rarr; +er, ne more +. more tall ne postoji.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""He is the most good student in the class.""</div>
        <button class="err-btn" onclick="showErrFix('ef2',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef2">&#x2705; <span class="correct">He is <b>the best</b> student in the class.</span><span class="explain">good je nepravilan: good &rarr; better &rarr; the best. Nikad most good ili goodest!</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""It's cold today, isn't he?""</div>
        <button class="err-btn" onclick="showErrFix('ef3',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef3">&#x2705; <span class="correct">It's cold today, <b>isn't it?</b></span><span class="explain">Tag zamjenica mora biti ista kao subjekt re&#269;enice. Subjekt je it (It's cold) &rarr; tag: isn't it?</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""They haven't finished, have they not?""</div>
        <button class="err-btn" onclick="showErrFix('ef4',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef4">&#x2705; <span class="correct">They haven't finished, <b>have they?</b></span><span class="explain">Question tag je kratak: pomoćni glagol + zamjenica. Negativnost je već u samom tagu (haven't &rarr; have) &mdash; ne dodaje se not!</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""This is more easy than I thought.""</div>
        <button class="err-btn" onclick="showErrFix('ef5',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef5">&#x2705; <span class="correct">This is <b>easier</b> than I thought.</span><span class="explain">easy = 2 sloga s -y &rarr; mijenja se u -ier. easy &rarr; easier (ne more easy!).</span></div>
      </div>
    </div>

    <div class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim zadacima mature</div><div class="cta-sub">Svi NCVVO zadaci 2010.&ndash;2026. uz detaljna obja&#353;njenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>

    <div class="matura">
      <div class="matura-hd">&#x2B50; for the exam &mdash; key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>Kratki (+er)</b>: taller, bigger (CVC), happier (-y) &middot; uvijek + than u usporedbi</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Dugi (more+)</b>: more interesting, more expensive + than &middot; nikad interestinger!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Superlativ</b>: the tallest / the most interesting &middot; uvijek s the!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Nepravilni</b>: good&rarr;better&rarr;best &middot; bad&rarr;worse&rarr;worst &middot; far&rarr;further&rarr;furthest</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>as...as</b>: She is as tall as her sister. &middot; nikad as...than!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Question tags</b>: + re&#269;enica &rarr; - tag &middot; - re&#269;enica &rarr; + tag &middot; isti glagol + ista zamjenica</span></li>
      </ul>
    </div>

    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kada +er, kada more?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Broj slogova je jedino pravilo:</b><br><br>1 slog &rarr; +er: tall&rarr;taller, big&rarr;bigger, old&rarr;older<br>CVC: udvostru&#269;i zadnji suglasnik: big&rarr;bigger, hot&rarr;hotter<br>-y: promijeni u -ier: happy&rarr;happier, easy&rarr;easier<br><br>2+ sloga &rarr; more: more interesting, more difficult, more expensive<br><br>&#x274C; more tall, more fast &rarr; &#x2713; taller, faster</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Svi nepravilni oblici &mdash; za&#353;to su va&#382;ni?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Nepravilni pridjevi su najtipičniji MCQ mamci!</b><br><br>good &rarr; <b>better</b> &rarr; <b>the best</b><br>bad &rarr; <b>worse</b> &rarr; <b>the worst</b><br>far &rarr; <b>further</b> &rarr; <b>the furthest</b><br>little &rarr; less &rarr; the least<br>many/much &rarr; more &rarr; the most<br><br>Distraktori u testovima: gooder, goodest, bader, badder, worser &mdash; sve krivo!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Question tag &mdash; koja zamjenica, koji glagol?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Zamjenica = isti subjekt re&#269;enice:</b><br>She is... &rarr; isn't <b>she</b>? &middot; It's... &rarr; isn't <b>it</b>?<br>They have... &rarr; haven't <b>they</b>?<br><br><b>Glagol = isti pomo&#263;ni glagol iz re&#269;enice:</b><br>She <b>is</b>... &rarr; <b>isn't</b> she? &middot; He <b>can</b>... &rarr; <b>can't</b> he?<br>She <b>works</b>... &rarr; <b>doesn't</b> she? (Ps: do/does)<br>He <b>finished</b>... &rarr; <b>didn't</b> he? (PSt: did)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch14 &mdash; superlativ + the</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Superlativ uvijek ide s 'the' &mdash; ovo ponavlja pravilo iz ch14!</b><br><br>the tallest &middot; the most interesting &middot; the best &middot; the worst<br><br>Zašto: superlativ opisuje jedinstven entitet (postoji samo jedan 'najvi&#353;i') &rarr; jedinstven &rarr; the<br><br>Ch14 + Ch15 zajedno: the best student (the = superlativ iz ch15 + ch14)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch05 &mdash; modalni glagoli u question tags</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Question tags koriste modalne glagole iz ch05!</b><br><br>She <b>can</b> swim, can't she? (ch05: can)<br>He <b>must</b> leave, mustn't he? (ch05: must)<br>They <b>should</b> know, shouldn't they? (ch05: should)<br>She <b>might</b> come, mightn't she? (ch05: might)<br><br>Dobro vladanje ch05 modalima olak&#353;ava question tags!</div>
    </div>

    <div style="margin:36px 0 24px;padding:24px;background:linear-gradient(135deg,var(--bg-elevated),var(--bg-card));border:1px solid var(--lime-border);border-radius:var(--r4);text-align:center">
      <div style="font-size:32px;margin-bottom:12px">&#x1F3C1;</div>
      <div style="font-size:18px;font-weight:700;color:var(--lime);margin-bottom:8px">Skripta zavr&#353;ena!</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6">Sva 15 poglavlja pro&#273;ena.<br>Ponovi slaba mjesta, rje&#353;i NCVVO zadatke na Discere.<br style="margin-bottom:4px"><b style="color:var(--lime)">Sretna matura! &#x1F4AA;</b></div>
    </div>

    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// vrati se na po&#269;etak</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter01.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">01 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Present Simple &amp; Continuous</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Po&#269;etak skripte</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter14.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 14</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Articles &amp; Determiners</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Prethodno poglavlje</div>
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
      <a href="chapter14.html" class="nav-btn">&larr; Chapter 14</a>
      <a href="chapter01.html" class="nav-btn primary">&#x21BA; Po&#269;etak skripte</a>
    </div>
  </div>
</div></main></div>
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

const CH15_JS = `var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  if(i===1&&typeof initSpeedDrill==='function'&&sdState.idx===0)initSpeedDrill();
  window.scrollTo({top:0,behavior:'smooth'});
}
var E={
  q1:{c:"✓ Točno. Kratki pridjevi (1 slog): +er. tall → taller. Than = nego/od.",w:"✗ Netočno. Kratki pridjevi (1 slog): +er. tall → taller + than. Točan odgovor: B."},
  q2:{c:"✓ Točno. Dugi pridjevi (2+ sloga): more + pridjev. Expensive → more expensive.",w:"✗ Netočno. Dugi pridjevi: more + pridjev. more expensive than. Točan odgovor: C."},
  q3:{c:"✓ Točno. Good → better (nepravilan). Good/bad/far su nepravilni.",w:"✗ Netočno. good/bad/far su nepravilni: good→better, bad→worse, far→further. Točan odgovor: A."},
  q4:{c:"✓ Točno. Superlativ kratkih pridjeva: the + est. tall → the tallest. Uvijek s 'the'!",w:"✗ Netočno. Superlativ kratkog pridjeva: the + est. tall → the tallest. Točan odgovor: D."},
  q5:{c:"✓ Točno. as...as = isti stupanj. She is as tall as her sister = iste visine.",w:"✗ Netočno. as...as = jednakost/isti stupanj: as + pridev/prilog + as. Točan odgovor: B."},
  q6:{c:"✓ Točno. Question tag: rečenica je pozitivna → tag je negativan. isn't she? (is → isn't).",w:"✗ Netočno. Pozitivna rečenica → negativan tag. She is tired → isn't she? Točan odgovor: C."},
  q7:{c:"✓ Točno. Negativna rečenica → pozitivan tag. can't → can. They can't swim → can they?",w:"✗ Netočno. Negativna rečenica → pozitivan tag (bez not). can't → can they? Točan odgovor: A."},
  q8:{c:"✓ Točno. bad → worse (nepravilan komparativ). bad/worse/worst.",w:"✗ Netočno. bad je nepravilan: bad → worse → worst. Točan odgovor: B."},
  q9:{c:"✓ Točno. have got → haven't they? Pomoćni glagol iz rečenice, zamjenica = they.",w:"✗ Netočno. Pomoćni glagol iz rečenice: have got → haven't they? Točan odgovor: D."},
  q10:{c:"✓ Točno. Dugi superlativ: the most + pridjev. the most beautiful.",w:"✗ Netočno. Dugi pridjevi: the most + pridjev. the most beautiful. Točan odgovor: C."}
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
    document.getElementById('slbl').textContent=correct===total?'Savrseno! 🎉':correct>=9?'Odlicno!':correct>=7?'Good. Ponovi nepravilne i question tags.':correct>=5?'Vrati se na formule.':'Vrati se na Learn tab.';
    document.getElementById('score').classList.add('show');
    if(correct>=8){document.getElementById('completionBadge').style.display='block';tabDone[2]=true;saveProgress();document.querySelectorAll('.tab')[2].classList.add('done-tab');}
  }
}
document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2')return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){for(var i=0;i<QORDER.length;i++){if(answered[QORDER[i]]===undefined){var opts=document.querySelectorAll('#'+QORDER[i]+' .q-opt:not(.disabled)');if(opts[k-1])opts[k-1].click();break;}}}
  var sw=document.getElementById('sdq-wrap');if(sw){var sb=sw.querySelectorAll('.sd-btn');if(e.key==='1'&&sb[0])sb[0].click();if(e.key==='2'&&sb[1])sb[1].click();if(e.key==='3'&&sb[2])sb[2].click();}
});
function retryQuiz(){
  answered={};correct=0;
  QORDER.forEach(function(qid){var b=document.getElementById(qid);if(!b)return;b.querySelectorAll('.q-opt').forEach(function(o){o.classList.remove('correct','wrong','disabled')});var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}});
  document.getElementById('score').classList.remove('show');document.getElementById('completionBadge').style.display='none';tabDone[2]=false;saveProgress();document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}
function checkFitb(id,fbId,correct,tag){
  var inp=document.getElementById(id+'_inp');if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();var ok=(val===correct.toLowerCase());
  inp.disabled=true;inp.style.borderColor=ok?'var(--green)':'var(--red)';
  var fb=document.getElementById(fbId);if(fb){fb.innerHTML=ok?'&#x2713; Tocno!':'&#x2717; Tocan oblik: <b>'+correct+'</b>';fb.className='fitb-fb '+(ok?'ok':'no');}
}
function svAns(el,id,correct){
  if(el.classList.contains('sv-correct')||el.classList.contains('sv-wrong'))return;
  var parent=el.closest('.sv-opts');var opts=parent?parent.querySelectorAll('.sv-opt'):[];var isCorrect=el.textContent.trim()===correct;
  opts.forEach(function(o){o.style.pointerEvents='none';});
  if(isCorrect){el.classList.add('sv-correct');}else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o.textContent.trim()===correct)o.classList.add('sv-reveal');});}
  var fb=document.getElementById(id+'fb');if(fb){fb.className='sv-fb '+(isCorrect?'ok':'no')+' show';fb.innerHTML=(isCorrect?'✓ Tocno! ':'✗ Netocno. Tocno: ')+'<strong>'+correct+'</strong>';}
}
function showErrFix(id,btn){document.getElementById(id).classList.add('show');if(btn){btn.setAttribute('aria-expanded','true');btn.style.display='none';}}
function toggleReveal(card){var isOpen=card.classList.contains('open');card.classList.toggle('open');card.setAttribute('aria-expanded',!isOpen?'true':'false');}
function copyFormula(btn,text){if(navigator.clipboard){navigator.clipboard.writeText(text).then(function(){var orig=btn.textContent;btn.textContent='copied!';btn.style.color='var(--lime)';setTimeout(function(){btn.textContent=orig;btn.style.color='';},1200);});}}
var SD=[
  {s:"She is _______ than her brother. (tall)", opts:["taller","more tall","tallest"], ans:0, exp:"Kratak pridjev (1 slog): +er. tall → taller + than."},
  {s:"This film is _______ than the last one. (interesting)", opts:["interestinger","more interesting","most interesting"], ans:1, exp:"Dugi pridjev (3 sloga): more + pridjev. more interesting than."},
  {s:"He ran _______ than anyone else. (fast)", opts:["more fast","faster","fastest"], ans:1, exp:"Kratak pridjev/prilog (1 slog): +er. fast → faster."},
  {s:"It is _______ hotel in the city. (expensive — superlativ)", opts:["the most expensive","the expensivest","the more expensive"], ans:0, exp:"Dugi superlativ: the most + pridjev. the most expensive."},
  {s:"She is _______ student in the class. (good — superlativ)", opts:["the goodest","the most good","the best"], ans:2, exp:"Nepravilan superlativ: good → the best. good/better/best."},
  {s:"He is _______ as his father. (tall — jednakost)", opts:["as tall","so tall","taller"], ans:0, exp:"Jednakost: as + pridjev + as. He is as tall as his father."},
  {s:"She can swim, _______? (question tag)", opts:["can she","can't she","isn't she"], ans:1, exp:"Pozitivna rečenica + može = can → negativan tag: can't she?"},
  {s:"They aren't ready, _______? (question tag)", opts:["aren't they","are they","don't they"], ans:1, exp:"Negativna rečenica → pozitivan tag (bez not). aren't → are they?"},
  {s:"The film was _______ than I expected. (bad)", opts:["badder","more bad","worse"], ans:2, exp:"Nepravilan komparativ: bad → worse (ne badder!). bad/worse/worst."},
  {s:"She has finished, _______? (question tag)", opts:["has she","hasn't she","doesn't she"], ans:1, exp:"Pozitivna rečenica → negativan tag. has → hasn't she?"}
,
  {s:"He has to work on Sundays, _______? (question tag)", opts:["hasn't he","doesn't he","isn't he"], ans:1, exp:"have to = obi&#269;an glagol (ne modalni) \u2192 tag koristi do/does. He has to \u2192 doesn't he? (ne hasn't he \u2014 to bi bilo za have got!)"}];
var sdState={idx:0,results:[]};
function initSpeedDrill(){sdState={idx:0,results:[]};document.getElementById('sd-score-box').classList.remove('show');renderSD();}
function renderSD(){
  var prog=document.getElementById('sdprog');
  if(prog){prog.innerHTML='';for(var i=0;i<SD.length;i++){var d=document.createElement('div');d.className='sd-dot'+(i<sdState.results.length?(sdState.results[i]?' ok':' no'):(i===sdState.idx?' cur':''));prog.appendChild(d);}}
  var wrap=document.getElementById('sdq-wrap');if(!wrap)return;
  if(sdState.idx>=SD.length){
    wrap.innerHTML='';var sc=sdState.results.filter(function(r){return r}).length;
    document.getElementById('sd-score-num').textContent=sc+'/'+SD.length;
    document.getElementById('sd-score-lbl').textContent=sc===SD.length?'Savrseno! 🎉':sc>=8?'Odlicno! 💪':sc>=6?'Dobro! Ponovi nepravilne i question tags.':'Vrati se na formule.';
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
  btns[idx].style.background=ok?'var(--green)':'var(--red-dim)';btns[idx].style.color=ok?'#080B10':'var(--red)';btns[idx].style.borderColor=ok?'var(--green)':'var(--red-border)';
  if(!ok){btns[q.ans].style.background='var(--green-dim)';btns[q.ans].style.color='var(--green)';btns[q.ans].style.borderColor='var(--green-border)';}
  var fb=document.getElementById('sdfb');fb.className='sd-fb show '+(ok?'ok':'no');fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1700);
}
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}
function saveProgress(){try{localStorage.setItem('maturix_ch15_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch15_tabs')||'null');
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