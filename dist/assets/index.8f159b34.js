import{k as e,r as u,J as t,bQ as b}from"./index.dff4e684.js";import{R as y,C as s}from"./Col.96fcbc17.js";import{C as d}from"./CardText.dd9505fe.js";import{C as p}from"./index.8b812b30.js";import{B as N}from"./index.8bb87258.js";import{A as n}from"./Alert.36ececc1.js";import{S as A}from"./star.eb42d6c9.js";import{I as k,Q as w}from"./App.37a2596a.js";import{L as I}from"./Label.138433f0.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./Fade.f1e5f77c.js";function h(l){return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},h(l)}function x(l,r){if(!(l instanceof r))throw new TypeError("Cannot call a class as a function")}function g(l,r){for(var o=0;o<r.length;o++){var a=r[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,a.key,a)}}function S(l,r,o){return r&&g(l.prototype,r),o&&g(l,o),Object.defineProperty(l,"prototype",{writable:!1}),l}function T(l,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function");l.prototype=Object.create(r&&r.prototype,{constructor:{value:l,writable:!0,configurable:!0}}),Object.defineProperty(l,"prototype",{writable:!1}),r&&f(l,r)}function f(l,r){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,i){return a.__proto__=i,a},f(l,r)}function O(l){var r=_();return function(){var a=m(l),i;if(r){var c=m(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return R(this,i)}}function R(l,r){if(r&&(h(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return v(l)}function v(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function _(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function m(l){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(o){return o.__proto__||Object.getPrototypeOf(o)},m(l)}var C=function(l){T(o,l);var r=O(o);function o(a){var i;return x(this,o),i=r.call(this,a),i.state={isOpen:!0},i.toggle=i.toggle.bind(v(i)),i}return S(o,[{key:"toggle",value:function(){this.setState(function(i){return{isOpen:!i.isOpen}})}},{key:"render",value:function(){return e(n,{isOpen:this.state.isOpen,toggle:this.toggle,...this.props})}}]),o}(u.exports.Component);const L=C,j=()=>e("div",{className:"demo-spacing-0",children:e(n,{color:"primary",children:t("div",{className:"alert-body d-flex align-items-center",children:[e(A,{size:15}),e("span",{className:"ms-50",children:"Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer."})]})})}),D=()=>e("div",{className:"demo-spacing-0",children:t(n,{color:"warning",children:[e("h4",{className:"alert-heading",children:"Lorem ipsum dolor sit amet"}),t("div",{className:"alert-body",children:["Lorem ipsum dolor sit amet"," ",e("a",{className:"alert-link",href:"/",onClick:l=>l.preventDefault(),children:"consectetur"})," ","adipisicing elit. Ducimus, laborum!."]})]})}),F=()=>t("div",{className:"demo-spacing-0",children:[t(n,{color:"primary",children:[e("h4",{className:"alert-heading",children:"Primary"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),t(n,{color:"secondary",children:[e("h4",{className:"alert-heading",children:"Secondary"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),t(n,{color:"success",children:[e("h4",{className:"alert-heading",children:"Success"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),t(n,{color:"danger",children:[e("h4",{className:"alert-heading",children:"Danger"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),t(n,{color:"warning",children:[e("h4",{className:"alert-heading",children:"Warning"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),t(n,{color:"info",children:[e("h4",{className:"alert-heading",children:"Info"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]}),t(n,{color:"dark",children:[e("h4",{className:"alert-heading",children:"Dark"}),e("div",{className:"alert-body",children:"Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love cupcake cupcake."})]})]}),W=()=>{const[l,r]=u.exports.useState(!0),[o,a]=u.exports.useState(""),i=c=>{a(c.target.value),c.target.value.length>0&&isNaN(c.target.value)?r(!0):r(!1)};return t("div",{className:"demo-spacing-0",children:[t("div",{className:"mb-2",children:[e(I,{className:"form-label",htmlFor:"numbers",children:"Enter numbers only"}),e(k,{className:"w-25 h-25 ps-1",placeholder:"0123456789",value:o,onChange:c=>i(c)})]}),e(n,{color:"danger",isOpen:l,children:t("div",{className:"alert-body",children:[e(w,{size:15})," ",t("span",{className:"ms-1",children:["The value is ",e("strong",{children:"invalid"})," you can only enter numbers"]})]})})]})},q=()=>e("div",{className:"demo-spacing-0",children:e(n,{color:"primary",children:t("div",{className:"alert-body",children:[e("span",{className:"fw-bold",children:"Good Morning!"}),e("span",{children:" Start your day with some alerts."})]})})}),P=()=>{const[l,r]=u.exports.useState(!0);return e("div",{className:"demo-spacing-0",children:e(n,{color:"primary",isOpen:l,toggle:()=>r(!1),children:e("div",{className:"alert-body",children:"Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer."})})})},U=()=>e("div",{className:"demo-spacing-0",children:e(L,{color:"primary",children:e("div",{className:"alert-body",children:"Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer."})})}),E=e("pre",{className:"language-jsx",children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'

const DefaultAlert = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <div className='alert-body'>
          <span className='fw-bold'>Good Morning!</span>
          <span> Start your day with some alerts.</span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default DefaultAlert
  `})}),J=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'

const AlertTitle = () => {
  return (
      <Alert color='warning'>
        <h4 className='alert-heading'>Lorem ipsum dolor sit amet</h4>
        <div className='alert-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, laborum!.</div>
      </Alert>
  )
}
export default AlertTitle
`})}),V=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'

const AlertColors = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <h4 className='alert-heading'>Primary</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='secondary'>
        <h4 className='alert-heading'>Secondary</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='success'>
        <h4 className='alert-heading'>Success</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='danger'>
        <h4 className='alert-heading'>Danger</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='warning'>
        <h4 className='alert-heading'>Warning</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='info'>
        <h4 className='alert-heading'>Info</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
      <Alert color='dark'>
        <h4 className='alert-heading'>Dark</h4>
        <div className='alert-body'>
          Tootsie roll lollipop lollipop icing. Wafer cookie danish macaroon. Liquorice fruitcake apple pie I love
          cupcake cupcake.
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertColors
`})}),z=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Alert } from 'reactstrap'

const AlertDismissable = () => {
  const [visible, setVisible] = useState(true)

  return (
    <React.Fragment>
      <Alert color='info' isOpen={visible} toggle={() => setVisible(false)}>
        <div className='alert-body'>
          Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertDismissable
    `})}),B=e("pre",{children:e("code",{className:"language-jsx",children:`

import { UncontrolledAlert } from 'reactstrap'

const AlertUncontrolled = () => {
  return (
    <React.Fragment>
      <UncontrolledAlert color='danger'>
        <div className='alert-body'>
          Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
        </div>
      </UncontrolledAlert>
    </React.Fragment>
  )
}
export default AlertUncontrolled
      `})}),G=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Alert } from 'reactstrap'
import { Star } from 'react-feather'

const AlertIcon = () => {
  return (
    <React.Fragment>
      <Alert color='primary'>
        <div className='alert-body'>
          <Star size={15} />
          <span className='ms-1'>
            Chupa chups topping bonbon. Jelly-o toffee I love. Sweet I love wafer I love wafer.
          </span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertIcon
        `})}),M=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Alert,  Label, Input } from 'reactstrap'
import { AlertCircle } from 'react-feather'

const AlertExample = () => {
  const [inputTerm, setInputTerm] = useState('')
  const [visible, setVisible] = useState('')

  const handleInput = e => {
    setInputTerm(e.target.value)

    if (e.target.value.length > 0 && isNaN(e.target.value)) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  return (
    <React.Fragment>
      <div className='mb-2'>
        <Label className='form-label' htmlFor='numbers'>Enter numbers only</Label>
        <Input
          className='w-25 h-25 ps-1'
          placeholder='0123456789'
          value={inputTerm}
          onChange={e => handleInput(e)}
        />
      </div>
      <Alert color='danger' isOpen={visible}>
        <div className='alert-body'>
          <AlertCircle size={15} />{' '}
          <span className='ms-1'>
            the value is <strong>invalid</strong> you can only enter numbers
          </span>
        </div>
      </Alert>
    </React.Fragment>
  )
}
export default AlertExample
        `})}),de=()=>(u.exports.useEffect(()=>{b.highlightAll()},[]),t(u.exports.Fragment,{children:[e(N,{title:"Alerts",data:[{title:"Components"},{title:"Alerts"}]}),t(y,{children:[e(s,{sm:"12",children:t(p,{title:"Default",code:E,children:[t(d,{children:["Alerts are available for any length of text, as well as an optional dismiss button. Use ",e("code",{children:"Alert"})," ","Component & ",e("code",{children:"color"})," prop for alert with all theme colors."]}),e(q,{})]})}),e(s,{sm:"12",children:t(p,{title:"Title",code:J,children:[t(d,{children:["Add a title to the alert with the ",e("code",{children:".alert-heading"})]}),e(D,{})]})}),e(s,{sm:"12",children:t(p,{title:"Colors",code:V,children:[t(d,{children:["Use ",e("code",{children:"color"})," prop to for alert with all theme colors."]}),e(F,{})]})}),e(s,{sm:"12",children:t(p,{title:"Dismissable Alert",code:z,children:[t(d,{children:["Using ",e("code",{children:"isOpen"})," and ",e("code",{children:"toggle"})," you can create a dismissable alert."]}),e(P,{})]})}),e(s,{sm:"12",children:t(p,{title:"Uncontrolled Alert",code:B,children:[e(d,{children:"For the most basic use-case an uncontrolled component can provide the functionality wanted without the need to manage/control the state of the component. UncontrolledAlert does not require isOpen nor toggle props to work."}),e(U,{})]})}),e(s,{sm:"12",children:e(p,{title:"Icon",code:G,children:e(j,{})})}),e(s,{sm:"12",children:t(p,{title:"Example",code:M,children:[e(d,{children:"An example would be to have an input and when a condition is met, show the alert."}),e(W,{})]})})]})]}));export{de as default};
