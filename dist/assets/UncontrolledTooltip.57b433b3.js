import{j as a,k as s,p as b,q as m,r as h}from"./index.dff4e684.js";import{T as g,p as v}from"./TooltipPopoverWrapper.2dcdb0e6.js";var d={placement:"top",autohide:!0,placementPrefix:"bs-tooltip",trigger:"hover focus"};function f(t){var e=a("tooltip","show",t.popperClassName),r=a("tooltip-inner",t.innerClassName);return s(g,{...t,arrowClassName:"tooltip-arrow",popperClassName:e,innerClassName:r})}f.propTypes=v;f.defaultProps=d;function u(t){return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(t)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function P(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?c(Object(r),!0).forEach(function(n){_(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t,e,r){return e&&l(t.prototype,e),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function T(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},p(t,e)}function S(t){var e=x();return function(){var n=i(t),o;if(e){var O=i(this).constructor;o=Reflect.construct(n,arguments,O)}else o=n.apply(this,arguments);return R(this,o)}}function R(t,e){if(e&&(u(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}function y(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function x(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},i(t)}var N=["defaultOpen"],E=function(t){T(r,t);var e=S(r);function r(n){var o;return w(this,r),o=e.call(this,n),o.state={isOpen:n.defaultOpen||!1},o.toggle=o.toggle.bind(y(o)),o}return j(r,[{key:"toggle",value:function(){this.setState(function(o){return{isOpen:!o.isOpen}})}},{key:"render",value:function(){return s(f,{isOpen:this.state.isOpen,toggle:this.toggle,...m(this.props,N)})}}]),r}(h.exports.Component);E.propTypes=P({defaultOpen:b.exports.bool},f.propTypes);export{f as T,E as U};
