import{J as i,k as e,r as v,bQ as l}from"./index.dff4e684.js";import{R as N,C as n}from"./Col.96fcbc17.js";import{C as t}from"./CardText.dd9505fe.js";import{C as d}from"./index.8b812b30.js";import{B as h}from"./index.8bb87258.js";import{N as c}from"./Nav.30fd4ef4.js";import{N as a,G as r}from"./App.37a2596a.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";const s=()=>i(c,{className:"justify-content-end",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),o=()=>i(c,{children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),m=()=>i(c,{className:"wrap-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),k=()=>i(c,{className:"justify-content-center",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),L=()=>i(c,{vertical:!0,className:"wrap-border square-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e("li",{className:"dropdown-divider",children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),f=()=>i(c,{vertical:!0,children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),u=()=>i(c,{vertical:!0,className:"wrap-border square-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),p=()=>i(c,{vertical:!0,className:"wrap-border",children:[e(a,{children:e(r,{href:"#",active:!0,children:"Active"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{href:"#",children:"Link"})}),e(a,{children:e(r,{disabled:!0,href:"#",children:"Disabled"})})]}),I=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavBasic = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavBasic
  `})}),b=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavBorder = () => {
  return (
    <Nav className='wrap-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavBorder
  `})}),g=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavCenter = () => {
  return (
    <Nav className='justify-content-center'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavCenter
  `})}),w=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavEnd = () => {
  return (
    <Nav className='justify-content-end'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavEnd
  `})}),x=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavVertical = () => {
  return (
    <Nav vertical>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavVertical
  `})}),B=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavVerticalBorder = () => {
  return (
    <Nav vertical className='wrap-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavVerticalBorder
  `})}),D=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavSquareBorder = () => {
  return (
    <Nav vertical className='wrap-border square-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavSquareBorder
  `})}),A=e("pre",{children:e("code",{className:"language-jsx",children:`

import { Nav, NavItem, NavLink } from 'reactstrap'

const NavDivider = () => {
  return (
    <Nav vertical className='wrap-border square-border'>
      <NavItem>
        <NavLink href='#' active>
          Active
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem className='dropdown-divider'>
        <NavLink href='#'>Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href='#'>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  )
}
export default NavDivider
  `})}),Q=()=>(v.exports.useEffect(()=>{l.highlightAll()},[]),i(v.exports.Fragment,{children:[e(h,{title:"Navs",data:[{title:"Components"},{title:"Navs"}]}),i(N,{className:"match-height",children:[e(n,{md:"6",sm:"12",children:i(d,{title:"Base Nav",code:I,children:[e(t,{children:"The base nav component provides a strong foundation for building all types of navigation components."}),e(o,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"With Border",code:b,children:[i(t,{children:["Use Class ",e("code",{children:".wrap-border"})," with your ",e("code",{children:"nav"})," tag to wrap your nav with a border"]}),e(m,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Center Alignment",code:g,children:[i(t,{children:["Use Class ",e("code",{children:".justify-content-center"})," with your ",e("code",{children:"nav"})," tag to align your nav to center."]}),e(k,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"End Alignment",code:w,children:[i(t,{children:["Use Class ",e("code",{children:".justify-content-end"})," with your ",e("code",{children:"nav"})," tag to align your nav to End."]}),e(s,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Vertical Nav",code:x,children:[i(t,{children:["Use prop ",e("code",{children:"vertical"})," with nav tag to make it vertical."]}),e(f,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Vertical Nav With Border",code:B,children:[i(t,{children:["To wrap with border, use ",e("code",{children:".wrap-border class"}),"."]}),e(p,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Nav With square Border",code:D,children:[i(t,{children:["To wrap with square border, use ",e("code",{children:".square-border"})," class with ",e("code",{children:".wrap-border"})," class."]}),e(u,{})]})}),e(n,{md:"6",sm:"12",children:i(d,{title:"Nav With Divider",code:A,children:[i(t,{children:["To add divider, use ",e("code",{children:".dropdown-divider"})," class to ",e("code",{children:"NavItem"})]}),e(L,{})]})})]})]}));export{Q as default};
