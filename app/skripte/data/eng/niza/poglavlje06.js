// Maturiraj.hr — Engleski niža razina · Poglavlje 6
// Auto-generated JS modul — sadržaj identičan originalnom HTML fajlu
"use client";
import { useEffect, useRef } from "react";

export default function ENG_NIZA_CH06({ onBack, onNext, onPrev, onNavigate }) {
  const navRef = useRef(null);
  navRef.current = { onBack, onNext, onPrev, onNavigate };

  useEffect(() => {
    const styleId = "skripta-ch06-style";
    if (!document.getElementById(styleId)) {
      const s = document.createElement("style");
      s.id = styleId;
      s.textContent = CH06_CSS;
      document.head.appendChild(s);
    }

    const scriptEl = document.createElement("script");
    scriptEl.id = "skripta-ch06-js";
    scriptEl.textContent = CH06_JS;
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
      if (num === 7 && nav.onNext) nav.onNext();
      else if (num === 5 && nav.onPrev) nav.onPrev();
      else if (nav.onBack) nav.onBack();
    }
    document.addEventListener('click', navInterceptor, true);

    return () => {
      document.removeEventListener('click', navInterceptor, true);
      const el = document.getElementById("skripta-ch06-js");
      if (el) el.remove();
    };
  }, []);

  return (
    <div
      className="skripta-ch06-root"
      dangerouslySetInnerHTML={{ __html: CH06_BODY }}
    />
  );
}

/* ─── CONTENT ─────────────────────────────────────────────── */
const CH06_CSS = `
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

const CH06_BODY = `<div class="shell">

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
  <div class="sb-item active" onclick="closeMobDrawer()"><span class="sb-dot"></span> 06 &middot; Uvjetne rečenice 0, 1, 2</div>
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
  <div class="sb-item" onclick="window.location='chapter05.html'" style="cursor:pointer"><span class="sb-dot"></span> 05 &middot; Modal glagoli</div>
  <div class="sb-item active"><span class="sb-dot"></span> 06 &middot; Uvjetne rečenice 0, 1, 2</div>
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
  <div class="sb-footer">06 / 15 &middot; maturiraj.hr</div>
</nav>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span onclick="window.location='chapter05.html'" style="cursor:pointer">← chapters</span>
    <span class="bc-sep">/</span><span>grammar</span>
    <span class="bc-sep">/</span><span class="bc-active">conditionals-0-1-2</span>
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

  <!-- ══ LAYER 0 ══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 06 / 15 · grammar</div>
      <h1 class="hero-title">Conditionals <span>0, 1 &amp; 2</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~35 min</span>
        <span class="hero-badge hb-level">niža razina</span>
        <span class="hero-badge hb-chapter">06 / 12</span>
      </div>
      <p class="hero-sub">If + PS → PS · If + PS → will · If + PS past → would · unless · were</p>
      <div class="progress-track"><div class="progress-bar" style="width:50%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-sky">Conditional 0</span>
      <span class="pill pill-lime">Conditional 1</span>
      <span class="pill pill-violet">Conditional 2</span>
      <span class="pill pill-amber">unless</span>
      <span class="pill pill-red">will u if klauzuli ❌</span>
    </div>

    <div class="sec-label">// at a glance — 3 uvjetne rečenice</div>
    <div class="cond-compare">
      <div class="cc-card">
        <div class="cc-head c0">Conditional 0</div>
        <div class="cc-row"><b>Kada</b>Opće istine, navike, zakoni prirode</div>
        <div class="cc-row"><b>Formula</b>If + PS → PS</div>
        <div class="cc-row"><b>Primjer</b>If you heat water, it boils.</div>
        <div class="cc-row"><b>Ključno</b>Uvijek istinito</div>
      </div>
      <div class="cc-card">
        <div class="cc-head c1">Conditional 1</div>
        <div class="cc-row"><b>Kada</b>Realna buduća mogućnost</div>
        <div class="cc-row"><b>Formula</b>If + PS → will + inf.</div>
        <div class="cc-row"><b>Primjer</b>If it rains, I will stay home.</div>
        <div class="cc-row"><b>Ključno</b>Može se stvarno dogoditi</div>
      </div>
      <div class="cc-card">
        <div class="cc-head c2">Conditional 2</div>
        <div class="cc-row"><b>Kada</b>Nerealna/hipotetska situacija</div>
        <div class="cc-row"><b>Formula</b>If + Past Simple → would + inf.</div>
        <div class="cc-row"><b>Primjer</b>If I had more money, I would travel.</div>
        <div class="cc-row"><b>Ključno</b>Nije stvarno / malo vjerojatno</div>
      </div>
    </div>

    <div class="sec-label">// key concepts</div>
    <div class="concepts">
      <div class="concept-row"><div class="ck sky">C0 — formula</div><div class="cv"><code>If + Present Simple</code> → <code>Present Simple</code> · za opće istine i navike</div></div>
      <div class="concept-row"><div class="ck lime">C1 — formula</div><div class="cv"><code>If + Present Simple</code> → <code>will + infinitiv</code> · realna buduća situacija</div></div>
      <div class="concept-row"><div class="ck violet">C2 — formula</div><div class="cv"><code>If + Past Simple</code> → <code>would + infinitiv</code> · nerealna/hipotetska situacija</div></div>
      <div class="concept-row"><div class="ck red">Zamka br. 1</div><div class="cv">NIKAD <code>will</code> u <b>if klauzuli</b>! → <span style="color:var(--red)">If it will rain</span> ❌ → <span style="color:var(--lime)">If it rains</span> ✓</div></div>
      <div class="concept-row"><div class="ck amber">unless</div><div class="cv"><code>unless</code> = <code>if not</code> · isti obrazac kao C1: Unless + PS → will · <em>Unless you study, you will fail.</em></div></div>
      <div class="concept-row"><div class="ck violet">C2 — were</div><div class="cv">U C2 koristimo <code>were</code> za SVE subjekte: <em>If I <b>were</b> you…</em> · <em>If she <b>were</b> here…</em></div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// ako zapamtiš samo ovo — 3 pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🧠 panic-proof — 3 rules that cover 90% of exam questions</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>C1 = realno:</b> <b style="color:var(--lime)">If + Present Simple → will + inf.</b> · "If it rains, I will stay." — može se stvarno dogoditi</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>C2 = nerealno:</b> <b style="color:var(--violet)">If + Past Simple → would + inf.</b> · "If I were rich, I would travel." — nije stvarno</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>NIKAD will u if klauzuli!</b> <span style="color:var(--red)">If it will rain</span> ❌ → <span style="color:var(--lime)">If it rains</span> ✓ · if klauzula = uvijek Present ili Past Simple</div></div>
      </div>
    </div>

    <div class="sec-label">// 5-second recall — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Koja je razlika između C1 i C2?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b style="color:var(--lime)">C1 = realna situacija</b> — može se stvarno dogoditi:<br>
        <em>If it <b>rains</b> tomorrow, I <b>will</b> take an umbrella.</em> (možda stvarno kiši)<br><br>
        <b style="color:var(--violet)">C2 = nerealna situacija</b> — nije stvarno ili je malo vjerojatno:<br>
        <em>If I <b>were</b> a bird, I <b>would</b> fly to the sea.</em> (nisam ptica — nemoguće)<br>
        <em>If I <b>had</b> a million euros, I <b>would</b> buy a yacht.</em> (nemam — malo vjerojatno)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Zašto "If it will rain" uvijek greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>if klauzula uvijek koristi Present Simple (C1) ili Past Simple (C2) — nikad will!</b><br><br>
        ❌ <em>If it <b>will rain</b>, I will stay home.</em><br>
        ✅ <em>If it <b>rains</b>, I will stay home.</em><br><br>
        Logika: "if" već izražava uvjetnost — will je suvišan i gramatički pogrešan.<br>
        Vrijedi i za: <span class="bad">If she will come</span> → <span class="ok">If she comes</span> · <span class="bad">If they will win</span> → <span class="ok">If they win</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Što znači "unless" i kako ga koristim?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>unless = if not</b> — koristimo ga umjesto "if not":<br>
        <em>Unless you study, you will fail.</em> = <em>If you don't study, you will fail.</em><br><br>
        <b>Unless + Present Simple → will + infinitiv</b> (isti obrazac kao C1)<br><br>
        ⚠ Pazi: <span class="bad">Unless you won't study</span> ❌ — unless već sadrži negaciju!<br>
        ✅ <em>Unless you <b>study</b></em> (ne: "don't study" uz unless)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Zašto "If I were" (a ne "If I was") u C2?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>U Conditional 2, "were" se koristi za SVE subjekte</b> (I, he, she, it):<br>
        <em>If I <b>were</b> you, I would apologise.</em> ✓<br>
        <em>If she <b>were</b> here, she would help us.</em> ✓<br><br>
        "was" je prihvatljivo u neformalnom govoru, ali na ispitu uvijek piši <b>were</b>.<br>
        "If I were you" = najčešći C2 izraz za davanje savjeta na maturi.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Može li if klauzula doći na kraju rečenice?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Da! Redoslijed nije bitan — značenje je isto.</b><br><br>
        <em><b>If it rains</b>, I will stay home.</em> ← if na početku → zarez<br>
        <em>I will stay home <b>if it rains</b>.</em> ← if na kraju → bez zareza<br><br>
        ⚠ Pazi na zarez: kad if klauzula dolazi <b>PRVO</b> → zarez između klauza.<br>
        Kad glavna rečenica dolazi <b>PRVO</b> → bez zareza.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>Veza s ch04 i ch05 — will i would u conditionals</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>C1 koristi will (ch04) · C2 koristi would (ch05)</b><br><br>
        <b style="color:var(--lime)">will</b> = modalni, naked infinitive, nema -s → <em>If it rains, she <b>will go</b>.</em><br>
        <b style="color:var(--violet)">would</b> = modalni, naked infinitive, nema -s → <em>If she were free, she <b>would come</b>.</em><br><br>
        Sve što vrijedi za will i modalne glagole (ch04, ch05) vrijedi i ovdje.
      </div>
    </div>

    <div class="sec-label" style="margin-top:32px">// exam panic protocol — 5 koraka</div>
    <div class="panic-box">
      <div class="panic-hd">🚨 if you panic on the exam — do this</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text">Je li situacija <b>realna/moguća</b>? → <b style="color:var(--lime)">C1: If + PS → will</b></div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text">Je li situacija <b>nerealna/hipotetska</b>? → <b style="color:var(--violet)">C2: If + PS past → would</b></div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text">Je li to <b>opća istina</b> (uvijek vrijedi)? → <b style="color:var(--sky)">C0: If + PS → PS</b></div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>NIKAD will u if klauzuli!</b> If + Present Simple uvijek (C1) ili Past Simple (C2)</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text">Vidiš <b>unless</b>? → if not → C1 obrazac (unless + PS → will). Vidiš <b>If I were you</b>? → C2 savjet</div></div>
      </div>
    </div>

    <div class="nav-row">
      <a href="chapter05.html" class="nav-btn">← Chapter 05</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Learn more →</span>
    </div>
  </div>

  <!-- ══ LAYER 1 — LEARN ══ -->
  <div class="layer" id="l1">

    <!-- CONDITIONAL 0 -->
    <div class="cond-block">
      <div class="cond-head">
        <div class="cond-num c0">0</div>
        <div>
          <div class="cond-title">Conditional 0 — opće istine i navike</div>
          <div class="cond-sub">general truths · habits · scientific facts · instructions</div>
        </div>
      </div>
      <div class="cond-body">
        <div class="cond-formula c0">
          <button class="copy-btn" onclick="copyFormula(this,'C0: If + Present Simple → Present Simple')">copy</button>
          <span class="if-part">If</span> + <span style="color:var(--sky)">Present Simple</span>
          &nbsp;→&nbsp;
          <span class="then-part">Present Simple</span><br>
          <span style="color:var(--t3);font-size:12px">When + PS → PS je jednako valjan: <em>When water reaches 100°C, it boils.</em></span>
        </div>
        <p class="prose" style="margin:12px 0 16px">Koristimo C0 za činjenice koje su <strong>uvijek istinite</strong> — prirodni zakoni, navike, opće istine, upute. Nema prošlosti, nema budućnosti — vrijedi uvijek.</p>
        <div class="exs">
          <div class="cond-ex">
            <div class="cond-ex-en">If you <b class="c0">heat</b> ice, it <b class="c0">melts</b>.</div>
            <span class="cond-tag c0">C0</span>
            <div class="ex-hr">zakon prirode — uvijek istinito</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">If I <b class="c0">feel</b> tired, I <b class="c0">go</b> to bed early.</div>
            <span class="cond-tag c0">C0</span>
            <div class="ex-hr">navika/rutina — uvijek tako radim</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">If you <b class="c0">press</b> this button, the door <b class="c0">opens</b>.</div>
            <span class="cond-tag c0">C0</span>
            <div class="ex-hr">uputa — automatski rezultat</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">When plants <b class="c0">don't get</b> water, they <b class="c0">die</b>.</div>
            <span class="cond-tag c0">C0</span>
            <div class="ex-hr">when = if u C0 (isti obrazac)</div>
          </div>
        </div>
        <div class="cond-note">💡 <b>when vs if u C0:</b> when i if su zamjenjivi u C0. "When you heat water" = "If you heat water" — oba opisuju automatski, uvijek istinit rezultat.</div>
      </div>
    </div>

    <!-- CONDITIONAL 1 -->
    <div class="cond-block">
      <div class="cond-head">
        <div class="cond-num c1">1</div>
        <div>
          <div class="cond-title">Conditional 1 — realna buduća situacija</div>
          <div class="cond-sub">real possibility · future condition · likely outcome</div>
        </div>
      </div>
      <div class="cond-body">
        <div class="cond-formula c1">
          <button class="copy-btn" onclick="copyFormula(this,'C1: If + Present Simple → will + infinitiv')">copy</button>
          <span class="if-part">If</span> + <span style="color:var(--lime)">Present Simple</span>
          &nbsp;→&nbsp;
          <span class="then-part">will</span> + infinitiv<br>
          <span style="color:var(--red);font-size:12px">❌ If it <b>will rain</b>… → ✅ If it <b>rains</b>… (NIKAD will u if klauzuli!)</span>
        </div>
        <div class="callout callout-warn" style="margin:14px 0">
          <span class="callout-icon">🚨</span>
          <div class="callout-body">
            <div class="callout-title">Najtipičnija zamka Conditional 1 na ispitu</div>
            <div class="callout-text">
              ❌ <em>If it <b>will rain</b> tomorrow, I will stay home.</em><br>
              ✅ <em>If it <b>rains</b> tomorrow, I will stay home.</em><br><br>
              if klauzula = Present Simple uvijek! will ide samo u <b>glavnoj rečenici</b>.
            </div>
          </div>
        </div>
        <p class="prose" style="margin:12px 0 16px">C1 koristimo za situacije koje se <strong>mogu stvarno dogoditi</strong> u budućnosti. Uvjet je realan — "ako kiši (a možda hoće), ostat ću kod kuće".</p>
        <div class="exs">
          <div class="cond-ex">
            <div class="cond-ex-en">If it <b class="c1">rains</b> tomorrow, I <b class="c1">will</b> take an umbrella.</div>
            <span class="cond-tag c1">C1</span>
            <div class="ex-hr">realna mogućnost kiše → will</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">If she <b class="c1">studies</b> hard, she <b class="c1">will</b> pass the exam.</div>
            <span class="cond-tag c1">C1</span>
            <div class="ex-hr">realan uvjet → realan ishod</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">I <b class="c1">will</b> call you if I <b class="c1">have</b> time.</div>
            <span class="cond-tag c1">C1</span>
            <div class="ex-hr">if klauzula na kraju — bez zareza</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">If you <b class="c1">don't hurry</b>, you <b class="c1">will</b> miss the bus.</div>
            <span class="cond-tag c1">C1</span>
            <div class="ex-hr">negacija u if klauzuli — don't + inf.</div>
          </div>
        </div>
        <div class="cond-note">💡 <b>Varijante u glavnoj rečenici C1:</b> umjesto will možeš koristiti <b>can, must, should, may, might</b>: "If you come early, you <b>can</b> help." · "If it rains, you <b>should</b> take an umbrella."</div>
      </div>
    </div>

    <!-- UNLESS -->
    <div class="unless-box">
      <div class="unless-title">// unless — if not</div>
      <div class="unless-body">
        <b>unless = if not</b> — uvijek isti obrazac kao Conditional 1:<br>
        <em>Unless you <b>study</b>, you <b>will fail</b>.</em> = <em>If you <b>don't study</b>, you <b>will fail</b>.</em><br><br>
        <b>⚠ Pazi na dvostruku negaciju:</b><br>
        ❌ <em>Unless you <b>don't</b> study…</em> — unless već sadrži negaciju!<br>
        ✅ <em>Unless you <b>study</b>…</em><br><br>
        <b>Još primjera:</b><br>
        <em>Unless it <b>stops</b> raining, we <b>won't</b> go out.</em><br>
        <em>I <b>won't</b> go unless you <b>come</b> with me.</em>
      </div>
    </div>

    <!-- CONDITIONAL 2 -->
    <div class="cond-block">
      <div class="cond-head">
        <div class="cond-num c2">2</div>
        <div>
          <div class="cond-title">Conditional 2 — nerealna / hipotetska situacija</div>
          <div class="cond-sub">unreal · hypothetical · imaginary · advice with "If I were you"</div>
        </div>
      </div>
      <div class="cond-body">
        <div class="cond-formula c2">
          <button class="copy-btn" onclick="copyFormula(this,'C2: If + Past Simple → would + infinitiv')">copy</button>
          <span class="if-part">If</span> + <span style="color:var(--violet)">Past Simple</span>
          &nbsp;→&nbsp;
          <span class="then-part">would</span> + infinitiv<br>
          <span style="color:var(--violet);font-size:12px">⚠ be u if klauzuli C2 → uvijek <b>were</b> (za sve subjekte na ispitu)</span>
        </div>
        <p class="prose" style="margin:12px 0 16px">C2 koristimo za situacije koje su <strong>nerealne, imaginarne ili malo vjerojatne</strong>. Koristimo Past Simple u if klauzuli, ali govorimo o sadašnjosti ili budućnosti — Past Simple ovdje nije prošlo vrijeme nego "distancing".</p>
        <div class="exs">
          <div class="cond-ex">
            <div class="cond-ex-en">If I <b class="c2">had</b> more money, I <b class="c2">would</b> buy a car.</div>
            <span class="cond-tag c2">C2</span>
            <div class="ex-hr">nemam dovoljno novca (nerealno)</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">If she <b class="c2">were</b> here, she <b class="c2">would</b> help us.</div>
            <span class="cond-tag c2">C2</span>
            <div class="ex-hr">nije ovdje — were za she</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">If I <b class="c2">were</b> you, I <b class="c2">would</b> apologise.</div>
            <span class="cond-tag c2">C2</span>
            <div class="ex-hr">savjet — "If I were you" = standardni C2</div>
          </div>
          <div class="cond-ex">
            <div class="cond-ex-en">What <b class="c2">would</b> you do if you <b class="c2">won</b> the lottery?</div>
            <span class="cond-tag c2">C2</span>
            <div class="ex-hr">pitanje o hipotezi — would u pitanju</div>
          </div>
        </div>
        <div class="cond-note">💡 <b>were za sve subjekte:</b> "If I <b>were</b>…" · "If he <b>were</b>…" · "If she <b>were</b>…" — svi su ispravni. "was" je prihvatljivo u govoru ali na pisanom ispitu uvijek piši <b>were</b>.</div>

        <div class="callout callout-info" style="margin-top:14px">
          <span class="callout-icon">🔍</span>
          <div class="callout-body">
            <div class="callout-title">Mikro-provjera</div>
            <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0" style="margin:6px 0 2px;background:var(--bg-elevated)">
              <div class="reveal-q" style="font-size:13px"><span>Zašto "If I had money, I will buy a car" nije točno?</span><span class="reveal-arrow">▼</span></div>
              <div class="reveal-ans">"had" (Past Simple) u if klauzuli = C2 → glavna rečenica mora biti <b style="color:var(--violet)">would</b>, ne will. ✅ <b>If I had money, I would buy a car.</b><br>will = C1 · would = C2. Nikad miješaj!</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- DIREKTNA USPOREDBA C1 vs C2 -->
    <hr class="divider">
    <div class="sec-label">// C1 vs C2 — direktna usporedba (iste teme)</div>
    <p class="prose">Isti kontekst — drugačiji stav govorinika. C1 = "može se dogoditi" · C2 = "nije realno".</p>
    <div class="exs">
      <div class="ex">
        <div class="ex-en">If it <b class="c1">rains</b>, I <b class="c1">will</b> stay home. <span style="font-size:11px;color:var(--lime)">(C1)</span></div>
        <span class="ex-arr">→</span>
        <div class="ex-hr">može kiša — realna mogućnost</div>
      </div>
      <div class="ex">
        <div class="ex-en">If it <b class="c2">rained</b>, I <b class="c2">would</b> stay home. <span style="font-size:11px;color:var(--violet)">(C2)</span></div>
        <span class="ex-arr">→</span>
        <div class="ex-hr">malo vjerojatno — imaginarna situacija</div>
      </div>
      <div class="ex">
        <div class="ex-en">If I <b class="c1">have</b> time, I <b class="c1">will</b> call you. <span style="font-size:11px;color:var(--lime)">(C1)</span></div>
        <span class="ex-arr">→</span>
        <div class="ex-hr">možda ću imati vremena</div>
      </div>
      <div class="ex">
        <div class="ex-en">If I <b class="c2">had</b> time, I <b class="c2">would</b> call you. <span style="font-size:11px;color:var(--violet)">(C2)</span></div>
        <span class="ex-arr">→</span>
        <div class="ex-hr">nemam vremena (nerealno)</div>
      </div>
      <div class="ex">
        <div class="ex-en">If she <b class="c1">studies</b>, she <b class="c1">will</b> pass. <span style="font-size:11px;color:var(--lime)">(C1)</span></div>
        <span class="ex-arr">→</span>
        <div class="ex-hr">može učiti — realno</div>
      </div>
      <div class="ex">
        <div class="ex-en">If she <b class="c2">studied</b>, she <b class="c2">would</b> pass. <span style="font-size:11px;color:var(--violet)">(C2)</span></div>
        <span class="ex-arr">→</span>
        <div class="ex-hr">ne uči (nerealno)</div>
      </div>
    </div>

    <!-- MATURA RADAR -->
    <div class="radar">
      <div class="radar-hd">📡 matura radar — zamke i gdje se pojavljuju</div>
      <div class="radar-body">
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 1</div><div class="radar-text"><b>will u if klauzuli — najtipičnija greška C1</b><br><em>If it will rain, I will stay.</em> ❌ → <em>If it <b style="color:var(--lime)">rains</b>, I will stay.</em> ✓<br>if klauzula = Present Simple uvijek u C1!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 2</div><div class="radar-text"><b>Miješanje C1 i C2 — will vs would</b><br><em>If I had money, I <b style="color:var(--red)">will</b> buy a car.</em> ❌ → <em>…I <b style="color:var(--violet)">would</b> buy a car.</em> ✓<br>had (PS) u if = C2 → would u glavnoj!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 3</div><div class="radar-text"><b>unless + negacija (dvostruka negacija)</b><br><em>Unless you <b style="color:var(--red)">don't</b> study, you will fail.</em> ❌ → <em>Unless you <b style="color:var(--lime)">study</b>, you will fail.</em> ✓<br>unless = if not → ne dodavaj drugu negaciju!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 4</div><div class="radar-text"><b>was umjesto were u C2</b><br><em>If I <b style="color:var(--red)">was</b> you, I would apologise.</em> ❌ → <em>If I <b style="color:var(--violet)">were</b> you…</em> ✓<br>were za sve subjekte u C2 na pisanom ispitu!</div></div>
        <div class="radar-item"><div class="radar-badge rb-trap">ZAMKA 5</div><div class="radar-text"><b>would u if klauzuli C2</b><br><em>If I <b style="color:var(--red)">would have</b> more money…</em> ❌ → <em>If I <b style="color:var(--violet)">had</b> more money…</em> ✓<br>if klauzula C2 = Past Simple, ne would!</div></div>
        <div class="radar-item"><div class="radar-badge rb-where">GDJE</div><div class="radar-text"><b>Gap fill:</b> realno ili nerealno? → C1 ili C2 → provjeri if klauzulu (PS ili PastS) → will ili would<br><b>MCQ:</b> eliminiraj will u if klauzuli · provjeri C1 vs C2 konzistentnost<br><b>Error correction:</b> will u if · would u if · was umjesto were · unless + negacija</div></div>
      </div>
    </div>

    <!-- WHY NOT -->
    <hr class="divider">
    <div class="sec-label">// zašto NIJE drugi odgovor?</div>

    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "If it <em style="color:var(--red)">will rain</em> tomorrow, I'll take an umbrella." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: If it rains tomorrow, I'll take an umbrella.</b><br>NIKAD will u if klauzuli! if + will je uvijek greška u C1. If klauzula = Present Simple. will ide samo u glavnoj rečenici. Ovo je najtipičnija greška na maturalnim ispitima.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "If I <em style="color:var(--red)">had</em> more money, I <em style="color:var(--red)">will</em> travel the world." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: If I had more money, I would travel the world.</b><br>"had" (Past Simple) u if klauzuli = C2. Glavna rečenica C2 = <b>would</b> (ne will). will = C1, would = C2. Nikad miješaj — određuje tip conditiona koji si odabrao.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "Unless you <em style="color:var(--red)">don't</em> hurry, you'll miss the bus." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: Unless you hurry, you'll miss the bus.</b><br>unless = if not — already negated! Dodavanje "don't" stvara dvostruku negaciju što mijenja značenje. Unless you hurry = If you don't hurry → isti smisao, jedna negacija.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "If I <em style="color:var(--red)">was</em> you, I would talk to her." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: If I were you, I would talk to her.</b><br>U C2 koristimo <b>were</b> za SVE subjekte na pisanom ispitu. "was" je prihvatljivo u razgovornom govoru, ali na ispitu uvijek "were". "If I were you" = standardni izraz za davanje savjeta.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "If I <em style="color:var(--red)">would have</em> more time, I would learn Spanish." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: If I had more time, I would learn Spanish.</b><br>if klauzula C2 = Past Simple (had), ne would have. would ide samo u <b>glavnoj</b> rečenici. "would" u if klauzuli je uvijek greška — kao i "will" u C1 if klauzuli.</div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0">
      <div class="reveal-q"><span>❓ "If water <em style="color:var(--red)">will reach</em> 100°C, it boils." — greška?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans"><b style="color:var(--lime)">Točno: If water reaches 100°C, it boils.</b><br>Ovo je Conditional 0 (opća istina). C0 = If + PS → PS. Nema will ni would. "will reach" = greška jer C0 ne koristi will. Opće istine uvijek PS u obje klauzule.</div>
    </div>

    <!-- DRILL -->
    <hr class="divider">
    <div class="sec-label">// conditional drill — C0, C1 ili C2?</div>
    <p class="prose" style="margin-bottom:14px">5 mini-zadataka. Odaberi točan oblik glagola u zagradama.</p>
    <div class="sv-drill">
      <div class="sv-q"><div class="sv-sent">If you mix red and blue, you _______ (get) purple. (opća istina)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'d1',true,'get')">get</div><div class="sv-opt" onclick="svAns(this,'d1',false,'get')">will get</div><div class="sv-opt" onclick="svAns(this,'d1',false,'get')">would get</div></div><div class="sv-fb" id="d1fb"></div></div>
      <div class="sv-q"><div class="sv-sent">If she _______ (study) more, she will pass the exam. (realna situacija)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'d2',true,'studies')">studies</div><div class="sv-opt" onclick="svAns(this,'d2',false,'studies')">will study</div><div class="sv-opt" onclick="svAns(this,'d2',false,'studies')">studied</div></div><div class="sv-fb" id="d2fb"></div></div>
      <div class="sv-q"><div class="sv-sent">If I _______ (be) you, I would apologise immediately. (savjet)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'d3',false,'were')">am</div><div class="sv-opt" onclick="svAns(this,'d3',false,'were')">was</div><div class="sv-opt" onclick="svAns(this,'d3',true,'were')">were</div></div><div class="sv-fb" id="d3fb"></div></div>
      <div class="sv-q"><div class="sv-sent">Unless she _______ (leave) now, she will miss the flight. (unless = if not)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'d4',true,'leaves')">leaves</div><div class="sv-opt" onclick="svAns(this,'d4',false,'leaves')">will leave</div><div class="sv-opt" onclick="svAns(this,'d4',false,'leaves')">doesn't leave</div></div><div class="sv-fb" id="d4fb"></div></div>
      <div class="sv-q"><div class="sv-sent">If they _______ (win) the match, they would be champions. (nerealna)</div><div class="sv-opts"><div class="sv-opt" onclick="svAns(this,'d5',false,'won')">win</div><div class="sv-opt" onclick="svAns(this,'d5',true,'won')">won</div><div class="sv-opt" onclick="svAns(this,'d5',false,'won')">will win</div></div><div class="sv-fb" id="d5fb"></div></div>
    </div>
    <div class="sv-score" id="sv-score-box"><div class="sv-score-num" id="sv-score-num">0/5</div><div class="sv-score-lbl" id="sv-score-lbl"></div></div>

    <!-- DECISION TREE -->
    <hr class="divider">
    <div class="sec-label">// decision tree — koji conditional?</div>
    <div class="dtree">
      <div class="dt-node question">❓ <strong>Korak 1:</strong> Je li to <b>opća istina ili navika</b> (uvijek vrijedi)?</div>
      <div class="dt-row">
        <div class="dt-branch"><div class="dt-node" style="background:var(--sky-dim);border-color:var(--sky-border);color:var(--sky)">✅ DA → <strong>Conditional 0</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· If + PS → PS</small></div></div>
        <div class="dt-connector">NE ↓</div>
      </div>
      <div class="dt-indent">
        <div class="dt-node question">❓ <strong>Korak 2:</strong> Je li situacija <b>realna / moguća</b> u budućnosti?</div>
        <div class="dt-row">
          <div class="dt-branch"><div class="dt-node yes-ps">✅ DA → <strong>Conditional 1</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· If + PS → will + inf. (NIKAD will u if!)</small></div></div>
          <div class="dt-connector">NE ↓</div>
        </div>
        <div class="dt-indent">
          <div class="dt-node question">❓ <strong>Korak 3:</strong> Je li situacija <b>nerealna / hipotetska</b>?</div>
          <div class="dt-row">
            <div class="dt-branch"><div class="dt-node yes-pc">✅ DA → <strong>Conditional 2</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· If + Past Simple → would + inf. (were za sve!)</small></div></div>
            <div class="dt-connector">NE ↓</div>
          </div>
          <div class="dt-indent">
            <div class="dt-node question">❓ <strong>Korak 4:</strong> Vidiš <b>unless</b>?</div>
            <div class="dt-row">
              <div class="dt-branch"><div class="dt-node yes-ps">✅ DA → unless = if not → <strong>C1 obrazac</strong> <small style="font-size:11px;font-weight:400;opacity:.8">· unless + PS → will</small></div></div>
              <div class="dt-connector">NE ↓</div>
            </div>
            <div class="dt-indent">
              <div class="dt-node yes-amber">Provjeri: ima li <b>would</b> u glavnoj? → C2 if klauzula = Past Simple · ima li <b>will</b>? → C1 if klauzula = PS</div>
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
    <div class="kbd-hint">⌨️ Tipke <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span> biraju odgovor · Speed drill: tipke <span class="kbd">0</span><span class="kbd">1</span><span class="kbd">2</span> = indeks opcije</div>

    <div class="q-block" id="q1"><div class="q-head"><div class="q-meta">01 / 10 · conditional 0 · opća istina</div><div class="q-text">If you heat water to 100°C, it _______. (boil)</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">A</span> will boil</div><div class="q-opt" onclick="ans(this,'q1',true)" tabindex="0"><span class="q-letter">B</span> boils</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">C</span> would boil</div><div class="q-opt" onclick="ans(this,'q1',false)" tabindex="0"><span class="q-letter">D</span> boiled</div></div><div class="q-expl" id="q1e" aria-live="polite"></div></div>

    <div class="q-block" id="q2"><div class="q-head"><div class="q-meta">02 / 10 · conditional 1 · realna situacija</div><div class="q-text">If it rains tomorrow, I _______ (stay) at home.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">A</span> stayed</div><div class="q-opt" onclick="ans(this,'q2',true)" tabindex="0"><span class="q-letter">B</span> will stay</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">C</span> would stay</div><div class="q-opt" onclick="ans(this,'q2',false)" tabindex="0"><span class="q-letter">D</span> stay</div></div><div class="q-expl" id="q2e" aria-live="polite"></div></div>

    <div class="q-block" id="q3"><div class="q-head"><div class="q-meta">03 / 10 · conditional 2 · nerealna situacija</div><div class="q-text">If I lived in Paris, I _______ (visit) the Louvre every week.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">A</span> will visit</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">B</span> visit</div><div class="q-opt" onclick="ans(this,'q3',true)" tabindex="0"><span class="q-letter">C</span> would visit</div><div class="q-opt" onclick="ans(this,'q3',false)" tabindex="0"><span class="q-letter">D</span> visited</div></div><div class="q-expl" id="q3e" aria-live="polite"></div></div>

    <div class="q-block" id="q4"><div class="q-head"><div class="q-meta">04 / 10 · conditional 2 · "If I were you" savjet</div><div class="q-text">If I were you, I _______ (not / do) that.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">A</span> won't do</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">B</span> didn't do</div><div class="q-opt" onclick="ans(this,'q4',true)" tabindex="0"><span class="q-letter">C</span> wouldn't do</div><div class="q-opt" onclick="ans(this,'q4',false)" tabindex="0"><span class="q-letter">D</span> don't do</div></div><div class="q-expl" id="q4e" aria-live="polite"></div></div>

    <div class="q-block" id="q5"><div class="q-head"><div class="q-meta">05 / 10 · unless · C1</div><div class="q-text">Unless you _______ (leave) now, you will miss the last train.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q5',true)" tabindex="0"><span class="q-letter">A</span> leave</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">B</span> will leave</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">C</span> don't leave</div><div class="q-opt" onclick="ans(this,'q5',false)" tabindex="0"><span class="q-letter">D</span> left</div></div><div class="q-expl" id="q5e" aria-live="polite"></div></div>

    <div class="q-block" id="q6"><div class="q-head"><div class="q-meta">06 / 10 · conditional 1 · if na kraju</div><div class="q-text">She _______ (pass) the exam if she studies hard enough.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">A</span> passed</div><div class="q-opt" onclick="ans(this,'q6',true)" tabindex="0"><span class="q-letter">B</span> will pass</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">C</span> would pass</div><div class="q-opt" onclick="ans(this,'q6',false)" tabindex="0"><span class="q-letter">D</span> passes</div></div><div class="q-expl" id="q6e" aria-live="polite"></div></div>

    <div class="q-block" id="q7"><div class="q-head"><div class="q-meta">07 / 10 · conditional 2 · hipotetska nerealna</div><div class="q-text">If I _______ (have) more free time, I would learn to play the guitar.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">A</span> have</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">B</span> will have</div><div class="q-opt" onclick="ans(this,'q7',true)" tabindex="0"><span class="q-letter">C</span> had</div><div class="q-opt" onclick="ans(this,'q7',false)" tabindex="0"><span class="q-letter">D</span> would have</div></div><div class="q-expl" id="q7e" aria-live="polite"></div></div>

    <div class="q-block" id="q8"><div class="q-head"><div class="q-meta">08 / 10 · conditional 0 · navika s when</div><div class="q-text">When I _______ (be) tired, I go to bed early. It's my routine.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q8',true)" tabindex="0"><span class="q-letter">A</span> am</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">B</span> will be</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">C</span> was</div><div class="q-opt" onclick="ans(this,'q8',false)" tabindex="0"><span class="q-letter">D</span> were</div></div><div class="q-expl" id="q8e" aria-live="polite"></div></div>

    <div class="q-block" id="q9"><div class="q-head"><div class="q-meta">09 / 10 · zamka — will u if klauzuli · C1</div><div class="q-text">If Tom _______ (come) to the party, everyone will be happy.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">A</span> will come</div><div class="q-opt" onclick="ans(this,'q9',true)" tabindex="0"><span class="q-letter">B</span> comes</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">C</span> came</div><div class="q-opt" onclick="ans(this,'q9',false)" tabindex="0"><span class="q-letter">D</span> would come</div></div><div class="q-expl" id="q9e" aria-live="polite"></div></div>

    <div class="q-block" id="q10"><div class="q-head"><div class="q-meta">10 / 10 · conditional 2 · "If I were you"</div><div class="q-text">If I were in your position, I _______ (apologise) immediately.</div></div><div class="q-opts"><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">A</span> will apologise</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">B</span> apologise</div><div class="q-opt" onclick="ans(this,'q10',true)" tabindex="0"><span class="q-letter">C</span> would apologise</div><div class="q-opt" onclick="ans(this,'q10',false)" tabindex="0"><span class="q-letter">D</span> apologised</div></div><div class="q-expl" id="q10e" aria-live="polite"></div></div>

    <div class="score-box" id="score" aria-live="polite">
      <div class="score-num" id="snum">0/10</div>
      <div class="score-lbl" id="slbl"></div>
      <button class="sd-retry" style="margin-top:18px" onclick="retryQuiz()">↺ Ponovi quiz</button>
      <div id="completionBadge" style="display:none;margin:20px auto 0;padding:16px 24px;background:linear-gradient(135deg,var(--lime-dim),rgba(74,222,128,.08));border:1px solid var(--green-border);border-radius:var(--r4);max-width:300px">
        <div style="font-size:28px;margin-bottom:8px">🏆</div>
        <div style="font-size:15px;font-weight:700;color:var(--green);margin-bottom:4px">Poglavlje završeno!</div>
        <div style="font-size:12px;color:var(--t2);font-family:var(--mono)">06 · Conditionals 0, 1, 2<br>Nastavi na Poglavlje 07 →</div>
      </div>
    </div>

    <!-- SPEED DRILL -->
    <hr class="divider">
    <div class="sec-label">// ⚡ speed drill — odaberi točan oblik</div>
    <p class="prose" style="margin-bottom:6px">10 rečenica, 3 opcije svaka. Tipke <span style="font-family:var(--mono);color:var(--t2)">0 · 1 · 2</span> = brzi unos.</p>
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
      <div class="err-item"><div class="err-sent">"If it will rain tomorrow, we will cancel the match."</div><button class="err-btn" onclick="showErrFix('ef1',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef1">✅ <span class="correct">If it rains tomorrow, we will cancel the match.</span><span class="explain">NIKAD will u if klauzuli C1! If + Present Simple → will. "rains" ne "will rain".</span></div></div>
      <div class="err-item"><div class="err-sent">"If I had more money, I will travel around the world."</div><button class="err-btn" onclick="showErrFix('ef2',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef2">✅ <span class="correct">If I had more money, I would travel around the world.</span><span class="explain">"had" (PS) u if klauzuli = C2 → glavna rečenica mora biti <b>would</b>. will = C1, would = C2. Ne miješaj!</span></div></div>
      <div class="err-item"><div class="err-sent">"Unless you don't study, you will fail the exam."</div><button class="err-btn" onclick="showErrFix('ef3',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef3">✅ <span class="correct">Unless you study, you will fail the exam.</span><span class="explain">unless = if not — već sadrži negaciju! "Unless you don't study" = dvostruka negacija = pogrešno. Unless + PS (bez negacije).</span></div></div>
      <div class="err-item"><div class="err-sent">"If I was you, I would talk to the teacher."</div><button class="err-btn" onclick="showErrFix('ef4',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef4">✅ <span class="correct">If I were you, I would talk to the teacher.</span><span class="explain">U C2 na pisanom ispitu uvijek <b>were</b> za sve subjekte. "was" je razgovorni oblik — na maturi piši "were".</span></div></div>
      <div class="err-item"><div class="err-sent">"If I would have more free time, I would learn Italian."</div><button class="err-btn" onclick="showErrFix('ef5',this)">▶ Otkrij grešku</button><div class="err-fix" id="ef5">✅ <span class="correct">If I had more free time, I would learn Italian.</span><span class="explain">would se NIKAD ne koristi u if klauzuli C2! If klauzula C2 = Past Simple (had). would ide samo u glavnoj rečenici.</span></div></div>
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
        <li class="m-item"><div class="m-dot"></div><span><b>C0:</b> If + PS → PS · opće istine, navike. When = If u C0.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>C1:</b> If + Present Simple → will + inf. · realna buduća situacija.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>C2:</b> If + Past Simple → would + inf. · nerealna/hipotetska situacija.</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>NIKAD will u if klauzuli!</b> "If it rains" ✓ · "If it will rain" ❌</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>NIKAD would u if klauzuli C2!</b> "If I had" ✓ · "If I would have" ❌</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>unless = if not:</b> Unless + PS (bez negacije!) → will. "Unless you study" ✓</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>C2 — were za sve:</b> "If I were you" ✓ · "If she were here" ✓ · "If I was" ❌ na ispitu</span></li>
        <li class="m-item"><div class="m-dot"></div><span><b>Redoslijed:</b> If klauzula prvo → zarez · glavna rečenica prvo → bez zareza.</span></li>
      </ul>
    </div>

    <!-- FILL IN THE BLANK -->
    <div class="sec-label" style="margin-top:32px">// fill in the blank</div>
    <p class="prose" style="margin-bottom:16px">Upiši ispravni oblik glagola. Pritisni <kbd style="font-family:var(--mono);background:var(--bg-elevated);padding:1px 5px;border-radius:3px;font-size:12px;border:1px solid var(--bd-mid)">Enter</kbd> ili klikni Check.</p>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">01 · C0 · opća istina · (freeze)</div><div class="fitb-sent">If you cool water below 0°C, it _______ (freeze).</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="freezes" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi1','f1fb','freezes','c0-truth')"><button class="fitb-btn" onclick="checkFitb('fi1','f1fb','freezes','c0-truth')">Check</button></div><div class="fitb-fb" id="f1fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">02 · C1 · realna situacija · (call)</div><div class="fitb-sent">If she gets the job, she _______ (call) us immediately.</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="will call" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi2','f2fb','will call','c1-will')"><button class="fitb-btn" onclick="checkFitb('fi2','f2fb','will call','c1-will')">Check</button></div><div class="fitb-fb" id="f2fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">03 · C2 · nerealna · (buy)</div><div class="fitb-sent">If I won the lottery, I _______ (buy) a house by the sea.</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="would buy" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi3','f3fb','would buy','c2-would')"><button class="fitb-btn" onclick="checkFitb('fi3','f3fb','would buy','c2-would')">Check</button></div><div class="fitb-fb" id="f3fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">04 · unless · C1 · (hurry)</div><div class="fitb-sent">Unless you _______ (hurry), we will be late for the concert.</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="hurry" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi4','f4fb','hurry','c1-unless')"><button class="fitb-btn" onclick="checkFitb('fi4','f4fb','hurry','c1-unless')">Check</button></div><div class="fitb-fb" id="f4fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">05 · C2 · savjet · If I were you</div><div class="fitb-sent">If I _______ (be) you, I would talk to her honestly.</div></div><div class="fitb-row"><input class="fitb-in" id="fi5" type="text" placeholder="were" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi5','f5fb','were','c2-were')"><button class="fitb-btn" onclick="checkFitb('fi5','f5fb','were','c2-were')">Check</button></div><div class="fitb-fb" id="f5fb" aria-live="polite"></div></div>

    <div class="fitb"><div class="fitb-head"><div class="fitb-meta">06 · C0 · navika s when · (feel)</div><div class="fitb-sent">When he _______ (feel) stressed, he always goes for a run.</div></div><div class="fitb-row"><input class="fitb-in" id="fi6" type="text" placeholder="feels" autocomplete="off" spellcheck="false" onkeydown="if(event.key==='Enter')checkFitb('fi6','f6fb','feels','c0-when')"><button class="fitb-btn" onclick="checkFitb('fi6','f6fb','feels','c0-when')">Check</button></div><div class="fitb-fb" id="f6fb" aria-live="polite"></div></div>

    <!-- CHECKPOINT -->
    <hr class="divider">
    <div class="sec-label">// checkpoint</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Kako razlikujem C1 od C2?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>C1 = realno/moguće → If + PS → will.</b> <em>If it rains, I will stay.</em> (može kiša)<br><b>C2 = nerealno/hipotetsko → If + Past S → would.</b> <em>If I were rich, I would travel.</em> (nisam bogat)<br><br>Brzi test: "Je li ovo moguće u stvarnosti?" DA = C1, NE/malo vjerojatno = C2.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Koja su 2 absolutna pravila za if klauzulu?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>1. NIKAD will u if klauzuli C1</b> — "If it rains" ✓ · "If it will rain" ❌<br><b>2. NIKAD would u if klauzuli C2</b> — "If I had" ✓ · "If I would have" ❌<br><br>if klauzula = uvijek Present Simple (C1) ili Past Simple (C2) — nikad will ili would!</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Što je "unless" i gdje ga koristim?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>unless = if not</b> — C1 obrazac: Unless + PS → will.<br><em>Unless you study</em> = <em>If you don't study</em><br><br>⚠ NIKAD: "Unless you don't study" — dvostruka negacija! unless već sadrži negaciju.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Veza s ch04 i ch05: kako will i would funkcioniraju u conditionals?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>will (ch04) = modalni → C1 glavna rečenica</b>: naked infinitive, nema -s<br><b>would (ch05) = modalni → C2 glavna rečenica</b>: naked infinitive, nema -s<br><br>Sve greške modalnih (cans, will to go) vrijede i ovdje: "She will goes" ❌ i u conditionals.</div></div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false" tabindex="0"><div class="reveal-q"><span>Može li C1 ili C2 imati modal umjesto will/would?</span><span class="reveal-arrow">▼</span></div><div class="reveal-ans"><b>Da — u C1 glavnoj rečenici može biti bilo koji modal:</b><br><em>If it rains, you <b>should</b> take an umbrella.</em> ✓<br><em>If you come early, you <b>can</b> help.</em> ✓<br><em>If she calls, I <b>might</b> answer.</em> ✓<br><br>Ovo je rjeđe na nižoj razini, ali vrijedi znati da nije greška koristiti can/should/might umjesto will u C1.</div></div>

    <!-- QUICK EXAM SUMMARY -->
    <hr class="divider">
    <div class="sec-label">// quick exam pattern summary</div>
    <div class="qes">
      <div class="qes-item"><div class="qes-tag gap">// gap fill</div><div class="qes-steps"><b>1.</b> Opća istina → C0 (PS→PS) · Realno → C1 (PS→will) · Nerealno → C2 (PastS→would) · <b>2.</b> Provjeri if klauzulu: PS ili Past S? · <b>3.</b> unless = C1 bez negacije · <b>4.</b> were za sve u C2</div></div>
      <div class="qes-item"><div class="qes-tag mcq">// multiple choice</div><div class="qes-steps"><b>1.</b> Odmah eliminiraj "will rain" u if klauzuli · <b>2.</b> had u if → would u glavnoj · <b>3.</b> unless + don't = ❌ · <b>4.</b> "If I was" → "If I were" na ispitu</div></div>
      <div class="qes-item"><div class="qes-tag err">// error correction</div><div class="qes-steps">Provjeri: <b>will u if klauzuli</b> ❌ · <b>would u if klauzuli C2</b> ❌ · <b>C1+would / C2+will mješanje</b> ❌ · <b>unless + negacija</b> ❌ · <b>was umjesto were u C2</b> ❌</div></div>
    </div>

    <!-- NEXT CHAPTERS -->
    <hr class="divider">
    <div style="margin:28px 0">
      <div class="sec-label">// povezano gradivo &amp; sljedeći koraci</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter07.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">07 →</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Pasiv</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">If + pasiv: If it is done… · was/were + PP</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter05.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 05</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Modal glagoli</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">would = modalni → naked inf., nema -s</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--sky-border);border-radius:var(--r3);padding:14px 16px;cursor:pointer;transition:all .15s" onmouseover="this.style.background='var(--bg-hover)'" onmouseout="this.style.background='var(--bg-card)'" onclick="window.location='chapter04.html'">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--sky);margin-bottom:6px">← 04</div>
          <div style="font-size:13px;font-weight:600;color:var(--sky)">Future: will &amp; going to</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">will = C1 glavna rečenica — isti obrazac</div>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px">
          <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-bottom:6px">12</div>
          <div style="font-size:13px;font-weight:600;color:var(--t2)">Višestruki izbor — taktika</div>
          <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-top:4px">Eliminacija will u if klauzuli u MCQ</div>
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
      <a href="chapter05.html" class="nav-btn">← Chapter 05</a>
      <a href="chapter07.html" class="nav-btn primary">Next chapter →</a>
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
var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  window.scrollTo({top:0,behavior:'smooth'});
}

var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Conditional 0 = opća istina/navika. If + Present Simple → Present Simple. Voda uvijek ključa na 100°C.",w:"✗ Netočno. Conditional 0 za opće istine: If + PS → PS. Točan odgovor: boils."},
  q2:{c:"✓ Točno. Conditional 1 = realna buduća situacija. If + PS → will + inf. 'If it rains' (PS) → 'I will stay' (will).",w:"✗ Netočno. Conditional 1: If + Present Simple → will + infinitiv. Točan odgovor: will stay."},
  q3:{c:"✓ Točno. Conditional 2 = hipotetska/nerealna situacija. If + Past Simple → would + inf.",w:"✗ Netočno. Conditional 2 = nerealna situacija (ne živim u Parizu). If + Past Simple → would + infinitiv. Točan odgovor: would visit."},
  q4:{c:"✓ Točno. Conditional 2 s 'were' — 'If I were' je standardni oblik za sve subjekte u C2 (ne 'If I was' na ispitu).",w:"✗ Netočno. Conditional 2: If + Past Simple → would + inf. U C2 koristimo 'were' za sve subjekte: 'If I were you'. Točan odgovor: would do."},
  q5:{c:"✓ Točno. 'unless' = 'if not'. Unless you study → if you don't study → will fail. Unless + PS → will.",w:"✗ Netočno. unless = if not → Conditional 1 obrazac: unless + PS → will + inf. Točan odgovor: will fail."},
  q6:{c:"✓ Točno. Conditional 1 — 'if' klauzula može biti na kraju ili na početku. If + PS → will + inf.",w:"✗ Netočno. Conditional 1: will + inf u glavnoj rečenici. 'If she studies hard' = if klauzula (PS). Točan odgovor: will pass."},
  q7:{c:"✓ Točno. Conditional 2 = nerealna pretpostavka o sadašnjosti. 'If I had more time' (nemam) → would learn.",w:"✗ Netočno. Conditional 2: nerealna situacija → If + PS (had) → would + inf. Točan odgovor: would learn."},
  q8:{c:"✓ Točno. Conditional 0 za navike/rutine. When/If + PS → PS. 'When I'm tired' = rutina → 'I go to bed early'.",w:"✗ Netočno. Conditional 0 za navike i rutine: If/When + PS → PS. Točan odgovor: go."},
  q9:{c:"✓ Točno. Conditional 1 — ne koristimo will u if klauzuli! If + Present Simple (ne will). Glavna rečenica = will.",w:"✗ Netočno. NIKAD will u if klauzuli Conditional 1! If + Present Simple → will + inf. Točan odgovor: comes (ne will come)."},
  q10:{c:"✓ Točno. Conditional 2 s 'were' za savjete: 'If I were you, I would...' — standardni oblik savjeta u engleskom.",w:"✗ Netočno. 'If I were you' + would = savjet u Conditional 2. 'were' za sve subjekte u C2 (formalno). Točan odgovor: would apologise."}
};
var FITB={
  'c0-truth':  "Conditional 0 = opća istina. If + PS → PS. Glagol u if klauzuli i glavnoj rečenici = PS.",
  'c1-will':   "Conditional 1 = realna buduća situacija. If + PS → will + infinitiv.",
  'c2-would':  "Conditional 2 = nerealna situacija. If + PS past → would + infinitiv.",
  'c1-unless': "unless = if not → Conditional 1 obrazac: unless + PS → will + inf.",
  'c2-were':   "'If I were you' = standardni C2 savjet. were za sve subjekte u C2.",
  'c0-when':   "Conditional 0 s when: when/if + PS → PS. Za navike i rutine."
};
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
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':correct>=9?'Excellent!':correct>=7?'Good. Fokusiraj se na will u if klauzuli (zamka!).':correct>=5?'Vrati se na Learn — C1 vs C2 razliku.':'Vrati se na Learn i idi polako.';
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
  if(e.key==='0'&&btns[0])btns[0].click();
  if(e.key==='1'&&btns[1])btns[1].click();
  if(e.key==='2'&&btns[2])btns[2].click();
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);
  var fb=document.getElementById(fbId);
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
      document.getElementById('sv-score-lbl').textContent=drillCorrect===5?'Savršen! 🎉':drillCorrect>=4?'Odlično!':drillCorrect>=3?'Dobro — ponovi C1 vs C2.':'Vrati se na formule.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){btn.textContent='✓ Kopirano';btn.classList.add('copied');setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);});
}

var SD=[
  {s:"If you heat ice, it ___ (melt).",                             opts:["melts","will melt","would melt"],   ans:0, exp:"C0 = opća istina → If + PS → PS. Ice always melts when heated."},
  {s:"If she ___ harder, she will pass the exam.",                  opts:["studies","will study","studied"],    ans:0, exp:"C1: NIKAD will u if klauzuli! If + PS (studies) → will + inf."},
  {s:"If I won the lottery, I ___ buy a house.",                    opts:["will","would","should"],             ans:1, exp:"C2 = nerealna (malo vjerojatno da ću dobiti na lutriji) → would."},
  {s:"If it rains tomorrow, we ___ cancel the picnic.",             opts:["cancel","cancelled","will cancel"],  ans:2, exp:"C1 = realna buduća situacija → If + PS → will + inf."},
  {s:"Unless you leave now, you ___ miss the train.",               opts:["will miss","would miss","miss"],     ans:0, exp:"unless = if not → C1 obrazac → will + inf. u glavnoj rečenici."},
  {s:"If I were taller, I ___ be a basketball player.",             opts:["will","would","should"],             ans:1, exp:"C2: 'If I were' (nisam visok) → would + inf. Nerealna situacija."},
  {s:"When water ___ 100°C, it boils.",                             opts:["reaches","will reach","reached"],    ans:0, exp:"C0 s when: when + PS → PS. Opća/znanstvena istina."},
  {s:"If he ___ the job, he would move to London.",                 opts:["gets","will get","got"],             ans:2, exp:"C2: If + Past Simple (got) → would. Hipotetska situacija."},
  {s:"I ___ help you if I have more time.",                         opts:["will","would","should"],             ans:0, exp:"C1: If + PS (have) → will + inf. u glavnoj. Realna buduća situacija."},
  {s:"If I ___ you, I would apologise to her.",                     opts:["am","was","were"],                   ans:2, exp:"C2: 'If I were you' = standardni savjet. were za sve subjekte u C2."}
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
    document.getElementById('sd-score-lbl').textContent=sc===10?'Savršeno! 🎉':sc>=8?'Odlično! 💪':sc>=6?'Dobro! Fokusiraj se na will u if klauzuli.':'Ponovi Learn tab — C0/C1/C2 formule.';
    document.getElementById('sd-score-box').classList.add('show');return;
  }
  var q=SD[sdState.idx];
  var btnsHtml=q.opts.map(function(o,i){return '<div class="sd-btn" style="background:var(--bg-input);border:1px solid var(--bd-mid);color:var(--t2);border-radius:var(--r2);padding:10px 16px;font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex:1;text-align:center;transition:all .15s" onclick="sdAns('+i+')" tabindex="0">'+o+' <span style="font-size:10px;opacity:.4">['+(i)+']</span></div>';}).join('');
  wrap.innerHTML='<div class="sd-q"><div class="sd-sent">'+q.s+'</div><div class="sd-btns" style="display:flex;gap:8px;flex-wrap:wrap">'+btnsHtml+'</div><div class="sd-fb" id="sdfb" aria-live="polite"></div></div>';
}

function sdAns(idx){
  var q=SD[sdState.idx];var ok=idx===q.ans;sdState.results.push(ok);
  var btns=document.querySelectorAll('#sdq-wrap .sd-btn');
  btns.forEach(function(b,i){b.style.pointerEvents='none';b.setAttribute('tabindex','-1');});
  btns[idx].style.background=ok?'var(--green)':'var(--red-dim)';
  btns[idx].style.color=ok?'#080B10':'var(--red)';
  btns[idx].style.borderColor=ok?'var(--green)':'var(--red-border)';
  if(!ok){btns[q.ans].style.background='var(--green-dim)';btns[q.ans].style.color='var(--green)';btns[q.ans].style.borderColor='var(--green-border)';}
  var fb=document.getElementById('sdfb');fb.className='sd-fb show '+(ok?'ok':'no');fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1700);
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch06_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch06_tabs')||'null');
    if(saved&&Array.isArray(saved)){saved.forEach(function(done,i){if(done){tabDone[i]=true;var tab=document.querySelectorAll('.tab')[i];if(tab)tab.classList.add('done-tab');var tp=document.getElementById('tp'+i);if(tp)tp.classList.add('done');}});}
  }catch(e){}
}
loadProgress();
(function(){var d=document.getElementById('mobDrawer');if(d)d.addEventListener('click',function(e){if(e.target===d)closeMobDrawer();});})();
initSpeedDrill();

</script>`;

const CH06_JS = `var tabDone=[false,false,false];
function switchTab(i){
  tabDone[i]=true;saveProgress();
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('active',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('active',j===i)});
  for(var k=0;k<3;k++){var tp=document.getElementById('tp'+k);if(!tp)continue;tp.classList.remove('active','done');if(k<i&&tabDone[k])tp.classList.add('done');else if(k===i)tp.classList.add('active');}
  window.scrollTo({top:0,behavior:'smooth'});
}

var answered={},correct=0,total=10;
var E={
  q1:{c:"✓ Točno. Conditional 0 = opća istina/navika. If + Present Simple → Present Simple. Voda uvijek ključa na 100°C.",w:"✗ Netočno. Conditional 0 za opće istine: If + PS → PS. Točan odgovor: boils."},
  q2:{c:"✓ Točno. Conditional 1 = realna buduća situacija. If + PS → will + inf. 'If it rains' (PS) → 'I will stay' (will).",w:"✗ Netočno. Conditional 1: If + Present Simple → will + infinitiv. Točan odgovor: will stay."},
  q3:{c:"✓ Točno. Conditional 2 = hipotetska/nerealna situacija. If + Past Simple → would + inf.",w:"✗ Netočno. Conditional 2 = nerealna situacija (ne živim u Parizu). If + Past Simple → would + infinitiv. Točan odgovor: would visit."},
  q4:{c:"✓ Točno. Conditional 2 s 'were' — 'If I were' je standardni oblik za sve subjekte u C2 (ne 'If I was' na ispitu).",w:"✗ Netočno. Conditional 2: If + Past Simple → would + inf. U C2 koristimo 'were' za sve subjekte: 'If I were you'. Točan odgovor: would do."},
  q5:{c:"✓ Točno. 'unless' = 'if not'. Unless you study → if you don't study → will fail. Unless + PS → will.",w:"✗ Netočno. unless = if not → Conditional 1 obrazac: unless + PS → will + inf. Točan odgovor: will fail."},
  q6:{c:"✓ Točno. Conditional 1 — 'if' klauzula može biti na kraju ili na početku. If + PS → will + inf.",w:"✗ Netočno. Conditional 1: will + inf u glavnoj rečenici. 'If she studies hard' = if klauzula (PS). Točan odgovor: will pass."},
  q7:{c:"✓ Točno. Conditional 2 = nerealna pretpostavka o sadašnjosti. 'If I had more time' (nemam) → would learn.",w:"✗ Netočno. Conditional 2: nerealna situacija → If + PS (had) → would + inf. Točan odgovor: would learn."},
  q8:{c:"✓ Točno. Conditional 0 za navike/rutine. When/If + PS → PS. 'When I'm tired' = rutina → 'I go to bed early'.",w:"✗ Netočno. Conditional 0 za navike i rutine: If/When + PS → PS. Točan odgovor: go."},
  q9:{c:"✓ Točno. Conditional 1 — ne koristimo will u if klauzuli! If + Present Simple (ne will). Glavna rečenica = will.",w:"✗ Netočno. NIKAD will u if klauzuli Conditional 1! If + Present Simple → will + inf. Točan odgovor: comes (ne will come)."},
  q10:{c:"✓ Točno. Conditional 2 s 'were' za savjete: 'If I were you, I would...' — standardni oblik savjeta u engleskom.",w:"✗ Netočno. 'If I were you' + would = savjet u Conditional 2. 'were' za sve subjekte u C2 (formalno). Točan odgovor: would apologise."}
};
var FITB={
  'c0-truth':  "Conditional 0 = opća istina. If + PS → PS. Glagol u if klauzuli i glavnoj rečenici = PS.",
  'c1-will':   "Conditional 1 = realna buduća situacija. If + PS → will + infinitiv.",
  'c2-would':  "Conditional 2 = nerealna situacija. If + PS past → would + infinitiv.",
  'c1-unless': "unless = if not → Conditional 1 obrazac: unless + PS → will + inf.",
  'c2-were':   "'If I were you' = standardni C2 savjet. were za sve subjekte u C2.",
  'c0-when':   "Conditional 0 s when: when/if + PS → PS. Za navike i rutine."
};
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
    document.getElementById('slbl').textContent=
      correct===total?'Perfect score! 🎉':correct>=9?'Excellent!':correct>=7?'Good. Fokusiraj se na will u if klauzuli (zamka!).':correct>=5?'Vrati se na Learn — C1 vs C2 razliku.':'Vrati se na Learn i idi polako.';
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
  if(e.key==='0'&&btns[0])btns[0].click();
  if(e.key==='1'&&btns[1])btns[1].click();
  if(e.key==='2'&&btns[2])btns[2].click();
});

function checkFitb(inputId,fbId,answer,key){
  var inp=document.getElementById(inputId);
  var fb=document.getElementById(fbId);
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
      document.getElementById('sv-score-lbl').textContent=drillCorrect===5?'Savršen! 🎉':drillCorrect>=4?'Odlično!':drillCorrect>=3?'Dobro — ponovi C1 vs C2.':'Vrati se na formule.';
      box.classList.add('show');
    }
  }
}

function copyFormula(btn,text){
  if(!navigator.clipboard){btn.textContent='✗ N/A';return;}
  navigator.clipboard.writeText(text).then(function(){btn.textContent='✓ Kopirano';btn.classList.add('copied');setTimeout(function(){btn.textContent='copy';btn.classList.remove('copied');},2000);});
}

var SD=[
  {s:"If you heat ice, it ___ (melt).",                             opts:["melts","will melt","would melt"],   ans:0, exp:"C0 = opća istina → If + PS → PS. Ice always melts when heated."},
  {s:"If she ___ harder, she will pass the exam.",                  opts:["studies","will study","studied"],    ans:0, exp:"C1: NIKAD will u if klauzuli! If + PS (studies) → will + inf."},
  {s:"If I won the lottery, I ___ buy a house.",                    opts:["will","would","should"],             ans:1, exp:"C2 = nerealna (malo vjerojatno da ću dobiti na lutriji) → would."},
  {s:"If it rains tomorrow, we ___ cancel the picnic.",             opts:["cancel","cancelled","will cancel"],  ans:2, exp:"C1 = realna buduća situacija → If + PS → will + inf."},
  {s:"Unless you leave now, you ___ miss the train.",               opts:["will miss","would miss","miss"],     ans:0, exp:"unless = if not → C1 obrazac → will + inf. u glavnoj rečenici."},
  {s:"If I were taller, I ___ be a basketball player.",             opts:["will","would","should"],             ans:1, exp:"C2: 'If I were' (nisam visok) → would + inf. Nerealna situacija."},
  {s:"When water ___ 100°C, it boils.",                             opts:["reaches","will reach","reached"],    ans:0, exp:"C0 s when: when + PS → PS. Opća/znanstvena istina."},
  {s:"If he ___ the job, he would move to London.",                 opts:["gets","will get","got"],             ans:2, exp:"C2: If + Past Simple (got) → would. Hipotetska situacija."},
  {s:"I ___ help you if I have more time.",                         opts:["will","would","should"],             ans:0, exp:"C1: If + PS (have) → will + inf. u glavnoj. Realna buduća situacija."},
  {s:"If I ___ you, I would apologise to her.",                     opts:["am","was","were"],                   ans:2, exp:"C2: 'If I were you' = standardni savjet. were za sve subjekte u C2."}
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
    document.getElementById('sd-score-lbl').textContent=sc===10?'Savršeno! 🎉':sc>=8?'Odlično! 💪':sc>=6?'Dobro! Fokusiraj se na will u if klauzuli.':'Ponovi Learn tab — C0/C1/C2 formule.';
    document.getElementById('sd-score-box').classList.add('show');return;
  }
  var q=SD[sdState.idx];
  var btnsHtml=q.opts.map(function(o,i){return '<div class="sd-btn" style="background:var(--bg-input);border:1px solid var(--bd-mid);color:var(--t2);border-radius:var(--r2);padding:10px 16px;font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex:1;text-align:center;transition:all .15s" onclick="sdAns('+i+')" tabindex="0">'+o+' <span style="font-size:10px;opacity:.4">['+(i)+']</span></div>';}).join('');
  wrap.innerHTML='<div class="sd-q"><div class="sd-sent">'+q.s+'</div><div class="sd-btns" style="display:flex;gap:8px;flex-wrap:wrap">'+btnsHtml+'</div><div class="sd-fb" id="sdfb" aria-live="polite"></div></div>';
}

function sdAns(idx){
  var q=SD[sdState.idx];var ok=idx===q.ans;sdState.results.push(ok);
  var btns=document.querySelectorAll('#sdq-wrap .sd-btn');
  btns.forEach(function(b,i){b.style.pointerEvents='none';b.setAttribute('tabindex','-1');});
  btns[idx].style.background=ok?'var(--green)':'var(--red-dim)';
  btns[idx].style.color=ok?'#080B10':'var(--red)';
  btns[idx].style.borderColor=ok?'var(--green)':'var(--red-border)';
  if(!ok){btns[q.ans].style.background='var(--green-dim)';btns[q.ans].style.color='var(--green)';btns[q.ans].style.borderColor='var(--green-border)';}
  var fb=document.getElementById('sdfb');fb.className='sd-fb show '+(ok?'ok':'no');fb.innerHTML=(ok?'✓ ':'✗ ')+q.exp;
  setTimeout(function(){sdState.idx++;renderSD();},1700);
}

function openMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.add('open');document.body.style.overflow='hidden';}}
function closeMobDrawer(){var d=document.getElementById('mobDrawer');if(d){d.classList.remove('open');document.body.style.overflow='';}}

function saveProgress(){try{localStorage.setItem('maturix_ch06_tabs',JSON.stringify(tabDone));}catch(e){}}
function loadProgress(){
  try{var saved=JSON.parse(localStorage.getItem('maturix_ch06_tabs')||'null');
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
