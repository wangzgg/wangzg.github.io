var f=(c,g,l)=>new Promise((h,p)=>{var _=t=>{try{o(l.next(t))}catch(n){p(n)}},e=t=>{try{o(l.throw(t))}catch(n){p(n)}},o=t=>t.done?h(t.value):Promise.resolve(t.value).then(_,e);o((l=l.apply(c,g)).next())});import{_ as S}from"./_plugin-vue_export-helper-769736d6.js";import{E,b as I,a as B}from"./el-col-857ed269.js";import{r as D,o as i,e as u,d as s,b as a,w as d,F as m,f as v,g as H,c as N,t as y,p as F,j as V}from"./index-8d4ecac5.js";const k=c=>(F("data-v-ed97d0e1"),c=c(),V(),c),j={class:"main_context"},q={class:"content"},A=k(()=>s("div",{class:"title"},"您好，我是您的Nu Copilot数字助理",-1)),L=k(()=>s("div",{class:"subtitle"},"您可以在下方列表中，选择所需的数字助手辅助您完成业务。例如您可以选择核工业数字助手，来进行核工业领域的智能问答。",-1)),R=["onClick"],$={class:"sub_text"},z={class:"copyright"},G={__name:"Home",emits:["getClickStatus"],setup(c,{emit:g}){const l=g,h=e=>f(this,null,function*(){console.log(e),l("getClickStatus",e)}),p=[{type:"digital_briefing",name:"智慧差旅智能体Agent",icon:"icon_5.svg",sub_text:"提供一站式自主提交出差申请功能"}];let _=D([]);return _=p.reduce((e,o,t)=>(t%2===0?e.push([o]):e[e.length-1].push(o),e),[]),console.log("output->groupedData",_),(e,o)=>{const t=I,n=B,x=E;return i(),u(m,null,[s("div",j,[a(x,{gutter:16},{default:d(()=>[a(n,{span:1.5},{default:d(()=>[a(t,{style:{width:"40px",height:"40px"},src:"question_logo.svg"})]),_:1}),a(n,{span:22.5},{default:d(()=>[s("div",q,[A,L,(i(!0),u(m,null,v(H(_),(w,C)=>(i(),u("div",{style:{"margin-top":"24px"},key:C},[a(x,{gutter:13},{default:d(()=>[(i(!0),u(m,null,v(w,(r,b)=>(i(),N(n,{span:12,key:b},{default:d(()=>[s("div",{class:"grid-content",onClick:J=>h(r.type)},[a(t,{style:{width:"20px",height:"20px","margin-left":"14px","margin-top":"14px"},src:r.icon},null,8,["src"]),s("span",null,y(r.name),1),s("div",$,y(r.sub_text),1)],8,R)]),_:2},1024))),128))]),_:2},1024)]))),128))])]),_:1})]),_:1})]),s("div",z,[a(t,{style:{width:"372px",height:"25px","margin-left":"409px"},src:"copyright.svg"})])],64)}}},Q=S(G,[["__scopeId","data-v-ed97d0e1"]]);export{Q as default};
