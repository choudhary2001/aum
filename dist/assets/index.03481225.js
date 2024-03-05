import{r as s,bb as v,J as i,k as e,ak as x,B as C,j as y}from"./index.dff4e684.js";import{A as n,e as k,a3 as w,U as D,h as B,i as F,j as a,I as l,n as z}from"./App.37a2596a.js";import{B as T}from"./BlogSidebar.9c05f3d6.js";import{B as L}from"./index.8bb87258.js";import{R as h,C as m}from"./Col.96fcbc17.js";import{C as d}from"./Card.514988a9.js";import{C as c}from"./CardBody.8c73518d.js";import{C as S}from"./CardImg.a0065385.js";import{C as p}from"./CardText.dd9505fe.js";import{C as H}from"./CardTitle.aebc4d98.js";import{F as I}from"./Form.f1a34b24.js";import{L as W}from"./Label.138433f0.js";/* empty css                  */import{B as j}from"./bookmark.23e5bee1.js";import{S as G}from"./share-2.3d9ca2d5.js";import{G as A}from"./github.03ebc23e.js";import{G as U}from"./globe.bc4a862c.js";import{F as M,T as R}from"./twitter.1e1ef9e2.js";import{L as q}from"./linkedin.e20ad4e1.js";import{C as E}from"./maximize-2.7d643d1c.js";import"./index.36ca0042.js";import"./truck.99d1945e.js";import"./square.57686881.js";import"./rss.17abf901.js";import"./archive.6e4b402b.js";import"./save.485f8fa3.js";import"./arrow-down.cd2b7d99.js";import"./arrow-left.c295e437.js";import"./arrow-right.0b133f79.js";import"./award.f0a6879a.js";import"./wifi.b14187b6.js";import"./command.ac283e4d.js";import"./box.177fba5a.js";import"./briefcase.8b2e6a14.js";import"./calendar.904e65c8.js";import"./inbox.6e7f33c5.js";import"./check-circle.87e76ea0.js";import"./chevron-down.9c58d19a.js";import"./chevron-left.73232b43.js";import"./chevron-right.f3c49f5b.js";import"./clock.fee58ac1.js";import"./sun.df96e5b7.js";import"./code.4e7dbc11.js";import"./coffee.7b41d2b5.js";import"./copy.3e8853d4.js";import"./database.58087051.js";import"./dollar-sign.385e37ff.js";import"./download-cloud.bfc41e4b.js";import"./download.3f78a711.js";import"./edit-2.c72a624a.js";import"./external-link.0fb58be6.js";import"./eye-off.1d07efd8.js";import"./eye.4a9e31d4.js";import"./file-text.4fa0d8cb.js";import"./file.b7fedcd7.js";import"./key.cbd95c2d.js";import"./grid.789cc8e8.js";import"./hash.13af80a4.js";import"./image.8bb92c9e.js";import"./info.bd539442.js";import"./instagram.46bbe431.js";import"./link.d9d509d6.js";import"./list.df2edc56.js";import"./lock.7efea9f6.js";import"./map-pin.b60426f5.js";import"./video.8301df74.js";import"./minus.ed29e13a.js";import"./monitor.0da97084.js";import"./more-vertical.b394bd54.js";import"./package.56f63a50.js";import"./paperclip.15a21c78.js";import"./stop-circle.80e8aad1.js";import"./pen-tool.2879d609.js";import"./phone-call.ced9b480.js";import"./play.586f3d2a.js";import"./plus-circle.151c2367.js";import"./plus.6e4346f7.js";import"./pocket.0c82472c.js";import"./printer.75c9e336.js";import"./rotate-cw.1e77007c.js";import"./search.2277d3bd.js";import"./send.7b0cd638.js";import"./shopping-bag.0b02a44c.js";import"./share.abe13aac.js";import"./shopping-cart.420269c6.js";import"./slack.a96bed02.js";import"./smartphone.8b1cf228.js";import"./star.eb42d6c9.js";import"./tablet.c792f65f.js";import"./tag.bae43e4f.js";import"./thumbs-up.6f640858.js";import"./trash-2.8a850016.js";import"./trash.ae88d3ea.js";import"./trending-up.7b2632da.js";import"./user-check.3e4fba9b.js";import"./user-plus.ffce0eda.js";import"./user-x.0832d939.js";import"./users.4c42efad.js";import"./x-circle.25ba0268.js";import"./youtube.3ae2d70a.js";import"./InputGroupText.9c960290.js";import"./UncontrolledButtonDropdown.eaa9856b.js";const Ar=()=>{const[t,g]=s.exports.useState(null);s.exports.useEffect(()=>{v.get("/blog/list/data/detail").then(r=>g(r.data))},[]);const b={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},f=()=>t.blog.tags.map((r,o)=>e("a",{href:"/",onClick:u=>u.preventDefault(),children:e(z,{className:y({"me-50":o!==t.blog.tags.length-1}),color:b[r],pill:!0,children:r})},o)),N=()=>t.comments.map(r=>e(d,{className:"mb-3",children:e(c,{children:i("div",{className:"d-flex",children:[e("div",{children:e(n,{className:"me-75",img:r.avatar,imgHeight:"38",imgWidth:"38"})}),i("div",{children:[e("h6",{className:"fw-bolder mb-25",children:r.userFullName}),e(p,{children:r.commentedAt}),e(p,{children:r.commentText}),e("a",{href:"/",onClick:o=>o.preventDefault(),children:i("div",{className:"d-inline-flex align-items-center",children:[e(E,{size:18,className:"me-50"}),e("span",{children:"Reply"})]})})]})]})})},r.userFullName));return i(s.exports.Fragment,{children:[e(L,{title:"Blog Details",data:[{title:"Pages"},{title:"Blog"},{title:"Details"}]}),i("div",{className:"blog-wrapper",children:[e("div",{className:"content-detached content-left",children:e("div",{className:"content-body",children:t!==null?i(h,{children:[e(m,{sm:"12",children:i(d,{className:"mb-3",children:[e(S,{src:t.blog.img,className:"img-fluid",top:!0}),i(c,{children:[e(H,{tag:"h4",children:t.blog.title}),i("div",{className:"d-flex",children:[e(n,{className:"me-50",img:t.blog.avatar,imgHeight:"24",imgWidth:"24"}),i("div",{children:[e("small",{className:"text-muted me-25",children:"by"}),e("small",{children:e("a",{className:"text-body",href:"/",onClick:r=>r.preventDefault(),children:t.blog.userFullName})}),e("span",{className:"text-muted ms-50 me-25",children:"|"}),e("small",{className:"text-muted",children:t.blog.createdTime})]})]}),e("div",{className:"my-1 py-25",children:f()}),e("div",{dangerouslySetInnerHTML:{__html:t.blog.content}}),i("div",{className:"d-flex",children:[e("div",{children:e(n,{img:x,className:"me-2",imgHeight:"60",imgWidth:"60"})}),i("div",{children:[e("h6",{className:"fw-bolder",children:"Willie Clark"}),e(p,{className:"mb-0",children:"Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world."})]})]}),e("hr",{className:"my-2"}),i("div",{className:"d-flex align-items-center justify-content-between",children:[i("div",{className:"d-flex align-items-center",children:[i("div",{className:"d-flex align-items-center me-1",children:[e("a",{className:"me-50",href:"/",onClick:r=>r.preventDefault(),children:e(k,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:r=>r.preventDefault(),children:e("div",{className:"text-body align-middle",children:w(t.blog.comments)})})]}),i("div",{className:"d-flex align-items-cente",children:[e("a",{className:"me-50",href:"/",onClick:r=>r.preventDefault(),children:e(j,{size:21,className:"text-body align-middle"})}),e("a",{href:"/",onClick:r=>r.preventDefault(),children:e("div",{className:"text-body align-middle",children:t.blog.bookmarked})})]})]}),i(D,{className:"dropdown-icon-wrapper",children:[e(B,{tag:"span",children:e(G,{size:21,className:"text-body cursor-pointer"})}),i(F,{end:!0,children:[e(a,{className:"py-50 px-1",children:e(A,{size:18})}),e(a,{className:"py-50 px-1",children:e(U,{size:18})}),e(a,{className:"py-50 px-1",children:e(M,{size:18})}),e(a,{className:"py-50 px-1",children:e(R,{size:18})}),e(a,{className:"py-50 px-1",children:e(q,{size:18})})]})]})]})]})]})}),i(m,{sm:"12",id:"blogComment",children:[e("h6",{className:"section-label",children:"Comment"}),N()]}),i(m,{sm:"12",children:[e("h6",{className:"section-label",children:"Leave a Comment"}),e(d,{children:e(c,{children:e(I,{className:"form",onSubmit:r=>r.preventDefault(),children:i(h,{children:[e(m,{sm:"6",children:e("div",{className:"mb-2",children:e(l,{placeholder:"Name"})})}),e(m,{sm:"6",children:e("div",{className:"mb-2",children:e(l,{type:"email",placeholder:"Email"})})}),e(m,{sm:"6",children:e("div",{className:"mb-2",children:e(l,{type:"url",placeholder:"Website"})})}),e(m,{sm:"12",children:e("div",{className:"mb-2",children:e(l,{className:"mb-2",type:"textarea",rows:"4",placeholder:"Comment"})})}),e(m,{sm:"12",children:i("div",{className:"form-check mb-2",children:[e(l,{type:"checkbox",id:"save-data-checkbox"}),e(W,{className:"form-check-label",for:"save-data-checkbox",children:"Save my name, email, and website in this browser for the next time I comment."})]})}),e(m,{sm:"12",children:e(C,{color:"primary",children:"Post Comment"})})]})})})})]})]}):null})}),e(T,{})]})]})};export{Ar as default};
