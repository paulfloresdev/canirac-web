import{c as n,j as e,L as i,f as o,r as x}from"./index-DAe2dFAI.js";import{D as m}from"./Drawer-CgXm7hEk.js";import{T as f,a as h}from"./Td-zuxNaFbd.js";import{b as u}from"./useFetch-DvxQXyKh.js";import{T as l}from"./TabFlag-BFmspH3G.js";import"./fetch-DXQ-Dk4T.js";import"./url-BdNy_9Mu.js";const j=()=>{const{data:a,isLoading:r,error:c}=u("chamber-members",null),t=n();if(r&&c)return e.jsx(i,{});const d=s=>{t("/admin/camara/editar",{state:{member:s}})};return e.jsxs("div",{className:"rounded-custom border-border dark:border-border-dark border-2 overflow-hidden",children:[e.jsxs(f,{children:[e.jsx("span",{className:"w-1/12 text-center",children:"Imagen"}),e.jsx("span",{className:"w-4/12",children:"Nombre"}),e.jsxs("div",{className:"w-3/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Puesto"}),e.jsx(l,{lang:"es"})]}),e.jsxs("div",{className:"w-3/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Puesto"}),e.jsx(l,{lang:"en"})]}),e.jsx("span",{className:"w-1/12 text-center",children:"Acciones"})]}),e.jsx("div",{className:"flex flex-col text-sm",children:a==null?void 0:a.data.map(s=>e.jsxs(h,{children:[e.jsx("div",{className:"w-1/12 flex flex-col items-center",children:s.img_path?e.jsx("img",{src:s.img_path,alt:s.initials,className:"w-10 h-10 object-cover rounded-full bg-body dark:bg-body-dark border-solid"}):e.jsx("div",{className:"w-10 h-10 bg-accent dark:bg-accent-dark border-solid flex items-center justify-center rounded-full",children:e.jsx("span",{className:"font-medium text-primary",children:s.initials})})}),e.jsx("span",{className:"w-4/12",children:s.name}),e.jsx("span",{className:"w-3/12",children:s.role_es}),e.jsx("span",{className:"w-3/12",children:s.role_en}),e.jsx("div",{className:"w-1/12 flex flex-col items-center",children:e.jsx("button",{onClick:()=>d(s),className:"w-full bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto",children:"Editar"})})]},s.id))})]})},y=()=>{const{token:a}=o(),r=n();return x.useEffect(()=>{a||r("/admin/login")},[a,navigator]),e.jsxs("div",{className:"h-screen flex flex-col lg:flex-row",children:[e.jsx(m,{page:4}),e.jsxs("div",{className:"flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16",children:[e.jsx("div",{className:"w-full flex flex-row justify-between items-start",children:e.jsx("span",{className:"font-normal",children:"Miembros de la cámara"})}),e.jsx(j,{})]})]})};export{y as default};
