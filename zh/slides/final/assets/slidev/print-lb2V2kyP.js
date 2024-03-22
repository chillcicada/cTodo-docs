function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-CUUuFCBO.js","assets/modules/vue-DA7ZT_zT.js","assets/index-Cqb3zyoU.js","assets/modules/shiki-CUMx7AeU.js","assets/modules/shiki-BSchMNmt.css","assets/index-25dzRiyM.css","assets/slidev/bottom-ulSiq8ep.js","assets/bottom-Dfs4aGDM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as _,y as a,M as F,Y as N,J as V,o as r,b as u,l as d,A as i,i as q,c as m,g as w,h as A,F as v,Z as B,e as L,f as j,C as z}from"../modules/vue-DA7ZT_zT.js";import{G,g as D,S as M,a as O,w as W}from"./bottom-ulSiq8ep.js";import{s as H,a as k,_ as I,c as g,i as J,b as f,d as P,u as x,e as R,f as h,g as Y}from"../index-Cqb3zyoU.js";import{P as Z}from"./PrintStyle-BKGvp1PT.js";import"../modules/shiki-CUMx7AeU.js";function K(n){return Array.from(new Set(n))}function T(...n){let e,t,s;n.length===1?(e=0,s=1,[t]=n):[e,t,s=1]=n;const o=[];let l=e;for(;l<t;)o.push(l),l+=s||1;return o}function Q(n,e){if(!e||e==="all"||e==="*")return T(1,n+1);if(e==="none")return[];const t=[];for(const s of e.split(/[,;]/g))if(!s.includes("-"))t.push(+s);else{const[o,l]=s.split("-",2);t.push(...T(+o,l?+l+1:n+1))}return K(t).filter(s=>s<=n).sort((s,o)=>s-o)}const U=["id"],X=_({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(n){const{nav:e}=n,t=a(()=>e.currentSlideRoute.value),s=a(()=>({height:`${H.value}px`,width:`${k.value}px`})),o=F();I(()=>import("./DrawingPreview-CUUuFCBO.js").then(c=>c.a),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(c=>o.value=c.default);const l=a(()=>`${t.value.no.toString().padStart(3,"0")}-${(e.clicks.value+1).toString().padStart(2,"0")}`);return N(J,V({nav:e,configs:g,themeConfigs:a(()=>g.themeConfig)})),(c,y)=>(r(),u("div",{id:l.value,class:"print-slide-container",style:A(s.value)},[d(i(G)),d(M,{is:t.value.component,"clicks-context":c.nav.clicksContext.value,class:q(i(D)(t.value)),route:t.value},null,8,["is","clicks-context","class","route"]),o.value?(r(),m(i(o),{key:0,page:t.value.no},null,8,["page"])):w("v-if",!0),d(i(O))],12,U))}}),$=f(X,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),ee=_({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){const{route:e}=n,t=P(e,0);return(s,o)=>(r(),u(v,null,[d($,{"clicks-context":i(t),nav:i(x)(s.route,i(t))},null,8,["clicks-context","nav"]),i(t).disabled?w("v-if",!0):(r(!0),u(v,{key:0},B(i(t).total,l=>(r(),m($,{key:l,nav:i(x)(s.route,i(P)(s.route,l))},null,8,["nav"]))),128))],64))}}),te=f(ee,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/PrintSlide.vue"]]),se={id:"print-content"},ne=_({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const e=n,{slides:t,currentRoute:s}=R(),o=a(()=>e.width),l=a(()=>e.width/h.value),c=a(()=>o.value/l.value),y=a(()=>c.value<h.value?o.value/k.value:l.value*h.value/k.value);let p=t.value;s.value.query.range&&(p=Q(p.length,s.value.query.range).map(b=>p[b-1]));const E=a(()=>({"select-none":!g.selectable}));return N(Y,y),(S,b)=>(r(),u("div",{id:"print-container",class:q(E.value)},[L("div",se,[(r(!0),u(v,null,B(i(p),C=>(r(),m(te,{key:C.no,route:C},null,8,["route"]))),128))]),j(S.$slots,"controls")],2))}}),oe=f(ne,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/PrintContainer.vue"]]),le={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},ie=_({__name:"print",setup(n){const{isPrintMode:e}=R();return z(()=>{e?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(t,s)=>(r(),u(v,null,[i(e)?(r(),m(Z,{key:0})):w("v-if",!0),L("div",le,[d(oe,{class:"w-full h-full",style:A({background:"var(--slidev-slide-container-background, black)"}),width:i(W).width.value},null,8,["style","width"])])],64))}}),pe=f(ie,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/pages/print.vue"]]);export{pe as default};
