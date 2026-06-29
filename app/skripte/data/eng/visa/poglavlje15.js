// Maturiraj.hr — Engleski viša razina
// Poglavlje 15: E-mail iFormalno pismo
// Auto-generirano — ne editirati ručno

export const meta = {
  id: 15,
  slug: "poglavlje15",
  title: "E-mail iFormalno pismo",
  subtitle: "Cjeline 2 i 3 \u00b7 180\u2013200 words \u00b7 formalni i neformalni e-mail \u00b7 pismo \u017ealbe/upita/prijave",
  blok: 4,
  blokNaziv: "Writing",
  prev: 14,
  next: 16,
};

export const html = `<!DOCTYPE html>
<html lang="hr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Maturiraj.hr — Engleski viša razina · Poglavlje 15</title>
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
.hero::after{content:'15';position:absolute;right:36px;top:50%;transform:translateY(-50%);font-size:112px;font-weight:900;font-family:var(--serif);color:rgba(255,255,255,.025);pointer-events:none;user-select:none;line-height:1}
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
.reveal-card.open .reveal-ans{max-height:800px;padding:14px 16px;border-top-color:var(--bd)}
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
/* EMAIL MOCKUP */
.email-mockup{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r4);overflow:hidden;margin:16px 0 24px;font-family:var(--serif)}
.em-chrome{background:var(--bg-surface);padding:10px 16px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:8px}
.em-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
.em-title{font-family:var(--mono);font-size:11px;color:var(--t3);margin-left:8px;flex:1}
.em-fields{padding:14px 20px;border-bottom:1px solid var(--bd)}
.em-field{display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)}
.em-field:last-child{border-bottom:none}
.em-label{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);letter-spacing:1px;width:56px;flex-shrink:0}
.em-val{font-size:13px;color:var(--t2)}
.em-val.highlight{color:var(--blue);font-family:var(--mono)}
.em-body{padding:20px 24px;font-size:14px;line-height:1.9;color:rgba(238,240,248,.85)}
.em-para{margin-bottom:12px}
.em-annot{display:inline;font-family:var(--mono);font-size:9.5px;font-weight:700;padding:1px 5px;border-radius:var(--r1);vertical-align:middle;margin-left:4px}
.em-annot.open{background:var(--blue-dim);color:var(--blue)}.em-annot.ref{background:var(--brit-green-dim);color:var(--brit-green)}.em-annot.req{background:var(--gold-dim);color:var(--gold)}.em-annot.close{background:var(--violet-dim);color:var(--violet)}
/* PHRASE TABLE */
.phrase-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px;border-collapse:separate;border-spacing:0}
.phrase-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--t3);padding:9px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.phrase-table td{padding:9px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.6}
.phrase-table tr:last-child td{border-bottom:none}
.phrase-table tr:nth-child(even) td{background:rgba(255,255,255,.015)}
.phrase-table .fn{font-family:var(--mono);font-size:10px;font-weight:700;padding:2px 7px;border-radius:var(--r1);white-space:nowrap;display:inline-block;margin-bottom:4px}
.phrase-table .formal{color:var(--t1);font-style:italic;font-size:12.5px}
.phrase-table .informal{color:var(--red);font-size:12px;text-decoration:line-through}
/* CHECKLIST */
.checklist{background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:16px 20px;margin:14px 0 24px}
.cl-item{display:flex;align-items:flex-start;gap:10px;padding:7px 0;border-bottom:1px solid var(--bd);cursor:pointer;user-select:none}
.cl-item:last-child{border-bottom:none}
.cl-box{width:18px;height:18px;border-radius:4px;border:1px solid var(--bd-light);flex-shrink:0;margin-top:1px;display:flex;align-items:center;justify-content:center;font-size:11px;transition:all .15s;color:transparent}
.cl-item.checked .cl-box{background:var(--brit-green);border-color:var(--brit-green);color:#060810}
.cl-text{font-size:13px;color:var(--t2);line-height:1.55}
.cl-item.checked .cl-text{color:var(--t3);text-decoration:line-through}
/* COMPARE TABLE */
.compare-table{width:100%;border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden;margin:14px 0 24px;border-collapse:separate;border-spacing:0}
.compare-table th{background:var(--bg-surface);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:9px 14px;border-bottom:1px solid var(--bd-mid);text-align:left}
.compare-table td{padding:9px 14px;font-size:13px;border-bottom:1px solid var(--bd);vertical-align:top;line-height:1.6}
.compare-table tr:last-child td{border-bottom:none}
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
/* Q BLOCKS */
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
  <div class="sb-item active" onclick="closeMobDrawer();navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span> 15 · Linking words i vocabulary</div>
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
  <div class="sb-item done-ch" onclick="navigateChapter(12)" style="cursor:pointer"><span class="sb-dot"></span>12 · Najčešće zamke</div>
  <div class="sb-label">// Blok 4 — Writing</div>
  <div class="sb-item done-ch" onclick="navigateChapter(13)" style="cursor:pointer"><span class="sb-dot"></span>13 · Dobar maturalni esej</div>
  <div class="sb-item done-ch" onclick="navigateChapter(14)" style="cursor:pointer"><span class="sb-dot"></span>14 · Struktura eseja</div>
  <div class="sb-item active" onclick="navigateChapter(15)" style="cursor:pointer"><span class="sb-dot"></span>15 · Linking words i vocabulary</div>
  <div class="sb-item" onclick="navigateChapter(16)" style="cursor:pointer"><span class="sb-dot"></span>16 · Greške + model essay</div>
  <div class="sb-label">// Blok 5 — Reading + Listening</div>
  <div class="sb-item" onclick="navigateChapter(17)" style="cursor:pointer"><span class="sb-dot"></span>17 · Reading strategije</div>
  <div class="sb-item" onclick="navigateChapter(18)" style="cursor:pointer"><span class="sb-dot"></span>18 · Listening strategije</div>
  <div class="sb-label">// Blok 6 — Vocab + Exam</div>
  <div class="sb-item" onclick="navigateChapter(19)" style="cursor:pointer"><span class="sb-dot"></span>19 · Vocabulary for Matura</div>
  <div class="sb-item" onclick="navigateChapter(20)" style="cursor:pointer"><span class="sb-dot"></span>20 · Final Exam Survival</div>
<div class="sb-footer">15 / 20 · linking words i vocabulary<br>maturiraj.hr</div>
</nav>


<button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="Natrag na vrh">↑</button>
<main class="main">
<div class="content-wrap">
  <div class="breadcrumb">
    <span style="cursor:pointer" onclick="backToList()">← chapters</span>
    <span class="bc-sep">/</span><span>blok-4</span>
    <span class="bc-sep">/</span><span class="bc-active">email-i-pismo</span>
  </div>
  <div class="tabs-wrap" role="tablist">
    <div class="tab active" role="tab" aria-selected="true" onclick="switchTab(0)" onkeydown="tabKey(event,0)" tabindex="0">⚡ 2 min<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(1)" onkeydown="tabKey(event,1)" tabindex="-1">📖 Strategija<span class="tab-check">✓</span></div>
    <div class="tab" role="tab" aria-selected="false" onclick="switchTab(2)" onkeydown="tabKey(event,2)" tabindex="-1">✍️ Primjeri i kviz<span class="tab-check">✓</span></div>
  </div>
  <div class="tab-progress-row">
    <div class="tab-prog-item active" id="tp0" onclick="switchTab(0)"><span class="tp-dot"></span>Pregled</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp1" onclick="switchTab(1)"><span class="tp-dot"></span>Strategija i fraze</div>
    <span class="tp-arrow">→</span>
    <div class="tab-prog-item" id="tp2" onclick="switchTab(2)"><span class="tp-dot"></span>Primjeri i kviz</div>
    <div class="time-est">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="opacity:.5"><circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.2"/><path d="M6 3v3l2 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      ~35 min
    </div>
  </div>
  <!-- ═══ LAYER 0 ═══ -->
  <div class="layer active" id="l0">
    <div class="hero">
      <div class="hero-eyebrow">chapter 15 of 20 · blok 4 — writing</div>
      <h1 class="hero-title">E-mail i<br><span>Formalno pismo</span></h1>
      <div class="hero-meta">
        <span class="hero-badge hb-time">⏱ ~2 min</span>
        <span class="hero-badge hb-level">viša razina</span>
        <span class="hero-badge hb-chapter">15 / 20</span>
      </div>
      <p class="hero-sub">Cjeline 2 i 3 · 180–200 words · formalni i neformalni e-mail · pismo žalbe/upita/prijave</p>
      <div class="progress-track"><div class="progress-bar" style="width:75%"></div></div>
    </div>
    <div class="tags">
      <span class="pill pill-blue">Formalni e-mail</span>
      <span class="pill pill-green">Neformalni e-mail</span>
      <span class="pill pill-gold">Pismo žalbe</span>
      <span class="pill pill-violet">Pismo upita</span>
      <span class="pill pill-amber">Otvaranje i zatvaranje</span>
      <span class="pill pill-red">Registar</span>
    </div>
    <div class="sec-label">// tri tipa zadatka</div>
    <div class="stat-grid">
      <div class="stat-card"><div class="stat-icon blue">formal</div><div class="stat-name">Formalni e-mail / pismo</div><div class="stat-desc">Pišeš kompaniji, uredništvu, hotelu, školi. Formalni registar, potpuna rečenica, Yours faithfully / sincerely</div></div>
      <div class="stat-card"><div class="stat-icon green">informal</div><div class="stat-name">Neformalni e-mail</div><div class="stat-desc">Pišeš prijatelju, poznaniku. Može biti opušteniji ton, ali bez slenga. Dear + ime, Best wishes / Take care</div></div>
      <div class="stat-card"><div class="stat-icon gold">complaint</div><div class="stat-name">Pismo žalbe</div><div class="stat-desc">Opisuješ problem, tražiš rješenje. Uvijek formalno, asertivno ali pristojno. Specifični detalji su obavezni</div></div>
      <div class="stat-card"><div class="stat-icon violet">enquiry</div><div class="stat-name">Pismo upita / prijava</div><div class="stat-desc">Tražiš informacije ili se prijavljuješ za nešto. Jasan razlog pisanja, konkretni upiti, zahvala na kraju</div></div>
    </div>
    <div class="sec-label">// 5 panic-proof pravila</div>
    <div class="panic-box">
      <div class="panic-hd">🇬🇧 e-mail i pismo — 5 ključnih pravila</div>
      <div class="panic-body">
        <div class="panic-step"><div class="panic-num">1</div><div class="panic-text"><b>Registar = sve.</b> Formalno pismo = Yours faithfully (ako ne znaš ime) / Yours sincerely (ako znaš ime). Neformalno = Best wishes / Take care. Nikad ne miješaj.</div></div>
        <div class="panic-step"><div class="panic-num">2</div><div class="panic-text"><b>Prva rečenica objašnjava zašto pišeš.</b> "I am writing to enquire about..." / "I am writing with regard to..." / "I am writing to complain about..." Ne skačeš odmah na temu.</div></div>
        <div class="panic-step"><div class="panic-num">3</div><div class="panic-text"><b>Specifični detalji su obavezni.</b> Pismo žalbe bez datuma/broja narudžbe/lokacije = slabi sadržaj. Koristiš informacije iz zadatka.</div></div>
        <div class="panic-step"><div class="panic-num">4</div><div class="panic-text"><b>Zatvori s jasnim action pointom.</b> "I would be grateful if you could..." / "I look forward to hearing from you." / "I would appreciate a prompt response." Bez amorfnog kraja.</div></div>
        <div class="panic-step"><div class="panic-num">5</div><div class="panic-text"><b>180–200 words — isti limit kao esej.</b> Broji isti. Zaglavlje (Dear..., Subject:) broji se. Yours faithfully broji se.</div></div>
      </div>
    </div>
    <div class="sec-label">// brzi pregled</div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🔵</span><span>Yours faithfully vs Yours sincerely</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Yours faithfully</b> = koristiš kad si pisao "Dear Sir/Madam" (ne znaš ime primatelja)<br>
        <b>Yours sincerely</b> = koristiš kad si pisao "Dear Mr Smith" (znaš ime)<br><br>
        Memotehnika: <span class="ok">faithfully → formulaic → for strangers</span><br>
        <span class="bad">Najčešća greška:</span> "Dear Sir, ... Yours sincerely" ili "Dear Mr Smith, ... Yours faithfully" — oboje krivo!<br><br>
        <b>Neformalno:</b> Best wishes / Kind regards / Take care / All the best
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟡</span><span>Struktura formalnog pisma / e-maila</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>1. Pozdrav:</b> Dear Mr/Ms [Surname], · Dear Sir/Madam,<br>
        <b>2. Razlog pisanja (1. odlomak):</b> I am writing to enquire about... / I am writing with regard to...<br>
        <b>3. Tijelo (1–2 odlomka):</b> Detalji, specifični problemi, upiti, prijedlozi<br>
        <b>4. Action point (zadnji odlomak):</b> I would be grateful if you could... / I look forward to...<br>
        <b>5. Zatvaranje:</b> Yours faithfully / Yours sincerely<br>
        <b>6. Ime:</b> [Tvoje ime i prezime]
      </div>
    </div>
    <div class="reveal-card" onclick="toggleReveal(this)" role="button" aria-expanded="false">
      <div class="reveal-q"><span class="rq-icon">🟣</span><span>Pismo žalbe — kako biti asertivan ali pristojno</span><span class="reveal-arrow">▼</span></div>
      <div class="reveal-ans">
        <b>Ne piši agresivno:</b> <span class="bad">This is absolutely disgusting!</span><br>
        <b>Piši asertivno:</b> <span class="ok">I was extremely disappointed to find that...</span><br><br>
        <b>Opisuj problem specifično:</b> datum, što se dogodilo, kakva je bila šteta<br>
        <b>Tražiš konkretno rješenje:</b> a full refund · a replacement · compensation · an apology<br><br>
        <b>Korisne fraze:</b><br>
        "I am writing to express my dissatisfaction with..."<br>
        "I would like to bring to your attention..."<br>
        "I trust this matter will be resolved at your earliest convenience."
      </div>
    </div>
    <div class="sec-label" style="margin-top:28px">// checkpoint</div>
    <div class="checkpoint-gate" id="cgBlock">
      <div class="cg-hd"><div class="cg-icon">🔐</div><div><div class="cg-title">Checkpoint — prolaznica</div><div class="cg-sub">Odgovori točno da otključaš Strategiju</div></div></div>
      <div class="cg-body">
        <div class="cg-question">Pismo počinje s "Dear Mr Johnson,". Kako ga završavaš?</div>
        <div class="cg-opts" role="group">
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">A</div>Yours faithfully</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,true)"><div class="cg-letter">B</div>Yours sincerely</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">C</div>Best wishes</div>
          <div class="cg-opt" role="button" tabindex="0" onclick="cgAnswer(this,false)"><div class="cg-letter">D</div>Kind regards</div>
        </div>
        <div class="cg-feedback" id="cgFb" aria-live="polite"></div>
        <button class="cg-unlock" id="cgBtn" onclick="switchTab(1)">Nastavi na Strategiju →</button>
      </div>
    </div>
    <div class="nav-row">
      <a href="poglavlje14.html" class="nav-btn">← Poglavlje 14</a>
      <span class="nav-btn primary" onclick="switchTab(1)">Strategija i fraze →</span>
    </div>
  </div><!-- /l0 -->

  <!-- ═══ LAYER 1 ═══ -->
  <div class="layer" id="l1">
    <div class="tip-bar">
      <div class="tip-item" id="tip-0" onclick="tipScroll('sec-register')"><span class="tip-dot"></span>Registar</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-1" onclick="tipScroll('sec-openclose')"><span class="tip-dot"></span>Otvaranje/zatvaranje</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-2" onclick="tipScroll('sec-opening-lines')"><span class="tip-dot"></span>Prva rečenica</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-3" onclick="tipScroll('sec-body-phrases')"><span class="tip-dot"></span>Tijelo pisma</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-4" onclick="tipScroll('sec-complaint')"><span class="tip-dot"></span>Žalba</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-5" onclick="tipScroll('sec-enquiry')"><span class="tip-dot"></span>Upit / prijava</div>
      <span class="tip-sep">›</span>
      <div class="tip-item" id="tip-6" onclick="tipScroll('sec-informal')"><span class="tip-dot"></span>Neformalni</div>
    </div>

    <!-- REGISTAR -->
    <div id="sec-register" class="sec-label">// registar — formalno vs neformalno</div>
    <table class="compare-table">
      <thead>
        <tr>
          <th style="color:var(--blue)">FORMALNO</th>
          <th style="color:var(--brit-green)">NEFORMALNO</th>
          <th style="color:var(--t3)">KATEGORIJA</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="color:var(--blue);font-family:var(--mono)">Dear Mr/Ms Smith, · Dear Sir/Madam,</td><td style="color:var(--brit-green);font-family:var(--mono)">Dear Tom, · Hi Sarah,</td><td style="color:var(--t2)">Pozdrav</td></tr>
        <tr><td style="color:var(--blue);font-family:var(--mono)">I am writing to inform you that...</td><td style="color:var(--brit-green);font-family:var(--mono)">Just wanted to let you know...</td><td style="color:var(--t2)">Razlog pisanja</td></tr>
        <tr><td style="color:var(--blue);font-family:var(--mono)">I would be grateful if you could...</td><td style="color:var(--brit-green);font-family:var(--mono)">Could you...? / Would you mind...?</td><td style="color:var(--t2)">Zahtjev</td></tr>
        <tr><td style="color:var(--blue);font-family:var(--mono)">I look forward to hearing from you.</td><td style="color:var(--brit-green);font-family:var(--mono)">Hope to hear from you soon!</td><td style="color:var(--t2)">Kraj</td></tr>
        <tr><td style="color:var(--blue);font-family:var(--mono)">Yours sincerely / Yours faithfully</td><td style="color:var(--brit-green);font-family:var(--mono)">Best wishes / Take care / All the best</td><td style="color:var(--t2)">Zatvaranje</td></tr>
        <tr><td style="color:var(--blue);font-family:var(--mono)">Bez kontrakcija (I am, do not, cannot)</td><td style="color:var(--brit-green);font-family:var(--mono)">Kontrakcije OK (I'm, don't, can't)</td><td style="color:var(--t2)">Gramatika</td></tr>
        <tr><td style="color:var(--blue);font-family:var(--mono)">Furthermore, · In addition, · However,</td><td style="color:var(--brit-green);font-family:var(--mono)">Also, · But, · So,</td><td style="color:var(--t2)">Linkers</td></tr>
      </tbody>
    </table>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Miješanje registra = greška za vokabular i zadatak</div>
        <div class="callout-text">
          <b>Formalno pismo ne smije imati:</b> Hi!, Cheers!, BTW, gonna, wanna, sleng, emotikoni<br>
          <b>Neformalni e-mail ne mora biti previše formalan</b> — ali ni previše opušten. Zlatna sredina: prijatan, jasan, bez slenga.<br>
          Zadatak ti govori tip pisma — čitaj pažljivo i odaberi registar PRIJE nego počneš pisati.
        </div>
      </div>
    </div>

    <!-- OTVARANJE I ZATVARANJE -->
    <div id="sec-openclose" class="sec-label" style="margin-top:36px">// otvaranje i zatvaranje — kompletan vodič</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--blue-dim);color:var(--blue);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;border-bottom:1px solid var(--blue-border)">FORMALNO — OTVARANJE</div>
        <div style="padding:12px 14px;display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--t2);font-family:var(--mono)">
          <span>Dear Sir/Madam, <span style="color:var(--t3);font-size:11px">(ne znaš ime)</span></span>
          <span>Dear Mr Johnson, <span style="color:var(--t3);font-size:11px">(znaš prezime, m.)</span></span>
          <span>Dear Ms Carter, <span style="color:var(--t3);font-size:11px">(znaš prezime, ž.)</span></span>
          <span>Dear Dr Williams, <span style="color:var(--t3);font-size:11px">(titula)</span></span>
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--blue-dim);color:var(--blue);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;border-bottom:1px solid var(--blue-border)">FORMALNO — ZATVARANJE</div>
        <div style="padding:12px 14px;display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--t2);font-family:var(--mono)">
          <span>Yours faithfully, <span style="color:var(--t3);font-size:11px">(Dear Sir/Madam)</span></span>
          <span>Yours sincerely, <span style="color:var(--t3);font-size:11px">(Dear Mr/Ms...)</span></span>
          <span style="color:var(--t3)">[Prazni red]</span>
          <span>[Tvoje puno ime]</span>
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--brit-green-dim);color:var(--brit-green);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;border-bottom:1px solid var(--brit-green-bd)">NEFORMALNO — OTVARANJE</div>
        <div style="padding:12px 14px;display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--t2);font-family:var(--mono)">
          <span>Dear Tom,</span>
          <span>Hi Sarah,</span>
          <span>Hello James,</span>
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);overflow:hidden">
        <div style="padding:10px 14px;background:var(--brit-green-dim);color:var(--brit-green);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;border-bottom:1px solid var(--brit-green-bd)">NEFORMALNO — ZATVARANJE</div>
        <div style="padding:12px 14px;display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--t2);font-family:var(--mono)">
          <span>Best wishes,</span>
          <span>Kind regards,</span>
          <span>All the best,</span>
          <span>Take care,</span>
        </div>
      </div>
    </div>
    <div class="callout callout-info">
      <div class="callout-icon">💡</div>
      <div class="callout-body">
        <div class="callout-title">Faithful = unknown / Sincerely = named — memotehnika</div>
        <div class="callout-text"><b>F</b>aithfully → <b>F</b>ormula → za nepoznate (Sir/Madam)<br>
        <b>S</b>incerely → <b>S</b>pecific → znaš ime (Mr Johnson)<br>
        Jednostavno: "Sincerely" → počinje s "S" kao "Smith" → koristiš kad znaš prezime.</div>
      </div>
    </div>

    <!-- PRVA REČENICA -->
    <div id="sec-opening-lines" class="sec-label" style="margin-top:36px">// prva rečenica — zašto pišeš</div>
    <p class="prose">Prva rečenica uvijek jasno objašnjava svrhu pisma. Nikad ne skaćeš direktno na sadržaj bez uvodne fraze.</p>
    <table class="phrase-table">
      <thead><tr><th>Svrha pisma</th><th>Formalna fraza</th></tr></thead>
      <tbody>
        <tr><td style="color:var(--t2)">Upit / informacija</td><td class="formal">I am writing to enquire about [tema]. / I am writing with regard to [tema].</td></tr>
        <tr><td style="color:var(--t2)">Žalba / pritužba</td><td class="formal">I am writing to express my dissatisfaction with... / I am writing to complain about...</td></tr>
        <tr><td style="color:var(--t2)">Prijava / kandidatura</td><td class="formal">I am writing to apply for the position of... / I would like to apply for...</td></tr>
        <tr><td style="color:var(--t2)">Odgovor na oglas</td><td class="formal">I am writing in response to your advertisement for... / I saw your advertisement in [publication] and would like to...</td></tr>
        <tr><td style="color:var(--t2)">Zahvala</td><td class="formal">I am writing to thank you for... / I would like to express my gratitude for...</td></tr>
        <tr><td style="color:var(--t2)">Prijedlog / sugestija</td><td class="formal">I am writing to suggest... / I would like to draw your attention to...</td></tr>
        <tr><td style="color:var(--t2)">Neformalni početak</td><td class="formal">How are you? / I hope this email finds you well. / It was great to hear from you!</td></tr>
      </tbody>
    </table>

    <!-- TIJELO PISMA -->
    <div id="sec-body-phrases" class="sec-label" style="margin-top:36px">// tijelo pisma — ključne fraze</div>
    <table class="phrase-table">
      <thead><tr><th>Funkcija</th><th>Fraze</th></tr></thead>
      <tbody>
        <tr>
          <td><div class="fn" style="background:var(--blue-dim);color:var(--blue)">uvođenje</div></td>
          <td class="formal">With reference to... · Regarding... · As you may be aware, · I would like to bring to your attention that...</td>
        </tr>
        <tr>
          <td><div class="fn" style="background:var(--brit-green-dim);color:var(--brit-green)">zahtjev</div></td>
          <td class="formal">I would be grateful if you could... · Could you please... · I would appreciate it if... · I would like to request...</td>
        </tr>
        <tr>
          <td><div class="fn" style="background:var(--gold-dim);color:var(--gold)">informacija</div></td>
          <td class="formal">I am enclosing... · Please find attached... · I would like to inform you that... · You may be interested to know that...</td>
        </tr>
        <tr>
          <td><div class="fn" style="background:var(--violet-dim);color:var(--violet)">kraj</div></td>
          <td class="formal">I look forward to hearing from you. · I would appreciate a prompt response. · I trust this matter will be resolved at your earliest convenience. · Please do not hesitate to contact me if you require further information.</td>
        </tr>
        <tr>
          <td><div class="fn" style="background:var(--amber-dim);color:var(--amber)">neform. kraj</div></td>
          <td class="formal">Hope to hear from you soon! · Write back when you can. · Let me know what you think. · Looking forward to seeing you!</td>
        </tr>
      </tbody>
    </table>

    <!-- ŽALBA -->
    <div id="sec-complaint" class="sec-label" style="margin-top:36px">// pismo žalbe — struktura i ton</div>
    <p class="prose">Pismo žalbe testira tvoju sposobnost da budeš <em>asertivan ali profesionalan</em>. Agresivan ton smanjuje bodove.</p>
    <div style="display:flex;flex-direction:column;gap:8px;margin:14px 0 20px">
      <div style="display:grid;grid-template-columns:24px 1fr;gap:12px;align-items:start;padding:10px 0;border-bottom:1px solid var(--bd)">
        <div style="width:24px;height:24px;border-radius:50%;background:var(--blue);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">1</div>
        <div><div style="font-size:13.5px;font-weight:600;color:var(--t1);margin-bottom:4px">Razlog pisanja</div><div style="font-family:var(--mono);font-size:12.5px;color:var(--blue);font-style:italic">"I am writing to express my dissatisfaction with the service I received at your hotel on 14th March."</div></div>
      </div>
      <div style="display:grid;grid-template-columns:24px 1fr;gap:12px;align-items:start;padding:10px 0;border-bottom:1px solid var(--bd)">
        <div style="width:24px;height:24px;border-radius:50%;background:var(--brit-green);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">2</div>
        <div><div style="font-size:13.5px;font-weight:600;color:var(--t1);margin-bottom:4px">Specifičan opis problema</div><div style="font-family:var(--mono);font-size:12.5px;color:var(--blue);font-style:italic">"Upon arrival, I was informed that my reservation had not been processed, despite having received a confirmation email. Furthermore, the replacement room offered was considerably smaller than the one I had booked."</div></div>
      </div>
      <div style="display:grid;grid-template-columns:24px 1fr;gap:12px;align-items:start;padding:10px 0;border-bottom:1px solid var(--bd)">
        <div style="width:24px;height:24px;border-radius:50%;background:var(--gold);color:#060810;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">3</div>
        <div><div style="font-size:13.5px;font-weight:600;color:var(--t1);margin-bottom:4px">Konkretan zahtjev za rješenjem</div><div style="font-family:var(--mono);font-size:12.5px;color:var(--blue);font-style:italic">"I would be grateful if you could arrange a full refund of the difference in price, as well as a formal apology for the inconvenience caused."</div></div>
      </div>
      <div style="display:grid;grid-template-columns:24px 1fr;gap:12px;align-items:start;padding:10px 0">
        <div style="width:24px;height:24px;border-radius:50%;background:var(--union-red);color:#fff;font-family:var(--mono);font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">4</div>
        <div><div style="font-size:13.5px;font-weight:600;color:var(--t1);margin-bottom:4px">Rok ili prijetnja (opcijski, ali efektivno)</div><div style="font-family:var(--mono);font-size:12.5px;color:var(--blue);font-style:italic">"I trust this matter will be resolved at your earliest convenience. Should I not receive a satisfactory response within 14 days, I will be forced to seek further action."</div></div>
      </div>
    </div>

    <!-- UPIT I PRIJAVA -->
    <div id="sec-enquiry" class="sec-label" style="margin-top:36px">// pismo upita i prijava — struktura</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:14px 0 20px">
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--violet);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">PISMO UPITA</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          <b style="color:var(--t1)">1. Razlog:</b> I am writing to enquire about...<br>
          <b style="color:var(--t1)">2. Upiti:</b> Could you please tell me...? / I would like to know...<br>
          <b style="color:var(--t1)">3. Zahvala:</b> I would be most grateful for any information you could provide.<br>
          <b style="color:var(--t1)">4. Kraj:</b> I look forward to hearing from you.
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--amber);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">PISMO PRIJAVE</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          <b style="color:var(--t1)">1. Razlog:</b> I am writing to apply for...<br>
          <b style="color:var(--t1)">2. Kvalifikacije:</b> I have [experience/qualifications] in...<br>
          <b style="color:var(--t1)">3. Motivacija:</b> I am particularly interested because...<br>
          <b style="color:var(--t1)">4. Kraj:</b> I would welcome the opportunity to discuss my application further. / I have enclosed my CV for your consideration.
        </div>
      </div>
    </div>

    <!-- NEFORMALNI E-MAIL -->
    <div id="sec-informal" class="sec-label" style="margin-top:36px">// neformalni e-mail — specifičnosti</div>
    <p class="prose">Neformalni e-mail prijatelju može imati opušteniji ton, ali <em>i dalje mora biti jasan, strukturiran i gramatički točan</em>. Nije isto što i SMS.</p>
    <div class="callout callout-green">
      <div class="callout-icon">✓</div>
      <div class="callout-body">
        <div class="callout-title">Što se SMIJE u neformalnom e-mailu</div>
        <div class="callout-text">
          ✓ Kontrakcije (I'm, don't, can't, it's)<br>
          ✓ Opušteniji linkers (Also, But, So, Anyway)<br>
          ✓ Pitanja i uskličnici (How are you? Great news!)<br>
          ✓ Osobne reference (I remember when we...)<br>
          ✓ "Hope to hear from you soon!" na kraju
        </div>
      </div>
    </div>
    <div class="callout callout-warn">
      <div class="callout-icon">⚠️</div>
      <div class="callout-body">
        <div class="callout-title">Što se NE SMIJE ni u neformalnom</div>
        <div class="callout-text">
          ✗ Sleng (gonna, wanna, cya, lol, btw)<br>
          ✗ Bez strukture (sve u jednom odlomku)<br>
          ✗ Bez jasnog razloga pisanja (zašto pišeš?)<br>
          ✗ Ispod 180 ili iznad 200 words<br>
          ✗ Gramatičke greške koje ometaju razumijevanje
        </div>
      </div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🎯</div><div class="discere-hd-text">Vježbaj pisanje e-maila</div></div>
      <div class="discere-body">
        <div class="discere-desc">Napiši formalni e-mail prema predlošku u Tab Primjeri i kviz. Provjeri s checklistom.</div>
        <span class="discere-btn" onclick="switchTab(2)" style="cursor:pointer">Primjeri i kviz →</span>
      </div>
    </div>

    <!-- VOCAB BOX -->
    <div style="background:var(--bg-card);border:1px solid var(--gold-bd);border-radius:var(--r4);overflow:hidden;margin:28px 0 8px">
      <div style="padding:10px 16px;background:var(--gold-dim);border-bottom:1px solid var(--gold-bd);display:flex;align-items:center;gap:10px">
        <span style="font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--gold);text-transform:uppercase">📝 Vokabular za e-mail i formalno pismo</span>
        <span style="font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto">direktno primjenjivo na ispitu</span>
      </div>
      <div style="padding:4px 16px 14px">
          <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin:10px 0 6px">Otvaranje i svrha</div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I am writing with regard to</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">pišem u vezi s</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I would like to draw your attention to</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">želio/la bih skrenut vašu pažnju na</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">Further to our recent correspondence</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">nadovezujući se na našu nedavnu prepisku</span>
          </div>
          <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin:10px 0 6px">Zahtjev i pritužba</div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I would be grateful if you could</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">bio/la bih zahvalan/na kada biste</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I must insist that</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">inzistiram na tome da</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I would appreciate a prompt response</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">cijenio/la bih brz odgovor</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I am writing to express my dissatisfaction with</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">pišem kako bih izrazio/la nezadovoljstvo</span>
          </div>
          <div style="font-family:var(--mono);font-size:9.5px;font-weight:700;color:var(--t3);letter-spacing:1.5px;text-transform:uppercase;margin:10px 0 6px">Zatvaranje</div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I look forward to hearing from you</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">radujem se vašem odgovoru</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">I trust this matter will be resolved</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">vjerujem da će se ova stvar riješiti</span>
          </div>
          <div style="display:flex;align-items:baseline;gap:10px;padding:5px 0;border-bottom:1px solid var(--bd)">
            <span style="font-family:var(--serif);font-size:13px;color:var(--t1);font-weight:600;min-width:200px;flex-shrink:0">at your earliest convenience</span>
            <span style="font-size:12px;color:var(--t3);font-family:var(--mono)">čim vam to bude moguće</span>
          </div>
      </div>
      <div style="padding:8px 16px;background:var(--bg-input);border-top:1px solid var(--bd);font-family:var(--mono);font-size:11px;color:var(--t3)">10 fraza koje svako pismo čine formalnim i uvjerljivim</div>
    </div>

    <div class="nav-row">
      <span class="nav-btn" onclick="switchTab(0)">← Pregled</span>
      <span class="nav-btn primary" onclick="switchTab(2)">Primjeri i kviz →</span>
    </div>
  </div><!-- /l1 -->
  <!-- ═══ LAYER 2 ═══ -->
  <div class="layer" id="l2">
    <div class="sec-label">// primjer formalnog e-maila — žalba</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Zadatak: Rezervirao/la si sobu u hotelu online, ali pri dolasku otkrio/la si da je soba bila puno manja od opisane, a klima nije radila. Napiši pismo žalbe hotelu.</p>

    <div class="email-mockup">
      <div class="em-chrome">
        <div class="em-dot" style="background:#CF142B"></div>
        <div class="em-dot" style="background:#C9A227"></div>
        <div class="em-dot" style="background:#4CAF7D"></div>
        <span class="em-title">Formalni e-mail — žalba hotelu · ~160 words</span>
      </div>
      <div class="em-fields">
        <div class="em-field"><span class="em-label">TO:</span><span class="em-val"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="99f4f8f7f8fefcebd9feebf8f7fdf1f6edfcf5b7faf6b7ecf2">[email&#160;protected]</a></span></div>
        <div class="em-field"><span class="em-label">SUBJECT:</span><span class="em-val highlight">Complaint Regarding Room Booking — Reservation #GH-2024-0315</span></div>
      </div>
      <div class="em-body">
        <div class="em-para">Dear Sir/Madam, <span class="em-annot open">OTVARANJE</span></div>
        <div class="em-para">I am writing to express my dissatisfaction with the accommodation I received during my stay at the Grand Hotel from 15th to 17th March. <span class="em-annot open">RAZLOG</span></div>
        <div class="em-para">Upon arrival, I discovered that the room allocated to me was considerably smaller than the deluxe double room I had booked and paid for. Furthermore, the air conditioning unit was not functioning, despite the warm weather conditions at the time. When I brought these issues to the attention of the reception staff, I was informed that no alternative rooms were available. <span class="em-annot ref">DETALJI</span></div>
        <div class="em-para">I was extremely disappointed by both the standard of the accommodation and the manner in which my concerns were handled. As a result, my stay was far from the comfortable experience I had anticipated. <span class="em-annot ref">UTJECAJ</span></div>
        <div class="em-para">I would therefore be grateful if you could arrange a partial refund reflecting the difference between the room I booked and the one I received, as well as a formal written apology. <span class="em-annot req">ZAHTJEV</span></div>
        <div class="em-para">I look forward to receiving your response at your earliest convenience. <span class="em-annot close">KRAJ</span></div>
        <div class="em-para">Yours faithfully,<br>A. Smith</div>
      </div>
    </div>

    <div class="sec-label" style="margin-top:28px">// analiza etalon e-maila</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px">
      <div style="background:var(--bg-card);border:1px solid var(--brit-green-bd);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--brit-green);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">✓ ŠTO RADI DOBRO</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          ✓ Dear Sir/Madam → Yours faithfully (točno)<br>
          ✓ Razlog odmah u prvoj rečenici<br>
          ✓ Specifični detalji (datumi, tip sobe, problem)<br>
          ✓ Asertivan ali pristojan ton<br>
          ✓ Konkretan zahtjev (refund + apology)<br>
          ✓ Bez kontrakcija<br>
          ✓ Formalni linkers (Furthermore, As a result)
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">🔍 NAPREDNI VOKABULAR</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          "I was disappointed by the <b>manner in which</b>..."<br>
          "far from the comfortable <b>experience I had anticipated</b>"<br>
          "a <b>partial refund reflecting the difference</b>"<br>
          "at your <b>earliest convenience</b>"<br>
          "<b>Upon arrival</b>" (formalni participle)<br>
          "brought to the <b>attention of</b>"
        </div>
      </div>
    </div>

    <div class="sec-label">// primjer neformalnog e-maila</div>
    <p style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:14px">Zadatak: Tvoj prijatelj iz Engleske dolazi posjetiti tvoj grad sljedeći mjesec. Napiši mu/joj e-mail s prijedlozima što vidjeti i raditi.</p>

    <div class="email-mockup">
      <div class="em-chrome">
        <div class="em-dot" style="background:#CF142B"></div>
        <div class="em-dot" style="background:#C9A227"></div>
        <div class="em-dot" style="background:#4CAF7D"></div>
        <span class="em-title">Neformalni e-mail — prijedlozi za posjet · ~160 words</span>
      </div>
      <div class="em-fields">
        <div class="em-field"><span class="em-label">TO:</span><span class="em-val"><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="e4908b89ca8c8596968d978b8aa48189858d88ca878bca918f">[email&#160;protected]</a></span></div>
        <div class="em-field"><span class="em-label">SUBJECT:</span><span class="em-val highlight">Your visit next month — some ideas!</span></div>
      </div>
      <div class="em-body">
        <div class="em-para">Dear Tom, <span class="em-annot open">OTVARANJE</span></div>
        <div class="em-para">How are you? I was really excited to hear that you're coming to visit next month — I can't wait to show you around! <span class="em-annot open">UVOD</span></div>
        <div class="em-para">I've been thinking about what we could do while you're here. First of all, I'd love to take you to the old town, which is one of the most beautiful parts of the city. There are some amazing restaurants there where you can try local food. Also, if the weather is good, we could visit the lake — it's only about twenty minutes away by bus and the views are stunning. <span class="em-annot ref">PRIJEDLOZI</span></div>
        <div class="em-para">If you're interested in history, there's also a really impressive museum in the city centre that opened last year. I haven't been yet, but I've heard it's well worth a visit. <span class="em-annot ref">DODATAK</span></div>
        <div class="em-para">Let me know if any of these ideas appeal to you, and whether there's anything in particular you'd like to see or do. I'm really looking forward to seeing you! <span class="em-annot close">KRAJ</span></div>
        <div class="em-para">Best wishes,<br>Ana</div>
      </div>
    </div>

    <!-- ANALIZA NEFORMALNOG E-MAILA -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0 24px">
      <div style="background:var(--bg-card);border:1px solid var(--brit-green-bd);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--brit-green);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">✓ ŠTO RADI DOBRO</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          ✓ Dear Tom → Best wishes (točna kombinacija)<br>
          ✓ Prva rečenica: entuzijazam + povod ("I was really excited")<br>
          ✓ Prijedlozi su konkretni (staro mjesto, restoran, jezero, muzej)<br>
          ✓ Kontrakcije prihvatljive u neformalnom (I've, I'd, it's)<br>
          ✓ Upitna rečenica na kraju — traži feedback (Let me know)<br>
          ✓ Emocionalni završetak ("I'm really looking forward")<br>
          ✓ Nema slenga — neformalan ali uredan engleski
        </div>
      </div>
      <div style="background:var(--bg-card);border:1px solid var(--bd-mid);border-radius:var(--r3);padding:14px">
        <div style="font-family:var(--mono);font-size:10px;font-weight:700;color:var(--gold);margin-bottom:10px;padding-bottom:8px;border-bottom:1px solid var(--bd);letter-spacing:1.5px">🔍 KORISNE FRAZE ZA NEFORMALNI E-MAIL</div>
        <div style="font-size:12.5px;color:var(--t2);line-height:1.8">
          "<b>I was really excited to hear that</b>..." (otvori s entuzijazmom)<br>
          "<b>I can't wait to show you around!</b>" (uskličnik OK)<br>
          "<b>First of all, I'd love to</b>..." (redoslijed prijedloga)<br>
          "<b>if the weather is good, we could</b>..." (kondicionalni prijedlog)<br>
          "<b>I've heard it's well worth a visit</b>" (preporuka iz druge ruke)<br>
          "<b>Let me know if</b>... and whether..." (traži odgovor)<br>
          "<b>I'm really looking forward to seeing you</b>" (topli završetak)
        </div>
      </div>
    </div>

    <!-- REGISTAR USPOREDBA -->
    <div style="background:var(--bg-card);border:1px solid var(--blue-border);border-radius:var(--r3);overflow:hidden;margin-bottom:24px">
      <div style="padding:9px 16px;background:var(--blue-dim);border-bottom:1px solid var(--blue-border);font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase">Formalni vs neformalni — isti sadržaj, različit registar</div>
      <div style="overflow-x:auto">
        <table style="width:100%;border-collapse:collapse;font-size:13px">
          <thead>
            <tr style="background:var(--bg-input)">
              <th style="padding:8px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--t3);border-bottom:1px solid var(--bd-mid);border-right:1px solid var(--bd)">Namjera</th>
              <th style="padding:8px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--union-red);border-bottom:1px solid var(--bd-mid);border-right:1px solid var(--bd)">Formalno</th>
              <th style="padding:8px 14px;text-align:left;font-family:var(--mono);font-size:10px;font-weight:700;color:var(--brit-green);border-bottom:1px solid var(--bd-mid)">Neformalno</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid var(--bd)">
              <td style="padding:8px 14px;color:var(--t3);font-family:var(--mono);font-size:11px;border-right:1px solid var(--bd)">Razlog pisanja</td>
              <td style="padding:8px 14px;color:var(--t1);border-right:1px solid var(--bd)">I am writing to express my concern regarding...</td>
              <td style="padding:8px 14px;color:var(--t1)">I'm writing because I wanted to tell you about...</td>
            </tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)">
              <td style="padding:8px 14px;color:var(--t3);font-family:var(--mono);font-size:11px;border-right:1px solid var(--bd)">Prijedlog</td>
              <td style="padding:8px 14px;color:var(--t1);border-right:1px solid var(--bd)">I would suggest that you consider visiting...</td>
              <td style="padding:8px 14px;color:var(--t1)">You should definitely check out... / I'd love to take you to...</td>
            </tr>
            <tr style="border-bottom:1px solid var(--bd)">
              <td style="padding:8px 14px;color:var(--t3);font-family:var(--mono);font-size:11px;border-right:1px solid var(--bd)">Zahtjev za odgovor</td>
              <td style="padding:8px 14px;color:var(--t1);border-right:1px solid var(--bd)">I look forward to receiving your response at your earliest convenience.</td>
              <td style="padding:8px 14px;color:var(--t1)">Let me know what you think! / Write back soon!</td>
            </tr>
            <tr style="border-bottom:1px solid var(--bd);background:rgba(255,255,255,.015)">
              <td style="padding:8px 14px;color:var(--t3);font-family:var(--mono);font-size:11px;border-right:1px solid var(--bd)">Kontrakcije</td>
              <td style="padding:8px 14px;color:var(--union-red)">Nikad — it is, I do not, cannot</td>
              <td style="padding:8px 14px;color:var(--brit-green)">OK — it's, I don't, can't</td>
            </tr>
            <tr>
              <td style="padding:8px 14px;color:var(--t3);font-family:var(--mono);font-size:11px;border-right:1px solid var(--bd)">Uskličnik</td>
              <td style="padding:8px 14px;color:var(--union-red)">Nikad — previše emocionalno</td>
              <td style="padding:8px 14px;color:var(--brit-green)">OK — 1–2 puta, ne pretjerivati</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="sec-label" style="margin-top:28px">// checklist — prije predaje e-maila / pisma</div>
    <div class="checklist" id="emailChecklist">
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Registar:</b> formalno ili neformalno — konzistentno kroz cijeli tekst</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Otvaranje:</b> Dear Sir/Madam · Dear Mr/Ms [Surname] · Dear [Ime]</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Zatvaranje:</b> Yours faithfully/sincerely ili Best wishes/Kind regards — točna kombinacija</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Prva rečenica:</b> jasno objašnjava razlog pisanja</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Specifični detalji</b> iz zadatka (datumi, mjesta, problemi, upiti)</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Action point:</b> što tražiš ili što očekuješ kao odgovor</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Bez kontrakcija</b> u formalnom (it is, do not, cannot)</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Formalni linkers</b> u formalnom (Furthermore, However, As a result)</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>180–200 words</b> — prebrojano</div></div>
      <div class="cl-item" onclick="toggleCheck(this)"><div class="cl-box">✓</div><div class="cl-text"><b>Nema slenga</b> ni u neformalnom (gonna, wanna, btw, lol)</div></div>
    </div>

    <div class="sec-label">// kviz — točna fraza ili greška</div>
    <div class="q-block" id="q1">
      <div class="q-head"><div class="q-meta">pitanje 01 · otvaranje i zatvaranje</div><div class="q-text">Pismo počinje s "Dear Sir/Madam,". Koji je točan završetak?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">A</div>Yours sincerely,</div>
        <div class="q-opt" onclick="answer(this,'q1','correct')"><div class="q-letter">B</div>Yours faithfully,</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">C</div>Best wishes,</div>
        <div class="q-opt" onclick="answer(this,'q1','wrong')"><div class="q-letter">D</div>Kind regards,</div>
      </div>
      <div class="q-expl" id="qe1"><div class="expl-ok">✓ Točno — Dear Sir/Madam (ne znaš ime) → Yours faithfully. Yours sincerely ide uz Dear Mr/Ms [Surname]. Best wishes i Kind regards su neformalni završeci.</div></div>
    </div>

    <div class="q-block" id="q2">
      <div class="q-head"><div class="q-meta">pitanje 02 · prva rečenica</div><div class="q-text">Pišeš pismo žalbe restoranu zbog lošeg iskustva. Koja je TOČNA prva rečenica?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">A</div>Your restaurant was terrible last night.</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">B</div>I want to complain about your food.</div>
        <div class="q-opt" onclick="answer(this,'q2','correct')"><div class="q-letter">C</div>I am writing to express my dissatisfaction with the service I received at your restaurant on 20th April.</div>
        <div class="q-opt" onclick="answer(this,'q2','wrong')"><div class="q-letter">D</div>I have a complaint and you need to read this.</div>
      </div>
      <div class="q-expl" id="qe2"><div class="expl-ok">✓ Točno — Formalna prva rečenica objašnjava razlog pisanja, navodi specifičan datum i koristi formalni registar. A i D su agresivni. B je prejednostavan za formalni registar.</div></div>
    </div>

    <div class="q-block" id="q3">
      <div class="q-head"><div class="q-meta">pitanje 03 · registar</div><div class="q-text">Koji je izraz NEPRIKLADAN za formalni e-mail?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">A</div>I would be grateful if you could respond promptly.</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">B</div>I am writing with regard to my recent order.</div>
        <div class="q-opt" onclick="answer(this,'q3','correct')"><div class="q-letter">C</div>BTW, I also wanna know about the refund policy.</div>
        <div class="q-opt" onclick="answer(this,'q3','wrong')"><div class="q-letter">D</div>Furthermore, I would like to bring to your attention that...</div>
      </div>
      <div class="q-expl" id="qe3"><div class="expl-ok">✓ Točno — "BTW" i "wanna" su sleng — apsolutno neprihvatljivi u formalnom pismu. Svi ostali izrazi su primjeri dobrog formalnog registra.</div></div>
    </div>

    <div class="q-block" id="q4">
      <div class="q-head"><div class="q-meta">pitanje 04 · zahtjev u pismu žalbe</div><div class="q-text">Koja je TOČNA formulacija zahtjeva za povrat novca?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">A</div>Give me my money back immediately.</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">B</div>I want a refund and I want it now.</div>
        <div class="q-opt" onclick="answer(this,'q4','correct')"><div class="q-letter">C</div>I would be grateful if you could arrange a full refund at your earliest convenience.</div>
        <div class="q-opt" onclick="answer(this,'q4','wrong')"><div class="q-letter">D</div>Please give me back all of my money because this is not fair.</div>
      </div>
      <div class="q-expl" id="qe4"><div class="expl-ok">✓ Točno — Formalni zahtjev koristi kondicionalne fraze (I would be grateful if you could...) i formalni vokabular (at your earliest convenience). Opcije A, B i D su previše direktne ili agresivne.</div></div>
    </div>

    <div class="q-block" id="q5">
      <div class="q-head"><div class="q-meta">pitanje 05 · neformalni e-mail</div><div class="q-text">Koji izraz JE prikladan za neformalni e-mail prijatelju?</div></div>
      <div class="q-opts">
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">A</div>I am writing to inform you of my recent activities.</div>
        <div class="q-opt" onclick="answer(this,'q5','correct')"><div class="q-letter">B</div>I can't wait to tell you about everything that's been happening!</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">C</div>omg u wont believe wt happened lol</div>
        <div class="q-opt" onclick="answer(this,'q5','wrong')"><div class="q-letter">D</div>Yours faithfully, and I look forward to your prompt response.</div>
      </div>
      <div class="q-expl" id="qe5"><div class="expl-ok">✓ Točno — B je neformalan ali još uvijek uredan engleski — kontrakcije OK, uskličnik OK. A je previše formalan za prijatelja. C je sleng (neprihvatljivo). D je formalna formula koja ne odgovara neformalnom e-mailu.</div></div>
    </div>

    <div class="sec-label" style="margin-top:28px">// zadatak za pisanje</div>
    <div style="background:var(--bg-card);border:2px solid var(--blue-border);border-radius:var(--r4);overflow:hidden;margin-bottom:24px">
      <div style="background:var(--blue-dim);padding:12px 20px;border-bottom:1px solid var(--blue-border);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase">Zadatak za vježbu — formalni e-mail</div>
      <div style="padding:18px 20px">
        <div style="font-size:15px;font-weight:600;color:var(--t1);font-family:var(--serif);margin-bottom:12px;line-height:1.6">You recently purchased a laptop online. When it arrived, the screen was cracked and one of the keys was missing from the keyboard. Write an email to the customer service department of the company, explaining the problem and requesting a replacement or refund.</div>
        <div style="font-family:var(--mono);font-size:11px;color:var(--t3)">180–200 words · formalni registar · Dear Sir/Madam → Yours faithfully · specifični detalji · konkretan zahtjev</div>
      </div>
    </div>

    <div class="discere-box">
      <div class="discere-hd"><div class="discere-hd-icon">🚀</div><div class="discere-hd-text">Nastavi s Blokom 4</div></div>
      <div class="discere-body">
        <div class="discere-desc">Poglavlje 16 pokriva <b>Članak i recenziju</b> — dva preostala Writing tipa na maturi.</div>
        <button class="discere-btn" onclick="navigateChapter(16)">Poglavlje 16 →</button>
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
      <button class="nav-btn primary" onclick="navigateChapter(16)">Poglavlje 16: Članak i recenzija →</button>
    </div>
  </div><!-- /l2 -->
</div>
</main>

<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>
const PAGE_KEY='maturiraj_en_visa_p15';
function saveProgress(i){try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d['tab_'+i]=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}}
function loadProgress(){
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    document.querySelectorAll('.tab').forEach((t,i)=>{if(d['tab_'+i])t.classList.add('done-tab');});
    if(d.cgPassed){const cg=document.getElementById('cgBlock');if(cg)cg.style.display='none';}
    if(d.checklist){d.checklist.forEach((v,i)=>{const items=document.querySelectorAll('.cl-item');if(items[i]&&v)items[i].classList.add('checked');});}
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
function toggleCheck(el){
  el.classList.toggle('checked');
  try{
    const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');
    d.checklist=Array.from(document.querySelectorAll('.cl-item')).map(i=>i.classList.contains('checked'));
    localStorage.setItem(PAGE_KEY,JSON.stringify(d));
  }catch(e){}
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
    fb.innerHTML='✓ Točno! Dear Mr Johnson (poznaješ prezime) → Yours sincerely. Yours faithfully ide uz Dear Sir/Madam. Best wishes i Kind regards su neformalni završeci.';
    btn.classList.add('show');
    try{const d=JSON.parse(localStorage.getItem(PAGE_KEY)||'{}');d.cgPassed=true;localStorage.setItem(PAGE_KEY,JSON.stringify(d));}catch(e){}
  } else {
    opt.classList.add('cg-wrong');
    document.querySelectorAll('.cg-opt').forEach(o=>{if(o.getAttribute('onclick')&&o.getAttribute('onclick').includes('true'))o.classList.add('cg-correct');});
    fb.className='cg-feedback show fail';
    fb.innerHTML='✗ Netočno. B je točno: Dear Mr Johnson (znaš prezime) → Yours sincerely. Memotehnika: Sincerely → Specific name. Faithfully → za nepoznate (Sir/Madam).';
    setTimeout(()=>{cgAnswered=false;document.querySelectorAll('.cg-opt').forEach(o=>o.classList.remove('cg-disabled','cg-wrong','cg-correct'));fb.className='cg-feedback';btn.classList.remove('show');},2800);
  }
}
const tipSections=['sec-register','sec-openclose','sec-opening-lines','sec-body-phrases','sec-complaint','sec-enquiry','sec-informal'];
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

<style>
@keyframes confettiFall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:0}}
.confetti-piece{position:fixed;top:-10px;width:8px;height:8px;border-radius:2px;pointer-events:none;z-index:9999;animation:confettiFall linear forwards}
.q-opt{display:flex;align-items:center;gap:10px;padding:10px 14px;background:var(--bg-input);border:1px solid var(--bd-mid);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .12s;user-select:none;font-family:var(--mono)}
.q-opt:hover:not(.disabled){background:var(--bg-hover);border-color:var(--bd-light);color:var(--t1)}
.q-opt.correct{background:var(--green-dim);border-color:var(--green-border);color:var(--green)}.q-opt.wrong{background:var(--red-dim);border-color:var(--red-border);color:var(--red)}.q-opt.disabled{cursor:default;pointer-events:none}
.q-letter{width:22px;height:22px;border-radius:var(--r1);border:1px solid var(--bd-mid);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.q-expl{display:none;padding:12px 18px;font-size:12.5px;line-height:1.7;border-top:1px solid var(--bd);font-family:var(--mono)}
.q-expl.show{display:block}
.expl-ok{background:var(--green-dim);border:1px solid var(--green-border);color:var(--green);padding:10px 14px;border-radius:var(--r2)}
</style>

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