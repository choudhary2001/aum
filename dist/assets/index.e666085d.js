import{r as a,J as s,k as t}from"./index.dff4e684.js";import{B as o}from"./index.8bb87258.js";import{Q as r}from"./index.es.0d4ebcce.js";/* empty css                  *//* empty css                                  */import{C as i}from"./chevron-down.9c58d19a.js";import"./App.37a2596a.js";import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./emotion-memoize.esm.06f0e458.js";const n=[{name:"Timestamp",minWidth:"100px",sortable:!0,selector:({issuedDate:e})=>e},{name:"Instance",minWidth:"100px",selector:({instanceType:e})=>e},{name:"Type",minWidth:"100px",selector:({instanceStatus:e})=>e},{name:"Message",minWidth:"100px",selector:({instMessage:e})=>e}],m=[{issuedDate:"21-12-2021",instanceType:"Buy Robot",instanceStatus:"Error",instMessage:"Unable to find stock"},{issuedDate:"25-12-2021",instanceType:"Sell Robot",instanceStatus:"Info",instMessage:"Info sold at price 150.00"}],g=()=>(a.exports.useState("1"),a.exports.useState("1"),s(a.exports.Fragment,{children:[t(o,{title:"Robot",data:[{title:"Robot"}]}),t("div",{className:"bg-white p-2 vh-100",children:t("div",{className:"invoice-list-dataTable react-dataTable",children:t(r,{noHeader:!0,paginationServer:!0,responsive:!0,data:m,columns:n,className:"react-dataTable",sortIcon:t(i,{size:10})})})})]}));export{g as default};
