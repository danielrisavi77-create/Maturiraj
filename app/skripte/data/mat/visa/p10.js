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
  <button class="sb-item" onclick="navigateChapter('p05')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>05 · Kompleksni brojevi</button>
  <div class="sb-lbl">// Funkcije</div>
  <button class="sb-item" onclick="navigateChapter('p06')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>06 · Funkcija — temelj mature</button>
  <button class="sb-item" onclick="navigateChapter('p07')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>07 · Linearna i kvadratna f.</button>
  <button class="sb-item" onclick="navigateChapter('p08')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>08 · Eksponencijalna i log.</button>
  <button class="sb-item" onclick="navigateChapter('p09')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>09 · Trigonometrija</button>
  <div class="sb-lbl">// Geometrija i Analiza</div>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>10 · Analitička geometrija</button>
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
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">analitička-geometrija-pravac-kružnica</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>
<!-- L0 -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 10 od 21 · A razina · geometrija</div>
    <h1 class="hero-title">Analitička<br><span>Geometrija</span></h1>
    <p class="hero-sub">Pravac, kružnica i njihovi međusobni odnosi — koordinatna geometrija koja spaja algebru i geometriju u jedno</p>
    <div class="hero-meta"><span class="hchip b">3 teme</span><span class="hchip a">⭐ Redovito na NCVVO ispitu</span><span class="hchip c">~40 min</span></div>
    <div class="pt"><div class="pb" style="width:53%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Točka i udaljenost</span><span class="pill p-c">Jednadžba pravca</span>
    <span class="pill p-i">Međusobni odnosi pravaca</span><span class="pill p-a">Jednadžba kružnice</span>
    <span class="pill p-v">Pravac i kružnica</span><span class="pill p-r">Tangenta na kružnicu</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Analitička geometrija je most između algebre i geometrije. Svaka geometrijska figura ima svoju jednadžbu, svaka jednadžba ima geometrijsku interpretaciju.<br><br>Jednadžba pravca je temelj iz P07 koji se sada primjenjuje u prostoru — udaljenost točke od pravca, sjecišta, tangente na kružnicu.<br><br><strong>Na maturi: jednadžba tangente na kružnicu i udaljenost točke od pravca pojavljuju se u gotovo svakom ispitu A razine.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">d(A,B)</div><div class="sc-name">Udaljenost točaka</div><div class="sc-desc">d=√((x₂−x₁)²+(y₂−y₁)²). Ishodište koordinata i polovište segmenta.</div></div>
    <div class="sc"><div class="sc-ico si-c">y=kx+l</div><div class="sc-name">Jednadžba pravca</div><div class="sc-desc">Nagib k=(y₂−y₁)/(x₂−x₁). Opći oblik: ax+by+c=0. Normalni vektor (a,b).</div></div>
    <div class="sc"><div class="sc-ico si-i">d(T,p)</div><div class="sc-name">Udaljenost točke od pravca</div><div class="sc-desc">d=|ax₀+by₀+c|/√(a²+b²). Ključna formula — napamet!</div></div>
    <div class="sc"><div class="sc-ico si-a">x²+y²=r²</div><div class="sc-name">Jednadžba kružnice</div><div class="sc-desc">Centar (p,q), polumjer r: (x−p)²+(y−q)²=r². Iz općeg oblika dopuni kvadrat.</div></div>
    <div class="sc"><div class="sc-ico si-v">D=0,1,2</div><div class="sc-name">Pravac i kružnica</div><div class="sc-desc">Sustav → kvadratna → D: 2 sjecišta (D>0), tangenta (D=0), nema (D&lt;0).</div></div>
    <div class="sc"><div class="sc-ico si-r">tangenta</div><div class="sc-name">Tangenta na kružnicu</div><div class="sc-desc">Tangenta ⊥ polumjer u točki dodira. d(centar, tangenta)=r.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Udaljenost d(A,B)</div><div class="cv">d=√((x₂−x₁)²+(y₂−y₁)²). Polovište S=((x₁+x₂)/2, (y₁+y₂)/2).</div></div>
    <div class="cr"><div class="ck b">Jednadžba pravca</div><div class="cv">ax+by+c=0 (opći) · y=kx+l (nagibni) · y−y₀=k(x−x₀) (točka-nagib)</div></div>
    <div class="cr"><div class="ck c">Paralelni i okomiti</div><div class="cv">Paralelni: k₁=k₂ · Okomiti: k₁·k₂=−1 (ili normalni vektori okomiti)</div></div>
    <div class="cr"><div class="ck i">Udaljenost T(x₀,y₀) od pravca ax+by+c=0</div><div class="cv">d=|ax₀+by₀+c|/√(a²+b²) — apsolutna vrijednost u brojevniku!</div></div>
    <div class="cr"><div class="ck a">Jednadžba kružnice</div><div class="cv">(x−p)²+(y−q)²=r² · centar S(p,q), polumjer r. Opći: x²+y²+Dx+Ey+F=0.</div></div>
    <div class="cr"><div class="ck v">Pravac i kružnica</div><div class="cv">Uvrsti pravac u kružnicu → kvadratna → D>0: 2 presjeka, D=0: tangenta, D&lt;0: nema.</div></div>
    <div class="cr"><div class="ck r">Tangenta iz točke</div><div class="cv">Tangenta ⊥ polumjer u T. Jednadžba: (x₀−p)(x−p)+(y₀−q)(y−q)=r² (za točku na kružnici).</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">Iz općeg oblika x²+y²+Dx+Ey+F=0: centar je (−<span class="frac"><span class="num">D</span><span class="den">2</span></span>,−<span class="frac"><span class="num">E</span><span class="den">2</span></span>), ne (D,E)!</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p09')" class="nb">← P09 · Trigonometrija</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- L1 -->
<div class="layer" id="l1">
  <!-- 01 TOČKA I PRAVAC -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · TOČKA, UDALJENOST I JEDNADŽBA PRAVCA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — koordinatni sustav kao "adresni sustav"</div>
    <div class="box-int-txt">Svaka točka u ravnini ima jedinstvenu "adresu" — par (x,y). Udaljenost između dviju točaka je Pitagorin poučak u koordinatama: katetica su razlike koordinata, hipotenusa je udaljenost.<br><br>Pravac je skup svih točaka koje zadovoljavaju jednu linearnu jednadžbu. Nagib k govori "koliko y-a za jedan korak u x-u".<br><br><strong>Opći oblik ax+by+c=0 je najmoćniji — iz njega direktno čitamo normalni vektor (a,b) i računamo udaljenosti.</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">TOČKA, UDALJENOST, POLOVIŠTE</span>
    <span class="val">d(A,B)=√((x₂−x₁)²+(y₂−y₁)²)</span> <span class="cmt">— udaljenost točaka</span><br>
    <span class="val">S=((x₁+x₂)/2, (y₁+y₂)/2)</span> <span class="cmt">— polovište segmenta AB</span><br>
    <span class="val">d(T₀,p)=|ax₀+by₀+c|/√(a²+b²)</span> <span class="cmt">— udaljenost točke T₀(x₀,y₀) od pravca p: ax+by+c=0</span>
  </div>

  <div class="box-for"><span class="box-for-lbl">JEDNADŽBA PRAVCA — tri forme</span>
    <span class="val">ax+by+c=0</span> <span class="cmt">— opći oblik · normalni vektor n=(a,b)</span><br>
    <span class="val">y=kx+l</span> <span class="cmt">— nagibni oblik · k=nagib, l=y-odsječak</span><br>
    <span class="val">y−y₀=k(x−x₀)</span> <span class="cmt">— točka-nagib · korisno kad znaš točku i nagib</span><br>
    <span class="val">k=(y₂−y₁)/(x₂−x₁)</span> <span class="cmt">— nagib iz dviju točaka</span><br>
    <span class="cmt">Paralelni: k₁=k₂ · Okomiti: k₁·k₂=−1</span>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Nagibni oblik y=kx+l</div><div class="cmp-body">
      <div class="cmp-row">Nagib k odmah vidljiv</div>
      <div class="cmp-row">y-odsječak l odmah</div>
      <div class="cmp-row">Nema vertikalnih pravaca</div>
      <div class="cmp-row">Lako za crtanje</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Opći oblik ax+by+c=0</div><div class="cmp-body">
      <div class="cmp-row">Normalni vektor n=(a,b)</div>
      <div class="cmp-row">Direktno u formulu za d</div>
      <div class="cmp-row">Pokriva i vertikalne (b=0)</div>
      <div class="cmp-row">Moćniji za računanje</div>
    </div></div>
  </div>

  <!-- POINT-LINE EXPLORER -->
  <div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator udaljenosti — upiši pravac i točku</span></div>
    <div class="disc-body">
      <div class="disc-row" style="flex-wrap:wrap;gap:6px">
        <span class="disc-lbl">Pravac:</span>
        <input class="disc-in" id="pl-a" type="number" value="3" placeholder="a" style="width:55px">
        <span class="disc-lbl">x +</span>
        <input class="disc-in" id="pl-b" type="number" value="4" placeholder="b" style="width:55px">
        <span class="disc-lbl">y +</span>
        <input class="disc-in" id="pl-c" type="number" value="-5" placeholder="c" style="width:55px">
        <span class="disc-lbl">= 0</span>
      </div>
      <div class="disc-row" style="flex-wrap:wrap;gap:6px;margin-top:8px">
        <span class="disc-lbl">Točka T(</span>
        <input class="disc-in" id="pl-x" type="number" value="1" placeholder="x₀" style="width:55px">
        <span class="disc-lbl">,</span>
        <input class="disc-in" id="pl-y" type="number" value="2" placeholder="y₀" style="width:55px">
        <span class="disc-lbl">)</span>
        <button class="disc-btn" onclick="calcDist()">Izračunaj →</button>
      </div>
      <div class="disc-result" id="pl-result">Upiši koeficijente i klikni Izračunaj</div>
    </div>
  </div>

  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — normalni vektor kao "smjer okomice"</div>
    <div class="box-men-txt">Pravac ax+by+c=0 ima normalni vektor n=(a,b) — vektor koji je okomit na pravac.<br>Pravac 3x+4y−5=0: normalni vektor je (3,4). Okomiti pravac na ovaj ima smjer vektora (3,4).<br><strong>Udaljenost točke od pravca = "projekcija" na smjer normalnog vektora. Formula se pamti kao: |uvrsti točku u lijevu stranu| / |normalni vektor|.</strong></div>
  </div>

  <div class="sr" id="sr1">
    <div class="sr-head"><div class="sr-title">Udaljenost točke od pravca — korak po korak</div><div class="sr-task">Nađi udaljenost točke T(2,−1) od pravca 3x−4y+5=0</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Identificiraj a, b, c i koordinate točke</div><div class="sr-txt">a=3, b=−4, c=5 · T(x₀,y₀)=(2,−1)</div></div></div></div>
      <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Uvrsti u formulu</div><div class="sr-txt">d=|3·2+(−4)·(−1)+5|/√(3²+(−4)²)<br>=|6+4+5|/√(9+16)=|15|/√25=15/5=<strong>3</strong></div></div></div></div>
      <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Provjeri i interpretiraj</div><div class="sr-txt">d=3 — točka T je udaljena 3 jedinice od pravca.
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Udaljenost ishodišta O(0,0) od pravca 3x−4y+5=0?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="d=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','1','ud1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
  </div>

  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — udaljenost točke od pravca</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa d(T(1,2), 3x+4y−5=0):</p>
    <div class="bug-task">d=|3+8−5|/<span class="wrong">√(3+4)</span>=6/√7</div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, √(a+b) je korijenski nazivnik</div>
      <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: nazivnik je √(a²+b²)=√(9+16)=5. d=|3+8−5|/5=6/5!</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: brojevnik treba biti bez apsolutne vrijednosti</div>
      <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: a i b se ne kvadriraju jer su već pozitivni</div>
    </div><div class="bug-expl" id="b1e"></div>
  </div></div>

  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — točka i pravac</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>d(A,B)=√(Δx²+Δy²) · Polovište=prosjek koordinata</li>
    <li class="b20-item"><div class="b20-dot"></div>d(T,p)=|ax₀+by₀+c|/√(a²+b²) — KVADRIRAJ a i b u nazivniku!</li>
    <li class="b20-item"><div class="b20-dot"></div>Normalni vektor pravca ax+by+c=0 je n=(a,b)</li>
  </ul></div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — jednadžba pravca</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi jednadžbu pravca kroz A(2, −1) i B(−1, 5)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Nagib: k = (y₂−y₁)/(x₂−x₁) = (5−(−1))/(−1−2) = 6/(−3) = <strong>−2</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Jednadžba: y − y₁ = k(x − x₁) → y − (−1) = −2(x − 2)</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Raspiši: y + 1 = −2x + 4 → <strong>y = −2x + 3</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Oblici: y=kx+l (eksplicitni) ili ax+by+c=0 (implicitni: 2x+y−3=0)</div></div>
      </div>
      <div class="combo-ans">y = −2x + 3 &nbsp;·&nbsp; Matura traži nagib + jednadžbu — uvijek provjeri kroz obje točke!</div>
    </div>
  </div>

  <div class="inline-cp" id="icp1">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — točka i pravac</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1"><div class="icp-q-text">Udaljenost između A(1,2) i B(4,6) je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">√5</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">5</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">7</div>
        <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">√7</div>
      </div><div class="icp-fb" id="icp1q1fb"></div></div>
      <div class="icp-q" id="icp1q2"><div class="icp-q-text">Udaljenost T(0,0) od pravca 5x+12y−13=0 je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">13/7</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">1</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">13</div>
        <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">13/5</div>
      </div><div class="icp-fb" id="icp1q2fb"></div></div>
      <div class="icp-q" id="icp1q3"><div class="icp-q-text">Polovište segmenta A(−2,4) i B(6,−2) je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">(4,2)</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">(2,1)</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">(4,1)</div>
        <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">(−4,2)</div>
      </div><div class="icp-fb" id="icp1q3fb"></div></div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na kružnicu →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- 02 KRUŽNICA -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · JEDNADŽBA KRUŽNICE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — kružnica kao "skup jednako udaljenih točaka"</div>
    <div class="box-int-txt">Kružnica je skup svih točaka ravnine jednako udaljenih od centra S(p,q). Ta udaljenost je polumjer r.<br><br>Jednadžba (x−p)²+(y−q)²=r² direktno slijedi iz definicije: za svaku točku T(x,y) na kružnici, d(T,S)=r.<br><br><strong>Iz općeg oblika x²+y²+Dx+Ey+F=0: dopuni kvadrat! Centar je (−<span class="frac"><span class="num">D</span><span class="den">2</span></span>, −<span class="frac"><span class="num">E</span><span class="den">2</span></span>). Pazi — predznak je negativan!</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">JEDNADŽBA KRUŽNICE</span>
    <span class="val">(x−p)²+(y−q)²=r²</span> <span class="cmt">— standardni oblik, centar S(p,q), polumjer r</span><br>
    <span class="val">x²+y²+Dx+Ey+F=0</span> <span class="cmt">— opći oblik</span><br>
    <span class="val">Centar: S(−<span class="frac"><span class="num">D</span><span class="den">2</span></span>, −<span class="frac"><span class="num">E</span><span class="den">2</span></span>)</span> · <span class="val">r=√(<span class="frac"><span class="num">D²</span><span class="den">4</span></span>+<span class="frac"><span class="num">E²</span><span class="den">4</span></span>−F)</span><br>
    <span class="cmt">Uvjet da je to kružnica (ne točka ni prazno): <span class="frac"><span class="num">D²</span><span class="den">4</span></span>+<span class="frac"><span class="num">E²</span><span class="den">4</span></span>−F > 0</span>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Standardni oblik</div><div class="cmp-body">
      <div class="cmp-row">(x−p)²+(y−q)²=r²</div>
      <div class="cmp-row">Centar <b>S(p,q)</b> direktno</div>
      <div class="cmp-row">Polumjer <b>r=√(desna strana)</b></div>
      <div class="cmp-row">Pazi: (x+3)²→p=−3!</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Opći oblik</div><div class="cmp-body">
      <div class="cmp-row">x²+y²+Dx+Ey+F=0</div>
      <div class="cmp-row">Centar <b>S(−<span class="frac"><span class="num">D</span><span class="den">2</span></span>,−<span class="frac"><span class="num">E</span><span class="den">2</span></span>)</b></div>
      <div class="cmp-row">Dopuni kvadrat → standard.</div>
      <div class="cmp-row">Provjeri r²>0!</div>
    </div></div>
  </div>

  <!-- CIRCLE EXPLORER -->
  <div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kružnica Explorer — upiši centar i polumjer</span></div>
    <div class="disc-body">
      <div class="disc-row" style="flex-wrap:wrap;gap:6px">
        <span class="disc-lbl">Centar S(</span>
        <input class="disc-in" id="cir-p" type="number" value="2" placeholder="p" style="width:55px">
        <span class="disc-lbl">,</span>
        <input class="disc-in" id="cir-q" type="number" value="-1" placeholder="q" style="width:55px">
        <span class="disc-lbl">) r=</span>
        <input class="disc-in" id="cir-r" type="number" value="3" placeholder="r" min="0.1" style="width:55px">
        <button class="disc-btn" onclick="calcCircle()">Analiziraj →</button>
      </div>
      <div class="disc-result" id="cir-result">Upiši centar i polumjer pa klikni Analiziraj</div>
    </div>
  </div>

  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — dopunjavanje kvadrata za opći oblik</div>
    <div class="box-men-txt">x²+y²−6x+4y−3=0 → grupiraj po x i y:<br>(x²−6x)+(y²+4y)=3 → (x²−6x+9)+(y²+4y+4)=3+9+4<br>(x−3)²+(y+2)²=16 → centar S(3,−2), r=4<br><strong>Trik: dodaj (<span class="frac"><span class="num">koef</span><span class="den">2</span></span>)² s obje strane. Za −6x: dodaj (−<span class="frac"><span class="num">6</span><span class="den">2</span></span>)²=9. Za +4y: dodaj (<span class="frac"><span class="num">4</span><span class="den">2</span></span>)²=4.</strong></div>
  </div>

  <div class="sr" id="sr2">
    <div class="sr-head"><div class="sr-title">Kružnica iz općeg oblika — korak po korak</div><div class="sr-task">Nađi centar i polumjer: x²+y²−4x+6y−3=0</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Grupiraj i premjesti konstantu</div><div class="sr-txt">(x²−4x)+(y²+6y)=3</div></div></div></div>
      <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Dopuni kvadrat za x i y</div><div class="sr-txt">(x²−4x+4)+(y²+6y+9)=3+4+9<br>(x−2)²+(y+3)²=16</div></div></div></div>
      <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Čitaj centar i polumjer</div><div class="sr-txt">Centar S(2,−3), r=√16=<strong>4</strong>
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Koliki je polumjer x²+y²−2x−4y−4=0?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="r=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','3','kru1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
  </div>

  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — jednadžba kružnice</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik čita centar iz x²+y²+6x−2y+1=0:</p>
    <div class="bug-task">Centar: <span class="wrong">S(6, −2)</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, D=6 i E=−2 su koordinate centra</div>
      <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: centar je S(−<span class="frac"><span class="num">D</span><span class="den">2</span></span>,−<span class="frac"><span class="num">E</span><span class="den">2</span></span>)=(−3,1). Koeficijenti imaju negativan predznak!</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: centar je S(3,−1)</div>
      <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: centar je S(−6,2)</div>
    </div><div class="bug-expl" id="b2e"></div>
  </div></div>

  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — kružnica</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>(x−p)²+(y−q)²=r² → centar S(p,q). Pazi: (x+3)² znači p=−3!</li>
    <li class="b20-item"><div class="b20-dot"></div>Opći oblik: centar=(−<span class="frac"><span class="num">D</span><span class="den">2</span></span>,−<span class="frac"><span class="num">E</span><span class="den">2</span></span>). NEGATIVNI polumaci koeficijenata!</li>
    <li class="b20-item"><div class="b20-dot"></div>Dopuni kvadrat: dodaj (<span class="frac"><span class="num">koef</span><span class="den">2</span></span>)² s obje strane jednadžbe</li>
  </ul></div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — jednadžba kružnice</div></div>
    <div class="combo-body">
      <div class="combo-task">Kružnica ima središte S(3, −2) i polumjer r = 4. Napiši jednadžbu.</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Standardni oblik: (x − p)² + (y − q)² = r²</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uvrstimo: (x − 3)² + (y − (−2))² = 4² → <strong>(x−3)² + (y+2)² = 16</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Provjera: točka T(7, −2): (7−3)²+(−2+2)² = 16+0 = 16 = r² ✓ (na kružnici)</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: uvijek čitaj središte i r iz jednadžbe — pazi na predznake!</div></div>
      </div>
      <div class="combo-ans">(x−3)² + (y+2)² = 16 &nbsp;·&nbsp; Središte je (p, q) iz oblika (x−p)²+(y−q)²=r²</div>
    </div>
  </div>

  <div class="inline-cp" id="icp2">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — kružnica</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1"><div class="icp-q-text">Centar kružnice (x−3)²+(y+1)²=25 je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">S(−3,1)</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">S(3,−1)</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">S(3,1)</div>
        <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">S(−3,−1)</div>
      </div><div class="icp-fb" id="icp2q1fb"></div></div>
      <div class="icp-q" id="icp2q2"><div class="icp-q-text">Polumjer kružnice x²+y²=16 je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">16</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">4</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">8</div>
        <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">256</div>
      </div><div class="icp-fb" id="icp2q2fb"></div></div>
      <div class="icp-q" id="icp2q3"><div class="icp-q-text">Centar x²+y²−4x+8y−5=0 je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">S(−4,8)</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">S(4,−8)</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">S(2,−4)</div>
        <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">S(−2,4)</div>
      </div><div class="icp-fb" id="icp2q3fb"></div></div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na pravac i kružnicu →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- 03 PRAVAC I KRUŽNICA -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · PRAVAC I KRUŽNICA — TANGENTA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
  <div class="box-int"><div class="box-int-lbl">INTUITIVNO — tri moguća položaja</div>
    <div class="box-int-txt">Pravac i kružnica mogu biti u tri položaja: sijeku se (2 zajedničke točke), tangiraju (1 zajednička točka — pravac "dotiče" kružnicu), ili se ne sijeku.<br><br>Algebarski: uvrsti pravac u jednadžbu kružnice → dobiješ kvadratnu jednadžbu → diskriminanta D određuje položaj.<br><br><strong>Tangenta iz vanjske točke: postoje dvije tangente simetrične na os centar-točka. Tangenta ⊥ polumjer u točki dodira — ključna veza!</strong></div>
  </div>
  <div class="box-for"><span class="box-for-lbl">PRAVAC I KRUŽNICA — metode</span>
    <span class="val">Sustav: uvrsti pravac u kružnicu → kvadratna jednadžba u x</span><br>
    <span class="val">D&gt;0: dva sjecišta · D=0: tangenta · D&lt;0: nema zajedničkih točaka</span><br>
    <span class="val">Tangenta kružnice S(p,q), r u točki T(x₁,y₁) na kružnici:</span><br>
    <span class="val">(x₁−p)(x−p)+(y₁−q)(y−q)=r²</span><br>
    <span class="cmt">Za x²+y²=r²: tangenta u T(x₁,y₁) je x₁·x+y₁·y=r²</span><br>
    <span class="cmt">Uvjet tangente: d(S, pravac)=r (udaljenost centra od tangente = polumjer)</span>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c"><div class="cmp-h b">Sekanta — 2 sjecišta</div><div class="cmp-body">
      <div class="cmp-row">D &gt; 0</div>
      <div class="cmp-row">d(S,p) <b>&lt; r</b></div>
      <div class="cmp-row">Pravac "presiječe" kružnicu</div>
      <div class="cmp-row">Dvije zajedničke točke</div>
    </div></div>
    <div class="cmp-c"><div class="cmp-h c">Tangenta — 1 sjecište</div><div class="cmp-body">
      <div class="cmp-row">D = 0</div>
      <div class="cmp-row">d(S,p) <b>= r</b></div>
      <div class="cmp-row">Pravac "dotiče" kružnicu</div>
      <div class="cmp-row">Jedna zajednička točka</div>
    </div></div>
  </div>

  <div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — tangenta kroz udaljenost</div>
    <div class="box-men-txt">Pravac je tangenta na kružnicu ↔ udaljenost centra od pravca = polumjer.<br>Ovo je moćniji uvjet od diskriminante — direktno daje jednadžbu tangente parametarski.<br><strong>Za tangentu iz vanjske točke: d(S,p)=r → jednadžba za nagib k → dvije vrijednosti k → dvije tangente.</strong></div>
  </div>

  <div class="sr" id="sr3">
    <div class="sr-head"><div class="sr-title">Tangenta na kružnicu — korak po korak</div><div class="sr-task">Nađi jednadžbu tangente na x²+y²=25 u točki T(3,4)</div></div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Provjeri leži li T na kružnici</div><div class="sr-txt">3²+4²=9+16=25=r² ✓ Točka T leži na kružnici.</div></div></div></div>
      <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Primijeni formulu tangente</div><div class="sr-txt">x²+y²=r²: tangenta u T(x₁,y₁) je x₁·x+y₁·y=r²<br>3x+4y=25</div></div></div></div>
      <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Provjeri okomitost</div><div class="sr-txt">Polumjer ST ima smjer (3,4). Tangenta 3x+4y=25 ima normalni vektor (3,4) ✓ → tangenta ⊥ polumjer!
        <div class="sr-tryit"><div class="sr-try-lbl">↳ Jednadžba tangente na x²+y²=25 u T(−5,0)?</div>
          <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="jednadžba?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','x=-5','tan1')">Provjeri</button></div>
          <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
    </div>
    <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
  </div>

  <div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — položaj pravca i kružnice</div><div class="bug-body">
    <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik ispituje položaj pravca y=x+3 i kružnice x²+y²=4:</p>
    <div class="bug-task">Uvrsti: x²+(x+3)²=4 → 2x²+6x+9=4 → D=36−40=<span class="wrong">−4, nema sjecišta</span></div>
    <div class="bug-opts">
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, D&lt;0 znači nema sjecišta</div>
      <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Točno po zaključku, ali D=b²−4ac=36−4·2·5=36−40=−4 — greška u razvijanju! (x+3)²=x²+6x+9, a onda 2x²+6x+5=0</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: uvrstiti trebalo y=x+3 u y²=4−x²</div>
      <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: D=6²−4=32, ima sjecišta</div>
    </div><div class="bug-expl" id="b3e"></div>
  </div></div>

  <div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — pravac i kružnica</div><ul class="b20-list">
    <li class="b20-item"><div class="b20-dot"></div>Uvrsti pravac u kružnicu → kvadratna → D: &gt;0(2pt), =0(tang.), &lt;0(∅)</li>
    <li class="b20-item"><div class="b20-dot"></div>Tangenta ⊥ polumjer — uvijek! d(centar, tangenta)=r</li>
    <li class="b20-item"><div class="b20-dot"></div>Tangenta u T(x₁,y₁) na x²+y²=r²: x₁x+y₁y=r²</li>
  </ul></div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — sjecište pravca i kružnice</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi sjecišta pravca y = x + 1 i kružnice x² + y² = 5</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvrstimo pravac u kružnicu: x² + (x+1)² = 5 → x² + x²+2x+1 = 5</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uredi: 2x² + 2x − 4 = 0 → <strong>x² + x − 2 = 0</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Faktoriziraj: (x+2)(x−1) = 0 → x=−2 ili x=1</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Nađi y: x=−2 → y=−1; x=1 → y=2 → sjecišta: <strong>(−2,−1) i (1,2)</strong></div></div>
      </div>
      <div class="combo-ans">Sjecišta: (−2, −1) i (1, 2) &nbsp;·&nbsp; Uvrstiti pravac u kružnicu → kvadratna jednadžba</div>
    </div>
  </div>

  <div class="inline-cp" id="icp3">
    <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — pravac i kružnica</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1"><div class="icp-q-text">Tangenta na x²+y²=9 u točki T(0,3) je:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x=0</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">y=3</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">3x+y=9</div>
        <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">y=x+3</div>
      </div><div class="icp-fb" id="icp3q1fb"></div></div>
      <div class="icp-q" id="icp3q2"><div class="icp-q-text">D=0 u sustavu pravac-kružnica znači:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">2 sjecišta</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">pravac tangira kružnicu</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">nema zajedničkih točaka</div>
        <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">pravac prolazi centrom</div>
      </div><div class="icp-fb" id="icp3q2fb"></div></div>
      <div class="icp-q" id="icp3q3"><div class="icp-q-text">Uvjet da je pravac ax+by+c=0 tangenta na kružnicu S(p,q),r:</div><div class="icp-opts">
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">ap+bq+c=0</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">ap+bq+c=r</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">|ap+bq+c|/√(a²+b²)=r</div>
        <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">a²+b²=r²</div>
      </div><div class="icp-fb" id="icp3q3fb"></div></div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>
  <!-- A RAZINA -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
  <div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — udaljenost i trokut</div></div><div class="combo-body">
    <div class="combo-task">Trokut ima tjemena A(0,0), B(4,0), C(0,3). Nađi površinu i polumjer upisane kružnice.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Stranice: a=BC=5, b=AC=3, c=AB=4. Poluopseg s=(3+4+5)/2=6</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Površina P=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·4·3=6 (pravokutni trokut)</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Polumjer upisane: r=P/s=6/6=1</div></div>
    </div><div class="combo-ans">P=6, r=1. Centar upisane kružnice je u (1,1).</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — tangenta iz vanjske točke</div></div><div class="combo-body">
    <div class="combo-task">Iz točke T(5,0) nacrtaj tangente na kružnicu x²+y²=9. Nađi jednadžbe tangenti.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Tangenta oblika y=k(x−5). Uvjet tangente: d(O,t)=3</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Tangenta: kx−y−5k=0. d=|−5k|/√(k²+1)=3 → 25k²=9(k²+1) → 16k²=9 → k=±3/4</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">t₁: y=(<span class="frac"><span class="num">3</span><span class="den">4</span></span>)(x−5)=3x/4−<span class="frac"><span class="num">15</span><span class="den">4</span></span> → 3x−4y−15=0<br>t₂: y=−(<span class="frac"><span class="num">3</span><span class="den">4</span></span>)(x−5) → 3x+4y−15=0</div></div>
    </div><div class="combo-ans">3x−4y−15=0 i 3x+4y−15=0. Provjera: d(O,t₁)=|−15|/5=3=r ✓</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — sjecište pravaca i kružnica</div></div><div class="combo-body">
    <div class="combo-task">Nađi sjecišta kružnice x²+y²−4x−2y=0 i pravca y=x.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvrsti y=x: x²+x²−4x−2x=0 → 2x²−6x=0 → 2x(x−3)=0</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">x=0 → y=0: točka A(0,0). x=3 → y=3: točka B(3,3)</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Provjera: 0+0−0−0=0 ✓ i 9+9−12−6=0 ✓</div></div>
    </div><div class="combo-ans">Sjecišta: A(0,0) i B(3,3)</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — jednadžba kružnice iz uvjeta</div></div><div class="combo-body">
    <div class="combo-task">Kružnica prolazi kroz A(1,0) i B(3,0) te tangira y-os. Nađi jednadžbu.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Centar leži na simetrali segmenta AB: x=(1+3)/2=2 → centar je oblika S(2,q)</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Tangira y-os (x=0): d(S,y-os)=r → 2=r</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Provjeri: d(S,A)=√((2−1)²+q²)=√(1+q²)=2 → q²=3 → q=±√3</div></div>
    </div><div class="combo-ans">(x−2)²+(y−√3)²=4 i (x−2)²+(y+√3)²=4 — dvije kružnice zadovoljavaju uvjete.</div>
  </div></div>

  <!-- DRILL -->
  <div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">Udaljenost A(0,0) i B(3,4) je 5</div>
      <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>

  <!-- NCVVO -->
  <div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Udaljenost točke od pravca · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-ud">udaljenost</span></div>
      <div class="ncvvo-real-q">Nađi udaljenost T(2,3) od pravca 4x−3y+1=0</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>ne kvadriraju koeficijente u nazivniku — pišu √(4+3) umjesto √(16+9)</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">d=|4·2−3·3+1|/√(16+9)=|8−9+1|/5=|0|/5=<strong>0</strong><br>T(2,3) leži NA pravcu! (provjera: 8−9+1=0 ✓)</div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Jednadžba kružnice · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-kru">kružnica</span></div>
      <div class="ncvvo-real-q">Odredi centar i polumjer: x²+y²−6x+8y+9=0</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>centar čitaju kao (6,−8) umjesto (3,−4)</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">(x²−6x+9)+(y²+8y+16)=−9+9+16=16<br>(x−3)²+(y+4)²=16 → <strong>S(3,−4), r=4</strong></div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Tangenta na kružnicu · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-tan">tangenta</span></div>
      <div class="ncvvo-real-q">Jednadžba tangente na x²+y²=10 u točki T(1,3)</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>ne primjenjuju formulu x₁x+y₁y=r² nego pokušavaju naći nagib</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">Provjera: 1+9=10 ✓. Tangenta: 1·x+3·y=10 → <strong>x+3y=10</strong><br>Ili: x+3y−10=0. d(O,t)=|−10|/√10=√10=r ✓</div>
    </div>
    <div class="ncvvo-real-item">
      <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Sjecište pravca i kružnice · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-sj">sjecište</span></div>
      <div class="ncvvo-real-q">Ispitaj položaj pravca x+y−5=0 i kružnice x²+y²=9</div>
      <div class="ncvvo-real-stat">Najčešća greška: <strong>uvršatavaju y=5−x i griješe u razvijanju kvadrata</strong></div>
      <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
      <div class="ncvvo-real-ans">d(O,p)=|0+0−5|/√2=5/√2≈3.54 &gt; 3=r → <strong>nema zajedničkih točaka</strong></div>
    </div>
  </div></div>

  <!-- CHECKPOINT -->
  <div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>d(T,p)=|ax₀+by₀+c|/√(a²+b²) — kvadriraj a i b!</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Opći oblik kružnice: centar=(−<span class="frac"><span class="num">D</span><span class="den">2</span></span>,−<span class="frac"><span class="num">E</span><span class="den">2</span></span>)</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Dopunjavanje kvadrata za prevođenje u standardni oblik</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Tangenta u T(x₁,y₁) na x²+y²=r²: x₁x+y₁y=r²</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Uvjet tangente: d(centar, pravac)=r</li>
    </ul>
    <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 11!</span></div>
  </div>
  <div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
    <li class="mi"><div class="mi-dot"></div><span><b>d(T,p)=|ax₀+by₀+c|/√(a²+b²).</b> KVADRIRAJ a i b u nazivniku!</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>Opći oblik kružnice:</b> centar=(−<span class="frac"><span class="num">D</span><span class="den">2</span></span>,−<span class="frac"><span class="num">E</span><span class="den">2</span></span>). Negativni znak!</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>Tangenta x₁x+y₁y=r²</b> za točku na x²+y²=r².</span></li>
    <li class="mi"><div class="mi-dot"></div><span><b>Uvjet tangente: d(S,p)=r.</b> Moćniji od diskriminante!</span></li>
  </ul></div>
  <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Veze s ostalim poglavljima</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P11</span><span class="cn-item-title">Geometrija prostora</span></div><div class="cn-item-desc">Koordinatni pristup u prostoru — ravnine umjesto pravaca, P10 prošireno.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P11_FINAL.html?from=P10" style="color:inherit;text-decoration:none">→ prostorni koordinatni sustav</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">Tangenta na krivulju = derivacija. P10 daje geometrijsku interpretaciju.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P17_FINAL.html?from=P10" style="color:inherit;text-decoration:none">→ tangenta i normala</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P07</span><span class="cn-item-title">Kvadratna funkcija</span></div><div class="cn-item-desc">Parabola y=ax²+bx+c kao skup točaka jednako udaljenih od fokusa.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P07_FINAL.html?from=P10" style="color:inherit;text-decoration:none">→ parabola i kružnica</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">Površina lika omeđenog krivuljom — direktna primjena određenog integrala.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P18_FINAL.html?from=P10" style="color:inherit;text-decoration:none">→ površina lika</a></div></div>
  </div>
</div>

<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Udaljenost i polovište</div><div class="cv">d(A,B)=&radic;((x&sub2;&minus;x&sub1;)&sup2;+(y&sub2;&minus;y&sub1;)&sup2;). &nbsp; Polovište: S=((x&sub1;+x&sub2;)/2, (y&sub1;+y&sub2;)/2).</div></div>
  <div class="cr"><div class="ck c">Jednadžba pravca</div><div class="cv">y&minus;y<sub>1</sub> = k(x&minus;x<sub>1</sub>). Opći oblik Ax+By+C=0. Normala na k ima nagib &minus;1/k.</div></div>
  <div class="cr"><div class="ck i">d(T, pravac)</div><div class="cv">d = |Ax<sub>0</sub>+By<sub>0</sub>+C| / &radic;(A&sup2;+B&sup2;). Kod tangente iz točke T: d = r.</div></div>
  <div class="cr"><div class="ck a">Jednadžba kružnice</div><div class="cv">(x&minus;a)&sup2;+(y&minus;b)&sup2;=r&sup2;. Centar (a,b), polumjer r. Opći: x&sup2;+y&sup2;+Dx+Ey+F=0 &rarr; dopuni kvadrate!</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">Opći oblik kružnice: x&sup2;+y&sup2;&minus;6x+2y=0 &rarr; dopuni: (x&minus;3)&sup2;+(y+1)&sup2;=10. Ne zaboravi prebaciti konstantu!</div></div>
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
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · udaljenost</div><div class="fitb-sent">d(A(0,0), B(5,12)) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="d=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','13','ud2')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · centar kružnice</div><div class="fitb-sent">Centar (x−4)²+(y+2)²=9 je S(___, ___)</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="(p,q)" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','(4,-2)','kru2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · tangenta</div><div class="fitb-sent">Tangenta x²+y²=25 u T(5,0): ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="jednadžba?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','x=5','tan2')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · udaljenost točke od pravca</div><div class="fitb-sent">d(T(0,0), 3x+4y+10=0) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="d=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','2','ud3')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <!-- sr4 — line-circle intersection -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — međusobni položaj pravca i kružnice</div>
      <div class="sr-task">Pravac p: y = x + 1 i kružnica k: (x−1)² + (y−2)² = 5. Koliko zajedničkih točaka imaju? Nañi ih.</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Uvrsti pravac u jednadžbu kružnice</div>
            <div class="sr-txt">Zamijeni y = x+1 u (x−1)² + (y−2)² = 5:<br>(x−1)² + (x+1−2)² = 5 → (x−1)² + (x−1)² = 5<br>2(x−1)² = 5</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Riješi kvadratnu jednadžbu</div>
            <div class="sr-txt">(x−1)² = 5/2 → x−1 = ±√(5/2) = ±<span class="frac"><span class="num">√10</span><span class="den">2</span></span><br>x₁ = 1 + <span class="frac"><span class="num">√10</span><span class="den">2</span></span>, &nbsp; x₂ = 1 − <span class="frac"><span class="num">√10</span><span class="den">2</span></span><br>D &gt; 0 → <strong>dva presjeka (sekanta)</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Nañi y-koordinate i zapiši presjeke</div>
            <div class="sr-txt">y = x+1 → y₁ = 2 + <span class="frac"><span class="num">√10</span><span class="den">2</span></span>, &nbsp; y₂ = 2 − <span class="frac"><span class="num">√10</span><span class="den">2</span></span><br><strong>T₁(1+<span class="frac"><span class="num">√10</span><span class="den">2</span></span>, 2+<span class="frac"><span class="num">√10</span><span class="den">2</span></span>), &nbsp; T₂(1−<span class="frac"><span class="num">√10</span><span class="den">2</span></span>, 2−<span class="frac"><span class="num">√10</span><span class="den">2</span></span>)</strong></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr4',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr4',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr4p">0 / 3</span>
    </div>
  </div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p11')" class="nb primary">Sljedeće poglavlje →</button></div>
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
  try{sessionStorage.setItem('p10_tab',i);}catch(e){}
}
function calcDist(){
  var a=parseFloat(document.getElementById('pl-a').value),b=parseFloat(document.getElementById('pl-b').value),c=parseFloat(document.getElementById('pl-c').value);
  var x=parseFloat(document.getElementById('pl-x').value),y=parseFloat(document.getElementById('pl-y').value);
  var r=document.getElementById('pl-result');
  if([a,b,c,x,y].some(isNaN)){r.innerHTML='<span style="color:var(--red)">Upiši valjane vrijednosti.</span>';return;}
  var num=Math.abs(a*x+b*y+c),den=Math.sqrt(a*a+b*b);
  var fmt=function(v){return Math.round(v*1000)/1000;};
  r.innerHTML='d = |'+fmt(a*x+b*y+c)+'| / √('+fmt(a*a)+'+'+fmt(b*b)+') = '+fmt(num)+' / '+fmt(den)+' = <strong>'+fmt(num/den)+'</strong>';
}
function calcCircle(){
  var p=parseFloat(document.getElementById('cir-p').value),q=parseFloat(document.getElementById('cir-q').value),r=parseFloat(document.getElementById('cir-r').value);
  var res=document.getElementById('cir-result');
  if([p,q,r].some(isNaN)||r<=0){res.innerHTML='<span style="color:var(--red)">Upiši valjane vrijednosti (r&gt;0).</span>';return;}
  var fmt=function(v){return Number.isInteger(v)?v:Math.round(v*100)/100;};
  var D=-2*p,E=-2*q,F=p*p+q*q-r*r;
  res.innerHTML='Standardni: <strong>(x−'+fmt(p)+')²+(y−'+fmt(q)+')²='+fmt(r*r)+'</strong><br>'+
    'Opći: x²+y²+('+fmt(D)+')x+('+fmt(E)+')y+('+fmt(F)+')=0<br>'+
    'Prolazi kroz ('+fmt(p+r)+','+fmt(q)+'), ('+fmt(p-r)+','+fmt(q)+'), ('+fmt(p)+','+fmt(q+r)+')';
}
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}
var tryExp={ud1:'d=|3·0+(-4)·0+5|/√(9+16)=|5|/5=1. Ishodište je 1 jedinicu od pravca.',kru1:'x²+y²−2x−4y−4=0: (x²−2x+1)+(y²−4y+4)=4+1+4=9 → r=3.',tan1:'T(−5,0): −5·x+0·y=25 → x=−5. Vertikalni pravac x=−5.'};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
var drData=[
  {q:'Udaljenost A(0,0) i B(3,4) je 5',ans:true,tag:'udaljenost',exp:'Točno! d=√(9+16)=√25=5 — klasičan 3-4-5 pravokutni trokut ✓'},
  {q:'Formula za udaljenost točke od pravca je |ax₀+by₀+c|/(a+b)',ans:false,tag:'udaljenost',exp:'Netočno! Nazivnik je √(a²+b²), ne (a+b). KVADRIRAJ koeficijente!'},
  {q:'Centar (x+2)²+(y−3)²=16 je S(2,3)',ans:false,tag:'kružnica',exp:'Netočno! (x+2)²=(x−(−2))² → p=−2. Centar je S(−2,3)!'},
  {q:'Polumjer x²+y²=25 je r=5',ans:true,tag:'kružnica',exp:'Točno! x²+y²=r² → r²=25 → r=5 ✓'},
  {q:'Tangenta je okomita na polumjer u točki dodira',ans:true,tag:'tangenta',exp:'Točno! To je definicija tangente na kružnicu — uvijek ⊥ polumjer ✓'},
  {q:'D=0 u sustavu pravac-kružnica znači dva sjecišta',ans:false,tag:'sjecište',exp:'Netočno! D=0 znači tangenta (jedno sjecište). D>0 su dva, D<0 nema.'},
  {q:'Centar x²+y²−4x+6y+4=0 je S(2,−3)',ans:true,tag:'kružnica',exp:'Točno! D=−4 → p=2; E=6 → q=−3. S(−D/2,−E/2)=(2,−3) ✓'},
  {q:'Udaljenost T(1,1) od pravca x+y=0 je √2',ans:true,tag:'udaljenost',exp:'Točno! x+y+0=0; d=|1+1|/√2=2/√2=√2 ✓'},
  {q:'Kružnica x²+y²=r² prolazi kroz ishodište',ans:false,tag:'kružnica',exp:'Netočno! Ishodište (0,0): 0²+0²=0≠r² (za r≠0). Centar je u ishodištu, ali kružnica ga ne prolazi!'},
  {q:'Tangenta na x²+y²=9 u točki (0,3) je y=3',ans:true,tag:'tangenta',exp:'Točno! x₁x+y₁y=r²: 0·x+3·y=9 → y=3 ✓'},
  {q:'Ako je d(S,p)>r, pravac i kružnica imaju dva sjecišta',ans:false,tag:'sjecište',exp:'Netočno! d(S,p)>r znači nema sjecišta. d<r: 2 sjecišta, d=r: tangenta, d>r: nema.'},
  {q:'Polovište A(2,4) i B(6,−2) je S(4,1)',ans:true,tag:'udaljenost',exp:'Točno! S=((2+6)/2,(4−2)/2)=(4,1) ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}
var bugDone={};var bugExp={b1:'✓ Točno! Nazivnik je √(a²+b²)=√(9+16)=5. d=|3+8−5|/5=6/5. Kvadriraj!',b2:'✓ Točno! Centar=(−D/2,−E/2)=(−6/2,−(−2)/2)=(−3,1). Koeficijenti D i E imaju negativni predznak!',b3:'✓ Točno! (x+3)²=x²+6x+9. Sustav: x²+(x+3)²=4 → 2x²+6x+5=0 → D=36−40=−4<0 → nema sjecišta.'};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
var icpAnswered={};var icpFeedback={
  icp1:{q1:{ok:'✓ Točno! d=√((4−1)²+(6−2)²)=√(9+16)=5',ng:'✗ Netočno. d=√(Δx²+Δy²)=√(9+16)=√25=5'},q2:{ok:'✓ Točno! d=|0+0−13|/√(25+144)=13/13=1',ng:'✗ Netočno. d=|5·0+12·0−13|/√(25+144)=13/√169=13/13=1'},q3:{ok:'✓ Točno! S=((−2+6)/2,(4−2)/2)=(2,1)',ng:'✗ Netočno. S=((−2+6)/2,(4+(−2))/2)=(4/2,2/2)=(2,1)'}},
  icp2:{q1:{ok:'✓ Točno! (x−3)²: p=3. (y+1)²=(y−(−1))²: q=−1. S(3,−1).',ng:'✗ Netočno. (x−3)²→p=3, (y+1)²=(y−(−1))²→q=−1. S(3,−1)!'},q2:{ok:'✓ Točno! x²+y²=16=r² → r=4',ng:'✗ Netočno. x²+y²=r² → r²=16 → r=√16=4'},q3:{ok:'✓ Točno! D=−4→p=2, E=8→q=−4. S(−D/2,−E/2)=(2,−4)',ng:'✗ Netočno. S=(−D/2,−E/2)=(−(−4)/2,−8/2)=(2,−4)'}},
  icp3:{q1:{ok:'✓ Točno! T(0,3): 0·x+3·y=9 → y=3. Horizontalni pravac.',ng:'✗ Netočno. Tangenta: x₁x+y₁y=r². 0·x+3·y=9 → y=3.'},q2:{ok:'✓ Točno! D=0 → diskriminanta nula → jedno rješenje → tangenta.',ng:'✗ Netočno. D=0 u kvadratnoj jednadžbi → jedno rješenje → tangenta (jedan dodir).'},q3:{ok:'✓ Točno! Uvjet tangente: d(S,p)=r. Tj. |ap+bq+c|/√(a²+b²)=r.',ng:'✗ Netočno. Tangenta ↔ d(centar,pravac)=r → |ap+bq+c|/√(a²+b²)=r.'}}
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';})}
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
var topicErrors={udaljenost:0,kruznica:0,tangenta:0,sjeciste:0};
var topicHints={udaljenost:'Greške s udaljenostima! d(T,p)=|ax₀+by₀+c|/√(a²+b²) — KVADRIRAJ a i b u nazivniku!',kruznica:'Greške s kružnicom! Centar=(−D/2,−E/2) iz općeg oblika. Negativni predznak!',tangenta:'Greške s tangentom! Tangenta u T(x₁,y₁) na x²+y²=r²: x₁x+y₁y=r².',sjeciste:'Greške sa sjecištem! D>0: 2pt, D=0: tangenta, D<0: nema.'};
var qTopics={q1:'udaljenost',q2:'udaljenost',q3:'kruznica',q4:'kruznica',q5:'tangenta',q6:'tangenta',q7:'sjeciste',q8:'sjeciste',q9:'udaljenost',q10:'kruznica',q11:'tangenta',q12:'sjeciste'};
var ncvvoTopicMap={'nlive-ud':['q1','q2','q9'],'nlive-kru':['q3','q4','q10'],'nlive-tan':['q5','q6','q11'],'nlive-sj':['q7','q8','q12']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*8);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*4);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;tabProgress[1]=Math.min(53+drillPts+icpPts+cpPts,60);tabProgress[2]=Math.min(53+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p10_prog',p);}catch(e){}}
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
  {id:'q1',topic:'udaljenost',meta:'udaljenost točaka',text:'Udaljenost A(1,−2) i B(4,2) je:',opts:[{t:'5',ok:true},{t:'√7',ok:false},{t:'7',ok:false},{t:'√5',ok:false}],c:'✓ Točno. d=√(9+16)=√25=5.',w:'✗ Netočno. d=√((4−1)²+(2−(−2))²)=√(9+16)=5.',proof:['Δx=4−1=3, Δy=2−(−2)=4','d=√(9+16)=√25','=5']},
  {id:'q2',topic:'udaljenost',meta:'udaljenost točke od pravca',text:'d(T(1,2), 3x+4y−5=0) = ?',opts:[{t:'6/5',ok:true},{t:'2/5',ok:false},{t:'6',ok:false},{t:'√(3+4)',ok:false}],c:'✓ Točno. d=|3+8−5|/√(9+16)=6/5.',w:'✗ Netočno. d=|3·1+4·2−5|/√(9+16)=6/5. Kvadriraj a i b!',proof:['|3·1+4·2−5|=|3+8−5|=6','√(3²+4²)=√25=5','d=6/5']},
  {id:'q3',topic:'kruznica',meta:'standardni oblik kružnice',text:'Centar (x+1)²+(y−4)²=9 je:',opts:[{t:'S(1,4)',ok:false},{t:'S(1,−4)',ok:false},{t:'S(−1,4)',ok:true},{t:'S(−1,−4)',ok:false}],c:'✓ Točno. (x+1)²=(x−(−1))² → p=−1. T(−1,4).',w:'✗ Netočno. (x+1)²=(x−(−1))²→p=−1. (y−4)²→q=4. S(−1,4).',proof:['(x+1)²=(x−(−1))² → p=−1','(y−4)² → q=4','Centar S(−1,4)']},
  {id:'q4',topic:'kruznica',meta:'opći oblik kružnice',text:'Centar x²+y²+2x−8y+8=0 je:',opts:[{t:'S(2,−8)',ok:false},{t:'S(−1,4)',ok:true},{t:'S(1,−4)',ok:false},{t:'S(−2,8)',ok:false}],c:'✓ Točno. S=(−D/2,−E/2)=(−1,4).',w:'✗ Netočno. S=(−D/2,−E/2)=(−2/2,−(−8)/2)=(−1,4).',proof:['D=2, E=−8','S=(−D/2,−E/2)','=(−1,4)']},
  {id:'q5',topic:'tangenta',meta:'jednadžba tangente',text:'Tangenta na x²+y²=25 u T(4,3) je:',opts:[{t:'4x+3y=25',ok:true},{t:'3x+4y=25',ok:false},{t:'4x−3y=25',ok:false},{t:'x+y=7',ok:false}],c:'✓ Točno. x₁x+y₁y=r²: 4x+3y=25.',w:'✗ Netočno. Tangenta u T(x₁,y₁): x₁x+y₁y=r². 4x+3y=25.',proof:['Tangenta: x₁x+y₁y=r²','T(4,3), r²=25','4x+3y=25']},
  {id:'q6',topic:'tangenta',meta:'uvjet tangente',text:'Uvjet da je y=2x+k tangenta na x²+y²=5 je:',opts:[{t:'k=±5',ok:true},{t:'k=±√5',ok:false},{t:'k=5',ok:false},{t:'k=±1',ok:false}],c:'✓ Točno. d(O,t)=|k|/√5=√5 → |k|=5 → k=±5.',w:'✗ Netočno. y=2x+k → 2x−y+k=0. d(O,t)=|k|/√5=√5 → k=±5.',proof:['2x−y+k=0; d(O,t)=|k|/√5','√5=|k|/√5 → |k|=5','k=±5']},
  {id:'q7',topic:'sjeciste',meta:'položaj pravca i kružnice',text:'Položaj pravca y=x+5 i kružnice x²+y²=9:',opts:[{t:'2 sjecišta',ok:false},{t:'tangenta',ok:false},{t:'nema sjecišta',ok:true},{t:'pravac prolazi centrom',ok:false}],c:'✓ Točno. d(O,p)=5/√2>3=r → nema sjecišta.',w:'✗ Netočno. d(O,pravac)=|5|/√2≈3.54>3=r → nema zajedničkih točaka.',proof:['x−y+5=0; d(O,p)=|5|/√2','=5/√2≈3.54','3.54>3=r → nema sjecišta']},
  {id:'q8',topic:'sjeciste',meta:'položaj pravac-kružnica',text:'Pravac x+y=6 i kružnica x²+y²=16 su u položaju:',opts:[{t:'2 sjecišta',ok:false},{t:'tangenta (1 sjecište)',ok:false},{t:'nema sjecišta',ok:true},{t:'pravac prolazi centrom',ok:false}],c:'✓ Točno. d(O,p)=|6|/√2=3√2≈4.24>4=r → nema sjecišta.',w:'✗ Netočno. d(O,pravac)=|6|/√2=3√2≈4.24. Jer 4.24>4=r → nema zajedničkih točaka.',proof:['x+y−6=0; d(O,p)=|6|/√(1+1)=6/√2=3√2','3√2≈4.24 > 4=r','nema zajedničkih točaka']},
  {id:'q9',topic:'udaljenost',meta:'A razina · polovište i simetrala',text:'Točka A(2,5) se simetrira po točki S(4,3). Slika A\\' je:',opts:[{t:'(6,1)',ok:true},{t:'(2,1)',ok:false},{t:'(6,8)',ok:false},{t:'(3,4)',ok:false}],c:"✓ Točno. S je polovište AA': A'=(2·4−2,2·3−5)=(6,1).",w:"✗ Netočno. S=(A+A')/2 → A'=2S−A=(8−2,6−5)=(6,1).",proof:["S je polovište AA'","A'=(2·4−2, 2·3−5)","=(6,1)"]},
  {id:'q10',topic:'kruznica',meta:'A razina · dopunjavanje kvadrata',text:'Polumjer x²+y²−6x−8y=0 je:',opts:[{t:'5',ok:true},{t:'10',ok:false},{t:'√5',ok:false},{t:'25',ok:false}],c:'✓ Točno. (x−3)²+(y−4)²=9+16=25 → r=5.',w:'✗ Netočno. Dopuni: (x²−6x+9)+(y²−8y+16)=25 → r=√25=5.',proof:['(x²−6x+9)+(y²−8y+16)=0+9+16','(x−3)²+(y−4)²=25','r=√25=5']},
  {id:'q11',topic:'tangenta',meta:'A razina · tangenta iz točke',text:'Duljina tangente iz T(5,0) na x²+y²=9 je:',opts:[{t:'4',ok:true},{t:'√7',ok:false},{t:'√34',ok:false},{t:'5',ok:false}],c:'✓ Točno. d²=OT²−r²=25−9=16 → d=4.',w:'✗ Netočno. Duljina tangente²=d(T,centar)²−r²=25−9=16 → d=4.',proof:['d(T,O)=5, r=3','Duljina²=25−9=16','Duljina tangente=4']},
  {id:'q12',topic:'sjeciste',meta:'A razina · kružnica i pravac',text:'Kružnica x²+y²=10 i pravac x+y=k ne sijeku se za:',opts:[{t:'k=4',ok:false},{t:'k=6',ok:true},{t:'k=√10',ok:false},{t:'k=√20',ok:false}],c:'✓ Točno. d=|k|/√2>√10 → k²>20 → |k|>2√5≈4.47. k=6: 6>4.47 ✓',w:'✗ Netočno. Uvjet nema sjecišta: d(O,p)>r. |k|/√2>√10 → |k|>2√5≈4.47. Samo k=6>4.47.',proof:['x+y−k=0; d(O,p)=|k|/√2','Uvjet: |k|/√2>√10 → |k|²>20','|k|>2√5≈4.47 → k=6']}
];
var FExp={ud2:'d=√(5²+12²)=√(25+144)=√169=13 — poznata trojka 5-12-13!',kru2:'(x−4)²: p=4. (y+2)²=(y−(−2))²: q=−2. S(4,−2).',tan2:'T(5,0): x₁x+y₁y=r² → 5·x+0·y=25 → x=5.',ud3:'d=|3·0+4·0+10|/√(9+16)=10/5=2.'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P11 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P10 prije nastavka.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}
/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p10_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p10_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P10',pidLower:'p10',title:"Maturiraj.hr \u2014 Mat A \u00b7 P10 \u00b7 Analiti\u010dka Geometrija",subject:'matematika-a',lsKey:'maturiraj_p10_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p10');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P10] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p10"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p10_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p10_prog',String(pct));}catch(e){}}
// �� Complete page for MatChapterViewer (iframe srcDoc) ����������������������
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P10 · Analitička Geometrija</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};