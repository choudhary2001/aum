import{r as l,J as f,k as a,p as s}from"./index.dff4e684.js";function y(r,n){if(r==null)return{};var i=x(r,n),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(n.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(i[t]=r[t]))}return i}function x(r,n){if(r==null)return{};var i={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(n.indexOf(e)>=0)&&(i[e]=r[e]);return i}var p=l.exports.forwardRef(function(r,n){var i=r.color,t=i===void 0?"currentColor":i,e=r.size,o=e===void 0?24:e,c=y(r,["color","size"]);return f("svg",{ref:n,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...c,children:[a("circle",{cx:"11",cy:"11",r:"8"}),a("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="Search";const u=p;export{u as S};
