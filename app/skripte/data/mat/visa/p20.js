/**
 * Maturiraj.hr — Mat A · P20
 * Maturiraj.hr — Mat A · P20 · Završna Sistematizacija
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
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>20 · Završna sistematizacija</button>
  <div class="sb-lbl">// Bonus</div>
  <button class="sb-item" onclick="navigateChapter('p21')" style="background:transparent;border:none;cursor:pointer;text-align:left;width:100%"><span class="sb-dot"></span>21 · Vjerojatnost</button>
  <div class="sb-footer">uvod · kako koristiti<br>maturiraj.hr · A razina</div>
</nav>
<main class="main"><div class="content-wrap">
<div class="bc"><span>← poglavlja</span><span class="bc-sep">/</span><span>a-razina</span><span class="bc-sep">/</span><span class="bc-cur">zavrsna-sistematizacija-strategija-ponavljanje</span></div>
<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══ L0 ═══ -->
<div class="layer on" id="l0">
  <div class="hero"><div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 20 od 21 · A razina · završna sistematizacija</div>
    <h1 class="hero-title">Završna sistematizacija<br><span>Zadnji prolaz prije mature</span></h1>
    <p class="hero-sub">Što moraš znati napamet, kako prepoznati tip zadatka u prvih 10 sekundi i kako izbjeći greške koje najčešće ruše bodove na A razini</p>
    <div class="hero-meta"><span class="hchip b">6 zona ponavljanja</span><span class="hchip a">⭐ Finalni NCVVO pregled</span><span class="hchip c">~55 min</span></div>
    <div class="pt"><div class="pb" style="width:100%"></div></div>
  </div>
  <div class="tags">
    <span class="pill p-b">Algebra</span><span class="pill p-c">Funkcije</span>
    <span class="pill p-i">Trigonometrija</span><span class="pill p-a">Geometrija</span>
    <span class="pill p-v">Derivacije</span><span class="pill p-r">Integrali</span>
  </div>
  <div class="slbl">// što je cilj ovog poglavlja</div>
  <div class="box-int"><div class="box-int-lbl">FINALNI HOOK — ovo nije novo gradivo</div>
    <div class="box-int-txt">P20 nije poglavlje u kojem učiš novu formulu. Ovo je poglavlje u kojem <em>zaključavaš sustav</em>: prepoznaješ tip zadatka, biraš pravi alat i smanjuješ broj glupih grešaka na minimum.<br><br><strong>Na maturi često ne pobjeđuje onaj koji zna najviše, nego onaj koji brže prepozna što zadatak stvarno traži.</strong></div>
  </div>
  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">ALG</div><div class="sc-name">Algebra</div><div class="sc-desc">Jednadžbe, izrazi, faktorizacija, uvjeti definiranosti.</div></div>
    <div class="sc"><div class="sc-ico si-c">f(x)</div><div class="sc-name">Funkcije</div><div class="sc-desc">Domena, nultočke, graf, monotoni tok i presjeci.</div></div>
    <div class="sc"><div class="sc-ico si-i">sin</div><div class="sc-name">Trigonometrija</div><div class="sc-desc">Identiteti, jednadžbe, kutovi i primjena u geometriji.</div></div>
    <div class="sc"><div class="sc-ico si-a">3D</div><div class="sc-name">Geometrija</div><div class="sc-desc">Površine, volumeni, dijagonale i analitički pristup.</div></div>
    <div class="sc"><div class="sc-ico si-v">f′</div><div class="sc-name">Derivacije</div><div class="sc-desc">Tangenta, ekstremi, monotonost i optimizacija.</div></div>
    <div class="sc"><div class="sc-ico si-r">∫</div><div class="sc-name">Integrali</div><div class="sc-desc">Površina, primitvne funkcije i Newton-Leibniz.</div></div>
  </div>
  <div class="slbl">// šest stvari koje moraš znati bez razmišljanja</div>
  <div class="con">
    <div class="cr"><div class="ck b">1 · Prepoznaj temu</div><div class="cv">Prije računanja pitaj se: je li ovo algebra, funkcija, geometrija, derivacija ili integral?</div></div>
    <div class="cr"><div class="ck c">2 · Uvjet definiranosti</div><div class="cv">Kod razlomaka, korijena i logaritama prvo provjeri što uopće smiješ računati.</div></div>
    <div class="cr"><div class="ck i">3 · Formula nije cilj</div><div class="cv">Formula je alat. Važnije je znati kada je primijeniti nego samo je prepisati.</div></div>
    <div class="cr"><div class="ck a">4 · Ekstrem ≠ automatski maksimum</div><div class="cv">Kad dobiješ f′(x)=0, tek onda provjeravaš je li maksimum, minimum ili ništa.</div></div>
    <div class="cr"><div class="ck v">5 · Površina vs volumen</div><div class="cv">Površina je u kvadratnim jedinicama, volumen u kubnima. To odmah otkriva što zadatak traži.</div></div>
    <div class="cr"><div class="ck r">6 · Najčešća zamka</div><div class="cv">Žurba. Na A razini se puno bodova gubi na krivoj procjeni zadatka, ne na teškoj matematici.</div></div>
  </div>
  <div class="nav-row"><button onclick="navigateChapter('p19')" class="nb">← P19 · Složeni zadaci</button><span class="nb primary" onclick="sw(1)">Uči finalni sažetak →</span></div>
</div>

<!-- ═══ L1 ═══ -->
<div class="layer" id="l1">

<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · KAKO ČITATI ZADATAK</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-int"><div class="box-int-lbl">INTUITIVNO — prvih 10 sekundi odlučuje pola zadatka</div>
  <div class="box-int-txt">Kada pročitaš zadatak, nemoj odmah računati. Prvo identificiraj <em>što se traži</em>, <em>koja je tema</em> i <em>koji je prvi korak</em>. To je razlika između sigurnog rješavanja i lutanja kroz formule.<br><br><strong>Mini algoritam: što je dano → što se traži → kojoj temi pripada → koja formula ili metoda otvara zadatak?</strong></div>
</div>
<div class="box-men"><div class="box-men-lbl">MENTALNI MODEL — 4 pitanja prije računa</div>
  <div class="box-men-txt">1) Koja je tema? 2) Koja je nepoznanica? 3) Postoji li uvjet definiranosti? 4) Koji je najkraći prvi korak?<br><strong>To te spašava od kaosa i sprječava da koristiš krivi alat.</strong></div>
</div>
<div class="cmp" style="margin-bottom:16px">
  <div class="cmp-c"><div class="cmp-h b">Loš pristup</div><div class="cmp-body">
    <div class="cmp-row"><b>Odmah računaš</b> bez da znaš što zadatak traži</div>
    <div class="cmp-row"><b>Miješaš formule</b> iz više tema bez reda</div>
    <div class="cmp-row"><b>Ne provjeriš domenu</b> i dobiješ nedopušteno rješenje</div>
  </div></div>
  <div class="cmp-c"><div class="cmp-h g">Dobar pristup</div><div class="cmp-body">
    <div class="cmp-row"><b>Prepoznaš temu</b> u prvoj rečenici</div>
    <div class="cmp-row"><b>Otvoriš zadatak jednim potezom</b> — skica, domena ili formula</div>
    <div class="cmp-row"><b>Tek onda računaš</b> i kontroliraš rezultat</div>
  </div></div>
</div>
<div class="box-20"><div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — čitanje zadatka</div><ul class="b20-list">
  <li class="b20-item"><div class="b20-dot"></div>Ne rješavaj prije nego znaš kojoj temi zadatak pripada</li>
  <li class="b20-item"><div class="b20-dot"></div>Tražena veličina ti govori alat: nagib → derivacija, površina → integral, volumen → geometrija/integral</li>
  <li class="b20-item"><div class="b20-dot"></div>Uvijek provjeri jesu li svi koraci matematički dopušteni</li>
</ul></div>


<div class="inline-cp" id="icp1">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — čitanje zadatka</span><span class="icp-score" id="icp1-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp1q1"><div class="icp-q-text">Što UVIJEK napraviš prvo kad vidiš zadatak?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">Odmah počneš računati</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">Pročitaš pažljivo i identificiraš što se traži</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">Pogledaš rezultat pa radiš unatrag</div>
      <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">Preskočiš ako izgleda teško</div>
    </div><div class="icp-fb" id="icp1q1fb"></div></div>
    <div class="icp-q" id="icp1q2"><div class="icp-q-text">U zadatku piše "površina između grafova". Koji alat koristiš?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">Derivaciju</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">Limes</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">Određeni integral</div>
      <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">Kombinatoriku</div>
    </div><div class="icp-fb" id="icp1q2fb"></div></div>
    <div class="icp-q" id="icp1q3"><div class="icp-q-text">Zadatak traži "minimum funkcije na intervalu [a,b]". Provjeri:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">Samo stacionarne točke (f'=0)</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">Stacionarne točke I rubove intervala</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">Samo rubove intervala</div>
      <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">Drugu derivaciju</div>
    </div><div class="icp-fb" id="icp1q3fb"></div></div>
    <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na finalni sažetak →</div>
    <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
  </div>
</div>
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · FINALNI SAŽETAK PO TEMAMA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="tbl"><table>
  <thead><tr><th>Tema</th><th>Što moraš znati</th><th>Najčešća greška</th><th>Brzi signal</th></tr></thead>
  <tbody>
    <tr><td><b>Algebra</b></td><td>Rastavljanje, jednadžbe, sustavi, apsolutna vrijednost</td><td>Preskakanje uvjeta ili krivo sređivanje</td><td><span class="bs bs-b">izrazi</span></td></tr>
    <tr><td><b>Funkcije</b></td><td>Domena, nultočke, sjecišta, grafovi, transformacije</td><td>Krivo očitana domena ili graf</td><td><span class="bs bs-g">f(x)</span></td></tr>
    <tr><td><b>Trigonometrija</b></td><td>Vrijednosti, identiteti, jednadžbe, sinus/kosinusni poučak</td><td>Miješanje radijana i stupnjeva</td><td><span class="bs bs-a">sin/cos</span></td></tr>
    <tr><td><b>Geometrija</b></td><td>Površina, volumen, Pitagora, analitička geometrija</td><td>Površina i volumen zamijenjeni</td><td><span class="bs bs-r">2D/3D</span></td></tr>
    <tr><td><b>Derivacije</b></td><td>Pravila, tangenta, monotonost, ekstremi, optimizacija</td><td>f′(x)=0 i odmah proglasiš maksimum</td><td><span class="bs bs-b">f′</span></td></tr>
    <tr><td><b>Integrali</b></td><td>Primitivne funkcije, određeni integral, površina</td><td>Ne uzmeš apsolutnu vrijednost kod površine ispod osi x</td><td><span class="bs bs-g">∫</span></td></tr>
  </tbody>
</table></div>
<div class="box-tip"><div class="bt-ico">💡</div><div class="bt-body"><div class="bt-title">Praktično pravilo</div><div class="bt-txt"><strong>Ako ne znaš odakle krenuti, nacrtaj.</strong> Skica funkcije, trokuta, tijela ili intervala vrlo često odmah otključa zadatak.</div></div></div>


<div class="inline-cp" id="icp2">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — finalni sažetak</span><span class="icp-score" id="icp2-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp2q1"><div class="icp-q-text">Derivacija f(x)=x³−6x²+9x u stacionarnoj točki x=1 je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">0</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">3</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">−3</div>
      <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">6</div>
    </div><div class="icp-fb" id="icp2q1fb"></div></div>
    <div class="icp-q" id="icp2q2"><div class="icp-q-text">∫₀² 2x dx = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">2</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">4</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">8</div>
      <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">1</div>
    </div><div class="icp-fb" id="icp2q2fb"></div></div>
    <div class="icp-q" id="icp2q3"><div class="icp-q-text">sin²α + cos²α = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">0</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">1</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">2</div>
      <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">sin(2α)</div>
    </div><div class="icp-fb" id="icp2q3fb"></div></div>
    <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na zadnje zamke →</div>
    <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
  </div>
</div>
<div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · ZADNJE ZAMKE PRIJE ISPITA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>
<div class="box-bug"><div class="bug-head">🐛 najveće završne greške</div><div class="bug-body">
  <div class="bug-task">1) Prepišeš formulu bez razumijevanja<br>2) Ne provjeriš je li rezultat smislen<br>3) Zaboraviš jedinice ili uvjete<br>4) Odeš predaleko u račun kad je zadatak bio kratak</div>
  <div class="bug-expl show ng">✗ Završna poruka: na maturi nije cilj pokazati sve što znaš, nego točno riješiti ono što se pita — što brže i čišće.</div>
</div></div>
<div class="checkpoint" id="cp"><div class="cp-head"><span class="cp-icon">✅</span><div><div class="cp-title">Finalni checkpoint — jesi li spreman?</div><div class="cp-sub">Ovo je zadnja kontrolna lista prije mature</div></div></div>
  <ul class="cp-list">
    <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Znam prepoznati temu zadatka u prvih 10 sekundi</li>
    <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Provjeravam domenu i uvjete prije računanja</li>
    <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Znam kad trebam derivaciju, a kad integral</li>
    <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Prepoznajem najčešće NCVVO zamke</li>
    <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Mogu riješiti zadatak uredno i bez panike</li>
  </ul>
  <div class="cp-footer"><span id="cp-txt">0 / 5 potvrđeno</span><span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za maturu!</span></div>
</div>
<div class="matura-block"><div class="matura-hd">⭐ finalni matura fokus</div><ul class="matura-list">
  <li class="mi"><div class="mi-dot"></div><span><b>Čitaj što se pita.</b> Pola grešaka dolazi iz brzog čitanja, ne iz neznanja.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Prvo otvori zadatak, pa računaj.</b> Skica, domena ili formula — jedan od ta tri koraka uvijek ide prvi.</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Kontroliraj rezultat.</b> Ima li smisla? Je li broj moguć? Je li znak ispravan? Jesu li jedinice logične?</span></li>
  <li class="mi"><div class="mi-dot"></div><span><b>Ne paničari na složenom zadatku.</b> Razbij ga na male dijelove i rješavaj jedan po jedan.</span></li>
</ul></div>
<div class="connect-next"><div class="cn-head"><span class="cn-icon">🏁</span><div><div class="cn-title">Što dalje nakon P20?</div><div class="cn-sub">Ovo je završno poglavlje — sad slijedi samo ciljano ponavljanje</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">1</span><span class="cn-item-title">Ponovi slabe teme</span></div><div class="cn-item-desc">Vrati se na 2–3 poglavlja u kojima najviše griješiš.</div><div class="cn-item-arrow">→ ciljano, ne nasumično</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">2</span><span class="cn-item-title">Riješi puni ispit</span></div><div class="cn-item-desc">Jedan cijeli ispit pod vremenom daje ti realnu sliku spremnosti.</div><div class="cn-item-arrow">→ simulacija mature</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">3</span><span class="cn-item-title">Analiziraj greške</span></div><div class="cn-item-desc">Najvrjednije nije broj točnih, nego zašto su netočni nastali.</div><div class="cn-item-arrow">→ popravi obrazac grešaka</div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">4</span><span class="cn-item-title">Zadrži mirnoću</span></div><div class="cn-item-desc">Na ispitu pobjeđuje disciplina, ne panika.</div><div class="cn-item-arrow">→ čisto, smireno, precizno</div></div>
  </div>
</div>

<div class="inline-cp" id="icp3">
  <div class="icp-head"><span class="icp-title">Provjeri razumijevanje — zadnje zamke</span><span class="icp-score" id="icp3-sc">0 / 3</span></div>
  <div class="icp-body">
    <div class="icp-q" id="icp3q1"><div class="icp-q-text">lim(x→0) sin(x)/x = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">0</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">1</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">∞</div>
      <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">ne postoji</div>
    </div><div class="icp-fb" id="icp3q1fb"></div></div>
    <div class="icp-q" id="icp3q2"><div class="icp-q-text">C(10,3) = ?</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">30</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">60</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">120</div>
      <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">720</div>
    </div><div class="icp-fb" id="icp3q2fb"></div></div>
    <div class="icp-q" id="icp3q3"><div class="icp-q-text">Prostorna dijagonala kocke brida a je:</div><div class="icp-opts">
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">a√2</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">a√3</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">a√5</div>
      <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">3a</div>
    </div><div class="icp-fb" id="icp3q3fb"></div></div>
    <div class="icp-done" id="icp3-done">✓ Spreman si! Idi na završni quiz →</div>
    <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
  </div>
</div>

<div class="drill"><div class="drill-head"><span class="drill-title">// Brzi refleks — Točno ili Netočno?</span><span class="drill-score" id="dr-sc">0 / 0</span></div>
  <div class="drill-body">
    <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
    <div class="drill-q" id="dr-q">Derivacija konstante je 0</div>
    <div class="drill-opts"><div class="drill-opt" onclick="drill(this,true)">✓ Točno</div><div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div></div>
    <div class="drill-fb" id="dr-fb"></div>
    <div class="drill-ctrl"><button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button></div>
    <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
  </div>
</div>

<div class="ncvvo-real"><div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div><div class="ncvvo-real-body">
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · sintetski</span>Derivacije · ~60% netočnih<span class="ncvvo-live-stat neutral" id="nlive-der">derivacije</span></div>
    <div class="ncvvo-real-q">f(x)=x³−6x²+9x. Nađi lokalni minimum.</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>ne provjeravaju f″ ili ne testiraju rubove intervala</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">f′=3x²−12x+9=3(x−1)(x−3)=0 → x=1,3<br>f″=6x−12. f″(3)=6>0 → <strong>x=3 lok. minimum, f(3)=0</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · sintetski</span>Integrali · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-int">integrali</span></div>
    <div class="ncvvo-real-q">Izračunaj ∫₁⁴ (2x+<span class="frac"><span class="num">1</span><span class="den">√x</span></span>) dx</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave integrirati <span class="frac"><span class="num">1</span><span class="den">√x</span></span>=x^(−<span class="frac"><span class="num">1</span><span class="den">2</span></span>) kao 2√x</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">∫(2x+x^(−<span class="frac"><span class="num">1</span><span class="den">2</span></span>))dx=x²+2√x+C<br>[x²+2√x]₁⁴=(16+4)−(1+2)=<strong>17</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · sintetski</span>Granice · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-lim">granice</span></div>
    <div class="ncvvo-real-q">lim(x→2) (x³−8)/(x²−4)</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>uvrštavaju x=2 bez faktorizacije (<span class="frac"><span class="num">0</span><span class="den">0</span></span>)</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">x³−8=(x−2)(x²+2x+4), x²−4=(x−2)(x+2)<br>lim=(x²+2x+4)/(x+2)→<span class="frac"><span class="num">12</span><span class="den">4</span></span>=<strong>3</strong></div>
  </div>
  <div class="ncvvo-real-item">
    <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · sintetski</span>Trig. jednadžbe · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-trig">trigonometrija</span></div>
    <div class="ncvvo-real-q">Riješi: 2sin²x − sinx − 1 = 0 za x ∈ [0, 2π]</div>
    <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave drugi skup rješenja ili ne provjere interval</strong></div>
    <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
    <div class="ncvvo-real-ans">Supstitucija t=sinx: 2t²−t−1=(2t+1)(t−1)=0<br>sinx=1→x=π/2; sinx=−<span class="frac"><span class="num">1</span><span class="den">2</span></span>→x=7π/6, x=11π/6<br><strong>x=π/2, <span class="frac"><span class="num">7π</span><span class="den">6</span></span>, 11π/6</strong></div>
  </div>
</div></div>
<div class="nav-row"><span class="nb" onclick="sw(0)">← Pregled</span><span class="nb primary" onclick="sw(2)">Završni quiz →</span></div>
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
  <div class="quiz-intro"><strong>// završna sistematizacija</strong> · 12 pitanja · cilj: <strong>10/12</strong> · fokus na prepoznavanje teme, alata i najčešćih završnih zamki</div>
  <div id="quiz-container"></div>
  <div class="score-box" id="score"><div class="score-num" id="snum">0/12</div><div class="score-lbl" id="slbl"></div></div>
  <div class="cta"><div><div class="cta-e">discere archive</div><div class="cta-t">Završi pripremu stvarnim zadacima</div><div class="cta-s">Svi NCVVO zadaci 2010.–2026. uz rješenja, filtre i završno ponavljanje po temama.</div></div><a href="https://maturiraj.hr" class="cta-btn">Otvori Discere →</a></div>
  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · domena</div><div class="fitb-sent">Kod racionalne funkcije prvo provjeravaš ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="upiši" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','uvjet definiranosti','fin1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · derivacije</div><div class="fitb-sent">Za stacionarne točke rješavaš jednadžbu ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="upiši" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','f′(x)=0','fin2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · integrali</div><div class="fitb-sent">Površinu ispod osi x računaš uz pomoć ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="upiši" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','apsolutne vrijednosti','fin3')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>
  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · završni fokus</div><div class="fitb-sent">Najčešći uzrok gubitka bodova na A razini je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="upiši" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','žurba','fin4')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>
  <div class="nav-row"><span class="nb" onclick="sw(1)">← Uči</span><button onclick="navigateChapter('p21')" class="nb primary">Završetak sustava ✓</button></div>
</div>
</div></main></div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}
var tabProgress=[94,96,99];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p20_tab',i);}catch(e){}
}
function calcTangenta(){
  var x0=parseFloat(document.getElementById('tan-x0').value),res=document.getElementById('tan-result');
  if(isNaN(x0)){res.innerHTML='<span style="color:var(--red)">Upiši broj.</span>';return;}
  var y0=x0*x0,m=2*x0,b=y0-m*x0;
  var btxt=(b>=0?'+ ':'- ')+Math.abs(Math.round(b*100)/100);
  res.innerHTML='Za f(x)=x²: f′(x)=2x pa je m=f′('+x0+')=<strong>'+m+'</strong>. Točka je <strong>('+x0+','+y0+')</strong>. Tangenta: <strong>y='+m+'x '+(b>=0?'+ ':'- ')+Math.abs(b)+'</strong>';
}
var stepSt={};
function nxtStep(id,tot){if(!stepSt[id])stepSt[id]=0;stepSt[id]=Math.min(stepSt[id]+1,tot);for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}var prog=document.getElementById(id+'p');if(prog)prog.textContent=stepSt[id]+' / '+tot;}
function rstStep(id,tot){stepSt[id]=0;for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}var prog=document.getElementById(id+'p');if(prog)prog.textContent='0 / '+tot;document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';f.textContent='';});}
var tryExp={str1:'Površina između grafa i osi ili dvaju grafova gotovo uvijek znači određeni integral.',mix1:'Ako se traži najveća vrijednost, nakon kandidata iz derivacije moraš vratiti se na funkciju i interval.',mix2:'Kod površine između x i x² na [0,1] gornja funkcija je x, a donja x².'};
function normMath(s){return s.replace(/\\s/g,'').toLowerCase().replace(/²/g,'^2').replace(/⁴/g,'^4').replace(/π/g,'pi');}
function tryIt(iid,fid,ans,key){var inp=document.getElementById(iid),fb=document.getElementById(fid);var v=inp.value.trim();if(!v)return;inp.disabled=true;var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;var ok=normMath(v)===normMath(ans);inp.classList.add(ok?'ok':'fail');fb.className='sr-try-fb show '+(ok?'ok':'fail');fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];}
var bugDone={};var bugExp={b1:'✓ Točno! Za maksimum/minimum prvo tražiš kandidate preko derivacije i onda provjeravaš interval.',b2:'✓ Točno! x=3 može biti mjesto maksimuma, ali ako se traži najveća vrijednost moraš izračunati f(3).',b3:'✓ Točno! Površina između grafova računa se kao gornja minus donja, odnosno ovdje x−x².'};
function bug(el,id,ok,eid){if(bugDone[id])return;bugDone[id]=true;el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}var expl=document.getElementById(eid);expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];expl.className='bug-expl show '+(ok?'ok':'ng');}
var icpAnswered={};var icpFeedback={icp1:{q1:{ok:'✓ Točno! Minimum/maksimum najčešće vodi na derivaciju.',ng:'✗ Netočno. Riječi najveća/najmanja vrijednost obično signaliziraju ekstrem i derivaciju.'},q2:{ok:'✓ Točno! Površina omeđena grafom traži određeni integral.',ng:'✗ Netočno. Površina između grafa i osi/grafova računa se određenim integralom.'},q3:{ok:'✓ Točno! Parametar znači da moraš postaviti matematički uvjet.',ng:'✗ Netočno. Kod parametra najprije zapisuješ uvjet koji opisuje situaciju.'}},icp1:{
    q1:{ok:'✓ Točno! Razumijevanje zadatka je pola rješenja. Žurba je najčešći uzrok grešaka.',ng:'✗ Netočno. Uvijek pročitaj pažljivo — identificiraj što je dano i što se traži.'},
    q2:{ok:'✓ Točno! Površina između grafova = ∫(gornja−donja)dx. Integral je pravi alat.',ng:'✗ Netočno. "Površina" → određeni integral ∫(f−g)dx na intervalu presjeka.'},
    q3:{ok:'✓ Točno! Na zatvorenom intervalu minimum može biti u stac. točki ILI na rubu! Provjeri sve!',ng:'✗ Netočno. Na [a,b] provjeri: stac. točke (f'=0) I rubove f(a), f(b). Uzmi najmanji!'}
  },
  icp2:{q1:{ok:'✓ Točno! Kad se traži najveća vrijednost, često trebaš izračunati f(x₀).',ng:'✗ Netočno. x₀ je često samo mjesto ekstrema, a traži se funkcijska vrijednost.'},q2:{ok:'✓ Točno! Na zatvorenom intervalu gledaš rubove i stacionarne točke.',ng:'✗ Netočno. Moraš usporediti sve kandidate: rubove i unutarnje stacionarne točke.'},q3:{ok:'✓ Točno! Ako je ekstrem u x=3, tada je f′(3)=0.',ng:'✗ Netočno. U unutarnjoj točki ekstrema vrijedi f′(3)=0.'}}};
function icp(icpId,qId,el,ok,fbId){var key=icpId+'_'+qId;if(icpAnswered[key]!==undefined)return;icpAnswered[key]=ok;el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById(fbId),msgs=icpFeedback[icpId][qId];fb.textContent=ok?msgs.ok:msgs.ng;fb.className='icp-fb show '+(ok?'ok':'ng');var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});if(allDone){document.getElementById(icpId+'-done').classList.add('show');document.getElementById(icpId+'-retry').classList.add('show');var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;document.getElementById(icpId+'-sc').textContent=score+' / 3';updateProgress();}}
function retryIcp(icpId){['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});document.getElementById(icpId+'-done').classList.remove('show');document.getElementById(icpId+'-retry').classList.remove('show');document.getElementById(icpId+'-sc').textContent='0 / 3';document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';});}
var cpState={};
function toggleCP(n){cpState[n]=!cpState[n];var el=document.getElementById('cp'+n);if(el)el.classList.toggle('done-item',cpState[n]);var ck=el.querySelector('.cp-check');if(ck)ck.classList.toggle('done',cpState[n]);var done=Object.values(cpState).filter(Boolean).length;document.getElementById('cp-txt').textContent=done+' / 5 potvrđeno';document.getElementById('cp-ready').style.display=done>=5?'inline':'none';updateProgress();}
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}
var drData=[{q:'Na zadatku s maksimumom često treba derivacija',ans:true,tag:'ekstrem',exp:'Točno! To je prvi signal.'},{q:'Za površinu između grafova uvijek pišeš donja minus gornja',ans:false,tag:'površina',exp:'Netočno! Za površinu uzimaš gornja − donja.'},{q:'Kod parametra m obično trebaš postaviti uvjet',ans:true,tag:'parametar',exp:'Točno! Bez uvjeta nema rješenja.'},{q:'Na zatvorenom intervalu dovoljno je provjeriti samo f′(x)=0',ans:false,tag:'interval',exp:'Netočno! Moraš provjeriti i rubove intervala.'},{q:'Skica u geometrijskom zadatku često spašava bodove',ans:true,tag:'geometrija',exp:'Točno! Skica otkriva odnose i formule.'},{q:'Negativan određeni integral automatski znači negativnu površinu',ans:false,tag:'integral',exp:'Netočno! Površina je geometrijska veličina i ne može biti negativna.'},{q:'Ako zadatak traži najveću vrijednost funkcije, odgovor ponekad nije x nego f(x)',ans:true,tag:'tekst zadatka',exp:'Točno! Uvijek čitaj što se traži.'},{q:'Kod složenog zadatka najbolje je odmah krenuti računati',ans:false,tag:'strategija',exp:'Netočno! Prvo identificiraš temu i alat.'}];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){if(drDone)return;drDone=true;drTot++;var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});el.classList.add(ok?'ok':'ng');var fb=document.getElementById('dr-fb');fb.innerHTML=(ok?'✓ ':'✗ ')+d.exp;fb.className='drill-fb '+(ok?'ok':'ng');document.getElementById('dr-sc').textContent=drOk+' / '+drTot;document.getElementById('dr-next').style.display='inline-flex';document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';updateProgress();}
function nextDrill(){drIdx=(drIdx+1)%drData.length;drDone=false;document.getElementById('dr-q').textContent=drData[drIdx].q;document.getElementById('dr-fb').className='drill-fb';document.getElementById('dr-fb').textContent='';document.getElementById('dr-next').style.display='none';document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});}
var topicErrors={algebra:0,funkcije:0,geometrija:0,trigonometrija:0,derivacije:0,integrali:0};
var topicHints={algebra:'Ponovi: sređivanje izraza, uvjet definiranosti i jednadžbe.',funkcije:'Ponovi: domenu, nultočke, presjeke i čitanje grafa.',geometrija:'Ponovi: Pitagoru, površine, volumene i osnovne formule.',trigonometrija:'Ponovi: posebne kutove, identitete i osnovne jednadžbe.',derivacije:'Ponovi: pravila deriviranja, tangentu i uvjet f′(x)=0.',integrali:'Ponovi: primitivne funkcije, granice i površinu na intervalu.'};
var qTopics={q1:'algebra',q2:'funkcije',q3:'geometrija',q4:'trigonometrija',q5:'derivacije',q6:'integrali',q7:'algebra',q8:'funkcije',q9:'geometrija',q10:'derivacije',q11:'integrali',q12:'trigonometrija'};
var ncvvoTopicMap={'nlive-pir':['q3','q9'],'nlive-val':['q6','q11'],'nlive-dij':['q1','q2','q7','q8'],'nlive-sfe':['q4','q5','q10','q12']};
function checkAdaptive(qid,ok){var topic=qTopics[qid];if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}if(ok)streak++;else streak=0;updateTimerLabel();updateNcvvoLiveStats();}
function updateNcvvoLiveStats(){Object.keys(ncvvoTopicMap).forEach(function(id){var el=document.getElementById(id);if(!el)return;var qs=ncvvoTopicMap[id];var done=qs.filter(function(q){return answered[q]!==undefined;});if(done.length===0)return;var ok=qs.filter(function(q){return answered[q]===true;}).length;var pct=Math.round(ok/done.length*100);el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';});}
function updateProgress(){var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;var cpDone=Object.values(cpState).filter(Boolean).length;var cpPts=Math.round(cpDone/5*6);var icpPts=0;['icp1','icp2','icp3'].forEach(function(icp){var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;icpPts+=Math.round(done/3*3);});var quizPts=Object.keys(answered).length>0?Math.round(correct/total*12):0;tabProgress[1]=Math.min(86+drillPts+icpPts+cpPts,92);tabProgress[2]=Math.min(88+drillPts+icpPts+cpPts+quizPts,100);var curIdx=Array.from(document.querySelectorAll('.tab')).findIndex(function(t){return t.classList.contains('on');});var p=tabProgress[curIdx<0?0:curIdx];document.getElementById('prog-bar').style.width=p+'%';document.getElementById('prog-pct').textContent=p+'%';try{localStorage.setItem('maturiraj_p20_prog',p);}catch(e){}}
function getAudio(){return null;} function soundCorrect(){} function soundWrong(){} function soundTick(){} function soundTimeUp(){} function soundComplete(){}
function setExamMode(mode,el){examMode=mode;document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});el.classList.add('active');if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}else{document.getElementById('exam-timer').style.display='none';stopTimer();}}
function drawTimerCanvas(secs,max){var c=document.getElementById('timer-canvas');if(!c)return;var ctx=c.getContext('2d'),r=28,cx=32,cy=32;ctx.clearRect(0,0,64,64);ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();var pct=secs/max;var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();document.getElementById('et-num').textContent=secs;}
function startTimer(){stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);timerInterval=setInterval(function(){timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);if(timerSeconds<=0){stopTimer();}},1000);}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){document.getElementById('et-q-label').textContent='Pitanje '+currentQ+' / 12';document.getElementById('et-streak').textContent='Niz: '+streak+' ✓';}
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'br',meta:'skupovi brojeva',text:'√2 + √3 pripada skupu:',opts:[{t:'ℕ',ok:false},{t:'ℚ',ok:false},{t:'𝕀',ok:true},{t:'ℤ',ok:false}],c:'✓ Točno. Suma dvaju iracionalnih je iracionalna (u ovom slučaju).',w:'✗ Netočno. √2 i √3 su iracionalni, njihova suma ostaje iracionalna.',proof:['√2∈𝕀, √3∈𝕀','√2+√3 nije racionalan','√2+√3∈𝕀']},
  {id:'q2',topic:'al',meta:'logaritmi',text:'log₂(32) = ?',opts:[{t:'4',ok:false},{t:'5',ok:true},{t:'6',ok:false},{t:'16',ok:false}],c:'✓ Točno. 2⁵=32 → log₂(32)=5.',w:'✗ Netočno. 2⁵=32. log₂(32)=5.',proof:['2⁵=32','log₂(32)=5','Provjera: 2⁵=32 ✓']},
  {id:'q3',topic:'trig',meta:'trigonometrija',text:'sin(150°) = ?',opts:[{t:'√3/2',ok:false},{t:'1/2',ok:true},{t:'−1/2',ok:false},{t:'−√3/2',ok:false}],c:'✓ Točno. sin(150°)=sin(180°−30°)=sin(30°)=1/2.',w:'✗ Netočno. 150°=180°−30°. sin(180°−α)=sinα → sin(150°)=sin(30°)=1/2.',proof:['150°=180°−30°','sin(180°−α)=sinα','sin(150°)=sin(30°)=1/2']},
  {id:'q4',topic:'funk',meta:'funkcija — transformacije',text:'Graf y=f(x−2)+3 nastaje od y=f(x) pomicanjem:',opts:[{t:'2 lijevo, 3 gore',ok:false},{t:'2 desno, 3 gore',ok:true},{t:'2 desno, 3 dolje',ok:false},{t:'3 desno, 2 gore',ok:false}],c:'✓ Točno. f(x−2): pomak 2 desno. +3: pomak 3 gore.',w:'✗ Netočno. x−2 → pomak 2 u desno. +3 → pomak 3 gore.',proof:['x−2 → 2 jedinice desno','+3 → 3 jedinice gore','Pomak (2, 3)']},
  {id:'q5',topic:'anal',meta:'analitička geometrija',text:'Udaljenost točke (3,4) od ishodišta je:',opts:[{t:'3.5',ok:false},{t:'5',ok:true},{t:'7',ok:false},{t:'12',ok:false}],c:'✓ Točno. d=√(3²+4²)=√(9+16)=√25=5.',w:'✗ Netočno. d=√(x²+y²)=√(9+16)=√25=5.',proof:['d=√(x²+y²)','=√(9+16)=√25','=5']},
  {id:'q6',topic:'niz',meta:'nizovi',text:'S∞ geometrijskog niza s a₁=6 i q=1/3 je:',opts:[{t:'6',ok:false},{t:'9',ok:true},{t:'18',ok:false},{t:'3',ok:false}],c:'✓ Točno. S∞=a₁/(1−q)=6/(1−1/3)=6/(2/3)=9.',w:'✗ Netočno. S∞=a₁/(1−q)=6/(2/3)=9.',proof:['S∞=a₁/(1−q)','=6/(1−1/3)=6/(2/3)','=9']},
  {id:'q7',topic:'komb',meta:'kombinatorika',text:'C(8,5) = ?',opts:[{t:'40',ok:false},{t:'56',ok:true},{t:'336',ok:false},{t:'28',ok:false}],c:'✓ Točno. C(8,5)=C(8,3)=8·7·6/6=56.',w:'✗ Netočno. C(8,5)=C(8,3) (simetrija). C(8,3)=8·7·6/(3·2·1)=56.',proof:['C(8,5)=C(8,3) simetrija','8·7·6/(3·2·1)=336/6','=56']},
  {id:'q8',topic:'dif',meta:'derivacije',text:'(eˣ·sinx)' = ?',opts:[{t:'eˣ·cosx',ok:false},{t:'eˣ(sinx+cosx)',ok:true},{t:'eˣ·sinx',ok:false},{t:'eˣ·cosx−eˣ·sinx',ok:false}],c:'✓ Točno. Pravilo produkta: eˣ·sinx+eˣ·cosx=eˣ(sinx+cosx).',w:'✗ Netočno. (uv)'=u'v+uv'. (eˣ)'sinx+eˣ(sinx)'=eˣsinx+eˣcosx=eˣ(sinx+cosx).',proof:['(uv)'=u'v+uv'','(eˣ)'=eˣ, (sinx)'=cosx','eˣsinx+eˣcosx=eˣ(sinx+cosx)']},
  {id:'q9',topic:'int',meta:'integrali',text:'∫cos(x) dx = ?',opts:[{t:'sin(x)+C',ok:true},{t:'−sin(x)+C',ok:false},{t:'cos(x)+C',ok:false},{t:'−cos(x)+C',ok:false}],c:'✓ Točno. ∫cosx dx=sinx+C.',w:'✗ Netočno. (sinx)'=cosx → ∫cosx dx=sinx+C.',proof:['(sinx)'=cosx','Obratno: ∫cosx dx=sinx+C','Provjera: d/dx(sinx)=cosx ✓']},
  {id:'q10',topic:'geom',meta:'geometrija prostora',text:'Volumen sfere polumjera 3 je:',opts:[{t:'12π',ok:false},{t:'36π',ok:true},{t:'108π',ok:false},{t:'9π',ok:false}],c:'✓ Točno. V=4πr³/3=4π·27/3=36π.',w:'✗ Netočno. V=4πr³/3=4π·27/3=36π.',proof:['V=4πr³/3','=4π·3³/3=4π·27/3','=36π']},
  {id:'q11',topic:'exp',meta:'eksponencijalna jednadžba',text:'Rješenje 2ˣ=16 je:',opts:[{t:'3',ok:false},{t:'4',ok:true},{t:'8',ok:false},{t:'2',ok:false}],c:'✓ Točno. 2⁴=16 → x=4.',w:'✗ Netočno. 2ˣ=16=2⁴ → x=4.',proof:['2ˣ=16=2⁴','Iste baze → x=4','Provjera: 2⁴=16 ✓']},
  {id:'q12',topic:'lim',meta:'A razina — granice i derivacije',text:'lim(x→0) sinx/x · eˣ = ?',opts:[{t:'0',ok:false},{t:'e',ok:false},{t:'1',ok:true},{t:'∞',ok:false}],c:'✓ Točno. lim(sinx/x)=1, lim(eˣ)=e⁰=1. Produkt=1·1=1.',w:'✗ Netočno. lim(sinx/x)=1 i lim(eˣ)|_{x→0}=e⁰=1. Produkt=1.',proof:['lim(sinx/x)=1 (fund. limes)','lim(eˣ)=e⁰=1','Produkt=1·1=1']}
];
function renderQuiz(){var cont=document.getElementById('quiz-container');cont.innerHTML=ALL_QUESTIONS.map(function(q){return '<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+q.opts.map(function(o,i){return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';}).join('')+'</div><div class="qe" id="'+q.id+'e"></div></div>';}).join('');total=ALL_QUESTIONS.length;}
function qa(qid,idx,ok,eid){if(answered[qid]!==undefined)return;answered[qid]=ok;if(ok)correct++;var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});if(!qdata)return;document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){o.classList.add('dis');if(i===idx)o.classList.add(ok?'correct':'wrong');if(!ok&&qdata.opts[i].ok)o.classList.add('correct');});var e=document.getElementById(eid);e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>';e.classList.add('show');currentQ=Object.keys(answered).length+1;checkAdaptive(qid,ok);if(Object.keys(answered).length===total){document.getElementById('score').classList.add('show');document.getElementById('snum').textContent=correct+'/'+total;document.getElementById('slbl').textContent=correct>=10?'Izvrsno! Spreman si za integrale.':correct>=7?'Dobro! Ponovi tangente i ekstreme.':'Ponovi osnovna pravila prije nastavka.';}updateProgress();}
var FExp={fin1:'Bez uvjeta definiranosti lako dobiješ nedopušten rezultat. To je prvi filter zadatka.',fin2:'Stacionarne točke nalaziš iz f′(x)=0. Tek nakon toga provjeravaš maksimum/minimum.',fin3:'Kad graf ide ispod osi x, površina traži apsolutnu vrijednost ili razdvajanje intervala.',fin4:'Najviše bodova pada zbog žurbe, ne zbog preteške matematike.'};
function chkf(iid,fid,ans,key){var inp=document.getElementById(iid),fb=document.getElementById(fid),v=inp.value.trim();if(!v)return;inp.disabled=true;inp.parentElement.querySelector('.fitb-btn').disabled=true;var ok=normMath(v)===normMath(ans);inp.classList.add(ok?'ok':'fail');fb.className='fitb-fb show '+(ok?'ok':'fail');fb.innerHTML=(ok?'✓ Točno: ':'✗ Točno je: ')+'<strong>'+ans+'</strong> — '+FExp[key];}
(function(){try{var s=sessionStorage.getItem('p20_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE TAB (mora biti na kraju) ── */
(function(){try{var s=sessionStorage.getItem('p20_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();   

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){try{var saved=localStorage.getItem('maturiraj_p20_prog');if(saved!==null){var pct=parseInt(saved);if(pct>0){var bar=document.getElementById('prog-bar');var lbl=document.getElementById('prog-pct');if(bar)bar.style.width=pct+'%';if(lbl)lbl.textContent=pct+'%';}}}catch(e){}})(  );

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
const meta = {id:'P20',pidLower:'p20',title:"Maturiraj.hr \u2014 Mat A \u00b7 P20 \u00b7 Zavr\u0161na Sistematizacija",subject:'matematika-a',lsKey:'maturiraj_p20_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p20');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P20] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p20"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p20_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p20_prog',String(pct));}catch(e){}}
// ── Complete page for MatChapterViewer (iframe srcDoc) ───────────────────────
const _navGlue = 'function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:navigateChapter\',id:id},\'*\');}}\nfunction backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:\'maturiraj:backToList\'},\'*\')}}';
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P20 · Završna Sistematizacija</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';

export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};