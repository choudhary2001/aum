import{r as l,J as f,k as a,p as s}from"./index.dff4e684.js";function u(r,n){if(r==null)return{};var i=v(r,n),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(i[t]=r[t]))}return i}function v(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}var p=l.exports.forwardRef(function(r,n){var i=r.color,t=i===void 0?"currentColor":i,e=r.size,o=e===void 0?24:e,c=u(r,["color","size"]);return f("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[a("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),a("circle",{cx:"12",cy:"10",r:"3"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="MapPin";const g=p;export{g as M};
