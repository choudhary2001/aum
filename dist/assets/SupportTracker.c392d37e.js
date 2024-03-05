import{r as n,bb as m,J as a,k as e}from"./index.dff4e684.js";import{_ as p}from"./react-apexcharts.min.efbc7a04.js";import{R as f,C as c}from"./Col.96fcbc17.js";import{U as h,h as u,i as b,j as N}from"./App.37a2596a.js";import{C as g}from"./Card.514988a9.js";import{C as k}from"./CardBody.8c73518d.js";import{C as w}from"./CardHeader.5294cf1e.js";import{C as s}from"./CardText.dd9505fe.js";import{C as x}from"./CardTitle.aebc4d98.js";const B=o=>{const[r,l]=n.exports.useState(null);n.exports.useEffect(()=>(m.get("/card/card-analytics/support-tracker").then(t=>l(t.data)),()=>l(null)),[]);const d={plotOptions:{radialBar:{size:150,offsetY:20,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{name:{offsetY:-5,fontFamily:"Montserrat",fontSize:"1rem"},value:{offsetY:15,fontFamily:"Montserrat",fontSize:"1.714rem"}}}},colors:[o.danger],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:[o.primary],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},labels:["Completed Tickets"]},i=[83];return r!==null?a(g,{children:[a(w,{className:"pb-0",children:[e(x,{tag:"h4",children:r.title}),a(h,{className:"chart-dropdown",children:[e(u,{color:"",className:"bg-transparent btn-sm border-0 p-50",children:"Last 7 days"}),e(b,{end:!0,children:r.last_days.map(t=>e(N,{className:"w-100",children:t},t))})]})]}),a(k,{children:[a(f,{children:[a(c,{sm:"2",className:"d-flex flex-column flex-wrap text-center",children:[e("h1",{className:"font-large-2 fw-bolder mt-2 mb-0",children:r.totalTicket}),e(s,{children:"Tickets"})]}),e(c,{sm:"10",className:"d-flex justify-content-center",children:e(p,{options:d,series:i,type:"radialBar",height:270,id:"support-tracker-card"})})]}),a("div",{className:"d-flex justify-content-between mt-1",children:[a("div",{className:"text-center",children:[e(s,{className:"mb-50",children:"New Tickets"}),e("span",{className:"font-large-1 fw-bold",children:r.newTicket})]}),a("div",{className:"text-center",children:[e(s,{className:"mb-50",children:"Open Tickets"}),e("span",{className:"font-large-1 fw-bold",children:r.openTicket})]}),a("div",{className:"text-center",children:[e(s,{className:"mb-50",children:"Response Time"}),a("span",{className:"font-large-1 fw-bold",children:[r.responseTime,"d"]})]})]})]})]}):null};export{B as S};