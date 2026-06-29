/**
 * Maturiraj.hr — Mat A · P11
 * Maturiraj.hr — Mat A · P11 · Geometrija Prostora
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
  <button class="sb-item" onclick="navigateChapter('p10')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>10 · Analitička geometrija</button>
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>11 · Geometrija prostora</button>
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
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">geometrija-prostora-tijela-površine-volumeni</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══ L0 ═══ -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 11 od 21 · A razina · geometrija</div>
    <h1 class="hero-title">Geometrija<br><span>Prostora</span></h1>
    <p class="hero-sub">Tijela, površine, volumeni i primjena trigonometrije u prostornim figurama — od kocke do sfere</p>
    <div class="hero-meta"><span class="hchip b">4 teme</span><span class="hchip a">⭐ Redovito na NCVVO ispitu</span><span class="hchip c">~40 min</span></div>
    <div class="pt"><div class="pb" style="width:59%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Prizme i piramide</span><span class="pill p-c">Valjak i stožac</span>
    <span class="pill p-i">Sfera</span><span class="pill p-a">Površina i volumen</span>
    <span class="pill p-v">Dijagonale i visine</span><span class="pill p-r">Sinusov i kosinusov poučak</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Geometrija prostora na maturi nije samo "uvrsti u formulu" — NCVVO kombinira računanje volumena s trigonometrijom, pitagorinim poučkom i udaljenostima.<br><br>Najčešća greška: miješanje formule za <em>površinu</em> i <em>volumen</em>. Površina je u m², volumen u m³ — dimenzija te govori što računaš.<br><br><strong>Kocka i kvadar su temelj. Sve ostalo su varijacije. Nauči ih savršeno i ostatak je lak.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">a³</div><div class="sc-name">Kocka</div><div class="sc-desc">V=a³ · P=6a² · Prostorna dijagonala d=a√3. Temeljna figura.</div></div>
    <div class="sc"><div class="sc-ico si-c">abc</div><div class="sc-name">Kvadar</div><div class="sc-desc">V=abc · P=2(ab+bc+ca) · Dijagonala d=√(a²+b²+c²).</div></div>
    <div class="sc"><div class="sc-ico si-i">Bh</div><div class="sc-name">Prizma/Piramida</div><div class="sc-desc">Prizma: V=B·h · Piramida: V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·B·h. B=površina baze.</div></div>
    <div class="sc"><div class="sc-ico si-a">r²h</div><div class="sc-name">Valjak/Stožac</div><div class="sc-desc">Valjak: V=πr²h · Stožac: V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)πr²h · Oplošje stošca: πrl.</div></div>
    <div class="sc"><div class="sc-ico si-v">r³</div><div class="sc-name">Sfera</div><div class="sc-desc">V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³ · P=4πr². Polukugla: V=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³, P=2πr²+πr².</div></div>
    <div class="sc"><div class="sc-ico si-r">sin/cos</div><div class="sc-name">Trig. u prostoru</div><div class="sc-desc">Sinusov poučak: a/sinA=b/sinB=c/sinC. Kosinusov: a²=b²+c²−2bc·cosA.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Kocka (brid a)</div><div class="cv">V=a³ · P=6a² · Dijagonala plohe=a√2 · Prostorna dijagonala=a√3</div></div>
    <div class="cr"><div class="ck b">Kvadar (a,b,c)</div><div class="cv">V=abc · P=2(ab+bc+ca) · d=√(a²+b²+c²)</div></div>
    <div class="cr"><div class="ck c">Prizma (baza B, visina h)</div><div class="cv">V=B·h · Oplošje=2B+opseg·h · Za trokutnu: B=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·a·ha</div></div>
    <div class="cr"><div class="ck c">Piramida (baza B, visina h)</div><div class="cv">V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·B·h · Oplošje=B+sum(trokutnih lica)</div></div>
    <div class="cr"><div class="ck i">Valjak (r, h)</div><div class="cv">V=πr²h · P=2πr²+2πrh=2πr(r+h)</div></div>
    <div class="cr"><div class="ck i">Stožac (r, h, l)</div><div class="cv">V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)πr²h · Oplošje=πrl+πr²=πr(l+r) · l=√(r²+h²)</div></div>
    <div class="cr"><div class="ck a">Sfera (r)</div><div class="cv">V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³ · P=4πr²</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">Piramida ≠ Prizma! Faktor <span class="frac"><span class="num">1</span><span class="den">3</span></span> vrijedi za piramide i stošce. Ne zaboravi!</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p10')" class="nb">← P10 · Anal. geometrija</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- ═══ L1 ═══ -->
<div class="layer" id="l1">

<!-- 01 KOCKA I KVADAR -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · KOCKA I KVADAR</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — kvadar kao "3D pravokutnik"</div>
  <div class="box-int-txt">Kocka i kvadar su najjednostavnija prostorna tijela — sve plohe su pravokutnici (ili kvadrati). Volumen je "koliko kocki 1×1×1 stane unutra", površina je "koliko papira treba da se omota".<br><br>Prostorna dijagonala kvadara prolazi kroz unutrašnjost tijela od jednog tjemena do suprotnog. Nalazi se dvostrukim primjenom Pitagore: prvo dijagonala baze, pa uz visinu.<br><br><strong>d=√(a²+b²+c²) — zapamti ovako: Pitagora u 3D, sve tri dimenzije pod korijenom!</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">KOCKA — sve formule</span>
  <span class="val">V=a³</span> · <span class="val">P=6a²</span><br>
  <span class="val">Dijagonala plohe=a√2</span> · <span class="val">Prostorna dijagonala=a√3</span><br>
  <span class="cmt">Trik: d=√(a²+a²+a²)=√(3a²)=a√3. Pitagora dvaput!</span>
</div>
<div class="box-for"><span class="box-for-lbl">KVADAR — sve formule</span>
  <span class="val">V=abc</span> · <span class="val">P=2(ab+bc+ca)</span><br>
  <span class="val">Prostorna dijagonala d=√(a²+b²+c²)</span><br>
  <span class="cmt">Površina: 3 para ploha po 2 → 2(ab+bc+ca). Ne zaboravi množiti s 2!</span>
</div>

<!-- KALKULATOR DIJAGONALE -->
<div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator kvadara — upiši dimenzije</span></div>
  <div class="disc-body">
    <div class="disc-row" style="flex-wrap:wrap;gap:6px">
      <span class="disc-lbl">a=</span><input class="disc-in" id="kv-a" type="number" value="3" style="width:55px">
      <span class="disc-lbl">b=</span><input class="disc-in" id="kv-b" type="number" value="4" style="width:55px">
      <span class="disc-lbl">c=</span><input class="disc-in" id="kv-c" type="number" value="5" style="width:55px">
      <button class="disc-btn" onclick="calcKvadar()">Izračunaj →</button>
    </div>
    <div class="disc-result" id="kv-result">Upiši dimenzije i klikni Izračunaj</div>
  </div>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Kocka (svi bridovi a)</div><div class="cmp-body">
    <div class="cmp-row">V = <b>a³</b></div>
    <div class="cmp-row">P = <b>6a²</b></div>
    <div class="cmp-row">d_plohe = a√2</div>
    <div class="cmp-row">d_prostorna = <b>a√3</b></div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Kvadar (a, b, c)</div><div class="cmp-body">
    <div class="cmp-row">V = <b>abc</b></div>
    <div class="cmp-row">P = <b>2(ab+bc+ca)</b></div>
    <div class="cmp-row">d = √(a²+b²+c²)</div>
    <div class="cmp-row">Tri vrste ploha: ab, bc, ca</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — dijagonala dvostrukim Pitagorom</div>
  <div class="box-men-txt">Dijagonala kvadara: korak 1 — dijagonala baze d_b=√(a²+b²). Korak 2 — d_prostorna=√(d_b²+c²)=√(a²+b²+c²).<br>Za kocku: d=√(a²+a²+a²)=√(3a²)=a√3.<br><strong>Kut koji prostorna dijagonala zatvara s plohom baze: tanφ=c/d_baze. Kut s bridom: cosα=a/d_prostorna.</strong></div>
</div>

<div class="sr" id="sr1">
  <div class="sr-head"><div class="sr-title">Kvadar — korak po korak</div><div class="sr-task">Kvadar ima dimenzije 6×3×2. Nađi volumen, površinu i prostornu dijagonalu.</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Volumen</div><div class="sr-txt">V=abc=6·3·2=<strong>36</strong></div></div></div></div>
    <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Površina</div><div class="sr-txt">P=2(ab+bc+ca)=2(18+6+12)=2·36=<strong>72</strong></div></div></div></div>
    <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Prostorna dijagonala</div><div class="sr-txt">d=√(36+9+4)=√49=<strong>7</strong>
      <div class="sr-tryit"><div class="sr-try-lbl">↳ Prostorna dijagonala kocke s bridom a=5?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="d=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','5√3','koc1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — dijagonala kocke</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik traži prostornu dijagonalu kocke a=4:</p>
  <div class="bug-task">d = √(4²+4²) = <span class="wrong">4√2</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, to je dijagonala kocke</div>
    <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: to je dijagonala PLOHE, ne prostorna! d=√(4²+4²+4²)=4√3</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: d=4·<span class="frac"><span class="num">√3</span><span class="den">2</span></span>=2√3</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: d=3·4=12</div>
  </div><div class="bug-expl" id="b1e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — kocka i kvadar</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>Kocka: V=a³, P=6a², d_prostorna=a√3</li>
  <li class="b20-item"><div class="b20-dot"></div>Kvadar: V=abc, P=2(ab+bc+ca), d=√(a²+b²+c²)</li>
  <li class="b20-item"><div class="b20-dot"></div>Dijagonala plohe=√(a²+b²), dijagonala prostora=√(a²+b²+c²)</li>
</ul></div>


<!-- RIJEŠENI PRIMJER -->
<div class="combo">
  <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — kocka i kvadar</div></div>
  <div class="combo-body">
    <div class="combo-task">Kocka ima brid a = 3. Izračunaj oplošje i volumen.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Oplošje kocke: P = 6a² = 6·9 = <strong>54</strong></div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Volumen: V = a³ = 3³ = <strong>27</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Prostorna dijagonala: d = a√3 = 3√3 ≈ 5.20</div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: kocka = kvadar s a=b=c; sve formule iz jedne duljine!</div></div>
    </div>
    <div class="combo-ans">P = 54, V = 27 &nbsp;·&nbsp; Kocka: P=6a², V=a³, d=a√3 — tri formule, jedna vrijednost</div>
  </div>
</div>

<div class="inline-cp" id="icp1">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — kocka i kvadar</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp1q1"><div class="icp-q-text">Volumen kocke brida a=3 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">9</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">18</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">27</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">54</div>
    </div><div class="icp-fb" id="icp1q1fb"></div></div>
    <div class="icp-q" id="icp1q2"><div class="icp-q-text">Prostorna dijagonala kvadara 1×2×2 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">√5</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">3</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">√7</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">5</div>
    </div><div class="icp-fb" id="icp1q2fb"></div></div>
    <div class="icp-q" id="icp1q3"><div class="icp-q-text">Površina kocke brida a=2 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">8</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">16</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">24</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">12</div>
    </div><div class="icp-fb" id="icp1q3fb"></div></div>
    <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na prizme i piramide →</div>
    <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 02 PRIZMA I PIRAMIDA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · PRIZMA I PIRAMIDA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "istegni bazu" vs "sruši prema vrhu"</div>
  <div class="box-int-txt">Prizma: uzmi bilo koji lik (bazu) i "istegni" ga u visinu h. Volumen = površina baze × visina. Kao da slažeš beskonačno tanke slojeve oblika baze.<br><br>Piramida: ista baza, ali vrhovi svih bočnih ploha idu u jednu točku — vrh. Volumen je točno <span class="frac"><span class="num">1</span><span class="den">3</span></span> od prizme iste baze i visine.<br><br><strong>Faktor <span class="frac"><span class="num">1</span><span class="den">3</span></span> za piramidu i stožac nije slučajan — dokaz je integralom, ali zapamti: "trokut je polovina kvadrata" → piramida je trećina prizme.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">PRIZMA I PIRAMIDA — formule</span>
  <span class="val">Prizma: V=B·h</span> <span class="cmt">B=površina baze, h=visina</span><br>
  <span class="val">Prizma: Oplošje=2B+O·h</span> <span class="cmt">O=opseg baze</span><br>
  <span class="val">Piramida: V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·B·h</span> <span class="cmt">isti B i h kao prizma!</span><br>
  <span class="val">Piramida: Oplošje=B+suma bočnih trokuta</span><br>
  <span class="cmt">Trokutna baza: B=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·a·h_a (polovina baze × visina trokuta)</span><br>
  <span class="cmt">Pravilna piramida: sve bočne plohe su jednakokračni trokuti s visinom l (apotema)</span>
</div>
<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Prizma</div><div class="cmp-body">
    <div class="cmp-row">V = <b>B · h</b></div>
    <div class="cmp-row">Oplošje = 2B + O·h</div>
    <div class="cmp-row">Bočna površina = O·h</div>
    <div class="cmp-row">Baze su paralelne i jednake</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Piramida</div><div class="cmp-body">
    <div class="cmp-row">V = <b>(<span class="frac"><span class="num">1</span><span class="den">3</span></span>) · B · h</b></div>
    <div class="cmp-row">Oplošje = B + bočne</div>
    <div class="cmp-row">Bočna = (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·O·l (apotema)</div>
    <div class="cmp-row">Samo jedna baza</div>
  </div></div>
</div>
<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — pronađi pravu visinu piramide</div>
  <div class="box-men-txt">Visina piramide h je <em>okomita</em> na bazu — ide od vrha do podnožja okomice.<br>U pravilnoj četverobridnoj piramidi: brid baze a, brid bočne plohe (bridna visina) b → h=√(b²−(<span class="frac"><span class="num">a</span><span class="den">2</span></span>)²).<br><strong>Ne miješaj h (prava visina) i l (apotema = visina bočnog trokuta). Apotema l=√(h²+(<span class="frac"><span class="num">a</span><span class="den">2</span></span>)²).</strong></div>
</div>
<div class="sr" id="sr2">
  <div class="sr-head"><div class="sr-title">Piramida — korak po korak</div><div class="sr-task">Pravilna četverobridna piramida: baza 6×6, visina h=4. Nađi V i oplošje.</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Volumen</div><div class="sr-txt">B=6²=36, V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·36·4=<strong>48</strong></div></div></div></div>
    <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Apotema bočnog trokuta</div><div class="sr-txt">l=√(h²+(<span class="frac"><span class="num">a</span><span class="den">2</span></span>)²)=√(16+9)=√25=<strong>5</strong></div></div></div></div>
    <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Oplošje</div><div class="sr-txt">Bočna=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·24·5=60. Oplošje=36+60=<strong>96</strong>
      <div class="sr-tryit"><div class="sr-try-lbl">↳ V trokutne prizme: trokut 3-4-5 (površina 6), visina h=10?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="V=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','60','pri1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
</div>
<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — piramida vs prizma</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa V piramide s bazom 4×4 i visinom 6:</p>
  <div class="bug-task">V = 4·4·6 = <span class="wrong">96</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, V=a²·h</div>
    <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: piramida ima faktor <span class="frac"><span class="num">1</span><span class="den">3</span></span>! V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·16·6=32</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: V=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·16·6=48</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: V=4²·√6</div>
  </div><div class="bug-expl" id="b2e"></div>
</div></div>
<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — prizma i piramida</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>Prizma: V=B·h · Piramida: V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·B·h — faktor <span class="frac"><span class="num">1</span><span class="den">3</span></span>!</li>
  <li class="b20-item"><div class="b20-dot"></div>Apotema piramide l=√(h²+(<span class="frac"><span class="num">a</span><span class="den">2</span></span>)²) — visina bočnog trokuta</li>
  <li class="b20-item"><div class="b20-dot"></div>Bočna površina piramide=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·opseg_baze·apotema</li>
</ul></div>

<!-- RIJEŠENI PRIMJER -->
<div class="combo">
  <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — pravilna četverostrana piramida</div></div>
  <div class="combo-body">
    <div class="combo-task">Pravilna piramida: kvadratna baza a=4, visina h=3. Izračunaj volumen i visinu bočnog trokuta.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Volumen: V = (1/3)·a²·h = (1/3)·16·3 = <strong>16</strong></div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Apotema (visina bočnog trokuta): l = √(h² + (a/2)²) = √(9+4) = <strong>√13</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Bočna površina: 4·(1/2)·a·l = 2·4·√13 = <strong>8√13</strong></div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: uvijek crtaj poprečni presjek — h, apotema i pola baze tvore pravi trokut</div></div>
    </div>
    <div class="combo-ans">V = 16, l = √13 &nbsp;·&nbsp; Pitagorin poučak u 3D: h² + (a/2)² = apotema²</div>
  </div>
</div>

<div class="inline-cp" id="icp2">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — prizma i piramida</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp2q1"><div class="icp-q-text">V piramide s bazom 3×3 i visinom 4 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">36</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">12</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">18</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">6</div>
    </div><div class="icp-fb" id="icp2q1fb"></div></div>
    <div class="icp-q" id="icp2q2"><div class="icp-q-text">Trokutna prizma s bazom B=10 i visinom h=5 ima V=</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">250</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">50</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">25</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">100</div>
    </div><div class="icp-fb" id="icp2q2fb"></div></div>
    <div class="icp-q" id="icp2q3"><div class="icp-q-text">Apotema pravilne piramide (a=6, h=4) je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">4</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">5</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">√13</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">√52</div>
    </div><div class="icp-fb" id="icp2q3fb"></div></div>
    <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na valjak, stožac i sferu →</div>
    <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 03 VALJAK, STOŽAC, SFERA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · VALJAK, STOŽAC I SFERA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — π se uvijek pojavljuje</div>
  <div class="box-int-txt">Valjak je "prizma s kružnom bazom" — V=πr²h (površina kruga × visina). Stožac je "piramida s kružnom bazom" — V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)πr²h.<br><br>Izvodnica l stošca je hipotenuza pravokutnog trokuta s katetama r i h: l=√(r²+h²). Ovo je ključno za oplošje stošca.<br><br><strong>Sfera: V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³ i P=4πr². Lako za zapamtiti: V derivira u P · V'=4πr²=P.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">VALJAK, STOŽAC, SFERA — sve formule</span>
  <span class="val">Valjak (r,h): V=πr²h · P=2πr²+2πrh=2πr(r+h)</span><br>
  <span class="val">Stožac (r,h,l): V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)πr²h · Oplošje=πrl+πr²=πr(l+r)</span><br>
  <span class="val">l=√(r²+h²)</span> <span class="cmt">— izvodnica (Pitagora!)</span><br>
  <span class="val">Sfera (r): V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³ · P=4πr²</span><br>
  <span class="cmt">Veza: Stožac=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·Valjak za isti r i h. Sfera upisana u valjak r=h/2: V_sfere=(<span class="frac"><span class="num">2</span><span class="den">3</span></span>)·V_valjka</span>
</div>

<!-- KALKULATOR -->
<div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Kalkulator rotacijskih tijela</span></div>
  <div class="disc-body">
    <div class="disc-row" style="flex-wrap:wrap;gap:6px;margin-bottom:8px">
      <button class="disc-btn on" id="rot-val" onclick="setRot('valjak',this)">Valjak</button>
      <button class="disc-btn" id="rot-sto" onclick="setRot('stožac',this)">Stožac</button>
      <button class="disc-btn" id="rot-sfe" onclick="setRot('sfera',this)">Sfera</button>
    </div>
    <div class="disc-row" style="flex-wrap:wrap;gap:6px">
      <span class="disc-lbl">r=</span><input class="disc-in" id="rot-r" type="number" value="3" style="width:55px">
      <span class="disc-lbl" id="rot-h-lbl">h=</span><input class="disc-in" id="rot-h" type="number" value="4" style="width:55px">
      <button class="disc-btn" onclick="calcRot()">Izračunaj →</button>
    </div>
    <div class="disc-result" id="rot-result">Odaberi tijelo i klikni Izračunaj</div>
  </div>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Valjak vs Stožac</div><div class="cmp-body">
    <div class="cmp-row">Isti r i h</div>
    <div class="cmp-row">V_stošca = <b>(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)</b> V_valjka</div>
    <div class="cmp-row">Oplošje stošca ≠ valjka</div>
    <div class="cmp-row">Stožac ima izvodnica l</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Sfera — posebna</div><div class="cmp-body">
    <div class="cmp-row">V = (<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³</div>
    <div class="cmp-row">P = 4πr²</div>
    <div class="cmp-row">Nema "visine" — samo r</div>
    <div class="cmp-row">V' = dV/dr = P ✓</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — izvodnica stošca</div>
  <div class="box-men-txt">Zamisti stožac "rasklopi" u ravninu — dobiješ isječak kruga polumjera l (izvodnica). Luk tog isječka = opseg baze = 2πr.<br>Bočna površina stošca = πrl (ploha isječka).<br><strong>Pitagora u stocu: l²=r²+h². Pazi: u zadatku može biti zadano l ili h — nađi nepoznato prije računanja!</strong></div>
</div>

<div class="sr" id="sr3">
  <div class="sr-head"><div class="sr-title">Stožac — korak po korak</div><div class="sr-task">Stožac: r=3, h=4. Nađi V, l i oplošje.</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Izvodnica</div><div class="sr-txt">l=√(r²+h²)=√(9+16)=√25=<strong>5</strong></div></div></div></div>
    <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Volumen</div><div class="sr-txt">V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·π·9·4=12π≈<strong>37.70</strong></div></div></div></div>
    <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Oplošje</div><div class="sr-txt">Oplošje=πrl+πr²=π·3·5+π·9=15π+9π=24π≈<strong>75.40</strong>
      <div class="sr-tryit"><div class="sr-try-lbl">↳ V sfere s r=3?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="V=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','36π','sfe1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — oplošje stošca</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa oplošje stošca r=3, h=4:</p>
  <div class="bug-task">Oplošje = πr·<span class="wrong">h</span>+πr² = 12π+9π = 21π</div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, h je visina bočnog trokuta</div>
    <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: bočna površina koristi izvodnica l=√(r²+h²)=5, ne h! Oplošje=πrl+πr²=15π+9π=24π</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: oplošje=πr²h</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: l=r+h=7, bočna=21π</div>
  </div><div class="bug-expl" id="b3e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — valjak, stožac, sfera</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>Stožac: V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)πr²h · l=√(r²+h²) · Oplošje=πrl+πr²</li>
  <li class="b20-item"><div class="b20-dot"></div>Valjak: V=πr²h · Stožac=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·Valjak za isti r,h</li>
  <li class="b20-item"><div class="b20-dot"></div>Sfera: V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³ · P=4πr²</li>
</ul></div>


<!-- RIJEŠENI PRIMJER -->
<div class="combo">
  <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — valjak</div></div>
  <div class="combo-body">
    <div class="combo-task">Valjak ima polumjer r = 3 i visinu h = 5. Izračunaj oplošje i volumen.</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Osnova (krug): A = r²π = 9π</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Oplošje: P = 2·r²π + 2rπh = 2·9π + 2·3·5π = 18π + 30π = <strong>48π</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Volumen: V = r²π·h = 9π·5 = <strong>45π</strong></div></div>
      <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: oplošje = 2 baze + plašt (= 2πr·h); volumen = baza × visina</div></div>
    </div>
    <div class="combo-ans">P = 48π, V = 45π &nbsp;·&nbsp; Plašt valjka razvijen je pravokutnik: 2πr × h</div>
  </div>
</div>

<div class="inline-cp" id="icp3">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — rotacijska tijela</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp3q1"><div class="icp-q-text">V valjka r=2, h=5 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">10π</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">20π</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">40π</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">4π</div>
    </div><div class="icp-fb" id="icp3q1fb"></div></div>
    <div class="icp-q" id="icp3q2"><div class="icp-q-text">Izvodnica stošca r=5, h=12 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">√17</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">13</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">17</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">√119</div>
    </div><div class="icp-fb" id="icp3q2fb"></div></div>
    <div class="icp-q" id="icp3q3"><div class="icp-q-text">P sfere r=1 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">2π</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">4π</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)π</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">π</div>
    </div><div class="icp-fb" id="icp3q3fb"></div></div>
    <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
    <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- A RAZINA + DRILL + NCVVO + CP -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
<div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — sfera upisana u kocku</div></div><div class="combo-body">
  <div class="combo-task">Kocka ima brid a=6. Nađi polumjer upisane sfere i njezin volumen.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Sfera upisana u kocku: dodiruje svaku plohu. Promjer sfere = brid kocke → 2r=a → r=3</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)π·27=36π≈113.1</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Omjer V_sfere/V_kocke=36π/216=π/6≈0.524 — sfera "popuni" 52.4% kocke</div></div>
  </div><div class="combo-ans">r=3, V=36π≈113.1</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — trokut i trigonometrija u prostoru</div></div><div class="combo-body">
  <div class="combo-task">Pravilna trokutna prizma: stranica baze a=4, visina h=6. Nađi prostornu dijagonalu (od tjemena baze do suprotnog tjemena gornje baze).</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Osnova je jednakostranični trokut stranice a=4. Dva tjemena baze (A i B) udaljena su točno za duljinu brida: |AB| = a = 4.</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Najdulja daljina na trokutnoj bazi: između tjemena A i polovišta nasuprotne stranice BC → medijanom m_a=2√3≈3.46. Ali između dvaju tjemena = brid a=4.</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Prostorna dijagonala od tjemena A (donje) do tjemena B' (gornje, nije iznad A): d=√(a²+h²)=√(16+36)=√52=2√13≈7.21</div></div>
  </div><div class="combo-ans">d=2√13≈7.21</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — volumen kompozitnih tijela</div></div><div class="combo-body">
  <div class="combo-task">Cilindar r=4, h=10 ima sfernu kapu polumjera r=4 na vrhu. Nađi ukupni volumen.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">V_cilindra=π·16·10=160π</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Polu-sfera (hemisfera) r=4: V=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)π·64=(<span class="frac"><span class="num">128</span><span class="den">3</span></span>)π</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Ukupno=160π+(<span class="frac"><span class="num">128</span><span class="den">3</span></span>)π=(480+128)<span class="frac"><span class="num">π</span><span class="den">3</span></span>=(<span class="frac"><span class="num">608</span><span class="den">3</span></span>)π≈636.7</div></div>
  </div><div class="combo-ans">V=(<span class="frac"><span class="num">608</span><span class="den">3</span></span>)π≈636.7</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — sinusov poučak u trokutu trokutnog tijela</div></div><div class="combo-body">
  <div class="combo-task">U trokutu ABC: a=7, b=5, kut C=60°. Nađi stranicu c (kosinusov poučak) i površinu trokuta.</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">c²=a²+b²−2ab·cosC=49+25−2·7·5·(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)=74−35=39 → c=√39</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">P=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·a·b·sinC=(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)·7·5·(<span class="frac"><span class="num">√3</span><span class="den">2</span></span>)=35√<span class="frac"><span class="num">3</span><span class="den">4</span></span>≈15.16</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Sinusov poučak provjera: a/sinA=c/sinC → sinA=a·sinC/c=7·(<span class="frac"><span class="num">√3</span><span class="den">2</span></span>)/√39=7√3/(2√39)</div></div>
  </div><div class="combo-ans">c=√39≈6.24 · P=35√<span class="frac"><span class="num">3</span><span class="den">4</span></span>≈15.16</div>
</div></div>

<!-- DRILL -->
<div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
  <div class="drill-body">
    <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
    <div class="drill-q" id="dr-q">Volumen kocke brida a je a³</div>
    <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
    <div class="drill-fb" id="dr-fb"></div>
    <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
    <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
  </div>
</div>

<!-- NCVVO -->
<div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Piramida · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-pir">piramida</span></div>
    <div class="ncvvo-real-q">Pravilna 4-bridna piramida: baza 4×4, bočni brid b=√17. Nađi V.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne nađu visinu — zbrku bridni brid s visinom</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">Polovina dijagonale baze=√(2²+2²)=2√2. h=√(b²−(a√<span class="frac"><span class="num">2</span><span class="den">2</span></span>)²)=√(17−8)=3<br>V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·16·3=<strong>16</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Valjak/stožac · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-val">valjak</span></div>
    <div class="ncvvo-real-q">Valjak i stožac iste baze r=3 i visine h=5. Koliko puta je V_valjka veći od V_stošca?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>računaju omjer kao <span class="frac"><span class="num">2</span><span class="den">3</span></span> umjesto 3</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">V_val=45π, V_sto=15π. Omjer=45π/15π=<strong>3</strong>. Valjak je uvijek 3× veći!</div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Dijagonala · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-dij">dijagonala</span></div>
    <div class="ncvvo-real-q">Kvadar a=2, b=3, c=6. Nađi prostornu dijagonalu i kut s plohom c.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>računaju d=√(a+b+c) umjesto √(a²+b²+c²)</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">d=√(4+9+36)=√49=7. Dijagonala plohe ab=√13. cosα=√<span class="frac"><span class="num">13</span><span class="den">7</span></span>, α≈42.8°</div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Sfera · ~35% netočnih<span class="ncvvo-live-stat neutral" id="nlive-sfe">sfera</span></div>
    <div class="ncvvo-real-q">Površina sfere je 100π. Nađi volumen.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne izvedu r iz P=4πr² prije računanja V</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">4πr²=100π → r²=25 → r=5. V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)π·125=<strong>(<span class="frac"><span class="num">500</span><span class="den">3</span></span>)π≈523.6</strong></div>
  </div>
</div></div>

<!-- CHECKPOINT -->
<div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
  <ul class="cp-list">
    <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Kocka: V=a³, P=6a², d=a√3</li>
    <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Piramida: V=(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)·B·h — faktor <span class="frac"><span class="num">1</span><span class="den">3</span></span>!</li>
    <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Stožac: l=√(r²+h²), Oplošje=πrl+πr²</li>
    <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Sfera: V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³, P=4πr²</li>
    <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Kosinusov poučak: c²=a²+b²−2ab·cosC</li>
  </ul>
  <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 12!</span></div>
</div>

<div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
  <li class="mi"><div class="mi-dot"></div><span><b>Piramida i stožac: faktor <span class="frac"><span class="num">1</span><span class="den">3</span></span>!</b> Prizma i valjak: nema faktora.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Izvodnica stošca: l=√(r²+h²).</b> Pitagora — uvijek!</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Prostorna dijagonala kvadara: d=√(a²+b²+c²).</b></span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Sfera: P=4πr², V=(<span class="frac"><span class="num">4</span><span class="den">3</span></span>)πr³.</b> Iz P izvedi r, pa V.</span></li>
</ul></div>

<div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">P11 se nadovezuje na 4 poglavlja</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P09</span><span class="cn-item-title">Trigonometrija</span></div><div class="cn-item-desc">Sinusov i kosinusov poučak — računanje stranica i kutova trokuta u prostoru.</div><div class="cn-item-arrow">→ trig. u 3D tijelima</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P10</span><span class="cn-item-title">Analitička geometrija</span></div><div class="cn-item-desc">Koordinatni pristup tijelima — ravnine, udaljenosti u prostoru.</div><div class="cn-item-arrow">→ geometrija u koordinatama</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">Volumen rotacijskih tijela integracijom — napredna primjena.</div><div class="cn-item-arrow">→ volumen integracijom</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P19</span><span class="cn-item-title">Složeni zadaci</span></div><div class="cn-item-desc">Matura kombinira geometriju s analizom — optimizacija volumena.</div><div class="cn-item-arrow">→ optimizacijski zadaci</div></div>
  </div>
</div>

<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Kocka i kvadar</div><div class="cv">Kocka: V=a&sup3;, P=6a&sup2;, d=a&radic;3. &nbsp; Kvadar: V=abc, P=2(ab+bc+ca), d=&radic;(a&sup2;+b&sup2;+c&sup2;).</div></div>
  <div class="cr"><div class="ck c">Prizma i piramida</div><div class="cv">Prizma: V=B&middot;h (B=površina baze). &nbsp; Piramida: V=B&middot;h/3. Obje: P=2B + Pobočna.</div></div>
  <div class="cr"><div class="ck i">Valjak i stožac</div><div class="cv">Valjak: V=&pi;r&sup2;h, P=2&pi;r(r+h). &nbsp; Stožac: V=&pi;r&sup2;h/3, s=&radic;(r&sup2;+h&sup2;), P=&pi;r(r+s).</div></div>
  <div class="cr"><div class="ck a">Sfera</div><div class="cv">V=4&pi;r&sup3;/3, &nbsp; P=4&pi;r&sup2;. Bez h — samo r!</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">Stožac: pobočna P=&pi;r<strong>s</strong> (s=izvodnica), ne &pi;rh! Uvijek nadi s=&radic;(r&sup2;+h&sup2;) prije računanja po boč. pl.</div></div>
</div>
<div class="nav-row"><span class="nb" onclick="sw(0)">← Pregled</span><span class="nb primary" onclick="sw(2)">Vježbaj →</span></div>
</div>
<!-- ═══ L2 ═══ -->
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
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · kocka</div><div class="fitb-sent">Prostorna dijagonala kocke a=2 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="d=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','2√3','koc2')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · piramida</div><div class="fitb-sent">V piramide B=12, h=5 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="V=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','20','pir1')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · stožac</div><div class="fitb-sent">Izvodnica stošca r=6, h=8 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="l=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','10','sto1')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · sfera</div><div class="fitb-sent">P sfere r=2 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="P=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','16π','sfe2')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p14')" class="nb primary">Sljedeće poglavlje →</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[59,62,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p11_tab',i);}catch(e){}
}
/* KALKULATOR KVADAR */
function calcKvadar(){
  var a=parseFloat(document.getElementById('kv-a').value),b=parseFloat(document.getElementById('kv-b').value),c=parseFloat(document.getElementById('kv-c').value);
  var r=document.getElementById('kv-result');
  if([a,b,c].some(isNaN)||a<=0||b<=0||c<=0){r.innerHTML='<span style="color:var(--red)">Upiši pozitivne vrijednosti.</span>';return;}
  var V=a*b*c,P=2*(a*b+b*c+c*a),d=Math.sqrt(a*a+b*b+c*c);
  var fmt=function(v){return Math.round(v*100)/100;};
  r.innerHTML='V = <strong>'+fmt(V)+'</strong> · P = <strong>'+fmt(P)+'</strong> · d = √('+fmt(a*a)+'+'+fmt(b*b)+'+'+fmt(c*c)+') = <strong>'+fmt(d)+'</strong>';
}
/* KALKULATOR ROTACIJSKA TIJELA */
var rotTijelo='valjak';
function setRot(t,btn){
  rotTijelo=t;
  document.querySelectorAll('[id^="rot-"]').forEach(function(b){if(b.tagName==='BUTTON')b.classList.remove('on');});
  btn.classList.add('on');
  var hl=document.getElementById('rot-h-lbl');var hi=document.getElementById('rot-h');
  if(t==='sfera'){hl.style.display='none';hi.style.display='none';}else{hl.style.display='';hi.style.display='';}
}
function calcRot(){
  var r=parseFloat(document.getElementById('rot-r').value),h=parseFloat(document.getElementById('rot-h').value);
  var res=document.getElementById('rot-result');
  var fmt=function(v){return Math.round(v*100)/100;};
  var pi=Math.PI;
  if(rotTijelo==='valjak'){
    if(isNaN(r)||isNaN(h)||r<=0||h<=0){res.innerHTML='<span style="color:var(--red)">Upiši pozitivne vrijednosti.</span>';return;}
    var V=pi*r*r*h,P=2*pi*r*(r+h);
    res.innerHTML='V = πr²h = <strong>'+fmt(V)+'</strong> ≈ '+fmt(V)+'<br>P = 2πr(r+h) = <strong>'+fmt(P)+'</strong>';
  } else if(rotTijelo==='stožac'){
    if(isNaN(r)||isNaN(h)||r<=0||h<=0){res.innerHTML='<span style="color:var(--red)">Upiši pozitivne vrijednosti.</span>';return;}
    var l=Math.sqrt(r*r+h*h),V=(1/3)*pi*r*r*h,Op=pi*r*l+pi*r*r;
    res.innerHTML='l = √(r²+h²) = <strong>'+fmt(l)+'</strong><br>V = (1/3)πr²h = <strong>'+fmt(V)+'</strong><br>Oplošje = πrl+πr² = <strong>'+fmt(Op)+'</strong>';
  } else {
    if(isNaN(r)||r<=0){res.innerHTML='<span style="color:var(--red)">Upiši pozitivan polumjer.</span>';return;}
    var V=(4/3)*pi*r*r*r,P=4*pi*r*r;
    res.innerHTML='V = (4/3)πr³ = <strong>'+fmt(V)+'</strong><br>P = 4πr² = <strong>'+fmt(P)+'</strong>';
  }
}
/* STEP REVEAL */
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}
var tryExp={koc1:'d=√(5²+5²+5²)=√(75)=5√3. Kocka: d=a√3 uvijek!',pri1:'V=B·h=6·10=60. Trokutna prizma: B=površina trokuta=6, h=10.',sfe1:'V=(4/3)π·3³=(4/3)π·27=36π≈113.1'};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/π/g,'pi');};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
/* DRILL */
var drData=[
  {q:'Volumen kocke brida a je a³',ans:true,tag:'kocka',exp:'Točno! V=a·a·a=a³ ✓'},
  {q:'Prostorna dijagonala kocke je a√2',ans:false,tag:'kocka',exp:'Netočno! a√2 je dijagonala PLOHE. Prostorna dijagonala kocke je a√3!'},
  {q:'Piramida ima faktor 1/3 u formuli za volumen',ans:true,tag:'piramida',exp:'Točno! V=(1/3)·B·h. Stožac isto ima 1/3. ✓'},
  {q:'Izvodnica stošca l=r+h',ans:false,tag:'stožac',exp:'Netočno! l=√(r²+h²) — Pitagora! l≠r+h.'},
  {q:'V sfere=(4/3)πr³',ans:true,tag:'sfera',exp:'Točno! V=(4/3)πr³. P=4πr². ✓'},
  {q:'Valjak je 3 puta veći od stošca iste baze i visine',ans:true,tag:'valjak/stožac',exp:'Točno! V_val=πr²h, V_sto=(1/3)πr²h → omjer=3 ✓'},
  {q:'Površina kocke brida a je 4a²',ans:false,tag:'kocka',exp:'Netočno! Kocka ima 6 ploha → P=6a². (4a² bi bila "oomotač" bez baza).'},
  {q:'Oplošje stošca=πr(l+r)',ans:true,tag:'stožac',exp:'Točno! πrl+πr²=πr(l+r). Bočna πrl + baza πr². ✓'},
  {q:'Sfera polumjera r ima istu površinu kao kvadrat stranice 2r√π',ans:true,tag:'sfera',exp:'Točno! P=4πr². Kvadrat (2r√π)²=4πr². Geometrijska veza! ✓'},
  {q:'Kvadar 2×3×4 ima prostornu dijagonalu √(4+9+16)=√29',ans:true,tag:'kvadar',exp:'Točno! d=√(a²+b²+c²)=√29 ✓'},
  {q:'V trokutne piramide=V·(1/3) odgovarajuće trokutne prizme',ans:true,tag:'piramida',exp:'Točno! Za isti B i h, V_piramide=(1/3)V_prizme — uvijek! ✓'},
  {q:'P valjka=2πr²+2πr',ans:false,tag:'valjak',exp:'Netočno! P=2πr²+2πrh=2πr(r+h). Nedostaje h u bočnom dijelu!'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}
/* BUG */
var bugDone={};var bugExp={b1:'✓ Točno! a√2=dijagonala plohe. Prostorna dijagonala=√(a²+a²+a²)=a√3. Dvostruki Pitagora!',b2:'✓ Točno! Faktor 1/3 je ključan za piramidu. V=(1/3)·B·h=(1/3)·16·6=32.',b3:'✓ Točno! Bočna površina stošca=πrl, gdje je l izvodnica, ne h. l=√(9+16)=5 → bočna=15π. Oplošje=15π+9π=24π.'};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
/* ICP */
var icpAnswered={};var icpFeedback={
  icp1:{q1:{ok:'✓ Točno! V=a³=3³=27',ng:'✗ Netočno. V=a·a·a=3³=27'},q2:{ok:'✓ Točno! d=√(1+4+4)=√9=3',ng:'✗ Netočno. d=√(1²+2²+2²)=√9=3'},q3:{ok:'✓ Točno! P=6a²=6·4=24',ng:'✗ Netočno. P=6a²=6·2²=24'}},
  icp2:{q1:{ok:'✓ Točno! V=(1/3)·9·4=12',ng:'✗ Netočno. V=(1/3)·B·h=(1/3)·9·4=12. Faktor 1/3!'},q2:{ok:'✓ Točno! V=B·h=10·5=50',ng:'✗ Netočno. Prizma: V=B·h=10·5=50. Nema faktora 1/3!'},q3:{ok:'✓ Točno! l=√(h²+(a/2)²)=√(16+9)=5',ng:'✗ Netočno. Apotema l=√(h²+(a/2)²)=√(16+9)=√25=5'}},
  icp3:{q1:{ok:'✓ Točno! V=π·4·5=20π',ng:'✗ Netočno. V=πr²h=π·2²·5=20π'},q2:{ok:'✓ Točno! l=√(25+144)=√169=13 — trojka 5-12-13!',ng:'✗ Netočno. l=√(r²+h²)=√(25+144)=√169=13'},q3:{ok:'✓ Točno! P=4π·1²=4π',ng:'✗ Netočno. P=4πr²=4π·1=4π'}}
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';})}
/* CHECKPOINT */
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
/* ADAPTIVE */
var topicErrors={kocka:0,piramida:0,stožac:0,sfera:0};
var topicHints={kocka:'Greške s kockom! V=a³, P=6a², d_prostorna=a√3 (ne a√2!)',piramida:'Greške s piramidom! V=(1/3)·B·h — faktor 1/3! Apotema l=√(h²+(a/2)²).',stožac:'Greške sa stošcem! Izvodnica l=√(r²+h²). Oplošje=πrl+πr², ne πrh!',sfera:'Greške sa sferom! V=(4/3)πr³, P=4πr². Iz P=4πr² izvedi r, pa V.'};
var qTopics={q1:'kocka',q2:'kocka',q3:'piramida',q4:'piramida',q5:'stožac',q6:'stožac',q7:'sfera',q8:'sfera',q9:'kocka',q10:'piramida',q11:'stožac',q12:'sfera'};
var ncvvoTopicMap={'nlive-pir':['q3','q4','q10'],'nlive-val':['q5','q6','q11'],'nlive-dij':['q1','q2','q9'],'nlive-sfe':['q7','q8','q12']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*8);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*4);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;tabProgress[1]=Math.min(59+drillPts+icpPts+cpPts,68);tabProgress[2]=Math.min(59+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p11_prog',p);}catch(e){}}
/* SOUND */
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(freq,dur,vol,type){var ctx=getAudio();if(!ctx)return;var osc=ctx.createOscillator();var gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.type=type||'sine';osc.frequency.setValueAtTime(freq,ctx.currentTime);gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);}
function soundCorrect(){playTone(880,0.12,0.12,'sine');setTimeout(function(){playTone(1100,0.15,0.10,'sine');},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12,'sine');},i*100);});}
/* TIMER */
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90;
function setExamMode(mode,el){examMode=mode;document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});el.classList.add('active');if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}else{document.getElementById('exam-timer').style.display='none';stopTimer();}}
function drawTimerCanvas(secs,max){var c=document.getElementById('timer-canvas');if(!c)return;var ctx=c.getContext('2d');var r=28,cx=32,cy=32;ctx.clearRect(0,0,64,64);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();var pct=secs/max;var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();var numEl=document.getElementById('et-num');if(numEl)numEl.textContent=secs;var wrap=document.getElementById('exam-timer');if(wrap){wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);wrap.classList.toggle('urgent',pct<=0.2);}}
function startTimer(){stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);timerInterval=setInterval(function(){timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);if(timerSeconds>0&&timerSeconds<=10)soundTick();if(timerSeconds<=0){stopTimer();soundTimeUp();}},1000);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}
/* QUIZ */
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'kocka',meta:'kocka — volumen i dijagonala',text:'Prostorna dijagonala kocke brida 4 je:',opts:[{t:'4√2',ok:false},{t:'8',ok:false},{t:'4√3',ok:true},{t:'4√5',ok:false}],c:'✓ Točno. d=a√3=4√3.',w:'✗ Netočno. 4√2 je dijagonala plohe. Prostorna: d=√(4²+4²+4²)=4√3.',proof:['d=√(a²+a²+a²)=√(3a²)','=a√3','=4√3']},
  {id:'q2',topic:'kocka',meta:'kvadar — površina',text:'P kvadara 2×3×5 je:',opts:[{t:'30',ok:false},{t:'62',ok:true},{t:'60',ok:false},{t:'31',ok:false}],c:'✓ Točno. P=2(6+15+10)=2·31=62.',w:'✗ Netočno. P=2(ab+bc+ca)=2(6+15+10)=62.',proof:['ab=6, bc=15, ca=10','P=2(6+15+10)=2·31','=62']},
  {id:'q3',topic:'piramida',meta:'piramida — volumen',text:'V pravilne piramide baze 6×6 i visine 4 je:',opts:[{t:'144',ok:false},{t:'72',ok:false},{t:'48',ok:true},{t:'24',ok:false}],c:'✓ Točno. V=(1/3)·36·4=48.',w:'✗ Netočno. V=(1/3)·B·h=(1/3)·36·4=48. Faktor 1/3!',proof:['B=6²=36','V=(1/3)·36·4','=48']},
  {id:'q4',topic:'piramida',meta:'piramida — apotema',text:'Apotema pravilne piramide (a=8, h=3) je:',opts:[{t:'√(9+16)=5',ok:true},{t:'√(9+64)=√73',ok:false},{t:'√(3+4)=√7',ok:false},{t:'√(9+8)=√17',ok:false}],c:'✓ Točno. l=√(h²+(a/2)²)=√(9+16)=5.',w:'✗ Netočno. l=√(h²+(a/2)²)=√(9+4²)=√(9+16)=5.',proof:['a/2=4','l=√(h²+(a/2)²)=√(9+16)','=√25=5']},
  {id:'q5',topic:'stožac',meta:'stožac — izvodnica',text:'Izvodnica stošca r=5, h=12 je:',opts:[{t:'√17',ok:false},{t:'17',ok:false},{t:'13',ok:true},{t:'√(17)',ok:false}],c:'✓ Točno. l=√(25+144)=√169=13.',w:'✗ Netočno. l=√(r²+h²)=√(25+144)=13. Trojka 5-12-13!',proof:['l=√(r²+h²)','=√(25+144)=√169','=13']},
  {id:'q6',topic:'stožac',meta:'stožac — oplošje',text:'Oplošje stošca r=3, l=5 je:',opts:[{t:'15π',ok:false},{t:'24π',ok:true},{t:'9π',ok:false},{t:'8π',ok:false}],c:'✓ Točno. Oplošje=πrl+πr²=15π+9π=24π.',w:'✗ Netočno. Oplošje=πrl+πr²=π·3·5+π·9=15π+9π=24π.',proof:['Bočna=πrl=15π','Baza=πr²=9π','Oplošje=24π']},
  {id:'q7',topic:'sfera',meta:'sfera — površina',text:'P sfere r=3 je:',opts:[{t:'9π',ok:false},{t:'12π',ok:false},{t:'36π',ok:true},{t:'(4/3)·27π',ok:false}],c:'✓ Točno. P=4πr²=4π·9=36π.',w:'✗ Netočno. P=4πr²=4·π·9=36π. Ne miješaj s V=(4/3)πr³=36π (slučajno isto za r=3)!',proof:['P=4πr²','=4π·3²=4π·9','=36π']},
  {id:'q8',topic:'sfera',meta:'sfera — volumen',text:'V sfere promjera 6 je:',opts:[{t:'36π',ok:true},{t:'72π',ok:false},{t:'288π',ok:false},{t:'216π',ok:false}],c:'✓ Točno. r=3, V=(4/3)π·27=36π.',w:'✗ Netočno. Promjer=6→r=3. V=(4/3)π·27=36π.',proof:['r=6/2=3','V=(4/3)π·3³=(4/3)π·27','=36π']},
  {id:'q9',topic:'kocka',meta:'A razina · kocka i dijagonala',text:'Kocka ima prostornu dijagonalu d=6√3. Volumen kocke je:',opts:[{t:'216',ok:true},{t:'108',ok:false},{t:'36√3',ok:false},{t:'648',ok:false}],c:'✓ Točno. d=a√3=6√3 → a=6. V=6³=216.',w:'✗ Netočno. d=a√3 → a=d/√3=6√3/√3=6. V=a³=216.',proof:['d=a√3 → a=6√3/√3=6','V=a³','=6³=216']},
  {id:'q10',topic:'piramida',meta:'A razina · oplošje piramide',text:'Pravilna 4-bridna piramida: baza 6×6, apotema l=5. Oplošje=',opts:[{t:'60',ok:false},{t:'96',ok:true},{t:'120',ok:false},{t:'36',ok:false}],c:'✓ Točno. Baza=36. Bočna: 4·(1/2)·6·5=60. Oplošje=36+60=96.',w:'✗ Netočno. Oplošje=baza+bočna. Baza=6²=36. Bočna=4·(1/2)·a·l=4·15=60. Oplošje=96.',proof:['Baza=6²=36','Bočna=4×(1/2)×6×5=60','Oplošje=36+60=96']},
  {id:'q11',topic:'stožac',meta:'A razina · stožac i valjak',text:'Stožac i valjak imaju isti r=4, h=6. Omjer V_val/V_sto=',opts:[{t:'1/3',ok:false},{t:'2',ok:false},{t:'3',ok:true},{t:'1/2',ok:false}],c:'✓ Točno. V_val=96π, V_sto=32π. Omjer=3 uvijek!',w:'✗ Netočno. V_val=πr²h=96π, V_sto=(1/3)πr²h=32π. Omjer=96/32=3.',proof:['V_val=π·16·6=96π','V_sto=(1/3)·96π=32π','Omjer=3']},
  {id:'q12',topic:'sfera',meta:'A razina · sfera iz površine',text:'P sfere=100π. V=',opts:[{t:'(500/3)π',ok:true},{t:'(250/3)π',ok:false},{t:'500π',ok:false},{t:'(100/3)π',ok:false}],c:'✓ Točno. 4πr²=100π→r=5. V=(4/3)π·125=(500/3)π.',w:'✗ Netočno. 4πr²=100π→r²=25→r=5. V=(4/3)π·125=(500/3)π.',proof:['4πr²=100π→r=5','V=(4/3)πr³=(4/3)π·125','=(500/3)π']}
];
var FExp={koc2:'d=a√3=2√3. Kocka: prostorna dijagonala uvijek a√3.',pir1:'V=(1/3)·B·h=(1/3)·12·5=20. Faktor 1/3 za piramidu!',sto1:'l=√(r²+h²)=√(36+64)=√100=10. Trojka 6-8-10!',sfe2:'P=4πr²=4π·4=16π.'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P14 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P11 prije nastavka.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/π/g,'pi');};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}
/* RESTORE TAB (mora biti na kraju) */
(function(){try{var s=sessionStorage.getItem('p11_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p11_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P11',pidLower:'p11',title:"Maturiraj.hr \u2014 Mat A \u00b7 P11 \u00b7 Geometrija Prostora",subject:'matematika-a',lsKey:'maturiraj_p11_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p11');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P11] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p11"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p11_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p11_prog',String(pct));}catch(e){}}
// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P11 · Geometrija Prostora</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};