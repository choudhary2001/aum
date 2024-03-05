import{r as e,J as i,k as r,j as C,aa as I}from"./index.dff4e684.js";import{I as a}from"./index.36ca0042.js";import{l as g}from"./index.6d42618d.js";import{I as N,A as v,o as F}from"./App.37a2596a.js";import{B as b}from"./index.8bb87258.js";import{R as w,C as y}from"./Col.96fcbc17.js";import{C as A}from"./Card.514988a9.js";import{C as S}from"./CardBody.8c73518d.js";import{I as k,a as T}from"./InputGroupText.9c960290.js";import{U as j}from"./UncontrolledTooltip.57b433b3.js";import{S as B}from"./search.2277d3bd.js";import"./truck.99d1945e.js";import"./square.57686881.js";import"./rss.17abf901.js";import"./archive.6e4b402b.js";import"./save.485f8fa3.js";import"./arrow-down.cd2b7d99.js";import"./arrow-left.c295e437.js";import"./arrow-right.0b133f79.js";import"./award.f0a6879a.js";import"./wifi.b14187b6.js";import"./command.ac283e4d.js";import"./bookmark.23e5bee1.js";import"./box.177fba5a.js";import"./briefcase.8b2e6a14.js";import"./calendar.904e65c8.js";import"./inbox.6e7f33c5.js";import"./check-circle.87e76ea0.js";import"./chevron-down.9c58d19a.js";import"./chevron-left.73232b43.js";import"./chevron-right.f3c49f5b.js";import"./globe.bc4a862c.js";import"./clock.fee58ac1.js";import"./sun.df96e5b7.js";import"./code.4e7dbc11.js";import"./coffee.7b41d2b5.js";import"./copy.3e8853d4.js";import"./maximize-2.7d643d1c.js";import"./database.58087051.js";import"./dollar-sign.385e37ff.js";import"./download-cloud.bfc41e4b.js";import"./download.3f78a711.js";import"./edit-2.c72a624a.js";import"./external-link.0fb58be6.js";import"./eye-off.1d07efd8.js";import"./eye.4a9e31d4.js";import"./twitter.1e1ef9e2.js";import"./file-text.4fa0d8cb.js";import"./file.b7fedcd7.js";import"./key.cbd95c2d.js";import"./github.03ebc23e.js";import"./grid.789cc8e8.js";import"./hash.13af80a4.js";import"./image.8bb92c9e.js";import"./info.bd539442.js";import"./instagram.46bbe431.js";import"./link.d9d509d6.js";import"./linkedin.e20ad4e1.js";import"./list.df2edc56.js";import"./lock.7efea9f6.js";import"./map-pin.b60426f5.js";import"./video.8301df74.js";import"./minus.ed29e13a.js";import"./monitor.0da97084.js";import"./more-vertical.b394bd54.js";import"./package.56f63a50.js";import"./paperclip.15a21c78.js";import"./stop-circle.80e8aad1.js";import"./pen-tool.2879d609.js";import"./phone-call.ced9b480.js";import"./play.586f3d2a.js";import"./plus-circle.151c2367.js";import"./plus.6e4346f7.js";import"./pocket.0c82472c.js";import"./printer.75c9e336.js";import"./rotate-cw.1e77007c.js";import"./send.7b0cd638.js";import"./shopping-bag.0b02a44c.js";import"./share-2.3d9ca2d5.js";import"./share.abe13aac.js";import"./shopping-cart.420269c6.js";import"./slack.a96bed02.js";import"./smartphone.8b1cf228.js";import"./star.eb42d6c9.js";import"./tablet.c792f65f.js";import"./tag.bae43e4f.js";import"./thumbs-up.6f640858.js";import"./trash-2.8a850016.js";import"./trash.ae88d3ea.js";import"./trending-up.7b2632da.js";import"./user-check.3e4fba9b.js";import"./user-plus.ffce0eda.js";import"./user-x.0832d939.js";import"./users.4c42efad.js";import"./x-circle.25ba0268.js";import"./youtube.3ae2d70a.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./TooltipPopoverWrapper.2dcdb0e6.js";import"./Fade.f1e5f77c.js";const bt=()=>{const p=[],[s,n]=e.exports.useState([]),[c,l]=e.exports.useState([]),[d,h]=e.exports.useState(null);for(const t in a)p.push(t);const u=t=>{const o=[];t.length&&p.filter(m=>{m.toLowerCase().includes(t.toLowerCase())&&o.push(m)}),l([...o])},f=t=>{h(t),I(()=>i("div",{className:"d-flex",children:[r("div",{className:"me-1",children:r(v,{size:"sm",color:"success",icon:r(F,{size:12})})}),i("div",{className:"d-flex flex-column",children:[r("h6",{className:"toast-title",children:"Icon Name Copied! \u{1F4CB}"}),r("span",{role:"img","aria-label":"toast-text",children:t})]})]}))},x=()=>{const t=s.length?c:p;return t.length?t.map(o=>{const m=a[o];return i(e.exports.Fragment,{children:[r(g.CopyToClipboard,{text:`<${o} />`,children:r(A,{id:o,className:C("icon-card cursor-pointer text-center mb-2 mx-50",{active:d===o}),onClick:()=>f(o),children:i(S,{children:[r("div",{className:"icon-wrapper",children:r(m,{})}),r("p",{className:"icon-name text-truncate mb-0 mt-1",children:o})]})})}),r(j,{placement:"top",target:o,children:o.replace(/([A-Z])/g," $1").trim()})]},o)}):r("div",{className:"d-flex align-items-center justify-content-center w-100",children:r("h4",{className:"mb-0",children:"No Icons Found!"})})};return i(e.exports.Fragment,{children:[r(b,{title:"Feather Icons",data:[{title:"UI"},{title:"Feather Icons"}]}),r(w,{children:r(y,{sm:"12",children:r("div",{className:"icon-search-wrapper my-3 mx-auto",children:i(k,{className:"input-group-merge mb-1",children:[r(T,{children:r(B,{size:14})}),r(N,{placeholder:"Search icons...",onChange:t=>{u(t.target.value),n(t.target.value)}})]})})})}),r("div",{className:"d-flex flex-wrap",id:"icons-container",children:x()})]})};export{bt as default};