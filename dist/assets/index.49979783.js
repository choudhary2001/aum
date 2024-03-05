import{p as n,t as B,m as f,j as H,k as e,J as c,r as L,bQ as E}from"./index.dff4e684.js";import{R as V,C as l}from"./Col.96fcbc17.js";import{C as _}from"./CardText.dd9505fe.js";import{C as $}from"./index.8b812b30.js";import{B as S}from"./index.8bb87258.js";import{F as N}from"./Fade.f1e5f77c.js";import{S as A}from"./Spinner.ec21fe85.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./App.37a2596a.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";var I=["className","cssModule","tag","isOpen","children","transition","fade","innerRef"];function R(t,r){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);r&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),a.push.apply(a,o)}return a}function x(t){for(var r=1;r<arguments.length;r++){var a=arguments[r]!=null?arguments[r]:{};r%2?R(Object(a),!0).forEach(function(o){W(t,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(a,o))})}return t}function W(t,r,a){return r in t?Object.defineProperty(t,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[r]=a,t}function G(t,r){if(t==null)return{};var a=D(t,r),o,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)o=i[s],!(r.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,o)||(a[o]=t[o]))}return a}function D(t,r){if(t==null)return{};var a={},o=Object.keys(t),s,i;for(i=0;i<o.length;i++)s=o[i],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}var z={children:n.exports.node,className:n.exports.string,cssModule:n.exports.object,fade:n.exports.bool,isOpen:n.exports.bool,tag:B,transition:n.exports.shape(N.propTypes),innerRef:n.exports.oneOfType([n.exports.object,n.exports.string,n.exports.func])};function d(t){var r=t.className,a=t.cssModule,o=t.tag,s=o===void 0?"div":o,i=t.isOpen,T=i===void 0?!0:i,y=t.children,v=t.transition,g=v===void 0?x(x({},N.defaultProps),{},{unmountOnExit:!0}):v,k=t.fade,b=k===void 0?!0:k,j=t.innerRef,C=G(t,I),w=f(H(r,"toast"),a),P=x(x(x({},N.defaultProps),g),{},{baseClass:b?g.baseClass:"",timeout:b?g.timeout:0});return e(N,{...C,...P,tag:s,className:w,in:T,role:"alert",innerRef:j,children:y})}d.propTypes=z;var Z=["className","cssModule","innerRef","tag"];function J(t,r){if(t==null)return{};var a=K(t,r),o,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)o=i[s],!(r.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,o)||(a[o]=t[o]))}return a}function K(t,r){if(t==null)return{};var a={},o=Object.keys(t),s,i;for(i=0;i<o.length;i++)s=o[i],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}var Q={tag:B,className:n.exports.string,cssModule:n.exports.object,innerRef:n.exports.oneOfType([n.exports.object,n.exports.string,n.exports.func])};function u(t){var r=t.className,a=t.cssModule,o=t.innerRef,s=t.tag,i=s===void 0?"div":s,T=J(t,Z),y=f(H(r,"toast-body"),a);return e(i,{...T,className:y,ref:o})}u.propTypes=Q;var U=["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","close","tagClassName","icon"];function Y(t,r){if(t==null)return{};var a=q(t,r),o,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(s=0;s<i.length;s++)o=i[s],!(r.indexOf(o)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,o)||(a[o]=t[o]))}return a}function q(t,r){if(t==null)return{};var a={},o=Object.keys(t),s,i;for(i=0;i<o.length;i++)s=o[i],!(r.indexOf(s)>=0)&&(a[s]=t[s]);return a}var X={tag:B,icon:n.exports.oneOfType([n.exports.string,n.exports.node]),wrapTag:B,toggle:n.exports.func,className:n.exports.string,cssModule:n.exports.object,children:n.exports.node,closeAriaLabel:n.exports.string,charCode:n.exports.oneOfType([n.exports.string,n.exports.number]),close:n.exports.object,tagClassName:n.exports.string};function h(t){var r,a,o=t.className,s=t.cssModule,i=t.children,T=t.toggle,y=t.tag,v=y===void 0?"strong":y,g=t.wrapTag,k=g===void 0?"div":g,b=t.closeAriaLabel,j=b===void 0?"Close":b,C=t.close,w=t.tagClassName,P=w===void 0?"me-auto":w,O=t.icon,M=Y(t,U),F=f(H(o,"toast-header"),s);return!C&&T&&(r=e("button",{type:"button",onClick:T,className:f("btn-close",s),"aria-label":j})),typeof O=="string"?a=e("svg",{className:f("rounded text-".concat(O)),width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img",children:e("rect",{fill:"currentColor",width:"100%",height:"100%"})}):O&&(a=O),c(k,{...M,className:F,children:[a,e(v,{className:f(H(P,{"ms-2":a!=null}),s),children:i}),C||r]})}h.propTypes=X;const ee="/assets/transparent.7400a7a9.svg",m=e("button",{type:"button",className:"ms-1 btn-close"}),te=()=>c(V,{children:[e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-primary my-2 rounded",children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on a primary background \u2014 check it out!"})]})})}),e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-secondary my-2 rounded",children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on a secondary background \u2014 check it out!"})]})})}),e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-success my-2 rounded",children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on a success background \u2014 check it out!"})]})})}),e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-danger my-2 rounded",children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on a danger background \u2014 check it out!"})]})})}),e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-warning my-2 rounded",children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on a warning background \u2014 check it out!"})]})})}),e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-info my-2 rounded",children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on an info background \u2014 check it out!"})]})})}),e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 bg-dark my-2 rounded",children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on an dark background \u2014 check it out!"})]})})}),e(l,{md:"6",sm:"12",children:e("div",{className:"p-3 my-2 rounded",style:{background:`url(${ee})`},children:c(d,{children:[e(h,{close:m,children:"Vuexy"}),e(u,{children:"This is a toast on a transparent background \u2014 check it out!"})]})})})]}),oe=c("svg",{viewBox:"0 0 139 95",version:"1.1",height:"14",children:[c("defs",{children:[c("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[e("stop",{stopColor:"#000000",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),c("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[e("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),e("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:c("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[e("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),e("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),e("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),p=e("button",{type:"button",className:"ms-1 btn-close"}),se=()=>c(V,{className:"demo-vertical-spacing",children:[e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:"primary",children:"Vuexy"}),e(u,{children:"This is a toast with a primary icon \u2014 check it out!"})]})}),e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:"success",children:"Vuexy"}),e(u,{children:"This is a toast with a success icon \u2014 check it out!"})]})}),e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:"info",children:"Vuexy"}),e(u,{children:"This is a toast with a info icon \u2014 check it out!"})]})}),e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:"danger",children:"Vuexy"}),e(u,{children:"This is a toast with a danger icon \u2014 check it out!"})]})}),e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:"warning",children:"Vuexy"}),e(u,{children:"This is a toast with a warning icon \u2014 check it out!"})]})}),e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:"dark",children:"Vuexy"}),e(u,{children:"This is a toast with a dark icon \u2014 check it out!"})]})}),e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:e(A,{size:"sm",color:"primary"}),children:"Vuexy"}),e(u,{children:"This is a toast with a spinner \u2014 check it out!"})]})}),e(l,{md:"6",sm:"12",children:c(d,{children:[e(h,{close:p,icon:oe,children:"Vuexy"}),e(u,{children:"This is a toast with a logo \u2014 check it out!"})]})})]}),ae=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Toast, ToastBody, ToastHeader, Row, Col } from 'reactstrap'
import transparentBg from '@src/assets/images/svg/transparent.svg'

const close = (
  <button type='button' className='ms-1 btn-close'>
    <span>\xD7</span>
  </button>
)

const ToastTranslucent = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <div className='p-3 bg-primary my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a primary background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-secondary my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a secondary background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-success my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a success background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-danger my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a danger background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-warning my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a warning background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
      <Col md='6' sm='12'>
        <div className='p-3 bg-info my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on an info background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>

      <Col md='6' sm='12'>
        <div className='p-3 bg-dark my-2 rounded'>
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on an dark background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>

      <Col md='6' sm='12'>
        <div
          className='p-3 my-2 rounded'
          style={{
            background: "url(transparentBg)"
          }}
        >
          <Toast>
            <ToastHeader close={close}>Vuexy</ToastHeader>
            <ToastBody>
              This is a toast on a transparent background \u2014 check it out!
            </ToastBody>
          </Toast>
        </div>
      </Col>
    </Row>
  )
}
export default ToastTranslucent
`})}),re=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Toast, ToastBody, ToastHeader, Spinner, Row, Col } from 'reactstrap'
import logo from '@src/assets/images/logo/logo.png'

const close = (
  <button type='button' className='ms-1 btn-close'>
    <span>\xD7</span>
  </button>
)


const ToastHeaderIcons = () => {
  return (
    <Row>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='primary'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a primary icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='success'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a success icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='info'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a info icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='danger'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a danger icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='warning'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a warning icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>
      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon='dark'>Vuexy</ToastHeader>
          <ToastBody>
            This is a toast with a dark icon \u2014 check it out!
          </ToastBody>
        </Toast>
      </Col>

      <Col md='6' sm='12'>
        <Toast>
          <ToastHeader close={close} icon={<Spinner size='sm' color='primary' />}>
            Vuexy
          </ToastHeader>
          <ToastBody>This is a toast with a spinner \u2014 check it out!</ToastBody>
        </Toast>
      </Col>

      <Col md='6' sm='12'>
        <Toast>
        <ToastHeader close={close} icon={logo}>Vuexy</ToastHeader>
          <ToastBody>This is a toast with a logo \u2014 check it out!</ToastBody>
        </Toast>
      </Col>
    </Row>
  )
}
export default ToastHeaderIcons
`})}),ke=()=>(L.exports.useEffect(()=>{E.highlightAll()},[]),c(L.exports.Fragment,{children:[e(S,{title:"Toasts",data:[{title:"Components"},{title:"Toasts"}]}),c(V,{className:"match-height",children:[e(l,{sm:"12",children:c($,{title:"Toast Translucent",code:ae,children:[e(_,{children:"Toasts are slightly translucent, too, so they blend over whatever they might appear over. For browsers that support the backdrop-filter CSS property, we\u2019ll also attempt to blur the elements under a toast."}),e(te,{})]})}),e(l,{sm:"12",children:c($,{title:"Icons",code:re,children:[c(_,{children:["Use ",e("code",{children:"icon"})," attribute with ",e("code",{children:"ToastHeader"})," tag to add an icon."]}),e(se,{})]})})]})]}));export{ke as default};
