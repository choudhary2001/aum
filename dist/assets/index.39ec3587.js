import{J as a,r as m,k as r,P as c,bQ as s}from"./index.dff4e684.js";import{a as t,b as e,B as b}from"./index.8bb87258.js";import{C as d}from"./index.8b812b30.js";import{R as l,C as n}from"./Col.96fcbc17.js";import{C as i}from"./CardText.dd9505fe.js";import"./App.37a2596a.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";const u=()=>a(m.exports.Fragment,{children:[a(t,{listClassName:"breadcrumb-slash",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-dots",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-dashes",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-pipes",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]}),a(t,{listClassName:"breadcrumb-chevron",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]})]}),o=()=>r(m.exports.Fragment,{children:a(t,{children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{active:!0,children:r("span",{children:" Data "})})]})}),h=()=>a(m.exports.Fragment,{children:[r("div",{className:"d-flex justify-content-start breadcrumb-wrapper",children:a(t,{className:"ms-1",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{children:r("span",{children:" Data "})})]})}),r("div",{className:"d-flex justify-content-center breadcrumb-wrapper my-1",children:a(t,{children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{children:r("span",{children:" Data "})})]})}),r("div",{className:"d-flex justify-content-end breadcrumb-wrapper",children:a(t,{className:"me-1",children:[r(e,{children:r(c,{to:"#",children:" Home "})}),r(e,{children:r(c,{to:"#",children:" Library "})}),r(e,{className:"pe-1",children:r("span",{children:" Data "})})]})})]}),B=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsDefault = () => {
  return (
    <React.Fragment>
      <Breadcrumb className='ms-1'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}
export default BreadcrumbsDefault
    `})}),p=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsStyles = () => {
  return (
    <React.Fragment>
      <Breadcrumb className='breadcrumb-slash'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-dots'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-dashes'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-pipes'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>

      <Breadcrumb className='breadcrumb-chevron'>
        <BreadcrumbItem>
          <Link to='#'> Home </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='#'> Library </Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>
          <span> Data </span>
        </BreadcrumbItem>
      </Breadcrumb>
    </React.Fragment>
  )
}
export default BreadcrumbsStyles

      `})}),I=r("pre",{children:r("code",{className:"language-jsx",children:`

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbsAlignment = () => {
  return (
    <React.Fragment>
      <div className='justify-content-start breadcrumb-wrapper'>
        <Breadcrumb className='ms-1'>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='justify-content-center breadcrumb-wrapper'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='justify-content-end breadcrumb-wrapper'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='#'> Home </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to='#'> Library </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <span> Data </span>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </React.Fragment>
  )
}
export default BreadcrumbsAlignment

      `})}),w=()=>(m.exports.useEffect(()=>{s.highlightAll()},[]),a(m.exports.Fragment,{children:[r(b,{title:"Breadcrumbs",data:[{title:"Components"},{title:"Breadcrumbs"}]}),a(l,{children:[r(n,{sm:"12",children:a("section",{id:"component-breadcrumbs",children:[r(d,{title:"Default",code:B,children:r(o,{})}),a(d,{title:"Styles",code:p,children:[a(i,{children:["These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing"," ",r("code",{children:"$breadcrumb-divider"})," variable value in scss"]}),r(u,{})]})]})}),r(n,{sm:"12",children:r("section",{id:"breadcrumb-alignment",children:a(d,{title:"Alignment",code:I,children:[a(i,{children:["Use class ",a("code",{children:[".justify-content-","{position}"]})," to align breadcrumb to desired position."]}),r(h,{})]})})})]})]}));export{w as default};
