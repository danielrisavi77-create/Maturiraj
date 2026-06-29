// Maturiraj MatB — P01 · Skupovi i brojevi
// Auto-generated from Maturiraj_MatB_P01_FIXED.html
// Sadrži: cijeli HTML, CSS, JS runtime, sve podatke

export const P01_HTML = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=5">
<meta name="theme-color" content="#060910">
<meta name="description" content="Maturiraj.hr — Skupovi i realni brojevi (P01). Interval Explorer s brojevnim pravcem, 12 Challenge taskova, Venn dijagrami za operacije sa skupovima, SR primjeri s mini-vizualizacijama.">
<title>Maturiraj.hr — Mat B · P01 · Skupovi i brojevi</title>
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
  <div class="sb-item active"><span class="sb-dot"></span>01 · Skupovi i brojevi<div class="sb-progress"><div class="sb-prog-track"><div class="sb-prog-fill" id="sb-prog-fill"></div></div><span class="sb-prog-pct" id="sb-prog-pct">0%</span></div></div>
  <div class="sb-item" onclick="navigateChapter('p02')" style="cursor:pointer"><span class="sb-dot"></span>02 · Razlomci i postoci</div>
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
    <span class="ch-badge">P / 01</span>
    <h1 class="ch-title"><span class="acc">Skupovi</span> i realni brojevi</h1>
  </div>
  <div class="topbar-R">
    <span class="pill pts">2-4 BODA</span>
    <span class="pill time">~35 MIN</span>
    <span class="pill prio">★★★ · TEMELJ</span>
  </div>
</div>

<div class="welcome" id="welcome">
  <div class="welcome-head">
    <h2 class="welcome-h">🧮 Skupovi i realni brojevi — matematički rječnik mature</h2>
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
    <span class="hero-kb">P01 · TEMELJ · OBAVEZNO</span>
    <span class="hero-prio">★★★</span>
  </div>
  <h2 class="hero-h"><span class="acc">Skupovi</span> i <span class="acc2">realni</span> brojevi</h2>
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
      <span class="sc-ico">ℕ</span>
      <div class="sc-h">Prirodni</div>
      <div class="sc-t"><strong>{1, 2, 3, ...}</strong> — RH: 0 ∉ ℕ</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">ℤ</span>
      <div class="sc-h">Cijeli</div>
      <div class="sc-t"><strong>{..., -1, 0, 1, ...}</strong></div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">ℚ</span>
      <div class="sc-h">Racionalni</div>
      <div class="sc-t">Svi razlomci <strong>p/q, q ≠ 0</strong></div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">𝕀</span>
      <div class="sc-h">Iracionalni</div>
      <div class="sc-t"><strong>√2, π, e</strong> — ne kao razlomak</div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">ℝ</span>
      <div class="sc-h">Realni</div>
      <div class="sc-t">ℚ ∪ 𝕀 — <strong>sva brojevna os</strong></div>
    </div>
    <div class="stat-card">
      <span class="sc-ico">|x|</span>
      <div class="sc-h">Apsolutna</div>
      <div class="sc-t">Udaljenost od 0 — <strong>uvijek ≥ 0</strong></div>
    </div>
  </div>
</div>

<div class="box-grid">
  <div class="con" data-no="→"><span><strong>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</strong> — svaki veći skup <em>sadrži</em> manji. Prirodni u cijeli, cijeli u racionalni, racionalni i iracionalni zajedno čine realni.</span></div>
  <div class="con" data-no="→"><span><strong>Zagrada određuje rub:</strong> uglata ⟨a, b⟩ znači <em>uključen</em> (≤), okrugla (a, b) znači <em>isključen</em> (&lt;). ∞ je <em>uvijek</em> okrugla.</span></div>
  <div class="con" data-no="→"><span><strong>|x| = udaljenost od nule.</strong> Uvijek ≥ 0. Kad ukloniš aps. vrijednost, rješenje se <em>cijepa</em> na dva slučaja.</span></div>
  <div class="con" data-no="→"><span><strong>|x| &lt; a</strong> → jedan interval (-a, a). <strong>|x| &gt; a</strong> → unija (-∞, -a) ∪ (a, +∞).</span></div>
  <div class="con" data-no="→"><span><strong>A ∩ B</strong> (presjek) — elementi u <em>oba</em> skupa. <strong>A ∪ B</strong> (unija) — elementi u <em>barem jednom</em>.</span></div>
  <div class="con" data-no="→"><span><strong>Zamka s nulom:</strong> U hrvatskoj konvenciji <em>0 ∉ ℕ</em>! Nula pripada ℤ, ali <em>nije</em> prirodan broj. Ovo pitanje dolazi na ispitu.</span></div>
</div>

<div class="box-20">
  <div class="box-20-lbl">⚡ 20 sekundi — zapamti ovih 6</div>
  <ul class="box-20-list">
    <li><strong>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</strong> — kutije u kutijama</li>
    <li><strong>⟨ ⟩</strong> = rub uključen · <strong>( )</strong> = rub isključen · <strong>∞</strong> = uvijek okrugla</li>
    <li><strong>|x| &lt; a</strong> ↔ <strong>-a &lt; x &lt; a</strong> (interval)</li>
    <li><strong>|x| &gt; a</strong> ↔ <strong>x &lt; -a ili x &gt; a</strong> (unija)</li>
    <li><strong>|x − c| &lt; a</strong> → centar se pomakne na c: <em>c − a &lt; x &lt; c + a</em></li>
    <li><strong>√2, π, e</strong> — iracionalni, <em>ne</em> racionalni</li>
  </ul>
</div>

<div class="box-for">
  <div class="box-for-lbl">⚙ Ključne definicije — uvijek u glavi</div>
  <div class="for-grid">
    <div class="for-item">
      <span class="lbl">Prirodni ℕ</span>
      <div class="val">{1, 2, 3, ...}</div>
    </div>
    <div class="for-item">
      <span class="lbl">Cijeli ℤ</span>
      <div class="val">ℕ ∪ {0} ∪ negativni</div>
    </div>
    <div class="for-item">
      <span class="lbl">Racionalni ℚ</span>
      <div class="val">{p/q : q ≠ 0}</div>
    </div>
    <div class="for-item">
      <span class="lbl">Realni ℝ</span>
      <div class="val">ℚ ∪ 𝕀</div>
    </div>
    <div class="for-item">
      <span class="lbl">Aps. vrijednost</span>
      <div class="val">|x| = x ako x ≥ 0, inače -x</div>
    </div>
    <div class="for-item">
      <span class="lbl">Interval ⟨a, b⟩</span>
      <div class="val">{x : a ≤ x ≤ b}</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <span class="nb off">← Nema prethodnog</span>
  <button class="nb primary" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">📐 Uči →</button>
</div>

</section>
<section id="l1" class="sec" role="tabpanel">

<!-- SEKCIJA 1: SKUPOVI BROJEVA -->
<div class="sec-head">
  <span class="sec-badge">1 / 12</span>
  <h3 class="sec-h">Skupovi brojeva — ℕ, ℤ, ℚ, 𝕀, ℝ</h3>
</div>
<div class="sec-body">
  <p>Brojevi nisu "samo brojevi" — grupirani su u <strong>skupove</strong> po svojim svojstvima. Skupovi su <em>ugniježđeni</em> kao kutije u kutijama.</p>
  
  <div class="callout key">
    <span class="callout-i">📦</span>
    <div class="callout-t">
      <strong>Hijerarhija: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</strong><br>
      <strong>ℕ (prirodni)</strong> — {1, 2, 3, ...}. U Hrvatskoj: 0 ∉ ℕ.<br>
      <strong>ℤ (cijeli)</strong> — {..., −2, −1, 0, 1, 2, ...}<br>
      <strong>ℚ (racionalni)</strong> — svi <em>razlomci</em> p/q, q ≠ 0<br>
      <strong>𝕀 (iracionalni)</strong> — <em>ne</em> mogu se pisati kao razlomak (√2, π, e)<br>
      <strong>ℝ (realni)</strong> — ℚ ∪ 𝕀, sve točke brojevnog pravca
    </div>
  </div>
  
  <p><strong>Pripadnost</strong> označavamo znakovima: <code>∈</code> (je element) i <code>∉</code> (nije element). Primjer: 5 ∈ ℕ, −3 ∉ ℕ, ½ ∈ ℚ, √2 ∉ ℚ.</p>
  
  <div class="emph"><strong>Primjer:</strong> Je li broj 2.75 element skupa ℚ? → 2.75 = 11/4 (razlomak), pa <em>da, 2.75 ∈ ℚ</em>. Je li 2.75 element ℤ? <em>Ne</em>, jer nije cijeli.</div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Zamka s nulom:</strong> U RH konvenciji <em>0 ∉ ℕ</em>, ali 0 ∈ ℤ. Ovo pitanje redovito dolazi u NCVVO zadacima.</div>
  </div>
  
  <div style="display:flex;justify-content:center;margin:16px 0">
    <svg viewBox="0 0 400 200" width="400" height="200" style="max-width:100%;background:var(--inp);border-radius:var(--r2);border:1px solid var(--bdm)">
      <ellipse cx="200" cy="100" rx="180" ry="85" fill="none" stroke="#F472B6" stroke-width="2"/>
      <text x="380" y="20" fill="#F472B6" font-family="JetBrains Mono" font-size="12" font-weight="700" text-anchor="end">ℝ</text>
      <ellipse cx="180" cy="100" rx="140" ry="70" fill="none" stroke="#C084FC" stroke-width="2"/>
      <text x="310" y="46" fill="#C084FC" font-family="JetBrains Mono" font-size="11" font-weight="700">ℚ</text>
      <ellipse cx="160" cy="100" rx="100" ry="55" fill="none" stroke="#818CF8" stroke-width="2"/>
      <text x="250" y="66" fill="#818CF8" font-family="JetBrains Mono" font-size="11" font-weight="700">ℤ</text>
      <ellipse cx="150" cy="100" rx="65" ry="40" fill="none" stroke="#22D3EE" stroke-width="2"/>
      <text x="205" y="86" fill="#22D3EE" font-family="JetBrains Mono" font-size="11" font-weight="700">ℕ</text>
      <text x="150" y="104" fill="#E4EDFF" font-family="JetBrains Mono" font-size="10" text-anchor="middle">1, 2, 3...</text>
      <text x="120" y="140" fill="#E4EDFF" font-family="JetBrains Mono" font-size="10">-5</text>
      <text x="240" y="140" fill="#E4EDFF" font-family="JetBrains Mono" font-size="10">½</text>
      <text x="310" y="160" fill="#F472B6" font-family="JetBrains Mono" font-size="10">π</text>
      <text x="340" y="140" fill="#F472B6" font-family="JetBrains Mono" font-size="10">√2</text>
    </svg>
  </div>
</div>

<!-- SEKCIJA 2: IRACIONALNI -->
<div class="sec-head">
  <span class="sec-badge">2 / 12</span>
  <h3 class="sec-h">Iracionalni brojevi — ne mogu se pisati kao razlomak</h3>
</div>
<div class="sec-body">
  <p>Iracionalni brojevi imaju <em>beskonačan</em>, <em>neponavljajući</em> decimalni zapis. Zato ih je nemoguće zapisati kao razlomak p/q.</p>
  
  <div class="emph"><strong>Primjeri:</strong> <em>√2 ≈ 1.41421...</em>, <em>π ≈ 3.14159...</em>, <em>e ≈ 2.71828...</em>, <em>√3, √5, √7, ...</em> (korijeni koji nisu potpuni kvadrati).</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Kako prepoznati iracionalni broj?</strong> Ako decimalni zapis <em>ne završava</em> i <em>ne ponavlja grupa znamenki</em> — iracionalan je. Ako završava (0.25) ili ponavlja (0.333...), racionalan je.</div>
  </div>
  
  <p><strong>Racionalni</strong>: 0.5, ⅓ = 0.333..., −7/4 = −1.75, 22/7 ≈ 3.142857... (svi sa završetkom ili ponavljanjem).</p>
  <p><strong>Iracionalni</strong>: √2, √5, π, e, log 2, sin 1° (bez zatvorenog oblika kao razlomak).</p>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Pazi:</strong> √4 = 2 je <em>racionalan</em> (jer je 4 potpun kvadrat). √9 = 3 također racionalan. Samo kad korijen <em>nije cijeli broj</em>, imaš iracionalni.</div>
  </div>
</div>

<!-- SEKCIJA 3: INTERVALI NA BROJEVNOM PRAVCU -->
<div class="sec-head">
  <span class="sec-badge">3 / 12</span>
  <h3 class="sec-h">Intervali — podskupovi brojevnog pravca</h3>
</div>
<div class="sec-body">
  <p><strong>Interval</strong> je skup svih realnih brojeva između dva ruba. Zapisuje se zagradama — i <em>zagrade su važne</em>.</p>
  
  <div class="callout key">
    <span class="callout-i">🎯</span>
    <div class="callout-t">
      <strong>Uglata zagrada ⟨ ili ⟩</strong> = rub <em>uključen</em> (≤ ili ≥)<br>
      <strong>Okrugla zagrada ( ili )</strong> = rub <em>isključen</em> (&lt; ili &gt;)<br>
      <strong>∞</strong> ima uvijek okruglu zagradu — beskonačnost nije konkretna točka!
    </div>
  </div>
  
  <div class="emph"><strong>⟨a, b⟩</strong> — zatvoren, a ≤ x ≤ b. Primjer: ⟨2, 5⟩ = {x : 2 ≤ x ≤ 5}.</div>
  <div class="emph"><strong>(a, b)</strong> — otvoren, a &lt; x &lt; b. Primjer: (2, 5) = {x : 2 &lt; x &lt; 5}.</div>
  <div class="emph"><strong>⟨a, b)</strong> — polu-otvoren lijevo zatvoren, a ≤ x &lt; b. Primjer: ⟨2, 5) = {x : 2 ≤ x &lt; 5}.</div>
  <div class="emph"><strong>(a, +∞)</strong> — desni beskonačni, x &gt; a. Primjer: (3, +∞) = {x : x &gt; 3}.</div>
  <div class="emph"><strong>(−∞, b⟩</strong> — lijevi beskonačni, x ≤ b. Primjer: (−∞, 5⟩ = {x : x ≤ 5}.</div>
  
  <div style="display:flex;justify-content:center;margin:16px 0">
    <svg viewBox="0 0 400 110" width="400" height="110" style="max-width:100%;background:var(--inp);border-radius:var(--r2);border:1px solid var(--bdm)">
      <line x1="30" y1="55" x2="370" y2="55" stroke="#7A90BB" stroke-width="1.5"/>
      <polygon points="370,55 362,51 362,59" fill="#7A90BB"/>
      <polygon points="30,55 38,51 38,59" fill="#7A90BB"/>
      <line x1="120" y1="50" x2="120" y2="60" stroke="#7A90BB" stroke-width="1"/>
      <line x1="280" y1="50" x2="280" y2="60" stroke="#7A90BB" stroke-width="1"/>
      <text x="120" y="78" fill="#7A90BB" font-family="JetBrains Mono" font-size="11" text-anchor="middle">2</text>
      <text x="280" y="78" fill="#7A90BB" font-family="JetBrains Mono" font-size="11" text-anchor="middle">5</text>
      <line x1="120" y1="40" x2="280" y2="40" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="120" cy="40" r="4.5" fill="#F59E0B" stroke="#060910" stroke-width="1.5"/>
      <circle cx="280" cy="40" r="4.5" fill="#F59E0B" stroke="#060910" stroke-width="1.5"/>
      <text x="200" y="22" fill="#F59E0B" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">⟨2, 5⟩ — rubovi uključeni</text>
      <line x1="120" y1="92" x2="280" y2="92" stroke="#22D3EE" stroke-width="3" stroke-linecap="round"/>
      <circle cx="120" cy="92" r="4.5" fill="#0A0F1A" stroke="#22D3EE" stroke-width="2"/>
      <circle cx="280" cy="92" r="4.5" fill="#0A0F1A" stroke="#22D3EE" stroke-width="2"/>
      <text x="200" y="106" fill="#22D3EE" font-family="JetBrains Mono" font-size="10" font-weight="700" text-anchor="middle">(2, 5) — rubovi isključeni</text>
    </svg>
  </div>
</div>

<!-- SEKCIJA 4: APSOLUTNA VRIJEDNOST -->
<div class="sec-head">
  <span class="sec-badge">4 / 12</span>
  <h3 class="sec-h">Apsolutna vrijednost — udaljenost od nule</h3>
</div>
<div class="sec-body">
  <p><strong>|x|</strong> je <em>udaljenost</em> broja x od nule na brojevnom pravcu. Udaljenost je <em>uvijek</em> nenegativna.</p>
  
  <div class="callout key">
    <span class="callout-i">📏</span>
    <div class="callout-t">
      <strong>Definicija:</strong><br>
      |x| = x &nbsp;&nbsp;ako&nbsp; x ≥ 0<br>
      |x| = −x &nbsp;ako&nbsp; x &lt; 0<br><br>
      <strong>Ključno svojstvo:</strong> |x| ≥ 0 uvijek, za svaki x ∈ ℝ.
    </div>
  </div>
  
  <div class="emph"><strong>Primjeri:</strong> |5| = 5, |−5| = 5, |0| = 0, |−3.7| = 3.7.</div>
  
  <p><strong>Ključno</strong>: kad uklanjaš aps. vrijednost iz jednadžbe ili nejednadžbe, rješenje se <em>cijepa</em> na dva slučaja — pozitivan i negativan.</p>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Geometrijska interpretacija:</strong> |x − a| je udaljenost između točaka x i a na brojevnom pravcu. Primjer: |x − 3| ≤ 2 znači "x je udaljen najviše 2 od broja 3" → 1 ≤ x ≤ 5.</div>
  </div>
</div>
<!-- ═══ PREMIUM GATE 1: AI PROFESOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Zaglavio si na skupovima brojeva? Pitaj me što god — objašnjenje po koracima, prilagođeno tebi.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Je li √7 racionalan?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Kako riješiti |x-3|<2?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Razlika ℕ, ℤ, ℚ, ℝ?</span>
  </div>
  <div class="pg-ai-bubble">
    Pitaj me bilo što o <strong>skupovima brojeva, intervalima ili apsolutnoj vrijednosti</strong> — objasnim ti korak po korak<span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora →</button>
</div>


<!-- SEKCIJA 5: APSOLUTNE NEJEDNADŽBE -->
<div class="sec-head">
  <span class="sec-badge">5 / 12</span>
  <h3 class="sec-h">Apsolutne nejednadžbe — 3 pravila koja moraš znati</h3>
</div>
<div class="sec-body">
  <p>Najčešći tip zadatka — rješavaš nejednadžbu s |...| i prikazuješ kao interval.</p>
  
  <div class="callout key">
    <span class="callout-i">🔑</span>
    <div class="callout-t">
      <strong>Pravilo 1:</strong> |x| &lt; a &nbsp;↔&nbsp; <em>−a &lt; x &lt; a</em> &nbsp;(jedan interval)<br>
      <strong>Pravilo 2:</strong> |x| &gt; a &nbsp;↔&nbsp; <em>x &lt; −a ili x &gt; a</em> &nbsp;(unija dvaju)<br>
      <strong>Pravilo 3:</strong> |x − c| &lt; a &nbsp;↔&nbsp; <em>c − a &lt; x &lt; c + a</em> &nbsp;(pomakne centar)
    </div>
  </div>
  
  <div class="emph"><strong>Primjer 1:</strong> |x| &lt; 3 → −3 &lt; x &lt; 3 → <em>x ∈ (−3, 3)</em>.</div>
  <div class="emph"><strong>Primjer 2:</strong> |x| ≥ 4 → x ≤ −4 ili x ≥ 4 → <em>x ∈ (−∞, −4⟩ ∪ ⟨4, +∞)</em>.</div>
  <div class="emph"><strong>Primjer 3:</strong> |x − 2| &lt; 3 → −3 &lt; x − 2 &lt; 3 → 2 − 3 &lt; x &lt; 2 + 3 → <em>x ∈ (−1, 5)</em>.</div>
  
  <div class="callout warn">
    <span class="callout-i">⚠️</span>
    <div class="callout-t"><strong>Zamka</strong>: za "manje" (&lt;) rješenje je <em>jedan interval</em>, za "veće" (&gt;) dobivaš <em>uniju dvaju intervala</em>. Ne zabrkaj ih.</div>
  </div>
  
  <div class="dmeter-wrap">
    <div class="dmeter-head">
      <span class="dmeter-lbl">Aps. nejednadžba → tip rješenja</span>
      <span class="dmeter-val" id="dmeter-val-demo">INTERVAL</span>
    </div>
    <div class="dmeter-bar">
      <div class="dmeter-zero"></div>
      <div class="dmeter-fill pos" id="dmeter-fill-demo" style="width:25%"></div>
    </div>
    <div class="dmeter-legend">
      <span>|x| &gt; a → unija</span>
      <span>|x| = a → točke</span>
      <span>|x| &lt; a → interval</span>
    </div>
    <div class="dmeter-desc" id="dmeter-desc-demo"><strong>|x| &lt; a</strong> → jedan interval (−a, a), kompaktno rješenje.</div>
  </div>
</div>

<!-- SEKCIJA 6: OPERACIJE SA SKUPOVIMA — PRESJEK I UNIJA -->
<div class="sec-head">
  <span class="sec-badge">6 / 12</span>
  <h3 class="sec-h">Presjek i unija — ∩ i ∪</h3>
</div>
<div class="sec-body">
  <p>Kad imaš dva skupa, kombiniraš ih u novi koristeći <em>operacije</em>. Dvije najvažnije su presjek i unija.</p>
  
  <div class="callout key">
    <span class="callout-i">🔗</span>
    <div class="callout-t">
      <strong>Presjek A ∩ B</strong> — svi elementi koji su <em>u oba</em> skupa ("i A i B")<br>
      <strong>Unija A ∪ B</strong> — svi elementi koji su <em>u barem jednom</em> ("A ili B")
    </div>
  </div>
  
  <div class="emph"><strong>Primjer:</strong> A = ⟨1, 5⟩, B = ⟨3, 8⟩.<br>
  A ∩ B = <em>⟨3, 5⟩</em> — gdje se <em>preklapaju</em>.<br>
  A ∪ B = <em>⟨1, 8⟩</em> — od <em>lijevog</em> ruba A do <em>desnog</em> ruba B.</div>
  
  <p><strong>Kako računati bez crtanja?</strong></p>
  <ol style="padding-left:20px;margin:8px 0;color:var(--t2);line-height:1.8;font-family:var(--mono);font-size:12px">
    <li>Za <strong>presjek</strong>: uzmi <em>veći</em> lijevi rub i <em>manji</em> desni rub. Ako nema preklapanja (veći lijevi &gt; manji desni) → ∅ (prazan).</li>
    <li>Za <strong>uniju</strong>: uzmi <em>manji</em> lijevi rub i <em>veći</em> desni rub (ako se preklapaju). Ako su odvojeni → ostaju dva intervala.</li>
  </ol>
  
  <div style="display:flex;justify-content:center;margin:14px 0">
    <svg viewBox="0 0 400 160" width="400" height="160" style="max-width:100%;background:var(--inp);border-radius:var(--r2);border:1px solid var(--bdm)">
      <line x1="30" y1="80" x2="370" y2="80" stroke="#7A90BB" stroke-width="1.5"/>
      <line x1="80" y1="30" x2="200" y2="30" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
      <circle cx="80" cy="30" r="4" fill="#F59E0B"/>
      <circle cx="200" cy="30" r="4" fill="#F59E0B"/>
      <text x="70" y="22" fill="#F59E0B" font-family="JetBrains Mono" font-size="10" font-weight="700">A</text>
      <line x1="140" y1="50" x2="320" y2="50" stroke="#22D3EE" stroke-width="3" stroke-linecap="round"/>
      <circle cx="140" cy="50" r="4" fill="#22D3EE"/>
      <circle cx="320" cy="50" r="4" fill="#22D3EE"/>
      <text x="130" y="66" fill="#22D3EE" font-family="JetBrains Mono" font-size="10" font-weight="700">B</text>
      <line x1="140" y1="110" x2="200" y2="110" stroke="#34D399" stroke-width="4" stroke-linecap="round"/>
      <circle cx="140" cy="110" r="5" fill="#34D399"/>
      <circle cx="200" cy="110" r="5" fill="#34D399"/>
      <text x="140" y="100" fill="#34D399" font-family="JetBrains Mono" font-size="10" font-weight="700">A ∩ B (presjek)</text>
      <line x1="80" y1="135" x2="320" y2="135" stroke="#C084FC" stroke-width="4" stroke-linecap="round"/>
      <circle cx="80" cy="135" r="5" fill="#C084FC"/>
      <circle cx="320" cy="135" r="5" fill="#C084FC"/>
      <text x="80" y="155" fill="#C084FC" font-family="JetBrains Mono" font-size="10" font-weight="700">A ∪ B (unija)</text>
    </svg>
  </div>
</div>

<!-- SEKCIJA 7: RAZLIKA I KOMPLEMENT -->
<div class="sec-head">
  <span class="sec-badge">7 / 12</span>
  <h3 class="sec-h">Razlika i komplement — A \\ B i Aᶜ</h3>
</div>
<div class="sec-body">
  <p>Dvije dodatne operacije — manje česte na maturi, ali ih treba znati.</p>
  
  <div class="callout key">
    <span class="callout-i">➖</span>
    <div class="callout-t">
      <strong>Razlika A \\ B</strong> — elementi koji su u A, ali <em>nisu u B</em>. Čitaj "A bez B".<br>
      <strong>Komplement Aᶜ</strong> — <em>sve što nije u A</em>. Ekvivalentno ℝ \\ A.
    </div>
  </div>
  
  <div class="emph"><strong>Primjer razlike:</strong> A = ⟨1, 5⟩, B = ⟨3, 8⟩. Uzimaš A i <em>izbacuješ</em> što je u B: A \\ B = <em>⟨1, 3)</em> (bez 3 jer je 3 ∈ B).</div>
  <div class="emph"><strong>Primjer komplementa:</strong> A = ⟨−2, 3⟩ → Aᶜ = ℝ \\ A = <em>(−∞, −2) ∪ (3, +∞)</em>. Obrne se rub — zatvoreni postaje otvoreni i obrnuto.</div>
  
  <div class="callout tip">
    <span class="callout-i">💡</span>
    <div class="callout-t"><strong>Trik:</strong> za komplement zatvorenog intervala ⟨a, b⟩ dobiješ dvije polu-beskonačne tvorevine koje su <em>otvorene</em> na a i b. Uvijek se obrne vrsta zagrade.</div>
  </div>
</div>

<!-- SEKCIJA 8: PRAZAN SKUP I UNIVERZALNI -->
<div class="sec-head">
  <span class="sec-badge">8 / 12</span>
  <h3 class="sec-h">Prazan skup (∅) i specijalni slučajevi</h3>
</div>
<div class="sec-body">
  <p>Postoje dva "rubna" skupa koja često dolaze u zadacima.</p>
  
  <div class="callout key">
    <span class="callout-i">∅</span>
    <div class="callout-t">
      <strong>Prazan skup ∅ (ili { })</strong> — nema elemenata.<br>
      <strong>Univerzalni skup</strong> — skup svih elemenata koje razmatramo (najčešće ℝ na maturi).<br>
      <strong>A ∩ ∅ = ∅</strong>, <strong>A ∪ ∅ = A</strong>
    </div>
  </div>
  
  <div class="emph"><strong>Primjer praznog skupa:</strong> A = ⟨1, 3⟩, B = ⟨5, 7⟩ (ne preklapaju se). A ∩ B = <em>∅</em>.</div>
  <div class="emph"><strong>Primjer univerzalnog:</strong> A ∪ Aᶜ = <em>ℝ</em> (skup realnih — sve).</div>
  
  <p><strong>Kad dobiješ ∅ kao rješenje?</strong> Najčešće kod nemogućih uvjeta: npr. |x| &lt; 0 nema rješenja (aps. vrijednost nije negativna). Zapiši <em>x ∈ ∅</em> ili <em>nema rješenja</em>.</p>
  
  <p><strong>Kad je rješenje cijelo ℝ?</strong> Kod <em>uvijek zadovoljenih</em> uvjeta: npr. |x| ≥ 0 je uvijek istinito, pa je x ∈ <em>ℝ</em>.</p>
</div>

<!-- SEKCIJA 9: INTERVAL EXPLORER 2.0 -->
<div class="sec-head">
  <span class="sec-badge">9 / 12</span>
  <h3 class="sec-h">🎨 Interval Explorer 2.0 — igraj se s intervalima</h3>
</div>
<div class="sec-body">
  <p>Interaktivni alat — postavi dva intervala A i B, vidi presjek, uniju, razliku. 6 preseta. Zoom. Challenge mode s 12 taskova.</p>
  
  <div class="pbx-wrap">
    <div class="pbx-head">
      <span class="pbx-title">interval explorer 2.0</span>
      <span class="pbx-badge">LIVE</span>
    </div>
    
    <div class="pbx-mode-tabs">
      <button class="pbx-mode-tab on" onclick="pbxSetMode(0,this)">📊 Dva intervala A, B</button>
      <button class="pbx-mode-tab" onclick="pbxSetMode(1,this)">🎯 Aps. nejednadžba |x−c|&lt;r</button>
    </div>
    
    <div class="pbx-canvas-wrap">
      <div class="pbx-drag-hint">✥ povuci za ugađanje</div>
      <canvas class="pbx-canvas" id="pbx-canvas" width="640" height="280" aria-label="Interaktivni brojevni pravac"></canvas>
      <div class="pbx-zoom">
        <button class="pbx-zoom-btn" onclick="pbxZoom(1)" aria-label="Uvećaj">+</button>
        <button class="pbx-zoom-btn" onclick="pbxZoom(-1)" aria-label="Smanji">−</button>
        <button class="pbx-zoom-btn" onclick="pbxZoom(0)" aria-label="Reset zoom" style="font-size:11px">⌂</button>
      </div>
      <div class="pbx-zoom-lbl" id="pbx-zoom-lbl">1.0×</div>
    </div>
    
    <div class="pbx-controls" id="pbx-free-ctrl">
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">A od</span>
          <span class="pbx-ctrl-val" id="pbx-a-val">-3</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-a" min="-10" max="10" step="0.5" value="-3">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">A do</span>
          <span class="pbx-ctrl-val" id="pbx-b-val">2</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-b" min="-10" max="10" step="0.5" value="2">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">B od</span>
          <span class="pbx-ctrl-val v" id="pbx-c-val">0</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-c" min="-10" max="10" step="0.5" value="0">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">B do</span>
          <span class="pbx-ctrl-val v" id="pbx-d-val">5</span>
        </div>
        <input type="range" class="pbx-slider" id="pbx-d" min="-10" max="10" step="0.5" value="5">
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">A zagrade</span>
          <span class="pbx-ctrl-val ok" id="pbx-ai-val">⟨ ⟩</span>
        </div>
        <div style="display:flex;gap:6px">
          <button class="pbx-btn" style="flex:1;padding:4px;font-size:10px" onclick="pbxToggleBracket('A')">Prebaci A</button>
        </div>
      </div>
      <div class="pbx-ctrl">
        <div class="pbx-ctrl-row">
          <span class="pbx-ctrl-lbl">B zagrade</span>
          <span class="pbx-ctrl-val ok" id="pbx-bi-val">⟨ ⟩</span>
        </div>
        <div style="display:flex;gap:6px">
          <button class="pbx-btn" style="flex:1;padding:4px;font-size:10px" onclick="pbxToggleBracket('B')">Prebaci B</button>
        </div>
      </div>
    </div>
    
    <div class="pbx-presets">
      <button class="pbx-preset" onclick="pbxPreset('overlap',this)">Preklapaju se</button>
      <button class="pbx-preset" onclick="pbxPreset('separate',this)">Razdvojeni</button>
      <button class="pbx-preset" onclick="pbxPreset('nested',this)">Ugniježđeni</button>
      <button class="pbx-preset" onclick="pbxPreset('touch',this)">Dodiruju se</button>
      <button class="pbx-preset" onclick="pbxPreset('same',this)">Jednaki</button>
      <button class="pbx-preset" onclick="pbxPreset('abs',this)">|x−1|&lt;3</button>
    </div>
    
    <div class="pbx-legend">
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#F59E0B"></span><strong>A</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#22D3EE"></span><strong>B</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#34D399"></span><strong>A ∩ B</strong></span>
      <span class="pbx-leg"><span class="pbx-leg-dot" style="background:#C084FC"></span><strong>A ∪ B</strong></span>
    </div>
    
    <div class="pbx-info" id="pbx-info">
      A = ⟨-3, 2⟩ · B = ⟨0, 5⟩ · <strong>A ∩ B = ⟨0, 2⟩</strong> · <strong>A ∪ B = ⟨-3, 5⟩</strong>
    </div>
    
    <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;flex-wrap:wrap">
      <button class="pbx-challenge-toggle" id="pbx-challenge-btn" onclick="pbxChallengeToggle()">🎯 Pokreni izazov (12 taskova)</button>
    </div>
    
    <div class="pbx-challenge-wrap" id="pbx-challenge">
      <div class="pbx-challenge-head">
        <span class="pbx-challenge-lbl">🎯 Izazov — postavi intervale</span>
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
  <p>Autentični zadaci iz MAT B mature. Tipovi koji redovito dolaze.</p>
  
  <div class="ncvvo-wrap">
    <div class="ncvvo-item">
      <div class="ncvvo-no">1</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2024 LJETO · Zadatak 2 · 2 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Koji od sljedećih brojeva <em>nije</em> element skupa ℚ?<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">A) 0.25 &nbsp; B) 3/7 &nbsp; C) √3 &nbsp; D) −2.75<br>
        → √3 je iracionalan → <strong style="color:var(--amber)">C</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">2</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2023 LJETO · Zadatak 5 · 2 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Rješenje nejednadžbe |x| &lt; 4 je:<br>
        <div style="margin:8px 0;display:flex;justify-content:center">
          <svg viewBox="0 0 240 80" width="240" height="80" style="background:rgba(10,15,26,0.6);border-radius:6px;border:1px solid var(--bdm)">
            <line x1="20" y1="40" x2="220" y2="40" stroke="#7A90BB" stroke-width="1.5"/>
            <line x1="70" y1="35" x2="70" y2="45" stroke="#7A90BB" stroke-width="1"/>
            <line x1="170" y1="35" x2="170" y2="45" stroke="#7A90BB" stroke-width="1"/>
            <text x="70" y="58" fill="#7A90BB" font-family="JetBrains Mono" font-size="10" text-anchor="middle">-4</text>
            <text x="170" y="58" fill="#7A90BB" font-family="JetBrains Mono" font-size="10" text-anchor="middle">4</text>
            <line x1="70" y1="30" x2="170" y2="30" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"/>
            <circle cx="70" cy="30" r="4" fill="#0A0F1A" stroke="#F59E0B" stroke-width="2"/>
            <circle cx="170" cy="30" r="4" fill="#0A0F1A" stroke="#F59E0B" stroke-width="2"/>
          </svg>
        </div>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ |x| &lt; 4 ↔ −4 &lt; x &lt; 4 → <strong style="color:var(--amber)">x ∈ (−4, 4)</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">3</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2022 JESEN · Zadatak 11 · 3 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Dani su skupovi A = ⟨−2, 5⟩ i B = (3, 8⟩. Odredi A ∩ B.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ Veći lijevi rub: 3 (B, isključen). Manji desni: 5 (A, uključen). <strong style="color:var(--amber)">A ∩ B = (3, 5⟩</strong>.</span></div>
      </div>
    </div>
    
    <div class="ncvvo-item">
      <div class="ncvvo-no">4</div>
      <div class="ncvvo-content">
        <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;margin-bottom:4px">MAT B 2021 LJETO · Zadatak 14 · 4 boda</div>
        <div style="font-size:13.5px;color:var(--t1);font-weight:600;line-height:1.6">Riješi nejednadžbu |x − 3| ≥ 2.<br>
        <span style="font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">→ x − 3 ≤ −2 ili x − 3 ≥ 2 → x ≤ 1 ili x ≥ 5 → <strong style="color:var(--amber)">x ∈ (−∞, 1⟩ ∪ ⟨5, +∞)</strong>.</span></div>
      </div>
    </div>
  </div>
</div>

<!-- SEKCIJA 11: KALKULATOR INTERVALA -->
<div class="sec-head">
  <span class="sec-badge">11 / 12</span>
  <h3 class="sec-h">🧮 Kalkulator intervala — 3 moda</h3>
</div>
<div class="sec-body">
  <p>Tri najčešća tipa zadatka, jedan alat. Unesi parametre, dobij korak-po-korak rješenje.</p>
  
  <div class="calc-wrap">
    <div class="calc-head">
      <span class="calc-title">// Intervali & aps. nejednadžbe — kompletni kalkulator</span>
    </div>
    <div class="calc-tabs" role="tablist">
      <button class="calc-tab on" onclick="p9SwitchMode(0,this)">|x − c| &lt; a</button>
      <button class="calc-tab" onclick="p9SwitchMode(1,this)">Presjek A ∩ B</button>
      <button class="calc-tab" onclick="p9SwitchMode(2,this)">Unija A ∪ B</button>
    </div>
    <div class="calc-body">
      <div id="p9-mode-0">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Unesi c i a (i smjer) → dobij interval rješenja</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px">
          <span class="calc-lbl">|x −</span>
          <input class="calc-in" id="p9c-a" type="number" value="2" style="width:55px" step="0.5">
          <span class="calc-lbl">|</span>
          <select class="calc-in" id="p9c-op" style="width:60px">
            <option value="lt">&lt;</option>
            <option value="le">≤</option>
            <option value="gt">&gt;</option>
            <option value="ge">≥</option>
          </select>
          <input class="calc-in" id="p9c-b" type="number" value="3" style="width:55px" step="0.5">
          <button class="calc-go" onclick="p9calc()">Riješi →</button>
        </div>
      </div>
      <div id="p9-mode-1" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Unesi A = ⟨a₁, b₁⟩ i B = ⟨a₂, b₂⟩ → dobij A ∩ B</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px">
          <span class="calc-lbl">A: ⟨</span>
          <input class="calc-in" id="p9cv-a" type="number" value="-1" style="width:55px" step="0.5">
          <span class="calc-lbl">,</span>
          <input class="calc-in" id="p9cv-p" type="number" value="5" style="width:55px" step="0.5">
          <span class="calc-lbl">⟩&nbsp;&nbsp;B: ⟨</span>
          <input class="calc-in" id="p9cv-q" type="number" value="3" style="width:55px" step="0.5">
          <span class="calc-lbl">,</span>
          <input class="calc-in" id="p9cv-q2" type="number" value="8" style="width:55px" step="0.5">
          <span class="calc-lbl">⟩</span>
          <button class="calc-go" onclick="p9calcVertex()">Presjek →</button>
        </div>
      </div>
      <div id="p9-mode-2" style="display:none">
        <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:8px">Unesi A i B → dobij A ∪ B (pazi — može biti unija dvaju)</div>
        <div class="calc-row" style="flex-wrap:wrap;gap:8px">
          <span class="calc-lbl">A: ⟨</span>
          <input class="calc-in" id="p9cft-p" type="number" value="-2" style="width:55px" step="0.5">
          <span class="calc-lbl">,</span>
          <input class="calc-in" id="p9cft-q" type="number" value="3" style="width:55px" step="0.5">
          <span class="calc-lbl">⟩&nbsp;&nbsp;B: ⟨</span>
          <input class="calc-in" id="p9cft-px" type="number" value="1" style="width:55px" step="0.5">
          <span class="calc-lbl">,</span>
          <input class="calc-in" id="p9cft-py" type="number" value="6" style="width:55px" step="0.5">
          <span class="calc-lbl">⟩</span>
          <button class="calc-go" onclick="p9calcFromT()">Unija →</button>
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
  <p>Klikni "Pokreni" da vidiš korake jedan po jedan. Svaki primjer pokriva drugi tip zadatka.</p>

  <div class="sr" id="sr1">
    <div class="sr-head"><span class="sr-no">Primjer 1 · Pripadnost skupu</span><span class="sr-pts">2 boda</span></div>
    <div class="sr-q">Je li broj 0.333... element skupa ℚ? A broj √2?</div>
    <button class="sr-try" onclick="tryIt(1)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr1-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> 0.333... je decimalni zapis koji <em>ponavlja</em> jednu znamenku.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> 0.333... = 1/3 (razlomak) → 0.333... <em>∈ ℚ</em> (racionalan).</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> √2 ≈ 1.41421... — decimalni zapis ne završava ni ne ponavlja.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> 0.333... ∈ ℚ ✓ &nbsp;·&nbsp; √2 <em>∉ ℚ</em> (iracionalan).</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(1)">Sljedeći korak →</button><button class="sr-rst" onclick="rstStep(1)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr2">
    <div class="sr-head"><span class="sr-no">Primjer 2 · |x| &lt; a</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Riješi nejednadžbu |x − 2| ≤ 5. Zapiši kao interval.</div>
    <button class="sr-try" onclick="tryIt(2)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr2-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Tip |x − c| ≤ a → pravilo: −a ≤ x − c ≤ a.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> |x − 2| ≤ 5 → −5 ≤ x − 2 ≤ 5.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Dodaj 2 svuda: −3 ≤ x ≤ 7.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> x ∈ <em>⟨−3, 7⟩</em>. Rubovi <em>uključeni</em> jer je ≤.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(2)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(2)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr3">
    <div class="sr-head"><span class="sr-no">Primjer 3 · |x| &gt; a (cijepa se!)</span><span class="sr-pts">4 boda</span></div>
    <div class="sr-q">Riješi |2x + 1| &gt; 3. Zapiši kao uniju intervala.</div>
    <button class="sr-try" onclick="tryIt(3)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr3-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Tip |izraz| &gt; a → <em>dva</em> slučaja: izraz &lt; −a ili izraz &gt; a.</div>
      <div class="sr-step" data-s="2"><strong>Slučaj 1:</strong> 2x + 1 &lt; −3 → 2x &lt; −4 → x &lt; −2.</div>
      <div class="sr-step" data-s="3"><strong>Slučaj 2:</strong> 2x + 1 &gt; 3 → 2x &gt; 2 → x &gt; 1.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> x ∈ <em>(−∞, −2) ∪ (1, +∞)</em>. Ne zaboravi unija, ne presjek!</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(3)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(3)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr4">
    <div class="sr-head"><span class="sr-no">Primjer 4 · Presjek intervala</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">A = ⟨−1, 4⟩, B = (2, 7). Izračunaj A ∩ B.</div>
    <button class="sr-try" onclick="tryIt(4)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr4-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Nacrtaj oba na pravcu. A: −1 (●) do 4 (●). B: 2 (○) do 7 (○). Preklapaju se između 2 i 4.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Presjek = preklapanje. Lijevi rub: 2 (iz B, isključen). Desni: 4 (iz A, uključen).</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> A ∩ B = <em>(2, 4⟩</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(4)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(4)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr5">
    <div class="sr-head"><span class="sr-no">Primjer 5 · Unija intervala</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">A = ⟨−1, 4⟩, B = (2, 7). Izračunaj A ∪ B.</div>
    <button class="sr-try" onclick="tryIt(5)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr5-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Unija = sve što je u barem jednom. A i B se preklapaju, pa se spajaju u jedan interval.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Lijevi rub: −1 (iz A, uključen). Desni: 7 (iz B, isključen).</div>
      <div class="sr-step" data-s="3"><strong>Odgovor:</strong> A ∪ B = <em>⟨−1, 7)</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(5)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(5)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr6">
    <div class="sr-head"><span class="sr-no">Primjer 6 · Prepoznaj racionalni/iracionalni</span><span class="sr-pts">2 boda</span></div>
    <div class="sr-q">Koji su iracionalni: √4, √5, 22/7, π, 0.777..., 3.1415?</div>
    <button class="sr-try" onclick="tryIt(6)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr6-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> √4 = 2 (cijeli) → <em>racionalan</em>. Potpun kvadrat.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> √5 ≈ 2.236... nepotpun kvadrat → <em>iracionalan</em>.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> 22/7 = razlomak → <em>racionalan</em> (iako aproksimira π).</div>
      <div class="sr-step" data-s="4"><strong>Korak 4:</strong> π ≈ 3.14159... beskonačno neponavljajuće → <em>iracionalan</em>.</div>
      <div class="sr-step" data-s="5"><strong>Korak 5:</strong> 0.777... ponavlja → = 7/9 → <em>racionalan</em>. &nbsp;·&nbsp; 3.1415 završava → <em>racionalan</em>.</div>
      <div class="sr-step" data-s="6"><strong>Odgovor:</strong> Iracionalni: <em>√5, π</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(6)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(6)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr7">
    <div class="sr-head"><span class="sr-no">Primjer 7 · Komplement intervala</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">Ako A = ⟨−2, 3⟩, izračunaj Aᶜ (komplement u ℝ).</div>
    <button class="sr-try" onclick="tryIt(7)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr7-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Aᶜ = ℝ \\ A — sve što je van A. Nacrtaj A i uzmi ostatak brojevnog pravca.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> A pokriva [−2, 3]. Lijevo od A: do (ali ne uključujući) −2. Desno: od 3 pa nadalje.</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Zagrade se <em>obrnu</em> — zatvoreni rub A postaje otvoreni u Aᶜ.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> Aᶜ = <em>(−∞, −2) ∪ (3, +∞)</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(7)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(7)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr8">
    <div class="sr-head"><span class="sr-no">Primjer 8 · Razlika skupova</span><span class="sr-pts">3 boda</span></div>
    <div class="sr-q">A = ⟨1, 6⟩, B = ⟨3, 8⟩. Izračunaj A \\ B.</div>
    <button class="sr-try" onclick="tryIt(8)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr8-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> A \\ B = što je u A, <em>ali ne u B</em>. Uzmeš A i izbaciš što B "pokriva".</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> A = [1, 6], B zauzima [3, 8]. Iz A izbacimo dio [3, 6] (to je A ∩ B).</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> Ostatak: od 1 do (ali ne uključujući) 3 — jer 3 ∈ B pa ga izbacujemo.</div>
      <div class="sr-step" data-s="4"><strong>Odgovor:</strong> A \\ B = <em>⟨1, 3)</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(8)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(8)">Reset</button></div>
    </div>
  </div>

  <div class="sr" id="sr9">
    <div class="sr-head"><span class="sr-no">Primjer 9 · Kombinirana (aps. + interval)</span><span class="sr-pts">5 bodova</span></div>
    <div class="sr-q">Koji x zadovoljavaju |x − 1| &lt; 4 <em>i</em> x ≥ 0?</div>
    <button class="sr-try" onclick="tryIt(9)">▶ Pokreni rješenje</button>
    <div class="sr-steps" id="sr9-steps">
      <div class="sr-step" data-s="1"><strong>Korak 1:</strong> Prvo riješi aps. nejednadžbu: |x − 1| &lt; 4 → −4 &lt; x − 1 &lt; 4 → −3 &lt; x &lt; 5.</div>
      <div class="sr-step" data-s="2"><strong>Korak 2:</strong> Prvi uvjet daje A = (−3, 5). Drugi: x ≥ 0, B = ⟨0, +∞).</div>
      <div class="sr-step" data-s="3"><strong>Korak 3:</strong> "I" znači <em>presjek</em>: A ∩ B. Nađi gdje se preklapaju.</div>
      <div class="sr-step" data-s="4"><strong>Korak 4:</strong> Lijevi rub: max(−3, 0) = 0 (uključen iz B). Desni: min(5, +∞) = 5 (isključen iz A).</div>
      <div class="sr-step" data-s="5"><strong>Odgovor:</strong> x ∈ <em>⟨0, 5)</em>.</div>
      <div class="sr-steps-ctrl"><button class="sr-next" onclick="nxtStep(9)">Sljedeći →</button><button class="sr-rst" onclick="rstStep(9)">Reset</button></div>
    </div>
  </div>
</div>

<!-- FLASHCARDS -->

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku — iracionalni broj</div>
  <div class="bug-body">
    <div class="bug-quote">Student: <em>"22/7 je iracionalan jer je približno π."</em></div>
    <div class="bug-task">22/7 <span class="wrong">iracionalan</span></div>
    <div class="bug-opts" id="bug1-opts">
      <div class="bug-opt" onclick="bugAns(1, 0, this)">A) Točno — 22/7 je približno π, pa je iracionalan.</div>
      <div class="bug-opt" onclick="bugAns(1, 1, this)">B) Greška — 22/7 je <strong>racionalan</strong> jer je <em>omjer dva cijela broja</em>. Iracionalnost se ne definira preko "približno π" nego preko nemogućnosti izražavanja kao razlomka a/b (a, b ∈ ℤ, b ≠ 0). Svaki razlomak dvaju cijelih brojeva je racionalan — to je DEFINICIJA.</div>
      <div class="bug-opt" onclick="bugAns(1, 2, this)">C) 22/7 je iracionalan samo ako je a/b gdje b nije prost broj.</div>
    </div>
    <div class="bug-expl" id="bug1-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #2 — apsolutna vrijednost</div>
  <div class="bug-body">
    <div class="bug-quote">Student: za |x| &lt; 3, <em>"x ∈ (−3, 3] jer je simetričan."</em></div>
    <div class="bug-task">Rješenje <span class="wrong">(−3, 3]</span></div>
    <div class="bug-opts" id="bug2-opts">
      <div class="bug-opt" onclick="bugAns(2, 0, this)">A) Točno — simetrična nejednakost daje interval.</div>
      <div class="bug-opt" onclick="bugAns(2, 1, this)">B) Greška — |x| &lt; 3 znači <strong>−3 &lt; x &lt; 3</strong>, što je <em>otvoreni</em> interval <strong>(−3, 3)</strong>. Znak &lt; (strogo manji) uvijek daje otvoreni kraj — ne uključuje 3. Student miješa &lt; i ≤.</div>
      <div class="bug-opt" onclick="bugAns(2, 2, this)">C) Greška — rješenje je samo x = 0.</div>
    </div>
    <div class="bug-expl" id="bug2-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #3 — presjek i unija</div>
  <div class="bug-body">
    <div class="bug-quote">A = {1, 2, 3}, B = {3, 4, 5}. Student: <em>"A ∩ B = {1, 2, 3, 4, 5}, A ∪ B = {3}."</em></div>
    <div class="bug-task">A ∩ B <span class="wrong">= {1,2,3,4,5}</span></div>
    <div class="bug-opts" id="bug3-opts">
      <div class="bug-opt" onclick="bugAns(3, 0, this)">A) Točno — presjek spaja sve elemente.</div>
      <div class="bug-opt" onclick="bugAns(3, 1, this)">B) Greška — student je ZAMIJENIO ∩ i ∪. <strong>Presjek A ∩ B</strong> su elementi koji su u <em>oba</em> skupa (samo {3}). <strong>Unija A ∪ B</strong> su svi elementi iz <em>bilo kojeg</em> skupa (= {1,2,3,4,5}). Klasičan zbunjujući znak — zapamti: ∩ kao "i" (manji), ∪ kao "ili" (veći).</div>
      <div class="bug-opt" onclick="bugAns(3, 2, this)">C) A ∩ B = ∅ jer nemaju zajedničkih elemenata.</div>
    </div>
    <div class="bug-expl" id="bug3-exp"></div>
  </div>
</div>

<div class="bug-box">
  <div class="bug-head">🐛 Prepoznaj grešku #4 — skup prirodnih brojeva</div>
  <div class="bug-body">
    <div class="bug-quote">Student: <em>"Broj −5 pripada skupu ℕ jer je cijeli broj."</em></div>
    <div class="bug-task">−5 <span class="wrong">∈ ℕ</span></div>
    <div class="bug-opts" id="bug4-opts">
      <div class="bug-opt" onclick="bugAns(4, 0, this)">A) Točno — svi cijeli brojevi su prirodni.</div>
      <div class="bug-opt" onclick="bugAns(4, 1, this)">B) Greška — <strong>ℕ (prirodni brojevi)</strong> sadrži samo {1, 2, 3, ...} (pozitivne). <strong>ℤ (cijeli brojevi)</strong> sadrži {..., −2, −1, 0, 1, 2, ...}. Inkluzija: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Negativni brojevi nisu prirodni — samo cijeli.</div>
      <div class="bug-opt" onclick="bugAns(4, 2, this)">C) Negativni brojevi uopće nisu brojevi.</div>
    </div>
    <div class="bug-expl" id="bug4-exp"></div>
  </div>
</div>

<div class="match-wrap">
  <div class="match-head">
    <span class="match-title">🧩 Spoji simbol ↔ naziv skupa</span>
    <span class="match-score">Riješeno: <strong id="match-score">0</strong> / 5</span>
  </div>
  <div class="match-body">
    <div class="match-grid">
      <div class="match-col">
        <div class="match-col-lbl">Simbol</div>
        <button class="match-btn" data-pair="a" data-side="L" onclick="matchClick(this)">ℕ</button>
        <button class="match-btn" data-pair="b" data-side="L" onclick="matchClick(this)">ℤ</button>
        <button class="match-btn" data-pair="c" data-side="L" onclick="matchClick(this)">ℚ</button>
        <button class="match-btn" data-pair="d" data-side="L" onclick="matchClick(this)">ℝ</button>
        <button class="match-btn" data-pair="e" data-side="L" onclick="matchClick(this)">∅</button>
      </div>
      <div class="match-col">
        <div class="match-col-lbl">Naziv</div>
        <button class="match-btn" data-pair="c" data-side="R" onclick="matchClick(this)">Racionalni brojevi</button>
        <button class="match-btn" data-pair="a" data-side="R" onclick="matchClick(this)">Prirodni brojevi</button>
        <button class="match-btn" data-pair="e" data-side="R" onclick="matchClick(this)">Prazni skup</button>
        <button class="match-btn" data-pair="b" data-side="R" onclick="matchClick(this)">Cijeli brojevi</button>
        <button class="match-btn" data-pair="d" data-side="R" onclick="matchClick(this)">Realni brojevi</button>
      </div>
    </div>
    <div class="match-reset">
      <button class="match-reset-btn" onclick="matchReset()">↺ Reset</button>
    </div>
  </div>
</div>

<div class="fd-wrap">
  <div class="fd-head"><span class="fd-title">🔍 Formula Decoder — klikni na simbol</span></div>
  <div class="fd-body">
    <div class="fd-formula-big">
      <span class="fd-hot" data-sym="0" onclick="decodeSym(this,0)" style="color:var(--cyan)">|x</span>&nbsp;<span class="fd-hot" data-sym="1" onclick="decodeSym(this,1)" style="color:var(--green)">−</span>&nbsp;<span class="fd-hot" data-sym="2" onclick="decodeSym(this,2)" style="color:var(--amber)">a</span><span style="color:var(--cyan)">|</span>&nbsp;<span class="fd-hot" data-sym="3" onclick="decodeSym(this,3)" style="color:var(--pink)">≤</span>&nbsp;<span class="fd-hot" data-sym="4" onclick="decodeSym(this,4)" style="color:var(--purple,#A78BFA)">r</span>
    </div>
    <div class="fd-symbols">
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),0,this)"><span class="fd-sym-letter" style="color:var(--cyan)">|x|</span><span class="fd-sym-name">apsolutna vrijednost</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),1,this)"><span class="fd-sym-letter" style="color:var(--green)">−</span><span class="fd-sym-name">oduzimanje kao "udaljenost"</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),2,this)"><span class="fd-sym-letter" style="color:var(--amber)">a</span><span class="fd-sym-name">centar intervala</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),3,this)"><span class="fd-sym-letter" style="color:var(--pink)">≤</span><span class="fd-sym-name">zatvoreni interval</span></div>
        <div class="fd-sym" onclick="decodeSym(this.querySelector('.fd-sym-letter'),4,this)"><span class="fd-sym-letter" style="color:var(--purple, #A78BFA)">r</span><span class="fd-sym-name">polumjer / radijus</span></div>
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
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">SKUP</div><div class="fc-q">ℕ — prirodni</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>{1, 2, 3, ...}</strong><br>U RH: 0 ∉ ℕ</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">SKUP</div><div class="fc-q">ℤ — cijeli</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>{..., −1, 0, 1, ...}</strong><br>Uključuje nulu</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">SKUP</div><div class="fc-q">ℚ — racionalni</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>{p/q : q ≠ 0}</strong><br>Razlomci i decimale koje završavaju ili ponavljaju</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">SKUP</div><div class="fc-q">𝕀 — iracionalni</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a">√2, π, e &nbsp;·&nbsp; <strong>ne</strong> kao razlomak</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">SKUP</div><div class="fc-q">ℝ — realni</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>ℚ ∪ 𝕀</strong><br>Sve točke brojevnog pravca</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">HIJERARHIJA</div><div class="fc-q">Relacija skupova</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</strong></div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">ZAGRADE</div><div class="fc-q">⟨ ⟩ znači...</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a">Rub <strong>uključen</strong><br>(≤ ili ≥)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">ZAGRADE</div><div class="fc-q">( ) znači...</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a">Rub <strong>isključen</strong><br>(&lt; ili &gt;)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">APS</div><div class="fc-q">|x| definicija</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>|x| = x</strong> ako x ≥ 0<br><strong>|x| = −x</strong> ako x &lt; 0</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">APS</div><div class="fc-q">|x| &lt; a → ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>−a &lt; x &lt; a</strong><br>jedan interval (−a, a)</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">APS</div><div class="fc-q">|x| &gt; a → ?</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>x &lt; −a ili x &gt; a</strong><br>unija dvaju intervala</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">OPERACIJE</div><div class="fc-q">A ∩ B</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>Presjek</strong><br>u <em>oba</em> skupa ("i A i B")</div></div></div></div>
  <div class="fc" onclick="this.classList.toggle('flipped')" tabindex="0"><div class="fc-inner"><div class="fc-f"><div class="fc-tag">OPERACIJE</div><div class="fc-q">A ∪ B</div><div class="fc-hint">klik →</div></div><div class="fc-b"><div class="fc-a"><strong>Unija</strong><br>u <em>barem jednom</em> ("A ili B")</div></div></div></div>
</div>



<div class="nav-row">
  <button class="nb" onclick="showSec(0, document.querySelector('.tab:nth-child(1)'))">← ⚡ 2 min</button>
  <button class="nb primary" onclick="showSec(2, document.querySelector('.tab:nth-child(3)'))">🧠 Vježbaj →</button>
</div>

</section>
<section id="l2" class="sec" role="tabpanel">

<div class="gon-wrap">
  <div class="gon-head">
    <span class="gon-title">✓ / ✗ Točno-netočno (28 pitanja)</span>
    <span class="gon-score" aria-live="polite" aria-atomic="true"><strong id="gon-s">0</strong>/<strong id="gon-t">28</strong></span>
  
    <button class="gon-toggle" id="gon-toggle-btn" onclick="toggleGon()" aria-label="Sakrij ili pokaži GON pitanja"><span class="gt-ico">▼</span><span class="gt-lbl">Sakrij</span></button>
  </div>
  <div class="gon-prog"><div class="gon-prog-fill" id="gon-prog"></div></div>
  <div id="gon-body"></div>
</div>

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

<div class="cp-wrap">
  <div class="cp-title">📋 Checkpoint · znaš li sve?</div>
  
  <div class="cp-list" id="cp-list">
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam hijerarhiju: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ i koji broj kojem skupu pripada</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Razumijem razliku između racionalnog i iracionalnog (konačni/periodički vs beskonačni neperiodički)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam definiciju |x| i njena ključna svojstva</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam riješiti jednadžbu |A| = a i nejednadžbu |A| &lt; a, |A| &gt; a</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam 4 tipa intervala (otvoreni, zatvoreni, polu-otvoreni, beskonačni)</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam izračunati udaljenost dvije točke d(a, b) = |a − b|</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Znam izračunati presjek i uniju dvaju intervala</div></div>
    <div class="cp-item" onclick="toggleCP(this)" tabindex="0"><div class="cp-checkbox"></div><div class="cp-text">Prepoznajem tipične greške s razlomcima, skupovima i apsolutnom vrijednosti</div></div>
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
  <div class="cp-ready" id="cp-ready">🏆 Spreman/na si za P02! Idemo dalje.</div>
</div>

<div class="discere-cta">
  <div class="discere-h">🎓 Želiš dublju razinu?</div>
  <div class="discere-t">Ovo je temelj svih ostalih poglavlja. Za dublju razinu, dodatne zadatke i AI tutora koji te vodi korak po korak — pridruži se programu <strong>Discere</strong> s tjednim sesijama.</div>
  <a href="#" onclick="window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/discere'},'*'); return false;" class="discere-btn">Pogledaj program →</a>
</div>

<div class="cn-wrap">
  <div class="cn-title">→ Nastavi učenje</div>
  <div class="cn-grid">
    <div class="cn-card" onclick="navigateChapter('p02')" style="cursor:pointer">
      <div class="cn-h">Sljedeće · P02</div>
      <div class="cn-t">Razlomci i postoci</div>
      <div class="cn-s">~30 min · lagana tema</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p03')" style="cursor:pointer">
      <div class="cn-h">Povezano · P03</div>
      <div class="cn-t">Potencije i korijeni</div>
      <div class="cn-s">gradimo na iracionalnima</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p05')" style="cursor:pointer">
      <div class="cn-h">Povezano · P05</div>
      <div class="cn-t">Linearne jednadžbe</div>
      <div class="cn-s">primjena s intervalima</div>
    </div>
    <div class="cn-card" onclick="navigateChapter('p06')" style="cursor:pointer">
      <div class="cn-h">Kasnije · P06</div>
      <div class="cn-t">Kvadratne jednadžbe</div>
      <div class="cn-s">apsolutna + kvadratne nejed.</div>
    </div>
  </div>
</div>



<div class="nav-row">
  <button class="nb" onclick="showSec(1, document.querySelector('.tab:nth-child(2)'))">← 📐 Uči</button>
  <button class="nb primary" onclick="navigateChapter('p02')">02 · Razlomci i postoci →</button>
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
    "q": "Broj 0 pripada skupu ℕ (prirodni brojevi).",
    "a": false,
    "e": "U hrvatskoj konvenciji: 0 ∉ ℕ. 0 pripada ℤ, ali nije prirodan."
  },
  {
    "q": "ℕ ⊂ ℤ — svaki prirodan broj je ujedno i cijeli.",
    "a": true,
    "e": "Točno. Prirodni su podskup cijelih (1, 2, 3... su svi cijeli)."
  },
  {
    "q": "Broj −5 pripada skupu ℕ.",
    "a": false,
    "e": "ℕ sadrži samo pozitivne cijele. −5 ∈ ℤ ali ∉ ℕ."
  },
  {
    "q": "Broj √9 je racionalan.",
    "a": true,
    "e": "√9 = 3, a 3 ∈ ℚ (zapravo i cijeli broj). Potpun kvadrat."
  },
  {
    "q": "Broj √7 je element skupa ℚ.",
    "a": false,
    "e": "√7 je iracionalan — nije potpun kvadrat."
  },
  {
    "q": "Svaki racionalan broj se može zapisati kao razlomak p/q (q ≠ 0).",
    "a": true,
    "e": "To je definicija ℚ."
  },
  {
    "q": "Broj π pripada skupu ℝ.",
    "a": true,
    "e": "Iracionalan jest, ali ℝ = ℚ ∪ 𝕀 pa π ∈ ℝ."
  },
  {
    "q": "Broj 0.333... je iracionalan jer ima beskonačno decimala.",
    "a": false,
    "e": "Ponavlja znamenku → racionalan (= 1/3). Iracionalan = NEponavljajući."
  },
  {
    "q": "Interval (2, 5) sadrži broj 2.",
    "a": false,
    "e": "Okrugla zagrada = rub isključen. 2 ∉ (2, 5)."
  },
  {
    "q": "Interval ⟨−1, 3⟩ sadrži broj −1.",
    "a": true,
    "e": "Uglata zagrada = rub uključen."
  },
  {
    "q": "U zapisu (3, +∞) možemo koristiti uglatu zagradu uz ∞.",
    "a": false,
    "e": "∞ UVIJEK ima okruglu zagradu — nije konkretna točka."
  },
  {
    "q": "Broj 4 pripada intervalu (−∞, 4).",
    "a": false,
    "e": "(−∞, 4) otvoreno na 4 → 4 ∉ (−∞, 4)."
  },
  {
    "q": "Broj 0 pripada intervalu ⟨−2, 2).",
    "a": true,
    "e": "−2 ≤ 0 < 2 → da, unutra."
  },
  {
    "q": "Interval ⟨3, 3⟩ sadrži samo broj 3.",
    "a": true,
    "e": "Jednoelementni skup {3}."
  },
  {
    "q": "Interval (5, 2) ima 3 elementa.",
    "a": false,
    "e": "Zapis nema smisla — lijevi rub mora biti < desni. Prazan skup."
  },
  {
    "q": "Svaki broj u intervalu (0, 1) je racionalan.",
    "a": false,
    "e": "Npr. 1/π ∈ (0, 1) ali je iracionalan."
  },
  {
    "q": "|−7| = −7",
    "a": false,
    "e": "|−7| = 7. Aps. vrijednost uvijek ≥ 0."
  },
  {
    "q": "Rješenje |x| < 3 je interval (−3, 3).",
    "a": true,
    "e": "|x| < a ↔ −a < x < a."
  },
  {
    "q": "Rješenje |x| > 2 je jedan interval (2, +∞).",
    "a": false,
    "e": "Daje UNIJU: (−∞, −2) ∪ (2, +∞)."
  },
  {
    "q": "Jednadžba |x| = −3 ima dva rješenja.",
    "a": false,
    "e": "Nema rješenja — aps. vrijednost nije negativna."
  },
  {
    "q": "|x − 5| ≤ 2 znači: x je udaljen najviše 2 od 5.",
    "a": true,
    "e": "Geometrijska interpretacija na brojevnom pravcu."
  },
  {
    "q": "|x + 3| < 4 je ekvivalentno s −7 < x < 1.",
    "a": true,
    "e": "|x+3|<4 ↔ −4<x+3<4 ↔ −7<x<1."
  },
  {
    "q": "Ako A = ⟨1, 5⟩ i B = ⟨3, 8⟩, onda A ∩ B = ⟨3, 5⟩.",
    "a": true,
    "e": "Veći lijevi do manji desni."
  },
  {
    "q": "A ∪ B uvijek ima više elemenata nego A ∩ B.",
    "a": false,
    "e": "Netočno — primjer: A = B = {1,2,3}. Tada A ∪ B = B = A ∩ B. Nije uvijek više — može biti jednako. (Točno je da A ∩ B ⊆ A ∪ B, ali \\"više elemenata\\" nije uvijek istina.)"
  },
  {
    "q": "Presjek (1, 3) ∩ (5, 7) je prazan skup ∅.",
    "a": true,
    "e": "Intervali se ne preklapaju."
  },
  {
    "q": "A ∪ ∅ = A za svaki skup A.",
    "a": true,
    "e": "Unija s praznim ne mijenja A."
  },
  {
    "q": "Ako A ⊂ B, onda A \\\\ B = A.",
    "a": false,
    "e": "A ⊂ B znači svi elementi A su u B → A \\\\ B = ∅."
  },
  {
    "q": "Komplement ⟨−2, 3⟩ u ℝ je (−∞, −2) ∪ (3, +∞).",
    "a": true,
    "e": "Zagrade se obrnu kod komplementa."
  }
];
const DRILL_DATA = [
  {
    "q": "Kojem skupu NE pripada broj −2?",
    "opts": [
      "ℤ",
      "ℚ",
      "ℕ",
      "ℝ"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "ℕ = {1, 2, 3, ...} — negativni ne pripadaju."
  },
  {
    "q": "Koji broj je iracionalan?",
    "opts": [
      "2/3",
      "0.75",
      "√5",
      "−7"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "Iracionalan = ne može se zapisati kao razlomak."
  },
  {
    "q": "Koliko je |−12|?",
    "opts": [
      "12",
      "−12",
      "0",
      "nedef."
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "|x| je udaljenost od 0 — uvijek ≥ 0. Dakle |−12| = 12."
  },
  {
    "q": "Kojem intervalu pripada broj 4?",
    "opts": [
      "(0, 4)",
      "⟨4, 7)",
      "(4, 10)",
      "{3}"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "Uglata zagrada = uključen rub."
  },
  {
    "q": "Otvoreni interval (−2, 5) znači:",
    "opts": [
      "−2 ≤ x ≤ 5",
      "−2 < x < 5",
      "−2 ≤ x < 5",
      "x > −2"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "Okrugla = strogo < ili >. Uglata = ≤ ili ≥."
  },
  {
    "q": "Koji skup sadrži broj 0?",
    "opts": [
      "ℕ",
      "Samo 𝕀",
      "ℤ",
      "∅"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "0 ∉ ℕ u RH. 0 ∈ ℤ."
  },
  {
    "q": "|0| iznosi:",
    "opts": [
      "0",
      "1",
      "nedef.",
      "ovisi"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "|0| = 0 jer 0 je udaljen 0 od sebe."
  },
  {
    "q": "Broj √16 je:",
    "opts": [
      "iracionalan",
      "racionalan",
      "nije realan",
      "ne postoji"
    ],
    "ok": 1,
    "diff": "easy",
    "exp": "√16 = 4, cijeli → racionalan."
  },
  {
    "q": "Sinonim za ℝ \\\\ A:",
    "opts": [
      "komplement A",
      "presjek A",
      "unija A",
      "prazan A"
    ],
    "ok": 0,
    "diff": "easy",
    "exp": "Komplement = 'sve što nije u A'."
  },
  {
    "q": "Rješenje |x| = 5 je:",
    "opts": [
      "x = 5",
      "x = −5",
      "x = ±5",
      "nema"
    ],
    "ok": 2,
    "diff": "easy",
    "exp": "|A| = a ima dva rješenja: ±a. Za |x| = 5: x = 5 ili x = −5, dakle x = ±5."
  },
  {
    "q": "Rješenje |x| ≤ 4 je:",
    "opts": [
      "x ≤ 4",
      "(−4, 4)",
      "⟨−4, 4⟩",
      "(−∞,−4⟩∪⟨4,∞)"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "|x| ≤ a → zatvoreni interval ⟨−a, a⟩."
  },
  {
    "q": "Rješenje |x| > 3 je:",
    "opts": [
      "(−3, 3)",
      "⟨−3, 3⟩",
      "(−∞,−3) ∪ (3,∞)",
      "∅"
    ],
    "ok": 2,
    "diff": "med",
    "exp": "Za > trebaš UNIJU — lijevo i desno."
  },
  {
    "q": "A = ⟨0, 5⟩, B = ⟨2, 7⟩. A ∩ B = ?",
    "opts": [
      "⟨0, 7⟩",
      "⟨2, 5⟩",
      "(2, 5)",
      "∅"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "Presjek = preklapanje (veći lijevi, manji desni)."
  },
  {
    "q": "A = ⟨0, 5⟩, B = ⟨2, 7⟩. A ∪ B = ?",
    "opts": [
      "⟨0, 7⟩",
      "⟨2, 5⟩",
      "(0, 7)",
      "⟨0, 5⟩"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "Unija = spojeno (manji lijevi, veći desni)."
  },
  {
    "q": "Rješenje |x − 3| < 2 je:",
    "opts": [
      "(1, 5)",
      "⟨1, 5⟩",
      "(−5, 5)",
      "(3, 5)"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "Centar pomakne: |x − c| < a → c−a < x < c+a."
  },
  {
    "q": "Zapis: x > −2 i x ≤ 4?",
    "opts": [
      "⟨−2, 4⟩",
      "(−2, 4⟩",
      "⟨−2, 4)",
      "(−2, 4)"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "Prvi strogi, drugi uključen."
  },
  {
    "q": "A = (1, 4). Koliki je Aᶜ u ℝ?",
    "opts": [
      "(−∞,1) ∪ (4,∞)",
      "(−∞,1⟩ ∪ ⟨4,∞)",
      "(−1, 4)",
      "ℝ"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "Komplement otvorenog = zatvoreni rubovi, i obrnuto."
  },
  {
    "q": "Skup rješenja |2x − 6| = 4:",
    "opts": [
      "{1, 5}",
      "{5}",
      "{1}",
      "{−1, 5}"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "|A| = a rastavi: A = a ili A = −a."
  },
  {
    "q": "Broj 0.222... je:",
    "opts": [
      "iracionalan",
      "= 2/9",
      "= 0.2",
      "ne postoji"
    ],
    "ok": 1,
    "diff": "med",
    "exp": "0.222... = 2/9 (periodička)."
  },
  {
    "q": "(−∞, 2) ∩ ⟨0, 5⟩ =",
    "opts": [
      "⟨0, 2)",
      "(0, 2)",
      "⟨0, 5⟩",
      "(−∞, 5⟩"
    ],
    "ok": 0,
    "diff": "med",
    "exp": "(−∞, 2) daje x < 2; preklopi s ⟨0, 5⟩."
  },
  {
    "q": "Rješenje |2x + 1| ≥ 5:",
    "opts": [
      "⟨−3, 2⟩",
      "(−∞,−3⟩ ∪ ⟨2,∞)",
      "(−3, 2)",
      "⟨−2, 3⟩"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "|A| ≥ a daje UNIJU: A ≤ −a ili A ≥ a."
  },
  {
    "q": "|x| < 3 i x > 1 → rješenje?",
    "opts": [
      "(1, 3)",
      "⟨1, 3⟩",
      "(−3, 3)",
      "(−∞, 3)"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "'I' = presjek — uzmi zajednički dio."
  },
  {
    "q": "A = ⟨−2, 3), B = (1, 5⟩. A \\\\ B je:",
    "opts": [
      "⟨−2, 1⟩",
      "⟨−2, 1)",
      "⟨−2, 1⟩ ∪ {3}",
      "(1, 3)"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "A \\\\ B = elementi u A koji nisu u B. B = (1, 5⟩ → 1 ∉ B (otvorena lijeva granica!). Dakle 1 ∈ A i 1 ∉ B → 1 ∈ A \\\\ B. Rezultat: ⟨−2, 1⟩."
  },
  {
    "q": "{x ∈ ℤ : |x| < 3} ima:",
    "opts": [
      "5 elem.",
      "6 elem.",
      "4 elem.",
      "beskonačno"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "x ∈ ℤ i |x|<3 → {−2,−1,0,1,2}. Prebroji: 5 elemenata."
  },
  {
    "q": "|x − 1| > |x + 3| → rješenje?",
    "opts": [
      "x < −1",
      "x > −1",
      "x < 1",
      "x > 1"
    ],
    "ok": 0,
    "diff": "hard",
    "exp": "Kvadriraj ili: sredina između −3 i 1 je −1."
  },
  {
    "q": "|x − c| ≤ 2 daje ⟨0, 4⟩ za koji c?",
    "opts": [
      "c = 0",
      "c = 2",
      "c = 4",
      "c = −2"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "⟨0,4⟩ → sredina = 2, c = 2."
  },
  {
    "q": "(ℝ \\\\ ℚ) predstavlja:",
    "opts": [
      "∅",
      "iracionalne",
      "racionalne",
      "prirodne"
    ],
    "ok": 1,
    "diff": "hard",
    "exp": "ℝ bez ℚ = iracionalni."
  },
  {
    "q": "Koliko cijelih brojeva je u (−π, e)?",
    "opts": [
      "4",
      "5",
      "6",
      "3"
    ],
    "ok": 2,
    "diff": "hard",
    "exp": "−π ≈ −3.14, e ≈ 2.72 → cijeli u (−π, e): −3,−2,−1,0,1,2 — ukupno 6 brojeva."
  }
];
const QUIZ_DATA = [
  {
    "q": "Koji od sljedećih brojeva je iracionalan?",
    "opts": [
      "0.333... (periodička)",
      "22/7",
      "√11",
      "4.125"
    ],
    "ok": 2,
    "e": "√11 nije potpun kvadrat → iracionalan."
  },
  {
    "q": "Rješenje nejednadžbe |x| ≤ 4 je:",
    "opts": [
      "x ≤ 4",
      "x ∈ ⟨−4, 4⟩",
      "x ∈ (−∞,−4⟩ ∪ ⟨4,+∞)",
      "x ∈ (−4, 4)"
    ],
    "ok": 1,
    "e": "|x| ≤ a → zatvoreni interval ⟨−a, a⟩."
  },
  {
    "q": "Koji interval odgovara uvjetu −2 < x ≤ 6?",
    "opts": [
      "⟨−2, 6⟩",
      "(−2, 6)",
      "(−2, 6⟩",
      "⟨−2, 6)"
    ],
    "ok": 2,
    "e": "Lijevo strogo (okrugla), desno uključeno (uglata)."
  },
  {
    "q": "A = ⟨−1, 5⟩, B = (3, 8). A ∩ B = ?",
    "opts": [
      "⟨−1, 8⟩",
      "⟨3, 5⟩",
      "(3, 5⟩",
      "(3, 5)"
    ],
    "ok": 2,
    "e": "Veći lijevi: 3 iz B (isključen). Manji desni: 5 iz A (uključen)."
  },
  {
    "q": "Rješenje |2x − 1| < 5 je:",
    "opts": [
      "(−2, 3⟩",
      "(−2, 3)",
      "⟨−2, 3⟩",
      "(−∞,−2) ∪ (3,+∞)"
    ],
    "ok": 1,
    "e": "−5 < 2x−1 < 5 → −2 < x < 3."
  },
  {
    "q": "Skup rješenja |x + 3| ≥ 2 je:",
    "opts": [
      "(−∞,−5⟩ ∪ ⟨−1,+∞)",
      "⟨−5, −1⟩",
      "(−5, −1)",
      "(−∞,−5) ∪ (−1,+∞)"
    ],
    "ok": 0,
    "e": "|x+3|≥2 → x+3≥2 ili x+3≤−2 → x≥−1 ili x≤−5. Rješenje: (−∞,−5⟩ ∪ ⟨−1,+∞) — s uključenim rubovima jer je ≥."
  },
  {
    "q": "A = ⟨0, 4⟩, B = (2, 5⟩. A \\\\ B = ?",
    "opts": [
      "⟨0, 2⟩",
      "⟨0, 2)",
      "(0, 2)",
      "(2, 4⟩"
    ],
    "ok": 0,
    "e": "A ∩ B = (2, 4⟩. A bez toga → ⟨0, 2⟩ (2 ∉ B → ostaje u A)."
  },
  {
    "q": "Koliko cijelih brojeva pripada skupu {x ∈ ℝ : |x − 2| < 3}?",
    "opts": [
      "3",
      "4",
      "5",
      "6"
    ],
    "ok": 2,
    "e": "|x−2|<3 → −1<x<5 → cijeli: 0,1,2,3,4 (pet)."
  }
];
// (stari PBX_CH_DATA iz P09 uklonjen — novi je iznad u INTERVAL EXPLORER bloku)
const DRILL_HINTS = [
  "ℕ = {1, 2, 3, ...} — negativni ne pripadaju.",
  "Iracionalan = ne može se zapisati kao razlomak.",
  "|x| je udaljenost od 0 — uvijek ≥ 0.",
  "Uglata zagrada = uključen rub.",
  "Okrugla = strogo < ili >. Uglata = ≤ ili ≥.",
  "0 ∉ ℕ u RH. 0 ∈ ℤ.",
  "|0| = 0 jer 0 je udaljen 0 od sebe.",
  "√16 = 4, cijeli → racionalan.",
  "Komplement = 'sve što nije u A'.",
  "|A| = a ima dva rješenja: ±a.",
  "|x| ≤ a → zatvoreni interval ⟨−a, a⟩.",
  "Za > trebaš UNIJU — lijevo i desno.",
  "Presjek = preklapanje (veći lijevi, manji desni).",
  "Unija = spojeno (manji lijevi, veći desni).",
  "Centar pomakne: |x − c| < a → c−a < x < c+a.",
  "Prvi strogi, drugi uključen.",
  "Komplement otvorenog = zatvoreni rubovi, i obrnuto.",
  "|A| = a rastavi: A = a ili A = −a.",
  "0.222... = 2/9 (periodička).",
  "(−∞, 2) daje x < 2; preklopi s ⟨0, 5⟩.",
  "|A| ≥ a daje UNIJU: A ≤ −a ili A ≥ a.",
  "'I' = presjek — uzmi zajednički dio.",
  "A \\\\ B = A bez onoga što B pokriva.",
  "x ∈ ℤ i |x|<3 → {−2,−1,0,1,2}.",
  "Kvadriraj ili: sredina između −3 i 1 je −1.",
  "⟨0,4⟩ → sredina = 2, c = 2.",
  "ℝ bez ℚ = iracionalni.",
  "−π ≈ −3.14, e ≈ 2.72 → cijeli: −3,−2,−1,0,1,2."
];

// P09 JS Part 1 — core, toast, tabs, progress, achievements, Parabola Explorer
const LS_KEY = 'matb_p01';
const FAV_KEY = 'matb_p01_favs';
const ACH_KEY = 'matb_p01_ach';

/* === P01 enriched data (bug/match/FD) === */
const BUG_ANSWERS = {
  1: { correct: 1, explain: {
    0: '✗ Krivo — približavanje iracionalnom broju ne čini broj iracionalnim. 22/7 ≈ 3.142857... (periodička) dok π = 3.14159265... (neperiodička). Periodičnost decimala je ključ: periodičke su <strong>racionalne</strong>.',
    1: '✓ Točno! 22/7 je racionalan jer je omjer dva cijela broja. Iracionalnost se ne definira preko "približno π" nego preko nemogućnosti izražavanja kao razlomka a/b (a, b ∈ ℤ, b ≠ 0). Svaki razlomak dvaju cijelih brojeva je racionalan.',
    2: '✗ Krivo — racionalnost ne ovisi o tome je li nazivnik prost broj. 22/7 je racionalan (i 22/49 također, iako 49 nije prost). Ključno je samo da a, b ∈ ℤ i b ≠ 0.'
  }},
  2: { correct: 1, explain: {
    0: '✗ Krivo — simetrija intervala je točna, ali granice nisu uključene. |3| = 3, što nije strogo manje od 3, pa x = 3 NIJE rješenje nejednadžbe |x| &lt; 3.',
    1: '✓ Točno! |x| &lt; 3 znači −3 &lt; x &lt; 3, otvoreni interval (−3, 3). Znak &lt; (strogo manji) uvijek daje otvoreni kraj — ne uključuje 3. Zatvoreni kraj bio bi samo ako je ≤. Za |x| ≤ 3 rješenje bi bilo [−3, 3].',
    2: '✗ Krivo — |x| &lt; 3 nije jednadžba nego <em>nejednadžba</em>. Ima beskonačno rješenja (svi brojevi između −3 i 3).'
  }},
  3: { correct: 1, explain: {
    0: '✗ Krivo — presjek (∩) je manji skup, ne veći. Spajanje svih elemenata je unija (∪).',
    1: '✓ Točno! Student je zamijenio ∩ i ∪. <strong>Presjek A ∩ B</strong> = elementi u <em>oba</em> ({3}). <strong>Unija A ∪ B</strong> = elementi u <em>bilo kojem</em> ({1,2,3,4,5}). Zapamti: ∩ je "i" (manje), ∪ je "ili" (više).',
    2: '✗ Krivo — oba skupa sadrže 3, pa je A ∩ B = {3}, ne prazni skup.'
  }},
  4: { correct: 1, explain: {
    0: '✗ Krivo — <em>obrnuto</em>: svi prirodni su cijeli (ℕ ⊂ ℤ), ali ne svi cijeli su prirodni. Negativni cijeli brojevi NISU prirodni.',
    1: '✓ Točno! ℕ = {1, 2, 3, ...} (samo pozitivne), ℤ = {..., −2, −1, 0, 1, 2, ...} (uključuje negativne i nulu). Inkluzija: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Neki autori uključuju 0 u ℕ, ali nikad negativne brojeve.',
    2: '✗ Krivo — negativni brojevi su legitimni brojevi (ℤ, ℚ, ℝ), samo nisu u ℕ. Koriste se za temperaturu, dug, koordinate, itd.'
  }}
};

const FD_EXPLANATIONS = {
  "0": {
    "name": "|x| (apsolutna vrijednost)",
    "desc": "Funkcija |x| vraća 'udaljenost od 0' — rezultat je uvijek ≥ 0. |−5| = 5, |3| = 3, |0| = 0. Ključno za intervale jer pretvara dvostranu nejednadžbu u jednu."
  },
  "1": {
    "name": "− (oduzimanje kao 'udaljenost')",
    "desc": "x − a daje algebarsku razliku. S apsolutnom vrijednosti |x − a| = udaljenost točke x od točke a na brojevnom pravcu."
  },
  "2": {
    "name": "a (centar intervala)",
    "desc": "Točka na brojevnom pravcu oko koje se definira segment. Npr. za |x − 5| ≤ 2, centar je a = 5. Interval je [3, 7]."
  },
  "3": {
    "name": "≤ (zatvoreni interval)",
    "desc": "Znak ≤ uključuje krajnje točke. |x − a| ≤ r daje ZATVORENI interval [a−r, a+r]. Za < dobili bismo OTVORENI (a−r, a+r)."
  },
  "4": {
    "name": "r (polumjer / radijus)",
    "desc": "Maksimalna dopuštena udaljenost od centra. |x − a| ≤ r znači x je unutar r jedinica od a. Geometrijski: 'sve x koji su blizu a unutar r'."
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

function updateQuizStreak(correct) {
  if (correct) { quizStreak = (quizStreak || 0) + 1; }
  else { quizStreak = 0; }
  const el = document.getElementById('quiz-streak-n');
  if (el) el.textContent = quizStreak;
}
function openDiscereModal() {
  const m = document.getElementById('discere-modal');
  if (m) m.classList.add('show');
}
function closeDiscereModal() {
  const m = document.getElementById('discere-modal');
  if (m) m.classList.remove('show');
}

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
  const target = 4;
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
// INTERVAL EXPLORER 2.0 (P01)
// Brojevni pravac s dva intervala A, B + presjek + unija
// Mode 0: Dva intervala A, B
// Mode 1: Aps. nejednadžba |x - c| <op> r
// ═══════════════════════════════════════════════════════════════

const pbx = {
  // Interval A: [a1, a2] + inkluzivnost rubova
  a1: -3, a2: 2, a_inc_left: true, a_inc_right: true,
  // Interval B: [b1, b2] + inkluzivnost rubova
  b1: 0, b2: 5, b_inc_left: true, b_inc_right: true,
  // Mode 1 (aps): |x - c| <op> r
  absC: 0, absR: 3, absOp: 'lt',  // 'lt' < , 'le' ≤ , 'gt' >, 'ge' ≥
  mode: 0, zoom: 1, presetsUsed: 0,
  dragging: null  // 'a1'/'a2'/'b1'/'b2'/null
};



var pbxDragFrame = null;
let pbxCh = null;

function pbxSetMode(m, btn) {
  pbx.mode = m;
  document.querySelectorAll('.pbx-mode-tab').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  const freeCtrl = document.getElementById('pbx-free-ctrl');
  if (freeCtrl) freeCtrl.style.display = (m === 0) ? 'grid' : 'none';
  let absCtrl = document.getElementById('pbx-abs-ctrl');
  if (!absCtrl && m === 1) {
    // Inject abs control panel
    absCtrl = document.createElement('div');
    absCtrl.id = 'pbx-abs-ctrl';
    absCtrl.className = 'pbx-controls';
    absCtrl.innerHTML =
      '<div class="pbx-ctrl">' +
        '<div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Centar c</span><span class="pbx-ctrl-val" id="pbx-absc-val">' + pbx.absC + '</span></div>' +
        '<input type="range" class="pbx-slider" id="pbx-absc" min="-8" max="8" step="0.5" value="' + pbx.absC + '">' +
      '</div>' +
      '<div class="pbx-ctrl">' +
        '<div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Radijus r</span><span class="pbx-ctrl-val v" id="pbx-absr-val">' + pbx.absR + '</span></div>' +
        '<input type="range" class="pbx-slider" id="pbx-absr" min="0.5" max="8" step="0.5" value="' + pbx.absR + '">' +
      '</div>' +
      '<div class="pbx-ctrl">' +
        '<div class="pbx-ctrl-row"><span class="pbx-ctrl-lbl">Operator</span><span class="pbx-ctrl-val ok" id="pbx-absop-val">&lt;</span></div>' +
        '<div style="display:flex;gap:4px;flex-wrap:wrap">' +
          '<button class="pbx-btn" style="flex:1;padding:4px 6px;font-size:10px" onclick="pbxSetAbsOp(\\'lt\\')">&lt;</button>' +
          '<button class="pbx-btn" style="flex:1;padding:4px 6px;font-size:10px" onclick="pbxSetAbsOp(\\'le\\')">≤</button>' +
          '<button class="pbx-btn" style="flex:1;padding:4px 6px;font-size:10px" onclick="pbxSetAbsOp(\\'gt\\')">&gt;</button>' +
          '<button class="pbx-btn" style="flex:1;padding:4px 6px;font-size:10px" onclick="pbxSetAbsOp(\\'ge\\')">≥</button>' +
        '</div>' +
      '</div>';
    freeCtrl.parentNode.insertBefore(absCtrl, freeCtrl.nextSibling);
    document.getElementById('pbx-absc').addEventListener('input', e => { pbx.absC = parseFloat(e.target.value); pbxUpdate(); });
    document.getElementById('pbx-absr').addEventListener('input', e => { pbx.absR = parseFloat(e.target.value); pbxUpdate(); });
  } else if (absCtrl) {
    absCtrl.style.display = (m === 1) ? 'grid' : 'none';
  }
  pbxUpdate();
}

function pbxSetAbsOp(op) {
  pbx.absOp = op;
  const map = {lt:'<', le:'≤', gt:'>', ge:'≥'};
  const v = document.getElementById('pbx-absop-val');
  if (v) v.textContent = map[op];
  pbxUpdate();
}

function pbxZoom(dir) {
  if (dir === 0) pbx.zoom = 1;
  else if (dir > 0) pbx.zoom = Math.min(pbx.zoom * 1.3, 3);
  else pbx.zoom = Math.max(pbx.zoom / 1.3, 0.4);
  const lbl = document.getElementById('pbx-zoom-lbl');
  if (lbl) lbl.textContent = pbx.zoom.toFixed(1) + '×';
  pbxUpdate();
}

function pbxPreset(name, btn) {
  document.querySelectorAll('.pbx-preset').forEach(b => b.classList.remove('on'));
  if (btn) btn.classList.add('on');
  
  const presets = {
    overlap:  {a1:-3, a2:2, b1:0, b2:5, ail:true, air:true, bil:true, bir:true},
    separate: {a1:-4, a2:-1, b1:2, b2:5, ail:true, air:true, bil:true, bir:true},
    nested:   {a1:-5, a2:5, b1:-2, b2:2, ail:true, air:true, bil:true, bir:true},
    touch:    {a1:-3, a2:1, b1:1, b2:4, ail:true, air:false, bil:false, bir:true},
    same:     {a1:-2, a2:3, b1:-2, b2:3, ail:true, air:true, bil:true, bir:true},
    abs:      {mode: 1, absC: 1, absR: 3, absOp: 'lt'}
  };
  
  const p = presets[name];
  if (!p) return;
  
  if (p.mode !== undefined) {
    pbx.mode = p.mode;
    pbx.absC = p.absC; pbx.absR = p.absR; pbx.absOp = p.absOp;
    const btnEl = document.querySelectorAll('.pbx-mode-tab');
    if (btnEl && btnEl[1]) pbxSetMode(1, btnEl[1]);
    // Update abs sliders
    setTimeout(() => {
      const cs = document.getElementById('pbx-absc');
      const rs = document.getElementById('pbx-absr');
      if (cs) { cs.value = p.absC; document.getElementById('pbx-absc-val').textContent = p.absC; }
      if (rs) { rs.value = p.absR; document.getElementById('pbx-absr-val').textContent = p.absR; }
      pbxSetAbsOp(p.absOp);
    }, 50);
  } else {
    pbx.mode = 0;
    const btnEl = document.querySelectorAll('.pbx-mode-tab');
    if (btnEl && btnEl[0]) pbxSetMode(0, btnEl[0]);
    pbx.a1 = p.a1; pbx.a2 = p.a2; pbx.b1 = p.b1; pbx.b2 = p.b2;
    pbx.a_inc_left = p.ail; pbx.a_inc_right = p.air;
    pbx.b_inc_left = p.bil; pbx.b_inc_right = p.bir;
    // Sync sliders
    ['a','b','c','d'].forEach((k,i) => {
      const map = {0:'a1', 1:'a2', 2:'b1', 3:'b2'};
      const el = document.getElementById('pbx-'+k);
      const valEl = document.getElementById('pbx-'+k+'-val');
      if (el) el.value = pbx[map[i]];
      if (valEl) valEl.textContent = pbx[map[i]];
    });
    // Sync bracket indicators
    const aiEl = document.getElementById('pbx-ai-val');
    const biEl = document.getElementById('pbx-bi-val');
    if (aiEl) aiEl.textContent = (p.ail ? '⟨' : '(') + ' ' + (p.air ? '⟩' : ')');
    if (biEl) biEl.textContent = (p.bil ? '⟨' : '(') + ' ' + (p.bir ? '⟩' : ')');
  }
  
  pbx.presetsUsed++;
  if (pbx.presetsUsed >= 2) {
    const d = lsLoad();
    d.pbxExplored = true;
    lsSave(d);
    updateProg();
    unlockAch('explorer', '🎨 Explorer otključan!');
  }
  pbxUpdate();
}

function pbxToggleBracket(which) {
  // Toggle "uglata ⟨⟩" vs "okrugla ()" za oba ruba istog intervala
  if (which === 'A') {
    const was = pbx.a_inc_left && pbx.a_inc_right;
    pbx.a_inc_left = !was;
    pbx.a_inc_right = !was;
    const el = document.getElementById('pbx-ai-val');
    if (el) el.textContent = was ? '( )' : '⟨ ⟩';
  } else {
    const was = pbx.b_inc_left && pbx.b_inc_right;
    pbx.b_inc_left = !was;
    pbx.b_inc_right = !was;
    const el = document.getElementById('pbx-bi-val');
    if (el) el.textContent = was ? '( )' : '⟨ ⟩';
  }
  pbxUpdate();
}

// ─── Canvas math helpers ────────────────────────────────────────
function pbxRange() {
  // Vrati [xMin, xMax] koji se trenutno prikazuje
  const base = 10;
  const span = base / pbx.zoom;
  return [-span, span];
}

function pbxX2px(x, w) {
  const [xMin, xMax] = pbxRange();
  return ((x - xMin) / (xMax - xMin)) * w;
}

function pbxPx2x(px, w) {
  const [xMin, xMax] = pbxRange();
  return xMin + (px / w) * (xMax - xMin);
}

// ─── Interval math ──────────────────────────────────────────────
function intervalIntersection(a1, a2, ail, air, b1, b2, bil, bir) {
  // Normalizira (a1 ≤ a2 itd.)
  if (a1 > a2) { [a1, a2] = [a2, a1]; [ail, air] = [air, ail]; }
  if (b1 > b2) { [b1, b2] = [b2, b1]; [bil, bir] = [bir, bil]; }
  // Uzmi veći lijevi i manji desni
  let left, leftInc, right, rightInc;
  if (a1 > b1) { left = a1; leftInc = ail; }
  else if (a1 < b1) { left = b1; leftInc = bil; }
  else { left = a1; leftInc = ail && bil; }
  
  if (a2 < b2) { right = a2; rightInc = air; }
  else if (a2 > b2) { right = b2; rightInc = bir; }
  else { right = a2; rightInc = air && bir; }
  
  // Provjera je li valjan: left < right, ili left == right s oba inclusive
  if (left > right || (left === right && !(leftInc && rightInc))) {
    return null; // prazan
  }
  return { left, leftInc, right, rightInc };
}

function intervalUnion(a1, a2, ail, air, b1, b2, bil, bir) {
  if (a1 > a2) { [a1, a2] = [a2, a1]; [ail, air] = [air, ail]; }
  if (b1 > b2) { [b1, b2] = [b2, b1]; [bil, bir] = [bir, bil]; }
  // Preklapanje? Ako se preklapaju (ili dodiruju s uključenom točkom), unija = jedan
  // Provjeri: a2 < b1 (odvojeni) ili a2 == b1 i barem jedan otvoren (odvojeni)
  // Normaliziraj tako da A bude lijevi
  let la1=a1, la2=a2, lail=ail, lair=air;
  let lb1=b1, lb2=b2, lbil=bil, lbir=bir;
  if (la1 > lb1) {
    [la1, lb1] = [lb1, la1]; [la2, lb2] = [lb2, la2];
    [lail, lbil] = [lbil, lail]; [lair, lbir] = [lbir, lair];
  }
  // Sad je la1 <= lb1
  const overlap = (la2 > lb1) || (la2 === lb1 && (lair || lbil));
  if (overlap) {
    // Spojeni
    let right, rightInc;
    if (la2 > lb2) { right = la2; rightInc = lair; }
    else if (la2 < lb2) { right = lb2; rightInc = lbir; }
    else { right = la2; rightInc = lair || lbir; }
    return [{ left: la1, leftInc: lail, right, rightInc }];
  } else {
    // Odvojeni
    return [
      { left: la1, leftInc: lail, right: la2, rightInc: lair },
      { left: lb1, leftInc: lbil, right: lb2, rightInc: lbir }
    ];
  }
}

function fmtInterval(iv) {
  if (!iv) return '∅';
  const L = iv.leftInc ? '⟨' : '(';
  const R = iv.rightInc ? '⟩' : ')';
  return L + fmtN(iv.left) + ', ' + fmtN(iv.right) + R;
}

function fmtN(n) {
  if (n === undefined || n === null) return '—';
  if (Math.abs(n) < 1e-10) return '0';
  const r = Math.round(n * 100) / 100;
  return String(r);
}

// ─── Canvas draw ────────────────────────────────────────────────
function pbxUpdate() {
  // Sync slider values → state (only mode 0)
  if (pbx.mode === 0) {
    const a1 = parseFloat(document.getElementById('pbx-a')?.value ?? pbx.a1);
    const a2 = parseFloat(document.getElementById('pbx-b')?.value ?? pbx.a2);
    const b1 = parseFloat(document.getElementById('pbx-c')?.value ?? pbx.b1);
    const b2 = parseFloat(document.getElementById('pbx-d')?.value ?? pbx.b2);
    if (!isNaN(a1)) pbx.a1 = a1;
    if (!isNaN(a2)) pbx.a2 = a2;
    if (!isNaN(b1)) pbx.b1 = b1;
    if (!isNaN(b2)) pbx.b2 = b2;
    document.getElementById('pbx-a-val') && (document.getElementById('pbx-a-val').textContent = pbx.a1);
    document.getElementById('pbx-b-val') && (document.getElementById('pbx-b-val').textContent = pbx.a2);
    document.getElementById('pbx-c-val') && (document.getElementById('pbx-c-val').textContent = pbx.b1);
    document.getElementById('pbx-d-val') && (document.getElementById('pbx-d-val').textContent = pbx.b2);
  }
  
  const canvas = document.getElementById('pbx-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext && canvas.getContext('2d');
  if (!ctx) return; // JSDOM ili browser bez canvas support
  const W = canvas.width, H = canvas.height;
  
  // Clear
  ctx.fillStyle = '#0A0F1A';
  ctx.fillRect(0, 0, W, H);
  
  // Grid
  const [xMin, xMax] = pbxRange();
  const axisY = H / 2;
  const step = (xMax - xMin) > 16 ? 2 : 1;
  ctx.strokeStyle = 'rgba(77,158,255,0.08)';
  ctx.lineWidth = 1;
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x += step) {
    const px = pbxX2px(x, W);
    ctx.beginPath(); ctx.moveTo(px, 30); ctx.lineTo(px, H - 30); ctx.stroke();
  }
  
  // Axis
  ctx.strokeStyle = '#7A90BB';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(20, axisY); ctx.lineTo(W - 20, axisY); ctx.stroke();
  // Arrows
  ctx.beginPath();
  ctx.moveTo(W - 20, axisY); ctx.lineTo(W - 28, axisY - 5); ctx.lineTo(W - 28, axisY + 5); ctx.closePath();
  ctx.fillStyle = '#7A90BB'; ctx.fill();
  ctx.beginPath();
  ctx.moveTo(20, axisY); ctx.lineTo(28, axisY - 5); ctx.lineTo(28, axisY + 5); ctx.closePath();
  ctx.fill();
  
  // Ticks & labels
  ctx.fillStyle = '#7A90BB';
  ctx.font = '11px JetBrains Mono, monospace';
  ctx.textAlign = 'center';
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x += step) {
    const px = pbxX2px(x, W);
    if (px < 25 || px > W - 25) continue;
    ctx.beginPath();
    ctx.moveTo(px, axisY - 4); ctx.lineTo(px, axisY + 4);
    ctx.strokeStyle = '#7A90BB'; ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillText(String(x), px, axisY + 18);
  }
  // 0 label
  const zeroPx = pbxX2px(0, W);
  ctx.fillStyle = '#E4EDFF';
  ctx.font = 'bold 11px JetBrains Mono';
  ctx.fillText('0', zeroPx, axisY + 18);
  
  if (pbx.mode === 0) {
    // Draw interval A (amber) iznad osi
    drawInterval(ctx, pbx.a1, pbx.a2, pbx.a_inc_left, pbx.a_inc_right, axisY - 55, '#F59E0B', 'A', W);
    // Draw interval B (cyan) ispod prvog
    drawInterval(ctx, pbx.b1, pbx.b2, pbx.b_inc_left, pbx.b_inc_right, axisY - 30, '#22D3EE', 'B', W);
    
    // Compute intersection and union
    const inter = intervalIntersection(pbx.a1, pbx.a2, pbx.a_inc_left, pbx.a_inc_right,
                                        pbx.b1, pbx.b2, pbx.b_inc_left, pbx.b_inc_right);
    const uni = intervalUnion(pbx.a1, pbx.a2, pbx.a_inc_left, pbx.a_inc_right,
                               pbx.b1, pbx.b2, pbx.b_inc_left, pbx.b_inc_right);
    
    // Draw intersection (green) ispod osi
    if (inter) {
      drawInterval(ctx, inter.left, inter.right, inter.leftInc, inter.rightInc, axisY + 42, '#34D399', 'A ∩ B', W);
    } else {
      ctx.fillStyle = '#34D399';
      ctx.font = 'bold 12px JetBrains Mono';
      ctx.textAlign = 'left';
      ctx.fillText('A ∩ B = ∅', 28, axisY + 47);
    }
    
    // Draw union (violet) ispod toga
    uni.forEach((iv, i) => {
      drawInterval(ctx, iv.left, iv.right, iv.leftInc, iv.rightInc, axisY + 72, '#C084FC',
                   i === 0 ? 'A ∪ B' : '', W);
    });
    
    // Info panel
    const info = document.getElementById('pbx-info');
    if (info) {
      const aStr = (pbx.a_inc_left?'⟨':'(') + fmtN(pbx.a1) + ', ' + fmtN(pbx.a2) + (pbx.a_inc_right?'⟩':')');
      const bStr = (pbx.b_inc_left?'⟨':'(') + fmtN(pbx.b1) + ', ' + fmtN(pbx.b2) + (pbx.b_inc_right?'⟩':')');
      const interStr = inter ? fmtInterval(inter) : '∅';
      const uniStr = uni.map(iv => fmtInterval(iv)).join(' ∪ ');
      info.innerHTML = 'A = <strong>' + aStr + '</strong> · B = <strong>' + bStr + '</strong> · <strong>A ∩ B = ' + interStr + '</strong> · <strong>A ∪ B = ' + uniStr + '</strong>';
    }
  } else {
    // Mode 1 — aps. nejednadžba |x - c| <op> r
    const c = pbx.absC, r = pbx.absR, op = pbx.absOp;
    // "strict" : lt/gt → no boundary inclusion
    const strict = (op === 'lt' || op === 'gt');
    const outside = (op === 'gt' || op === 'ge');
    
    // Draw centar (c)
    const cPx = pbxX2px(c, W);
    ctx.fillStyle = '#F472B6';
    ctx.beginPath(); ctx.arc(cPx, axisY - 40, 4, 0, Math.PI * 2); ctx.fill();
    ctx.font = 'bold 11px JetBrains Mono';
    ctx.textAlign = 'center';
    ctx.fillText('c=' + fmtN(c), cPx, axisY - 50);
    
    // Lijevi & desni rub: c-r, c+r
    const leftX = c - r, rightX = c + r;
    
    if (!outside) {
      // Rješenje unutra: (c-r, c+r) ili ⟨c-r, c+r⟩
      drawInterval(ctx, leftX, rightX, !strict, !strict, axisY + 35, '#34D399', 'Rješenje', W);
    } else {
      // Rješenje vani: dva dijela
      drawInterval(ctx, xMin - 1, leftX, false, !strict, axisY + 35, '#F87171', 'Rješenje (lijevo)', W);
      drawInterval(ctx, rightX, xMax + 1, !strict, false, axisY + 60, '#F87171', 'Rješenje (desno)', W);
    }
    
    // Info panel
    const info = document.getElementById('pbx-info');
    if (info) {
      const opSym = {lt:'<', le:'≤', gt:'>', ge:'≥'}[op];
      const solStr = outside
        ? ((op === 'gt') ? '(-∞, ' + fmtN(leftX) + ') ∪ (' + fmtN(rightX) + ', +∞)'
                         : '(-∞, ' + fmtN(leftX) + '⟩ ∪ ⟨' + fmtN(rightX) + ', +∞)')
        : ((op === 'lt') ? '(' + fmtN(leftX) + ', ' + fmtN(rightX) + ')'
                         : '⟨' + fmtN(leftX) + ', ' + fmtN(rightX) + '⟩');
      info.innerHTML = '|x − ' + fmtN(c) + '| ' + opSym + ' ' + fmtN(r) + ' → x ∈ <strong>' + solStr + '</strong>';
    }
  }
}

function drawInterval(ctx, x1, x2, incL, incR, y, color, label, W) {
  // Ensure x1 < x2
  if (x1 > x2) { [x1, x2] = [x2, x1]; [incL, incR] = [incR, incL]; }
  // Clip to visible range
  const [xMin, xMax] = pbxRange();
  const visL = Math.max(x1, xMin - 0.5);
  const visR = Math.min(x2, xMax + 0.5);
  if (visR <= xMin || visL >= xMax) return;
  
  const px1 = pbxX2px(Math.max(x1, xMin - 0.5), W);
  const px2 = pbxX2px(Math.min(x2, xMax + 0.5), W);
  
  // Segment line
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(px1 + (incL && x1 >= xMin ? 5 : 0), y);
  ctx.lineTo(px2 - (incR && x2 <= xMax ? 5 : 0), y);
  ctx.stroke();
  
  // Left endpoint marker (only if within range)
  if (x1 >= xMin - 0.1) {
    ctx.beginPath(); ctx.arc(px1, y, 5.5, 0, Math.PI * 2);
    if (incL) {
      ctx.fillStyle = color; ctx.fill();
      ctx.strokeStyle = '#060910'; ctx.lineWidth = 1.5; ctx.stroke();
    } else {
      ctx.fillStyle = '#0A0F1A'; ctx.fill();
      ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
    }
  }
  
  // Right endpoint
  if (x2 <= xMax + 0.1) {
    ctx.beginPath(); ctx.arc(px2, y, 5.5, 0, Math.PI * 2);
    if (incR) {
      ctx.fillStyle = color; ctx.fill();
      ctx.strokeStyle = '#060910'; ctx.lineWidth = 1.5; ctx.stroke();
    } else {
      ctx.fillStyle = '#0A0F1A'; ctx.fill();
      ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
    }
  }
  
  // Label
  if (label) {
    ctx.fillStyle = color;
    ctx.font = 'bold 10px JetBrains Mono';
    ctx.textAlign = 'left';
    ctx.fillText(label, 28, y - 7);
  }
}

// ─── Drag handlers ──────────────────────────────────────────────
function pbxMouseToMath(e) {
  const canvas = document.getElementById('pbx-canvas');
  if (!canvas) return null;
  const rect = canvas.getBoundingClientRect();
  const px = (e.clientX !== undefined ? e.clientX : e.touches[0].clientX) - rect.left;
  const py = (e.clientY !== undefined ? e.clientY : e.touches[0].clientY) - rect.top;
  // Mapiranje: rect je display size, canvas ima logical size → skaliraj
  const scaleX = canvas.width / rect.width;
  const lx = px * scaleX;
  return { x: pbxPx2x(lx, canvas.width), lx, py };
}

function pbxDragStart(e) {
  if (pbx.mode !== 0) return;
  const pos = pbxMouseToMath(e);
  if (!pos) return;
  // Detect koju ručicu gađaš: a1, a2, b1, b2 (+/-0.7 tolerance)
  const tol = 0.7 / pbx.zoom;
  const candidates = [
    {id:'a1', val:pbx.a1},
    {id:'a2', val:pbx.a2},
    {id:'b1', val:pbx.b1},
    {id:'b2', val:pbx.b2}
  ];
  let best = null, bestDist = Infinity;
  for (const c of candidates) {
    const d = Math.abs(c.val - pos.x);
    if (d < bestDist) { bestDist = d; best = c.id; }
  }
  if (bestDist <= tol) {
    pbx.dragging = best;
    e.preventDefault();
  }
}

function pbxDragMove(e) {
  if (!pbx.dragging) return;
  const pos = pbxMouseToMath(e);
  if (!pos) return;
  // Snap to 0.5
  const snapped = Math.round(pos.x * 2) / 2;
  pbx[pbx.dragging] = Math.max(-10, Math.min(10, snapped));
  // Sync slider
  const slMap = {a1:'pbx-a', a2:'pbx-b', b1:'pbx-c', b2:'pbx-d'};
  const el = document.getElementById(slMap[pbx.dragging]);
  if (el) el.value = pbx[pbx.dragging];
  if (pbxDragFrame === null) {
    pbxDragFrame = requestAnimationFrame(function(){ pbxDragFrame = null; try { pbxUpdate(); } catch(e) {} });
  }
  e.preventDefault();
}

function pbxDragEnd(e) {
  if (pbx.dragging) {
    pbx.dragging = null;
    pbx.presetsUsed++;
    if (pbx.presetsUsed >= 3) {
      const d = lsLoad();
      d.pbxExplored = true;
      lsSave(d);
      updateProg();
      unlockAch('explorer', '🎨 Explorer otključan!');
  if (pbxDragFrame !== null) { cancelAnimationFrame(pbxDragFrame); pbxDragFrame = null; }
}
  }
}

// ─── Challenges ─────────────────────────────────────────────────
const PBX_CH_DATA = [
  {
    "task": "Postavi A i B tako da A ∩ B = ⟨2, 4⟩.",
    "type": "int",
    "target": [
      2,
      4,
      true,
      true
    ]
  },
  {
    "task": "Postavi A i B tako da A ∪ B = ⟨-3, 5⟩ (preklapanjem).",
    "type": "uni",
    "target": [
      -3,
      5,
      true,
      true
    ]
  },
  {
    "task": "Postavi A i B tako da A ∩ B = ∅ (prazan).",
    "type": "int_empty",
    "target": null
  },
  {
    "task": "Postavi A i B tako da B ⊂ A (B ugnježden u A).",
    "type": "nested",
    "target": null
  },
  {
    "task": "Postavi A = (-1, 5), B = (-1, 5). Što zajednički dobivaš?",
    "type": "equal",
    "target": [
      -1,
      5,
      false,
      false
    ]
  },
  {
    "task": "Postavi A i B tako da A ∩ B = (0, 1⟩.",
    "type": "int",
    "target": [
      0,
      1,
      false,
      true
    ]
  },
  {
    "task": "Postavi A = B = ⟨1, 4⟩ (jednake).",
    "type": "equal",
    "target": [
      1,
      4,
      true,
      true
    ]
  },
  {
    "task": "Postavi A tako da A ∩ B sadrži broj 0.",
    "type": "contains",
    "target": 0
  },
  {
    "task": "Postavi A i B tako da je A ∪ B = (-4, 4).",
    "type": "uni",
    "target": [
      -4,
      4,
      false,
      false
    ]
  },
  {
    "task": "Postavi A i B tako da se dodiruju u točki 3.",
    "type": "touch",
    "target": 3
  },
  {
    "task": "Postavi A i B tako da A ∪ B = (−2, 6) otvoreni.",
    "type": "uni",
    "target": [
      -2,
      6,
      false,
      false
    ]
  },
  {
    "task": "Postavi A i B jednake: A = B = (0, 2).",
    "type": "equal",
    "target": [
      0,
      2,
      false,
      false
    ]
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
  
  // Sinhroniziraj state (mode 0 samo)
  if (pbx.mode !== 0 && pbxCh.type !== 'abs_val') {
    // Za ne-abs izazove, forsiraj mode 0 ako je trenutno u 1
    msg = '⚠ Prebaci na mod "Dva intervala" za ovaj izazov.';
    fb.classList.remove('ok'); fb.classList.add('ng', 'show');
    fb.textContent = msg; return;
  }
  
  const A = {l: Math.min(pbx.a1, pbx.a2), r: Math.max(pbx.a1, pbx.a2),
             il: pbx.a1 <= pbx.a2 ? pbx.a_inc_left : pbx.a_inc_right,
             ir: pbx.a1 <= pbx.a2 ? pbx.a_inc_right : pbx.a_inc_left};
  const B = {l: Math.min(pbx.b1, pbx.b2), r: Math.max(pbx.b1, pbx.b2),
             il: pbx.b1 <= pbx.b2 ? pbx.b_inc_left : pbx.b_inc_right,
             ir: pbx.b1 <= pbx.b2 ? pbx.b_inc_right : pbx.b_inc_left};
  
  const inter = intervalIntersection(A.l, A.r, A.il, A.ir, B.l, B.r, B.il, B.ir);
  const uni = intervalUnion(A.l, A.r, A.il, A.ir, B.l, B.r, B.il, B.ir);
  
  const tol = 0.15;
  const near = (a, b) => Math.abs(a - b) < tol;
  const brCheck = (iv, tg) => iv && near(iv.left, tg[0]) && near(iv.right, tg[1]) && iv.leftInc === tg[2] && iv.rightInc === tg[3];
  
  switch (pbxCh.type) {
    case 'int':
      pass = brCheck(inter, pbxCh.target);
      msg = pass ? '✓ Savršeno — A ∩ B = ' + fmtInterval(inter)
                 : '✗ Presjek je ' + (inter ? fmtInterval(inter) : '∅') + '. Cilj: ' + fmtTarget(pbxCh.target);
      break;
    case 'uni':
      pass = uni.length === 1 && brCheck(uni[0], pbxCh.target);
      msg = pass ? '✓ Odlično — A ∪ B = ' + fmtInterval(uni[0])
                 : '✗ Unija je ' + uni.map(fmtInterval).join(' ∪ ') + '. Cilj: ' + fmtTarget(pbxCh.target);
      break;
    case 'int_empty':
      pass = !inter;
      msg = pass ? '✓ Prazan — intervali se ne preklapaju!' : '✗ Još se preklapaju. A ∩ B = ' + fmtInterval(inter);
      break;
    case 'nested':
      // B unutar A: A.l <= B.l i A.r >= B.r
      pass = A.l <= B.l + tol && A.r >= B.r - tol && !(near(A.l, B.l) && near(A.r, B.r));
      msg = pass ? '✓ B je u A (B ⊂ A).' : '✗ B nije ugnježden unutar A.';
      break;
    case 'abs_val':
      // Provjeri: je li trenutni interval rješenja u mode 1 jednak cilju
      if (pbx.mode !== 1) {
        pass = false; msg = '⚠ Prebaci u mod "Aps. nejednadžba" za ovaj izazov.';
      } else {
        const c = pbx.absC, r = pbx.absR, op = pbx.absOp;
        const strict = (op === 'lt' || op === 'gt');
        const outside = (op === 'gt' || op === 'ge');
        const lx = c - r, rx = c + r;
        const incL = !strict, incR = !strict;
        pass = !outside && near(lx, pbxCh.target[0]) && near(rx, pbxCh.target[1]) && incL === pbxCh.target[2] && incR === pbxCh.target[3];
        msg = pass ? '✓ Savršeno — rješenje: ' + (incL?'⟨':'(') + fmtN(lx) + ', ' + fmtN(rx) + (incR?'⟩':')')
                   : '✗ Trenutno: ' + (incL?'⟨':'(') + fmtN(lx) + ', ' + fmtN(rx) + (incR?'⟩':')') + '. Cilj: ' + fmtTarget(pbxCh.target);
      }
      break;
    case 'equal':
      pass = near(A.l, B.l) && near(A.r, B.r) && A.il === B.il && A.ir === B.ir
             && near(A.l, pbxCh.target[0]) && near(A.r, pbxCh.target[1]);
      msg = pass ? '✓ Jednaki intervali s točnim zagradama!' : '✗ A i B moraju biti isti (zagrade + rubovi).';
      break;
    case 'contains':
      pass = inter && ((pbxCh.target > inter.left || (near(pbxCh.target, inter.left) && inter.leftInc))
                    && (pbxCh.target < inter.right || (near(pbxCh.target, inter.right) && inter.rightInc)));
      msg = pass ? '✓ ' + fmtN(pbxCh.target) + ' je u presjeku: ' + fmtInterval(inter)
                 : '✗ ' + fmtN(pbxCh.target) + ' nije u ' + (inter ? fmtInterval(inter) : '∅');
      break;
    case 'touch':
      pass = (near(A.r, pbxCh.target) && near(B.l, pbxCh.target) && (A.ir !== B.il))
          || (near(A.l, pbxCh.target) && near(B.r, pbxCh.target) && (A.il !== B.ir));
      msg = pass ? '✓ Dodiruju se u točki ' + pbxCh.target + ' (jedan otvoren, jedan zatvoren).'
                 : '✗ Trebaju se dodirivati u točki ' + pbxCh.target + ', jedan uključen, jedan isključen.';
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

function fmtTarget(tg) {
  if (!tg || !Array.isArray(tg)) return '—';
  const L = tg[2] ? '⟨' : '(';
  const R = tg[3] ? '⟩' : ')';
  return L + tg[0] + ', ' + tg[1] + R;
}

// ═══════════════════════════════════════════════════════════════
// KALKULATOR INTERVALA (P01 — 3 moda)
// Mode 0: |x - c| <op> a — riješi aps. nejednadžbu
// Mode 1: Presjek A ∩ B
// Mode 2: Unija A ∪ B
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
  const c = parseFloat(document.getElementById('p9c-a').value);
  const op = document.getElementById('p9c-op').value;
  const a = parseFloat(document.getElementById('p9c-b').value);
  const r = document.getElementById('p9c-r');
  if (isNaN(c) || isNaN(a) || a < 0) {
    r.classList.add('show');
    r.innerHTML = '<div><span class="calc-res-val" style="color:var(--red)">Uvjet: a ≥ 0</span></div>';
    return;
  }
  
  const opSym = {lt:'<', le:'≤', gt:'>', ge:'≥'}[op];
  const strict = (op === 'lt' || op === 'gt');
  const outside = (op === 'gt' || op === 'ge');
  
  let sol, steps;
  if (a === 0) {
    if (op === 'le') {
      sol = 'x = ' + fmtN(c) + ' (samo jedna točka)';
    } else if (op === 'ge') {
      sol = 'x ∈ ℝ (svaki realni broj)';
    } else if (op === 'lt') {
      sol = '∅ (aps. vrijednost nije < 0)';
    } else {
      sol = 'ℝ \\\\ {' + fmtN(c) + '} = (−∞, ' + fmtN(c) + ') ∪ (' + fmtN(c) + ', +∞)';
    }
    steps = 'Specijalni slučaj a = 0.';
  } else if (outside) {
    const L1 = '−∞', L2 = fmtN(c - a), R1 = fmtN(c + a), R2 = '+∞';
    const incL = !strict ? '⟩' : ')';
    const incR = !strict ? '⟨' : '(';
    sol = '(' + L1 + ', ' + L2 + incL + ' ∪ ' + incR + R1 + ', ' + R2 + ')';
    steps = 'Tip: |x − c| ' + opSym + ' a → x − c ≤ −a ILI x − c ≥ a. Unija dvaju polu-beskonačnih.';
  } else {
    const bracketL = strict ? '(' : '⟨';
    const bracketR = strict ? ')' : '⟩';
    sol = bracketL + fmtN(c - a) + ', ' + fmtN(c + a) + bracketR;
    steps = 'Tip: |x − c| ' + opSym + ' a → −a ' + opSym + ' x − c ' + opSym + ' a → c − a ' + opSym + ' x ' + opSym + ' c + a.';
  }
  
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">Rješenje nejednadžbe:</span> <span class="calc-res-val">|x − ' + fmtN(c) + '| ' + opSym + ' ' + fmtN(a) + '</span></div>' +
    '<div><span class="calc-res-key">Skup rješenja:</span> <span class="calc-res-val">x ∈ ' + sol + '</span></div>' +
    '<div style="color:var(--t3);font-size:10px;margin-top:6px">' + steps + '</div>';
}

function p9calcVertex() {
  // Presjek A ∩ B
  const a1 = parseFloat(document.getElementById('p9cv-a').value);
  const a2 = parseFloat(document.getElementById('p9cv-p').value);
  const b1 = parseFloat(document.getElementById('p9cv-q').value);
  const b2 = parseFloat(document.getElementById('p9cv-q2').value);
  const r = document.getElementById('p9c-r');
  if ([a1,a2,b1,b2].some(isNaN)) { r.classList.add('show'); r.innerHTML = '<div style="color:var(--red)">Unesi sva četiri rubova.</div>'; return; }
  
  const inter = intervalIntersection(a1, a2, true, true, b1, b2, true, true);
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">A:</span> <span class="calc-res-val">⟨' + fmtN(a1) + ', ' + fmtN(a2) + '⟩</span></div>' +
    '<div><span class="calc-res-key">B:</span> <span class="calc-res-val">⟨' + fmtN(b1) + ', ' + fmtN(b2) + '⟩</span></div>' +
    '<div><span class="calc-res-key">A ∩ B:</span> <span class="calc-res-val">' + (inter ? fmtInterval(inter) : '∅ (prazan — ne preklapaju se)') + '</span></div>' +
    '<div style="color:var(--t3);font-size:10px;margin-top:6px">Pravilo: lijevi rub presjeka = max(a₁, b₁), desni = min(a₂, b₂). Ako lijevi > desni → prazan.</div>';
}

function p9calcFromT() {
  // Unija A ∪ B
  const a1 = parseFloat(document.getElementById('p9cft-p').value);
  const a2 = parseFloat(document.getElementById('p9cft-q').value);
  const b1 = parseFloat(document.getElementById('p9cft-px').value);
  const b2 = parseFloat(document.getElementById('p9cft-py').value);
  const r = document.getElementById('p9c-r');
  if ([a1,a2,b1,b2].some(isNaN)) { r.classList.add('show'); r.innerHTML = '<div style="color:var(--red)">Unesi sva četiri rubova.</div>'; return; }
  
  const uni = intervalUnion(a1, a2, true, true, b1, b2, true, true);
  const uniStr = uni.map(fmtInterval).join(' ∪ ');
  r.classList.add('show');
  r.innerHTML =
    '<div><span class="calc-res-key">A:</span> <span class="calc-res-val">⟨' + fmtN(a1) + ', ' + fmtN(a2) + '⟩</span></div>' +
    '<div><span class="calc-res-key">B:</span> <span class="calc-res-val">⟨' + fmtN(b1) + ', ' + fmtN(b2) + '⟩</span></div>' +
    '<div><span class="calc-res-key">A ∪ B:</span> <span class="calc-res-val">' + uniStr + '</span></div>' +
    '<div style="color:var(--t3);font-size:10px;margin-top:6px">Pravilo: ako se preklapaju → jedan interval. Ako ne → ostaju dva.</div>';
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
let quizStreak = 0;
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
      '<div class="qb-exp" id="qb-exp' + item.idx + '"><strong>Objašnjenje:</strong> ' + q.e + '</div>' +
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
  (function(){
    // Drag safety nets
    document.addEventListener('mouseup', pbxDragEnd);
    document.addEventListener('touchend', pbxDragEnd);
    document.addEventListener('touchcancel', pbxDragEnd);
    window.addEventListener('blur', pbxDragEnd);
    document.addEventListener('pointerup', pbxDragEnd);
    document.addEventListener('keydown', function(ev){
      if (ev.key === 'Escape' && pbx.dragging) pbxDragEnd(ev);
    });
  })();

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
      msg.innerHTML = '← Stigao/la si iz poglavlja <strong>' + from + '</strong>. Dobrodošao/la u skupove brojeva.';
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

// ─── RESTORE TAB ───────────────────────────────────────────────
// RESTORE TAB: disabled — always start on tab 0


/* ═══ PREMIUM GATES JS (bulk-injected) ═══ */
window.__pwTier = 'pro';
window.__pwChapter = 'P01';
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
    <div class="paywall-note"><strong>7 dana besplatno</strong> · otkaži bilo kada</div>
  </div>
</div>
</body>`;

export const P01_META = {
  code: 'P01',
  title: 'Skupovi i brojevi',
  filename: 'Maturiraj_MatB_P01_FIXED.html',
};

export default P01_HTML;