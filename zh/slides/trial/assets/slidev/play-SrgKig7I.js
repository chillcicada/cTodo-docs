function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingControls-YgwyTHdw.js","assets/modules/unplugin-icons-B1zEtaLA.js","assets/modules/vue-DA7ZT_zT.js","assets/modules/shiki-CUMx7AeU.js","assets/modules/shiki-BSchMNmt.css","assets/slidev/DrawingPreview-LLanKZMD.js","assets/index-C27uI-IZ.js","assets/index-BOUr9Jlh.css","assets/slidev/bottom-D1BJl0S8.js","assets/bottom-Dfs4aGDM.css","assets/slidev/SlidesShow-BGYDKT_U.js","assets/slidev/title-renderer-CFdy8uAx.js","assets/SlidesShow-BzvtmN-4.css","assets/DrawingControls-C5T1oZL5.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{b as h,c as g,e as z,_ as E}from"../index-C27uI-IZ.js";import{d as y,a7 as N,o as t,c as d,A as e,b,e as l,f as I,i as T,g as n,a8 as B,y as P,k as D,a6 as _,$ as O,M as w,l as c,F as $,t as R,h as A}from"../modules/vue-DA7ZT_zT.js";import{b as x,e as C,f as S,h as U,j as M,w as H,k as L,l as j}from"./bottom-D1BJl0S8.js";import{Q as F,G,r as Q,u as W,S as K,a as X,N as Y}from"./SlidesShow-BGYDKT_U.js";import{P as q}from"./PrintStyle-Cr_k45X8.js";import{u as J}from"./DrawingPreview-LLanKZMD.js";import"../modules/shiki-CUMx7AeU.js";import"../modules/unplugin-icons-B1zEtaLA.js";import"./title-renderer-CFdy8uAx.js";const Z="/zh/slides/trial/assets/logo-BYkHSa_O.png",ee={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},oe=y({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(u,{emit:a}){const i=u,o=N(i,"modelValue",a);function s(){o.value=!1}return(m,r)=>(t(),d(B,null,[e(o)?(t(),b("div",ee,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:r[0]||(r[0]=p=>s())}),l("div",{class:T(["m-auto rounded-md bg-main shadow",i.class]),"dark:border":"~ main"},[I(m.$slots,"default")],2)])):n("v-if",!0)],1024))}}),se=h(oe,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/Modal.vue"]]),le={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},te=["innerHTML"],ae=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:Z,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),O("dev ")])])],-1),ie=y({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(u,{emit:a}){const o=N(u,"modelValue",a),s=P(()=>typeof g.info=="string");return(m,r)=>(t(),d(se,{modelValue:e(o),"onUpdate:modelValue":r[0]||(r[0]=p=>_(o)?o.value=p:null),class:"px-6 py-4"},{default:D(()=>[l("div",le,[s.value?(t(),b("div",{key:0,class:"mb-4",innerHTML:e(g).info},null,8,te)):n("v-if",!0),ae])]),_:1},8,["modelValue"]))}}),ne=h(ie,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/InfoDialog.vue"]]),re=y({__name:"Controls",setup(u){const a=w(),i=w();return(f,o)=>(t(),b($,null,[c(F,{modelValue:e(x),"onUpdate:modelValue":o[0]||(o[0]=s=>_(x)?x.value=s:null)},null,8,["modelValue"]),c(G),a.value?(t(),d(e(a),{key:0})):n("v-if",!0),i.value?(t(),d(e(i),{key:1,modelValue:e(C),"onUpdate:modelValue":o[1]||(o[1]=s=>_(C)?C.value=s:null)},null,8,["modelValue"])):n("v-if",!0),e(g).info?(t(),d(ne,{key:2,modelValue:e(S),"onUpdate:modelValue":o[2]||(o[2]=s=>_(S)?S.value=s:null)},null,8,["modelValue"])):n("v-if",!0)],64))}}),de=h(re,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/Controls.vue"]]),ce=y({__name:"play",setup(u){Q();const{next:a,prev:i,isEmbedded:f,isPrintMode:o}=z(),{isDrawing:s}=J(),m=R();function r(v){var V;M.value||((V=v.target)==null?void 0:V.id)==="slide-container"&&(v.screenX/window.innerWidth>.6?a():i())}W(m);const p=P(()=>U.value||M.value);w();const k=w();return E(()=>import("./DrawingControls-YgwyTHdw.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])).then(v=>k.value=v.default),(v,V)=>(t(),b($,null,[e(o)?(t(),d(q,{key:0})):n("v-if",!0),l("div",{id:"page-root",ref_key:"root",ref:m,class:T(["grid",e(j)?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[c(K,{class:"w-full h-full",style:A({background:"var(--slidev-slide-container-background, black)"}),width:e(o)?e(H).width.value:void 0,scale:e(L),"is-main":!0,onPointerdown:r},{default:D(()=>[c(X,{"render-context":"slide"})]),controls:D(()=>[l("div",{class:T(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[p.value?"!opacity-100 right-0":"opacity-0 p-2",e(s)?"pointer-events-none":""]])},[c(Y,{class:"m-auto",persist:p.value},null,8,["persist"])],2),!e(g).drawings.presenterOnly&&!e(f)&&k.value?(t(),d(e(k),{key:0,class:"ml-0"})):n("v-if",!0)]),_:1},8,["style","width","scale"]),n("v-if",!0)],2),c(de)],64))}}),ye=h(ce,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/pages/play.vue"]]);export{ye as default};
