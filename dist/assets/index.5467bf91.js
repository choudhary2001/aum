import{J as n,r as c,k as e,B as s,bQ as l}from"./index.dff4e684.js";import{R as a,C as i}from"./Col.96fcbc17.js";import{C as t}from"./CardText.dd9505fe.js";import{C as o}from"./index.8b812b30.js";import{B as p}from"./index.8bb87258.js";import{S as r}from"./Spinner.ec21fe85.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./App.37a2596a.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";const d=()=>n(c.exports.Fragment,{children:[e("div",{className:"d-flex justify-content-center my-1",children:e(r,{})}),n("div",{className:"d-flex justify-content-between align-items-center",children:[e("strong",{children:"Loading..."}),e(r,{})]})]}),m=()=>e(r,{className:"float-end mb-2"}),g=()=>n("div",{className:"demo-inline-spacing",children:[n("div",{children:[e(r,{className:"me-25",size:"sm"}),e(r,{type:"grow",size:"sm"})]}),n("div",{children:[e(r,{className:"me-25"}),e(r,{type:"grow"})]}),n("div",{children:[e(r,{className:"me-25",style:{height:"3rem",width:"3rem"}}),e(r,{type:"grow",style:{height:"3rem",width:"3rem"}})]})]}),h=()=>e(r,{type:"grow"}),S=()=>e(r,{}),u=()=>n("div",{className:"demo-inline-spacing",children:[e(r,{color:"primary"}),e(r,{color:"secondary"}),e(r,{color:"success"}),e(r,{color:"danger"}),e(r,{color:"warning"}),e(r,{color:"info"}),e(r,{color:"light"}),e(r,{color:"dark"})]}),w=()=>n("div",{className:"demo-inline-spacing",children:[e(s,{color:"primary",outline:!0,disabled:!0,children:e(r,{size:"sm"})}),n(s,{color:"primary",outline:!0,disabled:!0,children:[e(r,{size:"sm"}),e("span",{className:"ms-50",children:"Loading..."})]}),e(s,{color:"primary",outline:!0,disabled:!0,children:e(r,{size:"sm",type:"grow"})}),n(s,{color:"primary",outline:!0,disabled:!0,children:[e(r,{size:"sm",type:"grow"}),e("span",{className:"ms-50",children:"Loading..."})]})]}),y=()=>n("div",{className:"demo-inline-spacing",children:[e(r,{type:"grow",color:"primary"}),e(r,{type:"grow",color:"secondary"}),e(r,{type:"grow",color:"success"}),e(r,{type:"grow",color:"danger"}),e(r,{type:"grow",color:"warning"}),e(r,{type:"grow",color:"info"}),e(r,{type:"grow",color:"light"}),e(r,{type:"grow",color:"dark"})]}),f=()=>e("div",{className:"text-center",children:e(r,{})}),x=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerBorder = () => {
  return <Spinner />
}
export default SpinnerBorder
`})}),N=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerColors = () => {
  return (
    <React.Fragment>
      <Spinner color='primary' />
      <Spinner color='secondary' />
      <Spinner color='success' />
      <Spinner color='danger' />
      <Spinner color='warning' />
      <Spinner color='info' />
      <Spinner color='light' />
      <Spinner color='dark' />
    </React.Fragment>
  )
}
export default SpinnerColors
`})}),v=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerGrowing = () => {
  return <Spinner type='grow' color='primary' />
}
export default SpinnerGrowing
`})}),B=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerGrowColors = () => {
  return (
    <React.Fragment>
      <Spinner type='grow' color='primary' />
      <Spinner type='grow' color='secondary' />
      <Spinner type='grow' color='success' />
      <Spinner type='grow' color='danger' />
      <Spinner type='grow' color='warning' />
      <Spinner type='grow' color='info' />
      <Spinner type='grow' color='light' />
      <Spinner type='grow' color='dark' />
    </React.Fragment>
  )
}
export default SpinnerGrowColors`})}),z=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerFlex = () => {
  return (
    <React.Fragment>
      <div className='d-flex justify-content-center my-1'>
        <Spinner />
      </div>

      <div className='d-flex justify-content-between align-items-center'>
        <strong>Loading...</strong>
        <Spinner />
      </div>
    </React.Fragment>
  )
}
export default SpinnerFlex
`})}),F=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerFloat = () => {
  return <Spinner className='float-end mb-2' />
}
export default SpinnerFloat
`})}),C=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerTextAlignment = () => {
  return (
    <div className='text-center'>
      <Spinner />
    </div>
  )
}
export default SpinnerTextAlignment
`})}),b=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Spinner } from 'reactstrap'

const SpinnerSizes = () => {
  return (
    <div className='demo-inline-spacing'>
      <div>
        <Spinner className='me-25' size='sm' />
        <Spinner type='grow' size='sm' />
      </div>
      <div>
        <Spinner className='me-25' />
        <Spinner type='grow' />
      </div>
      <div>
        <Spinner className='me-25' size='lg' />
        <Spinner type='grow' size='lg' />
      </div>
    </div>
  )
}
export default SpinnerSizes
`})}),j=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Button, Spinner } from 'reactstrap'

const SpinnerButton = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary'>
        <Spinner color='white' size='sm' />
      </Button>

      <Button color='primary'>
        <Spinner color='white' size='sm' />
        <span className='ms-50'>Loading...</span>
      </Button>

      <Button color='primary'>
        <Spinner color='white' size='sm' type='grow' />
      </Button>

      <Button color='primary'>
        <Spinner color='white' size='sm' type='grow' />
        <span className='ms-50'>Loading...</span>
      </Button>
    </div>
  )
}
export default SpinnerButton
`})}),I=()=>(c.exports.useEffect(()=>{l.highlightAll()},[]),n(c.exports.Fragment,{children:[e(p,{title:"Spinners",data:[{title:"Components"},{title:"Spinners"}]}),n(a,{className:"match-height",children:[e(i,{md:"6",sm:"12",children:n(o,{title:"Border Spinner",code:x,children:[n(t,{children:["Use ",e("code",{children:"Spinner"})," tag to create a bordered spinner."]}),e(S,{})]})}),e(i,{md:"6",sm:"12",children:n(o,{title:"Colors",code:N,children:[n(t,{className:"mb-0",children:["Use ",e("code",{children:"color"})," attribute to create a colored spinner."]}),e(u,{})]})}),e(i,{md:"6",sm:"12",children:n(o,{title:"Growing Spinner",code:v,children:[n(t,{children:["Use ",e("code",{children:'type="grow"'})," with spinner tag to create a growing spinner."]}),e(h,{})]})}),e(i,{md:"6",sm:"12",children:n(o,{title:"Colored Growing Spinners",code:B,children:[n(t,{className:"mb-0",children:["Use ",e("code",{children:"color"})," and ",e("code",{children:"type"})," attribute to create a colored growing spinner."]}),e(y,{})]})}),e(i,{md:"6",sm:"12",children:n(o,{title:"Flex",code:z,children:[n(t,{children:["Use Flexbox utilities to place spinners.Use ",e("code",{children:".d-flex"})," and ",e("code",{children:".justify-content-[side]"}),"."]}),e(d,{})]})}),e(i,{md:"6",sm:"12",children:n(o,{title:"Float",code:F,children:[n(t,{children:["Use ",e("code",{children:".float-[side]"})," with spinner tag to change spinner's position."]}),e(m,{})]})}),e(i,{md:"6",sm:"12",children:n(o,{title:"Text Alignment",code:C,children:[n(t,{children:["You can also use ",e("code",{children:".text-[side]"})," as a wrapper to spinner tag to change spinner's position."]}),e(f,{})]})}),e(i,{md:"6",sm:"12",children:n(o,{title:"Sizes",code:b,children:[n(t,{className:"mb-0",children:["Use prop ",e("code",{children:'size="sm"'})," for Small spinner or use ",e("code",{children:"style"})," prop for custom size."]}),e(g,{})]})}),e(i,{sm:"12",children:e(o,{title:"Buttons",code:j,children:e(w,{})})})]})]}));export{I as default};
