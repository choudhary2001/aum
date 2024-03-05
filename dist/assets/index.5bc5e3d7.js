import{k as e,J as a,r as u,P as A,j as h,B as f,am as W,E as z,bn as b,bi as T,bk as j,bm as F}from"./index.dff4e684.js";import{R as C,C as o}from"./Col.96fcbc17.js";import{C as l}from"./CardText.dd9505fe.js";import{A as M}from"./award.f0a6879a.js";import{C as O}from"./clock.fee58ac1.js";import{S as V,v as E,h as R,i as $,j as p,a as Y}from"./App.37a2596a.js";import{U as H}from"./UncontrolledButtonDropdown.eaa9856b.js";import{S as v}from"./star.eb42d6c9.js";import{S as N}from"./shopping-cart.420269c6.js";import{D as J}from"./dollar-sign.385e37ff.js";import{S as L}from"./share-2.3d9ca2d5.js";import{F as U,T as G}from"./twitter.1e1ef9e2.js";import{Y as q}from"./youtube.3ae2d70a.js";import{I as K}from"./instagram.46bbe431.js";import{S as Q,N as X,a as Z,b as _}from"./swiper.253d270a.js";import{B as ee}from"./index.8bb87258.js";import{C as ae}from"./Card.514988a9.js";import{C as w}from"./CardBody.8c73518d.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";const se=()=>e("div",{className:"item-features",children:a(C,{className:"text-center",children:[e(o,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:a("div",{className:"w-75 mx-auto",children:[e(M,{}),e("h4",{className:"mt-2 mb-1",children:"100% Original"}),e(l,{children:"Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah."})]})}),e(o,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:a("div",{className:"w-75 mx-auto",children:[e(O,{}),e("h4",{className:"mt-2 mb-1",children:"10 Day Replacement"}),e(l,{children:"Marshmallow biscuit donut drag\xE9e fruitcake. Jujubes wafer cupcake."})]})}),e(o,{className:"mb-4 mb-md-0",md:"4",xs:"12",children:a("div",{className:"w-75 mx-auto",children:[e(V,{}),e("h4",{className:"mt-2 mb-1",children:"1 Year Warranty"}),e(l,{children:"Cotton candy gingerbread cake I love sugar plum I love sweet croissant."})]})})]})}),re=m=>{const{data:s,deleteWishlistItem:i,dispatch:t,addToWishlist:n,getProduct:g,productId:d,addToCart:x}=m,[y,k]=u.exports.useState("primary"),S=()=>s.colorOptions.map((r,c)=>{const B=s.colorOptions.length-1===c;return e("li",{className:h("d-inline-block",{"me-25":!B,selected:y===r}),onClick:()=>k(r),children:e("div",{className:`color-option b-${r}`,children:e("div",{className:`filloption bg-${r}`})})},r)}),I=r=>{t(r?i(d):n(d)),t(g(d))},D=(r,c)=>{c===!1&&t(x(r)),t(g(d))},P=s.isInCart?A:"button";return a(C,{className:"my-2",children:[e(o,{className:"d-flex align-items-center justify-content-center mb-2 mb-md-0",md:"5",xs:"12",children:e("div",{className:"d-flex align-items-center justify-content-center",children:e("img",{className:"img-fluid product-img",src:s.image,alt:s.name})})}),a(o,{md:"7",xs:"12",children:[e("h4",{children:s.name}),a(l,{tag:"span",className:"item-company",children:["By",e("a",{className:"company-name",href:"/",onClick:r=>r.preventDefault(),children:s.brand})]}),a("div",{className:"ecommerce-details-price d-flex flex-wrap mt-1",children:[a("h4",{className:"item-price me-1",children:["$",s.price]}),e("ul",{className:"unstyled-list list-inline",children:new Array(5).fill().map((r,c)=>e("li",{className:"ratings-list-item me-25",children:e(v,{className:h({"filled-star":c+1<=s.rating,"unfilled-star":c+1>s.rating})})},c))})]}),a(l,{children:["Available -",e("span",{className:"text-success ms-25",children:"In stock"})]}),e(l,{children:s.description}),a("ul",{className:"product-features list-unstyled",children:[s.hasFreeShipping?a("li",{children:[e(N,{size:19}),e("span",{children:"Free Shipping"})]}):null,a("li",{children:[e(J,{size:19}),e("span",{children:"EMI options available"})]})]}),e("hr",{}),a("div",{className:"product-color-options",children:[e("h6",{children:"Colors"}),e("ul",{className:"list-unstyled mb-0",children:S()})]}),e("hr",{}),a("div",{className:"d-flex flex-column flex-sm-row pt-1",children:[a(f,{tag:P,className:"btn-cart me-0 me-sm-1 mb-1 mb-sm-0",color:"primary",onClick:()=>D(s.id,s.isInCart),...s.isInCart?{to:"/apps/ecommerce/checkout"}:{},children:[e(N,{className:"me-50",size:14}),s.isInCart?"View in cart":"Move to cart"]}),a(f,{className:"btn-wishlist me-0 me-sm-1 mb-1 mb-sm-0",color:"secondary",outline:!0,onClick:()=>I(s.isInWishlist),children:[e(E,{size:14,className:h("me-50",{"text-danger":s.isInWishlist})}),e("span",{children:"Wishlist"})]}),a(H,{className:"dropdown-icon-wrapper btn-share",children:[e(R,{className:"btn-icon hide-arrow",color:"secondary",caret:!0,outline:!0,children:e(L,{size:14})}),a($,{end:!0,children:[e(p,{tag:"a",href:"/",onClick:r=>r.preventDefault(),children:e(U,{size:14})}),e(p,{tag:"a",href:"/",onClick:r=>r.preventDefault(),children:e(G,{size:14})}),e(p,{tag:"a",href:"/",onClick:r=>r.preventDefault(),children:e(q,{size:14})}),e(p,{tag:"a",href:"/",onClick:r=>r.preventDefault(),children:e(K,{size:14})})]})]})]})]})]})},ie="/assets/apple-watch.0b5217cf.png",te="/assets/macbook-pro.7d4a081b.png",le="/assets/homepod.3ce63907.png",ne="/assets/magic-mouse.8a3fb6b3.png",ce="/assets/iphone-x.76c3ebf7.png",me=()=>{Q.use([X]);const m=[{name:"Apple Watch Series 6",brand:"Apple",ratings:4,price:399.98,img:ie},{name:"Apple MacBook Pro - Silver",brand:"Apple",ratings:2,price:2449.49,img:te},{name:"Apple HomePod (Space Grey)",brand:"Apple",ratings:3,price:229.29,img:le},{name:"Magic Mouse 2 - Black",brand:"Apple",ratings:3,price:90.98,img:ne},{name:"iPhone 12 Pro",brand:"Apple",ratings:4,price:1559.99,img:ce}],s={className:"swiper-responsive-breakpoints swiper-container px-4 py-2",slidesPerView:5,spaceBetween:55,navigation:!0,breakpoints:{1600:{slidesPerView:4,spaceBetween:55},1300:{slidesPerView:3,spaceBetween:55},768:{slidesPerView:2,spaceBetween:55},320:{slidesPerView:1,spaceBetween:55}}};return a(u.exports.Fragment,{children:[a("div",{className:"mt-4 mb-2 text-center",children:[e("h4",{children:"Related Products"}),e(l,{children:"People also search for this items"})]}),e(Z,{...s,children:m.map(i=>e(_,{children:a("a",{href:"/",onClick:t=>t.preventDefault(),children:[a("div",{className:"item-heading",children:[e("h5",{className:"text-truncate mb-0",children:i.name}),a("small",{className:"text-body",children:["by ",i.brand]})]}),e("div",{className:"img-container w-50 mx-auto py-75",children:e("img",{src:i.img,alt:"swiper 1",className:"img-fluid"})}),a("div",{className:"item-meta",children:[e("ul",{className:"unstyled-list list-inline mb-25",children:new Array(5).fill().map((t,n)=>e("li",{className:"ratings-list-item me-25",children:e(v,{className:h({"filled-star":n+1<=i.ratings,"unfilled-star":n+1>i.ratings})})},n))}),a(l,{className:"text-primary mb-0",children:["$",i.price]})]})]})},i.name))})]})};const Ae=()=>{const m=W().product,s=m.substring(m.lastIndexOf("-")+1),i=Y(),t=z(n=>n.ecommerce);return u.exports.useEffect(()=>{i(b(s))},[]),a(u.exports.Fragment,{children:[e(ee,{title:"Product Details",data:[{title:"eCommerce"},{title:"Details"}]}),e("div",{className:"app-ecommerce-details",children:Object.keys(t.productDetail).length?a(ae,{children:[e(w,{children:e(re,{dispatch:i,addToCart:T,productId:s,getProduct:b,data:t.productDetail,addToWishlist:j,deleteWishlistItem:F})}),e(se,{}),e(w,{children:e(me,{})})]}):null})]})};export{Ae as default};