import{p as e,k as s,J as i,j as c}from"./index.dff4e684.js";import{C as d}from"./Card.514988a9.js";import{C as p}from"./CardBody.8c73518d.js";const b=({icon:m,color:t,stats:n,renderStats:a,statTitle:o,className:l,statsMargin:r})=>s(d,{children:s(p,{className:l,children:i("div",{className:"d-flex justify-content-between align-items-center",children:[i("div",{children:[a||s("h2",{className:c("fw-bolder",{"mb-0":!r,[r]:r}),children:n}),s("p",{className:"card-text",children:o})]}),s("div",{className:`avatar avatar-stats p-50 m-0 ${t?`bg-light-${t}`:"bg-light-primary"}`,children:s("div",{className:"avatar-content",children:m})})]})})});b.propTypes={stats:e.exports.string,renderStats:e.exports.any,className:e.exports.string,icon:e.exports.element.isRequired,color:e.exports.string.isRequired,statTitle:e.exports.string.isRequired,statsMargin:e.exports.oneOf(["mb-0","mb-25","mb-50","mb-75","mb-1","mb-2","mb-3","mb-4","mb-5"])};export{b as S};
