import{p as t,t as M,ab as F,m as P,j,k as $}from"./index.dff4e684.js";var E=["className","cssModule","hidden","widths","tag","check","size","for"];function b(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function N(e,a){if(e==null)return{};var o=_(e,a),r,n;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],!(a.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(o[r]=e[r]))}return o}function _(e,a){if(e==null)return{};var o={},r=Object.keys(e),n,l;for(l=0;l<r.length;l++)n=r[l],!(a.indexOf(n)>=0)&&(o[n]=e[n]);return o}var q=["xs","sm","md","lg","xl","xxl"],x=t.exports.oneOfType([t.exports.number,t.exports.string]),c=t.exports.oneOfType([t.exports.bool,t.exports.string,t.exports.number,t.exports.shape({size:x,order:x,offset:x})]),A={children:t.exports.node,hidden:t.exports.bool,check:t.exports.bool,size:t.exports.string,for:t.exports.string,tag:M,className:t.exports.string,cssModule:t.exports.object,xs:c,sm:c,md:c,lg:c,xl:c,xxl:c,widths:t.exports.array},w=function(a,o,r){return r===!0||r===""?a?"col":"col-".concat(o):r==="auto"?a?"col-auto":"col-".concat(o,"-auto"):a?"col-".concat(r):"col-".concat(o,"-").concat(r)};function B(e){var a=e.className,o=e.cssModule,r=e.hidden,n=e.widths,l=n===void 0?q:n,v=e.tag,T=v===void 0?"label":v,g=e.check,d=e.size,k=e.for,h=N(e,E),u=[];l.forEach(function(i,L){var s=e[i];if(delete h[i],!(!s&&s!=="")){var m=!L,p;if(F(s)){var f,O=m?"-":"-".concat(i,"-");p=w(m,i,s.size),u.push(P(j((f={},b(f,p,s.size||s.size===""),b(f,"order".concat(O).concat(s.order),s.order||s.order===0),b(f,"offset".concat(O).concat(s.offset),s.offset||s.offset===0),f))),o)}else p=w(m,i,s),u.push(p)}});var y=d||u.length,C=!(g||y),z=P(j(a,r?"visually-hidden":!1,g?"form-check-label":!1,d?"col-form-label-".concat(d):!1,u,y?"col-form-label":!1,C?"form-label":!1),o);return $(T,{htmlFor:k,...h,className:z})}B.propTypes=A;export{B as L};
