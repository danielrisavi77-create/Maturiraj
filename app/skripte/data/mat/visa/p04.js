/**
 * Maturiraj.hr — Mat A · P04
 * Maturiraj.hr — Mat A · P04 · Jednadžbe i Nejednadžbe
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
.si-r{background:var(--dim-r);color:var(--red)}

/* ── EQ SOLVER (P04, P06, P08, P09) ── */
.eq-solver{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.eq-s-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;gap:10px}
.eq-s-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--amber);text-transform:uppercase}
.eq-s-body{padding:16px 17px;display:flex;flex-direction:column;gap:10px}
.eq-s-row{display:flex;align-items:center;gap:8px;flex-wrap:wrap}
.eq-s-lbl{font-family:var(--mono);font-size:13px;color:var(--t2)}
.eq-s-in{font-family:var(--mono);font-size:14px;font-weight:700;padding:6px 10px;border:1px solid var(--bdm);border-radius:var(--r2);background:var(--inp);color:var(--t1);width:70px;text-align:center}
.eq-s-result{font-family:var(--mono);font-size:13px;color:var(--cyan);padding:8px 12px;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);margin-top:4px;min-height:28px;line-height:1.6}
.eq-s-result{font-family:var(--mono);font-size:13px;color:var(--cyan);padding:8px 12px;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);margin-top:4px;min-height:28px;line-height:1.6}`;
const _bodyHTML = `<div class="shell">

<div class="sb-hamburger" id="hamburger" onclick="toggleSidebar()">
  <span></span><span></span><span></span>
</div>
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
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>04 · Jednadžbe i nejednadžbe</button>
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

<main class="main">
<div class="content-wrap">

<div class="bc">
  <span>← poglavlja</span><span class="bc-sep">/</span>
  <span>a-razina</span><span class="bc-sep">/</span>
  <span class="bc-cur">jednadžbe-nejednadžbe-sustavi</span>
</div>

<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══════════════════ L0 — QUICK VIEW ═══════════════════ -->
<div class="layer on" id="l0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 04 od 21 · A razina · temelji</div>
    <h1 class="hero-title">Jednadžbe,<br><span>Nejednadžbe i Sustavi</span></h1>
    <p class="hero-sub">Srce algebre — rješavanje jednadžbi je vještina koja se pojavljuje na svakom ispitu</p>
    <div class="hero-meta">
      <span class="hchip b">5 tipova</span>
      <span class="hchip a">⭐ Najveća maturalna frekvencija</span>
      <span class="hchip c">~40 min</span>
    </div>
    <div class="pt"><div class="pb" style="width:24%"></div></div>
  </div>

  <div class="tags">
    <span class="pill p-b">Linearne jednadžbe</span>
    <span class="pill p-c">Kvadratne jednadžbe</span>
    <span class="pill p-i">Jednadžbe s |x|</span>
    <span class="pill p-a">Linearne nejednadžbe</span>
    <span class="pill p-v">Kvadratne nejednadžbe</span>
    <span class="pill p-r">Sustavi jednadžbi</span>
  </div>

  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int">
    <div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">
      Nema poglavlja na maturi koje ne zahtijeva rješavanje neke jednadžbe ili nejednadžbe. Kvadratna jednadžba pojavljuje se u funkcijama, trigonometriji, analitičkoj geometriji i integralima.<br><br>
      Apsolutna vrijednost u jednadžbi zbunjuje čak i dobre učenike — krivo postavljanje slučajeva donosi 0 bodova čak i kad je aritmetika točna.<br><br>
      <strong>Kvadratna nejednadžba je jedina stvar gdje predznak vodećeg koeficijenta mijenja sve — to mora biti automatski refleks.</strong>
    </div>
  </div>

  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">ax+b=0</div><div class="sc-name">Linearne jednadžbe</div><div class="sc-desc">Izoliraš x u jednom koraku. Pazi na dijeljenje s negativnim — ne mijenja se smjer!</div></div>
    <div class="sc"><div class="sc-ico si-c">ax²+bx+c=0</div><div class="sc-name">Kvadratne jednadžbe</div><div class="sc-desc">Diskriminanta D = b²−4ac. D>0: 2 rješenja, D=0: 1, D&lt;0: nema realnih.</div></div>
    <div class="sc"><div class="sc-ico si-i">|x|=a</div><div class="sc-name">Jednadžbe s |x|</div><div class="sc-desc">Dva slučaja: x = a ili x = −a (ako a ≥ 0). Uvijek provjeri rješenja!</div></div>
    <div class="sc"><div class="sc-ico si-a">ax+b&lt;0</div><div class="sc-name">Linearne nejednadžbe</div><div class="sc-desc">Kao jednadžba, ali: množenje/dijeljenje s negativnim okreće smjer!</div></div>
    <div class="sc"><div class="sc-ico si-v">ax²+bx+c&lt;0</div><div class="sc-name">Kvadratne nejednadžbe</div><div class="sc-desc">Nađi nultočke, skiciraj parabolu, čitaj predznak. Parabola gore ili dolje?</div></div>
    <div class="sc"><div class="sc-ico si-r">2×2</div><div class="sc-name">Sustavi jednadžbi</div><div class="sc-desc">Supstitucija ili eliminacija. Geometrijski: presjek dviju pravaca.</div></div>
  </div>

  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Linearna: ax = b</div><div class="cv">x = <span class="frac"><span class="num">b</span><span class="den">a</span></span> (za a ≠ 0). Ako a = 0: ili nema rješenja ili beskonačno mnogo.</div></div>
    <div class="cr"><div class="ck c">Diskriminanta D</div><div class="cv">D = b²−4ac. x₁,₂ = (−b ± √D) / 2a. Provjeri predznak PRIJE računanja!</div></div>
    <div class="cr"><div class="ck c">Vièteove formule</div><div class="cv">x₁+x₂ = −<span class="frac"><span class="num">b</span><span class="den">a</span></span> · x₁·x₂ = <span class="frac"><span class="num">c</span><span class="den">a</span></span>. Brza provjera bez računanja korijena.</div></div>
    <div class="cr"><div class="ck i">|izraz| = a</div><div class="cv">Ako a &lt; 0: nema rješenja. Ako a ≥ 0: izraz = a ili izraz = −a.</div></div>
    <div class="cr"><div class="ck i">|izraz| &lt; a</div><div class="cv">−a &lt; izraz &lt; a (zatvoren interval). Za > a: izraz &lt; −a ili izraz > a.</div></div>
    <div class="cr"><div class="ck a">Nejednadžba: &lt;0 ili >0</div><div class="cv">Množi/dijeli s negativnim → OBRNI smjer! Ovo je najčešća greška.</div></div>
    <div class="cr"><div class="ck v">Kvadratna nejednadžba</div><div class="cv">a>0 (parabola gore): između nultočaka < 0, izvana > 0. Za a&lt;0: obratno!</div></div>
    <div class="cr"><div class="ck r">Zamka: provjera</div><div class="cv">Racionalne jednadžbe i jednadžbe s |x| — uvijek provjeri rješenja u originalnoj!</div></div>
  </div>

  <div class="nav-row">
    <button onclick="navigateChapter('p03')" class="nb">← P03 · Polinomi</button>
    <span class="nb primary" onclick="sw(1)">Uči detaljno →</span>
  </div>
</div>

<!-- ═══════════════════ L1 — LEARN ═══════════════════ -->
<div class="layer" id="l1">

  <!-- ══ 01 LINEARNE JEDNADŽBE ══ -->
  <div class="box-warn" style="margin-bottom:12px">
    <span class="bw-ico">📄</span>
    <div class="bw-body">
      <div class="bw-title">PAPIRNA PROVJERA</div>
      <div class="bw-txt">Na ispitu nema klikanja! Provjeri možeš li svaki primjer riješiti ručno na papiru. Step-by-step vodič slijedi odmah ispod.</div>
    </div>
  </div>
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · LINEARNE JEDNADŽBE I NEJEDNADŽBE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — ravnoteža vage</div>
    <div class="box-int-txt">
      Jednadžba je kao vaga u ravnoteži — što god radiš s jedne strane, moraš raditi i s druge. Izoliraš x dodavanjem, oduzimanjem, množenjem ili dijeljenjem obje strane.<br><br>
      Nejednadžba radi isto, s jednom iznimkom: <em>kad množiš ili dijeliš s negativnim brojem, smjer nejednadžbe se obrće</em>. −2x &lt; 6 → x > −3.<br><br>
      <strong>Ovo je jedina "čudna" pravila u linearnom slučaju — sve ostalo je intuitivno.</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">LINEARNE JEDNADŽBE I NEJEDNADŽBE</span>
    <span class="val">ax + b = 0</span> → <span class="val">x = −b/a</span> <span class="cmt">(a ≠ 0)</span><br>
    <span class="val">ax + b &lt; 0</span> → <span class="val">x &lt; −b/a</span> <span class="cmt">ako a > 0, ili x > −<span class="frac"><span class="num">b</span><span class="den">a</span></span> ako a &lt; 0 ← OBRNI!</span><br>
    <span class="cmt">Posebni slučajevi: a = 0, b = 0 → 0 = 0 (beskonačno rješenja)</span><br>
    <span class="cmt">a = 0, b ≠ 0 → b = 0 (nema rješenja, kontradikcija)</span>
  </div>

  <!-- EQUATION SOLVER — interaktivni alat -->
  <div class="eq-solver">
    <div class="eq-s-head">
      <span class="eq-s-title">// Linearni rješavač — upiši a i b</span>
    </div>
    <div class="eq-s-body">
      <div class="eq-s-row">
        <input class="eq-s-in" id="eq-a" type="number" value="2" placeholder="a">
        <span class="eq-s-lbl">x +</span>
        <input class="eq-s-in" id="eq-b" type="number" value="-6" placeholder="b">
        <span class="eq-s-lbl">= 0</span>
        <button class="eq-s-btn" onclick="solveLinear()">Riješi →</button>
      </div>
      <div class="eq-s-result" id="eq-result">Upiši koeficijente i klikni Riješi</div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — smjer nejednadžbe</div>
    <div class="box-men-txt">
      Zamisli brojevni pravac: ako množiš s −1, "ogledalo" se odražava — sve što je lijevo postaje desno.<br>
      −2x &lt; 6 → dijelimo s −2 → x > −3. Predznak se obrće jer smo okrenuli ogledalo.<br>
      <strong>Pravilo: svaki put kad dijeliš/množiš nejednadžbu s negativnim brojem, crtaj strelicu u suprotnom smjeru.</strong>
    </div>
  </div>

  <!-- STEP REVEAL 1 — linearna -->
  <div class="sr" id="sr1">
    <div class="sr-head">
      <div class="sr-title">Linearna nejednadžba — korak po korak</div>
      <div class="sr-task">Riješi: 3x − 7 > 2x + 5</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Premjesti x na jednu stranu</div>
            <div class="sr-txt">3x − 2x > 5 + 7<br><em>Oduzmi 2x s obje strane, dodaj 7 na obje strane</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Pojednostavi</div>
            <div class="sr-txt">x > 12<br><em>Koeficijent uz x je +1 — nema obrtanja smjera!</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Zapiši rješenje kao skup</div>
            <div class="sr-txt">x ∈ (12, +∞)<br>
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: riješi 5 − 2x > 11</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try1" type="text" placeholder="x ∈ ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try1','try1-fb','x∈(-∞,-3)','lin1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try1-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr1',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr1',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr1p">0 / 3</span>
    </div>
  </div>

  <!-- BUG 1 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — linearna nejednadžba</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava:</p>
      <div class="bug-task">−3x &lt; 9 → x <span class="wrong">&lt; −3</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, dijelimo 9 s 3 pa dodamo minus</div>
        <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: dijeljenje s −3 obrće smjer → x > −3</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: rezultat treba biti x &lt; 3</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: linearna nejednadžba se ne može riješiti</div>
      </div>
      <div class="bug-expl" id="b1e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — linearne</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>Jednadžba: x = −<span class="frac"><span class="num">b</span><span class="den">a</span></span>. Nejednadžba: isto, ali pazi na predznak a!</li>
      <li class="b20-item"><div class="b20-dot"></div>Množenje/dijeljenje s negativnim → OBRNI smjer nejednadžbe</li>
      <li class="b20-item"><div class="b20-dot"></div>a = 0: ili nema rješenja (b ≠ 0) ili beskonačno (b = 0)</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — linearna jednadžba</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite: 3(x − 2) − 2(x + 1) = x − 8</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Rastvori zagrade: <strong>3x − 6 − 2x − 2 = x − 8</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uredi lijevo: <strong>x − 8 = x − 8</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x − x = −8 + 8 → <strong>0 = 0</strong> ← identitet</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Zaključak: jednadžba vrijedi za sva realna x → <strong>x ∈ ℝ</strong></div></div>
      </div>
      <div class="combo-ans">x ∈ ℝ &nbsp;·&nbsp; Identitet: ∞ rješenja. Matura: prepoznaj 0=0 i pravilno zaključi!</div>
    </div>
  </div>

  <!-- ICP 1 -->
  <div class="inline-cp" id="icp1">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — linearne</span>
      <span class="icp-score" id="icp1-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1">
        <div class="icp-q-text">Rješenje od 2x − 4 = 0 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">x = 4</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">x = 2</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">x = −2</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">x = 8</div>
        </div>
        <div class="icp-fb" id="icp1q1fb"></div>
      </div>
      <div class="icp-q" id="icp1q2">
        <div class="icp-q-text">Rješenje od −4x > 8 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">x > −2</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">x > 2</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">x &lt; −2</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">x &lt; 2</div>
        </div>
        <div class="icp-fb" id="icp1q2fb"></div>
      </div>
      <div class="icp-q" id="icp1q3">
        <div class="icp-q-text">Jednadžba 0·x = 5 ima:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">rješenje x = 5</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">rješenje x = 0</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">nema rješenja</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">beskonačno rješenja</div>
        </div>
        <div class="icp-fb" id="icp1q3fb"></div>
      </div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na kvadratne jednadžbe →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 02 KVADRATNE JEDNADŽBE ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · KVADRATNE JEDNADŽBE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — diskriminanta kao detektor</div>
    <div class="box-int-txt">
      Kvadratna jednadžba ax²+bx+c = 0 ima parabolu kao grafički prikaz. Diskriminanta D = b²−4ac "detektira" koliko puta parabola probija x-os:<br><br>
      D > 0 → dva presjeka → dva realna rješenja<br>
      D = 0 → tangenta → jedno rješenje (dvostruko)<br>
      D &lt; 0 → nema presjeka → nema realnih rješenja<br><br>
      <strong>Uvijek izračunaj D PRVO — bez njega ne znaš što te čeka.</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">KVADRATNA JEDNADŽBA — formule</span>
    <span class="val">D = b² − 4ac</span> <span class="cmt">— diskriminanta</span><br>
    <span class="val">x₁,₂ = (−b ± √D) / 2a</span> <span class="cmt">— opća formula (za D ≥ 0)</span><br>
    <span class="val">x₁ + x₂ = −b/a</span> <span class="cmt">— Vièteova formula (zbroj korijena)</span><br>
    <span class="val">x₁ · x₂ = c/a</span> <span class="cmt">— Vièteova formula (produkt korijena)</span><br>
    <span class="cmt">Faktorizirani oblik: a(x − x₁)(x − x₂) = 0</span>
  </div>

  <!-- DISCRIMINANT EXPLORER -->
  <div class="disc-wrap">
    <div class="disc-head">
      <span class="disc-title">// Diskriminanta Explorer — upiši koeficijente</span>
    </div>
    <div class="disc-body">
      <div class="disc-row">
        <input class="disc-in" id="disc-a" type="number" value="1" placeholder="a">
        <span class="disc-lbl">x² +</span>
        <input class="disc-in" id="disc-b" type="number" value="-5" placeholder="b">
        <span class="disc-lbl">x +</span>
        <input class="disc-in" id="disc-c" type="number" value="6" placeholder="c">
        <span class="disc-lbl">= 0</span>
        <button class="disc-btn" onclick="solveQuad()">Izračunaj →</button>
      </div>
      <div class="disc-result" id="disc-result">Upiši a, b, c i klikni Izračunaj</div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — Vièteove formule kao provjera</div>
    <div class="box-men-txt">
      Nakon što izračunaš rješenja, provjeri s Vièteovim formulama: x₁+x₂ mora biti −<span class="frac"><span class="num">b</span><span class="den">a</span></span>, x₁·x₂ mora biti <span class="frac"><span class="num">c</span><span class="den">a</span></span>.<br>
      Primjer: x²−5x+6=0 → rješenja 2 i 3. Provjera: 2+3=5=−(−5)/1 ✓ · 2·3=6=6/1 ✓<br>
      <strong>10-sekundna provjera koja otkriva sve računske greške — koristi je uvijek!</strong>
    </div>
  </div>

  <!-- STEP REVEAL 2 — kvadratna -->
  <div class="sr" id="sr2">
    <div class="sr-head">
      <div class="sr-title">Kvadratna jednadžba — korak po korak</div>
      <div class="sr-task">Riješi: 2x² − 7x + 3 = 0</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Identificiraj koeficijente</div>
            <div class="sr-txt">a = 2, b = −7, c = 3</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Izračunaj diskriminantu</div>
            <div class="sr-txt">D = (−7)² − 4·2·3 = 49 − 24 = <strong>25</strong><br><em>D > 0 → dva realna rješenja ✓</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Primijeni formulu</div>
            <div class="sr-txt">x₁,₂ = (7 ± √25) / 4 = (7 ± 5) / 4<br>x₁ = <span class="frac"><span class="num">12</span><span class="den">4</span></span> = 3 · x₂ = <span class="frac"><span class="num">2</span><span class="den">4</span></span> = 1/2</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Provjera — Vièteove formule</div>
            <div class="sr-txt">x₁+x₂ = 3+<span class="frac"><span class="num">1</span><span class="den">2</span></span> = <span class="frac"><span class="num">7</span><span class="den">2</span></span> = −<span class="frac"><span class="num">b</span><span class="den">a</span></span> = <span class="frac"><span class="num">7</span><span class="den">2</span></span> ✓<br>x₁·x₂ = 3·<span class="frac"><span class="num">1</span><span class="den">2</span></span> = <span class="frac"><span class="num">3</span><span class="den">2</span></span> = <span class="frac"><span class="num">c</span><span class="den">a</span></span> = <span class="frac"><span class="num">3</span><span class="den">2</span></span> ✓
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: kolika je D za x²−4x+4=0?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try2" type="text" placeholder="D = ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try2','try2-fb','0','disc1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try2-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr2',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr2',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr2p">0 / 4</span>
    </div>
  </div>

  <!-- BUG 2 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — kvadratna jednadžba</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava x² + 2x + 5 = 0:</p>
      <div class="bug-task">D = 4 − 20 = −16 → x = <span class="wrong">(−2 ± √−16) / 2</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, √−16 = −4i pa dobijemo kompleksna rješenja</div>
        <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: D &lt; 0 → nema realnih rješenja, jednadžba je nerješiva u ℝ</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: D je krivo izračunata, treba biti 4+20=24</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: formula za x je pogrešna</div>
      </div>
      <div class="bug-expl" id="b2e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — kvadratne</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>D = b²−4ac. Izračunaj PRVO — određuje tip rješenja.</li>
      <li class="b20-item"><div class="b20-dot"></div>D &lt; 0 → nema realnih rješenja. Stani ovdje, ne računaj dalje!</li>
      <li class="b20-item"><div class="b20-dot"></div>Vièteove formule: x₁+x₂ = −<span class="frac"><span class="num">b</span><span class="den">a</span></span>, x₁·x₂ = <span class="frac"><span class="num">c</span><span class="den">a</span></span> — brza provjera</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — kvadratna jednadžba diskriminantom</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite: x² − 5x + 6 = 0</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Odreds koeficijente: a=1, b=−5, c=6</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Diskriminanta: D = b²−4ac = 25−24 = <strong>1 &gt; 0</strong> → 2 različita realna rješenja</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x₁,₂ = (5 ± √1) / 2 → x₁ = 3, x₂ = 2</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Provjera: (x−2)(x−3) = 0 → <strong>x = 2 ili x = 3</strong> ✓</div></div>
      </div>
      <div class="combo-ans">x = 2 ili x = 3 &nbsp;·&nbsp; Obrazac: D&gt;0 → 2 rješenja; D=0 → jedno; D&lt;0 → nema</div>
    </div>
  </div>

  <!-- ICP 2 -->
  <div class="inline-cp" id="icp2">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — kvadratne</span>
      <span class="icp-score" id="icp2-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1">
        <div class="icp-q-text">Za x² − 5x + 6 = 0, kolika je D?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">D = −7</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">D = 1</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">D = 25</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">D = 49</div>
        </div>
        <div class="icp-fb" id="icp2q1fb"></div>
      </div>
      <div class="icp-q" id="icp2q2">
        <div class="icp-q-text">Jednadžba x² + x + 1 = 0 ima:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">jedno rješenje</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">dva rješenja</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">nema realnih rješenja</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">beskonačno rješenja</div>
        </div>
        <div class="icp-fb" id="icp2q2fb"></div>
      </div>
      <div class="icp-q" id="icp2q3">
        <div class="icp-q-text">Za x²−7x+12=0, x₁·x₂ = ? (Vièteove formule)</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">7</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">12</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">−7</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">−12</div>
        </div>
        <div class="icp-fb" id="icp2q3fb"></div>
      </div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na jednadžbe s |x| →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 03 JEDNADŽBE I NEJEDNADŽBE S |x| ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · JEDNADŽBE I NEJEDNADŽBE S |x|</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — apsolutna vrijednost kao udaljenost</div>
    <div class="box-int-txt">
      |x| je <em>udaljenost broja x od nule</em> na brojevnom pravcu. |x| = 3 znači "x je udaljen 3 od nule" — dakle x = 3 ili x = −3.<br><br>
      |x − a| = r znači "x je udaljen r od točke a" — kružnica na brojevnom pravcu s centrom a i polumjerom r.<br><br>
      <strong>Apsolutna vrijednost uvijek daje nenegativan rezultat. |x| &lt; 0 nema rješenja!</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">JEDNADŽBE I NEJEDNADŽBE S |x|</span>
    <span class="val">|f(x)| = a</span> → <span class="val">f(x) = a</span> ili <span class="val">f(x) = −a</span> <span class="cmt">(za a > 0)</span><br>
    <span class="val">|f(x)| = 0</span> → <span class="val">f(x) = 0</span> <span class="cmt">(jedan slučaj)</span><br>
    <span class="val">|f(x)| &lt; a</span> → <span class="val">−a &lt; f(x) &lt; a</span> <span class="cmt">(za a > 0)</span><br>
    <span class="val">|f(x)| > a</span> → <span class="val">f(x) &lt; −a</span> ili <span class="val">f(x) > a</span> <span class="cmt">(za a > 0)</span><br>
    <span class="cmt">Uvijek provjeri rješenja u originalnoj jednadžbi!</span>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c">
      <div class="cmp-h i">|x| &lt; a → interval</div>
      <div class="cmp-body">
        <div class="cmp-row">−a &lt; x &lt; a</div>
        <div class="cmp-row">D = (−a, a)</div>
        <div class="cmp-row"><b>Primjer</b> |x| &lt; 3: (−3, 3)</div>
        <div class="cmp-row"><em>Između nultočaka</em></div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h a">|x| > a → unija</div>
      <div class="cmp-body">
        <div class="cmp-row">x &lt; −a ili x > a</div>
        <div class="cmp-row">D = (−∞,−a) ∪ (a,+∞)</div>
        <div class="cmp-row"><b>Primjer</b> |x| > 3: (−∞,−3)∪(3,+∞)</div>
        <div class="cmp-row"><em>Izvana od nultočaka</em></div>
      </div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — udaljenost na brojevnom pravcu</div>
    <div class="box-men-txt">
      |x − a| &lt; r vizualiziraj kao: "svi x koji su BLIŽE od r do točke a".<br>
      |x − 3| &lt; 2 znači: x je unutar 2 jedinice od točke 3 → interval (1, 5).<br>
      |x − 3| > 2 znači: x je DALJE od 2 od točke 3 → unija (−∞,1) ∪ (5,+∞).<br>
      <strong>Nariši točku a na brojevnom pravcu i označi polumjer r — rješenje se čita vizualno!</strong>
    </div>
  </div>

  <!-- STEP REVEAL 3 — apsolutna vrijednost -->
  <div class="sr" id="sr3">
    <div class="sr-head">
      <div class="sr-title">Jednadžba s |x| — korak po korak</div>
      <div class="sr-task">Riješi: |2x − 3| = 7</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Provjeri desnu stranu — mora biti ≥ 0</div>
            <div class="sr-txt">7 > 0 ✓ → postoje rješenja<br><em>Da je desna strana negativna, nema rješenja</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Rastavni na dva slučaja</div>
            <div class="sr-txt"><strong>Slučaj 1:</strong> 2x − 3 = 7<br><strong>Slučaj 2:</strong> 2x − 3 = −7</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Riješi svaki slučaj</div>
            <div class="sr-txt">Slučaj 1: 2x = 10 → x₁ = 5<br>Slučaj 2: 2x = −4 → x₂ = −2
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: koliko rješenja ima |x+1| = −2?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try3" type="text" placeholder="0, 1 ili 2?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try3','try3-fb','0','abs1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try3-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr3',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr3',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr3p">0 / 3</span>
    </div>
  </div>

  <!-- BUG 3 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — apsolutna vrijednost</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava |x − 2| &lt; −1:</p>
      <div class="bug-task">x − 2 &lt; −1 → x <span class="wrong">&lt; 1</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, samo je uzeo lijevi slučaj</div>
        <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: |x−2| ≥ 0 uvijek, ne može biti &lt; −1 → nema rješenja!</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: treba uzeti i desni slučaj x > 3</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: rješenje je x &lt; −1</div>
      </div>
      <div class="bug-expl" id="b3e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — apsolutna vrijednost</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>|f(x)| = a (a&lt;0): NEMA rješenja. Provjeri desnu stranu PRVO!</li>
      <li class="b20-item"><div class="b20-dot"></div>|f(x)| = a → dva slučaja: f(x) = a ili f(x) = −a</li>
      <li class="b20-item"><div class="b20-dot"></div>|f(x)| &lt; a → interval (−a, a) · |f(x)| > a → unija izvana</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — jednadžba s apsolutnom vrijednošću</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite: |2x − 3| = 5</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Tip |izraz| = k (k&gt;0) → dva slučaja</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Slučaj 1: 2x−3 = 5 → <strong>x = 4</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Slučaj 2: 2x−3 = −5 → <strong>x = −1</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Provjera: |2·4−3|=5 ✓ i |2·(−1)−3|=5 ✓</div></div>
      </div>
      <div class="combo-ans">x = 4 ili x = −1 &nbsp;·&nbsp; Maturalni obrazac: |A|=k → A=k ili A=−k, dva slučaja uvijek!</div>
    </div>
  </div>

  <!-- ICP 3 -->
  <div class="inline-cp" id="icp3">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — apsolutna vrijednost</span>
      <span class="icp-score" id="icp3-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1">
        <div class="icp-q-text">|x| = 5 ima rješenja:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">samo x = 5</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">x = 5 i x = −5</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">nema rješenja</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x = 0</div>
        </div>
        <div class="icp-fb" id="icp3q1fb"></div>
      </div>
      <div class="icp-q" id="icp3q2">
        <div class="icp-q-text">|x − 1| &lt; 4 ekvivalentno je s:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x &lt; 5</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x &lt; 5 ili x &lt; −3</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">−3 &lt; x &lt; 5</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">x > −3 ili x > 5</div>
        </div>
        <div class="icp-fb" id="icp3q2fb"></div>
      </div>
      <div class="icp-q" id="icp3q3">
        <div class="icp-q-text">|2x + 1| = 0 ima:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">nema rješenja</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">jedno rješenje x = −1/2</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">dva rješenja</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x = 1/2</div>
        </div>
        <div class="icp-fb" id="icp3q3fb"></div>
      </div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Nastavi na kvadratne nejednadžbe →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 04 KVADRATNE NEJEDNADŽBE ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">04 · KVADRATNE NEJEDNADŽBE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — parabola i predznak</div>
    <div class="box-int-txt">
      ax²+bx+c &lt; 0 pita: "gdje je parabola <em>ispod</em> x-osi?"<br><br>
      Za a > 0 (parabola gore ∪): ispod x-osi je <em>između</em> nultočaka.<br>
      Za a &lt; 0 (parabola dolje ∩): ispod x-osi je <em>izvana</em> od nultočaka.<br><br>
      <strong>Strategija: (1) nađi nultočke, (2) skiciraj parabolu, (3) čitaj predznak vizualno.</strong>
    </div>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c">
      <div class="cmp-h c">a > 0 (parabola ∪)</div>
      <div class="cmp-body">
        <div class="cmp-row">ax²+bx+c &lt; 0: <b>između</b> x₁ i x₂</div>
        <div class="cmp-row">D = (x₁, x₂)</div>
        <div class="cmp-row">ax²+bx+c > 0: <b>izvana</b></div>
        <div class="cmp-row">D = (−∞, x₁) ∪ (x₂, +∞)</div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h r">a &lt; 0 (parabola ∩)</div>
      <div class="cmp-body">
        <div class="cmp-row">ax²+bx+c &lt; 0: <b>izvana</b></div>
        <div class="cmp-row">D = (−∞, x₁) ∪ (x₂, +∞)</div>
        <div class="cmp-row">ax²+bx+c > 0: <b>između</b></div>
        <div class="cmp-row">D = (x₁, x₂)</div>
      </div>
    </div>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — skiciraj parabolu, čitaj predznak</div>
    <div class="box-men-txt">
      Uvijek napravi brzu skicu: nariši os x, označi nultočke, pa nacrtaj parabolu (gore ili dolje ovisno o a).<br>
      Gdje je parabola ISPOD x-osi → tamo je ax²+bx+c &lt; 0.<br>
      Gdje je parabola IZNAD x-osi → tamo je ax²+bx+c > 0.<br>
      <strong>Skica traje 5 sekundi i eliminiira 90% grešaka — posebno kad je a negativan!</strong>
    </div>
  </div>

  <!-- STEP REVEAL 4 — kvadratna nejednadžba -->
  <div class="sr" id="sr4">
    <div class="sr-head">
      <div class="sr-title">Kvadratna nejednadžba — korak po korak</div>
      <div class="sr-task">Riješi: x² − x − 6 &lt; 0</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Nađi nultočke jednadžbe x² − x − 6 = 0</div>
            <div class="sr-txt">D = 1 + 24 = 25 → x₁,₂ = (1 ± 5)/2<br>x₁ = 3, x₂ = −2</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Odredi smjer parabole</div>
            <div class="sr-txt">a = 1 > 0 → parabola ∪ (gore)<br><em>Ispod x-osi je između nultočaka</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Zapiši rješenje</div>
            <div class="sr-txt">x² − x − 6 &lt; 0 za x ∈ <strong>(−2, 3)</strong>
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: rješenje od x²−x−6 > 0</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try4" type="text" placeholder="x ∈ ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try4','try4-fb','x∈(-∞,-2)∪(3,+∞)','quad1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try4-fb"></div>
              </div>
            </div>
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

  <!-- BUG 4 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — kvadratna nejednadžba</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava x² − 4 > 0:</p>
      <div class="bug-task">Nultočke: x = ±2. Rješenje: x ∈ <span class="wrong">(−2, 2)</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">A) Točno, rješenje je između nultočaka</div>
        <div class="bug-opt" onclick="bug(this,'b4',true,'b4e')">B) Greška: a=1>0, parabola ∪, > 0 je IZVANA → (−∞,−2)∪(2,+∞)</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">C) Greška: nultočke su x = 2 i x = −4</div>
        <div class="bug-opt" onclick="bug(this,'b4',false,'b4e')">D) Greška: rješenje je sve realne brojeve</div>
      </div>
      <div class="bug-expl" id="b4e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — kvadratne nejednadžbe</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>a > 0 (∪): &lt; 0 između nultočaka, > 0 izvana</li>
      <li class="b20-item"><div class="b20-dot"></div>a &lt; 0 (∩): > 0 između, &lt; 0 izvana — OBRATNO od gore!</li>
      <li class="b20-item"><div class="b20-dot"></div>D &lt; 0: ax²+bx+c ima uvijek isti predznak kao a (nema nultočaka)</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — kvadratna nejednadžba</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite: x² − 3x − 4 &lt; 0</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Nađi nultočke: x²−3x−4=0 → D=9+16=25 → x₁=4, x₂=−1</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Parabola otvara prema gore (a=1&gt;0) → negativna K IZMEĐU korijena</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Skiciraj: − ●−1●−−−−●4●−−● → nejednadžba &lt;0 vrijedi <strong>za −1 &lt; x &lt; 4</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Maturalni obrazac: a&gt;0 → rješenje je IZMEĐU korijena za &lt;0, IZVAN za &gt;0</div></div>
      </div>
      <div class="combo-ans">x ∈ (−1, 4) &nbsp;·&nbsp; Uvijek skiciraj parabolu — odmah vidite znak!</div>
    </div>
  </div>

  <!-- ICP 4 -->
  <div class="inline-cp" id="icp4">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — kvadratne nejednadžbe</span>
      <span class="icp-score" id="icp4-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp4q1">
        <div class="icp-q-text">Rješenje od x² − 9 &lt; 0 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp4','q1',this,false,'icp4q1fb')">(−∞,−3) ∪ (3,+∞)</div>
          <div class="icp-opt" onclick="icp('icp4','q1',this,true,'icp4q1fb')">(−3, 3)</div>
          <div class="icp-opt" onclick="icp('icp4','q1',this,false,'icp4q1fb')">x &lt; 3</div>
          <div class="icp-opt" onclick="icp('icp4','q1',this,false,'icp4q1fb')">nema rješenja</div>
        </div>
        <div class="icp-fb" id="icp4q1fb"></div>
      </div>
      <div class="icp-q" id="icp4q2">
        <div class="icp-q-text">Za −x² + 4 > 0 (a = −1), rješenje je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp4','q2',this,false,'icp4q2fb')">(−∞,−2) ∪ (2,+∞)</div>
          <div class="icp-opt" onclick="icp('icp4','q2',this,true,'icp4q2fb')">(−2, 2)</div>
          <div class="icp-opt" onclick="icp('icp4','q2',this,false,'icp4q2fb')">x > 2</div>
          <div class="icp-opt" onclick="icp('icp4','q2',this,false,'icp4q2fb')">sve realne</div>
        </div>
        <div class="icp-fb" id="icp4q2fb"></div>
      </div>
      <div class="icp-q" id="icp4q3">
        <div class="icp-q-text">x² + 2x + 5 > 0 (D &lt; 0, a = 1 > 0) vrijedi za:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp4','q3',this,false,'icp4q3fb')">nema rješenja</div>
          <div class="icp-opt" onclick="icp('icp4','q3',this,true,'icp4q3fb')">sve realne (uvijek > 0)</div>
          <div class="icp-opt" onclick="icp('icp4','q3',this,false,'icp4q3fb')">x > 0</div>
          <div class="icp-opt" onclick="icp('icp4','q3',this,false,'icp4q3fb')">x &lt; 0</div>
        </div>
        <div class="icp-fb" id="icp4q3fb"></div>
      </div>
      <div class="icp-done" id="icp4-done">✓ Odlično! Nastavi na sustave jednadžbi →</div>
      <button class="icp-retry" id="icp4-retry" onclick="retryIcp('icp4')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 05 SUSTAVI JEDNADŽBI ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">05 · SUSTAVI LINEARNIH JEDNADŽBI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — presjek pravaca</div>
    <div class="box-int-txt">
      Svaka linearna jednadžba s dvije nepoznanice predstavlja pravac u ravnini. Sustav dviju jednadžbi pita: "gdje se ti pravci sijeku?"<br><br>
      Jedno rješenje → pravci se sijeku u točki<br>
      Nema rješenja → pravci su paralelni (ista nagib, različita y-intercept)<br>
      Beskonačno rješenja → pravci su isti (iste jednadžbe)<br><br>
      <strong>Supstitucija ili eliminacija — na maturi uvijek supstitucija ako je jedna varijabla izolirana.</strong>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">DVIJE METODE RJEŠAVANJA</span>
    <span class="val">Supstitucija:</span> iz jedne jednadžbe izrazi x (ili y), uvrsti u drugu<br>
    <span class="val">Eliminacija:</span> pomnoži jednadžbe da se koeficijenti poklapaju, oduzmi<br>
    <span class="cmt">Provjera: uvrsti rješenje u OBJE originalne jednadžbe!</span>
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — supstitucija vs eliminacija</div>
    <div class="box-men-txt">
      Supstitucija je bolja kad je jedna varijabla već izolirana (x = ... ili y = ...) — direktno uvrsti.<br>
      Eliminacija je bolja kad su koeficijenti "lijepi" za množenje (npr. x+y=5 i 2x−y=4 → zbroji odmah).<br>
      <strong>Na maturi: supstitucija za sustav linearna + kvadratna. Eliminacija za dva pravca.</strong>
    </div>
  </div>

  <!-- STEP REVEAL 5 — sustavi -->
  <div class="sr" id="sr5">
    <div class="sr-head">
      <div class="sr-title">Sustav jednadžbi — supstitucija</div>
      <div class="sr-task">Riješi: 2x + y = 7 i x − y = 2</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr5s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Izrazi jednu varijablu iz jednostavnije jednadžbe</div>
            <div class="sr-txt">Iz x − y = 2: <strong>x = y + 2</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr5s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Uvrsti u drugu jednadžbu</div>
            <div class="sr-txt">2(y + 2) + y = 7<br>2y + 4 + y = 7<br>3y = 3 → <strong>y = 1</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr5s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Nađi drugu varijablu i provjeri</div>
            <div class="sr-txt">x = y + 2 = 1 + 2 = <strong>3</strong><br>Provjera: 2·3+1=7 ✓ i 3−1=2 ✓
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Provjeri: zbroj x + y = ?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try5" type="text" placeholder="x+y = ?" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try5','try5-fb','4','sust1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try5-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr5',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr5',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr5p">0 / 3</span>
    </div>
  </div>

  <!-- BUG 5 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — sustavi jednadžbi</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik rješava: x+y=5, x+y=8:</p>
      <div class="bug-task">Zbroji: 2x+2y=13 → x+y = <span class="wrong">6.5</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b5',false,'b5e')">A) Točno, prosječna vrijednost je 6.5</div>
        <div class="bug-opt" onclick="bug(this,'b5',true,'b5e')">B) Greška: x+y ne može biti 5 i 8 istovremeno — sustav nema rješenja!</div>
        <div class="bug-opt" onclick="bug(this,'b5',false,'b5e')">C) Greška: treba oduzeti jednadžbe, ne zbrojiti</div>
        <div class="bug-opt" onclick="bug(this,'b5',false,'b5e')">D) Greška: rješenje je x+y=13</div>
      </div>
      <div class="bug-expl" id="b5e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — sustavi</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>Supstitucija: izrazi jednu var., uvrsti, riješi, nađi drugu, provjeri!</li>
      <li class="b20-item"><div class="b20-dot"></div>Paralelni pravci (isti nagib, različit slobodni član) → nema rješenja</li>
      <li class="b20-item"><div class="b20-dot"></div>Isti pravci → beskonačno rješenja (jednadžbe su proporcionalne)</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — sustav linearnih jednadžbi</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješite: 2x + 3y = 8 i x − y = 1</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Supstitucija: iz druge → <strong>x = y + 1</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uvrsit u prvu: 2(y+1)+3y=8 → <strong>5y = 6 → y = 6/5</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Nađi x: x = y+1 = 6/5+1 = <strong>11/5</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Provjera: 2·11/5+3·6/5 = 22/5+18/5 = 40/5 = 8 ✓</div></div>
      </div>
      <div class="combo-ans">(x, y) = (11/5, 6/5) &nbsp;·&nbsp; Matura: supstitucija ili eliminacija — uvijek provjeri!</div>
    </div>
  </div>

  <!-- ICP 5 -->
  <div class="inline-cp" id="icp5">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — sustavi</span>
      <span class="icp-score" id="icp5-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp5q1">
        <div class="icp-q-text">Sustav x+y=3, x−y=1 ima rješenje:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp5','q1',this,false,'icp5q1fb')">x=1, y=2</div>
          <div class="icp-opt" onclick="icp('icp5','q1',this,true,'icp5q1fb')">x=2, y=1</div>
          <div class="icp-opt" onclick="icp('icp5','q1',this,false,'icp5q1fb')">x=3, y=0</div>
          <div class="icp-opt" onclick="icp('icp5','q1',this,false,'icp5q1fb')">nema rješenja</div>
        </div>
        <div class="icp-fb" id="icp5q1fb"></div>
      </div>
      <div class="icp-q" id="icp5q2">
        <div class="icp-q-text">Sustav 2x+y=4, 4x+2y=8 ima:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp5','q2',this,false,'icp5q2fb')">jedno rješenje</div>
          <div class="icp-opt" onclick="icp('icp5','q2',this,false,'icp5q2fb')">nema rješenja</div>
          <div class="icp-opt" onclick="icp('icp5','q2',this,true,'icp5q2fb')">beskonačno rješenja</div>
          <div class="icp-opt" onclick="icp('icp5','q2',this,false,'icp5q2fb')">dva rješenja</div>
        </div>
        <div class="icp-fb" id="icp5q2fb"></div>
      </div>
      <div class="icp-q" id="icp5q3">
        <div class="icp-q-text">Sustav x+y=3, x+y=7 ima:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp5','q3',this,false,'icp5q3fb')">jedno rješenje x=5, y=0</div>
          <div class="icp-opt" onclick="icp('icp5','q3',this,true,'icp5q3fb')">nema rješenja</div>
          <div class="icp-opt" onclick="icp('icp5','q3',this,false,'icp5q3fb')">beskonačno rješenja</div>
          <div class="icp-opt" onclick="icp('icp5','q3',this,false,'icp5q3fb')">x=3, y=7</div>
        </div>
        <div class="icp-fb" id="icp5q3fb"></div>
      </div>
      <div class="icp-done" id="icp5-done">✓ Bravo! Spreman si za Vježbaj →</div>
      <button class="icp-retry" id="icp5-retry" onclick="retryIcp('icp5')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- A RAZINA KOMBINIRANI -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>

  <div class="combo">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — kvadratna + apsolutna vrijednost</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi: |x² − 4| = 5</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Dva slučaja: x²−4 = 5 ili x²−4 = −5</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Slučaj 1: x² = 9 → x = ±3</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Slučaj 2: x² = −1 → nema realnih rješenja (D &lt; 0)</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Provjera: |9−4|=5 ✓ i |(−3)²−4|=|9−4|=5 ✓</div></div>
      </div>
      <div class="combo-ans">Rješenja: x = 3 i x = −3</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — sustav s kvadratnom</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi presjek pravca y = x + 1 i parabole y = x²</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Sustav: y = x+1 i y = x² → supstitucija: x² = x+1</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">x²−x−1 = 0 → D = 1+4 = 5 → x = (1 ± √5)/2</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x₁ = (1+√5)/2 ≈ 1.618, x₂ = (1−√5)/2 ≈ −0.618</div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">y₁ = x₁+1 = (3+√5)/2, y₂ = x₂+1 = (3−√5)/2</div></div>
      </div>
      <div class="combo-ans">Točke presjeka: ((1+√5)/2, (3+√5)/2) i ((1−√5)/2, (3−√5)/2)</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — nejednadžba s parametrom</div></div>
    <div class="combo-body">
      <div class="combo-task">Za koje vrijednosti k jednadžba x²−2kx+k²−1 = 0 ima dva različita rješenja?</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet: D > 0 (strogo, za dva različita rješenja)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">D = (−2k)²−4·1·(k²−1) = 4k²−4k²+4 = 4</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">D = 4 > 0 za sve k ∈ ℝ — diskriminanta je konstanta!</div></div>
      </div>
      <div class="combo-ans">Za sve k ∈ ℝ — jednadžba uvijek ima dva različita realna rješenja</div>
    </div>
  </div>

  <div class="combo" style="margin-top:10px">
    <div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — sustav nejednadžbi</div></div>
    <div class="combo-body">
      <div class="combo-task">Riješi sustav nejednadžbi: x²−x−6 &lt; 0 i x > 0</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Prva: x²−x−6 &lt; 0 → nultočke x=−2, x=3 → rješenje: (−2, 3)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Druga: x > 0 → rješenje: (0, +∞)</div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Presjek: (−2,3) ∩ (0,+∞) = (0, 3)</div></div>
      </div>
      <div class="combo-ans">Rješenje sustava: x ∈ (0, 3)</div>
    </div>
  </div>

  <!-- RAPID FIRE DRILL -->
  <div class="drill">
    <div class="drill-head">
      <span class="drill-title">// Brzi refleks — Točno ili Netočno?</span>
      <span class="drill-score" id="dr-sc">0 / 0</span>
    </div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">Jednadžba −3x = 9 ima rješenje x = −3</div>
      <div class="drill-opts">
        <div class="drill-opt" onclick="drill(this,true)">✓ Točno</div>
        <div class="drill-opt" onclick="drill(this,false)">✗ Netočno</div>
      </div>
      <div class="drill-fb" id="dr-fb"></div>
      <div class="drill-ctrl">
        <button class="drill-next" id="dr-next" onclick="nextDrill()">Sljedeće →</button>
      </div>
      <div class="drill-bar"><div class="drill-bar-fill" id="dr-bar" style="width:0%"></div></div>
    </div>
  </div>

  <!-- NCVVO BLOK -->
  <div class="ncvvo-real">
    <div class="ncvvo-real-hd">📊 stvarni NCVVO zadaci — gdje učenici gube bodove</div>
    <div class="ncvvo-real-body">
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Kvadratna jednadžba · ~35% netočnih<span class="ncvvo-live-stat neutral" id="nlive-kv">kvadratna</span></div>
        <div class="ncvvo-real-q">Riješi: 3x² − 2x − 1 = 0</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>računaju D = 4 − 12 = −8 umjesto 4 + 12 = 16 (zaborave c = −1)</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">a=3, b=−2, c=−1. D = 4+12 = 16. x₁,₂ = (2±4)/6<br>x₁ = 1, x₂ = −1/3<br>Provjera Viète: x₁+x₂ = <span class="frac"><span class="num">2</span><span class="den">3</span></span> = −<span class="frac"><span class="num">b</span><span class="den">a</span></span> ✓ · x₁·x₂ = −<span class="frac"><span class="num">1</span><span class="den">3</span></span> = <span class="frac"><span class="num">c</span><span class="den">a</span></span> ✓</div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Apsolutna vrijednost · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-abs">|x|</span></div>
        <div class="ncvvo-real-q">Riješi: |3x − 1| = 2x + 4</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne provjeravaju rješenja u originalnoj jednadžbi</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Slučaj 1: 3x−1 = 2x+4 → x = 5. Provjera: |14|=14=14 ✓<br>Slučaj 2: 3x−1 = −(2x+4) → 5x = −3 → x = −<span class="frac"><span class="num">3</span><span class="den">5</span></span>. Provjera: |−<span class="frac"><span class="num">9</span><span class="den">5</span></span>−1|=14/5, 2(−<span class="frac"><span class="num">3</span><span class="den">5</span></span>)+4=14/5 ✓<br><strong>Rješenja: x = 5 i x = −3/5</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Kvadratna nejednadžba · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-nj">nejednadžba</span></div>
        <div class="ncvvo-real-q">Riješi: −2x² + 8x − 6 &lt; 0</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne obraćaju pažnju na negativan a — obrću interval</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">a=−2 &lt; 0 (parabola ∩). Nultočke: D=64−48=16 → x=(−8±4)/(−4) → x₁=1, x₂=3<br>a&lt;0, &lt;0 je IZVANA nultočaka → <strong>x ∈ (−∞,1) ∪ (3,+∞)</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Sustav jednadžbi · ~30% netočnih<span class="ncvvo-live-stat neutral" id="nlive-sust">sustav</span></div>
        <div class="ncvvo-real-q">Sustav: x² + y = 5 i x + y = 3</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne provjere oba rješenja u obje jednadžbe</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Iz x+y=3: y=3−x. Uvrsti: x²+(3−x)=5 → x²−x−2=0 → x=2 ili x=−1<br>x=2: y=1. x=−1: y=4. <strong>Rješenja: (2,1) i (−1,4)</strong></div>
      </div>
    </div>
  </div>

  <!-- CHECKPOINT -->
  <div class="checkpoint" id="cp">
    <div class="cp-head">
      <span class="cp-icon">✅</span>
      <div>
        <div class="cp-title">Checkpoint — jesi li spreman za dalje?</div>
        <div class="cp-sub">Potvrdi što znaš — klikni kad si siguran</div>
      </div>
    </div>
    <ul class="cp-list">
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Linearna nejednadžba: množenje s negativnim obrće smjer!</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Diskriminanta D PRVO — određuje broj rješenja kvadratne jednadžbe</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>|f(x)| = a (a&lt;0): nema rješenja. a≥0: dva slučaja (± a)</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>Kvadratna nejednadžba: predznak a određuje je li rješenje između ili izvana nultočaka</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Sustav: supstitucija + provjera u OBJE jednadžbe</li>
    </ul>
    <div class="cp-footer">
      <span id="cp-txt">0 / 5 potvrđeno</span>
      <span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 05!</span>
    </div>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ matura fokus — automatski refleks</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>Nejednadžba × negativan broj → OBRNI smjer.</b> Najčešća greška u linearnim nejednadžbama.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>D = b²−4ac izračunaj PRVO.</b> D &lt; 0 → stani, nema realnih rješenja.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>|f(x)| = a s a &lt; 0 → nema rješenja.</b> Ne nastavljaj računati!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Kvadratna nejednadžba:</b> a > 0 (∪): &lt; 0 između · a &lt; 0 (∩): &lt; 0 izvana.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Uvijek provjeri rješenja</b> — posebno kod |x| i racionalnih jednadžbi!</span></li>
    </ul>
  </div>

  <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Veze s ostalim poglavljima</div></div></div>
  <div class="cn-grid">
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P07</span><span class="cn-item-title">Kvadratna funkcija</span></div><div class="cn-item-desc">Nultočke kvadratne funkcije = rješenja kvadratne jednadžbe iz P04.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P07_FINAL.html?from=P04" style="color:inherit;text-decoration:none">→ nultočke i rješenja</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P09</span><span class="cn-item-title">Trigonometrija</span></div><div class="cn-item-desc">Trigonometrijske jednadžbe su oblik f(x)=c — direktna primjena P04.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P09_FINAL.html?from=P04" style="color:inherit;text-decoration:none">→ trig. jednadžbe</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P10</span><span class="cn-item-title">Analitička geometrija</span></div><div class="cn-item-desc">Presjeci pravaca i kružnica = sustavi jednadžbi. Uvijek iz P04.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P10_FINAL.html?from=P04" style="color:inherit;text-decoration:none">→ sustavi i presjeci</a></div></div>
    <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">Jednadžba tangente i uvjet f'(x₀)=0 za ekstreme — jednadžbe u analizi.</div><div class="cn-item-arrow"><a href="Maturiraj_MatA_P17_FINAL.html?from=P04" style="color:inherit;text-decoration:none">→ jednadžbe i ekstremi</a></div></div>
  </div>
</div>


<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Kvadratna jednadžba</div><div class="cv">x = (&minus;b &plusmn; &radic;D) / 2a, &nbsp;&nbsp; D = b&sup2;&minus;4ac &nbsp; (D>0: 2 rješ, D=0: 1 rješ, D<0: nema)</div></div>
  <div class="cr"><div class="ck c">Apsolutna vrijednost</div><div class="cv">|x| = a &rarr; x = &plusmn;a &nbsp;·&nbsp; |x| < a &rarr; &minus;a < x < a &nbsp;·&nbsp; |x| > a &rarr; x < &minus;a ili x > a</div></div>
  <div class="cr"><div class="ck i">Kvadratna nejednadžba</div><div class="cv">Nacrtaj parabolu! ax&sup2;+bx+c > 0 za a>0 — x izvan korijena. Zamka: a<0 okreće smjer!</div></div>
  <div class="cr"><div class="ck a">Sustavi 2&times;2</div><div class="cv">Supstitucija: iskaži y iz 1. jednadžbe, uvrsti u 2. Ili eliminacija: pomnoži pa oduzmi.</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">D < 0 ne znači greška — znači nema realnih rješenja. Kvadratne nejednadžbe: pazi na predznak a!</div></div>
</div>
  <div class="nav-row">
    <span class="nb" onclick="sw(0)">← Pregled</span>
    <span class="nb primary" onclick="sw(2)">Vježbaj →</span>
  </div>
</div>

<!-- ═══════════════════ L2 — PRACTICE ═══════════════════ -->
<div class="layer" id="l2">

  <div class="exam-mode-wrap" id="exam-mode-wrap">
    <div class="exam-mode-head">// odaberi mod vježbanja</div>
    <div class="exam-mode-opts">
      <div class="exam-mode-opt active" onclick="setExamMode('normal',this)">
        <div class="em-icon">📖</div><div class="em-name">Standardni</div><div class="em-desc">s objašnjenjima · bez pritiska</div>
      </div>
      <div class="exam-mode-opt" onclick="setExamMode('timed',this)">
        <div class="em-icon">⏱</div><div class="em-name">Ispitni</div><div class="em-desc">90 sek po pitanju · kao NCVVO</div>
      </div>
      <div class="exam-mode-opt" onclick="setExamMode('blitz',this)">
        <div class="em-icon">⚡</div><div class="em-name">Blitz</div><div class="em-desc">30 sek po pitanju · maksimalni pritisak</div>
      </div>
    </div>
  </div>

  <div class="adaptive-banner" id="adaptive-banner" style="display:none">
    <div class="ab-icon">🎯</div>
    <div class="ab-body">
      <div class="ab-title" id="ab-title">Prijedlog za ponavljanje</div>
      <div class="ab-text" id="ab-text"></div>
    </div>
    <button class="ab-close" onclick="document.getElementById('adaptive-banner').style.display='none'">×</button>
  </div>

  <div class="exam-timer" id="exam-timer" style="display:none">
    <div class="et-circle">
      <canvas id="timer-canvas" width="64" height="64"></canvas>
      <span class="et-num" id="et-num">90</span>
    </div>
    <div class="et-info">
      <div class="et-label">Preostalo</div>
      <div class="et-q" id="et-q-label">Pitanje 1</div>
    </div>
    <div class="et-streak" id="et-streak">Niz: 0 ✓</div>
  </div>

  <div class="quiz-intro"><strong>// ispitni mod</strong> · 12 pitanja · svako s objašnjenjem · target: <strong>10/12</strong></div>
  <div id="quiz-container"></div>

  <div class="score-box" id="score">
    <div class="score-num" id="snum">0/12</div>
    <div class="score-lbl" id="slbl"></div>
  </div>

  <div class="cta">
    <div>
      <div class="cta-e">discere archive</div>
      <div class="cta-t">Vježbaj sa stvarnim zadacima mature</div>
      <div class="cta-s">Svi NCVVO zadaci 2010.–2026. uz detaljna objašnjenja.</div>
    </div>
    <a href="https://maturiraj.hr" class="cta-btn">Otvori Discere →</a>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ za ispit — ključne točke</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>Nejednadžba × negativan → OBRNI smjer!</b></span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>D = b²−4ac.</b> D &lt; 0 → nema realnih rješenja. Stani!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>|f(x)| = a &lt; 0 → nema rješenja.</b> Ne nastavljaj!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>a > 0 (∪): &lt;0 između · a &lt;0 (∩): &lt;0 izvana.</b></span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Uvijek provjeri rješenja</b> u originalnoj jednadžbi!</span></li>
    </ul>
  </div>

  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · diskriminanta</div><div class="fitb-sent">Diskriminanta jednadžbe x² − 6x + 9 = 0 je D = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="D = ..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','0','disc2')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · linearna nejednadžba</div><div class="fitb-sent">Rješenje od −2x > 10 je x ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="x ..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','<-5','lin2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · apsolutna vrijednost</div><div class="fitb-sent">|x| = −3 ima ___ rješenja</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="0, 1 ili 2" autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','0','abs2')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · Vièteove formule</div><div class="fitb-sent">Za x² − 5x + 6 = 0: x₁ · x₂ = ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="broj..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','6','viete1')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>

  <!-- sr5 — quadratic inequality sign analysis -->
  <div class="sr" id="sr5" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — kvadratna nejednadžba (tablica predznaka)</div>
      <div class="sr-task">Riješi nejednadžbu 2x² − 5x − 3 &lt; 0</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr5s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Nađi nultočke kvadratnog trinoma</div>
            <div class="sr-txt">D = 25 + 24 = 49 → x = (5±7)/4<br>x₁ = 3, &nbsp; x₂ = −<span class="frac"><span class="num">1</span><span class="den">2</span></span><br>2x² − 5x − 3 = 2(x−3)(x+<span class="frac"><span class="num">1</span><span class="den">2</span></span>) = (x−3)(2x+1)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr5s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Napravi tablicu predznaka</div>
            <div class="sr-txt">
              <table style="font-size:12px;border-collapse:collapse;margin:6px 0">
                <tr><th style="padding:2px 8px;border:1px solid var(--bd)">x</th><th style="padding:2px 8px;border:1px solid var(--bd)">−∞</th><th style="padding:2px 8px;border:1px solid var(--bd)">−½</th><th style="padding:2px 8px;border:1px solid var(--bd)">3</th><th style="padding:2px 8px;border:1px solid var(--bd)">+∞</th></tr>
                <tr><td style="padding:2px 8px;border:1px solid var(--bd)">(2x+1)</td><td style="padding:2px 8px;border:1px solid var(--bd)">−</td><td style="padding:2px 8px;border:1px solid var(--bd)">0</td><td style="padding:2px 8px;border:1px solid var(--bd)">+</td><td style="padding:2px 8px;border:1px solid var(--bd)">+</td></tr>
                <tr><td style="padding:2px 8px;border:1px solid var(--bd)">(x−3)</td><td style="padding:2px 8px;border:1px solid var(--bd)">−</td><td style="padding:2px 8px;border:1px solid var(--bd)">−</td><td style="padding:2px 8px;border:1px solid var(--bd)">0</td><td style="padding:2px 8px;border:1px solid var(--bd)">+</td></tr>
                <tr><td style="padding:2px 8px;border:1px solid var(--bd)"><b>produkt</b></td><td style="padding:2px 8px;border:1px solid var(--bd)">+</td><td style="padding:2px 8px;border:1px solid var(--bd)">0</td><td style="padding:2px 8px;border:1px solid var(--bd)">−</td><td style="padding:2px 8px;border:1px solid var(--bd)">+</td></tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr5s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Očitaj rješenje (traži &lt; 0 → negativni produkt)</div>
            <div class="sr-txt">Produkt je negativan između nultočaka.<br><strong>x ∈ (−<span class="frac"><span class="num">1</span><span class="den">2</span></span>, 3)</strong> &nbsp;— otvoreni intervalski zapis jer je stroga nejednakost!</div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr5',3)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr5',3)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr5p">0 / 3</span>
    </div>
  </div>

  <div class="nav-row">
    <span class="nb" onclick="sw(1)">← Uči</span>
    <button onclick="navigateChapter('p06')" class="nb primary">Sljedeće poglavlje →</button>
  </div>

</div>
</div>
</main>
</div>`;
const js = `function navigateChapter(id){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:navigateChapter',id:id},'*');}}
function backToList(){if(window.parent&&window.parent!==window){window.parent.postMessage({type:'maturiraj:backToList'},'*');}}
/* ── MOBILE SIDEBAR ── */
function toggleSidebar(){var s=document.getElementById('sidebar');var o=document.getElementById('overlay');var open=s.classList.toggle('mobile-open');o.classList.toggle('show',open);}
function closeSidebar(){document.getElementById('sidebar').classList.remove('mobile-open');document.getElementById('overlay').classList.remove('show');}

/* ── TABS + PROGRESS ── */
var tabProgress=[24,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i);});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i);});
  var p=tabProgress[i];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p04_tab',i);}catch(e){}
}


/* ── LINEAR SOLVER ── */
function solveLinear(){
  var a=parseFloat(document.getElementById('eq-a').value);
  var b=parseFloat(document.getElementById('eq-b').value);
  var r=document.getElementById('eq-result');
  if(isNaN(a)||isNaN(b)){r.innerHTML='<span style="color:var(--red)">Upiši valjane brojeve.</span>';return;}
  var fmt=function(x){return Number.isInteger(x)?x:Math.round(x*1000)/1000;};
  if(a===0){
    r.innerHTML=b===0?'<span style="color:var(--green)">✓ Beskonačno rješenja — jednadžba je uvijek točna (0=0)</span>':'<span style="color:var(--red)">✗ Nema rješenja — kontradikcija ('+b+'≠0)</span>';
  } else {
    var x=-b/a;
    r.innerHTML='<span style="color:var(--cyan)">x = '+(-b)+' / '+a+' = <strong>'+fmt(x)+'</strong></span>';
  }
}

/* ── QUADRATIC SOLVER ── */
function solveQuad(){
  var a=parseFloat(document.getElementById('disc-a').value);
  var b=parseFloat(document.getElementById('disc-b').value);
  var c=parseFloat(document.getElementById('disc-c').value);
  var r=document.getElementById('disc-result');
  if(isNaN(a)||isNaN(b)||isNaN(c)||a===0){r.innerHTML='<span style="color:var(--red)">Upiši valjane koeficijente (a ≠ 0).</span>';return;}
  var D=b*b-4*a*c;
  var fmt=function(x){return Number.isInteger(x)?x:Math.round(x*10000)/10000;};
  var Df=fmt(D);
  if(D<0){
    r.innerHTML='D = '+Df+' &lt; 0 → <span style="color:var(--red)"><strong>Nema realnih rješenja!</strong></span>';
  } else if(D===0){
    var x=-b/(2*a);
    r.innerHTML='D = 0 → <span style="color:var(--amber)">jedno rješenje:</span> x = <strong>'+fmt(x)+'</strong>';
  } else {
    var x1=(-b+Math.sqrt(D))/(2*a);
    var x2=(-b-Math.sqrt(D))/(2*a);
    r.innerHTML='D = '+Df+' &gt; 0 → <span style="color:var(--green)">dva rješenja:</span> x₁ = <strong>'+fmt(x1)+'</strong>, x₂ = <strong>'+fmt(x2)+'</strong><br><span style="font-size:11px;color:var(--t3);font-family:var(--mono)">Provjera: x₁+x₂ = '+fmt(x1+x2)+' = −b/a = '+fmt(-b/a)+' ✓</span>';
  }
}

/* ── STEP REVEAL ── */
var stepSt={};
function nxtStep(id,tot){
  if(!stepSt[id])stepSt[id]=0;
  stepSt[id]=Math.min(stepSt[id]+1,tot);
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.toggle('show',i<=stepSt[id]);}
  var prog=document.getElementById(id+'p');
  if(prog)prog.textContent=stepSt[id]+' / '+tot;
  var newStep=document.getElementById(id+'s'+stepSt[id]);
  if(newStep){setTimeout(function(){newStep.scrollIntoView({behavior:'smooth',block:'nearest'});},60);}
}
function rstStep(id,tot){
  stepSt[id]=0;
  for(var i=1;i<=tot;i++){var el=document.getElementById(id+'s'+i);if(el)el.classList.remove('show');}
  var prog=document.getElementById(id+'p');
  if(prog){prog.textContent='0 / '+tot;prog.style.color='';}
  document.querySelectorAll('#'+id+' .sr-try-in').forEach(function(inp){inp.value='';inp.className='sr-try-in';inp.disabled=false;});
  document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false;});
  document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb';});
}

/* ── TRY-IT ── */
var tryExp={
  lin1:'5 − 2x > 11 → −2x > 6 → x < −3 (dijeli s −2, OBRNI smjer!)',
  disc1:'x²−4x+4 = 0: D = 16−16 = 0. Jedno dvostruko rješenje: x = 2.',
  abs1:'|x+1| ≥ 0 uvijek. Ne može biti = −2. Nema rješenja!',
  quad1:'Parabola gore (a=1>0). x²−x−6 > 0 je IZVANA nultočaka → x ∈ (−∞,−2) ∪ (3,+∞)',
  sust1:'x=3, y=1 → x+y = 4'
};
function tryIt(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  if(!v)return;
  inp.disabled=true;
  var btn=inp.parentElement.querySelector('.sr-try-btn');if(btn)btn.disabled=true;
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');
  fb.className='sr-try-fb show '+(ok?'ok':'fail');
  fb.textContent=(ok?'✓ Točno! ':'✗ Netočno. Točan odgovor: '+ans+'. ')+tryExp[key];
}

/* ── RAPID FIRE DRILL ── */
var drData=[
  {q:'Jednadžba −3x = 9 ima rješenje x = −3',ans:true,tag:'linearne',exp:'Točno! −3x=9 → x=9/(−3)=−3 ✓'},
  {q:'Množeći −2x < 6 s (−1/2) dobijemo x < −3',ans:false,tag:'nejednadžbe',exp:'Netočno! Množenje s negativnim obrće smjer: −2x<6 → x>−3'},
  {q:'Jednadžba x²+4=0 ima dva realna rješenja',ans:false,tag:'kvadratne',exp:'Netočno! D=0−16=−16<0 → nema realnih rješenja. Stani ovdje!'},
  {q:'|−5| = 5',ans:true,tag:'apsolutna vr.',exp:'Točno! Apsolutna vrijednost je uvijek nenegativan broj: |−5|=5 ✓'},
  {q:'|x| = −2 ima rješenje x = −2',ans:false,tag:'apsolutna vr.',exp:'Netočno! |x| ≥ 0 uvijek — ne može biti = −2. Nema rješenja!'},
  {q:'Za x²−5x+6<0 (a>0): rješenje je (2,3)',ans:true,tag:'kvadratne nj.',exp:'Točno! Nultočke: x=2,3. a>0 (parabola ∪), <0 je između → (2,3) ✓'},
  {q:'Sustav x+y=5, 2x+2y=10 nema rješenja',ans:false,tag:'sustavi',exp:'Netočno! Druga jednadžba je dvostruka prve (2(x+y)=10 ↔ x+y=5) → beskonačno rješenja'},
  {q:'Za x²−4>0 s a=1: rješenje uključuje x=0',ans:false,tag:'kvadratne nj.',exp:'Netočno! Nultočke: ±2. a>0, >0 je izvana → (−∞,−2)∪(2,+∞). x=0 nije u rješenju!'},
  {q:'Vièteova formula: za ax²+bx+c=0 vrijedi x₁·x₂=c/a',ans:true,tag:'kvadratne',exp:'Točno! Produkt korijena = c/a. Zbroj korijena = −b/a ✓'},
  {q:'Rješenje od |x−3| < 2 je x ∈ (1, 5)',ans:true,tag:'apsolutna vr.',exp:'Točno! −2<x−3<2 → 1<x<5 → (1,5) ✓'},
  {q:'Linearna jednadžba 3x+6=0 ima rješenje x=2',ans:false,tag:'linearne',exp:'Netočno! 3x=−6 → x=−2, ne 2.'},
  {q:'Jednadžba x²−6x+9=0 ima dva različita rješenja',ans:false,tag:'kvadratne',exp:'Netočno! D=36−36=0 → jedno dvostruko rješenje x=3'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){
  if(drDone)return;drDone=true;drTot++;
  var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;
  el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis');});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById('dr-fb');
  var tagHtml=d.tag?'<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+ d.tag+'</span>':'';
  fb.innerHTML=tagHtml+(ok?'✓ ':'✗ ')+d.exp;
  fb.className='drill-fb '+(ok?'ok':'ng');
  document.getElementById('dr-sc').textContent=drOk+' / '+drTot;
  document.getElementById('dr-next').style.display='inline-flex';
  document.getElementById('dr-bar').style.width=((drIdx+1)/drData.length*100)+'%';
  updateProgress();
}
function nextDrill(){
  drIdx=(drIdx+1)%drData.length;drDone=false;
  var q=document.getElementById('dr-q');q.style.opacity='0';
  setTimeout(function(){q.textContent=drData[drIdx].q;q.style.opacity='1';},150);
  document.getElementById('dr-fb').className='drill-fb';
  document.getElementById('dr-next').style.display='none';
  document.querySelectorAll('.drill-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
  updateProgress();
}
var _drq=document.getElementById('dr-q');if(_drq)_drq.textContent=drData[0].q;

/* ── BUG FINDER ── */
var bugDone={};
var bugExp={
  b1:'✓ Točno! Dijeljenje s −3 OBRĆE smjer: −3x<9 → x>−3. Uvijek pazi na predznak divisora!',
  b2:'✓ Točno! D=4−20=−16<0 → nema realnih rješenja. Ne može se "uzeti √ od negativnog" u ℝ!',
  b3:'✓ Točno! |f(x)| ≥ 0 uvijek. Ako je desna strana negativna, nema rješenja — ne nastavljaj!',
  b4:'✓ Točno! a=1>0 (parabola ∪): >0 je IZVANA nultočaka! Između je <0, ne >0.',
  b5:'✓ Točno! x+y ne može biti 5 i 8 istovremeno — pravci su paralelni, nema presjeka.'
};
function bug(el,id,ok,eid){
  if(bugDone[id])return;bugDone[id]=true;
  el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis');});
  el.classList.add(ok?'ok':'ng');
  if(!ok){el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){if(o.getAttribute('onclick')&&o.getAttribute('onclick').indexOf('true')>-1)o.classList.add('ok');});}
  var expl=document.getElementById(eid);
  expl.innerHTML=ok?bugExp[id]:'✗ Netočno. '+bugExp[id];
  expl.className='bug-expl show '+(ok?'ok':'ng');
}

/* ── ICP ── */
var icpAnswered={};
var icpFeedback={
  icp1:{
    q1:{ok:'✓ Točno! 2x=4 → x=2',ng:'✗ Netočno. 2x−4=0 → 2x=4 → x=4/2=2'},
    q2:{ok:'✓ Točno! −4x>8 → dijeli s −4 (negativan!) → OBRNI: x<−2',ng:'✗ Netočno. Dijeljenjem s −4 smjer se OBRĆE → x<−2, ne x>−2'},
    q3:{ok:'✓ Točno! 0·x=5 → 0=5 — kontradikcija, nema rješenja',ng:'✗ Netočno. 0·x=0 za svaki x, ali treba biti =5. To je nemoguće → nema rješenja'}
  },
  icp2:{
    q1:{ok:'✓ Točno! D=25−24=1',ng:'✗ Netočno. D=b²−4ac=(−5)²−4·1·6=25−24=1'},
    q2:{ok:'✓ Točno! D=1−4=−3<0 → nema realnih rješenja',ng:'✗ Netočno. D=1²−4·1·1=1−4=−3<0 → nema realnih rješenja u ℝ'},
    q3:{ok:'✓ Točno! x₁·x₂=c/a=12/1=12 (Vièteova formula)',ng:'✗ Netočno. Produkt korijena = c/a = 12/1 = 12 (Vièteova formula!)'}
  },
  icp3:{
    q1:{ok:'✓ Točno! |x|=5 → x=5 ili x=−5 (dva rješenja)',ng:'✗ Netočno. |x|=a (a>0) → dva slučaja: x=5 ili x=−5'},
    q2:{ok:'✓ Točno! |x−1|<4 → −4<x−1<4 → −3<x<5',ng:'✗ Netočno. |f|<a → −a<f<a → −4<x−1<4 → −3<x<5'},
    q3:{ok:'✓ Točno! |2x+1|=0 → 2x+1=0 → x=−1/2 (jedan slučaj!)',ng:'✗ Netočno. |f|=0 → f=0 (samo jedan slučaj!) → 2x+1=0 → x=−1/2'}
  },
  icp4:{
    q1:{ok:'✓ Točno! a=1>0 (∪), <0 je između nultočaka x=−3 i x=3 → (−3,3)',ng:'✗ Netočno. Nultočke: ±3. a>0 (parabola ∪): <0 je IZMEĐU → (−3,3)'},
    q2:{ok:'✓ Točno! a=−1<0 (∩): >0 je IZMEĐU nultočaka → (−2,2)',ng:'✗ Netočno. a<0 (parabola ∩): >0 je IZMEĐU nultočaka → (−2,2)'},
    q3:{ok:'✓ Točno! D<0 i a>0 → polinom uvijek pozitivan → vrijedi za sve x∈ℝ',ng:'✗ Netočno. D<0 i a>0 → parabola nema nultočaka i uvijek je pozitivna → D=ℝ'}
  },
  icp5:{
    q1:{ok:'✓ Točno! Zbroji: 2x=4→x=2, pa y=3−2=1',ng:'✗ Netočno. Zbroji: (x+y)+(x−y)=3+1 → 2x=4 → x=2, y=1'},
    q2:{ok:'✓ Točno! Druga jednadžba = 2 × prva → iste pravci → beskonačno rješenja',ng:'✗ Netočno. 4x+2y=2(2x+y)=2·4=8 ✓ → jednadžbe su iste → beskonačno rješenja'},
    q3:{ok:'✓ Točno! x+y ne može biti 5 i 7 istovremeno → kontradikcija → nema rješenja',ng:'✗ Netočno. Iste lijevde strane, različite desne → kontradikcija → nema rješenja'}
  }
};
function icp(icpId,qId,el,ok,fbId){
  var key=icpId+'_'+qId;
  if(icpAnswered[key])return;
  icpAnswered[key]=ok;
  el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis');});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById(fbId);
  var msgs=icpFeedback[icpId]&&icpFeedback[icpId][qId];
  fb.textContent=msgs?(ok?msgs.ok:msgs.ng):(ok?'✓ Točno!':'✗ Netočno.');
  fb.className='icp-fb show '+(ok?'ok':'ng');
  var allDone=['q1','q2','q3'].every(function(q){return icpAnswered[icpId+'_'+q]!==undefined;});
  if(allDone){
    var done=document.getElementById(icpId+'-done');if(done)done.classList.add('show');
    var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.add('show');
    var score=['q1','q2','q3'].filter(function(q){return icpAnswered[icpId+'_'+q]===true;}).length;
    var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent=score+' / 3';
    updateProgress();
  }
}
function retryIcp(icpId){
  ['q1','q2','q3'].forEach(function(q){delete icpAnswered[icpId+'_'+q];});
  var done=document.getElementById(icpId+'-done');if(done)done.classList.remove('show');
  var retry=document.getElementById(icpId+'-retry');if(retry)retry.classList.remove('show');
  var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';
  document.querySelectorAll('#'+icpId+' .icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
  document.querySelectorAll('#'+icpId+' .icp-fb').forEach(function(f){f.className='icp-fb';f.textContent='';});
}

/* ── CHECKPOINT ── */
var cpState={};
function toggleCP(n){
  cpState[n]=!cpState[n];
  var el=document.getElementById('cp'+n);
  if(el)el.classList.toggle('done',cpState[n]);
  var done=Object.values(cpState).filter(Boolean).length;
  var txt=document.getElementById('cp-txt');if(txt)txt.textContent=done+' / 5 potvrđeno';
  var ready=document.getElementById('cp-ready');if(ready)ready.style.display=done>=5?'inline':'none';
  updateProgress();
}

/* ── SHOW ANS ── */
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}

/* ── ADAPTIVE ENGINE ── */
var topicErrors={linearne:0,kvadratne:0,apsolutna:0,nejednadzbe:0,sustavi:0};
var topicHints={
  linearne:'Greške u linearnim jednadžbama! Pazi na obrtanje smjera pri množenju/dijeljenju s negativnim.',
  kvadratne:'Greške s kvadratnim jednadžbama! Izračunaj D PRVO. D<0 → nema realnih rješenja.',
  apsolutna:'Greške s apsolutnom vrijednošću! Provjeri je li desna strana ≥ 0 PRIJE postavljanja slučajeva.',
  nejednadzbe:'Greške s kvadratnim nejednadžbama! Predznak vodećeg koeficijenta određuje smjer rješenja.',
  sustavi:'Greške sa sustavima! Uvijek provjeri rješenje u OBJE originalne jednadžbe.'
};
var qTopics={q1:'linearne',q2:'linearne',q3:'kvadratne',q4:'kvadratne',q5:'apsolutna',q6:'apsolutna',q7:'nejednadzbe',q8:'nejednadzbe',q9:'sustavi',q10:'sustavi',q11:'kvadratne',q12:'nejednadzbe'};
var streak=0,currentQ=1;
function checkAdaptive(qid,ok){
  var topic=qTopics[qid];
  if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}
  if(ok)streak++;else streak=0;
  updateTimerLabel();
  if(examMode!=='normal'&&Object.keys(answered).length<total){currentQ=Object.keys(answered).length+1;timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);updateTimerLabel();}
  updateNcvvoLiveStats();
}
function showAdaptiveBanner(topic){
  var b=document.getElementById('adaptive-banner');var t=document.getElementById('ab-title');var x=document.getElementById('ab-text');
  if(!b||!t||!x)return;
  t.textContent='Prijedlog — ponovi: '+topic;x.innerHTML=topicHints[topic];
  b.style.display='flex';b.scrollIntoView({behavior:'smooth',block:'nearest'});
}

/* ── NCVVO LIVE STATS ── */
var ncvvoTopicMap={
  'nlive-kv':['q3','q4','q11'],
  'nlive-abs':['q5','q6'],
  'nlive-nj':['q7','q8','q12'],
  'nlive-sust':['q9','q10']
};
function updateNcvvoLiveStats(){
  Object.keys(ncvvoTopicMap).forEach(function(id){
    var el=document.getElementById(id);if(!el)return;
    var qs=ncvvoTopicMap[id];
    var done=qs.filter(function(q){return answered[q]!==undefined;});
    if(done.length===0)return;
    var ok=qs.filter(function(q){return answered[q]===true;}).length;
    var pct=Math.round(ok/qs.length*100);
    el.className='ncvvo-live-stat '+(pct>=80?'good':pct>=50?'neutral':'bad');
    el.textContent=(pct>=80?'✓ ':pct>=50?'~ ':'✗ ')+pct+'% točno';
  });
}

/* ── UPDATE PROGRESS ── */
function updateProgress(){
  var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;
  var cpDone=Object.values(cpState).filter(Boolean).length;
  var cpPts=Math.round(cpDone/5*8);
  var icpPts=0;
  ['icp1','icp2','icp3','icp4','icp5'].forEach(function(icp){
    var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;
    icpPts+=Math.round(done/3*3);
  });
  var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;
  tabProgress[1]=Math.min(24+drillPts+icpPts+cpPts,50);
  tabProgress[2]=Math.min(24+drillPts+icpPts+cpPts+quizPts,100);
  var curTab=document.querySelector('.tab.on');
  var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;
  var p=tabProgress[curIdx];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  try{localStorage.setItem('maturiraj_p04_prog',p);}catch(e){}
}

/* ── SOUND ENGINE ── */
var audioCtx=null;
function getAudio(){if(!audioCtx){try{audioCtx=new(window.AudioContext||window.webkitAudioContext)();}catch(e){}}return audioCtx;}
function playTone(freq,dur,vol,type){var ctx=getAudio();if(!ctx)return;var osc=ctx.createOscillator();var gain=ctx.createGain();osc.connect(gain);gain.connect(ctx.destination);osc.type=type||'sine';osc.frequency.setValueAtTime(freq,ctx.currentTime);gain.gain.setValueAtTime(vol||0.15,ctx.currentTime);gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+dur);osc.start(ctx.currentTime);osc.stop(ctx.currentTime+dur);}
function soundCorrect(){playTone(880,0.12,0.12,'sine');setTimeout(function(){playTone(1100,0.15,0.10,'sine');},80);}
function soundWrong(){playTone(220,0.25,0.12,'sawtooth');}
function soundTick(){playTone(440,0.05,0.05,'square');}
function soundTimeUp(){playTone(180,0.4,0.15,'sawtooth');setTimeout(function(){playTone(120,0.5,0.12,'sawtooth');},200);}
function soundComplete(){[523,659,784,1047].forEach(function(f,i){setTimeout(function(){playTone(f,0.2,0.12,'sine');},i*100);});}

/* ── EXAM TIMER ── */
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90;
function setExamMode(mode,el){
  examMode=mode;
  document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active');});
  el.classList.add('active');
  if(mode!=='normal'){timerMax=mode==='timed'?90:30;document.getElementById('exam-timer').style.display='flex';startTimer();}
  else{document.getElementById('exam-timer').style.display='none';stopTimer();}
}
function drawTimerCanvas(secs,max){
  var c=document.getElementById('timer-canvas');if(!c)return;
  var ctx=c.getContext('2d');var W=64,H=64,r=28,cx=32,cy=32;
  ctx.clearRect(0,0,W,H);
  ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.strokeStyle='rgba(77,158,255,0.12)';ctx.lineWidth=4;ctx.stroke();
  var pct=secs/max;
  var col=pct>0.4?'rgba(77,158,255,0.85)':pct>0.2?'rgba(245,158,11,0.9)':'rgba(248,113,113,0.9)';
  ctx.beginPath();ctx.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+pct*Math.PI*2);ctx.strokeStyle=col;ctx.lineWidth=4;ctx.lineCap='round';ctx.stroke();
  var numEl=document.getElementById('et-num');if(numEl)numEl.textContent=secs;
  var wrap=document.getElementById('exam-timer');
  if(wrap){wrap.classList.toggle('warn',pct<=0.4&&pct>0.2);wrap.classList.toggle('urgent',pct<=0.2);}
}
function startTimer(){
  stopTimer();timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);
  timerInterval=setInterval(function(){
    timerSeconds--;drawTimerCanvas(timerSeconds,timerMax);
    if(timerSeconds>0&&timerSeconds<=10)soundTick();
    if(timerSeconds<=0){stopTimer();soundTimeUp();}
  },1000);
}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}

/* ── QUIZ ── */
var quizInited=false,answered={},correct=0,total=0;
var ALL_QUESTIONS=[
  {id:'q1',topic:'linearne',meta:'linearna jednadžba',
   text:'Rješenje jednadžbe 3x + 9 = 0 je:',
   opts:[{t:'x = 3',ok:false},{t:'x = −3',ok:true},{t:'x = 9',ok:false},{t:'x = −9',ok:false}],
   c:'✓ Točno. 3x = −9 → x = −3.',
   w:'✗ Netočno. 3x + 9 = 0 → 3x = −9 → x = −9/3 = −3.',
   proof:['3x + 9 = 0','3x = −9','x = −9/3 = −3']},
  {id:'q2',topic:'linearne',meta:'linearna nejednadžba',
   text:'Rješenje nejednadžbe −2x + 4 > 0 je:',
   opts:[{t:'x > 2',ok:false},{t:'x > −2',ok:false},{t:'x < 2',ok:true},{t:'x < −2',ok:false}],
   c:'✓ Točno. −2x > −4 → dijelimo s −2 (OBRNI!) → x < 2.',
   w:'✗ Netočno. −2x > −4. Dijeljenje s −2 (negativan!) obrće smjer: x < 2.',
   proof:['−2x + 4 > 0','−2x > −4','÷(−2), OBRNI smjer: x < 2']},
  {id:'q3',topic:'kvadratne',meta:'diskriminanta',
   text:'Diskriminanta jednadžbe 2x² − 3x + 1 = 0 je:',
   opts:[{t:'D = −2',ok:false},{t:'D = 17',ok:false},{t:'D = 1',ok:true},{t:'D = 9',ok:false}],
   c:'✓ Točno. D = (−3)² − 4·2·1 = 9 − 8 = 1.',
   w:'✗ Netočno. D = b²−4ac = (−3)²−4·2·1 = 9−8 = 1.',
   proof:['a=2, b=−3, c=1','D = b²−4ac = 9−8','D = 1 > 0 → dva rješenja']},
  {id:'q4',topic:'kvadratne',meta:'rješenja kvadratne',
   text:'Rješenja x² − 5x + 6 = 0 su:',
   opts:[{t:'x = 1 i x = 6',ok:false},{t:'x = 2 i x = 3',ok:true},{t:'x = −2 i x = −3',ok:false},{t:'x = 5 i x = 1',ok:false}],
   c:'✓ Točno. D = 25−24 = 1. x = (5±1)/2 → x₁=3, x₂=2.',
   w:'✗ Netočno. D=1. x=(5±1)/2 → x₁=3, x₂=2. Viète provjera: 2+3=5=−b/a ✓, 2·3=6=c/a ✓',
   proof:['D=25−24=1','x=(5±1)/2','x₁=3, x₂=2']},
  {id:'q5',topic:'apsolutna',meta:'|x| jednadžba',
   text:'Jednadžba |x + 2| = 5 ima rješenja:',
   opts:[{t:'x = 3',ok:false},{t:'x = −7',ok:false},{t:'x = 3 i x = −7',ok:true},{t:'nema rješenja',ok:false}],
   c:'✓ Točno. x+2=5→x=3 ili x+2=−5→x=−7.',
   w:'✗ Netočno. Dva slučaja: x+2=5→x=3 i x+2=−5→x=−7.',
   proof:['|x+2|=5, desna strana>0 ✓','Slučaj 1: x+2=5 → x=3','Slučaj 2: x+2=−5 → x=−7']},
  {id:'q6',topic:'apsolutna',meta:'|x| nejednadžba',
   text:'Rješenje nejednadžbe |x − 1| ≤ 3 je:',
   opts:[{t:'x ≤ 4',ok:false},{t:'(−∞,−2) ∪ (4,+∞)',ok:false},{t:'⟨−2, 4⟩',ok:true},{t:'(−2, 4)',ok:false}],
   c:'✓ Točno. −3 ≤ x−1 ≤ 3 → −2 ≤ x ≤ 4 → ⟨−2, 4⟩.',
   w:'✗ Netočno. |f|≤a → −a≤f≤a: −3≤x−1≤3 → −2≤x≤4 → ⟨−2,4⟩ (zatvoreni, ≤!).',
   proof:['|x−1|≤3 → −3≤x−1≤3','dodaj 1: −2≤x≤4','D = ⟨−2, 4⟩ (zatvoreni!)']},
  {id:'q7',topic:'nejednadzbe',meta:'kvadratna nejednadžba',
   text:'Rješenje nejednadžbe x² − 4 < 0 je:',
   opts:[{t:'(−∞,−2) ∪ (2,+∞)',ok:false},{t:'(−2, 2)',ok:true},{t:'x < 2',ok:false},{t:'nema rješenja',ok:false}],
   c:'✓ Točno. Nultočke: ±2. a=1>0 (∪): <0 između → (−2, 2).',
   w:'✗ Netočno. Nultočke: x=±2. a=1>0 (parabola ∪): <0 je IZMEĐU nultočaka → (−2,2).',
   proof:['Nultočke: x=±2','a=1>0 → parabola ∪','<0 između nultočaka: (−2,2)']},
  {id:'q8',topic:'nejednadzbe',meta:'kvadratna nejednadžba · negativan a',
   text:'Rješenje −x² + 1 > 0 je:',
   opts:[{t:'(−∞,−1) ∪ (1,+∞)',ok:false},{t:'(−1, 1)',ok:true},{t:'sve realne',ok:false},{t:'nema rješenja',ok:false}],
   c:'✓ Točno. Nultočke: ±1. a=−1<0 (∩): >0 je IZMEĐU → (−1, 1).',
   w:'✗ Netočno. a=−1<0 (parabola ∩): >0 je IZMEĐU nultočaka → (−1,1). Pazi na predznak a!',
   proof:['Nultočke: x=±1','a=−1<0 → parabola ∩','>0 između nultočaka: (−1,1)']},
  {id:'q9',topic:'sustavi',meta:'sustav linearnih jednadžbi',
   text:'Rješenje sustava x + y = 4 i x − y = 2 je:',
   opts:[{t:'x=1, y=3',ok:false},{t:'x=3, y=1',ok:true},{t:'x=2, y=2',ok:false},{t:'nema rješenja',ok:false}],
   c:'✓ Točno. Zbroji: 2x=6→x=3, y=4−3=1.',
   w:'✗ Netočno. Zbrojimo: 2x=6→x=3, pa y=4−3=1. Provjera: 3+1=4✓, 3−1=2✓',
   proof:['Zbrojimo: 2x=6 → x=3','y=4−x=4−3=1','Provjera: 3+1=4✓, 3−1=2✓']},
  {id:'q10',topic:'sustavi',meta:'sustav · posebni slučajevi',
   text:'Sustav 2x − y = 3 i 4x − 2y = 5 ima:',
   opts:[{t:'jedno rješenje',ok:false},{t:'beskonačno rješenja',ok:false},{t:'nema rješenja',ok:true},{t:'dva rješenja',ok:false}],
   c:'✓ Točno. Druga jednadžba ÷2: 2x−y=2.5 ≠ 3 → kontradikcija → nema rješenja.',
   w:'✗ Netočno. Druga jednadžba ÷2 = 2x−y=2.5. No prva kaže 2x−y=3. Kontradikcija → nema rješenja.',
   proof:['4x−2y=5 → ÷2 → 2x−y=2.5','Ali 2x−y=3 iz prve jednadžbe','3 ≠ 2.5 → kontradikcija → nema rješenja']},
  {id:'q11',topic:'kvadratne',meta:'A razina · Vièteove formule',
   text:'Za x²+px+12=0, jednom rješenje je x=3. Koliko je p?',
   opts:[{t:'p = −7',ok:true},{t:'p = 7',ok:false},{t:'p = −4',ok:false},{t:'p = 4',ok:false}],
   c:'✓ Točno. x₁·x₂=12→x₂=4. x₁+x₂=3+4=7=−p → p=−7.',
   w:'✗ Netočno. Viète: x₁·x₂=c/a=12 → 3·x₂=12 → x₂=4. x₁+x₂=7=−p/1 → p=−7.',
   proof:['Viète: x₁·x₂=12, x₁=3 → x₂=4','x₁+x₂=7=−p/1','p=−7']},
  {id:'q12',topic:'nejednadzbe',meta:'A razina · kombinirani',
   text:'Skup rješenja x² − 2x − 3 ≥ 0 je:',
   opts:[{t:'(−1, 3)',ok:false},{t:'⟨−1, 3⟩',ok:false},{t:'(−∞,−1⟩ ∪ ⟨3,+∞)',ok:true},{t:'(−∞,−1) ∪ (3,+∞)',ok:false}],
   c:'✓ Točno. Nultočke: x=−1, x=3. a=1>0 (∪): ≥0 izvana I na nultočkama → ⟨−∞,−1⟩ ∪ ⟨3,+∞⟩.',
   w:'✗ Netočno. Nultočke: x=−1, x=3. a>0 (∪): ≥0 IZVANA — a jer je ≥ (ne >), nultočke su uključene!',
   proof:['Nultočke: D=4+12=16, x=(2±4)/2 → x=−1, x=3','a=1>0, ≥0 izvana + nultočke','D = (−∞,−1⟩ ∪ ⟨3,+∞)']}
];

var FExp={
  disc2:'x²−6x+9=(x−3)². D=36−36=0 → jedno dvostruko rješenje x=3.',
  lin2:'−2x>10 → dijeli s −2 (negativan!) → OBRNI: x<−5.',
  abs2:'|x| ≥ 0 uvijek. Apsolutna vrijednost ne može biti negativna → nema rješenja!',
  viete1:'Vièteova formula: x₁·x₂ = c/a = 6/1 = 6.'
};

function renderQuiz(){
  var cont=document.getElementById('quiz-container');
  var html='';
  ALL_QUESTIONS.forEach(function(q){
    var optsHtml=q.opts.map(function(o,i){
      return '<div class="qo" onclick="qa(\\''+q.id+'\\','+i+','+o.ok+',\\''+q.id+'e\\')">'+o.t+'</div>';
    }).join('');
    html+='<div class="qb" id="qb-'+q.id+'"><div class="qm">'+q.meta+'</div><div class="qq">'+q.text+'</div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';
  });
  cont.innerHTML=html;
  total=ALL_QUESTIONS.length;
}

function qa(qid,idx,ok,eid){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;
  if(ok){correct++;soundCorrect();}else soundWrong();
  var qdata=ALL_QUESTIONS.find(function(q){return q.id===qid;});
  if(!qdata)return;
  document.querySelectorAll('#qb-'+qid+' .qo').forEach(function(o,i){
    o.classList.add('dis');
    if(i===idx)o.classList.add(ok?'ok':'ng');
    if(!ok&&qdata.opts[i].ok)o.classList.add('ok');
  });
  var e=document.getElementById(eid);
  var proofHtml='';
  if(!ok&&qdata.proof){
    proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+
      qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';
  }
  e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;
  e.classList.add('show');
  checkAdaptive(qid,ok);
  if(examMode!=='normal')stopTimer();
  if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    var pct=Math.round(correct/total*100);
    document.getElementById('slbl').textContent=pct>=80?'Izvrsno! Spreman si za P06 →':pct>=60?'Dobro! Ponovi slabe točke.':'Ponovi gradivo P04 prije nastavka.';
    if(s)s.classList.add('show');
    soundComplete();
    tabProgress[2]=Math.min(24+Math.round(correct/total*76),100);
    updateProgress();
  }
  updateProgress();
}

function chkf(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;
  inp.disabled=true;if(btn)btn.disabled=true;fb.classList.add('show');
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase().replace(/≤/g,'<=').replace(/≥/g,'>=').replace(/−/g,'-');};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];
}
/* ── RESTORE TAB ── */
(function(){try{var s=sessionStorage.getItem('p04_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){
  try{
    var saved=localStorage.getItem('maturiraj_p04_prog');
    if(saved!==null){
      var pct=parseInt(saved);
      if(pct>0){
        var bar=document.getElementById('prog-bar');
        var lbl=document.getElementById('prog-pct');
        if(bar)bar.style.width=pct+'%';
        if(lbl)lbl.textContent=pct+'%';
      }
    }
  }catch(e){}
})();

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
const meta = {id:'P04',pidLower:'p04',title:"Maturiraj.hr \u2014 Mat A \u00b7 P04 \u00b7 Jednad\u017ebe i Nejednad\u017ebe",subject:'matematika-a',lsKey:'maturiraj_p04_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p04');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P04] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p04"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p04_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p04_prog',String(pct));}catch(e){}}
// -- Complete page for MatChapterViewer (iframe srcDoc)
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P04 \u00b7 Jednad\u017ebe i Nejednad\u017ebe</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';
export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};