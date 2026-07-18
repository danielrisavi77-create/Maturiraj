// Maturiraj MatB — P02 · Razlomci i postoci
// Auto-generated from Maturiraj_MatB_P02_FIXED.html
// Sadrži: cijeli HTML, CSS, JS runtime, sve podatke

export const P02_HTML = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
<meta name="theme-color" content="#060910">
<meta name="description" content="Razlomci i postoci (P02). Skraćivanje, NZD/NZV, operacije, pretvorbe, postotni račun, kamate. Razlomak Visualizer s drag-rubom, 12 Challenge taskova, 9 SR primjera.">
<title>Maturiraj.hr — Mat B · P02 · Razlomci i postoci</title>
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
.wrap{max-width:900px;margin:0 auto;padding:28px 32px 80px}

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
  .sidebar{width:100%;height:auto;position:static;border-right:none;border-bottom:1px solid var(--bdm);padding:14px}
  .wrap{padding:18px 16px 60px}
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


/* POSTOTNI RAČUN — segmented mode picker */
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

/* Anchor offset za smooth-scroll (zbog topbar nadnaslova) */
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

/* Mobile responsive */
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


/* ═══ PREMIUM GATES (bulk-injected) ═══ */
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
.premium-preview-msg.ai { color: var(--cyan); }
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


/* === bug/match/fd injected from P09 V2 === */
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
.match-reset{margin-top:14px;display:flex;justify-content:center}
.match-reset-btn{padding:7px 16px;background:var(--inp);border:1px solid var(--bdm);color:var(--t2);font-family:var(--mono);font-size:11px;font-weight:600;border-radius:var(--r2);cursor:pointer;transition:all .15s}
.match-reset-btn:hover{border-color:var(--bd-c);color:var(--t1)}
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
  <div class="sb-item active"><span class="sb-dot"></span>02 · Razlomci i postoci<div class="sb-progress"><div class="sb-prog-track"><div class="sb-prog-fill" id="sb-prog-fill"></div></div><span class="sb-prog-pct" id="sb-prog-pct">0%</span></div></div>
  <div class="sb-item" onclick="navigateChapter('p03')" style="cursor:pointer"><span class="sb-dot"></span>03 · Potencije i korijeni</div>
  <div class="sb-item" onclick="navigateChapter('p04')" style="cursor:pointer"><span class="sb-dot"></span>04 · Algebarski izrazi</div>
  <div class="sb-title">Jednadžbe i funkcije</div>
  <div class="sb-item" onclick="navigateChapter('p05')" style="cursor:pointer"><span class="sb-dot"></span>05 · Linearne jednadžbe</div>
  <div class="sb-item" onclick="navigateChapter('p06')" style="cursor:pointer"><span class="sb-dot"></span>06 · Kvadratne jednadžbe</div>
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
<main class="main" id="main-content">
<div class="wrap">

<div class="topbar">
  <div class="topbar-L">
    <span class="ch-badge">P / 02</span>
    <h1 class="ch-title"><span class="acc">Razlomci</span> i postoci</h1>
  </div>
  <div class="topbar-R">
    <span class="pill pts">2-4 BODA</span>
    <span class="pill time">~35 MIN</span>
    <span class="pill prio">★★★ · TEMELJ</span>
  </div>
</div>

<div class="welcome" id="welcome">
  <div class="welcome-head">
    <h2 class="welcome-h">🧮 Razlomci i postoci — temelj financijske matematike</h2>
    <button class="welcome-x" onclick="closeWelcome()" aria-label="Zatvori">✕</button>
  </div>
  <p class="welcome-t">Temelj svega — <strong>ℕ, ℤ, ℚ, ℝ, intervali, apsolutna vrijednost, ∩, ∪</strong>. Bez ovih pojmova ne čitaš zadatke. Uz ovo poglavlje dobivaš <strong>Interval Explorer 2.0</strong> s brojevnim pravcem, 12 Challenge taskova, Venn dijagrame, kalkulator intervala i 9 SR primjera od hijerarhije skupova do apsolutnih nejednadžbi.</p>
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
  <div class="hero-deco">ℕℤℚℝ</div>
  <div class="hero-top">
    <span class="hero-kb">P02 · RAZLOMCI · POSTOCI · PDV</span>
    <span class="hero-prio">★★★</span>
  </div>
  <h2 class="hero-h"><span class="acc">Razlomci</span> i <span class="acc2">postoci</span></h2>
  <p class="hero-sub">Matematički <strong>rječnik mature</strong> — ℕ, ℤ, ℚ, ℝ, intervali, apsolutna vrijednost, operacije sa skupovima. <strong>Bez ovoga ne čitaš ni zadatak</strong>. 2–4 boda svake mature, ali koristiš ga u <em>svakom</em> drugom poglavlju.</p>
  
  <div class="hero-chips">
    <span class="hero-chip"><span class="ci">📐</span> ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</span>
    <span class="hero-chip"><span class="ci">🎯</span> Interval Explorer 2.0</span>
    <span class="hero-chip"><span class="ci">🧠</span> 9 SR primjera</span>
    <span class="hero-chip"><span class="ci">🏆</span> 12 Challenge taskova</span>
  </div>
  
  <div class="hero-pts-wrap">
    <div class="hero-pts-ring">
      <svg viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="#1f2937" stroke-width="3"/>
        <circle id="hero-ring" cx="24" cy="24" r="20" fill="none" stroke="#F59E0B" stroke-width="3" stroke-dasharray="125.6" stroke-dashoffset="125.6" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="hero-pts-lbl"><strong id="hero-pts-counter">0</strong> / 4 bodova<br><span style="color:var(--amber);font-size:10px">ovog poglavlja na maturi</span></div>
  </div>
  
  <div class="ach-wrap" id="ach-wrap">
    <div class="ach-badge" id="ach-explorer" data-ach="explorer"><span class="ach-ico">🎨</span><span>Explorer</span></div>
    <div class="ach-badge" id="ach-streaker" data-ach="streaker"><span class="ach-ico">🔥</span><span>Streak 5</span></div>
    <div class="ach-badge" id="ach-perfect" data-ach="perfect"><span class="ach-ico">💎</span><span>Perfekt 8/8</span></div>
    <div class="ach-badge" id="ach-master" data-ach="master"><span class="ach-ico">👑</span><span>Master</span></div>
  </div>
  
  <div class="stat-grid">
    <div class="stat-card">
      <span class="sc-ico">¾</span>
      <div class="sc-h">Razlomak</div>
      <div class="sc-t">Brojnik kroz <strong>nazivnik</strong>, q ≠ 0</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">↓</span>
      <div class="sc-h">Skraćivanje</div>
      <div class="sc-t">Podijeli s <strong>NZD</strong> brojnika i nazivnika</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">+−</span>
      <div class="sc-h">Operacije</div>
      <div class="sc-t">Zajednički nazivnik = <strong>NZV</strong></div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">.5</span>
      <div class="sc-h">Decimal ↔ razlomak</div>
      <div class="sc-t">0.75 = <strong>3/4</strong>, 1/3 = 0.333...</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">%</span>
      <div class="sc-h">Postotak</div>
      <div class="sc-t">25% = <strong>25/100</strong> = 0.25</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">€</span>
      <div class="sc-h">Postotni račun</div>
      <div class="sc-t">P = <strong>(O · p) / 100</strong></div>
    </div>
  </div>
</div>

<div class="box-grid">
  <div class="con" data-no="→"><span><strong>Razlomak p/q</strong> = brojnik / nazivnik. Nazivnik q ≠ 0. Razlomci predstavljaju <em>dijelove cjeline</em>.</span></div>
  <div class="con" data-no="→"><span><strong>Skraćivanje</strong> = podijeliti brojnik i nazivnik istim brojem. Najbrže s <em>NZD-om</em> (najveći zajednički djelitelj).</span></div>
  <div class="con" data-no="→"><span><strong>Zajednički nazivnik</strong> dvaju razlomaka = <em>NZV</em> (najmanji zajednički višekratnik) njihovih nazivnika.</span></div>
  <div class="con" data-no="→"><span><strong>Razlomak ↔ decimal:</strong> dijeli brojnik nazivnikom. Konačni (1/4 = 0.25) ili periodički (1/3 = 0.3̄).</span></div>
  <div class="con" data-no="→"><span><strong>Postotak p%</strong> = <em>p/100</em>. Tako 25% = 0.25 = 1/4. Promil ‰ = 1/1000.</span></div>
  <div class="con" data-no="→"><span><strong>Postotni račun:</strong> postotni iznos P = (osnovica O · postotak p) / 100. Iz dva poznata, treći se izračuna.</span></div>
</div>

<div class="box-20">
  <div class="box-20-lbl">⚡ 20 sekundi — zapamti ovih 6</div>
  <ul class="box-20-list">
    <li><strong>Skraćivanje:</strong> dijeli brojnik i nazivnik istim brojem (NZD je najbrži)</li>
    <li><strong>Zbrajanje razlomaka:</strong> isti nazivnik → zbroji brojnike. Različiti → zajednički nazivnik (NZV)</li>
    <li><strong>Množenje:</strong> brojnik · brojnik kroz nazivnik · nazivnik. <strong>Dijeljenje:</strong> pomnoži s recipročnim</li>
    <li><strong>Razlomak → postotak:</strong> pomnoži s 100. <strong>Postotak → razlomak:</strong> podijeli sa 100</li>
    <li><strong>Postotni iznos:</strong> P = (O · p) / 100. Npr. 15% od 200 = 30</li>
    <li><strong>Povećanje za p%:</strong> O · (1 + p/100). <strong>Smanjenje:</strong> O · (1 − p/100)</li>
  </ul>
</div>

<div class="box-for">
  <div class="box-for-lbl">⚙ Ključne formule — uvijek imaj u glavi</div>
  <div class="for-grid">
    <div class="for-item">
      <span class="lbl">Postotni iznos</span>
      <div class="val">P = (O · p) / 100</div>
    </div>
    <div class="for-item">
      <span class="lbl">Osnovica</span>
      <div class="val">O = (P · 100) / p</div>
    </div>
    <div class="for-item">
      <span class="lbl">Postotak</span>
      <div class="val">p = (P · 100) / O</div>
    </div>
    <div class="for-item">
      <span class="lbl">Konačna vrijednost</span>
      <div class="val">K = O · (1 ± p/100)</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <span class="nb off">← Nema prethodnog</span>
  <button class="nb primary" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">📐 Uči →</button>
</div>

</section>
<section id="l1" class="sec" role="tabpanel">

<!-- SEKCIJA 1: RAZLOMAK -->
<div class="sec-head">
  <span class="sec-badge">1 / 12</span>
  <h3 class="sec-h">Razlomak — definicija i vrste</h3>
</div>
<div class="sec-body">
  <p><strong>Razlomak</strong> p/q je zapis dijela cjeline. <em>p</em> je <strong>brojnik</strong> (koliko dijelova imamo), <em>q</em> je <strong>nazivnik</strong> (na koliko jednakih dijelova smo podijelili cjelinu). Nazivnik q ne smije biti 0.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Vrste razlomaka:</strong><br>
      → <em>Pravi:</em> brojnik &lt; nazivnik (npr. 3/5, vrijednost &lt; 1)<br>
      → <em>Nepravi:</em> brojnik ≥ nazivnik (npr. 7/4, vrijednost ≥ 1)<br>
      → <em>Mješoviti broj:</em> kombinacija cijelog i pravog razlomka (1¾ = 7/4)<br>
      → <em>Decimalni:</em> nazivnik je 10, 100, 1000... (3/10 = 0.3)
    </div>
  </div>
  
  <div style="display:flex;justify-content:center;margin:16px 0">
    <svg viewBox="0 0 380 130" width="380" height="130" style="max-width:100%;background:var(--inp);border-radius:var(--r2);border:1px solid var(--bdm)">
      <!-- Pita 3/4 -->
      <g transform="translate(70, 65)">
        <circle cx="0" cy="0" r="40" fill="#0E1422" stroke="#7A90BB" stroke-width="1.5"/>
        <path d="M 0,0 L 0,-40 A 40,40 0 0,1 0,40 Z" fill="rgba(245,158,11,0.45)" stroke="#F59E0B" stroke-width="1.5"/>
        <path d="M 0,0 L 0,40 A 40,40 0 0,1 -40,0 Z" fill="rgba(245,158,11,0.45)" stroke="#F59E0B" stroke-width="1.5"/>
        <line x1="0" y1="-40" x2="0" y2="40" stroke="#7A90BB" stroke-width="1"/>
        <line x1="-40" y1="0" x2="40" y2="0" stroke="#7A90BB" stroke-width="1"/>
        <text x="0" y="65" fill="#F59E0B" font-family="JetBrains Mono" font-size="13" font-weight="700" text-anchor="middle">3/4</text>
        <text x="0" y="-58" fill="#E4EDFF" font-family="JetBrains Mono" font-size="10" text-anchor="middle">pravi</text>
      </g>
      <!-- Kvadrat 5/8 -->
      <g transform="translate(190, 30)">
        <rect width="100" height="60" fill="#0E1422" stroke="#7A90BB" stroke-width="1.5"/>
        <line x1="25" y1="0" x2="25" y2="60" stroke="#7A90BB" stroke-width="0.7"/>
        <line x1="50" y1="0" x2="50" y2="60" stroke="#7A90BB" stroke-width="0.7"/>
        <line x1="75" y1="0" x2="75" y2="60" stroke="#7A90BB" stroke-width="0.7"/>
        <line x1="0" y1="30" x2="100" y2="30" stroke="#7A90BB" stroke-width="0.7"/>
        <rect x="0" y="0" width="25" height="30" fill="rgba(34,211,238,0.45)" stroke="#22D3EE" stroke-width="1"/>
        <rect x="25" y="0" width="25" height="30" fill="rgba(34,211,238,0.45)" stroke="#22D3EE" stroke-width="1"/>
        <rect x="50" y="0" width="25" height="30" fill="rgba(34,211,238,0.45)" stroke="#22D3EE" stroke-width="1"/>
        <rect x="75" y="0" width="25" height="30" fill="rgba(34,211,238,0.45)" stroke="#22D3EE" stroke-width="1"/>
        <rect x="0" y="30" width="25" height="30" fill="rgba(34,211,238,0.45)" stroke="#22D3EE" stroke-width="1"/>
        <text x="50" y="80" fill="#22D3EE" font-family="JetBrains Mono" font-size="13" font-weight="700" text-anchor="middle">5/8</text>
      </g>
      <!-- Decimal -->
      <g transform="translate(330, 65)">
        <text x="0" y="0" fill="#818CF8" font-family="JetBrains Mono" font-size="14" font-weight="700" text-anchor="middle">= 0.625</text>
      </g>
    </svg>
  </div>
  
  <div class="emph"><strong>Recipročni razlomak:</strong> p/q i q/p (zamijenjeni brojnik i nazivnik). Umnožak je 1: (p/q) · (q/p) = 1.</div>
</div>

<!-- SEKCIJA 2: SKRAĆIVANJE RAZLOMKA -->
<div class="sec-head">
  <span class="sec-badge">2 / 12</span>
  <h3 class="sec-h">Skraćivanje razlomka — najmanji oblik</h3>
</div>
<div class="sec-body">
  <p><strong>Skraćivanje</strong> = podijeliti brojnik <em>i</em> nazivnik istim brojem. Vrijednost razlomka se ne mijenja, samo zapis postaje <em>jednostavniji</em>.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Najbrži način:</strong> nađi <em>NZD</em> (najveći zajednički djelitelj) brojnika i nazivnika i podijeli oboje s njim.<br><br>
      Primjer: 18/24 — NZD(18, 24) = 6 → 18/24 = (18÷6)/(24÷6) = <em>3/4</em>.<br>
      Primjer: 45/60 — NZD(45, 60) = 15 → 45/60 = <em>3/4</em>.
    </div>
  </div>
  
  <div class="emph"><strong>Razlomak je u <em>najmanjem obliku</em></strong> kada je NZD(p, q) = 1 — tada se više ne može skratiti. Npr. 3/4, 7/9, 11/15.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Bez NZD-a — postupno:</strong> dijeli s 2, 3, 5, 7... dok god se može. 18/24 → 9/12 (÷2) → 3/4 (÷3). Sporije, ali sigurno.</div>
  </div>
</div>

<!-- SEKCIJA 3: PROŠIRIVANJE I ZAJEDNIČKI NAZIVNIK -->
<div class="sec-head">
  <span class="sec-badge">3 / 12</span>
  <h3 class="sec-h">Proširivanje + zajednički nazivnik (NZV)</h3>
</div>
<div class="sec-body">
  <p><strong>Proširivanje</strong> = pomnožiti brojnik <em>i</em> nazivnik istim brojem. Suprotno od skraćivanja. Koristi se kada želiš dva razlomka <em>svesti na isti nazivnik</em> da bi ih mogao zbrojiti, oduzeti ili usporediti.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Zajednički nazivnik dvaju razlomaka</strong> = <em>NZV</em> (najmanji zajednički višekratnik) njihovih nazivnika.<br><br>
      Primjer: 1/4 i 1/6. NZV(4, 6) = 12. Proširi: 1/4 = 3/12, 1/6 = 2/12.<br>
      Sad ih možeš zbrojiti: 1/4 + 1/6 = 3/12 + 2/12 = <em>5/12</em>.
    </div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Bez NZV-a — pomnoži nazivnike:</strong> 1/4 + 1/6 = 6/24 + 4/24 = 10/24 = 5/12 (na kraju skratiš). Sigurno radi, ali dobiješ veće brojeve.</div>
  </div>
</div>

<!-- SEKCIJA 4: OPERACIJE S RAZLOMCIMA -->
<div class="sec-head">
  <span class="sec-badge">4 / 12</span>
  <h3 class="sec-h">Operacije s razlomcima (+, −, ·, ÷)</h3>
</div>
<div class="sec-body">
  <p>Pravila operacija s razlomcima:</p>
  
  <div class="emph"><strong>Zbrajanje / oduzimanje:</strong> svedi na <em>zajednički nazivnik</em>, pa zbroji/oduzmi brojnike. Nazivnik ostaje isti.<br>p/q ± r/s = (p·s ± r·q) / (q·s)</div>
  
  <div class="emph"><strong>Množenje:</strong> brojnik · brojnik kroz nazivnik · nazivnik (skraćuj prije ako možeš).<br>(p/q) · (r/s) = (p · r) / (q · s)</div>
  
  <div class="emph"><strong>Dijeljenje:</strong> pomnoži <em>recipročnim</em> drugog razlomka.<br>(p/q) ÷ (r/s) = (p/q) · (s/r) = (p · s) / (q · r)</div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Najčešća greška:</strong> studentom često zbraja "brojnik s brojnikom, nazivnik s nazivnikom" → <em>pogrešno</em>. 1/2 + 1/3 ≠ 2/5! Svedi na NZV: 3/6 + 2/6 = 5/6.</div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Kraćenje prije množenja:</strong> 4/9 · 3/8 — možeš skratiti 4 i 8 (NZD = 4): 1/9 · 3/2. Pa 3 i 9: 1/3 · 1/2 = 1/6. Brže nego množiti pa skraćivati.</div>
  </div>
</div>
<!-- ═══ PREMIUM GATE 1: AI PROFESOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Zaglavio si na razlomcima i postocima? Pitaj me što god — objašnjenje po koracima, prilagođeno tebi.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Što je 25% od 160?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Skratiti 42/56?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Povećanje za 20%?</span>
  </div>
  <div class="pg-ai-bubble">
    Postoci te muče? <strong>Osnovica, postotni iznos, postotni broj</strong> — vodim te kroz svaki tip zadatka<span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora →</button>
</div>


<!-- SEKCIJA 5: PRETVORBA RAZLOMAK ↔ DECIMAL -->
<div class="sec-head">
  <span class="sec-badge">5 / 12</span>
  <h3 class="sec-h">Razlomak ↔ decimalni broj — pretvorba</h3>
</div>
<div class="sec-body">
  <p>Svaki razlomak možeš zapisati kao decimalni broj <em>dijeljenjem brojnika nazivnikom</em>. Rezultat je ili konačni ili periodički decimalni.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Razlomak → decimal:</strong> p/q = p ÷ q. Npr. 3/4 = 0.75, 1/3 = 0.333... = 0.3̄, 5/8 = 0.625, 1/7 = 0.142857142857... = 0.1̄4̄2̄8̄5̄7̄.<br><br>
      <strong>Konačni decimal → razlomak:</strong> brojnik = bez točke, nazivnik = 10ⁿ (n = broj decimalnih mjesta), pa skratiti.<br>
      Primjer: 0.45 = 45/100 = 9/20.<br>
      Primjer: 1.25 = 125/100 = 5/4.
    </div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Periodički decimal → razlomak (P01 trik):</strong> 0.7̄ = x → 10x = 7.7̄ → 10x − x = 7 → x = 7/9. Općenito za period duljine k: pomnoži s 10ᵏ.</div>
  </div>
  
  <div class="emph"><strong>Brzo prepoznavanje konačnih:</strong> nazivnik (u skraćenom obliku) sadrži samo proste faktore <em>2 i 5</em>. Ako ima druge (3, 7, 11...) — bit će periodički. Npr. 1/8 (= 1/2³) konačan, 1/6 (= 1/(2·3)) periodički.</div>
</div>

<!-- SEKCIJA 6: POSTOTAK -->
<div class="sec-head">
  <span class="sec-badge">6 / 12</span>
  <h3 class="sec-h">Postotak — što je p%?</h3>
</div>
<div class="sec-body">
  <p><strong>Postotak p%</strong> je razlomak s nazivnikom 100. Oznaka <em>%</em> doslovno znači <em>"od sto"</em>.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Definicija:</strong> p% = p/100.<br><br>
      Primjeri: 25% = 25/100 = 1/4 = 0.25<br>
      50% = 1/2 = 0.5<br>
      100% = 1 (cijelo)<br>
      150% = 1.5 (jedan i pol)
    </div>
  </div>
  
  <div class="emph"><strong>Pretvorba:</strong><br>→ Postotak → razlomak: podijeli sa 100, pa skrati. 35% = 35/100 = 7/20.<br>→ Postotak → decimal: pomakni decimalnu točku za 2 mjesta lijevo. 35% = 0.35.<br>→ Decimal → postotak: pomnoži sa 100, dodaj %. 0.4 = 40%, 1.25 = 125%.<br>→ Razlomak → postotak: prvo pretvori u decimal, pa pomnoži sa 100. 3/8 = 0.375 = 37.5%.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Promil ‰</strong> je 1/1000 (deset puta manji od postotka). 50‰ = 50/1000 = 5%. Često u ekonomiji i medicini.</div>
  </div>
</div>

<!-- SEKCIJA 7: POSTOTNI RAČUN -->
<div class="sec-head">
  <span class="sec-badge">7 / 12</span>
  <h3 class="sec-h">Postotni račun — formula i tri tipa zadataka</h3>
</div>
<div class="sec-body">
  <p>U postotnom računu uvijek imamo tri elementa: <strong>osnovica</strong>, <strong>postotak</strong>, <strong>postotni iznos</strong>. Iz dva poznata, treći se izračuna formulom.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Glavna formula:</strong> P = (O · p) / 100<br><br>
      → <em>O</em> = osnovica (početna količina, "100%")<br>
      → <em>p</em> = postotak (koliko %)<br>
      → <em>P</em> = postotni iznos (koliko p% iznosi)
    </div>
  </div>
  
  <div class="emph"><strong>Tri tipa zadataka:</strong></div>
  
  <div class="callout tip">
    <span class="callout-i">①</span>
    <div class="callout-t"><strong>Tip 1 — Računamo P (postotni iznos):</strong> Koliko je 15% od 200?<br>P = (200 · 15) / 100 = 30. Odgovor: 30.</div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">②</span>
    <div class="callout-t"><strong>Tip 2 — Računamo O (osnovicu):</strong> 30 je 15% od kojeg broja?<br>O = (P · 100) / p = (30 · 100) / 15 = 200. Odgovor: 200.</div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">③</span>
    <div class="callout-t"><strong>Tip 3 — Računamo p (postotak):</strong> Koji je postotak broja 30 u broju 200?<br>p = (P · 100) / O = (30 · 100) / 200 = 15%. Odgovor: 15%.</div>
  </div>
  
  <div class="emph"><strong>Pamti:</strong> u svim formulama brojnik <em>množimo</em>, nazivnikom <em>dijelimo</em>. Ako tražiš P → množi O · p ÷ 100. Ako tražiš ono što "dijeli" → tu je 100 u brojniku.</div>
</div>

<!-- SEKCIJA 8: POVEĆANJE I SMANJENJE -->
<div class="sec-head">
  <span class="sec-badge">8 / 12</span>
  <h3 class="sec-h">Povećanje i smanjenje za p%</h3>
</div>
<div class="sec-body">
  <p>Najčešći maturski tip: cijena je porasla / pala za p%. Koliko sad iznosi? Ovaj tip se rješava <strong>jednom formulom</strong>.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Povećanje za p%:</strong> K = O · (1 + p/100)<br>
      <strong>Smanjenje za p%:</strong> K = O · (1 − p/100)<br><br>
      <em>K</em> je nova (konačna) vrijednost, <em>O</em> je stara (osnovica), <em>p</em> je postotak promjene.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1 (povećanje):</strong> Cijena 200 €, povećana za 15%. Nova: K = 200 · (1 + 0.15) = 200 · 1.15 = <em>230 €</em>.</div>
  
  <div class="emph"><strong>Primjer 2 (smanjenje):</strong> Cijena 250 €, popust 20%. Nova: K = 250 · (1 − 0.20) = 250 · 0.80 = <em>200 €</em>.</div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Pazi — uzastopne promjene se NE zbrajaju!</strong> Cijena raste 20%, pa pada 20% — <em>nije</em> nepromijenjena. Početni 100 → 120 → 96 (ne 100). Razlog: druga promjena je od <em>nove</em> osnovice, ne od početne.</div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t">
      <strong>PDV trik:</strong> Cijena bez PDV-a je <em>O</em>, s PDV-om K = O · 1.25 (za 25%). <strong>Bez PDV-a:</strong> O = K / 1.25.<br>
      <strong>Popust + PDV:</strong> redom — najprije popust, pa PDV (ili obratno — ista konačna cijena, samo formula drugačija).
    </div>
  </div>
</div>

<!-- SEKCIJA 9: VISUALIZER -->
<div class="sec-head">
  <span class="sec-badge">9 / 12</span>
  <h3 class="sec-h">📊 Razlomak / Postotak Visualizer 2.0</h3>
</div>
<div class="sec-body">
  <p>Interaktivni alat. Drag rubom da podesiš razlomak, real-time prikaz pretvorbi razlomak ↔ decimal ↔ postotak. Tri moda: <em>Razlomak</em>, <em>Pretvorba</em>, <em>Postotni račun</em>.</p>
  
  <div class="pbx-wrap">
    <div class="pbx-head">
      <span class="pbx-title">razlomak / postotak visualizer</span>
      <span class="pbx-badge">LIVE</span>
    </div>
    
    <div class="pbx-mode-tabs">
      <button class="pbx-mode-tab on" onclick="pbxSetMode(0,this)">¾ Razlomak</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(1,this)">↔ Pretvorba</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(2,this)">% Postotni račun</button>
    </div>
    
    <div class="pbx-canvas-wrap">
      <div class="pbx-drag-hint">✥ povuci za ugađanje</div>
      <canvas class="pbx-canvas" id="pbx-canvas" width="640" height="280" aria-label="Razlomak visualizer"></canvas>
      <div class="pbx-zoom">
        <button class="pbx-zoom-btn" onclick="pbxZoom(0)" aria-label="Reset" style="font-size:11px">⌂</button>
      </div>
    </div>
    
    <div class="pbx-controls" id="pbx-free-ctrl">
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Brojnik p</span>
          <span class="pbx-ctrl-val" id="pbx-a-val">3</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-a" min="1" max="20" step="1" value="3">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Nazivnik q</span>
          <span class="pbx-ctrl-val v" id="pbx-b-val">4</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-b" min="2" max="20" step="1" value="4">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Stil prikaza</span>
          <span class="pbx-ctrl-val ok" id="pbx-style-val">Pita</span>
        </div>
        <button class="pbx-btn" onclick="pbxToggleStyle()" style="width:100%">Pita ↔ Kvadrat</button>
      </div>
    </div>

    <div class="pbx-controls" id="pbx-pct-ctrl" style="display:none">
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Osnovica O</span>
          <span class="pbx-ctrl-val" id="pbx-ppO-val">200</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-ppO" min="10" max="1000" step="10" value="200">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Postotak p%</span>
          <span class="pbx-ctrl-val v" id="pbx-ppP-val">15%</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-ppP" min="1" max="200" step="1" value="15">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Rezultat P</span>
          <span class="pbx-ctrl-val ok" id="pbx-ppResult">30</span>
        </div>
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);padding:8px 0 0">P = (O · p) / 100 = automatski izračun</div>
      </div>
    </div>
    
    <div class="pbx-presets">
      <button class="pbx-preset" onclick="pbxPreset('half',this)">1/2</button>
      <button class="pbx-preset" onclick="pbxPreset('quarter',this)">3/4</button>
      <button class="pbx-preset" onclick="pbxPreset('thirds',this)">2/3</button>
      <button class="pbx-preset" onclick="pbxPreset('eighths',this)">5/8</button>
      <button class="pbx-preset" onclick="pbxPreset('improper',this)">7/4</button>
      <button class="pbx-preset" onclick="pbxPreset('twentieth',this)">3/20</button>
    </div>
    
    <div class="pbx-legend">
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#F59E0B"></span><strong>Ispunjeno</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#0E1422;border:1.5px solid #7A90BB"></span><strong>Prazno</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#22D3EE"></span><strong>Cijela cjelina</strong></span>
    </div>
    
    <div class="pbx-info" id="pbx-info">
      Razlomak <strong>3/4</strong> = <strong>0.75</strong> = <strong>75%</strong> · skraćeno: <strong>3/4</strong>
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



<!-- SEKCIJA 10: NCVVO ZADACI -->
<div class="sec-head">
  <span class="sec-badge">10 / 12</span>
  <h3 class="sec-h">📝 NCVVO stvarni zadaci iz mature</h3>
</div>
<div class="sec-body">
  <p>Autentični zadaci iz MAT B mature — razlomci, postoci, kamate, popusti, PDV.</p>
  
  <div class="ncvvo-wrap">
    <div class="ncvvo-item">
      <div class="ncvvo-no">1</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2024 LJETO · Zadatak 6 · 3 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Cijena artikla je 240 €. Tijekom rasprodaje cijena je smanjena za 25%. Kolika je nova cijena?<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ K = 240 · (1 − 0.25) = 240 · 0.75 = <strong style="color:var(--green)">180 €</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">2</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2023 JESEN · Zadatak 4 · 3 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Izračunaj: 2/3 + 5/6 − 1/4.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ NZV(3, 6, 4) = 12. Proširi: 8/12 + 10/12 − 3/12 = <strong style="color:var(--amber)">15/12 = 5/4 = 1.25</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">3</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2022 LJETO · Zadatak 8 · 4 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Mate ima 80 € na štednoj knjižici uz godišnju kamatnu stopu 4%. Koliko ima nakon 1 godine?<br>
        <div style="margin:8px 0;display:flex;justify-content:center">
          <svg viewBox="0 0 280 60" width="280" height="60" style="background:rgba(10,15,26,0.6);border-radius:6px;border:1px solid var(--bdm)">
            <rect x="10" y="20" width="120" height="20" fill="rgba(34,211,238,0.3)" stroke="#22D3EE" stroke-width="1"/>
            <text x="70" y="35" fill="#22D3EE" font-family="JetBrains Mono" font-size="11" font-weight="700" text-anchor="middle">80 €</text>
            <text x="70" y="55" fill="#7A90BB" font-family="JetBrains Mono" font-size="9" text-anchor="middle">početak</text>
            <text x="155" y="35" fill="#E4EDFF" font-family="JetBrains Mono" font-size="14" text-anchor="middle">→</text>
            <rect x="180" y="15" width="90" height="30" fill="rgba(245,158,11,0.3)" stroke="#F59E0B" stroke-width="1"/>
            <text x="225" y="35" fill="#F59E0B" font-family="JetBrains Mono" font-size="11" font-weight="700" text-anchor="middle">83.20 €</text>
            <text x="225" y="55" fill="#7A90BB" font-family="JetBrains Mono" font-size="9" text-anchor="middle">+4%</text>
          </svg>
        </div>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ K = 80 · (1 + 0.04) = 80 · 1.04 = <strong style="color:var(--amber)">83.20 €</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">4</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2021 JESEN · Zadatak 5 · 3 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Knjiga koja košta 25 € s PDV-om (25%). Kolika je cijena bez PDV-a?<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ Cijena bez PDV-a · 1.25 = 25 → bez PDV-a = 25 / 1.25 = <strong style="color:var(--cyan)">20 €</strong>.</span></div>
      </div>
    </div>
  </div>
</div>

<!-- SEKCIJA 11: KALKULATOR 3 MODA -->
<div class="sec-head">
  <span class="sec-badge">11 / 12</span>
  <h3 class="sec-h">🧮 Kalkulator razlomaka i postotaka — 3 moda</h3>
</div>
<div class="sec-body">
  <p>Tri alata: pretvorba razlomak ↔ decimal ↔ postotak, NZD/NZV, postotni račun.</p>
  
  <div class="calc-wrap">
    <div class="calc-head">
      <span class="calc-title">// Razlomci, NZD/NZV, postotni račun</span>
    </div>
    <div class="calc-tabs" role="tablist">
      <button class="calc-tab on" onclick="p9SwitchMode(0,this)">↔ Pretvorba</button>
      <button class="calc-tab" onclick="p9SwitchMode(1,this)">NZD / NZV</button>
      <button class="calc-tab" onclick="p9SwitchMode(2,this)">% Postotni račun</button>
    </div>
    <div class="calc-body">
      <div id="p9-mode-0">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Unesi razlomak p/q → dobij decimal i postotak (i obratno)</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px">
          <span class="calc-lbl">p =</span>
          <input class="calc-in" id="p9c-a" type="number" value="3" style="width:70px" step="1">
          <span class="calc-lbl">/</span>
          <input class="calc-in" id="p9c-b" type="number" value="4" style="width:70px" step="1">
          <button class="calc-go" onclick="p9calc()">Pretvori →</button>
        </div>
      </div>
      <div id="p9-mode-1" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Izračunaj NZD i NZV dvaju brojeva</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px">
          <span class="calc-lbl">a =</span>
          <input class="calc-in" id="p9cv-a" type="number" value="18" style="width:70px" step="1">
          <span class="calc-lbl">b =</span>
          <input class="calc-in" id="p9cv-p" type="number" value="24" style="width:70px" step="1">
          <button class="calc-go" onclick="p9calcVertex()">Izračunaj →</button>
        </div>
      </div>
      <div id="p9-mode-2" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Postotni račun: P = (O · p) / 100. Odaberi <strong>što tražiš</strong>, unesi ostala dva.</div>
        
        <div class="pp-mode-pick" role="radiogroup" aria-label="Postotni račun — odabir nepoznate" style="display:flex;gap:4px;margin-bottom:10px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px">
          <button class="pp-mode-btn on" id="pp-mode-P" role="radio" aria-checked="true" onclick="ppSwitchTarget('P')">Tražim <strong>P</strong> <span style="opacity:.6">(iznos)</span></button>
          <button class="pp-mode-btn" id="pp-mode-O" role="radio" aria-checked="false" onclick="ppSwitchTarget('O')">Tražim <strong>O</strong> <span style="opacity:.6">(osnovicu)</span></button>
          <button class="pp-mode-btn" id="pp-mode-p" role="radio" aria-checked="false" onclick="ppSwitchTarget('p')">Tražim <strong>p%</strong> <span style="opacity:.6">(postotak)</span></button>
        </div>
        
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <label class="pp-field" id="pp-field-O">
            <span class="calc-lbl">O =</span>
            <input class="calc-in" id="p9cft-p" type="number" value="200" style="width:90px" step="1" inputmode="decimal">
          </label>
          <label class="pp-field" id="pp-field-p">
            <span class="calc-lbl">p =</span>
            <input class="calc-in" id="p9cft-q" type="number" value="15" style="width:80px" step="0.1" inputmode="decimal">
            <span class="calc-lbl" style="margin-left:-2px">%</span>
          </label>
          <label class="pp-field target" id="pp-field-P">
            <span class="calc-lbl">P =</span>
            <input class="calc-in" id="p9cft-px" type="number" value="" style="width:90px" step="0.1" placeholder="?" inputmode="decimal" disabled>
          </label>
          <button class="calc-go" onclick="p9calcFromT()">Izračunaj →</button>
        </div>
        
        <div class="pp-context-hint" id="pp-context-hint" style="margin-top:8px;font-family:var(--mono);font-size:10px;color:var(--t3);line-height:1.5">
          💡 <strong>Primjer:</strong> "Koliko je 15% od 200?" → P = ?
        </div>
      </div>
      <div class="calc-result" id="p9c-r"></div>
    </div>
  </div>
</div>

<!-- SEKCIJA 12: SR PRIMJERI -->
<div class="sec-head">
  <span class="sec-badge">12 / 12</span>
  <h3 class="sec-h">📚 Detaljno riješeni primjeri (9 komada, korak po korak)</h3>
</div>
<div class="sec-body">
  <p>Klikni "Pokreni" da vidiš korake jedan po jedan. Pokrivaju sve tipove zadataka.</p>

  <div class="sr" id="sr1">
    <div class="sr-head"><span class="sr-no">Primjer 1 · Skraćivanje razlomka</span><span class="sr-pts">2 boda</span></div>
    <div class="sr-q">Skrati razlomak 36/48 do najmanjeg oblika.</div>
    <button class="sr-try" onclick="tryIt(1)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr1-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Nađi NZD(36, 48). Faktorizacija: 36 = 2² · 3², 48 = 2⁴ · 3. NZD = 2² · 3 = <em>12</em>.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Podijeli oboje s 12: 36/48 = (36÷12)/(48÷12) = <em>3/4</em>.</div>
      <div class="sr-step" data-s="3"><strong>Provjera:</strong> NZD(3, 4) = 1 → razlomak 3/4 je u <em>najmanjem obliku</em>. ✓</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(1)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(1)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr2">
    <div class="sr-head"><span class="sr-no">Primjer 2 · Zbrajanje razlomaka</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Izračunaj: 5/6 + 3/4.</div>
    <button class="sr-try" onclick="tryIt(2)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr2-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Nađi zajednički nazivnik = NZV(6, 4). 6 = 2·3, 4 = 2². NZV = 2² · 3 = <em>12</em>.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Proširi: 5/6 = 10/12 (·2), 3/4 = 9/12 (·3).</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Zbroji brojnike: 10/12 + 9/12 = <em>19/12</em>.</div>
      <div class="sr-step" data-s="4"><strong>Korak 4:</strong> 19/12 nije pravi (brojnik &gt; nazivnik). U mješoviti: 19/12 = <em>1 + 7/12</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(2)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(2)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr3">
    <div class="sr-head"><span class="sr-no">Primjer 3 · Množenje i dijeljenje</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Izračunaj: (4/9) · (3/8) ÷ (1/2).</div>
    <button class="sr-try" onclick="tryIt(3)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr3-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Pretvori dijeljenje u množenje recipročnim: ÷ (1/2) = · (2/1).</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> (4/9) · (3/8) · (2/1).</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Skrati prije množenja: 4 i 8 (NZD = 4) → 1 i 2. Pa 3 i 9 (NZD = 3) → 1 i 3. Ostaje (1/3) · (1/2) · (2/1).</div>
      <div class="sr-step" data-s="4"><strong>Korak 4:</strong> = (1·1·2) / (3·2·1) = <em>2/6 = 1/3</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(3)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(3)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr4">
    <div class="sr-head"><span class="sr-no">Primjer 4 · Razlomak → decimal i postotak</span><span class="sr-pts">2 boda</span></div>
    <div class="sr-q">Pretvori 7/8 u decimalni broj i postotak.</div>
    <div class="sr-minigraph">
      <svg viewBox="0 0 220 50" width="220" height="50">
        <text x="20" y="30" fill="#F59E0B" font-family="JetBrains Mono" font-size="13" font-weight="700">7/8</text>
        <text x="65" y="30" fill="#7A90BB" font-family="JetBrains Mono" font-size="12">→</text>
        <text x="85" y="30" fill="#22D3EE" font-family="JetBrains Mono" font-size="13" font-weight="700">0.875</text>
        <text x="140" y="30" fill="#7A90BB" font-family="JetBrains Mono" font-size="12">→</text>
        <text x="160" y="30" fill="#34D399" font-family="JetBrains Mono" font-size="13" font-weight="700">87.5%</text>
      </svg>
    </div>
    <button class="sr-try" onclick="tryIt(4)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr4-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Decimal: 7 ÷ 8 = <em>0.875</em>. (Konačan jer 8 = 2³ — samo proste faktore 2.)</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Postotak: 0.875 · 100 = <em>87.5%</em>. Točka pomakne za 2 mjesta desno.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(4)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(4)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr5">
    <div class="sr-head"><span class="sr-no">Primjer 5 · Postotni iznos (Tip 1)</span><span class="sr-pts">2 boda</span></div>
    <div class="sr-q">Koliko je 18% od 350?</div>
    <button class="sr-try" onclick="tryIt(5)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr5-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Tip 1 — tražimo P. Formula: P = (O · p) / 100.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> P = (350 · 18) / 100 = 6300 / 100 = <em>63</em>.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> 18% od 350 iznosi <em>63</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(5)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(5)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr6">
    <div class="sr-head"><span class="sr-no">Primjer 6 · Osnovica (Tip 2)</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">42 je 14% od kojeg broja?</div>
    <button class="sr-try" onclick="tryIt(6)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr6-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Tip 2 — tražimo O. Formula: O = (P · 100) / p.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> O = (42 · 100) / 14 = 4200 / 14 = <em>300</em>.</div>
      <div class="sr-step" data-s="3"><strong>Provjera:</strong> 14% od 300 = (300 · 14) / 100 = 42 ✓</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(6)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(6)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr7">
    <div class="sr-head"><span class="sr-no">Primjer 7 · Postotak (Tip 3)</span><span class="sr-pts">2 boda</span></div>
    <div class="sr-q">Koji postotak broja 80 je broj 12?</div>
    <button class="sr-try" onclick="tryIt(7)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr7-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Tip 3 — tražimo p. Formula: p = (P · 100) / O.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> p = (12 · 100) / 80 = 1200 / 80 = <em>15</em>.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> 12 je <em>15%</em> od 80.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(7)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(7)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr8">
    <div class="sr-head"><span class="sr-no">Primjer 8 · Povećanje + smanjenje (uzastopno)</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Cijena artikla je porasla za 20%, pa pala za 20%. Kolika je u odnosu na početnu?</div>
    <div class="sr-minigraph">
      <svg viewBox="0 0 240 50" width="240" height="50">
        <text x="20" y="30" fill="#7A90BB" font-family="JetBrains Mono" font-size="11">100</text>
        <text x="55" y="30" fill="#34D399" font-family="JetBrains Mono" font-size="12">+20%</text>
        <text x="100" y="30" fill="#E4EDFF" font-family="JetBrains Mono" font-size="13" font-weight="700">120</text>
        <text x="135" y="30" fill="#F87171" font-family="JetBrains Mono" font-size="12">−20%</text>
        <text x="180" y="30" fill="#F59E0B" font-family="JetBrains Mono" font-size="13" font-weight="700">96</text>
      </svg>
    </div>
    <button class="sr-try" onclick="tryIt(8)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr8-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Pretpostavi početnu cijenu O = 100 (radi jednostavnosti).</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Nakon poskupljenja: K₁ = 100 · 1.20 = <em>120</em>.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Nakon pojeftinjenja: K₂ = 120 · 0.80 = <em>96</em>.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> Konačna cijena je 96, što je <em>4% manje</em> od početnih 100. <strong>Promjene se ne poništavaju!</strong></div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(8)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(8)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr9">
    <div class="sr-head"><span class="sr-no">Primjer 9 · PDV — tipičan maturski</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Cijena artikla s PDV-om (25%) iznosi 150 €. Kolika je cijena bez PDV-a?</div>
    <button class="sr-try" onclick="tryIt(9)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr9-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Cijena s PDV-om = cijena bez PDV-a · (1 + 0.25) = <em>1.25 · O</em>.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> 150 = 1.25 · O.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> O = 150 / 1.25 = <em>120 €</em>.</div>
      <div class="sr-step" data-s="4"><strong>Provjera:</strong> 120 + 25% od 120 = 120 + 30 = 150 ✓</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(9)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(9)">Reset</button></div>
    </div>
  </div>
</div>

<!-- FLASHCARDS -->
<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku — zbrajanje razlomaka</div>
  <div class="bug-body">
    <div class="bug-quote">Student: <em>"1/2 + 1/3 = 2/5."</em></div>
    <div class="bug-task">1/2 + 1/3 <span class="wrong">= 2/5</span></div>
    <div class="bug-opts" id="bug1-opts">
      <div class="bug-opt" onclick="bugAns(1, 0, this)">A) Točno — zbrajaju se brojnici i nazivnici.</div>
      <div class="bug-opt" onclick="bugAns(1, 1, this)">B) Greška — razlomke ne zbrajamo brojevniku+brojevnik / nazivnik+nazivnik. Treba zajednički nazivnik: 1/2 + 1/3 = 3/6 + 2/6 = <strong>5/6</strong>. "Zbrajanje po koordinatama" daje pogrešan rezultat (i nema matematičku osnovu).</div>
      <div class="bug-opt" onclick="bugAns(1, 2, this)">C) 1/2 + 1/3 = 1/6.</div>
    </div>
    <div class="bug-expl" id="bug1-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #2 — dijeljenje razlomaka</div>
  <div class="bug-body">
    <div class="bug-quote">Student: <em>"(1/2) ÷ (1/4) = 1/8 — dijelim brojevnik s brojevnikom i nazivnik s nazivnikom."</em></div>
    <div class="bug-task">(1/2) ÷ (1/4) <span class="wrong">= 1/8</span></div>
    <div class="bug-opts" id="bug2-opts">
      <div class="bug-opt" onclick="bugAns(2, 0, this)">A) Točno — dijeli se brojevnik s brojevnikom i nazivnik s nazivnikom.</div>
      <div class="bug-opt" onclick="bugAns(2, 1, this)">B) Greška — dijeljenje razlomaka = množenje s recipročnim! (1/2) ÷ (1/4) = (1/2) · (4/1) = 4/2 = <strong>2</strong>, ne 1/8.</div>
      <div class="bug-opt" onclick="bugAns(2, 2, this)">C) Točno je 1/8 jer je 1/2 manji od 1/4 pa dijeljenjem dobivamo manji razlomak.</div>
    </div>
    <div class="bug-expl" id="bug2-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #3 — postotak od postotka</div>
  <div class="bug-body">
    <div class="bug-quote">Cijena pala za 30%, pa porasla za 30%. Student: <em>"Cijena je ista kao na početku."</em></div>
    <div class="bug-task">Povratna cijena <span class="wrong">= početna</span></div>
    <div class="bug-opts" id="bug3-opts">
      <div class="bug-opt" onclick="bugAns(3, 0, this)">A) Točno — 30% + 30% = 0%, nema promjene.</div>
      <div class="bug-opt" onclick="bugAns(3, 1, this)">B) Greška — postoci se ne poništavaju! −30% pa +30% = 0.70 · 1.30 = <strong>0.91</strong>, dakle <strong>9% manje</strong> od početne. Razlog: pad se računa na originalnu (veću) bazu, rast na smanjenu (manju) bazu. Asimetrija je uvijek na štetu kupca.</div>
      <div class="bug-opt" onclick="bugAns(3, 2, this)">C) Cijena je 60% veća.</div>
    </div>
    <div class="bug-expl" id="bug3-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #4 — PDV unatrag</div>
  <div class="bug-body">
    <div class="bug-quote">Cijena s PDV (25%) = 500 €. Student: <em>"Bez PDV = 500 · 0.75 = 375 €."</em></div>
    <div class="bug-task">Bez PDV <span class="wrong">= 375 €</span></div>
    <div class="bug-opts" id="bug4-opts">
      <div class="bug-opt" onclick="bugAns(4, 0, this)">A) Točno — 500 minus 25% = 500 · 0.75.</div>
      <div class="bug-opt" onclick="bugAns(4, 1, this)">B) Greška — "minus 25%" od cijene s PDV-om NE daje cijenu bez PDV-a. Ispravno: cijena_bez = cijena_s / 1.25 = 500/1.25 = <strong>400 €</strong>. Provjera: 400 · 1.25 = 500 ✓. Problem: 25% PDV-a se računa na cijenu BEZ PDV-a, ne na cijenu S PDV-om.</div>
      <div class="bug-opt" onclick="bugAns(4, 2, this)">C) Bez PDV = 500 + 25% = 625 €.</div>
    </div>
    <div class="bug-expl" id="bug4-exp"></div>
  </div>
</div>
<div class="match-wrap">
  <div class="match-head">
    <span class="match-title">🧩 Spoji operaciju ↔ rezultat</span>
    <span class="match-score">Riješeno: <strong id="match-score">0</strong> / 5</span>
  </div>
  <div class="match-body">
    <div class="match-grid">
      <div class="match-col">
        <div class="match-col-lbl">Operacija</div>
        <button class="match-btn" data-pair="a" data-side="L" onclick="matchClick(this)">a/b + c/b</button>
        <button class="match-btn" data-pair="b" data-side="L" onclick="matchClick(this)">a/b · c/d</button>
        <button class="match-btn" data-pair="c" data-side="L" onclick="matchClick(this)">a/b ÷ c/d</button>
        <button class="match-btn" data-pair="d" data-side="L" onclick="matchClick(this)">a%</button>
        <button class="match-btn" data-pair="e" data-side="L" onclick="matchClick(this)">K · (1−p/100)</button>
      </div>
      <div class="match-col">
        <div class="match-col-lbl">Rezultat</div>
        <button class="match-btn" data-pair="d" data-side="R" onclick="matchClick(this)">a/100 (posto od 100)</button>
        <button class="match-btn" data-pair="a" data-side="R" onclick="matchClick(this)">a+c/b (zajednički nazv.)</button>
        <button class="match-btn" data-pair="e" data-side="R" onclick="matchClick(this)">smanjenje za p%</button>
        <button class="match-btn" data-pair="b" data-side="R" onclick="matchClick(this)">ac/bd (množenje)</button>
        <button class="match-btn" data-pair="c" data-side="R" onclick="matchClick(this)">a/b · d/c (recipročno)</button>
      </div>
    </div>
    <div class="match-reset"><button class="match-reset-btn" onclick="matchReset()">↺ Reset</button></div>
  </div>
</div>
<div class="fd-wrap">
  <div class="fd-head"><span class="fd-title">🔍 Formula Decoder — klikni na simbol</span></div>
  <div class="fd-body">
    <div class="fd-formula-big"><span class="fd-hot" data-sym="0" onclick="decodeSym(this,0)" style="color:var(--pink)">p%</span>&nbsp;<span style="color:var(--t2)">od</span>&nbsp;<span class="fd-hot" data-sym="1" onclick="decodeSym(this,1)" style="color:var(--green)">K</span>&nbsp;<span style="color:var(--t2)">=</span>&nbsp;<span class="fd-hot" data-sym="2" onclick="decodeSym(this,2)" style="color:var(--cyan)">K</span>&nbsp;<span style="color:var(--t2)">·</span>&nbsp;<span class="fd-hot" data-sym="3" onclick="decodeSym(this,3)" style="color:var(--amber)">p</span>&nbsp;<span style="color:var(--t2)">/</span>&nbsp;<span class="fd-hot" data-sym="4" onclick="decodeSym(this,4)" style="color:var(--purple,#A78BFA)">100</span></div>
    <div class="fd-symbols">
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),0,this)"><span class="fd-sym-letter" style="color:var(--pink)">p%</span><span class="fd-sym-name">p% (postotak)</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),1,this)"><span class="fd-sym-letter" style="color:var(--green)">K</span><span class="fd-sym-name">K (cijeli iznos / osnovica)</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),2,this)"><span class="fd-sym-letter" style="color:var(--cyan)">K</span><span class="fd-sym-name">K (množimo s p/100)</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),3,this)"><span class="fd-sym-letter" style="color:var(--amber)">p</span><span class="fd-sym-name">p (broj postotaka)</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),4,this)"><span class="fd-sym-letter" style="color:var(--purple,#A78BFA)">100</span><span class="fd-sym-name">100 (nazivnik postotka)</span></div>
    </div>
    <div class="fd-explain" id="fd-exp">👆 Klikni bilo koji simbol (u formuli ili ispod) da vidiš njegovo značenje.</div>
  </div>
</div>

<div class="fc-row">
  <span class="fc-h">🧠 Flashcards · 13 pojmova</span>
  <div class="fc-ctrl">
    <button class="fc-all-btn" onclick="fcShuffle()" style="border-color:var(--bd-c);color:var(--cyan)">🔀 Promiješaj</button>
    <button class="fc-all-btn" onclick="flipAllCards()">↺ Okreni sve</button>
  </div>
</div>
<div class="fc-grid">
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">RAZLOMAK</div><div class="fc-q">Brojnik / nazivnik</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>p / q</strong>, q ≠ 0<br>p = brojnik, q = nazivnik</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">SKRAĆ.</div><div class="fc-q">Kako skratiti?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a">Podijeli p i q s <strong>NZD(p, q)</strong>. Najmanji oblik: NZD = 1.</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">ZBR.</div><div class="fc-q">a/b + c/d = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>(ad + bc) / bd</strong><br>Bolje: NZV(b, d).</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">MNOŽ.</div><div class="fc-q">a/b · c/d = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>(a · c) / (b · d)</strong><br>Skraćuj prije ako možeš.</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">DIJEL.</div><div class="fc-q">a/b ÷ c/d = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>(a/b) · (d/c)</strong><br>Pomnoži s recipročnim.</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">→ DEC.</div><div class="fc-q">3/8 = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>0.375</strong><br>(3 ÷ 8 = 0.375)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">→ %</div><div class="fc-q">0.45 = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>45%</strong><br>(pomakni točku 2 mjesta desno)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">% → DEC</div><div class="fc-q">125% = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>1.25</strong><br>(podijeli sa 100)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">FORMULA</div><div class="fc-q">P = ? (postotni iznos)</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>P = (O · p) / 100</strong><br>O = osnovica, p = postotak</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">FORMULA</div><div class="fc-q">O = ? (osnovica)</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>O = (P · 100) / p</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">+ p%</div><div class="fc-q">Povećanje za p%</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>K = O · (1 + p/100)</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">− p%</div><div class="fc-q">Smanjenje za p%</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>K = O · (1 − p/100)</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">PDV</div><div class="fc-q">Bez PDV-a iz cijene s PDV-om?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>O = K / 1.25</strong> (za 25% PDV)</div></div></div></div>
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
    <span class="timer-title">⏱ Timer · 7 min simulacija</span>
    <div class="timer-ctrl">
      <span class="timer-display" id="timer-d" aria-live="polite">10:00</span>
      <button class="timer-btn" id="timer-b" onclick="timerToggle()">▶ Start</button>
    </div>
  </div>
  <div class="timer-info">Pokreni timer → kviz se otključava. Simuliraj pravi rad pod pritiskom. <strong>7 minuta za 8 pitanja.</strong></div>
</div>

<div class="quiz-wrap locked" id="quiz-wrap">
  <div class="quiz-head">
    <span class="quiz-title">🧠 Kviz · 8 pitanja · 8 bodova</span>
    <span class="quiz-count"><span id="qz-done">0</span> / 8 riješeno</span>
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
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam skratiti razlomak do najmanjeg oblika (NZD)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam zbrojiti, oduzeti, pomnožiti i podijeliti razlomke</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam pretvoriti razlomak ↔ decimal ↔ postotak</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam izračunati postotni iznos (P), osnovicu (O), postotak (p)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam riješiti zadatak povećanja/smanjenja za p% (K = O · (1 ± p/100))</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam izračunati cijenu bez/s PDV-om (25%)</div></div>
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
  <div class="cp-ready" id="cp-ready">🏆 Spreman/na si za P03! Idemo dalje.</div>
</div>

<div class="discere-cta">
  <div class="discere-h">🎓 Želiš dublju razinu?</div>
  <div class="discere-t">Razlomci i postoci se pojavljuju u <strong>svim</strong> idućim poglavljima — od jednadžbi do statistike. Za dublju razinu, dodatne zadatke i AI tutora — <strong>Discere</strong> ti je sljedeći korak.</div>
  <a href="#" onclick="window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/discere'},'*'); return false;" class="discere-btn">Pogledaj program →</a>
</div>

<div class="cn-wrap">
  <div class="cn-title">→ Nastavi učenje</div>
  <div class="cn-grid">
    <div class="cn-card" onclick="navigateChapter('p03')" style="cursor:pointer">
      <div class="cn-h">Sljedeće · P03</div>
      <div class="cn-t">Potencije i korijeni</div>
      <div class="cn-s">~40 min · srednja težina</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p01')" style="cursor:pointer">
      <div class="cn-h">Povezano · P01</div>
      <div class="cn-t">Skupovi brojeva</div>
      <div class="cn-s">racionalni i decimalni</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p05')" style="cursor:pointer">
      <div class="cn-h">Povezano · P05</div>
      <div class="cn-t">Linearne jednadžbe</div>
      <div class="cn-s">primjena postotnog računa</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p10')" style="cursor:pointer">
      <div class="cn-h">Kasnije · P10</div>
      <div class="cn-t">Eksp. funkcija</div>
      <div class="cn-s">složeni kamatni račun</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <button class="nb" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">← 📐 Uči</button>
  <button class="nb primary" onclick="navigateChapter('p03')">03 · Potencije i korijeni →</button>
</div>

</section>


</div></main></div>

<script>
function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}


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
    "q": "Razlomak 4/8 je manji od 1/2.",
    "a": false,
    "e": "4/8 = 1/2 (skraćeno) → jednak je, ne manji."
  },
  {
    "q": "Razlomak 7/3 je nepravi (brojnik > nazivnik).",
    "a": true,
    "e": "Točno — kad je p ≥ q razlomak je nepravi."
  },
  {
    "q": "Mnozenje s 0/5 daje uvijek 0.",
    "a": true,
    "e": "0/5 = 0, a 0 puta bilo što = 0."
  },
  {
    "q": "Razlomak 3/0 je 0.",
    "a": false,
    "e": "Nije definiran! Nazivnik ne smije biti 0."
  },
  {
    "q": "NZD(12, 18) = 6.",
    "a": true,
    "e": "12 = 2²·3, 18 = 2·3². NZD = 2·3 = 6."
  },
  {
    "q": "NZV(4, 6) = 24.",
    "a": false,
    "e": "NZV(4,6) = 12 (nije produkt). 4·6=24, ali NZV je manji jer dijele zajednički faktor."
  },
  {
    "q": "Razlomak 5/12 je u najmanjem obliku.",
    "a": true,
    "e": "NZD(5, 12) = 1 → ne može se skratiti."
  },
  {
    "q": "Recipročni razlomak za 2/7 je 7/2.",
    "a": true,
    "e": "Recipročni = zamijenjeni brojnik i nazivnik."
  },
  {
    "q": "1/3 + 1/4 = 2/7",
    "a": false,
    "e": "POGREŠNO! Nazivnici se NE zbrajaju. Zajednički nazivnik 12: 4/12 + 3/12 = 7/12."
  },
  {
    "q": "(2/3) · (3/4) = 1/2",
    "a": true,
    "e": "(2·3)/(3·4) = 6/12 = 1/2. Ili kraći: 3 i 3 → 2/4 = 1/2."
  },
  {
    "q": "(1/2) ÷ (1/4) = 1/8",
    "a": false,
    "e": "Pomnoži s recipročnim: (1/2) · (4/1) = 4/2 = 2."
  },
  {
    "q": "Decimalni broj 0.6 = 3/5.",
    "a": true,
    "e": "0.6 = 6/10 = 3/5 (skraćeno s 2)."
  },
  {
    "q": "Razlomak 1/8 je periodički decimalni.",
    "a": false,
    "e": "1/8 = 0.125 — konačan (8 = 2³, samo prosti faktor 2)."
  },
  {
    "q": "Razlomak 5/6 je periodički decimalni.",
    "a": true,
    "e": "5/6 = 0.8333... = 0.83̄ — periodički (6 ima faktor 3)."
  },
  {
    "q": "0.444... = 4/9",
    "a": true,
    "e": "0.4̄ = 4/9 (po pravilu pretvorbe periodičkih)."
  },
  {
    "q": "100% nečega = ta cjelina (cijelo).",
    "a": true,
    "e": "Točno — 100% predstavlja cijelu (osnovicu)."
  },
  {
    "q": "150% je više od cjeline.",
    "a": true,
    "e": "150% = 1.5 puta cjelina (jedan i pol)."
  },
  {
    "q": "0% nečega je 0.",
    "a": true,
    "e": "0% bilo čega = 0 (nema ništa od cjeline)."
  },
  {
    "q": "Postotak 25% jednak je razlomku 1/4.",
    "a": true,
    "e": "25/100 = 1/4 (skraćeno)."
  },
  {
    "q": "Promil 50‰ je veći od 5%.",
    "a": false,
    "e": "50‰ = 5%. Jednaki su, ne veći."
  },
  {
    "q": "Ako je P = 30 i p = 15%, onda je O = 200.",
    "a": true,
    "e": "O = (P·100)/p = (30·100)/15 = 200."
  },
  {
    "q": "Ako je O = 400 i p = 25%, onda je P = 100.",
    "a": true,
    "e": "P = (400·25)/100 = 100."
  },
  {
    "q": "Ako je O = 80 i P = 20, onda je p = 25%.",
    "a": true,
    "e": "p = (P·100)/O = (20·100)/80 = 25."
  },
  {
    "q": "Povećanje cijene 100 € za 30% daje 120 €.",
    "a": false,
    "e": "K = 100·1.30 = 130 €, ne 120."
  },
  {
    "q": "Smanjenje cijene 200 € za 15% daje 170 €.",
    "a": true,
    "e": "K = 200·(1−0.15) = 200·0.85 = 170 €."
  },
  {
    "q": "Cijena +20% pa −20% vrati se na početnu.",
    "a": false,
    "e": "Ne! 100 → 120 → 96. Razlika jer druga promjena je od 120, ne od 100."
  },
  {
    "q": "Cijena bez PDV-a (25%) iz 125 € s PDV-om je 100 €.",
    "a": true,
    "e": "100 · 1.25 = 125. Provjeri: 100 + 25 = 125 ✓"
  },
  {
    "q": "Ako rabat (popust) iznosi 30 €, a cijena bez popusta 200 €, popust je 15%.",
    "a": true,
    "e": "p = (30·100)/200 = 15%."
  }
];
const DRILL_DATA = [
  {
    "q": "Skratiti razlomak 6/8.",
    "opts": [
      "3/4",
      "2/3",
      "3/8",
      "4/8"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "NZD(6,8) = 2 → 6/8 = 3/4."
  },
  {
    "q": "Pretvori 0.5 u razlomak.",
    "opts": [
      "1/5",
      "1/2",
      "5/100",
      "2/5"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "0.5 = 5/10 = 1/2."
  },
  {
    "q": "Koliko je 50% od 80?",
    "opts": [
      "20",
      "40",
      "50",
      "160"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "P = (80·50)/100 = 40."
  },
  {
    "q": "Pretvori 3/4 u postotak.",
    "opts": [
      "34%",
      "43%",
      "75%",
      "30%"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "3/4 = 0.75 = 75%."
  },
  {
    "q": "1/2 + 1/2 = ?",
    "opts": [
      "1/4",
      "1",
      "2/4",
      "1/2"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "Isti nazivnik → zbroji brojnike: 2/2 = 1."
  },
  {
    "q": "10% od 1000 je:",
    "opts": [
      "10",
      "100",
      "1000",
      "10000"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "10% = 1/10. 1000/10 = 100."
  },
  {
    "q": "Pretvori 1/4 u decimal.",
    "opts": [
      "0.14",
      "0.25",
      "0.4",
      "0.2"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "1 ÷ 4 = 0.25."
  },
  {
    "q": "200% od 50 je:",
    "opts": [
      "100",
      "50",
      "25",
      "250"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "200% = 2. 50·2 = 100."
  },
  {
    "q": "NZD(15, 25) iznosi:",
    "opts": [
      "3",
      "5",
      "75",
      "15"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "15 = 3·5, 25 = 5². Zajednički faktor: 5."
  },
  {
    "q": "NZV(3, 4) iznosi:",
    "opts": [
      "7",
      "12",
      "6",
      "24"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "3 i 4 nemaju zajednički faktor → NZV = 3·4 = 12."
  },
  {
    "q": "1/3 + 1/6 = ?",
    "opts": [
      "1/9",
      "1/2",
      "2/9",
      "2/6"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "NZV(3,6)=6. 2/6 + 1/6 = 3/6 = 1/2."
  },
  {
    "q": "(2/5) · (5/8) = ?",
    "opts": [
      "10/13",
      "3/8",
      "1/4",
      "5/40"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "(2·5)/(5·8) = 10/40 = 1/4. Ili: skrati 5 i 5 prije."
  },
  {
    "q": "Cijena 60 € + 20% poskupljenja:",
    "opts": [
      "62 €",
      "72 €",
      "80 €",
      "12 €"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "K = 60·1.20 = 72."
  },
  {
    "q": "30 je koji % od 150?",
    "opts": [
      "10%",
      "15%",
      "20%",
      "30%"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "p = (30·100)/150 = 20."
  },
  {
    "q": "Cijena nakon popusta 25% iznosi 60 €. Početna:",
    "opts": [
      "75 €",
      "80 €",
      "85 €",
      "45 €"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "60 = O·0.75 → O = 60/0.75 = 80 €."
  },
  {
    "q": "(3/4) ÷ (2/3) = ?",
    "opts": [
      "6/12",
      "9/8",
      "12/9",
      "2/3"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "(3/4) · (3/2) = 9/8."
  },
  {
    "q": "Pretvori 0.875 u razlomak.",
    "opts": [
      "7/8",
      "8/7",
      "87/100",
      "875/100"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "0.875 = 875/1000 = 7/8 (NZD = 125)."
  },
  {
    "q": "Pretvori 2/9 u decimal.",
    "opts": [
      "0.22",
      "0.222...",
      "0.92",
      "0.29"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "2 ÷ 9 = 0.222... = 0.2̄ (periodični)."
  },
  {
    "q": "0.45 = ?",
    "opts": [
      "9/20",
      "9/25",
      "20/9",
      "4/9"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "0.45 = 45/100 = 9/20 (NZD = 5)."
  },
  {
    "q": "150‰ je koji postotak?",
    "opts": [
      "1.5%",
      "15%",
      "150%",
      "0.15%"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "‰ = 1/1000, % = 1/100. 150/1000 = 15/100 = 15%."
  },
  {
    "q": "Kolika je cijena bez PDV-a (25%) ako s PDV-om iznosi 200 €?",
    "opts": [
      "150 €",
      "160 €",
      "175 €",
      "250 €"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "200 / 1.25 = 160 €."
  },
  {
    "q": "Cijena +50% pa −50% u odnosu na početak:",
    "opts": [
      "jednaka",
      "manja",
      "veća",
      "ovisi"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "100 → 150 → 75 → manja za 25%."
  },
  {
    "q": "Kolika je cijena nakon dva uzastopna popusta od 10% od početnih 200 €?",
    "opts": [
      "160 €",
      "162 €",
      "180 €",
      "144 €"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "200·0.9 = 180. 180·0.9 = 162."
  },
  {
    "q": "(1/2 + 1/3) · 6 = ?",
    "opts": [
      "5",
      "4",
      "6",
      "2.5"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "1/2 + 1/3 = 5/6. (5/6)·6 = 5."
  },
  {
    "q": "Glasalo je 60% od 250 ljudi. Koliko je glasalo?",
    "opts": [
      "150",
      "100",
      "160",
      "60"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "P = (250·60)/100 = 150."
  },
  {
    "q": "Učenik ima 14 točnih od 20. To je:",
    "opts": [
      "60%",
      "70%",
      "75%",
      "80%"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "p = (14·100)/20 = 70%."
  },
  {
    "q": "Kamata 5% godišnje na 1000 € nakon 1 god:",
    "opts": [
      "50 €",
      "100 €",
      "1050 €",
      "500 €"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "Kamata = (1000·5)/100 = 50 €. Stanje 1050."
  },
  {
    "q": "Razlomak 11/15 je u najmanjem obliku?",
    "opts": [
      "da",
      "ne, dijeli s 5",
      "ne, dijeli s 3",
      "ne, dijeli s 11"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "11 je prost. NZD(11, 15) = 1 → najmanji oblik."
  }
];
const QUIZ_DATA = [
  {
    "q": "Skrati razlomak 24/36 do najmanjeg oblika.",
    "opts": [
      "2/3",
      "3/4",
      "4/6",
      "6/9"
    ],
    "ok": 0,
    "exp": "NZD(24, 36) = 12. 24/36 = 2/3."
  },
  {
    "q": "Izračunaj: 3/4 + 5/6 − 1/2.",
    "opts": [
      "13/12",
      "11/12",
      "7/12",
      "9/12"
    ],
    "ok": 0,
    "exp": "NZV(4,6,2)=12. 9/12+10/12−6/12 = 13/12."
  },
  {
    "q": "Koliko je (5/6) · (3/10)?",
    "opts": [
      "1/4",
      "1/2",
      "8/16",
      "1/5"
    ],
    "ok": 0,
    "exp": "(5·3)/(6·10) = 15/60 = 1/4."
  },
  {
    "q": "Pretvori 7/20 u postotak.",
    "opts": [
      "35%",
      "27%",
      "70%",
      "20%"
    ],
    "ok": 0,
    "exp": "7/20 = 0.35 = 35%."
  },
  {
    "q": "12% od 250 iznosi:",
    "opts": [
      "12",
      "30",
      "36",
      "20"
    ],
    "ok": 1,
    "exp": "P = (250·12)/100 = 30."
  },
  {
    "q": "Broj 45 je 30% od kojeg broja?",
    "opts": [
      "120",
      "135",
      "150",
      "75"
    ],
    "ok": 2,
    "exp": "O = (45·100)/30 = 150."
  },
  {
    "q": "Cijena artikla je sa 80 € povećana za 25%, pa smanjena za 20%. Konačna cijena je:",
    "opts": [
      "80 €",
      "85 €",
      "82 €",
      "88 €"
    ],
    "ok": 0,
    "exp": "80·1.25 = 100. 100·0.80 = 80. Vrati se."
  },
  {
    "q": "Knjiga s PDV-om (25%) košta 50 €. Bez PDV-a:",
    "opts": [
      "37.5 €",
      "40 €",
      "42 €",
      "45 €"
    ],
    "ok": 1,
    "exp": "50/1.25 = 40 €."
  }
];
// (stari PBX_CH_DATA iz P09 uklonjen — novi je iznad u INTERVAL EXPLORER bloku)
const DRILL_HINTS = [
  "NZD(6,8) = 2. Podijeli oboje s 2.",
  "0.5 = 5/10. Skrati s 5.",
  "P = (O·p)/100 = (80·50)/100.",
  "3 ÷ 4 = 0.75 → ·100 = 75%.",
  "Isti nazivnik = samo zbroji brojnike.",
  "10% = 1/10 = podijeli sa 10.",
  "Brojnik kroz nazivnik = 1 ÷ 4.",
  "200% = 2 puta. 50·2.",
  "Faktoriziraj: 15 = 3·5, 25 = 5·5.",
  "Nemaju zajedničkog faktora → 3·4.",
  "NZV(3,6) = 6. Proširi 1/3 = 2/6.",
  "Skrati 5 iz brojnika i nazivnika prije.",
  "1.20 puta starija (jer +20%).",
  "(P·100)/O = postotak.",
  "60 = O·0.75 → podijeli s 0.75.",
  "Recipročni od 2/3 je 3/2.",
  "0.875 = 875/1000. NZD je 125.",
  "Periodični je jer nazivnik ima faktor 3.",
  "0.45 = 45/100. Skrati s 5.",
  "150‰ = 150/1000. Pretvori u stotinke.",
  "200 = O·1.25 → O = 200/1.25.",
  "100 → 150 → 75. Manja za 25.",
  "Drugi popust je od 180, ne 200.",
  "1/2 + 1/3 = 5/6. Pa ·6.",
  "P = (250·60)/100.",
  "p = (14·100)/20.",
  "Kamata = osnovica · stopa / 100.",
  "11 je prost broj. Provjeri NZD."
];

// P09 JS Part 1 — core, toast, tabs, progress, achievements, Parabola Explorer
const LS_KEY = 'matb_p02';
const FAV_KEY = 'matb_p02_favs';
const ACH_KEY = 'matb_p02_ach';

const BUG_ANSWERS = {
  1: { correct: 1, explain: {
    0: '✗ Krivo — ovo je najčešća greška s razlomcima! Zbrajanje "brojevnik+brojevnik / nazivnik+nazivnik" nije definirano u matematici. Rezultat 2/5 nije ni blizu točnom (1/2 ≈ 0.5, 1/3 ≈ 0.33, zbroj ≈ 0.83 ≠ 2/5 = 0.4).',
    1: '✓ Točno! Razlomke ne zbrajamo "koordinatno". Treba zajednički nazivnik: 1/2 + 1/3 = 3/6 + 2/6 = <strong>5/6</strong>. Provjera: 5/6 ≈ 0.833, što je 0.5 + 0.333 ✓.',
    2: '✗ Krivo — 1/6 bi bio rezultat množenja (1/2 · 1/3 = 1/6), ne zbrajanja. 1/6 je manji od oba sabirka, što je nemoguće za zbrajanje pozitivnih razlomaka.'
  }},
  2: { correct: 1, explain: {
    0: '✗ Krivo — ta metoda ne radi! (1/2) ÷ (1/4): ako dijeliš brojevnik s brojevnikom 1÷1=1 i nazivnik s nazivnikom 2÷4=0.5, dobiješ 1/0.5 = 2, ali to nije ispravna metoda razlomaka.',
    1: '✓ Točno! (1/2) ÷ (1/4) = (1/2) · (4/1) = 4/2 = 2. Dijeljenje s razlomkom = množenje recipročnim. Provjera: 2 · (1/4) = 2/4 = 1/2 ✓. Uvijek: a/b ÷ c/d = a/b · d/c.',
    2: '✗ Krivo — rezultat dijeljenja s manjim razlomkom je VEĆI, ne manji. (1/2) ÷ (1/4) = 2 > 1/2. Dijeljenjem s brojem manjim od 1 uvijek dobijemo veći rezultat.'
  }},
  3: { correct: 1, explain: {
    0: '✗ Krivo — postoci se NE zbrajaju na ovaj način! −30% pa +30% znači 0.70 · 1.30 = 0.91, tj. 9% gubitak. Matematički: (1−p)(1+p) = 1 − p² < 1 za svaki p > 0. Uvijek izlazi s manjim!',
    1: '✓ Točno! −30% pa +30% = 0.70 · 1.30 = 0.91 — dakle <strong>9% manje</strong> od početne. Ovo je isti princip kao u P18 (financijska matematika). Uzastopni postoci se MNOŽE, ne zbrajaju.',
    2: '✗ Krivo — 60% veća bila bi apsurd (veća od stanja nakon rasta). Rast od 30% na smanjenu bazu uvijek daje manje od originala, ne više.'
  }},
  4: { correct: 1, explain: {
    0: '✗ Krivo — × 0.75 oduzima 25% od već PDV-a uključujuće cijene. Provjera: 375 · 1.25 = 468.75 ≠ 500. Dakle 375 nije cijena bez PDV-a.',
    1: '✓ Točno! Cijena bez PDV = cijena s PDV / 1.25 = 500/1.25 = <strong>400 €</strong>. Provjera: 400 · 1.25 = 500 ✓. Greška: 25% PDV-a se računa na cijenu BEZ PDV-a, pa je nepravilno oduzimati 25% od cijene S PDV-om.',
    2: '✗ Krivo — dodavanje PDV-a na cijenu koja već ima PDV dvostruko bi oporezovala. 625 € bi bila cijena s PDV ako je polazna cijena 500 €, ne ako je 500 € već PDV-uključena.'
  }}
};

const FD_EXPLANATIONS = {
  "0": {
    "name": "p% (postotak)",
    "desc": "Postotak p% znači 'p od 100'. Npr. 20% = 20/100 = 0.20. Uvijek provjeri: misli li zadatak na p% povećanje, smanjenje ili samo izračun dijela."
  },
  "1": {
    "name": "K (cijeli iznos / osnovica)",
    "desc": "Cijeli iznos od kojeg uzimamo postotak. PAZI: kod uzastopnih postotaka, K se mijenja (ne ostaje isti). Npr. PDV se računa na cijenu BEZ PDV-a, ne na konačnu cijenu."
  },
  "2": {
    "name": "K (množimo s p/100)",
    "desc": "Operacija: uzimamo udio p/100 od cijelog iznosa K. Rezultat je uvijek manji od K (ako je 0 < p < 100)."
  },
  "3": {
    "name": "p (broj postotaka)",
    "desc": "Veličina postotka (bez znaka %). Npr. za 35% je p = 35. Za povećanje za p%: K · (1 + p/100). Za smanjenje: K · (1 − p/100)."
  },
  "4": {
    "name": "100 (nazivnik postotka)",
    "desc": "Dijeljenjem s 100 pretvaramo postotak u udio. 20/100 = 0.20 = 20%. Uvijek dijeli s 100 kad u formuli koristiš p, a ne p%."
  }
};


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
  // Sync top tab.on if button passed nije bio postavljen (npr. iz bottom nav)
  if (!btn) {
    const topTab = document.querySelectorAll('.tabs .tab')[i];
    if (topTab) topTab.classList.add('on');
  }
  // Sync bottom nav
  document.querySelectorAll('.bn-tab').forEach(b => b.classList.remove('on'));
  const bnt = document.querySelector('.bn-tab[data-tab="' + i + '"]');
  if (bnt) bnt.classList.add('on');
  try {
    sessionStorage.setItem(LS_KEY + '_tab', String(i));
    lsUpdate('lastTab', i);
  } catch(e) {}
  window.scrollTo({top:0, behavior:'smooth'});
  if (i === 0) lsUpdate('l0seen', true);
  if (i === 1) lsUpdate('l1seen', true);
  if (i === 2) {
    setTimeout(() => { pbxUpdate(); }, 100);
  }
  updateProg();
}

// Bottom navigation handlers
function bnSwitchTab(i) {
  showSec(i, null);
}

function l2Jump(anchor, e) {
  if (e) e.preventDefault();
  const el = document.getElementById(anchor);
  if (el) {
    // Get target element after anchor (ne anchor sam jer ima top:-20px)
    const next = el.nextElementSibling;
    const target = next || el;
    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({top: offsetTop, behavior: 'smooth'});
  }
}

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
  // Target se skalira s progress-om: baseline 4 (statično — ovo je vrijednost poglavlja)
  const target = 7;
  const dur = 900;
  const start = performance.now();
  const circ = 2 * Math.PI * 20;
  function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(eased * target);
    if (ring) ring.style.strokeDashoffset = String(circ - circ * eased * (target/5));
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
// RAZLOMAK / POSTOTAK VISUALIZER 2.0 (P02)
// Mode 0: Razlomak (pita ili kvadrat — drag p i q)
// Mode 1: Pretvorba (real-time razlomak ↔ decimal ↔ postotak)
// Mode 2: Postotni račun (O, p%, P — unesi 2, treći se računa)
// ═══════════════════════════════════════════════════════════════

const pbx = {
  p: 3, q: 4,                  // brojnik / nazivnik
  style: 'pie',                // 'pie' ili 'rect'
  mode: 0,                     // 0=razlomak, 1=pretvorba, 2=postotni
  zoom: 1,
  presetsUsed: 0,
  // Postotni račun (mode 2)
  ppO: 200, ppP: 15, ppPx: null,  // O, p%, P (px = result placeholder)
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

function pbxSetMode(m, btn) {
  pbx.mode = m;
  document.querySelectorAll('.pbx-mode-tab').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  var free = document.getElementById('pbx-free-ctrl');
  var pct  = document.getElementById('pbx-pct-ctrl');
  if (m === 2) {
    if (free) free.style.display = 'none';
    if (pct) pct.style.display = '';
  } else {
    if (free) free.style.display = '';
    if (pct) pct.style.display = 'none';
  }
  if (m === 0) toast('¾ Razlomak — drag p i q', 'info', 1800);
  else if (m === 1) toast('↔ Pretvorba — razlomak ↔ decimal ↔ postotak', 'info', 2200);
  else toast('% Postotni račun — drag O i p%', 'info', 2200);
  pbxUpdate();
}

function pbxToggleStyle() {
  pbx.style = pbx.style === 'pie' ? 'rect' : 'pie';
  const lbl = document.getElementById('pbx-style-val');
  if (lbl) lbl.textContent = pbx.style === 'pie' ? 'Pita' : 'Kvadrat';
  pbxUpdate();
}

function pbxZoom(dir) {
  // Zoom is largely cosmetic — just reset
  pbx.zoom = 1;
  pbxUpdate();
}

function pbxPreset(name, btn) {
  document.querySelectorAll('.pbx-preset').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  
  const presets = {
    half:       {p: 1, q: 2},
    quarter:    {p: 3, q: 4},
    thirds:     {p: 2, q: 3},
    eighths:    {p: 5, q: 8},
    improper:   {p: 7, q: 4},
    twentieth:  {p: 3, q: 20}
  };
  const pst = presets[name];
  if (!pst) return;
  pbx.p = pst.p;
  pbx.q = pst.q;
  
  const sa = document.getElementById('pbx-a');
  const sb = document.getElementById('pbx-b');
  if (sa) { sa.value = pst.p; document.getElementById('pbx-a-val').textContent = pst.p; }
  if (sb) { sb.value = pst.q; document.getElementById('pbx-b-val').textContent = pst.q; }
  
  pbx.presetsUsed++;
  if (pbx.presetsUsed >= 3) {
    const d = lsLoad();
    d.pbxExplored = true;
    lsSave(d);
    updateProg();
    unlockAch('explorer', '🎨 Explorer otključan!');
  }
  pbxUpdate();
}

// Helpers
function gcd(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { [a, b] = [b, a % b]; }
  return a;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function fmtN(n) {
  if (n === null || n === undefined || !isFinite(n)) return '—';
  if (Math.abs(n) < 1e-10) return '0';
  if (Math.abs(n - Math.round(n)) < 0.0001) return String(Math.round(n));
  // Round to 4 decimal places
  const r = Math.round(n * 10000) / 10000;
  return String(r);
}

function decimalToString(n) {
  // Cijeli broj
  if (Math.abs(n - Math.round(n)) < 1e-10) return String(Math.round(n));
  // Fallback: ako n nije iz pbx state-a (nemamo p, q), koristi heuristiku za rep
  const s = n.toFixed(8);
  const tail = s.slice(-6);
  if (tail.length === 6 && tail[0] === tail[3] && tail[1] === tail[4] && tail[2] === tail[5]) {
    return s.slice(0, s.indexOf('.') + 2) + tail.slice(0, 3) + '...';
  }
  return parseFloat(s.replace(/0+$/, '').replace(/\\.$/, '.0')).toString();
}

// Long-division s detekcijom ciklusa — vraća stringificirani decimalni
// s nadcrtanom (overline) periodom kad je periodičan
// p, q — cijeli brojevi (q > 0)
// maxDigits — limit za sigurnost; po default-u q-1 (gornja granica perioda)
function fractionToDecimalString(p, q, maxDigits) {
  // Period razlomka p/q je najviše q-1 znamenki. Default je q+5 da bude siguran.
  if (maxDigits === undefined || maxDigits === null) {
    maxDigits = Math.max(20, Math.abs(q) + 4);
  }
  // Hard cap protiv runaway za jako velike q
  maxDigits = Math.min(maxDigits, 200);
  
  const sign = (p < 0) !== (q < 0) ? '-' : '';
  p = Math.abs(p);
  q = Math.abs(q);
  if (q === 0) return '∞';
  if (p === 0) return '0';
  
  const intPart = Math.floor(p / q);
  let rem = p - intPart * q;
  if (rem === 0) return sign + String(intPart);
  
  // Long division: mapiraj svaki ostatak na poziciju u nizu znamenki
  const digits = [];
  const remPos = new Map();
  let periodStart = -1;
  
  while (rem !== 0 && digits.length < maxDigits) {
    if (remPos.has(rem)) {
      periodStart = remPos.get(rem);
      break;
    }
    remPos.set(rem, digits.length);
    rem *= 10;
    digits.push(Math.floor(rem / q));
    rem = rem - Math.floor(rem / q) * q;
  }
  
  if (periodStart >= 0) {
    const nonRep = digits.slice(0, periodStart).join('');
    const rep = digits.slice(periodStart).join('');
    return sign + intPart + '.' + nonRep + '(' + rep + ')';
  } else {
    if (rem === 0) {
      return sign + intPart + '.' + digits.join('');
    } else {
      return sign + intPart + '.' + digits.join('') + '...';
    }
  }
}

// Provjeri je li razlomak periodičan u decimalnom prikazu
// (skraćeni nazivnik mora imati prosti faktor osim 2 i 5)
function isPeriodic(p, q) {
  if (p === 0 || q === 0) return false;
  const g = gcd(Math.abs(p), Math.abs(q));
  let qR = Math.abs(q) / g;
  while (qR % 2 === 0) qR /= 2;
  while (qR % 5 === 0) qR /= 5;
  return qR > 1;
}

// Formatira razlomak kao "lijepi" decimalni string
// — period dobiva overline kombinacijom Unicode (U+0305) ili spannan element
// Vraća HTML string (jer overline traži span); za canvas koristi format 'canvas'
function prettyDecimal(p, q, format) {
  format = format || 'html';
  const raw = fractionToDecimalString(p, q);  // default maxDigits = q+4 (covers full period)
  // raw format: "0.142857(142857)" ili "0.5" ili "0.333333(3)"
  const m = raw.match(/^(-?\\d+\\.[0-9]*)\\(([0-9]+)\\)$/);
  if (!m) {
    // Konačan ili truncated
    // Skrati pretjerano dugačke konačne (npr. 0.123456789012345 → 0.1234567890...)
    if (raw.length > 14 && raw.indexOf('.') >= 0 && !raw.endsWith('...')) {
      return raw.slice(0, 14) + '…';
    }
    return raw;
  }
  const head = m[1];   // "0.142857"
  const period = m[2]; // "142857"
  // Ako je period vrlo dug (>8), skrati prikaz s "..."
  if (period.length > 8) {
    if (format === 'canvas') {
      return head + period.slice(0, 6) + '…  (period: ' + period.length + ' znamenki)';
    }
    return head + '<span style="text-decoration:overline;text-decoration-thickness:1.5px">' + period.slice(0, 6) + '</span>… <span style="opacity:.65;font-size:.85em">(p:' + period.length + ')</span>';
  }
  if (format === 'canvas') {
    // Canvas: koristi Unicode combining overline za svaku znamenku perioda
    const overlined = period.split('').map(c => c + '\\u0305').join('');
    return head + overlined;
  }
  // HTML s overline span
  return head + '<span style="text-decoration:overline;text-decoration-thickness:1.5px;text-underline-offset:2px">' + period + '</span>';
}

// Canvas draw
function pbxUpdate() {
  // Sync mode 0/1 sliders → state
  if (pbx.mode === 0 || pbx.mode === 1) {
    var pIn = document.getElementById('pbx-a');
    var qIn = document.getElementById('pbx-b');
    if (pIn) pbx.p = parseInt(pIn.value);
    if (qIn) pbx.q = Math.max(2, parseInt(qIn.value));
    var pv = document.getElementById('pbx-a-val');
    var qv = document.getElementById('pbx-b-val');
    if (pv) pv.textContent = pbx.p;
    if (qv) qv.textContent = pbx.q;
  }
  // Sync mode 2 sliders → state
  if (pbx.mode === 2) {
    var oIn = document.getElementById('pbx-ppO');
    var ptIn = document.getElementById('pbx-ppP');
    if (oIn) pbx.ppO = parseInt(oIn.value);
    if (ptIn) pbx.ppP = parseInt(ptIn.value);
    var ov = document.getElementById('pbx-ppO-val');
    var pv2 = document.getElementById('pbx-ppP-val');
    var rv = document.getElementById('pbx-ppResult');
    if (ov) ov.textContent = pbx.ppO;
    if (pv2) pv2.textContent = pbx.ppP + '%';
    if (rv) {
      var result = (pbx.ppO * pbx.ppP) / 100;
      rv.textContent = (result % 1 === 0) ? result : result.toFixed(2);
    }
  }

  var canvas = document.getElementById('pbx-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext && canvas.getContext('2d');
  if (!ctx) return;
  var W = canvas.width, H = canvas.height;

  // Clear
  ctx.fillStyle = '#0A0F1A';
  ctx.fillRect(0, 0, W, H);

  if (pbx.mode === 0 || pbx.mode === 1) {
    drawFraction(ctx, W, H);
  } else {
    drawPercentMode(ctx, W, H);
  }

  // Info panel
  updateInfo();
}

function drawFraction(ctx, W, H) {
  const p = pbx.p, q = pbx.q;
  // We may have improper p > q; show q empty cells and p filled (overflow into 2nd row)
  
  if (pbx.style === 'pie') {
    drawPie(ctx, W, H, p, q);
  } else {
    drawRect(ctx, W, H, p, q);
  }
  
  // Decimal + postotak labels iznad
  const dec = p / q;
  const pct = dec * 100;
  ctx.fillStyle = '#22D3EE';
  ctx.font = 'bold 14px JetBrains Mono';
  ctx.textAlign = 'center';
  ctx.fillText('p/q = ' + p + '/' + q + ' = ' + prettyDecimal(p, q, 'canvas') + ' = ' + (Math.round(pct * 100) / 100) + '%', W / 2, 28);
  
  // Skraćeni razlomak
  const g = gcd(p, q);
  if (g > 1) {
    ctx.fillStyle = '#F59E0B';
    ctx.font = 'bold 11px JetBrains Mono';
    ctx.fillText('Skraćeno: ' + (p / g) + '/' + (q / g), W / 2, H - 16);
  } else {
    ctx.fillStyle = '#34D399';
    ctx.font = 'bold 11px JetBrains Mono';
    ctx.fillText('Već u najmanjem obliku (NZD = 1)', W / 2, H - 16);
  }
}

function drawPie(ctx, W, H, p, q) {
  const cx = W / 2, cy = H / 2;
  
  // Ako je nepravi razlomak (p > q), prikaži cjeline + ostatak
  const wholeRounds = Math.floor(p / q);
  const remainder = p - wholeRounds * q;
  
  if (wholeRounds === 0) {
    // Standardno: jedna pita, max veličina
    const r = Math.min(W, H) / 2 - 70;
    drawPieSingle(ctx, cx, cy, r, p, q, null);
  } else {
    // Više cjelina: layout ovisi o broju
    const totalCircles = wholeRounds + (remainder > 0 ? 1 : 0);
    
    // Adaptive sizing
    const margin = 40;
    const labelSpace = 22;  // ispod svake pite za "1. cjelina" itd.
    const availW = W - margin * 2;
    const availH = H - 80 - labelSpace;  // -80 za header decimal/postotak
    const gap = 16;
    
    // Pita radius
    const maxByW = (availW - gap * (totalCircles - 1)) / totalCircles / 2;
    const maxByH = availH / 2;
    const cr = Math.max(28, Math.min(maxByW, maxByH));
    
    const totalW = cr * 2 * totalCircles + gap * (totalCircles - 1);
    let startX = (W - totalW) / 2 + cr;
    const yPos = cy - 8;  // shift up to leave room for labels
    
    for (let i = 0; i < wholeRounds; i++) {
      drawPieSingle(ctx, startX + i * (cr * 2 + gap), yPos, cr, q, q, (i + 1) + '. cjelina');
    }
    if (remainder > 0) {
      drawPieSingle(ctx, startX + wholeRounds * (cr * 2 + gap), yPos, cr, remainder, q, 'ostatak ' + remainder + '/' + q);
    }
    
    // Plus znakovi između cjelina (suptilno)
    if (totalCircles > 1) {
      ctx.fillStyle = 'rgba(122, 144, 187, 0.5)';
      ctx.font = 'bold 18px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < totalCircles - 1; i++) {
        const px = startX + i * (cr * 2 + gap) + cr + gap / 2;
        ctx.fillText('+', px, yPos);
      }
      ctx.textBaseline = 'alphabetic';
    }
    
    // Mješoviti zapis ispod (npr. "= 1 ¾" ili "= 2 + 3/4")
    if (remainder > 0) {
      ctx.fillStyle = '#F472B6';
      ctx.font = 'bold 12px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText('= ' + wholeRounds + ' + ' + remainder + '/' + q, W / 2, H - 32);
    } else {
      ctx.fillStyle = '#F472B6';
      ctx.font = 'bold 12px JetBrains Mono';
      ctx.textAlign = 'center';
      ctx.fillText('= ' + wholeRounds + ' (cijeli broj)', W / 2, H - 32);
    }
  }
}

function drawPieSingle(ctx, cx, cy, r, filled, total, label) {
  // Pita
  // Background full circle (prazan dio = tamni)
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = '#0E1422';
  ctx.fill();
  ctx.strokeStyle = '#7A90BB';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  
  // Filled slices
  const sliceAngle = (Math.PI * 2) / total;
  const fullCircle = (filled === total);
  for (let i = 0; i < filled && i < total; i++) {
    const startA = -Math.PI / 2 + i * sliceAngle;
    const endA = startA + sliceAngle;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startA, endA);
    ctx.closePath();
    // Pune cjeline su nešto svjetlije/zlatnije, parcijalne amber
    ctx.fillStyle = fullCircle ? 'rgba(245, 158, 11, 0.72)' : 'rgba(245, 158, 11, 0.55)';
    ctx.fill();
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  // All dividing lines
  ctx.strokeStyle = '#7A90BB';
  ctx.lineWidth = 0.8;
  for (let i = 0; i < total; i++) {
    const a = -Math.PI / 2 + i * sliceAngle;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(a), cy + r * Math.sin(a));
    ctx.stroke();
  }
  
  // Vanjska "puna cjelina" oznaka — zelenkasti rub
  if (fullCircle) {
    ctx.beginPath();
    ctx.arc(cx, cy, r + 2, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(52, 211, 153, 0.6)';
    ctx.lineWidth = 2;
    ctx.stroke();
  }
  
  // Label ispod (samo kad ima više cjelina)
  if (label) {
    ctx.fillStyle = fullCircle ? '#34D399' : '#F472B6';
    ctx.font = '600 10px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + r + 16);
  }
}

function drawRect(ctx, W, H, p, q) {
  // Kvadrat podijeljen na q jednakih dijelova, p ispunjeno
  const margin = 60;
  const totalW = W - margin * 2;
  const maxH = H - 110;
  
  // Layout: ako je q veliki, idemo u grid
  let cols, rows;
  if (q <= 5) { cols = q; rows = 1; }
  else if (q <= 10) { cols = q; rows = 1; }
  else if (q <= 12) { cols = 6; rows = 2; }
  else if (q <= 16) { cols = 8; rows = 2; }
  else { cols = Math.ceil(Math.sqrt(q)); rows = Math.ceil(q / cols); }
  
  const cw = Math.min(totalW / cols, maxH / rows * 1.5);
  const ch = cw * 0.6;
  const startX = (W - cw * cols) / 2;
  const startY = (H - ch * rows) / 2;
  
  for (let i = 0; i < q; i++) {
    const r = Math.floor(i / cols);
    const c = i % cols;
    const x = startX + c * cw;
    const y = startY + r * ch;
    if (i < p) {
      ctx.fillStyle = 'rgba(245, 158, 11, 0.55)';
      ctx.fillRect(x, y, cw - 2, ch - 2);
      ctx.strokeStyle = '#F59E0B';
    } else {
      ctx.fillStyle = '#0E1422';
      ctx.fillRect(x, y, cw - 2, ch - 2);
      ctx.strokeStyle = '#7A90BB';
    }
    ctx.lineWidth = 1.5;
    ctx.strokeRect(x, y, cw - 2, ch - 2);
  }
  
  // Ako je p > q, dodaj note
  if (p > q) {
    ctx.fillStyle = '#F472B6';
    ctx.font = 'bold 11px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.fillText('NEPRAVI RAZLOMAK — ' + p + ' > ' + q, W / 2, startY + ch * rows + 18);
  }
}

function drawPercentMode(ctx, W, H) {
  // Prikaži O, p%, P kao bar chart
  const O = pbx.ppO;
  const pct = pbx.ppP;
  const P = (O * pct) / 100;
  
  ctx.fillStyle = '#22D3EE';
  ctx.font = 'bold 14px JetBrains Mono';
  ctx.textAlign = 'center';
  ctx.fillText('Postotni račun: P = (O · p) / 100', W / 2, 28);
  
  // Bar
  const barX = 60, barY = 80, barW = W - 120, barH = 60;
  // Pozadina (osnovica O)
  ctx.fillStyle = '#0E1422';
  ctx.fillRect(barX, barY, barW, barH);
  ctx.strokeStyle = '#22D3EE';
  ctx.lineWidth = 2;
  ctx.strokeRect(barX, barY, barW, barH);
  
  // Postotni dio (P)
  const fillW = barW * (Math.min(pct, 100) / 100);
  ctx.fillStyle = 'rgba(245, 158, 11, 0.6)';
  ctx.fillRect(barX, barY, fillW, barH);
  ctx.strokeStyle = '#F59E0B';
  ctx.strokeRect(barX, barY, fillW, barH);
  
  // Labels
  ctx.fillStyle = '#E4EDFF';
  ctx.font = 'bold 12px JetBrains Mono';
  ctx.textAlign = 'left';
  ctx.fillText('O = ' + fmtN(O) + ' (100%)', barX, barY - 8);
  ctx.textAlign = 'right';
  ctx.fillText('P = ' + fmtN(P) + ' (' + fmtN(pct) + '%)', barX + barW, barY - 8);
  
  // Inputs guide
  ctx.fillStyle = '#7A90BB';
  ctx.font = '11px JetBrains Mono';
  ctx.textAlign = 'center';
  ctx.fillText('Ako je p > 100 onda P > O (povećanje preko 100%)', W / 2, barY + barH + 25);
  ctx.fillText('Promjena vrijednosti u kalkulatoru ispod ↓', W / 2, barY + barH + 42);
}

function updateInfo() {
  const info = document.getElementById('pbx-info');
  if (!info) return;
  
  if (pbx.mode === 0 || pbx.mode === 1) {
    const p = pbx.p, q = pbx.q;
    const dec = p / q;
    const pct = dec * 100;
    const g = gcd(p, q);
    const skr = g > 1 ? (p / g) + '/' + (q / g) : 'već najmanji';
    info.innerHTML = 'Razlomak <strong>' + p + '/' + q + '</strong> = <strong>' + prettyDecimal(p, q, 'html') + '</strong> = <strong>' + (Math.round(pct * 100) / 100) + '%</strong> · skraćeno: <strong>' + skr + '</strong>';
  } else {
    const O = pbx.ppO, pct = pbx.ppP;
    const P = (O * pct) / 100;
    info.innerHTML = 'O = <strong>' + fmtN(O) + '</strong>, p = <strong>' + fmtN(pct) + '%</strong>, P = (O · p) / 100 = <strong>' + fmtN(P) + '</strong>';
  }
}

// Drag handlers (no-op for P02 — sliders dovoljni)
function pbxToggleBracket(which) {}  // no-op compat

// CHALLENGES
const PBX_CH_DATA = [
  {
    "task": "Postavi razlomak 1/2 (jedna polovina pite).",
    "type": "fraction",
    "target": [
      1,
      2
    ]
  },
  {
    "task": "Postavi razlomak 3/4 (tri četvrtine).",
    "type": "fraction",
    "target": [
      3,
      4
    ]
  },
  {
    "task": "Postavi razlomak 5/8 (pet osmina).",
    "type": "fraction",
    "target": [
      5,
      8
    ]
  },
  {
    "task": "Postavi razlomak koji je jednak 0.6 (decimalu).",
    "type": "decimal",
    "target": 0.6
  },
  {
    "task": "Postavi razlomak koji je jednak 25%.",
    "type": "percent",
    "target": 25
  },
  {
    "task": "Postavi razlomak koji je jednak 75%.",
    "type": "percent",
    "target": 75
  },
  {
    "task": "Postavi razlomak koji je manji od 1/2.",
    "type": "less_than",
    "target": 0.5
  },
  {
    "task": "Postavi razlomak koji je veći od 1 (nepravi).",
    "type": "greater_than",
    "target": 1
  },
  {
    "task": "Postavi razlomak 2/3.",
    "type": "fraction",
    "target": [
      2,
      3
    ]
  },
  {
    "task": "Postavi razlomak koji je periodički decimalni (npr. 1/3, 5/6).",
    "type": "periodic",
    "target": null
  },
  {
    "task": "Postavi razlomak koji je konačni decimalni (npr. 1/4, 5/8).",
    "type": "terminal",
    "target": null
  },
  {
    "task": "Postavi razlomak koji je u najmanjem obliku (NZD = 1, npr. 5/8).",
    "type": "smallest",
    "target": null
  }
];

function pbxChallengeToggle() {
  pbx.challengeOn = !pbx.challengeOn;
  const wrap = document.getElementById('pbx-challenge');
  const btn = document.getElementById('pbx-challenge-btn');
  if (pbx.challengeOn) {
    wrap.classList.add('show');
    btn.classList.add('on');
    btn.textContent = '✕ Zatvori izazove';
    if (!pbxCh) pbxChallengeNext();
  } else {
    wrap.classList.remove('show');
    btn.classList.remove('on');
    btn.textContent = '🎯 Pokreni izazov (12 taskova)';
  }
}

function pbxChallengeNext() {
  const totEl = document.getElementById('pbx-ch-tot');
  const scEl = document.getElementById('pbx-ch-score');
  if (totEl) totEl.textContent = pbx.chTot || 0;
  if (scEl) scEl.textContent = pbx.chScore || 0;
  
  const remaining = PBX_CH_DATA.filter((_, i) => !(pbxCh && pbxCh.solved && pbxCh.solved.includes(i)));
  const pool = remaining.length ? remaining : PBX_CH_DATA;
  const choice = pool[Math.floor(Math.random() * pool.length)];
  const idx = PBX_CH_DATA.indexOf(choice);
  pbxCh = Object.assign({}, choice, {idx, solved: pbxCh?.solved || []});
  
  document.getElementById('pbx-challenge-task').textContent = choice.task;
  const fb = document.getElementById('pbx-challenge-fb');
  if (fb) { fb.classList.remove('show', 'ok', 'ng'); fb.innerHTML = ''; }
}

function pbxChallengeCheck() {
  if (!pbxCh) { pbxChallengeNext(); return; }
  const fb = document.getElementById('pbx-challenge-fb');
  if (!fb) return;
  
  let pass = false;
  let msg = '';
  const p = pbx.p, q = pbx.q;
  const val = p / q;
  const tol = 0.02;
  
  switch (pbxCh.type) {
    case 'fraction':
      pass = (p === pbxCh.target[0] && q === pbxCh.target[1]) ||
             (p * pbxCh.target[1] === q * pbxCh.target[0]);
      msg = pass ? '✓ ' + p + '/' + q + ' = ' + pbxCh.target[0] + '/' + pbxCh.target[1] + ' (jednake vrijednosti)'
                 : '✗ ' + p + '/' + q + ' nije ekvivalentno ' + pbxCh.target[0] + '/' + pbxCh.target[1];
      break;
    case 'decimal':
      pass = Math.abs(val - pbxCh.target) < tol;
      msg = pass ? '✓ ' + p + '/' + q + ' = ' + prettyDecimal(p, q, 'html') + ' ≈ ' + pbxCh.target
                 : '✗ ' + p + '/' + q + ' = ' + prettyDecimal(p, q, 'html') + ', cilj: ' + pbxCh.target;
      break;
    case 'percent':
      const pct = val * 100;
      pass = Math.abs(pct - pbxCh.target) < 1;
      msg = pass ? '✓ ' + p + '/' + q + ' = ' + (Math.round(pct * 100) / 100) + '% ≈ ' + pbxCh.target + '%'
                 : '✗ ' + p + '/' + q + ' = ' + (Math.round(pct * 100) / 100) + '%, cilj: ' + pbxCh.target + '%';
      break;
    case 'less_than':
      pass = val < pbxCh.target - 0.001;
      msg = pass ? '✓ ' + p + '/' + q + ' = ' + prettyDecimal(p, q, 'html') + ' < ' + pbxCh.target
                 : '✗ ' + p + '/' + q + ' = ' + prettyDecimal(p, q, 'html') + ' nije manje od ' + pbxCh.target;
      break;
    case 'greater_than':
      pass = val > pbxCh.target + 0.001;
      msg = pass ? '✓ ' + p + '/' + q + ' = ' + prettyDecimal(p, q, 'html') + ' > ' + pbxCh.target
                 : '✗ ' + p + '/' + q + ' = ' + prettyDecimal(p, q, 'html') + ' nije veće od ' + pbxCh.target;
      break;
    case 'periodic':
      // Periodički = nazivnik (skraćeni) ima faktor osim 2 i 5
      const g1 = gcd(p, q);
      let qReduced = q / g1;
      // Ukloni 2 i 5 iz qReduced
      while (qReduced % 2 === 0) qReduced /= 2;
      while (qReduced % 5 === 0) qReduced /= 5;
      pass = qReduced > 1;
      msg = pass ? '✓ ' + p + '/' + q + ' je periodički decimalni'
                 : '✗ ' + p + '/' + q + ' je konačan decimalni (treba periodički — npr. 1/3, 5/6)';
      break;
    case 'terminal':
      const g2 = gcd(p, q);
      let qR = q / g2;
      while (qR % 2 === 0) qR /= 2;
      while (qR % 5 === 0) qR /= 5;
      pass = qR === 1;
      msg = pass ? '✓ ' + p + '/' + q + ' je konačni decimalni'
                 : '✗ ' + p + '/' + q + ' je periodički (treba konačan — npr. 1/4, 5/8)';
      break;
    case 'smallest':
      pass = gcd(p, q) === 1;
      msg = pass ? '✓ ' + p + '/' + q + ' je u najmanjem obliku (NZD = 1)'
                 : '✗ ' + p + '/' + q + ' nije najmanji oblik (NZD = ' + gcd(p, q) + ', skraćeno: ' + (p / gcd(p, q)) + '/' + (q / gcd(p, q)) + ')';
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
      const d = lsLoad();
      if (!d.pbxChMaster) {
        d.pbxChMaster = true;
        lsSave(d);
        unlockAch('streaker', '🔥 5 izazova riješeno!');
      }
    }
    setTimeout(pbxChallengeNext, 2000);
  } else {
    pbx.chTot = (pbx.chTot || 0) + 1;
    fb.classList.remove('ok'); fb.classList.add('ng', 'show');
    fb.innerHTML = msg;
    document.getElementById('pbx-ch-tot').textContent = pbx.chTot;
  }
}

// ═══════════════════════════════════════════════════════════════
// KALKULATOR P02 (3 moda)
// Mode 0: Pretvorba razlomak ↔ decimal ↔ postotak
// Mode 1: NZD / NZV
// Mode 2: Postotni račun (O, p, P)
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
  // Mode 2: ensure ppTarget state synced s UI-jem
  if (m === 2) ppSwitchTarget(ppTarget || 'P');
}

function p9calc() {
  // Pretvorba razlomak → decimal + postotak
  const p = parseFloat(document.getElementById('p9c-a').value);
  const q = parseFloat(document.getElementById('p9c-b').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(p) || isNaN(q) || q === 0) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">Unesi p i q (q ≠ 0)</div>';
    return;
  }
  const dec = p / q;
  const pct = dec * 100;
  const g = gcd(Math.round(p), Math.round(q));
  const skr = g > 1 ? (Math.round(p) / g) + '/' + (Math.round(q) / g) : (Math.round(p) + '/' + Math.round(q));
  
  // Vrsta
  let vrsta = '';
  if (Math.abs(p) < Math.abs(q)) vrsta = 'pravi';
  else if (Math.abs(p) === Math.abs(q)) vrsta = 'jednak 1';
  else vrsta = 'nepravi';
  
  // Periodičnost
  let qR = Math.abs(Math.round(q)) / g;
  while (qR % 2 === 0) qR /= 2;
  while (qR % 5 === 0) qR /= 5;
  const period = qR > 1 ? 'periodički decimalni' : 'konačni decimalni';
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Razlomak:</span> <span class="calc-res-val">' + p + '/' + q + '</span></div>' +
    '<div><span class="calc-res-key">Skraćeno:</span> <span class="calc-res-val">' + skr + '</span></div>' +
    '<div><span class="calc-res-key">Decimal:</span> <span class="calc-res-val">' + prettyDecimal(Math.round(p), Math.round(q), 'html') + '</span> <span style="color:var(--t3);font-size:10px">(' + period + ')</span></div>' +
    '<div><span class="calc-res-key">Postotak:</span> <span class="calc-res-val">' + (Math.round(pct * 10000) / 10000) + '%</span></div>' +
    '<div><span class="calc-res-key">Vrsta:</span> <span class="calc-res-val">' + vrsta + '</span></div>';
}

function p9calcVertex() {
  // NZD / NZV
  const a = parseInt(document.getElementById('p9cv-a').value);
  const b = parseInt(document.getElementById('p9cv-p').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">Unesi pozitivne brojeve a, b</div>';
    return;
  }
  const g = gcd(a, b);
  const l = lcm(a, b);
  
  // Faktorizacije
  function factorize(n) {
    const factors = [];
    let x = n, p = 2;
    while (x > 1) {
      while (x % p === 0) { factors.push(p); x /= p; }
      p++;
      if (p * p > x && x > 1) { factors.push(x); break; }
    }
    return factors;
  }
  const fA = factorize(a);
  const fB = factorize(b);
  
  function fmtFactors(f) {
    if (!f.length) return String(1);
    const counts = {};
    f.forEach(p => counts[p] = (counts[p] || 0) + 1);
    return Object.keys(counts).map(p => counts[p] > 1 ? p + '<sup>' + counts[p] + '</sup>' : p).join(' · ');
  }
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">a = ' + a + ' =</span> <span class="calc-res-val">' + fmtFactors(fA) + '</span></div>' +
    '<div><span class="calc-res-key">b = ' + b + ' =</span> <span class="calc-res-val">' + fmtFactors(fB) + '</span></div>' +
    '<div><span class="calc-res-key">NZD(' + a + ', ' + b + ') =</span> <span class="calc-res-val">' + g + '</span></div>' +
    '<div><span class="calc-res-key">NZV(' + a + ', ' + b + ') =</span> <span class="calc-res-val">' + l + '</span></div>' +
    '<div style="color:var(--t3);font-size:10px;margin-top:6px">Pravilo: NZD · NZV = a · b. Provjeri: ' + g + ' · ' + l + ' = ' + (g * l) + ' = ' + a + ' · ' + b + ' ✓</div>';
}

// ─── Postotni račun: target-driven ─────────────────────────────
let ppTarget = 'P';  // 'P' (default), 'O', ili 'p'

function ppSwitchTarget(t) {
  ppTarget = t;
  // Update button states
  ['P','O','p'].forEach(k => {
    const btn = document.getElementById('pp-mode-' + k);
    if (!btn) return;
    if (k === t) {
      btn.classList.add('on');
      btn.setAttribute('aria-checked', 'true');
    } else {
      btn.classList.remove('on');
      btn.setAttribute('aria-checked', 'false');
    }
  });
  // Update field states + disabled
  const fields = {O: 'p9cft-p', p: 'p9cft-q', P: 'p9cft-px'};
  Object.keys(fields).forEach(k => {
    const wrap = document.getElementById('pp-field-' + k);
    const inp = document.getElementById(fields[k]);
    if (!wrap || !inp) return;
    if (k === t) {
      wrap.classList.add('target');
      inp.disabled = true;
      inp.value = '';
      inp.placeholder = '?';
    } else {
      wrap.classList.remove('target');
      inp.disabled = false;
      inp.placeholder = '';
      // Restore default if empty
      if (!inp.value) {
        if (k === 'O') inp.value = '200';
        else if (k === 'p') inp.value = '15';
        else if (k === 'P') inp.value = '30';
      }
    }
  });
  // Update context hint
  const hint = document.getElementById('pp-context-hint');
  if (hint) {
    if (t === 'P') hint.innerHTML = '💡 <strong>Primjer:</strong> "Koliko je 15% od 200?" → P = ?';
    else if (t === 'O') hint.innerHTML = '💡 <strong>Primjer:</strong> "30 je 15% od kojeg broja?" → O = ?';
    else hint.innerHTML = '💡 <strong>Primjer:</strong> "Koji % od 200 je 30?" → p = ?';
  }
  const r = document.getElementById('p9c-r');
  if (r) r.classList.remove('show');
}

function p9calcFromT() {
  const O = parseFloat(document.getElementById('p9cft-p').value);
  const p = parseFloat(document.getElementById('p9cft-q').value);
  const P = parseFloat(document.getElementById('p9cft-px').value);
  const r = document.getElementById('p9c-r');
  
  // Validate the two NON-target inputs
  let val, formula, result, primjer;
  
  if (ppTarget === 'P') {
    if (isNaN(O) || isNaN(p)) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Unesi O i p (postotak) — P se računa.</div>';
      return;
    }
    val = (O * p) / 100;
    formula = 'P = (O · p) / 100 = (' + fmtN(O) + ' · ' + fmtN(p) + ') / 100';
    result = 'P = ' + fmtN(val);
    primjer = '"' + fmtN(p) + '% od ' + fmtN(O) + ' je <strong>' + fmtN(val) + '</strong>"';
    document.getElementById('p9cft-px').value = fmtN(val);
  } else if (ppTarget === 'O') {
    if (isNaN(P) || isNaN(p)) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Unesi P (iznos) i p (postotak) — O se računa.</div>';
      return;
    }
    if (p === 0) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">p ne smije biti 0 (dijeljenje nulom).</div>';
      return;
    }
    val = (P * 100) / p;
    formula = 'O = (P · 100) / p = (' + fmtN(P) + ' · 100) / ' + fmtN(p);
    result = 'O = ' + fmtN(val);
    primjer = '"' + fmtN(P) + ' je ' + fmtN(p) + '% od <strong>' + fmtN(val) + '</strong>"';
    document.getElementById('p9cft-p').value = fmtN(val);
  } else { // p
    if (isNaN(O) || isNaN(P)) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Unesi O (osnovicu) i P (iznos) — p% se računa.</div>';
      return;
    }
    if (O === 0) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">O ne smije biti 0 (dijeljenje nulom).</div>';
      return;
    }
    val = (P * 100) / O;
    formula = 'p = (P · 100) / O = (' + fmtN(P) + ' · 100) / ' + fmtN(O);
    result = 'p = ' + fmtN(val) + '%';
    primjer = '"' + fmtN(P) + ' je <strong>' + fmtN(val) + '%</strong> od ' + fmtN(O) + '"';
    document.getElementById('p9cft-q').value = fmtN(val);
  }
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Tražimo:</span> <span class="calc-res-val">' + ppTarget + (ppTarget === 'p' ? '%' : '') + '</span></div>' +
    '<div><span class="calc-res-key">Formula:</span> <span class="calc-res-val">' + formula + '</span></div>' +
    '<div><span class="calc-res-key">Rezultat:</span> <span class="calc-res-val" style="color:var(--green)">' + result + '</span></div>' +
    '<div style="color:var(--t3);font-size:10.5px;margin-top:8px;line-height:1.55">' + primjer + '</div>';
}



// ─── SR STEPS ──────────────────────────────────────────────────
const stSt = {sr1:0,sr2:0,sr3:0,sr4:0,sr5:0,sr6:0,sr7:0,sr8:0,sr9:0};

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
  if (box && box.scrollIntoView) box.scrollIntoView({behavior:'smooth', block:'center'});
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

  // Visits counter
  const d = lsLoad();
  d.visits = (d.visits || 0) + 1;
  if (d.visits >= 2 && !d.welcomeClosed) {
    // already show welcome
  }
  lsSave(d);
  
  // Bottom nav initial sync — match top tab.on
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
      msg.innerHTML = '← Stigao/la si iz poglavlja <strong>' + from + '</strong>. Dobrodošao/la u razlomke i postotke.';
      fb.classList.add('show');
    }
  }
  
  // Init PBX sliders — listeners
  ['pbx-a','pbx-b','pbx-c','pbx-ppO','pbx-ppP'].forEach(id => {
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

// ─── RESTORE TAB ───────────────────────────────────────────────
// RESTORE TAB: disabled — always start on tab 0


/* ═══ PREMIUM GATES JS (bulk-injected) ═══ */
window.__pwTier = 'pro';
window.__pwChapter = 'P02';
function openPaywall(feature) {
  const sub = document.getElementById('pw-sub');
  if (sub) {
    const msgs = {
      'ai': 'AI profesor objašnjava svaki korak, rješava tvoje zadatke i prilagođava se tvom ritmu.',
      'test': 'Generiraj personalizirani test iz ovog poglavlja s AI-om. 10 pitanja po tvojim slabostima, full feedback.',
      'plan': 'AI kreira plan učenja baš za tebe — po slabostima iz vježbanja i rokovima.',
      'default': 'Pristupi AI profesoru, generatorima testova i personaliziranom planu učenja.'
    };
    sub.textContent = msgs[feature] || msgs['default'];
  }
  const m = document.getElementById('paywall-modal');
  if (m) m.classList.add('show');
  window._pwEvents = window._pwEvents || [];
  window._pwEvents.push({type: 'open', feature: feature || 'default', chapter: window.__pwChapter, ts: Date.now()});
  try {
    const ls = lsLoad();
    ls.pwImpressions = (ls.pwImpressions || 0) + 1;
    lsSave(ls);
  } catch(e) {}
}
function closePaywall() {
  const m = document.getElementById('paywall-modal');
  if (m) m.classList.remove('show');
}
function selectTier(t) {
  window.__pwTier = t;
  document.querySelectorAll('.paywall-tier').forEach(el => {
    if (el.textContent.toLowerCase().includes(t)) el.classList.add('pro');
    else el.classList.remove('pro');
  });
  const n = document.getElementById('pw-tier-name');
  if (n) n.textContent = t === 'pro' ? 'Pro' : 'Standard';
}
function goCheckout() {
  window._pwEvents = window._pwEvents || [];
  window._pwEvents.push({type: 'checkout_click', tier: window.__pwTier, chapter: window.__pwChapter, ts: Date.now()});
  try {
    const ls = lsLoad();
    ls.pwCheckoutClicks = (ls.pwCheckoutClicks || 0) + 1;
    lsSave(ls);
  } catch(e) {}
  closePaywall();
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({type: 'maturiraj:navigateUrl', url: '/pro'}, '*');
  }
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closePaywall();
});

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
</script>

<!-- ═══ BOTTOM NAV — fixed na dnu, switcher za tabove + chapters ═══ -->

<!-- Spacer da bottom nav ne pokriva content -->
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
</body>`;

export const P02_META = {
  code: 'P02',
  title: 'Razlomci i postoci',
  filename: 'Maturiraj_MatB_P02_FIXED.html',
};

export default P02_HTML;