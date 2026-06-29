// Maturiraj.hr — Engleski viša razina
// Poglavlje 07: Modali, Članovii Kvantifikatori
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 7,
  slug: "poglavlje07",
  title: "Modali, \u010clanovii Kvantifikatori",
  subtitle: "Modal verbs \u00b7 a/an/the/\u2205 \u00b7 some/any \u00b7 much/many \u00b7 few/little \u00b7 a lot of",
  blok: 2,
  blokNaziv: "Gramatika",
  prev: 6,
  next: 8,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 7</title>
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
.hero::after{content:'07';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
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
/* MODAL TABLE */
.modal-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:16px 0 24px;border-collapse:separate;border-spacing:0}
.modal-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:10px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.modal-table td{padding:10px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.55}
.modal-table tr:last-child td{border-bottom:none}
.modal-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
.modal-table .modal{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--blue);white-space:nowrap}
.modal-table .meaning{color:var(--t2)}
.modal-table .ex{color:var(--t1);font-style:italic;font-size:12px;margin-top:3px;display:block}
/* ARTICLE TABLE */
.art-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:16px 0 24px}
.art-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden}
.art-head{padding:10px 14px;font-family:var(--mono);font-size:12px;font-weight:700;border-bottom:1px solid var(--bd);text-align:center}
.art-head.indef{background:var(--blue-dim);color:var(--blue);border-bottom-color:var(--blue-border)}
.art-head.def{background:var(--brit-green-dim);color:var(--brit-green);border-bottom-color:var(--brit-green-bd)}
.art-head.zero{background:var(--gold-dim);color:var(--gold);border-bottom-color:var(--gold-bd)}
.art-body{padding:12px 14px}
.art-rule{font-size:12.5px;color:var(--t2);padding:5px 0;border-bottom:1px solid var(--bd);line-height:1.5}
.art-rule:last-child{border-bottom:none}
.art-rule b{color:var(--t1);display:block;font-size:11.5px}
/* QUANT TABLE */
.quant-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:16px 0 24px;border-collapse:separate;border-spacing:0}
.quant-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:10px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.quant-table td{padding:10px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.55}
.quant-table tr:last-child td{border-bottom:none}
.quant-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
.quant-table .word{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--gold)}
.quant-table .use{color:var(--t2);font-size:12px}
.quant-table .ex{color:var(--t1);font-style:italic;font-size:12px;margin-top:2px;display:block}
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
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .28s ease,padding .28s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:600px;padding:14px 16px;border-top-color:var(--bd)}
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
/* DRILL */
.sd-intro{font-family:var(--mono);font-size:12px;color:var(--t2);margin-bottom:14px;padding:10px 14px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2)}
.sd-progress{display:flex;gap:5px;margin-bottom:16px;flex-wrap:wrap}
.sd-dot{width:10px;height:10px;border-radius:2px;background:var(--bg-elevated);border:1px solid var(--bd-mid);transition:all .2s}
.sd-dot.ok{background:var(--green);border-color:var(--green)}.sd-dot.no{background:var(--red);border-color:var(--red)}.sd-dot.cur{border-color:var(--blue);background:var(--blue-dim)}
.sd-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:18px 20px;margin-bottom:14px}
.sd-sent{font-size:15px;font-weight:600;color:var(--t1);margin-bottom:14px;line-height:1.45;font-family:var(--serif)}
.sd-sent code{font-family:var(--mono);font-size:14px;background:var(--bg-input);padding:1px 8px;border-radius:var(--r1);color:var(--amber);font-weight:400}
.sd-btns{display:flex;gap:8px;flex-wrap:wrap}
.sd-btn{flex:1;text-align:center;padding:9px 14px;border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;border:1px solid;transition:all .15s;user-select:none;min-width:80px}
.sd-btn.opt-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.sd-btn.opt-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}.sd-btn.opt-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}.sd-btn.opt-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}.sd-btn.opt-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.sd-btn.opt-amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.sd-btn:hover:not(.picked){opacity:.75;transform:translateY(-1px)}
.sd-btn.correct-pick{background:var(--green);color:#060810;border-color:var(--green);pointer-events:none}.sd-btn.wrong-pick{background:var(--red-dim);color:var(--red);border-color:var(--red-border);pointer-events:none}.sd-btn.reveal-correct{background:var(--green-dim);color:var(--green);border-color:var(--green-border);pointer-events:none}
.sd-fb{display:none;margin-top:10px;font-family:var(--mono);font-size:12px;line-height:1.6;padding:9px 12px;border-radius:var(--r2)}
.sd-fb.show{display:block}.sd-fb.ok{background:var(--green-dim);color:var(--green);border:1px solid var(--green-border)}.sd-fb.no{background:var(--red-dim);color:var(--red);border:1px solid var(--red-border)}
.sd-score{text-align:center;padding:28px;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);display:none}
.sd-score.show{display:block}
.sd-score-num{font-size:48px;font-weight:700;color:var(--blue);font-family:var(--serif);letter-spacing:-2px}
.sd-score-lbl{font-size:13px;color:var(--t2);margin-top:6px}
.sd-retry{margin-top:14px;padding:9px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer}
/* ERROR DRILL */
.err-drill{margin:18px 0}
.err-item{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:10px}
.err-sent{padding:14px 18px;font-size:14.5px;font-weight:600;color:var(--red);letter-bottom:1px solid var(--bd);font-family:var(--serif);border-bottom:1px solid var(--bd)}
.err-btn{display:block;width:100%;text-align:left;padding:10px 18px;font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t3);background:transparent;border:none;cursor:pointer;transition:color .12s}
.err-btn:hover{color:var(--amber)}
.err-fix{display:none;padding:12px 18px;font-family:var(--mono);font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);background:var(--bg-surface)}
.err-fix.show{display:block}.err-fix .correct{color:var(--green);font-weight:600}.err-fix .explain{color:var(--t2);font-size:12px;margin-top:4px;display:block}
/* DISCERE / NAV */
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
.quiz-export-btn{display:inline-flex;align-items:center;gap:7px;padding:7px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t2);cursor:pointer;transition:all .15s;margin-top:10px}
.quiz-export-btn:hover{color:var(--t1);border-color:var(--bd-light)}
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
@media(max-width:560px){.art-grid{grid-template-columns:1fr}}
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}.sd-btns{flex-direction:column}.sd-btn{flex:none;min-width:0}}
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
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span> 07 · Modals, Articles, Quantifiers</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(4)" style="cursor:pointer"><span class="sb-dot"></span>04 · Perfect vremena</div>
  <div class="sb-item done-ch" onclick="navigateChapter(5)" style="cursor:pointer"><span class="sb-dot"></span>05 · Conditionals</div>
  <div class="sb-item done-ch" onclick="navigateChapter(6)" style="cursor:pointer"><span class="sb-dot"></span>06 · Passive, Reported Speech</div>
  <div class="sb-item active" onclick="navigateChapter(7)" style="cursor:pointer"><span class="sb-dot"></span>07 · Modals, Articles, Quantifiers</div>
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
<div class="sb-footer">07 / 20 · modals, articles, quantifiers<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-2</span>
    <span class="bc-sep">/</span><span class="bc-active">modals-articles-quantifiers</span>
  </div>
  <div class="tabs-wrap" role="tablist">
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
      ~40 min
    </div>
  </div>
  <!-- ═══ LAYER 0 — 2 MIN ═══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 07 of 20 · blok 2 — grammar core</div>
      <h1 class="hero-title">Modali, Članovi<br><span>i Kvantifikatori</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">07 / 20</span>
      </div>
      <p class="hero-sub">Modal verbs · a/an/the/∅ · some/any · much/many · few/little · a lot of</p>
      <div class="progress-track"><div class="progress-bar" style="width:35%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Modal verbs</span>
      <span class="pill pill-green">must vs have to</span>
      <span class="pill pill-gold">a / an / the / ∅</span>
      <span class="pill pill-violet">some / any</span>
      <span class="pill pill-amber">much / many / few / little</span>
      <span class="pill pill-red">Exam traps</span>
    </div>
    <div class="sec-label">// tri teme — brzi pregled</div>
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon blue">MODAL</div>
        <div class="stat-name">Modal glagoli</div>
        <div class="stat-desc">can/could · may/might · must/have to · should · will/would — svaki ima specifično značenje i registar</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon green">must</div>
        <div class="stat-name">must vs have to</div>
        <div class="stat-desc"><b style="color:var(--brit-green)">must</b> = unutarnja obveza (ja odlučujem) · <b style="color:var(--brit-green)">have to</b> = vanjska obveza (pravilo, drugi zahtijevaju)</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon gold">a/the</div>
        <div class="stat-name">Članovi</div>
        <div class="stat-desc"><b style="color:var(--gold)">a/an</b> = neodređeno, prvi spomen · <b style="color:var(--gold)">the</b> = određeno, već poznato · <b style="color:var(--gold)">∅</b> = bez člana (opće imenice, vlastita im.)</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon violet">some/any</div>
        <div class="stat-name">Kvantifikatori</div>
        <div class="stat-desc">some (tvrdn./ponude) · any (neg./pitanja) · much/many · few/little · a lot of / lots of</div>
      </div>
    </div>
    <div class="sec-label">// 5 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 modals · articles · quantifiers — essentials</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num" style="background:var(--blue)">1</div><div class="panic-text"><b>Modal + infinitiv BEZ "to".</b> "You must <em>go</em>", ne "must to go". Jedina iznimka: <em>ought to</em> i <em>have to</em> — ti idu s "to".</div></div>
        <div class="panic-step"><div class="panic-num" style="background:var(--brit-green)">2</div><div class="panic-text"><b>must vs have to:</b> must = sam sebi namećem obvezu ("I must study — imam ispit"). have to = netko drugi ili pravilo nameće ("I have to wear a uniform — škola traži").</div></div>
        <div class="panic-step"><div class="panic-num" style="background:var(--gold)">3</div><div class="panic-text"><b>the = već poznato ili jedino.</b> "I saw <em>a</em> dog. <em>The</em> dog was barking." — prvi spomen = a, svaki sljedeći = the. Jedine stvari na svijetu: <em>the sun, the moon, the sky</em>.</div></div>
        <div class="panic-step"><div class="panic-num" style="background:var(--union-red)">4</div><div class="panic-text"><b>much/many:</b> much + nebroj. (much water), many + broj. (many students). U tvrdn. rečenicama oboje zamijeni s "a lot of" — zvuči prirodnije.</div></div>
        <div class="panic-step"><div class="panic-num" style="background:var(--violet)">5</div><div class="panic-text"><b>few vs a few / little vs a little:</b> bez "a" = gotovo ništa (negativno). S "a" = nešto ipak ima (pozitivno). "Few people came" (loše). "A few people came" (OK, bar netko).</div></div>
      </div>
    </div>
    <div class="sec-label">// brzi pregled — klikni i provjeri</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>can · could · may · might — razlike</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>can</b> = sposobnost/mogućnost sadašnjost: <span class="ok">She can swim.</span><br>
        <b>could</b> = sposobnost/mogućnost prošlost ili uljudni zahtjev: <span class="ok">Could you help me?</span><br>
        <b>may</b> = formalna dopuštenje ili manja mogućnost: <span class="ok">You may leave. / It may rain.</span><br>
        <b>might</b> = još manja mogućnost: <span class="ok">It might rain — ali nisam siguran.</span><br><br>
        <span class="bad">Zamka:</span> "Can I...?" = neformalno pitanje za dopuštenje. "May I...?" = formalno.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>a / an / the / ∅ — četiri osnovna pravila</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>a/an</b> = prvi spomen, neodređeno, jedan od mnogih: <span class="ok">I saw a cat.</span><br>
        <b>the</b> = drugi spomen, jedino/poznato, superlativ: <span class="ok">The cat ran away. The biggest city.</span><br>
        <b>∅</b> = vlastita imena, jezici, sport, obroci, apstraktne imenice u množini: <span class="ok">I play football. She speaks French.</span><br><br>
        <span class="bad">Zamka:</span> <span style="color:var(--red)">the life, the music</span> (apstraktno, opće) → <span class="ok">life is beautiful · music is powerful</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>some / any / much / many / few / little</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>some</b> = tvrdn. + ponude/zahtjevi: <span class="ok">I have some milk. Would you like some?</span><br>
        <b>any</b> = neg. + pitanja: <span class="ok">I don't have any milk. Do you have any?</span><br>
        <b>much</b> + nebroj. neg./pitanja: <span class="ok">Not much time. How much water?</span><br>
        <b>many</b> + broj. neg./pitanja: <span class="ok">Not many students. How many chairs?</span><br>
        <b>a few</b> = malo (ali ipak nešto) + brojivo: <span class="ok">A few friends came.</span><br>
        <b>a little</b> = malo (ali ipak nešto) + nebrojivo: <span class="ok">A little patience goes a long way.</span>
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Gramatiku u detalju</div></div></div>
      <div class="cg-body">
        <div class="cg-question">Koja je rečenica TOČNA?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">A</div>I must to go now — I have a meeting.</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">B</div>Few people came to the party — it was great.</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)" onkeydown="if(event.key==='Enter')cgAnswer(this,true)"><div class="cg-letter">C</div>She had to wear a uniform at her old school.</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)" onkeydown="if(event.key==='Enter')cgAnswer(this,false)"><div class="cg-letter">D</div>I don't have some money left.</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Gramatiku u detalju →</button>
      </div>
    </div>
    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(6)">← Poglavlje 06</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Gramatika u detalju →</span>
    </div>
  </div><!-- /l0 -->
  <!-- ═══ LAYER 1 — GRAMATIKA ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-modal-table')"><span class="tip-dot"></span>Modali — tablica</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-must-haveto')"><span class="tip-dot"></span>must vs have to</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-modal-past')"><span class="tip-dot"></span>Modali u prošlosti</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-articles')"><span class="tip-dot"></span>Članovi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-art-zero')"><span class="tip-dot"></span>Nulti član</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-quantifiers')"><span class="tip-dot"></span>Kvantifikatori</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-fewlittle')"><span class="tip-dot"></span>few / little</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-7" onclick="tipScroll('sec-dtree')"><span class="tip-dot"></span>Decision tree</div>
    </div>

    <!-- MODAL TABLICA -->
    <div id="sec-modal-table" class="sec-label">// modal verbs — svi na jednom pogledu</div>
    <p class="prose">Modal glagoli su pomoćni glagoli koji ne uzimaju <em>-s</em> u 3. licu jednine i uvijek dolaze s <strong>infinitivom bez "to"</strong>. Svaki modal ima nijanse značenja koje variraju ovisno o kontekstu.</p>
    <table class="modal-table">
      <thead><tr><th>Modal</th><th>Glavna značenja</th><th>Primjer</th></tr></thead>
      <tbody>
        <tr><td class="modal">can</td><td class="meaning">Sposobnost (sadašnjost) · neformalno dopuštenje · mogućnost</td><td><span class="ex">She can speak three languages.<br>Can I use your phone?</span></td></tr>
        <tr><td class="modal">could</td><td class="meaning">Sposobnost (prošlost) · uljudni zahtjev · hipotetična mogućnost</td><td><span class="ex">He could run fast as a child.<br>Could you open the window?</span></td></tr>
        <tr><td class="modal">may</td><td class="meaning">Formalno dopuštenje · mogućnost (~50%)</td><td><span class="ex">You may leave now.<br>It may rain this afternoon.</span></td></tr>
        <tr><td class="modal">might</td><td class="meaning">Slabija mogućnost (~30%) · uljudni prijedlog</td><td><span class="ex">She might be at home.<br>You might want to try this.</span></td></tr>
        <tr><td class="modal">must</td><td class="meaning">Unutarnja obveza · logički zaključak (sigurnost)</td><td><span class="ex">I must call her — I promised.<br>You must be tired after that trip.</span></td></tr>
        <tr><td class="modal">have to</td><td class="meaning">Vanjska obveza (pravilo, drugi zahtijeva)</td><td><span class="ex">I have to wear a uniform at work.<br>She had to leave early yesterday.</span></td></tr>
        <tr><td class="modal">should</td><td class="meaning">Savjet · umjerena obveza · očekivanje</td><td><span class="ex">You should see a doctor.<br>The package should arrive tomorrow.</span></td></tr>
        <tr><td class="modal">ought to</td><td class="meaning">Savjet (formalniji od should) · moralna obveza</td><td><span class="ex">You ought to apologise to her.<br>We ought to help those in need.</span></td></tr>
        <tr><td class="modal">will</td><td class="meaning">Budućnost · odluka u trenutku · obećanje · navika (sadašnjost)</td><td><span class="ex">I'll help you with that.<br>She will talk for hours if you let her.</span></td></tr>
        <tr><td class="modal">would</td><td class="meaning">Uljudni zahtjev · hipotetično · prošla navika</td><td><span class="ex">Would you mind closing the door?<br>He would walk to school every day.</span></td></tr>
        <tr><td class="modal">shall</td><td class="meaning">Ponuda ili prijedlog (formalno, 1. lice)</td><td><span class="ex">Shall I open the window?<br>Shall we begin?</span></td></tr>
        <tr><td class="modal">need (modal)</td><td class="meaning">Potreba (neg.) — formalniji</td><td><span class="ex">You needn't worry about it.<br>Need I say more?</span></td></tr>
      </tbody>
    </table>

    <!-- MUST VS HAVE TO -->
    <div id="sec-must-haveto" class="sec-label" style="margin-top:36px">// must vs have to — unutarnja vs vanjska obveza</div>
    <p class="prose">Ovo je najčešća razlika na ispitu. <em>Must</em> i <em>have to</em> oba znače obvezu, ali izvoru obveze dolaze s različitih mjesta.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--blue-dim);color:var(--blue);font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:1px;border-bottom:1px solid var(--blue-border)">MUST — unutarnja obveza</div>
        <div style="padding:14px">
          <div style="font-size:13px;color:var(--t2);margin-bottom:10px;line-height:1.6">Govornik sam sebi nameće obvezu — osobni osjećaj, odluka, uvjerenje.</div>
          <div style="font-size:13px;color:var(--t1);font-style:italic;margin-bottom:6px">"I must study tonight." <span style="color:var(--t3);font-style:normal;font-size:12px">(sam sebi kažem)</span></div>
          <div style="font-size:13px;color:var(--t1);font-style:italic">"You must try this cake — it's amazing!" <span style="color:var(--t3);font-style:normal;font-size:12px">(preporuka s entuzijazmom)</span></div>
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--brit-green-dim);color:var(--brit-green);font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:1px;border-bottom:1px solid var(--brit-green-bd)">HAVE TO — vanjska obveza</div>
        <div style="padding:14px">
          <div style="font-size:13px;color:var(--t2);margin-bottom:10px;line-height:1.6">Obveza dolazi izvana — pravilo, zakon, drugi zahtijeva.</div>
          <div style="font-size:13px;color:var(--t1);font-style:italic;margin-bottom:6px">"I have to wear a uniform." <span style="color:var(--t3);font-style:normal;font-size:12px">(pravilo škole/posla)</span></div>
          <div style="font-size:13px;color:var(--t1);font-style:italic">"She had to leave early." <span style="color:var(--t3);font-style:normal;font-size:12px">(prošlost — have to ima prošlo)</span></div>
        </div>
      </div>
    </div>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">mustn't vs don't have to — suprotna značenja!</div>
        <div class="callout-text">
          <b>mustn't</b> = zabrana (ne smiješ!): <span style="color:var(--red)">You mustn't smoke here.</span> (zabranjeno)<br>
          <b>don't have to</b> = nije potrebno (ali možeš ako hoćeš): <span style="color:var(--green)">You don't have to come.</span> (slobodan si)<br>
          Ovo je najčešća semantička zamka na ispitu — suprotna su značenja, ne sinonimi!
        </div>
      </div>
    </div>

    <!-- MODALI U PROŠLOSTI -->
    <div id="sec-modal-past" class="sec-label" style="margin-top:36px">// modali + have + particip — prošlost i zaključci</div>
    <p class="prose">Modal + <em>have</em> + past participle izražava zaključke, kritiku ili žaljenje vezano za <strong>prošlost</strong>. Ovo je napredna struktura česta u reading tekstovima i gap-fill zadacima.</p>
    <table class="modal-table">
      <thead><tr><th>Struktura</th><th>Značenje</th><th>Primjer</th></tr></thead>
      <tbody>
        <tr><td class="modal">must have done</td><td class="meaning">Siguran zaključak o prošlosti (logika)</td><td><span class="ex">She must have left early — her coat is gone.</span></td></tr>
        <tr><td class="modal">can't have done</td><td class="meaning">Siguran negativan zaključak o prošlosti</td><td><span class="ex">He can't have seen her — he was abroad.</span></td></tr>
        <tr><td class="modal">might/may have done</td><td class="meaning">Mogućnost u prošlosti (nismo sigurni)</td><td><span class="ex">She might have missed the train.</span></td></tr>
        <tr><td class="modal">should have done</td><td class="meaning">Kritika ili žaljenje — trebalo je napraviti (a nije)</td><td><span class="ex">You should have told me earlier!</span></td></tr>
        <tr><td class="modal">shouldn't have done</td><td class="meaning">Žaljenje — nije trebalo napraviti (a jest)</td><td><span class="ex">I shouldn't have eaten so much.</span></td></tr>
        <tr><td class="modal">could have done</td><td class="meaning">Moglo je biti napravljeno (a nije)</td><td><span class="ex">You could have called — I was worried.</span></td></tr>
        <tr><td class="modal">would have done</td><td class="meaning">Prošla hipotetična radnja (3rd conditional)</td><td><span class="ex">I would have helped if I had known.</span></td></tr>
      </tbody>
    </table>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Prepoznavanje na ispitu</div>
        <div class="callout-text">Vidiš <b>modal + have + past participle</b> → odmah pitaj: radi li se o zaključku (must/can't), žaljenju (should/could), ili mogućnosti (might/may)? Kontekst ti govori koji modal odabrati.</div>
      </div>
    </div>

    <!-- MODAL PAST: KWT SIGNALS -->
    <div style="background:var(--bg-card);border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:16px 0 8px">
      <div style="padding:10px 16px;background:var(--blue-dim);border-bottom:1px solid var(--blue-border);font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase">Modal + have — KWT signali i dedukcija iz konteksta</div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:var(--bg-input)">
              <th style="padding:9px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);border-bottom:1px solid var(--bd-mid);white-space:nowrap">Forma</th>
              <th style="padding:9px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--union-red);border-bottom:1px solid var(--bd-mid)">Kontekstualni signal u tekstu</th>
              <th style="padding:9px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--blue);border-bottom:1px solid var(--bd-mid)">KWT key word koji signalizira</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--bd)">
              <td style="padding:9px 14px;font-family:var(--mono);font-weight:700;color:var(--t1);white-space:nowrap">must have done</td>
              <td style="padding:9px 14px;color:var(--t2)">Dokaz u rečenici koji logički upućuje na zaključak<br><span style="color:var(--t3);font-size:12px;font-style:italic">"Her coat is gone" → she must have left</span></td>
              <td style="padding:9px 14px;font-family:var(--mono);color:var(--brit-green)">MUST · CERTAIN · OBVIOUSLY</td>
            </tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)">
              <td style="padding:9px 14px;font-family:var(--mono);font-weight:700;color:var(--t1);white-space:nowrap">can't have done</td>
              <td style="padding:9px 14px;color:var(--t2)">Nešto je bilo nemoguće — postoji alibi ili kontradikcija<br><span style="color:var(--t3);font-size:12px;font-style:italic">"He was abroad" → he can't have seen her</span></td>
              <td style="padding:9px 14px;font-family:var(--mono);color:var(--brit-green)">IMPOSSIBLE · CAN'T · COULDN'T</td>
            </tr>
            <tr style="border-bottom:1px solid var(--bd)">
              <td style="padding:9px 14px;font-family:var(--mono);font-weight:700;color:var(--t1);white-space:nowrap">should have done</td>
              <td style="padding:9px 14px;color:var(--t2)">Kritika ili žaljenje — radnja se nije dogodila, a trebala je<br><span style="color:var(--t3);font-size:12px;font-style:italic">"You didn't tell me" → you should have told me</span></td>
              <td style="padding:9px 14px;font-family:var(--mono);color:var(--brit-green)">SHOULD · OUGHT TO · REGRET</td>
            </tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)">
              <td style="padding:9px 14px;font-family:var(--mono);font-weight:700;color:var(--t1);white-space:nowrap">could have done</td>
              <td style="padding:9px 14px;color:var(--t2)">Propuštena mogućnost — radnja je bila moguća, ali se nije dogodila<br><span style="color:var(--t3);font-size:12px;font-style:italic">"You didn't call" → you could have called</span></td>
              <td style="padding:9px 14px;font-family:var(--mono);color:var(--brit-green)">COULD · POSSIBLE · ABLE TO</td>
            </tr>
            <tr style="background:rgba(255,255,255,.015)">
              <td style="padding:9px 14px;font-family:var(--mono);font-weight:700;color:var(--t1);white-space:nowrap">might have done</td>
              <td style="padding:9px 14px;color:var(--t2)">Nesigurna mogućnost — ne znamo sigurno što se dogodilo<br><span style="color:var(--t3);font-size:12px;font-style:italic">"She's late, maybe..." → she might have missed the train</span></td>
              <td style="padding:9px 14px;font-family:var(--mono);color:var(--brit-green)">MIGHT · PERHAPS · POSSIBLY</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style="padding:10px 16px;background:var(--bg-input);border-top:1px solid var(--bd);font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">
        <b style="color:var(--union-red)">must have</b> vs <b style="color:var(--union-red)">can't have</b> — oba su sigurni zaključci, samo suprotnog smjera. Pitaj se: "Je li to logično moguće?" → DA → must have · NE → can't have.<br>
        <b style="color:var(--blue)">should have</b> vs <b style="color:var(--blue)">could have</b> — should = kritika (trebalo je) · could = propuštena mogućnost (moglo je). Razlika: should nosi prijekor, could je neutralniji.
      </div>
    </div>

    <!-- ČLANOVI -->
    <div id="sec-articles" class="sec-label" style="margin-top:36px">// članovi — a / an / the / ∅</div>
    <p class="prose">Engleski ima tri tipa člana: neodređeni (a/an), određeni (the) i nulti (∅). Pravilo određenosti temelji se na tome je li slušatelju poznat referent imenice.</p>
    <div class="art-grid">
      <div class="art-card">
        <div class="art-head indef">a / an</div>
        <div class="art-body">
          <div class="art-rule"><b>Prvi spomen</b>I saw a dog yesterday.</div>
          <div class="art-rule"><b>Jedan od mnogih</b>She is a teacher. (jedna od mnogih)</div>
          <div class="art-rule"><b>a + suglasnik · an + samoglasnik</b>a university (/ju/) · an hour (/au/)</div>
          <div class="art-rule"><b>NE s množinom</b>✗ a dogs · ✓ dogs</div>
        </div>
      </div>
      <div class="art-card">
        <div class="art-head def">the</div>
        <div class="art-body">
          <div class="art-rule"><b>Drugi spomen</b>The dog was barking.</div>
          <div class="art-rule"><b>Jedino na svijetu</b>the sun · the moon · the sky</div>
          <div class="art-rule"><b>Superlativ</b>the best · the most beautiful</div>
          <div class="art-rule"><b>Redni brojevi</b>the first · the second</div>
          <div class="art-rule"><b>Rijeke, oceani, planine (mn.)</b>the Thames · the Alps</div>
        </div>
      </div>
      <div class="art-card">
        <div class="art-head zero">∅ nulti</div>
        <div class="art-body">
          <div class="art-rule"><b>Vlastita imena</b>London · Croatia · Maria</div>
          <div class="art-rule"><b>Jezici i sport</b>She speaks French. I play tennis.</div>
          <div class="art-rule"><b>Obroci i prijevoz</b>have breakfast · go by bus</div>
          <div class="art-rule"><b>Apstraktne + nebroj. (opće)</b>Life is short. Music heals.</div>
          <div class="art-rule"><b>Množina (opće)</b>Dogs are loyal animals.</div>
        </div>
      </div>
    </div>
    <div class="callout callout-warn">
      <div class="callout-icon">🚫</div>
      <div class="callout-body">
        <div class="callout-title">Najčešće greške s članovima</div>
        <div class="callout-text">
          <span style="color:var(--red)">✗ She is the teacher.</span> (nije određena — jedna od mnogih) → <span style="color:var(--green)">✓ She is a teacher.</span><br>
          <span style="color:var(--red)">✗ I love the music.</span> (opće) → <span style="color:var(--green)">✓ I love music.</span><br>
          <span style="color:var(--red)">✗ He goes to the school by the bus.</span> → <span style="color:var(--green)">✓ He goes to school by bus.</span><br>
          <span style="color:var(--red)">✗ a useful hour</span> → <span style="color:var(--green)">✓ a useful hour</span> (/j/ suglasnik!) · <span style="color:var(--green)">✓ an hour</span> (/a/ suglasnik ne izgovaramo)
        </div>
      </div>
    </div>

    <!-- NULTI ČLAN — POSEBNI SLUČAJEVI -->
    <div id="sec-art-zero" class="sec-label" style="margin-top:36px">// nulti član — posebni i zamjenski slučajevi</div>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 20px">
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:10px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--gold);border-right:1px solid var(--bd);background:var(--bg-surface)">S članom (the / a)</div>
        <div style="padding:10px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--brit-green);background:var(--bg-surface)">Bez člana (∅)</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">go to <b style="color:var(--t1)">the</b> hospital (kao posjetitelj)</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">go to <b style="color:var(--brit-green)">∅</b> hospital (kao pacijent)</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">go to <b style="color:var(--t1)">the</b> school (kao roditelj/posjetitelj)</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">go to <b style="color:var(--brit-green)">∅</b> school (kao učenik)</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">go to <b style="color:var(--t1)">the</b> church (kao turist)</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">go to <b style="color:var(--brit-green)">∅</b> church (na bogoslužje)</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">in <b style="color:var(--t1)">the</b> morning/evening</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">at <b style="color:var(--brit-green)">∅</b> night / at <b style="color:var(--brit-green)">∅</b> noon</div></div>
    </div>
    <div class="callout callout-info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Geografska pravila s the</div>
        <div class="callout-text"><b>The</b> uz: rijeke (the Nile), oceani (the Pacific), kanali, planinski lanci (the Alps), grupacije otoka (the Philippines), države s "Republic/Kingdom" (the UK, the USA), novine (the Guardian).<br>
        <b>∅</b> uz: gradove, kontinente, planine (Mont Blanc), jezera, otoke (Cuba).</div>
      </div>
    </div>

    <!-- KVANTIFIKATORI -->
    <div id="sec-quantifiers" class="sec-label" style="margin-top:36px">// kvantifikatori — some, any, much, many, a lot of</div>
    <p class="prose"><em>Some</em> i <em>any</em> dolaze s brojiivim i nebrojiivim imenicama. Izbor ovisi o tipu rečenice i o namjeri govornika.</p>
    <table class="quant-table">
      <thead><tr><th>Kvantifikator</th><th>Kada koristiti</th><th>Primjer</th></tr></thead>
      <tbody>
        <tr>
          <td class="word">some</td>
          <td class="use">Tvrdne rečenice · ponude · zahtjevi gdje se očekuje "da"</td>
          <td><span class="ex">I have some coffee. / Would you like some cake? / Could I have some water?</span></td>
        </tr>
        <tr>
          <td class="word">any</td>
          <td class="use">Negativne rečenice · pitanja (neutralno) · uvjetne rečenice</td>
          <td><span class="ex">I don't have any money. / Do you have any questions? / If you have any problems...</span></td>
        </tr>
        <tr>
          <td class="word">much</td>
          <td class="use">Nebrojivo + neg./pitanja (u tvrdn. → a lot of)</td>
          <td><span class="ex">Not much time. / How much water? / (tvrdn.: a lot of water ✓)</span></td>
        </tr>
        <tr>
          <td class="word">many</td>
          <td class="use">Brojivo + neg./pitanja (u tvrdn. → a lot of)</td>
          <td><span class="ex">Not many people. / How many chairs? / (tvrdn.: a lot of people ✓)</span></td>
        </tr>
        <tr>
          <td class="word">a lot of / lots of</td>
          <td class="use">Brojivo i nebrojivo + tvrdne (neformalno) · neg. i pitanja OK</td>
          <td><span class="ex">She has a lot of friends. / There isn't a lot of time.</span></td>
        </tr>
        <tr>
          <td class="word">plenty of</td>
          <td class="use">Brojivo i nebrojivo · "dovoljno i više" (pozitivno)</td>
          <td><span class="ex">There's plenty of food for everyone.</span></td>
        </tr>
        <tr>
          <td class="word">no</td>
          <td class="use">Direktno negativno (= not any) · naglašenije</td>
          <td><span class="ex">There is no time. / She has no money at all.</span></td>
        </tr>
      </tbody>
    </table>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">some u pitanjima — kada?</div>
        <div class="callout-text">Koristiš <b>some</b> u pitanjima kad <b>očekuješ pozitivan odgovor</b> ili nudiš nešto:<br>
        "Would you like <b>some</b> tea?" (nudim → some) · "Can I have <b>some</b> more?" (zahtijevam → some)<br>
        "Do you have <b>any</b> tea?" (neutralno, ne znam postoji li → any)</div>
      </div>
    </div>

    <!-- FEW / LITTLE -->
    <div id="sec-fewlittle" class="sec-label" style="margin-top:36px">// few / little vs a few / a little — pozitivno vs negativno</div>
    <p class="prose">Razlika između <em>few</em> i <em>a few</em> (te <em>little</em> i <em>a little</em>) je nijansa stava, ne količina. Oboje znači "malo" ali s različitim emotivnim nabojem.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:16px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--red-dim);color:var(--red);font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:1px;border-bottom:1px solid var(--red-border)">few / little — negativno</div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1)">few</b> + brojivo = gotovo ništa, premalo</div>
          <div style="font-size:13px;color:var(--t1);font-style:italic">"Few students passed." <span style="color:var(--t3);font-style:normal;font-size:12px">(= premalo, loše)</span></div>
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1)">little</b> + nebrojivo = gotovo ništa</div>
          <div style="font-size:13px;color:var(--t1);font-style:italic">"There is little hope." <span style="color:var(--t3);font-style:normal;font-size:12px">(= skoro nema)</span></div>
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--brit-green-dim);color:var(--brit-green);font-family:var(--mono);font-size:10.5px;font-weight:700;letter-spacing:1px;border-bottom:1px solid var(--brit-green-bd)">a few / a little — pozitivno</div>
        <div style="padding:14px;display:flex;flex-direction:column;gap:8px">
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1)">a few</b> + brojivo = nešto, dovoljno</div>
          <div style="font-size:13px;color:var(--t1);font-style:italic">"A few students passed." <span style="color:var(--t3);font-style:normal;font-size:12px">(= nešto ih je, dobro)</span></div>
          <div style="font-size:13px;color:var(--t2)"><b style="color:var(--t1)">a little</b> + nebrojivo = nešto ipak ima</div>
          <div style="font-size:13px;color:var(--t1);font-style:italic">"There is a little hope." <span style="color:var(--t3);font-style:normal;font-size:12px">(= ima nešto, ne odustaj)</span></div>
        </div>
      </div>
    </div>
    <div class="callout callout-info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Brzi test za few/little</div>
        <div class="callout-text">Zamijeni s "almost none" — ako rečenica zvuči točno → <b>few/little</b>.<br>
        Zamijeni sa "some" — ako zvuči točno → <b>a few / a little</b>.<br>
        "Few people came" → "Almost no one came" ✓ → <b>few</b> (negativno).<br>
        "A few people came" → "Some people came" ✓ → <b>a few</b> (pozitivno).</div>
      </div>
    </div>

    <!-- DECISION TREE -->
    <div id="sec-dtree" class="sec-label" style="margin-top:36px">// decision tree — koji modal / koji kvantifikator</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px">
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:10px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase">Must ili have to?</div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;font-size:13px;font-weight:600;color:var(--t1)">Tko nameće obvezu?</div>
        <div style="padding-left:16px;border-left:2px solid var(--blue);margin-left:6px">
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:4px">Ja sam sebi →</div>
          <div style="background:var(--blue-dim);border:1px solid var(--blue-border);border-radius:var(--r2);padding:9px 12px;color:var(--blue);font-size:12.5px;font-weight:600">→ <b>must</b><br><span style="font-size:11px;font-weight:400">"I must call her."</span></div>
        </div>
        <div style="padding-left:16px;border-left:2px solid var(--brit-green);margin-left:6px">
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:4px">Pravilo / drugi →</div>
          <div style="background:var(--brit-green-dim);border:1px solid var(--brit-green-bd);border-radius:var(--r2);padding:9px 12px;color:var(--brit-green);font-size:12.5px;font-weight:600">→ <b>have to</b><br><span style="font-size:11px;font-weight:400">"I have to wear uniform."</span></div>
        </div>
        <div style="background:var(--red-dim);border:1px solid var(--red-border);border-radius:var(--r2);padding:9px 12px;color:var(--red);font-size:12px;font-family:var(--mono);margin-top:2px">⚠ mustn't = zabranjeno!<br>don't have to = nije potrebno</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:10px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--gold);text-transform:uppercase">some ili any?</div>
        <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:12px 14px;font-size:13px;font-weight:600;color:var(--t1)">Koja vrsta rečenice?</div>
        <div style="padding-left:16px;border-left:2px solid var(--brit-green);margin-left:6px">
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:4px">Tvrdn. / ponuda / zahtjev →</div>
          <div style="background:var(--brit-green-dim);border:1px solid var(--brit-green-bd);border-radius:var(--r2);padding:9px 12px;color:var(--brit-green);font-size:12.5px;font-weight:600">→ <b>some</b><br><span style="font-size:11px;font-weight:400">"Would you like some?"</span></div>
        </div>
        <div style="padding-left:16px;border-left:2px solid var(--gold);margin-left:6px">
          <div style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:4px">Neg. / neutralno pitanje →</div>
          <div style="background:var(--gold-dim);border:1px solid var(--gold-bd);border-radius:var(--r2);padding:9px 12px;color:var(--gold);font-size:12.5px;font-weight:600">→ <b>any</b><br><span style="font-size:11px;font-weight:400">"Do you have any?"</span></div>
        </div>
        <div style="background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r2);padding:9px 12px;color:var(--amber);font-size:12px;font-family:var(--mono);margin-top:2px">few/little = negativno · a few/a little = pozitivno</div>
      </div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Discere — vježbaj modals i articles</div></div>
      <div class="discere-body">
        <div class="discere-desc">Filter: <b>modal verbs</b> pa <b>articles</b> pa <b>quantifiers</b> → 8 zadataka po skupini. Griješiš na must/have to? Vrati se na sekciju iznad.</div>
        <button class="discere-btn" onclick="openDiscere()">Otvori Discere →</button>
      </div>
    </div>
    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Vježbaj →</span>
    </div>
  </div><!-- /l1 -->
  <!-- ═══ LAYER 2 — VJEŽBAJ ═══ -->
  <div class="layer" id="l2">
    <div class="sec-label">// speed drill</div>
    <div class="sd-intro">9 zadataka — modali, must/have to, modal+have, članak, some/any, few/little. Odaberi točan oblik.</div>
    <div class="sd-progress" id="drillDots"></div>
    <div id="drillQ"></div>
    <div class="sd-score" id="drillScore">
      <div class="sd-score-num" id="drillNum">0/9</div>
      <div class="sd-score-lbl" id="drillLbl">Gotov si! Provjeri greške, pa idi na kviz.</div>
      <button class="sd-retry" onclick="resetDrill()">↺ Ponovi drill</button><br>
      <button class="quiz-export-btn" onclick="exportResults()" id="exportBtn" style="display:none">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M6.5 1v7M4 6l2.5 2.5L9 6M2 10h9" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Spremi rezultate kao sliku
      </button>
    </div>

    <div class="sec-label" style="margin-top:36px">// ispravi grešku</div>
    <p style="font-size:12.5px;color:var(--t2);margin-bottom:14px;font-family:var(--mono)">Svaka rečenica ima točno jednu grešku.</p>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;font-family:var(--mono);font-size:11px;color:var(--t3)">
      Otvoreno ispravaka: <span id="errCount" style="color:var(--blue);font-weight:700">0 / 7</span>
      <span id="errAllDone" style="display:none;color:var(--green);font-weight:700">✓ Sve provjeri!</span>
    </div>
    <div class="err-drill">
      <div class="err-item">
        <div class="err-sent">You must to finish your homework before dinner.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">You must finish your homework before dinner.</span><span class="explain">Modal glagoli ne dolaze s "to" — infinitiv je bez "to". Iznimka: have to i ought to.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">You mustn't come if you don't want to — it's optional.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">You don't have to come if you don't want to — it's optional.</span><span class="explain">Mustn't = zabranjeno (ne smiješ). Don't have to = nije potrebno (slobodan si). Suprotna su značenja!</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">She should told me about the meeting earlier.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">She should have told me about the meeting earlier.</span><span class="explain">Žaljenje zbog prošlosti = should have + past participle. "Should told" je greška — nedostaje "have".</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">I saw a dog in the park. A dog was barking at me.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">I saw a dog in the park. The dog was barking at me.</span><span class="explain">Drugi spomen iste imenice → određeni član "the". Uveli smo psa s "a" (prvi spomen), sad je poznat → "the".</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">She loves the music and plays the piano every day.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">She loves music and plays the piano every day.</span><span class="explain">"Music" kao opći pojam = nulti član (∅). "The piano" je točno — instrumenti idu s "the" u kontekstu sviranja.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">There are few students in the class today — we can start a discussion.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">There are a few students in the class today — we can start a discussion.</span><span class="explain">"Few" = gotovo nitko (negativno) — ne bi se mogla voditi rasprava. "A few" = neki, dovoljno (pozitivno) — kontekst traži pozitivno.</span></div>
      </div>
      <div class="err-item">
        <div class="err-sent">I don't have some time to help you right now.</div>
        <button class="err-btn" onclick="toggleErr(this)">▶ Pokaži ispravak</button>
        <div class="err-fix"><span class="correct">I don't have any time to help you right now.</span><span class="explain">U negativnim rečenicama koristi se "any", ne "some". Some ide u tvrdn. rečenicama i ponudama.</span></div>
      </div>
    </div>

    <div class="sec-label" style="margin-top:36px">// kviz</div>
    <div class="quiz-intro"><strong>7 pitanja</strong> — modali, must/have to, modal+have, a/the/∅, some/any, few/little, miješano.</div>

    <div class="q-block" id="q1">
      <div class="q-head"><div class="q-meta">pitanje 01 · modal · must vs have to</div><div class="q-text">I _____ take medicine three times a day — the doctor prescribed it.</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>must</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>have to</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>should</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>need</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — Doktor je propisao (vanjska obveza) → have to. Must bi značilo da sam si ja nametnuo tu obvezu. Should = savjet, slabiji od obveze.</div></div>
    </div>

    <div class="q-block" id="q2">
      <div class="q-head"><div class="q-meta">pitanje 02 · modal + have · zaključak o prošlosti</div><div class="q-text">She didn't answer my calls all day. She _____ been very busy.</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">A</div>must have</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">B</div>should have</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">C</div>could have</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>would have</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — Siguran logički zaključak o prošlosti → must have been. Should have = žaljenje/kritika. Could have = moglo je biti. Would have = 3rd conditional.</div></div>
    </div>

    <div class="q-block" id="q3">
      <div class="q-head"><div class="q-meta">pitanje 03 · modal · zabrana vs nepotrebnost</div><div class="q-text">The entrance is free, so you _____ buy a ticket.</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>mustn't</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">B</div>don't have to</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">C</div>shouldn't</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>can't</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — Ulaz je besplatan, ticket nije potreban ali nije ni zabranjen → don't have to (nije potrebno). Mustn't bi značilo "zabranjen je ulaz" — suprotno od smisla!</div></div>
    </div>

    <div class="q-block" id="q4">
      <div class="q-head"><div class="q-meta">pitanje 04 · član · a / the / ∅</div><div class="q-text">She works as _____ engineer at _____ largest tech company in the country.</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>the / a</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">B</div>a / a</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">C</div>an / the</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>∅ / the</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — "engineer" počinje samoglasnikom /e/ → an. "Largest" = superlativ → the. She is an engineer (jedna od mnogih). The largest = jedino, superlativ.</div></div>
    </div>

    <div class="q-block" id="q5">
      <div class="q-head"><div class="q-meta">pitanje 05 · član · nulti</div><div class="q-text">_____ life is short, so make the most of _____ time you have.</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>The / a</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">B</div>∅ / the</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">C</div>A / the</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>The / the</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — "Life" (opći pojam, apstraktno) → ∅ nulti član. "The time you have" → određeno (specificiramo kojeg vremena: onog kojeg imaš) → the.</div></div>
    </div>

    <div class="q-block" id="q6">
      <div class="q-head"><div class="q-meta">pitanje 06 · kvantifikator · some / any / few / little</div><div class="q-text">There is _____ hope left — the situation is almost impossible to fix.</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">A</div>a little</div>
        <div class="q-opt" onclick="answer(this,'q6','correct')"><div class="q-letter">B</div>little</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">C</div>few</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">D</div>a few</div>
      </div>
      <div class="q-expl" id="qe6"><div class="expl-ok">✓ Točno — "Almost impossible to fix" = negativan kontekst → little (gotovo ništa nade). A little bi značilo "ima nešto nade" (pozitivno). Few/a few idu uz brojivo, a "hope" je nebrojivo.</div></div>
    </div>

    <div class="q-block" id="q7">
      <div class="q-head"><div class="q-meta">pitanje 07 · miješano · modal + should have</div><div class="q-text">I completely forgot about the meeting. I _____ written it in my calendar.</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">A</div>must have</div>
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">B</div>could</div>
        <div class="q-opt" onclick="answer(this,'q7','correct')"><div class="q-letter">C</div>should have</div>
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">D</div>might have</div>
      </div>
      <div class="q-expl" id="qe7"><div class="expl-ok">✓ Točno — Žaljenje zbog propuštene prošle radnje → should have + past participle. "I should have written" = trebao sam zapisati (a nisam). Must have = sigurni zaključak. Might have = mogućnost.</div></div>
    </div>

    <!-- Q8 + Q9: Modal + have KWT -->
    <div class="q-block" id="q8" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">pitanje 08 · dedukcija · must have / can't have</div>
        <div class="q-text">The lights are off and the car is gone. Tom _____ home — there's no other explanation.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q8','wrong')"><div class="q-letter">A</div>can't have gone</div>
        <div class="q-opt" onclick="answer(this,'q8','correct')"><div class="q-letter">B</div>must have gone</div>
        <div class="q-opt" onclick="answer(this,'q8','wrong')"><div class="q-letter">C</div>should have gone</div>
        <div class="q-opt" onclick="answer(this,'q8','wrong')"><div class="q-letter">D</div>might have gone</div>
      </div>
      <div class="q-expl" id="qe8">
        <div class="expl-ok">✓ Točno — <b>must have gone</b>. Dokaz u kontekstu: "lights off, car gone, no other explanation" → siguran logički zaključak = must have. A) "can't have gone" — suprotno; to bi značilo da je nemoguće da je otišao, ali kontekst kaže suprotno. C) "should have gone" — kritika/žaljenje, ne zaključak. D) "might have gone" — nesigurna mogućnost; ali rečenica kaže "there's no other explanation" → to isključuje might.</div>
      </div>
    </div>

    <div class="q-block" id="q9" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">pitanje 09 · KWT — should have / could have</div>
        <div class="q-text">
          Complete the second sentence using the word <b>SHOULD</b>.<br>
          <span style="font-family:var(--mono);font-size:12px;color:var(--t2)">Original: It was wrong of you not to tell her the truth.<br>
          SHOULD: You __________ her the truth.</span>
        </div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q9','wrong')"><div class="q-letter">A</div>should tell</div>
        <div class="q-opt" onclick="answer(this,'q9','wrong')"><div class="q-letter">B</div>should be telling</div>
        <div class="q-opt" onclick="answer(this,'q9','correct')"><div class="q-letter">C</div>should have told</div>
        <div class="q-opt" onclick="answer(this,'q9','wrong')"><div class="q-letter">D</div>should have been told</div>
      </div>
      <div class="q-expl" id="qe9">
        <div class="expl-ok">✓ Točno — <b>should have told</b>. Original govori o prošloj radnji koja se nije dogodila ("was wrong not to tell") → kritika o prošlosti = should have + past participle. A) "should tell" — Present/Future, ali rečenica je o prošlosti. B) "should be telling" — trajno, nema veze s prošlom griješkom. D) "should have been told" — pasiv: mijenja tko je trebao nešto primiti, ne tko je trebao reći.</div>
      </div>
    </div>

    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Spreman si za pravu vježbu</div></div>
      <div class="discere-body">
        <div class="discere-desc">Završio si Poglavlje 7. Otvori Discere → filter <b>modals</b> pa <b>articles</b>. Poglavlje 8: <b>Prepositions i Linkers</b>.</div>
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
      <button class="nav-btn primary" onclick="navigateChapter(8)">Poglavlje 08: Prepositions →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>
<script>
const PAGE_KEY='maturiraj_en_visa_p07';
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
const ERR_TOTAL=9;
function toggleErr(btn){
  const fix=btn.nextElementSibling;
  const wasOpen=fix.classList.contains('show');
  const open=fix.classList.toggle('show');
  btn.textContent=open?'▼ Sakrij ispravak':'▶ Pokaži ispravak';
  if(open&&!wasOpen){
    errOpenCount=Math.min(errOpenCount+1,ERR_TOTAL);
    const ec=document.getElementById('errCount'),ed=document.getElementById('errAllDone');
    if(ec)ec.textContent=errOpenCount+' / '+ERR_TOTAL;
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
    fb.innerHTML='✓ Točno! Have to = vanjska obveza (škola zahtijeva). A: must to = greška (modal bez to). B: few = gotovo nitko (negativno, a party je bio sjajan). D: don\\'t have some → don\\'t have any.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. C je točno: "had to" = vanjska obveza (pravilo škole). A: modal ne dolazi s "to". B: "few" znači gotovo nitko — party bi bio loš. D: negativne rečenice traže "any", ne "some".';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}
const tipSections=['sec-modal-table','sec-must-haveto','sec-modal-past','sec-articles','sec-art-zero','sec-quantifiers','sec-fewlittle','sec-dtree'];
function tipScroll(id){const el=document.getElementById(id);if(!el)return;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:'smooth'});}
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){const idx=tipSections.indexOf(e.target.id);for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}}});
},{rootMargin:'-10% 0px -60% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});

const drillData=[
  {q:'You <code>___</code> worry about it — I\\'ll take care of everything.',opts:['mustn\\'t','don\\'t have to','can\\'t','shouldn\\'t'],correct:1,colors:['red','green','gold','violet'],fb:'<b>Točan odgovor: don\\'t have to</b> — "I\\'ll take care" = nije potrebno brinuti, ali nije zabranjeno. Don\\'t have to = nije potrebno. Mustn\\'t = zabranjeno! / Don\\'t have to = not necessary (not forbidden).'},
  {q:'She <code>___</code> be at home — all the lights are off.',opts:['can\\'t','must','should','might'],correct:0,colors:['blue','green','gold','violet'],fb:'<b>Točan odgovor: can\\'t</b> — Siguran negativan zaključak o sadašnjosti: sva svjetla ugašena → ne može biti doma. Can\\'t = impossibility based on logic. / Logical deduction (negative certainty) → can\\'t.'},
  {q:'I <code>___</code> told her about the surprise — she found out anyway.',opts:['should have','must have','could','might have'],correct:0,colors:['gold','blue','green','violet'],fb:'<b>Točan odgovor: should have told</b> — Žaljenje: trebao sam reći (a nisam). Should have + past participle = past regret. / Regret about past action → should have + participle.'},
  {q:'<code>___</code> I open the window? It\\'s very warm in here.',opts:['Must','Should','Shall','Would'],correct:2,colors:['red','gold','blue','green'],fb:'<b>Točan odgovor: Shall</b> — Ponuda ili prijedlog u prvom licu (formalno) → Shall I...? "Should I" bi išao uz savjet. "Would I" = pogrešna struktura za ponudu. / Shall I = offer/suggestion (1st person formal).'},
  {q:'We need <code>___</code> milk — the carton is almost empty.',opts:['any','some','a few','few'],correct:1,colors:['gold','blue','green','red'],fb:'<b>Točan odgovor: some</b> — Tvrdna rečenica s potrebom → some. "Any" bi išao u negativnoj ili neutralnom pitanju. Few/a few = brojivo (milk je nebrojivo). / Affirmative + need → some.'},
  {q:'There were <code>___</code> mistakes in her essay — it was nearly perfect.',opts:['little','few','a little','a few'],correct:1,colors:['gold','red','blue','green'],fb:'<b>Točan odgovor: few</b> — "Nearly perfect" = gotovo nijedna greška (negativno/minimalno) → few. Mistakes su brojive → ne little/a little. "A few" bi značilo "nekoliko" bez negativne konotacije. / Countable + almost none → few.'},
  {q:'He went to <code>___</code> hospital after the accident.',opts:['a','the','∅ (no article)','an'],correct:2,colors:['blue','green','gold','violet'],fb:'<b>Točan odgovor: ∅ (no article)</b> — "Go to hospital" = ići kao pacijent → nulti član. "Go to the hospital" = ići kao posjetitelj. Ovo je klasičan primjer semantičke razlike članova. / To hospital (as patient) = zero article.'},
  {q:'You <code>___</code> worn a jacket — it\\'s freezing outside!',opts:['should have','must','could have','should'],correct:0,colors:['gold','blue','green','violet'],fb:'<b>Točan odgovor: should have worn</b> — Kritika ili savjet koji se odnosi na prošlost (a osoba nije poslušala) → should have + participle. "Should" (bez have) = savjet za sadašnjost/budućnost. / Past criticism → should have + participle.'},
  {q:'<code>___</code> people know about this shortcut — it\\'s our little secret.',opts:['Few','A few','Little','A little'],correct:0,colors:['blue','green','gold','violet'],fb:'<b>Točan odgovor: Few</b> — "Our little secret" = gotovo nitko ne zna (negativno, ekskluzivno). Few = gotovo ništa/nitko. People je brojivo → ne little/a little. / Countable + almost nobody → few.'},
];
let drillIdx=0,drillScore=0,drillResults=[];
function buildDots(){const d=document.getElementById('drillDots');d.innerHTML='';drillData.forEach((_,i)=>{const s=document.createElement('div');s.className='sd-dot'+(i===drillIdx?' cur':'');d.appendChild(s);});}
function renderDrillQ(){
  const d=drillData[drillIdx];
  document.getElementById('drillQ').innerHTML=\`<div class="sd-q"><div class="sd-sent">\${d.q}</div><div class="sd-btns">\${d.opts.map((o,i)=>\`<button class="sd-btn opt-\${d.colors[i]}" onclick="pickDrill(this,\${i})">\${o}</button>\`).join('')}</div><div class="sd-fb" id="dfb"></div></div>\`;
  buildDots();
}
function pickDrill(btn,idx){
  const d=drillData[drillIdx];
  document.querySelectorAll('#drillQ .sd-btn').forEach(b=>b.classList.add('picked','disabled'));
  const correct=idx===d.correct;
  btn.classList.add(correct?'correct-pick':'wrong-pick');
  if(!correct)document.querySelectorAll('#drillQ .sd-btn')[d.correct].classList.add('reveal-correct');
  if(correct)drillScore++;
  drillResults[drillIdx]=correct;
  const fb=document.getElementById('dfb');
  fb.className='sd-fb show '+(correct?'ok':'no');
  fb.innerHTML=(correct?'✓ ':'✗ ')+d.fb;
  const dots=document.querySelectorAll('#drillDots .sd-dot');
  if(dots[drillIdx])dots[drillIdx].className='sd-dot '+(correct?'ok':'no');
  setTimeout(()=>{drillIdx++;if(drillIdx<drillData.length)renderDrillQ();else showDrillScore();},1700);
}
function showDrillScore(){
  document.getElementById('drillQ').innerHTML='';
  const sc=document.getElementById('drillScore');sc.classList.add('show');
  document.getElementById('drillNum').textContent=drillScore+'/'+drillData.length;
  const lbl=document.getElementById('drillLbl');
  if(drillScore>=8){lbl.textContent='Izvrsno! Nastavi na kviz.';launchConfetti();}
  else if(drillScore>=6)lbl.textContent='Dobro — provjeri greške pa radi kviz.';
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
    const p=document.createElement('div');p.className='confetti-piece';
    p.style.cssText=\`left:\${Math.random()*100}vw;background:\${colors[Math.floor(Math.random()*colors.length)]};animation-duration:\${2+Math.random()*2}s;animation-delay:\${Math.random()*.8}s;width:\${6+Math.random()*6}px;height:\${6+Math.random()*6}px;border-radius:\${Math.random()>.5?'50%':'2px'}\`;
    document.body.appendChild(p);setTimeout(()=>p.remove(),4000);
  }
}
function exportResults(){
  const W=480,H=240;const canvas=document.createElement('canvas');
  canvas.width=W*2;canvas.height=H*2;const ctx=canvas.getContext('2d');ctx.scale(2,2);
  ctx.fillStyle='#0A0D18';ctx.fillRect(0,0,W,H);
  [{c:'#CF142B',x:0,w:W*.3},{c:'#fff',x:W*.3,w:W*.04},{c:'#4F7BE8',x:W*.34,w:W*.32},{c:'#fff',x:W*.66,w:W*.04},{c:'#CF142B',x:W*.7,w:W*.3}].forEach(s=>{ctx.fillStyle=s.c;ctx.fillRect(s.x,0,s.w,4);});
  ctx.fillStyle='#EEF0F8';ctx.font='bold 20px serif';ctx.fillText('Maturiraj.hr',24,44);
  ctx.fillStyle='#4A5580';ctx.font='12px monospace';ctx.fillText('Poglavlje 07 · Modals, Articles, Quantifiers',24,62);
  ctx.fillStyle='#4F7BE8';ctx.font='bold 64px serif';ctx.fillText(drillScore,24,148);
  ctx.fillStyle='#8A95B8';ctx.font='14px monospace';ctx.fillText('/ '+drillData.length+' bodova · drill',90,148);
  drillResults.forEach((ok,i)=>{const x=24+i*20,y=168;ctx.fillStyle=ok?'#52D688':'rgba(232,96,96,0.6)';ctx.beginPath();ctx.roundRect(x,y,16,16,3);ctx.fill();});
  ctx.fillStyle='rgba(74,85,128,0.5)';ctx.font='10px monospace';ctx.fillText('maturiraj.hr',W-85,H-12);
  canvas.toBlob(blob=>{const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='maturiraj-pogl07-'+drillScore+'od'+drillData.length+'.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},'image/png');
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