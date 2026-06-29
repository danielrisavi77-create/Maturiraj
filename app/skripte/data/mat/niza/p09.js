// Maturiraj MatB — P09 · Kvadratna funkcija
// Auto-generated from Maturiraj_MatB_P09_FIXED.html
// Sadrži: cijeli HTML, CSS, JS runtime, sve podatke

export const P09_HTML = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
<meta name="theme-color" content="#060910">
<meta name="description" content="Kvadratna funkcija (P09). f(x) = ax² + bx + c, tjeme, nultočke, diskriminanta, graf parabole, Vièteove formule, nejednadžbe. Parabola Explorer za vizualizaciju, 12 Challenge taskova, 9 SR primjera.">
<title>Maturiraj.hr — Mat B · P09 · Kvadratna funkcija</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap">
<style>
:root{
  --bg:#060910;--sur:#0A0E1A;--ele:#0E1422;--card:#111726;--hov:#17203A;--inp:#0A0F1A;
  --bd:rgba(77,158,255,0.07);--bdm:rgba(77,158,255,0.13);--bdl:rgba(77,158,255,0.22);
  --blue:#4D9EFF;--bd-b:rgba(77,158,255,0.20);--dim-b:rgba(77,158,255,0.09);--glow-b:rgba(77,158,255,0.035);
  --cyan:#22D3EE;--bd-c:rgba(34,211,238,0.20);--dim-c:rgba(34,211,238,0.09);
  --indigo:#818CF8;--bd-i:rgba(129,140,248,0.20);--dim-i:rgba(129,140,248,0.09);
  --amber:#F59E0B;--bd-a:rgba(245,158,11,0.20);--dim-a:rgba(245,158,11,0.09);
  --red:#F87171;--bd-r:rgba(248,113,113,0.20);--dim-r:rgba(248,113,113,0.09);
  --green:#34D399;--bd-g:rgba(52,211,153,0.20);--dim-g:rgba(52,211,153,0.09);
  --violet:#C084FC;--bd-v:rgba(192,132,252,0.20);--dim-v:rgba(192,132,252,0.09);
  --pink:#F472B6;--bd-p:rgba(244,114,182,0.20);--dim-p:rgba(244,114,182,0.09);
  --t1:#E4EDFF;--t2:#7A90BB;--t3:#364060;
  --font:'Plus Jakarta Sans',system-ui,sans-serif;--mono:'JetBrains Mono',monospace;
  --sans:'Plus Jakarta Sans',system-ui,sans-serif;
  --r1:4px;--r2:8px;--r3:12px;--r4:16px;--r5:24px;--sb:252px;
  /* Legacy P09 compat aliases */
  --bg2:var(--sur);--card2:var(--ele);
}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}

body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:clip;overscroll-behavior:none;-webkit-text-size-adjust:100%;text-size-adjust:100%;line-height:1.5}
a{color:inherit;text-decoration:none}
::selection{background:var(--amber);color:var(--bg)}

/* LAYOUT — P08 style: fixed sidebar */
.app{display:block;min-height:100vh}
.sidebar{width:var(--sb);flex-shrink:0;background:var(--sur);border-right:1px solid var(--bd);position:fixed;top:0;left:0;height:100vh;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bdm) transparent;z-index:200;padding:18px 0}
.sidebar::-webkit-scrollbar{width:4px}
.sidebar::-webkit-scrollbar-thumb{background:var(--bdm);border-radius:4px}
.sb-title{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:2px;padding:16px 18px 6px}
.sb-title:first-of-type{margin-top:0}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 14px 7px 18px;font-size:11.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.35;text-decoration:none;position:relative}
.sb-item:hover{background:var(--glow-b);color:var(--t1)}
.sb-item.active{color:var(--amber);background:var(--dim-a);border-left-color:var(--amber);font-weight:600}
.sb-item.active .sb-dot{background:var(--amber);box-shadow:0 0 6px var(--amber)}
.sb-dot{display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:all .12s}
.sb-back{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;font-family:var(--mono);font-size:10.5px;color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r2);margin:0 14px 14px;transition:all .15s;align-self:flex-start}
.sb-back:hover{color:var(--amber);border-color:var(--bd-a);background:var(--dim-a)}
.sb-progress{display:none;margin-top:6px;align-items:center;gap:6px;padding-left:0}
.sb-item.active .sb-progress{display:flex}
.sb-prog-track{flex:1;height:3px;background:var(--bdm);border-radius:2px;overflow:hidden}
.sb-prog-fill{height:100%;background:linear-gradient(90deg,var(--amber),var(--cyan));border-radius:2px;transition:width .5s cubic-bezier(.4,0,.2,1);width:0%}
.sb-prog-pct{font-family:var(--mono);font-size:8.5px;color:var(--t3);font-weight:700;min-width:22px;text-align:right}

.main{margin-left:var(--sb);min-width:0;max-width:100%}
.wrap{max-width:900px;margin:0 auto;padding:16px 32px 80px}

/* SKIP LINK/* SKIP LINK */
.skip-link{position:absolute;top:-40px;left:8px;background:var(--violet);color:var(--bg);padding:8px 14px;border-radius:var(--r1);font-family:var(--mono);font-size:11px;font-weight:700;z-index:10000;transition:top .2s}
.skip-link:focus{top:8px}

/* TOAST */
.toast-wrap{position:fixed;top:20px;right:20px;z-index:10001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:360px}
.toast{padding:10px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;color:var(--t1);box-shadow:0 4px 20px rgba(0,0,0,.4);pointer-events:auto;display:flex;align-items:center;gap:9px;animation:toastIn .32s cubic-bezier(.34,1.56,.64,1);min-width:220px}
.toast.ok{border-color:var(--bd-g);background:rgba(52,211,153,0.08)}
.toast.warn{border-color:var(--bd-a);background:rgba(245,158,11,0.08)}
.toast.info{border-color:var(--bd-c);background:rgba(34,211,238,0.08)}
.toast.ach{border-color:var(--bd-v);background:rgba(192,132,252,0.12)}
.toast-ico{font-size:14px;flex-shrink:0}
.toast-msg{flex:1;line-height:1.45}
@keyframes toastIn{from{transform:translateX(20px) scale(.9);opacity:0}to{transform:translateX(0) scale(1);opacity:1}}
@keyframes toastOut{to{transform:translateX(20px) scale(.9);opacity:0}}
.toast.out{animation:toastOut .25s ease forwards}

/* HEADER */
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:24px;padding-bottom:18px;border-bottom:1px solid var(--bdm);flex-wrap:wrap;gap:12px}
.topbar-L{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.ch-badge{font-family:var(--mono);font-size:10.5px;font-weight:700;color:var(--violet);padding:5px 11px;background:rgba(192,132,252,0.08);border:1px solid var(--bd-v);border-radius:var(--r1);letter-spacing:2px}
.ch-title{font-size:22px;font-weight:800;color:var(--t1);line-height:1.2;letter-spacing:-0.6px}
.ch-title .acc{color:var(--violet)}
.topbar-R{display:flex;gap:8px;flex-wrap:wrap}
.pill{font-family:var(--mono);font-size:10px;font-weight:700;padding:5px 10px;border-radius:var(--r1);border:1px solid var(--bdm);color:var(--t3);background:var(--card)}
.pill.pts{color:var(--amber);border-color:var(--bd-a)}
.pill.time{color:var(--cyan);border-color:var(--bd-c)}
.pill.prio{color:var(--violet);border-color:var(--bd-v)}

/* WELCOME */
.welcome{display:none;padding:14px 16px;background:linear-gradient(135deg,rgba(192,132,252,0.08),rgba(34,211,238,0.06));border:1px solid var(--bd-v);border-radius:var(--r2);margin-bottom:20px;position:relative;overflow:hidden;animation:slideDown .4s ease}
.welcome.show{display:block}
.welcome::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--violet),var(--cyan),var(--amber))}
.welcome-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:6px}
.welcome-h{font-size:14px;font-weight:700;color:var(--violet)}
.welcome-x{background:none;border:none;color:var(--t3);font-size:18px;cursor:pointer;padding:0 4px;line-height:1}
.welcome-x:hover{color:var(--t1)}
.welcome-t{font-size:12.5px;color:var(--t2);line-height:1.55}
.welcome-t strong{color:var(--t1)}
@keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}

/* RESTORE */
.restore{display:none;padding:10px 14px;background:rgba(34,211,238,0.06);border:1px solid var(--bd-c);border-radius:var(--r2);margin-bottom:16px;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.restore.show{display:flex}
.restore-t{font-family:var(--mono);font-size:11px;color:var(--cyan)}
.restore-btn{padding:5px 12px;background:var(--cyan);color:var(--bg);border:none;border-radius:var(--r1);font-family:var(--mono);font-size:10.5px;font-weight:700;cursor:pointer}
.restore-x{background:none;border:none;color:var(--t3);cursor:pointer;font-size:14px;padding:0 4px}

/* FROM BANNER */
.from-banner{display:none;padding:10px 14px;background:rgba(245,158,11,0.06);border:1px solid var(--bd-a);border-radius:var(--r2);margin-bottom:16px;align-items:center;gap:10px;font-family:var(--mono);font-size:11px;color:var(--amber)}
.from-banner.show{display:flex}

/* TABS */
.tabs{display:flex;gap:6px;margin-bottom:22px;border-bottom:1px solid var(--bdm);padding-bottom:0;overflow-x:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tab{flex:1;min-width:120px;padding:12px 14px;background:transparent;border:none;border-bottom:2px solid transparent;font-family:var(--mono);font-size:11.5px;font-weight:700;color:var(--t3);cursor:pointer;transition:all .2s;position:relative;white-space:nowrap;text-align:center;letter-spacing:0.2px}
.tab:hover{color:var(--t2)}
.tab.on{color:var(--violet);border-bottom-color:var(--violet)}
.tab.done::after{content:"✓";position:absolute;top:6px;right:10px;color:var(--green);font-size:12px;font-weight:700}
.tab-meta{display:block;font-size:8.5px;color:var(--t3);font-weight:500;letter-spacing:1px;text-transform:uppercase;margin-top:3px}

.sec{display:none;animation:fadeIn .3s ease}
.sec.on{display:block}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeSlide{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}

/* STATS PANEL */
.stats{display:flex;gap:10px;flex-wrap:wrap;padding:10px 14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);margin-bottom:20px;font-family:var(--mono);font-size:11px}
.stat{display:flex;align-items:center;gap:5px;color:var(--t3)}
.stat strong{color:var(--t1);font-weight:700}
.stat.warn strong{color:var(--amber)}
.stat.ok strong{color:var(--green)}

/* HERO */
.hero{padding:28px 26px;background:linear-gradient(135deg,rgba(192,132,252,0.06),rgba(34,211,238,0.04),rgba(245,158,11,0.04));border:1px solid var(--bd-v);border-radius:var(--r3);margin-bottom:22px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;top:-50%;right:-20%;width:60%;height:200%;background:radial-gradient(circle,rgba(192,132,252,0.08) 0%,transparent 60%);pointer-events:none}
.hero-deco{position:absolute;font-family:var(--mono);font-size:180px;font-weight:700;color:rgba(192,132,252,0.04);right:20px;bottom:-40px;pointer-events:none;line-height:1}
.hero-top{display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap;position:relative;z-index:1}
.hero-kb{font-family:var(--mono);font-size:9.5px;color:var(--violet);letter-spacing:3px;font-weight:700;padding:4px 10px;background:rgba(192,132,252,0.1);border:1px solid var(--bd-v);border-radius:var(--r1);text-transform:uppercase}
.hero-prio{font-family:var(--mono);font-size:10px;color:var(--amber);font-weight:700}
.hero-h{font-size:32px;font-weight:800;line-height:1.1;color:var(--t1);letter-spacing:-1px;position:relative;z-index:1}
.hero-h .acc{color:var(--violet)}
.hero-h .acc2{color:var(--cyan)}
.hero-sub{font-family:var(--mono);font-size:12.5px;color:var(--t3);margin-top:10px;line-height:1.55;position:relative;z-index:1}
.hero-sub strong{color:var(--amber);font-weight:700}
.hero-chips{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap;position:relative;z-index:1}
.hero-chip{font-family:var(--mono);font-size:10px;font-weight:700;padding:5px 10px;border-radius:var(--r1);background:var(--card2);border:1px solid var(--bdm);color:var(--t2);display:inline-flex;align-items:center;gap:5px}
.hero-chip .ci{font-size:11px}
.hero-pts-wrap{display:flex;align-items:center;gap:12px;margin-top:16px;position:relative;z-index:1}
.hero-pts-ring{width:48px;height:48px;flex-shrink:0;position:relative}
.hero-pts-ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.hero-pts-ring text{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
.hero-pts-lbl{font-family:var(--mono);font-size:11px;color:var(--t3);line-height:1.5}
.hero-pts-lbl strong{color:var(--amber);font-size:13px;font-weight:700}

/* ACHIEVEMENTS */
.ach-wrap{display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;position:relative;z-index:1}
.ach-badge{display:flex;align-items:center;gap:6px;padding:6px 10px;background:var(--card2);border:1px solid var(--bdm);border-radius:var(--r1);font-family:var(--mono);font-size:10px;color:var(--t3);opacity:0.45;transition:all .4s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden}
.ach-badge.got{opacity:1;border-color:var(--bd-v);background:rgba(192,132,252,0.08);color:var(--t1);animation:achPop .6s cubic-bezier(.34,1.56,.64,1)}
.ach-badge.got::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(192,132,252,0.2),transparent);animation:achShimmer 2s ease infinite}
.ach-ico{font-size:13px}
.ach-badge.got .ach-ico{filter:drop-shadow(0 0 4px rgba(192,132,252,0.6))}
@keyframes achPop{0%{transform:scale(1)}40%{transform:scale(1.15)}100%{transform:scale(1)}}
@keyframes achShimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}

/* STAT GRID */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:18px;position:relative;z-index:1}
.stat-card{padding:12px 14px;background:var(--card2);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .2s;cursor:default}
.stat-card:hover{border-color:var(--bd-v);transform:translateY(-2px);box-shadow:0 4px 12px rgba(192,132,252,0.1)}
.stat-card .sc-ico{font-size:14px;margin-bottom:6px;display:inline-block}
.stat-card .sc-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--t1);margin-bottom:3px}
.stat-card .sc-t{font-family:var(--mono);font-size:10px;color:var(--t3);line-height:1.45}
.stat-card .sc-t strong{color:var(--cyan)}

/* CONNECT CARDS u L0 */
.box-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:10px;margin-top:16px}
.con{padding:11px 14px;background:var(--inp);border-left:2px solid var(--violet);border-radius:var(--r1);font-family:var(--mono);font-size:11.5px;line-height:1.55;color:var(--t2);display:flex;gap:8px}
.con::before{content:attr(data-no);color:var(--violet);font-weight:700;flex-shrink:0;min-width:22px}
.con strong{color:var(--t1);font-weight:600}
.con em{color:var(--amber);font-style:normal;font-weight:600}
.con .fm{display:inline-block;margin:0 2px}

/* BOX FORMULA */
.box-for{padding:16px 18px;background:linear-gradient(135deg,rgba(245,158,11,0.05),rgba(192,132,252,0.04));border:1px solid var(--bd-a);border-radius:var(--r2);margin-top:16px;position:relative}
.box-for-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--amber);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase}
.for-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px}
.for-item{padding:10px 12px;background:rgba(6,9,16,0.5);border-radius:var(--r1);font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.55}
.for-item .lbl{display:block;font-size:9.5px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px}
.for-item .val{color:var(--t1);font-weight:700;font-size:13px}

/* BOX 20 sec */
.box-20{padding:14px 16px;background:rgba(34,211,238,0.04);border:1px solid var(--bd-c);border-radius:var(--r2);margin-top:14px}
.box-20-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--cyan);letter-spacing:2px;margin-bottom:8px;text-transform:uppercase}
.box-20-list{font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.85}
.box-20-list li{list-style:none;padding-left:18px;position:relative}
.box-20-list li::before{content:"→";position:absolute;left:0;color:var(--cyan);font-weight:700}

/* FORMULE */
.fm{font-family:var(--mono);display:inline-flex;align-items:center;gap:1px;letter-spacing:0;line-height:1.4}
.frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;font-size:0.88em;margin:0 2px;line-height:1}
.frac-top{padding:0 3px;border-bottom:1.5px solid currentColor}
.frac-bot{padding:2px 3px 0}
.sqrt{display:inline-flex;align-items:center}
.sqrt::before{content:"√";font-size:1em;margin-right:1px}
.sqrt-arg{border-top:1.5px solid currentColor;padding:0 2px;margin-left:-1px}
sup,sub{font-size:0.7em;line-height:0}


/* ───── SEKCIJA HEADERI ───── */
.sec-head{display:flex;align-items:center;gap:10px;margin:28px 0 14px;padding-bottom:10px;border-bottom:1px solid var(--bdm)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--violet);letter-spacing:2px;padding:4px 9px;background:rgba(192,132,252,0.08);border:1px solid var(--bd-v);border-radius:var(--r1);text-transform:uppercase}
.sec-h{font-size:17px;font-weight:700;color:var(--t1);letter-spacing:-0.3px}

.sec-body{font-size:13.5px;color:var(--t2);line-height:1.75}
.sec-body p{margin-bottom:10px}
.sec-body strong{color:var(--t1);font-weight:600}
.sec-body em{color:var(--amber);font-style:normal;font-weight:600}
.sec-body code{font-family:var(--mono);font-size:0.9em;padding:1px 6px;background:var(--inp);border:1px solid var(--bdm);border-radius:4px;color:var(--violet)}

.emph{padding:11px 14px;background:var(--inp);border-left:2px solid var(--violet);border-radius:var(--r1);margin:10px 0;font-size:12.5px;color:var(--t2);line-height:1.6}
.emph strong{color:var(--violet)}

.callout{padding:11px 14px;border-radius:var(--r2);margin:12px 0;font-size:12.5px;line-height:1.6;display:flex;gap:9px;align-items:flex-start}
.callout-i{font-size:15px;flex-shrink:0;line-height:1.3}
.callout-t{flex:1}
.callout-t strong{color:var(--t1);font-weight:700}
.callout.tip{background:rgba(34,211,238,0.05);border:1px solid var(--bd-c);color:var(--t2)}
.callout.warn{background:rgba(245,158,11,0.05);border:1px solid var(--bd-a);color:var(--t2)}
.callout.key{background:rgba(192,132,252,0.05);border:1px solid var(--bd-v);color:var(--t2)}
.callout.err{background:rgba(248,113,113,0.05);border:1px solid var(--bd-r);color:var(--t2)}

/* ───── PARABOLA EXPLORER 2.0 ───── */
.pbx-wrap{margin-top:16px;padding:16px 18px;background:var(--card);border:1px solid var(--bd-v);border-radius:var(--r3);position:relative;overflow:hidden}
.pbx-wrap::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--violet),var(--cyan),var(--amber))}
.pbx-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px}
.pbx-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--violet);letter-spacing:2px;text-transform:uppercase}
.pbx-title::before{content:"◆ ";color:var(--violet)}
.pbx-badge{font-family:var(--mono);font-size:8.5px;color:var(--cyan);padding:3px 7px;background:rgba(34,211,238,0.08);border:1px solid var(--bd-c);border-radius:var(--r1);letter-spacing:1px;font-weight:700}

.pbx-mode-tabs{display:flex;gap:6px;margin-bottom:10px}
.pbx-mode-tab{flex:1;padding:7px 10px;background:var(--inp);border:1px solid var(--bdm);color:var(--t3);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;cursor:pointer;transition:all .15s;text-align:center;letter-spacing:0.5px}
.pbx-mode-tab:hover{color:var(--t1);border-color:var(--bd-v)}
.pbx-mode-tab.on{background:rgba(192,132,252,0.1);border-color:var(--violet);color:var(--violet)}

.pbx-canvas-wrap{position:relative;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);overflow:hidden}
.pbx-canvas{display:block;width:100%;height:auto;max-width:100%;cursor:crosshair}
.pbx-canvas.drag-mode{cursor:grab}
.pbx-canvas.drag-mode:active{cursor:grabbing}

.pbx-zoom{position:absolute;top:8px;right:8px;display:flex;flex-direction:column;gap:4px;z-index:2}
.pbx-zoom-btn{width:30px;height:30px;background:rgba(15,22,32,0.92);border:1px solid var(--bdm);border-radius:var(--r1);color:var(--t2);font-family:var(--mono);font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center}
.pbx-zoom-btn:hover{background:var(--card);color:var(--cyan);border-color:var(--bd-c)}
.pbx-zoom-lbl{position:absolute;bottom:8px;right:8px;font-family:var(--mono);font-size:9.5px;color:var(--t3);background:rgba(15,22,32,0.92);padding:3px 7px;border-radius:var(--r1);border:1px solid var(--bdm);font-weight:700}

.pbx-controls{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
@media(max-width:560px){.pbx-controls{grid-template-columns:1fr}}
.pbx-ctrl{padding:8px 10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r1);display:flex;flex-direction:column;gap:4px}
.pbx-ctrl-row{display:flex;align-items:center;justify-content:space-between;gap:8px}
.pbx-ctrl-lbl{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);letter-spacing:0.5px}
.pbx-ctrl-val{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--amber)}
.pbx-ctrl-val.ok{color:var(--green)}
.pbx-ctrl-val.v{color:var(--violet)}
.pbx-slider{width:100%;height:4px;background:var(--bdm);border-radius:2px;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}
.pbx-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;background:var(--amber);border-radius:50%;cursor:pointer;border:2px solid var(--bg);box-shadow:0 0 0 1px var(--amber);transition:transform .1s}
.pbx-slider::-webkit-slider-thumb:hover{transform:scale(1.2)}
.pbx-slider::-moz-range-thumb{width:16px;height:16px;background:var(--amber);border-radius:50%;cursor:pointer;border:2px solid var(--bg);box-shadow:0 0 0 1px var(--amber)}

.pbx-presets{display:flex;gap:6px;flex-wrap:wrap;margin-top:12px}
.pbx-preset{padding:6px 11px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;cursor:pointer;transition:all .15s}
.pbx-preset:hover{border-color:var(--bd-v);color:var(--violet);background:rgba(192,132,252,0.06)}
.pbx-preset.on{background:rgba(192,132,252,0.12);border-color:var(--violet);color:var(--violet)}

.pbx-legend{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;padding:10px 12px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r1);font-family:var(--mono);font-size:10px}
.pbx-leg{display:flex;align-items:center;gap:6px;color:var(--t3)}
.pbx-leg-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.pbx-leg strong{color:var(--t1);font-weight:700}

.pbx-info{margin-top:10px;padding:10px 12px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r1);font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.6}
.pbx-info strong{color:var(--t1)}
.pbx-info .p-d{font-weight:700}
.pbx-info .p-d.pos{color:var(--green)}
.pbx-info .p-d.zero{color:var(--amber)}
.pbx-info .p-d.neg{color:var(--red)}

.pbx-challenge-wrap{margin-top:12px;padding:12px 14px;background:var(--inp);border:1px solid var(--bd-p);border-radius:var(--r2);display:none}
.pbx-challenge-wrap.show{display:block;animation:fadeSlide .3s ease}
.pbx-challenge-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px}
.pbx-challenge-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--pink);letter-spacing:2px;text-transform:uppercase}
.pbx-challenge-stats{font-family:var(--mono);font-size:10px;color:var(--t3);font-weight:700}
.pbx-challenge-stats strong{color:var(--amber)}
.pbx-challenge-task{font-family:var(--mono);font-size:12.5px;color:var(--t1);font-weight:600;line-height:1.55;margin-bottom:8px;min-height:36px}
.pbx-challenge-fb{font-family:var(--mono);font-size:11px;padding:8px 11px;border-radius:var(--r1);display:none;margin-top:7px;line-height:1.55}
.pbx-challenge-fb.show{display:block;animation:fadeSlide .3s ease}
.pbx-challenge-fb.ok{color:var(--green);background:rgba(52,211,153,0.1);border:1px solid var(--bd-g)}
.pbx-challenge-fb.ng{color:var(--red);background:rgba(248,113,113,0.1);border:1px solid var(--bd-r)}
.pbx-challenge-toggle{padding:6px 12px;background:transparent;border:1px solid var(--bd-p);color:var(--pink);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s}
.pbx-challenge-toggle:hover{background:rgba(244,114,182,0.1)}
.pbx-challenge-toggle.on{background:rgba(244,114,182,0.15)}
.pbx-btn{padding:7px 14px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s}
.pbx-btn:hover{border-color:var(--bd-v);color:var(--violet)}

/* ───── D-METER ───── */
.dmeter-wrap{margin:14px 0 12px;padding:12px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2)}
.dmeter-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px}
.dmeter-lbl{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1px;text-transform:uppercase}
.dmeter-val{font-family:var(--mono);font-size:14px;font-weight:700;color:var(--amber)}
.dmeter-bar{position:relative;height:8px;background:linear-gradient(90deg,rgba(248,113,113,0.15) 0%,rgba(248,113,113,0.15) 49%,rgba(245,158,11,0.15) 49%,rgba(245,158,11,0.15) 51%,rgba(52,211,153,0.15) 51%,rgba(52,211,153,0.15) 100%);border-radius:4px;overflow:hidden;border:1px solid var(--bdm)}
.dmeter-fill{position:absolute;top:0;bottom:0;left:50%;width:0;background:var(--amber);border-radius:0;transform-origin:left;transition:all .3s cubic-bezier(.34,1.56,.64,1);box-shadow:0 0 8px rgba(245,158,11,0.6)}
.dmeter-fill.pos{background:var(--green);box-shadow:0 0 8px rgba(52,211,153,0.6)}
.dmeter-fill.neg{background:var(--red);box-shadow:0 0 8px rgba(248,113,113,0.6);transform-origin:right;right:50%;left:auto}
.dmeter-zero{position:absolute;top:-3px;bottom:-3px;left:50%;width:2px;background:var(--t3);transform:translateX(-50%);z-index:1}
.dmeter-legend{display:flex;justify-content:space-between;margin-top:5px;font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700}
.dmeter-legend span:nth-child(1){color:var(--red)}
.dmeter-legend span:nth-child(2){color:var(--amber)}
.dmeter-legend span:nth-child(3){color:var(--green)}
.dmeter-desc{margin-top:8px;font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.5}
.dmeter-desc strong{color:var(--t1)}

/* ───── SR (Short Reponse) PRIMJERI ───── */
.sr{padding:14px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);margin-top:14px;position:relative;overflow:hidden}
.sr.done{border-color:var(--bd-g)}
.sr-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;flex-wrap:wrap;gap:6px}
.sr-no{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--violet);letter-spacing:2px;text-transform:uppercase;padding:3px 8px;background:rgba(192,132,252,0.08);border-radius:var(--r1)}
.sr-pts{font-family:var(--mono);font-size:9.5px;color:var(--amber);font-weight:700}
.sr-q{font-size:13px;color:var(--t1);font-weight:600;line-height:1.55;margin-bottom:8px}
.sr-minigraph{display:flex;justify-content:center;margin:8px 0 10px}
.sr-minigraph svg{max-width:100%;height:auto}
.sr-try{padding:8px 13px;background:linear-gradient(135deg,var(--violet),var(--cyan));color:var(--bg);border:none;border-radius:var(--r1);font-family:var(--mono);font-size:10.5px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-try:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(192,132,252,0.3)}
.sr-try.done{background:var(--inp);color:var(--t3);border:1px solid var(--bdm)}
.sr-steps{margin-top:10px;display:none;flex-direction:column;gap:8px}
.sr-steps.show{display:flex;animation:fadeSlide .3s ease}
.sr-step{padding:9px 12px;background:var(--inp);border-left:2px solid var(--amber);border-radius:var(--r1);font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.6;animation:fadeSlide .25s ease}
.sr-step strong{color:var(--amber);margin-right:6px}
.sr-step em{color:var(--cyan);font-style:normal;font-weight:600}
.sr-steps-ctrl{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap}
.sr-next{padding:6px 12px;background:transparent;border:1px solid var(--bd-a);color:var(--amber);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-next:hover{background:rgba(245,158,11,0.08)}
.sr-rst{padding:6px 12px;background:transparent;border:1px solid var(--bdm);color:var(--t3);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-rst:hover{color:var(--t1)}

/* ───── FLASHCARDS ───── */
.fc-row{display:flex;justify-content:space-between;align-items:center;margin-top:16px;margin-bottom:10px;flex-wrap:wrap;gap:8px}
.fc-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--t3);letter-spacing:2px;text-transform:uppercase}
.fc-ctrl{display:flex;gap:6px}
.fc-all-btn{padding:5px 11px;background:transparent;border:1px solid var(--bdm);color:var(--t3);font-family:var(--mono);font-size:10px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s}
.fc-all-btn:hover{color:var(--t1);border-color:var(--violet)}
.fc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:10px}
.fc{perspective:1000px;height:140px;cursor:pointer;position:relative;transition:transform .15s}
.fc:hover{transform:translateY(-2px)}
.fc-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.34,1.56,.64,1)}
.fc.flipped .fc-inner{transform:rotateY(180deg)}
.fc-f,.fc-b{position:absolute;width:100%;height:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:var(--r2);padding:14px 16px;display:flex;flex-direction:column;justify-content:center;text-align:center;overflow:hidden}
.fc-f{background:var(--card);border:1px solid var(--bdm)}
.fc-b{background:var(--card2);border:1px solid var(--bd-v);transform:rotateY(180deg)}
.fc-q{font-size:12.5px;color:var(--t1);font-weight:600;line-height:1.5}
.fc-a{font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.6}
.fc-a strong{color:var(--cyan);font-weight:700}
.fc-hint{position:absolute;bottom:6px;right:8px;font-family:var(--mono);font-size:8.5px;color:var(--t3);opacity:0.6}
.fc-tag{position:absolute;top:6px;left:8px;font-family:var(--mono);font-size:8.5px;color:var(--violet);opacity:0.8;font-weight:700;letter-spacing:1px}

/* ───── KALKULATOR ───── */
.calc-wrap{margin-top:14px;background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r2);overflow:hidden}
.calc-head{padding:10px 14px;background:rgba(34,211,238,0.04);border-bottom:1px solid var(--bd-c)}
.calc-title{font-family:var(--mono);font-size:10.5px;color:var(--cyan);font-weight:700;letter-spacing:1px}
.calc-tabs{display:flex;gap:0;border-bottom:1px solid var(--bdm)}
.calc-tab{flex:1;padding:8px 10px;background:var(--inp);border:none;border-right:1px solid var(--bdm);color:var(--t3);font-family:var(--mono);font-size:10.5px;font-weight:700;cursor:pointer;transition:all .15s;letter-spacing:0.3px}
.calc-tab:last-child{border-right:none}
.calc-tab:hover{color:var(--t1)}
.calc-tab.on{background:var(--card);color:var(--cyan)}
.calc-body{padding:12px 14px}
.calc-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.calc-lbl{font-family:var(--mono);font-size:11px;color:var(--t2);font-weight:600}
.calc-in{padding:6px 9px;background:var(--inp);border:1px solid var(--bdm);color:var(--t1);font-family:var(--mono);font-size:12px;font-weight:600;border-radius:var(--r1);outline:none;transition:border-color .15s}
.calc-in:focus{border-color:var(--cyan)}
.calc-go{padding:7px 13px;background:var(--cyan);color:var(--bg);border:none;border-radius:var(--r1);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer;transition:all .15s;margin-left:auto}
.calc-go:hover{transform:translateY(-1px);box-shadow:0 3px 10px rgba(34,211,238,0.3)}
.calc-result{margin-top:10px;padding:11px 13px;background:var(--inp);border-radius:var(--r1);font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.7;display:none}
.calc-result.show{display:block;animation:fadeSlide .3s ease}
.calc-res-key{color:var(--t3);font-size:10px;display:inline-block;margin-bottom:2px}
.calc-res-val{color:var(--cyan);font-weight:700;font-size:14px}

/* ───── NCVVO ZADACI ───── */
.ncvvo-wrap{margin-top:14px}
.ncvvo-item{display:flex;gap:14px;padding:14px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);margin-bottom:10px}
.ncvvo-item:hover{border-color:var(--bd-v)}
.ncvvo-no{width:40px;height:40px;flex-shrink:0;border-radius:var(--r1);background:rgba(192,132,252,0.08);border:1px solid var(--bd-v);color:var(--violet);font-family:var(--mono);font-size:14px;font-weight:700;display:flex;align-items:center;justify-content:center}
.ncvvo-content{flex:1;min-width:0}

/* ───── GON (Točno/Netočno) ───── */
.gon-wrap{margin-top:14px;padding:16px 18px;background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r3)}
.gon-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px}
.gon-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--cyan);letter-spacing:2px;text-transform:uppercase}
.gon-score{font-family:var(--mono);font-size:11px;color:var(--t3);font-weight:700}
.gon-score strong{color:var(--amber)}
.gon-prog{height:3px;background:var(--bdm);border-radius:2px;overflow:hidden;margin-bottom:10px}
.gon-prog-fill{height:100%;background:linear-gradient(90deg,var(--cyan),var(--green));transition:width .3s ease;width:0%}
.gon-card{padding:12px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);margin-bottom:8px;transition:all .2s;position:relative}
.gon-card.ok{border-color:var(--bd-g);background:rgba(52,211,153,0.05)}
.gon-card.ng{border-color:var(--bd-r);background:rgba(248,113,113,0.05)}
.gon-card.show-hint{border-color:var(--bd-a)}
.gon-stmt{font-family:var(--mono);font-size:12px;color:var(--t1);font-weight:600;line-height:1.55;margin-bottom:8px}
.gon-no{display:inline-block;font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:700;margin-bottom:5px;letter-spacing:1px}
.gon-btns{display:flex;gap:6px}
.gon-btn{flex:1;padding:7px 10px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s}
.gon-btn:hover{color:var(--t1);border-color:var(--cyan)}
.gon-btn.ok-chosen{background:rgba(52,211,153,0.12);border-color:var(--green);color:var(--green)}
.gon-btn.ng-chosen{background:rgba(248,113,113,0.12);border-color:var(--red);color:var(--red)}
.gon-exp{display:none;margin-top:8px;padding:8px 11px;background:rgba(6,9,16,0.5);border-left:2px solid var(--violet);border-radius:var(--r1);font-family:var(--mono);font-size:10.5px;color:var(--t2);line-height:1.55}
.gon-exp.show{display:block;animation:fadeSlide .25s ease}
.gon-exp strong{color:var(--violet)}

/* ───── DRILL ───── */
.drill-wrap{margin-top:14px;padding:16px 18px;background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r3)}
.drill-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px}
.drill-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase}
.drill-score{font-family:var(--mono);font-size:11px;color:var(--t3);font-weight:700}
.drill-score strong{color:var(--amber)}
.drill-prog{height:3px;background:var(--bdm);border-radius:2px;overflow:hidden;margin-bottom:12px}
.drill-prog-fill{height:100%;background:var(--amber);transition:width .3s ease;width:0%}
.drill-q{font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.55;margin-bottom:10px;min-height:40px}
.drill-no{display:inline-block;font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:700;margin-bottom:6px;letter-spacing:1px}
.drill-opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;margin-bottom:10px}
.drill-opt{padding:10px 12px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:12px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s;text-align:center;line-height:1.3}
.drill-opt:hover{color:var(--t1);border-color:var(--amber)}
.drill-opt.ok{background:rgba(52,211,153,0.1);border-color:var(--green);color:var(--green)}
.drill-opt.ng{background:rgba(248,113,113,0.1);border-color:var(--red);color:var(--red)}
.drill-fb{font-family:var(--mono);font-size:11px;padding:8px 11px;border-radius:var(--r1);line-height:1.55;display:none;margin-bottom:10px}
.drill-fb.ok{color:var(--green);background:rgba(52,211,153,0.08);border:1px solid var(--bd-g)}
.drill-fb.ng{color:var(--red);background:rgba(248,113,113,0.08);border:1px solid var(--bd-r)}
.drill-fb.show{display:block;animation:fadeSlide .25s ease}
.drill-ctrl{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}
.drill-streak{font-family:var(--mono);font-size:11px;color:var(--amber);font-weight:700}
.drill-next{padding:8px 18px;background:var(--amber);color:var(--bg);border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer;display:none;transition:all .15s}
.drill-next.show{display:inline-flex}
.drill-next:hover{transform:translateY(-1px)}
.dr-hint-btn{display:none;padding:6px 11px;background:transparent;border:1px solid var(--bd-a);color:var(--amber);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s;margin-left:8px}
.dr-hint-btn.show{display:inline-flex}
.dr-hint-btn:hover{background:rgba(245,158,11,0.08)}
.dr-hint{display:none;margin:8px 0 10px;padding:8px 11px;background:rgba(245,158,11,0.05);border-left:2px solid var(--amber);border-radius:var(--r1);font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.55}
.dr-hint.show{display:block;animation:fadeSlide .25s ease}
.dr-hint strong{color:var(--amber)}
.dr-fav-btn{padding:6px 10px;background:transparent;border:1px solid var(--bdm);color:var(--t3);font-family:var(--mono);font-size:12px;border-radius:var(--r1);cursor:pointer;transition:all .15s;margin-left:auto}
.dr-fav-btn:hover{border-color:var(--amber);color:var(--amber)}
.dr-fav-btn.on{background:rgba(245,158,11,0.1);border-color:var(--amber);color:var(--amber)}
.dr-filters{display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap}
.dr-filter{padding:4px 10px;background:var(--inp);border:1px solid var(--bdm);color:var(--t3);font-family:var(--mono);font-size:9.5px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s;letter-spacing:0.5px}
.dr-filter:hover{color:var(--t1)}
.dr-filter.on{background:rgba(245,158,11,0.1);border-color:var(--amber);color:var(--amber)}

/* FAVORITES */
.fav-panel{display:none;margin-top:14px;padding:14px 16px;background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r2)}
.fav-panel.show{display:block;animation:fadeSlide .3s ease}
.fav-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.fav-empty{font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;padding:20px;line-height:1.6}
.fav-item{padding:9px 12px;background:var(--inp);border-left:2px solid var(--amber);border-radius:var(--r1);margin-bottom:6px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.5}
.fav-item-t{flex:1}
.fav-item-x{background:none;border:none;color:var(--t3);cursor:pointer;font-size:13px;padding:0 4px;line-height:1}
.fav-item-x:hover{color:var(--red)}
.fav-item-go{padding:4px 9px;background:transparent;border:1px solid var(--bdm);color:var(--t3);font-family:var(--mono);font-size:9px;font-weight:700;border-radius:var(--r1);cursor:pointer}
.fav-item-go:hover{color:var(--amber);border-color:var(--amber)}

/* ───── TIMER ───── */
.timer-wrap{margin-top:16px;padding:14px 16px;background:linear-gradient(135deg,rgba(245,158,11,0.04),rgba(192,132,252,0.04));border:1px solid var(--bd-a);border-radius:var(--r2)}
.timer-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px}
.timer-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase}
.timer-ctrl{display:flex;gap:6px;align-items:center}
.timer-display{font-family:var(--mono);font-size:26px;font-weight:700;color:var(--t1);letter-spacing:2px;padding:0 10px}
.timer-display.warn{color:var(--amber)}
.timer-display.crit{color:var(--red);animation:pulseRed 1s ease infinite}
@keyframes pulseRed{50%{opacity:0.6}}
.timer-btn{padding:6px 12px;background:transparent;border:1px solid var(--bd-a);color:var(--amber);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s}
.timer-btn:hover{background:rgba(245,158,11,0.08)}
.timer-btn.active{background:var(--amber);color:var(--bg)}
.timer-info{font-family:var(--mono);font-size:10.5px;color:var(--t3);line-height:1.5}
.timer-info strong{color:var(--amber)}

/* ───── KVIZ ───── */
.quiz-wrap{margin-top:16px;padding:18px 20px;background:var(--card);border:1px solid var(--bd-v);border-radius:var(--r3);position:relative}
.quiz-wrap.locked::before{content:"🔒 Pokreni timer za start";position:absolute;inset:0;background:rgba(6,9,16,0.82);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;border-radius:var(--r3);font-family:var(--mono);font-size:12px;color:var(--amber);font-weight:700;z-index:5}
.quiz-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px}
.quiz-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--violet);letter-spacing:2px;text-transform:uppercase}
.quiz-count{font-family:var(--mono);font-size:10.5px;color:var(--t3);font-weight:700}
.qb{padding:12px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);margin-bottom:10px;transition:all .2s;filter:blur(0)}
.qb-locked{filter:blur(3px);pointer-events:none}
.qb-no{display:inline-block;font-family:var(--mono);font-size:9.5px;color:var(--violet);font-weight:700;letter-spacing:2px;margin-bottom:4px}
.qb-q{font-size:13px;color:var(--t1);font-weight:600;line-height:1.55;margin-bottom:10px}
.qb-opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:6px}
.qb-opt{padding:9px 11px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:11.5px;font-weight:600;border-radius:var(--r1);cursor:pointer;transition:all .15s;text-align:center;line-height:1.3}
.qb-opt:hover{color:var(--t1);border-color:var(--violet)}
.qb-opt.sel{background:rgba(192,132,252,0.1);border-color:var(--violet);color:var(--violet)}
.qb-opt.ok{background:rgba(52,211,153,0.12);border-color:var(--green);color:var(--green)}
.qb-opt.ng{background:rgba(248,113,113,0.12);border-color:var(--red);color:var(--red)}
.qb-exp{margin-top:9px;padding:8px 11px;background:rgba(6,9,16,0.5);border-left:2px solid var(--cyan);border-radius:var(--r1);font-family:var(--mono);font-size:10.5px;color:var(--t2);display:none;line-height:1.55}
.qb-exp.show{display:block;animation:fadeSlide .25s ease}
.qb-exp strong{color:var(--cyan)}

.quiz-go{margin-top:14px;padding:10px 22px;background:linear-gradient(135deg,var(--violet),var(--cyan));color:var(--bg);border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;width:100%}
.quiz-go:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(192,132,252,0.3)}
.quiz-go:disabled{opacity:0.4;cursor:not-allowed;transform:none;box-shadow:none}

.score-box{margin-top:16px;padding:16px 18px;background:var(--card);border:2px solid var(--bd-v);border-radius:var(--r2);display:none;text-align:center}
.score-box.show{display:block;animation:fadeSlide .4s ease}
.score-num{font-size:32px;font-weight:800;color:var(--violet);font-family:var(--mono);letter-spacing:-1px}
.score-pct{font-family:var(--mono);font-size:14px;color:var(--t1);font-weight:700;margin-top:4px}
.score-msg{font-family:var(--mono);font-size:11.5px;color:var(--t2);margin-top:6px;line-height:1.55}
.score-actions{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:12px}
.score-btn{padding:7px 14px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s}
.score-btn:hover{border-color:var(--violet);color:var(--violet)}
.score-breakdown{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:12px}
.score-cell{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:10px;font-weight:700;border-radius:var(--r1);border:1px solid var(--bdm)}
.score-cell.ok{background:rgba(52,211,153,0.12);border-color:var(--bd-g);color:var(--green)}
.score-cell.ng{background:rgba(248,113,113,0.12);border-color:var(--bd-r);color:var(--red)}

/* ───── CHECKPOINT ───── */
.cp-wrap{margin-top:18px;padding:18px 20px;background:linear-gradient(135deg,rgba(52,211,153,0.04),rgba(34,211,238,0.04));border:1px solid var(--bd-g);border-radius:var(--r3)}
.cp-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--green);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px}
.cp-list{display:flex;flex-direction:column;gap:8px}
.cp-item{display:flex;align-items:center;gap:10px;padding:10px 12px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r1);cursor:pointer;transition:all .15s}
.cp-item:hover{border-color:var(--bd-g)}
.cp-item.done{border-color:var(--bd-g);background:rgba(52,211,153,0.05)}
.cp-checkbox{width:18px;height:18px;border:1.5px solid var(--t3);border-radius:4px;display:flex;align-items:center;justify-content:center;transition:all .15s;flex-shrink:0}
.cp-item.done .cp-checkbox{background:var(--green);border-color:var(--green)}
.cp-item.done .cp-checkbox::after{content:"✓";color:var(--bg);font-weight:700;font-size:12px}
.cp-text{font-family:var(--mono);font-size:11.5px;color:var(--t2);font-weight:600;line-height:1.5}
.cp-item.done .cp-text{color:var(--t1)}
.cp-msg-hint{margin-top:14px;padding:10px 14px;background:rgba(245,158,11,0.04);border:1px dashed var(--bd-a);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--amber);text-align:center;line-height:1.55}
.cp-ready{display:none;margin-top:14px;padding:12px 16px;background:linear-gradient(135deg,var(--green),var(--cyan));color:var(--bg);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;text-align:center;animation:fadeSlide .4s ease}
.cp-ready.show{display:block}

/* ───── DISCERE CTA ───── */
.discere-cta{margin-top:22px;padding:20px 22px;background:linear-gradient(135deg,rgba(245,158,11,0.08),rgba(192,132,252,0.06));border:1px solid var(--bd-a);border-radius:var(--r3);position:relative;overflow:hidden}
.discere-cta::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--violet))}
.discere-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px}
.discere-t{font-size:14px;color:var(--t1);font-weight:600;line-height:1.55;margin-bottom:12px}
.discere-btn{padding:11px 22px;background:var(--amber);color:var(--bg);border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;display:inline-flex;align-items:center;gap:8px}
.discere-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(245,158,11,0.3)}

/* ───── CONNECT NEXT ───── */
.cn-wrap{margin-top:22px}
.cn-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--t3);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.cn-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}
.cn-card{padding:14px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;transition:all .15s;display:flex;flex-direction:column;gap:4px}
.cn-card:hover{border-color:var(--bd-v);transform:translateY(-2px);box-shadow:0 4px 12px rgba(192,132,252,0.1)}
.cn-h{font-family:var(--mono);font-size:10px;color:var(--violet);font-weight:700;letter-spacing:2px;text-transform:uppercase}
.cn-t{font-size:13px;color:var(--t1);font-weight:600}
.cn-s{font-family:var(--mono);font-size:10.5px;color:var(--t3);margin-top:2px}

/* ───── CONFETTI ───── */
.confetti-wrap{position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden}
.confetti-p{position:absolute;width:8px;height:8px;animation:confettiFall 3s linear forwards}
@keyframes confettiFall{to{transform:translateY(110vh) rotate(720deg);opacity:0}}

/* ───── RESPONSIVE ───── */
@media(max-width:900px){
  .sidebar{width:220px}
  .wrap{padding:20px 20px 60px}
}
@media(max-width:720px){
  .app{flex-direction:column}
  .wrap{padding:14px 16px 60px;padding-top:64px}
  .hero{padding:22px 18px}
  .hero-h{font-size:26px}
  .hero-deco{font-size:120px;right:10px}
  .tab-meta{display:none}
  .tab{min-width:80px;padding:10px 8px;font-size:11px}
  .ch-title{font-size:18px}
}
@media(max-width:480px){
  .wrap{padding:14px 12px 50px}
  .hero{padding:18px 14px}
  .hero-h{font-size:22px}
  .topbar-R{width:100%}
  .stats{flex-direction:column;gap:6px;padding:10px 12px}
  .qb-opts{grid-template-columns:1fr 1fr}
  .drill-opts{grid-template-columns:1fr 1fr}
  .pbx-zoom{top:4px;right:4px}
  .pbx-zoom-btn{width:26px;height:26px;font-size:12px}
  .toast-wrap{top:auto;bottom:80px;left:10px;right:10px;max-width:none}
  .toast{font-size:10.5px;min-width:0}
}


/* ════ P08 IDENTITY OVERRIDES ════════════════════════════════════ */

/* TOPBAR */
.topbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px;padding-bottom:16px;border-bottom:1px solid var(--bdm);flex-wrap:wrap;gap:14px}
.topbar-L{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
.ch-badge{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--amber);padding:5px 11px;background:var(--dim-a);border:1px solid var(--bd-a);border-radius:20px;letter-spacing:2px}
.ch-title{font-size:22px;font-weight:800;color:var(--t1);line-height:1.2;letter-spacing:-0.6px}
.ch-title .acc{color:var(--amber)}
.topbar-R{display:flex;gap:6px;flex-wrap:wrap}
.pill{font-family:var(--mono);font-size:9.5px;font-weight:700;padding:5px 10px;border-radius:var(--r1);border:1px solid var(--bdm);color:var(--t2);background:var(--ele);letter-spacing:0.5px}
.pill.pts{color:var(--amber);border-color:var(--bd-a);background:var(--dim-a)}
.pill.time{color:var(--cyan);border-color:var(--bd-c);background:var(--dim-c)}
.pill.prio{color:var(--indigo);border-color:var(--bd-i);background:var(--dim-i)}

/* WELCOME */
.welcome{display:none;padding:14px 18px;background:linear-gradient(135deg,var(--dim-a),var(--dim-i));border:1px solid var(--bd-a);border-radius:var(--r3);margin-bottom:20px;position:relative;overflow:hidden}
.welcome.show{display:block;animation:slideDown .4s ease}
.welcome::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--cyan),var(--indigo),transparent)}
.welcome-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:6px}
.welcome-h{font-size:14px;font-weight:700;color:var(--amber)}
.welcome-x{background:none;border:none;color:var(--t3);font-size:16px;cursor:pointer;padding:0 4px;line-height:1;transition:color .15s}
.welcome-x:hover{color:var(--t1)}
.welcome-t{font-size:12.5px;color:var(--t2);line-height:1.65;font-family:var(--mono)}
.welcome-t strong{color:var(--t1);font-weight:600}

/* RESTORE */
.restore{background:var(--dim-c);border:1px solid var(--bd-c)}
.restore-t{color:var(--cyan)}
.restore-btn{background:var(--cyan);color:var(--bg)}

/* FROM BANNER */
.from-banner{background:var(--dim-a);border:1px solid var(--bd-a);color:var(--amber);border-radius:var(--r2)}

/* SKIP LINK */
.skip-link{background:var(--amber)}

/* TABS — P08 style pill container */
.tabs{display:flex;gap:3px;margin-bottom:24px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r3);padding:3px;width:fit-content;max-width:100%;overflow-x:auto;scrollbar-width:none;border-bottom:1px solid var(--bdm)}
.tabs::-webkit-scrollbar{display:none}
.tab{flex:none;padding:8px 14px;background:transparent;border:none;border-bottom:none;font-family:var(--mono);font-size:11px;font-weight:600;color:var(--t2);cursor:pointer;transition:all .18s;white-space:nowrap;text-align:center;letter-spacing:0.3px;border-radius:var(--r2);min-width:auto;display:flex;flex-direction:column;gap:1px;align-items:center;line-height:1.25}
.tab:hover{color:var(--t1)}
.tab.on{background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;font-weight:700;box-shadow:0 2px 14px rgba(245,158,11,0.25);border-bottom:none}
.tab.done::after{content:"✓";position:static;color:var(--green);font-size:10px;font-weight:700;margin-left:4px;display:inline}
.tab.on.done::after{color:#060910}
.tab-meta{display:block;font-size:8px;color:var(--t3);font-weight:500;letter-spacing:1px;text-transform:uppercase;margin-top:1px;opacity:0.8}
.tab.on .tab-meta{color:rgba(6,9,16,0.65)}

/* STATS PANEL */
.stats{display:flex;gap:14px;flex-wrap:wrap;padding:10px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:22px;font-family:var(--mono);font-size:11px}
.stat{display:flex;align-items:center;gap:5px;color:var(--t2)}
.stat strong{color:var(--t1);font-weight:700}
.stat.warn strong{color:var(--amber)}
.stat.ok strong{color:var(--green)}

/* HERO — P08 style: card background, amber/cyan/indigo gradient line */
.hero{margin-bottom:26px;padding:30px 32px;background:var(--card);border:1px solid var(--bdm);border-radius:20px;position:relative;overflow:hidden}
.hero::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--cyan),var(--indigo),transparent)}
.hero-deco{position:absolute;font-family:var(--mono);font-size:160px;font-weight:800;color:rgba(77,158,255,0.035);right:20px;bottom:-30px;pointer-events:none;line-height:1;letter-spacing:-6px}
.hero-top{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap;position:relative;z-index:1}
.hero-kb{font-family:var(--mono);font-size:9.5px;color:var(--amber);letter-spacing:2.5px;font-weight:700;padding:4px 10px;background:var(--dim-a);border:1px solid var(--bd-a);border-radius:20px;text-transform:uppercase}
.hero-prio{font-family:var(--mono);font-size:9.5px;color:var(--amber);font-weight:700;letter-spacing:1px}
.hero-h{font-size:32px;font-weight:800;line-height:1.15;color:var(--t1);letter-spacing:-1px;position:relative;z-index:1}
.hero-h .acc{color:var(--amber)}
.hero-h .acc2{color:var(--cyan)}
.hero-sub{font-family:var(--mono);font-size:12.5px;color:var(--t2);margin-top:12px;line-height:1.65;position:relative;z-index:1;max-width:680px}
.hero-sub strong{color:var(--t1);font-weight:600}
.hero-chips{display:flex;gap:6px;margin-top:16px;flex-wrap:wrap;position:relative;z-index:1}
.hero-chip{font-family:var(--mono);font-size:10px;font-weight:600;padding:5px 10px;border-radius:20px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);display:inline-flex;align-items:center;gap:5px;transition:all .15s}
.hero-chip:hover{border-color:var(--bd-a);color:var(--t1)}
.hero-chip .ci{font-size:11px}
.hero-pts-wrap{display:flex;align-items:center;gap:14px;margin-top:18px;position:relative;z-index:1}
.hero-pts-ring{width:46px;height:46px;flex-shrink:0;position:relative}
.hero-pts-ring svg{width:100%;height:100%;transform:rotate(-90deg)}
.hero-pts-lbl{font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.5}
.hero-pts-lbl strong{color:var(--amber);font-size:14px;font-weight:700}

/* ACHIEVEMENTS — P08-coherent */
.ach-wrap{display:flex;gap:6px;margin-top:16px;flex-wrap:wrap;position:relative;z-index:1}
.ach-badge{display:flex;align-items:center;gap:5px;padding:5px 10px;background:var(--inp);border:1px solid var(--bdm);border-radius:20px;font-family:var(--mono);font-size:10px;color:var(--t3);opacity:0.5;transition:all .4s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden;font-weight:600;letter-spacing:0.3px}
.ach-badge.got{opacity:1;border-color:var(--bd-a);background:var(--dim-a);color:var(--amber);animation:achPop .6s cubic-bezier(.34,1.56,.64,1)}
.ach-badge.got::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(245,158,11,0.18),transparent);animation:achShimmer 2.5s ease infinite}
.ach-ico{font-size:12px;z-index:1}
.ach-badge.got .ach-ico{filter:drop-shadow(0 0 4px rgba(245,158,11,0.6))}
@keyframes achPop{0%{transform:scale(1)}40%{transform:scale(1.15)}100%{transform:scale(1)}}
@keyframes achShimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}

/* STAT GRID */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:10px;margin-top:20px;position:relative;z-index:1}
.stat-card{padding:12px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);transition:all .18s;cursor:default}
.stat-card:hover{border-color:var(--bd-a);background:var(--glow-b);transform:translateY(-1px)}
.stat-card .sc-ico{font-size:14px;margin-bottom:6px;display:inline-block;opacity:0.85}
.stat-card .sc-h{font-family:var(--mono);font-size:10.5px;font-weight:700;color:var(--t1);margin-bottom:3px;letter-spacing:0.3px}
.stat-card .sc-t{font-family:var(--mono);font-size:9.5px;color:var(--t2);line-height:1.5}
.stat-card .sc-t strong{color:var(--amber);font-weight:700}

/* CONNECT ROWS — P08 table-like */
.box-grid{display:block;margin-top:18px;border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.con{padding:12px 18px;background:var(--inp);border-left:none;border-bottom:1px solid var(--bdm);border-radius:0;font-family:var(--mono);font-size:11.5px;line-height:1.65;color:var(--t2);display:flex;gap:10px;align-items:flex-start}
.con:last-child{border-bottom:none}
.con::before{content:attr(data-no);color:var(--amber);font-weight:700;flex-shrink:0;min-width:18px;font-size:11.5px}
.con strong{color:var(--t1);font-weight:600}
.con em{color:var(--amber);font-style:normal;font-weight:600}

/* BOX FORMULA — P08 accent style */
.box-for{background:var(--inp);border:1px solid var(--bdm);border-left:3px solid var(--indigo);border-radius:0 var(--r3) var(--r3) 0;padding:16px 22px;margin:16px 0;font-family:var(--mono);font-size:13px;line-height:1.7}
.box-for-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--indigo);letter-spacing:2px;margin-bottom:12px;text-transform:uppercase}
.for-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px}
.for-item{padding:10px 12px;background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.55}
.for-item .lbl{display:block;font-size:9px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;font-weight:700}
.for-item .val{color:var(--indigo);font-weight:700;font-size:12.5px}

/* BOX 20 — P08 green tint */
.box-20{background:linear-gradient(135deg,rgba(52,211,153,0.065),rgba(34,211,238,0.02));border:1px solid var(--bd-g);border-radius:var(--r4);padding:16px 22px;margin:16px 0}
.box-20-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--green);letter-spacing:2px;margin-bottom:10px;text-transform:uppercase}
.box-20-list{font-family:var(--mono);font-size:12px;color:var(--t2);line-height:1.85;padding-left:0;list-style:none}
.box-20-list li{padding-left:18px;position:relative;list-style:none}
.box-20-list li::before{content:"→";position:absolute;left:0;color:var(--green);font-weight:700}
.box-20-list strong{color:var(--t1);font-weight:600}

/* SEC HEADERS */
.sec-head{display:flex;align-items:center;gap:10px;margin:32px 0 16px;padding-bottom:12px;border-bottom:1px solid var(--bdm)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase;padding:4px 12px;border:1px solid var(--bd-a);border-radius:20px;background:var(--dim-a);white-space:nowrap}
.sec-h{font-size:17px;font-weight:700;color:var(--t1);letter-spacing:-0.3px}

.sec-body{font-size:13.5px;color:var(--t2);line-height:1.75}
.sec-body p{margin-bottom:10px}
.sec-body strong{color:var(--t1);font-weight:600}
.sec-body em{color:var(--amber);font-style:normal;font-weight:600}
.sec-body code{font-family:var(--mono);font-size:0.9em;padding:1px 6px;background:var(--inp);border:1px solid var(--bdm);border-radius:4px;color:var(--amber)}

.emph{padding:12px 16px;background:var(--inp);border:1px solid var(--bdm);border-left:2px solid var(--amber);border-radius:0 var(--r2) var(--r2) 0;margin:12px 0;font-size:12.5px;color:var(--t2);line-height:1.65;font-family:var(--mono)}
.emph strong{color:var(--amber);font-weight:700}

.callout{padding:12px 16px;border-radius:var(--r3);margin:14px 0;font-size:12.5px;line-height:1.65;display:flex;gap:10px;align-items:flex-start;font-family:var(--mono)}
.callout-i{font-size:14px;flex-shrink:0;line-height:1.3;margin-top:1px}
.callout-t{flex:1}
.callout-t strong{color:var(--t1);font-weight:700}
.callout.tip{background:var(--dim-c);border:1px solid var(--bd-c);color:var(--t2)}
.callout.tip .callout-t strong{color:var(--cyan)}
.callout.warn{background:var(--dim-a);border:1px solid var(--bd-a);color:var(--t2)}
.callout.warn .callout-t strong{color:var(--amber)}
.callout.key{background:var(--dim-i);border:1px solid var(--bd-i);color:var(--t2)}
.callout.key .callout-t strong{color:var(--indigo)}
.callout.err{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--t2)}
.callout.err .callout-t strong{color:var(--red)}

/* PARABOLA EXPLORER — P08 aesthetic */
.pbx-wrap{margin-top:18px;padding:18px 22px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);position:relative;overflow:hidden}
.pbx-wrap::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--cyan),var(--indigo),transparent)}
.pbx-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px}
.pbx-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase}
.pbx-title::before{content:"◆ ";color:var(--amber)}
.pbx-badge{font-family:var(--mono);font-size:9px;color:var(--cyan);padding:3px 8px;background:var(--dim-c);border:1px solid var(--bd-c);border-radius:20px;letter-spacing:1.5px;font-weight:700}

.pbx-mode-tabs{display:flex;gap:3px;margin-bottom:12px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r3);padding:3px;width:fit-content;max-width:100%}
.pbx-mode-tab{padding:7px 12px;background:transparent;border:none;color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .15s;text-align:center;letter-spacing:0.3px;white-space:nowrap}
.pbx-mode-tab:hover{color:var(--t1)}
.pbx-mode-tab.on{background:linear-gradient(135deg,var(--amber),#F0AB30);color:var(--bg);font-weight:700}

.pbx-canvas-wrap{position:relative;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.pbx-canvas{display:block;width:100%;height:auto;max-width:100%;cursor:crosshair}
.pbx-canvas.drag-mode{cursor:grab}
.pbx-canvas.drag-mode:active{cursor:grabbing}

.pbx-zoom{position:absolute;top:10px;right:10px;display:flex;flex-direction:column;gap:4px;z-index:2}
.pbx-zoom-btn{width:30px;height:30px;background:rgba(10,14,26,0.92);border:1px solid var(--bdm);border-radius:var(--r1);color:var(--t2);font-family:var(--mono);font-size:14px;font-weight:700;cursor:pointer;transition:all .15s;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)}
.pbx-zoom-btn:hover{background:var(--hov);color:var(--amber);border-color:var(--bd-a)}
.pbx-zoom-lbl{position:absolute;bottom:10px;right:10px;font-family:var(--mono);font-size:9.5px;color:var(--t2);background:rgba(10,14,26,0.92);padding:3px 8px;border-radius:var(--r1);border:1px solid var(--bdm);font-weight:700;backdrop-filter:blur(4px)}

.pbx-controls{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px}
@media(max-width:560px){.pbx-controls{grid-template-columns:1fr}}
.pbx-ctrl{padding:9px 12px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);display:flex;flex-direction:column;gap:6px}
.pbx-ctrl-row{display:flex;align-items:center;justify-content:space-between;gap:8px}
.pbx-ctrl-lbl{font-family:var(--mono);font-size:10.5px;font-weight:700;color:var(--t2);letter-spacing:0.5px}
.pbx-ctrl-val{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--amber)}
.pbx-ctrl-val.ok{color:var(--green)}
.pbx-ctrl-val.v{color:var(--cyan)}
.pbx-slider{width:100%;height:4px;background:var(--bdm);border-radius:2px;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}
.pbx-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;background:var(--amber);border-radius:50%;cursor:pointer;border:2px solid var(--bg);box-shadow:0 0 0 1px var(--amber);transition:transform .1s}
.pbx-slider::-webkit-slider-thumb:hover{transform:scale(1.18)}
.pbx-slider::-moz-range-thumb{width:16px;height:16px;background:var(--amber);border-radius:50%;cursor:pointer;border:2px solid var(--bg);box-shadow:0 0 0 1px var(--amber)}

.pbx-presets{display:flex;gap:6px;flex-wrap:wrap;margin-top:14px}
.pbx-preset{padding:6px 11px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:10px;font-weight:600;cursor:pointer;transition:all .15s}
.pbx-preset:hover{border-color:var(--bd-a);color:var(--amber);background:var(--dim-a)}
.pbx-preset.on{background:var(--dim-a);border-color:var(--amber);color:var(--amber)}

.pbx-legend{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;padding:10px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:10px}
.pbx-leg{display:flex;align-items:center;gap:6px;color:var(--t2)}
.pbx-leg-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.pbx-leg strong{color:var(--t1);font-weight:700}

.pbx-info{margin-top:10px;padding:11px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.65}
.pbx-info strong{color:var(--t1);font-weight:700}
.pbx-info .p-d{font-weight:700}
.pbx-info .p-d.pos{color:var(--green)}
.pbx-info .p-d.zero{color:var(--amber)}
.pbx-info .p-d.neg{color:var(--red)}

.pbx-challenge-wrap{margin-top:14px;padding:14px 16px;background:var(--inp);border:1px solid var(--bd-p);border-radius:var(--r3);display:none}
.pbx-challenge-wrap.show{display:block;animation:fadeSlide .3s ease}
.pbx-challenge-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;flex-wrap:wrap;gap:8px}
.pbx-challenge-lbl{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--pink);letter-spacing:2px;text-transform:uppercase}
.pbx-challenge-stats{font-family:var(--mono);font-size:10px;color:var(--t2);font-weight:700}
.pbx-challenge-stats strong{color:var(--amber)}
.pbx-challenge-task{font-family:var(--mono);font-size:12.5px;color:var(--t1);font-weight:500;line-height:1.6;margin-bottom:10px;min-height:36px}
.pbx-challenge-fb{font-family:var(--mono);font-size:11px;padding:9px 12px;border-radius:var(--r2);display:none;margin-top:8px;line-height:1.6}
.pbx-challenge-fb.show{display:block;animation:fadeSlide .3s ease}
.pbx-challenge-fb.ok{color:var(--green);background:var(--dim-g);border:1px solid var(--bd-g)}
.pbx-challenge-fb.ng{color:var(--red);background:var(--dim-r);border:1px solid var(--bd-r)}
.pbx-challenge-toggle{padding:7px 13px;background:transparent;border:1px solid var(--bd-p);color:var(--pink);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.pbx-challenge-toggle:hover{background:var(--dim-p)}
.pbx-challenge-toggle.on{background:var(--dim-p)}
.pbx-btn{padding:7px 14px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:10.5px;font-weight:600;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.pbx-btn:hover{border-color:var(--bd-a);color:var(--amber);background:var(--dim-a)}

/* D-METER */
.dmeter-wrap{margin:16px 0 14px;padding:12px 16px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3)}
.dmeter-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px}
.dmeter-lbl{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t2);letter-spacing:1px;text-transform:uppercase}
.dmeter-val{font-family:var(--mono);font-size:14px;font-weight:700;color:var(--amber)}
.dmeter-bar{position:relative;height:8px;background:var(--bdm);border-radius:4px;overflow:hidden;border:1px solid var(--bd)}
.dmeter-fill{position:absolute;top:0;bottom:0;left:50%;width:0;background:var(--amber);border-radius:0;transform-origin:left;transition:all .3s cubic-bezier(.34,1.56,.64,1);box-shadow:0 0 8px rgba(245,158,11,0.6)}
.dmeter-fill.pos{background:var(--green);box-shadow:0 0 8px rgba(52,211,153,0.6)}
.dmeter-fill.neg{background:var(--red);box-shadow:0 0 8px rgba(248,113,113,0.6);transform-origin:right;right:50%;left:auto}
.dmeter-zero{position:absolute;top:-3px;bottom:-3px;left:50%;width:2px;background:var(--t2);transform:translateX(-50%);z-index:1;opacity:0.6}
.dmeter-legend{display:flex;justify-content:space-between;margin-top:6px;font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700}
.dmeter-legend span:nth-child(1){color:var(--red)}
.dmeter-legend span:nth-child(2){color:var(--amber)}
.dmeter-legend span:nth-child(3){color:var(--green)}
.dmeter-desc{margin-top:10px;font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.55}
.dmeter-desc strong{color:var(--t1)}

/* SR PRIMJERI — P08 style */
.sr{padding:16px 18px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);margin-top:14px;position:relative;overflow:hidden;transition:border-color .15s}
.sr.done{border-color:var(--bd-g)}
.sr-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px}
.sr-no{font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase;padding:4px 10px;background:var(--dim-a);border:1px solid var(--bd-a);border-radius:20px}
.sr-pts{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:700;letter-spacing:0.5px}
.sr-q{font-size:13px;color:var(--t1);font-weight:600;line-height:1.6;margin-bottom:8px}
.sr-minigraph{display:flex;justify-content:center;margin:10px 0 12px;padding:10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2)}
.sr-minigraph svg{max-width:100%;height:auto}
.sr-try{padding:8px 14px;background:linear-gradient(135deg,var(--amber),#F0AB30);color:var(--bg);border:none;border-radius:var(--r2);font-family:var(--mono);font-size:10.5px;font-weight:700;cursor:pointer;transition:all .15s;letter-spacing:0.3px}
.sr-try:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(245,158,11,0.3)}
.sr-try.done{background:var(--inp);color:var(--t3);border:1px solid var(--bdm)}
.sr-steps{margin-top:12px;display:none;flex-direction:column;gap:8px}
.sr-steps.show{display:flex;animation:fadeSlide .3s ease}
.sr-step{padding:10px 14px;background:var(--inp);border:1px solid var(--bdm);border-left:2px solid var(--amber);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.65;animation:fadeSlide .25s ease}
.sr-step strong{color:var(--amber);margin-right:6px;font-weight:700}
.sr-step em{color:var(--cyan);font-style:normal;font-weight:600}
.sr-steps-ctrl{display:flex;gap:8px;margin-top:8px;flex-wrap:wrap}
.sr-next{padding:6px 14px;background:transparent;border:1px solid var(--bd-a);color:var(--amber);border-radius:var(--r2);font-family:var(--mono);font-size:10px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-next:hover{background:var(--dim-a)}
.sr-rst{padding:6px 14px;background:transparent;border:1px solid var(--bdm);color:var(--t3);border-radius:var(--r2);font-family:var(--mono);font-size:10px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-rst:hover{color:var(--t1)}

/* FLASHCARDS — P08 style */
.fc-row{display:flex;justify-content:space-between;align-items:center;margin-top:18px;margin-bottom:12px;flex-wrap:wrap;gap:8px}
.fc-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--t2);letter-spacing:2px;text-transform:uppercase}
.fc-all-btn{padding:5px 12px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:10px;font-weight:700;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.fc-all-btn:hover{color:var(--amber);border-color:var(--bd-a)}
.fc-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px}
.fc{perspective:700px;height:130px;cursor:pointer;position:relative;transition:transform .15s}
.fc:hover{transform:translateY(-2px)}
.fc-inner{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.34,1.56,.64,1)}
.fc.flipped .fc-inner{transform:rotateY(180deg)}
.fc-f,.fc-b{position:absolute;width:100%;height:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:var(--r3);padding:14px 16px;display:flex;flex-direction:column;justify-content:center;text-align:center;overflow:hidden}
.fc-f{background:var(--card);border:1px solid var(--bdm)}
.fc-b{background:var(--ele);border:1px solid var(--bd-a);transform:rotateY(180deg)}
.fc-q{font-size:12.5px;color:var(--t1);font-weight:600;line-height:1.5}
.fc-a{font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.65}
.fc-a strong{color:var(--amber);font-weight:700}
.fc-hint{position:absolute;bottom:6px;right:8px;font-family:var(--mono);font-size:8.5px;color:var(--t3);opacity:0.6}
.fc-tag{position:absolute;top:6px;left:8px;font-family:var(--mono);font-size:8.5px;color:var(--amber);opacity:0.75;font-weight:700;letter-spacing:1px}

/* KALKULATOR — P08 cyan accent */
.calc-wrap{margin-top:16px;background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r3);overflow:hidden}
.calc-head{padding:10px 16px;background:var(--dim-c);border-bottom:1px solid var(--bd-c)}
.calc-title{font-family:var(--mono);font-size:10.5px;color:var(--cyan);font-weight:700;letter-spacing:1.5px}
.calc-tabs{display:flex;gap:0;border-bottom:1px solid var(--bdm);background:var(--sur)}
.calc-tab{flex:1;padding:9px 10px;background:transparent;border:none;border-right:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .15s;letter-spacing:0.3px}
.calc-tab:last-child{border-right:none}
.calc-tab:hover{color:var(--t1);background:var(--glow-b)}
.calc-tab.on{background:var(--card);color:var(--cyan);font-weight:700}
.calc-body{padding:14px 16px}
.calc-row{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.calc-lbl{font-family:var(--mono);font-size:11px;color:var(--t2);font-weight:600}
.calc-in{padding:6px 10px;background:var(--inp);border:1px solid var(--bdm);color:var(--t1);font-family:var(--mono);font-size:12px;font-weight:600;border-radius:var(--r2);outline:none;transition:border-color .15s}
.calc-in:focus{border-color:var(--cyan)}
.calc-go{padding:7px 14px;background:var(--cyan);color:var(--bg);border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer;transition:all .15s;margin-left:auto;letter-spacing:0.3px}
.calc-go:hover{transform:translateY(-1px);box-shadow:0 3px 10px rgba(34,211,238,0.25)}
.calc-result{margin-top:12px;padding:12px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.85;display:none}
.calc-result.show{display:block;animation:fadeSlide .3s ease}
.calc-res-key{color:var(--t3);font-size:10px;display:inline-block;margin-bottom:2px}
.calc-res-val{color:var(--cyan);font-weight:700;font-size:13px}

/* NCVVO ZADACI */
.ncvvo-wrap{margin-top:16px;display:flex;flex-direction:column;gap:10px}
.ncvvo-item{display:flex;gap:14px;padding:14px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);transition:border-color .15s}
.ncvvo-item:hover{border-color:var(--bd-a)}
.ncvvo-no{width:36px;height:36px;flex-shrink:0;border-radius:var(--r2);background:var(--dim-a);border:1px solid var(--bd-a);color:var(--amber);font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center}
.ncvvo-content{flex:1;min-width:0}

/* GON — P08 cyan accent */
.gon-wrap{margin-top:16px;padding:18px 22px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4)}
.gon-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px}
.gon-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--cyan);letter-spacing:2px;text-transform:uppercase}
.gon-score{font-family:var(--mono);font-size:11px;color:var(--t2);font-weight:700}
.gon-score strong{color:var(--amber)}
.gon-prog{height:3px;background:var(--bdm);border-radius:2px;overflow:hidden;margin-bottom:12px}
.gon-prog-fill{height:100%;background:linear-gradient(90deg,var(--cyan),var(--green));transition:width .3s ease;width:0%}
.gon-card{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 16px;margin-bottom:10px;transition:all .2s}
.gon-card.ok{border-color:var(--bd-g);background:var(--dim-g)}
.gon-card.ng{border-color:var(--bd-r);background:var(--dim-r)}
.gon-stmt{font-family:var(--mono);font-size:12px;color:var(--t1);font-weight:500;line-height:1.6;margin-bottom:8px}
.gon-no{display:inline-block;font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;margin-bottom:5px;letter-spacing:1.5px}
.gon-btns{display:flex;gap:6px}
.gon-btn{flex:1;padding:7px 10px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:700;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.gon-btn:hover{color:var(--t1);border-color:var(--bd-c);background:var(--dim-c)}
.gon-btn.ok-chosen{background:var(--dim-g);border-color:var(--green);color:var(--green)}
.gon-btn.ng-chosen{background:var(--dim-r);border-color:var(--red);color:var(--red)}
.gon-exp{display:none;margin-top:10px;padding:9px 12px;background:var(--ele);border-left:2px solid var(--amber);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--mono);font-size:10.5px;color:var(--t2);line-height:1.6}
.gon-exp.show{display:block;animation:fadeSlide .25s ease}
.gon-exp strong{color:var(--amber)}

/* DRILL */
.drill-wrap{margin-top:16px;padding:18px 22px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4)}
.drill-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px}
.drill-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase}
.drill-score{font-family:var(--mono);font-size:11px;color:var(--t2);font-weight:700}
.drill-score strong{color:var(--amber)}
.drill-prog{height:3px;background:var(--bdm);border-radius:2px;overflow:hidden;margin-bottom:12px}
.drill-prog-fill{height:100%;background:var(--amber);transition:width .3s ease;width:0%}
.drill-q{font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6;margin-bottom:12px;min-height:40px}
.drill-no{display:inline-block;font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;margin-bottom:6px;letter-spacing:1.5px}
.drill-opts{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px;margin-bottom:12px}
.drill-opt{padding:10px 12px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:12px;font-weight:600;border-radius:var(--r2);cursor:pointer;transition:all .15s;text-align:center;line-height:1.35}
.drill-opt:hover{color:var(--t1);border-color:var(--bd-a);background:var(--dim-a)}
.drill-opt.ok{background:var(--dim-g);border-color:var(--green);color:var(--green)}
.drill-opt.ng{background:var(--dim-r);border-color:var(--red);color:var(--red)}
.drill-fb{font-family:var(--mono);font-size:11px;padding:9px 12px;border-radius:var(--r2);line-height:1.6;display:none;margin-bottom:10px}
.drill-fb.ok{color:var(--green);background:var(--dim-g);border:1px solid var(--bd-g)}
.drill-fb.ng{color:var(--red);background:var(--dim-r);border:1px solid var(--bd-r)}
.drill-fb.show{display:block;animation:fadeSlide .25s ease}
.drill-ctrl{display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap}
.drill-streak{font-family:var(--mono);font-size:11px;color:var(--amber);font-weight:700}
.drill-next{padding:8px 18px;background:linear-gradient(135deg,var(--amber),#F0AB30);color:var(--bg);border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer;display:none;transition:all .15s}
.drill-next.show{display:inline-flex}
.drill-next:hover{transform:translateY(-1px);box-shadow:0 4px 12px rgba(245,158,11,0.3)}
.dr-hint-btn{display:none;padding:6px 12px;background:transparent;border:1px solid var(--bd-a);color:var(--amber);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r2);cursor:pointer;transition:all .15s;margin-left:8px}
.dr-hint-btn.show{display:inline-flex}
.dr-hint-btn:hover{background:var(--dim-a)}
.dr-hint{display:none;margin:8px 0 12px;padding:9px 12px;background:var(--dim-a);border-left:2px solid var(--amber);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.6}
.dr-hint.show{display:block;animation:fadeSlide .25s ease}
.dr-hint strong{color:var(--amber)}
.dr-fav-btn{padding:6px 10px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:12px;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.dr-fav-btn:hover{border-color:var(--bd-a);color:var(--amber)}
.dr-fav-btn.on{background:var(--dim-a);border-color:var(--amber);color:var(--amber)}
.dr-filters{display:flex;gap:6px;margin-bottom:12px;flex-wrap:wrap}
.dr-filter{padding:5px 11px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:9.5px;font-weight:700;border-radius:20px;cursor:pointer;transition:all .15s;letter-spacing:0.5px}
.dr-filter:hover{color:var(--t1)}
.dr-filter.on{background:var(--dim-a);border-color:var(--amber);color:var(--amber)}

/* FAVORITES */
.fav-panel{display:none;margin-top:14px;padding:16px 18px;background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r3)}
.fav-panel.show{display:block;animation:fadeSlide .3s ease}
.fav-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center}
.fav-empty{font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;padding:20px;line-height:1.65}
.fav-item{padding:10px 12px;background:var(--inp);border:1px solid var(--bdm);border-left:2px solid var(--amber);border-radius:0 var(--r2) var(--r2) 0;margin-bottom:6px;display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.55}
.fav-item-t{flex:1}
.fav-item-x{background:none;border:none;color:var(--t3);cursor:pointer;font-size:13px;padding:0 4px;line-height:1}
.fav-item-x:hover{color:var(--red)}
.fav-item-go{padding:4px 10px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:9px;font-weight:700;border-radius:var(--r1);cursor:pointer;transition:all .15s}
.fav-item-go:hover{color:var(--amber);border-color:var(--bd-a)}

/* TIMER */
.timer-wrap{margin-top:18px;padding:14px 18px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3)}
.timer-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px}
.timer-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase}
.timer-ctrl{display:flex;gap:6px;align-items:center}
.timer-display{font-family:var(--mono);font-size:26px;font-weight:700;color:var(--t1);letter-spacing:2px;padding:0 10px}
.timer-display.warn{color:var(--amber)}
.timer-display.crit{color:var(--red);animation:pulseRed 1s ease infinite}
@keyframes pulseRed{50%{opacity:0.55}}
.timer-btn{padding:7px 14px;background:transparent;border:1px solid var(--bd-a);color:var(--amber);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.timer-btn:hover{background:var(--dim-a)}
.timer-btn.active{background:linear-gradient(135deg,var(--amber),#F0AB30);color:var(--bg);border-color:var(--amber)}
.timer-info{font-family:var(--mono);font-size:10.5px;color:var(--t2);line-height:1.55}
.timer-info strong{color:var(--amber)}

/* KVIZ */
.quiz-wrap{margin-top:18px;padding:20px 22px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);position:relative}
.quiz-wrap.locked::before{content:"🔒 Pokreni timer za start";position:absolute;inset:0;background:rgba(6,9,16,0.85);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;border-radius:var(--r4);font-family:var(--mono);font-size:12.5px;color:var(--amber);font-weight:700;z-index:5;letter-spacing:0.5px}
.quiz-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px}
.quiz-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--indigo);letter-spacing:2px;text-transform:uppercase}
.quiz-count{font-family:var(--mono);font-size:10.5px;color:var(--t2);font-weight:700}
.qb{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:13px 16px;margin-bottom:10px;transition:all .2s}
.qb-locked{filter:blur(3px);pointer-events:none}
.qb-no{display:inline-block;font-family:var(--mono);font-size:9px;color:var(--indigo);font-weight:700;letter-spacing:2px;margin-bottom:6px}
.qb-q{font-size:13px;color:var(--t1);font-weight:600;line-height:1.6;margin-bottom:10px}
.qb-opts{display:flex;flex-direction:column;gap:6px}
.qb-opt{padding:9px 12px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:11.5px;font-weight:500;border-radius:var(--r2);cursor:pointer;transition:all .15s;text-align:left;line-height:1.4}
.qb-opt:hover{color:var(--t1);border-color:var(--bd-i);background:var(--dim-i)}
.qb-opt.sel{background:var(--dim-i);border-color:var(--indigo);color:var(--indigo)}
.qb-opt.ok{background:var(--dim-g);border-color:var(--green);color:var(--green)}
.qb-opt.ng{background:var(--dim-r);border-color:var(--red);color:var(--red)}
.qb-exp{margin-top:10px;padding:9px 12px;background:var(--ele);border-left:2px solid var(--cyan);border-radius:0 var(--r2) var(--r2) 0;font-family:var(--mono);font-size:10.5px;color:var(--t2);display:none;line-height:1.6}
.qb-exp.show{display:block;animation:fadeSlide .25s ease}
.qb-exp strong{color:var(--cyan)}

.quiz-go{margin-top:14px;padding:11px 24px;background:linear-gradient(135deg,var(--amber),#F0AB30);color:var(--bg);border:none;border-radius:var(--r3);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;width:100%;letter-spacing:0.3px}
.quiz-go:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(245,158,11,0.3)}
.quiz-go:disabled{opacity:0.4;cursor:not-allowed;transform:none;box-shadow:none}

.score-box{margin-top:18px;padding:18px 22px;background:var(--card);border:2px solid var(--bd-a);border-radius:var(--r3);display:none;text-align:center}
.score-box.show{display:block;animation:fadeSlide .4s ease}
.score-num{font-size:32px;font-weight:800;color:var(--amber);font-family:var(--mono);letter-spacing:-1px}
.score-pct{font-family:var(--mono);font-size:14px;color:var(--t1);font-weight:700;margin-top:4px}
.score-msg{font-family:var(--mono);font-size:11.5px;color:var(--t2);margin-top:6px;line-height:1.6}
.score-actions{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-top:14px}
.score-btn{padding:7px 14px;background:transparent;border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:10.5px;font-weight:700;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.score-btn:hover{border-color:var(--bd-a);color:var(--amber);background:var(--dim-a)}
.score-breakdown{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:14px}
.score-cell{aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:11px;font-weight:700;border-radius:var(--r1);border:1px solid var(--bdm)}
.score-cell.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.score-cell.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}

/* CHECKPOINT */
.cp-wrap{margin-top:20px;padding:20px 22px;background:linear-gradient(135deg,rgba(52,211,153,0.065),rgba(34,211,238,0.02));border:1px solid var(--bd-g);border-radius:var(--r4)}
.cp-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--green);letter-spacing:2px;text-transform:uppercase;margin-bottom:12px}
.cp-list{display:flex;flex-direction:column;gap:8px}
.cp-item{display:flex;align-items:center;gap:12px;padding:11px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;transition:all .15s}
.cp-item:hover{border-color:var(--bd-g)}
.cp-item.done{border-color:var(--bd-g);background:var(--dim-g)}
.cp-checkbox{width:18px;height:18px;border:1.5px solid var(--t3);border-radius:4px;display:flex;align-items:center;justify-content:center;transition:all .15s;flex-shrink:0}
.cp-item.done .cp-checkbox{background:var(--green);border-color:var(--green)}
.cp-item.done .cp-checkbox::after{content:"✓";color:var(--bg);font-weight:700;font-size:12px}
.cp-text{font-family:var(--mono);font-size:11.5px;color:var(--t2);font-weight:500;line-height:1.55}
.cp-item.done .cp-text{color:var(--t1)}
.cp-msg-hint{margin-top:14px;padding:10px 14px;background:var(--dim-a);border:1px dashed var(--bd-a);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--amber);text-align:center;line-height:1.6}
.cp-ready{display:none;margin-top:14px;padding:12px 16px;background:linear-gradient(135deg,var(--green),var(--cyan));color:var(--bg);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;text-align:center;animation:fadeSlide .4s ease;letter-spacing:0.3px}
.cp-ready.show{display:block}

/* DISCERE CTA */
.discere-cta{margin-top:24px;padding:22px 24px;background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r4);position:relative;overflow:hidden}
.discere-cta::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--indigo),transparent)}
.discere-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase;margin-bottom:10px}
.discere-t{font-size:14px;color:var(--t1);font-weight:500;line-height:1.6;margin-bottom:14px;font-family:var(--font)}
.discere-t strong{color:var(--amber);font-weight:700}
.discere-btn{padding:12px 24px;background:linear-gradient(135deg,var(--amber),#F0AB30);color:var(--bg);border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;display:inline-flex;align-items:center;gap:8px;letter-spacing:0.3px}
.discere-btn:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(245,158,11,0.3)}

/* CONNECT NEXT */
.cn-wrap{margin-top:24px}
.cn-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--t2);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.cn-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px}
.cn-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 16px;transition:all .18s;cursor:pointer;text-decoration:none;display:flex;flex-direction:column;gap:4px;position:relative;overflow:hidden}
.cn-card:hover{border-color:var(--bd-a);transform:translateY(-2px);box-shadow:0 4px 14px rgba(0,0,0,0.3)}
.cn-card:hover::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:var(--amber)}
.cn-h{font-family:var(--mono);font-size:9.5px;color:var(--amber);font-weight:700;letter-spacing:2px;text-transform:uppercase}
.cn-t{font-size:13px;color:var(--t1);font-weight:600}
.cn-s{font-family:var(--mono);font-size:10.5px;color:var(--t2);margin-top:2px}

/* TOAST — P08 coherent */
.toast-wrap{position:fixed;top:20px;right:20px;z-index:10001;display:flex;flex-direction:column;gap:8px;pointer-events:none;max-width:360px}
.toast{padding:11px 16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);font-family:var(--mono);font-size:11.5px;color:var(--t1);box-shadow:0 4px 20px rgba(0,0,0,0.4);pointer-events:auto;display:flex;align-items:center;gap:10px;animation:toastIn .32s cubic-bezier(.34,1.56,.64,1);min-width:220px}
.toast.ok{border-color:var(--bd-g);background:var(--dim-g)}
.toast.warn{border-color:var(--bd-a);background:var(--dim-a)}
.toast.info{border-color:var(--bd-c);background:var(--dim-c)}
.toast.ach{border-color:var(--bd-a);background:var(--dim-a)}
.toast-ico{font-size:14px;flex-shrink:0}
.toast-msg{flex:1;line-height:1.5}

/* RESPONSIVE — P08 matching breakpoints */
@media(max-width:900px){
  :root{--sb:220px}
  .wrap{padding:22px 22px 60px}
}
@media(max-width:720px){
  .sidebar{transform:translateX(-100%);transition:transform .3s ease}
  .sidebar.open{transform:translateX(0)}
  .main{margin-left:0}
  .wrap{padding:18px 16px 60px}
  .hero{padding:22px 20px}
  .hero-h{font-size:24px}
  .hero-deco{font-size:100px;right:10px}
  .ch-title{font-size:18px}
  .tabs{width:100%}
  .tab{flex:1;padding:8px 6px;font-size:10.5px}
  .tab-meta{display:none}
}
@media(max-width:480px){
  .wrap{padding:14px 12px 50px}
  .hero{padding:18px 16px}
  .hero-h{font-size:20px}
  .topbar-R{width:100%;gap:4px}
  .stats{flex-direction:column;gap:6px}
  .qb-opts{gap:5px}
  .drill-opts{grid-template-columns:1fr 1fr}
  .pbx-zoom{top:6px;right:6px}
  .pbx-zoom-btn{width:26px;height:26px;font-size:12px}
  .toast-wrap{top:auto;bottom:80px;left:10px;right:10px;max-width:none}
  .toast{font-size:10.5px;min-width:0}
}

/* CONFETTI (unchanged) */
.confetti-wrap{position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden}
.confetti-p{position:absolute;width:8px;height:8px;animation:confettiFall 3s linear forwards}
@keyframes confettiFall{to{transform:translateY(110vh) rotate(720deg);opacity:0}}

/* FORMULE */
.fm{font-family:var(--mono);display:inline-flex;align-items:center;gap:1px;letter-spacing:0;line-height:1.4}
.frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;font-size:0.88em;margin:0 2px;line-height:1}
.frac-top{padding:0 3px;border-bottom:1.5px solid currentColor}
.frac-bot{padding:2px 3px 0}
.sqrt{display:inline-flex;align-items:center}
.sqrt::before{content:"√";font-size:1em;margin-right:1px}
.sqrt-arg{border-top:1.5px solid currentColor;padding:0 2px;margin-left:-1px}
sup,sub{font-size:0.7em;line-height:0}

/* ANIMATIONS */
@keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeSlide{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}
@keyframes toastIn{from{transform:translateX(20px) scale(.9);opacity:0}to{transform:translateX(0) scale(1);opacity:1}}
@keyframes toastOut{to{transform:translateX(20px) scale(.9);opacity:0}}
.toast.out{animation:toastOut .25s ease forwards}

/* SCROLL SMOOTH */
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
*{box-sizing:border-box}

/* SEC + TAB SWITCH */
.sec{display:none;animation:fadeIn .3s ease}
.sec.on{display:block}


/* ════ L2 OVERVIEW HEADER ════════════════════════════════════════ */
.l2-overview{margin-bottom:22px;padding:18px 22px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);position:relative;overflow:hidden}
.l2-overview::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--cyan),var(--indigo),transparent)}
.l2-overview-h{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:2px;text-transform:uppercase;margin-bottom:14px}
.l2-overview-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px}
.l2-overview-card{display:flex;flex-direction:column;gap:3px;padding:13px 14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);text-decoration:none;color:inherit;transition:all .18s;cursor:pointer;position:relative}
.l2-overview-card:hover{border-color:var(--bd-a);background:var(--dim-a);transform:translateY(-1px);box-shadow:0 4px 14px rgba(0,0,0,0.25)}
.l2-overview-card .l2-ov-ico{font-family:var(--mono);font-size:14px;font-weight:700;color:var(--amber);margin-bottom:4px}
.l2-overview-card .l2-ov-t{font-size:13.5px;font-weight:700;color:var(--t1);line-height:1.3}
.l2-overview-card .l2-ov-c{font-family:var(--mono);font-size:10.5px;color:var(--t2);line-height:1.45;margin-top:2px}

#gon-anchor,#drill-anchor,#timer-anchor,#cp-anchor{display:block;position:relative;top:-20px;visibility:hidden}

/* ════ BOTTOM NAV ════════════════════════════════════════════════ */
.bottom-nav{position:fixed;bottom:0;left:var(--sb);right:0;background:rgba(10,14,26,0.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-top:1px solid var(--bdm);display:flex;align-items:stretch;justify-content:space-between;gap:0;padding:0;z-index:150;box-shadow:0 -4px 18px rgba(0,0,0,0.35)}
.bn-side{display:flex;align-items:center;gap:10px;padding:10px 18px;color:var(--t2);text-decoration:none;font-family:var(--mono);transition:all .15s;min-width:0;flex:0 0 auto;max-width:32%;border:none;background:transparent;cursor:pointer}
.bn-side:hover{background:var(--glow-b);color:var(--t1)}
.bn-prev{border-right:1px solid var(--bdm)}
.bn-next{border-left:1px solid var(--bdm)}
.bn-arr{font-size:18px;font-weight:700;color:var(--amber);flex-shrink:0;line-height:1}
.bn-side-text{display:flex;flex-direction:column;line-height:1.3;min-width:0;overflow:hidden}
.bn-side-lbl{font-size:9px;color:var(--t3);font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
.bn-side-name{font-size:11.5px;color:var(--t1);font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bn-prev .bn-side-text{align-items:flex-start}
.bn-next .bn-side-text{align-items:flex-end}

.bn-tabs{display:flex;flex:1;justify-content:center;gap:0;padding:0;min-width:0}
.bn-tab{flex:1;max-width:120px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:10px 8px;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--t2);font-family:var(--mono);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .15s;min-width:0;letter-spacing:0.3px}
.bn-tab:hover{color:var(--t1);background:var(--glow-b)}
.bn-tab.on{color:var(--amber);border-bottom-color:var(--amber);background:var(--dim-a)}
.bn-tab-ico{font-size:14px;line-height:1}
.bn-tab-lbl{font-size:10px;text-transform:uppercase;letter-spacing:0.5px}

@media(max-width:720px){
  .bottom-nav{left:0}
  .bn-side{padding:8px 10px;gap:6px}
  .bn-side-name{font-size:10.5px;max-width:88px}
  .bn-side-lbl{font-size:8px}
  .bn-arr{font-size:15px}
  .bn-tab{padding:8px 4px;font-size:9.5px}
  .bn-tab-lbl{font-size:9px}
  .bn-tab-ico{font-size:13px}
}
@media(max-width:480px){
  .bn-side-text{display:none}
  .bn-side{padding:10px 12px}
  .bn-arr{font-size:18px}
}

/* POSTOTNI/KAMATA — segmented mode picker (za Mode 2) */
.pp-mode-pick{flex-wrap:wrap}
.pp-mode-btn{flex:1;min-width:0;padding:7px 10px;background:transparent;border:none;color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .15s;text-align:center;letter-spacing:0.2px;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pp-mode-btn:hover{color:var(--t1);background:var(--glow-b)}
.pp-mode-btn.on{background:linear-gradient(135deg,var(--cyan),#5BCDE6);color:var(--bg);font-weight:700;box-shadow:0 2px 10px rgba(34,211,238,0.22)}
.pp-mode-btn strong{font-weight:800}
.pp-field{display:inline-flex;align-items:center;gap:5px;padding:4px 8px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);transition:all .18s}
.pp-field.target{background:var(--dim-c);border-color:var(--bd-c)}
.pp-field.target .calc-lbl{color:var(--cyan);font-weight:700}
.pp-field.target .calc-in{color:var(--cyan);background:transparent}
.pp-field .calc-in:disabled{opacity:0.55;cursor:not-allowed}

/* ═══ FORMULA DECODER ═══ */
.fd-wrap{background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.fd-head{padding:11px 17px;border-bottom:1px solid var(--bdm)}
.fd-title{font-family:var(--mono);font-size:10.5px;color:var(--cyan);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.fd-body{padding:16px 17px}
.fd-formula-big{text-align:center;font-size:26px;margin-bottom:14px;font-family:var(--mono);color:var(--t1);font-weight:700;letter-spacing:1px}
.fd-formula-big .fd-hot{cursor:pointer;padding:2px 6px;border-radius:5px;transition:all .15s;display:inline-block}
.fd-formula-big .fd-hot:hover{background:var(--glow-b);transform:translateY(-1px)}
.fd-formula-big .fd-hot.active{background:var(--dim-c);box-shadow:0 0 0 1.5px var(--cyan) inset}
.fd-symbols{display:flex;gap:10px;justify-content:center;flex-wrap:wrap;margin-bottom:14px}
.fd-sym{padding:9px 16px;background:var(--inp);border:1.5px solid var(--bdm);border-radius:var(--r2);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:2px;transition:all .15s;min-width:80px}
.fd-sym:hover{border-color:var(--bd-c);transform:translateY(-1px)}
.fd-sym.active{background:var(--dim-c);border-color:var(--cyan)}
.fd-sym-letter{font-family:var(--mono);font-size:17px;font-weight:800;line-height:1}
.fd-sym-name{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:1px;line-height:1}
.fd-sym.active .fd-sym-name{color:var(--cyan)}
.fd-explain{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:14px;font-size:13px;color:var(--t2);line-height:1.55;min-height:60px;transition:all .2s}
.fd-explain.show{border-color:var(--bd-c);color:var(--t1)}
.fd-explain strong{color:var(--cyan);font-weight:700}

/* ═══ FORMULA CARD GRID ═══ */
.fcard-wrap{background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.fcard-head{padding:11px 17px;border-bottom:1px solid var(--bdm);display:flex;align-items:center;gap:8px}
.fcard-title{font-family:var(--mono);font-size:10.5px;color:var(--amber);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.fcard-body{padding:14px 17px;display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px}
.fcard-item{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:12px 14px;transition:all .15s}
.fcard-item:hover{border-color:var(--bd-a);transform:translateY(-1px)}
.fcard-formula{font-family:var(--mono);font-size:16px;color:var(--t1);font-weight:700;margin-bottom:6px;min-height:26px;display:flex;align-items:center;letter-spacing:0.3px}
.fcard-desc{font-family:var(--mono);font-size:10.5px;color:var(--t3);line-height:1.5}
.fcard-desc strong{color:var(--amber);font-weight:700}

/* ═══ BUG DETECTION GAME ═══ */
.bug-box{background:var(--card);border:1px solid var(--bd-r);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.bug-head{padding:11px 17px;border-bottom:1px solid var(--bdm);color:var(--red);font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.bug-body{padding:16px 17px}
.bug-task{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:12px 14px;margin-bottom:12px;font-family:var(--mono);font-size:13px;color:var(--t1);line-height:1.55}
.bug-task .wrong{color:var(--red);font-weight:700;text-decoration:line-through;text-decoration-color:rgba(248,113,113,0.7);text-decoration-thickness:2px}
.bug-quote{font-style:italic;color:var(--t2);font-size:12.5px;margin-bottom:10px;padding-left:12px;border-left:2px solid var(--bd-r);line-height:1.6}
.bug-opts{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}
.bug-opt{padding:10px 14px;background:var(--inp);border:1.5px solid var(--bdm);border-radius:var(--r2);cursor:pointer;font-family:var(--mono);font-size:12px;color:var(--t2);transition:all .15s;line-height:1.4}
.bug-opt:hover{border-color:var(--bd-r);color:var(--t1);transform:translateY(-1px)}
.bug-opt.dis{cursor:default;opacity:0.55}
.bug-opt.dis:hover{transform:none}
.bug-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green);font-weight:700}
.bug-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.bug-expl{background:var(--inp);border-left:3px solid var(--bd-r);padding:10px 14px;border-radius:5px;font-family:var(--mono);font-size:11.5px;line-height:1.6;color:var(--t2);max-height:0;overflow:hidden;opacity:0;transition:all .3s;margin-top:4px}
.bug-expl.show{max-height:200px;opacity:1;padding:12px 14px}
.bug-expl.ok{border-left-color:var(--bd-g);color:var(--t1)}
.bug-expl.ok strong{color:var(--green)}
.bug-expl.ng{border-left-color:var(--bd-r);color:var(--t1)}
.bug-expl.ng strong{color:var(--red)}

/* ═══ STREAK COUNTER u Quiz ═══ */
.streak-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r1);font-family:var(--mono);font-size:11px;color:var(--green);font-weight:700;margin-left:8px;transition:all .2s}
.streak-badge.zero{background:var(--inp);border-color:var(--bdm);color:var(--t3)}
.streak-badge.fire{background:linear-gradient(135deg,var(--dim-a),var(--dim-r));border-color:var(--bd-a);color:var(--amber);box-shadow:0 0 12px rgba(245,158,11,0.25);animation:streak-pulse 1.5s ease-in-out infinite alternate}
@keyframes streak-pulse{from{box-shadow:0 0 8px rgba(245,158,11,0.2)}to{box-shadow:0 0 18px rgba(245,158,11,0.45)}}
.streak-badge .sb-ico{font-size:14px;line-height:1}

/* ═══ MATCH GAME ═══ */
.match-wrap{background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.match-head{padding:11px 17px;border-bottom:1px solid var(--bdm);display:flex;align-items:center;justify-content:space-between}
.match-title{font-family:var(--mono);font-size:10.5px;color:var(--cyan);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.match-score{font-family:var(--mono);font-size:11px;color:var(--t2)}
.match-score strong{color:var(--green)}
.match-body{padding:16px 17px}
.match-grid{display:flex;gap:24px;justify-content:center;flex-wrap:wrap}
.match-col{display:flex;flex-direction:column;gap:6px}
.match-col-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px;font-weight:700}
.match-btn{padding:10px 18px;background:var(--inp);border:1.5px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:13px;font-weight:700;color:var(--t2);cursor:pointer;min-width:120px;text-align:center;transition:all .15s}
.match-btn:hover:not(.matched):not(.dis){border-color:var(--bd-c);color:var(--t1);transform:translateY(-1px)}
.match-btn.sel{background:var(--dim-c);border-color:var(--cyan);color:var(--cyan)}
.match-btn.matched{background:var(--dim-g);border-color:var(--bd-g);color:var(--green);cursor:default}
.match-btn.matched::after{content:" ✓";font-weight:700}
.match-btn.wrong{background:var(--dim-r);border-color:var(--bd-r);color:var(--red);animation:shake 0.4s}
@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}
.match-reset{margin-top:14px;display:flex;justify-content:center}
.match-reset-btn{padding:7px 16px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:600;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.match-reset-btn:hover{border-color:var(--bd-c);color:var(--t1)}

/* ═══ HAMBURGER BUTTON + OVERLAY ═══ */
.ham-btn{display:none;position:fixed;top:14px;left:14px;width:44px;height:44px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r2);cursor:pointer;z-index:200;flex-direction:column;align-items:center;justify-content:center;gap:5px;padding:0;transition:all .18s;box-shadow:0 2px 10px rgba(0,0,0,0.3)}
.ham-btn:hover{border-color:var(--bd-a);background:var(--dim-a)}
.ham-btn:active{transform:scale(0.95)}
.ham-line{display:block;width:22px;height:2.5px;background:var(--t1);border-radius:2px;transition:all .25s;transform-origin:center}
.ham-btn.open .ham-line:nth-child(1){transform:translateY(7.5px) rotate(45deg)}
.ham-btn.open .ham-line:nth-child(2){opacity:0;transform:scaleX(0)}
.ham-btn.open .ham-line:nth-child(3){transform:translateY(-7.5px) rotate(-45deg)}

.ham-overlay{display:none;position:fixed;inset:0;background:rgba(6,9,16,0.6);backdrop-filter:blur(2px);-webkit-backdrop-filter:blur(2px);z-index:95;opacity:0;transition:opacity .25s}
.ham-overlay.show{display:block;opacity:1}

@media(max-width:720px){
  .ham-btn{display:flex}
  .sidebar{z-index:100;box-shadow:4px 0 20px rgba(0,0,0,0.4)}
}


/* ═══ PREMIUM GATES ═══ */
.premium-gate {
  position: relative;
  margin: 20px 0;
  padding: 20px;
  background: linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(244,114,182,0.08) 100%);
  border: 1px solid rgba(245,158,11,0.25);
  border-radius: var(--r2);
  overflow: hidden;
}
.premium-gate::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #F59E0B, #F472B6);
}
.premium-gate-hd {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  gap: 12px;
  flex-wrap: wrap;
}
.premium-gate-title {
  font-family: var(--mono);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--amber);
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.premium-badge-sm {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  background: linear-gradient(135deg, #F59E0B 0%, #F472B6 100%);
  color: #000;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 800;
  border-radius: 999px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(245,158,11,0.3);
}
.premium-gate-sub {
  color: var(--t2);
  font-size: 13px;
  line-height: 1.55;
  margin-bottom: 14px;
}
.premium-gate-sub strong { color: var(--t1); }
.premium-preview {
  background: var(--inp);
  border: 1px solid var(--bdm);
  border-radius: var(--r3);
  padding: 12px 14px;
  margin-bottom: 12px;
  position: relative;
}
.premium-preview-msg {
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--t1);
  line-height: 1.6;
  margin-bottom: 8px;
}
.premium-preview-msg:last-child { margin-bottom: 0; }
.premium-preview-msg.ai {
  color: var(--cyan);
}
.premium-preview-msg.user {
  color: var(--t2);
  padding-left: 16px;
  border-left: 2px solid var(--bd-p);
}
.premium-blur {
  filter: blur(4px);
  opacity: 0.55;
  user-select: none;
  pointer-events: none;
  min-height: 48px;
  padding: 12px 14px;
  background: var(--inp);
  border: 1px solid var(--bdm);
  border-radius: var(--r3);
  font-family: var(--mono);
  font-size: 11.5px;
  color: var(--t1);
  line-height: 1.6;
}
.premium-cta-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
}
.premium-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: linear-gradient(135deg, #F59E0B 0%, #F472B6 100%);
  color: #000;
  border: none;
  border-radius: var(--r3);
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 12px rgba(245,158,11,0.25);
  text-decoration: none;
}
.premium-cta-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 18px rgba(245,158,11,0.4);
}
.premium-cta-note {
  font-family: var(--mono);
  font-size: 10.5px;
  color: var(--t3);
}
.premium-cta-note strong { color: var(--green); }

/* Sidebar Pro badge */
.sb-pro-badge {
  display: inline-block;
  margin-left: 6px;
  padding: 1px 6px;
  background: linear-gradient(135deg, #F59E0B 0%, #F472B6 100%);
  color: #000;
  font-family: var(--mono);
  font-size: 8px;
  font-weight: 800;
  border-radius: 999px;
  letter-spacing: 0.05em;
  vertical-align: middle;
}

/* Paywall modal */
.paywall-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(6,9,16,0.85);
  backdrop-filter: blur(8px);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.paywall-modal.show { display: flex; }
.paywall-card {
  background: var(--sur);
  border: 1px solid rgba(245,158,11,0.3);
  border-radius: 16px;
  max-width: 440px;
  width: 100%;
  padding: 28px 24px;
  position: relative;
  animation: pwSlide 0.25s ease-out;
}
@keyframes pwSlide {
  from { transform: translateY(16px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
.paywall-close {
  position: absolute;
  top: 12px; right: 12px;
  background: transparent;
  border: none;
  color: var(--t2);
  font-size: 20px;
  cursor: pointer;
  width: 32px; height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.paywall-close:hover { background: var(--ele); color: var(--t1); }
.paywall-h {
  font-size: 20px;
  font-weight: 800;
  color: var(--t1);
  margin-bottom: 6px;
  padding-right: 32px;
}
.paywall-sub {
  color: var(--t2);
  font-size: 13px;
  line-height: 1.55;
  margin-bottom: 18px;
}
.paywall-tiers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 18px;
}
.paywall-tier {
  padding: 14px 12px;
  background: var(--inp);
  border: 1px solid var(--bdm);
  border-radius: var(--r3);
  position: relative;
  cursor: pointer;
  transition: all 0.15s;
}
.paywall-tier:hover {
  border-color: rgba(245,158,11,0.4);
  background: var(--ele);
}
.paywall-tier.pro {
  border-color: rgba(245,158,11,0.4);
  background: linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(244,114,182,0.05) 100%);
}
.paywall-tier-lbl {
  font-family: var(--mono);
  font-size: 9px;
  color: var(--t3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 4px;
}
.paywall-tier-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--t1);
  margin-bottom: 2px;
}
.paywall-tier-price {
  font-family: var(--mono);
  font-size: 16px;
  font-weight: 800;
  color: var(--amber);
}
.paywall-tier-price .per { font-size: 10px; color: var(--t3); font-weight: 400; }
.paywall-tier-feat {
  font-size: 10.5px;
  color: var(--t2);
  margin-top: 8px;
  line-height: 1.5;
}
.paywall-tier.pro::before {
  content: 'POPULAR';
  position: absolute;
  top: -8px;
  right: 10px;
  background: linear-gradient(135deg, #F59E0B 0%, #F472B6 100%);
  color: #000;
  font-family: var(--mono);
  font-size: 8px;
  font-weight: 800;
  padding: 2px 8px;
  border-radius: 999px;
  letter-spacing: 0.1em;
}
.paywall-cta {
  width: 100%;
  padding: 12px 18px;
  background: linear-gradient(135deg, #F59E0B 0%, #F472B6 100%);
  color: #000;
  border: none;
  border-radius: var(--r3);
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
.paywall-cta:hover { transform: translateY(-1px); box-shadow: 0 4px 18px rgba(245,158,11,0.4); }
.paywall-note {
  text-align: center;
  font-family: var(--mono);
  font-size: 10px;
  color: var(--t3);
  margin-top: 10px;
}
.paywall-note strong { color: var(--green); }

/* ── NAV-ROW ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:36px;padding-top:20px;border-top:1px solid var(--bd);gap:10px}
.nb{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:11.5px;color:var(--t2);cursor:pointer;padding:9px 16px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;font-weight:600;white-space:nowrap}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;border-color:transparent;font-weight:700;box-shadow:0 3px 16px rgba(245,158,11,0.25)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}
.nb.off{opacity:.22;pointer-events:none;cursor:default}
@media(max-width:600px){.nav-row{flex-direction:column;gap:8px}.nb{width:100%;justify-content:center}}

/* ── GON TOGGLE ── */
.gon-toggle{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t2);cursor:pointer;padding:5px 10px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;flex-shrink:0}
.gon-toggle:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.gon-toggle .gt-ico{transition:transform .2s}
.gon-toggle.collapsed .gt-ico{transform:rotate(-90deg)}
#gon-body.gon-collapsed{display:none}

/* ── TIMER TOGGLE ── */
.timer-section-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.timer-section-title{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px}
.timer-toggle{display:inline-flex;align-items:center;gap:5px;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t2);cursor:pointer;padding:5px 10px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;flex-shrink:0}
.timer-toggle:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.timer-toggle .tt-ico{transition:transform .2s}
.timer-toggle.collapsed .tt-ico{transform:rotate(-90deg)}
#timer-quiz-body.timer-collapsed{display:none}

/* ══════ ENHANCED PREMIUM GATES ══════ */

/* AI Gate — chat preview feel */
.pg-ai{position:relative;margin:24px 0;padding:22px 22px 20px;background:linear-gradient(135deg,rgba(77,158,255,0.06),rgba(167,139,250,0.06));border:1px solid transparent;border-radius:16px;overflow:hidden;isolation:isolate}
.pg-ai::before{content:"";position:absolute;inset:0;border-radius:16px;padding:1px;background:linear-gradient(135deg,#4D9EFF,#A78BFA,#4D9EFF);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;background-size:200% 200%;animation:pg-border 4s linear infinite;z-index:-1}
@keyframes pg-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.pg-ai-hd{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.pg-ai-ico{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#4D9EFF,#A78BFA);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 0 0 0 rgba(167,139,250,0.5);animation:pg-pulse 2s ease-in-out infinite}
@keyframes pg-pulse{0%{box-shadow:0 0 0 0 rgba(167,139,250,0.5)}70%{box-shadow:0 0 0 14px rgba(167,139,250,0)}100%{box-shadow:0 0 0 0 rgba(167,139,250,0)}}
.pg-ai-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#A78BFA;letter-spacing:2px;text-transform:uppercase;line-height:1.2}
.pg-ai-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-ai-chips{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 12px}
.pg-ai-chip{font-family:var(--mono);font-size:10.5px;padding:6px 10px;background:rgba(77,158,255,0.08);border:1px solid rgba(77,158,255,0.25);border-radius:999px;color:#4D9EFF;cursor:pointer;transition:all .15s}
.pg-ai-chip:hover{background:rgba(77,158,255,0.15);transform:translateY(-1px)}
.pg-ai-bubble{background:rgba(10,14,26,0.6);border:1px solid rgba(167,139,250,0.2);border-radius:12px;padding:12px 14px;margin-bottom:14px;position:relative;font-size:12.5px;color:var(--t2);line-height:1.55}
.pg-ai-bubble::before{content:"AI";position:absolute;top:-10px;left:12px;background:linear-gradient(135deg,#4D9EFF,#A78BFA);color:#fff;font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;letter-spacing:1px}
.pg-ai-typing{display:inline-flex;gap:3px;margin-left:4px;vertical-align:middle}
.pg-ai-typing span{width:5px;height:5px;border-radius:50%;background:#A78BFA;animation:pg-typing 1.4s ease-in-out infinite}
.pg-ai-typing span:nth-child(2){animation-delay:0.2s}
.pg-ai-typing span:nth-child(3){animation-delay:0.4s}
@keyframes pg-typing{0%,60%,100%{opacity:0.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}
.pg-ai-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#4D9EFF,#A78BFA);color:#fff;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(77,158,255,0.3)}
.pg-ai-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(77,158,255,0.4)}
.pg-ai-badge{font-family:var(--mono);font-size:9px;color:#A78BFA;padding:3px 8px;background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}

/* Discere Gate — exam simulator */
.pg-disc{position:relative;margin:24px 0;padding:22px;background:linear-gradient(135deg,rgba(52,211,153,0.05),rgba(16,185,129,0.05));border:1px solid rgba(52,211,153,0.25);border-radius:16px;overflow:hidden}
.pg-disc::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#34D399,#10B981,#34D399);background-size:200% 100%;animation:pg-slide 3s linear infinite}
@keyframes pg-slide{0%{background-position:0% 0}100%{background-position:200% 0}}
.pg-disc-hd{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.pg-disc-ico{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#34D399,#10B981);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;position:relative}
.pg-disc-ico::after{content:"";position:absolute;inset:-3px;border:2px solid rgba(52,211,153,0.4);border-radius:14px;animation:pg-ring 2s ease-in-out infinite}
@keyframes pg-ring{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.1);opacity:0}}
.pg-disc-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#34D399;letter-spacing:2px;text-transform:uppercase}
.pg-disc-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-disc-split{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;margin:16px 0;padding:12px;background:rgba(10,14,26,0.5);border:1px solid rgba(52,211,153,0.15);border-radius:12px}
.pg-disc-col{text-align:center}
.pg-disc-col-ttl{font-family:var(--mono);font-size:8.5px;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px}
.pg-disc-col-val{font-size:22px;font-weight:700;font-family:var(--fh,serif);color:var(--t2);line-height:1}
.pg-disc-col.on .pg-disc-col-val{background:linear-gradient(135deg,#34D399,#10B981);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.pg-disc-col-sub{font-size:10px;color:var(--t3);margin-top:3px}
.pg-disc-arrow{font-size:16px;color:#34D399;font-weight:700}
.pg-disc-stats{display:flex;gap:16px;margin:12px 0 16px;flex-wrap:wrap}
.pg-disc-stat{display:flex;align-items:baseline;gap:6px}
.pg-disc-stat-n{font-size:19px;font-weight:700;color:#34D399;font-family:var(--fh,serif)}
.pg-disc-stat-l{font-size:10.5px;color:var(--t3);font-family:var(--mono);text-transform:uppercase;letter-spacing:1px}
.pg-disc-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#34D399,#10B981);color:#060910;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(52,211,153,0.3)}
.pg-disc-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(52,211,153,0.4)}
.pg-disc-badge{font-family:var(--mono);font-size:9px;color:#34D399;padding:3px 8px;background:rgba(52,211,153,0.12);border:1px solid rgba(52,211,153,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}

/* Plan Gate — calendar mockup */
.pg-plan{position:relative;margin:24px 0;padding:22px;background:linear-gradient(135deg,rgba(167,139,250,0.05),rgba(124,58,237,0.05));border:1px solid rgba(167,139,250,0.25);border-radius:16px;overflow:hidden}
.pg-plan::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#A78BFA,#7C3AED,#A78BFA);background-size:200% 100%;animation:pg-slide 3s linear infinite}
.pg-plan-hd{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.pg-plan-ico{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#A78BFA,#7C3AED);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;position:relative}
.pg-plan-ico::after{content:"✨";position:absolute;top:-4px;right:-4px;font-size:14px;animation:pg-spark 1.8s ease-in-out infinite}
@keyframes pg-spark{0%,100%{opacity:0.4;transform:scale(0.9) rotate(0deg)}50%{opacity:1;transform:scale(1.2) rotate(20deg)}}
.pg-plan-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#A78BFA;letter-spacing:2px;text-transform:uppercase}
.pg-plan-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-plan-cal{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin:14px 0;padding:12px;background:rgba(10,14,26,0.5);border:1px solid rgba(167,139,250,0.15);border-radius:10px}
.pg-plan-day{aspect-ratio:1;border-radius:5px;background:rgba(167,139,250,0.08);position:relative;display:flex;align-items:center;justify-content:center;font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700}
.pg-plan-day.f{background:rgba(167,139,250,0.2);color:#A78BFA}
.pg-plan-day.f::after{content:"";position:absolute;inset:3px;border:1.5px dashed rgba(167,139,250,0.5);border-radius:3px}
.pg-plan-day.done{background:linear-gradient(135deg,#A78BFA,#7C3AED);color:#fff}
.pg-plan-day.done::before{content:"✓";font-size:10px}
.pg-plan-day.today{background:rgba(245,158,11,0.2);color:var(--amber);border:1px solid var(--amber)}
.pg-plan-ring{width:48px;height:48px;position:relative;margin-left:auto}
.pg-plan-ring svg{transform:rotate(-90deg)}
.pg-plan-ring-txt{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:var(--mono);font-size:10px;font-weight:700;color:#A78BFA}
.pg-plan-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#A78BFA,#7C3AED);color:#fff;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(167,139,250,0.3)}
.pg-plan-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(167,139,250,0.4)}
.pg-plan-note{font-family:var(--mono);font-size:9.5px;color:var(--t3);margin-left:10px;letter-spacing:0.5px}

/* Enhanced Visualizer */
.pbx-wrap{position:relative}
.pbx-wrap::after{content:"";position:absolute;bottom:-8px;left:10%;right:10%;height:20px;background:radial-gradient(ellipse at center,rgba(167,139,250,0.25),transparent 70%);filter:blur(8px);z-index:-1;pointer-events:none}
.pbx-badge{position:relative;padding-left:15px!important}
.pbx-badge::before{content:"";position:absolute;left:6px;top:50%;transform:translateY(-50%);width:5px;height:5px;border-radius:50%;background:#10B981;box-shadow:0 0 8px #10B981;animation:pbx-blink 1.5s ease-in-out infinite}
@keyframes pbx-blink{0%,100%{opacity:1}50%{opacity:0.3}}
.pbx-mode-tab{position:relative;overflow:hidden}
.pbx-mode-tab.on::after{content:"";position:absolute;bottom:0;left:10%;right:10%;height:2px;background:linear-gradient(90deg,transparent,var(--violet),transparent);animation:pbx-under 0.4s ease-out}
@keyframes pbx-under{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
@media(max-width:600px){
  .pg-disc-split{grid-template-columns:1fr;gap:8px}
  .pg-disc-arrow{display:none}
  .pg-plan-ring{display:none}
}


.pbx-canvas{cursor:grab;user-select:none;touch-action:none}
.pbx-canvas:active{cursor:grabbing}
.pbx-drag-hint{position:absolute;top:10px;right:10px;font-family:var(--mono);font-size:9px;color:var(--t3);background:rgba(10,14,26,0.85);padding:4px 8px;border-radius:6px;border:1px solid var(--bdm);pointer-events:none;opacity:0.7;letter-spacing:0.5px}
</style>
</head>
<body>
<a href="#main-content" class="skip-link">Preskoči na sadržaj</a>
<div class="toast-wrap" id="toast-wrap" aria-live="polite" aria-atomic="true"></div>

<div class="app">
<aside class="sidebar" id="sidebar">
  <button onclick="backToList()" style="padding:7px 14px;border:none;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3);font-family:var(--mono);letter-spacing:.3px;background:transparent;cursor:pointer;width:100%;text-align:left;transition:color .12s" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t3)'">← Sva poglavlja</button>
  <div class="sb-title">MAT B · 20 poglavlja</div>
  <div class="sb-item" onclick="navigateChapter('p00a')" style="cursor:pointer"><span class="sb-dot"></span>00A · Uvod u maturu</div>
  <div class="sb-item" onclick="navigateChapter('p00b')" style="cursor:pointer"><span class="sb-dot"></span>00B · Kalkulator &amp; alati</div>
  <div class="sb-title">Brojevi i izrazi</div>
  <div class="sb-item" onclick="navigateChapter('p01')" style="cursor:pointer"><span class="sb-dot"></span>01 · Skupovi i brojevi</div>
  <div class="sb-item" onclick="navigateChapter('p02')" style="cursor:pointer"><span class="sb-dot"></span>02 · Razlomci i postoci</div>
  <div class="sb-item" onclick="navigateChapter('p03')" style="cursor:pointer"><span class="sb-dot"></span>03 · Potencije i korijeni</div>
  <div class="sb-item" onclick="navigateChapter('p04')" style="cursor:pointer"><span class="sb-dot"></span>04 · Algebarski izrazi</div>
  <div class="sb-title">Jednadžbe i funkcije</div>
  <div class="sb-item" onclick="navigateChapter('p05')" style="cursor:pointer"><span class="sb-dot"></span>05 · Linearne jednadžbe</div>
  <div class="sb-item" onclick="navigateChapter('p06')" style="cursor:pointer"><span class="sb-dot"></span>06 · Kvadratne jednadžbe</div>
  <div class="sb-item" onclick="navigateChapter('p07')" style="cursor:pointer"><span class="sb-dot"></span>07 · Sustavi jednadžbi</div>
  <div class="sb-item" onclick="navigateChapter('p08')" style="cursor:pointer"><span class="sb-dot"></span>08 · Linearna funkcija</div>
  <div class="sb-item active"><span class="sb-dot"></span>09 · Kvadratna funkcija<div class="sb-progress"><div class="sb-prog-track"><div class="sb-prog-fill" id="sb-prog-fill"></div></div><span class="sb-prog-pct" id="sb-prog-pct">0%</span></div></div>
  <div class="sb-item" onclick="navigateChapter('p10')" style="cursor:pointer"><span class="sb-dot"></span>10 · Eksp. i log. funkcija</div>
  <div class="sb-title">Geometrija</div>
  <div class="sb-item" onclick="navigateChapter('p11')" style="cursor:pointer"><span class="sb-dot"></span>11 · Vektori</div>
  <div class="sb-item" onclick="navigateChapter('p12')" style="cursor:pointer"><span class="sb-dot"></span>12 · Trigonometrija</div>
  <div class="sb-item" onclick="navigateChapter('p13')" style="cursor:pointer"><span class="sb-dot"></span>13 · Geometrija ravnine</div>
  <div class="sb-item" onclick="navigateChapter('p14')" style="cursor:pointer"><span class="sb-dot"></span>14 · Geometrija prostora</div>
  <div class="sb-title">Statistika i primjena</div>
  <div class="sb-item" onclick="navigateChapter('p15')" style="cursor:pointer"><span class="sb-dot"></span>15 · Kombinatorika</div>
  <div class="sb-item" onclick="navigateChapter('p16')" style="cursor:pointer"><span class="sb-dot"></span>16 · Statistika</div>
  <div class="sb-item" onclick="navigateChapter('p17')" style="cursor:pointer"><span class="sb-dot"></span>17 · Nizovi i redovi</div>
  <div class="sb-item" onclick="navigateChapter('p18')" style="cursor:pointer"><span class="sb-dot"></span>18 · Financijska matematika</div>
</aside>

<!-- ═══ HAMBURGER TOGGLE + OVERLAY (mobile only) ═══ -->
<button class="ham-btn" id="ham-btn" onclick="toggleSidebar()" aria-label="Otvori navigaciju poglavlja" aria-expanded="false" aria-controls="sidebar">
  <span class="ham-line"></span>
  <span class="ham-line"></span>
  <span class="ham-line"></span>
</button>
<div class="ham-overlay" id="ham-overlay" onclick="toggleSidebar()" aria-hidden="true"></div>

<main class="main" id="main-content">
<div class="wrap">

<div class="topbar">
  <div class="topbar-L">
    <span class="ch-badge">P / 09</span>
    <h1 class="ch-title"><span class="acc">Kvadratna</span> funkcija — parabola i tjeme</h1>
  </div>
  <div class="topbar-R">
    <span class="pill pts">8-12 BODOVA</span>
    <span class="pill time">~55 MIN</span>
    <span class="pill prio">★★★★★</span>
  </div>
</div>

<div class="welcome" id="welcome">
  <div class="welcome-head">
    <h2 class="welcome-h">📐 Kvadratna funkcija — najvažnija na maturi</h2>
    <button class="welcome-x" onclick="closeWelcome()" aria-label="Zatvori">✕</button>
  </div>
  <p class="welcome-t">Kvadratna funkcija f(x) = ax² + bx + c je <strong>najčešće ispitana</strong> — 3-4 zadatka po maturi. Tjeme, nultočke, diskriminanta, Vièteove formule. <strong>8–12 bodova svake mature</strong> (najviše od svih poglavlja). Dobit ćeš <strong>Parabola Explorer 2.0</strong> (interaktivni graf), 3-mod kalkulator, 12 Challenge taskova, 9 SR primjera.</p>
</div>

<div class="restore" id="restore">
  <span class="restore-t">📌 <strong>Imaš nedovršeno učenje.</strong> Nastavi tamo gdje si stao?</span>
  <div style="display:flex;gap:8px;align-items:center">
    <button class="restore-btn" onclick="restoreToTab()">Nastavi →</button>
    <button class="restore-x" onclick="dismissRestore()" aria-label="Odbaci">✕</button>
  </div>
</div>

<div class="from-banner" id="from-banner"><span id="from-msg"></span></div>

<div class="stats" id="stats-panel">
  <div class="stat">📚 Posjeta: <strong id="stat-visits">0</strong></div>
  <div class="stat">🎯 Drill: <strong id="stat-drill">0 / 0</strong></div>
  <div class="stat">🏆 Najbolji kviz: <strong id="stat-best">—</strong></div>
  <div class="stat warn">🔥 Streak: <strong id="stat-streak">0</strong></div>
  <div class="stat ok">⭐ Favoriti: <strong id="stat-favs">0</strong></div>
</div>

<div class="tabs" role="tablist">
  <button class="tab on" id="tb0" role="tab" onclick="showSec(0,this)"><span>⚡ 2 min pregled</span><span class="tab-meta">brzi sažetak</span></button>
  <button class="tab" id="tb1" role="tab" onclick="showSec(1,this)"><span>📐 Uči</span><span class="tab-meta">~35 min · teorija</span></button>
  <button class="tab" id="tb2" role="tab" onclick="showSec(2,this)"><span>🧠 Vježbaj</span><span class="tab-meta">~35 min · praksa</span></button>
</div>

<section id="l0" class="sec on" role="tabpanel">

<div class="hero">
  <div class="hero-deco">ax²</div>
  <div class="hero-top">
    <span class="hero-kb">P09 · PARABOLA, TJEME, NULTOČKE</span>
    <span class="hero-prio">⭐⭐⭐⭐⭐</span>
  </div>
  <h2 class="hero-h"><span class="acc">Kvadratna</span> — <span class="acc2">ax² + bx + c</span></h2>
  <p class="hero-sub">Parabola, tjeme, nultočke, diskriminanta, Vièteove formule, kvadratne nejednadžbe — <strong>najvažnije poglavlje</strong> s najviše bodova. Bazično za ekstreme, optimizaciju i fiziku.</p>
  
  <div class="hero-chips">
    <span class="hero-chip"><span class="ci">📐</span> Tjeme, nultočke, diskriminanta</span>
    <span class="hero-chip"><span class="ci">🎯</span> Parabola Explorer 2.0</span>
    <span class="hero-chip"><span class="ci">🧠</span> 9 SR primjera</span>
    <span class="hero-chip"><span class="ci">🏆</span> 12 Challenge taskova</span>
  </div>
  
  <div class="hero-pts-wrap">
    <div class="hero-pts-ring">
      <svg viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="#1f2937" stroke-width="3"/>
        <circle id="hero-ring" cx="24" cy="24" r="20" fill="none" stroke="#C084FC" stroke-width="3" stroke-dasharray="125.6" stroke-dashoffset="125.6" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="hero-pts-lbl"><strong id="hero-pts-counter">0</strong> / 10 bodova<br><span style="color:var(--amber);font-size:10px">ovog poglavlja na maturi</span></div>
  </div>
  
  <div class="ach-wrap" id="ach-wrap">
    <div class="ach-badge" id="ach-explorer" data-ach="explorer"><span class="ach-ico">🎨</span><span>Explorer</span></div>
    <div class="ach-badge" id="ach-streaker" data-ach="streaker"><span class="ach-ico">🔥</span><span>Streak 5</span></div>
    <div class="ach-badge" id="ach-perfect" data-ach="perfect"><span class="ach-ico">💎</span><span>Perfekt 8/8</span></div>
    <div class="ach-badge" id="ach-master" data-ach="master"><span class="ach-ico">👑</span><span>Master</span></div>
  </div>
  
  <div class="stat-grid">
    <div class="stat-card">
      <span class="sc-ico">ax²</span>
      <div class="sc-h">Vodeći koef.</div>
      <div class="sc-t">Znak <strong>a</strong>: parabola otvorena gore (a&gt;0) ili dolje (a&lt;0)</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">D</span>
      <div class="sc-h">Diskriminanta</div>
      <div class="sc-t">D = b² − 4ac. <strong>D&gt;0</strong> → 2 nult., D=0 → 1, D&lt;0 → 0</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">V</span>
      <div class="sc-h">Tjeme</div>
      <div class="sc-t">V = (−b/2a, −D/4a) — ekstrem parabole</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">x₀</span>
      <div class="sc-h">Nultočke</div>
      <div class="sc-t">x = (−b ± √D)/(2a) — kvadratna formula</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">Σ·Π</span>
      <div class="sc-h">Viète</div>
      <div class="sc-t">x₁+x₂ = −b/a, &nbsp; x₁·x₂ = c/a</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">|x|</span>
      <div class="sc-h">Nejednadžbe</div>
      <div class="sc-t">ax²+bx+c &gt;/&lt; 0 — intervali po znaku parabole</div>
    </div>
  </div>
</div>

<div class="box-grid">
  <div class="con" data-no="→"><span><strong>Kvadratna funkcija</strong> je funkcija oblika f(x) = ax² + bx + c, gdje je a ≠ 0. Ako a = 0, nije kvadratna (linearna).</span></div>
  <div class="con" data-no="→"><span><strong>Graf</strong> je <em>parabola</em>. Otvorena prema gore ako a &gt; 0 (minimum u tjemenu). Prema dolje ako a &lt; 0 (maksimum).</span></div>
  <div class="con" data-no="→"><span><strong>Tjeme V</strong> je ekstremna točka. V = (−b/2a, −D/4a). Os simetrije parabole: x = −b/2a.</span></div>
  <div class="con" data-no="→"><span><strong>Nultočke</strong> su rješenja ax² + bx + c = 0. Formula: x = (−b ± √D)/(2a).</span></div>
  <div class="con" data-no="→"><span><strong>Diskriminanta D</strong> = b² − 4ac. D&gt;0: 2 nultočke. D=0: 1 (dvostruka). D&lt;0: nema realnih.</span></div>
  <div class="con" data-no="→"><span><strong>Vièteove formule</strong>: x₁+x₂ = −b/a, x₁·x₂ = c/a. Brzo za provjeru ili rekonstrukciju jednadžbe.</span></div>
</div>

<div class="box-20">
  <div class="box-20-lbl">⚡ 20 sekundi — zapamti ovih 6</div>
  <ul class="box-20-list">
    <li><strong>Opći oblik:</strong> f(x) = ax² + bx + c (a ≠ 0). <strong>Tjemeni:</strong> f(x) = a(x − p)² + q, V = (p, q). <strong>Faktorizirani:</strong> f(x) = a(x − x₁)(x − x₂).</li>
    <li><strong>Diskriminanta:</strong> D = b² − 4ac. D&gt;0: 2 nultočke. D=0: 1 (tjeme na x-osi). D&lt;0: nema realnih.</li>
    <li><strong>Tjeme:</strong> V = (−b/2a, f(−b/2a)) ili V = (−b/2a, −D/4a).</li>
    <li><strong>Nultočke:</strong> x = (−b ± √D)/(2a). Uvjet realnih: D ≥ 0.</li>
    <li><strong>Vièteove formule:</strong> x₁ + x₂ = −b/a, &nbsp; x₁ · x₂ = c/a.</li>
    <li><strong>Nejednadžbe:</strong> ax²+bx+c &gt; 0 — skiciraj parabolu, odredi intervale iznad x-osi.</li>
  </ul>
</div>

<div class="box-for">
  <div class="box-for-lbl">⚙ Ključne formule — uvijek imaj u glavi</div>
  <div class="for-grid">
    <div class="for-item">
      <span class="lbl">Nultočke</span>
      <div class="val">x = (−b ± √D)/(2a)</div>
    </div>
    <div class="for-item">
      <span class="lbl">Diskriminanta</span>
      <div class="val">D = b² − 4ac</div>
    </div>
    <div class="for-item">
      <span class="lbl">Tjeme</span>
      <div class="val">V = (−b/2a, −D/4a)</div>
    </div>
    <div class="for-item">
      <span class="lbl">Viète</span>
      <div class="val">x₁+x₂ = −b/a, &nbsp; x₁·x₂ = c/a</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <span class="nb off">← Nema prethodnog</span>
  <button class="nb primary" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">📐 Uči →</button>
</div>

</section>

<section id="l1" class="sec" role="tabpanel">

<!-- 1: DEFINICIJA I OBLICI -->
<div class="sec-head">
  <span class="sec-badge">1 / 12</span>
  <h3 class="sec-h">Definicija i tri oblika kvadratne funkcije</h3>
</div>
<div class="sec-body">
  <p><strong>Kvadratna funkcija</strong> je funkcija oblika <em>f(x) = ax² + bx + c</em>, gdje je a ≠ 0 (inače je linearna). Domena: ℝ. Slika ovisi o a i tjemenu.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Tri oblika — svaki koristan za različitu informaciju:</strong><br><br>
      → <strong>Opći (standardni):</strong> f(x) = ax² + bx + c<br>
      &nbsp;&nbsp;&nbsp;Direktno vidiš c (vrijednost f(0) = y-presjek).<br><br>
      → <strong>Tjemeni (kanonski):</strong> f(x) = a(x − p)² + q<br>
      &nbsp;&nbsp;&nbsp;Direktno vidiš tjeme V = (p, q) i os simetrije x = p.<br><br>
      → <strong>Faktorizirani:</strong> f(x) = a(x − x₁)(x − x₂)<br>
      &nbsp;&nbsp;&nbsp;Direktno vidiš nultočke x₁, x₂.
    </div>
  </div>
  
  <div style="display:flex;justify-content:center;margin:16px 0">
    <svg viewBox="0 0 360 180" width="360" height="180" style="max-width:100%;background:var(--inp);border-radius:var(--r2);border:1px solid var(--bdm)">
      <defs>
        <path id="par9" d="M 30 160 Q 180 -40 330 160" fill="none"/>
      </defs>
      <line x1="30" y1="130" x2="330" y2="130" stroke="#7A90BB" stroke-width="0.5"/>
      <line x1="180" y1="20" x2="180" y2="160" stroke="#7A90BB" stroke-width="0.5" stroke-dasharray="2,2"/>
      <path d="M 60 20 Q 180 280 300 20" fill="none" stroke="#4D9EFF" stroke-width="2"/>
      <circle cx="80" cy="130" r="4" fill="#F472B6"/>
      <text x="80" y="148" fill="#F472B6" font-family="JetBrains Mono" font-size="9" text-anchor="middle">x₁</text>
      <circle cx="280" cy="130" r="4" fill="#F472B6"/>
      <text x="280" y="148" fill="#F472B6" font-family="JetBrains Mono" font-size="9" text-anchor="middle">x₂</text>
      <circle cx="180" cy="160" r="5" fill="#F59E0B"/>
      <text x="180" y="175" fill="#F59E0B" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">V (tjeme)</text>
      <text x="180" y="16" fill="#22D3EE" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">parabola: a &gt; 0</text>
      <text x="30" y="30" fill="#34D399" font-family="JetBrains Mono" font-size="10">os simetrije x = p</text>
    </svg>
  </div>
  
  <div class="emph"><strong>Primjer 1 (opći → tjemeni):</strong> f(x) = x² − 6x + 5. Nadopunom do kvadrata: = (x − 3)² − 9 + 5 = (x − 3)² − 4. V = (3, −4).<br><strong>Primjer 2 (faktorizirani → opći):</strong> f(x) = 2(x − 1)(x + 3) = 2(x² + 2x − 3) = 2x² + 4x − 6.</div>
</div>

<!-- 2: GRAF — PARABOLA -->
<div class="sec-head">
  <span class="sec-badge">2 / 12</span>
  <h3 class="sec-h">Graf kvadratne funkcije — parabola</h3>
</div>
<div class="sec-body">
  <p>Graf kvadratne funkcije je uvijek <strong>parabola</strong>. Njen izgled ovisi o a, b, c.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Ovisnost o a (vodećem koeficijentu):</strong><br>
      → <em>a &gt; 0</em> — otvorena prema gore, minimum u tjemenu<br>
      → <em>a &lt; 0</em> — otvorena prema dolje, maksimum u tjemenu<br>
      → <em>|a| velik</em> — "uža" parabola. |a| mali → "šira".<br><br>
      <strong>Koeficijent c</strong> = f(0) = y-presjek (gdje parabola siječe y-os).<br><br>
      <strong>Os simetrije:</strong> vertikalni pravac kroz tjeme, x = −b/2a. Parabola je zrcalno simetrična oko nje.
    </div>
  </div>
  
  <div class="emph"><strong>Za f(x) = 2x² − 4x + 1:</strong> a = 2 &gt; 0 → otvorena gore (min). c = 1 → y-presjek u (0, 1). Os simetrije: x = −(−4)/(2·2) = 1.<br><strong>Skiciraj:</strong> prvo a (orijentacija), zatim tjeme (dno/vrh), pa y-presjek, i ako postoje — nultočke.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Translacije:</strong> f(x) = a(x − p)² + q → parabola g(x) = ax² translirana za p desno i q gore. Ako je p = q = 0 → f(x) = ax² (tjeme u ishodištu).</div>
  </div>
</div>

<!-- 3: NULTOČKE I DISKRIMINANTA -->
<div class="sec-head">
  <span class="sec-badge">3 / 12</span>
  <h3 class="sec-h">Nultočke i diskriminanta</h3>
</div>
<div class="sec-body">
  <p><strong>Nultočke</strong> su rješenja jednadžbe <em>ax² + bx + c = 0</em>. Geometrijski — presjeci parabole s x-osi.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Kvadratna formula:</strong><br>
      <em>x = (−b ± √D) / (2a)</em>, &nbsp; gdje je <strong>D = b² − 4ac</strong> (diskriminanta).<br><br>
      <strong>Broj rješenja iz D:</strong><br>
      → D &gt; 0 — <em>dvije različite</em> realne nultočke (parabola siječe x-os u 2 točke)<br>
      → D = 0 — <em>jedna</em> (dvostruka) nultočka (parabola dodiruje x-os u tjemenu)<br>
      → D &lt; 0 — <em>nema</em> realnih nultočaka (parabola "lebdi" iznad ili ispod x-osi)
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1 (D &gt; 0):</strong> x² − 5x + 6 = 0. D = 25 − 24 = 1. x = (5 ± 1)/2 → x₁ = 2, x₂ = 3.<br><strong>Primjer 2 (D = 0):</strong> x² − 4x + 4 = 0. D = 16 − 16 = 0. x = 4/2 = 2 (dvostruka).<br><strong>Primjer 3 (D &lt; 0):</strong> x² + x + 1 = 0. D = 1 − 4 = −3 &lt; 0 → nema realnih rješenja.</div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Često pitanje:</strong> "za koje a parabola NE siječe x-os?" — tražiš D &lt; 0. "Dira x-os" → D = 0. "Siječe u 2 točke" → D &gt; 0.</div>
  </div>
</div>

<!-- 4: TJEME -->
<div class="sec-head">
  <span class="sec-badge">4 / 12</span>
  <h3 class="sec-h">Tjeme — ekstrem parabole</h3>
</div>
<div class="sec-body">
  <p><strong>Tjeme V</strong> je točka maksimuma (a &lt; 0) ili minimuma (a &gt; 0) parabole. Leži na osi simetrije.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Formule za tjeme:</strong><br>
      x-koordinata: <em>p = −b/2a</em><br>
      y-koordinata: <em>q = f(p) = −D/4a</em> = c − b²/4a<br><br>
      <strong>Izvod:</strong> tjeme je na osi simetrije, koja je točno "između" dviju nultočaka. Iz (x − x₁)(x − x₂) razvijanjem: x₁ + x₂ = −b/a, pa je p = (x₁+x₂)/2 = −b/2a.<br><br>
      <strong>Maksimum/minimum:</strong> ako a &gt; 0 → min = q. Ako a &lt; 0 → max = q.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1:</strong> f(x) = x² − 6x + 5. a = 1, b = −6. p = 6/2 = 3. q = f(3) = 9 − 18 + 5 = −4. V = (3, −4).<br><strong>Primjer 2:</strong> f(x) = −2x² + 8x − 3. a = −2, b = 8. p = −8/(−4) = 2. q = f(2) = −8 + 16 − 3 = 5. V = (2, 5). Max f(x) = 5.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Primjena — optimizacija:</strong> "maksimalna dobit", "minimalna potrošnja", "najviša točka projektila" — sve se svodi na nalaženje tjemena kvadratne funkcije.</div>
  </div>
</div>

<!-- 5: VIÈTEOVE FORMULE -->
<div class="sec-head">
  <span class="sec-badge">5 / 12</span>
  <h3 class="sec-h">Vièteove formule — zbroj i produkt nultočaka</h3>
</div>
<div class="sec-body">
  <p><strong>Vièteove formule</strong> povezuju nultočke x₁, x₂ s koeficijentima a, b, c — bez da ih direktno računaš.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Ako ax² + bx + c = 0 ima nultočke x₁, x₂:</strong><br><br>
      → <em>x₁ + x₂ = −b/a</em> (zbroj)<br>
      → <em>x₁ · x₂ = c/a</em> (produkt)<br><br>
      <strong>Za a = 1</strong> (normirano):<br>
      → x₁ + x₂ = −b,  &nbsp; x₁ · x₂ = c<br><br>
      <strong>Izvod:</strong> iz faktoriziranog oblika ax² + bx + c = a(x − x₁)(x − x₂) = a[x² − (x₁+x₂)x + x₁x₂]. Usporedi koeficijente.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1 (provjera):</strong> x² − 5x + 6 = 0 → x₁+x₂ = 5, x₁·x₂ = 6. Nultočke su 2 i 3 (2+3 = 5 ✓, 2·3 = 6 ✓).<br><strong>Primjer 2 (rekonstrukcija):</strong> ako su nultočke 3 i −4, kvadratna s a = 1 je x² − (3+(−4))x + 3·(−4) = x² + x − 12.<br><strong>Primjer 3 (bez rješavanja):</strong> u x² − 7x + 12 = 0, x₁² + x₂² = (x₁+x₂)² − 2x₁x₂ = 49 − 24 = 25.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Kad su korisne?</strong> Kad ne moraš eksplicitno računati x₁, x₂ (npr. pitanje traži samo zbroj/produkt/kvadrat zbroja). Brže i sigurnije od kvadratne formule.</div>
  </div>
</div>
<!-- ═══ PREMIUM GATE 1: AI PROFESOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Zaglavio si na kvadratnoj funkciji? Pitaj me što god — objašnjenje po koracima, prilagođeno tebi.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Kako naći tjeme?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Kad parabola ima nultočke?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Maksimum/minimum?</span>
  </div>
  <div class="pg-ai-bubble">
    Parabola te muči? <strong>Tjeme, nultočke, os simetrije, skica</strong> — sve po koracima<span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora →</button>
</div>


<!-- 6: KVADRATNE NEJEDNADŽBE -->
<div class="sec-head">
  <span class="sec-badge">6 / 12</span>
  <h3 class="sec-h">Kvadratne nejednadžbe</h3>
</div>
<div class="sec-body">
  <p>Nejednadžbe oblika <strong>ax² + bx + c &gt; 0</strong> (ili ≥, &lt;, ≤) rješavaju se <em>geometrijski</em> — skiciraj parabolu i vidi gdje je iznad/ispod x-osi.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Postupak:</strong><br>
      1. Izračunaj nultočke x₁, x₂ (ako postoje).<br>
      2. Odredi znak a (parabola gore/dolje).<br>
      3. Skiciraj i označi intervale gdje je izraz + ili −.<br>
      4. Ako nema realnih nultočaka (D &lt; 0): parabola je CIJELA iznad (a &gt; 0) ili ispod (a &lt; 0) x-osi.<br><br>
      <strong>Interpretacija:</strong> ax² + bx + c &gt; 0 → x gdje je parabola IZNAD x-osi.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1:</strong> x² − 5x + 6 &gt; 0. Nultočke: 2 i 3. a = 1 &gt; 0 → parabola otvorena gore. Rješenje: <em>x &lt; 2 ili x &gt; 3</em> (parabola iznad x-osi).<br><strong>Primjer 2:</strong> −x² + 4 ≥ 0 → x² ≤ 4 → −2 ≤ x ≤ 2. (a &lt; 0, parabola gore između nultočaka.)<br><strong>Primjer 3 (D &lt; 0):</strong> x² + x + 1 &gt; 0 uvijek vrijedi (D = −3 &lt; 0, a &gt; 0 → cijela parabola iznad x-osi). Rješenje: <em>sve x ∈ ℝ</em>.</div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Znak ili = u nejednadžbi</strong> određuje jesu li nultočke uključene: &gt; ili &lt; → nultočke NISU uključene (otvoreni interval); ≥ ili ≤ → JESU (zatvoreni).</div>
  </div>
</div>

<!-- 7: PRIMJENE -->
<div class="sec-head">
  <span class="sec-badge">7 / 12</span>
  <h3 class="sec-h">Primjene — optimizacija i hitac</h3>
</div>
<div class="sec-body">
  <p>Kvadratna funkcija pojavljuje se svuda u <strong>optimizaciji</strong> i <strong>fizici</strong>.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Optimizacija</strong> — traži se max/min kvadratne funkcije:<br>
      → Postavi funkciju (dobit, površina, volumen).<br>
      → Nađi tjeme → to je max (ako a &lt; 0) ili min (ako a &gt; 0).<br><br>
      <strong>Kosi hitac</strong> (fizika): visina h(t) = h₀ + v₀t − (g/2)t². Maksimum u t_max = v₀/g, vrijeme pada iz uvjeta h(t) = 0.<br><br>
      <strong>Ekonomija:</strong> cijena p, prihod = p · potražnja(p). Često potražnja linearna u p → prihod kvadratan.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer (pravokutnik maks. površine):</strong> opseg 40, dimenzije x i (20−x). P(x) = x(20−x) = −x² + 20x. Tjeme: p = 10, q = 100. Max površina = 100 (kvadrat stranice 10).<br><strong>Primjer (hitac):</strong> kamen baci se vertikalno početnom brzinom 20 m/s s visine 0. h(t) = 20t − 5t² (g = 10). Max visina = tjeme q = −D/4a. D = 400, a = −5. q = 400/20 = 20 m u t = 2 s.</div>
</div>

<!-- 8: VEZA S KVADRATNOM JEDNADŽBOM -->
<div class="sec-head">
  <span class="sec-badge">8 / 12</span>
  <h3 class="sec-h">Veza s kvadratnom jednadžbom (P06)</h3>
</div>
<div class="sec-body">
  <p>Kvadratna <em>funkcija</em> i kvadratna <em>jednadžba</em> su blisko povezane — nultočke funkcije = rješenja jednadžbe.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Ekvivalencije:</strong><br>
      → nultočke f(x) = ax² + bx + c ⇔ rješenja jednadžbe ax² + bx + c = 0<br>
      → f(x) &gt; k ⇔ ax² + bx + c − k &gt; 0 (preuredi na nulu)<br>
      → grafički: f(x) = g(x) ⇔ presjeci grafova (za linearni g — često na ispitu)<br><br>
      <strong>Presjek s pravcem:</strong> ax² + bx + c = mx + n → rješavaš kvadratnu: ax² + (b−m)x + (c−n) = 0.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer:</strong> za koje k pravac y = k dodiruje parabolu f(x) = x² − 4x + 5? Postavljamo x² − 4x + 5 = k → x² − 4x + (5−k) = 0. Dodir ⇔ D = 0 → 16 − 4(5−k) = 0 → 16 − 20 + 4k = 0 → k = 1. (U tom slučaju dodir u x = 2, tj. tjeme.)</div>
</div>

<!-- 9: PARABOLA EXPLORER -->
<div class="sec-head">
  <span class="sec-badge">9 / 12</span>
  <h3 class="sec-h">📊 Parabola Explorer 2.0 — interaktivni graf</h3>
</div>
<div class="sec-body">
  <p>Mijenjaj <strong>a, b, c</strong> i gledaj uživo kako se parabola ponaša — tjeme, nultočke, diskriminanta.</p>
  
  <div class="pbx-wrap">
    <div class="pbx-head">
      <span class="pbx-title">parabola explorer 2.0</span>
      <span class="pbx-badge">LIVE</span>
    </div>
    
    <div class="pbx-mode-tabs">
      <button class="pbx-mode-tab on" onclick="pbxSetMode(0,this)">📐 Opći (ax²+bx+c)</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(1,this)">🎯 Tjemeni (a(x−p)²+q)</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(2,this)">✂ Faktorizirani (a(x−x₁)(x−x₂))</button>
    </div>
    
    <div class="pbx-canvas-wrap">
      <div class="pbx-drag-hint">✥ povuci za ugađanje</div>
      <canvas class="pbx-canvas" id="pbx-canvas" width="640" height="360" aria-label="Parabola explorer"></canvas>
      <div class="pbx-zoom">
        <button class="pbx-zoom-btn" onclick="pbxZoom(1)" aria-label="Uvećaj">+</button>
        <button class="pbx-zoom-btn" onclick="pbxZoom(-1)" aria-label="Smanji">−</button>
        <button class="pbx-zoom-btn" onclick="pbxZoom(0)" aria-label="Reset" style="font-size:11px">⌂</button>
      </div>
      <div class="pbx-zoom-lbl" id="pbx-zoom-lbl">1.0×</div>
    </div>
    
    <div class="pbx-controls" id="pbx-free-ctrl">
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl" id="pbx-a-lbl">a</span>
          <span class="pbx-ctrl-val" id="pbx-a-val">1</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-a" min="-3" max="3" step="0.1" value="1" style="width:100%" aria-label="koeficijent a">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl" id="pbx-b-lbl">b</span>
          <span class="pbx-ctrl-val" id="pbx-b-val">-4</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-b" min="-10" max="10" step="0.5" value="-4" style="width:100%" aria-label="koeficijent b">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl" id="pbx-c-lbl">c</span>
          <span class="pbx-ctrl-val" id="pbx-c-val">3</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-c" min="-10" max="10" step="0.5" value="3" style="width:100%" aria-label="koeficijent c">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Diskriminanta D</span>
          <span class="pbx-ctrl-val" id="pbx-d-val" style="color:var(--pink)">4</span>
        </div>
        <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);line-height:1.5">b² − 4ac</div>
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Tjeme V</span>
          <span class="pbx-ctrl-val" id="pbx-v-val" style="color:var(--amber)">(2, −1)</span>
        </div>
        <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);line-height:1.5">(−b/2a, −D/4a)</div>
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Nultočke</span>
          <span class="pbx-ctrl-val" id="pbx-zeros-val" style="color:var(--green)">1, 3</span>
        </div>
        <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);line-height:1.5">(−b±√D)/(2a)</div>
      </div>
    </div>
    
    <div class="pbx-presets">
      <button class="pbx-preset" onclick="pbxPreset('std',this)">Standard x²−4x+3</button>
      <button class="pbx-preset" onclick="pbxPreset('up',this)">Otvorena gore</button>
      <button class="pbx-preset" onclick="pbxPreset('down',this)">Otvorena dolje</button>
      <button class="pbx-preset" onclick="pbxPreset('double',this)">Dvostruka (D=0)</button>
      <button class="pbx-preset" onclick="pbxPreset('none',this)">Bez nultočaka (D&lt;0)</button>
      <button class="pbx-preset" onclick="pbxPreset('wide',this)">Široka (|a| malo)</button>
      <button class="pbx-preset" onclick="pbxPreset('narrow',this)">Uska (|a| veliko)</button>
    </div>
    
    <div class="pbx-legend">
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#4D9EFF"></span><strong>parabola f(x)</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#F59E0B"></span><strong>tjeme V</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#34D399"></span><strong>nultočke</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#F472B6"></span><strong>os simetrije</strong></span>
    </div>
    
    <div class="pbx-info" id="pbx-info">
      f(x) = x² − 4x + 3 | V = (2, −1) | nultočke: 1, 3 | D = 4
    </div>
    
    <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;flex-wrap:wrap">
      <button class="pbx-challenge-toggle" id="pbx-challenge-btn" onclick="pbxChallengeToggle()">🎯 Pokreni izazov (12 taskova)</button>
    </div>
    
    <div class="pbx-challenge-wrap" id="pbx-challenge">
      <div class="pbx-challenge-head">
        <span class="pbx-challenge-lbl">🎯 Izazov</span>
        <span class="pbx-challenge-stats"><strong id="pbx-ch-score">0</strong> / <strong id="pbx-ch-tot">0</strong></span>
      </div>
      <div class="pbx-challenge-task" id="pbx-challenge-task">Klikni "Pokreni" da krene izazov.</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="pbx-btn" style="border-color:var(--bd-p);color:var(--pink)" onclick="pbxChallengeCheck()">Provjeri</button>
        <button class="pbx-btn" onclick="pbxChallengeNext()">Novi izazov →</button>
      </div>
      <div class="pbx-challenge-fb" id="pbx-challenge-fb"></div>
    </div>
  </div>
</div>


<!-- 10: NCVVO -->
<div class="sec-head">
  <span class="sec-badge">10 / 12</span>
  <h3 class="sec-h">📝 NCVVO stvarni zadaci iz mature</h3>
</div>
<div class="sec-body">
  <p>Autentični zadaci iz MAT B mature — tjeme, nultočke, diskriminanta, Viète.</p>
  <div class="ncvvo-wrap">
    <div class="ncvvo-item">
      <div class="ncvvo-no">1</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2024 LJETO · Zadatak 17 · 3 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Koje su nultočke funkcije f(x) = x² − 5x + 6?<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ D = 25 − 24 = 1. x = (5 ± 1)/2. x₁ = 2, x₂ = 3. Provjera Vièteom: 2+3 = 5 = −(−5)/1 ✓, 2·3 = 6 ✓.</span></div>
      </div>
    </div>
    <div class="ncvvo-item">
      <div class="ncvvo-no">2</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2023 LJETO · Zadatak 18 · 4 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Koordinate tjemena f(x) = 2x² − 8x + 5?<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ a = 2, b = −8, c = 5. p = −b/2a = 8/4 = 2. q = f(2) = 8 − 16 + 5 = −3. <strong>V = (2, −3)</strong>.</span></div>
      </div>
    </div>
    <div class="ncvvo-item">
      <div class="ncvvo-no">3</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2022 LJETO · Zadatak 20 · 5 bodova</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Za koje vrijednosti parametra m kvadratna jednadžba x² + mx + 4 = 0 ima dvostruku nultočku?<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2):line-height:1.7">→ Dvostruka ⇔ D = 0 → m² − 16 = 0 → m² = 16 → <strong>m = ±4</strong>.</span></div>
      </div>
    </div>
    <div class="ncvvo-item">
      <div class="ncvvo-no">4</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2021 JESEN · Zadatak 22 · 4 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Riješi nejednadžbu x² − 4 &gt; 0.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ Nultočke: ±2. a = 1 &gt; 0 → parabola otvorena gore, iznad x-osi za x &lt; −2 ili x &gt; 2. Rješenje: <strong>x ∈ (−∞, −2) ∪ (2, +∞)</strong>.</span></div>
      </div>
    </div>
  </div>
  
  <!-- FORMULA DECODER -->
  <div class="fd-wrap">
    <div class="fd-head"><span class="fd-title">🔍 Formula Decoder — klikni na simbol</span></div>
    <div class="fd-body">
      <div class="fd-formula-big">
        <span class="fd-hot" data-sym="0" onclick="decodeSym(this,0)" style="color:var(--cyan)">x</span>&nbsp;=&nbsp;(−<span class="fd-hot" data-sym="1" onclick="decodeSym(this,1)" style="color:var(--amber)">b</span>&nbsp;±&nbsp;√<span class="fd-hot" data-sym="2" onclick="decodeSym(this,2)" style="color:var(--pink)">D</span>)&nbsp;/&nbsp;(2<span class="fd-hot" data-sym="3" onclick="decodeSym(this,3)" style="color:var(--green)">a</span>)
      </div>
      <div class="fd-symbols">
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),0,this)"><span class="fd-sym-letter" style="color:var(--cyan)">x</span><span class="fd-sym-name">nultočka</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),1,this)"><span class="fd-sym-letter" style="color:var(--amber)">b</span><span class="fd-sym-name">linearni koef.</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),2,this)"><span class="fd-sym-letter" style="color:var(--pink)">D</span><span class="fd-sym-name">diskriminanta</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),3,this)"><span class="fd-sym-letter" style="color:var(--green)">a</span><span class="fd-sym-name">vodeći koef.</span></div>
      </div>
      <div class="fd-explain" id="fd-exp">👆 Klikni bilo koji simbol (u formuli ili ispod) da vidiš njegovo značenje.</div>
    </div>
  </div>
  
  <!-- FORMULA CARD -->
  <div class="fcard-wrap">
    <div class="fcard-head"><span class="fcard-title">⚙ Sve formule kvadratne funkcije</span></div>
    <div class="fcard-body">
      <div class="fcard-item">
        <div class="fcard-formula">f(x) = ax² + bx + c</div>
        <div class="fcard-desc"><strong>Opći oblik</strong> (a ≠ 0).</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">f(x) = a(x − p)² + q</div>
        <div class="fcard-desc"><strong>Tjemeni oblik</strong>, V = (p, q).</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">f(x) = a(x − x₁)(x − x₂)</div>
        <div class="fcard-desc"><strong>Faktorizirani</strong> s nultočkama x₁, x₂.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">D = b² − 4ac</div>
        <div class="fcard-desc"><strong>Diskriminanta</strong> — broj nultočaka.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">x = (−b ± √D)/(2a)</div>
        <div class="fcard-desc"><strong>Kvadratna formula</strong> za nultočke.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">V = (−b/2a, −D/4a)</div>
        <div class="fcard-desc"><strong>Tjeme</strong> iz općih koeficijenata.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">x₁ + x₂ = −b/a</div>
        <div class="fcard-desc"><strong>Viète — zbroj</strong> nultočaka.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">x₁ · x₂ = c/a</div>
        <div class="fcard-desc"><strong>Viète — produkt</strong> nultočaka.</div>
      </div>
    </div>
  </div>
</div>
<!-- ═══ PREMIUM GATE 2: MATURSKI TEST GENERATOR ═══ -->
<div class="pg-disc">
  <div class="pg-disc-hd">
    <div class="pg-disc-ico">🎯</div>
    <div style="flex:1;min-width:0">
      <div class="pg-disc-ttl">Discere Simulator <span class="pg-disc-badge">STANDARD</span></div>
      <div class="pg-disc-sub">Pravi ispit uvjeti — tajmer, bodovi, feedback. Vjeruj svojoj pripremi pod pritiskom.</div>
    </div>
  </div>
  <div class="pg-disc-split">
    <div class="pg-disc-col">
      <div class="pg-disc-col-ttl">Samo skripta</div>
      <div class="pg-disc-col-val">📖</div>
      <div class="pg-disc-col-sub">pasivno čitanje</div>
    </div>
    <div class="pg-disc-arrow">→</div>
    <div class="pg-disc-col on">
      <div class="pg-disc-col-ttl">Discere simulacija</div>
      <div class="pg-disc-col-val">⏱ 90:00</div>
      <div class="pg-disc-col-sub">pravi ispit iskustvo</div>
    </div>
  </div>
  <div class="pg-disc-stats">
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">70+</span><span class="pg-disc-stat-l">ispita MAT A+B</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">100%</span><span class="pg-disc-stat-l">feedback</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">9,99€</span><span class="pg-disc-stat-l">/mjesec</span></div>
  </div>
  <button class="pg-disc-cta" onclick="openDiscereModal()">Pokreni simulator →</button>
</div>


<!-- 11: KALKULATOR -->
<div class="sec-head">
  <span class="sec-badge">11 / 12</span>
  <h3 class="sec-h">🧮 Kalkulator kvadratne funkcije — 3 moda</h3>
</div>
<div class="sec-body">
  <p>Tri alata: nultočke + tjeme iz (a,b,c) / tjeme iz (p,q) / nultočke iz faktoriziranog.</p>
  
  <div class="calc-wrap">
    <div class="calc-head">
      <span class="calc-title">// D, nultočke, tjeme — automatski</span>
    </div>
    <div class="calc-tabs" role="tablist">
      <button class="calc-tab on" onclick="p9SwitchMode(0,this)">📐 Opći oblik</button>
      <button class="calc-tab" onclick="p9SwitchMode(1,this)">🎯 Tjemeni oblik</button>
      <button class="calc-tab" onclick="p9SwitchMode(2,this)">✂ Faktorizirani</button>
    </div>
    <div class="calc-body">
      <div id="p9-mode-0">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Unesi a, b, c za f(x) = ax² + bx + c. Dobit ćeš D, nultočke i tjeme.</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <span class="calc-lbl">a =</span>
          <input class="calc-in" id="p9c-a" type="number" value="1" style="width:80px" step="any">
          <span class="calc-lbl">b =</span>
          <input class="calc-in" id="p9c-b" type="number" value="-5" style="width:80px" step="any">
          <span class="calc-lbl">c =</span>
          <input class="calc-in" id="p9c-k" type="number" value="6" style="width:80px" step="any">
          <button class="calc-go" onclick="p9calc()">Izračunaj →</button>
        </div>
      </div>
      <div id="p9-mode-1" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Tjemeni: f(x) = a(x−p)² + q. V = (p, q).</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <span class="calc-lbl">a =</span>
          <input class="calc-in" id="p9cv-a" type="number" value="1" style="width:80px" step="any">
          <span class="calc-lbl">p =</span>
          <input class="calc-in" id="p9cv-q" type="number" value="2" style="width:80px" step="any">
          <span class="calc-lbl">q =</span>
          <input class="calc-in" id="p9cv-k" type="number" value="-1" style="width:80px" step="any">
          <button class="calc-go" onclick="p9calcVertex()">Izračunaj →</button>
        </div>
      </div>
      <div id="p9-mode-2" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Faktorizirani: f(x) = a(x − x₁)(x − x₂).</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <span class="calc-lbl">a =</span>
          <input class="calc-in" id="p9cft-p" type="number" value="1" style="width:80px" step="any">
          <span class="calc-lbl">x₁ =</span>
          <input class="calc-in" id="p9cft-q" type="number" value="2" style="width:80px" step="any">
          <span class="calc-lbl">x₂ =</span>
          <input class="calc-in" id="p9cft-n" type="number" value="3" style="width:80px" step="any">
          <button class="calc-go" onclick="p9calcFromT()">Izračunaj →</button>
        </div>
      </div>
      <div class="calc-result" id="p9c-r"></div>
    </div>
  </div>
</div>

<!-- 12: SR PRIMJERI -->
<div class="sec-head">
  <span class="sec-badge">12 / 12</span>
  <h3 class="sec-h">📚 Detaljno riješeni primjeri (9 komada)</h3>
</div>
<div class="sec-body">
  <p>Klikni "Pokreni" da vidiš korake jedan po jedan.</p>

  <div class="sr" id="sr1">
    <div class="sr-head"><span class="sr-no">Primjer 1 · Nultočke (D &gt; 0)</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Riješi jednadžbu x² − 7x + 12 = 0.</div>
    <button class="sr-try" onclick="tryIt(1)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr1-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> a = 1, b = −7, c = 12. D = b² − 4ac = 49 − 48 = 1.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> x = (7 ± 1)/2.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> x₁ = 4, x₂ = 3. Provjera Vièteom: 4+3 = 7 ✓, 4·3 = 12 ✓.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(1)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(1)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr2">
    <div class="sr-head"><span class="sr-no">Primjer 2 · Dvostruka nultočka (D = 0)</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Za koje m jednadžba x² + 6x + m = 0 ima dvostruku nultočku?</div>
    <button class="sr-try" onclick="tryIt(2)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr2-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Dvostruka ⇔ D = 0. D = 36 − 4m = 0.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> 36 = 4m → m = 9.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> m = 9. (Tada je x² + 6x + 9 = (x+3)² = 0 → x = −3 dvostruka.)</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(2)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(2)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr3">
    <div class="sr-head"><span class="sr-no">Primjer 3 · Tjeme parabole</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Odredi koordinate tjemena parabole f(x) = 2x² − 12x + 7.</div>
    <button class="sr-try" onclick="tryIt(3)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr3-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> a = 2, b = −12, c = 7. p = −b/(2a) = 12/4 = 3.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> q = f(3) = 2·9 − 12·3 + 7 = 18 − 36 + 7 = −11.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> V = (3, −11). (Min jer a &gt; 0.)</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(3)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(3)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr4">
    <div class="sr-head"><span class="sr-no">Primjer 4 · Vièteove formule</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Napiši kvadratnu jednadžbu s nultočkama 5 i −2 (vodeći koef. 1).</div>
    <button class="sr-try" onclick="tryIt(4)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr4-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Viète: x₁+x₂ = 5+(−2) = 3. x₁·x₂ = 5·(−2) = −10.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Za a = 1: x² − (x₁+x₂)x + x₁x₂ = 0.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> <em>x² − 3x − 10 = 0</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(4)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(4)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr5">
    <div class="sr-head"><span class="sr-no">Primjer 5 · Kvadratna nejednadžba</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Riješi nejednadžbu 2x² − 5x − 3 ≥ 0.</div>
    <button class="sr-try" onclick="tryIt(5)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr5-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Nultočke: D = 25 + 24 = 49. x = (5 ± 7)/4. x₁ = −1/2, x₂ = 3.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> a = 2 &gt; 0 → parabola gore, iznad x-osi ZA x &lt; −1/2 ili x &gt; 3.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Znak ≥ → nultočke UKLJUČENE.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> <em>x ∈ (−∞, −1/2] ∪ [3, +∞)</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(5)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(5)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr6">
    <div class="sr-head"><span class="sr-no">Primjer 6 · Optimizacija (max dobit)</span><span class="sr-pts">5 bodova</span></div>
    <div class="sr-q">Dobit D(x) = −2x² + 40x − 150 (x je tisuće prodanih komada). Nađi maks. dobit.</div>
    <button class="sr-try" onclick="tryIt(6)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr6-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> a = −2 &lt; 0 → parabola dolje, max u tjemenu.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> p = −b/(2a) = −40/(−4) = 10 (tisuća komada).</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> q = D(10) = −200 + 400 − 150 = 50.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> Maks. dobit je <em>50</em> jedinica, postiže se pri <em>10 000</em> prodanih komada.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(6)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(6)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr7">
    <div class="sr-head"><span class="sr-no">Primjer 7 · Iz tjemena → opći</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Parabola ima tjeme V = (−1, 4) i prolazi kroz (0, 2). Nađi f(x) u općem obliku.</div>
    <button class="sr-try" onclick="tryIt(7)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr7-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Tjemeni oblik: f(x) = a(x+1)² + 4.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Prolaz kroz (0, 2): 2 = a·1 + 4 → a = −2.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> f(x) = −2(x+1)² + 4 = −2(x² + 2x + 1) + 4 = −2x² − 4x + 2.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> <em>f(x) = −2x² − 4x + 2</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(7)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(7)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr8">
    <div class="sr-head"><span class="sr-no">Primjer 8 · Presjek s pravcem</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Nađi presjeke parabole y = x² − 3x + 2 i pravca y = x − 1.</div>
    <button class="sr-try" onclick="tryIt(8)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr8-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Izjednačimo: x² − 3x + 2 = x − 1 → x² − 4x + 3 = 0.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> D = 16 − 12 = 4. x = (4 ± 2)/2 → x₁ = 1, x₂ = 3.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> y₁ = 1 − 1 = 0. y₂ = 3 − 1 = 2.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> Presjeci: <em>(1, 0)</em> i <em>(3, 2)</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(8)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(8)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr9">
    <div class="sr-head"><span class="sr-no">Primjer 9 · Izraz preko Viètea</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Ako su x₁, x₂ nultočke jednadžbe x² − 6x + 4 = 0, izračunaj x₁² + x₂² BEZ rješavanja jednadžbe.</div>
    <button class="sr-try" onclick="tryIt(9)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr9-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Viète: x₁+x₂ = 6, x₁·x₂ = 4.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Identitet: x₁² + x₂² = (x₁+x₂)² − 2x₁x₂.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> = 6² − 2·4 = 36 − 8 = 28.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> <em>x₁² + x₂² = 28</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(9)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(9)">Reset</button></div>
    </div>
  </div>
<div class="sr" id="sr10"><div class="sr-head"><span class="sr-no">Primjer 10 · Viète — kub zbroja nultočaka</span><span class="sr-pts">5 bodova</span></div><div class="sr-q">Ako su x₁, x₂ nultočke jednadžbe x² − 6x + 4 = 0, izračunaj x₁³ + x₂³ BEZ rješavanja jednadžbe.</div><button class="sr-try" onclick="tryIt(10)">▶ Pokreni</button><div class="sr-steps" id="sr10-steps">
  <div class="sr-step" data-s="1"><strong>Viète</strong>: za x² − 6x + 4 = 0 (a=1): x₁ + x₂ = −b/a = <strong>6</strong>, x₁·x₂ = c/a = <strong>4</strong>.</div>
  <div class="sr-step" data-s="2"><strong>Ključna identiteta</strong>: x₁³ + x₂³ = (x₁ + x₂)³ − 3·x₁·x₂·(x₁ + x₂). Ovo vrijedi uvijek — izvodi se iz binoma (a+b)³.</div>
  <div class="sr-step" data-s="3">Uvrsti poznate sume i produkte: x₁³ + x₂³ = 6³ − 3·4·6 = 216 − 72 = <strong>144</strong>.</div>
  <div class="sr-step" data-s="4"><em>Odgovor: <strong>x₁³ + x₂³ = 144</strong>. Provjera (ako ipak računamo): D=36−16=20, x = (6±√20)/2 = 3±√5. Kub zbroja: (3+√5)³ + (3−√5)³ = 144. Ali važnije: nismo morali rješavati jednadžbu — Viète + identiteta je dovoljno.</em></div>
<div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(10)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(10)">Reset</button></div></div></div>

</div>

<!-- BUG DETECTION -->
<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku — pogrešna diskriminanta</div>
  <div class="bug-body">
    <div class="bug-quote">Student: <em>"Za 2x² − 3x + 1 = 0: D = b² − 4ac = 9 − 4·1 = 5."</em></div>
    <div class="bug-task">D <span class="wrong">= 5</span></div>
    <div class="bug-opts" id="bug1-opts">
      <div class="bug-opt" onclick="bugAns(1, 0, this)">A) Točno — D = 5.</div>
      <div class="bug-opt" onclick="bugAns(1, 1, this)">B) Greška — zaboravljeno a! Točno: D = b² − 4·a·c = (−3)² − 4·<strong>2</strong>·1 = 9 − 8 = 1.</div>
      <div class="bug-opt" onclick="bugAns(1, 2, this)">C) Greška — trebalo bi D = b² + 4ac.</div>
    </div>
    <div class="bug-expl" id="bug1-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #2 — znak u Vièteu</div>
  <div class="bug-body">
    <div class="bug-quote">Student: <em>"Za x² − 5x + 6 = 0 imamo x₁+x₂ = −5."</em></div>
    <div class="bug-task">x₁+x₂ <span class="wrong">= −5</span></div>
    <div class="bug-opts" id="bug2-opts">
      <div class="bug-opt" onclick="bugAns(2, 0, this)">A) Točno — koef. b je −5.</div>
      <div class="bug-opt" onclick="bugAns(2, 1, this)">B) Greška — formula je x₁+x₂ = <strong>−b/a</strong>. Ovdje b = −5, pa −b/a = −(−5)/1 = 5 (ne −5). Nultočke su 2 i 3 (2+3 = 5 ✓).</div>
      <div class="bug-opt" onclick="bugAns(2, 2, this)">C) Greška — x₁+x₂ = b, ne −b/a.</div>
    </div>
    <div class="bug-expl" id="bug2-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #3 — orijentacija parabole u nejednadžbi</div>
  <div class="bug-body">
    <div class="bug-quote">Student rješava −x² + 4 &gt; 0. Nultočke: ±2. Tvrdi: <em>"a = −1 &lt; 0, ali formula kaže 'iznad x-osi' → rješenje x &lt; −2 ili x &gt; 2."</em></div>
    <div class="bug-task">Rješenje: <span class="wrong">x &lt; −2 ili x &gt; 2</span></div>
    <div class="bug-opts" id="bug3-opts">
      <div class="bug-opt" onclick="bugAns(3, 0, this)">A) Točno — uvijek vanjski intervali.</div>
      <div class="bug-opt" onclick="bugAns(3, 1, this)">B) Greška — kad je a &lt; 0, parabola je otvorena DOLJE. "Iznad x-osi" je IZMEĐU nultočaka. Točno rješenje: <strong>−2 &lt; x &lt; 2</strong>. (Skiciraj: vrh parabole je na q = 4 &gt; 0.)</div>
      <div class="bug-opt" onclick="bugAns(3, 2, this)">C) Greška — nejednadžba nema rješenje.</div>
    </div>
    <div class="bug-expl" id="bug3-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #4 — tjeme bez podjele s 2a</div>
  <div class="bug-body">
    <div class="bug-quote">Student za f(x) = 3x² − 12x + 5 piše: <em>"p = −b = 12."</em></div>
    <div class="bug-task">p <span class="wrong">= 12</span></div>
    <div class="bug-opts" id="bug4-opts">
      <div class="bug-opt" onclick="bugAns(4, 0, this)">A) Točno — p = −b.</div>
      <div class="bug-opt" onclick="bugAns(4, 1, this)">B) Greška — formula je p = <strong>−b/(2a)</strong>, ne −b. Ovdje: p = 12/(2·3) = 2. (p = −b vrijedi samo kad je a = 1.)</div>
      <div class="bug-opt" onclick="bugAns(4, 2, this)">C) Greška — p = b/(2a).</div>
    </div>
    <div class="bug-expl" id="bug4-exp"></div>
  </div>
</div>

<!-- MATCH GAME -->
<div class="match-wrap">
  <div class="match-head">
    <span class="match-title">🧩 Spoji pojam ↔ formula</span>
    <span class="match-score">Riješeno: <strong id="match-score">0</strong> / 5</span>
  </div>
  <div class="match-body">
    <div class="match-grid">
      <div class="match-col">
        <div class="match-col-lbl">Pojam</div>
        <button class="match-btn" data-pair="a" data-side="L" onclick="matchClick(this)">Diskriminanta</button>
        <button class="match-btn" data-pair="b" data-side="L" onclick="matchClick(this)">Nultočke</button>
        <button class="match-btn" data-pair="c" data-side="L" onclick="matchClick(this)">Tjeme x-koord.</button>
        <button class="match-btn" data-pair="d" data-side="L" onclick="matchClick(this)">Viète: zbroj</button>
        <button class="match-btn" data-pair="e" data-side="L" onclick="matchClick(this)">Viète: produkt</button>
      </div>
      <div class="match-col">
        <div class="match-col-lbl">Formula</div>
        <button class="match-btn" data-pair="c" data-side="R" onclick="matchClick(this)">−b/(2a)</button>
        <button class="match-btn" data-pair="a" data-side="R" onclick="matchClick(this)">b² − 4ac</button>
        <button class="match-btn" data-pair="e" data-side="R" onclick="matchClick(this)">c/a</button>
        <button class="match-btn" data-pair="b" data-side="R" onclick="matchClick(this)">(−b±√D)/(2a)</button>
        <button class="match-btn" data-pair="d" data-side="R" onclick="matchClick(this)">−b/a</button>
      </div>
    </div>
    <div class="match-reset">
      <button class="match-reset-btn" onclick="matchReset()">↺ Reset</button>
    </div>
  </div>
</div>

<!-- FLASHCARDS -->
<div class="fc-row">
  <span class="fc-h">🧠 Flashcards · 13 pojmova</span>
  <div class="fc-ctrl">
    <button class="fc-all-btn" onclick="fcShuffle()" style="border-color:var(--bd-c);color:var(--cyan)">🔀 Promiješaj</button>
    <button class="fc-all-btn" onclick="flipAllCards()">↺ Okreni sve</button>
  </div>
</div>
<div class="fc-grid">
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">DEF.</div><div class="fc-q">f(x) opći oblik?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>ax² + bx + c</strong><br>(a ≠ 0)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">TJEME</div><div class="fc-q">Tjemeni oblik?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>a(x−p)² + q</strong><br>V = (p, q)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">DISK.</div><div class="fc-q">D = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>b² − 4ac</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">NULT.</div><div class="fc-q">x = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>(−b ± √D)/(2a)</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">TJEME</div><div class="fc-q">p = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>−b/(2a)</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">TJEME</div><div class="fc-q">q = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>−D/(4a)</strong><br>ili f(p)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">VIÈTE</div><div class="fc-q">x₁+x₂ = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>−b/a</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">VIÈTE</div><div class="fc-q">x₁·x₂ = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>c/a</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">GRAF</div><div class="fc-q">a &gt; 0 ⇔ ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>otvorena gore</strong><br>(min u V)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">DISK.</div><div class="fc-q">D = 0 znači?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>1 dvostruka nult.</strong><br>(parabola dodiruje x-os)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">DISK.</div><div class="fc-q">D &lt; 0 znači?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>nema realnih</strong><br>(ne siječe x-os)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">FAKT.</div><div class="fc-q">Faktorizirani?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>a(x−x₁)(x−x₂)</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">OS</div><div class="fc-q">Os simetrije?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>x = −b/(2a)</strong><br>(vertikalni pravac)</div></div></div></div>
</div>




<div class="nav-row">
  <button class="nb" onclick="showSec(0, document.querySelector('.tab:nth-child(1)'))">← ⚡ 2 min</button>
  <button class="nb primary" onclick="showSec(2, document.querySelector('.tab:nth-child(3)'))">🧠 Vježbaj →</button>
</div>

</section>

<section id="l2" class="sec" role="tabpanel">

<div class="l2-overview">
  <div class="l2-overview-h">🎯 Vježbaj — sve na jednom mjestu</div>
  <div class="l2-overview-grid">
    <a class="l2-overview-card" href="#gon-anchor" onclick="l2Jump('gon-anchor', event)">
      <span class="l2-ov-ico">✓✗</span>
      <div class="l2-ov-t">Točno-netočno</div>
      <div class="l2-ov-c">28 pitanja · brzi warm-up</div>
    </a>
    <a class="l2-overview-card" href="#drill-anchor" onclick="l2Jump('drill-anchor', event)">
      <span class="l2-ov-ico">🎯</span>
      <div class="l2-ov-t">Drill (MC)</div>
      <div class="l2-ov-c">28 pitanja · easy/med/hard filter</div>
    </a>
    <a class="l2-overview-card" href="#timer-anchor" onclick="l2Jump('timer-anchor', event)">
      <span class="l2-ov-ico">⏱</span>
      <div class="l2-ov-t">Timer + Kviz</div>
      <div class="l2-ov-c">8 pitanja · simulacija mature</div>
    </a>
    <a class="l2-overview-card" href="#cp-anchor" onclick="l2Jump('cp-anchor', event)">
      <span class="l2-ov-ico">📋</span>
      <div class="l2-ov-t">Checkpoint</div>
      <div class="l2-ov-c">6 ciljeva · sam-procjena znanja</div>
    </a>
  </div>
</div>

<div id="gon-anchor"></div>

<div class="gon-wrap">
  <div class="gon-head">
    <span class="gon-title">✓ / ✗ Točno-netočno (28 pitanja)</span>
    <span class="gon-score" aria-live="polite" aria-atomic="true"><strong id="gon-s">0</strong>/<strong id="gon-t">28</strong></span>
  
    <button class="gon-toggle" id="gon-toggle-btn" onclick="toggleGon()" aria-label="Sakrij ili pokaži GON pitanja"><span class="gt-ico">▼</span><span class="gt-lbl">Sakrij</span></button>
  </div>
  <div class="gon-prog"><div class="gon-prog-fill" id="gon-prog"></div></div>
  <div id="gon-body"></div>
</div>

<div id="drill-anchor"></div>
<div class="drill-wrap">
  <div class="drill-head">
    <span class="drill-title">🎯 Drill · 28 MC pitanja</span>
    <span class="drill-score" aria-live="polite" aria-atomic="true"><strong id="dr-s">0</strong>/<strong id="dr-t">0</strong></span>
  </div>
  
  <div class="dr-filters">
    <button class="dr-filter on" onclick="drFilter('all',this)">Sve</button>
    <button class="dr-filter" onclick="drFilter('easy',this)">Lako</button>
    <button class="dr-filter" onclick="drFilter('med',this)">Srednje</button>
    <button class="dr-filter" onclick="drFilter('hard',this)">Teško</button>
    <button class="dr-filter" onclick="drFilter('fav',this)">★ Favoriti</button>
  </div>
  
  <div class="drill-prog"><div class="drill-prog-fill" id="dr-prog"></div></div>
  <div class="drill-no" id="dr-no">Pitanje 1</div>
  <div class="drill-q" id="dr-q">—</div>
  <div class="drill-opts" id="dr-opts"></div>
  <div class="dr-hint" id="dr-hint"><strong>💡 Hint:</strong> <span id="dr-hint-t"></span></div>
  <div class="drill-fb" id="dr-fb"></div>
  <div class="drill-ctrl">
    <div class="drill-streak">🔥 Streak: <span id="dr-streak">0</span></div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
      <button class="dr-hint-btn" id="dr-hint-btn" onclick="drShowHint()">💡 Hint</button>
      <button class="drill-next" id="dr-next" onclick="drNext()">Sljedeće →</button>
      <button class="dr-fav-btn" id="dr-fav" onclick="drToggleFav()" aria-label="Favorit">☆</button>
    </div>
  </div>
</div>

<div class="fav-panel" id="fav-panel">
  <div class="fav-h">
    <span>⭐ Moji favoriti</span>
    <button class="fav-item-go" onclick="document.getElementById('fav-panel').classList.remove('show')">zatvori</button>
  </div>
  <div id="fav-body"><div class="fav-empty">Nemaš favorita. Dodaj pitanje klikom na ☆ u drill panelu.</div></div>
</div>

<div id="timer-anchor"></div>
<div class="timer-section-head"><span class="timer-section-title">⏱ 7 min simulacija</span><button class="timer-toggle" id="timer-toggle-btn" onclick="toggleTimer()" aria-label="Sakrij ili pokaži simulaciju"><span class="tt-ico">▼</span><span class="tt-lbl">Sakrij</span></button></div>
<div id="timer-quiz-body">
<div class="timer-wrap">
  <div class="timer-head">
    <span class="timer-title">⏱ Timer · 10 min simulacija</span>
    <div class="timer-ctrl">
      <span class="timer-display" id="timer-d" aria-live="polite">10:00</span>
      <button class="timer-btn" id="timer-b" onclick="timerToggle()">▶ Start</button>
    </div>
  </div>
  <div class="timer-info">Pokreni timer → kviz se otključava. Simuliraj pravi rad pod pritiskom. <strong>10 minuta za 8 pitanja.</strong></div>
</div>

<div class="quiz-wrap locked" id="quiz-wrap">
  <div class="quiz-head">
    <span class="quiz-title">🧠 Kviz · 8 pitanja · 8 bodova</span>
    <div style="display:flex;align-items:center;gap:4px">
      <span class="quiz-count"><span id="qz-done">0</span> / 8 riješeno</span>
      <span class="streak-badge zero" id="quiz-streak" aria-live="polite"><span class="sb-ico">🔥</span>Niz: <strong id="quiz-streak-n">0</strong></span>
    </div>
  </div>
  <div id="quiz-body"></div>
  <button class="quiz-go" id="quiz-go" onclick="qa()" disabled>Provjeri rezultat</button>
  <div class="score-box" id="score-box" aria-live="polite">
    <div class="score-num" id="score-n">0</div>
    <div class="score-pct" id="score-p">0%</div>
    <div class="score-msg" id="score-m">—</div>
    <div class="score-breakdown" id="score-bd"></div>
    <div class="score-actions">
      <button class="score-btn" onclick="startRetryMode()">Retry promašene</button>
      <button class="score-btn" onclick="quizReset()">↺ Ispočetka</button>
    </div>
  </div>
</div>
</div>

<div id="cp-anchor"></div>
<div class="cp-wrap">
  <div class="cp-title">📋 Checkpoint · znaš li sve?</div>
  <div class="cp-list" id="cp-list">
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Prepoznajem i prelazim između općeg, tjemenog i faktoriziranog oblika</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Računam diskriminantu D = b² − 4ac i interpretiram njezin znak</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Nalazim nultočke kvadratnom formulom x = (−b±√D)/(2a)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Određujem tjeme V = (−b/2a, −D/4a) i os simetrije</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Primjenjujem Vièteove formule za provjeru i rekonstrukciju</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Rješavam kvadratne nejednadžbe skiciranjem parabole</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Rješavam optimizacijske zadatke (maks. dobit, min. površina)</div></div>
  
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Skiciram parabolu na temelju a, tjemena i nultočaka</div></div>
  </div>
<!-- ═══ PREMIUM GATE 3: AI PLAN UČENJA ═══ -->
<div class="pg-plan">
  <div class="pg-plan-hd">
    <div class="pg-plan-ico">📅</div>
    <div style="flex:1;min-width:0">
      <div class="pg-plan-ttl">AI Plan učenja <span class="pg-plan-note">PRO · personalizirano</span></div>
      <div class="pg-plan-sub">Završio ovo poglavlje? AI ti kaže što učiti sljedeće — prema tvom ritmu, rokovima i slabim točkama.</div>
    </div>
    <div class="pg-plan-ring" aria-hidden="true">
      <svg width="48" height="48"><circle cx="24" cy="24" r="18" fill="none" stroke="rgba(167,139,250,0.15)" stroke-width="4"/><circle cx="24" cy="24" r="18" fill="none" stroke="#A78BFA" stroke-width="4" stroke-dasharray="113" stroke-dashoffset="45" stroke-linecap="round"/></svg>
      <div class="pg-plan-ring-txt">60%</div>
    </div>
  </div>
  <div class="pg-plan-cal" aria-hidden="true">
    <div class="pg-plan-day done">P</div><div class="pg-plan-day done">U</div><div class="pg-plan-day done">S</div><div class="pg-plan-day today">Č</div><div class="pg-plan-day f">P</div><div class="pg-plan-day f">S</div><div class="pg-plan-day">N</div>
    <div class="pg-plan-day f">P</div><div class="pg-plan-day f">U</div><div class="pg-plan-day f">S</div><div class="pg-plan-day f">Č</div><div class="pg-plan-day f">P</div><div class="pg-plan-day">S</div><div class="pg-plan-day">N</div>
    <div class="pg-plan-day">P</div><div class="pg-plan-day">U</div><div class="pg-plan-day">S</div><div class="pg-plan-day">Č</div><div class="pg-plan-day">P</div><div class="pg-plan-day">S</div><div class="pg-plan-day">N</div>
  </div>
  <button class="pg-plan-cta" onclick="openPaywall('plan')">🎯 Kreiraj moj plan →</button>
</div>

  <div class="cp-msg-hint" id="cp-msg-hint">Označi sve što znaš. Kad budu svi — dobivaš Master achievement.</div>
  <div class="cp-ready" id="cp-ready">🏆 Spreman/na si za P10! Idemo dalje.</div>
</div>

<div class="discere-cta">
  <div class="discere-h">🎓 Želiš dublju razinu?</div>
  <div class="discere-t">Eksp. i log. su nezaobilazni: rast, raspad, kamate, populacija, pH, decibeli. Za dublje razumijevanje i AI tutora koji te vodi kroz složene primjere — <strong>Discere</strong>.</div>
  <a href="#" onclick="window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/discere'},'*'); return false;" class="discere-btn">Pogledaj program →</a>
</div>

<div class="cn-wrap">
  <div class="cn-title">→ Nastavi učenje</div>
  <div class="cn-grid">
    <div class="cn-card" onclick="navigateChapter('p10')" style="cursor:pointer">
      <div class="cn-h">Sljedeće · P10</div>
      <div class="cn-t">Eksp. i log. funkcija</div>
      <div class="cn-s">~45 min · aˣ, log_a x</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p08')" style="cursor:pointer">
      <div class="cn-h">Prethodno · P08</div>
      <div class="cn-t">Linearna funkcija</div>
      <div class="cn-s">f(x) = kx+l, pravac</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p06')" style="cursor:pointer">
      <div class="cn-h">Povezano · P06</div>
      <div class="cn-t">Kvadratne jednadžbe</div>
      <div class="cn-s">rješavanje, Viète</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p16')" style="cursor:pointer">
      <div class="cn-h">Primjena · P15</div>
      <div class="cn-t">Nizovi</div>
      <div class="cn-s">kvadratni nizovi</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <button class="nb" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">← 📐 Uči</button>
  <button class="nb primary" onclick="navigateChapter('p10')">10 · Eksp. i log. funkcija →</button>
</div>

</section>


</div></main></div>

<script>
function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}

var quizStreak = 0;


function toggleTimer() {
  var body = document.getElementById('timer-quiz-body');
  var btn  = document.getElementById('timer-toggle-btn');
  if (!body || !btn) return;
  var collapsed = body.classList.toggle('timer-collapsed');
  btn.classList.toggle('collapsed', collapsed);
  btn.querySelector('.tt-lbl').textContent = collapsed ? 'Pokaži' : 'Sakrij';
  try { localStorage.setItem(LS_KEY + '_timerCollapsed', collapsed ? '1' : '0'); } catch(e) {}
}


function toggleGon() {
  var body = document.getElementById('gon-body');
  var btn  = document.getElementById('gon-toggle-btn');
  if (!body || !btn) return;
  var collapsed = body.classList.toggle('gon-collapsed');
  btn.classList.toggle('collapsed', collapsed);
  btn.querySelector('.gt-lbl').textContent = collapsed ? 'Pokaži' : 'Sakrij';
  try { localStorage.setItem(LS_KEY + '_gonCollapsed', collapsed ? '1' : '0'); } catch(e) {}
}

const GON_DATA = [
  {
    "q": "Kvadratna funkcija ima oblik f(x) = ax² + bx + c.",
    "a": true,
    "e": "Opći oblik."
  },
  {
    "q": "Ako a = 0, funkcija f(x) = ax² + bx + c je kvadratna.",
    "a": false,
    "e": "a ≠ 0 je nužno; za a = 0 je linearna."
  },
  {
    "q": "Tjemeni oblik je f(x) = a(x − p)² + q.",
    "a": true,
    "e": "Tjeme V = (p, q)."
  },
  {
    "q": "Faktorizirani oblik je f(x) = a(x − x₁)(x − x₂).",
    "a": true,
    "e": "Iz njega direktno čitamo nultočke x₁, x₂."
  },
  {
    "q": "Iz faktoriziranog oblika nultočke čitamo kao x₁ = x₂ = 0.",
    "a": false,
    "e": "Nultočke su one vrijednosti za koje se zagrade ponište — x = x₁ ili x = x₂, ne 0."
  },
  {
    "q": "Graf kvadratne funkcije je parabola.",
    "a": true,
    "e": "Uvijek."
  },
  {
    "q": "Ako a > 0, parabola je otvorena prema gore.",
    "a": true,
    "e": "Minimum u tjemenu."
  },
  {
    "q": "Ako a < 0, parabola ima minimum u tjemenu.",
    "a": false,
    "e": "Za a < 0 otvorena dolje → tjeme je MAKSIMUM."
  },
  {
    "q": "Koeficijent c je y-presjek parabole.",
    "a": true,
    "e": "f(0) = c."
  },
  {
    "q": "Os simetrije parabole prolazi kroz tjeme.",
    "a": true,
    "e": "Okomita os kroz V; jednadžba x = −b/(2a)."
  },
  {
    "q": "Diskriminanta je D = b² − 4ac.",
    "a": true,
    "e": "Definicija."
  },
  {
    "q": "Ako D > 0, kvadratna jednadžba ima dvije različite nultočke.",
    "a": true,
    "e": "Parabola siječe x-os u dvije točke."
  },
  {
    "q": "Ako D = 0, kvadratna jednadžba ima dvostruku nultočku.",
    "a": true,
    "e": "Parabola dodiruje x-os u tjemenu."
  },
  {
    "q": "Ako D < 0, kvadratna jednadžba ima dvije realne nultočke.",
    "a": false,
    "e": "D < 0 → NEMA realnih nultočaka."
  },
  {
    "q": "Formula za nultočke je x = (−b ± √D)/(2a).",
    "a": true,
    "e": "Kvadratna formula."
  },
  {
    "q": "Diskriminanta može biti negativna.",
    "a": true,
    "e": "D = b² − 4ac može biti < 0, npr. za x² + 1 = 0: D = −4."
  },
  {
    "q": "x-koordinata tjemena je p = −b/(2a).",
    "a": true,
    "e": "Leži na osi simetrije."
  },
  {
    "q": "y-koordinata tjemena je q = f(p).",
    "a": true,
    "e": "Ekvivalentno: q = −D/(4a)."
  },
  {
    "q": "Za f(x) = x² − 4x + 3 tjeme je u V = (2, −1).",
    "a": true,
    "e": "p = 4/2 = 2, q = f(2) = 4 − 8 + 3 = −1."
  },
  {
    "q": "Vièteove formule vrijede x₁+x₂ = b/a.",
    "a": false,
    "e": "Točno: x₁+x₂ = −b/a (znak minus!)."
  },
  {
    "q": "Vièteova formula za produkt: x₁·x₂ = c/a.",
    "a": true,
    "e": "Iz faktoriziranog oblika."
  },
  {
    "q": "Ako je a = 1, Viète: x₁+x₂ = −b, x₁·x₂ = c.",
    "a": true,
    "e": "Specijalni slučaj."
  },
  {
    "q": "Vièteove formule vrijede samo za realne nultočke.",
    "a": false,
    "e": "Vrijede i za kompleksne (ali to je van srednjoškolskog programa)."
  },
  {
    "q": "Za rješavanje ax² + bx + c > 0 koristi se skica parabole.",
    "a": true,
    "e": "Intervali gdje je parabola iznad x-osi."
  },
  {
    "q": "Ako a > 0 i D < 0, ax² + bx + c > 0 vrijedi za SVE x.",
    "a": true,
    "e": "Parabola cijela iznad x-osi."
  },
  {
    "q": "Maks. dobit postiže se u tjemenu kvadratne funkcije (a < 0).",
    "a": true,
    "e": "Tjeme = max."
  },
  {
    "q": "U hicu visina h(t) = h₀ + v₀t − (g/2)t² je linearna funkcija.",
    "a": false,
    "e": "Zbog t² je KVADRATNA funkcija od t."
  },
  {
    "q": "Kod nejednadžbe x² − 9 ≤ 0, rješenje je −3 ≤ x ≤ 3.",
    "a": true,
    "e": "Nultočke ±3, a > 0, parabola ispod x-osi između."
  }
];
const DRILL_DATA = [
  {
    "q": "Za f(x) = x² − 4x + 3, koliko je c?",
    "opts": [
      "3",
      "1",
      "−4",
      "0"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "c = konstantni član = 3."
  },
  {
    "q": "D za x² − 6x + 9?",
    "opts": [
      "0",
      "18",
      "36",
      "9"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "D = 36 − 36 = 0."
  },
  {
    "q": "Koliko nultočaka ako D = 0?",
    "opts": [
      "0",
      "2",
      "1",
      "3"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "Dvostruka nultočka."
  },
  {
    "q": "Vodeći koef. za f(x) = 3x² + 2x + 1?",
    "opts": [
      "1",
      "2",
      "6",
      "3"
    ],
    "ok": 3,
    "diff": "easy",
    "exp": "a = 3 (pred x²)."
  },
  {
    "q": "Os simetrije za f(x) = x² − 6x + 5?",
    "opts": [
      "x = 3",
      "x = −3",
      "x = 5",
      "x = 0"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "x = −b/(2a) = 6/2 = 3."
  },
  {
    "q": "Parabola je otvorena dolje ako...",
    "opts": [
      "a = 0",
      "a < 0",
      "a > 0",
      "c < 0"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "a < 0 → otvorena dolje."
  },
  {
    "q": "Nultočke x² − 1 = 0?",
    "opts": [
      "0 i 1",
      "−1",
      "±1",
      "1"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "x² = 1 → x = ±1."
  },
  {
    "q": "Viète za x² − 5x + 6: x₁+x₂?",
    "opts": [
      "−5",
      "6",
      "5",
      "−6"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "−b/a = 5/1 = 5."
  },
  {
    "q": "Viète: x₁·x₂ za x² − 5x + 6?",
    "opts": [
      "−6",
      "6",
      "5",
      "−5"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "c/a = 6/1 = 6."
  },
  {
    "q": "y-presjek parabole f(x) = 2x² − 3x + 4?",
    "opts": [
      "4",
      "2",
      "−3",
      "0"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "f(0) = c = 4."
  },
  {
    "q": "Nultočke x² + 2x − 8 = 0?",
    "opts": [
      "−2 i 4",
      "2 i −4",
      "−2 i −4",
      "2 i 4"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "D = 4+32 = 36. x = (−2 ± 6)/2 → 2 i −4."
  },
  {
    "q": "Tjeme f(x) = x² − 4x + 3?",
    "opts": [
      "(2, 1)",
      "(−2, 7)",
      "(−2, −1)",
      "(2, −1)"
    ],
    "ok": 3,
    "diff": "med",
    "exp": "p = 2, q = f(2) = 4−8+3 = −1."
  },
  {
    "q": "Za koje m x² + 4x + m = 0 ima D = 0?",
    "opts": [
      "m = 2",
      "m = −4",
      "m = 0",
      "m = 4"
    ],
    "ok": 3,
    "diff": "med",
    "exp": "D = 16 − 4m = 0 → m = 4."
  },
  {
    "q": "Rješenje x² − 4 > 0?",
    "opts": [
      "−2<x<2",
      "x∈ℝ",
      "x=±2",
      "x<−2 ili x>2"
    ],
    "ok": 3,
    "diff": "med",
    "exp": "Parabola gore, iznad x-osi vani od nultočaka."
  },
  {
    "q": "Max vrijednost f(x) = −x² + 6x?",
    "opts": [
      "9",
      "0",
      "6",
      "12"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "p = 3, q = f(3) = −9+18 = 9."
  },
  {
    "q": "Parabola y = ax² prolazi kroz (2, 8). Koliko je a?",
    "opts": [
      "1",
      "4",
      "2",
      "8"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "8 = 4a → a = 2."
  },
  {
    "q": "Ako x₁ = 3 i x₂ = −2, kvadratna s a = 1?",
    "opts": [
      "x²+x−6",
      "x²+x+6",
      "x²−x−6",
      "x²−x+6"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "Viète: x₁+x₂=1, x₁·x₂=−6. x²−1x−6 = x²−x−6."
  },
  {
    "q": "Za f(x) = 2(x−3)² − 5, koje je tjeme?",
    "opts": [
      "(−3, 5)",
      "(3, −5)",
      "(3, 5)",
      "(−3, −5)"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "V = (p, q) = (3, −5)."
  },
  {
    "q": "Za x² − 7x + 10 = 0: x₁² + x₂²?",
    "opts": [
      "49",
      "19",
      "9",
      "29"
    ],
    "ok": 3,
    "diff": "med",
    "exp": "(x₁+x₂)² − 2x₁x₂ = 49 − 20 = 29."
  },
  {
    "q": "Presjek y = x² i y = x?",
    "opts": [
      "samo (0,0)",
      "(0,0) i (1,1)",
      "(1,1) i (−1,−1)",
      "(0,1)"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "x² = x → x²−x = 0 → x(x−1)=0 → x=0 ili 1. Točke: (0,0), (1,1)."
  },
  {
    "q": "Za koje k jednadžba x² − kx + 4 = 0 ima dvije različite realne nultočke?",
    "opts": [
      "k∈ℝ",
      "|k|<4",
      "|k|>4",
      "k=±4"
    ],
    "ok": 2,
    "diff": "hard",
    "exp": "D > 0: k² − 16 > 0 → |k| > 4."
  },
  {
    "q": "Nultočke 2x² − 7x + 3?",
    "opts": [
      "1/2 i 3",
      "−1/2 i 3",
      "1/2 i −3",
      "3/2 i 1"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "D = 49 − 24 = 25. x = (7 ± 5)/4 → 3 i 1/2."
  },
  {
    "q": "Za f(x) = −x²+6x+7, max f?",
    "opts": [
      "7",
      "16",
      "9",
      "25"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "p = 3, q = f(3) = −9+18+7 = 16."
  },
  {
    "q": "Ako tjeme je (2, 3) i a = −1, f(x)?",
    "opts": [
      "−(x+2)²+3",
      "(x−2)²−3",
      "−(x−2)²−3",
      "−(x−2)²+3"
    ],
    "ok": 3,
    "diff": "hard",
    "exp": "a(x−p)²+q = −(x−2)²+3."
  },
  {
    "q": "Rješenje −x²+6x−8 ≥ 0?",
    "opts": [
      "x≤2 ili x≥4",
      "x<2 ili x>4",
      "2≤x≤4",
      "nema rj."
    ],
    "ok": 2,
    "diff": "hard",
    "exp": "Nultočke 2 i 4. a<0, parabola dolje, iznad x-osi IZMEĐU. Znak ≥ → uključene."
  },
  {
    "q": "Za x² + px + 9 = 0, za koje p rješenja su realna i jednaka?",
    "opts": [
      "p = 0",
      "p = ±6",
      "p = ±3",
      "p = 9"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "D = 0: p² − 36 = 0 → p = ±6."
  },
  {
    "q": "Pravokutnik ima opseg 20. Dimenzije za max površinu?",
    "opts": [
      "4×6",
      "3×7",
      "2×8",
      "5×5"
    ],
    "ok": 3,
    "diff": "hard",
    "exp": "P(x) = x(10−x) = −x²+10x. Max u p = 5 → 5×5."
  },
  {
    "q": "Za koje vrijednosti m pravac y = mx−1 dodiruje parabolu y = x²+3?",
    "opts": [
      "m = ±4",
      "m = ±2",
      "m = 2 ili 4",
      "m = 0"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "x²+3 = mx−1 → x² − mx + 4 = 0. Dodir: D = 0 → m² = 16 → m = ±4."
  }
];
const QUIZ_DATA = [
  {
    "q": "Koje su nultočke funkcije f(x) = x² + x − 6?",
    "opts": [
      "x = −2 i x = 3",
      "x = 2 i x = −3",
      "x = 1 i x = −6",
      "nema realnih"
    ],
    "ok": 1,
    "e": "D = 1 + 24 = 25. x = (−1 ± 5)/2 → x₁ = 2, x₂ = −3."
  },
  {
    "q": "Tjeme parabole f(x) = x² − 10x + 21?",
    "opts": [
      "(5, 4)",
      "(−5, 4)",
      "(10, 21)",
      "(5, −4)"
    ],
    "ok": 3,
    "e": "p = 10/2 = 5. q = f(5) = 25 − 50 + 21 = −4. V = (5, −4)."
  },
  {
    "q": "Za koje m x² − 6x + m = 0 ima dvostruku nultočku?",
    "opts": [
      "m = 9",
      "m = 3",
      "m = −9",
      "m = 6"
    ],
    "ok": 0,
    "e": "D = 0: 36 − 4m = 0 → m = 9."
  },
  {
    "q": "Za x² − 4x + k = 0 imamo x₁² + x₂² = 10. Koliko je k?",
    "opts": [
      "4",
      "6",
      "3",
      "5"
    ],
    "ok": 2,
    "e": "Viète: x₁+x₂ = 4, x₁·x₂ = k. x₁²+x₂² = (x₁+x₂)² − 2x₁x₂ = 16 − 2k = 10 → k = 3."
  },
  {
    "q": "Rješenje nejednadžbe x² − x − 6 < 0?",
    "opts": [
      "x ∈ (−2, 3)",
      "x < −2 ili x > 3",
      "x ∈ [−2, 3]",
      "nema rj."
    ],
    "ok": 0,
    "e": "Nultočke: x = (1±5)/2 → −2 i 3. a > 0, parabola gore, < 0 ISPOD x-osi → između nultočaka."
  },
  {
    "q": "Koliku maksimalnu površinu može imati pravokutnik opsega 40?",
    "opts": [
      "80",
      "64",
      "400",
      "100"
    ],
    "ok": 3,
    "e": "x + y = 20 → y = 20−x. P = x(20−x) = −x² + 20x. Max u x = 10 → P = 100."
  },
  {
    "q": "Ako tjeme parabole je (−1, 5) i a = 2, opći oblik je?",
    "opts": [
      "2x² − 4x + 7",
      "2x² + 4x + 5",
      "2x² + 4x + 7",
      "−2x² + 4x + 7"
    ],
    "ok": 2,
    "e": "f = 2(x+1)² + 5 = 2(x² + 2x + 1) + 5 = 2x² + 4x + 7."
  },
  {
    "q": "Za f(x) = ax² + bx + c, koji uvjet garantira da parabola uvijek leži IZNAD x-osi?",
    "opts": [
      "a < 0 i D > 0",
      "a > 0 i D < 0",
      "a > 0 i D > 0",
      "samo c > 0"
    ],
    "ok": 1,
    "e": "a > 0 (otvorena gore) + D < 0 (ne siječe x-os) → cijela iznad. c > 0 nije dovoljno."
  }
];
const PBX_CH_DATA = [{"q": "Postavi parabolu tako da bude f(x) = x²", "check": {"a": 1, "b": 0, "c": 0, "tol": 0.15}}, {"q": "Postavi parabolu s tjemenom u točki (0, −5)", "check": {"type": "vertex", "p": 0, "q": -5, "tol": 0.3}}, {"q": "Postavi parabolu koja ima nultočke −2 i 2", "check": {"type": "roots", "roots": [-2, 2], "tol": 0.3}}, {"q": "Postavi parabolu otvorenu prema dolje s y-odsječkom 4", "check": {"type": "complex", "aneg": true, "c": 4, "tol": 0.4}}, {"q": "Postavi parabolu f(x) = (x − 3)² − 1 (tjeme u T(3, −1))", "check": {"type": "vertex", "p": 3, "q": -1, "tol": 0.3}}, {"q": "Postavi parabolu koja nema realnih nultočaka (D &lt; 0)", "check": {"type": "D", "sign": "neg"}}, {"q": "Postavi parabolu s dvostrukom nultočkom u x = 2 (D = 0)", "check": {"type": "double", "x": 2, "tol": 0.3}}, {"q": "Postavi parabolu f(x) = −2x² + 4 (max = 4)", "check": {"a": -2, "b": 0, "c": 4, "tol": 0.25}}, {"q": "Simuliraj projektil: tjeme u (3, 9), otvorena dolje", "check": {"type": "vertex", "p": 3, "q": 9, "aneg": true, "tol": 0.4}}, {"q": "Postavi funkciju f(x) = x² − 6x + 5 (nultočke 1 i 5)", "check": {"a": 1, "b": -6, "c": 5, "tol": 0.25}}, {"q": "Postavi parabolu koja siječe x-os u 0 i 4", "check": {"type": "roots", "roots": [0, 4], "tol": 0.3}}, {"q": "Postavi parabolu f(x) = 0.5x² − 2x (tjeme u (2, −2))", "check": {"a": 0.5, "b": -2, "c": 0, "tol": 0.25}}];
const DRILL_HINTS = [
  "Opći oblik je ax²+bx+c.",
  "Ako nema x², nije kvadratna.",
  "(p,q) = tjeme.",
  "Nultočke su u zagradama.",
  "Nultočke iz (x−x₁)(x−x₂).",
  "Graf je uvijek parabola.",
  "a>0 → otvorena gore.",
  "a<0 → max u tjemenu, ne min.",
  "f(0) = c.",
  "Os ide kroz vrh parabole.",
  "D = b² − 4ac.",
  "D > 0 → dvije nultočke.",
  "D = 0 → dodir.",
  "D < 0 → ne siječe.",
  "Uvijek (−b ± √D)/(2a).",
  "Da, za kompleksne rješenja.",
  "p = −b/2a.",
  "q = f(p).",
  "p=2, q=f(2).",
  "Znak minus!",
  "c/a = produkt.",
  "Za a=1 pojednostavljeno.",
  "Vrijede i za kompleksne.",
  "Skiciraj parabolu.",
  "Cijela parabola iznad x-osi.",
  "Max u tjemenu kad a<0.",
  "Zbog t² je kvadratna.",
  "Intervali −3 do 3."
];

// P09 JS Part 1 — core, toast, tabs, progress, achievements, Parabola Explorer
const LS_KEY = 'matb_p09';
const FAV_KEY = 'matb_p09_favs';
const ACH_KEY = 'matb_p09_ach';

// ─── SCROLL + LS ───────────────────────────────────────────────
let scrollTimer;
window.addEventListener('scroll', () => {
  if (scrollTimer) clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    try {
      const y = window.scrollY;
      const d = lsLoad();
      d.scrollY = y;
      lsSave(d);
    } catch(e) {}
  }, 300);
});

function lsLoad() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '{}'); }
  catch(e) { return {}; }
}
function lsSave(d) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(d)); } catch(e) {}
}
function lsUpdate(k, v) {
  const d = lsLoad();
  d[k] = v;
  lsSave(d);
}

// ─── TOAST ──────────────────────────────────────────────────────
function toast(msg, level, dur) {
  level = level || 'info';
  dur = dur || 2800;
  const wrap = document.getElementById('toast-wrap');
  if (!wrap) return;
  const icons = { ok: '✅', warn: '⚠', info: '💡', ach: '🏆' };
  const t = document.createElement('div');
  t.className = 'toast ' + level;
  t.innerHTML = '<span class="toast-ico">' + (icons[level]||'💡') + '</span><span class="toast-msg">' + msg + '</span>';
  wrap.appendChild(t);
  setTimeout(() => {
    t.classList.add('out');
    setTimeout(() => t.remove(), 250);
  }, dur);
}

// ─── TABS ───────────────────────────────────────────────────────
function showSec(i, btn) {
  document.querySelectorAll('.sec').forEach(s => s.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
  const sec = document.getElementById('l' + i);
  if (sec) sec.classList.add('on');
  if (btn) btn.classList.add('on');
  if (!btn) {
    const topTab = document.querySelectorAll('.tabs .tab')[i];
    if (topTab) topTab.classList.add('on');
  }
  document.querySelectorAll('.bn-tab').forEach(b => b.classList.remove('on'));
  const bnt = document.querySelector('.bn-tab[data-tab="' + i + '"]');
  if (bnt) bnt.classList.add('on');
  try {
    sessionStorage.setItem(LS_KEY + '_tab', String(i));
    lsUpdate('lastTab', i);
  } catch(e) {}
  // Scroll to tabs (ne na top — da se izbjegne prazni "crni" prostor iznad)
  const tabsEl = document.querySelector('.tabs');
  if (tabsEl) {
    const offsetTop = tabsEl.getBoundingClientRect().top + window.pageYOffset - 12;
    window.scrollTo({top: Math.max(0, offsetTop), behavior:'smooth'});
  } else {
    window.scrollTo({top:0, behavior:'smooth'});
  }
  if (i === 0) lsUpdate('l0seen', true);
  if (i === 1) lsUpdate('l1seen', true);
  if (i === 2) {
    setTimeout(() => { pbxUpdate(); }, 100);
  }
  updateProg();
}

function bnSwitchTab(i) {
  showSec(i, null);
}

function l2Jump(anchor, e) {
  if (e) e.preventDefault();
  const el = document.getElementById(anchor);
  if (el) {
    const next = el.nextElementSibling;
    const target = next || el;
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({top: offsetTop, behavior: 'smooth'});
  }
}

// ═══ HAMBURGER SIDEBAR TOGGLE ═══
function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  const btn = document.getElementById('ham-btn');
  const overlay = document.getElementById('ham-overlay');
  if (!sb || !btn || !overlay) return;
  const isOpen = sb.classList.contains('open');
  if (isOpen) {
    sb.classList.remove('open');
    btn.classList.remove('open');
    overlay.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  } else {
    sb.classList.add('open');
    btn.classList.add('open');
    overlay.classList.add('show');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';  // lock scroll dok je open
  }
}

// ESC key zatvara sidebar
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const sb = document.getElementById('sidebar');
    if (sb && sb.classList.contains('open')) toggleSidebar();
  }
});

// Klik na sb-item zatvori sidebar (navigation jump)
document.addEventListener('click', (e) => {
  const link = e.target.closest('.sb-item');
  if (!link) return;
  const sb = document.getElementById('sidebar');
  if (sb && sb.classList.contains('open')) {
    // Pusti link da odradi svoje pa zatvori
    setTimeout(toggleSidebar, 50);
  }
});

function updateProg() {
  const d = lsLoad();
  // Max total = 100 (balanced distribution)
  let pts = 0;
  if (d.l0seen) pts += 8;                                      // 8  — basic overview
  if (d.l1seen) pts += 12;                                     // 12 — theory viewed
  if (d.srDone) pts += Math.min(d.srDone.length * 2.5, 22);    // 22 — all 9 SR
  if (d.pbxExplored) pts += 8;                                 // 8  — explored presets
  if (d.drillCompleted) pts += 10;                             // 10 — drill cycle done
  if (d.gonCompleted) pts += 8;                                // 8  — gon done
  if (d.bestScore) pts += Math.round(d.bestScore / 8 * 20);    // 20 — quiz score
  if (d.cpDone) pts += Math.round(d.cpDone * (12/6));          // 12 — checkpoint (6 items)
  pts = Math.min(pts, 100);
  const pct = Math.round(pts);
  const fill = document.getElementById('sb-prog-fill');
  const pctEl = document.getElementById('sb-prog-pct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
  updateStatsPanel();
  checkAchievements();
}

function updateStatsPanel() {
  const d = lsLoad();
  const fav = favGetAll();
  const v = document.getElementById('stat-visits');
  const dr = document.getElementById('stat-drill');
  const bs = document.getElementById('stat-best');
  const st = document.getElementById('stat-streak');
  const fv = document.getElementById('stat-favs');
  if (v) v.textContent = d.visits || 1;
  if (dr) dr.textContent = (d.drillCorrect || 0) + ' / ' + (d.drillTotal || 0);
  if (bs) bs.textContent = d.bestScore ? d.bestScore + '/8' : '—';
  if (st) st.textContent = d.maxStreak || 0;
  if (fv) fv.textContent = fav.length;
}

// ─── ACHIEVEMENTS ──────────────────────────────────────────────
function getAchievements() {
  try { return JSON.parse(localStorage.getItem(ACH_KEY) || '{}'); }
  catch(e) { return {}; }
}
function saveAchievements(a) {
  try { localStorage.setItem(ACH_KEY, JSON.stringify(a)); } catch(e) {}
}
function unlockAch(id) {
  const a = getAchievements();
  if (a[id]) return;
  a[id] = Date.now();
  saveAchievements(a);
  const names = {
    explorer: '🎨 Explorer — otkrio si 6+ preseta!',
    streaker: '🔥 Streaker — 5 u nizu točno!',
    perfect: '💎 Perfekt — 8/8 na kvizu!',
    master: '👑 Master — 6/6 checkpointa!'
  };
  toast(names[id] || id, 'ach', 4500);
  const el = document.getElementById('ach-' + id);
  if (el) el.classList.add('got');
  launchConfetti();
}
function checkAchievements() {
  const a = getAchievements();
  ['explorer','streaker','perfect','master'].forEach(id => {
    const el = document.getElementById('ach-' + id);
    if (el && a[id]) el.classList.add('got');
  });
}

// ─── WELCOME + RESTORE ─────────────────────────────────────────
function closeWelcome() {
  const el = document.getElementById('welcome');
  if (el) el.classList.remove('show');
  lsUpdate('welcomeClosed', true);
}
function dismissRestore() {
  const el = document.getElementById('restore');
  if (el) el.classList.remove('show');
}
function restoreToTab() {
  const d = lsLoad();
  if (d.lastTab !== undefined) {
    const btn = document.getElementById('tb' + d.lastTab);
    if (btn) showSec(d.lastTab, btn);
  }
  if (d.scrollY) setTimeout(() => window.scrollTo({top: d.scrollY, behavior:'smooth'}), 300);
  dismissRestore();
}

// ─── HERO COUNTUP + RING ───────────────────────────────────────
function animateHero() {
  const el = document.getElementById('hero-pts-counter');
  const ring = document.getElementById('hero-ring');
  if (!el) return;
  // Target se skalira s progress-om: baseline 7 (statično — ovo je vrijednost poglavlja)
  const target = 10;
  const dur = 900;
  const start = performance.now();
  const circ = 2 * Math.PI * 20;
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (ring) ring.style.strokeDashoffset = String(circ - circ * eased * (target/10));
    if (p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ─── CONFETTI ──────────────────────────────────────────────────
function launchConfetti() {
  const wrap = document.createElement('div');
  wrap.className = 'confetti-wrap';
  document.body.appendChild(wrap);
  const colors = ['#F59E0B','#22D3EE','#34D399','#C084FC','#F472B6'];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-p';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDelay = (Math.random() * 0.5) + 's';
    p.style.animationDuration = (2 + Math.random() * 1.5) + 's';
    wrap.appendChild(p);
  }
  setTimeout(() => wrap.remove(), 3500);
}

// ═══════════════════════════════════════════════════════════════
// PARABOLA EXPLORER 2.0 (P09)
// Mode 0: Opći (ax² + bx + c)
// Mode 1: Tjemeni (a(x−p)² + q)
// Mode 2: Faktorizirani (a(x−x₁)(x−x₂))
// ═══════════════════════════════════════════════════════════════

const pbx = {
  a: 1, b: -4, c: 3,
  p: 2, q: -1,
  x1: 1, x2: 3,
  mode: 0,
  zoom: 1,
  presetsUsed: 0,
  challengeOn: false, chScore: 0, chTot: 0,
  lastPreset: null
};





/* ══════ GENERIC PBX DRAG (v2 — rAF throttled, robust cleanup) ══════ */
var pbxDragState = {
  active: false,
  cfg: null,
  latestX: 0,
  latestY: 0,
  pendingFrame: null
};

function pbxGetDragConfig() {
  var sliders = [];
  var allRanges = document.querySelectorAll('input[type="range"][id^="pbx-"]');
  allRanges.forEach(function(r) {
    var ctrl = r.closest('.pbx-ctrl');
    if (ctrl) {
      var visible = true;
      var p = ctrl.parentElement;
      while (p && p !== document.body) {
        if (getComputedStyle(p).display === 'none') { visible = false; break; }
        p = p.parentElement;
      }
      if (visible) sliders.push(r);
    }
  });
  return sliders.slice(0, 2);
}

function pbxApplyDrag(clientX, clientY) {
  if (!pbxDragState.active || !pbxDragState.cfg) return;
  var canvas = document.getElementById('pbx-canvas');
  if (!canvas) return;
  var rect = canvas.getBoundingClientRect();
  if (rect.width === 0 || rect.height === 0) return;

  var x = (clientX - rect.left) / rect.width;
  var y = (clientY - rect.top) / rect.height;
  x = Math.max(0, Math.min(1, x));
  y = Math.max(0, Math.min(1, y));

  var sx = pbxDragState.cfg[0];
  var sy = pbxDragState.cfg[1];
  if (sx) {
    var minX = parseFloat(sx.min), maxX = parseFloat(sx.max), stepX = parseFloat(sx.step) || 1;
    var newX = minX + x * (maxX - minX);
    newX = Math.round(newX / stepX) * stepX;
    var dX = (sx.step && sx.step.indexOf('.') >= 0) ? sx.step.split('.')[1].length : 0;
    sx.value = parseFloat(newX.toFixed(dX));
  }
  if (sy) {
    var minY = parseFloat(sy.min), maxY = parseFloat(sy.max), stepY = parseFloat(sy.step) || 1;
    var newY = minY + (1 - y) * (maxY - minY);
    newY = Math.round(newY / stepY) * stepY;
    var dY = (sy.step && sy.step.indexOf('.') >= 0) ? sy.step.split('.')[1].length : 0;
    sy.value = parseFloat(newY.toFixed(dY));
  }
  try { if (typeof pbxUpdate === 'function') pbxUpdate(); } catch(e) {}
}

function pbxDragStart(e) {
  var canvas = document.getElementById('pbx-canvas');
  if (!canvas) return;
  var sliders = pbxGetDragConfig();
  if (!sliders.length) return;
  pbxDragState.active = true;
  pbxDragState.cfg = sliders;
  canvas.style.cursor = 'grabbing';
  if (e.preventDefault) e.preventDefault();
  var pt = (e.touches && e.touches[0]) || e;
  pbxApplyDrag(pt.clientX, pt.clientY);
}

function pbxDragMove(e) {
  if (!pbxDragState.active) return;
  var pt = (e.touches && e.touches[0]) || e;
  pbxDragState.latestX = pt.clientX;
  pbxDragState.latestY = pt.clientY;
  // Throttle via rAF — max one update per frame
  if (pbxDragState.pendingFrame === null) {
    pbxDragState.pendingFrame = requestAnimationFrame(function() {
      pbxDragState.pendingFrame = null;
      if (pbxDragState.active) {
        pbxApplyDrag(pbxDragState.latestX, pbxDragState.latestY);
      }
    });
  }
  if (e.preventDefault && e.touches) e.preventDefault();
}

function pbxDragEnd(e) {
  if (!pbxDragState.active && pbxDragState.pendingFrame === null) return;
  pbxDragState.active = false;
  pbxDragState.cfg = null;
  if (pbxDragState.pendingFrame !== null) {
    cancelAnimationFrame(pbxDragState.pendingFrame);
    pbxDragState.pendingFrame = null;
  }
  var canvas = document.getElementById('pbx-canvas');
  if (canvas) canvas.style.cursor = 'grab';
}
let pbxCh = null;

function fmtN(n) {
  if (n === null || n === undefined || !isFinite(n)) return '—';
  if (Math.abs(n) < 1e-10) return '0';
  if (Math.abs(n - Math.round(n)) < 0.0001) return String(Math.round(n));
  return (Math.round(n * 1000) / 1000).toString();
}

// Parabola math
function parD(a, b, c) { return b * b - 4 * a * c; }
function parZeros(a, b, c) {
  const D = parD(a, b, c);
  if (D < 0) return null;
  if (Math.abs(D) < 1e-10) return [-b / (2 * a)];
  const sq = Math.sqrt(D);
  return [(-b - sq) / (2 * a), (-b + sq) / (2 * a)];
}
function parVertex(a, b, c) {
  const p = -b / (2 * a);
  const q = a * p * p + b * p + c;
  return [p, q];
}
function parEval(a, b, c, x) { return a * x * x + b * x + c; }

function pbxSetMode(m, btn) {
  pbx.mode = m;
  document.querySelectorAll('.pbx-mode-tab').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  
  const aLbl = document.getElementById('pbx-a-lbl');
  const bLbl = document.getElementById('pbx-b-lbl');
  const cLbl = document.getElementById('pbx-c-lbl');
  const aSl = document.getElementById('pbx-a');
  const bSl = document.getElementById('pbx-b');
  const cSl = document.getElementById('pbx-c');
  
  if (m === 0) {
    if (aLbl) aLbl.textContent = 'a';
    if (bLbl) bLbl.textContent = 'b';
    if (cLbl) cLbl.textContent = 'c';
    if (aSl) { aSl.min = -3; aSl.max = 3; aSl.step = 0.1; aSl.value = pbx.a; }
    if (bSl) { bSl.min = -10; bSl.max = 10; bSl.step = 0.5; bSl.value = pbx.b; }
    if (cSl) { cSl.min = -10; cSl.max = 10; cSl.step = 0.5; cSl.value = pbx.c; }
    toast('📐 Opći oblik ax²+bx+c', 'info', 1500);
  } else if (m === 1) {
    // Sync p, q from current
    const v = parVertex(pbx.a, pbx.b, pbx.c);
    pbx.p = v[0]; pbx.q = v[1];
    if (aLbl) aLbl.textContent = 'a';
    if (bLbl) bLbl.textContent = 'p (tjeme x)';
    if (cLbl) cLbl.textContent = 'q (tjeme y)';
    if (aSl) { aSl.min = -3; aSl.max = 3; aSl.step = 0.1; aSl.value = pbx.a; }
    if (bSl) { bSl.min = -8; bSl.max = 8; bSl.step = 0.5; bSl.value = pbx.p; }
    if (cSl) { cSl.min = -10; cSl.max = 10; cSl.step = 0.5; cSl.value = pbx.q; }
    toast('🎯 Tjemeni a(x−p)²+q', 'info', 1500);
  } else {
    // Mode 2: compute x1, x2 from current (or keep)
    const z = parZeros(pbx.a, pbx.b, pbx.c);
    if (z && z.length === 2) { pbx.x1 = z[0]; pbx.x2 = z[1]; }
    else if (z && z.length === 1) { pbx.x1 = z[0]; pbx.x2 = z[0]; }
    if (aLbl) aLbl.textContent = 'a';
    if (bLbl) bLbl.textContent = 'x₁';
    if (cLbl) cLbl.textContent = 'x₂';
    if (aSl) { aSl.min = -3; aSl.max = 3; aSl.step = 0.1; aSl.value = pbx.a; }
    if (bSl) { bSl.min = -8; bSl.max = 8; bSl.step = 0.25; bSl.value = pbx.x1; }
    if (cSl) { cSl.min = -8; cSl.max = 8; cSl.step = 0.25; cSl.value = pbx.x2; }
    toast('✂ Faktorizirani a(x−x₁)(x−x₂)', 'info', 1500);
  }
  pbxUpdate();
}

function pbxZoom(dir) {
  if (dir === 0) pbx.zoom = 1;
  else if (dir > 0) pbx.zoom = Math.min(3, pbx.zoom * 1.3);
  else pbx.zoom = Math.max(0.4, pbx.zoom / 1.3);
  const lbl = document.getElementById('pbx-zoom-lbl');
  if (lbl) lbl.textContent = pbx.zoom.toFixed(1) + '×';
  pbxUpdate();
}

function pbxPreset(name, btn) {
  document.querySelectorAll('.pbx-preset').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  
  // Switch to mode 0 (general) for all presets
  pbx.mode = 0;
  const tabs = document.querySelectorAll('.pbx-mode-tab');
  tabs.forEach(b => b.classList.remove('on'));
  if (tabs[0]) tabs[0].classList.add('on');
  
  const presets = {
    std:    { a: 1, b: -4, c: 3 },     // x²-4x+3, nultočke 1,3
    up:     { a: 1, b: 0, c: -4 },     // x²-4, nultočke ±2
    down:   { a: -1, b: 0, c: 4 },     // -x²+4, a<0
    double: { a: 1, b: -4, c: 4 },     // x²-4x+4 = (x-2)², D=0
    none:   { a: 1, b: 0, c: 2 },      // x²+2, D=-8<0
    wide:   { a: 0.3, b: 0, c: -2 },   // |a| malo
    narrow: { a: 3, b: 0, c: -2 }      // |a| veliko
  };
  const p = presets[name];
  if (!p) return;
  
  pbx.a = p.a; pbx.b = p.b; pbx.c = p.c;
  pbx.lastPreset = name;
  
  // Update sliders
  const aLbl = document.getElementById('pbx-a-lbl');
  const bLbl = document.getElementById('pbx-b-lbl');
  const cLbl = document.getElementById('pbx-c-lbl');
  if (aLbl) aLbl.textContent = 'a';
  if (bLbl) bLbl.textContent = 'b';
  if (cLbl) cLbl.textContent = 'c';
  const aSl = document.getElementById('pbx-a');
  const bSl = document.getElementById('pbx-b');
  const cSl = document.getElementById('pbx-c');
  if (aSl) { aSl.min = -3; aSl.max = 3; aSl.step = 0.1; aSl.value = p.a; }
  if (bSl) { bSl.min = -10; bSl.max = 10; bSl.step = 0.5; bSl.value = p.b; }
  if (cSl) { cSl.min = -10; cSl.max = 10; cSl.step = 0.5; cSl.value = p.c; }
  
  pbx.presetsUsed++;
  if (pbx.presetsUsed >= 3) {
    const ls = lsLoad();
    if (!ls.pbxExplored) {
      ls.pbxExplored = true;
      lsSave(ls);
      unlockAch('explorer', '🎨 Explorer otključan!');
    }
  }
  pbxUpdate();
}

function pbxUpdate() {
  const canvas = document.getElementById('pbx-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext && canvas.getContext('2d');
  if (!ctx) return;
  
  const aSl = document.getElementById('pbx-a');
  const bSl = document.getElementById('pbx-b');
  const cSl = document.getElementById('pbx-c');
  if (aSl) pbx.a = parseFloat(aSl.value);
  if (bSl) {
    const v = parseFloat(bSl.value);
    if (pbx.mode === 0) pbx.b = v;
    else if (pbx.mode === 1) pbx.p = v;
    else pbx.x1 = v;
  }
  if (cSl) {
    const v = parseFloat(cSl.value);
    if (pbx.mode === 0) pbx.c = v;
    else if (pbx.mode === 1) pbx.q = v;
    else pbx.x2 = v;
  }
  
  // Make sure a ≠ 0
  if (Math.abs(pbx.a) < 0.1) pbx.a = (pbx.a >= 0 ? 0.1 : -0.1);
  
  // Derive a, b, c from current mode (general form always)
  let a = pbx.a, b, c;
  if (pbx.mode === 0) {
    b = pbx.b; c = pbx.c;
  } else if (pbx.mode === 1) {
    // f(x) = a(x−p)² + q = a(x² − 2px + p²) + q = ax² − 2apx + ap² + q
    b = -2 * a * pbx.p;
    c = a * pbx.p * pbx.p + pbx.q;
  } else {
    // f(x) = a(x−x₁)(x−x₂) = a[x² − (x₁+x₂)x + x₁x₂]
    b = -a * (pbx.x1 + pbx.x2);
    c = a * pbx.x1 * pbx.x2;
  }
  
  const D = parD(a, b, c);
  const V = parVertex(a, b, c);
  const zeros = parZeros(a, b, c);
  
  // Update UI labels
  const aVal = document.getElementById('pbx-a-val');
  if (aVal) aVal.textContent = fmtN(pbx.a);
  const bVal = document.getElementById('pbx-b-val');
  if (bVal) bVal.textContent = fmtN(pbx.mode === 0 ? pbx.b : (pbx.mode === 1 ? pbx.p : pbx.x1));
  const cVal = document.getElementById('pbx-c-val');
  if (cVal) cVal.textContent = fmtN(pbx.mode === 0 ? pbx.c : (pbx.mode === 1 ? pbx.q : pbx.x2));
  const dVal = document.getElementById('pbx-d-val');
  if (dVal) {
    dVal.textContent = fmtN(D);
    dVal.style.color = D > 0 ? 'var(--green)' : (Math.abs(D) < 1e-10 ? 'var(--amber)' : 'var(--red)');
  }
  const vVal = document.getElementById('pbx-v-val');
  if (vVal) vVal.textContent = '(' + fmtN(V[0]) + ', ' + fmtN(V[1]) + ')';
  const zVal = document.getElementById('pbx-zeros-val');
  if (zVal) {
    if (!zeros) zVal.textContent = 'nema realnih (D<0)';
    else if (zeros.length === 1) zVal.textContent = fmtN(zeros[0]) + ' (dvostruka)';
    else zVal.textContent = fmtN(zeros[0]) + ', ' + fmtN(zeros[1]);
  }
  
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0A0F1A';
  ctx.fillRect(0, 0, W, H);
  
  drawParabolaChart(ctx, W, H, a, b, c, V, zeros, D);
  updateInfo(a, b, c, V, zeros, D);
}

function drawParabolaChart(ctx, W, H, a, b, c, V, zeros, D) {
  const pad = 40;
  const chartW = W - 2 * pad;
  const chartH = H - 2 * pad;
  const cx = W / 2;
  const cy = H / 2;
  
  // Determine view range based on vertex and zoom
  const zoom = pbx.zoom;
  const range = 10 / zoom;
  const xMin = V[0] - range;
  const xMax = V[0] + range;
  const yRange = Math.max(Math.abs(V[1]) + range * Math.abs(a) * range, 10 / zoom);
  const yMin = V[1] - yRange * 0.5;
  const yMax = V[1] + yRange * 0.5;
  // Ensure reasonable defaults
  const yMinFinal = Math.min(yMin, -2);
  const yMaxFinal = Math.max(yMax, 2);
  
  function X(x) { return pad + (x - xMin) / (xMax - xMin) * chartW; }
  function Y(y) { return pad + (yMaxFinal - y) / (yMaxFinal - yMinFinal) * chartH; }
  
  // Grid
  ctx.strokeStyle = 'rgba(77,158,255,0.08)';
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  const gridStep = Math.max(1, Math.round((xMax - xMin) / 10));
  for (let gx = Math.ceil(xMin); gx <= xMax; gx += gridStep) {
    ctx.moveTo(X(gx), pad);
    ctx.lineTo(X(gx), H - pad);
  }
  const yGridStep = Math.max(1, Math.round((yMaxFinal - yMinFinal) / 10));
  for (let gy = Math.ceil(yMinFinal); gy <= yMaxFinal; gy += yGridStep) {
    ctx.moveTo(pad, Y(gy));
    ctx.lineTo(W - pad, Y(gy));
  }
  ctx.stroke();
  
  // Axes
  ctx.strokeStyle = '#7A90BB';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  if (xMin <= 0 && xMax >= 0) {
    ctx.moveTo(X(0), pad);
    ctx.lineTo(X(0), H - pad);
  }
  if (yMinFinal <= 0 && yMaxFinal >= 0) {
    ctx.moveTo(pad, Y(0));
    ctx.lineTo(W - pad, Y(0));
  }
  ctx.stroke();
  
  // Axis labels
  ctx.fillStyle = '#7A90BB';
  ctx.font = '10px JetBrains Mono';
  ctx.textAlign = 'center';
  for (let gx = Math.ceil(xMin); gx <= xMax; gx += gridStep) {
    if (gx !== 0 && yMinFinal <= 0 && yMaxFinal >= 0) {
      ctx.fillText(String(gx), X(gx), Y(0) + 14);
    }
  }
  ctx.textAlign = 'end';
  for (let gy = Math.ceil(yMinFinal); gy <= yMaxFinal; gy += yGridStep) {
    if (gy !== 0 && xMin <= 0 && xMax >= 0) {
      ctx.fillText(String(gy), X(0) - 4, Y(gy) + 3);
    }
  }
  
  // Os simetrije (vertical line through vertex) — pink dotted
  ctx.strokeStyle = '#F472B6';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(X(V[0]), pad);
  ctx.lineTo(X(V[0]), H - pad);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Parabola
  ctx.strokeStyle = '#4D9EFF';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  let first = true;
  const steps = 200;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (xMax - xMin) * i / steps;
    const y = parEval(a, b, c, x);
    if (y < yMinFinal - 20 || y > yMaxFinal + 20) { first = true; continue; }
    const px = X(x), py = Y(y);
    if (first) { ctx.moveTo(px, py); first = false; }
    else ctx.lineTo(px, py);
  }
  ctx.stroke();
  
  // Nultočke (green dots)
  if (zeros && zeros.length > 0) {
    zeros.forEach(z => {
      if (z >= xMin && z <= xMax) {
        ctx.fillStyle = '#34D399';
        ctx.beginPath();
        ctx.arc(X(z), Y(0), 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0A0F1A';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = '#34D399';
        ctx.font = 'bold 10px JetBrains Mono';
        ctx.textAlign = 'center';
        ctx.fillText(fmtN(z), X(z), Y(0) - 10);
      }
    });
  }
  
  // Tjeme (amber dot)
  if (V[0] >= xMin && V[0] <= xMax && V[1] >= yMinFinal && V[1] <= yMaxFinal) {
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(X(V[0]), Y(V[1]), 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#0A0F1A';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 10px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.fillText('V(' + fmtN(V[0]) + ', ' + fmtN(V[1]) + ')', X(V[0]), Y(V[1]) + (a > 0 ? 20 : -12));
  }
  
  // y-presjek (cyan hint)
  if (xMin <= 0 && xMax >= 0 && c >= yMinFinal && c <= yMaxFinal) {
    ctx.fillStyle = '#22D3EE';
    ctx.beginPath();
    ctx.arc(X(0), Y(c), 3.5, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Header text
  ctx.fillStyle = '#22D3EE';
  ctx.font = 'bold 12px JetBrains Mono';
  ctx.textAlign = 'center';
  const fStr = 'f(x) = ' + fmtN(a) + 'x² ' + (b >= 0 ? '+' : '') + fmtN(b) + 'x ' + (c >= 0 ? '+' : '') + fmtN(c);
  ctx.fillText(fStr, W / 2, 18);
}

function updateInfo(a, b, c, V, zeros, D) {
  const info = document.getElementById('pbx-info');
  if (!info) return;
  const fStr = fmtN(a) + 'x² ' + (b >= 0 ? '+ ' : '− ') + fmtN(Math.abs(b)) + 'x ' + (c >= 0 ? '+ ' : '− ') + fmtN(Math.abs(c));
  let zStr;
  if (!zeros) zStr = 'nema realnih';
  else if (zeros.length === 1) zStr = fmtN(zeros[0]) + ' (dvostruka)';
  else zStr = fmtN(zeros[0]) + ', ' + fmtN(zeros[1]);
  info.innerHTML = '<strong>f(x) = ' + fStr + '</strong> | V = (' + fmtN(V[0]) + ', ' + fmtN(V[1]) + ') | nultočke: ' + zStr + ' | D = ' + fmtN(D);
}

// CHALLENGES
// (dup removed)

function pbxChallengeToggle() {
  pbx.challengeOn = !pbx.challengeOn;
  const wrap = document.getElementById('pbx-challenge');
  const btn = document.getElementById('pbx-challenge-btn');
  if (pbx.challengeOn) {
    wrap.classList.add('show'); btn.classList.add('on');
    btn.textContent = '✕ Zatvori izazove';
    if (!pbxCh) pbxChallengeNext();
  } else {
    wrap.classList.remove('show'); btn.classList.remove('on');
    btn.textContent = '🎯 Pokreni izazov (12 taskova)';
  }
}

function pbxChallengeNext() {
  const totEl = document.getElementById('pbx-ch-tot');
  const scEl = document.getElementById('pbx-ch-score');
  if (totEl) totEl.textContent = pbx.chTot || 0;
  if (scEl) scEl.textContent = pbx.chScore || 0;
  const solved = (pbxCh && pbxCh.solved) || [];
  const remaining = PBX_CH_DATA.filter((_, i) => !solved.includes(i));
  const pool = remaining.length ? remaining : PBX_CH_DATA;
  const choice = pool[Math.floor(Math.random() * pool.length)];
  const idx = PBX_CH_DATA.indexOf(choice);
  pbxCh = Object.assign({}, choice, {idx, solved});
  document.getElementById('pbx-challenge-task').textContent = choice.task;
  const fb = document.getElementById('pbx-challenge-fb');
  if (fb) { fb.classList.remove('show', 'ok', 'ng'); fb.innerHTML = ''; }
}

function pbxChallengeCheck() {
  if (!pbxCh) { pbxChallengeNext(); return; }
  const fb = document.getElementById('pbx-challenge-fb');
  if (!fb) return;
  
  // Compute current effective a, b, c regardless of mode
  let ea = pbx.a, eb, ec;
  if (pbx.mode === 0) { eb = pbx.b; ec = pbx.c; }
  else if (pbx.mode === 1) { eb = -2 * ea * pbx.p; ec = ea * pbx.p * pbx.p + pbx.q; }
  else { eb = -ea * (pbx.x1 + pbx.x2); ec = ea * pbx.x1 * pbx.x2; }
  
  const D = parD(ea, eb, ec);
  const V = parVertex(ea, eb, ec);
  const zeros = parZeros(ea, eb, ec);
  
  let pass = false, msg = '';
  
  switch (pbxCh.type) {
    case 'abc_match':
      pass = Math.abs(ea - pbxCh.a) < 0.15 && Math.abs(eb - pbxCh.b) < 0.3 && Math.abs(ec - pbxCh.c) < 0.3;
      msg = pass ? '✓ a=' + fmtN(ea) + ', b=' + fmtN(eb) + ', c=' + fmtN(ec)
                 : '✗ trenutno: a=' + fmtN(ea) + ', b=' + fmtN(eb) + ', c=' + fmtN(ec) + '. cilj: a=' + pbxCh.a + ', b=' + pbxCh.b + ', c=' + pbxCh.c;
      break;
    case 'a_sign':
      pass = (pbxCh.sign > 0 ? ea > 0 : ea < 0);
      msg = pass ? '✓ a = ' + fmtN(ea) + ' ' + (pbxCh.sign > 0 ? '> 0 (otvorena gore)' : '< 0 (otvorena dolje)')
                 : '✗ a = ' + fmtN(ea) + '. treba biti ' + (pbxCh.sign > 0 ? '> 0' : '< 0');
      break;
    case 'd_zero':
      pass = Math.abs(D) < 0.3;
      msg = pass ? '✓ D = ' + fmtN(D) + ' ≈ 0 (dvostruka nultočka)'
                 : '✗ D = ' + fmtN(D) + '. cilj: D = 0 — probaj x²-4x+4 ili (x-p)² oblike';
      break;
    case 'd_neg':
      pass = D < -0.1;
      msg = pass ? '✓ D = ' + fmtN(D) + ' < 0 (nema realnih nultočaka)'
                 : '✗ D = ' + fmtN(D) + '. cilj: D < 0 — parabola ne siječe x-os';
      break;
    case 'd_pos':
      pass = D > 0.1;
      msg = pass ? '✓ D = ' + fmtN(D) + ' > 0 (dvije nultočke)'
                 : '✗ D = ' + fmtN(D) + '. cilj: D > 0';
      break;
    case 'vertex_target':
      pass = Math.abs(V[0] - pbxCh.p) < (pbxCh.tol || 0.3) && Math.abs(V[1] - pbxCh.q) < (pbxCh.tol || 0.3);
      msg = pass ? '✓ V = (' + fmtN(V[0]) + ', ' + fmtN(V[1]) + ') ≈ (' + pbxCh.p + ', ' + pbxCh.q + ')'
                 : '✗ V = (' + fmtN(V[0]) + ', ' + fmtN(V[1]) + '). cilj: (' + pbxCh.p + ', ' + pbxCh.q + ')';
      break;
    case 'zeros_target':
      if (!zeros || zeros.length < 2) {
        pass = false; msg = '✗ nema dvije nultočke. trebaju x₁ = ' + pbxCh.x1 + ', x₂ = ' + pbxCh.x2;
      } else {
        const z = zeros.slice().sort((a,b) => a - b);
        const t = [pbxCh.x1, pbxCh.x2].sort((a,b) => a - b);
        pass = Math.abs(z[0] - t[0]) < (pbxCh.tol || 0.3) && Math.abs(z[1] - t[1]) < (pbxCh.tol || 0.3);
        msg = pass ? '✓ nultočke: ' + fmtN(z[0]) + ', ' + fmtN(z[1])
                   : '✗ nultočke: ' + fmtN(z[0]) + ', ' + fmtN(z[1]) + '. cilj: ' + t[0] + ', ' + t[1];
      }
      break;
    case 'c_target':
      pass = Math.abs(ec - pbxCh.target) < (pbxCh.tol || 0.25);
      msg = pass ? '✓ c = ' + fmtN(ec)
                 : '✗ c = ' + fmtN(ec) + '. cilj: ' + pbxCh.target;
      break;
    case 'preset_match':
      pass = pbx.lastPreset === pbxCh.target;
      msg = pass ? '✓ preset "' + pbxCh.target + '" aktiviran'
                 : '✗ klikni preset "' + pbxCh.target + '"';
      break;
  }
  
  if (pass) {
    if (!pbxCh.solved.includes(pbxCh.idx)) {
      pbx.chScore = (pbx.chScore || 0) + 1;
      pbxCh.solved.push(pbxCh.idx);
    }
    pbx.chTot = (pbx.chTot || 0) + 1;
    fb.classList.remove('ng'); fb.classList.add('ok', 'show');
    fb.innerHTML = msg;
    document.getElementById('pbx-ch-score').textContent = pbx.chScore;
    document.getElementById('pbx-ch-tot').textContent = pbx.chTot;
    if (pbx.chScore >= 5) {
      const ls = lsLoad();
      if (!ls.pbxChMaster) {
        ls.pbxChMaster = true;
        lsSave(ls);
        unlockAch('streaker', '🔥 5 izazova riješeno!');
      }
    }
    setTimeout(pbxChallengeNext, 1800);
  } else {
    pbx.chTot = (pbx.chTot || 0) + 1;
    fb.classList.remove('ok'); fb.classList.add('ng', 'show');
    fb.innerHTML = msg;
    document.getElementById('pbx-ch-tot').textContent = pbx.chTot;
  }
}

// ═══════════════════════════════════════════════════════════════
// KALKULATOR P09 (3 moda)
// ═══════════════════════════════════════════════════════════════

function p9SwitchMode(m, btn) {
  document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('on'));
  if (btn) btn.classList.add('on');
  [0, 1, 2].forEach(i => {
    const el = document.getElementById('p9-mode-' + i);
    if (el) el.style.display = (i === m) ? 'block' : 'none';
  });
  const r = document.getElementById('p9c-r');
  if (r) r.classList.remove('show');
}

function p9calc() {
  // Mode 0: opći a, b, c
  const a = parseFloat(document.getElementById('p9c-a').value);
  const b = parseFloat(document.getElementById('p9c-b').value);
  const c = parseFloat(document.getElementById('p9c-k').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">Unesi a, b i c.</div>';
    return;
  }
  if (Math.abs(a) < 1e-12) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">a ne smije biti 0 (inače nije kvadratna).</div>';
    return;
  }
  const D = parD(a, b, c);
  const V = parVertex(a, b, c);
  const zeros = parZeros(a, b, c);
  const orient = a > 0 ? 'otvorena gore (min)' : 'otvorena dolje (max)';
  
  let zStr;
  if (!zeros) zStr = '<span style="color:var(--red)">nema realnih (D &lt; 0)</span>';
  else if (zeros.length === 1) zStr = '<span style="color:var(--amber)">x = ' + fmtN(zeros[0]) + ' (dvostruka, D = 0)</span>';
  else zStr = '<span style="color:var(--green)">x₁ = ' + fmtN(zeros[0]) + ', x₂ = ' + fmtN(zeros[1]) + '</span>';
  
  const vieteSum = -b / a;
  const vieteProd = c / a;
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">f(x) =</span> <span class="calc-res-val">' + fmtN(a) + 'x² ' + (b>=0?'+':'') + fmtN(b) + 'x ' + (c>=0?'+':'') + fmtN(c) + '</span></div>' +
    '<div><span class="calc-res-key">Parabola:</span> <span class="calc-res-val">' + orient + '</span></div>' +
    '<div><span class="calc-res-key">Diskriminanta:</span> <span class="calc-res-val" style="color:' + (D>0?'var(--green)':(Math.abs(D)<1e-10?'var(--amber)':'var(--red)')) + '">D = b² − 4ac = ' + fmtN(D) + '</span></div>' +
    '<div><span class="calc-res-key">Nultočke:</span> <span class="calc-res-val">' + zStr + '</span></div>' +
    '<div><span class="calc-res-key">Tjeme V:</span> <span class="calc-res-val" style="color:var(--amber)">(' + fmtN(V[0]) + ', ' + fmtN(V[1]) + ')</span></div>' +
    '<div><span class="calc-res-key">Os simetrije:</span> <span class="calc-res-val">x = ' + fmtN(V[0]) + '</span></div>' +
    '<div><span class="calc-res-key">Viète:</span> <span class="calc-res-val">x₁+x₂ = ' + fmtN(vieteSum) + ', &nbsp; x₁·x₂ = ' + fmtN(vieteProd) + '</span></div>';
}

function p9calcVertex() {
  // Mode 1: tjemeni a, p, q
  const a = parseFloat(document.getElementById('p9cv-a').value);
  const p = parseFloat(document.getElementById('p9cv-q').value);
  const q = parseFloat(document.getElementById('p9cv-k').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(a) || isNaN(p) || isNaN(q)) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">Unesi a, p i q.</div>';
    return;
  }
  if (Math.abs(a) < 1e-12) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">a ≠ 0.</div>';
    return;
  }
  // Expand: a(x−p)² + q = ax² − 2apx + (ap² + q)
  const b = -2 * a * p;
  const c = a * p * p + q;
  const D = parD(a, b, c);
  const zeros = parZeros(a, b, c);
  
  let zStr;
  if (!zeros) zStr = '<span style="color:var(--red)">nema realnih</span>';
  else if (zeros.length === 1) zStr = '<span style="color:var(--amber)">x = ' + fmtN(zeros[0]) + '</span>';
  else zStr = '<span style="color:var(--green)">x₁ = ' + fmtN(zeros[0]) + ', x₂ = ' + fmtN(zeros[1]) + '</span>';
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Tjemeni:</span> <span class="calc-res-val">f(x) = ' + fmtN(a) + '(x − ' + fmtN(p) + ')² + ' + fmtN(q) + '</span></div>' +
    '<div><span class="calc-res-key">Opći oblik:</span> <span class="calc-res-val">' + fmtN(a) + 'x² ' + (b>=0?'+':'') + fmtN(b) + 'x ' + (c>=0?'+':'') + fmtN(c) + '</span></div>' +
    '<div><span class="calc-res-key">Tjeme V:</span> <span class="calc-res-val" style="color:var(--amber)">(' + fmtN(p) + ', ' + fmtN(q) + ')</span></div>' +
    '<div><span class="calc-res-key">Ekstrem:</span> <span class="calc-res-val">' + (a > 0 ? 'MIN = ' : 'MAX = ') + fmtN(q) + '</span></div>' +
    '<div><span class="calc-res-key">Diskriminanta:</span> <span class="calc-res-val">D = ' + fmtN(D) + '</span></div>' +
    '<div><span class="calc-res-key">Nultočke:</span> <span class="calc-res-val">' + zStr + '</span></div>';
}

function p9calcFromT() {
  // Mode 2: faktorizirani a, x1, x2
  const a = parseFloat(document.getElementById('p9cft-p').value);
  const x1 = parseFloat(document.getElementById('p9cft-q').value);
  const x2 = parseFloat(document.getElementById('p9cft-n').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(a) || isNaN(x1) || isNaN(x2)) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">Unesi a, x₁, x₂.</div>';
    return;
  }
  if (Math.abs(a) < 1e-12) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">a ≠ 0.</div>';
    return;
  }
  // Expand: a(x−x₁)(x−x₂) = a[x² − (x₁+x₂)x + x₁x₂]
  const b = -a * (x1 + x2);
  const c = a * x1 * x2;
  const V = parVertex(a, b, c);
  const D = parD(a, b, c);
  
  const vieteSum = -b / a;
  const vieteProd = c / a;
  const vieteCheck = Math.abs(vieteSum - (x1 + x2)) < 1e-10 && Math.abs(vieteProd - x1 * x2) < 1e-10;
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Faktorizirani:</span> <span class="calc-res-val">f(x) = ' + fmtN(a) + '(x − ' + fmtN(x1) + ')(x − ' + fmtN(x2) + ')</span></div>' +
    '<div><span class="calc-res-key">Opći oblik:</span> <span class="calc-res-val">' + fmtN(a) + 'x² ' + (b>=0?'+':'') + fmtN(b) + 'x ' + (c>=0?'+':'') + fmtN(c) + '</span></div>' +
    '<div><span class="calc-res-key">Nultočke:</span> <span class="calc-res-val" style="color:var(--green)">x₁ = ' + fmtN(x1) + ', x₂ = ' + fmtN(x2) + '</span></div>' +
    '<div><span class="calc-res-key">Tjeme V:</span> <span class="calc-res-val" style="color:var(--amber)">(' + fmtN(V[0]) + ', ' + fmtN(V[1]) + ')</span></div>' +
    '<div><span class="calc-res-key">Diskriminanta:</span> <span class="calc-res-val">D = ' + fmtN(D) + '</span></div>' +
    '<div><span class="calc-res-key">Viète:</span> <span class="calc-res-val">x₁+x₂ = ' + fmtN(x1+x2) + ', x₁·x₂ = ' + fmtN(x1*x2) + ' ' + (vieteCheck ? '✓' : '') + '</span></div>';
}

// Compat stubs
// ─── SR STEPS ──────────────────────────────────────────────────
const stSt = {sr1:0,sr2:0,sr3:0,sr4:0,sr5:0,sr6:0,sr7:0,sr8:0,sr9:0,sr10:0};

function tryIt(n) {
  const wrap = document.getElementById('sr' + n + '-steps');
  const sr = document.getElementById('sr' + n);
  if (!wrap) return;
  wrap.classList.add('show');
  stSt['sr' + n] = 1;
  const first = wrap.querySelector('[data-s="1"]');
  if (first) first.style.display = 'block';
  // Sakrij ostale
  wrap.querySelectorAll('.sr-step').forEach(s => {
    const step = parseInt(s.getAttribute('data-s'), 10);
    s.style.display = step === 1 ? 'block' : 'none';
  });
  const d = lsLoad();
  if (!d.srDone) d.srDone = [];
  if (!d.srDone.includes(n)) { d.srDone.push(n); lsSave(d); updateProg(); }
  if (d.srDone.length === 9) toast('🎓 Svi SR primjeri otključani!', 'ok', 3000);
}

function nxtStep(n) {
  const wrap = document.getElementById('sr' + n + '-steps');
  if (!wrap) return;
  stSt['sr' + n]++;
  const all = wrap.querySelectorAll('.sr-step');
  let shown = false;
  all.forEach(s => {
    const step = parseInt(s.getAttribute('data-s'), 10);
    if (step === stSt['sr' + n]) { s.style.display = 'block'; shown = true; }
  });
  if (!shown) {
    // Reset ako nema više
    stSt['sr' + n] = all.length;
    const sr = document.getElementById('sr' + n);
    if (sr) sr.classList.add('done');
  }
}

function rstStep(n) {
  const wrap = document.getElementById('sr' + n + '-steps');
  if (!wrap) return;
  wrap.classList.remove('show');
  wrap.querySelectorAll('.sr-step').forEach(s => s.style.display = 'none');
  stSt['sr' + n] = 0;
  const sr = document.getElementById('sr' + n);
  if (sr) sr.classList.remove('done');
}

// ─── FLASHCARDS ────────────────────────────────────────────────
function fcShuffle() {
  const grid = document.querySelector('.fc-grid');
  if (!grid) return;
  const cards = Array.from(grid.children);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    grid.insertBefore(cards[j], cards[i]);
  }
  toast('🔀 Flashcards promiješane', 'info', 1800);
}

function flipAllCards() {
  document.querySelectorAll('.fc').forEach(c => c.classList.toggle('flipped'));
}

// ─── FAVORITES ─────────────────────────────────────────────────
function favGetAll() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
  catch(e) { return []; }
}
function favSave(arr) {
  try { localStorage.setItem(FAV_KEY, JSON.stringify(arr)); } catch(e) {}
}
function drToggleFav() {
  const favs = favGetAll();
  const idx = drI;
  const pos = favs.indexOf(idx);
  if (pos >= 0) {
    favs.splice(pos, 1);
    document.getElementById('dr-fav').classList.remove('on');
    document.getElementById('dr-fav').textContent = '☆';
    toast('☆ Uklonjeno iz favorita', 'info', 1500);
  } else {
    favs.push(idx);
    document.getElementById('dr-fav').classList.add('on');
    document.getElementById('dr-fav').textContent = '★';
    toast('⭐ Dodano u favorite', 'ok', 1500);
  }
  favSave(favs);
  updateStatsPanel();
  favRender();
}
function favRender() {
  const body = document.getElementById('fav-body');
  if (!body) return;
  const favs = favGetAll();
  if (!favs.length) { body.innerHTML = '<div class="fav-empty">Nemaš favorita. Dodaj pitanje klikom na ☆ u drill panelu.</div>'; return; }
  body.innerHTML = favs.map(idx => {
    const q = DRILL_DATA[idx];
    if (!q) return '';
    return '<div class="fav-item"><div class="fav-item-t">' + q.q + '</div><button class="fav-item-go" onclick="drGoTo(' + idx + ')">Idi</button><button class="fav-item-x" onclick="favRemove(' + idx + ')">✕</button></div>';
  }).join('');
}
function favRemove(idx) {
  let favs = favGetAll();
  favs = favs.filter(x => x !== idx);
  favSave(favs);
  updateStatsPanel();
  favRender();
}

// ─── GON (Točno-Netočno) ──────────────────────────────────────
let gonAns = {};
function renderGon() {
  var body = document.getElementById('gon-body');
  if (!body) return;
  body.innerHTML = GON_DATA.map(function(g, i) {
    return '<div class="gon-card" id="gon-c' + i + '">' +
      '<span class="gon-no">PITANJE ' + (i+1) + '</span>' +
      '<div class="gon-stmt">' + g.q + '</div>' +
      '<div class="gon-btns">' +
        '<button class="gon-btn" onclick="gonAnswer(' + i + ',true,this)">✓ Točno</button>' +
        '<button class="gon-btn" onclick="gonAnswer(' + i + ',false,this)">✗ Netočno</button>' +
      '</div>' +
      '<div class="gon-exp" id="gon-exp' + i + '">' + g.e + '</div>' +
    '</div>';
  }).join('');
}
function gonAnswer(i, val, btn) {
  if (gonAns[i] !== undefined) return;
  gonAns[i] = val;
  var card = document.getElementById('gon-c' + i);
  var exp  = document.getElementById('gon-exp' + i);
  var correct = (val === GON_DATA[i].a);
  btn.classList.add(correct ? 'ok-chosen' : 'ng-chosen');
  if (card) card.classList.add(correct ? 'ok' : 'ng');
  if (exp)  exp.classList.add('show');
  var answered = Object.keys(gonAns).length;
  var score = Object.keys(gonAns).filter(function(k) { return gonAns[k] === GON_DATA[k].a; }).length;
  var gs = document.getElementById('gon-s');
  var gp = document.getElementById('gon-prog');
  if (gs) gs.textContent = score;
  if (gp) gp.style.width = (answered / GON_DATA.length * 100) + '%';
  if (answered === GON_DATA.length) {
    try { lsUpdate('gonCompleted', true); } catch(e) {}
    try { updateProg(); } catch(e) {}
    try { toast('📚 GON završen: ' + score + '/' + GON_DATA.length, score === GON_DATA.length ? 'ok' : 'info'); } catch(e) {}
  }
}

// ─── DRILL ─────────────────────────────────────────────────────
let drI = 0;
let drCurrent = [];
let drStreak = 0;
let drAnswered = false;
let drFilter_v = 'all';

function drBuildQueue() {
  const favs = favGetAll();
  if (drFilter_v === 'all') drCurrent = DRILL_DATA.map((_, i) => i);
  else if (drFilter_v === 'fav') drCurrent = favs.slice();
  else drCurrent = DRILL_DATA.map((_, i) => i).filter(i => DRILL_DATA[i].diff === drFilter_v);
  if (!drCurrent.length) { drCurrent = DRILL_DATA.map((_, i) => i); toast('Nema pitanja u tom filteru', 'warn', 2000); }
  document.getElementById('dr-t').textContent = drCurrent.length;
}

function drFilter(v, btn) {
  drFilter_v = v;
  document.querySelectorAll('.dr-filter').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  drBuildQueue();
  drI = 0;
  drShow();
}

function drShow() {
  if (!drCurrent.length) return;
  const idx = drCurrent[drI];
  const q = DRILL_DATA[idx];
  if (!q) return;
  document.getElementById('dr-no').textContent = 'Pitanje ' + (drI + 1) + ' / ' + drCurrent.length + ' · ' + q.diff.toUpperCase();
  document.getElementById('dr-q').innerHTML = q.q;
  const opts = document.getElementById('dr-opts');
  opts.innerHTML = q.opts.map((o, i) => '<button class="drill-opt" onclick="drAns(' + i + ',this)">' + o + '</button>').join('');
  document.getElementById('dr-fb').classList.remove('show', 'ok', 'ng');
  document.getElementById('dr-fb').innerHTML = '';
  document.getElementById('dr-next').classList.remove('show');
  document.getElementById('dr-hint-btn').classList.add('show');
  document.getElementById('dr-hint').classList.remove('show');
  document.getElementById('dr-prog').style.width = (drI / drCurrent.length * 100) + '%';
  const favs = favGetAll();
  const favBtn = document.getElementById('dr-fav');
  if (favs.includes(idx)) { favBtn.classList.add('on'); favBtn.textContent = '★'; }
  else { favBtn.classList.remove('on'); favBtn.textContent = '☆'; }
  drAnswered = false;
}

function drAns(i, btn) {
  if (drAnswered) return;
  drAnswered = true;
  const idx = drCurrent[drI];
  const q = DRILL_DATA[idx];
  const opts = document.getElementById('dr-opts').children;
  const correct = (i === q.ok);
  if (correct) {
    btn.classList.add('ok');
    drStreak++;
    if (drStreak >= 5) unlockAch('streaker');
    const d = lsLoad();
    d.drillCorrect = (d.drillCorrect || 0) + 1;
    d.maxStreak = Math.max(d.maxStreak || 0, drStreak);
    d.drillTotal = (d.drillTotal || 0) + 1;
    lsSave(d);
  } else {
    btn.classList.add('ng');
    opts[q.ok].classList.add('ok');
    drStreak = 0;
    const d = lsLoad();
    d.drillTotal = (d.drillTotal || 0) + 1;
    lsSave(d);
  }
  document.getElementById('dr-streak').textContent = drStreak;
  const fb = document.getElementById('dr-fb');
  fb.classList.add('show', correct ? 'ok' : 'ng');
  fb.innerHTML = (correct ? '✅ Točno! ' : '❌ Netočno. ') + q.exp;
  document.getElementById('dr-next').classList.add('show');
  document.getElementById('dr-hint-btn').classList.remove('show');
  Array.from(opts).forEach(o => o.onclick = null);
  updateStatsPanel();
}

function drShowHint() {
  const idx = drCurrent[drI];
  const hint = DRILL_HINTS[idx] || DRILL_DATA[idx].exp;
  document.getElementById('dr-hint-t').innerHTML = hint;
  document.getElementById('dr-hint').classList.add('show');
  document.getElementById('dr-hint-btn').classList.remove('show');
}

function drNext() {
  drI++;
  if (drI >= drCurrent.length) {
    lsUpdate('drillCompleted', true);
    updateProg();
    toast('🎯 Drill ciklus završen — streak: ' + drStreak, 'ok', 3000);
    drI = 0;
  }
  drShow();
}

function drGoTo(realIdx) {
  // Ako idx nije u current filteru, prebaci na 'all'
  let pos = drCurrent.indexOf(realIdx);
  if (pos < 0) {
    drFilter_v = 'all';
    document.querySelectorAll('.dr-filter').forEach(b => b.classList.remove('on'));
    const allBtn = document.querySelector('.dr-filter[onclick*="all"]');
    if (allBtn) allBtn.classList.add('on');
    drBuildQueue();
    pos = drCurrent.indexOf(realIdx);
  }
  if (pos >= 0) {
    drI = pos;
    drShow();
    document.getElementById('fav-panel').classList.remove('show');
    const dw = document.querySelector('.drill-wrap');
    if (dw) window.scrollTo({top: dw.offsetTop - 20, behavior:'smooth'});
  }
}

// ─── TIMER ─────────────────────────────────────────────────────
let tiSec = 600;
let tiInterval = null;

function timerToggle() {
  const btn = document.getElementById('timer-b');
  if (tiInterval) {
    clearInterval(tiInterval); tiInterval = null;
    btn.textContent = '▶ Resume'; btn.classList.remove('active');
  } else {
    tiInterval = setInterval(tiTick, 1000);
    btn.textContent = '⏸ Pause'; btn.classList.add('active');
    const q = document.getElementById('quiz-wrap');
    if (q && q.classList.contains('locked')) {
      q.classList.remove('locked');
      document.getElementById('quiz-go').disabled = false;
      document.querySelectorAll('.qb').forEach(b => b.classList.remove('qb-locked'));
      toast('⏱ Timer pokrenut — kviz otključan', 'info', 2200);
    }
  }
}

function tiTick() {
  tiSec--;
  const m = Math.floor(tiSec / 60), s = tiSec % 60;
  const d = document.getElementById('timer-d');
  d.textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
  d.classList.remove('warn', 'crit');
  if (tiSec <= 60) d.classList.add('crit');
  else if (tiSec <= 180) d.classList.add('warn');
  if (tiSec <= 0) {
    clearInterval(tiInterval); tiInterval = null;
    d.textContent = '00:00';
    toast('⏰ Vrijeme isteklo!', 'warn', 3000);
    document.getElementById('timer-b').textContent = '▶ Start';
    document.getElementById('timer-b').classList.remove('active');
  }
}

// ─── KVIZ ──────────────────────────────────────────────────────
let quizAns = {};
let retryMode = false;
let retryIdxs = [];

function renderQuiz() {
  const body = document.getElementById('quiz-body');
  if (!body) return;
  const items = retryMode ? retryIdxs.map(i => ({q: QUIZ_DATA[i], idx: i})) : QUIZ_DATA.map((q, idx) => ({q, idx}));
  body.innerHTML = items.map(item => {
    const q = item.q;
    return '<div class="qb qb-locked" id="qb' + item.idx + '">' +
      '<div class="qb-no">PITANJE ' + (item.idx + 1) + '</div>' +
      '<div class="qb-q">' + q.q + '</div>' +
      '<div class="qb-opts">' + q.opts.map((o, i) => '<button class="qb-opt" onclick="qOpt(' + item.idx + ',' + i + ',this)">' + o + '</button>').join('') + '</div>' +
      '<div class="qb-exp" id="qb-exp' + item.idx + '"><strong>Objašnjenje:</strong> ' + q.exp + '</div>' +
    '</div>';
  }).join('');
}

function qOpt(qi, i, btn) {
  if (quizAns[qi] !== undefined) return;
  quizAns[qi] = i;
  btn.classList.add('sel');
  document.querySelectorAll('#qb' + qi + ' .qb-opt').forEach(b => b.onclick = null);
  const done = Object.keys(quizAns).length;
  const total = retryMode ? retryIdxs.length : QUIZ_DATA.length;
  document.getElementById('qz-done').textContent = done;
  if (done === total) document.getElementById('quiz-go').disabled = false;
  // Live streak tracking
  updateQuizStreak(qi, i);
}

// ═══ STREAK COUNTER ═══
let quizStreakCount = 0;
function updateQuizStreak(qi, userAns) {
  const q = QUIZ_DATA[qi];
  if (!q) return;
  const correct = (userAns === q.ok);
  if (correct) quizStreakCount++;
  else quizStreakCount = 0;
  
  const badge = document.getElementById('quiz-streak');
  const num = document.getElementById('quiz-streak-n');
  if (!badge || !num) return;
  num.textContent = quizStreakCount;
  badge.classList.remove('zero', 'fire');
  if (quizStreakCount === 0) badge.classList.add('zero');
  else if (quizStreakCount >= 3) badge.classList.add('fire');
  
  if (quizStreakCount === 5 && typeof unlockAch === 'function') {
    unlockAch('streaker', '🔥 Niz od 5!');
  }
}

function qa() {
  let score = 0;
  const breakdown = [];
  const totalN = retryMode ? retryIdxs.length : QUIZ_DATA.length;
  const indices = retryMode ? retryIdxs : QUIZ_DATA.map((_, i) => i);
  indices.forEach(idx => {
    const q = QUIZ_DATA[idx];
    const userAns = quizAns[idx];
    const opts = document.querySelectorAll('#qb' + idx + ' .qb-opt');
    if (userAns === q.ok) { score++; opts[userAns].classList.add('ok'); breakdown.push({i: idx, ok: true}); }
    else {
      if (userAns !== undefined) opts[userAns].classList.add('ng');
      opts[q.ok].classList.add('ok');
      breakdown.push({i: idx, ok: false});
    }
    const exp = document.getElementById('qb-exp' + idx);
    if (exp) exp.classList.add('show');
  });
  
  const box = document.getElementById('score-box');
  box.classList.add('show');
  document.getElementById('score-n').textContent = score + '/' + totalN;
  const pct = Math.round(score / totalN * 100);
  document.getElementById('score-p').textContent = pct + '%';
  let msg = '';
  if (score === QUIZ_DATA.length && !retryMode) { msg = '🏆 Savršeno! Master parabole.'; unlockAch('perfect'); launchConfetti(); }
  else if (pct >= 75) msg = '✅ Odlično! Spreman/na za maturu.';
  else if (pct >= 50) msg = '💪 Solidno — pregledaj promašene.';
  else msg = '📚 Vrati se na teoriju i SR primjere.';
  document.getElementById('score-m').textContent = msg;
  
  const bd = document.getElementById('score-bd');
  bd.innerHTML = breakdown.map(b => '<div class="score-cell ' + (b.ok ? 'ok' : 'ng') + '">' + (b.i + 1) + '</div>').join('');
  
  const d = lsLoad();
  d.bestScore = Math.max(d.bestScore || 0, score);
  d.quizAttempts = (d.quizAttempts || 0) + 1;
  lsSave(d);
  updateProg();
  
  document.getElementById('quiz-go').disabled = true;
  box.scrollIntoView({behavior:'smooth', block:'center'});
}

function startRetryMode() {
  const wrong = [];
  QUIZ_DATA.forEach((q, idx) => {
    if (quizAns[idx] !== q.ok) wrong.push(idx);
  });
  if (!wrong.length) { toast('Nema promašenih — svi točni!', 'ok', 2000); return; }
  retryMode = true;
  retryIdxs = wrong;
  quizAns = {};
  document.getElementById('score-box').classList.remove('show');
  document.getElementById('quiz-go').disabled = true;
  document.getElementById('qz-done').textContent = '0';
  // Reset streak za retry
  quizStreakCount = 0;
  const sb = document.getElementById('quiz-streak');
  const sn = document.getElementById('quiz-streak-n');
  if (sn) sn.textContent = '0';
  if (sb) { sb.classList.remove('fire'); sb.classList.add('zero'); }
  renderQuiz();
  try {
    if (localStorage.getItem(LS_KEY + '_timerCollapsed') === '1') {
      var _tb = document.getElementById('timer-quiz-body');
      var _tbt = document.getElementById('timer-toggle-btn');
      if (_tb) _tb.classList.add('timer-collapsed');
      if (_tbt) { _tbt.classList.add('collapsed'); var _tl = _tbt.querySelector('.tt-lbl'); if (_tl) _tl.textContent = 'Pokaži'; }
    }
  } catch(e) {}
  // Retry nasljeđuje unlock — ako je kviz-wrap već otključan, ukloni qb-locked
  const qw = document.getElementById('quiz-wrap');
  if (qw && !qw.classList.contains('locked')) {
    document.querySelectorAll('.qb').forEach(b => b.classList.remove('qb-locked'));
  }
  toast('🔄 Retry mode: ' + wrong.length + ' pitanja', 'info', 2500);
  window.scrollTo({top: qw.offsetTop - 20, behavior:'smooth'});
}

function quizReset() {
  retryMode = false;
  retryIdxs = [];
  quizAns = {};
  document.getElementById('score-box').classList.remove('show');
  document.getElementById('qz-done').textContent = '0';
  document.getElementById('quiz-go').disabled = true;
  // Reset streak
  quizStreakCount = 0;
  const sb = document.getElementById('quiz-streak');
  const sn = document.getElementById('quiz-streak-n');
  if (sn) sn.textContent = '0';
  if (sb) { sb.classList.remove('fire'); sb.classList.add('zero'); }
  renderQuiz();
  const qw = document.getElementById('quiz-wrap');
  if (qw && !qw.classList.contains('locked')) {
    document.querySelectorAll('.qb').forEach(b => b.classList.remove('qb-locked'));
  }
}

// ─── CHECKPOINT ────────────────────────────────────────────────
function toggleCP(el) {
  el.classList.toggle('done');
  const done = document.querySelectorAll('.cp-item.done').length;
  const total = document.querySelectorAll('.cp-item').length;
  lsUpdate('cpDone', done);
  updateProg();
  const ready = document.getElementById('cp-ready');
  const hint = document.getElementById('cp-msg-hint');
  if (done === total) {
    ready.classList.add('show');
    if (hint) hint.style.display = 'none';
    unlockAch('master');
  } else {
    ready.classList.remove('show');
    if (hint) hint.style.display = '';
  }
}

// ─── KEYBOARD ─────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === ' ' && document.getElementById('dr-next').classList.contains('show')) {
    e.preventDefault();
    drNext();
  } else if (e.key === 'h' || e.key === 'H') {
    const btn = document.getElementById('dr-hint-btn');
    if (btn && btn.classList.contains('show')) drShowHint();
  } else if (e.key === 'f' || e.key === 'F') {
    const panel = document.getElementById('fav-panel');
    panel.classList.toggle('show');
    if (panel.classList.contains('show')) favRender();
  }
});

// ─── CANVAS RESIZE ────────────────────────────────────────────
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { pbxUpdate(); }, 200);
});

// ─── INIT ──────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {

  // Wire canvas drag events + safety nets
  (function(){
    var c = document.getElementById('pbx-canvas');
    if (!c) return;
    // Canvas events
    c.addEventListener('mousedown', pbxDragStart);
    c.addEventListener('mousemove', pbxDragMove);
    c.addEventListener('touchstart', pbxDragStart, {passive: false});
    c.addEventListener('touchmove', pbxDragMove, {passive: false});
    // End events on document (not just canvas — catches release outside)
    document.addEventListener('mouseup', pbxDragEnd);
    document.addEventListener('touchend', pbxDragEnd);
    document.addEventListener('touchcancel', pbxDragEnd);
    // Safety: window blur (alt-tab during drag), pointer events, escape key
    window.addEventListener('blur', pbxDragEnd);
    document.addEventListener('pointerup', pbxDragEnd);
    document.addEventListener('keydown', function(ev){
      if (ev.key === 'Escape' && pbxDragState.active) pbxDragEnd(ev);
    });
  })();

  // Bottom nav initial sync
  setTimeout(() => {
    const activeTop = document.querySelector('.tabs .tab.on');
    let activeIdx = 0;
    if (activeTop) {
      const all = Array.from(document.querySelectorAll('.tabs .tab'));
      activeIdx = all.indexOf(activeTop);
      if (activeIdx < 0) activeIdx = 0;
    }
    document.querySelectorAll('.bn-tab').forEach(b => b.classList.remove('on'));
    const bnt = document.querySelector('.bn-tab[data-tab="' + activeIdx + '"]');
    if (bnt) bnt.classList.add('on');
  }, 80);
  
  // Visits counter
  const d = lsLoad();
  d.visits = (d.visits || 0) + 1;
  if (d.visits >= 2 && !d.welcomeClosed) {
    // already show welcome
  }
  lsSave(d);
  
  // Welcome samo prvi put (dok ga user ne zatvori)
  if (!d.welcomeClosed) {
    setTimeout(() => {
      const w = document.getElementById('welcome');
      if (w) w.classList.add('show');
    }, 400);
  }
  
  // Restore banner: disabled — always start on tab 0
  
  // From banner
  const urlParams = new URLSearchParams(window.location.search);
  const from = urlParams.get('from');
  if (from) {
    const fb = document.getElementById('from-banner');
    const msg = document.getElementById('from-msg');
    if (fb && msg) {
      msg.innerHTML = '← Stigao/la si iz poglavlja <strong>' + from + '</strong>. Dobrodošao/la u kvadratnu funkciju. i log. funkciju.';
      fb.classList.add('show');
    }
  }
  
  // Init PBX sliders — listeners
  ['pbx-a','pbx-b','pbx-c'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', pbxUpdate);
  });
  
  // Canvas drag
  const canvas = document.getElementById('pbx-canvas');
  if (canvas) {
    canvas.addEventListener('mousedown', pbxDragStart);
    canvas.addEventListener('mousemove', pbxDragMove);
    canvas.addEventListener('mouseup', pbxDragEnd);
    canvas.addEventListener('mouseleave', pbxDragEnd);
    canvas.addEventListener('touchstart', pbxDragStart, {passive:false});
    canvas.addEventListener('touchmove', pbxDragMove, {passive:false});
    canvas.addEventListener('touchend', pbxDragEnd);
    // Safety net: stop drag even if cursor leaves canvas
    document.addEventListener('mouseup', pbxDragEnd);
    document.addEventListener('touchend', pbxDragEnd);
  }
  
  // Render data-driven UI
  renderGon();
  try {
    if (localStorage.getItem(LS_KEY + '_gonCollapsed') === '1') {
      var _gb = document.getElementById('gon-body');
      var _gtb = document.getElementById('gon-toggle-btn');
      if (_gb) _gb.classList.add('gon-collapsed');
      if (_gtb) { _gtb.classList.add('collapsed'); var _gl = _gtb.querySelector('.gt-lbl'); if (_gl) _gl.textContent = 'Pokaži'; }
    }
  } catch(e) {}
  drBuildQueue();
  drShow();
  renderQuiz();
  favRender();
  
  // Animacija
  animateHero();
  
  // Prvi PBX render
  pbxUpdate();
  
  updateProg();
  
  // Welcome na 2. posjeti — toast umjesto welcome boxa ako je već zatvorio
  if (d.visits >= 2 && d.welcomeClosed) {
    setTimeout(() => toast('👋 Dobro došao natrag — posjeta #' + d.visits, 'info', 2500), 800);
  }
});

// ═══════════════════════════════════════════════════════════════
// FORMULA DECODER — klikni simbol → prikaži značenje
// ═══════════════════════════════════════════════════════════════
const FD_EXPLANATIONS = [
  { title: 'x — nultočka',
    body: '<strong>x</strong> je vrijednost varijable za koju je f(x) = 0 — drugim riječima, mjesto gdje parabola siječe x-os. Formula daje 0, 1 ili 2 rješenja, ovisno o D.' },
  { title: 'b — linearni koeficijent',
    body: '<strong>b</strong> je koeficijent uz x u ax² + bx + c. Zajedno s a određuje položaj osi simetrije: x = −b/(2a). Znak b pomiče tjeme lijevo/desno.' },
  { title: 'D — diskriminanta',
    body: '<strong>D = b² − 4ac</strong>. Ispod korijena u kvadratnoj formuli. Njen znak određuje broj realnih nultočaka: D&gt;0 → 2, D=0 → 1 (dvostruka), D&lt;0 → 0 (parabola ne siječe x-os). Ključna za odlučivanje bez eksplicitnog rješavanja.' },
  { title: 'a — vodeći koeficijent',
    body: '<strong>a</strong> je koeficijent uz x² i određuje <em>orijentaciju</em> parabole: a&gt;0 → otvorena gore (min u tjemenu), a&lt;0 → dolje (max). Veličina |a| određuje "širinu" — veliki |a| = uska, mali = široka. a ≠ 0 (inače nije kvadratna).' }
];

function decodeSym(el, idx, symBtn) {
  // Clear all active
  document.querySelectorAll('.fd-formula-big .fd-hot').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.fd-sym').forEach(s => s.classList.remove('active'));
  // Activate clicked
  const hot = document.querySelector('.fd-formula-big .fd-hot[data-sym="' + idx + '"]');
  if (hot) hot.classList.add('active');
  const symBtns = document.querySelectorAll('.fd-sym');
  if (symBtns[idx]) symBtns[idx].classList.add('active');
  // Show explain
  const exp = document.getElementById('fd-exp');
  if (!exp) return;
  const info = FD_EXPLANATIONS[idx];
  if (!info) return;
  exp.innerHTML = '<strong>' + info.title + '</strong><br><span style="font-size:12.5px">' + info.body + '</span>';
  exp.classList.add('show');
}

// ═══════════════════════════════════════════════════════════════
// BUG DETECTION GAME — 4 tipične greške
// ═══════════════════════════════════════════════════════════════
const BUG_ANSWERS = {
  1: { correct: 1, explain: {
        0: '✗ Krivo — provjeri formulu D = b² − 4ac. a je koeficijent uz x², ovdje a = 2, ne 1.',
        1: '✓ Točno! Klasična greška — zaboraviti a u 4ac. Za 2x² − 3x + 1: a = 2, b = −3, c = 1. D = (−3)² − 4·<strong>2</strong>·1 = 9 − 8 = 1. Nultočke: x = (3 ± 1)/4 = 1 ili 1/2.',
        2: '✗ Formula je b² − 4ac, ne b² + 4ac. Znak minus je bitan.'
      }},
  2: { correct: 1, explain: {
        0: '✗ x₁+x₂ nije jednaka b već −b/a. Znak minus je ključan.',
        1: '✓ Točno! Vièteova formula je x₁+x₂ = <strong>−b/a</strong>. Za x² − 5x + 6: b = −5, pa −b/a = 5. Provjera: nultočke su 2 i 3, 2+3 = 5 ✓. Greška je u zaboravljanju minusa koji pretvara −5 → +5.',
        2: '✗ Točno je x₁+x₂ = −b/a, ne b. Ako je a = 1, onda −b/a = −b, ali nikad ne samo b.'
      }},
  3: { correct: 1, explain: {
        0: '✗ Orijentacija parabole ovisi o znaku a. Kad je a &lt; 0, sve je "naopako".',
        1: '✓ Točno! Kad je a &lt; 0, parabola je otvorena PREMA DOLJE. Vrh (tjeme) je na vrhu, krila pada dolje. Dakle parabola je IZNAD x-osi IZMEĐU nultočaka, ne vani. Za −x²+4: tjeme V = (0, 4), a nultočke ±2. Rješenje: <strong>−2 &lt; x &lt; 2</strong>.',
        2: '✗ Nejednadžba ima rješenje — parabola siječe x-os u ±2 i ima pozitivan dio između.'
      }},
  4: { correct: 1, explain: {
        0: '✗ p = −b vrijedi samo u specijalnom slučaju a = 1. Za opći slučaj treba 2a u nazivniku.',
        1: '✓ Točno! Formula za x-koord. tjemena je <strong>p = −b/(2a)</strong>. Za 3x² − 12x + 5: a = 3, b = −12. p = 12/(2·3) = 2. Student je zaboravio podijeliti s 2a. Provjera: f(2) = 12 − 24 + 5 = −7, pa V = (2, −7).',
        2: '✗ Formula je −b/(2a), ne b/(2a). Znak minus.'
      }}
};

function bugAns(bugId, choiceIdx, btn) {
  const state = BUG_ANSWERS[bugId];
  if (!state) return;
  const opts = document.querySelectorAll('#bug' + bugId + '-opts .bug-opt');
  if (opts.length === 0 || opts[0].classList.contains('dis')) return;  // already answered
  
  const isCorrect = (choiceIdx === state.correct);
  
  // Disable all
  opts.forEach(o => o.classList.add('dis'));
  // Mark chosen
  btn.classList.add(isCorrect ? 'ok' : 'ng');
  // Highlight correct (if user was wrong)
  if (!isCorrect) {
    opts[state.correct].classList.add('ok');
  }
  
  // Show explanation
  const exp = document.getElementById('bug' + bugId + '-exp');
  if (exp) {
    exp.classList.remove('ok', 'ng');
    exp.classList.add(isCorrect ? 'ok' : 'ng', 'show');
    exp.innerHTML = state.explain[choiceIdx] || '';
  }
  
  // Progress tracking
  try {
    const d = lsLoad();
    d.bugsSolved = d.bugsSolved || {};
    d.bugsSolved[bugId] = isCorrect;
    const totalSolved = Object.values(d.bugsSolved).filter(Boolean).length;
    if (totalSolved >= 3 && !d.bugMaster) {
      d.bugMaster = true;
      if (typeof unlockAch === 'function') unlockAch('bug-hunter', '🐛 Bug Hunter — 3 greške prepoznate!');
    }
    lsSave(d);
    updateProg();
  } catch(e) {}
}

// ═══════════════════════════════════════════════════════════════
// MATCH GAME — spoji log ↔ vrijednost
// ═══════════════════════════════════════════════════════════════
let matchState = { selected: null, score: 0 };

function matchClick(btn) {
  if (btn.classList.contains('matched') || btn.classList.contains('dis')) return;
  
  const pair = btn.getAttribute('data-pair');
  const side = btn.getAttribute('data-side');
  
  // First click — select
  if (!matchState.selected) {
    document.querySelectorAll('.match-btn.sel').forEach(b => b.classList.remove('sel'));
    btn.classList.add('sel');
    matchState.selected = { pair, side, el: btn };
    return;
  }
  
  // If same button clicked twice — deselect
  if (matchState.selected.el === btn) {
    btn.classList.remove('sel');
    matchState.selected = null;
    return;
  }
  
  // If same side clicked — switch selection
  if (matchState.selected.side === side) {
    matchState.selected.el.classList.remove('sel');
    btn.classList.add('sel');
    matchState.selected = { pair, side, el: btn };
    return;
  }
  
  // Different side → check match
  const firstBtn = matchState.selected.el;
  const match = (matchState.selected.pair === pair);
  
  if (match) {
    firstBtn.classList.remove('sel');
    firstBtn.classList.add('matched');
    btn.classList.add('matched');
    matchState.score++;
    const scoreEl = document.getElementById('match-score');
    if (scoreEl) scoreEl.textContent = matchState.score;
    matchState.selected = null;
    
    if (matchState.score === 5) {
      try {
        const d = lsLoad();
        if (!d.matchMastered) {
          d.matchMastered = true;
          lsSave(d);
          if (typeof unlockAch === 'function') unlockAch('matcher', '🧩 Match master!');
          if (typeof launchConfetti === 'function') launchConfetti();
        }
      } catch(e) {}
    }
  } else {
    firstBtn.classList.remove('sel');
    btn.classList.add('wrong');
    setTimeout(() => btn.classList.remove('wrong'), 420);
    matchState.selected = null;
  }
}

function matchReset() {
  document.querySelectorAll('.match-btn').forEach(b => {
    b.classList.remove('matched', 'sel', 'wrong', 'dis');
  });
  matchState = { selected: null, score: 0 };
  const scoreEl = document.getElementById('match-score');
  if (scoreEl) scoreEl.textContent = '0';
}

// ─── RESTORE TAB ───────────────────────────────────────────────
// RESTORE TAB: disabled — always start on tab 0


/* ═══ PREMIUM GATES JS ═══ */
window.__pwTier = 'pro';
function openPaywall(feature) {
  const sub = document.getElementById('pw-sub');
  if (sub) {
    const msgs = {
      'ai': 'AI profesor objašnjava svaki korak, rješava tvoje zadatke i prilagođava se tvom ritmu.',
      'test': 'Generiraj personalizirani test iz P09 s AI-om. 10 pitanja po tvojim slabostima, full feedback.',
      'plan': 'AI kreira plan učenja baš za tebe — po slabostima iz vježbanja i rokovima.',
      'default': 'Pristupi AI profesoru, generatorima testova i personaliziranom planu učenja.'
    };
    sub.textContent = msgs[feature] || msgs['default'];
  }
  const m = document.getElementById('paywall-modal');
  if (m) m.classList.add('show');
  try {
    window._pwEvents = window._pwEvents || [];
    window._pwEvents.push({type: 'open', feature: feature || 'default', ts: Date.now()});
    try {
      const ls = lsLoad();
      ls.pwImpressions = (ls.pwImpressions || 0) + 1;
      lsSave(ls);
    } catch(e) {}
  } catch(e) {}
}
function closePaywall() {
  const m = document.getElementById('paywall-modal');
  if (m) m.classList.remove('show');
}
function selectTier(t) {
  window.__pwTier = t;
  document.querySelectorAll('.paywall-tier').forEach(el => el.classList.remove('selected'));
  document.querySelectorAll('.paywall-tier').forEach(el => {
    if (el.textContent.toLowerCase().includes(t)) el.classList.add('pro');
    else el.classList.remove('pro');
  });
  const n = document.getElementById('pw-tier-name');
  if (n) n.textContent = t === 'pro' ? 'Pro' : 'Standard';
}
function goCheckout() {
  // Track conversion intent
  try {
    window._pwEvents = window._pwEvents || [];
    window._pwEvents.push({type: 'checkout_click', tier: window.__pwTier, ts: Date.now()});
    try {
      const ls = lsLoad();
      ls.pwCheckoutClicks = (ls.pwCheckoutClicks || 0) + 1;
      lsSave(ls);
    } catch(e) {}
  } catch(e) {}
  closePaywall();
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({type: 'maturiraj:navigateUrl', url: '/pro'}, '*');
  }
}
// ESC key closes paywall
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePaywall();
});

function openDiscereModal() {
  const m = document.getElementById('discere-modal');
  if (m) m.classList.add('show');
}

function closeDiscereModal() {
  const m = document.getElementById('discere-modal');
  if (m) m.classList.remove('show');
}
</script>

<!-- ═══ BOTTOM NAV ═══ -->

<div style="height:80px" aria-hidden="true"></div>


<!-- ═══ PAYWALL MODAL ═══ -->
<div class="paywall-modal" id="paywall-modal" onclick="if(event.target===this)closePaywall()" role="dialog" aria-modal="true" aria-labelledby="pw-h">
  <div class="paywall-card">
    <button class="paywall-close" onclick="closePaywall()" aria-label="Zatvori">×</button>
    <div class="paywall-h" id="pw-h">💎 Otključaj <span style="background:linear-gradient(135deg,#F59E0B,#F472B6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Pro</span></div>
    <div class="paywall-sub" id="pw-sub">Pristupi AI profesoru, generatorima testova i personaliziranom planu učenja. Otkazivanje bilo kad.</div>
    <div class="paywall-tiers">
      <div class="paywall-tier" onclick="selectTier('standard')">
        <div class="paywall-tier-lbl">Standard</div>
        <div class="paywall-tier-name">Za samostalno učenje</div>
        <div class="paywall-tier-price">9,99€<span class="per"> /mj</span></div>
        <div class="paywall-tier-feat">• Svi Discere simulatori<br>• Sva gradiva u skriptama<br>• AI profesor: 30 poruka/dan</div>
      </div>
      <div class="paywall-tier pro" onclick="selectTier('pro')">
        <div class="paywall-tier-lbl">Pro</div>
        <div class="paywall-tier-name">Za maksimalan uspjeh</div>
        <div class="paywall-tier-price">19,99€<span class="per"> /mj</span></div>
        <div class="paywall-tier-feat">• Sve iz Standard<br>• AI: 200 poruka/dan<br>• Prijemni priprema<br>• AI plan učenja</div>
      </div>
    </div>
    <button class="paywall-cta" onclick="goCheckout()">Nastavi s <span id="pw-tier-name">Pro</span> →</button>
    <div class="paywall-note"><strong>7 dana besplatno</strong> · otkaži bilo kada · bez obveze</div>
  </div>
</div>
<div class="paywall-modal" id="discere-modal" onclick="if(event.target===this)closeDiscereModal()" role="dialog" aria-modal="true">
  <div class="paywall-card">
    <button class="paywall-close" onclick="closeDiscereModal()">×</button>
    <div class="paywall-h">🎯 Discere — <span style="background:linear-gradient(135deg,#34D399,#10B981);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Simulator</span></div>
    <div class="paywall-sub">Simuliraj pravi MAT B ispit. Dostupno uz Standard plan.</div>
    <div class="paywall-tiers">
      <div class="paywall-tier pro"><div class="paywall-tier-lbl">Standard</div><div class="paywall-tier-price">9,99€<span class="per"> /mj</span></div></div>
      <div class="paywall-tier"><div class="paywall-tier-lbl">Pro</div><div class="paywall-tier-price">19,99€<span class="per"> /mj</span></div></div>
    </div>
    <button class="paywall-cta" style="background:linear-gradient(135deg,#34D399,#10B981)" onclick="goCheckout()">Otključaj Discere →</button>
  </div>
</div>
</body>`;

export const P09_META = {
  code: 'P09',
  title: 'Kvadratna funkcija',
  filename: 'Maturiraj_MatB_P09_FIXED.html',
};

export default P09_HTML;