import{J as s,k as e,r as t,bb as h}from"./index.dff4e684.js";import{R as N,C as k}from"./Col.96fcbc17.js";import{T as f,a as c}from"./TabPane.85be1943.js";import{N as u}from"./Nav.30fd4ef4.js";import{N as i,G as n,l as b,B as x}from"./App.37a2596a.js";import{B as v}from"./bookmark.23e5bee1.js";import{L as S}from"./link.d9d509d6.js";import"./index.8bb87258.js";import{W as o}from"./WizardVertical.d4218adb.js";import"./index.2cdb2fd9.js";/* empty css                  *//* empty css                              */import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./Form.f1a34b24.js";import"./Label.138433f0.js";import"./arrow-left.c295e437.js";import"./arrow-right.0b133f79.js";import"./react-select.esm.82b43af0.js";import"./emotion-memoize.esm.06f0e458.js";import"./chevron-right.f3c49f5b.js";const C=({activeTab:a,toggleTab:r})=>s(u,{pills:!0,className:"mb-2",children:[e(i,{children:s(n,{active:a==="1",onClick:()=>r("1"),children:[e(b,{size:18,className:"me-50"}),e("span",{className:"fw-bold",children:"M Index"})]})}),e(i,{children:s(n,{active:a==="3",onClick:()=>r("3"),children:[e(v,{size:18,className:"me-50"}),e("span",{className:"fw-bold",children:"F&O"})]})}),e(i,{children:s(n,{active:a==="4",onClick:()=>r("4"),children:[e(x,{size:18,className:"me-50"}),e("span",{className:"fw-bold",children:"Scanners"})]})}),e(i,{children:s(n,{active:a==="5",onClick:()=>r("5"),children:[e(S,{size:18,className:"me-50"}),e("span",{className:"fw-bold",children:"Backtest"})]})})]}),I=()=>e("div",{className:"p-2",children:e(o,{})}),B=()=>e("div",{className:"p-2",children:e(o,{})}),w=()=>e("div",{className:"p-2",children:e(o,{})}),z=()=>e("div",{className:" p-2",children:e(o,{})}),Y=()=>{const[a,r]=t.exports.useState("1"),[m,d]=t.exports.useState(null),p=l=>{r(l)};return t.exports.useEffect(()=>{h.get("/account-setting/data").then(l=>d(l.data))},[]),e(t.exports.Fragment,{children:m!==null?e(N,{children:s(k,{xs:12,children:[e(C,{className:"mb-2",activeTab:a,toggleTab:p}),s(f,{activeTab:a,children:[s(c,{tabId:"1",children:[e(I,{})," "]}),e(c,{tabId:"3",children:e(B,{})}),e(c,{tabId:"4",children:e(w,{})}),e(c,{tabId:"5",children:e(z,{})})]})]})}):null})};export{Y as default};
