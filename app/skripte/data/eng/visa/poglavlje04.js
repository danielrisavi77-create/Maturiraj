// Maturiraj.hr — Engleski viša razina
// Poglavlje 04: Perfect vremenabez panike
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 4,
  slug: "poglavlje04",
  title: "Perfect vremenabez panike",
  subtitle: "Present Perfect Simple \u00b7 Present Perfect Continuous \u00b7 Past Perfect \u00b7 for/since/just/already/yet",
  blok: 2,
  blokNaziv: "Gramatika",
  prev: 3,
  next: 5,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 4</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Mono:ital,wght@0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet">
<style>
:root{
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
  --r1:4px;--r2:8px;--r3:12px;--r4:18px;--sidebar:248px;
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
.sb-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1)}
.sb-sub{font-size:10px;color:var(--blue);margin-top:1px;font-family:var(--mono);letter-spacing:.5px}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:16px 18px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 18px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}
.sb-item.active{color:var(--blue);background:var(--blue-glow);border-left-color:var(--blue)}
.sb-item.done-ch{color:var(--brit-green)}
.sb-item.done-ch .sb-dot{background:var(--brit-green);opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
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
.hero::after{content:'04';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
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
.pill-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.pill-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.pill-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.pill-amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.pill-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
/* SECTION LABEL */
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
/* STAT GRID */
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.blue{background:var(--blue-dim);color:var(--blue)}
.stat-icon.green{background:var(--brit-green-dim);color:var(--brit-green)}
.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}
.stat-icon.gold{background:var(--gold-dim);color:var(--gold)}
.stat-icon.amber{background:var(--amber-dim);color:var(--amber)}
.stat-icon.red{background:var(--union-red-dim);color:var(--union-red)}
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
.gram-badge.pps{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.gram-badge.ppc{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.gram-badge.pp{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.gram-title{font-size:15px;font-weight:600;color:var(--t1);font-family:var(--serif)}
.gram-sub{font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:1px}
.gram-body{padding:20px 24px}
/* FORMULA */
.formula{background:var(--bg-input);border:1px solid var(--bd-mid);border-left:3px solid var(--brit-green);border-radius:0 var(--r2) var(--r2) 0;padding:12px 16px;margin:12px 0;font-family:var(--mono);font-size:13px;line-height:2;position:relative}
.formula.blue{border-left-color:var(--blue)}
.formula.violet{border-left-color:var(--violet)}
.formula.gold{border-left-color:var(--gold)}
.formula .lbl{color:var(--t1);font-weight:500}
.formula .val{color:var(--brit-green)}
.formula.blue .val{color:var(--blue)}
.formula.violet .val{color:var(--violet)}
.formula .sub{color:var(--t3)}
.formula .kw{color:var(--amber)}
/* EXAMPLES */
.exs{margin:14px 0 20px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-en{font-size:14px;color:var(--t1);line-height:1.5}
.ex-en b.green{color:var(--brit-green);font-weight:600}
.ex-en b.blue{color:var(--blue);font-weight:600}
.ex-en b.violet{color:var(--violet);font-weight:600}
.ex-en b.gold{color:var(--gold);font-weight:600}
.ex-arr{color:var(--t3);font-size:12px;padding-top:2px}
.ex-hr{font-size:12.5px;color:var(--t2);line-height:1.5;font-family:var(--mono)}
/* COMPARE */
.compare{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 24px}
.cmp-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden}
.cmp-head{padding:10px 14px;font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-head.green{background:var(--brit-green-dim);color:var(--brit-green);border-bottom-color:var(--brit-green-bd)}
.cmp-head.blue{background:var(--blue-dim);color:var(--blue);border-bottom-color:var(--blue-border)}
.cmp-head.violet{background:var(--violet-dim);color:var(--violet);border-bottom-color:var(--violet-border)}
.cmp-head.gold{background:var(--gold-dim);color:var(--gold);border-bottom-color:var(--gold-bd)}
.cmp-body{padding:12px 14px}
.cmp-row{font-size:12.5px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.5}
.cmp-row:last-child{border-bottom:none}
.cmp-row b{color:var(--t1);display:block;font-size:12px;margin-bottom:1px}
/* SIGNAL CHIPS */
.sig-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;margin:14px 0 22px}
.sig-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px}
.sig-head{font-family:var(--mono);font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.sig-head.green{color:var(--brit-green)}
.sig-head.blue{color:var(--blue)}
.sig-head.violet{color:var(--violet)}
.chips{display:flex;flex-wrap:wrap;gap:5px}
.chip{font-family:var(--mono);font-size:11.5px;padding:3px 9px;border-radius:var(--r1);border:1px solid;transition:transform .12s;cursor:default}
.chip:hover{transform:translateY(-1px)}
.chip.green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.chip.blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.chip.violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.chip.gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.chip.amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
/* CALLOUT */
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn{background:var(--red-dim);border-color:var(--red-border)}
.callout-tip{background:var(--amber-dim);border-color:var(--amber-border)}
.callout-info{background:var(--blue-dim);border-color:var(--blue-border)}
.callout-green{background:var(--brit-green-dim);border-color:var(--brit-green-bd)}
.callout-violet{background:var(--violet-dim);border-color:var(--violet-border)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}
.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn .callout-title{color:var(--red)}
.callout-tip .callout-title{color:var(--amber)}
.callout-info .callout-title{color:var(--blue)}
.callout-green .callout-title{color:var(--brit-green)}
.callout-violet .callout-title{color:var(--violet)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}
.callout-text b{color:var(--t1)}
/* PANIC BOX */
.panic-box{background:linear-gradient(135deg,rgba(79,123,232,.05),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.panic-hd{background:linear-gradient(90deg,var(--union-red),#1C3A8A);padding:11px 20px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase}
.panic-body{padding:18px 20px}
.panic-step{display:flex;align-items:flex-start;gap:14px;padding:9px 0;border-bottom:1px solid rgba(79,123,232,.10)}
.panic-step:last-child{border-bottom:none}
.panic-num{width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.panic-text{font-size:13px;color:rgba(238,240,248,.85);line-height:1.65}
.panic-text b{color:var(--t1)}
/* REVEAL */
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.rq-icon{font-size:16px;flex-shrink:0}
.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .28s ease,padding .28s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:500px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b{color:var(--t1)}
.reveal-ans .ok{color:var(--green)}
.reveal-ans .bad{color:var(--red)}
.reveal-ans .note{color:var(--blue)}
/* TIMELINE — for PP usage contexts */
.pp-timeline{margin:18px 0 24px;display:flex;flex-direction:column;gap:8px}
.ppt-item{display:grid;grid-template-columns:140px 1fr;gap:12px;align-items:start;padding:12px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);transition:border-color .15s}
.ppt-item:hover{border-color:var(--bd-light)}
.ppt-label{font-family:var(--mono);font-size:10px;font-weight:700;padding:4px 8px;border-radius:var(--r1);border:1px solid;text-align:center;align-self:start}
.ppt-label.pps{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.ppt-label.ppc{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.ppt-label.pp{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.ppt-content{font-size:13px;color:var(--t2);line-height:1.6}
.ppt-content b{color:var(--t1)}
.ppt-example{font-style:italic;color:var(--t1);display:block;margin-top:4px;font-size:13.5px}
/* QUIZ */
.quiz-intro{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 18px;font-size:13px;color:var(--t2);margin-bottom:22px;font-family:var(--mono);line-height:1.65}
.quiz-intro strong{color:var(--blue)}
.q-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px}
.q-head{padding:14px 18px;border-bottom:1px solid var(--bd)}
.q-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:500;letter-spacing:.5px;margin-bottom:6px;text-transform:uppercase}
.q-text{font-size:14.5px;font-weight:600;color:var(--t1);line-height:1.5}
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
/* SPEED DRILL */
.sd-intro{font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2)}
.sd-progress{display:flex;gap:5px;margin-bottom:16px;flex-wrap:wrap}
.sd-dot{width:10px;height:10px;border-radius:2px;background:var(--bg-elevated);border:1px solid var(--bd-mid);transition:all .2s}
.sd-dot.ok{background:var(--green);border-color:var(--green)}
.sd-dot.no{background:var(--red);border-color:var(--red)}
.sd-dot.cur{border-color:var(--blue);background:var(--blue-dim)}
.sd-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:18px 20px;margin-bottom:14px}
.sd-sent{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:14px;line-height:1.45;font-family:var(--serif)}
.sd-sent code{font-family:var(--mono);font-size:14px;background:var(--bg-input);padding:1px 8px;border-radius:var(--r1);color:var(--amber);font-weight:400}
.sd-btns{display:flex;gap:8px;flex-wrap:wrap}
.sd-btn{flex:1;text-align:center;padding:9px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s;user-select:none;min-width:80px}
.sd-btn.opt-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.sd-btn.opt-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.sd-btn.opt-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.sd-btn.opt-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.sd-btn.opt-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.sd-btn:hover:not(.picked){opacity:.75;transform:translateY(-1px)}
.sd-btn.correct-pick{background:var(--green);color:#060810;border-color:var(--green);pointer-events:none}
.sd-btn.wrong-pick{background:var(--red-dim);color:var(--red);border-color:var(--red-border);pointer-events:none}
.sd-btn.reveal-correct{background:var(--green-dim);color:var(--green);border-color:var(--green-border);pointer-events:none}
.sd-fb{display:none;margin-top:10px;font-family:var(--mono);font-size:12px;line-height:1.6;padding:9px 12px;border-radius:var(--r2)}
.sd-fb.show{display:block}
.sd-fb.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.sd-fb.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.sd-score{text-align:center;padding:28px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);display:none}
.sd-score.show{display:block}
.sd-score-num{font-size:48px;font-weight:700;color:var(--blue);font-family:var(--serif);letter-spacing:-2px}
.sd-score-lbl{font-size:13px;color:var(--t2);margin-top:6px}
.sd-retry{margin-top:14px;padding:9px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer}
/* ERROR DRILL */
.err-drill{margin:18px 0}
.err-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:10px}
.err-sent{padding:14px 18px;font-size:14.5px;font-weight:600;color:var(--red);letter-spacing:-0.1px;border-bottom:1px solid var(--bd);font-family:var(--serif)}
.err-btn{display:block;width:100%;text-align:left;padding:10px 18px;font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t3);background:transparent;border:none;cursor:pointer;transition:color .12s}
.err-btn:hover{color:var(--amber)}
.err-fix{display:none;padding:12px 18px;font-family:var(--mono);font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);background:var(--bg-surface)}
.err-fix.show{display:block}
.err-fix .correct{color:var(--green);font-weight:600}
.err-fix .explain{color:var(--t2);font-size:12px;margin-top:4px;display:block}
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
/* TIP BAR */
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;gap:0;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}
.tip-item.done{color:var(--green)}
.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:background .15s}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}
/* DISCERE */
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}
.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}
.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;white-space:nowrap;transition:opacity .15s;text-decoration:none;display:inline-block}
.discere-btn:hover{opacity:.85}
/* NAV */
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card);text-decoration:none;display:inline-block}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}
.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue)}
.nav-btn.primary:hover{opacity:.88}
/* CONFETTI + EXPORT */
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;top:-10px;width:8px;height:8px;border-radius:2px;pointer-events:none;z-index:9999;animation:confettiFall linear forwards}
.quiz-export-btn{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;transition:all .15s;margin-top:10px}
.quiz-export-btn:hover{color:var(--t1);border-color:var(--bd-light)}
/* BACK TO TOP */
.back-top{position:fixed;bottom:86px;right:24px;z-index:200;width:38px;height:38px;border-radius:50%;background:var(--bg-card);border:1px solid var(--bd-mid);color:var(--t3);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s,color .15s;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.back-top.show{opacity:1;pointer-events:auto}
.back-top:hover{color:var(--blue);border-color:var(--blue-border);transform:translateY(-2px)}
@media(min-width:721px){.back-top{right:32px;bottom:32px}}
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
@media(max-width:680px){.compare{grid-template-columns:1fr}.ppt-item{grid-template-columns:1fr}}
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}.sd-btns{flex-direction:column}.sd-btn{flex:none}}
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
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span> 03 · Vremena koja se miješaju</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span> 04 · Perfect vremena</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(3)" style="cursor:pointer"><span class="sb-dot"></span>03 · Vremena koja se miješaju</div>
  <div class="sb-item active" onclick="navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span>04 · Perfect vremena</div>
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
<div class="sb-footer">04 / 20 · perfect vremena<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span>
    <span>blok-2</span>
    <span class="bc-sep">/</span>
    <span class="bc-active">perfect-vremena</span>
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
      ~30 min
    </div>
  </div>

  <!-- ══════════ LAYER 0 — 2 MIN ══════════ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 04 of 20 · blok 2 — grammar core</div>
      <h1 class="hero-title">Perfect vremena<br><span>bez panike</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">04 / 20</span>
      </div>
      <p class="hero-sub">Present Perfect Simple · Present Perfect Continuous · Past Perfect · for/since/just/already/yet</p>
      <div class="progress-track"><div class="progress-bar" style="width:20%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-green">PP Simple</span>
      <span class="pill pill-blue">PP Continuous</span>
      <span class="pill pill-violet">Past Perfect</span>
      <span class="pill pill-amber">for / since</span>
      <span class="pill pill-gold">just / already / yet</span>
      <span class="pill pill-red">Exam traps</span>
    </div>

    <div class="sec-label">// tri perfect vremena — na jednom pogledu</div>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon green">PPS</div>
        <div class="stat-name">Present Perfect Simple</div>
        <div class="stat-desc"><b style="color:var(--brit-green)">have/has + 3. stupanj</b> — rezultat, iskustvo, broj puta, trajanje s for/since</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon blue">PPC</div>
        <div class="stat-name">Present Perfect Continuous</div>
        <div class="stat-desc"><b style="color:var(--blue)">have/has been + -ing</b> — naglasak na trajanju ili vidljivom rezultatu aktivnosti</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon violet">PP</div>
        <div class="stat-name">Past Perfect</div>
        <div class="stat-desc"><b style="color:var(--violet)">had + 3. stupanj</b> — radnja završena PRIJE neke druge prošle radnje</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon amber">for/since</div>
        <div class="stat-name">for vs since</div>
        <div class="stat-desc"><b style="color:var(--amber)">for</b> = trajanje (3 hours) · <b style="color:var(--amber)">since</b> = točka početka (2020, Monday)</div>
      </div>
    </div>

    <div class="sec-label">// 4 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 perfect essentials — zapamti ovo četiri</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>PPS vs PPC — pitaj se: rezultat ili trajanje?</b> Zanima te <em>što je postignuto</em> → PPS. Zanima te <em>koliko dugo</em> ili <em>vidljivi trag aktivnosti</em> → PPC.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>for ili since?</b> → <em>for three hours / for a week</em> (trajanje), <em>since Monday / since 2020</em> (od točke u vremenu). Ako možeš staviti broj — for. Ako je datum ili događaj — since.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Past Perfect = "had done" = prošlost PRIJE prošlosti.</b> Koristiš ga u priči kad trebaš jasno pokazati da se jedna radnja dogodila prije druge: "When she arrived, he <em>had already left</em>."</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>State verbs ne dolaze u PPC</b> (baš kao ni u PC). "I have been knowing" → <span style="color:var(--red)">UVIJEK GREŠKA</span>. State verbs (know, want, love...) koriste PPS: "I have known him for years."</div></div>
      </div>
    </div>

    <div class="sec-label">// brzi pregled — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟢</span><span>Present Perfect Simple vs Continuous — ključna razlika</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>PPS</b> = rezultat, iskustvo, broj puta, completed action<br>
        <span class="ok">I have written three emails today.</span> (koliko = rezultat)<br><br>
        <b>PPC</b> = naglasak na trajanju, nedovršena ili ponavljajuća aktivnost, vidljivi trag<br>
        <span class="ok">I have been writing emails all morning.</span> (trajanje = cijelo jutro)<br><br>
        <span class="bad">Zamka:</span> State verbs nikad PPC → <span class="ok">I have known him for years</span>, ne "I have been knowing"
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Past Perfect — zašto i kada?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        Past Perfect (had + 3. stupanj) koristiš kada u priči o prošlosti trebaš jasno pokazati da se jedna radnja dogodila <b>prije</b> druge.<br><br>
        <span class="ok">When I arrived at the station, the train had already left.</span><br>
        → train left (PP) BEFORE I arrived (PS)<br><br>
        Signal words: <span class="note">already, just, by the time, before, after, when, never...before</span><br>
        <span class="bad">Zamka:</span> Ne koristiš PP samo zato što je "davno" — koristiš ga kad postoje DVA prošla događaja i trebaš označiti redoslijed.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>for vs since — brzo pravilo</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>for</b> + trajanje (odgovor na "koliko dugo"): <span class="ok">for three hours, for a week, for years, for a long time</span><br>
        <b>since</b> + točka početka (odgovor na "od kada"): <span class="ok">since Monday, since 2020, since I was a child, since the meeting</span><br><br>
        Test: možeš li staviti broj? → <b>for</b>. Je li to datum/dan/događaj? → <b>since</b>.<br>
        <span class="bad">Zamka:</span> <span style="color:var(--red)">since three hours</span> → <span class="ok">for three hours</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">⚡</span><span>just · already · yet · still — gdje i kako?</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>just</b> = upravo, malo prije → između have i participa: <span class="ok">I have just finished.</span><br>
        <b>already</b> = već (ranije nego očekivano) → između have i participa ili na kraju: <span class="ok">She has already left. / She has left already.</span><br>
        <b>yet</b> = još (u negativnim i pitanjima) → na kraju rečenice: <span class="ok">I haven't finished yet. / Have you finished yet?</span><br>
        <b>still</b> = još uvijek (iznenađenje da nešto nije završeno) → uz negative: <span class="ok">She still hasn't called.</span><br>
        <span class="bad">Zamka:</span> <span style="color:var(--red)">Have you yet finished?</span> → <span class="ok">Have you finished yet?</span> (yet ide na kraj!)
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
        <div class="cg-question">Odaberi točnu rečenicu:</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">A</div>She has been knowing him since childhood.</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">B</div>I have been working here since three years.</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)" onkeydown="if(event.key==='Enter')cgAnswer(this,true)"><div class="cg-letter">C</div>They had already left when we arrived.</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">D</div>Have you finished yet your homework?</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Gramatiku u detalju →</button>
      </div>
    </div>

    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(3)">← Poglavlje 03</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Gramatika u detalju →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ══════════ LAYER 1 — GRAMATIKA ══════════ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-pps')"><span class="tip-dot"></span>PP Simple</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-ppc')"><span class="tip-dot"></span>PP Continuous</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-pps-ppc')"><span class="tip-dot"></span>PPS vs PPC</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-pp')"><span class="tip-dot"></span>Past Perfect</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-ppc2')"><span class="tip-dot"></span>Past PP Cont.</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-forsince')"><span class="tip-dot"></span>for / since</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-adverbs')"><span class="tip-dot"></span>just/already/yet</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-7" onclick="tipScroll('sec-signals')"><span class="tip-dot"></span>Signal words</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-8" onclick="tipScroll('sec-dtree')"><span class="tip-dot"></span>Decision tree</div>
    </div>

    <!-- PP SIMPLE -->
    <div id="sec-pps" class="sec-label">// present perfect simple — rezultat i iskustvo</div>
    <p class="prose">Present Perfect Simple (PPS) koristiš kad je važan <strong>rezultat</strong>, <strong>iskustvo</strong> ili <strong>veza s današnjim trenutkom</strong>. Nije važno točno kada — važno je što je postignuto ili iskušeno.</p>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pps">PPS</div>
        <div><div class="gram-title">Present Perfect Simple — forma</div><div class="gram-sub">have/has + past participle (3. stupanj)</div></div>
      </div>
      <div class="gram-body">
        <div class="formula">
          <span class="lbl">Affirmative: </span><span class="val">I/you/we/they have + 3. stupanj</span> · <span class="val">he/she/it has + 3. stupanj</span><br>
          <span class="lbl">Negative: </span><span class="val">haven't / hasn't + 3. stupanj</span><br>
          <span class="lbl">Question: </span><span class="val">Have/Has + subjekt + 3. stupanj?</span>
        </div>
        <div class="pp-timeline">
          <div class="ppt-item">
            <div class="ppt-label pps">REZULTAT</div>
            <div class="ppt-content">Radnja je završena, a rezultat je vidljiv/relevantan sada.<span class="ppt-example">I have lost my keys. (= još su nestali)</span></div>
          </div>
          <div class="ppt-item">
            <div class="ppt-label pps">ISKUSTVO</div>
            <div class="ppt-content">Nešto se dogodilo u životu (nije važno kada).<span class="ppt-example">She has never been to Tokyo.</span></div>
          </div>
          <div class="ppt-item">
            <div class="ppt-label pps">BROJ PUTA</div>
            <div class="ppt-content">Koliko puta se nešto dogodilo do sad.<span class="ppt-example">I have read this book three times.</span></div>
          </div>
          <div class="ppt-item">
            <div class="ppt-label pps">TRAJANJE</div>
            <div class="ppt-content">Stanje koje traje od nekog trenutka do danas (with for/since).<span class="ppt-example">She has lived here for ten years.</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- PP CONTINUOUS -->
    <div id="sec-ppc" class="sec-label" style="margin-top:36px">// present perfect continuous — trajanje i vidljivi trag</div>
    <p class="prose">Present Perfect Continuous (PPC) koristiš kad je naglasak na <strong>trajanju</strong> aktivnosti ili na <strong>vidljivom tragu</strong> koji aktivnost ostavlja. Aktivnost može biti još u tijeku ili nedavno završena.</p>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge ppc">PPC</div>
        <div><div class="gram-title">Present Perfect Continuous — forma</div><div class="gram-sub">have/has been + glagol-ing</div></div>
      </div>
      <div class="gram-body">
        <div class="formula blue">
          <span class="lbl">Affirmative: </span><span class="val">have/has been + glagol-ing</span><br>
          <span class="lbl">Negative: </span><span class="val">haven't/hasn't been + glagol-ing</span><br>
          <span class="lbl">Question: </span><span class="val">Have/Has + subjekt + been + glagol-ing?</span>
        </div>
        <div class="pp-timeline">
          <div class="ppt-item">
            <div class="ppt-label ppc">TRAJANJE</div>
            <div class="ppt-content">Koliko dugo traje aktivnost (naglasak na procesu, ne rezultatu).<span class="ppt-example">I have been working here for five years. (= još uvijek radim)</span></div>
          </div>
          <div class="ppt-item">
            <div class="ppt-label ppc">VIDLJIVI TRAG</div>
            <div class="ppt-content">Aktivnost je nedavno završena, ali ostavio je vidljivi trag.<span class="ppt-example">You look tired. Have you been running?</span></div>
          </div>
          <div class="ppt-item">
            <div class="ppt-label ppc">PONAVLJANJE</div>
            <div class="ppt-content">Aktivnost se ponavljala u određenom periodu.<span class="ppt-example">She has been calling me all morning.</span></div>
          </div>
        </div>
        <div class="callout callout-warn" style="margin-top:12px">
          <div class="callout-icon">🚫</div>
          <div class="callout-body">
            <div class="callout-title">State verbs nikad u PPC</div>
            <div class="callout-text">
              <span style="color:var(--red)">✗ I have been knowing him for years.</span><br>
              <span style="color:var(--red)">✗ She has been wanting a new car.</span><br>
              <span style="color:var(--green)">✓ I have known him for years. (PPS)</span><br>
              <span style="color:var(--green)">✓ She has wanted a new car for months. (PPS)</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PPS vs PPC COMPARE -->
    <div id="sec-pps-ppc" class="sec-label" style="margin-top:36px">// PPS vs PPC — ključna razlika u fokusu</div>
    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head green">Present Perfect Simple</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Fokus na:</b> rezultatu, ishodu, broju, završenoj radnji</div>
          <div class="cmp-row"><b>I have written 5 emails.</b> (koliko — rezultat)</div>
          <div class="cmp-row"><b>She has read the report.</b> (završeno, može početi meeting)</div>
          <div class="cmp-row"><b>He has lived here for years.</b> (stanje — state verb situation)</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head blue">Present Perfect Continuous</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Fokus na:</b> trajanju, procesu, vidljivom tragu, ponavljanju</div>
          <div class="cmp-row"><b>I have been writing emails.</b> (trajanje — još pišem/upravo završio)</div>
          <div class="cmp-row"><b>She has been reading the report.</b> (u procesu, nije nužno gotova)</div>
          <div class="cmp-row"><b>He has been running.</b> (vidljiv trag — znojav, umoran)</div>
        </div>
      </div>
    </div>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Brzi test: PPS ili PPC?</div>
        <div class="callout-text">Pitaj se: zanima li me <b>koliko je napravljeno</b> (broj, rezultat) ili <b>koliko dugo / kako izgleda osoba</b> (trajanje, trag)? Ako rezultat → PPS. Ako trajanje ili vidljivi efekt → PPC.</div>
      </div>
    </div>

    <!-- PAST PERFECT -->
    <div id="sec-pp" class="sec-label" style="margin-top:36px">// past perfect — prošlost PRIJE prošlosti</div>
    <p class="prose">Past Perfect (PP) koristiš u narativima i pričama kada trebaš jasno označiti da se jedna radnja u prošlosti dogodila <strong>prije</strong> druge prošle radnje. To je "had + 3. stupanj" — jedina past forma koja explicite označuje redoslijed.</p>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pp">PP</div>
        <div><div class="gram-title">Past Perfect — forma i upotreba</div><div class="gram-sub">had + past participle · redoslijed u prošlosti</div></div>
      </div>
      <div class="gram-body">
        <div class="formula violet">
          <span class="lbl">Affirmative: </span><span class="val">had + 3. stupanj</span> · <span class="sub">svi subjekti isti oblik!</span><br>
          <span class="lbl">Negative: </span><span class="val">hadn't + 3. stupanj</span><br>
          <span class="lbl">Question: </span><span class="val">Had + subjekt + 3. stupanj?</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">When I arrived, she <b class="violet">had already left</b>.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Left (PP) BEFORE arrived (PS)</div>
          </div>
          <div class="ex">
            <div class="ex-en">He couldn't pay because he <b class="violet">had lost</b> his wallet.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Lost (PP) BEFORE couldn't pay (PS)</div>
          </div>
          <div class="ex">
            <div class="ex-en">I realised I <b class="violet">had seen</b> the film before.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Seen film (PP) BEFORE realised (PS)</div>
          </div>
        </div>
        <div class="callout callout-violet" style="margin-top:4px">
          <div class="callout-icon">⚠️</div>
          <div class="callout-body">
            <div class="callout-title">Kada NE koristiti Past Perfect</div>
            <div class="callout-text">PP nije "davna prošlost". Koristiš ga samo kad postoje <b>dva prošla događaja</b> i trebaš označiti koji je bio prvi. Ako pričaš samo o jednoj prošloj radnji — Past Simple je dovoljno.</div>
          </div>
        </div>
      </div>
    </div>


    <!-- PAST PERFECT CONTINUOUS -->
    <div id="sec-ppc2" class="sec-label" style="margin-top:36px">// past perfect continuous — trajanje do trenutka u prošlosti</div>
    <p class="prose">Past Perfect Continuous (had been + -ing) je rjeđi od Past Perfecta, ali se pojavljuje u reading zadacima i ponekad u gap-fillu. Opisuje radnju koja je <strong>trajala određeno vrijeme sve do nekog trenutka u prošlosti</strong>.</p>
    <div class="gram">
      <div class="gram-head">
        <div class="gram-badge pp">PPC2</div>
        <div><div class="gram-title">Past Perfect Continuous — forma</div><div class="gram-sub">had been + glagol-ing · trajanje do prošlosti</div></div>
      </div>
      <div class="gram-body">
        <div class="formula violet">
          <span class="lbl">Forma: </span><span class="val">had been + glagol-ing</span> · <span class="sub">svi subjekti isti oblik</span><br>
          <span class="lbl">Negative: </span><span class="val">hadn't been + glagol-ing</span><br>
          <span class="lbl">Analogija: </span><span class="sub">Past Perfect Continuous : Past Perfect = PPC : PPS (samo u prošlosti)</span>
        </div>
        <div class="exs">
          <div class="ex">
            <div class="ex-en">She was exhausted because she <b class="violet">had been working</b> all night.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Radnja trajala do trenutka umora</div>
          </div>
          <div class="ex">
            <div class="ex-en">He <b class="violet">had been waiting</b> for an hour when she finally arrived.</div>
            <div class="ex-arr">→</div>
            <div class="ex-hr">Trajanje čekanja do njenog dolaska</div>
          </div>
        </div>
        <div class="callout callout-info" style="margin-top:4px">
          <div class="callout-icon">💡</div>
          <div class="callout-body">
            <div class="callout-title">Kad ga prepoznati na ispitu</div>
            <div class="callout-text">Vidiš <b>had been + -ing</b> u tekstu → radi se o aktivnosti koja je trajala do nekog prošlog trenutka. Najčešće se javlja s <b>for, since, all day, for hours</b> u prošlom kontekstu (when, by the time, before she arrived...).</div>
          </div>
        </div>
      </div>
    </div>

    <!-- KWT: PPC2 -->
    <div style="background:var(--bg-card);border:1px solid var(--blue-border);border-radius:var(--r3);overflow:hidden;margin:16px 0 8px">
      <div style="padding:9px 16px;background:var(--blue-dim);border-bottom:1px solid var(--blue-border);font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase">KWT u praksi — Past Perfect Continuous</div>
      <div style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
        <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.7">
          <b style="color:var(--t1)">Original:</b> She started revising at 6 a.m. When the exam began, she stopped. She had revised for three hours.<br>
          <b style="color:var(--t1)">Key word: BEEN</b><br>
          <b style="color:var(--t1)">Transformacija:</b> <span style="color:var(--brit-green)">She had been revising for three hours when the exam began.</span>
        </div>
        <div style="background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:12px;color:var(--t2);line-height:1.65">
          <b style="color:var(--t1)">Zašto PPC2, ne PP?</b> Key word BEEN signalizira <em>been + -ing</em> oblik. PP bi bio "had revised" (rezultat — koliko), ali BEEN zahtijeva trajanje procesa → <em>had been revising</em>.<br>
          <b style="color:var(--t1)">Što ostaje isto:</b> Key word BEEN ne mijenja se — "had BEEN revising" ga sadrži. Broj riječi: <em>had been revising for</em> = 4 words ✓ (unutar limita 2–5).
        </div>
      </div>
    </div>

    <!-- FOR / SINCE -->
    <div id="sec-forsince" class="sec-label" style="margin-top:36px">// for vs since — trajanje vs točka početka</div>
    <div class="compare">
      <div class="cmp-card">
        <div class="cmp-head amber" style="background:var(--amber-dim);color:var(--amber);border-bottom-color:var(--amber-border)">for — trajanje</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Odgovara na:</b> "Koliko dugo?"</div>
          <div class="cmp-row"><b>+ period trajanja:</b>for three hours · for a week · for years · for a long time · for ages</div>
          <div class="cmp-row"><b>Test:</b> može se staviti broj/mjera</div>
          <div class="cmp-row" style="color:var(--green)">✓ She has worked here for five years.</div>
        </div>
      </div>
      <div class="cmp-card">
        <div class="cmp-head amber" style="background:var(--amber-dim);color:var(--amber);border-bottom-color:var(--amber-border)">since — točka početka</div>
        <div class="cmp-body">
          <div class="cmp-row"><b>Odgovara na:</b> "Od kada?"</div>
          <div class="cmp-row"><b>+ točan trenutak:</b>since Monday · since 2020 · since I was born · since the accident</div>
          <div class="cmp-row"><b>Test:</b> je li to datum, dan ili događaj</div>
          <div class="cmp-row" style="color:var(--green)">✓ She has worked here since 2019.</div>
        </div>
      </div>
    </div>
    <div class="callout callout-warn">
      <div class="callout-icon">🚫</div>
      <div class="callout-body">
        <div class="callout-title">Najčešća greška — since + trajanje</div>
        <div class="callout-text">
          <span style="color:var(--red)">✗ I have known her since three years.</span><br>
          <span style="color:var(--red)">✗ He has been here since a long time.</span><br>
          <span style="color:var(--green)">✓ I have known her for three years.</span><br>
          <span style="color:var(--green)">✓ He has been here for a long time.</span>
        </div>
      </div>
    </div>

    <!-- JUST / ALREADY / YET / STILL -->
    <div id="sec-adverbs" class="sec-label" style="margin-top:36px">// just · already · yet · still — pozicija i značenje</div>
    <div class="pp-timeline">
      <div class="ppt-item">
        <div class="ppt-label pps">just</div>
        <div class="ppt-content">Upravo, malo prije. Između <b>have</b> i participa.<span class="ppt-example">I have just finished. / She has just called.</span></div>
      </div>
      <div class="ppt-item">
        <div class="ppt-label pps">already</div>
        <div class="ppt-content">Već (ranije nego se očekivalo). Između have i participa <b>ili na kraju</b>.<span class="ppt-example">He has already eaten. / Have you already finished?</span></div>
      </div>
      <div class="ppt-item">
        <div class="ppt-label ppc">yet</div>
        <div class="ppt-content">Još (u negativima i pitanjima). <b>Uvijek na kraju</b> rečenice.<span class="ppt-example">I haven't finished yet. / Have you called her yet?</span></div>
      </div>
      <div class="ppt-item">
        <div class="ppt-label ppc">still</div>
        <div class="ppt-content">Još uvijek (iznenađenje, trajanje). Ispred <b>haven't/hasn't</b>.<span class="ppt-example">She still hasn't replied. / I still haven't found it.</span></div>
      </div>
    </div>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">yet vs still — fina razlika</div>
        <div class="callout-text"><b>yet</b> = jednostavno "nije još gotovo" — neutralno.<br><b>still</b> = "čudi me da još nije gotovo" — ima nijansu iznenađenja ili frustracije.<br>Oboje = negativne rečenice, ali still ide <em>ispred</em> haven't, yet ide <em>na kraju</em>.</div>
      </div>
    </div>

    <!-- SIGNAL WORDS -->
    <div id="sec-signals" class="sec-label" style="margin-top:36px">// signal words po perfect vremenima</div>
    <div class="sig-grid">
      <div class="sig-card">
        <div class="sig-head green">Present Perfect Simple</div>
        <div class="chips">
          <span class="chip green">already</span><span class="chip green">yet</span><span class="chip green">just</span><span class="chip green">ever</span><span class="chip green">never</span><span class="chip green">recently</span><span class="chip green">so far</span><span class="chip green">this week</span><span class="chip green">how many times</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head blue">Present Perfect Continuous</div>
        <div class="chips">
          <span class="chip blue">for</span><span class="chip blue">since</span><span class="chip blue">all morning</span><span class="chip blue">how long</span><span class="chip blue">lately</span><span class="chip blue">recently</span><span class="chip blue">all day</span>
        </div>
      </div>
      <div class="sig-card">
        <div class="sig-head violet">Past Perfect</div>
        <div class="chips">
          <span class="chip violet">already</span><span class="chip violet">just</span><span class="chip violet">by the time</span><span class="chip violet">before</span><span class="chip violet">after</span><span class="chip violet">when</span><span class="chip violet">never...before</span><span class="chip violet">once</span>
        </div>
      </div>
    </div>

    <!-- DECISION TREE -->
    <div id="sec-dtree" class="sec-label" style="margin-top:36px">// decision tree — koje perfect vrijeme odabrati</div>
    <p style="font-size:13px;color:var(--t2);margin-bottom:16px;font-family:var(--mono)">Prolazi odozgo prema dolje. Zaustavi se pri prvom da.</p>
    <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">

      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:13px 16px;font-size:13px;font-weight:600;color:var(--t1)">
        🕐 Pričaš o prošlosti, ali postoje DVA prošla događaja i trebaš označiti koji je bio PRVI?
      </div>
      <div style="padding-left:20px;border-left:2px solid var(--violet);margin-left:8px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:4px">DA →</div>
        <div style="background:var(--violet-dim);border:1px solid var(--violet-border);border-radius:var(--r3);padding:11px 14px;color:var(--violet);font-size:13px;font-weight:600">
          → <b>Past Perfect</b> (had + 3. stupanj) za raniju radnju<br>
          <span style="font-size:11px;font-weight:400;opacity:.85;font-family:var(--mono)">"When I arrived, she had already left."</span>
        </div>
        <div style="font-family:var(--mono);font-size:10.5px;color:var(--t3);margin-top:5px;padding:8px 12px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r2)">
          ⚠ Trajala je i ta radnja? → <b>had been + -ing</b> (Past PP Continuous)<br>
          <span style="font-size:11px;opacity:.8">"She was tired because she had been working all night."</span>
        </div>
      </div>

      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:13px 16px;font-size:13px;font-weight:600;color:var(--t1);margin-top:4px">
        🔗 Radnja u prošlosti ima VIDLJIVU VEZU s danas (rezultat, iskustvo, veza)?
      </div>
      <div style="padding-left:20px;border-left:2px solid var(--brit-green);margin-left:8px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:4px">DA →</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div style="background:var(--brit-green-dim);border:1px solid var(--brit-green-bd);border-radius:var(--r3);padding:11px 14px;color:var(--brit-green);font-size:12.5px;font-weight:600">
            → <b>PPS</b> (have/has + 3. st.)<br>
            <span style="font-weight:400;font-size:11px;opacity:.85;font-family:var(--mono)">Zanima te rezultat, iskustvo ili broj puta.<br>"I have written 5 emails."</span>
          </div>
          <div style="background:var(--blue-dim);border:1px solid var(--blue-border);border-radius:var(--r3);padding:11px 14px;color:var(--blue);font-size:12.5px;font-weight:600">
            → <b>PPC</b> (have/has been + -ing)<br>
            <span style="font-weight:400;font-size:11px;opacity:.85;font-family:var(--mono)">Zanima te trajanje ili vidljivi trag.<br>"I have been writing all day."</span>
          </div>
        </div>
        <div style="font-family:var(--mono);font-size:10.5px;color:var(--amber);margin-top:5px;padding:6px 12px;background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r2)">
          ⚠ State verb (know/want/love...)? → Uvijek PPS, nikad PPC!
        </div>
      </div>

      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:13px 16px;font-size:13px;font-weight:600;color:var(--t1);margin-top:4px">
        ⏰ Postoji li TOČAN vremenski marker u prošlosti (yesterday / in 2020 / last week)?
      </div>
      <div style="padding-left:20px;border-left:2px solid var(--union-red);margin-left:8px">
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3);margin-bottom:4px">DA →</div>
        <div style="background:var(--union-red-dim);border:1px solid var(--union-red-bd);border-radius:var(--r3);padding:11px 14px;color:var(--union-red);font-size:13px;font-weight:600">
          → <b>Past Simple</b> — Perfect ne može uz točan datum<br>
          <span style="font-size:11px;font-weight:400;opacity:.85;font-family:var(--mono)">"I saw her yesterday." (ne: I have seen her yesterday)</span>
        </div>
      </div>

    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Discere — vježbaj perfect vremena</div></div>
      <div class="discere-body">
        <div class="discere-desc">Filter: <b>present perfect / past perfect</b> → 8–10 zadataka. Griješiš na PPS vs PPC? Vrati se na sekciju iznad i ponovi za 3 dana.</div>
        <button class="discere-btn" onclick="openDiscere()">Otvori Discere →</button>
      </div>
    </div>
    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Vježbaj →</span>
    </div>
  </div><!-- /l1 -->

  <!-- ══════════ LAYER 2 — VJEŽBAJ ══════════ -->
  <div class="layer" id="l2">

    <div class="sec-label">// speed drill — odaberi točan oblik</div>
    <div class="sd-intro">9 zadataka pokrivaju sva 3 perfect vremena + for/since + just/already/yet. Odgovori brzo — razmisli o signal wordima.</div>
    <div class="sd-progress" id="drillDots"></div>
    <div id="drillQ"></div>
    <div class="sd-score" id="drillScore">
      <div class="sd-score-num" id="drillNum">0/9</div>
      <div class="sd-score-lbl" id="drillLbl">Gotov si! Provjeri greške, pa idi na kviz.</div>
      <button class="sd-retry" onclick="resetDrill()">↺ Ponovi drill</button>
      <br>
      <button class="quiz-export-btn" onclick="exportResults()" id="exportBtn" style="display:none">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v7M4 6l2.5 2.5L9 6M2 10h9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Spremi rezultate kao sliku
      </button>
    </div>

    <div class="sec-label" style="margin-top:36px">// ispravi grešku</div>
    <p style="font-size:12.5px;color:var(--t2);margin-bottom:14px;font-family:var(--mono)">Svaka rečenica ima točno jednu grešku. Pronađi je, pa provjeri.</p>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;font-family:var(--mono);font-size:11px;color:var(--t3)">
      Otvoreno ispravaka: <span id="errCount" style="color:var(--blue);font-weight:700">0 / 6</span>
      <span id="errAllDone" style="display:none;color:var(--green);font-weight:700">✓ Sve provjeri!</span>
    </div>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">I have been knowing her since we were children.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">I have known her since we were children.</span><span class="explain">"Know" je state verb — nikad ne dolazi u Continuous oblik. PPS je jedini točan oblik.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">She has worked here since five years.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">She has worked here for five years.</span><span class="explain">"Five years" je trajanje (period), ne točka početka → for. Since ide uz datum ili događaj.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">When we arrived, they already left.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">When we arrived, they had already left.</span><span class="explain">Dva prošla događaja, redoslijed je bitan — leaving je PRIJE arriving → Past Perfect (had left).</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">Have you yet finished the report?</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">Have you finished the report yet?</span><span class="explain">"Yet" u pitanjima uvijek ide na kraj rečenice, nikad između have i participa.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">I've been writing four emails this morning.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">I've written four emails this morning.</span><span class="explain">Broj (four) = fokus na rezultatu/količini → PPS. PPC se koristi za naglasak na trajanju, ne na broju dovršenih radnji.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">She still hasn't replied to my email, yet.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">She still hasn't replied to my email.</span><span class="explain">Ne koristi "still" i "yet" zajedno u istoj rečenici — redundantno. S "still" → makni "yet".</span></div>
      </div>
    </div>

    <div class="sec-label" style="margin-top:36px">// kviz — odaberi točan odgovor</div>
    <div class="quiz-intro"><strong>6 pitanja</strong> — PPS, PPC, Past Perfect, for/since, just/already/yet. Svako ima objašnjenje.</div>

    <div class="q-block" id="q1">
      <div class="q-head">
        <div class="q-meta">pitanje 01 · PPS vs PPC</div>
        <div class="q-text">Your eyes are red. _____ you _____?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>Have / cried</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>Have / been crying</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>Did / cry</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>Had / cried</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — crvene oči su vidljivi trag aktivnosti → PPC (have been crying). PPS bi naglasio broj puta ili činjenicu, ne vidljivi efekt.</div></div>
    </div>

    <div class="q-block" id="q2">
      <div class="q-head">
        <div class="q-meta">pitanje 02 · for vs since</div>
        <div class="q-text">They have been married _____ 1998.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>for</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">B</div>since</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">C</div>from</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>during</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — "1998" je točka početka (datum) → since. For ide uz trajanje (for 25 years), since uz točan trenutak.</div></div>
    </div>

    <div class="q-block" id="q3">
      <div class="q-head">
        <div class="q-meta">pitanje 03 · Past Perfect</div>
        <div class="q-text">By the time the ambulance arrived, the patient _____ consciousness.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>lost</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">B</div>has lost</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">C</div>had lost</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>was losing</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — "by the time" + dva prošla događaja → Past Perfect za raniju radnju. Losing consciousness BEFORE ambulance arrived → had lost.</div></div>
    </div>

    <div class="q-block" id="q4">
      <div class="q-head">
        <div class="q-meta">pitanje 04 · just / already / yet</div>
        <div class="q-text">Don't make me another coffee — I've _____ had three.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>yet</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">B</div>still</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">C</div>already</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>just</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — already = već (više nego što se očekivalo). Yet ide na kraj u negativima/pitanjima. Just bi značilo "upravo sada" (ne tri kave). Still + negativna rečenica = iznenađenje da nešto još nije završeno.</div></div>
    </div>

    <div class="q-block" id="q5">
      <div class="q-head">
        <div class="q-meta">pitanje 05 · past perfect continuous</div>
        <div class="q-text">She failed the exam because she _____ hard enough.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>hasn't studied</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">B</div>didn't study</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">C</div>hadn't been studying</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>wasn't studying</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — dva prošla događaja (failed, hadn't studied), nedovoljno učenje je trajalo PRIJE ispita → Past Perfect Continuous (hadn't been studying). Naglasak je na trajanju aktivnosti koja nije bila dovoljna.</div></div>
    </div>

    <div class="q-block" id="q6">
      <div class="q-head">
        <div class="q-meta">pitanje 06 · miješano · sve perfect distinkcije</div>
        <div class="q-text">By the time the film started, we _____ for tickets for over an hour.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">A</div>were waiting</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">B</div>have been waiting</div>
        <div class="q-opt" onclick="answer(this,'q6','correct')"><div class="q-letter">C</div>had been waiting</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">D</div>had waited</div>
      </div>
      <div class="q-expl" id="qe6"><div class="expl-ok">✓ Točno — "by the time" + trajanje aktivnosti do prošlog trenutka → Past Perfect Continuous (had been waiting). "Had waited" bi naglasio samo završenost, a "for over an hour" naglašava trajanje → PPC je točniji.</div></div>
    </div>

    <!-- Q7: KWT — Past Perfect Continuous -->
    <div class="q-block" id="q7" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">pitanje 07 · KWT — past perfect continuous</div>
        <div class="q-text">She started waiting at 7 a.m. The train arrived at 8 a.m. Complete the second sentence using the word <b>BEEN</b>.<br><span style="font-family:var(--mono);font-size:12px;color:var(--t2)">She __________ for an hour when the train finally arrived.</span></div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">A</div>had waited</div>
        <div class="q-opt" onclick="answer(this,'q7','correct')"><div class="q-letter">B</div>had been waiting</div>
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">C</div>has been waiting</div>
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">D</div>was waiting</div>
      </div>
      <div class="q-expl" id="qe7">
        <div class="expl-ok">✓ Točno — <b>had been waiting</b>. Key word BEEN zahtijeva <em>had been + -ing</em> oblik (Past Perfect Continuous). Radnja je trajala (1 sat) sve do trenutka u prošlosti (dolazak vlaka). A) "had waited" je Past Perfect — gramatički moguće, ali ne koristi BEEN. C) "has been waiting" je Present Perfect Continuous — pogrešno vrijeme. D) "was waiting" ne uključuje BEEN.</div>
      </div>
    </div>

    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Spreman si za pravu vježbu</div></div>
      <div class="discere-body">
        <div class="discere-desc">Završio si Poglavlje 4. Otvori Discere → filter <b>perfect tenses</b> → riješi 10 zadataka. Poglavlje 5 čeka: <b>Conditionals</b>.</div>
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
      <button class="nav-btn primary" onclick="navigateChapter(5)">Poglavlje 05: Conditionals →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>
</div>

<script>
const PAGE_KEY='maturiraj_en_visa_p04';

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
      const eb=document.getElementById('exportBtn');if(eb)eb.style.display='inline-flex';
    }
  }catch(e){}
}

function switchTab(i){
  document.querySelectorAll('.tab').forEach((t,j)=>{t.classList.toggle('active',j===i);t.setAttribute('aria-selected',j===i);t.tabIndex=j===i?0:-1;});
  document.querySelectorAll('.layer').forEach((l,j)=>l.classList.toggle('active',j===i));
  document.querySelectorAll('.tab-prog-item').forEach((t,j)=>{t.classList.toggle('active',j===i);if(j<i)t.classList.add('done');else t.classList.remove('done');});
  if(i>0){document.querySelectorAll('.tab')[i-1].classList.add('done-tab');saveProgress(i-1);}
  window.scrollTo({top:0,behavior:'smooth'});
}
function tabKey(e,i){
  if(e.key==='Enter'||e.key===' '){e.preventDefault();switchTab(i);}
  else if(e.key==='ArrowRight'){e.preventDefault();switchTab(Math.min(i+1,2));}
  else if(e.key==='ArrowLeft'){e.preventDefault();switchTab(Math.max(i-1,0));}
}

function toggleReveal(el){el.classList.toggle('open');el.setAttribute('aria-expanded',el.classList.contains('open'));}
document.querySelectorAll('.reveal-card').forEach(c=>{
  c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleReveal(c);}});
});

let errOpenCount=0;
const ERR_TOTAL=7;
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

let quizCorrectCount=0;
function answer(opt,qId,result){
  const block=document.getElementById(qId);
  if(block.dataset.answered) return;
  block.dataset.answered=result==='correct'?'1':'-1';
  block.querySelectorAll('.q-opt').forEach(o=>o.classList.add('disabled'));
  opt.classList.add(result==='correct'?'correct':'wrong');
  if(result==='wrong'){block.querySelectorAll('.q-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes("'correct'"))o.classList.add('correct');});}
  const expl=document.getElementById('qe'+qId.replace('q',''));
  if(expl){expl.classList.add('show');expl.scrollIntoView({behavior:'smooth',block:'nearest'});}
  if(result==='correct'){
    quizCorrectCount++;
    const totalQ=document.querySelectorAll('.q-block').length;
    if(quizCorrectCount===totalQ) launchConfetti();
  }
}

let cgAnswered=false;
function cgAnswer(opt,isCorrect){
  if(cgAnswered) return;
  cgAnswered=true;
  document.querySelectorAll('.cg-opt').forEach(o=>o.classList.add('cg-disabled'));
  const fb=document.getElementById('cgFb'),btn=document.getElementById('cgBtn');
  if(isCorrect){
    opt.classList.add('cg-correct');
    fb.className='cg-feedback show pass';
    fb.innerHTML='✓ Točno! "Had already left" = Past Perfect → radnja završena PRIJE dolaska. A: state verb u PPC. B: since + trajanje. D: yet ne ide između have i participa.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. Provjeri: A = state verb u PPC (greška), B = since + trajanje (greška), D = yet ne ide ispred participa. Pročitaj panic box u Tab Pregled.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}

const tipSections=['sec-pps','sec-ppc','sec-pps-ppc','sec-pp','sec-ppc2','sec-forsince','sec-adverbs','sec-signals','sec-dtree'];
function tipScroll(id){const el=document.getElementById(id);if(!el)return;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:'smooth'});}
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const idx=tipSections.indexOf(e.target.id);
      for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}
    }
  });
},{rootMargin:'-10% 0px -60% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});

const drillData=[
  {q:'She looks exhausted. She <code>___</code> all night.',opts:['has worked','has been working','worked','had worked'],correct:1,colors:['green','blue','gold','violet'],fb:'<b>Točan odgovor: has been working (PPC)</b> — Vidljivi trag (izgled umorne) + trajanje → PPC. / Visible result of activity → Present Perfect Continuous.'},
  {q:'I <code>___</code> this book twice — it\\'s excellent.',opts:['have been reading','read','have read','had read'],correct:2,colors:['blue','gold','green','violet'],fb:'<b>Točan odgovor: have read (PPS)</b> — Broj puta (twice) = fokus na rezultatu → PPS. / Number of times = completed action → PPS.'},
  {q:'They have lived in Paris <code>___</code> 2015.',opts:['for','during','since','from'],correct:2,colors:['green','gold','blue','violet'],fb:'<b>Točan odgovor: since</b> — 2015 je točka početka (godina/datum) → since. For bi išao uz trajanje (for 8 years). / Starting point → since.'},
  {q:'When I got to the party, all the food <code>___</code>.',opts:['disappeared','has disappeared','was disappearing','had disappeared'],correct:3,colors:['gold','green','violet','blue'],fb:'<b>Točan odgovor: had disappeared (Past Perfect)</b> — Disappearing happened BEFORE I arrived → Past Perfect. Dva prošla događaja, redoslijed bitan. / Action before another past action → Past Perfect.'},
  {q:'Have you finished the report <code>___</code>?',opts:['already','just','still','yet'],correct:3,colors:['green','blue','violet','gold'],fb:'<b>Točan odgovor: yet</b> — Yet ide na kraj pitanja/negativne rečenice. Already bi išao između have i participa. / Yet goes at the end of questions.'},
  {q:'I <code>___</code> her for twenty years — she\\'s my best friend.',opts:['have been knowing','have known','know','had known'],correct:1,colors:['blue','green','gold','violet'],fb:'<b>Točan odgovor: have known (PPS)</b> — Know je state verb → nikad Continuous. For + trajanje + stanje → PPS. / State verb — never Continuous form.'},
  {q:'Look at this mess! What <code>___</code> you <code>___</code>?',opts:['have / done','have / been doing','did / do','had / done'],correct:1,colors:['green','blue','gold','violet'],fb:'<b>Točan odgovor: have been doing (PPC)</b> — Vidljivi trag (mess) + pitanje o aktivnosti koja je ostavila trag → PPC. / Visible mess = result of ongoing activity → PPC.'},
  {q:'She <code>___</code> already left when I called.',opts:['has','had','was','have'],correct:1,colors:['green','violet','gold','blue'],fb:'<b>Točan odgovor: had (Past Perfect)</b> — Leaving happened BEFORE I called → had left. Dva prošla događaja → Past Perfect za raniji. / Past Perfect for action before another past action.'},
  {q:'I\\'ve <code>___</code> finished — can we go now?',opts:['yet','still','already','never'],correct:2,colors:['gold','violet','green','blue'],fb:'<b>Točan odgovor: already</b> — Already između have i participa = završeno ranije nego se očekivalo. Yet bi išao na kraj. / Already between have and participle = sooner than expected.'},
];

let drillIdx=0,drillScore=0,drillResults=[];

function buildDots(){
  const d=document.getElementById('drillDots');d.innerHTML='';
  drillData.forEach((_,i)=>{const s=document.createElement('div');s.className='sd-dot'+(i===drillIdx?' cur':'');d.appendChild(s);});
}
function renderDrillQ(){
  const d=drillData[drillIdx];
  const el=document.getElementById('drillQ');
  el.innerHTML=\`<div class="sd-q"><div class="sd-sent">\${d.q}</div><div class="sd-btns">\${d.opts.map((o,i)=>\`<button class="sd-btn opt-\${d.colors[i]}" onclick="pickDrill(this,\${i})">\${o}</button>\`).join('')}</div><div class="sd-fb" id="dfb"></div></div>\`;
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
  setTimeout(()=>{drillIdx++;if(drillIdx<drillData.length){renderDrillQ();}else{showDrillScore();}},1600);
}
function showDrillScore(){
  document.getElementById('drillQ').innerHTML='';
  const sc=document.getElementById('drillScore');sc.classList.add('show');
  document.getElementById('drillNum').textContent=drillScore+'/'+drillData.length;
  const lbl=document.getElementById('drillLbl');
  if(drillScore>=8){lbl.textContent='Izvrsno! Nastavi na kviz pitanja.';launchConfetti();}
  else if(drillScore>=6) lbl.textContent='Dobro — provjeri greške pa radi kviz.';
  else lbl.textContent='Vrati se na Tab Gramatika i ponovi sekcije gdje griješiš.';
  const eb=document.getElementById('exportBtn');if(eb)eb.style.display='inline-flex';
  buildDots();
  try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.drillDone=true;d.drillScore=drillScore;d.drillResults=drillResults;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
}
function resetDrill(){
  drillIdx=0;drillScore=0;drillResults=[];
  document.getElementById('drillScore').classList.remove('show');
  const eb=document.getElementById('exportBtn');if(eb)eb.style.display='none';
  try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');delete d.drillDone;delete d.drillScore;delete d.drillResults;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  renderDrillQ();
}

function launchConfetti(){
  const colors=['#4F7BE8','#CF142B','#52D688','#E8A838','#A78BFA','#C9A227'];
  for(let i=0;i<55;i++){
    const p=document.createElement('div');
    p.className='confetti-piece';
    p.style.cssText=\`left:\${Math.random()*100}vw;background:\${colors[Math.floor(Math.random()*colors.length)]};animation-duration:\${2+Math.random()*2}s;animation-delay:\${Math.random()*0.8}s;width:\${6+Math.random()*6}px;height:\${6+Math.random()*6}px;border-radius:\${Math.random()>0.5?'50%':'2px'}\`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),(4000));
  }
}

function exportResults(){
  const total=drillData.length;
  const W=480,H=240;
  const canvas=document.createElement('canvas');
  canvas.width=W*2;canvas.height=H*2;
  const ctx=canvas.getContext('2d');
  ctx.scale(2,2);
  ctx.fillStyle='#0A0D18';ctx.fillRect(0,0,W,H);
  const segs=[{c:'#CF142B',x:0,w:W*0.3},{c:'#fff',x:W*0.3,w:W*0.04},{c:'#4F7BE8',x:W*0.34,w:W*0.32},{c:'#fff',x:W*0.66,w:W*0.04},{c:'#CF142B',x:W*0.7,w:W*0.3}];
  segs.forEach(s=>{ctx.fillStyle=s.c;ctx.fillRect(s.x,0,s.w,4);});
  ctx.fillStyle='#EEF0F8';ctx.font='bold 20px serif';ctx.fillText('Maturiraj.hr',24,44);
  ctx.fillStyle='#4A5580';ctx.font='12px monospace';ctx.fillText('Poglavlje 04 · Perfect vremena',24,62);
  ctx.fillStyle='#4F7BE8';ctx.font='bold 64px serif';ctx.fillText(drillScore,24,148);
  ctx.fillStyle='#8A95B8';ctx.font='14px monospace';ctx.fillText('/ '+total+' bodova · drill',90,148);
  const dotW=16,dotGap=4,cols=9;
  drillResults.forEach((ok,i)=>{
    const x=24+i*(dotW+dotGap),y=168;
    ctx.fillStyle=ok?'#52D688':'rgba(232,96,96,0.6)';
    ctx.beginPath();ctx.roundRect(x,y,dotW,dotW,3);ctx.fill();
  });
  ctx.fillStyle='rgba(74,85,128,0.5)';ctx.font='10px monospace';ctx.fillText('maturiraj.hr',W-85,H-12);
  canvas.toBlob(blob=>{
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;a.download='maturiraj-pogl04-'+drillScore+'od'+total+'.png';
    a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  },'image/png');
}

window.addEventListener('scroll',()=>{const b=document.getElementById('backTop');if(b)b.classList.toggle('show',window.scrollY>400);},{passive:true});
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
document.getElementById('mobDrawer').addEventListener('click',e=>{if(e.target===e.currentTarget)closeMobDrawer();});

renderDrillQ();
loadProgress();

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