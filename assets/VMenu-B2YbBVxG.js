import{M,S as I,aH as S,O,Y as K,aI as U,aJ as N,W as B,X as E,r as H,aK as F,aL as b,s as W,aM as j,aN as z,aO as J,n as Q,aP as P,w as X,au as V,L as k,P as Y,aQ as A,f as h,aD as $,aE as q,aR as G,aS as Z,aT as y}from"./index-TexIIK_8.js";import{V as _}from"./dialog-transition-D7ZCLFfu.js";const ee=M({id:String,submenu:Boolean,...I(S({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:_}}),["absolute"])},"VMenu"),ne=O()({name:"VMenu",props:ee(),emits:{"update:modelValue":a=>!0},setup(a,D){let{slots:c}=D;const s=K(a,"modelValue"),{scopeId:C}=U(),{isRtl:f}=N(),d=B(),m=E(()=>a.id||`v-menu-${d}`),o=H(),n=F(b,null),v=W(new Set);j(b,{register(){v.value.add(d)},unregister(){v.value.delete(d)},closeParents(e){setTimeout(()=>{var t;!v.value.size&&!a.persistent&&(e==null||(t=o.value)!=null&&t.contentEl&&!G(e,o.value.contentEl))&&(s.value=!1,n==null||n.closeParents())},40)}}),z(()=>{n==null||n.unregister(),document.removeEventListener("focusin",g)}),J(()=>s.value=!1);async function g(e){var u,r,i;const t=e.relatedTarget,l=e.target;await Q(),s.value&&t!==l&&((u=o.value)!=null&&u.contentEl)&&((r=o.value)!=null&&r.globalTop)&&![document,o.value.contentEl].includes(l)&&!o.value.contentEl.contains(l)&&((i=P(o.value.contentEl)[0])==null||i.focus())}X(s,e=>{e?(n==null||n.register(),V&&document.addEventListener("focusin",g,{once:!0})):(n==null||n.unregister(),V&&document.removeEventListener("focusin",g))},{immediate:!0});function R(e){n==null||n.closeParents(e)}function T(e){var t,l,u,r,i;if(!a.disabled)if(e.key==="Tab"||e.key==="Enter"&&!a.closeOnContentClick){if(e.key==="Enter"&&(e.target instanceof HTMLTextAreaElement||e.target instanceof HTMLInputElement&&e.target.closest("form")))return;e.key==="Enter"&&e.preventDefault(),Z(P((t=o.value)==null?void 0:t.contentEl,!1),e.shiftKey?"prev":"next",L=>L.tabIndex>=0)||(s.value=!1,(u=(l=o.value)==null?void 0:l.activatorEl)==null||u.focus())}else a.submenu&&e.key===(f.value?"ArrowRight":"ArrowLeft")&&(s.value=!1,(i=(r=o.value)==null?void 0:r.activatorEl)==null||i.focus())}function w(e){var l;if(a.disabled)return;const t=(l=o.value)==null?void 0:l.contentEl;t&&s.value?e.key==="ArrowDown"?(e.preventDefault(),e.stopImmediatePropagation(),y(t,"next")):e.key==="ArrowUp"?(e.preventDefault(),e.stopImmediatePropagation(),y(t,"prev")):a.submenu&&(e.key===(f.value?"ArrowRight":"ArrowLeft")?s.value=!1:e.key===(f.value?"ArrowLeft":"ArrowRight")&&(e.preventDefault(),y(t,"first"))):(a.submenu?e.key===(f.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(e.key))&&(s.value=!0,e.preventDefault(),setTimeout(()=>setTimeout(()=>w(e))))}const p=E(()=>k({"aria-haspopup":"menu","aria-expanded":String(s.value),"aria-owns":m.value,onKeydown:w},a.activatorProps));return Y(()=>{const e=A.filterProps(a);return h(A,k({ref:o,id:m.value,class:["v-menu",a.class],style:a.style},e,{modelValue:s.value,"onUpdate:modelValue":t=>s.value=t,absolute:!0,activatorProps:p.value,location:a.location??(a.submenu?"end":"bottom"),"onClick:outside":R,onKeydown:T},C),{activator:c.activator,default:function(){for(var t=arguments.length,l=new Array(t),u=0;u<t;u++)l[u]=arguments[u];return h($,{root:"VMenu"},{default:()=>{var r;return[(r=c.default)==null?void 0:r.call(c,...l)]}})}})}),q({id:m,ΨopenChildren:v},o)}});export{ne as V};
