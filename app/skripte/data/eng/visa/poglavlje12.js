// Maturiraj.hr — Engleski viša razina
// Poglavlje 12: Multiple ChoiceCloze
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 12,
  slug: "poglavlje12",
  title: "Multiple ChoiceCloze",
  subtitle: "Zadatak D \u00b7 8\u201310 praznina \u00b7 4 ponu\u0111ene opcije \u00b7 kolokacije i nijanse",
  blok: 3,
  blokNaziv: "Use of English",
  prev: 11,
  next: 13,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 12</title>
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
.hero::after{content:'12';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
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
.cg-unlock{display:none;margin-top:14px;padding:11px 20px;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;width:100%}
.cg-unlock.show{display:block}
/* TIP BAR */
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}.tip-item.done{color:var(--green)}.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}
/* MCC TEXT */
.mcc-passage{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:22px 24px;margin:14px 0 20px;font-size:15px;line-height:2.4;font-family:var(--serif);color:var(--t1)}
.mcc-blank{display:inline-flex;align-items:center;gap:4px;cursor:pointer;border-bottom:2px solid var(--blue-border);padding:0 4px;border-radius:2px;transition:border-color .15s;position:relative}
.mcc-blank:hover{border-bottom-color:var(--blue)}
.mcc-blank-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);vertical-align:super}
.mcc-blank-word{font-family:var(--mono);font-size:13px;color:var(--amber);min-width:60px;text-align:center}
.mcc-blank.answered-correct{border-bottom-color:var(--green)}.mcc-blank.answered-correct .mcc-blank-word{color:var(--green)}
.mcc-blank.answered-wrong{border-bottom-color:var(--red)}.mcc-blank.answered-wrong .mcc-blank-word{color:var(--red)}
/* MCC QUESTIONS */
.mcc-q{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:12px}
.mcc-q-head{padding:12px 18px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.mcc-q-num{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3)}
.mcc-q-text{font-size:14px;font-weight:600;color:var(--t1)}
.mcc-opts{padding:10px 18px;display:flex;flex-direction:column;gap:6px}
.mcc-opt{display:flex;align-items:center;gap:10px;padding:9px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13.5px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none;font-family:var(--mono)}
.mcc-opt:hover:not(.disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.mcc-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}.mcc-opt.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red)}.mcc-opt.disabled{pointer-events:none}
.mcc-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.mcc-expl{display:none;padding:10px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.mcc-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
/* DISTRACTOR TABLE */
.dist-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px;border-collapse:separate;border-spacing:0}
.dist-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:9px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.dist-table td{padding:9px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.6}
.dist-table tr:last-child td{border-bottom:none}
.dist-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
.dist-table .pair{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--blue)}
.dist-table .diff{color:var(--t2);font-size:12.5px}
.dist-table .ex{color:var(--t1);font-style:italic;font-size:12px;margin-top:3px;display:block}
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
.score-bar{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg-surface);border:1px solid var(--bd-mid);border-radius:var(--r3);margin-bottom:20px;font-family:var(--mono);font-size:12px;color:var(--t3)}
.score-val{font-size:22px;font-weight:700;color:var(--blue);font-family:var(--serif);letter-spacing:-1px;margin-right:4px}
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
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span> 12 · Najčešće zamke</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(11)" style="cursor:pointer"><span class="sb-dot"></span>11 · Word formation</div>
  <div class="sb-item active" onclick="navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span>12 · Najčešće zamke</div>
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
<div class="sb-footer">12 / 20 · najčešće zamke<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-3</span>
    <span class="bc-sep">/</span><span class="bc-active">multiple-choice-cloze</span>
  </div>
  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Strategija<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Vježbaj<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Strategija i zamke</div>
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
      <div class="hero-eyebrow">chapter 12 of 20 · blok 3 — use of english</div>
      <h1 class="hero-title">Multiple Choice<br><span>Cloze</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">12 / 20</span>
      </div>
      <p class="hero-sub">Zadatak D · 8–10 praznina · 4 ponuđene opcije · kolokacije i nijanse</p>
      <div class="progress-track"><div class="progress-bar" style="width:60%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Collocations</span>
      <span class="pill pill-green">Near-synonyms</span>
      <span class="pill pill-gold">Phrasal verbs</span>
      <span class="pill pill-violet">Idioms</span>
      <span class="pill pill-amber">Prepositions</span>
      <span class="pill pill-red">False friends</span>
    </div>
    <div class="sec-label">// što je MCC zadatak</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">MCC</div><div class="stat-name">Zadatak D</div><div class="stat-desc">Tekst s 8–10 praznina. Uz svaku prazninu 4 opcije (A–D). Traži se leksičko znanje, ne gramatičko</div></div>
      <div class="stat-card"><div class="stat-icon green">≈</div><div class="stat-name">Near-synonyms</div><div class="stat-desc">Opcije su <b>gotovo-sinonimi</b> — svi djeluju točno. Razlika je u kolokaciji, registru ili nijansama značenja</div></div>
      <div class="stat-card"><div class="stat-icon gold">fix</div><div class="stat-name">Fiksni izrazi</div><div class="stat-desc">Mnoge praznine su dio ustaljenih izraza: <em>take part, make progress, do damage, carry out</em>...</div></div>
      <div class="stat-card"><div class="stat-icon violet">ctx</div><div class="stat-name">Kontekst odlučuje</div><div class="stat-desc">Čak i kad znaš sve opcije, kontekst rečenice određuje koja je jedina točna u ovom slučaju</div></div>
    </div>
    <div class="sec-label">// 5 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 MCC — strategija od 5 koraka</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Pročitaj cijeli tekst bez opcija.</b> Razumi temu i slijed. Mnoge opcije možeš eliminirati samo na temelju smisla.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Pogledaj što dolazi neposredno prije i poslije praznine.</b> MCC često testira kolokacije — koja opcija ide uz tu imenicu, glagol ili prijedlog?</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Eliminiraj sigurno krive opcije.</b> Od 4 opcije, gotovo uvijek možeš odmah eliminirati 1–2 koje gramatički ili semantički ne funkcioniraju.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Provjeri fiksni izraz.</b> Ako prepoznaješ frazalni glagol ili idiom (npr. "carry ___ a plan"), odgovor je predvidljiv (out).</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>Ubaci odgovor i provjeri zvuči li prirodno.</b> Čitaj rečenicu s odgovorom. Zvuči li kao nativni engleski? Ako nesigurno — baci novčić, ali uvijek odgovori.</div></div>
      </div>
    </div>
    <div class="sec-label">// brzi pregled tipova praznina</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Collocations — najčešći tip u MCC</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Verb + noun collocations:</b><br>
        <span class="ok">make</span> a decision / an effort / progress / a mistake / friends<br>
        <span class="ok">do</span> research / damage / homework / business / good<br>
        <span class="ok">take</span> part / place / advantage / care / action / time<br>
        <span class="ok">carry out</span> research / an investigation / a task / an experiment<br>
        <span class="ok">have</span> an effect / an impact / a chance / a go / difficulty<br><br>
        <span class="bad">Zamka:</span> make vs do — make = kreirati nešto; do = aktivnost. "Make research" ✗ → "do research" ✓
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>Near-synonyms — kako ih razlikovati</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>look / see / watch / notice:</b> look = aktivno gledanje; see = pasivno vidjeti; watch = pratiti (sport/TV); notice = primijetiti<br><br>
        <b>speak / say / tell / talk:</b> say = izreći nešto; tell = reći nekome; speak = komunicirati; talk = razgovarati<br><br>
        <b>bring / take / fetch / carry:</b> bring = donijeti (prema govorniku); take = odnijeti (od govornika); fetch = otići i donijeti; carry = nositi<br><br>
        <b>affect / effect:</b> affect = glagol (utjecati na); effect = imenica (učinak)<br><br>
        <span class="note">Tip: U MCC, sinonimi su uvijek "blizu" — razlika je u registru, kontekstu ili kolokaciji.</span>
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Phrasal verbs i idiomi u MCC</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>carry out</b> (provesti) · <b>carry on</b> (nastaviti) · <b>carry off</b> (izvesti uspješno)<br>
        <b>give up</b> (odustati) · <b>give in</b> (predati se) · <b>give away</b> (odati tajnu/pokloniti)<br>
        <b>bring up</b> (odgojiti/pokrenuti temu) · <b>bring about</b> (uzrokovati) · <b>bring out</b> (objaviti)<br>
        <b>set up</b> (osnovati) · <b>set off</b> (krenuti) · <b>set out</b> (krenuti/iznijeti cilj)<br>
        <b>come across</b> (naići na) · <b>come up with</b> (smisliti) · <b>come about</b> (dogoditi se)<br><br>
        <span class="note">Tip: Particle (up/out/in...) potpuno mijenja značenje — ne možeš pogoditi bez učenja.</span>
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Strategiju</div></div></div>
      <div class="cg-body">
        <div class="cg-question">The scientists _____ out a series of experiments to test their hypothesis.</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">A</div>made</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">B</div>did</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)"><div class="cg-letter">C</div>carried</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">D</div>took</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Strategiju →</button>
      </div>
    </div>
    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(11)">← Poglavlje 11</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Strategija i zamke →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ═══ LAYER 1 ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-strategy')"><span class="tip-dot"></span>Strategija</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-collocations')"><span class="tip-dot"></span>Collocations</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-near-syn')"><span class="tip-dot"></span>Near-synonyms</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-phrasal')"><span class="tip-dot"></span>Phrasal verbs</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-idioms')"><span class="tip-dot"></span>Idiomi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-prepositions')"><span class="tip-dot"></span>Prijedlozi</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-register')"><span class="tip-dot"></span>Registar</div>
    </div>

    <div id="sec-strategy" class="sec-label">// strategija — proces eliminacije</div>
    <p class="prose">MCC je jedini Use of English zadatak gdje <em>ne moraš znati odgovor</em> — možeš eliminirati netočne opcije. Ovo je tvoja prednost.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 24px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--brit-green);letter-spacing:1.5px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd)">RADI OVO</div>
        <div style="font-size:13px;color:var(--t2);line-height:1.8">
          ✓ Pročitaj tekst bez opcija<br>
          ✓ Pogledaj kontekst oko praznine<br>
          ✓ Prepoznaj vrstu praznine (kolokacija? frazal? idiom?)<br>
          ✓ Eliminiraj 1–2 opcije odmah<br>
          ✓ Provjeri ostatak s kontekstom<br>
          ✓ Uvijek odgovori (nema negativnih bodova)
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--union-red);letter-spacing:1.5px;margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd)">IZBJEGAVAJ</div>
        <div style="font-size:13px;color:var(--t2);line-height:1.8">
          ✗ Odabir opcije koja "zvuči dobro" bez provjere<br>
          ✗ Ignoriranje konteksta šire rečenice<br>
          ✗ Odabir prve opcije koja ti padne na pamet<br>
          ✗ Prijevod na materinski jezik<br>
          ✗ Ostavljanje praznine bez odgovora<br>
          ✗ Mijenjanje odgovora bez dobrog razloga
        </div>
      </div>
    </div>

    <div id="sec-collocations" class="sec-label" style="margin-top:36px">// collocations — make / do / take / have / carry</div>
    <p class="prose">Najtestiranije kolokacije na MCC zadatku — razlike između <em>make</em> i <em>do</em> te ostalih glagola.</p>
    <table class="dist-table">
      <thead><tr><th>Glagol</th><th>Ide uz...</th><th>Primjeri</th></tr></thead>
      <tbody>
        <tr><td class="pair">make</td><td class="diff">kreiranje, uzrokovanje, donošenje odluka</td><td><span class="ex">make a decision · make progress · make a mistake · make an effort · make friends · make an exception</span></td></tr>
        <tr><td class="pair">do</td><td class="diff">aktivnosti, zadaci, opće radnje</td><td><span class="ex">do research · do damage · do homework · do business · do good · do an exercise · do the dishes</span></td></tr>
        <tr><td class="pair">take</td><td class="diff">preuzimanje, sudjelovanje, inicijative</td><td><span class="ex">take part · take place · take action · take advantage · take care · take time · take turns</span></td></tr>
        <tr><td class="pair">have</td><td class="diff">iskustvo, posjedovanje, stanje</td><td><span class="ex">have an effect · have an impact · have a chance · have difficulty · have a go · have fun · have a meeting</span></td></tr>
        <tr><td class="pair">carry out</td><td class="diff">provedba istraživanja, eksperimenata, zadataka</td><td><span class="ex">carry out research · carry out an experiment · carry out a task · carry out an investigation</span></td></tr>
        <tr><td class="pair">get</td><td class="diff">dobivanje, postizanje, promjena stanja</td><td><span class="ex">get permission · get rid of · get in touch · get used to · get the impression</span></td></tr>
      </tbody>
    </table>


    <!-- TOP 20 NCVVO COLLOCATIONS -->
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:8px 0 20px">
      <div style="padding:10px 16px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase">Top 20 NCVVO kolokacija — najčešće na MCC zadatku</div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:var(--bg-input)">
              <th style="padding:8px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);border-bottom:1px solid var(--bd-mid)">Kolokacija</th>
              <th style="padding:8px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--union-red);border-bottom:1px solid var(--bd-mid)">Značenje</th>
              <th style="padding:8px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);border-bottom:1px solid var(--bd-mid)">Česta zamka</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">have an impact on</td><td style="padding:8px 14px;color:var(--t2)">imati utjecaj na</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">have an <em>affect</em> ✗ (affect = glagol)</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">take advantage of</td><td style="padding:8px 14px;color:var(--t2)">iskoristiti</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">make/get/have advantage ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">keep track of</td><td style="padding:8px 14px;color:var(--t2)">pratiti, imati pregled nad</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">stay/hold/follow track ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">carry out research</td><td style="padding:8px 14px;color:var(--t2)">provesti istraživanje</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">make/do/take out research ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">result in</td><td style="padding:8px 14px;color:var(--t2)">rezultirati u, uzrokovati</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">lead in / cause in ✗ (result from = nastati zbog)</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">bring about</td><td style="padding:8px 14px;color:var(--t2)">uzrokovati, dovesti do</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">cause about / result about ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">shed light on</td><td style="padding:8px 14px;color:var(--t2)">rasvijetliti, objasniti</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">expose light on ✗ (throw/cast light on ✓ ali rjeđe)</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">take into account</td><td style="padding:8px 14px;color:var(--t2)">uzeti u obzir</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">take in account / keep into account ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">make a decision</td><td style="padding:8px 14px;color:var(--t2)">donijeti odluku</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">do / take a decision ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">make progress</td><td style="padding:8px 14px;color:var(--t2)">napredovati</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">do / achieve progress ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">raise awareness</td><td style="padding:8px 14px;color:var(--t2)">podignuti svijest</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">rise awareness ✗ (rise = intransitive)</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">face challenges</td><td style="padding:8px 14px;color:var(--t2)">suočiti se s izazovima</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">meet challenges (✓ ali rjeđe) / do challenges ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">reach a conclusion</td><td style="padding:8px 14px;color:var(--t2)">doći do zaključka</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">make / get a conclusion ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">put emphasis on</td><td style="padding:8px 14px;color:var(--t2)">staviti naglasak na</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">give / make emphasis on ✗ (place emphasis on ✓)</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">play a role in</td><td style="padding:8px 14px;color:var(--t2)">igrati ulogu u</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">make / have a role in ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">draw a conclusion</td><td style="padding:8px 14px;color:var(--t2)">izvući zaključak</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">take / make a conclusion ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">take part in</td><td style="padding:8px 14px;color:var(--t2)">sudjelovati u</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">make / do part in ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">come to a conclusion</td><td style="padding:8px 14px;color:var(--t2)">doći do zaključka</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">arrive at a conclusion (✓ formalno) / get a conclusion ✗</td></tr>
            <tr style="border-bottom:1px solid var(--bd)"><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">meet a deadline</td><td style="padding:8px 14px;color:var(--t2)">ispoštovati rok</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">catch / hit / do a deadline ✗</td></tr>
            <tr><td style="padding:8px 14px;font-family:var(--mono);font-weight:700;color:var(--brit-green)">come up with</td><td style="padding:8px 14px;color:var(--t2)">smisliti, doći do (ideje)</td><td style="padding:8px 14px;color:var(--t3);font-size:12px">find up with / think up with ✗ (think of ✓)</td></tr>
          </tbody>
        </table>
      </div>
      <div style="padding:10px 16px;background:var(--bg-input);border-top:1px solid var(--bd);font-family:var(--mono);font-size:11px;color:var(--t2);line-height:1.7">
        🔑 Kad na MCC zadatku vidite 4 opcije koje su skoro sinonimi — to je <b style="color:var(--t1)">kolokacijska praznina</b>. Pita se koji glagol/prijedlog/prilog ide uz imenicu u tom kontekstu. Metoda: eliminiraj opcije koje <em>gramatički ne postoje</em> uz tu imenicu, pa provjeri ostale u kontekstu.
      </div>
    </div>

    <div id="sec-near-syn" class="sec-label" style="margin-top:36px">// near-synonyms — pari koji se stalno miješaju</div>
    <table class="dist-table">
      <thead><tr><th>Par</th><th>Razlika</th></tr></thead>
      <tbody>
        <tr><td class="pair">look / see / watch / notice</td><td class="diff"><b>look</b> = aktivno gledati u smjeru · <b>see</b> = pasivno opaziti · <b>watch</b> = pratiti (sport, TV, kretanje) · <b>notice</b> = primijetiti nešto<span class="ex">Look at the sign. / I can see a bird. / Watch the game. / Did you notice anything strange?</span></td></tr>
        <tr><td class="pair">say / tell / speak / talk</td><td class="diff"><b>say</b> = izreći (say sth) · <b>tell</b> = reći nekome (tell sb sth) · <b>speak</b> = komunicirati (speak to sb) · <b>talk</b> = razgovarati (talk about)<span class="ex">She said "hello". / Tell me the truth. / Can I speak to the manager? / Let's talk about it.</span></td></tr>
        <tr><td class="pair">raise / rise</td><td class="diff"><b>raise</b> = prijelazni (raise prices, raise awareness) · <b>rise</b> = neprijelazni (prices rise, the sun rises)<span class="ex">They raised taxes. / Temperatures are rising.</span></td></tr>
        <tr><td class="pair">affect / effect</td><td class="diff"><b>affect</b> = glagol (utjecati na) · <b>effect</b> = imenica (učinak, posljedica)<span class="ex">Stress affects health. / The effect of stress on health.</span></td></tr>
        <tr><td class="pair">economic / economical</td><td class="diff"><b>economic</b> = u vezi s ekonomijom · <b>economical</b> = štedljiv, isplativ<span class="ex">economic crisis / an economical car</span></td></tr>
        <tr><td class="pair">historic / historical</td><td class="diff"><b>historic</b> = koji je ušao u povijest · <b>historical</b> = koji se odnosi na prošlost/povijest<span class="ex">a historic victory / a historical novel</span></td></tr>
      </tbody>
    </table>

    <div id="sec-phrasal" class="sec-label" style="margin-top:36px">// phrasal verbs — particle mijenja sve</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:14px 0 24px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">CARRY / GIVE / BRING</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          <b style="color:var(--t1)">carry out</b> = provesti, izvesti<br>
          <b style="color:var(--t1)">carry on</b> = nastaviti<br>
          <b style="color:var(--t1)">carry off</b> = uspješno izvesti<br>
          <b style="color:var(--t1)">give up</b> = odustati<br>
          <b style="color:var(--t1)">give in</b> = predati se, popustiti<br>
          <b style="color:var(--t1)">give away</b> = odati / besplatno dati<br>
          <b style="color:var(--t1)">bring up</b> = odgojiti / pokrenuti temu<br>
          <b style="color:var(--t1)">bring about</b> = uzrokovati<br>
          <b style="color:var(--t1)">bring out</b> = objaviti, istaknuti
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">SET / COME / LOOK</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          <b style="color:var(--t1)">set up</b> = osnovati, postaviti<br>
          <b style="color:var(--t1)">set off</b> = krenuti na put, aktivirati<br>
          <b style="color:var(--t1)">set out</b> = krenuti / iznijeti (plan)<br>
          <b style="color:var(--t1)">come across</b> = naići slučajno<br>
          <b style="color:var(--t1)">come up with</b> = smisliti, dosjetiti se<br>
          <b style="color:var(--t1)">come about</b> = dogoditi se<br>
          <b style="color:var(--t1)">look into</b> = istražiti<br>
          <b style="color:var(--t1)">look after</b> = brinuti se o<br>
          <b style="color:var(--t1)">look forward to</b> = jedva čekati
        </div>
      </div>
    </div>

    <div id="sec-idioms" class="sec-label" style="margin-top:36px">// idiomi i fiksne fraze</div>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px">
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">IDIOM</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);background:var(--bg-surface)">ZNAČENJE</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">in the long run</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">na duže staze, s vremenom</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">on the whole</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">općenito, u cjelini</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">at first glance</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">na prvi pogled</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">take sth for granted</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">uzimati nešto zdravo za gotovo</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">draw the line at</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">postaviti granicu, odbiti ići dalje</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">get to the point</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">doći do poente, biti konkretan</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">once in a while</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">s vremena na vrijeme</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd);font-family:var(--mono)">out of the question</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">isključeno, ne dolazi u obzir</div></div>
    </div>

    <div id="sec-prepositions" class="sec-label" style="margin-top:36px">// prijedlozi kao distraktori u MCC</div>
    <p class="prose">MCC često testira prijedlog koji ide uz glagol ili pridjev — jedina razlika između 4 opcije može biti prijedlog.</p>
    <div class="callout callout-tip">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Najčešće prepositional traps u MCC</div>
        <div class="callout-text">
          <b>result in</b> (uzrokovati) vs <b>result from</b> (nastati zbog)<br>
          <b>agree with</b> (slagati se s osobom/mišljenjem) vs <b>agree on</b> (dogovoriti se o temi)<br>
          <b>depend on</b> (ovisiti o) — jedini ispravan prijedlog<br>
          <b>consist of</b> (sastojati se od) — nikad "consist from/in"<br>
          <b>aware of</b> vs <b>conscious of</b> — oboje idu s "of"<br>
          <b>keen on</b> (enthuzijastičan o) vs <b>keen to</b> (željeti nešto učiniti)
        </div>
      </div>
    </div>

    <div id="sec-register" class="sec-label" style="margin-top:36px">// registar i stilska razlika</div>
    <p class="prose">Ponekad su sve opcije gramatički točne — razlika je u <em>formalnosti</em> ili kontekstu. Akademski tekst zahtijeva formalniji registar.</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px">
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1px solid var(--bd)">
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">NEFORMALNO</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);border-right:1px solid var(--bd);background:var(--bg-surface)">FORMALNO</div>
        <div style="padding:9px 14px;font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);background:var(--bg-surface)">BILJEŠKA</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">get</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd)">obtain / receive / acquire</div><div style="padding:9px 14px;font-size:12px;color:var(--t3)">akademski tekst → obtain</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">find out</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd)">discover / establish / determine</div><div style="padding:9px 14px;font-size:12px;color:var(--t3)">research kontekst → establish</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">go up / go down</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd)">increase / decrease / decline</div><div style="padding:9px 14px;font-size:12px;color:var(--t3)">statistički podaci → decline</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr"><div style="padding:9px 14px;font-size:13px;color:var(--t2);border-right:1px solid var(--bd)">help</div><div style="padding:9px 14px;font-size:13px;color:var(--t1);border-right:1px solid var(--bd)">facilitate / enable / contribute to</div><div style="padding:9px 14px;font-size:12px;color:var(--t3)">akademski → facilitate</div></div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Discere — vježbaj MCC</div></div>
      <div class="discere-body">
        <div class="discere-desc">Filter: <b>multiple choice cloze</b> → 10 zadataka. Griješiš na kolokacijama? Ponovi tablicu make/do/take/carry.</div>
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
    <div class="sec-label">// interaktivni MCC tekst</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:12px">Pročitaj tekst, zatim odgovori na pitanja ispod. Svaka praznina ima 4 opcije.</p>

    <div class="score-bar">
      <span><span class="score-val" id="mccScore">0</span>/ <span id="mccTotal">10</span> točnih</span>
    </div>

    <div class="mcc-passage">
      The rise of social media has had a profound <span class="mcc-blank" id="mb0"><span class="mcc-blank-num">1</span><span class="mcc-blank-word" id="mw0">___</span></span> on the way people communicate. While platforms such as Twitter and Instagram have made it easier to <span class="mcc-blank" id="mb1"><span class="mcc-blank-num">2</span><span class="mcc-blank-word" id="mw1">___</span></span> track of friends and family across the world, critics argue that these tools have also <span class="mcc-blank" id="mb2"><span class="mcc-blank-num">3</span><span class="mcc-blank-word" id="mw2">___</span></span> about a decline in face-to-face interaction.

      Research <span class="mcc-blank" id="mb3"><span class="mcc-blank-num">4</span><span class="mcc-blank-word" id="mw3">___</span></span> out by leading universities suggests that heavy social media use can <span class="mcc-blank" id="mb4"><span class="mcc-blank-num">5</span><span class="mcc-blank-word" id="mw4">___</span></span> in increased feelings of isolation, particularly among young people. However, proponents of social media <span class="mcc-blank" id="mb5"><span class="mcc-blank-num">6</span><span class="mcc-blank-word" id="mw5">___</span></span> that it provides vital support networks for those who might otherwise feel alone.

      On the <span class="mcc-blank" id="mb6"><span class="mcc-blank-num">7</span><span class="mcc-blank-word" id="mw6">___</span></span>, it appears that the impact of social media depends largely on how it is used. Those who <span class="mcc-blank" id="mb7"><span class="mcc-blank-num">8</span><span class="mcc-blank-word" id="mw7">___</span></span> advantage of its positive features — such as community groups and educational content — tend to report higher levels of well-being.

      Further research is needed to fully <span class="mcc-blank" id="mb8"><span class="mcc-blank-num">9</span><span class="mcc-blank-word" id="mw8">___</span></span> light on the long-term psychological effects of prolonged exposure to online environments, particularly <span class="mcc-blank" id="mb9"><span class="mcc-blank-num">10</span><span class="mcc-blank-word" id="mw9">___</span></span> account of the significant differences in usage patterns across age groups.
    </div>

    <div id="mccQuestions"></div>

    <div class="discere-box" style="margin-top:32px">
      <div class="discere-hd"><div class="discere-hd-icon">🏆</div><div class="discere-hd-text">Blok 3 završen — Use of English</div></div>
      <div class="discere-body">
        <div class="discere-desc">Svladao si sva 4 Use of English zadatka: WF · Open Cloze · KWT · MCC. Sljedeći je <b>Blok 4 — Writing</b> (poglavlja 13–16).</div>
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
      <button class="nav-btn primary" onclick="navigateChapter(13)">Blok 4: Writing →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>

<script>
const PAGE_KEY='maturiraj_en_visa_p12';

const mccData=[
  {q:'1 — "profound ___ on the way people communicate"',opts:['affect','effect','impact','result'],correct:2,expl:'✓ "have an impact on" = imati utjecaj na. "Affect" = glagol (ne imenica). "Effect" = imenica ali kolokacija je "have an effect on" — ovdje "profound" + imenica → "impact" zvuči prirodnije u formalnom tekstu. "Result" ne ide u ovom izrazu.'},
  {q:'2 — "easier to ___ track of friends"',opts:['stay','keep','remain','hold'],correct:1,expl:'✓ "keep track of" = pratiti, imati pregled nad — jedina točna kolokacija. "Stay track of" / "remain track of" / "hold track of" ne postoje u engleskom. Fiksni izraz koji se mora znati napamet.'},
  {q:'3 — "have also ___ about a decline"',opts:['resulted','brought','caused','led'],correct:1,expl:'✓ "bring about" = uzrokovati, dovesti do — frazalni glagol. "Have brought about" = uzrokovali su. "Result about" i "cause about" ne postoje. "Led about" nije idiomatsko (led to ✓, ali ovdje "about").'},
  {q:'4 — "Research ___ out by leading universities"',opts:['carried','taken','made','brought'],correct:0,expl:'✓ "carried out" = provedeno — "carry out research" je standardna kolokacija za provođenje istraživanja. "Taken out" = izvaditi/izvući. "Made out" = naslutiti. "Brought out" = objaviti.'},
  {q:'5 — "can ___ in increased feelings of isolation"',opts:['result','end','lead','cause'],correct:0,expl:'✓ "result in" = rezultirati u, dovesti do — fiksna prepozicijska kolokacija. "Lead in" ne postoji (lead to ✓). "End in" = završiti nečim. "Cause in" ne postoji. Samo "result in" je točno.'},
  {q:'6 — "proponents of social media ___ that"',opts:['argue','claim','tell','speak'],correct:1,expl:'✓ "claim that" = tvrditi da — formalno i prirodno za akademski tekst. "Argue that" je isto prihvatljivo, ali u ovom kontekstu "claim" bolje odgovara proponentima koji brane poziciju. "Tell that" traži objekt. "Speak that" ne postoji.'},
  {q:'7 — "On the ___, it appears that..."',opts:['whole','total','average','contrary'],correct:0,expl:'✓ "on the whole" = općenito, u cjelini — fiksni izraz. "On the total" ne postoji. "On average" = u prosjeku (drugačiji smisao). "On the contrary" = naprotiv (kontrast, ali kontekst nije kontrastan).'},
  {q:'8 — "Those who ___ advantage of its positive features"',opts:['make','take','get','have'],correct:1,expl:'✓ "take advantage of" = iskoristiti — fiksna kolokacija. "Make advantage of" / "get advantage of" / "have advantage of" ne postoje. Jedino "take advantage" je ispravna forma.'},
  {q:'9 — "needed to fully ___ light on the long-term effects"',opts:['expose','throw','shed','cast'],correct:2,expl:'✓ "shed light on" = rasvijetliti, objasniti — najčešća fiksna kolokacija. "Throw light on" je prihvatljivo i relativno uobičajeno. "Cast light on" postoji ali je rjeđe. "Expose light on" ne postoji.'},
  {q:'10 — "particularly ___ account of the significant differences"',opts:['bearing','taking','keeping','holding'],correct:1,expl:'✓ "taking into account" = uzimajući u obzir — standardna fiksna kolokacija. "Bearing in mind" postoji ali ovdje stoji "account", ne "mind". "Keeping account" = voditi evidenciju. "Holding account" ne postoji.'},
];

let mccCorrect=0;
let mccAnswered=new Array(mccData.length).fill(false);

function buildMCC(){
  const container=document.getElementById('mccQuestions');
  container.innerHTML='';
  mccData.forEach((item,idx)=>{
    const div=document.createElement('div');
    div.className='mcc-q';
    div.id='mq'+idx;
    div.innerHTML=\`
      <div class="mcc-q-head">
        <span class="mcc-q-num">Praznina \${idx+1}</span>
        <span class="mcc-q-text">\${item.q}</span>
      </div>
      <div class="mcc-opts">
        \${item.opts.map((o,i)=>\`<div class="mcc-opt" onclick="mccAnswer(this,\${idx},\${i},\${item.correct})"><div class="mcc-letter">\${String.fromCharCode(65+i)}</div>\${o}</div>\`).join('')}
      </div>
      <div class="mcc-expl" id="me\${idx}"><div class="expl-ok">\${item.expl}</div></div>\`;
    container.appendChild(div);
  });
}

function mccAnswer(opt,qIdx,chosen,correct){
  const block=document.getElementById('mq'+qIdx);
  if(mccAnswered[qIdx]) return;
  mccAnswered[qIdx]=true;
  block.querySelectorAll('.mcc-opt').forEach(o=>o.classList.add('disabled'));
  const isCorrect=chosen===correct;
  opt.classList.add(isCorrect?'correct':'wrong');
  if(!isCorrect) block.querySelectorAll('.mcc-opt')[correct].classList.add('correct');
  const expl=document.getElementById('me'+qIdx);
  if(expl){expl.classList.add('show');}
  // Update passage blank
  const blankWord=document.getElementById('mw'+qIdx);
  const blank=document.getElementById('mb'+qIdx);
  if(blankWord){blankWord.textContent=mccData[qIdx].opts[correct];}
  if(blank){blank.classList.add(isCorrect?'answered-correct':'answered-wrong');}
  if(isCorrect){
    mccCorrect++;
    document.getElementById('mccScore').textContent=mccCorrect;
    if(mccCorrect===mccData.length)launchConfetti();
  }
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
  if(isCorrect){
    opt.classList.add('cg-correct');
    fb.className='cg-feedback show pass';
    fb.innerHTML='✓ Točno! "carry out" experiments = provesti eksperimente. Fiksna kolokacija za provođenje istraživanja i eksperimenata. "Make" i "do" experiments su manje idiomatski. "Took" traži drugu strukturu.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. C je točno: "carried out". "Carry out experiments/research" = standardna akademska kolokacija za provođenje eksperimenata. "Made out" = naslutiti. "Did out" ne postoji.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}
const tipSections=['sec-strategy','sec-collocations','sec-near-syn','sec-phrasal','sec-idioms','sec-prepositions','sec-register'];
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
buildMCC();
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