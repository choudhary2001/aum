import{au as F,r as h,J as c,k as n,B as M}from"./index.dff4e684.js";import{E as B}from"./index.4a7b49a1.js";import{u as N,w as D}from"./xlsx.8087b80f.js";import{R as O,C as _}from"./Col.96fcbc17.js";import{C as H}from"./Card.514988a9.js";import{C as U}from"./CardBody.8c73518d.js";import{M as W,a as z}from"./ModalBody.fe13b04c.js";import{M as K}from"./ModalHeader.73c2755d.js";import{M as X}from"./ModalFooter.f3952666.js";import{T as G}from"./Table.bba57361.js";import{I as T}from"./App.37a2596a.js";import{L as J}from"./Label.138433f0.js";import"./Portal.330fdcf6.js";import"./Fade.f1e5f77c.js";var j={exports:{}};(function(L,E){(function(v,u){u()})(F,function(){function v(t,e){return typeof e>"u"?e={autoBom:!1}:typeof e!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\uFEFF",t],{type:t.type}):t}function u(t,e,l){var a=new XMLHttpRequest;a.open("GET",t),a.responseType="blob",a.onload=function(){b(a.response,e,l)},a.onerror=function(){console.error("could not download file")},a.send()}function y(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch{}return 200<=e.status&&299>=e.status}function w(t){try{t.dispatchEvent(new MouseEvent("click"))}catch{var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var i=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof globalThis=="object"&&globalThis.global===globalThis?globalThis:void 0,x=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),b=i.saveAs||(typeof window!="object"||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!x?function(t,e,l){var a=i.URL||i.webkitURL,r=document.createElement("a");e=e||t.name||"download",r.download=e,r.rel="noopener",typeof t=="string"?(r.href=t,r.origin===location.origin?w(r):y(r.href)?u(t,e,l):w(r,r.target="_blank")):(r.href=a.createObjectURL(t),setTimeout(function(){a.revokeObjectURL(r.href)},4e4),setTimeout(function(){w(r)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,l){if(e=e||t.name||"download",typeof t!="string")navigator.msSaveOrOpenBlob(v(t,l),e);else if(y(t))u(t,e,l);else{var a=document.createElement("a");a.href=t,a.target="_blank",setTimeout(function(){w(a)})}}:function(t,e,l,a){if(a=a||open("","_blank"),a&&(a.document.title=a.document.body.innerText="downloading..."),typeof t=="string")return u(t,e,l);var r=t.type==="application/octet-stream",k=/constructor/i.test(i.HTMLElement)||i.safari,R=/CriOS\/[\d]+/.test(navigator.userAgent);if((R||r&&k||x)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var d=g.result;d=R?d:d.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=d:location=d,a=null},g.readAsDataURL(t)}else{var o=i.URL||i.webkitURL,p=o.createObjectURL(t);a?a.location=p:location.href=p,a=null,setTimeout(function(){o.revokeObjectURL(p)},4e4)}});i.saveAs=b.saveAs=b,L.exports=b})})(j);const q=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],se=()=>{const L=h.exports.useRef(),[E]=h.exports.useState(q),[v,u]=h.exports.useState(""),[y,w]=h.exports.useState(!1),[i,x]=h.exports.useState(""),[b,t]=h.exports.useState([]),[e,l]=h.exports.useState("xlsx"),a=()=>{w(!y)},r=o=>{const p=E;let d=[];const s=o.target.value;u(s),s.length&&(d=p.filter(m=>{const f=m.name.toLowerCase().startsWith(s.toLowerCase())||m.email.toLowerCase().startsWith(s.toLowerCase())||m.website.toLowerCase().startsWith(s.toLowerCase())||m.id.toString().toLowerCase().startsWith(s.toLowerCase()),C=m.name.toLowerCase().includes(s.toLowerCase())||m.email.toLowerCase().includes(s.toLowerCase())||m.website.toLowerCase().includes(s.toLowerCase())||m.id.toString().toLowerCase().includes(s.toLowerCase());return f||(!f&&C?C:null)}),t(d),u(s))},k=()=>{a();const o=e,p=N.table_to_book(L.current,{sheet:"Sheet JS"}),d=D(p,{bookType:o,bookSST:!0,type:"binary"}),s=f=>{const C=new ArrayBuffer(f.length),A=new Uint8Array(C);for(let S=0;S<f.length;S++)A[S]=f.charCodeAt(S)&255;return C},m=i.length?`${i}.${e}`:`excel-sheet.${e}`;return j.exports.saveAs(new Blob([s(d)],{type:"application/octet-stream"}),m)},g=(v?b:E).map(o=>c("tr",{children:[n("td",{children:o.email}),n("td",{children:o.name}),n("td",{children:o.website}),n("td",{children:o.id})]},o.id));return c(h.exports.Fragment,{children:[n(B,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/SheetJS/sheetjs"}),n(O,{className:"export-component",children:n(_,{sm:"12",children:c(H,{children:[n(U,{className:"pb-0",children:c("div",{className:"d-flex justify-content-between flex-wrap flex-sm-row flex-column",children:[n(M,{color:"primary",onClick:()=>a(),children:"Export"}),c("div",{className:"d-flex align-items-center justify-content-end mt-sm-0 mt-1",children:[n(J,{for:"search-input",className:"me-1",children:"Search"}),n(T,{id:"search-input",bsSize:"sm",type:"text",value:v,onChange:o=>r(o)})]})]})}),c(G,{innerRef:L,className:"table-hover-animation mt-2",responsive:!0,children:[n("thead",{children:c("tr",{children:[n("th",{children:"Email"}),n("th",{children:"Name"}),n("th",{children:"Website"}),n("th",{children:"Rank"})]})}),n("tbody",{children:g})]})]})})}),c(W,{isOpen:y,toggle:()=>a(),className:"modal-dialog-centered",onClosed:()=>x(""),children:[n(K,{toggle:()=>a(),children:"Export To Excel"}),c(z,{children:[n("div",{className:"mb-2",children:n(T,{type:"text",value:i,onChange:o=>x(o.target.value),placeholder:"Enter File Name"})}),n("div",{children:c(T,{type:"select",id:"selectFileFormat",name:"customSelect",value:e,onChange:o=>l(o.target.value),children:[n("option",{children:"xlsx"}),n("option",{children:"csv"}),n("option",{children:"txt"})]})})]}),c(X,{children:[n(M,{color:"primary",onClick:()=>k(),children:"Export"}),n(M,{color:"flat-danger",onClick:()=>a(),children:"Cancel"})]})]})]})};export{se as default};
