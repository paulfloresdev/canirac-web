import{d as b,c as g,e as j,j as e,L as v,r as l}from"./index-FFSDp5PZ.js";import{D as N}from"./Drawer-B5C_NWhF.js";import{T as k,a as y}from"./Td-O5PRrgTN.js";import{b as E,u as S}from"./useFetch-D7lN2tdT.js";import{T as x}from"./TabFlag-uJRE_99S.js";import{f as D,a as T}from"./fetch-BYPxA0rK.js";import{I as L}from"./Input-fkGOEq6T.js";import"./url-BdNy_9Mu.js";const I=()=>{const{data:a,isLoading:r,error:t,refetch:n}=E("memberships",null),i=b(),{token:d}=g(),{showSnackbar:c}=j();if(r&&t)return e.jsx(v,{});const m=s=>{i("/admin/membresias/editar",{state:{membership:s}})},o=async s=>{if(!d){c("Error de autenticación.","error"),i("/admin/login");return}if(window.confirm("¿Estás seguro de que quieres eliminar esta membresía?"))try{await D("memberships",s,d),c("Membresía eliminada correctamente.","success"),n()}catch{c("Ocurrió un error al borrar los datos.","error")}};return e.jsxs("div",{className:"rounded-custom border-border dark:border-border-dark border-2 overflow-hidden",children:[e.jsxs(k,{children:[e.jsxs("div",{className:"w-2/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Tamaño"}),e.jsx(x,{lang:"es"})]}),e.jsxs("div",{className:"w-3/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Descripción"}),e.jsx(x,{lang:"es"})]}),e.jsxs("div",{className:"w-2/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Tamaño"}),e.jsx(x,{lang:"en"})]}),e.jsxs("div",{className:"w-3/12 flex flex-row space-x-2 items-center",children:[e.jsx("span",{children:"Descripción"}),e.jsx(x,{lang:"en"})]}),e.jsx("span",{className:"w-2/12 text-center",children:"Acciones"})]}),e.jsx("div",{className:"flex flex-col",children:a==null?void 0:a.data.map(s=>e.jsxs(y,{children:[e.jsx("span",{className:"w-2/12",children:s.size_es}),e.jsx("span",{className:"w-3/12",children:s.description_es}),e.jsx("span",{className:"w-2/12",children:s.size_en}),e.jsx("span",{className:"w-3/12",children:s.description_en}),e.jsxs("div",{className:"w-2/12 flex flex-row space-x-2 justify-center",children:[e.jsx("button",{onClick:()=>m(s),className:"w-1/2 bg-blue-600 hover:bg-blue-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Editar"}),e.jsx("button",{onClick:()=>o(s.id),className:"w-1/2 bg-red-600 hover:bg-red-700 text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Eliminar"})]})]}))})]})},q=()=>{const{token:a}=g(),r=b(),{data:t}=S("labels",null,""),[n,i]=l.useState(""),[d,c]=l.useState(!1),[m,o]=l.useState(!1),{showSnackbar:s}=j();l.useEffect(()=>{a||r("/admin/login")},[a,navigator]),l.useEffect(()=>{t&&t.data&&i(t.data[0].text)},[t]);const u=()=>{r("/admin/membresias/agregar")},f=async w=>{w.preventDefault();const h=n==="";if(c(h),!h){if(!a){s("Error de autenticación.","error"),r("/admin/login");return}o(!0);try{const p=JSON.stringify({text:n});await T("labels",1,p,a),s("Cobertura del seguro actualizada correctamente.","success"),r("/admin/membresias")}catch{s("Ocurrió un error al guardar los datos.","error")}finally{o(!1)}}};return e.jsxs("div",{className:"h-screen flex flex-col lg:flex-row",children:[e.jsx(N,{page:1}),e.jsxs("div",{className:"flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16",children:[e.jsxs("div",{className:"w-full flex flex-row justify-between items-start",children:[e.jsx("span",{className:"font-normal",children:"Listado de tarifas de afiliación"}),e.jsx("button",{onClick:u,className:"w-auto h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:"Agregar +"})]}),e.jsx("form",{onSubmit:f,children:e.jsxs("div",{className:"flex flex-col space-y-1",children:[e.jsx("span",{className:"mb-1 text-selected dark:text-selected-dark",children:"Cobertura del seguro"}),e.jsxs("div",{className:"w-1/4 flex flex-row space-x-2 items-start",children:[e.jsx("div",{className:"w-2/3",children:e.jsx(L,{type:"text",label:"",value:n,setValue:i,regExp:/^[a-zA-Z0-9.,$ ]*$/,maxLength:128,noLabel:!0,status:d})}),e.jsx("button",{type:"submit",className:"w-1/3 h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium",children:m?"Guardando...":"Guardar"})]})]})}),e.jsx(I,{})]})]})};export{q as default};
