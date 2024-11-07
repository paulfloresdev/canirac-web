import{d as i,c as d,e as f,j as e,L as h,r as p}from"./index-FFSDp5PZ.js";import{D as g}from"./Drawer-B5C_NWhF.js";import{T as j,a as b}from"./Td-O5PRrgTN.js";import{b as w}from"./useFetch-D7lN2tdT.js";import{T as o}from"./TabFlag-uJRE_99S.js";import{f as N}from"./formats-DATMBt-1.js";import{f as k}from"./fetch-BYPxA0rK.js";import"./url-BdNy_9Mu.js";const v=()=>{const{data:r,isLoading:a,error:t,refetch:m}=w("events",null),c=i(),{token:l}=d(),{showSnackbar:n}=f();if(a&&t)return e.jsx(h,{});const x=s=>{c("/admin/eventos/editar",{state:{event:s}})},u=async s=>{if(!l){n("Error de autenticación.","error"),c("/admin/login");return}if(window.confirm("¿Estás seguro de que quieres eliminar este evento?"))try{await k("events",s,l),n("Evento eliminado correctamente.","success"),m()}catch{n("Ocurrió un error al borrar los datos.","error")}};return e.jsxs("div",{className:"rounded-custom border-border dark:border-border-dark border-2 overflow-hidden",children:[e.jsxs(j,{children:[e.jsx("span",{className:"w-1/12",children:"Imagen"}),e.jsxs("div",{className:"w-3/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Titulo"}),e.jsx(o,{lang:"es"})]}),e.jsxs("div",{className:"w-3/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Titulo"}),e.jsx(o,{lang:"en"})]}),e.jsx("span",{className:"w-2/12 text-center",children:"Fecha y hora"}),e.jsx("span",{className:"w-2/12 text-center",children:"Precio"}),e.jsx("span",{className:"w-1/12 text-center",children:"Acciones"})]}),e.jsx("div",{className:"flex flex-col",children:r==null?void 0:r.data.map(s=>e.jsxs(b,{children:[s.img_path?e.jsx("div",{className:"w-1/12 h-24",children:e.jsx("img",{src:s.img_path,alt:s.initials,className:"w-full h-full object-cover bg-body dark:bg-body-dark border-solid rounded-sm"})}):e.jsx("div",{className:"w-1/12 h-24 bg-accent dark:bg-accent-dark border-solid flex items-center justify-center mx-start rounded-sm",children:e.jsx("span",{className:"font-medium text-primary",children:"SN"})}),e.jsx("span",{className:"w-3/12",children:s.title_es}),e.jsx("span",{className:"w-3/12",children:s.title_en}),e.jsx("span",{className:"w-2/12 text-center",children:`${s.date.slice(0,10)} ${s.time}`}),e.jsx("span",{className:"w-2/12 text-center",children:N(s.price)}),e.jsxs("div",{className:"w-1/12 flex flex-col items-center space-y-2",children:[e.jsx("button",{onClick:()=>x(s),className:"w-full bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto",children:"Editar"}),e.jsx("button",{onClick:()=>u(s.id),className:"w-full bg-red-600 hover:bg-red-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Eliminar"})]})]},s.id))})]})},q=()=>{const{token:r}=d(),a=i();p.useEffect(()=>{r||a("/admin/login")},[r,navigator]);const t=()=>{a("/admin/eventos/agregar")};return e.jsxs("div",{className:"h-screen flex flex-col lg:flex-row",children:[e.jsx(g,{page:3}),e.jsxs("div",{className:"flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16",children:[e.jsxs("div",{className:"w-full flex flex-row justify-between items-start",children:[e.jsx("span",{className:"font-normal",children:"Listado de eventos"}),e.jsx("button",{onClick:t,className:"w-auto h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Agregar +"})]}),e.jsx(v,{})]})]})};export{q as default};
