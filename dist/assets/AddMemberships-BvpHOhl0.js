import{c as J,d as K,r as t,e as Q,j as e}from"./index-FFSDp5PZ.js";import{D as U}from"./Drawer-B5C_NWhF.js";import{b as W}from"./fetch-BYPxA0rK.js";import{I as s}from"./Input-fkGOEq6T.js";import"./url-BdNy_9Mu.js";import"./TabFlag-uJRE_99S.js";const se=()=>{const{token:i}=J(),n=K(),[l,V]=t.useState(""),[r,j]=t.useState(""),[o,y]=t.useState(""),[c,E]=t.useState(""),[d,k]=t.useState(""),[u,D]=t.useState(""),[p,N]=t.useState(""),[L,z]=t.useState(!1),[_,A]=t.useState(!1),[I,P]=t.useState(!1),[$,G]=t.useState(!1),[M,T]=t.useState(!1),[C,F]=t.useState(!1),[O,R]=t.useState(!1),[q,x]=t.useState(!1),{showSnackbar:m}=Q();if(t.useEffect(()=>{i||n("/admin/login")},[i,n]),!i)return null;const B=async H=>{H.preventDefault();const f=l==="",g=r==="",h=o==="",b=c==="",v=d==="",w=u==="",S=p==="";if(z(f),A(g),P(h),G(b),T(v),F(w),R(S),!f&&!g&&!h&&!b&&!v&&!w&&!S){if(!i){m("Error de autenticación.","error"),n("admin/login");return}x(!0);try{const a=new FormData;a.append("size_es",l),a.append("size_en",r),a.append("description_es",o),a.append("description_en",c),a.append("price1",d),a.append("price2",u),a.append("price3",p),await W("memberships",a,i),m("Membresía agregada correctamente.","success"),n("/admin/membresias")}catch{m("Ocurrió un error al guardar los datos.","error")}finally{x(!1)}}};return e.jsxs("div",{className:"h-screen flex flex-col lg:flex-row",children:[e.jsx(U,{page:1}),e.jsx("div",{className:"flex-1 flex-col space-y-4 overflow-y-auto h-full bg-background-darker dark:bg-background-deep p-16",children:e.jsx("form",{onSubmit:B,children:e.jsxs("div",{className:"bg-accent dark:bg-accent-dark rounded-custom p-8 flex flex-col",children:[e.jsx("span",{className:"font-normal mb-8",children:"Agregar tarifa de afiliación"}),e.jsxs("div",{className:"w-full flex flex-row space-x-4 mb-4",children:[e.jsx(s,{type:"text",label:"Tamaño",value:l,setValue:V,maxLength:128,status:L,width:"w-1/6",flag:"es"}),e.jsx(s,{type:"text",label:"Descripción",value:o,setValue:y,maxLength:128,status:I,width:"w-1/3",flag:"es"}),e.jsx(s,{type:"text",label:"Tamaño",value:r,setValue:j,maxLength:128,status:_,width:"w-1/6",flag:"en"}),e.jsx(s,{type:"text",label:"Descripción",value:c,setValue:E,maxLength:128,status:$,width:"w-1/3",flag:"en"})]}),e.jsxs("div",{className:"w-full flex flex-row space-x-4 mb-12",children:[e.jsx(s,{type:"text",label:"Sin alcohol",value:d,setValue:k,regExp:/^[0-9. ]*$/,maxLength:128,status:M,width:"w-1/6"}),e.jsx(s,{type:"text",label:"Cerveza y vinos",value:u,setValue:D,regExp:/^[0-9. ]*$/,maxLength:128,status:C,width:"w-1/6"}),e.jsx(s,{type:"text",label:"Licores",value:p,setValue:N,regExp:/^[0-9. ]*$/,maxLength:128,status:O,width:"w-1/6"}),e.jsx("div",{className:"w-1/2"})]}),e.jsx("button",{type:"submit",className:"w-full h-9 bg-primary hover:bg-primary-dark text-selected-dark px-2 py-1 rounded-lg text-sm font-medium mx-auto",children:q?"Guardando...":"Guardar"})]})})})]})};export{se as default};
