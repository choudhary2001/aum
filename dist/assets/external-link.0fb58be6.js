import{r as f,J as c,k as a,p as s}from"./index.dff4e684.js";function x(r,i){if(r==null)return{};var n=y(r,i),t,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(e=0;e<o.length;e++)t=o[e],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,t)||(n[t]=r[t]))}return n}function y(r,i){if(r==null)return{};var n={},t=Object.keys(r),e,o;for(o=0;o<t.length;o++)e=t[o],!(i.indexOf(e)>=0)&&(n[e]=r[e]);return n}var p=f.exports.forwardRef(function(r,i){var n=r.color,t=n===void 0?"currentColor":n,e=r.size,o=e===void 0?24:e,l=x(r,["color","size"]);return c("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:[a("path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}),a("polyline",{points:"15 3 21 3 21 9"}),a("line",{x1:"10",y1:"14",x2:"21",y2:"3"})]})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="ExternalLink";const u=p;export{u as E};
