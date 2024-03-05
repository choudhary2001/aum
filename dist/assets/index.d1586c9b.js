import{j as y,k as r,p as g,q as _,r as u,t as j,m as x,J as p,B as s,bQ as U}from"./index.dff4e684.js";import{R as w,C as v}from"./Col.96fcbc17.js";import{C as f}from"./CardText.dd9505fe.js";import{C as h}from"./index.8b812b30.js";import{B as L}from"./index.8bb87258.js";import{T as N,p as R}from"./TooltipPopoverWrapper.2dcdb0e6.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./App.37a2596a.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./Fade.f1e5f77c.js";var H={placement:"right",placementPrefix:"bs-popover",trigger:"click",offset:[0,8]};function m(e){var o=y("popover","show",e.popperClassName),n=y("popover-inner",e.innerClassName);return r(N,{...e,arrowClassName:"popover-arrow",popperClassName:o,innerClassName:n})}m.propTypes=R;m.defaultProps=H;function O(e){return O=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},O(e)}function k(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function S(e){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?k(Object(n),!0).forEach(function(t){q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function q(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function F(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function T(e,o){for(var n=0;n<o.length;n++){var t=o[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function M(e,o,n){return o&&T(e.prototype,o),n&&T(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function D(e,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),o&&B(e,o)}function B(e,o){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,i){return t.__proto__=i,t},B(e,o)}function E(e){var o=I();return function(){var t=P(e),i;if(o){var a=P(this).constructor;i=Reflect.construct(t,arguments,a)}else i=t.apply(this,arguments);return $(this,i)}}function $(e,o){if(o&&(O(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},P(e)}var z=["defaultOpen"],d=function(e){D(n,e);var o=E(n);function n(t){var i;return F(this,n),i=o.call(this,t),i.state={isOpen:t.defaultOpen||!1},i.toggle=i.toggle.bind(C(i)),i}return M(n,[{key:"toggle",value:function(){this.setState(function(i){return{isOpen:!i.isOpen}})}},{key:"render",value:function(){return r(m,{isOpen:this.state.isOpen,toggle:this.toggle,..._(this.props,z)})}}]),n}(u.exports.Component);d.propTypes=S({defaultOpen:g.exports.bool},m.propTypes);var W=["className","cssModule","tag"];function Y(e,o){if(e==null)return{};var n=A(e,o),t,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],!(o.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function A(e,o){if(e==null)return{};var n={},t=Object.keys(e),i,a;for(a=0;a<t.length;a++)i=t[a],!(o.indexOf(i)>=0)&&(n[i]=e[i]);return n}var K={tag:j,className:g.exports.string,cssModule:g.exports.object};function l(e){var o=e.className,n=e.cssModule,t=e.tag,i=t===void 0?"h3":t,a=Y(e,W),b=x(y(o,"popover-header"),n);return r(i,{...a,className:b})}l.propTypes=K;var J=["className","cssModule","tag"];function Q(e,o){if(e==null)return{};var n=G(e,o),t,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],!(o.indexOf(t)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,t)||(n[t]=e[t]))}return n}function G(e,o){if(e==null)return{};var n={},t=Object.keys(e),i,a;for(a=0;a<t.length;a++)i=t[a],!(o.indexOf(i)>=0)&&(n[i]=e[i]);return n}var V={tag:j,className:g.exports.string,cssModule:g.exports.object};function c(e){var o=e.className,n=e.cssModule,t=e.tag,i=t===void 0?"div":t,a=Q(e,J),b=x(y(o,"popover-body"),n);return r(i,{...a,className:b})}c.propTypes=V;const X=()=>p("div",{className:"demo-inline-spacing",children:[r(s,{color:"primary",outline:!0,id:"popFocus",children:"Focus"}),p(d,{trigger:"focus",placement:"top",target:"popFocus",children:[r(l,{children:"Focus Trigger"}),r(c,{children:"Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You cannot select this text as the popover will disappear when you try."})]}),r(s,{color:"primary",outline:!0,id:"popClick",children:"Click"}),p(d,{trigger:"click",placement:"top",target:"popClick",children:[r(l,{children:"Click Trigger"}),r(c,{children:"Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this popover."})]}),r(s,{trigger:"legacy",color:"primary",outline:!0,id:"popLegacy",children:"Legacy"}),p(d,{placement:"top",target:"popLegacy",children:[r(l,{children:"Legacy Trigger"}),r(c,{children:`Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap correctly supported click and focus, it had a hybrid which was very useful and has been brought back as trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while also closing when clicking outside the triggering element and popover itself.`})]})]}),Z=()=>p("div",{className:"demo-inline-spacing",children:[r(s,{color:"primary",outline:!0,id:"popTop",children:"Top"}),p(d,{placement:"top",target:"popTop",children:[r(l,{children:"Popover Top"}),r(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),r(s,{color:"primary",outline:!0,id:"popRight",children:"Right"}),p(d,{placement:"right",target:"popRight",children:[r(l,{children:"Popover Right"}),r(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),r(s,{color:"primary",outline:!0,id:"popBottom",children:"Bottom"}),p(d,{placement:"bottom",target:"popBottom",children:[r(l,{children:"Popover Bottom"}),r(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]}),r(s,{color:"primary",outline:!0,id:"popLeft",children:"Left"}),p(d,{placement:"left",target:"popLeft",children:[r(l,{children:"Popover Left"}),r(c,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque."})]})]}),ee=()=>{const[e,o]=u.exports.useState(!1);return p(u.exports.Fragment,{children:[r(s,{color:"primary",outline:!0,id:"controlledPopover",children:"Controlled"}),p(m,{placement:"top",isOpen:e,target:"controlledPopover",toggle:()=>o(!e),children:[r(l,{children:"Controlled Popover"}),r(c,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]})},oe=()=>p(u.exports.Fragment,{children:[r(s,{color:"primary",outline:!0,id:"uncontrolledPopover",children:"Uncontrolled"}),p(d,{placement:"top",target:"uncontrolledPopover",children:[r(l,{children:"Uncontrolled Popover"}),r(c,{children:"Macaroon chocolate candy. I love carrot cake gingerbread cake lemon drops. Muffin sugar plum marzipan pie."})]})]}),re=r("pre",{children:r("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverControlled = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  return (
    <React.Fragment>
      <Button color='primary' outline id='controlledPopover'>
        Controlled
      </Button>
      <Popover
        placement='top'
        target='controlledPopover'
        isOpen={popoverOpen}
        toggle={() => setPopoverOpen(!popoverOpen)}
      >
        <PopoverHeader>Controlled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon
          drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </Popover>
    </React.Fragment>
  )
}
export default PopoverControlled
`})}),te=r("pre",{children:r("code",{className:"language-jsx",children:`

import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody
} from 'reactstrap'

const PopoverUncontrolled = () => {
  return (
    <React.Fragment>
      <Button color='primary' outline id='uncontrolledPopover'>
        Uncontrolled
      </Button>
      <UncontrolledPopover placement='top' target='uncontrolledPopover'>
        <PopoverHeader>Uncontrolled Popover</PopoverHeader>
        <PopoverBody>
          Macaroon chocolate candy. I love carrot cake gingerbread cake lemon
          drops. Muffin sugar plum marzipan pie.
        </PopoverBody>
      </UncontrolledPopover>
    </React.Fragment>
  )
}
export default PopoverUncontrolled
`})}),ne=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverPositions = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline id='popTop'>
        Top
      </Button>
      <UncontrolledPopover placement='top' target='popTop'>
        <PopoverHeader>Popover Top</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popRight'>
        Right
      </Button>
      <UncontrolledPopover placement='right' target='popRight'>
        <PopoverHeader>Popover Right</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popBottom'>
        Bottom
      </Button>
      <UncontrolledPopover placement='bottom' target='popBottom'>
        <PopoverHeader>Popover Bottom</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popLeft'>
        Left
      </Button>
      <UncontrolledPopover placement='left' target='popLeft'>
        <PopoverHeader>Popover Left</PopoverHeader>
        <PopoverBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, cumque.</PopoverBody>
      </UncontrolledPopover>
    </div>
  )
}

export default PopoverPositions
`})}),ie=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap'

const PopoverTriggers = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline id='popFocus'>
        Focus
      </Button>
      <UncontrolledPopover trigger='focus' placement='top' target='popFocus'>
        <PopoverHeader>Focus Trigger</PopoverHeader>
        <PopoverBody>
          Focusing on the trigging element makes this popover appear. Blurring (clicking away) makes it disappear. You
          cannot select this text as the popover will disappear when you try.
        </PopoverBody>
      </UncontrolledPopover>

      <Button color='primary' outline id='popClick'>
        Click
      </Button>
      <UncontrolledPopover trigger='click' placement='top' target='popClick'>
        <PopoverHeader>Click Trigger</PopoverHeader>
        <PopoverBody>
          Clicking on the triggering element makes this popover appear. Clicking on it again will make it disappear. You
          can select this text, but clicking away (somewhere other than the triggering element) will not dismiss this
          popover.
        </PopoverBody>
      </UncontrolledPopover>

      <Button trigger='legacy' color='primary' outline id='popLegacy'>
        Legacy
      </Button>
      <UncontrolledPopover placement='top' target='popLegacy'>
        <PopoverHeader>Legacy Trigger</PopoverHeader>
        <PopoverBody>
          Legacy is a reactstrap special trigger value (outside of bootstrap's spec/standard). Before reactstrap
          correctly supported click and focus, it had a hybrid which was very useful and has been brought back as
          trigger="legacy". One advantage of the legacy trigger is that it allows the popover text to be selected while
          also closing when clicking outside the triggering element and popover itself.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  )
}
export default PopoverTriggers
`})}),Be=()=>(u.exports.useEffect(()=>{U.highlightAll()},[]),p(u.exports.Fragment,{children:[r(L,{title:"Popovers",data:[{title:"Components"},{title:"Popovers"}]}),p(w,{children:[r(v,{md:"6",sm:"12",children:p(h,{title:"Controlled Popover",code:re,children:[p(f,{children:["For controlled Popover you'll have to manage state of component. Controlled Popover require"," ",r("code",{children:"isOpen"})," and ",r("code",{children:"toggle"})," props to work."]}),r(ee,{})]})}),r(v,{md:"6",sm:"12",children:p(h,{title:"Uncontrolled Popover",code:te,children:[r(f,{children:"You can create an uncontrolled popover without having to manage state. All you have to do is wrap your content inside UncontrolledPopover tag."}),r(oe,{})]})})]}),p(w,{children:[r(v,{sm:"12",children:p(h,{title:"Popover Positions",code:ne,children:[p(f,{className:"mb-0",children:["Use prop ",r("code",{children:"placement"})," to place you popover at desired position."]}),r(Z,{})]})}),r(v,{sm:"12",children:p(h,{title:"Popover Triggers",code:ie,children:[p(f,{className:"mb-0",children:["Use prop ",r("code",{children:"trigger"})," for various trigger options. Trigger each popover to see information about the trigger."]}),r(X,{})]})})]})]}));export{Be as default};
