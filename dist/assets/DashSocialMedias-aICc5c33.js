import{d as c,c as d,e as f,j as e,L as h,r as p}from"./index-FFSDp5PZ.js";import{D as b}from"./Drawer-B5C_NWhF.js";import{T as g,a as j}from"./Td-O5PRrgTN.js";import{u as w}from"./useFetch-D7lN2tdT.js";import{f as k}from"./fetch-BYPxA0rK.js";import"./url-BdNy_9Mu.js";const v=()=>{const{data:r,isLoading:a,error:t,refetch:i}=w("social-medias",null,""),l=c(),{token:o}=d(),{showSnackbar:n}=f();if(a&&t)return e.jsx(h,{});const m=s=>{l("/admin/redes-sociales/editar",{state:{socialmedia:s}})},x=s=>{window.open(s,"_blank")},u=async s=>{if(!o){n("Error de autenticación.","error"),l("/admin/login");return}if(window.confirm("¿Estás seguro de que quieres eliminar esta membresía?"))try{await k("social-medias",s,o),n("Red social eliminada correctamente.","success"),i()}catch{n("Ocurrió un error al borrar los datos.","error")}};return e.jsxs("div",{className:"rounded-custom border-border dark:border-border-dark border-2 overflow-hidden",children:[e.jsxs(g,{children:[e.jsx("span",{className:"w-3/12",children:"Red Social"}),e.jsx("span",{className:"w-7/12",children:"Vínculo"}),e.jsx("span",{className:"w-2/12 text-center",children:"Acciones"})]}),e.jsx("div",{className:"flex flex-col",children:r==null?void 0:r.data.map(s=>e.jsxs(j,{children:[e.jsxs("div",{className:"w-3/12 flex flex-row space-x-2 items-center",children:[e.jsx("img",{src:`/public/assets/icons/white/${s.type}.png`,alt:"",className:"h-5"}),e.jsx("span",{children:s.label})]}),e.jsx("button",{onClick:()=>x(s.url),className:"w-7/12 text-selected-dark hover:text-primary text-start",children:s.url}),e.jsxs("div",{className:"w-2/12 flex flex-row space-x-2 items-center justify-center",children:[e.jsx("button",{onClick:()=>m(s),className:"w-1/2 bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Editar"}),e.jsx("button",{onClick:()=>u(s.id),className:"w-1/2 bg-red-600 hover:bg-red-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Eliminar"})]})]},s.id))})]})},T=()=>{const{token:r}=d(),a=c();p.useEffect(()=>{r||a("/admin/login")},[r,navigator]);const t=()=>{a("/admin/redes-sociales/agregar")};return e.jsxs("div",{className:"h-screen flex flex-col lg:flex-row",children:[e.jsx(b,{page:6}),e.jsxs("div",{className:"flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16",children:[e.jsx("div",{className:"w-full flex flex-row justify-between items-start",children:e.jsxs("div",{className:"w-full flex flex-row justify-between items-start",children:[e.jsx("span",{className:"font-normal",children:"Listado de redes sociales"}),e.jsx("button",{onClick:t,className:"w-auto h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Agregar +"})]})}),e.jsx(v,{})]})]})};export{T as default};
