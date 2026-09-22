// Maturiraj.hr — Engleski niža razina · Poglavlje 3
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ENG_NIZA_CH03({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch03-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH03_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch03-js";
    scriptEl.textContent = CH03_JS;
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
      if (num === 4 && nav.onNext) nav.onNext();
      else if (num === 2 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch03-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch03-root"
      dangerouslySetInnerHTML={{ __html: CH03_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH03_CSS = `
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

const CH03_BODY = `<div class="shell">

<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#080B10" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">&#x2715; Zatvori</button>
  <div class="sb-label">// Gramatika</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter01.html'"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="closeMobDrawer();window.location='chapter02.html'"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
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
  <div class="sb-item" onclick="window.location='chapter01.html'" style="cursor:pointer"><span class="sb-dot"></span> 01 &middot; Present Simple i Continuous</div>
  <div class="sb-item" onclick="window.location='chapter02.html'" style="cursor:pointer"><span class="sb-dot"></span> 02 &middot; Past Simple i Continuous</div>
  <div class="sb-item active"><span class="sb-dot"></span> 03 &middot; Present Perfect</div>
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
  <div class="sb-footer">03 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter02.html'" style="cursor:pointer">← chapters</span>
    <span class="bc-sep">/</span><span>grammar</span>
    <span class="bc-sep">/</span><span class="bc-active">present-perfect</span>
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

  <!-- ══════════ LAYER 0 — 2 MIN ══════════ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 03 / 15 · grammar</div>
      <h1 class="hero-title">Present <span>Perfect</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~35 min</span>
        <span class="hero-badge hb-level">niža razina</span>
        <span class="hero-badge hb-chapter">03 / 12</span>
      </div>
      <p class="hero-sub">have/has + past participle · for vs since · PP vs Past Simple</p>
      <div class="progress-track"><div class="progress-bar" style="width:25%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-violet">Present Perfect</span>
      <span class="pill pill-lime">Past Simple</span>
      <span class="pill pill-amber">for / since</span>
      <span class="pill pill-sky">already/yet/just</span>
      <span class="pill pill-red">PP vs PS zamka</span>
    </div>

    <div class="sec-label">// at a glance</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon violet">PP</div><div class="stat-name">Present Perfect</div><div class="stat-desc">Veza prošlosti i sadašnjosti. Forma: <b style="color:var(--violet)">have/has + past participle</b></div></div>
      <div class="stat-card"><div class="stat-icon lime">PS</div><div class="stat-name">Past Simple</div><div class="stat-desc">Završena radnja s <b style="color:var(--lime)">točnim vremenom</b>. yesterday, ago, last week…</div></div>
      <div class="stat-card"><div class="stat-icon amber">F/S</div><div class="stat-name">for / since</div><div class="stat-desc"><em style="color:var(--amber)">for</em> + trajanje · <em style="color:var(--amber)">since</em> + točka u prošlosti</div></div>
      <div class="stat-card"><div class="stat-icon sky">SW</div><div class="stat-name">Signal words</div><div class="stat-desc"><em style="color:var(--sky)">already, yet, just, ever, never</em> → uvijek PP!</div></div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck violet">PP — kada</div><div class="cv">Iskustvo u životu · radnja čiji rezultat vidimo sada · radnja koja još traje (for/since)</div></div>
      <div class="concept-row"><div class="ck violet">PP — forma</div><div class="cv">I/you/we/they: <code>have + PP</code> · he/she/it: <code>has + PP</code> · Neg: <code>haven't/hasn't + PP</code></div></div>
      <div class="concept-row"><div class="ck violet">Past participle</div><div class="cv">Regular: <code>verb+ed</code> (worked, played) · Irregular: <code>seen, done, gone, written, been…</code></div></div>
      <div class="concept-row"><div class="ck amber">for vs since</div><div class="cv"><code>for</code> + trajanje: <em>for 3 years, for a week</em> · <code>since</code> + točka: <em>since 2010, since Monday</em></div></div>
      <div class="concept-row"><div class="ck sky">PP signal words</div><div class="cv"><code>already, yet, just, ever, never, so far, recently, lately, before, this week/year</code></div></div>
      <div class="concept-row"><div class="ck lime">PS signal words</div><div class="cv"><code>yesterday, ago, last week/year, in 2010, this morning (gotovo), when</code></div></div>
      <div class="concept-row"><div class="ck red">Ključna razlika</div><div class="cv">PP = <b>nema točnog vremena</b> ili veza s danas · PS = <b>točno specifično</b> završeno vrijeme</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// ako zapamtiš samo ovo — 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🧠 panic-proof — 3 rules that cover 90% of exam questions</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Vidiš already/yet/just/ever/never/for/since</b> → Present Perfect (<b style="color:var(--violet)">have/has + past participle</b>)</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Vidiš yesterday/ago/last week/in 2010/specific time</b> → <b style="color:var(--lime)">Past Simple</b> (nikad PP s tim riječima!)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>for</b> + trajanje (for 3 years) · <b>since</b> + točka u prošlosti (since 2010) → oba uvijek PP</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Što je Present Perfect i kada ga koristim?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>PP = veza prošlosti i sadašnjosti.</b> 4 upotrebe:<br>(1) Iskustvo — <span class="ok">I have been to Paris.</span><br>(2) Rezultat vidljiv sada — <span class="ok">She has lost her keys.</span><br>(3) Nedavno — <span class="ok">He has just arrived.</span><br>(4) Traje — <span class="ok">I have lived here for 5 years.</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koja je razlika između PP i Past Simple?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>PP = nema točnog vremena / veza s danas</b><br>
        <b>PS = specifično, završeno, određeno vrijeme</b><br><br>
        <em>I <b style="color:var(--violet)">have seen</b> that film.</em> → PP (iskustvo, ne zna se kad)<br>
        <em>I <b style="color:var(--lime)">saw</b> that film yesterday.</em> → PS (točno kad — yesterday)<br><br>
        <span class="bad">I have seen it yesterday.</span> ❌ — nikad PP s yesterday/ago/last!
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>for vs since — koja je razlika?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>for</b> + trajanje: <span class="ok">for 3 years · for a week · for ages</span><br><b>since</b> + točka u prošlosti: <span class="ok">since 2010 · since Monday · since I was a child</span><br>&#x274C; since ten years → &#x2713; <b>for</b> ten years<br>&#x274C; for Monday → &#x2713; <b>since</b> Monday</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>already, yet, just — što svaki znači?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>already</b> = već → have + <b>already</b> + PP · <span class="ok">I have already eaten.</span><br><b>yet</b> = još/već → PP + <b>yet</b> na kraju · <span class="ok">Haven't finished yet. / Have you eaten yet?</span><br><b>just</b> = upravo → have + <b>just</b> + PP · <span class="ok">He has just arrived.</span></div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Irregular past participles — najvažniji?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Zapamti — past participle ≠ past simple kod irregular!</b><br>
        <span class="bad">go→went→<b>gone</b></span> · <span class="bad">see→saw→<b>seen</b></span> · <span class="bad">write→wrote→<b>written</b></span><br>
        <span class="bad">do→did→<b>done</b></span> · <span class="bad">be→was/were→<b>been</b></span> · <span class="bad">have→had→<b>had</b></span><br>
        <span class="bad">take→took→<b>taken</b></span> · <span class="bad">give→gave→<b>given</b></span> · <span class="bad">eat→ate→<b>eaten</b></span>
      </div>
    </div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch01: have/has u PP vs Present Simple — zašto se razlikuju?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">have/has u oba, ali drugačije značenje!<br><b>PS:</b> She <b>has</b> a car. = ima (posjeduje)<br><b>PP:</b> She <b>has</b> visited Paris. = has + PP = Present Perfect<br>Test: ima li iza "has/have" <b>past participle</b>? → PP · Ako ne → PS</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol — 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">🚨 if you panic on the exam — do this</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Vidiš <b>already/yet/just/ever/never</b>? → Present Perfect</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Vidiš <b>yesterday/ago/last/in [godina]</b>? → Past Simple (nikad PP!)</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Vidiš <b>for/since</b>? → Present Perfect (for + trajanje, since + točka)</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">PP forma: <b>have/has</b> + past participle. He/she/it = <b>has</b> · ostali = <b>have</b></div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Irregular participle? (go→<b>gone</b>, see→<b>seen</b>, write→<b>written</b>) — ne koristiti past simple oblik!</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter02.html" class="nav-btn">← Chapter 02</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn more →</span>
    </div>
  </div>

  <!-- ══════════ LAYER 1 — LEARN ══════════ -->
  <div class="layer" id="l1">

    <div class="sec-label">// present perfect — tvorba</div>
    <p class="prose">Present Perfect koristimo kada postoji <strong>veza između prošlosti i sadašnjosti</strong>. Nije važno <em>kada</em> se nešto dogodilo — važno je da ima <em>utjecaj na sada</em>, da je to iskustvo, ili da radnja još traje.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pc">PP</div>
        <div><div class="gram-title">Present Perfect — tvorba</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'PP Pozitiv: I/you/we/they have + PP · he/she/it has + PP')">copy</button>
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">I / You / We / They</span> + <span class="val">have</span> + <span class="val">past participle</span> → I <span class="val">have seen</span> it.<br>
          <span class="sub">He / She / It</span> + <span class="val">has</span> + <span class="val">past participle</span> → She <span class="val">has seen</span> it.
        </div>
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'PP Negativ: haven't / hasn't + past participle')">copy</button>
          <span class="lbl">− Negativ</span><br>
          I <span class="kw">haven't</span> seen it. · She <span class="kw">hasn't</span> arrived yet. · They <span class="kw">haven't</span> finished.
        </div>
        <div class="formula pc">
          <button class="copy-btn" onclick="copyFormula(this,'PP Pitanje: Have I/you/we/they + PP? · Has he/she/it + PP?')">copy</button>
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Have</span> you seen it? · <span class="kw">Has</span> she arrived? · <span class="kw">Have</span> they ever been to Japan?
        </div>
        <div class="callout callout-tip" style="margin-top:14px">
          <span class="callout-icon">💡</span>
          <div class="callout-body">
            <div class="callout-title">have vs has — brzo pravilo</div>
            <div class="callout-text">
              <b style="color:var(--violet)">have</b> = I, you, we, they<br>
              <b style="color:var(--violet)">has</b> = he, she, it<br>
              Kratice: I've, you've, we've, they've · he's, she's, it's (pazi — he's = he has ILI he is!)
            </div>
          </div>
        </div>
        <div class="formula pc" style="margin-top:14px">
          <button class="copy-btn" onclick="copyFormula(this,'How long have/has + subjekt + past participle?')">copy</button>
          <span class="lbl">⏱ How long…? — poseban obrazac</span><br>
          <span class="kw">How long</span> + <span class="val">have/has</span> + <span class="sub">subjekt</span> + <span class="val">past participle</span>?<br>
          <em style="color:var(--t3);font-size:12px">How long <span style="color:var(--violet)">have</span> you <span style="color:var(--violet)">known</span> her? → For three years. / Since 2020.</em><br>
          <em style="color:var(--t3);font-size:12px">How long <span style="color:var(--violet)">has</span> he <span style="color:var(--violet)">worked</span> here? → For six months. / Since January.</em><br>
          <span style="color:var(--amber);font-size:12px">⚠ Odgovor uvijek počinje s <b>for</b> (trajanje) ili <b>since</b> (točka u prošlosti)!</span>
        </div>
        <div class="sub-label">→ Primjeri</div>
        <div class="exs">
          <div class="ex"><div class="ex-en">I <b class="pc">have visited</b> Paris twice.</div><span class="ex-arr">→</span><div class="ex-hr">iskustvo u životu, bez točnog vremena → PP</div></div>
          <div class="ex"><div class="ex-en">She <b class="pc">has lost</b> her keys.</div><span class="ex-arr">→</span><div class="ex-hr">rezultat vidljiv sada (sad ih nema) → PP</div></div>
          <div class="ex"><div class="ex-en">They <b class="pc">haven't finished</b> yet.</div><span class="ex-arr">→</span><div class="ex-hr">yet + negativ = PP</div></div>
          <div class="ex"><div class="ex-en"><b>Have</b> you ever <b class="pc">eaten</b> sushi?</div><span class="ex-arr">→</span><div class="ex-hr">ever u pitanju = iskustvo → PP</div></div>
        </div>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera</div>
        <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "She have seen it" nije točno?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans"><em>She</em> = he/she/it → mora biti <b style="color:var(--violet)">has</b> (ne have). ✅ <b>She has seen it.</b><br>have koristimo samo za I/you/we/they.</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// past participle — regular i irregular</div>
    <p class="prose">Past participle (treći oblik glagola) je ključan za Present Perfect. <strong>Regular glagoli</strong> imaju isti oblik kao Past Simple (+ed). <strong>Irregular glagoli</strong> — svaki poseban, moraš naučiti napamet.</p>

    <div class="callout callout-warn">
      <span class="callout-icon">🚫</span>
      <div class="callout-body">
        <div class="callout-title">Past participle ≠ Past Simple kod irregular glagola!</div>
        <div class="callout-text">
          ❌ <em>I have <b>went</b> there.</em> → ✅ <em>I have <b style="color:var(--green)">gone</b> there.</em><br>
          ❌ <em>She has <b>saw</b> it.</em> → ✅ <em>She has <b style="color:var(--green)">seen</b> it.</em><br>
          ❌ <em>They have <b>wrote</b> it.</em> → ✅ <em>They have <b style="color:var(--green)">written</b> it.</em>
        </div>
      </div>
    </div>

    <div class="tbl-wrap">
      <table>
        <thead><tr><th>Infinitiv</th><th>Past Simple</th><th>Past Participle</th><th>Infinitiv</th><th>Past Simple</th><th>Past Participle</th></tr></thead>
        <tbody>
          <tr><td><code>be</code></td><td>was/were</td><td><b>been</b></td><td><code>make</code></td><td>made</td><td><b>made</b></td></tr>
          <tr><td><code>have</code></td><td>had</td><td><b>had</b></td><td><code>take</code></td><td>took</td><td><b>taken</b></td></tr>
          <tr><td><code>go</code></td><td>went</td><td><b>gone</b></td><td><code>give</code></td><td>gave</td><td><b>given</b></td></tr>
          <tr><td><code>see</code></td><td>saw</td><td><b>seen</b></td><td><code>get</code></td><td>got</td><td><b>got / gotten</b></td></tr>
          <tr><td><code>come</code></td><td>came</td><td><b>come</b></td><td><code>know</code></td><td>knew</td><td><b>known</b></td></tr>
          <tr><td><code>do</code></td><td>did</td><td><b>done</b></td><td><code>think</code></td><td>thought</td><td><b>thought</b></td></tr>
          <tr><td><code>say</code></td><td>said</td><td><b>said</b></td><td><code>find</code></td><td>found</td><td><b>found</b></td></tr>
          <tr><td><code>write</code></td><td>wrote</td><td><b>written</b></td><td><code>tell</code></td><td>told</td><td><b>told</b></td></tr>
          <tr><td><code>read</code></td><td>read</td><td><b>read</b></td><td><code>leave</code></td><td>left</td><td><b>left</b></td></tr>
          <tr><td><code>buy</code></td><td>bought</td><td><b>bought</b></td><td><code>win</code></td><td>won</td><td><b>won</b></td></tr>
          <tr><td><code>eat</code></td><td>ate</td><td><b>eaten</b></td><td><code>break</code></td><td>broke</td><td><b>broken</b></td></tr>
          <tr><td><code>speak</code></td><td>spoke</td><td><b>spoken</b></td><td><code>forget</code></td><td>forgot</td><td><b>forgotten</b></td></tr>
          <tr><td><code>lose</code></td><td>lost</td><td><b>lost</b></td><td><code>meet</code></td><td>met</td><td><b>met</b></td></tr>
          <tr><td><code>choose</code></td><td>chose</td><td><b>chosen</b></td><td><code>drive</code></td><td>drove</td><td><b>driven</b></td></tr>
        </tbody>
      </table>
    </div>

    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">Trik — grupiraj po uzorku</div>
        <div class="callout-text">
          <b>PS = PP</b> (isti oblik): <em>had, said, thought, found, left, bought, met, lost, told</em><br>
          <b>-en ending</b>: <em>eaten, taken, given, spoken, broken, driven, written, forgotten, chosen</em><br>
          <b>Sva tri oblika isti</b>: <em>read→read→read, cut→cut→cut, put→put→put</em>
        </div>
      </div>
    </div>

    <!-- PAST PARTICIPLE DRILL -->
    <div class="sec-label" style="margin-top:24px">// past participle drill — odaberi točan oblik</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Odaberi ispravni past participle. Pazi na mamce!</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">I have _______ (go) to Spain three times.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pp1',false,'been/gone')">went</div><div class="sv-opt" onclick="svAns(this,'pp1',true,'been/gone')">been / gone</div><div class="sv-opt" onclick="svAns(this,'pp1',false,'been/gone')">go</div></div><div class="sv-fb" id="pp1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">She has _______ (write) five novels so far.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pp2',false,'written')">wrote</div><div class="sv-opt" onclick="svAns(this,'pp2',false,'written')">writed</div><div class="sv-opt" onclick="svAns(this,'pp2',true,'written')">written</div></div><div class="sv-fb" id="pp2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Have you ever _______ (eat) Japanese food?</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pp3',false,'eaten')">ate</div><div class="sv-opt" onclick="svAns(this,'pp3',true,'eaten')">eaten</div><div class="sv-opt" onclick="svAns(this,'pp3',false,'eaten')">eated</div></div><div class="sv-fb" id="pp3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">They have _______ (break) the record.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pp4',false,'broken')">broke</div><div class="sv-opt" onclick="svAns(this,'pp4',true,'broken')">broken</div><div class="sv-opt" onclick="svAns(this,'pp4',false,'broken')">breaked</div></div><div class="sv-fb" id="pp4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">He has _______ (do) his homework already.</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'pp5',false,'done')">did</div><div class="sv-opt" onclick="svAns(this,'pp5',true,'done')">done</div><div class="sv-opt" onclick="svAns(this,'pp5',false,'done')">doed</div></div><div class="sv-fb" id="pp5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <hr class="divider">
    <div class="sec-label">// 4 načina korištenja present perfecta</div>
    <p class="prose">Present Perfect nije samo jedno — ima <strong>4 različita konteksta</strong>, svaki s drugačijim fokusom.</p>

    <div class="compare" style="grid-template-columns:1fr 1fr">
      <div class="cmp-card">
        <div class="cmp-head pc">1. Iskustvo u životu</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Kada</b>Nešto si doživio, ali ne kaži kada</div>
          <div class="cmp-row"><b>Signal</b>ever, never, before, once, twice</div>
          <div class="cmp-row"><b>Primjer</b>I <em>have visited</em> Rome twice.</div>
          <div class="cmp-row"><b>Pitanje</b>Have you ever been to Japan?</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head pc">2. Rezultat vidljiv sada</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Kada</b>Prošla radnja ima efekt na sadašnjost</div>
          <div class="cmp-row"><b>Signal</b>(bez posebnog signala, kontekst)</div>
          <div class="cmp-row"><b>Primjer</b>She <em>has lost</em> her keys. (sad ih nema)</div>
          <div class="cmp-row"><b>Primjer</b>I <em>have broken</em> my leg. (sad me boli)</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head pc">3. Nedavna radnja</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Kada</b>Radnja se upravo završila</div>
          <div class="cmp-row"><b>Signal</b>just, already, yet, recently</div>
          <div class="cmp-row"><b>Primjer</b>He <em>has just arrived</em>.</div>
          <div class="cmp-row"><b>Primjer</b>I <em>have already eaten</em>.</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head pc">4. Radnja koja još traje</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Kada</b>Počelo u prošlosti, traje do sad</div>
          <div class="cmp-row"><b>Signal</b>for, since, all my life, always</div>
          <div class="cmp-row"><b>Primjer</b>I <em>have lived</em> here for 10 years.</div>
          <div class="cmp-row"><b>Primjer</b>She <em>has worked</em> here since 2015.</div>
        </div>
      </div>
    </div>

    <div class="callout callout-info" style="margin-top:8px">
      <span class="callout-icon">ℹ️</span>
      <div class="callout-body">
        <div class="callout-title">Present Perfect Continuous — napomena</div>
        <div class="callout-text">
          Postoji i <b>Present Perfect Continuous</b>: <em style="color:var(--violet)">I have been working all day.</em><br>
          Forma: <b style="color:var(--violet)">have/has been + glagol-ing</b> — naglašava trajanje i tok radnje.<br>
          Na <b>nižoj razini mature</b> se aktivno ne traži, ali možeš ga sresti u tekstovima za čitanje.<br>
          Ako vidiš <em>"have/has been doing"</em> u odgovoru — nije greška, ali ne treba ga koristiti aktivno.
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// for vs since — detaljna usporedba</div>
    <p class="prose">Jedna od najčešćih zamki na maturi. <strong>For</strong> i <strong>since</strong> oba idu s Present Perfectom, ali na potpuno drugačiji način.</p>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head amber">for + trajanje</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Što dolazi iza</b>Koliko dugo = trajanje</div>
          <div class="cmp-row"><b>Primjeri</b>for <em>3 years</em> · for <em>a week</em> · for <em>ages</em> · for <em>a long time</em> · for <em>two hours</em></div>
          <div class="cmp-row"><b>Rečenica</b>I have worked here <em>for 5 years</em>.</div>
          <div class="cmp-row"><b>Test</b>Možeš dodati "How long?" → for</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head amber">since + točka</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Što dolazi iza</b>Od kada = točka u prošlosti</div>
          <div class="cmp-row"><b>Primjeri</b>since <em>2010</em> · since <em>Monday</em> · since <em>January</em> · since <em>I was a child</em> · since <em>last year</em></div>
          <div class="cmp-row"><b>Rečenica</b>I have worked here <em>since 2019</em>.</div>
          <div class="cmp-row"><b>Test</b>Možeš dodati "Since when?" → since</div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn">
      <span class="callout-icon">⚠</span>
      <div class="callout-body">
        <div class="callout-title">Najčešće greške s for/since</div>
        <div class="callout-text">
          ❌ <em>I have known her <b>since</b> ten years.</em> → ✅ <em>I have known her <b>for</b> ten years.</em><br>
          ❌ <em>I have worked here <b>for</b> 2019.</em> → ✅ <em>I have worked here <b>since</b> 2019.</em><br>
          ❌ <em>I have lived here <b>since</b> a long time.</em> → ✅ <em>I have lived here <b>for</b> a long time.</em>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// klju&#269;ne &#269;estice &mdash; ever, never, just, already, yet</div>
    <p class="prose" style="margin-bottom:10px">Ove &#269;estice su najtipičniji NCVVO signal za Present Perfect. Svaka ide uz PP &mdash; ne uz Past Simple!</p>
    <div class="callout callout-tip" style="margin-bottom:6px">
      <span class="callout-icon" style="font-size:18px">&#x1F4CD;</span>
      <div class="callout-body">
        <div class="callout-title">ever &amp; never &mdash; iskustvo (have you ever...?)</div>
        <div class="callout-text">
          <b>ever</b> = ikad (u pitanjima i negativima) &rarr; <em>Have you <b>ever</b> been to Japan?</em><br>
          <b>never</b> = nikad &rarr; <em>I have <b>never</b> tried sushi.</em><br>
          <span style="color:var(--red);font-size:12px">&#x274C; Did you ever go&hellip; &#x2192; &#x2713; Have you ever been&hellip;</span>
        </div>
      </div>
    </div>
    <div class="callout callout-tip" style="margin-bottom:6px">
      <span class="callout-icon" style="font-size:18px">&#x26A1;</span>
      <div class="callout-body">
        <div class="callout-title">just &mdash; upravo se dogodilo</div>
        <div class="callout-text">
          <b>just</b> = maloproije, upravo &rarr; <em>She has <b>just</b> left the office.</em><br>
          Dolazi izme&#273;u have/has i participa: <em>I have <b>just</b> finished.</em><br>
          <span style="color:var(--red);font-size:12px">&#x274C; She just left &#x2192; &#x2713; She has just left (nedavna pro&#353;lost)</span>
        </div>
      </div>
    </div>
    <div class="callout callout-tip" style="margin-bottom:6px">
      <span class="callout-icon" style="font-size:18px">&#x2705;</span>
      <div class="callout-body">
        <div class="callout-title">already &amp; yet &mdash; o&#269;ekivanje</div>
        <div class="callout-text">
          <b>already</b> = ve&#263; (ranije nego o&#269;ekivano, potvrdne re&#269;.) &rarr; <em>I have <b>already</b> done it!</em><br>
          <b>yet</b> = jo&#353; (o&#269;ekujemo da &#263;e se dogoditi, negativi i pitanja) &rarr; <em>Have you finished <b>yet</b>? / I haven't started <b>yet</b>.</em><br>
          <span style="color:var(--red);font-size:12px">&#x274C; I didn't eat yet &#x2192; &#x2713; I haven't eaten yet &middot; &#x274C; Did you eat already? &#x2192; &#x2713; Have you eaten already?</span>
        </div>
      </div>
    </div>
        <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--lime);margin:16px 0 6px">→ gdje u re&#269;enici? &mdash; already · yet · just</div>
<div style="margin:16px 0 0;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;color:var(--lime);padding:10px 14px;border-bottom:1px solid var(--bd)">// already · yet · just &mdash; gdje u rečenici?</div>
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--bg-elevated)">
            <th style="padding:8px 12px;text-align:left;font-weight:600;color:var(--t2);border-bottom:1px solid var(--bd);width:18%">Rije&#269;</th>
            <th style="padding:8px 12px;text-align:left;font-weight:600;color:var(--t2);border-bottom:1px solid var(--bd);width:22%">Koristi se u</th>
            <th style="padding:8px 12px;text-align:left;font-weight:600;color:var(--t2);border-bottom:1px solid var(--bd);width:20%">Pozicija</th>
            <th style="padding:8px 12px;text-align:left;font-weight:600;color:var(--t2);border-bottom:1px solid var(--bd)">Primjer</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 12px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--lime)">already</span></td>
            <td style="padding:9px 12px;color:var(--t2)">+ pozitivne</td>
            <td style="padding:9px 12px;color:var(--t3);font-family:var(--mono);font-size:11px">have + <b>already</b> + PP</td>
            <td style="padding:9px 12px;color:var(--t1)">I have <b>already</b> eaten. &middot; She has <b>already</b> left.</td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 12px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--sky)">yet</span></td>
            <td style="padding:9px 12px;color:var(--t2)">&minus; negativne<br>? pitanja</td>
            <td style="padding:9px 12px;color:var(--t3);font-family:var(--mono);font-size:11px">PP + <b>yet</b> (na kraju!)</td>
            <td style="padding:9px 12px;color:var(--t1)">I haven&rsquo;t finished <b>yet</b>. &middot; Have you eaten <b>yet</b>?</td>
          </tr>
          <tr>
            <td style="padding:9px 12px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--violet)">just</span></td>
            <td style="padding:9px 12px;color:var(--t2)">+ pozitivne</td>
            <td style="padding:9px 12px;color:var(--t3);font-family:var(--mono);font-size:11px">have + <b>just</b> + PP</td>
            <td style="padding:9px 12px;color:var(--t1)">He has <b>just</b> arrived. &middot; I&rsquo;ve <b>just</b> seen it.</td>
          </tr>
        </tbody>
      </table>
      <div style="padding:8px 14px;background:var(--red-dim);border-top:1px solid var(--red-border)">
        <span style="font-size:12px;color:var(--red)">&#x274C; I didn&rsquo;t eat <b>yet</b> &rarr; &#x2713; I haven&rsquo;t eaten <b>yet</b> &nbsp;&middot;&nbsp; &#x274C; Did you eat <b>already</b>? &rarr; &#x2713; Have you <b>already</b> eaten? &nbsp;&middot;&nbsp; &#x274C; He has arrived <b>just</b> &rarr; &#x2713; He has <b>just</b> arrived.</span>
      </div>
    </div>



    <hr class="divider">
    <div class="sec-label">// signal words</div>
    <div class="signal-grid">
      <div class="sig-card">
        <div class="sig-head pc">// PP — signal words</div>
        <div class="chips">
          <span class="chip pc">already</span><span class="chip pc">yet</span><span class="chip pc">just</span>
          <span class="chip pc">ever</span><span class="chip pc">never</span><span class="chip pc">for</span>
          <span class="chip pc">since</span><span class="chip pc">so far</span><span class="chip pc">recently</span>
          <span class="chip pc">lately</span><span class="chip pc">before</span><span class="chip pc">once/twice</span>
          <span class="chip pc">this week</span><span class="chip pc">this year</span><span class="chip pc">always</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head ps">// PS — signal words (NIKAD PP!)</div>
        <div class="chips">
          <span class="chip ps">yesterday</span><span class="chip ps">last week</span>
          <span class="chip ps">last year</span><span class="chip ps">ago</span>
          <span class="chip ps">in 2010</span><span class="chip ps">this morning*</span>
          <span class="chip ps">when</span><span class="chip ps">at 8 pm</span>
          <span class="chip ps">in the past</span><span class="chip ps">once upon a time</span>
        </div>
      </div>
    </div>
    <div class="callout callout-tip">
      <span class="callout-icon">💡</span>
      <div class="callout-body">
        <div class="callout-title">*this morning — PP ili PS?</div>
        <div class="callout-text">
          Ovisi o kontekstu! Ako <b>jutro još traje</b> → PP: <em>I have drunk two coffees this morning.</em><br>
          Ako <b>jutro je gotovo</b> (govorimo navečer) → PS: <em>I drank two coffees this morning.</em><br>
          Na maturi niže razine: ako piše "this morning" bez dodatnog konteksta → PP.
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// present perfect vs past simple — direktna usporedba</div>
    <p class="prose">Ovo je <strong>najteži dio</strong> ovog poglavlja i najčešća tema na ispitu. Usporedi parove rečenica.</p>

    <div class="exs">
      <div class="ex">
        <div class="ex-en"><b class="pc">Have</b> you <b class="pc">been</b> to Paris?</div>
        <span class="ex-arr">PP</span>
        <div class="ex-hr">iskustvo — ne zna se kada, nije bitno</div>
      </div>
      <div class="ex">
        <div class="ex-en"><b>Did</b> you <b>go</b> to Paris last year?</div>
        <span class="ex-arr">PS</span>
        <div class="ex-hr">specifično — "last year" = točno određeno</div>
      </div>
      <div class="ex">
        <div class="ex-en">I <b class="pc">have lost</b> my wallet!</div>
        <span class="ex-arr">PP</span>
        <div class="ex-hr">rezultat vidljiv sada — sad ga nema</div>
      </div>
      <div class="ex">
        <div class="ex-en">I <b>lost</b> my wallet yesterday.</div>
        <span class="ex-arr">PS</span>
        <div class="ex-hr">specifično — "yesterday" = točan trenutak</div>
      </div>
      <div class="ex">
        <div class="ex-en">She <b class="pc">has lived</b> here for 10 years.</div>
        <span class="ex-arr">PP</span>
        <div class="ex-hr">traje od prošlosti do sada — for + PP</div>
      </div>
      <div class="ex">
        <div class="ex-en">She <b>lived</b> there for 10 years.</div>
        <span class="ex-arr">PS</span>
        <div class="ex-hr">završeno — više ne živi tamo</div>
      </div>
      <div class="ex">
        <div class="ex-en">He <b class="pc">has just called</b>.</div>
        <span class="ex-arr">PP</span>
        <div class="ex-hr">just = upravo završena radnja</div>
      </div>
      <div class="ex">
        <div class="ex-en">He <b>called</b> an hour ago.</div>
        <span class="ex-arr">PS</span>
        <div class="ex-hr">ago = specifično prošlo → PS</div>
      </div>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">📡 matura radar — zamke i gdje se pojavljuju</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>PP + yesterday/ago/last — NIKAD!</b><br><em>I have seen him yesterday.</em> ❌ → <em>I <b style="color:var(--lime)">saw</b> him yesterday.</em> ✓<br>yesterday/ago/last = specifično završeno → UVIJEK PS</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Krivi past participle (koristiti PS oblik)</b><br><em>I have <b>went</b> there.</em> ❌ → <em>I have <b style="color:var(--violet)">gone</b> there.</em> ✓<br><em>She has <b>saw</b> it.</em> ❌ → <em>She has <b style="color:var(--violet)">seen</b> it.</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>for vs since zamjena</b><br><em>since three years</em> ❌ → <em><b style="color:var(--amber)">for</b> three years</em> ✓<br><em>for 2019</em> ❌ → <em><b style="color:var(--amber)">since</b> 2019</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>have vs has — he/she/it!</b><br><em>She <b>have</b> seen it.</em> ❌ → <em>She <b style="color:var(--violet)">has</b> seen it.</em> ✓<br>he/she/it = has · I/you/we/they = have</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>yet/already pozicija u rečenici</b><br><em>already</em> ide između have/has i PP: <em>I have <b>already</b> eaten.</em> ✓<br><em>yet</em> ide na kraju: <em>She hasn't arrived <b>yet</b>.</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Gap fill:</b> signal word → PP ili PS? → have/has → irregular PP?<br><b>MCQ:</b> eliminiraj PS s PP signal words → provjeri have/has → PP oblik<br><b>Error correction:</b> went/saw/wrote umjesto gone/seen/written · since three years</div></div>
      </div>
    </div>

    <!-- WHY NOT THE OTHER TENSE -->
    <hr class="divider">
    <div class="sec-label">// zašto NIJE drugi odgovor?</div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "I <em style="color:var(--red)">have seen</em> him yesterday." — zašto nije PP?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: I saw him yesterday.</b><br>"yesterday" = specifično završeno vrijeme → UVIJEK Past Simple. PP NIKAD ne ide s yesterday/ago/last week/in [godina]. Ovo je apsolutno pravilo — bez iznimke.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "She has <em style="color:var(--red)">went</em> to the shops." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: She has gone to the shops.</b><br>Nakon <b>has/have</b> uvijek ide <b>past participle</b>, ne past simple. go→went (PS) ali go→<b>gone</b> (PP). "went" je past simple oblik — nema mjesta iza has/have.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "I have known her <em style="color:var(--red)">since</em> ten years." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: I have known her for ten years.</b><br><b>since</b> + točka u prošlosti (since 2010, since Monday) · <b>for</b> + trajanje (for 10 years, for a week). "ten years" = trajanje → mora biti <b>for</b>.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "Have you ever <em style="color:var(--red)">ate</em> sushi?" — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: Have you ever eaten sushi?</b><br>Nakon have/has = past participle. eat → ate (PS) ali eat → <b>eaten</b> (PP). "ate" je past simple oblik — krivi oblik iza have.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "She <em style="color:var(--red)">has lived</em> there for 10 years, but she moved to London last year." — zašto sad PS?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Prva rečenica bi trebala biti PS: She lived there for 10 years.</b><br>Ako je radnja <b>završena</b> (više ne živi tamo — "moved last year") → PS. PP koristimo samo kad radnja <b>još traje</b>. "last year" u drugoj rečenici potvrđuje da je sve završeno.</div>
    </div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "I have known her <em style="color:var(--red)">since</em> ten years." — zašto nije since?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: I have known her for ten years.</b><br><b>since</b> + točka u prošlosti (since 2010, since Monday, since last year)<br><b>for</b> + trajanje (for 10 years, for a week, for ages)<br>"ten years" = trajanje → mora biti <b>for</b>. "Since ten years" je jedna od najtipičnijih grešaka na maturi — izgleda logično ali je uvijek krivo. Test: pitaj se "How long?" → for · "Since when?" → since.</div>
    </div>

    <!-- DECISION TREE -->
    <hr class="divider">
    <div class="sec-label">// decision tree — PP ili PS?</div>
    <div class="dtree">
      <div class="dt-node question">❓ <strong>Korak 1:</strong> Vidiš <b>yesterday / ago / last week / in [godina]</b>?</div>
      <div class="dt-row">
        <div class="dt-branch"><div class="dt-node yes-ps">✅ DA → <strong>Past Simple</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· NIKAD PP s ovim riječima!</small></div></div>
        <div class="dt-connector">NE ↓</div>
      </div>
      <div class="dt-indent">
        <div class="dt-node question">❓ <strong>Korak 2:</strong> Vidiš <b>already / yet / just / ever / never / recently</b>?</div>
        <div class="dt-row">
          <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>Present Perfect</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· have/has + past participle</small></div></div>
          <div class="dt-connector">NE ↓</div>
        </div>
        <div class="dt-indent">
          <div class="dt-node question">❓ <strong>Korak 3:</strong> Vidiš <b>for / since</b>?</div>
          <div class="dt-row">
            <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>Present Perfect</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· for + trajanje · since + točka</small></div></div>
            <div class="dt-connector">NE ↓</div>
          </div>
          <div class="dt-indent">
            <div class="dt-node question">❓ <strong>Korak 4:</strong> Je li to iskustvo u životu (ever/never/before) ili rezultat vidljiv sada?</div>
            <div class="dt-row">
              <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>Present Perfect</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· nema točnog vremena → PP</small></div></div>
              <div class="dt-connector">NE ↓</div>
            </div>
            <div class="dt-indent">
              <div class="dt-node yes-ps">📌 Vjerojatno <strong>Past Simple</strong> — specifična završena radnja u prošlosti.</div>
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
    <div class="kbd-hint">⌨️ Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor · Speed drill: <span class="kbd">P</span> = Past Simple · <span class="kbd">R</span> = Present Perfect</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 · pp signal word · already</div><div class="q-text">I _______ (see) that film. It's great!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> already saw</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> have already seen</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> have already saw</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> already have seen</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 · pp · for · radnja još traje</div><div class="q-text">She _______ (live) in this city for ten years.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> lived</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">B</span> have lived</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">C</span> has lived</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> is living</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 · ps vs pp · yesterday</div><div class="q-text">She _______ (go) to the market yesterday.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> has gone</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> have gone</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> went</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> has went</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 · pp · yet · question</div><div class="q-text">_______ he _______ (finish) his project yet?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> Did … finish</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> Have … finished</div><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">C</span> Has … finished</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> Has … finish</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 · pp · never · iskustvo</div><div class="q-text">They _______ (be) to Australia. They'd love to go.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> never went</div><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">B</span> have never been</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> have never went</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> never been</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 · pp · since</div><div class="q-text">He _______ (work) for that company since 2020.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> worked</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">B</span> have worked</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">C</span> has worked</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> is working</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 · pp · just · nedavna radnja</div><div class="q-text">She _______ (arrive). She's still at the door!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> just arrived</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">B</span> has just arrived</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> have just arrived</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> just has arrived</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 · ps vs pp · last night</div><div class="q-text">I _______ (see) a great concert last night.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> have seen</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> has seen</div><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">C</span> saw</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> have saw</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 · pp · ever · iskustvo · pitanje</div><div class="q-text">_______ you ever _______ (eat) Indian food?</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> Did … ate</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">B</span> Have … ate</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">C</span> Have … eaten</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> Has … eaten</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 · pp · yet · negativ · irregular PP</div><div class="q-text">They _______ (write) the report yet.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> didn't write</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> haven't wrote</div><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">C</span> haven't written</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> hasn't written</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">↺ Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">🏆</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje završeno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">03 · Present Perfect<br>Nastavi na Poglavlje 04 →</div>
      </div>
    </div>

    <!-- SPEED DRILL -->
    <hr class="divider">
    <div class="sec-label">// ⚡ speed recognition drill — PS ili PP?</div>
    <p class="prose" style="margin-bottom:6px">10 rečenica. Odaberi što brže možeš. <span style="font-family:var(--mono);font-size:12px;color:var(--t3)">Keyboard: <span style="color:var(--t2)">P</span> = Past Simple · <span style="color:var(--t2)">R</span> = pResent peRfect</span></p>
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
      <div class="err-item"><div class="err-sent">"I have seen him yesterday at the park."</div><button class="err-btn" onclick="showErrFix('ef1',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef1">✅ <span class="correct">I saw him yesterday at the park.</span><span class="explain">"yesterday" = specifično završeno → UVIJEK Past Simple. PP nikad ne ide s yesterday/ago/last.</span></div></div>
      <div class="err-item"><div class="err-sent">"She has went to the shops. She'll be back soon."</div><button class="err-btn" onclick="showErrFix('ef2',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef2">✅ <span class="correct">She has gone to the shops.</span><span class="explain">Nakon has/have = <b>past participle</b>. go → went (PS) ali go → <b>gone</b> (PP). "went" je krivi oblik.</span></div></div>
      <div class="err-item"><div class="err-sent">"He has worked here since five years."</div><button class="err-btn" onclick="showErrFix('ef3',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef3">✅ <span class="correct">He has worked here for five years.</span><span class="explain"><b>since</b> + točka u prošlosti (since 2010, since Monday) · <b>for</b> + trajanje (for 5 years). "five years" = trajanje → for.</span></div></div>
      <div class="err-item"><div class="err-sent">"Have you ever ate Japanese food?"</div><button class="err-btn" onclick="showErrFix('ef4',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef4">✅ <span class="correct">Have you ever eaten Japanese food?</span><span class="explain">Nakon have/has = past participle. eat → ate (PS) ali eat → <b>eaten</b> (PP). "ate" je past simple oblik — krivi iza have.</span></div></div>
      <div class="err-item"><div class="err-sent">"She have finished her homework already."</div><button class="err-btn" onclick="showErrFix('ef5',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef5">✅ <span class="correct">She has finished her homework already.</span><span class="explain"><em>She</em> = he/she/it → PP: <b>has</b> (ne have). have koristimo za I/you/we/they. she + has.</span></div></div>
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
        <li class="m-item"><div class="m-dot"></div><span><b>PP tvorba:</b> have (I/you/we/they) / has (he/she/it) + past participle.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PP signal words:</b> already, yet, just, ever, never, for, since, recently, so far.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>PS signal words (NIKAD PP):</b> yesterday, ago, last week/year, in 2010, specific time.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>for + trajanje:</b> for 3 years, for a week. <b>since + točka:</b> since 2010, since Monday.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>already</b> između have i PP · <b>yet</b> na kraju rečenice · <b>just</b> između have i PP.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Irregular PP:</b> gone, seen, written, done, been, taken, given, eaten, spoken, broken.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Krivi PP oblik:</b> have went ❌ → have gone ✓ · have saw ❌ → have seen ✓.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>have vs has:</b> She have... ❌ → She has... ✓. He/she/it uvijek has!</span></li>
      </ul>
    </div>

    <!-- FILL IN THE BLANK -->
    <div class="sec-label" style="margin-top:32px">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upiši ispravni oblik glagola. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 · pp · already · irregular · (see)</div><div class="fitb-sent">I _______ already _______ (see) that documentary. It's very interesting.</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="have seen" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','have already seen','pp-already')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','have already seen','pp-already')">Check</button></div><div class="fitb-fb" id="f1fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 · pp · for · irregular · (know)</div><div class="fitb-sent">He _______ (know) her for three years.</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="has known" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','has known','pp-for')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','has known','pp-for')">Check</button></div><div class="fitb-fb" id="f2fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 · ps vs pp · ago · irregular · (buy)</div><div class="fitb-sent">She _______ (buy) that car two years ago.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="bought" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','bought','ps-ago')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','bought','ps-ago')">Check</button></div><div class="fitb-fb" id="f3fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 · pp · never · irregular · (eat)</div><div class="fitb-sent">She _______ never _______ (eat) sushi before.</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="has never eaten" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','has never eaten','pp-never')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','has never eaten','pp-never')">Check</button></div><div class="fitb-fb" id="f4fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 · pp · just · regular · (arrive)</div><div class="fitb-sent">They _______ just _______ (arrive). They're still at the door.</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="have just arrived" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','have just arrived','pp-just')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','have just arrived','pp-just')">Check</button></div><div class="fitb-fb" id="f5fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 · pp · since · regular · (work)</div><div class="fitb-sent">We _______ (work) on this project since Monday.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="have worked" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','have worked','pp-since')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','have worked','pp-since')">Check</button></div><div class="fitb-fb" id="f6fb" aria-live="polite"></div></div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint — znaš li stvarno razliku?</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kada koristim PP a kada PS?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>PP = nema točnog vremena / veza s danas / radnja još traje.</b><br><b>PS = specifično završeno vrijeme (yesterday, ago, last week).</b><br>Ključno: PP NIKAD s yesterday/ago/last! Te riječi = automatski PS.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako znam koristiti for ili since?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>for = trajanje</b> (for 3 years, for a week, for ages)<br><b>since = točka u prošlosti</b> (since 2010, since Monday, since I was young)<br>Test: "How long?" → for · "Since when?" → since<br>GREŠKA: since three years ❌ → for three years ✓</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Gdje stoje already, yet i just u rečenici?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>already</b> → između have/has i PP: <em>I have <b>already</b> eaten.</em><br><b>just</b> → između have/has i PP: <em>She has <b>just</b> called.</em><br><b>yet</b> → na kraju rečenice: <em>They haven't finished <b>yet</b>. / Have you done it <b>yet</b>?</em></div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Što je razlika između "I have been to Paris" i "I have gone to Paris"?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>have been to</b> = bio sam i vratio se: <em>I have been to Paris.</em> (sad sam ovdje, ali bio sam tamo)<br><b>have gone to</b> = otišao je i još nije tu: <em>He has gone to Paris.</em> (još je tamo!)<br>Na maturi: "She isn't here — she has <b>gone</b> to the shops." (otišla, još nije se vratila)</div></div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>"This morning" — PP ili PS? Kako odlučujem?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Ovisi je li jutro još trajalo kad si govorio!</b><br><b>PP</b> → ako jutro još traje: <em>I have drunk two coffees <b>this morning</b>.</em> (govorimo ujutro)<br><b>PS</b> → ako jutro je gotovo: <em>I drank two coffees <b>this morning</b>.</em> (govorimo navečer)<br><br>Na maturi niže razine: ako kontekst ne specificira → PP je sigurniji odgovor uz "this morning/week/year".<br>Isti princip vrijedi za: <em>this week, this year, today</em> — sve može biti PP ako period još traje.</div></div>

    <!-- QUICK EXAM SUMMARY -->
    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item"><div class="qes-tag gap">// gap fill</div><div class="qes-steps"><b>1.</b> Vidiš already/yet/just/ever/never/for/since → PP · <b>2.</b> Vidiš yesterday/ago/last → PS · <b>3.</b> have ili has (he/she/it → has) · <b>4.</b> Regular ili irregular PP?</div></div>
      <div class="qes-item"><div class="qes-tag mcq">// multiple choice</div><div class="qes-steps"><b>1.</b> Eliminiraj PS s PP signal words · <b>2.</b> Provjeri have/has (she have ❌) · <b>3.</b> Provjeri PP oblik (have went ❌) · <b>4.</b> for/since zamjena (since 3 years ❌)</div></div>
      <div class="qes-item"><div class="qes-tag err">// error correction</div><div class="qes-steps">Provjeri: <b>PP + yesterday/ago</b> ❌ · <b>have went/saw</b> → gone/seen ❌ · <b>since + trajanje</b> ❌ · <b>she have</b> → she has ❌ · <b>yet pozicija</b></div></div>
    </div>

    <!-- NEXT CHAPTERS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo &amp; sljedeći koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter04.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">04 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Future: will &amp; going to</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Izražavanje budućnosti — will vs going to</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter02.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 02</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Past Simple &amp; Continuous</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Ponovi PS — najčešća zamka s PP</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter07.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">07 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pasiv</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">PP pasiv: <em style="color:var(--violet)">has/have been + past participle</em></div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter06.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">06 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Conditionals 0, 1, 2</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">PP u if-rečenicama: <em style="color:var(--violet)">If you have finished…</em></div>
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
      <a href="chapter02.html" class="nav-btn">← Chapter 02</a>
      <a href="chapter04.html" class="nav-btn primary">Next chapter →</a>
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

// ── QUIZ ──────────────────────────────────────────
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'already' = signal za PP. have (I) + past participle: seen. Already uvijek ide između have i PP.",w:"✗ Netočno. 'already' = signal za PP → have/has + past participle. Točan odgovor: have already seen."},
  q2:{c:"✓ Točno. 'for ten years' + radnja još traje = PP. She = he/she/it → has. live → lived (regular).",w:"✗ Netočno. 'for' + trajanje koje još traje = PP. She = he/she/it → has lived. Točan odgovor: has lived."},
  q3:{c:"✓ Točno. 'yesterday' = točno određeno vrijeme u prošlosti = PS. go → went (irregular).",w:"✗ Netočno. 'yesterday' = specifično završeno vrijeme → PS (ne PP). go → went. Točan odgovor: went."},
  q4:{c:"✓ Točno. 'yet' na kraju pitanja = signal za PP. Have/has za pitanje: Has he finished yet?",w:"✗ Netočno. 'yet' u pitanjima/negativima = PP. He = he/she/it → Has. finish → finished. Točan odgovor: Has … finished."},
  q5:{c:"✓ Točno. 'never' = signal za PP (iskustvo). They → have. be → been (irregular PP).",w:"✗ Netočno. 'never' = PP za iskustvo. They → have been. Točan odgovor: have never been."},
  q6:{c:"✓ Točno. 'since 2020' = PP (od točke u prošlosti do sada). He = he/she/it → has. work → worked.",w:"✗ Netočno. 'since' + točka u prošlosti = PP (traje do sada). He → has worked. Točan odgovor: has worked."},
  q7:{c:"✓ Točno. 'just' = PP (radnja se upravo završila). She = he/she/it → has. arrive → arrived.",w:"✗ Netočno. 'just' = signal za PP (upravo završena radnja). She → has just arrived. Točan odgovor: has just arrived."},
  q8:{c:"✓ Točno. 'last night' = specifično završeno vrijeme u prošlosti = PS. see → saw (irregular).",w:"✗ Netočno. 'last night' = specifični trenutak u prošlosti → PS (ne PP). see → saw. Točan odgovor: saw."},
  q9:{c:"✓ Točno. 'ever' u pitanju = PP za iskustvo. you → Have you ever + past participle: eaten.",w:"✗ Netočno. 'ever' u pitanjima = PP za iskustvo. eat → eaten (irregular PP). Točan odgovor: Have … eaten."},
  q10:{c:"✓ Točno. 'yet' u negativu = PP. They → haven't. write → written (irregular PP).",w:"✗ Netočno. 'yet' u negativima = PP. They → haven't written. write → written (ne 'wrote'!). Točan odgovor: haven't written."}
};
var FITB={
  'pp-already': "'already' = signal za PP. I → have. see → seen (irregular PP).",
  'pp-for':     "'for three years' + traje do sada = PP. He = he/she/it → has. know → known (irregular PP).",
  'ps-ago':     "'two days ago' = specifično završeno → PS. buy → bought (irregular PS).",
  'pp-never':   "'never' = PP za iskustvo. She = he/she/it → has. eat → eaten (irregular PP).",
  'pp-just':    "'just' = PP (upravo završena). They → have. arrive → arrived (regular).",
  'pp-since':   "'since Monday' = PP (od točke u prošlosti). We → have. work → worked (regular)."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch03',ok);
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
      correct>=7?'Good. Fokusiraj se na PS vs PP razliku i signal words.':
      correct>=5?'Vrati se na Learn — for/since i signal words.':
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
  if(e.key.toLowerCase()==='p'){var b=document.querySelector('#sdq-wrap .sd-btn.pp');if(b&&b.style.pointerEvents!=='none')sdAns('pp');}
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

// ── PP PARTICIPLE DRILL (sv-drill adapted) ────────
var ppAnswered={},ppCorrect=0,ppTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(ppAnswered[id])return;
  ppAnswered[id]=true;
  if(isCorrect)ppCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){
    el.classList.add('sv-correct');
    if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! Past participle: <strong>'+correctForm+'</strong>';}
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});
    if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točan past participle: <strong>'+correctForm+'</strong>';}
  }
  if(Object.keys(ppAnswered).length===ppTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=ppCorrect+'/'+ppTotal;
      document.getElementById('sv-score-lbl').textContent=
        ppCorrect===5?'Savršen! Past participles su ti jasni. 🎉':
        ppCorrect>=4?'Odlično! Još malo ponavljanja.':
        ppCorrect>=3?'Dobro — ali ponovi tablicu past participles.':
        'Vrati se na tablicu i nauči past participles napamet.';
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
  {s:"I ___ that film. It's amazing — you should watch it! (see)", ans:"pp",exp:"Nema točnog vremena — iskustvo s rezultatom (preporuka!). see→seen → have seen."},
  {s:"Oh no! I ___ my wallet at home. I have no money! (leave)",   ans:"pp",exp:"Rezultat vidljiv sada (nema novca) → PP. He→has left. Nema signal worda — samo kontekst!"},
  {s:"They ___ in this city for 20 years. (live)",                 ans:"pp",exp:"'for 20 years' + još traju → PP. They→have lived."},
  {s:"He ___ his keys. He can't find them anywhere. (lose)",       ans:"pp",exp:"Rezultat vidljiv sada (ne može naći) → PP. He→has lost."},
  {s:"The match started at 3 pm. At 4 pm, she ___. (arrive)",      ans:"ps",exp:"Specifični trenutak u prošlosti (at 4 pm) → PS. arrive→arrived."},
  {s:"She phoned me, but I ___ the answer then. (not know)",       ans:"ps",exp:"'then' = specifični prošli trenutak → PS. didn't know."},
  {s:"She ___ just ___ home. She's still in the hallway. (come)",  ans:"pp",exp:"'just' = upravo završena, rezultat vidljiv (još u hodniku) → PP. She→has just come."},
  {s:"They ___ their homework yet. (not finish)",                  ans:"pp",exp:"'yet' u negativu = uvijek PP. They→haven't finished."},
  {s:"He ___ in that company since 2015. (work)",                  ans:"pp",exp:"'since' + točka u prošlosti = PP traje do sada. He→has worked."},
  {s:"I ___ two coffees before the meeting started. (drink)",      ans:"ps",exp:"'before the meeting started' = specifično završeno u prošlosti → PS. drink→drank."}
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
      sc>=6?'Dobro! Fokusiraj se na signal words — posebno for/since vs ago/last.':
      'Ponovi Learn tab — PS vs PP razliku.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn ps" onclick="sdAns(\\'ps\\')" tabindex="0">Past Simple <span style="font-size:10px;opacity:.4">[P]</span></div>'+
    '<div class="sd-btn pp" onclick="sdAns(\\'pp\\')" tabindex="0">Present Perfect <span style="font-size:10px;opacity:.4">[R]</span></div>'+
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
  setTimeout(function(){sdState.idx++;renderSD();},1600);
}

// Speed drill keyboard: P = Past Simple, R = Present Perfect
document.addEventListener('keydown',function(e){
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap||!wrap.querySelector('.sd-btn'))return;
  var ps=wrap.querySelector('.sd-btn.ps');
  var pp=wrap.querySelector('.sd-btn.pp');
  if(e.key.toLowerCase()==='p'&&ps&&ps.style.pointerEvents!=='none')sdAns('ps');
  if(e.key.toLowerCase()==='r'&&pp&&pp.style.pointerEvents!=='none')sdAns('pp');
});

// ── MOBILE DRAWER ─────────────────────────────────
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

// ── LOCALSTORAGE ──────────────────────────────────
function saveProgress(){try{localStorage.setItem('maturix_ch03_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch03_tabs')||'null');
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
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initSpeedDrill();

</script>`;

const CH03_JS = `// TRACKER: bilježi pogreške
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

// ── QUIZ ──────────────────────────────────────────
var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'already' = signal za PP. have (I) + past participle: seen. Already uvijek ide između have i PP.",w:"✗ Netočno. 'already' = signal za PP → have/has + past participle. Točan odgovor: have already seen."},
  q2:{c:"✓ Točno. 'for ten years' + radnja još traje = PP. She = he/she/it → has. live → lived (regular).",w:"✗ Netočno. 'for' + trajanje koje još traje = PP. She = he/she/it → has lived. Točan odgovor: has lived."},
  q3:{c:"✓ Točno. 'yesterday' = točno određeno vrijeme u prošlosti = PS. go → went (irregular).",w:"✗ Netočno. 'yesterday' = specifično završeno vrijeme → PS (ne PP). go → went. Točan odgovor: went."},
  q4:{c:"✓ Točno. 'yet' na kraju pitanja = signal za PP. Have/has za pitanje: Has he finished yet?",w:"✗ Netočno. 'yet' u pitanjima/negativima = PP. He = he/she/it → Has. finish → finished. Točan odgovor: Has … finished."},
  q5:{c:"✓ Točno. 'never' = signal za PP (iskustvo). They → have. be → been (irregular PP).",w:"✗ Netočno. 'never' = PP za iskustvo. They → have been. Točan odgovor: have never been."},
  q6:{c:"✓ Točno. 'since 2020' = PP (od točke u prošlosti do sada). He = he/she/it → has. work → worked.",w:"✗ Netočno. 'since' + točka u prošlosti = PP (traje do sada). He → has worked. Točan odgovor: has worked."},
  q7:{c:"✓ Točno. 'just' = PP (radnja se upravo završila). She = he/she/it → has. arrive → arrived.",w:"✗ Netočno. 'just' = signal za PP (upravo završena radnja). She → has just arrived. Točan odgovor: has just arrived."},
  q8:{c:"✓ Točno. 'last night' = specifično završeno vrijeme u prošlosti = PS. see → saw (irregular).",w:"✗ Netočno. 'last night' = specifični trenutak u prošlosti → PS (ne PP). see → saw. Točan odgovor: saw."},
  q9:{c:"✓ Točno. 'ever' u pitanju = PP za iskustvo. you → Have you ever + past participle: eaten.",w:"✗ Netočno. 'ever' u pitanjima = PP za iskustvo. eat → eaten (irregular PP). Točan odgovor: Have … eaten."},
  q10:{c:"✓ Točno. 'yet' u negativu = PP. They → haven't. write → written (irregular PP).",w:"✗ Netočno. 'yet' u negativima = PP. They → haven't written. write → written (ne 'wrote'!). Točan odgovor: haven't written."}
};
var FITB={
  'pp-already': "'already' = signal za PP. I → have. see → seen (irregular PP).",
  'pp-for':     "'for three years' + traje do sada = PP. He = he/she/it → has. know → known (irregular PP).",
  'ps-ago':     "'two days ago' = specifično završeno → PS. buy → bought (irregular PS).",
  'pp-never':   "'never' = PP za iskustvo. She = he/she/it → has. eat → eaten (irregular PP).",
  'pp-just':    "'just' = PP (upravo završena). They → have. arrive → arrived (regular).",
  'pp-since':   "'since Monday' = PP (od točke u prošlosti). We → have. work → worked (regular)."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch03',ok);
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
      correct>=7?'Good. Fokusiraj se na PS vs PP razliku i signal words.':
      correct>=5?'Vrati se na Learn — for/since i signal words.':
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
  if(e.key.toLowerCase()==='p'){var b=document.querySelector('#sdq-wrap .sd-btn.pp');if(b&&b.style.pointerEvents!=='none')sdAns('pp');}
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

// ── PP PARTICIPLE DRILL (sv-drill adapted) ────────
var ppAnswered={},ppCorrect=0,ppTotal=5;
function svAns(el,id,isCorrect,correctForm){
  if(ppAnswered[id])return;
  ppAnswered[id]=true;
  if(isCorrect)ppCorrect++;
  var opts=el.closest('.sv-opts').querySelectorAll('.sv-opt');
  opts.forEach(function(o){o.style.pointerEvents='none'});
  var fb=document.getElementById(id+'fb');
  if(isCorrect){
    el.classList.add('sv-correct');
    if(fb){fb.className='sv-fb ok show';fb.innerHTML='✓ Točno! Past participle: <strong>'+correctForm+'</strong>';}
  } else {
    el.classList.add('sv-wrong');
    opts.forEach(function(o){if(o!==el)o.classList.add('sv-reveal');});
    if(fb){fb.className='sv-fb no show';fb.innerHTML='✗ Netočno. Točan past participle: <strong>'+correctForm+'</strong>';}
  }
  if(Object.keys(ppAnswered).length===ppTotal){
    var box=document.getElementById('sv-score-box');
    if(box){
      document.getElementById('sv-score-num').textContent=ppCorrect+'/'+ppTotal;
      document.getElementById('sv-score-lbl').textContent=
        ppCorrect===5?'Savršen! Past participles su ti jasni. 🎉':
        ppCorrect>=4?'Odlično! Još malo ponavljanja.':
        ppCorrect>=3?'Dobro — ali ponovi tablicu past participles.':
        'Vrati se na tablicu i nauči past participles napamet.';
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
  {s:"I ___ that film. It's amazing — you should watch it! (see)", ans:"pp",exp:"Nema točnog vremena — iskustvo s rezultatom (preporuka!). see→seen → have seen."},
  {s:"Oh no! I ___ my wallet at home. I have no money! (leave)",   ans:"pp",exp:"Rezultat vidljiv sada (nema novca) → PP. He→has left. Nema signal worda — samo kontekst!"},
  {s:"They ___ in this city for 20 years. (live)",                 ans:"pp",exp:"'for 20 years' + još traju → PP. They→have lived."},
  {s:"He ___ his keys. He can't find them anywhere. (lose)",       ans:"pp",exp:"Rezultat vidljiv sada (ne može naći) → PP. He→has lost."},
  {s:"The match started at 3 pm. At 4 pm, she ___. (arrive)",      ans:"ps",exp:"Specifični trenutak u prošlosti (at 4 pm) → PS. arrive→arrived."},
  {s:"She phoned me, but I ___ the answer then. (not know)",       ans:"ps",exp:"'then' = specifični prošli trenutak → PS. didn't know."},
  {s:"She ___ just ___ home. She's still in the hallway. (come)",  ans:"pp",exp:"'just' = upravo završena, rezultat vidljiv (još u hodniku) → PP. She→has just come."},
  {s:"They ___ their homework yet. (not finish)",                  ans:"pp",exp:"'yet' u negativu = uvijek PP. They→haven't finished."},
  {s:"He ___ in that company since 2015. (work)",                  ans:"pp",exp:"'since' + točka u prošlosti = PP traje do sada. He→has worked."},
  {s:"I ___ two coffees before the meeting started. (drink)",      ans:"ps",exp:"'before the meeting started' = specifično završeno u prošlosti → PS. drink→drank."}
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
      sc>=6?'Dobro! Fokusiraj se na signal words — posebno for/since vs ago/last.':
      'Ponovi Learn tab — PS vs PP razliku.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  wrap.innerHTML='<div class="sd-q">'+
    '<div class="sd-sent">'+q.s+'</div>'+
    '<div class="sd-btns">'+
    '<div class="sd-btn ps" onclick="sdAns(\\'ps\\')" tabindex="0">Past Simple <span style="font-size:10px;opacity:.4">[P]</span></div>'+
    '<div class="sd-btn pp" onclick="sdAns(\\'pp\\')" tabindex="0">Present Perfect <span style="font-size:10px;opacity:.4">[R]</span></div>'+
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
  setTimeout(function(){sdState.idx++;renderSD();},1600);
}

// Speed drill keyboard: P = Past Simple, R = Present Perfect
document.addEventListener('keydown',function(e){
  var wrap=document.getElementById('sdq-wrap');
  if(!wrap||!wrap.querySelector('.sd-btn'))return;
  var ps=wrap.querySelector('.sd-btn.ps');
  var pp=wrap.querySelector('.sd-btn.pp');
  if(e.key.toLowerCase()==='p'&&ps&&ps.style.pointerEvents!=='none')sdAns('ps');
  if(e.key.toLowerCase()==='r'&&pp&&pp.style.pointerEvents!=='none')sdAns('pp');
});

// ── MOBILE DRAWER ─────────────────────────────────
function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

// ── LOCALSTORAGE ──────────────────────────────────
function saveProgress(){try{localStorage.setItem('maturix_ch03_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch03_tabs')||'null');
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
