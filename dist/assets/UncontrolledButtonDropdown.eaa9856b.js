import{p as l,k as s,q as b,r as h}from"./index.dff4e684.js";import{D as g}from"./App.37a2596a.js";var d={children:l.exports.node};function c(t){return s(g,{group:!0,...t})}c.propTypes=d;function i(t){return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(t)}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?p(Object(r),!0).forEach(function(n){_(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function w(t,e,r){return e&&a(t.prototype,e),r&&a(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},u(t,e)}function j(t){var e=D();return function(){var n=f(t),o;if(e){var O=f(this).constructor;o=Reflect.construct(n,arguments,O)}else o=n.apply(this,arguments);return S(this,o)}}function S(t,e){if(e&&(i(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(t)}function y(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},f(t)}var R=["defaultOpen"],T=function(t){P(r,t);var e=j(r);function r(n){var o;return v(this,r),o=e.call(this,n),o.state={isOpen:n.defaultOpen||!1},o.toggle=o.toggle.bind(y(o)),o}return w(r,[{key:"toggle",value:function(){this.setState(function(o){return{isOpen:!o.isOpen}})}},{key:"render",value:function(){return s(c,{isOpen:this.state.isOpen,toggle:this.toggle,...b(this.props,R)})}}]),r}(h.exports.Component);T.propTypes=m({defaultOpen:l.exports.bool},c.propTypes);export{c as B,T as U};