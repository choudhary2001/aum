import{r as e,J as t,k as r}from"./index.dff4e684.js";import{R as p,C as o}from"./Col.96fcbc17.js";import{D as h}from"./Draft.8c14d27f.js";import{r as i}from"./editor.ac9f656e.js";import{C as a}from"./Card.514988a9.js";import{C as s}from"./CardBody.8c73518d.js";import{C as d}from"./CardHeader.5294cf1e.js";import{C as n}from"./CardTitle.aebc4d98.js";import{E as f}from"./index.4a7b49a1.js";const C=()=>{const[l,c]=e.exports.useState(h.EditorState.createEmpty());return t(a,{children:[r(d,{children:r(n,{tag:"h4",children:"Controlled Editor"})}),r(s,{children:r(i.exports.Editor,{editorState:l,onEditorStateChange:m=>c(m)})})]})},E=()=>t(a,{children:[r(d,{children:r(n,{tag:"h4",children:"Uncontrolled Editor"})}),r(s,{children:r(i.exports.Editor,{})})]}),J=()=>t(e.exports.Fragment,{children:[r(f,{title:"React Draft Wysiwyg",subTitle:"A Wysiwyg Built on ReactJS and DraftJS",link:"https://jpuri.github.io/react-draft-wysiwyg/#/docs"}),t(p,{children:[r(o,{sm:12,children:r(E,{})}),r(o,{sm:12,children:r(C,{})})]})]});export{J as default};