import{k as e,J as s,B as r,aa as i,r as o,bW as u}from"./index.dff4e684.js";import{R as f,C as l}from"./Col.96fcbc17.js";import{C as a}from"./Card.514988a9.js";import{C as n}from"./CardBody.8c73518d.js";import{a as b,S as x,F as p,A as C}from"./square.57686881.js";import{X as m,A as N}from"./App.37a2596a.js";import{a as g}from"./avatar-s-20.3ee3e4a2.js";import{E as k}from"./edit-2.c72a624a.js";import{C as y}from"./check-circle.87e76ea0.js";import{C as w}from"./clock.fee58ac1.js";import{G as T}from"./grid.789cc8e8.js";import{E as v}from"./index.4a7b49a1.js";const E=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(b,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Blank"}),e("p",{className:"mb-50",children:"The most basic variant does not have an icon."}),e(r,{color:"primary",onClick:()=>i("Blank Toast"),children:"Blank"})]})})}),z=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(m,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Error"}),e("p",{className:"mb-50",children:"Creates a notification with an animated error icon."}),e(r,{color:"danger",onClick:()=>i.error("This didn't work."),children:"Error"})]})})}),S=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(x,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Emoji"}),e("p",{className:"mb-50",children:"Add any emoji instead of an icon."}),e(r,{color:"primary",onClick:()=>i("Good Job!",{icon:"\u{1F44F}"}),children:"Emoji"})]})})}),j=()=>{const{colors:c}=o.exports.useContext(u);return e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(p,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Themed"}),e("p",{className:"mb-50",children:"Customize the default styles the way you want."}),e(r,{color:"primary",onClick:()=>i.success("Look at me, I have brand styles.",{style:{padding:"16px",color:c.primary.main,border:`1px solid ${c.primary.main}`},iconTheme:{primary:c.primary.main}}),children:"Emoji"})]})})})},P=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(k,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Custom"}),e("p",{className:"mb-50",children:"Make a toast using any custom content ."}),e(r,{color:"primary",onClick:()=>i(t=>s("div",{className:"w-100 d-flex align-items-center justify-content-between",children:[s("div",{className:"d-flex align-items-center",children:[e(N,{img:g,className:"me-1"}),s("div",{children:[e("p",{className:"mb-0",children:"John Doe"}),e("small",{children:"Sure! 8:30pm works great!"})]})]}),e(m,{size:"14",onClick:()=>i.dismiss(t.id)})]}),{style:{minWidth:"300px"}}),children:"Custom"})]})})}),B=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(y,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Success"}),e("p",{className:"mb-50",children:"Creates a notification with an animated checkmark."}),e(r,{color:"success",onClick:()=>i.success("Successfully toasted!"),children:"Success"})]})})}),A=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(w,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Promise"}),e("p",{className:"mb-50",children:"Update automatically when promise resolves / fails."}),e(r,{color:"primary",onClick:()=>{const t=new Promise((d,h)=>{setTimeout(()=>{Math.random()<.5?d("foo"):h("fox")},1e3)});return i.promise(t,{loading:"Loading",success:"Got the data",error:"Error when fetching"})},children:"Promise"})]})})}),F=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(C,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Multiline"}),e("p",{className:"mb-50",children:"The most basic variant with longer texts."}),e(r,{color:"primary",onClick:()=>i("This toast is super big. I don't think anyone could eat it in one bite. It's larger than you expected. You eat it but it does not seem to get smaller."),children:"Multiline"})]})})}),M=()=>e(a,{children:e(n,{children:s("div",{className:"d-flex text-center align-items-center flex-column",children:[e(T,{size:"32",className:"mb-1"}),e("h5",{className:"mb-1 fw-bolder",children:"Custom Position"}),e("p",{className:"mb-50",children:"You can change the toast's position as you like."}),e(r,{color:"primary",onClick:()=>i.success("Always at the bottom.",{position:"bottom-right"}),children:"Position"})]})})}),_=()=>s(o.exports.Fragment,{children:[e(v,{title:"React Hot Toast",subTitle:"Smoking hot React notifications.",link:"https://github.com/timolins/react-hot-toast"}),s(f,{className:"match-height",children:[e(l,{xs:12,sm:6,lg:4,children:e(E,{})}),e(l,{xs:12,sm:6,lg:4,children:e(F,{})}),e(l,{xs:12,sm:6,lg:4,children:e(B,{})}),e(l,{xs:12,sm:6,lg:4,children:e(z,{})}),e(l,{xs:12,sm:6,lg:4,children:e(A,{})}),e(l,{xs:12,sm:6,lg:4,children:e(S,{})}),e(l,{xs:12,sm:6,lg:4,children:e(j,{})}),e(l,{xs:12,sm:6,lg:4,children:e(P,{})}),e(l,{xs:12,sm:6,lg:4,children:e(M,{})})]})]});export{_ as default};
