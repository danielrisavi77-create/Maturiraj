// Maturiraj.hr — Engleski niža razina · Poglavlje 7
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ENG_NIZA_CH07({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch07-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH07_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch07-js";
    scriptEl.textContent = CH07_JS;
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
      if (num === 8 && nav.onNext) nav.onNext();
      else if (num === 6 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch07-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch07-root"
      dangerouslySetInnerHTML={{ __html: CH07_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH07_CSS = `
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

const CH07_BODY = `<div class="shell">

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
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
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
  <div class="sb-item" onclick="window.location='chapter01.html'" style="cursor:pointer"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter02.html'" style="cursor:pointer"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter03.html'" style="cursor:pointer"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item" onclick="window.location='chapter04.html'" style="cursor:pointer"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
  <div class="sb-item" onclick="window.location='chapter05.html'" style="cursor:pointer"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
  <div class="sb-item" onclick="window.location='chapter06.html'" style="cursor:pointer"><span class="sb-dot"></span> 06 &middot; Uvjetne rečenice 0, 1, 2</div>
  <div class="sb-item active"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
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
  <div class="sb-footer">07 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter06.html'" style="cursor:pointer">← chapters</span>
    <span class="bc-sep">/</span><span>grammar</span>
    <span class="bc-sep">/</span><span class="bc-active">passive-voice</span>
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
      ~35 min
    </div>
  </div>

  <!-- ══ LAYER 0 — 2 MIN ══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 07 / 15 · grammar</div>
      <h1 class="hero-title">Passive <span>Voice</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~35 min</span>
        <span class="hero-badge hb-level">niža razina</span>
        <span class="hero-badge hb-chapter">07 / 12</span>
      </div>
      <p class="hero-sub">be + past participle · PS / PP / Future / Modal pasiv · by + agent</p>
      <div class="progress-track"><div class="progress-bar" style="width:58%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-violet">be + past participle</span>
      <span class="pill pill-lime">Present Simple pasiv</span>
      <span class="pill pill-sky">Past Simple pasiv</span>
      <span class="pill pill-amber">by + agent</span>
      <span class="pill pill-red">Exam traps</span>
    </div>

    <div class="sec-label">// at a glance — pasivni oblici</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">PS</div><div class="stat-name">Present Simple</div><div class="stat-desc"><b style="color:var(--lime)">am/is/are + PP</b><br><em>It is made here.</em></div></div>
      <div class="stat-card"><div class="stat-icon sky">PSt</div><div class="stat-name">Past Simple</div><div class="stat-desc"><b style="color:var(--sky)">was/were + PP</b><br><em>It was built in 1900.</em></div></div>
      <div class="stat-card"><div class="stat-icon violet">PP</div><div class="stat-name">Present Perfect</div><div class="stat-desc"><b style="color:var(--violet)">has/have been + PP</b><br><em>It has been fixed.</em></div></div>
      <div class="stat-card"><div class="stat-icon amber">FUT</div><div class="stat-name">Future / Modal</div><div class="stat-desc"><b style="color:var(--amber)">will be + PP</b> / <b style="color:var(--amber)">modal + be + PP</b><br><em>It will be done. / It must be done.</em></div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck violet">Zlatno pravilo</div><div class="cv">Pasiv = <code>be (u ispravnom obliku)</code> + <code>past participle</code> — uvijek!</div></div>
      <div class="concept-row"><div class="ck lime">PS pasiv</div><div class="cv">I/you/we/they: <code>am/are + PP</code> · he/she/it: <code>is + PP</code> · <em>English is spoken here.</em></div></div>
      <div class="concept-row"><div class="ck sky">PSt pasiv</div><div class="cv">Jednina: <code>was + PP</code> · Množina: <code>were + PP</code> · <em>The bridge was built in 1890.</em></div></div>
      <div class="concept-row"><div class="ck violet">PP pasiv</div><div class="cv">Jednina: <code>has been + PP</code> · Množina: <code>have been + PP</code> · <em>It has been repaired.</em></div></div>
      <div class="concept-row"><div class="ck amber">Modal pasiv</div><div class="cv"><code>modal + be + PP</code> — uvijek <b>be</b> (ne been!): <em>It must be done. / It can be fixed.</em></div></div>
      <div class="concept-row"><div class="ck red">by + agent</div><div class="cv"><em>by</em> + tko je napravio radnju: <em>The book was written <b>by Hemingway</b>.</em> · Često se izostavlja!</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// ako zapamtiš samo ovo — 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🧠 panic-proof — 3 rules that cover 90% of exam questions</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Pasiv = be + past participle</b> — <b style="color:var(--violet)">be</b> mijenja oblik prema vremenu, PP ostaje isti</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Past Simple pasiv</b>: <b style="color:var(--sky)">was</b> (jednina) / <b style="color:var(--sky)">were</b> (množina) + PP — najčešće na ispitu</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Modal pasiv</b>: modal + <b style="color:var(--amber)">be</b> + PP — uvijek <b>be</b> (ne been!): <em>must be done</em> ✓ · <em>must been done</em> ❌</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Što je pasiv i zašto ga koristimo?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>Pasiv = radnja > vršitelj.</b> Koristimo ga kad je važno ŠTO se dogodilo, ne TKO je to napravio.<br><span class="ok">This bridge was built in 1890.</span> (most je bitan, ne graditelj)<br>Konteksti: vijesti · upute · muzejske pločice · znanstveni tekstovi</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koja je formula za Past Simple pasiv?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b style="color:var(--sky)">was/were + past participle</b><br><br>
        Jednina (I/he/she/it): <em>The letter <b>was written</b>.</em><br>
        Množina (you/we/they): <em>The letters <b>were written</b>.</em><br><br>
        ⚠ Najčešća greška: <span class="bad">The letters was written.</span> ❌<br>
        → <span class="ok">The letters <b>were</b> written.</span> ✓ (množina → were!)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako tvorim pasiv od aktivne rečenice?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>4 koraka transformacije:</b><br>
        1. Objekt aktivne → <b>subjekt</b> pasivne<br>
        2. Dodaj <b>be</b> u ispravnom obliku i vremenu<br>
        3. Glagol → <b>past participle</b><br>
        4. Subjekt aktivne → <b>by + agent</b> (ili izostavi)<br><br>
        <em>Shakespeare <b>wrote</b> this play.</em> →<br>
        <em>This play <b>was written</b> by Shakespeare.</em>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Što je "by + agent" i kada ga koristim?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>by + agent</b> = tko je napravio radnju — samo kada je to relevantno:<br>&#x2713; Koristi: <span class="ok">The Mona Lisa was painted <b>by</b> da Vinci.</span> (agent bitan)<br>&#x274C; Izostavi: <span class="ok">My bike was stolen.</span> (tko? nepoznato/nije bitno)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch02, ch03, ch05 — zašto je pasiv važan za sve teme?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">Pasiv koristi PP (ch02/ch03) + be (ch01):<br>PS pasiv: <span class="ok">was/were + PP</span> · PP pasiv: <span class="ok">has/have been + PP</span><br>Modal pasiv: <span class="ok">must/can + be + PP</span> · Present pasiv: <span class="ok">is/are + PP</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako prepoznam pasiv u reading tekstu?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">Traži: <b>be + past participle</b> u bilo kom obliku:<br><span class="ok">is/are + PP</span> → Present · <span class="ok">was/were + PP</span> → Past<br><span class="ok">has/have been + PP</span> → PP · <span class="ok">will be + PP</span> → Future<br>&#x26A0; Zamka: <em>She was tired</em> (stanje) ≠ <em>She was invited</em> (pasiv)</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol — 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">🚨 if you panic on the exam — do this</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Koje je <b>vrijeme rečenice</b>? (prošlost, sadašnjost, budućnost…) → odaberi odgovarajući oblik <b>be</b></div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Je li subjekt <b>jednina ili množina</b>? → was/were · is/are · has/have been</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Glagol → <b>past participle</b> (regular: +ed · irregular: written, built, made…)</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Modal pasiv</b>: modal + <b>be</b> + PP — uvijek <b>be</b>, nikad been! (<em>must be done</em> ✓)</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Treba li <b>by + agent</b>? Ako nije poznato ili bitno tko → izostavi</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter06.html" class="nav-btn">← Chapter 06</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn more →</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — LEARN ══ -->
  <div class="layer" id="l1">

    <div class="sec-label">// zlatno pravilo — formula za sve pasivne oblike</div>
    <p class="prose">Pasiv ima samo jednu logiku: <strong>be + past participle</strong>. be mijenja oblik prema vremenu i subjektu — PP uvijek ostaje isti.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pc">PASIV</div>
        <div><div class="gram-title">Pasiv — opća formula</div><div class="gram-sub">be (u ispravnom obliku) + past participle</div></div>
      </div>
      <div class="gram-body">
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'Pasiv = be (ispravni oblik) + past participle')">copy</button>
          <span class="lbl">Zlatna formula</span><br>
          <span class="sub">Subjekt</span> + <span class="val">be (oblik)</span> + <span class="val">past participle</span> (+ <span class="by-agent">by + agent</span>)<br>
          <span style="color:var(--t3);font-size:12px">be = am/is/are · was/were · has/have been · will be · modal + be · is/are being</span>
        </div>
        <div class="callout callout-warn" style="margin-top:14px">
          <span class="callout-icon">⚠</span>
          <div class="callout-body">
            <div class="callout-title">Pasiv ≠ "bio/bila/bilo" — oba izgledaju isto!</div>
            <div class="callout-text">
              <em>She <b>was tired</b>.</em> → ovo je <b>stanje</b> (pridjev), ne pasiv!<br>
              <em>She <b>was invited</b>.</em> → ovo je <b>pasiv</b> (past participle glagola invite)<br><br>
              Test: može li se dodati "by someone"? → pasiv ✓<br>
              <em>She was invited <b>by Tom</b>.</em> ✓ pasiv · <em>She was tired by someone.</em> ❌ nije pasiv
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// pasiv svih vremena — pregled</div>
    <p class="prose">Ista rečenica u svim vremenima. Subjekt: <em>The cake</em> · Glagol: <em>make</em> · PP: <em>made</em></p>

    <div class="tbl-wrap">
      <table class="pass-tbl">
        <thead>
          <tr>
            <th>Vrijeme</th>
            <th>Formula</th>
            <th>Aktivna rečenica</th>
            <th>Pasivna rečenica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tense">Present Simple</td>
            <td class="formula-cell">is/are + PP</td>
            <td class="active-ex">They <b>make</b> the cake here.</td>
            <td class="passive-ex">The cake <b>is made</b> here.</td>
          </tr>
          <tr>
            <td class="tense">Past Simple</td>
            <td class="formula-cell">was/were + PP</td>
            <td class="active-ex">They <b>made</b> the cake yesterday.</td>
            <td class="passive-ex">The cake <b>was made</b> yesterday.</td>
          </tr>
          <tr>
            <td class="tense">Present Perfect</td>
            <td class="formula-cell">has/have been + PP</td>
            <td class="active-ex">They <b>have made</b> the cake.</td>
            <td class="passive-ex">The cake <b>has been made</b>.</td>
          </tr>
          <tr>
            <td class="tense">Future (will)</td>
            <td class="formula-cell">will be + PP</td>
            <td class="active-ex">They <b>will make</b> the cake.</td>
            <td class="passive-ex">The cake <b>will be made</b>.</td>
          </tr>
          <tr>
            <td class="tense">Modal</td>
            <td class="formula-cell">modal + be + PP</td>
            <td class="active-ex">They <b>must make</b> the cake.</td>
            <td class="passive-ex">The cake <b>must be made</b>.</td>
          </tr>
          <tr>
            <td class="tense">Present Continuous</td>
            <td class="formula-cell">is/are being + PP</td>
            <td class="active-ex">They <b>are making</b> the cake.</td>
            <td class="passive-ex">The cake <b>is being made</b>.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">Trik za pamćenje — "be prati vrijeme"</div>
        <div class="callout-text">
          PS aktiv → is/are · PSt aktiv → was/were · PP aktiv → has/have been · Will aktiv → will be<br>
          Uvijek: uzmi pomoćni glagol aktivnog oblika → zamijeni ga s odgovarajućim <b>be</b> oblikom → dodaj PP.
        </div>
      </div>
    </div>

    <!-- MIKRO-PROVJERA -->
    <div class="callout callout-info">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera</div>
        <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "The letters was written" nije točno?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">"The letters" = množina → Past Simple pasiv za množinu = <b style="color:var(--sky)">were</b> (ne was). ✅ <b>The letters were written.</b><br>was = jednina (the letter, it, he, she) · were = množina (the letters, they, we)</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// transformacija: aktiv → pasiv</div>
    <p class="prose">Slijedi 4 koraka za transformaciju svake aktivne rečenice u pasivnu.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">4 KORAKA</div>
        <div><div class="gram-title">Transformacija aktiv → pasiv</div><div class="gram-sub">korak po korak</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <span class="lbl">Korak 1</span> — objekt aktivne postaje <b style="color:var(--lime)">subjekt</b> pasivne<br>
          <span class="lbl">Korak 2</span> — dodaj <b style="color:var(--violet)">be</b> u ispravnom obliku (prati vrijeme i broj)<br>
          <span class="lbl">Korak 3</span> — glagol → <b style="color:var(--sky)">past participle</b><br>
          <span class="lbl">Korak 4</span> — subjekt aktivne → <b style="color:var(--amber)">by + agent</b> (ili izostavi)
        </div>
      </div>
    </div>

    <!-- TRANSFORMATIONS -->
    <div class="transform-card">
      <div class="tc-head">Present Simple pasiv</div>
      <div class="tc-body">
        <div class="tc-active">People <b>speak</b> English here.</div>
        <div class="tc-arr">→</div>
        <div class="tc-passive">English <b>is spoken</b> here.</div>
      </div>
      <div class="tc-note">speak → spoken (irregular PP) · "English" = jednina → is</div>
    </div>

    <div class="transform-card">
      <div class="tc-head">Past Simple pasiv</div>
      <div class="tc-body">
        <div class="tc-active">Hemingway <b>wrote</b> this novel.</div>
        <div class="tc-arr">→</div>
        <div class="tc-passive">This novel <b>was written</b> by Hemingway.</div>
      </div>
      <div class="tc-note">write → written (irregular PP) · "novel" = jednina → was · "by Hemingway" = agent ostaje</div>
    </div>

    <div class="transform-card">
      <div class="tc-head">Present Perfect pasiv</div>
      <div class="tc-body">
        <div class="tc-active">They <b>have repaired</b> the car.</div>
        <div class="tc-arr">→</div>
        <div class="tc-passive">The car <b>has been repaired</b>.</div>
      </div>
      <div class="tc-note">repair → repaired (regular PP) · "car" = jednina → has been · agent izostavljen (nije bitno tko)</div>
    </div>

    <div class="transform-card">
      <div class="tc-head">Future pasiv (will)</div>
      <div class="tc-body">
        <div class="tc-active">They <b>will announce</b> the results.</div>
        <div class="tc-arr">→</div>
        <div class="tc-passive">The results <b>will be announced</b>.</div>
      </div>
      <div class="tc-note">announce → announced (regular) · will be + PP → isti za sve subjekte</div>
    </div>

    <div class="transform-card">
      <div class="tc-head">Modal pasiv — ZAMKA!</div>
      <div class="tc-body">
        <div class="tc-active">You <b>must check</b> all documents.</div>
        <div class="tc-arr">→</div>
        <div class="tc-passive">All documents <b>must be checked</b>.</div>
      </div>
      <div class="tc-note" style="color:var(--red)">⚠ modal + <b>be</b> + PP — uvijek "be", nikad "been"! must be checked ✓ · must been checked ❌</div>
    </div>

    <div class="transform-card">
      <div class="tc-head">Present Continuous pasiv</div>
      <div class="tc-body">
        <div class="tc-active">They <b>are repairing</b> the road.</div>
        <div class="tc-arr">→</div>
        <div class="tc-passive">The road <b>is being repaired</b>.</div>
      </div>
      <div class="tc-note">is/are being + PP · "road" = jednina → is being repaired · označava radnju u tijeku</div>
    </div>

    <!-- BY + AGENT -->
    <hr class="divider">
    <div class="sec-label">// by + agent — kada koristiti, kada izostaviti</div>
    <p class="prose">"by" + agent koristimo <strong>samo kada je vršitelj radnje relevantan</strong>. U većini pasivnih rečenica agent se izostavlja.</p>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--amber-dim);color:var(--amber);border-bottom-color:var(--amber-border)">Koristimo "by + agent"</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Poznata i bitna osoba</b>The play was written <em>by Shakespeare</em>.</div>
          <div class="cmp-row"><b>Vršitelj je iznenađujući</b>The window was broken <em>by a bird</em>.</div>
          <div class="cmp-row"><b>Specifičan alat/sredstvo</b>The letter was sent <em>by email</em>.</div>
          <div class="cmp-row"><b>Ispit traži agenta</b>...was invented <em>by Alexander Bell</em>.</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--sky-dim);color:var(--sky);border-bottom-color:var(--sky-border)">Izostavimo agenta</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Ne znamo tko</b>My bike <em>was stolen</em>. (tko? nepoznato)</div>
          <div class="cmp-row"><b>Nije bitno tko</b>The letter <em>was sent</em>. (bitno je samo da je poslano)</div>
          <div class="cmp-row"><b>Očito tko</b>He <em>was arrested</em>. (jasno — policija)</div>
          <div class="cmp-row"><b>Opća istina</b>English <em>is spoken</em> worldwide.</div>
        </div>
      </div>
    </div>

    <!-- NEGATIVNI I UPITNI PASIV -->
    <hr class="divider">
    <div class="sec-label">// negativ i pitanje u pasivu</div>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">NEG/PIT</div>
        <div><div class="gram-title">Negativ i pitanje</div><div class="gram-sub">negative · question forms</div></div>
      </div>
      <div class="gram-body">
        <div class="formula" style="border-left-color:var(--red)">
          <button class="copy-btn" onclick="copyFormula(this,'Negativ: subjekt + be + not + past participle')">copy</button>
          <span class="lbl">− Negativ</span><br>
          <span class="sub">Subjekt</span> + <span class="kw">be + not</span> + <span class="val">PP</span><br>
          <em>It <span class="kw">is not</span> made here.</em> · <em>It <span class="kw">wasn't</span> built yesterday.</em> · <em>It <span class="kw">hasn't been</span> repaired.</em>
        </div>
        <div class="formula" style="border-left-color:var(--sky)">
          <button class="copy-btn" onclick="copyFormula(this,'Pitanje: be + subjekt + past participle?')">copy</button>
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Be</span> + <span class="sub">subjekt</span> + <span class="val">PP</span>?<br>
          <em><span class="kw">Is</span> it made here?</em> · <em><span class="kw">Was</span> it built?</em> · <em><span class="kw">Has</span> it been repaired?</em> · <em><span class="kw">Will</span> it be done?</em>
        </div>
        <div class="sub-label">→ Primjeri</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">The window <b class="pc">wasn't broken</b> by me.</div><span class="ex-arr">→</span><div class="ex-hr">PSt pasiv negativ</div></div>
          <div class="ex"><div class="ex-en"><b>Was</b> this car <b class="pc">made</b> in Germany?</div><span class="ex-arr">→</span><div class="ex-hr">PSt pasiv pitanje</div></div>
          <div class="ex"><div class="ex-en"><b>Has</b> the problem <b class="pc">been solved</b>?</div><span class="ex-arr">→</span><div class="ex-hr">PP pasiv pitanje</div></div>
          <div class="ex"><div class="ex-en">The tickets <b class="pc">can't be</b> refunded.</div><span class="ex-arr">→</span><div class="ex-hr">modal pasiv negativ</div></div>
        </div>
      </div>
    </div>

    <!-- IRREGULAR PP ZA PASIV -->
    <hr class="divider">
    <div class="sec-label">// irregular past participles — ključni za pasiv</div>
    <p class="prose">Past participle mora biti točan — isti kao u ch02 i ch03, ali sada u pasivnom kontekstu.</p>

    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Infinitiv</th><th>Past Participle</th><th>Pasivni primjer</th><th>Infinitiv</th><th>Past Participle</th><th>Pasivni primjer</th></tr></thead>
        <tbody>
          <tr><td><code>write</code></td><td><b>written</b></td><td><em>was written</em></td><td><code>make</code></td><td><b>made</b></td><td><em>is made</em></td></tr>
          <tr><td><code>build</code></td><td><b>built</b></td><td><em>was built</em></td><td><code>take</code></td><td><b>taken</b></td><td><em>was taken</em></td></tr>
          <tr><td><code>speak</code></td><td><b>spoken</b></td><td><em>is spoken</em></td><td><code>give</code></td><td><b>given</b></td><td><em>was given</em></td></tr>
          <tr><td><code>see</code></td><td><b>seen</b></td><td><em>was seen</em></td><td><code>know</code></td><td><b>known</b></td><td><em>is known</em></td></tr>
          <tr><td><code>do</code></td><td><b>done</b></td><td><em>must be done</em></td><td><code>find</code></td><td><b>found</b></td><td><em>was found</em></td></tr>
          <tr><td><code>eat</code></td><td><b>eaten</b></td><td><em>is eaten</em></td><td><code>send</code></td><td><b>sent</b></td><td><em>has been sent</em></td></tr>
          <tr><td><code>break</code></td><td><b>broken</b></td><td><em>was broken</em></td><td><code>sell</code></td><td><b>sold</b></td><td><em>is sold</em></td></tr>
        </tbody>
      </table>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-bottom:4px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--sky);margin-bottom:10px">// za&#353;to pasiv? &mdash; u stvarnom &#382;ivotu</div>
      <p style="font-size:13px;color:var(--t2);margin:0 0 10px">Pasiv nije samo gramati&#269;ko pravilo &mdash; to je svjesna stilska odluka. Koristimo ga kad je <b>radnja va&#382;nija od vr&#353;itelja</b>.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px">
        <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);font-weight:700;margin-bottom:6px">&#x1F4F0; VIJESTI / NOVINE</div>
          <div style="color:var(--t2);margin-bottom:4px"><em>A man was arrested near the city centre.</em></div>
          <div style="font-size:11.5px;color:var(--t3)">Tko ga je uhitio? Policija &mdash; o&#269;ito. Va&#382;an je doga&#240;aj, ne vr&#353;itelj.</div>
        </div>
        <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);font-weight:700;margin-bottom:6px">&#x1F3DB; PLO&#268;ICE U MUZEJU</div>
          <div style="color:var(--t2);margin-bottom:4px"><em>This painting was created in 1890.</em></div>
          <div style="font-size:11.5px;color:var(--t3)">Slika je va&#382;na, ne tko ju je to&#269;no naslikao u ovom trenutku.</div>
        </div>
        <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);font-weight:700;margin-bottom:6px">&#x1F4CB; UPUTE / PROPISI</div>
          <div style="color:var(--t2);margin-bottom:4px"><em>Mobile phones must be switched off.</em></div>
          <div style="font-size:11.5px;color:var(--t3)">Nije bitno tko to nare&#273;uje &mdash; va&#382;no je pravilo.</div>
        </div>
        <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);font-weight:700;margin-bottom:6px">&#x1F52C; ZNANSTVENI TEKSTOVI</div>
          <div style="color:var(--t2);margin-bottom:4px"><em>The experiment was conducted over six months.</em></div>
          <div style="font-size:11.5px;color:var(--t3)">Rezultat istra&#382;ivanja je bitan, ne istra&#382;iva&#269;.</div>
        </div>
      </div>
      <div style="margin-top:10px;padding:8px 12px;background:var(--lime-dim);border-radius:var(--r2);font-size:12.5px;color:var(--lime)">
        &#x1F4A1; Na NCVVO ispitu: pasiv se pojavljuje u <b>reading tekstovima</b> (vijesti, upute, opisi) i <b>gap fill zadatcima</b>. Prepoznaj ga &mdash; i nemoj ga transformirati natrag u aktiv!
      </div>
    </div>


    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">📡 matura radar — zamke i gdje se pojavljuju</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>was/were zbunjenost uz pasiv</b><br><em>The letters was written.</em> ❌ → <em>The letters <b style="color:var(--sky)">were</b> written.</em> ✓ · množina → were!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Modal pasiv: been umjesto be</b><br><em>It must <b style="color:var(--red)">been</b> done.</em> ❌ → <em>It must <b style="color:var(--lime)">be</b> done.</em> ✓ · modal + <b>be</b> + PP uvijek!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>Krivi PP (koristiti PS oblik umjesto PP)</b><br><em>It was <b style="color:var(--red)">wrote</b>.</em> ❌ → <em>It was <b style="color:var(--lime)">written</b>.</em> ✓ · write→written, not wrote!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>PP pasiv: been izostavljen</b><br><em>It has <b style="color:var(--red)">repaired</b>.</em> ❌ → <em>It has <b style="color:var(--lime)">been repaired</b>.</em> ✓ · has/have + been + PP uvijek!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>"by" umjesto "from" ili "with"</b><br><em>It was made <b style="color:var(--red)">from</b> someone.</em> ❌ → <em>It was made <b style="color:var(--lime)">by</b> someone.</em> ✓ · agent uvijek "by"</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Gap fill:</b> aktiv ili pasiv? → provjeri PP → was/were/is/are/has been → by?<br><b>MCQ:</b> eliminiraj PS oblik umjesto PP · was vs were · been vs be uz modal<br><b>Error correction:</b> was wrote · must been done · has repaired (bez been)</div></div>
      </div>
    </div>

    <!-- WHY NOT -->
    <hr class="divider">
    <div class="sec-label">// zašto NIJE drugi odgovor?</div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "The letters <em style="color:var(--red)">was written</em> yesterday." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: The letters were written yesterday.</b><br>"The letters" = množina → Past Simple pasiv za množinu = <b>were</b>. was = jednina (the letter, he, she, it). Ista logika kao u ch02: "They was playing" ❌ → "They were playing" ✓.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "It must <em style="color:var(--red)">been</em> done immediately." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: It must be done immediately.</b><br>Modalni pasiv = modal + <b>be</b> + PP — uvijek "be", nikad "been" uz modalni! "been" se koristi samo u Present Perfect pasivu (has/have been). must be done ✓ · can be fixed ✓ · should be checked ✓.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "This novel was <em style="color:var(--red)">wrote</em> by Hemingway." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: This novel was written by Hemingway.</b><br>Pasiv traži <b>past participle</b> — ne past simple! write → wrote (PS) ali write → <b>written</b> (PP). Ista zamka kao u ch02: koristiti PS oblik umjesto PP.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "The car has <em style="color:var(--red)">repaired</em>." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: The car has been repaired.</b><br>Present Perfect pasiv = has/have + <b>been</b> + PP. "been" se ne može izostaviti! has repaired = aktiv PP (netko je popravio) · has been repaired = pasiv PP (auto je popravljen).</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "This cake was made <em style="color:var(--red)">from</em> my grandmother." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: This cake was made by my grandmother.</b><br>Agent u pasivu uvijek dolazi s <b>by</b> — nikad "from" ili "with" za osobu koja je izvela radnju.<br>Iznimka: "made from" = od čega je napravljeno (materijal): <em>Wine is made from grapes.</em> ✓ — ali ovo nije agent!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "The road repairs at the moment." — zašto nije aktiv?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: The road is being repaired at the moment.</b><br>Cesta ne može sama sebe popravljati — semantički mora biti pasiv. "at the moment" + radnja u tijeku → Present Continuous pasiv: is/are being + PP. Kontekst određuje aktiv ili pasiv.</div>
    </div>

    <!-- PASIV DRILL -->
    <hr class="divider">
    <div class="sec-label">// pasiv drill — odaberi točan pasivni oblik</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Klikni na ispravni oblik. Pazi na was/were i modal pasiv!</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">This castle _______ in the 12th century. (build — Past Simple pasiv)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'p1',false,'was built')">was build</div><div class="sv-opt" onclick="svAns(this,'p1',true,'was built')">was built</div><div class="sv-opt" onclick="svAns(this,'p1',false,'was built')">were built</div></div><div class="sv-fb" id="p1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">All students _______ to attend the meeting. (require — PS pasiv)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'p2',false,'are required')">is required</div><div class="sv-opt" onclick="svAns(this,'p2',true,'are required')">are required</div><div class="sv-opt" onclick="svAns(this,'p2',false,'are required')">were required</div></div><div class="sv-fb" id="p2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">The results _______ yet. (not / announce — PP pasiv)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'p3',false,'haven't been announced')">wasn't announced</div><div class="sv-opt" onclick="svAns(this,'p3',true,'haven't been announced')">haven't been announced</div><div class="sv-opt" onclick="svAns(this,'p3',false,'haven't been announced')">hasn't been announced</div></div><div class="sv-fb" id="p3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">The documents _______ before the deadline. (must / sign — modal pasiv)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'p4',false,'must be signed')">must been signed</div><div class="sv-opt" onclick="svAns(this,'p4',true,'must be signed')">must be signed</div><div class="sv-opt" onclick="svAns(this,'p4',false,'must be signed')">must is signed</div></div><div class="sv-fb" id="p4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">The new hospital _______ next year. (open — Future pasiv)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'p5',false,'will be opened')">will opened</div><div class="sv-opt" onclick="svAns(this,'p5',true,'will be opened')">will be opened</div><div class="sv-opt" onclick="svAns(this,'p5',false,'will be opened')">is going to opened</div></div><div class="sv-fb" id="p5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <!-- DECISION TREE -->
    <hr class="divider">
    <div class="sec-label">// decision tree — koji pasivni oblik?</div>
    <div class="dtree">
      <div class="dt-node question">❓ <strong>Korak 1:</strong> Je li rečenica u <b>sadašnjosti</b> (opće/trenutno)?</div>
      <div class="dt-row">
        <div class="dt-branch"><div class="dt-node yes-ps">Opće → <strong>is/are + PP</strong> · U tijeku → <strong>is/are being + PP</strong></div></div>
        <div class="dt-connector">NE ↓</div>
      </div>
      <div class="dt-indent">
        <div class="dt-node question">❓ <strong>Korak 2:</strong> Je li rečenica u <b>prošlosti</b>?</div>
        <div class="dt-row">
          <div class="dt-branch"><div class="dt-node" style="background:var(--sky-dim);border-color:var(--sky-border);color:var(--sky)">✅ DA → <strong>was/were + PP</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· jednina: was · množina: were</small></div></div>
          <div class="dt-connector">NE ↓</div>
        </div>
        <div class="dt-indent">
          <div class="dt-node question">❓ <strong>Korak 3:</strong> Je li <b>Present Perfect</b> (rezultat vidljiv sada)?</div>
          <div class="dt-row">
            <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>has/have been + PP</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· jednina: has been · množina: have been</small></div></div>
            <div class="dt-connector">NE ↓</div>
          </div>
          <div class="dt-indent">
            <div class="dt-node question">❓ <strong>Korak 4:</strong> Je li <b>budućnost ili modal</b>?</div>
            <div class="dt-row">
              <div class="dt-branch"><div class="dt-node yes-amber">Future → <strong>will be + PP</strong> · Modal → <strong>modal + be + PP</strong></div></div>
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

  <!-- ══ LAYER 2 — PRACTICE ══ -->
  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// exam mode</strong> · Odaberi točan oblik. Svaki odgovor dolazi s objašnjenjem. Target: <strong>8/10</strong> ili bolje.</div>
    <div class="kbd-hint">⌨️ Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor · Speed drill: tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span></div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 · PS pasiv · is/are + PP</div><div class="q-text">English _______ all over the world. (speak)</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> speaks</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">B</span> is speaking</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">C</span> is spoken</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> was spoken</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 · PSt pasiv · was + PP · irregular</div><div class="q-text">The letter _______ (write) last night and posted this morning.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> was wrote</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">B</span> was written</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">C</span> were written</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> has been written</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 · PP pasiv · has/have been + PP</div><div class="q-text">The windows _______ (clean) — they look spotless!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> were cleaned</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> has been cleaned</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> have been cleaned</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> are cleaned</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 · PSt pasiv negativ · wasn't/weren't + PP</div><div class="q-text">The emails _______ (send) yesterday — there was a server error.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> wasn't sent</div><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">B</span> weren't sent</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> haven't been sent</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> aren't sent</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 · PSt pasiv · was + PP · irregular · by agent</div><div class="q-text">The cake _______ (make) by my grandmother. It was delicious!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> was maked</div><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">B</span> was made</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> were made</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> has been made</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 · modal pasiv · must be + PP</div><div class="q-text">All bags _______ (check) before boarding the plane.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> must been checked</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">B</span> must be checked</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">C</span> must be check</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> must checking</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 · pasiv pitanje · PSt · question form</div><div class="q-text">_______ this bridge _______ (build) in the 19th century?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> Did … build</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">B</span> Has … been built</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">C</span> Was … built</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> Is … built</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 · PC pasiv · is/are being + PP</div><div class="q-text">The road _______ (repair) — that's why there's a diversion.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> is repaired</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> has been repaired</div><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">C</span> is being repaired</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> was repaired</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 · PSt pasiv · were + PP · množina</div><div class="q-text">They _______ (invite) to the wedding but couldn't attend.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> was invited</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">B</span> were invited</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">C</span> have been invited</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> are invited</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 · PS pasiv · irregular PP · is/are</div><div class="q-text">Rice _______ (grow) in many Asian countries.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> grows</div><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">B</span> is grown</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">C</span> was grown</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> are grown</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">↺ Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">🏆</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje završeno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">07 · Pasiv<br>Gramatika završena! →</div>
      </div>
    </div>

    <!-- SPEED DRILL -->
    <hr class="divider">
    <div class="sec-label">// ⚡ speed drill — koji pasivni oblik?</div>
    <p class="prose" style="margin-bottom:6px">10 rečenica, 3 opcije. Tipke <span style="font-family:var(--mono);color:var(--t2)">1 · 2 · 3</span> = brzi unos.</p>
    <div class="speed-drill-wrap">
      <div class="sd-progress" id="sdprog"></div>
      <div id="sdq-wrap"></div>
      <div class="sd-score" id="sd-score-box" aria-live="polite">
        <div class="sd-score-num" id="sd-score-num">0/10</div>
        <div class="sd-score-lbl" id="sd-score-lbl"></div>
        <button class="sd-retry" onclick="initSpeedDrill()">↺ Ponovi drill</button>
      </div>
    </div>

    <!-- ERROR CORRECTION -->
    <hr class="divider">
    <div class="sec-label">// 🔴 error correction drill</div>
    <p class="prose" style="margin-bottom:14px">Svaka rečenica sadrži grešku. Klikni "Otkrij grešku" i pročitaj objašnjenje.</p>
    <div class="err-drill">
      <div class="err-item"><div class="err-sent">"The letters was written by the secretary."</div><button class="err-btn" onclick="showErrFix('ef1',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef1">✅ <span class="correct">The letters were written by the secretary.</span><span class="explain">"letters" = množina → Past Simple pasiv za množinu = <b>were</b>. was = jednina (the letter, it, he, she).</span></div></div>
      <div class="err-item"><div class="err-sent">"This bridge must been built before 1900."</div><button class="err-btn" onclick="showErrFix('ef2',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef2">✅ <span class="correct"><b>This bridge must have been built before 1900.</b></span><span class="explain">Logičniji ispravak: "must have been built" = dedukcija o prošlosti (most je star → sigurno je izgrađen davno).<br>Forma: modal + <b>have been</b> + PP = modalni perfekt pasiva.<br>Napomena: "must be built" je gramatički moguće za upute/pravila, ali ovdje kontekst (stari most) traži perfektni oblik.</span></div></div>
      <div class="err-item"><div class="err-sent">"This play was wrote by Shakespeare in 1603."</div><button class="err-btn" onclick="showErrFix('ef3',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef3">✅ <span class="correct">This play was written by Shakespeare in 1603.</span><span class="explain">Pasiv traži <b>past participle</b>: write → <b>written</b> (PP), ne "wrote" (Past Simple). Ista zamka kao u ch02: koristiti PS umjesto PP.</span></div></div>
      <div class="err-item"><div class="err-sent">"The problem has repaired by the technician."</div><button class="err-btn" onclick="showErrFix('ef4',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef4">✅ <span class="correct">The problem has been repaired by the technician.</span><span class="explain">Present Perfect pasiv: has/have + <b>been</b> + PP. "been" se ne može izostaviti — has repaired = aktiv (netko je popravio nešto), has been repaired = pasiv.</span></div></div>
      <div class="err-item"><div class="err-sent">"The Mona Lisa was painted from Leonardo da Vinci."</div><button class="err-btn" onclick="showErrFix('ef5',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef5">✅ <span class="correct">The Mona Lisa was painted by Leonardo da Vinci.</span><span class="explain">Agent u pasivu uvijek s <b>by</b>, nikad "from" za osobu. "from" = materijal (<em>made from grapes</em>), ne vršitelj radnje.</span></div></div>
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
        <li class="m-item"><div class="m-dot"></div><span><b>Zlatna formula:</b> be (ispravni oblik) + past participle — uvijek!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PS pasiv:</b> is/are + PP · <b>PSt pasiv:</b> was/were + PP · množina → were!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PP pasiv:</b> has/have been + PP · "been" se ne izostavlja!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Future pasiv:</b> will be + PP · <b>Modal pasiv:</b> modal + be + PP (be, ne been!).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>by + agent</b> = tko je napravio radnju. Izostaviti kad nije poznato/bitno.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Irregular PP:</b> written, built, spoken, made, done, broken, given, sent, sold…</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PC pasiv:</b> is/are being + PP · za radnje u tijeku: "The road is being repaired."</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Negativ:</b> be + not + PP · <b>Pitanje:</b> be + subjekt + PP?</span></li>
      </ul>
    </div>

    <!-- FILL IN THE BLANK -->
    <div class="sec-label" style="margin-top:32px">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upiši ispravni pasivni oblik. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 · PS pasiv · irregular · (grow)</div><div class="fitb-sent">Coffee _______ (grow) in Brazil and Colombia.</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="is grown" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','is grown','ps-pass')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','is grown','ps-pass')">Check</button></div><div class="fitb-fb" id="f1fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 · PSt pasiv · irregular · (build)</div><div class="fitb-sent">The Eiffel Tower _______ (build) between 1887 and 1889.</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="was built" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','was built','pst-pass')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','was built','pst-pass')">Check</button></div><div class="fitb-fb" id="f2fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 · PP pasiv · irregular · (send)</div><div class="fitb-sent">The invitation _______ (send) to all guests already.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="has been sent" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','has been sent','pp-pass')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','has been sent','pp-pass')">Check</button></div><div class="fitb-fb" id="f3fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 · Future pasiv · regular · (deliver)</div><div class="fitb-sent">The package _______ (deliver) tomorrow morning.</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="will be delivered" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','will be delivered','fut-pass')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','will be delivered','fut-pass')">Check</button></div><div class="fitb-fb" id="f4fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 · modal pasiv · should + be · regular</div><div class="fitb-sent">Your homework _______ (check) every day by your teacher.</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="should be checked" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','should be checked','mod-pass')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','should be checked','mod-pass')">Check</button></div><div class="fitb-fb" id="f5fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 · PC pasiv · is being + PP · regular</div><div class="fitb-sent">The bridge _______ (repair) right now — traffic is diverted.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="is being repaired" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','is being repaired','pc-pass')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','is being repaired','pc-pass')">Check</button></div><div class="fitb-fb" id="f6fb" aria-live="polite"></div></div>

    <hr class="divider">
    <div class="sec-label">// fill in the blank &mdash; modal pasiv</div>
    <p class="prose" style="margin-bottom:16px">Modal + pasiv: <b>modal + be + past participle</b>. Upi&#353;i ispravni oblik. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">07 · modal pasiv · can + be + solve</div><div class="fitb-sent">The problem with the heating system _______ before winter arrives. (can / solve)</div></div><div class="fitb-row"><input class="fitb-in" id="fi7" type="text" placeholder="can be solved" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi7','f7fb','can be solved','modal-pass')"><button class="fitb-btn" onclick="checkFitb('fi7','f7fb','can be solved','modal-pass')">Check</button></div><div class="fitb-fb" id="f7fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">08 · modal pasiv · must + be + close</div><div class="fitb-sent">All windows _______ before leaving the building. It is company policy. (must / close)</div></div><div class="fitb-row"><input class="fitb-in" id="fi8" type="text" placeholder="must be closed" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi8','f8fb','must be closed','modal-pass')"><button class="fitb-btn" onclick="checkFitb('fi8','f8fb','must be closed','modal-pass')">Check</button></div><div class="fitb-fb" id="f8fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">09 · modal pasiv · should + be + send</div><div class="fitb-sent">The new safety guidelines _______ to all employees by the end of the week. (should / send)</div></div><div class="fitb-row"><input class="fitb-in" id="fi9" type="text" placeholder="should be sent" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi9','f9fb','should be sent','modal-pass')"><button class="fitb-btn" onclick="checkFitb('fi9','f9fb','should be sent','modal-pass')">Check</button></div><div class="fitb-fb" id="f9fb" aria-live="polite"></div></div>


    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koja je zlatna formula za svaki pasivni oblik?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>be (u ispravnom obliku) + past participle — uvijek!</b><br>PS → is/are + PP · PSt → was/were + PP · PP → has/have been + PP<br>Future → will be + PP · Modal → modal + be + PP · PC → is/are being + PP</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako razlikujem was i were u Past Simple pasivu?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Isti obrazac kao u ch02 (Past Continuous):</b><br>was = jednina: he/she/it/the letter/the car…<br>were = množina: they/we/the letters/the cars…<br><em>The letter was written.</em> ✓ · <em>The letters were written.</em> ✓</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Zašto modal pasiv koristi "be" a ne "been"?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Modal + glagol u infinitivu — be je infinitiv od "is/are/was".</b><br>must + be + PP: "must be done" ✓ (be = infinitiv)<br>"been" dolazi samo iza has/have: "has been done" ✓<br>Modal → be · has/have → been. Nikad miješaj!</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch02 i ch03 — zašto su past participles bitni?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Isti PP koje si učio u ch02 (irregular verbs) i ch03 (PP za Present Perfect)!</b><br>write→written · build→built · speak→spoken · make→made · do→done<br>Pasiv nije nova tema — to je kombinacija be + PP koje već znaš.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch05 i ch06 — pasiv u conditionals i s modalima?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Modalni pasiv (ch05): modal + be + PP</b><br>can be done · must be checked · should be fixed · might be cancelled<br><b>Pasiv u conditionals (ch06):</b><br>If it is found, it will be returned. (C1 s pasivom)<br>If it were done earlier, it would be finished. (C2 s pasivom)</div></div>

    <!-- QUICK EXAM SUMMARY -->
    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item"><div class="qes-tag gap">// gap fill</div><div class="qes-steps"><b>1.</b> Aktiv ili pasiv? (tko vrši radnju?) · <b>2.</b> Koje vrijeme? → odaberi be oblik · <b>3.</b> Jednina/množina → was/were, is/are, has/have been · <b>4.</b> Glagol → PP (regular +ed / irregular)</div></div>
      <div class="qes-item"><div class="qes-tag mcq">// multiple choice</div><div class="qes-steps"><b>1.</b> Odmah eliminiraj PS oblik umjesto PP (was wrote ❌) · <b>2.</b> must been ❌ → must be ✓ · <b>3.</b> has repaired ❌ → has been repaired ✓ · <b>4.</b> was vs were (jednina/množina)</div></div>
      <div class="qes-item"><div class="qes-tag err">// error correction</div><div class="qes-steps">Provjeri: <b>PS umjesto PP</b> (was wrote ❌) · <b>must been</b> ❌ · <b>has repaired</b> (bez been ❌) · <b>was za množinu</b> ❌ · <b>from umjesto by</b> za agenta ❌</div></div>
    </div>

    <!-- NEXT CHAPTERS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo &amp; sljedeći koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter02.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 02</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Past Simple &amp; Continuous</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">was/were + PP — isti obrazac kao Past Continuous</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter03.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 03</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Present Perfect</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">has/have been + PP — isti PP oblici</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter05.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 05</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Modal glagoli</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">modal + be + PP · can be done · must be fixed</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter06.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 06</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Conditionals</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">If it is done… · pasiv u conditionals</div>
        </div>
      </div>
    </div>

    
    <div style="margin:32px 0 24px;padding:22px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(155,247,58,.06));border:1px solid var(--lime-border);border-radius:var(--r4)">
      <div style="font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--lime);margin-bottom:10px">// gramatika &mdash; zavr&scaron;eno</div>
      <div style="font-size:15px;font-weight:600;color:var(--t1);margin-bottom:8px">Ch01&ndash;Ch07 &mdash; sva gramatika pokrivena &#x1F3AF;</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6;margin-bottom:14px">
        Present Simple &middot; Past tenses &middot; Present Perfect &middot; Future &middot; Modali &middot; Conditionals &middot; <b>Pasiv</b> &#x2713;<br>
        Sljede&#263;i korak: <b>ispitne vje&scaron;tine</b> &mdash; vokabular, &ccaron;itanje, pisanje, slu&scaron;anje i MCQ taktika.
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:12px 14px;cursor:pointer" onclick="window.location='chapter08.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:5px">sljede&#263;e &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Ch08 &mdash; Vokabular</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:3px">kolokacije &middot; phrasal verbs &middot; teme</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;cursor:pointer" onclick="window.location='chapter12.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:5px">pre&scaron;ko&ccaron;i na &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2)">Ch12 &mdash; MCQ taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:3px">ako ima&scaron; malo vremena</div>
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
      <a href="chapter06.html" class="nav-btn">← Chapter 06</a>
      <a href="chapter08.html" class="nav-btn primary">Next chapter →</a>
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

var tabDone=[false,false,false];

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
    document.getElementById('sd-score-lbl').textContent=sc===SD.length?'Savrseno! Pasiv svladan. 🎉':sc>=8?'Odlicno! 💪':sc>=6?'Dobro! Ponovi tablicu pasivnih oblika.':'Vrati se na tablicu oblika.';
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

function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  window.scrollTo({top:0,behavior:'smooth'});
}

var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Present Simple pasiv: am/is/are + past participle. 'English' = subjekt, 'is spoken' = pasiv PS.",w:"✗ Netočno. Present Simple pasiv = is/am/are + past participle. Točan odgovor: is spoken."},
  q2:{c:"✓ Točno. Past Simple pasiv: was/were + past participle. 'The letter' = jednina → was. write → written (irregular PP).",w:"✗ Netočno. Past Simple pasiv: was/were + PP. 'The letter' = jednina → was written. Točan odgovor: was written."},
  q3:{c:"✓ Točno. Present Perfect pasiv: has/have been + past participle. 'The windows' = množina → have been cleaned.",w:"✗ Netočno. PP pasiv: has/have been + PP. 'windows' = množina → have been cleaned. Točan odgovor: have been cleaned."},
  q4:{c:"✓ Točno. PSt pasiv negativ: wasn't/weren't + PP. 'emails' = množina → weren't. send → sent (irregular PP).",w:"✗ Netočno. PSt pasiv negativ: wasn't (jednina) / weren't (množina) + PP. 'emails' = množina → weren't sent. Točan odgovor: weren't sent."},
  q5:{c:"✓ Točno. Past Simple pasiv: was/were + PP. 'The cake' = jednina → was made. make → made (irregular PP).",w:"✗ Netočno. Past Simple pasiv: was/were + PP. Jednina → was. make → made. Točan odgovor: was made."},
  q6:{c:"✓ Točno. Pasiv s modalnim: modal + be + past participle. 'must be checked' = obveza u pasivu.",w:"✗ Netočno. Modalni pasiv: modal + be + PP. must + be + checked. Točan odgovor: must be checked."},
  q7:{c:"✓ Točno. Pitanje u PSt pasivu: Was/Were + subjekt + PP? 'bridge' = jednina → Was. build → built (irregular PP).",w:"✗ Netočno. Pitanje u Past Simple pasivu: Was/Were + subjekt + PP? Jednina → Was. build → built. Točan odgovor: Was … built."},
  q8:{c:"✓ Točno. Present Continuous pasiv: is/are being + past participle. 'The road' = jednina → is being repaired.",w:"✗ Netočno. Present Continuous pasiv: is/are being + PP. 'road' = jednina → is being repaired. Točan odgovor: is being repaired."},
  q9:{c:"✓ Točno. Past Simple pasiv: was/were + PP. 'They' → were. invite → invited (regular). The party was given for them.",w:"✗ Netočno. Past Simple pasiv: was/were + PP. 'They' = množina → were invited. Točan odgovor: were invited."},
  q10:{c:"✓ Točno. Present Simple pasiv: is/are + PP. 'Rice' = nebrojiivo → is grown. grow → grown (irregular PP).",w:"✗ Netočno. Present Simple pasiv: is/are + PP. 'Rice' = jednina/nebrojivo → is. grow → grown. Točan odgovor: is grown."}
};
var FITB={
  'ps-pass':    "Present Simple pasiv: am/is/are + past participle. 'Coffee' = nebrojivo → is. grow → grown.",
  'pst-pass':   "Past Simple pasiv: was/were + PP. Jednina → was. build → built (irregular PP).",
  'pp-pass':    "Present Perfect pasiv: has/have been + PP. Jednina (he/she/it) → has been. send → sent.",
  'fut-pass':   "Future pasiv: will be + past participle. Isti za sve subjekte.",
  'mod-pass':   "Modalni pasiv: modal + be + PP. should + be + check = should be checked.",
  'pc-pass':    "Present Continuous pasiv: is/are being + PP. 'The bridge' = jednina → is being. repair → repaired."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch07',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':correct>=9?'Excellent!':correct>=7?'Good. Fokusiraj se na was/were i irregular PP.':correct>=5?'Vrati se na Learn — pasivne formule.':'Vrati se na Learn i idi polako.';
    document.getElementById('score').classList.add('show');
    if(correct>=8){document.getElementById('completionBadge').style.display='block';tabDone[2]=true;saveProgress();document.querySelectorAll('.tab')[2].classList.add('done-tab');}
  }
}

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
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap)return;
  var btns=wrap.querySelectorAll('.sd-btn');
  if(e.key==='1'&&btns[0])btns[0].click();
  if(e.key==='2'&&btns[1])btns[1].click();
  if(e.key==='3'&&btns[2])btns[2].click();
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);var fb=document.getElementById(fbId);
  if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();
  var btn=inp.parentElement.querySelector('.fitb-btn');
  if(!val)return;
  inp.disabled=true;if(btn)btn.disabled=true;
  fb.classList.add('show');
  var ok=val===answer.toLowerCase();
  inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');
  var exp=FITB[key]||'';
  fb.innerHTML=ok?'✓ Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:''):'✗ Your answer: <strong>'+(inp.value.trim()||'—')+'</strong> · Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:'');
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

var drillAnswered={},drillCorrect=0,drillTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(drillAnswered[id])return;
  drillAnswered[id]=true;if(isCorrect)drillCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){el.classList.add('sv-correct');if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong>';}}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong>';}}
  if(Object.keys(drillAnswered).length===drillTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=drillCorrect+'/'+drillTotal;
      document.getElementById('sv-score-lbl').textContent=drillCorrect===5?'Savršen! 🎉':drillCorrect>=4?'Odlično!':drillCorrect>=3?'Dobro — ponovi was/were i irregular PP.':'Vrati se na tablicu pasivnih oblika.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){btn.textContent='✓ Kopirano';btn.classList.add('copied');setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);});
}

var SD=[
  {s:"English _______ all over the world. (speak — PS pasiv)",        opts:["is spoken","was spoken","is speaking"],   ans:0, exp:"PS pasiv: is/am/are + PP. 'English' = jednina → is. speak → spoken."},
  {s:"The bridge _______ last year. (build — PSt pasiv)",             opts:["is built","was built","has been built"],   ans:1, exp:"'last year' = prošlost → Past Simple pasiv: was/were + PP. build → built."},
  {s:"The windows _______ just now. (clean — PP pasiv)",              opts:["were cleaned","have been cleaned","are cleaned"], ans:1, exp:"'just now' → Present Perfect pasiv: have been + PP. 'windows' = množina → have been."},
  {s:"The report _______ by Friday. (finish — Future pasiv)",         opts:["will finish","will be finished","is finished"], ans:1, exp:"Future pasiv: will be + PP. 'will be finished' — will + be + PP uvijek."},
  {s:"Phones _______ in the exam room. (not / allow — PS pasiv neg)", opts:["aren't allowed","weren't allowed","haven't been allowed"], ans:0, exp:"PS pasiv negativ (generalno pravilo): aren't + PP. 'Phones' = množina."},
  {s:"The car _______ at the moment. (repair — PC pasiv)",            opts:["is repaired","is being repaired","was repaired"], ans:1, exp:"PC pasiv: is/are being + PP. 'at the moment' = u tijeku → is being repaired."},
  {s:"This novel _______ by Tolkien. (write — PSt pasiv)",            opts:["was written","is written","has been written"], ans:0, exp:"Prošlost (specifična radnja) → Past Simple pasiv. write → written (irregular PP)."},
  {s:"All tickets _______ sold out. (modal pasiv)",                   opts:["must","must be","must been"],              ans:1, exp:"Modalni pasiv: modal + be + PP. 'must be sold' — be (ne been!) uz modalne."},
  {s:"Rice _______ in many countries. (grow — PS pasiv)",             opts:["grows","is grown","was grown"],            ans:1, exp:"PS pasiv za opće istine: is/are + PP. grow → grown. 'Rice' → is grown."},
  {s:"The new school _______ opened last month. Everyone is excited!", opts:["has been","was been","is been"], ans:0, exp:"PP pasiv: has/have been + PP. 'The new school' = jednina → has been. 'was been' i 'is been' ne postoje."}
];

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch07_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch07_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initSpeedDrill();

</script>`;

const CH07_JS = `// TRACKER: bilježi pogreške
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
    document.getElementById('sd-score-lbl').textContent=sc===SD.length?'Savrseno! Pasiv svladan. 🎉':sc>=8?'Odlicno! 💪':sc>=6?'Dobro! Ponovi tablicu pasivnih oblika.':'Vrati se na tablicu oblika.';
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

function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  window.scrollTo({top:0,behavior:'smooth'});
}

var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Present Simple pasiv: am/is/are + past participle. 'English' = subjekt, 'is spoken' = pasiv PS.",w:"✗ Netočno. Present Simple pasiv = is/am/are + past participle. Točan odgovor: is spoken."},
  q2:{c:"✓ Točno. Past Simple pasiv: was/were + past participle. 'The letter' = jednina → was. write → written (irregular PP).",w:"✗ Netočno. Past Simple pasiv: was/were + PP. 'The letter' = jednina → was written. Točan odgovor: was written."},
  q3:{c:"✓ Točno. Present Perfect pasiv: has/have been + past participle. 'The windows' = množina → have been cleaned.",w:"✗ Netočno. PP pasiv: has/have been + PP. 'windows' = množina → have been cleaned. Točan odgovor: have been cleaned."},
  q4:{c:"✓ Točno. PSt pasiv negativ: wasn't/weren't + PP. 'emails' = množina → weren't. send → sent (irregular PP).",w:"✗ Netočno. PSt pasiv negativ: wasn't (jednina) / weren't (množina) + PP. 'emails' = množina → weren't sent. Točan odgovor: weren't sent."},
  q5:{c:"✓ Točno. Past Simple pasiv: was/were + PP. 'The cake' = jednina → was made. make → made (irregular PP).",w:"✗ Netočno. Past Simple pasiv: was/were + PP. Jednina → was. make → made. Točan odgovor: was made."},
  q6:{c:"✓ Točno. Pasiv s modalnim: modal + be + past participle. 'must be checked' = obveza u pasivu.",w:"✗ Netočno. Modalni pasiv: modal + be + PP. must + be + checked. Točan odgovor: must be checked."},
  q7:{c:"✓ Točno. Pitanje u PSt pasivu: Was/Were + subjekt + PP? 'bridge' = jednina → Was. build → built (irregular PP).",w:"✗ Netočno. Pitanje u Past Simple pasivu: Was/Were + subjekt + PP? Jednina → Was. build → built. Točan odgovor: Was … built."},
  q8:{c:"✓ Točno. Present Continuous pasiv: is/are being + past participle. 'The road' = jednina → is being repaired.",w:"✗ Netočno. Present Continuous pasiv: is/are being + PP. 'road' = jednina → is being repaired. Točan odgovor: is being repaired."},
  q9:{c:"✓ Točno. Past Simple pasiv: was/were + PP. 'They' → were. invite → invited (regular). The party was given for them.",w:"✗ Netočno. Past Simple pasiv: was/were + PP. 'They' = množina → were invited. Točan odgovor: were invited."},
  q10:{c:"✓ Točno. Present Simple pasiv: is/are + PP. 'Rice' = nebrojiivo → is grown. grow → grown (irregular PP).",w:"✗ Netočno. Present Simple pasiv: is/are + PP. 'Rice' = jednina/nebrojivo → is. grow → grown. Točan odgovor: is grown."}
};
var FITB={
  'ps-pass':    "Present Simple pasiv: am/is/are + past participle. 'Coffee' = nebrojivo → is. grow → grown.",
  'pst-pass':   "Past Simple pasiv: was/were + PP. Jednina → was. build → built (irregular PP).",
  'pp-pass':    "Present Perfect pasiv: has/have been + PP. Jednina (he/she/it) → has been. send → sent.",
  'fut-pass':   "Future pasiv: will be + past participle. Isti za sve subjekte.",
  'mod-pass':   "Modalni pasiv: modal + be + PP. should + be + check = should be checked.",
  'pc-pass':    "Present Continuous pasiv: is/are being + PP. 'The bridge' = jednina → is being. repair → repaired."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch07',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':correct>=9?'Excellent!':correct>=7?'Good. Fokusiraj se na was/were i irregular PP.':correct>=5?'Vrati se na Learn — pasivne formule.':'Vrati se na Learn i idi polako.';
    document.getElementById('score').classList.add('show');
    if(correct>=8){document.getElementById('completionBadge').style.display='block';tabDone[2]=true;saveProgress();document.querySelectorAll('.tab')[2].classList.add('done-tab');}
  }
}

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
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap)return;
  var btns=wrap.querySelectorAll('.sd-btn');
  if(e.key==='1'&&btns[0])btns[0].click();
  if(e.key==='2'&&btns[1])btns[1].click();
  if(e.key==='3'&&btns[2])btns[2].click();
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);var fb=document.getElementById(fbId);
  if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();
  var btn=inp.parentElement.querySelector('.fitb-btn');
  if(!val)return;
  inp.disabled=true;if(btn)btn.disabled=true;
  fb.classList.add('show');
  var ok=val===answer.toLowerCase();
  inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');
  var exp=FITB[key]||'';
  fb.innerHTML=ok?'✓ Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:''):'✗ Your answer: <strong>'+(inp.value.trim()||'—')+'</strong> · Correct: <strong>'+answer+'</strong>'+(exp?' — '+exp:'');
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

var drillAnswered={},drillCorrect=0,drillTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(drillAnswered[id])return;
  drillAnswered[id]=true;if(isCorrect)drillCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){el.classList.add('sv-correct');if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong>';}}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong>';}}
  if(Object.keys(drillAnswered).length===drillTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=drillCorrect+'/'+drillTotal;
      document.getElementById('sv-score-lbl').textContent=drillCorrect===5?'Savršen! 🎉':drillCorrect>=4?'Odlično!':drillCorrect>=3?'Dobro — ponovi was/were i irregular PP.':'Vrati se na tablicu pasivnih oblika.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){btn.textContent='✓ Kopirano';btn.classList.add('copied');setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);});
}

var SD=[
  {s:"English _______ all over the world. (speak — PS pasiv)",        opts:["is spoken","was spoken","is speaking"],   ans:0, exp:"PS pasiv: is/am/are + PP. 'English' = jednina → is. speak → spoken."},
  {s:"The bridge _______ last year. (build — PSt pasiv)",             opts:["is built","was built","has been built"],   ans:1, exp:"'last year' = prošlost → Past Simple pasiv: was/were + PP. build → built."},
  {s:"The windows _______ just now. (clean — PP pasiv)",              opts:["were cleaned","have been cleaned","are cleaned"], ans:1, exp:"'just now' → Present Perfect pasiv: have been + PP. 'windows' = množina → have been."},
  {s:"The report _______ by Friday. (finish — Future pasiv)",         opts:["will finish","will be finished","is finished"], ans:1, exp:"Future pasiv: will be + PP. 'will be finished' — will + be + PP uvijek."},
  {s:"Phones _______ in the exam room. (not / allow — PS pasiv neg)", opts:["aren't allowed","weren't allowed","haven't been allowed"], ans:0, exp:"PS pasiv negativ (generalno pravilo): aren't + PP. 'Phones' = množina."},
  {s:"The car _______ at the moment. (repair — PC pasiv)",            opts:["is repaired","is being repaired","was repaired"], ans:1, exp:"PC pasiv: is/are being + PP. 'at the moment' = u tijeku → is being repaired."},
  {s:"This novel _______ by Tolkien. (write — PSt pasiv)",            opts:["was written","is written","has been written"], ans:0, exp:"Prošlost (specifična radnja) → Past Simple pasiv. write → written (irregular PP)."},
  {s:"All tickets _______ sold out. (modal pasiv)",                   opts:["must","must be","must been"],              ans:1, exp:"Modalni pasiv: modal + be + PP. 'must be sold' — be (ne been!) uz modalne."},
  {s:"Rice _______ in many countries. (grow — PS pasiv)",             opts:["grows","is grown","was grown"],            ans:1, exp:"PS pasiv za opće istine: is/are + PP. grow → grown. 'Rice' → is grown."},
  {s:"The new school _______ opened last month. Everyone is excited!", opts:["has been","was been","is been"], ans:0, exp:"PP pasiv: has/have been + PP. 'The new school' = jednina → has been. 'was been' i 'is been' ne postoje."}
];

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch07_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch07_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
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
