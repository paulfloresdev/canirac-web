import{r as v,j as e}from"./index-FFSDp5PZ.js";import{T as w}from"./TabFlag-uJRE_99S.js";const I=({label:a,type:r,value:c,setValue:o,regExp:d,className:x,maxLength:b,status:f,convertToUpperCase:u,convertToLowerCase:m,showPasswordToggle:l=!1,noLabel:p,width:k,flag:i})=>{const[n,h]=v.useState(!1),g=t=>{let s=t.target.value;u?s=s.toUpperCase():m&&(s=s.toLowerCase()),d?d.test(s)&&o(s):o(s)},j=()=>{h(t=>!t)};return e.jsx("div",{className:k,children:e.jsxs("div",{className:"flex flex-col flex-1 relative",children:[p?e.jsx("div",{}):i?e.jsxs("div",{className:"flex flex-row space-x-2 items-center",children:[e.jsx("span",{className:"mb-1 text-selected dark:text-selected-dark",children:a}),e.jsx(w,{lang:i})]}):e.jsx("span",{className:"mb-1 text-selected dark:text-selected-dark",children:a}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{value:c,onChange:g,type:l&&r==="password"?n?"text":"password":r,maxLength:b,className:`w-full ${f?"border-red-700 focus:border-red-700":"border-border dark:border-border-dark focus:border-focusborder dark:focus:border-focusborder-dark"} bg-background dark:bg-background-dark h-8 border-solid border-2 rounded-lg py-4 px-2 focus:outline-none ${x}`}),l&&r==="password"&&e.jsx("button",{type:"button",onClick:j,className:"absolute inset-y-0 right-2 flex items-center text-sm font-light text-option dark:text-option-dark mx-1",children:n?"Ocultar":"Mostrar"})]})]})})};export{I};
