import{u as h,j as a,g as j,r as x,R as n,d as b,L as E}from"./index-BgHAPFty.js";import{H as w,F as T}from"./Header-D25Eto3m.js";import{a as L}from"./useFetch-B2zxbEOE.js";import{b as N,f as O}from"./formats-kQizPpwd.js";import"./fetch-DXQ-Dk4T.js";import"./url-BdNy_9Mu.js";const S=({date:r})=>{const{language:e}=h(),t=r.slice(0,4),o=r.slice(5,7),c=parseInt(r.slice(8,10),10),s=new Date(`${t}-${parseInt(o)}-01`).toLocaleString(e,{month:"short"}).toLocaleUpperCase();return a.jsxs("div",{className:"hidden lg:block w-36 h-36 bg-accent dark:bg-accent-dark rounded-custom flex-col",children:[a.jsx("span",{className:"w-full h-1/4 bg-primary rounded-t-custom flex items-center justify-center font-normal text-background",children:t}),a.jsxs("div",{className:"w-full h-3/4 flex flex-col space-y-1 justify-center items-center",children:[a.jsx("span",{className:"text-5xl font-bold",children:c}),a.jsx("span",{className:"font-bold text-primary",children:s})]})]})};function d(){return d=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},d.apply(this,arguments)}function P(r,e){if(r==null)return{};var t={},o=Object.keys(r),c,s;for(s=0;s<o.length;s++)c=o[s],!(e.indexOf(c)>=0)&&(t[c]=r[c]);return t}function B(r,e){if(r==null)return{};var t=P(r,e),o,c;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(c=0;c<s.length;c++)o=s[c],!(e.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(r,o)&&(t[o]=r[o])}return t}var v={exports:{}},F="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",C=F,R=C;function g(){}function k(){}k.resetWarningCache=g;var W=function(){function r(o,c,s,u,U,y){if(y!==R){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}}r.isRequired=r;function e(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:k,resetWarningCache:g};return t.PropTypes=t,t};v.exports=W();var _=v.exports;const l=j(_);var M=["variant","color","size"],Z=function(e){var t=e.color;return n.createElement(n.Fragment,null,n.createElement("path",{d:"M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm4.35 13.57a.746.746 0 0 1-1.03.26l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.48.67.26 1.03Z",fill:t}))},I=function(e){var t=e.color;return n.createElement(n.Fragment,null,n.createElement("path",{d:"m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2c-1.43 0-2.8.3-4.03.85",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},z=function(e){var t=e.color;return n.createElement(n.Fragment,null,n.createElement("path",{opacity:".4",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z",fill:t}),n.createElement("path",{d:"M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",fill:t}))},f=function(e){var t=e.color;return n.createElement(n.Fragment,null,n.createElement("path",{d:"M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"m15.71 15.18-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},D=function(e){var t=e.color;return n.createElement(n.Fragment,null,n.createElement("path",{d:"M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",fill:t}),n.createElement("path",{d:"M15.71 15.932a.67.67 0 0 1-.38-.11l-3.1-1.85c-.77-.46-1.34-1.47-1.34-2.36v-4.1c0-.41.34-.75.75-.75s.75.34.75.75v4.1c0 .36.3.89.61 1.07l3.1 1.85c.36.21.47.67.26 1.03a.77.77 0 0 1-.65.37Z",fill:t}))},$=function(e){var t=e.color;return n.createElement(n.Fragment,null,n.createElement("path",{d:"M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{opacity:".4",d:"m15.71 15.182-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},H=function(e,t){switch(e){case"Bold":return n.createElement(Z,{color:t});case"Broken":return n.createElement(I,{color:t});case"Bulk":return n.createElement(z,{color:t});case"Linear":return n.createElement(f,{color:t});case"Outline":return n.createElement(D,{color:t});case"TwoTone":return n.createElement($,{color:t});default:return n.createElement(f,{color:t})}},i=x.forwardRef(function(r,e){var t=r.variant,o=r.color,c=r.size,s=B(r,M);return n.createElement("svg",d({},s,{xmlns:"http://www.w3.org/2000/svg",ref:e,width:c,height:c,viewBox:"0 0 24 24",fill:"none"}),H(t,o))});i.propTypes={variant:l.oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:l.string,size:l.oneOfType([l.string,l.number])};i.defaultProps={variant:"Linear",color:"currentColor",size:"24"};i.displayName="Clock";const p=({children:r,classname:e})=>a.jsx("span",{className:`${e} bg-accent dark:bg-accent-dark py-1 px-4 rounded-custom inline-block`,children:r}),K=()=>{const r=b();var{event:e}=r.state||{};const{language:t}=h(),{data:o,isLoading:c,error:s,refetch:u}=L("events",e.id,t);return x.useEffect(()=>{u()},[t]),c?a.jsx(E,{}):s?a.jsx("div",{className:"text-center text-red-500",children:"Error al cargar eventos. Por favor, intenta nuevamente."}):(e=o==null?void 0:o.data,a.jsxs("div",{className:"flex flex-col min-h-screen w-full h-auto bg-background dark:bg-background-dark",children:[a.jsx(w,{page:2,isMutable:!1}),a.jsxs("div",{className:"w-content mx-auto mt-20 flex flex-col space-y-4 mb-12",children:[a.jsx("img",{src:e.img_path,alt:e.title,className:"w-full h-banner-mob lg:h-banner rounded-custom"}),a.jsxs("div",{className:"flex flex-col lg:flex-row w-full h-auto space-y-4 lg:space-y-0  lg:space-x-4",children:[a.jsxs("div",{className:"w-36 flex flex-col space-y-2",children:[a.jsx(S,{date:e.date}),a.jsx("div",{className:"hidden lg:block w-36 p-1 rounded-custom bg-accent dark:bg-accent-dark font-bold ",children:a.jsxs("div",{className:"flex flex-row space-x-2 justify-center",children:[a.jsx(i,{size:"24",color:"#00768d",variant:"Bulk"}),a.jsx("span",{children:e.time})]})})]}),a.jsxs("div",{className:"w-full flex flex-col space-y-2",children:[a.jsx("span",{className:"font-normal inline-block",children:e.title}),a.jsxs("div",{className:"flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2",children:[a.jsx("div",{children:a.jsx(p,{children:e.address})}),a.jsxs("div",{className:"block lg:hidden flex-row space-x-2",children:[a.jsx(p,{children:N(e.date,t)}),a.jsx(p,{children:e.time})]})]}),a.jsx("span",{className:"font-bold text-primary inline-block",children:O(e.price)}),a.jsx("span",{className:"inline-block",children:e.description})]})]})]}),a.jsx(T,{})]}))};export{p as EventTag,K as default};