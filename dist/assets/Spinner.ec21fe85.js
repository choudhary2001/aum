import{t as m,p as o,m as d,j as v,k as f}from"./index.dff4e684.js";var h=["className","cssModule","type","size","color","children","tag"];function b(e,n){if(e==null)return{};var a=x(e,n),r,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],!(n.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(a[r]=e[r]))}return a}function x(e,n){if(e==null)return{};var a={},r=Object.keys(e),t,s;for(s=0;s<r.length;s++)t=r[s],!(n.indexOf(t)>=0)&&(a[t]=e[t]);return a}var O={tag:m,type:o.exports.oneOf(["border","grow"]),size:o.exports.oneOf(["sm"]),color:o.exports.oneOf(["primary","secondary","success","danger","warning","info","light","dark"]),className:o.exports.string,cssModule:o.exports.object,children:o.exports.string};function j(e){var n=e.className,a=e.cssModule,r=e.type,t=r===void 0?"border":r,s=e.size,i=e.color,c=e.children,l=c===void 0?"Loading...":c,p=e.tag,y=p===void 0?"div":p,g=b(e,h),u=d(v(n,s?"spinner-".concat(t,"-").concat(s):!1,"spinner-".concat(t),i?"text-".concat(i):!1),a);return f(y,{role:"status",...g,className:u,children:l&&f("span",{className:d("visually-hidden",a),children:l})})}j.propTypes=O;export{j as S};