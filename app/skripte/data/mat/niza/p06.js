// Maturiraj MatB — P06 · Kvadratne jednadžbe
// Auto-generated from Maturiraj_MatB_P06_FIXED.html
// Sadrži: cijeli HTML, CSS, JS runtime, sve podatke

export const P06_HTML = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
<meta name="theme-color" content="#060910">
<meta name="description" content="Kvadratna funkcija (P09). f(x) = ax² + bx + c, tjeme, nultočke, diskriminanta, graf parabole, Vièteove formule, nejednadžbe. Parabola Explorer za vizualizaciju, 12 Challenge taskova, 9 SR primjera.">
<title>Maturiraj.hr — Mat B · P06 · Kvadratne jednadžbe</title>
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
#discere-modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;align-items:center;justify-content:center;padding:16px;opacity:0;pointer-events:none;transition:opacity .2s;}#discere-modal.show{opacity:1;pointer-events:all;display:flex;}

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
.gon-prog-wrap{transition:opacity .2s}

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
  <div class="sb-item active"><span class="sb-dot"></span>06 · Kvadratne jednadžbe<div class="sb-progress"><div class="sb-prog-track"><div class="sb-prog-fill" id="sb-prog-fill"></div></div><span class="sb-prog-pct" id="sb-prog-pct">0%</span></div></div>
  <div class="sb-item" onclick="navigateChapter('p07')" style="cursor:pointer"><span class="sb-dot"></span>07 · Sustavi jednadžbi</div>
  <div class="sb-item" onclick="navigateChapter('p08')" style="cursor:pointer"><span class="sb-dot"></span>08 · Linearna funkcija</div>
  <div class="sb-item" onclick="navigateChapter('p09')" style="cursor:pointer"><span class="sb-dot"></span>09 · Kvadratna funkcija</div>
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
    <span class="ch-badge">P / 06</span>
    <h1 class="ch-title"><span class="acc">Kvadratne</span> jednadžbe — diskriminanta, nultočke</h1>
  </div>
  <div class="topbar-R">
    <span class="pill pts">10-14 BODOVA</span>
    <span class="pill time">~60 MIN</span>
    <span class="pill prio">★★★★★</span>
  </div>
</div>

<div class="welcome" id="welcome">
  <div class="welcome-head">
    <h2 class="welcome-h">📐 Kvadratne jednadžbe — srce algebre mature</h2>
    <button class="welcome-x" onclick="closeWelcome()" aria-label="Zatvori">✕</button>
  </div>
  <p class="welcome-t">Kvadratne jednadžbe pokrivaju <strong>10–14 bodova svake mature</strong> — najvažnija tema! Nauči diskriminantu, kvadratnu formulu, Vièteove formule i faktorizaciju. <strong>Kalkulator diskriminante</strong>, 28 Drill pitanja, 9 SR primjera i interaktivni vizualizator.</p>
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
    <span class="hero-kb">P06 · DISKRIMINANTA · NULTOČKE · VIÈTE</span>
    <span class="hero-prio">⭐⭐⭐⭐⭐</span>
  </div>
  <h2 class="hero-h"><span class="acc">Kvadratne</span> jednadžbe — <span class="acc2">ax²+bx+c=0</span></h2>
  <p class="hero-sub">Jednadžba ax² + bx + c = 0. <strong>10–14 bodova svake mature</strong>. Najčešća tema — dolazi s kvadratnom funkcijom (P09) i nejednadžbama (P05).</p>
  
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
    <div class="stat-card"><span class="sc-ico">Δ</span><div class="sc-h">Diskriminanta</div><div class="sc-t">D = b²−4ac. D>0 → 2 rješenja, D=0 → 1, D<0 → nema realnih.</div></div>
    <div class="stat-card"><span class="sc-ico">x</span><div class="sc-h">Kvadratna formula</div><div class="sc-t">x₁,₂ = (−b ± √D) / (2a). Uvijek vrijedi.</div></div>
    <div class="stat-card"><span class="sc-ico">K</span><div class="sc-h">Vièteove formule</div><div class="sc-t">x₁+x₂ = −b/a, x₁·x₂ = c/a. Provjera rješenja.</div></div>
    <div class="stat-card"><span class="sc-ico">≡</span><div class="sc-h">Faktorizacija</div><div class="sc-t">ax²+bx+c = a(x−x₁)(x−x₂). Iz nultočaka.</div></div>
    <div class="stat-card"><span class="sc-ico">≤</span><div class="sc-h">Kvadratna nejednadžba</div><div class="sc-t">Parabola pomaže — rješenje između/izvan nultočaka.</div></div>
    <div class="stat-card"><span class="sc-ico">↔</span><div class="sc-h">Veza P09</div><div class="sc-t">Nultočke = presjek parabole s x-osi.</div></div>
  </div>
</div>

<div class="box-grid">
  <div class="con" data-no="→"><span><strong>Kvadratna jednadžba</strong> ax²+bx+c=0 ima koeficijente a≠0, b, c ∈ ℝ. U ℂ uvijek ima točno 2 rješenja (Temeljni teorem algebre). U ℝ: 0, 1 ili 2.</span></div>
  <div class="con" data-no="→"><span><strong>Diskriminanta D = b²−4ac</strong>: D>0 → 2 realna rješenja, D=0 → 1 dvostruko rješenje x=−b/(2a), D<0 → 0 realnih rješenja.</span></div>
  <div class="con" data-no="→"><span><strong>Kvadratna formula</strong>: x₁,₂ = (−b ± √D) / (2a). Vrijedi za svaku kvadratnu jednadžbu (a≠0).</span></div>
  <div class="con" data-no="→"><span><strong>Vièteove formule</strong>: x₁+x₂ = −b/a i x₁·x₂ = c/a. Korisne za provjeru i rekonstrukciju jednadžbe iz rješenja.</span></div>
  <div class="con" data-no="→"><span><strong>Faktorizacija</strong>: ax²+bx+c = a(x−x₁)(x−x₂). Ako imaš rješenja, možeš rekonstruirati polinom.</span></div>
  <div class="con" data-no="→"><span><strong>Kvadratna nejednadžba</strong>: rješavaš crtanjem parabole — kada je f(x)>0 ili f(x)<0. Veza s P09.</span></div>
</div>

<div class="box-20">
  <div class="box-20-lbl">⚡ 20 sekundi — zapamti ovih 6</div>
  <ul class="box-20-list">
    <li><strong>D = b²−4ac</strong> — uvijek izračunaj D <em>prvi</em>. Tek zatim odlučuješ koliko rješenja ima.</li>
    <li><strong>x₁,₂ = (−b ± √D) / (2a)</strong> — nauči napamet. Za D=0: x=−b/(2a).</li>
    <li><strong>D>0:</strong> 2 realna. D=0: 1 dvostruko. D<0: nema realnih (kompleksna).</li>
    <li><strong>Vièteove:</strong> x₁+x₂ = −b/a, x₁·x₂ = c/a — provjeri uvijek!</li>
    <li><strong>Nepotpuna (b=0):</strong> ax²+c=0 → x²=−c/a → x=±√(−c/a). Nema kvadratne formule!</li>
    <li><strong>Nepotpuna (c=0):</strong> x(ax+b)=0 → x=0 ili x=−b/a. Izvuci x van zagrade.</li>
  </ul>
</div>

<div class="box-for">
  <div class="box-for-lbl">⚙ Ključne formule</div>
  <div class="for-grid">
    <div class="for-item"><span class="lbl">Diskriminanta</span><div class="val">D = b² − 4ac</div></div>
    <div class="for-item"><span class="lbl">Kvadratna formula</span><div class="val">x₁,₂ = (−b ± √D) / (2a)</div></div>
    <div class="for-item"><span class="lbl">Vièteova suma</span><div class="val">x₁ + x₂ = −b / a</div></div>
    <div class="for-item"><span class="lbl">Vièteov produkt</span><div class="val">x₁ · x₂ = c / a</div></div>
  </div>
</div>



<div class="nav-row">
  <span class="nb off">← Nema prethodnog</span>
  <button class="nb primary" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">📐 Uči →</button>
</div>

</section>

<section id="l1" class="sec" role="tabpanel">

<div class="sec-head"><span class="sec-badge">1 / 12</span><h3 class="sec-h">Kvadratna jednadžba — standardni oblik</h3></div>
<div class="sec-body">
  <p><strong>Kvadratna jednadžba</strong> je jednadžba oblika ax² + bx + c = 0 gdje je a ≠ 0. Koeficijent a određuje smjer parabole, b i c su slobodni koeficijenti.</p>
  <div class="callout key"><span class="callout-i">📌</span><div class="callout-t">
    <strong>Standardni oblik: ax² + bx + c = 0 (a ≠ 0)</strong><br>
    → <em>Potpuna (a,b,c ≠ 0):</em> npr. 2x²−5x+3=0<br>
    → <em>Nepotpuna b=0:</em> ax²+c=0, npr. x²−4=0<br>
    → <em>Nepotpuna c=0:</em> ax²+bx=0, npr. 3x²+6x=0<br><br>
    <strong>Prepoznavanje:</strong> prenesi sve na lijevu stranu, sređuješ u standardni oblik.
  </div></div>
  <div class="emph"><strong>Primjer 1:</strong> 2x²=5x−3 → 2x²−5x+3=0. Koeficijenti: a=2, b=−5, c=3.<br>
  <strong>Primjer 2:</strong> x²=16 → x²−16=0 (nepotpuna, b=0). Koeficijenti: a=1, b=0, c=−16.</div>
  <div class="callout tip"><span class="callout-i">💡</span><div class="callout-t"><strong>Pazi:</strong> (x+2)(x−3)=0 nije u standardnom obliku — razvij u x²−x−6=0. Tek tada čitaš a=1, b=−1, c=−6.</div></div>
</div>

<div class="sec-head"><span class="sec-badge">2 / 12</span><h3 class="sec-h">Diskriminanta D = b²−4ac</h3></div>
<div class="sec-body">
  <p><strong>Diskriminanta D</strong> određuje koliko realnih rješenja ima kvadratna jednadžba — bez da ih računaš.</p>
  <div class="callout key"><span class="callout-i">📐</span><div class="callout-t">
    <strong>D = b² − 4ac</strong><br>
    → D > 0: dva različita realna rješenja (x₁ ≠ x₂)<br>
    → D = 0: jedno dvostruko realno rješenje (x = −b/2a)<br>
    → D &lt; 0: nema realnih rješenja
  </div></div>
  <div class="emph"><strong>Primjer 1:</strong> x²−5x+6=0. D = 25−24 = 1 > 0 → dva rješenja.<br>
  <strong>Primjer 2:</strong> x²−2x+1=0. D = 4−4 = 0 → jedno dvostruko (x=1).<br>
  <strong>Primjer 3:</strong> x²+x+1=0. D = 1−4 = −3 &lt; 0 → nema realnih.</div>
  <div class="callout warn"><span class="callout-i">⚠️</span><div class="callout-t"><strong>Redoslijed:</strong> UVIJEK izračunaj D <em>PRVI</em> — ne kreći s formulom dok ne znaš koliko rješenja ima. Ako D&lt;0, odmah napiši "nema realnih rješenja".</div></div>
</div>

<div class="sec-head"><span class="sec-badge">3 / 12</span><h3 class="sec-h">Kvadratna formula</h3></div>
<div class="sec-body">
  <p>Kvadratna formula daje obje nultočke direktno iz koeficijenata. Vrijedi za svaku kvadratnu jednadžbu.</p>
  <div class="callout key"><span class="callout-i">📌</span><div class="callout-t">
    <strong>x₁,₂ = (−b ± √D) / (2a)</strong><br>
    Za D > 0: x₁ = (−b + √D)/(2a) i x₂ = (−b − √D)/(2a)<br>
    Za D = 0: x = −b/(2a)<br>
    Za D &lt; 0: nema realnih rješenja
  </div></div>
  <div class="emph"><strong>Primjer:</strong> 2x²−5x+3=0. a=2, b=−5, c=3. D = 25−24 = 1.<br>
  x₁ = (5+1)/4 = 3/2. x₂ = (5−1)/4 = 1.<br>
  Provjera Viète: 3/2+1 = 5/2 = −(−5)/2 ✓. (3/2)·1 = 3/2 = 3/2 ✓.</div>
</div>

<div class="sec-head"><span class="sec-badge">4 / 12</span><h3 class="sec-h">Vièteove formule — provjera rješenja</h3></div>
<div class="sec-body">
  <p><strong>Vièteove formule</strong> povezuju koeficijente s nultočkama — bez direktnog računanja. Ključne za provjeru.</p>
  <div class="callout key"><span class="callout-i">📐</span><div class="callout-t">
    Za ax²+bx+c=0 s rješenjima x₁, x₂:<br>
    → <strong>x₁ + x₂ = −b/a</strong><br>
    → <strong>x₁ · x₂ = c/a</strong><br><br>
    <em>Rekonstrukcija jednadžbe:</em> x²−(x₁+x₂)x + x₁x₂ = 0 (za a=1)
  </div></div>
  <div class="emph"><strong>Primjer 1 (provjera):</strong> x²−7x+12=0. Rješenja x₁=3, x₂=4.<br>
  3+4=7=−(−7)/1 ✓ i 3·4=12 ✓<br>
  <strong>Primjer 2 (rekonstrukcija):</strong> rješenja −2 i 5: x²−3x−10=0.</div>
</div>

<div class="sec-head"><span class="sec-badge">5 / 12</span><h3 class="sec-h">Faktorizacija kvadratnog polinoma</h3></div>
<div class="sec-body">
  <p>Kvadratni polinom ax²+bx+c s nultočkama x₁, x₂ faktorizira se kao <strong>a(x−x₁)(x−x₂)</strong>.</p>
  <div class="callout key"><span class="callout-i">📌</span><div class="callout-t">
    <strong>ax²+bx+c = a(x−x₁)(x−x₂)</strong><br>
    Koraci: 1) nađi nultočke kvadratnom formulom, 2) uvrsti.<br><br>
    <strong>Posebni slučajevi (bez formule):</strong><br>
    → Razlika kvadrata: x²−a² = (x+a)(x−a)<br>
    → Savršeni kvadrat: x²±2ax+a² = (x±a)²
  </div></div>
  <div class="emph"><strong>Primjer 1:</strong> 2x²−5x+3 = 2(x−3/2)(x−1) = (2x−3)(x−1).<br>
  <strong>Primjer 2:</strong> x²−9 = (x+3)(x−3).<br>
  <strong>Primjer 3:</strong> x²+6x+9 = (x+3)².</div>
</div>
<!-- ═══ PREMIUM GATE: AI PROFESOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Zaglavio si na kvadratnim jednadžbama? Pitaj me što god — objašnjenje po koracima, prilagođeno tebi.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Kada je D<0?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Vièteove formule?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Rastavni oblik?</span>
  </div>
  <div class="pg-ai-bubble">
    Kvadratne jednadžbe — <strong>diskriminanta, Vièteove formule, rastav</strong>, prilagodim objašnjenje tvojoj razini<span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora →</button>
</div>

<div class="sec-head"><span class="sec-badge">6 / 12</span><h3 class="sec-h">Nepotpune kvadratne jednadžbe</h3></div>
<div class="sec-body">
  <p>Kad b=0 ili c=0, jednadžba je nepotpuna i rješava se brže nego kvadratnom formulom.</p>
  <div class="callout key"><span class="callout-i">📐</span><div class="callout-t">
    <strong>c=0:</strong> ax²+bx=0 → x(ax+b)=0 → x=0 ili x=−b/a<br>
    (Uvijek je jedno rješenje x=0!)<br><br>
    <strong>b=0:</strong> ax²+c=0 → x²=−c/a<br>
    → −c/a > 0: x = ±√(−c/a)<br>
    → −c/a = 0: x = 0<br>
    → −c/a &lt; 0: nema realnih
  </div></div>
  <div class="emph"><strong>Primjer 1 (c=0):</strong> 3x²+6x=0 → x(3x+6)=0 → x=0 ili x=−2.<br>
  <strong>Primjer 2 (b=0):</strong> 4x²−25=0 → x²=25/4 → x=±5/2.</div>
  <div class="callout warn"><span class="callout-i">⚠️</span><div class="callout-t"><strong>Nikad ne dijeli s x!</strong> Za ax²+bx=0, izvuci zajednički faktor — ne dijeli s x jer gubiš rješenje x=0.</div></div>
</div>

<div class="sec-head"><span class="sec-badge">7 / 12</span><h3 class="sec-h">Kvadratna nejednadžba</h3></div>
<div class="sec-body">
  <p>Kvadratna nejednadžba traži kada je f(x)=ax²+bx+c pozitivan ili negativan. Rješenje čitaš s parabole.</p>
  <div class="callout key"><span class="callout-i">📌</span><div class="callout-t">
    <strong>Koraci:</strong> 1) nađi nultočke x₁ &lt; x₂, 2) skiciraj parabolu (a>0="osmijeh"), 3) čitaj:<br>
    → a>0, f(x)&lt;0: x ∈ (x₁, x₂) — između nultočaka<br>
    → a>0, f(x)>0: x ∈ (−∞,x₁) ∪ (x₂,+∞) — izvan<br>
    → Za a&lt;0: obrnuto.
  </div></div>
  <div class="emph"><strong>Primjer:</strong> x²−5x+6 &lt; 0. Nultočke: x₁=2, x₂=3. a=1>0.<br>
  f(x)&lt;0 između nultočaka → <em>x ∈ (2, 3)</em>.</div>
</div>

<div class="sec-head"><span class="sec-badge">8 / 12</span><h3 class="sec-h">Veza s kvadratnom funkcijom</h3></div>
<div class="sec-body">
  <p>Nultočke jednadžbe ax²+bx+c=0 su presjeci parabole f(x)=ax²+bx+c s x-osi.</p>
  <div class="callout key"><span class="callout-i">📐</span><div class="callout-t">
    → D>0 ↔ parabola siječe x-os u 2 točke<br>
    → D=0 ↔ parabola dotiče x-os (tjeme na x-osi)<br>
    → D&lt;0 ↔ parabola ne siječe x-os<br>
    <strong>Tjeme:</strong> T = (−b/2a, −D/4a). x-koordinata tjemena = sredina nultočaka.
  </div></div>
  <div class="emph"><strong>Primjer:</strong> f(x)=x²−6x+5. Nultočke: x₁=1, x₂=5. Tjeme: x_T=(1+5)/2=3, f(3)=−4. T=(3,−4).</div>
</div>

<div class="sec-head"><span class="sec-badge">9 / 12</span><h3 class="sec-h">📊 Interaktivni vizualizator — parabola i nultočke</h3></div>
<div class="sec-body">
  <p>Mijenjaj koeficijente a, b, c — parabola i nultočke se ažuriraju u realnom vremenu.</p>
  <div class="pbx-wrap">
    <div class="pbx-head"><span class="pbx-title">diskriminanta explorer</span><span class="pbx-badge">LIVE</span></div>
    <div class="pbx-mode-tabs">
      <button class="pbx-mode-tab on" onclick="pbxSetMode(0,this)">📐 Parabola + D</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(1,this)">📊 Rješenja + Viète</button>
    </div>
    <div class="pbx-canvas-wrap">
      <div class="pbx-drag-hint">✥ povuci za ugađanje</div>
      <canvas class="pbx-canvas" id="pbx-canvas" width="640" height="360" aria-label="Kvadratna jednadžba vizualizator"></canvas>
      <div class="pbx-zoom">
        <button class="pbx-zoom-btn" onclick="pbxZoom(1)">+</button>
        <button class="pbx-zoom-btn" onclick="pbxZoom(-1)">−</button>
        <button class="pbx-zoom-btn" onclick="pbxZoom(0)" style="font-size:11px">⌂</button>
      </div>
      <div class="pbx-zoom-lbl" id="pbx-zoom-lbl">1.0×</div>
    </div>
    <div class="pbx-controls" id="pbx-free-ctrl">
      <div class="pbx-ctrl"><div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Koeficijent a</span><span class="pbx-ctrl-val" id="pbx-a-val">1</span></div><input type="range" id="pbx-a" min="-3" max="3" step="0.1" value="1" oninput="pbxUpdate()" style="width:100%"></div>
      <div class="pbx-ctrl"><div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Koeficijent b</span><span class="pbx-ctrl-val" id="pbx-b-val">-5</span></div><input type="range" id="pbx-b" min="-10" max="10" step="0.5" value="-5" oninput="pbxUpdate()" style="width:100%"></div>
      <div class="pbx-ctrl"><div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Koeficijent c</span><span class="pbx-ctrl-val" id="pbx-c-val">6</span></div><input type="range" id="pbx-c" min="-10" max="10" step="0.5" value="6" oninput="pbxUpdate()" style="width:100%"></div>
      <div class="pbx-ctrl"><div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Diskriminanta D</span><span class="pbx-ctrl-val ok" id="pbx-angles-val">1</span></div><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">b²−4ac</div></div>
      <div class="pbx-ctrl"><div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Rješenja</span><span class="pbx-ctrl-val" id="pbx-area-val" style="color:var(--green)">x₁=2, x₂=3</span></div><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">nultočke parabole</div></div>
      <div class="pbx-ctrl"><div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Viète provjera</span><span class="pbx-ctrl-val" id="pbx-peri-val" style="color:var(--cyan)">Σ=5, Π=6</span></div><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">zbroj i produkt</div></div>
    </div>
    <div class="pbx-presets">
      <button class="pbx-preset" onclick="pbxPreset('d_pos',this)">D>0 (2 rješenja)</button>
      <button class="pbx-preset" onclick="pbxPreset('d_zero',this)">D=0 (1 rješenje)</button>
      <button class="pbx-preset" onclick="pbxPreset('d_neg',this)">D&lt;0 (bez rješenja)</button>
      <button class="pbx-preset" onclick="pbxPreset('neg_a',this)">a&lt;0 (tužno lice)</button>
      <button class="pbx-preset" onclick="pbxPreset('incomplete',this)">Nepotpuna (c=0)</button>
      <button class="pbx-preset" onclick="pbxPreset('classic',this)">Klasična 2x²−5x+3</button>
    </div>
    <div class="pbx-legend">
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#4D9EFF"></span>parabola</span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#F59E0B"></span>tjeme</span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#34D399"></span>nultočke</span>
    </div>
    <div class="pbx-info" id="pbx-info">Pomakni slidere da promijeniš jednadžbu.</div>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;flex-wrap:wrap">
      <button class="pbx-challenge-toggle" id="pbx-challenge-btn" onclick="pbxChallengeToggle()">🎯 Pokreni izazov (12 taskova)</button>
    </div>
    <div class="pbx-challenge-wrap" id="pbx-challenge">
      <div class="pbx-challenge-head"><span class="pbx-challenge-lbl">🎯 Izazov</span><span class="pbx-challenge-stats"><strong id="pbx-ch-score">0</strong> / <strong id="pbx-ch-tot">0</strong></span></div>
      <div class="pbx-challenge-task" id="pbx-challenge-task">Klikni "Pokreni" da krene izazov.</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="pbx-btn" style="border-color:var(--bd-p);color:var(--pink)" onclick="pbxChallengeCheck()">Provjeri</button>
        <button class="pbx-btn" onclick="pbxChallengeNext()">Novi izazov →</button>
      </div>
      <div class="pbx-challenge-fb" id="pbx-challenge-fb"></div>
    </div>
  </div>
</div>

<div class="sec-head"><span class="sec-badge">10 / 12</span><h3 class="sec-h">📝 NCVVO zadaci iz mature</h3></div>
<div class="sec-body">
  <div class="ncvvo-wrap">
    <div class="ncvvo-item"><div class="ncvvo-no">1</div><div class="ncvvo-content">
      <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2024 LJETO · Zadatak 14 · 4 boda</div>
      <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Odredi rješenja jednadžbe x² − 7x + 12 = 0.<br>
      <span style="font-family:var(--mono);font-size:11px;color:var(--t2)">→ D = 49−48 = 1. x₁=(7+1)/2=4, x₂=(7−1)/2=3. Provjera: 4+3=7 ✓, 4·3=12 ✓.</span></div>
    </div></div>
    <div class="ncvvo-item"><div class="ncvvo-no">2</div><div class="ncvvo-content">
      <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2023 LJETO · Zadatak 12 · 3 boda</div>
      <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Kolika je diskriminanta jednadžbe 3x² − 6x + 4 = 0 i koliko ima realnih rješenja?<br>
      <span style="font-family:var(--mono);font-size:11px;color:var(--t2)">→ D = 36 − 48 = −12 &lt; 0. Jednadžba <strong>nema realnih rješenja</strong>.</span></div>
    </div></div>
    <div class="ncvvo-item"><div class="ncvvo-no">3</div><div class="ncvvo-content">
      <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2022 LJETO · Zadatak 15 · 4 boda</div>
      <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Zbroj i produkt rješenja jednadžbe 2x² + 6x − 8 = 0.<br>
      <span style="font-family:var(--mono);font-size:11px;color:var(--t2)">→ Zbroj = −6/2 = −3. Produkt = −8/2 = −4.</span></div>
    </div></div>
    <div class="ncvvo-item"><div class="ncvvo-no">4</div><div class="ncvvo-content">
      <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2021 LJETO · Zadatak 13 · 4 boda</div>
      <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Faktorizuraj polinom x² − 3x − 10.<br>
      <span style="font-family:var(--mono);font-size:11px;color:var(--t2)">→ D=49. x₁=5, x₂=−2. Faktorizacija: <strong>(x−5)(x+2)</strong>.</span></div>
    </div></div>
  </div>

  <div class="fd-wrap">
    <div class="fd-head"><span class="fd-title">🔍 Formula Decoder — kvadratna formula</span></div>
    <div class="fd-body">
      <div class="fd-formula-big">
        <span class="fd-hot" onclick="decodeSym(this,0)" style="color:var(--cyan)">x</span> = <span class="fd-hot" onclick="decodeSym(this,1)" style="color:var(--green)">−b</span> ± <span class="fd-hot" onclick="decodeSym(this,2)" style="color:var(--amber)">√D</span> / <span class="fd-hot" onclick="decodeSym(this,3)" style="color:var(--pink)">2a</span>
      </div>
      <div class="fd-symbols">
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),0,this)"><span class="fd-sym-letter" style="color:var(--cyan)">x</span><span class="fd-sym-name">nultočka / rješenje</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),1,this)"><span class="fd-sym-letter" style="color:var(--green)">−b</span><span class="fd-sym-name">negativni koef. b</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),2,this)"><span class="fd-sym-letter" style="color:var(--amber)">√D</span><span class="fd-sym-name">korijen diskriminante</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),3,this)"><span class="fd-sym-letter" style="color:var(--pink)">2a</span><span class="fd-sym-name">dvostruki vodeći koef.</span></div>
      </div>
      <div class="fd-explain" id="fd-exp">👆 Klikni simbol da vidiš značenje.</div>
    </div>
  </div>

  <div class="fcard-wrap">
    <div class="fcard-head"><span class="fcard-title">⚙ Formule kvadratnih jednadžbi</span></div>
    <div class="fcard-body">
      <div class="fcard-item"><div class="fcard-formula">D = b² − 4ac</div><div class="fcard-desc"><strong>Diskriminanta</strong> — uvijek prvo.</div></div>
      <div class="fcard-item"><div class="fcard-formula">x = (−b ± √D) / (2a)</div><div class="fcard-desc"><strong>Kvadratna formula</strong>.</div></div>
      <div class="fcard-item"><div class="fcard-formula">x₁ + x₂ = −b/a</div><div class="fcard-desc"><strong>Vièteova suma</strong>.</div></div>
      <div class="fcard-item"><div class="fcard-formula">x₁ · x₂ = c/a</div><div class="fcard-desc"><strong>Vièteov produkt</strong>.</div></div>
      <div class="fcard-item"><div class="fcard-formula">a(x−x₁)(x−x₂)</div><div class="fcard-desc"><strong>Faktorizacija</strong>.</div></div>
      <div class="fcard-item"><div class="fcard-formula">x²−a² = (x+a)(x−a)</div><div class="fcard-desc"><strong>Razlika kvadrata</strong>.</div></div>
      <div class="fcard-item"><div class="fcard-formula">x = −b/(2a) za D=0</div><div class="fcard-desc"><strong>Dvostruko rješenje</strong>.</div></div>
      <div class="fcard-item"><div class="fcard-formula">D &lt; 0 → ∅ u ℝ</div><div class="fcard-desc"><strong>Nema realnih</strong>.</div></div>
    </div>
  </div>
</div>
<!-- ═══ PREMIUM GATE: DISCERE TEST ═══ -->
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

<div class="sec-head"><span class="sec-badge">11 / 12</span><h3 class="sec-h">🧮 Kalkulator diskriminante</h3></div>
<div class="sec-body">
  <p>Unesi koeficijente a, b, c — kalkulator izračuna D, rješenja, Vièteove formule i faktorizaciju.</p>
  <div class="calc-wrap">
    <div class="calc-head"><span class="calc-title">// ax² + bx + c = 0</span></div>
    <div class="calc-tabs" role="tablist">
      <button class="calc-tab on" onclick="p9SwitchMode(0,this)">Kvadratna formula</button>
      <button class="calc-tab" onclick="p9SwitchMode(1,this)">Vièteova provjera</button>
    </div>
    <div class="calc-body">
      <div id="p9-mode-0">
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <span class="calc-lbl">a=</span><input class="calc-in" id="p9c-a" type="number" value="1" style="width:70px" step="any">
          <span class="calc-lbl">b=</span><input class="calc-in" id="p9c-b" type="number" value="-5" style="width:70px" step="any">
          <span class="calc-lbl">c=</span><input class="calc-in" id="p9c-k" type="number" value="6" style="width:70px" step="any">
          <button class="calc-go" onclick="p9calc()">Izračunaj →</button>
        </div>
      </div>
      <div id="p9-mode-1" style="display:none">
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <span class="calc-lbl">x₁=</span><input class="calc-in" id="p9cv-a" type="number" value="2" style="width:80px" step="any">
          <span class="calc-lbl">x₂=</span><input class="calc-in" id="p9cv-q" type="number" value="3" style="width:80px" step="any">
          <input id="p9cv-k" type="hidden" value="1">
          <button class="calc-go" onclick="p9calcVertex()">Izračunaj →</button>
        </div>
      </div>
      <div class="calc-result" id="p9c-r"></div>
    </div>
  </div>
  <div class="calc-wrap" style="margin-top:12px">
    <div class="calc-head"><span class="calc-title">// Iz rješenja → jednadžba</span></div>
    <div class="calc-body">
      <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
        <span class="calc-lbl">a=</span><input class="calc-in" id="p9cft-p" type="number" value="1" style="width:70px" step="any">
        <span class="calc-lbl">b=</span><input class="calc-in" id="p9cft-q" type="number" value="-3" style="width:70px" step="any">
        <span class="calc-lbl">c=</span><input class="calc-in" id="p9cft-n" type="number" value="-10" style="width:70px" step="any">
        <button class="calc-go" onclick="p9calcFromT()">Detaljno →</button>
      </div>
      <div class="calc-result" id="p9c-r2"></div>
    </div>
  </div>
</div>

<div class="sec-head"><span class="sec-badge">12 / 12</span><h3 class="sec-h">📚 Detaljno riješeni primjeri (9 komada)</h3></div>
<div class="sec-body">

  <div class="sr" id="sr1"><div class="sr-head"><span class="sr-no">Primjer 1 · Kvadratna formula</span><span class="sr-pts">3 boda</span></div>
  <div class="sr-q">Riješi jednadžbu: x² − 5x + 6 = 0.</div>
  <button class="sr-try" onclick="tryIt(1)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr1-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> a=1, b=−5, c=6. D = (−5)²−4·1·6 = 25−24 = 1 > 0.</div>
    <div class="sr-step" data-s="2"><strong>Korak 2:</strong> x₁,₂ = (5 ± 1) / 2.</div>
    <div class="sr-step" data-s="3"><strong>Odgovor:</strong> <em>x₁ = 3, x₂ = 2.</em></div>
    <div class="sr-step" data-s="4"><strong>Viète provjera:</strong> 3+2=5 ✓, 3·2=6 ✓.</div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(1)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(1)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr2"><div class="sr-head"><span class="sr-no">Primjer 2 · D = 0</span><span class="sr-pts">3 boda</span></div>
  <div class="sr-q">Odredi rješenja: 4x² − 12x + 9 = 0.</div>
  <button class="sr-try" onclick="tryIt(2)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr2-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> a=4, b=−12, c=9. D = 144−144 = 0.</div>
    <div class="sr-step" data-s="2"><strong>Korak 2:</strong> D=0 → jedno dvostruko rješenje. x = −b/(2a) = 12/8 = 3/2.</div>
    <div class="sr-step" data-s="3"><strong>Provjera:</strong> (2x−3)² = 0 ✓.</div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(2)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(2)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr3"><div class="sr-head"><span class="sr-no">Primjer 3 · D &lt; 0</span><span class="sr-pts">2 boda</span></div>
  <div class="sr-q">Ima li jednadžba x² + 2x + 5 = 0 realnih rješenja?</div>
  <button class="sr-try" onclick="tryIt(3)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr3-steps">
  <div class="sr-step" data-s="1">Identificiraj koeficijente: <strong>a=1, b=2, c=5</strong>. Primijeni formulu D = b² − 4ac.</div>
  <div class="sr-step" data-s="2">Izračunaj: D = 2² − 4·1·5 = 4 − 20 = <strong>−16</strong>.</div>
  <div class="sr-step" data-s="3"><em>Zaključak: D &lt; 0 → jednadžba <strong>NEMA REALNIH rješenja</strong>. U ℝ nema. (Kompleksni korijeni postoje: x = −1 ± 2i, ali to je izvan MatB.)</em></div>
  <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(3)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(3)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr4"><div class="sr-head"><span class="sr-no">Primjer 4 · Nepotpuna (c=0)</span><span class="sr-pts">2 boda</span></div>
  <div class="sr-q">Riješi: 5x² − 10x = 0.</div>
  <button class="sr-try" onclick="tryIt(4)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr4-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> x(5x−10) = 0.</div>
    <div class="sr-step" data-s="2"><strong>Odgovor:</strong> <em>x₁ = 0, x₂ = 2.</em></div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(4)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(4)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr5"><div class="sr-head"><span class="sr-no">Primjer 5 · Nepotpuna (b=0)</span><span class="sr-pts">2 boda</span></div>
  <div class="sr-q">Riješi: 3x² − 27 = 0.</div>
  <button class="sr-try" onclick="tryIt(5)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr5-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> x² = 9.</div>
    <div class="sr-step" data-s="2"><strong>Odgovor:</strong> <em>x = ±3.</em></div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(5)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(5)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr6"><div class="sr-head"><span class="sr-no">Primjer 6 · Vièteove formule</span><span class="sr-pts">3 boda</span></div>
  <div class="sr-q">Jednadžba x²+px+q=0 ima rješenja 3 i −5. Nađi p i q.</div>
  <button class="sr-try" onclick="tryIt(6)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr6-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Viète: 3+(−5) = −p → p = 2.</div>
    <div class="sr-step" data-s="2"><strong>Korak 2:</strong> 3·(−5) = q → q = −15.</div>
    <div class="sr-step" data-s="3"><strong>Odgovor:</strong> <em>p = 2, q = −15.</em></div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(6)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(6)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr7"><div class="sr-head"><span class="sr-no">Primjer 7 · Faktorizacija</span><span class="sr-pts">3 boda</span></div>
  <div class="sr-q">Faktorizuraj: 2x² − 8x + 6.</div>
  <button class="sr-try" onclick="tryIt(7)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr7-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> 2(x²−4x+3). Nultočke: x₁=3, x₂=1.</div>
    <div class="sr-step" data-s="2"><strong>Odgovor:</strong> <em>2(x−3)(x−1).</em></div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(7)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(7)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr8"><div class="sr-head"><span class="sr-no">Primjer 8 · Kvadratna nejednadžba</span><span class="sr-pts">4 boda</span></div>
  <div class="sr-q">Riješi nejednadžbu: x² − x − 6 &lt; 0.</div>
  <button class="sr-try" onclick="tryIt(8)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr8-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Nultočke: D=1+24=25. x₁=3, x₂=−2.</div>
    <div class="sr-step" data-s="2"><strong>Korak 2:</strong> a=1>0 (osmijeh). f(x)&lt;0 između nultočaka.</div>
    <div class="sr-step" data-s="3"><strong>Odgovor:</strong> <em>x ∈ (−2, 3).</em></div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(8)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(8)">Reset</button></div>
  </div></div>

  <div class="sr" id="sr9"><div class="sr-head"><span class="sr-no">Primjer 9 · Primjena</span><span class="sr-pts">5 bodova</span></div>
  <div class="sr-q">Pravokutnik ima opseg 26 cm i površinu 40 cm². Nađi dimenzije.</div>
  <button class="sr-try" onclick="tryIt(9)">▶ Pokreni rješenje</button>
  <div class="sr-steps" id="sr9-steps">
    <div class="sr-step" data-s="1"><strong>Korak 1:</strong> a+b=13, a·b=40. b=13−a → a(13−a)=40.</div>
    <div class="sr-step" data-s="2"><strong>Korak 2:</strong> a²−13a+40=0. D=169−160=9. a=(13±3)/2.</div>
    <div class="sr-step" data-s="3"><strong>Odgovor:</strong> <em>8 cm × 5 cm.</em></div>
    <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(9)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(9)">Reset</button></div>
  </div></div>
<div class="sr" id="sr10"><div class="sr-head"><span class="sr-no">Primjer 10 · Iracionalna jednadžba + PROVJERA</span><span class="sr-pts">5 bodova</span></div><div class="sr-q">Riješi: √(x+1) = x − 1.</div><button class="sr-try" onclick="tryIt(10)">▶ Pokreni</button><div class="sr-steps" id="sr10-steps">
  <div class="sr-step" data-s="1">Kvadriraj obje strane: (√(x+1))² = (x−1)² → x+1 = x²−2x+1.</div>
  <div class="sr-step" data-s="2">Svedi: x²−3x = 0 → x(x−3) = 0 → <strong>kandidati</strong>: x = 0 i x = 3.</div>
  <div class="sr-step" data-s="3"><strong>PROVJERA OBAVEZNO</strong> (kvadriranje uvodi strana rješenja!):<br>&nbsp;&nbsp;• x = 0: √(0+1) = 1, a x−1 = −1. 1 ≠ −1 → <span style="color:#f87171">ODBACI</span>.<br>&nbsp;&nbsp;• x = 3: √(3+1) = 2, a x−1 = 2. 2 = 2 ✓ → <span style="color:#34d399">PRIHVATI</span>.</div>
  <div class="sr-step" data-s="4"><em>Konačni odgovor: x = 3. PRAVILO: nakon kvadriranja UVIJEK provjeri — gubiš bodove bez provjere!</em></div>
<div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(10)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(10)">Reset</button></div></div></div>


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
  <div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku — D=0 jednadžba</div>
  <div class="bug-body">
    <div class="bug-quote">Jednadžba x²−6x+9=0. Student: <em>"D=36+36=72, dva rješenja."</em></div>
    <div class="bug-task">D = 36 <span class="wrong">+</span> 36 = 72</div>
    <div class="bug-opts" id="bug1-opts">
      <div class="bug-opt" onclick="bugAns(1,0,this)">A) Točno — D=72, dva rješenja.</div>
      <div class="bug-opt" onclick="bugAns(1,1,this)">B) Greška — D=b²<strong>−</strong>4ac = 36−36=0, jedno dvostruko rješenje x=3.</div>
      <div class="bug-opt" onclick="bugAns(1,2,this)">C) D=−72, nema realnih.</div>
    </div>
    <div class="bug-expl" id="bug1-exp"></div>
  </div>
</div>
<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #2 — Vièteove formule</div>
  <div class="bug-body">
    <div class="bug-quote">2x²−5x+3=0. Student: <em>"x₁+x₂=3/2, x₁·x₂=5/2."</em></div>
    <div class="bug-task">x₁·x₂ = <span class="wrong">5/2</span></div>
    <div class="bug-opts" id="bug2-opts">
      <div class="bug-opt" onclick="bugAns(2,0,this)">A) Točno — produkt=b/a.</div>
      <div class="bug-opt" onclick="bugAns(2,1,this)">B) Greška — zamijenio formule. Zbroj=−b/a=5/2, produkt=c/a=3/2.</div>
      <div class="bug-opt" onclick="bugAns(2,2,this)">C) Greška u predznaku: produkt=−3/2.</div>
    </div>
    <div class="bug-expl" id="bug2-exp"></div>
  </div>
</div>
<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #3 — kvadratna nejednadžba</div>
  <div class="bug-body">
    <div class="bug-quote">x²−4&lt;0. Student: <em>"rješenje je x∈(−∞,−2)∪(2,+∞)."</em></div>
    <div class="bug-task">rješenje <span class="wrong">= (−∞,−2)∪(2,+∞)</span></div>
    <div class="bug-opts" id="bug3-opts">
      <div class="bug-opt" onclick="bugAns(3,0,this)">A) Točno — izvan nultočaka.</div>
      <div class="bug-opt" onclick="bugAns(3,1,this)">B) Greška — a>0, f(x)&lt;0 IZMEĐU nultočaka: x∈(−2,2). Student zapisao f(x)>0.</div>
      <div class="bug-opt" onclick="bugAns(3,2,this)">C) Jednadžba nema rješenje u ℝ.</div>
    </div>
    <div class="bug-expl" id="bug3-exp"></div>
  </div>
</div>
<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #4 — dijeljenje s x</div>
  <div class="bug-body">
    <div class="bug-quote">3x²+6x=0. Student: <em>"Podijelim s x: 3x+6=0 → x=−2."</em></div>
    <div class="bug-task">Dijeljenje s x gubi rješenje <span class="wrong">x=0</span></div>
    <div class="bug-opts" id="bug4-opts">
      <div class="bug-opt" onclick="bugAns(4,0,this)">A) Točno — jedino x=−2.</div>
      <div class="bug-opt" onclick="bugAns(4,1,this)">B) Greška — x(3x+6)=0 → x=0 ili x=−2. Nikad ne dijeli s varijablom!</div>
      <div class="bug-opt" onclick="bugAns(4,2,this)">C) Nema rješenja jer c=0.</div>
    </div>
    <div class="bug-expl" id="bug4-exp"></div>
  </div>
</div>
<div class="match-wrap">
  <div class="match-head">
    <span class="match-title">🧩 Spoji uvjet ↔ zaključak</span>
    <span class="match-score">Riješeno: <strong id="match-score">0</strong> / 5</span>
  </div>
  <div class="match-body">
    <div class="match-grid">
      <div class="match-col">
        <div class="match-col-lbl">Uvjet</div>
        <button class="match-btn" data-pair="a" data-side="L" onclick="matchClick(this)">D &gt; 0</button>
        <button class="match-btn" data-pair="b" data-side="L" onclick="matchClick(this)">D = 0</button>
        <button class="match-btn" data-pair="c" data-side="L" onclick="matchClick(this)">D &lt; 0</button>
        <button class="match-btn" data-pair="d" data-side="L" onclick="matchClick(this)">c = 0</button>
        <button class="match-btn" data-pair="e" data-side="L" onclick="matchClick(this)">b = 0</button>
      </div>
      <div class="match-col">
        <div class="match-col-lbl">Zaključak</div>
        <button class="match-btn" data-pair="c" data-side="R" onclick="matchClick(this)">Nema realnih</button>
        <button class="match-btn" data-pair="a" data-side="R" onclick="matchClick(this)">Dva različita realna</button>
        <button class="match-btn" data-pair="e" data-side="R" onclick="matchClick(this)">x = ±√(−c/a)</button>
        <button class="match-btn" data-pair="b" data-side="R" onclick="matchClick(this)">Jedno dvostruko</button>
        <button class="match-btn" data-pair="d" data-side="R" onclick="matchClick(this)">x=0 ili x=−b/a</button>
      </div>
    </div>
    <div class="match-reset"><button class="match-reset-btn" onclick="matchReset()">↺ Reset</button></div>
  </div>
</div>

<div class="cp-list" id="cp-list">
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam izračunati D = b²−4ac i zaključiti broj realnih rješenja</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Primjenjujem kvadratnu formulu za D>0, D=0 i D&lt;0</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Koristim Vièteove formule za provjeru i rekonstrukciju jednadžbe</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Rješavam nepotpune jednadžbe (b=0 i c=0) bez kvadratne formule</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Faktorizujem kvadratni polinom: ax²+bx+c = a(x−x₁)(x−x₂)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Rješavam kvadratnu nejednadžbu crtanjem parabole</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Razumijem vezu nultočki jednadžbe s presjekom parabole i x-osi</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Rješavam primjenske zadatke svođenjem na kvadratnu jednadžbu</div></div>
  </div>


  <div class="cp-msg-hint" id="cp-msg-hint">Označi sve što znaš. Kad budu svi — dobivaš Master achievement.</div>
  <div class="cp-ready" id="cp-ready">🏆 Spreman/na si za P07! Idemo dalje.</div>
</div>
<!-- ═══ PREMIUM GATE: PLAN UČENJA ═══ -->
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

<div class="discere-cta">
  <div class="discere-h">🎓 Želiš dublju razinu?</div>
  <div class="discere-t">Eksp. i log. su nezaobilazni: rast, raspad, kamate, populacija, pH, decibeli. Za dublje razumijevanje i AI tutora koji te vodi kroz složene primjere — <strong>Discere</strong>.</div>
  <a href="#" onclick="window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/discere'},'*'); return false;" class="discere-btn">Pogledaj program →</a>
</div>
<div style="margin-top:16px;background:linear-gradient(135deg,rgba(77,158,255,0.06),rgba(167,139,250,0.06));border:1px solid rgba(77,158,255,0.2);border-radius:12px;padding:16px 18px;display:flex;align-items:flex-start;gap:14px">
  <div style="width:36px;height:36px;background:linear-gradient(135deg,#4D9EFF,#A78BFA);border-radius:9px;display:flex;align-items:center;justify-content:center;font-size:17px;flex-shrink:0">🤖</div>
  <div>
    <div style="font-size:14px;font-weight:700;color:var(--t1);margin-bottom:4px">AI Profesor</div>
    <div style="font-size:12.5px;color:var(--t2);line-height:1.55;margin-bottom:10px">Pitaj o gradivu — objašnjenje korak-po-korak prilagođeno tvom tempu.</div>
    <button class="paywall-cta" onclick="openPaywall('ai')" style="padding:7px 16px;font-size:12px">Otključaj AI Profesora →</button>
  </div>
</div>
<div style="font-size:12.5px;color:var(--t2);line-height:1.55;margin-bottom:10px">Pitaj o faktorizaciji, razlici kvadrata, binomnom teoremu — odgovor prilagođen tvom tempu.</div>
<div style="font-size:12px;color:var(--t2)">Vježbaj faktorizaciju na pravim NCVVO zadacima.</div>

<div class="cn-wrap">
  <div class="cn-title">→ Nastavi učenje</div>
  <div class="cn-grid">
    <div class="cn-card" onclick="navigateChapter('p07')" style="cursor:pointer"><div class="cn-h">Sljedeće · P07</div><div class="cn-t">Sustavi jednadžbi</div></div>
    <div class="cn-card" onclick="navigateChapter('p05')" style="cursor:pointer"><div class="cn-h">Prethodno · P05</div><div class="cn-t">Linearne jednadžbe</div></div>
    <div class="cn-card" onclick="navigateChapter('p09')" style="cursor:pointer"><div class="cn-h">Povezano · P09</div><div class="cn-t">Kvadratna funkcija</div><div class="cn-s">parabola, tjeme, nultočke</div></div>
    <div class="cn-card" onclick="navigateChapter('p05')" style="cursor:pointer"><div class="cn-h">Povezano · P05</div><div class="cn-t">Linearne jednadžbe</div><div class="cn-s">jednadžbe i nejednadžbe</div></div>
  </div>
</div>



<div class="nav-row">
  <button class="nb" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">← 📐 Uči</button>
  <button class="nb primary" onclick="navigateChapter('p07')">07 · Sustavi jednadžbi →</button>
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



/* === P06 DATA (auto-generated) === */
const GON_DATA=[
  {q:'Diskriminanta jednadžbe x²−5x+6=0 je D=1.',a:true,e:'D=(−5)²−4·1·6=25−24=1 ✓'},
  {q:'Ako je D>0, jednadžba ima točno jedno rješenje.',a:false,e:'D>0 → dva različita realna rješenja. Jedno (dvostruko) je samo za D=0.'},
  {q:'Za D=0 rješenje je x=−b/(2a).',a:true,e:'Kvadratna formula daje (−b±0)/(2a)=−b/(2a).'},
  {q:'Kvadratna jednadžba u ℝ uvijek ima najmanje jedno rješenje.',a:false,e:'Za D<0 nema realnih rješenja. Ima kompleksna, ali ne realna.'},
  {q:'Vièteova formula: x₁+x₂=−b/a.',a:true,e:'Standardna Vièteova formula za zbroj rješenja.'},
  {q:'Vièteova formula: x₁·x₂=b/a.',a:false,e:'Ispravno: x₁·x₂=c/a (slobodni koeficijent, ne b).'},
  {q:'Jednadžba x(x−3)=0 ima rješenja 0 i 3.',a:true,e:'Produkt nula → jedan od faktora = 0. x=0 ili x−3=0.'},
  {q:'Kvadratna jednadžba može imati točno tri realna rješenja.',a:false,e:'Kvadratni polinom ima stupanj 2 → max 2 realna rješenja.'},
  {q:'Nepotpuna jednadžba ax²+c=0 ima uvijek 2 realna rješenja.',a:false,e:'Samo ako −c/a>0. Ako −c/a<0, nema realnih rješenja.'},
  {q:'Za jednadžbu 2x²+6x=0 jedno rješenje je uvijek x=0.',a:true,e:'c=0 → x(2x+6)=0 → x=0 ili x=−3. Da, x=0 je uvijek rješenje.'},
  {q:'Faktorizacija: x²−9=(x+3)(x−3).',a:true,e:'Razlika kvadrata: a²−b²=(a+b)(a−b). Ovdje a=x, b=3.'},
  {q:'Savršeni kvadrat: (x+4)²=x²+16.',a:false,e:'(x+4)²=x²+8x+16. Zaboraviti srednji član 2·x·4=8x je klasična greška.'},
  {q:'Za x²+x+1=0, diskriminanta D=1−4=−3.',a:true,e:'D=b²−4ac=1−4·1·1=1−4=−3 ✓.'},
  {q:'Jednadžba 3x²−12=0 je nepotpuna (b=0).',a:true,e:'Koeficijent b=0 u 3x²+0·x−12=0. Nepotpuna oblika ax²+c=0.'},
  {q:'x²+5x+6=(x+2)(x+3).',a:true,e:'Nultočke: D=25−24=1, x₁=(−5+1)/2=−2, x₂=(−5−1)/2=−3. ✓'},
  {q:'Za kvadratnu nejednadžbu x²−4<0, rješenje je x∈(−∞,−2)∪(2,+∞).',a:false,e:'a=1>0, nultočke ±2. f(x)<0 IZMEĐU nultočaka: x∈(−2,2).'},
  {q:'Tjeme parabole ax²+bx+c je u točki (−b/(2a), −D/(4a)).',a:true,e:'Standardna formula za tjeme (vertex) parabole.'},
  {q:'Jednadžba ax²+bx+c=0 s D=0 ima faktorizaciju a(x−p)² za neki p.',a:true,e:'D=0 → dvostruka nultočka p=−b/(2a). ax²+bx+c=a(x−p)².'},
  {q:'Kvadratna nejednadžba x²−x−6≥0 ima rješenje x∈[−2,3].',a:false,e:'Nultočke x₁=3, x₂=−2. a>0. f(x)≥0 IZVAN nultočaka: x≤−2 ili x≥3.'},
  {q:'Za jednadžbu 2x²−5x+3=0, x₁·x₂=3/2.',a:true,e:'Viète: x₁·x₂=c/a=3/2 ✓. (Rješenja su 3/2 i 1, produkt=3/2.)'},
  {q:'Jednadžba x²=25 ima jedno rješenje x=5.',a:false,e:'x²=25 → x=±5. Dva rješenja: x=5 i x=−5.'},
  {q:'D je uvijek nenegativan broj.',a:false,e:'D može biti negativan (npr. x²+1=0 → D=−4). Tada nema realnih rješenja.'},
  {q:'Formula D=b²−4ac naziva se diskriminanta kvadratne jednadžbe.',a:true,e:'Točan naziv i formula.'},
  {q:'Za jednadžbu x²−4x+4=0, jednadžba ima točno jedno rješenje x=2.',a:true,e:'D=16−16=0 → x=4/2=2. To je savršeni kvadrat (x−2)²=0.'},
  {q:'Vièteove formule vrijede samo ako su obje nultočke realne.',a:false,e:'Vièteove formule vrijede uvijek — čak i za kompleksna rješenja (x₁+x₂=−b/a, x₁x₂=c/a).'},
  {q:'Kvadratna jednadžba ax²+bx+c=0 može se svesti na x²+(b/a)x+(c/a)=0 diobom s a.',a:true,e:'Budući je a≠0, dijeljenje s a je dozvoljeno i ne mijenja rješenja.'},
  {q:'Razlika kvadrata x²−a² uvijek ima faktorizaciju (x+a)(x−a).',a:true,e:'Klasična identiteta. Rješenja su x=±a.'},
  {q:'Jednadžba (x−1)²=9 ima rješenja x=4 i x=−2.',a:true,e:'x−1=±3 → x=4 ili x=−2. ✓'}
];
const DRILL_DATA=[
  {q:'D za x²−6x+9=0?',opts:['−9','9','0','−27'],ok:2,diff:'easy',exp:'D=36−36=0.'},
  {q:'D za x²+2x+2=0?',opts:['−4','4','0','8'],ok:0,diff:'easy',exp:'D=4−8=−4.'},
  {q:'Rješenja x²−4=0?',opts:['x=4','x=±2','x=±1','x=2'],ok:1,diff:'easy',exp:'b=0: x²=4 → x=±2.'},
  {q:'Rješenja x(x−5)=0?',opts:['5 i −5','0','0 i 5','5'],ok:2,diff:'easy',exp:'Produkt nula: x=0 ili x=5.'},
  {q:'x₁+x₂ za x²−7x+12=0?',opts:['−7','12','7','−12'],ok:2,diff:'easy',exp:'Viète: x₁+x₂=−b/a=7.'},
  {q:'x₁·x₂ za x²−7x+12=0?',opts:['12','−12','−7','7'],ok:0,diff:'easy',exp:'Viète: x₁·x₂=c/a=12.'},
  {q:'Rješenja x²−9=0?',opts:['3','±9','±3','9'],ok:2,diff:'easy',exp:'x²=9 → x=±3.'},
  {q:'D za 3x²−6x+3=0?',opts:['−12','36','0','12'],ok:2,diff:'easy',exp:'D=36−36=0.'},
  {q:'Koliko rješenja ima x²+4=0 u ℝ?',opts:['0','2','∞','1'],ok:0,diff:'easy',exp:'D=−16<0 → nema realnih.'},
  {q:'Jednadžba (x+3)²=0 ima rješenje?',opts:['x=±3','x=3','x=0','x=−3'],ok:3,diff:'easy',exp:'Dvostruko rješenje: x=−3.'},
  {q:'Rješenja 2x²−5x+3=0?',opts:['1 i 3','5/2 i 1','3/2 i −1','3/2 i 1'],ok:3,diff:'med',exp:'D=25−24=1. x=(5±1)/4 → 3/2 i 1.'},
  {q:'Rješenja x²+3x−10=0?',opts:['−2 i −5','−2 i 5','2 i 5','2 i −5'],ok:3,diff:'med',exp:'D=9+40=49. x=(−3±7)/2 → 2 ili −5.'},
  {q:'Jednadžba čija su rješenja 2 i −3?',opts:['x²+x+6=0','x²+x−6=0','x²−x+6=0','x²−x−6=0'],ok:1,diff:'med',exp:'Σ=−1, Π=−6. x²+x−6=0.'},
  {q:'Rješenja 3x²−3=0?',opts:['±1','1','±3','3'],ok:0,diff:'med',exp:'x²=1 → x=±1.'},
  {q:'D za x²+3x+5=0?',opts:['−11','11','29','−29'],ok:0,diff:'med',exp:'D=9−20=−11.'},
  {q:'Faktorizacija x²−3x−10?',opts:['(x−3)(x+10)','(x−5)(x+2)','(x+5)(x−2)','(x−5)(x−2)'],ok:1,diff:'med',exp:'Nultočke 5 i −2: (x−5)(x+2).'},
  {q:'Jednadžba 4x²+4x+1=0: koliko rješenja?',opts:['2','∞','1','0'],ok:2,diff:'med',exp:'D=16−16=0. Jedno dvostruko.'},
  {q:'Rješenja x²+x=6?',opts:['−2 i 3','2 i −3','−2 i −3','2 i 3'],ok:1,diff:'med',exp:'x²+x−6=0. D=1+24=25. x=(−1±5)/2 → 2 i −3.'},
  {q:'Tjeme parabole x²−4x+1?',opts:['(2,−3)','(4,1)','(2,3)','(−2,−3)'],ok:0,diff:'med',exp:'x_T=4/2=2. y_T=4−8+1=−3. T=(2,−3).'},
  {q:'Jednadžba ax²+bx+c=0 ima rješenja 1/3 i −2. Koji su Vièteovi zbroj i produkt?',opts:['−5/3, −2/3','5/3, 2/3','−5/3, 2/3','5/3, −2/3'],ok:0,diff:'hard',exp:'Σ=1/3+(−2)=−5/3. Π=1/3·(−2)=−2/3.'},
  {q:'Rješenja jednadžbe √(x+1)=x−1?',opts:['0 i 3','3','0','nema'],ok:1,diff:'hard',exp:'Kvadriranje: x+1=x²−2x+1 → x²−3x=0 → x=0 ili x=3. Provjera: √1=1−1=0 NE. Samo x=3.'},
  {q:'Za koje k jednadžba x²+2kx+k=0 ima dvostruko rješenje?',opts:['k=0 ili k=1','k=1','k=0','k=−1'],ok:0,diff:'hard',exp:'D=4k²−4k=0 → 4k(k−1)=0 → k=0 ili k=1.'},
  {q:'Jednadžba 2x²+bx+8=0 ima jedno rješenje. b=?',opts:['±8','−8','±4','8'],ok:0,diff:'hard',exp:'D=b²−64=0 → b=±8.'},
  {q:'Rješenja x⁴−5x²+4=0?',opts:['1 i 4','−1 i −2','±1 i ±2','±1 i ±4'],ok:2,diff:'hard',exp:'Supstitucija t=x²: t²−5t+4=0 → t=1 ili t=4 → x=±1 ili x=±2.'},
  {q:'Produkt rješenja jednadžbe 5x²−3x+1=0?',opts:['3/5','−1/5','1/5','5'],ok:2,diff:'hard',exp:'Viète: x₁x₂=c/a=1/5. (D=9−20<0 ali Viète vrijedi i za kompleksna!)'},
  {q:'Rješenja x²−2x−3>0?',opts:['x>3','x<−1','x<−1 ili x>3','−1<x<3'],ok:2,diff:'hard',exp:'Nultočke −1 i 3, a>0. f(x)>0 izvan: x∈(−∞,−1)∪(3,+∞).'},
  {q:'Jednadžba x²−(m+1)x+m=0 uvijek ima rješenje x=1. Što je x₂?',opts:['m+1','m','1','−m'],ok:1,diff:'hard',exp:'Viète: 1·x₂=m → x₂=m. (Provjera: 1+(m)=m+1=−b/a ✓)'}
,
  {q:'Za koje m jednadžba x²−(m+3)x+4=0 ima dvostruko rješenje?',opts:['m=1 ili m=−7','m=±4','m=1 ili m=7','m=−1 ili m=7'],ok:0,diff:'hard',exp:'D=(m+3)²−16=0 → m+3=±4 → m=1 ili m=−7.'}
];
const HINTS=['D=b²−4ac.','D<0 nema realnih.','x=−b/(2a) za D=0.','Produkt nula ↔ jedan faktor nula.','Viète: zbroj=−b/a.','Viète: produkt=c/a.','x²=9 → x=±√9.','D=36−36.','D=0−16=−16.','(x+3)²=0 → x=−3.','D=1, (5±1)/4.','D=49, (−3±7)/2.','Σ=−1, Π=−6, oblik x²−Σx+Π=0.','x²=1→x=±1.','D=9−20.','Nultočke→faktorizacija.','Nultočke ±1, a>0, između.','D=0→jedno rješenje.','x²+x=6→x²+x−6=0.','x_T=−b/(2a).','Viète: suma i produkt iz nultočaka.','Provjera nakon korijenovanja!','D=0: 4k(k−1)=0.','D=b²−64=0.','t=x²: t²−5t+4=0.','Viète radi i za kompleksna.','a>0, izvan nultočaka.','Viète: produkt x₂=m.'
];
const DRILL_HINTS = [
  "D = b² − 4ac. Savršen kvadrat daje D=0.",
  "D = b² − 4ac. Izračunaj s a=1, b=2, c=2.",
  "x² = 4 → korijen iz oba.",
  "Produkt = 0 ↔ barem jedan faktor = 0.",
  "Vièteova suma: x₁+x₂ = −b/a.",
  "Vièteov produkt: x₁·x₂ = c/a.",
  "Oblik x²−a² = 0 → x = ±√a².",
  "3x²−6x+3 = 3(x²−2x+1) = 3(x−1)². D=?",
  "D < 0 → broj realnih = 0.",
  "Dvostruko rješenje: x = −b/(2a).",
  "D = 25−24 = 1. x = (5±1)/4.",
  "D = 9+40. Cijeli korijen.",
  "Viète: x²−(suma)x+(produkt) = 0.",
  "3x²−3 = 3(x²−1) = 3(x−1)(x+1).",
  "D = b²−4ac za opći oblik.",
  "Nultočke su 5 i −2 → (x−5)(x+2).",
  "Savršen kvadrat (2x+1)² → dvostruko.",
  "Prebaci 6: x²+x−6 = 0, pa Viète.",
  "Tjeme (p, q): p=−b/(2a), q=f(p).",
  "Rješenja unaprijed: sumiraj i pomnoži.",
  "Kvadriraj pa PROVJERI rješenja!",
  "Dvostruko → D=0. Rješi po k.",
  "Jedno rješenje → D=0 → b² = 4ac.",
  "Supstitucija t = x². Rješi po t, pa x = ±√t.",
  "Vièteov produkt = c/a za opći oblik.",
  "Nultočke i znak a: &#62;0 osmijeh, između nultočaka f&#60;0.",
  "x=1 uvrsti → 1−(m+1)+m = 0 ✓. Viète za drugi.",
  "D = (m+3)²−16 = 0. Rastavi diskriminantu."
];

const QUIZ_DATA=[
  {q:'Jednadžba x²−5x+6=0 ima rješenja:',opts:['x₁=3, x₂=2','x₁=5, x₂=0','x₁=6, x₂=−1','x₁=−3, x₂=−2'],ok:0,e:'D=25−24=1. x=(5±1)/2 → 3 i 2.'},
  {q:'Diskriminanta jednadžbe 3x²−6x+4=0 je:',opts:['D=60','D=0','D=−12','D=12'],ok:2,e:'D=36−48=−12.'},
  {q:'Jednadžba 5x²−20x=0 ima rješenja:',opts:['x=0 i x=20','x=4','x=±4','x=0 i x=4'],ok:3,e:'x(5x−20)=0 → x=0 ili x=4.'},
  {q:'Vièteov produkt rješenja za 2x²+6x−8=0?',opts:['−4','−3','3','4'],ok:0,e:'x₁x₂=c/a=−8/2=−4.'},
  {q:'Jednadžba x²+4x+4=0 ima:',opts:['dva rješenja x=2 i x=−2','nema realnih rješenja','jedno dvostruko rješenje x=−2','jedno rješenje x=2'],ok:2,e:'D=16−16=0 → x=−4/2=−2. (x+2)²=0.'},
  {q:'Faktorizacija 3x²−12 =?',opts:['3(x+2)(x−2)','(3x+6)(x−2)','3(x²−4)','(x+2)(3x−6)'],ok:0,e:'3(x²−4)=3(x+2)(x−2). Razlika kvadrata.'},
  {q:'Jednadžba x²+px+9=0 ima dvostruko rješenje. Koji je p?',opts:['−6','±6','±3','6'],ok:1,e:'D=p²−36=0 → p=±6.'}
,
  {q:'Rješenja jednadžbe x²−3x=0 su:',opts:['x=3','x=±3','x=0 i x=3','x=0'],ok:2,e:'x(x−3)=0 → x=0 ili x=3.'}
];
const CH_DATA=[
  {q:'Postavi jednadžbu s diskriminantom D=1.',check:{"type": "d_range", "min": 0.9, "max": 1.1}},
  {q:'Postavi jednadžbu bez realnih rješenja (D<0).',check:{"type": "d_sign", "sign": "neg"}},
  {q:'Postavi jednadžbu s jednim dvostrukim rješenjem (D=0).',check:{"type": "d_zero", "tol": 0.01}},
  {q:'Postavi parabolu koja sijece x-os u x=2 i x=3.',check:{"type": "roots", "r1": 2, "r2": 3, "tol": 0.1}},
  {q:'Postavi jednadžbu gdje je Vièteov zbroj jednak 5.',check:{"type": "viete_sum", "val": 5, "tol": 0.05}},
  {q:'Postavi jednadžbu s a<0 (parabola prema dolje).',check:{"type": "a_sign", "sign": "neg"}},
  {q:'Aktiviraj preset \\'D>0 (2 rješenja)\\'.',check:{"type": "preset", "name": "d_pos"}},
  {q:'Aktiviraj preset \\'D=0 (1 rješenje)\\'.',check:{"type": "preset", "name": "d_zero"}},
  {q:'Aktiviraj preset \\'D<0 (bez rješenja)\\'.',check:{"type": "preset", "name": "d_neg"}},
  {q:'Postavi jednadžbu s koeficijentom a=2.',check:{"type": "a_val", "val": 2, "tol": 0.1}},
  {q:'Aktiviraj preset \\'Klasična 2x²−5x+3\\'.',check:{"type": "preset", "name": "classic"}},
  {q:'Postavi jednadžbu čiji je Vièteov produkt negativan.',check:{"type": "viete_prod", "sign": "neg"}}

];
const BUG_ANSWERS={
  1:{correct:1,explain:{
    0:'✗ Krivo — za <strong>D=0</strong> jednadžba ima točno <strong>JEDNO dvostruko rješenje</strong> (x=−b/(2a)), ne NEMA. Jedna dvostruka nultočka je kad se parabola DODIRUJE x-osi (tangencijalno), ne NE siječe.',
    1:'✓ Točno! D = (−6)² − 4·1·9 = 36 − 36 = <strong>0</strong>. D=0 znači jedno dvostruko rješenje: x = 6/2 = <strong>3</strong>. Ovo je savršeni kvadrat: (x−3)² = 0. Provjera: f(3) = 9 − 18 + 9 = 0 ✓, pa je (3, 0) jedina i dvostruka nultočka.',
    2:'✗ Krivo — <strong>D = 36 − 36 = 0</strong>, ne −72. Aritmetička greška: možda je student zabrojio 36 + 36 ili 4·9·2. Formula D = b² − 4ac traži minus, ne plus.'
  }},
  2:{correct:1,explain:{
    0:'✗ Krivo — Vièteove formule: <strong>ZBROJ = −b/a</strong>, <strong>PRODUKT = c/a</strong>. Student je zamijenio: napisao je zbroj=c/a i produkt=−b/a.',
    1:'✓ Točno! Za 2x²−5x+3=0 (a=2, b=−5, c=3): zbroj = −(−5)/2 = <strong>5/2</strong>, produkt = 3/2. Provjera: rješenja su 1 i 3/2 (iz formule), 1+3/2 = 5/2 ✓, 1·3/2 = 3/2 ✓.',
    2:'✗ Krivo — nije greška u predznaku, nego u <strong>zamjeni formula</strong>. Zbroj JE −b/a, produkt JE c/a — ali student ih je zamijenio međusobno.'
  }},
  3:{correct:1,explain:{
    0:'✗ Krivo — to je rješenje za x²−4 > 0, NE za x²−4 < 0. Uvijek si nacrtaj parabolu: a=1>0 → <strong>"osmijeh"</strong>, f < 0 je <strong>ISPOD</strong> x-osi, pa između nultočaka.',
    1:'✓ Točno! Za x² − 4 < 0: nultočke ±2, a = 1 > 0 (parabola otvorena gore). f < 0 je IZMEĐU nultočaka → <strong>x ∈ (−2, 2)</strong>. Provjera: x=0: 0−4 = −4 < 0 ✓, x=3: 9−4 = 5 > 0 ✗ (izvan intervala).',
    2:'✗ Krivo — kvadratna nejednadžba s dva razl. korijena (D > 0) <strong>UVIJEK</strong> ima rješenje (ili između, ili izvan, ovisno o znaku nejednadžbe i koef. a).'
  }},
  4:{correct:1,explain:{
    0:'✗ Krivo — za ax² + bx = 0 (c = 0) <strong>NIKAD ne dijeli s x</strong>! Dijeljenjem s x gubiš rješenje x = 0. Uvijek izvuci <strong>zajednički faktor x</strong>: x(ax + b) = 0.',
    1:'✓ Točno! 3x² + 6x = 0 → x(3x + 6) = 0 → x = 0 ILI 3x + 6 = 0 → x = −2. <strong>Dva rješenja: x = 0 i x = −2</strong>. Zlatno pravilo: kad c = 0, faktoriziraj (ne dijeli s varijablom).',
    2:'✗ Krivo — iz x(3x + 6) = 0 imamo produkt = 0 → barem jedan faktor = 0. To daje <strong>DVA rješenja</strong>, ne jedno.'
  }}
};
const FD_EXPLANATIONS={
  "0":{"name":"x (nultočka/rješenje)","desc":"Vrijednost x za koju jednadžba ax²+bx+c=0 vrijedi. Geometrijski: presjek parabole s x-osi. Može biti 0, 1 ili 2 realne vrijednosti."},
  "1":{"name":"−b (negativni koef. b)","desc":"Minus b. Pojavljuje se jer kvadratna formula izvire iz \\'completing the square\\' gdje se pojavljuje −b/(2a) kao koordinata tjemena."},
  "2":{"name":"√D (korijen diskriminante)","desc":"D=b²−4ac. Korijen od D daje \\'odmak\\' od tjemena do nultočaka. Za D=0, odmak je 0 (samo tjeme). Za D<0, korijen nije realan."},
  "3":{"name":"2a (dvostruki vodeći koef.)","desc":"Nazivnik u kvadratnoj formuli. Dolazi iz \\'completing the square\\' gdje se (2a)² pojavljuje u procesu. Za a=1 formula se pojednostavljuje na x=(−b±√D)/2."}
};
const PBX_CH_DATA = CH_DATA;



// P09 JS Part 1 — core, toast, tabs, progress, achievements, Parabola Explorer
const LS_KEY = 'matb_p06';
const FAV_KEY = 'matb_p06_favs';
const ACH_KEY = 'matb_p06_ach';

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
// Sliders: a, b, c → live graph

const pbx = {
  mode: 0, zoom: 1,
  a: 1, b: -5, c: 6,
  lastPreset: null, presetsUsed: 0,
  challengeOn: false, chScore: 0, chTot: 0
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
  if (!isFinite(n)) return '—';
  if (Math.abs(n) < 1e-10) return '0';
  if (Math.abs(n - Math.round(n)) < 0.001) return String(Math.round(n));
  return (Math.round(n * 1000) / 1000).toString();
}

function computeMetrics() {
  const a = pbx.a, b = pbx.b, c = pbx.c;
  const D = b * b - 4 * a * c;
  const r = { D, roots: [], vertex: { x: -b / (2 * a), y: null }, sum: null, prod: null };
  r.vertex.y = a * r.vertex.x * r.vertex.x + b * r.vertex.x + c;
  r.sum = -b / a;
  r.prod = c / a;
  if (D > 0) {
    r.roots = [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
  } else if (Math.abs(D) < 0.001) {
    r.roots = [-b / (2 * a)];
  }
  return r;
}

function pbxSetMode(m, btn) {
  pbx.mode = m;
  document.querySelectorAll('.pbx-mode-tab').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
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
  const presets = {
    d_pos:     { a: 1, b: -5, c: 6 },
    d_zero:    { a: 1, b: -6, c: 9 },
    d_neg:     { a: 1, b: 1, c: 1 },
    neg_a:     { a: -1, b: 4, c: -3 },
    incomplete:{ a: 1, b: 0, c: -4 },
    classic:   { a: 2, b: -5, c: 3 }
  };
  const p = presets[name];
  if (!p) return;
  pbx.a = p.a; pbx.b = p.b; pbx.c = p.c;
  pbx.lastPreset = name;
  const asl = document.getElementById('pbx-a');
  const bsl = document.getElementById('pbx-b');
  const csl = document.getElementById('pbx-c');
  if (asl) asl.value = p.a;
  if (bsl) bsl.value = p.b;
  if (csl) csl.value = p.c;
  pbx.presetsUsed++;
  if (pbx.presetsUsed >= 3) {
    try {
      const ls = lsLoad();
      if (!ls.pbxExplored) { ls.pbxExplored = true; lsSave(ls); unlockAch('explorer', '🎨 Explorer otključan!'); }
    } catch(e) {}
  }
  pbxUpdate();
}

function pbxUpdate() {
  const asl = document.getElementById('pbx-a');
  const bsl = document.getElementById('pbx-b');
  const csl = document.getElementById('pbx-c');
  if (asl) pbx.a = parseFloat(asl.value) || 0;
  if (bsl) pbx.b = parseFloat(bsl.value) || 0;
  if (csl) pbx.c = parseFloat(csl.value) || 0;

  const av = document.getElementById('pbx-a-val');
  const bv = document.getElementById('pbx-b-val');
  const cv = document.getElementById('pbx-c-val');
  if (av) av.textContent = fmtN(pbx.a);
  if (bv) bv.textContent = fmtN(pbx.b);
  if (cv) cv.textContent = fmtN(pbx.c);

  const canvas = document.getElementById('pbx-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext && canvas.getContext('2d');
  if (!ctx) return;
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0A0F1A';
  ctx.fillRect(0, 0, W, H);

  const m = computeMetrics();

  // D display
  const dEl = document.getElementById('pbx-angles-val');
  if (dEl) {
    dEl.textContent = fmtN(m.D);
    dEl.className = 'pbx-ctrl-val ' + (m.D > 0.001 ? 'ok' : m.D < -0.001 ? 'ng' : '');
  }
  const rootsEl = document.getElementById('pbx-area-val');
  if (rootsEl) {
    if (m.D < -0.001) rootsEl.textContent = 'nema realnih';
    else if (Math.abs(m.D) < 0.001) rootsEl.textContent = 'x = ' + fmtN(m.roots[0]);
    else rootsEl.textContent = 'x₁=' + fmtN(m.roots[0]) + ', x₂=' + fmtN(m.roots[1]);
  }
  const vieteEl = document.getElementById('pbx-peri-val');
  if (vieteEl) vieteEl.textContent = 'Σ=' + fmtN(m.sum) + ', Π=' + fmtN(m.prod);

  drawParabola(ctx, W, H, m);

  const info = document.getElementById('pbx-info');
  if (info) {
    const dSign = m.D > 0.001 ? 'D>0 (2 rješenja)' : m.D < -0.001 ? 'D<0 (nema realnih)' : 'D=0 (jedno dvostruko)';
    info.innerHTML = '<strong>' + fmtN(pbx.a) + 'x²' + (pbx.b >= 0 ? '+' : '') + fmtN(pbx.b) + 'x' + (pbx.c >= 0 ? '+' : '') + fmtN(pbx.c) + '=0</strong> | D=' + fmtN(m.D) + ' → ' + dSign;
  }
}

function drawParabola(ctx, W, H, m) {
  const padL = 50, padR = 20, padT = 30, padB = 40;
  const chartW = W - padL - padR, chartH = H - padT - padB;
  const zoom = pbx.zoom;
  const xRange = 10 / zoom;
  const cx = m.vertex.x;
  const xMin = cx - xRange, xMax = cx + xRange;

  // Compute y range
  let yMin = Infinity, yMax = -Infinity;
  const steps = 100;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (xMax - xMin) * i / steps;
    const y = pbx.a * x * x + pbx.b * x + pbx.c;
    if (y < yMin) yMin = y;
    if (y > yMax) yMax = y;
  }
  const yPad = (yMax - yMin) * 0.2 || 2;
  yMin -= yPad; yMax += yPad;

  function toSx(x) { return padL + (x - xMin) / (xMax - xMin) * chartW; }
  function toSy(y) { return padT + (1 - (y - yMin) / (yMax - yMin)) * chartH; }

  // Grid / axes
  ctx.strokeStyle = 'rgba(122,144,187,0.15)';
  ctx.lineWidth = 1;
  for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) {
    ctx.beginPath(); ctx.moveTo(toSx(gx), padT); ctx.lineTo(toSx(gx), padT + chartH); ctx.stroke();
    ctx.fillStyle = '#7A90BB'; ctx.font = '9px JetBrains Mono'; ctx.textAlign = 'center';
    ctx.fillText(gx, toSx(gx), padT + chartH + 14);
  }

  // x-axis
  const y0 = toSy(0);
  if (y0 >= padT && y0 <= padT + chartH) {
    ctx.strokeStyle = '#4D9EFF'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(padL, y0); ctx.lineTo(W - padR, y0); ctx.stroke();
  }

  // Parabola
  const dColor = m.D > 0.001 ? '#34D399' : m.D < -0.001 ? '#F87171' : '#F59E0B';
  ctx.strokeStyle = '#4D9EFF'; ctx.lineWidth = 2.5; ctx.beginPath();
  let first = true;
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (xMax - xMin) * i / steps;
    const y = pbx.a * x * x + pbx.b * x + pbx.c;
    const sx = toSx(x), sy = toSy(y);
    if (first) { ctx.moveTo(sx, sy); first = false; } else ctx.lineTo(sx, sy);
  }
  ctx.stroke();

  // Vertex
  const vsx = toSx(m.vertex.x), vsy = toSy(m.vertex.y);
  ctx.fillStyle = '#F59E0B';
  ctx.beginPath(); ctx.arc(vsx, vsy, 5, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#F59E0B'; ctx.font = 'bold 10px JetBrains Mono'; ctx.textAlign = 'left';
  ctx.fillText('T(' + fmtN(m.vertex.x) + ',' + fmtN(m.vertex.y) + ')', vsx + 8, vsy - 4);

  // Roots
  ctx.fillStyle = dColor;
  m.roots.forEach(r => {
    const rx = toSx(r), ry = toSy(0);
    if (rx >= padL && rx <= W - padR) {
      ctx.beginPath(); ctx.arc(rx, ry, 6, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = dColor; ctx.font = 'bold 10px JetBrains Mono'; ctx.textAlign = 'center';
      ctx.fillText('x=' + fmtN(r), rx, ry - 10);
      ctx.fillStyle = dColor;
    }
  });

  // D info top-right
  const dText = 'D = ' + fmtN(m.D);
  ctx.fillStyle = dColor; ctx.font = 'bold 12px JetBrains Mono'; ctx.textAlign = 'right';
  ctx.fillText(dText, W - padR - 5, padT + 20);
  const eqText = fmtN(pbx.a) + 'x² ' + (pbx.b >= 0 ? '+' : '') + fmtN(pbx.b) + 'x ' + (pbx.c >= 0 ? '+' : '') + fmtN(pbx.c);
  ctx.fillStyle = '#22D3EE'; ctx.font = '11px JetBrains Mono';
  ctx.fillText(eqText, W - padR - 5, padT + 8);
}

// ═══ CHALLENGES ═══


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
  if (!PBX_CH_DATA || PBX_CH_DATA.length === 0) {
    document.getElementById('pbx-challenge-task').textContent = 'Izazovi se učitavaju...';
    return;
  }
  const solved = (pbxCh && pbxCh.solved) || [];
  const remaining = PBX_CH_DATA.filter((_, i) => !solved.includes(i));
  const pool = remaining.length ? remaining : PBX_CH_DATA;
  const choice = pool[Math.floor(Math.random() * pool.length)];
  const idx = PBX_CH_DATA.indexOf(choice);
  pbxCh = Object.assign({}, choice, {idx, solved});
  document.getElementById('pbx-challenge-task').textContent = choice.q;
  const fb = document.getElementById('pbx-challenge-fb');
  if (fb) { fb.classList.remove('show', 'ok', 'ng'); fb.innerHTML = ''; }
}

function pbxChallengeCheck() {
  if (!pbxCh) { pbxChallengeNext(); return; }
  const fb = document.getElementById('pbx-challenge-fb');
  if (!fb) return;
  const m = computeMetrics();
  const ch = pbxCh.check;
  let pass = false, msg = '';

  switch (ch.type) {
    case 'd_range': pass = m.D >= ch.min && m.D <= ch.max; msg = pass ? '✓ D=' + fmtN(m.D) : '✗ D=' + fmtN(m.D) + ', treba ≈ ' + ((ch.min+ch.max)/2); break;
    case 'd_sign': pass = ch.sign === 'neg' ? m.D < -0.01 : m.D > 0.01; msg = pass ? '✓ D=' + fmtN(m.D) : '✗ D=' + fmtN(m.D) + ' – namjesti D' + (ch.sign==='neg'?'<0':'>0'); break;
    case 'd_zero': pass = Math.abs(m.D) < ch.tol * 10; msg = pass ? '✓ D≈0' : '✗ D=' + fmtN(m.D) + ', treba ≈0'; break;
    case 'roots':
      const r1 = m.roots[0], r2 = m.roots[1];
      if (r1 === undefined || r2 === undefined) { pass = false; msg = '✗ Jednadžba nema 2 realna rješenja.'; break; }
      const ok1 = (Math.abs(r1-ch.r1)<ch.tol && Math.abs(r2-ch.r2)<ch.tol) || (Math.abs(r1-ch.r2)<ch.tol && Math.abs(r2-ch.r1)<ch.tol);
      pass = ok1; msg = pass ? '✓ nultočke: ' + fmtN(r1) + ', ' + fmtN(r2) : '✗ nultočke: ' + fmtN(r1) + ', ' + (r2!==undefined?fmtN(r2):'—'); break;
    case 'viete_sum': pass = Math.abs(m.sum - ch.val) < ch.tol + 0.1; msg = pass ? '✓ Σ=' + fmtN(m.sum) : '✗ Σ=' + fmtN(m.sum) + ', treba ' + ch.val; break;
    case 'a_sign': pass = ch.sign === 'neg' ? pbx.a < 0 : pbx.a > 0; msg = pass ? '✓ a=' + fmtN(pbx.a) : '✗ a=' + fmtN(pbx.a) + ', treba a' + (ch.sign==='neg'?'<0':'>0'); break;
    case 'preset': pass = pbx.lastPreset === ch.name; msg = pass ? '✓ preset "' + ch.name + '" aktivan' : '✗ klikni preset "' + ch.name + '"'; break;
    case 'a_val': pass = Math.abs(pbx.a - ch.val) < ch.tol; msg = pass ? '✓ a=' + fmtN(pbx.a) : '✗ a=' + fmtN(pbx.a) + ', treba ' + ch.val; break;
    case 'viete_prod': pass = ch.sign === 'neg' ? m.prod < -0.01 : m.prod > 0.01; msg = pass ? '✓ Π=' + fmtN(m.prod) : '✗ Π=' + fmtN(m.prod); break;
    default: pass = false; msg = '?';
  }

  if (pass) {
    if (!pbxCh.solved.includes(pbxCh.idx)) { pbx.chScore = (pbx.chScore||0)+1; pbxCh.solved.push(pbxCh.idx); }
    pbx.chTot = (pbx.chTot||0)+1;
    fb.classList.remove('ng'); fb.classList.add('ok','show'); fb.innerHTML = msg;
    document.getElementById('pbx-ch-score').textContent = pbx.chScore;
    document.getElementById('pbx-ch-tot').textContent = pbx.chTot;
    if (pbx.chScore >= 5) {
      try { const ls=lsLoad(); if(!ls.pbxChMaster){ls.pbxChMaster=true;lsSave(ls);unlockAch('streaker','🔥 5 izazova!');} } catch(e) {}
    }
    setTimeout(pbxChallengeNext, 1800);
  } else {
    pbx.chTot = (pbx.chTot||0)+1;
    fb.classList.remove('ok'); fb.classList.add('ng','show'); fb.innerHTML = msg;
    document.getElementById('pbx-ch-tot').textContent = pbx.chTot;
  }
}

// ═══ KALKULATOR P06 ═══
function p9SwitchMode(m, btn) {
  document.querySelectorAll('.calc-tab').forEach(t => t.classList.remove('on'));
  if (btn) btn.classList.add('on');
  [0, 1].forEach(i => { const el = document.getElementById('p9-mode-' + i); if (el) el.style.display = (i === m) ? 'block' : 'none'; });
  const r = document.getElementById('p9c-r'); if (r) r.classList.remove('show');
}



function p9calc() {
  // Mode 0: ax²+bx+c=0 → D, rješenja
  const a = parseFloat(document.getElementById('p9c-a').value);
  const b = parseFloat(document.getElementById('p9c-b').value);
  const c = parseFloat(document.getElementById('p9c-k').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    r.classList.add('show'); r.innerHTML = '<div style="color:var(--red)">a ≠ 0 mora biti uneseno.</div>'; return;
  }
  const D = b*b - 4*a*c;
  let html = '<div><span class="calc-res-key">Jednadžba:</span> <span class="calc-res-val">' + fmtN(a) + 'x² ' + (b>=0?'+':'') + fmtN(b) + 'x ' + (c>=0?'+':'') + fmtN(c) + ' = 0</span></div>';
  html += '<div><span class="calc-res-key">Diskriminanta:</span> <span class="calc-res-val ' + (D>0.001?'ok':D<-0.001?'ng':'') + '">D = ' + fmtN(b) + '² − 4·' + fmtN(a) + '·' + fmtN(c) + ' = ' + fmtN(D) + '</span></div>';
  if (D < -0.001) {
    html += '<div><span class="calc-res-key">Zaključak:</span> <span class="calc-res-val ng">D &lt; 0 → Nema realnih rješenja</span></div>';
  } else if (Math.abs(D) < 0.001) {
    const x = -b / (2*a);
    html += '<div><span class="calc-res-key">Rješenje (D=0):</span> <span class="calc-res-val ok">x = ' + fmtN(x) + ' (dvostruko)</span></div>';
    html += '<div><span class="calc-res-key">Faktorizacija:</span> <span class="calc-res-val">' + fmtN(a) + '(x − ' + fmtN(x) + ')²</span></div>';
  } else {
    const x1 = (-b + Math.sqrt(D)) / (2*a), x2 = (-b - Math.sqrt(D)) / (2*a);
    html += '<div><span class="calc-res-key">Rješenja (D>0):</span> <span class="calc-res-val ok">x₁ = ' + fmtN(x1) + ', x₂ = ' + fmtN(x2) + '</span></div>';
    html += '<div><span class="calc-res-key">Viète provjera:</span> <span class="calc-res-val">x₁+x₂ = ' + fmtN(x1+x2) + ' = ' + fmtN(-b/a) + (Math.abs(x1+x2-(-b/a))<0.001?' ✓':' ✗') + ' | x₁·x₂ = ' + fmtN(x1*x2) + ' = ' + fmtN(c/a) + (Math.abs(x1*x2-c/a)<0.001?' ✓':' ✗') + '</span></div>';
    html += '<div><span class="calc-res-key">Faktorizacija:</span> <span class="calc-res-val">' + fmtN(a) + '(x − ' + fmtN(x1) + ')(x − ' + fmtN(x2) + ')</span></div>';
  }
  const vx = -b/(2*a), vy = a*vx*vx + b*vx + c;
  html += '<div style="margin-top:6px;border-top:1px solid var(--bdm);padding-top:6px"><span class="calc-res-key">Tjeme parabole:</span> <span class="calc-res-val" style="color:var(--amber)">T = (' + fmtN(vx) + ', ' + fmtN(vy) + ')</span></div>';
  r.classList.add('show'); r.innerHTML = html;
}

function p9calcVertex() {
  // Mode 1: Iz rješenja x₁, x₂ → jednadžba + Viète provjera
  const x1 = parseFloat(document.getElementById('p9cv-a').value);
  const x2 = parseFloat(document.getElementById('p9cv-q').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(x1) || isNaN(x2)) { r.classList.add('show'); r.innerHTML = '<div style="color:var(--red)">Unesi x₁ i x₂.</div>'; return; }
  const sum = x1 + x2, prod = x1 * x2;
  const b = -sum, c = prod;
  let html = '<div><span class="calc-res-key">Rješenja:</span> <span class="calc-res-val">x₁ = ' + fmtN(x1) + ', x₂ = ' + fmtN(x2) + '</span></div>';
  html += '<div><span class="calc-res-key">Vièteova suma:</span> <span class="calc-res-val" style="color:var(--cyan)">x₁+x₂ = ' + fmtN(sum) + ' → −b/1 = ' + fmtN(sum) + ' → b = ' + fmtN(b) + '</span></div>';
  html += '<div><span class="calc-res-key">Vièteov produkt:</span> <span class="calc-res-val" style="color:var(--amber)">x₁·x₂ = ' + fmtN(prod) + ' → c/1 = ' + fmtN(c) + '</span></div>';
  html += '<div><span class="calc-res-key">Jednadžba (a=1):</span> <span class="calc-res-val ok">x² ' + (b>=0?'+ ':'− ') + fmtN(Math.abs(b)) + 'x ' + (c>=0?'+ ':'− ') + fmtN(Math.abs(c)) + ' = 0</span></div>';
  const D = b*b - 4*c;
  html += '<div><span class="calc-res-key">D = b²−4c:</span> <span class="calc-res-val">' + fmtN(D) + ' (provjera D≥0: ' + (D >= -0.001 ? '✓' : '✗') + ')</span></div>';
  r.classList.add('show'); r.innerHTML = html;
}

function p9calcFromT() {
  // Detailed solver with step by step output
  const a = parseFloat(document.getElementById('p9cft-p').value);
  const b = parseFloat(document.getElementById('p9cft-q').value);
  const c = parseFloat(document.getElementById('p9cft-n').value);
  const r = document.getElementById('p9c-r2') || document.getElementById('p9c-r');
  if (!r) return;
  if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    r.classList.add('show'); r.innerHTML = '<div style="color:var(--red)">a ≠ 0.</div>'; return;
  }
  const D = b*b - 4*a*c;
  let html = '<div style="font-family:var(--mono);font-size:11px;line-height:1.8">';
  html += '<strong>Jednadžba:</strong> ' + fmtN(a) + 'x² ' + (b>=0?'+':'') + fmtN(b) + 'x ' + (c>=0?'+':'') + fmtN(c) + ' = 0<br>';
  html += '<strong>Korak 1 (D):</strong> D = (' + fmtN(b) + ')² − 4·' + fmtN(a) + '·' + fmtN(c) + ' = ' + fmtN(b*b) + ' − ' + fmtN(4*a*c) + ' = <strong>' + fmtN(D) + '</strong><br>';
  if (D < -0.001) {
    html += '<strong style="color:var(--red)">Zaključak: D &lt; 0 → nema realnih rješenja!</strong>';
  } else if (Math.abs(D) < 0.001) {
    const x = -b/(2*a);
    html += '<strong>Korak 2 (D=0):</strong> x = −b/(2a) = ' + fmtN(-b) + '/' + fmtN(2*a) + ' = <strong style="color:var(--green)">' + fmtN(x) + '</strong> (dvostruko)<br>';
    html += '<strong>Faktorizacija:</strong> ' + fmtN(a) + '(x − ' + fmtN(x) + ')²';
  } else {
    const x1 = (-b + Math.sqrt(D))/(2*a), x2 = (-b - Math.sqrt(D))/(2*a);
    html += '<strong>Korak 2 (√D):</strong> √D = √' + fmtN(D) + ' ≈ ' + fmtN(Math.sqrt(D)) + '<br>';
    html += '<strong>Korak 3 (formula):</strong> x = (−' + fmtN(b) + ' ± ' + fmtN(Math.sqrt(D)) + ') / ' + fmtN(2*a) + '<br>';
    html += '→ x₁ = <strong style="color:var(--green)">' + fmtN(x1) + '</strong>, x₂ = <strong style="color:var(--green)">' + fmtN(x2) + '</strong><br>';
    html += '<strong>Korak 4 (Viète provjera):</strong> x₁+x₂ = ' + fmtN(x1+x2) + (Math.abs(x1+x2+b/a)<0.001?' = '+fmtN(-b/a)+' ✓':' ✗') + ', x₁x₂ = ' + fmtN(x1*x2) + (Math.abs(x1*x2-c/a)<0.001?' = '+fmtN(c/a)+' ✓':' ✗') + '<br>';
    html += '<strong>Faktorizacija:</strong> ' + fmtN(a) + '(x − ' + fmtN(x1) + ')(x − ' + fmtN(x2) + ')';
  }
  html += '</div>';
  r.classList.add('show'); r.innerHTML = html;
}




let matchState = { selected: null, score: 0 };


/* === bug/match/fd functions from P09 V2 === */
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


/* ═══ CORE FUNCTIONS (patched) ═══ */
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

function favGetAll() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); }
  catch(e) { return []; }
}

function favSave(arr) {
  try { localStorage.setItem(FAV_KEY, JSON.stringify(arr)); } catch(e) {}
}



/* === INJECTED FUNCTIONS === */
let drFilter_v = 'all';
let drCurrent = [];
let drI = 0;
let drStreak = 0;
let drAnswered = false;
let quizAns = {};
let retryMode = false;
let retryIdxs = [];
let tiSec = 600;
let tiInterval = null;
let gonAns = {};

function drFilter(v, btn) {
  drFilter_v = v;
  document.querySelectorAll('.dr-filter').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  drBuildQueue();
  drI = 0;
  drShow();
}

function drBuildQueue() {
  const favs = favGetAll();
  if (drFilter_v === 'all') drCurrent = DRILL_DATA.map((_, i) => i);
  else if (drFilter_v === 'fav') drCurrent = favs.slice();
  else drCurrent = DRILL_DATA.map((_, i) => i).filter(i => DRILL_DATA[i].diff === drFilter_v);
  if (!drCurrent.length) { drCurrent = DRILL_DATA.map((_, i) => i); toast('Nema pitanja u tom filteru', 'warn', 2000); }
  document.getElementById('dr-t').textContent = drCurrent.length;
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

function drShowHint() {
  const idx = drCurrent[drI];
  const hint = DRILL_HINTS[idx] || DRILL_DATA[idx].exp;
  document.getElementById('dr-hint-t').innerHTML = hint;
  document.getElementById('dr-hint').classList.add('show');
  document.getElementById('dr-hint-btn').classList.remove('show');
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

function qOpt(qi, i, btn) {
  if (quizAns[qi] !== undefined) return;
  quizAns[qi] = i;
  btn.classList.add('sel');
  document.querySelectorAll('#qb' + qi + ' .qb-opt').forEach(b => b.onclick = null);
  const done = Object.keys(quizAns).length;
  const total = retryMode ? retryIdxs.length : QUIZ_DATA.length;
  document.getElementById('qz-done').textContent = done;
  if (done === total) document.getElementById('quiz-go').disabled = false;
  updateQuizStreak(qi, i);
}

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
  try {
    if (localStorage.getItem(LS_KEY + '_timerCollapsed') === '1') {
      var _tb = document.getElementById('timer-quiz-body');
      var _tbt = document.getElementById('timer-toggle-btn');
      if (_tb) _tb.classList.add('timer-collapsed');
      if (_tbt) { _tbt.classList.add('collapsed'); var _tl = _tbt.querySelector('.tt-lbl'); if (_tl) _tl.textContent = 'Pokaži'; }
    }
  } catch(e) {}
  const qw = document.getElementById('quiz-wrap');
  if (qw && !qw.classList.contains('locked')) {
    document.querySelectorAll('.qb').forEach(b => b.classList.remove('qb-locked'));
  }
}

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
  // Retry nasljeđuje unlock — ako je kviz-wrap već otključan, ukloni qb-locked
  const qw = document.getElementById('quiz-wrap');
  if (qw && !qw.classList.contains('locked')) {
    document.querySelectorAll('.qb').forEach(b => b.classList.remove('qb-locked'));
  }
  toast('🔄 Retry mode: ' + wrong.length + ' pitanja', 'info', 2500);
  window.scrollTo({top: qw.offsetTop - 20, behavior:'smooth'});
}

function openDiscereModal(){const m=document.getElementById('discere-modal');if(m)m.classList.add('show');}

function closeDiscereModal(){const m=document.getElementById('discere-modal');if(m)m.classList.remove('show');}


setTimeout(function(){ if(typeof drShow==="function")drShow(); if(typeof renderQuiz==="function")renderQuiz(); }, 200);

/* ── GON TOGGLE ── */
function toggleGon() {
  const body = document.getElementById('gon-body');
  const btn  = document.getElementById('gon-toggle-btn');
  const prog = document.getElementById('gon-prog-wrap');
  if (!body || !btn) return;
  const collapsed = body.classList.toggle('gon-collapsed');
  btn.classList.toggle('collapsed', collapsed);
  btn.querySelector('.gt-lbl').textContent = collapsed ? 'Pokaži' : 'Sakrij';
  if (prog) prog.style.opacity = collapsed ? '0.4' : '1';
  try { localStorage.setItem(LS_KEY + '_gonCollapsed', collapsed ? '1' : '0'); } catch(e) {}
}



/* ── INIT ── */
window.addEventListener('DOMContentLoaded', function(){

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

  try {
    var d = lsLoad();
    d.visits = (d.visits || 0) + 1;
    lsSave(d);
    if (!d.welcomeClosed) {
      setTimeout(function(){
        var w = document.getElementById('welcome');
        if (w) w.classList.add('show');
      }, 400);
    }
  } catch(e) {}


  

  try { renderGon(); } catch(e) {}
  try { drBuildQueue(); drShow(); } catch(e) {}
  try { renderQuiz(); } catch(e) {}
  try { pbxUpdate(); } catch(e) {}
  try { favRender(); } catch(e) {}
  try { animateHero(); } catch(e) {}
  try { updateProg(); } catch(e) {}
  try {
    if (localStorage.getItem(LS_KEY + '_gonCollapsed') === '1') {
      var _gb = document.getElementById('gon-body');
      var _gtb = document.getElementById('gon-toggle-btn');
      if (_gb) _gb.classList.add('gon-collapsed');
      if (_gtb) { _gtb.classList.add('collapsed'); var _gl = _gtb.querySelector('.gt-lbl'); if (_gl) _gl.textContent = 'Pokaži'; }
    }
    if (localStorage.getItem(LS_KEY + '_timerCollapsed') === '1') {
      var _tb = document.getElementById('timer-quiz-body');
      var _tbt = document.getElementById('timer-toggle-btn');
      if (_tb) _tb.classList.add('timer-collapsed');
      if (_tbt) { _tbt.classList.add('collapsed'); var _tl = _tbt.querySelector('.tt-lbl'); if (_tl) _tl.textContent = 'Pokaži'; }
    }
  } catch(e) {}
});


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
</script>

<!-- ═══ BOTTOM NAV ═══ -->

<div style="height:80px" aria-hidden="true"></div>




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
  <div class="paywall-card" style="border-top:3px solid #34D399;max-width:480px">
    <button class="paywall-close" onclick="closeDiscereModal()">×</button>
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,#34D399,#10B981);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:22px">🎯</div>
      <div>
        <div style="font-size:20px;font-weight:800;color:var(--t1)">Discere Simulator</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3)">Standard · 9,99€/mj</div>
      </div>
    </div>
    <div style="color:var(--t2);font-size:13.5px;line-height:1.65;margin-bottom:16px">Pristup <strong style="color:var(--t1)">70+ pravih NCVVO ispita</strong> — MAT B, od 2010. do danas. Automatsko bodovanje, statistike po temama, prikaz grešaka.</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:18px">
      <div style="background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2);border-radius:8px;padding:10px 12px;font-size:12px"><div style="color:var(--green);font-weight:700;margin-bottom:3px">✓ Pravi ispiti</div><div style="color:var(--t2)">70+ roka od 2010.</div></div>
      <div style="background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2);border-radius:8px;padding:10px 12px;font-size:12px"><div style="color:var(--green);font-weight:700;margin-bottom:3px">✓ Auto feedback</div><div style="color:var(--t2)">Svaki korak objašnjen</div></div>
      <div style="background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2);border-radius:8px;padding:10px 12px;font-size:12px"><div style="color:var(--green);font-weight:700;margin-bottom:3px">✓ Statistike</div><div style="color:var(--t2)">Napredak po temama</div></div>
      <div style="background:rgba(52,211,153,0.07);border:1px solid rgba(52,211,153,0.2);border-radius:8px;padding:10px 12px;font-size:12px"><div style="color:var(--green);font-weight:700;margin-bottom:3px">✓ Timer + bodovi</div><div style="color:var(--t2)">Kao pravi ispit</div></div>
    </div>
    <button onclick="closeDiscereModal()" style="width:100%;padding:13px;background:linear-gradient(135deg,#34D399,#10B981);color:#000;font-weight:800;font-size:14px;border:none;border-radius:10px;cursor:pointer;font-family:var(--mono)">Otključaj Discere → 9,99€/mj</button>
    <div style="text-align:center;margin-top:10px;font-family:var(--mono);font-size:10px;color:var(--t3)">Standard plan · otkaži bilo kad</div>
  </div>
</div>
</body>`;

export const P06_META = {
  code: 'P06',
  title: 'Kvadratne jednadžbe',
  filename: 'Maturiraj_MatB_P06_FIXED.html',
};

export default P06_HTML;