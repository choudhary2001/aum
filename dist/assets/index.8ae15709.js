import{J as t,k as o,B as e,r as i,bQ as s}from"./index.dff4e684.js";import{R as a,C as r}from"./Col.96fcbc17.js";import{C as n}from"./CardText.dd9505fe.js";import{C as p}from"./index.8b812b30.js";import{B as m}from"./index.8bb87258.js";import{U as l,T as h}from"./UncontrolledTooltip.57b433b3.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./App.37a2596a.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./TooltipPopoverWrapper.2dcdb0e6.js";import"./Fade.f1e5f77c.js";const T=()=>t("div",{className:"demo-inline-spacing",children:[o(e,{color:"primary",outline:!0,id:"positionTop",children:"Top"}),o(l,{placement:"top",target:"positionTop",children:"Tooltip on Top"}),o(e,{color:"primary",outline:!0,id:"positionRight",children:"Right"}),o(l,{placement:"right",target:"positionRight",children:"Tooltip on Right"}),o(e,{color:"primary",outline:!0,id:"positionBottom",children:"Bottom"}),o(l,{placement:"bottom",target:"positionBottom",children:"Tooltip on Bottom"}),o(e,{color:"primary",outline:!0,id:"positionLeft",children:"Left"}),o(l,{placement:"left",target:"positionLeft",children:"Tooltip on Left"})]}),g=()=>{const[c,d]=i.exports.useState(!1);return t(i.exports.Fragment,{children:[o(e,{color:"primary",id:"ControlledExample",children:"Controlled"}),o(h,{placement:"top",isOpen:c,target:"ControlledExample",toggle:()=>d(!c),children:"Hello World !"})]})},u=()=>t(i.exports.Fragment,{children:[o(e,{color:"primary",id:"UnControlledExample",children:"Uncontrolled"}),o(l,{placement:"top",target:"UnControlledExample",children:"Hello World !"})]}),f=o("pre",{children:o("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Button, Tooltip } from 'reactstrap'

const TooltipControlled = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  return (
    <React.Fragment>
      <Button color='primary' id='ControlledExample'>
        Controlled
      </Button>
      <Tooltip
        placement='top'
        isOpen={tooltipOpen}
        target='ControlledExample'
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        Hello World !
      </Tooltip>
    </React.Fragment>
  )
}
export default TooltipControlled
`})}),B=o("pre",{children:o("code",{className:"language-jsx",children:`

import { Button, UncontrolledTooltip } from 'reactstrap'

const TooltipUncontrolled = () => {
  return (
    <React.Fragment>
      <Button color='primary' id='UnControlledExample'>
        Uncontrolled
      </Button>
      <UncontrolledTooltip placement='top' target='UnControlledExample'>
        Hello World !
      </UncontrolledTooltip>
    </React.Fragment>
  )
}
export default TooltipUncontrolled
`})}),U=o("pre",{children:o("code",{className:"language-jsx",children:`

import { Button, UncontrolledTooltip } from 'reactstrap'

const TooltipPosition = () => {
  return (
    <div className='demo-inline-spacing'>
      <Button color='primary' outline id='positionTop'>
        Top
      </Button>
      <UncontrolledTooltip placement='top' target='positionTop'>
        Tooltip on Top
      </UncontrolledTooltip>

      <Button color='primary' outline id='positionRight'>
        Right
      </Button>
      <UncontrolledTooltip placement='right' target='positionRight'>
        Tooltip on Right
      </UncontrolledTooltip>

      <Button color='primary' outline id='positionBottom'>
        Bottom
      </Button>
      <UncontrolledTooltip placement='bottom' target='positionBottom'>
        Tooltip on Bottom
      </UncontrolledTooltip>

      <Button color='primary' outline id='positionLeft'>
        Left
      </Button>
      <UncontrolledTooltip placement='left' target='positionLeft'>
        Tooltip on Left
      </UncontrolledTooltip>
    </div>
  )
}
export default TooltipPosition
`})}),w=()=>(i.exports.useEffect(()=>{s.highlightAll()},[]),t(i.exports.Fragment,{children:[o(m,{title:"Tooltips",data:[{title:"Components"},{title:"Tooltips"}]}),t(a,{children:[o(r,{xl:"6",lg:"12",children:t(p,{title:"Controlled Tooltip",code:f,children:[t(n,{children:["For controlled tooltips you'll have to manage state of component.controlled tooltips require"," ",o("code",{children:"isOpen"})," and ",o("code",{children:"toggle"})," props to work."]}),o(g,{})]})}),o(r,{xl:"6",lg:"12",children:t(p,{title:"Uncontrolled Tooltip",code:B,children:[t(n,{children:["UncontrolledTooltip does not require ",o("code",{children:"isOpen"})," nor ",o("code",{children:"toggle"})," props to work.All you have to do is provide a valid target to tooltip."]}),o(u,{})]})})]}),o(a,{children:o(r,{sm:"12",children:t(p,{title:"Tooltip Positions",code:U,children:[t(n,{className:"mb-0",children:["Use prop ",o("code",{children:"placement"})," to change position of tooltip."]}),o(T,{})]})})})]}));export{w as default};
