// Maturiraj.hr — Engleski viša razina
// Poglavlje 17: Reading iListening Strategija
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 17,
  slug: "poglavlje17",
  title: "Reading iListening Strategija",
  subtitle: "Cjeline 1, 4 i 5 \u00b7 skimming \u00b7 scanning \u00b7 tipovi pitanja \u00b7 listening faze",
  blok: 5,
  blokNaziv: "Reading i Listening",
  prev: 16,
  next: 18,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 17</title>
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
.sidebar{width:var(--sidebar);background:var(--bg-surface);border-right:1px solid var(--bd);position:fixed;top:3px;left:0;height:calc(100vh - 3px);overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bd-mid) transparent;z-index:100}
.sidebar::-webkit-scrollbar{width:3px}.sidebar::-webkit-scrollbar-thumb{background:var(--bd-mid);border-radius:2px}
.sb-brand{padding:22px 18px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--union-red),var(--blue));border-radius:var(--r1);position:relative;overflow:hidden;flex-shrink:0}
.sb-logo::before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 13h30M13 0v30M0 0l30 30M30 0L0 30' stroke='rgba(255,255,255,0.4)' stroke-width='2'/%3E%3C/path%3E%3C/svg%3E") center/cover}
.sb-name{font-family:var(--serif);font-size:14px;font-weight:700;color:var(--t1)}
.sb-sub{font-size:10px;color:var(--blue);margin-top:1px;font-family:var(--mono);letter-spacing:.5px}
.sb-label{font-family:var(--mono);font-size:9px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:16px 18px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:7px 18px;font-size:12.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.3}
.sb-item:hover{color:var(--t1);background:var(--bg-hover)}.sb-item.active{color:var(--blue);background:var(--blue-glow);border-left-color:var(--blue)}
.sb-item.done-ch{color:var(--brit-green)}.sb-item.done-ch .sb-dot{background:var(--brit-green);opacity:1}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.5}
.sb-footer{margin-top:auto;padding:12px 18px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.6;font-family:var(--mono)}
.main{margin-left:var(--sidebar);padding-top:3px}
.content-wrap{max-width:820px;margin:0 auto;padding:36px 48px 100px}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:11.5px;color:var(--t3);margin-bottom:28px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-active{color:var(--blue)}
.tabs-wrap{display:flex;margin-bottom:6px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:4px;width:fit-content}
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
.hero::after{content:'17';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
.hero-eyebrow{font-family:var(--mono);font-size:10px;color:var(--blue);letter-spacing:2px;margin-bottom:12px;text-transform:uppercase}
.hero-title{font-size:32px;font-weight:900;font-family:var(--serif);color:var(--t1);letter-spacing:-.5px;line-height:1.1;margin-bottom:10px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cream));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-meta{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.hero-badge{font-family:var(--mono);font-size:10px;font-weight:600;padding:3px 10px;border-radius:var(--r1);border:1px solid}
.hb-time{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.hb-level{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.hb-chapter{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.hero-sub{font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:18px}
.progress-track{height:3px;background:var(--bd-mid);border-radius:2px;overflow:hidden;width:100%;max-width:420px}
.progress-bar{height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:2px}
.tags{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:28px}
.pill{display:inline-flex;align-items:center;padding:4px 12px;border-radius:var(--r1);font-size:11.5px;font-weight:600;font-family:var(--mono);border:1px solid}
.pill-blue{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}.pill-green{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}.pill-gold{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}.pill-red{background:var(--union-red-dim);color:var(--union-red);border-color:var(--union-red-bd)}.pill-violet{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}.pill-amber{background:var(--amber-dim);color:var(--amber);border-color:var(--amber-border)}
.sec-label{font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:14px;padding-bottom:8px;border-bottom:1px solid var(--bd)}
.stat-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(172px,1fr));gap:10px;margin-bottom:28px}
.stat-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px 16px;transition:border-color .15s,transform .15s}
.stat-card:hover{border-color:var(--bd-light);transform:translateY(-1px)}
.stat-icon{font-family:var(--mono);font-size:10px;font-weight:500;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.stat-icon.blue{background:var(--blue-dim);color:var(--blue)}.stat-icon.green{background:var(--brit-green-dim);color:var(--brit-green)}.stat-icon.gold{background:var(--gold-dim);color:var(--gold)}.stat-icon.red{background:var(--union-red-dim);color:var(--union-red)}.stat-icon.amber{background:var(--amber-dim);color:var(--amber)}.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}
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
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}.tip-item.done{color:var(--green)}.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}
/* TASK TYPE BLOCKS */
.task-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:14px 0 24px}
.tb-head{display:flex;align-items:center;gap:14px;padding:14px 20px;background:var(--bg-surface);border-bottom:1px solid var(--bd)}
.tb-badge{font-family:var(--mono);font-size:11px;font-weight:700;padding:5px 12px;border-radius:var(--r1);border:1px solid;letter-spacing:.5px}
.tb-badge.reading{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.tb-badge.listening{background:var(--brit-green-dim);color:var(--brit-green);border-color:var(--brit-green-bd)}
.tb-title{font-size:15px;font-weight:600;color:var(--t1);font-family:var(--serif)}
.tb-sub{font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:2px}
.tb-body{padding:18px 20px}
/* STRATEGY STEPS */
.steps{display:flex;flex-direction:column;gap:10px}
.step{display:grid;grid-template-columns:28px 1fr;gap:12px;align-items:start;padding:10px 0;border-bottom:1px solid var(--bd)}
.step:last-child{border-bottom:none}
.step-num{width:28px;height:28px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.step-body{display:flex;flex-direction:column;gap:4px}
.step-title{font-size:13.5px;font-weight:600;color:var(--t1)}
.step-desc{font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.55}
/* QUESTION TYPE TABLE */
.qt-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px;border-collapse:separate;border-spacing:0}
.qt-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:9px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.qt-table td{padding:10px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.6}
.qt-table tr:last-child td{border-bottom:none}
.qt-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
.qt-table .qtype{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--blue);white-space:nowrap}
/* QUIZ */
.q-block{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px}
.q-head{padding:14px 18px;border-bottom:1px solid var(--bd)}
.q-meta{font-family:var(--mono);font-size:9.5px;color:var(--t3);font-weight:500;letter-spacing:.5px;margin-bottom:6px;text-transform:uppercase}
.q-text{font-size:14.5px;font-weight:600;color:var(--t1);line-height:1.5}
.q-opts{padding:12px 18px;display:flex;flex-direction:column;gap:6px}
.q-opt{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13.5px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none;font-family:var(--mono)}
.q-opt:hover:not(.disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.q-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}.q-opt.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red)}.q-opt.disabled{pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
/* MISC */
.discere-box{background:linear-gradient(135deg,rgba(79,123,232,.08),rgba(207,20,43,.05));border:1px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin:28px 0 0}
.discere-hd{background:var(--blue-dim);border-bottom:1px solid var(--blue-border);padding:11px 20px;display:flex;align-items:center;gap:10px}
.discere-hd-icon{font-size:16px}.discere-hd-text{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase}
.discere-body{padding:18px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.discere-desc{font-size:13px;color:var(--t2);line-height:1.6;flex:1;min-width:180px}.discere-desc b{color:var(--t1)}
.discere-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:10px 20px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;text-decoration:none;display:inline-block}.discere-btn:hover{opacity:.85}
.nav-row{display:flex;justify-content:space-between;align-items:center;padding:24px 0 0;border-top:1px solid var(--bd);margin-top:28px;flex-wrap:wrap;gap:10px}
.nav-btn{font-family:var(--mono);font-size:12px;font-weight:600;color:var(--t2);padding:9px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);cursor:pointer;transition:all .15s;background:var(--bg-card);text-decoration:none;display:inline-block}
.nav-btn:hover{color:var(--t1);border-color:var(--bd-light)}.nav-btn.primary{background:var(--blue);color:#fff;border-color:var(--blue)}.nav-btn.primary:hover{opacity:.88}
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;top:-10px;pointer-events:none;z-index:9999;animation:confettiFall linear forwards}
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
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}}
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
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span> 11 · Word formation</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span> 12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span> 13 · Dobar maturalni esej</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span> 14 · Struktura eseja</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span> 15 · Linking words i vocabulary</div>
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span> 16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span> 17 · Reading strategije</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span>11 · Word formation</div>
  <div class="sb-item done-ch" onclick="navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span>12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item done-ch" onclick="navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span>13 · Dobar maturalni esej</div>
  <div class="sb-item done-ch" onclick="navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span>14 · Struktura eseja</div>
  <div class="sb-item done-ch" onclick="navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span>15 · Linking words i vocabulary</div>
  <div class="sb-item done-ch" onclick="navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span>16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item active" onclick="navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span>17 · Reading strategije</div>
  <div class="sb-item" onclick="navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span>18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span>19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span>20 · Final Exam Survival</div>
<div class="sb-footer">17 / 20 · reading strategije<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-5</span>
    <span class="bc-sep">/</span><span class="bc-active">reading-listening-strategija</span>
  </div>
  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Strategija<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Vježbaj<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Strategija</div>
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
      <div class="hero-eyebrow">chapter 17 of 20 · blok 5 — reading i listening</div>
      <h1 class="hero-title">Reading i<br><span>Listening Strategija</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">17 / 20</span>
      </div>
      <p class="hero-sub">Cjeline 1, 4 i 5 · skimming · scanning · tipovi pitanja · listening faze</p>
      <div class="progress-track"><div class="progress-bar" style="width:85%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Skimming</span>
      <span class="pill pill-green">Scanning</span>
      <span class="pill pill-gold">Tipovi pitanja</span>
      <span class="pill pill-violet">Listening faze</span>
      <span class="pill pill-amber">Zamke i distractori</span>
      <span class="pill pill-red">Vremenski pritisak</span>
    </div>
    <div class="sec-label">// struktura ispita — reading i listening</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">Cj. 1</div><div class="stat-name">Reading — 3 teksta</div><div class="stat-desc">3 dulja teksta, različiti žanrovi. Multiple choice, T/F/NG, matching headings. Ukupno ~40 min.</div></div>
      <div class="stat-card"><div class="stat-icon green">Cj. 4+5</div><div class="stat-name">Listening — 4 snimke</div><div class="stat-desc">4 audio snimke, rastuća težina. Multiple choice, sentence completion, short answer. Jednom slušaš!</div></div>
      <div class="stat-card"><div class="stat-icon gold">skim</div><div class="stat-name">Skimming = brz pregled</div><div class="stat-desc">Čitaš za opću ideju, ne svaku riječ. Naslovi, prve i zadnje rečenice odlomaka. ~1–2 min po tekstu.</div></div>
      <div class="stat-card"><div class="stat-icon violet">scan</div><div class="stat-name">Scanning = traženje</div><div class="stat-desc">Tražiš specifičnu informaciju (datum, ime, broj). Oči klize po tekstu dok ne nađeš ključnu riječ.</div></div>
    </div>
    <div class="sec-label">// 5 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 reading i listening — 5 ključnih pravila</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Čitaj pitanja PRIJE teksta.</b> Znaj što tražiš prije nego počneš čitati. Podvuci ključne riječi u pitanjima. To štedi 30–40% vremena.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Redoslijed pitanja = redoslijed teksta.</b> Za većinu zadataka, odgovor na Q1 je na početku teksta, Q2 malo dalje itd. Ne traži unatrag.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Odgovor je u tekstu, ne u tvom znanju.</b> Ne oslanjaj se na ono što "znaš" o temi. Sve što treba je u tekstu — čak i ako se čini pogrešno.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Listening: prethodna 30 sekundi = zlato.</b> Uvijek iskoristi pauzu za čitanje sljedećih pitanja. Nikad ne slušaj bez prethodno pročitanih pitanja.</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Zaokruži sve — nikad ne ostavljaj prazno.</b> Nema odbitnih bodova. Ako nisi siguran, pogodi. 25% šansa je bolje od 0%.</div></div>
      </div>
    </div>
    <div class="sec-label">// brzi pregled</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Skimming vs scanning — kada što koristiti</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Skimming</b> = brzo čitanje za opću ideju. Koristiš na POČETKU — prije nego počneš odgovarati na pitanja.<br>
        Čitaš: naslov, podnaslove, prve rečenice svakog odlomka, zadnju rečenicu teksta. Traje 60–90 sekundi.<br><br>
        <b>Scanning</b> = brzo pretraživanje za specifičnu informaciju. Koristiš kad ODGOVARAŠ na pitanja.<br>
        Znaš što tražiš (npr. godinu, ime, naziv) — oči klize dok ne ugledaš tu informaciju.<br><br>
        <span class="note">Greška: Čitanje svakog teksta od početka do kraja bez skimminga = trosiš previše vremena.</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>Listening — što raditi u 3 faze</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Faza 1 — PRIJE slušanja (pauza):</b><br>
        Čitaj pitanja i opcije. Podvuci ključne riječi. Predvidi o čemu je snimka.<br><br>
        <b>Faza 2 — ZA VRIJEME slušanja:</b><br>
        Prati redoslijed pitanja. Piši odgovor odmah kad ga čuješ. Ne zadržavaj se na jednom pitanju — kreni dalje.<br><br>
        <b>Faza 3 — POSLIJE slušanja (pauza):</b><br>
        Provjeri odgovore. Provjeri spelling u sentence completion zadacima. Ne mijenjaj odgovor bez razloga.<br><br>
        <span class="bad">Zamka:</span> Ako propustiš odgovor, ne paniciraj — zaokruži najvjerojatnijeg i nastavi dalje.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Distractori — kako te zbunjuju</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Što su distractori?</b> Pogrešne opcije koje izgledaju točno. Dizajnirani su da prevare učenike koji površno čitaju.<br><br>
        <b>Tipovi distraktora u readingu:</b><br>
        • Iste/slične riječi iz teksta, ali u krivu kontekstu<br>
        • Istinita tvrdnja, ali o drugoj stvari od pitanja<br>
        • Pretjerivanje: tekst kaže "some", opcija kaže "all"<br>
        • Suprotno: tekst kaže "increase", opcija kaže "decrease"<br><br>
        <b>Tipovi distraktora u listeningu:</b><br>
        • Govore prvu opciju, pa je isprave — točan odgovor je ispravak<br>
        • Spominju ključnu riječ ali u krivu kontekstu<br>
        <span class="note">Pravilo: Točan odgovor je parafraziran, ne doslovan citat iz teksta/snimke.</span>
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Strategiju</div></div></div>
      <div class="cg-body">
        <div class="cg-question">Što je SKIMMING u kontekstu reading zadataka?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">A</div>Traženje specifičnog datuma ili imena u tekstu</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">B</div>Pažljivo čitanje svakog odlomka od početka do kraja</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)"><div class="cg-letter">C</div>Brzo čitanje za opću ideju — naslovi, prve rečenice odlomaka</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">D</div>Preskakanje teških dijelova teksta</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Strategiju →</button>

    <!-- BRIDGE: WRITING → READING/LISTENING -->
    <div style="background:var(--blue-dim);border:1px solid var(--blue-border);border-radius:var(--r3);padding:12px 16px;margin:16px 0 0;font-family:var(--mono);font-size:12px;color:var(--t2);line-height:1.75">
      <div style="font-size:10px;font-weight:700;color:var(--blue);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px">🔗 Blok 4 → Blok 5 — čitaš i slušaš sve što si naučio pisati</div>
      Reading i Listening tekstovi koriste iste strukture koje si naučio za Writing:<br>
      <b style="color:var(--t1)">Akademski vokabular (P14)</b>: "significant · evident · contend" → prepoznaj parafraz u Reading &nbsp;·&nbsp;
      <b style="color:var(--t1)">Argumentacijska struktura (P13)</b>: "proponents argue... critics maintain..." → prepoznaj stav autora &nbsp;·&nbsp;
      <b style="color:var(--t1)">Linkers (P08)</b>: However · Furthermore → signal T/F/NG i Matching Headings &nbsp;·&nbsp;
      <b style="color:var(--t1)">Parafraziranje (P13)</b>: iste vještine — samo sada čitaš tuđi parafraz umjesto što pišeš vlastiti.
    </div>
      </div>
    </div>
    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(16)">← Poglavlje 16</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Strategija →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ═══ LAYER 1 ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-reading-strategy')"><span class="tip-dot"></span>Reading strategija</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-task-types')"><span class="tip-dot"></span>Tipovi zadataka</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-skimming')"><span class="tip-dot"></span>Skimming</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-scanning')"><span class="tip-dot"></span>Scanning</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-listening-strategy')"><span class="tip-dot"></span>Listening strategija</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-listening-tasks')"><span class="tip-dot"></span>Listening tipovi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-common-traps')"><span class="tip-dot"></span>Zamke</div>
    </div>

    <!-- READING STRATEGIJA -->
    <div id="sec-reading-strategy" class="sec-label">// reading — 3-koračna strategija</div>
    <p class="prose">Reading nije pasivno čitanje — to je <em>aktivno pretraživanje</em>. Svaki od 3 teksta ima drukčiji tip pitanja, ali strategija je uvijek ista.</p>
    <div class="task-block">
      <div class="tb-head">
        <span class="tb-badge reading">READING</span>
        <div><div class="tb-title">3-koračna strategija za svaki tekst</div><div class="tb-sub">Primijeni ovaj redoslijed za svaki od 3 reading teksta</div></div>
      </div>
      <div class="tb-body">
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <div class="step-title">Čitaj pitanja i podvuci ključne riječi <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">(~2 min)</span></div>
              <div class="step-desc">Pročitaj SVA pitanja za taj tekst PRIJE teksta. Podvuci: imenice, glagole, specifične pojmove. Zanemari opcije A/B/C/D za sad — samo pitanja.</div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <div class="step-title">Skimming teksta <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">(~90 sek)</span></div>
              <div class="step-desc">Čitaj: naslov → prve rečenice svakog odlomka → zadnju rečenicu teksta. Cilj: znati strukturu i opću temu. Ne čitaj sve.</div>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <div class="step-title">Scanning za odgovore <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">(~10 min)</span></div>
              <div class="step-desc">Za svako pitanje: tražiš ključnu riječ iz pitanja u tekstu → čitaš kontekst oko nje → odabiraš odgovor. Redoslijed pitanja = redoslijed teksta.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="callout callout-tip">
      <div class="callout-icon">⏱</div>
      <div class="callout-body">
        <div class="callout-title">Vremenski plan za reading</div>
        <div class="callout-text">
          3 teksta, ~40 minuta. To je ~13 minuta po tekstu.<br>
          Raspodijeli: <b>2 min</b> čitanje pitanja + <b>1.5 min</b> skimming + <b>9.5 min</b> odgovaranje<br>
          Ako ostaneš zapeo na jednom pitanju — <b>označi ga i nastavi</b>. Vrati se na kraju.
        </div>
      </div>
    </div>

    <!-- TIPOVI ZADATAKA -->
    <div id="sec-task-types" class="sec-label" style="margin-top:36px">// reading — tipovi zadataka na maturi</div>
    <table class="qt-table">
      <thead><tr><th>Tip zadatka</th><th>Što se traži</th><th>Strategija</th></tr></thead>
      <tbody>
        <tr>
          <td class="qtype">Multiple Choice</td>
          <td style="color:var(--t2)">Odaberi točan odgovor (A/B/C/D) temeljem teksta</td>
          <td style="color:var(--t2);font-size:12.5px">Čitaj kontekst oko ključne riječi. Eliminiraj distraktore. Točan odgovor je parafraziran, ne citiran.</td>
        </tr>
        <tr>
          <td class="qtype">True / False / Not Given</td>
          <td style="color:var(--t2)">Je li tvrdnja točna, netočna, ili informacija nije u tekstu</td>
          <td style="color:var(--t2);font-size:12.5px"><b>Not Given</b> = tema se uopće ne spominje. False = direktna suprotnost. Ne brkaj Not Given i False.</td>
        </tr>
        <tr>
          <td class="qtype">Matching Headings</td>
          <td style="color:var(--t2)">Poveži naslove s odlomcima</td>
          <td style="color:var(--t2);font-size:12.5px">Čitaj prvu i zadnju rečenicu svakog odlomka. Naslov = tema cijelog odlomka, ne detalj iz sredine.</td>
        </tr>
        <tr>
          <td class="qtype">Sentence Completion</td>
          <td style="color:var(--t2)">Dopuni rečenicu riječima iz teksta</td>
          <td style="color:var(--t2);font-size:12.5px">Koristiš TOČNE riječi iz teksta (ne parafraziraš). Pazi na broj riječi — ako piše "max 2 words", ne piši 3.</td>
        </tr>
        <tr>
          <td class="qtype">Short Answer</td>
          <td style="color:var(--t2)">Kratki odgovor na pitanje (1–3 words)</td>
          <td style="color:var(--t2);font-size:12.5px">Odgovori su direktno u tekstu. Scan za ključnu riječ iz pitanja, pa traži odgovor u tom dijelu.</td>
        </tr>
      </tbody>
    </table>

    <!-- T/F/NG callout -->
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Najteži zadatak: True / False / Not Given</div>
        <div class="callout-text">
          <b>True</b> = tekst to kaže (ili direktno ili kao parafraz)<br>
          <b>False</b> = tekst kaže suprotno od tvrdnje<br>
          <b>Not Given</b> = tema se ne spominje u tekstu — NE možeš zaključiti ni True ni False<br><br>
          <b>Najčešća greška:</b> Pisanje False kad je zapravo Not Given. Pitaj se: "Je li ova tema uopće u tekstu?" — Ako nije, odgovor je Not Given.
        </div>
      </div>
    </div>

    <!-- SKIMMING -->
    <div id="sec-skimming" class="sec-label" style="margin-top:36px">// skimming — tehnika brzog pregleda</div>
    <p class="prose">Skimming nije čitanje — to je <em>vizualni pregled</em> teksta da uočiš njegovu strukturu i ključne točke bez trošenja vremena na svaku riječ.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--brit-green-bd);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--brit-green);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">✓ ŠTO ČITAŠ PRI SKIMMINGU</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          ✓ Naslov i podnaslov<br>
          ✓ Prvu rečenicu svakog odlomka<br>
          ✓ Zadnju rečenicu teksta<br>
          ✓ Podebljane/italizirane riječi<br>
          ✓ Brojke, vlastita imena, datumi<br>
          ✓ Grafove/slike i njihove opise
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--red-border);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--red);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">✗ ŠTO NE ČITAŠ PRI SKIMMINGU</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          ✗ Sredine odlomaka (osim zadnjeg)<br>
          ✗ Primjere i ilustracije<br>
          ✗ Svaki adjektiv i adverb<br>
          ✗ Sporedne rečenice<br>
          ✗ Fusnote i dodatne bilješke<br>
          ✗ Sve što nije "topic sentence"
        </div>
      </div>
    </div>

    <!-- SCANNING -->
    <div id="sec-scanning" class="sec-label" style="margin-top:36px">// scanning — tehnika traženja specifične informacije</div>
    <p class="prose">Scanning koristiš kad već znaš što tražiš — specifičnu riječ, broj, ime ili koncept. Oči se kreću po tekstu dok ne "ulove" cilj.</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 18px;margin:14px 0 24px">
      <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">3 KORAKA SCANNING TEHNIKE</div>
      <div style="display:flex;flex-direction:column;gap:10px">
        <div style="display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;">1</div>
          <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.55"><b style="color:var(--t1)">Identificiraj ključnu riječ iz pitanja</b> — imenica, broj, vlastito ime ili specifičan pojam koji je lako prepoznati vizualno u tekstu</div>
        </div>
        <div style="display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;">2</div>
          <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.55"><b style="color:var(--t1)">Pusti oči da klize po tekstu</b> — ne čitaj, nego vizualno traži tu riječ ili njezin sinonim/parafraz. Traži i bliske pojmove.</div>
        </div>
        <div style="display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;">3</div>
          <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.55"><b style="color:var(--t1)">Kad pronađeš — čitaj kontekst</b> — pročitaj 1–2 rečenice oko pronađene riječi da shvatiš pravi smisao i odabereš točan odgovor</div>
        </div>
      </div>
    </div>

    <!-- LISTENING STRATEGIJA -->
    <div id="sec-listening-strategy" class="sec-label" style="margin-top:36px">// listening — 3-fazna strategija</div>
    <p class="prose">Listening je <em>jednosmjeran</em> — snimku čuješ samo jednom. Zato je priprema prije slušanja apsolutno ključna.</p>
    <div class="task-block">
      <div class="tb-head">
        <span class="tb-badge listening">LISTENING</span>
        <div><div class="tb-title">3-fazna strategija — prije, za vrijeme i poslije</div><div class="tb-sub">Svaka faza je jednako važna — zanemariti pripremnu fazu = propustiti odgovore</div></div>
      </div>
      <div class="tb-body">
        <div class="steps">
          <div class="step">
            <div class="step-num" style="background:var(--brit-green)">1</div>
            <div class="step-body">
              <div class="step-title">PRIJE — Priprema u pauzi <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">(30–60 sek pauze)</span></div>
              <div class="step-desc">Čitaj pitanja i opcije. Podvuci ključne riječi. Predvidi temu i tip informacije (broj? ime? razlog?). Pripremi se na parafraziranje — točan odgovor neće biti iste riječi.</div>
            </div>
          </div>
          <div class="step">
            <div class="step-num" style="background:var(--brit-green)">2</div>
            <div class="step-body">
              <div class="step-title">ZA VRIJEME — Aktivno slušanje <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">(trajanje snimke)</span></div>
              <div class="step-desc">Prati redoslijed pitanja — odgovori dolaze redoslijedom. Piši odgovor čim ga čuješ. Propustio/la jedno? Zaokruži najvjerojatnije i odmah nastavi na sljedeće pitanje.</div>
            </div>
          </div>
          <div class="step">
            <div class="step-num" style="background:var(--brit-green)">3</div>
            <div class="step-body">
              <div class="step-title">POSLIJE — Provjera u pauzi <span style="font-family:var(--mono);font-size:11px;color:var(--t3)">(pauza između snimki)</span></div>
              <div class="step-desc">Provjeri spelling u sentence completion. Provjeri gramatički oblik (singular/plural, tense). Provjeri broj riječi ako je naveden limit. Ne mijenjaj odgovor bez konkretnog razloga.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LISTENING TIPOVI -->
    <div id="sec-listening-tasks" class="sec-label" style="margin-top:36px">// listening — tipovi zadataka</div>
    <table class="qt-table">
      <thead><tr><th>Tip zadatka</th><th>Opis</th><th>Ključna strategija</th></tr></thead>
      <tbody>
        <tr>
          <td class="qtype" style="color:var(--brit-green)">Multiple Choice</td>
          <td style="color:var(--t2)">Odaberi točan odgovor iz 3–4 opcije</td>
          <td style="color:var(--t2);font-size:12.5px">Čuj sve opcije. Zvučnici često spominju pogrešnu opciju pa je isprave — čekaj potvrdu.</td>
        </tr>
        <tr>
          <td class="qtype" style="color:var(--brit-green)">Sentence Completion</td>
          <td style="color:var(--t2)">Popuni prazninu riječima sa snimke</td>
          <td style="color:var(--t2);font-size:12.5px">Piši TOČNE riječi koje čuješ (ne parafraziraj). Pazi na limit (max 1/2/3 words). Provjeri spelling.</td>
        </tr>
        <tr>
          <td class="qtype" style="color:var(--brit-green)">Short Answer</td>
          <td style="color:var(--t2)">Kratki odgovor na pitanje</td>
          <td style="color:var(--t2);font-size:12.5px">Odgovor je u obliku koji odgovara pitanju — "How many?" → broj, "Where?" → mjesto.</td>
        </tr>
        <tr>
          <td class="qtype" style="color:var(--brit-green)">Map / Diagram</td>
          <td style="color:var(--t2)">Označi lokacije ili dopuni dijagram</td>
          <td style="color:var(--t2);font-size:12.5px">Unaprijed prouči dijagram. Prati smjer opisa (lijevo/desno, gore/dolje, put do lokacije).</td>
        </tr>
        <tr>
          <td class="qtype" style="color:var(--brit-green)">Matching</td>
          <td style="color:var(--t2)">Poveži osobu/predmet s karakteristikom</td>
          <td style="color:var(--t2);font-size:12.5px">Pročitaj sve opcije unaprijed. Pazi — ista osoba se može pojaviti više puta u razgovoru.</td>
        </tr>
      </tbody>
    </table>

    <!-- ZAMKE -->
    <div id="sec-common-traps" class="sec-label" style="margin-top:36px">// najčešće zamke — reading i listening</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 24px">
      <div style="background:var(--bg-card);border:1px solid var(--red-border);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--red);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">READING — ZAMKE</div>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:var(--t2);line-height:1.6">
          <div><b style="color:var(--t1)">Krive ključne riječi</b><br>Tekst: "rarely" → opcija: "never" → Wrong!</div>
          <div><b style="color:var(--t1)">False vs Not Given</b><br>Ne brkaj "suprotno od teksta" i "nema u tekstu"</div>
          <div><b style="color:var(--t1)">Traženje previše dugo</b><br>Max 2 minute po pitanju — označi i nastavi</div>
          <div><b style="color:var(--t1)">Čitanje bez pitanja</b><br>Uvijek čitaj pitanja PRVO — inače ne znaš što tražiš</div>
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--red-border);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--red);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">LISTENING — ZAMKE</div>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:var(--t2);line-height:1.6">
          <div><b style="color:var(--t1)">Prva opcija = mamac</b><br>Zvučnik kaže opciju A, pa je ispravlja — točno je B</div>
          <div><b style="color:var(--t1)">Ista ključna riječ, kriv smisao</b><br>Čuješ "Tuesday" ali odgovor nije Tuesday</div>
          <div><b style="color:var(--t1)">Spelling greška</b><br>Sentence completion: "recieve" umjesto "receive" = netočno</div>
          <div><b style="color:var(--t1)">Previše riječi</b><br>"max 2 words" → ne piši 3, čak i ako su točne</div>
        </div>
      </div>
    </div>

    <div class="callout callout-green">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <div class="callout-title">Zlatno pravilo — parafraz</div>
        <div class="callout-text">I u readingu i u listeningu, <b>točan odgovor je gotovo uvijek parafraziran</b> — ne identičan s tekstom/snimkom. Ako vidiš opciju koja doslovno kopira tekst, budi sumnjičav. Ako vidiš opciju koja znači isto drugačijim riječima — to je najvjerojatnije točno.</div>
      </div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Vježbaj strategije</div></div>
      <div class="discere-body">
        <div class="discere-desc">Tab Vježbaj donosi kviz o strategijama — provjeri razumiješ li razlike između tipova zadataka i zamki.</div>
        <span class="discere-btn" onclick="switchTab(2)" style="cursor:pointer">Kviz →</span>
      </div>
    </div>
    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Kviz →</span>
    </div>
  </div><!-- /l1 -->

  <!-- ═══ LAYER 2 ═══ -->
  <div class="layer" id="l2">
    <div class="sec-label">// kviz — strategije i zamke</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:20px">Provjeri razumiješ li ključne razlike. 6 pitanja — dobij sve točno za confetti.</p>

    <div class="q-block" id="q1">
      <div class="q-head"><div class="q-meta">pitanje 01 · reading strategija</div><div class="q-text">Koji je TOČAN redoslijed koraka za reading zadatak?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>Čitaj tekst → pa čitaj pitanja → pa traži odgovore</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>Čitaj pitanja → skim teksta → scan za odgovore</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>Skim teksta → čitaj pitanja → čitaj tekst od početka</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>Scan za ključne riječi → čitaj pitanja → odgovori</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — Uvijek prvo pitanja, pa skimming za strukturu, pa scanning za konkretne odgovore. Čitanje pitanja PRIJE teksta je ključno — inaće ne znaš što tražiš i gubljaš vrijeme.</div></div>
    </div>

    <div class="q-block" id="q2">
      <div class="q-head"><div class="q-meta">pitanje 02 · true / false / not given</div><div class="q-text">Tvrdnja kaže: "The company was founded in 1985." Tekst ne spominje godinu osnivanja uopće. Koji je odgovor?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>True</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">B</div>False</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">C</div>Not Given</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>Ne mogu znati bez više informacija</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — Not Given. Tema se ne spominje u tekstu. False bi bio odgovor samo ako tekst kaže nešto suprotno od tvrdnje (npr. "founded in 1990"). Ako tema nije u tekstu — uvijek Not Given.</div></div>
    </div>

    <div class="q-block" id="q3">
      <div class="q-head"><div class="q-meta">pitanje 03 · listening zamke</div><div class="q-text">U listening zadatku, zvučnik kaže: "We were going to meet on Monday, but actually it ended up being Tuesday." Pitanje: "When did they meet?" Koji je točan odgovor?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>Monday</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">B</div>Tuesday</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">C</div>Monday or Tuesday</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>The answer is not given</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — Tuesday. Ovo je klasična listening zamka: govore prvu opciju (Monday), pa je ispravljaju. Točan odgovor je uvijek ispravak, ne prva opcija. Nikad ne zapiši prvu stvar koju čuješ — čekaj potvrdu.</div></div>
    </div>

    <div class="q-block" id="q4">
      <div class="q-head"><div class="q-meta">pitanje 04 · sentence completion</div><div class="q-text">Uputa kaže "Write NO MORE THAN TWO WORDS." Čuješ: "The meeting takes place in the conference room." Koji odgovor je TOČAN?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>in the conference room</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">B</div>conference room</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">C</div>the conference room</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>room</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — "conference room" = 2 words, unutar limita. "in the conference room" = 4 words, previše. "the conference room" = 3 words, previše. "room" = preosiromaška — nedostaje ključna informacija. Uvijek koristi maksimum dopuštenih riječi za potpun odgovor.</div></div>
    </div>

    <div class="q-block" id="q5">
      <div class="q-head"><div class="q-meta">pitanje 05 · reading — parafraz</div><div class="q-text">Tekst kaže: "The number of visitors declined sharply." Pitanje: "What happened to visitor numbers?" Koja opcija je TOČNA?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>Visitor numbers declined sharply.</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">B</div>There was a significant drop in the number of visitors.</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">C</div>The number of visitors increased.</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>Visitors stopped coming altogether.</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — B je parafraz: "declined sharply" → "significant drop". A kopira tekst doslovno (to ti neće biti opcija na pravom ispitu, ali B je bolji odgovor jer pokazuje razumijevanje). C je suprotno. D je pretjerivanje ("altogether" nije u tekstu).</div></div>
    </div>

    <div class="q-block" id="q6">
      <div class="q-head"><div class="q-meta">pitanje 06 · matching headings</div><div class="q-text">Koji dio odlomka je NAJVAŽNIJI za odabir ispravnog naslova?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">A</div>Sredina odlomka s detaljnim primjerima</div>
        <div class="q-opt" onclick="answer(this,'q6','correct')"><div class="q-letter">B</div>Prva rečenica (topic sentence) i zadnja rečenica odlomka</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">C</div>Svaka rečenica odlomka jednako</div>
        <div class="q-opt" onclick="answer(this,'q6','wrong')"><div class="q-letter">D</div>Rečenica koja sadrži ključnu riječ iz naslova</div>
      </div>
      <div class="q-expl" id="qe6"><div class="expl-ok">✓ Točno — Topic sentence (prva) otkriva glavnu ideju odlomka, zadnja je zaključak. Naslov mora odgovarati CIJELOM odlomku, ne jednom detalju iz sredine. Opcija D je zamka — ključna riječ iz naslova može biti u tekstu ali u krivu kontekstu.</div></div>
    </div>

    <div class="
    <!-- LISTENING DRILL -->
    <div style="font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin:32px 0 14px;padding-bottom:8px;border-bottom:1px solid var(--bd)">// listening drill &mdash; transkript s pitanjima</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:6px">Na pravom ispitu slušaš snimku &mdash; ovdje čitaš transkript i treniš iste vještine. Radi kao da slušaš: <b>čitaj jedanput, odgovori, provjeri.</b></p>
    <div style="background:var(--amber-dim);border:1px solid var(--amber-border);border-radius:var(--r2);padding:9px 14px;font-family:var(--mono);font-size:11.5px;color:var(--amber);margin-bottom:16px">&#9888;&#65039; Listening strategija: PROČITAJ PITANJA 7&ndash;11 ISPOD PRIJE nego počneš čitati transkript.</div>

    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin-bottom:20px">
      <div style="padding:10px 18px;background:var(--bg-surface);border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:12px">
        <span style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase">&#127911; Transkript &mdash; Radio intervju &middot; ~160 words</span>
        <span style="font-family:var(--mono);font-size:10px;color:var(--blue);margin-left:auto">Tema: Urbano vrtlarstvo</span>
      </div>
      <div style="padding:18px 20px;font-size:14px;line-height:2;color:rgba(238,240,248,.88)">
        <p style="margin-bottom:12px"><b style="color:var(--t3);font-family:var(--mono);font-size:11px">VODITELJ:</b> Good morning and welcome back. Today we&#39;re speaking with Clara Novak, a community garden coordinator based in Bristol. Clara, how long have you been involved in urban farming?</p>
        <p style="margin-bottom:12px"><b style="color:var(--t3);font-family:var(--mono);font-size:11px">CLARA:</b> I&#39;ve been doing this for eleven years now. I started with a small plot &mdash; just twelve square metres &mdash; on a rooftop in the city centre, and it just grew from there.</p>
        <p style="margin-bottom:12px"><b style="color:var(--t3);font-family:var(--mono);font-size:11px">VODITELJ:</b> And what would you say is the biggest challenge you face?</p>
        <p style="margin-bottom:12px"><b style="color:var(--t3);font-family:var(--mono);font-size:11px">CLARA:</b> Without question, it&#39;s funding. We rely almost entirely on grants and donations &mdash; the council stopped supporting us three years ago. We had to let go of our part-time assistant last spring, which was a real blow.</p>
        <p style="margin-bottom:12px"><b style="color:var(--t3);font-family:var(--mono);font-size:11px">VODITELJ:</b> Despite that, I understand the project is expanding?</p>
        <p style="margin-bottom:0"><b style="color:var(--t3);font-family:var(--mono);font-size:11px">CLARA:</b> Yes &mdash; we&#39;re opening a second site in Clifton next month. We&#39;ve already signed the lease and we&#39;re hoping to run weekend workshops there from the autumn.</p>
      </div>
      <div style="padding:8px 18px;background:var(--bg-input);border-top:1px solid var(--bd);font-family:var(--mono);font-size:10px;color:var(--t3)">Čitaj jedanput. Zatim odgovori na pitanja &mdash; pa provjeri.</div>
    </div>

    <div class="q-block" id="q7">
      <div class="q-head">
        <div class="q-meta">pitanje 07 &middot; listening &middot; multiple choice</div>
        <div class="q-text">Why did the project lose its part-time assistant?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">A</div>The assistant chose to leave voluntarily</div>
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">B</div>The project moved to a new location</div>
        <div class="q-opt" onclick="answer(this,'q7','correct')"><div class="q-letter">C</div>The project ran out of money to pay them</div>
        <div class="q-opt" onclick="answer(this,'q7','wrong')"><div class="q-letter">D</div>The council withdrew its support directly</div>
      </div>
      <div class="q-expl" id="qe7"><div class="expl-ok">&#10003; Točno &mdash; C. &quot;Had to let go&quot; = otpustiti zbog financija (parafraz). D je zamka: council jest prestao, ali asistent nije izgubljen direktno zbog toga &mdash; izgubljen je jer su financije presušile.</div></div>
    </div>

    <div class="q-block" id="q8" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">pitanje 08 &middot; listening &middot; sentence completion (max 2 words)</div>
        <div class="q-text">Clara first started urban farming on a rooftop with a plot of only __________ .</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q8','wrong')"><div class="q-letter">A</div>eleven square metres</div>
        <div class="q-opt" onclick="answer(this,'q8','correct')"><div class="q-letter">B</div>twelve square metres</div>
        <div class="q-opt" onclick="answer(this,'q8','wrong')"><div class="q-letter">C</div>twelve metres square</div>
        <div class="q-opt" onclick="answer(this,'q8','wrong')"><div class="q-letter">D</div>a small plot</div>
      </div>
      <div class="q-expl" id="qe8"><div class="expl-ok">&#10003; Točno &mdash; B: <b>twelve square metres</b>. SC zahtijeva TOČNE riječi sa snimke. A je distractor: &quot;eleven&quot; = koliko godina Clara radi. D je parafraz &mdash; netočan za SC.</div></div>
    </div>

    <div class="q-block" id="q9" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">pitanje 09 &middot; listening &middot; short answer (max 3 words)</div>
        <div class="q-text">What are the TWO sources of income the project currently relies on?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q9','wrong')"><div class="q-letter">A</div>council funding and donations</div>
        <div class="q-opt" onclick="answer(this,'q9','correct')"><div class="q-letter">B</div>grants and donations</div>
        <div class="q-opt" onclick="answer(this,'q9','wrong')"><div class="q-letter">C</div>workshops and grants</div>
        <div class="q-opt" onclick="answer(this,'q9','wrong')"><div class="q-letter">D</div>rooftop leases and fundraising</div>
      </div>
      <div class="q-expl" id="qe9"><div class="expl-ok">&#10003; Točno &mdash; B: <b>grants and donations</b>. Clara kaže točno te riječi. A je zamka: council jest bio izvor, ali &quot;stopped three years ago&quot;. C: workshops su buduća aktivnost, ne prihod.</div></div>
    </div>

    <div class="q-block" id="q10" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">pitanje 10 &middot; listening &middot; sentence completion &mdash; distractor zamka</div>
        <div class="q-text">The council stopped providing support __________ ago.</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q10','wrong')"><div class="q-letter">A</div>eleven years</div>
        <div class="q-opt" onclick="answer(this,'q10','wrong')"><div class="q-letter">B</div>last spring</div>
        <div class="q-opt" onclick="answer(this,'q10','correct')"><div class="q-letter">C</div>three years</div>
        <div class="q-opt" onclick="answer(this,'q10','wrong')"><div class="q-letter">D</div>twelve months</div>
      </div>
      <div class="q-expl" id="qe10"><div class="expl-ok">&#10003; Točno &mdash; C: <b>three years</b>. Clara kaže &quot;three years ago&quot; za council. A je klasični distractor: &quot;eleven&quot; = koliko godina Clara radi. B: &quot;last spring&quot; = kada su izgubili asistenta.</div></div>
    </div>

    <div class="q-block" id="q11" style="margin-top:12px">
      <div class="q-head">
        <div class="q-meta">pitanje 11 &middot; listening &middot; short answer</div>
        <div class="q-text">What activity is Clara planning to run at the new site from autumn?</div>
      </div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q11','wrong')"><div class="q-letter">A</div>community gardens</div>
        <div class="q-opt" onclick="answer(this,'q11','wrong')"><div class="q-letter">B</div>urban farming courses</div>
        <div class="q-opt" onclick="answer(this,'q11','correct')"><div class="q-letter">C</div>weekend workshops</div>
        <div class="q-opt" onclick="answer(this,'q11','wrong')"><div class="q-letter">D</div>rooftop projects</div>
      </div>
      <div class="q-expl" id="qe11"><div class="expl-ok">&#10003; Točno &mdash; C: <b>weekend workshops</b>. Clara kaže &quot;run weekend workshops there from the autumn.&quot; B je parafraz koji zvuči slično &mdash; SC/SA traži točne ili bliske parafaze Clarinih rije&#269;i.</div></div>
    </div>

    <div style="background:var(--bg-card);border:1px solid var(--union-red-bd);border-radius:var(--r3);padding:14px 16px;margin:20px 0 8px">
      <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--union-red);margin-bottom:10px;letter-spacing:1px">&#9888;&#65039; DISTRACTOR ANALIZA &mdash; 4 klasične zamke iz ovog drilla</div>
      <div style="display:flex;flex-direction:column;gap:7px;font-size:12.5px;color:var(--t2);line-height:1.6">
        <div><b style="color:var(--t1)">1. Isti broj, krivi kontekst:</b> &quot;eleven&quot; = trajanje rada, ne veličina parcele. Uvijek provjeri što broj opisuje.</div>
        <div><b style="color:var(--t1)">2. Kronološki slijed:</b> Council &rarr; financije &rarr; asistent. Zamka: pripisati direktnu uzročnost preskačući srednju kariku.</div>
        <div><b style="color:var(--t1)">3. Parafraz u SC:</b> &quot;a small plot&quot; opisuje istu stvar ali nije točan odgovor &mdash; SC zahtijeva točne rije&#269;i.</div>
        <div><b style="color:var(--t1)">4. Buduće vs trenutno:</b> Workshops su buduća aktivnost, ne prihod &mdash; kontekst je ključan.</div>
      </div>
    </div>

discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">📖</div><div class="discere-hd-text">Nastavi s Blokom 5</div></div>
      <div class="discere-body">
        <div class="discere-desc">Poglavlje 18 donosi <b>tipove reading pitanja</b> s interaktivnim vježbama na primjeru teksta.</div>
        <button class="discere-btn" onclick="navigateChapter(18)">Poglavlje 18 →</button>
      </div>
    </div>

    <!-- DISCERE LINK -->
    <div class="discere-box" style="margin-top:28px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Vježbaj na Discere</div></div>
      <div class="discere-body">
        <div class="discere-desc">Uvježbao/la si reading strategije. Provjeri ih na <b>pravim maturalnim tekstovima</b> s interaktivnim pitanjima.</div>
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
      <button class="nav-btn primary" onclick="navigateChapter(18)">Poglavlje 18: Reading tipovi →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>

<script>
const PAGE_KEY='maturiraj_en_visa_p17';
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
  block.dataset.answered='1';
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
    fb.innerHTML='✓ Točno! Skimming = brz pregled za opću ideju — naslovi i prve rečenice odlomaka. Razlika od scanninga: scanning koristiš kad tražiš specifičnu informaciju, skimming za razumijevanje strukture.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. C je točno: Skimming = brzo čitanje za opću ideju (naslovi, prve rečenice). A opisuje scanning. B je previše sporo. D nije strategija.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}
const tipSections=['sec-reading-strategy','sec-task-types','sec-skimming','sec-scanning','sec-listening-strategy','sec-listening-tasks','sec-common-traps'];
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