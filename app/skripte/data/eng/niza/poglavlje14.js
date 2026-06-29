// Maturiraj.hr — Engleski niža razina · Poglavlje 14
// Articles & Determiners
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useRef } from "react";

export default function EngleskiNizaPoglavlje14({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  navRef.current = { onBack, onNext, onPrev, onNavigate };

  useEffect(() => {
    const styleId = "skripta-ch14-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH14_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch14-js";
    scriptEl.textContent = CH14_JS;
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
      if (num === 15 && nav.onNext) nav.onNext();
      else if (num === 13 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch14-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch14-root"
      dangerouslySetInnerHTML={{ __html: CH14_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH14_CSS = `/* ─── DESIGN TOKENS ──────────────────────────────────────── */
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

const CH14_BODY = `<div class="shell">
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
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 14 · Članovi: a / an / the</div>
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
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 · Neupravni govor</div>
  <div class="sb-item active"><span class="sb-dot"></span> 14 · Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 · Komparativ i tag pitanja</div>
  <div class="sb-footer">14 / 15 · maturiraj.hr</div>
</nav>
<main class="main"><div class="content-wrap">
  <div class="breadcrumb">
    <span onclick="window.location='chapter13.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>grammar+</span>
    <span class="bc-sep">/</span><span class="bc-active">articles-determiners</span>
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
      <div class="hero-eyebrow">chapter 14 &middot; grammar+</div>
      <h1 class="hero-title">Articles <span>&amp; Determiners</span></h1>
      <div class="hero-meta" style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap">
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">&#9201; ~35 min</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">ni&#382;a razina</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid;background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">14 / 15</span>
      </div>
      <p class="hero-sub">a/an &middot; the &middot; zero article &middot; kada koji &middot; geografija &middot; institucije &middot; superlativ</p>
      <div class="progress-track"><div class="progress-bar" style="width:100%;background:linear-gradient(90deg,var(--lime),var(--sky))"></div></div>
    </div>
        <div style="margin-bottom:16px;padding:14px 18px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r3)">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--amber);margin-bottom:6px">// pro&#353;ireno gradivo &mdash; za koga je ovo?</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6">
        <b>Ch14 (Articles & Determiners)</b> pokriva a/an/the i zero article. Na ispitu se pojavljuje u <b>1&ndash;2 pitanja u gramatičkom dijelu ili gap fill</b>.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">
          &#x2713; Preporu&#269;a se ako ima&scaron; vi&scaron;e od 1 tjedna pripreme &middot;
          &#x26A0; Ako ima&scaron; manje od 1 tjedna &mdash; fokusiraj se na Ch01&ndash;Ch07 i Ch12 prvo
        </span>
      </div>
    </div>
<div class="tags">
      <span class="pill pill-lime">a / an</span>
      <span class="pill pill-sky">the</span>
      <span class="pill pill-violet">zero article</span>
      <span class="pill pill-amber">Geografija</span>
      <span class="pill pill-red">Zamke</span>
    </div>
    <div class="sec-label">// at a glance &mdash; 4 mogu&#263;nosti</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">a/an</div><div class="stat-name">Indefinite article</div><div class="stat-desc">Prva pojava &middot; jedna od mnogih &middot; zvuk odlu&#269;uje!</div></div>
      <div class="stat-card"><div class="stat-icon sky">the</div><div class="stat-name">Definite article</div><div class="stat-desc">Znamo o &#269;emu &middot; jedinstven &middot; superlativ &middot; rijeke</div></div>
      <div class="stat-card"><div class="stat-icon violet">—</div><div class="stat-name">Zero article</div><div class="stat-desc">Op&#263;enito plural &middot; jezici &middot; gradovi &middot; institucije</div></div>
      <div class="stat-card"><div class="stat-icon amber">&#x26A0;</div><div class="stat-name">Zamka #1</div><div class="stat-desc">a university (ne an!) &middot; an hour (ne a!) &mdash; ZVUK!</div></div>
    </div>
    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">a vs an</div><div class="cv">Ovisi o ZVUKU (ne slovu!): a university (/j/) &middot; an hour (/aʊ/) &middot; an honest man (/ɒ/)</div></div>
      <div class="concept-row"><div class="ck sky">the</div><div class="cv">Specifično/poznato &middot; jedinstven (the Sun, the Moon) &middot; superlativ &middot; rijeke &middot; 2. pojava</div></div>
      <div class="concept-row"><div class="ck violet">Zero article</div><div class="cv">Jezici (English) &middot; gradovi (London) &middot; op&#263;enito plural (Children need...) &middot; go to school/bed/work</div></div>
      <div class="concept-row"><div class="ck amber">Geografija</div><div class="cv">the: rijeke, mora, planinski lanci, pl. dr&#382;ava &middot; bez: gradovi, dr&#382;ave (osim UK, USA), kontinenti</div></div>
      <div class="concept-row"><div class="ck red">Zamka #1</div><div class="cv">a European (/j/ suglasnik) &middot; an hour (/aʊ/ vokal) &middot; an FBI agent (/ɛ/ vokal) &mdash; UVIJEK slušaj zvuk!</div></div>
    </div>
    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; 4 pitanja</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; 4 pitanja koja rje&#353;avaju sve</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Zna li govornik (i slu&#353;atelj) o &#269;emu govori?</b> DA &rarr; the &middot; NE &rarr; a/an</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Je li to jedinstven objekt?</b> (the Sun, the Pope) &rarr; the</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Je li to op&#263;enito/kategorija?</b> (Children need love) &rarr; zero article</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>a ili an?</b> Slušaj ZVUK prve rije&#269;i &mdash; vokal &rarr; an &middot; suglasnik &rarr; a</div></div>
      </div>
    </div>
    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to "a university" a ne "an university"?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Jer 'university' po&#269;inje ZVUKOM /j/ (suglasnik), ne vokalom!</b><br><br>
      'university' = /juːnɪˈvɜːsɪti/ &rarr; po&#269;inje suglasni&#269;kim zvukom /j/ &rarr; <b>a</b> university<br>
      Slovo 'u' je vokal, ali ZVUK je suglasni&#269;ki &rarr; uvijek slu&#353;aj zvuk!<br><br>
      Isti princip: <b>a</b> European (/j/) &middot; <b>a</b> uniform (/j/) &middot; <b>an</b> umbrella (/ʌ/)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kada koristimo zero article (bez &#269;lana)?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Bez člana (—)</b> za:<br>Jezici: <span class="ok">speak English, learn French</span><br>Obroci: <span class="ok">have breakfast/lunch/dinner</span><br>Prijevoz: <span class="ok">by car/bus/train</span> · Sport: <span class="ok">play football</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Geografija &mdash; kdy the, kdy bez?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>the +</b> rijeke · planinski lanci · oceani/mora · The Netherlands/Philippines/UK<br><b>— +</b> gradovi · države (većina) · kontinenti · jezera · pojedine planine<br>&#x26A0; Thames/Nile/Amazon = the · Paris/France/Europe = —</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>a → the: pravilo prve i druge pojave</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Prva pojava</b> (nepoznato) → <b>a/an</b>: <span class="ok">I saw <b>a</b> dog.</span><br><b>Druga pojava</b> (već poznato) → <b>the</b>: <span class="ok"><b>The</b> dog was big.</span><br>&#x26A0; Iznimka: već poznat objema stranama pri prvom spomonu → the odmah</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kada superlativ uvijek ide s 'the'?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Superlativ = <b>uvijek the</b>: <span class="ok">She is <b>the</b> tallest.</span><br>Ordinal numbers: <span class="ok"><b>the</b> first · <b>the</b> second</span><br>Jedinstven: <span class="ok"><b>the</b> only · <b>the</b> same · <b>the</b> best</span></div>
    </div>
    <div class="nav-row">
      <a href="chapter13.html" class="nav-btn">&larr; Chapter 13</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — LEARN ══ -->
  <div class="layer" id="l1">
    <div class="sec-label">// zlatna pravila &mdash; a/an/the/zero</div>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">a/an</div>
        <div><div class="gram-title">Indefinite article &mdash; a/an</div><div class="gram-sub">neodre&#273;eni &#269;lan &middot; jedna od mnogih &middot; prva pojava</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'a + suglasnik | an + vokal (ZVUK, ne slovo!)')">copy</button>
          <span class="lbl">Formula</span><br>
          <span class="kw" style="color:var(--lime)">a</span> + rije&#269; koja po&#269;inje <span class="val">suglasnikom</span><br>
          <span class="kw" style="color:var(--lime)">an</span> + rije&#269; koja po&#269;inje <span class="val">vokalnim zvukom</span><br>
          <span style="font-size:12px;color:var(--t2)">
            a <b>cat</b> &middot; a <b>university</b> (/j/) &middot; a <b>European</b> (/j/)<br>
            an <b>apple</b> &middot; an <b>hour</b> (/aʊ/) &middot; an <b>honest</b> man (/ɒ/)
          </span><br>
          <span style="color:var(--red);font-size:12px">&#x26A0; Uvijek slušaj ZVUK, ne gle&#273;aj slovo!</span>
        </div>
      </div>
    </div>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">the</div>
        <div><div class="gram-title">Definite article &mdash; the</div><div class="gram-sub">odre&#273;eni &#269;lan &middot; poznato &middot; jedinstven</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'the: poznato/specificno + jedinstven + superlativ + 2. pojava + rijeke/mora')">copy</button>
          <span class="lbl">Kada the</span><br>
          &bull; Poznato obojici: <em>Please close <b>the</b> window.</em><br>
          &bull; Jedinstven: <em><b>the</b> Sun, <b>the</b> Moon, <b>the</b> Pope</em><br>
          &bull; Superlativ: <em><b>the</b> best, <b>the</b> most, <b>the</b> tallest</em><br>
          &bull; 2. pojava: <em>I saw a dog. <b>The</b> dog was barking.</em><br>
          &bull; Rijeke/mora: <em><b>the</b> Thames, <b>the</b> Pacific</em>
        </div>
      </div>
    </div>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)">—</div>
        <div><div class="gram-title">Zero article &mdash; bez &#269;lana</div><div class="gram-sub">op&#263;enito &middot; jezici &middot; gradovi &middot; institucije</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'zero article: jezici, gradovi, kontinenti, opceniti plural, institucije')">copy</button>
          <span class="lbl">Kada zero (—)</span><br>
          &bull; Jezici: <em>speak <b>English</b>, learn <b>French</b></em><br>
          &bull; Gradovi: <em>live in <b>London</b>, visit <b>Paris</b></em><br>
          &bull; Op&#263;eniti plural: <em><b>Children</b> need love. <b>Dogs</b> are loyal.</em><br>
          &bull; Institucije (funkcija): <em>go to <b>school</b>, at <b>work</b>, in <b>hospital</b></em><br>
          &bull; Obrok: <em>have <b>breakfast</b>, eat <b>lunch</b></em>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// a/an/the/zero &mdash; usporedna tablica</div>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>&#268;lan</th><th>Koristimo za</th><th>Primjeri</th></tr></thead>
        <tbody>
          <tr><td><b style="color:var(--lime)">a/an</b></td><td>Prva pojava &middot; jedna od mnogih &middot; zanimanje</td><td><em>I saw <b>a</b> cat. She is <b>a</b> teacher. He bought <b>an</b> apple.</em></td></tr>
          <tr><td><b style="color:var(--sky)">the</b></td><td>Poznato/specifično &middot; jedinstven &middot; superlativ &middot; rijeke</td><td><em><b>The</b> cat is sleeping. <b>The</b> Sun &middot; <b>the</b> best film &middot; <b>the</b> Thames</em></td></tr>
          <tr><td><b style="color:var(--violet)">—</b></td><td>Jezici &middot; gradovi &middot; op&#263;eniti plural &middot; institucije</td><td><em>Speak <b>English</b> &middot; visit <b>Paris</b> &middot; <b>Children</b> need love &middot; go to <b>school</b></em></td></tr>
        </tbody>
      </table>
    </div>

    <hr class="divider">
    <div class="sec-label">// a vs an &mdash; zamke zvuka</div>
    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--lime-dim);color:var(--lime);border-bottom-color:var(--lime-border)">a + suglasnik ZVUK</div>
        <div class="cmp-body">
          <div class="cmp-row">a <b>cat</b>, a <b>book</b>, a <b>friend</b></div>
          <div class="cmp-row">a <b>university</b> — /j/ zvuk!</div>
          <div class="cmp-row">a <b>European</b> — /j/ zvuk!</div>
          <div class="cmp-row">a <b>one</b>-way street — /w/ zvuk!</div>
          <div class="cmp-row" style="color:var(--t3);font-size:12px">Slovo je vokal, ali zvuk je suglasni&#269;ki</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--sky-dim);color:var(--sky);border-bottom-color:var(--sky-border)">an + vokal ZVUK</div>
        <div class="cmp-body">
          <div class="cmp-row">an <b>apple</b>, an <b>egg</b>, an <b>umbrella</b></div>
          <div class="cmp-row">an <b>hour</b> — /aʊ/ zvuk, h je nijemo!</div>
          <div class="cmp-row">an <b>honest</b> man — /ɒ/ zvuk!</div>
          <div class="cmp-row">an <b>FBI</b> agent — /ɛ/ zvuk!</div>
          <div class="cmp-row" style="color:var(--t3);font-size:12px">Slovo je suglasnik, ali zvuk je vokalski</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// zamke &mdash; za&#353;to NIJE to&#269;no?</div>
    <div class="why-not">
      <div class="wn-item"><div class="wn-wrong">&#x274C; She speaks the English.</div><div class="wn-why">Jezici &rarr; zero article &rarr; <span class="wn-fix">&#x2713; She speaks <b>English</b>.</span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; He is an university student.</div><div class="wn-why">university = /j/ zvuk (suglasnik) &rarr; <span class="wn-fix">&#x2713; He is <b>a</b> university student.</span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; She went to the Paris.</div><div class="wn-why">Gradovi &rarr; zero article &rarr; <span class="wn-fix">&#x2713; She went to <b>Paris</b>.</span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; It was a best film I've seen.</div><div class="wn-why">Superlativ &rarr; uvijek the &rarr; <span class="wn-fix">&#x2713; It was <b>the</b> best film.</span></div></div>
      <div class="wn-item"><div class="wn-wrong">&#x274C; The children need the love.</div><div class="wn-why">Op&#263;eniti plural &rarr; zero article &rarr; <span class="wn-fix">&#x2713; <b>Children</b> need <b>love</b>.</span></div></div>
    </div>

    <div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; articles</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>a vs an &mdash; zvuk, ne slovo!</b><br>a university (/j/) &middot; an hour (/aʊ/) &middot; an honest (/ɒ/). Uvijek slušaj prvi zvuk!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>the ispred jezika = gre&#353;ka</b><br>She speaks the English ✗ → speaks English ✓. Jezici nikad ne dobivaju the!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>the ispred gradova = gre&#353;ka</b><br>the Paris ✗ → Paris ✓. Iznimka: the Hague (specifi&#269;an slu&#269;aj).</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>a/an ispred superlativa = gre&#353;ka</b><br>a best film ✗ → the best film ✓. Superlativ = jedinstven = the!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>go to the school (zgrada) vs go to school (u&#269;enik)</b><br>Institucije bez the = funkcija. S the = fizicka zgrada/posjet.</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Na ispitu:</b> gap fill (upi&#353;i a/an/the/—) &middot; MCQ &middot; error correction<br><b>Najva&#382;nije:</b> a vs an (zvuk!) &middot; superlativ + the &middot; jezici/gradovi bez the</div></div>
      </div>
    </div>

        <hr class="divider">
    <div class="sec-label">// geografija &mdash; s <em>the</em> ili bez?</div>
    <p class="prose" style="margin-bottom:14px">Geografska imena su jedna od najtipičnijih zamki s članovima. Nauči po kategorijama &mdash; ne napamet, nego logikom.</p>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:16px">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--bg-elevated)">
            <th style="padding:8px 12px;text-align:left;font-weight:600;color:var(--t2);border-bottom:1px solid var(--bd);width:28%">Kategorija</th>
            <th style="padding:8px 12px;text-align:left;font-weight:600;color:var(--lime);border-bottom:1px solid var(--bd);width:36%">S <b>the</b> &#x2713;</th>
            <th style="padding:8px 12px;text-align:left;font-weight:600;color:var(--sky);border-bottom:1px solid var(--bd)">Bez the (zero) &#x2713;</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:8px 12px;color:var(--t1);font-weight:600">Rijeke</td>
            <td style="padding:8px 12px;color:var(--t2)"><b>the</b> Thames &middot; <b>the</b> Nile &middot; <b>the</b> Amazon &middot; <b>the</b> Danube</td>
            <td style="padding:8px 12px;color:var(--t3);font-size:12px">Thames, Nile, Amazon, Danube &mdash; svaka rijeka na planeti ima <em>the</em>.</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:8px 12px;color:var(--t1);font-weight:600">Mora i oceani</td>
            <td style="padding:8px 12px;color:var(--t2)"><b>the</b> Pacific &middot; <b>the</b> Atlantic &middot; <b>the</b> Mediterranean &middot; <b>the</b> Adriatic</td>
            <td style="padding:8px 12px;color:var(--t3);font-size:12px">Mora i oceani uvijek idu s <em>the</em>.</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:8px 12px;color:var(--t1);font-weight:600">Planinski lanci</td>
            <td style="padding:8px 12px;color:var(--t2)"><b>the</b> Alps &middot; <b>the</b> Himalayas &middot; <b>the</b> Andes &middot; <b>the</b> Rockies</td>
            <td style="padding:8px 12px;color:var(--t3);font-size:12px">Planinski lanci (množina) = <em>the</em>. Pojedina planina: Mount Everest (bez the).</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:8px 12px;color:var(--t1);font-weight:600">Dr&#382;ave &mdash; iznimke</td>
            <td style="padding:8px 12px;color:var(--t2)"><b>the</b> Netherlands &middot; <b>the</b> Philippines &middot; <b>the</b> United States &middot; <b>the</b> UK &middot; <b>the</b> UAE</td>
            <td style="padding:8px 12px;color:var(--sky)">France &middot; Croatia &middot; Germany &middot; Japan &middot; Brazil &middot; Spain</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:8px 12px;color:var(--t1);font-weight:600">Gradovi</td>
            <td style="padding:8px 12px;color:var(--t3);font-size:12px">Gotovo nikad <em>the</em>.<br><small>Iznimka: The Hague (Den Haag)</small></td>
            <td style="padding:8px 12px;color:var(--sky)">London &middot; Paris &middot; Zagreb &middot; New York &middot; Tokyo</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:8px 12px;color:var(--t1);font-weight:600">Kontinenti</td>
            <td style="padding:8px 12px;color:var(--t3);font-size:12px">Gotovo nikad <em>the</em>.</td>
            <td style="padding:8px 12px;color:var(--sky)">Europe &middot; Asia &middot; Africa &middot; America &middot; Australia</td>
          </tr>
          <tr>
            <td style="padding:8px 12px;color:var(--t1);font-weight:600">Otoci</td>
            <td style="padding:8px 12px;color:var(--t2)"><b>the</b> Canary Islands &middot; <b>the</b> Maldives &middot; <b>the</b> Caribbean</td>
            <td style="padding:8px 12px;color:var(--sky)">Sicily &middot; Cuba &middot; Majorca &middot; Hvar <span style="color:var(--t3);font-size:11px">(pojedini otoci bez the)</span></td>
          </tr>
        </tbody>
      </table>
      <div style="padding:8px 14px;background:var(--amber-dim);border-top:1px solid var(--amber-border)">
        <span style="font-size:12px;color:var(--amber)">&#x26A0; Najtipičnija zamka: <b>the UK / the USA / the Netherlands</b> &mdash; dr&#382;ave s <em>the</em> jer su to kratice ili mno&#382;inski nazivi. France, Germany, Croatia &mdash; bez <em>the</em>.</span>
      </div>
    </div>

<hr class="divider">
    <div class="sec-label">// article drill &mdash; a, an, the ili —?</div>
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

  <!-- ══ LAYER 2 — PRACTICE ══ -->
  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// knowledge quiz</strong> &middot; 10 pitanja o articles. Target: <strong>8/10</strong>.</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>
    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 12 &middot; a vs an &middot; zvuk</div><div class="q-text">She is _______ university student.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> an</div>
      <div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> a</div>
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> the</div>
      <div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> —</div>
    </div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 12 &middot; the &middot; rijeke</div><div class="q-text">They sailed down _______ Thames to the sea.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> a</div>
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">B</span> an</div>
      <div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">C</span> the</div>
      <div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> —</div>
    </div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 12 &middot; zero article &middot; plural general</div><div class="q-text">_______ children need plenty of sleep and exercise.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">A</span> —</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> A</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">C</span> The</div>
      <div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> An</div>
    </div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 12 &middot; a vs an &middot; nijemo h</div><div class="q-text">We waited for _______ hour before the show started.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> a</div>
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> the</div>
      <div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">C</span> an</div>
      <div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> —</div>
    </div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 12 &middot; the &middot; jedinstven objekt</div><div class="q-text">_______ Sun is approximately 150 million km from Earth.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> A</div>
      <div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">B</span> The</div>
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> An</div>
      <div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> —</div>
    </div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 12 &middot; zero article &middot; jezici</div><div class="q-text">She has been learning _______ Spanish for three years.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">A</span> —</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">B</span> the</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">C</span> a</div>
      <div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> an</div>
    </div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 12 &middot; a → the &middot; ponovna pojava</div><div class="q-text">I saw _______ dog in the park. _______ dog was barking loudly.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> a / a</div>
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">B</span> the / the</div>
      <div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> a / the — krivi redoslijed</div>
      <div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">D</span> a / the</div>
    </div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 12 &middot; zero article &middot; gradovi</div><div class="q-text">She has always wanted to live in _______ Paris.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">A</span> —</div>
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> the</div>
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">C</span> a</div>
      <div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> an</div>
    </div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 12 &middot; the &middot; superlativ</div><div class="q-text">It was _______ most exciting film I have ever seen.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> a</div>
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">B</span> an</div>
      <div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">C</span> the</div>
      <div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> —</div>
    </div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 12 &middot; zero article &middot; institucije</div><div class="q-text">He goes to _______ school by bus every morning.</div></div><div class="q-opts">
      <div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">A</span> —</div>
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> the</div>
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">C</span> a</div>
      <div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> an</div>
    </div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="q-block" id="q11"><div class="q-head"><div class="q-meta">11 / 12 &middot; articles in context &middot; MCQ</div><div class="q-text">Read the sentence and choose the best option: "She has always wanted to visit _______ Louvre — it is one of the most famous museums in the world."</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">A</span> a</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">B</span> —</div><div class="q-opt" onclick="ans(this,'q11',true)" tabindex="0"><span class="q-letter">C</span> the</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">D</span> an</div></div><div class="q-expl" id="q11e" aria-live="polite"></div></div>
<div class="q-block" id="q12"><div class="q-head"><div class="q-meta">12 / 12 &middot; articles in context &middot; MCQ</div><div class="q-text">Choose the correct option: "My brother is _______ engineer. He works for _______ company that builds bridges."</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">A</span> a … the</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">B</span> an … the</div><div class="q-opt" onclick="ans(this,'q12',true)" tabindex="0"><span class="q-letter">C</span> an … a</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">D</span> the … a</div></div><div class="q-expl" id="q12e" aria-live="polite"></div></div>
<div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/12</div><div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px;text-align:center">
        <div style="font-size:28px;margin-bottom:8px">&#x1F3C6;</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje zavr&#353;eno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">14 &middot; Articles &amp; Determiners<br>Nastavi na Ch15 &rarr;</div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// fill in the blank &mdash; a/an/the ili —</div>
    <p class="prose" style="margin-bottom:16px">Upi&#353;i to&#269;an &#269;lan. Za zero article upi&#353;i crtu (—) ili ostavi prazno.</p>
    <div class="fitb-block" id="fi1">
      <div class="fitb-sent">She is ___ honest person and everyone trusts her.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi1_inp" placeholder="an" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','an','art')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi1','f1fb','an','art')">Check</button>
      </div>
      <div class="fitb-fb" id="f1fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi2">
      <div class="fitb-sent">He has been learning ___ Japanese for two years.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi2_inp" placeholder="—" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','—','art')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi2','f2fb','—','art')">Check</button>
      </div>
      <div class="fitb-fb" id="f2fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi3">
      <div class="fitb-sent">___ Amazon is ___ longest river in South America. (2. blank)</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi3_inp" placeholder="the" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','the','art')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi3','f3fb','the','art')">Check</button>
      </div>
      <div class="fitb-fb" id="f3fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi4">
      <div class="fitb-sent">It was ___ worst day of her life.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi4_inp" placeholder="the" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','the','art')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi4','f4fb','the','art')">Check</button>
      </div>
      <div class="fitb-fb" id="f4fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi5">
      <div class="fitb-sent">The children go to ___ school by bus every morning.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi5_inp" placeholder="—" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','—','art')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi5','f5fb','—','art')">Check</button>
      </div>
      <div class="fitb-fb" id="f5fb" aria-live="polite"></div>
    </div>
    <div class="fitb-block" id="fi6">
      <div class="fitb-sent">I saw ___ interesting film last night.</div>
      <div class="fitb-inputs">
        <input class="fitb" id="fi6_inp" placeholder="an" type="text"
          onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','an','art')"
          autocomplete="off" autocorrect="off" spellcheck="false">
        <button class="fitb-btn" onclick="checkFitb('fi6','f6fb','an','art')">Check</button>
      </div>
      <div class="fitb-fb" id="f6fb" aria-live="polite"></div>
    </div>

    <hr class="divider">
    <div class="sec-label">// error correction</div>
    <p class="prose" style="margin-bottom:14px">Prona&#273;i gre&#353;ku u upotrebi &#269;lana.</p>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">""She is an university student studying medicine.""</div>
        <button class="err-btn" onclick="showErrFix('ef1',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef1">&#x2705; <span class="correct">She is <b>a</b> university student studying medicine.</span><span class="explain">university po&#269;inje zvukom /j/ (suglasnik) &rarr; a university. Uvijek pazi na ZVUK, ne slovo!</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""He is the best player. He plays a football.""</div>
        <button class="err-btn" onclick="showErrFix('ef2',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef2">&#x2705; <span class="correct">He plays <b>football</b>.</span><span class="explain">Sportovi nemaju &#269;lan: play football, play tennis, play chess. a/the + sport = gre&#353;ka.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""They went to the Paris last summer.""</div>
        <button class="err-btn" onclick="showErrFix('ef3',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef3">&#x2705; <span class="correct">They went to <b>Paris</b> last summer.</span><span class="explain">Gradovi nemaju &#269;lan (osim The Hague). Paris, London, Zagreb &rarr; zero article.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""She speaks the Spanish and the Italian.""</div>
        <button class="err-btn" onclick="showErrFix('ef4',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef4">&#x2705; <span class="correct">She speaks <b>Spanish</b> and <b>Italian</b>.</span><span class="explain">Jezici nemaju &#269;lan: speak Spanish, learn Italian, study English.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">""It was a most exciting match of the season.""</div>
        <button class="err-btn" onclick="showErrFix('ef5',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="ef5">&#x2705; <span class="correct">It was <b>the</b> most exciting match of the season.</span><span class="explain">Superlativ uvijek ide s the: <b>the</b> most exciting, <b>the</b> best, <b>the</b> worst.</span></div>
      </div>
    </div>
    <div class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim zadacima mature</div><div class="cta-sub">Svi NCVVO zadaci uz detaljna obja&#353;njenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>
    <div class="matura">
      <div class="matura-hd">&#x2B50; for the exam &mdash; key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>a vs an</b>: ZVUK, ne slovo! a university (/j/) &middot; an hour (/aʊ/) &middot; an honest (/ɒ/)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>the</b>: poznato/specifično &middot; jedinstven (the Sun) &middot; superlativ &middot; rijeke (the Thames)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>zero article</b>: jezici &middot; gradovi &middot; op&#263;eniti plural &middot; institucije (go to school)</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>a&rarr;the</b>: prva pojava = a/an &middot; sve sljedeće pojave iste stvari = the</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>superlativ</b>: uvijek the best, the most, the tallest — bez iznimke!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>geo</b>: the Thames/Pacific/Alps &middot; — Paris/France/Europe &middot; the UK/USA (pl./akronim)</span></li>
      </ul>
    </div>
    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to 'an university' nije ispravno?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Jer 'university' počinje zvukom /j/ (suglasnik), ne vokalom!</b><br><br>'university' = /juːnɪˈvɜːsɪti/ → počinje suglasnič-kim zvukom /j/<br>Slovo 'u' jest vokal, ali ZVUK je suglasničky → <b>a</b> university<br><br>Isti princip: a European (/j/) · a useful tool (/j/) · an umbrella (/ʌ/)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kada geografski pojam dobiva 'the'?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Rijeke:</b> the Thames, the Nile, the Amazon, the Danube<br><b>Mora/oceani:</b> the Pacific, the Atlantic, the Mediterranean<br><b>Planinski lanci:</b> the Alps, the Himalayas, the Andes<br><b>Plural dr&#382;ava:</b> the Netherlands, the United States, the UK<br><br><b>Bez the:</b> gradovi (Paris) · dr&#382;ave (France) · kontinenti (Europe)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to superlativ uvijek ide s 'the'?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Superlativ opisuje jedinstven entitet &mdash; može biti samo jedan 'najbolji'.</b><br><br>Jedinstven → the (isti razlog kao the Sun, the Pope)<br><br>the best film · the most expensive hotel · the tallest building<br>the worst day · the least interesting book · the first time<br><br>&#x274C; She is a best student. → &#x2713; She is <b>the</b> best student.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Razlika: go to school vs go to the school</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>go to school</b> (zero article) = kao učenik, funkcija institucije<br><em>Children go to school to learn.</em><br><br><b>go to the school</b> (the) = posjetiti zgradu, ne kao učenik<br><em>She went to the school to speak to the teacher.</em><br><br>Isti princip: in hospital (UK, kao pacijent) vs in the hospital (posjet)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch09 (&#269;itanje) &mdash; articles u tekstovima</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>Articles su jedan od najtipičnijih error correction zadataka!</b><br><br>U reading tekstovima: prepoznaj a→the pattern (prva vs druga pojava)<br>U gap fill iz teksta: upiši točan članak direktno iz konteksta<br><br>Greška s artiklima je lako vidljiva u pisanju (ch10) — provjeri svaki a/an/the!</div>
    </div>

    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter15.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">15 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Comparatives &amp; Question Tags</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Zadnje poglavlje</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer" onclick="window.location='chapter13.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 13</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Reported Speech</div>
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
      <a href="chapter13.html" class="nav-btn">&larr; Chapter 13</a>
      <a href="chapter15.html" class="nav-btn primary">Next chapter &rarr;</a>
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

const CH14_JS = `var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  if(i===1&&typeof initSpeedDrill==='function'&&sdState.idx===0)initSpeedDrill();
  window.scrollTo({top:0,behavior:'smooth'});
}
var E={
  q1:{c:"✓ Točno. 'a' ispred suglasnika (university počinje suglasnikom /j/). Uvijek pazi na ZVUK, ne slovo!",w:"✗ Netočno. 'university' počinje zvukom /j/ (suglasnik) → 'a university'. 'an' ide ispred vokalnog zvuka. Točan odgovor: B."},
  q2:{c:"✓ Točno. 'the' jer je rijeka specifična, jedina — vlastite imenice geografskih pojmova imaju 'the'.",w:"✗ Netočno. Rijeke dobivaju 'the': the Thames, the Nile, the Amazon. Točan odgovor: C."},
  q3:{c:"✓ Točno. Zero article ispred plural/uncountable u općenitom smislu: 'Children need attention' (sva djeca uopće).",w:"✗ Netočno. Općenito plural/uncountable → zero article (Ø). 'The children' = specifična djeca. 'A children' = netočno (plural). Točan odgovor: A."},
  q4:{c:"✓ Točno. 'an' ispred vokalnog zvuka: 'hour' počinje zvukom /aʊ/ (vokal) → 'an hour'.",w:"✗ Netočno. 'hour' počinje zvukom /aʊ/ (vokal, h je nijemo) → 'an hour'. Pazi na ZVUK! Točan odgovor: C."},
  q5:{c:"✓ Točno. 'the' jer je jedinstven na svijetu — 'the Sun', 'the Moon', 'the Earth'.",w:"✗ Netočno. Jedinstvene stvari na svijetu: the Sun, the Moon, the Earth, the sky. Točan odgovor: B."},
  q6:{c:"✓ Točno. Zero article ispred jezika: 'speak English/French/Croatian' — bez člana!",w:"✗ Netočno. Jezici nemaju člana: speak English (ne the English / an English). Točan odgovor: A."},
  q7:{c:"✓ Točno. 'a/an' za prvu pojavu (uvođenje), 'the' za sve sljedeće pojave (već znamo o čemu se radi).",w:"✗ Netočno. Pravilo: prva pojava = a/an. Sva sljedeća pojava iste stvari = the. Točan odgovor: D."},
  q8:{c:"✓ Točno. Zero article ispred vlastite imenice bez 'the': 'visit Paris' (grad bez člana).",w:"✗ Netočno. Gradovi nemaju 'the': visit Paris, live in London, go to Zagreb (bez člana). Točan odgovor: A."},
  q9:{c:"✓ Točno. 'the' ispred superlativa: the best, the most, the tallest — uvijek!",w:"✗ Netočno. Superlativ uvijek ide s 'the': the best film, the most expensive, the tallest. Točan odgovor: C."},
  q10:{c:"✓ Točno. Zero article u izrazima: go to school/work/bed/hospital (funkcija, ne zgrada).",w:"✗ Netočno. Institucionalni izrazi: go to school (kao učenik), go to work, go to bed, go to hospital (UK). Točan odgovor: A."},
  q11:{c:"✓ Točno. 'The Louvre' — poznata, jedinstvena institucija → the. Muzeje, galerije i poznate zgrade koje su jedinstven referent uvijek idu s 'the': the Eiffel Tower, the Colosseum, the Louvre.",w:"✗ Netočno. 'The Louvre' je jedinstven, svima poznat muzej → the (određeni). 'a Louvre' ✗ (kao da postoji više Louvrea). '—' ✗ (institucije koje su jedinstven referent idu s the). Odgovor C."},
  q12:{c:"✓ Točno. 'an engineer' — prva pojava zanimanja (a/an), 'engineer' počinje zvukom /ɛ/ → an. 'a company' — prva pojava, neodređena (jedna od mnogih) → a. Dva različita pravila u jednoj rečenici.",w:"✗ Netočno. Dva pravila: (1) 'engineer' = zvuk /ɛ/ (vokal) → an (ne a!). (2) 'company' = prva pojava, jedna od mnogih, suglasnik /k/ → a (ne the!). Odgovor C: an … a."}
};
var answered={},correct=0,total=12;
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
    document.getElementById('slbl').textContent=correct===total?'Savrseno! Articles svladani. 🎉':correct>=9?'Odlicno!':correct>=7?'Good. Ponovi a/an/the/zero tablicu.':correct>=5?'Vrati se na formule.':'Vrati se na Learn tab.';
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
  {s:"She is _______ engineer. (prva pojava — pazi na zvuk!)", opts:["a","an","the"], ans:1, exp:"'an engineer' — jer 'engineer' poinje zvukom /ɛ/ (vokal), ne suglasnikom. Slovo 'e' = vokal → an. Zamka: ne gledaj slovo, slušaj ZVUK! an engineer ✓ · a university ✓ (jer /j/ zvuk)"},
  {s:"He works _______ hospital — he is a surgeon.", opts:["in a","in the","at"], ans:0, exp:"'a hospital' = jedna od bolnica opcenito (ne specificna). Prva pojava, suglasnik h → 'a hospital'."},
  {s:"Have you seen _______ film I mentioned yesterday?", opts:["a","the","—"], ans:1, exp:"'the film' — poznata obojici (I mentioned it = vec znamo o kojoj se radi). Druga pojava / specificna referenca → the."},
  {s:"_______ English is spoken in Australia.", opts:["—","The","An"], ans:0, exp:"Jezici nemaju clan: speak English, learn French, study Croatian. Zero article (—)."},
  {s:"She is _______ best student in the class.", opts:["a","the","an"], ans:1, exp:"Superlativ uvijek ide s 'the': the best, the most, the tallest, the worst."},
  {s:"They visited _______ Amazon last summer.", opts:["a","—","the"], ans:2, exp:"Rijeke imaju 'the': the Amazon, the Nile, the Thames, the Danube."},
  {s:"I need _______ advice about my career.", opts:["an","a","—"], ans:2, exp:"'advice' je nebrojna imenica (uncountable) → zero article ili 'some advice'. An/a ne ide s unbrojivima!"},
  {s:"She bought _______ umbrella this morning.", opts:["a","an","the"], ans:1, exp:"'umbrella' pocinje zvukom /ʌ/ (vokal) → 'an umbrella'. Pazi na ZVUK ne slovo!"},
  {s:"They go to _______ church every Sunday.", opts:["the","a","—"], ans:2, exp:"Institucionalni izraz: go to church (kao vjernik, funkcija) → zero article. go to the church = posjetiti zgradu (ne radi vjere)."},
  {s:"_______ sun rises in the east.", opts:["A","The","—"], ans:1, exp:"Jedinstvene stvari: the Sun, the Moon, the Earth, the sky, the universe → uvijek 'the'."}
];
var sdState={idx:0,results:[]};
function initSpeedDrill(){sdState={idx:0,results:[]};document.getElementById('sd-score-box').classList.remove('show');renderSD();}
function renderSD(){
  var prog=document.getElementById('sdprog');
  if(prog){prog.innerHTML='';for(var i=0;i<SD.length;i++){var d=document.createElement('div');d.className='sd-dot'+(i<sdState.results.length?(sdState.results[i]?' ok':' no'):(i===sdState.idx?' cur':''));prog.appendChild(d);}}
  var wrap=document.getElementById('sdq-wrap');if(!wrap)return;
  if(sdState.idx>=SD.length){
    wrap.innerHTML='';var sc=sdState.results.filter(function(r){return r}).length;
    document.getElementById('sd-score-num').textContent=sc+'/'+SD.length;
    document.getElementById('sd-score-lbl').textContent=sc===SD.length?'Savrseno! Articles svladani. 🎉':sc>=8?'Odlicno! 💪':sc>=6?'Dobro! Ponovi a/an/the/zero tablicu.':'Vrati se na formule.';
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
function saveProgress(){try{localStorage.setItem('maturix_ch14_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch14_tabs')||'null');
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