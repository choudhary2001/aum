import{r as a,k as f,p as s}from"./index.dff4e684.js";function c(e,i){if(e==null)return{};var n=v(e,i),t,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],!(i.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function v(e,i){if(e==null)return{};var n={},t=Object.keys(e),r,o;for(o=0;o<t.length;o++)r=t[o],!(i.indexOf(r)>=0)&&(n[r]=e[r]);return n}var p=a.exports.forwardRef(function(e,i){var n=e.color,t=n===void 0?"currentColor":n,r=e.size,o=r===void 0?24:r,l=c(e,["color","size"]);return f("svg",{ref:i,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...l,children:f("polyline",{points:"15 18 9 12 15 6"})})});p.propTypes={color:s.exports.string,size:s.exports.oneOfType([s.exports.string,s.exports.number])};p.displayName="ChevronLeft";const u=p;export{u as C};