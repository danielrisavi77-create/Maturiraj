// parseMath obitelj (razlomci, eksponenti, korijeni, indeksi, vektori) — izdvojena iz
// components/simulator/mat/core/mathText.tsx bez promjene ponasanja.
//
// Zasto .mjs bez ijedne ovisnosti osim Reacta: parseMath treba i content/simulator/mat/
// mat-shared-svg.mjs (KoordOs ga zove za label). Te .mjs datoteke se ucitavaju i obicnim
// Node importom (scripts/mat-render-figures.mjs, colocate-svg.mjs), gdje se .tsx ne moze
// ucitati ni alias "@" razrijesiti — pa dijeljeni kod mora biti obican ESM modul.
// mathText.tsx ga uvozi natrag i dalje izvozi pod istim imenima (javni API nepromijenjen).
import React from 'react';
const{createElement:e}=React;
function mfracEl(num,den,key,small){
  const sz=small?{fontSize:"0.72em"}:{};
  return e("span",{key:"frac"+key,className:"mfrac",style:{verticalAlign:"middle",...sz}},
    e("span",{className:"mfrac-num"},num),
    e("span",{className:"mfrac-bar"}),
    e("span",{className:"mfrac-den"},den)
  );
}
function mexpFracEl(base,num,den,key){
  return e("span",{key:"ef"+key,style:{display:"inline-flex",alignItems:"baseline",gap:0}},
    e("span",null,base),
    e("sup",{style:{display:"inline-flex",alignItems:"center",lineHeight:1}},
      mfracEl(num,den,"s"+key,true)
    )
  );
}
function msupEl(base,supContent,key){
  return e("span",{key:"es"+key,style:{display:"inline-flex",alignItems:"baseline",gap:0}},
    e("span",null,base),
    e("sup",{style:{display:"inline-flex",alignItems:"center",lineHeight:1,fontSize:"0.78em",marginLeft:"0.5px"}},
      supContent
    )
  );
}
function msubEl(base,subContent,key){
  return e("span",{key:"sub"+key,style:{display:"inline-flex",alignItems:"baseline",gap:0}},
    e("span",null,base),
    e("sub",{style:{display:"inline-flex",alignItems:"center",lineHeight:1,fontSize:"0.72em",marginLeft:"0.5px"}},
      subContent
    )
  );
}
function wrapMath(parts){
  if(!parts||parts.length===0) return null;
  return parts.length===1&&parts[0].type==="span"&&!parts[0].props?.className
    ? parts[0]
    : e("span",{style:{display:"inline-flex",alignItems:"center",flexWrap:"wrap",gap:0,lineHeight:2.2}},parts);
}
function parseMath(text,_depth){
  if(text==null) return null;
  if(typeof text==="object") text=text.txt||String(text);
  if(typeof text!=="string") text=String(text);
  if(!text||!text.trim()) return null;
  _depth=_depth||0;
  const UNIT=/^\/(?:km?|cm|mm|dm|s|h|g|mg|kg|l|dl|cl|ml|N|J|W|Hz|A|V|min|sec|dan|sat|god|kn|eur|ha|rad|m)\b/i;
  const SIMPLE_EXP=/^\^\(([^+\-\s*\u2212\u00b1]+)\/([^+\-\s*\u2212)]+)\)/;
  const COMPLEX_EXP=/^\^\(([^)]+)\)/;
  const tokens=[];
  let i=0,txt="";
  while(i<text.length){
    // 0b. VEC token: slovo(a) + ⃗ (U+20D7) → vizualni vektor
    if(i<text.length-1){
      const vecM=text.slice(i).match(/^([A-Za-z]{1,3})⃗/);
      if(vecM){
        if(txt){tokens.push({t:txt});txt='';}
        tokens.push({vec:vecM[1]});
        i+=vecM[0].length; continue;
      }
    }
    // 0. log_(EXPR) — logaritam s bazom u subscriptu
    if(text.slice(i,i+5)==="log_("){
      let li=i+5,d2=1,logBase="";
      while(li<text.length&&d2>0){
        if(text[li]==="(") d2++;
        else if(text[li]===")") d2--;
        if(d2>0) logBase+=text[li];
        li++;
      }
      if(txt){tokens.push({t:txt});txt="";}
      tokens.push({ls:{base:logBase}});
      i=li; continue;
    }
    // 1. Eksponent ^(...)
    if(text[i]==='^'&&text[i+1]==='('){
      const rest=text.slice(i);
      const simple=SIMPLE_EXP.exec(rest);
      if(simple&&txt.length>0){
        const baseM=txt.match(/(\([^)]+\)|[\w\u00b2\u00b3\u2070-\u2079\u221a\u221b]+|[-+]?\d+(?:[,.\d]*)*)$/);
        if(baseM){
          const base=baseM[0];
          txt=txt.slice(0,txt.length-base.length);
          if(txt){tokens.push({t:txt});txt="";}
          tokens.push({ef:{base,num:simple[1].trim(),den:simple[2].trim()}});
          i+=simple[0].length; continue;
        }
      }
      // Match ^(...) with proper paren counting (handles nested parens like ^(0,01587 · (t-1950)))
      let complex = null;
      if(text[i]==='^' && text[i+1]==='('){
        let depth2 = 1, k = i + 2, expContent = '';
        while(k < text.length && depth2 > 0){
          if(text[k]==='(') depth2++;
          else if(text[k]===')') depth2--;
          if(depth2 > 0) expContent += text[k];
          k++;
        }
        if(depth2 === 0){
          complex = [text.slice(i, k), expContent];  // mimic regex match: [full, group1]
          complex.length = 2;
          complex[0] = text.slice(i, k);
        }
      }
      if(complex){
        // Try base from txt first
        if(txt.length>0){
          const baseM=txt.match(/(\([^)]+\)|[\w\u00b2\u00b3\u2070-\u2079\u221a\u221b]+|[-+]?\d+(?:[,.\d]*)*)$/);
          if(baseM){
            const base=baseM[0];
            txt=txt.slice(0,txt.length-base.length);
            if(txt){tokens.push({t:txt});txt="";}
            const inner=_depth<2?parseMath(complex[1],_depth+1):null;
            tokens.push({es:{base,inner:inner||[{t:complex[1]}]}});
            i+=complex[0].length; continue;
          }
        }
        // Fallback: previous token is a fraction (handles "(1/2)^(...)" pattern)
        if(tokens.length>0 && tokens[tokens.length-1].f){
          const fracTok = tokens[tokens.length-1];
          const inner = _depth<2 ? parseMath(complex[1],_depth+1) : null;
          // Replace last token with es_post_frac in-place
          tokens[tokens.length-1] = {es_post_frac:{frac:fracTok.f, inner:inner||[{t:complex[1]}]}};
          i+=complex[0].length; continue;
        }
      }
    }
    // 2. Razlomak a/b
    const fracM=text.slice(i).match(/^(-?\([^)]+\)|(?:-\s*)?\d+[a-zA-Z0-9\u00b2\u00b3\u2070-\u2079\u03b1-\u03c9\u0391-\u03a9\u221a]*|[a-zA-Z\u03b1-\u03c9\u0391-\u03a9][a-zA-Z0-9\u00b2\u00b3\u2070-\u2079\u03b1-\u03c9\u0391-\u03a9\u221a]*)\/(\([^)]+\)|\d+[a-zA-Z0-9\u00b2\u00b3\u2070-\u2079\u03b1-\u03c9\u0391-\u03a9\u221a]*|[a-zA-Z\u03b1-\u03c9\u0391-\u03a9][a-zA-Z0-9\u00b2\u00b3\u2070-\u2079\u03b1-\u03c9\u0391-\u03a9\u221a]*)/);
    if(fracM&&!UNIT.test("/"+fracM[2])&&fracM[1]!=="0"&&fracM[2]!=="0"){
      if(txt){tokens.push({t:txt});txt="";}
      tokens.push({f:{num:fracM[1],den:fracM[2]}});
      i+=fracM[0].length; continue;
    }
    txt+=text[i]; i++;
  }
  if(txt) tokens.push({t:txt});
  return tokens.map((tok,ti)=>{
    if(tok.t!==undefined) return e("span",{key:"t"+ti},tok.t);
    if(tok.f) return mfracEl(tok.f.num,tok.f.den,ti,false);
    if(tok.ef) return mexpFracEl(tok.ef.base,tok.ef.num,tok.ef.den,ti);
    if(tok.es){
      // tok.es.inner can be EITHER:
      // (a) Array of React elements (from recursive parseMath) — pass through
      // (b) Array of raw tokens [{t:"..."}] (fallback when parseMath returned null)
      let innerEl;
      if(Array.isArray(tok.es.inner) && tok.es.inner.length > 0 &&
         tok.es.inner[0] && tok.es.inner[0].$$typeof){
        // Already React elements — use directly
        innerEl = tok.es.inner;
      } else {
        innerEl = tok.es.inner.map((t2,j)=>{
          if(t2.t) return e("span",{key:"si"+j},t2.t);
          if(t2.f) return mfracEl(t2.f.num,t2.f.den,"si"+j,true);
          return null;
        }).filter(Boolean);
      }
      return msupEl(tok.es.base,innerEl,ti);
    }
    if(tok.es_post_frac){
      // Fraction as exponent base: render frac with implicit parens via msupEl-like layout
      const fracEl = mfracEl(tok.es_post_frac.frac.num, tok.es_post_frac.frac.den, "epfb"+ti, false);
      let innerEl;
      const inner = tok.es_post_frac.inner;
      if(Array.isArray(inner) && inner.length > 0 && inner[0] && inner[0].$$typeof){
        innerEl = inner;
      } else {
        innerEl = inner.map((t2,j)=>{
          if(t2.t) return e("span",{key:"si"+j},t2.t);
          if(t2.f) return mfracEl(t2.f.num,t2.f.den,"si"+j,true);
          return null;
        }).filter(Boolean);
      }
      return e("span",{key:"epf"+ti,style:{display:"inline-flex",alignItems:"baseline",gap:0}},
        fracEl,
        e("sup",{style:{display:"inline-flex",alignItems:"center",lineHeight:1,fontSize:"0.78em",marginLeft:"1px"}},
          ...innerEl
        )
      );
    }
    if(tok.vec){
      const v=tok.vec;
      return e("span",{key:"vec"+ti,style:{
        position:"relative",display:"inline-block",
        paddingTop:"0.45em",lineHeight:1
      }},
        e("span",{style:{
          position:"absolute",top:0,left:0,right:0,
          textAlign:"center",fontSize:"0.6em",
          lineHeight:1,color:"inherit",pointerEvents:"none",
          fontStyle:"normal",fontWeight:"normal"
        }},"→"),
        v
      );
    }
    if(tok.ls){
      // log s bazom u subscriptu — rekurzivno parsira bazu
      const baseTokens=_depth<2?parseMath(tok.ls.base,_depth+1):null;
      const baseEl=baseTokens
        ?wrapMath(baseTokens)
        :e("span",null,tok.ls.base);
      return msubEl("log",baseEl,ti);
    }
    return null;
  }).filter(Boolean);
}
export { mfracEl, mexpFracEl, msupEl, msubEl, wrapMath, parseMath };
