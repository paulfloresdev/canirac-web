import{r as s,c as b,d as w,j as e}from"./index-FFSDp5PZ.js";import{B as v}from"./url-BdNy_9Mu.js";import{I as m}from"./Input-fkGOEq6T.js";import"./TabFlag-uJRE_99S.js";const S=()=>{const[o,x]=s.useState(""),[l,u]=s.useState(""),[n,c]=s.useState(null),[i,g]=s.useState(null),[r,d]=s.useState(!1),{login:p}=b(),f=w(),h=async j=>{j.preventDefault(),d(!0);try{const t=await fetch(`${v}/api/auth/login`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:o,password:l})});if(t.ok){const a=await t.json();g("Inicio de sesión exitoso"),p(a.token),f("/admin/membresias")}else{const a=await t.json();c(a.message||"Error en la solicitud"),console.error("Error:",a)}}catch(t){c("Error en la conexión con el servidor"),console.error("Fetch error:",t)}finally{d(!1)}};return e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-custom-gradient dark:bg-custom-gradient-dark space-y-12",children:[e.jsx("img",{src:"/public/assets/logo/canirac-dark.png",alt:"Canirac Logo",className:"h-auto w-1/6 object-cover"}),e.jsx("div",{className:"w-1/4 rounded-custom bg-accent dark:bg-accent-dark ",children:e.jsx("div",{className:"w-full flex-1 flex-col px-8 py-12 flex items-center justify-center",children:e.jsxs("form",{onSubmit:h,className:"w-full max-w-sm flex flex-col items-center",children:[e.jsx("div",{className:"text-center",children:e.jsx("span",{className:"text-base md:text-lg lg:text-lg xl:text-lg text-title dark:text-title-dark font-medium",children:"Iniciar sesión"})}),e.jsx("div",{className:"flex flex-col w-full xl:gap-6 gap-8 mt-8",children:e.jsx(m,{type:"text",label:"Email",value:o,setValue:x,regExp:/^[a-zA-Z0-9\.@]*$/,maxLength:128,convertToLowerCase:!0})}),e.jsx("div",{className:"flex flex-col w-full xl:gap-6 gap-8 mt-4",children:e.jsx(m,{type:"password",label:"Contraseña",value:l,setValue:u,regExp:/^[a-zA-Z0-9,\.#_@$%?¿¡!*-]*$/,maxLength:128,showPasswordToggle:!0})}),e.jsx("button",{type:"submit",disabled:r,className:`bg-option dark:bg-option text-background dark:text-background-dark py-2 px-4 rounded-custom font-medium ${r?"opacity-50 cursor-not-allowed":""} mt-12`,children:r?"Cargando...":"Ingresar"}),n&&e.jsx("div",{className:"text-red-500 mt-4",children:n}),i&&e.jsx("div",{className:"text-green-500 mt-4",children:i})]})})})]})};export{S as default};
