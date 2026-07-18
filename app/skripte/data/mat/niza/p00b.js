// Maturiraj MatB — P00B · Kalkulator &amp; alati
// Auto-generated from Maturiraj_MatB_P00B_FIXED.html
// Sadrži: cijeli HTML, CSS, JS runtime, sve podatke

export const P00B_HTML = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Što te čeka na državnoj maturi Mat B — struktura ispita, bodovi po poglavljima, plan učenja. Maturiraj.hr">
<meta name="theme-color" content="#F59E0B">
<title>Maturiraj.hr — Mat B · P00B · Kalkulator & alati</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
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
  --t1:#E4EDFF;--t2:#7A90BB;--t3:#364060;
  --font:'Plus Jakarta Sans',system-ui,sans-serif;--mono:'JetBrains Mono',monospace;
  --r1:4px;--r2:8px;--r3:12px;--r4:16px;--r5:24px;--sb:252px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased;overflow-x:clip;overscroll-behavior:none}
a{color:inherit;text-decoration:none}
.shell{display:block;min-height:100vh}
#scroll-prog{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--cyan));z-index:999;width:0%;transition:width .1s linear;pointer-events:none}
#scroll-top{position:fixed;bottom:24px;right:24px;width:42px;height:42px;background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;border:none;border-radius:50%;font-size:18px;cursor:pointer;z-index:100;box-shadow:0 4px 16px rgba(245,158,11,0.3);opacity:0;transform:translateY(14px);transition:all .25s cubic-bezier(.4,0,.2,1);display:flex;align-items:center;justify-content:center;pointer-events:none}
#scroll-top.show{opacity:1;transform:translateY(0);pointer-events:auto}
#scroll-top:hover{transform:translateY(-3px)}

/* ── SIDEBAR ── */
.sidebar{width:var(--sb);flex-shrink:0;background:var(--sur);border-right:1px solid var(--bd);position:fixed;top:0;left:0;height:100vh;overflow-y:auto;overflow-x:hidden;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bdm) transparent;z-index:200;padding:18px 0}
.sidebar::-webkit-scrollbar{width:4px}.sidebar::-webkit-scrollbar-thumb{background:var(--bdm);border-radius:4px}
.sb-brand{padding:16px 14px 13px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--amber),var(--cyan));border-radius:var(--r2);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 18px rgba(245,158,11,0.3)}
.sb-logo svg{width:14px;height:14px}
.sb-name{font-size:13px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.sb-sub{font-size:10px;color:var(--t3);margin-top:1px;font-family:var(--mono)}
.sb-hamburger{display:none;position:fixed;top:12px;left:12px;z-index:200;width:36px;height:36px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px}
.sb-hamburger span{display:block;width:16px;height:1.5px;background:var(--t2);border-radius:1px;transition:all .2s}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:150;backdrop-filter:blur(2px)}
.sb-overlay.show{display:block}
.sidebar.mobile-open{transform:translateX(0)!important}
.sb-progress{display:none;margin-top:6px;align-items:center;gap:6px;padding-left:0}
.sb-item.active .sb-progress{display:flex}
.sb-prog-track{flex:1;height:3px;background:var(--bdm);border-radius:2px;overflow:hidden}
.sb-prog-fill{height:100%;background:linear-gradient(90deg,var(--amber),var(--cyan));border-radius:2px;transition:width .5s cubic-bezier(.4,0,.2,1);width:0%}
.sb-prog-pct{font-family:var(--mono);font-size:8.5px;color:var(--t3);font-weight:700;min-width:22px;text-align:right}
.sb-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:15px 14px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 14px 7px 18px;font-size:11.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.35;text-decoration:none;position:relative}
.sb-item:hover{background:var(--glow-b);color:var(--t1)}
.sb-item.active{color:var(--amber);background:var(--dim-a);border-left-color:var(--amber);font-weight:600}
.sb-dot{display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:all .12s}
.sb-item.active .sb-dot{background:var(--amber);box-shadow:0 0 6px var(--amber)}
.sb-footer{margin-top:auto;padding:10px 14px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.7;font-family:var(--mono)}
.sb-item.done-chapter{color:var(--green)!important;border-left-color:var(--green)!important}
.sb-item.done-chapter .sb-dot{background:var(--green);opacity:1}
.sb-item.done-chapter::after{content:'✓';font-size:9px;margin-left:auto;color:var(--green);font-weight:700;font-family:var(--mono)}

/* ── MAIN ── */
.main{flex:1;min-width:0;margin-left:var(--sb)}
.content-wrap{max-width:860px;width:100%;margin:0 auto;padding:32px 44px 120px}
.bc{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--t3);margin-bottom:22px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-cur{color:var(--amber)}

/* ── TABS ── */
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content}
.tab{padding:7px 16px;font-size:11.5px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}
.tab.on{background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;font-weight:700;box-shadow:0 2px 16px rgba(245,158,11,0.3)}
.tab .tb{display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;font-size:8px;margin-left:5px;background:var(--dim-g);color:var(--green);font-weight:700;opacity:0;transition:opacity .3s;vertical-align:middle}
.tab .tb.done{opacity:1}
.layer{display:none}.layer.on{display:block}

/* ── HERO ── */
.hero{margin-bottom:26px;padding:30px 34px;background:var(--card);border:1px solid var(--bdm);border-radius:20px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--cyan),var(--indigo),transparent)}
.hero-orb{position:absolute;top:-60px;right:-60px;width:280px;height:280px;background:radial-gradient(circle,rgba(245,158,11,0.055) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-orb2{position:absolute;bottom:-50px;left:20%;width:200px;height:200px;background:radial-gradient(circle,rgba(34,211,238,0.03) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-eyebrow{font-family:var(--mono);font-size:9.5px;color:var(--amber);letter-spacing:2px;margin-bottom:11px;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.hero-eyebrow::before{content:'';display:inline-block;width:18px;height:1px;background:var(--amber);opacity:.5}
.hero-title{font-size:27px;font-weight:800;color:var(--t1);letter-spacing:-1px;line-height:1.12;margin-bottom:8px}
.hero-title span{background:linear-gradient(135deg,var(--amber),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:12.5px;color:var(--t2);font-family:var(--mono);margin-bottom:18px;line-height:1.65}
.hero-meta{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px}
.hchip{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;letter-spacing:.3px;font-weight:600}
.hchip.a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.hchip.c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.hchip.r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.hchip.g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.pt{height:2px;background:var(--bd);border-radius:1px;overflow:visible;width:100%;max-width:360px;position:relative}
.pb{height:100%;background:linear-gradient(90deg,var(--amber),var(--cyan));border-radius:1px;position:relative;transition:width .6s cubic-bezier(.4,0,.2,1)}
.pb::after{content:'';position:absolute;right:-3px;top:-3px;width:8px;height:8px;background:var(--cyan);border-radius:50%;box-shadow:0 0 10px var(--cyan)}

/* ── SEC HEADER ── */
.sec-hdr{display:flex;align-items:center;gap:14px;margin:30px 0 17px}
.sec-line{flex:1;height:1px;background:var(--bd)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase;padding:4px 12px;border:1px solid var(--bd-a);border-radius:20px;background:var(--dim-a);white-space:nowrap}

/* ── BOX TYPES ── */
.box-int{background:linear-gradient(135deg,rgba(245,158,11,0.055),rgba(34,211,238,0.02));border:1px solid var(--bd-a);border-radius:var(--r4);padding:17px 20px;margin:13px 0}
.box-int-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--amber);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:7px}
.box-int-lbl::before{content:'◆';font-size:7px}
.box-int-txt{font-size:14px;color:var(--t1);line-height:1.82;font-weight:500}
.box-int-txt em{color:var(--cyan);font-style:normal;font-weight:600}
.box-tip{background:var(--dim-c);border:1px solid var(--bd-c);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bt-ico{font-size:15px;flex-shrink:0;margin-top:1px}.bt-body{flex:1}
.bt-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--cyan);margin-bottom:5px}
.bt-txt{font-size:13px;line-height:1.78;color:var(--t2)}.bt-txt strong{color:var(--cyan)}
.box-warn{background:var(--dim-r);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bw-ico{font-size:16px;flex-shrink:0;margin-top:1px}.bw-body{flex:1}
.bw-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);margin-bottom:5px}
.bw-txt{font-size:13px;line-height:1.78;color:var(--t2)}.bw-txt strong{color:var(--red)}
.box-20{background:linear-gradient(135deg,rgba(52,211,153,0.065),rgba(34,211,238,0.02));border:1px solid var(--bd-g);border-radius:var(--r4);padding:16px 22px;margin:16px 0}
.b20-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:7px}
.b20-lbl::before{content:'⚡';font-size:11px}
.b20-list{list-style:none;display:flex;flex-direction:column;gap:7px}
.b20-item{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t1);line-height:1.6}
.b20-dot{width:6px;height:6px;background:var(--green);border-radius:1px;flex-shrink:0;margin-top:5px;transform:rotate(45deg)}

/* ── STAT CARDS — upgraded ── */
.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;margin:18px 0}
.sc{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;text-align:center;transition:all .2s;position:relative;overflow:hidden}
.sc::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--sc-color,linear-gradient(90deg,var(--amber),var(--cyan)))}
.sc:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.2)}
.sc-ico{font-size:22px;margin-bottom:8px;display:block}
.sc-num{font-family:var(--mono);font-size:32px;font-weight:800;letter-spacing:-1px;margin-bottom:4px}
.sc-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px}
.sc-sub{font-family:var(--mono);font-size:9px;color:var(--t3);margin-top:3px;opacity:.7}

/* ── BK FILTER ── */
.bk-filter{display:flex;gap:6px;margin-bottom:2px;flex-wrap:wrap}
.bk-f-btn{padding:4px 12px;border:1px solid var(--bdm);background:transparent;color:var(--t2);border-radius:var(--r1);font-family:var(--mono);font-size:10px;font-weight:600;cursor:pointer;transition:all .14s}
.bk-f-btn:hover{color:var(--t1);border-color:var(--bdl)}
.bk-f-btn.on{background:var(--dim-a);border-color:var(--bd-a);color:var(--amber)}
.bk-total{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto;align-self:center;flex-shrink:0}
.bk-total span{color:var(--amber);font-weight:700}

/* ── OCJENSKI KALKULATOR ── */
.ocj-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.ocj-head{padding:11px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between}
.ocj-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase}
.ocj-body{padding:18px}
.ocj-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px}
.ocj-card{background:var(--inp);border:2px solid var(--bdm);border-radius:var(--r2);padding:12px 8px;text-align:center;cursor:pointer;transition:all .18s}
.ocj-card:hover{border-color:var(--bd-a)}
.ocj-card.on.grade-2{border-color:var(--red);background:var(--dim-r)}
.ocj-card.on.grade-3{border-color:var(--amber);background:var(--dim-a)}
.ocj-card.on.grade-4{border-color:var(--cyan);background:var(--dim-c)}
.ocj-card.on.grade-5{border-color:var(--green);background:var(--dim-g)}
.ocj-grade{font-family:var(--mono);font-size:24px;font-weight:800;margin-bottom:4px}
.ocj-grade.g2{color:var(--red)}.ocj-grade.g3{color:var(--amber)}
.ocj-grade.g4{color:var(--cyan)}.ocj-grade.g5{color:var(--green)}
.ocj-name{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:.5px}
.ocj-result{display:none;padding:14px 16px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);animation:fadeSlide .25s ease}
.ocj-result.show{display:block}
.ocj-result-head{font-family:var(--mono);font-size:11px;color:var(--t2);margin-bottom:10px}
.ocj-result-big{font-family:var(--mono);font-size:28px;font-weight:800;margin-bottom:6px}
.ocj-result-focus{font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.8}
.ocj-result-focus a{color:var(--amber);text-decoration:none;font-weight:700}

/* ── TIME MANAGER ── */
.time-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.time-head{padding:11px 18px;border-bottom:1px solid var(--bd)}
.time-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--cyan);text-transform:uppercase}
.time-body{padding:16px 18px}
.time-bar-row{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.time-lbl{font-family:var(--mono);font-size:11px;color:var(--t2);min-width:130px;flex-shrink:0}
.time-bar-outer{flex:1;height:22px;background:var(--bd);border-radius:var(--r1);overflow:hidden;position:relative}
.time-bar-inner{height:100%;border-radius:var(--r1);display:flex;align-items:center;justify-content:flex-end;padding-right:8px;transition:width .8s cubic-bezier(.4,0,.2,1)}
.time-bar-val{font-family:var(--mono);font-size:10px;font-weight:700;color:#060910}
.time-total{font-family:var(--mono);font-size:11px;color:var(--t3);text-align:right;padding-top:4px;border-top:1px solid var(--bd)}

/* ── PADAJU NA ── */
.padaju-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:14px 0}
.padaju-item{background:var(--card);border:1px solid var(--bd-r);border-radius:var(--r3);padding:12px 14px;transition:border-color .15s}
.padaju-item:hover{border-color:var(--red)}
.padaju-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--red);margin-bottom:4px;letter-spacing:.5px}
.padaju-txt{font-size:13px;color:var(--t1);font-weight:600;margin-bottom:3px;line-height:1.3}
.padaju-sub{font-family:var(--mono);font-size:11px;color:var(--t3);line-height:1.5}

/* ── PLAN SAVED ── */
.plan-saved-tag{display:none;font-family:var(--mono);font-size:9px;color:var(--green);padding:2px 8px;border:1px solid var(--bd-g);border-radius:var(--r1);background:var(--dim-g)}
.plan-saved-tag.show{display:inline-flex;align-items:center;gap:4px}

/* ── RESPONSIVE ── */
.bk-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.bk-head{padding:12px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.bk-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase}
.bk-legend{display:flex;gap:12px}
.bk-leg{display:flex;align-items:center;gap:5px;font-family:var(--mono);font-size:9px;color:var(--t3)}
.bk-dot{width:8px;height:8px;border-radius:2px;flex-shrink:0}
.bk-list{padding:8px 0}
.bk-row{display:flex;align-items:center;gap:12px;padding:8px 18px;cursor:pointer;transition:background .12s;border-bottom:1px solid var(--bd)}
.bk-row:last-child{border-bottom:none}
.bk-row:hover{background:var(--hov)}
.bk-row.expanded{background:var(--hov)}
.bk-prio{width:6px;height:28px;border-radius:2px;flex-shrink:0}
.bk-prio.high{background:linear-gradient(180deg,var(--red),#F05050)}
.bk-prio.med{background:linear-gradient(180deg,var(--amber),#E09000)}
.bk-prio.low{background:linear-gradient(180deg,var(--cyan),#16B8D0)}
.bk-name{flex:1;font-size:13px;color:var(--t1);font-weight:500;line-height:1.3}
.bk-tag{font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px 7px;border:1px solid var(--bdm);border-radius:var(--r1)}
.bk-pts{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--amber);min-width:52px;text-align:right}
.bk-bar-wrap{width:90px;flex-shrink:0}
.bk-bar{height:5px;background:var(--bd);border-radius:3px;overflow:hidden}
.bk-bar-fill{height:100%;border-radius:3px;transition:width .6s cubic-bezier(.4,0,.2,1)}
.bk-bar-fill.high{background:linear-gradient(90deg,var(--red),#F87171)}
.bk-bar-fill.med{background:linear-gradient(90deg,var(--amber),#F0AB30)}
.bk-bar-fill.low{background:linear-gradient(90deg,var(--cyan),var(--blue))}
.bk-detail{display:none;padding:12px 18px 14px 44px;background:rgba(245,158,11,0.02);border-top:1px solid var(--bd);font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.8;animation:fadeSlide .2s ease}
.bk-detail.show{display:block}
.bk-chevron{font-size:10px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.bk-row.expanded .bk-chevron{transform:rotate(90deg)}

/* ── A vs B ── */
.ab-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0}
.ab-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.ab-head{padding:10px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.ab-head.a{background:var(--dim-r);color:var(--red)}
.ab-head.b{background:var(--dim-a);color:var(--amber)}
.ab-body{padding:12px 14px;display:flex;flex-direction:column;gap:7px}
.ab-row{font-family:var(--mono);font-size:11.5px;color:var(--t2);display:flex;gap:8px;align-items:flex-start;line-height:1.5}
.ab-row::before{content:'·';color:var(--t3);flex-shrink:0}

/* ── ISPIT TIMELINE ── */
.timeline{position:relative;padding-left:28px;margin:16px 0}
.timeline::before{content:'';position:absolute;left:8px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,var(--amber),var(--cyan),transparent)}
.tl-item{position:relative;margin-bottom:18px}
.tl-dot{position:absolute;left:-24px;top:4px;width:12px;height:12px;border-radius:50%;border:2px solid var(--amber);background:var(--bg);transition:all .2s}
.tl-item:hover .tl-dot{background:var(--amber);box-shadow:0 0 10px rgba(245,158,11,0.4)}
.tl-head{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:3px}
.tl-sub{font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.6}
.tl-tag{display:inline-block;margin-top:4px;font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:var(--r1);background:var(--dim-a);color:var(--amber);border:1px solid var(--bd-a)}

/* ── RESTORE BANNER ── */
.restore-banner{display:none;align-items:center;justify-content:space-between;gap:12px;padding:12px 18px;background:var(--dim-a);border:1px solid var(--bd-a);border-radius:var(--r3);margin-bottom:18px;flex-wrap:wrap}
.restore-banner.show{display:flex;animation:fadeSlide .3s ease}
.rb-txt{font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:1.6}
.rb-txt strong{color:var(--amber)}
.rb-actions{display:flex;gap:8px;flex-shrink:0}
.rb-btn{padding:6px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:10.5px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s}
.rb-btn.primary{background:var(--amber);color:#060910;border-color:var(--amber)}
.rb-btn.primary:hover{opacity:.88}
.rb-btn.secondary{background:transparent;color:var(--t2);border-color:var(--bdm)}
.rb-btn.secondary:hover{border-color:var(--bd-a);color:var(--amber)}

/* ── PLAN UČENJA ── */
.plan-selector{display:flex;gap:8px;flex-wrap:wrap;margin:16px 0}
.plan-btn{padding:8px 18px;border:1.5px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s}
.plan-btn:hover{border-color:var(--bd-a);color:var(--amber)}
.plan-btn.on{background:var(--dim-a);border-color:var(--amber);color:var(--amber)}
.plan-output{display:none;margin-top:20px;animation:fadeSlide .3s ease}
.plan-output.show{display:block}
.plan-week{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:10px;overflow:hidden;transition:border-color .15s}
.plan-week:hover{border-color:var(--bd-a)}
.plan-week-head{padding:11px 16px;display:flex;align-items:center;justify-content:space-between;gap:10px;cursor:pointer}
.plan-week-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--amber);letter-spacing:1.5px;text-transform:uppercase}
.plan-week-focus{font-family:var(--mono);font-size:11px;color:var(--t2)}
.plan-week-body{display:none;padding:0 16px 14px;border-top:1px solid var(--bd)}
.plan-week-body.show{display:block;animation:fadeSlide .2s ease}
.plan-day{display:flex;gap:10px;align-items:flex-start;padding:7px 0;border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:11.5px}
.plan-day:last-child{border-bottom:none}
.plan-day-lbl{color:var(--amber);min-width:32px;font-weight:700;flex-shrink:0}
.plan-day-txt{color:var(--t2);line-height:1.5}
.plan-day-tag{font-size:9px;padding:1px 6px;border-radius:var(--r1);background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g);margin-left:6px;white-space:nowrap}

/* ── CHECKPOINT ── */
.checkpoint{background:var(--card);border:1px solid var(--bd-g);border-radius:var(--r4);overflow:hidden;margin:22px 0}
.cp-head{padding:13px 18px;border-bottom:1px solid var(--bd);background:rgba(52,211,153,0.04);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.cp-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--green);text-transform:uppercase}
.cp-cnt{font-family:var(--mono);font-size:10px;color:var(--t3);font-weight:700}
.cp-items{padding:14px 18px;display:flex;flex-direction:column;gap:8px}
.cp-item{display:flex;align-items:center;gap:12px;cursor:pointer;padding:9px 13px;border-radius:var(--r2);transition:all .15s;border:1px solid transparent}
.cp-item:hover{background:var(--hov);border-color:var(--bdm)}
.cp-item.done-item .cp-txt{color:var(--green);text-decoration:line-through;text-decoration-color:rgba(52,211,153,0.4)}
.cp-item.done-item{border-color:var(--bd-g);background:rgba(52,211,153,0.02)}
.cp-check{width:22px;height:22px;border:1.5px solid var(--bdm);border-radius:var(--r1);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .2s;font-size:12px;color:transparent}
.cp-check.done{background:var(--green);border-color:var(--green);color:#060910;font-weight:700}
.cp-txt{font-size:13px;color:var(--t2);line-height:1.5}
.cp-foot{padding:11px 18px;border-top:1px solid var(--bd);font-family:var(--mono);font-size:11px;color:var(--t3);display:flex;align-items:center;gap:10px;flex-wrap:wrap}
#cp-ready{background:linear-gradient(135deg,var(--green),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700;display:none}

/* ── NAV ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:32px;padding-top:20px;border-top:1px solid var(--bd)}
.nb{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:11.5px;color:var(--t2);cursor:pointer;padding:9px 15px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;font-weight:600}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;border-color:transparent;font-weight:700;box-shadow:0 3px 16px rgba(245,158,11,0.25)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}
.nb.off{opacity:.22;pointer-events:none}

/* ── BK DONE ROW ── */
.bk-row.done-row .bk-name{color:var(--green)}
.bk-row.done-row .bk-prio{background:var(--green)!important}
.bk-row.done-row::after{content:'✓';font-family:var(--mono);font-size:10px;font-weight:700;color:var(--green);margin-left:4px;flex-shrink:0}

/* ── PLAN CHEVRON ── */
.plan-week-chevron{font-family:var(--mono);font-size:13px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.plan-week-chevron.open{transform:rotate(90deg)}

/* ── L2 GOAL SUMMARY ── */
.goal-summary{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:18px 22px;margin-bottom:22px;position:relative;overflow:hidden;transition:border-color .2s}
.goal-summary::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--gs-color,linear-gradient(90deg,var(--amber),var(--cyan)))}
.goal-summary.has-data{border-color:var(--bd-a)}
.goal-summary-empty{font-family:var(--mono);font-size:12px;color:var(--t3);text-align:center;padding:8px 0}
.goal-summary-inner{display:flex;align-items:center;gap:20px;flex-wrap:wrap}
.goal-summary-grade{font-family:var(--mono);font-size:52px;font-weight:800;line-height:1;flex-shrink:0}
.goal-summary-info{flex:1;min-width:160px}
.goal-summary-title{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:4px}
.goal-summary-pts{font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:8px}
.goal-summary-plan-lbl{font-family:var(--mono);font-size:11px;color:var(--t3)}
.goal-summary-plan-lbl span{color:var(--amber);font-weight:700}
.goal-summary-edit{font-family:var(--mono);font-size:9px;color:var(--t3);cursor:pointer;text-decoration:underline;flex-shrink:0;align-self:flex-start;padding-top:4px}
.goal-summary-edit:hover{color:var(--amber)}

/* ── RESPONSIVE ── */
@media(max-width:900px){.content-wrap{padding:26px 22px 80px}}
@media(max-width:720px){
  .sidebar{display:none;position:fixed;z-index:160;height:100vh;transform:translateX(-100%);transition:transform .25s.main{margin-left:0}}
  .sidebar.mobile-open{display:flex;transform:translateX(0)}
  .sb-hamburger{display:flex}
  .content-wrap{padding:18px 14px 80px}
  .hero{padding:22px 20px}.hero-title{font-size:24px}
  .ab-grid{grid-template-columns:1fr}
  .sg{grid-template-columns:repeat(2,1fr)}
  .tabs{width:100%}.tab{flex:1;text-align:center;font-size:11px;padding:7px 4px}
  .bk-bar-wrap{display:none}
  .goal-summary-inner{flex-direction:column;align-items:flex-start}
}
@media(max-width:480px){.sg{grid-template-columns:1fr}.tab span{display:none}.ocj-grid{grid-template-columns:repeat(2,1fr)}}
@keyframes fadeSlide{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
@keyframes barGrow{from{width:0}to{width:var(--w)}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}

/* ════════════════════════════════════
   DESKTOP (min-width: 1024px)
   ════════════════════════════════════ */
@media(min-width:1024px){
  :root{--sb:280px}
  .sidebar{width:280px}
  .content-wrap{max-width:920px;padding:40px 56px 120px}

  /* Hero */
  .hero-title{font-size:clamp(30px,3.5vw,46px)}
  .hero-sub{font-size:15px;max-width:660px}

  /* Stat kartice — 3 kolone */
  .sg{grid-template-columns:repeat(3,1fr)}

  /* Bodovna karta — širi bar */
  .bk-bar-wrap{width:130px}
  .bk-row{padding:9px 22px;gap:14px}
  .bk-name{font-size:13.5px}
  .bk-pts{min-width:60px}

  /* Po-poglavlju grid — 3 kolone */
  .ab-grid{grid-template-columns:repeat(3,1fr)}

  /* Ocjenivanje grid — 5 kartica u redu */
  .ocj-grid{grid-template-columns:repeat(5,1fr)}

  /* Padajući zadaci — 3 kolone */
  .padaju-grid{grid-template-columns:repeat(3,1fr)}

  /* Vremenska raspodjela */
  .time-bar-row{gap:16px}
  .time-body{padding:20px 24px}

  /* Goal summary inline */
  .goal-summary{padding:22px 28px}
  .goal-summary-inner{gap:28px}

  /* Plan tjedan */
  .plan-week-head{padding:13px 20px}
  .plan-week-body{padding:0 20px 16px}

  /* Sidebar */
  .tabs{font-size:14px}
  #scroll-top{bottom:32px;right:32px;width:48px;height:48px;font-size:20px}
}

/* ════════════════════════════════════
   WIDE DESKTOP (min-width: 1280px)
   ════════════════════════════════════ */
@media(min-width:1280px){
  :root{--sb:300px}
  .content-wrap{max-width:980px;padding:44px 64px 120px}
  .hero-title{font-size:clamp(34px,3vw,50px)}
  .bk-bar-wrap{width:160px}
  .ab-grid{grid-template-columns:repeat(4,1fr)}
  .sb-item{font-size:12.5px}
}

/* ════════════════════════════════════
   TABLET (768px – 1023px)
   ════════════════════════════════════ */
@media(min-width:768px) and (max-width:1023px){
  .content-wrap{max-width:720px;padding:32px 36px 100px}
  .sg{grid-template-columns:repeat(2,1fr)}
  .ab-grid{grid-template-columns:repeat(2,1fr)}
  .ocj-grid{grid-template-columns:repeat(4,1fr)}
  .padaju-grid{grid-template-columns:repeat(2,1fr)}
  .bk-bar-wrap{width:110px}
}

/* ════════════════════════════════════
   MOBILE (max-width: 480px)
   ════════════════════════════════════ */
@media(max-width:480px){
  /* Layout */
  .content-wrap{padding:14px 12px 80px}
  .bc{font-size:10px;margin-bottom:10px;flex-wrap:wrap;gap:2px}

  /* Hero */
  .hero{padding:20px 18px 22px}
  .hero-eyebrow{font-size:9px;letter-spacing:1px}
  .hero-title{font-size:24px;line-height:1.15;letter-spacing:-.5px}
  .hero-sub{font-size:13px;line-height:1.6}
  .hero-meta{gap:5px;margin-top:12px}
  .hchip{font-size:9px;padding:3px 8px}

  /* Tabs */
  .tabs{gap:3px}
  .tab{font-size:11px;padding:8px 7px}
  .tab span{display:none}

  /* Stat kartice */
  .sg{grid-template-columns:1fr 1fr;gap:8px}
  .sc{padding:12px 10px}
  .sc-num{font-size:20px}
  .sc-lbl{font-size:10px}
  .sc-sub{font-size:9.5px}

  /* Box komponente */
  .box-int{padding:14px 16px}
  .box-int-txt{font-size:13px;line-height:1.65}
  .box-warn{padding:12px 14px;gap:10px}
  .bw-title{font-size:12px}
  .bw-txt{font-size:12px}
  .box-tip{padding:12px 14px;gap:10px}

  /* ── P00B-SPECIFIČNO: Bodovna karta (bk) ── */
  .bk-wrap{border-radius:var(--r3)}
  .bk-head{padding:10px 12px;flex-wrap:wrap;gap:6px}
  .bk-row{padding:7px 12px;gap:8px}
  .bk-name{font-size:12px;line-height:1.3}
  .bk-pts{font-size:11.5px;min-width:42px}
  .bk-bar-wrap{width:60px;flex-shrink:0}
  .bk-prio{width:5px;height:22px}
  .bk-tag{font-size:8px;padding:2px 5px;display:none} /* Sakrij na mob */
  .bk-filter{gap:5px;margin-bottom:6px}
  .bk-legend{gap:8px;flex-wrap:wrap}
  .bk-total{font-size:9px}
  .bk-detail{padding:8px 12px;font-size:11.5px}

  /* ── P00B-SPECIFIČNO: Po-poglavlju grid (ab) ── */
  .ab-grid{grid-template-columns:1fr;gap:8px;margin:12px 0}
  .ab-card{border-radius:var(--r2)}
  .ab-head{padding:8px 12px;font-size:9.5px}
  .ab-body{padding:10px 12px;gap:6px}
  .ab-row{font-size:11px;gap:6px}

  /* ── P00B-SPECIFIČNO: Ocjenivanje (ocj) ── */
  .ocj-wrap{border-radius:var(--r3)}
  .ocj-head{padding:10px 12px;flex-wrap:wrap;gap:6px}
  .ocj-grid{grid-template-columns:repeat(2,1fr);gap:6px;margin-bottom:12px}
  .ocj-card{padding:10px 6px;border-radius:var(--r2)}
  .ocj-grade{font-size:20px;margin-bottom:2px}
  .ocj-name{font-size:10px}
  .ocj-result{padding:12px 14px}
  .ocj-result-big{font-size:22px;margin-bottom:4px}
  .ocj-result-head{font-size:10px}
  .ocj-result-focus{font-size:12px}
  .ocj-title{font-size:11px}

  /* ── P00B-SPECIFIČNO: Padajući zadaci ── */
  .padaju-grid{grid-template-columns:1fr 1fr;gap:6px;margin:10px 0}
  .padaju-item{padding:10px 11px;border-radius:var(--r2)}
  .padaju-num{font-size:9.5px;margin-bottom:3px}
  .padaju-txt{font-size:12px;line-height:1.3}
  .padaju-sub{font-size:10px}

  /* ── P00B-SPECIFIČNO: Plan učenja ── */
  .plan-selector{gap:6px;margin:12px 0;flex-wrap:wrap}
  .plan-btn{font-size:11px;padding:7px 12px}
  .plan-week{border-radius:var(--r2);margin-bottom:8px}
  .plan-week-head{padding:10px 12px;font-size:12px}
  .plan-week-num{font-size:9px}
  .plan-week-focus{font-size:10px}
  .plan-week-body{padding:0 12px 12px}
  .plan-day{padding:6px 0;gap:8px}
  .plan-day-lbl{font-size:11px;min-width:26px}
  .plan-day-txt{font-size:12px;line-height:1.5}
  .plan-day-tag{font-size:9px;padding:2px 6px}
  .plan-saved-tag{font-size:9px}
  .plan-output{margin-top:14px}

  /* ── P00B-SPECIFIČNO: Goal summary ── */
  .goal-summary{padding:14px 16px;border-radius:var(--r3)}
  .goal-summary-inner{gap:12px;flex-wrap:wrap}
  .goal-summary-title{font-size:16px}
  .goal-summary-pts{font-size:11px;margin-bottom:6px}
  .goal-summary-grade{font-size:13px}
  .goal-summary-info{font-size:11px}
  .goal-summary-edit{font-size:10px;padding:5px 10px}

  /* ── P00B-SPECIFIČNO: Timeline (tl) ── */
  .timeline{padding-left:20px}
  .tl-dot{left:-20px;width:10px;height:10px}
  .tl-head{font-size:12.5px}
  .tl-sub{font-size:11px;line-height:1.55}
  .tl-tag{font-size:8.5px;padding:2px 6px}

  /* ── P00B-SPECIFIČNO: Vremenska raspodjela (time) ── */
  .time-wrap{border-radius:var(--r3)}
  .time-head{padding:10px 12px}
  .time-title{font-size:9.5px}
  .time-body{padding:12px 12px}
  .time-bar-row{gap:8px;margin-bottom:8px}
  .time-lbl{font-size:10px;min-width:55px}
  .time-bar-outer{height:18px;border-radius:var(--r1)}
  .time-bar-val{font-size:9px}
  .time-total{font-size:11px}

  /* Checkpoint */
  .checkpoint{padding:14px}
  .cp-head{margin-bottom:14px;flex-wrap:wrap;gap:6px}
  .cp-title{font-size:12.5px}
  .cp-item{padding:9px 10px;gap:10px}
  .cp-check{width:26px;height:26px;font-size:10px;flex-shrink:0}
  .cp-txt{font-size:12.5px}
  .cp-foot{font-size:12px;padding-top:12px}

  /* Nav */
  .nav-row{flex-direction:column;gap:8px}
  .nb{width:100%;text-align:center;justify-content:center}
  .sb-hamburger{top:14px;left:14px;width:36px;height:36px}
}

/* ════════════════════════════════════
   VERY SMALL (max-width: 360px)
   ════════════════════════════════════ */
@media(max-width:360px){
  .content-wrap{padding:12px 10px 70px}
  .hero{padding:16px 14px 18px}
  .hero-title{font-size:21px}
  .tab{font-size:10px;padding:7px 5px}
  .bk-bar-wrap{width:44px}
  .bk-name{font-size:11.5px}
  .ocj-grid{grid-template-columns:repeat(2,1fr)}
  .padaju-grid{grid-template-columns:1fr}
  .ab-row{font-size:10.5px}
  .plan-week-head{font-size:11.5px}
  .tl-head{font-size:12px}
}

.sidebar{overscroll-behavior:contain}
.sb-title{font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:2px;padding:16px 18px 6px}
.sb-title:first-of-type{margin-top:0}
.sb-back{display:inline-flex;align-items:center;gap:6px;padding:7px 12px;font-family:var(--mono);font-size:10.5px;color:var(--t2);border:1px solid var(--bdm);border-radius:var(--r2);margin:0 14px 14px;transition:all .15s;align-self:flex-start}
/* ══════ PREMIUM GATES ══════ */
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
.paywall-modal{position:fixed;inset:0;z-index:9999;background:rgba(6,9,16,0.85);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:20px}
.paywall-modal.show{display:flex}
.paywall-card{background:var(--sur);border:1px solid rgba(245,158,11,0.3);border-radius:16px;max-width:440px;width:100%;padding:28px 24px;position:relative;animation:pwSlide 0.25s ease-out}
@keyframes pwSlide{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
.paywall-close{position:absolute;top:12px;right:12px;background:transparent;border:none;color:var(--t2);font-size:20px;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.paywall-close:hover{background:var(--ele);color:var(--t1)}
.paywall-h{font-size:20px;font-weight:800;color:var(--t1);margin-bottom:6px;padding-right:32px}
.paywall-sub{color:var(--t2);font-size:13px;line-height:1.55;margin-bottom:18px}
.paywall-tiers{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px}
.paywall-tier{padding:14px 12px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);position:relative;cursor:pointer;transition:all 0.15s}
.paywall-tier.pro{border-color:rgba(245,158,11,0.4);background:linear-gradient(135deg,rgba(245,158,11,0.05),rgba(244,114,182,0.05))}
.paywall-tier.pro::before{content:"POPULAR";position:absolute;top:-8px;right:10px;background:linear-gradient(135deg,#F59E0B,#F472B6);color:#000;font-family:var(--mono);font-size:8px;font-weight:800;padding:2px 8px;border-radius:999px;letter-spacing:0.1em}
.paywall-tier-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px}
.paywall-tier-name{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:2px}
.paywall-tier-price{font-family:var(--mono);font-size:16px;font-weight:800;color:var(--amber)}
.paywall-tier-price .per{font-size:10px;color:var(--t3);font-weight:400}
.paywall-tier-feat{font-size:10.5px;color:var(--t2);margin-top:8px;line-height:1.5}
.paywall-cta{width:100%;padding:12px 18px;background:linear-gradient(135deg,#F59E0B,#F472B6);color:#000;border:none;border-radius:var(--r3);font-family:var(--mono);font-size:13px;font-weight:800;letter-spacing:0.03em;text-transform:uppercase;cursor:pointer;transition:all 0.2s}
.paywall-cta:hover{transform:translateY(-1px);box-shadow:0 4px 18px rgba(245,158,11,0.4)}
.paywall-note{text-align:center;font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:10px}
.paywall-note strong{color:var(--green)}
</style>
</head>
<body>
<div id="scroll-prog"></div>
<button id="scroll-top" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<div class="shell">

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>

<aside class="sidebar" id="sidebar" role="navigation" aria-label="Navigacija poglavljima">
  <button onclick="backToList()" style="padding:7px 14px;border:none;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3);font-family:var(--mono);letter-spacing:.3px;background:transparent;cursor:pointer;width:100%;text-align:left;transition:color .12s" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t3)'">← Sva poglavlja</button>
  <div class="sb-title">MAT B · 20 poglavlja</div>
  <div class="sb-item" onclick="navigateChapter('p00a')" style="cursor:pointer"><span class="sb-dot"></span>00A · Uvod u maturu</div>
  <div class="sb-item active"><span class="sb-dot"></span>00B · Kalkulator &amp; alati<div class="sb-progress"><div class="sb-prog-track"><div class="sb-prog-fill" id="sb-prog-fill"></div></div><span class="sb-prog-pct" id="sb-prog-pct">0%</span></div></div>
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

<main class="main">
<div class="content-wrap">

<div class="bc">
  <span>← poglavlja</span><span class="bc-sep">/</span>
  <span>b-razina</span><span class="bc-sep">/</span>
  <span class="bc-cur">što te čeka na maturi</span>
  <span class="bc-sep">·</span><span style="color:var(--t3)">P00B</span>
</div>

<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min <span class="tb" id="tb0">✓</span></div>
  <div class="tab" onclick="sw(1)">📊 Ispit <span class="tb" id="tb1">✓</span></div>
  <div class="tab" onclick="sw(2)">🎯 Plan <span class="tb" id="tb2">✓</span></div>
</div>

<div class="restore-banner" id="restore-banner">
  <div class="rb-txt">📖 Nastavi gdje si stao — <strong id="rb-tab-txt">zadnji tab</strong></div>
  <div class="rb-actions">
    <button class="rb-btn primary" onclick="restoreProgress()">Nastavi</button>
    <button class="rb-btn secondary" onclick="dismissRestore()">Ispočetka</button>
  </div>
</div>

<!-- ════ L0 — 2 MIN ════ -->
<div class="layer on" id="l0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">državna matura · mat b razina · NCVVO</div>
    <h1 class="hero-title">Što te čeka<br><span>na ispitu</span></h1>
    <p class="hero-sub">Sve što trebaš znati o strukturi Mat B ispita — bodovi, teme, vremenski okvir i strategija.</p>
    <div class="hero-meta">
      <span class="hchip a">80 bodova ukupno</span>
      <span class="hchip c">150 minuta</span>
      <span class="hchip r">Kalkulator zabranjen</span>
      <span class="hchip g">B razina = lakša</span>
    </div>
    <div class="pt"><div class="pb" id="hero-pb" style="width:0%"></div></div>
  </div>

  <!-- STAT CARDS — upgraded -->
  <div class="sg">
    <div class="sc" style="--sc-color:linear-gradient(90deg,var(--amber),#F0AB30)">
      <span class="sc-ico">📋</span>
      <div class="sc-num" style="color:var(--amber)" id="sc-bod">0</div>
      <div class="sc-lbl">max. bodova</div>
      <div class="sc-sub">40 = prolaz</div>
    </div>
    <div class="sc" style="--sc-color:linear-gradient(90deg,var(--cyan),var(--blue))">
      <span class="sc-ico">⏱</span>
      <div class="sc-num" style="color:var(--cyan)" id="sc-min">0</div>
      <div class="sc-lbl">minuta</div>
      <div class="sc-sub">~6.25 min / zadatak</div>
    </div>
    <div class="sc" style="--sc-color:linear-gradient(90deg,var(--violet),var(--indigo))">
      <span class="sc-ico">📚</span>
      <div class="sc-num" style="color:var(--violet)" id="sc-pog">0</div>
      <div class="sc-lbl">poglavlja</div>
      <div class="sc-sub">P01 – P18</div>
    </div>
    <div class="sc" style="--sc-color:linear-gradient(90deg,var(--green),var(--cyan))">
      <span class="sc-ico">✏️</span>
      <div class="sc-num" style="color:var(--green)" id="sc-zad">0</div>
      <div class="sc-lbl">zadataka</div>
      <div class="sc-sub">3 dijela ispita</div>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Struktura ispita</div><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">U 2 minute — što znaš nakon ovoga</div>
    <div class="box-int-txt">
      Mat B ispit traje <em>150 minuta</em> i nosi <em>80 bodova</em>. Kalkulator je <em>zabranjen</em> — sve radiš rukom.<br><br>
      Ispit ima <em>24 zadatka</em> raspoređena u 3 dijela: višestruki izbor, kratki odgovori i složeni zadaci.<br><br>
      Za prolaz trebaš <em>50% bodova (40/80)</em>. Za odličan (5) trebaš oko <em>72+ bodova</em>.
    </div>
  </div>

  <div class="ab-grid">
    <div class="ab-card">
      <div class="ab-head a">A razina — teža</div>
      <div class="ab-body">
        <div class="ab-row">Derivacije i integrali (nema na B!)</div>
        <div class="ab-row">Limes i kontinuitet</div>
        <div class="ab-row">Apstrakcija i dokazivanje</div>
        <div class="ab-row">Potrebno za STEM fakultete</div>
      </div>
    </div>
    <div class="ab-card">
      <div class="ab-head b">B razina — ova</div>
      <div class="ab-body">
        <div class="ab-row">Primjenjena matematika iz života</div>
        <div class="ab-row">Postoci, funkcije, statistika</div>
        <div class="ab-row">Dovoljna za 90%+ studijskih programa</div>
        <div class="ab-row">Fokus na razumijevanju i primjeni</div>
      </div>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Top teme po bodovima</div><div class="sec-line"></div></div>

  <!-- TOP 5 MINI CHART — klikabilni -->
  <div style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px 18px;margin-bottom:14px">
    <div style="font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:12px">Bodovi po temi — klikni za skriptu</div>
    <div id="top5-chart"></div>
  </div>

  <!-- NAJČEŠĆE PADAJU NA -->
  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Gdje maturanti gube bodove</div><div class="sec-line"></div></div>
  <div class="padaju-grid">
    <div class="padaju-item">
      <div class="padaju-num">#1 GREŠKA</div>
      <div class="padaju-txt">Dodaju % umjesto da dijele</div>
      <div class="padaju-sub">Original iz snižene cijene: dijeli s faktorom, nikad ne dodavaj!</div>
    </div>
    <div class="padaju-item">
      <div class="padaju-num">#2 GREŠKA</div>
      <div class="padaju-txt">Ne pišu postupak u 3. dijelu</div>
      <div class="padaju-sub">Svaki korak = poseban bod. Čak i krivi rezultat s točnim postupkom donosi bodove.</div>
    </div>
    <div class="padaju-item">
      <div class="padaju-num">#3 GREŠKA</div>
      <div class="padaju-txt">Zbrajaju postotke umjesto množenja</div>
      <div class="padaju-sub">−15% pa −10% ≠ −25%. Faktori se množe: 0.85 × 0.90 = 0.765.</div>
    </div>
    <div class="padaju-item">
      <div class="padaju-num">#4 GREŠKA</div>
      <div class="padaju-txt">Preskaču provjeru</div>
      <div class="padaju-sub">NCVVO boduje provjeru posebno u 3. dijelu. 1 bod gratis ako uvrtiš rezultat natrag.</div>
    </div>
    <div class="padaju-item">
      <div class="padaju-num">#5 GREŠKA</div>
      <div class="padaju-txt">Zaglavljuju se na teškom zadatku</div>
      <div class="padaju-sub">Maksimalno 5 minuta po zadatku. Nastavi i vrati se — ostatak ispita vrijedi više.</div>
    </div>
    <div class="padaju-item">
      <div class="padaju-num">#6 GREŠKA</div>
      <div class="padaju-txt">Zaborave na 1. dio zaokružiti sve</div>
      <div class="padaju-sub">Višestruki izbor: nema oduzimanja za krivi odgovor. Zaokruži UVIJEK, čak i ako pogađaš.</div>
    </div>
  </div>

  <!-- DISCERE CTA — L0 -->
  <div style="background:var(--card);border:1px solid var(--bd-i);border-radius:22px;padding:0;margin:28px 0;position:relative;overflow:hidden">
    <div style="height:2px;background:linear-gradient(90deg,var(--indigo),var(--violet),var(--cyan),transparent)"></div>
    <div style="position:absolute;top:-80px;right:-80px;width:280px;height:280px;background:radial-gradient(circle,rgba(129,140,248,0.08) 0%,transparent 65%);border-radius:50%;pointer-events:none"></div>
    <div style="padding:28px 30px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
        <div style="font-family:var(--mono);font-size:9px;color:var(--indigo);letter-spacing:2.5px;text-transform:uppercase;font-weight:700">Discere · Simulator ispita</div>
        <div style="font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 9px;border-radius:20px;background:linear-gradient(135deg,var(--indigo),var(--violet));color:#fff;letter-spacing:.5px">PREMIUM</div>
      </div>
      <div style="font-size:22px;font-weight:800;color:var(--t1);letter-spacing:-.6px;line-height:1.2;margin-bottom:8px">
        Skripta te nauči.<br>
        <span style="background:linear-gradient(135deg,var(--indigo),var(--violet));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Discere te ispita.</span>
      </div>
      <div style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:22px;line-height:1.75">
        Pravi NCVVO zadaci · sva godišta 2010–2025 · vremenski limitirani ispiti<br>
        Automatsko ocjenjivanje · analiza grešaka · oponašanje ispitnih uvjeta
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:24px">
        <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:4px 11px;border-radius:var(--r1);background:var(--dim-i);color:var(--indigo);border:1px solid var(--bd-i)">📋 Pravi ispiti</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:4px 11px;border-radius:var(--r1);background:var(--dim-v);color:var(--violet);border:1px solid var(--bd-v)">⏱ Timer mod</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:4px 11px;border-radius:var(--r1);background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)">📊 Analiza grešaka</span>
        <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:4px 11px;border-radius:var(--r1);background:var(--dim-c);color:var(--cyan);border:1px solid var(--bd-c)">🔁 2010–2025</span>
      </div>
      <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
        <a href="#" onclick="window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/discere'},'*'); return false;" style="padding:12px 24px;background:linear-gradient(135deg,var(--indigo),var(--violet));color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 4px 20px rgba(129,140,248,0.3);text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all .18s;flex-shrink:0" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 28px rgba(129,140,248,0.4)'" onmouseout="this.style.transform='none';this.style.boxShadow='0 4px 20px rgba(129,140,248,0.3)'">
          Isprobaj Discere →
        </a>
        <div style="font-family:var(--mono);font-size:10.5px;color:var(--t3);line-height:1.6">✓ Pristup odmah<br>✓ Razine A i B</div>
      </div>
    </div>
  </div>

  <div class="nav-row">
    <span class="nb off">← Nema prethodnog</span>
    <button class="nb primary" onclick="sw(1)">Bodovna karta →</button>
  </div>
</div>

<!-- ════ L1 — ISPIT ════ -->
<div class="layer" id="l1">

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · BODOVNA KARTA — 20 POGLAVLJA</div><div class="sec-line"></div></div>

  <div class="bk-wrap">
    <div class="bk-head">
      <span class="bk-title">Klikni poglavlje za detalje</span>
      <div class="bk-legend">
        <div class="bk-leg"><div class="bk-dot" style="background:var(--red)"></div>Visoki</div>
        <div class="bk-leg"><div class="bk-dot" style="background:var(--amber)"></div>Srednji</div>
        <div class="bk-leg"><div class="bk-dot" style="background:var(--cyan)"></div>Niži</div>
      </div>
    </div>
    <div style="padding:10px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:8px;flex-wrap:wrap">
      <div class="bk-filter">
        <button class="bk-f-btn on" onclick="filterBK('all',this)">Sve</button>
        <button class="bk-f-btn" onclick="filterBK('high',this)">🔴 Visoki</button>
        <button class="bk-f-btn" onclick="filterBK('med',this)">🟡 Srednji</button>
        <button class="bk-f-btn" onclick="filterBK('low',this)">🔵 Niži</button>
      </div>
      <div class="bk-total">Prikazano: <span id="bk-shown">20</span> poglavlja · ukupno <span id="bk-pts-total">~80</span> bodova</div>
    </div>
    <div class="bk-list" id="bk-list"></div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · STRUKTURA ISPITNOG LISTA</div><div class="sec-line"></div></div>

  <div class="timeline">
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-head">1. dio — Višestruki izbor (1–8)</div>
      <div class="tl-sub">8 zadataka × 2 boda = 16 bodova. Zaokružuješ jedan od 4 ponuđena odgovora. Nema oduzimanja bodova za krivi odgovor — uvijek zaokruži!</div>
      <span class="tl-tag">~25 min</span>
    </div>
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-head">2. dio — Kratki odgovori (9–16)</div>
      <div class="tl-sub">8 zadataka × 3 boda = 24 boda. Pišeš rješenje bez obveze pokazivanja postupka — ali ako napišeš postupak i pogriješiš rezultat, možeš dobiti djelomičan bod.</div>
      <span class="tl-tag">~50 min</span>
    </div>
    <div class="tl-item">
      <div class="tl-dot"></div>
      <div class="tl-head">3. dio — Složeni zadaci (17–24)</div>
      <div class="tl-sub">8 zadataka × 5 bodova = 40 bodova. Pišeš cijeli postupak. NCVVO boduje svaki korak posebno — čak i djelomično točan postupak donosi bodove!</div>
      <span class="tl-tag">~75 min</span>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · STRATEGIJA NA ISPITU</div><div class="sec-line"></div></div>

  <!-- OCJENSKI KALKULATOR -->
  <div class="ocj-wrap">
    <div class="ocj-head">
      <span class="ocj-title">Kakvu ocjenu ciljam?</span>
      <span style="font-family:var(--mono);font-size:9.5px;color:var(--t3)">klikni ocjenu za plan</span>
    </div>
    <div class="ocj-body">
      <div class="ocj-grid">
        <div class="ocj-card grade-2" onclick="showOcjena(2,this)">
          <div class="ocj-grade g2">2</div>
          <div class="ocj-name">Dovoljan</div>
        </div>
        <div class="ocj-card grade-3" onclick="showOcjena(3,this)">
          <div class="ocj-grade g3">3</div>
          <div class="ocj-name">Dobar</div>
        </div>
        <div class="ocj-card grade-4" onclick="showOcjena(4,this)">
          <div class="ocj-grade g4">4</div>
          <div class="ocj-name">Vrlo dobar</div>
        </div>
        <div class="ocj-card grade-5" onclick="showOcjena(5,this)">
          <div class="ocj-grade g5">5</div>
          <div class="ocj-name">Odličan</div>
        </div>
      </div>
      <div class="ocj-result" id="ocj-result"></div>
    </div>
  </div>

  <!-- TIME MANAGER -->
  <div class="time-wrap">
    <div class="time-head">
      <span class="time-title">// Rasporedi 150 minuta pametno</span>
    </div>
    <div class="time-body">
      <div class="time-bar-row">
        <span class="time-lbl">1. dio · višestruki (1–8)</span>
        <div class="time-bar-outer">
          <div class="time-bar-inner" id="tbar1" style="width:0%;background:linear-gradient(90deg,var(--green),#28C870)">
            <span class="time-bar-val">~25 min</span>
          </div>
        </div>
      </div>
      <div class="time-bar-row">
        <span class="time-lbl">2. dio · kratki (9–16)</span>
        <div class="time-bar-outer">
          <div class="time-bar-inner" id="tbar2" style="width:0%;background:linear-gradient(90deg,var(--amber),#F0AB30)">
            <span class="time-bar-val">~50 min</span>
          </div>
        </div>
      </div>
      <div class="time-bar-row">
        <span class="time-lbl">3. dio · složeni (17–24)</span>
        <div class="time-bar-outer">
          <div class="time-bar-inner" id="tbar3" style="width:0%;background:linear-gradient(90deg,var(--red),#F05050)">
            <span class="time-bar-val">~65 min</span>
          </div>
        </div>
      </div>
      <div class="time-bar-row">
        <span class="time-lbl">Pregled i provjera</span>
        <div class="time-bar-outer">
          <div class="time-bar-inner" id="tbar4" style="width:0%;background:linear-gradient(90deg,var(--indigo),var(--violet))">
            <span class="time-bar-val">~10 min</span>
          </div>
        </div>
      </div>
      <div class="time-total">Ukupno: 25 + 50 + 65 + 10 = <strong style="color:var(--amber)">150 min ✓</strong></div>
    </div>
  </div>

  <div class="box-warn">
    <div class="bw-ico">⚠</div>
    <div class="bw-body">
      <div class="bw-title">Najčešće greške na ispitu</div>
      <div class="bw-txt"><strong>1.</strong> Preskakanje provjere — uvijek uvrsti rezultat natrag<br><strong>2.</strong> Nepisanje postupka u 3. dijelu — svaki korak = bodovi<br><strong>3.</strong> Zaglavljanje — 5 min po zadatku max, nastavi dalje<br><strong>4.</strong> Žurba na kraju — ostavi 10 min za pregled</div>
    </div>
  </div>

  <div class="nav-row">
    <button class="nb" onclick="sw(0)">← Pregled</button>
    <button class="nb primary" onclick="sw(2)">Plan učenja →</button>
  </div>
</div>

<!-- ════ L2 — PLAN ════ -->
<div class="layer" id="l2">

  <!-- GOAL SUMMARY -->
  <div class="goal-summary" id="goal-summary">
    <div class="goal-summary-empty" id="gs-empty">Odaberi ocjenu u Ispitu tabu i plan ispod da vidiš ovdje sažetak svog cilja.</div>
    <div class="goal-summary-inner" id="gs-inner" style="display:none">
      <div class="goal-summary-grade" id="gs-grade">—</div>
      <div class="goal-summary-info">
        <div class="goal-summary-title" id="gs-title">Tvoj cilj</div>
        <div class="goal-summary-pts" id="gs-pts"></div>
        <div class="goal-summary-plan-lbl" id="gs-plan-lbl"></div>
      </div>
      <span class="goal-summary-edit" onclick="sw(1)">← uredi cilj</span>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Personalizirani plan učenja</div><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">Koliko tjedana imaš?</div>
    <div class="box-int-txt">Odaberi vremenski okvir — dobit ćeš konkretan plan koji optimizira bodove po uloženom vremenu. <em>Plan se sprema automatski.</em></div>
  </div>

  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin:16px 0">
    <div class="plan-selector" style="margin:0">
      <button class="plan-btn" onclick="showPlan(2,this)">2 tjedna</button>
      <button class="plan-btn" onclick="showPlan(4,this)">4 tjedna</button>
      <button class="plan-btn" onclick="showPlan(8,this)">8 tjedana</button>
      <button class="plan-btn" onclick="showPlan(12,this)">12 tjedana</button>
    </div>
    <span class="plan-saved-tag" id="plan-saved-tag">✓ Tvoj plan</span>
  </div>

  <div class="plan-output" id="plan-output"></div>

  <!-- DISCERE CTA — pojavljuje se nakon odabira plana -->
  <div id="discere-plan-cta" style="display:none;margin-top:4px">
    <div style="background:var(--card);border:1px solid var(--bd-i);border-radius:22px;padding:0;position:relative;overflow:hidden">
      <div style="height:2px;background:linear-gradient(90deg,var(--indigo),var(--violet),var(--cyan),transparent)"></div>
      <div style="position:absolute;top:-60px;right:-60px;width:220px;height:220px;background:radial-gradient(circle,rgba(129,140,248,0.08) 0%,transparent 65%);border-radius:50%;pointer-events:none"></div>
      <div style="padding:22px 26px">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
          <div style="font-family:var(--mono);font-size:9px;color:var(--indigo);letter-spacing:2.5px;text-transform:uppercase;font-weight:700">Discere · Simulator ispita</div>
          <div style="font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 9px;border-radius:20px;background:linear-gradient(135deg,var(--indigo),var(--violet));color:#fff">PREMIUM</div>
        </div>
        <div style="font-size:18px;font-weight:800;color:var(--t1);letter-spacing:-.4px;line-height:1.25;margin-bottom:8px">
          Plan bez prakse ne vrijedi.<br>
          <span style="background:linear-gradient(135deg,var(--indigo),var(--violet));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Discere te ispituje.</span>
        </div>
        <div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:18px;line-height:1.7">
          Pravi NCVVO zadaci 2010–2025 · vremenski limitirani ispiti · analiza grešaka<br>
          Savršen dodatak uz ovaj plan — vježbaj ispitne uvjete od prvog dana.
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:20px">
          <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 10px;border-radius:var(--r1);background:var(--dim-i);color:var(--indigo);border:1px solid var(--bd-i)">📋 Pravi ispiti</span>
          <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 10px;border-radius:var(--r1);background:var(--dim-v);color:var(--violet);border:1px solid var(--bd-v)">⏱ Ispitni uvjeti</span>
          <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 10px;border-radius:var(--r1);background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)">📊 Analiza grešaka</span>
          <span style="font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 10px;border-radius:var(--r1);background:var(--dim-c);color:var(--cyan);border:1px solid var(--bd-c)">🔁 2010–2025</span>
        </div>
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap">
          <a href="#" onclick="window.parent.postMessage({type:'maturiraj:navigateUrl',url:'/discere'},'*'); return false;" style="padding:11px 22px;background:linear-gradient(135deg,var(--indigo),var(--violet));color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;box-shadow:0 4px 20px rgba(129,140,248,0.3);text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:all .18s" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 8px 28px rgba(129,140,248,0.4)'" onmouseout="this.style.transform='none';this.style.boxShadow='0 4px 20px rgba(129,140,248,0.3)'">
            Isprobaj Discere →
          </a>
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);line-height:1.7">✓ Pristup odmah<br>✓ Razine A i B</div>
        </div>
      </div>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Checkpoint — razumijem ispit</div><div class="sec-line"></div></div>

  <div class="checkpoint">
    <div class="cp-head">
      <span class="cp-title">Spreman sam za pripremu</span>
      <span class="cp-cnt" id="cp-txt">0 / 5 potvrđeno</span>
    </div>
    <div class="cp-items">
      <div class="cp-item" id="cp1" onclick="toggleCP(1)"><div class="cp-check" id="cpch1">✓</div><span class="cp-txt">Znam da ispit traje 150 min i nosi 80 bodova</span></div>
      <div class="cp-item" id="cp2" onclick="toggleCP(2)"><div class="cp-check" id="cpch2">✓</div><span class="cp-txt">Razumijem da 3. dio boduje svaki korak — pisati postupak je obavezno</span></div>
      <div class="cp-item" id="cp3" onclick="toggleCP(3)"><div class="cp-check" id="cpch3">✓</div><span class="cp-txt">Znam koje teme nose najviše bodova (P02, P06, P09...)</span></div>
      <div class="cp-item" id="cp4" onclick="toggleCP(4)"><div class="cp-check" id="cpch4">✓</div><span class="cp-txt">Imam plan učenja ili barem znam odakle krenuti</span></div>
      <div class="cp-item" id="cp5" onclick="toggleCP(5)"><div class="cp-check" id="cpch5">✓</div><span class="cp-txt">Kalkulator je zabranjen — vježbam računanje napamet</span></div>
    </div>
    <div class="cp-foot">
      <span id="cp-ready">🎉 Odličan start! Kreni na P01 ili odmah na P02 →</span>
      <span id="cp-hint" style="color:var(--t3)">Potvrdi svaki korak koji razumiješ.</span>
    </div>
  </div>

<!-- ═══ PREMIUM GATE: AI PROFESOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Pitanja o strukturi ispita, bodovanju, taktici? AI profesor ti odgovara odmah.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Koliko bodova trebam za prolaz?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Koji dio ispita nosi najviše?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Je li kalkulator zabranjen?</span>
  </div>
  <div class="pg-ai-bubble">
    Struktura ispita, bodovanje, strategija taktike — <strong>AI profesor odgovara 24/7</strong><span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora →</button>
</div>

<!-- ═══ PREMIUM GATE: DISCERE SIMULATOR ═══ -->
<div class="pg-disc">
  <div class="pg-disc-hd">
    <div class="pg-disc-ico">🎯</div>
    <div style="flex:1;min-width:0">
      <div class="pg-disc-ttl">Discere Simulator <span class="pg-disc-badge">STANDARD</span></div>
      <div class="pg-disc-sub">Provjeri se u pravim ispit uvjetima. Tajmer, bodovi, feedback. 70+ stvarnih MAT B ispita.</div>
    </div>
  </div>
  <div class="pg-disc-split">
    <div class="pg-disc-col">
      <div class="pg-disc-col-ttl">Samo učiš</div>
      <div class="pg-disc-col-val">📖</div>
      <div class="pg-disc-col-sub">bez ispitnog pritiska</div>
    </div>
    <div class="pg-disc-arrow">→</div>
    <div class="pg-disc-col on">
      <div class="pg-disc-col-ttl">Discere simulacija</div>
      <div class="pg-disc-col-val">⏱ 150:00</div>
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

  <div class="nav-row">
    <button class="nb" onclick="sw(1)">← Ispit</button>
    <button class="nb primary" onclick="navigateChapter('p01')">P01 Skupovi →</button>
  </div>
</div>

</div><!-- content-wrap -->
</main>
</div><!-- shell -->

<script>
function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}

/* ── SCROLL ── */
window.addEventListener('scroll',function(){
  var el=document.documentElement;
  var pct=(el.scrollTop/(el.scrollHeight-el.clientHeight))*100;
  document.getElementById('scroll-prog').style.width=pct+'%';
  var btn=document.getElementById('scroll-top');
  if(btn){if(el.scrollTop>320)btn.classList.add('show');else btn.classList.remove('show');}
});

/* ── TABS ── */
var tabProgress={0:100,1:0,2:0};
var tabNames={0:'⚡ 2 min',1:'📊 Ispit',2:'🎯 Plan'};
var LS_KEY='matb_p00b';
function lsLoad(){try{return JSON.parse(localStorage.getItem(LS_KEY))||{};}catch(e){return {};}}
function lsSave(d){try{localStorage.setItem(LS_KEY,JSON.stringify(d));}catch(e){}}
function lsUpdate(patch){var d=lsLoad();Object.assign(d,patch);lsSave(d);}

function sw(n,skipSave){
  document.querySelectorAll('.tab').forEach(function(t,i){t.classList.toggle('on',i===n)});
  document.querySelectorAll('.layer').forEach(function(l,i){l.classList.toggle('on',i===n)});
  if(n>0&&tabProgress[n]<10)tabProgress[n]=10;
  updateProg();
  var sbi=document.getElementById('sb-tab-indicator');
  if(sbi)sbi.textContent='Gledaš: '+tabNames[n];
  if(!skipSave)lsUpdate({lastTab:n});
  if(n===1){setTimeout(animateBars,300);setTimeout(animateTimeBars,200);}
  if(n===0){
    // Reset counters to 0 first so animation plays again
    ['sc-bod','sc-min','sc-pog','sc-zad'].forEach(function(id){var el=document.getElementById(id);if(el)el.textContent='0';});
    setTimeout(animateStatCounters,200);
    setTimeout(animateTop5,300);
  }
  if(n===2){updateGoalSummary();}
  window.scrollTo({top:0,behavior:'smooth'});
}
function updateProg(){
  var p=Math.round((tabProgress[0]+tabProgress[1]+tabProgress[2])/3);
  var _pb=document.getElementById('prog-bar');if(_pb)_pb.style.width=p+'%';
  var _pp=document.getElementById('prog-pct');if(_pp)_pp.textContent=p+'%';
  document.getElementById('hero-pb').style.width=p+'%';
  [0,1,2].forEach(function(i){
    var b=document.getElementById('tb'+i);
    if(b)b.classList.toggle('done',(tabProgress[i]||0)>=80);
  });
}
function restoreTab(){ /* always start on tab 0 */ }

/* ── RESTORE BANNER ── */
function checkRestoreBanner(){
  return; // always start on tab 0
  var d=lsLoad();
  if(!d.lastTab||d.lastTab===0)return;
  var names={1:'📊 Ispit',2:'🎯 Plan'};
  var txt=document.getElementById('rb-tab-txt');
  if(txt)txt.textContent=names[d.lastTab]||'zadnji tab';
  var banner=document.getElementById('restore-banner');
  if(banner)banner.classList.add('show');
}
function restoreProgress(){
  var d=lsLoad();
  document.getElementById('restore-banner').classList.remove('show');
  if(d.lastTab)sw(d.lastTab,true);
}
function dismissRestore(){
  document.getElementById('restore-banner').classList.remove('show');
  lsUpdate({lastTab:0});
}

/* ── SIDEBAR ── */
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('mobile-open');document.getElementById('overlay').classList.toggle('show');}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}


/* ── BK DONE ROWS ── */
function markBKDoneRows(){
  chapters.forEach(function(c,i){
    var key='matb_'+c.id;
    try{
      var d=JSON.parse(localStorage.getItem(key)||'{}');
      var row=document.getElementById('bkr'+i);
      if(d.cpDone&&row)row.classList.add('done-row');
    }catch(e){}
  });
}

/* ── GOAL SUMMARY ── */
var gradeNames={2:'Dovoljan',3:'Dobar',4:'Vrlo dobar',5:'Odličan'};
var gradeColors={2:'var(--red)',3:'var(--amber)',4:'var(--cyan)',5:'var(--green)'};
var gradePts={2:'40/80',3:'52/80',4:'64/80',5:'72/80'};
var planLabels={2:'2 tjedna',4:'4 tjedna',8:'8 tjedana',12:'12 tjedana'};
function updateGoalSummary(){
  var d=lsLoad();
  var gs=document.getElementById('goal-summary');
  var gsEmpty=document.getElementById('gs-empty');
  var gsInner=document.getElementById('gs-inner');
  if(!gs)return;
  if(!d.targetGrade&&!d.savedPlan){
    gsEmpty.style.display='block';gsInner.style.display='none';
    gs.classList.remove('has-data');
    return;
  }
  gsEmpty.style.display='none';gsInner.style.display='flex';
  gs.classList.add('has-data');
  if(d.targetGrade){
    var g=d.targetGrade;
    var col=gradeColors[g];
    document.getElementById('gs-grade').textContent =g;
    document.getElementById('gs-grade').style.color=col;
    document.getElementById('gs-title').textContent ='Cilj: ocjena '+g+' — '+gradeNames[g];
    document.getElementById('gs-pts').textContent ='Trebam '+gradePts[g]+' bodova';
    gs.style.setProperty('--gs-color','linear-gradient(90deg,'+col+',transparent)');
  }
  if(d.savedPlan){
    var pl=document.getElementById('gs-plan-lbl');
    if(pl)pl.innerHTML='Plan: <span>'+planLabels[d.savedPlan]+'</span>';
  }
}

/* ── BODOVNA KARTA DATA ── */
var chapters=[
  {id:'p01',name:'01 · Skupovi i realni brojevi',pts:'5–7',prio:'high',
   detail:'Skupovi, intervali, apsolutna vrijednost. Temelj za sve ostalo.'},
  {id:'p02',name:'02 · Razlomci i postoci',pts:'6–8',prio:'high',
   detail:'Postoci, proporcije, omjeri. Najčešće na ispitu — uvijek pripremi.'},
  {id:'p03',name:'03 · Potencije i korijeni',pts:'4–6',prio:'high',
   detail:'Zakoni potencija, korijeni, racionalni eksponenti. Često u algebri.'},
  {id:'p04',name:'04 · Algebarski izrazi',pts:'4–5',prio:'med',
   detail:'Rastav na faktore, kvadrat razlike, binomni razvoj.'},
  {id:'p05',name:'05 · Linearne jednadžbe',pts:'4–6',prio:'high',
   detail:'Jednadžbe i nejednadžbe — temelj za sve naprednije teme.'},
  {id:'p06',name:'06 · Kvadratne jednadžbe',pts:'5–8',prio:'high',
   detail:'Diskriminanta, Vièteove formule, rastavni oblik. Uvijek na ispitu.'},
  {id:'p07',name:'07 · Sustavi jednadžbi',pts:'4–6',prio:'high',
   detail:'Supstitucija, eliminacija. Pojavljuju se u 1. i 2. dijelu.'},
  {id:'p08',name:'08 · Linearna funkcija',pts:'4–5',prio:'med',
   detail:'Graf, nagib, presjeci. Osnova za razumijevanje funkcija.'},
  {id:'p09',name:'09 · Kvadratna funkcija',pts:'6–9',prio:'high',
   detail:'Tjeme, nultočke, parabola. Najvažnija funkcija na MatB.'},
  {id:'p10',name:'10 · Eksp. i log. funkcija',pts:'4–6',prio:'med',
   detail:'Eksponencijalne i logaritamske jednadžbe — rastuće na ispitu.'},
  {id:'p11',name:'11 · Vektori',pts:'3–5',prio:'low',
   detail:'Zbrajanje, skalarni produkt, kutovi. Manji broj bodova.'},
  {id:'p12',name:'12 · Trigonometrija',pts:'4–6',prio:'med',
   detail:'Sin, cos, tan, identiteti, jednadžbe. Česti u 2. i 3. dijelu.'},
  {id:'p13',name:'13 · Geometrija ravnine',pts:'4–6',prio:'med',
   detail:'Trokuti, kružnica, površine, Heron, poučci. Geometrijska tema.'},
  {id:'p14',name:'14 · Geometrija prostora',pts:'3–5',prio:'low',
   detail:'Volumeni, oplošja, dijagonale. Lakši bodovi ako znaš formule.'},
  {id:'p15',name:'15 · Kombinatorika',pts:'4–6',prio:'high',
   detail:'Permutacije, kombinacije, vjerojatnost. Rastući trend na ispitu.'},
  {id:'p16',name:'16 · Statistika',pts:'3–5',prio:'high',
   detail:'Srednja vrijednost, medijan, mod. Uvijek na ispitu, relativno lako.'},
  {id:'p17',name:'17 · Nizovi i redovi',pts:'3–5',prio:'med',
   detail:'Aritmetički i geometrijski nizovi. Jasne formule, vrijedi naučiti.'},
  {id:'p18',name:'18 · Financijska matematika',pts:'4–6',prio:'med',
   detail:'Kamate, postotci, anuitet, tečaj. Praktični zadaci s kalkulatorom.'}
];

function buildBodovnaKarta(){
  var list=document.getElementById('bk-list');
  if(!list)return;
  list.innerHTML=chapters.map(function(c,i){
    var pts=c.pts==='—'?0:parseInt(c.pts.split('–')[1])||0;
    return '<div class="bk-row" id="bkr'+i+'" onclick="toggleBK('+i+')" data-prio="'+c.prio+'">'
      +'<div class="bk-prio '+c.prio+'"></div>'
      +'<div class="bk-name">'+c.name+'</div>'
      +'<div class="bk-bar-wrap"><div class="bk-bar"><div class="bk-bar-fill '+c.prio+'" id="bkb'+i+'" style="width:0%"></div></div></div>'
      +'<div class="bk-pts">'+c.pts+(c.pts==='—'?'':' bod')+'</div>'
      +'<div class="bk-chevron">›</div>'
      +'</div>'
      +'<div class="bk-detail" id="bkd'+i+'">'
      +'<span onclick="navigateChapter(\\\''+c.id+'\\\')" style="cursor:pointer;color:var(--amber);font-weight:700;text-decoration:none">→ Otvori skriptu</span>'
      +'&nbsp;&nbsp;'+c.detail
      +'</div>';
  }).join('');
  updateBKTotal('all');
}

/* ── BK FILTER ── */
var currentFilter='all';
function filterBK(prio,btn){
  currentFilter=prio;
  document.querySelectorAll('.bk-f-btn').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  chapters.forEach(function(c,i){
    var row=document.getElementById('bkr'+i);
    var det=document.getElementById('bkd'+i);
    var show=prio==='all'||c.prio===prio;
    if(row)row.style.display=show?'flex':'none';
    if(det)det.style.display='none';
    if(row)row.classList.remove('expanded');
  });
  openBK=-1;
  updateBKTotal(prio);
  tabProgress[1]=Math.max(tabProgress[1],70);updateProg();
}
function updateBKTotal(prio){
  var shown=chapters.filter(function(c){return prio==='all'||c.prio===prio;});
  var pts=shown.reduce(function(sum,c){
    if(c.pts==='—')return sum;
    var p=c.pts.split('–');
    return sum+Math.round((parseInt(p[0]||0)+parseInt(p[1]||0))/2);
  },0);
  var shownEl=document.getElementById('bk-shown');
  var ptsEl=document.getElementById('bk-pts-total');
  if(shownEl)shownEl.textContent=shown.length;
  if(ptsEl)ptsEl.textContent='~'+pts;
}

/* ── TOP5 CHART ── */
var top5data=[
  {id:'p02',name:'P02 · Razlomci/postoci',pts:8,color:'var(--red)'},
  {id:'p09',name:'P09 · Kvadratna f.',pts:8,color:'var(--amber)'},
  {id:'p06',name:'P06 · Kvadratne jedn.',pts:7,color:'var(--amber)'},
  {id:'p07',name:'P07 · Sustavi',pts:6,color:'var(--cyan)'},
  {id:'p15',name:'P15 · Kombinatorika',pts:6,color:'var(--violet)'},
  {id:'p16',name:'P16 · Statistika',pts:5,color:'var(--cyan)'},
];
function buildTop5Chart(){
  var el=document.getElementById('top5-chart');
  if(!el)return;
  el.innerHTML=top5data.map(function(d){
    return '<a href="#" onclick="navigateChapter(\\\''+d.id+'\\\')" style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid var(--bd);text-decoration:none;transition:opacity .15s" onmouseover="this.style.opacity=\\'.75\\'" onmouseout="this.style.opacity=\\'1\\'">'
      +'<div style="font-family:var(--mono);font-size:11px;color:var(--t2);min-width:160px;flex-shrink:0">'+d.name+'</div>'
      +'<div style="flex:1;height:16px;background:var(--bd);border-radius:3px;overflow:hidden">'
      +'<div style="height:100%;background:'+d.color+';border-radius:3px;width:0%;transition:width .7s cubic-bezier(.4,0,.2,1)" class="top5-bar" data-w="'+Math.round(d.pts/8*100)+'%"></div>'
      +'</div>'
      +'<div style="font-family:var(--mono);font-size:11px;font-weight:700;color:'+d.color+';min-width:28px;text-align:right">'+d.pts+'</div>'
      +'<div style="font-family:var(--mono);font-size:9px;color:var(--amber)">→</div>'
      +'</a>';
  }).join('');
}
function animateTop5(){
  document.querySelectorAll('.top5-bar').forEach(function(bar){
    setTimeout(function(){bar.style.width=bar.getAttribute('data-w');},100);
  });
}

/* ── OCJENSKI KALKULATOR ── */
var ocjData={
  2:{pts:'40',color:'var(--red)',pct:'50%',focus:'Savladaj samo visoki prioritet do razine "uvijek točno".',
     poglavlja:'<span onclick="navigateChapter(&#39;p02&#39;)" style="cursor:pointer;color:var(--amber)">P02</span>, <span onclick="navigateChapter(&#39;p05&#39;)" style="cursor:pointer;color:var(--amber)">P05</span>, <span onclick="navigateChapter(&#39;p06&#39;)" style="cursor:pointer;color:var(--amber)">P06</span>, <span onclick="navigateChapter(&#39;p08&#39;)" style="cursor:pointer;color:var(--amber)">P08</span>'},
  3:{pts:'52',color:'var(--amber)',pct:'65%',focus:'Visoki prioritet + dodaj funkcije i statistiku.',
     poglavlja:'Gore + <span onclick="navigateChapter(&#39;p09&#39;)" style="cursor:pointer;color:var(--amber)">P09</span>, <span onclick="navigateChapter(&#39;p12&#39;)" style="cursor:pointer;color:var(--amber)">P12</span>, <span onclick="navigateChapter(&#39;p15&#39;)" style="cursor:pointer;color:var(--amber)">P18</span>, <span onclick="navigateChapter(&#39;p16&#39;)" style="cursor:pointer;color:var(--amber)">P16</span>'},
  4:{pts:'64',color:'var(--cyan)',pct:'80%',focus:'Svi visokog i srednji prioritet, dublja priprema.',
     poglavlja:'Gore + <span onclick="navigateChapter(&#39;p10&#39;)" style="cursor:pointer;color:var(--amber)">P10</span>, <span onclick="navigateChapter(&#39;p11&#39;)" style="cursor:pointer;color:var(--amber)">P11</span>, <span onclick="navigateChapter(&#39;p15&#39;)" style="cursor:pointer;color:var(--amber)">P13</span>, <span onclick="navigateChapter(&#39;p12&#39;)" style="cursor:pointer;color:var(--amber)">P17</span>'},
  5:{pts:'72',color:'var(--green)',pct:'90%',focus:'Kompletna priprema svih 18 poglavlja. Barem 2 mock ispita.',
     poglavlja:'Sva poglavlja P01 – P18 + <span onclick="navigateChapter(&#39;p18&#39;)" style="cursor:pointer;color:var(--amber)">P17 Nizovi i redovi</span>'}
};
var currentOcj=null;
function showOcjena(g,btn){
  document.querySelectorAll('.ocj-card').forEach(function(c){c.classList.remove('on')});
  btn.classList.add('on');
  currentOcj=g;
  var d=ocjData[g];
  var res=document.getElementById('ocj-result');
  res.innerHTML='<div class="ocj-result-head">Za ocjenu <strong style="color:'+d.color+'">'+g+'</strong> trebaš:</div>'
    +'<div class="ocj-result-big" style="color:'+d.color+'">'+d.pts+'/80 bodova</div>'
    +'<div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:10px">'+d.pct+' od maksimuma</div>'
    +'<div class="ocj-result-focus">'+d.focus+'<br><strong style="color:var(--t1)">Fokus:</strong> '+d.poglavlja+'</div>';
  res.classList.add('show');
  tabProgress[1]=Math.max(tabProgress[1],80);updateProg();
  lsUpdate({targetGrade:g});
  updateGoalSummary();
}

/* ── TIME MANAGER ANIMATION ── */
function animateTimeBars(){
  setTimeout(function(){
    var bars=[['tb1',17],['tb2',33],['tb3',43],['tb4',7]];
    bars.forEach(function(b,i){
      setTimeout(function(){
        var el=document.getElementById(b[0]);
        if(el)el.style.width=b[1]+'%';
      },i*150);
    });
  },400);
}

function animateBars(){
  var maxPts=8;
  chapters.forEach(function(c,i){
    var pts=c.pts==='—'?0:parseInt(c.pts.split('–')[1])||0;
    var pct=Math.round(pts/maxPts*100);
    setTimeout(function(){
      var bar=document.getElementById('bkb'+i);
      if(bar)bar.style.width=pct+'%';
    },i*40);
  });
  tabProgress[1]=Math.max(tabProgress[1],60);updateProg();
}

var openBK=-1;
function toggleBK(i){
  var row=document.getElementById('bkr'+i);
  var det=document.getElementById('bkd'+i);
  if(!row||!det)return;
  if(openBK===i){
    row.classList.remove('expanded');det.classList.remove('show');openBK=-1;
  } else {
    if(openBK>=0){
      var pr=document.getElementById('bkr'+openBK);var pd=document.getElementById('bkd'+openBK);
      if(pr)pr.classList.remove('expanded');if(pd)pd.classList.remove('show');
    }
    row.classList.add('expanded');det.classList.add('show');openBK=i;
    tabProgress[1]=Math.max(tabProgress[1],80);updateProg();
  }
}

/* ── PLAN UČENJA ── */
var plans={
  2:{
    title:'2 tjedna — hitna priprema',
    desc:'Fokus isključivo na visoki prioritet. Cilj: 40–52 boda (prolaz do dobrog).',
    weeks:[
      {num:1,focus:'Temelji visokog prioriteta',days:[
        {d:'Pon',t:'P02 Postoci — cijela skripta (L0+L1+L2)',tag:'obavezno'},
        {d:'Uto',t:'P05 Linearne jednadžbe — L0+L1+L2'},
        {d:'Sri',t:'P06 Kvadratne jednadžbe — L0+L1+L2',tag:'obavezno'},
        {d:'Čet',t:'P07 Sustavi jednadžbi — L0+L1'},
        {d:'Pet',t:'P08 Linearna funkcija — L0+L1+L2'},
        {d:'Sub',t:'Ponavljanje P02+P06 — samo Vježbaj tab'},
        {d:'Ned',t:'Odmor ili catching up'},
      ]},
      {num:2,focus:'Funkcije + Statistika + Mock ispit',days:[
        {d:'Pon',t:'P09 Kvadratna funkcija — cijela skripta',tag:'obavezno'},
        {d:'Uto',t:'P15 Kombinatorika — L0+L1+L2'},
        {d:'Sri',t:'P16 Statistika — L0+L1+L2',tag:'obavezno'},
        {d:'Čet',t:'Ponavljanje svih L0 tabova (2 min po poglavlju)'},
        {d:'Pet',t:'P18 Financijska matematika — L0+L1'},
        {d:'Sub',t:'Simulacija ispita — 150 min, bez pauze'},
        {d:'Ned',t:'Pregled grešaka iz simulacije'},
      ]},
    ]
  },
  4:{
    title:'4 tjedna — solidna priprema',
    desc:'Visoki + srednji prioritet. Cilj: 52–64 boda (dobar do vrlo dobar).',
    weeks:[
      {num:1,focus:'Visoki prioritet — temelji',days:[
        {d:'Pon',t:'P02 Postoci — cijela skripta',tag:'obavezno'},
        {d:'Uto',t:'P05 Linearne jednadžbe'},
        {d:'Sri',t:'P06 Kvadratne jednadžbe',tag:'obavezno'},
        {d:'Čet',t:'P07 Sustavi jednadžbi'},
        {d:'Pet',t:'P08 Linearna funkcija'},
        {d:'Sub',t:'Ponavljanje — Vježbaj tabovi P02+P06'},
        {d:'Ned',t:'Odmor'},
      ]},
      {num:2,focus:'Visoki prioritet — funkcije',days:[
        {d:'Pon',t:'P09 Kvadratna funkcija — cijela skripta',tag:'obavezno'},
        {d:'Uto',t:'P15 Kombinatorika',tag:'obavezno'},
        {d:'Sri',t:'P16 Statistika'},
        {d:'Čet',t:'P03 Potencije i korijeni'},
        {d:'Pet',t:'P04 Algebarski izrazi'},
        {d:'Sub',t:'Mini-test: napravi 10 zadataka iz P02+P09'},
        {d:'Ned',t:'Odmor'},
      ]},
      {num:3,focus:'Srednji prioritet',days:[
        {d:'Pon',t:'P10 Eksponencijalna funkcija'},
        {d:'Uto',t:'P11 Logaritamska funkcija'},
        {d:'Sri',t:'P12 Nizovi'},
        {d:'Čet',t:'P13 Financijska matematika'},
        {d:'Pet',t:'P17 Trigonometrija'},
        {d:'Sub',t:'Ponavljanje — L0 svih do sad'},
        {d:'Ned',t:'Odmor'},
      ]},
      {num:4,focus:'Finalizacija + Mock ispit',days:[
        {d:'Pon',t:'P13 Geometrija ravnine'},
        {d:'Uto',t:'P18 Financijska matematika'},
        {d:'Sri',t:'Simulacija ispita — 150 min',tag:'obavezno'},
        {d:'Čet',t:'Analiza grešaka iz simulacije'},
        {d:'Pet',t:'Ponavljanje slabih točaka'},
        {d:'Sub',t:'Svi L0 tabovi — 2 min po poglavlju'},
        {d:'Ned',t:'Odmor prije ispita'},
      ]},
    ]
  },
  8:{
    title:'8 tjedana — komforna priprema',
    desc:'Sve teme, dublja priprema. Cilj: 64–72 boda (vrlo dobar).',
    weeks:[
      {num:'1–2',focus:'Temelji — P01 do P07',days:[
        {d:'Tjed 1',t:'P01 Skupovi · P02 Postoci · P03 Potencije · P04 Algebarski izrazi'},
        {d:'Tjed 2',t:'P05 Linearne jednadžbe · P06 Kvadratne jednadžbe · P07 Sustavi'},
      ]},
      {num:'3–4',focus:'Funkcije — P08 do P11',days:[
        {d:'Tjed 3',t:'P08 Linearna funkcija · P09 Kvadratna funkcija'},
        {d:'Tjed 4',t:'P10 Eksponencijalna · P11 Logaritamska'},
      ]},
      {num:'5–6',focus:'Nizovi, Financije, Geometrija',days:[
        {d:'Tjed 5',t:'P12 Nizovi · P13 Financijska matematika'},
        {d:'Tjed 6',t:'P14 Vektori · P15 Pravac · P16 Kružnica'},
      ]},
      {num:'7–8',focus:'Trig, Statistika + Finalizacija',days:[
        {d:'Tjed 7',t:'P17 Trigonometrija · P15 Kombinatorika · P16 Statistika'},
        {d:'Tjed 8',t:'P18 Financijska matematika · 2× simulacija ispita · pregled grešaka'},
      ]},
    ]
  },
  12:{
    title:'12 tjedana — maksimalna priprema',
    desc:'Kompletan program, sve teme, cijele skripte. Cilj: 72–80 bodova (odličan).',
    weeks:[
      {num:'1–3',focus:'Temelji',days:[
        {d:'Tjed 1',t:'P01 · P02 (fokus — najvažnije!)'},
        {d:'Tjed 2',t:'P03 · P04 · P05'},
        {d:'Tjed 3',t:'P06 · P07 + ponavljanje temelji'},
      ]},
      {num:'4–6',focus:'Funkcije',days:[
        {d:'Tjed 4',t:'P08 · P09 (kvadratna — više vremena!)'},
        {d:'Tjed 5',t:'P10 · P11 · P12'},
        {d:'Tjed 6',t:'P13 · ponavljanje funkcija'},
      ]},
      {num:'7–9',focus:'Geometrija + Trig',days:[
        {d:'Tjed 7',t:'P14 · P15 · P16'},
        {d:'Tjed 8',t:'P17 Trigonometrija (više vremena)'},
        {d:'Tjed 9',t:'P18 · P16 + ponavljanje'},
      ]},
      {num:'10–12',focus:'Finalizacija',days:[
        {d:'Tjed 10',t:'P18 Financijska matematika · slabe točke'},
        {d:'Tjed 11',t:'3× simulacija ispita u ispitnim uvjetima'},
        {d:'Tjed 12',t:'Samo L0 tabovi svaki dan · odmor uoči ispita'},
      ]},
    ]
  }
};

/* ── ANIMATED STAT COUNTERS ── */
function animateCounter(id,target,duration){
  var el=document.getElementById(id);if(!el)return;
  var start=0;var step=Math.ceil(target/20);
  var timer=setInterval(function(){
    start=Math.min(start+step,target);
    el.textContent=start;
    if(start>=target)clearInterval(timer);
  },duration/20);
}
function animateStatCounters(){
  animateCounter('sc-bod',80,600);
  animateCounter('sc-min',150,700);
  animateCounter('sc-pog',20,500);
  animateCounter('sc-zad',24,550);
}

function showPlan(weeks,btn){
  document.querySelectorAll('.plan-btn').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  lsUpdate({savedPlan:weeks});
  var savedTag=document.getElementById('plan-saved-tag');
  if(savedTag){savedTag.classList.add('show');setTimeout(function(){},0);}
  updateGoalSummary();
  var p=plans[weeks];
  if(!p)return;
  var out=document.getElementById('plan-output');
  out.innerHTML='<div style="background:var(--dim-a);border:1px solid var(--bd-a);border-radius:var(--r3);padding:14px 18px;margin-bottom:16px">'
    +'<div style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);margin-bottom:4px">'+p.title+'</div>'
    +'<div style="font-family:var(--mono);font-size:11.5px;color:var(--t2)">'+p.desc+'</div>'
    +'</div>'
    +p.weeks.map(function(w,wi){
      return '<div class="plan-week">'
        +'<div class="plan-week-head" onclick="toggleWeek(\\'pw'+wi+'\\',this)">'
        +'<span class="plan-week-num">Tjedan '+w.num+'</span>'
        +'<span class="plan-week-focus">'+w.focus+'</span>'
        +'<span class="plan-week-chevron" id="pwc'+wi+'">›</span>'
        +'</div>'
        +'<div class="plan-week-body" id="pw'+wi+'">'
        +w.days.map(function(d){
          return '<div class="plan-day">'
            +'<span class="plan-day-lbl">'+d.d+'</span>'
            +'<span class="plan-day-txt">'+d.t+(d.tag?'<span class="plan-day-tag">'+d.tag+'</span>':'')+'</span>'
            +'</div>';
        }).join('')
        +'</div></div>';
    }).join('');
  out.classList.add('show');
  // Show Discere CTA after plan is selected
  var discereCTA=document.getElementById('discere-plan-cta');
  if(discereCTA)discereCTA.style.display='block';
  tabProgress[2]=Math.max(tabProgress[2],60);updateProg();
}

function toggleWeek(id,headEl){
  var el=document.getElementById(id);
  if(!el)return;
  el.classList.toggle('show');
  // Rotate chevron
  var idx=id.replace('pw','');
  var chev=document.getElementById('pwc'+idx);
  if(chev)chev.classList.toggle('open',el.classList.contains('show'));
}

/* ── CHECKPOINT ── */
var cpState={1:false,2:false,3:false,4:false,5:false};
function launchConfetti(){
  var canvas=document.createElement('canvas');
  canvas.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);
  var ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  var pieces=[];
  var colors=['#F59E0B','#22D3EE','#34D399','#818CF8','#F87171','#C084FC'];
  for(var i=0;i<120;i++){
    pieces.push({x:Math.random()*canvas.width,y:-10,w:8+Math.random()*6,h:6+Math.random()*4,
      color:colors[Math.floor(Math.random()*colors.length)],
      vx:(Math.random()-0.5)*6,vy:3+Math.random()*5,rot:Math.random()*360,
      vr:(Math.random()-0.5)*8,op:1});
  }
  var frame=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(function(p){
      p.x+=p.vx;p.y+=p.vy;p.rot+=p.vr;p.vy+=0.12;
      if(frame>80)p.op=Math.max(0,p.op-0.018);
      ctx.save();ctx.globalAlpha=p.op;ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle=p.color;ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);ctx.restore();
    });
    frame++;
    if(frame<140)requestAnimationFrame(draw);else document.body.removeChild(canvas);
  }
  draw();
}
function toggleCP(n){
  cpState[n]=!cpState[n];
  document.getElementById('cpch'+n).classList.toggle('done',cpState[n]);
  document.getElementById('cp'+n).classList.toggle('done-item',cpState[n]);
  var done=Object.values(cpState).filter(Boolean).length;
  document.getElementById('cp-txt').textContent =done+' / 5 potvrđeno';
  var ready=done===5;
  document.getElementById('cp-ready').style.display=ready?'inline':'none';
  document.getElementById('cp-hint').style.display=ready?'none':'inline';
  tabProgress[2]=Math.max(tabProgress[2],Math.round(done/5*100));
  updateProg();
  if(ready){
    lsUpdate({cpDone:true});
    var active=document.querySelector('.sb-item.active[data-key]');
    if(active)active.classList.add('done-chapter');
    setTimeout(launchConfetti,200);
  }
}

/* ── INIT ── */
(function(){
  var d=lsLoad();d.visits=(d.visits||0)+1;lsSave(d);
  buildBodovnaKarta();
  buildTop5Chart();
  updateProg();
  restoreTab();
  checkRestoreBanner();
  updateGoalSummary();

  // Restore saved plan
  if(d.savedPlan){
    var planBtns=document.querySelectorAll('.plan-btn');
    planBtns.forEach(function(btn){
      if(btn.textContent.trim().startsWith(d.savedPlan+' ')){
        showPlan(d.savedPlan,btn);
        var tag=document.getElementById('plan-saved-tag');
        if(tag)tag.classList.add('show');
      }
    });
  }

  // Restore saved target grade
  if(d.targetGrade){
    var gradeCards=document.querySelectorAll('.ocj-card');
    gradeCards.forEach(function(card){
      if(card.classList.contains('grade-'+d.targetGrade)){
        showOcjena(d.targetGrade,card);
      }
    });
  }

  // Animate L0 on load
  setTimeout(animateStatCounters,400);
  setTimeout(animateTop5,600);
})();

/* P00B: clear done-chapter badges — intro page */
document.querySelectorAll('.sb-item.done-chapter').forEach(function(el){
  el.classList.remove('done-chapter');
});

/* ═══ PREMIUM GATES JS ═══ */
window.__pwTier = 'pro';
window.__pwChapter = 'P00B';
function openPaywall(feature) {
  var sub = document.getElementById('pw-sub');
  if (sub) {
    var msgs = {
      'ai': 'AI profesor odgovara na pitanja o strukturi ispita, bodovanju i strategiji pripreme.',
      'default': 'Pristupi AI profesoru, Discere simulatoru i personaliziranom planu učenja.'
    };
    sub.textContent = msgs[feature] || msgs['default'];
  }
  var m = document.getElementById('paywall-modal');
  if (m) m.classList.add('show');
}
function closePaywall() {
  var m = document.getElementById('paywall-modal');
  if (m) m.classList.remove('show');
}
function openDiscereModal() {
  var m = document.getElementById('discere-modal');
  if (m) m.classList.add('show');
}
function closeDiscereModal() {
  var m = document.getElementById('discere-modal');
  if (m) m.classList.remove('show');
}
function selectTier(t) {
  window.__pwTier = t;
  document.querySelectorAll('.paywall-tier').forEach(function(el) {
    if (el.textContent.toLowerCase().indexOf(t) !== -1) el.classList.add('pro');
    else el.classList.remove('pro');
  });
  var n = document.getElementById('pw-tier-name');
  if (n) n.textContent = t === 'pro' ? 'Pro' : 'Standard';
}
function goCheckout() {
  closePaywall();
  closeDiscereModal();
  if (window.parent && window.parent !== window) {
    window.parent.postMessage({type: 'maturiraj:navigateUrl', url: '/pro'}, '*');
  }
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closePaywall(); closeDiscereModal(); }
});

</script>
<!-- ═══ PAYWALL MODAL ═══ -->
<div class="paywall-modal" id="paywall-modal" onclick="if(event.target===this)closePaywall()" role="dialog" aria-modal="true" aria-labelledby="pw-h">
  <div class="paywall-card">
    <button class="paywall-close" onclick="closePaywall()" aria-label="Zatvori">×</button>
    <div class="paywall-h" id="pw-h">💎 Otključaj <span style="background:linear-gradient(135deg,#F59E0B,#F472B6);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Pro</span></div>
    <div class="paywall-sub" id="pw-sub">Pristupi AI profesoru, Discere simulatoru i personaliziranom planu učenja. Otkazivanje bilo kad.</div>
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

export const P00B_META = {
  code: 'P00B',
  title: 'Kalkulator &amp; alati',
  filename: 'Maturiraj_MatB_P00B_FIXED.html',
};

export default P00B_HTML;