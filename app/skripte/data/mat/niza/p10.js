// Maturiraj MatB — P10 · Eksp. i log. funkcija
// Auto-generated from Maturiraj_MatB_P10_FIXED.html
// Sadrži: cijeli HTML, CSS, JS runtime, sve podatke

export const P10_HTML = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
<meta name="theme-color" content="#060910">
<meta name="description" content="Eksponencijalna i logaritamska funkcija (P10). aˣ, log_a x, pravila logaritama, jednadžbe i nejednadžbe, ln, log10. Funkcija Visualizer s drag-bazom, 12 Challenge taskova, 9 SR primjera.">
<title>Maturiraj.hr — Mat B · P10 · Eksp. i log. funkcija</title>
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
  <div class="sb-item" onclick="navigateChapter('p09')" style="cursor:pointer"><span class="sb-dot"></span>09 · Kvadratna funkcija</div>
  <div class="sb-item active"><span class="sb-dot"></span>10 · Eksp. i log. funkcija<div class="sb-progress"><div class="sb-prog-track"><div class="sb-prog-fill" id="sb-prog-fill"></div></div><span class="sb-prog-pct" id="sb-prog-pct">0%</span></div></div>
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
    <span class="ch-badge">P / 10</span>
    <h1 class="ch-title"><span class="acc">Eksponencijalna</span> i logaritamska</h1>
  </div>
  <div class="topbar-R">
    <span class="pill pts">6-10 BODOVA</span>
    <span class="pill time">~55 MIN</span>
    <span class="pill prio">★★★★★</span>
  </div>
</div>

<div class="welcome" id="welcome">
  <div class="welcome-head">
    <h2 class="welcome-h">📈 Eksp. i log. — moćan tandem za rast i raspad</h2>
    <button class="welcome-x" onclick="closeWelcome()" aria-label="Zatvori">✕</button>
  </div>
  <p class="welcome-t">Eksponencijalna i logaritamska funkcija — <strong>6–10 bodova svake mature</strong>. Modeliraju rast (kamate, populacija) i raspad (radioaktivnost). Dobit ćeš <strong>Funkcija Visualizer 2.0</strong> s drag-bazom, prikaz aˣ i log_a x kao međusobnih inverzâ, 3-mod kalkulator (vrijednost / pravila / kamate), 12 Challenge taskova i 9 SR primjera s mini-grafovima.</p>
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
  <div class="hero-deco">aˣ</div>
  <div class="hero-top">
    <span class="hero-kb">P10 · ESENCIJALNO ZA MATURU</span>
    <span class="hero-prio">⭐⭐⭐⭐⭐</span>
  </div>
  <h2 class="hero-h"><span class="acc">Eksponencijalna</span> i <span class="acc2">logaritamska</span> funkcija</h2>
  <p class="hero-sub">aˣ, log_a x, pravila logaritama, eksponencijalne i logaritamske jednadžbe — <strong>6–10 bodova svake mature</strong>. Modeliraju rast i raspad. Inverzi jedan drugog: ako razumiješ jedno, riješio si i drugo.</p>
  
  <div class="hero-chips">
    <span class="hero-chip"><span class="ci">📈</span> f(x) = aˣ ↔ log_a x</span>
    <span class="hero-chip"><span class="ci">🎯</span> Funkcija Visualizer 2.0</span>
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
      <span class="sc-ico">aˣ</span>
      <div class="sc-h">Eksponencijalna</div>
      <div class="sc-t">f(x) = <strong>aˣ</strong>, a &gt; 0, a ≠ 1</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">log</span>
      <div class="sc-h">Logaritamska</div>
      <div class="sc-t">f(x) = <strong>log_a x</strong>, x &gt; 0</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">↔</span>
      <div class="sc-h">Inverzi</div>
      <div class="sc-t">aˣ i log_a x su <strong>međusobni inverzi</strong></div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">e</span>
      <div class="sc-h">Prirodni log</div>
      <div class="sc-t">ln x = log_e x, e ≈ <strong>2.71828</strong></div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">10</span>
      <div class="sc-h">Dekadski log</div>
      <div class="sc-t">log x = log_10 x</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">∗</span>
      <div class="sc-h">Pravila log</div>
      <div class="sc-t">log(xy) = <strong>log x + log y</strong></div>
    </div>
  </div>
</div>

<div class="box-grid">
  <div class="con" data-no="→"><span><strong>Eksp. funkcija</strong> f(x) = aˣ definirana za <em>a &gt; 0, a ≠ 1</em>. Ako a &gt; 1 — rastuća. Ako 0 &lt; a &lt; 1 — padajuća. Uvijek f(x) &gt; 0.</span></div>
  <div class="con" data-no="→"><span><strong>Log. funkcija</strong> f(x) = log_a x je <em>inverz</em> eksponencijalne. Definirana za <em>x &gt; 0</em>. log_a 1 = 0, log_a a = 1.</span></div>
  <div class="con" data-no="→"><span><strong>Pretvorba</strong>: y = aˣ ⟺ x = log_a y. Eksponencijalna i logaritamska "ponište" jedna drugu.</span></div>
  <div class="con" data-no="→"><span><strong>Pravila log:</strong> log(xy) = log x + log y, log(x/y) = log x − log y, log(xⁿ) = n · log x, log_a b = log b / log a.</span></div>
  <div class="con" data-no="→"><span><strong>Eksp. jednadžba:</strong> svedi na istu bazu (npr. 2ˣ = 8 → 2ˣ = 2³ → x = 3) ili logaritmiraj.</span></div>
  <div class="con" data-no="→"><span><strong>Log. jednadžba:</strong> uvjet x &gt; 0 (provjeri rješenja!). Iskoristi pravila → svedi na log f(x) = log g(x) → f(x) = g(x).</span></div>
</div>

<div class="box-20">
  <div class="box-20-lbl">⚡ 20 sekundi — zapamti ovih 6</div>
  <ul class="box-20-list">
    <li><strong>aˣ &gt; 0</strong> uvijek (eksponencijalna nikad nije nula ili negativna)</li>
    <li><strong>a &gt; 1 → rastuća</strong>, <strong>0 &lt; a &lt; 1 → padajuća</strong>. Sve eksp. prolaze kroz (0, 1)</li>
    <li><strong>log_a 1 = 0</strong>, <strong>log_a a = 1</strong>, <strong>log_a aˣ = x</strong>, <strong>a^(log_a x) = x</strong></li>
    <li><strong>log(xy) = log x + log y</strong>, <strong>log(x/y) = log x − log y</strong>, <strong>log(xⁿ) = n · log x</strong></li>
    <li><strong>Pretvorba baze:</strong> log_a b = log b / log a (može biti ln ili log10 dolje)</li>
    <li><strong>Domena log_a x: x &gt; 0!</strong> Uvijek provjeri rješenja log. jednadžbi</li>
  </ul>
</div>

<div class="box-for">
  <div class="box-for-lbl">⚙ Ključne formule — uvijek imaj u glavi</div>
  <div class="for-grid">
    <div class="for-item">
      <span class="lbl">Definicija log</span>
      <div class="val">log_a b = c ⟺ aᶜ = b</div>
    </div>
    <div class="for-item">
      <span class="lbl">Promjena baze</span>
      <div class="val">log_a b = log b / log a</div>
    </div>
    <div class="for-item">
      <span class="lbl">Složena kamata</span>
      <div class="val">K = K₀ · (1 + p/100)ⁿ</div>
    </div>
    <div class="for-item">
      <span class="lbl">Rast / raspad</span>
      <div class="val">N(t) = N₀ · aᵗ</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <span class="nb off">← Nema prethodnog</span>
  <button class="nb primary" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">📐 Uči →</button>
</div>

</section>

<section id="l1" class="sec" role="tabpanel">

<!-- SEKCIJA 1: EKSPONENCIJALNA FUNKCIJA -->
<div class="sec-head">
  <span class="sec-badge">1 / 12</span>
  <h3 class="sec-h">Eksponencijalna funkcija f(x) = aˣ</h3>
</div>
<div class="sec-body">
  <p><strong>Eksponencijalna funkcija</strong> je funkcija oblika <em>f(x) = aˣ</em>, gdje je <em>a</em> konstanta (zovemo je <em>baza</em>) takva da je <em>a &gt; 0</em> i <em>a ≠ 1</em>. Varijabla <em>x</em> stoji u eksponentu — odatle ime.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Domena:</strong> svi realni brojevi (x ∈ ℝ)<br>
      <strong>Slika:</strong> samo pozitivni realni (f(x) &gt; 0 za sve x)<br>
      <strong>Sve eksp. funkcije prolaze kroz točku (0, 1)</strong> jer a⁰ = 1.<br>
      <strong>Asimptota:</strong> x-os (y = 0) — graf joj se približava ali je nikad ne dotakne.
    </div>
  </div>
  
  <div class="emph"><strong>Zašto a &gt; 0?</strong> Ako bi a bio negativan (npr. (−2)ˣ), za x = 1/2 dobiješ √(−2) — nije realan broj. Eksponencijalna mora biti definirana za sve x ∈ ℝ.<br><strong>Zašto a ≠ 1?</strong> Ako je a = 1, onda je f(x) = 1ˣ = 1 za svaki x — konstantna funkcija, dosadno.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Najvažnije baze:</strong><br>→ <em>a = 2</em> (binarna, računarstvo)<br>→ <em>a = e ≈ 2.71828</em> (prirodna baza, fizika, financije)<br>→ <em>a = 10</em> (dekadska, znanstveni zapis)<br>→ <em>a = 1/2</em> (raspad — vrijeme poluživota)</div>
  </div>
</div>

<!-- SEKCIJA 2: GRAF EKSP. FUNKCIJE -->
<div class="sec-head">
  <span class="sec-badge">2 / 12</span>
  <h3 class="sec-h">Graf eksp. funkcije — rastuća vs padajuća</h3>
</div>
<div class="sec-body">
  <p>Oblik grafa ovisi o bazi:</p>
  
  <div class="callout key">
    <span class="callout-i">📈</span>
    <div class="callout-t">
      <strong>a &gt; 1 (rastuća):</strong> kako x raste, y ubrzano raste. Lijevo se približava 0, desno divlje raste.<br>
      <strong>0 &lt; a &lt; 1 (padajuća):</strong> kako x raste, y opada prema 0. Lijevo divlje raste, desno se približava 0.<br>
      <strong>Obje vrste prolaze kroz (0, 1) i (1, a)</strong>.
    </div>
  </div>
  
  <div style="display:flex;justify-content:center;margin:16px 0">
    <svg viewBox="0 0 480 220" width="480" height="220" style="max-width:100%;background:var(--inp);border-radius:var(--r2);border:1px solid var(--bdm)">
      <!-- Grid -->
      <defs><pattern id="ggrid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M 30 0 L 0 0 0 30" fill="none" stroke="#17203A" stroke-width="0.5"/></pattern></defs>
      <rect width="480" height="220" fill="url(#ggrid)"/>
      <!-- Axes -->
      <line x1="40" y1="180" x2="450" y2="180" stroke="#7A90BB" stroke-width="1.5"/>
      <line x1="240" y1="20" x2="240" y2="200" stroke="#7A90BB" stroke-width="1.5"/>
      <text x="455" y="184" fill="#7A90BB" font-family="JetBrains Mono" font-size="10">x</text>
      <text x="244" y="18" fill="#7A90BB" font-family="JetBrains Mono" font-size="10">y</text>
      <!-- Origin & 1 -->
      <text x="232" y="194" fill="#7A90BB" font-family="JetBrains Mono" font-size="9">0</text>
      <text x="232" y="158" fill="#7A90BB" font-family="JetBrains Mono" font-size="9">1</text>
      <line x1="237" y1="155" x2="243" y2="155" stroke="#7A90BB" stroke-width="1"/>
      <!-- a>1 (rastuća) — npr. 2^x: through (0,1) i (1,2) i (2,4) — y_pos = 180 - val*25 -->
      <path d="M 80,179 Q 160,178 200,168 Q 220,162 240,155 Q 260,148 280,135 Q 295,123 310,103 Q 320,85 330,60 Q 335,45 340,30" fill="none" stroke="#34D399" stroke-width="2.5"/>
      <text x="345" y="40" fill="#34D399" font-family="JetBrains Mono" font-size="11" font-weight="700">y = 2ˣ (a&gt;1)</text>
      <!-- a<1 (padajuća) — npr. (1/2)^x: through (0,1), (-1,2), (1,0.5) -->
      <path d="M 140,30 Q 150,45 160,60 Q 170,85 180,103 Q 195,123 210,135 Q 230,148 240,155 Q 260,162 280,168 Q 320,178 400,179" fill="none" stroke="#F472B6" stroke-width="2.5"/>
      <text x="55" y="40" fill="#F472B6" font-family="JetBrains Mono" font-size="11" font-weight="700">y = (½)ˣ (a&lt;1)</text>
      <!-- Crossing point (0, 1) -->
      <circle cx="240" cy="155" r="4" fill="#F59E0B"/>
      <text x="248" y="151" fill="#F59E0B" font-family="JetBrains Mono" font-size="9" font-weight="700">(0, 1)</text>
    </svg>
  </div>
</div>

<!-- SEKCIJA 3: EKSPONENCIJALNA JEDNADŽBA -->
<div class="sec-head">
  <span class="sec-badge">3 / 12</span>
  <h3 class="sec-h">Eksponencijalna jednadžba</h3>
</div>
<div class="sec-body">
  <p><strong>Eksponencijalna jednadžba</strong> je jednadžba u kojoj je nepoznanica u eksponentu, npr. 2ˣ = 8.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Glavni princip:</strong> ako je <em>aˣ = aʸ</em> i a &gt; 0, a ≠ 1, onda je <em>x = y</em>.<br><br>
      <strong>Strategija 1 — svedi na istu bazu:</strong><br>
      Primjer: 2ˣ = 8 → 2ˣ = 2³ → x = 3.<br>
      Primjer: 9ˣ = 27 → (3²)ˣ = 3³ → 3²ˣ = 3³ → 2x = 3 → x = 3/2.
    </div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Strategija 2 — logaritmiraj:</strong> ako se ne mogu svesti na istu bazu, logaritmiraj obje strane.<br>Primjer: 5ˣ = 12 → log(5ˣ) = log 12 → x · log 5 = log 12 → x = log 12 / log 5.</div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Strategija 3 — supstitucija:</strong> kod jednadžbi tipa 4ˣ − 3 · 2ˣ + 2 = 0, supstituiraj t = 2ˣ → t² − 3t + 2 = 0 → t = 1 ili t = 2 → x = 0 ili x = 1.</div>
  </div>
</div>

<!-- SEKCIJA 4: EKSPONENCIJALNA NEJEDNADŽBA -->
<div class="sec-head">
  <span class="sec-badge">4 / 12</span>
  <h3 class="sec-h">Eksponencijalna nejednadžba</h3>
</div>
<div class="sec-body">
  <p>Sličan postupak kao za jednadžbu, ali <strong>pazi na okret znaka</strong> kod padajuće baze.</p>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t">
      <strong>Ako je a &gt; 1 (rastuća):</strong> aˣ &gt; aʸ ⟺ x &gt; y. <em>Znak ostaje</em>.<br>
      <strong>Ako je 0 &lt; a &lt; 1 (padajuća):</strong> aˣ &gt; aʸ ⟺ x &lt; y. <em>Znak se okreće!</em>
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1 (rastuća):</strong> 2ˣ &gt; 16 → 2ˣ &gt; 2⁴ → <em>x &gt; 4</em> (znak ostaje). Rješenje: ⟨4, +∞⟩.</div>
  
  <div class="emph"><strong>Primjer 2 (padajuća):</strong> (1/2)ˣ &gt; 8 → (1/2)ˣ &gt; (1/2)⁻³ → <em>x &lt; −3</em> (znak se okrenuo). Rješenje: ⟨−∞, −3⟩.</div>
</div>

<!-- SEKCIJA 5: LOGARITAMSKA FUNKCIJA -->
<div class="sec-head">
  <span class="sec-badge">5 / 12</span>
  <h3 class="sec-h">Logaritamska funkcija f(x) = log_a x</h3>
</div>
<div class="sec-body">
  <p><strong>Logaritamska funkcija</strong> log_a x je <em>inverz</em> eksponencijalne aˣ. Definira se kao broj <em>na koji moraš podići bazu a</em> da dobiješ x.</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Definicija:</strong> log_a b = c ⟺ aᶜ = b<br><br>
      Primjeri:<br>
      → log_2 8 = 3 (jer 2³ = 8)<br>
      → log_3 81 = 4 (jer 3⁴ = 81)<br>
      → log_10 1000 = 3 (jer 10³ = 1000)<br>
      → log_a 1 = 0 (jer a⁰ = 1)<br>
      → log_a a = 1 (jer a¹ = a)
    </div>
  </div>
  
  <div class="emph"><strong>Domena:</strong> x &gt; 0 (logaritam negativnog broja ili nule nije definiran).<br><strong>Slika:</strong> svi realni brojevi (y ∈ ℝ).<br><strong>Sve log. funkcije prolaze kroz (1, 0) i (a, 1)</strong>.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Inverz veza:</strong> graf log_a x je <em>refleksija</em> grafa aˣ preko pravca y = x. To znači: ako (p, q) leži na aˣ, onda (q, p) leži na log_a x.</div>
  </div>
</div>
<!-- ═══ PREMIUM GATE 1: AI PROFESOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Zaglavio si na eksp. i log. funkciji? Pitaj me što god — objašnjenje po koracima, prilagođeno tebi.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Kako rješiti 2ˣ=8?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Pravila logaritama?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Promjena baze?</span>
  </div>
  <div class="pg-ai-bubble">
    Eksponencijalne i logaritamske funkcije — <strong>svojstva, jednadžbe, primjene</strong>, rastavim ti korak po korak<span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora →</button>
</div>


<!-- SEKCIJA 6: PRAVILA LOGARITAMA -->
<div class="sec-head">
  <span class="sec-badge">6 / 12</span>
  <h3 class="sec-h">Pravila logaritama (5 ključnih)</h3>
</div>
<div class="sec-body">
  <p>Pet pravila koja moraš znati napamet — pretvaraju složene log. izraze u jednostavne.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>1. Logaritam umnoška:</strong> log_a (x · y) = log_a x + log_a y<br>
      <strong>2. Logaritam količnika:</strong> log_a (x / y) = log_a x − log_a y<br>
      <strong>3. Logaritam potencije:</strong> log_a (xⁿ) = n · log_a x<br>
      <strong>4. Logaritam korijena:</strong> log_a (ⁿ√x) = (1/n) · log_a x (specijalno: log_a √x = (1/2) · log_a x)<br>
      <strong>5. Promjena baze:</strong> log_a b = log_c b / log_c a (najčešće c = 10 ili e)
    </div>
  </div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>NIKAD ne čini ovo:</strong><br>→ log(x + y) ≠ log x + log y (samo umnožak ide u zbroj!)<br>→ log(x · y) ≠ log x · log y (zbroj, ne umnožak rezultata)<br>→ (log x)ⁿ ≠ n · log x (samo argument se može izvući)</div>
  </div>
  
  <div class="emph"><strong>Primjer:</strong> log_2 (8 · 32 / 4) = log_2 8 + log_2 32 − log_2 4 = 3 + 5 − 2 = <em>6</em>.</div>
</div>

<!-- SEKCIJA 7: POSEBNI LOGARITMI -->
<div class="sec-head">
  <span class="sec-badge">7 / 12</span>
  <h3 class="sec-h">Posebni logaritmi: ln, log10</h3>
</div>
<div class="sec-body">
  <p>Dva logaritma se toliko često koriste da imaju vlastite oznake:</p>
  
  <div class="callout key">
    <span class="callout-i">📌</span>
    <div class="callout-t">
      <strong>Prirodni logaritam ln x = log_e x</strong><br>
      Baza e ≈ 2.71828... (Eulerov broj). Koristi se u fizici, financijama, vjerojatnosti.<br>
      ln 1 = 0, ln e = 1, ln eˣ = x, e^(ln x) = x.<br><br>
      <strong>Dekadski (Briggsov) log x = log_10 x</strong><br>
      Baza 10. Koristi se u znanstvenom zapisu, decibelima, pH skali.<br>
      log 1 = 0, log 10 = 1, log 100 = 2, log 0.1 = −1.
    </div>
  </div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Pretvorba baze u praksi:</strong> kalkulator ima samo "log" (= log10) i "ln" (= ln). Za drugu bazu: log_a b = log b / log a = ln b / ln a.<br>Primjer: log_3 7 = log 7 / log 3 ≈ 0.845 / 0.477 ≈ 1.771.</div>
  </div>
  
  <!-- ═══ FORMULA DECODER ═══ -->
  <div class="fd-wrap">
    <div class="fd-head"><span class="fd-title">🔍 Formula Decoder — klikni na simbol</span></div>
    <div class="fd-body">
      <div class="fd-formula-big">
        <span class="fd-hot" data-sym="0" onclick="decodeSym(this,0)" style="color:var(--amber)">log</span><sub style="font-size:16px"><span class="fd-hot" data-sym="1" onclick="decodeSym(this,1)" style="color:var(--cyan)">a</span></sub>&nbsp;<span class="fd-hot" data-sym="2" onclick="decodeSym(this,2)" style="color:var(--green)">b</span>&nbsp;=&nbsp;<span class="fd-hot" data-sym="3" onclick="decodeSym(this,3)" style="color:var(--indigo)">c</span>
      </div>
      <div class="fd-symbols">
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),0,this)"><span class="fd-sym-letter" style="color:var(--amber)">log</span><span class="fd-sym-name">operacija</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),1,this)"><span class="fd-sym-letter" style="color:var(--cyan)">a</span><span class="fd-sym-name">baza</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),2,this)"><span class="fd-sym-letter" style="color:var(--green)">b</span><span class="fd-sym-name">argument</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),3,this)"><span class="fd-sym-letter" style="color:var(--indigo)">c</span><span class="fd-sym-name">eksponent</span></div>
      </div>
      <div class="fd-explain" id="fd-exp">👆 Klikni bilo koji simbol (u formuli ili ispod) da vidiš njegovo značenje.</div>
    </div>
  </div>
  
  <!-- ═══ FORMULA CARD GRID ═══ -->
  <div class="fcard-wrap">
    <div class="fcard-head"><span class="fcard-title">⚙ Sve formule na jednom mjestu</span></div>
    <div class="fcard-body">
      <div class="fcard-item">
        <div class="fcard-formula">log_a (xy) = log_a x + log_a y</div>
        <div class="fcard-desc"><strong>Pravilo umnoška</strong> — log umnoška = zbroj logova.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">log_a (x/y) = log_a x − log_a y</div>
        <div class="fcard-desc"><strong>Pravilo količnika</strong> — log količnika = razlika logova.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">log_a (xⁿ) = n · log_a x</div>
        <div class="fcard-desc"><strong>Pravilo potencije</strong> — eksponent ispred logaritma.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">log_a b = log b / log a</div>
        <div class="fcard-desc"><strong>Promjena baze</strong> — može koristiti ln ili log10 dolje.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">K = K₀ · (1 + p/100)ⁿ</div>
        <div class="fcard-desc"><strong>Složena kamata</strong> — K₀ početak, p% stopa, n godina.</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">N(t) = N₀ · a^(t/T)</div>
        <div class="fcard-desc"><strong>Rast / raspad</strong> — T je vrijeme poluživota (za a = 1/2).</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">a^(log_a x) = x</div>
        <div class="fcard-desc"><strong>Inverz 1</strong> — eksp. poništava log (za x &gt; 0).</div>
      </div>
      <div class="fcard-item">
        <div class="fcard-formula">log_a (aˣ) = x</div>
        <div class="fcard-desc"><strong>Inverz 2</strong> — log poništava eksp. (za svaki x).</div>
      </div>
    </div>
  </div>
</div>

<!-- SEKCIJA 8: LOGARITAMSKA JEDNADŽBA I NEJEDNADŽBA -->
<div class="sec-head">
  <span class="sec-badge">8 / 12</span>
  <h3 class="sec-h">Logaritamska jednadžba i nejednadžba</h3>
</div>
<div class="sec-body">
  <p><strong>Logaritamska jednadžba</strong> sadrži nepoznanicu unutar logaritma. Najvažnije: <em>uvijek provjeri uvjet x &gt; 0</em>.</p>
  
  <div class="callout key">
    <span class="callout-i">📐</span>
    <div class="callout-t">
      <strong>Glavni princip:</strong> log_a f(x) = log_a g(x) ⟺ f(x) = g(x), <em>uz uvjet f(x), g(x) &gt; 0</em>.<br><br>
      <strong>Strategije:</strong><br>
      → Iskoristi pravila log da svedeš na log_a … = log_a …<br>
      → Ili eksponentijiraj: log_a x = c → x = aᶜ<br>
      → Ili supstituiraj t = log x kod kvadratnih log. jednadžbi.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1:</strong> log_2 x = 5 → x = 2⁵ = <em>32</em>. (Provjeri: 32 &gt; 0 ✓)</div>
  
  <div class="emph"><strong>Primjer 2:</strong> log_2 (x + 1) + log_2 (x − 1) = 3 → log_2 ((x+1)(x−1)) = 3 → (x+1)(x−1) = 2³ → x² − 1 = 8 → x² = 9 → x = ±3. <strong>Pazi:</strong> x = −3 daje log negativnog broja → odbaci. <em>Rješenje: x = 3</em>.</div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Log. nejednadžba:</strong> isti princip kao kod eksponencijalne — ako baza je &gt; 1, znak ostaje; ako 0 &lt; baza &lt; 1, znak se okreće.</div>
  </div>
</div>

<!-- SEKCIJA 9: VISUALIZER -->
<div class="sec-head">
  <span class="sec-badge">9 / 12</span>
  <h3 class="sec-h">📈 Funkcija Visualizer 2.0 — eksp. i log. zajedno</h3>
</div>
<div class="sec-body">
  <p>Interaktivni alat. Drag bazom <em>a</em> i točkom <em>x</em> da vidiš kako se mijenjaju aˣ i log_a x. Tri moda: <em>Eksp.</em>, <em>Log.</em>, <em>Inverz</em>.</p>
  
  <div class="pbx-wrap">
    <div class="pbx-head">
      <span class="pbx-title">funkcija visualizer 2.0</span>
      <span class="pbx-badge">LIVE</span>
    </div>
    
    <div class="pbx-mode-tabs">
      <button class="pbx-mode-tab on" onclick="pbxSetMode(0,this)">📈 Eksp. aˣ</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(1,this)">📉 Log. log_a x</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(2,this)">↔ Inverz (oba)</button>
    </div>
    
    <div class="pbx-canvas-wrap">
      <div class="pbx-drag-hint">✥ povuci za ugađanje</div>
      <canvas class="pbx-canvas" id="pbx-canvas" width="640" height="320" aria-label="Funkcija visualizer"></canvas>
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
          <span class="pbx-ctrl-lbl">Baza a</span>
          <span class="pbx-ctrl-val" id="pbx-a-val">2</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-a" min="0.2" max="5" step="0.1" value="2">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Točka x</span>
          <span class="pbx-ctrl-val v" id="pbx-x-val">1</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-x" min="-5" max="5" step="0.1" value="1">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">Smjer</span>
          <span class="pbx-ctrl-val ok" id="pbx-dir-val">rastuća</span>
        </div>
        <div style="font-family:var(--mono);font-size:9.5px;color:var(--t3);line-height:1.5">a &gt; 1 → ↗ rastuća<br>0 &lt; a &lt; 1 → ↘ padajuća</div>
      </div>
    </div>
    
    <div class="pbx-presets">
      <button class="pbx-preset" onclick="pbxPreset('a2',this)">a = 2</button>
      <button class="pbx-preset" onclick="pbxPreset('ae',this)">a = e</button>
      <button class="pbx-preset" onclick="pbxPreset('a10',this)">a = 10</button>
      <button class="pbx-preset" onclick="pbxPreset('ahalf',this)">a = ½</button>
      <button class="pbx-preset" onclick="pbxPreset('agrowth',this)">a = 1.05 (rast)</button>
      <button class="pbx-preset" onclick="pbxPreset('adecay',this)">a = 0.9 (raspad)</button>
    </div>
    
    <div class="pbx-legend">
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#34D399"></span><strong>aˣ</strong> (eksponencijalna)</span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#22D3EE"></span><strong>log_a x</strong> (logaritamska)</span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#F472B6"></span><strong>y = x</strong> (os simetrije inverz)</span>
    </div>
    
    <div class="pbx-info" id="pbx-info">
      f(x) = 2ˣ pri x = 1 → <strong>2¹ = 2</strong>
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


<!-- SEKCIJA 10: NCVVO ZADACI -->
<div class="sec-head">
  <span class="sec-badge">10 / 12</span>
  <h3 class="sec-h">📝 NCVVO stvarni zadaci iz mature</h3>
</div>
<div class="sec-body">
  <p>Autentični zadaci iz MAT B mature — eksp. i log. jednadžbe, pretvorbe, kamate.</p>
  
  <div class="ncvvo-wrap">
    <div class="ncvvo-item">
      <div class="ncvvo-no">1</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2024 LJETO · Zadatak 9 · 4 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Riješi jednadžbu 3ˣ⁺² = 81.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ 81 = 3⁴, pa 3ˣ⁺² = 3⁴ → x + 2 = 4 → <strong style="color:var(--green)">x = 2</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">2</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2023 JESEN · Zadatak 11 · 5 bodova</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Izračunaj log_2 64 + log_3 27.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ log_2 64 = log_2 2⁶ = 6. log_3 27 = log_3 3³ = 3. Zbroj = <strong style="color:var(--cyan)">9</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">3</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2022 LJETO · Zadatak 13 · 5 bodova</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Iznos od 1000 € uložen je uz godišnju kamatnu stopu 5% (složena kamata). Koliko iznosi nakon 3 godine?<br>
        <div style="margin:8px 0;display:flex;justify-content:center">
          <svg viewBox="0 0 320 70" width="320" height="70" style="background:rgba(10,15,26,0.6);border-radius:6px;border:1px solid var(--bdm)">
            <rect x="10" y="25" width="50" height="20" fill="rgba(34,211,238,0.3)" stroke="#22D3EE"/>
            <text x="35" y="40" fill="#22D3EE" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">1000</text>
            <text x="35" y="60" fill="#7A90BB" font-family="JetBrains Mono" font-size="9" text-anchor="middle">god 0</text>
            <text x="80" y="40" fill="#E4EDFF" font-family="JetBrains Mono" font-size="12" text-anchor="middle">→</text>
            <rect x="100" y="22" width="55" height="26" fill="rgba(245,158,11,0.3)" stroke="#F59E0B"/>
            <text x="127" y="40" fill="#F59E0B" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">1050</text>
            <text x="175" y="40" fill="#E4EDFF" font-family="JetBrains Mono" font-size="12" text-anchor="middle">→</text>
            <rect x="195" y="20" width="55" height="30" fill="rgba(245,158,11,0.3)" stroke="#F59E0B"/>
            <text x="222" y="40" fill="#F59E0B" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">1102.5</text>
            <text x="265" y="40" fill="#34D399" font-family="JetBrains Mono" font-size="12" text-anchor="middle">→</text>
            <rect x="280" y="18" width="35" height="34" fill="rgba(52,211,153,0.3)" stroke="#34D399"/>
            <text x="298" y="40" fill="#34D399" font-family="JetBrains Mono" font-size="9" font-weight="700" text-anchor="middle">1157.6</text>
          </svg>
        </div>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ K = K₀ · (1 + p/100)ⁿ = 1000 · 1.05³ = 1000 · 1.157625 ≈ <strong style="color:var(--green)">1157.63 €</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">4</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2021 JESEN · Zadatak 8 · 4 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Riješi jednadžbu log_2 (x − 1) = 3.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ x − 1 = 2³ = 8 → <strong style="color:var(--cyan)">x = 9</strong>. Provjera: x = 9 &gt; 1 ✓ (uvjet x − 1 &gt; 0).</span></div>
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


<!-- SEKCIJA 11: KALKULATOR 3 MODA -->
<div class="sec-head">
  <span class="sec-badge">11 / 12</span>
  <h3 class="sec-h">🧮 Kalkulator eksp/log — 3 moda</h3>
</div>
<div class="sec-body">
  <p>Tri alata: vrijednost aˣ ili log_a x, primjena pravila log, složeni kamatni račun.</p>
  
  <div class="calc-wrap">
    <div class="calc-head">
      <span class="calc-title">// Eksp., log., pravila, kamate</span>
    </div>
    <div class="calc-tabs" role="tablist">
      <button class="calc-tab on" onclick="p9SwitchMode(0,this)">aˣ / log_a x</button>
      <button class="calc-tab" onclick="p9SwitchMode(1,this)">Pravila log</button>
      <button class="calc-tab" onclick="p9SwitchMode(2,this)">Složena kamata</button>
    </div>
    <div class="calc-body">
      <div id="p9-mode-0">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Računaj aˣ ili log_a x. Odaberi koja operacija.</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <select class="calc-in" id="p9c-op" style="width:120px">
            <option value="exp">aˣ (eksp.)</option>
            <option value="log">log_a x</option>
            <option value="ln">ln x</option>
            <option value="log10">log x</option>
          </select>
          <span class="calc-lbl">a =</span>
          <input class="calc-in" id="p9c-a" type="number" value="2" style="width:70px" step="0.1">
          <span class="calc-lbl">x =</span>
          <input class="calc-in" id="p9c-b" type="number" value="3" style="width:70px" step="0.1">
          <button class="calc-go" onclick="p9calc()">Izračunaj →</button>
        </div>
      </div>
      <div id="p9-mode-1" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Pojednostavi log izraz: log_a (x · y / z)</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <span class="calc-lbl">log_</span>
          <input class="calc-in" id="p9cv-a" type="number" value="2" style="width:55px" step="1">
          <span class="calc-lbl">(</span>
          <input class="calc-in" id="p9cv-p" type="number" value="8" style="width:60px" step="1">
          <span class="calc-lbl">·</span>
          <input class="calc-in" id="p9cv-q" type="number" value="32" style="width:60px" step="1">
          <span class="calc-lbl">/</span>
          <input class="calc-in" id="p9cv-q2" type="number" value="4" style="width:60px" step="1">
          <span class="calc-lbl">)</span>
          <button class="calc-go" onclick="p9calcVertex()">Pojednostavi →</button>
        </div>
      </div>
      <div id="p9-mode-2" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Složena kamata: K = K₀ · (1 + p/100)ⁿ. Unesi 3 od 4, traženi se računa.</div>
        
        <div class="pp-mode-pick" role="radiogroup" style="display:flex;gap:4px;margin-bottom:10px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px">
          <button class="pp-mode-btn on" id="pp-mode-K" role="radio" aria-checked="true" onclick="ppSwitchTarget('K')">Tražim <strong>K</strong> <span style="opacity:.6">(stanje)</span></button>
          <button class="pp-mode-btn" id="pp-mode-K0" role="radio" aria-checked="false" onclick="ppSwitchTarget('K0')">Tražim <strong>K₀</strong> <span style="opacity:.6">(početak)</span></button>
          <button class="pp-mode-btn" id="pp-mode-n" role="radio" aria-checked="false" onclick="ppSwitchTarget('n')">Tražim <strong>n</strong> <span style="opacity:.6">(godine)</span></button>
        </div>
        
        <div class="calc-row" style="flex-wrap:wrap;gap:8px;align-items:center">
          <label class="pp-field" id="pp-field-K0">
            <span class="calc-lbl">K₀ =</span>
            <input class="calc-in" id="p9cft-p" type="number" value="1000" style="width:90px" step="1">
          </label>
          <label class="pp-field" id="pp-field-p">
            <span class="calc-lbl">p =</span>
            <input class="calc-in" id="p9cft-q" type="number" value="5" style="width:70px" step="0.1">
            <span class="calc-lbl" style="margin-left:-2px">%</span>
          </label>
          <label class="pp-field" id="pp-field-n">
            <span class="calc-lbl">n =</span>
            <input class="calc-in" id="p9cft-px" type="number" value="3" style="width:70px" step="1">
            <span class="calc-lbl" style="margin-left:-2px">god</span>
          </label>
          <label class="pp-field target" id="pp-field-K">
            <span class="calc-lbl">K =</span>
            <input class="calc-in" id="p9cft-py" type="number" value="" style="width:100px" step="0.01" placeholder="?" disabled>
          </label>
          <button class="calc-go" onclick="p9calcFromT()">Izračunaj →</button>
        </div>
        
        <div id="pp-context-hint" style="margin-top:8px;font-family:var(--mono);font-size:10px;color:var(--t3);line-height:1.5">
          💡 <strong>Primjer:</strong> "1000 € uz 5% godišnje, 3 godine — koliko stanje?" → K = ?
        </div>
      </div>
      <div class="calc-result" id="p9c-r"></div>
    </div>
  </div>
</div>

<!-- SEKCIJA 12: SR PRIMJERI -->
<div class="sec-head">
  <span class="sec-badge">12 / 12</span>
  <h3 class="sec-h">📚 Detaljno riješeni primjeri (9 komada)</h3>
</div>
<div class="sec-body">
  <p>Klikni "Pokreni" da vidiš korake jedan po jedan. Pokrivaju sve tipove zadataka.</p>

  <div class="sr" id="sr1">
    <div class="sr-head"><span class="sr-no">Primjer 1 · Eksp. jednadžba s istom bazom</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Riješi jednadžbu 4ˣ⁺¹ = 32.</div>
    <button class="sr-try" onclick="tryIt(1)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr1-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Sve na bazu 2: 4 = 2² i 32 = 2⁵.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> 4ˣ⁺¹ = (2²)ˣ⁺¹ = 2²⁽ˣ⁺¹⁾. Jednadžba: 2²ˣ⁺² = 2⁵.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Iste baze → izjednači eksponente: 2x + 2 = 5 → 2x = 3 → x = <em>3/2</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(1)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(1)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr2">
    <div class="sr-head"><span class="sr-no">Primjer 2 · Eksp. jednadžba — supstitucija</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Riješi 4ˣ − 5 · 2ˣ + 4 = 0.</div>
    <button class="sr-try" onclick="tryIt(2)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr2-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Primijeti: 4ˣ = (2²)ˣ = (2ˣ)². Supstituiraj <em>t = 2ˣ</em>.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Jednadžba postaje t² − 5t + 4 = 0.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Faktoriziraj: (t − 1)(t − 4) = 0 → t = 1 ili t = 4.</div>
      <div class="sr-step" data-s="4"><strong>Korak 4:</strong> Vrati supstituciju: 2ˣ = 1 → x = 0; 2ˣ = 4 = 2² → x = 2.</div>
      <div class="sr-step" data-s="5"><strong>Odgovor:</strong> <em>x = 0 ili x = 2</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(2)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(2)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr3">
    <div class="sr-head"><span class="sr-no">Primjer 3 · Eksp. nejednadžba</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Riješi nejednadžbu (1/3)ˣ &gt; 9.</div>
    <button class="sr-try" onclick="tryIt(3)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr3-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Sve na bazu 1/3: 9 = 3² = (1/3)⁻². Nejednadžba: (1/3)ˣ &gt; (1/3)⁻².</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Baza 1/3 &lt; 1 → <em>znak se okreće</em>: x &lt; −2.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> <em>x ∈ ⟨−∞, −2⟩</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(3)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(3)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr4">
    <div class="sr-head"><span class="sr-no">Primjer 4 · Vrijednost log</span><span class="sr-pts">2 boda</span></div>
    <div class="sr-q">Izračunaj log_5 125.</div>
    <div class="sr-minigraph">
      <svg viewBox="0 0 220 50" width="220" height="50">
        <text x="20" y="30" fill="#F59E0B" font-family="JetBrains Mono" font-size="13" font-weight="700">log₅ 125</text>
        <text x="115" y="30" fill="#7A90BB" font-family="JetBrains Mono" font-size="12">=</text>
        <text x="135" y="30" fill="#34D399" font-family="JetBrains Mono" font-size="13" font-weight="700">3</text>
        <text x="155" y="30" fill="#7A90BB" font-family="JetBrains Mono" font-size="10">(jer 5³=125)</text>
      </svg>
    </div>
    <button class="sr-try" onclick="tryIt(4)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr4-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Pitanje: koji je broj c takav da 5ᶜ = 125?</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> 125 = 5 · 5 · 5 = 5³ → c = 3.</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> log_5 125 = <em>3</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(4)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(4)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr5">
    <div class="sr-head"><span class="sr-no">Primjer 5 · Pravila log — pojednostavi</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Pojednostavi: log_2 32 + log_2 8 − log_2 4.</div>
    <button class="sr-try" onclick="tryIt(5)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr5-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Pravilo log_a x + log_a y = log_a (x·y), log_a x − log_a y = log_a (x/y).</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Spoji: log_2 (32 · 8 / 4) = log_2 (256 / 4) = log_2 64.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> 64 = 2⁶ → log_2 64 = <em>6</em>.</div>
      <div class="sr-step" data-s="4"><strong>Provjera direktno:</strong> log_2 32 = 5, log_2 8 = 3, log_2 4 = 2 → 5 + 3 − 2 = 6 ✓</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(5)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(5)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr6">
    <div class="sr-head"><span class="sr-no">Primjer 6 · Log. jednadžba s uvjetima</span><span class="sr-pts">5 bodova</span></div>
    <div class="sr-q">Riješi log_3 (x + 2) + log_3 (x − 4) = 2.</div>
    <button class="sr-try" onclick="tryIt(6)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr6-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Uvjeti: x + 2 &gt; 0 (x &gt; −2) i x − 4 &gt; 0 (x &gt; 4). Strožiji: <em>x &gt; 4</em>.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Pravilo zbroja log: log_3 ((x+2)(x−4)) = 2.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Eksponentiraj: (x+2)(x−4) = 3² = 9.</div>
      <div class="sr-step" data-s="4"><strong>Korak 4:</strong> x² − 2x − 8 = 9 → x² − 2x − 17 = 0. Diskriminanta: 4 + 68 = 72. x = (2 ± √72)/2 = 1 ± 3√2.</div>
      <div class="sr-step" data-s="5"><strong>Korak 5:</strong> 1 + 3√2 ≈ 5.24 (&gt; 4 ✓), 1 − 3√2 ≈ −3.24 (&lt; 4 ✗). <em>Rješenje: x = 1 + 3√2</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(6)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(6)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr7">
    <div class="sr-head"><span class="sr-no">Primjer 7 · Promjena baze</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Izračunaj log_4 32 koristeći promjenu baze na 2.</div>
    <button class="sr-try" onclick="tryIt(7)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr7-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Formula: log_a b = log_c b / log_c a.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> log_4 32 = log_2 32 / log_2 4 = 5 / 2 = <em>2.5</em>.</div>
      <div class="sr-step" data-s="3"><strong>Provjera:</strong> 4^2.5 = 4² · 4^0.5 = 16 · 2 = 32 ✓</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(7)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(7)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr8">
    <div class="sr-head"><span class="sr-no">Primjer 8 · Složena kamata (eksp. rast)</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Iznos 5000 € uz godišnju kamatu 4% (složena), kolik je nakon 5 godina?</div>
    <button class="sr-try" onclick="tryIt(8)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr8-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Formula složenog kamatnog računa: K = K₀ · (1 + p/100)ⁿ.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> K₀ = 5000, p = 4, n = 5 → K = 5000 · 1.04⁵.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> 1.04⁵ ≈ 1.21665. K = 5000 · 1.21665 ≈ <em>6083.26 €</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(8)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(8)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr9">
    <div class="sr-head"><span class="sr-no">Primjer 9 · Raspad (eksp. opadanje)</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Količina radioaktivne tvari opada po formuli N(t) = N₀ · (1/2)^(t/T), gdje je T = 5 god (poluživot). Koliki je postotak preostao nakon 15 godina?</div>
    <button class="sr-try" onclick="tryIt(9)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr9-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Postotak preostao = N(t) / N₀ = (1/2)^(t/T).</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> t = 15, T = 5 → t/T = 3.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> (1/2)³ = 1/8 = 0.125 = <em>12.5%</em>.</div>
      <div class="sr-step" data-s="4"><strong>Tumačenje:</strong> nakon 3 poluživota (15 god) ostalo je 1/2 · 1/2 · 1/2 = 1/8 = 12.5% početne količine.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(9)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(9)">Reset</button></div>
    </div>
  </div>
<div class="sr" id="sr10"><div class="sr-head"><span class="sr-no">Primjer 10 · Exp ↔ Log — inverzne funkcije</span><span class="sr-pts">5 bodova</span></div><div class="sr-q">Dokaži da su f(x) = 2ˣ i g(x) = log₂ x <strong>inverzne</strong> i nađi sjecište njihovih grafova s pravcem y = x (prikaži simetriju).</div><button class="sr-try" onclick="tryIt(10)">▶ Pokreni</button><div class="sr-steps" id="sr10-steps">
  <div class="sr-step" data-s="1"><strong>Definicija</strong>: f i g su inverzne ako <strong>f(g(x)) = x</strong> i <strong>g(f(x)) = x</strong>. Provjera: f(g(x)) = 2^(log₂ x) = x ✓ (svojstvo logaritma). g(f(x)) = log₂(2ˣ) = x ✓. Dakle inverzne su.</div>
  <div class="sr-step" data-s="2"><strong>Geometrijska posljedica</strong>: grafovi f i g su <strong>zrcaljeni preko pravca y = x</strong>. Ako točka (a, b) leži na y = 2ˣ, onda (b, a) leži na y = log₂ x. <br>Primjer: (0, 1) na f — znači (1, 0) na g ✓. (3, 8) na f — znači (8, 3) na g ✓.</div>
  <div class="sr-step" data-s="3"><strong>Sjecište s y = x</strong>: za f traženo <strong>2ˣ = x</strong> (transcedentalna — nema algebarskog rješenja, rješava se numerički). Iz grafa: <strong>NEMA sjecišta</strong> jer 2ˣ &gt; x za sve x (parabola eksp. raste brže od pravca).</div>
  <div class="sr-step" data-s="4">Za g: <strong>log₂ x = x</strong> — isto nema sjecišta (log raste <strong>sporije</strong> od pravca za x &gt; 1, a za 0 &lt; x &lt; 1 je negativan dok je pravac pozitivan za x &gt; 0).</div>
  <div class="sr-step" data-s="5"><em>Zaključak: f i g su inverzne funkcije (zrcalna simetrija preko y = x), ali <strong>nijedna ne siječe pravac y = x</strong>. To je geometrijska intuicija zašto eksp. jednadžbe kao 2ˣ = x NEMAJU rješenje. Veza s maturom: ako trebaš riješiti a^x = x, rješenja postoje samo za baze 1 &lt; a ≤ e^(1/e) ≈ 1.44 (za veće baze, npr. a = 2, nema rješenja — zato 2ˣ = x nema sjecišta).</em></div>
<div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(10)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(10)">Reset</button></div></div></div>

</div>

<!-- ═══ BUG DETECTION GAME ═══ -->
<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku — najčešće greške s logaritmima</div>
  <div class="bug-body">
    <div class="bug-quote">Student je na kolokviju napisao: <em>"log(x + y) = log x + log y"</em></div>
    <div class="bug-task">log(x + y) <span class="wrong">= log x + log y</span></div>
    <div class="bug-opts" id="bug1-opts">
      <div class="bug-opt" onclick="bugAns(1, 0, this)">A) Točno — tako radi pravilo umnoška.</div>
      <div class="bug-opt" onclick="bugAns(1, 1, this)">B) Greška — pravilo vrijedi za <em>umnožak</em>: log(xy) = log x + log y, ne za zbroj.</div>
      <div class="bug-opt" onclick="bugAns(1, 2, this)">C) Točno ali samo za x, y &gt; 0.</div>
    </div>
    <div class="bug-expl" id="bug1-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #2</div>
  <div class="bug-body">
    <div class="bug-quote">Student rješava nejednadžbu (1/2)ˣ &gt; 8 i dobiva: <em>"x &gt; −3"</em></div>
    <div class="bug-task">(1/2)ˣ &gt; 8 → (1/2)ˣ &gt; (1/2)⁻³ → <span class="wrong">x &gt; −3</span></div>
    <div class="bug-opts" id="bug2-opts">
      <div class="bug-opt" onclick="bugAns(2, 0, this)">A) Točno — svedi na istu bazu i uspoređi eksponente.</div>
      <div class="bug-opt" onclick="bugAns(2, 1, this)">B) Greška — korijen je pogrešno izračunat, treba x &gt; 3.</div>
      <div class="bug-opt" onclick="bugAns(2, 2, this)">C) Greška — baza 1/2 &lt; 1, znak se <em>okreće</em>: x &lt; −3.</div>
    </div>
    <div class="bug-expl" id="bug2-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #3</div>
  <div class="bug-body">
    <div class="bug-quote">Student pojednostavljuje: <em>"(log x)² = 2 log x"</em></div>
    <div class="bug-task">(log x)² <span class="wrong">= 2 · log x</span></div>
    <div class="bug-opts" id="bug3-opts">
      <div class="bug-opt" onclick="bugAns(3, 0, this)">A) Točno — pravilo potencije.</div>
      <div class="bug-opt" onclick="bugAns(3, 1, this)">B) Greška — pravilo potencije vrijedi samo iznutra: log(x²) = 2 log x. (log x)² je (log x)·(log x), različito.</div>
      <div class="bug-opt" onclick="bugAns(3, 2, this)">C) Točno za pozitivni x.</div>
    </div>
    <div class="bug-expl" id="bug3-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #4</div>
  <div class="bug-body">
    <div class="bug-quote">Student riješi log_2 (x + 1) + log_2 (x − 3) = 2 i dobije rješenja x = 5 i x = −3, pa prihvati oba.</div>
    <div class="bug-task">Rješenja x = 5, <span class="wrong">x = −3</span> — oba prihvaćena</div>
    <div class="bug-opts" id="bug4-opts">
      <div class="bug-opt" onclick="bugAns(4, 0, this)">A) Točno — oba zadovoljavaju kvadratnu jednadžbu.</div>
      <div class="bug-opt" onclick="bugAns(4, 1, this)">B) Greška u aritmetici — trebalo je x = 5 i x = 1.</div>
      <div class="bug-opt" onclick="bugAns(4, 2, this)">C) Greška — x = −3 daje log_2 (−2) koji nije definiran. Uvjet x − 3 &gt; 0 → samo x = 5.</div>
    </div>
    <div class="bug-expl" id="bug4-exp"></div>
  </div>
</div>

<!-- ═══ MATCH GAME ═══ -->
<div class="match-wrap">
  <div class="match-head">
    <span class="match-title">🧩 Spoji log ↔ vrijednost</span>
    <span class="match-score">Riješeno: <strong id="match-score">0</strong> / 5</span>
  </div>
  <div class="match-body">
    <div class="match-grid">
      <div class="match-col">
        <div class="match-col-lbl">Logaritam</div>
        <button class="match-btn" data-pair="a" data-side="L" onclick="matchClick(this)">log_2 8</button>
        <button class="match-btn" data-pair="b" data-side="L" onclick="matchClick(this)">log_3 81</button>
        <button class="match-btn" data-pair="c" data-side="L" onclick="matchClick(this)">log_5 25</button>
        <button class="match-btn" data-pair="d" data-side="L" onclick="matchClick(this)">ln e</button>
        <button class="match-btn" data-pair="e" data-side="L" onclick="matchClick(this)">log 1000</button>
      </div>
      <div class="match-col">
        <div class="match-col-lbl">Vrijednost</div>
        <button class="match-btn" data-pair="c" data-side="R" onclick="matchClick(this)">2</button>
        <button class="match-btn" data-pair="a" data-side="R" onclick="matchClick(this)">3</button>
        <button class="match-btn" data-pair="d" data-side="R" onclick="matchClick(this)">1</button>
        <button class="match-btn" data-pair="e" data-side="R" onclick="matchClick(this)">3</button>
        <button class="match-btn" data-pair="b" data-side="R" onclick="matchClick(this)">4</button>
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
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">EKSP.</div><div class="fc-q">f(x) = aˣ uvjeti</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>a &gt; 0, a ≠ 1</strong><br>x ∈ ℝ, f(x) &gt; 0</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">EKSP.</div><div class="fc-q">a &gt; 1 → ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>Rastuća</strong><br>(npr. 2ˣ, eˣ, 10ˣ)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">EKSP.</div><div class="fc-q">0 &lt; a &lt; 1 → ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>Padajuća</strong><br>(npr. (1/2)ˣ — raspad)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">LOG.</div><div class="fc-q">log_a b = c znači?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>aᶜ = b</strong><br>"a na c daje b"</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">LOG.</div><div class="fc-q">log_a 1 = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>0</strong><br>(jer a⁰ = 1)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">LOG.</div><div class="fc-q">log_a a = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>1</strong><br>(jer a¹ = a)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">PRAVILA</div><div class="fc-q">log_a (xy) = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>log_a x + log_a y</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">PRAVILA</div><div class="fc-q">log_a (x/y) = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>log_a x − log_a y</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">PRAVILA</div><div class="fc-q">log_a (xⁿ) = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>n · log_a x</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">BAZA</div><div class="fc-q">Promjena baze log_a b</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>log b / log a</strong><br>(ili ln b / ln a)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">BAZE</div><div class="fc-q">e ≈ ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>2.71828...</strong><br>Eulerov broj, baza ln</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">JED.</div><div class="fc-q">aˣ = b → x = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>x = log_a b</strong><br>(ili = log b / log a)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">KAMATA</div><div class="fc-q">Složena kamata K = ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>K₀ · (1 + p/100)ⁿ</strong></div></div></div></div>
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
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam definiciju aˣ (a &gt; 0, a ≠ 1) i log_a x (x &gt; 0)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam razlikovati rastuću (a &gt; 1) i padajuću (0 &lt; a &lt; 1) eksp. funkciju</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam svih 5 pravila logaritama (zbroj, razlika, potencija, korijen, baza)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam riješiti eksp. jednadžbu (ista baza, logaritmiranje, supstitucija)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam riješiti log. jednadžbu i provjeriti uvjete (x &gt; 0)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam izračunati složenu kamatu K = K₀ · (1 + p/100)ⁿ</div></div>
  
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Prepoznajem i crtam eksponencijalnu i logaritamsku funkciju (asimptota, domena)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Koristim promjenu baze: log_a(x) = log(x)/log(a)</div></div>
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
  <div class="cp-ready" id="cp-ready">🏆 Spreman/na si za P11! Idemo dalje.</div>
</div>

<div class="discere-cta">
  <div class="discere-h">🎓 Želiš dublju razinu?</div>
  <div class="discere-t">Eksp. i log. su nezaobilazni: rast, raspad, kamate, populacija, pH, decibeli. Za dublje razumijevanje i AI tutora koji te vodi kroz složene primjere — <strong>Discere</strong>.</div>
  <a href="#" onclick="window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/discere'},'*'); return false;" class="discere-btn">Pogledaj program →</a>
</div>

<div class="cn-wrap">
  <div class="cn-title">→ Nastavi učenje</div>
  <div class="cn-grid">
    <div class="cn-card" onclick="navigateChapter('p11')" style="cursor:pointer">
      <div class="cn-h">Sljedeće · P11</div>
      <div class="cn-t">Vektori</div>
      <div class="cn-s">~50 min · srednja težina</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p09')" style="cursor:pointer">
      <div class="cn-h">Povezano · P09</div>
      <div class="cn-t">Kvadratna funkcija</div>
      <div class="cn-s">supstitucija → kvadratne</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p03')" style="cursor:pointer">
      <div class="cn-h">Povezano · P03</div>
      <div class="cn-t">Potencije i korijeni</div>
      <div class="cn-s">temelj eksp. funkcije</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p02')" style="cursor:pointer">
      <div class="cn-h">Povezano · P02</div>
      <div class="cn-t">Razlomci i postoci</div>
      <div class="cn-s">postotni račun za kamate</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <button class="nb" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">← 📐 Uči</button>
  <button class="nb primary" onclick="navigateChapter('p11')">11 · Vektori →</button>
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
    "q": "Eksponencijalna funkcija f(x) = aˣ definirana je samo za a > 0 i a ≠ 1.",
    "a": true,
    "e": "Inače ne bi bila definirana za sve x ∈ ℝ ili bi bila konstanta."
  },
  {
    "q": "Svaka eksponencijalna funkcija prolazi kroz točku (0, 1).",
    "a": true,
    "e": "a⁰ = 1 za svaku bazu a > 0."
  },
  {
    "q": "f(x) = (1/3)ˣ je rastuća funkcija.",
    "a": false,
    "e": "Baza 1/3 je između 0 i 1 → padajuća."
  },
  {
    "q": "f(x) = 2ˣ može biti negativna za neki x.",
    "a": false,
    "e": "aˣ > 0 za sve x (x-os je asimptota)."
  },
  {
    "q": "Eksponencijalna funkcija f(x) = aˣ ima domenu ℝ, a sliku ⟨0, +∞⟩.",
    "a": true,
    "e": "Definirana je za sve realne x, vrijednosti samo pozitivne."
  },
  {
    "q": "Baza e ≈ 2.71828 zove se Eulerov broj.",
    "a": true,
    "e": "Najvažnija baza u matematičkoj analizi."
  },
  {
    "q": "log_a x definiran je samo za x > 0.",
    "a": true,
    "e": "Log negativnog broja ili nule nije realan."
  },
  {
    "q": "log_a 1 = 1 za svaku bazu a.",
    "a": false,
    "e": "log_a 1 = 0 (jer a⁰ = 1)."
  },
  {
    "q": "log_a a = 1 za svaku bazu a > 0, a ≠ 1.",
    "a": true,
    "e": "a¹ = a."
  },
  {
    "q": "log_2 16 = 4.",
    "a": true,
    "e": "2⁴ = 16."
  },
  {
    "q": "ln je logaritam s bazom 10.",
    "a": false,
    "e": "ln = log_e (prirodni). log (bez dolje) = log_10 (dekadski)."
  },
  {
    "q": "Graf f(x) = log_a x prolazi kroz točku (1, 0).",
    "a": true,
    "e": "log_a 1 = 0."
  },
  {
    "q": "log(x + y) = log x + log y",
    "a": false,
    "e": "POGREŠNO! Pravilo je za UMNOŽAK: log(xy) = log x + log y."
  },
  {
    "q": "log(xy) = log x + log y",
    "a": true,
    "e": "Točno — pravilo logaritma umnoška."
  },
  {
    "q": "log(x/y) = log x / log y",
    "a": false,
    "e": "POGREŠNO! log(x/y) = log x − log y (razlika, ne količnik)."
  },
  {
    "q": "log(xⁿ) = n · log x",
    "a": true,
    "e": "Pravilo logaritma potencije."
  },
  {
    "q": "(log x)² = 2 · log x",
    "a": false,
    "e": "POGREŠNO! Samo log(x²) = 2·log x. Kvadrat vanjskog loga NIJE pravilo."
  },
  {
    "q": "log_a b = log b / log a (promjena baze)",
    "a": true,
    "e": "Radi za bilo koji log u brojniku i nazivniku."
  },
  {
    "q": "log_2 (8 · 4) = log_2 8 + log_2 4 = 3 + 2 = 5",
    "a": true,
    "e": "Točno. Provjera: 8 · 4 = 32 = 2⁵."
  },
  {
    "q": "log_a (x − y) = log_a x − log_a y",
    "a": false,
    "e": "POGREŠNO! Pravilo je za KOLIČNIK x/y, ne razliku x − y."
  },
  {
    "q": "Iz 2ˣ = 8 slijedi x = 3.",
    "a": true,
    "e": "8 = 2³ → x = 3."
  },
  {
    "q": "Iz 3ˣ = 5 slijedi x = 5/3.",
    "a": false,
    "e": "Bez istih baza → logaritmiraj: x = log_3 5 ≈ 1.46."
  },
  {
    "q": "Nejednadžba 2ˣ > 16 daje x > 4.",
    "a": true,
    "e": "Baza 2 > 1 → znak ostaje."
  },
  {
    "q": "Nejednadžba (1/2)ˣ > 4 daje x > −2.",
    "a": false,
    "e": "Baza 1/2 < 1 → znak se OKREĆE: x < −2."
  },
  {
    "q": "Kod log. jednadžbe uvijek moraš provjeriti uvjet x > 0 (ili f(x) > 0).",
    "a": true,
    "e": "Inače rješenje možda nije u domeni."
  },
  {
    "q": "Složeni kamatni račun: K = K₀ · (1 + p/100)ⁿ.",
    "a": true,
    "e": "Točno — formula složene kamate."
  },
  {
    "q": "1000 € uz 10% godišnje, nakon 2 godine = 1200 € (složeno).",
    "a": false,
    "e": "K = 1000 · 1.1² = 1210 €, ne 1200 (1200 bi bilo jednostavno)."
  },
  {
    "q": "Poluživot 5 godina znači da se tvar prepolovi svake 5. godine.",
    "a": true,
    "e": "N(t) = N₀ · (1/2)^(t/T), gdje T = 5."
  }
];
const DRILL_DATA = [
  {
    "q": "Riješi 2ˣ = 32.",
    "opts": [
      "5",
      "4",
      "6",
      "8"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "32 = 2⁵ → x = 5."
  },
  {
    "q": "Koliko je log_3 81?",
    "opts": [
      "4",
      "3",
      "9",
      "27"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "3⁴ = 81."
  },
  {
    "q": "log_10 1000 = ?",
    "opts": [
      "10",
      "3",
      "100",
      "4"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "10³ = 1000."
  },
  {
    "q": "log_a a = ?",
    "opts": [
      "0",
      "a",
      "ne postoji",
      "1"
    ],
    "ok": 3,
    "diff": "easy",
    "exp": "a¹ = a."
  },
  {
    "q": "log_a 1 = ?",
    "opts": [
      "1",
      "a",
      "0",
      "−1"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "a⁰ = 1."
  },
  {
    "q": "5⁰ = ?",
    "opts": [
      "0",
      "5",
      "1",
      "−5"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "Svaki broj na nultu je 1 (osim 0)."
  },
  {
    "q": "f(x) = 2ˣ prolazi kroz točku:",
    "opts": [
      "(0, 0)",
      "(1, 0)",
      "(0, 1)",
      "(2, 0)"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "2⁰ = 1."
  },
  {
    "q": "f(x) = log_2 x prolazi kroz:",
    "opts": [
      "(0, 1)",
      "(2, 1)",
      "(0, 0)",
      "(1, 0)"
    ],
    "ok": 3,
    "diff": "easy",
    "exp": "log_2 1 = 0."
  },
  {
    "q": "e ≈ ?",
    "opts": [
      "3.14",
      "1.41",
      "2.71",
      "1.62"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "e ≈ 2.71828 (Eulerov broj)."
  },
  {
    "q": "Baza od ln je:",
    "opts": [
      "10",
      "2",
      "π",
      "e"
    ],
    "ok": 3,
    "diff": "easy",
    "exp": "ln = log_e."
  },
  {
    "q": "Riješi 3ˣ⁺¹ = 27.",
    "opts": [
      "1",
      "2",
      "3",
      "0"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "27 = 3³ → x + 1 = 3 → x = 2."
  },
  {
    "q": "log_2 8 + log_2 4 = ?",
    "opts": [
      "12",
      "5",
      "6",
      "7"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "log_2 (8·4) = log_2 32 = 5."
  },
  {
    "q": "log_2 16 − log_2 4 = ?",
    "opts": [
      "4",
      "2",
      "8",
      "1"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "log_2 (16/4) = log_2 4 = 2."
  },
  {
    "q": "log_2 (8³) = ?",
    "opts": [
      "3",
      "9",
      "24",
      "6"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "3 · log_2 8 = 3 · 3 = 9."
  },
  {
    "q": "(1/2)ˣ = 8 → x = ?",
    "opts": [
      "3",
      "1/3",
      "−1/3",
      "−3"
    ],
    "ok": 3,
    "diff": "med",
    "exp": "8 = 2³ = (1/2)⁻³ → x = −3."
  },
  {
    "q": "Promjena baze: log_4 32 = ?",
    "opts": [
      "2.5",
      "5",
      "2",
      "3"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "log_2 32 / log_2 4 = 5/2 = 2.5."
  },
  {
    "q": "Nejednadžba 2ˣ > 8:",
    "opts": [
      "x > 3",
      "x < 3",
      "x > 4",
      "svi x"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "8 = 2³, baza > 1 → x > 3."
  },
  {
    "q": "Nejednadžba (1/3)ˣ < 9:",
    "opts": [
      "x < −2",
      "x > 2",
      "x > −2",
      "x < 2"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "9 = (1/3)⁻² → baza < 1 → znak se okreće → x > −2."
  },
  {
    "q": "log x = 2 → x = ?",
    "opts": [
      "100",
      "2",
      "20",
      "10"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "log10 x = 2 → x = 10² = 100."
  },
  {
    "q": "ln e² = ?",
    "opts": [
      "2",
      "1",
      "e",
      "e²"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "ln eⁿ = n."
  },
  {
    "q": "Riješi 4ˣ − 3 · 2ˣ + 2 = 0 (supstitucija).",
    "opts": [
      "x = 1, 2",
      "x = 2",
      "x = −1, 1",
      "x = 0, 1"
    ],
    "ok": 3,
    "diff": "hard",
    "exp": "t = 2ˣ → t² − 3t + 2 = 0 → t = 1 ili 2 → x = 0 ili 1."
  },
  {
    "q": "log_2 (x + 3) = 4 → x = ?",
    "opts": [
      "15",
      "16",
      "19",
      "13"
    ],
    "ok": 3,
    "diff": "hard",
    "exp": "x + 3 = 2⁴ = 16 → x = 13."
  },
  {
    "q": "log_3 x + log_3 (x − 2) = 1 → x = ?",
    "opts": [
      "1",
      "3",
      "2",
      "oba 3 i −1"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "log_3 (x(x−2)) = 1 → x²−2x = 3 → x² − 2x − 3 = 0 → x = 3 ili −1. Uvjet x > 2 → x = 3."
  },
  {
    "q": "Kamatni račun: 2000 €, 3% godišnje, 2 godine (složeno). K = ?",
    "opts": [
      "2121.80 €",
      "2060 €",
      "2120 €",
      "2124 €"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "2000 · 1.03² = 2000 · 1.0609 = 2121.80."
  },
  {
    "q": "Nakon koliko godina 1000 € postane 1210 € uz 10% godišnje?",
    "opts": [
      "1",
      "3",
      "2",
      "5"
    ],
    "ok": 2,
    "diff": "hard",
    "exp": "1000 · 1.1ⁿ = 1210 → 1.1ⁿ = 1.21 = 1.1² → n = 2."
  },
  {
    "q": "log_5 125 − log_5 25 = ?",
    "opts": [
      "3",
      "1",
      "5",
      "2"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "log_5 (125/25) = log_5 5 = 1."
  },
  {
    "q": "Koliki je poluživot ako N(t) = N₀ · (0.5)^(t/8)?",
    "opts": [
      "4",
      "16",
      "8",
      "0.5"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "Poluživot T = 8 (kada t = T, N = N₀/2)."
  },
  {
    "q": "Ako f(x) = log_a x prolazi kroz (4, 2), koliki je a?",
    "opts": [
      "4",
      "√2",
      "16",
      "2"
    ],
    "ok": 3,
    "diff": "hard",
    "exp": "log_a 4 = 2 → a² = 4 → a = 2."
  }
];
const QUIZ_DATA = [
  {
    "q": "Riješi jednadžbu 5^(2x+1) = 125.",
    "opts": [
      "x = 2",
      "x = 1",
      "x = 3",
      "x = 1.5"
    ],
    "ok": 1,
    "e": "125 = 5³ → 2x+1 = 3 → x = 1."
  },
  {
    "q": "Izračunaj log_3 81 − log_3 9.",
    "opts": [
      "4",
      "6",
      "2",
      "8"
    ],
    "ok": 2,
    "e": "log_3 (81/9) = log_3 9 = 2."
  },
  {
    "q": "Riješi nejednadžbu (1/5)ˣ > 25.",
    "opts": [
      "x < −2",
      "x > 2",
      "x < 2",
      "x > −2"
    ],
    "ok": 0,
    "e": "25 = (1/5)⁻² → baza < 1 → znak se okreće → x < −2."
  },
  {
    "q": "Pojednostavi: log_a (x²y³ / z).",
    "opts": [
      "log(x² + y³ − z)",
      "2log x · 3log y / log z",
      "(log x² + log y³) / log z",
      "2log x + 3log y − log z"
    ],
    "ok": 3,
    "e": "Pravila log: potencije → 2log x + 3log y, dijeljenje → − log z."
  },
  {
    "q": "Riješi 2^(x+1) + 2ˣ = 12.",
    "opts": [
      "x = 1",
      "x = log₂ 4",
      "x = 3",
      "x = 2"
    ],
    "ok": 3,
    "e": "2^(x+1) = 2 · 2ˣ → 2·2ˣ + 2ˣ = 3·2ˣ = 12 → 2ˣ = 4 → x = 2."
  },
  {
    "q": "log_2 x = 3 + log_2 5 → x = ?",
    "opts": [
      "40",
      "15",
      "35",
      "45"
    ],
    "ok": 0,
    "e": "log_2 x − log_2 5 = 3 → log_2 (x/5) = 3 → x/5 = 8 → x = 40."
  },
  {
    "q": "Kapital 500 € uloži se uz 6% godišnje (složeno). Koliko je nakon 4 godine?",
    "opts": [
      "612 €",
      "624.06 €",
      "631.24 €",
      "640 €"
    ],
    "ok": 2,
    "e": "500 · 1.06⁴ = 500 · 1.26248 ≈ 631.24. Ispravan odgovor ~631.24 € (najbliži 631.24)."
  },
  {
    "q": "Radioaktivna tvar ima poluživot 10 god. Koliki je postotak preostao nakon 30 godina?",
    "opts": [
      "25%",
      "12.5%",
      "6.25%",
      "0%"
    ],
    "ok": 1,
    "e": "30/10 = 3 poluživota → (1/2)³ = 1/8 = 12.5%."
  }
];
const PBX_CH_DATA = [{"q": "Postavi parabolu tako da bude f(x) = x²", "check": {"a": 1, "b": 0, "c": 0, "tol": 0.15}}, {"q": "Postavi parabolu s tjemenom u točki (0, −5)", "check": {"type": "vertex", "p": 0, "q": -5, "tol": 0.3}}, {"q": "Postavi parabolu koja ima nultočke −2 i 2", "check": {"type": "roots", "roots": [-2, 2], "tol": 0.3}}, {"q": "Postavi parabolu otvorenu prema dolje s y-odsječkom 4", "check": {"type": "complex", "aneg": true, "c": 4, "tol": 0.4}}, {"q": "Postavi parabolu f(x) = (x − 3)² − 1 (tjeme u T(3, −1))", "check": {"type": "vertex", "p": 3, "q": -1, "tol": 0.3}}, {"q": "Postavi parabolu koja nema realnih nultočaka (D &lt; 0)", "check": {"type": "D", "sign": "neg"}}, {"q": "Postavi parabolu s dvostrukom nultočkom u x = 2 (D = 0)", "check": {"type": "double", "x": 2, "tol": 0.3}}, {"q": "Postavi parabolu f(x) = −2x² + 4 (max = 4)", "check": {"a": -2, "b": 0, "c": 4, "tol": 0.25}}, {"q": "Simuliraj projektil: tjeme u (3, 9), otvorena dolje", "check": {"type": "vertex", "p": 3, "q": 9, "aneg": true, "tol": 0.4}}, {"q": "Postavi funkciju f(x) = x² − 6x + 5 (nultočke 1 i 5)", "check": {"a": 1, "b": -6, "c": 5, "tol": 0.25}}, {"q": "Postavi parabolu koja siječe x-os u 0 i 4", "check": {"type": "roots", "roots": [0, 4], "tol": 0.3}}, {"q": "Postavi parabolu f(x) = 0.5x² − 2x (tjeme u (2, −2))", "check": {"a": 0.5, "b": -2, "c": 0, "tol": 0.25}}];
const DRILL_HINTS = [
  "32 = 2⁵ (svedi na bazu 2).",
  "3 na koju potenciju = 81? Pokušaj 4.",
  "10 na koju = 1000? 3 nule = 3.",
  "Svaka baza na 1 = sama baza.",
  "Svaka baza na 0 = 1.",
  "Sve a⁰ = 1, a ≠ 0.",
  "Eksp. prolazi (0, 1) — jer a⁰ = 1.",
  "Log. prolazi (1, 0) — jer log_a 1 = 0.",
  "e je posebna konstanta ≈ 2.718.",
  "ln = prirodni = baza e.",
  "27 = 3³, pa x + 1 = 3.",
  "log a + log b = log(ab). Množenje argumenata.",
  "log a − log b = log(a/b). Količnik.",
  "log(aⁿ) = n·log a. Eksponent ispred.",
  "8 = 2³ pa (1/2)⁻³ = 8. x = −3.",
  "log_4 32 = log_2 32 / log_2 4.",
  "2ˣ > 2³ → baza > 1, znak ostaje.",
  "(1/3)ˣ < (1/3)⁻² → okreni znak jer baza < 1.",
  "log (bez indeksa) = log₁₀ → x = 10².",
  "ln eⁿ = n (inverz ln i e).",
  "Zamijeni t = 2ˣ → kvadratna.",
  "Eksponentiraj: 2⁴ = x + 3.",
  "Spoji log → (x)(x−2) = 3. Pazi uvjet.",
  "1.03² = 1.0609. Množi s 2000.",
  "1.21 = 1.1², pa n = 2.",
  "125/25 = 5, log_5 5 = 1.",
  "N(T) = N₀ · 0.5 kad t/8 = 1 → T = 8.",
  "log_a 4 = 2 znači a² = 4."
];

// P09 JS Part 1 — core, toast, tabs, progress, achievements, Parabola Explorer
const LS_KEY = 'matb_p10';
const FAV_KEY = 'matb_p10_favs';
const ACH_KEY = 'matb_p10_ach';

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
  const target = 8;
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
// FUNKCIJA VISUALIZER 2.0 (P10) — eksp. i log. zajedno
// Mode 0: Eksp. aˣ (drag a, drag x)
// Mode 1: Log. log_a x (drag a, drag x)
// Mode 2: Inverz — oba grafa + y=x os simetrije
// ═══════════════════════════════════════════════════════════════

const pbx = {
  a: 2,       // baza
  x: 1,       // evaluacijska točka
  mode: 0,    // 0=eksp, 1=log, 2=inverz
  zoom: 1,
  presetsUsed: 0,
  // Postotni (u P10 = kamata) — ppTarget 'K' / 'K0' / 'n'
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
  if (m === 0) toast('📈 Eksp. aˣ — drag bazom i x', 'info', 1800);
  else if (m === 1) toast('📉 Log. log_a x — drag bazom i x', 'info', 1800);
  else toast('↔ Inverz — aˣ i log_a x oko y = x', 'info', 2000);
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
    a2:       {a: 2, x: 1},
    ae:       {a: 2.71828, x: 1},
    a10:      {a: 10, x: 1},
    ahalf:    {a: 0.5, x: 1},
    agrowth:  {a: 1.05, x: 1},
    adecay:   {a: 0.9, x: 1}
  };
  const pst = presets[name];
  if (!pst) return;
  pbx.a = pst.a;
  pbx.x = pst.x;
  const sa = document.getElementById('pbx-a');
  const sx = document.getElementById('pbx-x');
  if (sa) { sa.value = pst.a; document.getElementById('pbx-a-val').textContent = pst.a.toFixed(2); }
  if (sx) { sx.value = pst.x; document.getElementById('pbx-x-val').textContent = pst.x.toFixed(1); }
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
function fmtN(n) {
  if (n === null || n === undefined || !isFinite(n)) return '—';
  if (Math.abs(n) < 1e-10) return '0';
  if (Math.abs(n - Math.round(n)) < 0.0001) return String(Math.round(n));
  return (Math.round(n * 10000) / 10000).toString();
}

function logBase(x, base) {
  if (x <= 0) return NaN;
  return Math.log(x) / Math.log(base);
}

// Canvas draw
function pbxUpdate() {
  const canvas = document.getElementById('pbx-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext && canvas.getContext('2d');
  if (!ctx) return;
  
  // Sync sliders
  const aIn = document.getElementById('pbx-a');
  const xIn = document.getElementById('pbx-x');
  if (aIn) pbx.a = parseFloat(aIn.value) || 2;
  if (xIn) pbx.x = parseFloat(xIn.value);
  
  // Guard: a must be > 0 and ≠ 1
  if (pbx.a <= 0) pbx.a = 0.2;
  if (Math.abs(pbx.a - 1) < 0.05) pbx.a = pbx.a < 1 ? 0.95 : 1.05;
  
  const aVal = document.getElementById('pbx-a-val');
  const xVal = document.getElementById('pbx-x-val');
  const dirVal = document.getElementById('pbx-dir-val');
  if (aVal) aVal.textContent = pbx.a.toFixed(2);
  if (xVal) xVal.textContent = pbx.x.toFixed(1);
  if (dirVal) {
    dirVal.textContent = pbx.a > 1 ? 'rastuća' : 'padajuća';
    dirVal.className = 'pbx-ctrl-val ' + (pbx.a > 1 ? 'ok' : 'warn');
  }
  
  const W = canvas.width, H = canvas.height;
  ctx.fillStyle = '#0A0F1A';
  ctx.fillRect(0, 0, W, H);
  
  // Coordinate system: [-5, 5] x [-2, 8] default
  const xMin = -5 / pbx.zoom, xMax = 5 / pbx.zoom;
  const yMin = -2 / pbx.zoom, yMax = 8 / pbx.zoom;
  const pad = 40;
  const cw = W - pad * 2;
  const ch = H - pad * 2;
  
  function X(x) { return pad + ((x - xMin) / (xMax - xMin)) * cw; }
  function Y(y) { return pad + ((yMax - y) / (yMax - yMin)) * ch; }
  
  // Grid
  ctx.strokeStyle = '#17203A';
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    ctx.moveTo(X(x), pad);
    ctx.lineTo(X(x), H - pad);
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    ctx.moveTo(pad, Y(y));
    ctx.lineTo(W - pad, Y(y));
  }
  ctx.stroke();
  
  // Axes
  ctx.strokeStyle = '#7A90BB';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(pad, Y(0));
  ctx.lineTo(W - pad, Y(0));
  ctx.moveTo(X(0), pad);
  ctx.lineTo(X(0), H - pad);
  ctx.stroke();
  
  // Axis labels
  ctx.fillStyle = '#7A90BB';
  ctx.font = '10px JetBrains Mono';
  ctx.textAlign = 'center';
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    if (x === 0) continue;
    ctx.fillText(String(x), X(x), Y(0) + 14);
  }
  ctx.textAlign = 'right';
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    if (y === 0) continue;
    ctx.fillText(String(y), X(0) - 5, Y(y) + 4);
  }
  ctx.textAlign = 'start';
  ctx.fillText('x', W - pad + 10, Y(0) + 4);
  ctx.fillText('y', X(0) + 6, pad - 6);
  
  // Mode 2: y = x identity line (pink)
  if (pbx.mode === 2) {
    ctx.strokeStyle = '#F472B6';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(X(yMin), Y(yMin));
    ctx.lineTo(X(yMax), Y(yMax));
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  // Draw eksp. graph (green)
  if (pbx.mode === 0 || pbx.mode === 2) {
    ctx.strokeStyle = '#34D399';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let first = true;
    const step = (xMax - xMin) / 300;
    for (let x = xMin; x <= xMax; x += step) {
      const y = Math.pow(pbx.a, x);
      if (!isFinite(y) || y > yMax * 2 || y < yMin * 2) {
        first = true;
        continue;
      }
      const px = X(x), py = Y(y);
      if (first) { ctx.moveTo(px, py); first = false; }
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
  }
  
  // Draw log. graph (cyan)
  if (pbx.mode === 1 || pbx.mode === 2) {
    ctx.strokeStyle = '#22D3EE';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let first = true;
    const step = (xMax - xMin) / 300;
    for (let x = xMin; x <= xMax; x += step) {
      if (x <= 0) continue;
      const y = logBase(x, pbx.a);
      if (!isFinite(y) || y > yMax * 2 || y < yMin * 2) {
        first = true;
        continue;
      }
      const px = X(x), py = Y(y);
      if (first) { ctx.moveTo(px, py); first = false; }
      else ctx.lineTo(px, py);
    }
    ctx.stroke();
  }
  
  // Draw evaluation dot
  if (pbx.mode === 0) {
    // Eksp: dot at (x, aˣ)
    const yEval = Math.pow(pbx.a, pbx.x);
    if (isFinite(yEval) && yEval >= yMin && yEval <= yMax) {
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(X(pbx.x), Y(yEval), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#0A0F1A';
      ctx.lineWidth = 2;
      ctx.stroke();
      // Dashed lines to axes
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(X(pbx.x), Y(0));
      ctx.lineTo(X(pbx.x), Y(yEval));
      ctx.lineTo(X(0), Y(yEval));
      ctx.stroke();
      ctx.setLineDash([]);
    }
  } else if (pbx.mode === 1 && pbx.x > 0) {
    const yEval = logBase(pbx.x, pbx.a);
    if (isFinite(yEval) && yEval >= yMin && yEval <= yMax) {
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(X(pbx.x), Y(yEval), 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#0A0F1A';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(X(pbx.x), Y(0));
      ctx.lineTo(X(pbx.x), Y(yEval));
      ctx.lineTo(X(0), Y(yEval));
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }
  
  // Header text
  ctx.fillStyle = '#22D3EE';
  ctx.font = 'bold 13px JetBrains Mono';
  ctx.textAlign = 'center';
  let hdr = '';
  if (pbx.mode === 0) {
    const y = Math.pow(pbx.a, pbx.x);
    hdr = 'f(x) = ' + fmtN(pbx.a) + 'ˣ   pri x = ' + fmtN(pbx.x) + '  →  y = ' + fmtN(y);
  } else if (pbx.mode === 1) {
    const y = pbx.x > 0 ? logBase(pbx.x, pbx.a) : null;
    hdr = 'f(x) = log_' + fmtN(pbx.a) + ' x   pri x = ' + fmtN(pbx.x) + '  →  y = ' + (y === null ? 'n/d (x ≤ 0)' : fmtN(y));
  } else {
    hdr = 'Inverz: f(x) = ' + fmtN(pbx.a) + 'ˣ  ↔  f⁻¹(x) = log_' + fmtN(pbx.a) + ' x';
  }
  ctx.fillText(hdr, W / 2, 22);
  
  updateInfo();
}

function updateInfo() {
  const info = document.getElementById('pbx-info');
  if (!info) return;
  if (pbx.mode === 0) {
    const y = Math.pow(pbx.a, pbx.x);
    info.innerHTML = 'f(x) = <strong>' + fmtN(pbx.a) + 'ˣ</strong> pri x = <strong>' + fmtN(pbx.x) + '</strong> → <strong>' + fmtN(pbx.a) + '^' + fmtN(pbx.x) + ' = ' + fmtN(y) + '</strong>';
  } else if (pbx.mode === 1) {
    if (pbx.x <= 0) {
      info.innerHTML = '⚠️ log_' + fmtN(pbx.a) + ' x nije definiran za x = <strong>' + fmtN(pbx.x) + '</strong> (mora biti x &gt; 0)';
    } else {
      const y = logBase(pbx.x, pbx.a);
      info.innerHTML = 'f(x) = <strong>log_' + fmtN(pbx.a) + ' x</strong> pri x = <strong>' + fmtN(pbx.x) + '</strong> → <strong>' + fmtN(y) + '</strong>';
    }
  } else {
    info.innerHTML = 'aˣ i log_a x su međusobni <strong>inverzi</strong> — refleksija preko pravca y = x. Trenutno a = <strong>' + fmtN(pbx.a) + '</strong>.';
  }
}

// No-op za kompatibilnost
function pbxToggleBracket(which) {}

// CHALLENGES
// (dup PBX_CH_DATA removed)

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
  let pass = false, msg = '';
  const a = pbx.a, x = pbx.x, mode = pbx.mode;
  
  switch (pbxCh.type) {
    case 'base':
      pass = Math.abs(a - pbxCh.target) < (pbxCh.tol || 0.15);
      msg = pass ? '✓ Baza a = ' + fmtN(a) + ' ≈ ' + pbxCh.target
                 : '✗ Baza a = ' + fmtN(a) + ', cilj: ' + pbxCh.target;
      break;
    case 'decreasing':
      pass = a > 0 && a < 1;
      msg = pass ? '✓ a = ' + fmtN(a) + ' < 1 → padajuća ✓'
                 : '✗ a = ' + fmtN(a) + ' — treba 0 < a < 1 (trenutno ' + (a >= 1 ? 'rastuća' : 'neispravna') + ')';
      break;
    case 'increasing':
      pass = a > 1;
      msg = pass ? '✓ a = ' + fmtN(a) + ' > 1 → rastuća ✓'
                 : '✗ a = ' + fmtN(a) + ' — treba a > 1';
      break;
    case 'eval_exp':
      pass = mode === 0 &&
             Math.abs(a - pbxCh.target_a) < (pbxCh.tol_a || 0.15) &&
             Math.abs(x - pbxCh.target_x) < (pbxCh.tol_x || 0.2);
      msg = pass ? '✓ ' + fmtN(a) + '^' + fmtN(x) + ' = ' + fmtN(Math.pow(a, x)) + ' (očekivano ' + pbxCh.expected_y + ')'
                 : '✗ Prebaci na mod Eksp. (📈) i postavi a ≈ ' + pbxCh.target_a + ', x ≈ ' + pbxCh.target_x;
      break;
    case 'eval_log':
      pass = mode === 1 &&
             Math.abs(a - pbxCh.target_a) < (pbxCh.tol_a || 0.15) &&
             Math.abs(x - pbxCh.target_x) < (pbxCh.tol_x || 0.3);
      msg = pass ? '✓ log_' + fmtN(a) + ' ' + fmtN(x) + ' = ' + fmtN(logBase(x, a)) + ' (očekivano ' + pbxCh.expected_y + ')'
                 : '✗ Prebaci na mod Log. (📉) i postavi a ≈ ' + pbxCh.target_a + ', x ≈ ' + pbxCh.target_x;
      break;
    case 'inverse_mode':
      pass = mode === 2 && Math.abs(a - pbxCh.target_a) < (pbxCh.tol_a || 0.15);
      msg = pass ? '✓ U Inverz modu vidiš simetriju preko y = x'
                 : '✗ Prebaci na Inverz mod (↔) s bazom a ≈ ' + pbxCh.target_a;
      break;
    case 'decay_positive_x':
      pass = a > 0 && a < 1 && x > 0;
      const val = Math.pow(a, x);
      msg = pass ? '✓ ' + fmtN(a) + '^' + fmtN(x) + ' = ' + fmtN(val) + ' < 1 (padajuća + pozitivni x → vrijednost < 1)'
                 : '✗ Postavi bazu 0 < a < 1 i točku x > 0';
      break;
    case 'zero_point':
      pass = Math.abs(a - pbxCh.target_a) < (pbxCh.tol_a || 0.15) &&
             Math.abs(x - pbxCh.target_x) < (pbxCh.tol_x || 0.2);
      msg = pass ? '✓ a = ' + fmtN(a) + ', x ≈ 0 → a^0 = 1 ✓'
                 : '✗ a ≈ 2, x ≈ 0 (svaki a^0 = 1)';
      break;
    case 'neg_exp':
      pass = Math.abs(a - pbxCh.target_a) < (pbxCh.tol_a || 0.2) &&
             Math.abs(x - pbxCh.target_x) < (pbxCh.tol_x || 0.2);
      msg = pass ? '✓ ' + fmtN(a) + '^(' + fmtN(x) + ') = ' + fmtN(Math.pow(a, x))
                 : '✗ a ≈ 3, x ≈ −2';
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
// KALKULATOR P10 (3 moda)
// Mode 0: vrijednost aˣ ili log_a x / ln x / log10 x
// Mode 1: Pravila log — pojednostavi log_a (x·y/z)
// Mode 2: Složena kamata s ppSwitchTarget (K / K0 / n)
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
  if (m === 2) ppSwitchTarget(ppTarget || 'K');
}

function p9calc() {
  const op = document.getElementById('p9c-op').value;
  const a = parseFloat(document.getElementById('p9c-a').value);
  const x = parseFloat(document.getElementById('p9c-b').value);
  const r = document.getElementById('p9c-r');
  
  if (isNaN(x)) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">Unesi x.</div>';
    return;
  }
  
  let val, formula, result;
  if (op === 'exp') {
    if (isNaN(a) || a <= 0) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Baza a mora biti > 0.</div>';
      return;
    }
    val = Math.pow(a, x);
    formula = fmtN(a) + '^' + fmtN(x) + ' = ?';
    result = fmtN(val);
  } else if (op === 'log') {
    if (isNaN(a) || a <= 0 || a === 1 || x <= 0) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Baza a > 0, a ≠ 1. x > 0.</div>';
      return;
    }
    val = logBase(x, a);
    formula = 'log_' + fmtN(a) + ' ' + fmtN(x) + ' = ?';
    result = fmtN(val);
  } else if (op === 'ln') {
    if (x <= 0) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">x > 0.</div>';
      return;
    }
    val = Math.log(x);
    formula = 'ln ' + fmtN(x) + ' = ?';
    result = fmtN(val);
  } else {  // log10
    if (x <= 0) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">x > 0.</div>';
      return;
    }
    val = Math.log10(x);
    formula = 'log ' + fmtN(x) + ' = ?';
    result = fmtN(val);
  }
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Zadatak:</span> <span class="calc-res-val">' + formula + '</span></div>' +
    '<div><span class="calc-res-key">Rezultat:</span> <span class="calc-res-val" style="color:var(--green)">' + result + '</span></div>';
}

function p9calcVertex() {
  // Pojednostavi log_a (x · y / z)
  const a = parseInt(document.getElementById('p9cv-a').value);
  const x = parseInt(document.getElementById('p9cv-p').value);
  const y = parseInt(document.getElementById('p9cv-q').value);
  const z = parseInt(document.getElementById('p9cv-q2').value);
  const r = document.getElementById('p9c-r');
  
  if (isNaN(a) || isNaN(x) || isNaN(y) || isNaN(z) || a <= 0 || a === 1 || x <= 0 || y <= 0 || z <= 0) {
    r.classList.add('show');
    r.innerHTML = '<div style="color:var(--red)">Svi argumenti moraju biti > 0. Baza a ≠ 1.</div>';
    return;
  }
  
  const logX = logBase(x, a);
  const logY = logBase(y, a);
  const logZ = logBase(z, a);
  const total = logX + logY - logZ;
  const productVal = x * y / z;
  const totalVerify = logBase(productVal, a);
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Izraz:</span> <span class="calc-res-val">log_' + a + ' (' + x + ' · ' + y + ' / ' + z + ')</span></div>' +
    '<div><span class="calc-res-key">Pravilo:</span> <span class="calc-res-val">log_a x + log_a y − log_a z</span></div>' +
    '<div><span class="calc-res-key">Razloži:</span> <span class="calc-res-val">log_' + a + ' ' + x + ' + log_' + a + ' ' + y + ' − log_' + a + ' ' + z + '</span></div>' +
    '<div><span class="calc-res-key">Vrijednosti:</span> <span class="calc-res-val">' + fmtN(logX) + ' + ' + fmtN(logY) + ' − ' + fmtN(logZ) + '</span></div>' +
    '<div><span class="calc-res-key">Rezultat:</span> <span class="calc-res-val" style="color:var(--green)">' + fmtN(total) + '</span></div>' +
    '<div style="color:var(--t3);font-size:10.5px;margin-top:6px">Provjera: log_' + a + ' (' + x + '·' + y + '/' + z + ') = log_' + a + ' ' + fmtN(productVal) + ' = ' + fmtN(totalVerify) + ' ✓</div>';
}

// ─── Složena kamata: target-driven (K / K0 / n) ─────────────────
let ppTarget = 'K';

function ppSwitchTarget(t) {
  ppTarget = t;
  ['K','K0','n'].forEach(k => {
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
  // Map targets to input IDs
  // K0 → p9cft-p, p → p9cft-q, n → p9cft-px, K → p9cft-py
  const fieldMap = {K0: 'p9cft-p', p: 'p9cft-q', n: 'p9cft-px', K: 'p9cft-py'};
  const wrapMap  = {K0: 'pp-field-K0', p: 'pp-field-p', n: 'pp-field-n', K: 'pp-field-K'};
  const defaults = {K0: '1000', p: '5', n: '3', K: ''};
  
  ['K0','p','n','K'].forEach(k => {
    const inp = document.getElementById(fieldMap[k]);
    const wrap = document.getElementById(wrapMap[k]);
    if (!inp || !wrap) return;
    if (k === t) {
      wrap.classList.add('target');
      inp.disabled = true;
      inp.value = '';
      inp.placeholder = '?';
    } else {
      wrap.classList.remove('target');
      inp.disabled = false;
      inp.placeholder = '';
      if (!inp.value) inp.value = defaults[k];
    }
  });
  
  const hint = document.getElementById('pp-context-hint');
  if (hint) {
    if (t === 'K') hint.innerHTML = '💡 <strong>Primjer:</strong> "1000 € uz 5%, 3 god — koliko stanje?" → K = ?';
    else if (t === 'K0') hint.innerHTML = '💡 <strong>Primjer:</strong> "Nakon 3 god je 1157.63 € uz 5%. Početak?" → K₀ = ?';
    else hint.innerHTML = '💡 <strong>Primjer:</strong> "Koliko godina da 1000 € postane 1157.63 € uz 5%?" → n = ?';
  }
  
  const r = document.getElementById('p9c-r');
  if (r) r.classList.remove('show');
}

function p9calcFromT() {
  const K0 = parseFloat(document.getElementById('p9cft-p').value);
  const p  = parseFloat(document.getElementById('p9cft-q').value);
  const n  = parseFloat(document.getElementById('p9cft-px').value);
  const K  = parseFloat(document.getElementById('p9cft-py').value);
  const r  = document.getElementById('p9c-r');
  
  let val, formula, result, primjer;
  const f = 1 + p / 100;  // faktor rasta
  
  if (ppTarget === 'K') {
    if (isNaN(K0) || isNaN(p) || isNaN(n)) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Unesi K₀, p i n — K se računa.</div>';
      return;
    }
    val = K0 * Math.pow(f, n);
    formula = 'K = K₀ · (1 + p/100)ⁿ = ' + fmtN(K0) + ' · (1 + ' + fmtN(p) + '/100)^' + fmtN(n);
    result = 'K = ' + fmtN(val) + ' €';
    primjer = fmtN(K0) + ' € uz ' + fmtN(p) + '% nakon ' + fmtN(n) + ' god → <strong>' + fmtN(val) + ' €</strong>';
    document.getElementById('p9cft-py').value = fmtN(val);
  } else if (ppTarget === 'K0') {
    if (isNaN(K) || isNaN(p) || isNaN(n)) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Unesi K, p i n — K₀ se računa.</div>';
      return;
    }
    if (Math.pow(f, n) === 0) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Nemoguće (faktor 0).</div>';
      return;
    }
    val = K / Math.pow(f, n);
    formula = 'K₀ = K / (1 + p/100)ⁿ = ' + fmtN(K) + ' / (1 + ' + fmtN(p) + '/100)^' + fmtN(n);
    result = 'K₀ = ' + fmtN(val) + ' €';
    primjer = 'Nakon ' + fmtN(n) + ' god je ' + fmtN(K) + ' € → početak <strong>' + fmtN(val) + ' €</strong>';
    document.getElementById('p9cft-p').value = fmtN(val);
  } else {  // n
    if (isNaN(K) || isNaN(K0) || isNaN(p)) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">Unesi K, K₀ i p — n se računa.</div>';
      return;
    }
    if (K0 <= 0 || f <= 0 || f === 1) {
      r.classList.add('show');
      r.innerHTML = '<div style="color:var(--red)">K₀ > 0, p ≠ 0.</div>';
      return;
    }
    // n = log(K/K0) / log(1 + p/100)
    val = Math.log(K / K0) / Math.log(f);
    formula = 'n = log(K/K₀) / log(1 + p/100) = log(' + fmtN(K) + '/' + fmtN(K0) + ') / log(' + fmtN(f) + ')';
    result = 'n = ' + fmtN(val) + ' godina';
    primjer = 'Od ' + fmtN(K0) + ' € do ' + fmtN(K) + ' € uz ' + fmtN(p) + '% → <strong>' + fmtN(val) + ' god</strong>';
    document.getElementById('p9cft-px').value = fmtN(val);
  }
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Tražimo:</span> <span class="calc-res-val">' + ppTarget + '</span></div>' +
    '<div><span class="calc-res-key">Formula:</span> <span class="calc-res-val">' + formula + '</span></div>' +
    '<div><span class="calc-res-key">Rezultat:</span> <span class="calc-res-val" style="color:var(--green)">' + result + '</span></div>' +
    '<div style="color:var(--t3);font-size:10.5px;margin-top:8px;line-height:1.55">' + primjer + '</div>';
}


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
      msg.innerHTML = '← Stigao/la si iz poglavlja <strong>' + from + '</strong>. Dobrodošao/la u eksp. i log. funkciju.';
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
  // 0: log
  { title: 'log — operacija',
    body: '<strong>Logaritam</strong> je matematička operacija koja pita: "Na koju potenciju moram podići bazu da dobijem argument?" Inverz je eksponenciranju.' },
  // 1: a
  { title: 'a — baza',
    body: '<strong>Baza</strong> logaritma. Mora biti <em>a &gt; 0, a ≠ 1</em>. Najčešće baze: <em>e</em> (prirodna, ln), <em>10</em> (dekadska, log), <em>2</em> (binarna).' },
  // 2: b
  { title: 'b — argument',
    body: '<strong>Argument</strong> logaritma — broj kojem tražimo log. Mora biti <em>b &gt; 0</em> (log negativnog ili nule nije definiran).' },
  // 3: c
  { title: 'c — rezultat (eksponent)',
    body: '<strong>Rezultat</strong> logaritma. Broj na koji treba podići bazu <em>a</em> da bi dobili argument <em>b</em>: <em>aᶜ = b</em>. Može biti pozitivan, negativan ili nula.' }
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
        0: '✗ Netočno. log(x+y) se <strong>NE može</strong> razbiti kao log x + log y. Pravilo vrijedi samo za UMNOŽAK argumenta.',
        1: '✓ Točno! log(xy) = log x + log y vrijedi za umnožak. log(x+y) se ne može pojednostaviti bez dodatnih informacija.',
        2: '✗ Ni za pozitivne x, y ne vrijedi. Pravilo je striktno za umnožak, ne za zbroj.'
      }},
  2: { correct: 2, explain: {
        0: '✗ Znak se <strong>ne čuva</strong> uvijek. Kad je baza između 0 i 1 (padajuća eksp.), znak se okreće.',
        1: '✗ Eksponenti su ispravno svedeni na istu bazu. Pravi problem je u smjeru nejednadžbe.',
        2: '✓ Točno! Baza 1/2 &lt; 1 → funkcija je padajuća → veća vrijednost ↔ manji eksponent. Znak se okreće: x &lt; −3.'
      }},
  3: { correct: 1, explain: {
        0: '✗ Pravilo log(xⁿ) = n·log x vrijedi samo kad je potencija <strong>unutar</strong> logaritma (na argumentu).',
        1: '✓ Točno! (log x)² = (log x)·(log x) je kvadrat cjelog logaritma, što je <strong>drukčija stvar</strong>. Npr. log 100 = 2, (log 100)² = 4, ali 2·log 100 = 4 slučajno — pravilo ne vrijedi u drugim slučajevima.',
        2: '✗ Ni za pozitivni x pravilo ne vrijedi — kvadrat logaritma nije isto što i dvostruki logaritam.'
      }},
  4: { correct: 2, explain: {
        0: '✗ Kvadratna jednadžba daje oba korijena, ali to ne znači da oba <strong>zadovoljavaju originalnu</strong> log. jednadžbu.',
        1: '✗ Aritmetika je ispravna. Problem je drugdje.',
        2: '✓ Točno! Za log_2(x − 3) treba x − 3 &gt; 0, tj. x &gt; 3. x = −3 daje log_2(−6), nedefinirano. Odbaci! Samo x = 5.'
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


/* ═══ PREMIUM GATES JS (bulk-injected) ═══ */
window.__pwTier = 'pro';
window.__pwChapter = 'P10';
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

export const P10_META = {
  code: 'P10',
  title: 'Eksp. i log. funkcija',
  filename: 'Maturiraj_MatB_P10_FIXED.html',
};

export default P10_HTML;