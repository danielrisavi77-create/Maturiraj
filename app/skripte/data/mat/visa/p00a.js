/**
 * Maturiraj.hr — Matematika A razina
 * Poglavlje: P00A — Maturiraj.hr — Mat A · P00A · Kako koristiti Maturiraj skripte
 * Auto-generated ES6 module v2
 * (s razlomcima, responsive CSS, JS bug fixes)
 *
 * Upotreba:
 *   import chapter from './p00a.js'
 *   chapter.mount(document.getElementById('container'))
 *   chapter.unmount(document.getElementById('container'))
 */

const css = `:root{
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
body{font-family:var(--font);background:var(--bg);color:var(--t1);min-height:100vh;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.shell{display:flex;min-height:100vh}

/* ── SIDEBAR ── */
.sidebar{width:var(--sb);flex-shrink:0;background:var(--sur);border-right:1px solid var(--bd);position:sticky;top:0;height:100vh;overflow-y:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--bdm) transparent}
.sidebar::-webkit-scrollbar{width:3px}.sidebar::-webkit-scrollbar-thumb{background:var(--bdm);border-radius:2px}
.sb-brand{padding:16px 14px 13px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.sb-logo{width:30px;height:30px;background:linear-gradient(135deg,var(--blue),var(--cyan));border-radius:var(--r2);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 0 18px rgba(77,158,255,0.28)}
.sb-logo svg{width:14px;height:14px}
.sb-name{font-size:13px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.sb-sub{font-size:10px;color:var(--t3);margin-top:1px;font-family:var(--mono)}
.sb-hamburger{display:none;position:fixed;top:12px;left:12px;z-index:200;width:36px;height:36px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);align-items:center;justify-content:center;cursor:pointer;flex-direction:column;gap:4px}
.sb-hamburger span{display:block;width:16px;height:1.5px;background:var(--t2);border-radius:1px;transition:all .2s}
.sb-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:150;backdrop-filter:blur(2px)}
.sb-overlay.show{display:block}
.sidebar.mobile-open{transform:translateX(0)!important}
.sb-prog-wrap{padding:8px 14px;border-bottom:1px solid var(--bd)}
.sb-prog-label{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:5px;display:flex;justify-content:space-between}
.sb-prog-track{height:3px;background:var(--bd);border-radius:2px;overflow:hidden}
.sb-prog-bar{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:2px;transition:width .5s cubic-bezier(.4,0,.2,1)}
.sb-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--t3);text-transform:uppercase;padding:15px 14px 5px}
.sb-item{display:flex;align-items:center;gap:9px;padding:6px 14px;font-size:11.5px;color:var(--t2);cursor:pointer;border-left:2px solid transparent;transition:all .12s;line-height:1.35}
.sb-item:hover{color:var(--t1);background:var(--hov)}
.sb-item.active{color:var(--blue);background:var(--glow-b);border-left-color:var(--blue);font-weight:600}
.sb-item.done{color:var(--green);opacity:.7}
.sb-item.done .sb-dot{background:var(--green);opacity:.7}
.sb-dot{width:4px;height:4px;border-radius:50%;background:currentColor;flex-shrink:0;opacity:.35}
.sb-item.active .sb-dot{opacity:1}
button.sb-item{font-family:var(--font);outline:none;line-height:1.35}
.sb-footer{margin-top:auto;padding:10px 14px;border-top:1px solid var(--bd);font-size:10px;color:var(--t3);line-height:1.7;font-family:var(--mono)}

/* ── MAIN ── */
.main{flex:1;min-width:0}
.content-wrap{max-width:840px;width:100%;margin:0 auto;padding:32px 44px 120px}

/* ── BREADCRUMB ── */
.bc{display:flex;align-items:center;gap:8px;font-size:11px;color:var(--t3);margin-bottom:22px;font-family:var(--mono)}
.bc-sep{opacity:.3}.bc-cur{color:var(--blue)}

/* ── TABS ── */
.tabs{display:flex;gap:0;margin-bottom:28px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);padding:3px;width:fit-content}
.tab{padding:7px 20px;font-size:12px;font-weight:600;color:var(--t2);cursor:pointer;border-radius:5px;transition:all .18s;white-space:nowrap;font-family:var(--mono)}
.tab:hover{color:var(--t1)}
.tab.on{background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;font-weight:700;box-shadow:0 2px 16px rgba(77,158,255,0.3)}
.layer{display:none}.layer.on{display:block}

/* ── HERO ── */
.hero{margin-bottom:26px;padding:30px 34px;background:var(--card);border:1px solid var(--bdm);border-radius:20px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--blue),var(--cyan),var(--indigo),transparent)}
.hero-orb{position:absolute;top:-60px;right:-60px;width:280px;height:280px;background:radial-gradient(circle,rgba(77,158,255,0.055) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-orb2{position:absolute;bottom:-50px;left:20%;width:200px;height:200px;background:radial-gradient(circle,rgba(34,211,238,0.035) 0%,transparent 70%);border-radius:50%;pointer-events:none}
.hero-eyebrow{font-family:var(--mono);font-size:9.5px;color:var(--cyan);letter-spacing:2px;margin-bottom:11px;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.hero-eyebrow::before{content:'';display:inline-block;width:18px;height:1px;background:var(--cyan);opacity:.5}
.hero-title{font-size:27px;font-weight:800;color:var(--t1);letter-spacing:-1px;line-height:1.12;margin-bottom:8px}
.hero-title span{background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:12.5px;color:var(--t2);font-family:var(--mono);margin-bottom:18px;line-height:1.65}
.hero-meta{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px}
.hchip{font-family:var(--mono);font-size:10px;padding:3px 10px;border-radius:var(--r1);border:1px solid;letter-spacing:.3px;font-weight:600}
.hchip.b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.hchip.a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.hchip.c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.pt{height:2px;background:var(--bd);border-radius:1px;overflow:visible;width:100%;max-width:360px;position:relative}
.pb{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:1px;position:relative;transition:width .6s cubic-bezier(.4,0,.2,1)}
.pb::after{content:'';position:absolute;right:-3px;top:-3px;width:8px;height:8px;background:var(--cyan);border-radius:50%;box-shadow:0 0 10px var(--cyan)}

/* ── PILLS ── */
.tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px}
.pill{display:inline-flex;align-items:center;padding:3px 10px;border-radius:var(--r1);font-size:10.5px;font-weight:700;font-family:var(--mono);border:1px solid;letter-spacing:.3px}
.p-b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}.p-c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.p-i{background:var(--dim-i);color:var(--indigo);border-color:var(--bd-i)}.p-a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.p-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}.p-v{background:var(--dim-v);color:var(--violet);border-color:var(--bd-v)}
.p-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}

/* ── MISC ── */
.slbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2.5px;color:var(--t3);text-transform:uppercase;margin-bottom:12px;padding-bottom:7px;border-bottom:1px solid var(--bd)}
.divider{border:none;border-top:1px solid var(--bd);margin:26px 0}
.prose{font-size:14.5px;line-height:1.9;color:rgba(228,237,255,.82);margin-bottom:14px}
.prose b,.prose strong{color:var(--t1);font-weight:700}.prose em{color:var(--cyan);font-style:normal}

/* ── STAT GRID ── */
.sg{display:grid;grid-template-columns:repeat(auto-fill,minmax(168px,1fr));gap:10px;margin-bottom:24px}
.sc{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:14px 15px;transition:border-color .15s,transform .15s,box-shadow .15s}
.sc:hover{border-color:var(--bd-b);transform:translateY(-2px);box-shadow:0 4px 20px rgba(77,158,255,0.07)}
.sc-ico{font-family:var(--mono);font-size:10px;font-weight:700;padding:3px 8px;border-radius:var(--r1);display:inline-flex;margin-bottom:10px}
.si-b{background:var(--dim-b);color:var(--blue)}.si-c{background:var(--dim-c);color:var(--cyan)}
.si-i{background:var(--dim-i);color:var(--indigo)}.si-a{background:var(--dim-a);color:var(--amber)}
.si-g{background:var(--dim-g);color:var(--green)}.si-v{background:var(--dim-v);color:var(--violet)}
.sc-name{font-size:13px;font-weight:700;color:var(--t1);margin-bottom:5px;line-height:1.3}
.sc-desc{font-size:11px;color:var(--t2);line-height:1.55;font-family:var(--mono)}

/* ── CONCEPTS TABLE ── */
.con{border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin:12px 0 22px}
.cr{display:grid;grid-template-columns:minmax(155px,34%) 1fr;border-bottom:1px solid var(--bd);transition:background .1s}
.cr:last-child{border-bottom:none}.cr:nth-child(even){background:rgba(77,158,255,0.016)}
.cr:hover{background:var(--hov)}
.ck{padding:11px 14px;font-family:var(--mono);font-size:11.5px;font-weight:600;border-right:1px solid var(--bd);position:relative;padding-left:18px}
.ck::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;border-radius:0 2px 2px 0}
.ck.b{color:var(--blue)}.ck.b::before{background:var(--blue)}
.ck.c{color:var(--cyan)}.ck.c::before{background:var(--cyan)}
.ck.i{color:var(--indigo)}.ck.i::before{background:var(--indigo)}
.ck.a{color:var(--amber)}.ck.a::before{background:var(--amber)}
.ck.r{color:var(--red)}.ck.r::before{background:var(--red)}
.ck.g{color:var(--green)}.ck.g::before{background:var(--green)}
.ck.v{color:var(--violet)}.ck.v::before{background:var(--violet)}
.cv{padding:11px 16px;font-size:13px;color:var(--t2);line-height:1.65}
.cv code{font-family:var(--mono);font-size:11px;background:var(--inp);padding:1px 6px;border-radius:var(--r1);color:var(--blue)}

/* ── BLOCK TYPES ── */
.box-int{background:linear-gradient(135deg,rgba(77,158,255,0.055),rgba(34,211,238,0.03));border:1px solid var(--bd-b);border-radius:var(--r4);padding:17px 20px;margin:13px 0}
.box-int-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--blue);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:7px}
.box-int-lbl::before{content:'◆';font-size:7px}
.box-int-txt{font-size:14px;color:var(--t1);line-height:1.82;font-weight:500}
.box-int-txt em{color:var(--cyan);font-style:normal;font-weight:600}

.box-for{background:var(--inp);border:1px solid var(--bdm);border-left:3px solid var(--indigo);border-radius:0 var(--r3) var(--r3) 0;padding:15px 20px;margin:13px 0;font-family:var(--mono);font-size:13px;line-height:2.1}
.box-for-lbl{font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;margin-bottom:9px;display:block}
.box-for .val{color:var(--blue)}.box-for .kw{color:var(--amber)}.box-for .cmt{color:var(--t3)}

.box-men{background:linear-gradient(135deg,rgba(129,140,248,0.065),rgba(192,132,252,0.03));border:1px solid var(--bd-i);border-radius:var(--r4);padding:15px 20px;margin:13px 0}
.box-men-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;margin-bottom:8px;display:flex;align-items:center;gap:7px}
.box-men-lbl::before{content:'🧠';font-size:11px}
.box-men-txt{font-size:13.5px;color:var(--t2);line-height:1.82}
.box-men-txt strong{color:var(--indigo)}

.box-tak{background:linear-gradient(135deg,rgba(245,158,11,0.065),rgba(251,183,36,0.03));border:1px solid var(--bd-a);border-radius:var(--r4);padding:15px 20px;margin:14px 0}
.box-tak-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--amber);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:7px}
.box-tak-lbl::before{content:'⭐';font-size:11px}
.box-tak-txt{font-size:13px;color:var(--t2);line-height:1.82}
.box-tak-txt strong{color:var(--amber)}
.box-tak-txt code{font-family:var(--mono);font-size:11.5px;background:rgba(245,158,11,0.1);padding:1px 7px;border-radius:var(--r1);color:var(--amber)}

.box-warn{background:var(--dim-r);border:1px solid var(--bd-r);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bw-ico{font-size:16px;flex-shrink:0;margin-top:1px}.bw-body{flex:1}
.bw-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);margin-bottom:5px}
.bw-txt{font-size:13px;line-height:1.78;color:var(--t2)}
.bw-txt strong{color:var(--red)}.bw-txt code{font-family:var(--mono);font-size:11px;background:var(--dim-r);padding:1px 5px;border-radius:var(--r1);color:var(--red)}

.box-tip{background:var(--dim-c);border:1px solid var(--bd-c);border-radius:var(--r3);padding:14px 18px;margin:12px 0;display:flex;gap:12px}
.bt-ico{font-size:15px;flex-shrink:0;margin-top:1px}.bt-body{flex:1}
.bt-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--cyan);margin-bottom:5px}
.bt-txt{font-size:13px;line-height:1.78;color:var(--t2)}.bt-txt strong{color:var(--cyan)}

.box-20{background:linear-gradient(135deg,rgba(52,211,153,0.065),rgba(34,211,238,0.03));border:1px solid var(--bd-g);border-radius:var(--r4);padding:15px 20px;margin:16px 0}
.b20-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--green);text-transform:uppercase;margin-bottom:10px;display:flex;align-items:center;gap:7px}
.b20-lbl::before{content:'⚡';font-size:11px}
.b20-list{list-style:none;display:flex;flex-direction:column;gap:6px}
.b20-item{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t1);line-height:1.6}
.b20-dot{width:6px;height:6px;background:var(--green);border-radius:1px;flex-shrink:0;margin-top:5px;transform:rotate(45deg)}

.box-alv{background:linear-gradient(135deg,rgba(192,132,252,0.065),rgba(129,140,248,0.03));border:1px solid var(--bd-v);border-radius:var(--r4);padding:15px 20px;margin:14px 0}
.balv-lbl{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--violet);text-transform:uppercase;margin-bottom:9px;display:flex;align-items:center;gap:7px}
.balv-lbl::before{content:'🔺';font-size:10px}
.balv-txt{font-size:13px;color:var(--t2);line-height:1.82}.balv-txt strong{color:var(--violet)}

/* ── SECTION HEADER ── */
.sec-hdr{display:flex;align-items:center;gap:14px;margin:30px 0 17px}
.sec-line{flex:1;height:1px;background:var(--bd)}
.sec-badge{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase;padding:4px 12px;border:1px solid var(--bd-b);border-radius:20px;background:var(--dim-b);white-space:nowrap}h2.sec-badge{display:block;margin:0;font-size:9.5px;font-weight:700;}.sec-time{font-family:var(--mono);font-size:9px;color:var(--t3);padding:2px 8px;border:1px solid var(--bd);border-radius:10px;white-space:nowrap;margin-left:6px}

/* ── TABLE ── */
.tbl{overflow-x:auto;margin:12px 0 18px;border:1px solid var(--bdm);border-radius:var(--r3)}
table{width:100%;border-collapse:collapse;font-size:12.5px}
th{padding:9px 14px;background:var(--sur);color:var(--t3);font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;text-align:left;border-bottom:1px solid var(--bdm);white-space:nowrap}
td{padding:10px 14px;color:var(--t2);border-bottom:1px solid var(--bd);line-height:1.6;vertical-align:top}
tr:last-child td{border-bottom:none}
tr:nth-child(even) td{background:rgba(77,158,255,0.015)}
tr:hover td{background:var(--hov)}
td code{font-family:var(--mono);font-size:11px;background:var(--inp);padding:1px 5px;border-radius:var(--r1);color:var(--blue)}
td b{color:var(--t1)}
.bs{font-family:var(--mono);font-size:9.5px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:600}
.bs-b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.bs-r{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.bs-g{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.bs-a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}

/* ── COMPARE ── */
.cmp{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:13px 0 20px}
.cmp-c{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.cmp-h{padding:9px 13px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;border-bottom:1px solid var(--bd)}
.cmp-h.b{background:var(--dim-b);color:var(--blue);border-bottom-color:var(--bd-b)}
.cmp-h.r{background:var(--dim-r);color:var(--red);border-bottom-color:var(--bd-r)}
.cmp-h.g{background:var(--dim-g);color:var(--green);border-bottom-color:var(--bd-g)}
.cmp-h.i{background:var(--dim-i);color:var(--indigo);border-bottom-color:var(--bd-i)}
.cmp-body{padding:12px 13px}
.cmp-row{font-size:12.5px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.6}
.cmp-row:last-child{border-bottom:none}
.cmp-row b{color:var(--t1);display:block;font-size:11.5px;margin-bottom:2px}

/* ── EXAMPLES ── */
.exs{margin:12px 0 17px}
.ex{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid var(--bd)}
.ex:last-child{border-bottom:none}
.ex-l{font-size:13.5px;color:var(--t1);line-height:1.6;font-family:var(--mono)}
.ex-l b{color:var(--blue)}.ex-l b.r{color:var(--red)}.ex-l b.g{color:var(--green)}
.ex-arr{color:var(--t3);font-size:12px;padding-top:3px}
.ex-r{font-size:12px;color:var(--t2);line-height:1.6;font-family:var(--mono)}

/* ── SUB LABEL ── */
.sub-l{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase;margin:18px 0 10px;display:flex;align-items:center;gap:8px}
.sub-l::before{content:'→';color:var(--t3)}

/* ── STEP REVEAL ── */
.sr{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.sr-head{padding:12px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.sr-title{font-size:13px;font-weight:700;color:var(--t1)}.sr-task{font-family:var(--mono);font-size:12.5px;color:var(--cyan)}
.sr-steps{padding:0}
.sr-step{border-bottom:1px solid var(--bd);display:none;animation:fadeSlide .25s ease}
.sr-step.show{display:block}
@keyframes fadeSlide{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.sr-step-in{padding:13px 17px;display:flex;gap:13px;align-items:flex-start}
.sr-num{width:24px;height:24px;border-radius:50%;background:var(--dim-b);border:1.5px solid var(--bd-b);color:var(--blue);font-family:var(--mono);font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:1px}
.sr-body{flex:1}
.sr-stitle{font-size:12.5px;font-weight:700;color:var(--t1);margin-bottom:4px}
.sr-txt{font-size:12.5px;color:var(--t2);line-height:1.78;font-family:var(--mono)}
.sr-txt strong{color:var(--blue)}.sr-txt em{color:var(--cyan);font-style:normal}
.sr-tryit{margin-top:10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 13px}
.sr-try-lbl{font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:7px}
.sr-try-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.sr-try-in{font-family:var(--mono);font-size:13px;background:var(--sur);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:6px 12px;outline:none;width:180px;transition:border-color .15s}
.sr-try-in:focus{border-color:var(--blue)}
.sr-try-in.ok{border-color:var(--green);background:var(--dim-g);color:var(--green)}
.sr-try-in.fail{border-color:var(--red);background:var(--dim-r);color:var(--red)}
.sr-try-btn{padding:6px 13px;background:var(--dim-a);border:1px solid var(--bd-a);color:var(--amber);border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-try-btn:hover{background:var(--amber);color:#060910}
.sr-try-btn:disabled{opacity:.35;cursor:default}
.sr-try-fb{font-family:var(--mono);font-size:11.5px;margin-top:7px;line-height:1.6;display:none}
.sr-try-fb.show{display:block}
.sr-try-fb.ok{color:var(--green)}.sr-try-fb.fail{color:var(--red)}
.sr-foot{padding:11px 17px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;border-top:1px solid var(--bd)}
.sr-btn{padding:7px 15px;border:1px solid var(--bd-b);background:var(--dim-b);color:var(--blue);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s}
.sr-btn:hover{background:var(--blue);color:#060910}
.sr-btn.rst{border-color:var(--bdm);background:transparent;color:var(--t3)}
.sr-btn.rst:hover{color:var(--t2);background:var(--hov)}
.sr-prog{font-family:var(--mono);font-size:10px;color:var(--t3);margin-left:auto}

/* ── BUG FINDER ── */
.box-bug{background:var(--card);border:1px solid var(--bd-r);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.bug-head{background:var(--dim-r);padding:9px 17px;font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--red);display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--bd-r)}
.bug-body{padding:15px 17px}
.bug-task{font-family:var(--mono);font-size:13.5px;color:var(--t1);background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:12px 15px;margin-bottom:13px;line-height:1.9}
.bug-task .wrong{color:var(--red);text-decoration:line-through;opacity:.75}
.bug-opts{display:flex;flex-direction:column;gap:6px}
.bug-opt{padding:9px 13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .13s;font-family:var(--mono)}
.bug-opt:hover:not(.dis){border-color:var(--bd-b);color:var(--t1)}
.bug-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.bug-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.bug-opt.dis{cursor:default;pointer-events:none}
.bug-expl{display:none;margin-top:12px;padding:11px 13px;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;line-height:1.78}
.bug-expl.show{display:block}
.bug-expl.ok{background:var(--dim-g);color:var(--green);border:1px solid var(--bd-g)}
.bug-expl.ng{background:var(--dim-r);color:var(--red);border:1px solid var(--bd-r)}

/* ── RAPID DRILL ── */
.drill{background:var(--card);border:1px solid var(--bd-v);border-radius:var(--r4);overflow:hidden;margin:15px 0}
.drill-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.drill-title{font-family:var(--mono);font-size:10.5px;color:var(--violet);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.drill-score{font-family:var(--mono);font-size:10px;color:var(--t3)}
.drill-body{padding:18px 17px}
.drill-q{font-size:22px;font-weight:800;color:var(--t1);text-align:center;letter-spacing:-0.5px;margin-bottom:18px;font-family:var(--mono);min-height:36px;transition:opacity .15s}
.drill-opts{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:14px}
.drill-opt{padding:9px 22px;border:1.5px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:13.5px;font-weight:700;cursor:pointer;transition:all .14s}
.drill-opt:hover:not(.dis){border-color:var(--bd-v);color:var(--violet)}
.drill-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.drill-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.drill-opt.dis{cursor:default;pointer-events:none}
.drill-fb{text-align:center;font-family:var(--mono);font-size:12px;color:var(--t2);min-height:20px;margin-bottom:4px}
.drill-fb.ok{color:var(--green)}.drill-fb.ng{color:var(--red)}
.drill-ctrl{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:10px}
.drill-next{padding:7px 18px;border:1px solid var(--bd-v);background:var(--dim-v);color:var(--violet);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;display:none}
.drill-next:hover{background:var(--violet);color:#060910}
.drill-bar{height:3px;background:var(--bd);border-radius:2px;margin:12px 0 0;overflow:hidden}
.drill-bar-fill{height:100%;background:linear-gradient(90deg,var(--violet),var(--indigo));border-radius:2px;transition:width .3s}

/* ── INLINE CHECKPOINT ── */
.inline-cp{background:linear-gradient(135deg,rgba(245,158,11,0.06),rgba(77,158,255,0.04));border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.icp-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.icp-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase;display:flex;align-items:center;gap:7px}
.icp-title::before{content:'🔬';font-size:11px}
.icp-score{font-family:var(--mono);font-size:10px;color:var(--t3)}
.icp-body{padding:14px 17px;display:flex;flex-direction:column;gap:8px}
.icp-q{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden}
.icp-q-text{padding:10px 14px;font-size:13px;font-weight:700;color:var(--t1);font-family:var(--mono);border-bottom:1px solid var(--bd)}
.icp-opts{padding:8px 14px;display:flex;flex-wrap:wrap;gap:6px}
.icp-opt{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:600;cursor:pointer;transition:all .13s}
.icp-opt:hover:not(.dis){border-color:var(--bd-a);color:var(--amber)}
.icp-opt.ok{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.icp-opt.ng{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.icp-opt.dis{cursor:default;pointer-events:none}
.icp-fb{display:none;padding:8px 14px;font-family:var(--mono);font-size:12px;line-height:1.7;border-top:1px solid var(--bd)}
.icp-fb.show{display:block}
.icp-fb.ok{color:var(--green);background:var(--dim-g)}
.icp-fb.ng{color:var(--red);background:var(--dim-r)}
.icp-done{display:none;text-align:center;padding:12px;font-family:var(--mono);font-size:12px;color:var(--green);font-weight:700}
.icp-done.show{display:block}
.icp-retry{display:none;margin-top:8px;padding:5px 12px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;transition:all .15s}
.icp-retry:hover{border-color:var(--bd-a);color:var(--amber)}
.icp-retry.show{display:inline-flex}

/* ── COMBINED EXAMPLE ── */
.combo{background:linear-gradient(135deg,rgba(77,158,255,0.045),rgba(129,140,248,0.025));border:1px solid var(--bd-i);border-radius:var(--r4);overflow:hidden;margin:10px 0}
.combo-head{padding:10px 17px;border-bottom:1px solid var(--bd);background:rgba(129,140,248,0.04)}
.combo-badge{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--indigo);text-transform:uppercase;display:flex;align-items:center;gap:8px}
.combo-badge::before{content:'🔗';font-size:11px}
.combo-body{padding:15px 17px}
.combo-task{font-family:var(--mono);font-size:13.5px;color:var(--t1);font-weight:700;margin-bottom:13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:11px 14px}
.combo-steps{display:flex;flex-direction:column;gap:8px}
.combo-step{display:flex;gap:10px;align-items:flex-start}
.combo-n{width:20px;height:20px;border-radius:50%;background:var(--dim-i);border:1px solid var(--bd-i);color:var(--indigo);font-family:var(--mono);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.combo-txt{font-size:13px;color:var(--t2);line-height:1.72;font-family:var(--mono)}
.combo-txt strong{color:var(--indigo)}.combo-txt em{color:var(--cyan);font-style:normal}
.combo-ans{background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:13px;color:var(--green);margin-top:12px;font-weight:600}

/* ── NCVVO BLOK ── */
.ncvvo{background:var(--card);border:1px solid var(--bd-i);border-radius:var(--r4);overflow:hidden;margin:13px 0}
.ncvvo-hd{background:var(--dim-i);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:var(--indigo);text-transform:uppercase;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--bd-i)}
.ncvvo-body{padding:13px 17px}
.nci{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:var(--t2);padding:6px 0;border-bottom:1px solid var(--bd);line-height:1.65}
.nci:last-child{border-bottom:none}
.nc-dot{width:5px;height:5px;background:var(--indigo);border-radius:50%;flex-shrink:0;margin-top:6px}
.nci b{color:var(--t1)}

/* ── NCVVO STVARNI ISPIT ── */
.ncvvo-real{background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.ncvvo-real-hd{background:var(--amber);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:#060910;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.ncvvo-real-body{padding:14px 17px}
.ncvvo-real-item{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 14px;margin-bottom:8px}
.ncvvo-real-item:last-child{margin-bottom:0}
.ncvvo-real-meta{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.ncvvo-real-year{background:var(--dim-a);color:var(--amber);border:1px solid var(--bd-a);padding:1px 7px;border-radius:3px;font-size:9px;font-weight:700}
.ncvvo-real-q{font-family:var(--mono);font-size:13px;font-weight:700;color:var(--t1);margin-bottom:8px}
.ncvvo-real-stat{font-size:12px;color:var(--t2);line-height:1.7}
.ncvvo-real-stat strong{color:var(--red)}
.ncvvo-real-ans{margin-top:8px;padding:7px 11px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);font-family:var(--mono);font-size:12px;color:var(--green);display:none}
.ncvvo-real-ans.show{display:block}
.ncvvo-real-show{margin-top:8px;padding:5px 12px;background:transparent;border:1px solid var(--bdm);border-radius:var(--r2);font-family:var(--mono);font-size:11px;color:var(--t3);cursor:pointer;transition:all .15s}
.ncvvo-real-show:hover{border-color:var(--bd-a);color:var(--amber)}
.ncvvo-live-stat{font-family:var(--mono);font-size:10px;padding:2px 9px;border-radius:3px;border:1px solid;font-weight:700;margin-left:8px;transition:all .3s}
.ncvvo-live-stat.good{background:var(--dim-g);color:var(--green);border-color:var(--bd-g)}
.ncvvo-live-stat.bad{background:var(--dim-r);color:var(--red);border-color:var(--bd-r)}
.ncvvo-live-stat.neutral{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}

/* ── CHECKPOINT ── */
.checkpoint{background:linear-gradient(135deg,rgba(52,211,153,0.07),rgba(77,158,255,0.04));border:2px solid var(--bd-g);border-radius:var(--r4);padding:20px 22px;margin:24px 0}
.cp-head{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.cp-icon{font-size:20px}
.cp-title{font-size:15px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.cp-sub{font-size:12px;color:var(--t2);font-family:var(--mono);margin-top:2px}
.cp-list{list-style:none;display:flex;flex-direction:column;gap:7px}
.cp-item{display:flex;align-items:flex-start;gap:10px;font-size:13.5px;color:var(--t2);line-height:1.65}
.cp-check{width:18px;height:18px;border:1.5px solid var(--bd-g);border-radius:var(--r1);flex-shrink:0;margin-top:2px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s;background:transparent}
.cp-check.done{background:var(--green);border-color:var(--green)}
.cp-check.done::after{content:'✓';font-size:10px;color:#060910;font-weight:800}
.cp-item.done-item{color:var(--green)}
.cp-footer{margin-top:14px;padding-top:12px;border-top:1px solid var(--bd-g);display:flex;align-items:center;justify-content:space-between;font-family:var(--mono);font-size:11px;color:var(--t3)}
.cp-progress-txt{color:var(--green);font-weight:700}

/* ── CONNECT NEXT ── */
.connect-next{background:linear-gradient(135deg,rgba(77,158,255,0.06),rgba(129,140,248,0.04));border:1px solid var(--bd-b);border-radius:20px;padding:22px 24px;margin:28px 0}
.cn-head{display:flex;align-items:center;gap:12px;margin-bottom:16px}
.cn-icon{font-size:22px}
.cn-title{font-size:15px;font-weight:800;color:var(--t1);letter-spacing:-.4px}
.cn-sub{font-size:12px;color:var(--t2);font-family:var(--mono);margin-top:2px}
.cn-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}
.cn-item{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:13px 15px;transition:border-color .15s,transform .15s}
.cn-item:hover{border-color:var(--bd-b);transform:translateY(-2px)}
.cn-item-head{display:flex;align-items:center;gap:8px;margin-bottom:7px}
.cn-badge{font-family:var(--mono);font-size:9px;font-weight:700;padding:2px 8px;border-radius:3px;border:1px solid}
.cn-badge.b{background:var(--dim-b);color:var(--blue);border-color:var(--bd-b)}
.cn-badge.i{background:var(--dim-i);color:var(--indigo);border-color:var(--bd-i)}
.cn-badge.c{background:var(--dim-c);color:var(--cyan);border-color:var(--bd-c)}
.cn-badge.v{background:var(--dim-v);color:var(--violet);border-color:var(--bd-v)}
.cn-badge.a{background:var(--dim-a);color:var(--amber);border-color:var(--bd-a)}
.cn-item-title{font-size:12.5px;font-weight:700;color:var(--t1)}
.cn-item-desc{font-size:11.5px;color:var(--t2);line-height:1.65;font-family:var(--mono)}
.cn-item-arrow{font-size:10px;color:var(--t3);margin-top:5px;font-family:var(--mono)}

/* ── MATURA BLOCK ── */
.matura-block{border:1px solid var(--bd-a);border-radius:var(--r4);overflow:hidden;margin:20px 0}
.matura-hd{background:var(--amber);padding:9px 17px;font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:2px;color:#060910;text-transform:uppercase;display:flex;align-items:center;gap:8px}
.matura-list{list-style:none;padding:12px 17px}
.mi{display:flex;align-items:flex-start;gap:10px;font-size:13px;color:rgba(228,237,255,.82);padding:7px 0;border-bottom:1px solid rgba(245,158,11,.09);line-height:1.65}
.mi:last-child{border-bottom:none}
.mi-dot{width:5px;height:5px;background:var(--amber);border-radius:1px;flex-shrink:0;margin-top:6px;transform:rotate(45deg)}
.mi b{color:var(--t1)}

/* ── QUIZ ── */
.exam-mode-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin-bottom:20px}
.exam-mode-head{padding:10px 17px;border-bottom:1px solid var(--bd);font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase}
.exam-mode-opts{display:grid;grid-template-columns:repeat(3,1fr)}
.exam-mode-opt{padding:14px 16px;cursor:pointer;transition:background .15s;border-right:1px solid var(--bd);text-align:center}
.exam-mode-opt:last-child{border-right:none}
.exam-mode-opt:hover{background:var(--hov)}
.exam-mode-opt.active{background:var(--dim-b);border-bottom:2px solid var(--blue)}
.em-icon{font-size:20px;margin-bottom:6px}
.em-name{font-family:var(--mono);font-size:12px;font-weight:700;color:var(--t1);margin-bottom:3px}
.em-desc{font-family:var(--mono);font-size:10px;color:var(--t3);line-height:1.4}
.exam-mode-opt.active .em-name{color:var(--blue)}
.adaptive-banner{background:linear-gradient(135deg,rgba(192,132,252,0.08),rgba(129,140,248,0.05));border:1px solid var(--bd-v);border-radius:var(--r3);padding:13px 16px;margin-bottom:16px;display:flex;align-items:flex-start;gap:12px}
.ab-icon{font-size:18px;flex-shrink:0;margin-top:1px}.ab-body{flex:1}
.ab-title{font-family:var(--mono);font-size:9.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--violet);margin-bottom:5px}
.ab-text{font-size:13px;color:var(--t2);line-height:1.75}
.ab-close{background:none;border:none;color:var(--t3);font-size:18px;cursor:pointer;padding:0 4px;line-height:1;flex-shrink:0}
.ab-close:hover{color:var(--t1)}
.exam-timer{display:flex;align-items:center;gap:14px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 18px;margin-bottom:14px}
.et-circle{position:relative;width:64px;height:64px;flex-shrink:0}
#timer-canvas{position:absolute;top:0;left:0}
.et-num{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-family:var(--mono);font-size:18px;font-weight:800;color:var(--t1);line-height:1}
.et-info{flex:1}.et-label{font-family:var(--mono);font-size:9px;font-weight:700;letter-spacing:1.5px;color:var(--t3);text-transform:uppercase;margin-bottom:4px}
.et-q{font-size:13px;font-weight:700;color:var(--t1)}
.et-streak{font-family:var(--mono);font-size:11px;color:var(--green);font-weight:600;padding:4px 10px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r1)}
.exam-timer.warn .et-num{color:var(--amber)}
.exam-timer.urgent .et-num{color:var(--red);animation:pulse-red .5s infinite alternate}
@keyframes pulse-red{from{opacity:1}to{opacity:.5}}
.quiz-intro{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:12px 17px;font-size:12.5px;color:var(--t2);margin-bottom:18px;font-family:var(--mono);line-height:1.7}
.quiz-intro strong{color:var(--blue)}
.quiz-rerun{display:flex;gap:8px;align-items:center;margin-bottom:14px;flex-wrap:wrap}
.quiz-rerun-btn{padding:7px 16px;border:1px solid var(--bd-v);background:var(--dim-v);color:var(--violet);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s}
.quiz-rerun-btn:hover{background:var(--violet);color:#060910}
.quiz-rerun-info{font-family:var(--mono);font-size:10.5px;color:var(--t3)}
.qb{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:9px}
.qb-h{padding:12px 17px;border-bottom:1px solid var(--bd)}
.qb-meta{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:.5px;margin-bottom:5px;text-transform:uppercase}
.qb-text{font-size:14px;font-weight:700;color:var(--t1);line-height:1.5}
.qb-text code{font-family:var(--mono);font-size:12.5px;background:var(--inp);padding:2px 7px;border-radius:var(--r1);color:var(--cyan)}
.qb-opts{padding:10px 17px;display:flex;flex-direction:column;gap:6px}
.qm{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:.5px;padding:10px 17px 0;text-transform:uppercase}
.qq{font-size:14px;font-weight:700;color:var(--t1);line-height:1.5;padding:8px 17px 10px;border-bottom:1px solid var(--bd)}
.qo{display:flex;align-items:center;gap:10px;padding:9px 13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:13px;color:var(--t2);cursor:pointer;transition:all .13s;user-select:none;font-family:var(--mono)}
.qo:hover:not(.dis){background:var(--hov);border-color:var(--bd-b);color:var(--t1)}
.qo.correct{background:var(--dim-g);border-color:var(--bd-g);color:var(--green)}
.qo.wrong{background:var(--dim-r);border-color:var(--bd-r);color:var(--red)}
.qo.dis{cursor:default;pointer-events:none}
.ql{width:21px;height:21px;border-radius:var(--r1);border:1px solid var(--bdm);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0;color:var(--t3)}
.qe{display:none;padding:10px 17px;font-size:12px;line-height:1.78;border-top:1px solid var(--bd);font-family:var(--mono)}
.qe.show{display:block}
.qe-ok{background:var(--dim-g);border:1px solid var(--bd-g);color:var(--green);padding:9px 12px;border-radius:var(--r2)}
.qe-no{background:var(--dim-r);border:1px solid var(--bd-r);color:var(--red);padding:9px 12px;border-radius:var(--r2)}
.mini-proof{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 13px;margin-top:9px;font-family:var(--mono);font-size:12px;line-height:1.9;color:var(--t2)}
.mini-proof-lbl{font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:var(--blue);margin-bottom:6px}
.mini-proof .step{display:flex;gap:8px;align-items:flex-start;padding:3px 0}
.mini-proof .sn{width:16px;height:16px;border-radius:50%;background:var(--dim-b);border:1px solid var(--bd-b);color:var(--blue);font-size:8px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:2px}
.mini-proof .st{color:var(--t2)}.mini-proof .st strong{color:var(--blue)}
.score-box{display:none;text-align:center;padding:36px 20px;background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);margin-top:14px}
.score-box.show{display:block}
.score-num{font-size:54px;font-weight:800;background:linear-gradient(135deg,var(--blue),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:-3px;font-family:var(--mono)}
.score-lbl{font-size:13px;color:var(--t2);margin-top:9px;line-height:1.6}

/* ── FITB ── */
.fitb{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:9px}
.fitb-h{padding:10px 17px;border-bottom:1px solid var(--bd)}
.fitb-meta{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:.5px;text-transform:uppercase;margin-bottom:5px;font-weight:700}
.fitb-sent{font-size:13.5px;font-weight:700;color:var(--t1);font-family:var(--mono)}
.fitb-row{padding:10px 17px;display:flex;align-items:center;gap:9px;flex-wrap:wrap}
.fitb-in{font-family:var(--mono);font-size:13px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:7px 12px;outline:none;width:200px;transition:border-color .15s}
.fitb-in:focus{border-color:var(--blue)}
.fitb-in.ok{border-color:var(--green);background:var(--dim-g);color:var(--green)}
.fitb-in.fail{border-color:var(--red);background:var(--dim-r);color:var(--red)}
.fitb-btn{padding:7px 15px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:700;cursor:pointer;transition:all .15s;white-space:nowrap}
.fitb-btn:hover{opacity:.88}
.fitb-btn:disabled{opacity:.35;cursor:default}
.fitb-fb{display:none;padding:9px 17px;font-family:var(--mono);font-size:12px;line-height:1.78;border-top:1px solid var(--bd)}
.fitb-fb.show{display:block}
.fitb-fb.ok{color:var(--green);background:var(--dim-g)}
.fitb-fb.fail{color:var(--red);background:var(--dim-r)}

/* ── CTA ── */
.cta{background:var(--card);border:1px solid var(--bd-b);border-radius:20px;padding:22px 26px;margin:24px 0;display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;position:relative;overflow:hidden}
.cta::before{content:'';position:absolute;inset:0;background:var(--glow-b);pointer-events:none}
.cta-e{font-family:var(--mono);font-size:9px;color:var(--blue);letter-spacing:1.8px;text-transform:uppercase;margin-bottom:5px}
.cta-t{font-size:16px;font-weight:800;color:var(--t1);margin-bottom:3px;letter-spacing:-.4px}
.cta-s{font-size:12px;color:var(--t2)}
.cta-btn{padding:10px 20px;background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border:none;border-radius:var(--r2);font-family:var(--mono);font-size:12.5px;font-weight:700;cursor:pointer;flex-shrink:0;box-shadow:0 4px 16px rgba(77,158,255,0.22);display:inline-flex;text-decoration:none}
.cta-btn:hover{opacity:.88;transform:translateY(-1px)}

/* ── NAV ── */
.nav-row{display:flex;justify-content:space-between;align-items:center;margin-top:30px;padding-top:18px;border-top:1px solid var(--bd)}
.nb{display:inline-flex;align-items:center;gap:6px;font-family:var(--mono);font-size:11.5px;color:var(--t2);cursor:pointer;padding:8px 13px;border:1px solid var(--bdm);border-radius:var(--r2);background:transparent;transition:all .15s;font-weight:500}
.nb:hover{color:var(--t1);background:var(--card);border-color:var(--bdl)}
.nb.primary{background:linear-gradient(135deg,var(--blue),var(--cyan));color:#060910;border-color:transparent;font-weight:700;box-shadow:0 3px 14px rgba(77,158,255,0.22)}
.nb.primary:hover{opacity:.88;transform:translateY(-1px)}
.nb.off{opacity:.22;pointer-events:none}

/* ── POLYNOMIAL DEGREE VISUALIZER ── */
.poly-viz{background:var(--card);border:1px solid var(--bd-b);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.pv-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.pv-title{font-family:var(--mono);font-size:10.5px;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.pv-body{padding:16px 17px}
.pv-poly{font-family:var(--mono);font-size:18px;font-weight:700;color:var(--cyan);text-align:center;padding:14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:14px;letter-spacing:.5px;min-height:52px;transition:all .2s}
.pv-controls{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}
.pv-btn{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:11.5px;font-weight:600;cursor:pointer;transition:all .14s}
.pv-btn:hover{border-color:var(--bd-b);color:var(--blue)}
.pv-btn.on{background:var(--dim-b);border-color:var(--bd-b);color:var(--blue)}
.pv-info{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px}
.pv-stat{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 12px;text-align:center}
.pv-stat-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px}
.pv-stat-val{font-family:var(--mono);font-size:15px;font-weight:700;color:var(--blue)}

/* ── RATIONAL DOMAIN BUILDER ── */
.rdb{background:var(--card);border:1px solid var(--bd-c);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.rdb-head{padding:11px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.rdb-title{font-family:var(--mono);font-size:10.5px;color:var(--cyan);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.rdb-body{padding:16px 17px}
.rdb-expr{font-family:var(--mono);font-size:16px;font-weight:700;color:var(--t1);text-align:center;padding:14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:14px}
.rdb-steps{display:flex;flex-direction:column;gap:7px;margin-bottom:12px}
.rdb-step{display:flex;gap:10px;align-items:flex-start;padding:8px 10px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2)}
.rdb-sn{font-family:var(--mono);font-size:10px;font-weight:700;color:var(--cyan);flex-shrink:0;margin-top:1px}
.rdb-st{font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:1.7}
.rdb-st strong{color:var(--cyan)}
.rdb-domain{background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);padding:10px 14px;font-family:var(--mono);font-size:13px;color:var(--green);font-weight:600;text-align:center}
.rdb-btns{display:flex;gap:6px;flex-wrap:wrap;justify-content:center;margin-bottom:12px}
.rdb-btn{padding:6px 14px;border:1px solid var(--bdm);background:var(--inp);color:var(--t2);border-radius:var(--r2);font-family:var(--mono);font-size:11px;font-weight:600;cursor:pointer;transition:all .14s}
.rdb-btn:hover{border-color:var(--bd-c);color:var(--cyan)}
.rdb-btn.on{background:var(--dim-c);border-color:var(--bd-c);color:var(--cyan)}

/* ── RESPONSIVE ── */
@media(max-width:900px){.content-wrap{padding:26px 22px 80px}}
@media(max-width:720px){
  .sidebar{display:none;position:fixed;z-index:160;height:100vh;transform:translateX(-100%);transition:transform .25s}
  .sidebar.mobile-open{display:flex;transform:translateX(0)}
  .sb-hamburger{display:flex}
  .content-wrap{padding:18px 14px 80px}
  .hero{padding:20px 18px}.hero-title{font-size:22px}
  .cmp{grid-template-columns:1fr}.sg{grid-template-columns:1fr 1fr}
  .cr{grid-template-columns:1fr}.ck{border-right:none;border-bottom:1px solid var(--bd)}
  .cta{flex-direction:column}.tabs{width:100%}.tab{flex:1;text-align:center;font-size:11px;padding:7px 5px}
  .exam-mode-opts{grid-template-columns:1fr}
  .exam-mode-opt{border-right:none;border-bottom:1px solid var(--bd)}
  .exam-mode-opt:last-child{border-bottom:none}
  .cn-grid{grid-template-columns:1fr}
  .pv-info{grid-template-columns:1fr 1fr}
}
@media(max-width:480px){.sg{grid-template-columns:1fr}.ex{grid-template-columns:1fr}.ex-arr{display:none}}

/* ── CONTEXTUAL FROM-BANNER ── */
.ctx-banner{display:none;position:fixed;bottom:20px;left:50%;transform:translateX(-50%);
  background:var(--ele);border:1px solid var(--bd-c);border-radius:var(--r3);
  padding:10px 18px 10px 14px;font-family:var(--mono);font-size:11px;color:var(--cyan);
  z-index:200;box-shadow:0 4px 20px rgba(0,0,0,0.4);display:flex;align-items:center;gap:10px;
  animation:ctxSlide .3s ease}
@keyframes ctxSlide{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}
.ctx-banner-close{cursor:pointer;color:var(--t3);font-size:14px;line-height:1;margin-left:4px}
.ctx-banner-close:hover{color:var(--t1)}

/* ── RAZLOMCI (frac) ── */
.frac{display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.1}
.frac .num{padding:0 3px 1px;border-bottom:1.5px solid currentColor;text-align:center;min-width:100%}
.frac .den{padding:1px 3px 0;text-align:center;min-width:100%}
.frac.sm{font-size:.85em}

/* ══════════════════════════════════════════════
   RESPONSIVE — TABLET (max 768px)
   ══════════════════════════════════════════════ */
@media(max-width:768px){
  .qo{font-size:12.5px;padding:8px 11px;gap:8px}
  .qb-h{padding:10px 14px}.qb-meta{font-size:8px}.qq{font-size:13px}.qe{font-size:12px;padding:9px 13px}
  .icp-opts{flex-direction:column}.icp-opt{width:100%;text-align:left;font-size:12px}
  .icp-head{padding:8px 12px}.icp-title{font-size:9px}
  .nav-row{flex-direction:column;gap:8px;align-items:stretch}.nb{text-align:center;justify-content:center}
  .ncvvo-real-meta{flex-wrap:wrap;gap:4px;font-size:8px}.ncvvo-real-q{font-size:12px}
  .ncvvo-real-stat{font-size:11px}.ncvvo-real-show{font-size:11px;padding:6px 10px}
  .ncvvo-live-stat{font-size:8px;padding:2px 5px}
  .score-box{padding:24px 16px}.score-num{font-size:36px}
  .exam-timer{padding:10px 14px;gap:10px}.et-q{font-size:10px}
  .drill-q{font-size:13px;padding:14px}.drill-opt{padding:9px 14px;font-size:12px}
  .combo-head{padding:10px 14px}.combo-body{padding:10px 14px}.combo-task{font-size:12px}
  .combo-step{gap:8px}.combo-txt{font-size:12px}.combo-ans{font-size:11.5px}
  .sr-head{padding:12px 14px}.sr-task{font-size:12px}
  .sr-step-in{padding:10px 12px;gap:8px}.sr-body{font-size:12.5px}
  .box-int-txt{font-size:13px}.box-for{font-size:13px}.box-men-txt{font-size:12.5px}
  .box-bug{padding:14px}.bug-head{font-size:10px}.bug-opt{font-size:12px;padding:8px 11px}
  .cp-item{font-size:12px;padding:7px 10px}.cp-footer{padding:8px 12px;font-size:11px}
  .matura-block{padding:14px}.mi{font-size:12px}
  .fitb{padding:0}.fitb-h{padding:8px 12px}.fitb-row{padding:8px 12px;gap:7px}
  .fitb-in{font-size:12px;padding:7px 10px}.fitb-btn{padding:7px 12px;font-size:11px}
  .fitb-fb{padding:6px 12px;font-size:11px}
  .hero-eyebrow{font-size:9px}.hero-sub{font-size:13.5px}
  .hchip{font-size:9px;padding:3px 9px}
  .cr{gap:0}.ck{font-size:10px;padding:6px 10px;min-width:90px}.cv{font-size:12px;padding:6px 10px}
  .sc-ico{font-size:16px;width:36px;height:36px}.sc-name{font-size:12px}.sc-desc{font-size:11.5px}
  .graph-controls{padding:8px 10px;gap:7px}.graph-ctrl-lbl{font-size:9px}
  .graph-ctrl-val{font-size:10px;min-width:28px}.graph-canvas{height:180px}
  .graph-info{font-size:9.5px;padding:6px 10px}
  .cta{padding:16px}.cta-e{font-size:9px}.cta-t{font-size:14px}.cta-s{font-size:12px}
  .cta-btn{padding:10px 18px;font-size:12px}
}
/* ══════════════════════════════════════════════
   RESPONSIVE — MOBILE (max 480px)
   ══════════════════════════════════════════════ */
@media(max-width:480px){
  .tab{font-size:10.5px;padding:6px 4px}
  .qo{font-size:12px;padding:7px 10px}.qq{font-size:12.5px;line-height:1.5}
  .sb-name{font-size:13px}.sb-item{font-size:11px;padding:5px 12px}
  .sb-lbl{font-size:8px;padding:12px 12px 4px}
  .hero-title{font-size:20px;letter-spacing:-1px}.hero-sub{font-size:12.5px}
  .tags{gap:5px}.pill{font-size:9px;padding:3px 9px}
  .b20-item{font-size:12px;gap:8px;padding:6px 0}.b20-dot{width:4px;height:4px;flex-shrink:0}
  .icp-done{font-size:12px}.icp-retry{font-size:11px;padding:5px 12px}.icp-score{font-size:9px}
  .em-icon{font-size:18px}.em-name{font-size:12px}.em-desc{font-size:10px}
  .sr-try-row{flex-direction:column;gap:6px}.sr-try-in{width:100%}.sr-try-btn{width:100%;justify-content:center}
  .adaptive-banner{padding:10px 12px}.ab-title{font-size:11px}.ab-text{font-size:11px}
  .score-num{font-size:32px}.score-lbl{font-size:13px}
  .graph-canvas{height:160px}
  .cn-head{gap:8px}.cn-icon{font-size:18px}.cn-title{font-size:13px}
  .cn-item{padding:10px 12px}.cn-item-title{font-size:12px}.cn-item-desc{font-size:11px}
  .ncvvo-real-hd{padding:7px 12px;font-size:8px}.ncvvo-real-body{padding:10px}
  .ncvvo-real-item{padding:10px 11px;margin-bottom:6px}
  .bc{font-size:9px;gap:5px}
  .cp-head{padding:10px 12px}.cp-icon{font-size:18px}.cp-title{font-size:13px}
  .cp-sub{font-size:10px}.cp-check{width:18px;height:18px}
  .mini-proof{padding:8px 10px}.mini-proof-lbl{font-size:9px}
  .step{gap:6px}.sn{font-size:9px;padding:1px 5px}.st{font-size:11px}
}`;

const _bodyHTML = `<div class="shell">
<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>
<nav class="sidebar" id="sidebar">
  <div class="sb-brand"><div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="#060910" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">MAT A razina</div></div></div>
  <div class="sb-prog-wrap"><div class="sb-prog-label"><span>napredak</span><span id="prog-pct">0%</span></div><div class="sb-prog-track"><div class="sb-prog-bar" id="prog-bar" style="width:0%"></div></div></div>
  <button class="sb-item" onclick="backToList()" style="padding:7px 14px;border:none;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3);font-family:var(--mono);letter-spacing:.3px;background:transparent;cursor:pointer;width:100%;text-align:left">← Sva poglavlja</button>
  <div class="sb-lbl">// Uvod</div>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>00A · Kako koristiti skripte</button>
  <button class="sb-item" onclick="navigateChapter('p00b')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00B · Što te čeka na Maturi</button>
  <div class="sb-lbl">// Temelji</div>
  <button class="sb-item" onclick="navigateChapter('p01')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>01 · Skupovi, Brojevi, |x|</button>
  <button class="sb-item" onclick="navigateChapter('p02')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>02 · Potencije i korijeni</button>
  <button class="sb-item" onclick="navigateChapter('p03')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>03 · Polinomi i izrazi</button>
  <button class="sb-item" onclick="navigateChapter('p04')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>04 · Jednadžbe i nejednadžbe</button>
  <button class="sb-item" onclick="navigateChapter('p05')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>05 · Kompleksni brojevi</button>
  <div class="sb-lbl">// Funkcije</div>
  <button class="sb-item" onclick="navigateChapter('p06')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>06 · Funkcija — temelj mature</button>
  <button class="sb-item" onclick="navigateChapter('p07')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>07 · Linearna i kvadratna f.</button>
  <button class="sb-item" onclick="navigateChapter('p08')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>08 · Eksponencijalna i log.</button>
  <button class="sb-item" onclick="navigateChapter('p09')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>09 · Trigonometrija</button>
  <div class="sb-lbl">// Geometrija i Analiza</div>
  <button class="sb-item" onclick="navigateChapter('p10')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>10 · Analitička geometrija</button>
  <button class="sb-item" onclick="navigateChapter('p11')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>11 · Geometrija prostora</button>
  <button class="sb-item" onclick="navigateChapter('p12')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>12 · Vektori</button>
  <button class="sb-item" onclick="navigateChapter('p13')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>13 · Planimetrija</button>
  <button class="sb-item" onclick="navigateChapter('p14')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>14 · Nizovi</button>
  <button class="sb-item" onclick="navigateChapter('p15')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>15 · Kombinatorika</button>
  <div class="sb-lbl">// Kalkulus</div>
  <button class="sb-item" onclick="navigateChapter('p16')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>16 · Granice</button>
  <button class="sb-item" onclick="navigateChapter('p17')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>17 · Derivacije</button>
  <button class="sb-item" onclick="navigateChapter('p18')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>18 · Integrali</button>
  <button class="sb-item" onclick="navigateChapter('p19')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>19 · Složeni maturalni zadaci</button>
  <button class="sb-item" onclick="navigateChapter('p20')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>20 · Završna sistematizacija</button>
  <div class="sb-lbl">// Bonus</div>
  <button class="sb-item" onclick="navigateChapter('p21')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>21 · Vjerojatnost</button>
  <div class="sb-footer">uvod · kako koristiti<br>maturiraj.hr · A razina</div>
</nav>
<main class="main"><div class="content-wrap">
<div class="bc"><span>← početak</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">kako-koristiti-maturiraj-skripte</span></div>
<!-- HERO -->
<div class="hero">
  <div class="hero-orb"></div><div class="hero-orb2"></div>
  <div class="hero-eyebrow">uvod · vodič za korištenje · maturiraj.hr</div>
  <h1 class="hero-title">Kako koristiti<br><span>Maturiraj Skripte</span></h1>
  <p class="hero-sub">Sve što trebaš znati u 5 minuta — od otvaranja prve skripte do prolaska mature. Svaka kartica, svaki gumb, svaka funkcija objašnjena.</p>
  <div class="hero-meta">
    <span class="hchip b">5 min čitanja</span>
    <span class="hchip c">17 poglavlja</span>
    <span class="hchip a">3 načina učenja</span>
    <span class="hchip i">Interaktivno</span>
  </div>
</div>

<!-- 3 TABA - VIZUALNI WALKTHROUGH -->
<div class="slbl">// kako je svaka skripta organizirana</div>
<div class="box-int"><div class="box-int-lbl">STRUKTURA — svaka skripta ima 3 taba</div>
  <div class="box-int-txt">Svako poglavlje (P01–P20) ima iste tri kartice na vrhu. Dizajnirane su za različite načine učenja — možeš ih koristiti redom, ili skočiti direktno na vježbu ako već nešto znaš.</div>
</div>

<!-- TAB CARDS -->
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:28px">
  <div style="background:var(--card);border:2px solid var(--bd-b);border-radius:var(--r3);padding:18px;position:relative;overflow:hidden">
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--cyan))"></div>
    <div style="font-size:22px;margin-bottom:10px">⚡</div>
    <div style="font-size:13px;font-weight:700;color:var(--blue);margin-bottom:6px">2 min</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.7;font-family:var(--mono)">Brzi pregled poglavlja. Hero, stat-grid s 4–6 kartica, tablica ključnih koncepata.<br><br>Koristi kada: ponavljaš gradivo dan prije ispita ili provjeriš jesi li nešto preskočio.</div>
  </div>
  <div style="background:var(--card);border:2px solid var(--bd-c);border-radius:var(--r3);padding:18px;position:relative;overflow:hidden">
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--cyan),var(--indigo))"></div>
    <div style="font-size:22px;margin-bottom:10px">📐</div>
    <div style="font-size:13px;font-weight:700;color:var(--cyan);margin-bottom:6px">Uči</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.7;font-family:var(--mono)">Detaljno gradivo u 3 sekcije. Svaka sekcija ima: objašnjenje → formule → interaktivni alat → korak-po-korak → bug finder → ICP provjeru.<br><br>Koristi kada: učiš novu temu ili ponavljaš ono što ne razumiješ.</div>
  </div>
  <div style="background:var(--card);border:2px solid var(--bd-a);border-radius:var(--r3);padding:18px;position:relative;overflow:hidden">
    <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--amber),var(--red))"></div>
    <div style="font-size:22px;margin-bottom:10px">🧠</div>
    <div style="font-size:13px;font-weight:700;color:var(--amber);margin-bottom:6px">Vježbaj</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.7;font-family:var(--mono)">12 quiz pitanja + fill-in-the-blank. Tri moda: Standardni, Ispitni (tajmer 90s), Blitz (30s).<br><br>Koristi kada: testiraš znanje ili simuliraš ispit pod pritiskom.</div>
  </div>
</div>
<!-- INTERAKTIVNI DEMO -->
<div class="slbl">// što ćeš naći u "Uči" tabu</div>
<div id="demo-container" style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:24px">
  <div style="display:flex;border-bottom:1px solid var(--bd)">
    <button onclick="setDemo(0,this)" id="d0" style="flex:1;padding:11px 8px;background:var(--dim-b);border:none;border-bottom:2px solid var(--blue);color:var(--blue);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer">box-int</button>
    <button onclick="setDemo(1,this)" id="d1" style="flex:1;padding:11px 8px;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--t3);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer">box-for</button>
    <button onclick="setDemo(2,this)" id="d2" style="flex:1;padding:11px 8px;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--t3);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer">step reveal</button>
    <button onclick="setDemo(3,this)" id="d3" style="flex:1;padding:11px 8px;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--t3);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer">ICP provjera</button>
    <button onclick="setDemo(4,this)" id="d4" style="flex:1;padding:11px 8px;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--t3);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer">bug finder</button>
    <button onclick="setDemo(5,this)" id="d5" style="flex:1;padding:11px 8px;background:transparent;border:none;border-bottom:2px solid transparent;color:var(--t3);font-family:var(--mono);font-size:11px;font-weight:700;cursor:pointer">alati</button>
  </div>
  <div id="demo-body" style="padding:20px;font-size:13px;color:var(--t2);line-height:1.8;min-height:160px"></div>
</div>

<!-- ELEMENTI SVAKE SEKCIJE -->
<div class="slbl">// elementi svake sekcije (redom kojim se pojavljuju)</div>
<div class="con" style="margin-bottom:24px">
  <div class="cr"><div class="ck b">📦 box-int</div><div class="cv"><strong>Intuitivno objašnjenje</strong> — analogija ili priča koja objašnjava ideju bez formule. Uvijek pročitaj ovo prvo — daje kontekst svemu što slijedi.</div></div>
  <div class="cr"><div class="ck c">📋 box-for</div><div class="cv"><strong>Formule i pravila</strong> — kompaktno, u mono-fontu, s komentarima. Ovo je tvoj "cheat sheet" za poglavlje. Svako poglavlje ima 2–3 box-for bloka.</div></div>
  <div class="cr"><div class="ck i">🔧 Interaktivni alat</div><div class="cv"><strong>Kalkulator/explorer</strong> — unesi vrijednosti i vidi rezultat odmah. Svako poglavlje ima specifičan alat (Unit Circle Explorer, Kalkulator kvadara, Limes Explorer...).</div></div>
  <div class="cr"><div class="ck a">🔢 cmp tablica</div><div class="cv"><strong>Usporedna tablica</strong> — dva koncepta jedan pored drugog. Npr. permutacije vs kombinacije, sinus vs kosinus. Za brzo uočavanje razlike.</div></div>
  <div class="cr"><div class="ck a">🧠 box-men</div><div class="cv"><strong>Mentalni model</strong> — "pravi" način razmišljanja o konceptu, ne mehaničko pamćenje formule. Često najkorisniji dio za razumijevanje.</div></div>
  <div class="cr"><div class="ck v">👣 Step reveal</div><div class="cv"><strong>Korak po korak rješenje</strong> — klikni "Sljedeći korak" i gledaj kako se zadatak rješava. Na kraju možeš isprobati sličan zadatak sam (Try-It).</div></div>
  <div class="cr"><div class="ck v">🐛 Bug finder</div><div class="cv"><strong>Prepoznaj grešku</strong> — tipična studentska greška prikazana kao zadatak. Pronađi što je pogrešno. Ovo je najefikasniji trening za ispit.</div></div>
  <div class="cr"><div class="ck r">✅ ICP provjera</div><div class="cv"><strong>Inline Check Point</strong> — 3 brza pitanja nakon svake sekcije. Odmah vidiš jesi li razumio. Ako griješiš → objašnjenje zašto.</div></div>
</div>

<!-- VJEŽBAJ TAB -->
<div class="slbl">// što ćeš naći u "Vježbaj" tabu</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:24px">
  <div style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px">
    <div style="font-family:var(--mono);font-size:9px;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">🎯 Rapid Drill</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.8;font-family:var(--mono)">12 tvrdnji — Točno ili Netočno? Brz refleks, odmah feedback s objašnjenjem. Pogodan za zagrijavanje.</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px">
    <div style="font-family:var(--mono);font-size:9px;color:var(--cyan);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">📊 NCVVO Live Stat</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.8;font-family:var(--mono)">4 stvarna zadatka s ispita. Dok rješavaš quiz, live statistika pokazuje koliko % odgovaraš točno po temi.</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px">
    <div style="font-family:var(--mono);font-size:9px;color:var(--amber);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">📝 Quiz — 12 pitanja</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.8;font-family:var(--mono)">Višestruki izbor. Za svaki netočan odgovor — mini-proof koji pokazuje točan put. Target: <span class="frac"><span class="num">10</span><span class="den">12</span></span>.</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px">
    <div style="font-family:var(--mono);font-size:9px;color:var(--green);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">✏️ Fill-in-the-blank</div>
    <div style="font-size:12px;color:var(--t2);line-height:1.8;font-family:var(--mono)">4 zadatka — upiši odgovor sam, bez opcija. Najtočniji test stvarnog znanja. Kalkulator nije dozvoljen.</div>
  </div>
</div>

<!-- MODI VJEZBANJA -->
<div class="slbl">// 3 moda vježbanja u quizu</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:24px">
  <div style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;text-align:center">
    <div style="font-size:26px;margin-bottom:8px">📖</div>
    <div style="font-size:12px;font-weight:700;color:var(--t1);margin-bottom:6px">Standardni</div>
    <div style="font-size:11px;color:var(--t2);font-family:var(--mono);line-height:1.6">Bez tajmera. S objašnjenjima odmah. Za učenje.</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--bd-a);border-radius:var(--r3);padding:16px;text-align:center">
    <div style="font-size:26px;margin-bottom:8px">⏱</div>
    <div style="font-size:12px;font-weight:700;color:var(--amber);margin-bottom:6px">Ispitni</div>
    <div style="font-size:11px;color:var(--t2);font-family:var(--mono);line-height:1.6">90 sek po pitanju. Kao NCVVO. Za pripremu ispitnog pritiska.</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--bd-r);border-radius:var(--r3);padding:16px;text-align:center">
    <div style="font-size:26px;margin-bottom:8px">⚡</div>
    <div style="font-size:12px;font-weight:700;color:var(--red);margin-bottom:6px">Blitz</div>
    <div style="font-size:11px;color:var(--t2);font-family:var(--mono);line-height:1.6">30 sek po pitanju. Maksimalni pritisak. Za rutinirane.</div>
  </div>
</div>

<!-- NAPREDAK I ADAPTIVNI SUSTAV -->
<div class="slbl" style="margin-top:28px">// minimalni paket za prolaz (~50 bodova = dovoljan)</div>
<div class="box-warn" style="margin-bottom:12px">
  <span class="bw-ico">🎯</span>
  <div class="bw-body">
    <div class="bw-title">5 TEMA KOJE NOSE ~50% BODOVA NA A RAZINI</div>
    <div class="bw-txt">Ne moraš naučiti sve — ovih 5 tema pokriva ~50 bodova. Ako ih savladaš, već si na prolasku. Sve ostalo je bonus koji diže ocjenu na 3, 4 ili 5.</div>
  </div>
</div>
<div class="con" style="margin-bottom:22px">
  <div class="cr"><div class="ck b">📐 P04 Jednadžbe i nejednadžbe</div><div class="cv">Kvadratna formula x=(−b±√D)/2a, |x|, sustavi. ~12 bodova. <strong>Temelj za sve ostale teme</strong> — bez ovoga nema ničega.</div></div>
  <div class="cr"><div class="ck c">📈 P08 Eksponencijalne i log jednadžbe</div><div class="cv">aˣ=b → x=log_a(b), pravila log. ~10 bodova. Često u C-tipu. Kalkulator ne vrijedi za e i ln!</div></div>
  <div class="cr"><div class="ck i">🔺 P09 Trigonometrija — egzaktne vrijednosti</div><div class="cv">sin/cos/tan za 30°,45°,60°. Jednadžbe sin(x)=a. ~10 bodova. <strong>Bez kalkulatora</strong> — nauči tablicu!</div></div>
  <div class="cr"><div class="ck a">f′ P17 Derivacije — pravila i ekstremi</div><div class="cv">Potencija, lanac, tangenta, min/max. ~10 bodova. Tablica predznaka f′ = ključni algoritam.</div></div>
  <div class="cr"><div class="ck v">∫ P18 Integrali — neodređeni i određeni</div><div class="cv">Tablica integrala, Newton-Leibniz, površina. ~10 bodova. Zamka: zaboraviti +C ili krivo odrediti granice.</div></div>
  <div class="cr"><div class="ck r">⚠ Realna statistika NCVVO</div><div class="cv">Svake godine ~30% maturanata A razine ne savlada ni ovu osnovu. Savladaš li ovih 5 tema → već si bolji od trećine pristupnika! Ostatak je strategija i praksa.</div></div>
</div>

<div class="slbl">// napredak i pametni sustav</div>
<div class="con" style="margin-bottom:24px">
  <div class="cr"><div class="ck b">📈 Progress bar</div><div class="cv">Svaka skripta ima traku napretka (gore lijevo). Raste kako dovršavaš ICP provjere, drill i quiz. Vizualni motivator.</div></div>
  <div class="cr"><div class="ck c">🎯 Adaptive banner</div><div class="cv">Ako dvaput pogriješiš istu temu u quizu, pojavi se plavi banner s prijedlogom što ponovi. Sustav pamti tvoje slabe točke po temi.</div></div>
  <div class="cr"><div class="ck i">🔗 Connect-next</div><div class="cv">Na kraju svakog poglavlja — 4 kartice koje pokazuju gdje ćeš temu koristiti u kasnijim poglavljima. Pomaže u razumijevanju cjeline.</div></div>
  <div class="cr"><div class="ck a">✅ Checkpoint</div><div class="cv">5 stavki koje trebaš potvrditi klikom. Samo za samoprocjenu — nisi obavezan, ali pomaže da ne preskočiš ništa važno.</div></div>
  <div class="cr"><div class="ck v">🔁 Sesija se pamti</div><div class="cv">Tab koji si zadnji gledao pamti se (sessionStorage). Ako osvježiš stranicu, ostaneš na istom tabu — ne moraš klikati opet.</div></div>
</div>

<!-- PREPORUCENI WORKFLOW -->
<div class="slbl">// preporučeni workflow za svako poglavlje</div>
<div class="box-for"><span class="box-for-lbl">OPTIMALNI REDOSLIJED — 60 minuta po poglavlju</span>
  <span class="val">1. ⚡ 2 min tab</span> <span class="cmt">— 3 minute. Brzi pregled, vidi o čemu se radi</span><br>
  <span class="val">2. 📐 Uči → sekcija 01</span> <span class="cmt">— čitaj box-int, box-for, isprobaj alat, klikni kroz step-reveal</span><br>
  <span class="val">3. ICP provjera sekcije 01</span> <span class="cmt">— 3 pitanja. Ako griješiš → vrati se i pročitaj box-men</span><br>
  <span class="val">4. Ponovi za sekcije 02 i 03</span> <span class="cmt">— isti proces</span><br>
  <span class="val">5. 🧠 Vježbaj → Rapid Drill</span> <span class="cmt">— 12 brze tvrdnje za zagrijavanje</span><br>
  <span class="val">6. Quiz — Standardni mod</span> <span class="cmt">— 12 pitanja. Pročitaj svaki mini-proof za netočne</span><br>
  <span class="val">7. Fill-in-the-blank</span> <span class="cmt">— 4 zadatka bez opcija. Pravi test</span><br>
  <span class="cmt">Idući dan: ponovi samo 2 min tab i odradi Ispitni mod quiza. Spaced repetition u praksi!</span>
</div>

<!-- CESTI PROBLEMI -->
<div class="slbl">// česti problemi i rješenja</div>
<div id="faq-list" style="background:var(--card);border:1px solid var(--bdm);border-radius:var(--r3);overflow:hidden;margin-bottom:24px"></div>

<!-- CTA -->
<div style="background:linear-gradient(135deg,var(--dim-b),var(--dim-c));border:1px solid var(--bd-b);border-radius:var(--r3);padding:24px;margin-bottom:24px;text-align:center">
  <div style="font-size:18px;font-weight:800;color:var(--t1);margin-bottom:8px">Spreman si za početak!</div>
  <div style="font-size:13px;color:var(--t2);font-family:var(--mono);margin-bottom:20px">Preporučamo: kreni s P00B da vidiš što te čeka na ispitu, pa na P01.</div>
  <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
    <button onclick="navigateChapter('p00b')" class="nb primary">Što te čeka na Maturi →</button>
    <button onclick="navigateChapter('p01')" class="nb">Počni s P01 →</button>
  </div>
</div>

<div style="height:40px"></div>
</div></main>
</div>`;

const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show',s.classList.contains('mobile-open'));}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}

/* DEMO WALKTHROUGH */
var demoData=[
  {
    title:'box-int — Intuitivno objašnjenje',
    color:'var(--blue)',
    html:'<div style="background:var(--dim-b);border:1px solid var(--bd-b);border-radius:var(--r3);padding:16px;margin-bottom:12px"><div style="font-family:var(--mono);font-size:9px;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">INTUITIVNO — što je derivacija?</div><div style="font-size:13px;color:var(--t2);line-height:1.7">Derivacija opisuje <em>brzinu promjene</em> funkcije — koliko se brzo f(x) mijenja kad se x malo promijeni.<br><br>Zamislite auto: f(x) = položaj, f\\'(x) = brzina. Druga derivacija = ubrzanje.<br><br><strong>Geometrijski: f\\'(a) je nagib tangente na graf funkcije f u točki x=a.</strong></div></div><div style="font-size:11px;color:var(--t3);font-family:var(--mono)">→ Svaka sekcija počinje ovako — analogijom koja daje smisao formulama koje slijede.</div>'
  },
  {
    title:'box-for — Formule i pravila',
    color:'var(--indigo)',
    html:'<div style="background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;margin-bottom:12px"><div style="font-family:var(--mono);font-size:9px;color:var(--indigo);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">OSNOVNA PRAVILA DERIVIRANJA</div><div style="font-family:var(--mono);font-size:13px;line-height:2.2;color:var(--t2)"><span style="color:var(--cyan)">(xⁿ)\\' = n·xⁿ⁻¹</span> <span style="color:var(--t3)">— potencija</span><br><span style="color:var(--cyan)">(sin x)\\' = cos x</span> · <span style="color:var(--cyan)">(cos x)\\' = −sin x</span><br><span style="color:var(--cyan)">(eˣ)\\' = eˣ</span> · <span style="color:var(--cyan)">(ln x)\\' = 1/x</span><br><span style="color:var(--t3)">Pravilo lanca: (f(g(x)))\\' = f\\'(g(x))·g\\'(x)</span></div></div><div style="font-size:11px;color:var(--t3);font-family:var(--mono)">→ Ovako izgledaju formule — kompaktno, boji kodom, s komentarima. Ovo je tvoj cheat sheet.</div>'
  },
  {
    title:'Step reveal — Korak po korak',
    color:'var(--cyan)',
    html:'<div style="background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;margin-bottom:12px"><div style="font-size:12px;font-weight:700;color:var(--t1);margin-bottom:4px">Zadatak: Deriviraj f(x) = x³ + 2x</div><div style="display:flex;flex-direction:column;gap:8px;margin-top:12px"><div style="display:flex;gap:10px;padding:10px;background:var(--card);border-radius:var(--r2)"><div style="width:22px;height:22px;background:var(--blue);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#060910;flex-shrink:0">1</div><div style="font-size:12px;color:var(--t2);font-family:var(--mono)">Primijeni pravilo potencije na x³: (x³)\\' = 3x²</div></div><div style="display:flex;gap:10px;padding:10px;background:var(--card);border-radius:var(--r2)"><div style="width:22px;height:22px;background:var(--cyan);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#060910;flex-shrink:0">2</div><div style="font-size:12px;color:var(--t2);font-family:var(--mono)">Primijeni na 2x: (2x)\\' = 2·1·x⁰ = 2</div></div></div><div style="margin-top:10px;padding:10px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);font-family:var(--mono);font-size:12px;color:var(--green)">f\\'(x) = 3x² + 2 ✓</div></div><div style="font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:10px">→ U skripti klikneš "Sljedeći korak →" i gledaš jedan po jedan. Na kraju možeš isprobati sam.</div>'
  },
  {
    title:'ICP — Inline Check Point',
    color:'var(--amber)',
    html:'<div style="background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;margin-bottom:12px"><div style="display:flex;justify-content:space-between;margin-bottom:12px"><span style="font-family:var(--mono);font-size:12px;font-weight:700;color:var(--t1)">Provjeri razumijevanje</span><span style="font-family:var(--mono);font-size:11px;color:var(--t3)">0 / 3</span></div><div style="font-size:13px;font-weight:700;color:var(--t1);margin-bottom:10px">(x²)\\' = ?</div><div style="display:flex;flex-direction:column;gap:6px"><div style="padding:8px 12px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);font-size:12px;color:var(--green);font-family:var(--mono)">✓ 2x &nbsp;← točno!</div><div style="padding:8px 12px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:12px;color:var(--t3);font-family:var(--mono)">x²</div><div style="padding:8px 12px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);font-size:12px;color:var(--t3);font-family:var(--mono)">2</div></div></div><div style="font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:10px">→ 3 pitanja nakon svake sekcije. Odmah vidiš jesi li razumio. Ako griješiš — dobijež objašnjenje zašto.</div>'
  },
  {
    title:'Bug finder — Prepoznaj grešku',
    color:'var(--red)',
    html:'<div style="background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;margin-bottom:12px"><div style="font-family:var(--mono);font-size:9px;color:var(--red);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:10px">🐛 prepoznaj grešku — derivacije</div><div style="font-size:12.5px;color:var(--t2);margin-bottom:10px;font-family:var(--mono)">Učenik derivira f(x) = (2x+1)³:</div><div style="padding:10px 14px;background:var(--dim-r);border:1px solid var(--bd-r);border-radius:var(--r2);font-family:var(--mono);font-size:13px;color:var(--t1);margin-bottom:10px">f\\'(x) = 3(2x+1)² <span style="color:var(--red)">× (greška!)</span></div><div style="display:flex;flex-direction:column;gap:6px"><div style="padding:8px 12px;background:var(--dim-g);border:1px solid var(--bd-g);border-radius:var(--r2);font-size:12px;color:var(--green);font-family:var(--mono)">B) Greška — nedostaje pravilo lanca! Unutarnja derivacija (2x+1) daje faktor ·2, pa je 3(2x+1)²·2 = 6(2x+1)²</div></div></div><div style="font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:10px">→ Svaka sekcija ima ovakav zadatak. Najefikasniji trening — puno grešaka na ispitu su točno ovakve!</div>'
  },
  {
    title:'Interaktivni alati',
    color:'var(--green)',
    html:'<div style="background:var(--ele);border:1px solid var(--bdm);border-radius:var(--r3);padding:16px;margin-bottom:12px"><div style="font-family:var(--mono);font-size:9px;color:var(--green);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:12px">// primjeri interaktivnih alata</div><div style="display:flex;flex-direction:column;gap:8px;font-family:var(--mono);font-size:12px;color:var(--t2)"><div style="padding:8px 12px;background:var(--card);border-radius:var(--r2)">⚪ <strong style="color:var(--blue)">P09 · Kružnica Explorer</strong> — klikni kut (0°–270°), vidiš sin/cos/tan u real-time</div><div style="padding:8px 12px;background:var(--card);border-radius:var(--r2)">⚪ <strong style="color:var(--cyan)">P10 · Kalkulator udaljenosti</strong> — unesi pravac i točku → dobijš udaljenost s koracima</div><div style="padding:8px 12px;background:var(--card);border-radius:var(--r2)">⚪ <strong style="color:var(--amber)">P11 · Kalkulator rotacijskih tijela</strong> — prebaci između valjka/stošca/sfere</div><div style="padding:8px 12px;background:var(--card);border-radius:var(--r2)">⚪ <strong style="color:var(--green)">P14 · Geometrijski Explorer</strong> — unesi a₁, q, n → niz + Sₙ + S∞</div><div style="padding:8px 12px;background:var(--card);border-radius:var(--r2)">⚪ <strong style="color:var(--indigo)">P16 · Limes Explorer</strong> — 4 tipa: 0/0, ∞/∞, konjugat, x→∞</div></div></div><div style="font-size:11px;color:var(--t3);font-family:var(--mono);margin-top:10px">→ Svako poglavlje ima 1–2 specifična alata. Probaj ih aktivno — ne samo čitaj!</div>'
  }
];
var demoIdx=0;
function setDemo(i,btn){
  demoIdx=i;
  document.querySelectorAll('[id^="d"]').forEach(function(b){
    b.style.background='transparent';b.style.borderBottomColor='transparent';b.style.color='var(--t3)';
  });
  btn.style.background='var(--dim-b)';btn.style.borderBottomColor='var(--blue)';btn.style.color='var(--blue)';
  renderDemo();
}
function renderDemo(){
  var d=demoData[demoIdx];
  document.getElementById('demo-body').innerHTML=
    '<div style="font-size:12px;font-weight:700;color:'+d.color+';font-family:var(--mono);margin-bottom:14px">// '+d.title+'</div>'+d.html;
}
renderDemo();

/* FAQ */
var faqs=[
  {q:'Skripta se ne otvara / bijela stranica',a:'Otvori datoteku direktno u pregledniku (dvojni klik na .html datoteku). Chrome ili Firefox su preporučeni. Ne treba internet za rad skripti.'},
  {q:'Quiz pitanja se ne prikazuju',a:'Klikni na "Vježbaj" tab i pričekaj sekundu. Pitanja se generiraju dinamički — prvi put može trebati trenutak.'},
  {q:'Sidebar se ne prikazuje na mobitelu',a:'Klikni ☰ ikonicu gore lijevo. Na manjim ekranima sidebar je sakriven — otvori ga kad trebaš navigirati.'},
  {q:'Izgubio/la sam napredak u quizu',a:'Svaki quiz se resetira pri osvježavanju stranice — to je namjerno. Preporučamo jedan quiz po sesiji.'},
  {q:'Koji preglednik koristiti?',a:'Chrome, Firefox ili Edge. Safari u pravilu radi, ali audio zvučni efekti mogu biti tiši. Internet Explorer nije podržan.'},
  {q:'Mogu li raditi offline?',a:'Da — sve skripte rade bez interneta. Jedino što treba internet su Google Fonts (tipografija) — bez interneta font je systemu zadani, ali sve ostalo radi.'},
  {q:'Gdje su rješenja za sve zadatke?',a:'Svako pitanje ima objašnjenje odmah nakon što odgovoriš — klikni opciju i odmah vidiš je li točno i zašto. Fill-in-the-blank isto ima feedback.'},
];
(function(){
  var h='';
  faqs.forEach(function(f,i){
    h+='<div onclick="toggleFaq('+i+')" style="border-bottom:1px solid var(--bd);cursor:pointer">'
      +'<div style="display:flex;justify-content:space-between;align-items:center;padding:13px 17px">'
      +'<span style="font-size:13px;font-weight:600;color:var(--t1)">'+f.q+'</span>'
      +'<span id="faq-ico-'+i+'" style="font-family:var(--mono);color:var(--t3);font-size:14px">+</span>'
      +'</div>'
      +'<div id="faq-body-'+i+'" style="display:none;padding:0 17px 14px;font-size:12.5px;color:var(--t2);font-family:var(--mono);line-height:1.7">'+f.a+'</div>'
      +'</div>';
  });
  document.getElementById('faq-list').innerHTML=h;
})();
function toggleFaq(i){
  var body=document.getElementById('faq-body-'+i);
  var ico=document.getElementById('faq-ico-'+i);
  var open=body.style.display==='none';
  body.style.display=open?'block':'none';
  ico.textContent=open?'−':'+';
  ico.style.color=open?'var(--blue)':'var(--t3)';
}

/* ── CONTEXTUAL FROM-BANNER ── */
(function(){
  if (typeof window === 'undefined') return;
  try{
    var params=new URLSearchParams(window.location.search);
    var from=params.get('from');
    if(!from)return;
    var names={"P01": "Skupovi i Brojevi", "P02": "Potencije i Korijeni", "P03": "Polinomi", "P04": "Jednadžbe", "P06": "Funkcija — pojam", "P07": "Kvadratna funkcija", "P08": "Eksponencijalna i Log.", "P09": "Trigonometrija", "P10": "Analitička geometrija", "P11": "Geometrija prostora", "P14": "Nizovi", "P15": "Kombinatorika", "P16": "Granice funkcija", "P17": "Derivacije", "P18": "Integrali", "P19": "Složeni zadaci", "P20": "Sistematizacija", "P21": "Vjerojatnost"};
    var name=names[from]||from;
    var banner=document.createElement('div');
    banner.className='ctx-banner';
    banner.id='ctx-banner';
    banner.innerHTML='<span>← Dolaziš iz <strong>'+from+' · '+name+'</strong></span>'
      +'<a href="Maturiraj_MatA_'+from+'_FINAL.html" style="color:var(--cyan);text-decoration:none;font-weight:700">← Vrati se</a>'
      +'<span class="ctx-banner-close" onclick="document.getElementById(\\'ctx-banner\\').style.display=\\'none\\'">×</span>';
    document.body.appendChild(banner);
    banner.style.display='flex';
    setTimeout(function(){if(banner)banner.style.opacity='0';setTimeout(function(){if(banner)banner.style.display='none';},400);},6000);
  }catch(e){}
})();`;

const meta = {
  id: 'P00A',
  pidLower: 'p00a',
  title: "Maturiraj.hr \u2014 Mat A \u00b7 P00A \u00b7 Kako koristiti Maturiraj skripte",
  subject: 'matematika-a',
  lsKey: 'maturiraj_p00a_prog',
};

let _styleEl = null;
let _mounted = false;
let _scriptFn = null;

/**
 * Montira poglavlje u zadani container element.
 * @param {HTMLElement} container
 * @param {object} [options]
 * @param {string} [options.fromChapter] - kontekstualni bridging (npr. 'P08')
 */
function mount(container, options = {}) {
  if (_mounted) unmount(container);

  // Inject CSS u <head>
  _styleEl = document.createElement('style');
  _styleEl.setAttribute('data-chapter', 'p00a');
  _styleEl.textContent = css;
  document.head.appendChild(_styleEl);

  // Inject HTML u container
  container.innerHTML = html;

  // Postavi from= parametar za kontekstualni bridging
  if (options.fromChapter) {
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('from', options.fromChapter);
      window.history.replaceState(null, '', url.toString());
    } catch(e) {}
  }

  // Izvršavamo JS
  try {
    _scriptFn = new Function(js);
    _scriptFn();
  } catch(e) {
    console.error('[P00A] Script error:', e);
  }

  _mounted = true;
}

/**
 * Demontira poglavlje — čisti CSS i HTML.
 * @param {HTMLElement} container
 */
function unmount(container) {
  // Ukloni CSS
  const existing = document.querySelector('style[data-chapter="p00a"]');
  if (existing) existing.remove();
  _styleEl = null;

  // Čisti container
  if (container) container.innerHTML = '';

  _mounted = false;
}

/**
 * Vraća trenutni progress (0–100) iz localStorage.
 * @returns {number}
 */
function getProgress() {
  try {
    return parseInt(localStorage.getItem('maturiraj_p00a_prog') || '0');
  } catch(e) {
    return 0;
  }
}

/**
 * Sprema progress u localStorage.
 * Korisno za Supabase sync — pozovi ovo iz postMessage listenera.
 * @param {number} pct
 */
function setProgress(pct) {
  try {
    localStorage.setItem('maturiraj_p00a_prog', String(pct));
  } catch(e) {}
}

// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\');}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P00A \u00b7 Kako koristiti Maturiraj skripte</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default { mount, unmount, getProgress, setProgress, meta, css, html };
export { mount, unmount, getProgress, setProgress, meta };