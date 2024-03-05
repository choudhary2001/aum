import{r as a,bb as C,J as e,k as t,P as l,j as b}from"./index.dff4e684.js";import{B as v}from"./BlogSidebar.9c05f3d6.js";import{A as N,e as x,n as k}from"./App.37a2596a.js";import{B as y}from"./index.8bb87258.js";import{R as s,C as c}from"./Col.96fcbc17.js";import{C as D}from"./Card.514988a9.js";import{C as B}from"./CardBody.8c73518d.js";import{C as w}from"./CardImg.a0065385.js";import{C as P}from"./CardText.dd9505fe.js";import{C as L}from"./CardTitle.aebc4d98.js";import{P as j,a as i,b as o}from"./PaginationLink.00fc2808.js";/* empty css                  */import"./index.36ca0042.js";import"./truck.99d1945e.js";import"./square.57686881.js";import"./rss.17abf901.js";import"./archive.6e4b402b.js";import"./save.485f8fa3.js";import"./arrow-down.cd2b7d99.js";import"./arrow-left.c295e437.js";import"./arrow-right.0b133f79.js";import"./award.f0a6879a.js";import"./wifi.b14187b6.js";import"./command.ac283e4d.js";import"./bookmark.23e5bee1.js";import"./box.177fba5a.js";import"./briefcase.8b2e6a14.js";import"./calendar.904e65c8.js";import"./inbox.6e7f33c5.js";import"./check-circle.87e76ea0.js";import"./chevron-down.9c58d19a.js";import"./chevron-left.73232b43.js";import"./chevron-right.f3c49f5b.js";import"./globe.bc4a862c.js";import"./clock.fee58ac1.js";import"./sun.df96e5b7.js";import"./code.4e7dbc11.js";import"./coffee.7b41d2b5.js";import"./copy.3e8853d4.js";import"./maximize-2.7d643d1c.js";import"./database.58087051.js";import"./dollar-sign.385e37ff.js";import"./download-cloud.bfc41e4b.js";import"./download.3f78a711.js";import"./edit-2.c72a624a.js";import"./external-link.0fb58be6.js";import"./eye-off.1d07efd8.js";import"./eye.4a9e31d4.js";import"./twitter.1e1ef9e2.js";import"./file-text.4fa0d8cb.js";import"./file.b7fedcd7.js";import"./key.cbd95c2d.js";import"./github.03ebc23e.js";import"./grid.789cc8e8.js";import"./hash.13af80a4.js";import"./image.8bb92c9e.js";import"./info.bd539442.js";import"./instagram.46bbe431.js";import"./link.d9d509d6.js";import"./linkedin.e20ad4e1.js";import"./list.df2edc56.js";import"./lock.7efea9f6.js";import"./map-pin.b60426f5.js";import"./video.8301df74.js";import"./minus.ed29e13a.js";import"./monitor.0da97084.js";import"./more-vertical.b394bd54.js";import"./package.56f63a50.js";import"./paperclip.15a21c78.js";import"./stop-circle.80e8aad1.js";import"./pen-tool.2879d609.js";import"./phone-call.ced9b480.js";import"./play.586f3d2a.js";import"./plus-circle.151c2367.js";import"./plus.6e4346f7.js";import"./pocket.0c82472c.js";import"./printer.75c9e336.js";import"./rotate-cw.1e77007c.js";import"./search.2277d3bd.js";import"./send.7b0cd638.js";import"./shopping-bag.0b02a44c.js";import"./share-2.3d9ca2d5.js";import"./share.abe13aac.js";import"./shopping-cart.420269c6.js";import"./slack.a96bed02.js";import"./smartphone.8b1cf228.js";import"./star.eb42d6c9.js";import"./tablet.c792f65f.js";import"./tag.bae43e4f.js";import"./thumbs-up.6f640858.js";import"./trash-2.8a850016.js";import"./trash.ae88d3ea.js";import"./trending-up.7b2632da.js";import"./user-check.3e4fba9b.js";import"./user-plus.ffce0eda.js";import"./user-x.0832d939.js";import"./users.4c42efad.js";import"./x-circle.25ba0268.js";import"./youtube.3ae2d70a.js";import"./InputGroupText.9c960290.js";import"./UncontrolledButtonDropdown.eaa9856b.js";const yr=()=>{const[p,d]=a.exports.useState(null);a.exports.useEffect(()=>{C.get("/blog/list/data").then(r=>d(r.data))},[]);const h={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},g=()=>p.map(r=>{const f=()=>r.tags.map((m,n)=>t("a",{href:"/",onClick:u=>u.preventDefault(),children:t(k,{className:b({"me-50":n!==r.tags.length-1}),color:h[m],pill:!0,children:m})},n));return t(c,{md:"6",children:e(D,{children:[t(l,{to:`/pages/blog/detail/${r.id}`,children:t(w,{className:"img-fluid",src:r.img,alt:r.title,top:!0})}),e(B,{children:[t(L,{tag:"h4",children:t(l,{className:"blog-title-truncate text-body-heading",to:`/pages/blog/detail/${r.id}`,children:r.title})}),e("div",{className:"d-flex",children:[t(N,{className:"me-50",img:r.avatar,imgHeight:"24",imgWidth:"24"}),e("div",{children:[t("small",{className:"text-muted me-25",children:"by"}),t("small",{children:t("a",{className:"text-body",href:"/",onClick:m=>m.preventDefault(),children:r.userFullName})}),t("span",{className:"text-muted ms-50 me-25",children:"|"}),t("small",{className:"text-muted",children:r.blogPosted})]})]}),t("div",{className:"my-1 py-25",children:f()}),t(P,{className:"blog-content-truncate",children:r.excerpt}),t("hr",{}),e("div",{className:"d-flex justify-content-between align-items-center",children:[e(l,{to:`/pages/blog/detail/${r.id}`,children:[t(x,{size:15,className:"text-body me-50"}),e("span",{className:"text-body fw-bold",children:[r.comment," Comments"]})]}),t(l,{className:"fw-bold",to:`/pages/blog/detail/${r.id}`,children:"Read More"})]})]})]})},r.title)});return e(a.exports.Fragment,{children:[t(y,{title:"Blog List",data:[{title:"Pages"},{title:"Blog"},{title:"List"}]}),e("div",{className:"blog-wrapper",children:[t("div",{className:"content-detached content-left",children:t("div",{className:"content-body",children:p!==null?e("div",{className:"blog-list-wrapper",children:[t(s,{children:g()}),t(s,{children:t(c,{sm:"12",children:e(j,{className:"d-flex justify-content-center mt-2",children:[t(i,{className:"prev-item",children:t(o,{href:"#",onClick:r=>r.preventDefault()})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"1"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"2"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"3"})}),t(i,{active:!0,children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"4"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"5"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"6"})}),t(i,{children:t(o,{href:"#",onClick:r=>r.preventDefault(),children:"7"})}),t(i,{className:"next-item",children:t(o,{href:"#",onClick:r=>r.preventDefault()})})]})})})]}):null})}),t(v,{})]})]})};export{yr as default};