import{f as S,c as j,b as k,r as a,j as e}from"./index-DAe2dFAI.js";import{C as w}from"./Combobox-BZqsScko.js";import{D as N}from"./Drawer-CgXm7hEk.js";import{I as E}from"./Input-DOWE0UR8.js";import{b as I}from"./fetch-DXQ-Dk4T.js";import"./TabFlag-BFmspH3G.js";import"./url-BdNy_9Mu.js";const G=()=>{const{token:t}=S(),r=j(),{showSnackbar:l}=k(),[d,c]=a.useState(!1),[s,u]=a.useState(""),[m,f]=a.useState(""),[o,p]=a.useState(""),[i,x]=a.useState(!1),b=[{value:"facebook",label:"Facebook"},{value:"instagram",label:"Instagram"},{value:"x",label:"X"},{value:"youtube",label:"Youtube"}];a.useEffect(()=>{t||r("/admin/login")},[t,r]),a.useEffect(()=>{f(s.charAt(0).toUpperCase()+s.slice(1))},[s]);const g=async h=>{h.preventDefault();const n=o==="";if(x(n),!n){if(!t){l("Error de autenticación.","error"),r("/admin/login");return}c(!0);const v=JSON.stringify({type:s,label:m,url:o});try{await I("social-medias",v,t),l("Red social agregada correctamente.","success"),r("/admin/redes-sociales")}catch(y){l(`Ocurrió un error al guardar los datos. ${y}`,"error")}finally{c(!1)}}};return e.jsxs("div",{className:"h-screen flex flex-col lg:flex-row",children:[e.jsx(N,{page:6}),e.jsx("div",{className:"flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16",children:e.jsx("form",{onSubmit:g,children:e.jsxs("div",{className:"bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col space-y-4",children:[e.jsx("span",{className:"font-normal",children:"Agregar red social"}),e.jsxs("div",{className:"w-full flex flex-row space-x-2 items-end",children:[e.jsx("div",{className:"w-2/12",children:e.jsx(w,{label:"Red social",options:b,selectedOption:s,setSelectedOption:u,status:i})}),e.jsx("div",{className:"w-8/12",children:e.jsx(E,{type:"text",label:"Vínculo",value:o,setValue:p,maxLength:512,status:i,width:"w-full"})}),e.jsx("button",{type:"submit",className:"w-2/12 h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto",children:d?"Guardando...":"Guardar"})]})]})})})]})};export{G as default};
