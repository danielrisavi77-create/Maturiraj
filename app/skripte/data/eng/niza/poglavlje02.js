// Maturiraj.hr — Engleski niža razina · Poglavlje 2
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ENG_NIZA_CH02({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch02-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH02_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch02-js";
    scriptEl.textContent = CH02_JS;
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
      if (num === 3 && nav.onNext) nav.onNext();
      else if (num === 1 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch02-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch02-root"
      dangerouslySetInnerHTML={{ __html: CH02_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH02_CSS = `
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

const CH02_BODY = `<div class="shell">

<!-- ── HAMBURGER + MOBILE DRAWER ─────────────── -->
<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer" role="dialog" aria-modal="true">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">&#x2715; Zatvori</button>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter01.html'"><span class="sb-dot"></span> 01 &middot; Present Simple</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 02 &middot; Past Simple</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter03.html'"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter04.html'"><span class="sb-dot"></span> 04 &middot; Future</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter05.html'"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter06.html'"><span class="sb-dot"></span> 06 &middot; Conditionals</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter07.html'"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
  <div class="sb-label">// Vje&#353;tine</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter08.html'"><span class="sb-dot"></span> 08 &middot; Vokabular</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter09.html'"><span class="sb-dot"></span> 09 &middot; &#268;itanje</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter10.html'"><span class="sb-dot"></span> 10 &middot; Pisanje</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter11.html'"><span class="sb-dot"></span> 11 &middot; Listening</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter12.html'"><span class="sb-dot"></span> 12 &middot; MCQ taktika</div>
  <div class="sb-label">// Pro&#353;ireno</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter13.html'"><span class="sb-dot"></span> 13 &middot; Reported Speech</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter14.html'"><span class="sb-dot"></span> 14 &middot; Articles</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter15.html'"><span class="sb-dot"></span> 15 &middot; Comparatives</div>
</div>

<!-- ── SIDEBAR ────────────────────────────────── -->
<nav class="sidebar">
  <div class="sb-brand">
    <div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg></div>
    <div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">EN &middot; niža razina</div></div>
  </div>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item" onclick="window.location='chapter01.html'" style="cursor:pointer"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item active"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
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
  <div class="sb-footer">02 / 15 &middot; maturiraj.hr</div>
</nav>

<!-- ── MAIN ──────────────────────────────────── -->
<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter01.html'" style="cursor:pointer">← chapters</span>
    <span class="bc-sep">/</span><span>grammar</span>
    <span class="bc-sep">/</span>
    <span class="bc-active">past-simple-&amp;-continuous</span>
  </div>

  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" tabindex="0">📖 Learn<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" tabindex="0">✍️ Practice<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Overview</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Learn grammar</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Practice &amp; quiz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~30 min
    </div>
  </div>

  <!-- ══════════ LAYER 0 — 2 MIN ══════════ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 02 / 15 · grammar</div>
      <h1 class="hero-title">Past <span>Simple</span><br>&amp; Past Continuous</h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~30 min</span>
        <span class="hero-badge hb-level">niža razina</span>
        <span class="hero-badge hb-chapter">02 / 12</span>
      </div>
      <p class="hero-sub">Regular &amp; irregular verbs · when/while · interrupted actions</p>
      <div class="progress-track"><div class="progress-bar" style="width:16%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">Past Simple</span>
      <span class="pill pill-violet">Past Continuous</span>
      <span class="pill pill-amber">Irregular verbs</span>
      <span class="pill pill-sky">when / while</span>
      <span class="pill pill-red">Exam traps</span>
    </div>

    <div class="sec-label">// at a glance</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">PS</div><div class="stat-name">Past Simple</div><div class="stat-desc">Završena radnja u prošlosti. Forma: <b style="color:var(--lime)">verb+ed</b> ili <b style="color:var(--lime)">irregular</b></div></div>
      <div class="stat-card"><div class="stat-icon violet">PC</div><div class="stat-name">Past Continuous</div><div class="stat-desc">Radnja u tijeku u prošlosti. Forma: <b style="color:var(--violet)">was/were + -ing</b></div></div>
      <div class="stat-card"><div class="stat-icon amber">IRR</div><div class="stat-name">Irregular verbs</div><div class="stat-desc"><em style="color:var(--amber)">go→went, see→saw, have→had…</em> — moraju se naučiti napamet!</div></div>
      <div class="stat-card"><div class="stat-icon sky">W/W</div><div class="stat-name">when / while</div><div class="stat-desc"><em style="color:var(--sky)">when</em> → PS · <em style="color:var(--violet)">while</em> → PC · kombinacija = zamka!</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">PS — kada</div><div class="cv">Završena radnja u prošlosti · niz radnji · navike u prošlosti · stanja u prošlosti</div></div>
      <div class="concept-row"><div class="ck lime">PS — forma reg.</div><div class="cv">I/you/he… + <code>verb+ed</code> → <em>worked, played, watched</em> · Neg: <code>didn't + inf.</code></div></div>
      <div class="concept-row"><div class="ck lime">PS — forma irreg.</div><div class="cv"><code>go→went</code> · <code>see→saw</code> · <code>have→had</code> · <code>come→came</code> · <code>take→took</code></div></div>
      <div class="concept-row"><div class="ck violet">PC — kada</div><div class="cv">Radnja u tijeku u prošlom trenutku · prekinuta radnja · dvije paralelne radnje</div></div>
      <div class="concept-row"><div class="ck violet">PC — forma</div><div class="cv">I/he/she/it: <code>was + -ing</code> · you/we/they: <code>were + -ing</code> · Neg: <code>wasn't/weren't + -ing</code></div></div>
      <div class="concept-row"><div class="ck sky">when vs while</div><div class="cv"><code>when</code> + PS (kratka završena) · <code>while</code> + PC (dulja u tijeku)</div></div>
      <div class="concept-row"><div class="ck red">Zamka br. 1</div><div class="cv">"When I arrived, she <b>was cooking</b>" — PS prekida PC. "arrived" = kratka, "was cooking" = u tijeku</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// ako zapamtiš samo ovo — 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🧠 panic-proof — 3 rules that cover 90% of exam questions</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Završena radnja / niz radnji / navika u prošlosti</b> → PS · Regular: <b style="color:var(--amber)">+ed</b> · Irregular: nauči napamet</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Radnja koja je trajala kad se nešto dogodilo</b> → PC · Uvijek <b style="color:var(--violet)">was/were + -ing</b></div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>when + kratka radnja = PS · while + dulja radnja = PC</b> · Prekinuta radnja = PC + when + PS</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kad koristim Past Simple?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PS = završena radnja u prošlosti.</b><br>Signal words: <span class="ok">yesterday, last week, last year, ago, in 2010, this morning, once, finally, then, after that</span><br>Forma: <span class="ok">verb+ed</span> ili irregular oblik. Svi subjekti isti oblik — nema -s za he/she/it!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kad koristim Past Continuous?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PC = radnja koja je trajala u određenom trenutku u prošlosti.</b><br>Signal words: <span style="color:var(--violet)">while, at 8 o'clock yesterday, all day, at that moment, during</span><br>Forma: <span style="color:var(--violet)">was/were + glagol-ing</span> · I/he/she/it = was · you/we/they = were</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Razlika između "when" i "while"?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>when</b> + <span class="ok">Past Simple</span> = kratka, završena radnja koja se dogodila<br>
        <b>while</b> + <span style="color:var(--violet)">Past Continuous</span> = dulja radnja koja je bila u tijeku<br><br>
        <em>When she <b>arrived</b>, I was cooking.</em> → arrived = kratko (PS)<br>
        <em>While I <b>was cooking</b>, she arrived.</em> → was cooking = dulje (PC)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Najčešća greška s irregular verbima?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">&#x274C; <b>I goed</b> → &#x2713; I <b>went</b> (go → went)<br>&#x274C; <b>She sayed</b> → &#x2713; She <b>said</b> (say → said)<br>&#x274C; <b>didn't came</b> → &#x2713; didn't <b>come</b> (nakon didn't = infinitiv!)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Pravopis -ed oblika — sva pravila?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        Većina → dodaj <b style="color:var(--lime)">-ed</b>: <em>work→worked, play→played</em><br>
        Završava na -e → samo <b style="color:var(--lime)">-d</b>: <em>love→loved, dance→danced</em><br>
        Suglasnik+y → <b style="color:var(--lime)">-ied</b>: <em>study→studied, carry→carried</em><br>
        Kratki CVC → <b style="color:var(--lime)">udvostruči + ed</b>: <em>stop→stopped, plan→planned</em><br>
        Samoglasnik+y → samo <b style="color:var(--lime)">-ed</b>: <em>play→played, stay→stayed</em>
      </div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol — 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">🚨 if you panic on the exam — do this</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Je li radnja <b>završena u prošlosti</b>? → Past Simple</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Je li radnja <b>trajala u tijeku kad se nešto dogodilo</b>? → Past Continuous (was/were + -ing)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Vidiš <b>while</b>? → PC. Vidiš <b>when + kratka radnja</b>? → PS</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Je li glagol <b>irregular</b>? (go, see, take…) → provjeri irregular oblik, nikad -ed!</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Nakon <b>did/didn't</b> → uvijek <b>infinitiv</b> (bez -ed, bez irregular oblika)</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter01.html" class="nav-btn">← Chapter 01</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn more →</span>
    </div>
  </div>

  <!-- ══════════ LAYER 1 — LEARN ══════════ -->
  <div class="layer" id="l1">

    <div class="sec-label">// past simple — in depth</div>
    <p class="prose">Past Simple koristimo za radnje koje su se <strong>dogodile i završile u prošlosti</strong>. Nije važno kada — može biti prije 5 minuta ili 50 godina. Ključno: radnja je <em>gotova</em>.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge ps">PS</div>
        <div><div class="gram-title">Past Simple — tvorba (regular verbs)</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'PS Pozitiv: Subjekt + verb+ed (svi subjekti jednaki oblik)')">copy</button>
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">Svi subjekti</span> + <span class="val">verb+ed</span> → She <span class="val">worked</span> yesterday.<br>
          <span style="color:var(--t3);font-size:12px">⚠ Nema -s za he/she/it! "She worked" ✓ — ne "She works" (to je Present Simple)</span>
        </div>
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'PS Negativ: Subjekt + didn't + infinitiv')">copy</button>
          <span class="lbl">− Negativ</span><br>
          <span class="sub">Svi subjekti</span> + <span class="kw">didn't</span> + <span class="val">infinitiv</span> → She <span class="kw">didn't work</span> yesterday.<br>
          <span style="color:var(--red);font-size:12px">❌ didn't worked → ✅ didn't work (nakon didn't = infinitiv!)</span>
        </div>
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'PS Pitanje: Did + subjekt + infinitiv?')">copy</button>
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Did</span> + <span class="sub">subjekt</span> + <span class="val">infinitiv</span>? → <span class="kw">Did</span> she <span class="val">work</span> yesterday?<br>
          <span style="color:var(--red);font-size:12px">❌ Did she worked? → ✅ Did she work? (nakon did = infinitiv!)</span>
        </div>
        <div class="callout callout-warn" style="margin-top:14px">
          <span class="callout-icon">⚠</span>
          <div class="callout-body">
            <div class="callout-title">Pravopis -ed oblika — 5 pravila</div>
            <div class="callout-text">
              Većina → dodaj <strong style="color:var(--lime)">-ed</strong>: <em>work→worked, play→played, visit→visited</em><br>
              Završava na -e → samo <strong style="color:var(--lime)">-d</strong>: <em>love→loved, dance→danced, arrive→arrived</em><br>
              Suglasnik+y → <strong style="color:var(--lime)">-ied</strong>: <em>study→studied, carry→carried, try→tried</em><br>
              Kratki CVC glagol → <strong style="color:var(--lime)">udvostruči + ed</strong>: <em>stop→stopped, plan→planned, drop→dropped</em><br>
              Samoglasnik+y → samo <strong style="color:var(--lime)">-ed</strong>: <em>play→played, stay→stayed, enjoy→enjoyed</em>
            </div>
          </div>
        </div>
        <div class="sub-label">→ Primjeri</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">She <b>visited</b> Paris last summer.</div><span class="ex-arr">→</span><div class="ex-hr">last summer = završeno → PS</div></div>
          <div class="ex"><div class="ex-en">They <b>didn't watch</b> the film yesterday.</div><span class="ex-arr">→</span><div class="ex-hr">yesterday + negacija → PS neg.</div></div>
          <div class="ex"><div class="ex-en"><b>Did</b> you <b>study</b> for the exam?</div><span class="ex-arr">→</span><div class="ex-hr">Did + infinitiv → PS pitanje</div></div>
          <div class="ex"><div class="ex-en">He <b>stopped</b> smoking two years ago.</div><span class="ex-arr">→</span><div class="ex-hr">ago = PS signal · stop→stopped (CVC)</div></div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// irregular verbs — najvažniji za maturu</div>
    <p class="prose">Irregular glagoli ne dobivaju <strong>-ed</strong> — svaki ima vlastiti oblik koji moraš naučiti napamet. Ovo je jedna od top 3 teme na ispitu.</p>

    <div class="callout callout-warn">
      <span class="callout-icon">🚫</span>
      <div class="callout-body">
        <div class="callout-title">NIKAD ne dodaj -ed na irregular glagol!</div>
        <div class="callout-text">
          ❌ <em>I goed</em> → ✅ <em>I <strong style="color:var(--green)">went</strong></em>&nbsp;&nbsp;
          ❌ <em>She sayed</em> → ✅ <em>She <strong style="color:var(--green)">said</strong></em>&nbsp;&nbsp;
          ❌ <em>He taked</em> → ✅ <em>He <strong style="color:var(--green)">took</strong></em>
        </div>
      </div>
    </div>

    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Infinitiv</th><th>Past Simple</th><th>Prijevod</th><th>Infinitiv</th><th>Past Simple</th><th>Prijevod</th></tr></thead>
        <tbody>
          <tr><td><code>be</code></td><td><b>was / were</b></td><td>biti</td><td><code>make</code></td><td><b>made</b></td><td>napraviti</td></tr>
          <tr><td><code>have</code></td><td><b>had</b></td><td>imati</td><td><code>take</code></td><td><b>took</b></td><td>uzeti</td></tr>
          <tr><td><code>go</code></td><td><b>went</b></td><td>ići</td><td><code>give</code></td><td><b>gave</b></td><td>dati</td></tr>
          <tr><td><code>see</code></td><td><b>saw</b></td><td>vidjeti</td><td><code>get</code></td><td><b>got</b></td><td>dobiti</td></tr>
          <tr><td><code>come</code></td><td><b>came</b></td><td>doći</td><td><code>know</code></td><td><b>knew</b></td><td>znati</td></tr>
          <tr><td><code>say</code></td><td><b>said</b></td><td>reći</td><td><code>think</code></td><td><b>thought</b></td><td>misliti</td></tr>
          <tr><td><code>do</code></td><td><b>did</b></td><td>raditi</td><td><code>find</code></td><td><b>found</b></td><td>pronaći</td></tr>
          <tr><td><code>write</code></td><td><b>wrote</b></td><td>pisati</td><td><code>tell</code></td><td><b>told</b></td><td>reći/ispričati</td></tr>
          <tr><td><code>read</code></td><td><b>read</b></td><td>čitati</td><td><code>leave</code></td><td><b>left</b></td><td>otići/ostaviti</td></tr>
          <tr><td><code>buy</code></td><td><b>bought</b></td><td>kupiti</td><td><code>win</code></td><td><b>won</b></td><td>pobijediti</td></tr>
          <tr><td><code>meet</code></td><td><b>met</b></td><td>sresti</td><td><code>break</code></td><td><b>broke</b></td><td>slomiti</td></tr>
          <tr><td><code>put</code></td><td><b>put</b></td><td>staviti</td><td><code>speak</code></td><td><b>spoke</b></td><td>govoriti</td></tr>
          <tr><td><code>feel</code></td><td><b>felt</b></td><td>osjećati</td><td><code>run</code></td><td><b>ran</b></td><td>trčati</td></tr>
          <tr><td><code>sleep</code></td><td><b>slept</b></td><td>spavati</td><td><code>spend</code></td><td><b>spent</b></td><td>potrošiti/provesti</td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">Trik za pamćenje irregular glagola</div>
        <div class="callout-text">
          Grupiraj po obliku: <em>bring→brought, buy→bought, think→thought, teach→taught</em> (isti završetak)<br>
          Isti oblici (inf.=past): <em>cut→cut, put→put, hit→hit, read→read</em><br>
          Vokalne promjene: <em>run→ran, come→came, take→took, drive→drove</em>
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera</div>
        <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "Did she went?" nije točno?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">Nakon <b>did</b> uvijek ide <b style="color:var(--lime)">infinitiv</b>. Did je već pomoćni glagol koji označava prošlost — nema potrebe za još jednim prošlim oblikom. ✅ <b>Did she go?</b></div>
        </div>
      </div>
    </div>

    <!-- IRREGULAR VERB DRILL -->
    <div class="sec-label" style="margin-top:24px">// irregular verb drill — odaberi točan oblik</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Klikni na ispravni Past Simple oblik. Pazi na mamce!</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">She _______ (go) to the cinema last Friday.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'irr1',false,'went')">goed</div><div class="sv-opt" onclick="svAns(this,'irr1',true,'went')">went</div><div class="sv-opt" onclick="svAns(this,'irr1',false,'went')">gone</div></div><div class="sv-fb" id="irr1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">We _______ (have) a great time at the party.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'irr2',true,'had')">had</div><div class="sv-opt" onclick="svAns(this,'irr2',false,'had')">haved</div><div class="sv-opt" onclick="svAns(this,'irr2',false,'had')">having</div></div><div class="sv-fb" id="irr2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">He _______ (take) his umbrella because it was raining.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'irr3',false,'took')">taked</div><div class="sv-opt" onclick="svAns(this,'irr3',false,'took')">taken</div><div class="sv-opt" onclick="svAns(this,'irr3',true,'took')">took</div></div><div class="sv-fb" id="irr3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">I _______ (see) that film last week.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'irr4',true,'saw')">saw</div><div class="sv-opt" onclick="svAns(this,'irr4',false,'saw')">seed</div><div class="sv-opt" onclick="svAns(this,'irr4',false,'saw')">seen</div></div><div class="sv-fb" id="irr4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">They _______ (buy) a new car last month.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'irr5',false,'bought')">buyed</div><div class="sv-opt" onclick="svAns(this,'irr5',true,'bought')">bought</div><div class="sv-opt" onclick="svAns(this,'irr5',false,'bought')">buied</div></div><div class="sv-fb" id="irr5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <hr class="divider">
    <div class="sec-label">// past continuous — in depth</div>
    <p class="prose">Past Continuous koristimo kada opisujemo radnju koja je <strong>bila u tijeku u određenom trenutku u prošlosti</strong>. Najčešće se pojavljuje u kombinaciji s Past Simple — dulja radnja u tijeku + kratka koja je prekinula.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pc">PC</div>
        <div><div class="gram-title">Past Continuous — tvorba</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'PC Pozitiv: I/he/she/it was + -ing · you/we/they were + -ing')">copy</button>
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">I / He / She / It</span> + <span class="val">was</span> + glagol<span class="val">-ing</span> → I <span class="val">was reading</span>.<br>
          <span class="sub">You / We / They</span> + <span class="val">were</span> + glagol<span class="val">-ing</span> → They <span class="val">were playing</span>.
        </div>
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'PC Negativ: wasn't / weren't + -ing')">copy</button>
          <span class="lbl">− Negativ</span><br>
          I <span class="kw">wasn't</span> sleeping. · She <span class="kw">wasn't</span> listening. · They <span class="kw">weren't</span> watching TV.
        </div>
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'PC Pitanje: Was I/he/she/it + -ing? · Were you/we/they + -ing?')">copy</button>
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Was</span> she sleeping? · <span class="kw">Were</span> they playing?
        </div>
        <div class="callout callout-purple" style="margin-top:14px">
          <span class="callout-icon">💡</span>
          <div class="callout-body">
            <div class="callout-title">was vs were — brzo pravilo</div>
            <div class="callout-text">
              <b style="color:var(--violet)">was</b> = I, he, she, it (jednina)<br>
              <b style="color:var(--violet)">were</b> = you, we, they (množina + you jednina)<br>
              Isto kao am/is/are — ali za prošlost!
            </div>
          </div>
        </div>
        <div class="sub-label">→ Primjeri</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">I <b class="pc">was watching</b> TV at 8 pm.</div><span class="ex-arr">→</span><div class="ex-hr">at 8 pm = određeni trenutak → PC</div></div>
          <div class="ex"><div class="ex-en">They <b class="pc">were playing</b> football all afternoon.</div><span class="ex-arr">→</span><div class="ex-hr">all afternoon = trajalo cijelo poslijepodne → PC</div></div>
          <div class="ex"><div class="ex-en">She <b class="pc">wasn't listening</b> during the lesson.</div><span class="ex-arr">→</span><div class="ex-hr">during = trajalo → PC neg.</div></div>
          <div class="ex"><div class="ex-en"><b>Was</b> it <b class="pc">raining</b> when you left?</div><span class="ex-arr">→</span><div class="ex-hr">Was + -ing → PC pitanje</div></div>
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera</div>
        <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "They were play football" nije točno?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">Past Continuous zahtijeva <b style="color:var(--violet)">were + glagol-ING</b>. "Were" je tu, ali nedostaje -ing oblik. ✅ <b>They were play<span style="color:var(--violet)">ing</span> football.</b></div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// when &amp; while — ključna kombinacija</div>
    <p class="prose">Ovo je <strong>najčešća tema</strong> na maturalnim ispitima. Dvije radnje u prošlosti — jedna dulja (u tijeku), jedna kratka (prekinula). Razumijevanje = sigurni bodovi.</p>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head ps">when + Past Simple</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Što znači</b>Kratka radnja koja se dogodila (prekinula drugu)</div>
          <div class="cmp-row"><b>Primjer</b>When she <em>arrived</em>, I was cooking.</div>
          <div class="cmp-row"><b>Logika</b>"arrived" = kratko, trenutačno → PS</div>
          <div class="cmp-row"><b>Još primjera</b>When he <em>called</em>, she was sleeping.</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head pc">while + Past Continuous</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Što znači</b>Dulja radnja koja je bila u tijeku</div>
          <div class="cmp-row"><b>Primjer</b>While I <em>was cooking</em>, she arrived.</div>
          <div class="cmp-row"><b>Logika</b>"was cooking" = trajalo dulje → PC</div>
          <div class="cmp-row"><b>Još primjera</b>While they were playing, it started to rain.</div>
        </div>
      </div>
    </div>

    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">Vizualizacija — crtaj vremensku crtu!</div>
        <div class="callout-text" style="font-family:var(--mono);font-size:12px;line-height:2">
          PC: &nbsp;&nbsp;━━━━━<span style="color:var(--violet)">was cooking</span>━━━━━━━━━<br>
          PS: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↓ <span style="color:var(--lime)">arrived</span><br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;←─────────────────────── prošlost
        </div>
      </div>
    </div>

    <div class="callout callout-warn">
      <span class="callout-icon">⚠</span>
      <div class="callout-body">
        <div class="callout-title">when može ići i s Past Continuous — iznimka!</div>
        <div class="callout-text">
          Kad su <b>dvije dulje radnje paralelne</b>, obje mogu biti PC:<br>
          <em>When we <b style="color:var(--violet)">were driving</b> home, they <b style="color:var(--violet)">were sleeping</b>.</em><br>
          Ali ovo je rjeđe — na maturi niže razine uglavnom nećeš naći ovu kombinaciju.
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// signal words</div>
    <div class="signal-grid">
      <div class="sig-card">
        <div class="sig-head ps">// PS — signal words</div>
        <div class="chips">
          <span class="chip ps">yesterday</span><span class="chip ps">last week</span><span class="chip ps">last year</span>
          <span class="chip ps">ago</span><span class="chip ps">in 2010</span><span class="chip ps">this morning</span>
          <span class="chip ps">once</span><span class="chip ps">finally</span><span class="chip ps">then</span>
          <span class="chip ps">after that</span><span class="chip ps">when I was young</span><span class="chip ps">suddenly</span>
          <span class="chip ps">first…then</span><span class="chip ps">the other day</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head pc">// PC — signal words</div>
        <div class="chips">
          <span class="chip pc">while</span><span class="chip pc">when (+ kratka)</span>
          <span class="chip pc">at 8 o'clock yesterday</span><span class="chip pc">all day</span>
          <span class="chip pc">all morning</span><span class="chip pc">at that moment</span>
          <span class="chip pc">during</span><span class="chip pc">still</span>
          <span class="chip pc">at that time</span><span class="chip pc">this time last year</span>
        </div>
      </div>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">📡 matura radar — zamke i gdje se pojavljuju</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>-ed na irregular glagol</b> — najtipičnija greška<br><em>She goed</em> ❌ → <em>She <b style="color:var(--lime)">went</b></em> ✓ · <em>He taked</em> ❌ → <em>He <b style="color:var(--lime)">took</b></em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Infinitiv nakon did/didn't!</b><br><em>Did she went?</em> ❌ → <em>Did she <b style="color:var(--lime)">go</b>?</em> ✓ · <em>She didn't came.</em> ❌ → <em>She didn't <b style="color:var(--lime)">come</b>.</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>was/were zbunjenost</b><br><em>They was playing</em> ❌ → <em>They <b style="color:var(--violet)">were</b> playing</em> ✓ · <em>She were working</em> ❌ → <em>She <b style="color:var(--violet)">was</b> working</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>while + PS umjesto PC</b><br><em>While she cooked</em> ❌ → <em>While she <b style="color:var(--violet)">was cooking</b></em> ✓ · while = trajanje → PC</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>Pravopis -ed — CVC glagoli</b><br><em>stoped</em> ❌ → <em><b style="color:var(--lime)">stopped</b></em> ✓ · <em>planed</em> ❌ → <em><b style="color:var(--lime)">planned</b></em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Gap fill:</b> signal words → PS/PC → regular ili irregular? → pravopis<br><b>MCQ:</b> eliminiraj was/were pogrešno → provjeri after did/didn't<br><b>Error correction:</b> irregular glagoli, was/were, pravopis -ed/-ing</div></div>
      </div>
    </div>

    <!-- WHY NOT THE OTHER TENSE -->
    <hr class="divider">
    <div class="sec-label">// zašto NIJE drugi odgovor?</div>
    <p class="prose">Najtipičniji primjeri zamki koji se pojavljuju na ispitima.</p>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "When I arrived, she <em style="color:var(--red)">cooked</em>." — zašto nije PS?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: When I arrived, she was cooking.</b><br>"Arrived" = kratka radnja koja se dogodila (PS ✓). "Was cooking" = dulja radnja u tijeku kad sam stigao → PC. Kuhanje je počelo <em>prije</em> dolaska i trajalo je.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "She <em style="color:var(--red)">was going</em> to the shop yesterday." — zašto nije PC?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: She went to the shop yesterday.</b><br>"Yesterday" = signal za PS (završena radnja). PC bi koristili samo ako naglašavamo da je <em>bila u procesu odlaska</em> u nekom trenutku — ali bez tog konteksta "yesterday" traži PS.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "He <em style="color:var(--red)">didn't went</em> to school." — zašto nije točno?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: He didn't go to school.</b><br>Nakon <b>didn't</b> uvijek ide <b>infinitiv</b> — didn't je već nositelj prošlosti. Vrijedi i za did: "Did he go?" ne "Did he went?"</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "They <em style="color:var(--red)">were play</em> football when it started raining."</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: They were play<b style="color:var(--violet)">ing</b> football when it started raining.</b><br>Past Continuous zahtijeva <b>was/were + glagol-ING</b>. "Were" je tu, ali nedostaje -ing. Greška je u obliku glagola, ne u odabiru vremena.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "While she <em style="color:var(--red)">studied</em>, he was watching TV." — zašto nije PS?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: While she was studying, he was watching TV.</b><br><b>while</b> uvijek signalizira trajanje → Past Continuous. "studied" (PS) ne naglašava trajanje nego završenost — a "while" zahtijeva radnju u tijeku.</div>
    </div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "First she <em style="color:var(--red)">was finishing</em> her homework, then she watched TV." — zašto nije PC?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: First she finished her homework, then she watched TV.</b><br>"First… then…" = niz završenih radnji u redoslijedu → obje <b>Past Simple</b>. PC se ne koristi za niz radnji koje su se odvijale jedna nakon druge — to je specifična karakteristika PS. PC koristimo za radnje <em>u tijeku</em>, ne za sekvence.</div>
    </div>

    <!-- DECISION TREE -->
    <hr class="divider">
    <div class="sec-label">// decision tree — PS ili PC?</div>
    <p class="prose">Slijedi korake kad nisi siguran.</p>
    <div class="dtree">
      <div class="dt-node question">❓ <strong>Korak 1:</strong> Vidiš <b>while</b> u rečenici?</div>
      <div class="dt-row">
        <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>Past Continuous</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· was/were + -ing</small></div></div>
        <div class="dt-connector">NE ↓</div>
      </div>
      <div class="dt-indent">
        <div class="dt-node question">❓ <strong>Korak 2:</strong> Je li radnja <b>bila u tijeku u određenom trenutku</b>? (at 8 pm, at that moment, all day…)</div>
        <div class="dt-row">
          <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>Past Continuous</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· was/were + -ing</small></div></div>
          <div class="dt-connector">NE ↓</div>
        </div>
        <div class="dt-indent">
          <div class="dt-node question">❓ <strong>Korak 3:</strong> Je li radnja <b>završena u prošlosti</b>? (yesterday, ago, last…)</div>
          <div class="dt-row">
            <div class="dt-branch"><div class="dt-node yes-ps">✅ DA → <strong>Past Simple</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· verb+ed ili irregular</small></div></div>
            <div class="dt-connector">NE ↓</div>
          </div>
          <div class="dt-indent">
            <div class="dt-node question">❓ <strong>Korak 4:</strong> Je li glagol <b>regular ili irregular</b>?</div>
            <div class="dt-row">
              <div class="dt-branch"><div class="dt-node yes-ps">Regular → <strong>+ed</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· pazi na pravopis (CVC, nijemo -e, y→ied)</small></div></div>
              <div class="dt-connector">IRR ↓</div>
            </div>
            <div class="dt-indent">
              <div class="dt-node" style="background:var(--amber-dim);border-color:var(--amber-border);color:var(--amber)">Irregular → <strong>napamet</strong>: went, saw, took, had, came…</div>
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

  <!-- ══════════ LAYER 2 — PRACTICE ══════════ -->
  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// exam mode</strong> · Odaberi točan oblik. Svaki odgovor dolazi s objašnjenjem. Target: <strong>8/10</strong> ili bolje.</div>
    <div class="kbd-hint">⌨️ Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor · Speed drill: <span class="kbd">P</span> = PS · <span class="kbd">C</span> = PC</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 · past simple · spelling · regular verb</div><div class="q-text">She _______ (study) all night for the exam.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> studyed</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> studied</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> was studying</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> studies</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 · past simple · irregular verb</div><div class="q-text">My dad _______ (take) me to school every day when I was young.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> taked</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">B</span> taken</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">C</span> took</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> was taking</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 · past continuous · was/were</div><div class="q-text">When I called, they _______ (have) dinner.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> had</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> was having</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> were having</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> have had</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 · negation · didn't + infinitive</div><div class="q-text">She _______ (come) to the party last Saturday.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> didn't came</div><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">B</span> didn't come</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> wasn't come</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> don't come</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 · when + interrupted action</div><div class="q-text">I _______ (read) a book when the phone rang.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> read</div><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">B</span> was reading</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> readed</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> were reading</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 · while + past continuous</div><div class="q-text">While she _______ (sleep), someone broke into the house.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> slept</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">B</span> was sleeping</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">C</span> were sleeping</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> is sleeping</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 · question form · did + infinitive</div><div class="q-text">_______ your brother _______ (go) to university?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> Did … went</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">B</span> Did … go</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> Was … going</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> Does … go</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 · spelling · CVC verb</div><div class="q-text">He _______ (stop) the car suddenly and got out.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> stoped</div><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">B</span> stopped</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">C</span> was stopping</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> stops</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 · past continuous · context clue</div><div class="q-text">At this time yesterday, I _______ (fly) to London.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> flew</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">B</span> was flew</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">C</span> was flying</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> flyed</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 · mixed · sequence of events</div><div class="q-text">First she _______ (finish) her homework, then she _______ (watch) TV.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> was finishing … was watching</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> finished … was watching</div><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">C</span> finished … watched</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> did finish … watched</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">↺ Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">🏆</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje završeno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">02 · Past Simple &amp; Continuous<br>Nastavi na Poglavlje 03 →</div>
      </div>
    </div>

    <!-- SPEED DRILL -->
    <hr class="divider">
    <div class="sec-label">// ⚡ speed recognition drill — PS ili PC?</div>
    <p class="prose" style="margin-bottom:6px">10 rečenica. Odaberi što brže možeš. <span style="font-family:var(--mono);font-size:12px;color:var(--t3)">Keyboard: <span style="color:var(--t2)">P</span> = PS · <span style="color:var(--t2)">C</span> = PC</span></p>
    <div class="speed-drill-wrap">
      <div class="sd-progress" id="sdprog" aria-label="Napredak speed drilla"></div>
      <div id="sdq-wrap"></div>
      <div class="sd-score" id="sd-score-box" aria-live="polite">
        <div class="sd-score-num" id="sd-score-num">0/10</div>
        <div class="sd-score-lbl" id="sd-score-lbl"></div>
        <button class="sd-retry" onclick="initSpeedDrill()">↺ Ponovi drill</button>
      </div>
    </div>

    <!-- ERROR CORRECTION DRILL -->
    <hr class="divider">
    <div class="sec-label">// 🔴 error correction drill — pronađi grešku</div>
    <p class="prose" style="margin-bottom:14px">Svaka rečenica sadrži grešku. Klikni "Otkrij grešku" pa pročitaj objašnjenje.</p>
    <div class="err-drill">
      <div class="err-item"><div class="err-sent">"She goed to the market yesterday morning."</div><button class="err-btn" onclick="showErrFix('ef1',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef1">✅ <span class="correct">She went to the market yesterday morning.</span><span class="explain"><em>Go</em> = irregular verb → past simple je <b>went</b>. Irregular glagoli nikad ne dobivaju -ed.</span></div></div>
      <div class="err-item"><div class="err-sent">"While she cooked, he was watching TV."</div><button class="err-btn" onclick="showErrFix('ef2',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef2">✅ <span class="correct">While she was cooking, he was watching TV.</span><span class="explain"><em>while</em> signalizira trajanje → Past Continuous. while → was/were + -ing uvijek.</span></div></div>
      <div class="err-item"><div class="err-sent">"They didn't came to school on Monday."</div><button class="err-btn" onclick="showErrFix('ef3',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef3">✅ <span class="correct">They didn't come to school on Monday.</span><span class="explain">Nakon <b>didn't</b> uvijek ide <b>infinitiv</b>. didn't je nositelj prošlosti — nema potrebe za prošlim oblikom.</span></div></div>
      <div class="err-item"><div class="err-sent">"He stoped the car and looked around."</div><button class="err-btn" onclick="showErrFix('ef4',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef4">✅ <span class="correct">He stopped the car and looked around.</span><span class="explain"><em>stop</em> = CVC → <b>udvostruči zadnji suglasnik</b> pa dodaj -ed: stop → stopp + ed = <b>stopped</b>.</span></div></div>
      <div class="err-item"><div class="err-sent">"She were reading when I arrived."</div><button class="err-btn" onclick="showErrFix('ef5',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef5">✅ <span class="correct">She was reading when I arrived.</span><span class="explain"><em>She</em> = he/she/it (jednina) → Past Continuous: <b>was</b>. were koristimo za you/we/they.</span></div></div>
    </div>

    <!-- CTA -->
    <div class="cta">
      <div>
        <div class="cta-eye">discere archive</div>
        <div class="cta-title">Vježbaj sa stvarnim zadacima mature</div>
        <div class="cta-sub">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div>
      </div>
      <button class="cta-btn" onclick="openDiscereModal()">Pokreni simulator &#8594;</button>
    </div>

    <!-- MATURA KEY POINTS -->
    <div class="matura">
      <div class="matura-hd">⭐ for the exam — key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>PS tvorba (regular):</b> verb+ed za sve subjekte. Nema -s za he/she/it u prošlosti!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PS tvorba (irregular):</b> go→went, see→saw, take→took, have→had, come→came. Nikad -ed!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Nakon did/didn't:</b> uvijek infinitiv. "Did she go?" ✓ "She didn't come." ✓</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PC tvorba:</b> was (I/he/she/it) / were (you/we/they) + glagol-ing.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>while → PC:</b> <em>While she was sleeping</em> ✓ · "while" uvijek traži trajanje = PC.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>when + kratka radnja → PS:</b> <em>When he arrived</em> (PS) = kratka, završena.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Prekinuta radnja:</b> PC (dulja) + when + PS (kratka koja je prekinula). <em>I was cooking when she called.</em></span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Pravopis:</b> stop→stopped (CVC), study→studied (kons.+y), love→loved (nijemo -e).</span></li>
      </ul>
    </div>

    <!-- FILL IN THE BLANK -->
    <div class="sec-label" style="margin-top:32px">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upiši ispravni oblik glagola. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 · past simple · irregular · (go)</div><div class="fitb-sent">She _______ (go) to the beach last weekend.</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','went','irr-go')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','went','irr-go')">Check</button></div><div class="fitb-fb" id="f1fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 · past continuous · was/were · (watch)</div><div class="fitb-sent">At 9 pm last night, they _______ (watch) a film.</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','were watching','pc-were')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','were watching','pc-were')">Check</button></div><div class="fitb-fb" id="f2fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 · past simple · spelling · (stop)</div><div class="fitb-sent">The bus _______ (stop) right in front of our house.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','stopped','spell-cvc')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','stopped','spell-cvc')">Check</button></div><div class="fitb-fb" id="f3fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 · when + interrupted action · (cook)</div><div class="fitb-sent">When he arrived, she _______ (cook) dinner in the kitchen.</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','was cooking','interrupted')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','was cooking','interrupted')">Check</button></div><div class="fitb-fb" id="f4fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 · negation · didn't + infinitive · (see)</div><div class="fitb-sent">I _______ (see) him at the party last night.</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','didn't see','neg-inf')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','didn't see','neg-inf')">Check</button></div><div class="fitb-fb" id="f5fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 · past simple · spelling · (study)</div><div class="fitb-sent">She _______ (study) medicine at university for five years.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="type here..." autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','studied','spell-y')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','studied','spell-y')">Check</button></div><div class="fitb-fb" id="f6fb" aria-live="polite"></div></div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint — znaš li stvarno razliku?</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako odlučujem PS ili PC u rečenici s "when"?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>when + kratka, trenutačna radnja = PS · when + dulja radnja u tijeku = PC.</b><br>"When she arrived" (PS — kratka) · "When I was studying" (PC — trajala je dulje).<br>Najčešći pattern: PC (dulja) + when + PS (kratka koja je prekinula):<br><em>I was sleeping when he called.</em></div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Zašto "She didn't came" nije točno?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b style="color:var(--lime)">Točno: She didn't come.</b><br>didn't je pomoćni glagol koji nosi prošlost — nakon njega mora ići <b>infinitiv</b>. Ista logika kao "does/doesn't" u sadašnjosti.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Redoslijed PS i PC u rečenici s "when" — bitno?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Redoslijed nije bitan — bitna je logika!</b><br>"When he <b>called</b> (PS), I <b>was cooking</b> (PC)." ← isto kao:<br>"I <b>was cooking</b> (PC) when he <b>called</b> (PS)." ← isti smisao.<br>Tražiš: koja je dulja? → PC. Koja je kratka? → PS.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako znam je li glagol regular ili irregular?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Nema pravila — irregular glagole treba naučiti napamet.</b><br>Korisni signal: ako glagol zvuči "čudno" s -ed (goed, sayed, taked) → gotovo sigurno irregular.<br>Najčešći na maturi: go→went, see→saw, take→took, have→had, come→came, say→said, buy→bought.</div></div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kada koristim "was" a kada "were" u Past Continuous?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>was</b> = I, he, she, it (jednina) · <b>were</b> = you, we, they (množina)<br><br>Trik: isti pattern kao am/is/are — samo za prošlost.<br><em>She <b>was</b> sleeping.</em> ✓ · <em>They <b>were</b> playing.</em> ✓ · <em>You <b>were</b> working.</em> ✓<br><span class="bad">They was watching.</span> ❌ → <span class="ok">They were watching.</span> ✓<br><span class="bad">She were running.</span> ❌ → <span class="ok">She was running.</span> ✓</div></div>

    <!-- QUICK EXAM SUMMARY -->
    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item"><div class="qes-tag gap">// gap fill</div><div class="qes-steps"><b>1.</b> Traži signal words (yesterday/ago → PS · while/at that moment → PC) · <b>2.</b> Regular ili irregular? · <b>3.</b> Provjeri was/were za PC · <b>4.</b> Pravopis (-ed, CVC, y→ied)</div></div>
      <div class="qes-item"><div class="qes-tag mcq">// multiple choice</div><div class="qes-steps"><b>1.</b> Eliminiraj pogrešan oblik (goed, didn't came) · <b>2.</b> while → PC, ago → PS · <b>3.</b> Provjeri was/were · <b>4.</b> Nakon did/didn't = infinitiv</div></div>
      <div class="qes-item"><div class="qes-tag err">// error correction</div><div class="qes-steps">Provjeri: <b>irregular + -ed</b> (goed ❌) · <b>nakon did/didn't</b> (didn't came ❌) · <b>was/were</b> (they was ❌) · <b>while + PS</b> (while she cooked ❌) · <b>pravopis -ed</b> (stoped ❌)</div></div>
    </div>

    <!-- NEXT CHAPTERS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo &amp; sljedeći koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter03.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">03 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky);line-height:1.4">Present Perfect</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">PS vs Present Perfect — česta zamka na ispitu</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter01.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 01</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky);line-height:1.4">Present Simple &amp; Continuous</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Usporedi sadašnja i prošla vremena</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">07</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2);line-height:1.4">Pasiv</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Past Simple pasiv: was/were + past participle</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">12</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2);line-height:1.4">Višestruki izbor — taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Strategija za MCQ s irregular glagolima</div>
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
      <a href="chapter01.html" class="nav-btn">← Chapter 01</a>
      <a href="chapter03.html" class="nav-btn primary">Next chapter →</a>
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
// TRACKER: bilježi pogreške
function trackAnswer(chKey, ok){
  try{
    var wa=JSON.parse(localStorage.getItem('maturix_weak')||'{}');
    if(!wa[chKey]) wa[chKey]={w:0,t:0};
    wa[chKey].t++;
    if(!ok) wa[chKey].w++;
    localStorage.setItem('maturix_weak',JSON.stringify(wa));
  }catch(e){}
}


// ── SHARED STATE ─────────────────────────────────
var tabDone=[false,false,false];

// ── TABS ──────────────────────────────────────────
function switchTab(i){
  tabDone[i]=true; saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){
    t.classList.toggle('active',j===i);
  });
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){
    var tp=document.getElementById('tp'+k);
    if(!tp)continue;
    tp.classList.remove('active','done');
    if(k<i&&tabDone[k])tp.classList.add('done');
    else if(k===i)tp.classList.add('active');
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

// ── QUIZ ──────────────────────────────────────────
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'study' + kons.+y → y→ied: studied. 'all night' = završena radnja → PS.",w:"✗ Netočno. study → studied (kons.+y = -ied, ne -yed). Točan odgovor: studied."},
  q2:{c:"✓ Točno. 'take' = irregular verb → took. 'when I was young' = PS signal.",w:"✗ Netočno. 'take' je irregular → nikad 'taked'. take→took. Točan odgovor: took."},
  q3:{c:"✓ Točno. 'they' = množina → were. Radnja trajala kad sam nazvao (prekinuta) → PC: were having.",w:"✗ Netočno. 'they' = množina → were (ne was). Radnja bila u tijeku → PC: were having. Točan odgovor: were having."},
  q4:{c:"✓ Točno. Nakon 'didn't' uvijek infinitiv: didn't come (ne 'didn't came').",w:"✗ Netočno. Nakon didn't UVIJEK infinitiv — didn't je nositelj prošlosti. Točan odgovor: didn't come."},
  q5:{c:"✓ Točno. Radnja čitanja trajala kad je telefon zazvonio — prekinuta radnja → PC: was reading.",w:"✗ Netočno. Radnja u tijeku prekinuta kratkom → PC. 'I' = was. read → reading. Točan odgovor: was reading."},
  q6:{c:"✓ Točno. 'While' = trajanje → PC. 'she' = he/she/it → was sleeping.",w:"✗ Netočno. 'while' uvijek → PC. 'she' = jednina → was (ne were). Točan odgovor: was sleeping."},
  q7:{c:"✓ Točno. Nakon Did uvijek infinitiv: Did … go? (ne 'Did … went?').",w:"✗ Netočno. Nakon Did = infinitiv. 'Did … went' je greška. Točan odgovor: Did … go."},
  q8:{c:"✓ Točno. 'stop' = CVC → udvostruči p + ed = stopped. 'suddenly' = PS signal.",w:"✗ Netočno. stop = CVC → stop+p+ed = stopped. 'stoped' je pravopisna greška. Točan odgovor: stopped."},
  q9:{c:"✓ Točno. 'At this time yesterday' = radnja u tijeku u tom trenutku → PC: was flying.",w:"✗ Netočno. 'At this time yesterday' = radnja trajala → PC. I → was. fly→flying. Točan odgovor: was flying."},
  q10:{c:"✓ Točno. First...then = niz završenih radnji u prošlosti → obje Past Simple: finished … watched.",w:"✗ Netočno. Niz završenih PS radnji → obje Past Simple (C: finished … watched). A = PC+PC (trajanje, ne niz). B = PS+PC (miješanje). D = did finish je krivo — nakon 'did' ide infinitiv, ali ovdje već imamo PS oblik. Točan odgovor: C."}
};
var FITB={
  'irr-go':     "'Go' = irregular → past simple: went. Nikad 'goed'!",
  'pc-were':    "'At 9 pm last night' = određeni trenutak → PC. 'they' = množina → were. watch→watching.",
  'spell-cvc':  "'stop' = CVC → udvostruči p pa dodaj -ed: stopped.",
  'interrupted':"'when he arrived' (PS) = kratka radnja koja je prekinula dužu → PC: was cooking.",
  'neg-inf':    "Negacija PS: didn't + infinitiv. didn't see (ne didn't saw).",
  'spell-y':    "'study' kons.+y → y→ied: studied."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch02',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':
      correct>=9?'Excellent! Provjeri propušteno pitanje.':
      correct>=7?'Good. Fokusiraj se na irregular verbs i was/were.':
      correct>=5?'Vrati se na Learn — irregular verbs i when/while.':
      'Vrati se na Learn i idi polako. Možeš to!';
    s.classList.add('show');
    if(correct>=8){
      document.getElementById('completionBadge').style.display='block';
      tabDone[2]=true; saveProgress();
      document.querySelectorAll('.tab')[2].classList.add('done-tab');
    }
  }
}

function retryQuiz(){
  answered={}; correct=0;
  QORDER.forEach(function(qid){
    var block=document.getElementById(qid);
    if(!block)return;
    block.querySelectorAll('.q-opt').forEach(function(o){o.classList.remove('correct','wrong','disabled')});
    var expl=document.getElementById(qid+'e');
    if(expl){expl.innerHTML='';expl.classList.remove('show');}
  });
  document.getElementById('score').classList.remove('show');
  document.getElementById('completionBadge').style.display='none';
  tabDone[2]=false; saveProgress();
  document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}

document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2')return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){
    for(var i=0;i<QORDER.length;i++){
      if(answered[QORDER[i]]===undefined){
        var opts=document.querySelectorAll('#'+QORDER[i]+' .q-opt:not(.disabled)');
        if(opts[k-1])opts[k-1].click();
        break;
      }
    }
  }
  if(e.key.toLowerCase()==='p'){var b=document.querySelector('#sdq-wrap .sd-btn.ps');if(b&&b.style.pointerEvents!=='none')sdAns('ps');}
  if(e.key.toLowerCase()==='c'){var b=document.querySelector('#sdq-wrap .sd-btn.pc');if(b&&b.style.pointerEvents!=='none')sdAns('pc');}
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);
  var fb=document.getElementById(fbId);
  if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();
  var btn=inp.parentElement.querySelector('.fitb-btn');
  if(!val)return;
  inp.disabled=true; if(btn)btn.disabled=true;
  fb.classList.add('show');
  var ok=val===answer.toLowerCase();
  inp.classList.add(ok?'ok':'fail');
  fb.classList.add(ok?'ok':'fail');
  var exp=FITB[key]||'';
  fb.innerHTML=ok
    ?'✓ Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:'')
    :'✗ Your answer: <strong>'+(inp.value.trim()||'—')+'</strong> · Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:'');
}

// ── REVEAL CARDS ──────────────────────────────────
function toggleReveal(card){
  var isOpen=card.classList.contains('open');
  card.classList.toggle('open');
  card.setAttribute('aria-expanded',!isOpen?'true':'false');
}

// ── ERROR DRILL ───────────────────────────────────
function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  if(btn){btn.setAttribute('aria-expanded','true');btn.style.display='none';}
}

// ── IRREGULAR VERB DRILL (sv-drill adapted) ────────
var irrAnswered={},irrCorrect=0,irrTotal=5;
function svAns(el,id,isCorrect,correctForm){
  // Used for both irregular verb drill in Learn AND this function name kept for compat
  if(irrAnswered[id])return;
  irrAnswered[id]=true;
  if(isCorrect)irrCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){
    el.classList.add('sv-correct');
    if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong> — irregular verb, Past Simple.';}
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});
    if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong> — irregular verb → nauči napamet!';}
  }
  if(Object.keys(irrAnswered).length===irrTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=irrCorrect+'/'+irrTotal;
      document.getElementById('sv-score-lbl').textContent=
        irrCorrect===5?'Savršen! Irregular verbs su ti jasni. 🎉':
        irrCorrect>=4?'Odlično! Još malo ponavljanja.':
        irrCorrect>=3?'Dobro — ali ponovi tablicu irregular verbs.':
        'Vrati se na tablicu i nauči irregular verbe napamet.';
      box.classList.add('show');
    }
  }
}

// ── COPY FORMULA ──────────────────────────────────
function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';
    btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);
  });
}

// ── SPEED DRILL ────────────────────────────────────
var SD=[
  {s:"I looked out the window. It ___. (rain)",             ans:"pc",exp:"Radnja je bila u tijeku u prošlom trenutku — bez signal worda, ali kontekst (pogledao sam) → PC: was raining."},
  {s:"She ___ a book when her phone suddenly rang. (read)", ans:"pc",exp:"Dulja radnja u tijeku prekinuta kratkom → PC: was reading. 'suddenly rang' = kratka PS koja je prekinula."},
  {s:"They ___ to London twice when they were students. (go)", ans:"ps",exp:"'Twice when they were students' = specifično završeno iskustvo u prošlosti → PS. go→went."},
  {s:"He ___ into the room, sat down and said nothing. (walk)", ans:"ps",exp:"Niz kratkih završenih radnji u prošlosti (walk→sit→say) → sve PS. walk→walked."},
  {s:"I ___ her at 8 am. She ___ breakfast. (call / eat)",  ans:"pc",exp:"'At 8 am' = određeni trenutak → radnja u tijeku → PC: was eating. call = kratka PS koja se dogodila."},
  {s:"When I was a child, we ___ every summer in the mountains. (spend)", ans:"ps",exp:"'When I was a child' + ponavljajuća prošla navika → PS. spend→spent."},
  {s:"She ___ the report when the boss suddenly entered. (write)", ans:"pc",exp:"Dulja radnja u tijeku prekinuta kratkom → PC: was writing. 'suddenly entered' = PS koji je prekinuo."},
  {s:"I ___ three cups of coffee, then finally fell asleep. (drink)", ans:"ps",exp:"Niz završenih radnji prije spavanja → PS. drink→drank."},
  {s:"The sun ___ and birds were singing when I woke up. (shine)", ans:"pc",exp:"Radnja u tijeku u trenutku buđenja → PC: was shining. Paralelno s 'were singing'."},
  {s:"He ___ the door, picked up his bag and left. (open)", ans:"ps",exp:"Niz kratkih, brzih završenih radnji → sve PS. open→opened (regular)."}
];
var sdState={idx:0,results:[]};

function initSpeedDrill(){
  sdState={idx:0,results:[]};
  document.getElementById('sd-score-box').classList.remove('show');
  renderSD();
}

function renderSD(){
  var prog=document.getElementById('sdprog');
  if(prog){
    prog.innerHTML='';
    for(var i=0;i<SD.length;i++){
      var d=document.createElement('div');
      d.className='sd-dot'+(i<sdState.results.length?(sdState.results[i]?' ok':' no'):(i===sdState.idx?' cur':''));
      prog.appendChild(d);
    }
  }
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap)return;
  if(sdState.idx>=SD.length){
    wrap.innerHTML='';
    var sc=sdState.results.filter(function(r){return r}).length;
    document.getElementById('sd-score-num').textContent=sc+'/'+SD.length;
    document.getElementById('sd-score-lbl').textContent=
      sc===10?'Savršeno! Instinkt ti je odličan. 🎉':
      sc>=8?'Odlično! Još malo i automatiziraš to. 💪':
      sc>=6?'Dobro! Fokusiraj se na while/when razliku.':
      'Ponovi Learn tab pa pokušaj opet.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn ps" onclick="sdAns(\\'ps\\')" tabindex="0">Past Simple <span style="font-size:10px;opacity:.4">[P]</span></div>'+
    '<div class="sd-btn pc" onclick="sdAns(\\'pc\\')" tabindex="0">Past Continuous <span style="font-size:10px;opacity:.4">[C]</span></div>'+
    '</div>'+
    '<div class="sd-fb" id="sdfb" aria-live="polite"></div>'+
    '</div>';
}

function sdAns(choice){
  var q=SD[sdState.idx];
  var ok=choice===q.ans;
  sdState.results.push(ok);
  var btns=document.querySelectorAll('#sdq-wrap .sd-btn');
  btns.forEach(function(b){b.style.pointerEvents='none';b.setAttribute('tabindex','-1')});
  var picked=choice==='ps'?btns[0]:btns[1];
  var correctBtn=q.ans==='ps'?btns[0]:btns[1];
  picked.classList.add(ok?'correct-pick':'wrong-pick');
  if(!ok)correctBtn.classList.add('reveal-correct');
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1500);
}

// ── MOBILE DRAWER ─────────────────────────────────
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

// ── LOCALSTORAGE ──────────────────────────────────
function saveProgress(){try{localStorage.setItem('maturix_ch02_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch02_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){
          tabDone[i]=true;
          var tab=document.querySelectorAll('.tab')[i];
          if(tab)tab.classList.add('done-tab');
          var tp=document.getElementById('tp'+i);
          if(tp)tp.classList.add('done');
        }
      });
    }
  }catch(e){}
}
loadProgress();

// Init mobile drawer close on outside click
(function(){
  var drawer=document.getElementById('mobDrawer');
  if(drawer)drawer.addEventListener('click',function(e){if(e.target===drawer)closeMobDrawer();});
})();

initSpeedDrill();

</script>`;

const CH02_JS = `// TRACKER: bilježi pogreške
function trackAnswer(chKey, ok){
  try{
    var wa=JSON.parse(localStorage.getItem('maturix_weak')||'{}');
    if(!wa[chKey]) wa[chKey]={w:0,t:0};
    wa[chKey].t++;
    if(!ok) wa[chKey].w++;
    localStorage.setItem('maturix_weak',JSON.stringify(wa));
  }catch(e){}
}


// ── SHARED STATE ─────────────────────────────────
var tabDone=[false,false,false];

// ── TABS ──────────────────────────────────────────
function switchTab(i){
  tabDone[i]=true; saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){
    t.classList.toggle('active',j===i);
  });
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){
    var tp=document.getElementById('tp'+k);
    if(!tp)continue;
    tp.classList.remove('active','done');
    if(k<i&&tabDone[k])tp.classList.add('done');
    else if(k===i)tp.classList.add('active');
  }
  window.scrollTo({top:0,behavior:'smooth'});
}

// ── QUIZ ──────────────────────────────────────────
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'study' + kons.+y → y→ied: studied. 'all night' = završena radnja → PS.",w:"✗ Netočno. study → studied (kons.+y = -ied, ne -yed). Točan odgovor: studied."},
  q2:{c:"✓ Točno. 'take' = irregular verb → took. 'when I was young' = PS signal.",w:"✗ Netočno. 'take' je irregular → nikad 'taked'. take→took. Točan odgovor: took."},
  q3:{c:"✓ Točno. 'they' = množina → were. Radnja trajala kad sam nazvao (prekinuta) → PC: were having.",w:"✗ Netočno. 'they' = množina → were (ne was). Radnja bila u tijeku → PC: were having. Točan odgovor: were having."},
  q4:{c:"✓ Točno. Nakon 'didn't' uvijek infinitiv: didn't come (ne 'didn't came').",w:"✗ Netočno. Nakon didn't UVIJEK infinitiv — didn't je nositelj prošlosti. Točan odgovor: didn't come."},
  q5:{c:"✓ Točno. Radnja čitanja trajala kad je telefon zazvonio — prekinuta radnja → PC: was reading.",w:"✗ Netočno. Radnja u tijeku prekinuta kratkom → PC. 'I' = was. read → reading. Točan odgovor: was reading."},
  q6:{c:"✓ Točno. 'While' = trajanje → PC. 'she' = he/she/it → was sleeping.",w:"✗ Netočno. 'while' uvijek → PC. 'she' = jednina → was (ne were). Točan odgovor: was sleeping."},
  q7:{c:"✓ Točno. Nakon Did uvijek infinitiv: Did … go? (ne 'Did … went?').",w:"✗ Netočno. Nakon Did = infinitiv. 'Did … went' je greška. Točan odgovor: Did … go."},
  q8:{c:"✓ Točno. 'stop' = CVC → udvostruči p + ed = stopped. 'suddenly' = PS signal.",w:"✗ Netočno. stop = CVC → stop+p+ed = stopped. 'stoped' je pravopisna greška. Točan odgovor: stopped."},
  q9:{c:"✓ Točno. 'At this time yesterday' = radnja u tijeku u tom trenutku → PC: was flying.",w:"✗ Netočno. 'At this time yesterday' = radnja trajala → PC. I → was. fly→flying. Točan odgovor: was flying."},
  q10:{c:"✓ Točno. First...then = niz završenih radnji u prošlosti → obje Past Simple: finished … watched.",w:"✗ Netočno. Niz završenih PS radnji → obje Past Simple (C: finished … watched). A = PC+PC (trajanje, ne niz). B = PS+PC (miješanje). D = did finish je krivo — nakon 'did' ide infinitiv, ali ovdje već imamo PS oblik. Točan odgovor: C."}
};
var FITB={
  'irr-go':     "'Go' = irregular → past simple: went. Nikad 'goed'!",
  'pc-were':    "'At 9 pm last night' = određeni trenutak → PC. 'they' = množina → were. watch→watching.",
  'spell-cvc':  "'stop' = CVC → udvostruči p pa dodaj -ed: stopped.",
  'interrupted':"'when he arrived' (PS) = kratka radnja koja je prekinula dužu → PC: was cooking.",
  'neg-inf':    "Negacija PS: didn't + infinitiv. didn't see (ne didn't saw).",
  'spell-y':    "'study' kons.+y → y→ied: studied."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch02',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':
      correct>=9?'Excellent! Provjeri propušteno pitanje.':
      correct>=7?'Good. Fokusiraj se na irregular verbs i was/were.':
      correct>=5?'Vrati se na Learn — irregular verbs i when/while.':
      'Vrati se na Learn i idi polako. Možeš to!';
    s.classList.add('show');
    if(correct>=8){
      document.getElementById('completionBadge').style.display='block';
      tabDone[2]=true; saveProgress();
      document.querySelectorAll('.tab')[2].classList.add('done-tab');
    }
  }
}

function retryQuiz(){
  answered={}; correct=0;
  QORDER.forEach(function(qid){
    var block=document.getElementById(qid);
    if(!block)return;
    block.querySelectorAll('.q-opt').forEach(function(o){o.classList.remove('correct','wrong','disabled')});
    var expl=document.getElementById(qid+'e');
    if(expl){expl.innerHTML='';expl.classList.remove('show');}
  });
  document.getElementById('score').classList.remove('show');
  document.getElementById('completionBadge').style.display='none';
  tabDone[2]=false; saveProgress();
  document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}

document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2')return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){
    for(var i=0;i<QORDER.length;i++){
      if(answered[QORDER[i]]===undefined){
        var opts=document.querySelectorAll('#'+QORDER[i]+' .q-opt:not(.disabled)');
        if(opts[k-1])opts[k-1].click();
        break;
      }
    }
  }
  if(e.key.toLowerCase()==='p'){var b=document.querySelector('#sdq-wrap .sd-btn.ps');if(b&&b.style.pointerEvents!=='none')sdAns('ps');}
  if(e.key.toLowerCase()==='c'){var b=document.querySelector('#sdq-wrap .sd-btn.pc');if(b&&b.style.pointerEvents!=='none')sdAns('pc');}
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);
  var fb=document.getElementById(fbId);
  if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();
  var btn=inp.parentElement.querySelector('.fitb-btn');
  if(!val)return;
  inp.disabled=true; if(btn)btn.disabled=true;
  fb.classList.add('show');
  var ok=val===answer.toLowerCase();
  inp.classList.add(ok?'ok':'fail');
  fb.classList.add(ok?'ok':'fail');
  var exp=FITB[key]||'';
  fb.innerHTML=ok
    ?'✓ Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:'')
    :'✗ Your answer: <strong>'+(inp.value.trim()||'—')+'</strong> · Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:'');
}

// ── REVEAL CARDS ──────────────────────────────────
function toggleReveal(card){
  var isOpen=card.classList.contains('open');
  card.classList.toggle('open');
  card.setAttribute('aria-expanded',!isOpen?'true':'false');
}

// ── ERROR DRILL ───────────────────────────────────
function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  if(btn){btn.setAttribute('aria-expanded','true');btn.style.display='none';}
}

// ── IRREGULAR VERB DRILL (sv-drill adapted) ────────
var irrAnswered={},irrCorrect=0,irrTotal=5;
function svAns(el,id,isCorrect,correctForm){
  // Used for both irregular verb drill in Learn AND this function name kept for compat
  if(irrAnswered[id])return;
  irrAnswered[id]=true;
  if(isCorrect)irrCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){
    el.classList.add('sv-correct');
    if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong> — irregular verb, Past Simple.';}
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});
    if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong> — irregular verb → nauči napamet!';}
  }
  if(Object.keys(irrAnswered).length===irrTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=irrCorrect+'/'+irrTotal;
      document.getElementById('sv-score-lbl').textContent=
        irrCorrect===5?'Savršen! Irregular verbs su ti jasni. 🎉':
        irrCorrect>=4?'Odlično! Još malo ponavljanja.':
        irrCorrect>=3?'Dobro — ali ponovi tablicu irregular verbs.':
        'Vrati se na tablicu i nauči irregular verbe napamet.';
      box.classList.add('show');
    }
  }
}

// ── COPY FORMULA ──────────────────────────────────
function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';
    btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);
  });
}

// ── SPEED DRILL ────────────────────────────────────
var SD=[
  {s:"I looked out the window. It ___. (rain)",             ans:"pc",exp:"Radnja je bila u tijeku u prošlom trenutku — bez signal worda, ali kontekst (pogledao sam) → PC: was raining."},
  {s:"She ___ a book when her phone suddenly rang. (read)", ans:"pc",exp:"Dulja radnja u tijeku prekinuta kratkom → PC: was reading. 'suddenly rang' = kratka PS koja je prekinula."},
  {s:"They ___ to London twice when they were students. (go)", ans:"ps",exp:"'Twice when they were students' = specifično završeno iskustvo u prošlosti → PS. go→went."},
  {s:"He ___ into the room, sat down and said nothing. (walk)", ans:"ps",exp:"Niz kratkih završenih radnji u prošlosti (walk→sit→say) → sve PS. walk→walked."},
  {s:"I ___ her at 8 am. She ___ breakfast. (call / eat)",  ans:"pc",exp:"'At 8 am' = određeni trenutak → radnja u tijeku → PC: was eating. call = kratka PS koja se dogodila."},
  {s:"When I was a child, we ___ every summer in the mountains. (spend)", ans:"ps",exp:"'When I was a child' + ponavljajuća prošla navika → PS. spend→spent."},
  {s:"She ___ the report when the boss suddenly entered. (write)", ans:"pc",exp:"Dulja radnja u tijeku prekinuta kratkom → PC: was writing. 'suddenly entered' = PS koji je prekinuo."},
  {s:"I ___ three cups of coffee, then finally fell asleep. (drink)", ans:"ps",exp:"Niz završenih radnji prije spavanja → PS. drink→drank."},
  {s:"The sun ___ and birds were singing when I woke up. (shine)", ans:"pc",exp:"Radnja u tijeku u trenutku buđenja → PC: was shining. Paralelno s 'were singing'."},
  {s:"He ___ the door, picked up his bag and left. (open)", ans:"ps",exp:"Niz kratkih, brzih završenih radnji → sve PS. open→opened (regular)."}
];
var sdState={idx:0,results:[]};

function initSpeedDrill(){
  sdState={idx:0,results:[]};
  document.getElementById('sd-score-box').classList.remove('show');
  renderSD();
}

function renderSD(){
  var prog=document.getElementById('sdprog');
  if(prog){
    prog.innerHTML='';
    for(var i=0;i<SD.length;i++){
      var d=document.createElement('div');
      d.className='sd-dot'+(i<sdState.results.length?(sdState.results[i]?' ok':' no'):(i===sdState.idx?' cur':''));
      prog.appendChild(d);
    }
  }
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap)return;
  if(sdState.idx>=SD.length){
    wrap.innerHTML='';
    var sc=sdState.results.filter(function(r){return r}).length;
    document.getElementById('sd-score-num').textContent=sc+'/'+SD.length;
    document.getElementById('sd-score-lbl').textContent=
      sc===10?'Savršeno! Instinkt ti je odličan. 🎉':
      sc>=8?'Odlično! Još malo i automatiziraš to. 💪':
      sc>=6?'Dobro! Fokusiraj se na while/when razliku.':
      'Ponovi Learn tab pa pokušaj opet.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn ps" onclick="sdAns(\\'ps\\')" tabindex="0">Past Simple <span style="font-size:10px;opacity:.4">[P]</span></div>'+
    '<div class="sd-btn pc" onclick="sdAns(\\'pc\\')" tabindex="0">Past Continuous <span style="font-size:10px;opacity:.4">[C]</span></div>'+
    '</div>'+
    '<div class="sd-fb" id="sdfb" aria-live="polite"></div>'+
    '</div>';
}

function sdAns(choice){
  var q=SD[sdState.idx];
  var ok=choice===q.ans;
  sdState.results.push(ok);
  var btns=document.querySelectorAll('#sdq-wrap .sd-btn');
  btns.forEach(function(b){b.style.pointerEvents='none';b.setAttribute('tabindex','-1')});
  var picked=choice==='ps'?btns[0]:btns[1];
  var correctBtn=q.ans==='ps'?btns[0]:btns[1];
  picked.classList.add(ok?'correct-pick':'wrong-pick');
  if(!ok)correctBtn.classList.add('reveal-correct');
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1500);
}

// ── MOBILE DRAWER ─────────────────────────────────
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

// ── LOCALSTORAGE ──────────────────────────────────
function saveProgress(){try{localStorage.setItem('maturix_ch02_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch02_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){
          tabDone[i]=true;
          var tab=document.querySelectorAll('.tab')[i];
          if(tab)tab.classList.add('done-tab');
          var tp=document.getElementById('tp'+i);
          if(tp)tp.classList.add('done');
        }
      });
    }
  }catch(e){}
}
loadProgress();

// Init mobile drawer close on outside click
(function(){
  var drawer=document.getElementById('mobDrawer');
  if(drawer)drawer.addEventListener('click',function(e){if(e.target===drawer)closeMobDrawer();});
})();

initSpeedDrill();
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
