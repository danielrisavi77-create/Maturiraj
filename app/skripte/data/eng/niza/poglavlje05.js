// Maturiraj.hr — Engleski niža razina · Poglavlje 5
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function ENG_NIZA_CH05({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  useLayoutEffect(() => {
    navRef.current = { onBack, onNext, onPrev, onNavigate };
  }, [onBack, onNext, onPrev, onNavigate]);

  useEffect(() => {
    const styleId = "skripta-ch05-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH05_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch05-js";
    scriptEl.textContent = CH05_JS;
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
      if (num === 6 && nav.onNext) nav.onNext();
      else if (num === 4 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch05-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch05-root"
      dangerouslySetInnerHTML={{ __html: CH05_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH05_CSS = `
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

const CH05_BODY = `<div class="shell">

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
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
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
  <div class="sb-item" onclick="window.location='chapter04.html'" style="cursor:pointer"><span class="sb-dot"></span> 04 &middot; Futur: will i going to</div>
  <div class="sb-item active"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
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
  <div class="sb-footer">05 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter04.html'" style="cursor:pointer">← chapters</span>
    <span class="bc-sep">/</span><span>grammar</span>
    <span class="bc-sep">/</span><span class="bc-active">modal-verbs</span>
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
      <div class="hero-eyebrow">chapter 05 / 15 · grammar</div>
      <h1 class="hero-title">Modal <span>Verbs</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~35 min</span>
        <span class="hero-badge hb-level">niža razina</span>
        <span class="hero-badge hb-chapter">05 / 12</span>
      </div>
      <p class="hero-sub">can · must · should · may · might · have to · mustn't vs don't have to</p>
      <div class="progress-track"><div class="progress-bar" style="width:41%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-lime">can / could</span>
      <span class="pill pill-red">must / have to</span>
      <span class="pill pill-amber">should</span>
      <span class="pill pill-violet">may / might</span>
      <span class="pill pill-sky">mustn't vs don't have to</span>
    </div>

    <div class="sec-label">// at a glance — svi modalni glagoli</div>
    <div class="modal-grid">
      <div class="modal-card">
        <div class="modal-name">can</div>
        <div class="modal-meaning">sposobnost · mogućnost · dozvola</div>
        <div class="modal-ex">She <span>can</span> speak French.</div>
        <div class="modal-neg">can't = ne može / nije moguće</div>
      </div>
      <div class="modal-card sky">
        <div class="modal-name">could</div>
        <div class="modal-meaning">prošla sposobnost · učtivi zahtjev</div>
        <div class="modal-ex">He <span>could</span> swim at age 5. / <span>Could</span> I help?</div>
        <div class="modal-neg">couldn't = nije mogao</div>
      </div>
      <div class="modal-card" style="border-color:var(--red-border)">
        <div class="modal-name" style="color:var(--red)">must</div>
        <div class="modal-meaning">jaka obveza · logički zaključak</div>
        <div class="modal-ex">You <span style="color:var(--red)">must</span> stop. / He <span style="color:var(--red)">must</span> be tired.</div>
        <div class="modal-neg" style="color:var(--amber)">mustn't = zabranjeno (≠ don't have to!)</div>
      </div>
      <div class="modal-card" style="border-color:var(--amber-border)">
        <div class="modal-name" style="color:var(--amber)">have to</div>
        <div class="modal-meaning">vanjska obveza · propis</div>
        <div class="modal-ex">I <span style="color:var(--amber)">have to</span> wear a uniform.</div>
        <div class="modal-neg" style="color:var(--green)">don't have to = nije obvezno</div>
      </div>
      <div class="modal-card amber">
        <div class="modal-name">should</div>
        <div class="modal-meaning">savjet · preporuka</div>
        <div class="modal-ex">You <span>should</span> see a doctor.</div>
        <div class="modal-neg">shouldn't = ne bi trebao</div>
      </div>
      <div class="modal-card violet">
        <div class="modal-name">may</div>
        <div class="modal-meaning">formalna dozvola · mogućnost</div>
        <div class="modal-ex"><span>May</span> I come in? / It <span>may</span> rain.</div>
        <div class="modal-neg">may not = možda neće</div>
      </div>
      <div class="modal-card violet">
        <div class="modal-name">might</div>
        <div class="modal-meaning">slaba mogućnost (možda)</div>
        <div class="modal-ex">It <span>might</span> snow tonight.</div>
        <div class="modal-neg">might not = možda neće</div>
      </div>
      <div class="modal-card sky">
        <div class="modal-name">could</div>
        <div class="modal-meaning">mogućnost · učtiva dozvola</div>
        <div class="modal-ex"><span>Could</span> you help me please?</div>
        <div class="modal-neg">couldn't = ne bi mogao</div>
      </div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck lime">Zlatno pravilo</div><div class="cv">Modalni glagoli + goli infinitiv <code>(bez "to")</code> — UVIJEK, bez -s za he/she/it</div></div>
      <div class="concept-row"><div class="ck red">must vs have to</div><div class="cv"><code>must</code> = unutarnja obveza (ja mislim da treba) · <code>have to</code> = vanjska obveza (pravilo, zakon)</div></div>
      <div class="concept-row"><div class="ck red">mustn't vs don't have to</div><div class="cv"><code>mustn't</code> = ZABRANJENO (ne smiješ!) · <code>don't have to</code> = nije obvezno (ali možeš)</div></div>
      <div class="concept-row"><div class="ck amber">should</div><div class="cv">Savjet/preporuka — slabije od must. <code>You should eat less sugar.</code> = savjetujem ti</div></div>
      <div class="concept-row"><div class="ck violet">may vs might</div><div class="cv"><code>may</code> = 50% mogućnost · <code>might</code> = manja mogućnost (30%) · oba = možda</div></div>
      <div class="concept-row"><div class="ck sky">can't (logičko)</div><div class="cv">can't be = sigurno nije točno (logička nemogućnost): <code>That can't be right!</code></div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// ako zapamtiš samo ovo — 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🧠 panic-proof — 3 rules that cover 90% of exam questions</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Svi modalni + goli infinitiv</b> — nikad "to", nikad -s: <b style="color:var(--lime)">She can swim</b> ✓ (ne "cans", ne "can to swim")</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>mustn't ≠ don't have to</b> — najčešća zamka: <b style="color:var(--red)">mustn't</b> = zabranjeno · <b style="color:var(--green)">don't have to</b> = nije obvezno</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Kontekst određuje modal:</b> obveza → must/have to · savjet → should · mogućnost → may/might · zabrana → mustn't</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Što je zajedničko svim modalnim glagolima?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>3 zlatna pravila za sve modalne:</b><br>1. <b>Naked infinitive</b> — bez "to": <span class="ok">She must go.</span> &#x274C; She must to go.<br>2. <b>Nema -s za he/she/it</b>: <span class="ok">He can swim.</span> &#x274C; He cans swim.<br>3. <b>Nema do/does</b> u pitanjima: <span class="ok">Can she swim?</span> &#x274C; Does she can swim?</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Razlika između mustn't i don't have to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>mustn't</b> = ZABRANJENO — ne smije&#353; to raditi!<br><span class="ok">You mustn't smoke here.</span> = Zabranjeno je pu&#353;iti.<br><br><b>don't have to</b> = NIJE OBVEZNO — slobodan si.<br><span class="ok">You don't have to wear a tie.</span> = Nije potrebno.<br>&#x26A0; Ovo je NAJTIPIČNIJA zamka na maturi!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Razlika između must i have to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b>must</b> = unutarnja obveza (osobno osje&#263;am da treba):<br><span class="ok">I must call Mum.</span> = Osobno mislim da moram.<br><br><b>have to</b> = vanjska obveza (pravilo, zakon):<br><span class="ok">I have to wear a uniform.</span> = Pravilo je.<br>Na maturi: fokus je na <b>mustn't vs don't have to</b>!</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Kako izraziti mogućnost — may, might ili could?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b style="color:var(--violet)">may</b> ≈ 50% mogućnost: <em>It may rain tomorrow.</em><br>
        <b style="color:var(--violet)">might</b> ≈ 30% mogućnost (manje sigurno): <em>It might rain tomorrow.</em><br>
        <b style="color:var(--sky)">could</b> = mogućnost ili učtivi zahtjev: <em>Could you help me?</em><br><br>
        Na maturi niže razine: may i might su uglavnom zamjenjivi. Oba znače "možda".
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch04: will i modalni glagoli — isti obrazac?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Da! will je i sam modalni glagol — isti obrazac:</b><br>
        will + bez "to": <em>She will go.</em><br>
        can + bez "to": <em>She can go.</em><br>
        must + bez "to": <em>She must go.</em><br><br>
        Sve što vrijedi za will (nema -s, nema "to", nema do/does) vrijedi i za can/must/should/may/might.
      </div>
    </div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch06: koji modali se koriste u conditionals?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">C1 → <b>will</b> (ch04): <span class="ok">If it rains, I <b>will</b> stay.</span><br>C2 → <b>would</b>: <span class="ok">If I won, I <b>would</b> buy a house.</span><br>Oba: modal + bez "to" (goli infinitiv), nema -s za he/she/it</div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol — 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">🚨 if you panic on the exam — do this</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Je li to <b>zabrana</b>? → <b style="color:var(--red)">mustn't</b> · Je li to <b>nije obvezno</b>? → <b style="color:var(--green)">don't have to</b></div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Je li to <b>savjet</b>? → <b style="color:var(--amber)">should</b> · Je li to <b>jaka obveza</b>? → <b style="color:var(--red)">must / have to</b></div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Je li to <b>mogućnost / možda</b>? → <b style="color:var(--violet)">may / might</b> · <b>sposobnost</b>? → <b style="color:var(--lime)">can</b></div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text">modal + go / swim / leave &mdash; nikad <b>bez &ldquo;to&rdquo;</b>, nikad <b>-s</b></div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">have to se mijenja: I/you/we/they <b>have to</b> · he/she/it <b>has to</b> · prošlost: <b>had to</b></div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter04.html" class="nav-btn">← Chapter 04</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn more →</span>
    </div>
  </div>

  <!-- ══════════ LAYER 1 — LEARN ══════════ -->
  <div class="layer" id="l1">

    <div class="sec-label">// zlatno pravilo — tvorba svih modalnih glagola</div>
    <p class="prose">Svi modalni glagoli dijele isti obrazac tvorbe. Nauči ovo jednom — vrijedi za sve.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">MOD</div>
        <div><div class="gram-title">Modalni glagoli — opća tvorba</div><div class="gram-sub">positive · negative · question</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'Pozitiv: Subjekt + modal + bez "to" — svi subjekti jednaki, nema -s')">copy</button>
          <span class="lbl">+ Pozitiv</span><br>
          <span class="sub">Svi subjekti</span> + <span class="val">modal</span> + <span class="val">infinitiv</span> → She <span class="val">can swim</span>. · He <span class="val">must go</span>.<br>
          <span style="color:var(--red);font-size:12px">❌ She cans swim. / He musts go. → Nema -s za he/she/it uz modalne!</span>
        </div>
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'Negativ: Subjekt + modal + not + infinitiv (can't, won't, mustn't, shouldn't...)')">copy</button>
          <span class="lbl">− Negativ</span><br>
          <span class="sub">Subjekt</span> + <span class="kw">modal + not</span> + <span class="val">infinitiv</span><br>
          can't · won't · mustn't · shouldn't · couldn't · mightn't<br>
          <span style="color:var(--red);font-size:12px">❌ She doesn't can swim. → ✅ She can't swim. (nema do/does!)</span>
        </div>
        <div class="formula">
          <button class="copy-btn" onclick="copyFormula(this,'Pitanje: Modal + subjekt + infinitiv? (Can she swim? Must he go?)')">copy</button>
          <span class="lbl">? Pitanje</span><br>
          <span class="kw">Modal</span> + <span class="sub">subjekt</span> + <span class="val">infinitiv</span>? → <span class="kw">Can</span> she swim? · <span class="kw">Must</span> he go?<br>
          <span style="color:var(--red);font-size:12px">❌ Does she can swim? → ✅ Can she swim? (nema do/does!)</span>
        </div>
        <div class="callout callout-warn" style="margin-top:14px">
          <span class="callout-icon">🚫</span>
          <div class="callout-body">
            <div class="callout-title">3 greške koje se uvijek pojavljuju na ispitu</div>
            <div class="callout-text">
              ❌ <em>She <b>cans</b> swim.</em> → ✅ <em>She <b>can</b> swim.</em> (nema -s!)<br>
              ❌ <em>He <b>must to</b> go.</em> → ✅ <em>He <b>must</b> go.</em> (nema "to"!)<br>
              ❌ <em><b>Does</b> she <b>can</b> swim?</em> → ✅ <em><b>Can</b> she swim?</em> (nema do/does!)
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// can &amp; could — sposobnost, dozvola, zahtjev</div>

    <div class="modal-full">
      <div class="modal-full-head">
        <div class="modal-full-badge" style="background:var(--lime-dim);color:var(--lime);border-color:var(--lime-border)">can / could</div>
        <div><div class="gram-title">can &amp; could</div><div class="gram-sub">ability · permission · request</div></div>
      </div>
      <div class="modal-full-body">
        <div class="modal-row"><div class="modal-lbl">Sposobnost (sadaš.)</div><div class="modal-val"><em>She <b>can</b> speak three languages.</em> · <em>I <b>can't</b> see without glasses.</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Sposobnost (prošlost)</div><div class="modal-val"><em>He <b>could</b> swim when he was four.</em> · <em>She <b>couldn't</b> walk for a week.</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Dozvola (neformalno)</div><div class="modal-val"><em><b>Can</b> I use your phone?</em> · <em>You <b>can</b> leave early today.</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Dozvola (učtivo)</div><div class="modal-val"><em><b>Could</b> I borrow your pen?</em> (učtivije od "Can I")</div></div>
        <div class="modal-row"><div class="modal-lbl">Zahtjev (učtivo)</div><div class="modal-val"><em><b>Could</b> you help me, please?</em> · <em><b>Can</b> you pass the salt?</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Logička nemogućnost</div><div class="modal-val"><em>That <b>can't</b> be right.</em> · <em>She <b>can't</b> be at home — I saw her leave.</em></div></div>
      </div>
    </div>

    <div class="callout callout-info">
      <span class="callout-icon">🔍</span>
      <div class="callout-body">
        <div class="callout-title">Mikro-provjera</div>
        <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
          <div class="reveal-q" style="font-size:13px"><span>Zašto "Does she can swim?" nije točno?</span><span class="reveal-arrow">▼</span></div>
          <div class="reveal-ans">Modalni glagoli <b>sami formiraju pitanja</b> — bez do/does. ✅ <b>Can she swim?</b> (can odmah na početak, bez pomoćnog glagola)</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// must &amp; have to — obveza</div>

    <div class="modal-full">
      <div class="modal-full-head">
        <div class="modal-full-badge" style="background:var(--red-dim);color:var(--red);border-color:var(--red-border)">must / have to</div>
        <div><div class="gram-title">must &amp; have to</div><div class="gram-sub">obligation · necessity</div></div>
      </div>
      <div class="modal-full-body">
        <div class="modal-row"><div class="modal-lbl">must — unutarnja</div><div class="modal-val"><em>I <b>must</b> call Mum.</em> (osjećam da je nužno) · <em>You <b>must</b> try this cake!</em></div></div>
        <div class="modal-row"><div class="modal-lbl">have to — vanjska</div><div class="modal-val"><em>I <b>have to</b> wear a uniform.</em> (pravilo škole) · <em>She <b>has to</b> work on Sundays.</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Logički zaključak</div><div class="modal-val"><em>He worked 16 hours — he <b>must</b> be tired.</em> (sigurno je, na temelju dokaza)</div></div>
        <div class="modal-row"><div class="modal-lbl">have to — promjena</div><div class="modal-val">I/you/we/they <b>have to</b> · he/she/it <b>has to</b> · prošlost: <b>had to</b><br><span style="color:var(--t3);font-size:12px">have to se mijenja po osobama i vremenima — must se ne mijenja!</span></div></div>
        <div class="modal-row"><div class="modal-lbl">Negativ — ZAMKA!</div><div class="modal-val">
          <b style="color:var(--red)">mustn't</b> = ZABRANJENO: <em>You <b>mustn't</b> park here.</em><br>
          <b style="color:var(--green)">don't have to</b> = NIJE OBVEZNO: <em>You <b>don't have to</b> come.</em><br>
          <span style="color:var(--amber);font-size:12px">⚠ Ovo je NAJTIPIČNIJA zamka na maturi!</span>
        </div></div>
      </div>
    </div>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--red-dim);color:var(--red);border-bottom-color:var(--red-border)">mustn't — ZABRANJENO</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Znači</b>Ne smiješ to raditi (zabranjen čin)</div>
          <div class="cmp-row"><b>Primjer</b>You mustn't smoke here.</div>
          <div class="cmp-row"><b>Primjer</b>You mustn't use your phone while driving.</div>
          <div class="cmp-row"><b>Ekvivalent</b>It is forbidden / It is not allowed</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head" style="background:var(--green-dim);color:var(--green);border-bottom-color:var(--green-border)">don't have to — NIJE OBVEZNO</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Znači</b>Nije nužno, slobodan si (možeš ali ne moraš)</div>
          <div class="cmp-row"><b>Primjer</b>You don't have to wear a tie.</div>
          <div class="cmp-row"><b>Primjer</b>She doesn't have to come to the meeting.</div>
          <div class="cmp-row"><b>Ekvivalent</b>It is not necessary / It is optional</div>
        </div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// should — savjet i preporuka</div>

    <div class="modal-full">
      <div class="modal-full-head">
        <div class="modal-full-badge" style="background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)">should</div>
        <div><div class="gram-title">should</div><div class="gram-sub">advice · recommendation · mild obligation</div></div>
      </div>
      <div class="modal-full-body">
        <div class="modal-row"><div class="modal-lbl">Savjet</div><div class="modal-val"><em>You <b>should</b> see a doctor.</em> · <em>You <b>should</b> eat more vegetables.</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Preporuka</div><div class="modal-val"><em>You <b>should</b> visit the old town — it's beautiful!</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Kritika (prošlost)</div><div class="modal-val"><em>You <b>shouldn't</b> have said that.</em> (ne bi trebao bio rekao)</div></div>
        <div class="modal-row"><div class="modal-lbl">Jačina vs must</div><div class="modal-val"><b style="color:var(--amber)">should</b> = savjet (slobodan si odbiti) · <b style="color:var(--red)">must</b> = obveza (nema izbora)</div></div>
      </div>
    </div>

    <hr class="divider">
    <div class="sec-label">// may &amp; might — mogućnost</div>

    <div class="modal-full">
      <div class="modal-full-head">
        <div class="modal-full-badge" style="background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)">may / might</div>
        <div><div class="gram-title">may &amp; might</div><div class="gram-sub">possibility · permission (formal)</div></div>
      </div>
      <div class="modal-full-body">
        <div class="modal-row"><div class="modal-lbl">Mogućnost (may)</div><div class="modal-val"><em>It <b>may</b> rain tomorrow.</em> (~50%) · <em>She <b>may</b> be late.</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Mogućnost (might)</div><div class="modal-val"><em>It <b>might</b> snow tonight.</em> (~30%) · <em>He <b>might</b> not come.</em></div></div>
        <div class="modal-row"><div class="modal-lbl">Formalna dozvola</div><div class="modal-val"><em><b>May</b> I come in?</em> · <em><b>May</b> I use your phone?</em> (formalnije od "Can I")</div></div>
        <div class="modal-row"><div class="modal-lbl">Razlika may/might</div><div class="modal-val">may = malo sigurniji · might = manje siguran. Na maturi niže razine: zamjenjivi su u kontekstu mogućnosti.</div></div>
      </div>
    </div>

    <!-- STRENGTH SCALE -->
    <hr class="divider">
    <div class="sec-label">// skala jačine — od obveze do mogućnosti</div>
    <p class="prose">Modalni glagoli imaju različitu "jačinu" — od apsolutne zabrane/obveze do slabe mogućnosti.</p>
    <div class="strength-grid">
      <div class="str-card">
        <div class="str-label must">// jaka obveza / zabrana</div>
        <div class="str-modals">
          <span class="str-pill must">must</span>
          <span class="str-pill must">have to</span>
          <span class="str-pill must">mustn't</span>
          <span class="str-pill must">can't</span>
        </div>
      </div>
      <div class="str-card">
        <div class="str-label should">// savjet / preporuka</div>
        <div class="str-modals">
          <span class="str-pill should">should</span>
          <span class="str-pill should">shouldn't</span>
          <span class="str-pill should">ought to</span>
        </div>
        <div style="font-family:var(--mono);font-size:10.5px;color:var(--t3);margin-top:8px;padding-top:6px;border-top:1px solid var(--bd);text-align:left"><b style="color:var(--amber)">ought to</b> = sinonim za <b style="color:var(--amber)">should</b> &mdash; <em style="color:var(--t2)">You ought to rest.</em> = <em style="color:var(--t2)">You should rest.</em></div>
      </div>
      <div class="str-card">
        <div class="str-label may">// slaba mogućnost</div>
        <div class="str-modals">
          <span class="str-pill may">may</span>
          <span class="str-pill may">might</span>
          <span class="str-pill may">could</span>
        </div>
      </div>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">📡 matura radar — zamke i gdje se pojavljuju</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>mustn't vs don't have to</b> — najtipičnija zamka ovog poglavlja<br><em>You mustn't come</em> (zabranjeno) ≠ <em>You don't have to come</em> (nije obvezno) — potpuno različita značenja!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Modal + "to" (goli infinitiv zaboRavljen — bez "to"!)</b><br><em>She must to go</em> ❌ → <em>She must go</em> ✓ · <em>He can to swim</em> ❌ → <em>He can swim</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>-s za he/she/it uz modalne</b><br><em>She cans swim</em> ❌ → <em>She can swim</em> ✓ · <em>He shoulds go</em> ❌ → <em>He should go</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>do/does u pitanjima i negativima</b><br><em>Does she can swim?</em> ❌ → <em>Can she swim?</em> ✓ · <em>She doesn't can swim</em> ❌ → <em>She can't swim</em> ✓</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>have to — he/she/it → has to</b><br><em>She have to work</em> ❌ → <em>She has to work</em> ✓ · have to se mijenja, must se ne mijenja!</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Gap fill:</b> kontekst → obveza/zabrana/savjet/mogućnost → odaberi modal<br><b>MCQ:</b> mustn't vs don't have to · modal + to (zamka) · she cans (zamka)<br><b>Error correction:</b> cans · must to · doesn't can · she have to</div></div>
      </div>
    </div>

    <!-- WHY NOT THE OTHER MODAL -->
    <hr class="divider">
    <div class="sec-label">// zašto NIJE drugi odgovor?</div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "You <em style="color:var(--red)">mustn't</em> bring an ID — it's not required." — zašto nije mustn't?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: You don't have to bring an ID.</b><br>"not required" = nije obvezno, ali možeš → <b>don't have to</b>. mustn't = zabranjeno je donijeti — a to ovdje nije slučaj. Ključna fraza: "not required / not necessary / optional" → don't have to.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "She <em style="color:var(--red)">can to</em> speak French." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: She can speak French.</b><br>Modalni glagoli + <b>bez "to"</b> (goli infinitiv) — uvijek. can/must/should/may/might/will.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "You <em style="color:var(--red)">don't have to</em> smoke here — it's forbidden." — zašto nije don't have to?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: You mustn't smoke here.</b><br>"It's forbidden" = zabranjeno je → <b>mustn't</b>. don't have to = nije obvezno (slobodan si). Zabranjeno ≠ nije obvezno — potpuno suprotna značenja.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "I think she <em style="color:var(--red)">must</em> be at home." — je li must točno ovdje?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Da, must je točno — ali znači "sigurno je"!</b><br><em>She must be at home.</em> = Sigurno je doma (logički zaključak na temelju dokaza).<br>must za logički zaključak ≠ must za obvezu. Kontekst određuje: "I think she must be" = logički zaključak, ne obveza.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "She <em style="color:var(--red)">have to</em> work every Saturday." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: She has to work every Saturday.</b><br>have to se mijenja po osobama! he/she/it → <b>has to</b> (ne "have to"). must se ne mijenja (She must work ✓), ali have to se ponaša kao običan glagol.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "You <em style="color:var(--red)">should</em> wear a seatbelt — it's the law!" — zašto nije should?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: You must wear a seatbelt. / You have to wear a seatbelt.</b><br>should = savjet (možeš odbiti). "It's the law!" = zakon, stroga obveza → <b>must / have to</b>. should bi sugeriralo da je to samo preporuka, a ne zakonska obveza.</div>
    </div>

    <!-- MODAL DRILL -->
    <hr class="divider">
    <div class="sec-label">// modal drill — odaberi ispravni modal</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Klikni na ispravni modal. Pazi na kontekst!</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">You _______ drive faster — the speed limit is 50 km/h here. (zabrana)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'m1',false,'mustn't')">don't have to</div><div class="sv-opt" onclick="svAns(this,'m1',true,'mustn't')">mustn't</div><div class="sv-opt" onclick="svAns(this,'m1',false,'mustn't')">shouldn't</div></div><div class="sv-fb" id="m1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">She _______ play the piano really well when she was young. (prošla sposobnost)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'m2',false,'could')">can</div><div class="sv-opt" onclick="svAns(this,'m2',true,'could')">could</div><div class="sv-opt" onclick="svAns(this,'m2',false,'could')">must</div></div><div class="sv-fb" id="m2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">You look pale. You _______ see a doctor. (savjet)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'m3',false,'should')">must</div><div class="sv-opt" onclick="svAns(this,'m3',true,'should')">should</div><div class="sv-opt" onclick="svAns(this,'m3',false,'should')">can</div></div><div class="sv-fb" id="m3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">The exam is optional — you _______ take it if you don't want to. (nije obvezno)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'m4',false,'don't have to')">mustn't</div><div class="sv-opt" onclick="svAns(this,'m4',true,'don't have to')">don't have to</div><div class="sv-opt" onclick="svAns(this,'m4',false,'don't have to')">can't</div></div><div class="sv-fb" id="m4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">I'm not sure where she is — she _______ be at the library. (slaba mogućnost)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'m5',false,'might')">must</div><div class="sv-opt" onclick="svAns(this,'m5',true,'might')">might</div><div class="sv-opt" onclick="svAns(this,'m5',false,'might')">should</div></div><div class="sv-fb" id="m5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <!-- DECISION TREE -->
    <hr class="divider">
    <div class="sec-label">// koji modal? &mdash; brza tablica</div>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:4px">
      <table style="width:100%;border-collapse:collapse;font-size:13px">
        <thead>
          <tr style="background:var(--bg-elevated)">
            <th style="padding:9px 14px;text-align:left;font-weight:600;color:var(--t2);border-bottom:1px solid var(--bd);width:52%">&#x2753; Osje&#263;a&#353; u re&#269;enici&hellip;</th>
            <th style="padding:9px 14px;text-align:left;font-weight:600;color:var(--t2);border-bottom:1px solid var(--bd)">&#x2192; Koristi</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 14px;color:var(--t1)"><b>Zabrana</b> &mdash; ne smije&#353; to raditi</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--red)">mustn't</span></td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 14px;color:var(--t1)"><b>Obveza</b> &mdash; mora&#353; (pravilo, zakon, osobno)</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--red)">must / have to</span> <span style="font-size:11px;color:var(--t3)">(he/she/it: has to)</span></td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 14px;color:var(--t1)"><b>Nije obvezno</b> &mdash; ne mora&#353;, slobodan si</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--lime)">don't have to</span></td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 14px;color:var(--t1)"><b>Savjet</b> &mdash; trebao bi / ne bi trebao</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--sky)">should / shouldn't</span></td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 14px;color:var(--t1)"><b>Sposobnost</b> &mdash; zna&#353; / mo&#382;e&#353; ne&#353;to raditi</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--lime)">can</span> <span style="font-size:11px;color:var(--t3)">(pro&#353;lost: could)</span></td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 14px;color:var(--t1)"><b>Mogu&#263;nost</b> &mdash; mo&#382;da, nije sigurno</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--violet)">may / might</span> <span style="font-size:11px;color:var(--t3)">(may ~50% &middot; might ~30%)</span></td>
          </tr>
          <tr style="border-bottom:1px solid var(--bd)">
            <td style="padding:9px 14px;color:var(--t1)"><b>Dozvola</b> &mdash; smije&#353; li ne&#353;to?</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--lime)">can / may</span> <span style="font-size:11px;color:var(--t3)">(may = formalnije)</span></td>
          </tr>
          <tr>
            <td style="padding:9px 14px;color:var(--t1)"><b>Logi&#269;ki zaklju&#269;ak</b> &mdash; sigurno jest / nije</td>
            <td style="padding:9px 14px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--red)">must be</span> / <span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--red)">can't be</span> <span style="font-size:11px;color:var(--t3)">(He must be tired.)</span></td>
          </tr>
        </tbody>
      </table>
      <div style="padding:8px 14px;background:var(--amber-dim);border-top:1px solid var(--amber-border)">
        <span style="font-size:12px;color:var(--amber)">&#x26A0; Najtipičnija zamka: <b>mustn't</b> (zabranjeno!) &#x2260; <b>don't have to</b> (nije obvezno). Razli&#269;ita zna&#269;enja!</span>
      </div>
    </div>
<div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Quick view</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Practice →</span>
    </div>
  </div>

  <!-- ══════════ LAYER 2 — PRACTICE ══════════ -->
  <div class="layer" id="l2">
    <div class="quiz-intro"><strong>// exam mode</strong> · Odaberi točan modal. Svaki odgovor dolazi s objašnjenjem. Target: <strong>8/10</strong> ili bolje.</div>
    <div class="kbd-hint">⌨️ Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor · Speed drill: tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span> biraju modal</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 · can · sposobnost</div><div class="q-text">She _______ (can) swim across the whole lake. She's very strong.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> cans swim</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> can swim</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> can to swim</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> can swimming</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 · must · obveza / zakon</div><div class="q-text">You _______ stop at a red light. It's the law.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> should</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">B</span> must</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">C</span> might</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> don't have to</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 · should · savjet</div><div class="q-text">You look really tired. You _______ take a rest.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> must</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">B</span> should</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">C</span> can</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> have to</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 · can't · logička nemogućnost</div><div class="q-text">That _______ be the right answer — it doesn't make any sense!</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> mustn't</div><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">B</span> can't</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">C</span> shouldn't</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> might not</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 · have to · vanjska obveza · he/she/it</div><div class="q-text">She _______ show her passport at the border. It's compulsory.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">A</span> have to show</div><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">B</span> has to show</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> must to show</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> should shows</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 · had to · prošlost must · vanjska obveza</div><div class="q-text">Yesterday the roads were icy, so we _______ drive very slowly.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> must</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">B</span> should</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">C</span> had to</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> have to</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 · mustn't · zabrana</div><div class="q-text">You _______ in this area — there's a strict no-smoking sign.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> don't have to smoke</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">B</span> mustn't smoke</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">C</span> shouldn't to smoke</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> couldn't smoke</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 · might · slaba mogućnost</div><div class="q-text">Take an umbrella — it _______ rain later. The sky looks grey.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">A</span> must</div><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">B</span> might</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">C</span> should</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> have to</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 · don't have to · nije obvezno</div><div class="q-text">It's a casual office — you _______ wear a suit every day.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> mustn't wear</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">B</span> don't have to wear</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">C</span> can't wear</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> shouldn't wear</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 · could · prošla sposobnost</div><div class="q-text">When he was young, he _______ run a marathon in under 3 hours.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> can</div><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">B</span> could</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">C</span> must</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> should</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">↺ Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">🏆</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje završeno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">05 · Modal glagoli<br>Nastavi na Poglavlje 06 →</div>
      </div>
    </div>

    <!-- SPEED DRILL -->
    <hr class="divider">
    <div class="sec-label">// ⚡ speed recognition drill — koji modal?</div>
    <p class="prose" style="margin-bottom:6px">10 rečenica, 3 opcije. Odaberi ispravni modal što brže možeš. <span style="font-family:var(--mono);font-size:12px;color:var(--t3)">Tipke <span style="color:var(--t2)">1</span> <span style="color:var(--t2)">2</span> <span style="color:var(--t2)">3</span> = brzi unos</span></p>
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
      <div class="err-item"><div class="err-sent">"She cans speak three languages fluently."</div><button class="err-btn" onclick="showErrFix('ef1',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef1">✅ <span class="correct">She can speak three languages fluently.</span><span class="explain">Modalni glagoli <b>nemaju -s za he/she/it</b>. "cans" ne postoji — uvijek "can" za sve subjekte.</span></div></div>
      <div class="err-item"><div class="err-sent">"You must to finish your homework before going out."</div><button class="err-btn" onclick="showErrFix('ef2',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef2">✅ <span class="correct">You must finish your homework before going out.</span><span class="explain">Modalni glagoli + <b>bez "to"</b> (goli infinitiv). must/can/should/may/might.</span></div></div>
      <div class="err-item"><div class="err-sent">"You mustn't bring your ID — it's not compulsory."</div><button class="err-btn" onclick="showErrFix('ef3',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef3">✅ <span class="correct">You don't have to bring your ID.</span><span class="explain">"not compulsory" = nije obvezno → <b>don't have to</b>. mustn't = zabranjeno. Ovdje nije zabranjeno donijeti — samo nije potrebno.</span></div></div>
      <div class="err-item"><div class="err-sent">"Does she can drive? I need a lift."</div><button class="err-btn" onclick="showErrFix('ef4',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef4">✅ <span class="correct">Can she drive?</span><span class="explain">Modalni glagoli <b>sami formiraju pitanje</b> — bez do/does/did. "Does she can" je uvijek greška.</span></div></div>
      <div class="err-item"><div class="err-sent">"She have to work on weekends. Her boss insists."</div><button class="err-btn" onclick="showErrFix('ef5',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef5">✅ <span class="correct">She has to work on weekends.</span><span class="explain">have to se mijenja! he/she/it → <b>has to</b>. must se ne mijenja (She must work ✓), ali have to je "običan" glagol koji se mijenja.</span></div></div>
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
        <li class="m-item"><div class="m-dot"></div><span><b>Zlatno pravilo:</b> modal + bez "to" (goli infinitiv, bez -s za he/she/it, bez do/does).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>mustn't = ZABRANJENO</b> · <b>don't have to = NIJE OBVEZNO</b> — potpuno različita značenja!</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>must vs have to:</b> must = unutarnja nužnost · have to = vanjsko pravilo (he/she/it → has to).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>should</b> = savjet/preporuka. Slabije od must — nema apsolutne obveze.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>can't be</b> = logička nemogućnost (sigurno nije). <b>must be</b> = logički zaključak (sigurno jest).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>may / might</b> = mogućnost/možda. may (~50%) · might (~30%). Na maturi uglavnom zamjenjivi.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>could</b> = prošla sposobnost (could swim) ili učtivi zahtjev (Could you help me?).</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>have to u prošlosti:</b> had to (She had to work yesterday). must nema prošlog oblika.</span></li>
      </ul>
    </div>

    <!-- FILL IN THE BLANK -->
    <div class="sec-label" style="margin-top:32px">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upiši ispravni modal. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 · can · sposobnost · negativ</div><div class="fitb-sent">I _______ (not/see) without my glasses — everything is blurry.</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="can't see" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','can\\'t see','can-ability')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','can\\'t see','can-ability')">Check</button></div><div class="fitb-fb" id="f1fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 · must · jaka unutarnja nužnost</div><div class="fitb-sent">You _______ (try) this cake — it's absolutely delicious!</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="must try" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','must try','must-oblig')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','must try','must-oblig')">Check</button></div><div class="fitb-fb" id="f2fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 · should · savjet</div><div class="fitb-sent">You _______ (study) more if you want to pass the exam.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="should study" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','should study','should-adv')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','should study','should-adv')">Check</button></div><div class="fitb-fb" id="f3fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 · mustn't · zabrana</div><div class="fitb-sent">You _______ (use) your phone during the exam. It's strictly forbidden.</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="mustn't use" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','mustn\\'t use','mustnt-ban')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','mustn\\'t use','mustnt-ban')">Check</button></div><div class="fitb-fb" id="f4fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 · has to · vanjska obveza · he/she/it</div><div class="fitb-sent">He _______ (wear) a suit to work every day. Company policy.</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="has to wear" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','has to wear','have-to-ext')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','has to wear','have-to-ext')">Check</button></div><div class="fitb-fb" id="f5fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 · had to · prošlost must</div><div class="fitb-sent">She _______ (have to / stay) late at the office yesterday. There was a deadline.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="had to stay" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','had to stay','had-to')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','had to stay','had-to')">Check</button></div><div class="fitb-fb" id="f6fb" aria-live="polite"></div></div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint — znaš li stvarno razliku?</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koja je NAJTIPIČNIJA zamka modalnih glagola na maturi?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>mustn't vs don't have to</b> — uvijek na ispitu.<br>mustn't = ZABRANJENO · don't have to = NIJE OBVEZNO<br>Trik: zamijeni s "forbidden" ili "not necessary" — koji odgovara?<br><em>You mustn't park here</em> = parking forbidden ✓ · <em>You don't have to hurry</em> = hurrying not necessary ✓</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Zašto "She cans speak French" uvijek greška?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b style="color:var(--lime)">Modalni glagoli NIKAD ne dobivaju -s za he/she/it.</b><br>She can ✓ · He must ✓ · It should ✓ — uvijek isti oblik za sve subjekte. Ovo vrijedi za: can, must, should, may, might, will, would, could.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako se have to razlikuje od must u tvorbi?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>have to se mijenja, must se ne mijenja:</b><br>I/you/we/they <b>have to</b> go · he/she/it <b>has to</b> go · prošlost: <b>had to</b> go<br>I/you/he/she… <b>must</b> go (uvijek isti!) · must nema prošlog oblika → koristimo <b>had to</b></div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch04: zašto will i modalni glagoli imaju iste probleme?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>will je i sam modalni glagol!</b> Isti obrazac za sve:<br>will/can/must/should/may/might + bez "to" (goli infinitiv)<br>Nema -s za he/she/it ni uz jedan od njih.<br>Nema do/does u pitanjima/negativima ni uz jedan od njih.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch06: koji modali se pojavljuju u conditionals?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Modalni glagoli su ključni za conditionals:</b><br>First Conditional: If + PS, <b>will</b> + inf. → <em>If it rains, I will stay home.</em><br>Second Conditional: If + PS past, <b>would</b> + inf. → <em>If I were rich, I would travel.</em><br>would = modalni glagol (isti obrazac — bez "to", nema -s, nema do/does)</div></div>

    <!-- QUICK EXAM SUMMARY -->
    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item"><div class="qes-tag gap">// gap fill</div><div class="qes-steps"><b>1.</b> Kontekst → zabrana(mustn't) / obveza(must/have to) / savjet(should) / mogućnost(may/might) / sposobnost(can) · <b>2.</b> Naked infinitive provjera · <b>3.</b> he/she/it → has to (ne have to!)</div></div>
      <div class="qes-item"><div class="qes-tag mcq">// multiple choice</div><div class="qes-steps"><b>1.</b> Odmah eliminiraj "cans/musts" i "must to/can to" opcije · <b>2.</b> mustn't vs don't have to — provjeri kontekst (forbidden vs not necessary) · <b>3.</b> Provjeri she have to vs she has to</div></div>
      <div class="qes-item"><div class="qes-tag err">// error correction</div><div class="qes-steps">Provjeri: <b>cans/shoulds</b> (-s na modalni) ❌ · <b>must to / can to</b> ("to" iza modalnog) ❌ · <b>does she can</b> (do/does uz modalni) ❌ · <b>she have to</b> (→ has to) ❌ · <b>mustn't umjesto don't have to</b> ❌</div></div>
    </div>

    <!-- NEXT CHAPTERS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo &amp; sljedeći koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter06.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">06 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Conditionals 0, 1, 2</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">will i would u conditionals — isti obrazac: bez "to"</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter04.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 04</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Future: will &amp; going to</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">will je modalni — isti obrazac kao can/must/should</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter07.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">07 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pasiv</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Modalni pasiv: can be done, must be shown</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">12</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2)">Višestruki izbor — taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Eliminacija cans/must to u MCQ</div>
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
      <a href="chapter04.html" class="nav-btn">← Chapter 04</a>
      <a href="chapter06.html" class="nav-btn primary">Next chapter →</a>
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

var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'can' = sposobnost/mogućnost. She can swim = sposobna je plivati. can + naked infinitive.",w:"✗ Netočno. can = sposobnost → can + naked infinitive (bez 'to', bez -s za he/she/it). Točan odgovor: can swim."},
  q2:{c:"✓ Točno. 'must' = obveza/nužnost (jako). You must stop = stroga obveza (propis, zakon).",w:"✗ Netočno. must = jaka obveza (pravilo, zakon, nužnost). Točan odgovor: must stop."},
  q3:{c:"✓ Točno. 'should' = savjet/preporuka. You should see a doctor = preporučujem ti to.",w:"✗ Netočno. should = savjet, preporuka, ono što je mudro napraviti. Točan odgovor: should see."},
  q4:{c:"✓ Točno. 'can't' = nemoguće (logička nemogućnost). That can't be right = nije moguće da je točno.",w:"✗ Netočno. can't (logical impossibility) = nemoguće je, sigurno nije tako. Točan odgovor: can't be."},
  q5:{c:"✓ Točno. 'have to' = vanjska obveza (propis, pravilo koje netko drugi nametnuo). You have to show your passport = pravilo je.",w:"✗ Netočno. have to = vanjska obveza (propis, zakon, nešto što moraš jer to zahtijeva situacija). Točan odgovor: have to show."},
  q6:{c:"✓ Točno. 'had to' = prošlost od must/have to. Yesterday + obveza → had to. must nema prošlog oblika.",w:"✗ Netočno. Prošla obveza = had to (prošlost od must/have to). 'Yesterday' + situacija koja je tražila određeno ponašanje → had to. must/have to = sadašnjost. Točan odgovor: had to."},
  q7:{c:"✓ Točno. 'mustn't' = zabrana (ne smiješ). You mustn't smoke here = zabranjeno je.",w:"✗ Netočno. mustn't = zabrana (ne smiješ). don't have to = nije potrebno (ali možeš). Točan odgovor: mustn't smoke."},
  q8:{c:"✓ Točno. 'might' = slaba mogućnost (možda, nije sigurno). It might rain = možda će, nisam siguran.",w:"✗ Netočno. might = slaba mogućnost (manje sigurno od may/could). Točan odgovor: might rain."},
  q9:{c:"✓ Točno. 'don't have to' = nije nužno/obvezno (ali možeš ako hoćeš). Not compulsory.",w:"✗ Netočno. don't have to = nije obvezno (slobodan si). mustn't = zabranjeno. Točan odgovor: don't have to wear."},
  q10:{c:"✓ Točno. 'could' = prošla sposobnost (bio je sposoban) ili politan zahtjev. He could swim = bio je sposoban plivati.",w:"✗ Netočno. could = prošla sposobnost (past of can) ili učtivi zahtjev. Točan odgovor: could swim."}
};
var FITB={
  'can-ability':  "can = sposobnost/mogućnost → can + naked infinitive. can't = ne može.",
  'must-oblig':   "must = jaka unutarnja obveza ili nužnost → must + naked infinitive.",
  'should-adv':   "should = savjet, preporuka → should + naked infinitive.",
  'mustnt-ban':   "mustn't = zabrana (ne smiješ) → mustn't + naked infinitive.",
  'have-to-ext':  "have to = vanjska obveza (propis) → have to + infinitiv. He/she/it = has to.",
  'might-poss':   "might = slaba mogućnost (možda) → might + naked infinitive.",
  'had-to':       "must nema prošlog oblika → koristimo had to. had to + infinitiv (svi subjekti jednaki)."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch05',ok);
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
      correct>=7?'Good. Fokusiraj se na mustn\\'t vs don\\'t have to razliku.':
      correct>=5?'Vrati se na Learn — značenja modalnih glagola.':
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
  if(!wrap||!wrap.querySelector('.sd-btn'))return;
  var btns=wrap.querySelectorAll('.sd-btn');
  if(e.key==='1'&&btns[0])btns[0].click();
  if(e.key==='2'&&btns[1])btns[1].click();
  if(e.key==='3'&&btns[2])btns[2].click();
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
        drillCorrect===5?'Savršen! Modalni glagoli su ti jasni. 🎉':
        drillCorrect>=4?'Odlično! Još malo.':
        drillCorrect>=3?'Dobro — ponovi mustn\\'t vs don\\'t have to.':
        'Vrati se na tablicu modalnih glagola.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);
  });
}

var SD=[
  {s:"You ___ drive on the right in Croatia. It's the law.",   opts:["must","should","might"], ans:0, exp:"must = jaka obveza/zakon. Vožnja s desne strane = zakon → must."},
  {s:"I'm not sure, but she ___ be at home now.",              opts:["must","might","can't"], ans:1, exp:"might = slaba mogućnost (nisam siguran). 'I'm not sure' = signal za might."},
  {s:"You ___ smoke in here — it's strictly forbidden.",       opts:["don't have to","mustn't","shouldn't"], ans:1, exp:"mustn't = zabrana (ne smiješ). Forbidden = mustn't, ne 'don't have to'."},
  {s:"That ___ be Tom — he's in London this week!",           opts:["must","can't","might"], ans:1, exp:"can't = logička nemogućnost. Zna se da je u Londonu → nemoguće je da je to on."},
  {s:"You ___ wear a uniform at this school, it's optional.",  opts:["mustn't","don't have to","can't"], ans:1, exp:"don't have to = nije obvezno (ali možeš ako hoćeš). mustn't = zabranjeno."},
  {s:"When she was a child, she ___ play the violin beautifully.", opts:["can","could","should"], ans:1, exp:"could = prošla sposobnost (bila je sposobna u prošlosti). can = sadašnjost. could je past od can."},
  {s:"You look tired. You ___ take a break.",                  opts:["must","can't","should"], ans:2, exp:"should = savjet/preporuka. 'You look tired' + preporuka = should."},
  {s:"___ I borrow your pen for a moment? I need to write something.", opts:["Must","Could","Should"], ans:1, exp:"Could I...? = učtivi zahtjev za dopuštenjem (učtivije od 'Can I'). Must = obveza, Should = savjet."},
  {s:"It's warm inside. You ___ wear your coat.",              opts:["mustn't","don't have to","can't"], ans:1, exp:"don't have to = nije potrebno (ali slobodan si). Nije zabrana!"},
  {s:"She ___ be the new teacher — she looks too young!",      opts:["can't","mustn't","shouldn't"], ans:0, exp:"can't = logička nemogućnost (na temelju dokaza — izgleda premlade). can't be = sigurno nije."}
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
      sc>=6?'Dobro! Fokusiraj se na mustn\\'t vs don\\'t have to.':
      'Ponovi Learn tab — značenja modalnih glagola.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  var btnsHtml=q.opts.map(function(o,i){
    return '<div class="sd-btn" style="background:var(--bg-input);border:1px solid var(--bd-mid);color:var(--t2);border-radius:var(--r2);padding:10px 18px;font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex:1;text-align:center;transition:all .15s" onclick="sdAns('+i+')" tabindex="0">'+o+' <span style="font-size:10px;opacity:.4">['+(i+1)+']</span></div>';
  }).join('');
  wrap.innerHTML='<div class="sd-q"><div class="sd-sent">'+q.s+'</div><div class="sd-btns" style="display:flex;gap:8px;flex-wrap:wrap">'+btnsHtml+'</div><div class="sd-fb" id="sdfb" aria-live="polite"></div></div>';
}

function sdAns(idx){
  var q=SD[sdState.idx];
  var ok=idx===q.ans;
  sdState.results.push(ok);
  var btns=document.querySelectorAll('#sdq-wrap .sd-btn');
  btns.forEach(function(b,i){
    b.style.pointerEvents='none';b.setAttribute('tabindex','-1');
    if(i===q.ans)b.style.background='var(--green)';b.style.color='#080B10';
  });
  btns[idx].style.background=ok?'var(--green)':'var(--red-dim)';
  btns[idx].style.color=ok?'#080B10':'var(--red)';
  btns[idx].style.borderColor=ok?'var(--green)':'var(--red-border)';
  if(!ok){btns[q.ans].style.background='var(--green-dim)';btns[q.ans].style.color='var(--green)';btns[q.ans].style.borderColor='var(--green-border)';}
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1700);
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch05_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch05_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){tabDone[i]=true;
          var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');
          var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');
        }
      });
    }
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initSpeedDrill();

</script>`;

const CH05_JS = `// TRACKER: bilježi pogreške
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

var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. 'can' = sposobnost/mogućnost. She can swim = sposobna je plivati. can + naked infinitive.",w:"✗ Netočno. can = sposobnost → can + naked infinitive (bez 'to', bez -s za he/she/it). Točan odgovor: can swim."},
  q2:{c:"✓ Točno. 'must' = obveza/nužnost (jako). You must stop = stroga obveza (propis, zakon).",w:"✗ Netočno. must = jaka obveza (pravilo, zakon, nužnost). Točan odgovor: must stop."},
  q3:{c:"✓ Točno. 'should' = savjet/preporuka. You should see a doctor = preporučujem ti to.",w:"✗ Netočno. should = savjet, preporuka, ono što je mudro napraviti. Točan odgovor: should see."},
  q4:{c:"✓ Točno. 'can't' = nemoguće (logička nemogućnost). That can't be right = nije moguće da je točno.",w:"✗ Netočno. can't (logical impossibility) = nemoguće je, sigurno nije tako. Točan odgovor: can't be."},
  q5:{c:"✓ Točno. 'have to' = vanjska obveza (propis, pravilo koje netko drugi nametnuo). You have to show your passport = pravilo je.",w:"✗ Netočno. have to = vanjska obveza (propis, zakon, nešto što moraš jer to zahtijeva situacija). Točan odgovor: have to show."},
  q6:{c:"✓ Točno. 'had to' = prošlost od must/have to. Yesterday + obveza → had to. must nema prošlog oblika.",w:"✗ Netočno. Prošla obveza = had to (prošlost od must/have to). 'Yesterday' + situacija koja je tražila određeno ponašanje → had to. must/have to = sadašnjost. Točan odgovor: had to."},
  q7:{c:"✓ Točno. 'mustn't' = zabrana (ne smiješ). You mustn't smoke here = zabranjeno je.",w:"✗ Netočno. mustn't = zabrana (ne smiješ). don't have to = nije potrebno (ali možeš). Točan odgovor: mustn't smoke."},
  q8:{c:"✓ Točno. 'might' = slaba mogućnost (možda, nije sigurno). It might rain = možda će, nisam siguran.",w:"✗ Netočno. might = slaba mogućnost (manje sigurno od may/could). Točan odgovor: might rain."},
  q9:{c:"✓ Točno. 'don't have to' = nije nužno/obvezno (ali možeš ako hoćeš). Not compulsory.",w:"✗ Netočno. don't have to = nije obvezno (slobodan si). mustn't = zabranjeno. Točan odgovor: don't have to wear."},
  q10:{c:"✓ Točno. 'could' = prošla sposobnost (bio je sposoban) ili politan zahtjev. He could swim = bio je sposoban plivati.",w:"✗ Netočno. could = prošla sposobnost (past of can) ili učtivi zahtjev. Točan odgovor: could swim."}
};
var FITB={
  'can-ability':  "can = sposobnost/mogućnost → can + naked infinitive. can't = ne može.",
  'must-oblig':   "must = jaka unutarnja obveza ili nužnost → must + naked infinitive.",
  'should-adv':   "should = savjet, preporuka → should + naked infinitive.",
  'mustnt-ban':   "mustn't = zabrana (ne smiješ) → mustn't + naked infinitive.",
  'have-to-ext':  "have to = vanjska obveza (propis) → have to + infinitiv. He/she/it = has to.",
  'might-poss':   "might = slaba mogućnost (možda) → might + naked infinitive.",
  'had-to':       "must nema prošlog oblika → koristimo had to. had to + infinitiv (svi subjekti jednaki)."
};
var QORDER=['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10'];

function ans(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok; if(ok)correct++; trackAnswer('ch05',ok);
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
      correct>=7?'Good. Fokusiraj se na mustn\\'t vs don\\'t have to razliku.':
      correct>=5?'Vrati se na Learn — značenja modalnih glagola.':
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
  if(!wrap||!wrap.querySelector('.sd-btn'))return;
  var btns=wrap.querySelectorAll('.sd-btn');
  if(e.key==='1'&&btns[0])btns[0].click();
  if(e.key==='2'&&btns[1])btns[1].click();
  if(e.key==='3'&&btns[2])btns[2].click();
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
        drillCorrect===5?'Savršen! Modalni glagoli su ti jasni. 🎉':
        drillCorrect>=4?'Odlično! Još malo.':
        drillCorrect>=3?'Dobro — ponovi mustn\\'t vs don\\'t have to.':
        'Vrati se na tablicu modalnih glagola.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){
    btn.textContent='✓ Kopirano';btn.classList.add('copied');
    setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);
  });
}

var SD=[
  {s:"You ___ drive on the right in Croatia. It's the law.",   opts:["must","should","might"], ans:0, exp:"must = jaka obveza/zakon. Vožnja s desne strane = zakon → must."},
  {s:"I'm not sure, but she ___ be at home now.",              opts:["must","might","can't"], ans:1, exp:"might = slaba mogućnost (nisam siguran). 'I'm not sure' = signal za might."},
  {s:"You ___ smoke in here — it's strictly forbidden.",       opts:["don't have to","mustn't","shouldn't"], ans:1, exp:"mustn't = zabrana (ne smiješ). Forbidden = mustn't, ne 'don't have to'."},
  {s:"That ___ be Tom — he's in London this week!",           opts:["must","can't","might"], ans:1, exp:"can't = logička nemogućnost. Zna se da je u Londonu → nemoguće je da je to on."},
  {s:"You ___ wear a uniform at this school, it's optional.",  opts:["mustn't","don't have to","can't"], ans:1, exp:"don't have to = nije obvezno (ali možeš ako hoćeš). mustn't = zabranjeno."},
  {s:"When she was a child, she ___ play the violin beautifully.", opts:["can","could","should"], ans:1, exp:"could = prošla sposobnost (bila je sposobna u prošlosti). can = sadašnjost. could je past od can."},
  {s:"You look tired. You ___ take a break.",                  opts:["must","can't","should"], ans:2, exp:"should = savjet/preporuka. 'You look tired' + preporuka = should."},
  {s:"___ I borrow your pen for a moment? I need to write something.", opts:["Must","Could","Should"], ans:1, exp:"Could I...? = učtivi zahtjev za dopuštenjem (učtivije od 'Can I'). Must = obveza, Should = savjet."},
  {s:"It's warm inside. You ___ wear your coat.",              opts:["mustn't","don't have to","can't"], ans:1, exp:"don't have to = nije potrebno (ali slobodan si). Nije zabrana!"},
  {s:"She ___ be the new teacher — she looks too young!",      opts:["can't","mustn't","shouldn't"], ans:0, exp:"can't = logička nemogućnost (na temelju dokaza — izgleda premlade). can't be = sigurno nije."}
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
      sc>=6?'Dobro! Fokusiraj se na mustn\\'t vs don\\'t have to.':
      'Ponovi Learn tab — značenja modalnih glagola.';
    document.getElementById('sd-score-box').classList.add('show');
    return;
  }
  var q=SD[sdState.idx];
  var btnsHtml=q.opts.map(function(o,i){
    return '<div class="sd-btn" style="background:var(--bg-input);border:1px solid var(--bd-mid);color:var(--t2);border-radius:var(--r2);padding:10px 18px;font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex:1;text-align:center;transition:all .15s" onclick="sdAns('+i+')" tabindex="0">'+o+' <span style="font-size:10px;opacity:.4">['+(i+1)+']</span></div>';
  }).join('');
  wrap.innerHTML='<div class="sd-q"><div class="sd-sent">'+q.s+'</div><div class="sd-btns" style="display:flex;gap:8px;flex-wrap:wrap">'+btnsHtml+'</div><div class="sd-fb" id="sdfb" aria-live="polite"></div></div>';
}

function sdAns(idx){
  var q=SD[sdState.idx];
  var ok=idx===q.ans;
  sdState.results.push(ok);
  var btns=document.querySelectorAll('#sdq-wrap .sd-btn');
  btns.forEach(function(b,i){
    b.style.pointerEvents='none';b.setAttribute('tabindex','-1');
    if(i===q.ans)b.style.background='var(--green)';b.style.color='#080B10';
  });
  btns[idx].style.background=ok?'var(--green)':'var(--red-dim)';
  btns[idx].style.color=ok?'#080B10':'var(--red)';
  btns[idx].style.borderColor=ok?'var(--green)':'var(--red-border)';
  if(!ok){btns[q.ans].style.background='var(--green-dim)';btns[q.ans].style.color='var(--green)';btns[q.ans].style.borderColor='var(--green-border)';}
  var fb=document.getElementById('sdfb');
  fb.className='sd-fb show '+(ok?'ok':'no');
  fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1700);
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch05_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{
    var saved=JSON.parse(localStorage.getItem('maturix_ch05_tabs')||'null');
    if(saved&&Array.isArray(saved)){
      saved.forEach(function(done,i){
        if(done){tabDone[i]=true;
          var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');
          var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');
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
