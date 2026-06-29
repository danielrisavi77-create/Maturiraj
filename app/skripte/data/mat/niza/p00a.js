// Maturiraj MatB — P00A · Uvod u maturu
// Auto-generated from Maturiraj_MatB_P00A_FIXED.html
// Sadrži: cijeli HTML, CSS, JS runtime, sve podatke

export const P00A_HTML = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Kako koristiti maturiraj.hr skripte — vodič za interaktivno učenje matematike za državnu maturu B razina.">
<meta name="theme-color" content="#F59E0B">
<title>Maturiraj.hr — Mat B · P00A · Uvod u maturu</title>
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

/* ── START CARD DONE ── */
.start-card.done-card{border-color:var(--bd-g)}
.start-card.done-card::after{content:'✓ Završeno';position:absolute;top:14px;right:14px;font-family:var(--mono);font-size:9px;font-weight:700;color:var(--green);background:var(--dim-g);border:1px solid var(--bd-g);padding:2px 8px;border-radius:var(--r1)}
.start-card.done-card .start-card-arrow{color:var(--green)}

/* ── GON DEMO ── */
.demo-gon-stmt{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:14px 16px;font-family:var(--mono);font-size:13px;color:var(--t1);line-height:1.7;margin-bottom:14px;white-space:pre-line}
.demo-gon-btns{display:flex;gap:10px;justify-content:center;margin-bottom:10px}
.demo-gon-btn{padding:9px 28px;border:1.5px solid var(--bdm);background:var(--inp);border-radius:var(--r2);font-family:var(--mono);font-size:13px;font-weight:700;cursor:pointer;transition:all .14s}
.demo-gon-btn.ok-btn{color:var(--green)}.demo-gon-btn.ok-btn:hover:not(.dis){border-color:var(--bd-g);background:var(--dim-g)}
.demo-gon-btn.ng-btn{color:var(--red)}.demo-gon-btn.ng-btn:hover:not(.dis){border-color:var(--bd-r);background:var(--dim-r)}
.demo-gon-btn.dis{pointer-events:none;opacity:.4}
.demo-gon-fb{font-family:var(--mono);font-size:12px;text-align:center;min-height:18px;line-height:1.6}
.demo-gon-fb.ok{color:var(--green)}.demo-gon-fb.ng{color:var(--red)}

/* ── FLASHCARD DEMO ── */
.demo-fc{perspective:700px;height:110px;cursor:pointer;margin:0 auto;max-width:320px}
.demo-fc-inner{position:relative;width:100%;height:100%;transition:transform .45s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d}
.demo-fc.flipped .demo-fc-inner{transform:rotateY(180deg)}
.demo-fc-front,.demo-fc-back{position:absolute;inset:0;backface-visibility:hidden;border-radius:var(--r3);padding:14px 18px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
.demo-fc-front{background:var(--card);border:1.5px solid var(--bdm)}
.demo-fc-front:hover{border-color:var(--bd-a)}
.demo-fc-back{background:linear-gradient(135deg,rgba(245,158,11,0.1),rgba(34,211,238,0.04));border:1.5px solid var(--bd-a);transform:rotateY(180deg)}

/* ── SCROLL PROGRESS BAR ── */
#scroll-prog{position:fixed;top:0;left:0;height:2px;background:linear-gradient(90deg,var(--amber),var(--cyan));z-index:999;width:0%;transition:width .1s linear;pointer-events:none}

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
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content;overflow-x:auto;-webkit-overflow-scrolling:touch}
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
.box-warn{background:var(--dim-a);border:1px solid var(--bd-a);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bw-ico{font-size:16px;flex-shrink:0;margin-top:1px}.bw-body{flex:1}
.bw-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--amber);margin-bottom:5px}
.bw-txt{font-size:13px;line-height:1.78;color:var(--t2)}.bw-txt strong{color:var(--amber)}
.box-20{background:linear-gradient(135deg,rgba(52,211,153,0.065),rgba(34,211,238,0.02));border:1px solid var(--bd-g);border-radius:var(--r4);padding:16px 22px;margin:16px 0}
.b20-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:7px}
.b20-lbl::before{content:'⚡';font-size:11px}
.b20-list{list-style:none;display:flex;flex-direction:column;gap:7px}
.b20-item{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t1);line-height:1.6}
.b20-dot{width:6px;height:6px;background:var(--green);border-radius:1px;flex-shrink:0;margin-top:5px;transform:rotate(45deg)}

/* ── FEATURE CARDS ── */
.feat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:12px;margin:18px 0}
.feat-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;transition:all .15s;cursor:default}
.feat-card:hover{border-color:var(--bd-a);transform:translateY(-2px);box-shadow:0 4px 20px rgba(245,158,11,0.06)}
.feat-icon{font-size:22px;margin-bottom:10px}
.feat-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px}
.feat-desc{font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.6}
.feat-tag{display:inline-block;margin-top:8px;font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:var(--r1);background:var(--dim-a);color:var(--amber);border:1px solid var(--bd-a)}

/* ── HOW-TO STEPS ── */
.how-step{display:flex;gap:16px;align-items:flex-start;padding:16px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:10px;transition:border-color .15s}
.how-step:hover{border-color:var(--bd-a)}
.how-num{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;font-family:var(--mono);font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.how-body{flex:1}
.how-title{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:4px}
.how-txt{font-family:var(--mono);font-size:12px;color:var(--t2);line-height:1.7}
.how-txt strong{color:var(--amber)}

/* ── ELEMENT DEMO ── */
.demo-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.demo-head{padding:10px 18px;border-bottom:1px solid var(--bd);background:var(--sur);display:flex;align-items:center;justify-content:space-between}
.demo-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--amber);text-transform:uppercase}
.demo-tag{font-family:var(--mono);font-size:9px;color:var(--t3)}
.demo-body{padding:18px}

/* ── MINI QUIZ DEMO ── */
.demo-q{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:12px;line-height:1.55}
.demo-opts{display:flex;flex-wrap:wrap;gap:7px}
.demo-opt{padding:8px 16px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:12px;cursor:pointer;transition:all .13s;font-weight:600}
.demo-opt:hover:not(.dis){border-color:var(--bd-a);color:var(--amber)}
.demo-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.demo-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.demo-opt.dis{cursor:default;pointer-events:none}
.demo-fb{margin-top:10px;font-family:var(--mono);font-size:12px;line-height:1.7;display:none}
.demo-fb.show{display:block}
.demo-fb.ok{color:var(--green)}.demo-fb.ng{color:var(--red)}

/* ── MINI DRILL DEMO ── */
.demo-drill-q{font-size:20px;font-weight:800;color:var(--t1);text-align:center;font-family:var(--mono);margin-bottom:14px}
.demo-drill-opts{display:flex;gap:8px;justify-content:center;flex-wrap:wrap}
.demo-drill-opt{padding:9px 22px;border:1.5px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:13.5px;font-weight:700;cursor:pointer;transition:all .14s}
.demo-drill-opt:hover:not(.dis){border-color:var(--bd-v);color:var(--violet)}
.demo-drill-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.demo-drill-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.demo-drill-opt.dis{cursor:default;pointer-events:none}
.demo-drill-fb{text-align:center;font-family:var(--mono);font-size:12px;margin-top:8px;min-height:18px}
.demo-drill-fb.ok{color:var(--green)}.demo-drill-fb.ng{color:var(--red)}

/* ── MINI CHECKPOINT DEMO ── */
.demo-cp-item{display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:var(--r2);cursor:pointer;border:1px solid transparent;transition:all .15s;margin-bottom:6px}
.demo-cp-item:hover{background:var(--hov);border-color:var(--bdm)}
.demo-cp-item.done{border-color:var(--bd-g);background:rgba(52,211,153,0.02)}
.demo-cp-check{width:20px;height:20px;border:1.5px solid var(--bdm);border-radius:var(--r1);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .2s;font-size:11px;color:transparent}
.demo-cp-check.done{background:var(--green);border-color:var(--green);color:#060910;font-weight:700}
.demo-cp-txt{font-size:13px;color:var(--t2)}
.demo-cp-item.done .demo-cp-txt{color:var(--green)}

/* ── START CARDS ── */
.start-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:12px;margin:20px 0}
.start-card{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);padding:20px;transition:all .18s;cursor:pointer;position:relative;overflow:hidden;text-decoration:none;display:block}
.start-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:var(--gradient,linear-gradient(90deg,var(--amber),var(--cyan)))}
.start-card:hover{border-color:var(--bd-a);transform:translateY(-3px);box-shadow:0 8px 30px rgba(245,158,11,0.1)}
.start-card-tag{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase;margin-bottom:8px}
.start-card-title{font-size:15px;font-weight:800;color:var(--t1);margin-bottom:5px;letter-spacing:-.3px}
.start-card-sub{font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.6}
.start-card-arrow{position:absolute;bottom:18px;right:18px;font-size:16px;color:var(--amber);opacity:.5;transition:all .15s}
.start-card:hover .start-card-arrow{opacity:1;transform:translateX(3px)}

/* ── PROGRESS EXPLAINER ── */
.prog-demo{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px 18px;margin:16px 0}
.prog-demo-bar{height:4px;background:var(--bd);border-radius:2px;overflow:hidden;margin:10px 0}
.prog-demo-fill{height:100%;background:linear-gradient(90deg,var(--amber),var(--cyan));border-radius:2px;transition:width 1s cubic-bezier(.4,0,.2,1)}
.prog-demo-labels{display:flex;justify-content:space-between;font-family:var(--mono);font-size:10px;color:var(--t3)}

/* ── NAV ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:32px;padding-top:20px;border-top:1px solid var(--bd)}
.nb{display:inline-flex;align-items:center;gap:7px;font-family:var(--mono);font-size:11.5px;color:var(--t2);cursor:pointer;padding:9px 15px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;font-weight:600}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;border-color:transparent;font-weight:700;box-shadow:0 3px 16px rgba(245,158,11,0.25)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}
.nb.off{opacity:.22;pointer-events:none}

/* ── INTERAKTIVNA PRAVILA ── */
.pravila-wrap{background:var(--card);border:1px solid var(--bd-g);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.pravila-head{padding:13px 18px;border-bottom:1px solid var(--bd);background:rgba(52,211,153,0.03);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.pravila-lbl{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--green);text-transform:uppercase}
.pravila-cnt{font-family:var(--mono);font-size:10px;color:var(--t3);font-weight:700}
.pravila-list{padding:8px 14px}
.pravilo{display:flex;gap:14px;align-items:flex-start;padding:12px;border-radius:var(--r2);cursor:pointer;border:1px solid transparent;transition:all .2s;margin-bottom:4px}
.pravilo:hover{background:var(--hov);border-color:var(--bdm)}
.pravilo.done{background:rgba(52,211,153,0.03);border-color:var(--bd-g)}
.pravilo-check{width:24px;height:24px;border:1.5px solid var(--bdm);border-radius:var(--r1);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .25s;font-size:13px;color:transparent;margin-top:1px}
.pravilo.done .pravilo-check{background:var(--green);border-color:var(--green);color:#060910;font-weight:700}
.pravilo-body{flex:1}
.pravilo-title{font-size:13.5px;font-weight:700;color:var(--t1);margin-bottom:4px;transition:color .2s}
.pravilo.done .pravilo-title{color:var(--green)}
.pravilo-txt{font-family:var(--mono);font-size:11.5px;color:var(--t3);line-height:1.65;max-height:0;overflow:hidden;transition:max-height .35s cubic-bezier(.4,0,.2,1),opacity .25s,color .2s;opacity:0}
.pravilo:hover .pravilo-txt,.pravilo.done .pravilo-txt{max-height:80px;opacity:1;color:var(--t2)}
.pravila-foot{padding:12px 18px;border-top:1px solid var(--bd-g);font-family:var(--mono);font-size:12px;text-align:center}

/* ── PROGRESS SUMMARY ── */
.prog-summary{background:linear-gradient(135deg,rgba(245,158,11,0.06),rgba(34,211,238,0.03));border:1px solid var(--bd-a);border-radius:var(--r4);padding:20px 24px;margin:0 0 20px;position:relative;overflow:hidden}
.prog-summary::before{content:'';position:absolute;top:-40px;right:-40px;width:160px;height:160px;background:radial-gradient(circle,rgba(245,158,11,0.08) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.prog-summary-inner{display:flex;align-items:center;gap:24px;flex-wrap:wrap}
.prog-summary-left{text-align:center;flex-shrink:0}
.prog-summary-big{font-family:var(--mono);font-size:48px;font-weight:800;background:linear-gradient(135deg,var(--amber),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-2px;line-height:1;transition:all .6s cubic-bezier(.4,0,.2,1)}
.prog-summary-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:.5px;margin-top:4px}
.prog-summary-bar-wrap{flex:1;min-width:180px}
.prog-summary-bar{height:8px;background:var(--bd);border-radius:4px;overflow:hidden;margin-bottom:10px}
.prog-summary-fill{height:100%;background:linear-gradient(90deg,var(--amber),var(--cyan));border-radius:4px;transition:width 1s cubic-bezier(.4,0,.2,1)}
.prog-summary-sub{font-family:var(--mono);font-size:11.5px;color:var(--t2);line-height:1.6}

/* ── ENTRY ANIMATIONS ── */
@keyframes popIn{0%{opacity:0;transform:scale(.92) translateY(8px)}100%{opacity:1;transform:scale(1) translateY(0)}}
.start-card{animation:popIn .35s cubic-bezier(.4,0,.2,1) both}
.start-card:nth-child(1){animation-delay:.05s}
.start-card:nth-child(2){animation-delay:.1s}
.start-card:nth-child(3){animation-delay:.15s}
.start-card:nth-child(4){animation-delay:.2s}
.start-card:nth-child(5){animation-delay:.25s}
.start-card:nth-child(6){animation-delay:.3s}
.feat-card{animation:popIn .3s cubic-bezier(.4,0,.2,1) both}
.feat-card:nth-child(1){animation-delay:.05s}
.feat-card:nth-child(2){animation-delay:.1s}
.feat-card:nth-child(3){animation-delay:.15s}
.feat-card:nth-child(4){animation-delay:.2s}
.feat-card:nth-child(5){animation-delay:.25s}
.feat-card:nth-child(6){animation-delay:.3s}
@media(prefers-reduced-motion:reduce){.start-card,.feat-card{animation:none}}

/* ── SCROLL TO TOP ── */
#scroll-top{position:fixed;bottom:24px;right:24px;width:42px;height:42px;background:linear-gradient(135deg,var(--amber),#F0AB30);color:#060910;border:none;border-radius:50%;font-size:18px;cursor:pointer;z-index:100;box-shadow:0 4px 16px rgba(245,158,11,0.3);opacity:0;transform:translateY(14px);transition:all .25s cubic-bezier(.4,0,.2,1);display:flex;align-items:center;justify-content:center;pointer-events:none}
#scroll-top.show{opacity:1;transform:translateY(0);pointer-events:auto}
#scroll-top:hover{transform:translateY(-3px)}

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

/* ── RESPONSIVE ── */
@media(max-width:900px){.content-wrap{padding:26px 22px 80px}}
@media(max-width:720px){
  .sidebar{display:none;position:fixed;z-index:160;height:100vh;transform:translateX(-100%);transition:transform .25s.main{margin-left:0}}
  .sidebar.mobile-open{display:flex;transform:translateX(0)}
  .sb-hamburger{display:flex}
  .content-wrap{padding:18px 14px 80px}
  .hero{padding:22px 20px}.hero-title{font-size:24px}
  .feat-grid{grid-template-columns:1fr 1fr}
  .start-grid{grid-template-columns:1fr}
  .tabs{width:100%}.tab{flex:1;text-align:center;font-size:11px;padding:7px 4px}
}
@media(max-width:480px){.feat-grid{grid-template-columns:1fr}.tab span{display:none}}
@keyframes fadeSlide{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
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

  /* Feature kartice — 3 kolone */
  .feat-grid{grid-template-columns:repeat(3,1fr)}

  /* Start kartice — 3 kolone */
  .start-grid{grid-template-columns:repeat(3,1fr)}

  /* How steps — širi num */
  .how-step{gap:20px;padding:18px 22px}
  .how-num{width:36px;height:36px;font-size:15px}
  .how-title{font-size:15px}

  /* Demo wrap veći */
  .demo-body{padding:22px}
  .demo-gon-btn{padding:10px 34px}
  .demo-drill-q{font-size:22px}
  .demo-drill-opt{padding:10px 26px}

  /* Pravila — šire */
  .pravilo{gap:16px;padding:14px}
  .pravilo-title{font-size:14px}
  .pravilo-txt{font-size:12px}

  /* Prog summary */
  .prog-summary-big{font-size:56px}
  .prog-summary-inner{gap:28px}

  /* Tabs */
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
  .feat-grid{grid-template-columns:repeat(4,1fr)}
  .start-grid{grid-template-columns:repeat(4,1fr)}
  .sb-item{font-size:12.5px}
}

/* ════════════════════════════════════
   TABLET (768px – 1023px)
   ════════════════════════════════════ */
@media(min-width:768px) and (max-width:1023px){
  .content-wrap{max-width:720px;padding:32px 36px 100px}
  .feat-grid{grid-template-columns:repeat(2,1fr)}
  .start-grid{grid-template-columns:repeat(2,1fr)}
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

  /* Box komponente */
  .box-int{padding:14px 16px}
  .box-int-txt{font-size:13px;line-height:1.65}
  .box-warn{padding:12px 14px;gap:10px}
  .bw-title{font-size:12px}
  .bw-txt{font-size:12px}
  .box-tip{padding:12px 14px;gap:10px}

  /* ── P00A-SPECIFIČNO: Feature kartice ── */
  .feat-grid{grid-template-columns:1fr;gap:8px}
  .feat-card{padding:14px 16px;border-radius:var(--r3)}
  .feat-icon{font-size:20px;margin-bottom:8px}
  .feat-name{font-size:12.5px;margin-bottom:4px}
  .feat-desc{font-size:10.5px;line-height:1.55}
  .feat-tag{font-size:8.5px;margin-top:6px}

  /* ── P00A-SPECIFIČNO: Kako koristiti (how) ── */
  .how-step{padding:13px 14px;gap:12px;border-radius:var(--r3)}
  .how-num{width:28px;height:28px;font-size:12px;flex-shrink:0}
  .how-title{font-size:13px;margin-bottom:3px}
  .how-txt{font-size:11.5px;line-height:1.65}

  /* ── P00A-SPECIFIČNO: Demo komponente ── */
  .demo-wrap{border-radius:var(--r3)}
  .demo-head{padding:9px 12px;flex-wrap:wrap;gap:6px}
  .demo-lbl{font-size:8.5px;letter-spacing:1.5px}
  .demo-tag{font-size:8.5px}
  .demo-body{padding:13px 12px}

  /* Demo GON */
  .demo-gon-stmt{padding:12px 14px;font-size:13px;line-height:1.65}
  .demo-gon-btns{gap:8px}
  .demo-gon-btn{padding:9px 16px;font-size:12px;flex:1}
  .demo-gon-fb{font-size:11.5px}

  /* Demo Drill */
  .demo-drill-q{font-size:17px;margin-bottom:12px}
  .demo-drill-opts{gap:6px;flex-direction:column}
  .demo-drill-opt{padding:9px 14px;font-size:13px;text-align:center}
  .demo-drill-fb{font-size:11.5px;margin-top:6px}

  /* Demo Flashcard */
  .demo-fc{height:100px;max-width:100%}

  /* Demo Checkpoint */
  .demo-cp-item{padding:8px 11px;gap:8px}
  .demo-cp-check{width:18px;height:18px;flex-shrink:0}
  .demo-cp-txt{font-size:12.5px}

  /* Demo Kviz */
  .demo-q{font-size:13px;line-height:1.55;margin-bottom:10px}
  .demo-opts{gap:5px}
  .demo-opt{padding:7px 12px;font-size:12.5px}
  .demo-fb{font-size:11.5px;margin-top:8px}

  /* ── P00A-SPECIFIČNO: Pravila ── */
  .pravila-wrap{border-radius:var(--r3)}
  .pravila-head{padding:10px 12px;font-size:9.5px}
  .pravila-list{padding:6px 10px}
  .pravilo{gap:10px;padding:10px;border-radius:var(--r2)}
  .pravilo-check{width:20px;height:20px;flex-shrink:0}
  .pravilo-title{font-size:12.5px;margin-bottom:3px}
  .pravilo-txt{font-size:11px;line-height:1.6}

  /* ── P00A-SPECIFIČNO: Progress demo ── */
  .prog-demo{padding:14px 16px;border-radius:var(--r3)}
  .prog-demo-bar{margin:8px 0}
  .prog-demo-labels{font-size:10px}
  .prog-summary{padding:14px 16px;border-radius:var(--r3)}
  .prog-summary-inner{gap:14px;flex-wrap:wrap}
  .prog-summary-big{font-size:38px}
  .prog-summary-lbl{font-size:10.5px}
  .prog-summary-sub{font-size:11px}
  .prog-summary-left{flex:1;min-width:0}

  /* ── P00A-SPECIFIČNO: Start kartice ── */
  .start-grid{grid-template-columns:1fr;gap:8px}
  .start-card{padding:16px 18px;border-radius:var(--r3)}
  .start-card-tag{font-size:9px;margin-bottom:8px}
  .start-card-title{font-size:14px;margin-bottom:4px}
  .start-card-sub{font-size:10.5px}
  .start-card-arrow{font-size:16px}

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
  .how-num{width:24px;height:24px;font-size:11px}
  .demo-gon-btn{font-size:11px;padding:8px 12px}
  .demo-drill-opt{font-size:12px}
  .prog-summary-big{font-size:32px}
  .pravilo-title{font-size:12px}
}

.sidebar{overscroll-behavior:contain}

@media(max-width:720px){}
@media(max-width:480px){}
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
  <div class="sb-item active"><span class="sb-dot"></span>00A · Uvod u maturu<div class="sb-progress"><div class="sb-prog-track"><div class="sb-prog-fill" id="sb-prog-fill"></div></div><span class="sb-prog-pct" id="sb-prog-pct">0%</span></div></div>
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
  <span class="bc-cur">kako koristiti skripte</span>
  <span class="bc-sep">·</span><span style="color:var(--t3)">P00A</span>

    
    
    
    
  </div>

<div class="tabs" role="tablist">
  <div class="tab on" role="tab" aria-selected="true" id="tb0" onclick="sw(0)">⚡ 2 min <span class="tb" id="tb0">✓</span></div>
  <div class="tab" role="tab" aria-selected="false" id="tb1" onclick="sw(1)">📖 Kako koristiti <span class="tb" id="tb1">✓</span></div>
  <div class="tab" role="tab" aria-selected="false" id="tb2" onclick="sw(2)">🚀 Kreni <span class="tb" id="tb2">✓</span></div>
</div>

<div class="restore-banner" id="restore-banner">
  <div class="rb-txt">📖 Nastavi gdje si stao — <strong id="rb-tab-txt">zadnji tab</strong></div>
  <div class="rb-actions">
    <button class="rb-btn primary" onclick="restoreProgress()">Nastavi</button>
    <button class="rb-btn secondary" onclick="dismissRestore()">Ispočetka</button>
  </div>
</div>

<!-- ════ L0 — QUICK VIEW ════ -->
<div class="layer on" id="l0" role="tabpanel" aria-labelledby="tb0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">uvod · mat b razina · prije nego kreneš</div>
    <h1 class="hero-title">Dobrodošao u<br><span>Maturiraj.hr</span></h1>
    <p class="hero-sub">Ovaj vodič ti objašnjava kako funkcioniraju skripte — pročitaj ga jednom i znat ćeš kako izvući maksimum iz svake lekcije.</p>
    <div class="hero-meta">
      <span class="hchip a">20 poglavlja</span>
      <span class="hchip c">sve besplatno</span>
      <span class="hchip g">~5 min čitanja</span>
    </div>
    <div class="pt"><div class="pb" id="hero-pb" style="width:0%"></div></div>
  </div>

  <div class="box-int">
    <div class="box-int-lbl">Što je ovo?</div>
    <div class="box-int-txt">
      Svaka skripta je <em>interaktivna lekcija</em> — ne PDF, ne video.<br><br>
      Učiš aktivno: rješavaš zadatke, dobivaš trenutni feedback, pratiš napredak.<br>
      Svako poglavlje prati strukturu Mat B ispita i koristi <em>stvarne NCVVO zadatke</em>.
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Što svaka skripta sadrži</div><div class="sec-line"></div></div>

  <div class="feat-grid">
    <div class="feat-card">
      <div class="feat-icon">⚡</div>
      <div class="feat-name">2 min pregled</div>
      <div class="feat-desc">Sve što trebaš znati iz poglavlja u 2 minute. Idealno za dan ispita.</div>
      <span class="feat-tag">Tab 0</span>
    </div>
    <div class="feat-card">
      <div class="feat-icon">📐</div>
      <div class="feat-name">Lekcija</div>
      <div class="feat-desc">Teorija, formule, step-by-step primjeri, formula decoder, vizualizatori.</div>
      <span class="feat-tag">Tab 1</span>
    </div>
    <div class="feat-card">
      <div class="feat-icon">🧠</div>
      <div class="feat-name">Vježba</div>
      <div class="feat-desc">Drill streak, GON igra, maturalni timer, kviz i checkpoint.</div>
      <span class="feat-tag">Tab 2</span>
    </div>
    <div class="feat-card">
      <div class="feat-icon">📊</div>
      <div class="feat-name">Praćenje napretka</div>
      <div class="feat-desc">Svaki rezultat se sprema lokalno. Vidiš napredak kroz dane i tjedne.</div>
      <span class="feat-tag">Automatski</span>
    </div>
    <div class="feat-card">
      <div class="feat-icon">🔁</div>
      <div class="feat-name">Retry greške</div>
      <div class="feat-desc">Nakon kviza možeš vježbati samo ona pitanja koja si pogriješio.</div>
      <span class="feat-tag">Pametno</span>
    </div>
    <div class="feat-card">
      <div class="feat-icon">🧮</div>
      <div class="feat-name">Kalkulator</div>
      <div class="feat-desc">Ugrađeni kalkulator za sve varijante zadataka iz tog poglavlja.</div>
      <span class="feat-tag">Ugrađen</span>
    </div>
  </div>

  <!-- INTERAKTIVNIH 5 PRAVILA -->
  <div class="pravila-wrap" id="pravila-wrap">
    <div class="pravila-head">
      <span class="pravila-lbl">Kako izvući maksimum — 5 pravila</span>
      <span class="pravila-cnt" id="pravila-cnt">0 / 5 pročitano</span>
    </div>
    <div class="pravila-list">
      <div class="pravilo" id="pr1" onclick="togglePravilo(1)">
        <div class="pravilo-check" id="prch1">✓</div>
        <div class="pravilo-body">
          <div class="pravilo-title">⚡ Kreni s L0 (2 min pregled)</div>
          <div class="pravilo-txt">Dobij osjećaj za temu prije nego zaroniš u teoriju. Svaki L0 je napisan da te u 2 minute postavi u pravi mentalni okvir.</div>
        </div>
      </div>
      <div class="pravilo" id="pr2" onclick="togglePravilo(2)">
        <div class="pravilo-check" id="prch2">✓</div>
        <div class="pravilo-body">
          <div class="pravilo-title">📐 Prođi L1 step-by-step</div>
          <div class="pravilo-txt">Ne preskači korake u primjerima. Svaki korak postoji jer neki maturant tamo griješi. Ako ne razumiješ jedan korak — stani i razjasni ga.</div>
        </div>
      </div>
      <div class="pravilo" id="pr3" onclick="togglePravilo(3)">
        <div class="pravilo-check" id="prch3">✓</div>
        <div class="pravilo-body">
          <div class="pravilo-title">🧠 Vježbaj dok ne dobiješ zeleni checkpoint</div>
          <div class="pravilo-txt">Drill, GON, timer, kviz — sve dok nisi zadovoljan. Zeleni ✓ u sidebaru je tvoj cilj za svako poglavlje, ne samo prolazak kroz sadržaj.</div>
        </div>
      </div>
      <div class="pravilo" id="pr4" onclick="togglePravilo(4)">
        <div class="pravilo-check" id="prch4">✓</div>
        <div class="pravilo-body">
          <div class="pravilo-title">🔁 Koristi retry mod za greške</div>
          <div class="pravilo-txt">Nakon kviza pojavi se gumb "Vježbaj greške" — prikazuje samo pitanja koja si pogriješio. Greške su signal gdje treba raditi, ne kazna.</div>
        </div>
      </div>
      <div class="pravilo" id="pr5" onclick="togglePravilo(5)">
        <div class="pravilo-check" id="prch5">✓</div>
        <div class="pravilo-body">
          <div class="pravilo-title">📅 Vrati se dan prije ispita</div>
          <div class="pravilo-txt">L0 tab je napravljen točno za to — sve formule, sve zamke, svi tipovi zadataka u 2 minute po poglavlju. Prođi sva poglavlja jutro ispita.</div>
        </div>
      </div>
    </div>
    <div class="pravila-foot" id="pravila-foot" style="display:none">
      <span style="background:linear-gradient(135deg,var(--green),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700">🎯 Savršeno! Sada znaš kako izvući maksimum.</span>
    </div>
  </div>

  <div class="nav-row">
    <span class="nb off">← Nema prethodnog</span>
    <button class="nb primary" onclick="sw(1)">Kako koristiti →</button>
  </div>
</div>

<!-- ════ L1 — KAKO KORISTITI ════ -->
<div class="layer" id="l1" role="tabpanel" aria-labelledby="tb1">

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">01 · TABOVI I NAVIGACIJA</div><div class="sec-line"></div></div>

  <div class="how-step">
    <div class="how-num">1</div>
    <div class="how-body">
      <div class="how-title">Tri taba — tri načina učenja</div>
      <div class="how-txt">Svaka skripta ima 3 taba: <strong>⚡ 2 min</strong> (brzi pregled), <strong>📐 Uči</strong> (lekcija), <strong>🧠 Vježbaj</strong> (vježba). Zeleni ✓ badge na tabu znači da si dovoljno napredovao u tom tabu.</div>
    </div>
  </div>
  <div class="how-step">
    <div class="how-num">2</div>
    <div class="how-body">
      <div class="how-title">Napredak se sprema automatski</div>
      <div class="how-txt">Sve se sprema u browser lokalno — bez računa, bez prijave. Kad se vratiš na skriptu, pojavi se žuti banner "<strong>Nastavi gdje si stao</strong>" koji te vraća na zadnji tab.</div>
    </div>
  </div>
  <div class="how-step">
    <div class="how-num">3</div>
    <div class="how-body">
      <div class="how-title">Sidebar prikazuje dovršena poglavlja</div>
      <div class="how-txt">Kad završiš <strong>Checkpoint</strong> u nekom poglavlju, ta stavka u sidebaru postaje zelena s ✓. Tako uvijek vidiš gdje si.</div>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">02 · INTERAKTIVNI ELEMENTI</div><div class="sec-line"></div></div>

  <!-- DEMO: Step-by-step -->
  <div class="demo-wrap">
    <div class="demo-head">
      <span class="demo-lbl">Step-by-step primjer</span>
      <span class="demo-tag">Klik = sljedeći korak</span>
    </div>
    <div class="demo-body">
      <div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px">Otkriva korake jedan po jedan. <strong style="color:var(--amber)">Ne gledaj odgovor odmah</strong> — pokušaj sam, pa provjeri.</div>
      <div style="background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:12px 16px;margin-bottom:12px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:6px">ZADATAK</div>
        <div style="font-size:13px;color:var(--t1);font-weight:600">Televizor košta 2 000 €. Snižen je za 20%. Nova cijena = ?</div>
      </div>
      <div id="demo-sr-steps">
        <div id="dsr1" style="display:none;padding:11px 16px;background:var(--dim-a);border:1px solid var(--bd-a);border-radius:var(--r2);margin-bottom:8px;font-family:var(--mono);font-size:12.5px;color:var(--amber)">① Sniženje 20% → faktor = 1 − 0.20 = <strong>0.80</strong></div>
        <div id="dsr2" style="display:none;padding:11px 16px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);margin-bottom:8px;font-family:var(--mono);font-size:12.5px;color:var(--green)">② Nova cijena = 2000 × 0.80 = <strong>1 600 €</strong></div>
        <div id="dsr3" style="display:none;padding:11px 16px;background:var(--dim-c);border:1px solid var(--bd-c);border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;color:var(--cyan)">③ Provjera: 1600 ÷ 0.80 = 2000 ✓</div>
      </div>
      <div style="display:flex;gap:8px;margin-top:10px;align-items:center">
        <button onclick="demoSRNext()" id="dsr-btn" style="padding:7px 16px;border:1px solid var(--bd-a);background:var(--dim-a);color:var(--amber);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s">Sljedeći korak →</button>
        <button onclick="demoSRReset()" style="padding:7px 12px;border:1px solid var(--bdm);background:transparent;color:var(--t3);border-radius:var(--r2);font-family:var(--mono);font-size:11px;cursor:pointer">↺</button>
        <span id="dsr-prog" style="font-family:var(--mono);font-size:10px;color:var(--t3)">0 / 3</span>
      </div>
    </div>
  </div>

  <!-- DEMO: Quiz -->
  <div class="demo-wrap">
    <div class="demo-head">
      <span class="demo-lbl">Maturalni kviz</span>
      <span class="demo-tag">Trenutni feedback</span>
    </div>
    <div class="demo-body">
      <div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px">Svaki odgovor odmah pokazuje je li točan i objašnjava zašto. Na kraju vidiš rezultat i statistiku napretka.</div>
      <div class="demo-q">Sniženje od 25% — faktor je:</div>
      <div class="demo-opts">
        <div class="demo-opt" onclick="demoQA(this,false,'dqfb')">× 0.25</div>
        <div class="demo-opt" onclick="demoQA(this,false,'dqfb')">× 1.25</div>
        <div class="demo-opt" onclick="demoQA(this,true,'dqfb')">× 0.75</div>
        <div class="demo-opt" onclick="demoQA(this,false,'dqfb')">× 0.025</div>
      </div>
      <div class="demo-fb" id="dqfb"></div>
    </div>
  </div>

  <!-- DEMO: Drill -->
  <div class="demo-wrap">
    <div class="demo-head">
      <span class="demo-lbl">Drill — streak mod</span>
      <span class="demo-tag">Brzina + točnost</span>
    </div>
    <div class="demo-body">
      <div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px">Kratka pitanja, brzi odgovori. Gradi streak uzastopnih točnih — 🔥 badge od 2+. Trenira automatsko prepoznavanje formula.</div>
      <div class="demo-drill-q" id="ddq">× 0.70 je faktor za:</div>
      <div class="demo-drill-opts">
        <div class="demo-drill-opt" onclick="demoDrill(this,false)">+30%</div>
        <div class="demo-drill-opt" onclick="demoDrill(this,true)">−30%</div>
        <div class="demo-drill-opt" onclick="demoDrill(this,false)">×70</div>
      </div>
      <div class="demo-drill-fb" id="ddfb"></div>
    </div>
  </div>

  <!-- DEMO: Checkpoint -->
  <div class="demo-wrap">
    <div class="demo-head">
      <span class="demo-lbl">Checkpoint — samoprovjera</span>
      <span class="demo-tag">Klikni što znaš</span>
    </div>
    <div class="demo-body">
      <div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px">Na kraju svakog poglavlja potvrđuješ što si savladao. Kad potvrdiš sve stavke → zeleni ✓ u sidebaru i konfeti 🎉</div>
      <div class="demo-cp-item" onclick="demoCPToggle(this)">
        <div class="demo-cp-check">✓</div>
        <span class="demo-cp-txt">Znam izračunati X% od broja bez razmišljanja</span>
      </div>
      <div class="demo-cp-item" onclick="demoCPToggle(this)">
        <div class="demo-cp-check">✓</div>
        <span class="demo-cp-txt">Razumijem razliku između + X% i original iz X%</span>
      </div>
      <div class="demo-cp-item" onclick="demoCPToggle(this)">
        <div class="demo-cp-check">✓</div>
        <span class="demo-cp-txt">Mogu riješiti maturalni zadatak bez pomoći</span>
      </div>
    </div>
  </div>

  <!-- DEMO: GON -->
  <div class="demo-wrap">
    <div class="demo-head">
      <span class="demo-lbl">Greška ili ne? (GON)</span>
      <span class="demo-tag">Pronađi pogrešan korak</span>
    </div>
    <div class="demo-body">
      <div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px">Vidiš izračun učenika — je li točan ili ima grešku? Trenira prepoznavanje tipičnih zamki s maturalnih ispita.</div>
      <div class="demo-gon-stmt">Sniženje 30%: nova cijena = 350 €
Original = 350 + 30% = 350 + 105 = 455 €</div>
      <div class="demo-gon-btns">
        <button class="demo-gon-btn ok-btn" id="dgon-ok" onclick="demoGON(true)">✓ Točno</button>
        <button class="demo-gon-btn ng-btn" id="dgon-ng" onclick="demoGON(false)">✗ Greška</button>
      </div>
      <div class="demo-gon-fb" id="dgon-fb"></div>
    </div>
  </div>

  <!-- DEMO: Flashcard -->
  <div class="demo-wrap">
    <div class="demo-head">
      <span class="demo-lbl">Flash kartice</span>
      <span class="demo-tag">Klikni za okret</span>
    </div>
    <div class="demo-body">
      <div style="font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px">Formula na prednjoj strani, objašnjenje na stražnjoj. Klikni karticu — ili pritisni Enter/Space kad je fokusirana.</div>
      <div class="demo-fc" tabindex="0" onclick="this.classList.toggle('flipped')" onkeydown="if(event.key==='Enter'||event.key===' '){this.classList.toggle('flipped');event.preventDefault();}">
        <div class="demo-fc-inner">
          <div class="demo-fc-front">
            <div style="font-family:var(--mono);font-size:16px;font-weight:800;color:var(--t1);margin-bottom:6px">Smanjenje za X%</div>
            <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;text-transform:uppercase">klikni za formulu</div>
          </div>
          <div class="demo-fc-back">
            <div style="font-family:var(--mono);font-size:16px;font-weight:800;color:var(--amber);margin-bottom:5px">× (1 − X/100)</div>
            <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">Primjer: −30% → × 0.70</div>
            <div style="font-family:var(--mono);font-size:9px;color:var(--cyan);margin-top:6px;letter-spacing:1px;text-transform:uppercase">faktor smanjenja</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">03 · KEYBOARD PREČACI</div><div class="sec-line"></div></div>

  <div style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin:16px 0">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0">
      <div style="padding:12px 16px;border-right:1px solid var(--bd);border-bottom:1px solid var(--bd)">
        <div style="font-family:var(--mono);font-size:11px;color:var(--amber);margin-bottom:3px;font-weight:700">Enter</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">Potvrdi FITB odgovor</div>
      </div>
      <div style="padding:12px 16px;border-bottom:1px solid var(--bd)">
        <div style="font-family:var(--mono);font-size:11px;color:var(--amber);margin-bottom:3px;font-weight:700">Space</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">Sljedeći u Drill / GON</div>
      </div>
      <div style="padding:12px 16px;border-right:1px solid var(--bd);border-bottom:1px solid var(--bd)">
        <div style="font-family:var(--mono);font-size:11px;color:var(--amber);margin-bottom:3px;font-weight:700">→ (strelica)</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">Sljedeći step-by-step korak</div>
      </div>
      <div style="padding:12px 16px;border-bottom:1px solid var(--bd)">
        <div style="font-family:var(--mono);font-size:11px;color:var(--amber);margin-bottom:3px;font-weight:700">T / G</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">Točno / Greška u GON igri</div>
      </div>
      <div style="padding:12px 16px;border-right:1px solid var(--bd)">
        <div style="font-family:var(--mono);font-size:11px;color:var(--amber);margin-bottom:3px;font-weight:700">Tab + Enter/Space</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">Okreni flashcard</div>
      </div>
      <div style="padding:12px 16px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--amber);margin-bottom:3px;font-weight:700">Scroll ↓</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t2)">↑ gumb za povratak na vrh</div>
      </div>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">04 · NAPREDAK I STATISTIKE</div><div class="sec-line"></div></div>

  <div class="box-tip">
    <div class="bt-ico">💡</div>
    <div class="bt-body">
      <div class="bt-title">Kako funkcionira praćenje</div>
      <div class="bt-txt">Svi podaci ostaju <strong>u tvom browseru</strong> — nema cloud synca, nema računa. To znači: ako otvoriš drugu skriptu u drugim browseru, napredak se neće vidjeti tamo. Najsigurnije je uvijek koristiti isti browser.</div>
    </div>
  </div>

  <div class="prog-demo">
    <div style="font-family:var(--mono);font-size:10px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">Primjer — tvoj napredak na P02</div>
    <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:10px">
      <div style="text-align:center"><div style="font-family:var(--mono);font-size:18px;font-weight:800;color:var(--amber)" id="demo-visits">—</div><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">posjeta P00A</div></div>
      <div style="text-align:center"><div style="font-family:var(--mono);font-size:18px;font-weight:800;color:var(--cyan)" id="demo-drill">—</div><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">drill (P02)</div></div>
      <div style="text-align:center"><div style="font-family:var(--mono);font-size:18px;font-weight:800;color:var(--green)" id="demo-quiz">—</div><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">kviz best (P02)</div></div>
      <div style="text-align:center"><div style="font-family:var(--mono);font-size:18px;font-weight:800;color:var(--violet)" id="demo-cp">—</div><div style="font-family:var(--mono);font-size:9px;color:var(--t3)">checkpoint (P02)</div></div>
    </div>
    <div class="prog-demo-bar"><div class="prog-demo-fill" id="demo-pbar" style="width:0%"></div></div>
    <div class="prog-demo-labels"><span>0%</span><span id="demo-ppct">0%</span><span>100%</span></div>
    <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:8px">↑ Podaci se pune iz tvog browsera — vidjet ćeš stvarne vrijednosti ako si već koristio P02.</div>
  </div>

  <div class="box-warn">
    <div class="bw-ico">💾</div>
    <div class="bw-body">
      <div class="bw-title">Brisanje podataka</div>
      <div class="bw-txt">Svaka skripta ima <strong>"↺ Reset"</strong> gumb koji briše njezin napredak. Brisanje kolačića ili historije browsera briše sve napretke odjednom — pazi.</div>
    </div>
  </div>

  <div class="nav-row">
    <button class="nb" onclick="sw(0)">← Pregled</button>
    <button class="nb primary" onclick="sw(2)">Kreni →</button>
  </div>
</div>

<!-- ════ L2 — KRENI ════ -->
<div class="layer" id="l2" role="tabpanel" aria-labelledby="tb2">

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Odakle početi?</div><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">Preporuka</div>
    <div class="box-int-txt">
      Ako <em>ne znaš gdje si</em> — kreni od P00B koji ti kaže strukturu ispita i koliko bodova nosi svako poglavlje.<br><br>
      Ako <em>znaš što ti treba</em> — idi direktno na poglavlje. Svaka skripta je samostalna.
    </div>
  </div>

  <!-- PROGRESS SUMMARY -->
  <div class="prog-summary" id="prog-summary">
    <div class="prog-summary-inner">
      <div class="prog-summary-left">
        <div class="prog-summary-big" id="ps-done">0</div>
        <div class="prog-summary-lbl">od 20 poglavlja završeno</div>
      </div>
      <div class="prog-summary-bar-wrap">
        <div class="prog-summary-bar"><div class="prog-summary-fill" id="ps-bar" style="width:0%"></div></div>
        <div class="prog-summary-sub" id="ps-sub">Još ni jedno poglavlje nije označeno kao završeno. Kreni s P02!</div>
      </div>
    </div>
  </div>

  <div class="start-grid" id="start-grid">
    <span onclick="navigateChapter('p00b')" style="cursor:pointer;color:var(--amber)">
      <div style="--gradient:linear-gradient(90deg,var(--indigo),var(--violet))"></div>
      <div class="start-card-tag">Preporučeno prvo</div>
      <div class="start-card-title">P00B · Što te čeka na Mat B</div>
      <div class="start-card-sub">Struktura ispita, bodovi po poglavljima, plan učenja. Čitaj prije svega.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p01')" style="cursor:pointer;color:var(--amber)">
      <div class="start-card-tag">Temelji · P01</div>
      <div class="start-card-title">Skupovi i realni brojevi</div>
      <div class="start-card-sub">Realni, racionalni, iracionalni. Intervali, apsolutna vrijednost.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p02')" style="cursor:pointer;color:var(--amber)">
      <div class="start-card-tag">Temelji · P02 · ⭐⭐⭐⭐⭐</div>
      <div class="start-card-title">Postoci, proporcije, omjeri</div>
      <div class="start-card-sub">5–8 bodova na svakom ispitu. Najvažnije poglavlje za B razinu.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p03')" style="cursor:pointer;color:var(--amber)">
      <div class="start-card-tag">Temelji · P03</div>
      <div class="start-card-title">Potencije i korijeni</div>
      <div class="start-card-sub">Zakoni potencija, korijeni, racionalni eksponenti.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p04')" style="cursor:pointer;color:var(--amber)">
      <div style="--gradient:linear-gradient(90deg,var(--violet),var(--indigo))"></div>
      <div class="start-card-tag">Temelji · P04</div>
      <div class="start-card-title">Algebarski izrazi</div>
      <div class="start-card-sub">Rastav na faktore, kvadrat razlike, binomni razvoj.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p05')" style="cursor:pointer;color:var(--amber)">
      <div class="start-card-tag">Jednadžbe · P05</div>
      <div class="start-card-title">Linearne jednadžbe</div>
      <div class="start-card-sub">Osnova za sve ostalo — jednadžbe i nejednadžbe.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p06')" style="cursor:pointer;color:var(--amber)">
      <div class="start-card-tag">Jednadžbe · P06</div>
      <div class="start-card-title">Kvadratne jednadžbe</div>
      <div class="start-card-sub">Diskriminanta, vijetove formule, rastavni oblik.</div>
      <div class="start-card-arrow">→</div>
    </span>
  
    <span onclick="navigateChapter('p07')" style="cursor:pointer;color:var(--amber)">
      <div style="--gradient:linear-gradient(90deg,var(--cyan),var(--blue))"></div>
      <div class="start-card-tag">Jednadžbe · P07</div>
      <div class="start-card-title">Sustavi jednadžbi</div>
      <div class="start-card-sub">Supstitucija, eliminacija, Cramer. 5–9 bodova.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p09')" style="cursor:pointer;color:var(--amber)">
      <div style="--gradient:linear-gradient(90deg,var(--amber),#F97316)"></div>
      <div class="start-card-tag">Funkcije · P09</div>
      <div class="start-card-title">Kvadratna funkcija</div>
      <div class="start-card-sub">Tjeme, nultočke, diskriminanta, parabola. 6–10 bodova.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p17')" style="cursor:pointer;color:var(--amber)">
      <div style="--gradient:linear-gradient(90deg,var(--green),var(--cyan))"></div>
      <div class="start-card-tag">Kombinatorika · P13</div>
      <div class="start-card-title">Kombinatorika i vjerojatnost</div>
      <div class="start-card-sub">Permutacije, kombinacije, Bernoulli. 5–8 bodova.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p17')" style="cursor:pointer;color:var(--amber)">
      <div style="--gradient:linear-gradient(90deg,var(--violet),#F472B6)"></div>
      <div class="start-card-tag">Geometrija · P16</div>
      <div class="start-card-title">Geometrija ravnine</div>
      <div class="start-card-sub">Trokuti, kružnica, površine, Heron, poučci. 5–8 bodova.</div>
      <div class="start-card-arrow">→</div>
    </span>
    <span onclick="navigateChapter('p18')" style="cursor:pointer;color:var(--amber)">
      <div style="--gradient:linear-gradient(90deg,#10B981,#059669)"></div>
      <div class="start-card-tag">Financije · P18</div>
      <div class="start-card-title">Financijska matematika</div>
      <div class="start-card-sub">Kamate, postotci, anuitet, tečaj. 4–6 bodova.</div>
      <div class="start-card-arrow">→</div>
    </span>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><div class="sec-badge">Checkpoint — spreman sam</div><div class="sec-line"></div></div>

  <div class="checkpoint">
    <div class="cp-head">
      <span class="cp-title">Razumijem kako koristiti skripte</span>
      <span class="cp-cnt" id="cp-txt">0 / 4 potvrđeno</span>
    </div>
    <div class="cp-items">
      <div class="cp-item" id="cp1" onclick="toggleCP(1)"><div class="cp-check" id="cpch1">✓</div><span class="cp-txt">Znam da su sva 3 taba različite razine iste teme</span></div>
      <div class="cp-item" id="cp2" onclick="toggleCP(2)"><div class="cp-check" id="cpch2">✓</div><span class="cp-txt">Razumijem da napredak ostaje u browseru automatski</span></div>
      <div class="cp-item" id="cp3" onclick="toggleCP(3)"><div class="cp-check" id="cpch3">✓</div><span class="cp-txt">Znam što je retry mod i zašto ga koristim</span></div>
      <div class="cp-item" id="cp4" onclick="toggleCP(4)"><div class="cp-check" id="cpch4">✓</div><span class="cp-txt">Spreman sam krenuti na P00B ili P01</span></div>
    </div>
    <div class="cp-foot">
      <span id="cp-ready">🎉 Odlično! Kreni na P00B ili direktno na P01 →</span>
      <span id="cp-hint" style="color:var(--t3)">Potvrdi svaki korak koji razumiješ.</span>
    </div>
  </div>

<!-- ═══ PREMIUM GATE: AI PROFESOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Imaš pitanje o tome kako učiti ili odakle krenuti? Pitaj me — odgovorim odmah, korak po korak.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Kako rasporediti 3 tjedna učenja?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Koja poglavlja su najvažnija?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">💭 Koliko bodova trebam za 5?</span>
  </div>
  <div class="pg-ai-bubble">
    Plan učenja, prioriteti po poglavljima, strategija za maturu — <strong>AI profesor odgovara 24/7</strong><span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora →</button>
</div>

<!-- ═══ PREMIUM GATE: DISCERE SIMULATOR ═══ -->
<div class="pg-disc">
  <div class="pg-disc-hd">
    <div class="pg-disc-ico">🎯</div>
    <div style="flex:1;min-width:0">
      <div class="pg-disc-ttl">Discere Simulator <span class="pg-disc-badge">STANDARD</span></div>
      <div class="pg-disc-sub">Pravi ispit uvjeti — tajmer, bodovi, feedback. Provjeri se na 70+ stvarnih MAT B ispita.</div>
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
    <button class="nb" onclick="sw(1)">← Kako koristiti</button>
    <button class="nb primary" onclick="navigateChapter('p00b')">P00B Što te čeka →</button>
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
var tabNames={0:'⚡ 2 min',1:'📖 Kako koristiti',2:'🚀 Kreni'};
var currentTab=0;
var LS_KEY='matb_p00a';
function lsLoad(){try{return JSON.parse(localStorage.getItem(LS_KEY))||{};}catch(e){return {};}}
function lsSave(d){try{localStorage.setItem(LS_KEY,JSON.stringify(d));}catch(e){}}
function lsUpdate(patch){var d=lsLoad();Object.assign(d,patch);lsSave(d);}

function sw(n,skipSave){
  currentTab=n;
  document.querySelectorAll('.tab').forEach(function(t,i){t.classList.toggle('on',i===n);t.setAttribute('aria-selected',i===n?'true':'false');});
  document.querySelectorAll('.layer').forEach(function(l,i){l.classList.toggle('on',i===n)});
  if(n>0&&tabProgress[n]<10)tabProgress[n]=10;
  updateProg();
  var sbi=document.getElementById('sb-tab-indicator');
  if(sbi)sbi.textContent='Gledaš: '+tabNames[n];
  if(!skipSave)lsUpdate({lastTab:n});
  // Reset flashcard demo when leaving L1
  if(n!==1){var fc=document.querySelector('.demo-fc');if(fc)fc.classList.remove('flipped');}
  // Animate progress summary when entering L2
  if(n===2)setTimeout(animateProgSummary,200);
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

/* ── SIDEBAR ── */
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('mobile-open');document.getElementById('overlay').classList.toggle('show');}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}

/* ── SIDEBAR DONE CHAPTERS ── */

/* ── INTERAKTIVNA PRAVILA ── */
var pravilaState={1:false,2:false,3:false,4:false,5:false};
var pravilaDone=false;
function togglePravilo(n){
  pravilaState[n]=!pravilaState[n];
  var el=document.getElementById('pr'+n);
  var ch=document.getElementById('prch'+n);
  el.classList.toggle('done',pravilaState[n]);
  ch.classList.toggle('done',pravilaState[n]);
  var done=Object.values(pravilaState).filter(Boolean).length;
  document.getElementById('pravila-cnt').textContent =done+' / 5 pročitano';
  tabProgress[0]=Math.max(tabProgress[0],Math.round(done/5*100));
  updateProg();
  if(done===5&&!pravilaDone){
    pravilaDone=true;
    var foot=document.getElementById('pravila-foot');
    if(foot)foot.style.display='block';
    setTimeout(launchConfetti,300);
  }
}

/* ── PROGRESS SUMMARY ── */
function animateProgSummary(){
  // Count all chapters with cpDone across all matb_pXX keys
  var all=['matb_p00a','matb_p00b'];
  for(var i=1;i<=20;i++)all.push('matb_p0'+(i<10?'0':'')+i);
  // Actually scan all localStorage keys
  var done=0;
  var total=20; // P01–P20
  for(var k=1;k<=20;k++){
    var key='matb_p'+(k<10?'0':'')+k;
    try{var d=JSON.parse(localStorage.getItem(key)||'{}');if(d.cpDone)done++;}catch(e){}
  }
  var pct=Math.round(done/total*100);
  var bigEl=document.getElementById('ps-done');
  var barEl=document.getElementById('ps-bar');
  var subEl=document.getElementById('ps-sub');
  // Animated counter
  var start=0;
  var step=Math.ceil(done/20);
  var timer=setInterval(function(){
    start=Math.min(start+1,done);
    if(bigEl)bigEl.textContent=start;
    if(start>=done)clearInterval(timer);
  },60);
  if(barEl)barEl.style.width=pct+'%';
  if(subEl){
    if(done===0)subEl.textContent='Još ni jedno poglavlje nije završeno. Kreni s P02!';
    else if(done<5)subEl.textContent='Dobar početak! Još '+(total-done)+' poglavlja do kraja.';
    else if(done<10)subEl.textContent='Napredak vidljiv — '+done+' od '+total+' poglavlja završeno!';
    else if(done<20)subEl.textContent='Impresivno! Samo još '+(total-done)+' poglavlja. 💪';
    else subEl.textContent='🎉 Sve gotovo! Spreman si za maturu.';
  }
}

/* ── INIT ── */
(function(){
  var d=lsLoad();d.visits=(d.visits||0)+1;lsSave(d);
  updateProg();
  restoreTab();
  checkRestoreBanner();

  // Real stats from localStorage
  var self=lsLoad();
  var p02=JSON.parse(localStorage.getItem('matb_p02')||'{}');
  var el;
  el=document.getElementById('demo-visits');if(el)el.textContent=self.visits||1;
  el=document.getElementById('demo-drill');if(el)el.textContent=p02.drillPct!=null?p02.drillPct+'%':'—';
  el=document.getElementById('demo-quiz');if(el)el.textContent=p02.quizBest!=null?p02.quizBest+'/8':'—';
  el=document.getElementById('demo-cp');if(el)el.textContent=p02.cpDone?'✓':'—';
  // Progress bar based on P02 data
  var pbar=document.getElementById('demo-pbar');
  var ppct=document.getElementById('demo-ppct');
  var score=(p02.drillPct?25:0)+(p02.quizBest?Math.round(p02.quizBest/8*50):0)+(p02.cpDone?25:0);
  setTimeout(function(){
    if(pbar)pbar.style.width=score+'%';
    if(ppct)ppct.textContent=score+'%';
  },600);

  // Mark done start cards
  document.querySelectorAll('.start-card[data-chapter]').forEach(function(card){
    var key=card.getAttribute('data-chapter');
    try{var cd=JSON.parse(localStorage.getItem(key)||'{}');if(cd.cpDone)card.classList.add('done-card');}catch(e){}
  });
})();

/* ── RESTORE BANNER ── */
function checkRestoreBanner(){
  return; // always start on tab 0
  var d=lsLoad();
  if(!d.lastTab||d.lastTab===0)return;
  var names={1:'📖 Kako koristiti',2:'🚀 Kreni'};
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

/* ── DEMO: STEP REVEAL ── */
var dsrStep=0;
function demoSRNext(){
  dsrStep=Math.min(dsrStep+1,3);
  for(var i=1;i<=3;i++){
    var el=document.getElementById('dsr'+i);
    if(el)el.style.display=i<=dsrStep?'block':'none';
  }
  document.getElementById('dsr-prog').textContent =dsrStep+' / 3';
  if(dsrStep>=3){
    document.getElementById('dsr-btn').textContent ='✓ Završeno';
    document.getElementById('dsr-btn').disabled=true;
    document.getElementById('dsr-btn').style.opacity='.4';
    tabProgress[1]=Math.max(tabProgress[1],30);updateProg();
  }
}
function demoSRReset(){
  dsrStep=0;
  for(var i=1;i<=3;i++){var el=document.getElementById('dsr'+i);if(el)el.style.display='none';}
  document.getElementById('dsr-prog').textContent ='0 / 3';
  var btn=document.getElementById('dsr-btn');
  btn.textContent='Sljedeći korak →';btn.disabled=false;btn.style.opacity='1';
}

/* ── DEMO: QUIZ ── */
function demoQA(el,ok,fbId){
  el.closest('.demo-opts').querySelectorAll('.demo-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  if(!ok)el.closest('.demo-opts').querySelectorAll('.demo-opt').forEach(function(o){
    if(o.textContent.trim()==='× 0.75')o.classList.add('ok');
  });
  var fb=document.getElementById(fbId);
  fb.textContent=ok?'✓ Točno! −25% → 1−0.25 = faktor 0.75':'✗ Netočno. −25% → 1−0.25 = 0.75. Oduzmi od 1!';
  fb.className='demo-fb show '+(ok?'ok':'ng');
  tabProgress[1]=Math.max(tabProgress[1],50);updateProg();
}

/* ── DEMO: DRILL ── */
var ddDone=false;
function demoDrill(el,ok){
  if(ddDone)return;ddDone=true;
  el.closest('.demo-drill-opts').querySelectorAll('.demo-drill-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById('ddfb');
  fb.textContent=ok?'✓ Točno! ×0.70 = smanjenje za 30%':'✗ ×0.70 = smanjenje 30%. Faktor = 1−0.30.';
  fb.className='demo-drill-fb '+(ok?'ok':'ng');
  tabProgress[1]=Math.max(tabProgress[1],60);updateProg();
}

/* ── DEMO: GON ── */
var demoGONDone=false;
function demoGON(userSaysOk){
  if(demoGONDone)return;demoGONDone=true;
  // Correct answer: ✗ Greška (false) — dividing not adding
  var correct=!userSaysOk;
  document.getElementById('dgon-ok').classList.add('dis');
  document.getElementById('dgon-ng').classList.add('dis');
  var fb=document.getElementById('dgon-fb');
  if(correct){
    fb.textContent='✓ Točno! Greška je — original = 350 ÷ 0.70 = 500 €. Nikad ne dodavaj postotak!';
    fb.className='demo-gon-fb ok';
  } else {
    fb.textContent='✗ Nije točno. Izračun ima grešku — original = 350 ÷ 0.70 = 500 €, ne 455 €.';
    fb.className='demo-gon-fb ng';
  }
  tabProgress[1]=Math.max(tabProgress[1],80);updateProg();
}

/* ── DEMO: CHECKPOINT ── */
var demoCPDone=false;
function demoCPToggle(item){
  item.classList.toggle('done');
  var check=item.querySelector('.demo-cp-check');
  check.classList.toggle('done');
  tabProgress[1]=Math.max(tabProgress[1],70);updateProg();
  // Confetti kad su sva 3 označena
  if(!demoCPDone){
    var items=document.querySelectorAll('.demo-cp-item');
    var allDone=Array.from(items).every(function(i){return i.classList.contains('done');});
    if(allDone){demoCPDone=true;setTimeout(launchConfetti,200);}
  }
}

/* ── CONFETTI ── */
function launchConfetti(){
  var canvas=document.createElement('canvas');
  canvas.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999';
  document.body.appendChild(canvas);
  var ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  var pieces=[];
  var colors=['#F59E0B','#22D3EE','#34D399','#818CF8','#F87171','#C084FC'];
  for(var i=0;i<120;i++){
    pieces.push({
      x:Math.random()*canvas.width,y:-10,
      w:8+Math.random()*6,h:6+Math.random()*4,
      color:colors[Math.floor(Math.random()*colors.length)],
      vx:(Math.random()-0.5)*6,vy:3+Math.random()*5,
      rot:Math.random()*360,vr:(Math.random()-0.5)*8,
      op:1
    });
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

/* ── CHECKPOINT ── */
var cpState={1:false,2:false,3:false,4:false};
function toggleCP(n){
  cpState[n]=!cpState[n];
  document.getElementById('cpch'+n).classList.toggle('done',cpState[n]);
  document.getElementById('cp'+n).classList.toggle('done-item',cpState[n]);
  var done=Object.values(cpState).filter(Boolean).length;
  document.getElementById('cp-txt').textContent =done+' / 4 potvrđeno';
  var ready=done===4;
  document.getElementById('cp-ready').style.display=ready?'inline':'none';
  document.getElementById('cp-hint').style.display=ready?'none':'inline';
  tabProgress[2]=Math.max(tabProgress[2]||0,Math.round(done/4*100));
  updateProg();
  if(ready){
    lsUpdate({cpDone:true});
    var active=document.querySelector('.sb-item.active[data-key]');
    if(active)active.classList.add('done-chapter');
    setTimeout(launchConfetti,200);
  }
}

/* P00A: clear done-chapter badges — this is the intro page */
document.querySelectorAll('.sb-item.done-chapter').forEach(function(el){
  el.classList.remove('done-chapter');
});

/* ═══ PREMIUM GATES JS ═══ */
window.__pwTier = 'pro';
window.__pwChapter = 'P00A';
function openPaywall(feature) {
  var sub = document.getElementById('pw-sub');
  if (sub) {
    var msgs = {
      'ai': 'AI profesor kreira plan učenja, odgovara na pitanja o gradivu i prilagođava se tvom ritmu.',
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

</script></div>
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

export const P00A_META = {
  code: 'P00A',
  title: 'Uvod u maturu',
  filename: 'Maturiraj_MatB_P00A_FIXED.html',
};

export default P00A_HTML;