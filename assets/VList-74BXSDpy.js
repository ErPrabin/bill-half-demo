import{aK as H,s as G,aM as W,t as C,ak as ye,r as V,M as j,Y as J,X as v,aN as me,av as Ze,af as k,W as Je,bR as ge,bS as et,U as T,am as E,b5 as R,O as x,P as U,f as o,aD as ee,bT as tt,a3 as at,aZ as be,bu as nt,bQ as lt,bd as D,be as Se,bf as he,ab as pe,ac as ke,bh as Ce,bi as it,ad as we,bb as Ie,bk as st,br as rt,w as ut,ai as Ae,bl as Pe,bm as ct,bn as Ve,ag as Le,ah as Oe,bo as Be,bU as ot,a_ as dt,bs as vt,I as ce,z as oe,B as de,L as te,bV as ft,a2 as yt,ba as mt,bW as O,S as Me,ae as gt,bc as bt,aT as St}from"./index-TexIIK_8.js";import{u as ht}from"./ssrBoot-CLhRb1dG.js";const ae=Symbol.for("vuetify:list");function Te(){const e=H(ae,{hasPrepend:G(!1),updateHasPrepend:()=>null}),i={hasPrepend:G(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return W(ae,i),e}function je(){return H(ae,null)}const le=e=>{const i={activate:t=>{let{id:a,value:l,activated:n}=t;return a=C(a),e&&!l&&n.size===1&&n.has(a)||(l?n.add(a):n.delete(a)),n},in:(t,a,l)=>{let n=new Set;if(t!=null)for(const s of ye(t))n=i.activate({id:s,value:!0,activated:new Set(n),children:a,parents:l});return n},out:t=>Array.from(t)};return i},_e=e=>{const i=le(e);return{activate:a=>{let{activated:l,id:n,...s}=a;n=C(n);const u=l.has(n)?new Set([n]):new Set;return i.activate({...s,id:n,activated:u})},in:(a,l,n)=>{let s=new Set;if(a!=null){const u=ye(a);u.length&&(s=i.in(u.slice(0,1),l,n))}return s},out:(a,l,n)=>i.out(a,l,n)}},pt=e=>{const i=le(e);return{activate:a=>{let{id:l,activated:n,children:s,...u}=a;return l=C(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...u})},in:i.in,out:i.out}},kt=e=>{const i=_e(e);return{activate:a=>{let{id:l,activated:n,children:s,...u}=a;return l=C(l),s.has(l)?n:i.activate({id:l,activated:n,children:s,...u})},in:i.in,out:i.out}},Ct={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){const n=new Set;n.add(i);let s=l.get(i);for(;s!=null;)n.add(s),s=l.get(s);return n}else return a.delete(i),a},select:()=>null},xe={open:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(t){let n=l.get(i);for(a.add(i);n!=null&&n!==i;)a.add(n),n=l.get(n);return a}else a.delete(i);return a},select:()=>null},wt={open:xe.open,select:e=>{let{id:i,value:t,opened:a,parents:l}=e;if(!t)return a;const n=[];let s=l.get(i);for(;s!=null;)n.push(s),s=l.get(s);return new Set(n)}},ie=e=>{const i={select:t=>{let{id:a,value:l,selected:n}=t;if(a=C(a),e&&!l){const s=Array.from(n.entries()).reduce((u,S)=>{let[f,g]=S;return g==="on"&&u.push(f),u},[]);if(s.length===1&&s[0]===a)return n}return n.set(a,l?"on":"off"),n},in:(t,a,l)=>{let n=new Map;for(const s of t||[])n=i.select({id:s,value:!0,selected:new Map(n),children:a,parents:l});return n},out:t=>{const a=[];for(const[l,n]of t.entries())n==="on"&&a.push(l);return a}};return i},Fe=e=>{const i=ie(e);return{select:a=>{let{selected:l,id:n,...s}=a;n=C(n);const u=l.has(n)?new Map([[n,l.get(n)]]):new Map;return i.select({...s,id:n,selected:u})},in:(a,l,n)=>{let s=new Map;return a!=null&&a.length&&(s=i.in(a.slice(0,1),l,n)),s},out:(a,l,n)=>i.out(a,l,n)}},It=e=>{const i=ie(e);return{select:a=>{let{id:l,selected:n,children:s,...u}=a;return l=C(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...u})},in:i.in,out:i.out}},At=e=>{const i=Fe(e);return{select:a=>{let{id:l,selected:n,children:s,...u}=a;return l=C(l),s.has(l)?n:i.select({id:l,selected:n,children:s,...u})},in:i.in,out:i.out}},Pt=e=>{const i={select:t=>{let{id:a,value:l,selected:n,children:s,parents:u}=t;a=C(a);const S=new Map(n),f=[a];for(;f.length;){const y=f.shift();n.set(C(y),l?"on":"off"),s.has(y)&&f.push(...s.get(y))}let g=C(u.get(a));for(;g;){const y=s.get(g),h=y.every(r=>n.get(C(r))==="on"),b=y.every(r=>!n.has(C(r))||n.get(C(r))==="off");n.set(g,h?"on":b?"off":"indeterminate"),g=C(u.get(g))}return e&&!l&&Array.from(n.entries()).reduce((h,b)=>{let[r,c]=b;return c==="on"&&h.push(r),h},[]).length===0?S:n},in:(t,a,l)=>{let n=new Map;for(const s of t||[])n=i.select({id:s,value:!0,selected:new Map(n),children:a,parents:l});return n},out:(t,a)=>{const l=[];for(const[n,s]of t.entries())s==="on"&&!a.has(n)&&l.push(n);return l}};return i},N=Symbol.for("vuetify:nested"),De={id:G(),root:{register:()=>null,unregister:()=>null,parents:V(new Map),children:V(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:V(!1),selectable:V(!1),opened:V(new Set),activated:V(new Set),selected:V(new Map),selectedValues:V([]),getPath:()=>[]}},Vt=j({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),Lt=e=>{let i=!1;const t=V(new Map),a=V(new Map),l=J(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),n=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return pt(e.mandatory);case"single-leaf":return kt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":default:return _e(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return At(e.mandatory);case"leaf":return It(e.mandatory);case"independent":return ie(e.mandatory);case"single-independent":return Fe(e.mandatory);case"classic":default:return Pt(e.mandatory)}}),u=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return wt;case"single":return Ct;case"multiple":default:return xe}}),S=J(e,"activated",e.activated,r=>n.value.in(r,t.value,a.value),r=>n.value.out(r,t.value,a.value)),f=J(e,"selected",e.selected,r=>s.value.in(r,t.value,a.value),r=>s.value.out(r,t.value,a.value));me(()=>{i=!0});function g(r){const c=[];let d=r;for(;d!=null;)c.unshift(d),d=a.value.get(d);return c}const y=Ze("nested"),h=new Set,b={id:G(),root:{opened:l,activatable:k(e,"activatable"),selectable:k(e,"selectable"),activated:S,selected:f,selectedValues:v(()=>{const r=[];for(const[c,d]of f.value.entries())d==="on"&&r.push(c);return r}),register:(r,c,d)=>{if(h.has(r)){g(r).map(String).join(" -> "),g(c).concat(r).map(String).join(" -> ");return}else h.add(r);c&&r!==c&&a.value.set(r,c),d&&t.value.set(r,[]),c!=null&&t.value.set(c,[...t.value.get(c)||[],r])},unregister:r=>{if(i)return;h.delete(r),t.value.delete(r);const c=a.value.get(r);if(c){const d=t.value.get(c)??[];t.value.set(c,d.filter(p=>p!==r))}a.value.delete(r)},open:(r,c,d)=>{y.emit("click:open",{id:r,value:c,path:g(r),event:d});const p=u.value.open({id:r,value:c,opened:new Set(l.value),children:t.value,parents:a.value,event:d});p&&(l.value=p)},openOnSelect:(r,c,d)=>{const p=u.value.select({id:r,value:c,selected:new Map(f.value),opened:new Set(l.value),children:t.value,parents:a.value,event:d});p&&(l.value=p)},select:(r,c,d)=>{y.emit("click:select",{id:r,value:c,path:g(r),event:d});const p=s.value.select({id:r,value:c,selected:new Map(f.value),children:t.value,parents:a.value,event:d});p&&(f.value=p),b.root.openOnSelect(r,c,d)},activate:(r,c,d)=>{if(!e.activatable)return b.root.select(r,!0,d);y.emit("click:activate",{id:r,value:c,path:g(r),event:d});const p=n.value.activate({id:r,value:c,activated:new Set(S.value),children:t.value,parents:a.value,event:d});p&&(S.value=p)},children:t,parents:a,getPath:g}};return W(N,b),b.root},Ge=(e,i)=>{const t=H(N,De),a=Symbol(Je()),l=v(()=>e.value!==void 0?e.value:a),n={...t,id:l,open:(s,u)=>t.root.open(l.value,s,u),openOnSelect:(s,u)=>t.root.openOnSelect(l.value,s,u),isOpen:v(()=>t.root.opened.value.has(l.value)),parent:v(()=>t.root.parents.value.get(l.value)),activate:(s,u)=>t.root.activate(l.value,s,u),isActivated:v(()=>t.root.activated.value.has(C(l.value))),select:(s,u)=>t.root.select(l.value,s,u),isSelected:v(()=>t.root.selected.value.get(C(l.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return ge(()=>{!t.isGroupActivator&&t.root.register(l.value,t.id.value,i)}),me(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&W(N,n),n},Ot=()=>{const e=H(N,De);W(N,{...e,isGroupActivator:!0})},Bt=et({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return Ot(),()=>{var a;return(a=t.default)==null?void 0:a.call(t)}}}),Mt=j({activeColor:String,baseColor:String,color:String,collapseIcon:{type:T,default:"$collapse"},expandIcon:{type:T,default:"$expand"},prependIcon:T,appendIcon:T,fluid:Boolean,subgroup:Boolean,title:String,value:null,...E(),...R()},"VListGroup"),ve=x()({name:"VListGroup",props:Mt(),setup(e,i){let{slots:t}=i;const{isOpen:a,open:l,id:n}=Ge(k(e,"value"),!0),s=v(()=>`v-list-group--id-${String(n.value)}`),u=je(),{isBooted:S}=ht();function f(b){b.stopPropagation(),l(!a.value,b)}const g=v(()=>({onClick:f,class:"v-list-group__header",id:s.value})),y=v(()=>a.value?e.collapseIcon:e.expandIcon),h=v(()=>({VListItem:{active:a.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&y.value,appendIcon:e.appendIcon||!e.subgroup&&y.value,title:e.title,value:e.value}}));return U(()=>o(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":a.value},e.class],style:e.style},{default:()=>[t.activator&&o(ee,{defaults:h.value},{default:()=>[o(Bt,null,{default:()=>[t.activator({props:g.value,isOpen:a.value})]})]}),o(tt,{transition:{component:at},disabled:!S.value},{default:()=>{var b;return[be(o("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(b=t.default)==null?void 0:b.call(t)]),[[nt,a.value]])]}})]})),{isOpen:a}}}),Tt=j({opacity:[Number,String],...E(),...R()},"VListItemSubtitle"),jt=x()({name:"VListItemSubtitle",props:Tt(),setup(e,i){let{slots:t}=i;return U(()=>o(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),_t=lt("v-list-item-title"),xt=j({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:T,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:T,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:D(),onClickOnce:D(),...Se(),...E(),...he(),...pe(),...ke(),...Ce(),...it(),...R(),...we(),...Ie({variant:"text"})},"VListItem"),fe=x()({name:"VListItem",directives:{Ripple:st},props:xt(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:a,emit:l}=i;const n=rt(e,t),s=v(()=>e.value===void 0?n.href.value:e.value),{activate:u,isActivated:S,select:f,isOpen:g,isSelected:y,isIndeterminate:h,isGroupActivator:b,root:r,parent:c,openOnSelect:d,id:p}=Ge(s,!1),I=je(),L=v(()=>{var m;return e.active!==!1&&(e.active||((m=n.isActive)==null?void 0:m.value)||(r.activatable.value?S.value:y.value))}),F=v(()=>e.link!==!1&&n.isLink.value),B=v(()=>!!I&&(r.selectable.value||r.activatable.value||e.value!=null)),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||n.isClickable.value||B.value)),z=v(()=>e.rounded||e.nav),X=v(()=>e.color??e.activeColor),q=v(()=>({color:L.value?X.value??e.baseColor:e.baseColor,variant:e.variant}));ut(()=>{var m;return(m=n.isActive)==null?void 0:m.value},m=>{m&&$()}),ge(()=>{var m;(m=n.isActive)!=null&&m.value&&$()});function $(){c.value!=null&&r.open(c.value,!0),d(!0)}const{themeClasses:Q}=Ae(e),{borderClasses:M}=Pe(e),{colorClasses:w,colorStyles:_,variantClasses:Ue}=ct(q),{densityClasses:$e}=Ve(e),{dimensionStyles:Ke}=Le(e),{elevationClasses:He}=Oe(e),{roundedClasses:We}=Be(z),ze=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Y=v(()=>({isActive:L.value,select:f,isOpen:g.value,isSelected:y.value,isIndeterminate:h.value}));function Xe(m){var K;l("click",m),A.value&&((K=n.navigate)==null||K.call(n,m),!b&&(r.activatable.value?u(!S.value,m):(r.selectable.value||e.value!=null)&&f(!y.value,m)))}function qe(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),m.target.dispatchEvent(new MouseEvent("click",m)))}return U(()=>{const m=F.value?"a":e.tag,K=a.title||e.title!=null,Qe=a.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),Ye=!!(se||a.append),re=!!(e.prependAvatar||e.prependIcon),Z=!!(re||a.prepend);return I==null||I.updateHasPrepend(Z),e.activeColor&&ot("active-color",["color","base-color"]),be(o(m,te({class:["v-list-item",{"v-list-item--active":L.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!Z&&(I==null?void 0:I.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&L.value},Q.value,M.value,w.value,$e.value,He.value,ze.value,We.value,Ue.value,e.class],style:[_.value,Ke.value,e.style],tabindex:A.value?I?-2:0:void 0,"aria-selected":B.value?r.activatable.value?S.value:r.selectable.value?y.value:L.value:void 0,onClick:Xe,onKeydown:A.value&&!F.value&&qe},n.linkProps),{default:()=>{var ue;return[vt(A.value||L.value,"v-list-item"),Z&&o("div",{key:"prepend",class:"v-list-item__prepend"},[a.prepend?o(ee,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var P;return[(P=a.prepend)==null?void 0:P.call(a,Y.value)]}}):o(ce,null,[e.prependAvatar&&o(oe,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&o(de,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),o("div",{class:"v-list-item__spacer"},null)]),o("div",{class:"v-list-item__content","data-no-activator":""},[K&&o(_t,{key:"title"},{default:()=>{var P;return[((P=a.title)==null?void 0:P.call(a,{title:e.title}))??e.title]}}),Qe&&o(jt,{key:"subtitle"},{default:()=>{var P;return[((P=a.subtitle)==null?void 0:P.call(a,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=a.default)==null?void 0:ue.call(a,Y.value)]),Ye&&o("div",{key:"append",class:"v-list-item__append"},[a.append?o(ee,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var P;return[(P=a.append)==null?void 0:P.call(a,Y.value)]}}):o(ce,null,[e.appendIcon&&o(de,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&o(oe,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),o("div",{class:"v-list-item__spacer"},null)])]}}),[[dt("ripple"),A.value&&e.ripple]])}),{activate:u,isActivated:S,isGroupActivator:b,isSelected:y,list:I,select:f,root:r,id:p}}}),Ft=j({color:String,inset:Boolean,sticky:Boolean,title:String,...E(),...R()},"VListSubheader"),Dt=x()({name:"VListSubheader",props:Ft(),setup(e,i){let{slots:t}=i;const{textColorClasses:a,textColorStyles:l}=ft(k(e,"color"));return U(()=>{const n=!!(t.default||e.title);return o(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},a.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[n&&o("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),Gt=j({items:Array,returnObject:Boolean},"VListChildren"),Ne=x()({name:"VListChildren",props:Gt(),setup(e,i){let{slots:t}=i;return Te(),()=>{var a,l;return((a=t.default)==null?void 0:a.call(t))??((l=e.items)==null?void 0:l.map(n=>{var h,b;let{children:s,props:u,type:S,raw:f}=n;if(S==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:u}))??o(yt,u,null);if(S==="subheader")return((b=t.subheader)==null?void 0:b.call(t,{props:u}))??o(Dt,u,null);const g={subtitle:t.subtitle?r=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...r,item:f})}:void 0,prepend:t.prepend?r=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...r,item:f})}:void 0,append:t.append?r=>{var c;return(c=t.append)==null?void 0:c.call(t,{...r,item:f})}:void 0,title:t.title?r=>{var c;return(c=t.title)==null?void 0:c.call(t,{...r,item:f})}:void 0},y=ve.filterProps(u);return s?o(ve,te({value:u==null?void 0:u.value},y),{activator:r=>{let{props:c}=r;const d={...u,...c,value:e.returnObject?f:u.value};return t.header?t.header({props:d}):o(fe,d,g)},default:()=>o(Ne,{items:s,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):o(fe,te(u,{value:e.returnObject?f:u.value}),g)}))}}}),Nt=j({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:mt}},"list-items");function ne(e,i){const t=O(i,e.itemTitle,i),a=O(i,e.itemValue,t),l=O(i,e.itemChildren),n=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?Me(i,["children"]):i:void 0:O(i,e.itemProps),s={title:t,value:a,...n};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?Ee(e,l):void 0,raw:i}}function Ee(e,i){const t=[];for(const a of i)t.push(ne(e,a));return t}function Wt(e){const i=v(()=>Ee(e,e.items)),t=v(()=>i.value.some(n=>n.value===null));function a(n){return t.value||(n=n.filter(s=>s!==null)),n.map(s=>e.returnObject&&typeof s=="string"?ne(e,s):i.value.find(u=>e.valueComparator(s,u.value))||ne(e,s))}function l(n){return e.returnObject?n.map(s=>{let{raw:u}=s;return u}):n.map(s=>{let{value:u}=s;return u})}return{items:i,transformIn:a,transformOut:l}}function Et(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Rt(e,i){const t=O(i,e.itemType,"item"),a=Et(i)?i:O(i,e.itemTitle),l=O(i,e.itemValue,void 0),n=O(i,e.itemChildren),s=e.itemProps===!0?Me(i,["children"]):O(i,e.itemProps),u={title:a,value:l,...s};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&n?Re(e,n):void 0,raw:i}}function Re(e,i){const t=[];for(const a of i)t.push(Rt(e,a));return t}function Ut(e){return{items:v(()=>Re(e,e.items))}}const $t=j({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:T,collapseIcon:T,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":D(),"onClick:select":D(),"onUpdate:opened":D(),...Vt({selectStrategy:"single-leaf",openStrategy:"list"}),...Se(),...E(),...he(),...pe(),...ke(),itemType:{type:String,default:"type"},...Nt(),...Ce(),...R(),...we(),...Ie({variant:"text"})},"VList"),zt=x()({name:"VList",props:$t(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:a}=Ut(e),{themeClasses:l}=Ae(e),{backgroundColorClasses:n,backgroundColorStyles:s}=gt(k(e,"bgColor")),{borderClasses:u}=Pe(e),{densityClasses:S}=Ve(e),{dimensionStyles:f}=Le(e),{elevationClasses:g}=Oe(e),{roundedClasses:y}=Be(e),{children:h,open:b,parents:r,select:c,getPath:d}=Lt(e),p=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),I=k(e,"activeColor"),L=k(e,"baseColor"),F=k(e,"color");Te(),bt({VListGroup:{activeColor:I,baseColor:L,color:F,expandIcon:k(e,"expandIcon"),collapseIcon:k(e,"collapseIcon")},VListItem:{activeClass:k(e,"activeClass"),activeColor:I,baseColor:L,color:F,density:k(e,"density"),disabled:k(e,"disabled"),lines:k(e,"lines"),nav:k(e,"nav"),slim:k(e,"slim"),variant:k(e,"variant")}});const B=G(!1),A=V();function z(w){B.value=!0}function X(w){B.value=!1}function q(w){var _;!B.value&&!(w.relatedTarget&&((_=A.value)!=null&&_.contains(w.relatedTarget)))&&M()}function $(w){const _=w.target;if(!(!A.value||["INPUT","TEXTAREA"].includes(_.tagName))){if(w.key==="ArrowDown")M("next");else if(w.key==="ArrowUp")M("prev");else if(w.key==="Home")M("first");else if(w.key==="End")M("last");else return;w.preventDefault()}}function Q(w){B.value=!0}function M(w){if(A.value)return St(A.value,w)}return U(()=>o(e.tag,{ref:A,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,n.value,u.value,S.value,g.value,p.value,y.value,e.class],style:[s.value,f.value,e.style],tabindex:e.disabled||B.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:z,onFocusout:X,onFocus:q,onKeydown:$,onMousedown:Q},{default:()=>[o(Ne,{items:a.value,returnObject:e.returnObject},t)]})),{open:b,select:c,focus:M,children:h,parents:r,getPath:d}}});export{zt as V,fe as a,_t as b,Dt as c,jt as d,Nt as m,Wt as u};
