// Maturiraj.hr — Engleski niža razina · Poglavlje 1
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ENG_NIZA_CH01({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch01-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH01_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch01-js";
    scriptEl.textContent = CH01_JS;
    document.body.appendChild(scriptEl);

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
      if (num === 2 && nav.onNext) nav.onNext();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch01-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch01-root"
      dangerouslySetInnerHTML={{ __html: CH01_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH01_CSS = `
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

const CH01_BODY = `<div class="shell">

<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">&#x2715; Zatvori</button>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter02.html'"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter03.html'"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter04.html'"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter05.html'"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter06.html'"><span class="sb-dot"></span> 06 &middot; Uvjetne rečenice 0, 1, 2</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter07.html'"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
  <div class="sb-label">// Vještine</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter08.html'"><span class="sb-dot"></span> 08 &middot; Vokabular — život</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter09.html'"><span class="sb-dot"></span> 09 &middot; Čitanje s razumijevanjem</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter10.html'"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter11.html'"><span class="sb-dot"></span> 11 &middot; Strategije slušanja</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter12.html'"><span class="sb-dot"></span> 12 &middot; Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter13.html'"><span class="sb-dot"></span> 13 &middot; Neupravni govor</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter14.html'"><span class="sb-dot"></span> 14 &middot; Članovi: a / an / the</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter15.html'"><span class="sb-dot"></span> 15 &middot; Komparativ i tag pitanja</div>
</div>
<nav class="sidebar">
  <div class="sb-brand">
    <div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg></div>
    <div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">EN &middot; niža razina</div></div>
  </div>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item active"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter02.html'" style="cursor:pointer"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter03.html'" style="cursor:pointer"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item" onclick="window.location='chapter04.html'" style="cursor:pointer"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
  <div class="sb-item" onclick="window.location='chapter05.html'" style="cursor:pointer"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
  <div class="sb-item" onclick="window.location='chapter06.html'" style="cursor:pointer"><span class="sb-dot"></span> 06 &middot; Uvjetne rečenice 0, 1, 2</div>
  <div class="sb-item" onclick="window.location='chapter07.html'" style="cursor:pointer"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
  <div class="sb-label">// Vještine</div>
  <div class="sb-item" onclick="window.location='chapter08.html'" style="cursor:pointer"><span class="sb-dot"></span> 08 &middot; Vokabular — život</div>
  <div class="sb-item" onclick="window.location='chapter09.html'" style="cursor:pointer"><span class="sb-dot"></span> 09 &middot; Čitanje s razumijevanjem</div>
  <div class="sb-item" onclick="window.location='chapter10.html'" style="cursor:pointer"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
  <div class="sb-item" onclick="window.location='chapter11.html'" style="cursor:pointer"><span class="sb-dot"></span> 11 &middot; Strategije slušanja</div>
  <div class="sb-item" onclick="window.location='chapter12.html'" style="cursor:pointer"><span class="sb-dot"></span> 12 &middot; Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 &middot; Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 &middot; Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 &middot; Komparativ i tag pitanja</div>
  <div class="sb-footer">01 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location=\\'index.html\\'" style="cursor:pointer">← chapters</span><span class="bc-sep">/</span>
    <span>grammar</span><span class="bc-sep">/</span>
    <span class="bc-active">present-simple-&amp;-continuous</span>
  </div>

  <div class="tabs-wrap">
    <div class="tab active" onclick="switchTab(0)">⚡ 2 min</div>
    <div class="tab" onclick="switchTab(1)">📖 Learn</div>
    <div class="tab" onclick="switchTab(2)">✍️ Practice</div>
  </div>
  <div class="tab-progress-row" id="tabProgressRow">
    <div class="tab-prog-item active" id="tp0"><span class="tp-dot"></span><span class="tp-lbl">Overview</span></div>
    <div class="tp-arrow">→</div>
    <div class="tab-prog-item" id="tp1"><span class="tp-dot"></span><span class="tp-lbl">Learn grammar</span></div>
    <div class="tp-arrow">→</div>
    <div class="tab-prog-item" id="tp2"><span class="tp-dot"></span><span class="tp-lbl">Practice & quiz</span></div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════
       LAYER 0 — 2 MIN
  ═══════════════════════════════════════════════════════════ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 01 / 15 · grammar</div>
      <h1 class="hero-title">Present <span>Simple</span><br>&amp; Present Continuous</h1>
      <p class="hero-sub">2 tense forms · 1 clear rule · most common exam error</p>
      <div class="hero-meta" style="display:flex;gap:10px;margin-bottom:16px;flex-wrap:wrap">
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);background:var(--sky-dim);color:var(--sky);border:1px solid var(--sky-border)">⏱ ~25 min</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);background:var(--lime-dim);color:var(--lime);border:1px solid var(--lime-border)">niža razina</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);background:var(--amber-dim);color:var(--amber);border:1px solid var(--amber-border)">01 / 12</span>
      </div>
      <div class="progress-track"><div class="progress-bar" style="width:8%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">Present Simple</span>
      <span class="pill pill-violet">Present Continuous</span>
      <span class="pill pill-amber">Signal words</span>
      <span class="pill pill-sky">State verbs</span>
      <span class="pill pill-red">Exam traps</span>
    </div>

    <div class="sec-label">// at a glance</div>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon lime">PS</div>
        <div class="stat-name">Present Simple</div>
        <div class="stat-desc">Rutine, navike, činjenice. Forma: glagol (+ <b style="color:var(--lime)">-s</b> za he/she/it)</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon violet">PC</div>
        <div class="stat-name">Present Continuous</div>
        <div class="stat-desc">Upravo sada, privremeno, dogovoreni planovi. Forma: <b style="color:var(--violet)">am/is/are + -ing</b></div>
      </div>
      <div class="stat-card">
        <div class="stat-icon sky">SV</div>
        <div class="stat-name">State verbs</div>
        <div class="stat-desc"><em style="color:var(--sky)">know, love, want…</em> — uvijek PS, <b>nikad</b> -ing!</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon amber">SW</div>
        <div class="stat-name">Signal words</div>
        <div class="stat-desc"><em style="color:var(--lime)">always / never</em> → PS · <em style="color:var(--violet)">now / look!</em> → PC</div>
      </div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">PS — kada</div><div class="cv">Rutine & navike · trajne činjenice · opće istine · fiksni rasporedi</div></div>
      <div class="concept-row"><div class="ck lime">PS — forma</div><div class="cv">I/you/we/they: <code>work</code> · He/she/it: <code>works</code> · Neg: <code>don't / doesn't + inf.</code></div></div>
      <div class="concept-row"><div class="ck violet">PC — kada</div><div class="cv">Radnja u ovom trenutku · privremena situacija · dogovoreni konkretni planovi</div></div>
      <div class="concept-row"><div class="ck violet">PC — forma</div><div class="cv">I: <code>am working</code> · He/she/it: <code>is working</code> · You/we/they: <code>are working</code></div></div>
      <div class="concept-row"><div class="ck sky">State verbs</div><div class="cv"><code>know, believe, want, need, like, love, hate, understand, remember, seem, belong, have*</code></div></div>
      <div class="concept-row"><div class="ck red">Zamka br. 1</div><div class="cv">He/she/it bez <b>-s</b> u PS = automatska greška. "She go" ❌ → "She <b>goes</b>" ✓</div></div>
    </div>

    <!-- NEW: 3 pravila panic-proof -->
    <div class="sec-label" style="margin-top:32px">// ako zapamtiš samo ovo — 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🧠 panic-proof — 3 rules that cover 90% of exam questions</div>
      <div class="panic-body">
        <div class="panic-step">
          <div class="panic-num">1</div>
          <div class="panic-text"><b>Rutina / činjenica / raspored</b> → PS · He/she/it mora imati <b style="color:var(--amber)">-s</b> (goes, watches, studies)</div>
        </div>
        <div class="panic-step">
          <div class="panic-num">2</div>
          <div class="panic-text"><b>Upravo sada / privremeno / konkretan plan</b> → PC · Uvijek <b style="color:var(--violet)">am/is/are + -ing</b></div>
        </div>
        <div class="panic-step">
          <div class="panic-num">3</div>
          <div class="panic-text"><b>State verb</b> (know, want, love, believe…) → <b>UVIJEK PS, NIKAD -ing</b> · Bez iznimke!</div>
        </div>
      </div>
    </div>

    <!-- NEW: 5-second recall cards -->
    <div class="sec-label">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Kad koristim Present Simple?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PS = rutine, navike, opće istine, rasporedi.</b><br>Signal words: <span class="ok">always, usually, every day, never, on Mondays, normally</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Kad koristim Present Continuous?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PC = upravo sada, privremeno, dogovoreni planovi.</b><br>Signal words: <span style="color:var(--violet)">now, at the moment, look!, this week, tonight, currently</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Što su state verbs i zašto su bitni?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>State verbs opisuju stanja, ne radnje — UVIJEK idu u PS.</b><br>Lista: <span class="ok">know, understand, believe, want, need, like, love, hate, seem, belong, have (possess)</span><br>❌ <span class="bad">"I am knowing"</span> → ✅ <span class="ok">"I know"</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Najčešća greška na maturi?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Top 3 greške:</b><br>
        1. <span class="bad">She go</span> → <span class="ok">She goes</span> (zaboravljen -s za he/she/it)<br>
        2. <span class="bad">I am knowing</span> → <span class="ok">I know</span> (state verb u -ing)<br>
        3. <span class="bad">She don't</span> → <span class="ok">She doesn't</span> (krivi pomoćni glagol)
      </div>
    </div>

    <!-- NEW: Panic box exam procedure -->
    <div class="sec-label" style="margin-top:32px">// if you panic on the exam — do this</div>
    <div class="panic-box">
      <div class="panic-hd">🚨 exam panic protocol — 5 koraka</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Pročitaj <b>cijelu rečenicu</b> — ne pogađaj iz jedne riječi</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Traži <b>signal words</b> (always/never → PS · now/look → PC)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Pitaj se: <b>rutina ili upravo sada?</b> Rutina = PS · Sada/privremeno = PC</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Je li glagol <b>state verb?</b> (know/want/love…) → automatski PS</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Subjekt he/she/it + PS? → <b>Provjeri -s / doesn't / Does</b></div></div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nav-btn disabled">← prev</span>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn more →</span>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════
       LAYER 1 — LEARN
  ═══════════════════════════════════════════════════════════ -->
  <div class="layer" id="l1">
    <div class="sec-label">// present simple — in depth</div>
    <p class="prose">Present Simple koristimo kad govorimo o stvarima koje su <strong>stalne, redovite ili uvijek istinite</strong>. Radnja nije vezana za ovaj trenutak — ona je dio opće rutine ili nepromjenjive istine.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge ps">PS</div>
        <div><div class="gram-title">Present Simple — tvorba</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">I / You / We / They</span> + <span class="val">glagol</span> → I <span class="val">work</span> every day.<br>
          <span class="sub">He / She / It</span> + <span class="val">glagol-(e)s</span> → She <span class="val">works</span> every day.
        </div>
        <div class="formula">
          <span class="lbl">− Negativ</span><br>
          <span class="sub">I / You / We / They</span> + <span class="kw">don't</span> + glagol → I <span class="kw">don't</span> like coffee.<br>
          <span class="sub">He / She / It</span> + <span class="kw">doesn't</span> + glagol → She <span class="kw">doesn't</span> like coffee.
        </div>
        <div class="formula">
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Do</span> + <span class="sub">I/you/we/they</span> + glagol? → <span class="kw">Do</span> you work here?<br>
          <span class="kw">Does</span> + <span class="sub">he/she/it</span> + glagol? → <span class="kw">Does</span> she work here?
        </div>
        <div class="callout callout-warn" style="margin-top:14px">
          <span class="callout-icon">⚠</span>
          <div class="callout-body">
            <div class="callout-title">Pravopis -s / -es / -ies</div>
            <div class="callout-text">
              Većina → dodaj <strong style="color:var(--red)">-s</strong>: <em>work→works</em>, <em>play→plays</em><br>
              Završava na -s/-sh/-ch/-x/-o → <strong style="color:var(--red)">-es</strong>: <em>watch→watches</em>, <em>go→goes</em><br>
              Suglasnik+y → <strong style="color:var(--red)">-ies</strong>: <em>study→studies</em>, <em>fly→flies</em><br>
              Samoglasnik+y → samo <strong style="color:var(--red)">-s</strong>: <em>play→plays</em> ✓ (ne "plaies"!)
            </div>
          </div>
        </div>
        <div class="sub-label">→ Primjeri</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">She <b>drinks</b> coffee every morning.</div><span class="ex-arr">→</span><div class="ex-hr">every morning — navika → PS</div></div>
          <div class="ex"><div class="ex-en">The sun <b>rises</b> in the east.</div><span class="ex-arr">→</span><div class="ex-hr">opća istina → PS</div></div>
          <div class="ex"><div class="ex-en">The train <b>leaves</b> at 9.</div><span class="ex-arr">→</span><div class="ex-hr">fiksni raspored → PS</div></div>
          <div class="ex"><div class="ex-en">He <b>doesn't eat</b> meat.</div><span class="ex-arr">→</span><div class="ex-hr">trajna navika, neg. → PS</div></div>
          <div class="ex"><div class="ex-en"><b>Do</b> they <b>live</b> in London?</div><span class="ex-arr">→</span><div class="ex-hr">trajna situacija, pitanje → PS</div></div>
        </div>
      </div>
    </div>

    <!-- NEW: Mikro-provjera nakon PS -->
    <div class="callout callout-info" style="margin-top:4px">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera — klikni za odgovor</div>
        <div class="reveal-card" onclick="toggleReveal(this)" style="margin:8px 0 4px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto pišemo "She watches" a ne "She watchs"?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">Glagol završava na <b>-ch</b> → dodajemo <b style="color:var(--lime)">-es</b> (ne samo -s). Pravilo: -s/-sh/-ch/-x/-o → uvijek <b>-es</b>.</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// present continuous — in depth</div>
    <p class="prose">Present Continuous koristimo kada radnja traje <strong>upravo sada</strong> ili je privremena. Posebna upotreba: <em>dogovoreni, konkretni planovi u bliskoj budućnosti</em> — najčešća zamka na ispitima.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pc">PC</div>
        <div><div class="gram-title">Present Continuous — tvorba</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula pc">
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">I</span> + <span class="val">am</span> + glagol<span class="val">-ing</span> → I <span class="val">am working</span> now.<br>
          <span class="sub">He / She / It</span> + <span class="val">is</span> + glagol<span class="val">-ing</span> → She <span class="val">is working</span> now.<br>
          <span class="sub">You / We / They</span> + <span class="val">are</span> + glagol<span class="val">-ing</span> → They <span class="val">are working</span> now.
        </div>
        <div class="formula pc">
          <span class="lbl">− Negativ</span><br>
          I <span class="kw">am not / I'm not</span> working. · She <span class="kw">isn't</span> working. · They <span class="kw">aren't</span> working.
        </div>
        <div class="formula pc">
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Am</span> I working? · <span class="kw">Is</span> she working? · <span class="kw">Are</span> they working?
        </div>
        <div class="callout callout-purple" style="margin-top:14px">
          <span class="callout-icon">✏️</span>
          <div class="callout-body">
            <div class="callout-title">Pravopis -ing oblika</div>
            <div class="callout-text">
              Većina → samo dodaj <strong style="color:var(--violet)">-ing</strong>: <em>work→working</em>, <em>play→playing</em><br>
              Završava na nijemo -e → <strong style="color:var(--violet)">izbaci -e</strong>: <em>make→making</em>, <em>come→coming</em><br>
              Kratki glagol (CVC) → <strong style="color:var(--violet)">udvostruči zadnji suglasnik</strong>: <em>run→running</em>, <em>swim→swimming</em><br>
              Paziti: <em>open→opening</em> (ne "openning"! — nije jednosložni CVC)
            </div>
          </div>
        </div>
        <div class="sub-label">→ Primjeri</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">Look! It <b class="pc">is raining</b>.</div><span class="ex-arr">→</span><div class="ex-hr">Look! = upravo sada → PC</div></div>
          <div class="ex"><div class="ex-en">I <b class="pc">am studying</b> this week.</div><span class="ex-arr">→</span><div class="ex-hr">this week = privremeno → PC</div></div>
          <div class="ex"><div class="ex-en">She <b class="pc">is meeting</b> friends tonight.</div><span class="ex-arr">→</span><div class="ex-hr">tonight = dogovoreni plan → PC</div></div>
          <div class="ex"><div class="ex-en">He <b class="pc">isn't watching</b> TV right now.</div><span class="ex-arr">→</span><div class="ex-hr">right now = sada, neg. → PC</div></div>
        </div>
      </div>
    </div>

    <!-- NEW: Mikro-provjera nakon PC -->
    <div class="callout callout-info" style="margin-top:4px">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera — klikni za odgovor</div>
        <div class="reveal-card" onclick="toggleReveal(this)" style="margin:8px 0 4px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "make" → "making" a ne "makeing"?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">Glagol završava na <b>nijemo -e</b> → <b style="color:var(--violet)">izbaci -e</b> pa dodaj -ing. Pravilo: make→mak + ing = <b style="color:var(--violet)">making</b>. Isto vrijedi za: come→coming, write→writing.</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// when to use which</div>
    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head ps">✓ Present Simple</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Rutine i navike</b>He walks to school every day.</div>
          <div class="cmp-row"><b>Opće istine</b>Water boils at 100°C.</div>
          <div class="cmp-row"><b>Fiksni rasporedi</b>The bus leaves at 7:30.</div>
          <div class="cmp-row"><b>Trajna stanja/mišljenja</b>I love Italian food.</div>
          <div class="cmp-row"><b>Komentari u sportu</b>He passes and scores!</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head pc">⟳ Present Continuous</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Radnja upravo sada</b>She is talking on the phone.</div>
          <div class="cmp-row"><b>Privremena situacija</b>I'm staying at a hotel this week.</div>
          <div class="cmp-row"><b>Dogovoreni planovi</b>We are flying to Rome on Friday.</div>
          <div class="cmp-row"><b>Promjena / trend</b>Prices are rising.</div>
          <div class="cmp-row"><b>Iritantna navika (+always)</b>He's always losing his keys!</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// signal words</div>
    <p class="prose">Kad vidiš ove riječi u rečenici — <strong>gotovo uvijek</strong> znaš koje glagolsko vrijeme koristiti. Tvoj najveći saveznik na ispitu.</p>
    <div class="signal-grid">
      <div class="sig-card">
        <div class="sig-head ps">// PS — signal words</div>
        <div class="chips">
          <span class="chip ps">always</span><span class="chip ps">usually</span><span class="chip ps">often</span>
          <span class="chip ps">sometimes</span><span class="chip ps">rarely</span><span class="chip ps">never</span>
          <span class="chip ps">every day</span><span class="chip ps">every week</span>
          <span class="chip ps">on Mondays</span><span class="chip ps">in general</span>
          <span class="chip ps">normally</span><span class="chip ps">twice a week</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head pc">// PC — signal words</div>
        <div class="chips">
          <span class="chip pc">now</span><span class="chip pc">right now</span>
          <span class="chip pc">at the moment</span><span class="chip pc">currently</span>
          <span class="chip pc">at present</span><span class="chip pc">today</span>
          <span class="chip pc">this week</span><span class="chip pc">look!</span>
          <span class="chip pc">listen!</span><span class="chip pc">tonight</span>
          <span class="chip pc">this evening</span><span class="chip pc">still</span>
        </div>
      </div>
    </div>

    <!-- NEW: MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">📡 matura radar — zamke i gdje se pojavljuju</div>
      <div class="radar-body">
        <div class="radar-item">
          <div class="radar-badge rb-trap">ZAMKA 1</div>
          <div class="radar-text"><b>"now" + state verb</b> — izgleda kao PC, ali state verb uvijek ostaje PS<br><em>I am knowing</em> ❌ → <em>I know</em> ✓ · <em>She is wanting</em> ❌ → <em>She wants</em> ✓</div>
        </div>
        <div class="radar-item">
          <div class="radar-badge rb-trap">ZAMKA 2</div>
          <div class="radar-text"><b>"usually but this week/month"</b> — split-sentence zamka<br>Prva polovica → PS (navika) · Druga polovica → PC (privremeno)<br><em>She usually works in London, but this month she <b style="color:var(--violet)">is working</b> from home.</em></div>
        </div>
        <div class="radar-item">
          <div class="radar-badge rb-trap">ZAMKA 3</div>
          <div class="radar-text"><b>Zaboravljen -s za he/she/it</b> — najčešća greška<br><em>He play</em> ❌ / <em>She don't</em> ❌ → <em>He <b style="color:var(--lime)">plays</b></em> ✓ / <em>She <b style="color:var(--lime)">doesn't</b></em> ✓</div>
        </div>
        <div class="radar-item">
          <div class="radar-badge rb-trap">ZAMKA 4</div>
          <div class="radar-text"><b>"always" + PC = iritantna navika</b> — iznimka od pravila!<br><em>He's <b>always</b> losing his keys!</em> — ovo je PC, ali "always" ionako ukazuje na PC ovdje (negativna konotacija, navika)</div>
        </div>
        <div class="radar-item">
          <div class="radar-badge rb-where">GDJE</div>
          <div class="radar-text"><b>Gap fill:</b> traži signal words → odluči PS/PC → provjeri subjekt<br><b>MCQ:</b> eliminiraj nemoguće → state verb? → slaganje subjekt-glagol<br><b>Error correction:</b> provjeri -s, state verb u -ing, don't/doesn't</div>
        </div>
      </div>
    </div>

    <!-- NEW: Why not the other tense? -->
    <hr class="divider">
    <div class="sec-label">// zašto NIJE drugi odgovor? — click-reveal</div>
    <p class="prose">Ovo je ključno za maturu — nije dovoljno znati točan odgovor, moraš znati i <strong>zašto je krivi odgovor primamljiv</strong>.</p>

    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>❓ "She <em style="color:var(--red)">is going</em> to school every day." — zašto nije PC?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: She goes to school every day.</b><br>PC <em>is going</em> zvuči prirodno, ali "every day" = signal za rutinu = PS. PC koristimo samo za radnju koja se događa UPRAVO SADA ili je privremena — ne za navike.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>❓ "I <em style="color:var(--red)">am knowing</em> the answer." — zašto nije PC?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: I know the answer.</b><br><em>Know</em> je state verb — opisuje mentalno stanje, ne radnju. State verbs <b>NIKAD</b> ne idu u -ing oblik, čak ni kad je radnja "sada". Ovo je jedna od top 3 greške na maturi.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>❓ "He <em style="color:var(--red)">plays</em> football right now." — zašto nije PS?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: He is playing football right now.</b><br>"Right now" = signal za PC (radnja u ovom trenutku). PS <em>plays</em> zvuči gramatički ispravno (dobra -s forma), ali kontekst "right now" zahtijeva PC. Signal word uvijek pobijedi!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>❓ "The train <em style="color:var(--red)">is leaving</em> at 7:30 every morning." — zašto nije PC?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: The train leaves at 7:30 every morning.</b><br>"Every morning" = fiksni raspored = PS. PC <em>is leaving</em> zvuči dobro jer PC može označavati planirani odlazak — ali "every morning" pokazuje da je to trajna rutina, ne jednokratni plan.</div>
    </div>

    <hr class="divider">
    <div class="sec-label">// state verbs — ⚠️ danger zone</div>
    <p class="prose">Glagoli stanja opisuju <strong>stanje</strong>, ne radnju — i <strong>nikad</strong> ne idu u Continuous oblik. Jedna od najčešćih grešaka na maturi.</p>
    <div class="callout callout-warn">
      <span class="callout-icon">🚫</span>
      <div class="callout-body">
        <div class="callout-title">DANGER ZONE — ovo je gotovo uvijek greška na maturi</div>
        <div class="callout-text">
          ❌ <em>I am knowing the answer.</em> → ✅ <em>I <strong style="color:var(--green)">know</strong> the answer.</em><br>
          ❌ <em>She is loving chocolate.</em> → ✅ <em>She <strong style="color:var(--green)">loves</strong> chocolate.</em><br>
          ❌ <em>He is wanting a new phone.</em> → ✅ <em>He <strong style="color:var(--green)">wants</strong> a new phone.</em>
        </div>
      </div>
    </div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Kategorija</th><th>Glagoli</th><th>Primjer</th></tr></thead>
        <tbody>
          <tr><td><b>Emocije</b></td><td><code>love, hate, like, prefer, fear, adore</code></td><td>I <b>love</b> this song.</td></tr>
          <tr><td><b>Mentalni procesi</b></td><td><code>know, believe, understand, remember, forget, think*, mean, realize</code></td><td>She <b>believes</b> in magic.</td></tr>
          <tr><td><b>Čula/percepcija</b></td><td><code>see, hear, smell*, taste*, feel*</code></td><td>This cake <b>tastes</b> amazing.</td></tr>
          <tr><td><b>Posjedovanje</b></td><td><code>have*, own, belong, possess</code></td><td>He <b>has</b> a new car.</td></tr>
          <tr><td><b>Ostalo</b></td><td><code>want, need, seem, appear, contain, depend, matter</code></td><td>I <b>need</b> help.</td></tr>
        </tbody>
      </table>
    </div>
    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">Glagoli s * — mogu biti i action!</div>
        <div class="callout-text">
          <em>I <b>think</b> he's right.</em> (mišljenje→state→PS) vs. <em>I <b>am thinking</b> about it.</em> (razmišljam aktivno→PC)<br>
          <em>She <b>has</b> a dog.</em> (posjeduje→state→PS) vs. <em>She <b>is having</b> lunch.</em> (jede→action→PC)
        </div>
      </div>
    </div>

    <!-- NEW: State Verb Mini Drill -->
    <div class="sec-label" style="margin-top:24px">// state verb drill — odaberi ispravni oblik</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Klikni na ispravni oblik glagola.</p>
    <div class="sv-drill">
      <div class="sv-q">
        <div class="sv-sent">I _______ (know) the answer. It's very simple.</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'sv1',true,'know')">know</div>
          <div class="sv-opt" onclick="svAns(this,'sv1',false,'know')">am knowing</div>
        </div>
        <div class="sv-fb" id="sv1fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">She _______ (have) a beautiful house in the countryside.</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'sv2',false,'has')">is having</div>
          <div class="sv-opt" onclick="svAns(this,'sv2',true,'has')">has</div>
        </div>
        <div class="sv-fb" id="sv2fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">They _______ (believe) everything they read online.</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'sv3',true,'believe')">believe</div>
          <div class="sv-opt" onclick="svAns(this,'sv3',false,'believe')">are believing</div>
        </div>
        <div class="sv-fb" id="sv3fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">This bag _______ (belong) to my mother. Please return it.</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'sv4',false,'belongs')">is belonging</div>
          <div class="sv-opt" onclick="svAns(this,'sv4',true,'belongs')">belongs</div>
        </div>
        <div class="sv-fb" id="sv4fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">He _______ (want) a new laptop for his birthday.</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'sv5',true,'wants')">wants</div>
          <div class="sv-opt" onclick="svAns(this,'sv5',false,'wants')">is wanting</div>
        </div>
        <div class="sv-fb" id="sv5fb"></div>
      </div>
    </div>
    <div class="sv-score" id="sv-score-box">
      <div class="sv-score-num" id="sv-score-num">0/5</div>
      <div class="sv-score-lbl" id="sv-score-lbl"></div>
    </div>

    <!-- NEW: Interactive Decision Tree -->
    <hr class="divider">
    <div class="sec-label">// decision tree — koji tense?</div>
    <p class="prose">Koristite ovaj vodič kad niste sigurni. Idi pitanje po pitanje — odgovor je uvijek na kraju.</p>
    <div class="dtree">
      <div class="dt-node question">❓ Korak 1: Je li glagol <strong>state verb</strong>? (know, want, love, believe, need, seem, belong, have/possess…)</div>
      <div class="dt-row">
        <div class="dt-branch">
          <div class="dt-node yes-ps">✅ DA → <strong>Present Simple</strong><br><small style="font-size:11px;font-weight:500">State verbs NIKAD ne idu u -ing. Bez iznimke.</small></div>
        </div>
        <div class="dt-connector">NE ↓</div>
      </div>
      <div class="dt-indent">
        <div class="dt-node question">❓ Korak 2: Postoji li signal word za rutinu/naviku? (always, usually, every day, never, on Mondays, normally…)</div>
        <div class="dt-row">
          <div class="dt-branch">
            <div class="dt-node yes-ps">✅ DA → <strong>Present Simple</strong><br><small style="font-size:11px;font-weight:500">Rutina/navika = PS. Provjeri -s za he/she/it!</small></div>
          </div>
          <div class="dt-connector">NE ↓</div>
        </div>
        <div class="dt-indent">
          <div class="dt-node question">❓ Korak 3: Je li radnja <strong>upravo sada</strong> ili <strong>privremena</strong>? (now, at the moment, look!, this week, currently…)</div>
          <div class="dt-row">
            <div class="dt-branch">
              <div class="dt-node yes-pc">✅ DA → <strong>Present Continuous</strong><br><small style="font-size:11px;font-weight:500">am/is/are + -ing. Provjeri pravopis -ing oblika!</small></div>
            </div>
            <div class="dt-connector">NE ↓</div>
          </div>
          <div class="dt-indent">
            <div class="dt-node question">❓ Korak 4: Je li <strong>konkretan dogovoreni plan</strong> u bliskoj budućnosti? (We are meeting tomorrow / She is flying on Friday)</div>
            <div class="dt-row">
              <div class="dt-branch">
                <div class="dt-node yes-pc">✅ DA → <strong>Present Continuous</strong><br><small style="font-size:11px;font-weight:500">Potvrđeni planovi s konkretnim vremenom = PC.</small></div>
              </div>
              <div class="dt-connector">NE ↓</div>
            </div>
            <div class="dt-indent">
              <div class="dt-node yes-ps">📌 Vjerojatno <strong>Present Simple</strong> — trajna situacija, opća istina ili fiksni raspored.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Practice →</span>
    </div>
  </div>

  <!-- ═══════════════════════════════════════════════════════════
       LAYER 2 — PRACTICE
  ═══════════════════════════════════════════════════════════ -->
  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// exam mode</strong> · Odaberi točan oblik. Svaki odgovor dolazi s objašnjenjem. Target: <strong>8/10</strong> ili bolje.</div>
    <div class="kbd-hint">⌨️ Keyboard: tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> za odabir odgovora · <span class="kbd">Enter</span> potvrđuje</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 · present simple vs. continuous</div><div class="q-text">She _______ to work every day by bus.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q1',true)"><span class="q-letter">A</span> goes</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q1',false)"><span class="q-letter">B</span> is going</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q1',false)"><span class="q-letter">C</span> go</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q1',false)"><span class="q-letter">D</span> are going</div></div><div class="q-expl" id="q1e"></div></div>
    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 · present continuous · signal word</div><div class="q-text">Look! The children _______ in the garden right now.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q2',false)"><span class="q-letter">A</span> play</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q2',true)"><span class="q-letter">B</span> are playing</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q2',false)"><span class="q-letter">C</span> plays</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q2',false)"><span class="q-letter">D</span> is playing</div></div><div class="q-expl" id="q2e"></div></div>
    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 · state verb</div><div class="q-text">I _______ what you mean. It's very clear.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q3',false)"><span class="q-letter">A</span> am understanding</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q3',false)"><span class="q-letter">B</span> understanding</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q3',true)"><span class="q-letter">C</span> understand</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q3',false)"><span class="q-letter">D</span> are understanding</div></div><div class="q-expl" id="q3e"></div></div>
    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 · he/she/it rule</div><div class="q-text">My brother _______ three languages fluently.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q4',false)"><span class="q-letter">A</span> speak</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q4',true)"><span class="q-letter">B</span> speaks</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q4',false)"><span class="q-letter">C</span> is speaking</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q4',false)"><span class="q-letter">D</span> are speaking</div></div><div class="q-expl" id="q4e"></div></div>
    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 · planned future</div><div class="q-text">We _______ our grandparents this Sunday. We booked the tickets already.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q5',false)"><span class="q-letter">A</span> visit</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q5',false)"><span class="q-letter">B</span> visits</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q5',true)"><span class="q-letter">C</span> are visiting</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q5',false)"><span class="q-letter">D</span> am visiting</div></div><div class="q-expl" id="q5e"></div></div>
    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 · negation · he/she/it</div><div class="q-text">She _______ eat fish. She's a vegetarian.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q6',false)"><span class="q-letter">A</span> don't</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q6',true)"><span class="q-letter">B</span> doesn't</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q6',false)"><span class="q-letter">C</span> isn't</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q6',false)"><span class="q-letter">D</span> aren't</div></div><div class="q-expl" id="q6e"></div></div>
    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 · signal word</div><div class="q-text">Tom usually _______ the newspaper at breakfast.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q7',false)"><span class="q-letter">A</span> is reading</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q7',false)"><span class="q-letter">B</span> are reading</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q7',false)"><span class="q-letter">C</span> read</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q7',true)"><span class="q-letter">D</span> reads</div></div><div class="q-expl" id="q7e"></div></div>
    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 · state verb trap</div><div class="q-text">This soup _______ delicious! What's in it?</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q8',false)"><span class="q-letter">A</span> is tasting</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q8',true)"><span class="q-letter">B</span> tastes</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q8',false)"><span class="q-letter">C</span> are tasting</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q8',false)"><span class="q-letter">D</span> taste</div></div><div class="q-expl" id="q8e"></div></div>
    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 · question form</div><div class="q-text">_______ your sister _______ at the university?</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q9',false)"><span class="q-letter">A</span> Is … studying</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q9',true)"><span class="q-letter">B</span> Does … study</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q9',false)"><span class="q-letter">C</span> Do … study</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q9',false)"><span class="q-letter">D</span> Are … studying</div></div><div class="q-expl" id="q9e"></div></div>
    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 · temporary vs. permanent</div><div class="q-text">He normally works in the London office, but this month he _______ from home.</div></div><div class="q-opts"><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q10',false)"><span class="q-letter">A</span> works</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q10',false)"><span class="q-letter">B</span> work</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q10',true)"><span class="q-letter">C</span> is working</div><div class="q-opt" tabindex="0" role="radio" onclick="ans(this,'q10',false)"><span class="q-letter">D</span> are working</div></div><div class="q-expl" id="q10e"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">↺ Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">🏆</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje završeno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">01 · Present Simple &amp; Continuous<br>Nastavi na Poglavlje 02 →</div>
      </div>
    </div>

    <!-- NEW: Speed Recognition Drill -->
    <hr class="divider">
    <div class="sec-label">// ⚡ speed recognition drill — PS ili PC?</div>
    <p class="prose" style="margin-bottom:14px">10 rečenica. Odaberi Present Simple ili Present Continuous što brže možeš. Svaki odgovor ima kratko objašnjenje.</p>
    <div class="speed-drill-wrap">
      <div class="sd-progress" id="sdprog"></div>
      <div id="sdq-wrap"></div>
      <div class="sd-score" id="sd-score-box">
        <div class="sd-score-num" id="sd-score-num">0/10</div>
        <div class="sd-score-lbl" id="sd-score-lbl"></div>
        <button class="sd-retry" onclick="initSpeedDrill()">↺ Ponovi drill</button>
      </div>
    </div>

    <!-- NEW: Error Correction Drill -->
    <hr class="divider">
    <div class="sec-label">// 🔴 error correction drill — pronađi grešku</div>
    <p class="prose" style="margin-bottom:14px">Svaka rečenica sadrži grešku. Klikni "Otkrij grešku" pa pročitaj objašnjenje.</p>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">"She is knowing the answer to every question."</div>
        <button class="err-btn" onclick="showErrFix('ef1',this)">▶ Otkrij grešku</button>
        <div class="err-fix" id="ef1">✅ <span class="correct">She knows the answer to every question.</span><span class="explain"><em>Know</em> = state verb → NIKAD -ing. State verbs uvijek idu u Present Simple, bez obzira na kontekst.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"He play football every Saturday with his friends."</div>
        <button class="err-btn" onclick="showErrFix('ef2',this)">▶ Otkrij grešku</button>
        <div class="err-fix" id="ef2">✅ <span class="correct">He plays football every Saturday.</span><span class="explain"><em>He</em> = he/she/it → mora imati <b>-s</b>. Play → plays. Greška: zaboravljen -s za treće lice jednine.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"I am wanting a new phone for Christmas."</div>
        <button class="err-btn" onclick="showErrFix('ef3',this)">▶ Otkrij grešku</button>
        <div class="err-fix" id="ef3">✅ <span class="correct">I want a new phone for Christmas.</span><span class="explain"><em>Want</em> = state verb → NIKAD -ing. Ovo je jedna od najtipičnijih zamki na maturi.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"They goes to school by bus every morning."</div>
        <button class="err-btn" onclick="showErrFix('ef4',this)">▶ Otkrij grešku</button>
        <div class="err-fix" id="ef4">✅ <span class="correct">They go to school by bus every morning.</span><span class="explain"><em>They</em> = množina (I/you/we/they) → glagol BEZ -s! Samo he/she/it dobiva -s. "They goes" je greška.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"She don't like spicy food at all."</div>
        <button class="err-btn" onclick="showErrFix('ef5',this)">▶ Otkrij grešku</button>
        <div class="err-fix" id="ef5">✅ <span class="correct">She doesn't like spicy food at all.</span><span class="explain"><em>She</em> = he/she/it → negacija je <b>doesn't</b> (ne don't). Don't koristimo za I/you/we/they.</span></div>
      </div>
    </div>

    <div class="cta">
      <div>
        <div class="cta-eye">discere archive</div>
        <div class="cta-title">Vježbaj sa stvarnim zadacima mature</div>
        <div class="cta-sub">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div>
      </div>
      <button class="cta-btn" onclick="openDiscereModal()">Pokreni simulator &#8594;</button>
    </div>

    <div class="matura">
      <div class="matura-hd">⭐ for the exam — key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>PS tvorba:</b> he/she/it uvijek dobiva <b>-s</b> (ili -es/-ies). Bez -s = greška.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PS — kada:</b> rutine, navike (<em>every day, always, never, usually</em>), opće istine, fiksni rasporedi.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PC tvorba:</b> am/is/are + glagol<b>-ing</b>. Paziti: <em>make→making</em>, <em>run→running</em>.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PC — kada:</b> upravo sada (<em>now, at the moment, look!</em>), privremeno, dogovoreni planovi.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>State verbs — UVIJEK PS:</b> know, understand, believe, want, need, like, love, hate, seem, belong, have (=possess).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Neg. PS:</b> don't (I/you/we/they) vs. <b>doesn't</b> (he/she/it). "She don't" = greška!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Pit. PS:</b> Do (I/you/we/they) vs. <b>Does</b> (he/she/it) + infinitiv bez -s.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PC za budućnost:</b> <em>We are meeting tomorrow.</em> — konkretno dogovoreni, potvrđeni planovi.</span></li>
      </ul>
    </div>

    <div class="sec-label" style="margin-top:32px">// bonus — fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upiši ispravni oblik glagola u zagradi. Pazi na pravopis!</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 · present simple · (boil)</div><div class="fitb-sent">Water _______ (boil) at 100 degrees Celsius.</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','boils','ps-fact')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','boils','ps-fact')">Check</button></div><div class="fitb-fb" id="f1fb"></div></div>
    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 · present continuous · (write)</div><div class="fitb-sent">Shh! Dad _______ (write) an important email right now.</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','is writing','pc-now')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','is writing','pc-now')">Check</button></div><div class="fitb-fb" id="f2fb"></div></div>
    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 · state verb · (belong)</div><div class="fitb-sent">This jacket _______ (belong) to my sister. Don't take it.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','belongs','sv')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','belongs','sv')">Check</button></div><div class="fitb-fb" id="f3fb"></div></div>
    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 · present continuous · spelling trap · (swim)</div><div class="fitb-sent">The kids _______ (swim) in the pool at the moment.</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','are swimming','cvc')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','are swimming','cvc')">Check</button></div><div class="fitb-fb" id="f4fb"></div></div>
    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 · state verb trap · (want)</div><div class="fitb-sent">I _______ (want) a new phone. This one is broken.</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','want','sv-want')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','want','sv-want')">Check</button></div><div class="fitb-fb" id="f5fb"></div></div>
    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 · split-sentence · (live)</div><div class="fitb-sent">She usually lives in London, but this year she _______ (live) in Barcelona.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','is living','split')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','is living','split')">Check</button></div><div class="fitb-fb" id="f6fb"></div></div>

    <!-- NEW: Checkpoint -->
    <hr class="divider">
    <div class="sec-label">// checkpoint — znaš li stvarno razliku?</div>
    <p class="prose" style="margin-bottom:14px">4 pitanja. Razmisli sam, pa klikni za odgovor.</p>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Kako odlučujem PS ili PC? (objasni sebi u jednoj rečenici)</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PS = rutina/činjenica/state verb · PC = sada/privremeno/plan.</b><br>Ako vidiš signal word → slijedi ga. Ako nema signal worda → pitaj se: je li ovo navika ili se događa baš sada?</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Zašto "She don't like it" nije točno?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: "She doesn't like it."</b><br>She = he/she/it → negacija u PS je <b>doesn't</b> (ne don't). Don't je samo za I/you/we/they. Ovo je jedna od najčešćih grešaka!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Kad "always" ide s PC? Zar nije uvijek PS?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PC + always = iritantna navika (iznimka!).</b><br><em>"He's always losing his keys!"</em> — always uz PC izražava naviku koja iritira. Ovo je posebna upotreba, ali rijetko se pojavljuje na maturi niže razine. Osnovno pravilo: always → PS.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)">
      <div class="reveal-q"><span>Zašto "I am having a car" ne valja?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: "I have a car."</b><br><em>Have</em> u značenju posjedovati = state verb → PS. Ali: <em>"I am having lunch"</em> = jesti/objedovati → action verb → PC. Uvijek pitaj: što znači glagol u OVOM kontekstu?</div>
    </div>

    <!-- NEW: Quick Exam Pattern Summary -->
    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item">
        <div class="qes-tag gap">// gap fill (popuni prazninu)</div>
        <div class="qes-steps">
          <b>Korak 1:</b> Traži signal words u rečenici<br>
          <b>Korak 2:</b> Odluči PS ili PC na temelju signala<br>
          <b>Korak 3:</b> Provjeri subjekt — he/she/it? → provjeri -s / is / doesn't<br>
          <b>Korak 4:</b> Pravopis! make→making, run→running, study→studies
        </div>
      </div>
      <div class="qes-item">
        <div class="qes-tag mcq">// multiple choice (višestruki izbor)</div>
        <div class="qes-steps">
          <b>Korak 1:</b> Eliminiraj nemoguće (krivo slaganje subjekt-glagol)<br>
          <b>Korak 2:</b> Je li glagol state verb? → odmah PS<br>
          <b>Korak 3:</b> Traži signal words koji potvrđuju tvoj odgovor<br>
          <b>Korak 4:</b> Nikad ne birај odgovor "koji zvuči dobro" bez provjere
        </div>
      </div>
      <div class="qes-item">
        <div class="qes-tag err">// error correction (ispravi grešku)</div>
        <div class="qes-steps">
          <b>Provjeri 1:</b> He/she/it ima -s? (goes, doesn't, watches)<br>
          <b>Provjeri 2:</b> State verb u -ing obliku? (am knowing ❌)<br>
          <b>Provjeri 3:</b> Krivi pomoćni glagol? (don't vs doesn't)<br>
          <b>Provjeri 4:</b> Pravopis -ing / -s oblika
        </div>
      </div>
    </div>

    <!-- NEXT CHAPTERS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;color:var(--t3);margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)">// povezano gradivo &amp; sljedeći koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">02 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky);line-height:1.4">Past Simple &amp; Continuous</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Isti signal words — ali za prošlost</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">03 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky);line-height:1.4">Present Perfect</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">have/has + past participle</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">08</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2);line-height:1.4">Vokabular — svakodnevni život</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Glagoli u kontekstu ovih vremena</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">12</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2);line-height:1.4">Višestruki izbor — taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Strategija za MCQ na ispitu</div>
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
      <span class="nav-btn" onclick="switchTab(1)">← Learn</span>
      <span class="nav-btn primary" onclick="alert('Poglavlje 02 — uskoro!')">Next chapter →</span>
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


<script>
// ── QUIZ ───────────────────────────────────────
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'Every day' = signal za PS (navika). Subjekt 'She' = he/she/it → glagol + s: go → goes.",w:"✗ Netočno. 'Every day' = navika → PS. 'She' = he/she/it → mora imati -s. Točan odgovor: goes."},
  q2:{c:"✓ Točno. 'Look!' + 'right now' = signal za PC. Subjekt 'the children' = they (množina) → are playing.",w:"✗ Netočno. 'Look!' i 'right now' = PC. Subjekt 'the children' je množina → are playing. 'Plays' je samo za he/she/it."},
  q3:{c:"✓ Točno. 'Understand' je state verb (mentalni proces). State verbs nikad ne idu u -ing: uvijek PS.",w:"✗ Netočno. 'Understand' je state verb — opisuje mentalno stanje, ne radnju. State verbs UVIJEK PS: understand."},
  q4:{c:"✓ Točno. 'My brother' = he. U PS za he/she/it uvijek dodajemo -s: speak → speaks.",w:"✗ Netočno. 'My brother' = he → speak + s = speaks. 'Is speaking' bi bilo samo za radnju SADA."},
  q5:{c:"✓ Točno. 'Booked the tickets already' = konkretan dogovoreni plan → PC. Subjekt 'We' → are visiting.",w:"✗ Netočno. Karta je rezervirana = plan je potvrđen → PC za konkretne dogovorene planove. Točan odgovor: are visiting."},
  q6:{c:"✓ Točno. Subjekt 'She' = he/she/it → negacija je doesn't (ne don't!). Isn't/aren't su za PC.",w:"✗ Netočno. Subjekt 'She' = he/she/it → negacija u PS je doesn't. 'Don't' je za I/you/we/they. Točan odgovor: doesn't."},
  q7:{c:"✓ Točno. 'Usually' = signal za PS (navika). Subjekt 'Tom' = he → read + s = reads.",w:"✗ Netočno. 'Usually' = signal za PS. Subjekt 'Tom' = he → reads. 'Is reading' koristimo samo s 'now/at the moment'."},
  q8:{c:"✓ Točno. 'Taste' ovdje = 'imati okus' (state, percepcija) → state verb → uvijek PS. This soup (it) → tastes.",w:"✗ Netočno. 'Taste' u ovom kontekstu = percepcija okusa = state verb → PS. It → tastes."},
  q9:{c:"✓ Točno. Trajna situacija = PS. 'Your sister' = she → Does + subjekt + infinitiv (bez -s).",w:"✗ Netočno. Trajna situacija = PS. Za he/she/it pitanje: Does + subjekt + infinitiv. Točan odgovor: Does … study."},
  q10:{c:"✓ Točno. 'Normally works' = navika (PS), ali 'this month' = privremena situacija → PC. Točan odgovor: is working.",w:"✗ Netočno. 'Normally' = PS, ali 'this month' = privremeno, drugačije od normalnog → PC. Točan odgovor: is working."}
};
var FITB={
  'ps-fact':"Opća istina → PS. Subjekt 'Water' = it → boil + s = boils.",
  'pc-now': "'Right now' → PC. Dad = he → is. write → writing (izbaci nijemo -e).",
  'sv':     "'Belong' je state verb → uvijek PS. This jacket = it → belongs.",
  'cvc':    "'At the moment' → PC. The kids = they → are. swim → swimming (CVC: udvostruči m).",
  'sv-want':"'Want' je state verb → UVIJEK PS. Nikad 'am wanting' ili 'is wanting'. Odgovor: want (I = bez -s).",
  'split':  "'This year' = privremena situacija, drugačija od normale → PC. she → is living (live + ing)."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true; try{localStorage.setItem('maturix_ch01_tabs',JSON.stringify(tabDone));}catch(e){}
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  // Update tab progress row
  for(var k=0;k<3;k++){
    var tp=document.getElementById('tp'+k);
    if(!tp)continue;
    tp.classList.remove('active','done');
    if(k<i) tp.classList.add('done');
    else if(k===i) tp.classList.add('active');
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++;
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  // also mark the correct answer green if wrong was picked
  if(!ok){
    el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){
      var cb=o.getAttribute('onclick');
      if(cb&&cb.indexOf(',true)')>-1) o.classList.add('correct');
    });
  }
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score. This chapter is done. 🎉':
      correct>=9?'Excellent! Review the questions you missed.':
      correct>=7?'Good. Watch out for state verbs and the he/she/it rule.':
      correct>=5?'Go back to Learn and focus on signal words and state verbs.':
      'Return to Learn and go slowly through the grammar. You can do it!';
    s.classList.add('show');
  }
}

function retryQuiz(){
  answered={}; correct=0;
  QORDER.forEach(function(qid){
    var block=document.getElementById(qid);
    block.querySelectorAll('.q-opt').forEach(function(o){
      o.classList.remove('correct','wrong','disabled');
    });
    var expl=document.getElementById(qid+'e');
    expl.innerHTML=''; expl.classList.remove('show');
  });
  var s=document.getElementById('score');
  s.classList.remove('show');
  window.scrollTo({top:document.getElementById('l2').offsetTop-60,behavior:'smooth'});
}

// Keyboard nav for quiz: 1-4 to pick answer, works on active question
document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2') return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){
    // find first unanswered question
    for(var i=0;i<QORDER.length;i++){
      var qid=QORDER[i];
      if(answered[qid]===undefined){
        var opts=document.getElementById(qid).querySelectorAll('.q-opt:not(.disabled)');
        if(opts[k-1]) opts[k-1].click();
        break;
      }
    }
  }
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);
  var fb=document.getElementById(fbId);
  var val=inp.value.trim().toLowerCase();
  var btn=inp.parentElement.querySelector('.fitb-btn');
  if(!val||inp.disabled)return;
  inp.disabled=true; btn.disabled=true;
  fb.classList.add('show');
  var ok=val===answer.toLowerCase();
  inp.classList.add(ok?'ok':'fail');
  fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok
    ?'✓ Correct: <strong>'+answer+'</strong> — '+FITB[key]
    :'✗ Your answer: <strong>'+(inp.value.trim()||'—')+'</strong> · Correct: <strong>'+answer+'</strong> — '+FITB[key];
}

// ── REVEAL CARDS ───────────────────────────────
function toggleReveal(card){
  card.classList.toggle('open');
}

// ── ERROR CORRECTION DRILL ─────────────────────
function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  btn.style.display='none';
}

// ── STATE VERB DRILL ───────────────────────────
var svAnswered={};
var svTotal=5;
var svCorrect=0;

function svAns(el,id,isCorrect,correctForm){
  if(svAnswered[id])return;
  svAnswered[id]=true;
  if(isCorrect) svCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  var fb=document.getElementById(id+'fb');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  if(isCorrect){
    el.classList.add('sv-correct');
    fb.className='sv-fb ok show';
    fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong> — state verb, uvijek PS.';
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el) o.classList.add('sv-reveal');});
    fb.className='sv-fb no show';
    fb.innerHTML='✗ Netočno. Točan odgovor: <strong>'+correctForm+'</strong> — state verb → UVIJEK Present Simple!';
  }
  if(Object.keys(svAnswered).length===svTotal){
    var box=document.getElementById('sv-score-box');
    document.getElementById('sv-score-num').textContent=svCorrect+'/'+svTotal;
    document.getElementById('sv-score-lbl').textContent=
      svCorrect===5?'Savršen rezultat! State verbs su ti jasni. 🎉':
      svCorrect>=4?'Odlično! Još malo ponavljanja i automatiziraš to.':
      svCorrect>=3?'Dobro — ali pazi na zamke! Ponovi DANGER ZONE sekciju.':
      'Vrati se na tablicu state verbs i ponovi.';
    box.classList.add('show');
  }
}

// ── COPY TO CLIPBOARD ──────────────────────────
function copyFormula(btn,text){
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';
    btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},1800);
  });
}

// ── SPEED DRILL ────────────────────────────────
var SD=[
  {s:"She always <u>drinks</u> tea in the morning.",ans:"ps",exp:"'Always' = signal za PS (navika)."},
  {s:"Look! He <u>is running</u> in the park.",ans:"pc",exp:"'Look!' = signal za PC (upravo sada)."},
  {s:"I <u>know</u> the answer. It's easy.",ans:"ps",exp:"'Know' = state verb → uvijek PS."},
  {s:"They <u>are staying</u> at a hotel this week.",ans:"pc",exp:"'This week' = privremena situacija → PC."},
  {s:"Water <u>boils</u> at 100 degrees.",ans:"ps",exp:"Opća istina → PS."},
  {s:"We <u>are meeting</u> them tomorrow. It's planned.",ans:"pc",exp:"Dogovoreni plan s konkretnim vremenom → PC."},
  {s:"He usually <u>reads</u> before bed.",ans:"ps",exp:"'Usually' = signal za PS (navika). He → reads."},
  {s:"Listen! Someone <u>is singing</u> outside.",ans:"pc",exp:"'Listen!' = signal za PC (upravo sada)."},
  {s:"This bag <u>belongs</u> to her.",ans:"ps",exp:"'Belong' = state verb → uvijek PS."},
  {s:"She <u>is working</u> from home this month.",ans:"pc",exp:"'This month' = privremena, drugačija od normale → PC."}
];
var sdState={idx:0,results:[],done:false};

function initSpeedDrill(){
  sdState={idx:0,results:[],done:false};
  document.getElementById('sd-score-box').classList.remove('show');
  renderSD();
}

function renderSD(){
  var prog=document.getElementById('sdprog');
  prog.innerHTML='';
  for(var i=0;i<SD.length;i++){
    var d=document.createElement('div');
    d.className='sd-dot'+(i<sdState.results.length?(sdState.results[i]?' ok':' no'):(i===sdState.idx?' cur':''));
    prog.appendChild(d);
  }
  var wrap=document.getElementById('sdq-wrap');
  if(sdState.idx>=SD.length){
    wrap.innerHTML='';
    var sc=sdState.results.filter(function(r){return r}).length;
    document.getElementById('sd-score-num').textContent=sc+'/'+SD.length;
    document.getElementById('sd-score-lbl').textContent=
      sc===10?'Savršeno! Instinkt ti je odličan. 🎉':
      sc>=8?'Odlično! Još malo i bit ćeš automatski. 💪':
      sc>=6?'Dobro! Fokusiraj se na signal words i state verbs.':
      'Ponovi Learn tab, pa pokušaj opet.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn ps" onclick="sdAns(\\'ps\\')">Present Simple <span style="font-size:10px;opacity:.5;margin-left:4px">PS</span></div>'+
    '<div class="sd-btn pc" onclick="sdAns(\\'pc\\')">Present Continuous <span style="font-size:10px;opacity:.5;margin-left:4px">PC</span></div>'+
    '</div>'+
    '<div class="sd-fb" id="sdfb"></div>'+
    '</div>';
}

function sdAns(choice){
  var q=SD[sdState.idx];
  var ok=choice===q.ans;
  sdState.results.push(ok);
  var btns=document.querySelectorAll('.sd-btn');
  btns.forEach(function(b){b.style.pointerEvents='none'});
  var picked=choice==='ps'?btns[0]:btns[1];
  var correctBtn=q.ans==='ps'?btns[0]:btns[1];
  if(ok){
    picked.classList.add('correct-pick');
  } else {
    picked.classList.add('wrong-pick');
    correctBtn.classList.add('reveal-correct');
  }
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1500);
}

// Keyboard: P = Present Simple, C = Present Continuous during speed drill
document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2') return;
  var key=e.key.toLowerCase();
  var psBtn=document.querySelector('#sdq-wrap .sd-btn.ps');
  var pcBtn=document.querySelector('#sdq-wrap .sd-btn.pc');
  if(!psBtn||!pcBtn) return;
  if(key==='p'&&psBtn.style.pointerEvents!=='none') sdAns('ps');
  if(key==='c'&&pcBtn.style.pointerEvents!=='none') sdAns('pc');
});

initSpeedDrill();

// ── LOCALSTORAGE PROGRESS ─────────────────────
function saveProgress(){
  try{localStorage.setItem('maturix_ch01_tabs',JSON.stringify(tabDone));}catch(e){}
}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch01_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){
          tabDone[i]=true;
          var tab=document.querySelectorAll('.tab')[i];
          if(tab) tab.classList.add('done-tab');
          var tp=document.getElementById('tp'+i);
          if(tp) tp.classList.add('done');
        }
      });
    }
  }catch(e){}
}
loadProgress();

// ── MOBILE DRAWER ─────────────────────────────
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
</script>`;

const CH01_JS = `// ── QUIZ ───────────────────────────────────────
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'Every day' = signal za PS (navika). Subjekt 'She' = he/she/it → glagol + s: go → goes.",w:"✗ Netočno. 'Every day' = navika → PS. 'She' = he/she/it → mora imati -s. Točan odgovor: goes."},
  q2:{c:"✓ Točno. 'Look!' + 'right now' = signal za PC. Subjekt 'the children' = they (množina) → are playing.",w:"✗ Netočno. 'Look!' i 'right now' = PC. Subjekt 'the children' je množina → are playing. 'Plays' je samo za he/she/it."},
  q3:{c:"✓ Točno. 'Understand' je state verb (mentalni proces). State verbs nikad ne idu u -ing: uvijek PS.",w:"✗ Netočno. 'Understand' je state verb — opisuje mentalno stanje, ne radnju. State verbs UVIJEK PS: understand."},
  q4:{c:"✓ Točno. 'My brother' = he. U PS za he/she/it uvijek dodajemo -s: speak → speaks.",w:"✗ Netočno. 'My brother' = he → speak + s = speaks. 'Is speaking' bi bilo samo za radnju SADA."},
  q5:{c:"✓ Točno. 'Booked the tickets already' = konkretan dogovoreni plan → PC. Subjekt 'We' → are visiting.",w:"✗ Netočno. Karta je rezervirana = plan je potvrđen → PC za konkretne dogovorene planove. Točan odgovor: are visiting."},
  q6:{c:"✓ Točno. Subjekt 'She' = he/she/it → negacija je doesn't (ne don't!). Isn't/aren't su za PC.",w:"✗ Netočno. Subjekt 'She' = he/she/it → negacija u PS je doesn't. 'Don't' je za I/you/we/they. Točan odgovor: doesn't."},
  q7:{c:"✓ Točno. 'Usually' = signal za PS (navika). Subjekt 'Tom' = he → read + s = reads.",w:"✗ Netočno. 'Usually' = signal za PS. Subjekt 'Tom' = he → reads. 'Is reading' koristimo samo s 'now/at the moment'."},
  q8:{c:"✓ Točno. 'Taste' ovdje = 'imati okus' (state, percepcija) → state verb → uvijek PS. This soup (it) → tastes.",w:"✗ Netočno. 'Taste' u ovom kontekstu = percepcija okusa = state verb → PS. It → tastes."},
  q9:{c:"✓ Točno. Trajna situacija = PS. 'Your sister' = she → Does + subjekt + infinitiv (bez -s).",w:"✗ Netočno. Trajna situacija = PS. Za he/she/it pitanje: Does + subjekt + infinitiv. Točan odgovor: Does … study."},
  q10:{c:"✓ Točno. 'Normally works' = navika (PS), ali 'this month' = privremena situacija → PC. Točan odgovor: is working.",w:"✗ Netočno. 'Normally' = PS, ali 'this month' = privremeno, drugačije od normalnog → PC. Točan odgovor: is working."}
};
var FITB={
  'ps-fact':"Opća istina → PS. Subjekt 'Water' = it → boil + s = boils.",
  'pc-now': "'Right now' → PC. Dad = he → is. write → writing (izbaci nijemo -e).",
  'sv':     "'Belong' je state verb → uvijek PS. This jacket = it → belongs.",
  'cvc':    "'At the moment' → PC. The kids = they → are. swim → swimming (CVC: udvostruči m).",
  'sv-want':"'Want' je state verb → UVIJEK PS. Nikad 'am wanting' ili 'is wanting'. Odgovor: want (I = bez -s).",
  'split':  "'This year' = privremena situacija, drugačija od normale → PC. she → is living (live + ing)."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true; try{localStorage.setItem('maturix_ch01_tabs',JSON.stringify(tabDone));}catch(e){}
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  // Update tab progress row
  for(var k=0;k<3;k++){
    var tp=document.getElementById('tp'+k);
    if(!tp)continue;
    tp.classList.remove('active','done');
    if(k<i) tp.classList.add('done');
    else if(k===i) tp.classList.add('active');
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++;
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  // also mark the correct answer green if wrong was picked
  if(!ok){
    el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){
      var cb=o.getAttribute('onclick');
      if(cb&&cb.indexOf(',true)')>-1) o.classList.add('correct');
    });
  }
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score. This chapter is done. 🎉':
      correct>=9?'Excellent! Review the questions you missed.':
      correct>=7?'Good. Watch out for state verbs and the he/she/it rule.':
      correct>=5?'Go back to Learn and focus on signal words and state verbs.':
      'Return to Learn and go slowly through the grammar. You can do it!';
    s.classList.add('show');
  }
}

function retryQuiz(){
  answered={}; correct=0;
  QORDER.forEach(function(qid){
    var block=document.getElementById(qid);
    block.querySelectorAll('.q-opt').forEach(function(o){
      o.classList.remove('correct','wrong','disabled');
    });
    var expl=document.getElementById(qid+'e');
    expl.innerHTML=''; expl.classList.remove('show');
  });
  var s=document.getElementById('score');
  s.classList.remove('show');
  window.scrollTo({top:document.getElementById('l2').offsetTop-60,behavior:'smooth'});
}

// Keyboard nav for quiz: 1-4 to pick answer, works on active question
document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2') return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){
    // find first unanswered question
    for(var i=0;i<QORDER.length;i++){
      var qid=QORDER[i];
      if(answered[qid]===undefined){
        var opts=document.getElementById(qid).querySelectorAll('.q-opt:not(.disabled)');
        if(opts[k-1]) opts[k-1].click();
        break;
      }
    }
  }
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);
  var fb=document.getElementById(fbId);
  var val=inp.value.trim().toLowerCase();
  var btn=inp.parentElement.querySelector('.fitb-btn');
  if(!val||inp.disabled)return;
  inp.disabled=true; btn.disabled=true;
  fb.classList.add('show');
  var ok=val===answer.toLowerCase();
  inp.classList.add(ok?'ok':'fail');
  fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok
    ?'✓ Correct: <strong>'+answer+'</strong> — '+FITB[key]
    :'✗ Your answer: <strong>'+(inp.value.trim()||'—')+'</strong> · Correct: <strong>'+answer+'</strong> — '+FITB[key];
}

// ── REVEAL CARDS ───────────────────────────────
function toggleReveal(card){
  card.classList.toggle('open');
}

// ── ERROR CORRECTION DRILL ─────────────────────
function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  btn.style.display='none';
}

// ── STATE VERB DRILL ───────────────────────────
var svAnswered={};
var svTotal=5;
var svCorrect=0;

function svAns(el,id,isCorrect,correctForm){
  if(svAnswered[id])return;
  svAnswered[id]=true;
  if(isCorrect) svCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  var fb=document.getElementById(id+'fb');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  if(isCorrect){
    el.classList.add('sv-correct');
    fb.className='sv-fb ok show';
    fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong> — state verb, uvijek PS.';
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el) o.classList.add('sv-reveal');});
    fb.className='sv-fb no show';
    fb.innerHTML='✗ Netočno. Točan odgovor: <strong>'+correctForm+'</strong> — state verb → UVIJEK Present Simple!';
  }
  if(Object.keys(svAnswered).length===svTotal){
    var box=document.getElementById('sv-score-box');
    document.getElementById('sv-score-num').textContent=svCorrect+'/'+svTotal;
    document.getElementById('sv-score-lbl').textContent=
      svCorrect===5?'Savršen rezultat! State verbs su ti jasni. 🎉':
      svCorrect>=4?'Odlično! Još malo ponavljanja i automatiziraš to.':
      svCorrect>=3?'Dobro — ali pazi na zamke! Ponovi DANGER ZONE sekciju.':
      'Vrati se na tablicu state verbs i ponovi.';
    box.classList.add('show');
  }
}

// ── COPY TO CLIPBOARD ──────────────────────────
function copyFormula(btn,text){
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';
    btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},1800);
  });
}

// ── SPEED DRILL ────────────────────────────────
var SD=[
  {s:"She always <u>drinks</u> tea in the morning.",ans:"ps",exp:"'Always' = signal za PS (navika)."},
  {s:"Look! He <u>is running</u> in the park.",ans:"pc",exp:"'Look!' = signal za PC (upravo sada)."},
  {s:"I <u>know</u> the answer. It's easy.",ans:"ps",exp:"'Know' = state verb → uvijek PS."},
  {s:"They <u>are staying</u> at a hotel this week.",ans:"pc",exp:"'This week' = privremena situacija → PC."},
  {s:"Water <u>boils</u> at 100 degrees.",ans:"ps",exp:"Opća istina → PS."},
  {s:"We <u>are meeting</u> them tomorrow. It's planned.",ans:"pc",exp:"Dogovoreni plan s konkretnim vremenom → PC."},
  {s:"He usually <u>reads</u> before bed.",ans:"ps",exp:"'Usually' = signal za PS (navika). He → reads."},
  {s:"Listen! Someone <u>is singing</u> outside.",ans:"pc",exp:"'Listen!' = signal za PC (upravo sada)."},
  {s:"This bag <u>belongs</u> to her.",ans:"ps",exp:"'Belong' = state verb → uvijek PS."},
  {s:"She <u>is working</u> from home this month.",ans:"pc",exp:"'This month' = privremena, drugačija od normale → PC."}
];
var sdState={idx:0,results:[],done:false};

function initSpeedDrill(){
  sdState={idx:0,results:[],done:false};
  document.getElementById('sd-score-box').classList.remove('show');
  renderSD();
}

function renderSD(){
  var prog=document.getElementById('sdprog');
  prog.innerHTML='';
  for(var i=0;i<SD.length;i++){
    var d=document.createElement('div');
    d.className='sd-dot'+(i<sdState.results.length?(sdState.results[i]?' ok':' no'):(i===sdState.idx?' cur':''));
    prog.appendChild(d);
  }
  var wrap=document.getElementById('sdq-wrap');
  if(sdState.idx>=SD.length){
    wrap.innerHTML='';
    var sc=sdState.results.filter(function(r){return r}).length;
    document.getElementById('sd-score-num').textContent=sc+'/'+SD.length;
    document.getElementById('sd-score-lbl').textContent=
      sc===10?'Savršeno! Instinkt ti je odličan. 🎉':
      sc>=8?'Odlično! Još malo i bit ćeš automatski. 💪':
      sc>=6?'Dobro! Fokusiraj se na signal words i state verbs.':
      'Ponovi Learn tab, pa pokušaj opet.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn ps" onclick="sdAns(\\'ps\\')">Present Simple <span style="font-size:10px;opacity:.5;margin-left:4px">PS</span></div>'+
    '<div class="sd-btn pc" onclick="sdAns(\\'pc\\')">Present Continuous <span style="font-size:10px;opacity:.5;margin-left:4px">PC</span></div>'+
    '</div>'+
    '<div class="sd-fb" id="sdfb"></div>'+
    '</div>';
}

function sdAns(choice){
  var q=SD[sdState.idx];
  var ok=choice===q.ans;
  sdState.results.push(ok);
  var btns=document.querySelectorAll('.sd-btn');
  btns.forEach(function(b){b.style.pointerEvents='none'});
  var picked=choice==='ps'?btns[0]:btns[1];
  var correctBtn=q.ans==='ps'?btns[0]:btns[1];
  if(ok){
    picked.classList.add('correct-pick');
  } else {
    picked.classList.add('wrong-pick');
    correctBtn.classList.add('reveal-correct');
  }
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1500);
}

// Keyboard: P = Present Simple, C = Present Continuous during speed drill
document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2') return;
  var key=e.key.toLowerCase();
  var psBtn=document.querySelector('#sdq-wrap .sd-btn.ps');
  var pcBtn=document.querySelector('#sdq-wrap .sd-btn.pc');
  if(!psBtn||!pcBtn) return;
  if(key==='p'&&psBtn.style.pointerEvents!=='none') sdAns('ps');
  if(key==='c'&&pcBtn.style.pointerEvents!=='none') sdAns('pc');
});

initSpeedDrill();

// ── LOCALSTORAGE PROGRESS ─────────────────────
function saveProgress(){
  try{localStorage.setItem('maturix_ch01_tabs',JSON.stringify(tabDone));}catch(e){}
}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch01_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){
          tabDone[i]=true;
          var tab=document.querySelectorAll('.tab')[i];
          if(tab) tab.classList.add('done-tab');
          var tp=document.getElementById('tp'+i);
          if(tp) tp.classList.add('done');
        }
      });
    }
  }catch(e){}
}
loadProgress();

// ── MOBILE DRAWER ─────────────────────────────
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
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
