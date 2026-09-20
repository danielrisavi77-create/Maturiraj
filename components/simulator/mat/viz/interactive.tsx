// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Interaktivni vizualizatori (klizaci) + VizModal. */
import React from 'react';
const{createElement:e}=React;
function sliderRow(label,val,min,max,step,set){
  return e("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6}},
    e("span",{style:{fontSize:13,fontWeight:700,width:22,color:"var(--blue)"}},label),
    e("input",{type:"range",min:min,max:max,step:step,value:val,onChange:ev=>set(+ev.target.value),style:{flex:1,accentColor:"#4a90d9"}}),
    e("span",{style:{fontSize:12,width:38,textAlign:"right",color:"var(--muted)",fontVariantNumeric:"tabular-nums"}},(+val).toFixed(1)));
}
function QuadViz(){
  const[a,setA]=React.useState(1),[b,setB]=React.useState(0),[c,setC]=React.useState(-2);
  const W=300,H=240,ox=W/2,oy=H/2,sx=W/14,sy=H/18,X=x=>ox+x*sx,Y=y=>oy-y*sy;
  let d="";for(let px=-7;px<=7;px+=0.1){const py=a*px*px+b*px+c;if(py>=-9&&py<=9)d+=(d?"L":"M")+X(px).toFixed(1)+" "+Y(py).toFixed(1)+" ";}
  const disc=b*b-4*a*c,vx=a!==0?-b/(2*a):0,vy=a*vx*vx+b*vx+c;
  return e("div",null,
    e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},
      e("line",{x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("path",{d:d,fill:"none",stroke:"#4a90d9",strokeWidth:2.5}),
      a!==0&&vy>=-9&&vy<=9&&e("circle",{cx:X(vx),cy:Y(vy),r:4,fill:"#e05252"})),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"y = "+a.toFixed(1)+"x\u00b2 "+(b>=0?"+ ":"\u2212 ")+Math.abs(b).toFixed(1)+"x "+(c>=0?"+ ":"\u2212 ")+Math.abs(c).toFixed(1)),
    sliderRow("a",a,-3,3,0.1,setA),sliderRow("b",b,-6,6,0.5,setB),sliderRow("c",c,-6,6,0.5,setC),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.5}},"Diskriminanta D = "+disc.toFixed(1)+" \u2192 "+(disc>0.001?"2 realna rje\u0161enja":disc<-0.001?"nema realnih rje\u0161enja":"1 dvostruko rje\u0161enje")+(a!==0?" \u00b7 tjeme ("+vx.toFixed(1)+", "+vy.toFixed(1)+")":"")));
}
function LinViz(){
  const[k,setK]=React.useState(1),[l,setL]=React.useState(0);
  const W=300,H=240,ox=W/2,oy=H/2,sx=W/14,sy=H/14,X=x=>ox+x*sx,Y=y=>oy-y*sy;
  const y1=k*-7+l,y2=k*7+l;
  return e("div",null,
    e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},
      e("line",{x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:X(-7),y1:Y(y1),x2:X(7),y2:Y(y2),stroke:"#4a90d9",strokeWidth:2.5}),
      Math.abs(l)<=9&&e("circle",{cx:X(0),cy:Y(l),r:4,fill:"#e05252"})),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"y = "+k.toFixed(1)+"x "+(l>=0?"+ ":"\u2212 ")+Math.abs(l).toFixed(1)),
    sliderRow("k",k,-4,4,0.25,setK),sliderRow("l",l,-6,6,0.5,setL),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.5}},"k = nagib ("+(k>0.01?"raste":k<-0.01?"pada":"konstanta")+") \u00b7 l = sjeci\u0161te s osi y \u00b7 nulto\u010dka x = "+(Math.abs(k)>0.01?(-l/k).toFixed(2):"\u2014")));
}
function CircleViz(){
  const[deg,setDeg]=React.useState(30);
  const W=300,H=240,cx=W/2,cy=H/2,R=90,rad=deg*Math.PI/180,px=cx+R*Math.cos(rad),py=cy-R*Math.sin(rad);
  return e("div",null,
    e("svg",{viewBox:"0 0 "+W+" "+H,style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},
      e("line",{x1:0,y1:cy,x2:W,y2:cy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{x1:cx,y1:0,x2:cx,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("circle",{cx:cx,cy:cy,r:R,fill:"none",stroke:"var(--bdr2)",strokeWidth:1.5}),
      e("line",{x1:cx,y1:cy,x2:px,y2:cy,stroke:"#50c878",strokeWidth:2}),
      e("line",{x1:px,y1:cy,x2:px,y2:py,stroke:"#e05252",strokeWidth:2}),
      e("line",{x1:cx,y1:cy,x2:px,y2:py,stroke:"#4a90d9",strokeWidth:2.5}),
      e("circle",{cx:px,cy:py,r:4,fill:"#4a90d9"})),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"\u03b8 = "+deg+"\u00b0"),
    sliderRow("\u03b8",deg,0,360,1,setDeg),
    e("div",{style:{fontSize:12.5,marginTop:8,lineHeight:1.7,textAlign:"center"}},
      e("span",{style:{color:"#50c878",fontWeight:700}},"cos \u03b8 = "+Math.cos(rad).toFixed(3))," \u00b7 ",
      e("span",{style:{color:"#e05252",fontWeight:700}},"sin \u03b8 = "+Math.sin(rad).toFixed(3)),e("br"),
      e("span",{style:{color:"var(--muted)"}},"tan \u03b8 = "+(Math.abs(Math.cos(rad))<0.001?"nedefiniran":Math.tan(rad).toFixed(3)))));
}
function tgBtn(on){return {padding:"6px 13px",borderRadius:99,border:"1px solid "+(on?"var(--teal-b)":"var(--bdr2)"),background:on?"var(--teal-d)":"var(--s2)",color:on?"var(--teal)":"var(--muted)",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--fb)"};}
function vizSvg(children){return e("svg",{viewBox:"0 0 300 240",style:{width:"100%",background:"var(--s2)",borderRadius:10,border:"1px solid var(--bdr)"}},children);}
function ExpLogViz(){
  var s=React.useState(2),a=s[0],setA=s[1];
  var W=300,H=240,ox=W/2,oy=H/2,sx=W/12,sy=H/12,X=function(x){return ox+x*sx},Y=function(y){return oy-y*sy};
  var sa=Math.abs(a-1)<0.06?1.06:a,i;
  var de="";for(i=-6;i<=6;i+=0.1){var py=Math.pow(sa,i);if(py>=-6&&py<=6)de+=(de?"L":"M")+X(i).toFixed(1)+" "+Y(py).toFixed(1)+" ";}
  var dl="";for(i=0.05;i<=6;i+=0.05){var qy=Math.log(i)/Math.log(sa);if(qy>=-6&&qy<=6)dl+=(dl?"L":"M")+X(i).toFixed(1)+" "+Y(qy).toFixed(1)+" ";}
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:3,x1:X(-6),y1:Y(-6),x2:X(6),y2:Y(6),stroke:"var(--bdr2)",strokeWidth:1,strokeDasharray:"3 4"}),
      e("path",{key:4,d:de,fill:"none",stroke:"#4a90d9",strokeWidth:2.5}),
      e("path",{key:5,d:dl,fill:"none",stroke:"#50c878",strokeWidth:2.5}),
      e("circle",{key:6,cx:X(0),cy:Y(1),r:3.5,fill:"#e05252"}),
      e("circle",{key:7,cx:X(1),cy:Y(0),r:3.5,fill:"#e05252"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0"}},e("span",{style:{color:"#4a90d9"}},"y = "+a.toFixed(2)+"ˣ")," · ",e("span",{style:{color:"#50c878"}},"y = logₐ x")),
    sliderRow("a",a,0.2,3,0.05,setA),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Eksponencijalna uvijek prolazi (0, 1), logaritamska (1, 0). Međusobno su inverzne — simetrične oko pravca y = x. "+(a>1.01?"a > 1 → raste.":a<0.99?"0 < a < 1 → eksponencijalna pada.":"a ≈ 1.")));
}
function AnalGeoViz(){
  var sp=React.useState(1),p=sp[0],setP=sp[1],sq=React.useState(-1),q=sq[0],setQ=sq[1],sr=React.useState(3),r=sr[0],setR=sr[1];
  var W=300,H=240,ox=W/2,oy=H/2,s=15,X=function(x){return ox+x*s},Y=function(y){return oy-y*s},rr=Math.abs(r)<0.3?0.3:r;
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("circle",{key:3,cx:X(p),cy:Y(q),r:rr*s,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2.5}),
      e("line",{key:4,x1:X(p),y1:Y(q),x2:X(p+rr),y2:Y(q),stroke:"#e9b446",strokeWidth:2}),
      e("circle",{key:5,cx:X(p),cy:Y(q),r:3.5,fill:"#e05252"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"(x "+(p>=0?"− ":"+ ")+Math.abs(p).toFixed(1)+")² + (y "+(q>=0?"− ":"+ ")+Math.abs(q).toFixed(1)+")² = "+(rr*rr).toFixed(2)),
    sliderRow("p",p,-6,6,0.5,setP),sliderRow("q",q,-6,6,0.5,setQ),sliderRow("r",r,0.5,6,0.5,setR),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Središte (p, q) = ("+p.toFixed(1)+", "+q.toFixed(1)+") · polumjer r = "+rr.toFixed(1)+". U općoj jednadžbi x² + y² + Dx + Ey + F = 0 vrijedi p = −D/2, q = −E/2."));
}
function SeqViz(){
  var sg=React.useState(false),geom=sg[0],setGeom=sg[1],s1=React.useState(2),a1=s1[0],setA1=s1[1],sd=React.useState(1),d=sd[0],setD=sd[1];
  var W=300,H=240,oy=H-30,padL=20,n=8,bw=(W-padL-10)/n,terms=[],i;
  for(i=0;i<n;i++){terms.push(geom?a1*Math.pow(d,i):a1+i*d);}
  var mx=Math.max.apply(null,terms.map(Math.abs).concat([1])),sy=(H-60)/(mx*2),Y=function(v){return oy-v*sy;};
  var sum=terms.reduce(function(x,y){return x+y;},0);
  var bars=terms.map(function(v,i){var x0=padL+i*bw,y0=Y(v),yb=Y(0);return e("rect",{key:i,x:x0+2,y:Math.min(y0,yb),width:bw-4,height:Math.abs(y0-yb)||1,rx:2,fill:v>=0?"#4a90d9":"#e05252",opacity:.85});});
  return e("div",null,
    e("div",{style:{display:"flex",gap:6,marginBottom:8,justifyContent:"center"}},
      e("button",{onClick:function(){setGeom(false);},style:tgBtn(!geom)},"Aritmetički"),
      e("button",{onClick:function(){setGeom(true);},style:tgBtn(geom)},"Geometrijski")),
    vizSvg([e("line",{key:0,x1:0,y1:Y(0),x2:W,y2:Y(0),stroke:"var(--bdr2)",strokeWidth:1})].concat(bars)),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},geom?("aₙ = "+a1.toFixed(1)+" · "+d.toFixed(2)+"ⁿ⁻¹"):("aₙ = "+a1.toFixed(1)+(d>=0?" + ":" − ")+Math.abs(d).toFixed(1)+"(n−1)")),
    sliderRow("a1",a1,-5,5,0.5,setA1),sliderRow(geom?"q":"d",d,geom?-2:-4,geom?2:4,geom?0.05:0.5,setD),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},(geom?"Geometrijski: svaki član = prethodni · q. ":"Aritmetički: svaki član = prethodni + d. ")+"Zbroj prvih 8 ≈ "+sum.toFixed(2)+(geom&&Math.abs(d)<1?" · |q| < 1 → red konvergira (S = a₁/(1−q)).":"")));
}
function VecViz(){
  var a=React.useState(3),ax=a[0],setAx=a[1],b=React.useState(1),ay=b[0],setAy=b[1],c=React.useState(-1),bx=c[0],setBx=c[1],dd=React.useState(2),by=dd[0],setBy=dd[1];
  var W=300,H=240,ox=W/2,oy=H/2,s=18,X=function(x){return ox+x*s},Y=function(y){return oy-y*s},sxx=ax+bx,syy=ay+by;
  function arrow(x1,y1,x2,y2,col,k){var ang=Math.atan2(Y(y2)-Y(y1),X(x2)-X(x1)),hl=8;return [e("line",{key:k+"l",x1:X(x1),y1:Y(y1),x2:X(x2),y2:Y(y2),stroke:col,strokeWidth:2.5}),e("path",{key:k+"h",d:"M "+X(x2)+" "+Y(y2)+" L "+(X(x2)-hl*Math.cos(ang-0.4)).toFixed(1)+" "+(Y(y2)-hl*Math.sin(ang-0.4)).toFixed(1)+" L "+(X(x2)-hl*Math.cos(ang+0.4)).toFixed(1)+" "+(Y(y2)-hl*Math.sin(ang+0.4)).toFixed(1)+" Z",fill:col})];}
  var mag=Math.sqrt(sxx*sxx+syy*syy);
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:3,x1:X(ax),y1:Y(ay),x2:X(sxx),y2:Y(syy),stroke:"#4a90d9",strokeWidth:1,strokeDasharray:"3 3",opacity:.5}),
      e("line",{key:4,x1:X(bx),y1:Y(by),x2:X(sxx),y2:Y(syy),stroke:"#50c878",strokeWidth:1,strokeDasharray:"3 3",opacity:.5})].concat(arrow(0,0,ax,ay,"#4a90d9","a")).concat(arrow(0,0,bx,by,"#50c878","b")).concat(arrow(0,0,sxx,syy,"#e05252","s"))),
    e("div",{style:{fontSize:12.5,fontWeight:700,textAlign:"center",margin:"10px 0",lineHeight:1.6}},e("span",{style:{color:"#4a90d9"}},"a("+ax+", "+ay+")")," + ",e("span",{style:{color:"#50c878"}},"b("+bx+", "+by+")")," = ",e("span",{style:{color:"#e05252"}},"("+sxx+", "+syy+")")),
    sliderRow("ax",ax,-5,5,1,setAx),sliderRow("ay",ay,-5,5,1,setAy),sliderRow("bx",bx,-5,5,1,setBx),sliderRow("by",by,-5,5,1,setBy),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Zbroj vektora = zbroj komponenti; geometrijski je to nadovezivanje (pravilo paralelograma). |a + b| = "+mag.toFixed(2)+"."));
}
function ComplexViz(){
  var sr=React.useState(3),re=sr[0],setRe=sr[1],si=React.useState(2),im=si[0],setIm=si[1];
  var W=300,H=240,ox=W/2,oy=H/2,s=18,X=function(x){return ox+x*s},Y=function(y){return oy-y*s},mod=Math.sqrt(re*re+im*im),arg=Math.atan2(im,re)*180/Math.PI;
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:3,x1:ox,y1:oy,x2:X(re),y2:Y(im),stroke:"#4a90d9",strokeWidth:2.5}),
      e("line",{key:4,x1:X(re),y1:oy,x2:X(re),y2:Y(im),stroke:"#e05252",strokeWidth:1.5,strokeDasharray:"3 3"}),
      e("line",{key:5,x1:ox,y1:oy,x2:X(re),y2:oy,stroke:"#50c878",strokeWidth:1.5,strokeDasharray:"3 3"}),
      e("circle",{key:6,cx:X(re),cy:Y(im),r:4,fill:"#4a90d9"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"z = "+re+(im>=0?" + ":" − ")+Math.abs(im)+"i"),
    sliderRow("Re",re,-6,6,1,setRe),sliderRow("Im",im,-6,6,1,setIm),
    e("div",{style:{fontSize:12,marginTop:8,lineHeight:1.7,textAlign:"center"}},e("span",{style:{color:"#4a90d9",fontWeight:700}},"|z| = "+mod.toFixed(2))," · ",e("span",{style:{color:"var(--muted)"}},"arg z ≈ "+arg.toFixed(0)+"°"),e("br"),e("span",{style:{color:"var(--muted)",fontSize:11.5}},"Modul = udaljenost od ishodišta, argument = kut prema pozitivnoj realnoj osi.")));
}
function DerivViz(){
  var s=React.useState(1.5),x0=s[0],setX0=s[1];
  var W=300,H=240,ox=W/2,oy=H/2,sx=W/10,sy=H/16,X=function(x){return ox+x*sx},Y=function(y){return oy-y*sy},i;
  function f(x){return 0.3*x*x*x-x;}function fp(x){return 0.9*x*x-1;}
  var d="";for(i=-5;i<=5;i+=0.1){var py=f(i);if(py>=-7.5&&py<=7.5)d+=(d?"L":"M")+X(i).toFixed(1)+" "+Y(py).toFixed(1)+" ";}
  var m=fp(x0),y0=f(x0),tx1=x0-3,tx2=x0+3;
  return e("div",null,
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),
      e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),
      e("path",{key:3,d:d,fill:"none",stroke:"#4a90d9",strokeWidth:2.5}),
      e("line",{key:4,x1:X(tx1),y1:Y(y0+m*(tx1-x0)),x2:X(tx2),y2:Y(y0+m*(tx2-x0)),stroke:"#e9b446",strokeWidth:2}),
      e("circle",{key:5,cx:X(x0),cy:Y(y0),r:4,fill:"#e05252"})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"f(x) = 0,3x³ − x · tangenta u x₀ = "+x0.toFixed(1)),
    sliderRow("x₀",x0,-4,4,0.1,setX0),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Nagib tangente = f′(x₀) = "+m.toFixed(2)+". Ondje funkcija "+(m>0.05?"raste":m<-0.05?"pada":"ima stacionarnu točku (f′ = 0)")+". Derivacija = trenutni nagib krivulje."));
}
function FnFamViz(){
  var si=React.useState(0),idx=si[0],setIdx=si[1],sa=React.useState(1),a=sa[0],setA=sa[1],sc=React.useState(0),c=sc[0],setC=sc[1],sd=React.useState(0),d=sd[0],setD=sd[1];
  var fams=[{n:"x²",f:function(x){return x*x;}},{n:"x³",f:function(x){return x*x*x;}},{n:"|x|",f:function(x){return Math.abs(x);}},{n:"√x",f:function(x){return x>=0?Math.sqrt(x):NaN;}},{n:"1/x",f:function(x){return x!==0?1/x:NaN;}},{n:"sin x",f:function(x){return Math.sin(x);}}];
  var fam=fams[idx],W=300,H=240,ox=W/2,oy=H/2,sx=W/12,sy=H/12,X=function(x){return ox+x*sx},Y=function(y){return oy-y*sy},i,dd="",prev=false;
  for(i=-6;i<=6;i+=0.08){var yv=a*fam.f(i-c)+d;if(isFinite(yv)&&yv>=-6&&yv<=6){dd+=(prev?"L":"M")+X(i).toFixed(1)+" "+Y(yv).toFixed(1)+" ";prev=true;}else{prev=false;}}
  var btns=fams.map(function(fm,k){return e("button",{key:k,onClick:function(){setIdx(k);},style:tgBtn(k===idx)},fm.n);});
  return e("div",null,
    e("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:8,justifyContent:"center"}},btns),
    vizSvg([e("line",{key:1,x1:0,y1:oy,x2:W,y2:oy,stroke:"var(--bdr2)",strokeWidth:1}),e("line",{key:2,x1:ox,y1:0,x2:ox,y2:H,stroke:"var(--bdr2)",strokeWidth:1}),e("path",{key:3,d:dd,fill:"none",stroke:"#4a90d9",strokeWidth:2.5})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"y = "+a.toFixed(1)+" · f(x "+(c>=0?"− ":"+ ")+Math.abs(c).toFixed(1)+")"+(d>=0?" + ":" − ")+Math.abs(d).toFixed(1)+"   (f = "+fam.n+")"),
    sliderRow("a",a,-3,3,0.25,setA),sliderRow("c",c,-4,4,0.5,setC),sliderRow("d",d,-4,4,0.5,setD),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"a rasteže/zrcali okomito, c pomiče vodoravno (udesno za c > 0), d pomiče okomito. To su osnovne transformacije grafa funkcije."));
}
function StatViz(){
  var s=React.useState(8),out=s[0],setOut=s[1];
  var data=[3,4,4,5,6].concat([out]),sorted=data.slice().sort(function(x,y){return x-y;});
  var mean=data.reduce(function(x,y){return x+y;},0)/data.length,n=sorted.length,med=n%2?sorted[(n-1)/2]:(sorted[n/2-1]+sorted[n/2])/2;
  var W=300,H=240,padL=15,padR=15,axisY=H-50,maxV=20,X=function(v){return padL+(v/maxV)*(W-padL-padR);};
  var dots=data.map(function(v,i){return e("circle",{key:i,cx:X(v),cy:axisY-2-((i%3)*9),r:5,fill:i===data.length-1?"#e9b446":"#4a90d9",opacity:.9});});
  return e("div",null,
    vizSvg([e("line",{key:0,x1:padL,y1:axisY,x2:W-padR,y2:axisY,stroke:"var(--bdr2)",strokeWidth:1.5})].concat(dots).concat([e("line",{key:"mean",x1:X(mean),y1:20,x2:X(mean),y2:axisY,stroke:"#e05252",strokeWidth:2}),e("text",{key:"mt",x:X(mean),y:15,fill:"#e05252",fontSize:11,textAnchor:"middle"},"sredina"),e("line",{key:"med",x1:X(med),y1:axisY,x2:X(med),y2:axisY+22,stroke:"#50c878",strokeWidth:2}),e("text",{key:"mdt",x:X(med),y:axisY+34,fill:"#50c878",fontSize:11,textAnchor:"middle"},"medijan")])),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0"}},e("span",{style:{color:"#e05252"}},"sredina = "+mean.toFixed(2))," · ",e("span",{style:{color:"#50c878"}},"medijan = "+med.toFixed(1))),
    sliderRow("zadnja",out,2,20,1,setOut),
    e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Podatci: 3, 4, 4, 5, 6 i zadnja (žuta). Pomakni zadnju u stršeću vrijednost — aritmetička sredina se snažno mijenja, a medijan ostaje gotovo isti. Zato je medijan otporan na netipične podatke."));
}
function FinViz(){
  var sp=React.useState(1000),P=sp[0],setP=sp[1],sr=React.useState(5),rate=sr[0],setR=sr[1],syy=React.useState(10),yrs=syy[0],setY=syy[1];
  var W=300,H=240,padL=18,padB=28,X=function(t){return padL+(t/yrs)*(W-padL-12);},fin=P*Math.pow(1+rate/100,yrs),simple=P*(1+rate*yrs/100),maxV=Math.max(fin,simple,P*1.05);
  var Y=function(v){return (H-padB)-(v/maxV)*(H-padB-15);},dc="",t;
  for(t=0;t<=yrs;t+=Math.max(0.25,yrs/60)){var cv=P*Math.pow(1+rate/100,t);dc+=(dc?"L":"M")+X(t).toFixed(1)+" "+Y(cv).toFixed(1)+" ";}
  var ds="M "+X(0)+" "+Y(P)+" L "+X(yrs)+" "+Y(simple);
  return e("div",null,
    vizSvg([e("line",{key:1,x1:padL,y1:H-padB,x2:W-5,y2:H-padB,stroke:"var(--bdr2)",strokeWidth:1}),e("line",{key:2,x1:padL,y1:10,x2:padL,y2:H-padB,stroke:"var(--bdr2)",strokeWidth:1}),e("path",{key:3,d:ds,fill:"none",stroke:"#50c878",strokeWidth:1.8,strokeDasharray:"4 3"}),e("path",{key:4,d:dc,fill:"none",stroke:"#4a90d9",strokeWidth:2.5})]),
    e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"C = "+P+" · (1 + "+(rate/100).toFixed(2)+")^"+yrs+" ≈ "+fin.toFixed(0)),
    sliderRow("glavnica",P,100,10000,100,setP),sliderRow("kamata %",rate,0,15,0.5,setR),sliderRow("godine",yrs,1,30,1,setY),
    e("div",{style:{fontSize:12,marginTop:8,lineHeight:1.7,textAlign:"center"}},e("span",{style:{color:"#4a90d9",fontWeight:700}},"složeno ≈ "+fin.toFixed(0))," · ",e("span",{style:{color:"#50c878"}},"jednostavno ≈ "+simple.toFixed(0)),e("br"),e("span",{style:{color:"var(--muted)",fontSize:11.5}},"Složeno ukamaćivanje (kamata na kamatu) raste eksponencijalno i nadmašuje jednostavno.")));
}
function GeoViz(){
  var s0=React.useState(0),tool=s0[0],setTool=s0[1];
  var sA=React.useState(50),A=sA[0],setA=sA[1];
  var sB=React.useState(60),B=sB[0],setB=sB[1];
  var sN=React.useState(6),N=sN[0],setN=sN[1];
  var sC=React.useState(100),arc=sC[0],setArc=sC[1];
  var sS=React.useState(0),solid=sS[0],setSolid=sS[1];
  var sR=React.useState(3),R=sR[0],setR=sR[1];
  var sH=React.useState(5),Hh=sH[0],setH=sH[1];
  var W=300,H=240;
  function triBlock(){
    var C=180-A-B;
    if(C<=2)return e("div",{style:{padding:24,color:"var(--muted)",fontSize:13,textAlign:"center"}},"Zbroj kutova mora biti manji od 180°. Smanji A ili B.");
    var a=A*Math.PI/180,b=B*Math.PI/180,ta=Math.tan(a),tb=Math.tan(b),L=1;
    var cx=L*tb/(ta+tb),cy=ta*cx;
    var minX=Math.min(0,cx),maxX=Math.max(L,cx),maxY=Math.max(cy,0.001),pad=34;
    var sc=Math.min((W-2*pad)/((maxX-minX)||1),(H-2*pad)/maxY),offx=(W-(maxX-minX)*sc)/2-minX*sc,offy=H-pad;
    function PX(x){return offx+x*sc;}function PY(y){return offy-y*sc;}
    var big=Math.max(A,B,C),typ=big>90.5?"tupokutan":(big<89.5?"šiljastokutan":"pravokutan");
    return e("div",null,
      vizSvg([e("polygon",{key:1,points:PX(0).toFixed(1)+","+PY(0).toFixed(1)+" "+PX(L).toFixed(1)+","+PY(0).toFixed(1)+" "+PX(cx).toFixed(1)+","+PY(cy).toFixed(1),fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2.5}),
        e("text",{key:2,x:PX(0)-6,y:PY(0)+15,fill:"var(--text)",fontSize:11.5},"A "+A+"°"),
        e("text",{key:3,x:PX(L)-6,y:PY(0)+15,fill:"var(--text)",fontSize:11.5},"B "+B+"°"),
        e("text",{key:4,x:PX(cx)-8,y:PY(cy)-6,fill:"var(--text)",fontSize:11.5},"C "+C+"°")]),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},A+"° + "+B+"° + "+C+"° = 180° · "+typ),
      sliderRow("A",A,20,120,1,setA),sliderRow("B",B,20,120,1,setB),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"U svakom trokutu zbroj kutova je 180°. Najveći kut određuje vrstu: < 90° šiljastokutan, = 90° pravokutan, > 90° tupokutan."));
  }
  function circBlock(){
    var cx=W/2,cy=H/2+8,Rr=80,half=arc/2*Math.PI/180;
    var p1x=cx+Rr*Math.cos(Math.PI/2+half),p1y=cy-Rr*Math.sin(Math.PI/2+half),p2x=cx+Rr*Math.cos(Math.PI/2-half),p2y=cy-Rr*Math.sin(Math.PI/2-half),qx=cx,qy=cy+Rr;
    return e("div",null,
      vizSvg([e("circle",{key:1,cx:cx,cy:cy,r:Rr,fill:"none",stroke:"var(--bdr2)",strokeWidth:1.5}),
        e("line",{key:2,x1:cx,y1:cy,x2:p1x,y2:p1y,stroke:"#e05252",strokeWidth:2}),
        e("line",{key:3,x1:cx,y1:cy,x2:p2x,y2:p2y,stroke:"#e05252",strokeWidth:2}),
        e("line",{key:4,x1:qx,y1:qy,x2:p1x,y2:p1y,stroke:"#4a90d9",strokeWidth:2}),
        e("line",{key:5,x1:qx,y1:qy,x2:p2x,y2:p2y,stroke:"#4a90d9",strokeWidth:2}),
        e("circle",{key:6,cx:cx,cy:cy,r:3,fill:"#e05252"}),
        e("circle",{key:7,cx:qx,cy:qy,r:3.5,fill:"#4a90d9"})]),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0"}},e("span",{style:{color:"#e05252"}},"središnji = "+arc+"°")," · ",e("span",{style:{color:"#4a90d9"}},"obodni = "+(arc/2).toFixed(0)+"°")),
      sliderRow("luk",arc,20,180,2,setArc),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Obodni kut (plavi) nad istim je lukom uvijek POLOVICA središnjeg kuta (crveni) — ključno svojstvo kružnice."));
  }
  function polyBlock(){
    var cx=W/2,cy=H/2,Rr=80,pts=[],i;
    for(i=0;i<N;i++){var ang=-Math.PI/2+i*2*Math.PI/N;pts.push((cx+Rr*Math.cos(ang)).toFixed(1)+","+(cy+Rr*Math.sin(ang)).toFixed(1));}
    var interior=(N-2)*180/N,sum=(N-2)*180,ext=360/N;
    return e("div",null,
      vizSvg([e("polygon",{key:1,points:pts.join(" "),fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2.5})]),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},"Pravilni "+N+"-kut · unutarnji kut = "+interior.toFixed(1)+"°"),
      sliderRow("n",N,3,12,1,setN),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Zbroj unutarnjih kutova = (n − 2)·180° = "+sum+"°. Svaki = "+sum+"°/"+N+" = "+interior.toFixed(1)+"°. Vanjski kut = 360°/n = "+ext.toFixed(1)+"°."));
  }
  function solidBlock(){
    var cx=W/2,names=["valjak","stožac","kugla"],rpx=R*9,hpx=Hh*9,shapes;
    if(solid===0){var topY=H/2-hpx/2,botY=H/2+hpx/2;shapes=[e("ellipse",{key:1,cx:cx,cy:botY,rx:rpx,ry:rpx*0.3,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2}),e("line",{key:2,x1:cx-rpx,y1:topY,x2:cx-rpx,y2:botY,stroke:"#4a90d9",strokeWidth:2}),e("line",{key:3,x1:cx+rpx,y1:topY,x2:cx+rpx,y2:botY,stroke:"#4a90d9",strokeWidth:2}),e("ellipse",{key:4,cx:cx,cy:topY,rx:rpx,ry:rpx*0.3,fill:"rgba(74,144,217,.18)",stroke:"#4a90d9",strokeWidth:2})];}
    else if(solid===1){var apex=H/2-hpx/2,base=H/2+hpx/2;shapes=[e("ellipse",{key:1,cx:cx,cy:base,rx:rpx,ry:rpx*0.3,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2}),e("line",{key:2,x1:cx-rpx,y1:base,x2:cx,y2:apex,stroke:"#4a90d9",strokeWidth:2}),e("line",{key:3,x1:cx+rpx,y1:base,x2:cx,y2:apex,stroke:"#4a90d9",strokeWidth:2})];}
    else{shapes=[e("circle",{key:1,cx:cx,cy:H/2,r:rpx,fill:"rgba(74,144,217,.12)",stroke:"#4a90d9",strokeWidth:2}),e("ellipse",{key:2,cx:cx,cy:H/2,rx:rpx,ry:rpx*0.3,fill:"none",stroke:"#4a90d9",strokeWidth:1,strokeDasharray:"3 3"})];}
    var V=solid===0?(R*R*Math.PI*Hh):(solid===1?(R*R*Math.PI*Hh/3):(4/3*Math.PI*R*R*R));
    var formula=solid===0?"V = r²·π·h":(solid===1?"V = r²·π·h / 3":"V = (4/3)·π·r³");
    return e("div",null,
      e("div",{style:{display:"flex",gap:6,marginBottom:8,justifyContent:"center"}},names.map(function(nm,k){return e("button",{key:k,onClick:function(){setSolid(k);},style:tgBtn(k===solid)},nm);})),
      vizSvg(shapes),
      e("div",{style:{fontSize:13,fontWeight:700,textAlign:"center",margin:"10px 0",color:"var(--text)"}},formula+" ≈ "+V.toFixed(1)),
      sliderRow("r",R,1,8,0.5,setR),solid!==2&&sliderRow("h",Hh,1,10,0.5,setH),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginTop:8,lineHeight:1.55}},"Volumen valjka r²πh; stošca trećina toga; kugle (4/3)πr³. Oplošje i volumen rastu s polumjerom — kugla s r³."));
  }
  return e("div",null,
    e("div",{style:{display:"flex",gap:5,flexWrap:"wrap",marginBottom:10,justifyContent:"center"}},["Trokut","Kružni kutovi","Mnogokut","Tijela"].map(function(t,k){return e("button",{key:k,onClick:function(){setTool(k);},style:tgBtn(k===tool)},t);})),
    tool===0?triBlock():(tool===1?circBlock():(tool===2?polyBlock():solidBlock())));
}
function VizModal({kind,onClose}){
  return e("div",{onClick:onClose,style:{position:"fixed",inset:0,zIndex:280,background:"rgba(10,15,28,.7)",display:"flex",alignItems:"center",justifyContent:"center",padding:16}},
    e("div",{onClick:ev=>ev.stopPropagation(),style:{background:"var(--s1)",border:"1px solid var(--bdr)",borderRadius:"var(--rr)",padding:"18px 18px 20px",maxWidth:440,width:"100%",maxHeight:"92vh",overflowY:"auto"}},
      e("div",{style:{display:"flex",alignItems:"center",marginBottom:12}},
        e("span",{style:{fontFamily:"var(--fh)",fontSize:18,marginRight:"auto"}},({quad:"Kvadratna funkcija",lin:"Linearna funkcija",circle:"Trigonometrijska kružnica",explog:"Eksponencijalna i logaritamska",analgeo:"Kružnica u koordinatnom sustavu",seq:"Aritmetički i geometrijski niz",vec:"Zbrajanje vektora",complex:"Kompleksna ravnina",deriv:"Tangenta i derivacija",fnfam:"Transformacije funkcija",stat:"Aritmetička sredina i medijan",fin:"Složeni kamatni račun",geo:"Geometrijski alat"}[kind]||"Interaktivni prikaz")),
        e("button",{onClick:onClose,style:{border:"none",background:"var(--s2)",borderRadius:8,width:30,height:30,cursor:"pointer",fontSize:14,color:"var(--muted)"}},"\u2715")),
      e("div",{style:{fontSize:12,color:"var(--muted)",marginBottom:12,lineHeight:1.5}},"Povla\u010di kliza\u010de i gledaj kako se mijenja graf \u2014 tako stvarno razumije\u0161."),
      kind==="quad"&&e(QuadViz,null),kind==="lin"&&e(LinViz,null),kind==="circle"&&e(CircleViz,null),kind==="explog"&&e(ExpLogViz,null),kind==="analgeo"&&e(AnalGeoViz,null),kind==="seq"&&e(SeqViz,null),kind==="vec"&&e(VecViz,null),kind==="complex"&&e(ComplexViz,null),kind==="deriv"&&e(DerivViz,null),kind==="fnfam"&&e(FnFamViz,null),kind==="stat"&&e(StatViz,null),kind==="fin"&&e(FinViz,null),kind==="geo"&&e(GeoViz,null)));
}
export { sliderRow, tgBtn, vizSvg, QuadViz, LinViz, CircleViz, ExpLogViz, AnalGeoViz, SeqViz, VecViz, ComplexViz, DerivViz, FnFamViz, StatViz, FinViz, GeoViz, VizModal };
/* 5.3 (tools): izbor vizualizacije za zadatak - dijele ga Sim i mat/tools (CalcQuestion). */
export const VIZ_TOPIC={kv:"quad",lin:"lin",trig:"circle",trg:"circle",exp:"explog",log:"explog",anal:"analgeo",kon:"analgeo",seq:"seq",niz:"seq",vek:"vec",komp:"complex",kompl:"complex",der:"deriv",dif:"deriv",fun:"fnfam",func:"fnfam",fn:"fnfam",stat:"stat",fin:"fin",geom:"geo",geo:"geo",ge:"geo",mj:"geo"};
export var VIZ_KW={
  quad:/graf|nacrtaj|skiciraj|tjeme|nultočk|sjecišt|parabol|najveć|najmanj|maksimum|minimum|ekstrem|simetri|otvor|presjek|funkcij|kvadratn/,
  lin:/graf|nacrtaj|skiciraj|pravac|nagib|koeficijent smjera|sjecišt|odsje|raste|pada|nultočk|presjek|paralel|okomit|funkcij|linearn/,
  circle:/kružnic|jedinič|brojevn|sinusoid|kosinusoid|amplitud|period|faz|radijan|stup|kut|\bsin|\bcos|\btg\b|\bctg\b|tangens|kotangens|trigonometr|graf/,
  explog:/graf|nacrtaj|skiciraj|eksponencij|logaritam|logaritm|logaritamsk|asimptot|rast|pad|baz|funkcij/,
  analgeo:/pravac|kružnic|koordinat|jednadžb|sjecišt|presjek|udaljen|elips|hiperbol|parabol|žarišt|simetral|polumje|središt/,
  seq:/niz|član|aritmetič|geometrij|razlik|kvocijent|parcijaln|sum|rekurz/,
  vec:/vektor|kolinear|skalarn|intenzitet|komponent/,
  complex:/kompleksn|gaussov|imaginarn|realn|modul|argument|konjugir/,
  deriv:/derivacij|tangent|nagib|ekstrem|rast|pad|monoton|konkavn|prevoj|stacionarn|brzin|funkcij/,
  fnfam:/graf|funkcij|domen|kodomen|parn|neparn|inverz|monoton|asimptot|rast|pad|injektiv|surjekt|bijektiv|nultočk/,
  stat:/tablic|postotak|frekvencij|srednj|aritmetič|medijan|dijagram|histogram|graf|prikaz|raspodjel|devijacij/,
  fin:/kamat|glavnic|uloži|štedn|kredit|postotak|godišnj/,
  geo:/nacrtaj|skiciraj|trokut|kvadrat|pravokutnik|krug|kružnic|kut|površin|opseg|volumen|geometr|sličn|sukladn|tlocrt|presjek|dijagonal|polumje|kvadar|kocka|piramid|valjak|stož|kugl|prizm|šesterokut|peterokut|mnogokut|romb|trapez|tetiv|šiljast|sukut|pravokut/
};
export function resolveViz(q){
  if(!q||q.viz===false) return null;
  if(typeof q.viz==="string") return q.viz;
  var k=VIZ_TOPIC[q.topic]; if(!k) return null;
  if(q.viz===true) return k;
  var t=((q.q||"")+" "+(q.context||"")+" "+(q.text||"")).toLowerCase();
  var rx=VIZ_KW[k]; return (rx&&rx.test(t))?k:null;
}
