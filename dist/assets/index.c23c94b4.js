import{l as R,t as Ie,p as s,k as a,z as $,m as b,j as I,T as Ce,q as ke,J as f,r as E,c3 as ue,b$ as W,c1 as Ee,c2 as Te,c0 as de,b_ as pe,bQ as Oe}from"./index.dff4e684.js";import{C as _}from"./index.8b812b30.js";import{B as Se}from"./index.8bb87258.js";import{T as te}from"./App.37a2596a.js";import{s as re,a as fe}from"./05.826ce009.js";import{c as _e}from"./08.f1bba1b6.js";import{R as je,C}from"./Col.96fcbc17.js";import{C as H}from"./CardText.dd9505fe.js";import{A as Pe}from"./Alert.36ececc1.js";import{I as we}from"./info.bd539442.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./Fade.f1e5f77c.js";var U=R.createContext({});function G(t){return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},G(t)}var Ne=["in","children","cssModule","slide","tag","className"];function ae(t,r){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),i.push.apply(i,n)}return i}function D(t){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?ae(Object(i),!0).forEach(function(n){$e(t,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):ae(Object(i)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))})}return t}function $e(t,r,i){return r in t?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t}function Re(t,r){if(t==null)return{};var i=He(t,r),n,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(i[n]=t[n]))}return i}function He(t,r){if(t==null)return{};var i={},n=Object.keys(t),e,o;for(o=0;o<n.length;o++)e=n[o],!(r.indexOf(e)>=0)&&(i[e]=t[e]);return i}function Ae(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function se(t,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function Me(t,r,i){return r&&se(t.prototype,r),i&&se(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ue(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&F(t,r)}function F(t,r){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},F(t,r)}function De(t){var r=Le();return function(){var n=K(t),e;if(r){var o=K(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Ke(this,e)}}function Ke(t,r){if(r&&(G(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return j(t)}function j(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Le(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function K(t){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},K(t)}var q=function(t){Ue(i,t);var r=De(i);function i(n){var e;return Ae(this,i),e=r.call(this,n),e.state={startAnimation:!1},e.onEnter=e.onEnter.bind(j(e)),e.onEntering=e.onEntering.bind(j(e)),e.onExit=e.onExit.bind(j(e)),e.onExiting=e.onExiting.bind(j(e)),e.onExited=e.onExited.bind(j(e)),e}return Me(i,[{key:"onEnter",value:function(e,o){this.setState({startAnimation:!1}),this.props.onEnter(e,o)}},{key:"onEntering",value:function(e,o){var l=e.offsetHeight;return this.setState({startAnimation:!0}),this.props.onEntering(e,o),l}},{key:"onExit",value:function(e){this.setState({startAnimation:!1}),this.props.onExit(e)}},{key:"onExiting",value:function(e){this.setState({startAnimation:!0}),e.dispatchEvent(new CustomEvent("slide.bs.carousel")),this.props.onExiting(e)}},{key:"onExited",value:function(e){e.dispatchEvent(new CustomEvent("slid.bs.carousel")),this.props.onExited(e)}},{key:"render",value:function(){var e=this,o=this.props,l=o.in,u=o.children,d=o.cssModule,p=o.slide,c=p===void 0?!0:p,h=o.tag,g=h===void 0?"div":h,y=o.className,m=Re(o,Ne);return a(te,{...m,enter:c,exit:c,in:l,onEnter:this.onEnter,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited,children:function(x){var O=e.context.direction,v=x===$.ENTERED||x===$.EXITING,w=(x===$.ENTERING||x===$.EXITING)&&e.state.startAnimation&&(O==="end"?"carousel-item-start":"carousel-item-end"),N=x===$.ENTERING&&(O==="end"?"carousel-item-next":"carousel-item-prev"),V=b(I(y,"carousel-item",v&&"active",w,N),d);return a(g,{className:V,children:u})}})}}]),i}(R.Component);q.propTypes=D(D({},te.propTypes),{},{tag:Ie,in:s.exports.bool,cssModule:s.exports.object,children:s.exports.node,slide:s.exports.bool,className:s.exports.string});q.defaultProps=D(D({},te.defaultProps),{},{timeout:Ce.Carousel});q.contextType=U;const X=q;function J(t){return J=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},J(t)}function Be(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function ce(t,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function We(t,r,i){return r&&ce(t.prototype,r),i&&ce(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function qe(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&Q(t,r)}function Q(t,r){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},Q(t,r)}function Xe(t){var r=ze();return function(){var n=L(t),e;if(r){var o=L(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return Ye(this,e)}}function Ye(t,r){if(r&&(J(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return k(t)}function k(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ze(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},L(t)}var Ve=40,me={activeIndex:s.exports.number,next:s.exports.func.isRequired,previous:s.exports.func.isRequired,keyboard:s.exports.bool,pause:s.exports.oneOf(["hover",!1]),ride:s.exports.oneOf(["carousel"]),interval:s.exports.oneOfType([s.exports.number,s.exports.string,s.exports.bool]),children:s.exports.array,mouseEnter:s.exports.func,mouseLeave:s.exports.func,slide:s.exports.bool,dark:s.exports.bool,fade:s.exports.bool,cssModule:s.exports.object,className:s.exports.string,enableTouch:s.exports.bool},Ge=Object.keys(me),Fe={interval:5e3,pause:"hover",keyboard:!0,slide:!0,enableTouch:!0,fade:!1},ne=function(t){qe(i,t);var r=Xe(i);function i(n){var e;return Be(this,i),e=r.call(this,n),e.handleKeyPress=e.handleKeyPress.bind(k(e)),e.renderItems=e.renderItems.bind(k(e)),e.hoverStart=e.hoverStart.bind(k(e)),e.hoverEnd=e.hoverEnd.bind(k(e)),e.handleTouchStart=e.handleTouchStart.bind(k(e)),e.handleTouchEnd=e.handleTouchEnd.bind(k(e)),e.touchStartX=0,e.touchStartY=0,e.state={activeIndex:e.props.activeIndex,direction:"end",indicatorClicked:!1},e}return We(i,[{key:"componentDidMount",value:function(){this.props.ride==="carousel"&&this.setInterval(),document.addEventListener("keyup",this.handleKeyPress)}},{key:"componentDidUpdate",value:function(e,o){o.activeIndex!==this.state.activeIndex&&this.setInterval()}},{key:"componentWillUnmount",value:function(){this.clearInterval(),document.removeEventListener("keyup",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){this.props.keyboard&&(e.keyCode===37?this.props.previous():e.keyCode===39&&this.props.next())}},{key:"handleTouchStart",value:function(e){!this.props.enableTouch||(this.touchStartX=e.changedTouches[0].screenX,this.touchStartY=e.changedTouches[0].screenY)}},{key:"handleTouchEnd",value:function(e){if(!!this.props.enableTouch){var o=e.changedTouches[0].screenX,l=e.changedTouches[0].screenY,u=Math.abs(this.touchStartX-o),d=Math.abs(this.touchStartY-l);u<d||u<Ve||(o<this.touchStartX?this.props.next():this.props.previous())}}},{key:"getContextValue",value:function(){return{direction:this.state.direction}}},{key:"setInterval",value:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(){var n=this;this.clearInterval(),this.props.interval&&(this.cycleInterval=setInterval(function(){n.props.next()},parseInt(this.props.interval,10)))})},{key:"clearInterval",value:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(){clearInterval(this.cycleInterval)})},{key:"hoverStart",value:function(){if(this.props.pause==="hover"&&this.clearInterval(),this.props.mouseEnter){var e;(e=this.props).mouseEnter.apply(e,arguments)}}},{key:"hoverEnd",value:function(){if(this.props.pause==="hover"&&this.setInterval(),this.props.mouseLeave){var e;(e=this.props).mouseLeave.apply(e,arguments)}}},{key:"renderItems",value:function(e,o){var l=this,u=this.props.slide;return a("div",{className:o,children:e.map(function(d,p){var c=p===l.state.activeIndex;return R.cloneElement(d,{in:c,slide:u})})})}},{key:"render",value:function(){var e=this,o=this.props,l=o.cssModule,u=o.slide,d=o.className,p=o.dark,c=o.fade,h=ke(this.props,Ge),g=b(I(d,"carousel",c&&"carousel-fade",u&&"slide",p&&"carousel-dark"),l),y=b(I("carousel-inner"),l),m=this.props.children.filter(function(S){return S!=null&&typeof S!="boolean"}),x=m.every(function(S){return S.type===X});if(x)return a("div",{...h,className:g,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,children:a(U.Provider,{value:this.getContextValue(),children:this.renderItems(m,y)})});if(m[0]instanceof Array){var O=m[0],v=m[1],w=m[2];return a("div",{...h,className:g,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,children:f(U.Provider,{value:this.getContextValue(),children:[this.renderItems(O,y),v,w]})})}var N=m[0],V=function(be){typeof N.props.onClickHandler=="function"&&e.setState({indicatorClicked:!0},function(){return N.props.onClickHandler(be)})},ve=R.cloneElement(N,{onClickHandler:V}),xe=m[1],ge=m[2],ye=m[3];return a("div",{...h,className:g,onMouseEnter:this.hoverStart,onMouseLeave:this.hoverEnd,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd,children:f(U.Provider,{value:this.getContextValue(),children:[ve,this.renderItems(xe,y),ge,ye]})})}}],[{key:"getDerivedStateFromProps",value:function(e,o){var l=null,u=o.activeIndex,d=o.direction,p=o.indicatorClicked;return e.activeIndex!==u&&(e.activeIndex===u+1?d="end":e.activeIndex===u-1?d="start":e.activeIndex<u?d=p?"start":"end":e.activeIndex!==u&&(d=p?"end":"start"),l={activeIndex:e.activeIndex,direction:d,indicatorClicked:!1}),l}}]),i}(R.Component);ne.propTypes=me;ne.defaultProps=Fe;const ie=ne;var Je=["direction","onClickHandler","cssModule","directionText","className"];function Qe(t,r){if(t==null)return{};var i=Ze(t,r),n,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(i[n]=t[n]))}return i}function Ze(t,r){if(t==null)return{};var i={},n=Object.keys(t),e,o;for(o=0;o<n.length;o++)e=n[o],!(r.indexOf(e)>=0)&&(i[e]=t[e]);return i}function T(t){var r=t.direction,i=t.onClickHandler,n=t.cssModule,e=t.directionText,o=t.className,l=Qe(t,Je),u=b(I(o,"carousel-control-".concat(r)),n),d=b(I("carousel-control-".concat(r,"-icon")),n),p=b(I("visually-hidden"),n);return f("a",{...l,className:u,style:{cursor:"pointer"},role:"button",tabIndex:"0",onClick:function(h){h.preventDefault(),i()},children:[a("span",{className:d,"aria-hidden":"true"}),a("span",{className:p,children:e||r})]})}T.propTypes={direction:s.exports.oneOf(["prev","next"]).isRequired,onClickHandler:s.exports.func.isRequired,cssModule:s.exports.object,directionText:s.exports.string,className:s.exports.string};var et=["items","activeIndex","cssModule","onClickHandler","className"];function tt(t,r){if(t==null)return{};var i=rt(t,r),n,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(i[n]=t[n]))}return i}function rt(t,r){if(t==null)return{};var i={},n=Object.keys(t),e,o;for(o=0;o<n.length;o++)e=n[o],!(r.indexOf(e)>=0)&&(i[e]=t[e]);return i}function Y(t){var r=t.items,i=t.activeIndex,n=t.cssModule,e=t.onClickHandler,o=t.className,l=tt(t,et),u=b(I(o,"carousel-indicators"),n),d=r.map(function(p,c){var h=b(I({active:i===c}),n);return a("button",{"aria-label":p.caption,"data-bs-target":!0,type:"button",onClick:function(y){y.preventDefault(),e(c)},className:h},"".concat(p.key||Object.values(p).join("")))});return a("div",{className:u,...l,children:d})}Y.propTypes={activeIndex:s.exports.number.isRequired,className:s.exports.string,cssModule:s.exports.object,items:s.exports.array.isRequired,onClickHandler:s.exports.func.isRequired};function oe(t){var r=t.captionHeader,i=t.captionText,n=t.cssModule,e=t.className,o=b(I(e,"carousel-caption","d-none","d-md-block"),n);return f("div",{className:o,children:[a("h3",{children:r}),a("p",{children:i})]})}oe.propTypes={captionHeader:s.exports.node,captionText:s.exports.node.isRequired,className:s.exports.string,cssModule:s.exports.object};function Z(t){return Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Z(t)}var nt=["defaultActiveIndex","autoPlay","indicators","controls","items","goToIndex"];function it(t,r){if(t==null)return{};var i=ot(t,r),n,e;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(e=0;e<o.length;e++)n=o[e],!(r.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(i[n]=t[n]))}return i}function ot(t,r){if(t==null)return{};var i={},n=Object.keys(t),e,o;for(o=0;o<n.length;o++)e=n[o],!(r.indexOf(e)>=0)&&(i[e]=t[e]);return i}function at(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function le(t,r){for(var i=0;i<r.length;i++){var n=r[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function st(t,r,i){return r&&le(t.prototype,r),i&&le(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function ct(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&ee(t,r)}function ee(t,r){return ee=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},ee(t,r)}function lt(t){var r=dt();return function(){var n=B(t),e;if(r){var o=B(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return ut(this,e)}}function ut(t,r){if(r&&(Z(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(t)}function P(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function dt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},B(t)}var pt={items:s.exports.array.isRequired,indicators:s.exports.bool,controls:s.exports.bool,autoPlay:s.exports.bool,defaultActiveIndex:s.exports.number,activeIndex:s.exports.number,next:s.exports.func,previous:s.exports.func,goToIndex:s.exports.func},he=function(t){ct(i,t);var r=lt(i);function i(n){var e;return at(this,i),e=r.call(this,n),e.animating=!1,e.state={activeIndex:n.defaultActiveIndex||0},e.next=e.next.bind(P(e)),e.previous=e.previous.bind(P(e)),e.goToIndex=e.goToIndex.bind(P(e)),e.onExiting=e.onExiting.bind(P(e)),e.onExited=e.onExited.bind(P(e)),e}return st(i,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){var e=this;this.animating||this.setState(function(o){var l=o.activeIndex===e.props.items.length-1?0:o.activeIndex+1;return{activeIndex:l}})}},{key:"previous",value:function(){var e=this;this.animating||this.setState(function(o){var l=o.activeIndex===0?e.props.items.length-1:o.activeIndex-1;return{activeIndex:l}})}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,o=this.props;o.defaultActiveIndex;var l=o.autoPlay,u=l===void 0?!0:l,d=o.indicators,p=d===void 0?!0:d,c=o.controls,h=c===void 0?!0:c,g=o.items,y=o.goToIndex,m=it(o,nt),x=this.state.activeIndex,O=g.map(function(v){var w=v.key||v.src;return f(X,{onExiting:e.onExiting,onExited:e.onExited,children:[a("img",{className:"d-block w-100",src:v.src,alt:v.altText}),a(oe,{captionText:v.caption,captionHeader:v.header||v.caption})]},w)});return f(ie,{activeIndex:x,next:this.next,previous:this.previous,ride:u?"carousel":void 0,...m,children:[p&&a(Y,{items:g,activeIndex:m.activeIndex||x,onClickHandler:y||this.goToIndex}),O,h&&a(T,{direction:"prev",directionText:"Previous",onClickHandler:m.previous||this.previous}),h&&a(T,{direction:"next",directionText:"Next",onClickHandler:m.next||this.next})]})}}]),i}(E.exports.Component);he.propTypes=pt;const z=he,A=[{src:ue,id:1},{src:W,id:2},{src:re,id:3}],ft=()=>{const[t,r]=E.exports.useState(0),[i,n]=E.exports.useState(0),e=()=>{r(!0)},o=()=>{r(!1)},l=()=>{if(t)return;const c=i===A.length-1?0:i+1;n(c)},u=()=>{if(t)return;const c=i===0?A.length-1:i-1;n(c)},d=c=>{t||n(c)},p=A.map(c=>a(X,{onExiting:e,onExited:o,children:a("img",{src:c.src,className:"img-fluid",alt:c.id})},c.id));return f(ie,{activeIndex:i,next:l,previous:u,keyboard:!1,children:[a(Y,{items:A,activeIndex:i,onClickHandler:d}),p,a(T,{direction:"prev",directionText:"Previous",onClickHandler:u}),a(T,{direction:"next",directionText:"Next",onClickHandler:l})]})},M=[{src:Ee,id:1,header:"Slide 1",caption:"Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin."},{src:_e,id:2,header:"Slide 2",caption:"Tart macaroon marzipan I love souffl\xE9 apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake."},{src:Te,id:3,header:"Slide 3",caption:"Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin Marshmallow cake powder icing."}],mt=()=>{const[t,r]=E.exports.useState(0),[i,n]=E.exports.useState(0),e=()=>{r(!0)},o=()=>{r(!1)},l=()=>{if(t)return;const c=i===M.length-1?0:i+1;n(c)},u=()=>{if(t)return;const c=i===0?M.length-1:i-1;n(c)},d=c=>{t||n(c)},p=M.map(c=>f(X,{onExiting:e,onExited:o,children:[a("img",{src:c.src,className:"img-fluid",alt:c.id}),a(oe,{captionText:c.caption,captionHeader:a("span",{className:"text-white",children:c.header})})]},c.id));return f(ie,{activeIndex:i,next:l,previous:u,keyboard:!1,interval:5e5,children:[a(Y,{items:M,activeIndex:i,onClickHandler:d}),p,a(T,{direction:"prev",directionText:"Previous",onClickHandler:u}),a(T,{direction:"next",directionText:"Next",onClickHandler:l})]})},ht=[{key:1,src:ue,caption:"",altText:"Slide 1"},{key:2,src:W,caption:"",altText:"Slide 2"},{key:3,src:re,caption:"",altText:"Slide 3"}],vt=()=>a(z,{items:ht,keyboard:!1}),xt=[{src:de,key:1,caption:"",altText:"Slide 1"},{src:pe,key:2,caption:"",altText:"Slide 2"},{src:fe,key:3,caption:"",altText:"Slide 3"}],gt=()=>a(z,{items:xt,interval:"500",keyboard:!1}),yt=[{src:W,key:1,caption:"",altText:"Slide 1"},{src:de,key:2,caption:"",altText:"Slide 2"},{src:re,key:3,caption:"",altText:"Slide 3"}],bt=()=>a(z,{items:yt,keyboard:!0}),It=[{src:pe,key:1,caption:"",altText:"Slide 1"},{src:W,key:2,caption:"",altText:"Slide 2"},{src:fe,key:3,caption:"",altText:"Slide 3"}],Ct=()=>a(z,{items:It,pause:"hover",keyboard:!1}),kt=a("pre",{children:a("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/01.jpg'
import sliderImage2 from '@src/assets/images/slider/02.jpg'
import sliderImage3 from '@src/assets/images/slider/03.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1
  },
  {
    src: sliderImage2,
    id: 2
  },
  {
    src: sliderImage3,
    id: 3
  }
]

const CarouselBasic = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img src={item.src} className='img-fluid' alt={item.id} />
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default CarouselBasic
    `})}),Et=a("pre",{children:a("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/03.jpg'
import sliderImage2 from '@src/assets/images/slider/04.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    header: <span className="text-white">Slide 1 Header</span>
    caption: 'Cupcake ipsum dolor sit amet toffee lemon drops bonbon.'
  },
  {
    src: sliderImage2,
    id: 2,
    header: <span className="text-white">Slide 2 Header</span>
    caption: 'Cheesecake caramels wafer pie lollipop.'
  },
  {
    src: sliderImage3,
    id: 3,
    header: <span className="text-white">Slide 3 Header</span>
    caption: 'Candy canes toffee gummies souffl\xE9 fruitcake drag\xE9e icing.'
  }
]

const CarouselCaptions = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(0)

  const onExiting = () => {
    setAnimating(true)
  }

  const onExited = () => {
    setAnimating(false)
  }

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
        <img src={item.src} className='img-fluid' alt={item.id} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={<span className="text-center">item.header</span>}
        />
      </CarouselItem>
    )
  })
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={images}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction='prev'
        directionText='Previous'
        onClickHandler={previous}
      />
      <CarouselControl
        direction='next'
        directionText='Next'
        onClickHandler={next}
      />
    </Carousel>
  )
}

export default CarouselCaptions
    `})}),Tt=a("pre",{children:a("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/06.jpg'
import sliderImage2 from '@src/assets/images/slider/02.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const items = [
  {
    src: sliderImage1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    altText: 'Slide 3',
  }
]

const CarouselUncontrolled = () => {
  return <UncontrolledCarousel items={items} />
}
export default CarouselUncontrolled
        `})}),Ot=a("pre",{children:a("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/05.jpg'
import sliderImage2 from '@src/assets/images/slider/04.jpg'
import sliderImage3 from '@src/assets/images/slider/01.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
  }
]

const CarouselInterval = () => {
  return <UncontrolledCarousel items={images} interval='500' />
}
export default CarouselInterval`})}),St=a("pre",{children:a("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import { carouselKeyboard } from './CarouselSourceCode'
import sliderImage1 from '@src/assets/images/slider/04.jpg'
import sliderImage2 from '@src/assets/images/slider/01.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
  }
]

const CarouselKeyboard = () => {
  return <UncontrolledCarousel items={images} keyboard={false} />
}
export default CarouselKeyboard
            `})}),_t=a("pre",{children:a("code",{className:"language-jsx",children:`

import { UncontrolledCarousel } from 'reactstrap'
import sliderImage1 from '@src/assets/images/slider/02.jpg'
import sliderImage2 from '@src/assets/images/slider/06.jpg'
import sliderImage3 from '@src/assets/images/slider/05.jpg'

const images = [
  {
    src: sliderImage1,
    id: 1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: <span className="text-white">Slide 1 Header</span>
  },
  {
    src: sliderImage2,
    id: 2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: <span className="text-white">Slide 2 Header</span>
  },
  {
    src: sliderImage3,
    id: 3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: <span className="text-white">Slide 3 Header</span>
  }
]

const CarouselPause = () => {
  return <UncontrolledCarousel items={images} pause='hover' />
}
export default CarouselPause
`})}),Vt=()=>(E.exports.useEffect(()=>{Oe.highlightAll()},[]),f(E.exports.Fragment,{children:[a(Se,{title:"Carousel",data:[{title:"Components"},{title:"Carousel"}]}),f(je,{children:[a(C,{className:"mb-1",sm:"12",children:a(Pe,{color:"info",children:a("div",{className:"alert-body",children:f("p",{children:[a(we,{className:"me-1",size:14}),"Nested carousels are not supported."]})})})}),a(C,{md:"6",sm:"12",children:a(_,{title:"Basic Example",code:kt,children:a(ft,{})})}),a(C,{md:"6",sm:"12",children:a(_,{title:"Captions Example",code:Et,children:a(mt,{})})}),a(C,{md:"6",sm:"12",children:f(_,{title:"Uncontrolled Example",code:Tt,children:[f(H,{children:["You don't have to manage state with ",a("code",{children:"UncontrolledCarousel"})," all you have to do is return it with your content."]}),a(vt,{})]})}),a(C,{md:"6",sm:"12",children:f(_,{title:"Interval Example",code:Ot,children:[f(H,{children:["Use ",a("code",{children:"Interval"})," prop to set interval between slides. default interval is ",a("strong",{children:"5000"}),"."]}),a(gt,{})]})}),a(C,{md:"6",sm:"12",children:f(_,{title:"Keyboard Example",code:St,children:[f(H,{children:["Use ",a("code",{children:"Keyboard"})," prop to control carousel with keyboard default is ",a("code",{children:"false"}),"."]}),a(bt,{})]})}),a(C,{md:"6",sm:"12",children:f(_,{title:"Pause Example",code:_t,children:[f(H,{children:["Use ",a("code",{children:"pause"})," prop to pause carousel on hover."]}),a(Ct,{})]})})]})]}));export{Vt as default};
