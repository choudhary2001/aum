import{r as l,bb as b,k as e,J as s,j as c,P as n}from"./index.dff4e684.js";import{I as u}from"./index.36ca0042.js";import{I as N,A as p}from"./App.37a2596a.js";import{I as v,a as f}from"./InputGroupText.9c960290.js";import{S as x}from"./search.2277d3bd.js";const j=()=>{const[r,d]=l.exports.useState(null);l.exports.useEffect(()=>{b.get("/blog/list/data/sidebar").then(a=>d(a.data))},[]);const o={Quote:"light-info",Fashion:"light-primary",Gaming:"light-danger",Video:"light-warning",Food:"light-success"},m=()=>r.recentPosts.map((a,t)=>s("div",{className:c("d-flex",{"mb-2":t!==r.recentPosts.length-1}),children:[e(n,{className:"me-2",to:`/pages/blog/detail/${a.id}`,children:e("img",{className:"rounded",src:a.img,alt:a.title,width:"100",height:"70"})}),s("div",{children:[e("h6",{className:"blog-recent-post-title",children:e(n,{className:"text-body-heading",to:`/pages/blog/detail/${a.id}`,children:a.title})}),e("div",{className:"text-muted mb-0",children:a.createdTime})]})]},t)),h=()=>r.categories.map((a,t)=>{const g=u[a.icon];return s("div",{className:c("d-flex justify-content-start align-items-center",{"mb-75":t!==r.categories.length-1}),children:[e("a",{className:"me-75",href:"/",onClick:i=>i.preventDefault(),children:e(p,{className:"rounded",color:o[a.category],icon:e(g,{size:15})})}),e("a",{href:"/",onClick:i=>i.preventDefault(),children:e("div",{className:"blog-category-title text-body",children:a.category})})]},t)});return e("div",{className:"sidebar-detached sidebar-right",children:e("div",{className:"sidebar",children:e("div",{className:"blog-sidebar right-sidebar my-2 my-lg-0",children:s("div",{className:"right-sidebar-content",children:[e("div",{className:"blog-search",children:s(v,{className:"input-group-merge",children:[e(N,{placeholder:"Search here"}),e(f,{children:e(x,{size:14})})]})}),r!==null?s(l.exports.Fragment,{children:[s("div",{className:"blog-recent-posts mt-3",children:[e("h6",{className:"section-label",children:"Recent Posts"}),e("div",{className:"mt-75",children:m()})]}),s("div",{className:"blog-categories mt-3",children:[e("h6",{className:"section-label",children:"Categories"}),e("div",{className:"mt-1",children:h()})]})]}):null]})})})})};export{j as B};