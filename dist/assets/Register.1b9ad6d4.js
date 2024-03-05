import{r as F,Z as L,S as w,k as e,J as r,P as f,B as o,cf as P,a9 as G}from"./index.dff4e684.js";import{u as S,a as j,I as p,M as E}from"./App.37a2596a.js";import{u as T,C as m}from"./index.esm.650ebc72.js";import{I as D}from"./index.aaf1b374.js";import{R as I,C as h}from"./Col.96fcbc17.js";import{C as M}from"./CardText.dd9505fe.js";import{C as z}from"./CardTitle.aebc4d98.js";import{F as A}from"./Form.f1a34b24.js";import{F as g}from"./FormFeedback.262b0142.js";import{L as c}from"./Label.138433f0.js";import{i as R,a as B}from"./register-v2-dark.26352da2.js";/* empty css                            */import{F as Z,T as O}from"./twitter.1e1ef9e2.js";import{G as V}from"./github.03ebc23e.js";import"./InputGroupText.9c960290.js";import"./eye.4a9e31d4.js";import"./eye-off.1d07efd8.js";const H={email:"",terms:!1,username:"",password:""},me=()=>{const y=F.exports.useContext(L),{skin:b}=S(),v=w(),N=j(),{control:n,setError:d,handleSubmit:x,formState:{errors:t}}=T({defaultValues:H});return e("div",{className:"auth-wrapper auth-cover",children:r(I,{className:"auth-inner m-0",children:[r(f,{className:"brand-logo",to:"/",onClick:a=>a.preventDefault(),children:[r("svg",{viewBox:"0 0 139 95",version:"1.1",height:"28",children:[r("defs",{children:[r("linearGradient",{x1:"100%",y1:"10.5120544%",x2:"50%",y2:"89.4879456%",id:"linearGradient-1",children:[e("stop",{stopColor:"#000000",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]}),r("linearGradient",{x1:"64.0437835%",y1:"46.3276743%",x2:"37.373316%",y2:"100%",id:"linearGradient-2",children:[e("stop",{stopColor:"#EEEEEE",stopOpacity:"0",offset:"0%"}),e("stop",{stopColor:"#FFFFFF",offset:"100%"})]})]}),e("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:e("g",{id:"Artboard",transform:"translate(-400.000000, -178.000000)",children:r("g",{id:"Group",transform:"translate(400.000000, 178.000000)",children:[e("path",{d:"M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",id:"Path",className:"text-primary",style:{fill:"currentColor"}}),e("path",{d:"M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",id:"Path",fill:"url(#linearGradient-1)",opacity:"0.2"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.049999997",points:"69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"}),e("polygon",{id:"Path-2",fill:"#000000",opacity:"0.099999994",points:"69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"}),e("polygon",{id:"Path-3",fill:"url(#linearGradient-2)",opacity:"0.099999994",points:"101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"})]})})})]}),e("h2",{className:"brand-text text-primary ms-1",children:"Vuexy"})]}),e(h,{className:"d-none d-lg-flex align-items-center p-5",lg:"8",sm:"12",children:e("div",{className:"w-100 d-lg-flex align-items-center justify-content-center px-5",children:e("img",{className:"img-fluid",src:b==="dark"?R:B,alt:"Login Cover"})})}),e(h,{className:"d-flex align-items-center auth-bg px-2 p-lg-5",lg:"4",sm:"12",children:r(h,{className:"px-xl-2 mx-auto",sm:"8",md:"6",lg:"12",children:[e(z,{tag:"h2",className:"fw-bold mb-1",children:"Adventure starts here \u{1F680}"}),e(M,{className:"mb-2",children:"Make your app management easy and fun!"}),r(A,{action:"/",className:"auth-register-form mt-2",onSubmit:x(a=>{const u={...a};if(delete u.terms,Object.values(u).every(i=>i.length>0)&&a.terms===!0){const{username:i,email:C,password:k}=a;P.register({username:i,email:C,password:k}).then(s=>{if(s.data.error)for(const l in s.data.error)s.data.error[l]!==null&&d(l,{type:"manual",message:s.data.error[l]});else{const l={...s.data.user,accessToken:s.data.accessToken};y.update(s.data.user.ability),N(G(l)),v("/")}}).catch(s=>console.log(s))}else for(const i in a)a[i].length===0&&d(i,{type:"manual",message:`Please enter a valid ${i}`}),i==="terms"&&a.terms===!1&&d("terms",{type:"manual"})}),children:[r("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"register-username",children:"Username"}),e(m,{id:"username",name:"username",control:n,render:({field:a})=>e(p,{autoFocus:!0,placeholder:"johndoe",invalid:t.username&&!0,...a})}),t.username?e(g,{children:t.username.message}):null]}),r("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"register-email",children:"Email"}),e(m,{id:"email",name:"email",control:n,render:({field:a})=>e(p,{type:"email",placeholder:"john@example.com",invalid:t.email&&!0,...a})}),t.email?e(g,{children:t.email.message}):null]}),r("div",{className:"mb-1",children:[e(c,{className:"form-label",for:"register-password",children:"Password"}),e(m,{id:"password",name:"password",control:n,render:({field:a})=>e(D,{className:"input-group-merge",invalid:t.password&&!0,...a})})]}),r("div",{className:"form-check mb-1",children:[e(m,{name:"terms",control:n,render:({field:a})=>e(p,{...a,id:"terms",type:"checkbox",checked:a.value,invalid:t.terms&&!0})}),r(c,{className:"form-check-label",for:"terms",children:["I agree to",e("a",{className:"ms-25",href:"/",onClick:a=>a.preventDefault(),children:"privacy policy & terms"})]})]}),e(o,{type:"submit",block:!0,color:"primary",children:"Sign up"})]}),r("p",{className:"text-center mt-2",children:[e("span",{className:"me-25",children:"Already have an account?"}),e(f,{to:"/login",children:e("span",{children:"Sign in instead"})})]}),e("div",{className:"divider my-2",children:e("div",{className:"divider-text",children:"or"})}),r("div",{className:"auth-footer-btn d-flex justify-content-center",children:[e(o,{color:"facebook",children:e(Z,{size:14})}),e(o,{color:"twitter",children:e(O,{size:14})}),e(o,{color:"google",children:e(E,{size:14})}),e(o,{className:"me-0",color:"github",children:e(V,{size:14})})]})]})})]})})};export{me as default};