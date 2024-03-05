import{r as s,J as o,k as e,B as i,bQ as B}from"./index.dff4e684.js";import{R as f,C as k}from"./Col.96fcbc17.js";import{C}from"./CardText.dd9505fe.js";import{M as n,a as u}from"./ModalBody.fe13b04c.js";import{M as p}from"./ModalHeader.73c2755d.js";import{M as m}from"./ModalFooter.f3952666.js";import{A as j}from"./Alert.36ececc1.js";import{F as q}from"./Form.f1a34b24.js";import{I as v}from"./App.37a2596a.js";import{L as w}from"./Label.138433f0.js";import{C as M}from"./index.8b812b30.js";import{B as I}from"./index.8bb87258.js";import"./Portal.330fdcf6.js";import"./Fade.f1e5f77c.js";import"./Card.514988a9.js";import"./CardBody.8c73518d.js";import"./CardHeader.5294cf1e.js";import"./CardTitle.aebc4d98.js";import"./code.4e7dbc11.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";const x=()=>{const[l,t]=s.exports.useState(!1),[c,r]=s.exports.useState(!1),[a,d]=s.exports.useState(!1),[g,h]=s.exports.useState(!1);return o("div",{className:"demo-inline-spacing",children:[o("div",{className:"basic-modal",children:[e(i,{color:"primary",outline:!0,onClick:()=>t(!l),children:"Basic Modal"}),o(n,{isOpen:l,toggle:()=>t(!l),children:[e(p,{toggle:()=>t(!l),children:"Basic Modal"}),o(u,{children:[e("h5",{children:"Check First Paragraph"}),"Oat cake ice cream candy chocolate cake chocolate cake cotton candy drag\xE9e apple pie. Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake liquorice."]}),e(m,{children:e(i,{color:"primary",onClick:()=>t(!l),children:"Accept"})})]})]}),o("div",{className:"vertically-centered-modal",children:[e(i,{color:"primary",outline:!0,onClick:()=>r(!c),children:"Vertically Centered"}),o(n,{isOpen:c,toggle:()=>r(!c),className:"modal-dialog-centered",children:[e(p,{toggle:()=>r(!c),children:"Vertically Centered"}),e(u,{children:"Oat cake ice cream candy chocolate cake chocolate cake cotton candy drag\xE9e apple pie. Brownie carrot cake candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake liquorice."}),o(m,{children:[e(i,{color:"primary",onClick:()=>r(!c),children:"Accept"})," "]})]})]}),e("div",{className:"disabled-backdrop-modal",children:o(s.exports.Fragment,{children:[e(i,{color:"primary",outline:!0,onClick:()=>d(!a),children:"Disabled Backdrop"}),o(n,{isOpen:a,toggle:()=>d(!a),className:"modal-dialog-centered",backdrop:!1,children:[e(p,{toggle:()=>d(!a),children:"Disabled Backdrop"}),e(u,{children:"Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot cake wafer candy canes. Biscuit croissant fruitcake bonbon souffl\xE9."}),o(m,{children:[e(i,{color:"primary",onClick:()=>d(!a),children:"Accept"})," "]})]})]})}),o("div",{className:"disabled-animation-modal",children:[e(i,{color:"primary",outline:!0,onClick:()=>h(!g),children:"Disabled Animation"}),o(n,{isOpen:g,toggle:()=>h(!g),className:"modal-dialog-centered",fade:!1,children:[e(p,{toggle:()=>h(!g),children:"Disabled Fade"}),o(u,{children:["Chocolate bar jelly drag\xE9e cupcake chocolate bar I love donut liquorice. Powder I love marzipan donut candy canes jelly-o. Drag\xE9e liquorice apple pie candy biscuit danish lemon drops sugar plum.",e(j,{className:"mt-1",color:"success",children:e("div",{className:"alert-body",children:"Well done! You successfully read this important alert message."})})]}),o(m,{children:[e(i,{color:"primary",onClick:()=>h(!g),children:"Accept"})," "]})]})]})]})},L=[{id:1,btnTitle:"Extra Small",modalTitle:"Extra Small modal",modalClass:"modal-xs"},{id:2,btnTitle:"Small Modal",modalTitle:"Small Modal",modalClass:"modal-sm"},{id:3,btnTitle:"Default Modal",modalTitle:"Default Modal",modalClass:""},{id:4,btnTitle:"Large Modal",modalTitle:"Large Modal",modalClass:"modal-lg"},{id:5,btnTitle:"Extra Large Modal",modalTitle:"Extra Large Modal",modalClass:"modal-xl"},{id:6,btnTitle:"Fullscreen Modal",modalTitle:"Fullscreen Modal",modalClass:"modal-fullscreen"}],F=()=>{const[l,t]=s.exports.useState(null),c=a=>{t(l!==a?a:null)},r=L.map(a=>o(s.exports.Fragment,{children:[e("div",{children:e(i,{color:"primary",onClick:()=>c(a.id),outline:!0,children:a.btnTitle},a.title)}),o(n,{isOpen:l===a.id,toggle:()=>c(a.id),className:`modal-dialog-centered ${a.modalClass}`,children:[o(p,{toggle:()=>c(a.id),children:[a.modalTitle,a.title]}),e(u,{children:a.id===6?o(s.exports.Fragment,{children:[e("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."}),e("p",{children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),e("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),e("p",{children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}):`Halvah powder wafer. Chupa chups pie topping carrot cake cake. Tootsie roll sesame snaps jelly-o marshmallow
            marshmallow jelly jujubes candy. Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet roll.`}),e(m,{children:e(i,{color:"primary",onClick:()=>c(a.id),outline:!0,children:"Accept"})})]},a.id)]},a.id));return e("div",{className:"demo-inline-spacing",children:r})},O=[{id:1,title:"Primary",modalColor:"modal-primary",btnColor:"primary"},{id:2,title:"Secondary",modalColor:"modal-secondary",btnColor:"secondary"},{id:3,title:"Success",modalColor:"modal-success",btnColor:"success"},{id:4,title:"Danger",modalColor:"modal-danger",btnColor:"danger"},{id:5,title:"Warning",modalColor:"modal-warning",btnColor:"warning"},{id:6,title:"Info",modalColor:"modal-info",btnColor:"info"},{id:7,title:"Dark",modalColor:"modal-dark",btnColor:"dark"}],S=()=>{const[l,t]=s.exports.useState(null),c=a=>{t(l!==a?a:null)},r=O.map(a=>o("div",{className:`theme-${a.modalColor}`,children:[e(i,{color:a.btnColor,onClick:()=>c(a.id),outline:!0,children:a.title},a.title),o(n,{isOpen:l===a.id,toggle:()=>c(a.id),className:"modal-dialog-centered",modalClassName:a.modalColor,children:[e(p,{toggle:()=>c(a.id),children:a.title}),e(u,{children:"Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans carrot cake pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi bears cupcake dessert."}),e(m,{children:e(i,{color:a.btnColor,onClick:()=>c(a.id),children:"Accept"})})]},a.id)]},a.id));return e("div",{className:"demo-inline-spacing",children:r})},N=()=>{const[l,t]=s.exports.useState(!1),[c,r]=s.exports.useState(!1);return o("div",{className:"demo-inline-spacing",children:[o("div",{className:"on-opened-modal",children:[e(i,{color:"primary",outline:!0,onClick:()=>t(!l),children:"On Opened"}),o(n,{isOpen:l,onOpened:()=>alert("On Opened Event Fired"),toggle:()=>t(!l),className:"modal-dialog-centered",children:[e(p,{toggle:()=>t(!l),children:"Basic Modal"}),e(u,{children:"Donut chocolate halvah I love caramels. Dessert croissant I love icing I love drag\xE9e candy canes chocolate bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly."}),e(m,{children:e(i,{color:"primary",onClick:()=>t(!l),children:"Accept"})})]})]}),o("div",{className:"on-closed-modal",children:[e(i,{color:"primary",outline:!0,onClick:()=>r(!c),children:"On Closed"}),o(n,{isOpen:c,onClosed:()=>alert("On Closed Event Fired"),toggle:()=>r(!c),className:"modal-dialog-centered",children:[e(p,{toggle:()=>r(!c),children:"Basic Modal"}),e(u,{children:"Donut chocolate halvah I love caramels. Dessert croissant I love icing I love drag\xE9e candy canes chocolate bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly."}),e(m,{children:e(i,{color:"primary",onClick:()=>r(!c),children:"Accept"})})]})]})]})},E=()=>{const[l,t]=s.exports.useState(!1),[c,r]=s.exports.useState(!0),a=d=>{const g=d.target.value;r(JSON.parse(g))};return o(s.exports.Fragment,{children:[e(q,{onSubmit:d=>d.preventDefault(),children:o(f,{children:[e(k,{className:"mb-sm-0 mb-1",sm:"6",md:"4",lg:"2",children:o(v,{type:"select",name:"unmountOnClose",id:"unmountOnClose",onChange:d=>a(d),children:[e("option",{value:"true",children:"true"}),e("option",{value:"false",children:"false"})]})}),e(k,{sm:"6",md:"4",lg:"2",children:e(i,{color:"success",onClick:()=>t(!l),outline:!0,children:"Launch Modal"})})]})}),o(n,{isOpen:l,toggle:()=>t(!l),unmountOnClose:c,children:[e(p,{toggle:()=>t(!l),children:"Modal title"}),e(u,{children:e(v,{type:"textarea",placeholder:"Write something (data should remain in modal if unmountOnClose is set to false)",rows:5})}),e(m,{children:e(i,{color:"primary",onClick:()=>t(!l),outline:!0,children:"Accept"})})]})]})},D=()=>{const[l,t]=s.exports.useState(!1),[c,r]=s.exports.useState(!1),[a,d]=s.exports.useState(!1),[g,h]=s.exports.useState(!1),[b,y]=s.exports.useState(!1);return o("div",{className:"demo-inline-spacing",children:[o("div",{children:[e(i,{color:"primary",outline:!0,onClick:()=>t(!l),children:"Login Form"}),o(n,{isOpen:l,toggle:()=>t(!l),className:"modal-dialog-centered",children:[e(p,{toggle:()=>t(!l),children:"Login Form"}),o(u,{children:[o("div",{className:"mb-2",children:[e(w,{className:"form-label",for:"email",children:"Email:"}),e(v,{type:"email",id:"email",placeholder:"Email Address"})]}),o("div",{className:"mb-2",children:[e(w,{className:"form-label",for:"password",children:"Password:"}),e(v,{type:"password",id:"password",placeholder:"Password"})]})]}),o(m,{children:[e(i,{color:"primary",onClick:()=>t(!l),children:"Login"})," "]})]})]}),o("div",{children:[e(i,{color:"primary",outline:!0,onClick:()=>h(!g),children:"Scrolling Long Content"}),o(n,{isOpen:g,toggle:()=>h(!g),className:"modal-dialog-centered",children:[e(p,{toggle:()=>h(!g),children:"Modal Title"}),o(u,{children:[e("p",{children:"Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah."})]}),e(m,{children:e(i,{color:"primary",onClick:()=>h(!g),children:"Accept"})})]})]}),o("div",{children:[e(i,{color:"primary",outline:!0,onClick:()=>y(!b),children:"Scrolling Content Inside Modal"}),o(n,{scrollable:!0,isOpen:b,toggle:()=>y(!b),children:[e(p,{toggle:()=>y(!b),children:"Modal Title"}),o(u,{children:[e("p",{children:"Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry."}),e("p",{children:"Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder."}),e("p",{children:"Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice."}),e("p",{children:"Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot cake souffl\xE9 halvah."})]}),e(m,{children:e(i,{color:"primary",onClick:()=>y(!b),children:"Accept"})})]})]}),o("div",{children:[e(i,{color:"primary",outline:!0,onClick:()=>r(!c),children:"Toggle Between Modals"}),o(n,{isOpen:c,toggle:()=>r(!c),className:"modal-dialog-centered",children:[e(p,{toggle:()=>r(!c),children:"Modal 1 "}),e(u,{children:"Show a second modal and hide this one with the button below."}),e(m,{children:e(i,{color:"primary",onClick:()=>d(!a),children:"Open second modal"})})]}),o(n,{isOpen:a,toggle:()=>d(!a),className:"modal-dialog-centered",children:[e(p,{toggle:()=>d(!a),children:"Modal 2 "}),e(u,{children:"Hide this modal and show the first with the button below."}),e(m,{children:e(i,{color:"primary",onClick:()=>d(!a),children:"Back to first"})})]})]})]})},T=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'

const ModalBasic = () => {
  const [basicModal, setBasicModal] = useState(false)
  const [centeredModal, setCenteredModal] = useState(false)
  const [disabledModal, setDisabledModal] = useState(false)
  const [disabledAnimation, setDisabledAnimation] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Vertically Centered
        </Button>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Basic Modal</ModalHeader>
          <ModalBody>
            <h5>Check First Paragraph</h5>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy drag\xE9e apple pie. Brownie carrot cake
            candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
            liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className='vertically-centered-modal'>
        <Button color='primary' outline onClick={() => setCenteredModal(!centeredModal)}>
          Launch Modal
        </Button>
        <Modal isOpen={centeredModal} toggle={() => setCenteredModal(!centeredModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setCenteredModal(!centeredModal)}>Vertically Centered</ModalHeader>
          <ModalBody>
            Oat cake ice cream candy chocolate cake chocolate cake cotton candy drag\xE9e apple pie. Brownie carrot cake
            candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
            liquorice.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setCenteredModal(!centeredModal)}>
              Accept
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
      <div className='disabled-backdrop-modal'>
        <React.Fragment>
          <Button color='primary' outline onClick={() => setDisabledModal(!disabledModal)}>
            Disabled Backdrop
          </Button>
          <Modal
            isOpen={disabledModal}
            toggle={() => setDisabledModal(!disabledModal)}
            className='modal-dialog-centered'
            backdrop={false}
          >
            <ModalHeader toggle={() => setDisabledModal(!disabledModal)}>Disabled Backdrop</ModalHeader>
            <ModalBody>
              Candy oat cake topping topping chocolate cake. Icing pudding jelly beans I love chocolate carrot cake
              wafer candy canes. Biscuit croissant fruitcake bonbon souffl\xE9.
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={() => setDisabledModal(!disabledModal)}>
                Accept
              </Button>{' '}
            </ModalFooter>
          </Modal>
        </React.Fragment>
      </div>
      <div className='disabled-animation-modal'>
        <Button color='primary' outline onClick={() => setDisabledAnimation(!disabledAnimation)}>
          Disabled Animation
        </Button>
        <Modal
          isOpen={disabledAnimation}
          toggle={() => setDisabledAnimation(!disabledAnimation)}
          className='modal-dialog-centered'
          fade={false}
        >
          <ModalHeader toggle={() => setDisabledAnimation(!disabledAnimation)}>Disabled Fade</ModalHeader>
          <ModalBody>
            Chocolate bar jelly drag\xE9e cupcake chocolate bar I love donut liquorice. Powder I love marzipan donut candy
            canes jelly-o. Drag\xE9e liquorice apple pie candy biscuit danish lemon drops sugar plum.
            <Alert className='mt-1' color='success'>
              <div className='alert-body'>Well done! You successfully read this important alert message.</div>
            </Alert>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setDisabledAnimation(!disabledAnimation)}>
              Accept
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ModalBasic
  `})}),A=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalConfig = [
  {
    id: 1,
    title: 'Primary',
    modalColor: 'modal-primary',
    btnColor: 'primary'
  },
  {
    id: 2,
    title: 'Secondary',
    modalColor: 'modal-secondary',
    btnColor: 'secondary'
  },
  {
    id: 3,
    title: 'Success',
    modalColor: 'modal-success',
    btnColor: 'success'
  },
 {
    id: 4,
    title: 'Danger',
    modalColor: 'modal-danger',
    btnColor: 'danger'
  },
  {
    id: 5,
    title: 'Warning',
    modalColor: 'modal-warning',
    btnColor: 'warning'
  },
  {
    id: 6,
    title: 'Info',
    modalColor: 'modal-info',
    btnColor: 'info'
  },
  {
    id: 7,
    title: 'Dark',
    modalColor: 'modal-dark',
    btnColor: 'dark'
  }
]

const ModalTheme = () => {
  const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  const renderModal = ModalConfig.map(item => {
    return (
      <div className={'theme-{item.modalColor}'} key={item.id}>
        <Button color={item.btnColor} onClick={() => toggleModal(item.id)} key={item.title} outline>
          {item.title}
        </Button>
        <Modal
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className='modal-dialog-centered'
          modalClassName={item.modalColor}
          key={item.id}
        >
          <ModalHeader toggle={() => toggleModal(item.id)}>{item.title}</ModalHeader>
          <ModalBody>
            Tart lemon drops macaroon oat cake chocolate toffee chocolate bar icing. Pudding jelly beans carrot cake
            pastry gummies cheesecake lollipop. I love cookie lollipop cake I love sweet gummi bears cupcake dessert.
          </ModalBody>
          <ModalFooter>
            <Button color={item.btnColor} onClick={() => toggleModal(item.id)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default ModalTheme
`})}),P=e("pre",{children:e("code",{className:"language-jsx",children:`
import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalConfig = [
  {
    id: 1,
    btnTitle: 'Extra Small',
    modalTitle: 'Extra Small modal',
    modalClass: 'modal-xs'
  },
  {
    id: 2,
    btnTitle: 'Small Modal',
    modalTitle: 'Small Modal',
    modalClass: 'modal-sm'
  },
  {
    id: 3,
    btnTitle: 'Default Modal',
    modalTitle: 'Default Modal',
    modalClass: ''
  },
  {
    id: 4,
    btnTitle: 'Large Modal',
    modalTitle: 'Large Modal',
    modalClass: 'modal-lg'
  },
  {
    id: 5,
    btnTitle: 'Extra Large Modal',
    modalTitle: 'Extra Large Modal',
    modalClass: 'modal-xl'
  },
  {
    id: 6,
    btnTitle: 'Fullscreen Modal',
    modalTitle: 'Fullscreen Modal',
    modalClass: 'modal-fullscreen'
  }
]

const ModalSizes = () => {
  const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  const renderModal = ModalConfig.map(item => {
    return (
      <Fragment key={item.id}>
        <div>
          <Button color='primary' onClick={() => toggleModal(item.id)} key={item.title} outline>
            {item.btnTitle}
          </Button>
        </div>
        <Modal
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={'modal-dialog-centered {item.modalClass}'}
          key={item.id}
        >
          <ModalHeader toggle={() => toggleModal(item.id)}>
            {item.modalTitle}
            {item.title}
          </ModalHeader>
          <ModalBody>
            {item.id === 6 ? (
              <Fragment>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas
                  eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue
                  laoreet rutrum faucibus dolor auctor.
                </p>
                <p>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
              </Fragment>
            ) : (
              'Halvah powder wafer. Chupa chups pie topping carrot cake cake. Tootsie roll sesame snaps jelly-o marshmallow
            marshmallow jelly jujubes candy. Chupa chups cheesecake gingerbread chupa chups cake candy canes sweet roll.'
            )}
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => toggleModal(item.id)} outline>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return <div className='demo-inline-spacing'>{renderModal}</div>
}
export default ModalSizes
`})}),H=e("pre",{children:e("code",{className:"language-jsx",children:`
import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const ModalEvents = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [modalClosed, setModalClosed] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='on-opened-modal'>
        <Button color='primary' outline onClick={() => setModalOpened(!modalOpened)}>
          On Opened
        </Button>
        <Modal
          isOpen={modalOpened}
          onOpened={() => alert('On Opened Event Fired')}
          toggle={() => setModalOpened(!modalOpened)}
          className='modal-dialog-centered'
        >
          <ModalHeader toggle={() => setModalOpened(!modalOpened)}>Basic Modal</ModalHeader>
          <ModalBody>
            Donut chocolate halvah I love caramels. Dessert croissant I love icing I love drag\xE9e candy canes chocolate
            bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setModalOpened(!modalOpened)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div className='on-closed-modal'>
        <Button color='primary' outline onClick={() => setModalClosed(!modalClosed)}>
          On Closed
        </Button>
        <Modal
          isOpen={modalClosed}
          onClosed={() => alert('On Closed Event Fired')}
          toggle={() => setModalClosed(!modalClosed)}
          className='modal-dialog-centered'
        >
          <ModalHeader toggle={() => setModalClosed(!modalClosed)}>Basic Modal</ModalHeader>
          <ModalBody>
            Donut chocolate halvah I love caramels. Dessert croissant I love icing I love drag\xE9e candy canes chocolate
            bar. Oat cake lollipop I love cake chocolate bar jelly sweet. I love cotton candy oat cake jelly.
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setModalClosed(!modalClosed)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}

export default ModalEvents`})}),z=e("pre",{children:e("code",{className:"language-jsx",children:`
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap'

const ModalForm = () => {
  const [formModal, setFormModal] = useState(false)
  const [firstModal, setFirstModal] = useState(false)
  const [secondModal, setSecondModal] = useState(false)
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div>
        <Button color='primary' outline onClick={() => setFormModal(!formModal)}>
          Login Form
        </Button>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFormModal(!formModal)}>Login Form</ModalHeader>
          <ModalBody>
            <div className='mb-2'>
              <Label className='form-label' for='email'>Email:</Label>
              <Input type='email' id='email' placeholder='Email Address' />
            </div>
            <div className='mb-2'>
              <Label className='form-label' for='password'>Password:</Label>
              <Input type='password' id='password' placeholder='Password' />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setFormModal(!formModal)}>
              Login
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color='primary' outline onClick={() => setScrollModal(!scrollModal)}>
          Scrolling Long Content
        </Button>
        <Modal isOpen={scrollModal} toggle={() => setScrollModal(!scrollModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setScrollModal(!scrollModal)}>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
              pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setScrollModal(!scrollModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color='primary' outline onClick={() => setScrollInnerModal(!scrollInnerModal)}>
          Scrolling Content Inside Modal
        </Button>
        <Modal scrollable isOpen={scrollInnerModal} toggle={() => setScrollInnerModal(!scrollInnerModal)}>
          <ModalHeader toggle={() => setScrollInnerModal(!scrollInnerModal)}>Modal Title</ModalHeader>
          <ModalBody>
            <p>
              Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder
              pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah. Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake
              fruitcake powder pudding pastry.
            </p>
            <p>
              Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi
              bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.
            </p>
            <p>
              Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing drag\xE9e
              dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate
              marzipan muffin pie liquorice.
            </p>
            <p>
              Powder cookie jelly beans sugar plum ice cream. Candy canes I love powder sugar plum tiramisu. Liquorice
              pudding chocolate cake cupcake topping biscuit. Lemon drops apple pie sesame snaps tootsie roll carrot
              cake souffl\xE9 halvah.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setScrollInnerModal(!scrollInnerModal)}>
              Accept
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <div>
        <Button color='primary' outline onClick={() => setFirstModal(!firstModal)}>
          Toggle Between Modals
        </Button>
        <Modal isOpen={firstModal} toggle={() => setFirstModal(!firstModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setFirstModal(!firstModal)}>Modal 1 </ModalHeader>
          <ModalBody>Show a second modal and hide this one with the button below.</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setSecondModal(!secondModal)}>
              Open second modal
            </Button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={secondModal} toggle={() => setSecondModal(!secondModal)} className='modal-dialog-centered'>
          <ModalHeader toggle={() => setSecondModal(!secondModal)}>Modal 2 </ModalHeader>
          <ModalBody>Hide this modal and show the first with the button below.</ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setSecondModal(!secondModal)}>
              Back to first
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ModalForm
`})}),V=e("pre",{children:e("code",{className:"language-jsx",children:`
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form, Row, Col } from 'reactstrap'

const ModalDestructuring = () => {
  const [visibility, setVisibility] = useState(false)
  const [unmountOnClose, setUnmountOnClose] = useState(true)

  const changeUnmountOnClose = e => {
    let value = e.target.value
    setUnmountOnClose(JSON.parse(value))
  }

  return (
    <Fragment>
      <Form onSubmit={e => e.preventDefault()}>
        <Row>
          <Col className='mb-sm-0 mb-1' sm='6' md='4' lg='2'>
            <Input type='select' name='unmountOnClose' id='unmountOnClose' onChange={e => changeUnmountOnClose(e)}>
              <option value='true'>true</option>
              <option value='false'>false</option>
            </Input>
          </Col>
          <Col sm='6' md='4' lg='2'>
            <Button color='success' onClick={() => setVisibility(!visibility)} outline>
              Launch Modal
            </Button>
          </Col>
        </Row>
      </Form>
      <Modal isOpen={visibility} toggle={() => setVisibility(!visibility)} unmountOnClose={unmountOnClose}>
        <ModalHeader toggle={() => setVisibility(!visibility)}>Modal title</ModalHeader>
        <ModalBody>
          <Input
            type='textarea'
            placeholder='Write something (data should remain in modal if unmountOnClose is set to false)'
            rows={5}
          />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={() => setVisibility(!visibility)} outline>
            Accept
          </Button>
        </ModalFooter>
      </Modal>
    </Fragment>
  )
}
export default ModalDestructuring
        `})}),ne=()=>(s.exports.useEffect(()=>{B.highlightAll()},[]),o(s.exports.Fragment,{children:[e(I,{title:"Modal",data:[{title:"Components"},{title:"Modal"}]}),e(f,{children:e(k,{sm:"12",children:o(M,{title:"Modal Basic",code:T,children:[o(C,{className:"mb-0",children:["Use ",e("code",{children:"Modal"}),", ",e("code",{children:"ModalBody"})," and ",e("code",{children:"ModalFooter"})," tags to create a Modal with reactstrap."]}),e(x,{})]})})}),o(f,{children:[e(k,{sm:"12",children:o(M,{title:"Modal Themes",code:A,children:[o(C,{className:"mb-0",children:["Use class ",e("code",{children:".modal-[color]"})," with your ",e("code",{children:".modal"})," to change theme of modal"]}),e(S,{})]})}),e(k,{sm:"12",children:o(M,{title:"Modal Sizes",code:P,children:[o(C,{className:"mb-0",children:["Use class ",e("code",{children:".modal-[xs/sm/lg/xl]"})," with ",e("code",{children:"ModalHeader"})," to change modal Size."]}),e(F,{})]})}),e(k,{sm:"12",children:o(M,{title:"Modal Events",code:H,children:[o(C,{className:"mb-0",children:["Use props ",e("code",{children:"onClosed / onOpened"})," for modal events."]}),e(N,{})]})})]}),o(f,{children:[e(k,{sm:"12",children:e(M,{title:"Form & Scrolling Modals",code:z,children:e(D,{})})}),e(k,{sm:"12",children:o(M,{title:"Unmount On Close",code:V,children:[e(C,{children:"Write something (data should remain in modal if unmountOnClose is set to false)."}),e(E,{})]})})]})]}));export{ne as default};
