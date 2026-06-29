// Maturiraj.hr — Engleski viša razina
// Poglavlje 18: Reading —Tipovi Pitanja
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 18,
  slug: "poglavlje18",
  title: "Reading \u2014Tipovi Pitanja",
  subtitle: "Multiple choice \u00b7 True/False/Not Given \u00b7 Sentence completion \u00b7 Matching headings \u00b7 Short answer",
  blok: 5,
  blokNaziv: "Reading i Listening",
  prev: 17,
  next: 19,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 18</title>
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
.hero::after{content:'18';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
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
.stat-icon.blue{background:var(--blue-dim);color:var(--blue)}.stat-icon.green{background:var(--brit-green-dim);color:var(--brit-green)}.stat-icon.gold{background:var(--gold-dim);color:var(--gold)}.stat-icon.amber{background:var(--amber-dim);color:var(--amber)}.stat-icon.violet{background:var(--violet-dim);color:var(--violet)}.stat-icon.red{background:var(--union-red-dim);color:var(--union-red)}
.stat-name{font-size:13px;font-weight:600;color:var(--t1);margin-bottom:5px;line-height:1.3}
.stat-desc{font-size:12px;color:var(--t2);line-height:1.5;font-family:var(--mono)}
.prose{font-size:14.5px;line-height:1.85;color:rgba(238,240,248,.82);margin-bottom:16px}
.callout{display:flex;gap:12px;padding:14px 16px;border-radius:var(--r3);margin:14px 0;border:1px solid}
.callout-warn{background:var(--red-dim);border-color:var(--red-border)}.callout-tip{background:var(--amber-dim);border-color:var(--amber-border)}.callout-info{background:var(--blue-dim);border-color:var(--blue-border)}.callout-green{background:var(--brit-green-dim);border-color:var(--brit-green-bd)}
.callout-icon{font-size:15px;flex-shrink:0;margin-top:1px}.callout-body{flex:1}
.callout-title{font-family:var(--mono);font-size:10.5px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
.callout-warn .callout-title{color:var(--red)}.callout-tip .callout-title{color:var(--amber)}.callout-info .callout-title{color:var(--blue)}.callout-green .callout-title{color:var(--brit-green)}
.callout-text{font-size:13px;line-height:1.7;color:var(--t2)}.callout-text b{color:var(--t1)}
.reveal-card{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin-bottom:8px;cursor:pointer;transition:border-color .15s}
.reveal-card:hover{border-color:var(--bd-light)}
.reveal-q{display:flex;align-items:center;justify-content:space-between;padding:13px 16px;font-size:13.5px;font-weight:600;color:var(--t1);gap:12px;user-select:none}
.rq-icon{font-size:16px;flex-shrink:0}.reveal-arrow{font-size:11px;color:var(--t3);transition:transform .2s;flex-shrink:0}
.reveal-card.open .reveal-arrow{transform:rotate(180deg)}
.reveal-ans{max-height:0;overflow:hidden;padding:0 16px;font-size:13px;color:var(--t2);line-height:1.7;background:var(--bg-surface);font-family:var(--mono);transition:max-height .3s ease,padding .3s ease;border-top:1px solid transparent}
.reveal-card.open .reveal-ans{max-height:700px;padding:14px 16px;border-top-color:var(--bd)}
.reveal-ans b{color:var(--t1)}.reveal-ans .ok{color:var(--green)}.reveal-ans .bad{color:var(--red)}.reveal-ans .note{color:var(--blue)}
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
.tip-bar{position:sticky;top:3px;z-index:90;background:var(--bg-surface);border-bottom:1px solid var(--bd);padding:8px 0;margin:-4px 0 24px;display:flex;overflow-x:auto;scrollbar-width:none}
.tip-bar::-webkit-scrollbar{display:none}
.tip-item{display:flex;align-items:center;gap:6px;font-family:var(--mono);font-size:10.5px;color:var(--t3);white-space:nowrap;padding:4px 14px;cursor:pointer;transition:color .15s;flex-shrink:0}
.tip-item:hover{color:var(--t2)}.tip-item.done{color:var(--green)}.tip-item.done .tip-dot{background:var(--green)}
.tip-dot{width:6px;height:6px;border-radius:50%;background:var(--t3);flex-shrink:0}
.tip-sep{color:var(--t3);opacity:.25;flex-shrink:0;align-self:center;font-size:11px}
/* READING PASSAGE */
.passage-wrap{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:16px 0 24px}
.passage-header{padding:14px 22px;background:var(--bg-surface);border-bottom:1px solid var(--bd)}
.passage-pub{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin-bottom:6px}
.passage-title{font-size:18px;font-weight:700;color:var(--t1);font-family:var(--serif);line-height:1.3;margin-bottom:4px}
.passage-sub{font-family:var(--mono);font-size:11px;color:var(--t3)}
.passage-body{padding:22px 26px;font-size:14px;line-height:1.95;font-family:var(--serif);color:rgba(238,240,248,.88)}
.passage-para{margin-bottom:16px;position:relative}
.para-label{display:inline-block;font-family:var(--mono);font-size:9px;font-weight:700;color:var(--t3);border:1px solid var(--bd);border-radius:var(--r1);padding:1px 6px;margin-right:8px;vertical-align:middle;letter-spacing:1px}
.hl{background:rgba(79,123,232,.18);border-radius:2px;padding:0 2px;border-bottom:1px solid var(--blue-border);cursor:help;position:relative}
.hl:hover::after{content:attr(data-q);position:absolute;left:0;bottom:100%;background:var(--bg-surface);border:1px solid var(--blue-border);color:var(--blue);font-size:11px;font-family:var(--mono);padding:4px 8px;border-radius:var(--r2);white-space:nowrap;z-index:10;margin-bottom:4px;max-width:240px;white-space:normal;line-height:1.4}
/* QUESTION BLOCKS */
.qsec{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:16px 0 24px}
.qsec-head{padding:12px 20px;background:var(--bg-surface);border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.qsec-badge{font-family:var(--mono);font-size:11px;font-weight:700;padding:4px 12px;border-radius:var(--r1);border:1px solid}
.qsec-badge.mc{background:var(--blue-dim);color:var(--blue);border-color:var(--blue-border)}
.qsec-badge.tfng{background:var(--gold-dim);color:var(--gold);border-color:var(--gold-bd)}
.qsec-badge.sc{background:var(--violet-dim);color:var(--violet);border-color:var(--violet-border)}
.qsec-title{font-size:14px;font-weight:600;color:var(--t1)}
.qsec-body{padding:18px 20px;display:flex;flex-direction:column;gap:14px}
.q-item{background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden}
.q-item-head{padding:12px 16px;border-bottom:1px solid var(--bd)}
.q-num{font-family:var(--mono);font-size:10px;color:var(--t3);margin-bottom:5px}
.q-stem{font-size:13.5px;font-weight:600;color:var(--t1);line-height:1.45}
.q-options{padding:10px 16px;display:flex;flex-direction:column;gap:5px}
.q-option{display:flex;align-items:flex-start;gap:9px;padding:8px 12px;border-radius:var(--r2);border:1px solid var(--bd);cursor:pointer;transition:all .12s;font-size:13px;color:var(--t2);user-select:none}
.q-option:hover:not(.locked){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.q-option.selected{border-color:var(--blue-border);background:var(--blue-dim);color:var(--blue)}
.q-option.correct{border-color:var(--green-border);background:var(--green-dim);color:var(--green);pointer-events:none}
.q-option.wrong{border-color:var(--red-border);background:var(--red-dim);color:var(--red);pointer-events:none}
.q-option.locked{pointer-events:none}
.opt-letter{width:20px;height:20px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;font-family:var(--mono);color:var(--t3)}
.q-tfng{padding:10px 16px;display:flex;gap:8px;flex-wrap:wrap}
.tfng-btn{padding:7px 18px;border-radius:var(--r2);border:1px solid var(--bd-mid);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:all .12s;color:var(--t2)}
.tfng-btn:hover:not(.locked){background:var(--bg-hover);color:var(--t1)}
.tfng-btn.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green);pointer-events:none}
.tfng-btn.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red);pointer-events:none}
.tfng-btn.locked{pointer-events:none}
.q-sc-input{padding:10px 16px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.sc-field{background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 14px;font-family:var(--mono);font-size:13px;color:var(--t1);min-width:180px;outline:none;transition:border-color .15s}
.sc-field:focus{border-color:var(--blue-border)}
.sc-field.correct{border-color:var(--green-border);background:var(--green-dim);color:var(--green)}
.sc-field.wrong{border-color:var(--red-border);background:var(--red-dim);color:var(--red)}
.sc-btn{font-family:var(--mono);font-size:12px;font-weight:700;padding:8px 18px;border-radius:var(--r2);background:var(--blue);color:#fff;border:none;cursor:pointer;transition:opacity .15s}
.sc-btn:hover{opacity:.85}.sc-btn:disabled{opacity:.4;cursor:default}
.q-feedback{padding:10px 16px;border-top:1px solid var(--bd);font-size:12.5px;font-family:var(--mono);line-height:1.65;display:none}
.q-feedback.show{display:block}
.q-feedback.pass{background:var(--green-dim);color:var(--green)}.q-feedback.fail{background:var(--red-dim);color:var(--red)}
/* SCORE BAR */
.score-bar{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 20px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin:14px 0 24px}
.score-label{font-family:var(--mono);font-size:11px;color:var(--t3)}
.score-val{font-family:var(--serif);font-size:24px;font-weight:700;color:var(--t1)}
.score-track{flex:1;height:8px;background:var(--bd-mid);border-radius:4px;overflow:hidden;min-width:120px}
.score-fill{height:100%;background:linear-gradient(90deg,var(--union-red),var(--blue));border-radius:4px;transition:width .4s ease}
.score-pct{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--blue)}
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
.back-top{position:fixed;bottom:86px;right:24px;z-index:200;width:38px;height:38px;border-radius:50%;background:var(--bg-card);border:1px solid var(--bd-mid);color:var(--t3);font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s,transform .2s;box-shadow:0 2px 12px rgba(0,0,0,.3)}
.back-top.show{opacity:1;pointer-events:auto}.back-top:hover{color:var(--blue);border-color:var(--blue-border);transform:translateY(-2px)}
@media(min-width:721px){.back-top{right:32px;bottom:32px}}
.hamburger{display:none;position:fixed;bottom:22px;right:22px;z-index:300;width:50px;height:50px;background:var(--blue);border-radius:50%;border:none;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(79,123,232,.4);transition:transform .15s}
.hamburger:hover{transform:scale(1.08)}.hamburger svg{width:20px;height:20px}
.mob-drawer{display:none;position:fixed;inset:0;z-index:250;background:rgba(6,8,16,.95);backdrop-filter:blur(8px);flex-direction:column;padding:28px 24px;overflow-y:auto}
.mob-drawer.open{display:flex}
.mob-drawer-close{align-self:flex-end;background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:8px 18px;font-family:var(--mono);font-size:12px;color:var(--t2);cursor:pointer;margin-bottom:20px}
.mob-drawer .sb-label{padding:14px 0 5px}.mob-drawer .sb-item{padding:10px 0;border-left:none;border-bottom:1px solid var(--bd)}
@media(max-width:720px){.hamburger{display:flex}.sidebar{display:none}.main{margin-left:0}}
@media(max-width:520px){.content-wrap{padding:24px 20px 80px}.q-sc-input{flex-direction:column;align-items:stretch}.sc-field{min-width:0;width:100%}}
@media(prefers-reduced-motion:reduce){*{animation-duration:.01ms!important;transition-duration:.01ms!important}}

.mh-select{font-family:var(--mono);font-size:12.5px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:6px 10px;width:100%;cursor:pointer;transition:border-color .15s}
.mh-select:focus{outline:none;border-color:var(--blue)}
.sa-field{font-family:var(--mono);font-size:13px;background:var(--bg-input);color:var(--t1);border:1px solid var(--bd-mid);border-radius:var(--r2);padding:7px 12px;width:calc(100% - 90px);transition:border-color .15s}
.sa-field:focus{outline:none;border-color:var(--blue)}
.sa-btn{font-family:var(--mono);font-size:11px;font-weight:700;background:var(--blue);color:#fff;border:none;border-radius:var(--r2);padding:7px 14px;cursor:pointer;margin-left:6px;white-space:nowrap}

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
  <div class="sb-item done-ch" onclick="closeMobDrawer();navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span> 17 · Reading strategije</div>
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span> 18 · Listening strategije</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span>17 · Reading strategije</div>
  <div class="sb-item active" onclick="navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span>18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span>19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span>20 · Final Exam Survival</div>
<div class="sb-footer">18 / 20 · listening strategije<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-5</span>
    <span class="bc-sep">/</span><span class="bc-active">reading-tipovi-pitanja</span>
  </div>
  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Tipovi pitanja<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Interaktivni drill<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Tipovi pitanja</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Drill na tekstu</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~40 min
    </div>
  </div>
  <!-- ═══ LAYER 0 ═══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 18 of 20 · blok 5 — reading</div>
      <h1 class="hero-title">Reading —<br><span>Tipovi Pitanja</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">18 / 20</span>
      </div>
      <p class="hero-sub">Multiple choice · True/False/Not Given · Sentence completion · Matching headings · Short answer</p>
      <div class="progress-track"><div class="progress-bar" style="width:90%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Multiple Choice</span>
      <span class="pill pill-gold">True / False / Not Given</span>
      <span class="pill pill-violet">Sentence Completion</span>
      <span class="pill pill-green">Matching Headings</span>
      <span class="pill pill-amber">Short Answer</span>
      <span class="pill pill-red">Distractori</span>
    </div>
    <div class="sec-label">// 5 tipova pitanja — kratki pregled</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">MC</div><div class="stat-name">Multiple Choice</div><div class="stat-desc">Najčešći tip. 4 opcije, 1 točna. Točan odgovor je uvijek parafraziran — ne kopiran iz teksta.</div></div>
      <div class="stat-card"><div class="stat-icon gold">T/F/NG</div><div class="stat-name">True / False / NG</div><div class="stat-desc">Najtežji tip. Razlika False (suprotno) i Not Given (nije u tekstu) zbunjuje čak i napredne učenike.</div></div>
      <div class="stat-card"><div class="stat-icon violet">SC</div><div class="stat-name">Sentence Completion</div><div class="stat-desc">Dopuni rečenicu riječima iz teksta. Broj riječi je strogo ograničen. Spelling mora biti točan.</div></div>
      <div class="stat-card"><div class="stat-icon green">MH</div><div class="stat-name">Matching Headings</div><div class="stat-desc">Poveži naslove s odlomcima. Naslov = tema cijelog odlomka, ne jedan detalj. Čitaj topic sentence.</div></div>
      <div class="stat-card"><div class="stat-icon amber">SA</div><div class="stat-name">Short Answer</div><div class="stat-desc">Kratki odgovor na pitanje (1–3 words iz teksta). Pazi na tip tražene informacije (who/what/when).</div></div>
    </div>
    <div class="sec-label">// 3 ključne razlike između tipova</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Multiple Choice — kako eliminirati distraktore</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>4 tipa distraktora koji se pojavljuju:</b><br>
        <span class="bad">1. Pretjerivanje:</span> tekst = "some", opcija = "all" / "always" / "never" → Wrong<br>
        <span class="bad">2. Suprotno:</span> tekst = "increased", opcija = "decreased" → Wrong<br>
        <span class="bad">3. Izvan dosega:</span> točna informacija, ali o drugoj stvari od pitanja → Wrong<br>
        <span class="bad">4. Djelomično točno:</span> prva half rečenice točna, druga netočna → Wrong<br><br>
        <span class="ok">Strategija eliminacije:</span> Prekriži 2 najgore opcije odmah, pa bira između 2 preostale.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>True/False/NG — decision tree</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Korak 1:</b> Je li tema tvrdnje uopće u tekstu?<br>
        → Nije → <span class="ok">NOT GIVEN</span><br><br>
        <b>Korak 2 (tema JE u tekstu):</b> Što tekst kaže o tome?<br>
        → Isto kao tvrdnja (ili parafraz) → <span class="ok">TRUE</span><br>
        → Suprotno od tvrdnje → <span class="ok">FALSE</span><br><br>
        <span class="bad">Najčešća greška:</span> Učenik "zna" da je nešto točno iz opće kulture i piše True — ali informacija nije u tekstu → mora biti NOT GIVEN.
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Sentence Completion — pravila spellingа i limita</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Pravilo br. 1 — Koristi točne riječi iz teksta:</b> Ne parafraziraj. Ako tekst kaže "rapidly" — piši "rapidly", ne "quickly".<br><br>
        <b>Pravilo br. 2 — Poštuj word limit:</b><br>
        "Write ONE word" → samo 1 riječ<br>
        "Write NO MORE THAN TWO words" → 1 ili 2 riječi (ne 3)<br>
        "Write NO MORE THAN TWO words AND/OR a number" → broj + 1-2 riječi OK<br><br>
        <b>Pravilo br. 3 — Spelling se boduje:</b> "recieve" umjesto "receive" = 0 bodova.<br>
        <span class="note">Tip: Artikli (the, a/an) i prijedlozi (of, in) broje se u word limit!</span>
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Tipove pitanja</div></div></div>
      <div class="cg-body">
        <div class="cg-question">Tekst kaže: "The city's population grew by 15% over a decade." Tvrdnja: "The city doubled in size." — Koji je odgovor?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">A</div>True — grad je rastao</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)"><div class="cg-letter">B</div>False — 15% rast nije udvostručavanje</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">C</div>Not Given — nema podataka o populaciji</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">D</div>True — desetljeće je dovoljno dugo za udvostručavanje</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Tipove pitanja →</button>
      </div>
    </div>
    <div class="nav-row">
      <button class="nav-btn" onclick="navigateChapter(17)">← Poglavlje 17</button>
      <span class="nav-btn primary" onclick="switchTab(1)">Tipovi pitanja →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ═══ LAYER 1 ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-mc')"><span class="tip-dot"></span>Multiple Choice</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-tfng')"><span class="tip-dot"></span>T/F/Not Given</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-sc')"><span class="tip-dot"></span>Sentence Completion</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-mh')"><span class="tip-dot"></span>Matching Headings</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-sa')"><span class="tip-dot"></span>Short Answer</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-paraphrase')"><span class="tip-dot"></span>Parafraz</div>
    </div>

    <!-- MC -->
    <div id="sec-mc" class="sec-label">// multiple choice — kako razmišlja ocjenjivač</div>
    <p class="prose">Svako MC pitanje ima <em>jedan točan odgovor</em> i tri distraktora. Distractori su osmišljeni — nisu nasumični. Znati prepoznati tip distraktora = brže odgovarati.</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 20px">
      <div style="padding:10px 16px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3)">4 TIPA DISTRAKTORA — PREPOZNAJ I ELIMINIRAJ</div>
      <div style="padding:4px 0">
        <div style="display:grid;grid-template-columns:130px 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:10px 14px;font-family:var(--mono);font-size:11px;font-weight:700;color:var(--red);border-right:1px solid var(--bd)">Pretjerivanje</div>
          <div style="padding:10px 14px;font-size:13px;color:var(--t2)">Tekst: "some researchers believe" → Opcija: "all scientists agree" — Uvijek lažno kad opcija kaže "all/every/always/never" a tekst je umjereniji.</div>
        </div>
        <div style="display:grid;grid-template-columns:130px 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:10px 14px;font-family:var(--mono);font-size:11px;font-weight:700;color:var(--red);border-right:1px solid var(--bd)">Suprotno</div>
          <div style="padding:10px 14px;font-size:13px;color:var(--t2)">Tekst: "sales declined" → Opcija: "sales increased" — Direktna zamjena ključnog glagola/pridjeva suprotnicom.</div>
        </div>
        <div style="display:grid;grid-template-columns:130px 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:10px 14px;font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);border-right:1px solid var(--bd)">Izvan dosega</div>
          <div style="padding:10px 14px;font-size:13px;color:var(--t2)">Točna informacija iz teksta — ali odgovor na DRUGU stvar, ne na postavljeno pitanje. Pažljivo čitaj pitanje!</div>
        </div>
        <div style="display:grid;grid-template-columns:130px 1fr">
          <div style="padding:10px 14px;font-family:var(--mono);font-size:11px;font-weight:700;color:var(--amber);border-right:1px solid var(--bd)">Djelomično</div>
          <div style="padding:10px 14px;font-size:13px;color:var(--t2)">Opcija je točna napola — prva half odgovara tekstu, ali završetak je netočan ili nije u tekstu. Čitaj do kraja opcije.</div>
        </div>
      </div>
    </div>
    <div class="callout callout-green">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <div class="callout-title">Tehnika eliminacije u 2 koraka</div>
        <div class="callout-text">
          <b>Korak 1:</b> Ukloni opcije s "always/never/all/none" ako tekst koristi umjereniji jezik.<br>
          <b>Korak 2:</b> Od preostale 2 opcije — pronađi relevantni dio teksta i usporedi smisao, ne samo iste riječi.
        </div>
      </div>
    </div>

    <!-- T/F/NG -->
    <div id="sec-tfng" class="sec-label" style="margin-top:36px">// true / false / not given — decision tree</div>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 20px">
      <div style="padding:10px 16px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3)">DECISION TREE — KORISTI OVAJ REDOSLIJED</div>
      <div style="padding:16px;display:flex;flex-direction:column;gap:10px">
        <div style="display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;">1</div>
          <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.6"><b style="color:var(--t1)">Identificiraj temu tvrdnje</b> — što točno tvrdi rečenica? (subjekt + predikat)</div>
        </div>
        <div style="display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;">2</div>
          <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.6"><b style="color:var(--t1)">Traži tu temu u tekstu</b> — scan za ključne riječi ili parafraz teme. Ako NEMA → odmah <span style="color:var(--gold)">NOT GIVEN</span></div>
        </div>
        <div style="display:grid;grid-template-columns:28px 1fr;gap:10px;align-items:start">
          <div style="width:28px;height:28px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:12px;font-weight:700;display:flex;align-items:center;justify-content:center;">3</div>
          <div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.6"><b style="color:var(--t1)">Usporedi tvrdnju s tekstom</b> — Isto/parafraz → <span style="color:var(--brit-green)">TRUE</span> · Suprotno → <span style="color:var(--red)">FALSE</span></div>
        </div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:14px 0 24px">
      <div style="background:var(--brit-green-dim);border:1px solid var(--brit-green-bd);border-radius:var(--r3);padding:12px">
        <div style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--brit-green);margin-bottom:8px">TRUE</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.55">Tekst potvrđuje tvrdnju — doslovno ili parafrazom. Smisao je isti.</div>
      </div>
      <div style="background:var(--red-dim);border:1px solid var(--red-border);border-radius:var(--r3);padding:12px">
        <div style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--red);margin-bottom:8px">FALSE</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.55">Tekst kaže suprotno. Tema JE u tekstu, ali tvrdnja je netočna.</div>
      </div>
      <div style="background:var(--gold-dim);border:1px solid var(--gold-bd);border-radius:var(--r3);padding:12px">
        <div style="font-family:var(--mono);font-size:11px;font-weight:700;color:var(--gold);margin-bottom:8px">NOT GIVEN</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.55">Tema se ne pojavljuje. Ne možeš zaključiti ni TRUE ni FALSE.</div>
      </div>
    </div>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Najčešća zamjena: False vs Not Given</div>
        <div class="callout-text">
          <b>Tvrdnja:</b> "The study was conducted in Japan."<br>
          <b>Tekst:</b> Ne spominje gdje je studija provedena.<br>
          → <b>NOT GIVEN</b> (ne FALSE) — tekst ne kaže da nije u Japanu, samo ne govori o lokaciji.<br><br>
          FALSE = tekst DIREKTNO kaže suprotno: "The study was conducted in Germany."
        </div>
      </div>
    </div>

    <!-- SC -->
    <div id="sec-sc" class="sec-label" style="margin-top:36px">// sentence completion — 3 pravila</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin:14px 0 24px">
      <div style="background:var(--bg-card);border:1px solid var(--violet-border);border-radius:var(--r3);padding:14px 16px;display:grid;grid-template-columns:32px 1fr;gap:12px;align-items:start">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--violet);color:#fff;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;">1</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:5px">Koristi točne riječi iz teksta — ne parafraziraj</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.55">Tekst: "The temperature dropped significantly" → Pravilno: <span style="color:var(--brit-green)">dropped significantly</span> · Pogrešno: <span style="color:var(--red)">fell a lot</span></div></div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--violet-border);border-radius:var(--r3);padding:14px 16px;display:grid;grid-template-columns:32px 1fr;gap:12px;align-items:start">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--violet);color:#fff;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;">2</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:5px">Poštuj word limit — artikli i prijedlozi se broje</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.55">Limit: NO MORE THAN TWO WORDS → "the conference room" = 3 words = ✗ · "conference room" = 2 words = ✓ · Čak i "a" i "of" broje se!</div></div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--violet-border);border-radius:var(--r3);padding:14px 16px;display:grid;grid-template-columns:32px 1fr;gap:12px;align-items:start">
        <div style="width:32px;height:32px;border-radius:50%;background:var(--violet);color:#fff;font-family:var(--mono);font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center;">3</div>
        <div><div style="font-size:14px;font-weight:600;color:var(--t1);margin-bottom:5px">Spelling mora biti točan</div><div style="font-size:13px;color:var(--t2);font-family:var(--mono);line-height:1.55">Čak i jednom netočno slovo = 0 bodova. Provjeri: receive (ne recieve), environment (ne enviroment), necessary (ne neccesary).</div></div>
      </div>
    </div>

    <!-- MATCHING HEADINGS -->
    <div id="sec-mh" class="sec-label" style="margin-top:36px">// matching headings — naslov = tema odlomka</div>
    <p class="prose">Naslov mora opisivati <em>cijeli odlomak</em>, ne jedan detalj iz sredine. Čitaj topic sentence i zadnju rečenicu — to su ključevi.</p>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--brit-green-bd);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--brit-green);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">✓ DOBRA STRATEGIJA</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          1. Čitaj prvu i zadnju rečenicu odlomka<br>
          2. Sažmi temu u 3–4 vlastite riječi<br>
          3. Traži naslov koji pokriva tu temu<br>
          4. Eliminiraj naslove koji su prespecifični<br>
          5. Provjeri eliminiranim opcijama
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--red-border);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--red);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">✗ ČESTE GREŠKE</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          ✗ Odabir naslova jer se ključna riječ pojavljuje<br>
          ✗ Fokus na primjer iz sredine odlomka<br>
          ✗ Ne provjera što naslov zapravo znači<br>
          ✗ Preskakanje odlomaka koje smatraš lakim<br>
          ✗ Ne korištenje eliminacije
        </div>
      </div>
    </div>

    <!-- SHORT ANSWER -->
    <div id="sec-sa" class="sec-label" style="margin-top:36px">// short answer — točan oblik odgovora</div>
    <p class="prose">Short answer pitanja traže odgovor koji odgovara <em>tipu informacije</em> iz pitanja — tko, što, gdje, kada, koliko.</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px">
      <div style="padding:10px 14px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3)">TIP PITANJA → TIP ODGOVORA</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;font-weight:600;color:var(--blue);border-right:1px solid var(--bd);font-family:var(--mono)">Who...? / Who is...?</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">Osoba ili organizacija (ime)</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;font-weight:600;color:var(--blue);border-right:1px solid var(--bd);font-family:var(--mono)">What...? / What is...?</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">Stvar, pojam, naziv, karakteristika</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;font-weight:600;color:var(--blue);border-right:1px solid var(--bd);font-family:var(--mono)">Where...?</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">Mjesto, lokacija, zemlja</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;font-weight:600;color:var(--blue);border-right:1px solid var(--bd);font-family:var(--mono)">When...? / In which year?</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">Datum, godina, vremenski period</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)"><div style="padding:9px 14px;font-size:13px;font-weight:600;color:var(--blue);border-right:1px solid var(--bd);font-family:var(--mono)">How many / much...?</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">Broj, količina, postotak</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr"><div style="padding:9px 14px;font-size:13px;font-weight:600;color:var(--blue);border-right:1px solid var(--bd);font-family:var(--mono)">Why...? / What reason...?</div><div style="padding:9px 14px;font-size:13px;color:var(--t2)">Razlog — obično gerund ili noun phrase</div></div>
    </div>

    <!-- PARAPHRASE -->
    <div id="sec-paraphrase" class="sec-label" style="margin-top:36px">// parafraz — srce reading zadataka</div>
    <p class="prose">Razumijevanje parafraza je <em>najvažnija</em> vještina u readingu. Tekst i pitanje nikad ne koriste iste riječi — morate prepoznati sinonime i reformulacije.</p>
    <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px">
      <div style="padding:10px 16px;background:var(--bg-surface);border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3)">ČESTI PARAFRAZI — NAUČI IH PREPOZNATI</div>
      <div style="padding:4px 0">
        <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--union-red);border-right:1px solid var(--bd)">increased / rose / went up</div>
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--brit-green)">grew / climbed / surged / expanded</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--union-red);border-right:1px solid var(--bd)">decreased / fell / dropped</div>
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--brit-green)">declined / reduced / diminished / shrunk</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--union-red);border-right:1px solid var(--bd)">difficult / hard / challenging</div>
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--brit-green)">demanding / complex / problematic / arduous</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--union-red);border-right:1px solid var(--bd)">important / significant</div>
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--brit-green)">crucial / vital / key / fundamental / critical</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;border-bottom:1px solid var(--bd)">
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--union-red);border-right:1px solid var(--bd)">many / a lot of / numerous</div>
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--brit-green)">a large number of / a wide range of / considerable</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr">
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--union-red);border-right:1px solid var(--bd)">because of / due to / as a result of</div>
          <div style="padding:9px 14px;font-family:var(--mono);font-size:12.5px;color:var(--brit-green)">owing to / on account of / stemming from</div>
        </div>
      </div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Primijeni na tekstu</div></div>
      <div class="discere-body">
        <div class="discere-desc">Tab Drill donosi pravi reading tekst s interaktivnim pitanjima sva 3 tipa — MC, T/F/NG i Sentence Completion.</div>
        <span class="discere-btn" onclick="switchTab(2)" style="cursor:pointer">Interaktivni drill →</span>
      </div>
    </div>
    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Interaktivni drill →</span>
    </div>
  </div><!-- /l1 -->
  <!-- ═══ LAYER 2 — INTERACTIVE DRILL ═══ -->
  <div class="layer" id="l2">
    <div class="sec-label">// reading passage — pravi tekst, pravi format</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Pročitaj tekst, pa odgovori na pitanja ispod. Plavo označena mjesta = relevantna za pitanja (hover za upit).</p>

    <div class="passage-wrap">
      <div class="passage-header">
        <div class="passage-pub">Reading Passage · Blok 5 · Drill tekst</div>
        <div class="passage-title">The Rise of Urban Farming</div>
        <div class="passage-sub">Adapted from an educational article on sustainable food production</div>
      </div>
      <div class="passage-body">
        <div class="passage-para">
          <span class="para-label">A</span>
          In cities across the world, <span class="hl" data-q="MC Q1: Why are rooftops and empty lots being used?">rooftops, abandoned lots and converted warehouses are being transformed into productive agricultural spaces</span>. Urban farming — the practice of growing food within or close to city boundaries — has grown rapidly over the past two decades, driven largely by concerns about food security, sustainability and the environmental costs of long-distance food transportation.
        </div>
        <div class="passage-para">
          <span class="para-label">B</span>
          Proponents of urban agriculture argue that it offers a range of benefits beyond simply producing food. <span class="hl" data-q="T/F/NG Q4: Community benefits">Community gardens, for instance, have been shown to strengthen social bonds in otherwise fragmented urban neighbourhoods</span>, while also providing residents with access to fresh produce that might otherwise be unaffordable or unavailable. Furthermore, green spaces within cities have documented benefits for mental health, reducing stress and improving overall wellbeing among urban populations.
        </div>
        <div class="passage-para">
          <span class="para-label">C</span>
          <span class="hl" data-q="MC Q2: What limits urban farming growth?">Not everyone, however, is convinced that urban farming can realistically address large-scale food needs. Critics point out that the amount of land available within cities is severely limited</span>, and that even the most optimistic projections suggest urban farms could supply only a small fraction of a city's total food requirements. The costs of establishing and maintaining rooftop gardens or vertical farms, they argue, frequently outweigh the economic benefits.
        </div>
        <div class="passage-para">
          <span class="para-label">D</span>
          <span class="hl" data-q="SC Q5: What technology enabled vertical farms?">Technological advances have, however, opened new possibilities. The development of LED lighting systems capable of replicating the full spectrum of sunlight has made indoor vertical farming economically viable in a way that was not possible twenty years ago</span>. Some commercial vertical farms now operate entirely without natural light, allowing them to function in basements or windowless buildings, and to produce crops year-round regardless of weather conditions.
        </div>
        <div class="passage-para">
          <span class="para-label">E</span>
          <span class="hl" data-q="T/F/NG Q6: Water usage in vertical farms">Vertical farms also use significantly less water than conventional agriculture — some operators report reductions of up to 95% compared to field farming</span> — through the use of hydroponic and aeroponic systems that deliver water and nutrients directly to plant roots. This characteristic makes them particularly attractive in regions facing water scarcity, though the high energy demands of artificial lighting remain a significant concern.
        </div>
      </div>
    </div>

    <!-- SCORE BAR -->
    <div class="score-bar">
      <div class="score-label">Ukupan rezultat</div>
      <div class="score-val" id="scoreVal">0 / 6</div>
      <div class="score-track"><div class="score-fill" id="scoreFill" style="width:0%"></div></div>
      <div class="score-pct" id="scorePct">0%</div>
    </div>

    <!-- SECTION 1: MULTIPLE CHOICE -->
    <div class="qsec">
      <div class="qsec-head">
        <span class="qsec-badge mc">Multiple Choice</span>
        <div class="qsec-title">Pitanja 1–2 · Odaberi točan odgovor</div>
      </div>
      <div class="qsec-body">
        <div class="q-item" id="qi1">
          <div class="q-item-head">
            <div class="q-num">Pitanje 1</div>
            <div class="q-stem">According to paragraph A, what is the main reason for the growth of urban farming?</div>
          </div>
          <div class="q-options">
            <div class="q-option" onclick="mcAnswer('qi1',this,false)"><div class="opt-letter">A</div>The increasing availability of empty urban spaces</div>
            <div class="q-option" onclick="mcAnswer('qi1',this,false)"><div class="opt-letter">B</div>Government investment in agricultural technology</div>
            <div class="q-option" onclick="mcAnswer('qi1',this,true)"><div class="opt-letter">C</div>Worries about food supply, the environment and transport costs</div>
            <div class="q-option" onclick="mcAnswer('qi1',this,false)"><div class="opt-letter">D</div>The high cost of food in city supermarkets</div>
          </div>
          <div class="q-feedback" id="qf1">✓ Točno — Paragraf A navodi "food security, sustainability and the environmental costs of long-distance food transportation" → Opcija C je parafraz sva tri razloga. A je distractor (prostor je samo sredstvo, ne razlog). B i D nisu u tekstu.</div>
        </div>

        <div class="q-item" id="qi2">
          <div class="q-item-head">
            <div class="q-num">Pitanje 2</div>
            <div class="q-stem">What do critics of urban farming claim in paragraph C?</div>
          </div>
          <div class="q-options">
            <div class="q-option" onclick="mcAnswer('qi2',this,false)"><div class="opt-letter">A</div>Urban farms produce too much food for cities to consume</div>
            <div class="q-option" onclick="mcAnswer('qi2',this,true)"><div class="opt-letter">B</div>Urban farms cannot realistically meet most of a city's food demands</div>
            <div class="q-option" onclick="mcAnswer('qi2',this,false)"><div class="opt-letter">C</div>The technology required is not yet available</div>
            <div class="q-option" onclick="mcAnswer('qi2',this,false)"><div class="opt-letter">D</div>Urban farming is only suitable for wealthy neighbourhoods</div>
          </div>
          <div class="q-feedback" id="qf2">✓ Točno — Paragraf C: "urban farms could supply only a small fraction of a city's total food requirements" → parafraz opcije B. A je suprotno (pretjerivanje). C je pogrešno (tehnologija postoji, ali pitanje je ekonomičnosti). D nije u tekstu (Not Given zamka).</div>
        </div>
      </div>
    </div>

    <!-- SECTION 2: TRUE/FALSE/NOT GIVEN -->
    <div class="qsec">
      <div class="qsec-head">
        <span class="qsec-badge tfng">True / False / Not Given</span>
        <div class="qsec-title">Pitanja 3–4 · Odaberi T, F ili NG</div>
      </div>
      <div class="qsec-body">
        <div class="q-item" id="qi3">
          <div class="q-item-head">
            <div class="q-num">Pitanje 3</div>
            <div class="q-stem">Indoor vertical farms are now able to grow crops throughout the entire year.</div>
          </div>
          <div class="q-tfng">
            <div class="tfng-btn" onclick="tfngAnswer('qi3',this,'T',true)">TRUE</div>
            <div class="tfng-btn" onclick="tfngAnswer('qi3',this,'F',false)">FALSE</div>
            <div class="tfng-btn" onclick="tfngAnswer('qi3',this,'NG',false)">NOT GIVEN</div>
          </div>
          <div class="q-feedback" id="qf3">✓ Točno — TRUE. Paragraf D: "to produce crops year-round regardless of weather conditions" — "year-round" = "throughout the entire year". Direktan parafraz, tema je jasno u tekstu.</div>
        </div>

        <div class="q-item" id="qi4">
          <div class="q-item-head">
            <div class="q-num">Pitanje 4</div>
            <div class="q-stem">Community gardens have been proven to reduce crime rates in urban areas.</div>
          </div>
          <div class="q-tfng">
            <div class="tfng-btn" onclick="tfngAnswer('qi4',this,'T',false)">TRUE</div>
            <div class="tfng-btn" onclick="tfngAnswer('qi4',this,'F',false)">FALSE</div>
            <div class="tfng-btn" onclick="tfngAnswer('qi4',this,'NG',true)">NOT GIVEN</div>
          </div>
          <div class="q-feedback" id="qf4">✓ Točno — NOT GIVEN. Paragraf B govori o community gardens i "social bonds", "mental health" i "wellbeing" — ali crime rates se uopće ne spominju. Pazi: ovo nije FALSE (tekst ne kaže suprotno), nego NG (tema kriminala nije u tekstu).</div>
        </div>
      </div>
    </div>

    <!-- SECTION 3: SENTENCE COMPLETION -->
    <div class="qsec">
      <div class="qsec-head">
        <span class="qsec-badge sc">Sentence Completion</span>
        <div class="qsec-title">Pitanja 5–6 · Write NO MORE THAN TWO WORDS from the passage</div>
      </div>
      <div class="qsec-body">
        <div class="q-item" id="qi5">
          <div class="q-item-head">
            <div class="q-num">Pitanje 5</div>
            <div class="q-stem">The introduction of <span style="color:var(--violet)">___</span> made it economically possible to grow food indoors without natural sunlight.</div>
          </div>
          <div class="q-sc-input">
            <input class="sc-field" id="sc5" type="text" placeholder="max 2 words from text" autocomplete="off" onkeydown="if(event.key==='Enter')scCheck('qi5','sc5',['LED lighting','LED lighting systems','lighting systems'])">
            <button class="sc-btn" onclick="scCheck('qi5','sc5',['LED lighting','LED lighting systems','lighting systems'])">Provjeri</button>
          </div>
          <div class="q-feedback" id="qf5">Točan odgovor: <b>LED lighting</b> (ili "LED lighting systems" — ali to su 3 words, pazi na limit!). Paragraf D: "The development of LED lighting systems... has made indoor vertical farming economically viable".</div>
        </div>

        <div class="q-item" id="qi6">
          <div class="q-item-head">
            <div class="q-num">Pitanje 6</div>
            <div class="q-stem">Vertical farms use hydroponic systems that can reduce water consumption by as much as <span style="color:var(--violet)">___</span> compared to traditional field farming.</div>
          </div>
          <div class="q-sc-input">
            <input class="sc-field" id="sc6" type="text" placeholder="max 2 words from text" autocomplete="off" onkeydown="if(event.key==='Enter')scCheck('qi6','sc6',['95%','95 %'])">
            <button class="sc-btn" onclick="scCheck('qi6','sc6',['95%','95 %'])">Provjeri</button>
          </div>
          <div class="q-feedback" id="qf6">Točan odgovor: <b>95%</b> (1 word/number). Paragraf E: "reductions of up to 95% compared to field farming". Pazi — "up to" je u tekstu, ali u ovom kontekstu rečenica kaže "as much as ___" što odgovara "95%".</div>
        </div>
      </div>
    </div>

    <!-- SECOND READING DRILL: NOVINARSKI TEKST -->
    <div style="font-family:var(--mono);font-size:9.5px;font-weight:500;letter-spacing:2px;color:var(--t3);text-transform:uppercase;margin:36px 0 14px;padding-bottom:8px;border-bottom:1px solid var(--bd)">// drugi drill &mdash; novinarski &#269;lanak &middot; matching headings + short answer</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:6px">Drugi tip teksta: novinarski &#269;lanak. Pitanja 7&ndash;10 uklju&#269;uju Matching Headings i Short Answer &mdash; tipove koji se pojavljuju na ispitu ali nisu testirati u prvom drillu.</p>
    <p style="font-size:12px;color:var(--t3);font-family:var(--mono);margin-bottom:14px">Strategija za Matching Headings: &#269;itaj naslov &rarr; tra&#382;i glavnu ideju odlomka (ne detalj) &rarr; eliminiraj.</p>

    <div class="passage-wrap" style="margin-bottom:20px">
      <div class="passage-header">
        <div class="ph-tag">Reading Passage &middot; Drill 2</div>
        <div class="ph-title">The Sleep Revolution</div>
        <div class="ph-source">Adapted from a newspaper feature article</div>
      </div>
      <div class="passage-body">
        <div class="passage-para">
          <span class="para-label">A</span>
          For decades, staying up late and surviving on minimal rest was worn as a badge of honour in <span class="hl" data-q="MC Q7: What attitude to sleep does paragraph A describe?">many professional environments</span>. Executives boasted about managing on four hours of sleep; students pulled all-nighters before exams. Sleep, it seemed, was for those who lacked ambition. That attitude, researchers now argue, is not only <span class="hl" data-q="T/F/NG Q8">misguided but genuinely dangerous</span>.
        </div>
        <div class="passage-para">
          <span class="para-label">B</span>
          A growing body of scientific evidence suggests that <span class="hl" data-q="SA Q10: What does chronic sleep deprivation increase the risk of?">chronic sleep deprivation significantly increases the risk of serious health conditions</span>, including cardiovascular disease, type 2 diabetes and clinical depression. A landmark study published in a leading medical journal found that individuals who consistently sleep fewer than six hours a night are 30 per cent more likely to develop obesity compared to those who sleep seven to eight hours.
        </div>
        <div class="passage-para">
          <span class="para-label">C</span>
          The economic consequences of widespread sleep deprivation are equally striking. Businesses lose billions annually through reduced productivity, increased absenteeism and workplace accidents linked to fatigue. One major consultancy estimated that the United States alone loses the equivalent of 411 billion dollars per year as a result of sleep-deprived employees underperforming or failing to show up to work altogether.
        </div>
        <div class="passage-para">
          <span class="para-label">D</span>
          In response to mounting evidence, some forward-thinking companies have begun to rethink workplace culture entirely. Firms in sectors ranging from technology to finance now offer designated rest spaces and actively discourage the culture of presenteeism &mdash; the expectation that employees remain at their desks regardless of how tired or unproductive they feel. A handful of organisations have even introduced incentive schemes that reward employees for sleeping a recommended number of hours each night.
        </div>
        <div class="passage-para">
          <span class="para-label">E</span>
          Yet cultural change remains slow. Despite overwhelming scientific consensus, many people continue to underestimate the role that consistent, quality sleep plays in cognitive performance, emotional regulation and immune function. Sleep specialists argue that until <span class="hl" data-q="MH Q9: What does paragraph E say is needed?">governments, employers and educational institutions treat sleep as a public health priority</span>, the problem is unlikely to diminish.
        </div>
      </div>
    </div>

    <!-- Pitanje 7: MC -->
    <div class="q-item" id="qi7">
      <div class="q-item-head">
        <div class="q-num">Pitanje 7</div>
        <div class="q-stem">According to paragraph A, what attitude toward sleep existed in many workplaces?</div>
      </div>
      <div class="q-options">
        <div class="q-option" onclick="mcAnswer('qi7',this,false)"><div class="opt-letter">A</div>Sleep was considered essential for high performance</div>
        <div class="q-option" onclick="mcAnswer('qi7',this,true)"><div class="opt-letter">B</div>Getting little sleep was seen as a sign of dedication</div>
        <div class="q-option" onclick="mcAnswer('qi7',this,false)"><div class="opt-letter">C</div>Managers encouraged employees to rest properly</div>
        <div class="q-option" onclick="mcAnswer('qi7',this,false)"><div class="opt-letter">D</div>Scientists had already proven the dangers of sleep loss</div>
      </div>
      <div class="q-feedback" id="qf7">
        <div class="qf-text">&#10003; B &mdash; &quot;Staying up late was worn as a badge of honour&quot; i &quot;executives boasted about managing on four hours&quot; = malo sna = znak ambicije. D je zamka: istra&#382;iva&#269;i su argumenat <em>sada</em> (u trenutku &#269;lanka), ne tada.</div>
      </div>
    </div>

    <!-- Pitanje 8: T/F/NG -->
    <div class="q-item" id="qi8" style="margin-top:12px">
      <div class="q-item-head">
        <div class="q-num">Pitanje 8</div>
        <div class="q-stem">Tvrdnja: <em>&quot;People who sleep less than six hours per night face no greater health risk than those who sleep eight hours.&quot;</em></div>
      </div>
      <div class="tfng-opts">
        <button class="tfng-btn" onclick="tfngAnswer('qi8',this,'T',false)">True</button>
        <button class="tfng-btn" onclick="tfngAnswer('qi8',this,'F',true)">False</button>
        <button class="tfng-btn" onclick="tfngAnswer('qi8',this,'NG',false)">Not Given</button>
      </div>
      <div class="q-feedback" id="qf8">
        <div class="qf-text">&#10003; FALSE &mdash; Tekst u odlomku B kaže suprotno: &quot;30 per cent more likely to develop obesity&quot; i nabrojane su bolesti (cardiovascular disease, type 2 diabetes, depression). Tvrdnja je suprotna od onoga što tekst tvrdi &rarr; False.</div>
      </div>
    </div>

    <!-- Pitanje 9: Matching Heading -->
    <div class="q-item" id="qi9" style="margin-top:12px">
      <div class="q-item-head">
        <div class="q-num">Pitanje 9 &mdash; Matching Heading</div>
        <div class="q-stem">Odaberi naslov koji NAJBOQLJE opisuje odlomak E:</div>
      </div>
      <div style="padding:12px 0 6px">
        <select class="mh-select" id="mh9" onchange="mhAnswer('qi9',this,'C')">
          <option value="">&#8212; odaberi naslov &mdash;</option>
          <option value="A">A &mdash; The financial cost of fatigue in the workplace</option>
          <option value="B">B &mdash; How companies are adapting to new sleep research</option>
          <option value="C">C &mdash; Why systemic change is needed to tackle the sleep crisis</option>
          <option value="D">D &mdash; The scientific evidence linking sleep to serious illness</option>
          <option value="E">E &mdash; A historic dismissal of the importance of rest</option>
        </select>
      </div>
      <div class="q-feedback" id="qf9">
        <div class="qf-text">&#10003; C &mdash; Odlomak E govori o sporom kulturnom napretku i zaklju&#269;uje da &quot;governments, employers and educational institutions&quot; moraju proglasiti san javnozdravstvenim prioritetom &rarr; &quot;systemic change is needed&quot;. A opisuje odlomak C. B opisuje odlomak D. D opisuje odlomak B. E opisuje odlomak A.</div>
      </div>
    </div>

    <!-- Pitanje 10: Short Answer -->
    <div class="q-item" id="qi10" style="margin-top:12px">
      <div class="q-item-head">
        <div class="q-num">Pitanje 10 &mdash; Short Answer (max 3 words from text)</div>
        <div class="q-stem">According to paragraph B, what does chronic sleep deprivation significantly increase the risk of?</div>
      </div>
      <div class="q-sc-input" style="margin-top:10px">
        <input class="sa-field" id="sa10" type="text" placeholder="max 3 words from text" autocomplete="off"
          onkeydown="if(event.key==='Enter') saCheck('qi10','sa10',['serious health conditions','health conditions','serious conditions'])">
        <button class="sa-btn" onclick="saCheck('qi10','sa10',['serious health conditions','health conditions','serious conditions'])">Provjeri</button>
      </div>
      <div class="q-feedback" id="qf10">
        <div class="qf-text">&#10003; <b>serious health conditions</b> (ili &quot;health conditions&quot;) &mdash; Tekst: &quot;significantly increases the risk of serious health conditions&quot;. Short Answer zahtijeva to&#269;ne ili bliske rije&#269;i iz teksta, ne parafraz. &quot;Diseases&quot; ili &quot;illnesses&quot; ne bi bili prihvatljivi jer tekst koristi &quot;conditions&quot;.</div>
      </div>
    </div>



    <div class="discere-box" style="margin-top:28px">
      <div class="discere-hd"><div class="discere-hd-icon">🏆</div><div class="discere-hd-text">Blok 5 završen — nastavi na Blok 6</div></div>
      <div class="discere-body">
        <div class="discere-desc">Poglavlje 19 donosi <b>vokabular i frazalne glagole</b> koji se najčešće pojavljuju na maturi.</div>
        <button class="discere-btn" onclick="navigateChapter(19)">Poglavlje 19 →</button>
      </div>
    </div>

    <!-- DISCERE LINK -->
    <div class="discere-box" style="margin-top:28px">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Vježbaj na Discere</div></div>
      <div class="discere-body">
        <div class="discere-desc">Savladao/la si listening taktike. Provjeri ih na <b>pravim listening isječcima</b> iz ispitne arhive.</div>
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
      <span class="nav-btn" onclick="switchTab(1)">← Tipovi pitanja</span>
      <button class="nav-btn primary" onclick="navigateChapter(19)">Poglavlje 19: Vokabular →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>

<script>
const PAGE_KEY='maturiraj_en_visa_p18';
let totalCorrect=0;
const TOTAL_Q=10;

function updateScore(){
  const pct=Math.round(totalCorrect/TOTAL_Q*100);
  document.getElementById('scoreVal').textContent=totalCorrect+' / '+TOTAL_Q;
  document.getElementById('scoreFill').style.width=pct+'%';
  document.getElementById('scorePct').textContent=pct+'%';
  if(totalCorrect===TOTAL_Q)launchConfetti();
}

function mcAnswer(qId,opt,isCorrect){
  const block=document.getElementById(qId);
  if(block.dataset.answered) return;
  block.dataset.answered='1';
  block.querySelectorAll('.q-option').forEach(o=>o.classList.add('locked'));
  opt.classList.add(isCorrect?'correct':'wrong');
  if(!isCorrect)block.querySelectorAll('.q-option').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('correct');});
  const fb=document.getElementById('qf'+qId.replace('qi',''));
  if(fb){fb.classList.add('show');fb.classList.add(isCorrect?'pass':'fail');}
  if(isCorrect){totalCorrect++;updateScore();}
}

function tfngAnswer(qId,btn,choice,isCorrect){
  const block=document.getElementById(qId);
  if(block.dataset.answered) return;
  block.dataset.answered='1';
  block.querySelectorAll('.tfng-btn').forEach(b=>b.classList.add('locked'));
  btn.classList.add(isCorrect?'correct':'wrong');
  const fb=document.getElementById('qf'+qId.replace('qi',''));
  if(fb){fb.classList.add('show');fb.classList.add(isCorrect?'pass':'fail');}
  if(isCorrect){totalCorrect++;updateScore();}
}

function scCheck(qId,inputId,accepted){
  const block=document.getElementById(qId);
  if(block.dataset.answered) return;
  const field=document.getElementById(inputId);
  const val=field.value.trim().toLowerCase();
  if(!val) return;
  const isCorrect=accepted.some(a=>a.toLowerCase()===val);
  block.dataset.answered='1';
  field.classList.add(isCorrect?'correct':'wrong');
  field.disabled=true;
  block.querySelector('.sc-btn').disabled=true;
  const fb=document.getElementById('qf'+qId.replace('qi',''));
  if(fb){fb.classList.add('show');fb.classList.add(isCorrect?'pass':'fail');}
  if(isCorrect){totalCorrect++;updateScore();}
}


/* ─── MATCHING HEADINGS ──────────────────── */
function mhAnswer(qId, sel, correctVal){
  const block = document.getElementById(qId);
  if(block.dataset.answered) return;
  if(!sel.value) return;
  block.dataset.answered = '1';
  const isCorrect = sel.value === correctVal;
  sel.style.borderColor = isCorrect ? 'var(--brit-green)' : 'var(--red)';
  sel.style.color = isCorrect ? 'var(--brit-green)' : 'var(--red)';
  sel.disabled = true;
  const fb = document.getElementById('qf' + qId.replace('qi',''));
  if(fb){ fb.classList.add('show'); fb.classList.add(isCorrect ? 'pass' : 'fail'); }
  if(isCorrect){ totalCorrect++; updateScore(); }
  if(typeof launchConfetti === 'function' && totalCorrect === TOTAL_Q) launchConfetti();
}

/* ─── SHORT ANSWER ───────────────────────── */
function saCheck(qId, inputId, accepted){
  const block = document.getElementById(qId);
  if(block.dataset.answered) return;
  const field = document.getElementById(inputId);
  const val = field.value.trim().toLowerCase();
  if(!val) return;
  const isCorrect = accepted.some(a => a.toLowerCase() === val);
  block.dataset.answered = '1';
  field.style.borderColor = isCorrect ? 'var(--brit-green)' : 'var(--red)';
  field.style.color = isCorrect ? 'var(--brit-green)' : 'var(--red)';
  field.disabled = true;
  const fb = document.getElementById('qf' + qId.replace('qi',''));
  if(fb){ fb.classList.add('show'); fb.classList.add(isCorrect ? 'pass' : 'fail'); }
  if(isCorrect){ totalCorrect++; updateScore(); }
  if(typeof launchConfetti === 'function' && totalCorrect === TOTAL_Q) launchConfetti();
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
    fb.innerHTML='✓ Točno! Tekst kaže "grew by 15%" — to je rast, ali nije udvostručavanje (koje bi zahtijevalo ~100% rast). FALSE jer tekst direktno protuslovi tvrdnji s konkretnim brojem.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. B je točno: FALSE. Tekst kaže "grew by 15%" što direktno protuslovi tvrdnji "doubled" (~100% rast). Tema JE u tekstu (rast populacije) i tekst kaže suprotno od tvrdnje.';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}
const tipSections=['sec-mc','sec-tfng','sec-sc','sec-mh','sec-sa','sec-paraphrase'];
function tipScroll(id){const el=document.getElementById(id);if(!el)return;window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-60,behavior:'smooth'});}
const tipObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){const idx=tipSections.indexOf(e.target.id);for(let j=0;j<=idx;j++){const p=document.getElementById('tip-'+j);if(p)p.classList.add('done');}}});
},{rootMargin:'-10% 0px -60% 0px'});
tipSections.forEach(id=>{const el=document.getElementById(id);if(el)tipObs.observe(el);});
function launchConfetti(){
  const colors=['#4F7BE8','#CF142B','#52D688','#E8A838','#A78BFA','#C9A227'];
  for(let i=0;i<65;i++){
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