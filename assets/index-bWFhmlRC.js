import{r,c,e,x as y,b as u,f as a,V,g as s,j as l,a5 as B,a2 as h,m,l as p,C as v,q as i,k,p as A,G as w,H as C,I as S,z as I,B as f}from"./index-TexIIK_8.js";import{V as L,a as T,b as z,d as D}from"./VList-74BXSDpy.js";import"./ssrBoot-CLhRb1dG.js";const J={class:"d-flex justify-space-between mt-4"},R={class:"text-h6"},N={class:"text-h6"},U={class:"d-flex align-center mt-1"},j={class:"text-caption text-medium-emphasis mt-1"},G={class:"text-end"},O={class:"text-h6"},M={__name:"index",setup(Y){const n=r(1250),x=r(2e3),b=r(750),o=r([{id:1,title:"Movie Tickets",amount:300,date:"2024-03-20",createdBy:"John",members:["John","Alice","Bob"]},{id:2,title:"Grocery Shopping",amount:250,date:"2024-03-19",createdBy:"Alice",members:["John","Alice","Bob","Carol"]},{id:3,title:"Rent Split",amount:1700,date:"2024-03-01",createdBy:"Bob",members:["John","Alice","Bob"]}]),_=d=>new Date(d).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}),g=d=>`https://ui-avatars.com/api/?name=${encodeURIComponent(d)}&background=random`;return(d,t)=>(u(),c(y,{class:"py-4"},{default:e(()=>[a(m,{class:"mb-4"},{default:e(()=>[a(V,{class:"text-center"},{default:e(()=>[t[2]||(t[2]=s("div",{class:"text-subtitle-1"},"Total Balance",-1)),s("div",{class:B(["text-h4 font-weight-bold",n.value>=0?"text-success":"text-error"])},l(n.value>=0?"+":"")+"₹"+l(n.value),3),s("div",J,[s("div",null,[t[0]||(t[0]=s("div",{class:"text-success-darken-1"},"You are owed",-1)),s("div",R,"₹"+l(x.value),1)]),a(h,{vertical:""}),s("div",null,[t[1]||(t[1]=s("div",{class:"text-error-darken-1"},"You owe",-1)),s("div",N,"₹"+l(b.value),1)])])]),_:1})]),_:1}),a(k,{class:"mb-4"},{default:e(()=>[a(p,{cols:"6"},{default:e(()=>[a(v,{to:"/groups/1/episodes/2/add-bill",block:"",color:"primary","prepend-icon":"mdi-plus",height:"48"},{default:e(()=>t[3]||(t[3]=[i(" Add Bill ")])),_:1})]),_:1}),a(p,{cols:"6"},{default:e(()=>[a(v,{block:"",to:"/groups/1/episodes/2/settle",color:"secondary","prepend-icon":"mdi-account-group",height:"48"},{default:e(()=>t[4]||(t[4]=[i(" Settle Up ")])),_:1})]),_:1})]),_:1}),a(m,{class:"mb-4"},{default:e(()=>[a(A,{class:"d-flex align-center py-3"},{default:e(()=>t[5]||(t[5]=[s("span",null,"Recent Activities",-1)])),_:1}),a(L,{lines:"three"},{default:e(()=>[(u(!0),w(S,null,C([...Array(100).keys()],q=>(u(),c(T,{key:o.value[0].id,ripple:!0},{prepend:e(()=>[a(I,{image:g(o.value[0].createdBy),size:"40"},null,8,["image"])]),append:e(()=>[s("div",G,[s("div",O,"₹"+l(o.value[0].amount),1)])]),default:e(()=>[a(z,{class:"font-weight-medium"},{default:e(()=>[i(l(o.value[0].title),1)]),_:1}),a(D,null,{default:e(()=>[s("div",U,[a(f,{size:"16",class:"mr-1"},{default:e(()=>t[6]||(t[6]=[i("mdi-account-group")])),_:1}),i(" "+l(o.value[0].members.length)+" people ",1),a(f,{size:"16",class:"ml-3 mr-1"},{default:e(()=>t[7]||(t[7]=[i("mdi-calendar")])),_:1}),i(" "+l(_(o.value[0].date)),1)]),s("div",j," Added by "+l(o.value[0].createdBy),1)]),_:1})]),_:1}))),128))]),_:1})]),_:1})]),_:1}))}};export{M as default};
