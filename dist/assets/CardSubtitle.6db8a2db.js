import{p as n,t as l,m as p,j as c,k as u}from"./index.dff4e684.js";var f=["className","cssModule","tag"];function g(t,o){if(t==null)return{};var s=b(t,o),e,a;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)e=r[a],!(o.indexOf(e)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,e)||(s[e]=t[e]))}return s}function b(t,o){if(t==null)return{};var s={},e=Object.keys(t),a,r;for(r=0;r<e.length;r++)a=e[r],!(o.indexOf(a)>=0)&&(s[a]=t[a]);return s}var m={className:n.exports.string,cssModule:n.exports.object,tag:l};function v(t){var o=t.className,s=t.cssModule,e=t.tag,a=e===void 0?"div":e,r=g(t,f),i=p(c(o,"card-subtitle"),s);return u(a,{...r,className:i})}v.propTypes=m;export{v as C};