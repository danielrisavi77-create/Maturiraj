/**
 * Maturiraj.hr — Mat A · P03
 * Maturiraj.hr — Mat A · P03 · Polinomi, Racionalni i Iracionalni Izrazi
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
.pv-expr{font-family:var(--mono);font-size:18px;font-weight:700;color:var(--cyan);text-align:center;padding:14px;background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r3);margin-bottom:14px;letter-spacing:.3px}
.pv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.pv-cell{background:var(--inp);border:1px solid var(--bdm);border-radius:var(--r2);padding:10px 12px;text-align:center}
.pv-lbl{font-family:var(--mono);font-size:9px;color:var(--t3);font-weight:700;letter-spacing:1px;text-transform:uppercase;margin-bottom:5px}
.pv-val{font-family:var(--mono);font-size:20px;font-weight:800;color:var(--blue)}
.pv-btns{display:flex;gap:5px;flex-wrap:wrap}
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

/* ── DOMAIN BUILDER (P03) ── */
.rdb-wrap{background:var(--card);border:1px solid var(--bdm);border-radius:var(--r4);overflow:hidden;margin:18px 0}
.rdb-head{padding:10px 17px;border-bottom:1px solid var(--bd);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px}
.rdb-title{font-family:var(--mono);font-size:10px;font-weight:700;letter-spacing:1.5px;color:var(--indigo);text-transform:uppercase}
.rdb-btns{display:flex;gap:5px;flex-wrap:wrap}
.rdb-btn{font-family:var(--mono);font-size:11px;font-weight:700;padding:4px 11px;border-radius:var(--r2);border:1px solid var(--bdm);background:var(--inp);color:var(--t2);cursor:pointer;transition:all .15s}
.rdb-btn:hover{border-color:var(--indigo);color:var(--indigo)}
.rdb-btn.on{background:var(--dim-i);border-color:var(--bd-i);color:var(--indigo)}
.rdb-body{padding:16px 17px}
.rdb-result{font-family:var(--mono);font-size:13px;color:var(--t1);padding:8px 12px;background:var(--inp);border:1px solid var(--bd);border-radius:var(--r2);margin-top:10px;line-height:1.7}`;
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
  <button class="sb-item active" style="background:transparent;border:none;cursor:default;text-align:left;width:100%"><span class="sb-dot"></span>03 · Polinomi i izrazi</button>
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

<main class="main">
<div class="content-wrap">

<div class="bc">
  <span>← poglavlja</span><span class="bc-sep">/</span>
  <span>a-razina</span><span class="bc-sep">/</span>
  <span class="bc-cur">polinomi-racionalni-iracionalni-izrazi</span>
</div>

<div class="tabs">
  <div class="tab on" onclick="sw(0)">⚡ 2 min</div>
  <div class="tab" onclick="sw(1)">📐 Uči</div>
  <div class="tab" onclick="sw(2)">🧠 Vježbaj</div>
</div>

<!-- ═══════════════════════════════════ -->
<!-- L0 — QUICK VIEW                     -->
<!-- ═══════════════════════════════════ -->
<div class="layer on" id="l0">
  <div class="hero">
    <div class="hero-orb"></div><div class="hero-orb2"></div>
    <div class="hero-eyebrow">poglavlje 03 od 21 · A razina · temelji</div>
    <h1 class="hero-title">Polinomi, Racionalni i<br><span>Iracionalni Izrazi</span></h1>
    <p class="hero-sub">Algebarski jezik matematike — bez ovoga nema jednadžbi, funkcija ni analize</p>
    <div class="hero-meta">
      <span class="hchip b">3 koncepta</span>
      <span class="hchip a">⭐ Visoka maturalna frekvencija</span>
      <span class="hchip c">~30 min</span>
    </div>
    <div class="pt"><div class="pb" style="width:18%"></div></div>
  </div>

  <div class="tags">
    <span class="pill p-b">Polinomi i stupanj</span>
    <span class="pill p-c">Hornerov algoritam</span>
    <span class="pill p-i">Teorem faktora</span>
    <span class="pill p-a">Racionalni izrazi</span>
    <span class="pill p-v">Iracionalni izrazi</span>
    <span class="pill p-r">Uvjeti definiranosti</span>
  </div>

  <div class="slbl">// zašto je ovo kritično za A razinu</div>
  <div class="box-int">
    <div class="box-int-lbl">HOOK — pročitaj ovo prvo</div>
    <div class="box-int-txt">
      Svaka funkcija na maturi je polinom, racionalni ili iracionalni izraz — ili kombinacija.<br><br>
      Hornerova shema skraćuje dijeljenje polinoma na 30 sekundi. Uvjeti definiranosti donose bodove na svakom zadatku s razlomcima i korijenima. NCVVO redovito kažnjava studente koji zaborave napisati x ≠ 3 ili x > 0.<br><br>
      <strong>Ovdje se dobivaju i gube bodovi koji odlučuju između ocjena.</strong>
    </div>
  </div>

  <div class="slbl">// pregled u 30 sekundi</div>
  <div class="sg">
    <div class="sc"><div class="sc-ico si-b">Pₙ(x)</div><div class="sc-name">Polinomi</div><div class="sc-desc">Stupanj, nultočke, faktorizacija. Teorem faktora: P(a)=0 ⟺ (x−a) je faktor.</div></div>
    <div class="sc"><div class="sc-ico si-c">H</div><div class="sc-name">Hornerov algoritam</div><div class="sc-desc">Brzo dijeljenje polinoma. Ostatak = P(c). Faktorizacija u 4 koraka.</div></div>
    <div class="sc"><div class="sc-ico si-i">p/q</div><div class="sc-name">Racionalni izrazi</div><div class="sc-desc">Uvjet: nazivnik ≠ 0. Skraćivanje uz obavezni uvjet definiranosti!</div></div>
    <div class="sc"><div class="sc-ico si-a">√x</div><div class="sc-name">Iracionalni izrazi</div><div class="sc-desc">√ → ≥ 0 · <span class="frac"><span class="num">1</span><span class="den">√</span></span> → > 0 · ³√ → bez uvjeta. Tri pravila, nula iznimki.</div></div>
  </div>

  <div class="slbl">// ključni koncepti</div>
  <div class="con">
    <div class="cr"><div class="ck b">Stupanj polinoma</div><div class="cv">Najveći eksponent s <strong>nenultim</strong> koeficijentom. <code>0·x⁷ + 3x⁴</code> → stupanj 4!</div></div>
    <div class="cr"><div class="ck b">Teorem faktora</div><div class="cv">P(a) = 0 ⟺ (x−a) je faktor od P(x). Provjeri ±(dijelitelji slobodnog člana).</div></div>
    <div class="cr"><div class="ck c">Hornerova shema</div><div class="cv">Koeficijente u red, spusti prvi, svaki = prethodni·c + koeficijent. Ostatak = P(c).</div></div>
    <div class="cr"><div class="ck i">Racionalni: uvjet</div><div class="cv">Nazivnik ≠ 0 → nađi nultočke nazivnika, isključi ih. <strong>Uvjet napiši uvijek!</strong></div></div>
    <div class="cr"><div class="ck a">√ → argument ≥ 0</div><div class="cv"><code>√(izraz) → izraz ≥ 0</code>. Zatvoreni interval ako je moguće dosegnuti rub.</div></div>
    <div class="cr"><div class="ck a">1/√ → argument > 0</div><div class="cv"><code>1/√(izraz) → izraz > 0</code>. Strogi uvjet — rub mora biti isključen!</div></div>
    <div class="cr"><div class="ck r">Zamka #1</div><div class="cv">Nakon skraćivanja — uvjet definiranosti se <strong>ne briše</strong>! x≠3 ostaje čak i ako (x−3) nestane.</div></div>
    <div class="cr"><div class="ck r">Zamka #2</div><div class="cv">Kombinirani uvjeti = <strong>presjek</strong>. Oba moraju biti zadovoljena istovremeno.</div></div>
  </div>

  <div class="nav-row">
    <button onclick="navigateChapter('p02')" class="nb">← P02 · Potencije</button>
    <span class="nb primary" onclick="sw(1)">Uči detaljno →</span>
  </div>
</div>

<!-- ═══════════════════════════════════ -->
<!-- L1 — LEARN                          -->
<!-- ═══════════════════════════════════ -->
<div class="layer" id="l1">

  <!-- ══ 01 POLINOMI ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">01 · POLINOMI I HORNEROVA SHEMA</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — što je polinom</div>
    <div class="box-int-txt">
      Polinom je <em>zbroj članova oblika aₙxⁿ</em> — svaki clan je broj puta potencija od x.<br><br>
      Stupanj je najveći eksponent s <em>nenultim</em> koeficijentom. Pazi: 0·x⁷ + 3x⁴ ima stupanj 4, ne 7 — koeficijent uz x⁷ je nula!<br><br>
      <strong>Nultočka</strong> polinoma je vrijednost x za koju P(x) = 0. Teorem faktora kaže: P(a)=0 ⟺ (x−a) je faktor.
    </div>
  </div>

  <!-- POLY VISUALIZER -->
  <div class="poly-viz">
    <div class="pv-head">
      <span class="pv-title">// Analizator polinoma — klikni primjer</span>
      <div class="pv-btns">
        <button class="pv-btn on" onclick="setPoly('p1',this)">P₁</button>
        <button class="pv-btn" onclick="setPoly('p2',this)">P₂</button>
        <button class="pv-btn" onclick="setPoly('p3',this)">P₃</button>
        <button class="pv-btn" onclick="setPoly('p4',this)">P₄</button>
        <button class="pv-btn" onclick="setPoly('p5',this)">P₅</button>
      </div>
    </div>
    <div class="pv-body">
      <div class="pv-expr" id="pv-poly">3x⁴ − 2x² + 1</div>
      <div class="pv-grid">
        <div class="pv-cell"><div class="pv-lbl">Stupanj</div><div class="pv-val" id="pv-deg">4</div></div>
        <div class="pv-cell"><div class="pv-lbl">Vodeći koef.</div><div class="pv-val" id="pv-lc">3</div></div>
        <div class="pv-cell"><div class="pv-lbl">Slobodni član</div><div class="pv-val" id="pv-c">1</div></div>
        <div class="pv-cell"><div class="pv-lbl">Max. nultočaka</div><div class="pv-val" id="pv-zeros">4</div></div>
        <div class="pv-cell"><div class="pv-lbl">P(0)</div><div class="pv-val" id="pv-p0">1</div></div>
        <div class="pv-cell"><div class="pv-lbl">P(1)</div><div class="pv-val" id="pv-p1v">2</div></div>
      </div>
    </div>
  </div>
  <div class="box-warn" style="margin-bottom:12px">
    <span class="bw-ico">📄</span>
    <div class="bw-body">
      <div class="bw-title">PAPIRNA PROVJERA</div>
      <div class="bw-txt">Na ispitu nema klikanja! Provjeri možeš li svaki primjer riješiti ručno na papiru. Step-by-step vodič slijedi odmah ispod.</div>
    </div>
  </div>

  <div class="box-for">
    <span class="box-for-lbl">HORNEROVA SHEMA — korak po korak</span>
    <span class="cmt">Dijeljenje P(x) = aₙxⁿ + ... + a₀ s (x − c):</span><br>
    <span class="val">1.</span> Napiši koeficijente u red: aₙ, aₙ₋₁, ..., a₀<br>
    <span class="val">2.</span> Spusti prvi koeficijent<br>
    <span class="val">3.</span> Svaki sljedeći = <strong>prethodni · c + koeficijent</strong><br>
    <span class="val">4.</span> Zadnji broj = <strong>ostatak P(c)</strong>. Ako je 0 → (x−c) je faktor!
  </div>

  <div class="box-men">
    <div class="box-men-lbl">MENTALNI MODEL — strategija za nultočke</div>
    <div class="box-men-txt">
      Počni uvijek s <strong>x = 1</strong> (najbrže za izračunati). Ako nije nultočka, pokušaj <strong>x = −1</strong>, pa <strong>x = 2</strong>, <strong>x = −2</strong>...<br>
      Nultočke su uvijek <strong>±dijelitelji slobodnog člana</strong> (ako su racionalne).<br>
      Na maturi, prva nultočka je skoro uvijek 1 ili −1 — provjeri to odmah!
    </div>
  </div>

  <!-- STEP REVEAL 1 — Horner -->
  <div class="sr" id="sr1">
    <div class="sr-head">
      <div class="sr-title">Hornerova shema — korak po korak</div>
      <div class="sr-task">P(x) = x³ − 2x² − x + 2, podijeli s (x−1)</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr1s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Napiši koeficijente i c</div>
            <div class="sr-txt">P(x) = 1·x³ + (−2)·x² + (−1)·x + 2<br>Koeficijenti: <strong>1 | −2 | −1 | 2</strong><br>c = 1 (iz x−1)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Spusti prvi, pa primijeni shemu</div>
            <div class="sr-txt">↓ 1<br>1·1+(−2) = <strong>−1</strong><br>(−1)·1+(−1) = <strong>−2</strong><br>(−2)·1+2 = <strong>0</strong> ← ostatak!</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Ostatak = P(1) = 0 → (x−1) je faktor!</div>
            <div class="sr-txt">Kvocijent: koef. 1, −1, −2 → x² − x − 2
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Faktoriziraj kvocijent x² − x − 2</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try1" type="text" placeholder="(x−?)(x+?)" autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try1','try1-fb','(x-2)(x+1)','horn1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try1-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr1s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Konačna faktorizacija</div>
            <div class="sr-txt">x³ − 2x² − x + 2 = <strong>(x−1)(x−2)(x+1)</strong><br><em>Nultočke: x = 1, 2, −1 ✓</em></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr1',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr1',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr1p">0 / 4</span>
    </div>
  </div>

  <!-- BUG 1 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — stupanj polinoma</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik tvrdi:</p>
      <div class="bug-task">P(x) = 4x³ − x + 0·x⁷ + 5 ima stupanj <span class="wrong">7</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">A) Točno, x⁷ je prisutan u polinomu</div>
        <div class="bug-opt" onclick="bug(this,'b1',true,'b1e')">B) Greška: 0·x⁷ ne broji — koef. je 0, pa je stupanj 3</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">C) Greška: stupanj je 5 jer je slobodni član 5</div>
        <div class="bug-opt" onclick="bug(this,'b1',false,'b1e')">D) Greška: polinom nema stupanj jer ima 0 koeficijent</div>
      </div>
      <div class="bug-expl" id="b1e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — polinomi</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>Stupanj = najveći eksponent s NENULTIM koef. Pazi na 0·xⁿ!</li>
      <li class="b20-item"><div class="b20-dot"></div>P(a) = 0 ⟺ (x−a) je faktor. Traži x=1 prvo, pa x=−1, x=±2...</li>
      <li class="b20-item"><div class="b20-dot"></div>Horner: ostatak = P(c). Ako je 0 → faktor nađen, nastavi faktorizaciju!</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — Hornerova shema</div></div>
    <div class="combo-body">
      <div class="combo-task">Izračunaj P(−2) za P(x) = 2x³ + x² − 5x + 3</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Postavi tablicu: koeficijenti su <strong>2 | 1 | −5 | 3</strong>, vrijednost x = −2</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Korak 1: spusti 2. Množimo: 2·(−2) = −4; zbrajamo s 1 → <strong>−3</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Korak 2: −3·(−2) = 6; zbrajamo s (−5) → <strong>1</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Korak 3: 1·(−2) = −2; zbrajamo s 3 → <strong>1</strong> ← to je P(−2)</div></div>
      </div>
      <div class="combo-ans">P(−2) = 1 &nbsp;·&nbsp; Horner: uvijek iди lijevo→desno, množiš·x pa zbrajamo s idućim koef.</div>
    </div>
  </div>

  <!-- ICP 1 -->
  <div class="inline-cp" id="icp1">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — polinomi</span>
      <span class="icp-score" id="icp1-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp1q1">
        <div class="icp-q-text">Stupanj P(x) = 5x⁴ + 0·x⁷ − 3x + 1 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">7</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,true,'icp1q1fb')">4</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">1</div>
          <div class="icp-opt" onclick="icp('icp1','q1',this,false,'icp1q1fb')">3</div>
        </div>
        <div class="icp-fb" id="icp1q1fb"></div>
      </div>
      <div class="icp-q" id="icp1q2">
        <div class="icp-q-text">P(3) = 0. Koji je faktor od P(x)?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">x + 3</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,true,'icp1q2fb')">x − 3</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">3x</div>
          <div class="icp-opt" onclick="icp('icp1','q2',this,false,'icp1q2fb')">x² − 3</div>
        </div>
        <div class="icp-fb" id="icp1q2fb"></div>
      </div>
      <div class="icp-q" id="icp1q3">
        <div class="icp-q-text">Slobodni član P(x) = 2x³ − x + 7 je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">2</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">−1</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,true,'icp1q3fb')">7</div>
          <div class="icp-opt" onclick="icp('icp1','q3',this,false,'icp1q3fb')">0</div>
        </div>
        <div class="icp-fb" id="icp1q3fb"></div>
      </div>
      <div class="icp-done" id="icp1-done">✓ Odlično! Nastavi na racionalne izraze →</div>
      <button class="icp-retry" id="icp1-retry" onclick="retryIcp('icp1')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 02 RACIONALNI IZRAZI ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">02 · RACIONALNI IZRAZI</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — racionalni izrazi i uvjeti</div>
    <div class="box-int-txt">
      Racionalni izraz je <em>razlomak s polinomima</em> — brojevnik i nazivnik su polinomi.<br><br>
      Uvjet definiranosti: <em>nazivnik ≠ 0</em>. Nađi sve x za koje bi nazivnik bio nula — to su zabranjene vrijednosti.<br><br>
      <strong>Najčešća zamka:</strong> nakon skraćivanja razlomka, uvjet definiranosti se ne briše! Ako si skratio (x−3), uvjet x ≠ 3 i dalje vrijedi.
    </div>
  </div>

  <!-- RATIONAL DOMAIN BUILDER -->
  <div class="rdb-wrap">
    <div class="rdb-head">
      <span class="rdb-title">// Domain Builder — nađi uvjet definiranosti</span>
      <div class="rdb-btns">
        <button class="rdb-btn on" onclick="setRdb('r1',this)">f₁</button>
        <button class="rdb-btn" onclick="setRdb('r2',this)">f₂</button>
        <button class="rdb-btn" onclick="setRdb('r3',this)">f₃</button>
        <button class="rdb-btn" onclick="setRdb('r4',this)">f₄ ⚠</button>
        <button class="rdb-btn" onclick="setRdb('r5',this)">f₅</button>
      </div>
    </div>
    <div class="rdb-body">
      <div class="rdb-expr" id="rdb-expr">f(x) = 1 / (x − 3)</div>
      <div class="rdb-steps" id="rdb-steps"></div>
      <div class="rdb-domain" id="rdb-domain"></div>
    </div>
  </div>

  <!-- STEP REVEAL 2 — racionalni -->
  <div class="sr" id="sr2">
    <div class="sr-head">
      <div class="sr-title">Skraćivanje razlomka — korak po korak</div>
      <div class="sr-task">Skrati: (x² − x − 6) / (x² − 4)</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr2s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Uvjet definiranosti PRVO — uvijek!</div>
            <div class="sr-txt">Nazivnik: x² − 4 = (x−2)(x+2) ≠ 0<br><strong>Uvjet: x ≠ 2 i x ≠ −2</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Faktoriziraj brojevnik</div>
            <div class="sr-txt">x² − x − 6 = (x−3)(x+2)<br><em>Traži dva broja čiji je produkt −6 a zbroj −1: to su −3 i +2</em></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Skrati zajednički faktor</div>
            <div class="sr-txt">(x−3)(x+2) / (x−2)(x+2) → skraćujemo (x+2)
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Koji uvjet mora biti naveden uz rezultat?</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try2" type="text" placeholder="x ≠ ... i x ≠ ..." autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try2','try2-fb','x≠2ix≠-2','rat1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try2-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr2s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Konačni oblik — uvjet se ne smije izostaviti!</div>
            <div class="sr-txt"><strong>(x−3)/(x−2), za x ≠ 2 i x ≠ −2</strong><br><em>x ≠ −2 ostaje jer je (x+2) bio u originalnom nazivniku!</em></div>
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
    <div class="bug-head">🐛 prepoznaj grešku — racionalni izraz</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik skraćuje:</p>
      <div class="bug-task">(x²−9)/(x−3) = x+3 <span class="wrong">(bez uvjeta)</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">A) Točno, skraćivanje je ispravno i nema uvjeta</div>
        <div class="bug-opt" onclick="bug(this,'b2',true,'b2e')">B) Greška: skraćivanje je točno, ali mora pisati x ≠ 3</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">C) Greška: ne može se skratiti jer su različiti stupnjevi</div>
        <div class="bug-opt" onclick="bug(this,'b2',false,'b2e')">D) Greška: rezultat je x−3, ne x+3</div>
      </div>
      <div class="bug-expl" id="b2e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — racionalni</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>Uvjet definiranosti: nazivnik ≠ 0. UVIJEK ga napiši!</li>
      <li class="b20-item"><div class="b20-dot"></div>Nakon skraćivanja — uvjet ostaje! x ≠ 3 se ne briše.</li>
      <li class="b20-item"><div class="b20-dot"></div>Zajednički nazivnik za zbrajanje = produkt faktora bez ponavljanja</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — skraćivanje racionalnog izraza</div></div>
    <div class="combo-body">
      <div class="combo-task">Pojednostavni: (x² − 9) / (x + 3), x ≠ −3</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Prepoznaj: x²−9 je <strong>razlika kvadrata</strong> → x²−9 = (x−3)(x+3)</div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Supstitucija: <strong>(x−3)(x+3) / (x+3)</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Skrati (x+3) — ali uvjet x ≠ −3 i dalje vrijedi! → <strong>x − 3</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Tipična maturalna zamka: skraćivanje ne briše uvjet definiranosti</div></div>
      </div>
      <div class="combo-ans">(x²−9)/(x+3) = x−3, x ≠ −3 &nbsp;·&nbsp; Uvjet prenosimo i nakon skraćivanja!</div>
    </div>
  </div>

  <!-- ICP 2 -->
  <div class="inline-cp" id="icp2">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — racionalni</span>
      <span class="icp-score" id="icp2-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp2q1">
        <div class="icp-q-text">Uvjet definiranosti f(x) = 1/(x²−9) je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">x ≠ 9</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,true,'icp2q1fb')">x ≠ 3 i x ≠ −3</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">x ≠ 0</div>
          <div class="icp-opt" onclick="icp('icp2','q1',this,false,'icp2q1fb')">bez uvjeta</div>
        </div>
        <div class="icp-fb" id="icp2q1fb"></div>
      </div>
      <div class="icp-q" id="icp2q2">
        <div class="icp-q-text">(x²−4)/(x+2) skraćuje se u:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">x−2 (bez uvjeta)</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,true,'icp2q2fb')">x−2, za x ≠ −2</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">x+2</div>
          <div class="icp-opt" onclick="icp('icp2','q2',this,false,'icp2q2fb')">x²−2</div>
        </div>
        <div class="icp-fb" id="icp2q2fb"></div>
      </div>
      <div class="icp-q" id="icp2q3">
        <div class="icp-q-text">1/(x−1) + 1/(x+1) = ?</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">2/(x²−1)</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">2/2x</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,true,'icp2q3fb')">2x/(x²−1)</div>
          <div class="icp-opt" onclick="icp('icp2','q3',this,false,'icp2q3fb')">1/x</div>
        </div>
        <div class="icp-fb" id="icp2q3fb"></div>
      </div>
      <div class="icp-done" id="icp2-done">✓ Sjajno! Nastavi na iracionalne izraze →</div>
      <button class="icp-retry" id="icp2-retry" onclick="retryIcp('icp2')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <!-- ══ 03 IRACIONALNI IZRAZI ══ -->
  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge">03 · IRACIONALNI IZRAZI I DOMENE</h2><span class="sec-time">~12 min</span><div class="sec-line"></div></div>

  <div class="box-int">
    <div class="box-int-lbl">INTUITIVNO — tri situacije, tri pravila</div>
    <div class="box-int-txt">
      Iracionalni izrazi sadrže korijene. Svaki tip korijena ima svoj uvjet:<br><br>
      ✦ <em>√(izraz)</em> — argument mora biti ≥ 0 (može biti nula — rub je dostižan)<br>
      ✦ <em>1/√(izraz)</em> — argument mora biti > 0 (ne može biti nula — dijeljenje!)<br>
      ✦ <em>³√(izraz)</em> — bez uvjeta (kubni korijen postoji za sve realne brojeve)<br><br>
      <strong>Kombinirani uvjeti</strong> — rješavaš svaki posebno, pa uzimeš <em>presjek</em>.
    </div>
  </div>

  <div class="cmp" style="margin-bottom:16px">
    <div class="cmp-c">
      <div class="cmp-h b">√(izraz) → ≥ 0</div>
      <div class="cmp-body">
        <div class="cmp-row"><b>Uvjet:</b> izraz ≥ 0</div>
        <div class="cmp-row"><b>Rub:</b> uključen (uglatom ⟨ ⟩)</div>
        <div class="cmp-row"><b>Primjer √(x−2):</b>x ≥ 2 → ⟨2, +∞)</div>
      </div>
    </div>
    <div class="cmp-c">
      <div class="cmp-h r">1/√(izraz) → > 0</div>
      <div class="cmp-body">
        <div class="cmp-row"><b>Uvjet:</b> izraz > 0 (strogo!)</div>
        <div class="cmp-row"><b>Rub:</b> isključen (okruglom ( ))</div>
        <div class="cmp-row"><b>Primjer <span class="frac"><span class="num">1</span><span class="den">√</span></span>(x−2):</b>x > 2 → (2, +∞)</div>
      </div>
    </div>
  </div>

  <!-- STEP REVEAL 3 — iracionalni -->
  <div class="sr" id="sr3">
    <div class="sr-head">
      <div class="sr-title">Domena s kombiniranim uvjetima — korak po korak</div>
      <div class="sr-task">Nađi domenu: f(x) = √(x+3) / (x−1)</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr3s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Uvjet 1 — korijen u brojevniku</div>
            <div class="sr-txt">√(x+3) → x + 3 ≥ 0 → <strong>x ≥ −3</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Uvjet 2 — nazivnik razlomka</div>
            <div class="sr-txt">x − 1 ≠ 0 → <strong>x ≠ 1</strong></div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Presjek oba uvjeta</div>
            <div class="sr-txt">x ≥ −3 <strong>I</strong> x ≠ 1
              <div class="sr-tryit">
                <div class="sr-try-lbl">↳ Zapiši domenu kao interval(e)</div>
                <div class="sr-try-row">
                  <input class="sr-try-in" id="try3" type="text" placeholder="⟨-3,1) ∪ ..." autocomplete="off">
                  <button class="sr-try-btn" onclick="tryIt('try3','try3-fb','⟨-3,1)∪(1,+∞)','dom1')">Provjeri</button>
                </div>
                <div class="sr-try-fb" id="try3-fb"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr3s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Konačna domena</div>
            <div class="sr-txt"><strong>D = ⟨−3, 1) ∪ (1, +∞)</strong><br><em>Od −3 (uključeno, ≥) do svuda, ali s rupom na 1 (isključeno, ≠)</em></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr3',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr3',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr3p">0 / 4</span>
    </div>
  </div>

  <!-- BUG 3 -->
  <div class="box-bug">
    <div class="bug-head">🐛 prepoznaj grešku — iracionalni izraz</div>
    <div class="bug-body">
      <p style="font-size:13px;color:var(--t2);margin-bottom:12px;font-family:var(--mono)">Učenik pronalazi domenu f(x) = <span class="frac"><span class="num">1</span><span class="den">√</span></span>(x−4):</p>
      <div class="bug-task">D = <span class="wrong">⟨4, +∞)</span></div>
      <div class="bug-opts">
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">A) Točno, uvjet je x ≥ 4</div>
        <div class="bug-opt" onclick="bug(this,'b3',true,'b3e')">B) Greška: <span class="frac"><span class="num">1</span><span class="den">√</span></span> zahtijeva STROGI uvjet > 0, dakle D = (4, +∞)</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">C) Greška: domena je cijeli ℝ</div>
        <div class="bug-opt" onclick="bug(this,'b3',false,'b3e')">D) Greška: domena je (−∞, 4)</div>
      </div>
      <div class="bug-expl" id="b3e"></div>
    </div>
  </div>

  <div class="box-20">
    <div class="b20-lbl">ZAPAMTI U 20 SEKUNDI — iracionalni</div>
    <ul class="b20-list">
      <li class="b20-item"><div class="b20-dot"></div>√ → argument ≥ 0 (rub uključen, uglatom ⟨⟩)</li>
      <li class="b20-item"><div class="b20-dot"></div>1/√ → argument > 0 (rub isključen, okruglom!) ← najčešća greška!</li>
      <li class="b20-item"><div class="b20-dot"></div>³√ → bez uvjeta (kubni korijen za sve realne)</li>
      <li class="b20-item"><div class="b20-dot"></div>Kombinirani uvjeti = presjek (svi moraju biti ispunjeni istovremeno)</li>
    </ul>
  </div>


  <!-- RIJEŠENI PRIMJER -->
  <div class="combo">
    <div class="combo-head"><div class="combo-badge">RIJEŠENI PRIMJER — domena iracionalnog izraza</div></div>
    <div class="combo-body">
      <div class="combo-task">Nađi domenu f(x) = √(2x − 4) / (x − 5)</div>
      <div class="combo-steps">
        <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet 1 — argument korijena ≥ 0: 2x − 4 ≥ 0 → <strong>x ≥ 2</strong></div></div>
        <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uvjet 2 — nazivnik ≠ 0: x − 5 ≠ 0 → <strong>x ≠ 5</strong></div></div>
        <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Presjek uvjeta: x ≥ 2 i x ≠ 5 → <strong>[2, 5) ∪ (5, +∞)</strong></div></div>
        <div class="combo-step"><div class="combo-n">4</div><div class="combo-txt">Tipični obrazac: uvijek oba uvjeta istovremeno, pa izbaci zabranjene točke</div></div>
      </div>
      <div class="combo-ans">D(f) = ⟨2, 5) ∪ (5, +∞) &nbsp;·&nbsp; Matura pita ovaj tip gotovo svake godine</div>
    </div>
  </div>

  <!-- ICP 3 -->
  <div class="inline-cp" id="icp3">
    <div class="icp-head">
      <span class="icp-title">Provjeri razumijevanje — iracionalni</span>
      <span class="icp-score" id="icp3-sc">0 / 3</span>
    </div>
    <div class="icp-body">
      <div class="icp-q" id="icp3q1">
        <div class="icp-q-text">Domena f(x) = √(x² − 9) kao uvjet je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x ≠ ±3</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,true,'icp3q1fb')">x ≤ −3 ili x ≥ 3</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">−3 ≤ x ≤ 3</div>
          <div class="icp-opt" onclick="icp('icp3','q1',this,false,'icp3q1fb')">x > 3</div>
        </div>
        <div class="icp-fb" id="icp3q1fb"></div>
      </div>
      <div class="icp-q" id="icp3q2">
        <div class="icp-q-text">Domena f(x) = <span class="frac"><span class="num">1</span><span class="den">√</span></span>(x+5) je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">⟨−5, +∞)</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,true,'icp3q2fb')">(−5, +∞)</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">(−∞, −5)</div>
          <div class="icp-opt" onclick="icp('icp3','q2',this,false,'icp3q2fb')">ℝ</div>
        </div>
        <div class="icp-fb" id="icp3q2fb"></div>
      </div>
      <div class="icp-q" id="icp3q3">
        <div class="icp-q-text">Za ³√(x − 2), uvjet definiranosti je:</div>
        <div class="icp-opts">
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x ≥ 2</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x > 2</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,true,'icp3q3fb')">bez uvjeta, D = ℝ</div>
          <div class="icp-opt" onclick="icp('icp3','q3',this,false,'icp3q3fb')">x ≠ 2</div>
        </div>
        <div class="icp-fb" id="icp3q3fb"></div>
      </div>
      <div class="icp-done" id="icp3-done">✓ Izvrsno! Još rapid fire trening pa Vježbaj →</div>
      <button class="icp-retry" id="icp3-retry" onclick="retryIcp('icp3')">↺ Pokušaj ponovo</button>
    </div>
  </div>

  <div class="sec-hdr"><div class="sec-line"></div><h2 class="sec-badge" style="color:var(--violet);border-color:var(--bd-v);background:var(--dim-v)">A RAZINA · KOMBINIRANI ZADACI</h2><span class="sec-time">~20 min</span><div class="sec-line"></div></div>
  <div class="combo"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A1 — Horner i potpuna faktorizacija</div></div><div class="combo-body">
    <div class="combo-task">Faktoriziraj potpuno: P(x) = x³ − 6x² + 11x − 6</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Kandidati za racionalne nultočke: ±1, ±2, ±3, ±6.<br>P(1) = 1−6+11−6 = <strong>0 ✓</strong> → x=1 je nultočka</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Hornerova shema za x=1:<br>1 | −6 | 11 | −6<br>  |  1 | −5 |  6<br>1 | −5 |  6 |  0 → kvocijent: x²−5x+6</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">x²−5x+6 = (x−2)(x−3)<br>P(x) = (x−1)(x−2)(x−3)</div></div>
    </div><div class="combo-ans">P(x) = (x−1)(x−2)(x−3)</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A2 — skraćivanje racionalnog izraza</div></div><div class="combo-body">
    <div class="combo-task">Pojednostavni: (x²−9) / (x²−2x−3)</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Brojevnik: x²−9 = (x−3)(x+3)</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Nazivnik: x²−2x−3 = (x−3)(x+1)</div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Skraćujemo (x−3) → <strong>(x+3)/(x+1)</strong>. Uvjet definiranosti: x ≠ 3 i x ≠ −1</div></div>
    </div><div class="combo-ans">(x+3)/(x+1), za x ≠ 3 i x ≠ −1</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A3 — domena kombiniranog izraza</div></div><div class="combo-body">
    <div class="combo-task">Nađi domenu: f(x) = √(x+3) / (x²−4)</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Uvjet korjenovanja: x+3 ≥ 0 → <strong>x ≥ −3</strong></div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">Uvjet nazivnika: x²−4=(x−2)(x+2)≠0 → <strong>x ≠ 2 i x ≠ −2</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Presjek: x ≥ −3 i x ≠ ±2 → D = ⟨−3, −2) ∪ (−2, 2) ∪ (2, +∞)</div></div>
    </div><div class="combo-ans">D = ⟨−3, −2) ∪ (−2, 2) ∪ (2, +∞)</div>
  </div></div>
  <div class="combo" style="margin-top:10px"><div class="combo-head"><div class="combo-badge">KOMBINIRANI · A4 — parametar za djeljivost polinoma</div></div><div class="combo-body">
    <div class="combo-task">Nađi k tako da je P(x) = x³ + kx − 6 djeljivo s (x−1).</div>
    <div class="combo-steps">
      <div class="combo-step"><div class="combo-n">1</div><div class="combo-txt">Teorem faktora: (x−1) dijeli P(x) ⟺ P(1) = 0</div></div>
      <div class="combo-step"><div class="combo-n">2</div><div class="combo-txt">P(1) = 1 + k − 6 = 0 → k − 5 = 0 → <strong>k = 5</strong></div></div>
      <div class="combo-step"><div class="combo-n">3</div><div class="combo-txt">Provjera: P(x)=x³+5x−6, P(1)=1+5−6=0 ✓</div></div>
    </div><div class="combo-ans">k = 5</div>
  </div></div>

  <!-- RAPID FIRE DRILL -->
  <div class="drill">
    <div class="drill-head">
      <span class="drill-title">// Brzi refleks — Točno ili Netočno?</span>
      <span class="drill-score" id="dr-sc">0 / 0</span>
    </div>
    <div class="drill-body">
      <p style="font-family:var(--mono);font-size:11px;color:var(--t3);text-align:center;margin-bottom:14px">Je li sljedeća tvrdnja točna?</p>
      <div class="drill-q" id="dr-q">Stupanj polinoma x³ + 2x − 1 je 3</div>
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
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Uvjet definiranosti · ~55% netočnih<span class="ncvvo-live-stat neutral" id="nlive-uvjet">uvjet</span></div>
        <div class="ncvvo-real-q">Nađi domenu: f(x) = √(2x−1) / (x²−x−6)</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>zaborave uvjet iz nazivnika ili pogrešno postave presjek</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Uvjet 1 (√): 2x−1 ≥ 0 → x ≥ 1/2<br>Uvjet 2 (nazivnik): x²−x−6=(x−3)(x+2)≠0 → x≠3 i x≠−2<br>Presjek: x ≥ <span class="frac"><span class="num">1</span><span class="den">2</span></span> i x ≠ 3 → <strong>D = ⟨<span class="frac"><span class="num">1</span><span class="den">2</span></span>, 3) ∪ (3, +∞)</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Horner · ~40% netočnih<span class="ncvvo-live-stat neutral" id="nlive-horn">horner</span></div>
        <div class="ncvvo-real-q">P(x) = 2x³ − 3x² − 11x + 6. Faktoriziraj potpuno.</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne traže prvu nultočku metodično — gube previše vremena</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Pokušaj x=1: P(1)=2−3−11+6=−6≠0. x=−1: P(−1)=−2−3+11+6=12≠0. x=3: P(3)=54−27−33+6=0 ✓<br>Horner za x=3: 2|−3|−11|6 → 2|3|−2|0 → kvocijent: 2x²+3x−2=(2x−1)(x+2)<br><strong>P(x) = (x−3)(2x−1)(x+2)</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Skraćivanje · ~50% netočnih<span class="ncvvo-live-stat neutral" id="nlive-skrac">skraćivanje</span></div>
        <div class="ncvvo-real-q">Pojednostavni: (x²+x−6) / (x²−4)</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>izostavljaju uvjet definiranosti nakon skraćivanja</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Brojevnik: x²+x−6=(x+3)(x−2). Nazivnik: x²−4=(x−2)(x+2)<br>Skraćujemo (x−2) → (x+3)/(x+2)<br><strong>Rezultat: (x+3)/(x+2), za x ≠ 2 i x ≠ −2</strong></div>
      </div>
      <div class="ncvvo-real-item">
        <div class="ncvvo-real-meta"><span class="ncvvo-real-year">A razina · tipično</span>Domena iracionalnog · ~45% netočnih<span class="ncvvo-live-stat neutral" id="nlive-dom">domena</span></div>
        <div class="ncvvo-real-q">Nađi domenu: f(x) = √(x+2) + 1/(x−3)</div>
        <div class="ncvvo-real-stat">Najčešća greška: <strong>ne uočavaju oba uvjeta ili pogrešno pišu presjek</strong></div>
        <button class="ncvvo-real-show" onclick="showAns(this)">Prikaži rješenje ↓</button>
        <div class="ncvvo-real-ans">Uvjet 1 (√): x+2 ≥ 0 → x ≥ −2<br>Uvjet 2 (<span class="frac"><span class="num">1</span><span class="den">x</span></span>): x−3 ≠ 0 → x ≠ 3<br>Presjek: x ≥ −2 i x ≠ 3 → <strong>D = ⟨−2, 3) ∪ (3, +∞)</strong></div>
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
      <li class="cp-item" id="cp1"><div class="cp-check" onclick="toggleCP(1)"></div>Znam primijeniti Hornerovu shemu i naći nultočke polinoma</li>
      <li class="cp-item" id="cp2"><div class="cp-check" onclick="toggleCP(2)"></div>Uvjet definiranosti racionalnog izraza: nazivnik ≠ 0, uvijek napiši!</li>
      <li class="cp-item" id="cp3"><div class="cp-check" onclick="toggleCP(3)"></div>Nakon skraćivanja — uvjet definiranosti se ne briše!</li>
      <li class="cp-item" id="cp4"><div class="cp-check" onclick="toggleCP(4)"></div>√ → ≥ 0 · <span class="frac"><span class="num">1</span><span class="den">√</span></span> → > 0 · ³√ → bez uvjeta — tri pravila napamet</li>
      <li class="cp-item" id="cp5"><div class="cp-check" onclick="toggleCP(5)"></div>Kombinirani uvjeti = presjek svih uvjeta → pišem kao uniju intervala</li>
    </ul>
    <div class="cp-footer">
      <span id="cp-txt">0 / 5 potvrđeno</span>
      <span class="cp-progress-txt" id="cp-ready" style="display:none">→ Spreman si za Poglavlje 04!</span>
    </div>
  </div>

  <div class="matura-block">
    <div class="matura-hd">⭐ matura fokus — automatski refleks</div>
    <ul class="matura-list">
      <li class="mi"><div class="mi-dot"></div><span><b>P(a) = 0 ⟺ (x−a) je faktor.</b> Prvu nultočku traži metodično: x=1, −1, ±2...</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Horner:</b> koef. u red, spusti prvi, svaki = prethodni·c + koef. Ostatak = P(c).</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Uvjet definiranosti = uvijek navesti</b> — čak i nakon skraćivanja!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>√ → ≥ 0 · <span class="frac"><span class="num">1</span><span class="den">√</span></span> → > 0 · ³√ → bez uvjeta.</b> Tri pravila, nula iznimki.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Kombinirani uvjeti = presjek</b> — oba moraju biti zadovoljena istovremeno.</span></li>
    </ul>
  </div>

    <div class="connect-next"><div class="cn-head"><span class="cn-icon">🔗</span><div><div class="cn-title">Gdje ćeš ovo koristiti?</div><div class="cn-sub">Polinomi i izrazi — svugdje gdje se analizira algebra</div></div></div>
    <div class="cn-grid">
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge b">P04</span><span class="cn-item-title">Jednadžbe</span></div><div class="cn-item-desc">Rješavanje P(x)=0 Hornerovom shemom daje faktorizaciju.</div><div class="cn-item-arrow">→ polinomne jednadžbe</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge i">P07</span><span class="cn-item-title">Kvadratna funkcija</span></div><div class="cn-item-desc">Faktorizacija kvadratnog trinoma: ax²+bx+c=a(x−x₁)(x−x₂).</div><div class="cn-item-arrow">→ faktorizacija kvadratne</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge c">P17</span><span class="cn-item-title">Derivacije</span></div><div class="cn-item-desc">Derivacija polinoma P'(x) = koeficijent·pravilo potencije.</div><div class="cn-item-arrow">→ derivacije polinoma</div></div>
      <div class="cn-item"><div class="cn-item-head"><span class="cn-badge a">P18</span><span class="cn-item-title">Integrali</span></div><div class="cn-item-desc">∫P(x)dx — svaki monomial po pravilu potencije.</div><div class="cn-item-arrow">→ integracija polinoma</div></div>
    </div>
  </div>
<div class="slbl" style="margin-top:28px">// formule za kraj — brzi podsjetnik</div>
<div class="con" style="margin-bottom:20px">
  <div class="cr"><div class="ck b">Hornerova shema</div><div class="cv">Dijeli p(x) s (x−a): ostatak = p(a). Koeficijenti u tablici, množi s a i zbraja.</div></div>
  <div class="cr"><div class="ck c">Racionalni izrazi</div><div class="cv">Domena: svi x za koje nazivnik ≠ 0. Uvijek provjeri sve nazivnike (i skrivene)!</div></div>
  <div class="cr"><div class="ck i">Iracionalni izrazi</div><div class="cv">Domena √f(x): f(x)≥0. Domena ³√f(x): svi x∈ℝ (neparni korijen uvijek postoji).</div></div>
  <div class="cr"><div class="ck a">Faktorizacija</div><div class="cv">Ako p(a)=0, tada (x−a) jest faktor p(x). Racionalne nultočke p/q: slobodni/vodeći.</div></div>
  <div class="cr"><div class="ck r">Zamka</div><div class="cv">√(x−2)·√(x+2) ≠ √(x²−4) — domena svake zasebno! D(√(x−2))=[2,∞), D(√(x+2))=[−2,∞).</div></div>
</div>
<div class="nav-row">
    <span class="nb" onclick="sw(0)">← Pregled</span>
    <span class="nb primary" onclick="sw(2)">Vježbaj →</span>
  </div>
</div>

<!-- ═══════════════════════════════════ -->
<!-- L2 — PRACTICE                       -->
<!-- ═══════════════════════════════════ -->
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
      <li class="mi"><div class="mi-dot"></div><span><b>P(a) = 0 ⟺ (x−a) je faktor.</b> Prvu nultočku traži među ±(dijelitelji a₀).</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Horner:</b> koef. u red, spusti prvi, svaki: + c · prethodni. Ostatak = P(c).</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Uvjet definiranosti = uvijek navesti</b> — čak i nakon skraćivanja!</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>√ → ≥ 0. <span class="frac"><span class="num">1</span><span class="den">√</span></span> → > 0. ³√ → bez uvjeta.</b> Tri pravila, nula iznimki.</span></li>
      <li class="mi"><div class="mi-dot"></div><span><b>Kombinacija uvjeta = presjek</b> (svi moraju biti zadovoljeni istovremeno).</span></li>
    </ul>
  </div>

  <div class="slbl" style="margin-top:28px">// bonus — popuni prazninu</div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">01 · stupanj polinoma</div><div class="fitb-sent">Stupanj P(x) = 3x⁵ − x³ + 0·x⁷ + 2 je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi1" type="text" placeholder="stupanj..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi1','f1f','5','st1')">Provjeri</button></div><div class="fitb-fb" id="f1f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">02 · Horner · ostatak</div><div class="fitb-sent">P(x) = x² − 5x + 6. Ostatak pri dijeljenju s (x−2) je ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi2" type="text" placeholder="ostatak..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi2','f2f','0','horn2')">Provjeri</button></div><div class="fitb-fb" id="f2f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">03 · uvjet definiranosti</div><div class="fitb-sent">Uvjet definiranosti f(x) = <span class="frac"><span class="num">1</span><span class="den">√</span></span>(x−5) je x ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi3" type="text" placeholder="uvjet..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi3','f3f','>5','uvj1')">Provjeri</button></div><div class="fitb-fb" id="f3f"></div></div>

  <div class="fitb"><div class="fitb-h"><div class="fitb-meta">04 · iracionalni izraz · domena</div><div class="fitb-sent">Domena f(x) = √(x+4) kao interval: ___</div></div><div class="fitb-row"><input class="fitb-in" id="fi4" type="text" placeholder="D = ..." autocomplete="off" spellcheck="false"><button class="fitb-btn" onclick="chkf('fi4','f4f','⟨-4,+∞)','dom2')">Provjeri</button></div><div class="fitb-fb" id="f4f"></div></div>

  <!-- sr4 — Horner's scheme complete factorisation -->
  <div class="sr" id="sr4" style="margin-top:11px">
    <div class="sr-head">
      <div class="sr-title">Riješeni primjer — Hörnerov postupak (razlaganje)</div>
      <div class="sr-task">Faktoriziraj P(x) = 2x³ − 5x² + x + 2 koristeći Hörnerov postupak.</div>
    </div>
    <div class="sr-steps">
      <div class="sr-step" id="sr4s1">
        <div class="sr-step-in">
          <div class="sr-num">1</div>
          <div class="sr-body">
            <div class="sr-stitle">Nađi racionalnu nultočku probanjem</div>
            <div class="sr-txt">Kandidati: ±1, ±2, ±<span class="frac"><span class="num">1</span><span class="den">2</span></span> (dijelitelji slobodnog člana / vodećeg koef.)<br>Provjeri x = 2: P(2) = 2·8 − 5·4 + 2 + 2 = 16−20+2+2 = <strong>0</strong> ✓</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s2">
        <div class="sr-step-in">
          <div class="sr-num">2</div>
          <div class="sr-body">
            <div class="sr-stitle">Hörnerov postupak za c = 2</div>
            <div class="sr-txt">Koeficijenti: <strong>2 | −5 | 1 | 2</strong><br>
              Spusti 2 → 2·2=4; −5+4=<strong>−1</strong> → −1·2=−2; 1+(−2)=<strong>−1</strong> → −1·2=−2; 2+(−2)=<strong>0</strong><br>
              Kvocijent: <strong>2x² − x − 1</strong> &nbsp;|&nbsp; Ostatak = 0 ✓</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s3">
        <div class="sr-step-in">
          <div class="sr-num">3</div>
          <div class="sr-body">
            <div class="sr-stitle">Faktoriziraj kvocijent 2x² − x − 1</div>
            <div class="sr-txt">Diskriminanta: 1 + 8 = 9 → x = (1±3)/4 → x₁ = 1, x₂ = −<span class="frac"><span class="num">1</span><span class="den">2</span></span><br>Dakle: 2x² − x − 1 = 2(x−1)(x+<span class="frac"><span class="num">1</span><span class="den">2</span></span>) = (x−1)(2x+1)</div>
          </div>
        </div>
      </div>
      <div class="sr-step" id="sr4s4">
        <div class="sr-step-in">
          <div class="sr-num">4</div>
          <div class="sr-body">
            <div class="sr-stitle">Zapiši potpunu faktorizaciju</div>
            <div class="sr-txt"><strong>P(x) = (x−2)(x−1)(2x+1)</strong><br>Nultočke: x = 2, x = 1, x = −<span class="frac"><span class="num">1</span><span class="den">2</span></span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sr-foot">
      <button class="sr-btn" onclick="nxtStep('sr4',4)">Sljedeći korak →</button>
      <button class="sr-btn rst" onclick="rstStep('sr4',4)">↺ Resetiraj</button>
      <span class="sr-prog" id="sr4p">0 / 4</span>
    </div>
  </div>

  <div class="box-warn">
    <span class="bw-ico">⚡</span>
    <div class="bw-body">
      <div class="bw-title">MATURA LOGIKA — racionalni korijeni</div>
      <div class="bw-txt">
        Kad vidiš polinom stupnja ≥ 3 → <strong>odmah</strong> provjeri sve kandidate
        ±<sup>p</sup>/<sub>q</sub> gdje je <em>p</em> djelitelj slobodnog člana,
        <em>q</em> djelitelj vodećeg koeficijenta.<br>
        Primjer: 2x³ − 5x² + x + 2 → kandidati: ±1, ±2, ±½<br>
        Nađeš jedan korijen → faktoriziraš Hornerovom shemom → svediš na kvadratni.
      </div>
    </div>
  </div>
  <div class="nav-row">
    <span class="nb" onclick="sw(1)">← Uči</span>
    <button onclick="navigateChapter('p04')" class="nb primary">Sljedeće poglavlje →</button>
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
var tabProgress=[18,50,88];
function sw(i){
  document.querySelectorAll('.tab').forEach(function(t,j){t.classList.toggle('on',j===i)});
  document.querySelectorAll('.layer').forEach(function(l,j){l.classList.toggle('on',j===i)});
  var p=tabProgress[i];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  if(i===2&&!quizInited){quizInited=true;renderQuiz();}
  window.scrollTo({top:0,behavior:'smooth'});
  try{sessionStorage.setItem('p03_tab',i);}catch(e){}
}


/* ── POLY VISUALIZER ── */
var polyData={
  p1:{expr:'3x⁴ − 2x² + 1',deg:4,lc:3,c0:1,zeros:4,p0:1,p1v:2},
  p2:{expr:'x³ − 6x² + 11x − 6',deg:3,lc:1,c0:-6,zeros:3,p0:-6,p1v:0},
  p3:{expr:'2x² − 5x + 3',deg:2,lc:2,c0:3,zeros:2,p0:3,p1v:0},
  p4:{expr:'x⁵ + x − 1',deg:5,lc:1,c0:-1,zeros:5,p0:-1,p1v:1},
  p5:{expr:'7',deg:0,lc:7,c0:7,zeros:0,p0:7,p1v:7}
};
function setPoly(key,btn){
  btn.parentElement.querySelectorAll('.pv-btn').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  var d=polyData[key];
  document.getElementById('pv-poly').textContent=d.expr;
  document.getElementById('pv-deg').textContent=d.deg;
  document.getElementById('pv-lc').textContent=d.lc;
  document.getElementById('pv-c').textContent=d.c0;
  document.getElementById('pv-zeros').textContent=d.zeros;
  document.getElementById('pv-p0').textContent=d.p0;
  document.getElementById('pv-p1v').textContent=d.p1v;
}

/* ── RATIONAL DOMAIN BUILDER ── */
var rdbData={
  r1:{expr:'f(x) = 1 / (x − 3)',steps:['Naziv: x − 3 ≠ 0','x − 3 = 0 → x = 3','Uvjet: x ≠ 3'],domain:'D = (−∞, 3) ∪ (3, +∞) = ℝ \\\\ {3}'},
  r2:{expr:'f(x) = (x+2) / (x²−4)',steps:['Nazivnik: x²−4 = (x−2)(x+2) ≠ 0','x−2=0 → x=2 · x+2=0 → x=−2','Uvjet: x ≠ 2 i x ≠ −2<br><em>Napomena: brojevnik (x+2) = 0 za x=−2, ali uvjet ostaje!</em>'],domain:'D = ℝ \\\\ {−2, 2}'},
  r3:{expr:'f(x) = x / (x²+1)',steps:['Nazivnik: x²+1','x²+1 = 0 → x² = −1 → <strong>nema rješenja u ℝ!</strong>','x²+1 > 0 uvijek → nema uvjeta'],domain:'D = ℝ (definiran za sve x!)'},
  r4:{expr:'f(x) = (x²−9) / (x−3)',steps:['Nazivnik: x−3 ≠ 0 → x ≠ 3','Brojevnik: x²−9 = (x−3)(x+3)','Skraćujemo (x−3) → ostaje x+3<br><em>Ali! Uvjet x ≠ 3 i dalje vrijedi!</em>'],domain:'f(x) = x+3, za x ≠ 3'},
  r5:{expr:'f(x) = 1 / (x²−5x+6)',steps:['Nazivnik: x²−5x+6 = (x−2)(x−3) ≠ 0','(x−2)=0 → x=2 · (x−3)=0 → x=3','Uvjet: x ≠ 2 i x ≠ 3'],domain:'D = (−∞,2) ∪ (2,3) ∪ (3,+∞)'}
};
function setRdb(key,btn){
  btn.parentElement.querySelectorAll('.rdb-btn').forEach(function(b){b.classList.remove('on')});
  btn.classList.add('on');
  var d=rdbData[key];
  document.getElementById('rdb-expr').textContent=d.expr;
  var steps=document.getElementById('rdb-steps');
  steps.innerHTML=d.steps.map(function(s,i){
    return '<div class="rdb-step"><span class="rdb-sn">'+(i+1)+'.</span><span class="rdb-st">'+s+'</span></div>';
  }).join('');
  document.getElementById('rdb-domain').innerHTML='<strong>D:</strong> '+d.domain;
}
setRdb('r1',document.querySelector('.rdb-btn.on'));

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
  document.querySelectorAll('#'+id+' .sr-try-btn').forEach(function(b){b.disabled=false});
  document.querySelectorAll('#'+id+' .sr-try-fb').forEach(function(f){f.className='sr-try-fb'});
}

/* ── TRY-IT ── */
var tryExp={
  horn1:'Ostatak = 0 znači da je c = 1 nultočka polinoma P(x). Dakle (x−1) je faktor!',
  rat1:'(x−3)(x+2)/(x−2)(x+2) je faktorizirani oblik. Sada možeš skratiti (x+2).',
  dom1:'x ≥ −3 I x ≠ 1 → uzimamo od −3, ali preskačemo 1: ⟨−3,1) ∪ (1,+∞)'
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
  {q:'Stupanj polinoma x³ + 2x − 1 je 3',ans:true,tag:'polinomi',exp:'Točno! Najveći eksponent s nenultim koef. = 3 ✓'},
  {q:'P(2) = 0 znači da je (x+2) faktor',ans:false,tag:'polinomi',exp:'Netočno! P(2)=0 → (x−2) je faktor, ne (x+2). Pazi na predznak!'},
  {q:'Uvjet def. za 1/(x²−9) je x ≠ 3',ans:false,tag:'uvjeti',exp:'Netočno! x²−9=(x−3)(x+3)=0 → x=3 ILI x=−3. Uvjet: x ≠ 3 I x ≠ −3.'},
  {q:'√(x²+4) je definiran za sve x ∈ ℝ',ans:true,tag:'iracionalni',exp:'Točno! x²+4 ≥ 4 > 0 uvijek — nikad nije negativan ✓'},
  {q:'³√(−27) = −3',ans:true,tag:'iracionalni',exp:'Točno! Neparan korijen negativnog broja je definiran. ³√(−27) = −3 jer (−3)³ = −27 ✓'},
  {q:'(x²−4)/(x−2) = x+2 za sve x',ans:false,tag:'uvjeti',exp:'Netočno! Vrijedi samo za x ≠ 2. Uvjet definiranosti mora biti naveden!'},
  {q:'Polinom stupnja 4 ima točno 4 nultočke u ℝ',ans:false,tag:'polinomi',exp:'Netočno! Ima NAJVIŠE 4 nultočke u ℝ — neke mogu biti kompleksne ili ponovljene.'},
  {q:'Uvjet za √(3−x) je x ≤ 3',ans:true,tag:'iracionalni',exp:'Točno! 3−x ≥ 0 → x ≤ 3 → D = (−∞, 3⟩ ✓'},
  {q:'Slobodni član P(x) = x³−2x+5 je −2',ans:false,tag:'polinomi',exp:'Netočno! Slobodni član = a₀ = P(0) = 5. (−2 je koeficijent uz x)'},
  {q:'Ostatak pri dijeljenju P(x) s (x−a) je P(a)',ans:true,tag:'polinomi',exp:'Točno! Teorem o ostatku: R = P(a). Hornerov algoritam računa upravo P(a) ✓'},
  {q:'1/√(x+3) zahtijeva x > −3',ans:true,tag:'iracionalni',exp:'Točno! 1/√ zahtijeva x+3 > 0 (strogo) jer i nazivnik mora biti ≠ 0 ✓'},
  {q:'Presjek uvjeta x ≥ 2 i x ≠ 2 je x > 2',ans:true,tag:'uvjeti',exp:'Točno! x ≥ 2 I x ≠ 2 = x > 2 → D = (2, +∞) ✓'}
];
var drIdx=0,drDone=false,drOk=0,drTot=0;
function drill(el,chosen){
  if(drDone)return;drDone=true;drTot++;
  var d=drData[drIdx];var ok=chosen===d.ans;if(ok)drOk++;
  el.closest('.drill-opts').querySelectorAll('.drill-opt').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'ok':'ng');
  var fb=document.getElementById('dr-fb');
  var tagHtml=d.tag?'<span style="font-family:var(--mono);font-size:9px;padding:2px 7px;border-radius:3px;border:1px solid;font-weight:700;margin-right:7px;background:'+(ok?'var(--dim-g)':'var(--dim-r)')+';color:'+(ok?'var(--green)':'var(--red)')+';border-color:'+(ok?'var(--bd-g)':'var(--bd-r)')+'">'+d.tag+'</span>':'';
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
  b1:'✓ Točno! Koeficijent uz x⁷ je 0 — taj član ne postoji. Stupanj = 3 (uz x³ je koef. 4 ≠ 0).',
  b2:'✓ Točno! Skraćivanje je točno, ali x ≠ 3 mora biti naveden — x=3 je isključen iz originalne domene.',
  b3:'✓ Točno! 1/√ znači i korijen i razlomak — argument mora biti STROGO > 0. D = (4, +∞), ne ⟨4,+∞).'
};
function bug(el,id,ok,eid){
  if(bugDone[id])return;bugDone[id]=true;
  el.closest('.bug-opts').querySelectorAll('.bug-opt').forEach(function(o){o.classList.add('dis')});
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
    q1:{ok:'✓ Točno! 0·x⁷ ne računa se — koef. je 0, pa je stupanj 4 (uz 5x⁴)',ng:'✗ Netočno. Stupanj = najveći eksponent s NENULTIM koef. → 4'},
    q2:{ok:'✓ Točno! P(a)=0 ⟺ (x−a) je faktor. P(3)=0 → (x−3) je faktor.',ng:'✗ Netočno. Teorem faktora: P(a)=0 → (x−a) je faktor. P(3)=0 → (x−3)'},
    q3:{ok:'✓ Točno! Slobodni član = a₀ = P(0) = 7.',ng:'✗ Netočno. Slobodni član je član bez x — ovdje je to 7.'}
  },
  icp2:{
    q1:{ok:'✓ Točno! P(1) = 1−1−1+1 = 0 ✓ → x=1 je nultočka',ng:'✗ Netočno. P(1) = 1−1−1+1 = 0 → x=1 JE nultočka'},
    q2:{ok:'✓ Točno! 2x²−3x+1 za x=1: 2−3+1=0 → ostatak je 0',ng:'✗ Netočno. P(1) = 2(1)²−3(1)+1 = 2−3+1 = 0 → ostatak = 0'},
    q3:{ok:'✓ Točno! Uvijek počni s x=1 — najbrže za izračunati u glavi.',ng:'✗ Netočno. Strategija: počni s x=1 (najlakše), onda x=−1, pa ±2...'}
  },
  icp3:{
    q1:{ok:'✓ Točno! x²−9 = (x−3)(x+3) = 0 → x=3 ili x=−3. Uvjet: x≠3 i x≠−3',ng:'✗ Netočno. x²−9=(x−3)(x+3). Oba faktora = 0 → x≠3 I x≠−3'},
    q2:{ok:'✓ Točno! x²−4=(x−2)(x+2). Skrati (x+2) → (x−2). Uvjet x≠−2 ostaje!',ng:'✗ Netočno. x²−4=(x+2)(x−2). Skrati (x+2) → x−2, ali uvjet x≠−2 mora biti naveden!'},
    q3:{ok:'✓ Točno! ZN = (x−1)(x+1). 1/(x−1)+1/(x+1)=(x+1+x−1)/((x−1)(x+1))=2x/(x²−1)',ng:'✗ Netočno. Zajednički nazivnik = (x−1)(x+1). Brojevnik: (x+1)+(x−1)=2x → 2x/(x²−1)'}
  }
};
function icp(icpId,qId,el,ok,fbId){
  var key=icpId+'_'+qId;
  if(icpAnswered[key])return;
  icpAnswered[key]=ok;
  el.closest('.icp-opts').querySelectorAll('.icp-opt').forEach(function(o){o.classList.add('dis')});
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
  ['q1','q2','q3'].forEach(function(q){
    delete icpAnswered[icpId+'_'+q];
    var qEl=document.getElementById(icpId+q);if(!qEl)return;
    qEl.querySelectorAll('.icp-opt').forEach(function(o){o.classList.remove('ok','ng','dis');});
    var fb=qEl.querySelector('.icp-fb');if(fb){fb.className='icp-fb';fb.textContent='';}
  });
  var done=document.getElementById(icpId+'-done');var retry=document.getElementById(icpId+'-retry');
  if(done)done.classList.remove('show');if(retry)retry.classList.remove('show');
  var sc=document.getElementById(icpId+'-sc');if(sc)sc.textContent='0 / 3';
  updateProgress();
}

/* ── CHECKPOINT ── */
var cpState={1:false,2:false,3:false,4:false,5:false};
function toggleCP(n){
  cpState[n]=!cpState[n];
  var item=document.getElementById('cp'+n);
  item.querySelector('.cp-check').classList.toggle('done',cpState[n]);
  item.classList.toggle('done-item',cpState[n]);
  var done=Object.values(cpState).filter(Boolean).length;
  document.getElementById('cp-txt').textContent=done+' / 5 potvrđeno';
  document.getElementById('cp-ready').style.display=done===5?'inline':'none';
  updateProgress();
}

/* ── PROGRESS ── */
function updateProgress(){
  var drillPts=drTot>0?Math.min(Math.round(drOk/drTot*8),8):0;
  var cpDone=Object.values(cpState).filter(Boolean).length;
  var cpPts=Math.round(cpDone/5*8);
  var icpPts=0;
  ['icp1','icp2','icp3'].forEach(function(icp){
    var done=['q1','q2','q3'].filter(function(q){return icpAnswered[icp+'_'+q]!==undefined;}).length;
    icpPts+=Math.round(done/3*4);
  });
  var quizPts=Object.keys(answered).length>0?Math.round(correct/total*16):0;
  tabProgress[1]=Math.min(18+drillPts+icpPts+cpPts,50);
  tabProgress[2]=Math.min(18+drillPts+icpPts+cpPts+quizPts,100);
  var curTab=document.querySelector('.tab.on');
  var curIdx=curTab?Array.from(document.querySelectorAll('.tab')).indexOf(curTab):0;
  var p=tabProgress[curIdx];
  document.getElementById('prog-bar').style.width=p+'%';
  document.getElementById('prog-pct').textContent=p+'%';
  try{localStorage.setItem('maturiraj_p03_prog',p);}catch(e){}
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
var examMode='normal',timerInterval=null,timerSeconds=90,timerMax=90,currentQ=1,streak=0;
function setExamMode(mode,el){
  examMode=mode;
  document.querySelectorAll('.exam-mode-opt').forEach(function(o){o.classList.remove('active')});
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
    if(timerSeconds<=0){stopTimer();soundTimeUp();var t=document.getElementById('exam-timer');if(t){t.style.background='rgba(248,113,113,0.07)';setTimeout(function(){t.style.background='';},800);}}
  },1000);
}
function stopTimer(){if(timerInterval){clearInterval(timerInterval);timerInterval=null;}}
function updateTimerLabel(){var l=document.getElementById('et-q-label');var s=document.getElementById('et-streak');if(l)l.textContent='Pitanje '+currentQ+' / 12';if(s)s.textContent='Niz: '+streak+' ✓';}

/* ── ADAPTIVE ENGINE ── */
var topicErrors={polinomi:0,horner:0,racionalni:0,iracionalni:0};
var topicHints={
  polinomi:'Greške u pojmovima polinoma! Vrati se na Analizator polinoma u Uči tabu.',
  horner:'Greške s Hornerovim algoritmom! Prođi step-by-step primjer u Uči tabu. Počni uvijek s x=1.',
  racionalni:'Greške s racionalnim izrazima! <strong>Uvjet definiranosti mora biti naveden uvijek.</strong> Provjeri Domain Builder.',
  iracionalni:'Greške s iracionalnim izrazima! Pamti: paran korijen → ≥0, 1/√ → >0, neparan → bez uvjeta. Vrati se na <a href="Maturiraj_MatA_P01_FINAL.html" style="color:var(--blue)">P01</a> za intervale.'
};
var qTopics={q1:'polinomi',q2:'polinomi',q3:'horner',q4:'horner',q5:'racionalni',q6:'racionalni',q7:'racionalni',q8:'iracionalni',q9:'iracionalni',q10:'iracionalni',q11:'polinomi',q12:'racionalni'};
function checkAdaptive(qid,ok){
  var topic=qTopics[qid];
  if(!ok&&topic){topicErrors[topic]=(topicErrors[topic]||0)+1;if(topicErrors[topic]>=2)showAdaptiveBanner(topic);}
  if(ok)streak++; else streak=0;
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

/* ── NCVVO LIVE STAT ── */
var ncvvoTopicMap={
  'nlive-uvjet':['q5','q6','q7','q12'],
  'nlive-horn':['q3','q4','q11'],
  'nlive-skrac':['q5','q6','q7'],
  'nlive-dom':['q8','q9','q10']
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

/* ── SHOW NCVVO ANS ── */
function showAns(btn){var ans=btn.nextElementSibling;ans.classList.add('show');btn.style.display='none';}

/* ── QUIZ ── */
var ALL_QUESTIONS=[
  {id:'q1',topic:'polinomi',meta:'stupanj polinoma',
   text:'Koji je stupanj polinoma <code>P(x) = 4x³ − 2x⁵ + x − 7</code>?',
   opts:[{t:'3',ok:false},{t:'5',ok:true},{t:'1',ok:false},{t:'−7',ok:false}],
   c:'✓ Točno. Vodeći član je −2x⁵, dakle stupanj = 5.',
   w:'✗ Netočno. Stupanj = najveći eksponent s nenultim koef. Vodeći: −2x⁵ → stupanj 5.',
   proof:['Identificiraj sve eksponente: 3, 5, 1, 0','Koji ima nenulti koef.? Svi: 4, −2, 1, −7','Najveći = 5 → stupanj je 5']},
  {id:'q2',topic:'polinomi',meta:'teorem faktora',
   text:'P(x) je polinom i P(−2) = 0. Koji je faktor P(x)?',
   opts:[{t:'(x+2)',ok:true},{t:'(x−2)',ok:false},{t:'2x',ok:false},{t:'(x²−2)',ok:false}],
   c:'✓ Točno. P(a)=0 ⟺ (x−a) je faktor. P(−2)=0 → (x−(−2)) = (x+2) je faktor.',
   w:'✗ Netočno. P(a)=0 → (x−a) je faktor. P(−2)=0 → (x−(−2)) = (x+2).',
   proof:['Teorem faktora: P(a)=0 ⟺ (x−a) je faktor','Ovdje a = −2','(x−(−2)) = (x+2) je faktor ✓']},
  {id:'q3',topic:'horner',meta:'Hornerov algoritam',
   text:'P(x) = x² − 3x + 2. Što je P(1) (= ostatak pri dijeljenju s (x−1))?',
   opts:[{t:'2',ok:false},{t:'1',ok:false},{t:'0',ok:true},{t:'−2',ok:false}],
   c:'✓ Točno. P(1) = 1−3+2 = 0 → x=1 je nultočka, (x−1) je faktor.',
   w:'✗ Netočno. P(1) = 1²−3·1+2 = 1−3+2 = 0.',
   proof:['Uvrsti x=1: P(1) = 1²−3(1)+2','= 1−3+2 = 0 ✓','P(1)=0 → x=1 je nultočka']},
  {id:'q4',topic:'horner',meta:'Horner · faktorizacija',
   text:'Hornerov algoritam za P(x) = x³−x²−x+1 i c=1 daje ostatak 0. Koji je kvocijent?',
   opts:[{t:'x²+x+1',ok:false},{t:'x²+1',ok:false},{t:'x²−x−1',ok:false},{t:'x²−1 = (x−1)(x+1)',ok:true}],
   c:'✓ Točno. Koef: 1|−1|−1|1, c=1: 1|0|−1|0. Kvocijent x²+0x−1 = x²−1 = (x−1)(x+1).',
   w:'✗ Netočno. Horner: 1|−1|−1|1, c=1 → 1|(−1+1)|(−1+0)|(1+(−1)) = 1|0|−1|0 → x²−1.',
   proof:['Horner: 1|−1|−1|1, c=1','Spusti 1, pa: 0=−1+1, −1=−1+0, 0=1+(−1)','Kvocijent: x²+0x−1 = x²−1 = (x−1)(x+1)']},
  {id:'q5',topic:'racionalni',meta:'uvjet definiranosti',
   text:'Uvjet definiranosti izraza <code>(x+1) / (x²−4)</code> je:',
   opts:[{t:'x ≠ 4',ok:false},{t:'x ≠ 2',ok:false},{t:'x ≠ 2 i x ≠ −2',ok:true},{t:'nema uvjeta',ok:false}],
   c:'✓ Točno. x²−4=(x−2)(x+2)=0 → x=2 ili x=−2. Oba su isključena.',
   w:'✗ Netočno. x²−4=(x−2)(x+2) → oba faktora mogu biti nula: x=2 ili x=−2.',
   proof:['Nazivnik: x²−4 ≠ 0','x²−4 = (x−2)(x+2)','(x−2)=0→x=2, (x+2)=0→x=−2 → uvjet: x ≠ ±2']},
  {id:'q6',topic:'racionalni',meta:'skraćivanje',
   text:'Koji je najjednostavniji oblik od <code>(x²−1)/(x+1)</code>?',
   opts:[{t:'x−1 za sve x',ok:false},{t:'x+1',ok:false},{t:'x−1, x ≠ −1',ok:true},{t:'(x−1)/(x+1)',ok:false}],
   c:'✓ Točno. x²−1=(x+1)(x−1). Skrati (x+1) → x−1, ali uvjet x ≠ −1 mora biti naveden!',
   w:'✗ Netočno. Skraćivanje je točno, ali uvjet x ≠ −1 mora biti naveden — −1 je isključen iz domene.',
   proof:['x²−1 = (x+1)(x−1)','Skrati (x+1): ostaje (x−1)','Ali x ≠ −1 mora biti naveden! ✓']},
  {id:'q7',topic:'racionalni',meta:'zbrajanje razlomaka',
   text:'Koliko je <code>1/x + 1/(x+1)</code> (za x ≠ 0, x ≠ −1)?',
   opts:[{t:'2/(2x+1)',ok:false},{t:'1/(x²+x)',ok:false},{t:'(2x+1)/(x²+x)',ok:true},{t:'2x/(x+1)',ok:false}],
   c:'✓ Točno. ZN = x(x+1). Brojevnik: (x+1)+x = 2x+1. Rezultat: (2x+1)/(x²+x).',
   w:'✗ Netočno. Zajednički nazivnik = x(x+1) = x²+x. Brojevnik = (x+1)+x = 2x+1.',
   proof:['ZN = x(x+1)','1/x = (x+1)/(x(x+1)), 1/(x+1) = x/(x(x+1))','Zbroj: (x+1+x)/(x(x+1)) = (2x+1)/(x²+x)']},
  {id:'q8',topic:'iracionalni',meta:'uvjet pod korijenom',
   text:'Domena f(x) = √(3−x) je:',
   opts:[{t:'(3, +∞)',ok:false},{t:'(−∞, 3)',ok:false},{t:'⟨3, +∞)',ok:false},{t:'(−∞, 3⟩',ok:true}],
   c:'✓ Točno. 3−x ≥ 0 → x ≤ 3 → D = (−∞, 3⟩. Uglatom jer je ≤ (uključen!).',
   w:'✗ Netočno. 3−x ≥ 0 → x ≤ 3. Uključen rub (≤) → uglatom. D = (−∞, 3⟩.',
   proof:['Uvjet: 3−x ≥ 0','Oduzmi 3: −x ≥ −3','Pomnoži s −1 (obrni!): x ≤ 3 → (−∞, 3⟩']},
  {id:'q9',topic:'iracionalni',meta:'1/√ uvjet',
   text:'Uvjet definiranosti za <code>f(x) = 1/√(x−5)</code> je:',
   opts:[{t:'x ≥ 5',ok:false},{t:'x > 5',ok:true},{t:'x ≠ 5',ok:false},{t:'x ≤ 5',ok:false}],
   c:'✓ Točno. 1/√ zahtijeva x−5 > 0 STROGO jer je i u nazivniku (ne smije biti 0). D = (5,+∞).',
   w:'✗ Netočno. 1/√ → argument mora biti STROGO > 0 (jer je u nazivniku). x−5 > 0 → x > 5.',
   proof:['√(x−5): x−5 ≥ 0 bi bio uvjet za samo √','Ali je 1/√ → nazivnik ≠ 0 → x−5 > 0','x > 5 → D = (5, +∞)']},
  {id:'q10',topic:'iracionalni',meta:'kombinirani uvjeti',
   text:'Domena f(x) = √(x+2) + 1/(x−3) je:',
   opts:[{t:'⟨−2, +∞)',ok:false},{t:'⟨−2, 3) ∪ (3, +∞)',ok:true},{t:'(−2, 3)',ok:false},{t:'ℝ \\\\ {3}',ok:false}],
   c:'✓ Točno. Uvjet 1: x+2≥0→x≥−2. Uvjet 2: x≠3. Presjek: x≥−2 I x≠3 → ⟨−2,3)∪(3,+∞).',
   w:'✗ Netočno. Oba uvjeta: x≥−2 (korijen) i x≠3 (razlomak). Presjek → ⟨−2,3)∪(3,+∞).',
   proof:['Uvjet 1: x+2 ≥ 0 → x ≥ −2','Uvjet 2: x−3 ≠ 0 → x ≠ 3','Presjek: x ≥ −2 i x ≠ 3 → ⟨−2,3)∪(3,+∞)']},
  {id:'q11',topic:'polinomi',meta:'A razina · faktorizacija',
   text:'Nultočke polinoma P(x) = x³ − 3x + 2 su:',
   opts:[{t:'x = 0, x = 3, x = −2',ok:false},{t:'x = 1 (dvostruka) i x = −2',ok:true},{t:'x = 1 i x = 2',ok:false},{t:'x = −1 i x = 2',ok:false}],
   c:'✓ Točno. P(1)=0. Horner daje x²+x−2=(x+2)(x−1). P(x)=(x−1)(x+2)(x−1)=(x−1)²(x+2).',
   w:'✗ Netočno. P(1)=1−3+2=0. Horner: 1|0|−3|2, c=1→1|1|−2|0. Kvocijent x²+x−2=(x+2)(x−1). Nultočke: x=1 (dvostruka), x=−2.',
   proof:['P(1)=1−3+2=0 → x=1 je nultočka','Horner → kvocijent x²+x−2=(x−1)(x+2)','P(x)=(x−1)²(x+2) → nultočke: x=1 (dvostruka), x=−2']},
  {id:'q12',topic:'racionalni',meta:'A razina · kombinirani',
   text:'Najjednostavniji oblik od <code>(x³−x)/(x²+x)</code> je:',
   opts:[{t:'x−1',ok:false},{t:'x(x−1)',ok:false},{t:'x−1, za x≠0 i x≠−1',ok:true},{t:'(x+1)(x−1)/x',ok:false}],
   c:'✓ Točno. Brojevnik: x(x+1)(x−1). Nazivnik: x(x+1). Skrati → x−1, za x≠0 i x≠−1.',
   w:'✗ Netočno. Faktoriziraj: brojevnik=x(x²−1)=x(x+1)(x−1), nazivnik=x(x+1). Skrati x(x+1) → x−1, uvjet x≠0 i x≠−1.',
   proof:['Brojevnik: x³−x = x(x²−1) = x(x+1)(x−1)','Nazivnik: x²+x = x(x+1)','Skrati x(x+1) → x−1, uvjet x≠0 i x≠−1']}
];

var answered={},correct=0,total=12,quizRun=0,quizInited=false;
function shuffleArray(arr){var a=arr.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t;}return a;}

function renderQuiz(){
  quizRun++;answered={};correct=0;
  topicErrors={polinomi:0,horner:0,racionalni:0,iracionalni:0};
  streak=0;currentQ=1;
  document.getElementById('adaptive-banner').style.display='none';
  var shuffled=shuffleArray(ALL_QUESTIONS);
  var container=document.getElementById('quiz-container');if(!container)return;
  var html='';
  if(quizRun>1){html+='<div class="quiz-rerun"><button class="quiz-rerun-btn" onclick="rerunQuiz()">↺ Novi redosljed pitanja</button><span class="quiz-rerun-info">Svaki put drugačiji redosljed</span></div>';}
  shuffled.forEach(function(q,idx){
    var num=String(idx+1).padStart(2,'0');
    var opts=shuffleArray(q.opts);var letters=['A','B','C','D'];
    var optsHtml=opts.map(function(o,i){return '<div class="qo" onclick="qa(this,\\''+q.id+'\\','+o.ok+')"><span class="ql">'+letters[i]+'</span>'+o.t+'</div>';}).join('');
    html+='<div class="qb" id="qb-'+q.id+'"><div class="qb-h"><div class="qb-meta">'+num+' / 12 · '+q.meta+'</div><div class="qb-text">'+q.text+'</div></div><div class="qb-opts">'+optsHtml+'</div><div class="qe" id="'+q.id+'e"></div></div>';
  });
  container.innerHTML=html;
  var sb=document.getElementById('score');if(sb){sb.classList.remove('show');document.getElementById('snum').textContent='0/12';document.getElementById('slbl').textContent='';}
  updateTimerLabel();
}
function rerunQuiz(){if(examMode!=='normal')stopTimer();renderQuiz();if(examMode!=='normal'){timerSeconds=timerMax;drawTimerCanvas(timerSeconds,timerMax);startTimer();}document.getElementById('quiz-container').scrollIntoView({behavior:'smooth',block:'start'});}

function qa(el,qid,ok){
  if(answered[qid]!==undefined)return;
  answered[qid]=ok;if(ok)correct++;
  if(ok)soundCorrect(); else soundWrong();
  el.closest('.qb-opts').querySelectorAll('.qo').forEach(function(o){o.classList.add('dis')});
  el.classList.add(ok?'correct':'wrong');
  var qdata=ALL_QUESTIONS.filter(function(q){return q.id===qid;})[0];
  if(!qdata)return;
  var e=document.getElementById(qid+'e');
  if(e&&qdata){
    var proofHtml='';
    if(!ok&&qdata.proof){
      proofHtml='<div class="mini-proof"><div class="mini-proof-lbl">→ Mini dokaz</div>'+
        qdata.proof.map(function(s,i){return '<div class="step"><span class="sn">'+(i+1)+'</span><span class="st">'+s+'</span></div>';}).join('')+'</div>';
    }
    e.innerHTML='<div class="'+(ok?'qe-ok':'qe-no')+'">'+(ok?qdata.c:qdata.w)+'</div>'+proofHtml;
    e.classList.add('show');
  }
  checkAdaptive(qid,ok);
  if(examMode!=='normal')stopTimer();
  if(examMode!=='normal'&&Object.keys(answered).length<total)startTimer();
  if(Object.keys(answered).length===total){
    var s=document.getElementById('score');
    document.getElementById('snum').textContent=correct+'/'+total;
    document.getElementById('slbl').textContent=
      correct===total?'Savršen rezultat! P03 je svladan. 🎉':
      correct>=11?'Odlično! Provjeri propušteno pitanje.':
      correct>=9?'Solidno. Fokusiraj se na uvjete definiranosti i Hornera.':
      correct>=7?'Vrati se u Uči tab — Domain Builder i step-by-step primjeri.':
      'Polako kroz Uči tab — Analizator polinoma i Domain Builder su tvoji saveznici.';
    s.classList.add('show');soundComplete();stopTimer();
    tabProgress[2]=Math.round(72+correct/total*28);updateProgress();
  }
}

/* ── FITB ── */
var FExp={
  st1:'Stupanj = najveći eksponent s nenultim koef. 0·x⁷ se ne računa → stupanj je 5.',
  horn2:'P(2) = 4−10+6 = 0 → x=2 je nultočka, ostatak = 0.',
  uvj1:'1/√: argument mora biti STROGO > 0 jer je i u nazivniku. x−5 > 0 → x > 5.',
  dom2:'√(x+4): x+4 ≥ 0 → x ≥ −4 → uglatom (uključen rub): ⟨−4, +∞)'
};
function chkf(iid,fid,ans,key){
  var inp=document.getElementById(iid);var fb=document.getElementById(fid);var v=inp.value.trim();
  var btn=inp.parentElement.querySelector('.fitb-btn');if(!v)return;
  inp.disabled=true;btn.disabled=true;fb.classList.add('show');
  var norm=function(s){return s.replace(/\\s/g,'').toLowerCase();};
  var ok=norm(v)===norm(ans);
  inp.classList.add(ok?'ok':'fail');fb.classList.add(ok?'ok':'fail');
  fb.innerHTML=ok?'✓ Točno: <strong>'+ans+'</strong> — '+FExp[key]:'✗ Tvoj odg: <strong>'+v+'</strong> · Točno: <strong>'+ans+'</strong> — '+FExp[key];
}
/* ── RESTORE TAB ── */
(function(){try{var s=sessionStorage.getItem('p03_tab');if(s!==null){var i=parseInt(s);if(i>=0&&i<=2)sw(i);}}catch(e){}})();

/* ── RESTORE PROGRESS (localStorage) ── */
(function(){
  try{
    var saved=localStorage.getItem('maturiraj_p03_prog');
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
const meta = {id:'P03',pidLower:'p03',title:"Maturiraj.hr \u2014 Mat A \u00b7 P03 \u00b7 Polinomi, Racionalni i Iracionalni Izrazi",subject:'matematika-a',lsKey:'maturiraj_p03_prog'};

let _styleEl=null,_mounted=false;
function mount(container,options={}){
  if(_mounted)unmount(container);
  _styleEl=document.createElement('style');
  _styleEl.setAttribute('data-chapter','p03');
  _styleEl.textContent=css;
  document.head.appendChild(_styleEl);
  container.innerHTML=html;
  if(options.fromChapter){try{const u=new URL(window.location.href);u.searchParams.set('from',options.fromChapter);window.history.replaceState(null,'',u.toString());}catch(e){}}
  try{new Function(js)();}catch(e){console.error('[P03] Script error:',e);}
  _mounted=true;
}
function unmount(container){
  const ex=document.querySelector('style[data-chapter="p03"]');
  if(ex)ex.remove();
  _styleEl=null;
  if(container)container.innerHTML='';
  _mounted=false;
}
function getProgress(){try{return parseInt(localStorage.getItem('maturiraj_p03_prog')||'0');}catch(e){return 0;}}
function setProgress(pct){try{localStorage.setItem('maturiraj_p03_prog',String(pct));}catch(e){}}
// -- Complete page for MatChapterViewer (iframe srcDoc)
export const html = '<!DOCTYPE html><html lang="hr"><head>'
  + '<meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>P03 \u00b7 Algebarski Izrazi</title>'
  + '<style>' + css + '</style>'
  + '</head><body>'
  + _bodyHTML
  + '<script>' + js + '<\/script>'
  + '</body></html>';
export default{mount,unmount,getProgress,setProgress,meta,css,html};
export{mount,unmount,getProgress,setProgress,meta};