// Maturiraj.hr — Engleski niža razina · Poglavlje 11
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ENG_NIZA_CH11({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch11-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH11_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch11-js";
    scriptEl.textContent = CH11_JS;
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
      if (num === 12 && nav.onNext) nav.onNext();
      else if (num === 10 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch11-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch11-root"
      dangerouslySetInnerHTML={{ __html: CH11_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH11_CSS = `
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

.lq-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 18px;margin-bottom:14px}
.lq-meta{font-family:var(--mono);font-size:10px;color:var(--t3);font-weight:600;text-transform:uppercase;letter-spacing:.8px;margin-bottom:8px}
.gf2-block{margin-bottom:12px;display:flex;align-items:flex-start;gap:10px;flex-wrap:wrap}
.gf2-sent{font-size:14px;color:var(--t1);line-height:1.7;flex:1;min-width:200px}
.gf2-sent .fitb{width:140px;display:inline-block;margin:0 6px;vertical-align:middle}
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

const CH11_BODY = `<div class="shell">
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
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter10.html'"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 11 &middot; Strategije slušanja</div>
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
  <div class="sb-item" onclick="window.location='chapter10.html'" style="cursor:pointer"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
  <div class="sb-item active"><span class="sb-dot"></span> 11 &middot; Strategije slušanja</div>
  <div class="sb-item" onclick="window.location='chapter12.html'" style="cursor:pointer"><span class="sb-dot"></span> 12 &middot; Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 &middot; Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 &middot; Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 &middot; Komparativ i tag pitanja</div>
  <div class="sb-footer">11 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span onclick="window.location='chapter10.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>skills</span>
    <span class="bc-sep">/</span><span class="bc-active">listening-strategies</span>
  </div>

  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" onclick="switchTab(0)" tabindex="0">&#9889; 2 min<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" onclick="switchTab(1)" tabindex="0">&#128214; Learn<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" onclick="switchTab(2)" tabindex="0">&#9999;&#65039; Practice<span class="tab-check">&#10003;</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Overview</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Learn strategies</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Practice &amp; quiz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~30 min
    </div>
  </div>

  <!-- ══ LAYER 0 ══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 11 / 15 &middot; skills</div>
      <h1 class="hero-title">Listening <span>Strategies</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">&#9201; ~30 min</span>
        <span class="hero-badge hb-level">ni&#382;a razina</span>
        <span class="hero-badge hb-chapter">11 / 12</span>
      </div>
      <p class="hero-sub">Pitanja PRVO &middot; Signal words u govoru &middot; Parafraziranje &middot; Bilje&#382;enje &middot; Zamke</p>
      <div class="progress-track"><div class="progress-bar" style="width:91%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">Pitanja PRVO</span>
      <span class="pill pill-sky">Signal words</span>
      <span class="pill pill-violet">Parafraziranje</span>
      <span class="pill pill-amber">Bilje&#382;enje</span>
      <span class="pill pill-red">Zamke</span>
    </div>

    <div class="sec-label">// at a glance &mdash; tipovi listening zadataka</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">MCQ</div><div class="stat-name">Vi&#353;estruki izbor</div><div class="stat-desc">4 opcije &middot; odgovor parafraziran &middot; iste rije&#269;i = zamka</div></div>
      <div class="stat-card"><div class="stat-icon sky">T/F</div><div class="stat-name">True / False</div><div class="stat-desc">Izjava to&#269;na ili neto&#269;na prema onome &#353;to si &#269;uo</div></div>
      <div class="stat-card"><div class="stat-icon violet">GAP</div><div class="stat-name">Gap fill</div><div class="stat-desc">Upi&#353;i rije&#269; ili frazu direktno iz audio zapisa</div></div>
      <div class="stat-card"><div class="stat-icon amber">NOTE</div><div class="stat-name">Note completion</div><div class="stat-desc">Popuni blje&#353;ke &middot; kratke rije&#269;i &middot; to&#269;an oblik!</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Pitanja PRVO</div><div class="cv">Pro&#269;itaj SVA pitanja PRIJE nego audio po&#269;ne. Zna&#353; &#353;to tra&#382;i&#353; &rarr; slu&#353;anje postaje ciljano.</div></div>
      <div class="concept-row"><div class="ck sky">Signal words u govoru</div><div class="cv">However, Furthermore, As a result, For example &mdash; isti kao u pisanju, ali ih ĈUJE&#352;. Signaliziraju klju&#269;ne informacije.</div></div>
      <div class="concept-row"><div class="ck violet">Parafraziranje</div><div class="cv">Odgovor = parafraziran. Govornik ka&#382;e "left the company" &rarr; pitanje ka&#382;e "resigned". Iste rije&#269;i = zamka!</div></div>
      <div class="concept-row"><div class="ck amber">Blje&#353;ke</div><div class="cv">Pi&#353;i samo klju&#269;ne rije&#269;i, brojeve, imena. Ne poku&#353;avaj pisati sve &mdash; izgubit &#263;e&#353; sljede&#263;u re&#269;enicu.</div></div>
      <div class="concept-row"><div class="ck red">Zamka #1</div><div class="cv">Govornik ISPRAVLJA sebe: "We leave at 8... actually, it's 9 o'clock." &rarr; to&#269;an odgovor je 9, ne 8!</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; panic-proof &mdash; listening na ispitu</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Pitanja PRVO</b> &mdash; pro&#269;itaj sva pitanja i opcije PRIJE nego audio po&#269;ne. Podvuci klju&#269;ne rije&#269;i.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Predvidi</b> &mdash; na temelju pitanja, predvidi o &#269;emu &#263;e biti govor. Pripremi mozak na temu.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Signal words</b> &mdash; However, Furthermore, As a result &rarr; signaliziraju klju&#269;ne informacije. Budan!</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Ispravke</b> &mdash; govornik se ispravlja? Zadnji podatak = to&#269;an. "It's Monday... sorry, Tuesday."</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Nikad prazno</b> &mdash; nisi siguran? Pi&#353;i &#353;to si &#269;uo. Prazno = 0 bodova. Ne&#353;to = mo&#382;da bod.</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Za&#353;to su pitanja PRVA &mdash; i za &#269;itanje i za slu&#353;anje?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">
        <b>Jer mozak bolje filtrira informacije kad zna &#353;to tra&#382;i.</b><br><br>
        Bez pitanja: slu&#353;a&#353; sve jednako pa&#382;ljivo &rarr; informacijska preplava<br>
        S pitanjima: zna&#353; na &#353;to se fokusirati &rarr; scan audio za klju&#269;ne podatke<br><br>
        Isti princip kao u ch09 (&#269;itanje) &mdash; ali ovdje ima&#353; samo <b>jednu &#353;ansu</b> (audio se ne vra&#263;a).
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako parafraziranje funkcionira u slu&#353;anju?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Govornik kaže: <em>"The event was not successful."</em><br>Opcija u zadatku: <em>"The event was a failure."</em> → isti smisao, druge riječi<br>&#x26A0; Ne traži doslovne riječi — traži parafraziranu ideju!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako prepoznajem naglasak govornika?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Naglašene/ponavljane rijeci = ključna informacija.<br>Ispravka: <em>"Actually, it was Tuesday, not Monday."</em> → odgovor = Tuesday<br>&#x26A0; Zadnja izjava govornika = točna (ispravlja prethodnu!)</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Zamka: govornik se ispravlja &mdash; &#353;to pisati?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">
        <b>Uvijek pi&#353;i ZADNJI podatak &mdash; ispravka je to&#269;an odgovor!</b><br><br>
        &#x274C; "The meeting is on <b>Monday</b>... sorry, I mean <b>Tuesday</b>." &rarr; odgovor: <b>Tuesday</b><br>
        &#x274C; "The price is <b>50 euros</b>... actually <b>15 euros</b>." &rarr; odgovor: <b>15 euros</b><br><br>
        Autori ispita namjerno ube&#263;uju ispravke. Uvijek &#269;ekaj do kraja re&#269;enice!
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch09 i ch10 &mdash; iste vje&#353;tine, razli&#269;it format</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans">Ch09 (reading) + Ch11 (listening) = iste zamke, drugi medij:<br>Parafraziranje · apsolutne tvrdnje · djelomično točno<br>Razlika: listening ima vremenski pritisak — odluci brže!</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F6A8; ako zaglavim za vrijeme slu&#353;anja</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Izgubio si nit?</b> &mdash; Odmah preskoči na sljede&#263;e pitanje. Ne zaostaj za jednim &mdash; izgubit &#263;e&#353; vi&#353;e.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Nisi siguran?</b> &mdash; Pi&#353;i ono &#353;to si &#269;uo, makar djelomi&#269;no. Prazan odgovor = 0 bodova.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>&#268;uo si rije&#269; iz pitanja?</b> &mdash; Pauziraj i slu&#353;aj okolinu &mdash; odgovor je blizu, ali parafraziran.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Gap fill</b> &mdash; pi&#353;i to&#269;no &#353;to si &#269;uo (mo&#382;e biti broj, ime, rije&#269;). Provjeri pravopis!</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Na kraju</b> &mdash; ima&#353; obi&#269;no 30 sekundi za provjeru. Provjeri nepopunjena mjesta &mdash; educated guess!</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter10.html" class="nav-btn">&larr; Chapter 10</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn strategies &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — LEARN ══ -->
  <div class="layer" id="l1">

    <div class="sec-label">// 6 klju&#269;nih strategija slu&#353;anja</div>
    <p class="prose">Listening na ispitu je jedina vje&#353;tina gdje <b>ne&#263;e&#353; imati drugu &#353;ansu</b> &mdash; audio se reproducira obi&#269;no 1&ndash;2 puta. Ove strategije pretvaraju pasivno slu&#353;anje u aktivno tra&#382;enje odgovora.</p>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--lime-dim);color:var(--lime)">1</div>
        <div class="sc-title">Pitanja PRVO &mdash; uvijek, bez iznimke</div>
      </div>
      <div class="sc-body">Pro&#269;itaj SVA pitanja i sve opcije prije nego audio po&#269;ne. Podvuci klju&#269;ne rije&#269;i u svakom pitanju. Predvidi o &#269;emu &#263;e biti audio na temelju pitanja. Sada zna&#353; &#353;to tra&#382;i&#353;.</div>
      <div class="sc-tip">&rarr; Na ispitu: iskoristi svaku sekundu ti&#353;ine za &#269;itanje pitanja. Vrijedi vi&#353;e od bilo &#269;ega.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--sky-dim);color:var(--sky)">2</div>
        <div class="sc-title">Predvi&#273;anje &mdash; pripremi mozak</div>
      </div>
      <div class="sc-body">Na temelju pitanja i opcija: predvidi tip informacije (broj? ime? datum? razlog?). Predvidi vokabular koji &#263;e&#353; &#269;uti. Mozak bolje &#269;uje informaciju za kojom <em>aktivno</em> tra&#382;i &mdash; to je dokazano u istra&#382;ivanjima pa&#382;nje.</div>
      <div class="sc-tip">&rarr; Ako pitanje sadr&#382;i "How many?" &rarr; tra&#382;i broj. "Why?" &rarr; tra&#382;i razlog. "When?" &rarr; tra&#382;i datum/vrijeme.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--violet-dim);color:var(--violet)">3</div>
        <div class="sc-title">Signal words &mdash; tvoji navigatori</div>
      </div>
      <div class="sc-body">Signal words u govoru imaju istu ulogu kao u pisanju &mdash; ali ih sada <em>&#269;uje&#353;</em>. Svaki signal word = promjena smjera informacije. Reagiraj odmah: "However" &rarr; dolazi kontrast; "Therefore" &rarr; dolazi zaklju&#269;ak; "For example" &rarr; dolazi primjer koji &#263;e potkrijepiti tvrdnju.</div>
      <div class="sc-tip">&rarr; Posebno pazi na: "However / But actually / In fact" &mdash; &#269;esto signaliziraju to&#269;an odgovor koji pori&#269;e prethodni.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--amber-dim);color:var(--amber)">4</div>
        <div class="sc-title">Parafraziranje &mdash; isti smisao, razli&#269;ite rije&#269;i</div>
      </div>
      <div class="sc-body">Autori ispita <em>nikad</em> ne kopiraju to&#269;no iste rije&#269;i iz pitanja u audio. Odgovor je uvijek parafraziran. Ako &#269;uje&#353; to&#269;no rije&#269;i iz pitanja &rarr; to je obi&#269;no distraktor, ne odgovor. Tra&#382;i sinonim ili preformulaciju.</div>
      <div class="sc-tip">&rarr; Primjer: pitanje "interested in" &rarr; audio "passionate about" / "keen on" / "enjoys" &rarr; isti smisao.</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--red-dim);color:var(--red)">5</div>
        <div class="sc-title">Ispravke &mdash; uvijek zadnji podatak</div>
      </div>
      <div class="sc-body">Govornici se <em>namjerno</em> ispravljaju na ispitima. Prvo &#269;uje&#353; kriva informacija, zatim ispravku. Uvijek pi&#353;i <b>zadnji podatak</b> &mdash; on je to&#269;an odgovor. Ne zamijeni! Ovo je jedna od naj&#269;e&#353;&#263;ih zamki na listening ispitima.</div>
      <div class="sc-tip">&rarr; Signali ispravke: "actually", "I mean", "sorry", "no wait", "let me correct that", "I should say".</div>
    </div>

    <div class="strategy-card">
      <div class="sc-head">
        <div class="sc-num" style="background:var(--lime-dim);color:var(--lime)">6</div>
        <div class="sc-title">Bilje&#382;enje &mdash; klju&#269;no, ne sve</div>
      </div>
      <div class="sc-body">Pi&#353;i samo klju&#269;ne rije&#269;i, ne cijele re&#269;enice. Skra&#263;enice OK: "Lon" za London, "3pm" za 3 o'clock. Ako poku&#353;ava&#353; pisati sve &rarr; izgubit &#263;e&#353; sljede&#263;u re&#269;enicu. Fokus: <em>imenice, brojevi, datumi, vlastita imena</em>.</div>
      <div class="sc-tip">&rarr; Bilj. = &bdquo;mre&#382;a sigurnosti&rdquo;. Audio pro&#273;e, ali blje&#353;ka ostaje. &#268;itaj blje&#353;ke pri odgovaranju, ne pam&#263;enje.</div>
    </div>

    <!-- SIGNAL WORDS IN SPEECH -->
    <hr class="divider">
    <div class="sec-label">// signal words u govoru &mdash; &#353;to signaliziraju</div>
    <p class="prose" style="margin-bottom:12px">Isti signal words kao u pisanju &mdash; ali u govoru do&#382;ive&#353; ih samo jednom. Nauči reagirati automatski.</p>

    <div class="signal-listen">
      <div class="sl-head" style="color:var(--sky)">// kontrast &mdash; dolazi suprotna informacija</div>
      <div class="sl-body">
        <div class="sl-item contrast"><div class="sl-word">However,</div><div>Prethodna info &#8594; ova je druk&#269;ija. &#268;esto signalizira to&#269;an odgovor!</div></div>
        <div class="sl-item contrast"><div class="sl-word">Although / but</div><div>Uvodi ograni&#269;enje ili iznimku. Pazi na smjer!</div></div>
        <div class="sl-item contrast"><div class="sl-word">In fact / Actually</div><div>Ispravlja ili poja&#269;ava prethodnu izjavu. Klju&#269;no!</div></div>
        <div class="sl-item contrast"><div class="sl-word">On the other hand</div><div>Prelazak na suprotno gledi&#353;te ili opciju.</div></div>
      </div>
    </div>
    <div class="signal-listen">
      <div class="sl-head" style="color:var(--lime)">// dodavanje &mdash; dolazi jo&#353; informacija</div>
      <div class="sl-body">
        <div class="sl-item"><div class="sl-word">Furthermore,</div><div>Jo&#353; jedan argument ili detalj u istom smjeru.</div></div>
        <div class="sl-item"><div class="sl-word">In addition,</div><div>Dodaje novu informaciju. Drugi detalj dolazi.</div></div>
        <div class="sl-item"><div class="sl-word">Also / What&#39;s more</div><div>Dodavanje bez promjene smjera.</div></div>
        <div class="sl-item"><div class="sl-word">Not only... but also</div><div>Nagla&#353;ava da postoje dvije va&#382;ne stvari.</div></div>
      </div>
    </div>
    <div class="signal-listen">
      <div class="sl-head" style="color:var(--amber)">// uzrok-posljedica &mdash; dolazi zaklju&#269;ak</div>
      <div class="sl-body">
        <div class="sl-item cause"><div class="sl-word">Therefore,</div><div>Ono &#353;to dolazi = posljedica ili zaklju&#269;ak.</div></div>
        <div class="sl-item cause"><div class="sl-word">As a result,</div><div>&#268;esto signalizira va&#382;an zaklju&#269;ak ili ishod.</div></div>
        <div class="sl-item cause"><div class="sl-word">That&#39;s why / So</div><div>Neformalni ekvivalent &mdash; &#269;est u dijalogu.</div></div>
        <div class="sl-item cause"><div class="sl-word">This means that</div><div>Pojanjava implikacije onoga &#353;to je upravo re&#269;eno.</div></div>
      </div>
    </div>
    <div class="signal-listen">
      <div class="sl-head" style="color:var(--violet)">// primjer &amp; pojašnjenje</div>
      <div class="sl-body">
        <div class="sl-item example"><div class="sl-word">For example,</div><div>Primjer dolazi &mdash; potkrepljuje prethodnu tvrdnju.</div></div>
        <div class="sl-item example"><div class="sl-word">In other words,</div><div>Preformulacija &mdash; isti smisao, jasnije. Klju&#269;no za razumijevanje!</div></div>
        <div class="sl-item example"><div class="sl-word">Such as / like</div><div>Popis primjera. Obi&#269;no slijedi 2&ndash;3 primjera.</div></div>
        <div class="sl-item example"><div class="sl-word">I mean / That is</div><div>Govornik pojanjava &mdash; slu&#353;aj pa&#382;ljivo!</div></div>
      </div>
    </div>
    <div class="signal-listen">
      <div class="sl-head" style="color:var(--red)">// zaklju&#269;ak &amp; summary</div>
      <div class="sl-body">
        <div class="sl-item conclude"><div class="sl-word">To sum up,</div><div>Govornik sada sumira &mdash; klju&#269;ne informacije dolaze!</div></div>
        <div class="sl-item conclude"><div class="sl-word">Finally,</div><div>Zadnja to&#269;ka &mdash;&#269;esto najva&#382;nija!</div></div>
        <div class="sl-item conclude"><div class="sl-word">In conclusion,</div><div>Formalni zaklju&#269;ak &mdash; summary cijelog govora.</div></div>
        <div class="sl-item conclude"><div class="sl-word">Overall / Basically</div><div>Neformalni summary &mdash; &#269;est u konverzaciji.</div></div>
      </div>
    </div>

    <!-- ANNOTATED SCRIPTS -->
    <hr class="divider">
    <div class="sec-label">// anotiran audio script &mdash; prepoznaj signale</div>
    <p class="prose" style="margin-bottom:6px">Ovako izgleda tipski audio zapis na ispitu. Ozna&#269;ene su klju&#269;ne to&#269;ke &mdash; nau&#269;i ih prepoznati na sluhu.</p>

    <div class="listen-task">
      <div class="lt-head">
        <div class="lt-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">TASK A &middot; MCQ</div>
        <div class="lt-title">Razgovor &mdash; planiranje putovanja</div>
      </div>
      <div class="lt-body">
        <div class="audio-sim">
          <div class="audio-icon">&#x1F3A7;</div>
          <div class="audio-info"><div class="audio-title">Track 1 &mdash; Conversation</div><div class="audio-sub">2 govornika &middot; neformalni razgovor</div></div>
          <div class="audio-dur">~1:30</div>
        </div>
        <div class="lt-script">
          <span class="spk">ANNA:</span> So, are we still leaving on <span class="hl-red">Friday</span>?<br>
          <span class="spk">TOM:</span> Actually, I just checked &mdash; the train we wanted is fully booked on Friday. <span class="hl">We&rsquo;ll have to go on Saturday instead.</span><br>
          <span class="spk">ANNA:</span> Oh no. And where are we staying again? The hotel near the station?<br>
          <span class="spk">TOM:</span> <span class="hl-amber">We were going to stay there, but it was quite expensive.</span> <span class="hl">So I booked a hostel instead &mdash; it&rsquo;s only five minutes from the centre.</span><br>
          <span class="spk">ANNA:</span> That sounds fine. <span class="hl-violet">How much is it per night?</span><br>
          <span class="spk">TOM:</span> It&rsquo;s <span class="hl-red">30 euros</span>... <span class="hl">actually, wait &mdash; let me check &mdash; yes, it&rsquo;s <span class="hl">25 euros</span></span> per person per night.
        </div>
        <div class="callout callout-info" style="margin-top:12px">
          <span class="callout-icon">&#x1F4A1;</span>
          <div class="callout-body">
            <div class="callout-title">&#352;to je va&#382;no u ovom audio zapisu?</div>
            <div class="callout-text">
              <b style="color:var(--red)">Ispravka dana:</b> Friday &rarr; <b>Saturday</b> (to&#269;an dan polaska) &middot; 30 euros &rarr; <b>25 euros</b> (to&#269;na cijena)<br>
              <b style="color:var(--amber)">Kontrast:</b> "We were going to stay at the hotel, <b>but</b> it was expensive <b>So</b> I booked a hostel" &rarr; to&#269;an smje&#353;taj = hostel<br>
              <b style="color:var(--violet)">Signal pitanja:</b> "How much?" &rarr; tra&#382;i broj/cijenu &rarr; odgovor: 25 euros (zadnja ispravka!)
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="listen-task">
      <div class="lt-head">
        <div class="lt-badge" style="background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)">TASK B &middot; Gap fill</div>
        <div class="lt-title">Monolog &mdash; informativni govor</div>
      </div>
      <div class="lt-body">
        <div class="audio-sim">
          <div class="audio-icon">&#x1F3A7;</div>
          <div class="audio-info"><div class="audio-title">Track 2 &mdash; Monologue</div><div class="audio-sub">1 govornik &middot; formalni info govor</div></div>
          <div class="audio-dur">~1:45</div>
        </div>
        <div class="lt-script">
          Welcome to the <span class="hl">City Museum</span>. We are open Tuesday to Sunday, from <span class="hl-red">9 am</span>... <span class="hl">sorry, from <span class="hl">10 am</span></span> to 6 pm. Admission for adults is <span class="hl">12 euros</span>, and children under 12 enter free of charge. <span class="hl-amber">Please note that photography is not permitted</span> in the main gallery. <span class="hl-violet">However</span>, you are welcome to take photos in the garden area. Our guided tours begin every hour on the hour. <span class="hl">The next tour starts at 2 pm</span>.
        </div>
        <div class="callout callout-warn" style="margin-top:12px">
          <span class="callout-icon">&#x26A0;</span>
          <div class="callout-body">
            <div class="callout-title">Gap fill zamke u ovom tekstu</div>
            <div class="callout-text">
              Opening time: "9 am... sorry, from <b>10 am</b>" &rarr; zadnja ispravka = <b>10 am</b> (ne 9!)<br>
              Photography: "not permitted in main gallery" &mdash; ali "welcome in garden" &rarr; pitanje o <em>gdje</em> mo&#382;e&#353; slikati?<br>
              <b>However</b> signalizira kontrast &rarr; pravilo se mijenja za garden area
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NOTE COMPLETION -->
    <hr class="divider">
    <div class="sec-label">// task C &mdash; note completion format</div>
    <p class="prose" style="margin-bottom:10px">Note completion je jedan od najtipičnijih NCVVO listening formata. Popunjavaš tablicu ili blje&#353;ke s to&#269;nim informacijama iz audioa &mdash; obi&#269;no 1&ndash;3 rije&#269;i po praznini.</p>

    <div class="callout callout-tip" style="margin-bottom:14px">
      <span class="callout-icon">&#x1F4A1;</span>
      <div class="callout-body">
        <div class="callout-title">Strategija za note completion</div>
        <div class="callout-text">
          1. Pro&#269;itaj tablicu PRIJE audioa &mdash; predvidi tip info (broj? ime? datum? mjesto?)<br>
          2. Zna&#353; to&#269;an redoslijed &mdash; info dolaze prema tablici, obi&#269;no kronolo&#353;ki<br>
          3. Pi&#353;i to&#269;no &#353;to si &#269;uo &mdash; prijevod nije potreban, gramati&#269;ki oblik je va&#382;an<br>
          4. Ispravka = zadnji podatak. Praznina &gt; prazan odgovor.
        </div>
      </div>
    </div>

    <div class="listen-task">
      <div class="lt-head">
        <div class="lt-badge" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">TASK C &middot; Note completion</div>
        <div class="lt-title">Informacije o te&#269;aju jezika</div>
      </div>
      <div class="lt-body">
        <div class="audio-sim">
          <div class="audio-icon">&#x1F3A7;</div>
          <div class="audio-info"><div class="audio-title">Track 3 &mdash; Information call</div><div class="audio-sub">1 govornik &middot; informativni monolog</div></div>
          <div class="audio-dur">~1:00</div>
        </div>
        <div class="lt-script">
          Thank you for calling the City Language Centre. Our <span class="hl">English conversation course</span> begins on the <span class="hl-red">14th</span>... sorry, the <span class="hl">15th of September</span>. Classes are held on <span class="hl">Tuesdays and Thursdays</span>, from <span class="hl">6 pm to 8 pm</span>. The course lasts <span class="hl">ten weeks</span>. The fee is <span class="hl">120 euros</span> per person, which includes all materials. To register, please call us back or visit our website at <span class="hl">www.citylanguage.hr</span>.
        </div>

        <div style="margin-top:16px">
          <div style="font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:var(--t3);margin-bottom:12px">// popuni blje&#353;ke prema audio zapisu</div>
          <div style="background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
            <div style="padding:12px 18px;background:var(--bg-input);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:11px;font-weight:700;color:var(--lime)">City Language Centre &mdash; Course Information</div>
            <table style="width:100%;border-collapse:collapse">
              <tr style="border-bottom:1px solid var(--bd)">
                <td style="padding:10px 18px;font-size:13px;color:var(--t3);font-family:var(--mono);font-size:11px;width:140px">Course name</td>
                <td style="padding:10px 18px;font-size:13px;color:var(--lime);font-weight:600">English conversation course</td>
              </tr>
              <tr style="border-bottom:1px solid var(--bd);background:var(--bg-card)">
                <td style="padding:10px 18px;font-family:var(--mono);font-size:11px;color:var(--t3)">Start date</td>
                <td style="padding:10px 18px">
                  <span style="color:var(--red);text-decoration:line-through;font-size:12px;margin-right:8px">14th September</span>
                  <span style="color:var(--lime);font-weight:600;font-size:13px">15th September &#x2190; ispravka!</span>
                </td>
              </tr>
              <tr style="border-bottom:1px solid var(--bd)">
                <td style="padding:10px 18px;font-family:var(--mono);font-size:11px;color:var(--t3)">Days</td>
                <td style="padding:10px 18px;font-size:13px;color:var(--lime);font-weight:600">Tuesdays and Thursdays</td>
              </tr>
              <tr style="border-bottom:1px solid var(--bd);background:var(--bg-card)">
                <td style="padding:10px 18px;font-family:var(--mono);font-size:11px;color:var(--t3)">Time</td>
                <td style="padding:10px 18px;font-size:13px;color:var(--lime);font-weight:600">6 pm &mdash; 8 pm</td>
              </tr>
              <tr style="border-bottom:1px solid var(--bd)">
                <td style="padding:10px 18px;font-family:var(--mono);font-size:11px;color:var(--t3)">Duration</td>
                <td style="padding:10px 18px;font-size:13px;color:var(--lime);font-weight:600">ten weeks</td>
              </tr>
              <tr style="border-bottom:1px solid var(--bd);background:var(--bg-card)">
                <td style="padding:10px 18px;font-family:var(--mono);font-size:11px;color:var(--t3)">Fee</td>
                <td style="padding:10px 18px;font-size:13px;color:var(--lime);font-weight:600">120 euros (materials included)</td>
              </tr>
              <tr>
                <td style="padding:10px 18px;font-family:var(--mono);font-size:11px;color:var(--t3)">Website</td>
                <td style="padding:10px 18px;font-size:13px;color:var(--lime);font-weight:600">www.citylanguage.hr</td>
              </tr>
            </table>
          </div>
        </div>

        <div class="callout callout-warn" style="margin-top:14px">
          <span class="callout-icon">&#x26A0;</span>
          <div class="callout-body">
            <div class="callout-title">&#352;to pazi u note completion</div>
            <div class="callout-text">
              <b style="color:var(--red)">Ispravka</b>: "14th... sorry, the <b>15th</b>" &rarr; pi&#353;i <b>15th September</b>, ne 14th<br>
              <b style="color:var(--amber)">Gramati&#269;ki oblik</b>: "ten weeks" (ne "10 weeks") &mdash; provjeri pi&#353;e li se rije&#269;ima ili brojevima<br>
              <b style="color:var(--lime)">Redoslijed</b>: tablice su uvijek po redoslijedu audioa &mdash; slu&#353;aj linearno, popi po redu<br>
              <b style="color:var(--sky)">Kratko</b>: obi&#269;no 1&ndash;3 rije&#269;i &mdash; ne pi&#353;i cijele re&#269;enice
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COMMON TRAPS -->
    <hr class="divider">
    <div class="sec-label">// 5 naj&#269;e&#353;&#263;ih zamki na listening ispitu</div>

    <div class="trap-card">
      <div class="trap-hd">Zamka 1: Ispravka &mdash; &#269;uje&#353; krivi podatak PRVO</div>
      <div class="trap-body">Govornik namjerno daje krivu informaciju, pa se ispravlja. Uvijek &#269;ekaj do kraja re&#269;enice.<br><em>"The course starts in <b>October</b>... I mean, <b>November</b>." &rarr; odgovor: November</em></div>
    </div>
    <div class="trap-card">
      <div class="trap-hd">Zamka 2: Iste rije&#269;i kao u pitanju &rarr; distraktor</div>
      <div class="trap-body">&#268;uje&#353; to&#269;no rije&#269;i iz pitanja u audiou. To obi&#269;no <em>nije</em> odgovor &mdash; to je zamka koja te vuče na krivi odgovor.<br><em>Pitanje: "What does she <b>enjoy</b>?" &mdash; Audio: "She doesn&rsquo;t really <b>enjoy</b> cooking..." &rarr; distraktor!</em></div>
    </div>
    <div class="trap-card">
      <div class="trap-hd">Zamka 3: Djelomi&#269;no to&#269;an odgovor</div>
      <div class="trap-body">Opcija MCQ sadr&#382;i informaciju iz teksta, ali je nepotpuna ili neto&#269;no kombinira dvije informacije.<br><em>Audio: "She works in London, but lives in Brighton." MCQ zamka: "She lives in London." &rarr; neto&#269;no!</em></div>
    </div>
    <div class="trap-card">
      <div class="trap-hd">Zamka 4: Negacija &mdash; pa&#382;ljivo na "not", "never", "no"</div>
      <div class="trap-body">Audio: "The tickets are <b>not</b> available online." MCQ opcija: "Tickets can be bought online." &rarr; to&#269;no suprotno!<br><em>Uvijek pazi na negativne re&#269;enice &mdash; jedna rije&#269; mijenja cijelo zna&#269;enje.</em></div>
    </div>
    <div class="trap-card">
      <div class="trap-hd">Zamka 5: Rije&#269;i koje zvu&#269;e sli&#269;no (homophones)</div>
      <div class="trap-body">Gap fill: "We leave on the <b>15th</b>" vs "We leave on the <b>50th</b>" &mdash; slu&#353;aj pa&#382;ljivo!<br><em>Brojevi, datumi, imena &mdash; pi&#353;i odmah kad &#269;uje&#353;. Pogreška pravopisa obi&#269;no ne gubi bod, ali kriva rije&#269; gubi.</em></div>
    </div>

    <!-- STRATEGY DRILL -->
    <hr class="divider">
    <div class="sec-label">// strategy drill &mdash; prepoznaj zamku ili signal</div>
    <p class="prose" style="margin-bottom:14px">5 pitanja o strategijama i zamkama slu&#353;anja.</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">Audio: "The event starts at 7pm... actually, we&rsquo;ve moved it to 8pm." Koji je to&#269;an odgovor?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'ls1',false,'8pm (zadnja ispravka)')">7pm</div><div class="sv-opt" onclick="sdAns(this,'ls1',true,'8pm (zadnja ispravka)')">8pm</div><div class="sv-opt" onclick="sdAns(this,'ls1',false,'8pm (zadnja ispravka)')">Nije navedeno</div></div><div class="sv-fb" id="ls1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">&#268;uje&#353; "However" u sredini audio zapisa. &#352;to to signalizira?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'ls2',false,'Kontrast &mdash; dolazi suprotna informacija')">Dodavanje informacije</div><div class="sv-opt" onclick="sdAns(this,'ls2',true,'Kontrast &mdash; dolazi suprotna informacija')">Kontrast &mdash; suprotna informacija</div><div class="sv-opt" onclick="sdAns(this,'ls2',false,'Kontrast &mdash; dolazi suprotna informacija')">Zaklju&#269;ak</div></div><div class="sv-fb" id="ls2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Pitanje: "Why did he leave the job?" Audio: "He decided to resign due to the long commute." &#352;to je odgovor?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'ls3',true,'Dugo putovanje na posao (parafraziranje: leave = resign)')">Dugo putovanje na posao</div><div class="sv-opt" onclick="sdAns(this,'ls3',false,'Dugo putovanje na posao (parafraziranje: leave = resign)')">Nije zadovoljan placom</div><div class="sv-opt" onclick="sdAns(this,'ls3',false,'Dugo putovanje na posao (parafraziranje: leave = resign)')">Dobio je bolji posao</div></div><div class="sv-fb" id="ls3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Audio koristi to&#269;no rije&#269;i iz MCQ pitanja. To je obi&#269;no...</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'ls4',false,'Distraktor (zamka!)')">To&#269;an odgovor</div><div class="sv-opt" onclick="sdAns(this,'ls4',true,'Distraktor (zamka!)')">Distraktor (zamka!)</div><div class="sv-opt" onclick="sdAns(this,'ls4',false,'Distraktor (zamka!)')">Ovisi o kontekstu</div></div><div class="sv-fb" id="ls4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">&#268;uje&#353; "To sum up" na kraju govora. &#352;to to zna&#269;i za tvoje slu&#353;anje?</div><div class="sv-opts"><div class="sv-opt" onclick="sdAns(this,'ls5',false,'Poja&#269;aj pa&#382;nju &mdash; summary s klju&#269;nim info dolazi')">Kraj &mdash; mogu prestati slu&#353;ati</div><div class="sv-opt" onclick="sdAns(this,'ls5',true,'Poja&#269;aj pa&#382;nju &mdash; summary s klju&#269;nim info dolazi')">Poja&#269;aj pa&#382;nju &mdash; key info dolazi</div><div class="sv-opt" onclick="sdAns(this,'ls5',false,'Poja&#269;aj pa&#382;nju &mdash; summary s klju&#269;nim info dolazi')">Pi&#353;i sve &#353;to &#269;uje&#353;</div></div><div class="sv-fb" id="ls5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; listening na ispitu</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>Ispravka &mdash; uvijek zadnji podatak</b><br>"It&rsquo;s Monday... I mean Tuesday." &rarr; odgovor: Tuesday. Prva info = zamka.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Iste rije&#269;i iz pitanja = distraktor</b><br>&#268;uje&#353; rije&#269; iz pitanja &rarr; to&#269;an odgovor je parafraziran. Iste rije&#269;i = zamka!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>Negacija mijenja cijelo zna&#269;enje</b><br>"not available online" &rarr; MCQ: "available online" &#x274C;. Uvijek pazi na not/never/no.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>Djelomi&#269;no to&#269;an odgovor</b><br>MCQ opcija sadr&#382;i info iz audio ali neto&#269;no kombinira dvije razli&#269;ite informacije.</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>Govornik ne&#353;to <em>razmatrá</em> ali ne&#353;to <em>radi</em></b><br>"I was thinking of going to Paris..." ne zna&#269;i da ide u Pariz. Pazi na uvjetno!</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>MCQ:</b> parafrazirani odgovori &middot; iste rije&#269;i = distraktor &middot; signal words<br><b>Gap fill:</b> to&#269;ne rije&#269;i iz audio &middot; pravopis &middot; ispravke<br><b>T/F:</b> negacije &middot; djelomi&#269;no to&#269;ne izjave</div></div>
      </div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">&larr; Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Practice &rarr;</span>
    </div>
  </div>

  <!-- ══ LAYER 2 — PRACTICE ══ -->
  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// listening knowledge quiz</strong> &middot; 10 pitanja o strategijama i zamkama. Target: <strong>8/10</strong> ili bolje.</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 &middot; strategija &middot; redoslijed</div><div class="q-text">Koji je PRVI korak pri rje&#353;avanju listening zadatka?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> Odmah po&#269;ni slu&#353;ati i blje&#353;i sve &#353;to &#269;uje&#353;.</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> Pro&#269;itaj sva pitanja i opcije PRIJE nego audio po&#269;ne.</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> Provjeri vokabular koji ne razumije&#353;.</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> Pi&#353;i cijele re&#269;enice dok slu&#353;a&#353;.</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 &middot; signal words &middot; kontrast</div><div class="q-text">&#268;uje&#353; "However" u govoru. &#352;to to signalizira?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> Govornik daje primjer.</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">B</span> Govornik uvodi informaciju suprotnu prethodnoj.</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">C</span> Govornik sumira ono &#353;to je rekao.</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> Govornik dodaje jo&#353; jedan argument.</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 &middot; parafraziranje &middot; zamka</div><div class="q-text">&#268;uje&#353; to&#269;no rije&#269;i iz MCQ pitanja u audio zapisu. &#352;to to obi&#269;no zna&#269;i?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> To je sigurno to&#269;an odgovor.</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> Govornik naglasava klju&#269;nu informaciju.</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> To je obi&#269;no distraktor &mdash; to&#269;an odgovor je parafraziran.</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> Nema zna&#269;enja za odgovor.</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 &middot; signal words &middot; poja&#353;njenje</div><div class="q-text">&#268;uje&#353; "In other words" u govoru. &#352;to dolazi?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">A</span> Pojanjenje ili preformulacija prethodno re&#269;enog.</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> Kontrast prema prethodnoj ideji.</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> Primjer koji podr&#382;ava argument.</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> Zaklju&#269;ak cijelog govora.</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 &middot; naglasak &middot; prepoznavanje</div><div class="q-text">Kako govornik nagla&#353;ava klju&#269;ne informacije?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> Uvijek koristi signal words.</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">B</span> Govori glasnije.</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> Ubrzava tempo govora.</div><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">D</span> Promjenom tona, pauzama, sporijim tempom ili ponavljanjem.</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 &middot; signal words &middot; posljedica</div><div class="q-text">&#268;uje&#353; "As a result" u govoru. &#352;to dolazi?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> Kontrast prema prethodnoj re&#269;enici.</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">B</span> Novi argument koji nije bio spominjan.</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">C</span> Posljedica ili zaklju&#269;ak onoga &#353;to je upravo re&#269;eno.</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> Primjer koji podr&#382;ava argument.</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 &middot; parafraziranje &middot; prepoznavanje</div><div class="q-text">Pitanje pita "interested in". Govornik ka&#382;e "passionate about". &#352;to to zna&#269;i?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> Nisu sinonimi &mdash; zna&#269;enje se razlikuje.</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">B</span> To je parafraziranje &mdash; isti smisao, razli&#269;ite rije&#269;i.</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> Govornik se ispravlja.</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> To je zamka &mdash; ne pi&#353;i.</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 &middot; signal words &middot; primjer</div><div class="q-text">&#268;uje&#353; "For example" u govoru. &#352;to dolazi odmah nakon?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">A</span> Primjer koji potkrepljuje prethodnu tvrdnju.</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> Kontrast prema prethodnoj informaciji.</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">C</span> Zaklju&#269;ak cijelog govora.</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> Ispravka prethodno re&#269;ene informacije.</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 &middot; blje&#353;enje &middot; tehnika</div><div class="q-text">&#352;to je najto&#269;nija tehnika blje&#353;enja za vrijeme slu&#353;anja?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> Pisati cijele re&#269;enice da ni&#353;ta ne izgubi&#353;.</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">B</span> Ne pisati ni&#353;ta &mdash; fokusirati se na slu&#353;anje.</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">C</span> Bilji klju&#269;ne rije&#269;i, brojeve i vlastita imena &mdash; ne sve.</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> Prepisivati opcije iz MCQ zadatka.</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 &middot; signal words &middot; zaklju&#269;ak</div><div class="q-text">&#268;uje&#353; "To sum up" ili "Finally" na kraju govora. &#352;to treba&#353; u&#269;initi?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> Prestani slu&#353;ati &mdash; posao je gotov.</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> Provjeri prethodne odgovore.</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">C</span> Preskoči na sljede&#263;e pitanje.</div><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">D</span> Poja&#269;aj pa&#382;nju &mdash; summary s klju&#269;nim info dolazi.</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">&#x1F3C6;</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje zavr&#353;eno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">11 &middot; Listening strategije<br>Jedno poglavlje ostalo &rarr; ch12!</div>
      </div>
    </div>

    
    <hr class="divider" style="margin:28px 0">
    <div class="sec-label">// listening practice &mdash; set A &middot; MCQ</div>
    <div class="quiz-intro" style="margin-bottom:14px"><strong>// listening set A</strong> &middot; Pro&#269;itaj pitanja PRIJE nego slu&#353;a&#353; audio. Zatim pro&#269;itaj transkript i odgovori. Cilj: <strong>4/4</strong>.</div>

    <div class="callout callout-tip" style="margin-bottom:16px">
      <span class="callout-icon">&#x1F4A1;</span>
      <div class="callout-body">
        <div class="callout-title">Strategija: pro&#269;itaj pitanja PRVO</div>
        <div class="callout-text">Pro&#269;itaj sva 4 pitanja i opcije PRIJE nego &#269;ita&#353; transkript. Podvuci klju&#269;ne rije&#269;i. Tek tada &#269;itaj transkript i tra&#382;i odgovore.</div>
      </div>
    </div>

            <div style="padding:8px 14px;background:var(--sky-dim);border:1px solid var(--sky-border);border-radius:var(--r2);margin-bottom:12px;font-size:12.5px;color:var(--sky)">
      &#x1F3A7; <b>Track A · MCQ</b> &mdash; Pro&#269;itaj pitanja ispod PRIJE nego po&#269;ne&#353; &#269;itati transkript. Autenti&#269;ni NCVVO audio: <span style="font-family:var(--mono);font-size:11px">maturiraj.hr/audio</span>
    </div>

    </div>
<div class="reading-text" style="margin-bottom:20px">
      <div class="reading-title" style="font-size:14px">Track A &mdash; Job Interview</div>
      <div class="reading-meta" style="margin-bottom:12px">
        <span>&#x1F3A7; 2 govornika</span>
        <span>&#x1F4BC; formalni razgovor</span>
        <span>&#x23F1; ~1:30</span>
      </div>
      <p style="margin:0 0 10px"><strong>INTERVIEWER:</strong> Good morning. Please, have a seat. So, you're applying for the position of marketing assistant?</p>
      <p style="margin:0 0 10px"><strong>CANDIDATE:</strong> Yes, that's right. I've always been interested in marketing, and I think this role would be a great opportunity for me.</p>
      <p style="margin:0 0 10px"><strong>INTERVIEWER:</strong> Excellent. Can you tell me a bit about your previous experience?</p>
      <p style="margin:0 0 10px"><strong>CANDIDATE:</strong> Of course. I worked as a sales assistant for two years at a retail company. Before that, I completed a six-month internship at a digital marketing agency.</p>
      <p style="margin:0 0 10px"><strong>INTERVIEWER:</strong> And what are your main strengths?</p>
      <p style="margin:0 0 10px"><strong>CANDIDATE:</strong> I'd say I'm very organised and I work well under pressure. I'm also good at communication — both written and verbal.</p>
      <p style="margin:0 0 10px"><strong>INTERVIEWER:</strong> Good. Now, this position is full-time. Would you be available to start next month?</p>
      <p style="margin:0 0 10px"><strong>CANDIDATE:</strong> Actually, I need a little more time — I'm finishing my current contract at the end of this month, but I'd need at least two weeks after that. So I could start in about six weeks.</p>
      <p style="margin:0"><strong>INTERVIEWER:</strong> That works for us. We'll be in touch by the end of this week. Thank you for coming in.</p>
    </div>

    <div class="lq-block">
      <div class="lq-meta">A1 / 4 &middot; MCQ &middot; Detalj iz razgovora</div>
      <div class="rq-text">What position is the candidate applying for?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="lqAns(this,'a1',false)" tabindex="0"><span class="rq-letter">A</span> Sales manager at a retail company.</div>
        <div class="rq-opt" onclick="lqAns(this,'a1',false)" tabindex="0"><span class="rq-letter">B</span> Digital marketing manager.</div>
        <div class="rq-opt" onclick="lqAns(this,'a1',true)" tabindex="0"><span class="rq-letter">C</span> Marketing assistant.</div>
        <div class="rq-opt" onclick="lqAns(this,'a1',false)" tabindex="0"><span class="rq-letter">D</span> Sales assistant.</div>
      </div>
      <div class="rq-expl" id="a1e" aria-live="polite"></div>
    </div>

    <div class="lq-block">
      <div class="lq-meta">A2 / 4 &middot; MCQ &middot; Parafraziranje</div>
      <div class="rq-text">How long did the candidate work as a sales assistant?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="lqAns(this,'a2',false)" tabindex="0"><span class="rq-letter">A</span> Six months.</div>
        <div class="rq-opt" onclick="lqAns(this,'a2',true)" tabindex="0"><span class="rq-letter">B</span> Two years.</div>
        <div class="rq-opt" onclick="lqAns(this,'a2',false)" tabindex="0"><span class="rq-letter">C</span> One year.</div>
        <div class="rq-opt" onclick="lqAns(this,'a2',false)" tabindex="0"><span class="rq-letter">D</span> Six weeks.</div>
      </div>
      <div class="rq-expl" id="a2e" aria-live="polite"></div>
    </div>

    <div class="lq-block">
      <div class="lq-meta">A3 / 4 &middot; MCQ &middot; Zamka &mdash; ispravka</div>
      <div class="rq-text">When can the candidate start working?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="lqAns(this,'a3',false)" tabindex="0"><span class="rq-letter">A</span> Next month.</div>
        <div class="rq-opt" onclick="lqAns(this,'a3',false)" tabindex="0"><span class="rq-letter">B</span> At the end of this month.</div>
        <div class="rq-opt" onclick="lqAns(this,'a3',false)" tabindex="0"><span class="rq-letter">C</span> Immediately.</div>
        <div class="rq-opt" onclick="lqAns(this,'a3',true)" tabindex="0"><span class="rq-letter">D</span> In about six weeks.</div>
      </div>
      <div class="rq-expl" id="a3e" aria-live="polite"></div>
    </div>

    <div class="lq-block">
      <div class="lq-meta">A4 / 4 &middot; MCQ &middot; Detalj</div>
      <div class="rq-text">What does the interviewer say at the end of the conversation?</div>
      <div class="rq-opts">
        <div class="rq-opt" onclick="lqAns(this,'a4',false)" tabindex="0"><span class="rq-letter">A</span> The candidate did not get the job.</div>
        <div class="rq-opt" onclick="lqAns(this,'a4',true)" tabindex="0"><span class="rq-letter">B</span> They will contact the candidate before the end of the week.</div>
        <div class="rq-opt" onclick="lqAns(this,'a4',false)" tabindex="0"><span class="rq-letter">C</span> The interview will continue next week.</div>
        <div class="rq-opt" onclick="lqAns(this,'a4',false)" tabindex="0"><span class="rq-letter">D</span> The candidate should send a follow-up email.</div>
      </div>
      <div class="rq-expl" id="a4e" aria-live="polite"></div>
    </div>

    <div class="score-box" id="lq-a-score" aria-live="polite" style="display:none">
      <div class="score-num" id="lq-a-num">0/4</div>
      <div class="score-lbl" id="lq-a-lbl"></div>
      <button class="sd-retry" style="margin-top:14px" onclick="retryLQA()">&#x21BA; Ponovi Set A</button>
    </div>


    <hr class="divider" style="margin:28px 0">
    <div class="sec-label">// listening practice &mdash; set B &middot; gap fill</div>
    <div class="quiz-intro" style="margin-bottom:14px"><strong>// listening set B</strong> &middot; Pro&#269;itaj re&#269;enice PRIJE nego slu&#353;a&#353;. Zatim pro&#269;itaj transkript i popuni praznine to&#269;nom rije&#269;ju iz teksta.</div>

    <div class="callout callout-tip" style="margin-bottom:16px">
      <span class="callout-icon">&#x1F4A1;</span>
      <div class="callout-body">
        <div class="callout-title">Strategija: predvidi tip informacije</div>
        <div class="callout-text">Prije slu&#353;anja/&#269;itanja provjeri: tra&#382;i li praznina <strong>broj</strong>, <strong>datum</strong>, <strong>ime</strong> ili <strong>rije&#269;</strong>? To ti govori na &#353;to se fokusirati.</div>
      </div>
    </div>

            <div style="padding:8px 14px;background:var(--sky-dim);border:1px solid var(--sky-border);border-radius:var(--r2);margin-bottom:12px;font-size:12.5px;color:var(--sky)">
      &#x1F3A7; <b>Track B · Gap Fill</b> &mdash; Pro&#269;itaj re&#269;enice s prazninama PRIJE &#269;itanja transkripta &mdash; predvidi tip informacije (broj, ime, datum). Audio: <span style="font-family:var(--mono);font-size:11px">maturiraj.hr/audio</span>
    </div>

    </div>
<div class="reading-text" style="margin-bottom:20px">
      <div class="reading-title" style="font-size:14px">Track B &mdash; Museum Tour Information</div>
      <div class="reading-meta" style="margin-bottom:12px">
        <span>&#x1F3A7; 1 govornik</span>
        <span>&#x1F3DB; informativni monolog</span>
        <span>&#x23F1; ~1:00</span>
      </div>
      <p style="margin:0">Welcome to the City History Museum. Our guided tours run <strong>every day except Monday</strong>. The morning tour starts at <strong>ten o'clock</strong> and lasts approximately <strong>ninety minutes</strong>. The afternoon tour begins at <strong>two thirty</strong>. Tickets cost <strong>eight euros</strong> for adults and <strong>four euros</strong> for children under sixteen. Please note that photography is <strong>not permitted</strong> inside the exhibition halls, but you are welcome to take photos in the entrance area and the garden. Our gift shop is open until <strong>five o'clock</strong>. If you have any questions, please speak to one of our staff members. Enjoy your visit!</p>
    </div>

    <div class="sec-label" style="margin-top:4px;margin-bottom:10px">// gap fill &mdash; popuni praznine rije&#269;ima iz transkripta</div>

    <div class="gf2-block">
      <div class="gf2-sent">The museum is closed on <input class="fitb" id="gf2i1" placeholder="?" type="text" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkGF2('b1','gf2i1','Monday')"> every week.</div>
      <button class="fitb-btn" onclick="checkGF2('b1','gf2i1','Monday')">Check</button>
      <div class="fitb-fb" id="b1fb" aria-live="polite"></div>
    </div>

    <div class="gf2-block">
      <div class="gf2-sent">The morning tour starts at <input class="fitb" id="gf2i2" placeholder="?" type="text" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkGF2('b2','gf2i2','ten o\\'clock')"> .</div>
      <button class="fitb-btn" onclick="checkGF2('b2','gf2i2','ten o\\'clock')">Check</button>
      <div class="fitb-fb" id="b2fb" aria-live="polite"></div>
    </div>

    <div class="gf2-block">
      <div class="gf2-sent">An adult ticket costs <input class="fitb" id="gf2i3" placeholder="?" type="text" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkGF2('b3','gf2i3','eight euros')"> .</div>
      <button class="fitb-btn" onclick="checkGF2('b3','gf2i3','eight euros')">Check</button>
      <div class="fitb-fb" id="b3fb" aria-live="polite"></div>
    </div>

    <div class="gf2-block">
      <div class="gf2-sent">Photography is <input class="fitb" id="gf2i4" placeholder="?" type="text" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkGF2('b4','gf2i4','not permitted')"> inside the exhibition halls.</div>
      <button class="fitb-btn" onclick="checkGF2('b4','gf2i4','not permitted')">Check</button>
      <div class="fitb-fb" id="b4fb" aria-live="polite"></div>
    </div>

    <div class="gf2-block">
      <div class="gf2-sent">Photos are allowed in the entrance area and the <input class="fitb" id="gf2i5" placeholder="?" type="text" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkGF2('b5','gf2i5','garden')"> .</div>
      <button class="fitb-btn" onclick="checkGF2('b5','gf2i5','garden')">Check</button>
      <div class="fitb-fb" id="b5fb" aria-live="polite"></div>
    </div>

    <div class="gf2-block">
      <div class="gf2-sent">The gift shop closes at <input class="fitb" id="gf2i6" placeholder="?" type="text" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkGF2('b6','gf2i6','five o\\'clock')"> .</div>
      <button class="fitb-btn" onclick="checkGF2('b6','gf2i6','five o\\'clock')">Check</button>
      <div class="fitb-fb" id="b6fb" aria-live="polite"></div>
    </div>

<!-- CTA -->
    <hr class="divider">
    <div class="sec-label">// zamke u praksi &mdash; prepoznaj gre&#353;ku u pristupu</div>
    <p class="prose" style="margin-bottom:14px">Svaka situacija opisuje pogre&#353;an pristup slu&#353;anju. Klikni da vidi&#353; &#353;to je pogre&#353;no i kako to ispraviti.</p>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">"Audio ka&#382;e: 'The train leaves at <b>half past six</b>... sorry, I mean <b>quarter past six</b>.' U&#269;enik zapisuje: <b>6:30</b>."</div>
        <button class="err-btn" onclick="showErrFix('lef1',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="lef1">&#x2705; <span class="correct">To&#269;an odgovor je 6:15 (quarter past six).</span><span class="explain">Govornik se ispravio &mdash; uvijek pi&#353;i <b>zadnji podatak</b>. 6:30 = prva (kriva) informacija. Signali ispravke: "sorry, I mean" &rarr; odmah a&#382;uriraj blje&#353;ku!</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"Pitanje: 'Where does she work?' Audio: 'She <b>works</b> from home.' U&#269;enik odabire opciju koja sadr&#382;i rije&#269; '<b>works</b>'."</div>
        <button class="err-btn" onclick="showErrFix('lef2',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="lef2">&#x2705; <span class="correct">Treba tra&#382;iti parafraziranu opciju: npr. "at home / remotely / from her house".</span><span class="explain">Iste rije&#269;i iz pitanja u audiou = zamka (distraktor). To&#269;an odgovor je <b>uvijek parafraziran</b> &mdash; isti smisao, razli&#269;ite rije&#269;i. "works" je signal da slu&#353;a&#353;, ne da si na&#353;ao odgovor.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"Audio: 'Photography is <b>not permitted</b> in the gallery.' MCQ opcija: 'Visitors <b>can take photos</b> in the gallery.' U&#269;enik odabire tu opciju."</div>
        <button class="err-btn" onclick="showErrFix('lef3',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="lef3">&#x2705; <span class="correct">Ta opcija je NETO&#268;NA &mdash; to je suprotno od onoga &#353;to audio ka&#382;e.</span><span class="explain">Negacija mijenja cijelo zna&#269;enje! "not permitted" = zabranjeno. MCQ opcija ka&#382;e suprotno. Uvijek pazi na: <b>not, never, no, without</b> &mdash; jedna rije&#269; = potpuno druk&#269;ije zna&#269;enje.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"Audio: 'To sum up...' U&#269;enik prestaje slu&#353;ati jer misli da je kraj i po&#269;inje provjeravati prethodne odgovore."</div>
        <button class="err-btn" onclick="showErrFix('lef4',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="lef4">&#x2705; <span class="correct">Nastavi slu&#353;ati &mdash; "To sum up" signalizira da dolaze klju&#269;ne informacije!</span><span class="explain">"To sum up / Finally / In conclusion" = signal zaklju&#269;ka &rarr; <b>poja&#269;aj pa&#382;nju</b>, ne smanji. Summary &#269;esto sadr&#382;i odgovor na zadnje pitanje ili potvr&#273;uje prethodne odgovore. Provjeru ostavi za <em>nakon</em> audio zapisa.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">"Gap fill: audio ka&#382;e broj ali u&#269;enik ga nije &#269;uo jasno. Ostavlja prazninu praznu jer nije siguran."</div>
        <button class="err-btn" onclick="showErrFix('lef5',this)">&#x25B6; Otkrij gre&#353;ku</button>
        <div class="err-fix" id="lef5">&#x2705; <span class="correct">Uvijek upi&#353;i ne&#353;to &mdash; makar i educated guess.</span><span class="explain">Prazno = sigurno 0 bodova. Ne&#353;to = mo&#382;da bod. U gap fill zadacima: pi&#353;i ono &#353;to si &#269;uo, &#269;ak i ako nisi siguran u pravopis. Pogre&#353;ka pravopisa obi&#269;no ne gubi bod &mdash; ali prazno definitivno gubi.</span></div>
      </div>
    </div>

    <div class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim NCVVO listening zadacima</div><div class="cta-sub">Autentični audio zapisi 2010.&ndash;2026. uz transkripcije i objasnjenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>

    <!-- KEY POINTS -->
    <div class="matura">
      <div class="matura-hd">&#x2B50; for the exam &mdash; key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>Pitanja PRVO</b> &mdash; pro&#269;itaj sva pitanja i opcije prije audio. Podvuci klju&#269;ne rije&#269;i.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Ispravka</b> = zadnji podatak. "Monday... I mean Tuesday" &rarr; odgovor: Tuesday.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Iste rije&#269;i</b> kao u pitanju = distraktor. To&#269;an odgovor je uvijek parafraziran.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Signal words</b>: However (kontrast) &middot; Furthermore (dodavanje) &middot; As a result (posljedica) &middot; To sum up (zaklju&#269;ak).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Negacija</b>: "not available online" &#x2260; "available online". Jedna rije&#269; mijenja sve.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Bilji</b> samo klju&#269;ne rije&#269;i, brojeve, datume, imena. Ne cijele re&#269;enice.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Nikad prazno</b> &mdash; educated guess &gt; prazan odgovor. Prazno = 0 bodova.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>To sum up / Finally</b> = poja&#269;aj pa&#382;nju &mdash; najva&#382;nije informacije dolaze u zaklju&#269;ku!</span></li>
      </ul>
    </div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koja je najtipičnija zamka na listening ispitu?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Ispravka &mdash; govornik daje krivi podatak, pa se ispravlja.</b><br>Uvijek pi&#353;i ZADNJI podatak. Autori ispita namjerno stavljaju prvu (krivu) informaciju jer znaju da studenti brzo zapisuju i ne &#269;ekaju kraj re&#269;enice.<br><br>Signali ispravke: "actually", "I mean", "sorry", "no wait", "let me correct that"</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Za&#353;to su iste rije&#269;i iz pitanja u audiou obi&#269;no zamka?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Jer autori ispita parafraziraju to&#269;an odgovor.</b><br>To&#269;an odgovor = isti smisao, razli&#269;ite rije&#269;i. Iste rije&#269;i iz pitanja se koriste da odvuku pa&#382;nju &mdash; to je distraktor.<br><br>Primjer: Pitanje "interested in sports" &mdash; audio govornik ka&#382;e "enjoys sports" (distraktor) ali zatim "She's really into athletics" (to&#269;an odgovor).</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch09 &mdash; listening i &#269;itanje: koje su sli&#269;nosti?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Iste strategije, razli&#269;it medij:</b><br>Pitanja PRVO &#x2713; &middot; Parafrazirani odgovori &#x2713; &middot; Signal words &#x2713; &middot; Eliminacija distractora &#x2713;<br><br>Klju&#269;na razlika: u &#269;itanju mo&#382;e&#353; se vratiti na tekst. U slu&#353;anju ima&#353; jednu (mo&#382;da dvije) &#353;anse. Zato su blje&#353;ke va&#382;nije u slu&#353;anju nego u &#269;itanju.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch10 &mdash; signal words: pisanje vs slu&#353;anje</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Isti signal words, suprotni smjer:</b><br>U pisanju (ch10): PISA&#352; "However" da poka&#382;e&#353; kontrast<br>U slu&#353;anju (ch11): &#268;UJE&#352; "However" i zna&#353; da dolazi kontrast<br><br>Poznavanjae signal words iz ch10 direktno poma&#382;e prepoznati strukturu govora u ch11.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch12 &mdash; MCQ taktike u kontekstu slu&#353;anja</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Ch12 pro&#353;iruje MCQ taktike na sve tipove zadataka:</b><br>Zamke iz ch11 (iste rije&#269;i = distraktor, negacija, djelomicno to&#269;no) &rarr; vrijede za sve MCQ na ispitu.<br>Eliminacija opcija, parafraziranje, signal words &rarr; sve su kombinacije iste temeljne vje&#353;tine: razumijevanje, ne memoriranje.</div></div>

    <!-- NEXT -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter12.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">12 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Vi&#353;estruki izbor &mdash; taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">MCQ taktike + sve zamke na jednom mjestu</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter09.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 09</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">&#268;itanje s razumijevanjem</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Iste strategije u pisanom formatu</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter10.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 10</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pisanje &mdash; kratki tekst</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Signal words koje pi&#353;e&#353; u ch10 &#269;uje&#353; u ch11</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter08.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 08</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Vokabular &mdash; &#382;ivot</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Vokabular iz ch08 &#269;este&#353;e u audio zapisima</div>
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
      <a href="chapter10.html" class="nav-btn">&larr; Chapter 10</a>
      <a href="chapter12.html" class="nav-btn primary">Final chapter &rarr;</a>
    </div>
  </div>
</div>
</main>
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

// LISTENING QUIZ
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Uvijek čitaj pitanja PRIJE slušanja — znaš što tražiš i možeš predvidjeti što ćeš čuti.",w:"✗ Netočno. Uvijek pitanja PRVO pa slušanje. Znaš što tražiti — slušanje postaje ciljano. Točan odgovor: B."},
  q2:{c:"✓ Točno. 'However' u govoru = kontrast. Govornik uvodi informaciju suprotnu onoj što je upravo rekao. Signal za promjenu smjera!",w:"✗ Netočno. 'However' = kontrast — signal da govornik mijenja smjer. Točan odgovor: B."},
  q3:{c:"✓ Točno. Govornici UVIJEK parafraziraju odgovor — iste riječi kao u pitanju = zamka. Traži sinonim ili preformulaciju.",w:"✗ Netočno. Odgovor je uvijek parafraziran — iste riječi kao u zadatku mogu biti distraktor. Točan odgovor: C."},
  q4:{c:"✓ Točno. 'In other words' = govornik sada pojašnjava ili objašnjava ono što je rekao. Ključan signal za definicije i pojašnjenja.",w:"✗ Netočno. 'In other words' = pojašnjenje ili preformulacija prethodno rečenog. Točan odgovor: A."},
  q5:{c:"✓ Točno. Govornik naglašava ključne informacije promjenom tona, pauzama, sporijim tempom ili ponavljanjem. Slušaj te signale!",w:"✗ Netočno. Naglasak = ton, pauza, sporiji tempo ili ponavljanje. Točan odgovor: D."},
  q6:{c:"✓ Točno. 'As a result' = uzrok-posljedica. Govornik govori o posljedici nečeg što je upravo rekao.",w:"✗ Netočno. 'As a result' = uzrok → posljedica. Točan odgovor: C."},
  q7:{c:"✓ Točno. Parafraziranje ne čuje se samo u riječima — govornik može reći istu stvar drugačijim rječnikom. Prepoznaj smisao, ne samo riječi.",w:"✗ Netočno. Parafraziranje = isti smisao, različite riječi. Odgovor je parafraziran, ne kopiran. Točan odgovor: B."},
  q8:{c:"✓ Točno. 'For example' / 'For instance' = govornik daje primjer za ono što je upravo tvrdio. Primjer potkrepljuje argument.",w:"✗ Netočno. 'For example' = signal primjera koji potkrepljuje prethodnu tvrdnju. Točan odgovor: A."},
  q9:{c:"✓ Točno. Na ispitu slušanja bilježi ključne riječi, brojeve, imena — ne pokušavaj pisati sve. Ključne rij. = dovoljno za odgovore.",w:"✗ Netočno. Bilježi samo ključne informacije (br., imena, ključne rij.) — ne sve! Točan odgovor: C."},
  q10:{c:"✓ Točno. 'To sum up' / 'Finally' = signal zaključka. Govornik sada sumira — obično se tu nalaze ključni zaključci i najvažnije informacije.",w:"✗ Netočno. 'To sum up' / 'Finally' = signal zaključka i sažetka. Točan odgovor: D."}
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch11',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršeno! Listening strategije su ti jasne. 🎉':
      correct>=9?'Odlično!':correct>=7?'Good. Ponovi signal words u govoru.':
      correct>=5?'Vrati se na Learn — signali i parafraziranje.':'Vrati se na Learn tab.';
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
      document.getElementById('sv-score-lbl').textContent=sdCorrect===5?'Savršen! 🎉':sdCorrect>=4?'Odlično!':sdCorrect>=3?'Dobro — ponovi signale govora.':'Vrati se na Learn tab.';
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
function saveProgress(){try{localStorage.setItem('maturix_ch11_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch11_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();

// LISTENING PRACTICE — SET A (MCQ)
var lqAAnswered={},lqACorrect=0;
var LQA={
  a1:{c:"✓ Točno. Interviewer direktno kaže 'you're applying for the position of marketing assistant' — bez parafraziranja.",w:"✗ Netočno. Sales assistant je njegova PRETHODNA pozicija, ne ona za koju se prijavljuje. Pažljivo razlikuj: 'applying for' = prijavljuje se za NOVO mjesto (marketing assistant)."},
  a2:{c:"✓ Točno. 'I worked as a sales assistant for two years' — direktna informacija.",w:"✗ Netočno. Šest mjeseci je trajanje stažiranja (internship), ne rada kao sales assistant. Pažljivo: 'two years' (sales assistant) i 'six-month internship' su dvije različite informacije."},
  a3:{c:"✓ Točno. Ovo je ZAMKA! Interviewer kaže 'start next month', ali kandidat ispravlja: 'I need at least two weeks after that — so in about six weeks.' Uvijek upiši ZADNJI podatak!",w:"✗ Netočno. Ovo je klasična listening zamka! Interviewer predlaže 'next month', ali KANDIDAT ispravlja. U listening zadatku, uvijek prati ZADNJI točan podatak — kandidat kaže 'in about six weeks'."},
  a4:{c:"✓ Točno. 'We'll be in touch by the end of this week' — 'be in touch' = kontaktirati = 'They will contact the candidate'.",w:"✗ Netočno. 'We'll be in touch by the end of this week' = 'kontaktirat ćemo te do kraja tjedna'. Tražena je parafrazacija ovog izraza — odgovor B je točna parafrazacija."}
};
function lqAns(el,qid,ok){
  if(lqAAnswered[qid]!==undefined)return;
  lqAAnswered[qid]=ok;if(ok)lqACorrect++;
  var opts=el.closest('.rq-opts');
  if(opts)opts.querySelectorAll('.rq-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){var p=el.closest('.rq-opts');if(p)p.querySelectorAll('.rq-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+LQA[qid][ok?'c':'w']+'</div>';expl.classList.add('show');}
  if(Object.keys(lqAAnswered).length===4){
    document.getElementById('lq-a-num').textContent=lqACorrect+'/4';
    document.getElementById('lq-a-lbl').textContent=
      lqACorrect===4?'Savršeno! Listening MCQ svladan. 🎉':
      lqACorrect>=3?'Odlično! Pazi na ispravke govornika.':
      lqACorrect>=2?'Dobro. Ponovi strategiju: zadnji podatak = točan.':
      'Pročitaj opet transkript i objašnjenja. Fokus na parafraziranje.';
    var s=document.getElementById('lq-a-score');if(s){s.style.display='block';}
  }
}
function retryLQA(){
  lqAAnswered={};lqACorrect=0;
  ['a1','a2','a3','a4'].forEach(function(qid){
    document.querySelectorAll('[onclick*="lqAns(this,\\''+qid+'\\'"]').forEach(function(o){o.classList.remove('correct','wrong','disabled');});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  var s=document.getElementById('lq-a-score');if(s){s.style.display='none';}
}

// LISTENING PRACTICE — SET B (Gap fill)
var gf2Answers={'b1':false,'b2':false,'b3':false,'b4':false,'b5':false,'b6':false};
function checkGF2(id,inputId,correct){
  var inp=document.getElementById(inputId);
  if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();
  var ok=(val===correct.toLowerCase());
  inp.disabled=true;
  inp.style.borderColor=ok?'var(--green)':'var(--red)';
  var fb=document.getElementById(id+'fb');
  if(fb){fb.innerHTML=ok?'&#x2713; Točno!':'&#x2717; Točan odgovor: <b>'+correct+'</b>';fb.className='fitb-fb '+(ok?'ok':'no');}
}

</script>
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

const CH11_JS = `// TRACKER: bilježi pogreške
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

// LISTENING QUIZ
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Uvijek čitaj pitanja PRIJE slušanja — znaš što tražiš i možeš predvidjeti što ćeš čuti.",w:"✗ Netočno. Uvijek pitanja PRVO pa slušanje. Znaš što tražiti — slušanje postaje ciljano. Točan odgovor: B."},
  q2:{c:"✓ Točno. 'However' u govoru = kontrast. Govornik uvodi informaciju suprotnu onoj što je upravo rekao. Signal za promjenu smjera!",w:"✗ Netočno. 'However' = kontrast — signal da govornik mijenja smjer. Točan odgovor: B."},
  q3:{c:"✓ Točno. Govornici UVIJEK parafraziraju odgovor — iste riječi kao u pitanju = zamka. Traži sinonim ili preformulaciju.",w:"✗ Netočno. Odgovor je uvijek parafraziran — iste riječi kao u zadatku mogu biti distraktor. Točan odgovor: C."},
  q4:{c:"✓ Točno. 'In other words' = govornik sada pojašnjava ili objašnjava ono što je rekao. Ključan signal za definicije i pojašnjenja.",w:"✗ Netočno. 'In other words' = pojašnjenje ili preformulacija prethodno rečenog. Točan odgovor: A."},
  q5:{c:"✓ Točno. Govornik naglašava ključne informacije promjenom tona, pauzama, sporijim tempom ili ponavljanjem. Slušaj te signale!",w:"✗ Netočno. Naglasak = ton, pauza, sporiji tempo ili ponavljanje. Točan odgovor: D."},
  q6:{c:"✓ Točno. 'As a result' = uzrok-posljedica. Govornik govori o posljedici nečeg što je upravo rekao.",w:"✗ Netočno. 'As a result' = uzrok → posljedica. Točan odgovor: C."},
  q7:{c:"✓ Točno. Parafraziranje ne čuje se samo u riječima — govornik može reći istu stvar drugačijim rječnikom. Prepoznaj smisao, ne samo riječi.",w:"✗ Netočno. Parafraziranje = isti smisao, različite riječi. Odgovor je parafraziran, ne kopiran. Točan odgovor: B."},
  q8:{c:"✓ Točno. 'For example' / 'For instance' = govornik daje primjer za ono što je upravo tvrdio. Primjer potkrepljuje argument.",w:"✗ Netočno. 'For example' = signal primjera koji potkrepljuje prethodnu tvrdnju. Točan odgovor: A."},
  q9:{c:"✓ Točno. Na ispitu slušanja bilježi ključne riječi, brojeve, imena — ne pokušavaj pisati sve. Ključne rij. = dovoljno za odgovore.",w:"✗ Netočno. Bilježi samo ključne informacije (br., imena, ključne rij.) — ne sve! Točan odgovor: C."},
  q10:{c:"✓ Točno. 'To sum up' / 'Finally' = signal zaključka. Govornik sada sumira — obično se tu nalaze ključni zaključci i najvažnije informacije.",w:"✗ Netočno. 'To sum up' / 'Finally' = signal zaključka i sažetka. Točan odgovor: D."}
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch11',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršeno! Listening strategije su ti jasne. 🎉':
      correct>=9?'Odlično!':correct>=7?'Good. Ponovi signal words u govoru.':
      correct>=5?'Vrati se na Learn — signali i parafraziranje.':'Vrati se na Learn tab.';
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
      document.getElementById('sv-score-lbl').textContent=sdCorrect===5?'Savršen! 🎉':sdCorrect>=4?'Odlično!':sdCorrect>=3?'Dobro — ponovi signale govora.':'Vrati se na Learn tab.';
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
function saveProgress(){try{localStorage.setItem('maturix_ch11_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch11_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();

// LISTENING PRACTICE — SET A (MCQ)
var lqAAnswered={},lqACorrect=0;
var LQA={
  a1:{c:"✓ Točno. Interviewer direktno kaže 'you're applying for the position of marketing assistant' — bez parafraziranja.",w:"✗ Netočno. Sales assistant je njegova PRETHODNA pozicija, ne ona za koju se prijavljuje. Pažljivo razlikuj: 'applying for' = prijavljuje se za NOVO mjesto (marketing assistant)."},
  a2:{c:"✓ Točno. 'I worked as a sales assistant for two years' — direktna informacija.",w:"✗ Netočno. Šest mjeseci je trajanje stažiranja (internship), ne rada kao sales assistant. Pažljivo: 'two years' (sales assistant) i 'six-month internship' su dvije različite informacije."},
  a3:{c:"✓ Točno. Ovo je ZAMKA! Interviewer kaže 'start next month', ali kandidat ispravlja: 'I need at least two weeks after that — so in about six weeks.' Uvijek upiši ZADNJI podatak!",w:"✗ Netočno. Ovo je klasična listening zamka! Interviewer predlaže 'next month', ali KANDIDAT ispravlja. U listening zadatku, uvijek prati ZADNJI točan podatak — kandidat kaže 'in about six weeks'."},
  a4:{c:"✓ Točno. 'We'll be in touch by the end of this week' — 'be in touch' = kontaktirati = 'They will contact the candidate'.",w:"✗ Netočno. 'We'll be in touch by the end of this week' = 'kontaktirat ćemo te do kraja tjedna'. Tražena je parafrazacija ovog izraza — odgovor B je točna parafrazacija."}
};
function lqAns(el,qid,ok){
  if(lqAAnswered[qid]!==undefined)return;
  lqAAnswered[qid]=ok;if(ok)lqACorrect++;
  var opts=el.closest('.rq-opts');
  if(opts)opts.querySelectorAll('.rq-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){var p=el.closest('.rq-opts');if(p)p.querySelectorAll('.rq-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  if(expl){expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+LQA[qid][ok?'c':'w']+'</div>';expl.classList.add('show');}
  if(Object.keys(lqAAnswered).length===4){
    document.getElementById('lq-a-num').textContent=lqACorrect+'/4';
    document.getElementById('lq-a-lbl').textContent=
      lqACorrect===4?'Savršeno! Listening MCQ svladan. 🎉':
      lqACorrect>=3?'Odlično! Pazi na ispravke govornika.':
      lqACorrect>=2?'Dobro. Ponovi strategiju: zadnji podatak = točan.':
      'Pročitaj opet transkript i objašnjenja. Fokus na parafraziranje.';
    var s=document.getElementById('lq-a-score');if(s){s.style.display='block';}
  }
}
function retryLQA(){
  lqAAnswered={};lqACorrect=0;
  ['a1','a2','a3','a4'].forEach(function(qid){
    document.querySelectorAll('[onclick*="lqAns(this,\\''+qid+'\\'"]').forEach(function(o){o.classList.remove('correct','wrong','disabled');});
    var e=document.getElementById(qid+'e');if(e){e.innerHTML='';e.classList.remove('show');}
  });
  var s=document.getElementById('lq-a-score');if(s){s.style.display='none';}
}

// LISTENING PRACTICE — SET B (Gap fill)
var gf2Answers={'b1':false,'b2':false,'b3':false,'b4':false,'b5':false,'b6':false};
function checkGF2(id,inputId,correct){
  var inp=document.getElementById(inputId);
  if(!inp||inp.disabled)return;
  var val=inp.value.trim().toLowerCase();
  var ok=(val===correct.toLowerCase());
  inp.disabled=true;
  inp.style.borderColor=ok?'var(--green)':'var(--red)';
  var fb=document.getElementById(id+'fb');
  if(fb){fb.innerHTML=ok?'&#x2713; Točno!':'&#x2717; Točan odgovor: <b>'+correct+'</b>';fb.className='fitb-fb '+(ok?'ok':'no');}
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
