// Maturiraj.hr — Engleski viša razina
// Poglavlje 11: Key WordTransformation
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 11,
  slug: "poglavlje11",
  title: "Key WordTransformation",
  subtitle: "Zadatak C \u00b7 prepi\u0161i re\u010denicu koriste\u0107i klju\u010dnu rije\u010d \u00b7 2\u20135 rije\u010di \u00b7 isto zna\u010denje",
  blok: 3,
  blokNaziv: "Use of English",
  prev: 10,
  next: 12,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 11</title>
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
.hero::after{content:'11';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
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
/* KWT TASK DISPLAY */
.kwt-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:14px}
.kwt-head{display:flex;align-items:center;justify-content:space-between;padding:11px 16px;background:var(--bg-surface);border-bottom:1px solid var(--bd)}
.kwt-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1px}
.kwt-cat{font-family:var(--mono);font-size:10px;font-weight:600;padding:2px 8px;border-radius:var(--r1);border:1px solid}
.kwt-cat.passive{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.kwt-cat.comparative{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.kwt-cat.conditional{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.kwt-cat.reported{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.kwt-cat.modal{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.kwt-cat.phrase{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}
.kwt-cat.wish{background:var(--cream-dim);color:var(--cream);border-color:var(--cream-bd)}
.kwt-cat.causative{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.kwt-body{padding:16px 20px}
.kwt-original{font-size:14px;color:var(--t1);line-height:1.6;margin-bottom:12px;font-family:var(--serif)}
.kwt-key{display:inline-flex;align-items:center;gap:8px;padding:5px 12px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);letter-spacing:1px;margin-bottom:12px}
.kwt-partial{font-size:14px;color:var(--t2);line-height:1.6;font-family:var(--serif)}
.kwt-partial b{color:var(--t1)}
.kwt-input{display:block;width:100%;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:9px 14px;font-family:var(--mono);font-size:13.5px;color:var(--t1);outline:none;transition:border-color .15s;margin:10px 0}
.kwt-input:focus{border-color:var(--blue)}
.kwt-input.correct{border-color:var(--green);background:var(--green-dim);color:var(--green)}
.kwt-input.wrong{border-color:var(--red);background:var(--red-dim);color:var(--red)}
.kwt-btns{display:flex;gap:8px;flex-wrap:wrap}
.kwt-check{padding:7px 16px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:opacity .15s}
.kwt-check:hover{opacity:.85}
.kwt-hint{padding:7px 12px;background:var(--bg-elevated);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;transition:all .15s}
.kwt-hint:hover{color:var(--amber);border-color:var(--amber-border)}
.kwt-show{padding:7px 12px;background:transparent;border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:12px;color:var(--t3);cursor:pointer;transition:all .15s}
.kwt-show:hover{color:var(--t1);border-color:var(--bd-light)}
.kwt-feedback{display:none;margin-top:10px;font-family:var(--mono);font-size:12.5px;line-height:1.65;padding:10px 14px;border-radius:var(--r2)}
.kwt-feedback.show{display:block}
.kwt-feedback.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}
.kwt-feedback.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.kwt-feedback.hint{background:var(--amber-dim);color:var(--amber);border:1px solid var(--amber-border)}
/* TRANSFORM TABLE */
.transform-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px;border-collapse:separate;border-spacing:0}
.transform-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:10px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.transform-table td{padding:10px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.6}
.transform-table tr:last-child td{border-bottom:none}
.transform-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
.transform-table .type{font-family:var(--mono);font-size:11px;font-weight:700;white-space:nowrap}
.transform-table .from{color:var(--t2);font-style:italic}
.transform-table .to{color:var(--blue);font-weight:500}
.transform-table .key{color:var(--amber);font-family:var(--mono);font-size:11px;font-weight:700}
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
/* SCORE BAR */
.score-bar{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);margin-bottom:16px;font-family:var(--mono);font-size:12px;color:var(--t3)}
.score-val{font-size:22px;font-weight:700;color:var(--blue);font-family:var(--serif);letter-spacing:-1px;margin-right:4px}
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
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}.kwt-btns{flex-direction:column}}
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
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span> 10 · Gap fill i MCQ</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span> 11 · Word formation</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(10)" style="cursor:pointer"><span class="sb-dot"></span>10 · Gap fill i MCQ</div>
  <div class="sb-item active" onclick="navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span>11 · Word formation</div>
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
<div class="sb-footer">11 / 20 · word formation<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-3</span>
    <span class="bc-sep">/</span><span class="bc-active">key-word-transformation</span>
  </div>
  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Strategija<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Vježbaj<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Strategija i transformacije</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Vježbaj</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~35 min
    </div>
  </div>
  <!-- ═══ LAYER 0 ═══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 11 of 20 · blok 3 — use of english</div>
      <h1 class="hero-title">Key Word<br><span>Transformation</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">11 / 20</span>
      </div>
      <p class="hero-sub">Zadatak C · prepiši rečenicu koristeći ključnu riječ · 2–5 riječi · isto značenje</p>
      <div class="progress-track"><div class="progress-bar" style="width:55%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Passive voice</span>
      <span class="pill pill-green">Comparatives</span>
      <span class="pill pill-gold">Conditionals</span>
      <span class="pill pill-violet">Reported Speech</span>
      <span class="pill pill-amber">Modal verbs</span>
      <span class="pill pill-red">Phrasal verbs</span>
      <span class="pill pill-cream">Wish / If only</span>
    </div>
    <div class="sec-label">// što je KWT zadatak</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">KWT</div><div class="stat-name">Zadatak C</div><div class="stat-desc">Originalna rečenica + ključna riječ (KEY WORD). Trebaš prepisati rečenicu koristeći tu ključnu riječ, a da značenje ostane isto</div></div>
      <div class="stat-card"><div class="stat-icon green">2–5</div><div class="stat-name">2 do 5 riječi</div><div class="stat-desc">Tvoja popuna mora imati <b>točno 2–5 riječi</b>. Contractions (don't) = 1 riječ. Ključna riječ se ne smije mijenjati</div></div>
      <div class="stat-card"><div class="stat-icon gold">≡</div><div class="stat-name">Isto značenje</div><div class="stat-desc">Prepisana rečenica mora imati <b>identično značenje</b> kao originalna. Nijansa u sadašnjosti vs prošlosti = greška</div></div>
      <div class="stat-card"><div class="stat-icon violet">gram</div><div class="stat-name">Gramatičke strukture</div><div class="stat-desc">Testira passive, comparatives, conditionals, reported speech, modals, wish, causative have/get i phrasal verbs</div></div>
    </div>
    <div class="sec-label">// 5 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 kwt — 5 koraka za svaki zadatak</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Prepoznaj što se traži.</b> Poglej ključnu riječ — she said → reported speech? can't → modal? despite → concessivna struktura? Ključna riječ ti govori vrstu transformacije.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Pronađi što ostaje nepromijenjeno.</b> Originalna rečenica ima dijelove koji se ne mijenjaju — samo se nadopunjuje praznina. Pažljivo čitaj što je već dano prije i poslije praznine.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Broji riječi!</b> 2–5 je strogi limit. Contractions = 1 riječ. Ključna riječ se uvijek broji. "Doesn't have to" = 3 riječi.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Ključna riječ se NIKAD ne mijenja.</b> Ako je ključna riječ HAVE, ne smiješ pisati "has" ili "had" — ostaje "have".</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Provjeri: isti smisao + gramatički točno.</b> Pročitaj novu rečenicu u cijelosti. Je li značenje identično? Je li gramatički ispravno?</div></div>
      </div>
    </div>
    <div class="sec-label">// brzi pregled transformacija</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Active → Passive i obratno</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Active:</b> <em>They built the bridge in 1990.</em><br>
        <b>KEY: BUILT → Passive:</b> <em>The bridge <span class="ok">was built</span> in 1990.</em><br><br>
        <b>Passive PP:</b> <em>The decision has been made.</em><br>
        <b>KEY: MADE → Active:</b> <em>They <span class="ok">have made</span> the decision.</em><br><br>
        <span class="note">Tip: Passive = be + past participle. Provjeri glagolsko vrijeme iz originala.</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>Comparatives i superlatives</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Comparativna →</b> <em>No other city is as large as Tokyo.</em> <b>KEY: LARGEST</b> → <em>Tokyo is <span class="ok">the largest city</span>.</em><br><br>
        <b>Superlativ →</b> <em>She is the best player.</em> <b>KEY: THAN</b> → <em>She plays <span class="ok">better than</span> anyone.</em><br><br>
        <b>too...to / enough to:</b> <em>He is too young to vote.</em> → <em>He is not <span class="ok">old enough to</span> vote.</em><br>
        <span class="note">too adj to = not adj enough to</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Wish / If only / It's time</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Sadašnjost:</b> <em>I don't have a car.</em> → <em>I <span class="ok">wish I had</span> a car.</em> (Past Simple iza wish = sadašnjost!)<br><br>
        <b>Prošlost:</b> <em>I didn't study.</em> → <em>I <span class="ok">wish I had studied</span>.</em> (Past Perfect iza wish = prošlost)<br><br>
        <b>It's time:</b> <em>You should leave now.</em> → <em>It's <span class="ok">time you left</span>.</em> (Past Simple iza "it's time")<br><br>
        <span class="bad">Zamka:</span> Wish + would = žalba na naviku drugog: <em>I wish you <span class="ok">wouldn't smoke</span>.</em>
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Strategiju</div></div></div>
      <div class="cg-body">
        <div class="cg-question">"It was too cold to swim." → KEY: ENOUGH → "It was not _____ to swim." Što ide u prazninu?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)"><div class="cg-letter">A</div>warm enough</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">B</div>enough warm</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">C</div>cold enough</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">D</div>not warm</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Strategiju →</button>

    <!-- BRIDGE: WORD FORMATION → KWT -->
    <div style="background:var(--blue-dim);border:1px solid var(--blue-border);border-radius:var(--r3);padding:12px 16px;margin:16px 0 0;font-family:var(--mono);font-size:12px;color:var(--t2);line-height:1.75">
      <div style="font-size:10px;font-weight:700;color:var(--blue);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">🔗 P09–P10 → P11 — Use of English: sve se spaja</div>
      KWT nije izoliran zadatak — testira sve što si do sad naučio:<br>
      <b style="color:var(--t1)">Passive (P06)</b>: "Someone built this" → <em>BUILT: This was built...</em> &nbsp;·&nbsp;
      <b style="color:var(--t1)">Conditionals (P05)</b>: "If I were..." → <em>WERE: Were I...</em> &nbsp;·&nbsp;
      <b style="color:var(--t1)">too/enough (P08)</b>: "too heavy to carry" → <em>ENOUGH: not light enough to carry</em> &nbsp;·&nbsp;
      <b style="color:var(--t1)">Open Cloze kategorije (P10)</b>: iste gramatičke strukture, samo bez ponuđenih opcija.
    </div>
      </div>
    </div>
    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(10)">← Poglavlje 10</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Strategija →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ═══ LAYER 1 ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-strategy')"><span class="tip-dot"></span>Strategija</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-t-passive')"><span class="tip-dot"></span>Passive</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-t-comparative')"><span class="tip-dot"></span>Comparative</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-t-modal')"><span class="tip-dot"></span>Modali</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-t-reported')"><span class="tip-dot"></span>Reported Speech</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-t-wish')"><span class="tip-dot"></span>Wish / If only</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-t-causative')"><span class="tip-dot"></span>Causative</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-7" onclick="tipScroll('sec-t-other')"><span class="tip-dot"></span>Ostalo</div>
    </div>

    <!-- STRATEGIJA -->
    <div id="sec-strategy" class="sec-label">// strategija — kako pristupiti KWT zadatku</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 24px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--blue);letter-spacing:1.5px;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd)">KORACI</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1);font-family:var(--mono)">1.</b> Poglej KEY WORD — prepoznaj vrstu transformacije</div>
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1);font-family:var(--mono)">2.</b> Pročitaj što je dano (fiksni dijelovi)</div>
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1);font-family:var(--mono)">3.</b> Napiši popunu (key word mora biti unutra)</div>
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1);font-family:var(--mono)">4.</b> Broji riječi (2–5, contractions = 1)</div>
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1);font-family:var(--mono)">5.</b> Provjeri: isti smisao + gramatički točno</div>
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--union-red);letter-spacing:1.5px;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd)">ČESTE GREŠKE</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="font-size:13px;color:var(--t2)">Mijenjanje ključne riječi (has → had)</div>
          <div style="font-size:13px;color:var(--t2)">Više od 5 ili manje od 2 riječi</div>
          <div style="font-size:13px;color:var(--t2)">Krivo glagolsko vrijeme</div>
          <div style="font-size:13px;color:var(--t2)">Promijenjen smisao (not → yes)</div>
          <div style="font-size:13px;color:var(--t2)">Preslikano previše iz originala</div>
        </div>
      </div>
    </div>
    <div class="callout callout-info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Ključna riječ kao signal transformacije</div>
        <div class="callout-text">
          <b>HAVE/GET</b> → causative ("have/get sth done") ili have to<br>
          <b>WISH/IF ONLY</b> → struktura wish + Past Simple/Past Perfect<br>
          <b>DESPITE/IN SPITE</b> → concessivna transformacija<br>
          <b>UNLESS/PROVIDED</b> → conditional transformacija<br>
          <b>ENOUGH/TOO</b> → comparativna transformacija<br>
          <b>SAID/TOLD/ASKED</b> → reported speech transformacija<br>
          <b>BY/BEEN/WAS</b> → passive transformacija
        </div>
      </div>
    </div>

    <!-- PASSIVE -->
    <div id="sec-t-passive" class="sec-label" style="margin-top:36px">// transformacija 1 — passive voice</div>
    <table class="transform-table">
      <thead><tr><th>Original</th><th>Key</th><th>Transformacija</th></tr></thead>
      <tbody>
        <tr><td class="from">They built this school in 1950.</td><td class="key">BUILT</td><td class="to">This school <b>was built</b> in 1950.</td></tr>
        <tr><td class="from">Someone is fixing the car.</td><td class="key">BEING</td><td class="to">The car <b>is being fixed</b>.</td></tr>
        <tr><td class="from">They have cancelled the match.</td><td class="key">BEEN</td><td class="to">The match <b>has been cancelled</b>.</td></tr>
        <tr><td class="from">They should report the accident.</td><td class="key">SHOULD</td><td class="to">The accident <b>should be reported</b>.</td></tr>
        <tr><td class="from">The boss made her work overtime.</td><td class="key">MADE</td><td class="to">She <b>was made to work</b> overtime.</td></tr>
      </tbody>
    </table>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Make + passive = "was made to" (s to!)</div>
        <div class="callout-text">Active: <em>They made her leave.</em> (make + bare infinitive)<br>
        Passive: <em>She <b>was made to leave</b>.</em> (passive make + to-infinitive!)<br>
        Ovo je klasična zamka — passive oblik "make" uvijek ide s "to".</div>
      </div>
    </div>

    <!-- COMPARATIVE -->
    <div id="sec-t-comparative" class="sec-label" style="margin-top:36px">// transformacija 2 — comparative i too/enough</div>
    <table class="transform-table">
      <thead><tr><th>Original</th><th>Key</th><th>Transformacija</th></tr></thead>
      <tbody>
        <tr><td class="from">No city is bigger than London.</td><td class="key">BIGGEST</td><td class="to">London is <b>the biggest city</b>.</td></tr>
        <tr><td class="from">She is more intelligent than him.</td><td class="key">AS</td><td class="to">He is not <b>as intelligent as</b> her.</td></tr>
        <tr><td class="from">The box is too heavy to lift.</td><td class="key">ENOUGH</td><td class="to">The box is not <b>light enough to</b> lift.</td></tr>
        <tr><td class="from">She isn't old enough to drive.</td><td class="key">TOO</td><td class="to">She is <b>too young to</b> drive.</td></tr>
        <tr><td class="from">The longer you wait, the worse it gets.</td><td class="key">MORE</td><td class="to">The <b>more you wait, the</b> worse it gets.</td></tr>
      </tbody>
    </table>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">too...to vs not...enough to — suprotni pridjevi</div>
        <div class="callout-text">too <b>heavy</b> → not <b>light</b> enough (suprotni pridjev!)<br>
        too <b>young</b> → not <b>old</b> enough · too <b>small</b> → not <b>big</b> enough<br>
        Ključ: "too X to do" = "not [antonym of X] enough to do"</div>
      </div>
    </div>

    <!-- MODAL -->
    <div id="sec-t-modal" class="sec-label" style="margin-top:36px">// transformacija 3 — modalni glagoli</div>
    <table class="transform-table">
      <thead><tr><th>Original</th><th>Key</th><th>Transformacija</th></tr></thead>
      <tbody>
        <tr><td class="from">It's not necessary to bring cash.</td><td class="key">NEED</td><td class="to">You <b>needn't bring</b> cash.</td></tr>
        <tr><td class="from">It's forbidden to park here.</td><td class="key">MUST</td><td class="to">You <b>must not park</b> here.</td></tr>
        <tr><td class="from">I'm sure she left the office.</td><td class="key">MUST</td><td class="to">She <b>must have left</b> the office.</td></tr>
        <tr><td class="from">It was wrong of you to lie.</td><td class="key">SHOULD</td><td class="to">You <b>shouldn't have lied</b>.</td></tr>
        <tr><td class="from">I regret not calling her earlier.</td><td class="key">WISH</td><td class="to">I <b>wish I had called</b> her earlier.</td></tr>
      </tbody>
    </table>

    <!-- REPORTED SPEECH -->
    <div id="sec-t-reported" class="sec-label" style="margin-top:36px">// transformacija 4 — reported speech</div>
    <table class="transform-table">
      <thead><tr><th>Original</th><th>Key</th><th>Transformacija</th></tr></thead>
      <tbody>
        <tr><td class="from">"I will help you," she said.</td><td class="key">PROMISED</td><td class="to">She <b>promised to help</b> me.</td></tr>
        <tr><td class="from">"Don't touch that!" he told her.</td><td class="key">TOLD</td><td class="to">He <b>told her not to</b> touch that.</td></tr>
        <tr><td class="from">"Where do you live?" she asked me.</td><td class="key">ASKED</td><td class="to">She <b>asked me where I</b> lived.</td></tr>
        <tr><td class="from">"I have finished the report," he said.</td><td class="key">SAID</td><td class="to">He <b>said he had finished</b> the report.</td></tr>
        <tr><td class="from">She advised me to see a doctor.</td><td class="key">SAID</td><td class="to">She <b>said I should see</b> a doctor.</td></tr>
      </tbody>
    </table>

    <!-- WISH / IF ONLY -->
    <div id="sec-t-wish" class="sec-label" style="margin-top:36px">// transformacija 5 — wish / if only / it's time</div>
    <table class="transform-table">
      <thead><tr><th>Original</th><th>Key</th><th>Transformacija</th></tr></thead>
      <tbody>
        <tr><td class="from">I'm sorry I don't speak French.</td><td class="key">WISH</td><td class="to">I <b>wish I spoke</b> French.</td></tr>
        <tr><td class="from">I regret not studying harder.</td><td class="key">ONLY</td><td class="to">If <b>only I had studied</b> harder.</td></tr>
        <tr><td class="from">You should stop smoking immediately.</td><td class="key">TIME</td><td class="to">It's <b>high time you stopped</b> smoking.</td></tr>
        <tr><td class="from">I'm annoyed that you always arrive late.</td><td class="key">WISH</td><td class="to">I <b>wish you wouldn't arrive</b> late.</td></tr>
        <tr><td class="from">She can't swim — what a pity.</td><td class="key">COULD</td><td class="to">I wish she <b>could swim</b>.</td></tr>
      </tbody>
    </table>
    <div class="callout callout-info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Wish — koja vremenska forma?</div>
        <div class="callout-text">
          Sadašnjost/budućnost → wish + <b>Past Simple</b>: "I wish I <b>had</b> a car."<br>
          Prošlost → wish + <b>Past Perfect</b>: "I wish I <b>had studied</b>."<br>
          Navika/pritužba → wish + <b>would</b>: "I wish you <b>wouldn't smoke</b>."<br>
          "It's (high) time" → Past Simple: "It's time you <b>left</b>."
        </div>
      </div>
    </div>

    <!-- CAUSATIVE -->
    <div id="sec-t-causative" class="sec-label" style="margin-top:36px">// transformacija 6 — causative have/get</div>
    <p class="prose">Causative = naručio/naplatio/dao da netko drugi napravi nešto. Struktura: <em>have/get + objekt + past participle</em>.</p>
    <table class="transform-table">
      <thead><tr><th>Original</th><th>Key</th><th>Transformacija</th></tr></thead>
      <tbody>
        <tr><td class="from">A mechanic repaired my car.</td><td class="key">HAD</td><td class="to">I <b>had my car repaired</b>.</td></tr>
        <tr><td class="from">Someone cut her hair.</td><td class="key">GOT</td><td class="to">She <b>got her hair cut</b>.</td></tr>
        <tr><td class="from">They are going to paint the house.</td><td class="key">HAVE</td><td class="to">They are going to <b>have the house painted</b>.</td></tr>
      </tbody>
    </table>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Causative — ključna struktura</div>
        <div class="callout-text">have/get + <b>objekt</b> + <b>past participle</b> (ne infinitiv!)<br>
        <span style="color:var(--red)">✗ I had my car repair.</span><br>
        <span style="color:var(--green)">✓ I had my car repaired.</span><br>
        Objekt dolazi između have/get i participija.</div>
      </div>
    </div>

    <!-- OSTALE TRANSFORMACIJE -->
    <div id="sec-t-other" class="sec-label" style="margin-top:36px">// transformacija 7 — ostale česte strukture</div>
    <table class="transform-table">
      <thead><tr><th>Original</th><th>Key</th><th>Transformacija</th></tr></thead>
      <tbody>
        <tr><td class="from">Although she was tired, she kept working.</td><td class="key">DESPITE</td><td class="to">She kept working <b>despite being tired</b>.</td></tr>
        <tr><td class="from">You will only pass if you study hard.</td><td class="key">UNLESS</td><td class="to">You won't pass <b>unless you study</b> hard.</td></tr>
        <tr><td class="from">She started working here 3 years ago.</td><td class="key">FOR</td><td class="to">She <b>has worked here for</b> 3 years.</td></tr>
        <tr><td class="from">It was such a boring film that I fell asleep.</td><td class="key">SO</td><td class="to">The film was <b>so boring that</b> I fell asleep.</td></tr>
        <tr><td class="from">He said he was sorry for being late.</td><td class="key">APOLOGISED</td><td class="to">He <b>apologised for being</b> late.</td></tr>
        <tr><td class="from">He is responsible for the budget.</td><td class="key">CHARGE</td><td class="to">He is <b>in charge of</b> the budget.</td></tr>
      </tbody>
    </table>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Discere — vježbaj KWT</div></div>
      <div class="discere-body">
        <div class="discere-desc">Filter: <b>key word transformation</b> → 10 zadataka. Griješiš na passive ili wish? Vrati se na tablice iznad.</div>
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
    <!-- MC: PREPOZNAJ TRANSFORMACIJU -->
    <div class="sec-label">// prepoznaj transformaciju — koji key word?</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Prije nego upišeš odgovor — provjeri znaš li koji key word signalizira koju transformaciju. Odaberi točan key word za svaku situaciju.</p>

    <div class="q-block" id="q1">
      <div class="q-head">
        <div class="q-meta">prepoznavanje 01 · tip transformacije</div>
        <div class="q-text">
          "I'm sorry I didn't study harder." → transformacija koja izražava žaljenje zbog prošle radnje.<br>
          <span style="font-family:var(--mono);font-size:12px;color:var(--t2)">I __________ harder.</span><br>
          Koji key word signalizira ovu transformaciju?
        </div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>UNLESS — uvjetni veznik (if not)</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>WISH — žaljenje za prošlošću (wish + Past Perfect)</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>BEEN — Past Perfect Continuous</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>SUCH — so + adj + that → such a + noun</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — <b>WISH</b>. Žaljenje zbog prošlosti = wish + Past Perfect → "I wish I had studied harder." UNLESS uvodi uvjet. BEEN signalizira trajanje (PPC). SUCH mijenja strukturu "so...that".</div></div>
    </div>

    <div class="q-block" id="q2" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">prepoznavanje 02 · pasiv</div>
        <div class="q-text">
          "Someone repaired my car at the garage yesterday."<br>
          <span style="font-family:var(--mono);font-size:12px;color:var(--t2)">My car __________ at the garage yesterday.</span><br>
          Koji key word signalizira passive transformaciju?
        </div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>HAD — causative (have something done)</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">B</div>BEEN — Past Perfect Continuous</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">C</div>REPAIRED — past participle = signal pasiva</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>FOR — trajanje s Present Perfect</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — <b>REPAIRED</b>. Past participle kao key word direktno signalizira passive strukturu: was/got repaired. HAD signalizira causative ("had my car repaired" = naručio/la popravak). BEEN → PPC. FOR → trajanje.</div></div>
    </div>

    <div class="q-block" id="q3" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">prepoznavanje 03 · too/enough transformacija</div>
        <div class="q-text">
          "She is too young to drive." → transformacija sa suprotnim pridjevom.<br>
          <span style="font-family:var(--mono);font-size:12px;color:var(--t2)">She is not old __________ to drive.</span><br>
          Koji key word ovdje stoji?
        </div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>TOO — ali original već ima "too" → ne mijenja strukturu</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">B</div>VERY — "not very enough" ne postoji</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">C</div>ENOUGH — "not + suprotni pridjev + enough"</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>SO — "so + adj + that" je druga struktura</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — <b>ENOUGH</b>. "too + adj" ↔ "not + suprotni adj + enough". Ključ: suprotni pridjev! too young → not old enough · too heavy → not light enough · too slow → not fast enough. ENOUGH dolazi IZA pridjeva, nikad ispred.</div></div>
    </div>

    <div class="q-block" id="q4" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">prepoznavanje 04 · causative vs passive</div>
        <div class="q-text">
          "A professional photographer took our family photos." — naglasak na tome da smo <em>naručili</em> uslugu, ne da nam se to dogodilo.<br>
          <span style="font-family:var(--mono);font-size:12px;color:var(--t2)">We __________ by a professional photographer.</span><br>
          Koji key word signalizira causative (have something done)?
        </div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">A</div>HAD — causative: had + objekt + past participle</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">B</div>TAKEN — samo pasiv (were taken), ne causative</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">C</div>WERE — auxiliary za pasiv, ne causative signal</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>GOT — get-passive (got taken), neformalno</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — <b>HAD</b>. Causative: "We had our photos taken" = naručili smo/dali smo da netko uzme. HAD + objekt + past participle. Pasiv "were taken" govori samo da se to dogodilo, ne da smo to naručili. GET je causative u neformalnom stilu.</div></div>
    </div>

    <div class="q-block" id="q5" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">prepoznavanje 05 · despite vs although</div>
        <div class="q-text">
          "Although the weather was terrible, the event was a success."<br>
          <span style="font-family:var(--mono);font-size:12px;color:var(--t2)">__________ the terrible weather, the event was a success.</span><br>
          Koji key word omogućuje ovu transformaciju?
        </div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>ALTHOUGH — ostaje isti veznik, ne transformira ništa</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">B</div>HOWEVER — kontrast između zasebnih rečenica</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">C</div>DESPITE — despite + imenica/gerund (bez rečenice)</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>EVEN — "even the weather" mijenja smisao</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — <b>DESPITE</b>. Although + rečenica → Despite + imenica/gerund. "the terrible weather" = imenička fraza → Despite the terrible weather. Alternativno: "Despite the weather being terrible" (gerund). HOWEVER zahtijeva dvije odvojene rečenice.</div></div>
    </div>

    <div class="sec-label" style="margin-top:32px">// interaktivni KWT zadaci</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Upiši popunu (2–5 riječi, ključna riječ mora biti unutra). Pritisni Enter ili klikni Provjeri.</p>

    <div class="score-bar">
      <span><span class="score-val" id="kwtScore">0</span>/ <span id="kwtTotal">10</span> točnih</span>
      <span style="margin-left:auto;cursor:pointer;color:var(--t2)" onclick="resetAll()">↺ Ponovi sve</span>
    </div>

    <div id="kwtContainer"></div>

    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Spreman za pravu vježbu</div></div>
      <div class="discere-body">
        <div class="discere-desc">Završio si Poglavlje 11. Poglavlje 12 pokriva <b>Multiple Choice Cloze</b> — zadnji Use of English tip.</div>
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
      <button class="nav-btn primary" onclick="navigateChapter(12)">Poglavlje 12: Multiple Choice Cloze →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>

<script>
const PAGE_KEY='maturiraj_en_visa_p11';

const kwtData=[
  {
    original:'Someone stole her laptop at the conference.',
    key:'STOLEN',
    before:'Her laptop',
    after:'at the conference.',
    answers:['was stolen','got stolen'],
    hint:'Passive Past Simple',
    explanation:'Active → Passive. STOLEN je past participle → was/got stolen. Her laptop = subjekt pasiva.',
    cat:'passive'
  },
  {
    original:'The exam was so difficult that nobody passed.',
    key:'SUCH',
    before:'It was',
    after:'nobody passed.',
    answers:['such a difficult exam that'],
    hint:'such a + adj + noun + that',
    explanation:'so + adj + that → such a + adj + noun + that. "Such a difficult exam that" = 5 riječi (uključujući SUCH).',
    cat:'phrase'
  },
  {
    original:'I regret not taking that job offer.',
    key:'WISH',
    before:'I',
    after:'that job offer.',
    answers:['wish i had taken','wish i\\'d taken'],
    hint:'Wish + Past Perfect (prošlost)',
    explanation:'Žaljenje zbog prošlosti → WISH + Past Perfect. "I wish I had taken" = žalba za prošlošću.',
    cat:'wish'
  },
  {
    original:'A plumber fixed our boiler yesterday.',
    key:'HAD',
    before:'We',
    after:'yesterday.',
    answers:['had our boiler fixed'],
    hint:'Causative: have + objekt + past participle',
    explanation:'Causative: HAD + our boiler + fixed. Obrat: plumber je napravio, mi smo platili/naručili.',
    cat:'causative'
  },
  {
    original:'"Don\\'t leave without saying goodbye," she told him.',
    key:'TOLD',
    before:'She',
    after:'without saying goodbye.',
    answers:['told him not to leave'],
    hint:'Reported command: told + objekt + not to + inf',
    explanation:'Reported imperative negative: told + objekt + not to + infinitiv. "Told him not to leave" = 5 riječi.',
    cat:'reported'
  },
  {
    original:'The box is too heavy for me to carry.',
    key:'ENOUGH',
    before:'The box is not',
    after:'for me to carry.',
    answers:['light enough'],
    hint:'too heavy → not light enough (suprotni pridjev!)',
    explanation:'too + adj → not + [antonym] + enough. Heavy → light. "Not light enough" = 3 riječi s ENOUGH.',
    cat:'comparative'
  },
  {
    original:'It isn\\'t necessary for you to attend the meeting.',
    key:'HAVE',
    before:'You don\\'t',
    after:'the meeting.',
    answers:['have to attend'],
    hint:'don\\'t have to = not necessary',
    explanation:'"Not necessary" → "don\\'t have to". Popuna: "have to attend" = 3 riječi.',
    cat:'modal'
  },
  {
    original:'She started learning piano five years ago.',
    key:'FOR',
    before:'She has been learning piano',
    after:'.',
    answers:['for five years'],
    hint:'Present Perfect Continuous + for',
    explanation:'Ago → Present Perfect (duration). "Has been learning... for five years." FOR + trajanje.',
    cat:'phrase'
  },
  {
    original:'Although it was raining, they continued the match.',
    key:'DESPITE',
    before:'They continued the match',
    after:'.',
    answers:['despite the rain','despite it raining'],
    hint:'although + rečenica → despite + imenica/gerund',
    explanation:'Despite + imenica: "the rain" ili gerund "it raining". "Despite the rain" = 3 riječi.',
    cat:'phrase'
  },
  {
    original:'"I will call you tomorrow," he promised.',
    key:'PROMISED',
    before:'He',
    after:'the next day.',
    answers:['promised to call me','promised to call her'],
    hint:'promise + to + infinitiv (reporting verb)',
    explanation:'Promise + to-infinitiv. Backshift: tomorrow → the next day (već dano). "Promised to call me/her" = 4 riječi.',
    cat:'reported'
  }
];

let kwtAnswered=new Array(kwtData.length).fill(false);
let kwtCorrect=0;

function norm(s){return s.trim().toLowerCase().replace(/\\s+/g,' ').replace(/['']/g,"'");}

function buildKWT(){
  const container=document.getElementById('kwtContainer');
  container.innerHTML='';
  kwtAnswered=new Array(kwtData.length).fill(false);
  kwtCorrect=0;
  document.getElementById('kwtScore').textContent='0';

  kwtData.forEach((item,idx)=>{
    const div=document.createElement('div');
    div.className='kwt-item';
    div.innerHTML=\`
      <div class="kwt-head">
        <span class="kwt-num">KWT \${idx+1} / \${kwtData.length}</span>
        <span class="kwt-cat \${item.cat}">\${item.cat.toUpperCase()}</span>
      </div>
      <div class="kwt-body">
        <div class="kwt-original">\${item.original}</div>
        <div class="kwt-key">🔑 KEY: \${item.key.toUpperCase()}</div>
        <div class="kwt-partial">\${item.before} <span style="color:var(--t3)">[_____________]</span> \${item.after}</div>
        <input class="kwt-input" id="ki\${idx}" placeholder="upiši 2–5 riječi..." autocomplete="off" autocorrect="off" spellcheck="false"
          onkeydown="if(event.key==='Enter')checkKWT(\${idx})">
        <div class="kwt-btns">
          <button class="kwt-check" onclick="checkKWT(\${idx})">Provjeri</button>
          <button class="kwt-hint" onclick="showKWTHint(\${idx})">💡 Hint</button>
          <button class="kwt-show" onclick="showKWTAnswer(\${idx})">Pokaži odgovor</button>
        </div>
        <div class="kwt-feedback" id="kf\${idx}"></div>
      </div>\`;
    container.appendChild(div);
  });
}

function checkKWT(idx){
  if(kwtAnswered[idx]) return;
  const input=document.getElementById('ki'+idx);
  const val=norm(input.value);
  if(!val){
    const fb=document.getElementById('kf'+idx);
    fb.className='kwt-feedback show hint';
    fb.textContent='Upiši odgovor (2–5 riječi).';
    return;
  }
  const isCorrect=kwtData[idx].answers.some(a=>norm(a)===val);
  kwtAnswered[idx]=true;
  const fb=document.getElementById('kf'+idx);
  if(isCorrect){
    input.classList.add('correct');
    fb.className='kwt-feedback show ok';
    fb.innerHTML='✓ Točno! '+kwtData[idx].explanation;
    kwtCorrect++;
    document.getElementById('kwtScore').textContent=kwtCorrect;
    if(kwtCorrect===kwtData.length)launchConfetti();
  } else {
    input.classList.add('wrong');
    fb.className='kwt-feedback show no';
    fb.innerHTML='✗ Netočno. Točan odgovor: <b>'+kwtData[idx].answers[0]+'</b><br>'+kwtData[idx].explanation;
  }
}

function showKWTHint(idx){
  if(kwtAnswered[idx]) return;
  const fb=document.getElementById('kf'+idx);
  fb.className='kwt-feedback show hint';
  fb.textContent='💡 '+kwtData[idx].hint;
}

function showKWTAnswer(idx){
  if(kwtAnswered[idx]) return;
  const input=document.getElementById('ki'+idx);
  input.value=kwtData[idx].answers[0];
  input.classList.add('correct');
  kwtAnswered[idx]=true;
  const fb=document.getElementById('kf'+idx);
  fb.className='kwt-feedback show ok';
  fb.innerHTML='→ Točan odgovor: <b>'+kwtData[idx].answers[0]+'</b><br>'+kwtData[idx].explanation;
}

function resetAll(){
  buildKWT();
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

let cgAnswered=false;
function cgAnswer(opt,isCorrect){
  if(cgAnswered) return;
  cgAnswered=true;
  document.querySelectorAll('.cg-opt').forEach(o=>o.classList.add('cg-disabled'));
  const fb=document.getElementById('cgFb'),btn=document.getElementById('cgBtn');
  // Both A and B show "warm enough" but only one is correct — this is intentional (like Q2 in P05)
  // Actually checkpoint has A and B both as "warm enough" which is a bug — fix:
  // A: warm enough (correct), B: warm enough (marked correct) — let's fix the options
  if(isCorrect){
    opt.classList.add('cg-correct');
    fb.className='cg-feedback show pass';
    fb.innerHTML='✓ Točno! too cold → not warm enough (suprotni pridjev). "enough" dolazi iza pridjeva: warm enough, ne enough warm.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. A je točno: "warm enough". too cold = not warm enough (suprotni pridjev + enough iza pridjeva). "cold enough" bi značilo suprotno od originala.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}

const tipSections=['sec-strategy','sec-t-passive','sec-t-comparative','sec-t-modal','sec-t-reported','sec-t-wish','sec-t-causative','sec-t-other'];
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

buildKWT();
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