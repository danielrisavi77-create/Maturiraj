// Maturiraj.hr — Engleski niža razina · Poglavlje 8
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ENG_NIZA_CH08({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch08-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH08_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch08-js";
    scriptEl.textContent = CH08_JS;
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
      if (num === 9 && nav.onNext) nav.onNext();
      else if (num === 7 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch08-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch08-root"
      dangerouslySetInnerHTML={{ __html: CH08_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH08_CSS = `
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

const CH08_BODY = `<div class="shell">

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
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 08 &middot; Vokabular — život</div>
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
  <div class="sb-item" onclick="window.location='chapter07.html'" style="cursor:pointer"><span class="sb-dot"></span> 07 &middot; Pasiv</div>
  <div class="sb-label">// Vještine</div>
  <div class="sb-item active"><span class="sb-dot"></span> 08 &middot; Vokabular — život</div>
  <div class="sb-item" onclick="window.location='chapter09.html'" style="cursor:pointer"><span class="sb-dot"></span> 09 &middot; Čitanje s razumijevanjem</div>
  <div class="sb-item" onclick="window.location='chapter10.html'" style="cursor:pointer"><span class="sb-dot"></span> 10 &middot; Pisanje — kratki tekst</div>
  <div class="sb-item" onclick="window.location='chapter11.html'" style="cursor:pointer"><span class="sb-dot"></span> 11 &middot; Strategije slušanja</div>
  <div class="sb-item" onclick="window.location='chapter12.html'" style="cursor:pointer"><span class="sb-dot"></span> 12 &middot; Višestruki izbor — taktika</div>
  <div class="sb-label">// Prošireno</div>
  <div class="sb-item" onclick="window.location='chapter13.html'" style="cursor:pointer"><span class="sb-dot"></span> 13 &middot; Neupravni govor</div>
  <div class="sb-item" onclick="window.location='chapter14.html'" style="cursor:pointer"><span class="sb-dot"></span> 14 &middot; Članovi: a / an / the</div>
  <div class="sb-item" onclick="window.location='chapter15.html'" style="cursor:pointer"><span class="sb-dot"></span> 15 &middot; Komparativ i tag pitanja</div>
  <div class="sb-footer">08 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span onclick="window.location='chapter07.html'" style="cursor:pointer">&larr; chapters</span>
    <span class="bc-sep">/</span><span>skills</span>
    <span class="bc-sep">/</span><span class="bc-active">vocabulary-life</span>
  </div>

  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" tabindex="0">&#9889; 2 min<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" tabindex="0">&#128214; Learn<span class="tab-check">&#10003;</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" tabindex="0">&#9999;&#65039; Practice<span class="tab-check">&#10003;</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Overview</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Learn vocab</div>
    <span class="tp-arrow">&rarr;</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Practice &amp; quiz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~40 min
    </div>
  </div>

  <div class="layer active" id="l0">
        <div style="margin-bottom:16px;padding:14px 18px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);border-left:3px solid var(--sky)">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--sky);margin-bottom:6px">// ispitne vje&scaron;tine &mdash; Ch08&ndash;Ch12</div>
      <div style="font-size:13px;color:var(--t2);line-height:1.6">
        Gramatika (Ch01&ndash;07) je zavr&scaron;ena. Ovaj blok pokriva <b>vokabular, &ccaron;itanje, pisanje, slu&scaron;anje</b> i <b>MCQ taktiku</b> &mdash; vje&scaron;tine koje &ccaron;ine drugu polovinu ispita.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">Nema&scaron; puno vremena? Skoči direktno na <span onclick="window.location='chapter12.html'" style="color:var(--sky);cursor:pointer;text-decoration:underline">Ch12 &mdash; MCQ taktiku</span> pa se vrati ovdje.</span>
      </div>
    </div>
    <div style="margin-bottom:16px;padding:13px 17px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3)">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--sky);margin-bottom:10px">// preporuke&#269;eni redoslijed u&#269;enja</div>
      <div style="display:grid;grid-template-columns:auto 1fr;gap:5px 12px;font-size:12.5px;align-items:center">
        <div style="font-family:var(--mono);font-size:10px;color:var(--sky);font-weight:700">30 min</div>
        <div style="color:var(--t2)">Kolokacije &mdash; make/do/get/have/go · zamke i uzorci</div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--sky);font-weight:700">20 min</div>
        <div style="color:var(--t2)">Phrasal verbs &mdash; grow up, break up, get on with...</div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--lime);font-weight:700">20 min</div>
        <div style="color:var(--t2)">Verb patterns &mdash; enjoy +-ing / want +to / stop razlika</div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--lime);font-weight:700">15 min</div>
        <div style="color:var(--t2)">Prijedlo&#382;ne fraze &mdash; interested IN, good AT, afraid OF...</div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);font-weight:700">+ Quiz</div>
        <div style="color:var(--t3)">13 pitanja: kolokacije + phrasal verbs + vocabulary in context</div>
      </div>
    </div>
<div class="hero">
      <div class="hero-eyebrow">chapter 08 / 15 &middot; vocabulary</div>
      <h1 class="hero-title">Vocabulary: <span>Life</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">&#9201; ~40 min</span>
        <span class="hero-badge hb-level">ni&#382;a razina</span>
        <span class="hero-badge hb-chapter">08 / 12</span>
      </div>
      <p class="hero-sub">Posao &amp; karijera &middot; Obitelj &amp; odnosi &middot; Novac &amp; financije &middot; Zajednica &amp; dru&#353;tvo</p>
      <div class="progress-track"><div class="progress-bar" style="width:66%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">Posao &amp; karijera</span>
      <span class="pill pill-sky">Obitelj &amp; odnosi</span>
      <span class="pill pill-violet">Novac &amp; financije</span>
      <span class="pill pill-amber">Kolokacije</span>
      <span class="pill pill-red">Phrasal verbs</span>
    </div>

    <div class="sec-label">// at a glance &mdash; 4 teme</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon lime">JOB</div><div class="stat-name">Posao &amp; karijera</div><div class="stat-desc">apply, promote, retire, unemployed, salary, CV, interview&hellip;</div></div>
      <div class="stat-card"><div class="stat-icon sky">FAM</div><div class="stat-name">Obitelj &amp; odnosi</div><div class="stat-desc">raise children, get married, divorce, relationship, siblings&hellip;</div></div>
      <div class="stat-card"><div class="stat-icon violet">MON</div><div class="stat-name">Novac &amp; financije</div><div class="stat-desc">earn, save, spend, loan, mortgage, budget, debt&hellip;</div></div>
      <div class="stat-card"><div class="stat-icon amber">SOC</div><div class="stat-name">Zajednica &amp; dru&#353;tvo</div><div class="stat-desc">volunteer, charity, homeless, awareness, community&hellip;</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Kolokacije</div><div class="cv">make a living &middot; apply FOR a job &middot; get promoted &middot; do voluntary work &middot; raise awareness</div></div>
      <div class="concept-row"><div class="ck sky">Phrasal verbs</div><div class="cv">grow up &middot; break up &middot; get on with &middot; set up &middot; give up &middot; look after &middot; take up</div></div>
      <div class="concept-row"><div class="ck violet">Financije</div><div class="cv">earn a salary &middot; take out a loan &middot; pay off a debt &middot; make ends meet &middot; save up</div></div>
      <div class="concept-row"><div class="ck amber">Zamjene</div><div class="cv">make/do razlika &middot; get/become &middot; rise/raise &middot; lay off vs fire</div></div>
      <div class="concept-row"><div class="ck red">Zamka</div><div class="cv">"do a job" &#x2713; &middot; "make a job" &#x2717; &middot; "do business" &#x2713; &middot; "make business" &#x2717;</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// panic-proof &mdash; 3 key rules</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F9E0; panic-proof &mdash; vokabular na ispitu</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Kolokacije</b>: apply <b>for</b> a job &middot; get <b>promoted</b> &middot; do <b>voluntary</b> work &middot; make a <b>living</b> &middot; raise <b>awareness</b></div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>make vs do</b>: make = kreirati ne&scaron;to novo (make a decision, make money) &middot; do = obavljati (do homework, do business, do a course)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Phrasal verbs</b>: grow UP &middot; break UP &middot; give UP &middot; set UP &middot; look AFTER &middot; get ON with &middot; take UP &mdash; partikel je klju&#269;an!</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Najva&#382;nije kolokacije &mdash; posao i karijera</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>apply FOR</b> a job &middot; <b>get promoted</b> &middot; <b>be made redundant</b> &middot; <b>be laid off</b><br><b>earn</b> a salary &middot; <b>do</b> an internship &middot; <b>run</b> a business<br>retire FROM work &middot; <b>make</b> a living &middot; work OVERTIME &middot; be self-employed</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>make vs do &mdash; kako znati koji koristiti?</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>make</b> = rezultira ne&#269;im novim:<br><em>make money, make a decision, make a mistake, make an effort, make a living, make progress</em><br><br><b>do</b> = obavljati aktivnost:<br><em>do homework, do business, do a course, do voluntary work, do research, do your best</em><br><br>&#x26A0; <span class="bad">make homework</span> &#x274C; &middot; <span class="ok">do homework</span> &#x2713;</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Klju&#269;ni phrasal verbs &mdash; &#382;ivot i odnosi</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>grow up</b> = odrastati · <b>break up</b> = raskinuti · <b>get on with</b> = slagati se<br><b>give up</b> = odustati · <b>take up</b> = početi (hobi) · <b>look forward to</b> = veseliti se<br><b>carry on</b> = nastaviti · <b>end up</b> = završiti negdje · <b>fall out</b> = posvađati se</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Novac i financije &mdash; klju&#269;ne kolokacije</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>earn</b> a salary/wage &middot; <b>save up</b> for something &middot; <b>spend</b> money ON<br><b>take out</b> a loan &middot; <b>pay off</b> a debt/loan &middot; <b>be in debt</b><br><b>make ends meet</b> = jedva pre&#382;ivjeti &middot; <b>live within your means</b><br><b>go bankrupt</b> = bankrotirati &middot; <b>invest</b> in something</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Zajednica i dru&#353;tvo &mdash; klju&#269;ne rije&#269;i</span><span class="reveal-arrow">&#x25BC;</span></div>
      <div class="reveal-ans"><b>volunteer</b> &middot; <b>charity</b> &middot; <b>donation</b><br><b>homeless</b> &middot; <b>poverty</b> &middot; <b>inequality</b><br><b>raise awareness</b> = podizati svjesnost &middot; <b>campaign</b><br><b>community</b> &middot; <b>sustainable</b> &middot; <b>impact</b></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol</div>
    <div class="panic-box">
      <div class="panic-hd">&#x1F6A8; if you panic &mdash; vokabular na ispitu</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Tra&#382;i <b>kolokaciju</b> &mdash; koji glagol ide s tom imenicom? (apply FOR, not apply TO)</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>make ili do?</b> Rezultira ne&#269;im novim &rarr; make &middot; Obavlja&#353; aktivnost &rarr; do</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Phrasal verb</b>: upamti partikel &mdash; grow UP, break UP with, look AFTER</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Prijedlog</b>: apply FOR &middot; spend ON &middot; invest IN &middot; responsible FOR &middot; proud OF</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Kontekst: pro&#269;itaj cijelu re&#269;enicu &mdash; zna&#269;enje odre&#273;uje koji sinonim odabrati</div></div>
      </div>
    </div>
    <div class="nav-row">
      <a href="chapter07.html" class="nav-btn">&larr; Chapter 07</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn vocab &rarr;</span>
    </div>
  </div>

  <div class="layer" id="l1">
    <div class="topic-section">
      <div class="topic-hd">
        <div class="topic-icon" style="background:var(--lime-dim)">&#x1F4BC;</div>
        <div class="topic-title">Posao &amp; karijera</div>
        <div class="topic-count">28 rije&#269;i &mdash; klikni karticu za primjer</div>
      </div>
      <div class="vocab-grid">
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">salary</div><div class="vc-trans">pla&#263;a (mjese&#269;na)</div><div class="vc-ex">She earns a good salary at her new job.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">wage</div><div class="vc-trans">nadnica (satna/tjed.)</div><div class="vc-ex">The minimum wage was increased this year.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">apply for</div><div class="vc-trans">prijaviti se za</div><div class="vc-ex">She applied for the marketing manager position.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">get promoted</div><div class="vc-trans">biti unapri&#273;en</div><div class="vc-ex">He worked hard and finally got promoted.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">retire (from)</div><div class="vc-trans">oti&#263;i u mirovinu</div><div class="vc-ex">My grandfather retired from teaching at 65.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">pridjev</div><div class="vc-word">unemployed</div><div class="vc-trans">nezaposlen</div><div class="vc-ex">He has been unemployed for six months.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">pridjev</div><div class="vc-word">self-employed</div><div class="vc-trans">samozaposlen</div><div class="vc-ex">As a freelancer, she is self-employed.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">CV / r&eacute;sum&eacute;</div><div class="vc-trans">&#382;ivotopis</div><div class="vc-ex">Always update your CV before applying.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">interview</div><div class="vc-trans">razgovor za posao</div><div class="vc-ex">She had a job interview at 10 am.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">internship</div><div class="vc-trans">sta&#382;iranje</div><div class="vc-ex">He did a summer internship at a bank.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">be made redundant</div><div class="vc-trans">dobiti otkaz (vi&#353;ak)</div><div class="vc-ex">200 workers were made redundant last month.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">be laid off</div><div class="vc-trans">biti otpu&#353;ten</div><div class="vc-ex">Many workers were laid off during the crisis.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">deadline</div><div class="vc-trans">rok, krajnji rok</div><div class="vc-ex">We need to meet the deadline by Friday.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">overtime</div><div class="vc-trans">prekovremeni rad</div><div class="vc-ex">She worked overtime to finish the project.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">profession</div><div class="vc-trans">struka, profesija</div><div class="vc-ex">Teaching is a very demanding profession.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">run a business</div><div class="vc-trans">voditi tvrtku</div><div class="vc-ex">It takes skill to run a successful business.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">make a living</div><div class="vc-trans">zara&#273;ivati za &#382;ivot</div><div class="vc-ex">She makes a living as a freelance writer.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">pridjev</div><div class="vc-word">full-time / part-time</div><div class="vc-trans">puno/nepuno radno vr.</div><div class="vc-ex">She works part-time while studying.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">colleague</div><div class="vc-trans">kolega</div><div class="vc-ex">My colleagues are very supportive.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">employer / employee</div><div class="vc-trans">poslodavac / radnik</div><div class="vc-ex">The employer offered a competitive salary.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">pursue a career</div><div class="vc-trans">graditi karijeru</div><div class="vc-ex">She wants to pursue a career in medicine.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">qualification</div><div class="vc-trans">kvalifikacija</div><div class="vc-ex">You need the right qualifications for this job.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">promotion</div><div class="vc-trans">unapre&#273;enje</div><div class="vc-ex">She deserved the promotion she got.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">commute</div><div class="vc-trans">putovati na posao</div><div class="vc-ex">He commutes two hours every day.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">job satisfaction</div><div class="vc-trans">zadovoljstvo poslom</div><div class="vc-ex">Job satisfaction matters more than salary.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">resign / quit</div><div class="vc-trans">dati otkaz</div><div class="vc-ex">She resigned because of poor management.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">benefits</div><div class="vc-trans">benefiti, povlastice</div><div class="vc-ex">The job comes with great benefits.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">career path</div><div class="vc-trans">karijerni put</div><div class="vc-ex">She changed her career path at 35.</div></div>
      </div>
    </div>

    <div class="topic-section">
      <div class="topic-hd">
        <div class="topic-icon" style="background:var(--sky-dim)">&#x1F468;&#x200D;&#x1F469;&#x200D;&#x1F467;</div>
        <div class="topic-title">Obitelj &amp; odnosi</div>
        <div class="topic-count">20 rije&#269;i</div>
      </div>
      <div class="vocab-grid">
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">grow up</div><div class="vc-trans">odrastati</div><div class="vc-ex">She grew up in a small village in Croatia.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">bring up / raise</div><div class="vc-trans">odgajati</div><div class="vc-ex">She was brought up by her grandparents.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">get married (to)</div><div class="vc-trans">vjen&#269;ati se</div><div class="vc-ex">They got married in June last year.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">get divorced</div><div class="vc-trans">razvesti se</div><div class="vc-ex">They got divorced after ten years.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">break up (with)</div><div class="vc-trans">prekinuti vezu</div><div class="vc-ex">She broke up with her boyfriend last week.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">get on (well) with</div><div class="vc-trans">slagati se s nekim</div><div class="vc-ex">I get on well with my sister.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">fall out (with)</div><div class="vc-trans">posva&#273;ati se</div><div class="vc-ex">They fell out over money.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">look after</div><div class="vc-trans">brinuti se o</div><div class="vc-ex">She looks after her elderly parents.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">take after</div><div class="vc-trans">nalikovati na</div><div class="vc-ex">He takes after his father &mdash; same eyes!</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">sibling</div><div class="vc-trans">brat ili sestra</div><div class="vc-ex">She has two siblings &mdash; a brother and a sister.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">relative</div><div class="vc-trans">rodbina, ro&#273;ak</div><div class="vc-ex">We visited relatives over the holidays.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">pridjev</div><div class="vc-word">close-knit</div><div class="vc-trans">slo&#382;na obitelj</div><div class="vc-ex">We are a very close-knit family.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">household</div><div class="vc-trans">ku&#263;anstvo</div><div class="vc-ex">There are four people in our household.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">upbringing</div><div class="vc-trans">odgoj</div><div class="vc-ex">Her upbringing shaped who she became.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">generation</div><div class="vc-trans">generacija</div><div class="vc-ex">Three generations live in that house.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">make up (with)</div><div class="vc-trans">pomiriti se</div><div class="vc-ex">They argued but made up the next day.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">partnership</div><div class="vc-trans">partnerstvo, veza</div><div class="vc-ex">They have been in a partnership for years.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">support</div><div class="vc-trans">podr&#382;avati, uzdr&#382;avati</div><div class="vc-ex">She supports her family financially.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">bond</div><div class="vc-trans">veza, spona</div><div class="vc-ex">There is a strong bond between them.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">conflict</div><div class="vc-trans">sukob, neslaganje</div><div class="vc-ex">Family conflict can be hard to resolve.</div></div>
      </div>
    </div>

    <div class="topic-section">
      <div class="topic-hd">
        <div class="topic-icon" style="background:var(--violet-dim)">&#x1F4B0;</div>
        <div class="topic-title">Novac &amp; financije</div>
        <div class="topic-count">18 rije&#269;i</div>
      </div>
      <div class="vocab-grid">
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">earn</div><div class="vc-trans">zaraditi</div><div class="vc-ex">He earns more than anyone in the company.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">save up</div><div class="vc-trans">&#353;tedjeti za</div><div class="vc-ex">She is saving up for a car.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">spend (on)</div><div class="vc-trans">potro&#353;iti na</div><div class="vc-ex">She spends too much on clothes.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">take out a loan</div><div class="vc-trans">uzeti kredit</div><div class="vc-ex">They took out a loan to buy the house.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">pay off</div><div class="vc-trans">otplatiti</div><div class="vc-ex">It took ten years to pay off the mortgage.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">make ends meet</div><div class="vc-trans">jedva sastaviti kraj</div><div class="vc-ex">With low wages, it&#39;s hard to make ends meet.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">mortgage</div><div class="vc-trans">hipoteka</div><div class="vc-ex">They took out a 30-year mortgage.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">debt</div><div class="vc-trans">dug</div><div class="vc-ex">He is in serious debt after losing his job.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">budget</div><div class="vc-trans">prora&#269;un, bud&#382;et</div><div class="vc-ex">We need to stick to a strict budget.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">invest (in)</div><div class="vc-trans">ulagati u</div><div class="vc-ex">It&#39;s wise to invest in your education.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">income</div><div class="vc-trans">prihod, zarada</div><div class="vc-ex">Her income doubled after the promotion.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">expense</div><div class="vc-trans">tro&#353;ak</div><div class="vc-ex">Rent is our biggest monthly expense.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">afford</div><div class="vc-trans">priustiti si</div><div class="vc-ex">We can&#39;t afford to buy a new car right now.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">scholarship</div><div class="vc-trans">stipendija</div><div class="vc-ex">She received a scholarship to study abroad.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">go bankrupt</div><div class="vc-trans">bankrotirati</div><div class="vc-ex">The company went bankrupt during the crisis.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">tax</div><div class="vc-trans">porez</div><div class="vc-ex">Income tax is taken from your salary.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">inherit</div><div class="vc-trans">naslijediti</div><div class="vc-ex">She inherited the house from her aunt.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">pension</div><div class="vc-trans">mirovina</div><div class="vc-ex">He lives on his pension after retiring.</div></div>
      </div>
    </div>

    <div class="topic-section">
      <div class="topic-hd">
        <div class="topic-icon" style="background:var(--amber-dim)">&#x1F30D;</div>
        <div class="topic-title">Zajednica &amp; dru&#353;tvo</div>
        <div class="topic-count">16 rije&#269;i</div>
      </div>
      <div class="vocab-grid">
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol/imenica</div><div class="vc-word">volunteer</div><div class="vc-trans">volontirati / volonter</div><div class="vc-ex">She volunteers at the local food bank.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">charity</div><div class="vc-trans">dobrotvorna org.</div><div class="vc-ex">He donates to a children&#39;s charity every month.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">donation</div><div class="vc-trans">donacija, dar</div><div class="vc-ex">They made a generous donation to the school.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">pridjev/imenica</div><div class="vc-word">homeless</div><div class="vc-trans">bez doma / besku&#263;nik</div><div class="vc-ex">The shelter helps homeless people in winter.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">poverty</div><div class="vc-trans">siroma&#353;tvo</div><div class="vc-ex">Many families are living in poverty.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">inequality</div><div class="vc-trans">nejednakost</div><div class="vc-ex">Social inequality remains a major challenge.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">raise awareness</div><div class="vc-trans">podizati svjesnost</div><div class="vc-ex">The campaign aims to raise awareness of climate change.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">community</div><div class="vc-trans">zajednica</div><div class="vc-ex">The whole community came together to help.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">campaign</div><div class="vc-trans">kampanja</div><div class="vc-ex">They launched a campaign to reduce plastic use.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">pridjev</div><div class="vc-word">sustainable</div><div class="vc-trans">odr&#382;ivo</div><div class="vc-ex">We need a more sustainable way of living.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">impact</div><div class="vc-trans">utjecaj, u&#269;inak</div><div class="vc-ex">Education has a huge impact on people&#39;s lives.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">discrimination</div><div class="vc-trans">diskriminacija</div><div class="vc-ex">Discrimination based on age is illegal.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">prejudice</div><div class="vc-trans">predrasuda</div><div class="vc-ex">Prejudice can be very harmful to society.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">glagol</div><div class="vc-word">do voluntary work</div><div class="vc-trans">raditi volonterski</div><div class="vc-ex">Many students do voluntary work in summer.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">welfare</div><div class="vc-trans">dobrobit, socijalna skrb</div><div class="vc-ex">Child welfare is a top government priority.</div></div>
        <div class="vocab-card" onclick="revealCard(this)"><div class="vc-topic">imenica</div><div class="vc-word">human rights</div><div class="vc-trans">ljudska prava</div><div class="vc-ex">Everyone deserves basic human rights.</div></div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// kolokacije &mdash; make vs do vs get vs have</div>
    <p class="prose">Najtipicnija zamka vokabularnih zadataka. Upamti kombinacije &mdash; ne prijevod!</p>
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>make</th><th>do</th><th>get</th><th>have</th></tr></thead>
        <tbody>
          <tr><td>make a <b>living</b></td><td>do <b>homework</b></td><td>get <b>promoted</b></td><td>have a <b>job</b></td></tr>
          <tr><td>make a <b>decision</b></td><td>do <b>voluntary work</b></td><td>get <b>divorced</b></td><td>have an <b>argument</b></td></tr>
          <tr><td>make a <b>mistake</b></td><td>do <b>business</b></td><td>get <b>married</b></td><td>have a <b>loan</b></td></tr>
          <tr><td>make a <b>complaint</b></td><td>do <b>research</b></td><td>get a <b>promotion</b></td><td>have <b>children</b></td></tr>
          <tr><td>make <b>money</b></td><td>do an <b>internship</b></td><td>get <b>laid off</b></td><td>have a <b>mortgage</b></td></tr>
          <tr><td>make <b>progress</b></td><td>do your <b>best</b></td><td>get on <b>with</b></td><td>have a <b>career</b></td></tr>
          <tr><td>make ends <b>meet</b></td><td>do a <b>course</b></td><td>get a <b>salary</b></td><td>have an <b>interview</b></td></tr>
        </tbody>
      </table>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-top:4px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--amber);margin-bottom:10px">// za&#353;to make a decision, a ne do a decision?</div>
      <p style="font-size:13px;color:var(--t2);margin:0 0 10px">Intuitivni test: <b>make</b> = rezultira ne&#269;im novim, ne&#269;im &#353;to nije postojalo. <b>do</b> = obavlja&#353; aktivnost koja ve&#263; postoji kao zadatak.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:12.5px">
        <div style="background:var(--lime-dim);border:1px solid var(--lime-border);border-radius:var(--r2);padding:9px 12px">
          <div style="color:var(--lime);font-weight:700;margin-bottom:5px">make &rarr; nastaje ne&#353;to novo</div>
          <div style="color:var(--t2)">make a <b>decision</b> &mdash; odluka nije postojala<br>make a <b>mistake</b> &mdash; gre&#353;ka se stvorila<br>make <b>money</b> &mdash; novac se zara&#273;uje<br>make <b>progress</b> &mdash; napredak se posti&#382;e<br>make a <b>suggestion</b> &mdash; prijedlog nastaje</div>
        </div>
        <div style="background:var(--sky-dim);border:1px solid var(--sky-border);border-radius:var(--r2);padding:9px 12px">
          <div style="color:var(--sky);font-weight:700;margin-bottom:5px">do &rarr; obavlja&#353; zadatak</div>
          <div style="color:var(--t2)">do <b>homework</b> &mdash; zadatak postoji, obavlja&#353; ga<br>do <b>business</b> &mdash; poslovna aktivnost<br>do <b>research</b> &mdash; istra&#382;iva&#269;ki proces<br>do a <b>course</b> &mdash; te&#269;aj postoji, pola&#382;i&#353; ga<br>do your <b>best</b> &mdash; trud koji ula&#382;e&#353;</div>
        </div>
      </div>
      <div style="margin-top:8px;padding:7px 12px;background:var(--amber-dim);border-radius:var(--r2);font-size:12px;color:var(--amber)">
        &#x26A0; Granica nije uvijek savr&#353;ena &mdash; neke kolokacije se jednostavno moraju znati. Ali test &ldquo;nastaje ne&#353;to novo?&rdquo; poma&#382;e u 80% slu&#269;ajeva.
      </div>
    </div>


    </div>

    <hr class="divider">
    <div class="sec-label">// phrasal verbs &mdash; &#382;ivotne teme</div>
    <div class="collocations">
      <div class="colloc-row"><div class="colloc-word">grow up</div><div class="colloc-pairs">odrastati &middot; <em>She grew up in Sarajevo.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">bring up</div><div class="colloc-pairs">odgajati &middot; <em>He was brought up by his aunt.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">set up</div><div class="colloc-pairs">osnovati &middot; <em>She set up her own company.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">give up</div><div class="colloc-pairs">odustati &middot; <em>Don&#39;t give up &mdash; keep trying!</em></div></div>
      <div class="colloc-row"><div class="colloc-word">take up</div><div class="colloc-pairs">po&#269;eti se baviti &middot; <em>He took up cycling after retirement.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">look after</div><div class="colloc-pairs">brinuti se o &middot; <em>She looks after her elderly parents.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">take after</div><div class="colloc-pairs">nalikovati na &middot; <em>She takes after her mother.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">get on with</div><div class="colloc-pairs">slagati se s &middot; <em>I get on well with my colleagues.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">fall out with</div><div class="colloc-pairs">posva&#273;ati se &middot; <em>They fell out over money.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">break up with</div><div class="colloc-pairs">prekinuti vezu &middot; <em>She broke up with him last month.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">make up with</div><div class="colloc-pairs">pomiriti se &middot; <em>They made up after the argument.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">turn down</div><div class="colloc-pairs">odbiti ponudu &middot; <em>She turned down the job offer.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">put off</div><div class="colloc-pairs">odgoditi &middot; <em>Don&#39;t put off important decisions.</em></div></div>
      <div class="colloc-row"><div class="colloc-word">pay off</div><div class="colloc-pairs">otplatiti / isplatiti se &middot; <em>Hard work always pays off.</em></div></div>
    </div>

    <div class="radar">
      <div class="radar-hd">&#x1F4E1; matura radar &mdash; vokabular na ispitu</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>make vs do</b><br><em>make homework</em> &#x274C; &rarr; <em><b style="color:var(--lime)">do</b> homework</em> &#x2713; &middot; <em>do a living</em> &#x274C; &rarr; <em><b style="color:var(--lime)">make</b> a living</em> &#x2713;</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>apply for vs apply to</b><br><em>apply to a job</em> &#x274C; &rarr; <em>apply <b style="color:var(--lime)">for</b> a job</em> &#x2713; &middot; prijedlog je klju&#269;an!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>Phrasal verb partikel</b><br><em>grow</em> &#x274C; &rarr; <em>grow <b style="color:var(--lime)">up</b></em> &#x2713; &middot; <em>look</em> &#x274C; &rarr; <em>look <b style="color:var(--lime)">after</b></em> &#x2713;</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>raise vs rise</b><br><em>raise</em> = podizati (prijelazni: raise children, raise awareness)<br><em>rise</em> = rasti (neprijelazni: prices rise, the sun rises)</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>earn vs win vs gain</b><br><em>earn</em> = zaraditi radom &middot; <em>win</em> = pobijediti &middot; <em>gain</em> = ste&#263;i iskustvo/kg</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>MCQ:</b> kolokacija &rarr; koji glagol/prijedlog?<br><b>Gap fill:</b> phrasal verb partikel &middot; make/do razlika<br><b>Reading:</b> vokabular u kontekstu</div></div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// phrasal verb drill</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Klikni na ispravan phrasal verb.</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">She _______ her mother &mdash; same eyes, same smile. (nalikovati na)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pv1',false,'takes after')">looks after</div><div class="sv-opt" onclick="svAns(this,'pv1',true,'takes after')">takes after</div><div class="sv-opt" onclick="svAns(this,'pv1',false,'takes after')">takes up</div></div><div class="sv-fb" id="pv1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">He _______ smoking after the doctor&#39;s advice. (prestati)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pv2',true,'gave up')">gave up</div><div class="sv-opt" onclick="svAns(this,'pv2',false,'gave up')">took up</div><div class="sv-opt" onclick="svAns(this,'pv2',false,'gave up')">put off</div></div><div class="sv-fb" id="pv2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">They argued badly but _______ the next morning. (pomiriti se)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pv3',false,'made up')">broke up</div><div class="sv-opt" onclick="svAns(this,'pv3',false,'made up')">fell out</div><div class="sv-opt" onclick="svAns(this,'pv3',true,'made up')">made up</div></div><div class="sv-fb" id="pv3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">She _______ her own business at the age of 28. (osnovati)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pv4',true,'set up')">set up</div><div class="sv-opt" onclick="svAns(this,'pv4',false,'set up')">gave up</div><div class="sv-opt" onclick="svAns(this,'pv4',false,'set up')">turned down</div></div><div class="sv-fb" id="pv4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">She _______ the job offer because the salary was too low. (odbiti)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pv5',false,'turned down')">turned up</div><div class="sv-opt" onclick="svAns(this,'pv5',false,'turned down')">put off</div><div class="sv-opt" onclick="svAns(this,'pv5',true,'turned down')">turned down</div></div><div class="sv-fb" id="pv5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <hr class="divider">
    <div class="sec-label">// matching game &mdash; spoji engleski s prijevodom</div>
    <p class="prose" style="margin-bottom:12px">Klikni jednu englesku i jednu hrvatsku rije&#269; &mdash; poku&#353;aj nai svi parovi!</p>
    <div class="match-grid" id="matchGrid">
      <div class="match-en" onclick="pickEn(this,'earn')">earn</div>
      <div class="match-hr" onclick="pickHr(this,'household')">ku&#263;anstvo</div>
      <div class="match-en" onclick="pickEn(this,'retire')">retire</div>
      <div class="match-hr" onclick="pickHr(this,'earn')">zaraditi</div>
      <div class="match-en" onclick="pickEn(this,'promote')">promote</div>
      <div class="match-hr" onclick="pickHr(this,'volunteer')">volontirati</div>
      <div class="match-en" onclick="pickEn(this,'unemployed')">unemployed</div>
      <div class="match-hr" onclick="pickHr(this,'scholarship')">stipendija</div>
      <div class="match-en" onclick="pickEn(this,'mortgage')">mortgage</div>
      <div class="match-hr" onclick="pickHr(this,'promote')">unaprijediti</div>
      <div class="match-en" onclick="pickEn(this,'volunteer')">volunteer</div>
      <div class="match-hr" onclick="pickHr(this,'retire')">oti&#263;i u mirovinu</div>
      <div class="match-en" onclick="pickEn(this,'scholarship')">scholarship</div>
      <div class="match-hr" onclick="pickHr(this,'mortgage')">hipoteka</div>
      <div class="match-en" onclick="pickEn(this,'household')">household</div>
      <div class="match-hr" onclick="pickHr(this,'unemployed')">nezaposlen</div>
    </div>
    <div id="match-score" style="display:none;text-align:center;padding:14px;margin-top:8px"></div>

    
    <hr class="divider">
    <div class="sec-label">// verb patterns &mdash; enjoy + -ing ili want + to?</div>
    <p class="prose" style="margin-bottom:14px">Verb patterns su glagoli koji zahtijevaju to&#269;an oblik iza sebe &mdash; infinitiv ili gerund (-ing). Jedna od najtipičnijih NCVVO gap fill zamki.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">+ING</div>
        <div><div class="gram-title">Glagoli + gerund (-ing)</div><div class="gram-sub">aktivnost kao objekt &middot; rije&#269;&#269;ica &ldquo;stop and think&rdquo;</div></div>
      </div>
      <div class="gram-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--lime);font-weight:700;margin-bottom:6px">enjoy / love / like / hate</div>
            <div style="font-size:13px;color:var(--t2)">She enjoys <b>cooking</b>. &middot; He loves <b>reading</b>.<br>They hate <b>waiting</b>. &middot; I like <b>swimming</b>.</div>
          </div>
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--lime);font-weight:700;margin-bottom:6px">avoid / stop / finish / mind</div>
            <div style="font-size:13px;color:var(--t2)">Avoid <b>making</b> mistakes. &middot; Stop <b>talking</b>!<br>She finished <b>writing</b>. &middot; Do you mind <b>waiting</b>?</div>
          </div>
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--lime);font-weight:700;margin-bottom:6px">keep / consider / suggest / risk</div>
            <div style="font-size:13px;color:var(--t2)">Keep <b>trying</b>! &middot; Consider <b>applying</b>.<br>She suggested <b>going</b> out. &middot; Don't risk <b>losing</b> it.</div>
          </div>
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--lime);font-weight:700;margin-bottom:6px">practise / miss / spend time / give up</div>
            <div style="font-size:13px;color:var(--t2)">Practise <b>speaking</b>. &middot; I miss <b>seeing</b> you.<br>She spends time <b>reading</b>. &middot; He gave up <b>smoking</b>.</div>
          </div>
        </div>
        <div style="background:var(--red-dim);border:1px solid var(--red-border);border-radius:var(--r2);padding:8px 12px;font-size:12px;color:var(--red)">
          &#x274C; She enjoys to cook. &rarr; &#x2713; She enjoys <b>cooking</b>. &middot; &#x274C; Avoid to make mistakes. &rarr; &#x2713; Avoid <b>making</b> mistakes.
        </div>
      </div>
    </div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--sky-dim);color:var(--sky);border-color:var(--sky-border)">+TO</div>
        <div><div class="gram-title">Glagoli + infinitiv (to + glagol)</div><div class="gram-sub">namjera &middot; odluka &middot; plan</div></div>
      </div>
      <div class="gram-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--sky);font-weight:700;margin-bottom:6px">want / need / would like / wish</div>
            <div style="font-size:13px;color:var(--t2)">I want <b>to go</b>. &middot; She needs <b>to study</b>.<br>He'd like <b>to apply</b>. &middot; I wish <b>to speak</b>.</div>
          </div>
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--sky);font-weight:700;margin-bottom:6px">decide / plan / hope / expect</div>
            <div style="font-size:13px;color:var(--t2)">She decided <b>to leave</b>. &middot; We plan <b>to travel</b>.<br>He hopes <b>to win</b>. &middot; I expect <b>to pass</b>.</div>
          </div>
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--sky);font-weight:700;margin-bottom:6px">manage / fail / refuse / afford</div>
            <div style="font-size:13px;color:var(--t2)">She managed <b>to finish</b>. &middot; He failed <b>to arrive</b>.<br>She refused <b>to answer</b>. &middot; Can't afford <b>to buy</b>.</div>
          </div>
          <div style="background:var(--bg-elevated);border-radius:var(--r2);padding:10px 12px">
            <div style="font-family:var(--mono);font-size:11px;color:var(--sky);font-weight:700;margin-bottom:6px">promise / agree / offer / seem</div>
            <div style="font-size:13px;color:var(--t2)">She promised <b>to call</b>. &middot; They agreed <b>to help</b>.<br>He offered <b>to pay</b>. &middot; She seems <b>to know</b>.</div>
          </div>
        </div>
        <div style="background:var(--red-dim);border:1px solid var(--red-border);border-radius:var(--r2);padding:8px 12px;font-size:12px;color:var(--red)">
          &#x274C; She wants going. &rarr; &#x2713; She wants <b>to go</b>. &middot; &#x274C; He decided leaving. &rarr; &#x2713; He decided <b>to leave</b>.
        </div>
      </div>
    </div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">OBA</div>
        <div><div class="gram-title">Glagoli koji idu s oboma &mdash; razlika u zna&#269;enju!</div><div class="gram-sub">remember &middot; forget &middot; stop &middot; try</div></div>
      </div>
      <div class="gram-body">
        <div class="tbl-wrap">
          <table>
            <thead><tr><th>Glagol</th><th>+ -ing (pro&#353;lost / stvarna radnja)</th><th>+ to inf. (namjera / budu&#263;nost)</th></tr></thead>
            <tbody>
              <tr><td><b>remember</b></td><td>I remember <b>locking</b> the door. (sje&#263;am se da sam zaklju&#269;ao)</td><td>Remember <b>to lock</b> the door. (ne zaboravi zaklju&#269;ati)</td></tr>
              <tr><td><b>forget</b></td><td>I'll never forget <b>meeting</b> her. (ne mogu zaboraviti susret)</td><td>Don't forget <b>to buy</b> milk. (ne zaboravi kupiti)</td></tr>
              <tr><td><b>stop</b></td><td>He stopped <b>smoking</b>. (prestao pu&#353;iti)</td><td>He stopped <b>to smoke</b>. (stao da zapali)</td></tr>
              <tr><td><b>try</b></td><td>Try <b>adding</b> more salt. (poku&#353;aj dodati)</td><td>I tried <b>to open</b> the window. (poku&#353;ao otvoriti &mdash; ali nisam uspio)</td></tr>
            </tbody>
          </table>
        </div>
        <div style="background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r2);padding:8px 12px;font-size:12.5px;color:var(--amber);margin-top:10px">
          &#x26A0; Na maturi ni&#382;e razine: stop + -ing i remember + to su najtestiranije kombinacije.
        </div>
      </div>
    </div>

<div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">&larr; Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Practice &rarr;</span>
    </div>
  </div>

  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// exam mode</strong> &middot; Odaberi to&#269;an odgovor. Fokus na kolokacije i phrasal verbs. Target: <strong>8/10</strong> ili bolje.</div>
    <div class="kbd-hint">&#x2328;&#xFE0F; Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 &middot; kolokacija &middot; make a living</div><div class="q-text">She works as a journalist and _______ a good living from her writing.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> does</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> makes</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> earns</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> gets</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 &middot; prijedlog &middot; apply for</div><div class="q-text">She decided to _______ the position of marketing director.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> apply to</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">B</span> apply at</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">C</span> apply for</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> apply in</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 &middot; kolokacija &middot; get promoted</div><div class="q-text">After five years of hard work, he finally _______ last month.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> was advanced</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> made a promotion</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> got promoted</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> did a promotion</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 &middot; phrasal verb &middot; break up</div><div class="q-text">After three years together, they decided to _______.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> break off</div><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">B</span> break up</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> break out</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> break down</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 &middot; phrasal verb &middot; get on with</div><div class="q-text">She _______ her new colleagues and enjoys going to work.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> gets along</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">B</span> gets by with</div><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">C</span> gets on well with</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> gets through with</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 &middot; make vs do &middot; kolokacija</div><div class="q-text">Many students _______ to gain work experience before graduating.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> make voluntary work</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">B</span> have voluntary work</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">C</span> do voluntary work</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> get voluntary work</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 &middot; kolokacija &middot; raise awareness</div><div class="q-text">The campaign aims to _______ of climate change among young people.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> rise awareness</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">B</span> raise awareness</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> grow awareness</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> lift awareness</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 &middot; financijska kolokacija &middot; take out</div><div class="q-text">They had to _______ to pay for the renovation of their house.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> make a loan</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> do a loan</div><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">C</span> take out a loan</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> get a loan out</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 &middot; idiom &middot; make ends meet</div><div class="q-text">With two children and a low income, they struggle to _______.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> make both ends</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">B</span> make ends meet</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">C</span> do ends meet</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> get ends meet</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 &middot; kolokacija &middot; face a challenge</div><div class="q-text">Young people today _______ many challenges when entering the job market.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> meet</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> make</div><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">C</span> face</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> do</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="q-block" id="q11"><div class="q-head"><div class="q-meta">11 / 13 &middot; zna&#269;enje iz konteksta &middot; idiom</div><div class="q-text">&#x201C;With two children and a part-time job, she struggles to <b>make ends meet</b> every month.&#x201D;<br>&#x2022; What does <em>make ends meet</em> mean in this context?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">A</span> To save a large amount of money each month.</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">B</span> To spend money on luxuries and entertainment.</div><div class="q-opt" onclick="ans(this,'q11',true)" tabindex="0"><span class="q-letter">C</span> To have just enough money to pay for basic needs.</div><div class="q-opt" onclick="ans(this,'q11',false)" tabindex="0"><span class="q-letter">D</span> To earn a very high salary at work.</div></div><div class="q-expl" id="q11e" aria-live="polite"></div></div>
<div class="q-block" id="q12"><div class="q-head"><div class="q-meta">12 / 13 &middot; zna&#269;enje iz konteksta &middot; phrasal verb</div><div class="q-text">&#x201C;After ten years in the same company, she decided to <b>give up</b> her job and start her own business.&#x201D;<br>&#x2022; What does <em>give up</em> mean in this sentence?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">A</span> To apply for a better position in the same company.</div><div class="q-opt" onclick="ans(this,'q12',true)" tabindex="0"><span class="q-letter">B</span> To stop doing something and leave it behind.</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">C</span> To take a short break from work.</div><div class="q-opt" onclick="ans(this,'q12',false)" tabindex="0"><span class="q-letter">D</span> To receive a promotion at work.</div></div><div class="q-expl" id="q12e" aria-live="polite"></div></div>
<div class="q-block" id="q13"><div class="q-head"><div class="q-meta">13 / 13 &middot; zna&#269;enje iz konteksta &middot; kolokacija</div><div class="q-text">&#x201C;The organisation <b>raises awareness</b> of homelessness by running campaigns in schools and on social media.&#x201D;<br>&#x2022; Which option best explains what <em>raise awareness</em> means here?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q13',false)" tabindex="0"><span class="q-letter">A</span> To collect money for people without homes.</div><div class="q-opt" onclick="ans(this,'q13',false)" tabindex="0"><span class="q-letter">B</span> To build new homes for homeless people.</div><div class="q-opt" onclick="ans(this,'q13',false)" tabindex="0"><span class="q-letter">C</span> To reduce the number of homeless people in cities.</div><div class="q-opt" onclick="ans(this,'q13',true)" tabindex="0"><span class="q-letter">D</span> To help more people understand and think about the problem.</div></div><div class="q-expl" id="q13e" aria-live="polite"></div></div>
<div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/13</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">&#x21BA; Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">&#x1F3C6;</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje zavr&#353;eno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">08 &middot; Vokabular &mdash; &zivot;<br>Nastavi na Poglavlje 09 &rarr;</div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// error correction drill</div>
    <p class="prose" style="margin-bottom:14px">Svaka re&#269;enica ima pogre&#353;nu kolokaciju ili phrasal verb.</p>
    <div class="err-drill">
      <div class="err-item"><div class="err-sent">"She makes voluntary work every weekend at the food bank."</div><button class="err-btn" onclick="showErrFix('ef1',this)">&#x25B6; Otkrij gre&#353;ku</button><div class="err-fix" id="ef1">&#x2705; <span class="correct">She does voluntary work every weekend at the food bank.</span><span class="explain">Kolokacija: <b>do</b> voluntary work (ne make). "do" = aktivnosti i zadaci.</span></div></div>
      <div class="err-item"><div class="err-sent">"He applied to the job online and got an interview."</div><button class="err-btn" onclick="showErrFix('ef2',this)">&#x25B6; Otkrij gre&#353;ku</button><div class="err-fix" id="ef2">&#x2705; <span class="correct">He applied for the job online and got an interview.</span><span class="explain">Prijedlog: <b>apply for</b> a job (ne apply to). "for" ide uz apply za posao, stipendiju, vizu.</span></div></div>
      <div class="err-item"><div class="err-sent">"Prices have risen a lot &mdash; the government needs to rise awareness."</div><button class="err-btn" onclick="showErrFix('ef3',this)">&#x25B6; Otkrij gre&#353;ku</button><div class="err-fix" id="ef3">&#x2705; <span class="correct">&hellip;the government needs to raise awareness.</span><span class="explain"><b>raise</b> = podizati (prijelazni, ima objekt) &middot; <b>rise</b> = rasti (neprijelazni). raise awareness &#x2713; &middot; prices rise &#x2713;.</span></div></div>
      <div class="err-item"><div class="err-sent">"They grew in a small town and moved to the city at 18."</div><button class="err-btn" onclick="showErrFix('ef4',this)">&#x25B6; Otkrij gre&#353;ku</button><div class="err-fix" id="ef4">&#x2705; <span class="correct">They grew up in a small town and moved to the city at 18.</span><span class="explain">Phrasal verb: <b>grow up</b> = odrastati. Bez "up" rije&#269; nema istog zna&#269;enja.</span></div></div>
      <div class="err-item"><div class="err-sent">"After years of hard work, she finally did a promotion."</div><button class="err-btn" onclick="showErrFix('ef5',this)">&#x25B6; Otkrij gre&#353;ku</button><div class="err-fix" id="ef5">&#x2705; <span class="correct">After years of hard work, she finally got promoted.</span><span class="explain">Kolokacija: <b>get promoted</b> (ne do a promotion). "got a promotion" je tako&#273;er prihvatljivo.</span></div></div>
    </div>

    <hr class="divider">
    <div class="sec-label">// &#x26A1; kolokacijski speed drill &mdash; make, do, get ili have?</div>
    <p class="prose" style="margin-bottom:10px">10 rje&#269;enica, 3 opcije. Odaberi ispravan glagol &#353;to br&#382;e mo&#382;e&#353;. Tipke <span style="font-family:var(--mono);color:var(--t2)">1 &middot; 2 &middot; 3</span> = brzi unos.</p>
    <div class="speed-drill-wrap">
      <div class="sd-progress" id="sdprog"></div>
      <div id="sdq-wrap"></div>
      <div class="sd-score" id="sd-score-box" aria-live="polite">
        <div class="sd-score-num" id="sd-score-num">0/10</div>
        <div class="sd-score-lbl" id="sd-score-lbl"></div>
        <button class="sd-retry" onclick="initSpeedDrill()">&#x21BA; Ponovi drill</button>
      </div>
    </div>

    <div 
    <hr class="divider">
    <div class="sec-label">// prijedlo&#382;ne fraze &mdash; top 30 za maturu</div>
    <p class="prose" style="margin-bottom:14px">Prijedlo&#382;ne fraze su jedna od najtipičnijih NCVVO gap fill zamki &mdash; krivi prijedlog = krivi odgovor. Nema pravila, mora&#353; ih znati napamet.</p>

    <div class="tbl-wrap" style="margin-bottom:16px">
      <table>
        <thead><tr><th>Pridjev / glagol</th><th>Prijedlog</th><th>Primjer</th></tr></thead>
        <tbody>
          <tr><td>interested</td><td><b style="color:var(--lime)">IN</b></td><td><em>She is interested <b>in</b> music.</em></td></tr>
          <tr><td>good / bad / excellent</td><td><b style="color:var(--lime)">AT</b></td><td><em>He is good <b>at</b> maths.</em></td></tr>
          <tr><td>afraid / scared / terrified</td><td><b style="color:var(--lime)">OF</b></td><td><em>She is afraid <b>of</b> heights.</em></td></tr>
          <tr><td>proud / ashamed / aware</td><td><b style="color:var(--lime)">OF</b></td><td><em>They are proud <b>of</b> their son.</em></td></tr>
          <tr><td>responsible / famous / known</td><td><b style="color:var(--lime)">FOR</b></td><td><em>She is responsible <b>for</b> the project.</em></td></tr>
          <tr><td>married / engaged</td><td><b style="color:var(--sky)">TO</b></td><td><em>He is married <b>to</b> a doctor.</em></td></tr>
          <tr><td>similar / related / connected</td><td><b style="color:var(--sky)">TO</b></td><td><em>This is similar <b>to</b> the other one.</em></td></tr>
          <tr><td>different</td><td><b style="color:var(--sky)">FROM</b></td><td><em>This is different <b>from</b> what I expected.</em></td></tr>
          <tr><td>satisfied / happy / pleased</td><td><b style="color:var(--sky)">WITH</b></td><td><em>I'm satisfied <b>with</b> the results.</em></td></tr>
          <tr><td>dependent / keen / based</td><td><b style="color:var(--sky)">ON</b></td><td><em>She is keen <b>on</b> sports.</em></td></tr>
          <tr><td>apply</td><td><b style="color:var(--violet)">FOR</b></td><td><em>She applied <b>for</b> the job.</em></td></tr>
          <tr><td>wait</td><td><b style="color:var(--violet)">FOR</b></td><td><em>We waited <b>for</b> an hour.</em></td></tr>
          <tr><td>pay</td><td><b style="color:var(--violet)">FOR</b></td><td><em>He paid <b>for</b> the tickets.</em></td></tr>
          <tr><td>spend (money/time)</td><td><b style="color:var(--violet)">ON</b></td><td><em>She spends a lot <b>on</b> clothes.</em></td></tr>
          <tr><td>depend / rely</td><td><b style="color:var(--violet)">ON</b></td><td><em>You can rely <b>on</b> me.</em></td></tr>
          <tr><td>belong</td><td><b style="color:var(--violet)">TO</b></td><td><em>This book belongs <b>to</b> me.</em></td></tr>
          <tr><td>listen</td><td><b style="color:var(--violet)">TO</b></td><td><em>She loves listening <b>to</b> music.</em></td></tr>
          <tr><td>agree / disagree</td><td><b style="color:var(--violet)">WITH</b></td><td><em>I agree <b>with</b> you.</em></td></tr>
          <tr><td>deal</td><td><b style="color:var(--violet)">WITH</b></td><td><em>It's hard to deal <b>with</b> stress.</em></td></tr>
          <tr><td>think</td><td><b style="color:var(--violet)">OF / ABOUT</b></td><td><em>I'm thinking <b>of</b> changing jobs.</em></td></tr>
          <tr><td>dream</td><td><b style="color:var(--amber)">OF / ABOUT</b></td><td><em>She dreams <b>of</b> travelling the world.</em></td></tr>
          <tr><td>succeed</td><td><b style="color:var(--amber)">IN</b></td><td><em>He succeeded <b>in</b> passing the exam.</em></td></tr>
          <tr><td>insist</td><td><b style="color:var(--amber)">ON</b></td><td><em>She insisted <b>on</b> paying.</em></td></tr>
          <tr><td>complain</td><td><b style="color:var(--amber)">ABOUT</b></td><td><em>He always complains <b>about</b> the weather.</em></td></tr>
          <tr><td>look forward</td><td><b style="color:var(--amber)">TO</b></td><td><em>I'm looking forward <b>to</b> the holiday.</em></td></tr>
          <tr><td>concentrate / focus</td><td><b style="color:var(--amber)">ON</b></td><td><em>She focused <b>on</b> her studies.</em></td></tr>
          <tr><td>believe</td><td><b style="color:var(--amber)">IN</b></td><td><em>He believes <b>in</b> hard work.</em></td></tr>
          <tr><td>invest</td><td><b style="color:var(--amber)">IN</b></td><td><em>They invested <b>in</b> new technology.</em></td></tr>
          <tr><td>suffer</td><td><b style="color:var(--amber)">FROM</b></td><td><em>She suffers <b>from</b> allergies.</em></td></tr>
          <tr><td>take care / advantage</td><td><b style="color:var(--amber)">OF</b></td><td><em>Take care <b>of</b> yourself.</em></td></tr>
        </tbody>
      </table>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-bottom:18px">
      <div class="sec-label" style="margin:0 0 10px">// prijedlo&#382;ni speed drill &mdash; koji prijedlog?</div>
      <p class="prose" style="margin-bottom:12px;font-size:13px">5 re&#269;enica. Klikni na to&#269;an prijedlog.</p>
      <div class="sv-drill">
        <div class="sv-q"><div class="sv-sent">She has always been interested _______ art and design.</div><div class="sv-opts"><div class="sv-opt" onclick="ppAns(this,'pp1',false,'in')">AT</div><div class="sv-opt" onclick="ppAns(this,'pp1',true,'in')">IN</div><div class="sv-opt" onclick="ppAns(this,'pp1',false,'in')">ON</div></div><div class="sv-fb" id="pp1fb"></div></div>
        <div class="sv-q"><div class="sv-sent">He is responsible _______ managing the entire project.</div><div class="sv-opts"><div class="sv-opt" onclick="ppAns(this,'pp2',false,'for')">TO</div><div class="sv-opt" onclick="ppAns(this,'pp2',false,'for')">OF</div><div class="sv-opt" onclick="ppAns(this,'pp2',true,'for')">FOR</div></div><div class="sv-fb" id="pp2fb"></div></div>
        <div class="sv-q"><div class="sv-sent">I'm really looking forward _______ the summer holiday.</div><div class="sv-opts"><div class="sv-opt" onclick="ppAns(this,'pp3',true,'to')">TO</div><div class="sv-opt" onclick="ppAns(this,'pp3',false,'to')">FOR</div><div class="sv-opt" onclick="ppAns(this,'pp3',false,'to')">AT</div></div><div class="sv-fb" id="pp3fb"></div></div>
        <div class="sv-q"><div class="sv-sent">This situation is very different _______ what I expected.</div><div class="sv-opts"><div class="sv-opt" onclick="ppAns(this,'pp4',false,'from')">TO</div><div class="sv-opt" onclick="ppAns(this,'pp4',true,'from')">FROM</div><div class="sv-opt" onclick="ppAns(this,'pp4',false,'from')">THAN</div></div><div class="sv-fb" id="pp4fb"></div></div>
        <div class="sv-q"><div class="sv-sent">She succeeded _______ getting the promotion she wanted.</div><div class="sv-opts"><div class="sv-opt" onclick="ppAns(this,'pp5',true,'in')">IN</div><div class="sv-opt" onclick="ppAns(this,'pp5',false,'in')">AT</div><div class="sv-opt" onclick="ppAns(this,'pp5',false,'in')">ON</div></div><div class="sv-fb" id="pp5fb"></div></div>
      </div>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-bottom:18px">
      <div class="sec-label" style="margin:0 0 10px">// verb patterns drill &mdash; -ing ili to + infinitiv?</div>
      <p class="prose" style="margin-bottom:12px;font-size:13px">5 re&#269;enica. Odaberi to&#269;an oblik.</p>
      <div class="sv-drill">
        <div class="sv-q"><div class="sv-sent">She enjoys _______ in the mountains. (hike)</div><div class="sv-opts"><div class="sv-opt" onclick="vpAns(this,'vp1',true,'hiking')">hiking</div><div class="sv-opt" onclick="vpAns(this,'vp1',false,'hiking')">to hike</div><div class="sv-opt" onclick="vpAns(this,'vp1',false,'hiking')">hike</div></div><div class="sv-fb" id="vp1fb"></div></div>
        <div class="sv-q"><div class="sv-sent">He decided _______ a new job. (look for)</div><div class="sv-opts"><div class="sv-opt" onclick="vpAns(this,'vp2',false,'to look for')">looking for</div><div class="sv-opt" onclick="vpAns(this,'vp2',true,'to look for')">to look for</div><div class="sv-opt" onclick="vpAns(this,'vp2',false,'to look for')">look for</div></div><div class="sv-fb" id="vp2fb"></div></div>
        <div class="sv-q"><div class="sv-sent">Please avoid _______ too much noise in the library. (make)</div><div class="sv-opts"><div class="sv-opt" onclick="vpAns(this,'vp3',true,'making')">making</div><div class="sv-opt" onclick="vpAns(this,'vp3',false,'making')">to make</div><div class="sv-opt" onclick="vpAns(this,'vp3',false,'making')">make</div></div><div class="sv-fb" id="vp3fb"></div></div>
        <div class="sv-q"><div class="sv-sent">She managed _______ the project on time. (finish)</div><div class="sv-opts"><div class="sv-opt" onclick="vpAns(this,'vp4',false,'to finish')">finishing</div><div class="sv-opt" onclick="vpAns(this,'vp4',true,'to finish')">to finish</div><div class="sv-opt" onclick="vpAns(this,'vp4',false,'to finish')">finish</div></div><div class="sv-fb" id="vp4fb"></div></div>
        <div class="sv-q"><div class="sv-sent">He stopped _______ when he heard the news. (talk)</div><div class="sv-opts"><div class="sv-opt" onclick="vpAns(this,'vp5',true,'talking')">talking</div><div class="sv-opt" onclick="vpAns(this,'vp5',false,'talking')">to talk</div><div class="sv-opt" onclick="vpAns(this,'vp5',false,'talking')">talk</div></div><div class="sv-fb" id="vp5fb"></div></div>
      </div>
    </div>

class="cta">
      <div><div class="cta-eye">discere archive</div><div class="cta-title">Vje&#382;baj sa stvarnim zadacima mature</div><div class="cta-sub">Svi NCVVO zadaci 2010.&ndash;2026. uz detaljna obja&#353;njenja.</div></div>
      <a href="https://maturiraj.hr" class="cta-btn">Open Discere &rarr;</a>
    </div>

    <div class="matura">
      <div class="matura-hd">&#x2B50; for the exam &mdash; key points</div>
      <ul class="matura-list">
        <li class="m-item"><div class="m-dot"></div><span><b>apply FOR</b> a job &middot; <b>get promoted</b> &middot; <b>make</b> a living &middot; <b>do</b> voluntary work &middot; <b>raise</b> awareness</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>make</b> = kreirati ne&#353;to novo &middot; <b>do</b> = obavljati aktivnost. make homework &#x274C;</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Phrasal verbs</b>: grow UP &middot; break UP with &middot; get ON with &middot; look AFTER &middot; take AFTER &middot; set UP &middot; give UP</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>raise</b> (prijelazni) vs <b>rise</b> (neprijelazni): raise awareness &#x2713; &middot; prices rise &#x2713;</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Financije</b>: take out a loan &middot; pay off a debt &middot; make ends meet &middot; save up for &middot; go bankrupt</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Prijedlozi</b>: spend ON &middot; invest IN &middot; responsible FOR &middot; proud OF &middot; apply FOR</span></li>
              <li class="m-item"><div class="m-dot"></div><span><b>Verb patterns:</b> enjoy/avoid/keep/stop + <b>-ing</b> &middot; want/decide/manage/refuse/promise + <b>to inf.</b></span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Prijedlo&#382;ne fraze:</b> interested <b>IN</b> &middot; good <b>AT</b> &middot; afraid <b>OF</b> &middot; responsible <b>FOR</b> &middot; looking forward <b>TO</b> &middot; different <b>FROM</b></span></li>
</ul>
    </div>

    <div class="sec-label" style="margin-top:32px">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upi&#353;i ispravnu kolokaciju ili phrasal verb.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 &middot; kolokacija &middot; pursue a career</div><div class="fitb-sent">She has always wanted to _______ a career in medicine.</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="pursue" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','pursue','career')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','pursue','career')">Check</button></div><div class="fitb-fb" id="f1fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 &middot; kolokacija &middot; retire from</div><div class="fitb-sent">My grandfather _______ from teaching after 35 years.</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="retired" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','retired','retire')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','retired','retire')">Check</button></div><div class="fitb-fb" id="f2fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 &middot; zajednica &middot; become homeless</div><div class="fitb-sent">After losing his job and his flat, he became _______.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="homeless" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','homeless','homeless')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','homeless','homeless')">Check</button></div><div class="fitb-fb" id="f3fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 &middot; zajednica &middot; volunteer</div><div class="fitb-sent">Many people choose to _______ in their community to help others.</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="volunteer" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','volunteer','volunteer')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','volunteer','volunteer')">Check</button></div><div class="fitb-fb" id="f4fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 &middot; financije &middot; pay off</div><div class="fitb-sent">It took them fifteen years to _______ their mortgage completely.</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="pay off" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','pay off','loan')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','pay off','loan')">Check</button></div><div class="fitb-fb" id="f5fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 &middot; karijera &middot; be promoted</div><div class="fitb-sent">After her excellent results, she was _______ to senior manager.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="promoted" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','promoted','promote')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','promoted','promote')">Check</button></div><div class="fitb-fb" id="f6fb" aria-live="polite"></div></div>

    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako razlikujem make i do?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>make</b> = rezultira ne&#269;im novim: make money, make a decision, make a mistake, make a living, make progress<br><b>do</b> = obavljati aktivnost: do homework, do business, do research, do voluntary work, do a course</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koji prijedlog ide s "apply", "spend", "invest"?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans">apply <b>FOR</b> a job &middot; spend money <b>ON</b> &middot; invest <b>IN</b><br>responsible <b>FOR</b> &middot; proud <b>OF</b> &middot; depend <b>ON</b> &middot; belong <b>TO</b></div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako pamtim phrasal verbs?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Partikel mijenja sve &mdash; nauci ga s glagolom kao jednu cjelinu:</b><br>look AFTER = brinuti se o &middot; look UP = potra&#382;iti &middot; look FOR = tra&#382;iti<br>break UP = prekinuti &middot; break DOWN = pokvariti se &middot; break IN = provaliti</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>raise vs rise &mdash; koja je razlika?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>raise</b> = prijelazni (treba objekt): raise children, raise awareness, raise money<br><b>rise</b> = neprijelazni (nema objekt): prices rise, the sun rises<br>Test: ima li objekt? &rarr; raise &middot; nema objekt? &rarr; rise</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch09 &mdash; kako mi vokabular poma&#382;e u &#269;itanju?</span><span class="reveal-arrow">&#x25BC;</span></div><div class="reveal-ans"><b>Reading tekstovi na maturi koriste isti vokabular!</b><br>Tekstovi o &#382;ivotu, karijeri, obitelji i dru&#353;tvu su najce&#353;&#263;i na ispitu.<br>Znanje kolokacija poma&#382;e: &#269;ak i ako ne zna&#353; sve rije&#269;i, kolokacija daje kontekst.<br>Phrasal verbs se &#269;esto pojavljuju u pitanjima &mdash; prepoznaj ih po partikelu.</div></div>

    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item"><div class="qes-tag gap">// gap fill</div><div class="qes-steps"><b>1.</b> Kolokacija &rarr; koji glagol? (make/do/get/have) &middot; <b>2.</b> Phrasal verb &rarr; koji partikel? &middot; <b>3.</b> Prijedlog &rarr; for/on/in/of? &middot; <b>4.</b> Kontekst &rarr; koji sinonim?</div></div>
      <div class="qes-item"><div class="qes-tag mcq">// multiple choice</div><div class="qes-steps"><b>1.</b> Eliminiraj pogre&#353;an glagol (rise umjesto raise &#x274C;) &middot; <b>2.</b> Provjeri prijedlog &middot; <b>3.</b> Phrasal verb partikel &middot; <b>4.</b> Kontekst re&#269;enice</div></div>
      <div class="qes-item"><div class="qes-tag err">// error correction</div><div class="qes-steps">Provjeri: <b>make/do zamjena</b> &middot; <b>pogre&#353;an prijedlog</b> &middot; <b>rise/raise zamjena</b> &middot; <b>phrasal verb bez partikela</b></div></div>
    </div>

    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo &amp; sljede&#263;i koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter09.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">09 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">&#268;itanje s razumijevanjem</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Strategije + vokabular iz ch08 u kontekstu</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter10.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">10 &rarr;</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pisanje &mdash; kratki tekst</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Vokabular iz ch08 u pisanim zadacima</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter07.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">&larr; 07</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pasiv</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">get promoted = pasivna kolokacija</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">12</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2)">Vi&#353;estruki izbor &mdash; taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Kolokacijska pitanja u MCQ-u</div>
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
      <a href="chapter07.html" class="nav-btn">&larr; Chapter 07</a>
      <a href="chapter09.html" class="nav-btn primary">Next chapter &rarr;</a>
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

// VOCAB CARDS — click to reveal example
function revealCard(card){
  card.classList.toggle('vc-revealed');
}

// MATCHING GAME
var matchState={selEn:null,selHr:null,matched:0,total:0,pairs:{}};
function initMatch(pairs){
  matchState={selEn:null,selHr:null,matched:0,total:Object.keys(pairs).length,pairs:pairs};
}
function pickEn(el,key){
  if(el.classList.contains('correct'))return;
  document.querySelectorAll('.match-en').forEach(function(e){if(!e.classList.contains('correct'))e.classList.remove('selected','wrong');});
  el.classList.add('selected');
  matchState.selEn={el:el,key:key};
  checkMatch();
}
function pickHr(el,key){
  if(el.classList.contains('correct'))return;
  document.querySelectorAll('.match-hr').forEach(function(e){if(!e.classList.contains('correct'))e.classList.remove('selected','wrong');});
  el.classList.add('selected');
  matchState.selHr={el:el,key:key};
  checkMatch();
}
function checkMatch(){
  if(!matchState.selEn||!matchState.selHr)return;
  var en=matchState.selEn,hr=matchState.selHr;
  if(en.key===hr.key){
    en.el.classList.remove('selected');hr.el.classList.remove('selected');
    en.el.classList.add('correct');hr.el.classList.add('correct');
    matchState.matched++;
    if(matchState.matched===matchState.total){
      var sc=document.getElementById('match-score');
      if(sc){sc.style.display='block';sc.innerHTML='<span style="color:var(--green);font-family:var(--mono);font-size:13px;font-weight:700">✓ Sve parove si pronašao! 🎉</span>';}
    }
  } else {
    en.el.classList.add('wrong');hr.el.classList.add('wrong');
    setTimeout(function(){
      en.el.classList.remove('selected','wrong');
      hr.el.classList.remove('selected','wrong');
    },800);
  }
  matchState.selEn=null;matchState.selHr=null;
}

// MCQ QUIZ
var answered={},correct=0,total=13;
var E={
  q1:{c:"✓ Točno. 'make a living' = zaraditi za život, preživjeti financijski.",w:"✗ Netočno. 'make a living' = zaraditi za život. Točan odgovor: make a living."},
  q2:{c:"✓ Točno. 'apply for a job' = prijaviti se za posao. Standardna kolokacija.",w:"✗ Netočno. Koristimo 'apply FOR a job' — prijaviti se na poziciju. Točan odgovor: apply for."},
  q3:{c:"✓ Točno. 'get promoted' = biti unaprijeđen na poslu. Pasivna kolokacija.",w:"✗ Netočno. 'get promoted' = dobiti unapređenje. Točan odgovor: get promoted."},
  q4:{c:"✓ Točno. 'break up' (with someone) = prekinuti vezu. Phrasal verb.",w:"✗ Netočno. 'break up with' = prekinuti s nekim. Točan odgovor: break up."},
  q5:{c:"✓ Točno. 'get on well with' = slagati se s nekim, imati dobar odnos.",w:"✗ Netočno. 'get on well with' = slagati se s nekim. Točan odgovor: get on well with."},
  q6:{c:"✓ Točno. 'do voluntary work' = volontirati. 'do' je ispravni glagol uz 'work'.",w:"✗ Netočno. Kolokacija: 'do voluntary work' (ne make/have). Točan odgovor: do voluntary work."},
  q7:{c:"✓ Točno. 'raise awareness' = podizati svjesnost (o nekom problemu). Standardna kolokacija.",w:"✗ Netočno. 'raise awareness' = podizati svjesnost. Točan odgovor: raise awareness."},
  q8:{c:"✓ Točno. 'take out a loan' = uzeti kredit/zajam. Financijska kolokacija.",w:"✗ Netočno. 'take out a loan' = uzeti zajam/kredit. Točan odgovor: take out a loan."},
  q9:{c:"✓ Točno. 'make ends meet' = jedva sastavljati kraj s krajem, preživjeti financijski.",w:"✗ Netočno. 'make ends meet' = jedva preživjeti financijski. Točan odgovor: make ends meet."},
  q10:{c:"✓ Točno. 'face a challenge' = suočiti se s izazovom. Standardna kolokacija.",w:"✗ Netočno. 'face a challenge' = suočiti se s izazovom. Točan odgovor: face."},
  q11:{c:"✓ Točno. 'Struggles to make ends meet' = jedva preživljava financijski. Kontekst: 'part-time job' + 'two children' = ograničen prihod. Make ends meet = imati dovoljno za osnovne potrebe, ni malo više.",w:"✗ Netočno. 'Make ends meet' ne znači štednju, luksuz ni visoku plaću. Kontekst 'struggles' (bori se) + 'part-time job' ukazuje na financijsku stegu. Odgovor C: jedva preživljava."},
  q12:{c:"✓ Točno. 'Give up her job' = prestati raditi taj posao, ostaviti ga iza sebe. Kontekst: 'decided to give up... and start her own business' — odustaje od jedne stvari da bi krenula na drugu.",w:"✗ Netočno. 'Give up' = odustati, prestati. Ne znači napredovanje, pauzu ni prijavu za novu poziciju. Kontekst pokazuje promjenu karijere (give up → start own business). Odgovor B."},
  q13:{c:"✓ Točno. 'Raise awareness' = povećati svjesnost, pomoći ljudima da razumiju i razmišljaju o problemu. Kampanje u školama i na društvenim mrežama = informiranje javnosti.",w:"✗ Netočno. 'Raise awareness' ne znači prikupljanje novca, gradnju domova ni smanjenje broja beskućnika — to su moguće posljedice, ali ne značenje fraze. Odgovor D: pomoći više ljudi da razumiju problem."}
};
var FITB={
  'career':    "Kolokacija: 'pursue a career' = slijediti/izgraditi karijeru. pursue = aktivno težiti cilju.",
  'retire':    "Kolokacija: 'retire from work' = otići u mirovinu. retire = prestati raditi zbog dobi.",
  'homeless':  "Kolokacija: 'become homeless' = ostati bez doma. homeless = bez doma (prilog).",
  'volunteer': "Kolokacija: 'volunteer in the community' = volontirati u zajednici. volunteer = glagol i imenica.",
  'loan':      "Kolokacija: 'pay off a loan' = otplatiti zajam. pay off = u cijelosti otplatiti.",
  'promote':   "Pasivna kolokacija: 'be promoted' = biti unaprijeđen. get/be promoted = dobiti unapređenje."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch08',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':correct>=9?'Excellent!':correct>=7?'Good. Ponovi kolokacije.':correct>=5?'Vrati se na Learn — kolokacije i phrasal verbs.':'Vrati se na Learn i idi polako.';
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

// PHRASAL VERB DRILL
var pvAnswered={},pvCorrect=0,pvTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(pvAnswered[id])return;
  pvAnswered[id]=true;if(isCorrect)pvCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){el.classList.add('sv-correct');if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong>';}}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong>';}}
  if(Object.keys(pvAnswered).length===pvTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=pvCorrect+'/'+pvTotal;
      document.getElementById('sv-score-lbl').textContent=pvCorrect===5?'Savršen! 🎉':pvCorrect>=4?'Odlično!':pvCorrect>=3?'Dobro — ponovi phrasal verbs.':'Vrati se na listu phrasal verbs.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){btn.textContent='✓ Kopirano';btn.classList.add('copied');setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);});
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch08_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch08_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}

// MATCHING GAME INIT
function initMatchGame(){
  var pairs={
    'earn':'zaraditi','retire':'otići u mirovinu','promote':'unaprijediti',
    'unemployed':'nezaposlen','mortgage':'hipoteka','volunteer':'volontirati',
    'scholarship':'stipendija','household':'kućanstvo'
  };
  initMatch(pairs);
}


var SD=[
  {s:"She _______ a good living as a freelance photographer.",           opts:["makes","does","gets"],    ans:0, exp:"make a living = zaradivati za zivot. make = kreirati/postici nesto novo."},
  {s:"He _______ voluntary work at the local food bank every week.",     opts:["makes","does","has"],     ans:1, exp:"do voluntary work = raditi volonterski. do = obavljati aktivnost."},
  {s:"They _______ married in a small chapel by the sea.",               opts:["made","did","got"],       ans:2, exp:"get married = vjencati se. get + adjective/past participle = promjena stanja."},
  {s:"He _______ his homework carefully before the exam the next day.",    opts:["did","made","had"],       ans:0, exp:"do homework = raditi domacnu zadacu. do = obavljati zadatak/aktivnost."},
  {s:"He _______ research on climate change for his dissertation.",       opts:["made","did","had"],       ans:1, exp:"do research = raditi istrazivanje. do = obavljati intelektualnu aktivnost."},
  {s:"They _______ a loan to pay for the renovation.",                   opts:["made","took out","did"],  ans:1, exp:"take out a loan = uzeti kredit. 'take out' = phrasal verb za financijske proizvode."},
  {s:"They _______ a great time at the farewell party last Friday.",     opts:["had","made","did"],       ans:0, exp:"have a great time = odlicno se provesti. have = iskustvo/docivljaj. made/did ne idu uz 'time' u ovom znacenju."},
  {s:"She decided to _______ for the position of marketing director.",    opts:["apply","make","do"],      ans:0, exp:"apply for a job/position = prijaviti se za posao. apply FOR = uvijek ovaj prijedlog!"},
  {s:"The charity campaign helped _______ awareness of climate change.",  opts:["raise","rise","arise"],   ans:0, exp:"raise awareness = podici svijest. raise (prijelazan) = uzrokovati porast. rise (neprijelazan) = samostalno rasti."},
  {s:"She _______ first prize in the national photography competition.",  opts:["earned","won","made"],    ans:1, exp:"win a prize/competition = pobijediti na natjecanju. earn = zaraditi radom/trudom (earn a salary). make = kreirati."}
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
    document.getElementById('sd-score-lbl').textContent=sc===10?'Savrseno! Kolokacije su ti jasne. 🎉':sc>=8?'Odlicno! 💪':sc>=6?'Dobro! Ponovi make/do/get/have tablicu.':'Vrati se na tablicu kolokacija.';
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

loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initMatchGame();
initSpeedDrill();


// VERB PATTERNS DRILL
var vpAnswered={};
function vpAns(el,id,ok,correct){
  if(vpAnswered[id])return;vpAnswered[id]=true;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none';});
  if(ok){el.classList.add('sv-correct');}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o.textContent.trim()===correct)o.classList.add('sv-reveal');});}
  var fb=document.getElementById(id+'fb');
  if(fb){fb.className='sv-fb '+(ok?'ok':'no')+' show';fb.innerHTML=(ok?'✓ Točno! ':'✗ Točno: ')+'<strong>'+correct+'</strong>';}
}

// PRIJEDLOŽNE FRAZE DRILL
var ppAnswered={};
function ppAns(el,id,ok,correct){
  if(ppAnswered[id])return;ppAnswered[id]=true;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none';});
  if(ok){el.classList.add('sv-correct');}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o.textContent.trim()===correct.toUpperCase())o.classList.add('sv-reveal');});}
  var fb=document.getElementById(id+'fb');
  if(fb){fb.className='sv-fb '+(ok?'ok':'no')+' show';fb.innerHTML=(ok?'✓ Točno! ':'✗ Točno: ')+'<strong>'+correct+'</strong>';}
}

</script>`;

const CH08_JS = `// TRACKER: bilježi pogreške
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

// VOCAB CARDS — click to reveal example
function revealCard(card){
  card.classList.toggle('vc-revealed');
}

// MATCHING GAME
var matchState={selEn:null,selHr:null,matched:0,total:0,pairs:{}};
function initMatch(pairs){
  matchState={selEn:null,selHr:null,matched:0,total:Object.keys(pairs).length,pairs:pairs};
}
function pickEn(el,key){
  if(el.classList.contains('correct'))return;
  document.querySelectorAll('.match-en').forEach(function(e){if(!e.classList.contains('correct'))e.classList.remove('selected','wrong');});
  el.classList.add('selected');
  matchState.selEn={el:el,key:key};
  checkMatch();
}
function pickHr(el,key){
  if(el.classList.contains('correct'))return;
  document.querySelectorAll('.match-hr').forEach(function(e){if(!e.classList.contains('correct'))e.classList.remove('selected','wrong');});
  el.classList.add('selected');
  matchState.selHr={el:el,key:key};
  checkMatch();
}
function checkMatch(){
  if(!matchState.selEn||!matchState.selHr)return;
  var en=matchState.selEn,hr=matchState.selHr;
  if(en.key===hr.key){
    en.el.classList.remove('selected');hr.el.classList.remove('selected');
    en.el.classList.add('correct');hr.el.classList.add('correct');
    matchState.matched++;
    if(matchState.matched===matchState.total){
      var sc=document.getElementById('match-score');
      if(sc){sc.style.display='block';sc.innerHTML='<span style="color:var(--green);font-family:var(--mono);font-size:13px;font-weight:700">✓ Sve parove si pronašao! 🎉</span>';}
    }
  } else {
    en.el.classList.add('wrong');hr.el.classList.add('wrong');
    setTimeout(function(){
      en.el.classList.remove('selected','wrong');
      hr.el.classList.remove('selected','wrong');
    },800);
  }
  matchState.selEn=null;matchState.selHr=null;
}

// MCQ QUIZ
var answered={},correct=0,total=13;
var E={
  q1:{c:"✓ Točno. 'make a living' = zaraditi za život, preživjeti financijski.",w:"✗ Netočno. 'make a living' = zaraditi za život. Točan odgovor: make a living."},
  q2:{c:"✓ Točno. 'apply for a job' = prijaviti se za posao. Standardna kolokacija.",w:"✗ Netočno. Koristimo 'apply FOR a job' — prijaviti se na poziciju. Točan odgovor: apply for."},
  q3:{c:"✓ Točno. 'get promoted' = biti unaprijeđen na poslu. Pasivna kolokacija.",w:"✗ Netočno. 'get promoted' = dobiti unapređenje. Točan odgovor: get promoted."},
  q4:{c:"✓ Točno. 'break up' (with someone) = prekinuti vezu. Phrasal verb.",w:"✗ Netočno. 'break up with' = prekinuti s nekim. Točan odgovor: break up."},
  q5:{c:"✓ Točno. 'get on well with' = slagati se s nekim, imati dobar odnos.",w:"✗ Netočno. 'get on well with' = slagati se s nekim. Točan odgovor: get on well with."},
  q6:{c:"✓ Točno. 'do voluntary work' = volontirati. 'do' je ispravni glagol uz 'work'.",w:"✗ Netočno. Kolokacija: 'do voluntary work' (ne make/have). Točan odgovor: do voluntary work."},
  q7:{c:"✓ Točno. 'raise awareness' = podizati svjesnost (o nekom problemu). Standardna kolokacija.",w:"✗ Netočno. 'raise awareness' = podizati svjesnost. Točan odgovor: raise awareness."},
  q8:{c:"✓ Točno. 'take out a loan' = uzeti kredit/zajam. Financijska kolokacija.",w:"✗ Netočno. 'take out a loan' = uzeti zajam/kredit. Točan odgovor: take out a loan."},
  q9:{c:"✓ Točno. 'make ends meet' = jedva sastavljati kraj s krajem, preživjeti financijski.",w:"✗ Netočno. 'make ends meet' = jedva preživjeti financijski. Točan odgovor: make ends meet."},
  q10:{c:"✓ Točno. 'face a challenge' = suočiti se s izazovom. Standardna kolokacija.",w:"✗ Netočno. 'face a challenge' = suočiti se s izazovom. Točan odgovor: face."},
  q11:{c:"✓ Točno. 'Struggles to make ends meet' = jedva preživljava financijski. Kontekst: 'part-time job' + 'two children' = ograničen prihod. Make ends meet = imati dovoljno za osnovne potrebe, ni malo više.",w:"✗ Netočno. 'Make ends meet' ne znači štednju, luksuz ni visoku plaću. Kontekst 'struggles' (bori se) + 'part-time job' ukazuje na financijsku stegu. Odgovor C: jedva preživljava."},
  q12:{c:"✓ Točno. 'Give up her job' = prestati raditi taj posao, ostaviti ga iza sebe. Kontekst: 'decided to give up... and start her own business' — odustaje od jedne stvari da bi krenula na drugu.",w:"✗ Netočno. 'Give up' = odustati, prestati. Ne znači napredovanje, pauzu ni prijavu za novu poziciju. Kontekst pokazuje promjenu karijere (give up → start own business). Odgovor B."},
  q13:{c:"✓ Točno. 'Raise awareness' = povećati svjesnost, pomoći ljudima da razumiju i razmišljaju o problemu. Kampanje u školama i na društvenim mrežama = informiranje javnosti.",w:"✗ Netočno. 'Raise awareness' ne znači prikupljanje novca, gradnju domova ni smanjenje broja beskućnika — to su moguće posljedice, ali ne značenje fraze. Odgovor D: pomoći više ljudi da razumiju problem."}
};
var FITB={
  'career':    "Kolokacija: 'pursue a career' = slijediti/izgraditi karijeru. pursue = aktivno težiti cilju.",
  'retire':    "Kolokacija: 'retire from work' = otići u mirovinu. retire = prestati raditi zbog dobi.",
  'homeless':  "Kolokacija: 'become homeless' = ostati bez doma. homeless = bez doma (prilog).",
  'volunteer': "Kolokacija: 'volunteer in the community' = volontirati u zajednici. volunteer = glagol i imenica.",
  'loan':      "Kolokacija: 'pay off a loan' = otplatiti zajam. pay off = u cijelosti otplatiti.",
  'promote':   "Pasivna kolokacija: 'be promoted' = biti unaprijeđen. get/be promoted = dobiti unapređenje."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;trackAnswer('ch08',ok);
  el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){o.classList.add('disabled')});
  el.classList.add(ok?'correct':'wrong');
  if(!ok){el.closest('.q-opts').querySelectorAll('.q-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf(',true)')>-1)o.classList.add('correct');});}
  var expl=document.getElementById(qid+'e');
  expl.innerHTML='<div class="'+(ok?'expl-ok':'expl-no')+'">'+E[qid][ok?'c':'w']+'</div>';
  expl.classList.add('show');
  if(Object.keys(answered).length===total){
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':correct>=9?'Excellent!':correct>=7?'Good. Ponovi kolokacije.':correct>=5?'Vrati se na Learn — kolokacije i phrasal verbs.':'Vrati se na Learn i idi polako.';
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

// PHRASAL VERB DRILL
var pvAnswered={},pvCorrect=0,pvTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(pvAnswered[id])return;
  pvAnswered[id]=true;if(isCorrect)pvCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){el.classList.add('sv-correct');if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! <strong>'+correctForm+'</strong>';}}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točno: <strong>'+correctForm+'</strong>';}}
  if(Object.keys(pvAnswered).length===pvTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=pvCorrect+'/'+pvTotal;
      document.getElementById('sv-score-lbl').textContent=pvCorrect===5?'Savršen! 🎉':pvCorrect>=4?'Odlično!':pvCorrect>=3?'Dobro — ponovi phrasal verbs.':'Vrati se na listu phrasal verbs.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){btn.textContent='✓ Kopirano';btn.classList.add('copied');setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);});
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch08_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch08_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}

// MATCHING GAME INIT
function initMatchGame(){
  var pairs={
    'earn':'zaraditi','retire':'otići u mirovinu','promote':'unaprijediti',
    'unemployed':'nezaposlen','mortgage':'hipoteka','volunteer':'volontirati',
    'scholarship':'stipendija','household':'kućanstvo'
  };
  initMatch(pairs);
}


var SD=[
  {s:"She _______ a good living as a freelance photographer.",           opts:["makes","does","gets"],    ans:0, exp:"make a living = zaradivati za zivot. make = kreirati/postici nesto novo."},
  {s:"He _______ voluntary work at the local food bank every week.",     opts:["makes","does","has"],     ans:1, exp:"do voluntary work = raditi volonterski. do = obavljati aktivnost."},
  {s:"They _______ married in a small chapel by the sea.",               opts:["made","did","got"],       ans:2, exp:"get married = vjencati se. get + adjective/past participle = promjena stanja."},
  {s:"He _______ his homework carefully before the exam the next day.",    opts:["did","made","had"],       ans:0, exp:"do homework = raditi domacnu zadacu. do = obavljati zadatak/aktivnost."},
  {s:"He _______ research on climate change for his dissertation.",       opts:["made","did","had"],       ans:1, exp:"do research = raditi istrazivanje. do = obavljati intelektualnu aktivnost."},
  {s:"They _______ a loan to pay for the renovation.",                   opts:["made","took out","did"],  ans:1, exp:"take out a loan = uzeti kredit. 'take out' = phrasal verb za financijske proizvode."},
  {s:"They _______ a great time at the farewell party last Friday.",     opts:["had","made","did"],       ans:0, exp:"have a great time = odlicno se provesti. have = iskustvo/docivljaj. made/did ne idu uz 'time' u ovom znacenju."},
  {s:"She decided to _______ for the position of marketing director.",    opts:["apply","make","do"],      ans:0, exp:"apply for a job/position = prijaviti se za posao. apply FOR = uvijek ovaj prijedlog!"},
  {s:"The charity campaign helped _______ awareness of climate change.",  opts:["raise","rise","arise"],   ans:0, exp:"raise awareness = podici svijest. raise (prijelazan) = uzrokovati porast. rise (neprijelazan) = samostalno rasti."},
  {s:"She _______ first prize in the national photography competition.",  opts:["earned","won","made"],    ans:1, exp:"win a prize/competition = pobijediti na natjecanju. earn = zaraditi radom/trudom (earn a salary). make = kreirati."}
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
    document.getElementById('sd-score-lbl').textContent=sc===10?'Savrseno! Kolokacije su ti jasne. 🎉':sc>=8?'Odlicno! 💪':sc>=6?'Dobro! Ponovi make/do/get/have tablicu.':'Vrati se na tablicu kolokacija.';
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

loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initMatchGame();
initSpeedDrill();


// VERB PATTERNS DRILL
var vpAnswered={};
function vpAns(el,id,ok,correct){
  if(vpAnswered[id])return;vpAnswered[id]=true;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none';});
  if(ok){el.classList.add('sv-correct');}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o.textContent.trim()===correct)o.classList.add('sv-reveal');});}
  var fb=document.getElementById(id+'fb');
  if(fb){fb.className='sv-fb '+(ok?'ok':'no')+' show';fb.innerHTML=(ok?'✓ Točno! ':'✗ Točno: ')+'<strong>'+correct+'</strong>';}
}

// PRIJEDLOŽNE FRAZE DRILL
var ppAnswered={};
function ppAns(el,id,ok,correct){
  if(ppAnswered[id])return;ppAnswered[id]=true;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none';});
  if(ok){el.classList.add('sv-correct');}
  else{el.classList.add('sv-wrong');opts.forEach(function(o){if(o.textContent.trim()===correct.toUpperCase())o.classList.add('sv-reveal');});}
  var fb=document.getElementById(id+'fb');
  if(fb){fb.className='sv-fb '+(ok?'ok':'no')+' show';fb.innerHTML=(ok?'✓ Točno! ':'✗ Točno: ')+'<strong>'+correct+'</strong>';}
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
