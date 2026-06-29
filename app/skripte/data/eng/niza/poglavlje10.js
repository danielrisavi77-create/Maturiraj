// Maturiraj.hr — Engleski niža razina · Poglavlje 10
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useRef } from "react";

export default function ENG_NIZA_CH10({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  navRef.current = { onBack, onNext, onPrev, onNavigate };

  useEffect(() => {
    const styleId = "skripta-ch10-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH10_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch10-js";
    scriptEl.textContent = CH10_JS;
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
      if (num === 11 && nav.onNext) nav.onNext();
      else if (num === 9 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch10-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch10-root"
      dangerouslySetInnerHTML={{ __html: CH10_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH10_CSS = `
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
.reveal-ans[style*="display:none"]{display:none!important}
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

const CH10_BODY = `<div class="shell">

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
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter09.html'"><span class="sb-dot"></span> 09 &middot; Čitanje s razumijevanjem</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
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
  <div class="sb-item" onclick="window.location='chapter09.html'" style="cursor:pointer"><span class="sb-dot"></span> 09 &middot; Čitanje s razumijevanjem</div>
  <div class="sb-item active"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
  <div class="sb-item" onclick="window.location='chapter11.html'" style="cursor:pointer"><span class="sb-dot"></span> 11 &middot; Strategije slušanja</div>
  <div class="sb-item" onclick="window.location='chapter12.html'" style="cursor:pointer"><span class="sb-dot"></span> 12 &middot; Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 &middot; Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 &middot; Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 &middot; Komparativ i tag pitanja</div>
  <div class="sb-footer">10 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter09.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>skills</span>
    <span class="bc-sep">/</span><span class="bc-active">writing-short-text</span>
  </div>

  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" tabindex="0">&#9889; 2 min<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" tabindex="0">&#128214; Learn<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" tabindex="0">&#9999;&#65039; Practice<span class="tab-check">&#10003;</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Overview</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Learn writing</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Practice &amp; quiz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~40 min
    </div>
  </div>

  <!-- ══ LAYER 0 ══ -->
  <div class="layer active" id="l0">
        <div style="display:flex;align-items:center;gap:12px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);margin-bottom:14px">
      <div style="font-size:20px;flex-shrink:0">&#x270D;&#xFE0F;</div>
      <div>
        <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--sky);margin-bottom:3px">ch09 → ch10 &middot; od &#269;itanja prema pisanju</div>
        <div style="font-size:12.5px;color:var(--t2)">Do sada si analizirao tu&#240;e tekstove. Sada pi&#353;e&#353; sam. Drugi mod &mdash; iste strategije: jasna struktura, signal words, ton.</div>
      </div>
    </div>
<div class="hero">
      <div class="hero-eyebrow">chapter 10 / 15 &middot; skills</div>
      <h1 class="hero-title">Writing: <span>Short Text</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">&#9201; ~40 min</span>
        <span class="hero-badge hb-level">ni&#382;a razina</span>
        <span class="hero-badge hb-chapter">10 / 12</span>
      </div>
      <p class="hero-sub">Struktura &middot; Signal words &middot; Uvod &middot; Body &middot; Zaklju&#269;ak &middot; Email &middot; Esej</p>
      <div class="progress-track"><div class="progress-bar" style="width:83%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">Struktura</span>
      <span class="pill pill-sky">Signal words</span>
      <span class="pill pill-violet">Uvod &amp; zaklju&#269;ak</span>
      <span class="pill pill-amber">Formalno vs neformalno</span>
      <span class="pill pill-red">&#268;este gre&#353;ke</span>
    </div>

    <div class="sec-label">// at a glance &mdash; tipovi pisanja na maturi</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">ESE</div><div class="stat-name">Kratki esej</div><div class="stat-desc">120&ndash;180 rije&#269;i &middot; uvod + body + zaklju&#269;ak &middot; formalno</div></div>
      <div class="stat-card"><div class="stat-icon sky">EML</div><div class="stat-name">Email / pismo</div><div class="stat-desc">Formalno ili neformalno &middot; jasna svrha &middot; strukturirano</div></div>
      <div class="stat-card"><div class="stat-icon violet">OPN</div><div class="stat-name">Mi&#353;ljenje / opinion</div><div class="stat-desc">Stav + argumenti + primjeri + zaklju&#269;ak</div></div>
      <div class="stat-card"><div class="stat-icon amber">REP</div><div class="stat-name">Kratko izvje&#353;&#263;e</div><div class="stat-desc">Neutralan ton &middot; &#269;injenice &middot; bez osobnih stavova</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Struktura</div><div class="cv">Uvod (hook + teza) &rarr; Body (1&ndash;2 odlomka s argumentima) &rarr; Zaklju&#269;ak (summary + finale)</div></div>
      <div class="concept-row"><div class="ck sky">Signal words</div><div class="cv">Kontrast: however, although &middot; Dodavanje: furthermore, in addition &middot; Uzrok: therefore, as a result</div></div>
      <div class="concept-row"><div class="ck violet">Topic sentence</div><div class="cv">Svaki odlomak po&#269;inje s topic sentence &mdash; navajuje glavnu ideju odlomka</div></div>
      <div class="concept-row"><div class="ck amber">Formalno</div><div class="cv">Bez skra&#263;enica (don&#39;t &rarr; do not) &middot; bez slanga &middot; pasiv &#269;est &middot; akademski vokabular</div></div>
      <div class="concept-row"><div class="ck red">Gre&#353;ka #1</div><div class="cv">Novi argument u zaklju&#269;ku &rarr; uvijek samo summary &middot; zaklju&#269;ak ne uvodi novu ideju!</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; panic-proof &mdash; pisanje na ispitu</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Plan PRIJE pisanja</b> &mdash; 2 minute: uvod, 2 argumenta, zaklju&#269;ak. Bez plana = kaoti&#269;an tekst.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Signal words</b> &mdash; svaka nova ideja = signal word. However, Furthermore, Therefore, In addition, In conclusion.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Zaklju&#269;ak = summary</b> &mdash; nikad nova informacija! Restate teza druk&#269;ijim rije&#269;ima + zavr&#353;na misao.</div></div>
      </div>
    </div>
    <div style="margin-top:10px;padding:9px 13px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r2);font-size:12.5px;color:var(--amber)">
      &#x26A0; <b>Word count:</b> NCVVO B razina traži <b>120&ndash;180 rije&#269;i</b>. Manje = zadatak nije ispunjen. Vi&#353;e = rizik penalizacije. Broji prije predaje!
    </div>


    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koja je osnovna struktura kratkog eseja?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">
        <b>Uvod &rarr; Body &rarr; Zaklju&#269;ak</b><br><br>
        <b>Uvod</b> (2&ndash;3 re&#269;enice): hook rje&#269;enica, kontekst, teza (glavni stav)<br>
        <b>Body</b> (2&ndash;4 odlomka): svaki = 1 argument + primjer/dokaz<br>
        <b>Zaklju&#269;ak</b> (2&ndash;3 re&#269;enice): In conclusion/To sum up + restate teze + zavr&#353;na misao<br><br>
        Na ni&#382;oj razini mature: 120&ndash;180 rije&#269;i, 3&ndash;4 odlomka, 2 argumenta dovoljna.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Signal words &mdash; koji i kada?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Uvod:</b> Firstly · To begin with · In recent years<br><b>Kontrast:</b> However · On the other hand · Although<br><b>Primjer:</b> For example · For instance · Such as<br><b>Zaključak:</b> In conclusion · To sum up · Overall</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Formalno vs neformalno pisanje &mdash; razlika</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Formalno</b> (email, esej): puni oblici · pasiv · bez slanga<br><span class="ok">I am writing · I would like to · Yours faithfully</span><br><b>Neformalno</b>: kratice · izravnost · <span class="ok">I'm writing · Thanks · Best</span><br>B razina: uvijek formalno na ispitu!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>&#268;esta gre&#353;ka: novi argument u zaklju&#269;ku</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Zaključak = ponovi + synthesiziraj, <b>ne uvodi novo!</b><br>&#x274C; New idea in conclusion: "Also, we should consider..."<br>&#x2713; Synthesis: <span class="ok">"In conclusion, both sides have merit, but..."</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch09 &mdash; kako &#269;itanje poma&#382;e pisanju?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">
        <b>Signal words iz ch09 = gradivni blokovi pisanja u ch10!</b><br><br>
        U &#269;itanju: prepozna&#353; &bdquo;however&rdquo; kao signal kontrasta<br>
        U pisanju: KORISTI&#352; &bdquo;however&rdquo; da poka&#382;e&#353; kontrast<br><br>
        Isti set signal words &mdash; razli&#269;ita vje&#353;tina (receptivna vs produktivna).<br>
        Vokabular iz ch08 (kolokacije, phrasal verbs) direktno ide u pisane zadatke.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s gramatičkim poglavljima &mdash; &#353;to je klju&#269;no za pisanje?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Pisanje = sva gramatika zajedno:<br>Ch01/02: tenses · Ch05: modali · Ch06: conditionals (If I were...)<br>Ch07: pasiv (It is believed that...) · Ch08: signal words/kolokacije</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F6A8; ako ne zna&#353; &#353;to pisati &mdash; &#269;ini ovo</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Pro&#269;itaj <b>zadatak 2x</b> &mdash; koji tip teksta? koliko rije&#269;i? formalno ili neformalno? koji su klju&#269;ni punktovi?</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Napi&#353;i plan</b> (2 min): Uvod &rarr; Argument 1 &rarr; Argument 2 &rarr; Zaklju&#269;ak. Svaki = 1 rije&#269;.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Pi&#353;i odlomak po odlomak</b>: topic sentence &rarr; 2&ndash;3 re&#269;enice podr&#353;ke &rarr; concluding sentence.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">Koristi <b>signal words</b> &mdash; svaki prijelaz = signal word. Ne pi&#353;i bez ijednog &bdquo;however&rdquo; ili &bdquo;therefore&rdquo;.</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Provjeri na kraju</b>: broj rije&#269;i &middot; skra&#263;enice (formalno) &middot; zaklju&#269;ak bez novih argumenata &middot; pravopis</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter09.html" class="nav-btn">&larr; Chapter 09</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn writing &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — LEARN ══ -->
  <div class="layer" id="l1">

    <div class="sec-label">// struktura kratkog eseja &mdash; odlomak po odlomak</div>
    <p class="prose">Svaki tip pisanog zadatka na maturi ima istu temeljnu strukturu. Nauči je jednom &mdash; vrijedi za esej, email, opinion tekst i izvje&#353;&#263;e.</p>

    <div class="tbl-wrap">
      <table>
        <thead><tr>
          <th style="width:100px">Dio</th>
          <th>&#352;to pi&#353;e&#353;</th>
          <th style="width:80px">Rije&#269;i</th>
        </tr></thead>
        <tbody>
          <tr>
            <td style="font-family:var(--mono);font-size:11px;font-weight:600;color:var(--lime)">UVOD</td>
            <td style="font-size:13px;color:var(--t2)"><b>Hook</b>: zanimljiva &#269;injenica ili pitanje &middot; <b>Kontekst</b>: kratko uvedi temu &middot; <b>Teza</b>: tvoj glavni stav ili svrha teksta<br><em style="color:var(--t3);font-size:12px">Nikad: "In this essay I will write about..." &rarr; preslabo!</em></td>
            <td style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center">30&ndash;40</td>
          </tr>
          <tr>
            <td style="font-family:var(--mono);font-size:11px;font-weight:600;color:var(--sky)">BODY 1</td>
            <td style="font-size:13px;color:var(--t2)"><b>Topic sentence</b>: glavni argument odlomka &middot; <b>Dokaz/primjer</b>: 1&ndash;2 re&#269;enice &middot; <b>Komentar</b>: &#353;to to zna&#269;i?<br><em style="color:var(--t3);font-size:12px">Signal: Firstly / One reason is / To begin with</em></td>
            <td style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center">40&ndash;60</td>
          </tr>
          <tr>
            <td style="font-family:var(--mono);font-size:11px;font-weight:600;color:var(--sky)">BODY 2</td>
            <td style="font-size:13px;color:var(--t2)"><b>Topic sentence</b>: drugi argument &middot; <b>Dokaz/primjer</b> &middot; <b>Komentar</b><br><em style="color:var(--t3);font-size:12px">Signal: Furthermore / In addition / Another reason is / Secondly</em></td>
            <td style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center">40&ndash;60</td>
          </tr>
          <tr>
            <td style="font-family:var(--mono);font-size:11px;font-weight:600;color:var(--violet)">ZAKLJU&#268;AK</td>
            <td style="font-size:13px;color:var(--t2)"><b>Signal</b>: In conclusion / To sum up &middot; <b>Restate teze</b> (druk&#269;ijim rije&#269;ima!) &middot; <b>Zavr&#353;na misao</b> ili prijedlog<br><em style="color:var(--red);font-size:12px">&#x274C; NIKAD: novi argument u zaklju&#269;ku!</em></td>
            <td style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center">25&ndash;35</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- ANNOTATED SAMPLE ESSAY -->
    <hr class="divider">
    <div class="sec-label">// anotiran primjer &mdash; opinion esej s komentarima</div>
    <p class="prose" style="margin-bottom:8px">Pro&#269;itaj esej i pazi na ozna&#269;ene dijelove &mdash; svaka boja ima zna&#269;enje.</p>

    <div class="anno-legend">
      <div class="al-item"><div class="al-dot" style="background:var(--lime)"></div> Hook / teza</div>
      <div class="al-item"><div class="al-dot" style="background:var(--sky)"></div> Signal word</div>
      <div class="al-item"><div class="al-dot" style="background:var(--violet)"></div> Topic sentence</div>
      <div class="al-item"><div class="al-dot" style="background:var(--amber)"></div> Primjer / dokaz</div>
      <div class="al-item"><div class="al-dot" style="background:var(--red)"></div> Zaklju&#269;ak signal</div>
    </div>

    <div class="sample-text">
      <div class="sample-title">TASK: "Should young people spend a year abroad before university? Write an opinion essay (120&ndash;180 words)."</div>
      <div class="sample-meta">
        <span class="sm-tag" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">Opinion essay</span>
        <span class="sm-tag" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">~155 words</span>
        <span class="sm-tag" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">Formalno</span>
      </div>
      <p><span class="anno">Living and working abroad before university is one of the most valuable experiences a young person can have.</span> Many young people today consider taking a gap year, but opinions on this practice are divided. <span class="anno">In my view, spending a year abroad brings significant personal and professional benefits.</span></p>
      <p><span class="anno-violet">Firstly, living abroad helps young people develop independence and self-confidence.</span> <span class="anno-amber">When they are away from home, they must manage their finances, solve problems on their own, and adapt to a new culture.</span> <span class="anno-sky">Furthermore</span>, they often pick up a new language or improve an existing one, which is highly valued by employers.</p>
      <p><span class="anno-violet">In addition, a gap year can provide valuable work experience.</span> <span class="anno-amber">Young people who work abroad gain skills such as communication, teamwork, and adaptability that cannot easily be learned in a classroom.</span> <span class="anno-sky">As a result</span>, they often perform better at university and in their careers.</p>
      <p><span class="anno-red">In conclusion</span>, I believe that a year abroad is an excellent investment in a young person&rsquo;s future. It builds character, boosts employability, and opens the mind to new perspectives. <span class="anno">Encouraging young people to take this step should be seen as a priority.</span></p>
    </div>

    <!-- SIGNAL WORDS DETAILED -->
    <hr class="divider">
    <div class="sec-label">// signal words &mdash; kompletni popis po funkciji</div>

    <div class="phrase-grid">
      <div class="phrase-card">
        <div class="phrase-type" style="color:var(--sky)">// Kontrast</div>
        <div class="phrase-list">
          <em>However,</em> it is important to note...<br>
          <em>Although</em> this is true,...<br>
          <em>On the other hand,</em> some argue...<br>
          <em>Nevertheless,</em> the benefits...<br>
          <em>Despite this,</em> many still...
        </div>
      </div>
      <div class="phrase-card">
        <div class="phrase-type" style="color:var(--lime)">// Dodavanje</div>
        <div class="phrase-list">
          <em>Furthermore,</em> research shows...<br>
          <em>In addition,</em> it is worth...<br>
          <em>Moreover,</em> studies have...<br>
          <em>What is more,</em> young people...<br>
          <em>Also,</em> this approach...
        </div>
      </div>
      <div class="phrase-card">
        <div class="phrase-type" style="color:var(--amber)">// Uzrok &amp; posljedica</div>
        <div class="phrase-list">
          <em>Therefore,</em> it is clear that...<br>
          <em>As a result,</em> many people...<br>
          <em>Consequently,</em> the situation...<br>
          <em>This means that</em> students...<br>
          <em>For this reason,</em> we should...
        </div>
      </div>
      <div class="phrase-card">
        <div class="phrase-type" style="color:var(--violet)">// Zaklju&#269;ak</div>
        <div class="phrase-list">
          <em>In conclusion,</em> it is clear...<br>
          <em>To sum up,</em> the evidence...<br>
          <em>Overall,</em> it can be said...<br>
          <em>To conclude,</em> I believe...<br>
          <em>In summary,</em> this issue...
        </div>
      </div>
      <div class="phrase-card">
        <div class="phrase-type" style="color:var(--red)">// Primjer</div>
        <div class="phrase-list">
          <em>For example,</em> in Croatia...<br>
          <em>For instance,</em> a study...<br>
          <em>Such as</em> communication...<br>
          <em>To illustrate,</em> consider...<br>
          <em>One example is</em> the way...
        </div>
      </div>
      <div class="phrase-card">
        <div class="phrase-type" style="color:var(--sky)">// Redoslijed</div>
        <div class="phrase-list">
          <em>Firstly,</em> it is important...<br>
          <em>Secondly,</em> another point...<br>
          <em>Finally,</em> we should...<br>
          <em>To begin with,</em> the main...<br>
          <em>Last but not least,</em> ...
        </div>
      </div>
    </div>

    <!-- FORMALNO vs NEFORMALNO EMAIL -->
    <hr class="divider">
    <div class="sec-label">// email &mdash; formalno vs neformalno</div>
    <p class="prose" style="margin-bottom:14px">Na ispitu mo&#382;e&#353; dobiti zadatak pisanja emaila. Klju&#269;no je prepoznati ton koji se tra&#382;i.</p>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--sky-dim);color:var(--sky);border-bottom-color:var(--sky-border)">Formalni email</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Pozdrav</b>Dear Mr/Ms Smith, &middot; Dear Sir/Madam,</div>
          <div class="cmp-row"><b>Uvod</b>I am writing to enquire about... &middot; I would like to...</div>
          <div class="cmp-row"><b>Ton</b>Polite, neutral, professional. Bez skra&#263;enica.</div>
          <div class="cmp-row"><b>Zahtjev</b>I would be grateful if you could... &middot; Could you please...</div>
          <div class="cmp-row"><b>Kraj</b>Yours sincerely, (znamo ime) &middot; Yours faithfully, (ne znamo)</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--lime-dim);color:var(--lime);border-bottom-color:var(--lime-border)">Neformalni email</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Pozdrav</b>Hi/Hey Tom, &middot; Dear Anna,</div>
          <div class="cmp-row"><b>Uvod</b>How are you? I'm writing because... &middot; Just wanted to...</div>
          <div class="cmp-row"><b>Ton</b>Prijateljski, osobni. Skra&#263;enice OK. Kontrakcije OK.</div>
          <div class="cmp-row"><b>Zahtjev</b>Could you...? &middot; Would you mind...? &middot; Can you...?</div>
          <div class="cmp-row"><b>Kraj</b>Best wishes, &middot; Take care, &middot; Regards, &middot; Love,</div>
        </div>
      </div>
    </div>

    <!-- USEFUL PHRASES -->
    <hr class="divider">
        <div class="sec-label">// anotiran primjer &mdash; neformalni email</div>
    <p class="prose" style="margin-bottom:8px">Pro&#269;itaj email i pazi na ozna&#269;ene dijelove &mdash; svaka boja ima zna&#269;enje.</p>

    <div class="anno-legend">
      <div class="al-item"><div class="al-dot" style="background:var(--lime)"></div> Pozdrav / uvod</div>
      <div class="al-item"><div class="al-dot" style="background:var(--sky)"></div> Svrha (za&#353;to pi&#353;em)</div>
      <div class="al-item"><div class="al-dot" style="background:var(--violet)"></div> Zahtjev / pitanje</div>
      <div class="al-item"><div class="al-dot" style="background:var(--amber)"></div> Dodatne informacije</div>
      <div class="al-item"><div class="al-dot" style="background:var(--red)"></div> Kraj / pozdrav</div>
    </div>

    <div class="sample-text">
      <div class="sample-title">TASK: &ldquo;You saw an advertisement for a summer language course in the UK. Write an email to the school asking for more information. (100&ndash;120 words)&rdquo;</div>
      <div class="sample-meta">
        <span class="sm-tag" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">Formalni email</span>
        <span class="sm-tag" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">~110 words</span>
        <span class="sm-tag" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">Enquiry</span>
      </div>
      <p><span class="anno" style="background:var(--lime-dim);border-color:var(--lime-border)">Dear Sir or Madam,</span></p>
      <p><span class="anno" style="background:var(--sky-dim);border-color:var(--sky-border)">I am writing to enquire about the summer English language courses advertised on your website.</span> I am a secondary school student from Croatia and I am very interested in improving my English before the end of the academic year.</p>
      <p><span class="anno" style="background:var(--violet-dim);border-color:var(--violet-border)">Could you please send me more information about the course dates, duration, and fees?</span> <span class="anno" style="background:var(--amber-dim);border-color:var(--amber-border)">I would also like to know whether accommodation is included in the price, and what the daily schedule looks like.</span></p>
      <p>I look forward to hearing from you.</p>
      <p><span class="anno" style="background:var(--red-dim);border-color:var(--red-border)">Yours faithfully,<br>Ana Horvat</span></p>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-top:12px;margin-bottom:4px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--lime);margin-bottom:10px">// za&#353;to ovaj email funkcionira</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:13px">
        <div><span style="color:var(--lime);font-weight:600">&#x2713; Pozdrav:</span> <span style="color:var(--t2)">Dear Sir or Madam &mdash; ne znamo ime &rarr; Yours faithfully (ne sincerely!)</span></div>
        <div><span style="color:var(--sky);font-weight:600">&#x2713; Svrha odmah:</span> <span style="color:var(--t2)">I am writing to enquire &mdash; prva re&#269;enica govori ZA&#352;TO pi&#353;em</span></div>
        <div><span style="color:var(--violet);font-weight:600">&#x2713; Zahtjev:</span> <span style="color:var(--t2)">Could you please... &mdash; u&#269;tivo, ne: &ldquo;Send me info.&rdquo;</span></div>
        <div><span style="color:var(--amber);font-weight:600">&#x2713; Detalji:</span> <span style="color:var(--t2)">Dvije konkretne stvari &mdash; datumi/cijene + smje&#353;taj</span></div>
        <div><span style="color:var(--red);font-weight:600">&#x2713; Kraj:</span> <span style="color:var(--t2)">Yours faithfully &mdash; bez skra&#263;enica, bez &ldquo;Bye!&rdquo;</span></div>
        <div><span style="color:var(--t3);font-weight:600">&#x274C; Izbjegavaj:</span> <span style="color:var(--t2)">I want info. / Send me details. / Hi! / Bye! / it&rsquo;s / I&rsquo;m</span></div>
      </div>
    </div>

<div class="sec-label">// korisne fraze &mdash; po funkciji</div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Funkcija</th><th>Fraza (formalno)</th><th>Fraza (neformalno)</th></tr></thead>
        <tbody>
          <tr><td>Uvesti mi&#353;ljenje</td><td><em>It is argued that... &middot; It is widely believed...</em></td><td><em>I think/feel that... &middot; In my opinion...</em></td></tr>
          <tr><td>Dati primjer</td><td><em>For example, ... &middot; For instance, ...</em></td><td><em>For example, ... &middot; Like when...</em></td></tr>
          <tr><td>Kontrast</td><td><em>However, ... &middot; On the other hand, ...</em></td><td><em>But... &middot; Then again...</em></td></tr>
          <tr><td>Dodati argument</td><td><em>Furthermore, ... &middot; In addition, ...</em></td><td><em>Also, ... &middot; Plus, ...</em></td></tr>
          <tr><td>Zaklju&#269;iti</td><td><em>In conclusion, ... &middot; To sum up, ...</em></td><td><em>Anyway, ... &middot; So basically...</em></td></tr>
          <tr><td>Preporu&#269;iti</td><td><em>It would be advisable to... &middot; I would recommend...</em></td><td><em>You should... &middot; Why not try...</em></td></tr>
        </tbody>
      </table>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; pisanje na ispitu</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">GRE&#352;KA 1</div><div class="radar-text"><b>Novi argument u zaklju&#269;ku</b><br>Zaklju&#269;ak = SAMO summary + restate teze. Svaki novi argument gubi bodove.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">GRE&#352;KA 2</div><div class="radar-text"><b>Skra&#263;enice u formalnom tekstu</b><br>don&#39;t &rarr; do not &middot; it&#39;s &rarr; it is &middot; I&#39;m &rarr; I am. Svaka skra&#263;enica u formalnom = greška.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">GRE&#352;KA 3</div><div class="radar-text"><b>Nema signal words</b><br>Bez "however", "furthermore", "therefore" tekst zvu&#269;i kao lista re&#269;enica, ne esej. Minimum 3 signal words.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">GRE&#352;KA 4</div><div class="radar-text"><b>Prekratak / predugi tekst</b><br>Ni&#382;a razina: 120&ndash;180 rije&#269;i. Ispod 120 = automatski odbitak. Iznad 200 = gubi&#353; vrijeme i&#268;esto grije&#353;i&#353;.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">GRE&#352;KA 5</div><div class="radar-text"><b>Nedovoljno odgovoreno na zadatak</b><br>Pro&#269;itaj zadatak 2x &mdash; odgovori na SVE to&#269;ke koje se tra&#382;e. Ignorirani bullet point = izgubljeni bodovi.</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Pisanje:</b> opinion esej &middot; email / pismo &middot; kratko izvje&#353;&#263;e &middot; opis<br><b>Kriteriji:</b> sadr&#382;aj (relevantnost) &middot; organizacija (struktura) &middot; jezik (vokabular + gramatika) &middot; ton</div></div>
      </div>
    </div>

    <!-- STRUCTURE DRILL -->
    <hr class="divider">
    <div class="sec-label">// struktura drill &mdash; koji signal word?</div>
    <p class="prose" style="margin-bottom:14px">5 re&#269;enica. Odaberi to&#269;an signal word prema kontekstu.</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">Living abroad has many benefits. _______, it can also be challenging and lonely at first.</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'sw1',false,'However,')">Furthermore,</div><div class="sv-opt" onclick="sdAns(this,'sw1',true,'However,')">However,</div><div class="sv-opt" onclick="sdAns(this,'sw1',false,'However,')">Therefore,</div></div><div class="sv-fb" id="sw1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Young people who work abroad gain practical skills. _______, they improve their language abilities.</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'sw2',true,'Furthermore,')">Furthermore,</div><div class="sv-opt" onclick="sdAns(this,'sw2',false,'Furthermore,')">However,</div><div class="sv-opt" onclick="sdAns(this,'sw2',false,'Furthermore,')">In conclusion,</div></div><div class="sv-fb" id="sw2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Many students struggle with time management. _______, their academic performance often suffers.</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'sw3',false,'As a result,')">However,</div><div class="sv-opt" onclick="sdAns(this,'sw3',false,'As a result,')">In addition,</div><div class="sv-opt" onclick="sdAns(this,'sw3',true,'As a result,')">As a result,</div></div><div class="sv-fb" id="sw3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">_______, technology has changed the way we communicate, learn, and work.</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'sw4',false,'In conclusion,')">However,</div><div class="sv-opt" onclick="sdAns(this,'sw4',true,'In conclusion,')">In conclusion,</div><div class="sv-opt" onclick="sdAns(this,'sw4',false,'In conclusion,')">Furthermore,</div></div><div class="sv-fb" id="sw4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Exercise improves physical health. _______, it has been shown to reduce stress and anxiety.</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'sw5',false,'In addition,')">Therefore,</div><div class="sv-opt" onclick="sdAns(this,'sw5',true,'In addition,')">In addition,</div><div class="sv-opt" onclick="sdAns(this,'sw5',false,'In addition,')">However,</div></div><div class="sv-fb" id="sw5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">&larr; Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Practice &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 2 — PRACTICE ══ -->
  <div class="layer" id="l2">

    <div class="quiz-intro"><strong>// writing knowledge quiz</strong> &middot; 10 pitanja o pisanju, strukturi i signal words. Target: <strong>8/10</strong> ili bolje.</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>

    <div class="writing-q" id="q1"><div class="wq-num">01 / 10 &middot; struktura &middot; uvod</div><div class="wq-q">&#352;to treba sadr&#382;avati dobar uvodni odlomak kratkog eseja?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="wq-letter">A</span> Svi argumenti koje &#263;e&#353; koristiti u tekstu.</div><div class="wq-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="wq-letter">B</span> Hook rje&#269;enica, kratki kontekst i teza (stav/svrha).</div><div class="wq-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="wq-letter">C</span> Zaklju&#269;ak i summary tema koje &#263;e&#353; obra&#273;iti.</div><div class="wq-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="wq-letter">D</span> Detaljni primjeri i statisti&#269;ki podaci.</div></div><div class="wq-expl" id="q1e"></div></div>

    <div class="writing-q" id="q2"><div class="wq-num">02 / 10 &middot; signal words &middot; kontrast</div><div class="wq-q">Koji signal word izra&#382;ava <em>kontrast</em> (suprotnost prethodnoj ideji)?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="wq-letter">A</span> Furthermore</div><div class="wq-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="wq-letter">B</span> However</div><div class="wq-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="wq-letter">C</span> Therefore</div><div class="wq-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="wq-letter">D</span> In addition</div></div><div class="wq-expl" id="q2e"></div></div>

    <div class="writing-q" id="q3"><div class="wq-num">03 / 10 &middot; struktura &middot; zaklju&#269;ak</div><div class="wq-q">&#352;to je <em>gre&#353;ka</em> u zaklju&#269;nom odlomku?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="wq-letter">A</span> Preformuliranje teze druk&#269;ijim rije&#269;ima.</div><div class="wq-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="wq-letter">B</span> Koristiti &bdquo;In conclusion&rdquo; ili &bdquo;To sum up&rdquo; na po&#269;etku.</div><div class="wq-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="wq-letter">C</span> Uvesti potpuno novi argument koji nije bio u body odlomcima.</div><div class="wq-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="wq-letter">D</span> Napisati zavr&#353;nu misao ili prijedlog.</div></div><div class="wq-expl" id="q3e"></div></div>

    <div class="writing-q" id="q4"><div class="wq-num">04 / 10 &middot; signal words &middot; dodavanje</div><div class="wq-q">Koji signal word <em>dodaje</em> informaciju (osim toga, uz to)?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="wq-letter">A</span> In addition</div><div class="wq-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="wq-letter">B</span> However</div><div class="wq-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="wq-letter">C</span> As a result</div><div class="wq-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="wq-letter">D</span> In conclusion</div></div><div class="wq-expl" id="q4e"></div></div>

    <div class="writing-q" id="q5"><div class="wq-num">05 / 10 &middot; struktura &middot; body odlomak</div><div class="wq-q">Koji je to&#269;an redoslijed dijelova body odlomka?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="wq-letter">A</span> Primjeri &rarr; glavna re&#269;enica &rarr; zaklju&#269;ak odlomka</div><div class="wq-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="wq-letter">B</span> Glavna re&#269;enica (topic) &rarr; dokazi i primjeri &rarr; zaklju&#269;na re&#269;enica</div><div class="wq-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="wq-letter">C</span> Zaklju&#269;ak odlomka &rarr; primjeri &rarr; glavna re&#269;enica</div><div class="wq-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="wq-letter">D</span> Dokaz &rarr; glavna re&#269;enica &rarr; komentar</div></div><div class="wq-expl" id="q5e"></div></div>

    <div class="writing-q" id="q6"><div class="wq-num">06 / 10 &middot; signal words &middot; uzrok-posljedica</div><div class="wq-q">Koji signal word pokazuje <em>uzrok&ndash;posljedicu</em> (dakle, stoga)?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="wq-letter">A</span> Furthermore</div><div class="wq-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="wq-letter">B</span> However</div><div class="wq-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="wq-letter">C</span> Therefore</div><div class="wq-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="wq-letter">D</span> Although</div></div><div class="wq-expl" id="q6e"></div></div>

    <div class="writing-q" id="q7"><div class="wq-num">07 / 10 &middot; formalno pisanje</div><div class="wq-q">Koje je pravilo formalnog pisanog teksta na ispitu?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="wq-letter">A</span> Skra&#263;enice su prihvatljive u formalnom tekstu.</div><div class="wq-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="wq-letter">B</span> Uvijek pi&#353;i u prvom licu jednine (I think, I believe).</div><div class="wq-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="wq-letter">C</span> Kolokvijalizam je prihvatljiv ako je tekst kratak.</div><div class="wq-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="wq-letter">D</span> Bez skra&#263;enica &middot; akademski vokabular &middot; neutralan ton.</div></div><div class="wq-expl" id="q7e"></div></div>

    <div class="writing-q" id="q8"><div class="wq-num">08 / 10 &middot; signal words &middot; zaklju&#269;ak</div><div class="wq-q">Koji signal words signaliziraju zaklju&#269;ni odlomak?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="wq-letter">A</span> In conclusion / To sum up</div><div class="wq-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="wq-letter">B</span> However / On the other hand</div><div class="wq-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="wq-letter">C</span> Furthermore / In addition</div><div class="wq-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="wq-letter">D</span> For example / For instance</div></div><div class="wq-expl" id="q8e"></div></div>

    <div class="writing-q" id="q9"><div class="wq-num">09 / 10 &middot; struktura &middot; topic sentence</div><div class="wq-q">Gdje dolazi topic sentence u odlomku?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="wq-letter">A</span> Na po&#269;etku odlomka &mdash; najavljuje glavnu ideju.</div><div class="wq-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="wq-letter">B</span> U sredini odlomka &mdash; nakon primjera.</div><div class="wq-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="wq-letter">C</span> Na kraju odlomka &mdash; kao zaklju&#269;ak.</div><div class="wq-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="wq-letter">D</span> Nije potrebna u kratkom tekstu.</div></div><div class="wq-expl" id="q9e"></div></div>

    <div class="writing-q" id="q10"><div class="wq-num">10 / 10 &middot; email &middot; struktura</div><div class="wq-q">Koji je to&#269;an redoslijed dijelova neformalnog emaila?</div><div class="wq-opts"><div class="wq-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="wq-letter">A</span> Zaklju&#269;ak &rarr; body &rarr; pozdrav &rarr; uvod</div><div class="wq-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="wq-letter">B</span> Pozdrav &rarr; uvod (svrha) &rarr; body &rarr; zaklju&#269;ak &rarr; pozdrav</div><div class="wq-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="wq-letter">C</span> Uvod &rarr; pozdrav &rarr; body &rarr; zaklju&#269;ak</div><div class="wq-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="wq-letter">D</span> Pozdrav &rarr; body &rarr; zaklju&#269;ak (bez uvoda)</div></div><div class="wq-expl" id="q10e"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">&#x1F3C6;</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje zavr&#353;eno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">10 &middot; Pisanje &mdash; kratki tekst<br>Nastavi na Poglavlje 11 &rarr;</div>
      </div>
    </div>

    <!-- ERROR CORRECTION -->
    <hr class="divider">
    <div class="sec-label">// gre&#353;ke u pisanju &mdash; prona&#273;i i ispravi</div>
    <p class="prose" style="margin-bottom:14px">Svaka re&#269;enica / odlomak sadr&#382;i tipi&#269;nu gre&#353;ku iz pisanog zadatka. Klikni da vidI&#353; objasnjenje.</p>

    <div class="err-drill">
      <div class="err-item">
        <div class="error-sent">"<span class="wrong-part">I don't think</span> that technology is always beneficial. <span class="wrong-part">It's</span> clear that some people misuse it."</div>
        <button class="err-btn" onclick="showErrFix('ef1',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef1">&#x2705; <span class="correct">It is not believed that technology is always beneficial. It is clear that some people misuse it.</span><span class="explain">Formalni tekst: bez skra&#263;enica (<b>don't &rarr; do not, It's &rarr; It is</b>) i bez 1. lica (<b>I don't think &rarr; It is not believed / Some argue</b>).</span></div>
      </div>
      <div class="err-item">
        <div class="error-sent">"In conclusion, <span class="wrong-part">another important reason why exercise is beneficial is that it improves sleep quality.</span>"</div>
        <button class="err-btn" onclick="showErrFix('ef2',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef2">&#x2705; <span class="correct">In conclusion, exercise has been shown to improve both physical and mental health, making it an essential part of a healthy lifestyle.</span><span class="explain">Zaklju&#269;ak NIKAD ne uvodi <b>novi argument</b> (sleep quality nije bio u body). Zaklju&#269;ak = samo summary + restate teze.</span></div>
      </div>
      <div class="err-item">
        <div class="error-sent">"Young people spend too much time online. <span class="wrong-part">And</span> this affects their social skills. <span class="wrong-part">But</span> there are some benefits too."</div>
        <button class="err-btn" onclick="showErrFix('ef3',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef3">&#x2705; <span class="correct">Young people spend too much time online. <b>As a result</b>, this affects their social skills. <b>However</b>, there are some benefits too.</span><span class="explain">Formalno pisanje: nikad ne po&#269;inji re&#269;enicu s <b>And</b> ili <b>But</b>. Koristi signal words: <b>As a result / However / Furthermore</b>.</span></div>
      </div>
      <div class="err-item">
        <div class="error-sent">"<span class="wrong-part">Firstly</span>, living abroad helps people grow. <span class="wrong-part">Firstly</span>, they learn new languages. <span class="wrong-part">Firstly</span>, they make new friends."</div>
        <button class="err-btn" onclick="showErrFix('ef4',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef4">&#x2705; <span class="correct"><b>Firstly</b>, living abroad helps people grow. <b>Furthermore</b>, they learn new languages. <b>What is more</b>, they make new friends.</span><span class="explain">Ne ponavljaj isti signal word. Koristi razli&#269;ite: <b>Firstly &rarr; Furthermore &rarr; What is more / Additionally / Also</b>.</span></div>
      </div>
      <div class="err-item">
        <div class="error-sent">"Dear Sir, I am writing to ask about the job. <span class="wrong-part">Can you send me more info?</span> <span class="wrong-part">Thanks a lot!</span>"</div>
        <button class="err-btn" onclick="showErrFix('ef5',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef5">&#x2705; <span class="correct">Dear Sir, I am writing to enquire about the position. <b>I would be grateful if you could provide further information.</b> <b>I look forward to hearing from you.</b></span><span class="explain">Formalni email: "Can you send more info?" &rarr; <b>I would be grateful if you could...</b> &middot; "Thanks a lot!" &rarr; <b>I look forward to hearing from you. / Yours faithfully,</b></span></div>
      </div>
    </div>

        <hr class="divider">
    <div class="sec-label">// sentence building &mdash; stvori re&#269;enicu</div>
    <p class="prose" style="margin-bottom:14px">Napi&#353;i re&#269;enicu. Zatim otvori model i usporedi &mdash; bez gledanja unaprijed. Nema jednog to&#269;nog odgovora &mdash; va&#382;no je pokriti klju&#269;ni element.</p>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 18px;margin-bottom:14px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--sky);margin-bottom:8px">SB1 &middot; Hook re&#269;enica &mdash; uvod eseja</div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:10px">Napi&#353;i hook re&#269;enicu za esej na temu: <b>"Should social media be banned for people under 16?"</b><br><span style="font-size:11.5px;color:var(--t3)">Pojmovi: <em>social media · young people · debate · increasingly</em></span></div>
      <textarea style="width:100%;min-height:60px;resize:vertical;padding:8px 10px;font-size:13px;border-radius:var(--r2);border:1px solid var(--bd-mid);background:var(--bg-base);color:var(--t1);font-family:var(--font-sans)" placeholder="Napi&#353;i svoju hook re&#269;enicu ovdje..."></textarea>
      <button onclick="checkSB(this,'sb1')" style="margin-top:8px;font-size:12px;padding:5px 14px;cursor:pointer;border-radius:var(--r2)">&#x25B6; Prika&#382;i primjer</button>
      <div class="sb-feedback" id="sb1-fb" style="display:none;margin-top:6px;padding:6px 10px;border-radius:var(--r2);font-size:12px"></div>
      <div class="reveal-ans" id="sb1-ans" style="display:none;margin-top:8px;padding:10px 12px;background:var(--lime-dim);border-radius:var(--r2);font-size:13px;color:var(--t2)">
        <b>Primjer modela:</b> <em>Social media has become an increasingly important part of young people's lives, but the debate over whether it should be restricted continues to grow.</em><br>
        <span style="font-size:11.5px;color:var(--t3);margin-top:4px;display:block">&#x2713; Sadr&#382;i hook (kontrast/rasprava) · &#x2713; Uvodi temu bez teze · &#x2713; Formalno (bez skra&#263;enica)</span>
      </div>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 18px;margin-bottom:14px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--sky);margin-bottom:8px">SB2 &middot; Signal word &mdash; kontrast u body odlomku</div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:10px">Napi&#353;i jednu re&#269;enicu koja uvodi <b>kontrastnu ideju</b> u body odlomku o prednostima rada od ku&#263;e.<br><span style="font-size:11.5px;color:var(--t3)">Mora&#353; koristiti: <em>However</em> ili <em>On the other hand</em> &middot; dodaj konkretnu ideju</span></div>
      <textarea style="width:100%;min-height:60px;resize:vertical;padding:8px 10px;font-size:13px;border-radius:var(--r2);border:1px solid var(--bd-mid);background:var(--bg-base);color:var(--t1);font-family:var(--font-sans)" placeholder="Napi&#353;i re&#269;enicu s kontrastom..."></textarea>
      <button onclick="checkSB(this,'sb2')" style="margin-top:8px;font-size:12px;padding:5px 14px;cursor:pointer;border-radius:var(--r2)">&#x25B6; Prika&#382;i primjer</button>
      <div class="sb-feedback" id="sb2-fb" style="display:none;margin-top:6px;padding:6px 10px;border-radius:var(--r2);font-size:12px"></div>
      <div class="reveal-ans" id="sb2-ans" style="display:none;margin-top:8px;padding:10px 12px;background:var(--lime-dim);border-radius:var(--r2);font-size:13px;color:var(--t2)">
        <b>Primjer modela:</b> <em>However, working from home can also lead to feelings of isolation, as employees miss the social interaction that an office environment provides.</em><br>
        <span style="font-size:11.5px;color:var(--t3);margin-top:4px;display:block">&#x2713; However na po&#269;etku · &#x2713; Jasna kontrastna ideja · &#x2713; Konkretna posljedica · &#x2713; Formalni ton</span>
      </div>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 18px;margin-bottom:18px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--sky);margin-bottom:8px">SB3 &middot; Formalni zahtjev &mdash; email</div>
      <div style="font-size:13px;color:var(--t2);margin-bottom:10px">Napi&#353;i <b>jednu re&#269;enicu zahtjeva</b> za formalni email sljede&#263;e vrste: <em>tra&#382;i&#353; informacije o te&#269;aju engleskog u inozemstvu.</em><br><span style="font-size:11.5px;color:var(--t3)">Mora&#353; koristiti: <em>Could you please / I would be grateful if / I would like to</em></span></div>
      <textarea style="width:100%;min-height:60px;resize:vertical;padding:8px 10px;font-size:13px;border-radius:var(--r2);border:1px solid var(--bd-mid);background:var(--bg-base);color:var(--t1);font-family:var(--font-sans)" placeholder="Napi&#353;i re&#269;enicu zahtjeva..."></textarea>
      <button onclick="checkSB(this,'sb3')" style="margin-top:8px;font-size:12px;padding:5px 14px;cursor:pointer;border-radius:var(--r2)">&#x25B6; Prika&#382;i primjer</button>
      <div class="sb-feedback" id="sb3-fb" style="display:none;margin-top:6px;padding:6px 10px;border-radius:var(--r2);font-size:12px"></div>
      <div class="reveal-ans" id="sb3-ans" style="display:none;margin-top:8px;padding:10px 12px;background:var(--lime-dim);border-radius:var(--r2);font-size:13px;color:var(--t2)">
        <b>Primjer modela:</b> <em>Could you please send me more information about the available courses, including the start dates and tuition fees?</em><br>
        <span style="font-size:11.5px;color:var(--t3);margin-top:4px;display:block">&#x2713; Could you please (u&#269;tivi zahtjev) · &#x2713; Dva konkretna detalja · &#x2713; Bez skra&#263;enica · &#x2713; Profesionalni ton</span>
      </div>
    </div>

<!-- CTA -->
    <hr class="divider">
    <div class="sec-label">// &#x2713; checklist &mdash; provjeri prije predaje</div>
    <p class="prose" style="margin-bottom:14px">Zadnje 2 minute ispita: pro&#269;itaj ovaj checklist. Svaka to&#269;ka = potencijalni bod.</p>
    <div class="radar">
      <div class="radar-hd">&#x2713; pre-submission checklist</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">BROJ</div><div class="radar-text"><b>Broj rije&#269;i: 120&ndash;180</b><br>Prebroj! Ispod 120 = automatski odbitak. Iznad 200 = gubi&#353; bodove za preciznost i obi&#269;no grije&#353;i&#353; vi&#353;e.</div></div>
        <div class="radar-item"><div class="radar-badge" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">ZADATAK</div><div class="radar-text"><b>Odgovorio si na SVE to&#269;ke zadatka?</b><br>Provjeri svaki bullet point u zadatku. Svaka neodgovorena to&#269;ka = izgubljeni bodovi za sadr&#382;aj.</div></div>
        <div class="radar-item"><div class="radar-badge" style="background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)">SIGNAL</div><div class="radar-text"><b>Minimum 3 signal words?</b><br>Provjeri: imaš li However / Furthermore / Therefore / In conclusion ili slične? Bez signal words tekst nema koheziju.</div></div>
        <div class="radar-item"><div class="radar-badge" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">ZAKLJU&#268;AK</div><div class="radar-text"><b>Zaklju&#269;ak bez novog argumenta?</b><br>Pro&#269;itaj zadnji odlomak: uvodi li ne&#353;to novo? Ako da &mdash; bri&#353;i ili premjesti u body.</div></div>
        <div class="radar-item"><div class="radar-badge" style="background:var(--red-dim);color:var(--red);border-color:var(--red-border)">FORMALNO</div><div class="radar-text"><b>Bez skra&#263;enica (formalni tekst)?</b><br>Tra&#382;i: don&#39;t, it&#39;s, I&#39;m, can&#39;t, won&#39;t &mdash; svaku zamijeni punim oblikom. 30 sekundi, vrijedi!</div></div>
        <div class="radar-item"><div class="radar-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">STRUKTURA</div><div class="radar-text"><b>Svaki odlomak ima topic sentence?</b><br>Provjeri prvu re&#269;enicu svakog body odlomka &mdash; najavljuje li jasno temu odlomka?</div></div>
      </div>
    </div>

    <div class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim zadacima mature</div><div class="cta-sub">Svi NCVVO zadaci 2010.&ndash;2026. uz detaljna obja&#353;njenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>

    <!-- KEY POINTS -->
    <div class="matura">
      <div class="matura-hd">&#x2B50; for the exam &mdash; key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>Plan PRIJE pisanja</b>: 2 minute za plan &rarr; uvod, 2 argumenta, zaklju&#269;ak. Bez plana = kaoti&#269;an tekst.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Struktura</b>: uvod (hook + teza) &rarr; body (topic sentence + dokaz) &rarr; zaklju&#269;ak (summary + finale).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Signal words</b>: min. 3 u tekstu. However (kontrast) &middot; Furthermore (dodavanje) &middot; Therefore (uzrok) &middot; In conclusion (kraj).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Zaklju&#269;ak</b>: NIKAD novi argument. Samo summary + restate teze + zavr&#353;na misao.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Formalno</b>: bez skra&#263;enica &middot; bez And/But na po&#269;etku re&#269;enice &middot; akademski vokabular &middot; neutralan ton.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Email</b>: Dear + ime/Sir/Madam &rarr; svrha &rarr; body &rarr; I look forward to... &rarr; Yours sincerely/faithfully.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Broj rije&#269;i</b>: 120&ndash;180. Prebroj! Ispod 120 = automatski odbitak. Iznad 200 = gubi&#353; vrijeno.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Provjera</b>: skra&#263;enice, signal words, novi argument u zaklju&#269;ku, odgovoreno na sve to&#269;ke zadatka.</span></li>
      </ul>
    </div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koja je razlika izme&#273;u "However" i "Furthermore"?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>However</b> = kontrast — uvodi suprotnu ideju ili ograni&#269;enje:<br><em>Exercise is beneficial. However, it can cause injuries if done incorrectly.</em><br><br><b>Furthermore</b> = dodavanje — uvodi dodatnu ideju u istom smjeru:<br><em>Exercise improves health. Furthermore, it boosts mood and energy levels.</em><br><br>Test: Je li ideja <b>suprotna</b> prethodnoj? &rarr; However &middot; Ide <b>u istom smjeru</b>? &rarr; Furthermore</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako napisati dobar topic sentence?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Topic sentence = prva re&#269;enica odlomka = najava glavne ideje</b><br><br>Formula: <b>signal word + glavna ideja odlomka</b><br><em>Firstly, living abroad helps young people develop independence.</em><br><em>Furthermore, a gap year provides valuable work experience.</em><br><br>&#x26A0; Topic sentence NIJE primjer ni detalj &mdash; to&#269;no najavljuje &#353;to &#263;e odlomak dokazati.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch07 (pasiv) &mdash; za&#353;to koristim pasiv u pisanju?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Pasiv = formalni ton bez 1. lica &mdash; klju&#269;no za akademsko pisanje!</b><br><br>Umjesto "I think" &rarr; <em>It is believed that...</em> (pasiv)<br>Umjesto "Scientists found" &rarr; <em>It has been found that...</em> (pasiv)<br>Umjesto "People say" &rarr; <em>It is widely argued that...</em> (pasiv)<br><br>Pasiv iz ch07 + signal words iz ch10 = profesionalni akademski stil.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch06 (conditionals) &mdash; gdje ih koristim u pisanju?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Conditionals su klju&#269;ni za argumente i prijedloge!</b><br><br>C1 (realan prijedlog): <em>If the government invests in education, young people <b>will</b> have better opportunities.</em><br>C2 (hipotetski argument): <em>If everyone <b>recycled</b>, the environment <b>would</b> improve significantly.</em><br><br>Conditionals pokazuju argumentirano razmi&#353;ljanje &mdash; ocjenjiva&#269;i cijene kompleksne strukture!</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch11 &mdash; pisanje i slu&#353;anje</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Signal words koje koristi&#353; u pisanju &mdash; iste prepoznaje&#353; u govoru!</b><br><br>U pisanju: <em>"Furthermore, technology has changed..."</em> &rarr; uvodi novi argument<br>U slu&#353;anju: &#269;uje&#353; "Furthermore" &rarr; zna&#353; da dolazi jo&#353; jedan argument<br><br>Iste vje&#353;tine, razli&#269;iti smjer: pisanje (produktivno) &harr; slu&#353;anje (receptivno).<br>Ch11 pokriva strategije prepoznavanja signal words u audio formatu.</div></div>

    <!-- NEXT -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter11.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">11 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Listening strategije</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Signal words u audio formatu</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter09.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 09</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">&#268;itanje s razumijevanjem</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Signal words iz &#269;itanja u pisanju</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter07.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 07</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pasiv</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">It is believed / It has been shown</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter06.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 06</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Conditionals</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">If... will/would u argumentima</div>
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
      <a href="chapter09.html" class="nav-btn">&larr; Chapter 09</a>
      <a href="chapter11.html" class="nav-btn primary">Next chapter &rarr;</a>
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
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  window.scrollTo({top:0,behavior:'smooth'});
}

// WRITING KNOWLEDGE QUIZ
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Uvodni odlomak treba: hook (uvod), background info i jasnu teza/svrhu. Nikad ne počinjaj s 'In my opinion' — premalo snažno za uvod.",w:"✗ Netočno. Uvod treba: hook rečenicu, kratki kontekst, i najavu svrhe/teze. Točan odgovor: B."},
  q2:{c:"✓ Točno. 'However' izražava kontrast — suprotno onome što prethodi. Koristi se kad uvodi suprotnu informaciju ili ograničenje.",w:"✗ Netočno. 'However' = kontrast/suprotno. furthermore/in addition = dodavanje. therefore = posljedica. Točan odgovor: B."},
  q3:{c:"✓ Točno. Zaključak = preformulacija teze + summary + završna misao. Nikad nova informacija! Uvođenje novog argumenta u zaključku = tipična greška koja gubi bodove.",w:"✗ Netočno. Zaključak NIKAD ne uvodi novu informaciju. Samo sažima ono što je već rečeno. Točan odgovor: C — novi argument u zaključku."},
  q4:{c:"✓ Točno. 'In addition' = osim toga, dodaje informaciju. Koristi se za dodavanje drugog argumenta ili primjera.",w:"✗ Netočno. 'In addition' / 'Furthermore' = dodavanje informacije. 'However' = kontrast. Točan odgovor: A."},
  q5:{c:"✓ Točno. Svaki body odlomak: glavna rečenica (topic sentence) → dokazi i primjeri (supporting details) → zaključna rečenica. Uvijek tim redoslijedom!",w:"✗ Netočno. Redoslijed je uvijek: glavna rečenica → dokazi/primjeri → zaključna rečenica. Točan odgovor: B."},
  q6:{c:"✓ Točno. 'Therefore' = dakle, stoga — pokazuje uzrok-posljedicu. Koristi se kad zaključak logički slijedi iz prethodnog.",w:"✗ Netočno. 'Therefore' = uzrok → posljedica. 'However' = kontrast. 'In addition' = dodavanje. Točan odgovor: C."},
  q7:{c:"✓ Točno. Formalno pisanje izbjegava skraćenice (don't → do not), kolokvijalnost i prvo lice (I think → It is argued). Pasiv je čest.",w:"✗ Netočno. Formalno pisanje: bez skraćenica, bez kolokvijalizma, akademski rječnik. Točan odgovor: D."},
  q8:{c:"✓ Točno. 'To sum up' / 'In conclusion' = signali zaključka. Dolaze na početku zadnjeg odlomka.",w:"✗ Netočno. 'To sum up' i 'In conclusion' signaliziraju zaključni odlomak. Točan odgovor: A."},
  q9:{c:"✓ Točno. Topic sentence dolazi na POČETKU odlomka i najavljuje njegovu glavnu ideju. Sve ostalo u odlomku podržava tu rečenicu.",w:"✗ Netočno. Topic sentence je uvijek PRVA rečenica odlomka — najavljuje temu. Točan odgovor: A."},
  q10:{c:"✓ Točno. Neformalni email/pismo: pozdrav (Dear/Hi), uvod koji objašnjava svrhu, body, zaključak s CTA, pozdrav na kraju (Best/Regards).",w:"✗ Netočno. Neformalni tekst ima: pozdrav → svrha → body → zaključak → pozdrav. Točan odgovor: B."}
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch10',ok);
  el.closest('.wq-opts').querySelectorAll('.wq-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.wq-opts').querySelectorAll('.wq-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršeno! Pisanje ti je jasno. 🎉':
      correct>=9?'Odlično! Skoro savršeno.':
      correct>=7?'Good. Ponovi signal words i strukturu odlomka.':
      correct>=5?'Vrati se na Learn — struktura i signal words.':
      'Vrati se na Learn tab i idi polako.';
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
        var opts=document.querySelectorAll('#'+QORDER[i]+' .wq-opt:not(.disabled)');
        if(opts[k-1])opts[k-1].click();break;
      }
    }
  }
});

function retryQuiz(){
  answered={};correct=0;
  QORDER.forEach(function(qid){
    var b=document.getElementById(qid);if(!b)return;
    b.querySelectorAll('.wq-opt').forEach(function(o){o.classList.remove('correct','wrong','disabled')});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  document.getElementById('score').classList.remove('show');
  document.getElementById('completionBadge').style.display='none';
  tabDone[2]=false;saveProgress();
  document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}

// STRUCTURE DRILL
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
      document.getElementById('sv-score-lbl').textContent=sdCorrect===5?'Savršen! 🎉':sdCorrect>=4?'Odlično!':sdCorrect>=3?'Dobro — ponovi signal words.':'Vrati se na Learn tab.';
      box.classList.add('show');
    }
  }
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
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}
function saveProgress(){try{localStorage.setItem('maturix_ch10_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch10_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();

// SENTENCE BUILDING KEYWORD CHECK
var SB_KEYS={
  sb1:{ta:0, keys:['social media','debate','increasingly','young people','however'],
       hint:'Provjeri: sadr&#382;i li re&#269;enica temu (social media/young people) i element debate/rasprave?'},
  sb2:{ta:1, keys:['however','on the other hand','although','nevertheless'],
       hint:'Provjeri: koristi li re&#269;enica signal rije&#269; kontrasta (However / On the other hand)?'},
  sb3:{ta:2, keys:['could you','would be grateful','would like to','i am writing','please'],
       hint:'Provjeri: sadr&#382;i li re&#269;enica formalni zahtjev (Could you please / I would be grateful if)?'}
};
function checkSB(btn, sbId){
  var cfg=SB_KEYS[sbId];
  var ta=btn.closest('div[style]').querySelectorAll('textarea')[0];
  var fb=document.getElementById(sbId+'-fb');
  var ans=document.getElementById(sbId+'-ans');
  if(!ta||!fb||!ans)return;
  var val=ta.value.trim().toLowerCase();
  if(!val){
    fb.style.display='block';
    fb.style.background='var(--amber-dim)';
    fb.style.color='var(--amber)';
    fb.innerHTML='&#x26A0; Napi&#353;i svoju re&#269;enicu prije nego pogledas primjer.';
    return;
  }
  var found=cfg.keys.some(function(k){return val.includes(k);});
  fb.style.display='block';
  if(found){
    fb.style.background='var(--lime-dim)';
    fb.style.color='var(--lime)';
    fb.innerHTML='&#x2713; Dobro! Prepoznat klju&#269;ni element. Usporedi s modelom:';
  }else{
    fb.style.background='var(--amber-dim)';
    fb.style.color='var(--amber)';
    fb.innerHTML='&#x26A0; '+cfg.hint;
  }
  ans.style.display='block';
}

</script>`;

const CH10_JS = `// TRACKER: bilježi pogreške
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

// WRITING KNOWLEDGE QUIZ
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Uvodni odlomak treba: hook (uvod), background info i jasnu teza/svrhu. Nikad ne počinjaj s 'In my opinion' — premalo snažno za uvod.",w:"✗ Netočno. Uvod treba: hook rečenicu, kratki kontekst, i najavu svrhe/teze. Točan odgovor: B."},
  q2:{c:"✓ Točno. 'However' izražava kontrast — suprotno onome što prethodi. Koristi se kad uvodi suprotnu informaciju ili ograničenje.",w:"✗ Netočno. 'However' = kontrast/suprotno. furthermore/in addition = dodavanje. therefore = posljedica. Točan odgovor: B."},
  q3:{c:"✓ Točno. Zaključak = preformulacija teze + summary + završna misao. Nikad nova informacija! Uvođenje novog argumenta u zaključku = tipična greška koja gubi bodove.",w:"✗ Netočno. Zaključak NIKAD ne uvodi novu informaciju. Samo sažima ono što je već rečeno. Točan odgovor: C — novi argument u zaključku."},
  q4:{c:"✓ Točno. 'In addition' = osim toga, dodaje informaciju. Koristi se za dodavanje drugog argumenta ili primjera.",w:"✗ Netočno. 'In addition' / 'Furthermore' = dodavanje informacije. 'However' = kontrast. Točan odgovor: A."},
  q5:{c:"✓ Točno. Svaki body odlomak: glavna rečenica (topic sentence) → dokazi i primjeri (supporting details) → zaključna rečenica. Uvijek tim redoslijedom!",w:"✗ Netočno. Redoslijed je uvijek: glavna rečenica → dokazi/primjeri → zaključna rečenica. Točan odgovor: B."},
  q6:{c:"✓ Točno. 'Therefore' = dakle, stoga — pokazuje uzrok-posljedicu. Koristi se kad zaključak logički slijedi iz prethodnog.",w:"✗ Netočno. 'Therefore' = uzrok → posljedica. 'However' = kontrast. 'In addition' = dodavanje. Točan odgovor: C."},
  q7:{c:"✓ Točno. Formalno pisanje izbjegava skraćenice (don't → do not), kolokvijalnost i prvo lice (I think → It is argued). Pasiv je čest.",w:"✗ Netočno. Formalno pisanje: bez skraćenica, bez kolokvijalizma, akademski rječnik. Točan odgovor: D."},
  q8:{c:"✓ Točno. 'To sum up' / 'In conclusion' = signali zaključka. Dolaze na početku zadnjeg odlomka.",w:"✗ Netočno. 'To sum up' i 'In conclusion' signaliziraju zaključni odlomak. Točan odgovor: A."},
  q9:{c:"✓ Točno. Topic sentence dolazi na POČETKU odlomka i najavljuje njegovu glavnu ideju. Sve ostalo u odlomku podržava tu rečenicu.",w:"✗ Netočno. Topic sentence je uvijek PRVA rečenica odlomka — najavljuje temu. Točan odgovor: A."},
  q10:{c:"✓ Točno. Neformalni email/pismo: pozdrav (Dear/Hi), uvod koji objašnjava svrhu, body, zaključak s CTA, pozdrav na kraju (Best/Regards).",w:"✗ Netočno. Neformalni tekst ima: pozdrav → svrha → body → zaključak → pozdrav. Točan odgovor: B."}
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch10',ok);
  el.closest('.wq-opts').querySelectorAll('.wq-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.wq-opts').querySelectorAll('.wq-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršeno! Pisanje ti je jasno. 🎉':
      correct>=9?'Odlično! Skoro savršeno.':
      correct>=7?'Good. Ponovi signal words i strukturu odlomka.':
      correct>=5?'Vrati se na Learn — struktura i signal words.':
      'Vrati se na Learn tab i idi polako.';
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
        var opts=document.querySelectorAll('#'+QORDER[i]+' .wq-opt:not(.disabled)');
        if(opts[k-1])opts[k-1].click();break;
      }
    }
  }
});

function retryQuiz(){
  answered={};correct=0;
  QORDER.forEach(function(qid){
    var b=document.getElementById(qid);if(!b)return;
    b.querySelectorAll('.wq-opt').forEach(function(o){o.classList.remove('correct','wrong','disabled')});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  document.getElementById('score').classList.remove('show');
  document.getElementById('completionBadge').style.display='none';
  tabDone[2]=false;saveProgress();
  document.getElementById('l2').scrollIntoView({behavior:'smooth'});
}

// STRUCTURE DRILL
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
      document.getElementById('sv-score-lbl').textContent=sdCorrect===5?'Savršen! 🎉':sdCorrect>=4?'Odlično!':sdCorrect>=3?'Dobro — ponovi signal words.':'Vrati se na Learn tab.';
      box.classList.add('show');
    }
  }
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
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}
function saveProgress(){try{localStorage.setItem('maturix_ch10_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch10_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();

// SENTENCE BUILDING KEYWORD CHECK
var SB_KEYS={
  sb1:{ta:0, keys:['social media','debate','increasingly','young people','however'],
       hint:'Provjeri: sadr&#382;i li re&#269;enica temu (social media/young people) i element debate/rasprave?'},
  sb2:{ta:1, keys:['however','on the other hand','although','nevertheless'],
       hint:'Provjeri: koristi li re&#269;enica signal rije&#269; kontrasta (However / On the other hand)?'},
  sb3:{ta:2, keys:['could you','would be grateful','would like to','i am writing','please'],
       hint:'Provjeri: sadr&#382;i li re&#269;enica formalni zahtjev (Could you please / I would be grateful if)?'}
};
function checkSB(btn, sbId){
  var cfg=SB_KEYS[sbId];
  var ta=btn.closest('div[style]').querySelectorAll('textarea')[0];
  var fb=document.getElementById(sbId+'-fb');
  var ans=document.getElementById(sbId+'-ans');
  if(!ta||!fb||!ans)return;
  var val=ta.value.trim().toLowerCase();
  if(!val){
    fb.style.display='block';
    fb.style.background='var(--amber-dim)';
    fb.style.color='var(--amber)';
    fb.innerHTML='&#x26A0; Napi&#353;i svoju re&#269;enicu prije nego pogledas primjer.';
    return;
  }
  var found=cfg.keys.some(function(k){return val.includes(k);});
  fb.style.display='block';
  if(found){
    fb.style.background='var(--lime-dim)';
    fb.style.color='var(--lime)';
    fb.innerHTML='&#x2713; Dobro! Prepoznat klju&#269;ni element. Usporedi s modelom:';
  }else{
    fb.style.background='var(--amber-dim)';
    fb.style.color='var(--amber)';
    fb.innerHTML='&#x26A0; '+cfg.hint;
  }
  ans.style.display='block';
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
