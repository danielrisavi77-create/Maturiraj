// @ts-nocheck
'use client';
/* 5.3: izdvojeno iz components/simulator/MatEngineCore.tsx bez promjene ponasanja.
   Crtanje i unos grafa (GraphSVG + GraphInput). */
import React from 'react';
import { renderOptText } from '../core/mathText';
import { ZoomableFig } from './figzoom';
const{createElement:e,useState,useEffect}=React;
function GraphSVG({graphType, points, range, color="var(--blue)", label}){
  const r=range||{xMin:-4,xMax:4,yMin:-2,yMax:7};
  return e(KoordOs,{W:240,H:200,xMin:r.xMin,xMax:r.xMax,yMin:r.yMin,yMax:r.yMax,label:label||""},
    (toX,toY)=>{
      if(!points||points.length===0) return null;
      const els=[];

      if(graphType==="parabola"&&points.length>=1){
        // Nacrtaj parabolu kroz dane točke (vertex + 2 točke)
        // Izračunaj a iz vertex forme: y = a(x-h)² + k
        const v=points[0]; // vertex [h,k]
        const p=points[1]; // još jedna točka
        if(v&&p){
          const a=(p[1]-v[1])/Math.pow(p[0]-v[0],2);
          const pts=[];
          for(let x=r.xMin;x<=r.xMax;x+=0.1){
            const y=a*Math.pow(x-v[0],2)+v[1];
            if(y<r.yMin||y>r.yMax) continue;
            pts.push(toX(x).toFixed(1)+","+toY(y).toFixed(1));
          }
          if(pts.length>1) els.push(e("polyline",{key:"p",points:pts.join(" "),fill:"none",stroke:color,strokeWidth:2,strokeLinejoin:"round"}));
        }
      }

      if(graphType==="line"&&points.length>=2){
        const [p1,p2]=points;
        // Produži pravac do rubova
        const k=(p2[1]-p1[1])/(p2[0]-p1[0]);
        const b=p1[1]-k*p1[0];
        const x1=r.xMin, y1=k*x1+b;
        const x2=r.xMax, y2=k*x2+b;
        els.push(e("line",{key:"l",
          x1:toX(x1),y1:toY(y1),x2:toX(x2),y2:toY(y2),
          stroke:color,strokeWidth:2,strokeLinecap:"round"
        }));
      }

      // Ucrtaj sve točke s bijelim halogenom
      points.filter(p=>p!=null).forEach(([px,py],i)=>{
        if(px===undefined||py===undefined) return;
        els.push(e("circle",{key:"h"+i,cx:toX(px),cy:toY(py),r:6,fill:"var(--s1)",stroke:"none"}));
        els.push(e("circle",{key:"c"+i,cx:toX(px),cy:toY(py),r:4,fill:color,stroke:"var(--s1)",strokeWidth:1.5}));
        els.push(e("text",{key:"t"+i,x:toX(px)+8,y:toY(py)-6,fontSize:9,fill:color,fontWeight:600},
          "("+px+", "+py+")"));
      });

      return e("g",null,...els);
    }
  );
}
function GraphInput({q,answer,onAnswer,isReviewed,isPractice}){
  const[checked,setChecked]=useState(false);
  const[showSolution,setShowSolution]=useState(false);

  useEffect(()=>{setChecked(false);setShowSolution(false);},[q.id]);

  // Parsiraj učenikov unos u točke
  const isParabola=q.graphType==="parabola";
  const isLine=q.graphType==="line";

  // answer format: "0,2;-1,3;1,3" (točke odvojene ;)
  const parsePoints=val=>{
    if(!val) return [];
    return val.split(";").map(s=>{
      const [x,y]=s.split(",").map(v=>parseFloat(v.trim()));
      return isNaN(x)||isNaN(y)?null:[x,y];
    }).filter(Boolean);
  };

  const userPoints=parsePoints(answer);
  const refPoints=isParabola
    ?[q.graphRef?.vertex,...(q.graphRef?.pts||[])]
    :(q.graphRef?.pts||[]);

  // Provjeri točnost  -  usporedi korisnikove točke s referentnima
  const checkCorrect=()=>{
    if(!answer||userPoints.length<2) return null;
    const required=isParabola
      ?[q.graphRef?.vertex,...(q.graphRef?.pts||[])].filter(Boolean)
      :(q.graphRef?.pts||[]);
    let correct=0;
    required.forEach(([rx,ry])=>{
      if(userPoints.some(([ux,uy])=>Math.abs(ux-rx)<0.1&&Math.abs(uy-ry)<0.1)) correct++;
    });
    return correct>=Math.max(2,required.length-1);
  };

  const isCorrect=checked||isReviewed?checkCorrect():null;

  const placeholderText=isParabola
    ?"tjeme: 0,2 ;  točka: -1,3 ;  točka: 1,3"
    :"točka: 0,3 ;  točka: -1.5,0";

  return e("div",{style:{display:"flex",flexDirection:"column",gap:12}},

    // Napomena o maturi
    e("div",{style:{
      fontSize:12,color:"var(--muted)",padding:"8px 12px",
      background:"var(--s2)",borderRadius:"var(--r)",
      border:"1px solid var(--bdr)",lineHeight:1.6
    }},
      "✏️ Na pravoj maturi crtat ćeš olovkom na papiru. Ovdje upiši koordinate ključnih točaka koje bi ucrtao  -  simulator će nacrtati tvoj graf."
    ),

    // Input za točke
    e("div",null,
      e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},
        isParabola?"📍 Tjeme i 2 pomoćne točke":"📍 Dvije točke pravca"
      ),
      e("div",{style:{fontSize:11,color:"var(--muted)",marginBottom:8}},
        "Format: x,y odvojene s  ;   -  npr. ",
        e("code",{style:{background:"var(--s2)",padding:"1px 5px",borderRadius:4,fontSize:11}},
          isParabola?"0,1 ; -1,2 ; 1,2":"0,-2 ; 1,1")
      ),
      e("input",{
        type:"text",
        placeholder:placeholderText,
        className:"finp"+((checked||isReviewed)?(isCorrect?" ok":" bad"):""),
        style:{width:"100%",maxWidth:340,textAlign:"left",fontFamily:"monospace"},
        value:answer||"",
        disabled:checked||isReviewed,
        onChange:ev=>onAnswer(ev.target.value)
      }),

      // Provjeri gumb
      !checked&&!isReviewed&&userPoints.length>=2&&e("button",{
        className:"btn btn-chk",
        style:{marginTop:8,padding:"10px 18px"},
        onClick:()=>{setChecked(true); window._playSound?.(isCorrect?"correct":"wrong");}
      },"✓ Provjeri točke"),

      // Feedback
      (checked||isReviewed)&&isCorrect!==null&&e("div",{
        style:{
          marginTop:8,padding:"8px 12px",borderRadius:"var(--r)",
          background:isCorrect?"var(--green-d)":"var(--red-d)",
          border:"1px solid "+(isCorrect?"rgba(30,122,62,.3)":"rgba(196,48,48,.3)"),
          fontSize:13,fontWeight:600,color:isCorrect?"var(--green)":"var(--red)"
        }
      }, isCorrect?"✓ Točne ključne točke!":"✗ Provjeri koordinate  -  neke točke nisu točne.")
    ),

    // Prikaz učenikovog grafa (ako je unio barem 2 točke)
    userPoints.length>=2&&e("div",null,
      e("div",{style:{fontSize:12,fontWeight:600,color:"var(--muted)",marginBottom:6,textTransform:"uppercase",letterSpacing:".06em"}},
        "📊 Tvoj graf"
      ),
      e(GraphSVG,{
        graphType:q.graphType,
        points:userPoints,
        range:q.graphRange,
        color:"var(--blue)"
      })
    ),

    // Standardno rješenje s točnim grafom
    e("div",null,
      e("button",{
        className:"ah-toggle-btn",
        onClick:()=>setShowSolution(s=>!s),
        style:{marginTop:0}
      },showSolution?"▲ Sakrij rješenje":"📐 Pogledaj standardno rješenje"),
      showSolution&&e("div",{className:"ah-steps",style:{marginTop:8}},
        e("div",{className:"ah-steps-label"},"📐 Točan graf"),
        refPoints.length>0&&!q.sol?.svgFn&&e(GraphSVG,{
          graphType:q.graphType,
          points:refPoints,
          range:q.graphRange,
          color:"var(--green)",
          label:"Referentni graf"
        }),
        q.sol?.svgFn&&e("div",{style:{margin:"8px 0",display:"flex",justifyContent:"center"}},e(ZoomableFig,{fig:e(q.sol.svgFn,null)})),
        q.steps&&q.steps.map((s,i)=>{const txt=typeof s==="string"?s:(s&&s.txt)||"";const note=typeof s==="object"&&s?s.note:null;const fin=typeof s==="object"&&s?s.final:false;return e("div",{key:i,className:"ah-step"+(fin?" ah-step-final":"")},
  e("span",{className:"ah-step-n"},fin?"→":(i+1)),
  e("span",{className:"ah-step-txt"},renderOptText(txt)),
  note&&typeof note==="string"&&note&&e("span",{className:"ah-step-note"},note));}),
        q.sol?.ex&&e("div",{className:"ah-step ah-step-final"},
  e("span",{className:"ah-step-n"},"📖"),
  e("span",{className:"ah-step-txt"},renderOptText(q.sol.ex))
)
      )
    )
  );
}
export { GraphSVG, GraphInput };
