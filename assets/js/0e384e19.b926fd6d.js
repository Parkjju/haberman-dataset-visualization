"use strict";(self.webpackChunkhaberman_dataset_visualization=self.webpackChunkhaberman_dataset_visualization||[]).push([[671],{1667:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>A,contentTitle:()=>D,default:()=>I,frontMatter:()=>E,metadata:()=>Z,toc:()=>P});var n=a(7462),l=a(7294),r=a(3905),i=a(5750),o=a(6495),s=a(9473);i.kL.register(i.uw,i.f$,i.od,i.jn,i.Dx,i.u,i.De);let d=[];for(let z=30;z<80;z+=1)d.push(z);function u(){const e=(0,s.v9)((e=>e.graph));d=d.map((e=>String(e))),(0,l.useEffect)((()=>{a({labels:d,datasets:[...Object.values(e).map(((e,t)=>({label:`Dataset ${t}`,data:e,borderColor:`#${Math.floor(16777215*Math.random()).toString(16)}`,backgroundColor:`#${Math.floor(16777215*Math.random()).toString(16)}`,yAxisID:"y"})))]})}),[e]);const[t,a]=(0,l.useState)({labels:d,datasets:[...Object.values(e).map(((e,t)=>({label:`Dataset ${t}`,data:e,borderColor:`#${Math.floor(16777215*Math.random()).toString(16)}`,backgroundColor:`#${Math.floor(16777215*Math.random()).toString(16)}`,yAxisID:"y"})))]});return l.createElement(o.x1,{options:{elements:{point:{radius:0}},responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,plugins:{title:{display:!0,text:"Chart.js Line Chart - Multi Axis"}},scales:{y:{type:"linear",display:!0,position:"left"},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1}}}},data:t})}var c=a(913),p=a(4750),m=a(5071),h=a(4554),v=a(8456),g=a(3321),x=a(186);const b=x.ZP.div`
    width: 60%;
    margin: 20px auto;
    display: flex;
    height: auto;
    justify-content: space-between;
    @media (max-width: 720px) and (min-width: 540px) {
        width: 80%;
        min-width: 200px;
    }
    @media (max-width: 539px) {
        width: 40%;
        flex-direction: column;
    }
`,f=x.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;var k=a(6154);k.Z.defaults.baseURL="http://ec2-43-200-171-40.ap-northeast-2.compute.amazonaws.com";const y=()=>k.Z.get("/patients/random"),C=e=>{let{queryKey:t}=e;const[a,n,l,r,i]=t;return k.Z.get("/patients/predict/",{params:{age:n,operation_year:l,nb_pos_detected:r,surv:i?1:2}})};var M=a(8767),S=a(554);const w=()=>{const[e,t]=(0,l.useState)(!1),[a,n]=(0,l.useState)(!1),r=(0,s.I0)(),[i,o]=(0,l.useState)(30),[d,u]=(0,l.useState)(0),[x,k]=(0,l.useState)(60),{isLoading:w,refetch:E}=(0,M.useQuery)(["graphData"],y,{onSuccess:e=>{r(S.M.update(e.data.results))},refetchOnWindowFocus:!1}),D=(0,M.useQuery)(["predictData",i,x,d,a],C,{refetchOnWindowFocus:!1});return l.createElement(f,null,l.createElement(c.Z,null,l.createElement(p.Z,{sx:{margin:"0px auto"},label:"\ub370\uc774\ud130 \ucd94\uac00\ud558\uae30",control:l.createElement(m.Z,{checked:e,label:"\ub370\uc774\ud130 \ucd94\uac00\ud558\uae30",onChange:()=>{t((e=>!e))},inputProps:{"aria-label":"controlled"}})})),e?l.createElement(l.Fragment,null,l.createElement(b,null,l.createElement(h.Z,{type:"number",id:"outlined-basic",label:"Age",variant:"outlined",sx:{marginBottom:"20px"},value:i,onChange:e=>o(e.target.value)}),l.createElement(h.Z,{id:"outlined-basic",label:"Operation year",variant:"outlined",type:"number",value:x,onChange:e=>k(e.target.value)})),l.createElement(b,{style:{flexDirection:"column",alignItems:"flex-start"}},l.createElement(h.Z,{type:"number",id:"outlined-basic",label:"Number of positive detected",variant:"outlined",sx:{marginBottom:"20px"},value:d,onChange:e=>u(e.target.value)}),l.createElement(p.Z,{control:l.createElement(m.Z,{checked:a,label:"\uc0dd\uc874\uc5ec\ubd80",onChange:()=>{n((e=>!e))},inputProps:{"aria-label":"controlled"}}),label:"\uc0dd\uc874 \uc5ec\ubd80"}))):null,w?l.createElement(v.Z,null):e?l.createElement(g.Z,{sx:{width:"30%",margin:"0px auto"},variant:"contained",onClick:()=>{D.refetch(),r(S.M.add(D.data.data.results[0]))}},"Append data"):null,w?l.createElement(v.Z,null):e?null:l.createElement(g.Z,{sx:{width:"30%",margin:"0px auto"},variant:"contained",onClick:()=>{E()}},"Select random Data"))},E={sidebar_position:1},D="Survival Analysis",Z={unversionedId:"intro",id:"intro",title:"Survival Analysis",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/haberman-dataset-visualization/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar"},A={},P=[{value:"Getting Started",id:"getting-started",level:2},{value:"4.2 Censored Data",id:"42-censored-data",level:2},{value:"4.3 Kaplan-Meier",id:"43-kaplan-meier",level:2},{value:"4.4 Cox PH model",id:"44-cox-ph-model",level:2},{value:"4.5 Reference",id:"45-reference",level:2}],K={toc:P},_="wrapper";function I(e){let{components:t,...a}=e;return(0,r.kt)(_,(0,n.Z)({},K,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"survival-analysis"},"Survival Analysis"),(0,r.kt)("p",null,"Let's discover ",(0,r.kt)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,r.kt)(u,{mdxType:"MyChart"}),(0,r.kt)(w,{mdxType:"ButtonGroup"}),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"\uc0dd\uc874\ubd84\uc11d\uc740 \uc2dc\uac04\uc758 \ud750\ub984\uc5d0 \ub530\ub978 \uc5b4\ub5a0\ud55c \uc0ac\uac74\uc758 \ubc1c\uc0dd \ud655\ub960\uc744 \uc54c\uc544\ubcf4\ub294 \ud1b5\uacc4 \ubd84\uc11d \ubc0f \uc608\uce21 \uae30\ubc95\uc774\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc758\ub8cc\ubd84\uc57c\uc5d0\uc11c \ud2b9\uc815 \uc218\uc220 \ubc29\ubc95 \ud639\uc740 \uce58\ub8cc \ubc29\ubc95\uc5d0 \ub530\ub978 \ud658\uc790\uc758 \uc0dd\uc874 \uae30\uac04\uc744 \ubd84\uc11d\ud560 \ub54c \ud65c\uc6a9\ud558\uac70\ub098, \uc77c\ubc18\uc801\uc778 IT \ubd84\uc57c\uc5d0\uc11c\ub294 \uc2dc\uac04\uc5d0 \ub530\ub978 \uc0ac\uc6a9\uc790 \uc774\ud0c8 \ubd84\uc11d\uc5d0\ub3c4 \ud65c\uc6a9\ud55c\ub2e4. \uc77c\ubc18\uc801\uc73c\ub85c \uc0dd\uc874\ud568\uc218(survival function) S(t)\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud55c\ub2e4."),(0,r.kt)("p",null,"\uc704\uc640 \uac19\uc774 \ud2b9\uc815 \uc2dc\uac04 t\ubcf4\ub2e4 \uc624\ub798 \uc0dd\uc874\ud560 \ud655\ub960\uc744 \ub73b\ud558\ub294 \uc0dd\uc874\ud568\uc218\uac00 \uc788\ub294 \ubc18\uba74, \uc704\ud5d8\ud568\uc218(hazard function)\ub294 t\uc2dc\uc810 \uc9c1\ud6c4 \uc0ac\ub9dd\ud560 \ud655\ub960\uc744 \uc758\ubbf8\ud55c\ub2e4. \ud754\ud788 \uc0dd\uc874\ubd84\uc11d\uc5d0\uc11c\ub294 \uc704\ud5d8\ud568\uc218\uac00 \uc2dc\uac04\uc5d0 \ub530\ub77c \ubcc0\ud558\ub294 \ucd94\uc138\ub97c \uc2dc\uac04\uc5d0 \ub530\ub978 \uc704\ud5d8\uc758 \ubcc0\ud654\ub85c \ub098\ud0c0\ub0b4\uae30 \ub54c\ubb38\uc5d0 \uc704\ud5d8\ud568\uc218\uac00 \uac16\ub294 \uc758\ubbf8\uac00 \ud06c\ub2e4. \uc704\ud5d8\ud568\uc218\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \uc815\uc758\ud55c\ub2e4."),(0,r.kt)("p",null,"\uc704\ud5d8\ud568\uc218\ub294 \uc815\uc758\uc5d0\uc11c \ubcf4\ub2e4\uc2dc\ud53c \uc21c\uac04\uc801\uc778 \uc9e7\uc740 \uc2dc\uac04\uc5d0 \uc77c\uc5b4\ub098\ub294 \uadf9\ud55c\uc758 \uc758\ubbf8\ub97c \uc9c0\ub2cc\ub2e4."),(0,r.kt)("h2",{id:"42-censored-data"},"4.2 Censored Data"),(0,r.kt)("p",null,"\uc0dd\uc874\ubd84\uc11d \uc2dc \uad00\ucc30\uc774 \uc885\ub8cc\ub418\ub294 \uc2dc\uc810 \uc0ac\uc774\uc5d0\uc11c \uc0ac\uac74 \ubc1c\uc0dd \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc218 \uc5c6\ub294 \uc790\ub8cc\ub97c \uc911\ub3c4\uc808\ub2e8(censored) \uc790\ub8cc\ub77c\uace0 \ud55c\ub2e4. \uc77c\ubc18\uc801\uc778 \ud1b5\uacc4\ubd84\uc11d \ubc29\ubc95\uacfc\ub294 \ub2e4\ub974\uac8c \uc0dd\uc874\ubd84\uc11d\uc5d0\uc11c\ub294 \uc774\ub7f0 \uc790\ub8cc\ub97c \ud3ec\ud568\ud558\uc5ec \ubd84\uc11d\uc744 \uc9c4\ud589\ud55c\ub2e4. \uc911\ub3c4\uc808\ub2e8 \uc885\ub958\ub294 \ub2e4\uc591\ud55c\ub370 left censoring(\uc88c\uc911\ub3c4\uc808\ub2e8)\uc740 \uc2e4\uc81c \uac12\uc774 \ud2b9\uc815 \uac12 \uc774\ud558\uc778 \uac83\uc740 \uc54c\uace0 \uc788\uc9c0\ub9cc \uadf8 \uac12\uc774 \uc815\ud655\ud788 \uc5b4\ub5a4 \uac12\uc778\uc9c0 \ubaa8\ub97c \ub54c \ubc1c\uc0dd\ud55c\ub2e4. right censoring(\uc6b0\uc911\ub3c4\uc808\ub2e8)\uc740 \uc2e4\uc81c \uac12\uc774 \ud2b9\uc815 \uac12 \uc774\uc0c1\uc778 \uac83\uc740 \uc54c\uace0 \uc788\uc73c\ub098 \uadf8 \uac12\uc774 \uc815\ud655\ud788 \uc5b4\ub5a4 \uac12\uc778\uc9c0 \ubaa8\ub97c \ub54c \ubc1c\uc0dd\ud55c\ub2e4."),(0,r.kt)("h2",{id:"43-kaplan-meier"},"4.3 Kaplan-Meier"),(0,r.kt)("p",null,"\uc0dd\uc874 \ubd84\uc11d\uc5d0\uc11c \ud2b9\uc815\uc2dc\uae30\ubcf4\ub2e4 \ub354 \uc624\ub798 \uc0dd\uc874\ud560 \ud655\ub960\uc744 \ucd94\uc815\ud558\ub294 \uac83\uc744 \u2018\uc0dd\uc874\ud568\uc218\u2019\ub77c\uace0 \ud558\ub294\ub370 \uc77c\ubc18\uc801\uc73c\ub85c Kaplan-Meier \ubc29\ubc95\uc744 \ud1b5\ud574 \ucd94\uc815\ud560 \uc218 \uc788\ub2e4. Kaplan-Meier \ubc29\ubc95\uc740 \uc0ac\uac74 \ubc1c\uc0dd \uc2dc\uc810\ub9c8\ub2e4 \uc0dd\uc874\uc728\uc744 \uad6c\ud558\uace0 \ucd5c\uc885\uc801\uc73c\ub85c \ub204\uc801\uc0dd\uc874\uc728\uc744 \uc0b0\ucd9c\ud55c\ub2e4. \uad00\ucc30\uae30\uac04 \uc21c\uc11c\ub300\ub85c \uc790\ub8cc\ub97c \uc815\ub82c\ud558\uace0 \uac01 \uad6c\uac04\ubcc4\ub85c \uc0dd\uc874\uc790\uc218\uc758 \ube44\uc728\uc778 \uad6c\uac04\uc0dd\uc874\uc728 P(t)\ub97c \uad6c\ud55c\ub2e4. \ub204\uc801\uc0dd\uc874\uc728 S(t)\ub294 \uad6c\uac04\ubcc4 \uad6c\uac04\uc0dd\uc874\uc728\uc744 \uacf1\ud574\uc11c \uc0b0\ucd9c\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,"x\ucd95\uc740 \uc2dc\uac04 t\ub97c \ub098\ud0c0\ub0b4\uba70 y\ucd95\uc740 \ub300\uc0c1\uc774 \uc2dc\uac04 t \uc774\ud6c4\uc5d0\ub3c4 \uc0ac\uac74\uc744 \uacbd\ud5d8\ud558\uc9c0 \ubabb\ud560 \ud655\ub960\uc744 \ub098\ud0c0\ub0b8\ub2e4. Kaplan-Meier curve\ub97c \ud1b5\ud574 \ud2b9\uc815 \uc2dc\uc810\uc758 \uc0dd\uc874\uc728\uc744 \ucd94\uc815\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("h2",{id:"44-cox-ph-model"},"4.4 Cox PH model"),(0,r.kt)("p",null,"Cox\ube44\ub840\uc704\ud5d8\ubaa8\ud615(Cox proportional hazard model)\uc740 \uc0dd\uc874\uae30\uac04\uacfc \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \uc5ec\ub7ec \uc694\uc778\uc744 \uc54c\uc544\ubcf4\ub294 \ubd84\uc11d\uc774\ub2e4. Kaplan-meier\uc774 \uc0ac\uac74\uc774 \ubc1c\uc0dd\ud55c \uac83\uc5d0 \ucd08\uc810\uc744 \ub454\ub2e4\uba74, Cox\ubd84\uc11d\uc740 \uc0dd\uc874\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294 \uc5ec\ub7ec \uc704\ud5d8\uc694\uc18c\uc5d0 \ub300\ud574 \ubd84\uc11d\ud55c\ub2e4. \ub530\ub77c\uc11c Kaplan-Meier \ubd84\uc11d\uc774 \uc9d1\uc911\ud558\ub294 \ud2b9\uc131 \uc678\uc758 \ub2e4\ub978 \uc694\uc778\uc740 \ud1b5\uc81c\ud560 \uc218 \uc5c6\ub2e4\ub294 \ud55c\uacc4\uac00 \uc788\uae30 \ub54c\ubb38\uc5d0 Cox \ube44\ub840\uc704\ud5d8\ubaa8\ud615\uc744 \uc0ac\uc6a9\ud55c\ub2e4. \ub610\ud55c, \uc774 \ubaa8\ud615\uc740 \uc0dd\uc874\uc2dc\uac04\uc5d0 \ub300\ud574 \uc5b4\ub5a0\ud55c \ubd84\ud3ec\ud615\ud0dc\ub3c4 \uac00\uc815\ud558\uc9c0 \uc54a\uc73c\ubbc0\ub85c \ube44\ubaa8\uc218\uc801\uc774\uba74\uc11c \ubaa8\ud615\uc5d0 \uadfc\uac70\ud55c \ud68c\uadc0\uacc4\uc218\ub97c \ucd94\uc815\ud55c\ub2e4\ub294 \uc810\uc5d0\uc11c semiparametric \ubaa8\ud615\uc774\ub77c\uace0\ub3c4 \ud55c\ub2e4."),(0,r.kt)("p",null,"Cox PH \ubaa8\ud615\uc740 \ub2e4\uc591\ud55c \uad00\uce21\uce58\ub4e4\uc744 \ub3d9\uc2dc\uc5d0 \ud1b5\uc81c\ud558\uc5ec, \uc0ac\uac74 \ubc1c\uc0dd\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \ubd84\uc11d\ud558\ub294 \ub2e4\ubcc0\ub7c9 \ubd84\uc11d\ubc95\uc774\ub2e4. \ub610\ud55c \uc0dd\uc874\ud568\uc218\uac00 \uc9c0\uc218\ud568\uc218(Exponential Function)\ub97c \ub530\ub978\ub2e4\ub294 \uac83\uacfc \ub450 \uad70\uc758 \uc704\ud5d8\ube44\uac00 \uc5f0\uad6c\uae30\uac04\ub3d9\uc548 \uc77c\uc815\ud558\uac8c \uc720\uc9c0\ub41c\ub2e4\ub294 \ube44\ub840\uc704\ud5d8\uac00\uc815, \uc774 \ub450 \uac00\uc9c0 \uac00\uc815\uc774 \uc694\uad6c\ub41c\ub2e4. \ud2b9\uc815 \uc2dc\uc810\uc5d0\uc11c\uc758 \uc0dd\uc874\ud568\uc218\ub294 \uc704\ud5d8\ube44\uc5d0 \ub300\ud55c \uc9c0\uc218\ud568\uc218\ub85c \ud45c\ud604\ub420 \uc218 \uc788\uc5b4\uc57c \ud558\uba70, \uc704\ud5d8\ube44\ub294 \uc5f0\uad6c\uae30\uac04 \ub0b4 \uc77c\uc815\ud558\uac8c \uc720\uc9c0\ub418\uc5b4\uc57c \ud55c\ub2e4. \uc774 \ubaa8\ud615\uc758 \uc2dd\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."),(0,r.kt)("p",null,"i\ubc88\uc9f8 \ud658\uc790\uc758 \uc608\ud6c4\ubcc0\uc218 \uac12\uc774 \uc774\uace0, \ub294 \ud68c\uadc0\ubaa8\ud615 \uacc4\uc218\uc774\uba70 \uacf5\ubcc0\ub7c9\uc758 \uc601\ud5a5\uc744 \uce21\uc815\ud55c\ub2e4. \ub9cc\uc57d \ubaa8\ub4e0 \uc608\ud6c4\ubcc0\uc218\uac00 0\uac12\uc744 \uac00\uc9c4\ub2e4\uba74 \uc704\ud5d8\ud568\uc218\uc5d0 \ubbf8\uce58\ub294 \ubcc0\uc218\uc758 \uc601\ud5a5\uc774 \uc5c6\ub2e4\ub294 \ub73b\uc774\uace0 \uc774\ub7f0 \uacbd\uc6b0\uc5d4 \uae30\ubcf8\uc801\uc73c\ub85c \uc704\ud5d8\ud568\uc218\uac00 \uac00 \ub418\ubbc0\ub85c \uc774\ub294 \uae30\uc800\uc704\ud5d8\ud568\uc218(baseline hazard function)\ub77c\uace0 \ud55c\ub2e4.\n\uc758 \ubd80\ud638\ub294 \ub300\uc0c1\uc758 \uc704\ud5d8\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce5c\ub2e4. \uac00 \uc591\uc218\uc77c \ub54c \uc0ac\uac74\uc758 \uc704\ud5d8\ub3c4\uac00 \ub354 \ub192\uae30 \ub54c\ubb38\uc5d0 \ud2b9\uc815 \ub300\uc0c1\uc5d0 \ub300\ud55c \uc0ac\uac74 \ubc1c\uc0dd \ud655\ub960\uc774 \ub354 \ub192\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. \ubc18\uba74 \uc74c\uc218\uc77c \ub54c\ub294 \uc0ac\uac74 \ubc1c\uc0dd \uc704\ud5d8\uc774 \ub354 \ub0ae\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. \ub610\ud55c \uac12\uc774 1\uacfc \uac19\ub2e4\uba74 \uc704\ud5d8\uc5d0 \uc601\ud5a5\uc744 \ubbf8\uce58\uc9c0 \uc54a\uace0 1\ubcf4\ub2e4 \uc791\uc740 \uac12\uc758 \uacbd\uc6b0 \uc704\ud5d8\ub3c4\uac00 \ub0ae\uc73c\uba70 1\ubcf4\ub2e4 \ud074 \uacbd\uc6b0 \uc704\ud5d8\ub3c4\uac00 \ub192\ub2e4\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4.\n\uc778\uac04\uc744 \ub300\uc0c1\uc73c\ub85c \ud558\ub294 \uc0dd\uc874\ubd84\uc11d\uc5d0\ub294 \uc218\ub9ce\uc740 \ubcc0\uc218\uac00 \uc874\uc7ac\ud558\uae30 \ub54c\ubb38\uc5d0 \ud558\uace0\uc790 \ud558\ub294 \uc5f0\uad6c\uc5d0 \ub9de\ub294 \uc608\ud6c4 \uc778\uc790\ub4e4\uc744 \uc870\uc815\ud558\uc5ec \uc6d0\ud558\ub294 \uacb0\uacfc\ub97c \ub3c4\ucd9c\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("h2",{id:"45-reference"},"4.5 Reference"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cox \ube44\ub840\uc704\ud5d8\ubaa8\ud615\uc744 \uc774\uc6a9\ud55c \uc6b0\uce21 \ub300\uc7a5\uc554 3\uae30 \uc790\ub8cc \ubd84\uc11d \u2013 \ud55c\uad6d\ub370\uc774\ud130\uc815\ubcf4\uacfc\ud559\ud68c : \ub17c\ubb38 \u2013 DBpia"),(0,r.kt)("li",{parentName:"ol"},"Survival analysis: Part I \u2014 analysis of time-to-event, Junyong In et al., Korean Journal of Anesthesiology, 2018"),(0,r.kt)("li",{parentName:"ol"},"\ubc15\ub09c\ud76c(2010). \uc0dd\uc874\ubd84\uc11d \uc790\ub8cc\ub97c \uc774\uc6a9\ud55c Cox\ube44\ub840\uc704\ud5d8\ud568\uc218\ubaa8\ud615\uc758 \uace0\ucc30. \uc11d\uc0ac\ud559\uc704\ub17c\ubb38. \uc774\ud654\uc5ec\uc790\ub300\ud559\uad50. \uc11c\uc6b8.")))}I.isMDXComponent=!0}}]);