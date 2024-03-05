import{p as r,s as Y,l as Z,T as A,o as ee,aE as te,x as ne,aF as oe,aG as ae,aH as se,k as i,m as b,j as g,q as re,J as p,t as F,r as y,B as f,bQ as ie}from"./index.dff4e684.js";import{R as ce,C as L}from"./Col.96fcbc17.js";import{C as I}from"./index.8b812b30.js";import{B as le}from"./index.8bb87258.js";import{P as ue}from"./Portal.330fdcf6.js";import{F as B}from"./Fade.f1e5f77c.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./App.37a2596a.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";function E(t){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},E(t)}function R(t,o){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);o&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,n)}return a}function h(t){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?R(Object(a),!0).forEach(function(n){pe(t,n,a[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))})}return t}function pe(t,o,a){return o in t?Object.defineProperty(t,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[o]=a,t}function de(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function z(t,o){for(var a=0;a<o.length;a++){var n=o[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function fe(t,o,a){return o&&z(t.prototype,o),a&&z(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function me(t,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),o&&N(t,o)}function N(t,o){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},N(t,o)}function he(t){var o=ve();return function(){var n=P(t),e;if(o){var s=P(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return ge(this,e)}}function ge(t,o){if(o&&(E(o)==="object"||typeof o=="function"))return o;if(o!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function d(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ve(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function P(t){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(a){return a.__proto__||Object.getPrototypeOf(a)},P(t)}function T(){}var H=r.exports.shape(B.propTypes),W={autoFocus:r.exports.bool,backdrop:r.exports.bool,backdropClassName:r.exports.string,backdropTransition:H,children:r.exports.node,className:r.exports.string,container:Y,cssModule:r.exports.object,direction:r.exports.oneOf(["start","end","bottom","top"]),fade:r.exports.bool,innerRef:r.exports.oneOfType([r.exports.object,r.exports.string,r.exports.func]),isOpen:r.exports.bool,keyboard:r.exports.bool,labelledBy:r.exports.string,offcanvasTransition:H,onClosed:r.exports.func,onEnter:r.exports.func,onExit:r.exports.func,style:r.exports.object,onOpened:r.exports.func,returnFocusAfterClose:r.exports.bool,role:r.exports.string,scrollable:r.exports.bool,toggle:r.exports.func,trapFocus:r.exports.bool,unmountOnClose:r.exports.bool,zIndex:r.exports.oneOfType([r.exports.number,r.exports.string])},be=Object.keys(W),ye={isOpen:!1,autoFocus:!0,direction:"start",scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:T,onClosed:T,offcanvasTransition:{timeout:A.Offcanvas},backdropTransition:{mountOnEnter:!0,timeout:A.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body",trapFocus:!1},S=function(t){me(a,t);var o=he(a);function a(n){var e;return de(this,a),e=o.call(this,n),e._element=null,e._originalBodyPadding=null,e.getFocusableChildren=e.getFocusableChildren.bind(d(e)),e.handleBackdropClick=e.handleBackdropClick.bind(d(e)),e.handleBackdropMouseDown=e.handleBackdropMouseDown.bind(d(e)),e.handleEscape=e.handleEscape.bind(d(e)),e.handleTab=e.handleTab.bind(d(e)),e.onOpened=e.onOpened.bind(d(e)),e.onClosed=e.onClosed.bind(d(e)),e.manageFocusAfterClose=e.manageFocusAfterClose.bind(d(e)),e.clearBackdropAnimationTimeout=e.clearBackdropAnimationTimeout.bind(d(e)),e.trapFocus=e.trapFocus.bind(d(e)),e.state={isOpen:!1},e}return fe(a,[{key:"componentDidMount",value:function(){var e=this.props,s=e.isOpen,c=e.autoFocus,u=e.onEnter;s&&(this.init(),this.setState({isOpen:!0}),c&&this.setFocus()),u&&u(),document.addEventListener("focus",this.trapFocus,!0),this._isMounted=!0}},{key:"componentDidUpdate",value:function(e,s){if(this.props.isOpen&&!e.isOpen){this.init(),this.setState({isOpen:!0});return}this.props.autoFocus&&this.state.isOpen&&!s.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)}},{key:"componentWillUnmount",value:function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),document.removeEventListener("focus",this.trapFocus,!0),this._isMounted=!1}},{key:"handleBackdropClick",value:function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var s=this._backdrop;if(!this.props.isOpen||this.props.backdrop!==!0)return;s&&e.target===s&&this.props.toggle&&this.props.toggle(e)}}},{key:"handleTab",value:function(e){if(e.which===9&&!(this.offcanvasIndex<a.openCount-1)){var s=this.getFocusableChildren(),c=s.length;if(c!==0){for(var u=this.getFocusedChild(),m=0,l=0;l<c;l+=1)if(s[l]===u){m=l;break}e.shiftKey&&m===0?(e.preventDefault(),s[c-1].focus()):!e.shiftKey&&m===c-1&&(e.preventDefault(),s[0].focus())}}}},{key:"handleBackdropMouseDown",value:function(e){this._mouseDownElement=e.target}},{key:"handleEscape",value:function(e){this.props.isOpen&&e.keyCode===ee.esc&&this.props.toggle&&this.props.keyboard&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))}},{key:"onOpened",value:function(e,s){this.props.onOpened(),(this.props.offcanvasTransition.onEntered||T)(e,s)}},{key:"onClosed",value:function(e){var s=this.props.unmountOnClose;this.props.onClosed(),(this.props.offcanvasTransition.onExited||T)(e),s&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})}},{key:"setFocus",value:function(){this._dialog&&typeof this._dialog.focus=="function"&&this._dialog.focus()}},{key:"getFocusableChildren",value:function(){return this._element.querySelectorAll(te.join(", "))}},{key:"getFocusedChild",value:function(){var e,s=this.getFocusableChildren();try{e=document.activeElement}catch{e=s[0]}return e}},{key:"trapFocus",value:function(e){if(!!this.props.trapFocus&&!!this._element&&this._dialog!==e.target&&!(this.offcanvasIndex<a.openCount-1)){for(var s=this.getFocusableChildren(),c=0;c<s.length;c+=1)if(s[c]===e.target)return;s.length>0&&(e.preventDefault(),e.stopPropagation(),s[0].focus())}}},{key:"init",value:function(){try{this._triggeringElement=document.activeElement}catch{this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=ne(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=oe(),ae(),a.openCount===0&&this.props.backdrop&&!this.props.scrollable&&(document.body.style.overflow="hidden"),this.offcanvasIndex=a.openCount,a.openCount+=1}},{key:"destroy",value:function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()}},{key:"manageFocusAfterClose",value:function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}}},{key:"close",value:function(){this.manageFocusAfterClose(),a.openCount=Math.max(0,a.openCount-1),document.body.style.overflow=null,se(this._originalBodyPadding)}},{key:"clearBackdropAnimationTimeout",value:function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)}},{key:"render",value:function(){var e=this,s=this.props,c=s.direction,u=s.unmountOnClose;if(!!this._element&&(this.state.isOpen||!u)){var m=!!this._element&&!this.state.isOpen&&!u;this._element.style.display=m?"none":"block";var l=this.props,w=l.className,C=l.backdropClassName,v=l.cssModule,O=l.isOpen,_=l.backdrop,U=l.role,K=l.labelledBy,q=l.style,G={onKeyUp:this.handleEscape,onKeyDown:this.handleTab,"aria-labelledby":K,role:U,tabIndex:"-1"},k=this.props.fade,J=h(h(h({},B.defaultProps),this.props.offcanvasTransition),{},{baseClass:k?this.props.offcanvasTransition.baseClass:"",timeout:k?this.props.offcanvasTransition.timeout:0}),Q=h(h(h({},B.defaultProps),this.props.backdropTransition),{},{baseClass:k?this.props.backdropTransition.baseClass:"",timeout:k?this.props.backdropTransition.timeout:0}),V=_&&(k?i(B,{...Q,in:O&&!!_,innerRef:function(x){e._backdrop=x},cssModule:v,className:b(g("offcanvas-backdrop",C),v),onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown}):i("div",{className:b(g("offcanvas-backdrop","show",C),v),ref:function(x){e._backdrop=x},onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown})),X=re(this.props,be);return p(ue,{node:this._element,children:[i(B,{...X,...G,...J,in:O,onEntered:this.onOpened,onExited:this.onClosed,cssModule:v,className:b(g("offcanvas",w,"offcanvas-".concat(c)),v),innerRef:function(x){e._dialog=x},style:h(h({},q),{},{visibility:O?"visible":"hidden"}),children:this.props.children}),V]})}return null}}]),a}(Z.Component);S.propTypes=W;S.defaultProps=ye;S.openCount=0;const $=S;var Ce=["className","cssModule","tag"];function Oe(t,o){if(t==null)return{};var a=ke(t,o),n,e;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(e=0;e<s.length;e++)n=s[e],!(o.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(a[n]=t[n]))}return a}function ke(t,o){if(t==null)return{};var a={},n=Object.keys(t),e,s;for(s=0;s<n.length;s++)e=n[s],!(o.indexOf(e)>=0)&&(a[e]=t[e]);return a}var xe={tag:F,className:r.exports.string,cssModule:r.exports.object};function j(t){var o=t.className,a=t.cssModule,n=t.tag,e=n===void 0?"div":n,s=Oe(t,Ce),c=b(g(o,"offcanvas-body"),a);return i(e,{...s,className:c})}j.propTypes=xe;var Be=["children","className","close","closeAriaLabel","cssModule","tag","toggle","wrapTag"];function we(t,o){if(t==null)return{};var a=_e(t,o),n,e;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(e=0;e<s.length;e++)n=s[e],!(o.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(a[n]=t[n]))}return a}function _e(t,o){if(t==null)return{};var a={},n=Object.keys(t),e,s;for(s=0;s<n.length;s++)e=n[s],!(o.indexOf(e)>=0)&&(a[e]=t[e]);return a}var Pe={children:r.exports.node,className:r.exports.string,close:r.exports.object,closeAriaLabel:r.exports.string,cssModule:r.exports.object,tag:F,toggle:r.exports.func,wrapTag:F};function D(t){var o,a=t.children,n=t.className,e=t.close,s=t.closeAriaLabel,c=s===void 0?"Close":s,u=t.cssModule,m=t.tag,l=m===void 0?"h5":m,w=t.toggle,C=t.wrapTag,v=C===void 0?"div":C,O=we(t,Be),_=b(g(n,"offcanvas-header"),u);return!e&&w&&(o=i("button",{type:"button",onClick:w,className:b("btn-close",u),"aria-label":c})),p(v,{...O,className:_,children:[i(l,{className:b("offcanvas-title",u),children:a}),e||o]})}D.propTypes=Pe;const Te=i("pre",{children:i("code",{className:"language-jsx",children:`import { useState } from 'react'
import classnames from 'classnames'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'

const OffCanvasPlacement = () => {
  const [canvasPlacement, setCanvasPlacement] = useState('start')
  const [canvasOpen, setCanvasOpen] = useState(false)

  const toggleCanvasStart = () => {
    setCanvasPlacement('start')
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasEnd = () => {
    setCanvasPlacement('end')
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasTop = () => {
    setCanvasPlacement('top')
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasBottom = () => {
    setCanvasPlacement('bottom')
    setCanvasOpen(!canvasOpen)
  }

  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' onClick={toggleCanvasStart}>
        Toggle Start
      </Button>
      <Button color='primary' onClick={toggleCanvasEnd}>
        Toggle End
      </Button>
      <Button color='primary' onClick={toggleCanvasTop}>
        Toggle Top
      </Button>
      <Button color='primary' onClick={toggleCanvasBottom}>
        Toggle Bottom
      </Button>
      <Offcanvas direction={canvasPlacement} isOpen={canvasOpen} toggle={toggleCanvasStart}>
        <OffcanvasHeader toggle={toggleCanvasStart}>OffCanvas {canvasPlacement}</OffcanvasHeader>
        <OffcanvasBody
          className={classnames({
            'my-auto mx-0 flex-grow-0': canvasPlacement === 'start' || canvasPlacement === 'end'
          })}
        >
          <p
            className={classnames({
              'text-center': canvasPlacement === 'start' || canvasPlacement === 'end'
            })}
          >
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <Button
            color='primary'
            onClick={toggleCanvasStart}
            className={classnames({
              'mb-1': canvasPlacement === 'start' || canvasPlacement === 'end',
              'me-1': canvasPlacement === 'top' || canvasPlacement === 'bottom'
            })}
            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}
          >
            Continue
          </Button>
          <Button
            outline
            color='secondary'
            onClick={toggleCanvasStart}
            {...(canvasPlacement === 'start' || canvasPlacement === 'end' ? { block: true } : {})}
          >
            Cancel
          </Button>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default OffCanvasPlacement
`})}),Se=i("pre",{children:i("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Button, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'

const OffCanvasPlacement = () => {
  const [canvasOpen, setCanvasOpen] = useState(false)
  const [canvasScroll, setCanvasScroll] = useState(false)
  const [canvasBackdrop, setCanvasBackdrop] = useState(true)

  const toggleCanvasScroll = () => {
    setCanvasScroll(true)
    setCanvasOpen(!canvasOpen)
  }

  const toggleCanvasBackdrop = () => {
    setCanvasBackdrop(false)
    setCanvasOpen(!canvasOpen)
  }

  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' onClick={toggleCanvasScroll}>
        Enable Body Scrolling
      </Button>
      <Button color='primary' onClick={toggleCanvasBackdrop}>
        Disable Backdrop
      </Button>
      <Offcanvas
        scrollable={canvasScroll}
        backdrop={canvasBackdrop}
        direction='end'
        isOpen={canvasOpen}
        toggle={toggleCanvasScroll}
      >
        <OffcanvasHeader toggle={toggleCanvasScroll}>OffCanvas {canvasScroll ? 'Scroll' : 'Backdrop'}</OffcanvasHeader>
        <OffcanvasBody className='my-auto mx-0 flex-grow-0'>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <p className='text-center'>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web
            designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have
            scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
          </p>
          <Button block color='primary' onClick={toggleCanvasScroll} className='mb-1'>
            Continue
          </Button>
          <Button block outline color='secondary' onClick={toggleCanvasScroll}>
            Cancel
          </Button>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default OffCanvasPlacement
`})}),Fe=()=>{const[t,o]=y.exports.useState(!1),[a,n]=y.exports.useState(!1),[e,s]=y.exports.useState(!0),c=()=>{n(!0),o(!t)};return p("div",{className:"demo-inline-spacing",children:[i(f,{color:"primary",onClick:c,children:"Enable Body Scrolling"}),i(f,{color:"primary",onClick:()=>{s(!1),o(!t)},children:"Disable Backdrop"}),p($,{scrollable:a,backdrop:e,direction:"end",isOpen:t,toggle:c,children:[p(D,{toggle:c,children:["OffCanvas ",a?"Scroll":"Backdrop"]}),p(j,{className:"my-auto mx-0 flex-grow-0",children:[i("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),i("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),i("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),i("p",{className:"text-center",children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),i(f,{block:!0,color:"primary",onClick:c,className:"mb-1",children:"Continue"}),i(f,{block:!0,outline:!0,color:"secondary",onClick:c,children:"Cancel"})]})]})]})},Ee=()=>{const[t,o]=y.exports.useState("start"),[a,n]=y.exports.useState(!1),e=()=>{o("start"),n(!a)};return p("div",{className:"demo-inline-spacing",children:[i(f,{color:"primary",onClick:e,children:"Toggle Start"}),i(f,{color:"primary",onClick:()=>{o("end"),n(!a)},children:"Toggle End"}),i(f,{color:"primary",onClick:()=>{o("top"),n(!a)},children:"Toggle Top"}),i(f,{color:"primary",onClick:()=>{o("bottom"),n(!a)},children:"Toggle Bottom"}),p($,{direction:t,isOpen:a,toggle:e,children:[p(D,{toggle:e,children:["OffCanvas ",t]}),p(j,{className:g({"my-auto mx-0 flex-grow-0":t==="start"||t==="end"}),children:[i("p",{className:g({"text-center":t==="start"||t==="end"}),children:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book."}),i(f,{color:"primary",onClick:e,className:g({"mb-1":t==="start"||t==="end","me-1":t==="top"||t==="bottom"}),...t==="start"||t==="end"?{block:!0}:{},children:"Continue"}),i(f,{outline:!0,color:"secondary",onClick:e,...t==="start"||t==="end"?{block:!0}:{},children:"Cancel"})]})]})]})},Ge=()=>(y.exports.useEffect(()=>{ie.highlightAll()},[]),p(y.exports.Fragment,{children:[i(le,{title:"Offcanvas",data:[{title:"Components"},{title:"OffCanvas"}]}),p(ce,{className:"match-height",children:[i(L,{sm:"12",children:i(I,{title:"Placement",code:Te,children:i(Ee,{})})}),i(L,{sm:"12",children:i(I,{title:"Options",code:Se,children:i(Fe,{})})})]})]}));export{Ge as default};
