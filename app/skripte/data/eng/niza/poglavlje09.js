// Maturiraj.hr — Engleski niža razina · Poglavlje 9
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useRef } from "react";

export default function ENG_NIZA_CH09({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  navRef.current = { onBack, onNext, onPrev, onNavigate };

  useEffect(() => {
    const styleId = "skripta-ch09-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH09_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch09-js";
    scriptEl.textContent = CH09_JS;
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
      if (num === 10 && nav.onNext) nav.onNext();
      else if (num === 8 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch09-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch09-root"
      dangerouslySetInnerHTML={{ __html: CH09_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH09_CSS = `
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


.rq2-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 18px;margin-bottom:14px}
.rq2-block.tf-block{background:var(--bg-card)}
.rq2-meta{font-family:var(--mono);font-size:10px;color:var(--t3);font-weight:600;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px}
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

const CH09_BODY = `<div class="shell">

<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">&#x2715; Zatvori</button>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter01.html'"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter02.html'"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter03.html'"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter04.html'"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter05.html'"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter06.html'"><span class="sb-dot"></span> 06 &middot; Uvjetne rečenice 0, 1, 2</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter07.html'"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
  <div class="sb-label">// Vještine</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter08.html'"><span class="sb-dot"></span> 08 &middot; Vokabular — život</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 09 &middot; Čitanje s razumijevanjem</div>
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
  <div class="sb-item" onclick="window.location='chapter01.html'" style="cursor:pointer"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter02.html'" style="cursor:pointer"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter03.html'" style="cursor:pointer"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item" onclick="window.location='chapter04.html'" style="cursor:pointer"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
  <div class="sb-item" onclick="window.location='chapter05.html'" style="cursor:pointer"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
  <div class="sb-item" onclick="window.location='chapter06.html'" style="cursor:pointer"><span class="sb-dot"></span> 06 &middot; Uvjetne rečenice 0, 1, 2</div>
  <div class="sb-item" onclick="window.location='chapter07.html'" style="cursor:pointer"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
  <div class="sb-label">// Vještine</div>
  <div class="sb-item" onclick="window.location='chapter08.html'" style="cursor:pointer"><span class="sb-dot"></span> 08 &middot; Vokabular — život</div>
  <div class="sb-item active"><span class="sb-dot"></span> 09 &middot; Čitanje s razumijevanjem</div>
  <div class="sb-item" onclick="window.location='chapter10.html'" style="cursor:pointer"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
  <div class="sb-item" onclick="window.location='chapter11.html'" style="cursor:pointer"><span class="sb-dot"></span> 11 &middot; Strategije slušanja</div>
  <div class="sb-item" onclick="window.location='chapter12.html'" style="cursor:pointer"><span class="sb-dot"></span> 12 &middot; Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 &middot; Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 &middot; Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 &middot; Komparativ i tag pitanja</div>
  <div class="sb-footer">09 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter08.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>skills</span>
    <span class="bc-sep">/</span><span class="bc-active">reading-comprehension</span>
  </div>

  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" tabindex="0">&#9889; 2 min<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" tabindex="0">&#128214; Strategies<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" tabindex="0">&#9999;&#65039; Practice<span class="tab-check">&#10003;</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Overview</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Learn strategies</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Reading + quiz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~35 min
    </div>
  </div>

  <!-- ══ LAYER 0 — 2 MIN ══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 09 / 15 &middot; skills</div>
      <h1 class="hero-title">Reading <span>Comprehension</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">&#9201; ~35 min</span>
        <span class="hero-badge hb-level">ni&#382;a razina</span>
        <span class="hero-badge hb-chapter">09 / 12</span>
      </div>
      <p class="hero-sub">Strategije &middot; MCQ &middot; True/False &middot; Zna&#269;enje rije&#269;i &middot; Parafraziranje</p>
      <div class="progress-track"><div class="progress-bar" style="width:75%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">Skimming</span>
      <span class="pill pill-sky">Scanning</span>
      <span class="pill pill-violet">Parafraziranje</span>
      <span class="pill pill-amber">True / False</span>
      <span class="pill pill-red">Zamke</span>
    </div>

    <div class="sec-label">// at a glance &mdash; tipovi zadataka</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">MCQ</div><div class="stat-name">Vi&#353;estruki izbor</div><div class="stat-desc">4 opcije &middot; odgovor uvijek u tekstu &middot; parafraziran</div></div>
      <div class="stat-card"><div class="stat-icon sky">T/F</div><div class="stat-name">True / False</div><div class="stat-desc">Izjava to&#269;na ili neto&#269;na &middot; dokazuj re&#269;enicom iz teksta</div></div>
      <div class="stat-card"><div class="stat-icon violet">VOC</div><div class="stat-name">Zna&#269;enje rije&#269;i</div><div class="stat-desc">Kontekst odre&#273;uje zna&#269;enje &middot; ne rje&#269;nik!</div></div>
      <div class="stat-card"><div class="stat-icon amber">SIG</div><div class="stat-name">Signal words</div><div class="stat-desc">however &middot; therefore &middot; such as &middot; in contrast</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Skim first</div><div class="cv">Prvo pro&#269;itaj PITANJA, zatim tekst &mdash; zna&#353; &#353;to tra&#382;i&#353; prije nego po&#269;ne&#353; &#269;itati</div></div>
      <div class="concept-row"><div class="ck sky">Parafraziranje</div><div class="cv">Odgovori su UVIJEK parafrazirani &mdash; iste rije&#269;i kao u tekstu &rarr; zamka!</div></div>
      <div class="concept-row"><div class="ck violet">True/False dokaz</div><div class="cv">Za svaki T/F na&#273;i KONKRETNU re&#269;enicu u tekstu koja to dokazuje</div></div>
      <div class="concept-row"><div class="ck amber">Kontekst &gt; rje&#269;nik</div><div class="cv">Zna&#269;enje nepoznate rije&#269;i &mdash; &#269;itaj okolne re&#269;enice, ne &mdash; prevoditi direktno</div></div>
      <div class="concept-row"><div class="ck red">Zamka</div><div class="cv">Distraktori koriste rije&#269;i iz teksta ali MIJENJAJU zna&#269;enje &mdash; uvijek provjeri kontekst</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; 5 koraka na ispitu</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; panic-proof &mdash; &#269;itanje na ispitu</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Pro&#269;itaj pitanja PRVO</b> &mdash; zna&#353; &#353;to tra&#382;i&#353; prije nego pro&#269;ita&#353; tekst</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Skim tekst</b> &mdash; 60 sekundi, samo naslovi, prvi i zadnji odlomak, klju&#269;ne rije&#269;i</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Scan za odgovor</b> &mdash; tra&#382;i klju&#269;nu rije&#269; iz pitanja u tekstu (ili njezin sinonim)</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Provjeri parafraziranje</b> &mdash; isti smisao, druge rije&#269;i &rarr; to&#269;an odgovor</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Eliminiraj distraktor</b> &mdash; opcija s rije&#269;ima iz teksta ali krivim zna&#269;enjem &rarr; zamka!</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to &#269;itati pitanja PRIJE teksta?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">
        <b>Jer znanje &#353;to tra&#382;i&#353; &uarr; efikasnost 2&times;.</b><br><br>
        Bez pitanja: &#269;ita&#353; sve jednako pa&#382;ljivo (gubi&#353; vrijeme na nebitno)<br>
        S pitanjima: zna&#353; koje informacije su klju&#269;ne &rarr; scan ciljanog dijela<br><br>
        Redoslijed: <b>1. pitanja &rarr; 2. skim tekst &rarr; 3. scan za odgovor &rarr; 4. &#269;itaj oko tog mjesta</b>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Razlika: skimming vs scanning</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Skimming</b> = letimično čitanje za opću ideju (naslov, teme odlomaka)<br><b>Scanning</b> = traženje specifične informacije (broj, ime, datum)<br>Strategija: skim tekst (15 sek) → pročitaj pitanja → scan za odgovore</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako prepoznati zamku u MCQ?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">3 tipa zamki:<br>1. <b>Apsolutne tvrdnje</b> (all/never/always) → obično netočne<br>2. <b>Doslovne riječi</b> iz teksta → zamka koja nije parafrazirana<br>3. <b>Djelomično točno</b> → opisuje dio teksta, ne cijelu ideju</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako odrediti zna&#269;enje nepoznate rije&#269;i iz konteksta?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">
        <b>4 koraka:</b><br>
        1. Pro&#269;itaj <b>cijelu re&#269;enicu</b> s nepoznatom rije&#269;ju<br>
        2. Pro&#269;itaj <b>re&#269;enicu prije i poslije</b><br>
        3. Pitaj se: je li to <b>pozitivna ili negativna</b> rije&#269;?<br>
        4. Koji <b>dio govora</b> je (imenica/glagol/pridjev)? &rarr; eliminiraj opcije<br><br>
        Primjer: "The <b>incentives</b> attracted many back" &rarr; pozitivno, imenica &rarr; poticaj/nagrada
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>True/False &mdash; kako sigurno odgovoriti?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">FALSE ako: tekst kaže suprotno ili ne kaže to uopće.<br>TRUE samo ako: tekst to eksplicitno potvrđuje.<br>&#x26A0; Zamka: izjava je <b>djelomično</b> točna → FALSE! Sve mora biti točno.</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F6A8; ako zaglavim na pitanju &mdash; &#269;initi ovo</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Zaokru&#382;i klju&#269;nu rije&#269; iz pitanja i <b>scan</b> tekst za nju ili njezin sinonim</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Pro&#269;itaj <b>cijeli odlomak</b> oko te rije&#269;i &mdash; ne samo jednu re&#269;enicu</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Eliminiraj</b> odmah opcije koje sadr&#382;e rije&#269;i kojih nema u tekstu</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Izme&#273;u 2 preostale: koja je <b>to&#269;na parafaza</b> re&#269;enice iz teksta?</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Nikad ne ostavljaj prazno &mdash; <b>educated guess</b> &gt; prazan odgovor</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter08.html" class="nav-btn">&larr; Chapter 08</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn strategies &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — STRATEGIES ══ -->
  <div class="layer" id="l1">

    <div class="sec-label">// 7 klju&#269;nih strategija &#269;itanja</div>
    <p class="prose">Svaka strategija je <b>vje&#353;tina</b> &mdash; vje&#382;banjem postaje automatska. Redoslijed je va&#382;an: ove strategije vrijede za MCQ, T/F i sve ostale tipove zadataka.</p>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--lime-dim);color:var(--lime)">1</div>
        <div class="sc-title">Pitanja PRVO, tekst DRUGO</div>
      </div>
      <div class="sc-body">Pro&#269;itaj sva pitanja i opcije <b>prije nego po&#269;ne&#353; &#269;itati tekst</b>. Podvuci klju&#269;ne rije&#269;i u pitanjima. Sada&#353; zna&#353; &#353;to tra&#382;i&#353; &mdash; &#269;itanje postaje ciljano.</div>
      <div class="sc-tip">&#x2192; Na ispitu: 2 minute samo za &#269;itanje pitanja. Vrijedi.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--sky-dim);color:var(--sky)">2</div>
        <div class="sc-title">Skim za op&#263;u sliku (60 sekundi)</div>
      </div>
      <div class="sc-body">Pro&#269;itaj: naslov, podnaslov, prvi red svakog odlomka, zadnji odlomak u cijelosti. Cilj: zna&#353; strukturu i temu teksta. Ne &#269;ita&#353; sve &mdash; samo &bdquo;skaci&#353;&rdquo;.</div>
      <div class="sc-tip">&#x2192; Nakon skimminga mo&#382;e&#353; odgovoriti na pitanja o glavnoj ideji i tonu.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--violet-dim);color:var(--violet)">3</div>
        <div class="sc-title">Scan za konkretne informacije</div>
      </div>
      <div class="sc-body">Za svako pitanje: uzmi klju&#269;nu rije&#269; &rarr; scan tekst (o&#269;i skacu, ne &#269;ita&#353; sve) &rarr; na&#273;i tu rije&#269; ili njezin sinonim &rarr; pro&#269;itaj cijelu re&#269;enicu oko nje.</div>
      <div class="sc-tip">→ Scan za signale: vlastita imena, <b>brojevi</b>, datumi, kurziv, masno tisak.<br>&#x1F4A1; Npr. pitanje pita "U kojoj godini...?" → traži broj. Pitanje pita "Tko je...?" → traži vlastito ime.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--amber-dim);color:var(--amber)">4</div>
        <div class="sc-title">Prepoznaj parafraziranje</div>
      </div>
      <div class="sc-body">To&#269;an odgovor je <b>uvijek parafraziran</b> &mdash; iste ideje, razli&#269;ite rije&#269;i. Distraktor &#269;esto koristi <b>to&#269;no iste rije&#269;i</b> iz teksta ali mijenja smisao. Ako opcija izgleda "previ&#353;e lako" jer kopira tekst &rarr; vjerojatno je zamka.</div>
      <div class="sc-tip">&#x2192; Vje&#382;ba: zamijeni svaku rije&#269;enicu sinonimom &mdash; to je parafraziranje.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--red-dim);color:var(--red)">5</div>
        <div class="sc-title">Eliminacija distractora</div>
      </div>
      <div class="sc-body">Ukloni opcije koje: (a) koriste rije&#269;i iz teksta s krivim zna&#269;enjem, (b) pretjeruju (&bdquo;all&rdquo;, &bdquo;never&rdquo;, &bdquo;always&rdquo; &mdash; rijetko to&#269;no), (c) govore o ne&#269;emu &#353;to tekst ne spominje. Preostala opcija je to&#269;an odgovor.</div>
      <div class="sc-tip">&#x2192; Ako su ti ostale 2 opcije &mdash; vrati se u tekst i na&#273;i dokaz.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--violet-dim);color:var(--violet)">6</div>
        <div class="sc-title">True/False &mdash; uvijek dokaz</div>
      </div>
      <div class="sc-body">Za svaki T/F na&#273;i <b>konkretnu re&#269;enicu</b> u tekstu. True = tekst eksplicitno potvr&#273;uje izjavu. False = tekst eksplicitno pori&#269;e ili ka&#382;e ne&#353;to druk&#269;ije. Ako informacije nema u tekstu &rarr; <b>Not Given</b> (ako ta kategorija postoji).</div>
      <div class="sc-tip">&#x2192; Ne koristi op&#263;e znanje &mdash; samo ono &#353;to tekst ka&#382;e!</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--lime-dim);color:var(--lime)">7</div>
        <div class="sc-title">Zna&#269;enje rije&#269;i iz konteksta</div>
      </div>
      <div class="sc-body">Za nepoznatu rije&#269;: (1) koji dio govora? (2) pozitivna ili negativna? (3) pro&#269;itaj 2 re&#269;enice oko nje (4) tko vrsi radnju / na &#353;to se odnosi? &rarr; Eliminiraj opcije koje ne odgovaraju kontekstu.</div>
      <div class="sc-tip">&#x2192; Primjer: &bdquo;despite the incentives&rdquo; &rarr; pozitivna rije&#269;, imenica, ne&#353;to &#353;to poti&#269;e &rarr; poticaj.</div>
    </div>

    <!-- SIGNAL WORDS -->
    <hr class="divider">
    <div class="sec-label">// signal words &mdash; kako tekst signalizira informacije</div>
    <p class="prose">Ove rije&#269;i ti govore &#353;to dolazi &mdash; bitno za brzu navigaciju teksta.</p>

    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Signal</th><th>Zna&#269;enje</th><th>Primjer u tekstu</th></tr></thead>
        <tbody>
          <tr><td><b>however / but / yet / although</b></td><td>Kontrast, suprotno</td><td><em>The picture is not entirely negative. <b>However</b>, many return...</em></td></tr>
          <tr><td><b>furthermore / in addition / also</b></td><td>Dodatna informacija</td><td><em><b>Furthermore</b>, pull factors make emigration attractive.</em></td></tr>
          <tr><td><b>therefore / thus / as a result</b></td><td>Uzrok &rarr; posljedica</td><td><em>Jobs are scarce. <b>Therefore</b>, many consider leaving.</em></td></tr>
          <tr><td><b>for example / such as / for instance</b></td><td>Primjer</td><td><em>Push factors, <b>such as</b> low wages...</em></td></tr>
          <tr><td><b>in contrast / on the other hand</b></td><td>Usporedba suprotnih</td><td><em><b>In contrast</b>, Western Europe offers higher salaries.</em></td></tr>
          <tr><td><b>in conclusion / to sum up / overall</b></td><td>Zaklju&#269;ak</td><td><em><b>In conclusion</b>, creating opportunities is key.</em></td></tr>
          <tr><td><b>according to / research shows</b></td><td>Izvor informacije</td><td><em><b>According to</b> surveys, 40% consider emigrating.</em></td></tr>
        </tbody>
      </table>
    </div>

    <!-- QUESTION TYPES IN DETAIL -->
    <hr class="divider">
    <div class="sec-label">// tipovi pitanja &mdash; &#353;to tra&#382;e i kako ih prepoznati</div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">MCQ</div>
        <div><div class="gram-title">Vi&#353;estruki izbor</div><div class="gram-sub">According to the text &middot; The author implies &middot; What does X mean?</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <span class="lbl">Signalne fraze</span><br>
          "According to the text" &rarr; direktna informacija u tekstu<br>
          "The author implies/suggests" &rarr; zaklju&#269;ak, nije eksplicitno re&#269;eno<br>
          "What does X mean in paragraph Y?" &rarr; zna&#269;enje rije&#269;i iz konteksta<br>
          "Which best describes / summarises?" &rarr; op&#263;a ideja odlomka ili cijelog teksta
        </div>
        <div class="callout callout-warn" style="margin-top:12px">
          <span class="callout-icon">&#x26A0;</span>
          <div class="callout-body">
            <div class="callout-title">Najtipičnija zamka MCQ</div>
            <div class="callout-text">Opcija koja koristi to&#269;no iste rije&#269;i kao tekst ali im mijenja kontekst ili dodaje info koje tekst ne potvr&#273;uje. Uvijek provjeri: <b>Je li ovo to&#269;no prema tekstu, ili samo zvu&#269;i logično?</b></div>
          </div>
        </div>
      </div>
    </div>

    <div class="gram" style="margin-top:16px">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">T/F</div>
        <div><div class="gram-title">True / False</div><div class="gram-sub">Izjava je to&#269;na ili neto&#269;na prema tekstu</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <span class="lbl">Kako rije&#353;iti T/F</span><br>
          1. Na&#273;i klju&#269;nu rije&#269; iz izjave u tekstu<br>
          2. Pro&#269;itaj <b>cijeli odlomak</b> oko te to&#269;ke<br>
          3. Usporedi: isto zna&#269;enje &rarr; <b style="color:var(--lime)">TRUE</b> &middot; razli&#269;ito zna&#269;enje &rarr; <b style="color:var(--red)">FALSE</b><br>
          4. Nema informacije u tekstu &rarr; <b style="color:var(--amber)">NOT GIVEN</b> (ako ta kategorija postoji)
        </div>
        <div class="callout callout-info" style="margin-top:12px">
          <span class="callout-icon">&#x1F4A1;</span>
          <div class="callout-body">
            <div class="callout-title">Zamka u True/False</div>
            <div class="callout-text">Izjava koja je <b>op&#263;enito istinita</b> ali tekst ne potvr&#273;uje &rarr; NOT GIVEN (ili FALSE ako te dvije kategorije nema). Ne koristi op&#263;e znanje &mdash; samo tekst!</div>
          </div>
        </div>
      </div>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; &#269;itanje na ispitu</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>Isto&#269;no iste rije&#269;i kao u tekstu &rarr; zamka</b><br>Distraktor &#269;esto kopira fraze iz teksta ali mijenja zna&#269;enje. Uvijek provjeri kontekst!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Pretjerivanje (all, never, always, completely)</b><br>Tekst rje&#263;ko tvrdi apsolutno. "Many return" &ne; "All return". Eliminiraj apsolutne tvrdnje.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>Informacije koje tekst ne spominje</b><br>Distraktor mo&#382;e biti "logicki" to&#269;an ali nije u tekstu. Odgovor mora biti u tekstu!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>True/False &mdash; op&#263;e znanje vs tekst</b><br>Mo&#382;da ZNA&#353; da je ne&#353;to to&#269;no &mdash; ali ako tekst to ne ka&#382;e, odgovor je NOT GIVEN ili FALSE.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>Kriva interpretacija konteksta rije&#269;i</b><br>"perspective" mo&#382;e biti "gledi&#353;te" ili "perspektiva/prilike" &mdash; kontekst odlu&#269;uje!</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>&#268;itanje:</b> MCQ &middot; True/False/Not Given &middot; Gap fill iz teksta &middot; Meaning of words<br><b>Najvaznije:</b> odgovor je UVIJEK u tekstu &mdash; nikad op&#263;e znanje!</div></div>
      </div>
    </div>

    <!-- STRATEGY DRILL -->
    <hr class="divider">
    <div class="sec-label">// strategy drill &mdash; odaberi to&#269;nu strategiju</div>
    <p class="prose" style="margin-bottom:14px">5 pitanja o strategijama &#269;itanja. Provjeri razumi&#353; li pristup ispitu.</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">Koji je prvi korak pri rje&#353;avanju zadatka &#269;itanja s razumijevanjem?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'s1',false,'Pro&#269;itaj pitanja PRVO')">Pro&#269;itaj tekst odmah</div><div class="sv-opt" onclick="sdAns(this,'s1',true,'Pro&#269;itaj pitanja PRVO')">Pro&#269;itaj pitanja PRVO</div><div class="sv-opt" onclick="sdAns(this,'s1',false,'Pro&#269;itaj pitanja PRVO')">Prevedite nepoznate rije&#269;i</div></div><div class="sv-fb" id="s1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Opcija MCQ koristi to&#269;no iste rije&#269;i kao tekst. To zna&#269;i da je ta opcija...</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'s2',false,'...vjerojatno ZAMKA')">...sigurno to&#269;na</div><div class="sv-opt" onclick="sdAns(this,'s2',true,'...vjerojatno ZAMKA')">...vjerojatno zamka</div><div class="sv-opt" onclick="sdAns(this,'s2',false,'...vjerojatno ZAMKA')">...sigurno neto&#269;na</div></div><div class="sv-fb" id="s2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">True/False: izjava je &bdquo;op&#263;enito istinita&rdquo; ali tekst je ne spominje. Odgovor je...</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'s3',false,'NOT GIVEN (ili FALSE)')">TRUE</div><div class="sv-opt" onclick="sdAns(this,'s3',true,'NOT GIVEN (ili FALSE)')">NOT GIVEN</div><div class="sv-opt" onclick="sdAns(this,'s3',false,'NOT GIVEN (ili FALSE)')">FALSE</div></div><div class="sv-fb" id="s3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Opcija MCQ sadr&#382;i rije&#269; &bdquo;always&rdquo; ali tekst ka&#382;e &bdquo;often&rdquo;. Ova opcija je...</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'s4',true,'...zamka (pretjerivanje)')">...zamka (pretjerivanje)</div><div class="sv-opt" onclick="sdAns(this,'s4',false,'...zamka (pretjerivanje)')">...to&#269;na (sinonim)</div><div class="sv-opt" onclick="sdAns(this,'s4',false,'...zamka (pretjerivanje)')">...prihvatljiva parafaza</div></div><div class="sv-fb" id="s4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Kako otkriti zna&#269;enje nepoznate rije&#269;i u tekstu?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'s5',false,'Kontekst: re&#269;enice oko rije&#269;i')">Prijevod rije&#269;i</div><div class="sv-opt" onclick="sdAns(this,'s5',false,'Kontekst: re&#269;enice oko rije&#269;i')">Poga&#273;anje</div><div class="sv-opt" onclick="sdAns(this,'s5',true,'Kontekst: re&#269;enice oko rije&#269;i')">Kontekst oko rije&#269;i</div></div><div class="sv-fb" id="s5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">&larr; Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Practice text &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 2 — PRACTICE ══ -->
  <div class="layer" id="l2">

    <div class="quiz-intro"><strong>// reading practice</strong> &middot; Pro&#269;itaj tekst, zatim odgovori na 8 pitanja. Cilj: <strong>6/8</strong> ili bolje.</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju MCQ opciju &middot; <span class="kbd">T</span> = True &middot; <span class="kbd">F</span> = False</div>

    <div class="callout callout-tip" style="margin-bottom:18px">
      <span class="callout-icon">&#x1F4A1;</span>
      <div class="callout-body">
        <div class="callout-title">Strategija prije &#269;itanja</div>
        <div class="callout-text">Pro&#269;itaj pitanja ispod PRIJE nego &#269;ita&#353; tekst. Zatim &#269;itaj tekst s ciljem da na&#273;e&#353; odgovore. Istaknute rije&#269;i u tekstu pomazu orijentaciji.</div>
      </div>
    </div>

<div class="reading-text">
  <div class="reading-title">Youth Emigration: Challenge or Opportunity?</div>
  <div class="reading-meta">
    <span>&#x1F4DD; ~320 words</span>
    <span>&#x1F4DA; intermediate</span>
    <span>&#x23F1; 4 min read</span>
  </div>
  <p>Over the past decade, Croatia has experienced significant youth emigration. According to recent surveys, <span class="hl">over 40% of Croatian youth are considering emigrating</span> in search of better opportunities abroad. This trend, often referred to as <span class="hl-sky">"brain drain"</span>, raises serious concerns about the country's long-term development.</p>
  <p>Experts point to several <span class="hl-violet">push factors</span> driving young people away, <span class="hl-violet">such as low wages, limited career prospects, and a lack of professional perspective</span> in their home country. Meanwhile, <span class="hl-amber">pull factors</span> — higher salaries, better infrastructure, and stronger social welfare systems in Western Europe — make emigration an attractive option.</p>
  <p>However, the picture is not entirely negative. <span class="hl">Many return after gaining experience abroad</span>, bringing new skills and perspectives that benefit the local economy. Some economists argue that this temporary emigration can actually strengthen ties between Croatia and the broader European community.</p>
  <p>Brain drain is not a uniquely Croatian problem. <span class="hl-sky">It is a concern for all Western Balkan countries</span>, where similar patterns of youth emigration have been observed. Governments across the region are struggling to find effective solutions.</p>
  <p>In response, <span class="hl-amber">the government has introduced incentives to attract young professionals back</span>, including tax breaks and grants for those who return and start businesses. Critics argue that these measures do not go far enough and that <span class="hl">creating better opportunities at home is key</span> to reversing the trend.</p>
</div>

    <hr class="divider">
    <div class="sec-label">// comprehension questions</div>

    <div class="reading-q-block" id="r1">
      <div class="q-type-badge qtb-mcq">MCQ &middot; Informacija u tekstu</div>
      <div class="rq-text">1. According to the text, what percentage of Croatian youth are <em>considering</em> emigration?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="rqAns(this,'r1',false)" tabindex="0"><span class="rq-letter">A</span> Over 40% have already left Croatia.</div>
        <div class="rq-opt" onclick="rqAns(this,'r1',true)" tabindex="0"><span class="rq-letter">B</span> Over 40% are thinking about emigrating.</div>
        <div class="rq-opt" onclick="rqAns(this,'r1',false)" tabindex="0"><span class="rq-letter">C</span> Fewer than 40% are interested in leaving.</div>
        <div class="rq-opt" onclick="rqAns(this,'r1',false)" tabindex="0"><span class="rq-letter">D</span> Exactly 40% have emigrated in the past decade.</div>
      </div>
      <div class="rq-expl" id="r1e"></div>
    </div>

    <div class="reading-q-block" id="r2">
      <div class="q-type-badge qtb-mcq">MCQ &middot; Zna&#269;enje pojma</div>
      <div class="rq-text">2. According to the text, which of the following are examples of "push factors"?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="rqAns(this,'r2',false)" tabindex="0"><span class="rq-letter">A</span> Higher salaries and better infrastructure abroad.</div>
        <div class="rq-opt" onclick="rqAns(this,'r2',false)" tabindex="0"><span class="rq-letter">B</span> Strong social welfare systems in Western Europe.</div>
        <div class="rq-opt" onclick="rqAns(this,'r2',true)" tabindex="0"><span class="rq-letter">C</span> Low wages and limited career prospects at home.</div>
        <div class="rq-opt" onclick="rqAns(this,'r2',false)" tabindex="0"><span class="rq-letter">D</span> Tax breaks and government grants for returnees.</div>
      </div>
      <div class="rq-expl" id="r2e"></div>
    </div>

    <div class="reading-q-block" id="r3">
      <div class="q-type-badge qtb-mcq">MCQ &middot; Detalj iz odlomka</div>
      <div class="rq-text">3. What does the text say about young Croatians who move abroad?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="rqAns(this,'r3',true)" tabindex="0"><span class="rq-letter">A</span> Many come back after acquiring skills and experience.</div>
        <div class="rq-opt" onclick="rqAns(this,'r3',false)" tabindex="0"><span class="rq-letter">B</span> Most of them never return to Croatia.</div>
        <div class="rq-opt" onclick="rqAns(this,'r3',false)" tabindex="0"><span class="rq-letter">C</span> They usually return immediately after finishing their studies.</div>
        <div class="rq-opt" onclick="rqAns(this,'r3',false)" tabindex="0"><span class="rq-letter">D</span> All of them settle permanently in Western Europe.</div>
      </div>
      <div class="rq-expl" id="r3e"></div>
    </div>

    <div class="reading-q-block" id="r4">
      <div class="q-type-badge qtb-mcq">MCQ &middot; Zna&#269;enje rije&#269;i iz konteksta</div>
      <div class="rq-text">4. What does the term "brain drain" mean in this text?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="rqAns(this,'r4',false)" tabindex="0"><span class="rq-letter">A</span> A medical condition caused by studying too hard.</div>
        <div class="rq-opt" onclick="rqAns(this,'r4',true)" tabindex="0"><span class="rq-letter">B</span> The departure of educated and skilled people from a country.</div>
        <div class="rq-opt" onclick="rqAns(this,'r4',false)" tabindex="0"><span class="rq-letter">C</span> A government programme to attract foreign workers.</div>
        <div class="rq-opt" onclick="rqAns(this,'r4',false)" tabindex="0"><span class="rq-letter">D</span> The process of losing national culture through emigration.</div>
      </div>
      <div class="rq-expl" id="r4e"></div>
    </div>

    <div class="reading-q-block" id="r5">
      <div class="q-type-badge qtb-tf">True / False</div>
      <div class="rq-text">5. The government has taken steps to encourage young professionals to return to Croatia.</div>
      <div class="tf-opts">
        <div class="tf-btn" onclick="rqAns(this,'r5',true)">TRUE</div>
        <div class="tf-btn" onclick="rqAns(this,'r5',false)">FALSE</div>
      </div>
      <div class="rq-expl" id="r5e"></div>
    </div>

    <div class="reading-q-block" id="r6">
      <div class="q-type-badge qtb-tf">True / False</div>
      <div class="rq-text">6. Brain drain is a problem that affects only Croatia.</div>
      <div class="tf-opts">
        <div class="tf-btn" onclick="rqAns(this,'r6',false)">TRUE</div>
        <div class="tf-btn" onclick="rqAns(this,'r6',true)">FALSE</div>
      </div>
      <div class="rq-expl" id="r6e"></div>
    </div>

    <div class="reading-q-block" id="r7">
      <div class="q-type-badge qtb-mcq">MCQ &middot; Zaklju&#269;ak / glavna ideja</div>
      <div class="rq-text">7. What does the last paragraph suggest is the most important solution to brain drain?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="rqAns(this,'r7',false)" tabindex="0"><span class="rq-letter">A</span> Preventing young people from emigrating through laws.</div>
        <div class="rq-opt" onclick="rqAns(this,'r7',false)" tabindex="0"><span class="rq-letter">B</span> Encouraging more immigration to replace those who leave.</div>
        <div class="rq-opt" onclick="rqAns(this,'r7',false)" tabindex="0"><span class="rq-letter">C</span> Increasing tax breaks for those who return from abroad.</div>
        <div class="rq-opt" onclick="rqAns(this,'r7',true)" tabindex="0"><span class="rq-letter">D</span> Improving conditions and opportunities within the country.</div>
      </div>
      <div class="rq-expl" id="r7e"></div>
    </div>

    <div class="reading-q-block" id="r8">
      <div class="q-type-badge qtb-mcq">MCQ &middot; Zna&#269;enje rije&#269;i iz konteksta</div>
      <div class="rq-text">8. What does the word "perspective" most likely mean in the phrase "lack of professional perspective" (paragraph 2)?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="rqAns(this,'r8',false)" tabindex="0"><span class="rq-letter">A</span> A way of thinking or a point of view.</div>
        <div class="rq-opt" onclick="rqAns(this,'r8',false)" tabindex="0"><span class="rq-letter">B</span> A drawing technique used in art.</div>
        <div class="rq-opt" onclick="rqAns(this,'r8',true)" tabindex="0"><span class="rq-letter">C</span> Future opportunities and chances for advancement.</div>
        <div class="rq-opt" onclick="rqAns(this,'r8',false)" tabindex="0"><span class="rq-letter">D</span> An opinion about a political situation.</div>
      </div>
      <div class="rq-expl" id="r8e"></div>
    </div>

    <div class="score-box" id="rq-score" aria-live="polite">
      <div class="score-num" id="rq-num">0/8</div>
      <div class="score-lbl" id="rq-lbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryRQ()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">&#x1F3C6;</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje zavr&#353;eno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">09 &middot; &#268;itanje s razumijevanjem<br>Nastavi na Poglavlje 10 &rarr;</div>
      </div>
    </div>

    <!-- DRUGI TEKST + GAP FILL -->
    <hr class="divider">
    <div class="sec-label">// task B &mdash; gap fill iz teksta</div>
    <p class="prose" style="margin-bottom:8px">Pro&#269;itaj kra&#269;i tekst, zatim popuni praznine to&#269;nom rije&#269;ju ili frazom direktno iz teksta. Pi&#353;i to&#269;no onako kako je napisano.</p>

    <div class="callout callout-tip" style="margin-bottom:14px">
      <span class="callout-icon">&#x1F4A1;</span>
      <div class="callout-body">
        <div class="callout-title">Strategija za gap fill</div>
        <div class="callout-text">1. Pro&#269;itaj cijeli tekst PRVO &mdash; razumij kontekst. 2. Pro&#269;itaj re&#269;enicu s prazninom i re&#269;enice oko nje. 3. Odgovor je uvijek <b>direktno iz teksta</b> &mdash; tra&#382;i to&#269;nu rije&#269;. 4. Provjeri gramati&#269;ki oblik (mn./jed., glagolski oblik).</div>
      </div>
    </div>

    <div class="reading-text">
      <div class="reading-title">Social Media and Mental Health</div>
      <div class="reading-meta">
        <span>&#x1F4DD; ~180 words</span>
        <span>&#x1F4DA; intermediate</span>
        <span>&#x23F1; 2 min read</span>
      </div>
      <p>In recent years, <span class="hl">social media has become an important part of everyday life</span> for millions of people, especially young adults. Platforms such as Instagram, TikTok, and YouTube attract billions of users worldwide. <span class="hl-sky">However</span>, experts are increasingly concerned about the <span class="hl-violet">impact</span> of heavy social media use on <span class="hl-amber">mental health</span>.</p>
      <p>Studies suggest that people who spend more than three hours a day on social media are more likely to experience <span class="hl">feelings of loneliness and anxiety</span>. One reason for this is the tendency to compare oneself to the <span class="hl-violet">idealized</span> images that others post online. <span class="hl-sky">As a result</span>, many users feel that their own lives are less interesting or successful.</p>
      <p><span class="hl-sky">On the other hand</span>, social media can also have <span class="hl-amber">positive effects</span>. It allows people to stay in touch with friends and family, and can provide a sense of <span class="hl">community and support</span> for those who feel isolated. <span class="hl-sky">Furthermore</span>, some platforms are now introducing features designed to <span class="hl-violet">promote wellbeing</span>, such as screen time reminders and positive content filters.</p>
    </div>

    <hr class="divider">
    <div class="sec-label">// gap fill pitanja &mdash; upi&#353;i rije&#269; iz teksta</div>
    <p class="prose" style="margin-bottom:10px">Popuni svaku prazninu jednom ili dvjema rije&#269;ima direktno iz teksta iznad. Provjeri pravopis.</p>

    <div class="quiz-intro" style="margin-bottom:14px">&#x2328;&#xFE0F; Pi&#353;i odgovor &rarr; pritisni Enter ili klikni Provjeri</div>

    <div class="fitb-wrap">
      <div class="fitb-item" id="gf1">
        <div class="fitb-sent">1. Social media has become an important part of _______ for millions of people worldwide.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <input class="fitb" id="gfi1" placeholder="everyday life" type="text"
            onkeydown="if(event.key==='Enter')checkGF('gf1','gfi1','everyday life')"
            autocomplete="off" autocorrect="off" spellcheck="false">
          <button class="fitb-btn" onclick="checkGF('gf1','gfi1','everyday life')">Provjeri</button>
        </div>
        <div class="fitb-fb" id="gf1fb"></div>
      </div>

      <div class="fitb-item" id="gf2">
        <div class="fitb-sent">2. Experts are worried about the _______ of heavy social media use on mental health.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <input class="fitb" id="gfi2" placeholder="impact" type="text"
            onkeydown="if(event.key==='Enter')checkGF('gf2','gfi2','impact')"
            autocomplete="off" autocorrect="off" spellcheck="false">
          <button class="fitb-btn" onclick="checkGF('gf2','gfi2','impact')">Provjeri</button>
        </div>
        <div class="fitb-fb" id="gf2fb"></div>
      </div>

      <div class="fitb-item" id="gf3">
        <div class="fitb-sent">3. People who use social media heavily may experience feelings of loneliness and _______.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <input class="fitb" id="gfi3" placeholder="anxiety" type="text"
            onkeydown="if(event.key==='Enter')checkGF('gf3','gfi3','anxiety')"
            autocomplete="off" autocorrect="off" spellcheck="false">
          <button class="fitb-btn" onclick="checkGF('gf3','gfi3','anxiety')">Provjeri</button>
        </div>
        <div class="fitb-fb" id="gf3fb"></div>
      </div>

      <div class="fitb-item" id="gf4">
        <div class="fitb-sent">4. Many users compare themselves to _______ images that others post online.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <input class="fitb" id="gfi4" placeholder="idealized" type="text"
            onkeydown="if(event.key==='Enter')checkGF('gf4','gfi4','idealized')"
            autocomplete="off" autocorrect="off" spellcheck="false">
          <button class="fitb-btn" onclick="checkGF('gf4','gfi4','idealized')">Provjeri</button>
        </div>
        <div class="fitb-fb" id="gf4fb"></div>
      </div>

      <div class="fitb-item" id="gf5">
        <div class="fitb-sent">5. Social media can also provide a sense of community and _______ for isolated people.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <input class="fitb" id="gfi5" placeholder="support" type="text"
            onkeydown="if(event.key==='Enter')checkGF('gf5','gfi5','support')"
            autocomplete="off" autocorrect="off" spellcheck="false">
          <button class="fitb-btn" onclick="checkGF('gf5','gfi5','support')">Provjeri</button>
        </div>
        <div class="fitb-fb" id="gf5fb"></div>
      </div>

      <div class="fitb-item" id="gf6">
        <div class="fitb-sent">6. Some platforms introduce features designed to _______, such as screen time reminders.</div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
          <input class="fitb" id="gfi6" placeholder="promote wellbeing" type="text"
            onkeydown="if(event.key==='Enter')checkGF('gf6','gfi6','promote wellbeing')"
            autocomplete="off" autocorrect="off" spellcheck="false">
          <button class="fitb-btn" onclick="checkGF('gf6','gfi6','promote wellbeing')">Provjeri</button>
        </div>
        <div class="fitb-fb" id="gf6fb"></div>
      </div>
    </div>

    <div class="score-box" id="gf-score" aria-live="polite" style="display:none">
      <div class="score-num" id="gf-score-num">0/6</div>
      <div class="score-lbl" id="gf-score-lbl"></div>
      <button class="sd-retry" style="margin-top:14px" onclick="resetGF()">&#x21BA; Ponovi gap fill</button>
    </div>

    
    <!-- TEKST 3: AI AND EDUCATION -->
    <hr class="divider" style="margin:36px 0 28px">
    <div class="sec-label">// reading practice &mdash; tekst 3 od 3</div>
    <div class="quiz-intro" style="margin-bottom:14px"><strong>// reading practice &middot; tekst 3</strong> &middot; Pro&#269;itaj tekst, zatim odgovori na 8 pitanja. Cilj: <strong>6/8</strong> ili bolje.</div>

    <div class="callout callout-tip" style="margin-bottom:18px">
      <span class="callout-icon">&#x1F4A1;</span>
      <div class="callout-body">
        <div class="callout-title">Strategija prije &#269;itanja</div>
        <div class="callout-text">Pro&#269;itaj pitanja ispod PRIJE nego &#269;ita&#353; tekst. Zatim &#269;itaj tekst s ciljem da na&#273;e&#353; odgovore. Istaknute rije&#269;i pomazu orijentaciji.</div>
      </div>
    </div>

    <div class="reading-text">
      <div class="reading-title">Artificial Intelligence in the Classroom: Opportunity or Threat?</div>
      <div class="reading-meta">
        <span>&#x1F4DD; ~270 words</span>
        <span>&#x1F4DA; intermediate</span>
        <span>&#x23F1; 3 min read</span>
      </div>
      <p>Artificial intelligence, commonly known as AI, is rapidly changing the way we live and work. Now, it is beginning to <span class="hl">transform education</span> in ways that were unimaginable just a decade ago. Schools and universities around the world are experimenting with AI tools that can personalise learning, provide instant feedback, and help teachers identify students who are struggling.</p>
      <p>One of the main <span class="hl-violet">advantages</span> of AI in education is that it can adapt to each student's individual needs. <span class="hl-violet">Unlike traditional teaching methods, which treat all students the same, AI systems can analyse a student's performance and adjust the difficulty of tasks accordingly.</span> This means that faster learners are not held back, while those who need more time receive additional support.</p>
      <p>However, not everyone is convinced that AI is entirely <span class="hl-amber">beneficial</span>. Critics argue that an over-reliance on technology could reduce the importance of human interaction in learning. Teachers bring qualities that AI cannot replicate, such as empathy, motivation, and the ability to inspire students. <span class="hl-amber">There is also concern about data privacy</span>, since AI systems collect large amounts of information about students.</p>
      <p>Despite these concerns, most education experts believe that AI and teachers can <span class="hl">work together effectively</span>. The key is to use AI as a tool to support teachers rather than to replace them. With careful planning and clear guidelines, artificial intelligence has the potential to make education more <span class="hl">efficient, inclusive, and engaging</span> for students of all abilities.</p>
    </div>

    <div class="sec-label" style="margin-top:24px">// comprehension questions &mdash; tekst 3</div>

    <div class="rq2-block">
      <div class="rq2-meta">01 / 8 &middot; MCQ &middot; Detalj iz teksta</div>
      <div class="rq-text">According to the text, what is one of the main advantages of AI in education?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="sqAns(this,'s1',false)" tabindex="0"><span class="rq-letter">A</span> It replaces teachers completely in the classroom.</div>
        <div class="rq-opt" onclick="sqAns(this,'s1',false)" tabindex="0"><span class="rq-letter">B</span> It makes learning the same for every student.</div>
        <div class="rq-opt" onclick="sqAns(this,'s1',true)" tabindex="0"><span class="rq-letter">C</span> It adjusts the difficulty of tasks to suit individual students.</div>
        <div class="rq-opt" onclick="sqAns(this,'s1',false)" tabindex="0"><span class="rq-letter">D</span> It reduces the amount of time students spend studying.</div>
      </div>
      <div class="rq-expl" id="s1e" aria-live="polite"></div>
    </div>

    <div class="rq2-block">
      <div class="rq2-meta">02 / 8 &middot; MCQ &middot; Zna&#269;enje rije&#269;i iz konteksta</div>
      <div class="rq-text">What does the word <em>beneficial</em> mean in paragraph 3?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="sqAns(this,'s2',false)" tabindex="0"><span class="rq-letter">A</span> Dangerous and harmful to people.</div>
        <div class="rq-opt" onclick="sqAns(this,'s2',false)" tabindex="0"><span class="rq-letter">B</span> Expensive and difficult to afford.</div>
        <div class="rq-opt" onclick="sqAns(this,'s2',true)" tabindex="0"><span class="rq-letter">C</span> Positive and helpful in its effects.</div>
        <div class="rq-opt" onclick="sqAns(this,'s2',false)" tabindex="0"><span class="rq-letter">D</span> Modern and technologically advanced.</div>
      </div>
      <div class="rq-expl" id="s2e" aria-live="polite"></div>
    </div>

    <div class="rq2-block">
      <div class="rq2-meta">03 / 8 &middot; MCQ &middot; Stavovi iz teksta</div>
      <div class="rq-text">What do critics of AI in education argue?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="sqAns(this,'s3',false)" tabindex="0"><span class="rq-letter">A</span> AI should be used in all subjects without exception.</div>
        <div class="rq-opt" onclick="sqAns(this,'s3',true)" tabindex="0"><span class="rq-letter">B</span> Too much dependence on technology might make human interaction less important.</div>
        <div class="rq-opt" onclick="sqAns(this,'s3',false)" tabindex="0"><span class="rq-letter">C</span> Teachers should be replaced by AI systems as soon as possible.</div>
        <div class="rq-opt" onclick="sqAns(this,'s3',false)" tabindex="0"><span class="rq-letter">D</span> AI is too expensive for most schools to afford.</div>
      </div>
      <div class="rq-expl" id="s3e" aria-live="polite"></div>
    </div>

    <div class="rq2-block">
      <div class="rq2-meta">04 / 8 &middot; MCQ &middot; Glavna ideja / zaklju&#269;ak</div>
      <div class="rq-text">What is the main message of the last paragraph?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="sqAns(this,'s4',false)" tabindex="0"><span class="rq-letter">A</span> AI will eventually make teachers unnecessary in schools.</div>
        <div class="rq-opt" onclick="sqAns(this,'s4',false)" tabindex="0"><span class="rq-letter">B</span> The problems with AI in education cannot be solved.</div>
        <div class="rq-opt" onclick="sqAns(this,'s4',true)" tabindex="0"><span class="rq-letter">C</span> AI works best when it supports teachers rather than replaces them.</div>
        <div class="rq-opt" onclick="sqAns(this,'s4',false)" tabindex="0"><span class="rq-letter">D</span> Education experts disagree strongly about whether to use AI.</div>
      </div>
      <div class="rq-expl" id="s4e" aria-live="polite"></div>
    </div>

    <div class="rq2-block tf-block">
      <div class="rq2-meta">05 / 8 &middot; True / False</div>
      <div class="rq-text">AI systems in education can collect data about students.</div>
      <div class="tf-opts">
        <button class="tf-btn" onclick="sqAns(this,'s5',true)" tabindex="0">TRUE</button>
        <button class="tf-btn" onclick="sqAns(this,'s5',false)" tabindex="0">FALSE</button>
      </div>
      <div class="rq-expl" id="s5e" aria-live="polite"></div>
    </div>

    <div class="rq2-block tf-block">
      <div class="rq2-meta">06 / 8 &middot; True / False</div>
      <div class="rq-text">Traditional teaching methods treat each student differently according to their needs.</div>
      <div class="tf-opts">
        <button class="tf-btn" onclick="sqAns(this,'s6',false)" tabindex="0">TRUE</button>
        <button class="tf-btn" onclick="sqAns(this,'s6',true)" tabindex="0">FALSE</button>
      </div>
      <div class="rq-expl" id="s6e" aria-live="polite"></div>
    </div>

    <div class="rq2-block tf-block">
      <div class="rq2-meta">07 / 8 &middot; True / False</div>
      <div class="rq-text">All education experts are against the use of artificial intelligence in schools.</div>
      <div class="tf-opts">
        <button class="tf-btn" onclick="sqAns(this,'s7',false)" tabindex="0">TRUE</button>
        <button class="tf-btn" onclick="sqAns(this,'s7',true)" tabindex="0">FALSE</button>
      </div>
      <div class="rq-expl" id="s7e" aria-live="polite"></div>
    </div>

    <div class="rq2-block">
      <div class="rq2-meta">08 / 8 &middot; MCQ &middot; Parafraziranje</div>
      <div class="rq-text">Which option best paraphrases this sentence from the text: <em>"AI systems can analyse a student's performance and adjust the difficulty of tasks accordingly"</em>?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="sqAns(this,'s8',false)" tabindex="0"><span class="rq-letter">A</span> AI systems make all tasks more difficult for every student.</div>
        <div class="rq-opt" onclick="sqAns(this,'s8',false)" tabindex="0"><span class="rq-letter">B</span> AI systems give students the same tasks regardless of their level.</div>
        <div class="rq-opt" onclick="sqAns(this,'s8',true)" tabindex="0"><span class="rq-letter">C</span> AI systems look at how well a student is doing and change the level of difficulty to match.</div>
        <div class="rq-opt" onclick="sqAns(this,'s8',false)" tabindex="0"><span class="rq-letter">D</span> AI systems prevent students from choosing their own tasks.</div>
      </div>
      <div class="rq-expl" id="s8e" aria-live="polite"></div>
    </div>

    <div class="score-box" id="sq-score" aria-live="polite" style="display:none">
      <div class="score-num" id="sq-num">0/8</div>
      <div class="score-lbl" id="sq-lbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retrySQ()">&#x21BA; Ponovi tekst 3</button>
    </div>


    <hr class="divider" style="margin:36px 0 28px">
    <div class="sec-label">// reading practice &mdash; tekst 4 od 4</div>
    <div class="quiz-intro" style="margin-bottom:14px"><strong>// reading practice &middot; tekst 4</strong> &middot; Pro&#269;itaj tekst, zatim odgovori na 6 pitanja. Cilj: <strong>5/6</strong> ili bolje.</div>

    <div class="callout callout-tip" style="margin-bottom:18px">
      <span class="callout-icon">&#x1F4A1;</span>
      <div class="callout-body">
        <div class="callout-title">Strategija: pro&#269;itaj pitanja PRVO</div>
        <div class="callout-text">Pro&#269;itaj sva pitanja ispod PRIJE nego po&#269;ne&#353; &#269;itati tekst. Zatim &#269;itaj ciljano &mdash; tra&#382;i informacije koje odgovaraju pitanjima.</div>
      </div>
    </div>

    <div class="reading-text">
      <div class="reading-title">Healthy Habits: Small Changes, Big Results</div>
      <div class="reading-meta">
        <span>&#x1F4DD; ~260 words</span>
        <span>&#x1F4DA; intermediate</span>
        <span>&#x23F1; 3 min read</span>
      </div>
      <p>In today's fast-paced world, many people struggle to maintain a healthy lifestyle. However, research consistently shows that <span class="hl">small, everyday habits can have a significant impact</span> on long-term health and wellbeing. Experts argue that it is not necessary to make dramatic changes all at once; instead, gradual improvements are far more effective and sustainable.</p>
      <p>One of the most frequently recommended habits is <span class="hl-violet">regular physical activity</span>. According to the World Health Organisation, adults should aim for at least <span class="hl-violet">150 minutes of moderate exercise per week</span>. This does not have to mean going to the gym — activities such as walking, cycling, or swimming are equally beneficial. Studies have shown that people who exercise regularly report lower levels of stress and anxiety, as well as improved sleep quality.</p>
      <p>Diet also plays a crucial role in maintaining good health. <span class="hl-amber">Reducing the consumption of processed foods and increasing the intake of fruit and vegetables</span> can significantly lower the risk of developing chronic diseases such as diabetes and heart disease. Nutritionists recommend eating a variety of foods rather than following restrictive diets, which are often difficult to sustain.</p>
      <p>Perhaps most importantly, <span class="hl">mental health should not be overlooked</span>. Getting enough sleep, managing stress through relaxation techniques, and maintaining strong social connections are all essential components of a healthy lifestyle. As one researcher put it, true health is not simply the absence of illness &mdash; it is a state of complete physical, mental, and social wellbeing.</p>
    </div>

    <div class="sec-label" style="margin-top:24px">// comprehension questions &mdash; tekst 4</div>

    <div class="rq2-block">
      <div class="rq2-meta">01 / 6 &middot; MCQ &middot; Glavna ideja</div>
      <div class="rq-text">What is the main message of the first paragraph?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="tqAns(this,'t1',false)" tabindex="0"><span class="rq-letter">A</span> People need to make dramatic changes to live healthily.</div>
        <div class="rq-opt" onclick="tqAns(this,'t1',false)" tabindex="0"><span class="rq-letter">B</span> Healthy living is too difficult for most people today.</div>
        <div class="rq-opt" onclick="tqAns(this,'t1',true)" tabindex="0"><span class="rq-letter">C</span> Small daily habits can make a big difference to your health over time.</div>
        <div class="rq-opt" onclick="tqAns(this,'t1',false)" tabindex="0"><span class="rq-letter">D</span> Research has not found any link between habits and health.</div>
      </div>
      <div class="rq-expl" id="t1e" aria-live="polite"></div>
    </div>

    <div class="rq2-block">
      <div class="rq2-meta">02 / 6 &middot; MCQ &middot; Detalj iz teksta</div>
      <div class="rq-text">According to the text, how much exercise do adults need per week?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="tqAns(this,'t2',false)" tabindex="0"><span class="rq-letter">A</span> At least 100 minutes of intense exercise.</div>
        <div class="rq-opt" onclick="tqAns(this,'t2',true)" tabindex="0"><span class="rq-letter">B</span> At least 150 minutes of moderate exercise.</div>
        <div class="rq-opt" onclick="tqAns(this,'t2',false)" tabindex="0"><span class="rq-letter">C</span> At least 200 minutes of any physical activity.</div>
        <div class="rq-opt" onclick="tqAns(this,'t2',false)" tabindex="0"><span class="rq-letter">D</span> Exactly 30 minutes of exercise every day.</div>
      </div>
      <div class="rq-expl" id="t2e" aria-live="polite"></div>
    </div>

    <div class="rq2-block">
      <div class="rq2-meta">03 / 6 &middot; MCQ &middot; Zna&#269;enje rije&#269;i iz konteksta</div>
      <div class="rq-text">What does the word <em>sustainable</em> mean in paragraph 1?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="tqAns(this,'t3',false)" tabindex="0"><span class="rq-letter">A</span> Expensive and requiring a lot of effort.</div>
        <div class="rq-opt" onclick="tqAns(this,'t3',false)" tabindex="0"><span class="rq-letter">B</span> Immediately effective and fast-acting.</div>
        <div class="rq-opt" onclick="tqAns(this,'t3',true)" tabindex="0"><span class="rq-letter">C</span> Able to be continued over a long period of time.</div>
        <div class="rq-opt" onclick="tqAns(this,'t3',false)" tabindex="0"><span class="rq-letter">D</span> Related to environmental protection.</div>
      </div>
      <div class="rq-expl" id="t3e" aria-live="polite"></div>
    </div>

    <div class="rq2-block tf-block">
      <div class="rq2-meta">04 / 6 &middot; True / False</div>
      <div class="rq-text">According to the text, going to the gym is the only way to get enough exercise.</div>
      <div class="tf-opts">
        <button class="tf-btn" onclick="tqAns(this,'t4',false)" tabindex="0">TRUE</button>
        <button class="tf-btn" onclick="tqAns(this,'t4',true)" tabindex="0">FALSE</button>
      </div>
      <div class="rq-expl" id="t4e" aria-live="polite"></div>
    </div>

    <div class="rq2-block tf-block">
      <div class="rq2-meta">05 / 6 &middot; True / False</div>
      <div class="rq-text">The text says that nutritionists recommend following a strict, restrictive diet to stay healthy.</div>
      <div class="tf-opts">
        <button class="tf-btn" onclick="tqAns(this,'t5',false)" tabindex="0">TRUE</button>
        <button class="tf-btn" onclick="tqAns(this,'t5',true)" tabindex="0">FALSE</button>
      </div>
      <div class="rq-expl" id="t5e" aria-live="polite"></div>
    </div>

    <div class="rq2-block">
      <div class="rq2-meta">06 / 6 &middot; MCQ &middot; Parafraziranje</div>
      <div class="rq-text">Which sentence best paraphrases this quote from the text: <em>"true health is not simply the absence of illness — it is a state of complete physical, mental, and social wellbeing"</em>?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="tqAns(this,'t6',false)" tabindex="0"><span class="rq-letter">A</span> Being healthy only means not having any physical illness.</div>
        <div class="rq-opt" onclick="tqAns(this,'t6',false)" tabindex="0"><span class="rq-letter">B</span> Social connections are more important than physical health.</div>
        <div class="rq-opt" onclick="tqAns(this,'t6',true)" tabindex="0"><span class="rq-letter">C</span> Real health includes your body, your mind, and your relationships — not just the lack of disease.</div>
        <div class="rq-opt" onclick="tqAns(this,'t6',false)" tabindex="0"><span class="rq-letter">D</span> It is impossible to be completely healthy in today's world.</div>
      </div>
      <div class="rq-expl" id="t6e" aria-live="polite"></div>
    </div>

    <div class="score-box" id="tq-score" aria-live="polite" style="display:none">
      <div class="score-num" id="tq-num">0/6</div>
      <div class="score-lbl" id="tq-lbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryTQ()">&#x21BA; Ponovi tekst 4</button>
    </div>

<!-- CTA -->
    <div class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim zadacima mature</div><div class="cta-sub">Svi NCVVO zadaci 2010.&ndash;2026. uz detaljna obja&#353;njenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>

    <!-- KEY POINTS -->
    <div class="matura">
      <div class="matura-hd">&#x2B50; for the exam &mdash; key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>Pitanja PRVO</b> &mdash; pa tek onda &#269;itaj tekst. Zna&#353; &#353;to tra&#382;i&#353;.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Skim + Scan</b>: skim za strukturu, scan za konkretnu informaciju.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>To&#269;an odgovor je parafraziran</b> &mdash; iste ideje, razli&#269;ite rije&#269;i. Iste rije&#269;i kao tekst = zamka!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Eliminiraj distraktor</b>: all/never/always = rijetko to&#269;no &middot; info koje tekst ne spominje = neto&#269;no.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>T/F uvijek dokaz</b>: na&#273;i konkretnu re&#269;enicu &mdash; ne koristi op&#263;e znanje!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Zna&#269;enje rije&#269;i</b>: kontekst oko rije&#269;i odlu&#269;uje &mdash; ne prijevod, ne poga&#273;anje.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Signal words</b>: however (kontrast) &middot; therefore (uzrok-posljedica) &middot; such as (primjer).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Nikad prazno</b>: educated guess &gt; prazan odgovor. Eliminiraj 2, bira&#353; od 2.</span></li>
      </ul>
    </div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Za&#353;to to&#269;an MCQ odgovor nije kopija teksta?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans">Jer autori ispita namjerno <b>parafraziraju</b> (iskazuju iste ideje razli&#269;itim rije&#269;ima) da testiraju razumijevanje, a ne samo prepoznavanje. Opcija s to&#269;no istim rije&#269;ima &#269;esto je distraktor koji mijenja smisao. Uvijek trai: isti smisao, razli&#269;ite rije&#269;i.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Opcija MCQ sadr&#382;i &bdquo;all students&rdquo; a tekst ka&#382;e &bdquo;most students&rdquo;. &#352;to to zna&#269;i?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Zamka pretjerivanja</b> &mdash; opcija je neto&#269;na. Tekst ka&#382;e "most" (ve&#263;ina), a "all" (svi) je ja&#269;a tvrdnja. Kvantificatori su klju&#269;ni: most &ne; all &ne; some &ne; many. Uvijek provjeri ovaj detalj!</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako odgovoriti na pitanje o zna&#269;enju rije&#269;i?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans">1. Pro&#269;itaj <b>dvije re&#269;enice</b> oko te rije&#269;i<br>2. Odredi: je li to pozitivna ili negativna rije&#269;?<br>3. Koji dio govora (imenica, glagol, pridjev)?<br>4. Usporedi opcije &mdash; eliminiraj pogre&#353;an dio govora i krivi ton<br>5. Provjeri: uklopi opciju u re&#269;enicu &mdash; ima li smisla?</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch08: kako vokabular poma&#382;e pri &#269;itanju?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans">Kolokacije iz ch08 pojavljuju se u &#269;itala&#269;kim tekstovima: <em>make a living, brain drain, raise awareness, career prospects, push/pull factors</em>. Poznavanje kolokacija ubrzava razumijevanje i poma&#382;e pri prepoznavanju parafraziranih odgovora. Vokabular i &#269;itanje su neodvojivi!</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch10: kako &#269;itanje poma&#382;e pisanju?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans">&#268;itanje dobrih tekstova u&#269;i te: strukturu odlomka, signal words (however, therefore, in addition), akademski registar, kako parafrazirati. Signal words iz ch09 su strukturni elementi koje &#263;e&#353; koristiti u pisanom tekstu u ch10 &mdash; vje&#353;tine se nadopunjuju.</div></div>

    <!-- NEXT -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter10.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">10 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pisanje &mdash; kratki tekst</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Signal words iz ch09 u pisanju</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter08.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 08</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Vokabular &mdash; &#382;ivot</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">brain drain, push factors, prospects</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter11.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">11 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Listening strategije</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Iste strategije, audio format</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">12</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2)">Vi&#353;estruki izbor &mdash; taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">MCQ taktike iz ch09 pro&#353;irene</div>
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
      <a href="chapter08.html" class="nav-btn">&larr; Chapter 08</a>
      <a href="chapter10.html" class="nav-btn primary">Next chapter &rarr;</a>
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

// READING COMPREHENSION QUIZ
var rqAnswered={},rqCorrect=0,rqTotal=8;
var RQE={
  r1:{c:"✓ Točno. Odgovor je u prvom odlomku: 'over 40% of Croatian youth are considering emigrating'. Točna parafaza pitanja.",w:"✗ Netočno. Pažljivo čitaj — pita za 'considering emigrating', ne za 'already left'. Odgovor: B."},
  r2:{c:"✓ Točno. 'push factors' su razlozi odlaska: nizak prihod, nedostatak perspektive. Tekst eksplicitno navodi 'push factors such as low wages'.",w:"✗ Netočno. 'Push factors' = ono što tjera ljude da odu (negative strane matične zemlje). Odgovor: C."},
  r3:{c:"✓ Točno. Treći odlomak: 'Many return after gaining experience abroad' — vraćaju se s iskustvom.",w:"✗ Netočno. Tekst kaže da se mnogi vraćaju NAKON što steknu iskustvo, ne odmah. Odgovor: A."},
  r4:{c:"✓ Točno. Tekst opisuje 'brain drain' kao trend koji 'raises serious concerns' o razvoju — odlazak mladih kadrova iz zemlje. Kontekst jednoznačno ukazuje na B.",w:"✗ Netočno. 'Brain drain' = trend odlaska mladih, obrazovanih ljudi iz matične zemlje koji uzrokuje ozbiljne brige za razvoj. Odgovor: B."},
  r5:{c:"✓ Točno. 'TRUE' — tekst kaže: 'The government has introduced incentives to attract young professionals back'.",w:"✗ Netočno. Tekst eksplicitno navodi da vlada JEST uvela poticaje za povratak. Odgovor: TRUE."},
  r6:{c:"✓ Točno. 'FALSE' — tekst kaže da je brain drain 'a concern for ALL Western Balkan countries', ne samo Hrvatska.",w:"✗ Netočno. Tekst kaže: problem se tiče 'all Western Balkan countries' — nije samo hrvatska pojava. Odgovor: FALSE."},
  r7:{c:"✓ Točno. Zadnji odlomak: 'creating better opportunities at home is key' — ključno je stvoriti prilike.",w:"✗ Netočno. Zaključak teksta je o stvaranju prilike kod kuće, ne o zabrani odlaska. Odgovor: D."},
  r8:{c:"✓ Točno. 'perspective' u kontekstu: 'lack of professional perspective' = nedostatak napredovanih mogućnosti.",w:"✗ Netočno. 'Perspective' ovdje znači 'mogućnosti za napredak/budućnost', ne 'gledište'. Kontekst određuje značenje! Odgovor: C."}
};

function rqAns(el,qid,ok){
  if(rqAnswered[qid]!==undefined)return;
  rqAnswered[qid]=ok;if(ok)rqCorrect++;trackAnswer('ch09',ok);
  var opts=el.closest('.rq-opts')||el.closest('.tf-opts');
  if(opts)opts.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){
    var parent=el.closest('.rq-opts')||el.closest('.tf-opts');
    if(parent)parent.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){
      if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');
    });
  }
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML=RQE[qid][ok?'c':'w'];expl.className='rq-expl show '+(ok?'ok':'no');}
  if(Object.keys(rqAnswered).length===rqTotal){
    var box=document.getElementById('rq-score');
    document.getElementById('rq-num').textContent=rqCorrect+'/'+rqTotal;
    document.getElementById('rq-lbl').textContent=
      rqCorrect===rqTotal?'Savršeno! Čitanje s razumijevanjem ti ide odlično. 🎉':
      rqCorrect>=7?'Odlično! Još jedno pitanje do savršenog.':
      rqCorrect>=6?'Cilj postignut! 6/8 — strategije funkcioniraju.':
      rqCorrect>=5?'Blizu! Fokusiraj se na parafrazirane odgovore i T/F dokaz.':
      'Vrati se na strategije — čitaj pitanja PRIJE teksta.';
    box.classList.add('show');
    if(rqCorrect>=6){
      document.getElementById('completionBadge').style.display='block';
      tabDone[2]=true;saveProgress();
      document.querySelectorAll('.tab')[2].classList.add('done-tab');
    }
  }
}

function retryRQ(){
  rqAnswered={};rqCorrect=0;
  ['r1','r2','r3','r4','r5','r6','r7','r8'].forEach(function(id){
    var block=document.getElementById(id);
    if(!block)return;
    block.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.remove('correct','wrong','disabled')});
    var e=document.getElementById(id+'e');if(e){e.innerHTML='';e.className='rq-expl';}
  });
  document.getElementById('rq-score').classList.remove('show');
  document.getElementById('completionBadge').style.display='none';
  tabDone[2]=false;saveProgress();
  document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}

// STRATEGY DRILL
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
      document.getElementById('sv-score-lbl').textContent=sdCorrect===5?'Savršen! Strategije su ti jasne. 🎉':sdCorrect>=4?'Odlično!':sdCorrect>=3?'Dobro — ponovi strategije.':'Vrati se na Learn tab.';
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
document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2')return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){
    var blocks=['r1','r2','r3','r4','r7','r8'];
    for(var i=0;i<blocks.length;i++){
      var bid=blocks[i];
      if(document.getElementById(bid+'e')&&!document.getElementById(bid+'e').classList.contains('show')){
        var opts=document.querySelectorAll('#'+bid+' .rq-opt:not(.disabled)');
        if(opts[k-1])opts[k-1].click();
        break;
      }
    }
  }
  if(e.key==='t'||e.key==='T'){
    var tfs=['r5','r6'];
    for(var j=0;j<tfs.length;j++){
      var te=document.getElementById(tfs[j]+'e');
      if(te&&!te.classList.contains('show')){
        var tbtn=document.querySelectorAll('#'+tfs[j]+' .tf-btn:not(.disabled)');
        if(tbtn[0])tbtn[0].click();break;
      }
    }
  }
  if(e.key==='f'||e.key==='F'){
    var tfs2=['r5','r6'];
    for(var j2=0;j2<tfs2.length;j2++){
      var te2=document.getElementById(tfs2[j2]+'e');
      if(te2&&!te2.classList.contains('show')){
        var tbtn2=document.querySelectorAll('#'+tfs2[j2]+' .tf-btn:not(.disabled)');
        if(tbtn2[1])tbtn2[1].click();break;
      }
    }
  }
});

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}
function saveProgress(){try{localStorage.setItem('maturix_ch09_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch09_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}

// GAP FILL LOGIC
var gfAnswered={}, gfCorrect=0, gfTotal=6;
function checkGF(blockId, inputId, correct){
  if(gfAnswered[blockId])return;
  var val=document.getElementById(inputId).value.trim().toLowerCase();
  var ok=(val===correct.toLowerCase()||val===correct.toLowerCase().replace(' ',''));
  gfAnswered[blockId]=ok;
  if(ok)gfCorrect++;
  document.getElementById(inputId).disabled=true;
  var fb=document.getElementById(blockId+'fb');
  if(ok){
    fb.className='fitb-fb ok';
    fb.innerHTML='&#x2713; To&#269;no!';
    document.getElementById(inputId).style.borderColor='var(--green)';
  } else {
    fb.className='fitb-fb no';
    fb.innerHTML='&#x2717; To&#269;an odgovor: <b>'+correct+'</b>';
    document.getElementById(inputId).style.borderColor='var(--red)';
  }
  if(Object.keys(gfAnswered).length===gfTotal){
    var box=document.getElementById('gf-score');
    document.getElementById('gf-score-num').textContent=gfCorrect+'/'+gfTotal;
    document.getElementById('gf-score-lbl').textContent=
      gfCorrect===gfTotal?'Savr&#353;eno! Gap fill svladan. &#x1F389;':
      gfCorrect>=5?'Odli&#269;no!':
      gfCorrect>=4?'Dobro &mdash; ponovi strategiju gap filla.':
      'Vrati se na tekst i pro&#269;itaj pa&#382;ljivo.';
    box.style.display='block';
  }
}
function resetGF(){
  gfAnswered={};gfCorrect=0;
  ['gf1','gf2','gf3','gf4','gf5','gf6'].forEach(function(id){
    var inp=document.getElementById('gfi'+id.slice(-1));
    if(inp){inp.value='';inp.disabled=false;inp.style.borderColor='';}
    var fb=document.getElementById(id+'fb');
    if(fb){fb.className='fitb-fb';fb.innerHTML='';}
    delete gfAnswered[id];
  });
  gfCorrect=0;
  document.getElementById('gf-score').style.display='none';
}

loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();


// READING QUIZ — TEKST 3 (AI and Education)
var sqAnswered={},sqCorrect=0,sqTotal=8;
var SQE={
  s1:{c:"✓ Točno. Tekst kaže 'AI systems can analyse a student's performance and adjust the difficulty of tasks accordingly' — prilagodba prema individualnim potrebama.",w:"✗ Netočno. AI ne zamjenjuje nastavnike, ne tretira sve jednako i ne smanjuje vrijeme učenja. Odgovor je C — prilagođava težinu zadataka svakom učeniku."},
  s2:{c:"✓ Točno. 'Beneficial' znači pozitivan, koristan — kontekst pokazuje da kritičari sumnjaju u pozitivne učinke AI-ja.",w:"✗ Netočno. 'Beneficial' je pozitivna riječ — znači 'koristan, s pozitivnim učincima'. Pročitaj kontekst: 'not entirely beneficial' = nije u potpunosti korisno."},
  s3:{c:"✓ Točno. Tekst kaže 'Critics argue that an over-reliance on technology could reduce the importance of human interaction' — parafrazirana opcija B.",w:"✗ Netočno. Kritičari ne zahtijevaju potpunu zamjenu nastavnika niti tvrde da je AI preskup. Odgovor B točno parafrazira 'over-reliance on technology could reduce the importance of human interaction'."},
  s4:{c:"✓ Točno. Zadnji odlomak kaže 'use AI as a tool to support teachers rather than to replace them' — AI kao pomoć, ne zamjena.",w:"✗ Netočno. Zadnji odlomak je optimistični zaključak: AI i nastavnici mogu zajedno učinkovito raditi. Odgovor C točno parafrazira glavnu poruku."},
  s5:{c:"✓ Točno. Tekst eksplicitno kaže 'AI systems collect large amounts of information about students' — TRUE.",w:"✗ Netočno. Tekst jasno navodi 'AI systems collect large amounts of information about students'. Ova izjava je TRUE."},
  s6:{c:"✓ Točno. Tekst kaže 'Unlike traditional teaching methods, which treat all students the same' — dakle TRADICIONALNE metode tretiraju sve jednako, ne različito. FALSE.",w:"✗ Netočno. Pažljivo čitaj! Tekst kaže 'traditional teaching methods, which treat ALL STUDENTS THE SAME' — znači tretiraju sve jednako. Izjava je FALSE."},
  s7:{c:"✓ Točno. Tekst kaže 'most education experts believe that AI and teachers can work together' — dakle VEĆINA je za AI, ne svi su protiv. FALSE.",w:"✗ Netočno. Tekst kaže 'most education experts believe that AI and teachers can work together effectively' — dakle stručnjaci su uglavnom ZA AI. Izjava je FALSE."},
  s8:{c:"✓ Točno. 'Analyse performance and adjust difficulty accordingly' = 'look at how well doing and change the level to match' — isti smisao, različite riječi. Klasično parafraziranje.",w:"✗ Netočno. Odgovor C točno parafrazira: 'analyse performance' = 'look at how well a student is doing'; 'adjust difficulty' = 'change the level of difficulty'. Opcije A, B i D mijenjaju smisao."}
};

function sqAns(el,qid,ok){
  if(sqAnswered[qid]!==undefined)return;
  sqAnswered[qid]=ok;if(ok)sqCorrect++;trackAnswer('ch09',ok);
  var opts=el.closest('.rq-opts')||el.closest('.tf-opts');
  if(opts)opts.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){
    var parent=el.closest('.rq-opts')||el.closest('.tf-opts');
    if(parent)parent.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){
      if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');
    });
  }
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+SQE[qid][ok?'c':'w']+'</div>';expl.classList.add('show');}
  if(Object.keys(sqAnswered).length===sqTotal){
    document.getElementById('sq-num').textContent=sqCorrect+'/'+sqTotal;
    document.getElementById('sq-lbl').textContent=
      sqCorrect===sqTotal?'Savršeno! Sve strategije u akciji. 🎉':
      sqCorrect>=7?'Odlično! Čitanje s razumijevanjem svladano. 💪':
      sqCorrect>=5?'Dobro. Ponovi strategije parafraziranja i T/F dokaza.':
      'Vrati se na Learn tab — ponovi strategije čitanja.';
    var sq=document.getElementById('sq-score');if(sq){sq.style.display='block';}
  }
}

function retrySQ(){
  sqAnswered={};sqCorrect=0;
  ['s1','s2','s3','s4','s5','s6','s7','s8'].forEach(function(qid){
    document.querySelectorAll('[onclick*="sqAns(this,\\''+qid+'\\'"]').forEach(function(o){
      o.classList.remove('correct','wrong','disabled');
    });
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  var sq=document.getElementById('sq-score');if(sq){sq.style.display='none';}
}


// READING QUIZ — TEKST 4 (Healthy Habits)
var tqAnswered={},tqCorrect=0,tqTotal=6;
var TQE={
  t1:{c:"✓ Točno. Tekst kaže 'small, everyday habits can have a significant impact' i 'gradual improvements are far more effective' — parafrazira opcija C.",w:"✗ Netočno. Tekst NIJE rekao da treba dramatičnih promjena — upravo suprotno: 'it is not necessary to make dramatic changes'. Odgovor C točno parafrazira prvu rečenicu."},
  t2:{c:"✓ Točno. Tekst direktno navodi: 'adults should aim for at least 150 minutes of moderate exercise per week' — WHO preporuka.",w:"✗ Netočno. Točan broj je 150 minuta UMJERENE aktivnosti tjedno — prema WHO. Ne 100, ne 200, ne 30 dnevno. Odgovor B je direktna informacija iz teksta."},
  t3:{c:"✓ Točno. 'Sustainable' u kontekstu 'gradual improvements are more sustainable' znači 'može se nastaviti dugoročno'. Zamka D (okoliš) je uobičajeno značenje, ali ovdje je kontekst zdravlja.",w:"✗ Netočno. 'Sustainable' ovdje znači 'može se nastaviti dugo' — kontekst je zdravstvene navike koje se mogu odr&#382;ati. Veza s okolišem je uobičajeno, ali pogre&#353;no ovdje. Odgovor C."},
  t4:{c:"✓ Točno. Tekst kaže 'This does not have to mean going to the gym' i navodi hodanje, bicikliranje, plivanje kao alternative. FALSE.",w:"✗ Netočno. Tekst EKSPLICITNO kaže 'This does not have to mean going to the gym' — vežba može biti hodanje, bicikliranje ili plivanje. Ova izjava je FALSE."},
  t5:{c:"✓ Točno. Tekst kaže da nutricionisti preporučuju 'eating a variety of foods rather than following restrictive diets' — znači NISU za restriktivne dijete. FALSE.",w:"✗ Netočno. Tekst kaže SUPROTNO: nutricionisti preporučuju raznovrsnu prehranu 'rather than following restrictive diets'. Restriktivne dijete su opisane kao 'difficult to sustain'. Izjava je FALSE."},
  t6:{c:"✓ Točno. 'Absence of illness' = 'lack of disease' · 'physical, mental, and social wellbeing' = 'body, mind, relationships' — klasično parafraziranje s tri sinonima.",w:"✗ Netočno. Odgovor C točno parafrazira sve tri komponente: fizička (body), mentalna (mind) i socijalna (relationships) dobrobit. A je djelomično točno ali izostavlja mentalno i socijalno."}
};
function tqAns(el,qid,ok){
  if(tqAnswered[qid]!==undefined)return;
  tqAnswered[qid]=ok;if(ok)tqCorrect++;
  trackAnswer('ch09',ok);
  var opts=el.closest('.rq-opts')||el.closest('.tf-opts');
  if(opts)opts.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){var p=el.closest('.rq-opts')||el.closest('.tf-opts');if(p)p.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+TQE[qid][ok?'c':'w']+'</div>';expl.classList.add('show');}
  if(Object.keys(tqAnswered).length===tqTotal){
    document.getElementById('tq-num').textContent=tqCorrect+'/'+tqTotal;
    document.getElementById('tq-lbl').textContent=
      tqCorrect===tqTotal?'Savr\\u0161eno! \\U0001f389':
      tqCorrect>=5?'Odli\\u010dno! Jo\\u0161 malo na parafraziranju.':
      tqCorrect>=4?'Dobro. Ponovi strategije za T/F i zna\\u010denje rije\\u010di.':
      'Vrati se na Learn tab \\u2014 ponovi strategije \\u010ditanja.';
    var s=document.getElementById('tq-score');if(s){s.style.display='block';}
  }
}
function retryTQ(){
  tqAnswered={};tqCorrect=0;
  ['t1','t2','t3','t4','t5','t6'].forEach(function(qid){
    document.querySelectorAll('[onclick*="tqAns(this,\\''+qid+'\\'"]').forEach(function(o){o.classList.remove('correct','wrong','disabled');});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  var s=document.getElementById('tq-score');if(s){s.style.display='none';}
}

</script>`;

const CH09_JS = `function trackAnswer(chKey, ok){
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

// READING COMPREHENSION QUIZ
var rqAnswered={},rqCorrect=0,rqTotal=8;
var RQE={
  r1:{c:"✓ Točno. Odgovor je u prvom odlomku: 'over 40% of Croatian youth are considering emigrating'. Točna parafaza pitanja.",w:"✗ Netočno. Pažljivo čitaj — pita za 'considering emigrating', ne za 'already left'. Odgovor: B."},
  r2:{c:"✓ Točno. 'push factors' su razlozi odlaska: nizak prihod, nedostatak perspektive. Tekst eksplicitno navodi 'push factors such as low wages'.",w:"✗ Netočno. 'Push factors' = ono što tjera ljude da odu (negative strane matične zemlje). Odgovor: C."},
  r3:{c:"✓ Točno. Treći odlomak: 'Many return after gaining experience abroad' — vraćaju se s iskustvom.",w:"✗ Netočno. Tekst kaže da se mnogi vraćaju NAKON što steknu iskustvo, ne odmah. Odgovor: A."},
  r4:{c:"✓ Točno. Tekst opisuje 'brain drain' kao trend koji 'raises serious concerns' o razvoju — odlazak mladih kadrova iz zemlje. Kontekst jednoznačno ukazuje na B.",w:"✗ Netočno. 'Brain drain' = trend odlaska mladih, obrazovanih ljudi iz matične zemlje koji uzrokuje ozbiljne brige za razvoj. Odgovor: B."},
  r5:{c:"✓ Točno. 'TRUE' — tekst kaže: 'The government has introduced incentives to attract young professionals back'.",w:"✗ Netočno. Tekst eksplicitno navodi da vlada JEST uvela poticaje za povratak. Odgovor: TRUE."},
  r6:{c:"✓ Točno. 'FALSE' — tekst kaže da je brain drain 'a concern for ALL Western Balkan countries', ne samo Hrvatska.",w:"✗ Netočno. Tekst kaže: problem se tiče 'all Western Balkan countries' — nije samo hrvatska pojava. Odgovor: FALSE."},
  r7:{c:"✓ Točno. Zadnji odlomak: 'creating better opportunities at home is key' — ključno je stvoriti prilike.",w:"✗ Netočno. Zaključak teksta je o stvaranju prilike kod kuće, ne o zabrani odlaska. Odgovor: D."},
  r8:{c:"✓ Točno. 'perspective' u kontekstu: 'lack of professional perspective' = nedostatak napredovanih mogućnosti.",w:"✗ Netočno. 'Perspective' ovdje znači 'mogućnosti za napredak/budućnost', ne 'gledište'. Kontekst određuje značenje! Odgovor: C."}
};

function rqAns(el,qid,ok){
  if(rqAnswered[qid]!==undefined)return;
  rqAnswered[qid]=ok;if(ok)rqCorrect++;trackAnswer('ch09',ok);
  var opts=el.closest('.rq-opts')||el.closest('.tf-opts');
  if(opts)opts.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){
    var parent=el.closest('.rq-opts')||el.closest('.tf-opts');
    if(parent)parent.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){
      if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');
    });
  }
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML=RQE[qid][ok?'c':'w'];expl.className='rq-expl show '+(ok?'ok':'no');}
  if(Object.keys(rqAnswered).length===rqTotal){
    var box=document.getElementById('rq-score');
    document.getElementById('rq-num').textContent=rqCorrect+'/'+rqTotal;
    document.getElementById('rq-lbl').textContent=
      rqCorrect===rqTotal?'Savršeno! Čitanje s razumijevanjem ti ide odlično. 🎉':
      rqCorrect>=7?'Odlično! Još jedno pitanje do savršenog.':
      rqCorrect>=6?'Cilj postignut! 6/8 — strategije funkcioniraju.':
      rqCorrect>=5?'Blizu! Fokusiraj se na parafrazirane odgovore i T/F dokaz.':
      'Vrati se na strategije — čitaj pitanja PRIJE teksta.';
    box.classList.add('show');
    if(rqCorrect>=6){
      document.getElementById('completionBadge').style.display='block';
      tabDone[2]=true;saveProgress();
      document.querySelectorAll('.tab')[2].classList.add('done-tab');
    }
  }
}

function retryRQ(){
  rqAnswered={};rqCorrect=0;
  ['r1','r2','r3','r4','r5','r6','r7','r8'].forEach(function(id){
    var block=document.getElementById(id);
    if(!block)return;
    block.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.remove('correct','wrong','disabled')});
    var e=document.getElementById(id+'e');if(e){e.innerHTML='';e.className='rq-expl';}
  });
  document.getElementById('rq-score').classList.remove('show');
  document.getElementById('completionBadge').style.display='none';
  tabDone[2]=false;saveProgress();
  document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}

// STRATEGY DRILL
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
      document.getElementById('sv-score-lbl').textContent=sdCorrect===5?'Savršen! Strategije su ti jasne. 🎉':sdCorrect>=4?'Odlično!':sdCorrect>=3?'Dobro — ponovi strategije.':'Vrati se na Learn tab.';
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
document.addEventListener('keydown',function(e){
  var layer=document.querySelector('.layer.active');
  if(!layer||layer.id!=='l2')return;
  var k=parseInt(e.key);
  if(k>=1&&k<=4){
    var blocks=['r1','r2','r3','r4','r7','r8'];
    for(var i=0;i<blocks.length;i++){
      var bid=blocks[i];
      if(document.getElementById(bid+'e')&&!document.getElementById(bid+'e').classList.contains('show')){
        var opts=document.querySelectorAll('#'+bid+' .rq-opt:not(.disabled)');
        if(opts[k-1])opts[k-1].click();
        break;
      }
    }
  }
  if(e.key==='t'||e.key==='T'){
    var tfs=['r5','r6'];
    for(var j=0;j<tfs.length;j++){
      var te=document.getElementById(tfs[j]+'e');
      if(te&&!te.classList.contains('show')){
        var tbtn=document.querySelectorAll('#'+tfs[j]+' .tf-btn:not(.disabled)');
        if(tbtn[0])tbtn[0].click();break;
      }
    }
  }
  if(e.key==='f'||e.key==='F'){
    var tfs2=['r5','r6'];
    for(var j2=0;j2<tfs2.length;j2++){
      var te2=document.getElementById(tfs2[j2]+'e');
      if(te2&&!te2.classList.contains('show')){
        var tbtn2=document.querySelectorAll('#'+tfs2[j2]+' .tf-btn:not(.disabled)');
        if(tbtn2[1])tbtn2[1].click();break;
      }
    }
  }
});

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}
function saveProgress(){try{localStorage.setItem('maturix_ch09_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch09_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}

// GAP FILL LOGIC
var gfAnswered={}, gfCorrect=0, gfTotal=6;
function checkGF(blockId, inputId, correct){
  if(gfAnswered[blockId])return;
  var val=document.getElementById(inputId).value.trim().toLowerCase();
  var ok=(val===correct.toLowerCase()||val===correct.toLowerCase().replace(' ',''));
  gfAnswered[blockId]=ok;
  if(ok)gfCorrect++;
  document.getElementById(inputId).disabled=true;
  var fb=document.getElementById(blockId+'fb');
  if(ok){
    fb.className='fitb-fb ok';
    fb.innerHTML='&#x2713; To&#269;no!';
    document.getElementById(inputId).style.borderColor='var(--green)';
  } else {
    fb.className='fitb-fb no';
    fb.innerHTML='&#x2717; To&#269;an odgovor: <b>'+correct+'</b>';
    document.getElementById(inputId).style.borderColor='var(--red)';
  }
  if(Object.keys(gfAnswered).length===gfTotal){
    var box=document.getElementById('gf-score');
    document.getElementById('gf-score-num').textContent=gfCorrect+'/'+gfTotal;
    document.getElementById('gf-score-lbl').textContent=
      gfCorrect===gfTotal?'Savr&#353;eno! Gap fill svladan. &#x1F389;':
      gfCorrect>=5?'Odli&#269;no!':
      gfCorrect>=4?'Dobro &mdash; ponovi strategiju gap filla.':
      'Vrati se na tekst i pro&#269;itaj pa&#382;ljivo.';
    box.style.display='block';
  }
}
function resetGF(){
  gfAnswered={};gfCorrect=0;
  ['gf1','gf2','gf3','gf4','gf5','gf6'].forEach(function(id){
    var inp=document.getElementById('gfi'+id.slice(-1));
    if(inp){inp.value='';inp.disabled=false;inp.style.borderColor='';}
    var fb=document.getElementById(id+'fb');
    if(fb){fb.className='fitb-fb';fb.innerHTML='';}
    delete gfAnswered[id];
  });
  gfCorrect=0;
  document.getElementById('gf-score').style.display='none';
}

loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();


// READING QUIZ — TEKST 3 (AI and Education)
var sqAnswered={},sqCorrect=0,sqTotal=8;
var SQE={
  s1:{c:"✓ Točno. Tekst kaže 'AI systems can analyse a student's performance and adjust the difficulty of tasks accordingly' — prilagodba prema individualnim potrebama.",w:"✗ Netočno. AI ne zamjenjuje nastavnike, ne tretira sve jednako i ne smanjuje vrijeme učenja. Odgovor je C — prilagođava težinu zadataka svakom učeniku."},
  s2:{c:"✓ Točno. 'Beneficial' znači pozitivan, koristan — kontekst pokazuje da kritičari sumnjaju u pozitivne učinke AI-ja.",w:"✗ Netočno. 'Beneficial' je pozitivna riječ — znači 'koristan, s pozitivnim učincima'. Pročitaj kontekst: 'not entirely beneficial' = nije u potpunosti korisno."},
  s3:{c:"✓ Točno. Tekst kaže 'Critics argue that an over-reliance on technology could reduce the importance of human interaction' — parafrazirana opcija B.",w:"✗ Netočno. Kritičari ne zahtijevaju potpunu zamjenu nastavnika niti tvrde da je AI preskup. Odgovor B točno parafrazira 'over-reliance on technology could reduce the importance of human interaction'."},
  s4:{c:"✓ Točno. Zadnji odlomak kaže 'use AI as a tool to support teachers rather than to replace them' — AI kao pomoć, ne zamjena.",w:"✗ Netočno. Zadnji odlomak je optimistični zaključak: AI i nastavnici mogu zajedno učinkovito raditi. Odgovor C točno parafrazira glavnu poruku."},
  s5:{c:"✓ Točno. Tekst eksplicitno kaže 'AI systems collect large amounts of information about students' — TRUE.",w:"✗ Netočno. Tekst jasno navodi 'AI systems collect large amounts of information about students'. Ova izjava je TRUE."},
  s6:{c:"✓ Točno. Tekst kaže 'Unlike traditional teaching methods, which treat all students the same' — dakle TRADICIONALNE metode tretiraju sve jednako, ne različito. FALSE.",w:"✗ Netočno. Pažljivo čitaj! Tekst kaže 'traditional teaching methods, which treat ALL STUDENTS THE SAME' — znači tretiraju sve jednako. Izjava je FALSE."},
  s7:{c:"✓ Točno. Tekst kaže 'most education experts believe that AI and teachers can work together' — dakle VEĆINA je za AI, ne svi su protiv. FALSE.",w:"✗ Netočno. Tekst kaže 'most education experts believe that AI and teachers can work together effectively' — dakle stručnjaci su uglavnom ZA AI. Izjava je FALSE."},
  s8:{c:"✓ Točno. 'Analyse performance and adjust difficulty accordingly' = 'look at how well doing and change the level to match' — isti smisao, različite riječi. Klasično parafraziranje.",w:"✗ Netočno. Odgovor C točno parafrazira: 'analyse performance' = 'look at how well a student is doing'; 'adjust difficulty' = 'change the level of difficulty'. Opcije A, B i D mijenjaju smisao."}
};

function sqAns(el,qid,ok){
  if(sqAnswered[qid]!==undefined)return;
  sqAnswered[qid]=ok;if(ok)sqCorrect++;trackAnswer('ch09',ok);
  var opts=el.closest('.rq-opts')||el.closest('.tf-opts');
  if(opts)opts.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){
    var parent=el.closest('.rq-opts')||el.closest('.tf-opts');
    if(parent)parent.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){
      if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');
    });
  }
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+SQE[qid][ok?'c':'w']+'</div>';expl.classList.add('show');}
  if(Object.keys(sqAnswered).length===sqTotal){
    document.getElementById('sq-num').textContent=sqCorrect+'/'+sqTotal;
    document.getElementById('sq-lbl').textContent=
      sqCorrect===sqTotal?'Savršeno! Sve strategije u akciji. 🎉':
      sqCorrect>=7?'Odlično! Čitanje s razumijevanjem svladano. 💪':
      sqCorrect>=5?'Dobro. Ponovi strategije parafraziranja i T/F dokaza.':
      'Vrati se na Learn tab — ponovi strategije čitanja.';
    var sq=document.getElementById('sq-score');if(sq){sq.style.display='block';}
  }
}

function retrySQ(){
  sqAnswered={};sqCorrect=0;
  ['s1','s2','s3','s4','s5','s6','s7','s8'].forEach(function(qid){
    document.querySelectorAll('[onclick*="sqAns(this,\\''+qid+'\\'"]').forEach(function(o){
      o.classList.remove('correct','wrong','disabled');
    });
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  var sq=document.getElementById('sq-score');if(sq){sq.style.display='none';}
}


// READING QUIZ — TEKST 4 (Healthy Habits)
var tqAnswered={},tqCorrect=0,tqTotal=6;
var TQE={
  t1:{c:"✓ Točno. Tekst kaže 'small, everyday habits can have a significant impact' i 'gradual improvements are far more effective' — parafrazira opcija C.",w:"✗ Netočno. Tekst NIJE rekao da treba dramatičnih promjena — upravo suprotno: 'it is not necessary to make dramatic changes'. Odgovor C točno parafrazira prvu rečenicu."},
  t2:{c:"✓ Točno. Tekst direktno navodi: 'adults should aim for at least 150 minutes of moderate exercise per week' — WHO preporuka.",w:"✗ Netočno. Točan broj je 150 minuta UMJERENE aktivnosti tjedno — prema WHO. Ne 100, ne 200, ne 30 dnevno. Odgovor B je direktna informacija iz teksta."},
  t3:{c:"✓ Točno. 'Sustainable' u kontekstu 'gradual improvements are more sustainable' znači 'može se nastaviti dugoročno'. Zamka D (okoliš) je uobičajeno značenje, ali ovdje je kontekst zdravlja.",w:"✗ Netočno. 'Sustainable' ovdje znači 'može se nastaviti dugo' — kontekst je zdravstvene navike koje se mogu odr&#382;ati. Veza s okolišem je uobičajeno, ali pogre&#353;no ovdje. Odgovor C."},
  t4:{c:"✓ Točno. Tekst kaže 'This does not have to mean going to the gym' i navodi hodanje, bicikliranje, plivanje kao alternative. FALSE.",w:"✗ Netočno. Tekst EKSPLICITNO kaže 'This does not have to mean going to the gym' — vežba može biti hodanje, bicikliranje ili plivanje. Ova izjava je FALSE."},
  t5:{c:"✓ Točno. Tekst kaže da nutricionisti preporučuju 'eating a variety of foods rather than following restrictive diets' — znači NISU za restriktivne dijete. FALSE.",w:"✗ Netočno. Tekst kaže SUPROTNO: nutricionisti preporučuju raznovrsnu prehranu 'rather than following restrictive diets'. Restriktivne dijete su opisane kao 'difficult to sustain'. Izjava je FALSE."},
  t6:{c:"✓ Točno. 'Absence of illness' = 'lack of disease' · 'physical, mental, and social wellbeing' = 'body, mind, relationships' — klasično parafraziranje s tri sinonima.",w:"✗ Netočno. Odgovor C točno parafrazira sve tri komponente: fizička (body), mentalna (mind) i socijalna (relationships) dobrobit. A je djelomično točno ali izostavlja mentalno i socijalno."}
};
function tqAns(el,qid,ok){
  if(tqAnswered[qid]!==undefined)return;
  tqAnswered[qid]=ok;if(ok)tqCorrect++;
  trackAnswer('ch09',ok);
  var opts=el.closest('.rq-opts')||el.closest('.tf-opts');
  if(opts)opts.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){var p=el.closest('.rq-opts')||el.closest('.tf-opts');if(p)p.querySelectorAll('.rq-opt,.tf-btn').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+TQE[qid][ok?'c':'w']+'</div>';expl.classList.add('show');}
  if(Object.keys(tqAnswered).length===tqTotal){
    document.getElementById('tq-num').textContent=tqCorrect+'/'+tqTotal;
    document.getElementById('tq-lbl').textContent=
      tqCorrect===tqTotal?'Savr\\u0161eno! \\U0001f389':
      tqCorrect>=5?'Odli\\u010dno! Jo\\u0161 malo na parafraziranju.':
      tqCorrect>=4?'Dobro. Ponovi strategije za T/F i zna\\u010denje rije\\u010di.':
      'Vrati se na Learn tab \\u2014 ponovi strategije \\u010ditanja.';
    var s=document.getElementById('tq-score');if(s){s.style.display='block';}
  }
}
function retryTQ(){
  tqAnswered={};tqCorrect=0;
  ['t1','t2','t3','t4','t5','t6'].forEach(function(qid){
    document.querySelectorAll('[onclick*="tqAns(this,\\''+qid+'\\'"]').forEach(function(o){o.classList.remove('correct','wrong','disabled');});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  var s=document.getElementById('tq-score');if(s){s.style.display='none';}
}
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
