// Maturiraj.hr — Engleski viša razina
// Poglavlje 10: Open Clozegramatičke praznine
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 10,
  slug: "poglavlje10",
  title: "Open Clozegramati\u010dke praznine",
  subtitle: "Zadatak A \u00b7 8\u201310 praznina \u00b7 bez ponu\u0111enih odgovora \u00b7 jedna to\u010dna rije\u010d",
  blok: 3,
  blokNaziv: "Use of English",
  prev: 9,
  next: 11,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 10</title>
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
.union-bar{height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 30%,#fff 30%,#fff 34%,var(--blue) 34%,var(--blue) 66%,#fff 66%,#fff 70%,var(--union-red) 70%,var(--union-red) 100%);position:fixed;top:0;left:0;right:0;z-index:999}
.sidebar{width:var(--sidebar);flex-shrink:0;background:var(--bg-surface);border-right:1px solid var(--bd);position:fixed;top:3px;left:0;height:calc(100vh - 3px);overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bd-mid) transparent;z-index:100}
.sidebar::-webkit-scrollbar{width:3px}.sidebar::-webkit-scrollbar-thumb{background:var(--bd-mid);border-radius:2px}
.sb-brand{padding:22px 18px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--union-red),var(--blue));border-radius:var(--r1);display:flex;align-items:center;justify-content:center;flex-shrink:0;position:relative;overflow:hidden}
.sb-logo::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13h30M13 0v30M0 0l30 30M30 0L0 30' stroke='rgba(255,255,255,0.4)' stroke-width='2'/%3E%3C/path%3E%3C/svg%3E") center/cover}
.sb-logo svg{width:16px;height:16px;position:relative}
.sb-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1)}
.sb-sub{font-size:10px;color:var(--blue);margin-top:1px;font-family:var(--mono);letter-spacing:.5px}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:16px 18px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 18px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}.sb-item.active{color:var(--blue);background:var(--blue-glow);border-left-color:var(--blue)}
.sb-item.done-ch{color:var(--brit-green)}.sb-item.done-ch .sb-dot{background:var(--brit-green);opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
.sb-footer{margin-top:auto;padding:12px 18px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.6;font-family:var(--mono)}
.main{flex:1;min-width:0;padding-top:3px;margin-left:var(--sidebar)}
.content-wrap{max-width:820px;width:100%;margin:0 auto;padding:36px 48px 100px}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--t3);margin-bottom:28px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-active{color:var(--blue)}
.tabs-wrap{display:flex;gap:0;margin-bottom:6px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:4px;width:fit-content}
.tab{display:flex;align-items:center;gap:6px;padding:8px 20px;font-size:12.5px;font-weight:500;color:var(--t2);cursor:pointer;border-radius:var(--r1);transition:all .15s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}.tab.active{background:var(--blue);color:#fff;font-weight:700}
.tab-check{width:14px;height:14px;border-radius:50%;background:var(--green);display:none;align-items:center;justify-content:center;font-size:8px;color:#060810;font-weight:700;flex-shrink:0}
.tab.done-tab .tab-check{display:inline-flex}
.layer{display:none}.layer.active{display:block;animation:fadeLayer .18s ease}
@keyframes fadeLayer{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
.tab-progress-row{display:flex;align-items:center;gap:6px;margin-bottom:28px;flex-wrap:wrap}
.tab-prog-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;padding:5px 10px;border-radius:var(--r2);border:1px solid transparent;transition:all .15s}
.tab-prog-item:hover{color:var(--t2);background:var(--bg-card)}.tab-prog-item.active{color:var(--blue);background:var(--blue-dim);border-color:var(--blue-border)}.tab-prog-item.done{color:var(--green)}
.tp-dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.tp-arrow{font-size:10px;color:var(--t3);opacity:.35}
.time-est{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:auto;display:flex;align-items:center;gap:5px}
.hero{margin-bottom:32px;padding:36px 40px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--union-red) 0%,var(--union-red) 25%,#fff 25%,#fff 30%,var(--blue) 30%,var(--blue) 70%,#fff 70%,#fff 75%,var(--union-red) 75%)}
.hero::after{content:'10';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
.hero-eyebrow{font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:2px;margin-bottom:12px;text-transform:uppercase}
.hero-title{font-size:32px;font-weight:900;font-family:var(--serif);color:var(--t1);letter-spacing:-0.5px;line-height:1.1;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cream));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.hb-level{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.hb-chapter{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.hero-sub{font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:18px}
.progress-track{height:3px;background:var(--bd-mid);border-radius:2px;overflow:hidden;width:100%;max-width:420px}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:2px}
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.pill{display:inline-flex;align-items:center;padding:4px 12px;border-radius:var(--r1);font-size:11.5px;font-weight:600;font-family:var(--mono);border:1px solid}
.pill-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.pill-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}.pill-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}.pill-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.pill-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}.pill-amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}.pill-cream{background:var(--cream-dim);color:var(--cream);border-color:var(--cream-bd)}
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.blue{background:var(--blue-dim);color:var(--blue)}.stat-icon.green{background:var(--brit-green-dim);color:var(--brit-green)}.stat-icon.gold{background:var(--gold-dim);color:var(--gold)}.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}.stat-icon.amber{background:var(--amber-dim);color:var(--amber)}.stat-icon.red{background:var(--union-red-dim);color:var(--union-red)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}
.prose{font-size:14.5px;line-height:1.85;color:rgba(238,240,248,.82);margin-bottom:16px}
.prose b,.prose strong{color:var(--t1)}.prose em{color:var(--blue);font-style:normal}
/* CALLOUT */
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn{background:var(--red-dim);border-color:var(--red-border)}.callout-tip{background:var(--amber-dim);border-color:var(--amber-border)}.callout-info{background:var(--blue-dim);border-color:var(--blue-border)}.callout-green{background:var(--brit-green-dim);border-color:var(--brit-green-bd)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn .callout-title{color:var(--red)}.callout-tip .callout-title{color:var(--amber)}.callout-info .callout-title{color:var(--blue)}.callout-green .callout-title{color:var(--brit-green)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}.callout-text b{color:var(--t1)}
/* PANIC */
.panic-box{background:linear-gradient(135deg,rgba(79,123,232,.05),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:24px 0}
.panic-hd{background:linear-gradient(90deg,var(--union-red),#1C3A8A);padding:11px 20px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:#fff;text-transform:uppercase}
.panic-body{padding:18px 20px}
.panic-step{display:flex;align-items:flex-start;gap:14px;padding:9px 0;border-bottom:1px solid rgba(79,123,232,.10)}
.panic-step:last-child{border-bottom:none}
.panic-num{width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.panic-text{font-size:13px;color:rgba(238,240,248,.85);line-height:1.65}.panic-text b{color:var(--t1)}
/* REVEAL */
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.rq-icon{font-size:16px;flex-shrink:0}.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .3s ease,padding .3s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:700px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b{color:var(--t1)}.reveal-ans .ok{color:var(--green)}.reveal-ans .bad{color:var(--red)}.reveal-ans .note{color:var(--blue)}
/* CHECKPOINT */
.checkpoint-gate{background:var(--bg-card);border:2px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0}
.cg-hd{background:linear-gradient(90deg,var(--blue-dim),transparent);padding:14px 20px;border-bottom:1px solid var(--blue-border);display:flex;align-items:center;gap:10px}
.cg-icon{font-size:18px}.cg-title{font-family:var(--serif);font-size:15px;font-weight:700;color:var(--t1)}.cg-sub{font-family:var(--mono);font-size:10px;color:var(--blue);margin-top:2px}
.cg-body{padding:20px 24px}.cg-question{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:16px;line-height:1.4}
.cg-opts{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
.cg-opt{display:flex;align-items:center;gap:10px;padding:11px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none}
.cg-opt:hover:not(.cg-disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.cg-opt.cg-correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green);pointer-events:none}.cg-opt.cg-wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red);pointer-events:none}.cg-opt.cg-disabled{pointer-events:none}
.cg-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3);font-family:var(--mono)}
.cg-feedback{display:none;padding:12px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.65;margin-top:4px}
.cg-feedback.show{display:block}.cg-feedback.pass{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green)}.cg-feedback.fail{background:var(--red-dim);border:1px solid var(--red-border);color:var(--red)}
.cg-unlock{display:none;margin-top:14px;padding:11px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;width:100%;transition:opacity .15s}
.cg-unlock:hover{opacity:.88}.cg-unlock.show{display:block}
/* TIP BAR */
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;gap:0;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}.tip-item.done{color:var(--green)}.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0;transition:background .15s}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}
/* CATEGORY CHIPS */
.chip-group{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 18px}
.chip{font-family:var(--mono);font-size:12px;padding:4px 10px;border-radius:var(--r1);border:1px solid;cursor:default;transition:transform .12s}
.chip:hover{transform:translateY(-1px)}
.chip.blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.chip.green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}.chip.gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}.chip.red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.chip.violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}.chip.amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
/* INTERACTIVE CLOZE */
.cloze-text{font-size:15px;line-height:2.4;color:var(--t1);font-family:var(--serif);background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:22px 24px;margin:14px 0}
.cloze-input{display:inline-block;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r1);font-family:var(--mono);font-size:13px;color:var(--t1);outline:none;transition:border-color .15s;vertical-align:baseline;padding:2px 8px;min-width:80px;width:auto}
.cloze-input:focus{border-color:var(--blue)}
.cloze-input.correct{border-color:var(--green);background:var(--green-dim);color:var(--green)}
.cloze-input.wrong{border-color:var(--red);background:var(--red-dim);color:var(--red)}
.cloze-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);vertical-align:super;margin-right:1px;user-select:none}
.cloze-controls{display:flex;gap:10px;flex-wrap:wrap;margin-top:14px}
.btn-check{padding:9px 22px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;transition:opacity .15s}
.btn-check:hover{opacity:.85}
.btn-reveal{padding:9px 18px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:600;color:var(--t2);cursor:pointer;transition:all .15s}
.btn-reveal:hover{color:var(--amber);border-color:var(--amber-border)}
.btn-reset{padding:9px 14px;background:transparent;border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:12px;color:var(--t3);cursor:pointer;transition:all .15s}
.btn-reset:hover{color:var(--t1);border-color:var(--bd-light)}
.cloze-score{font-family:var(--mono);font-size:12px;color:var(--t3);display:flex;align-items:center;gap:6px;margin-top:10px}
.cloze-score .val{font-size:20px;font-weight:700;color:var(--blue);font-family:var(--serif)}
/* ANSWER GRID */
.ans-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin:14px 0 20px}
.ans-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:11px 14px;font-size:13px;color:var(--t2);display:flex;flex-direction:column;gap:4px}
.ans-item .num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3)}
.ans-item .word{color:var(--blue);font-family:var(--mono);font-size:13px;font-weight:700}
.ans-item .why{font-size:11.5px;color:var(--t3);line-height:1.4}
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
.q-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}.q-opt.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red)}.q-opt.disabled{cursor:default;pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;white-space:nowrap;transition:opacity .15s;text-decoration:none;display:inline-block}.discere-btn:hover{opacity:.85}
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card);text-decoration:none;display:inline-block}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue)}.nav-btn.primary:hover{opacity:.88}
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;top:-10px;width:8px;height:8px;border-radius:2px;pointer-events:none;z-index:9999;animation:confettiFall linear forwards}
.back-top{position:fixed;bottom:86px;right:24px;z-index:200;width:38px;height:38px;border-radius:50%;background:var(--bg-card);border:1px solid var(--bd-mid);color:var(--t3);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s,color .15s;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.back-top.show{opacity:1;pointer-events:auto}.back-top:hover{color:var(--blue);border-color:var(--blue-border);transform:translateY(-2px)}
@media(min-width:721px){.back-top{right:32px;bottom:32px}}
.hamburger{display:none;position:fixed;bottom:22px;right:22px;z-index:300;width:50px;height:50px;background:var(--blue);border-radius:50%;border:none;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(79,123,232,.4);transition:transform .15s}
.hamburger:hover{transform:scale(1.08)}.hamburger svg{width:20px;height:20px}
.mob-drawer{display:none;position:fixed;inset:0;z-index:250;background:rgba(6,8,16,.95);backdrop-filter:blur(8px);flex-direction:column;padding:28px 24px;overflow-y:auto}
.mob-drawer.open{display:flex}
.mob-drawer-close{align-self:flex-end;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 18px;font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;margin-bottom:20px}
.mob-drawer .sb-label{padding:14px 0 5px}.mob-drawer .sb-item{padding:10px 0;border-left:none;border-bottom:1px solid var(--bd)}
@media(max-width:720px){.hamburger{display:flex}.sidebar{display:none}.main{margin-left:0}}
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}.cloze-controls{flex-direction:column}}
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
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span> 04 · Perfect vremena</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span> 05 · Conditionals</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span> 06 · Passive, Reported Speech</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span> 07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span> 08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span> 09 · Što zadatak testira</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span> 10 · Gap fill i MCQ</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span>04 · Perfect vremena</div>
  <div class="sb-item done-ch" onclick="navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span>05 · Conditionals</div>
  <div class="sb-item done-ch" onclick="navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span>06 · Passive, Reported Speech</div>
  <div class="sb-item done-ch" onclick="navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span>07 · Modals, Articles, Quantifiers</div>
  <div class="sb-item done-ch" onclick="navigateChapter(8)" style="cursor:pointer"><span class="sb-dot"></span>08 · Prepositions i Linkers</div>
  <div class="sb-label">// Blok 3 — Use of English</div>
  <div class="sb-item done-ch" onclick="navigateChapter(9)" style="cursor:pointer"><span class="sb-dot"></span>09 · Što zadatak testira</div>
  <div class="sb-item active" onclick="navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span>10 · Gap fill i MCQ</div>
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
<div class="sb-footer">10 / 20 · gap fill i mcq<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-3</span>
    <span class="bc-sep">/</span><span class="bc-active">open-cloze</span>
  </div>
  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Strategija<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Vježbaj<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Strategija i kategorije</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Vježbaj</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~30 min
    </div>
  </div>
  <!-- ═══ LAYER 0 ═══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 10 of 20 · blok 3 — use of english</div>
      <h1 class="hero-title">Open Cloze<br><span>gramatičke praznine</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">10 / 20</span>
      </div>
      <p class="hero-sub">Zadatak A · 8–10 praznina · bez ponuđenih odgovora · jedna točna riječ</p>
      <div class="progress-track"><div class="progress-bar" style="width:50%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Veznici</span>
      <span class="pill pill-green">Pomoćni glagoli</span>
      <span class="pill pill-gold">Prijedlozi</span>
      <span class="pill pill-violet">Zamjenice</span>
      <span class="pill pill-amber">Članci</span>
      <span class="pill pill-red">Fiksni izrazi</span>
    </div>
    <div class="sec-label">// što je open cloze</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">OC</div><div class="stat-name">Zadatak A</div><div class="stat-desc">Tekst s 8–10 praznina bez ponuđenih odgovora. Trebaš sam smisliti jednu točnu gramatičku ili funkcijsku riječ</div></div>
      <div class="stat-card"><div class="stat-icon green">gram</div><div class="stat-name">Gramatičke riječi</div><div class="stat-desc">Praznine su gotovo uvijek <b>funkcionalne</b>: veznici, prijedlozi, zamjenice, modalni, članci, kvantifikatori</div></div>
      <div class="stat-card"><div class="stat-icon gold">1 riječ</div><div class="stat-name">Samo jedna</div><div class="stat-desc">Uvijek samo <b>jedna</b> riječ. Contractions (don't, it's) broje se kao jedna. Nikad dvije odvojene riječi</div></div>
      <div class="stat-card"><div class="stat-icon violet">kontekst</div><div class="stat-name">Čitaj šire</div><div class="stat-desc">Čitaj cijeli paragraf, ne samo rečenicu s prazninom. Logički slijed i gramatička struktura vode do odgovora</div></div>
    </div>
    <div class="sec-label">// 5 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 open cloze — strategija za svaku prazninu</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Pročitaj cijeli tekst jednom.</b> Razumi temu i tijek — ne rješavaj praznine pri prvom čitanju.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Identificiraj kategoriju praznine.</b> Je li to veznik? Prijedlog? Pomoćni glagol? Zamjenica? Svaka kategorija ima ograničen skup mogućih odgovora.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Provjeri i lijevo i desno od praznine.</b> Ono što dolazi poslije često definira strukturu (npr. -ing iza prijedloga, infinitiv iza modala).</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Samo jedna riječ — nikad dvije.</b> Ako misliš da treba dvije riječi, razmisli postoji li kontrakcija ili jedno složeno slovo (nevertheless, however).</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Provjeri gramatičku ispravnost i smisao.</b> Ubaci svoju riječ i čitaj rečenicu glasno. Zvuči li prirodno? Je li gramatički točno?</div></div>
      </div>
    </div>
    <div class="sec-label">// brzi pregled kategorija</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Veznici i relatori — najčešće u OC</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Koordinacijski:</b> and · but · or · so · yet · for · nor<br>
        <b>Subordinacijski:</b> although · because · while · whereas · unless · provided · if · when · since · as · until · once · after · before<br>
        <b>Relativni:</b> which · who · whom · whose · that · where · when<br>
        <b>Adverbijalni:</b> however · therefore · moreover · furthermore · nevertheless · consequently<br><br>
        <span class="note">Tip: Ako vidiš zarez prije praznine + rečenicu, vjerojatno je adverbijalni konektor (however, therefore...).</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>Pomoćni glagoli i modali u OC</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Tvorba passive:</b> was, were, been, being, be<br>
        <b>Tvorba perfect:</b> have, has, had<br>
        <b>Tvorba continuous:</b> am, is, are, was, were<br>
        <b>Modali:</b> can, could, may, might, must, should, would, will, shall<br>
        <b>Kondicionali:</b> would, had (inverzija), were (inverzija)<br><br>
        <span class="note">Tip: Vidiš "been + past participle"? → praznina je "have/has/had". Vidiš "being + past participle"? → praznina je "is/was/are/were".</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Fiksni izrazi i collocations u OC</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Fraze s prijedlozima:</b> as a result <b>of</b> · in spite <b>of</b> · on behalf <b>of</b> · in terms <b>of</b> · with regard <b>to</b><br>
        <b>Idiomi:</b> take <b>into</b> account · make <b>up</b> one's mind · look forward <b>to</b> · get <b>rid</b> of<br>
        <b>Collocations:</b> make a <b>decision</b> → ne "take" · do <b>research</b> → ne "make"<br>
        <b>Fiksne strukture:</b> not only...but <b>also</b> · no sooner...than · such...that · so...as to<br><br>
        <span class="bad">Zamka:</span> Uvijek provjeri dolazi li praznina unutar fiksnog izraza. Tada je odgovor predvidljiv!
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Strategiju</div></div></div>
      <div class="cg-body">
        <div class="cg-question">"The film was praised ___ its stunning visuals." — koja jedna gramatička riječ ide u prazninu?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">A</div>because</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)"><div class="cg-letter">B</div>for</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">C</div>since</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">D</div>during</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Strategiju →</button>
      </div>
    </div>
    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(9)">← Poglavlje 09</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Strategija i kategorije →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ═══ LAYER 1 ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-strategy')"><span class="tip-dot"></span>Strategija</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-cat-conjunctions')"><span class="tip-dot"></span>Veznici</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-cat-aux')"><span class="tip-dot"></span>Pomoćni glagoli</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-cat-prep')"><span class="tip-dot"></span>Prijedlozi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-cat-pron')"><span class="tip-dot"></span>Zamjenice</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-cat-fixed')"><span class="tip-dot"></span>Fiksni izrazi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-signals')"><span class="tip-dot"></span>Signal words</div>
    </div>

    <!-- STRATEGIJA -->
    <div id="sec-strategy" class="sec-label">// strategija rješavanja — korak po korak</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin:14px 0 24px">
      <div style="display:grid;grid-template-columns:32px 1fr;gap:14px;align-items:start;padding:12px 0;border-bottom:1px solid var(--bd)">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center">1</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:4px">Pročitaj cijeli tekst — bez rješavanja</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono)">Razumi temu, ton i slijed argumenata. Praznine ćeš lakše rješavati kad znaš o čemu je tekst.</div></div>
      </div>
      <div style="display:grid;grid-template-columns:32px 1fr;gap:14px;align-items:start;padding:12px 0;border-bottom:1px solid var(--bd)">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--brit-green);color:#fff;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center">2</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:4px">Za svaku prazninu: odredi kategoriju</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono)">Pitaj se: veznik? prijedlog? pomoćni? zamjenica? član? kvantifikator? Svaka kategorija ima ograničen skup mogućnosti.</div></div>
      </div>
      <div style="display:grid;grid-template-columns:32px 1fr;gap:14px;align-items:start;padding:12px 0;border-bottom:1px solid var(--bd)">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center">3</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:4px">Čitaj i lijevo i desno od praznine</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono)">Gramatička struktura se širi na obje strane. Npr.: "___ which" → relativna zamjenica ili "in". "___ having" → prijedlog ili "after/before/without".</div></div>
      </div>
      <div style="display:grid;grid-template-columns:32px 1fr;gap:14px;align-items:start;padding:12px 0;border-bottom:1px solid var(--bd)">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--union-red);color:#fff;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center">4</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:4px">Provjeri fiksne izraze i collocations</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono)">Mnoge praznine su dio fiksnog izraza: "in spite ___", "as a result ___", "look forward ___". Ako prepoznaš izraz, odgovor je predvidljiv.</div></div>
      </div>
      <div style="display:grid;grid-template-columns:32px 1fr;gap:14px;align-items:start;padding:12px 0">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--violet);color:#fff;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center">5</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:4px">Ubaci odgovor i provjeri cijelu rečenicu</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono)">Čitaj rečenicu s tvojim odgovorom. Je li gramatički ispravno? Ima li smisla u kontekstu? Ako da — napiši.</div></div>
      </div>
    </div>

    <!-- VEZNICI -->
    <div id="sec-cat-conjunctions" class="sec-label" style="margin-top:36px">// veznici — kad tekst mijenja smjer ili dodaje ideju</div>
    <p class="prose">Veznici su daleko najčešća kategorija u Open Cloze. Ključ je prepoznati <em>logički odnos</em> između dviju rečenica ili dijelova rečenice.</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 20px">
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">ODNOS</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">+ REČENICA</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);background:var(--bg-surface)">IZMEĐU REČENICA</div>
      </div>
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd)">Kontrast</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">although, even though, while, whereas, despite (+ -ing)</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono)">however, nevertheless, yet, still, on the other hand</div></div>
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd)">Uzrok</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">because, since, as, given that</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono)">therefore, as a result, consequently, thus, hence</div></div>
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd)">Uvjet</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">if, unless, provided, as long as, in case</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono)">—</div></div>
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd)">Svrha</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">so that, in order that, in order to</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono)">—</div></div>
      <div style="display:grid;grid-template-columns:140px 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd)">Dodatak</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">and, not only...but also, besides, apart from</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono)">furthermore, moreover, in addition, also</div></div>
      <div style="display:grid;grid-template-columns:140px 1fr 1fr"><div style="padding:9px 14px;font-size:12.5px;color:var(--t2);border-right:1px solid var(--bd)">Vremenski</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">when, while, as, after, before, until, once, since</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono)">then, afterwards, eventually, meanwhile</div></div>
    </div>

    <!-- POMOĆNI GLAGOLI -->
    <div id="sec-cat-aux" class="sec-label" style="margin-top:36px">// pomoćni glagoli — however, been, have, will, was...</div>
    <p class="prose">Praznina iza koje dolazi <em>past participle</em> ili <em>-ing oblik</em> gotovo uvijek zahtijeva pomoćni glagol. Tražiš koji oblik "be" ili "have".</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 20px">
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">AKO DOLAZI POSLIJE ___</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);background:var(--bg-surface)">MOGUĆE PRAZNINE</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">___ past participle (done/written)</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">have / has / had / been / is / was / were / will be</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">___ been + participle</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">have / has / had / will / would / should / must / might</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">___ being + participle</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">is / was / are / were / am</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">___ infinitiv (go/do/say)</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">will / would / can / could / must / should / may / might</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">not ___ + infinitiv</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">to (= not to do = "in order not to") · only (not only)</div></div>
    </div>

    <!-- PRIJEDLOZI -->
    <div id="sec-cat-prep" class="sec-label" style="margin-top:36px">// prijedlozi — in, on, at, for, of, by... — uče se uz kolokaciju</div>
    <p class="prose">Prijedlozne praznine su najteže jer nema čvrste logike — često su dio ustaljenih izraza ili kolokacija koje treba poznavati.</p>
    <div class="chip-group">
      <span class="chip blue">praised for</span><span class="chip blue">responsible for</span><span class="chip blue">famous for</span>
      <span class="chip green">interested in</span><span class="chip green">result in</span><span class="chip green">believe in</span>
      <span class="chip gold">depend on</span><span class="chip gold">concentrate on</span><span class="chip gold">insist on</span>
      <span class="chip violet">aware of</span><span class="chip violet">consist of</span><span class="chip violet">take advantage of</span>
      <span class="chip amber">look forward to</span><span class="chip amber">contribute to</span><span class="chip amber">in addition to</span>
      <span class="chip red">result from</span><span class="chip red">suffer from</span><span class="chip red">different from</span>
    </div>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Prijedlog + -ing forma</div>
        <div class="callout-text">Iza prijedloga uvijek ide <b>-ing forma</b>, nikad infinitiv.<br>
        <em>She was accused <b>of stealing</b>.</em> · <em>Despite <b>being</b> tired...</em> · <em>He is good <b>at solving</b> problems.</em><br>
        Iznimka: "look forward <b>to doing</b>" — "to" je prijedlog, ne marker infinitiva!</div>
      </div>
    </div>

    <!-- ZAMJENICE -->
    <div id="sec-cat-pron" class="sec-label" style="margin-top:36px">// zamjenice — who, which, whose, what, it, they...</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--violet);letter-spacing:1.5px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd)">RELATIVNE ZAMJENICE</div>
        <div style="font-size:13px;color:var(--t2);line-height:1.8">
          <b style="color:var(--t1)">who</b> = za osobe (subjekt)<br>
          <b style="color:var(--t1)">whom</b> = za osobe (objekt, formalno)<br>
          <b style="color:var(--t1)">which</b> = za stvari ili dodanu informaciju<br>
          <b style="color:var(--t1)">that</b> = za osobe ili stvari (definirajuća)<br>
          <b style="color:var(--t1)">whose</b> = posvojno (whose car...)<br>
          <b style="color:var(--t1)">where</b> = za mjesto<br>
          <b style="color:var(--t1)">when</b> = za vrijeme
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);letter-spacing:1.5px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd)">OSTALI DETERMINATORI</div>
        <div style="font-size:13px;color:var(--t2);line-height:1.8">
          <b style="color:var(--t1)">each / every</b> = svaki (jd.)<br>
          <b style="color:var(--t1)">either / neither</b> = jedan od dva / nijedan<br>
          <b style="color:var(--t1)">both</b> = oba (mn.)<br>
          <b style="color:var(--t1)">all / none</b> = svi / nitko<br>
          <b style="color:var(--t1)">much / many</b> = količina<br>
          <b style="color:var(--t1)">such / what</b> = u fiksnim izrazima<br>
          <b style="color:var(--t1)">whatever / whoever</b> = bilo što/ko
        </div>
      </div>
    </div>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">which vs that — kada koji</div>
        <div class="callout-text">
          <b>that</b> = definirajuća relativna klauzula (nema zareza): <em>The book <b>that</b> I read was excellent.</em><br>
          <b>which</b> = nedefinrajuća (s zarezom, dodaje informaciju): <em>The book, <b>which</b> I read last year, was excellent.</em><br>
          <b>Zamka:</b> Nikad "which" bez zareza uz definirajuću klauzulu u OC.
        </div>
      </div>
    </div>

    <!-- FIKSNI IZRAZI -->
    <div id="sec-cat-fixed" class="sec-label" style="margin-top:36px">// fiksni izrazi — naučiti napamet: take ___ account, in spite ___...</div>
    <p class="prose">Ovo su najtipičniji OC odgovori — ako prepoznaš izraz, odgovor je gotov.</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 20px">
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">IZRAZ S PRAZNINOM</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);background:var(--bg-surface)">ODGOVOR</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">in spite ___ / regardless ___</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">of</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">as ___ result / as ___ consequence</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">a</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">not only...but ___</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">also</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">no sooner...___</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">than</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">the more...the ___ / the sooner ___</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">better / the</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">it is worth ___ing / worth while</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">while</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">take ___ account / take ___ consideration</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">into</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">___ long as / as ___ as possible</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">as / soon</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:9px 14px;font-size:13px;color:var(--t1);font-family:var(--mono);border-right:1px solid var(--bd)">on ___ hand...on the other</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">one</div></div>
    </div>

    <!-- SIGNAL WORDS -->
    <div id="sec-signals" class="sec-label" style="margin-top:36px">// signal words — što praznina nagovještava</div>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px">
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">SIGNAL U TEKSTU</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);background:var(--bg-surface)">MOGUĆA PRAZNINA</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">Suprotnost između dvije rečenice</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">however / nevertheless / yet / although</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">Uzrok-posljedica između rečenica</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">therefore / as a result / consequently</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">Iza have/has/had</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">been (past participle za PP)</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">Iza been (passive)</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">have / has / had / will / should...</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">Zarez + praznina + rečenica</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">which (nedefinrajuća relativna klauzula)</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">Praznina + -ing forma</div><div style="padding:9px 14px;font-size:13px;color:var(--blue);font-family:var(--mono)">prijedlog (after/before/without/by/on)</div></div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Discere — vježbaj open cloze</div></div>
      <div class="discere-body">
        <div class="discere-desc">Filter: <b>open cloze</b> → 10 zadataka. Griješiš na veznicima? Vrati se na tablicu kategorija i provjeri signal words.</div>
        <button class="discere-btn" onclick="openDiscere()">Otvori Discere →</button>
      </div>
    </div>
    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Vježbaj →</span>
    </div>
  </div><!-- /l1 -->
  <!-- ═══ LAYER 2 ═══ -->
  <div class="layer" id="l2">
    <div class="sec-label">// interaktivni open cloze tekst</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Pročitaj tekst, zatim upiši jednu točnu riječ u svaku prazninu. Pritisni <b>Provjeri sve</b> ili Enter da provjeriš svaki odgovor zasebno.</p>

    <div class="cloze-text" id="clozeText"></div>

    <div class="cloze-controls">
      <button class="btn-check" onclick="checkAll()">Provjeri sve</button>
      <button class="btn-reveal" onclick="revealAll()">Pokaži odgovore</button>
      <button class="btn-reset" onclick="resetCloze()">↺ Ponovi</button>
    </div>
    <div class="cloze-score" id="clozeScore" style="display:none">
      Rezultat: <span class="val" id="clozeScoreVal">0</span> / <span id="clozeTotal">10</span>
    </div>

    <div class="sec-label" style="margin-top:32px">// objašnjenja odgovora</div>
    <p style="font-size:12.5px;color:var(--t2);font-family:var(--mono);margin-bottom:12px">Klikni "Pokaži odgovore" gore, pa provjeri zašto je svaka praznina točna.</p>
    <div class="ans-grid" id="ansGrid"></div>

    <div class="sec-label" style="margin-top:32px">// kviz — prepoznaj kategoriju i odaberi točan odgovor</div>
    <div style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Pitanja se odnose na cloze tekst iznad. Odaberi točan odgovor i prepoznaj kategoriju praznine.</div>

    <div class="q-block" id="q1">
      <div class="q-head">
        <div class="q-meta">praznina 01 · relativna zamjenica</div>
        <div class="q-text">...emotional intelligence, <b>___</b> is often abbreviated as EQ... — Koja je točna riječ i zašto?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>that — definirajuća klauzula bez zareza</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>which — nedefinrajuća klauzula iza zareza</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>who — za osobe, ne stvari</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>what — zamjenica, ne relativni konektor</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — <b>which</b>. Stoji iza zareza → nedefinrajuća relativna klauzula. "That" se ne koristi uz zarez u nedefinrajućoj klauzuli. "Who" je za osobe. "What" nije relativna zamjenica.</div></div>
    </div>

    <div class="q-block" id="q2" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">praznina 04 · fiksni izraz — prijedlog</div>
        <div class="q-text">...EQ takes <b>___</b> account the role of emotions... — Koji prijedlog ide u fiksni izraz?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>in — "take in account" ne postoji</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">B</div>into — "take into account" = uzeti u obzir</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">C</div>on — "take on account" ne postoji</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>under — "take under account" ne postoji</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — <b>into</b>. "Take into account" je fiksni izraz koji se uči napamet. Prijedlog se ne može zamijeniti ni s čim — samo "into".</div></div>
    </div>

    <div class="q-block" id="q3" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">praznina 08 · prijedložna fraza</div>
        <div class="q-text">...individuals who are <b>___</b> of managing their emotions... — Koja je kategorija ove praznine?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>able — "able of" ne postoji (able to)</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">B</div>capable — "capable of + -ing" je ispravna struktura</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">C</div>possible — "possible of" ne postoji</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>skilled — "skilled of" ne postoji (skilled at/in)</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — <b>capable</b>. "Capable of + -ing" = sposoban za. Ovo je prijedložna fraza (adjective + preposition). "Able" ide s "to-inf" (able to manage), ne "of + -ing".</div></div>
    </div>

    <div class="q-block" id="q4" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">praznina 03 i 09 · veznik kontrasta</div>
        <div class="q-text">U tekstu se ista vrsta veznika koristi dva puta (praznine 3 i 9). Koji je to tip i zašto ne može biti "Despite"?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>Despite — kontrast + imenica/gerund, ne rečenica</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">B</div>Although — kontrast + potpuna rečenica (subjekt + glagol)</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">C</div>However — kontrast između zasebnih rečenica (s točkom)</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>Nevertheless — između zasebnih rečenica, ne unutar jedne</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — <b>Although</b>. Praznine 3 i 9 stoje na početku rečenice iza koje slijedi potpuna klauzula → Although/While/Even though. Despite zahtijeva imenicu ili gerund, ne subjekt+glagol. However i Nevertheless dolaze između zasebnih rečenica s točkom.</div></div>
    </div>

    <div class="q-block" id="q5" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">praznina 05 · that-klauzula iza participa</div>
        <div class="q-text">Research has <b>shown</b> ___ people with high EQ tend to... — Zašto je "that" točno, a ne "which" ili "how"?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>which — relativna zamjenica, ne uvodi izjavnu klauzulu</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">B</div>how — uvodi način, ne činjeničnu izjavu</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">C</div>that — "shown that" = pokazalo se da (that-klauzula)</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>what — upitna zamjenica, ne komplementizer</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — <b>that</b>. Iza glagola poput show/prove/find/suggest ide "that" koji uvodi izjavnu (that-) klauzulu. "Which" je relativna zamjenica i ne može uvesti novu rečenicu. "How" govori o načinu, ne o činjenici.</div></div>
    </div>

    <div class="q-block" id="q6" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">praznina 10 · upitna zamjenica u indirektnom iskazu</div>
        <div class="q-text">...ongoing debate as to <b>___</b> extent it is innate or learned — "to ___ extent" = u kojoj mjeri. Koja je točna riječ?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">A</div>which — "to which extent" je formalno moguće ali rijetko</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">B</div>how — "to how extent" ne postoji</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">C</div>that — "to that extent" mijenja značenje (do te mjere)</div>
        <div class="q-opt" onclick="answer(this,'q6','correct')"><div class="q-letter">D</div>what — "to what extent" = u kojoj mjeri (standardni izraz)</div>
      </div>
      <div class="q-expl" id="qe6"><div class="expl-ok">✓ Točno — <b>what</b>. "To what extent" je standardni fiksni izraz = u kojoj mjeri. "As to what extent" uvodi indirektno pitanje. "That extent" znači "do te mjere" — drugo značenje.</div></div>
    </div>

    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Spreman za pravu vježbu</div></div>
      <div class="discere-body">
        <div class="discere-desc">Završio si Poglavlje 10. Poglavlje 11 pokriva <b>Key Word Transformation</b> — najtežu Use of English vještinu.</div>
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
      <span class="nav-btn" onclick="switchTab(1)">← Strategija</span>
      <button class="nav-btn primary" onclick="navigateChapter(11)">Poglavlje 11: Key Word Transformation →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>
<script>
const PAGE_KEY='maturiraj_en_visa_p10';

// CLOZE DATA — authentic-style open cloze passage
const clozeData={
  text:\`The concept of emotional intelligence, <span class="cloze-num">1</span><input class="cloze-input" id="ci0" data-idx="0" size="8" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,0)"> is often abbreviated as EQ, refers to the ability to recognise, understand, and manage one's own emotions, as <span class="cloze-num">2</span><input class="cloze-input" id="ci1" data-idx="1" size="7" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,1)"> as those of others. <span class="cloze-num">3</span><input class="cloze-input" id="ci2" data-idx="2" size="9" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,2)"> traditional measures of intelligence focus solely on cognitive abilities, EQ takes <span class="cloze-num">4</span><input class="cloze-input" id="ci3" data-idx="3" size="6" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,3)"> account the role of emotions in decision-making and social interaction.

Research has shown <span class="cloze-num">5</span><input class="cloze-input" id="ci4" data-idx="4" size="5" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,4)"> people with high EQ tend to perform better in workplaces <span class="cloze-num">6</span><input class="cloze-input" id="ci5" data-idx="5" size="7" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,5)"> require teamwork and leadership. This is <span class="cloze-num">7</span><input class="cloze-input" id="ci6" data-idx="6" size="8" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,6)"> because individuals who are <span class="cloze-num">8</span><input class="cloze-input" id="ci7" data-idx="7" size="7" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,7)"> of managing their emotions effectively are better equipped to handle stress and resolve conflicts.

<span class="cloze-num">9</span><input class="cloze-input" id="ci8" data-idx="8" size="8" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,8)"> EQ can be developed through practice and training, there is ongoing debate as to <span class="cloze-num">10</span><input class="cloze-input" id="ci9" data-idx="9" size="8" autocomplete="off" autocorrect="off" spellcheck="false" onkeydown="handleKey(event,9)"> extent it is innate or learned.\`,
  answers:['which','well','Although','into','that','which','largely','capable','Although','what'],
  explanations:[
    '<b>Kategorija: Relativna zamjenica</b> — Nedefinrajuća klauzula s zarezom za stvar (EQ) → <b>which</b>. Ne "that" jer stoji iza zareza.',
    '<b>Kategorija: Fiksni izraz</b> — "as well as" = kao i, zajedno s. Struktura "as ___ as" uvijek ima "well" za prilog.',
    '<b>Kategorija: Veznik kontrasta</b> — Kontrast između tradicijskog i EQ pristupa + rečenica → <b>Although</b>. Dok/While/Whereas su alternativno prihvatljivi, ali Although je najneutralniji.',
    '<b>Kategorija: Fiksni izraz (prijedlog)</b> — "take into account" = uzeti u obzir. Uvijek "into", nikad "in account".',
    '<b>Kategorija: Veznik / that-klauzula</b> — "shown that" = pokazalo se da. Iza "shown" (glagolski particip) obavezno ide "that".',
    '<b>Kategorija: Relativna zamjenica</b> — Definirajuća klauzula za "workplaces" (stvar, mjesto) → <b>which</b> ili "that". Bez zareza = definirajuća.',
    '<b>Kategorija: Prilog (modifikator)</b> — "largely because" = uglavnom zbog. Prilog "largely" modificira uzročni veznik.',
    '<b>Kategorija: Prijedložna fraza</b> — "capable of + -ing" = sposoban za. Uvijek "of", ne "to" ili "for".',
    '<b>Kategorija: Veznik kontrasta</b> — Kontrast (EQ se može razviti, ali debata postoji) + rečenica → <b>Although</b>. While/Even though prihvatljivo.',
    '<b>Kategorija: Upitna zamjenica (indirektno)</b> — "to what extent" = u kojoj mjeri. "As to what" uvodi indirektno pitanje.'
  ]
};

let answered=new Array(clozeData.answers.length).fill(false);
let correctCount=0;

function handleKey(e,idx){
  if(e.key==='Enter'){e.preventDefault();checkSingle(idx);}
  else if(e.key==='Tab'){
    e.preventDefault();
    const next=document.getElementById('ci'+(idx+1));
    if(next)next.focus();
  }
}

function norm(s){return s.trim().toLowerCase();}

function checkSingle(idx){
  if(answered[idx]) return;
  const input=document.getElementById('ci'+idx);
  const val=norm(input.value);
  const correct=norm(clozeData.answers[idx]);
  // accept alternates
  const alts={2:['although','while','whereas','even though'],5:['which','that'],6:['largely','mainly','primarily','partly','chiefly'],8:['although','while','even though']};
  const validAnswers=alts[idx]?[correct,...alts[idx].map(norm)]:[correct];
  const isCorrect=validAnswers.includes(val);
  answered[idx]=true;
  if(isCorrect){input.classList.add('correct');correctCount++;}
  else{input.classList.add('wrong');input.title='Točno: '+clozeData.answers[idx];}
}

function checkAll(){
  for(let i=0;i<clozeData.answers.length;i++){if(!answered[i])checkSingle(i);}
  const sc=document.getElementById('clozeScore');
  const sv=document.getElementById('clozeScoreVal');
  const tot=document.getElementById('clozeTotal');
  if(sc){sc.style.display='flex';sv.textContent=correctCount;tot.textContent=clozeData.answers.length;}
  if(correctCount===clozeData.answers.length)launchConfetti();
  buildAnsGrid();
}

function revealAll(){
  for(let i=0;i<clozeData.answers.length;i++){
    const input=document.getElementById('ci'+i);
    if(!answered[i]){input.value=clozeData.answers[i];input.classList.add('correct');answered[i]=true;}
  }
  buildAnsGrid();
  const sc=document.getElementById('clozeScore');
  if(sc){sc.style.display='flex';document.getElementById('clozeScoreVal').textContent=correctCount;document.getElementById('clozeTotal').textContent=clozeData.answers.length;}
}

function resetCloze(){
  answered=new Array(clozeData.answers.length).fill(false);
  correctCount=0;
  for(let i=0;i<clozeData.answers.length;i++){
    const input=document.getElementById('ci'+i);
    if(input){input.value='';input.className='cloze-input';input.title='';}
  }
  const sc=document.getElementById('clozeScore');
  if(sc)sc.style.display='none';
  document.getElementById('ansGrid').innerHTML='';
}

function buildAnsGrid(){
  const grid=document.getElementById('ansGrid');
  grid.innerHTML='';
  clozeData.answers.forEach((ans,i)=>{
    const div=document.createElement('div');
    div.className='ans-item';
    div.innerHTML=\`<span class="num">Praznina \${i+1}</span><span class="word" style="color:var(--brit-green);font-family:var(--mono);font-weight:700">\${ans}</span><div class="why" style="margin-top:5px;font-size:12.5px;line-height:1.6;color:var(--t2)">\${clozeData.explanations[i]}</div>\`;
    grid.appendChild(div);
  });
}

function buildCloze(){
  document.getElementById('clozeText').innerHTML=clozeData.text;
  document.getElementById('ansGrid').innerHTML='';
}

function saveProgress(i){try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d['tab_'+i]=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}}
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    document.querySelectorAll('.tab').forEach((t,i)=>{if(d['tab_'+i])t.classList.add('done-tab');});
    if(d.cgPassed){const cg=document.getElementById('cgBlock');if(cg)cg.style.display='none';}
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
  if(result==='correct'){quizCorrectCount++;if(quizCorrectCount===document.querySelectorAll('.q-block').length)launchConfetti();}
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
    fb.innerHTML='✓ Točno! "praised for" = fiksna kolokacija. "for" dolazi iza "praised". "Since" je vremenski veznik, ne odgovara ovom kontekstu. "During" uvodi vremenski period (during the war), ne uzrok ili kolokaciju.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. B je točno: "praised for" = fiksna kolokacija. "Because" zahtijeva cijelu rečenicu, "of" nije ispravan prijedlog uz "praise", "due" je uvijek "due to" (dvije riječi).';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}

const tipSections=['sec-strategy','sec-cat-conjunctions','sec-cat-aux','sec-cat-prep','sec-cat-pron','sec-cat-fixed','sec-signals'];
function tipScroll(id){const el=document.getElementById(id);if(!el)return;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:'smooth'});}
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){const idx=tipSections.indexOf(e.target.id);for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}}});
},{rootMargin:'-10% 0px -60% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});

function launchConfetti(){
  const colors=['#4F7BE8','#CF142B','#52D688','#E8A838','#A78BFA','#C9A227'];
  for(let i=0;i<55;i++){
    const p=document.createElement('div');p.className='confetti-piece';
    p.style.cssText=\`left:\${Math.random()*100}vw;background:\${colors[Math.floor(Math.random()*colors.length)]};animation-duration:\${2+Math.random()*2}s;animation-delay:\${Math.random()*.8}s;width:\${6+Math.random()*6}px;height:\${6+Math.random()*6}px;border-radius:\${Math.random()>.5?'50%':'2px'}\`;
    document.body.appendChild(p);setTimeout(()=>p.remove(),4000);
  }
}

window.addEventListener('scroll',()=>{const b=document.getElementById('backTop');if(b)b.classList.toggle('show',window.scrollY>400);},{passive:true});
function openMobDrawer(){document.getElementById('mobDrawer').classList.add('open');document.body.style.overflow='hidden';}
function closeMobDrawer(){document.getElementById('mobDrawer').classList.remove('open');document.body.style.overflow='';}
document.getElementById('mobDrawer').addEventListener('click',e=>{if(e.target===e.currentTarget)closeMobDrawer();});

buildCloze();
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