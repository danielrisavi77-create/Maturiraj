// Maturiraj.hr — Engleski niža razina · Poglavlje 4
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useRef } from "react";

export default function ENG_NIZA_CH04({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  navRef.current = { onBack, onNext, onPrev, onNavigate };

  useEffect(() => {
    const styleId = "skripta-ch04-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH04_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch04-js";
    scriptEl.textContent = CH04_JS;
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
      if (num === 5 && nav.onNext) nav.onNext();
      else if (num === 3 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch04-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch04-root"
      dangerouslySetInnerHTML={{ __html: CH04_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH04_CSS = `
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

const CH04_BODY = `<div class="shell">

<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">&#x2715; Zatvori</button>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter01.html'"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter02.html'"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter03.html'"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
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
  <div class="sb-item" onclick="window.location='chapter01.html'" style="cursor:pointer"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter02.html'" style="cursor:pointer"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter03.html'" style="cursor:pointer"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
  <div class="sb-item active"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
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
  <div class="sb-footer">04 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter03.html'" style="cursor:pointer">← chapters</span>
    <span class="bc-sep">/</span><span>grammar</span>
    <span class="bc-sep">/</span><span class="bc-active">future-will-&amp;-going-to</span>
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
      <div class="hero-eyebrow">chapter 04 / 15 · grammar</div>
      <h1 class="hero-title">Future: <span>will</span><br>&amp; going to</h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~30 min</span>
        <span class="hero-badge hb-level">niža razina</span>
        <span class="hero-badge hb-chapter">04 / 12</span>
      </div>
      <p class="hero-sub">Spontana odluka vs plan · predviđanje s dokazom vs bez · obećanja i ponude</p>
      <div class="progress-track"><div class="progress-bar" style="width:33%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-sky">will</span>
      <span class="pill pill-violet">going to</span>
      <span class="pill pill-amber">Predviđanje</span>
      <span class="pill pill-lime">Spontana odluka</span>
      <span class="pill pill-red">Exam traps</span>
    </div>

    <div class="sec-label">// at a glance</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon sky">WL</div><div class="stat-name">will</div><div class="stat-desc">Spontana odluka · obećanja · ponude · predviđanje bez dokaza. Forma: <b style="color:var(--sky)">will + infinitiv</b></div></div>
      <div class="stat-card"><div class="stat-icon violet">GT</div><div class="stat-name">going to</div><div class="stat-desc">Unaprijed doneseni plan · namjera · predviđanje s dokazom. Forma: <b style="color:var(--violet)">am/is/are going to + inf.</b></div></div>
      <div class="stat-card"><div class="stat-icon amber">PRE</div><div class="stat-name">Predviđanje</div><div class="stat-desc"><em style="color:var(--sky)">will</em> bez dokaza (I think…) · <em style="color:var(--violet)">going to</em> s dokazom (Look! …)</div></div>
      <div class="stat-card"><div class="stat-icon lime">PC</div><div class="stat-name">Present Cont.</div><div class="stat-desc">Dogovoreni planovi: <em style="color:var(--lime)">We are meeting them tomorrow.</em> (vidi ch01)</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck sky">will — spontano</div><div class="cv">Odluka donesena <b>u trenutku govora</b>. 'The phone is ringing!' → 'I'll get it!' (tek sam odlučio)</div></div>
      <div class="concept-row"><div class="ck sky">will — obećanja</div><div class="cv">Obećanja, prijetnje, ponude: <code>I'll call you.</code> · <code>I won't tell anyone.</code> · <code>Shall I help?</code></div></div>
      <div class="concept-row"><div class="ck sky">will — predviđanje</div><div class="cv">Predviđanje <b>bez vidljivih dokaza</b>, osobno mišljenje: <code>I think it will rain tomorrow.</code></div></div>
      <div class="concept-row"><div class="ck violet">going to — plan</div><div class="cv">Plan ili namjera donesena <b>PRIJE trenutka govora</b>: <code>We're going to visit Paris next week.</code> (već odlučeno)</div></div>
      <div class="concept-row"><div class="ck violet">going to — dokaz</div><div class="cv">Predviđanje s <b>vidljivim dokazom</b>: <code>Look at those clouds — it's going to rain!</code></div></div>
      <div class="concept-row"><div class="ck red">Ključna razlika</div><div class="cv"><b>will</b> = odlučujem SADA · <b>going to</b> = odlučio sam RANIJE · <b>vidljivi dokaz</b> → going to</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// ako zapamtiš samo ovo — 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🧠 panic-proof — 3 rules that cover 90% of exam questions</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Spontana odluka / obećanje / ponuda</b> → <b style="color:var(--sky)">will</b> · "I'll do it!" (tek sam odlučio)</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Unaprijed doneseni plan / namjera</b> → <b style="color:var(--violet)">going to</b> · "I'm going to study tonight." (već sam odlučio)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Vidljivi dokaz (Look!/Watch!)</b> → <b style="color:var(--violet)">going to</b> · bez dokaza (I think/probably) → <b style="color:var(--sky)">will</b></div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kada koristim will?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>will = 4 situacije:</b><br>1. Spontana odluka — <span class="ok">I'll get it!</span> (tek sad odlučio)<br>2. Obećanje — <span class="ok">I'll call you.</span><br>3. Ponuda — <span class="ok">I'll help you.</span> / Shall I...?<br>4. Predviđanje bez dokaza — <span class="ok">I think it will rain.</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kada koristim going to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>going to = 2 situacije:</b><br>1. Plan/namjera ranije donesen — <span class="ok">I'm going to study medicine.</span> (već odlučio)<br>2. Predviđanje s vidljivim dokazom — <span class="ok">Look at those clouds — it's going to rain!</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Tvorba will vs going to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>will:</b> <span class="ok">will + infinitiv</span> — isti za SVE subjekte (nema he/she/it promjene!)<br>
        I/you/he/she/it/we/they <b>will go</b> · Neg: <b>won't</b> (will not) · Pit: <b>Will</b> you go?<br><br>
        <b>going to:</b> <span style="color:var(--violet)">am/is/are going to + infinitiv</span><br>
        I <b>am</b> going to · He/she/it <b>is</b> going to · You/we/they <b>are</b> going to
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Najčešće greške na maturi?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">&#x274C; <b>I will to go</b> → &#x2713; I will go (naked infinitive!)<br>&#x274C; <b>She will goes</b> → &#x2713; She will go (nema -s uz will!)<br>&#x274C; <b>Look! It will rain.</b> → &#x2713; It's going to rain. (vidljivi dokaz = going to)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch01: Present Continuous za budućnost?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PC za budućnost</b> = konkretno dogovoreni planovi s točnim detaljima:<br><span class="ok">We are meeting at 8. (restaurant booked)</span><br>Razlika: going to = namjera · PC = fiksni, potvrđeni plan s detaljima</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol — 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">🚨 if you panic on the exam — do this</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Je li odluka donesena <b>upravo sada</b>? → <b style="color:var(--sky)">will</b></div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Je li to <b>obećanje, prijetnja ili ponuda</b>? → <b style="color:var(--sky)">will</b></div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Vidiš <b>Look! / Watch!</b> + predviđanje? → <b style="color:var(--violet)">going to</b></div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Vidiš <b>I think / probably / maybe</b> bez dokaza? → <b style="color:var(--sky)">will</b></div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Je li to plan dogovoren <b>ranije</b>? (already decided, booked, signed…) → <b style="color:var(--violet)">going to</b></div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter03.html" class="nav-btn">← Chapter 03</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn more →</span>
    </div>
  </div>

  <!-- ══════════ LAYER 1 — LEARN ══════════ -->
  <div class="layer" id="l1">

    <div class="sec-label">// will — tvorba i upotreba</div>
    <p class="prose"><strong>will</strong> koristimo za spontane odluke, obećanja, ponude i predviđanja bez konkretnih dokaza. Isti oblik za sve subjekte — nema -s za he/she/it!</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge will">WILL</div>
        <div><div class="gram-title">will — tvorba</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula" style="border-left-color:var(--sky)">
          <button class="copy-btn" onclick="copyFormula(this,'will Pozitiv: Subjekt + will + infinitiv (svi subjekti jednaki)')">copy</button>
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">Svi subjekti</span> + <span class="val" style="color:var(--sky)">will</span> + <span class="val" style="color:var(--sky)">infinitiv</span> → I <span class="val" style="color:var(--sky)">will help</span>. · She <span class="val" style="color:var(--sky)">will come</span>.<br>
          Kratice: I'll, you'll, he'll, she'll, we'll, they'll<br>
          <span style="color:var(--t3);font-size:12px">⚠ Nema -s za he/she/it! "She will goes" ❌ → "She will go" ✓</span>
        </div>
        <div class="formula" style="border-left-color:var(--sky)">
          <button class="copy-btn" onclick="copyFormula(this,'will Negativ: won't (will not) + infinitiv')">copy</button>
          <span class="lbl">− Negativ</span><br>
          <span class="sub">Svi subjekti</span> + <span class="kw">won't</span> + <span class="val" style="color:var(--sky)">infinitiv</span> → I <span class="kw">won't tell</span> anyone. · He <span class="kw">won't come</span>.<br>
          <span style="color:var(--red);font-size:12px">won't = will not (skraćenica — uvijek jednom riječju!)</span>
        </div>
        <div class="formula" style="border-left-color:var(--sky)">
          <button class="copy-btn" onclick="copyFormula(this,'will Pitanje: Will + subjekt + infinitiv?')">copy</button>
          <span class="lbl">? Pitanje</span><br>
          <span class="kw" style="color:var(--sky)">Will</span> + <span class="sub">subjekt</span> + <span class="val" style="color:var(--sky)">infinitiv</span>? → <span class="kw" style="color:var(--sky)">Will</span> you help me? · <span class="kw" style="color:var(--sky)">Will</span> she come?<br>
          <span style="color:var(--t3);font-size:12px">Poseban oblik ponude/prijedloga: <b>Shall I</b> + inf.? (ponuda) · <b>Shall we</b> + inf.? (prijedlog zajedničke radnje)<br>
          <em style="color:var(--t3)">Shall I carry that? (nudim pomoć) · Shall we go now? (predlažem da idemo zajedno)</em></span>
        </div>
        <div class="callout callout-warn" style="margin-top:14px">
          <span class="callout-icon">⚠</span>
          <div class="callout-body">
            <div class="callout-title">will + infinitiv BEZ "to"!</div>
            <div class="callout-text">
              ❌ <em>I will <b>to go</b> there.</em> → ✅ <em>I will <b>go</b> there.</em><br>
              ❌ <em>She will <b>to call</b> you.</em> → ✅ <em>She will <b>call</b> you.</em><br>
              will je modalni glagol → uvijek naked infinitive (bez "to")
            </div>
          </div>
        </div>
        <div class="sub-label">→ Primjeri po situacijama</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">'It's cold.' — 'I <b class="will">will close</b> the window.'</div><span class="ex-arr">→</span><div class="ex-hr">spontana odluka — upravo sam odlučio</div></div>
          <div class="ex"><div class="ex-en">I <b class="will">won't tell</b> anyone your secret.</div><span class="ex-arr">→</span><div class="ex-hr">obećanje — will (won't = will not)</div></div>
          <div class="ex"><div class="ex-en">'I'll carry that for you!' / 'Shall I help?'</div><span class="ex-arr">→</span><div class="ex-hr">ponuda — will / Shall I…?</div></div>
          <div class="ex"><div class="ex-en">I think it <b class="will">will be</b> sunny tomorrow.</div><span class="ex-arr">→</span><div class="ex-hr">predviđanje bez dokaza (I think) → will</div></div>
          <div class="ex"><div class="ex-en">If you do that again, I <b class="will">will tell</b> Mum!</div><span class="ex-arr">→</span><div class="ex-hr">prijetnja → will</div></div>
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera</div>
        <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "She will goes to the party" nije točno?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">Will je modalni glagol — iza njega uvijek ide <b>goli infinitiv bez -s</b>. Nema he/she/it promjene uz will! ✅ <b>She will go to the party.</b></div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// going to — tvorba i upotreba</div>
    <p class="prose"><strong>going to</strong> koristimo za planove koje smo donijeli <em>prije</em> trenutka govora i za predviđanja temeljena na vidljivim znakovima u sadašnjosti.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge going">GOING TO</div>
        <div><div class="gram-title">going to — tvorba</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'going to Pozitiv: I am / he-she-it is / you-we-they are going to + infinitiv')">copy</button>
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">I</span> + <span class="val">am going to</span> + inf. → I <span class="val">am going to study</span>.<br>
          <span class="sub">He / She / It</span> + <span class="val">is going to</span> + inf. → She <span class="val">is going to leave</span>.<br>
          <span class="sub">You / We / They</span> + <span class="val">are going to</span> + inf. → They <span class="val">are going to win</span>.
        </div>
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'going to Negativ: am not / isn't / aren't going to + infinitiv')">copy</button>
          <span class="lbl">− Negativ</span><br>
          I <span class="kw">am not going to</span> wait. · He <span class="kw">isn't going to</span> come. · They <span class="kw">aren't going to</span> win.
        </div>
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'going to Pitanje: Am I / Is he-she-it / Are you-we-they going to + infinitiv?')">copy</button>
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Am</span> I going to pass? · <span class="kw">Is</span> she going to come? · <span class="kw">Are</span> they going to help?
        </div>
        <div class="callout callout-purple" style="margin-top:14px">
          <span class="callout-icon">💡</span>
          <div class="callout-body">
            <div class="callout-title">am/is/are — isti obrazac kao Present Continuous!</div>
            <div class="callout-text">
              going to koristi iste pomoćne glagole kao Present Continuous:<br>
              I <b>am</b> · he/she/it <b>is</b> · you/we/they <b>are</b><br>
              Ako znaš PC, znaš i going to tvorbu!
            </div>
          </div>
        </div>
        <div class="sub-label">→ Primjeri po situacijama</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">I <b class="pc">am going to study</b> medicine. I've already applied.</div><span class="ex-arr">→</span><div class="ex-hr">namjera donesena ranije (already applied)</div></div>
          <div class="ex"><div class="ex-en">We <b class="pc">are going to visit</b> Rome next month. We've booked.</div><span class="ex-arr">→</span><div class="ex-hr">plan dogovoren unaprijed (booked)</div></div>
          <div class="ex"><div class="ex-en">Look at those clouds! It <b class="pc">is going to rain</b>!</div><span class="ex-arr">→</span><div class="ex-hr">vidljivi dokaz → going to</div></div>
          <div class="ex"><div class="ex-en">Watch out! He <b class="pc">is going to fall</b>!</div><span class="ex-arr">→</span><div class="ex-hr">neposredni vidljivi dokaz → going to</div></div>
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera</div>
        <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "Look! It will rain!" nije točno?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">"Look!" = vidljivi dokaz (oblaci, situacija) → predviđanje s dokazom = <b style="color:var(--violet)">going to</b>. will koristimo za predviđanja BEZ dokaza (I think, probably). ✅ <b>Look! It's going to rain!</b></div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// will vs going to — direktna usporedba</div>
    <p class="prose">Ovo je <strong>ključna razlika</strong> za maturu. Usporedi identične situacije — ista rečenica, različiti kontekst, drugačiji oblik.</p>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head will">⚡ will — odlučujem SADA</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Spontana odluka</b>'The phone's ringing!' → 'I'll get it!'</div>
          <div class="cmp-row"><b>Obećanje</b>'I'll call you tomorrow, I promise.'</div>
          <div class="cmp-row"><b>Ponuda</b>'You look tired. I'll make you some tea.'</div>
          <div class="cmp-row"><b>Pred. bez dokaza</b>'I think it will be cold next week.'</div>
          <div class="cmp-row"><b>Prijetnja</b>'Do that again and I will tell Mum!'</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head going">📋 going to — odlučio sam RANIJE</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Plan/namjera</b>'I'm going to call Tom tonight.' (već sam odlučio)</div>
          <div class="cmp-row"><b>S dokazom</b>'She's already bought the tickets — she's going to fly.'</div>
          <div class="cmp-row"><b>Pred. s dokazom</b>'Look at the sky! It's going to snow!'</div>
          <div class="cmp-row"><b>Namjera</b>'I'm going to lose weight this year.' (moja namjera)</div>
          <div class="cmp-row"><b>Vidljivi znak</b>'Watch out! You're going to spill that!'</div>
        </div>
      </div>
    </div>

    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">Dijagonalni test — pitaj se ova 2 pitanja</div>
        <div class="callout-text">
          <b>1. Je li odluka donesena SADA ili RANIJE?</b><br>
          Sada = will · Ranije = going to<br><br>
          <b>2. Ima li VIDLJIVIH ZNAKOVA/DOKAZA?</b><br>
          Da (Look!, Watch!) = going to · Ne (I think, probably) = will
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// signal words i kontekst</div>
    <div class="signal-grid">
      <div class="sig-card">
        <div class="sig-head will">// will — signali</div>
        <div class="chips">
          <span class="chip will">I think</span><span class="chip will">probably</span>
          <span class="chip will">maybe</span><span class="chip will">perhaps</span>
          <span class="chip will">I'm sure</span><span class="chip will">I promise</span>
          <span class="chip will">I bet</span><span class="chip will">Shall I…?</span>
          <span class="chip will">I'll + spontana</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head going">// going to — signali</div>
        <div class="chips">
          <span class="chip going">Look!</span><span class="chip going">Watch out!</span>
          <span class="chip going">already decided</span><span class="chip going">already booked</span>
          <span class="chip going">I intend to</span><span class="chip going">I plan to</span>
          <span class="chip going">I've decided</span><span class="chip going">be careful!</span>
        </div>
      </div>
    </div>

    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">"gonna" — što je to?</div>
        <div class="callout-text">
          <b>gonna</b> = neformalna izgovorena skraćenica za <b>going to</b>.<br>
          Možeš je čuti u pjesmama, filmovima i listening zadacima: <em>"I'm gonna call you"</em> = <em>"I'm going to call you"</em><br>
          <b>Na pisanom ispitu nikad ne piši "gonna"</b> — uvijek piši puni oblik <em>going to</em>.<br>
          Ako je vidiš u tekstu za čitanje ili slušanje → čitaj je kao going to.
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">ℹ️</span>
      <div class="callout-body">
        <div class="callout-title">Veza s ch01 — Present Continuous za budućnost</div>
        <div class="callout-text">
          Present Continuous (am/is/are + -ing) TAKOĐER se koristi za budućnost — za <b>konkretno dogovorene planove</b>:<br>
          <em>We <b>are meeting</b> them at 7.</em> · <em>She <b>is flying</b> to Rome on Friday.</em><br>
          PC za budućnost ≈ going to. Obje forme su prihvatljive za planirane radnje na nižoj razini mature.
        </div>
      </div>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">📡 matura radar — zamke i gdje se pojavljuju</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>will + to (infinitiv s "to")</b><br><em>I will to go</em> ❌ → <em>I will <b style="color:var(--sky)">go</b></em> ✓ · will je modalni glagol → naked infinitive uvijek!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>She will goes / he will has</b> — dodavanje -s uz will<br><em>She will goes</em> ❌ → <em>She will <b style="color:var(--sky)">go</b></em> ✓ · will = isti za sve subjekte</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>will umjesto going to uz vidljivi dokaz</b><br><em>Look! It will rain!</em> ❌ → <em>Look! It <b style="color:var(--violet)">is going to</b> rain!</em> ✓ · Look!/Watch! = going to uvijek</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>going to umjesto will za spontanu odluku</b><br><em>'The phone's ringing!' → 'I'm going to get it!'</em> ❌ → <em>'I'll get it!'</em> ✓ · spontana = will</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>Pogrešan am/is/are uz going to</b><br><em>She are going to leave</em> ❌ → <em>She <b style="color:var(--violet)">is</b> going to leave</em> ✓ · she = is, they = are, I = am</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Gap fill:</b> kontekst → spontano ili planirano? → vidljivi dokaz? → will ili going to<br><b>MCQ:</b> Look!/Watch! → going to · I think/probably → will · spontana situacija → will<br><b>Error correction:</b> will to go · she will goes · will uz Look!</div></div>
      </div>
    </div>

    <!-- WHY NOT THE OTHER FORM -->
    <hr class="divider">
    <div class="sec-label">// zašto NIJE drugi odgovor?</div>
    <p class="prose">Najtipičniji primjeri s ispita — kontekst određuje oblik.</p>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "'It's hot in here.' — 'I <em style="color:var(--red)">am going to open</em> the window.'" — zašto nije going to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: 'I'll open the window.'</b><br>Odluka je donesena UPRAVO SADA, kao reakcija na situaciju (vruće) → <b>will</b>. going to bi koristili da si već ranije planirao otvoriti prozor. Spontana reakcija = will uvijek.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "I think it <em style="color:var(--red)">is going to be</em> a good film." — zašto nije going to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: I think it will be a good film.</b><br>"I think" = osobno mišljenje bez vidljivih dokaza → <b>will</b> za predviđanje. going to za predviđanje koristimo SAMO kad imamo konkretne vidljive znakove (Look!, Watch!), ne kad iznosimo mišljenje.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "Watch out! That vase <em style="color:var(--red)">will fall</em>!" — zašto nije will?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: That vase is going to fall!</b><br>"Watch out!" = vidimo da se vaza klima, neposredna opasnost je vidljiva → <b>going to</b>. will koristimo za predviđanje bez vidljivih znakova. Svaki puta kad vidiš Look!/Watch out! u kontekstu → going to.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "She <em style="color:var(--red)">will study</em> French next year. She's already enrolled." — zašto nije will?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: She is going to study French next year.</b><br>"Already enrolled" = plan je dogovoren PRIJE trenutka govora → <b>going to</b>. Ključna rič: "already" — ako je nešto već dogovoreno, rezervirano ili plaćeno → going to.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "'Can you help me move this?' — 'Of course, I <em style="color:var(--red)">am going to help</em> you!'" — zašto nije going to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: 'Of course, I'll help you!'</b><br>Spontana ponuda kao odgovor na zahtjev → <b>will</b>. Nisi planirao pomoći unaprijed — tek si odlučio. Ponude, pristanci, spontane reakcije = will uvijek.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "They <em style="color:var(--red)">will are going to</em> travel around Europe." — što je greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Biraj JEDNO: will ili going to — nikad oba!</b><br>Točno: <em>They <b>will</b> travel around Europe.</em> ili <em>They <b>are going to</b> travel around Europe.</em><br>will i going to su alternativni oblici — nikad se ne kombiniraju u jednu rečenicu.</div>
    </div>

    <!-- WILL VS GOING TO MINI DRILL -->
    <hr class="divider">
    <div class="sec-label">// will vs going to drill — odaberi ispravni oblik</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Klikni na ispravni oblik. Pazi na kontekst!</p>
    <div class="sv-drill">
      <div class="sv-q">
        <div class="sv-sent">'I'm cold.' — 'I _______ make you some hot tea.' (spontana ponuda)</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'d1',true,'will make')">will make</div>
          <div class="sv-opt" onclick="svAns(this,'d1',false,'will make')">am going to make</div>
        </div>
        <div class="sv-fb" id="d1fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">She _______ study in Paris next year. She's already been accepted. (plan s dokazom)</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'d2',false,'is going to study')">will study</div>
          <div class="sv-opt" onclick="svAns(this,'d2',true,'is going to study')">is going to study</div>
        </div>
        <div class="sv-fb" id="d2fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">I think the meeting _______ finish early today. (predviđanje bez dokaza)</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'d3',true,'will finish')">will finish</div>
          <div class="sv-opt" onclick="svAns(this,'d3',false,'will finish')">is going to finish</div>
        </div>
        <div class="sv-fb" id="d3fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">Look at those dark clouds! It _______ storm! (vidljivi dokaz)</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'d4',false,'is going to storm')">will storm</div>
          <div class="sv-opt" onclick="svAns(this,'d4',true,'is going to storm')">is going to storm</div>
        </div>
        <div class="sv-fb" id="d4fb"></div>
      </div>
      <div class="sv-q">
        <div class="sv-sent">I promise I _______ forget your birthday this year! (obećanje)</div>
        <div class="sv-opts">
          <div class="sv-opt" onclick="svAns(this,'d5',true,'won't forget')">won't forget</div>
          <div class="sv-opt" onclick="svAns(this,'d5',false,'won't forget')">am not going to forget</div>
        </div>
        <div class="sv-fb" id="d5fb"></div>
      </div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <!-- DECISION TREE -->
    <hr class="divider">
    <div class="sec-label">// bonus &mdash; PS i PC za budu&#263;nost</div>
    <p class="prose" style="margin-bottom:10px">Will i going to nisu jedini na&#269;ini izra&#382;avanja budu&#263;nosti u engleskom. Ova dva oblika pojavljuju se na NCVVO ispitima &mdash; prepoznaj ih!</p>

    <div class="callout callout-tip" style="margin-bottom:8px">
      <span class="callout-icon">&#x1F4C5;</span>
      <div class="callout-body">
        <div class="callout-title">Present Simple za budu&#263;nost &mdash; raspored, vozni red</div>
        <div class="callout-text">
          Koristimo PS za <b>slu&#382;beni raspored</b> ili <b>vro&#382;ni red</b> &mdash; fiksni, nepromjenjivi doga&#273;aji.<br>
          <em>The train <b>leaves</b> at 8:15 tomorrow.</em> (vozni red)<br>
          <em>The concert <b>starts</b> at 7 pm on Friday.</em> (program)<br>
          <em>School <b>finishes</b> next week.</em> (slu&#382;beni raspored)<br>
          <span style="color:var(--t3);font-size:12px">Signal rije&#269;i: tomorrow, next week, on Friday, at [vrijeme]</span>
        </div>
      </div>
    </div>
    <div class="callout callout-tip" style="margin-bottom:8px">
      <span class="callout-icon">&#x1F91D;</span>
      <div class="callout-body">
        <div class="callout-title">Present Continuous za budu&#263;nost &mdash; dogovoreni planovi</div>
        <div class="callout-text">
          Koristimo PC za <b>osobni dogovor</b> koji je ve&#263; organiziran (ima konkretnih detalja).<br>
          <em>We <b>are meeting</b> at 8 tomorrow evening.</em> (ve&#263; dogovoreno)<br>
          <em>She <b>is flying</b> to London next Monday.</em> (rezerviran let)<br>
          <em>I <b>am seeing</b> the doctor on Thursday.</em> (zakazan termin)<br>
          <span style="color:var(--t3);font-size:12px">Signal: ve&#263; je dogovoreno, ima konkretnih detalja (tko, kada, gdje)</span>
        </div>
      </div>
    </div>
    <div class="callout callout-warn" style="margin-bottom:8px">
      <span class="callout-icon">&#x26A0;</span>
      <div class="callout-body">
        <div class="callout-title">Kada koristiti &#353;to &mdash; brzi pregled</div>
        <div class="callout-text">
          <b>will</b> &rarr; spontana odluka u trenutku govora: <em>I'll get the phone!</em><br>
          <b>going to</b> &rarr; plan koji postoji: <em>I'm going to study tonight.</em><br>
          <b>PC</b> &rarr; dogovoreni plan: <em>We're meeting at 8.</em><br>
          <b>PS</b> &rarr; slu&#382;beni raspored: <em>The train leaves at 9.</em>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// decision tree — will ili going to?</div>
    <p class="prose">Slijedi korake kad nisi siguran.</p>
    <div class="dtree">
      <div class="dt-node question">❓ <strong>Korak 1:</strong> Je li to <b>spontana odluka, obećanje ili ponuda</b>?</div>
      <div class="dt-row">
        <div class="dt-branch"><div class="dt-node yes-ps" style="background:var(--sky-dim);border-color:var(--sky-border);color:var(--sky)">✅ DA → <strong>will</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· I'll do it / I promise / Shall I…?</small></div></div>
        <div class="dt-connector">NE ↓</div>
      </div>
      <div class="dt-indent">
        <div class="dt-node question">❓ <strong>Korak 2:</strong> Vidiš <b>Look! / Watch out!</b> ili drugi vidljivi dokaz?</div>
        <div class="dt-row">
          <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>going to</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· predviđanje s vidljivim dokazom</small></div></div>
          <div class="dt-connector">NE ↓</div>
        </div>
        <div class="dt-indent">
          <div class="dt-node question">❓ <strong>Korak 3:</strong> Vidiš <b>I think / probably / maybe</b>?</div>
          <div class="dt-row">
            <div class="dt-branch"><div class="dt-node yes-ps" style="background:var(--sky-dim);border-color:var(--sky-border);color:var(--sky)">✅ DA → <strong>will</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· predviđanje bez dokaza</small></div></div>
            <div class="dt-connector">NE ↓</div>
          </div>
          <div class="dt-indent">
            <div class="dt-node question">❓ <strong>Korak 4:</strong> Je li plan dogovoren <b>ranije</b>? (already booked, decided, signed…)</div>
            <div class="dt-row">
              <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>going to</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· unaprijed doneseni plan</small></div></div>
              <div class="dt-connector">NE ↓</div>
            </div>
            <div class="dt-indent">
              <div class="dt-node yes-pc">📌 Namjera bez specifičnog dokaza → <strong>going to</strong> (ili will — oba mogu biti točna)</div>
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
    <div class="kbd-hint">⌨️ Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor · Speed drill: <span class="kbd">W</span> = will · <span class="kbd">G</span> = going to</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 · spontana odluka</div><div class="q-text">'The phone is ringing!' — '_____ it.' (get)</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> I'm going to get</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> I'll get</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> I get</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> I am getting</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 · plan dogovoren unaprijed</div><div class="q-text">My sister _______ (visit) her friend in Madrid. She's already booked the flight.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> will visit</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">B</span> is going to visit</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">C</span> visits</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> are going to visit</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 · predviđanje s dokazom</div><div class="q-text">Look at those dark clouds! It _______ (rain).</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> will rain</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> rains</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> is going to rain</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> are going to rain</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 · obećanje</div><div class="q-text">Don't worry — I _______ (call) you as soon as I arrive. I promise!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">A</span> will call</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> am going to call</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> will to call</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> calls</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 · predviđanje bez dokaza</div><div class="q-text">I think our team _______ (win) the championship this year.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">A</span> will win</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">B</span> is going to win</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> will to win</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> wins</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 · negacija · obećanje</div><div class="q-text">I _______ (not/tell) anyone your secret. Trust me!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> am not going to tell</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">B</span> won't tell</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">C</span> will not to tell</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> don't tell</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 · plan s detaljima</div><div class="q-text">We _______ (catch) the 5 o'clock train next Saturday. We've already bought tickets.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> will catch</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">B</span> is going to catch</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">C</span> are going to catch</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> will to catch</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 · ponuda · Shall I…?</div><div class="q-text">You look really tired. _______ (carry) those bags for you?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> Will I carry</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> Am I going to carry</div><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">C</span> Shall I carry</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> Do I carry</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 · vidljivi dokaz · Look!</div><div class="q-text">Look! She's lost her balance — she _______ (fall)!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> will fall</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">B</span> is going to fall</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">C</span> are going to fall</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> falls</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 · prijetnja · kontekst</div><div class="q-text">If you do that one more time, I _______ (tell) Mum!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">A</span> will tell</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> am going to tell</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">C</span> will to tell</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> going to tell</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="q-block" id="q11"><div class="q-head"><div class="q-meta">11 / 15 · PC za budu&#263;nost · dogovoreni plan</div><div class="q-text">We _______ friends for dinner at 8. We booked the restaurant last week.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">A</span> will meet</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">B</span> are going to meet</div><div class="q-opt" onclick="ans(this,'q11',true)" tabindex="0"><span class="q-letter">C</span> are meeting</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">D</span> meet</div></div><div class="q-expl" id="q11e" aria-live="polite"></div></div>
<div class="q-block" id="q12"><div class="q-head"><div class="q-meta">12 / 15 · PC vs going to · razlika</div><div class="q-text">'I can't make it on Friday.' — 'That's fine. We _______ on Saturday instead.' (dogovaramo upravo sada)</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">A</span> are meeting</div><div class="q-opt" onclick="ans(this,'q12',true)" tabindex="0"><span class="q-letter">B</span> are going to meet</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">C</span> will meet</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">D</span> meet</div></div><div class="q-expl" id="q12e" aria-live="polite"></div></div>
<div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/12</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">↺ Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">🏆</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje završeno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">04 · Future: will &amp; going to<br>Nastavi na Poglavlje 05 →</div>
      </div>
    </div>

    <!-- SPEED DRILL -->
    <hr class="divider">
    <div class="sec-label">// ⚡ speed recognition drill — will ili going to?</div>
    <p class="prose" style="margin-bottom:6px">10 rečenica s kontekstom. Odaberi što brže možeš. <span style="font-family:var(--mono);font-size:12px;color:var(--t3)">Keyboard: <span style="color:var(--t2)">W</span> = will · <span style="color:var(--t2)">G</span> = going to</span></p>
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
    <div class="sec-label">// 🔴 error correction drill — pronađi grešku</div>
    <p class="prose" style="margin-bottom:14px">Svaka rečenica sadrži grešku. Klikni "Otkrij grešku" pa pročitaj objašnjenje.</p>
    <div class="err-drill">
      <div class="err-item"><div class="err-sent">"I will to call you tomorrow, I promise."</div><button class="err-btn" onclick="showErrFix('ef1',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef1">✅ <span class="correct">I will call you tomorrow.</span><span class="explain">will je modalni glagol → iza njega uvijek <b>naked infinitive</b> (bez "to"). "will to call" je uvijek greška.</span></div></div>
      <div class="err-item"><div class="err-sent">"She will goes to the concert next Friday."</div><button class="err-btn" onclick="showErrFix('ef2',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef2">✅ <span class="correct">She will go to the concert next Friday.</span><span class="explain">will = isti za sve subjekte. Nema -s za he/she/it uz will. "will goes" je uvijek greška.</span></div></div>
      <div class="err-item"><div class="err-sent">"Look at those clouds! I think it will rain."</div><button class="err-btn" onclick="showErrFix('ef3',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef3">✅ <span class="correct">Look at those clouds! It's going to rain.</span><span class="explain">"Look at those clouds" = vidljivi dokaz → <b>going to</b>. will je za predviđanje bez dokaza. Vidljivi znak + predviđanje = going to uvijek.</span></div></div>
      <div class="err-item"><div class="err-sent">"'The phone is ringing!' — 'I am going to answer it!'"</div><button class="err-btn" onclick="showErrFix('ef4',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef4">✅ <span class="correct">'I'll answer it!'</span><span class="explain">Spontana odluka u trenutku (reakcija na zvonjenje) → <b>will</b>. going to je za planove donesene RANIJE. "The phone is ringing" = situacija koja izaziva spontanu odluku.</span></div></div>
      <div class="err-item"><div class="err-sent">"They are going to will move to Canada next year."</div><button class="err-btn" onclick="showErrFix('ef5',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef5">✅ <span class="correct">They are going to move to Canada. / They will move to Canada.</span><span class="explain">will i going to su alternativni oblici — nikad se ne kombiniraju. Biraj jedno: ili will ili going to.</span></div></div>
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
        <li class="m-item"><div class="m-dot"></div><span><b>will + naked infinitive:</b> "I will go" ✓ · "I will to go" ❌ · "She will goes" ❌</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>will — kada:</b> spontana odluka · obećanje · ponuda · predviđanje bez dokaza (I think…)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>going to — tvorba:</b> I am / he-she-it is / you-we-they are going to + infinitiv.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>going to — kada:</b> plan dogovoren unaprijed · namjera · predviđanje s vidljivim dokazom (Look!)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Look! / Watch out!</b> + predviđanje → UVIJEK going to (nikad will uz vidljivi dokaz!)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>I think / probably / maybe</b> + predviđanje → UVIJEK will.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Obećanje = will:</b> "I'll call you." ✓ · "I won't tell anyone." ✓ (won't = will not)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Nikad kombinirati:</b> "will going to" ❌ / "going to will" ❌ — biraj JEDNO.</span></li>
      </ul>
    </div>

    <!-- FILL IN THE BLANK -->
    <div class="sec-label" style="margin-top:32px">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upiši ispravni oblik. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 · will · ponuda · spontana</div><div class="fitb-sent">'Can you help me?' — 'Of course! _______ (I / help) you right away!'</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="I'll help" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','i'll help','will-offer')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','i'll help','will-offer')">Check</button></div><div class="fitb-fb" id="f1fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 · going to · plan · am/is/are</div><div class="fitb-sent">We _______ (go) camping this weekend. We've already packed our bags.</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="are going to go" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','are going to go','going-plan')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','are going to go','going-plan')">Check</button></div><div class="fitb-fb" id="f2fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 · will · predviđanje bez dokaza</div><div class="fitb-sent">I think the economy _______ (probably / improve) next year.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="will probably improve" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','will probably improve','will-pred')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','will probably improve','will-pred')">Check</button></div><div class="fitb-fb" id="f3fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 · going to · dokaz</div><div class="fitb-sent">Look at the traffic! We _______ (be) late for the meeting!</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="are going to be" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','are going to be','going-evid')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','are going to be','going-evid')">Check</button></div><div class="fitb-fb" id="f4fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 · will · obećanje · negacija</div><div class="fitb-sent">I _______ (not / forget) to bring your book tomorrow. I promise!</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="won't forget" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','won't forget','will-prom')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','won't forget','will-prom')">Check</button></div><div class="fitb-fb" id="f5fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 · going to · namjera donesena ranije</div><div class="fitb-sent">She _______ (study) harder next semester. She's made up her mind.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="is going to study" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','is going to study','going-int')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','is going to study','going-int')">Check</button></div><div class="fitb-fb" id="f6fb" aria-live="polite"></div></div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint — znaš li stvarno razliku?</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako brzo odlučim will ili going to?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>2 brza pitanja:</b><br>1. Je li odluka donesena SADA? → will · Ranije? → going to<br>2. Ima li vidljivih znakova (Look!/Watch!)? → going to · Samo mišljenje (I think)? → will<br><br>Obećanja i ponude = uvijek will. Spontane reakcije = uvijek will.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Zašto "will to go" uvijek greška?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b style="color:var(--lime)">will = modalni glagol → naked infinitive uvijek.</b><br>Modalni glagoli (will, can, must, should…) nikad ne idu s "to" ispred infinitiva. ✅ I will go. ✅ I can go. ✅ I must go. — nikad "to" iza modalnog.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Mogu li koristiti going to umjesto will za obećanja?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Tehnički da, ali na maturi niže razine — uvijek will za obećanja.</b><br>NCVVO ispiti gotovo uvijek očekuju will uz "I promise" i "I won't tell". Siguran odgovor: obećanje + won't/will = uvijek will.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch06: will u conditionals?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>will se pojavljuje u First Conditional (Conditional 1)!</b><br><em>If it rains, I <b>will stay</b> home.</em> — if + present → will + infinitiv<br>Ovo je direktna veza s poglavljem 06. will u kondicionalu = ista tvorba, isti pravopi (naked infinitive, nema -s).</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Što je razlika između "She is going to call" i "She is calling" (PC)?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Oboje označavaju dogovoreni plan u budućnosti — na nižoj razini oba su prihvatljiva.</b><br><em>She <b>is going to call</b> me tonight.</em> (namjera/plan)<br><em>She <b>is calling</b> me tonight.</em> (konkretan dogovor, kao iz rasporeda)<br>Present Continuous za budućnost ≈ going to. Na maturi niže razine: prihvaćaju se obje forme za planirane radnje.</div></div>

    <!-- QUICK EXAM SUMMARY -->
    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item"><div class="qes-tag gap">// gap fill</div><div class="qes-steps"><b>1.</b> Kontekst: spontano/obećanje/ponuda → will · plan/dokaz → going to · <b>2.</b> Look!/Watch! → going to · I think → will · <b>3.</b> Provjeri am/is/are uz going to · <b>4.</b> Naked infinitive uz will (bez "to"!)</div></div>
      <div class="qes-item"><div class="qes-tag mcq">// multiple choice</div><div class="qes-steps"><b>1.</b> Odmah eliminiraj "will to" i "will goes" opcije · <b>2.</b> Look!/Watch! → going to · <b>3.</b> I think/probably → will · <b>4.</b> Already booked/decided → going to</div></div>
      <div class="qes-item"><div class="qes-tag err">// error correction</div><div class="qes-steps">Provjeri: <b>will to</b> (will goes) ❌ · <b>will uz Look!</b> ❌ · <b>going to za spontanu odluku</b> ❌ · <b>pogrešan am/is/are</b> uz going to · <b>will + going to kombinirani</b> ❌</div></div>
    </div>

    <!-- NEXT CHAPTERS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo &amp; sljedeći koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter05.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">05 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Modal glagoli</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">can, must, should, may — isti naked infinitive kao will</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter06.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">06 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Conditionals 0, 1, 2</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">will u First Conditional: If it rains, I will…</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter01.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 01</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Present Continuous za budućnost</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">am/is/are + -ing za dogovorene planove ≈ going to</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">12</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2)">Višestruki izbor — taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Eliminacija will to / she will goes u MCQ</div>
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
      <a href="chapter03.html" class="nav-btn">← Chapter 03</a>
      <a href="chapter05.html" class="nav-btn primary">Next chapter →</a>
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

function switchTab(i){
  tabDone[i]=true; saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
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

var answered={},correct=0,total=12;
var E={
  q1:{c:"✓ Točno. Spontana odluka donesena u ovom trenutku → will. 'I'll get it' = upravo sam odlučio.",w:"✗ Netočno. Spontana odluka (donesena sada, na temelju situacije) → will. going to koristimo za planove donesene PRIJE. Točan odgovor: I'll get it."},
  q2:{c:"✓ Točno. Plan dogovoren unaprijed (already booked = dogovoreno prije) → going to.",w:"✗ Netočno. 'Already booked' = plan dogovoren prije trenutka govora → going to. will bi bio za spontanu odluku. Točan odgovor: is going to visit."},
  q3:{c:"✓ Točno. Predviđanje na temelju vidljivih znakova (look at those clouds!) → going to.",w:"✗ Netočno. Vidljivi znak (tamni oblaci) koji ukazuje na nešto → going to za predviđanje s dokazom. Točan odgovor: is going to rain."},
  q4:{c:"✓ Točno. Obećanje → will. 'I promise' + will = tipična maturas kombinacija.",w:"✗ Netočno. Obećanja, prijetnje, ponude = uvijek will. Točan odgovor: will call."},
  q5:{c:"✓ Točno. Predviđanje bez dokaza, osobno mišljenje (I think, probably) → will.",w:"✗ Netočno. 'I think' + predviđanje bez vidljivih dokaza → will. going to koristimo kad imamo konkretan dokaz. Točan odgovor: will win."},
  q6:{c:"✓ Točno. Negativni oblik will: won't (will not). 'I won't tell' = obećanje/prijetnja.",w:"✗ Netočno. Negativ od will = won't (will not). Točan odgovor: won't tell."},
  q7:{c:"✓ Točno. Konkretan plan s detaljima (next Saturday, the 5 o'clock train) → going to.",w:"✗ Netočno. Konkretan unaprijed dogovoreni plan s detaljima → going to. will = spontana odluka ili predviđanje. Točan odgovor: are going to catch."},
  q8:{c:"✓ Točno. Ponuda u obliku pitanja → Will you / Shall I. 'Shall I help?' = ponuda.",w:"✗ Netočno. Ponude u obliku pitanja = Will you...? / Shall I...? Točan odgovor: Shall I carry."},
  q9:{c:"✓ Točno. Look! = vidljivi dokaz + predviđanje → going to. She = she is going to fall.",w:"✗ Netočno. 'Look!' + vidljivi znakovi opasnosti → going to za predviđanje s dokazom. Točan odgovor: is going to fall."},
  q10:{c:"✓ Točno. Prijetnja u trenutku (If you do that again...) → will.",w:"✗ Netočno. Prijetnje i upozorenja u trenutku → will. going to bi bio za prethodno planiranu radnju. Točan odgovor: will tell."},
  q11:{c:"✓ Točno. Present Continuous za budućnost = konkretno dogovoreni plan s točnim detaljima (restaurant, 8 pm). 'We booked' = odlučeno ranije + specifično → PC. 'are meeting' je točno, ne 'will meet' (spontano) ni nužno 'going to' (namjera bez konkretnog dogovora).",w:"✗ Netočno. Ključ je 'We booked the restaurant last week' = konkretan, dogovoreni plan → Present Continuous (are meeting). will = spontana odluka (krivo — već je dogovoreno). going to = namjera (moguće, ali PC je precizniji za fiksni plan s detaljima)."},
  q12:{c:"✓ Točno. U ovom dijalogu plan se donosi UPRAVO SADA (tek smo saznali da petak ne ide) ali još nije konkretan fiksni termin → going to. Razlika: 'are meeting' (PC) implicira da je već dogovoreno i potvrđeno (restaurant, sat...). 'going to' = namjera/nova odluka.",w:"✗ Netočno. Plan se donosi U OVOM TRENUTKU razgovora, tek sada → going to (nova odluka). 'are meeting' (PC) bi značilo da je već sve konkretno dogovoreno. will = spontana odluka bez plana. Odgovor B (going to) je točan."}
};
var FITB={
  'will-offer':  "Ponuda u trenutku → will. Točan oblik: I'll help (I will help).",
  'going-plan':  "Plan dogovoren unaprijed (already decided) → going to. We = are going to.",
  'will-pred':   "'Probably' + predviđanje bez dokaza → will. Točan oblik: will probably be.",
  'going-evid':  "Vidljivi dokaz (look at the traffic!) → going to za predviđanje. They = are going to be.",
  'will-prom':   "Obećanje → will. Točan oblik: won't forget (will not forget).",
  'going-int':   "Namjera donesena unaprijed → going to. She = is going to study."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch04',ok);
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
      correct>=7?'Good. Fokusiraj se na spontana odluka vs plan.':
      correct>=5?'Vrati se na Learn — will vs going to razliku.':
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
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap)return;
  var wb=wrap.querySelector('.sd-btn.will');
  var gb=wrap.querySelector('.sd-btn.going');
  if(e.key.toLowerCase()==='w'&&wb&&wb.style.pointerEvents!=='none')sdAns('will');
  if(e.key.toLowerCase()==='g'&&gb&&gb.style.pointerEvents!=='none')sdAns('going');
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

function toggleReveal(card){
  var isOpen=card.classList.contains('open');
  card.classList.toggle('open');
  card.setAttribute('aria-expanded',!isOpen?'true':'false');
}

function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  if(btn){btn.setAttribute('aria-expanded','true');btn.style.display='none';}
}

// Uses drill adapted for will vs going to
var drillAnswered={},drillCorrect=0,drillTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(drillAnswered[id])return;
  drillAnswered[id]=true;
  if(isCorrect)drillCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){
    el.classList.add('sv-correct');
    if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong>';}
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});
    if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong>';}
  }
  if(Object.keys(drillAnswered).length===drillTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=drillCorrect+'/'+drillTotal;
      document.getElementById('sv-score-lbl').textContent=
        drillCorrect===5?'Savršen! Razlika ti je jasna. 🎉':
        drillCorrect>=4?'Odlično! Još malo.':
        drillCorrect>=3?'Dobro — ponovi spontana odluka vs plan.':
        'Vrati se na usporednu tablicu i ponovi.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';
    btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);
  });
}

var SD=[
  {s:"The phone is ringing. — 'I ___ answer it!' (will/going to)",                    ans:"will",exp:"Spontana odluka donesena u ovom trenutku → will. Nisi planirao to unaprijed."},
  {s:"She ___ be a doctor when she grows up. She's already studying biology. (will/going to)", ans:"going",exp:"Unaprijed donesena namjera s dokazom (already studying) → going to."},
  {s:"'I think it ___ snow tomorrow.' — No visible evidence. (will/going to)",         ans:"will",exp:"'I think' + predviđanje bez dokaza → will. Samo mišljenje, nema vidljivih znakova."},
  {s:"Look at that car! It ___ crash! (will/going to)",                                ans:"going",exp:"'Look!' + vidljivi neposredni dokaz → going to za predviđanje s dokazom."},
  {s:"'Can you help me?' — 'Of course, I ___ help you!' (will/going to)",              ans:"will",exp:"Spontana ponuda u odgovoru na zahtjev → will."},
  {s:"We ___ move to a new house. We've already signed the contract. (will/going to)", ans:"going",exp:"Konkretan plan s dokazom (signed the contract) → going to."},
  {s:"'I'm hungry.' — 'Don't worry, I ___ make you a sandwich right now!' (will/going to)", ans:"will",exp:"Spontana odluka donesena u ovom trenutku kao reakcija na situaciju → will."},
  {s:"He ___ be late. Look at the traffic — it's terrible! (will/going to)",           ans:"going",exp:"Vidljivi dokaz (look at the traffic) → going to za predviđanje."},
  {s:"I promise I ___ tell anyone your secret. (will/going to)",                       ans:"will",exp:"Obećanje → uvijek will (won't tell = will not tell)."},
  {s:"They ___ get married next spring. They've booked the venue. (will/going to)",    ans:"going",exp:"Konkretan plan dogovoren unaprijed (booked the venue) → going to."}
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
      sc>=6?'Dobro! Fokusiraj se na spontana odluka vs dokaz.':
      'Ponovi Learn tab — will vs going to razliku.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn will" onclick="sdAns(\\'will\\')" tabindex="0">will <span style="font-size:10px;opacity:.4">[W]</span></div>'+
    '<div class="sd-btn going" onclick="sdAns(\\'going\\')" tabindex="0">going to <span style="font-size:10px;opacity:.4">[G]</span></div>'+
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
  var picked=choice==='will'?btns[0]:btns[1];
  var correctBtn=q.ans==='will'?btns[0]:btns[1];
  picked.classList.add(ok?'correct-pick':'wrong-pick');
  if(!ok)correctBtn.classList.add('reveal-correct');
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1600);
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch04_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch04_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){tabDone[i]=true;
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
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initSpeedDrill();

</script>`;

const CH04_JS = `// TRACKER: bilježi pogreške
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
  tabDone[i]=true; saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
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

var answered={},correct=0,total=12;
var E={
  q1:{c:"✓ Točno. Spontana odluka donesena u ovom trenutku → will. 'I'll get it' = upravo sam odlučio.",w:"✗ Netočno. Spontana odluka (donesena sada, na temelju situacije) → will. going to koristimo za planove donesene PRIJE. Točan odgovor: I'll get it."},
  q2:{c:"✓ Točno. Plan dogovoren unaprijed (already booked = dogovoreno prije) → going to.",w:"✗ Netočno. 'Already booked' = plan dogovoren prije trenutka govora → going to. will bi bio za spontanu odluku. Točan odgovor: is going to visit."},
  q3:{c:"✓ Točno. Predviđanje na temelju vidljivih znakova (look at those clouds!) → going to.",w:"✗ Netočno. Vidljivi znak (tamni oblaci) koji ukazuje na nešto → going to za predviđanje s dokazom. Točan odgovor: is going to rain."},
  q4:{c:"✓ Točno. Obećanje → will. 'I promise' + will = tipična maturas kombinacija.",w:"✗ Netočno. Obećanja, prijetnje, ponude = uvijek will. Točan odgovor: will call."},
  q5:{c:"✓ Točno. Predviđanje bez dokaza, osobno mišljenje (I think, probably) → will.",w:"✗ Netočno. 'I think' + predviđanje bez vidljivih dokaza → will. going to koristimo kad imamo konkretan dokaz. Točan odgovor: will win."},
  q6:{c:"✓ Točno. Negativni oblik will: won't (will not). 'I won't tell' = obećanje/prijetnja.",w:"✗ Netočno. Negativ od will = won't (will not). Točan odgovor: won't tell."},
  q7:{c:"✓ Točno. Konkretan plan s detaljima (next Saturday, the 5 o'clock train) → going to.",w:"✗ Netočno. Konkretan unaprijed dogovoreni plan s detaljima → going to. will = spontana odluka ili predviđanje. Točan odgovor: are going to catch."},
  q8:{c:"✓ Točno. Ponuda u obliku pitanja → Will you / Shall I. 'Shall I help?' = ponuda.",w:"✗ Netočno. Ponude u obliku pitanja = Will you...? / Shall I...? Točan odgovor: Shall I carry."},
  q9:{c:"✓ Točno. Look! = vidljivi dokaz + predviđanje → going to. She = she is going to fall.",w:"✗ Netočno. 'Look!' + vidljivi znakovi opasnosti → going to za predviđanje s dokazom. Točan odgovor: is going to fall."},
  q10:{c:"✓ Točno. Prijetnja u trenutku (If you do that again...) → will.",w:"✗ Netočno. Prijetnje i upozorenja u trenutku → will. going to bi bio za prethodno planiranu radnju. Točan odgovor: will tell."},
  q11:{c:"✓ Točno. Present Continuous za budućnost = konkretno dogovoreni plan s točnim detaljima (restaurant, 8 pm). 'We booked' = odlučeno ranije + specifično → PC. 'are meeting' je točno, ne 'will meet' (spontano) ni nužno 'going to' (namjera bez konkretnog dogovora).",w:"✗ Netočno. Ključ je 'We booked the restaurant last week' = konkretan, dogovoreni plan → Present Continuous (are meeting). will = spontana odluka (krivo — već je dogovoreno). going to = namjera (moguće, ali PC je precizniji za fiksni plan s detaljima)."},
  q12:{c:"✓ Točno. U ovom dijalogu plan se donosi UPRAVO SADA (tek smo saznali da petak ne ide) ali još nije konkretan fiksni termin → going to. Razlika: 'are meeting' (PC) implicira da je već dogovoreno i potvrđeno (restaurant, sat...). 'going to' = namjera/nova odluka.",w:"✗ Netočno. Plan se donosi U OVOM TRENUTKU razgovora, tek sada → going to (nova odluka). 'are meeting' (PC) bi značilo da je već sve konkretno dogovoreno. will = spontana odluka bez plana. Odgovor B (going to) je točan."}
};
var FITB={
  'will-offer':  "Ponuda u trenutku → will. Točan oblik: I'll help (I will help).",
  'going-plan':  "Plan dogovoren unaprijed (already decided) → going to. We = are going to.",
  'will-pred':   "'Probably' + predviđanje bez dokaza → will. Točan oblik: will probably be.",
  'going-evid':  "Vidljivi dokaz (look at the traffic!) → going to za predviđanje. They = are going to be.",
  'will-prom':   "Obećanje → will. Točan oblik: won't forget (will not forget).",
  'going-int':   "Namjera donesena unaprijed → going to. She = is going to study."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch04',ok);
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
      correct>=7?'Good. Fokusiraj se na spontana odluka vs plan.':
      correct>=5?'Vrati se na Learn — will vs going to razliku.':
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
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap)return;
  var wb=wrap.querySelector('.sd-btn.will');
  var gb=wrap.querySelector('.sd-btn.going');
  if(e.key.toLowerCase()==='w'&&wb&&wb.style.pointerEvents!=='none')sdAns('will');
  if(e.key.toLowerCase()==='g'&&gb&&gb.style.pointerEvents!=='none')sdAns('going');
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

function toggleReveal(card){
  var isOpen=card.classList.contains('open');
  card.classList.toggle('open');
  card.setAttribute('aria-expanded',!isOpen?'true':'false');
}

function showErrFix(id,btn){
  document.getElementById(id).classList.add('show');
  if(btn){btn.setAttribute('aria-expanded','true');btn.style.display='none';}
}

// Uses drill adapted for will vs going to
var drillAnswered={},drillCorrect=0,drillTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(drillAnswered[id])return;
  drillAnswered[id]=true;
  if(isCorrect)drillCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){
    el.classList.add('sv-correct');
    if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong>';}
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});
    if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong>';}
  }
  if(Object.keys(drillAnswered).length===drillTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=drillCorrect+'/'+drillTotal;
      document.getElementById('sv-score-lbl').textContent=
        drillCorrect===5?'Savršen! Razlika ti je jasna. 🎉':
        drillCorrect>=4?'Odlično! Još malo.':
        drillCorrect>=3?'Dobro — ponovi spontana odluka vs plan.':
        'Vrati se na usporednu tablicu i ponovi.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';
    btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);
  });
}

var SD=[
  {s:"The phone is ringing. — 'I ___ answer it!' (will/going to)",                    ans:"will",exp:"Spontana odluka donesena u ovom trenutku → will. Nisi planirao to unaprijed."},
  {s:"She ___ be a doctor when she grows up. She's already studying biology. (will/going to)", ans:"going",exp:"Unaprijed donesena namjera s dokazom (already studying) → going to."},
  {s:"'I think it ___ snow tomorrow.' — No visible evidence. (will/going to)",         ans:"will",exp:"'I think' + predviđanje bez dokaza → will. Samo mišljenje, nema vidljivih znakova."},
  {s:"Look at that car! It ___ crash! (will/going to)",                                ans:"going",exp:"'Look!' + vidljivi neposredni dokaz → going to za predviđanje s dokazom."},
  {s:"'Can you help me?' — 'Of course, I ___ help you!' (will/going to)",              ans:"will",exp:"Spontana ponuda u odgovoru na zahtjev → will."},
  {s:"We ___ move to a new house. We've already signed the contract. (will/going to)", ans:"going",exp:"Konkretan plan s dokazom (signed the contract) → going to."},
  {s:"'I'm hungry.' — 'Don't worry, I ___ make you a sandwich right now!' (will/going to)", ans:"will",exp:"Spontana odluka donesena u ovom trenutku kao reakcija na situaciju → will."},
  {s:"He ___ be late. Look at the traffic — it's terrible! (will/going to)",           ans:"going",exp:"Vidljivi dokaz (look at the traffic) → going to za predviđanje."},
  {s:"I promise I ___ tell anyone your secret. (will/going to)",                       ans:"will",exp:"Obećanje → uvijek will (won't tell = will not tell)."},
  {s:"They ___ get married next spring. They've booked the venue. (will/going to)",    ans:"going",exp:"Konkretan plan dogovoren unaprijed (booked the venue) → going to."}
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
      sc>=6?'Dobro! Fokusiraj se na spontana odluka vs dokaz.':
      'Ponovi Learn tab — will vs going to razliku.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn will" onclick="sdAns(\\'will\\')" tabindex="0">will <span style="font-size:10px;opacity:.4">[W]</span></div>'+
    '<div class="sd-btn going" onclick="sdAns(\\'going\\')" tabindex="0">going to <span style="font-size:10px;opacity:.4">[G]</span></div>'+
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
  var picked=choice==='will'?btns[0]:btns[1];
  var correctBtn=q.ans==='will'?btns[0]:btns[1];
  picked.classList.add(ok?'correct-pick':'wrong-pick');
  if(!ok)correctBtn.classList.add('reveal-correct');
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1600);
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch04_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch04_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){tabDone[i]=true;
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
