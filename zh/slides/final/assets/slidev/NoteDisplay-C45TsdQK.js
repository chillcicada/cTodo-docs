import{d as N,y as q,t as M,D as H,n as T,a3 as B,b as m,i as p,e as L,x as b,o as d}from"../modules/vue-DA7ZT_zT.js";import{C as w,b as $}from"../index-Cqb3zyoU.js";const I=["innerHTML"],P=["textContent"],K=["textContent"],k="slidev-note-fade",r="slidev-note-click-mark",R=N({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1},clicksContext:{type:null,required:!1},autoScroll:{type:Boolean,required:!1}},emits:["markerDblclick","markerClick"],setup(A,{emit:D}){const l=A,v=D,h=q(()=>{var s,n;return((s=l.clicksContext)==null?void 0:s.current)!=null&&((n=l.noteHtml)==null?void 0:n.includes("slidev-note-click-mark"))}),c=M(null);function y(){var S;if(!c.value||!h.value)return;const s=Array.from(c.value.querySelectorAll(`.${r}`)),n=+(((S=l.clicksContext)==null?void 0:S.current)??w),a=n<0||n>=w,g=new Set;function C(e){!e||e===c.value||(g.add(e),e.parentElement&&C(e.parentElement))}const _=new Map;for(const e of s){const t=e.parentElement,o=Number(e.dataset.clicks);_.set(o,e),C(t),Array.from(t.childNodes).forEach(f=>{if(f.nodeType===3){const x=document.createElement("span");x.textContent=f.textContent,t.insertBefore(x,f),f.remove()}})}const E=Array.from(c.value.querySelectorAll("*"));let i=0;const u=new Map;for(const e of E)u.has(i)||u.set(i,[]),u.get(i).push(e),e.classList.contains(r)&&(i=Number(e.dataset.clicks)||i+1);for(const[e,t]of u)a?t.forEach(o=>o.classList.remove(k)):t.forEach(o=>o.classList.toggle(k,g.has(o)?!1:e!==n));for(const[e,t]of _)t.classList.remove(k),t.classList.toggle(`${r}-past`,a?!1:e<n),t.classList.toggle(`${r}-active`,a?!1:e===n),t.classList.toggle(`${r}-next`,a?!1:e===n+1),t.classList.toggle(`${r}-future`,a?!1:e>n+1),t.ondblclick=o=>{v("markerDblclick",o,e),!o.defaultPrevented&&(l.clicksContext.current=e,o.stopPropagation(),o.stopImmediatePropagation())},t.onclick=o=>{v("markerClick",o,e)},l.autoScroll&&e===n&&t.scrollIntoView({block:"center",behavior:"smooth"})}return H(()=>{var s;return[l.noteHtml,(s=l.clicksContext)==null?void 0:s.current]},()=>{T(()=>{y()})},{immediate:!0}),B(()=>{y()}),(s,n)=>s.noteHtml?(d(),m("div",{key:0,ref_key:"noteDisplay",ref:c,class:p(["prose overflow-auto outline-none slidev-note",[l.class,h.value?"slidev-note-with-clicks":""]]),innerHTML:s.noteHtml},null,10,I)):s.note?(d(),m("div",{key:1,class:p(["prose overflow-auto outline-none slidev-note",l.class])},[L("p",{textContent:b(s.note)},null,8,P)],2)):(d(),m("div",{key:2,class:p(["prose overflow-auto outline-none opacity-50 italic select-none slidev-note",l.class])},[L("p",{textContent:b(l.placeholder||"No notes.")},null,8,K)],2))}}),F=$(R,[["__file","/home/runner/work/cTodo-docs/cTodo-docs/node_modules/.pnpm/@slidev+client@0.48.0-beta.26_@vue+compiler-sfc@3.4.21_postcss@8.4.38_vite@5.2.2/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{F as N};
