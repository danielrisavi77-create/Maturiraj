/**
 * Maturiraj.hr — Mat A · P21
 * Maturiraj.hr — Mat A · P21 · Vjerojatnost
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
.si-r{background:var(--dim-r);color:var(--red)}

/* ── DISC WRAP (P21 explorer) ── */
.disc-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.disc-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.disc-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--blue);text-transform:uppercase}
.disc-body{padding:16px 17px}
.disc-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.disc-btn{font-family:var(--mono);font-size:11px;font-weight:700;padding:4px 11px;border-radius:var(--r2);border:1px solid var(--bdm);background:var(--inp);color:var(--t2);cursor:pointer;transition:all .15s}
.disc-btn:hover{border-color:var(--blue);color:var(--blue)}
.disc-btn.on{background:var(--dim-b);border-color:var(--bd-b);color:var(--blue)}
.disc-result{font-family:var(--mono);font-size:12px;color:var(--t2);padding:8px 12px;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);margin-top:8px;min-height:28px;line-height:1.8}`;
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
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>21 · Vjerojatnost</button>
  <div class="sb-footer">uvod · kako koristiti<br>maturiraj.hr · A razina</div>
</nav>
<main class="main"><div class="content-wrap">
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">vjerojatnost-klasicna-uvjetna-geometrijska</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>
<!-- L0 -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 21 · bonus · A razina · diskretna matematika</div>
    <h1 class="hero-title">Vjerojatnost —<br><span>Klasična, Uvjetna, Geometrijska</span></h1>
    <p class="hero-sub">Matematika slučajnih događaja — od bacanja kocke do Bayesovog teorema i geometrijske vjerojatnosti</p>
    <div class="hero-meta"><span class="hchip b">3 teme</span><span class="hchip a">⭐ Kombinirano s P15</span><span class="hchip c">~40 min</span></div>
    <div class="pt"><div class="pb" style="width:94%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Klasična vjerojatnost</span><span class="pill p-c">Pravila zbrajanja i množenja</span>
    <span class="pill p-i">Uvjetna vjerojatnost</span><span class="pill p-a">Bayesov teorem</span>
    <span class="pill p-v">Geometrijska vjerojatn.</span><span class="pill p-r">Binomna raspodjela</span>
  </div>
  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int"><div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">Vjerojatnost je "matematika šanse" — koliko je vjerojatno da će se nešto dogoditi? Na NCVVO se redovito pojavljuje kombinirano s kombinatorikom iz P15: <em>koliko povoljnih ishoda / koliko ukupnih ishoda?</em><br><br>Ključna razlika: <strong>s ponavljanjem ili bez?</strong> Neovisni ili zavisni događaji? Ova pitanja određuju koja formula ide.<br><br><strong>Uvjetna vjerojatnost P(A|B) = P(A∩B)/P(B) je najčešće testirani koncept — student treba razumjeti što "uz uvjet da se B dogodio" znači za smanjenje uzornog prostora.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">m/n</div><div class="sc-name">Klasična vjerojatn.</div><div class="sc-desc">P(A)=m/n · m=povoljni, n=ukupni jednako mogući ishodi</div></div>
    <div class="sc"><div class="sc-ico si-c">P(A∪B)</div><div class="sc-name">Pravilo zbrajanja</div><div class="sc-desc">P(A∪B)=P(A)+P(B)−P(A∩B). Za isključive: P(A∪B)=P(A)+P(B).</div></div>
    <div class="sc"><div class="sc-ico si-i">P(A∩B)</div><div class="sc-name">Pravilo množenja</div><div class="sc-desc">Neovisni: P(A∩B)=P(A)·P(B). Zavisni: P(A∩B)=P(A)·P(B|A).</div></div>
    <div class="sc"><div class="sc-ico si-a">P(A|B)</div><div class="sc-name">Uvjetna vjerojatn.</div><div class="sc-desc">P(A|B)=P(A∩B)/P(B). "Vjerojatnost A uz uvjet da se B dogodilo."</div></div>
    <div class="sc"><div class="sc-ico si-v">C(n,k)pᵏqⁿ⁻ᵏ</div><div class="sc-name">Binomna raspodjela</div><div class="sc-desc">P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. n pokusa, p uspjeh svaki put.</div></div>
    <div class="sc"><div class="sc-ico si-r">A/Ω</div><div class="sc-name">Geometrijska vjerojatn.</div><div class="sc-desc">P=povoljno područje/ukupno područje. Za kontinuirane veličine.</div></div>
  </div>
  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Klasična vjerojatnost</div><div class="cv">P(A)=m/n · 0≤P(A)≤1 · P(∅)=0 · P(Ω)=1 · P(Ā)=1−P(A)</div></div>
    <div class="cr"><div class="ck b">Komplement</div><div class="cv">P(Ā)=1−P(A). Često lakše izračunati "nije se dogodilo" pa oduzeti od 1!</div></div>
    <div class="cr"><div class="ck c">Zbrajanje</div><div class="cv">P(A∪B)=P(A)+P(B)−P(A∩B). Isključivi (A∩B=∅): P(A∪B)=P(A)+P(B).</div></div>
    <div class="cr"><div class="ck i">Množenje</div><div class="cv">Neovisni: P(A∩B)=P(A)·P(B). Zavisni: P(A∩B)=P(A)·P(B|A).</div></div>
    <div class="cr"><div class="ck a">Uvjetna vjerojatnost</div><div class="cv">P(A|B)=P(A∩B)/P(B). Uzorni prostor se sužava na B!</div></div>
    <div class="cr"><div class="ck a">Bayesov teorem</div><div class="cv">P(B|A)=P(A|B)·P(B)/P(A). "Inverz" uvjetne — poznata P(A|B), tražena P(B|A).</div></div>
    <div class="cr"><div class="ck v">Binomna raspodjela</div><div class="cv">P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. n neovisnih pokusa, p vjerojatn. uspjeha.</div></div>
    <div class="cr"><div class="ck r">Zamka</div><div class="cv">Neovisnost ≠ isključivost! A i B neovisni: P(A∩B)=P(A)·P(B). Isključivi: P(A∩B)=0.</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p20')" class="nb">← P20 · Završna sistematizacija</button><span class="nb primary" onclick="sw(1)">Uči detaljno →</span></div>
</div>
<!-- L1 -->
<div class="layer" id="l1">

<!-- 01 KLASIČNA VJEROJATNOST -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · KLASIČNA VJEROJATNOST I OSNOVNA PRAVILA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "koliko šansi od svih mogućih?"</div>
  <div class="box-int-txt">Klasična vjerojatnost pretpostavlja da su svi ishodi jednako mogući. Bacaš novčić: 2 ishoda (glava/pismo), svaki jednako moguć. P(glava)=1/2.<br><br>Formula: P(A) = broj povoljnih ishoda / ukupni broj ishoda = m/n<br><br><strong>Komplement je tvoj najmoćniji alat: P(barem jedan) = 1 − P(niti jedan). Uvijek razmisli je li lakše računati komplement!</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">KLASIČNA VJEROJATNOST — formule</span>
  <span class="val">P(A) = m/n</span> <span class="cmt">— m povoljnih, n ukupnih jednako mogućih ishoda</span><br>
  <span class="val">0 ≤ P(A) ≤ 1</span> · <span class="val">P(∅) = 0</span> · <span class="val">P(Ω) = 1</span><br>
  <span class="val">P(Ā) = 1 − P(A)</span> <span class="cmt">— komplement (suprotni događaj)</span><br>
  <span class="val">P(A∪B) = P(A) + P(B) − P(A∩B)</span> <span class="cmt">— unija (zbrajanje)</span><br>
  <span class="cmt">Isključivi događaji (A∩B=∅): P(A∪B) = P(A) + P(B)</span>
</div>
<div class="box-for"><span class="box-for-lbl">PRAVILO MNOŽENJA — neovisni i zavisni događaji</span>
  <span class="val">Neovisni: P(A∩B) = P(A) · P(B)</span> <span class="cmt">— jedan ne utječe na drugog</span><br>
  <span class="val">Zavisni: P(A∩B) = P(A) · P(B|A)</span> <span class="cmt">— drugi ovisi o prvom</span><br>
  <span class="cmt">Primjer neovisnih: dva bacanja kocke. Primjer zavisnih: vađenje karata bez vraćanja.</span>
</div>

<!-- VJEROJATNOST KALKULATOR -->
<div class="disc-wrap"><div class="disc-head"><span class="disc-title">// Vjerojatnost Explorer</span></div>
  <div class="disc-body">
    <div class="disc-row" style="flex-wrap:wrap;gap:6px;margin-bottom:8px">
      <button class="disc-btn on" id="vb0" onclick="setVjer(0,this)">Kocka</button>
      <button class="disc-btn" id="vb1" onclick="setVjer(1,this)">Karte</button>
      <button class="disc-btn" id="vb2" onclick="setVjer(2,this)">Kuglice u vrećici</button>
      <button class="disc-btn" id="vb3" onclick="setVjer(3,this)">Novčić n puta</button>
    </div>
    <div id="vjer-display" style="font-family:var(--mono);font-size:12.5px;color:var(--t2);line-height:2.1"></div>
  </div>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Neovisni događaji</div><div class="cmp-body">
    <div class="cmp-row">Jedan ne utječe na drugi</div>
    <div class="cmp-row">P(A∩B)=P(A)·P(B)</div>
    <div class="cmp-row">Primjer: 2 bacanja kocke</div>
    <div class="cmp-row">Vraćanje uzorka u skupinu</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Zavisni događaji</div><div class="cmp-body">
    <div class="cmp-row">Drugi ovisi o prvom</div>
    <div class="cmp-row">P(A∩B)=P(A)·P(B|A)</div>
    <div class="cmp-row">Primjer: karte bez vraćanja</div>
    <div class="cmp-row">Skup se mijenja nakon izvlačenja</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — "smanji uzorni prostor"</div>
  <div class="box-men-txt">Vjerojatnost je uvijek omjer: povoljni/ukupni. Svaki put kad dodaš uvjet, uzorni prostor se sužava.<br>Primjer: P(paran broj | broj > 3) na kocki. Uzorni prostor nije {1,2,3,4,5,6} nego {4,5,6}. Povoljni (parni u {4,5,6}): {4,6} → P=2/3.<br><strong>Uvjet uvijek mijenja nazivnik!</strong></div>
</div>

<div class="sr" id="sr1">
  <div class="sr-head"><div class="sr-title">Klasična vjerojatnost — korak po korak</div><div class="sr-task">Iz kutije s 4 crvene i 6 plave kuglice izvučemo 2 bez vraćanja. P(obje crvene)?</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr1s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Ukupni ishodi</div><div class="sr-txt">Izvlačimo 2 od 10: C(10,2)=45</div></div></div></div>
    <div class="sr-step" id="sr1s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Povoljni ishodi</div><div class="sr-txt">2 crvene od 4: C(4,2)=6</div></div></div></div>
    <div class="sr-step" id="sr1s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Vjerojatnost</div><div class="sr-txt">P=6/45=<strong>2/15</strong>
      <div class="sr-tryit"><div class="sr-try-lbl">↳ P(barem jedna crvena) u istom zadatku?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try1" type="text" placeholder="P=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try1','try1-fb','2/3','v1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try1-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button><span class="sr-prog" id="sr1p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — neovisnost vs isključivost</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik tvrdi: "A i B su isključivi događaji, pa su i neovisni."</p>
  <div class="bug-task">Zaključak: <span class="wrong">isključivost ⟹ neovisnost</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, isključivi su uvijek neovisni</div>
    <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška! Isključivi (P(A∩B)=0) su zavisni — znanje da se A dogodilo znači B se NIJE mogao (P(B|A)=0≠P(B))!</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška, ali samo za neprekidne slučajne varijable</div>
    <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Točno za P(A)>0 i P(B)>0</div>
  </div><div class="bug-expl" id="b1e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — klasična vjerojatnost</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>P(A)=m/n · P(Ā)=1−P(A) — komplement je tvoj prijatelj!</li>
  <li class="b20-item"><div class="b20-dot"></div>Neovisni: P(A∩B)=P(A)·P(B). Zavisni: ·P(B|A). Vraćanje → neovisni!</li>
  <li class="b20-item"><div class="b20-dot"></div>Isključivi ≠ neovisni! Isključivi: ne mogu se oboje dogoditi.</li>
</ul></div>

<div class="inline-cp" id="icp1">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — klasična vjerojatnost</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp1q1"><div class="icp-q-text">Na kocki (1–6), P(broj > 4) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">1/6</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">1/3</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">1/2</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">2/3</div>
    </div><div class="icp-fb" id="icp1q1fb"></div></div>
    <div class="icp-q" id="icp1q2"><div class="icp-q-text">P(Ā) ako je P(A)=0.3?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">0.3</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">0.7</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">0.6</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">1.3</div>
    </div><div class="icp-fb" id="icp1q2fb"></div></div>
    <div class="icp-q" id="icp1q3"><div class="icp-q-text">Dva bacanja novčića su neovisna. P(GG) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">1/2</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">1/4</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">1/3</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">1/8</div>
    </div><div class="icp-fb" id="icp1q3fb"></div></div>
    <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na uvjetnu vjerojatnost →</div>
    <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 02 UVJETNA VJEROJATNOST I BAYES -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · UVJETNA VJEROJATNOST I BAYESOV TEOREM</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "što se mijenja kad nešto već znamo?"</div>
  <div class="box-int-txt">Uvjetna vjerojatnost odgovara na: "Kolika je vjerojatnost A <em>uz uvjet da se B već dogodio</em>?"<br><br>Primjer: u razredu 60% su djevojčice, 40% nose naočale, a 30% su djevojčice s naočalama. Ako odaberemo učenika s naočalama, kolika je vjerojatn. da je djevojčica? P(djevojčica|naočale)=0.<span class="frac"><span class="num">3</span><span class="den">0</span></span>.4=3/4.<br><br><strong>Bayesov teorem rješava "inverz": poznata je P(simptom|bolest), a tražimo P(bolest|simptom). Na maturi dolazi kao zadatak s tablicom ili stablom vjerojatnosti.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">UVJETNA VJEROJATNOST</span>
  <span class="val">P(A|B) = P(A∩B) / P(B)</span> <span class="cmt">— "P od A uz uvjet B"</span><br>
  <span class="val">P(A∩B) = P(B) · P(A|B) = P(A) · P(B|A)</span> <span class="cmt">— množenje s uvjetom</span><br>
  <span class="val">Neovisnost: P(A|B) = P(A)</span> <span class="cmt">— znanje o B ne mijenja P(A)</span><br>
  <span class="cmt">Provjera neovisnosti: P(A∩B) = P(A)·P(B)? Ako da → neovisni.</span>
</div>
<div class="box-for"><span class="box-for-lbl">BAYESOV TEOREM I POTPUNA VJEROJATNOST</span>
  <span class="val">Potpuna vjerojatn.: P(A) = P(A|B₁)·P(B₁) + P(A|B₂)·P(B₂) + ...</span><br>
  <span class="val">Bayesov teorem: P(B|A) = P(A|B)·P(B) / P(A)</span><br>
  <span class="cmt">Stabla vjerojatnosti: pomnoži duž grana, zbroji paralelne puteve za isti ishod</span><br>
  <span class="cmt">Primjer: test bolesti — P(+|bolest)=0.99, P(bolest)=0.001. Koliko P(bolest|+)?</span>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Uvjetna P(A|B)</div><div class="cmp-body">
    <div class="cmp-row">P(A|B) = P(A∩B)/P(B)</div>
    <div class="cmp-row">Sužava uzorni prostor na B</div>
    <div class="cmp-row">B je novi "cijeli skup"</div>
    <div class="cmp-row">P(A|B) može biti > P(A)</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Bayesov P(B|A)</div><div class="cmp-body">
    <div class="cmp-row">Inverz uvjetne vjerojatn.</div>
    <div class="cmp-row">Koristimo tablice/stablo</div>
    <div class="cmp-row">Uzmi potpunu P(A) u naz.</div>
    <div class="cmp-row">Čest u medicini, testovima</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — stablo vjerojatnosti</div>
  <div class="box-men-txt">
    <pre style="font-family:var(--mono);font-size:11px;color:var(--t2);background:none;border:none;padding:0;line-height:1.8">         ┌─ A  (P(A|B₁))   put: P(B₁)·P(A|B₁)
    B₁ ──┤
         └─ Ā  (P(Ā|B₁))
Start ───┤
         ┌─ A  (P(A|B₂))   put: P(B₂)·P(A|B₂)
    B₂ ──┤
         └─ Ā  (P(Ā|B₂))</pre>
    <strong>Množi duž grane → zbroji sve puteve koji vode do A za potpunu P(A).</strong>
  </div>
</div>

<div class="sr" id="sr2">
  <div class="sr-head"><div class="sr-title">Uvjetna vjerojatnost — korak po korak</div><div class="sr-task">U skupini 100 studenata: 60 žene, 40 muškarci. Od žena 20% nosi naočale, od muškaraca 30%. Odaberemo studenta s naočalama — P(žena)?</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr2s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Potpuna vjerojatnost P(naočale)</div><div class="sr-txt">P(N)=P(N|Ž)·P(Ž)+P(N|M)·P(M)=0.2·0.6+0.3·0.4=0.12+0.12=0.24</div></div></div></div>
    <div class="sr-step" id="sr2s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">P(Ž∩N)</div><div class="sr-txt">P(Ž∩N)=P(N|Ž)·P(Ž)=0.2·0.6=0.12</div></div></div></div>
    <div class="sr-step" id="sr2s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Bayesov teorem</div><div class="sr-txt">P(Ž|N)=P(Ž∩N)/P(N)=0.<span class="frac"><span class="num">12</span><span class="den">0</span></span>.24=<strong>1/2 = 0.5</strong>
      <div class="sr-tryit"><div class="sr-try-lbl">↳ P(A|B) ako P(A∩B)=0.15 i P(B)=0.5?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try2" type="text" placeholder="P(A|B)=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try2','try2-fb','0.3','uv1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try2-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr2',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr2',3)">↺ Resetiraj</button><span class="sr-prog" id="sr2p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — uvjetna vjerojatnost</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa P(A|B) i tvrdi: "P(A|B)=P(B|A)"</p>
  <div class="bug-task">Zaključak: <span class="wrong">P(A|B) = P(B|A) uvijek</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, uvjetna vjerojatnost je simetrična</div>
    <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška! P(A|B)=P(A∩B)/P(B), P(B|A)=P(A∩B)/P(A). Jednaki samo ako P(A)=P(B). Bayesov teorem postoji upravo za ovu konverziju!</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Točno samo za neovisne događaje</div>
    <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Točno ako je P(A∩B)=0</div>
  </div><div class="bug-expl" id="b2e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — uvjetna vjerojatnost</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>P(A|B)=P(A∩B)/P(B) — B je novi nazivnik, uzorni prostor se sužava!</li>
  <li class="b20-item"><div class="b20-dot"></div>P(A|B) ≠ P(B|A). Bayesov teorem pretvara jedno u drugo.</li>
  <li class="b20-item"><div class="b20-dot"></div>Stablo: množi duž grana, zbroji paralelne puteve koji daju isti ishod.</li>
</ul></div>

<div class="inline-cp" id="icp2">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — uvjetna vjerojatnost</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp2q1"><div class="icp-q-text">P(A∩B)=0.12, P(B)=0.4. Tada P(A|B)=?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">0.048</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">0.3</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">0.4</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">0.52</div>
    </div><div class="icp-fb" id="icp2q1fb"></div></div>
    <div class="icp-q" id="icp2q2"><div class="icp-q-text">A i B su neovisni. Tada P(A|B) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">P(B)</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">P(A)</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">P(A)·P(B)</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">0</div>
    </div><div class="icp-fb" id="icp2q2fb"></div></div>
    <div class="icp-q" id="icp2q3"><div class="icp-q-text">P(A|B)=0.6, P(B)=0.5. Tada P(A∩B)=?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">0.6</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">0.1</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">0.3</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">1.1</div>
    </div><div class="icp-fb" id="icp2q3fb"></div></div>
    <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na binomnu raspodjelu →</div>
    <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- 03 BINOMNA I GEOMETRIJSKA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · BINOMNA RASPODJELA I GEOMETRIJSKA VJEROJATNOST</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — "n puta isti pokus, koliko uspjeha?"</div>
  <div class="box-int-txt">Binomna raspodjela: baciš novčić 10 puta — kolika je vjerojatn. da padne točno 3 glave? Svako bacanje je neovisno, p=1/2 svaki put.<br><br>Geometrijska vjerojatnost: bacaš šilinga na tanjur, kolika je vjerojatn. da padne na bijeli dio? Odgovor ovisi o površinama, ne o diskretnim ishodima.<br><br><strong>P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ — binomni koeficijent iz P15 direktno! Ovo je veza između kombinatorike i vjerojatnosti.</strong></div>
</div>
<div class="box-for"><span class="box-for-lbl">BINOMNA RASPODJELA</span>
  <span class="val">P(X=k) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ</span><br>
  <span class="cmt">n = broj pokusa · k = broj uspjeha · p = vjerojatn. uspjeha u jednom pokusu</span><br>
  <span class="val">E(X) = n·p</span> <span class="cmt">— očekivana vrijednost (srednji broj uspjeha)</span><br>
  <span class="val">Uvjeti: n neovisnih pokusa · isti p svaki put · samo 2 ishoda (uspjeh/neuspjeh)</span>
</div>
<div class="box-for"><span class="box-for-lbl">GEOMETRIJSKA VJEROJATNOST</span>
  <span class="val">P(A) = mjera povoljnog skupa / mjera uzornog prostora</span><br>
  <span class="cmt">Mjera = duljina (1D), površina (2D), volumen (3D)</span><br>
  <span class="val">Primjer 1D: točka na [0,10], P(točka u [3,7]) = <span class="frac"><span class="num">4</span><span class="den">10</span></span> = 2/5</span><br>
  <span class="val">Primjer 2D: krug r=1 u kvadratu 2×2, P(unutar kruga) = π·<span class="frac"><span class="num">1²</span><span class="den">4</span></span> = π/4</span>
</div>

<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Binomna raspodjela</div><div class="cmp-body">
    <div class="cmp-row">Diskretna — broji uspjehe</div>
    <div class="cmp-row">P(X=k)=C(n,k)pᵏqⁿ⁻ᵏ</div>
    <div class="cmp-row">n pokusa, isti p svaki put</div>
    <div class="cmp-row">E(X)=np, Var(X)=npq</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h c">Geometrijska vjerojatn.</div><div class="cmp-body">
    <div class="cmp-row">Kontinuirana — mjeri površinu</div>
    <div class="cmp-row">P=povoljno/ukupno (mjera)</div>
    <div class="cmp-row">Nema diskretnih ishoda</div>
    <div class="cmp-row">Česta: krug u kvadratu, π!</div>
  </div></div>
</div>

<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — binomna i kombinatorika</div>
  <div class="box-men-txt">P(točno k uspjeha u n pokusa) = C(n,k) · pᵏ · (1−p)ⁿ⁻ᵏ<br>C(n,k) = koliko načina odabrati k uspjeha od n pokusa (redoslijed nije bitan)<br>pᵏ = vjerojatn. da k odabranih su uspjesi<br>(1−p)ⁿ⁻ᵏ = vjerojatn. da ostali n−k su neuspjesi<br><strong>To je direktno P15 kombinacije × teorija vjerojatnosti!</strong></div>
</div>

<div class="sr" id="sr3">
  <div class="sr-head"><div class="sr-title">Binomna raspodjela — korak po korak</div><div class="sr-task">Novčić bacamo 5 puta. Vjerojatn. da padne točno 3 glave?</div></div>
  <div class="sr-steps">
    <div class="sr-step" id="sr3s1"><div class="sr-step-in"><div class="sr-num">1</div><div class="sr-body"><div class="sr-stitle">Identificiraj parametre</div><div class="sr-txt">n=5, k=3, p=1/2 (glava), q=1/2</div></div></div></div>
    <div class="sr-step" id="sr3s2"><div class="sr-step-in"><div class="sr-num">2</div><div class="sr-body"><div class="sr-stitle">Primijeni formulu</div><div class="sr-txt">P(X=3)=C(5,3)·(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)³·(<span class="frac"><span class="num">1</span><span class="den">2</span></span>)²=10·<span class="frac"><span class="num">1</span><span class="den">8</span></span>·<span class="frac"><span class="num">1</span><span class="den">4</span></span>=10/32=<strong>5/16</strong></div></div></div></div>
    <div class="sr-step" id="sr3s3"><div class="sr-step-in"><div class="sr-num">3</div><div class="sr-body"><div class="sr-stitle">Provjera</div><div class="sr-txt">C(5,3)=10 ✓ · (<span class="frac"><span class="num">1</span><span class="den">2</span></span>)⁵=1/32 · <span class="frac"><span class="num">10</span><span class="den">32</span></span>=5/16≈0.3125 ✓
      <div class="sr-tryit"><div class="sr-try-lbl">↳ P(X=0) za isti zadatak (0 glava u 5 bacanja)?</div>
        <div class="sr-try-row"><input class="sr-try-in" id="try3" type="text" placeholder="P=?" autocomplete="off"><button class="sr-try-btn" onclick="tryIt('try3','try3-fb','1/32','bin1')">Provjeri</button></div>
        <div class="sr-try-fb" id="try3-fb"></div></div></div></div></div></div>
  </div>
  <div class="sr-foot"><button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button><button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button><span class="sr-prog" id="sr3p">0 / 3</span></div>
</div>

<div class="box-bug"><div class="bug-head">🐛 prepoznaj grešku — binomna raspodjela</div><div class="bug-body">
  <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik računa P(X=2) za n=4, p=1/3:</p>
  <div class="bug-task">P(X=2) = (<span class="frac"><span class="num">1</span><span class="den">3</span></span>)² · (<span class="frac"><span class="num">2</span><span class="den">3</span></span>)² = <span class="wrong">4/81</span></div>
  <div class="bug-opts">
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, <span class="frac"><span class="num">1</span><span class="den">9</span></span> · <span class="frac"><span class="num">4</span><span class="den">9</span></span> = 4/81</div>
    <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška! Nedostaje C(4,2)=6. P(X=2)=6·(<span class="frac"><span class="num">1</span><span class="den">3</span></span>)²·(<span class="frac"><span class="num">2</span><span class="den">3</span></span>)²=6·<span class="frac"><span class="num">4</span><span class="den">81</span></span>=24/81=8/27</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: treba koristiti C(4,2)/4!=1/4</div>
    <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Točno za n=2</div>
  </div><div class="bug-expl" id="b3e"></div>
</div></div>

<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — binomna i geometrijska</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ — ne zaboravi C(n,k)!</li>
  <li class="b20-item"><div class="b20-dot"></div>Geometrijska: P=povoljno područje/ukupno. Mjeri površinu ili duljinu!</li>
  <li class="b20-item"><div class="b20-dot"></div>E(X)=n·p — prosječni broj uspjeha u n pokusa.</li>
</ul></div>

<div class="inline-cp" id="icp3">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — binomna raspodjela</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp3q1"><div class="icp-q-text">P(X=0) za n=3, p=1/2 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">1/4</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">1/8</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">3/8</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">1/2</div>
    </div><div class="icp-fb" id="icp3q1fb"></div></div>
    <div class="icp-q" id="icp3q2"><div class="icp-q-text">Točka nasumično birana na [0,6]. P(točka u [2,5])=?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">2/6</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">1/2</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">1/3</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">2/3</div>
    </div><div class="icp-fb" id="icp3q2fb"></div></div>
    <div class="icp-q" id="icp3q3"><div class="icp-q-text">E(X) za n=10, p=0.4 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">0.4</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">10</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">4</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">6</div>
    </div><div class="icp-fb" id="icp3q3fb"></div></div>
    <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kombinirane zadatke →</div>
    <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
  </div>
</div>
<!-- A RAZINA -->
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>

<div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — komplement za "barem jedan"</div></div><div class="combo-body">
  <div class="combo-task">Bacamo kocku 4 puta. P(barem jednom šestica)?</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Komplement: P(niti jedna šestica) = (<span class="frac"><span class="num">5</span><span class="den">6</span></span>)⁴</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">(<span class="frac"><span class="num">5</span><span class="den">6</span></span>)⁴ = 625/1296</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">P(barem jedna) = 1 − <span class="frac"><span class="num">625</span><span class="den">1296</span></span> = <span class="frac"><span class="num">671</span><span class="den">1296</span></span> ≈ 0.518</div></div>
  </div><div class="combo-ans">P ≈ 0.518. Uvijek koristi komplement za "barem jedan"!</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — Bayes u praksi</div></div><div class="combo-body">
  <div class="combo-task">Test bolesti: P(+|bolesna)=0.99, P(+|zdrava)=0.02, P(bolesna)=0.005. P(bolesna|+)?</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">P(+) = P(+|B)·P(B)+P(+|Z)·P(Z) = 0.99·0.005+0.02·0.995 = 0.00495+0.01990 = 0.02485</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">P(B|+) = P(+|B)·P(B)/P(+) = 0.<span class="frac"><span class="num">00495</span><span class="den">0</span></span>.02485</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">= 0.<span class="frac"><span class="num">00495</span><span class="den">0</span></span>.02485 ≈ 0.199 ≈ 20%</div></div>
  </div><div class="combo-ans">Samo ~20%! Pozitivan test nije garancija bolesti kad je bolest rijetka. Bayes u medicini!</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — binomna s kombinatorikom</div></div><div class="combo-body">
  <div class="combo-task">Igrač pogađa slobodno bacanje s p=0.8. U 5 pokušaja, P(barem 4 pogotka)?</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">P(X≥4) = P(X=4) + P(X=5)</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">P(X=4)=C(5,4)·0.8⁴·0.2¹=5·0.4096·0.2=0.4096</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">P(X=5)=C(5,5)·0.8⁵=0.32768. Ukupno: 0.4096+0.32768=0.73728</div></div>
  </div><div class="combo-ans">P(barem 4 pogotka) ≈ 0.737 = 73.7%</div>
</div></div>

<div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — geometrijska vjerojatnost s π</div></div><div class="combo-body">
  <div class="combo-task">Krug polumjera 3 upisan je u kvadrat. Šilinga bačena nasumično na kvadrat. P(pada unutar kruga)?</div>
  <div class="combo-steps">
    <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Stranica kvadrata = 2r = 6. Površina kvadrata = 36.</div></div>
    <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Površina kruga = π·3² = 9π</div></div>
    <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">P = <span class="frac"><span class="num">9π</span><span class="den">36</span></span> = <span class="frac"><span class="num">π</span><span class="den">4</span></span> ≈ 0.785</div></div>
  </div><div class="combo-ans">P = <span class="frac"><span class="num">π</span><span class="den">4</span></span> ≈ 78.5%. Ovo je ujedno Monte Carlo aproksimacija broja π!</div>
</div></div>

<!-- DRILL -->
<div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
  <div class="drill-body">
    <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
    <div class="drill-q" id="dr-q">P(A) + P(Ā) = 1 za svaki događaj A</div>
    <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
    <div class="drill-fb" id="dr-fb"></div>
    <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
    <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
  </div>
</div>

<!-- NCVVO -->
<div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Klasična vjerojatn. · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-kl">klasična</span></div>
    <div class="ncvvo-real-q">Iz 52 karte standardnog špila nasumično izvučemo jednu. P(as ili srce)?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>zbroje P(as)+P(srce)=4/52+<span class="frac"><span class="num">13</span><span class="den">52</span></span> bez odbitka presjeka</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">P(as∪srce)=P(as)+P(srce)−P(as∩srce)=4/52+<span class="frac"><span class="num">13</span><span class="den">52</span></span>−<span class="frac"><span class="num">1</span><span class="den">52</span></span>=<strong>16/52=4/13</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Uvjetna vjerojatn. · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-uv">uvjetna</span></div>
    <div class="ncvvo-real-q">P(A)=0.4, P(B)=0.5, P(A∩B)=0.2. Jesu li A i B neovisni?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne provjere uvjet neovisnosti P(A∩B)=P(A)·P(B)</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">P(A)·P(B)=0.4·0.5=0.2=P(A∩B) ✓ → <strong>Da, A i B su neovisni!</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Binomna raspodjela · ~60% netočnih<span class="ncvvo-live-stat neutral" id="nlive-bn">binomna</span></div>
    <div class="ncvvo-real-q">Kockica se baca 6 puta. P(šestica točno 2 puta)?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave binomni koeficijent C(6,2)=15</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">P(X=2)=C(6,2)·(<span class="frac"><span class="num">1</span><span class="den">6</span></span>)²·(<span class="frac"><span class="num">5</span><span class="den">6</span></span>)⁴=15·(<span class="frac"><span class="num">1</span><span class="den">36</span></span>)·(<span class="frac"><span class="num">625</span><span class="den">1296</span></span>)=<strong>9375/46656≈0.201</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Geometrijska · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-ge">geometrijska</span></div>
    <div class="ncvvo-real-q">Segment AB duljine 10. Točka P nasumično na AB. P(AP < 3)?</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne primjenjuju geometrijsku vjerojatnost, traže diskretni pristup</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">Duljina povoljnog dijela = 3, ukupna = 10. P = <strong>3/10 = 0.3</strong></div>
  </div>
</div></div>

<!-- CHECKPOINT -->
<div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Checkpoint — jesi li spreman?</div><div class="cp-sub">Potvrdi što znaš</div></div></div>
  <ul class="cp-list">
    <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>P(A)=m/n · P(Ā)=1−P(A) · komplement za "barem jedan"</li>
    <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>P(A∩B)=P(A)·P(B) neovisni · =P(A)·P(B|A) zavisni</li>
    <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>P(A|B)=P(A∩B)/P(B) — B sužava uzorni prostor!</li>
    <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ — ne zaboravi C(n,k)!</li>
    <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Geometrijska: P=povoljno područje / ukupno područje</li>
  </ul>
  <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Završio si cijeli program! 🎉</span></div>
</div>

<div class="matura-block"><div class="matura-hd">⭐ matura fokus</div><ul class="matura-list">
  <li class="mi"><div class="mi-dot"></div><span><b>P(A∪B)=P(A)+P(B)−P(A∩B).</b> Ne zaboravi oduzeti presjek!</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>"Barem jedan" = 1 − P(niti jedan).</b> Uvijek koristi komplement!</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Binomna = C(n,k)·pᵏ·qⁿ⁻ᵏ.</b> C(n,k) se zaboravlja u 60% slučajeva!</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Isključivost ≠ neovisnost.</b> Isključivi događaji su zavisni!</span></li>
</ul></div>

<div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Veza s ostalim poglavljima</div><div class="cn-sub">Vjerojatnost koristi sve</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P15</span><span class="cn-item-title">Kombinatorika</span></div><div class="cn-item-desc">C(n,k) direktno u binomnoj raspodjeli. Klasična vjerojatnost = kombinatorika/kombinatorika.</div><div class="cn-item-arrow">→ povoljni/ukupni ishodi</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P14</span><span class="cn-item-title">Nizovi</span></div><div class="cn-item-desc">Geometrijski niz opisuje akumuliranje neovisnih događaja. P(svi uspjesi)=pⁿ.</div><div class="cn-item-arrow">→ pⁿ i geometrijski niz</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">Geometrijska vjerojatnost = integral za kontinuiranu razdiobu.</div><div class="cn-item-arrow">→ neprekidna raspodjela</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P01</span><span class="cn-item-title">Skupovi</span></div><div class="cn-item-desc">Uzorni prostor Ω, događaji A, B — to su skupovi. Presjek ∩, unija ∪ iz teorije skupova.</div><div class="cn-item-arrow">→ skupovi i događaji</div></div>
  </div>
</div>

<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Klasična vjerojatnost</div><div class="cv">P(A) = n(A)/n(&Omega;), &nbsp; 0&le;P(A)&le;1. &nbsp; P(A) + P(A’) = 1. &nbsp; P(&empty;)=0, P(&Omega;)=1.</div></div>
  <div class="cr"><div class="ck c">Zbrajanje</div><div class="cv">P(A&cup;B) = P(A)+P(B)&minus;P(A&cap;B). Za nespojive: P(A&cup;B)=P(A)+P(B).</div></div>
  <div class="cr"><div class="ck i">Uvjetna vjerojatnost</div><div class="cv">P(A|B) = P(A&cap;B)/P(B), za P(B)&ne;0. &nbsp; Nezavisni: P(A&cap;B) = P(A)&middot;P(B).</div></div>
  <div class="cr"><div class="ck a">Binomna razdioba</div><div class="cv">P(X=k) = C(n,k)&middot;p<sup>k</sup>&middot;(1&minus;p)<sup>n&minus;k</sup>. E(X)=np. n=pokušaji, p=vjerojatnost uspjeha.</div></div>
  <div class="cr"><div class="ck r">Zamke</div><div class="cv">P(A&cup;B) &ne; P(A)+P(B) ako nisu nespojivi! &nbsp; P(A|B) &ne; P(B|A). &nbsp; Uvjetna vs. bezuvjetna!!</div></div>
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
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · komplement</div><div class="fitb-sent">P(Ā) ako je P(A)=0.25 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="P(Ā)=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','0.75','k1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · uvjetna vjerojatnost</div><div class="fitb-sent">P(A|B) ako P(A∩B)=0.2 i P(B)=0.4 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="P(A|B)=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','0.5','uv2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · binomna raspodjela</div><div class="fitb-sent">P(X=1) za n=3, p=1/2 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="P=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','3/8','bn1')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · geometrijska vjerojatnost</div><div class="fitb-sent">Krug r=2 u kvadratu 4×4. P(unutar kruga) = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="P=?" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','π/4','gv1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <!-- sr4 — 3D geometric probability -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — geometrijska vjerojatnost (3D)</div>
      <div class="sr-task">U kocku sa stranicom a = 2 upisana je kugla (r = 1). Nasumično se odabere točka unutar kocke. Kolika je vjerojatnost da se nalazi unutar kugle?</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Izračunaj volumen kocke (ukupni prostor)</div>
            <div class="sr-txt">V<sub>kocka</sub> = a³ = 2³ = <strong>8</strong><br>Ovo je "ukupni ishodni prostor" u 3D geometrijskoj vjerojatnosti.</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Izračunaj volumen kugle (povoljni prostor)</div>
            <div class="sr-txt">V<sub>kugla</sub> = <span class="frac"><span class="num">4π</span><span class="den">3</span></span> · r³ = <span class="frac"><span class="num">4π</span><span class="den">3</span></span> · 1 = <strong><span class="frac"><span class="num">4π</span><span class="den">3</span></span></strong><br>Ovo je "povoljni ishodni prostor".</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni geometrijsku vjerojatnost P = V<sub>povoljno</sub> / V<sub>ukupno</sub></div>
            <div class="sr-txt">P = <span class="frac"><span class="num">4π/3</span><span class="den">8</span></span> = <span class="frac"><span class="num">4π</span><span class="den">24</span></span> = <strong><span class="frac"><span class="num">π</span><span class="den">6</span></span></strong> ≈ 0.524<br><em>Isti princip kao 2D (površine), samo koristimo <b>volumene</b>!</em></div>
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
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p20')" class="nb primary">← Završna sistematizacija</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');s.classList.toggle('mobile-open');o.classList.toggle('show',s.classList.contains('mobile-open'));}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[94,96,100];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p21_tab',i);}catch(e){}
}

/* VJEROJATNOST EXPLORER */
var vjerData=[
  {label:'Kocka (1–6)',lines:[
    'Uzorni prostor: Ω={1,2,3,4,5,6}, |Ω|=6',
    'P(paran)=3/6=<strong style="color:var(--cyan)">1/2</strong>',
    'P(>4)={5,6}=2/6=<strong style="color:var(--cyan)">1/3</strong>',
    'P(paran I >4)={6}=1/6',
    'P(paran ILI >4)=3/6+2/6−1/6=<strong style="color:var(--cyan)">4/6=2/3</strong>'
  ]},
  {label:'Standardni špil (52 karte)',lines:[
    'Uzorni prostor: 52 karte (4 boje × 13 vrijednosti)',
    'P(as)=4/52=<strong style="color:var(--cyan)">1/13</strong>',
    'P(srce)=13/52=<strong style="color:var(--cyan)">1/4</strong>',
    'P(as srce)=1/52',
    'P(as ILI srce)=4/52+13/52−1/52=<strong style="color:var(--cyan)">16/52=4/13</strong>'
  ]},
  {label:'Kuglice u vrećici',lines:[
    '5 crvenih, 3 plave, 2 zelene (ukupno 10)',
    'P(crvena)=5/10=<strong style="color:var(--cyan)">1/2</strong>',
    'P(ne crvena)=1−1/2=<strong style="color:var(--cyan)">1/2</strong>',
    '2 izvlačenja BEZ vraćanja:',
    'P(obje crvene)=(5/10)·(4/9)=<strong style="color:var(--cyan)">20/90=2/9</strong>'
  ]},
  {label:'Novčić n puta',lines:[
    'p=1/2 svaki put, neovisna bacanja',
    'P(GGG) u 3 bacanja: (1/2)³=<strong style="color:var(--cyan)">1/8</strong>',
    'P(barem 1G u 3): 1−(1/2)³=<strong style="color:var(--cyan)">7/8</strong>',
    'P(točno 2G u 4): C(4,2)·(1/2)⁴=<strong style="color:var(--cyan)">6/16=3/8</strong>',
    'E(G u 10 bacanja): 10·0.5=<strong style="color:var(--cyan)">5</strong>'
  ]}
];
var vjerIdx=0;
function setVjer(i,btn){
  vjerIdx=i;
  document.querySelectorAll('[id^="vb"]').forEach(function(b){b.classList.remove('on');});
  btn.classList.add('on');
  renderVjer();
}
function renderVjer(){
  var d=vjerData[vjerIdx];
  var h='<div style="color:var(--cyan);font-size:10px;font-weight:700;letter-spacing:1px;margin-bottom:10px">'+d.label+'</div>';
  d.lines.forEach(function(l){h+='<div style="padding:2px 0">'+l+'</div>';});
  document.getElementById('vjer-display').innerHTML=h;
}
renderVjer();

/* STEP REVEAL */
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;var ns=document.getElementById(id+'s'+stepSt[id]);if(ns){setTimeout(function(){ns.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});}

var tryExp={
  v1:'P(barem 1 crvena)=1−P(0 crvenih). P(0 cr)=C(6,2)/C(10,2)=15/45=1/3. P(barem 1)=1−1/3=2/3. Ili: P(točno 1)+P(točno 2)=C(4,1)C(6,1)/C(10,2)+C(4,2)/C(10,2)=24/45+6/45=30/45=2/3.',
  uv1:'P(A|B)=P(A∩B)/P(B)=0.15/0.5=0.3',
  bin1:'P(X=0)=C(5,0)·(1/2)⁰·(1/2)⁵=1·1·1/32=1/32'
};
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}

/* DRILL */
var drData=[
  {q:'P(A) + P(Ā) = 1 za svaki događaj A',ans:true,tag:'komplement',exp:'Točno! A i Ā su komplementarni — jedan od njih se sigurno dogodi. P(Ω)=1. ✓'},
  {q:'Ako su A i B neovisni, P(A∩B)=P(A)+P(B)',ans:false,tag:'neovisnost',exp:'Netočno! Neovisni: P(A∩B)=P(A)·P(B), ne zbroj! Zbroj vrijedi za isključive događaje.'},
  {q:'P(A|B) može biti veća od P(A)',ans:true,tag:'uvjetna',exp:'Točno! Uvjet B može povećati vjerojatnost A. Primjer: P(>5 | paran) = 1/3 > P(>5) = 1/6. ✓'},
  {q:'Isključivi događaji su uvijek i neovisni',ans:false,tag:'isključivost',exp:'Netočno! Isključivi su zavisni — ako se A dogodi, B se NIJE mogao. P(B|A)=0≠P(B).'},
  {q:'P(A∪B) = P(A) + P(B) uvijek',ans:false,tag:'zbrajanje',exp:'Netočno! Vrijedi samo za isključive (A∩B=∅). Inače: P(A∪B)=P(A)+P(B)−P(A∩B).'},
  {q:'U binomnoj raspodjeli, P(X=k) ovisi o C(n,k)',ans:true,tag:'binomna',exp:'Točno! P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Bez C(n,k) dobijemo pogrešan rezultat! ✓'},
  {q:'Za geometrijsku vjerojatnost trebamo znati površine',ans:true,tag:'geometrijska',exp:'Točno! P=povoljno područje/ukupno. Može biti 1D (duljine), 2D (površine) ili 3D (volumeni). ✓'},
  {q:'P(barem jedan) = 1 − P(niti jedan)',ans:true,tag:'komplement',exp:'Točno! Komplement "barem jednog" je "niti jedan". Uvijek korisno kada je "barem jedan" složeno! ✓'},
  {q:'E(X) u binomnoj raspodjeli je n/p',ans:false,tag:'binomna',exp:'Netočno! E(X)=n·p, ne n/p. Primjer: 10 bacanja, p=0.4 → E(X)=4, ne 25.'},
  {q:'P(A|B) = P(B|A) uvijek vrijedi',ans:false,tag:'uvjetna',exp:'Netočno! P(A|B)=P(A∩B)/P(B), P(B|A)=P(A∩B)/P(A). Jednaki samo ako P(A)=P(B).'},
  {q:'Dva bacanja kocke su neovisni događaji',ans:true,tag:'neovisnost',exp:'Točno! Ishod prvog bacanja ne utječe na drugo. P(A∩B)=P(A)·P(B). ✓'},
  {q:'P(Ω) = 0 za uzorni prostor Ω',ans:false,tag:'osnove',exp:'Netočno! P(Ω)=1 — sigurni događaj. P(∅)=0 — nemogući događaj.'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');var tagHtml='<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>';fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;var q=document.getElementById('dr-q');q.style.opacity='0';setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});updateProgress();}

/* BUG */
var bugDone={};
var bugExp={
  b1:'✓ Točno! Isključivi događaji (P(A∩B)=0) su zavisni jer znanje da se A dogodio znači P(B|A)=0≠P(B).',
  b2:'✓ Točno! P(A|B)=P(A∩B)/P(B), P(B|A)=P(A∩B)/P(A). Bayesov teorem pretvara jedno u drugo.',
  b3:'✓ Točno! Nedostaje C(n,k)=C(4,2)=6. P(X=2)=6·(1/9)·(4/9)=24/81=8/27.'
};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}

/* ICP */
var icpAnswered={};
var icpFeedback={
  icp1:{
    q1:{ok:'✓ Točno! {5,6} su >4 → 2 povoljnih od 6. P=2/6=1/3.',ng:'✗ Netočno. Broj>4 na kocki: {5,6}=2 ishoda od 6. P=2/6=1/3.'},
    q2:{ok:'✓ Točno! P(Ā)=1−P(A)=1−0.3=0.7',ng:'✗ Netočno. P(Ā)=1−P(A)=1−0.3=0.7'},
    q3:{ok:'✓ Točno! Neovisna bacanja: P(GG)=P(G)·P(G)=(1/2)·(1/2)=1/4',ng:'✗ Netočno. Neovisni: P(GG)=P(G)·P(G)=(1/2)²=1/4'}
  },
  icp2:{
    q1:{ok:'✓ Točno! P(A|B)=P(A∩B)/P(B)=0.12/0.4=0.3',ng:'✗ Netočno. P(A|B)=P(A∩B)/P(B)=0.12/0.4=0.3'},
    q2:{ok:'✓ Točno! Neovisnost znači P(A|B)=P(A) — B ne daje info o A!',ng:'✗ Netočno. Neovisnost ↔ P(A|B)=P(A). Znanje o B ne mijenja P(A).'},
    q3:{ok:'✓ Točno! P(A∩B)=P(A|B)·P(B)=0.6·0.5=0.3',ng:'✗ Netočno. P(A∩B)=P(A|B)·P(B)=0.6·0.5=0.3'}
  },
  icp3:{
    q1:{ok:'✓ Točno! P(X=0)=C(3,0)·(1/2)⁰·(1/2)³=1·1·1/8=1/8',ng:'✗ Netočno. P(X=0)=C(3,0)·(1/2)³=(1/2)³=1/8'},
    q2:{ok:'✓ Točno! Duljina [2,5]=3, ukupno [0,6]=6. P=3/6=1/2',ng:'✗ Netočno. Geometrijska: P=duljina povoljnog/ukupno=3/6=1/2'},
    q3:{ok:'✓ Točno! E(X)=n·p=10·0.4=4',ng:'✗ Netočno. E(X)=n·p=10·0.4=4'}
  }
};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key])return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId);var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';})}

/* CHECKPOINT */
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}

/* ADAPTIVE */
var topicErrors={kl:0,uv:0,bn:0,gv:0};
var topicHints={kl:'Greška klasična! P(A)=m/n. Presjek: P(A∪B)=P(A)+P(B)−P(A∩B). Komplement: P(Ā)=1−P(A).',uv:'Greška uvjetna! P(A|B)=P(A∩B)/P(B). Neovisnost: P(A|B)=P(A). P(A|B)≠P(B|A)!',bn:'Greška binomna! P(X=k)=C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ. Ne zaboravi C(n,k)! E(X)=n·p.',gv:'Greška geometrijska! P=povoljno područje/ukupno. Mjeri duljine/površine, ne broji.'};
var qTopics={q1:'kl',q2:'kl',q3:'kl',q4:'uv',q5:'uv',q6:'uv',q7:'bn',q8:'bn',q9:'bn',q10:'gv',q11:'kl',q12:'bn'};
var ncvvoTopicMap={'nlive-kl':['q1','q2','q11'],'nlive-uv':['q4','q5','q6'],'nlive-bn':['q7','q8','q9','q12'],'nlive-ge':['q10']};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}updateNcvvoLiveStats();}
function showAdaptiveBanner(topic){var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');if(!b||!t||!x)return;t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/qs.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*2),2):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*2);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*2):0;tabProgress[1]=Math.min(94+drillPts+icpPts+cpPts,98);tabProgress[2]=Math.min(94+drillPts+icpPts+cpPts+quizPts,100);var curTab=document.querySelector('.tab.on');var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;var p=tabProgress[curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p21_prog',p);}catch(e){}}

/* SOUND */
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(f,d,v,t){var ctx=getAudio();if(!ctx)return;var o=ctx.createOscillator();var g=ctx.createGain();o.connect(g);g.connect(ctx.destination);o.type=t||'sine';o.frequency.setValueAtTime(f,ctx.currentTime);g.gain.setValueAtTime(v||0.15,ctx.currentTime);g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+d);o.start(ctx.currentTime);o.stop(ctx.currentTime+d);}
function soundCorrect(){playTone(880,0.12,0.12);setTimeout(function(){playTone(1100,0.15,0.10);},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12);},i*100);});}

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
  {id:'q1',topic:'kl',meta:'klasična vjerojatnost',text:'Na kocki (1–6), P(broj manji od 3) = ?',opts:[{t:'1/6',ok:false},{t:'1/3',ok:true},{t:'1/2',ok:false},{t:'2/3',ok:false}],c:'✓ Točno. {1,2}=2 ishoda od 6. P=2/6=1/3.',w:'✗ Netočno. Broj<3={1,2}=2 ishoda. P=2/6=1/3.',proof:['Ω={1,2,3,4,5,6}, |Ω|=6','Povoljni: {1,2}, m=2','P=2/6=1/3']},
  {id:'q2',topic:'kl',meta:'komplement',text:'P(A)=0.65. Tada P(Ā) = ?',opts:[{t:'0.65',ok:false},{t:'1.65',ok:false},{t:'0.35',ok:true},{t:'0.45',ok:false}],c:'✓ Točno. P(Ā)=1−P(A)=1−0.65=0.35.',w:'✗ Netočno. P(Ā)=1−P(A)=1−0.65=0.35.',proof:['P(A)+P(Ā)=1','P(Ā)=1−0.65','=0.35']},
  {id:'q3',topic:'kl',meta:'pravilo množenja — neovisni',text:'P(A)=0.4, P(B)=0.5, A i B neovisni. P(A∩B)=?',opts:[{t:'0.9',ok:false},{t:'0.1',ok:false},{t:'0.2',ok:true},{t:'0.45',ok:false}],c:'✓ Točno. Neovisni: P(A∩B)=P(A)·P(B)=0.4·0.5=0.2.',w:'✗ Netočno. Neovisni: P(A∩B)=P(A)·P(B)=0.2.',proof:['Neovisni: P(A∩B)=P(A)·P(B)','=0.4·0.5','=0.2']},
  {id:'q4',topic:'uv',meta:'uvjetna vjerojatnost',text:'P(A∩B)=0.3, P(B)=0.6. Tada P(A|B)=?',opts:[{t:'0.18',ok:false},{t:'0.5',ok:true},{t:'0.9',ok:false},{t:'0.3',ok:false}],c:'✓ Točno. P(A|B)=P(A∩B)/P(B)=0.3/0.6=0.5.',w:'✗ Netočno. P(A|B)=P(A∩B)/P(B)=0.3/0.6=0.5.',proof:['P(A|B)=P(A∩B)/P(B)','=0.3/0.6','=0.5']},
  {id:'q5',topic:'uv',meta:'neovisnost — provjera',text:'P(A)=0.3, P(B)=0.4, P(A∩B)=0.12. A i B su:',opts:[{t:'zavisni',ok:false},{t:'isključivi',ok:false},{t:'neovisni',ok:true},{t:'komplementarni',ok:false}],c:'✓ Točno. P(A)·P(B)=0.3·0.4=0.12=P(A∩B) → neovisni!',w:'✗ Netočno. Provjera: P(A)·P(B)=0.12=P(A∩B) → neovisni.',proof:['Provjera: P(A)·P(B)=0.3·0.4=0.12','P(A∩B)=0.12','Jednako → neovisni ✓']},
  {id:'q6',topic:'uv',meta:'pravilo zbrajanja',text:'P(A)=0.4, P(B)=0.3, P(A∩B)=0.1. P(A∪B)=?',opts:[{t:'0.7',ok:false},{t:'0.6',ok:true},{t:'0.12',ok:false},{t:'1.0',ok:false}],c:'✓ Točno. P(A∪B)=P(A)+P(B)−P(A∩B)=0.4+0.3−0.1=0.6.',w:'✗ Netočno. P(A∪B)=P(A)+P(B)−P(A∩B)=0.6.',proof:['P(A∪B)=P(A)+P(B)−P(A∩B)','=0.4+0.3−0.1','=0.6']},
  {id:'q7',topic:'bn',meta:'binomna raspodjela',text:'n=4, p=1/2. P(X=2) = ?',opts:[{t:'1/4',ok:false},{t:'1/8',ok:false},{t:'3/8',ok:true},{t:'1/2',ok:false}],c:'✓ Točno. C(4,2)·(1/2)²·(1/2)²=6·1/16=6/16=3/8.',w:'✗ Netočno. P(X=2)=C(4,2)·(1/2)⁴=6/16=3/8.',proof:['C(4,2)=6','P(X=2)=6·(1/2)⁴','=6/16=3/8']},
  {id:'q8',topic:'bn',meta:'binomna — očekivanje',text:'n=20, p=0.3. E(X) = ?',opts:[{t:'3',ok:false},{t:'20',ok:false},{t:'6',ok:true},{t:'0.3',ok:false}],c:'✓ Točno. E(X)=n·p=20·0.3=6.',w:'✗ Netočno. E(X)=n·p=20·0.3=6.',proof:['E(X)=n·p','=20·0.3','=6']},
  {id:'q9',topic:'bn',meta:'binomna — komplement',text:'Bacamo novčić 3 puta. P(barem 1 glava) = ?',opts:[{t:'1/2',ok:false},{t:'3/4',ok:false},{t:'7/8',ok:true},{t:'1/8',ok:false}],c:'✓ Točno. 1−P(0 glava)=1−(1/2)³=1−1/8=7/8.',w:'✗ Netočno. Komplement: 1−P(niti jedna)=1−(1/2)³=7/8.',proof:['P(barem 1)=1−P(0 glava)','=1−(1/2)³=1−1/8','=7/8']},
  {id:'q10',topic:'gv',meta:'geometrijska vjerojatnost',text:'Točka nasumično na [0,10]. P(točka u [3,8]) = ?',opts:[{t:'3/10',ok:false},{t:'8/10',ok:false},{t:'1/2',ok:true},{t:'3/8',ok:false}],c:'✓ Točno. Duljina [3,8]=5, ukupno 10. P=5/10=1/2.',w:'✗ Netočno. Geometrijska: P=duljina povoljnog/ukupno=5/10=1/2.',proof:['Duljina [3,8]=8−3=5','Ukupno: 10','P=5/10=1/2']},
  {id:'q11',topic:'kl',meta:'A razina · vađenje bez vraćanja',text:'5C, 3P kuglice. Izvučemo 2 bez vraćanja. P(1C i 1P)=?',opts:[{t:'15/28',ok:true},{t:'5/28',ok:false},{t:'3/8',ok:false},{t:'8/28',ok:false}],c:'✓ Točno. C(5,1)·C(3,1)/C(8,2)=15/28.',w:'✗ Netočno. Povoljni: C(5,1)·C(3,1)=15. Ukupno: C(8,2)=28. P=15/28.',proof:['Povoljni: C(5,1)·C(3,1)=5·3=15','Ukupno: C(8,2)=28','P=15/28']},
  {id:'q12',topic:'bn',meta:'A razina · binomna s kombinatorikom',text:'Igrač pogađa s p=0.7 u 5 pokušaja. P(točno 4) ≈ ?',opts:[{t:'0.168',ok:false},{t:'0.360',ok:true},{t:'0.700',ok:false},{t:'0.240',ok:false}],c:'✓ Točno. C(5,4)·0.7⁴·0.3¹=5·0.2401·0.3=0.36015≈0.360.',w:'✗ Netočno. P(X=4)=C(5,4)·0.7⁴·0.3=5·0.2401·0.3≈0.360.',proof:['C(5,4)=5','5·0.7⁴·0.3¹=5·0.2401·0.3','≈0.360']}
];
var FExp={k1:'P(Ā)=1−P(A)=1−0.25=0.75',uv2:'P(A|B)=P(A∩B)/P(B)=0.2/0.4=0.5',bn1:'P(X=1)=C(3,1)·(1/2)¹·(1/2)²=3·1/8=3/8',gv1:'P=π·r²/a²=π·4/16=π/4. Kvadrat 4×4=16, krug r=2: π·4=4π. P=4π/16=π/4.'};
function renderQuiz(){var cont=document.getElementById('quiz-container');var html='';ALL_QUESTIONS.forEach(function(q){var optsHtml=q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('');html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';});cont.innerHTML=html;total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok){correct++;soundCorrect();}else soundWrong();var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'ok':'ng');if(!ok&&qdata.opts[i].ok)o.classList.add('ok');});var e=document.getElementById(eid);var proofHtml='';if(!ok&&qdata.proof){proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';}e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;e.classList.add('show');checkAdaptive(qid,ok);if(examMode!=='normal')stopTimer();if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();if(Object.keys(answered).length===total){var s=document.getElementById('score');document.getElementById('snum').textContent=correct+'/'+total;var pct=Math.round(correct/total*100);document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Cijeli program završen! 🎉':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P21.';if(s)s.classList.add('show');soundComplete();updateProgress();}updateProgress();}
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};var ok=norm(v)===norm(ans);inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];}

/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p21_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p21_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P21',pidLower:'p21',title:"Maturiraj.hr \u2014 Mat A \u00b7 P21 \u00b7 Vjerojatnost",subject:'matematika-a',lsKey:'maturiraj_p21_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p21');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P21] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p21"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p21_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p21_prog',String(pct));}catch(e){}}
// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P21 · Vjerojatnost</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};