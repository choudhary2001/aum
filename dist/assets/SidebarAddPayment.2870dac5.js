import{k as e,J as a,B as i,r as h}from"./index.dff4e684.js";import{S as c}from"./index.7e1ad8b2.js";import{I as l,n as p}from"./App.37a2596a.js";import{F as m}from"./Form.f1a34b24.js";import{L as n}from"./Label.138433f0.js";import{L as u}from"./link.d9d509d6.js";import{F as f}from"./index.6984882e.js";/* empty css                  *//* empty css                    */const P=({open:r,toggleSidebar:o})=>e(c,{size:"lg",open:r,title:"Send Invoice",headerClassName:"mb-1",contentClassName:"p-0",bodyClassName:"pb-sm-0 pb-3",toggleSidebar:o,children:a(m,{children:[a("div",{className:"mb-1",children:[e(n,{for:"invoice-from",className:"form-label",children:"From"}),e(l,{id:"invoice-from",defaultValue:"shelbyComapny@email.com",placeholder:"company@email.com"})]}),a("div",{className:"mb-1",children:[e(n,{for:"invoice-to",className:"form-label",children:"To"}),e(l,{id:"invoice-to",defaultValue:"qConsolidated@email.com",placeholder:"company@email.com"})]}),a("div",{className:"mb-1",children:[e(n,{for:"invoice-subject",className:"form-label",children:"Subject"}),e(l,{id:"invoice-subject",defaultValue:"Invoice of purchased Admin Templates",placeholder:"Invoice regarding goods"})]}),a("div",{className:"mb-1",children:[e(n,{for:"invoice-message",className:"form-label",children:"Message"}),e(l,{type:"textarea",cols:"3",rows:"11",id:"invoice-message",defaultValue:`Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019`})]}),e("div",{className:"mb-1",children:a(p,{color:"light-primary",children:[e(u,{className:"me-50",size:14}),e("span",{className:"align-middle",children:"Invoice Attached"})]})}),a("div",{className:"d-flex flex-wrap mt-2",children:[e(i,{className:"me-1",color:"primary",onClick:o,children:"Send"}),e(i,{color:"secondary",outline:!0,onClick:o,children:"Cancel"})]})]})}),S=({open:r,toggleSidebar:o})=>{const[s,t]=h.exports.useState(new Date);return e(c,{size:"lg",open:r,title:"Add Payment",headerClassName:"mb-1",contentClassName:"p-0",toggleSidebar:o,children:a(m,{children:[e("div",{className:"mb-1",children:e(l,{id:"balance",defaultValue:"Invoice Balance: 5000.00",disabled:!0})}),a("div",{className:"mb-1",children:[e(n,{for:"amount",className:"form-label",children:"Payment Amount"}),e(l,{type:"number",id:"amount",placeholder:"$1000"})]}),a("div",{className:"mb-1",children:[e(n,{for:"payment-amount",className:"form-label",children:"Payment Date"}),e(f,{id:"payment-amount",value:s,onChange:d=>t(d),className:"form-control"})]}),a("div",{className:"mb-1",children:[e(n,{for:"payment-method",className:"form-label",children:"Payment Method"}),a(l,{type:"select",id:"payment-method",defaultValue:"",children:[e("option",{value:"",disabled:!0,children:"Select payment method"}),e("option",{value:"Cash",children:"Cash"}),e("option",{value:"Bank Transfer",children:"Bank Transfer"}),e("option",{value:"Debit",children:"Debit"}),e("option",{value:"Credit",children:"Credit"}),e("option",{value:"Paypal",children:"Paypal"})]})]}),a("div",{className:"mb-1",children:[e(n,{for:"payment-note",className:"form-label",children:"Internal Payment Note"}),e(l,{type:"textarea",rows:"5",id:"payment-note",placeholder:"Internal Payment Note"})]}),a("div",{className:"d-flex flex-wrap mb-0",children:[e(i,{className:"me-1",color:"primary",onClick:o,children:"Send"}),e(i,{color:"secondary",outline:!0,onClick:o,children:"Cancel"})]})]})})};export{P as S,S as a};
