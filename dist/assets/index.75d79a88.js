import{r as s,bP as Ge,k as e,l as ze,J as c,ax as O,f as We,bb as je}from"./index.dff4e684.js";import{R as ue,C}from"./Col.96fcbc17.js";import{B as Ye}from"./index.8bb87258.js";import{_ as qe,S as D,d as Je,m as He,a as ge,b as ie,v as Ue,g as Qe,e as Xe,u as Oe,f as Ne,h as Ze,c as Ke}from"./react-select.esm.82b43af0.js";import{J as et,K as tt,L as xe,s as F,I as B,_,p as w,T as Pe}from"./App.37a2596a.js";import{C as Z}from"./Card.514988a9.js";import{C as K}from"./CardBody.8c73518d.js";import{C as ee}from"./CardHeader.5294cf1e.js";import{C as te}from"./CardTitle.aebc4d98.js";import{L as v}from"./Label.138433f0.js";import{F as at,T as nt}from"./twitter.1e1ef9e2.js";import{L as rt}from"./linkedin.e20ad4e1.js";import{G as lt}from"./github.03ebc23e.js";import{I as it}from"./instagram.46bbe431.js";import{D as ot,G as st,F as ct,C as ut,a as dt}from"./globe.bc4a862c.js";import{F as pt}from"./file.b7fedcd7.js";import{F as mt}from"./file-text.4fa0d8cb.js";import{I as ft}from"./image.8bb92c9e.js";import{S as ht}from"./slack.a96bed02.js";import{Y as vt}from"./youtube.3ae2d70a.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./emotion-memoize.esm.06f0e458.js";function de(a,t){var n=function(l){return t&&s.exports.isValidElement(l)?t(l):l},i=Object.create(null);return a&&s.exports.Children.map(a,function(r){return r}).forEach(function(r){i[r.key]=n(r)}),i}function bt(a,t){a=a||{},t=t||{};function n(f){return f in t?t[f]:a[f]}var i=Object.create(null),r=[];for(var l in a)l in t?r.length&&(i[l]=r,r=[]):r.push(l);var o,u={};for(var d in t){if(i[d])for(o=0;o<i[d].length;o++){var m=i[d][o];u[i[d][o]]=n(m)}u[d]=n(d)}for(o=0;o<r.length;o++)u[r[o]]=n(r[o]);return u}function G(a,t,n){return n[t]!=null?n[t]:a.props[t]}function gt(a,t){return de(a.children,function(n){return s.exports.cloneElement(n,{onExited:t.bind(null,n),in:!0,appear:G(n,"appear",a),enter:G(n,"enter",a),exit:G(n,"exit",a)})})}function xt(a,t,n){var i=de(a.children),r=bt(t,i);return Object.keys(r).forEach(function(l){var o=r[l];if(!!s.exports.isValidElement(o)){var u=l in t,d=l in i,m=t[l],f=s.exports.isValidElement(m)&&!m.props.in;d&&(!u||f)?r[l]=s.exports.cloneElement(o,{onExited:n.bind(null,o),in:!0,exit:G(o,"exit",a),enter:G(o,"enter",a)}):!d&&u&&!f?r[l]=s.exports.cloneElement(o,{in:!1}):d&&u&&s.exports.isValidElement(m)&&(r[l]=s.exports.cloneElement(o,{onExited:n.bind(null,o),in:m.props.in,exit:G(o,"exit",a),enter:G(o,"enter",a)}))}}),r}var Ct=Object.values||function(a){return Object.keys(a).map(function(t){return a[t]})},St={component:"div",childFactory:function(t){return t}},pe=function(a){et(t,a);function t(i,r){var l;l=a.call(this,i,r)||this;var o=l.handleExited.bind(Ge(l));return l.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},l}var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(r,l){var o=l.children,u=l.handleExited,d=l.firstRender;return{children:d?gt(r,u):xt(r,o,u),firstRender:!1}},n.handleExited=function(r,l){var o=de(this.props.children);r.key in o||(r.props.onExited&&r.props.onExited(l),this.mounted&&this.setState(function(u){var d=qe({},u.children);return delete d[r.key],{children:d}}))},n.render=function(){var r=this.props,l=r.component,o=r.childFactory,u=tt(r,["component","childFactory"]),d=this.state.contextValue,m=Ct(this.state.children).map(o);return delete u.appear,delete u.enter,delete u.exit,l===null?e(xe.Provider,{value:d,children:m}):e(xe.Provider,{value:d,children:e(l,{...u,children:m})})},t}(ze.Component);pe.propTypes={};pe.defaultProps=St;const Ve=pe,$=[{value:"ocean",label:"Ocean"},{value:"blue",label:"Blue"},{value:"purple",label:"Purple"},{value:"red",label:"Red"},{value:"orange",label:"Orange"}],Ot=()=>c(Z,{children:[e(ee,{children:e(te,{tag:"h4",children:"React Select"})}),c(K,{children:[c("p",{children:["React Select is a flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support. You can read it's documentation from"," ",e("a",{className:"my-50",target:"_blank",href:"https://react-select.com/home",rel:"noopener noreferrer",children:"here"}),"."]}),c(ue,{children:[c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Basic"}),e(D,{theme:F,className:"react-select",classNamePrefix:"select",defaultValue:$[0],options:$,isClearable:!1})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Clearable"}),e(D,{theme:F,className:"react-select",classNamePrefix:"select",defaultValue:$[1],name:"clear",options:$,isClearable:!0})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Loading"}),e(D,{theme:F,className:"react-select",classNamePrefix:"select",defaultValue:$[2],name:"loading",options:$,isLoading:!0,isClearable:!1})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Disabled"}),e(D,{theme:F,className:"react-select",classNamePrefix:"select",defaultValue:$[3],name:"disabled",options:$,isDisabled:!0,isClearable:!1})]})]})]})]}),Nt=()=>c(Z,{children:[e(ee,{children:e(te,{tag:"h4",children:"Bootstrap Sizing"})}),c(K,{children:[c("div",{className:"mb-1",children:[e(v,{className:"form-label",for:"select-lg",children:"Select Large"}),c(B,{type:"select",name:"select",bsSize:"lg",id:"select-lg",children:[e("option",{children:"Pulp Fiction"}),e("option",{children:"Nightcrawler"}),e("option",{children:"Donnie Darko"})]})]}),c("div",{className:"mb-1",children:[e(v,{className:"form-label",for:"select-default",children:"Select Default"}),c(B,{type:"select",name:"select",id:"select-default",children:[e("option",{children:"Pulp Fiction"}),e("option",{children:"Nightcrawler"}),e("option",{children:"Donnie Darko"})]})]}),c("div",{children:[e(v,{className:"form-label",for:"select-sm",children:"Select Small"}),c(B,{type:"select",name:"select",bsSize:"sm",id:"select-sm",children:[e("option",{children:"Pulp Fiction"}),e("option",{children:"Nightcrawler"}),e("option",{children:"Donnie Darko"})]})]})]})]});var Pt=["in","onExited","appear","enter","exit"],Vt=function(t){return function(n){n.in,n.onExited,n.appear,n.enter,n.exit;var i=_(n,Pt);return e(t,{...i})}},yt=Vt,wt=["component","duration","in","onExited"],ye=function(t){var n=t.component,i=t.duration,r=i===void 0?1:i,l=t.in;t.onExited;var o=_(t,wt),u=s.exports.useRef(null),d={entering:{opacity:0},entered:{opacity:1,transition:"opacity ".concat(r,"ms")},exiting:{opacity:0},exited:{opacity:0}};return e(Pe,{mountOnEnter:!0,unmountOnExit:!0,in:l,timeout:r,nodeRef:u,children:function(m){var f={style:O({},d[m]),ref:u};return e(n,{innerProps:f,...o})}})},ce=260,Ft=function(t){var n=t.children,i=t.in,r=t.onExited,l=s.exports.useRef(null),o=s.exports.useState("auto"),u=w(o,2),d=u[0],m=u[1];s.exports.useEffect(function(){var g=l.current;if(!!g){var h=window.requestAnimationFrame(function(){return m(g.getBoundingClientRect().width)});return function(){return window.cancelAnimationFrame(h)}}},[]);var f=function(h){switch(h){default:return{width:d};case"exiting":return{width:0,transition:"width ".concat(ce,"ms ease-out")};case"exited":return{width:0}}};return e(Pe,{enter:!1,mountOnEnter:!0,unmountOnExit:!0,in:i,onExited:function(){var h=l.current;!h||r==null||r(h)},timeout:ce,nodeRef:l,children:function(g){return e("div",{ref:l,style:O({overflow:"hidden",whiteSpace:"nowrap"},f(g)),children:n})}})},Et=["in","onExited"],Lt=function(t){return function(n){var i=n.in,r=n.onExited,l=_(n,Et);return e(Ft,{in:i,onExited:r,children:e(t,{cropWithEllipsis:i,...l})})}},Dt=Lt,It=function(t){return function(n){return e(ye,{component:t,duration:n.isMulti?ce:1,...n})}},Mt=It,At=function(t){return function(n){return e(ye,{component:t,...n})}},$t=At,_t=["component"],Rt=["children"],kt=function(t){return function(n){return n.isMulti?e(Tt,{component:t,...n}):e(Ve,{component:t,...n})}},Tt=function(t){var n=t.component,i=_(t,_t),r=Bt(i);return e(Ve,{component:n,...r})},Bt=function(t){var n=t.children,i=_(t,Rt),r=i.isMulti,l=i.hasValue,o=i.innerProps,u=i.selectProps,d=u.components,m=u.controlShouldRenderValue,f=s.exports.useState(r&&m&&l),g=w(f,2),h=g[0],x=g[1],N=s.exports.useState(!1),p=w(N,2),b=p[0],E=p[1];s.exports.useEffect(function(){l&&!h&&x(!0)},[l,h]),s.exports.useEffect(function(){b&&!l&&h&&x(!1),E(!1)},[b,l,h]);var L=function(){return E(!0)},z=function(y){if(r&&s.exports.isValidElement(y)){if(y.type===d.MultiValue)return s.exports.cloneElement(y,{onExited:L});if(y.type===d.Placeholder&&h)return null}return y},P=O(O({},o),{},{style:O(O({},o==null?void 0:o.style),{},{display:r&&l||h?"flex":"grid"})}),R=O(O({},i),{},{innerProps:P,children:s.exports.Children.toArray(n).map(z)});return R},Gt=kt,zt=["Input","MultiValue","Placeholder","SingleValue","ValueContainer"],we=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Je({components:t}),i=n.Input,r=n.MultiValue,l=n.Placeholder,o=n.SingleValue,u=n.ValueContainer,d=_(n,zt);return O({Input:yt(i),MultiValue:Dt(r),Placeholder:Mt(l),SingleValue:$t(o),ValueContainer:Gt(u)},d)},U=we();U.Input;U.MultiValue;U.Placeholder;U.SingleValue;U.ValueContainer;var Wt=He(we),jt=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],Ce=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,i=arguments.length>2?arguments[2]:void 0,r=String(t).toLowerCase(),l=String(i.getOptionValue(n)).toLowerCase(),o=String(i.getOptionLabel(n)).toLowerCase();return l===r||o===r},oe={formatCreateLabel:function(t){return'Create "'.concat(t,'"')},isValidNewOption:function(t,n,i,r){return!(!t||n.some(function(l){return Ce(t,l,r)})||i.some(function(l){return Ce(t,l,r)}))},getNewOptionData:function(t,n){return{label:n,value:t,__isNew__:!0}}};function Yt(a){var t=a.allowCreateWhileLoading,n=t===void 0?!1:t,i=a.createOptionPosition,r=i===void 0?"last":i,l=a.formatCreateLabel,o=l===void 0?oe.formatCreateLabel:l,u=a.isValidNewOption,d=u===void 0?oe.isValidNewOption:u,m=a.getNewOptionData,f=m===void 0?oe.getNewOptionData:m,g=a.onCreateOption,h=a.options,x=h===void 0?[]:h,N=a.onChange,p=_(a,jt),b=p.getOptionValue,E=b===void 0?Qe:b,L=p.getOptionLabel,z=L===void 0?Xe:L,P=p.inputValue,R=p.isLoading,I=p.isMulti,y=p.value,Y=p.name,M=s.exports.useMemo(function(){return d(P,ge(y),x,{getOptionValue:E,getOptionLabel:z})?f(P,o(P)):void 0},[o,f,z,E,P,d,x,y]),k=s.exports.useMemo(function(){return(n||!R)&&M?r==="first"?[M].concat(ie(x)):[].concat(ie(x),[M]):x},[n,r,R,M,x]),ae=s.exports.useCallback(function(A,T){if(T.action!=="select-option")return N(A,T);var W=Array.isArray(A)?A:[A];if(W[W.length-1]===M){if(g)g(P);else{var q=f(P,P),Q={action:"create-option",name:Y,option:q};N(Ue(I,[].concat(ie(ge(y)),[q]),q),Q)}return}N(A,T)},[f,P,I,Y,M,g,N,y]);return O(O({},p),{},{options:k,onChange:ae})}var qt=s.exports.forwardRef(function(a,t){var n=Oe(a),i=Yt(n);return e(Ne,{ref:t,...i})}),Jt=qt,Ht=["defaultOptions","cacheOptions","loadOptions","options","isLoading","onInputChange","filterOption"];function Ut(a){var t=a.defaultOptions,n=t===void 0?!1:t,i=a.cacheOptions,r=i===void 0?!1:i,l=a.loadOptions;a.options;var o=a.isLoading,u=o===void 0?!1:o,d=a.onInputChange,m=a.filterOption,f=m===void 0?null:m,g=_(a,Ht),h=g.inputValue,x=s.exports.useRef(void 0),N=s.exports.useRef(!1),p=s.exports.useState(Array.isArray(n)?n:void 0),b=w(p,2),E=b[0],L=b[1],z=s.exports.useState(typeof h<"u"?h:""),P=w(z,2),R=P[0],I=P[1],y=s.exports.useState(n===!0),Y=w(y,2),M=Y[0],k=Y[1],ae=s.exports.useState(void 0),A=w(ae,2),T=A[0],W=A[1],q=s.exports.useState([]),Q=w(q,2),Fe=Q[0],ne=Q[1],Ee=s.exports.useState(!1),me=w(Ee,2),Le=me[0],X=me[1],De=s.exports.useState({}),fe=w(De,2),J=fe[0],he=fe[1],Ie=s.exports.useState(void 0),ve=w(Ie,2),Me=ve[0],Ae=ve[1],$e=s.exports.useState(void 0),be=w($e,2),_e=be[0],Re=be[1];r!==_e&&(he({}),Re(r)),n!==Me&&(L(Array.isArray(n)?n:void 0),Ae(n)),s.exports.useEffect(function(){return N.current=!0,function(){N.current=!1}},[]);var re=s.exports.useCallback(function(H,j){if(!l)return j();var V=l(H,j);V&&typeof V.then=="function"&&V.then(j,function(){return j()})},[l]);s.exports.useEffect(function(){n===!0&&re(R,function(H){!N.current||(L(H||[]),k(!!x.current))})},[]);var ke=s.exports.useCallback(function(H,j){var V=Ze(H,j,d);if(!V){x.current=void 0,I(""),W(""),ne([]),k(!1),X(!1);return}if(r&&J[V])I(V),W(V),ne(J[V]),k(!1),X(!1);else{var Be=x.current={};I(V),k(!0),X(!T),re(V,function(le){!N||Be===x.current&&(x.current=void 0,k(!1),W(V),ne(le||[]),X(!1),he(le?O(O({},J),{},We({},V,le)):J))})}},[r,re,T,J,d]),Te=Le?[]:R&&T?Fe:E||[];return O(O({},g),{},{options:Te,isLoading:M||u,onInputChange:ke,filterOption:f})}var Qt=s.exports.forwardRef(function(a,t){var n=Ut(a),i=Oe(n);return e(Ne,{ref:t,...i})}),se=Qt;const S=[{value:"ocean",label:"Ocean",color:"#00B8D9",isFixed:!0},{value:"blue",label:"Blue",color:"#0052CC",isFixed:!0},{value:"purple",label:"Purple",color:"#5243AA",isFixed:!0},{value:"red",label:"Red",color:"#FF5630",isFixed:!1},{value:"orange",label:"Orange",color:"#FF8B00",isFixed:!1},{value:"yellow",label:"Yellow",color:"#FFC400",isFixed:!1}],Xt=[{label:"Social Media",options:[{value:"facebook",label:"Facebook",icon:at},{value:"twitter",label:"Twitter",icon:nt},{value:"linkedin",label:"Linkedin",icon:rt},{value:"github",label:"Github",icon:lt},{value:"instagram",label:"Instagram",icon:it},{value:"dribbble",label:"Dribbble",icon:ot},{value:"gitlab",label:"Gitlab",icon:st}]},{label:"File Types",options:[{value:"pdf",label:"PDF",icon:pt},{value:"txt",label:"txt",icon:mt},{value:"image",label:"Image",icon:ft}]},{label:"Others",options:[{value:"figma",label:"Figma",icon:ct},{value:"chrome",label:"Chrome",icon:ut},{value:"safari",label:"Safari",icon:dt},{value:"slack",label:"Slack",icon:ht},{value:"youtube",label:"Youtube",icon:vt}]}],Zt=({data:a,...t})=>{const n=a.icon;return c(Ke.Option,{...t,children:[e(n,{className:"me-50",size:14}),a.label]})},Kt=[{label:"Ice Creams",options:[{value:"vanilla",label:"Vanilla"},{value:"Dark Chocolate",label:"Dark Chocolate"},{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"salted-caramel",label:"Salted Caramel"}]},{label:"Snacks",options:[{value:"Pizza",label:"Pizza"},{value:"Burger",label:"Burger"},{value:"Pasta",label:"Pasta"},{value:"Pretzel",label:"Pretzel"},{value:"Popcorn",label:"Popcorn"}]}],ea=Wt(),ta={multiValue:(a,t)=>t.data.isFixed?{...a,opacity:"0.5"}:a,multiValueLabel:(a,t)=>t.data.isFixed?{...a,color:"#626262",paddingRight:6}:a,multiValueRemove:(a,t)=>t.data.isFixed?{...a,display:"none"}:a},Se=a=>{if(a.length>0)return a.filter(t=>t.isFixed).concat(a.filter(t=>!t.isFixed))},aa=a=>c("div",{className:"d-flex justify-content-between align-center",children:[e("strong",{children:e("span",{children:a.label})}),e("span",{children:a.options.length})]}),na=()=>{const[a,t]=s.exports.useState(""),[n,i]=s.exports.useState(null),[r,l]=s.exports.useState(Se([S[0],S[1],S[3]])),o=p=>S.filter(b=>b.label.toLowerCase().includes(p.toLowerCase())),u=(p,b)=>{setTimeout(()=>{b(o(p))},2e3)},d=p=>S.filter(b=>b.label.toLowerCase().includes(p.toLowerCase())),m=(p,{action:b,removedValue:E})=>{switch(b){case"remove-value":case"pop-value":if(E.isFixed)return;break;case"clear":p=S.filter(L=>L.isFixed);break}p=Se(p),l(p)},f=p=>p.replace(/\W/g,""),g=p=>{t(p)},h=p=>{i(p)},x=p=>new Promise(b=>{setTimeout(()=>{b(d(p))},2e3)}),N=()=>je.get("/api/select/data",{query:a}).then(p=>p.data);return c(Z,{children:[e(ee,{children:e(te,{tag:"h4",children:"Options"})}),e(K,{children:c(ue,{children:[c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Multi Select"}),e(D,{isClearable:!1,theme:F,defaultValue:[S[2],S[3]],isMulti:!0,name:"colors",options:S,className:"react-select",classNamePrefix:"select"})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Grouped Select"}),e(D,{isClearable:!1,theme:F,defaultValue:S[1],options:Kt,formatGroupLabel:aa,className:"react-select",classNamePrefix:"select"})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Animated Select"}),e(D,{isClearable:!1,theme:F,closeMenuOnSelect:!1,components:ea,defaultValue:[S[4],S[5]],isMulti:!0,options:S,className:"react-select",classNamePrefix:"select"})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Fixed Options Select"}),e(D,{isClearable:!1,value:r,styles:ta,isMulti:!0,onChange:m,theme:F,name:"colors",className:"react-select",classNamePrefix:"select",options:S})]}),c(C,{md:6,xs:12,className:"mb-1",children:[e(v,{className:"form-label",children:"Async Callback Select"}),e(se,{isClearable:!1,className:"react-select",classNamePrefix:"select",name:"callback-react-select",loadOptions:u,defaultOptions:!0,onInputChange:f,theme:F})]}),c(C,{md:6,xs:12,className:"mb-1",children:[e(v,{className:"form-label",children:"Async Promises Select"}),e(se,{isClearable:!1,className:"react-select",classNamePrefix:"select",loadOptions:x,cacheOptions:!0,defaultOptions:!0})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Creatable Select"}),e(Jt,{options:S,className:"react-select",classNamePrefix:"select"})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Icons"}),e(D,{options:Xt,className:"react-select",classNamePrefix:"select",components:{Option:Zt}})]}),c(C,{className:"mb-1",md:"6",sm:"12",children:[e(v,{className:"form-label",children:"Async Select With Database"}),e(se,{defaultOptions:!0,isClearable:!1,value:n,name:"db-react-select",className:"react-select",classNamePrefix:"select",onChange:h,theme:F,loadOptions:N,onInputChange:g})]})]})})]})},ra=()=>c(Z,{children:[e(ee,{children:e(te,{tag:"h4",children:"Reactstrap Select"})}),c(K,{children:[c("div",{className:"mb-1",children:[e(v,{className:"form-label",for:"select-basic",children:"Basic Select"}),c(B,{type:"select",name:"select",id:"select-basic",children:[e("option",{children:"Pulp Fiction"}),e("option",{children:"Nightcrawler"}),e("option",{children:"Donnie Darko"})]})]}),c("div",{className:"mb-1",children:[e(v,{className:"form-label",for:"select-custom",children:"Custom Select"}),c(B,{type:"select",name:"select",id:"select-custom",children:[e("option",{children:"Pulp Fiction"}),e("option",{children:"Nightcrawler"}),e("option",{children:"Donnie Darko"})]})]}),c("div",{className:"mb-1",children:[e(v,{className:"form-label",for:"select-disabled",children:"Disabled Select"}),c(B,{type:"select",name:"select",id:"select-disabled",disabled:!0,children:[e("option",{children:"Pulp Fiction"}),e("option",{children:"Nightcrawler"}),e("option",{children:"Donnie Darko"})]})]}),c("div",{children:[e(v,{className:"form-label",for:"select-multi",children:"Multiple Select"}),c(B,{type:"select",name:"select",id:"select-multi",multiple:!0,children:[e("option",{children:"Square"}),e("option",{children:"Rectangle"}),e("option",{children:"Circle"}),e("option",{children:"Triangle"}),e("option",{children:"Pentagon"})]})]})]})]}),Ea=()=>c(s.exports.Fragment,{children:[e(Ye,{title:"Select",data:[{title:"Form Elements"},{title:"Select"}]}),c(ue,{children:[e(C,{sm:"12",children:e(Ot,{})}),e(C,{sm:"12",children:e(na,{})}),e(C,{md:"6",sm:"12",children:e(ra,{})}),e(C,{md:"6",sm:"12",children:e(Nt,{})})]})]});export{Ea as default};