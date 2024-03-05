import{r as l,J as s,k as e,B as r,b_ as g,c0 as h,bQ as u}from"./index.dff4e684.js";import{R as m,C as i}from"./Col.96fcbc17.js";import{C as f}from"./CardText.dd9505fe.js";import{C as p}from"./index.8b812b30.js";import{B as C}from"./index.8bb87258.js";import{O as n}from"./App.37a2596a.js";import{c as d}from"./08.f1bba1b6.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";const y=()=>{const[t,o]=l.exports.useState(!1);return s("div",{children:[e(r,{className:"mb-2",color:"primary",onClick:()=>o(!t),children:"Toggle"}),e(n,{isOpen:t,children:s("div",{className:"d-flex p-1 border",children:[e("img",{className:"me-2",src:g,alt:"collapse-img",height:"125"}),e("span",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."})]})})]})},b=()=>{const[t,o]=l.exports.useState(!1);return s("div",{children:[e(r,{className:"mb-2",color:"primary",onClick:()=>o(!t),children:"Toggle"}),e(n,{horizontal:!0,isOpen:t,children:s("div",{className:"p-1 d-flex width-300 border",children:[e("img",{className:"me-2",src:d,alt:"collapse-img",height:"100",width:"100"}),e("div",{className:"flex-grow-1",children:"This is some content from a media component. You can replace this with any content and adjust it as needed."})]})})]})},I=()=>{const[t,o]=l.exports.useState(!1),[a,c]=l.exports.useState(!1);return s("div",{children:[s("div",{className:"demo-inline-spacing mb-2",children:[e(r,{color:"primary",onClick:()=>o(!t),children:"Toggle First Collapse"}),e(r,{color:"primary",onClick:()=>c(!a),children:"Toggle Second Collapse"}),e(r,{color:"primary",onClick:()=>{o(!t),c(!a)},children:"Toggle Both Collapse"})]}),s(m,{children:[e(i,{lg:6,children:e(n,{isOpen:t,children:s("div",{className:"d-flex p-1 border",children:[e("img",{className:"me-2",src:h,alt:"collapse-img-1",height:"125"}),e("span",{children:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."})]})})}),e(i,{lg:6,children:e(n,{isOpen:a,children:s("div",{className:"d-flex p-1 border",children:[e("img",{className:"me-2",src:d,alt:"collapse-img-2",height:"125"}),e("span",{children:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.It is a long established fact that a reader content."})]})})})]})]})},v=e("pre",{children:e("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Collapse, Button } from 'reactstrap'

import collapseImg from '@src/assets/images/slider/04.jpg'

const CollapseBasic = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Button className='mb-2' color='primary' onClick={toggle}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
        <div className='d-flex p-1 border'>
          <img className='me-2' src={collapseImg} alt='collapse-img' height='125' />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
            that it has a more-or-less normal distribution of letters.
          </span>
        </div>
      </Collapse>
    </div>
  )
}

export default CollapseBasic
`})}),w=e("pre",{children:e("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Row, Col, Collapse, Button } from 'reactstrap'

import collapseImg1 from '@src/assets/images/slider/06.jpg'
import collapseImg2 from '@src/assets/images/slider/08.jpg'

const CollapseMultipleTargets = () => {
  const [firstCollapse, setFirstCollapse] = useState(false)
  const [secondCollapse, setSecondCollapse] = useState(false)

  const toggleFirstCollapse = () => setFirstCollapse(!firstCollapse)
  const toggleSecondCollapse = () => setSecondCollapse(!secondCollapse)
  const toggleBothCollapses = () => {
    setFirstCollapse(!firstCollapse)
    setSecondCollapse(!secondCollapse)
  }

  return (
    <div>
      <div className='demo-inline-spacing mb-2'>
        <Button color='primary' onClick={toggleFirstCollapse}>
          Toggle First Collapse
        </Button>
        <Button color='primary' onClick={toggleSecondCollapse}>
          Toggle Second Collapse
        </Button>
        <Button color='primary' onClick={toggleBothCollapses}>
          Toggle Both Collapse
        </Button>
      </div>
      <Row>
        <Col lg={6}>
          <Collapse isOpen={firstCollapse}>
            <div className='d-flex p-1 border'>
              <img className='me-2' src={collapseImg1} alt='collapse-img-1' height='125' />
              <span>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined
                with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
              </span>
            </div>
          </Collapse>
        </Col>
        <Col lg={6}>
          <Collapse isOpen={secondCollapse}>
            <div className='d-flex p-1 border'>
              <img className='me-2' src={collapseImg2} alt='collapse-img-2' height='125' />
              <span>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look even slightly
                believable. If you are going to use a passage of Lorem Ipsum.It is a long established fact that a reader
                content.
              </span>
            </div>
          </Collapse>
        </Col>
      </Row>
    </div>
  )
}

export default CollapseMultipleTargets
`})}),k=e("pre",{children:e("code",{className:"language-jsx",children:`import { useState } from 'react'
import { Collapse, Button } from 'reactstrap'

import collapseImg from '@src/assets/images/slider/08.jpg'

const CollapseHorizontal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Button className='mb-2' color='primary' onClick={toggle}>
        Toggle
      </Button>
      <Collapse horizontal isOpen={isOpen}>
        <div className='p-1 d-flex width-300 border'>
          <img className='me-2' src={collapseImg} alt='collapse-img' height='100' width='100' />
          <div className='flex-grow-1'>
            This is some content from a media component. You can replace this with any content and adjust it as needed.
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default CollapseHorizontal
`})}),Q=()=>(l.exports.useEffect(()=>{u.highlightAll()},[]),s(l.exports.Fragment,{children:[e(C,{title:"Collapse",data:[{title:"Components"},{title:"Collapse"}]}),s(m,{children:[e(i,{sm:"12",children:e(p,{title:"Collapse Basic",code:v,children:e(y,{})})}),e(i,{sm:"12",children:e(p,{title:"Multiple Target",code:w,children:e(I,{})})}),e(i,{sm:"12",children:s(p,{title:"Horizontal",code:k,children:[s(f,{children:["Use props ",e("code",{children:"horizontal"})," to create horizontal collapse"]}),e(b,{})]})})]})]}));export{Q as default};
