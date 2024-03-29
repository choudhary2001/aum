import{J as a,k as e,r as d,bQ as s}from"./index.dff4e684.js";import{R as n,C as r}from"./Col.96fcbc17.js";import{C as i}from"./CardText.dd9505fe.js";import{C as o}from"./index.8b812b30.js";import{B as t}from"./index.8bb87258.js";import{n as l,B as c}from"./App.37a2596a.js";import{L as g}from"./link.d9d509d6.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";const p=()=>a("div",{className:"demo-inline-spacing",children:[e(l,{color:"primary",pill:!0,className:"badge-glow",children:"Primary"}),e(l,{color:"secondary",pill:!0,className:"badge-glow",children:"Secondary"}),e(l,{color:"success",pill:!0,className:"badge-glow",children:"Success"}),e(l,{color:"danger",pill:!0,className:"badge-glow",children:"Danger"}),e(l,{color:"warning",pill:!0,className:"badge-glow",children:"Warning"}),e(l,{color:"info",pill:!0,className:"badge-glow",children:"Info"}),e(l,{color:"dark",pill:!0,className:"badge-glow",children:"Dark"})]}),m=()=>e(l,{pill:!0,color:"danger",className:"d-block",children:e("span",{children:"Block Badge Pill"})}),h=()=>a(l,{color:"primary",pill:!0,href:"#",children:[e(g,{size:12}),e("span",{className:"align-middle ms-50",children:"Link Badge Pill"})]}),B=()=>a("div",{className:"demo-inline-spacing",children:[e(l,{color:"light-primary",pill:!0,children:"Primary"}),e(l,{color:"light-secondary",pill:!0,children:"Secondary"}),e(l,{color:"light-success",pill:!0,children:"Success"}),e(l,{color:"light-danger",pill:!0,children:"Danger"}),e(l,{color:"light-warning",pill:!0,children:"Warning"}),e(l,{color:"light-info",pill:!0,children:"Info"})]}),u=()=>a("div",{className:"demo-inline-spacing",children:[a("div",{className:"position-relative",children:[e(l,{pill:!0,color:"primary",className:"badge-up",children:"4"}),e(c,{className:"text-primary",size:22})]}),a("div",{className:"position-relative",children:[e(l,{pill:!0,color:"danger",className:"badge-up",children:"5"}),e(c,{className:"text-danger",size:22})]}),a("div",{className:"position-relative",children:[e(l,{pill:!0,color:"info",className:"badge-up",children:"6"}),e(c,{className:"text-info",size:22})]})]}),N=()=>a("div",{className:"demo-inline-spacing",children:[e(l,{color:"primary",pill:!0,children:"Primary"}),e(l,{color:"secondary",pill:!0,children:"Secondary"}),e(l,{color:"success",pill:!0,children:"Success"}),e(l,{color:"danger",pill:!0,children:"Danger"}),e(l,{color:"warning",pill:!0,children:"Warning"}),e(l,{color:"info",pill:!0,children:"Info"}),e(l,{color:"dark",pill:!0,children:"Dark"})]}),f=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgePillLight = () => {
  return (
    <React.Fragment>
      <Badge color='light-primary' pill>
        Primary
      </Badge>
      <Badge color='light-secondary' pill>
        Secondary
      </Badge>
      <Badge color='light-success' pill>
        Success
      </Badge>
      <Badge color='light-danger' pill>
      Danger
      </Badge>
      <Badge color='light-warning' pill>
        Warning
      </Badge>
      <Badge color='light-info' pill>
        Info
      </Badge>
    </React.Fragment>
  )
}
export default BadgePillLight
`})}),b=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgePillGlow = () => {
  return (
    <React.Fragment>
      <Badge color='primary' pill className='badge-glow'>
        Primary
      </Badge>
      <Badge color='secondary' pill className='badge-glow'>
        Secondary
      </Badge>
      <Badge color='success' pill className='badge-glow'>
        Success
      </Badge>
      <Badge color='danger' pill className='badge-glow'>
        Danger
      </Badge>
      <Badge color='warning' pill className='badge-glow'>
        Warning
      </Badge>
      <Badge color='info' pill className='badge-glow'>
        Info
      </Badge>
      <Badge color='dark' pill className='badge-glow mb-1'>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgePillGlow
`})}),P=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgePillContextual = () => {
  return (
    <React.Fragment>
      <Badge color='primary' pill>
        Primary
      </Badge>
      <Badge color='secondary' pill>
        Secondary
      </Badge>
      <Badge color='success' pill>
        Success
      </Badge>
      <Badge color='danger' pill>
        Danger
      </Badge>
      <Badge color='warning' pill>
        Warning
      </Badge>
      <Badge color='info' pill>
        Info
      </Badge>
      <Badge color='dark' pill>
        Dark
      </Badge>
    </React.Fragment>
  )
}
export default BadgePillContextual
`})}),k=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'
import { Bell } from 'react-feather'

const BadgePillNotification = () => {
  return (
    <div className='demo-inline-spacing'>
      <div className='position-relative'>
        <Badge pill color='primary' className='badge-up'>
          4
        </Badge>
        <Bell className='text-primary' size={22} />
      </div>
      <div className='position-relative'>
        <Badge pill color='danger' className='badge-up'>
          5
        </Badge>
        <Bell className='text-danger' size={22} />
      </div>
      <div className='position-relative'>
        <Badge pill color='info' className='badge-up'>
          6
        </Badge>
        <Bell className='text-info' size={22} />
      </div>
    </div>
  )
}
export default BadgePillNotification

`})}),w=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'
import { Link } from 'react-feather'

const BadgePillLink = () => {
  return (
    <Badge color='primary' pill href='#'>
      <Link size={12} />
      <span className='align-middle ms-50'>Link Badge Pill</span>
    </Badge>
  )
}
export default BadgePillLink
`})}),y=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Badge } from 'reactstrap'

const BadgePillBlock = () => {
  return (
    <Badge pill color='primary' className='d-block'>
      <span>Block Badge Pill</span>
    </Badge>
  )
}
export default BadgePillBlock
`})}),E=()=>(d.exports.useEffect(()=>{s.highlightAll()},[]),a(d.exports.Fragment,{children:[e(t,{title:"Pill Badges",data:[{title:"Components"},{title:"Pill Badges"}]}),a(n,{children:[e(r,{sm:"12",children:a(o,{title:"Contextual",code:P,children:[a(i,{className:"mb-0",children:["Use prop ",e("code",{children:"pill"})," with ",e("code",{children:"Badge"})," tag to create badge pill."]}),e(N,{})]})}),e(r,{sm:"12",children:a(o,{title:"Glow",code:b,children:[a(i,{className:"mb-0",children:["Use class ",e("code",{children:".badge-glow"})," with ",e("code",{children:"Badge"})," tag to add glow effect to your badge."]}),e(p,{})]})}),e(r,{sm:"12",children:a(o,{title:"Light",code:f,children:[a(i,{className:"mb-0",children:["Use prop ",e("code",{children:"pill"})," and ",e("code",{children:'color="light-COLOR_NAME"'})," with ",e("code",{children:"Badge"})," tag to create a light badge pill."]}),e(B,{})]})}),e(r,{sm:"12",children:a(o,{title:"Notifications",code:k,children:[a(i,{className:"mb-0",children:["Use ",e("code",{children:".badge-up"})," to set pill badge to higher than other text. So that it can work with notifications also."]}),e(u,{})]})})]}),a(n,{className:"match-height",children:[e(r,{md:"6",sm:"12",children:a(o,{title:"Link",code:w,children:[a(i,{children:["Use ",e("code",{children:'href="#"'})," prop to use badge as a link."]}),e(h,{})]})}),e(r,{md:"6",sm:"12",children:a(o,{title:"Block",code:y,children:[a(i,{children:["Use ",e("code",{children:".d-block"})," class to make badge display as block."]}),e(m,{})]})})]})]}));export{E as default};
