import{u as m,b as d,r as x,j as s,L as p}from"./index-DAe2dFAI.js";import{H as h,F as u}from"./Header-BIa_8Ug5.js";import{u as f}from"./useFetch-DvxQXyKh.js";import{a as g}from"./formats-kQizPpwd.js";import"./fetch-DXQ-Dk4T.js";import"./url-BdNy_9Mu.js";const E=()=>{const{language:o}=m(),{data:e,isLoading:r,error:t,refetch:n}=f("services",null,o),{showSnackbar:c}=d();x.useEffect(()=>{n()},[o]);const l=a=>{navigator.clipboard.writeText(a).then(()=>{c("Copiado al portapapeles","success")}).catch(i=>{console.error("Error al copiar el texto:",i)})};return r&&t?s.jsx(p,{}):s.jsx(s.Fragment,{children:s.jsxs("div",{className:"flex flex-col min-h-screen w-full h-auto bg-background dark:bg-background-dark",children:[s.jsx(h,{page:1,isMutable:!1}),s.jsxs("div",{className:"w-content mx-auto flex-grow mt-20 space-y-4",children:[s.jsx("span",{className:"font-normal",children:"Listado de servicios"}),s.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:e==null?void 0:e.data.map(a=>s.jsxs("div",{className:"flex flex-col space-y-2",children:[s.jsx("img",{src:a.img_path,alt:a.title_es,className:"w-full h-auto object-fill rounded-custom"}),s.jsx("span",{className:"font-normal",children:a.title}),s.jsx("span",{className:"text-sm ",children:a.description}),s.jsxs("span",{children:[s.jsx("span",{className:"font-normal text-sm",children:"📞 Contacto: "}),s.jsx("span",{className:"text-sm",children:a.contact_name}),s.jsx("span",{className:"text-primary text-sm hover:cursor-pointer",onClick:()=>l(a.contact_phone),children:` ${g(a.phone)}`})]})]},a.id))}),s.jsx("div",{className:"h-12"})]}),s.jsx(u,{})]})})};export{E as default};
