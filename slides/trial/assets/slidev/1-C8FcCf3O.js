import{d as f,y as _,o as d,b as m,e as t,f as h,h as v,c as b,k as g,q as k,s as y,A as n,$ as r}from"../modules/vue-DA7ZT_zT.js";import{u,p as w,f as x}from"./context-Dd__2CIS.js";import{b as p,z as c}from"../index-A93eLElR.js";import"../modules/shiki-CUMx7AeU.js";function i(e){return e.startsWith("/")?"/slides/trial/"+e.slice(1):e}function C(e,s=!1){const o=e&&["#","rgb","hsl"].some(l=>e.indexOf(l)===0),a={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?s?`linear-gradient(#0005, #0008), url(${i(e)})`:`url("${i(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return a.background||delete a.background,a}const P={class:"my-auto w-full"},T=f({__name:"cover",props:{background:{default:""}},setup(e){u();const s=e,o=_(()=>C(s.background,!0));return(a,l)=>(d(),m("div",{class:"slidev-layout cover",style:v(o.value)},[t("div",P,[h(a.$slots,"default")])],4))}}),$=p(T,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+theme-default@0.25.0/node_modules/@slidev/theme-default/layouts/cover.vue"]]),z=t("h1",null,"cTodo Project",-1),B=t("p",null,[r("This slide is only for the trial review. Press "),t("u",null,"Space"),r(" to continue. "),t("a",{href:"/zh/slides/trial",target:"_blank",rel:"noopener"},"中文版本")],-1),S=t("p",null,[t("a",{href:"https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018d9b06-1a8e-419a-a70a-2f35a155fdaf",target:"_blank",rel:"noopener"},[t("img",{src:"https://wakatime.com/badge/user/018b2987-2ecc-45d3-9469-0a8572bb2e32/project/018d9b06-1a8e-419a-a70a-2f35a155fdaf.svg",alt:"wakatime"})])],-1),j=t("br",null,null,-1),A=t("p",{style:{"text-align":"right"}},[r("Author: "),t("a",{href:"https://github.com/chillcicada"},[t("span",null,"ChillCicada")]),r(" (aka 寒蝉)")],-1),I={__name:"1",setup(e){return w(c),u(),(s,o)=>(d(),b($,k(y(n(x)(n(c),0))),{default:g(()=>[z,B,S,j,A]),_:1},16))}},E=p(I,[["__file","/@slidev/slides/1.md"]]);export{E as default};
