import{f as z,c as F,r as e,b as M,j as t}from"./index-DAe2dFAI.js";import{u as P}from"./useFetch-DvxQXyKh.js";import{D as R}from"./Drawer-CgXm7hEk.js";import{I as s}from"./Input-DOWE0UR8.js";import{a as T}from"./fetch-DXQ-Dk4T.js";import"./TabFlag-BFmspH3G.js";import"./url-BdNy_9Mu.js";const Y=()=>{const{token:o}=z(),f=F(),{data:l,refetch:k}=P("contacts",null,""),[n,m]=e.useState(""),[i,x]=e.useState(""),[r,p]=e.useState(""),[c,h]=e.useState(""),[d,g]=e.useState(""),[N,E]=e.useState(!1),[D,L]=e.useState(!1),[I,A]=e.useState(!1),[C,G]=e.useState(!1),[J,O]=e.useState(!1),[U,b]=e.useState(!1),{showSnackbar:u}=M();e.useEffect(()=>{o||f("/admin/login")},[o,navigator]),e.useEffect(()=>{if(l&&l.data){const a=l.data[0];m(a.phone),x(a.email),p(a.address),h(a.lat),g(a.long)}},[l]);const $=async a=>{a.preventDefault();const v=n.length<10,w=i==="",j=r==="",S=c==="",y=d==="";if(E(v),L(w),A(j),G(S),O(y),!v&&!w&&!j&&!S&&!y){if(!o){u("Error de autenticación.","error"),f("admin/login");return}b(!0);try{const V=JSON.stringify({phone:n,email:i,address:r,lat:c,long:d});await T("contacts",1,V,o),u("Datos de contacto actualizados correctamente.","success"),k()}catch{u("Ocurrió un error al guardar los datos.","error")}finally{b(!1)}}};return t.jsxs("div",{className:"h-screen flex flex-col lg:flex-row",children:[t.jsx(R,{page:5}),t.jsx("div",{className:"flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16",children:t.jsx("form",{onSubmit:$,children:t.jsxs("div",{className:"bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-4",children:[t.jsx("span",{className:"font-normal",children:"Datos de contacto"}),t.jsxs("div",{className:"w-full flex flex-row space-x-2",children:[t.jsx(s,{type:"phone",label:"Teléfono",value:n,setValue:m,maxLength:13,status:N,width:"w-1/6"}),t.jsx(s,{type:"email",label:"Correo electrónico",value:i,setValue:x,maxLength:256,status:D,width:"w-1/4"})]}),t.jsx("div",{className:"w-full flex flex-row space-x-2",children:t.jsx(s,{type:"address",label:"Domicilio",value:r,setValue:p,maxLength:512,status:I,width:"w-full"})}),t.jsxs("div",{className:"w-full flex flex-row space-x-2",children:[t.jsx(s,{type:"text",label:"Latitud",value:c,setValue:h,regExp:/^[0-9. ]*$/,status:C,width:"w-1/3"}),t.jsx(s,{type:"text",label:"Longitud",value:d,setValue:g,regExp:/^[0-9. ]*$/,status:J,width:"w-1/3"})]}),t.jsx("button",{type:"submit",className:"w-full h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto",children:U?"Guardando...":"Guardar"})]})})})]})};export{Y as default};
