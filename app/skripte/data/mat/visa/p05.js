/**
 * Maturiraj.hr — Mat A · P10
 * Maturiraj.hr — Mat A · P10 · Analitička Geometrija
 * ES6 module v3 — s kompletnim CSS-om, razlomcima, responsive, JS bugfix
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
/* ── P04 SPECIFIC ── */
.eq-solver,.disc-wrap{background:var(--card);border:1px solid var(--bd-b);border-radius:var(--r4);overflow:hidden;margin:16px 0}
.eq-s-head,.disc-head{padding:11px 17px;border-bottom:1px solid var(--bd)}
.eq-s-title,.disc-title{font-family:var(--mono);font-size:10.5px;color:var(--blue);font-weight:700;letter-spacing:1px;text-transform:uppercase}
.eq-s-body,.disc-body{padding:16px 17px}
.eq-s-row,.disc-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:12px}
.eq-s-lbl,.disc-lbl{font-family:var(--mono);font-size:13px;color:var(--t2)}
.eq-s-in,.disc-in{font-family:var(--mono);font-size:15px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);color:var(--t1);padding:7px 10px;outline:none;width:65px;text-align:center;transition:border-color .15s;-webkit-appearance:none}
.eq-s-in:focus,.disc-in:focus{border-color:var(--blue)}
.eq-s-btn,.disc-btn{padding:7px 16px;border:1px solid var(--bd-b);background:var(--dim-b);color:var(--blue);border-radius:var(--r2);font-family:var(--mono);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s}
.eq-s-btn:hover,.disc-btn:hover{background:var(--blue);color:#060910}
.eq-s-result,.disc-result{font-family:var(--mono);font-size:14px;color:var(--t2);text-align:center;min-height:24px;line-height:1.8}
.eq-s-result strong,.disc-result strong{color:var(--cyan);font-size:18px}

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
}
.si-r{background:var(--dim-r);color:var(--red)}`;
const _bodyHTML = `<div class="shell">
<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()"><span></span><span></span><span></span></div>
<div class="sb-overlay" id="overlay" onclick="closeSidebar()"></div>
<nav class="sidebar" id="sidebar">
  <div class="sb-brand"><div class="sb-logo"><svg viewBox="0 0 14 14" fill="none"><path d="M2 7h10M7 2l5 5-5 5" stroke="#060910" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div><div class="sb-name">Maturiraj.hr</div><div class="sb-sub">MAT A razina</div></div></div>
  <div class="sb-prog-wrap"><div class="sb-prog-label"><span>napredak</span><span id="prog-pct">0%</span></div><div class="sb-prog-track"><div class="sb-prog-bar" id="prog-bar" style="width:0%"></div></div></div>
  <button class="sb-item" onclick="backToList()" style="padding:7px 14px;border:none;border-bottom:1px solid var(--bd);font-size:11px;color:var(--t3);font-family:var(--mono);letter-spacing:.3px;background:transparent;cursor:pointer;width:100%;text-align:left">← Sva poglavlja</button>
  <div class="sb-lbl">// Uvod</div>
  <button class="sb-item" onclick="navigateChapter('p00a')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00A · Kako koristiti skripte</button>
  <button class="sb-item" onclick="navigateChapter('p00b')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>00B · Što te čeka na Maturi</button>
  <div class="sb-lbl">// Temelji</div>
  <button class="sb-item" onclick="navigateChapter('p01')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>01 · Skupovi, Brojevi, |x|</button>
  <button class="sb-item" onclick="navigateChapter('p02')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>02 · Potencije i korijeni</button>
  <button class="sb-item" onclick="navigateChapter('p03')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>03 · Polinomi i izrazi</button>
  <button class="sb-item" onclick="navigateChapter('p04')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>04 · Jednadžbe i nejednadžbe</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>05 · Kompleksni brojevi</button>
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
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">kompleksni-brojevi-algebarski-trigonometrijski-oblik</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>
<!-- L0 -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 05 · A razina · algebra</div>
    <h1 class="hero-title">Kompleksni<br><span>Brojevi</span></h1>
    <p class="hero-sub">Imaginarna jedinica i, algebarski i trigonometrijski oblik, konjugat i modul, De Moivreova formula i korijeni</p>
    <div class="hero-meta"><span class="hchip b">3 teme</span><span class="hchip a">⭐ Redovito na NCVVO ispitu</span><span class="hchip c">~40 min</span></div>
    <div class="pt"><div class="pb" style="width:53%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Imaginarna jedinica i</span><span class="pill p-c">Algebarski oblik</span>
    <span class="pill p-i">Konjugat i dijeljenje</span><span class="pill p-a">Modul i argument</span>
    <span class="pill p-v">Trigonometrijski oblik</span><span class="pill p-r">De Moivre i korijeni</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Kompleksni brojevi proširuju realne brojeve uvođenjem imaginarne jedinice i, za koju vrijedi i²=−1. Time svaka kvadratna jednadžba dobiva rješenje.<br><br>Svaki kompleksni broj z=a+bi je točka (a,b) u Gaussovoj ravnini — pa ima modul (udaljenost od ishodišta) i argument (kut). To vodi na trigonometrijski oblik i De Moivreovu formulu.<br><br><strong>Na maturi A razine: operacije s kompleksnim brojevima, konjugat, modul i kompleksna rješenja kvadratne jednadžbe pojavljuju se redovito.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">i²=−1</div><div class="sc-name">Imaginarna jedinica</div><div class="sc-desc">i=√(−1), i²=−1. Potencije se vrte u ciklusu duljine 4: i, −1, −i, 1.</div></div>
    <div class="sc"><div class="sc-ico si-c">z=a+bi</div><div class="sc-name">Algebarski oblik</div><div class="sc-desc">Re z=a, Im z=b. Zbrajanje i oduzimanje idu po komponentama.</div></div>
    <div class="sc"><div class="sc-ico si-i">(a+bi)(c+di)</div><div class="sc-name">Množenje</div><div class="sc-desc">Množi kao binome, pa uvrsti i²=−1: (ac−bd)+(ad+bc)i.</div></div>
    <div class="sc"><div class="sc-ico si-a">z̄, |z|</div><div class="sc-name">Konjugat i modul</div><div class="sc-desc">z̄=a−bi, |z|=√(a²+b²). Vrijedi z·z̄=|z|²=a²+b² (realan broj!).</div></div>
    <div class="sc"><div class="sc-ico si-v">r(cosφ+i sinφ)</div><div class="sc-name">Trigonometrijski oblik</div><div class="sc-desc">r=|z|, tanφ=b/a. Idealno za potenciranje i korjenovanje.</div></div>
    <div class="sc"><div class="sc-ico si-r">zⁿ=rⁿ…</div><div class="sc-name">De Moivre</div><div class="sc-desc">zⁿ=rⁿ(cos nφ+i sin nφ). Kompleksni broj ima n različitih n-tih korijena.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Imaginarna jedinica</div><div class="cv">i²=−1, i=√(−1). Potencije: i¹=i, i²=−1, i³=−i, i⁴=1 (ciklus 4).</div></div>
    <div class="cr"><div class="ck b">Algebarski oblik</div><div class="cv">z=a+bi, Re z=a, Im z=b. Zbrajanje/oduzimanje po komponentama.</div></div>
    <div class="cr"><div class="ck c">Množenje</div><div class="cv">(a+bi)(c+di)=(ac−bd)+(ad+bc)i — množi kao binome, pa i²=−1.</div></div>
    <div class="cr"><div class="ck i">Konjugat</div><div class="cv">z̄=a−bi (predznak Im se mijenja). z·z̄=a²+b²=|z|² — realan broj.</div></div>
    <div class="cr"><div class="ck a">Modul</div><div class="cv">|z|=√(a²+b²) — udaljenost točke (a,b) od ishodišta u Gaussovoj ravnini.</div></div>
    <div class="cr"><div class="ck v">Dijeljenje</div><div class="cv">Proširi brojnik i nazivnik konjugatom nazivnika da nazivnik postane realan.</div></div>
    <div class="cr"><div class="ck r">Trigonometrijski oblik</div><div class="cv">z=r(cosφ+i sinφ), r=|z|, tanφ=b/a. De Moivre: zⁿ=rⁿ(cos nφ+i sin nφ).</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">i²=−1, NE +1! I: modul je √(a²+b²), ne a+b. Konjugat mijenja samo predznak Im.</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p04')" class="nb">← P04 · Jednadžbe i nejednadžbe</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- L1 -->
<div class="layer" id="l1">
  <!-- 01 -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · ALGEBARSKI OBLIK I OPERACIJE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — broj kojemu je kvadrat negativan</div>
    <div class="box-int-txt">Jednadžba x²=−1 nema realno rješenje, pa uvodimo novi broj — imaginarnu jedinicu i, za koju je <strong>i²=−1</strong>.<br><br>Kompleksni broj je z=a+bi, gdje je a realni dio (Re z), a b imaginarni dio (Im z). Zbrajamo i oduzimamo po komponentama, a množimo kao binome — samo na kraju uvrstimo i²=−1.<br><br><strong>Potencije od i vrte se u ciklusu duljine 4: i¹=i, i²=−1, i³=−i, i⁴=1, pa opet ispočetka.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">ALGEBARSKI OBLIK I OPERACIJE</span>
    <span class="val">z = a + bi</span> <span class="cmt">— Re z = a, Im z = b</span><br>
    <span class="val">(a+bi) ± (c+di) = (a±c) + (b±d)i</span> <span class="cmt">— po komponentama</span><br>
    <span class="val">(a+bi)(c+di) = (ac−bd) + (ad+bc)i</span> <span class="cmt">— kao binome, pa i²=−1</span>
  </div>
  <div class="box-for"><span class="box-for-lbl">POTENCIJE IMAGINARNE JEDINICE</span>
    <span class="val">i¹=i, &nbsp; i²=−1, &nbsp; i³=−i, &nbsp; i⁴=1</span> <span class="cmt">— ciklus duljine 4</span><br>
    <span class="val">iⁿ ovisi samo o ostatku n pri dijeljenju s 4</span> <span class="cmt">— npr. i²²=i²=−1</span>
  </div>
  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Zbrajanje / oduzimanje</div><div class="cmp-body">
      <div class="cmp-row">Po komponentama</div>
      <div class="cmp-row">Re + Re, Im + Im</div>
      <div class="cmp-row">(2+3i)+(1−i)=3+2i</div>
      <div class="cmp-row">Najjednostavnije</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Množenje</div><div class="cmp-body">
      <div class="cmp-row">Kao binome (svaki sa svakim)</div>
      <div class="cmp-row">Uvrsti i²=−1</div>
      <div class="cmp-row">(ac−bd)+(ad+bc)i</div>
      <div class="cmp-row">Pazi na predznak!</div>
    </div></div>
  </div>
  <div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator množenja — z₁=a+bi, z₂=c+di</span></div>
    <div class="disc-body">
      <div class="disc-row" style="flex-wrap:wrap;gap:6px">
        <span class="disc-lbl">a =</span><input class="disc-in" id="m-a" type="number" value="2" style="width:50px">
        <span class="disc-lbl">b =</span><input class="disc-in" id="m-b" type="number" value="1" style="width:50px">
        <span class="disc-lbl">c =</span><input class="disc-in" id="m-c" type="number" value="3" style="width:50px">
        <span class="disc-lbl">d =</span><input class="disc-in" id="m-d" type="number" value="-1" style="width:50px">
        <button class="disc-btn" onclick="calcMul()">Pomnoži →</button>
      </div>
      <div class="disc-result" id="m-result">Upiši koeficijente pa klikni Pomnoži</div>
    </div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — broj kao točka u ravnini</div>
    <div class="box-men-txt">Kompleksni broj z=a+bi prikazujemo kao točku (a,b) u Gaussovoj (kompleksnoj) ravnini: vodoravna os je realna, okomita imaginarna.<br>Zbrajanje je onda zbrajanje vektora (po komponentama).<br><strong>Množenje s i je rotacija za 90° oko ishodišta — zato i²=−1 (dva puta 90° = 180° = množenje s −1).</strong></div>
  </div>
  <div class="sr" id="sr1">
    <div class="sr-head"><div class="sr-title">Množenje kompleksnih brojeva — korak po korak</div><div class="sr-task">Izračunaj (3+2i)(1−4i).</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Pomnoži kao binome</div><div class="sr-txt">(3+2i)(1−4i) = 3 − 12i + 2i − 8i²</div></div></div></div>
      <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Uvrsti i²=−1</div><div class="sr-txt">−8i² = −8·(−1) = +8, pa = (3+8) + (−12+2)i</div></div></div></div>
      <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Sredi</div><div class="sr-txt">= <strong>11 − 10i</strong>
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Koliko je (1+i)(1−i)?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','2','ud1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — i²=−1, ne +1</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik množi (2+i)(2−i):</p>
    <div class="bug-task">(2+i)(2−i) = 4 − i² = <span class="wrong">4 − 1 = 3</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, i²=1 pa je 4−1=3</div>
      <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: i²=−1, pa 4−i²=4+1=5</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: rezultat je 4i</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: rezultat je 0</div>
    </div><div class="bug-expl" id="b1e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — algebarski oblik</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>i²=−1. z=a+bi (Re z=a, Im z=b).</li>
    <li class="b20-item"><div class="b20-dot"></div>Zbrajanje po komponentama; množenje kao binome pa i²=−1.</li>
    <li class="b20-item"><div class="b20-dot"></div>Potencije od i: ciklus i, −1, −i, 1 (po n mod 4).</li>
  </ul></div>
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — kvadriranje</div></div>
    <div class="combo-body">
      <div class="combo-task">Izračunaj (1+2i)².</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">(1+2i)² = 1² + 2·1·2i + (2i)² = 1 + 4i + 4i²</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">4i² = 4·(−1) = −4</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">= (1−4) + 4i = <strong>−3 + 4i</strong></div></div>
      </div>
      <div class="combo-ans">(1+2i)² = −3+4i. Kvadrat binoma (a+b)²=a²+2ab+b², uz (2i)²=−4.</div>
    </div>
  </div>
  <div class="inline-cp" id="icp1">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — algebarski oblik</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1"><div class="icp-q-text">Koliko je i²?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">−1</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">1</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">i</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">0</div>
      </div><div class="icp-fb" id="icp1q1fb"></div></div>
      <div class="icp-q" id="icp1q2"><div class="icp-q-text">(1+2i)+(3−i) =</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">4+i</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">4+3i</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">2+i</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">4−i</div>
      </div><div class="icp-fb" id="icp1q2fb"></div></div>
      <div class="icp-q" id="icp1q3"><div class="icp-q-text">(1+i)(1−i) =</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">2</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">0</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">2i</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">1+i²</div>
      </div><div class="icp-fb" id="icp1q3fb"></div></div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na modul i argument →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- 02 -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · KONJUGAT, MODUL I TRIGONOMETRIJSKI OBLIK</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — duljina i kut umjesto koordinata</div>
    <div class="box-int-txt">Konjugat z̄=a−bi je zrcalna slika preko realne osi. Ključno svojstvo: z·z̄=a²+b² je realan broj — to nam služi za <strong>dijeljenje</strong> (proširimo konjugatom nazivnika).<br><br>Modul |z|=√(a²+b²) je udaljenost točke (a,b) od ishodišta, a argument φ je kut prema pozitivnoj realnoj osi (tanφ=b/a).<br><br><strong>Time dobivamo trigonometrijski oblik z=r(cosφ+i sinφ), pogodan za potenciranje.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">KONJUGAT, MODUL, DIJELJENJE</span>
    <span class="val">z̄ = a − bi</span> <span class="cmt">— konjugirano kompleksni broj</span><br>
    <span class="val">|z| = √(a²+b²) &nbsp;·&nbsp; z·z̄ = |z|²</span> <span class="cmt">— modul; umnožak je realan</span><br>
    <span class="val">(a+bi)/(c+di) = (a+bi)(c−di)/(c²+d²)</span> <span class="cmt">— proširi konjugatom nazivnika</span>
  </div>
  <div class="box-for"><span class="box-for-lbl">TRIGONOMETRIJSKI OBLIK</span>
    <span class="val">r = |z| = √(a²+b²)</span> <span class="cmt">— modul</span><br>
    <span class="val">tanφ = b/a</span> <span class="cmt">— argument (pazi na kvadrant!)</span><br>
    <span class="val">z = r(cosφ + i sinφ)</span> <span class="cmt">— trigonometrijski (polarni) oblik</span>
  </div>
  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Algebarski oblik</div><div class="cmp-body">
      <div class="cmp-row">z = a + bi</div>
      <div class="cmp-row">Lako: zbrajanje, množenje</div>
      <div class="cmp-row">Koordinate (a,b)</div>
      <div class="cmp-row">Standard za operacije</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Trigonometrijski oblik</div><div class="cmp-body">
      <div class="cmp-row">z = r(cosφ+i sinφ)</div>
      <div class="cmp-row">Lako: potenciranje, korijeni</div>
      <div class="cmp-row">Modul r i kut φ</div>
      <div class="cmp-row">De Moivre</div>
    </div></div>
  </div>
  <div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator — modul, argument i konjugat broja z=a+bi</span></div>
    <div class="disc-body">
      <div class="disc-row" style="flex-wrap:wrap;gap:6px">
        <span class="disc-lbl">a =</span><input class="disc-in" id="cx-a" type="number" value="3" style="width:55px">
        <span class="disc-lbl">b =</span><input class="disc-in" id="cx-b" type="number" value="4" style="width:55px">
        <button class="disc-btn" onclick="calcCx()">Izračunaj →</button>
      </div>
      <div class="disc-result" id="cx-result">Upiši a i b pa klikni Izračunaj</div>
    </div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — dijeljenje "realizira" nazivnik</div>
    <div class="box-men-txt">Ne znamo dijeliti s a+bi izravno, ali znamo da je (c+di)(c−di)=c²+d² realan. Zato brojnik i nazivnik množimo konjugatom nazivnika — nazivnik postane realan, pa dijelimo običnim brojem.<br><strong>Isto kao racionalizacija nazivnika s korijenom (P02) — samo umjesto √ ovdje "smeta" i.</strong></div>
  </div>
  <div class="sr" id="sr2">
    <div class="sr-head"><div class="sr-title">Trigonometrijski oblik — korak po korak</div><div class="sr-task">Prikaži z=−1+i√3 u trigonometrijskom obliku.</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Modul</div><div class="sr-txt">r = √((−1)² + (√3)²) = √(1+3) = √4 = 2</div></div></div></div>
      <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Argument (pazi na kvadrant)</div><div class="sr-txt">Točka (−1, √3) je u 2. kvadrantu; tanφ=√3/(−1) → φ = 120°</div></div></div></div>
      <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Zapiši oblik</div><div class="sr-txt">z = <strong>2(cos120° + i sin120°)</strong>
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Koliki je modul |5+12i|?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="|z|=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','13','kru1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — modul nije a+b</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa modul broja 3+4i:</p>
    <div class="bug-task">|3+4i| = <span class="wrong">3 + 4 = 7</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, modul je zbroj dijelova</div>
      <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: |z|=√(3²+4²)=√25=5, ne 7</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: |z|=3·4=12</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: |z|=√(3+4)=√7</div>
    </div><div class="bug-expl" id="b2e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — konjugat i modul</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>z̄=a−bi · |z|=√(a²+b²) · z·z̄=|z|² (realan!).</li>
    <li class="b20-item"><div class="b20-dot"></div>Dijeljenje: proširi konjugatom nazivnika.</li>
    <li class="b20-item"><div class="b20-dot"></div>Trig oblik: z=r(cosφ+i sinφ), r=|z|, tanφ=b/a.</li>
  </ul></div>
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — dijeljenje</div></div>
    <div class="combo-body">
      <div class="combo-task">Izračunaj (3+i)/(2−i).</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Proširi konjugatom nazivnika (2+i): brojnik (3+i)(2+i), nazivnik (2−i)(2+i)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Brojnik: 6+3i+2i+i² = 6+5i−1 = 5+5i. &nbsp; Nazivnik: 4−i² = 5</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">= (5+5i)/5 = <strong>1 + i</strong></div></div>
      </div>
      <div class="combo-ans">(3+i)/(2−i) = 1+i. Konjugat nazivnika čini nazivnik realnim (c²+d²).</div>
    </div>
  </div>
  <div class="inline-cp" id="icp2">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — konjugat i modul</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1"><div class="icp-q-text">Konjugat broja 2−5i je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">2+5i</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">−2+5i</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">−2−5i</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">5−2i</div>
      </div><div class="icp-fb" id="icp2q1fb"></div></div>
      <div class="icp-q" id="icp2q2"><div class="icp-q-text">Modul broja 6+8i je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">10</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">14</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">√14</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">48</div>
      </div><div class="icp-fb" id="icp2q2fb"></div></div>
      <div class="icp-q" id="icp2q3"><div class="icp-q-text">Za z=3+i koliko je z·z̄?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">10</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">10i</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">8</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">9+i</div>
      </div><div class="icp-fb" id="icp2q3fb"></div></div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na De Moivrea →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- 03 -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · DE MOIVRE — POTENCIJE I KORIJENI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — potenciraj modul, množi kut</div>
    <div class="box-int-txt">U trigonometrijskom obliku potenciranje je lako: De Moivreova formula kaže da modul potenciramo, a kut množimo eksponentom.<br><br>Obrnuto, n-ti korijen ima n različitih vrijednosti — sve imaju modul ⁿ√r i raspoređene su ravnomjerno po kružnici (razmak 360°/n).<br><br><strong>Množenje dvaju kompleksnih brojeva: moduli se množe, a argumenti zbrajaju.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">DE MOIVRE — POTENCIJE I KORIJENI</span>
    <span class="val">zⁿ = rⁿ(cos nφ + i sin nφ)</span> <span class="cmt">— De Moivreova formula</span><br>
    <span class="val">iⁿ: ciklus i, −1, −i, 1</span> <span class="cmt">— ovisi o n mod 4</span><br>
    <span class="val">ⁿ√z: modul ⁿ√r, kutovi (φ+360°k)/n, k=0…n−1</span> <span class="cmt">— n različitih korijena</span>
  </div>
  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Potenciranje</div><div class="cmp-body">
      <div class="cmp-row">Modul → rⁿ</div>
      <div class="cmp-row">Kut → n·φ</div>
      <div class="cmp-row">Jedan rezultat</div>
      <div class="cmp-row">De Moivre</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Korjenovanje</div><div class="cmp-body">
      <div class="cmp-row">Modul → ⁿ√r</div>
      <div class="cmp-row">Kut → (φ+360°k)/n</div>
      <div class="cmp-row">n različitih korijena</div>
      <div class="cmp-row">Na kružnici, razmak 360°/n</div>
    </div></div>
  </div>
  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — množenje je rotacija + skaliranje</div>
    <div class="box-men-txt">Pomnožiti z s w znači: razvuci za faktor |w| (skaliranje) i zarotiraj za arg(w) (rotacija).<br>Zato je potenciranje zⁿ samo n-struka rotacija i n-struko skaliranje istog broja.<br><strong>Množenje s i (modul 1, kut 90°) je čista rotacija za 90° — bez promjene duljine.</strong></div>
  </div>
  <div class="sr" id="sr3">
    <div class="sr-head"><div class="sr-title">Potenciranje De Moivreom — korak po korak</div><div class="sr-task">Izračunaj (1+i)⁸.</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Trigonometrijski oblik</div><div class="sr-txt">1+i: r=√2, φ=45° → 1+i = √2(cos45° + i sin45°)</div></div></div></div>
      <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">De Moivre (n=8)</div><div class="sr-txt">(1+i)⁸ = (√2)⁸ (cos(8·45°) + i sin(8·45°)) = 16(cos360° + i sin360°)</div></div></div></div>
      <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Sredi</div><div class="sr-txt">cos360°=1, sin360°=0 → = <strong>16</strong>
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Koliko je i¹⁵?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','−i','tan1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
  </div>
  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — potencije od i</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa i⁶:</p>
    <div class="bug-task">i⁶ = <span class="wrong">i</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, i⁶ = i</div>
      <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: i⁶ = i⁴·i² = 1·(−1) = −1</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: i⁶ = 1</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: i⁶ = −i</div>
    </div><div class="bug-expl" id="b3e"></div>
  </div></div>
  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — De Moivre</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>zⁿ=rⁿ(cos nφ + i sin nφ): modul na n-tu, kut puta n.</li>
    <li class="b20-item"><div class="b20-dot"></div>iⁿ ovisi o n mod 4 (ciklus i, −1, −i, 1).</li>
    <li class="b20-item"><div class="b20-dot"></div>n-ti korijen ima n vrijednosti na kružnici (razmak 360°/n).</li>
  </ul></div>
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — drugi korijeni iz i</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi sve druge korijene (√) broja i.</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">i = cos90° + i sin90°, r=1. Korijeni: modul ¹√1=1, kut (90°+360°k)/2</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">k=0: φ=45° → cos45°+i sin45° = (√2/2)(1+i)</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">k=1: φ=225° → −(√2/2)(1+i)</div></div>
      </div>
      <div class="combo-ans">√i = ±(√2/2)(1+i). Dva korijena, suprotnih predznaka (razmak 180°).</div>
    </div>
  </div>
  <div class="inline-cp" id="icp3">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — De Moivre</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1"><div class="icp-q-text">Argument broja i je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">90°</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">0°</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">180°</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">45°</div>
      </div><div class="icp-fb" id="icp3q1fb"></div></div>
      <div class="icp-q" id="icp3q2"><div class="icp-q-text">Koliko je i¹²?</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">1</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">−1</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">i</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">−i</div>
      </div><div class="icp-fb" id="icp3q2fb"></div></div>
      <div class="icp-q" id="icp3q3"><div class="icp-q-text">Modul broja [3(cos20°+i sin20°)]² je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">9</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">6</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">3</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">12</div>
      </div><div class="icp-fb" id="icp3q3fb"></div></div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- A RAZINA -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
  <div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — potencija binoma</div></div><div class="combo-body">
    <div class="combo-task">Izračunaj (2+i)³.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Prvo (2+i)² = 4 + 4i + i² = 4 + 4i − 1 = 3 + 4i</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">(2+i)³ = (3+4i)(2+i) = 6 + 3i + 8i + 4i² = 6 + 11i − 4</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">= <strong>2 + 11i</strong></div></div>
    </div><div class="combo-ans">(2+i)³ = 2+11i. Računaj korak po korak; ne zaboravi i²=−1.</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — drugi korijen (algebarski)</div></div><div class="combo-body">
    <div class="combo-task">Nađi kompleksni broj z=a+bi takav da je z² = −5+12i.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">z²=a²−b²+2abi = −5+12i → a²−b²=−5 i 2ab=12 (pa ab=6)</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">a=6/b → (6/b)²−b²=−5 → b⁴−5b²−36=0 → b²=9 → b=3, a=2</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">z = <strong>2+3i</strong> (i suprotni −2−3i). Provjera: (2+3i)²=4+12i−9=−5+12i ✓</div></div>
    </div><div class="combo-ans">z = ±(2+3i). Rastav na realni i imaginarni dio daje sustav za a i b.</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — De Moivre</div></div><div class="combo-body">
    <div class="combo-task">Izračunaj (1−i)⁶.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Brže preko kvadrata: (1−i)² = 1 − 2i + i² = −2i</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">(1−i)⁶ = ((1−i)²)³ = (−2i)³ = −8i³</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">i³ = −i → −8·(−i) = <strong>8i</strong></div></div>
    </div><div class="combo-ans">(1−i)⁶ = 8i. Provjera De Moivreom: r=√2, φ=−45°; (√2)⁶=8, kut −270° → 8i.</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — kvadratna s kompleksnim rješenjima</div></div><div class="combo-body">
    <div class="combo-task">Riješi jednadžbu x² − 4x + 13 = 0 nad skupom ℂ.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Diskriminanta: D = (−4)² − 4·1·13 = 16 − 52 = −36 < 0</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">√D = √(−36) = 6i</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x = (4 ± 6i)/2 = <strong>2 ± 3i</strong></div></div>
    </div><div class="combo-ans">x = 2±3i. Kad je D<0, rješenja su konjugirano kompleksna (a±bi).</div>
  </div></div>
  <!-- DRILL -->
  <div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">Vrijedi i²=−1</div>
      <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>
  <!-- NCVVO -->
  <div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Množenje · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-ud">algebra</span></div>
      <div class="ncvvo-real-q">Izračunaj (4+3i)(2−i)</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave da je −3i·(−i)·… i² = −1 (predznak)</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">8 − 4i + 6i − 3i² = 8 + 2i + 3 = <strong>11 + 2i</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Dijeljenje · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-kru">konjugat</span></div>
      <div class="ncvvo-real-q">Izračunaj (2+3i)/(1−i)</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>ne prošire konjugatom nazivnika</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">·(1+i): (2+3i)(1+i)/2 = (−1+5i)/2 = <strong>−0,5 + 2,5i</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Modul i argument · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-tan">trig</span></div>
      <div class="ncvvo-real-q">Odredi modul i argument broja z=−1−i</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>krivi kvadrant pri argumentu</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">r=√(1+1)=√2; točka (−1,−1) je u 3. kvadrantu → φ=<strong>225°</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>De Moivre · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-sj">demoivre</span></div>
      <div class="ncvvo-real-q">Izračunaj (1+i)⁴</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>množe modul s 4 umjesto da ga potenciraju</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">((1+i)²)² = (2i)² = 4i² = <strong>−4</strong></div>
    </div>
  </div></div>
  <!-- CHECKPOINT -->
  <div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>i²=−1 · z=a+bi · iⁿ ciklus duljine 4</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Množenje: (a+bi)(c+di)=(ac−bd)+(ad+bc)i</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>z̄=a−bi · |z|=√(a²+b²) · z·z̄=|z|²</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Dijeljenje konjugatom · trig oblik z=r(cosφ+i sinφ)</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>De Moivre zⁿ=rⁿ(cos nφ+i sin nφ) · n n-tih korijena</li>
    </ul>
    <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Sve A-teme savladane!</span></div>
  </div>
  <div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
    <li class="mi"><div class="mi-dot"></div><span><b>i²=−1</b> · množenje kao binome, pa uvrsti i²=−1.</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>z̄=a−bi, |z|=√(a²+b²), z·z̄=|z|²</b> · dijeljenje proširi konjugatom nazivnika.</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>Trig oblik + De Moivre</b> za potencije i korijene (rⁿ, kut·n).</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>Kvadratna s D<0</b> daje konjugirano kompleksne korijene a±bi.</span></li>
  </ul></div>
  <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Veze s ostalim poglavljima</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P04</span><span class="cn-item-title">Jednadžbe</span></div><div class="cn-item-desc">Kvadratna jednadžba s D<0 ima konjugirano kompleksna rješenja.</div><div class="cn-item-arrow">→ kompleksna rješenja</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P09</span><span class="cn-item-title">Trigonometrija</span></div><div class="cn-item-desc">cos i sin grade trigonometrijski oblik i De Moivreovu formulu.</div><div class="cn-item-arrow">→ trigonometrijski oblik</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P02</span><span class="cn-item-title">Potencije i korijeni</span></div><div class="cn-item-desc">n-ti korijeni kompleksnog broja poopćuju realno korjenovanje.</div><div class="cn-item-arrow">→ n korijena</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge v">P07</span><span class="cn-item-title">Kvadratna funkcija</span></div><div class="cn-item-desc">Diskriminanta D<0 znači da parabola ne siječe x-os (nema realnih nultočaka).</div><div class="cn-item-arrow">→ diskriminanta</div></div>
  </div>
  </div>
  <div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
  <div class="con" style="margin-bottom:20px">
    <div class="cr"><div class="ck b">Algebarski oblik</div><div class="cv">z=a+bi, i²=−1. Re z=a, Im z=b. iⁿ ciklus: i, −1, −i, 1.</div></div>
    <div class="cr"><div class="ck c">Operacije</div><div class="cv">(a+bi)±(c+di)=(a±c)+(b±d)i · (a+bi)(c+di)=(ac−bd)+(ad+bc)i.</div></div>
    <div class="cr"><div class="ck i">Konjugat i modul</div><div class="cv">z̄=a−bi · |z|=√(a²+b²) · z·z̄=a²+b²=|z|². Dijeljenje: proširi konjugatom.</div></div>
    <div class="cr"><div class="ck a">Trigonometrijski oblik</div><div class="cv">z=r(cosφ+i sinφ), r=|z|, tanφ=b/a (pazi na kvadrant).</div></div>
    <div class="cr"><div class="ck r">De Moivre</div><div class="cv">zⁿ=rⁿ(cos nφ+i sin nφ). ⁿ√z: modul ⁿ√r, kutovi (φ+360°k)/n, k=0…n−1.</div></div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(0)">← Pregled</span><span class="nb primary" onclick="sw(2)">Vježbaj →</span></div>
</div>
<!-- L2 -->
<div class="layer" id="l2">
  <div class="exam-mode-wrap" id="exam-mode-wrap"><div class="exam-mode-head">// odaberi mod vježbanja</div><div class="exam-mode-opts">
    <div class="exam-mode-opt active" onclick="setExamMode('normal',this)"><div class="em-icon">📖</div><div class="em-name">Standardni</div><div class="em-desc">s objašnjenjima · bez pritiska</div></div>
    <div class="exam-mode-opt" onclick="setExamMode('timed',this)"><div class="em-icon">⏱</div><div class="em-name">Ispitni</div><div class="em-desc">90 sek po pitanju · kao NCVVO</div></div>
    <div class="exam-mode-opt" onclick="setExamMode('blitz',this)"><div class="em-icon">⚡</div><div class="em-name">Blitz</div><div class="em-desc">30 sek po pitanju · maksimalni pritisak</div></div>
  </div></div>
  <div class="adaptive-banner" id="adaptive-banner" style="display:none"><div class="ab-icon">🎯</div><div class="ab-body"><div class="ab-title" id="ab-title">Prijedlog za ponavljanje</div><div class="ab-text" id="ab-text"></div></div><button class="ab-close" onclick="document.getElementById('adaptive-banner').style.display='none'">×</button></div>
  <div class="exam-timer" id="exam-timer" style="display:none"><div class="et-circle"><canvas id="timer-canvas" width="64" height="64"></canvas><span class="et-num" id="et-num">90</span></div><div class="et-info"><div class="et-label">Preostalo</div><div class="et-q" id="et-q-label">Pitanje 1</div></div><div class="et-streak" id="et-streak">Niz: 0 ✓</div></div>
  <div class="quiz-intro"><strong>// ispitni mod</strong> · 12 pitanja · svako s objašnjenjem · target: <strong>10/12</strong></div>
  <div id="quiz-container"></div>
  <div class="score-box" id="score"><div class="score-num" id="snum">0/12</div><div class="score-lbl" id="slbl"></div></div>
  <div class="cta"><div><div class="cta-e">discere archive</div><div class="cta-t">Vježbaj sa stvarnim zadacima mature</div><div class="cta-s">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div></div><a href="https://maturiraj.hr" class="cta-btn">Otvori Discere →</a></div>
  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · zbrajanje</div><div class="fitb-sent">(5+2i)+(1−6i) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','6−4i','ud2')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · modul</div><div class="fitb-sent">|8+6i| = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="|z|=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','10','kru2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · konjugat</div><div class="fitb-sent">Konjugat broja 7−3i = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="z̄=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','7+3i','tan2')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · potencija od i</div><div class="fitb-sent">i¹⁰⁰ = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','1','ud3')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <!-- sr4 — line-circle intersection -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — kvadratna nad ℂ</div>
      <div class="sr-task">Riješi x² + 2x + 5 = 0 nad skupom kompleksnih brojeva.</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Diskriminanta</div><div class="sr-txt">D = 2² − 4·1·5 = 4 − 20 = −16 < 0 → kompleksna rješenja</div></div></div></div>
      <div class="sr-step" id="sr4s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Korijen diskriminante</div><div class="sr-txt">√D = √(−16) = 4i</div></div></div></div>
      <div class="sr-step" id="sr4s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Rješenja</div><div class="sr-txt">x = (−2 ± 4i)/2 = <strong>−1 ± 2i</strong> (konjugirano kompleksna)</div></div></div></div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr4',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr4',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr4p">0 / 3</span>
    </div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p06')" class="nb primary">Sljedeće poglavlje →</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[53,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p05_tab',i);}catch(e){}
}
function calcMul(){var a=parseFloat(document.getElementById('m-a').value),b=parseFloat(document.getElementById('m-b').value),c=parseFloat(document.getElementById('m-c').value),d=parseFloat(document.getElementById('m-d').value);var r=document.getElementById('m-result');if([a,b,c,d].some(isNaN)){r.innerHTML='<span style="color:var(--red)">Upiši a, b, c, d za z₁=a+bi i z₂=c+di.</span>';return;}var fmt=function(v){return Math.round(v*1000)/1000;};var re=a*c-b*d,im=a*d+b*c;var sign=im<0?'−':'+';r.innerHTML='z₁·z₂ = ('+fmt(a)+'+'+fmt(b)+'i)('+fmt(c)+'+'+fmt(d)+'i)<br>realni dio: ac−bd = '+fmt(re)+'<br>imaginarni dio: ad+bc = '+fmt(im)+'<br>= <strong>'+fmt(re)+' '+sign+' '+fmt(Math.abs(im))+'i</strong>';}
function calcCx(){var a=parseFloat(document.getElementById('cx-a').value),b=parseFloat(document.getElementById('cx-b').value);var r=document.getElementById('cx-result');if([a,b].some(isNaN)){r.innerHTML='<span style="color:var(--red)">Upiši a i b za z=a+bi.</span>';return;}var fmt=function(v){return Math.round(v*1000)/1000;};var mod=Math.sqrt(a*a+b*b);var arg=Math.atan2(b,a)*180/Math.PI;if(arg<0)arg+=360;var sign=b<0?'−':'+';r.innerHTML='z = '+fmt(a)+' '+sign+' '+fmt(Math.abs(b))+'i<br>Modul |z| = √('+fmt(a*a)+'+'+fmt(b*b)+') = <strong>'+fmt(mod)+'</strong><br>Argument φ = <strong>'+fmt(arg)+'°</strong><br>Konjugat z̄ = '+fmt(a)+' '+(b<0?'+':'−')+' '+fmt(Math.abs(b))+'i';}
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}
var tryExp={ud1:'(1+i)(1−i) = 1 − i² = 1+1 = 2. (razlika kvadrata: a²−(bi)²)',kru1:'|5+12i| = √(5²+12²) = √(25+144) = √169 = 13.',tan1:'i¹⁵ = i^(12+3) = (i⁴)³·i³ = i³ = −i.'};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
var drData=[
  {q:'Vrijedi i²=−1',ans:true,tag:'alg',exp:'Točno! To je definicija imaginarne jedinice ✓'},
  {q:'(a+bi)+(c+di)=(a+c)+(b+d)i',ans:true,tag:'alg',exp:'Točno! Zbrajamo po komponentama ✓'},
  {q:'Konjugat broja a+bi je a+bi',ans:false,tag:'konj',exp:'Netočno! Konjugat je a−bi (mijenja se predznak imaginarnog dijela).'},
  {q:'Modul broja a+bi je a²+b²',ans:false,tag:'konj',exp:'Netočno! Modul je √(a²+b²); a²+b² je |z|².'},
  {q:'|3+4i|=5',ans:true,tag:'konj',exp:'Točno! √(9+16)=√25=5 ✓'},
  {q:'Pri dijeljenju proširujemo konjugatom nazivnika',ans:true,tag:'konj',exp:'Točno! Tako nazivnik postane realan ✓'},
  {q:'Vrijedi z·z̄=|z|²',ans:true,tag:'konj',exp:'Točno! z·z̄=a²+b²=|z|² ✓'},
  {q:'i⁴=1',ans:true,tag:'demoivre',exp:'Točno! i⁴=(i²)²=(−1)²=1 ✓'},
  {q:'De Moivre: (r(cosφ+i sinφ))ⁿ=rⁿ(cos nφ+i sin nφ)',ans:true,tag:'demoivre',exp:'Točno! Modul se potencira, kut množi s n ✓'},
  {q:'Argument broja i je 90°',ans:true,tag:'trig',exp:'Točno! i=cos90°+i sin90° ✓'},
  {q:'Trigonometrijski oblik glasi z=r(cosφ−i sinφ)',ans:false,tag:'trig',exp:'Netočno! Glasi z=r(cosφ+i sinφ) (plus, ne minus).'},
  {q:'Kompleksni broj ima n različitih n-tih korijena',ans:true,tag:'demoivre',exp:'Točno! Raspoređeni su po kružnici polumjera ⁿ√r ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}
var bugDone={};var bugExp={b1:'✓ Točno! (2+i)(2−i)=4−i²=4−(−1)=5, ne 3. Zamka: i²=−1, ne +1!',b2:'✓ Točno! |3+4i|=√(3²+4²)=√25=5, ne 3+4=7. Modul je korijen zbroja kvadrata.',b3:'✓ Točno! i⁶=i^(4+2)=i⁴·i²=1·(−1)=−1, ne i. Razloži eksponent na višekratnik od 4.'};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
var icpAnswered={};var icpFeedback={
  icp1:{q1:{ok:'✓ Točno! i²=−1 po definiciji.',ng:'✗ Netočno. i²=−1.'},q2:{ok:'✓ Točno! (1+3)+(2−1)i=4+i.',ng:'✗ Netočno. Zbroji po komponentama: 4+i.'},q3:{ok:'✓ Točno! (1+i)(1−i)=1−i²=2.',ng:'✗ Netočno. Razlika kvadrata: 1−i²=1+1=2.'}},
  icp2:{q1:{ok:'✓ Točno! Konjugat broja 2−5i je 2+5i.',ng:'✗ Netočno. z̄ mijenja predznak Im: 2+5i.'},q2:{ok:'✓ Točno! |6+8i|=√(36+64)=10.',ng:'✗ Netočno. |z|=√(6²+8²)=√100=10.'},q3:{ok:'✓ Točno! z·z̄=3²+1²=10.',ng:'✗ Netočno. z·z̄=a²+b²=9+1=10.'}},
  icp3:{q1:{ok:'✓ Točno! arg(i)=90°.',ng:'✗ Netočno. i leži na imaginarnoj osi → 90°.'},q2:{ok:'✓ Točno! i¹²=(i⁴)³=1.',ng:'✗ Netočno. 12 je djeljiv s 4 → i¹²=1.'},q3:{ok:'✓ Točno! Modul se kvadrira: 3²=9.',ng:'✗ Netočno. De Moivre: modul je rⁿ=3²=9.'}}
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';})}
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
var topicErrors={alg:0,konj:0,trig:0,demoivre:0};
var topicHints={alg:'Greške s algebarskim oblikom! i²=−1. Zbrajanje po komponentama, množenje kao binome pa uvrsti i²=−1.',konj:'Greške s konjugatom/modulom! z̄=a−bi, |z|=√(a²+b²), z·z̄=a²+b². Dijeljenje: proširi konjugatom nazivnika.',trig:'Greške s trig oblikom! z=r(cosφ+i sinφ), r=|z|, tanφ=b/a. Pazi na kvadrant pri argumentu.',demoivre:'Greške s De Moivreom! zⁿ=rⁿ(cos nφ+i sin nφ). Potencije od i idu u ciklusu 4 (n mod 4).'};
var qTopics={q1:'alg',q2:'alg',q3:'alg',q4:'konj',q5:'konj',q6:'konj',q7:'trig',q8:'trig',q9:'demoivre',q10:'demoivre',q11:'demoivre',q12:'konj'};
var ncvvoTopicMap={'nlive-ud':['q1','q2','q3'],'nlive-kru':['q4','q5','q12'],'nlive-tan':['q7','q8'],'nlive-sj':['q9','q10','q11']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*8);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*4);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;tabProgress[1]=Math.min(53+drillPts+icpPts+cpPts,60);tabProgress[2]=Math.min(53+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p05_prog',p);}catch(e){}}
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(freq,dur,vol,type){var ctx=getAudio();if(!ctx)return;var osc=ctx.createOscillator();var gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.type=type||'sine';osc.frequency.setValueAtTime(freq,ctx.currentTime);gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);}
function soundCorrect(){playTone(880,0.12,0.12,'sine');setTimeout(function(){playTone(1100,0.15,0.10,'sine');},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12,'sine');},i*100);});}
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90;
function setExamMode(mode,el){examMode=mode;document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});el.classList.add('active');if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}else{document.getElementById('exam-timer').style.display='none';stopTimer();}}
function drawTimerCanvas(secs,max){var c=document.getElementById('timer-canvas');if(!c)return;var ctx=c.getContext('2d');var r=28,cx=32,cy=32;ctx.clearRect(0,0,64,64);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();var pct=secs/max;var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();var numEl=document.getElementById('et-num');if(numEl)numEl.textContent=secs;var wrap=document.getElementById('exam-timer');if(wrap){wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);wrap.classList.toggle('urgent',pct<=0.2);}}
function startTimer(){stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);timerInterval=setInterval(function(){timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);if(timerSeconds>0&&timerSeconds<=10)soundTick();if(timerSeconds<=0){stopTimer();soundTimeUp();}},1000);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'alg',meta:'imaginarna jedinica',text:'Koliko iznosi i²?',opts:[{t:'−1',ok:true},{t:'1',ok:false},{t:'i',ok:false},{t:'−i',ok:false}],c:'✓ Točno. Po definiciji i²=−1.',w:'✗ Netočno. Imaginarna jedinica je definirana tako da je i²=−1.',proof:['i=√(−1)','i²=(√(−1))²','=−1']},
  {id:'q2',topic:'alg',meta:'zbrajanje',text:'(3+2i)+(1−5i) =',opts:[{t:'4−3i',ok:true},{t:'4+7i',ok:false},{t:'2+7i',ok:false},{t:'4−7i',ok:false}],c:'✓ Točno. Zbroji realne i imaginarne dijelove.',w:'✗ Netočno. (3+1)+(2−5)i = 4−3i.',proof:['(3+1)+(2−5)i','=4+(−3)i','=4−3i']},
  {id:'q3',topic:'alg',meta:'množenje',text:'(2+i)(3−i) =',opts:[{t:'7+i',ok:true},{t:'6+i',ok:false},{t:'5+i',ok:false},{t:'7−i',ok:false}],c:'✓ Točno. 6−2i+3i−i²=6+i+1=7+i.',w:'✗ Netočno. Množi kao binome i uvrsti i²=−1: =7+i.',proof:['6−2i+3i−i²','=6+i−(−1)','=7+i']},
  {id:'q4',topic:'konj',meta:'konjugat',text:'Konjugat broja z=4−7i je:',opts:[{t:'4+7i',ok:true},{t:'−4+7i',ok:false},{t:'−4−7i',ok:false},{t:'7−4i',ok:false}],c:'✓ Točno. z̄ mijenja predznak imaginarnog dijela.',w:'✗ Netočno. z̄=a−bi → za 4−7i to je 4+7i.',proof:['z=4−7i','z̄=4−(−7)i','=4+7i']},
  {id:'q5',topic:'konj',meta:'modul',text:'Modul broja z=3+4i je:',opts:[{t:'5',ok:true},{t:'7',ok:false},{t:'√7',ok:false},{t:'25',ok:false}],c:'✓ Točno. |z|=√(9+16)=√25=5.',w:'✗ Netočno. |z|=√(a²+b²)=√(9+16)=5 (ne a+b!).',proof:['|z|=√(3²+4²)','=√(9+16)=√25','=5']},
  {id:'q6',topic:'konj',meta:'A razina · dijeljenje',text:'(1+i)/(1−i) =',opts:[{t:'i',ok:true},{t:'−i',ok:false},{t:'1',ok:false},{t:'1+i',ok:false}],c:'✓ Točno. Proširi s (1+i): 2i/2=i.',w:'✗ Netočno. Proširi konjugatom: (1+i)²/2=2i/2=i.',proof:['·(1+i)/(1+i)','=(1+2i+i²)/(1−i²)','=2i/2=i']},
  {id:'q7',topic:'trig',meta:'argument',text:'Argument broja z=1+i je:',opts:[{t:'45°',ok:true},{t:'90°',ok:false},{t:'135°',ok:false},{t:'30°',ok:false}],c:'✓ Točno. tanφ=1/1=1 → φ=45°.',w:'✗ Netočno. tanφ=b/a=1, prvi kvadrant → φ=45°.',proof:['tanφ=b/a=1/1','prvi kvadrant','φ=45°']},
  {id:'q8',topic:'trig',meta:'trigonometrijski oblik',text:'z=2(cos60°+i·sin60°) u algebarskom obliku je:',opts:[{t:'1+i√3',ok:true},{t:'√3+i',ok:false},{t:'2+2i',ok:false},{t:'1−i√3',ok:false}],c:'✓ Točno. 2(½+i·(√3/2))=1+i√3.',w:'✗ Netočno. cos60°=½, sin60°=√3/2 → 2(½+i√3/2)=1+i√3.',proof:['2(cos60°+i sin60°)','=2(½+i·√3/2)','=1+i√3']},
  {id:'q9',topic:'demoivre',meta:'potencije od i',text:'Koliko iznosi i¹⁰?',opts:[{t:'−1',ok:true},{t:'1',ok:false},{t:'i',ok:false},{t:'−i',ok:false}],c:'✓ Točno. i¹⁰=i^(8+2)=i²=−1.',w:'✗ Netočno. 10=4·2+2 → i¹⁰=i²=−1.',proof:['i¹⁰=i^(4·2+2)','=(i⁴)²·i²','=1·(−1)=−1']},
  {id:'q10',topic:'demoivre',meta:'De Moivre · modul',text:'[2(cos30°+i sin30°)]³ ima modul:',opts:[{t:'8',ok:true},{t:'6',ok:false},{t:'2',ok:false},{t:'30',ok:false}],c:'✓ Točno. Modul se potencira: 2³=8.',w:'✗ Netočno. De Moivre: modul je rⁿ=2³=8.',proof:['zⁿ=rⁿ(cos nφ+i sin nφ)','modul = 2³','=8']},
  {id:'q11',topic:'demoivre',meta:'A razina · De Moivre',text:'(cos40°+i sin40°)⁹ =',opts:[{t:'1',ok:true},{t:'−1',ok:false},{t:'i',ok:false},{t:'0',ok:false}],c:'✓ Točno. Kut 9·40°=360° → cos360°+i sin360°=1.',w:'✗ Netočno. 9·40°=360°, pa cos360°+i sin360°=1.',proof:['kut = 9·40° = 360°','cos360°+i sin360°','=1']},
  {id:'q12',topic:'konj',meta:'A razina · z·z̄',text:'Ako je z=2+3i, koliko je z·z̄?',opts:[{t:'13',ok:true},{t:'13i',ok:false},{t:'5',ok:false},{t:'6i',ok:false}],c:'✓ Točno. z·z̄=|z|²=4+9=13.',w:'✗ Netočno. z·z̄=a²+b²=2²+3²=13 (realan broj!).',proof:['z·z̄=(2+3i)(2−3i)','=4−(3i)²=4+9','=13']}
];
var FExp={ud2:'(5+1)+(2−6)i = 6−4i.',kru2:'|8+6i|=√(64+36)=√100=10.',tan2:'Konjugat broja 7−3i je 7+3i (predznak Im se mijenja).',ud3:'i¹⁰⁰=(i⁴)²⁵=1²⁵=1.'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Bravo! Završio si dodatne A-teme →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo Kompleksni brojevi prije nastavka.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}
/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p05_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p05_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

/* ── CONTEXTUAL FROM-BANNER ── */
(function(){
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
const meta = {id:'P05',pidLower:'p05',title:"Maturiraj.hr \u2014 Mat A \u00b7 P05 \u00b7 Kompleksni brojevi",subject:'matematika-a',lsKey:'maturiraj_p05_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p10');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P05] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p05"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p05_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p05_prog',String(pct));}catch(e){}}
// �� Complete page for MatChapterViewer (iframe srcDoc) ����������������������
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P05 · Kompleksni brojevi</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};