import{r as t,bb as y,J as a,k as e,B as d,P as M}from"./index.dff4e684.js";import{S as W}from"./index.7e1ad8b2.js";import{R as H,s as J}from"./slidedown.33f09a82.js";import{F as g}from"./index.6984882e.js";import{S as x,c as Y}from"./react-select.esm.82b43af0.js";import{I as i,s as C,X as Z}from"./App.37a2596a.js";import{R as o,C as s}from"./Col.96fcbc17.js";import{C as S}from"./Card.514988a9.js";import{C as m}from"./CardBody.8c73518d.js";import{C as p}from"./CardText.dd9505fe.js";import{F as q}from"./Form.f1a34b24.js";import{I as K,a as Q}from"./InputGroupText.9c960290.js";import{L as n}from"./Label.138433f0.js";/* empty css                  *//* empty css                    */import{H as X}from"./hash.13af80a4.js";import{P as w}from"./plus.6e4346f7.js";import"./ModalBody.fe13b04c.js";import"./Portal.330fdcf6.js";import"./Fade.f1e5f77c.js";import"./ModalHeader.73c2755d.js";import"./tslib.17479ed9.js";import"./emotion-memoize.esm.06f0e458.js";const _=()=>{const[N,k]=t.exports.useState(1),[F,A]=t.exports.useState({}),[v,h]=t.exports.useState(!1),[b,D]=t.exports.useState(null),[c,I]=t.exports.useState(null),[L,P]=t.exports.useState(new Date),[T,B]=t.exports.useState(!1),[z,E]=t.exports.useState(new Date),[f,j]=t.exports.useState([{value:"add-new",label:"Add New Customer",type:"button",color:"flat-success"}]);t.exports.useEffect(()=>{y.get("/api/invoice/clients").then(l=>{const r=f;l.data.map(u=>r.push({value:u.name,label:u.name})),j([...r]),D(l.data)}),y.get("/apps/invoice/invoices",{q:"",page:1,status:"",sort:"asc",perPage:10,sortColumn:"id"}).then(l=>{const r=Math.max.apply(Math,l.data.allData.map(u=>u.id));B(r+1)})},[]);const G=l=>{l.preventDefault(),l.target.closest(".repeater-wrapper").remove()},O=()=>h(!v),R=[{value:"australia",label:"Australia"},{value:"canada",label:"Canada"},{value:"russia",label:"Russia"},{value:"saudi-arabia",label:"Saudi Arabia"},{value:"singapore",label:"Singapore"},{value:"sweden",label:"Sweden"},{value:"switzerland",label:"Switzerland"},{value:"united-kingdom",label:"United Kingdom"},{value:"united-arab-emirates",label:"United Arab Emirates"},{value:"united-states-of-america",label:"United States of America"}],U=({data:l,...r})=>l.type==="button"?a(d,{className:"text-start rounded-0 px-50",color:l.color,block:!0,onClick:()=>h(!0),children:[e(w,{className:"font-medium-1 me-50"}),e("span",{className:"align-middle",children:l.label})]}):a(Y.Option,{...r,children:[" ",l.label," "]}),V=l=>{A(l),I(b.filter(r=>r.name===l.value)[0])},$="It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!";return a(t.exports.Fragment,{children:[a(S,{className:"invoice-preview-card",children:[e(m,{className:"invoice-padding pb-0",children:a("div",{className:"d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0",children:[a("div",{children:[a("div",{className:"logo-wrapper",children:[a("svg",{viewBox:"0 0 139 95",version:"1.1",height:"24",children:[a("defs",{children:[a("linearGradient",{id:"invoice-linearGradient-1",x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",children:[e("stop",{stopColor:"#000000",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),a("linearGradient",{id:"invoice-linearGradient-2",x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",children:[e("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),e("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{transform:"translate(-400.000000, -178.000000)",children:a("g",{transform:"translate(400.000000, 178.000000)",children:[e("path",{className:"text-primary",d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",style:{fill:"currentColor"}}),e("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",fill:"url(#invoice-linearGradient-1)",opacity:"0.2"}),e("polygon",{fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),e("polygon",{fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),e("polygon",{fill:"url(#invoice-linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),e("h3",{className:"text-primary invoice-logo",children:"Vuexy"})]}),e("p",{className:"card-text mb-25",children:"Office 149, 450 South Brand Brooklyn"}),e("p",{className:"card-text mb-25",children:"San Diego County, CA 91905, USA"}),e("p",{className:"card-text mb-0",children:"+1 (123) 456 7891, +44 (876) 543 2198"})]}),a("div",{className:"invoice-number-date mt-md-0 mt-2",children:[a("div",{className:"d-flex align-items-center justify-content-md-end mb-1",children:[e("h4",{className:"invoice-title",children:"Invoice"}),a(K,{className:"input-group-merge invoice-edit-input-group disabled",children:[e(Q,{children:e(X,{size:15})}),e(i,{type:"number",className:"invoice-edit-input",value:T||3171,placeholder:"53634",disabled:!0})]})]}),a("div",{className:"d-flex align-items-center mb-1",children:[e("span",{className:"title",children:"Date:"}),e(g,{value:L,onChange:l=>P(l),className:"form-control invoice-edit-input date-picker"})]}),a("div",{className:"d-flex align-items-center",children:[e("span",{className:"title",children:"Due Date:"}),e(g,{value:z,onChange:l=>E(l),className:"form-control invoice-edit-input due-date-picker"})]})]})]})}),e("hr",{className:"invoice-spacing"}),e(m,{className:"invoice-padding pt-0",children:a(o,{className:"row-bill-to invoice-spacing",children:[a(s,{className:"col-bill-to ps-0",xl:"8",children:[e("h6",{className:"invoice-to-title",children:"Invoice To:"}),e("div",{className:"invoice-customer",children:b!==null?a(t.exports.Fragment,{children:[e(x,{className:"react-select",classNamePrefix:"select",id:"label",value:F,options:f,theme:C,components:{Option:U},onChange:V}),c!==null?a("div",{className:"customer-details mt-1",children:[e("p",{className:"mb-25",children:c.name}),e("p",{className:"mb-25",children:c.company}),e("p",{className:"mb-25",children:c.address}),e("p",{className:"mb-25",children:c.country}),e("p",{className:"mb-0",children:c.contact}),e("p",{className:"mb-0",children:c.companyEmail})]}):null]}):null})]}),a(s,{className:"pe-0 mt-xl-0 mt-2",xl:"4",children:[e("h6",{className:"mb-2",children:"Payment Details:"}),e("table",{children:a("tbody",{children:[a("tr",{children:[e("td",{className:"pe-1",children:"Total Due:"}),e("td",{children:e("span",{className:"fw-bolder",children:"$12,110.55"})})]}),a("tr",{children:[e("td",{className:"pe-1",children:"Bank name:"}),e("td",{children:"American Bank"})]}),a("tr",{children:[e("td",{className:"pe-1",children:"Country:"}),e("td",{children:"United States"})]}),a("tr",{children:[e("td",{className:"pe-1",children:"IBAN:"}),e("td",{children:"ETD95476213874685"})]}),a("tr",{children:[e("td",{className:"pe-1",children:"SWIFT code:"}),e("td",{children:"BR91905"})]})]})})]})]})}),a(m,{className:"invoice-padding invoice-product-details",children:[e(H,{count:N,children:l=>{const r=l===0?"div":J.SlideDown;return e(r,{className:"repeater-wrapper",children:e(o,{children:a(s,{className:"d-flex product-details-border position-relative pe-0",sm:"12",children:[a(o,{className:"w-100 pe-lg-0 pe-1 py-2",children:[a(s,{className:"mb-lg-0 mb-2 mt-lg-0 mt-2",lg:"5",sm:"12",children:[e(p,{className:"col-title mb-md-50 mb-0",children:"Item"}),a(i,{type:"select",className:"item-details",children:[e("option",{children:"App Design"}),e("option",{children:"App Customization"}),e("option",{children:"ABC Template"}),e("option",{children:"App Development"})]}),e(i,{className:"mt-2",type:"textarea",rows:"1",defaultValue:"Customization & Bug Fixes"})]}),a(s,{className:"my-lg-0 my-2",lg:"3",sm:"12",children:[e(p,{className:"col-title mb-md-2 mb-0",children:"Cost"}),e(i,{type:"number",defaultValue:"24",placeholder:"24"}),a("div",{className:"mt-2",children:[e("span",{children:"Discount:"})," ",e("span",{children:"0%"})]})]}),a(s,{className:"my-lg-0 my-2",lg:"2",sm:"12",children:[e(p,{className:"col-title mb-md-2 mb-0",children:"Qty"}),e(i,{type:"number",defaultValue:"1",placeholder:"1"})]}),a(s,{className:"my-lg-0 mt-2",lg:"2",sm:"12",children:[e(p,{className:"col-title mb-md-50 mb-0",children:"Price"}),e(p,{className:"mb-0",children:"$24.00"})]})]}),e("div",{className:"d-flex justify-content-center border-start invoice-product-actions py-50 px-25",children:e(Z,{size:18,className:"cursor-pointer",onClick:G})})]})})},l)}}),e(o,{className:"mt-1",children:e(s,{sm:"12",className:"px-0",children:a(d,{color:"primary",size:"sm",className:"btn-add-new",onClick:()=>k(N+1),children:[e(w,{size:14,className:"me-25"})," ",e("span",{className:"align-middle",children:"Add Item"})]})})})]}),e(m,{className:"invoice-padding",children:a(o,{className:"invoice-sales-total-wrapper",children:[e(s,{className:"mt-md-0 mt-3",md:{size:"6",order:1},xs:{size:12,order:2},children:a("div",{className:"d-flex align-items-center mb-1",children:[e(n,{for:"salesperson",className:"form-label",children:"Salesperson:"}),e(i,{type:"text",className:"ms-50",id:"salesperson",placeholder:"Edward Crowley"})]})}),e(s,{className:"d-flex justify-content-end",md:{size:"6",order:2},xs:{size:12,order:1},children:a("div",{className:"invoice-total-wrapper",children:[a("div",{className:"invoice-total-item",children:[e("p",{className:"invoice-total-title",children:"Subtotal:"}),e("p",{className:"invoice-total-amount",children:"$1800"})]}),a("div",{className:"invoice-total-item",children:[e("p",{className:"invoice-total-title",children:"Discount:"}),e("p",{className:"invoice-total-amount",children:"$28"})]}),a("div",{className:"invoice-total-item",children:[e("p",{className:"invoice-total-title",children:"Tax:"}),e("p",{className:"invoice-total-amount",children:"21%"})]}),e("hr",{className:"my-50"}),a("div",{className:"invoice-total-item",children:[e("p",{className:"invoice-total-title",children:"Total:"}),e("p",{className:"invoice-total-amount",children:"$1690"})]})]})})]})}),e("hr",{className:"invoice-spacing mt-0"}),e(m,{className:"invoice-padding py-0",children:e(o,{children:e(s,{children:a("div",{className:"mb-2",children:[e(n,{for:"note",className:"form-label fw-bold",children:"Note:"}),e(i,{type:"textarea",rows:"2",id:"note",defaultValue:$})]})})})})]}),e(W,{size:"lg",open:v,title:"Add Payment",headerClassName:"mb-1",contentClassName:"p-0",toggleSidebar:O,children:a(q,{children:[a("div",{className:"mb-2",children:[e(n,{for:"customer-name",className:"form-label",children:"Customer Name"}),e(i,{id:"customer-name",placeholder:"John Doe"})]}),a("div",{className:"mb-2",children:[e(n,{for:"customer-email",className:"form-label",children:"Customer Email"}),e(i,{type:"email",id:"customer-email",placeholder:"example@domain.com"})]}),a("div",{className:"mb-2",children:[e(n,{for:"customer-address",className:"form-label",children:"Customer Address"}),e(i,{type:"textarea",cols:"2",rows:"2",id:"customer-address",placeholder:"1307 Lady Bug Drive New York"})]}),a("div",{className:"mb-2",children:[e(n,{for:"country",className:"form-label",children:"Country"}),e(x,{theme:C,className:"react-select",classNamePrefix:"select",options:R,isClearable:!1})]}),a("div",{className:"mb-2",children:[e(n,{for:"customer-contact",className:"form-label",children:"Contact"}),e(i,{type:"number",id:"customer-contact",placeholder:"763-242-9206"})]}),a("div",{className:"d-flex flex-wrap my-2",children:[e(d,{className:"me-1",color:"primary",onClick:()=>h(!1),children:"Add"}),e(d,{color:"secondary",onClick:()=>h(!1),outline:!0,children:"Cancel"})]})]})})]})},ee=()=>a(t.exports.Fragment,{children:[e(S,{className:"invoice-action-wrapper",children:a(m,{children:[e(d,{color:"primary",block:!0,className:"mb-75",disabled:!0,children:"Send Invoice"}),e(d,{tag:M,to:"/apps/invoice/preview",color:"primary",block:!0,outline:!0,className:"mb-75",children:"Preview"}),e(d,{color:"primary",block:!0,outline:!0,children:"Save"})]})}),a("div",{className:"mt-2",children:[a("div",{className:"invoice-payment-option",children:[e("p",{className:"mb-50",children:"Accept payments via"}),a(i,{type:"select",id:"payment-select",children:[e("option",{children:"Debit Card"}),e("option",{children:"Credit Card"}),e("option",{children:"Paypal"}),e("option",{children:"Internet Banking"}),e("option",{children:"UPI Transfer"})]})]}),a("div",{className:"invoice-terms mt-1",children:[a("div",{className:"d-flex justify-content-between",children:[e("label",{className:"cursor-pointer mb-0",htmlFor:"payment-terms",children:"Payment Terms"}),e("div",{className:"form-switch",children:e(i,{type:"switch",id:"payment-terms",defaultChecked:!0})})]}),a("div",{className:"d-flex justify-content-between py-1",children:[e("label",{className:"cursor-pointer mb-0",htmlFor:"client-notes",children:"Client Notes"}),e("div",{className:"form-switch",children:e(i,{type:"switch",id:"client-notes",defaultChecked:!0})})]}),a("div",{className:"d-flex justify-content-between",children:[e("label",{className:"cursor-pointer mb-0",htmlFor:"payment-stub",children:"Payment Stub"}),e("div",{className:"form-switch",children:e(i,{type:"switch",id:"payment-stub"})})]})]})]})]}),Se=()=>e("div",{className:"invoice-add-wrapper",children:a(o,{className:"invoice-add",children:[e(s,{xl:9,md:8,sm:12,children:e(_,{})}),e(s,{xl:3,md:4,sm:12,children:e(ee,{})})]})});export{Se as default};