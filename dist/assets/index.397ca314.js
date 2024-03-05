import{r as i,E as X,bX as W,k as e,J as c}from"./index.dff4e684.js";import{B as G}from"./index.8bb87258.js";import{R as j,C as f}from"./Col.96fcbc17.js";import{s as K,a as U,d as L}from"./data.815bfe97.js";import{R as I}from"./react-paginate.6159ddb0.js";import{Q as q}from"./index.es.0d4ebcce.js";import{C as B}from"./Card.514988a9.js";import{C as $}from"./CardHeader.5294cf1e.js";import{C as A}from"./CardTitle.aebc4d98.js";import{a as Z,I as P}from"./App.37a2596a.js";import{L as b}from"./Label.138433f0.js";import{C as M}from"./chevron-down.9c58d19a.js";import{F as ee}from"./index.6984882e.js";import{C as te}from"./CardBody.8c73518d.js";/* empty css                  *//* empty css                                  */import"./UncontrolledButtonDropdown.eaa9856b.js";import"./grid.789cc8e8.js";import"./calendar.904e65c8.js";import"./more-vertical.b394bd54.js";import"./file-text.4fa0d8cb.js";import"./archive.6e4b402b.js";import"./trash.ae88d3ea.js";import"./emotion-memoize.esm.06f0e458.js";const ae=()=>{const d=Z(),N=X(r=>r.dataTables),[g,w]=i.exports.useState(1),[m,x]=i.exports.useState(7),[h,k]=i.exports.useState("");i.exports.useEffect(()=>{d(W({page:g,perPage:m,q:h}))},[d]);const T=r=>{k(r.target.value),d(W({page:g,perPage:m,q:r.target.value}))},R=r=>{d(W({page:r.selected+1,perPage:m,q:h})),w(r.selected+1)},C=r=>{d(W({page:g,perPage:parseInt(r.target.value),q:h})),x(parseInt(r.target.value))},F=()=>{const r=Math.ceil(N.total/m);return e(I,{previousLabel:"",nextLabel:"",breakLabel:"...",pageCount:Math.ceil(r)||1,marginPagesDisplayed:2,pageRangeDisplayed:2,activeClassName:"active",forcePage:g!==0?g-1:0,onPageChange:u=>R(u),pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"})},v=()=>{const r={q:h},u=Object.keys(r).some(function(S){return r[S].length>0});return N.data.length>0?N.data:N.data.length===0&&u?[]:N.allData.slice(0,m)};return e(i.exports.Fragment,{children:c(B,{children:[e($,{className:"border-bottom",children:e(A,{tag:"h4",children:"Server Side"})}),c(j,{className:"mx-0 mt-1 mb-50",children:[e(f,{sm:"6",children:c("div",{className:"d-flex align-items-center",children:[e(b,{for:"sort-select",children:"show"}),c(P,{className:"dataTable-select",type:"select",id:"sort-select",value:m,onChange:r=>C(r),children:[e("option",{value:7,children:"7"}),e("option",{value:10,children:"10"}),e("option",{value:25,children:"25"}),e("option",{value:50,children:"50"}),e("option",{value:75,children:"75"}),e("option",{value:100,children:"100"})]}),e(b,{for:"sort-select",children:"entries"})]})}),c(f,{className:"d-flex align-items-center justify-content-sm-end mt-sm-0 mt-1",sm:"6",children:[e(b,{className:"me-1",for:"search-input",children:"Search"}),e(P,{className:"dataTable-filter",type:"text",bsSize:"sm",id:"search-input",value:h,onChange:T})]})]}),e("div",{className:"react-dataTable",children:e(q,{noHeader:!0,pagination:!0,paginationServer:!0,className:"react-dataTable",columns:K,sortIcon:e(M,{size:10}),paginationComponent:F,data:v()})})]})})},re=i.exports.memo(ae),se=()=>{const[d,N]=i.exports.useState(""),[g,w]=i.exports.useState(""),[m,x]=i.exports.useState(""),[h,k]=i.exports.useState(""),[T,R]=i.exports.useState(0),[C,F]=i.exports.useState(""),[v,r]=i.exports.useState(""),[u,S]=i.exports.useState([]),_=s=>R(s.selected),E=()=>g.length||m.length||C.length||h.length||v.length||d.length?u:L,z=()=>e(I,{previousLabel:"",nextLabel:"",forcePage:T,onPageChange:s=>_(s),pageCount:Math.ceil(E().length/7)||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",nextLinkClassName:"page-link",pageLinkClassName:"page-link",breakLinkClassName:"page-link",previousLinkClassName:"page-link",nextClassName:"page-item next-item",previousClassName:"page-item prev-item",containerClassName:"pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"}),H=s=>{const t=s.target.value;let l=[];const p=()=>C.length||m.length||h.length||v.length||d.length?u:L;w(t),t.length&&(l=p().filter(n=>{const a=n.full_name.toLowerCase().startsWith(t.toLowerCase()),o=n.full_name.toLowerCase().includes(t.toLowerCase());return a||(!a&&o?o:null)}),S([...l]),w(t))},Q=s=>{const t=s.target.value;let l=[];const p=()=>g.length||m.length||h.length||v.length||d.length?u:L;F(t),t.length&&(l=p().filter(n=>{const a=n.email.toLowerCase().startsWith(t.toLowerCase()),o=n.email.toLowerCase().includes(t.toLowerCase());return a||(!a&&o?o:null)}),S([...l]),F(t))},V=s=>{const t=s.target.value;let l=[];const p=()=>C.length||g.length||h.length||v.length||d.length?u:L;x(t),t.length&&(l=p().filter(n=>{const a=n.post.toLowerCase().startsWith(t.toLowerCase()),o=n.post.toLowerCase().includes(t.toLowerCase());return a||(!a&&o?o:null)}),S([...l]),x(t))},Y=s=>{const t=s.target.value;let l=[];const p=()=>C.length||g.length||m.length||v.length||d.length?u:L;k(t),t.length&&(l=p().filter(n=>{const a=n.city.toLowerCase().startsWith(t.toLowerCase()),o=n.city.toLowerCase().includes(t.toLowerCase());return a||(!a&&o?o:null)}),S([...l]),k(t))},J=s=>{const t=s.target.value;let l=[];const p=()=>C.length||g.length||m.length||h.length||d.length?u:L;r(t),t.length&&(l=p().filter(n=>{const a=n.salary.toLowerCase().startsWith(t.toLowerCase()),o=n.salary.toLowerCase().includes(t.toLowerCase());return a||(!a&&o?o:null)}),S([...l]),r(t))},O=s=>{const t=[];let l=[];const p=()=>C.length||g.length||m.length||h.length||v.length?u:L;s.map(n=>{const a=new Date(n),o=a.getFullYear();let y=(1+a.getMonth()).toString();y=y.length>1?y:`0${y}`;let D=a.getDate().toString();return D=D.length>1?D:`0${D}`,t.push(`${y}/${D}/${o}`),!0}),N(s),s.length&&(l=p().filter(n=>new Date(n.start_date).getTime()>=new Date(t[0]).getTime()&&new Date(n.start_date).getTime()<=new Date(t[1]).getTime()),S([...l]),N(s))};return e(i.exports.Fragment,{children:c(B,{children:[e($,{className:"border-bottom",children:e(A,{tag:"h4",children:"Advance Search"})}),e(te,{children:c(j,{className:"mt-1 mb-50",children:[c(f,{lg:"4",md:"6",className:"mb-1",children:[e(b,{className:"form-label",for:"name",children:"Name:"}),e(P,{id:"name",placeholder:"Bruce Wayne",value:g,onChange:H})]}),c(f,{lg:"4",md:"6",className:"mb-1",children:[e(b,{className:"form-label",for:"email",children:"Email:"}),e(P,{type:"email",id:"email",placeholder:"Bwayne@email.com",value:C,onChange:Q})]}),c(f,{lg:"4",md:"6",className:"mb-1",children:[e(b,{className:"form-label",for:"post",children:"Post:"}),e(P,{id:"post",placeholder:"Web Designer",value:m,onChange:V})]}),c(f,{lg:"4",md:"6",className:"mb-1",children:[e(b,{className:"form-label",for:"city",children:"City:"}),e(P,{id:"city",placeholder:"San Diego",value:h,onChange:Y})]}),c(f,{lg:"4",md:"6",className:"mb-1",children:[e(b,{className:"form-label",for:"date",children:"Date:"}),e(ee,{className:"form-control",id:"date",value:d,options:{mode:"range",dateFormat:"m/d/Y"},onChange:s=>O(s)})]}),c(f,{lg:"4",md:"6",className:"mb-1",children:[e(b,{className:"form-label",for:"salary",children:"Salary:"}),e(P,{id:"salary",placeholder:"10000",value:v,onChange:J})]})]})}),e("div",{className:"react-dataTable",children:e(q,{noHeader:!0,pagination:!0,columns:U,paginationPerPage:7,className:"react-dataTable",sortIcon:e(M,{size:10}),paginationDefaultPage:T+1,paginationComponent:z,data:E()})})]})})},Te=()=>c(i.exports.Fragment,{children:[e(G,{title:"Datatables Advance",data:[{title:"Datatables"},{title:"Datatables Advance"}]}),c(j,{children:[e(f,{sm:"12",children:e(re,{})}),e(f,{sm:"12",children:e(se,{})})]})]});export{Te as default};
