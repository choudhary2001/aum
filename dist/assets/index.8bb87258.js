import{p as n,t as g,m as b,j as u,k as s,J as o,P as d,r as T}from"./index.dff4e684.js";import{h as k,i as C,j as p,C as w,e as M,M as P}from"./App.37a2596a.js";import{U as _}from"./UncontrolledButtonDropdown.eaa9856b.js";import{G as $}from"./grid.789cc8e8.js";import{C as B}from"./calendar.904e65c8.js";var L=["className","listClassName","cssModule","children","tag","listTag","aria-label"];function z(e,i){if(e==null)return{};var l=I(e,i),r,a;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(l[r]=e[r]))}return l}function I(e,i){if(e==null)return{};var l={},r=Object.keys(e),a,t;for(t=0;t<r.length;t++)a=r[t],!(i.indexOf(a)>=0)&&(l[a]=e[a]);return l}var W={"aria-label":n.exports.string,children:n.exports.node,className:n.exports.string,cssModule:n.exports.object,listClassName:n.exports.string,listTag:g,tag:g};function f(e){var i=e.className,l=e.listClassName,r=e.cssModule,a=e.children,t=e.tag,m=t===void 0?"nav":t,c=e.listTag,N=c===void 0?"ol":c,v=e["aria-label"],y=v===void 0?"breadcrumb":v,x=z(e,L),j=b(u(i),r),O=b(u("breadcrumb",l),r);return s(m,{...x,className:j,"aria-label":y,children:s(N,{className:O,children:a})})}f.propTypes=W;var q=["className","cssModule","active","tag"];function D(e,i){if(e==null)return{};var l=S(e,i),r,a;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],!(i.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(l[r]=e[r]))}return l}function S(e,i){if(e==null)return{};var l={},r=Object.keys(e),a,t;for(t=0;t<r.length;t++)a=r[t],!(i.indexOf(a)>=0)&&(l[a]=e[a]);return l}var E={active:n.exports.bool,className:n.exports.string,cssModule:n.exports.object,tag:g};function h(e){var i=e.className,l=e.cssModule,r=e.active,a=e.tag,t=a===void 0?"li":a,m=D(e,q),c=b(u(i,r?"active":!1,"breadcrumb-item"),l);return s(t,{...m,className:c,"aria-current":r?"page":void 0})}h.propTypes=E;const G=e=>{const{data:i,title:l}=e;return o("div",{className:"content-header row",children:[s("div",{className:"content-header-left col-md-9 col-12 mb-2",children:s("div",{className:"row breadcrumbs-top",children:o("div",{className:"col-12",children:[l?s("h2",{className:"content-header-title float-start mb-0",children:l}):"",s("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:o(f,{children:[s(h,{tag:"li",children:s(d,{to:"/",children:"Home"})}),(()=>i.map((a,t)=>{const m=a.link?d:T.exports.Fragment,c=i.length-1===t;return s(h,{tag:"li",active:!c,className:u({"text-primary":!c}),children:s(m,{...a.link?{to:a.link}:{},children:a.title})},t)}))()]})})]})})}),s("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:s("div",{className:"breadcrumb-right dropdown",children:o(_,{children:[s(k,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:s($,{size:14})}),o(C,{tag:"ul",end:!0,children:[o(p,{tag:d,to:"/apps/todo",children:[s(w,{className:"me-1",size:14}),s("span",{className:"align-middle",children:"Todo"})]}),o(p,{tag:d,to:"/apps/chat",children:[s(M,{className:"me-1",size:14}),s("span",{className:"align-middle",children:"Chat"})]}),o(p,{tag:d,to:"/apps/email",children:[s(P,{className:"me-1",size:14}),s("span",{className:"align-middle",children:"Email"})]}),o(p,{tag:d,to:"/apps/calendar",children:[s(B,{className:"me-1",size:14}),s("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})};G.propTypes={title:n.exports.string.isRequired,data:n.exports.arrayOf(n.exports.shape({link:n.exports.string,title:n.exports.string.isRequired}))};export{G as B,f as a,h as b};