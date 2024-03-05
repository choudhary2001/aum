import{J as t,k as e,B as g,r as i,bb as y}from"./index.dff4e684.js";import{R as m,C as h}from"./Col.96fcbc17.js";import{U as N,A as x,a as b,b as v}from"./AccordionBody.d98e9024.js";import{P as A}from"./page-pricing.f76dfc98.js";import{i as w}from"./pricing-Illustration.cc247962.js";import{I as q}from"./App.37a2596a.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardText.dd9505fe.js";import"./ListGroup.0455201d.js";import"./ListGroupItem.29fd27f5.js";const P=({data:s})=>t("div",{className:"pricing-faq",children:[e("h3",{className:"text-center",children:"FAQ's"}),e("p",{className:"text-center mb-0",children:"Let us help answer the most common questions."}),e(m,{className:"mt-75 mb-2",children:e(h,{className:"mx-auto",sm:"12",lg:{size:10,offset:2},children:e(N,{className:"accordion-margin mt-2",defaultOpen:"0",children:s.map((a,r)=>t(x,{children:[e(b,{tag:"h2",targetId:String(r+1),children:a.question}),e(v,{accordionId:String(r+1),children:a.ans})]},r+1))})})})]}),S=()=>e("div",{className:"pricing-free-trial",children:e(m,{children:e(h,{className:"mx-auto",lg:{size:10,offset:3},sm:"12",children:t("div",{className:"pricing-trial-content d-flex justify-content-between",children:[t("div",{className:"text-center text-md-start mt-3",children:[e("h3",{className:"text-primary",children:"Still not convinced? Start with a 14-day FREE trial!"}),e("h5",{children:"You will get full access to with all the features for 14 days."}),e("div",{className:"mt-2 mt-lg-3",children:e(g,{color:"primary",children:"Start 14-day FREE trial"})})]}),e("img",{className:"pricing-trial-img img-fluid",src:w,alt:"trial svg",style:{transform:"scaleX(1)"}})]})})})}),C=({duration:s,setDuration:a})=>t("div",{className:"text-center",children:[e("h1",{className:"mt-5",children:"Pricing Plans"}),e("p",{className:"mb-2 pb-75",children:"All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs."}),t("div",{className:"d-flex align-items-center justify-content-center mb-5 pb-50",children:[e("h6",{className:"me-50 mb-0",children:"Monthly"}),e("div",{className:"form-switch",children:e(q,{id:"plan-switch",type:"switch",checked:s==="yearly",onChange:n=>{n.target.checked?a("yearly"):a("monthly")}})}),e("h6",{className:"ms-50 mb-0",children:"Annually"})]})]}),D=()=>{const[s,a]=i.exports.useState(null),[r,n]=i.exports.useState(null),[c,p]=i.exports.useState("monthly");return i.exports.useEffect(()=>{y.get("/pricing/data").then(u=>{const l=[],o=[];Object.entries(u.data).forEach(([f,d])=>{f!=="qandA"?(l.push(d),a([...l])):(o.push(d),n(o[0]))})})},[]),t("div",{id:"pricing-table",children:[e(C,{duration:c,setDuration:p}),s!==null&&r!==null?t(i.exports.Fragment,{children:[e(A,{data:s,duration:c}),e(S,{}),e(P,{data:r})]}):null]})};export{D as default};