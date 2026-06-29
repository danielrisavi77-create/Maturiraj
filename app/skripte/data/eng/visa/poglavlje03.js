// Maturiraj.hr — Engleski viša razina
// Poglavlje 03: Vremena koja senajčešće miješaju
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 3,
  slug: "poglavlje03",
  title: "Vremena koja senaj\u010de\u0161\u0107e mije\u0161aju",
  subtitle: "Present Simple \u00b7 Present Continuous \u00b7 Past Simple \u00b7 Past Continuous \u00b7 Present Perfect \u00b7 Future forms",
  blok: 2,
  blokNaziv: "Gramatika",
  prev: 2,
  next: 4,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 3</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
<style>
:root {
  --bg-base:#060810;--bg-surface:#0A0D18;--bg-elevated:#0F1422;--bg-card:#131929;--bg-hover:#192035;--bg-input:#0D1120;
  --bd:rgba(255,255,255,0.06);--bd-mid:rgba(255,255,255,0.10);--bd-light:rgba(255,255,255,0.18);
  --t1:#EEF0F8;--t2:#8A95B8;--t3:#4A5580;
  --union-red:#CF142B;--union-red-dim:rgba(207,20,43,0.12);--union-red-bd:rgba(207,20,43,0.28);
  --gold:#C9A227;--gold-dim:rgba(201,162,39,0.12);--gold-bd:rgba(201,162,39,0.28);
  --cream:#B8B9E2;--cream-dim:rgba(184,185,226,0.10);--cream-bd:rgba(184,185,226,0.22);
  --blue:#4F7BE8;--blue-dim:rgba(79,123,232,0.12);--blue-border:rgba(79,123,232,0.28);--blue-glow:rgba(79,123,232,0.05);
  --brit-green:#4CAF7D;--brit-green-dim:rgba(76,175,125,0.12);--brit-green-bd:rgba(76,175,125,0.28);
  --amber:#E8A838;--amber-dim:rgba(232,168,56,0.12);--amber-border:rgba(232,168,56,0.28);
  --red:#E86060;--red-dim:rgba(232,96,96,0.12);--red-border:rgba(232,96,96,0.28);
  --green:#52D688;--green-dim:rgba(82,214,136,0.12);--green-border:rgba(82,214,136,0.28);
  --violet:#A78BFA;--violet-dim:rgba(167,139,250,0.12);--violet-border:rgba(167,139,250,0.28);
  --font:'DM Sans',system-ui,sans-serif;--serif:'Playfair Display',Georgia,serif;--mono:'DM Mono','Fira Code',monospace;
  --r1:4px;--r2:8px;--r3:12px;--r4:18px;--r5:26px;--sidebar:248px;
}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{font-size:16px;scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg-base);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.shell{display:flex;min-height:100vh}

.union-bar{height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 30%,#fff 30%,#fff 34%,var(--blue) 34%,var(--blue) 66%,#fff 66%,#fff 70%,var(--union-red) 70%,var(--union-red) 100%);position:fixed;top:0;left:0;right:0;z-index:999}

/* SIDEBAR */
.sidebar{width:var(--sidebar);flex-shrink:0;background:var(--bg-surface);border-right:1px solid var(--bd);position:fixed;top:3px;left:0;height:calc(100vh - 3px);overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bd-mid) transparent;z-index:100}
.sidebar::-webkit-scrollbar{width:3px}
.sidebar::-webkit-scrollbar-thumb{background:var(--bd-mid);border-radius:2px}
.sb-brand{padding:22px 18px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--union-red),var(--blue));border-radius:var(--r1);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden}
.sb-logo::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13h30M13 0v30M0 0l30 30M30 0L0 30' stroke='rgba(255,255,255,0.4)' stroke-width='2'/%3E%3C/path%3E%3C/svg%3E") center/cover}
.sb-logo svg{width:16px;height:16px;position:relative}
.sb-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1);letter-spacing:-0.2px}
.sb-sub{font-size:10px;color:var(--blue);margin-top:1px;font-family:var(--mono);letter-spacing:.5px}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:16px 18px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 18px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}
.sb-item.active{color:var(--blue);background:var(--blue-glow);border-left-color:var(--blue)}
.sb-item.done-ch{color:var(--brit-green)}
.sb-item.done-ch .sb-dot{background:var(--brit-green);opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
.sb-item.active .sb-dot{opacity:1}
.sb-footer{margin-top:auto;padding:12px 18px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.6;font-family:var(--mono)}

/* MAIN */
.main{flex:1;min-width:0;padding-top:3px;margin-left:var(--sidebar)}
.content-wrap{max-width:820px;width:100%;margin:0 auto;padding:36px 48px 100px}

/* BREADCRUMB */
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--t3);margin-bottom:28px;font-family:var(--mono)}
.bc-sep{opacity:.3}
.bc-active{color:var(--blue)}

/* TABS */
.tabs-wrap{display:flex;gap:0;margin-bottom:6px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:4px;width:fit-content}
.tab{display:flex;align-items:center;gap:6px;padding:8px 20px;font-size:12.5px;font-weight:500;color:var(--t2);cursor:pointer;border-radius:var(--r1);transition:all .15s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}
.tab.active{background:var(--blue);color:#fff;font-weight:700}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#060810;font-weight:700;flex-shrink:0}
.tab.done-tab .tab-check{display:inline-flex}
.layer{display:none}
.layer.active{display:block;animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}

.tab-progress-row{display:flex;align-items:center;gap:6px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}
.tab-prog-item.active{color:var(--blue);background:var(--blue-dim);border-color:var(--blue-border)}
.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}

/* HERO */
.hero{margin-bottom:32px;padding:36px 40px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 25%,#fff 25%,#fff 30%,var(--blue) 30%,var(--blue) 70%,#fff 70%,#fff 75%,var(--union-red) 75%)}
.hero::after{content:'03';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
.hero-eyebrow{font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:2px;margin-bottom:12px;text-transform:uppercase}
.hero-title{font-size:32px;font-weight:900;font-family:var(--serif);color:var(--t1);letter-spacing:-0.5px;line-height:1.1;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cream));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.hb-level{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.hb-chapter{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.hero-sub{font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:18px}
.progress-track{height:3px;background:var(--bd-mid);border-radius:2px;overflow:hidden;width:100%;max-width:420px}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:2px}

/* TAGS */
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.pill{display:inline-flex;align-items:center;padding:4px 12px;border-radius:var(--r1);font-size:11.5px;font-weight:600;font-family:var(--mono);border:1px solid;letter-spacing:.2px}
.pill-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.pill-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.pill-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.pill-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.pill-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.pill-amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.pill-cream{background:var(--cream-dim);color:var(--cream);border-color:var(--cream-bd)}

/* SECTION LABEL */
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}

/* STAT GRID */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s;cursor:default}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.blue{background:var(--blue-dim);color:var(--blue)}
.stat-icon.red{background:var(--union-red-dim);color:var(--union-red)}
.stat-icon.gold{background:var(--gold-dim);color:var(--gold)}
.stat-icon.green{background:var(--brit-green-dim);color:var(--brit-green)}
.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}
.stat-icon.amber{background:var(--amber-dim);color:var(--amber)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}

/* PROSE */
.prose{font-size:14.5px;line-height:1.85;color:rgba(238,240,248,.82);margin-bottom:16px}
.prose b,.prose strong{color:var(--t1);font-weight:600}
.prose em{color:var(--blue);font-style:normal}

/* GRAM BLOCK */
.gram{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.gram-head{display:flex;align-items:center;gap:12px;padding:14px 20px;border-bottom:1px solid var(--bd);background:var(--bg-surface)}
.gram-badge{font-family:var(--mono);font-size:11px;font-weight:500;padding:4px 10px;border-radius:var(--r1);border:1px solid}
.gram-badge.ps{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.gram-badge.pc{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.gram-badge.pp{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.gram-badge.past{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.gram-badge.fut{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.gram-title{font-size:15px;font-weight:600;color:var(--t1);font-family:var(--serif)}
.gram-sub{font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:1px}
.gram-body{padding:20px 24px}

/* FORMULA */
.formula{background:var(--bg-input);border:1px solid var(--bd-mid);border-left:3px solid var(--blue);border-radius:0 var(--r2) var(--r2) 0;padding:12px 16px;margin:12px 0;font-family:var(--mono);font-size:13px;line-height:2;position:relative}
.formula.violet{border-left-color:var(--violet)}
.formula.green{border-left-color:var(--brit-green)}
.formula.red{border-left-color:var(--union-red)}
.formula.gold{border-left-color:var(--gold)}
.formula .lbl{color:var(--t1);font-weight:500}
.formula .val{color:var(--blue)}
.formula.violet .val{color:var(--violet)}
.formula.green .val{color:var(--brit-green)}
.formula.red .val{color:var(--union-red)}
.formula.gold .val{color:var(--gold)}
.formula .kw{color:var(--amber)}
.formula .sub{color:var(--t3)}

/* EXAMPLES */
.exs{margin:14px 0 20px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-en{font-size:14px;color:var(--t1);line-height:1.5}
.ex-en b.blue{color:var(--blue);font-weight:600}
.ex-en b.violet{color:var(--violet);font-weight:600}
.ex-en b.green{color:var(--brit-green);font-weight:600}
.ex-en b.red{color:var(--union-red);font-weight:600}
.ex-en b.gold{color:var(--gold);font-weight:600}
.ex-arr{color:var(--t3);font-size:12px;padding-top:2px}
.ex-hr{font-size:12.5px;color:var(--t2);line-height:1.5;font-family:var(--mono)}

/* COMPARE */
.compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 24px}
.cmp-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden}
.cmp-head{padding:10px 14px;font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-head.blue{background:var(--blue-dim);color:var(--blue);border-bottom-color:var(--blue-border)}
.cmp-head.violet{background:var(--violet-dim);color:var(--violet);border-bottom-color:var(--violet-border)}
.cmp-head.green{background:var(--brit-green-dim);color:var(--brit-green);border-bottom-color:var(--brit-green-bd)}
.cmp-head.red{background:var(--union-red-dim);color:var(--union-red);border-bottom-color:var(--union-red-bd)}
.cmp-head.gold{background:var(--gold-dim);color:var(--gold);border-bottom-color:var(--gold-bd)}
.cmp-body{padding:12px 14px}
.cmp-row{font-size:12.5px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.5}
.cmp-row:last-child{border-bottom:none}
.cmp-row b{color:var(--t1);display:block;font-size:12px;margin-bottom:1px}

/* SIGNAL WORDS */
.sig-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin:14px 0 22px}
.sig-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px}
.sig-head{font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.sig-head.blue{color:var(--blue)}
.sig-head.violet{color:var(--violet)}
.sig-head.green{color:var(--brit-green)}
.sig-head.red{color:var(--union-red)}
.sig-head.gold{color:var(--gold)}
.chips{display:flex;flex-wrap:wrap;gap:5px}
.chip{font-family:var(--mono);font-size:11.5px;padding:3px 9px;border-radius:var(--r1);border:1px solid;transition:all .12s;cursor:default}
.chip:hover{transform:translateY(-1px)}
.chip.blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.chip.violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.chip.green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.chip.red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.chip.gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.chip.amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}

/* CALLOUT */
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn{background:var(--red-dim);border-color:var(--red-border)}
.callout-tip{background:var(--amber-dim);border-color:var(--amber-border)}
.callout-info{background:var(--blue-dim);border-color:var(--blue-border)}
.callout-green{background:var(--brit-green-dim);border-color:var(--brit-green-bd)}
.callout-royal{background:var(--cream-dim);border-color:var(--cream-bd)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}
.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn .callout-title{color:var(--red)}
.callout-tip .callout-title{color:var(--amber)}
.callout-info .callout-title{color:var(--blue)}
.callout-green .callout-title{color:var(--brit-green)}
.callout-royal .callout-title{color:var(--cream)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}
.callout-text b{color:var(--t1)}

/* PANIC BOX */
.panic-box{background:linear-gradient(135deg,rgba(79,123,232,.05),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.panic-hd{background:linear-gradient(90deg,var(--union-red),#1C3A8A);padding:11px 20px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.panic-body{padding:18px 20px}
.panic-step{display:flex;align-items:flex-start;gap:14px;padding:9px 0;border-bottom:1px solid rgba(79,123,232,.10)}
.panic-step:last-child{border-bottom:none}
.panic-num{width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.panic-text{font-size:13px;color:rgba(238,240,248,.85);line-height:1.65}
.panic-text b{color:var(--t1)}

/* REVEAL CARDS */
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.rq-icon{font-size:16px;flex-shrink:0}
.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .28s ease,padding .28s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:500px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b,.reveal-ans strong{color:var(--t1)}
.reveal-ans .ok{color:var(--green)}
.reveal-ans .bad{color:var(--red)}
.reveal-ans .note{color:var(--blue)}

/* DECISION TREE */
.dtree{margin:18px 0 26px}
.dt-node{border-radius:var(--r3);border:1px solid;padding:13px 16px;margin-bottom:6px;font-size:13px;font-weight:600;line-height:1.4}
.dt-node.question{background:var(--bg-card);border-color:var(--bd-mid);color:var(--t1)}
.dt-node.yes-blue{background:var(--blue-dim);border-color:var(--blue-border);color:var(--blue)}
.dt-node.yes-violet{background:var(--violet-dim);border-color:var(--violet-border);color:var(--violet)}
.dt-node.yes-green{background:var(--brit-green-dim);border-color:var(--brit-green-bd);color:var(--brit-green)}
.dt-node.yes-red{background:var(--union-red-dim);border-color:var(--union-red-bd);color:var(--union-red)}
.dt-node.yes-gold{background:var(--gold-dim);border-color:var(--gold-bd);color:var(--gold)}
.dt-node.note{background:var(--amber-dim);border-color:var(--amber-border);color:var(--amber);font-size:12px;font-weight:500;font-family:var(--mono)}
.dt-row{display:flex;align-items:stretch;gap:6px;margin-bottom:6px}
.dt-branch{flex:1}
.dt-connector{font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;padding:5px 4px;white-space:nowrap;align-self:center}
.dt-indent{padding-left:22px;border-left:2px solid var(--bd-mid);margin-left:6px;margin-bottom:6px}

/* SPEED DRILL */
.sd-wrap{margin:18px 0}
.sd-intro{font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2)}
.sd-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:18px 20px;margin-bottom:14px}
.sd-sent{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:14px;letter-spacing:-0.1px;line-height:1.45;font-family:var(--serif)}
.sd-sent code{font-family:var(--mono);font-size:14px;background:var(--bg-input);padding:1px 8px;border-radius:var(--r1);color:var(--amber);font-weight:400}
.sd-btns{display:flex;gap:8px;flex-wrap:wrap}
.sd-btn{flex:1;text-align:center;padding:9px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s;user-select:none;min-width:80px}
.sd-btn.opt-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.sd-btn.opt-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.sd-btn.opt-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.sd-btn.opt-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.sd-btn.opt-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.sd-btn:hover:not(.picked){opacity:.75;transform:translateY(-1px)}
.sd-btn.correct-pick{background:var(--green);color:#060810;border-color:var(--green);pointer-events:none}
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
.sd-dot.cur{border-color:var(--blue);background:var(--blue-dim)}
.sd-score{text-align:center;padding:28px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);display:none}
.sd-score.show{display:block}
.sd-score-num{font-size:48px;font-weight:700;color:var(--blue);font-family:var(--serif);letter-spacing:-2px}
.sd-score-lbl{font-size:13px;color:var(--t2);margin-top:6px}
.sd-retry{margin-top:14px;padding:9px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer}

/* ERROR CORRECTION DRILL */
.err-drill{margin:18px 0}
.err-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:10px}
.err-sent{padding:14px 18px;font-size:14.5px;font-weight:600;color:var(--red);letter-spacing:-0.1px;border-bottom:1px solid var(--bd);font-family:var(--serif)}
.err-btn{display:block;width:100%;text-align:left;padding:10px 18px;font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t3);background:transparent;border:none;cursor:pointer;transition:color .12s;letter-spacing:.3px}
.err-btn:hover{color:var(--amber)}
.err-fix{display:none;padding:12px 18px;font-family:var(--mono);font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);background:var(--bg-surface)}
.err-fix.show{display:block}
.err-fix .correct{color:var(--green);font-weight:600}
.err-fix .explain{color:var(--t2);font-size:12px;margin-top:4px;display:block}

/* QUIZ */
.quiz-intro{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;font-size:13px;color:var(--t2);margin-bottom:22px;font-family:var(--mono);line-height:1.65}
.quiz-intro strong{color:var(--blue)}
.q-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px}
.q-head{padding:14px 18px;border-bottom:1px solid var(--bd)}
.q-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:500;letter-spacing:.5px;margin-bottom:6px;text-transform:uppercase}
.q-text{font-size:14.5px;font-weight:600;color:var(--t1);line-height:1.5;letter-spacing:-0.1px}
.q-opts{padding:12px 18px;display:flex;flex-direction:column;gap:6px}
.q-opt{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13.5px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none;font-family:var(--mono)}
.q-opt:hover:not(.disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.q-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}
.q-opt.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red)}
.q-opt.disabled{cursor:default;pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
.expl-no{background:var(--red-dim);border:1px solid var(--red-border);color:var(--red);padding:10px 14px;border-radius:var(--r2)}

/* CHECKPOINT */
.checkpoint-gate{background:var(--bg-card);border:2px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0}
.cg-hd{background:linear-gradient(90deg,var(--blue-dim),transparent);padding:14px 20px;border-bottom:1px solid var(--blue-border);display:flex;align-items:center;gap:10px}
.cg-icon{font-size:18px}
.cg-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}
.cg-sub{font-family:var(--mono);font-size:10px;color:var(--blue);margin-top:2px}
.cg-body{padding:20px 24px}
.cg-question{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:16px;line-height:1.4}
.cg-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.cg-opt{display:flex;align-items:center;gap:10px;padding:11px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none}
.cg-opt:hover:not(.cg-disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.cg-opt.cg-correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green);pointer-events:none}
.cg-opt.cg-wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red);pointer-events:none}
.cg-opt.cg-disabled{pointer-events:none}
.cg-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3);font-family:var(--mono)}
.cg-feedback{display:none;padding:12px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.65;margin-top:4px}
.cg-feedback.show{display:block}
.cg-feedback.pass{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green)}
.cg-feedback.fail{background:var(--red-dim);border:1px solid var(--red-border);color:var(--red)}
.cg-unlock{display:none;margin-top:14px;padding:11px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;width:100%;transition:opacity .15s}
.cg-unlock:hover{opacity:.88}
.cg-unlock.show{display:block}

/* STICKY TIP BAR */
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;gap:0;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}
.tip-item.done{color:var(--green)}
.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:background .15s}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}

/* DISCERE BOX */
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}
.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}
.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;white-space:nowrap;transition:opacity .15s;text-decoration:none;display:inline-block}
.discere-btn:hover{opacity:.85}

/* NAV ROW */
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card);text-decoration:none;display:inline-block}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}
.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue)}
.nav-btn.primary:hover{opacity:.88}

/* BACK TO TOP */
.back-top{position:fixed;bottom:86px;right:24px;z-index:200;width:38px;height:38px;border-radius:50%;background:var(--bg-card);border:1px solid var(--bd-mid);color:var(--t3);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s,color .15s;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.back-top.show{opacity:1;pointer-events:auto}
.back-top:hover{color:var(--blue);border-color:var(--blue-border);transform:translateY(-2px)}
@media(min-width:721px){.back-top{right:32px;bottom:32px}}

/* CONFETTI */
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;top:-10px;width:8px;height:8px;border-radius:2px;pointer-events:none;z-index:9999;animation:confettiFall linear forwards}
/* QUIZ EXPORT BTN */
.quiz-export-btn{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;transition:all .15s;margin-top:10px}
.quiz-export-btn:hover{color:var(--t1);border-color:var(--bd-light);background:var(--bg-hover)}
/* MOBILE */
.hamburger{display:none;position:fixed;bottom:22px;right:22px;z-index:300;width:50px;height:50px;background:var(--blue);border-radius:50%;border:none;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(79,123,232,.4);transition:transform .15s}
.hamburger:hover{transform:scale(1.08)}
.hamburger svg{width:20px;height:20px}
.mob-drawer{display:none;position:fixed;inset:0;z-index:250;background:rgba(6,8,16,.95);backdrop-filter:blur(8px);flex-direction:column;padding:28px 24px;overflow-y:auto}
.mob-drawer.open{display:flex}
.mob-drawer-close{align-self:flex-end;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 18px;font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;margin-bottom:20px}
.mob-drawer .sb-label{padding:14px 0 5px}
.mob-drawer .sb-item{padding:10px 0;border-left:none;border-bottom:1px solid var(--bd)}
@media(max-width:720px){.hamburger{display:flex}.sidebar{display:none}.main{margin-left:0}}
@media(max-width:680px){.compare{grid-template-columns:1fr}.dt-row{flex-direction:column}}
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}.sd-btns{flex-direction:column}.sd-btn{flex:none}}
/* ── CONFETTI CANVAS ── */
#confettiCanvas{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;display:none}
/* ── QUIZ EXPORT ── */
.quiz-export-wrap{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;margin-top:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px}
.quiz-export-score{font-family:var(--serif);font-size:22px;font-weight:900;color:var(--blue);letter-spacing:-0.5px}
.quiz-export-lbl{font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:2px;letter-spacing:1px}
.quiz-export-btn{font-family:var(--mono);font-size:11px;font-weight:700;padding:8px 16px;border-radius:var(--r2);background:var(--bg-input);border:1px solid var(--bd-mid);color:var(--t2);cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:6px}
.quiz-export-btn:hover{color:var(--t1);border-color:var(--bd-light);background:var(--bg-hover)}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}

/* ══════ PREMIUM GATES ══════ */
.pg-ai{position:relative;margin:24px 0;padding:22px 22px 20px;background:linear-gradient(135deg,rgba(79,123,232,0.06),rgba(167,139,250,0.06));border:1px solid transparent;border-radius:16px;overflow:hidden;isolation:isolate}
.pg-ai::before{content:"";position:absolute;inset:0;border-radius:16px;padding:1px;background:linear-gradient(135deg,#4F7BE8,#A78BFA,#4F7BE8);-webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);-webkit-mask-composite:xor;mask-composite:exclude;background-size:200% 200%;animation:pg-border 4s linear infinite;z-index:-1}
@keyframes pg-border{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.pg-ai-hd{display:flex;align-items:center;gap:12px;margin-bottom:12px}
.pg-ai-ico{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#4F7BE8,#A78BFA);display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;box-shadow:0 0 0 0 rgba(167,139,250,0.5);animation:pg-pulse 2s ease-in-out infinite}
@keyframes pg-pulse{0%{box-shadow:0 0 0 0 rgba(167,139,250,0.5)}70%{box-shadow:0 0 0 14px rgba(167,139,250,0)}100%{box-shadow:0 0 0 0 rgba(167,139,250,0)}}
.pg-ai-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#A78BFA;letter-spacing:2px;text-transform:uppercase;line-height:1.2}
.pg-ai-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-ai-chips{display:flex;flex-wrap:wrap;gap:6px;margin:14px 0 12px}
.pg-ai-chip{font-family:var(--mono);font-size:10.5px;padding:6px 10px;background:rgba(79,123,232,0.08);border:1px solid rgba(79,123,232,0.25);border-radius:999px;color:#4F7BE8;cursor:pointer;transition:all .15s}
.pg-ai-chip:hover{background:rgba(79,123,232,0.15);transform:translateY(-1px)}
.pg-ai-bubble{background:rgba(6,8,16,0.6);border:1px solid rgba(167,139,250,0.2);border-radius:12px;padding:12px 14px;margin-bottom:14px;position:relative;font-size:12.5px;color:var(--t2);line-height:1.55}
.pg-ai-bubble::before{content:"AI";position:absolute;top:-10px;left:12px;background:linear-gradient(135deg,#4F7BE8,#A78BFA);color:#fff;font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 7px;border-radius:4px;letter-spacing:1px}
.pg-ai-typing{display:inline-flex;gap:3px;margin-left:4px;vertical-align:middle}
.pg-ai-typing span{width:5px;height:5px;border-radius:50%;background:#A78BFA;animation:pg-typing 1.4s ease-in-out infinite}
.pg-ai-typing span:nth-child(2){animation-delay:0.2s}
.pg-ai-typing span:nth-child(3){animation-delay:0.4s}
@keyframes pg-typing{0%,60%,100%{opacity:0.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}
.pg-ai-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#4F7BE8,#A78BFA);color:#fff;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(79,123,232,0.3)}
.pg-ai-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(79,123,232,0.4)}
.pg-ai-badge{font-family:var(--mono);font-size:9px;color:#A78BFA;padding:3px 8px;background:rgba(167,139,250,0.1);border:1px solid rgba(167,139,250,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}
.pg-disc{position:relative;margin:24px 0;padding:22px;background:linear-gradient(135deg,rgba(76,175,125,0.05),rgba(52,211,153,0.05));border:1px solid rgba(76,175,125,0.25);border-radius:16px;overflow:hidden}
.pg-disc::before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#4CAF7D,#34D399,#4CAF7D);background-size:200% 100%;animation:pg-slide 3s linear infinite}
@keyframes pg-slide{0%{background-position:0% 0}100%{background-position:200% 0}}
.pg-disc-hd{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.pg-disc-ico{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#4CAF7D,#34D399);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;position:relative}
.pg-disc-ico::after{content:"";position:absolute;inset:-3px;border:2px solid rgba(76,175,125,0.4);border-radius:14px;animation:pg-ring 2s ease-in-out infinite}
@keyframes pg-ring{0%,100%{transform:scale(1);opacity:0.6}50%{transform:scale(1.1);opacity:0}}
.pg-disc-ttl{font-family:var(--mono);font-size:12px;font-weight:700;color:#4CAF7D;letter-spacing:2px;text-transform:uppercase}
.pg-disc-sub{font-size:13px;color:var(--t2);line-height:1.5;margin-top:4px}
.pg-disc-split{display:grid;grid-template-columns:1fr auto 1fr;gap:12px;align-items:center;margin:16px 0;padding:12px;background:rgba(6,8,16,0.5);border:1px solid rgba(76,175,125,0.15);border-radius:12px}
.pg-disc-col{text-align:center}
.pg-disc-col-ttl{font-family:var(--mono);font-size:8.5px;color:var(--t3);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:6px}
.pg-disc-col-val{font-size:22px;font-weight:700;color:var(--t2);line-height:1}
.pg-disc-col.on .pg-disc-col-val{background:linear-gradient(135deg,#4CAF7D,#34D399);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.pg-disc-col-sub{font-size:10px;color:var(--t3);margin-top:3px}
.pg-disc-arrow{font-size:16px;color:#4CAF7D;font-weight:700}
.pg-disc-stats{display:flex;gap:16px;margin:12px 0 16px;flex-wrap:wrap}
.pg-disc-stat{display:flex;align-items:baseline;gap:6px}
.pg-disc-stat-n{font-size:19px;font-weight:700;color:#4CAF7D}
.pg-disc-stat-l{font-size:10.5px;color:var(--t3);font-family:var(--mono);text-transform:uppercase;letter-spacing:1px}
.pg-disc-cta{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;background:linear-gradient(135deg,#4CAF7D,#34D399);color:#060810;border:none;border-radius:10px;font-family:var(--mono);font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;cursor:pointer;transition:all .2s;box-shadow:0 4px 18px rgba(76,175,125,0.3)}
.pg-disc-cta:hover{transform:translateY(-2px);box-shadow:0 6px 24px rgba(76,175,125,0.4)}
.pg-disc-badge{font-family:var(--mono);font-size:9px;color:#4CAF7D;padding:3px 8px;background:rgba(76,175,125,0.12);border:1px solid rgba(76,175,125,0.3);border-radius:999px;letter-spacing:1.5px;margin-left:10px}
.paywall-modal{position:fixed;inset:0;z-index:9999;background:rgba(6,8,16,0.88);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:20px}
.paywall-modal.show{display:flex}
.paywall-card{background:var(--bg-surface);border:1px solid rgba(201,162,39,0.3);border-radius:16px;max-width:440px;width:100%;padding:28px 24px;position:relative;animation:pwSlide 0.25s ease-out}
@keyframes pwSlide{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
.paywall-close{position:absolute;top:12px;right:12px;background:transparent;border:none;color:var(--t2);font-size:20px;cursor:pointer;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center}
.paywall-close:hover{background:var(--bg-elevated);color:var(--t1)}
.paywall-h{font-size:20px;font-weight:800;color:var(--t1);margin-bottom:6px;padding-right:32px}
.paywall-sub{color:var(--t2);font-size:13px;line-height:1.55;margin-bottom:18px}
.paywall-tiers{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:18px}
.paywall-tier{padding:14px 12px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r3);position:relative;cursor:pointer;transition:all 0.15s}
.paywall-tier.pro{border-color:rgba(201,162,39,0.4);background:linear-gradient(135deg,rgba(201,162,39,0.05),rgba(207,20,43,0.05))}
.paywall-tier.pro::before{content:"POPULAR";position:absolute;top:-8px;right:10px;background:linear-gradient(135deg,#C9A227,#CF142B);color:#fff;font-family:var(--mono);font-size:8px;font-weight:800;padding:2px 8px;border-radius:999px;letter-spacing:0.1em}
.paywall-tier-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px}
.paywall-tier-name{font-size:14px;font-weight:700;color:var(--t1);margin-bottom:2px}
.paywall-tier-price{font-family:var(--mono);font-size:16px;font-weight:800;color:var(--gold)}
.paywall-tier-price .per{font-size:10px;color:var(--t3);font-weight:400}
.paywall-tier-feat{font-size:10.5px;color:var(--t2);margin-top:8px;line-height:1.5}
.paywall-cta{width:100%;padding:12px 18px;background:linear-gradient(135deg,#C9A227,#CF142B);color:#fff;border:none;border-radius:var(--r3);font-family:var(--mono);font-size:13px;font-weight:800;letter-spacing:0.03em;text-transform:uppercase;cursor:pointer;transition:all 0.2s}
.paywall-cta:hover{transform:translateY(-1px);box-shadow:0 4px 18px rgba(201,162,39,0.4)}
.paywall-note{text-align:center;font-family:var(--mono);font-size:10px;color:var(--t3);margin-top:10px}
.paywall-note strong{color:#4CAF7D}
</style>
</head>
<body>
<div class="union-bar"></div>
<canvas id="confettiCanvas"></canvas>

<button class="hamburger" onclick="openMobDrawer()" aria-label="Otvori navigaciju">
  <svg viewBox="0 0 20 20" fill="none"><path d="M3 5h14M3 10h14M3 15h14" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
</button>
<div class="mob-drawer" id="mobDrawer" role="dialog" aria-modal="true">
  <button class="mob-drawer-close" onclick="closeMobDrawer()">✕ Zatvori</button>
  <div onclick="closeMobDrawer();backToList()" style="display:flex;align-items:center;gap:8px;padding:10px 0;font-size:12px;font-family:var(--mono);color:var(--t3);cursor:pointer;border-bottom:1px solid var(--bd);margin-bottom:8px">
    <span>←</span> Sva poglavlja
  </div>
  <div class="sb-label">// Blok 1 — Start + Ispit</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(1)" style="cursor:pointer"><span class="sb-dot"></span> 01 · Kako izgleda Engleski A</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span> 02 · Kako koristiti skriptu</div>
  <div class="sb-label">// Blok 2 — Grammar Core</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span> 03 · Vremena koja se miješaju</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span> 04 · Perfect vremena</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span> 05 · Conditionals</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span> 06 · Passive, Reported Speech</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span> 07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span> 08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span> 09 · Što zadatak testira</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span> 10 · Gap fill i MCQ</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span> 11 · Word formation</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span> 12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span> 13 · Dobar maturalni esej</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span> 14 · Struktura eseja</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span> 15 · Linking words i vocabulary</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span> 16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span> 17 · Reading strategije</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span> 18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span> 19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="closeMobDrawer();navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span> 20 · Final Exam Survival</div>
</div>





<nav class="sidebar" aria-label="Navigacija poglavljima">
  <div class="sb-brand">
    <div class="sb-logo" aria-hidden="true">
      <svg viewBox="0 0 14 14" fill="none"><path d="M2 3h10M2 7h7M2 11h5" stroke="#fff" stroke-width="2" stroke-linecap="round"/></svg>
    </div>
  </div>
  <div class="sb-back-btn" onclick="backToList()" style="display:flex;align-items:center;gap:8px;padding:9px 18px;font-size:11.5px;font-family:var(--mono);color:var(--t3);cursor:pointer;border-bottom:1px solid var(--bd);transition:color .12s" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t3)'">
    <span style="font-size:10px">←</span> Sva poglavlja
  </div>
  <div class="sb-label">// Blok 1 — Start + Ispit</div>
  <div class="sb-item done-ch" onclick="navigateChapter(1)" style="cursor:pointer"><span class="sb-dot"></span>01 · Kako izgleda Engleski A</div>
  <div class="sb-item done-ch" onclick="navigateChapter(2)" style="cursor:pointer"><span class="sb-dot"></span>02 · Kako koristiti skriptu</div>
  <div class="sb-label">// Blok 2 — Grammar Core</div>
  <div class="sb-item active" onclick="navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span>03 · Vremena koja se miješaju</div>
  <div class="sb-item" onclick="navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span>04 · Perfect vremena</div>
  <div class="sb-item" onclick="navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span>05 · Conditionals</div>
  <div class="sb-item" onclick="navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span>06 · Passive, Reported Speech</div>
  <div class="sb-item" onclick="navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span>07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item" onclick="navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span>08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item" onclick="navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span>09 · Što zadatak testira</div>
  <div class="sb-item" onclick="navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span>10 · Gap fill i MCQ</div>
  <div class="sb-item" onclick="navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span>11 · Word formation</div>
  <div class="sb-item" onclick="navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span>12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item" onclick="navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span>13 · Dobar maturalni esej</div>
  <div class="sb-item" onclick="navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span>14 · Struktura eseja</div>
  <div class="sb-item" onclick="navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span>15 · Linking words i vocabulary</div>
  <div class="sb-item" onclick="navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span>16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item" onclick="navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span>17 · Reading strategije</div>
  <div class="sb-item" onclick="navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span>18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span>19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span>20 · Final Exam Survival</div>
<div class="sb-footer">03 / 20 · vremena koja se miješaju<br>maturiraj.hr</div>
</nav>



<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>

<main class="main">
<div class="content-wrap">

  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span>
    <span>blok-2</span>
    <span class="bc-sep">/</span>
    <span class="bc-active">vremena-koja-se-mijesaju</span>
  </div>

  <div class="tabs-wrap" role="tablist" aria-label="Navigacija tabovima">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Gramatika<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Vježbaj<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Gramatika u detalju</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Drill + kviz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~35 min
    </div>
  </div>

  <!-- ══════════ LAYER 0 — 2 MIN ══════════ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 03 of 20 · blok 2 — grammar core</div>
      <h1 class="hero-title">Vremena koja se<br><span>najčešće miješaju</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">03 / 20</span>
      </div>
      <p class="hero-sub">Present Simple · Present Continuous · Past Simple · Past Continuous · Present Perfect · Future forms</p>
      <div class="progress-track"><div class="progress-bar" style="width:15%"></div></div>
    </div>

    <div class="tags">
      <span class="pill pill-blue">Present Simple</span>
      <span class="pill pill-violet">Present Continuous</span>
      <span class="pill pill-red">Past Simple</span>
      <span class="pill pill-green">Present Perfect</span>
      <span class="pill pill-gold">Future forms</span>
      <span class="pill pill-amber">Past Continuous</span>
      <span class="pill pill-cream">Signal words</span>
    </div>

    <div class="sec-label">// četiri para koja se miješaju — na jednom pogledu</div>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon blue">PS/PC</div>
        <div class="stat-name">Simple vs Continuous</div>
        <div class="stat-desc"><b style="color:var(--blue)">Simple</b> = činjenica/navika · <b style="color:var(--violet)">Continuous</b> = u tijeku sada</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon red">PSi/PCo</div>
        <div class="stat-name">Past Simple vs Continuous</div>
        <div class="stat-desc"><b style="color:var(--red)">when</b> + kratka radnja = PS · <b style="color:var(--red)">while</b> + dulja radnja = Past Cont.</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">PS/PP</div>
        <div class="stat-name">Past vs Perfect</div>
        <div class="stat-desc"><b style="color:var(--union-red)">Past Simple</b> = završeno tada · <b style="color:var(--brit-green)">Present Perfect</b> = veza s danas</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon gold">FUT</div>
        <div class="stat-name">Future forms</div>
        <div class="stat-desc"><b style="color:var(--gold)">will</b> = odluka sada · <b style="color:var(--gold)">going to</b> = plan · <b style="color:var(--gold)">Pres. Cont.</b> = dogovor</div>
      </div>
    </div>

    <div class="sec-label">// 4 panic-proof pravila za ispit</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 grammar essentials — zapamti ovo prva četiri</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Vidiš signal word?</b> — <code style="background:var(--bg-input);padding:1px 5px;border-radius:3px;font-size:11px;color:var(--amber)">always/usually/often</code> → Present Simple · <code style="background:var(--bg-input);padding:1px 5px;border-radius:3px;font-size:11px;color:var(--amber)">now/at the moment</code> → Present Continuous</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Past Simple vs Present Perfect:</b> Postoji li vremenski marker (<code style="background:var(--bg-input);padding:1px 5px;border-radius:3px;font-size:11px;color:var(--amber)">yesterday, last year, in 2020</code>)? → Past Simple. Nema ga ili piše <code style="background:var(--bg-input);padding:1px 5px;border-radius:3px;font-size:11px;color:var(--amber)">already/yet/ever</code>? → Present Perfect.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>State verbs nikad nisu Continuous:</b> <em>know, believe, want, love, hate, understand, seem, need</em> — ovi glagoli ne dolaze s <em>-ing</em> oblikom u Present Continuous.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Future:</b> Spontana odluka u trenutku govora → <em>will</em>. Planirana namjera → <em>going to</em>. Dogovoreni raspored s drugom osobom → Present Continuous.</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Past Simple vs Past Continuous:</b> <code style="background:var(--bg-input);padding:1px 5px;border-radius:3px;font-size:11px;color:var(--amber)">when</code> + kratka završena radnja → Past Simple · <code style="background:var(--bg-input);padding:1px 5px;border-radius:3px;font-size:11px;color:var(--amber)">while</code> + dulja radnja u tijeku → Past Continuous · Prekinuta radnja = Past Continuous + <em>when</em> + Past Simple.</div></div>
      </div>
    </div>

    <div class="sec-label">// brzi pregled — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Present Simple — kada i kako?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Kada:</b> stalne činjenice, navike, rutine, raspored (vlakovi, satnica)<br>
        <b>Forma:</b> <span class="ok">I/you/we/they + glagol</span> · <span class="ok">he/she/it + glagol+s</span><br>
        <b>Signal words:</b> always, usually, often, sometimes, never, every day/week<br>
        <b>Zamka:</b> <span class="bad">She don't work</span> → <span class="ok">She doesn't work</span> (3. lice = does/doesn't)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Present Continuous — kada i kako?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Kada:</b> radnja koja se odvija sada, privremena situacija, dogovoreni plan<br>
        <b>Forma:</b> <span class="ok">am/is/are + glagol-ing</span><br>
        <b>Signal words:</b> now, at the moment, currently, this week, Look! Listen!<br>
        <b>Zamka:</b> <span class="bad">I am knowing the answer</span> → <span class="ok">I know the answer</span> (state verb!)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔴</span><span>Past Simple vs Present Perfect — koja je razlika?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Past Simple</b> = radnja završena u točno određenom trenutku u prošlosti (znaš kad)<br>
        <span class="ok">She left yesterday. / I saw him in 2019.</span><br><br>
        <b>Present Perfect</b> = radnja u prošlosti, ali važan je rezultat ili veza s danas (ne znaš ili nije važno kad)<br>
        <span class="ok">She has left. / I have seen that film.</span><br><br>
        <b>Ključna razlika:</b> <span class="bad">I have seen him yesterday</span> → <span class="ok">I saw him yesterday</span> (PP + točan datum = greška!)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟤</span><span>Past Continuous — kada i kako? Razlika od Past Simple?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Kada:</b> radnja koja je bila u tijeku u određenom trenutku u prošlosti, ili kad je bila prekinuta drugom radnjom<br>
        <b>Forma:</b> <span class="ok">was/were + glagol-ing</span> · I/he/she/it = was · you/we/they = were<br>
        <b>Signal words:</b> while, at 8 o'clock yesterday, all day, at that moment, during<br><br>
        <b>Ključna razlika od Past Simple:</b><br>
        <span class="ok">when</span> + kratka radnja → Past Simple · <span class="ok">while</span> + dulja radnja → Past Continuous<br>
        <em>When she <b>arrived</b> (PS — kratka), I <b>was cooking</b> (PC — u tijeku)</em><br>
        <span class="bad">Zamka:</span> "While I cooked" → <span class="ok">While I was cooking</span> (while zahtijeva Continuous!)
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>Future — will vs going to vs Present Continuous</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>will</b> → odluka donesena u trenutku govora: <span class="ok">"I'll have the pasta."</span><br>
        <b>going to</b> → namjera ili plan nastao ranije + vidljivi dokaz: <span class="ok">"Look at those clouds — it's going to rain."</span><br>
        <b>Present Continuous</b> → fiksirani dogovor s drugom osobom: <span class="ok">"We're meeting at 7."</span><br>
        <b>Present Simple</b> za future → fiksni raspored (avioni, vlakovi): <span class="ok">"The train leaves at 9."</span>
      </div>
    </div>

    <!-- CHECKPOINT -->
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd">
        <div class="cg-icon">🔐</div>
        <div>
          <div class="cg-title">Checkpoint — prolaznica</div>
          <div class="cg-sub">Odgovori točno da otključaš Gramatiku u detalju</div>
        </div>
      </div>
      <div class="cg-body">
        <div class="cg-question">Rečenica: "I <u>have seen</u> him yesterday." — što je krivo i zašto?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">A</div>Ništa — Present Perfect se može koristiti s "yesterday"</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">B</div>Treba biti Past Continuous: "I was seeing him yesterday"</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)" onkeydown="if(event.key==='Enter')cgAnswer(this,true)"><div class="cg-letter">C</div>Treba biti Past Simple: "I saw him yesterday" — PP ne ide s točnim vremenskim markerom</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">D</div>Treba biti: "I have see him yesterday"</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Gramatiku u detalju →</button>
      </div>
    </div>

    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(2)">← Poglavlje 02</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Gramatika u detalju →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ══════════ LAYER 1 — GRAMATIKA ══════════ -->
  <div class="layer" id="l1">

    <!-- STICKY TIP BAR -->
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-ps-pc')"><span class="tip-dot"></span>Simple vs Continuous</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-state')"><span class="tip-dot"></span>State verbs</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-past')"><span class="tip-dot"></span>Past Simple</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-pastcont')"><span class="tip-dot"></span>Past Continuous</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-pp')"><span class="tip-dot"></span>Present Perfect</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-ps-pp')"><span class="tip-dot"></span>PS vs PP</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-fut')"><span class="tip-dot"></span>Future forms</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-7" onclick="tipScroll('sec-signals')"><span class="tip-dot"></span>Signal words</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-8" onclick="tipScroll('sec-dtree')"><span class="tip-dot"></span>Decision tree</div>
    </div>

    <!-- PRESENT SIMPLE vs CONTINUOUS -->
    <div id="sec-ps-pc" class="sec-label">// present simple vs present continuous</div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge ps">PS</div>
        <div><div class="gram-title">Present Simple — forma i upotreba</div><div class="gram-sub">činjenice · navike · raspored</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <span class="lbl">Affirmative: </span><span class="val">I/you/we/they + glagol</span> · <span class="val">he/she/it + glagol+s/es</span><br>
          <span class="lbl">Negative: </span><span class="val">I/you/we/they + don't + glagol</span> · <span class="val">he/she/it + doesn't + glagol</span><br>
          <span class="lbl">Question: </span><span class="val">Do + I/you/we/they + glagol?</span> · <span class="val">Does + he/she/it + glagol?</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">She <b class="blue">works</b> in a hospital.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Stalna činjenica / zanimanje</div>
          </div>
          <div class="ex">
            <div class="ex-en">The train <b class="blue">leaves</b> at 9.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Fiksni raspored (future značenje!)</div>
          </div>
          <div class="ex">
            <div class="ex-en">He <b class="blue">doesn't</b> eat meat.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Navika / činjenica (ne: don't)</div>
          </div>
        </div>
      </div>
    </div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pc">PC</div>
        <div><div class="gram-title">Present Continuous — forma i upotreba</div><div class="gram-sub">u tijeku · privremeno · dogovoreno</div></div>
      </div>
      <div class="gram-body">
        <div class="formula violet">
          <span class="lbl">Affirmative: </span><span class="val">am/is/are + glagol-ing</span><br>
          <span class="lbl">Negative: </span><span class="val">am not / isn't / aren't + glagol-ing</span><br>
          <span class="lbl">Question: </span><span class="val">Am/Is/Are + subjekt + glagol-ing?</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">She <b class="violet">is working</b> late tonight.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Privremena situacija</div>
          </div>
          <div class="ex">
            <div class="ex-en">We <b class="violet">are meeting</b> tomorrow at 7.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Dogovoreni plan (future!)</div>
          </div>
          <div class="ex">
            <div class="ex-en">Look! It <b class="violet">is raining</b>.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Događa se upravo sada</div>
          </div>
        </div>
      </div>
    </div>

    <!-- STATE VERBS -->
    <div id="sec-state" class="sec-label" style="margin-top:32px">// state verbs — glagoli koji ne dolaze u continuous</div>
    <p class="prose">Određeni glagoli opisuju <strong>stanja</strong> (ne radnje) i nikad ne idu u <em>-ing</em> oblik. Na ispitu često postoji distractor s ovim glagolima u Continuous obliku — odmah ga eliminiraš.</p>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head violet">Uvijek Simple — nikad -ing</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Osjeti i percepcija</b>know, believe, understand, think (=misliti), feel (=osjećati), seem, appear</div>
          <div class="cmp-row"><b>Emocije i preferencije</b>love, hate, like, want, need, prefer, wish</div>
          <div class="cmp-row"><b>Posjedovanje</b>have (=imati), own, belong, contain, consist</div>
          <div class="cmp-row"><b>Ostalo</b>mean, cost, weigh, include, depend</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head blue">Primjeri — točno vs krivo</div>
        <div class="cmp-body">
          <div class="cmp-row"><span style="color:var(--red)">✗</span> I am knowing the answer<br><span style="color:var(--green)">✓</span> I know the answer</div>
          <div class="cmp-row"><span style="color:var(--red)">✗</span> She is wanting a coffee<br><span style="color:var(--green)">✓</span> She wants a coffee</div>
          <div class="cmp-row"><span style="color:var(--red)">✗</span> He is not believing you<br><span style="color:var(--green)">✓</span> He doesn't believe you</div>
          <div class="cmp-row"><span style="color:var(--amber)">⚠</span> think/have/feel mogu biti i action glagoli uz promjenu značenja!</div>
        </div>
      </div>
    </div>

    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Iznimka — think, have, feel kao action glagoli</div>
        <div class="callout-text">
          <b>think</b>: "I think you're right" (=mislim, stav) vs "I'm thinking about it" (=razmišljam, proces)<br>
          <b>have</b>: "I have a car" (=posjedovanje) vs "I'm having lunch" (=jedim, radnja)<br>
          <b>feel</b>: "I feel tired" (=osjećaj stanja) vs "The doctor is feeling my arm" (=pipanje, radnja)
        </div>
      </div>
    </div>

    <!-- PAST SIMPLE -->
    <div id="sec-past" class="sec-label" style="margin-top:36px">// past simple — forma i zamke</div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge past">PAST</div>
        <div><div class="gram-title">Past Simple — regularne i nepravilne forme</div><div class="gram-sub">završena radnja · niz radnji · navike u prošlosti</div></div>
      </div>
      <div class="gram-body">
        <div class="formula red">
          <span class="lbl">Regular: </span><span class="val">glagol + -ed</span> · <span class="sub">work→worked · play→played · stop→stopped</span><br>
          <span class="lbl">Irregular: </span><span class="val">2. stupanj</span> · <span class="sub">go→went · see→saw · take→took · have→had</span><br>
          <span class="lbl">Negative: </span><span class="val">didn't + infinitiv</span> · <span class="sub">Ne: didn't went → didn't go!</span><br>
          <span class="lbl">Question: </span><span class="val">Did + subjekt + infinitiv?</span> · <span class="sub">Ne: Did she went? → Did she go?</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">I <b class="red">saw</b> her yesterday.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Točan vremenski marker = Past Simple</div>
          </div>
          <div class="ex">
            <div class="ex-en">She <b class="red">didn't come</b> to the party.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Nakon didn't → infinitiv (ne came!)</div>
          </div>
          <div class="ex">
            <div class="ex-en"><b class="red">Did</b> you <b class="red">enjoy</b> the film?</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Pitanje — did + infinitiv</div>
          </div>
        </div>
        <div class="callout callout-warn" style="margin-top:4px">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <div class="callout-title">Najpopularnija greška — didn't + infinitiv</div>
            <div class="callout-text">Nakon <b>did/didn't</b> uvijek ide <b>infinitiv</b> (glagol bez promjene). Greška: <span style="color:var(--red)">She didn't came</span> · <span style="color:var(--red)">Did he went</span>. Točno: <span style="color:var(--green)">She didn't come</span> · <span style="color:var(--green)">Did he go</span>.</div>
          </div>
        </div>
      </div>
    </div>


    <!-- PAST CONTINUOUS -->
    <div id="sec-pastcont" class="sec-label" style="margin-top:36px">// past continuous — prekinuta radnja i when/while</div>
    <p class="prose">Past Continuous opisuje radnju koja je <strong>bila u tijeku</strong> u određenom trenutku u prošlosti. Najčešće se pojavljuje u kombinaciji s Past Simpleom — jedna radnja je prekinula drugu. Ovo je jedan od najtipičnijih maturalnih zadataka u gap-fillu.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge past">PAST C</div>
        <div><div class="gram-title">Past Continuous — forma i upotreba</div><div class="gram-sub">radnja u tijeku · prekinuta radnja · when/while</div></div>
      </div>
      <div class="gram-body">
        <div class="formula red">
          <span class="lbl">Affirmative: </span><span class="val">was/were + glagol-ing</span> · <span class="sub">I/he/she/it = was · you/we/they = were</span><br>
          <span class="lbl">Negative: </span><span class="val">wasn't/weren't + glagol-ing</span><br>
          <span class="lbl">Question: </span><span class="val">Was/Were + subjekt + glagol-ing?</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">I <b class="red">was reading</b> when the phone rang.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Dulja radnja (PC) prekinuta kratkom (PS)</div>
          </div>
          <div class="ex">
            <div class="ex-en"><b class="red">While</b> she <b class="red">was cooking</b>, he set the table.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">while + PC — dvije paralelne radnje</div>
          </div>
          <div class="ex">
            <div class="ex-en">At 8 pm yesterday, they <b class="red">were watching</b> a film.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Točan trenutak u prošlosti = PC u tijeku</div>
          </div>
        </div>
      </div>
    </div>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head red">when + Past Simple</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Kratka, završena radnja</b>She <em>arrived</em> when I was cooking.</div>
          <div class="cmp-row"><b>Niz radnji u prošlosti</b>She came in, sat down and smiled.</div>
          <div class="cmp-row"><b>Navike u prošlosti</b>When I was a child, I <em>played</em> here every day.</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head red">while + Past Continuous</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Dulja radnja u tijeku</b><em>While</em> I was cooking, she arrived.</div>
          <div class="cmp-row"><b>Dvije paralelne radnje</b><em>While</em> he was reading, she was writing.</div>
          <div class="cmp-row"><b>Pozadinska radnja</b>It was raining and the wind was blowing.</div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn">
      <div class="callout-icon">🎯</div>
      <div class="callout-body">
        <div class="callout-title">Najčešća zamka — while + Past Simple</div>
        <div class="callout-text">
          <span style="color:var(--red)">✗ While I cooked, she arrived.</span><br>
          <span style="color:var(--green)">✓ While I was cooking, she arrived.</span><br><br>
          <b>while</b> gotovo uvijek zahtijeva Past Continuous. Ako vidiš <em>while</em> u zadatku, automatski razmisli o PC obliku za tu klauzulu.
        </div>
      </div>
    </div>

    <!-- PRESENT PERFECT -->
    <div id="sec-pp" class="sec-label" style="margin-top:36px">// present perfect — nije "prošlo" na isti način</div>
    <p class="prose">Present Perfect nije samo "prošlost" — to je <strong>veza između prošlosti i sadašnjosti</strong>. Koristimo ga kad je važan <em>rezultat</em> ili <em>iskustvo</em>, a ne točan trenutak kad se nešto dogodilo. Ovo je jedna od najtežih distinkcija na ispitu.</p>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pp">PP</div>
        <div><div class="gram-title">Present Perfect Simple — forma i upotreba</div><div class="gram-sub">rezultat · iskustvo · nedavna prošlost · veza s danas</div></div>
      </div>
      <div class="gram-body">
        <div class="formula green">
          <span class="lbl">Affirmative: </span><span class="val">have/has + past participle (3. stupanj)</span><br>
          <span class="lbl">Negative: </span><span class="val">haven't/hasn't + past participle</span><br>
          <span class="lbl">Question: </span><span class="val">Have/Has + subjekt + past participle?</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">I <b class="green">have lost</b> my keys.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Rezultat: ključevi su i dalje nestali</div>
          </div>
          <div class="ex">
            <div class="ex-en">She <b class="green">has never been</b> to London.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Iskustvo do sad (ever/never)</div>
          </div>
          <div class="ex">
            <div class="ex-en">Have you <b class="green">finished</b> the report yet?</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Yet = još uvijek / already = već</div>
          </div>
        </div>
      </div>
    </div>

    <!-- PS vs PP COMPARE -->
    <div id="sec-ps-pp" class="sec-label" style="margin-top:36px">// past simple vs present perfect — ključna razlika</div>

    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head red">Past Simple</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Kada:</b> Točno znaš KADA se dogodilo</div>
          <div class="cmp-row"><b>Signal words:</b> yesterday · last week · in 2020 · ago · when I was young</div>
          <div class="cmp-row"><b>Primjer:</b> I <em>saw</em> that film last night.</div>
          <div class="cmp-row"><b>Fokus:</b> Sama radnja u prošlosti</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head green">Present Perfect</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Kada:</b> Nije važno KADA — važan je rezultat/iskustvo</div>
          <div class="cmp-row"><b>Signal words:</b> already · yet · ever · never · just · recently · so far · since · for</div>
          <div class="cmp-row"><b>Primjer:</b> I <em>have seen</em> that film. (= znam o čemu govoriš)</div>
          <div class="cmp-row"><b>Fokus:</b> Rezultat ili veza s današnjim trenutkom</div>
        </div>
      </div>
    </div>

    <div class="callout callout-warn">
      <div class="callout-icon">🚫</div>
      <div class="callout-body">
        <div class="callout-title">Present Perfect + točan vremenski marker = uvijek greška</div>
        <div class="callout-text">
          <span style="color:var(--red)">✗ I have seen her yesterday.</span><br>
          <span style="color:var(--red)">✗ She has left in 2019.</span><br>
          <span style="color:var(--red)">✗ Have you called him last night?</span><br>
          <br>
          "Yesterday", "last year", "in 2019", "last night" su <b>točni vremenski markeri</b> → odmah Past Simple.
        </div>
      </div>
    </div>

    <!-- FUTURE FORMS -->
    <div id="sec-fut" class="sec-label" style="margin-top:36px">// future forms — četiri načina za budućnost</div>

    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge fut">FUT</div>
        <div><div class="gram-title">Future forms — kada koji koristiti</div><div class="gram-sub">will · going to · present continuous · present simple</div></div>
      </div>
      <div class="gram-body">
        <div class="formula gold">
          <span class="lbl">will: </span><span class="val">odluka u trenutku govora · predviđanje bez dokaza · obećanje · ponuda</span><br>
          <span class="lbl">going to: </span><span class="val">planirana namjera · predviđanje s vidljivim dokazom</span><br>
          <span class="lbl">Pres. Cont.: </span><span class="val">fiksirani dogovor s drugom osobom u bliskoj budućnosti</span><br>
          <span class="lbl">Pres. Simple: </span><span class="val">fiksni raspored (vlakovi, avioni, satnica)</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">"It's cold." — "I <b class="gold">will</b> close the window."</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Odluka u trenutku govora → will</div>
          </div>
          <div class="ex">
            <div class="ex-en">Look at those clouds! It <b class="gold">is going to</b> rain.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Vidljivi dokaz → going to</div>
          </div>
          <div class="ex">
            <div class="ex-en">We <b class="gold">are having</b> dinner with them on Friday.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Dogovoreni plan → Present Continuous</div>
          </div>
          <div class="ex">
            <div class="ex-en">The conference <b class="gold">starts</b> at 9 tomorrow.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Fiksni raspored → Present Simple</div>
          </div>
        </div>
      </div>
    </div>

    <!-- SIGNAL WORDS -->
    <div id="sec-signals" class="sec-label" style="margin-top:36px">// signal words po vremenima</div>
    <div class="sig-grid">
      <div class="sig-card">
        <div class="sig-head blue">Present Simple</div>
        <div class="chips">
          <span class="chip blue">always</span><span class="chip blue">usually</span><span class="chip blue">often</span><span class="chip blue">sometimes</span><span class="chip blue">never</span><span class="chip blue">every day</span><span class="chip blue">on Mondays</span><span class="chip blue">in general</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head violet">Present Continuous</div>
        <div class="chips">
          <span class="chip violet">now</span><span class="chip violet">at the moment</span><span class="chip violet">currently</span><span class="chip violet">this week</span><span class="chip violet">Look!</span><span class="chip violet">Listen!</span><span class="chip violet">still</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head red">Past Simple</div>
        <div class="chips">
          <span class="chip red">yesterday</span><span class="chip red">last week</span><span class="chip red">ago</span><span class="chip red">in 2020</span><span class="chip red">when I was...</span><span class="chip red">then</span><span class="chip red">once</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head green">Present Perfect</div>
        <div class="chips">
          <span class="chip green">already</span><span class="chip green">yet</span><span class="chip green">ever</span><span class="chip green">never</span><span class="chip green">just</span><span class="chip green">recently</span><span class="chip green">since</span><span class="chip green">for</span><span class="chip green">so far</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head gold">Future (will)</div>
        <div class="chips">
          <span class="chip gold">tomorrow</span><span class="chip gold">next week</span><span class="chip gold">in the future</span><span class="chip gold">I think...</span><span class="chip gold">probably</span><span class="chip gold">I'm sure</span>
        </div>
      </div>
    </div>

    <!-- DECISION TREE -->
    <div id="sec-dtree" class="sec-label" style="margin-top:36px">// decision tree — koji oblik izabrati</div>
    <p style="font-size:13px;color:var(--t2);margin-bottom:16px;font-family:var(--mono)">Prolazi kroz stablo odozgo prema dolje — odgovori na svako pitanje i doći ćeš do točnog oblika.</p>

    <div class="dtree">
      <div class="dt-node question">🕐 Je li rečenica o SADAŠNJOSTI?</div>
      <div class="dt-row">
        <div class="dt-branch">
          <div class="dt-connector"><span>DA</span></div>
          <div class="dt-node question">Je li radnja u tijeku SADA?</div>
          <div class="dt-indent">
            <div class="dt-row">
              <div class="dt-branch">
                <div class="dt-connector"><span>DA</span></div>
                <div class="dt-node yes-violet">→ Present Continuous<br><span style="font-size:11px;font-weight:400;opacity:.8">npr. "She is talking on the phone."</span></div>
                <div class="dt-node note">⚠ State verb? (know/want/love...) → PS!</div>
              </div>
              <div class="dt-branch">
                <div class="dt-connector"><span>NE</span></div>
                <div class="dt-node yes-blue">→ Present Simple<br><span style="font-size:11px;font-weight:400;opacity:.8">npr. "She talks to him every day."</span></div>
              </div>
            </div>
          </div>
        </div>
        <div class="dt-branch">
          <div class="dt-connector"><span>NE — prošlost</span></div>
          <div class="dt-node question">Postoji li TOČAN vremenski marker?<br><span style="font-size:11px;font-weight:400;color:var(--amber)">(yesterday / in 2020 / last week / ago)</span></div>
          <div class="dt-indent">
            <div class="dt-row">
              <div class="dt-branch">
                <div class="dt-connector"><span>DA</span></div>
                <div class="dt-node yes-red">→ Past Simple<br><span style="font-size:11px;font-weight:400;opacity:.8">npr. "I saw her yesterday."</span></div>
              </div>
              <div class="dt-branch">
                <div class="dt-connector"><span>NE / already/yet/ever</span></div>
                <div class="dt-node yes-green">→ Present Perfect<br><span style="font-size:11px;font-weight:400;opacity:.8">npr. "I have already seen it."</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dt-node question" style="margin-top:8px">⏪ Je li u prošlosti radnja bila U TIJEKU kad se nešto dogodilo?<br><span style="font-size:11px;font-weight:400;color:var(--amber)">(while / when / at that moment)</span></div>
      <div class="dt-indent" style="margin-top:6px">
        <div class="dt-node yes-red">→ Past Continuous za dužu radnju + Past Simple za kraću<br><span style="font-size:11px;font-weight:400;opacity:.8">npr. "While I was cooking (PC), the phone rang (PS)."</span></div>
      </div>
      <div class="dt-node question" style="margin-top:8px">🔮 Je li rečenica o BUDUĆNOSTI?</div>
      <div class="dt-indent">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px">
          <div>
            <div class="dt-connector" style="justify-content:flex-start;padding-left:0"><span>Odluka sada (spontana)</span></div>
            <div class="dt-node yes-gold">→ <b>will</b> + infinitiv<br><span style="font-size:11px;font-weight:400;opacity:.8">"I'll help you."</span></div>
          </div>
          <div>
            <div class="dt-connector" style="justify-content:flex-start;padding-left:0"><span>Plan / namjera / vidljivi dokaz</span></div>
            <div class="dt-node yes-gold">→ <b>going to</b> + infinitiv<br><span style="font-size:11px;font-weight:400;opacity:.8">"It's going to rain."</span></div>
          </div>
          <div>
            <div class="dt-connector" style="justify-content:flex-start;padding-left:0"><span>Dogovor s drugom osobom</span></div>
            <div class="dt-node yes-violet">→ <b>Present Continuous</b><br><span style="font-size:11px;font-weight:400;opacity:.8">"We're meeting at 7."</span></div>
          </div>
          <div>
            <div class="dt-connector" style="justify-content:flex-start;padding-left:0"><span>Fiksni raspored (vlakovi, satnica)</span></div>
            <div class="dt-node yes-blue">→ <b>Present Simple</b><br><span style="font-size:11px;font-weight:400;opacity:.8">"The train leaves at 9."</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Discere — vježbaj ova vremena</div></div>
      <div class="discere-body">
        <div class="discere-desc">Filter: <b>tenses / verb forms</b> → riješiš 8–10 zadataka. Griješiš na PP vs Past Simple? Vrati se na sekciju iznad, a za 3 dana ponovi iste zadatke.</div>
        <button class="discere-btn" onclick="navigateChapter(4)">Poglavlje 04: Perfect vremena →</button>
      </div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Vježbaj →</span>
    </div>
  </div><!-- /l1 -->

  <!-- ══════════ LAYER 2 — VJEŽBAJ ══════════ -->
  <div class="layer" id="l2">

    <!-- SPEED DRILL -->
    <div class="sec-label">// speed drill — odaberi točan oblik</div>
    <div class="sd-intro">Svaki zadatak ima jednu prazninu. Odaberi točan glagolski oblik. Razmisli o signal wordima i kontekstu — ne pogađaj.</div>
    <div class="sd-progress" id="drillDots"></div>
    <div id="drillQ"></div>
    <div class="sd-score" id="drillScore">
      <div class="sd-score-num" id="drillNum">0/9</div>
      <div class="sd-score-lbl" id="drillLbl">Gotov si! Provjeri greške, pa idi na kviz pitanja.</div>
      <button class="sd-retry" onclick="resetDrill()">↺ Ponovi drill</button>
      <br>
      <button class="quiz-export-btn" onclick="exportResults()" id="exportBtn" style="display:none">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v7M4 6l2.5 2.5L9 6M2 10h9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Spremi rezultate kao sliku
      </button>
    </div>

    <!-- ERROR CORRECTION -->
    <div class="sec-label" style="margin-top:36px">// ispravi grešku — nađi što je krivo</div>
    <p style="font-size:12.5px;color:var(--t2);margin-bottom:14px;font-family:var(--mono)">Svaka rečenica ima točno jednu gramatičku grešku. Pokušaj naći grešku sam, pa klikni za provjeru. Praćen ti je napredak.</p>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;font-family:var(--mono);font-size:11px;color:var(--t3)">
      Otvoreno ispravaka: <span id="errCount" style="color:var(--blue);font-weight:700">0 / 7</span>
      <span id="errAllDone" style="display:none;color:var(--green);font-weight:700">✓ Sve provjeri!</span>
    </div>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">She don't speak French very well.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">She doesn't speak French very well.</span><span class="explain">3. lice jednine → doesn't (ne don't). Present Simple uvijek zahtijeva does/doesn't za he/she/it.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">I have seen her yesterday at the market.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">I saw her yesterday at the market.</span><span class="explain">"Yesterday" je točan vremenski marker → Past Simple. Present Perfect ne može stajati uz "yesterday".</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">She is wanting a new laptop for her birthday.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">She wants a new laptop for her birthday.</span><span class="explain">"Want" je state verb — ne može biti u Continuous obliku. Uvijek Present Simple.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">Did you enjoyed the concert last night?</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">Did you enjoy the concert last night?</span><span class="explain">Nakon "did" uvijek ide infinitiv (osnova glagola), nikad -ed oblik.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">I'm thinking you are right about this.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">I think you are right about this.</span><span class="explain">"Think" u značenju "misliti/smatrati" je state verb → Present Simple. (Continuous bi značilo "razmišljam o nečemu" — proces, ne stav.)</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">Look at those dark clouds — it will rain soon.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">Look at those dark clouds — it is going to rain soon.</span><span class="explain">Vidljivi dokaz (tamni oblaci) → "going to". "Will" se koristi za predviđanja bez vidljivog dokaza ili za spontane odluke.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">While she cooked, the children were playing in the garden.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">While she was cooking, the children were playing in the garden.</span><span class="explain">"While" gotovo uvijek zahtijeva Past Continuous za tu klauzulu. "While she cooked" je gramatički moguće, ali stilski neprirodno i ispitno neprihvatljivo — "while she was cooking" je standardni i očekivani oblik.</span></div>
      </div>
    </div>

    <!-- MCQ QUIZ -->
    <div class="sec-label" style="margin-top:36px">// kviz — odaberi točan odgovor</div>
    <div class="quiz-intro"><strong>6 pitanja</strong> koja pokrivaju sve što si naučio. Svako pitanje ima objašnjenje odmah nakon odgovora.</div>

    <div class="q-block" id="q1">
      <div class="q-head">
        <div class="q-meta">pitanje 01 · present perfect vs past simple</div>
        <div class="q-text">She _____ to Japan three times. She really loves it there.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>went</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>has been</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>was</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>had gone</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — "three times" + "she really loves it" (veza s danas) → Present Perfect. Nema točnog vremenskog markera, pa Past Simple nije točan.</div></div>
    </div>

    <div class="q-block" id="q2">
      <div class="q-head">
        <div class="q-meta">pitanje 02 · state verbs</div>
        <div class="q-text">Which sentence is CORRECT?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>I am knowing the answer.</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">B</div>I know the answer.</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">C</div>I am knowing what you mean.</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>She is wanting a cup of tea.</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — "know" je state verb i nikad ne dolazi u Continuous obliku. Jedina točna rečenica je "I know the answer" u Present Simple.</div></div>
    </div>

    <div class="q-block" id="q3">
      <div class="q-head">
        <div class="q-meta">pitanje 03 · future forms</div>
        <div class="q-text">"The phone is ringing!" — "Don't worry, I _____ it."</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">A</div>will answer</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">B</div>am going to answer</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">C</div>am answering</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>answer</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — odluka donesena u trenutku govora (reaktivno, spontano) → "will". Going to bi se koristio za unaprijed planiranu namjeru.</div></div>
    </div>

    <div class="q-block" id="q4">
      <div class="q-head">
        <div class="q-meta">pitanje 04 · past simple</div>
        <div class="q-text">_____ you call her when you arrived home?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>Have</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">B</div>Did</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">C</div>Were</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>Had</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — Past Simple pitanje koristi "Did". "When you arrived" je točan vremenski kontekst → Past Simple, ne Present Perfect.</div></div>
    </div>

    <div class="q-block" id="q5">
      <div class="q-head">
        <div class="q-meta">pitanje 05 · present simple vs continuous</div>
        <div class="q-text">My sister usually _____ to work by bus, but this week she _____ because her car is being repaired.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>is going / drives</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">B</div>goes / is driving</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">C</div>goes / drives</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>is going / is driving</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — "usually" → navika → Present Simple (goes). "This week" → privremena situacija → Present Continuous (is driving). Ovo je klasični maturalni zadatak s dvostrukim odabirom.</div></div>
    </div>

    <div class="q-block" id="q6">
      <div class="q-head">
        <div class="q-meta">pitanje 06 · past continuous · when / while</div>
        <div class="q-text">When I _____ into the café, my friends _____ at a corner table.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">A</div>was walking / sat</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">B</div>walked / sat</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">C</div>was walking / were sitting</div>
        <div class="q-opt" onclick="answer(this,'q6','correct')"><div class="q-letter">D</div>walked / were sitting</div>
      </div>
      <div class="q-expl" id="qe6"><div class="expl-ok">✓ Točno — "walked in" je kratka završena radnja koja je prekinula dužu situaciju → Past Simple. "Were sitting" je radnja koja je bila u tijeku u tom trenutku → Past Continuous. "When" + kratka radnja = Past Simple za tu klauzulu.</div></div>
    </div>

    <!-- QUIZ EXPORT -->
    <div class="quiz-export-wrap" id="quizExportWrap" style="display:none">
      <div>
        <div class="quiz-export-score" id="quizExportScore">0/6</div>
        <div class="quiz-export-lbl">REZULTAT KVIZA · POGLAVLJE 03</div>
      </div>
      <button class="quiz-export-btn" onclick="exportQuizResult()">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v7M4 6l2.5 2.5L9 6M2 10h9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Spremi rezultat kao sliku
      </button>
    </div>

    <!-- CLOZE PASSAGE -->
    <div style="margin-top:36px">
      <div style="font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)">// cloze u kontekstu — odaberi točan oblik</div>
      <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:16px">Pročitaj tekst i odaberi točan glagolski oblik za svaku prazninu. Ovo je stvarni format NCVVO Open Cloze zadatka — odluka ovisi o <em>kontekstu</em>, ne samo o jednoj rečenici.</p>

      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin-bottom:20px">
        <div style="padding:10px 20px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:9.5px;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase">Reading passage · verb tenses in context · 6 praznina</div>
        <div style="padding:20px 24px;font-size:14.5px;line-height:2;color:rgba(238,240,248,.88);font-family:var(--serif)">
          Last summer, my friend Elena
          <select id="cl1" onchange="clCheck(1)" style="font-family:var(--mono);font-size:13px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r1);padding:2px 6px;cursor:pointer">
            <option value="">___</option>
            <option value="decided">decided</option>
            <option value="has decided">has decided</option>
            <option value="was deciding">was deciding</option>
            <option value="decides">decides</option>
          </select>
          to travel across Europe alone. She
          <select id="cl2" onchange="clCheck(2)" style="font-family:var(--mono);font-size:13px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r1);padding:2px 6px;cursor:pointer">
            <option value="">___</option>
            <option value="has never done">has never done</option>
            <option value="never did">never did</option>
            <option value="never does">never does</option>
            <option value="had never done">had never done</option>
          </select>
          anything like it before, so she was nervous. When she
          <select id="cl3" onchange="clCheck(3)" style="font-family:var(--mono);font-size:13px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r1);padding:2px 6px;cursor:pointer">
            <option value="">___</option>
            <option value="arrived">arrived</option>
            <option value="was arriving">was arriving</option>
            <option value="has arrived">has arrived</option>
            <option value="arrives">arrives</option>
          </select>
          in Rome, she realised she
          <select id="cl4" onchange="clCheck(4)" style="font-family:var(--mono);font-size:13px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r1);padding:2px 6px;cursor:pointer">
            <option value="">___</option>
            <option value="had left">had left</option>
            <option value="left">left</option>
            <option value="has left">has left</option>
            <option value="was leaving">was leaving</option>
          </select>
          her passport at the hotel. While the receptionist
          <select id="cl5" onchange="clCheck(5)" style="font-family:var(--mono);font-size:13px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r1);padding:2px 6px;cursor:pointer">
            <option value="">___</option>
            <option value="was checking">was checking</option>
            <option value="checked">checked</option>
            <option value="has checked">has checked</option>
            <option value="checks">checks</option>
          </select>
          the records, Elena called her mother — who
          <select id="cl6" onchange="clCheck(6)" style="font-family:var(--mono);font-size:13px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r1);padding:2px 6px;cursor:pointer">
            <option value="">___</option>
            <option value="was still sleeping">was still sleeping</option>
            <option value="still slept">still slept</option>
            <option value="still sleeps">still sleeps</option>
            <option value="has still slept">has still slept</option>
          </select>
          due to the time difference.
        </div>
      </div>

      <!-- Feedback panels -->
      <div id="cl-score-bar" style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:12px 16px;display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">Cloze rezultat:</span>
        <span id="cl-score-val" style="font-family:var(--serif);font-size:20px;font-weight:700;color:var(--t1)">0 / 6</span>
        <div style="flex:1;height:5px;background:var(--bd-mid);border-radius:3px;overflow:hidden">
          <div id="cl-score-bar-fill" style="height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:3px;width:0%;transition:width .4s"></div>
        </div>
      </div>

      <div id="cl-feedback-wrap" style="display:flex;flex-direction:column;gap:8px"></div>
    </div>

    <!-- DISCERE -->
    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Spreman si za pravu vježbu</div></div>
      <div class="discere-body">
        <div class="discere-desc">Završio si Poglavlje 3 — speed drill, error correction, kviz i cloze u kontekstu. Sljedeći korak: <b>Perfect vremena bez panike</b>.</div>
        <button class="discere-btn" onclick="navigateChapter(4)">Poglavlje 04: Perfect vremena →</button>
      </div>
    </div>


    <!-- DISCERE LINK -->
    <div class="discere-box" style="margin-top:28px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Vježbaj na Discere</div></div>
      <div class="discere-body">
        <div class="discere-desc">Savladao/la si Present Perfect. Sad ga vježbaj na <b>stvarnim use-of-english zadacima</b> iz maturalih testova.</div>
        <button class="discere-btn" onclick="openDiscere()">Otvori Discere →</button>
      </div>
    </div>
    
<!-- ═══ PREMIUM GATE: AI PROFESSOR ═══ -->
<div class="pg-ai">
  <div class="pg-ai-hd">
    <div class="pg-ai-ico">🤖</div>
    <div style="flex:1;min-width:0">
      <div class="pg-ai-ttl">AI Profesor <span class="pg-ai-badge">PRO · 200 msg/dan</span></div>
      <div class="pg-ai-sub">Imaš pitanje o gramatici, pisanju eseja ili strategiji ispita? Pitaj me — odgovorim odmah, korak po korak.</div>
    </div>
  </div>
  <div class="pg-ai-chips">
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Kako pisati esej na C1/C2 razini?</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Top 5 grešaka na engleskom ispitu</span>
    <span class="pg-ai-chip" onclick="openPaywall('ai')">&#128172; Plan učenja za 3 tjedna do mature</span>
  </div>
  <div class="pg-ai-bubble">
    Gramatika, esej struktura, linking words, strategija za reading i listening — <strong>AI profesor odgovara 24/7</strong><span class="pg-ai-typing"><span></span><span></span><span></span></span>
  </div>
  <button class="pg-ai-cta" onclick="openPaywall('ai')">Otključaj AI profesora &#8594;</button>
</div>

<!-- ═══ PREMIUM GATE: DISCERE SIMULATOR ═══ -->
<div class="pg-disc">
  <div class="pg-disc-hd">
    <div class="pg-disc-ico">&#127919;</div>
    <div style="flex:1;min-width:0">
      <div class="pg-disc-ttl">Discere Simulator <span class="pg-disc-badge">STANDARD</span></div>
      <div class="pg-disc-sub">Pravi ispit uvjeti — tajmer, bodovi, feedback. Provjeri se na 40+ stvarnih ENJ ispita.</div>
    </div>
  </div>
  <div class="pg-disc-split">
    <div class="pg-disc-col">
      <div class="pg-disc-col-ttl">Samo skripta</div>
      <div class="pg-disc-col-val">&#128218;</div>
      <div class="pg-disc-col-sub">pasivno čitanje</div>
    </div>
    <div class="pg-disc-arrow">&#8594;</div>
    <div class="pg-disc-col on">
      <div class="pg-disc-col-ttl">Discere simulacija</div>
      <div class="pg-disc-col-val">&#9201; 120:00</div>
      <div class="pg-disc-col-sub">pravi ispit iskustvo</div>
    </div>
  </div>
  <div class="pg-disc-stats">
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">40+</span><span class="pg-disc-stat-l">ispita ENJ viša</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">100%</span><span class="pg-disc-stat-l">feedback</span></div>
    <div class="pg-disc-stat"><span class="pg-disc-stat-n">9,99€</span><span class="pg-disc-stat-l">/mjesec</span></div>
  </div>
  <button class="pg-disc-cta" onclick="openDiscereModal()">Pokreni simulator &#8594;</button>
</div>

<div class="nav-row">
      <span class="nav-btn" onclick="switchTab(1)">← Gramatika</span>
      <button class="nav-btn primary" onclick="navigateChapter(4)">Poglavlje 04: Perfect vremena →</button>
    </div>
  </div><!-- /l2 -->

</div><!-- /content-wrap -->
</main>
</div><!-- /shell -->

<script>
const PAGE_KEY='maturiraj_en_visa_p03';

/* ─── LOCALSTORAGE ─── */
function saveProgress(i){try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d['tab_'+i]=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}}
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    document.querySelectorAll('.tab').forEach((t,i)=>{if(d['tab_'+i])t.classList.add('done-tab');});
    if(d.cgPassed){const cg=document.getElementById('cgBlock');if(cg)cg.style.display='none';}
    if(d.drillDone){
      drillScore=d.drillScore||0;drillIdx=drillData.length;
      const dots=document.getElementById('drillDots');
      if(dots){dots.innerHTML='';drillData.forEach((_,i)=>{const s=document.createElement('div');s.className='sd-dot '+(d.drillResults&&d.drillResults[i]?'ok':'no');dots.appendChild(s);});}
      document.getElementById('drillQ').innerHTML='';
      const sc=document.getElementById('drillScore');if(sc)sc.classList.add('show');
      document.getElementById('drillNum').textContent=drillScore+'/'+drillData.length;
    }
    if(d.quizScore!==undefined){
      quizCorrect=d.quizScore;quizAnswered=QUIZ_TOTAL;
      const wrap=document.getElementById('quizExportWrap');
      const scoreEl=document.getElementById('quizExportScore');
      if(wrap&&scoreEl){
        scoreEl.textContent=quizCorrect+'/'+QUIZ_TOTAL;
        scoreEl.style.color=quizCorrect>=5?'var(--green)':quizCorrect>=3?'var(--blue)':'var(--amber)';
        wrap.style.display='flex';
      }
    }
  }catch(e){}
}

/* ─── TABS ─── */
function switchTab(i){
  document.querySelectorAll('.tab').forEach((t,j)=>{t.classList.toggle('active',j===i);t.setAttribute('aria-selected',j===i);t.tabIndex=j===i?0:-1;});
  document.querySelectorAll('.layer').forEach((l,j)=>l.classList.toggle('active',j===i));
  document.querySelectorAll('.tab-prog-item').forEach((t,j)=>{t.classList.toggle('active',j===i);if(j<i)t.classList.add('done');else t.classList.remove('done');});
  if(i>0){document.querySelectorAll('.tab')[i-1].classList.add('done-tab');saveProgress(i-1);}
  if(i===1) animateDrill();
  window.scrollTo({top:0,behavior:'smooth'});
}
function tabKey(e,i){
  if(e.key==='Enter'||e.key===' '){e.preventDefault();switchTab(i);}
  else if(e.key==='ArrowRight'){e.preventDefault();switchTab(Math.min(i+1,2));}
  else if(e.key==='ArrowLeft'){e.preventDefault();switchTab(Math.max(i-1,0));}
}

/* ─── REVEAL CARDS ─── */
function toggleReveal(el){el.classList.toggle('open');el.setAttribute('aria-expanded',el.classList.contains('open'));}
document.querySelectorAll('.reveal-card').forEach(c=>{
  c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleReveal(c);}});
});

/* ─── ERROR CORRECTION ─── */
let errOpenCount=0;
const ERR_TOTAL=6;
function toggleErr(btn){
  const fix=btn.nextElementSibling;
  const wasOpen=fix.classList.contains('show');
  const open=fix.classList.toggle('show');
  btn.textContent=open?'▼ Sakrij ispravak':'▶ Pokaži ispravak';
  if(open&&!wasOpen){
    errOpenCount=Math.min(errOpenCount+1,ERR_TOTAL);
    const ec=document.getElementById('errCount');
    const ed=document.getElementById('errAllDone');
    if(ec) ec.textContent=errOpenCount+' / '+ERR_TOTAL;
    if(ed&&errOpenCount>=ERR_TOTAL){ed.style.display='inline';if(ec)ec.style.display='none';}
  }
}

/* ─── CONFETTI ─────────────────────────────────── */
const CONFETTI_COLORS=['#4F7BE8','#CF142B','#52D688','#C9A227','#A78BFA','#fff'];
let confettiParticles=[],confettiRAF=null;

function launchConfetti(){
  const canvas=document.getElementById('confettiCanvas');
  if(!canvas||window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  canvas.style.display='block';
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  const ctx=canvas.getContext('2d');
  confettiParticles=[];
  for(let i=0;i<120;i++){
    confettiParticles.push({
      x:Math.random()*canvas.width,
      y:-10-Math.random()*canvas.height*0.3,
      w:6+Math.random()*8,h:3+Math.random()*4,
      color:CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)],
      rot:Math.random()*360,spin:(-3+Math.random()*6),
      vx:-2+Math.random()*4,vy:2+Math.random()*4,
      opacity:1
    });
  }
  let frame=0;
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let alive=false;
    confettiParticles.forEach(p=>{
      p.x+=p.vx; p.y+=p.vy; p.rot+=p.spin; p.vy+=0.08;
      if(p.y<canvas.height+20){alive=true;p.opacity=Math.max(0,1-(p.y/canvas.height)*1.2);}
      ctx.save();ctx.globalAlpha=p.opacity;
      ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle=p.color;
      ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h);
      ctx.restore();
    });
    frame++;
    if(alive&&frame<300){confettiRAF=requestAnimationFrame(draw);}
    else{canvas.style.display='none';cancelAnimationFrame(confettiRAF);}
  }
  cancelAnimationFrame(confettiRAF);
  draw();
}

/* ─── QUIZ SCORE TRACKING ──────────────────────── */
let quizAnswered=0,quizCorrect=0;
const QUIZ_TOTAL=6;

function answer(opt,qId,result){
  const block=document.getElementById(qId);
  if(block.dataset.answered) return;
  block.dataset.answered='1';
  block.querySelectorAll('.q-opt').forEach(o=>o.classList.add('disabled'));
  opt.classList.add(result==='correct'?'correct':'wrong');
  if(result==='wrong'){block.querySelectorAll('.q-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes("'correct'"))o.classList.add('correct');});}
  const expl=document.getElementById('qe'+qId.replace('q',''));
  if(expl){expl.classList.add('show');expl.scrollIntoView({behavior:'smooth',block:'nearest'});}
  quizAnswered++;
  if(result==='correct') quizCorrect++;
  if(quizAnswered>=QUIZ_TOTAL) showQuizResult();
}

function showQuizResult(){
  const wrap=document.getElementById('quizExportWrap');
  const scoreEl=document.getElementById('quizExportScore');
  if(!wrap||!scoreEl) return;
  scoreEl.textContent=quizCorrect+'/'+QUIZ_TOTAL;
  scoreEl.style.color=quizCorrect>=5?'var(--green)':quizCorrect>=3?'var(--blue)':'var(--amber)';
  wrap.style.display='flex';
  wrap.scrollIntoView({behavior:'smooth',block:'nearest'});
  if(quizCorrect===QUIZ_TOTAL) setTimeout(launchConfetti,400);
  try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.quizScore=quizCorrect;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
}

/* ─── QUIZ EXPORT (CANVAS) ─────────────────────── */
function exportQuizResult(){
  const W=480,H=220;
  const canvas=document.createElement('canvas');
  canvas.width=W*2;canvas.height=H*2;
  const ctx=canvas.getContext('2d');
  ctx.scale(2,2);

  // background
  ctx.fillStyle='#0A0D18';ctx.fillRect(0,0,W,H);

  // union jack bar
  const segs=[{c:'#CF142B',x:0,w:W*.3},{c:'#fff',x:W*.3,w:W*.04},{c:'#4F7BE8',x:W*.34,w:W*.32},{c:'#fff',x:W*.66,w:W*.04},{c:'#CF142B',x:W*.7,w:W*.3}];
  segs.forEach(s=>{ctx.fillStyle=s.c;ctx.fillRect(s.x,0,s.w,4);});

  // logo text
  ctx.fillStyle='#EEF0F8';ctx.font='bold 18px serif';ctx.fillText('Maturiraj.hr',24,38);
  ctx.fillStyle='#4A5580';ctx.font='11px monospace';ctx.fillText('Poglavlje 03 · Vremena koja se miješaju',24,54);

  // score
  const pct=Math.round(quizCorrect/QUIZ_TOTAL*100);
  const color=quizCorrect>=5?'#52D688':quizCorrect>=3?'#4F7BE8':'#E8A838';
  ctx.fillStyle=color;ctx.font='bold 72px serif';ctx.fillText(quizCorrect+'/'+QUIZ_TOTAL,24,140);
  ctx.fillStyle='#8A95B8';ctx.font='13px monospace';ctx.fillText(pct+'% točnih odgovora · kviz',24,162);

  // grade label
  const grade=quizCorrect===6?'Savršeno! 🇬🇧':quizCorrect>=5?'Odlično!':quizCorrect>=4?'Vrlo dobro':quizCorrect>=3?'Dobro':'Vrati se na gradivo';
  ctx.fillStyle=color;ctx.font='bold 16px serif';ctx.fillText(grade,24,188);

  // watermark
  ctx.fillStyle='rgba(74,85,128,0.4)';ctx.font='10px monospace';
  ctx.textAlign='right';ctx.fillText('maturiraj.hr',W-16,H-12);ctx.textAlign='left';

  canvas.toBlob(blob=>{
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download='kviz-p03-'+quizCorrect+'od'+QUIZ_TOTAL+'.png';
    a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  },'image/png');
}

/* ─── CHECKPOINT ─── */
let cgAnswered=false;
function cgAnswer(opt,isCorrect){
  if(cgAnswered) return;
  cgAnswered=true;
  document.querySelectorAll('.cg-opt').forEach(o=>o.classList.add('cg-disabled'));
  const fb=document.getElementById('cgFb'),btn=document.getElementById('cgBtn');
  if(isCorrect){
    opt.classList.add('cg-correct');
    fb.className='cg-feedback show pass';
    fb.innerHTML='✓ Točno! Present Perfect + točan vremenski marker = uvijek greška. "Yesterday" zahtijeva Past Simple: "I saw him yesterday."';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. PP + točan vremenski marker (yesterday, last year, in 2020...) je uvijek greška. Pročitaj sekciju "PS vs PP" u Tab Gramatika.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}

/* ─── STICKY TIP BAR ─── */
const tipSections=['sec-ps-pc','sec-state','sec-past','sec-pastcont','sec-pp','sec-ps-pp','sec-fut','sec-signals','sec-dtree'];
function tipScroll(id){const el=document.getElementById(id);if(!el)return;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:'smooth'});}
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const idx=tipSections.indexOf(e.target.id);
      // mark current and all previous as done
      for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}
    }
  });
},{rootMargin:'-10% 0px -60% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});

/* ─── SPEED DRILL ─── */
const drillData=[
  {q:'Water <code>___</code> at 100 degrees Celsius.',opts:['is boiling','boils','has boiled','boiled'],correct:1,colors:['violet','blue','green','red'],fb:'<b>Točan odgovor: boils (Present Simple)</b> — Trajna zakonita činjenica → PS. / Scientific fact → Present Simple, not an action in progress.'},
  {q:'Look! The baby <code>___</code> for the first time!',opts:['walks','walked','is walking','has walked'],correct:2,colors:['blue','red','violet','green'],fb:'<b>Točan odgovor: is walking (Present Continuous)</b> — "Look!" + radnja se odvija upravo sada → PC. / "Look!" signals something happening right now → Present Continuous.'},
  {q:'I <code>___</code> my keys. I can\\'t find them anywhere.',opts:['lost','have lost','lose','am losing'],correct:1,colors:['red','green','blue','violet'],fb:'<b>Točan odgovor: have lost (Present Perfect)</b> — Rezultat je relevantan sada, nema točnog vremenskog markera → PP. / Result still relevant now → Present Perfect.'},
  {q:'She <code>___</code> to Paris in 2018 for a conference.',opts:['has gone','went','goes','had gone'],correct:1,colors:['green','red','blue','gold'],fb:'<b>Točan odgovor: went (Past Simple)</b> — "In 2018" je točan vremenski marker → PS. PP ne može stajati uz točan datum. / Specific past time → Past Simple.'},
  {q:'"The phone is ringing." — "I <code>___</code> it!"',opts:['am going to answer','answer','will answer','answered'],correct:2,colors:['gold','blue','gold','red'],fb:'<b>Točan odgovor: will answer</b> — Spontana odluka u trenutku govora → will. Going to = unaprijed planirana namjera. / Spontaneous decision → will.'},
  {q:'He <code>___</code> three cups of coffee this morning and it\\'s only 9 am.',opts:['drank','has drunk','drinks','is drinking'],correct:1,colors:['red','green','blue','violet'],fb:'<b>Točan odgovor: has drunk (Present Perfect)</b> — "This morning" dok jutro još traje → PP (veza s danas). / "This morning" while still ongoing → Present Perfect.'},
  {q:'I <code>___</code> what you mean — it\\'s perfectly clear.',opts:['am understanding','have understood','understand','understood'],correct:2,colors:['violet','green','blue','red'],fb:'<b>Točan odgovor: understand (Present Simple)</b> — "Understand" je state verb, nikad Continuous. / State verb — never Continuous.'},
  {q:'We <code>___</code> dinner with the Smiths on Saturday — they booked the restaurant.',opts:['will have','have','are having','had'],correct:2,colors:['gold','blue','violet','red'],fb:'<b>Točan odgovor: are having (Present Continuous)</b> — Dogovoreni plan s drugom osobom → PC. / Fixed arrangement with another person → Present Continuous.'},
  {q:'<b>While</b> I <code>___</code> a shower, someone knocked at the door.',opts:['had','was having','have had','had had'],correct:1,colors:['red','violet','green','gold'],fb:'<b>Točan odgovor: was having (Past Continuous)</b> — "While" + dulja radnja u tijeku → PC. Kratka prekinuta radnja (knocked) → Past Simple. / while + ongoing action → Past Continuous.'},
];

let drillIdx=0,drillScore=0,drillResults=[];

function animateDrill(){
  // scroll drill into view smoothly when tab opens
  const el=document.getElementById('drillDots');
  if(el) el.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function buildDots(){
  const d=document.getElementById('drillDots');d.innerHTML='';
  drillData.forEach((_,i)=>{const s=document.createElement('div');s.className='sd-dot'+(i===drillIdx?' cur':'');d.appendChild(s);});
}

function renderDrillQ(){
  const d=drillData[drillIdx];
  const el=document.getElementById('drillQ');
  el.innerHTML=\`
    <div class="sd-q">
      <div class="sd-sent">\${d.q}</div>
      <div class="sd-btns">
        \${d.opts.map((o,i)=>\`<button class="sd-btn opt-\${d.colors[i]}" onclick="pickDrill(this,\${i})">\${o}</button>\`).join('')}
      </div>
      <div class="sd-fb" id="dfb"></div>
    </div>\`;
  buildDots();
}

function pickDrill(btn,idx){
  const d=drillData[drillIdx];
  document.querySelectorAll('#drillQ .sd-btn').forEach(b=>b.classList.add('picked','disabled'));
  const fb=document.getElementById('dfb');
  const correct=idx===d.correct;
  btn.classList.add(correct?'correct-pick':'wrong-pick');
  if(!correct) document.querySelectorAll('#drillQ .sd-btn')[d.correct].classList.add('reveal-correct');
  if(correct) drillScore++;
  drillResults[drillIdx]=correct;
  fb.className='sd-fb show '+(correct?'ok':'no');
  fb.innerHTML=(correct?'✓ ':'✗ ')+d.fb;
  const dots=document.querySelectorAll('#drillDots .sd-dot');
  if(dots[drillIdx]) dots[drillIdx].className='sd-dot '+(correct?'ok':'no');
  setTimeout(()=>{
    drillIdx++;
    if(drillIdx<drillData.length){renderDrillQ();}
    else{showDrillScore();}
  },1600);
}

function showDrillScore(){
  document.getElementById('drillQ').innerHTML='';
  const sc=document.getElementById('drillScore');sc.classList.add('show');
  const num=document.getElementById('drillNum');num.textContent=drillScore+'/'+drillData.length;
  const lbl=document.getElementById('drillLbl');
  const exportBtn=document.getElementById('exportBtn');
  if(drillScore>=drillData.length){
    lbl.textContent='Savršeno! 9/9 — idi na kviz pitanja.';
    launchConfetti();
  } else if(drillScore>=7) lbl.textContent='Odlično! Nastavi na kviz pitanja.';
  else if(drillScore>=5) lbl.textContent='Dobro — provjeri greške pa radi kviz.';
  else lbl.textContent='Vrati se na Tab Gramatika, pročitaj signal words, pa ponovi drill.';
  if(exportBtn) exportBtn.style.display='inline-flex';
  buildDots();
  try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.drillDone=true;d.drillScore=drillScore;d.drillResults=drillResults;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
}

/* ─── CONFETTI ─────────────────────────────── */
function launchConfetti(){
  const colors=['#4F7BE8','#CF142B','#C9A227','#4CAF7D','#A78BFA','#52D688','#fff'];
  const total=80;
  for(let i=0;i<total;i++){
    const el=document.createElement('div');
    el.className='confetti-piece';
    el.style.left=Math.random()*100+'vw';
    el.style.background=colors[Math.floor(Math.random()*colors.length)];
    el.style.width=(6+Math.random()*8)+'px';
    el.style.height=(6+Math.random()*8)+'px';
    el.style.borderRadius=Math.random()>0.5?'50%':'2px';
    const dur=1.8+Math.random()*1.6;
    el.style.animationDuration=dur+'s';
    el.style.animationDelay=(Math.random()*0.8)+'s';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),(dur+1)*1000);
  }
}

/* ─── EXPORT RESULTS (CANVAS) ──────────────── */
function exportResults(){
  const W=480,H=200+drillData.length*28;
  const canvas=document.createElement('canvas');
  canvas.width=W*2;canvas.height=H*2;
  const ctx=canvas.getContext('2d');
  ctx.scale(2,2);
  // bg
  ctx.fillStyle='#0A0D18';ctx.fillRect(0,0,W,H);
  // union jack bar
  const bars=[['#CF142B',0,W*0.3],['#fff',W*0.3,W*0.04],['#4F7BE8',W*0.34,W*0.32],['#fff',W*0.66,W*0.04],['#CF142B',W*0.7,W*0.3]];
  bars.forEach(([c,x,w])=>{ctx.fillStyle=c;ctx.fillRect(x,0,w,3);});
  // header
  ctx.fillStyle='#EEF0F8';ctx.font='bold 18px serif';ctx.fillText('Maturiraj.hr — Poglavlje 03',20,30);
  ctx.fillStyle='#4A5580';ctx.font='11px monospace';ctx.fillText('Vremena koja se miješaju · Speed drill rezultati',20,48);
  // score big
  const pct=Math.round(drillScore/drillData.length*100);
  const scoreColor=pct===100?'#52D688':pct>=78?'#4F7BE8':pct>=56?'#E8A838':'#E86060';
  ctx.fillStyle=scoreColor;ctx.font='bold 44px serif';ctx.fillText(drillScore+'/'+drillData.length,20,100);
  ctx.fillStyle='#8A95B8';ctx.font='11px monospace';ctx.fillText(pct+'% · '+new Date().toLocaleDateString('hr-HR'),20,118);
  // dots per question
  drillData.forEach((_,i)=>{
    const x=20+(i%9)*48,y=140+Math.floor(i/9)*24;
    const ok=drillResults[i];
    ctx.fillStyle=ok?'#4CAF7D':'#E86060';
    ctx.beginPath();ctx.roundRect(x,y,40,18,4);ctx.fill();
    ctx.fillStyle='#fff';ctx.font='bold 9px monospace';ctx.textAlign='center';
    ctx.fillText('Q'+(i+1)+' '+(ok?'✓':'✗'),x+20,y+12);ctx.textAlign='left';
  });
  // watermark
  ctx.fillStyle='rgba(74,85,128,0.4)';ctx.font='9px monospace';ctx.fillText('maturiraj.hr',W-75,H-8);
  canvas.toBlob(blob=>{
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');a.href=url;a.download='p03-drill-'+drillScore+'od'+drillData.length+'.png';a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  },'image/png');
}

function resetDrill(){
  drillIdx=0;drillScore=0;drillResults=[];
  document.getElementById('drillScore').classList.remove('show');
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    delete d.drillDone;delete d.drillScore;delete d.drillResults;
    localStorage.setItem(PAGE_KEY,JSON.stringify(d));
  }catch(e){}
  renderDrillQ();
}

renderDrillQ();

/* ─── BACK TO TOP ─── */
window.addEventListener('scroll',()=>{const b=document.getElementById('backTop');if(b)b.classList.toggle('show',window.scrollY>400);},{passive:true});

/* ─── MOBILE DRAWER ─── */
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
document.getElementById('mobDrawer').addEventListener('click',e=>{if(e.target===e.currentTarget)closeMobDrawer();});

/* ─── INIT ─── */
loadProgress();

/* ─── CLOZE PASSAGE ─────────────────────────────────── */
const clAnswers = {
  1: { correct: 'decided',          rule: 'Past Simple — jednokratna prošla radnja u naveden ljetnom putovanju. "Last summer" = točan vremenski marker → Past Simple, ne Present Perfect.' },
  2: { correct: 'had never done',   rule: 'Past Perfect — radnja koja se NIJE dogodila PRIJE druge prošle radnje (decided to travel). Perspektiva je iz prošlosti, ne sadašnjosti.' },
  3: { correct: 'arrived',          rule: 'Past Simple — "when she arrived" = kratka, završena radnja koja prekida ili prethodi drugoj. Standardni obrazac: when + PS.' },
  4: { correct: 'had left',         rule: 'Past Perfect — passport je bio zaboravljen PRIJE nego što je shvatila (realised). Realised = PS, ostavila = PP (ranije u prošlosti).' },
  5: { correct: 'was checking',     rule: 'Past Continuous — trajanje radnje u tijeku ("while") uz kratku paralelnu radnju. While + PC je standardni ispitni obrazac.' },
  6: { correct: 'was still sleeping', rule: 'Past Continuous — "still sleeping" = radnja u tijeku u trenutku poziva. Naglasak na trajanju, ne završetku → Past Continuous.' }
};
let clCorrect = 0;

function clCheck(n) {
  const sel = document.getElementById('cl' + n);
  const val = sel.value;
  if (!val) return;

  const data = clAnswers[n];
  const isOk = val === data.correct;

  // Style the select
  sel.style.borderColor = isOk ? 'var(--brit-green)' : 'var(--red)';
  sel.style.color = isOk ? 'var(--brit-green)' : 'var(--red)';
  sel.disabled = true;

  // Show feedback
  const wrap = document.getElementById('cl-feedback-wrap');
  const existing = document.getElementById('cl-fb-' + n);
  if (!existing) {
    const fb = document.createElement('div');
    fb.id = 'cl-fb-' + n;
    fb.style.cssText = 'padding:10px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.65;border:1px solid';
    if (isOk) {
      fb.style.background = 'var(--brit-green-dim)';
      fb.style.borderColor = 'var(--brit-green-bd)';
      fb.style.color = 'var(--brit-green)';
      fb.innerHTML = '✓ <b>Praznina ' + n + ':</b> ' + data.correct + ' — ' + data.rule;
      clCorrect++;
    } else {
      fb.style.background = 'var(--red-dim)';
      fb.style.borderColor = 'var(--red-border)';
      fb.style.color = 'var(--red)';
      fb.innerHTML = '✗ <b>Praznina ' + n + ':</b> Točno je <b style="color:var(--t1)">' + data.correct + '</b> — ' + data.rule;
    }
    wrap.appendChild(fb);

    // Update score bar
    const total = Object.keys(clAnswers).length;
    document.getElementById('cl-score-val').textContent = clCorrect + ' / ' + total;
    document.getElementById('cl-score-bar-fill').style.width = (clCorrect / total * 100) + '%';

    // Confetti if all correct
    if (clCorrect === total) {
      if (typeof launchConfetti === 'function') launchConfetti();
    }
  }
}


function openDiscere(){ openDiscereModal(); }


/* ═══ PREMIUM GATES JS ═══ */
window.__pwTier = 'pro';
function openPaywall(feature) {
  var sub = document.getElementById('pw-sub');
  if (sub) {
    var msgs = {
      'ai': 'AI profesor pomaže s gramatikom, strukturom eseja i strategijom ispita — personalizirano za tebe.',
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

function navigateChapter(n){
  if(window.parent && window.parent !== window){
    window.parent.postMessage({type:'maturiraj:navigateChapter',chapter:n},'*');
  }

function backToList(){
  if(window.parent && window.parent !== window){
    window.parent.postMessage({type:'maturiraj:backToList'},'*');
  }
}
}
</script>

<div class="paywall-modal" id="paywall-modal" onclick="if(event.target===this)closePaywall()" role="dialog" aria-modal="true" aria-labelledby="pw-h">
  <div class="paywall-card">
    <button class="paywall-close" onclick="closePaywall()" aria-label="Zatvori">&#215;</button>
    <div class="paywall-h" id="pw-h">&#128142; Otključaj <span style="background:linear-gradient(135deg,#C9A227,#CF142B);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Pro</span></div>
    <div class="paywall-sub" id="pw-sub">Pristupi AI profesoru, Discere simulatoru i personaliziranom planu učenja. Otkazivanje bilo kad.</div>
    <div class="paywall-tiers">
      <div class="paywall-tier" onclick="selectTier('standard')">
        <div class="paywall-tier-lbl">Standard</div>
        <div class="paywall-tier-name">Za samostalno učenje</div>
        <div class="paywall-tier-price">9,99&#8364;<span class="per"> /mj</span></div>
        <div class="paywall-tier-feat">&#8226; Svi Discere simulatori<br>&#8226; Sva gradiva u skriptama<br>&#8226; AI profesor: 30 poruka/dan</div>
      </div>
      <div class="paywall-tier pro" onclick="selectTier('pro')">
        <div class="paywall-tier-lbl">Pro</div>
        <div class="paywall-tier-name">Za maksimalan uspjeh</div>
        <div class="paywall-tier-price">19,99&#8364;<span class="per"> /mj</span></div>
        <div class="paywall-tier-feat">&#8226; Sve iz Standard<br>&#8226; AI: 200 poruka/dan<br>&#8226; Prijemni priprema<br>&#8226; AI plan učenja</div>
      </div>
    </div>
    <button class="paywall-cta" onclick="goCheckout()">Nastavi s <span id="pw-tier-name">Pro</span> &#8594;</button>
    <div class="paywall-note"><strong>7 dana besplatno</strong> &#183; otkaži bilo kada &#183; bez obveze</div>
  </div>
</div>
<div class="paywall-modal" id="discere-modal" onclick="if(event.target===this)closeDiscereModal()" role="dialog" aria-modal="true">
  <div class="paywall-card">
    <button class="paywall-close" onclick="closeDiscereModal()">&#215;</button>
    <div class="paywall-h">&#127919; Discere &#8212; <span style="background:linear-gradient(135deg,#4CAF7D,#34D399);-webkit-background-clip:text;-webkit-text-fill-color:transparent">Simulator</span></div>
    <div class="paywall-sub">Simuliraj pravi ENJ viša ispit. Dostupno uz Standard plan.</div>
    <div class="paywall-tiers">
      <div class="paywall-tier pro"><div class="paywall-tier-lbl">Standard</div><div class="paywall-tier-price">9,99&#8364;<span class="per"> /mj</span></div></div>
      <div class="paywall-tier"><div class="paywall-tier-lbl">Pro</div><div class="paywall-tier-price">19,99&#8364;<span class="per"> /mj</span></div></div>
    </div>
    <button class="paywall-cta" style="background:linear-gradient(135deg,#4CAF7D,#34D399)" onclick="goCheckout()">Otključaj Discere &#8594;</button>
    <div class="paywall-note"><strong>7 dana besplatno</strong> &#183; otkaži bilo kada</div>
  </div>
</div>
</body>
</html>
`;

export default { meta, html };